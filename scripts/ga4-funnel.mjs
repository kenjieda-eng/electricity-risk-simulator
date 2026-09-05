#!/usr/bin/env node
/**
 * GA4 CVファネル観測スクリプト（simulator.eic-jp.org 限定・読み取り専用）
 *
 * 使い方:
 *   node scripts/ga4-funnel.mjs --from=2026-08-19 --to=2026-09-04
 *   node scripts/ga4-funnel.mjs --from=2026-08-19 --to=2026-09-04 --baseline=2026-09-02
 *
 * 出力:
 *   すべて stdout。**ファイルは一切書き出さない**（fs の書き込みAPIを import していない）。
 *   scripts/ga4-report.mjs は .ai-team/ へ Markdown を書き出すが、本スクリプトはその部分を踏襲しない。
 *
 * 出力4種:
 *   (1) 日別 × イベント（eventCount）＋ pagePath="/contact" の screenPageViews（contact_pv）
 *   (2) --baseline 指定時の前後比較（baseline当日は「混在日」として別行）
 *   (3) デバイス別（deviceCategory）の期間合計と CTR
 *   (4) カスタムディメンション customEvent:cta_from / customEvent:inquiry_type の内訳
 *       ★未登録だと GA4 API が 400 を返すため、エラー本文を1行表示して続行する（登録状況の検出を兼ねる）
 *
 * 仕様:
 *   - 認証・hostname フィルタ・.env.local 読込は scripts/ga4-report.mjs と同一方式
 *   - hostname = "simulator.eic-jp.org" のみ（eic-jp.org は除外）
 *   - GA4 は直近1〜2日が処理中で過少になり得る。値の解釈は利用側で行う（本スクリプトは判定しない）
 */

import { google } from "googleapis";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// --- .env.local 読み込み（読み取りのみ） ---
const envPath = resolve(ROOT, ".env.local");
const envContent = readFileSync(envPath, "utf-8")
  .replace(/\r\n/g, "\n")
  .replace(/\r/g, "\n");
const env = {};
const envRegex = /^([A-Z_][A-Z0-9_]*)=("(?:[^"\\]|\\.)*"|[^\n]*)/gm;
let m;
while ((m = envRegex.exec(envContent)) !== null) {
  const key = m[1];
  let value = m[2].trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"');
  }
  env[key] = value;
}

const PROPERTY_ID = env.GA4_PROPERTY_ID;
const CLIENT_EMAIL = env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = env.GOOGLE_PRIVATE_KEY;
if (!PROPERTY_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
  console.error(".env.local に GA4_PROPERTY_ID / GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY が必要です");
  process.exit(1);
}

// --- 引数解析 ---
const arg = (name) => process.argv.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const FROM = arg("from");
const TO = arg("to");
const BASELINE = arg("baseline");

const YMD = /^\d{4}-\d{2}-\d{2}$/;
function usage(message) {
  console.error(message);
  console.error("");
  console.error("使い方: node scripts/ga4-funnel.mjs --from=YYYY-MM-DD --to=YYYY-MM-DD [--baseline=YYYY-MM-DD]");
  process.exit(1);
}
if (!FROM || !TO) usage("--from と --to は必須です。");
if (!YMD.test(FROM)) usage(`--from の形式が不正です: ${FROM}`);
if (!YMD.test(TO)) usage(`--to の形式が不正です: ${TO}`);
if (FROM > TO) usage(`--from は --to 以前である必要があります: ${FROM} > ${TO}`);
if (BASELINE !== undefined) {
  if (!YMD.test(BASELINE)) usage(`--baseline の形式が不正です: ${BASELINE}`);
  if (BASELINE < FROM || BASELINE > TO) usage(`--baseline は --from〜--to の範囲内である必要があります: ${BASELINE}`);
}

// --- 日付ユーティリティ（UTC固定で計算し、タイムゾーンの影響を受けない） ---
function shiftDate(ymd, days) {
  const [y, mo, d] = ymd.split("-").map(Number);
  return new Date(Date.UTC(y, mo - 1, d) + days * 86400000).toISOString().slice(0, 10);
}
function dayCount(fromYmd, toYmd) {
  const [y1, m1, d1] = fromYmd.split("-").map(Number);
  const [y2, m2, d2] = toYmd.split("-").map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000) + 1;
}

// --- 観測対象 ---
const FUNNEL_EVENTS = [
  "contact_cta_view",
  "contact_cta_click",
  "cta_click",
  "cta_dismiss",
  "contact_type_selected",
  "contact_form_submitted",
  "download_completed",
];
const DEVICE_EVENTS = ["contact_cta_view", "contact_cta_click", "cta_click", "cta_dismiss"];
const CONTACT_PATH = "/contact";

const auth = new google.auth.JWT({
  email: CLIENT_EMAIL,
  key: PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
});
const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

