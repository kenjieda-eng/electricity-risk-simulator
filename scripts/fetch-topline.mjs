/**
 * topline データ機械取得スクリプト（読み取り専用）
 *
 * GSC Search Analytics API + GA4 Data API から計測用の topline 数値を取得し、
 *   - .ai-team/TOPLINE_DATA_<DATE>.md        （サマリ表）
 *   - .ai-team/gsc/topline_pages_28d_<YYYY-MM>.csv （ページ別上位1000）
 * を出力する。
 *
 * 実行方法（プロジェクトルートで）:
 *   node scripts/fetch-topline.mjs                 ← 既定（GSC末日 = 今日-3日）
 *   node scripts/fetch-topline.mjs --gsc-end=2026-07-24 --ga4-end=2026-07-26
 *   node scripts/fetch-topline.mjs --tag=2026-07-30 --month=2026-07
 *
 * ★資格情報（サービスアカウント/秘密鍵/プロパティID/サイトURL）は
 *   標準出力にも出力ファイルにも一切書き出さない。
 */

import { google } from "googleapis";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// ============================================================
// 環境変数（.env.local を手動読み込み・値は出力しない）
// ============================================================
const envContent = readFileSync(resolve(ROOT, ".env.local"), "utf-8")
  .replace(/\r\n/g, "\n")
  .replace(/\r/g, "\n");
const env = {};
const envRegex = /^([A-Z_][A-Z0-9_]*)=("(?:[^"\\]|\\.)*"|[^\n]*)/gm;
let m;
while ((m = envRegex.exec(envContent)) !== null) {
  let value = m[2].trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"');
  }
  env[m[1]] = value;
}

const PROPERTY_ID = env.GA4_PROPERTY_ID;
const CLIENT_EMAIL = env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = env.GOOGLE_PRIVATE_KEY;
const SITE_URL = env.SEARCH_CONSOLE_SITE_URL;

if (!PROPERTY_ID || !CLIENT_EMAIL || !PRIVATE_KEY || !SITE_URL) {
  console.error("❌ .env.local に必要な環境変数が設定されていません");
  process.exit(1);
}

const auth = new google.auth.JWT({
  email: CLIENT_EMAIL,
  key: PRIVATE_KEY,
  scopes: [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
  ],
});

// ============================================================
// 日付ユーティリティ
// ============================================================
const argOf = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};

