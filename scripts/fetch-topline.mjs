/**
 * topline データ機械取得スクリプト（読み取り専用）
 *
 * GSC Search Analytics API + GA4 Data API から計測用の topline 数値を取得し、
 *   - .ai-team/TOPLINE_DATA_<DATE>.md        （サマリ表）
 *   - .ai-team/gsc/topline_pages_28d_<YYYY-MM>.csv （ページ別上位1000）
 *   - .ai-team/gsc/topline_queries_28d_<YYYY-MM>.csv （クエリ別上位1000）
 *   - .ai-team/QUERY_DEMAND_<DATE>.md        （エリア語×テーマ語の需要集計）
 * を出力する。
 *
 * 実行方法（プロジェクトルートで）:
 *   node scripts/fetch-topline.mjs                 ← 既定（GSC末日 = 今日-3日）
 *   node scripts/fetch-topline.mjs --gsc-end=2026-07-24 --ga4-end=2026-07-26
 *   node scripts/fetch-topline.mjs --tag=2026-07-30 --month=2026-07
 *   node scripts/fetch-topline.mjs --query-rows=5000  ← クエリ別の取得上限（既定5000）
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
// クエリ別の取得上限（CSVは上位1000行だが、分析はこの母集団全体で行う）。
// GSC は「クリック降順・同数は語順」で返すため、表示が多くクリック0のクエリは
// 上位1000に入ってこない。取りこぼし分析のため既定でAPI上限まで引く。
const QUERY_ROWS = Number(argOf("query-rows", "25000"));

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

/**
 * クエリ別。API はクリック降順で返すため、CTR の低い「取りこぼしクエリ」を
 * 拾い切るには上位1000だけでは足りない。ページングで maxRows まで取得し、
 * CSV には先頭1000行（＝上位1000）を書き出す。
 */
async function gscQueries([startDate, endDate], maxRows = 5000, pageSize = 1000) {
  const out = [];
  for (let startRow = 0; startRow < maxRows; startRow += pageSize) {
    const rows = await gscQuery({
      startDate,
      endDate,
      dimensions: ["query"],
      rowLimit: Math.min(pageSize, maxRows - startRow),
      startRow,
    });
    out.push(...rows);
    if (rows.length < pageSize) break;
  }
  return out;
}

// ============================================================
// GA4
// ============================================================
const analyticsdata = google.analyticsdata({ version: "v1beta", auth });
// ファネル順に並べる（表の出力順もこの順になる）。
// ★ contact 到達の主導線は ContactCtaCard（845箇所）の contact_cta_click であり、
//   cta_click ではない。cta_click の発火元 ContentCta はリンク先を問わず全リンクで
//   発火するため（/contact 宛は 2,189 リンク中 79＝3.6%）、contact 導線の指標として
//   読まないこと。詳細: .ai-team/CONTACT_FUNNEL_AUDIT_2026-07-29.md
const KEY_EVENTS = [
  "contact_form_submitted", // CV（プロキシ。外部フォームを開くクリック＝実送信ではない）
  "contact_type_selected", // /contact Step1 の種別選択（到達→送信の間の中間指標・#333で新設）
  "contact_cta_click", // /contact 到達クリック（ContactCtaCard・主導線）
  "contact_cta_view", // ContactCtaCard の表示（到達クリックの母数）
  "calculator_cta_click", // 計算機からの CTA（expert_consult 含む）
  "cta_click", // 汎用CTA（大半は記事回遊。§上記注意）
  "download_completed", // ソフトCV
];

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
// クエリ需要分析（エリア語 × テーマ語）
// ============================================================
const PREFECTURES = [
  "北海道", "青森", "岩手", "宮城", "秋田", "山形", "福島",
  "茨城", "栃木", "群馬", "埼玉", "千葉", "東京", "神奈川",
  "新潟", "富山", "石川", "福井", "山梨", "長野",
  "岐阜", "静岡", "愛知", "三重",
  "滋賀", "京都", "大阪", "兵庫", "奈良", "和歌山",
  "鳥取", "島根", "岡山", "広島", "山口",
  "徳島", "香川", "愛媛", "高知",
  "福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄",
];
const REGIONS = [
  "北海道", "東北", "関東", "北関東", "南関東", "首都圏", "中部", "東海",
  "北陸", "甲信越", "近畿", "関西", "中国", "四国", "九州", "沖縄",
  "東日本", "西日本",
];
const CITIES = [
  "札幌", "仙台", "さいたま", "横浜", "川崎", "相模原", "浜松", "名古屋", "堺", "神戸",
  "北九州", "那覇", "金沢", "松山", "高松", "宇都宮", "前橋", "水戸", "甲府", "松江",
  "盛岡", "郡山", "いわき", "高崎", "川口", "船橋", "八王子", "町田", "藤沢", "豊田",
  "岡崎", "一宮", "豊橋", "四日市", "東大阪", "姫路", "尼崎", "西宮", "倉敷", "福山",
  "下関", "久留米", "佐世保", "大津", "吹田", "豊中", "枚方", "高槻", "明石", "春日井",
];
const WARDS = [
  "千代田区", "中央区", "港区", "新宿区", "文京区", "台東区", "墨田区", "江東区",
  "品川区", "目黒区", "大田区", "世田谷区", "渋谷区", "中野区", "杉並区", "豊島区",
  "北区", "荒川区", "板橋区", "練馬区", "足立区", "葛飾区", "江戸川区",
];