const hostnameFilter = {
  filter: {
    fieldName: "hostname",
    stringFilter: { matchType: "EXACT", value: "simulator.eic-jp.org" },
  },
};
const eventInListFilter = (names) => ({
  filter: { fieldName: "eventName", inListFilter: { values: names } },
});
const andGroup = (...expressions) => ({ andGroup: { expressions } });

async function runReport(requestBody) {
  const res = await analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody,
  });
  return res.data.rows || [];
}

/** エラー本文を1行に潰す（未登録ディメンションの検出に使う） */
function oneLineError(err) {
  const detail =
    err?.response?.data?.error?.message ??
    err?.errors?.[0]?.message ??
    err?.message ??
    String(err);
  return String(detail).replace(/\s+/g, " ").trim();
}

// --- 表示ユーティリティ ---
const num = (v) => Number(v ?? 0);
const fmtAvg = (v) => v.toFixed(2);
const fmtPct = (v) => `${v.toFixed(2)}%`;

/** 列幅を全セルから決める表。numericCols に含む列は右寄せ。 */
function table(header, rows, numericCols = []) {
  const widths = header.map((h, i) =>
    Math.max(String(h).length, ...rows.map((r) => String(r[i] ?? "").length))
  );
  const pad = (s, i) =>
    numericCols.includes(i) ? String(s).padStart(widths[i]) : String(s).padEnd(widths[i]);
  const line = (cols) => cols.map(pad).join(" | ");
  return [line(header), widths.map((w) => "-".repeat(w)).join("-+-"), ...rows.map(line)].join("\n");
}

function ymdFromGa(v) {
  return `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6)}`;
}

