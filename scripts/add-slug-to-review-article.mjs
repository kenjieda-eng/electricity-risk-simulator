#!/usr/bin/env node
/**
 * ReviewArticlePage を使っている各ページに slug prop を追加するスクリプト。
 * ディレクトリ名をそのまま slug として渡す。
 */
import fs from "node:fs";
import path from "node:path";

function walk(dir, found = []) {
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      if (name.startsWith("_") || name.startsWith("[") || name === "api" || name === "admin") continue;
      walk(fp, found);
    } else if (name === "page.tsx") {
      const c = fs.readFileSync(fp, "utf8");
      if (c.includes("<ReviewArticlePage") && !c.includes("slug=")) {
        found.push(fp);
      }
    }
  }
  return found;
}

const pages = walk("src/app");
console.log(`Found ${pages.length} ReviewArticlePage pages without slug prop`);

let updated = 0;
for (const p of pages) {
  // ディレクトリ名をslugとして取得
  const dir = path.dirname(p);
  const slug = path.basename(dir);

  let content = fs.readFileSync(p, "utf8");
  const hadCrlf = content.includes("\r\n");
  if (hadCrlf) content = content.replace(/\r\n/g, "\n");

  // <ReviewArticlePage の直後（次の行）に slug="..." を追加
  // 単純に <ReviewArticlePage を <ReviewArticlePage\n      slug="..." に置換
  const before = content;
  content = content.replace(
    /<ReviewArticlePage\n(\s+)title=/,
    (_, indent) => `<ReviewArticlePage\n${indent}slug="${slug}"\n${indent}title=`
  );

  if (content === before) {
    // 別パターンの可能性
    content = content.replace(
      /<ReviewArticlePage(\s+)title=/,
      (_, ws) => `<ReviewArticlePage${ws}slug="${slug}"${ws}title=`
    );
  }

  if (content === before) {
    console.log(`  SKIP (pattern not matched): ${p}`);
    continue;
  }

  fs.writeFileSync(p, content);
  updated++;
}

console.log(`✅ Updated ${updated} pages`);
