#!/usr/bin/env node
/**
 * 8つの業種ラッパーコンポーネントに CategoryNextStepCta を注入するスクリプト。
 * いずれも ContentCta の直後、</section>/</main> の前に追加する。
 * categorySlug="industry-guide" を直接渡す。
 */
import fs from "node:fs";
import path from "node:path";

const wrappers = [
  "src/components/articles/AgriculturePrimaryIndustryArticlePage.tsx",
  "src/components/articles/CommercialIndustryArticlePage.tsx",
  "src/components/articles/HotelLeisureIndustryArticlePage.tsx",
  "src/components/articles/ITTechnologyIndustryArticlePage.tsx",
  "src/components/articles/LogisticsInfrastructureIndustryArticlePage.tsx",
  "src/components/articles/ManufacturingIndustryArticlePage.tsx",
  "src/components/articles/MedicalWelfareIndustryArticlePage.tsx",
  "src/components/articles/OfficePublicIndustryArticlePage.tsx",
];

const importLine = `import CategoryNextStepCta from "../simulator/CategoryNextStepCta";`;

let updated = 0;
let skipped = 0;
for (const p of wrappers) {
  let content = fs.readFileSync(p, "utf8");
  const hadCrlf = content.includes("\r\n");
  if (hadCrlf) content = content.replace(/\r\n/g, "\n");

  if (content.includes("CategoryNextStepCta")) {
    skipped++;
    continue;
  }

  // ① import を追加（既存の import 群の末尾に）
  // RelatedLinks の import の直後に入れる
  content = content.replace(
    /(import RelatedLinks from "[^"]+";)/,
    (_, m1) => `${m1}\n${importLine}`
  );

  // もし上記で入らなかった場合、 ContentCta の import の後ろに
  if (!content.includes("CategoryNextStepCta")) {
    content = content.replace(
      /(import ContentCta from "[^"]+";)/,
      (_, m1) => `${m1}\n${importLine}`
    );
  }

  // ② </section> </main> の直前（ContentCta の後ろ）に注入
  // </section> の直前に <CategoryNextStepCta categorySlug="industry-guide" /> を追加
  content = content.replace(
    /(\s+)<\/section>\s*\n(\s+)<\/main>/,
    (_, indent1, indent2) =>
      `${indent1}<CategoryNextStepCta categorySlug="industry-guide" />${indent1}</section>\n${indent2}</main>`
  );

  fs.writeFileSync(p, content);
  updated++;
  console.log(`✅ ${path.basename(p)}`);
}

console.log(`\nUpdated: ${updated}, Skipped: ${skipped}`);
