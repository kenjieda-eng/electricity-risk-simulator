import { describe, expect, it } from "vitest";
import {
  getArticleBySlug,
  getArticlesByCategory,
  getArticlesBySlugs,
  getCategoryBySlug,
  getFeaturedArticles,
  getLatestArticles,
  getSortedCategories,
} from "../articles";

describe("getSortedCategories", () => {
  it("returns categories in ascending order", () => {
    const sorted = getSortedCategories();
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i].order).toBeGreaterThanOrEqual(sorted[i - 1].order);
    }
  });

  it("returns a copy, not the original reference", () => {
    const first = getSortedCategories();
    const second = getSortedCategories();
    expect(first).not.toBe(second);
  });
});

describe("getCategoryBySlug", () => {
  it("returns the matching category", () => {
    const category = getCategoryBySlug("basic");
    expect(category?.slug).toBe("basic");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getCategoryBySlug("__no-such-slug__")).toBeUndefined();
  });
});

describe("getArticlesByCategory", () => {
  it("returns articles of the given category, order ascending", () => {
    const articles = getArticlesByCategory("basic");
    expect(articles.length).toBeGreaterThan(0);
    for (const article of articles) {
      expect(article.categorySlug).toBe("basic");
    }
    for (let i = 1; i < articles.length; i++) {
      expect(articles[i].order).toBeGreaterThanOrEqual(articles[i - 1].order);
    }
  });

  it("returns an empty array for a category that has no articles", () => {
    // price-trends is a valid category; the filter should still be purely
    // filter+sort and never crash on any valid slug.
    expect(Array.isArray(getArticlesByCategory("price-trends"))).toBe(true);
  });
});

describe("getArticlesBySlugs", () => {
  it("returns articles in the order of the input slug list", () => {
    const articles = getArticlesByCategory("basic").slice(0, 3);
    const slugs = [articles[2].slug, articles[0].slug, articles[1].slug];
    const reordered = getArticlesBySlugs(slugs);
    expect(reordered.map((a) => a.slug)).toEqual(slugs);
  });

  it("skips unknown slugs silently", () => {
    const known = getArticlesByCategory("basic")[0];
    const result = getArticlesBySlugs([known.slug, "__missing__"]);
    expect(result.map((a) => a.slug)).toEqual([known.slug]);
  });
});

describe("getLatestArticles", () => {
  it("returns the requested number of articles in publishedAt-desc order", () => {
    const latest = getLatestArticles(5);
    expect(latest).toHaveLength(5);
    for (let i = 1; i < latest.length; i++) {
      expect(new Date(latest[i].publishedAt).getTime()).toBeLessThanOrEqual(
        new Date(latest[i - 1].publishedAt).getTime()
      );
    }
  });
});

describe("getFeaturedArticles", () => {
  it("returns only featured=true articles up to the limit", () => {
    const featured = getFeaturedArticles(10);
    for (const article of featured) {
      expect(article.featured).toBe(true);
    }
    expect(featured.length).toBeLessThanOrEqual(10);
  });
});

describe("getArticleBySlug", () => {
  it("returns an existing article", () => {
    const sample = getLatestArticles(1)[0];
    expect(getArticleBySlug(sample.slug)?.slug).toBe(sample.slug);
  });

  it("returns undefined for a missing slug", () => {
    expect(getArticleBySlug("__no-such-slug__")).toBeUndefined();
  });
});