/** エリア語 → 種別（先に登録した種別が優先。北海道/沖縄は都道府県扱い） */
const AREA_KIND = new Map();
for (const [list, kind] of [
  [PREFECTURES, "都道府県"],
  [REGIONS, "地方"],
  [CITIES, "市"],
  [WARDS, "区"],
]) {
  for (const t of list) if (!AREA_KIND.has(t)) AREA_KIND.set(t, kind);
}
// 長い語から試すことで「東京都」が「京都」に、「東大阪」が「大阪」に誤マッチするのを防ぐ
const AREA_TERMS_BY_LEN = [...AREA_KIND.keys()].sort((a, b) => b.length - a.length);

// 「東京電力」「関西電力」等は社名であってエリア需要ではないため区別する
const COMPANY_SUFFIX = ["電力", "ガス", "でんき", "電気保安"];

/**
 * クエリ内のエリア語を左から最長一致で拾う。
 * エリア語の直後が「電力」「ガス」等なら社名文脈として isCompany を立てる。
 */
function matchAreas(q) {
  const hits = [];
  let i = 0;
  while (i < q.length) {
    const term = AREA_TERMS_BY_LEN.find((t) => q.startsWith(t, i));
    if (!term) {
      i += 1;
      continue;
    }
    const rest = q.slice(i + term.length);
    hits.push({
      term,
      kind: AREA_KIND.get(term),
      isCompany: COMPANY_SUFFIX.some((s) => rest.startsWith(s)),
    });
    i += term.length;
  }
  return hits;
}

const THEME_TERMS = [
  "推移", "単価", "相場", "平均", "比較", "切替", "切り替え", "乗り換え",
  "補助金", "助成金", "支援", "値上げ", "高騰", "安い", "削減", "ランキング",
  "計算", "シミュレーション", "見直し", "プラン", "いくら", "見積", "一覧", "料金表",
];
const matchThemes = (q) => THEME_TERMS.filter((t) => q.includes(t));

/** GSC の行を分析しやすい形に正規化 */
const normalizeQueryRow = (r) => {
  const q = r.keys[0];
  const areas = matchAreas(q);
  return {
    query: q,
    clicks: r.clicks,
    impressions: r.impressions,
    ctr: r.ctr,
    position: r.position,
    areas,
    // 社名文脈でないエリア語が1つでもあれば「エリア需要クエリ」とみなす
    pureAreas: areas.filter((a) => !a.isCompany),
    companyAreas: areas.filter((a) => a.isCompany),
    themes: matchThemes(q),
  };
};

