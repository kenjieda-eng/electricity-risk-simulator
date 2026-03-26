import { articleCategories, articleList, type ArticleCategorySlug } from "../data/articles";

export function getSortedCategories() {
  return [...articleCategories].sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string) {
  return articleCategories.find((category) => category.slug === slug);
}

export function getArticlesByCategory(categorySlug: ArticleCategorySlug) {
  return articleList
    .filter((article) => article.categorySlug === categorySlug)
    .sort((a, b) => a.order - b.order);
}

export function getArticlesBySlugs(slugs: string[]) {
  const rank = new Map(slugs.map((slug, index) => [slug, index]));
  return articleList
    .filter((article) => rank.has(article.slug))
    .sort((a, b) => (rank.get(a.slug) ?? 0) - (rank.get(b.slug) ?? 0));
}

export function getLatestArticles(limit = 6) {
  return [...articleList]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getFeaturedArticles(limit = 5) {
  return articleList.filter((article) => article.featured).slice(0, limit);
}