const iso = (d) => d.toISOString().slice(0, 10);
const shift = (dateStr, days) => {
  const d = new Date(`${dateStr}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return iso(d);
};
/** 末日を含む n 日間の [start, end] */
const window = (endStr, n) => [shift(endStr, -(n - 1)), endStr];

const today = iso(new Date());
// GSC は確定まで 2〜3 日のラグがあるため既定で今日-3日を末日にする
const GSC_END = argOf("gsc-end", shift(today, -3));
// GA4 は当日分が部分計測になるため既定で前日を末日にする
const GA4_END = argOf("ga4-end", shift(today, -1));
const TAG = argOf("tag", today);
const MONTH = argOf("month", today.slice(0, 7));

const GSC_A = window(GSC_END, 28);
const GSC_B = window(shift(GSC_A[0], -1), 28);
const GSC_91 = window(GSC_END, 91);
const GA4_A = window(GA4_END, 28);
const GA4_B = window(shift(GA4_A[0], -1), 28);

// ============================================================
// GSC
// ============================================================
const searchconsole = google.searchconsole({ version: "v1", auth });

async function gscQuery(body) {
  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: { dataState: "final", ...body },
  });
  return res.data.rows || [];
}

/** ディメンションなし = サイト全体の合計1行 */
async function gscTotals([startDate, endDate]) {
  const rows = await gscQuery({ startDate, endDate, dimensions: [] });
  const r = rows[0];
  if (!r) return { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  return {
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
  };
}

async function gscPages([startDate, endDate], rowLimit = 1000) {
  return gscQuery({ startDate, endDate, dimensions: ["page"], rowLimit });
}

// ============================================================
// GA4
// ============================================================
const analyticsdata = google.analyticsdata({ version: "v1beta", auth });
const KEY_EVENTS = ["contact_form_submitted", "cta_click", "download_completed"];

// 第5回計測（.ai-team/MEASUREMENT_5TH_TOPLINE_2026-07-06.md・GSC手動エクスポート 4/4〜7/3）
const PREV_91 = { clicks: 6902, impressions: 292000, ctr: 0.024 };

async function runReport(requestBody) {
  const res = await analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody,
  });
  return res.data;
}

async function ga4Totals([startDate, endDate]) {
  const data = await runReport({
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: "totalUsers" },
      { name: "screenPageViews" },
      { name: "sessions" },
    ],
  });
  const v = data.rows?.[0]?.metricValues || [];
  return {
    totalUsers: Number(v[0]?.value || 0),
    screenPageViews: Number(v[1]?.value || 0),
    sessions: Number(v[2]?.value || 0),
  };
}

async function ga4Events([startDate, endDate]) {
  const data = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "eventName" }],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      filter: {
        fieldName: "eventName",
        inListFilter: { values: KEY_EVENTS },
      },
    },
  });
  const out = Object.fromEntries(KEY_EVENTS.map((e) => [e, 0]));
  for (const row of data.rows || []) {
    out[row.dimensionValues[0].value] = Number(row.metricValues[0].value);
  }
  return out;
}

/** プロパティに登録済みのカスタムディメンション一覧（apiName） */
async function ga4CustomDimensions() {
  const res = await analyticsdata.properties.getMetadata({
    name: `properties/${PROPERTY_ID}/metadata`,
  });
  return (res.data.dimensions || [])
    .map((d) => d.apiName)
    .filter((a) => a.startsWith("customEvent:") || a.startsWith("customUser:"));
}

/**
 * contact_form_submitted の内訳。
 * cta_from / source / event_label のうち「GA4に登録済み」のものだけを試す。
 * どれも未登録なら null（＝総数のみ）を返し、登録済み一覧を添えて理由を残す。
 */
async function ga4ContactBreakdown([startDate, endDate], registered) {
  const candidates = ["customEvent:cta_from", "customEvent:source", "customEvent:event_label"];
  for (const dim of candidates.filter((d) => registered.includes(d))) {
    const data = await runReport({
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: dim }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: {
        filter: {
          fieldName: "eventName",
          stringFilter: { matchType: "EXACT", value: "contact_form_submitted" },
        },
      },
    });
    const rows = (data.rows || [])
      .map((r) => ({ key: r.dimensionValues[0].value, count: Number(r.metricValues[0].value) }))
      .filter((r) => r.key && r.key !== "(not set)");
    if (rows.length) {
      return { dimension: dim, rows: rows.sort((a, b) => b.count - a.count) };
    }
  }
  return null;
}

// ============================================================
// 整形
// ============================================================
const n = (x) => Number(x).toLocaleString("en-US");
const pct = (x) => `${(x * 100).toFixed(2)}%`;
const delta = (a, b) => {
  if (!b) return "—";
  const d = ((a - b) / b) * 100;
  return `${d >= 0 ? "+" : ""}${d.toFixed(1)}%`;
};
const ptDelta = (a, b) => {
  const d = (a - b) * 100;
  return `${d >= 0 ? "+" : ""}${d.toFixed(2)}pt`;
};
const posDelta = (a, b) => {
  const d = a - b;
  // 順位は小さいほど良い
  return `${d >= 0 ? "+" : ""}${d.toFixed(1)}`;
};

// ============================================================
// 実行
// ============================================================
console.log("🔍 topline データ取得開始（読み取り専用）\n");
console.log(`  GSC 期間A : ${GSC_A[0]} 〜 ${GSC_A[1]} (28日)`);
console.log(`  GSC 期間B : ${GSC_B[0]} 〜 ${GSC_B[1]} (28日)`);
console.log(`  GSC 91日  : ${GSC_91[0]} 〜 ${GSC_91[1]}`);
console.log(`  GA4 期間A : ${GA4_A[0]} 〜 ${GA4_A[1]} (28日)`);
console.log(`  GA4 期間B : ${GA4_B[0]} 〜 ${GA4_B[1]} (28日)\n`);

const [scA, scB, sc91, pages] = await Promise.all([
  gscTotals(GSC_A),
  gscTotals(GSC_B),
  gscTotals(GSC_91),
  gscPages(GSC_A, 1000),
]);
console.log(`  ✅ GSC 取得完了（ページ別 ${pages.length} 行）`);

const registeredDims = await ga4CustomDimensions();
const [gaA, gaB, evA, evB, breakdown] = await Promise.all([
  ga4Totals(GA4_A),
  ga4Totals(GA4_B),
  ga4Events(GA4_A),
  ga4Events(GA4_B),
  ga4ContactBreakdown(GA4_A, registeredDims),
]);
console.log("  ✅ GA4 取得完了\n");

// --- CSV（ページ別上位1000） ---
mkdirSync(resolve(ROOT, ".ai-team/gsc"), { recursive: true });
const csvPath = resolve(ROOT, `.ai-team/gsc/topline_pages_28d_${MONTH}.csv`);
const toPath = (url) => url.replace(/^https?:\/\/[^/]+/, "") || "/";
const csvLines = ["path,clicks,impressions,ctr,position"];
for (const r of pages) {
  const p = toPath(r.keys[0]);
  const page = p.includes(",") ? `"${p.replace(/"/g, '""')}"` : p;
  csvLines.push(
    [page, r.clicks, r.impressions, (r.ctr * 100).toFixed(2), r.position.toFixed(1)].join(",")
  );
}
writeFileSync(csvPath, csvLines.join("\n") + "\n", "utf-8");
console.log(`  📄 ${csvPath.replace(ROOT + "\\", "").replace(/\\/g, "/")}`);

