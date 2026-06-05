#!/usr/bin/env node
/**
 * 再エネ賦課金プロース・ドリフト検出器（レポート専用 / 本体は変更しない）。
 *
 * 目的:
 *   C-1（PR#216）で賦課金単価の SSOT（src/lib/data/renewableSurcharge.ts）が確立した後も、
 *   記事本文には告示前予測の残存ベタ書き（例:「2026年度4.5円/kWh前後」※確定値は4.18）が残る。
 *   このスクリプトは SSOT と食い違う本文中の単価を「検出してレポートする」だけで、
 *   コード・記事・データ本体は一切変更しない。
 *
 * SSOT 読込:
 *   src/lib/data/renewableSurcharge.ts を TS import せずテキストパースし、
 *   fiscalYear と unitPriceYenPerKwh の組を抽出する（15行未満ならエラー終了）。
 *
 * 走査対象:
 *   - src/app/** /page.tsx
 *   - src/lib/** /*.ts
 *   - src/data/** /*.ts
 *   （renewableSurcharge.ts 自身とそのテストは対象外）
 *
 * 検出ルール（各行 + 前後2行のコンテキスト窓で判定）:
 *   a. 窓内に「賦課金」を含む
 *   b. 行に 単価リテラル /(\d{1,2}(?:\.\d{1,2})?)\s*円\/?kWh/ がある
 *   c. 単価リテラルを「同一行で最も近い年度参照 /(20[2-3]\d)年度/」と対にし、
 *      SSOT 値と比較 → 不一致なら検出。年度に対応できなければ「年度不明・要目視」へ。
 *   d. 除外:
 *      - 窓内に「燃料費調整」または「燃調」を含む（燃料費調整額のレンジ等を賦課金と誤検出しない）
 *      - 「〜 / ～」でレンジを成す数値（例: +3.0〜+4.5円/kWh は燃調レンジ）
 *      - 「+ / ＋」で始まる増分値（例: 2023年度比で+3.2円/kWh は差分であり絶対単価ではない）
 *      - renewableSurcharge.ts 自身とそのテスト
 *
 * 年度との対応付け:
 *   単価が属する「文」（句点「。」区切り）内の最も近い年度参照と対にする。
 *   ・単価が「文内のいずれかの年度のSSOT値」と一致 → 正値として検出しない。
 *   ・一致せず、最近傍年度が近接（MAX_PAIR_GAP以内）→ 不一致として検出。
 *   ・一致せず、最近傍年度が離れている／文内に年度なし → 年度不明・要目視。
 *
 * 出力:
 *   - stdout: 検出サマリ（走査/検出ファイル数・件数・年度別内訳）
 *   - .ai-team/SURCHARGE_DRIFT_REPORT_<DATE>.md: 詳細（file:line / 検出文字列 / 年度 / 期待値 / 分類）
 *
 * 終了コード:
 *   - 常に 0（レポート専用）。
 *   - --strict 指定時のみ「不一致 > 0」で 1 を返す（現時点では CI には組み込まない）。
 *   - SSOT が読めない / 15行未満の場合のみ 2（設定エラー）。
 *
 * 実行: node scripts/check-surcharge-drift.mjs [--strict]
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");

// ベースライン基準日。再現性のため固定（必要なら SURCHARGE_REPORT_DATE で上書き可）。
const REPORT_DATE = process.env.SURCHARGE_REPORT_DATE || "2026-06-05";
const REPORT_FILE = path.join(ROOT, ".ai-team", `SURCHARGE_DRIFT_REPORT_${REPORT_DATE}.md`);
const SSOT_FILE = path.join(ROOT, "src", "lib", "data", "renewableSurcharge.ts");

const STRICT = process.argv.includes("--strict");

// 単価リテラル: 1〜2桁（小数2桁まで）+ 「円/kWh」または「円kWh」。
const PRICE_RE = /(\d{1,2}(?:\.\d{1,2})?)\s*円\/?kWh/g;
// 年度参照: 2020〜2039年度。
const YEAR_RE = /(20[2-3]\d)年度/g;
const YEAR_TEST_RE = /20[2-3]\d年度/;
// 年度と単価を対にできる最大距離（文字数）。「2026年度予測（4.5円/kWh」等の挟み込みを許容。
const MAX_PAIR_GAP = 12;
// コンテキスト窓の上下行数。
const CONTEXT = 2;

/** SSOT を正準化された Map<year, price> として読み込む。 */
async function loadSsot() {
  let raw;
  try {
    raw = await fs.readFile(SSOT_FILE, "utf8");
  } catch (err) {
    throw new Error(`SSOT を読み込めません: ${path.relative(ROOT, SSOT_FILE)} (${err.message})`);
  }
  // 各オブジェクト内では fiscalYear が先、unitPriceYenPerKwh が後に並ぶ。
  // 非貪欲マッチで両者を1組として抽出する。
  const pairRe = /fiscalYear:\s*(\d{4})[\s\S]*?unitPriceYenPerKwh:\s*(-?\d+(?:\.\d+)?)/g;
  const map = new Map();
  for (const m of raw.matchAll(pairRe)) {
    map.set(Number(m[1]), Number(m[2]));
  }
  if (map.size < 15) {
    throw new Error(
      `SSOT から年度×単価の組を15行以上抽出できませんでした（取得 ${map.size} 件）。` +
        `renewableSurcharge.ts の構造変更を確認してください。`
    );
  }
  return map;
}

