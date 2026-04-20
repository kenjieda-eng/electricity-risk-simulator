#!/usr/bin/env node
/**
 * PageSpeed Insights API ベースライン計測スクリプト
 *
 * ローカル Lighthouse CLI の測定ノイズを避け、Google 側で Lighthouse を実行
 * して安定した Perf / LCP / TBT / CLS / FCP を取得する。
 *
 * 使い方:
 *   node scripts/psi-baseline.mjs --label before-chart-defer
 *   node scripts/psi-baseline.mjs --urls "/,/compare" --runs 3 --label quick
 *   node scripts/psi-baseline.mjs --strategy mobile --label mobile-only
 *
 * オプション:
 *   --label <string>       必須。出力ファイル名とヘッダに反映される。
 *   --urls <csv>           デフォルト: "/,/compare,/articles,/how-to,/business-electricity-retrospective"
 *                          先頭スラッシュ付きパス or 完全 URL 可。
 *   --runs <n>             デフォルト 5。
 *   --interval <秒>        runs 間の sleep 秒数（デフォルト 60）。PSI API 内部キャッシュ回避用。
 *                          0 を指定すると従来動作（連続実行、キャッシュ返却リスクあり）。
 *   --strategy <m|d|both>  デフォルト both。
 *   --category <csv>       デフォルト "performance,accessibility,best-practices,seo"。
 *   --base <url>           デフォルト "https://simulator.eic-jp.org"。
 *   --key <string>         PSI API キー。省略時は .env.local の PSI_API_KEY、それも無ければキーなしで実行。
 *
 * 注: --interval 0 は PSI API 内部キャッシュによって runs が「完全同値」で返る可能性が
 *   あります。これは測定の安定性ではなくキャッシュ起因のため、退行判定には使えません。
 *   デフォルト 60 秒以上を推奨します（タスク E 副次発見、
 *   .ai-team/HOME_LCP_REGRESSION_INVESTIGATION_2026-04-20.md 参照）。
 *
 * .env.local（任意）:
 *   PSI_API_KEY=xxxxxxxxxxxxxxxxx
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// .env.local ローダ（search-console-analysis.mjs と同パターン）
// ---------------------------------------------------------------------------
function loadEnv() {
  const envPath = resolve(ROOT, ".env.local");
  if (!existsSync(envPath)) return {};
  const content = readFileSync(envPath, "utf-8")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n");
  const env = {};
  const re = /^([A-Z_][A-Z0-9_]*)=("(?:[^"\\]|\\.)*"|[^\n]*)/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const key = m[1];
    let value = m[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"');
    }
    env[key] = value;
  }
  return env;
}

// ---------------------------------------------------------------------------
// CLI 引数パース
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      out[key] = true;
    } else {
      out[key] = next;
      i++;
    }
  }
  return out;
}

const args = parseArgs(process.argv);
const env = loadEnv();

if (!args.label) {
  console.error("Error: --label <string> is required.");
  console.error('  例: node scripts/psi-baseline.mjs --label before-chart-defer');
  process.exit(1);
}

const LABEL = String(args.label);
const BASE = String(args.base || "https://simulator.eic-jp.org").replace(/\/$/, "");
const RUNS = Math.max(1, parseInt(args.runs ?? "5", 10));
const INTERVAL = Math.max(0, parseInt(args.interval ?? "60", 10));
const STRATEGY_ARG = String(args.strategy || "both").toLowerCase();
const STRATEGIES =
  STRATEGY_ARG === "mobile" ? ["mobile"] :
  STRATEGY_ARG === "desktop" ? ["desktop"] :
  ["mobile", "desktop"];
const CATEGORIES = String(
  args.category || "performance,accessibility,best-practices,seo"
).split(",").map((s) => s.trim()).filter(Boolean);
const URLS_RAW = String(
  args.urls || "/,/compare,/articles,/how-to,/business-electricity-retrospective"
).split(",").map((s) => s.trim()).filter(Boolean);
const PSI_API_KEY = String(args.key || env.PSI_API_KEY || "");

const URLS = URLS_RAW.map((u) => (u.startsWith("http") ? u : BASE + u));
const PATHS = URLS_RAW.map((u) => (u.startsWith("http") ? new URL(u).pathname : u));

console.log(`[psi] label=${LABEL} runs=${RUNS} interval=${INTERVAL}s strategies=${STRATEGIES.join(",")} urls=${URLS.length}`);
if (!PSI_API_KEY) console.log("[psi] no API key — running unauthenticated (rate-limited)");
if (INTERVAL === 0) {
  console.log("[psi] WARNING: --interval 0 may cause PSI to return cached identical results across runs. Use only for regression re-tests.");
}

// ---------------------------------------------------------------------------
// PSI API 呼び出し（retry 付き）
// ---------------------------------------------------------------------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callPSI(url, strategy, attempt = 1) {
  const q = new URLSearchParams({ url, strategy });
  for (const cat of CATEGORIES) q.append("category", cat);
  if (PSI_API_KEY) q.set("key", PSI_API_KEY);
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q.toString()}`;
  const res = await fetch(endpoint);
  if (res.status === 429) {
    if (attempt > 3) throw new Error(`429 rate-limited after 3 retries: ${url} (${strategy})`);
    console.log(`  [retry] 429 — sleep 2s (attempt ${attempt})`);
    await sleep(2000);
    return callPSI(url, strategy, attempt + 1);
  }
  if (res.status >= 500) {
    if (attempt > 3) throw new Error(`5xx after 3 retries: ${url} (${strategy})`);
    console.log(`  [retry] ${res.status} — sleep 60s (attempt ${attempt})`);
    await sleep(60000);
    return callPSI(url, strategy, attempt + 1);
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PSI ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

function extract(data) {
  const lh = data.lighthouseResult;
  if (!lh) throw new Error("no lighthouseResult in PSI response");
  const cat = lh.categories || {};
  const aud = lh.audits || {};
  const score = (k) => (cat[k] ? Math.round(cat[k].score * 100) : null);
  const num = (k) => (aud[k]?.numericValue ?? null);
  return {
    perf: score("performance"),
    a11y: score("accessibility"),
    bp: score("best-practices"),
    seo: score("seo"),
    lcpMs: num("largest-contentful-paint"),
    tbtMs: num("total-blocking-time"),
    cls: num("cumulative-layout-shift"),
    fcpMs: num("first-contentful-paint"),
  };
}

// ---------------------------------------------------------------------------
// 中央値（偶数個なら下側）
// ---------------------------------------------------------------------------
function median(arr) {
  const xs = arr.filter((v) => v != null).slice().sort((a, b) => a - b);
  if (xs.length === 0) return null;
  return xs[Math.floor((xs.length - 1) / 2)];
}

// ---------------------------------------------------------------------------
// メトリクス整形
// ---------------------------------------------------------------------------
const fmtMs = (ms) => (ms == null ? "-" : (ms / 1000).toFixed(1) + "s");
const fmtTbt = (ms) => (ms == null ? "-" : Math.round(ms) + "ms");
const fmtCls = (v) => (v == null ? "-" : v.toFixed(3));

// ---------------------------------------------------------------------------
// メイン
// ---------------------------------------------------------------------------
async function main() {
  const results = {};
  for (const strategy of STRATEGIES) {
    results[strategy] = {};
    for (let i = 0; i < URLS.length; i++) {
      const url = URLS[i];
      const path = PATHS[i];
      results[strategy][path] = [];
      for (let run = 1; run <= RUNS; run++) {
        process.stdout.write(`[${strategy}] ${path} run ${run}/${RUNS} ... `);
        try {
          const data = await callPSI(url, strategy);
          const m = extract(data);
          results[strategy][path].push(m);
          console.log(`perf=${m.perf} lcp=${fmtMs(m.lcpMs)} tbt=${fmtTbt(m.tbtMs)}`);
        } catch (err) {
          console.log(`FAILED: ${err.message}`);
          results[strategy][path].push(null);
        }
        const isLastRunForUrl = run === RUNS;
        if (!isLastRunForUrl && INTERVAL > 0) {
          // PSI 内部キャッシュを避けるため、runs 間に明示的な待機を挟む
          console.log(`  [wait ${INTERVAL}s for cache freshness]`);
          await sleep(INTERVAL * 1000);
        } else {
          // URL 間の軽いレート制御: key ありは 1 req/s、なしは 1.5 req/s
          await sleep(PSI_API_KEY ? 1000 : 1500);
        }
      }
    }
  }

  // -----------------------------------------------------------------------
  // Markdown 出力
  // -----------------------------------------------------------------------
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const ymd = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
  const hm = `${pad(now.getHours())}${pad(now.getMinutes())}`;
  const outDir = resolve(ROOT, ".ai-team");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, `PSI_MEASUREMENT_${ymd}_${hm}.md`);

  const lines = [];
  lines.push(`# PSI 計測結果（${ymd} ${pad(now.getHours())}:${pad(now.getMinutes())} JST / label: ${LABEL}）`);
  lines.push("");
  lines.push(`**API**: PageSpeed Insights v5`);
  lines.push(`**Runs per URL**: ${RUNS}（中央値採用）`);
  lines.push(`**Interval**: ${INTERVAL}s${INTERVAL === 0 ? "（⚠️ PSI キャッシュで同値が返る可能性あり）" : ""}`);
  lines.push(`**計測対象**: \`${BASE}\``);
  lines.push(`**Categories**: ${CATEGORIES.join(", ")}`);
  lines.push("");

  for (const strategy of STRATEGIES) {
    const label = strategy === "mobile" ? "Mobile" : "Desktop";
    lines.push(`## ${label}（中央値）`);
    lines.push("");
    lines.push("| ページ | Perf | A11y | BP | SEO | LCP | TBT | CLS | FCP |");
    lines.push("|---|:-:|:-:|:-:|:-:|---|---|---|---|");
    for (const path of PATHS) {
      const runs = results[strategy][path] || [];
      const valid = runs.filter((r) => r != null);
      if (valid.length === 0) {
        lines.push(`| \`${path}\` | - | - | - | - | - | - | - | - |`);
        continue;
      }
      const mPerf = median(valid.map((r) => r.perf));
      const mA11y = median(valid.map((r) => r.a11y));
      const mBp = median(valid.map((r) => r.bp));
      const mSeo = median(valid.map((r) => r.seo));
      const mLcp = median(valid.map((r) => r.lcpMs));
      const mTbt = median(valid.map((r) => r.tbtMs));
      const mCls = median(valid.map((r) => r.cls));
      const mFcp = median(valid.map((r) => r.fcpMs));
      lines.push(
        `| \`${path}\` | **${mPerf}** | ${mA11y} | ${mBp} | ${mSeo} | ${fmtMs(mLcp)} | ${fmtTbt(mTbt)} | ${fmtCls(mCls)} | ${fmtMs(mFcp)} |`
      );
    }
    lines.push("");

    lines.push(`## ${label} 生データ（${RUNS} runs）`);
    lines.push("");
    const runCols = Array.from({ length: RUNS }, (_, i) => `run${i + 1}`).join("/");
    lines.push(`| ページ | Perf (${runCols}) | LCP (${runCols}) | TBT (${runCols}) |`);
    lines.push("|---|---|---|---|");
    for (const path of PATHS) {
      const runs = results[strategy][path] || [];
      const perfs = runs.map((r) => (r == null ? "x" : String(r.perf))).join("/");
      const lcps = runs.map((r) => (r == null ? "x" : fmtMs(r.lcpMs))).join("/");
      const tbts = runs.map((r) => (r == null ? "x" : fmtTbt(r.tbtMs))).join("/");
      lines.push(`| \`${path}\` | ${perfs} | ${lcps} | ${tbts} |`);
    }
    lines.push("");
  }

  writeFileSync(outPath, lines.join("\n"), "utf-8");
  console.log("");
  console.log(`[psi] wrote ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
