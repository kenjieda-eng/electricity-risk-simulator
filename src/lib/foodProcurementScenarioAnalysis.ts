export const FOOD_SCENARIO_BASE_PATH = "/special/food-procurement-scenario-analysis";

export type FoodScenarioPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroKicker: string;
};

export const FOOD_SCENARIO_SERIES: FoodScenarioPage[] = [
  {
    slug: "index",
    label: "総論トップ",
    title: "食料品仕入コスト上昇シナリオ分析",
    description:
      "2026年の食料品仕入コスト上昇を3シナリオで比較し、飲食業・食品製造業への影響と対応策を整理する総論ページです。",
    heroKicker: "FOOD PROCUREMENT SCENARIO ANALYSIS",
  },
  {
    slug: "cost-structure",
    label: "原価構造",
    title: "飲食・食品製造のコスト構造と値上げ5要因",
    description:
      "飲食業と食品製造業のコスト構造を可視化し、原材料・包装・物流・人件費・エネルギーの5重苦が利益を圧迫する構造を解説します。",
    heroKicker: "COST STRUCTURE",
  },
  {
    slug: "grain-and-oil",
    label: "穀物・油脂",
    title: "穀物・油脂の価格動向",
    description:
      "小麦、食用油、コメ、砂糖の値動きと、パン・麺・揚げ物・菓子などへの波及をシナリオ別に整理します。",
    heroKicker: "GRAIN & OIL",
  },
  {
    slug: "protein",
    label: "畜産・水産",
    title: "畜産・水産の供給制約と価格動向",
    description:
      "豚肉・鶏卵・牛肉・水産物の供給制約と価格上昇リスクを、飼料・燃油コストの視点から解説します。",
    heroKicker: "PROTEIN",
  },
  {
    slug: "produce-and-dairy",
    label: "青果・乳製品",
    title: "青果・乳製品の変動リスク",
    description:
      "野菜・果物の天候リスクと、バター・チーズ・生クリームの上昇圧力を季節要因も含めて整理します。",
    heroKicker: "PRODUCE & DAIRY",
  },
  {
    slug: "restaurant-impact",
    label: "飲食業",
    title: "飲食業の業態別原価率悪化シミュレーション",
    description:
      "ラーメン、居酒屋、ファミレス、焼肉、寿司などの業態別に、原価率悪化と利益圧迫の規模を試算します。",
    heroKicker: "RESTAURANT",
  },
  {
    slug: "food-manufacturer",
    label: "食品製造",
    title: "食品製造業の仕入コスト増と価格転嫁",
    description:
      "食品メーカーにおける原材料・包装・エネルギーの三重コスト増と、価格転嫁の実態を整理します。",
    heroKicker: "FOOD MANUFACTURER",
  },
  {
    slug: "action-roadmap",
    label: "対策ロードマップ",
    title: "仕入・メニュー・価格の最適化ロードマップ",
    description:
      "短期・中期・長期の3段階で、飲食業・食品製造業が実行しやすい仕入コスト対策をまとめます。",
    heroKicker: "ACTION ROADMAP",
  },
];

export const FOOD_SCENARIO_SLUGS = FOOD_SCENARIO_SERIES.filter((item) => item.slug !== "index").map((item) => item.slug);

export function getFoodScenarioPageBySlug(slug: string) {
  return FOOD_SCENARIO_SERIES.find((item) => item.slug === slug);
}

export function getFoodScenarioPagePath(slug: string) {
  return slug === "index" ? FOOD_SCENARIO_BASE_PATH : `${FOOD_SCENARIO_BASE_PATH}/${slug}`;
}

export function getFoodScenarioNeighbors(slug: string) {
  const index = FOOD_SCENARIO_SERIES.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? FOOD_SCENARIO_SERIES[index - 1] : null,
    next: index < FOOD_SCENARIO_SERIES.length - 1 ? FOOD_SCENARIO_SERIES[index + 1] : null,
  };
}