/** ディレクトリを再帰走査し、predicate を満たすファイルの絶対パスを返す（決定的順序）。 */
async function walk(dir, predicate) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  entries.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  const out = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      out.push(...(await walk(full, predicate)));
    } else if (entry.isFile() && predicate(full, entry.name)) {
      out.push(full);
    }
  }
  return out;
}

/** 走査対象ファイル一覧（SSOT 本体とそのテストは除外）。 */
async function collectTargets() {
  const isSsotSelf = (full) => /renewableSurcharge/i.test(full);
  const appFiles = await walk(path.join(ROOT, "src", "app"), (_full, name) => name === "page.tsx");
  const libFiles = await walk(
    path.join(ROOT, "src", "lib"),
    (full, name) => name.endsWith(".ts") && !name.endsWith(".d.ts") && !isSsotSelf(full)
  );
  const dataFiles = await walk(
    path.join(ROOT, "src", "data"),
    (full, name) => name.endsWith(".ts") && !isSsotSelf(full)
  );
  // 重複排除しつつ決定的順序を維持。
  return [...new Set([...appFiles, ...libFiles, ...dataFiles])];
}

/** 単価が属する「文」（句点「。」区切り）の範囲 [start, end) を返す。 */
function sentenceBounds(line, idx) {
  const prev = line.lastIndexOf("。", idx);
  const start = prev === -1 ? 0 : prev + 1;
  const next = line.indexOf("。", idx);
  const end = next === -1 ? line.length : next;
  return [start, end];
}

/**
 * 同一文内で単価リテラルに最も近い年度参照を返す（先行を優先、無ければ後続）。
 * 文スコープのため距離制限は設けない。{ year, gap } または null。
 */
function nearestYearInSentence(years, segStart, segEnd, priceStart, priceEnd) {
  const inSeg = years.filter((y) => y.start >= segStart && y.end <= segEnd);
  let best = null;
  let bestGap = Infinity;
  for (const y of inSeg) {
    if (y.end <= priceStart) {
      const gap = priceStart - y.end;
      if (gap < bestGap) {
        best = y;
        bestGap = gap;
      }
    }
  }
  if (best) return { year: best.year, gap: bestGap };
  for (const y of inSeg) {
    if (y.start >= priceEnd) {
      const gap = y.start - priceEnd;
      if (gap < bestGap) {
        best = y;
        bestGap = gap;
      }
    }
  }
  return best ? { year: best.year, gap: bestGap } : null;
}

/** 検出文字列（読みやすい前後文脈つきスニペット）。 */
function makeSnippet(line, start, end) {
  const from = Math.max(0, start - 14);
  const to = Math.min(line.length, end + 8);
  let snip = line.slice(from, to).trim();
  if (from > 0) snip = "…" + snip;
  if (to < line.length) snip += "…";
  return snip.replace(/\|/g, "\\|");
}

function approxEqual(a, b) {
  return Math.abs(a - b) < 1e-9;
}

