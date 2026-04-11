#!/usr/bin/env node
/**
 * 全記事ページに <CategoryNextStepCta slug="..." /> を注入するスクリプト。
 *
 * 使い方: node scripts/inject-category-cta.mjs
 *
 * 処理内容:
 * 1. src/data/articles.ts から articleList のslug一覧を抽出
 * 2. 各slugに対応する src/app/<slug>/page.tsx を検索
 * 3. すでにCategoryNextStepCtaがあればスキップ
 * 4. なければ：
 *    - import文を追加（既存のimport群の末尾に追加）
 *    - <CategoryNextStepCta slug="..." /> を </main> の直前に追加
 * 5. 統計を出力
 */

import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const articlesTsPath = path.join(projectRoot, "src/data/articles.ts");
const appDir = path.join(projectRoot, "src/app");

const articlesContent = fs.readFileSync(articlesTsPath, "utf8");

// articleListのslugのみ抽出（カテゴリslugは除外）
// 各エントリはtitle:とslug:の両方を持つため、titleが先に出る文脈を手がかりに抽出
const categorySlugSet = new Set([
  "basic",
  "price-increase",
  "price-trends",
  "plan-types",
  "review-points",
  "last-resort-supply",
  "risk-scenarios",
  "power-procurement",
  "monthly-review",
  "industry-guide",
  "energy-equipment",
  "internal-explanation",
  "diagnostic-tools",
  "case-studies",
  "emergency-response",
  "municipality",
  "benchmarks",
  "subsidies",
  "for-executives",
  "by-region",
]);

const slugPattern = /slug:\s*"([a-z0-9-]+)"/g;
const rawSlugs = new Set();
let m;
while ((m = slugPattern.exec(articlesContent)) !== null) {
  rawSlugs.add(m[1]);
}
// カテゴリslugを除外
const articleSlugs = [...rawSlugs].filter((s) => !categorySlugSet.has(s));

console.log(`Found ${articleSlugs.length} article slugs in articles.ts`);

const IMPORT_LINE = `import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";`;

let injected = 0;
let skippedAlreadyHas = 0;
let skippedNoFile = 0;
let skippedNoMain = 0;
let skippedNoImports = 0;

for (const slug of articleSlugs) {
  const pagePath = path.join(appDir, slug, "page.tsx");
  if (!fs.existsSync(pagePath)) {
    skippedNoFile++;
    continue;
  }

  let content = fs.readFileSync(pagePath, "utf8");

  // 既に含まれていればスキップ
  if (content.includes("CategoryNextStepCta")) {
    skippedAlreadyHas++;
    continue;
  }

  // CRLF → LF に正規化（処理しやすくするため）。書き戻すときもLFで統一。
  const hadCrlf = content.includes("\r\n");
  if (hadCrlf) content = content.replace(/\r\n/g, "\n");

  // ① import文を挿入
  // 最後のimport文（単行で始まる `import ...;` または複数行 `} from "...";`）の後ろに追加
  const lines = content.split("\n");
  let lastImportLineIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    // 単行 import
    if (/^import .+;$/.test(ln)) {
      lastImportLineIdx = i;
      continue;
    }
    // 複数行 import の終端
    if (/^\}\s+from\s+"[^"]+";$/.test(ln)) {
      lastImportLineIdx = i;
      continue;
    }
  }

  if (lastImportLineIdx === -1) {
    console.log(`  SKIP ${slug}: no import line found`);
    skippedNoImports++;
    continue;
  }

  // import行の次にIMPORT_LINEを挿入
  lines.splice(lastImportLineIdx + 1, 0, IMPORT_LINE);

  // ② </main> の直前にコンポーネント呼び出しを挿入
  // lines配列上で最後の </main> を含む行を見つける
  let mainCloseLineIdx = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].includes("</main>")) {
      mainCloseLineIdx = i;
      break;
    }
  }

  if (mainCloseLineIdx === -1) {
    console.log(`  SKIP ${slug}: no </main> found`);
    skippedNoMain++;
    continue;
  }

  // </main> が含まれる行のインデント量を取得
  const mainLine = lines[mainCloseLineIdx];
  const indentMatch = mainLine.match(/^(\s*)/);
  const indent = indentMatch ? indentMatch[1] : "    ";
  // 内側コンポーネントは </main> のインデント + 2（JSX本体相当）
  const innerIndent = indent + "  ";

  const block = [
    `${innerIndent}<div className="mt-6">`,
    `${innerIndent}  <CategoryNextStepCta slug="${slug}" />`,
    `${innerIndent}</div>`,
  ];

  lines.splice(mainCloseLineIdx, 0, ...block);

  fs.writeFileSync(pagePath, lines.join("\n"));
  injected++;
}

console.log("");
console.log(`✅ Injected: ${injected}`);
console.log(`⏭  Already had CTA: ${skippedAlreadyHas}`);
console.log(`⚠  Missing page.tsx: ${skippedNoFile}`);
console.log(`⚠  No </main>: ${skippedNoMain}`);
console.log(`⚠  No imports: ${skippedNoImports}`);
