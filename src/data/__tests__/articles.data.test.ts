import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { articleCategories, articleList } from "../articles";

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

describe("articleList data integrity", () => {
  it("has a unique slug on every article", () => {
    const slugs = articleList.map((a) => a.slug);
    const duplicates = slugs.filter((slug, i) => slugs.indexOf(slug) !== i);
    expect(duplicates).toEqual([]);
  });

  it("references only declared categorySlug values", () => {
    const known = new Set(articleCategories.map((c) => c.slug));
    const orphans = articleList
      .filter((a) => !known.has(a.categorySlug))
      .map((a) => `${a.slug} -> ${a.categorySlug}`);
    expect(orphans).toEqual([]);
  });

  it("publishedAt is ISO-8601-ish (YYYY-MM-DD) and parses as a real date", () => {
    const bad = articleList
      .filter((a) => !DATE_RE.test(a.publishedAt) || Number.isNaN(Date.parse(a.publishedAt)))
      .map((a) => `${a.slug} -> ${a.publishedAt}`);
    expect(bad).toEqual([]);
  });

  it("has a non-empty title and description", () => {
    const empty = articleList
      .filter((a) => !a.title?.trim() || !a.description?.trim())
      .map((a) => a.slug);
    expect(empty).toEqual([]);
  });
});

// /business-electricity-retrospective/ 配下（月次振り返り・区分別推移・ウクライナショック特集）は
// recommendedReadingOrder にのみ登録し、articleList には追加しない運用のため orphan 判定から除外する。
// 除外したぶんの担保として、下の「実ページが存在すること」のテストでタイポを検出する。
const RETROSPECTIVE_PREFIX = "business-electricity-retrospective/";

describe("articleCategories data integrity", () => {
  it("has a unique slug on every category", () => {
    const slugs = articleCategories.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("recommendedReadingOrder only contains slugs that exist in articleList", () => {
    const existing = new Set(articleList.map((a) => a.slug));
    const orphans: string[] = [];
    for (const category of articleCategories) {
      for (const slug of category.recommendedReadingOrder) {
        if (slug.startsWith(RETROSPECTIVE_PREFIX)) continue;
        if (!existing.has(slug)) {
          orphans.push(`${category.slug} -> ${slug}`);
        }
      }
    }
    expect(orphans).toEqual([]);
  });

  it("retrospective entries excluded from the orphan check still resolve to a real page", () => {
    const missing: string[] = [];
    for (const category of articleCategories) {
      for (const slug of category.recommendedReadingOrder) {
        if (!slug.startsWith(RETROSPECTIVE_PREFIX)) continue;
        if (!fs.existsSync(path.join(process.cwd(), "src", "app", slug, "page.tsx"))) {
          missing.push(`${category.slug} -> ${slug}`);
        }
      }
    }
    expect(missing).toEqual([]);
  });
});