// --- Markdown サマリ ---
const clickPages = pages.filter((r) => r.clicks > 0).length;
const top20 = pages.slice(0, 20);

const md = [];
md.push(`# topline データ（API機械取得）${TAG}`);
md.push("");
md.push(
  `取得元: GSC Search Analytics API / GA4 Data API（読み取り専用・${today} 実行）。`
);
md.push(
  `GSCはデータ確定ラグを見て末日を ${GSC_END}、GA4は当日部分計測を避けて末日を ${GA4_END} とした。`
);
md.push("");
md.push("## 1. GSC サイト全体（28日 前後比較）");
md.push("");
md.push(`- 期間A: ${GSC_A[0]} 〜 ${GSC_A[1]}／期間B: ${GSC_B[0]} 〜 ${GSC_B[1]}`);
md.push("");
md.push("| 指標 | 期間B（前28日） | 期間A（直近28日） | 前期比 |");
md.push("|---|---:|---:|---:|");
md.push(`| クリック | ${n(scB.clicks)} | ${n(scA.clicks)} | ${delta(scA.clicks, scB.clicks)} |`);
md.push(
  `| 表示 | ${n(scB.impressions)} | ${n(scA.impressions)} | ${delta(scA.impressions, scB.impressions)} |`
);
md.push(`| CTR | ${pct(scB.ctr)} | ${pct(scA.ctr)} | ${ptDelta(scA.ctr, scB.ctr)} |`);
md.push(
  `| 平均掲載順位 | ${scB.position.toFixed(1)} | ${scA.position.toFixed(1)} | ${posDelta(scA.position, scB.position)} |`
);
md.push("");
md.push("## 2. GSC サイト全体（91日）");
md.push("");
md.push(`- 期間: ${GSC_91[0]} 〜 ${GSC_91[1]}（91日）`);
md.push("");
md.push("| 指標 | 前回計測（第5回・4/4〜7/3） | 今回（91日） | 前回比 |");
md.push("|---|---:|---:|---:|");
md.push(
  `| クリック | ${n(PREV_91.clicks)} | ${n(sc91.clicks)} | ${delta(sc91.clicks, PREV_91.clicks)} |`
);
md.push(
  `| 表示 | ${n(PREV_91.impressions)} | ${n(sc91.impressions)} | ${delta(sc91.impressions, PREV_91.impressions)} |`
);
md.push(`| CTR | ${pct(PREV_91.ctr)} | ${pct(sc91.ctr)} | ${ptDelta(sc91.ctr, PREV_91.ctr)} |`);
md.push(`| 平均掲載順位 | — | ${sc91.position.toFixed(1)} | — |`);
md.push("");
md.push(
  "※前回値は `.ai-team/MEASUREMENT_5TH_TOPLINE_2026-07-06.md`（手動エクスポート・中央順位ベースのため順位は比較対象外）。"
);
md.push("");
md.push("## 3. GA4（28日 前後比較）");
md.push("");
md.push(`- 期間A: ${GA4_A[0]} 〜 ${GA4_A[1]}／期間B: ${GA4_B[0]} 〜 ${GA4_B[1]}`);
md.push("");
md.push("| 指標 | 期間B（前28日） | 期間A（直近28日） | 前期比 |");
md.push("|---|---:|---:|---:|");
md.push(
  `| totalUsers | ${n(gaB.totalUsers)} | ${n(gaA.totalUsers)} | ${delta(gaA.totalUsers, gaB.totalUsers)} |`
);
md.push(
  `| screenPageViews | ${n(gaB.screenPageViews)} | ${n(gaA.screenPageViews)} | ${delta(gaA.screenPageViews, gaB.screenPageViews)} |`
);
md.push(
  `| sessions | ${n(gaB.sessions)} | ${n(gaA.sessions)} | ${delta(gaA.sessions, gaB.sessions)} |`
);
for (const e of KEY_EVENTS) {
  md.push(`| ${e} | ${n(evB[e])} | ${n(evA[e])} | ${delta(evA[e], evB[e])} |`);
}
md.push("");
md.push("### contact_form_submitted の内訳（期間A）");
md.push("");
if (breakdown) {
  md.push(`ディメンション: \`${breakdown.dimension}\``);
  md.push("");
  md.push("| 区分 | 件数 |");
  md.push("|---|---:|");
  for (const r of breakdown.rows) md.push(`| ${r.key} | ${n(r.count)} |`);
} else {
  md.push(
    "内訳は取得不可＝総数のみ。`cta_from` / `source` / `event_label` のいずれもGA4のカスタムディメンションとして未登録（Data API metadata で確認）。"
  );
  md.push("");
  md.push(
    `登録済みカスタムディメンション（${registeredDims.length}件）: ${registeredDims.map((d) => `\`${d}\``).join(" / ") || "なし"}`
  );
  md.push("");
  md.push(
    "※現状 `contact_form_submitted` は `event_label`（問い合わせ種別）のみ送信しており、`cta_from` は送信側にも存在しない。内訳を取るにはGA4管理画面でカスタムディメンション登録が必要（登録日以降のデータのみ遡及不可）。"
  );
}
md.push("");
md.push("## 4. ページ別（期間A・28日）");
md.push("");
md.push(`- 全 ${n(pages.length)} 行を \`.ai-team/gsc/topline_pages_28d_${MONTH}.csv\` に保存。`);
md.push(`- うちクリック1以上: ${n(clickPages)} ページ。`);
md.push("");
md.push("| # | ページ | クリック | 表示 | CTR | 順位 |");
md.push("|---:|---|---:|---:|---:|---:|");
top20.forEach((r, i) => {
  const path = r.keys[0].replace(/^https?:\/\/[^/]+/, "") || "/";
  md.push(
    `| ${i + 1} | ${path} | ${n(r.clicks)} | ${n(r.impressions)} | ${(r.ctr * 100).toFixed(2)}% | ${r.position.toFixed(1)} |`
  );
});
md.push("");

writeFileSync(resolve(ROOT, `.ai-team/TOPLINE_DATA_${TAG}.md`), md.join("\n"), "utf-8");
console.log(`  📄 .ai-team/TOPLINE_DATA_${TAG}.md`);
console.log("\n✅ 完了");
