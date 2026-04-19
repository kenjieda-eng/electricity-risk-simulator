#!/usr/bin/env node
/**
 * GA4 レポートスクリプト（simulator.eic-jp.org 限定）
 *
 * 使い方:
 *   node scripts/ga4-report.mjs
 *   node scripts/ga4-report.mjs --from=2026-04-01 --to=2026-04-19
 *
 * 出力:
 *   コンソールにテーブル形式 + `.ai-team/GA4_REPORT_YYYY-MM-DD.md`
 *
 * 仕様:
 *   - hostname = "simulator.eic-jp.org" のみ（eic-jp.org は除外）
 *   - デフォルト期間: 2026-04-01〜today
 *   - 出力4種: (1) 日別PV/UU, (2) ページ別PV上位30, (3) 流入元, (4) contact_cta_click配置別
 */

import { google } from "googleapis";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// --- .env.local 読み込み ---
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
const argFrom = process.argv.find((a) => a.startsWith("--from="))?.split("=")[1];
const argTo = process.argv.find((a) => a.startsWith("--to="))?.split("=")[1];
const today = new Date().toISOString().slice(0, 10);
const startDate = argFrom || "2026-04-01";
const endDate = argTo || today;

console.log(`GA4 レポート: ${startDate} 〜 ${endDate}（hostname=simulator.eic-jp.org）`);

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

async function runReport(requestBody) {
  const res = await analyticsdata.properties.runReport({
    property: `properties/${PROPERTY_ID}`,
    requestBody,
  });
  return res.data.rows || [];
}

function table(header, rows) {
  const sep = "-".repeat(header.reduce((s, h) => s + h.length + 3, 0));
  const line = (cols) => cols.map((c, i) => String(c).padEnd(header[i].length)).join(" | ");
  return [line(header), sep, ...rows.map((r) => line(r))].join("\n");
}

function markdownTable(header, rows) {
  return [
    "| " + header.join(" | ") + " |",
    "| " + header.map(() => "---").join(" | ") + " |",
    ...rows.map((r) => "| " + r.join(" | ") + " |"),
  ].join("\n");
}

async function main() {
  const sections = [];

  // 1) 日別PV/UU
  const daily = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "date" }, { name: "hostname" }],
    metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }],
    dimensionFilter: hostnameFilter,
    orderBys: [{ dimension: { dimensionName: "date" } }],
    limit: 200,
  });
  const dailyRows = daily.map((r) => [
    `${r.dimensionValues[0].value.slice(0, 4)}-${r.dimensionValues[0].value.slice(4, 6)}-${r.dimensionValues[0].value.slice(6)}`,
    r.metricValues[0].value,
    r.metricValues[1].value,
    r.metricValues[2].value,
  ]);
  console.log("\n[1] 日別 ユーザー / セッション / PV\n");
  console.log(table(["日付", "ユーザー", "セッション", "PV"], dailyRows));
  sections.push(
    "## 1. 日別 ユーザー / セッション / PV\n\n" +
      markdownTable(["日付", "ユーザー", "セッション", "PV"], dailyRows)
  );

  // 2) ページ別PV上位30
  const pages = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "pagePath" }, { name: "hostname" }],
    metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }],
    dimensionFilter: hostnameFilter,
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: 30,
  });
  const pageRows = pages.map((r) => [
    r.dimensionValues[0].value,
    r.metricValues[0].value,
    r.metricValues[1].value,
  ]);
  console.log("\n[2] ページ別PV上位30\n");
  console.log(table(["pagePath", "PV", "UU"], pageRows));
  sections.push(
    "## 2. ページ別PV上位30\n\n" + markdownTable(["pagePath", "PV", "UU"], pageRows)
  );

  // 3) 流入元
  const sources = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [
      { name: "sessionSource" },
      { name: "sessionMedium" },
      { name: "hostname" },
    ],
    metrics: [{ name: "sessions" }, { name: "activeUsers" }],
    dimensionFilter: hostnameFilter,
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: 30,
  });
  const sourceRows = sources.map((r) => [
    r.dimensionValues[0].value,
    r.dimensionValues[1].value,
    r.metricValues[0].value,
    r.metricValues[1].value,
  ]);
  console.log("\n[3] 流入元（source / medium）\n");
  console.log(table(["source", "medium", "セッション", "UU"], sourceRows));
  sections.push(
    "## 3. 流入元\n\n" +
      markdownTable(["source", "medium", "セッション", "UU"], sourceRows)
  );

  // 4) contact_cta_click 配置別
  const ctaClicks = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [
      { name: "eventName" },
      { name: "customEvent:source" },
      { name: "hostname" },
    ],
    metrics: [{ name: "eventCount" }],
    dimensionFilter: {
      andGroup: {
        expressions: [
          hostnameFilter,
          {
            filter: {
              fieldName: "eventName",
              stringFilter: { matchType: "EXACT", value: "contact_cta_click" },
            },
          },
        ],
      },
    },
    orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
    limit: 30,
  });
  const ctaRows = ctaClicks.map((r) => [
    r.dimensionValues[1].value || "(未設定)",
    r.metricValues[0].value,
  ]);
  console.log("\n[4] contact_cta_click 配置別（source パラメータ）\n");
  if (ctaRows.length === 0) {
    console.log("（データなし — デプロイ直後の場合は数日〜2週間待ってください）");
  } else {
    console.log(table(["source", "クリック数"], ctaRows));
  }
  sections.push(
    "## 4. contact_cta_click 配置別\n\n" +
      (ctaRows.length === 0
        ? "_（データなし — 計測開始から2週間ほどで蓄積されます）_"
        : markdownTable(["source", "クリック数"], ctaRows))
  );

  // Markdown 保存
  const outDir = resolve(ROOT, ".ai-team");
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, `GA4_REPORT_${today}.md`);
  const md = `# GA4 レポート（${startDate} 〜 ${endDate}）\n\n**hostname フィルタ**: simulator.eic-jp.org\n**取得日時**: ${new Date().toISOString()}\n\n${sections.join(
    "\n\n"
  )}\n`;
  writeFileSync(outPath, md, "utf-8");
  console.log(`\n保存: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