async function scanFile(file, ssot) {
  const raw = await fs.readFile(file, "utf8");
  const lines = raw.split(/\r?\n/);
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  const mismatches = [];
  const unknowns = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const priceMatches = [...line.matchAll(PRICE_RE)];
    if (priceMatches.length === 0) continue;

    const from = Math.max(0, i - CONTEXT);
    const to = Math.min(lines.length - 1, i + CONTEXT);
    const windowText = lines.slice(from, to + 1).join("\n");

    // a. 賦課金コンテキストでなければ対象外。
    if (!windowText.includes("賦課金")) continue;
    // d. 燃料費調整（燃調）コンテキストは丸ごと除外。
    if (windowText.includes("燃料費調整") || windowText.includes("燃調")) continue;

    const years = [...line.matchAll(YEAR_RE)].map((m) => ({
      year: Number(m[1]),
      start: m.index,
      end: m.index + m[0].length,
    }));
    const windowHasYear = YEAR_TEST_RE.test(windowText);

    for (const pm of priceMatches) {
      const actual = Number(pm[1]);
      const start = pm.index;
      const end = pm.index + pm[0].length;
      const snippet = makeSnippet(line, start, end);

      // d. レンジ（〜 / ～）の右辺、または増分（+ / ＋）は絶対単価でないため除外。
      const prefix = line.slice(Math.max(0, start - 6), start);
      if (/[〜～+＋]/.test(prefix)) continue;

      // 同一文スコープで最近傍の年度に対応付ける。
      const [segStart, segEnd] = sentenceBounds(line, start);
      const paired = nearestYearInSentence(years, segStart, segEnd, start, end);

      if (paired == null) {
        const note = windowHasYear ? "同一文に年度参照なし(窓内に年度あり)" : "年度参照なし";
        unknowns.push({ file: rel, line: i + 1, snippet, actual, note });
        continue;
      }
      if (!ssot.has(paired.year)) {
        unknowns.push({ file: rel, line: i + 1, snippet, actual, note: `SSOT未収録年度(${paired.year})` });
        continue;
      }
      const expected = ssot.get(paired.year);
      // 文内年度のSSOT値と一致するなら正値 → 検出しない（年度語との距離は問わない）。
      if (approxEqual(actual, expected)) continue;
      if (paired.gap <= MAX_PAIR_GAP) {
        mismatches.push({ file: rel, line: i + 1, snippet, year: paired.year, expected, actual });
      } else {
        unknowns.push({
          file: rel,
          line: i + 1,
          snippet,
          actual,
          note: `近傍年度(${paired.year})と距離大・要目視`,
        });
      }
    }
  }
  return { mismatches, unknowns };
}

function bySortKey(a, b) {
  if (a.file !== b.file) return a.file < b.file ? -1 : 1;
  return a.line - b.line;
}