const byImpDesc = (a, b) => b.impressions - a.impressions || b.clicks - a.clicks;
const mdCell = (s) => String(s).replace(/\|/g, "\\|");
const csvCell = (s) => {
  const v = String(s);
  return /[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
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

const [scA, scB, sc91, pages, queryRows] = await Promise.all([
  gscTotals(GSC_A),
  gscTotals(GSC_B),
  gscTotals(GSC_91),
  gscPages(GSC_A, 1000),
  gscQueries(GSC_A, QUERY_ROWS),
]);
console.log(
  `  ✅ GSC 取得完了（ページ別 ${pages.length} 行／クエリ別 ${queryRows.length} 行）`
);

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

// --- CSV（クエリ別上位1000＝クリック降順・同数は表示降順） ---
const queryCsvPath = resolve(ROOT, `.ai-team/gsc/topline_queries_28d_${MONTH}.csv`);
const queryCsvLines = ["query,clicks,impressions,ctr,position"];
const queryTop1000 = [...queryRows]
  .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
  .slice(0, 1000);
for (const r of queryTop1000) {
  queryCsvLines.push(
    [
      csvCell(r.keys[0]),
      r.clicks,
      r.impressions,
      (r.ctr * 100).toFixed(2),
      r.position.toFixed(1),
    ].join(",")
  );
}
writeFileSync(queryCsvPath, queryCsvLines.join("\n") + "\n", "utf-8");
console.log(`  📄 ${queryCsvPath.replace(ROOT + "\\", "").replace(/\\/g, "/")}`);

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
    "※ `cta_from` は `contact_cta_view` / `contact_cta_click` / `contact_form_submitted` / `contact_type_selected` のいずれも送信済み（`contact_type_selected` は種別 `inquiry_type` も送る）。いずれもGA4のカスタムディメンションとして未登録のため内訳を取得できない。取得には管理画面で `cta_from` と `inquiry_type` の登録が必要（登録日以降のデータのみ・遡及不可）。"
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

// ============================================================
// クエリ需要レポート（.ai-team/QUERY_DEMAND_<TAG>.md）
// ============================================================
const qs = queryRows.map(normalizeQueryRow);
const sum = (rows, k) => rows.reduce((s, r) => s + r[k], 0);

const areaQueries = qs.filter((r) => r.pureAreas.length > 0);
const companyOnlyQueries = qs.filter(
  (r) => r.pureAreas.length === 0 && r.companyAreas.length > 0
);

// エリア語別ロールアップ（1クエリが複数エリア語を含む場合は各語に計上）
const areaRollup = new Map();
for (const r of areaQueries) {
  for (const term of new Set(r.pureAreas.map((a) => a.term))) {
    const cur = areaRollup.get(term) || {
      term,
      kind: AREA_KIND.get(term),
      queries: 0,
      clicks: 0,
      impressions: 0,
    };
    cur.queries += 1;
    cur.clicks += r.clicks;
    cur.impressions += r.impressions;
    areaRollup.set(term, cur);
  }
}

// テーマ語 × エリア語の組合せ
const pairMap = new Map();
for (const r of areaQueries) {
  if (!r.themes.length) continue;
  for (const area of new Set(r.pureAreas.map((a) => a.term))) {
    for (const theme of r.themes) {
      const key = `${area} ${theme}`;
      const cur = pairMap.get(key) || {
        area,
        theme,
        queries: 0,
        clicks: 0,
        impressions: 0,
        examples: [],
      };
      cur.queries += 1;
      cur.clicks += r.clicks;
      cur.impressions += r.impressions;
      if (cur.examples.length < 2) cur.examples.push(r.query);
      pairMap.set(key, cur);
    }
  }
}

const missedQueries = qs
  .filter((r) => r.impressions >= 100 && r.ctr < 0.01)
  .sort(byImpDesc);

const qmd = [];
qmd.push(`# 検索クエリ需要レポート（GSC API機械取得）${TAG}`);
qmd.push("");
qmd.push(
  `取得元: GSC Search Analytics API（\`dimensions: ["query"]\`・\`dataState: "final"\`・読み取り専用・${today} 実行）。`
);
qmd.push(`対象期間: ${GSC_A[0]} 〜 ${GSC_A[1]}（直近28日）。`);
qmd.push("");
qmd.push("## 0. 前提と読み方");
qmd.push("");
qmd.push(
  `- 取得母集団: **${n(qs.length)} クエリ**（クリック降順・上限 ${n(QUERY_ROWS)} 行）。CSV \`.ai-team/gsc/topline_queries_28d_${MONTH}.csv\` には上位1000行を保存。`
);
qmd.push(
  `- 本レポートの集計は取得母集団 ${n(qs.length)} クエリ全体（CSVの1000行だけではない）で行っている。`
);
qmd.push(
  `- クエリ合計 クリック ${n(sum(qs, "clicks"))} / 表示 ${n(sum(qs, "impressions"))} に対し、サイト全体は クリック ${n(scA.clicks)} / 表示 ${n(scA.impressions)}。GSCは検索回数の少ないクエリを匿名化して返さないため差分が出る（＝クエリ別合計はサイト全体より必ず小さい）。`
);
qmd.push(
  "- エリア語の判定は左からの最長一致。「東京都」→`東京`、「東大阪」→`東大阪` のように長い語を優先し、`京都`/`大阪` への誤マッチを避けている。"
);
qmd.push(
  "- エリア語の直後が「電力/ガス/でんき」の場合（例: 東京電力・関西電力）は**社名文脈**として §5 に分離し、§1〜§3 のエリア需要からは除外している。"
);
qmd.push(
  "- 既知の残存誤検出: 地方名の`中国`は国名の「中国」も拾う（例: 「中国 電気代 日本 比較」）。表示20程度で全体への影響は軽微だが、`中国`行を読むときは注意する。"
);
qmd.push("");
qmd.push("## 1. サマリ");
qmd.push("");
qmd.push("| 区分 | クエリ数 | クリック | 表示 | CTR |");
qmd.push("|---|---:|---:|---:|---:|");
const summaryRow = (label, rows) => {
  const c = sum(rows, "clicks");
  const i = sum(rows, "impressions");
  qmd.push(
    `| ${label} | ${n(rows.length)} | ${n(c)} | ${n(i)} | ${i ? pct(c / i) : "—"} |`
  );
};
summaryRow("取得母集団 全体", qs);
summaryRow("エリア語を含む（社名文脈を除く）", areaQueries);
summaryRow("うちテーマ語も含む", areaQueries.filter((r) => r.themes.length > 0));
summaryRow("社名文脈のみ（東京電力 等）", companyOnlyQueries);
summaryRow("取りこぼし（表示100以上・CTR1%未満）", missedQueries);
qmd.push("");
qmd.push(
  `エリア語クエリの表示シェアは全体の ${
    sum(qs, "impressions")
      ? ((sum(areaQueries, "impressions") / sum(qs, "impressions")) * 100).toFixed(1)
      : "0.0"
  }%。`
);
qmd.push("");
qmd.push("## 2. エリア語を含むクエリ 表示上位30");
qmd.push("");
qmd.push("エリア推移の横展開を設計するための一次材料。テーマ語欄が空のものは情報意図が未特定。");
qmd.push("");
qmd.push("| # | クエリ | エリア語（種別） | テーマ語 | クリック | 表示 | CTR | 順位 |");
qmd.push("|---:|---|---|---|---:|---:|---:|---:|");
[...areaQueries]
  .sort(byImpDesc)
  .slice(0, 30)
  .forEach((r, i) => {
    const areas = [...new Set(r.pureAreas.map((a) => `${a.term}（${a.kind}）`))].join("・");
    qmd.push(
      `| ${i + 1} | ${mdCell(r.query)} | ${areas} | ${mdCell(r.themes.join("・") || "—")} | ${n(r.clicks)} | ${n(r.impressions)} | ${(r.ctr * 100).toFixed(2)}% | ${r.position.toFixed(1)} |`
    );
  });
qmd.push("");
qmd.push("## 3. エリア語別ロールアップ（表示上位25）");
qmd.push("");
qmd.push("| # | エリア語 | 種別 | クエリ数 | クリック | 表示 | CTR |");
qmd.push("|---:|---|---|---:|---:|---:|---:|");
[...areaRollup.values()]
  .sort(byImpDesc)
  .slice(0, 25)
  .forEach((r, i) => {
    qmd.push(
      `| ${i + 1} | ${r.term} | ${r.kind} | ${n(r.queries)} | ${n(r.clicks)} | ${n(r.impressions)} | ${r.impressions ? pct(r.clicks / r.impressions) : "—"} |`
    );
  });
qmd.push("");
qmd.push("## 4. テーマ語 × エリア語の組合せ（表示上位30）");
qmd.push("");
qmd.push(`テーマ語の辞書: ${THEME_TERMS.map((t) => `\`${t}\``).join(" / ")}`);
qmd.push("");
qmd.push("| # | エリア語 | テーマ語 | クエリ数 | クリック | 表示 | CTR | 代表クエリ |");
qmd.push("|---:|---|---|---:|---:|---:|---:|---|");
[...pairMap.values()]
  .sort(byImpDesc)
  .slice(0, 30)
  .forEach((r, i) => {
    qmd.push(
      `| ${i + 1} | ${r.area} | ${mdCell(r.theme)} | ${n(r.queries)} | ${n(r.clicks)} | ${n(r.impressions)} | ${r.impressions ? pct(r.clicks / r.impressions) : "—"} | ${mdCell(r.examples.join(" / "))} |`
    );
  });
if (pairMap.size === 0) qmd.push("| — | — | — | — | — | — | — | 該当なし |");
qmd.push("");
qmd.push("## 5. 参考: 社名文脈のみのクエリ（表示上位15・§1〜§3から除外済み）");
qmd.push("");
qmd.push("| # | クエリ | クリック | 表示 | CTR | 順位 |");
qmd.push("|---:|---|---:|---:|---:|---:|");
[...companyOnlyQueries]
  .sort(byImpDesc)
  .slice(0, 15)
  .forEach((r, i) => {
    qmd.push(
      `| ${i + 1} | ${mdCell(r.query)} | ${n(r.clicks)} | ${n(r.impressions)} | ${(r.ctr * 100).toFixed(2)}% | ${r.position.toFixed(1)} |`
    );
  });
qmd.push("");
qmd.push("## 6. 取りこぼしクエリ（表示100以上・CTR1%未満）上位20");
qmd.push("");
qmd.push(
  `該当 ${n(missedQueries.length)} クエリ・表示合計 ${n(sum(missedQueries, "impressions"))}・クリック合計 ${n(sum(missedQueries, "clicks"))}。既存ページのタイトル/ディスクリプション改善の候補。`
);
qmd.push("");
qmd.push("| # | クエリ | クリック | 表示 | CTR | 順位 | エリア語 |");
qmd.push("|---:|---|---:|---:|---:|---:|---|");
missedQueries.slice(0, 20).forEach((r, i) => {
  const areas = [...new Set(r.pureAreas.map((a) => a.term))].join("・") || "—";
  qmd.push(
    `| ${i + 1} | ${mdCell(r.query)} | ${n(r.clicks)} | ${n(r.impressions)} | ${(r.ctr * 100).toFixed(2)}% | ${r.position.toFixed(1)} | ${areas} |`
  );
});
qmd.push("");

writeFileSync(resolve(ROOT, `.ai-team/QUERY_DEMAND_${TAG}.md`), qmd.join("\n"), "utf-8");
console.log(`  📄 .ai-team/QUERY_DEMAND_${TAG}.md`);
console.log("\n✅ 完了");
