import type { ArticleCategorySlug } from "../data/articles";

/** /articles TOP でカテゴリを4つの大分類で束ねるためのグルーピング */

export type CategoryGroupKey = "fundamentals" | "practice" | "attributes" | "frontier";

export type CategoryMajorGroup = {
  key: CategoryGroupKey;
  title: string;
  description: string;
  categorySlugs: ArticleCategorySlug[];
};

export const CATEGORY_MAJOR_GROUPS: CategoryMajorGroup[] = [
  {
    key: "fundamentals",
    title: "基礎と仕組み",
    description: "料金構造・上昇要因・契約メニュー・調達・シナリオ・用語・FAQ など、読み進める前に押さえたい基礎ブロック。",
    categorySlugs: [
      "basic",
      "price-increase",
      "price-trends",
      "plan-types",
      "last-resort-supply",
      "risk-scenarios",
      "power-procurement",
      "glossary",
      "faq",
    ],
  },
  {
    key: "practice",
    title: "実務・見直し",
    description: "見直しフロー・設備対策・社内説明・診断ツール・事例・緊急対応・相場など、担当者の日常業務に直結する実務ブロック。",
    categorySlugs: [
      "review-points",
      "industry-guide",
      "energy-equipment",
      "internal-explanation",
      "diagnostic-tools",
      "case-studies",
      "emergency-response",
      "benchmarks",
    ],
  },
  {
    key: "attributes",
    title: "属性・領域別",
    description: "自治体、経営層、地域、中小企業、経理、契約書、M&A、海外拠点など、読者属性・組織規模・テーマ別のブロック。",
    categorySlugs: [
      "municipality",
      "for-executives",
      "by-region",
      "sme-guide",
      "accounting-tax",
      "contract-legal",
      "ma-organizational-change",
      "global-energy",
    ],
  },
  {
    key: "frontier",
    title: "新領域・特集",
    description: "市場データ、脱炭素、PPA、DX、BCP、制度改正、EV、AI需要など、トレンド・差別化テーマを扱うブロック。",
    categorySlugs: [
      "market-data",
      "decarbonization",
      "corporate-ppa",
      "energy-dx",
      "energy-bcp",
      "regulation-timeline",
      "ev-charging",
      "datacenter-ai-demand",
      "subsidies",
    ],
  },
];

export function findGroupForCategory(slug: ArticleCategorySlug): CategoryGroupKey | null {
  for (const group of CATEGORY_MAJOR_GROUPS) {
    if (group.categorySlugs.includes(slug)) return group.key;
  }
  return null;
}