function buildReport(ssot, scannedCount, mismatches, unknowns) {
  const mismatchFiles = new Set(mismatches.map((d) => d.file));
  const unknownFiles = new Set(unknowns.map((d) => d.file));
  const detectedFiles = new Set([...mismatchFiles, ...unknownFiles]);

  // 年度別内訳（不一致のみ）。
  const byYear = new Map();
  for (const d of mismatches) {
    byYear.set(d.year, (byYear.get(d.year) || 0) + 1);
  }
  const years = [...byYear.keys()].sort((a, b) => a - b);

  const ssotYears = [...ssot.keys()].sort((a, b) => a - b);

  const L = [];
  L.push(`# 再エネ賦課金 プロース・ドリフト検出レポート（ベースライン）`);
  L.push("");
  L.push(`- 生成: \`scripts/check-surcharge-drift.mjs\`（レポート専用 / 本体無変更）`);
  L.push(`- 基準日: ${REPORT_DATE}`);
  L.push(`- SSOT: \`src/lib/data/renewableSurcharge.ts\`（${ssot.size}年度）`);
  L.push("");
  L.push(`## サマリ`);
  L.push("");
  L.push(`- 走査ファイル数: ${scannedCount}`);
  L.push(`- 検出ファイル数: ${detectedFiles.size}（不一致 ${mismatchFiles.size} / 年度不明 ${unknownFiles.size}）`);
  L.push(`- 検出総件数: ${mismatches.length + unknowns.length}（不一致 ${mismatches.length} / 年度不明 ${unknowns.length}）`);
  L.push("");
  L.push(`## 年度別内訳（不一致）`);
  L.push("");
  if (years.length === 0) {
    L.push(`（不一致なし）`);
  } else {
    L.push(`| 年度 | SSOT確定値(円/kWh) | 不一致件数 |`);
    L.push(`|---|---|---|`);
    for (const y of years) {
      const ssotVal = ssot.has(y) ? ssot.get(y) : "—";
      L.push(`| ${y}年度 | ${ssotVal} | ${byYear.get(y)} |`);
    }
  }
  L.push("");
  L.push(`## 不一致 一覧（${mismatches.length}件）`);
  L.push("");
  if (mismatches.length === 0) {
    L.push(`（なし）`);
  } else {
    L.push(`| # | file:line | 検出文字列 | 年度 | 期待値(SSOT) | 実値 |`);
    L.push(`|---|---|---|---|---|---|`);
    mismatches.sort(bySortKey).forEach((d, idx) => {
      L.push(
        `| ${idx + 1} | \`${d.file}:${d.line}\` | ${d.snippet} | ${d.year}年度 | ${d.expected} | ${d.actual} |`
      );
    });
  }
  L.push("");
  L.push(`## 年度不明・要目視 一覧（${unknowns.length}件）`);
  L.push("");
  L.push(`> 年度と確実に対にできなかった賦課金近傍の単価。SSOT比較ではなく人手確認が必要。`);
  L.push("");
  if (unknowns.length === 0) {
    L.push(`（なし）`);
  } else {
    L.push(`| # | file:line | 検出文字列 | 実値 | 備考 |`);
    L.push(`|---|---|---|---|---|`);
    unknowns.sort(bySortKey).forEach((d, idx) => {
      L.push(`| ${idx + 1} | \`${d.file}:${d.line}\` | ${d.snippet} | ${d.actual} | ${d.note} |`);
    });
  }
  L.push("");
  L.push(`## 参照: SSOT 確定値`);
  L.push("");
  L.push(`| 年度 | 単価(円/kWh) |`);
  L.push(`|---|---|`);
  for (const y of ssotYears) {
    L.push(`| ${y}年度 | ${ssot.get(y)} |`);
  }
  L.push("");
  return L.join("\n");
}

async function main() {
  const ssot = await loadSsot();
  const targets = await collectTargets();

  const allMismatches = [];
  const allUnknowns = [];
  for (const file of targets) {
    const { mismatches, unknowns } = await scanFile(file, ssot);
    allMismatches.push(...mismatches);
    allUnknowns.push(...unknowns);
  }
  allMismatches.sort(bySortKey);
  allUnknowns.sort(bySortKey);

  const report = buildReport(ssot, targets.length, allMismatches, allUnknowns);
  await fs.writeFile(REPORT_FILE, report, "utf8");

  // 年度別内訳（stdout）。
  const byYear = new Map();
  for (const d of allMismatches) byYear.set(d.year, (byYear.get(d.year) || 0) + 1);
  const mismatchFiles = new Set(allMismatches.map((d) => d.file));
  const unknownFiles = new Set(allUnknowns.map((d) => d.file));
  const detectedFiles = new Set([...mismatchFiles, ...unknownFiles]);

  console.log(`\n再エネ賦課金 ドリフト検出（レポート専用）`);
  console.log(`SSOT: ${ssot.size}年度を読込（${[...ssot.keys()].sort((a, b) => a - b).join(", ")}）`);
  console.log(`走査ファイル数: ${targets.length}`);
  console.log(`検出ファイル数: ${detectedFiles.size}（不一致 ${mismatchFiles.size} / 年度不明 ${unknownFiles.size}）`);
  console.log(`検出総件数: ${allMismatches.length + allUnknowns.length}（不一致 ${allMismatches.length} / 年度不明 ${allUnknowns.length}）`);
  if (byYear.size > 0) {
    console.log(`年度別内訳（不一致）:`);
    for (const y of [...byYear.keys()].sort((a, b) => a - b)) {
      const ssotVal = ssot.has(y) ? ssot.get(y) : "—";
      console.log(`  ${y}年度（SSOT ${ssotVal}円/kWh）: ${byYear.get(y)}件`);
    }
  }
  console.log(`レポート: ${path.relative(ROOT, REPORT_FILE).split(path.sep).join("/")}`);
  if (STRICT && allMismatches.length > 0) {
    console.log(`\n--strict: 不一致 ${allMismatches.length}件のため exit 1`);
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(`[check-surcharge-drift] エラー: ${err.message}`);
  process.exit(2);
});
