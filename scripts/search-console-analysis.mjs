#!/usr/bin/env node
/**
 * Search Console キーワード分析スクリプト
 *
 * 使い方:
 *   node scripts/search-console-analysis.mjs
 *
 * 出力:
 *   .ai-team/KEYWORD_ANALYSIS_YYYY-MM-DD.md に3カテゴリで分類:
 *     A. リライト対象（表示 > 10, 順位 4〜15位）
 *     B. 新規記事候補（表示 > 5, CTR < 5%）
 *     C. 強みキーワード（順位 1〜3位, 表示 > 5）
 */

import { google } from "googleapis";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

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

const CLIENT_EMAIL = env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = env.GOOGLE_PRIVATE_KEY;
const SITE_URL = env.SEARCH_CONSOLE_SITE_URL;
if (!CLIENT_EMAIL || !PRIVATE_KEY || !SITE_URL) {
  console.error(".env.local に必要な変数がありません");
  process.exit(1);
}

const auth = new google.auth.JWT({
  email: CLIENT_EMAIL,
  key: PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const searchconsole = google.searchconsole({ version: "v1", auth });

// 28日間
const today = new Date();
const endDate = today.toISOString().slice(0, 10);
const startDateObj = new Date(today);
startDateObj.setDate(today.getDate() - 28);
const startDate = startDateObj.toISOString().slice(0, 10);

async function fetchByDimensions(dimensions) {
  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit: 1000,
    },
  });
  return res.data.rows || [];
}

async function main() {
  console.log(`Search Console 分析: ${startDate} 〜 ${endDate}`);
  console.log(`サイト: ${SITE_URL}\n`);

  const queryRows = await fetchByDimensions(["query"]);
  const queryPageRows = await fetchByDimensions(["query", "page"]);

  // query → 代表page（クリック最大のpage）のマップ
  const queryToPage = new Map();
  for (const r of queryPageRows) {
    const q = r.keys[0];
    const p = r.keys[1];
    const existing = queryToPage.get(q);
    if (!existing || existing.clicks < r.clicks) {
      queryToPage.set(q, { page: p, clicks: r.clicks });
    }
  }

  const rewriteCandidates = [];
  const newArticleCandidates = [];
  const strongKeywords = [];

  for (const r of queryRows) {
    const query = r.keys[0];
    const position = r.position;
    const impressions = r.impressions;
    const ctr = r.ctr;
    const clicks = r.clicks;
    const page = queryToPage.get(query)?.page || "-";

    if (impressions > 10 && position >= 4 && position <= 15) {
      rewriteCandidates.push({ query, position, impressions, ctr, clicks, page });
    }
    if (impressions > 5 && ctr < 0.05 && position > 3) {
      newArticleCandidates.push({ query, position, impressions, ctr });
    }
    if (position <= 3 && impressions > 5) {
      strongKeywords.push({ query, position, impressions, ctr, clicks, page });
    }
  }

  rewriteCandidates.sort((a, b) => b.impressions - a.impressions);
  newArticleCandidates.sort((a, b) => b.impressions - a.impressions);
  strongKeywords.sort((a, b) => a.position - b.position);

  const fmtPct = (x) => (x * 100).toFixed(1) + "%";
  const fmtPos = (x) => x.toFixed(1);

  const tableMd = (header, rows) =>
    [
      "| " + header.join(" | ") + " |",
      "| " + header.map(() => "---").join(" | ") + " |",
      ...rows.map((r) => "| " + r.join(" | ") + " |"),
    ].join("\n");

  const rewriteTable = tableMd(
    ["クエリ", "現在順位", "表示回数", "CTR", "クリック", "対応ページ", "推奨アクション"],
    rewriteCandidates.slice(0, 30).map((r) => [
      r.query,
      fmtPos(r.position),
      r.impressions,
      fmtPct(r.ctr),
      r.clicks,
      r.page.replace(SITE_URL.replace(/\/$/, ""), ""),
      "タイトル・H1・導入文にクエリ先頭含める／内部リンク強化",
    ])
  );

  const newTable = tableMd(
    ["クエリ", "表示回数", "現在順位", "CTR", "推奨記事タイトル案"],
    newArticleCandidates.slice(0, 30).map((r) => [
      r.query,
      r.impressions,
      fmtPos(r.position),
      fmtPct(r.ctr),
      `${r.query}｜完全ガイド`,
    ])
  );

  const strongTable = tableMd(
    ["クエリ", "順位", "表示回数", "CTR", "クリック", "対応ページ"],
    strongKeywords.slice(0, 30).map((r) => [
      r.query,
      fmtPos(r.position),
      r.impressions,
      fmtPct(r.ctr),
      r.clicks,
      r.page.replace(SITE_URL.replace(/\/$/, ""), ""),
    ])
  );

  const md = `# Search Console キーワード分析（${endDate}）

**期間**: ${startDate} 〜 ${endDate}（28日間）
**サイト**: ${SITE_URL}
**対象クエリ総数**: ${queryRows.length}

## A. リライト対象（順位 4〜15 位、表示 10 回以上）

既に記事が存在するが、タイトル・導入・内部リンクの最適化で 3 位以内に上げる余地があるクエリ。

${rewriteCandidates.length === 0 ? "_該当なし_" : rewriteTable}

## B. 新規記事候補（表示 5 回以上、CTR < 5%）

検索結果には表示されているがクリックされていないクエリ。既存記事が十分応えられていないため新規制作を検討。

${newArticleCandidates.length === 0 ? "_該当なし_" : newTable}

## C. 強みキーワード（順位 1〜3 位、表示 5 回以上）

既に勝てているクエリ。内部リンクを集めて維持・強化する。

${strongKeywords.length === 0 ? "_該当なし_" : strongTable}
`;

  const outDir = resolve(ROOT, ".ai-team");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, `KEYWORD_ANALYSIS_${endDate}.md`);
  writeFileSync(outPath, md, "utf-8");

  console.log(`\nA. リライト対象: ${rewriteCandidates.length} 件`);
  console.log(`B. 新規記事候補: ${newArticleCandidates.length} 件`);
  console.log(`C. 強みキーワード: ${strongKeywords.length} 件`);
  console.log(`\n保存: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
