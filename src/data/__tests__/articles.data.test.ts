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
        if (!existing.has(slug)) {
          orphans.push(`${category.slug} -> ${slug}`);
        }
      }
    }
    expect(orphans).toEqual([]);
  });
});
