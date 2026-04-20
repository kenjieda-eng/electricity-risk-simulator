#!/usr/bin/env node
/**
 * 指定した 5 ページそれぞれについて、直近 28 日の GSC 上位クエリを出力する一時スクリプト。
 * T-17 の事前データ取得用。
 */
import { google } from "googleapis";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const envPath = resolve(ROOT, ".env.local");
const envContent = readFileSync(envPath, "utf-8").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
const env = {};
const re = /^([A-Z_][A-Z0-9_]*)=("(?:[^"\\]|\\.)*"|[^\n]*)/gm;
let m;
while ((m = re.exec(envContent)) !== null) {
  const key = m[1];
  let value = m[2].trim();
  if (value.startsWith('"') && value.endsWith('"')) {
    value = value.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"');
  }
  env[key] = value;
}

const SITE_URL = env.SEARCH_CONSOLE_SITE_URL;
const auth = new google.auth.JWT({
  email: env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
});
const sc = google.searchconsole({ version: "v1", auth });

const today = new Date();
const endDate = today.toISOString().slice(0, 10);
const startDateObj = new Date(today);
startDateObj.setDate(today.getDate() - 28);
const startDate = startDateObj.toISOString().slice(0, 10);

const PAGES = [
  "/fuel-cost-adjustment",
  "/why-business-electricity-prices-rise",
  "/articles/last-resort-supply",
  "/market-linked-plan",
  "/how-to-start-electricity-contract-review",
];

const baseUrlNoSlash = SITE_URL.replace(/\/$/, "");

async function main() {
  console.log(`GSC per-page query (${startDate} - ${endDate})\nsite: ${SITE_URL}\n`);
  for (const path of PAGES) {
    const pageUrl = baseUrlNoSlash + path;
    const res = await sc.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["query"],
        dimensionFilterGroups: [
          {
            filters: [{ dimension: "page", operator: "equals", expression: pageUrl }],
          },
        ],
        rowLimit: 15,
      },
    });
    const rows = res.data.rows || [];
    const total = rows.reduce(
      (acc, r) => ({
        clicks: acc.clicks + (r.clicks || 0),
        imp: acc.imp + (r.impressions || 0),
      }),
      { clicks: 0, imp: 0 }
    );
    console.log(`## ${path}`);
    console.log(`  page totals: ${total.clicks} clicks / ${total.imp} imp`);
    if (rows.length === 0) {
      console.log(`  (no query data)`);
    } else {
      console.log(`  top queries (up to 15):`);
      for (const r of rows) {
        const q = r.keys[0];
        const pos = r.position.toFixed(1);
        const ctr = (r.ctr * 100).toFixed(1);
        console.log(
          `    - "${q}" pos=${pos} imp=${r.impressions} clicks=${r.clicks} ctr=${ctr}%`
        );
      }
    }
    console.log();
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