async function main() {
  console.log(`GA4 CVファネル観測: ${FROM} 〜 ${TO}（hostname=simulator.eic-jp.org）`);
  if (BASELINE) console.log(`baseline: ${BASELINE}（当日は前後どちらにも入れず「混在日」として別行に出す）`);
  console.log(`イベント: ${FUNNEL_EVENTS.join(" / ")}`);
  console.log(`contact_pv: pagePath="${CONTACT_PATH}"（完全一致）の screenPageViews`);
  console.log("※ GA4 は直近1〜2日が処理中で過少になり得る（本スクリプトは判定を行わない）");

  // ============ (1) 日別 × イベント ============
  const dailyEventRows = await runReport({
    dateRanges: [{ startDate: FROM, endDate: TO }],
    dimensions: [{ name: "date" }, { name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: andGroup(hostnameFilter, eventInListFilter(FUNNEL_EVENTS)),
    orderBys: [{ dimension: { dimensionName: "date" } }],
    limit: 100000,
  });

  const dailyPvRows = await runReport({
    dateRanges: [{ startDate: FROM, endDate: TO }],
    dimensions: [{ name: "date" }],
    metrics: [{ name: "screenPageViews" }],
    dimensionFilter: andGroup(hostnameFilter, {
      filter: {
        fieldName: "pagePath",
        stringFilter: { matchType: "EXACT", value: CONTACT_PATH },
      },
    }),
    orderBys: [{ dimension: { dimensionName: "date" } }],
    limit: 100000,
  });

  // 日付の全域を作る（データが無い日も 0 行として出す）
  const byDate = new Map();
  for (let d = FROM; d <= TO; d = shiftDate(d, 1)) {
    const row = { contact_pv: 0 };
    for (const e of FUNNEL_EVENTS) row[e] = 0;
    byDate.set(d, row);
  }
  for (const r of dailyEventRows) {
    const d = ymdFromGa(r.dimensionValues[0].value);
    const ev = r.dimensionValues[1].value;
    if (byDate.has(d) && ev in byDate.get(d)) byDate.get(d)[ev] += num(r.metricValues[0].value);
  }
  for (const r of dailyPvRows) {
    const d = ymdFromGa(r.dimensionValues[0].value);
    if (byDate.has(d)) byDate.get(d).contact_pv += num(r.metricValues[0].value);
  }

  const COLS = [...FUNNEL_EVENTS, "contact_pv"];
  const header1 = ["日付", ...COLS];
  const rows1 = [...byDate.entries()].map(([d, v]) => [d, ...COLS.map((c) => v[c])]);
  const total1 = ["合計", ...COLS.map((c) => rows1.reduce((s, r) => s + num(r[header1.indexOf(c)]), 0))];
  console.log("\n[1] 日別 × イベント\n");
  console.log(table(header1, [...rows1, total1], COLS.map((_, i) => i + 1)));

  // ============ (2) baseline 前後比較 ============
  if (BASELINE) {
    const beforeFrom = FROM;
    const beforeTo = shiftDate(BASELINE, -1);
    const afterFrom = shiftDate(BASELINE, 1);
    const afterTo = TO;
    const hasBefore = beforeFrom <= beforeTo;
    const hasAfter = afterFrom <= afterTo;

    const sumRange = (from, to) => {
      const acc = Object.fromEntries(COLS.map((c) => [c, 0]));
      for (const [d, v] of byDate) {
        if (d < from || d > to) continue;
        for (const c of COLS) acc[c] += num(v[c]);
      }
      return acc;
    };

    const windows = [];
    if (hasBefore) windows.push(["前（〜baseline前日）", beforeFrom, beforeTo, dayCount(beforeFrom, beforeTo)]);
    windows.push(["混在日（baseline当日）", BASELINE, BASELINE, 1]);
    if (hasAfter) windows.push(["後（baseline翌日〜）", afterFrom, afterTo, dayCount(afterFrom, afterTo)]);

    console.log("\n[2] baseline 前後比較\n");
    const header2 = ["窓", "期間", "日数", "種別", ...COLS];
    const rows2 = [];
    for (const [label, f, t, days] of windows) {
      const s = sumRange(f, t);
      rows2.push([label, `${f}〜${t}`, days, "合計", ...COLS.map((c) => s[c])]);
      rows2.push(["", "", "", "1日平均", ...COLS.map((c) => fmtAvg(s[c] / days))]);
    }
    console.log(table(header2, rows2, COLS.map((_, i) => i + 4).concat([2])));

    if (!hasBefore) console.log("※ baseline が --from と同日のため「前」の窓は存在しない");
    if (!hasAfter) console.log("※ baseline が --to と同日のため「後」の窓は存在しない");
  } else {
    console.log("\n[2] baseline 前後比較: --baseline 未指定のためスキップ");
  }

  // ============ (3) デバイス別 ============
  const deviceRows = await runReport({
    dateRanges: [{ startDate: FROM, endDate: TO }],
    dimensions: [{ name: "deviceCategory" }, { name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: andGroup(hostnameFilter, eventInListFilter(DEVICE_EVENTS)),
    limit: 100000,
  });
  const byDevice = new Map();
  for (const r of deviceRows) {
    const dev = r.dimensionValues[0].value || "(未設定)";
    const ev = r.dimensionValues[1].value;
    if (!byDevice.has(dev)) byDevice.set(dev, Object.fromEntries(DEVICE_EVENTS.map((e) => [e, 0])));
    byDevice.get(dev)[ev] += num(r.metricValues[0].value);
  }
  console.log("\n[3] デバイス別（期間合計）\n");
  const header3 = ["deviceCategory", ...DEVICE_EVENTS, "CTR(click/view)"];
  const rows3 = [...byDevice.entries()]
    .sort((a, b) => b[1].contact_cta_view - a[1].contact_cta_view)
    .map(([dev, v]) => [
      dev,
      ...DEVICE_EVENTS.map((e) => v[e]),
      v.contact_cta_view > 0 ? fmtPct((v.contact_cta_click / v.contact_cta_view) * 100) : "—",
    ]);
  if (rows3.length === 0) {
    console.log("（データなし）");
  } else {
    const tot = Object.fromEntries(DEVICE_EVENTS.map((e) => [e, 0]));
    for (const v of byDevice.values()) for (const e of DEVICE_EVENTS) tot[e] += v[e];
    rows3.push([
      "合計",
      ...DEVICE_EVENTS.map((e) => tot[e]),
      tot.contact_cta_view > 0 ? fmtPct((tot.contact_cta_click / tot.contact_cta_view) * 100) : "—",
    ]);
    console.log(table(header3, rows3, DEVICE_EVENTS.map((_, i) => i + 1).concat([DEVICE_EVENTS.length + 1])));
  }

  // ============ (4) カスタムディメンション ============
  console.log("\n[4] カスタムディメンションの内訳（未登録なら GA4 API が 400 を返す）\n");

  const customDimTargets = [
    { dim: "customEvent:cta_from", events: ["contact_cta_click", "contact_type_selected", "cta_click"] },
    { dim: "customEvent:inquiry_type", events: ["contact_type_selected", "contact_form_submitted"] },
  ];

  for (const { dim, events } of customDimTargets) {
    console.log(`--- ${dim}（対象: ${events.join(" / ")}）`);
    try {
      const rows = await runReport({
        dateRanges: [{ startDate: FROM, endDate: TO }],
        dimensions: [{ name: "eventName" }, { name: dim }],
        metrics: [{ name: "eventCount" }],
        dimensionFilter: andGroup(hostnameFilter, eventInListFilter(events)),
        orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
        limit: 1000,
      });
      if (rows.length === 0) {
        console.log("  登録済み・取得成功。ただし該当データは0行（登録が最近であれば遡及しない点に注意）");
      } else {
        const t = table(
          ["eventName", dim.replace("customEvent:", ""), "eventCount"],
          rows.map((r) => [
            r.dimensionValues[0].value,
            r.dimensionValues[1].value || "(not set)",
            r.metricValues[0].value,
          ]),
          [2]
        );
        console.log(t.split("\n").map((l) => "  " + l).join("\n"));
      }
    } catch (err) {
      console.log(`  取得失敗（未登録の可能性）: ${oneLineError(err)}`);
    }
    console.log("");
  }

  console.log("観測ここまで（本スクリプトはファイルを書き出さない）");
}

main().catch((err) => {
  console.error(oneLineError(err));
  process.exit(1);
});
