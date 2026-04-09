import { articleList, articleCategories } from "../data/articles";
import {
  EMERGENCY_SCENARIO_SERIES,
  EMERGENCY_SCENARIO_BASE_PATH,
} from "./emergencyScenarioAnalysis";
import {
  OIL_SCENARIO_SERIES,
  OIL_SCENARIO_BASE_PATH,
} from "./oilScenarioAnalysis";
import {
  GAS_SCENARIO_SERIES,
  GAS_SCENARIO_BASE_PATH,
} from "./gasScenarioAnalysis";
import {
  MATERIALS_SCENARIO_SERIES,
  MATERIALS_SCENARIO_BASE_PATH,
} from "./materialsPackagingScenarioAnalysis";
import {
  FOOD_SCENARIO_SERIES,
  FOOD_SCENARIO_BASE_PATH,
} from "./foodProcurementScenarioAnalysis";
import {
  FX_DOUBLE_EFFECT_SERIES,
  FX_DOUBLE_EFFECT_BASE_PATH,
} from "./fxDoubleEffectScenarioAnalysis";
import {
  INDUSTRY_MIDDLE_CATEGORIES,
  getIndustryArticleHref,
} from "./articleIndustryCategories";
import {
  MONTHLY_RETROSPECTIVE_ITEMS,
} from "../app/business-electricity-retrospective/_lib/hub-data";

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
};

function buildScenarioEntries(
  series: { slug: string; title: string; description: string }[],
  basePath: string,
  category: string,
): SearchEntry[] {
  return series.map((page) => ({
    title: page.title,
    description: page.description,
    href: page.slug === "index" ? basePath : `${basePath}/${page.slug}`,
    category,
  }));
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  // --- 記事 ---
  for (const article of articleList) {
    const cat = articleCategories.find((c) => c.slug === article.categorySlug);
    entries.push({
      title: article.title,
      description: article.description,
      href: `/${article.slug}`,
      category: cat?.name ?? article.category,
    });
  }

  // --- 特集シリーズ（6種） ---
  entries.push(
    ...buildScenarioEntries(EMERGENCY_SCENARIO_SERIES, EMERGENCY_SCENARIO_BASE_PATH, "特集：有事シナリオ（電気料金）"),
    ...buildScenarioEntries(OIL_SCENARIO_SERIES, OIL_SCENARIO_BASE_PATH, "特集：有事シナリオ（原油・物流）"),
    ...buildScenarioEntries(GAS_SCENARIO_SERIES, GAS_SCENARIO_BASE_PATH, "特集：有事シナリオ（ガス）"),
    ...buildScenarioEntries(MATERIALS_SCENARIO_SERIES, MATERIALS_SCENARIO_BASE_PATH, "特集：有事シナリオ（原材料・包装）"),
    ...buildScenarioEntries(FOOD_SCENARIO_SERIES, FOOD_SCENARIO_BASE_PATH, "特集：有事シナリオ（食料品仕入）"),
    ...buildScenarioEntries(FX_DOUBLE_EFFECT_SERIES, FX_DOUBLE_EFFECT_BASE_PATH, "特集：有事シナリオ（円安×原油）"),
  );

  // --- 業種別カテゴリ・記事 ---
  for (const middle of INDUSTRY_MIDDLE_CATEGORIES) {
    entries.push({
      title: `業種別ガイド：${middle.name}`,
      description: middle.shortDescription,
      href: `/articles/by-industry/${middle.slug}`,
      category: "業種別に知る",
    });
    for (const industry of middle.industries) {
      entries.push({
        title: industry.name,
        description: industry.description,
        href: getIndustryArticleHref(middle.slug, industry.plannedSlug),
        category: `業種別：${middle.name}`,
      });
    }
  }

  // --- 月次振り返り ---
  for (const item of MONTHLY_RETROSPECTIVE_ITEMS) {
    entries.push({
      title: item.title,
      description: item.description,
      href: item.href,
      category: "法人電気料金振り返り",
    });
  }

  // --- 固定ページ ---
  entries.push(
    {
      title: "電気料金上昇リスク診断シミュレーター",
      description: "電気料金の値上がりリスクを30秒で診断できるシミュレーターです。",
      href: "/",
      category: "ツール",
    },
    {
      title: "電力料金上昇リスク診断の使い方",
      description: "シミュレーターの操作手順と結果の読み方を解説します。",
      href: "/how-to",
      category: "ツール",
    },
    {
      title: "料金メニュー比較診断",
      description: "市場連動と固定プランの違いを比較診断できます。",
      href: "/compare",
      category: "ツール",
    },
    {
      title: "法人向け電気料金の基礎知識（記事一覧）",
      description: "電気料金の仕組み・見直しポイント・リスクシナリオなどを体系的に学べる記事一覧です。",
      href: "/articles",
      category: "記事ハブ",
    },
    {
      title: "法人電気料金振り返りハブ",
      description: "月次の法人向け電気料金動向を振り返り、契約判断や予算計画の参考にできます。",
      href: "/business-electricity-retrospective",
      category: "法人電気料金振り返り",
    },
    {
      title: "有事シナリオ分析 特集一覧",
      description: "法人のエネルギー・原材料関連コスト上昇リスクをシナリオ別に確認できる特集ページです。",
      href: "/special",
      category: "特集",
    },
  );

  // --- 記事カテゴリページ ---
  for (const cat of articleCategories) {
    entries.push({
      title: cat.name,
      description: cat.description,
      href: `/articles/${cat.slug}`,
      category: "記事カテゴリ",
    });
  }

  return entries;
}
