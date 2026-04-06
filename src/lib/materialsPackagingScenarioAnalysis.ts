export const MATERIALS_SCENARIO_BASE_PATH = "/special/materials-packaging-scenario-analysis";

export type MaterialsScenarioPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroKicker: string;
};

export const MATERIALS_SCENARIO_SERIES: MaterialsScenarioPage[] = [
  {
    slug: "index",
    label: "総論トップ",
    title: "原材料・包装資材の有事シナリオ分析",
    description:
      "ナフサ不足・エチレン減産を起点に、プラスチック・包装資材・化学品・非鉄金属までの価格上昇と供給制約を3シナリオで比較する総論ページです。",
    heroKicker: "MATERIALS SCENARIO ANALYSIS",
  },
  {
    slug: "naphtha-petrochemical",
    label: "ナフサ・石化",
    title: "ナフサ不足とエチレン減産の構造",
    description:
      "原油からナフサ、エチレン、樹脂、最終製品へ波及するサプライチェーンを図解し、国内エチレン減産と在庫タイムリミットを整理します。",
    heroKicker: "NAPHTHA & PETROCHEMICAL",
  },
  {
    slug: "plastic-resin",
    label: "プラスチック樹脂",
    title: "PE / PP / PET / PVC の価格動向",
    description:
      "塩ビ樹脂の値上げとPE・PP・PETの供給逼迫を前提に、4大汎用樹脂のシナリオ別価格見通しを解説します。",
    heroKicker: "PLASTICS",
  },
  {
    slug: "packaging",
    label: "包装資材",
    title: "段ボール・フィルム・容器トレーの値上げ分析",
    description:
      "段ボール、ストレッチフィルム、OPPテープ、食品トレーなどの値上げ率と影響時期を整理し、EC・食品業への波及を確認します。",
    heroKicker: "PACKAGING",
  },
  {
    slug: "chemicals",
    label: "化学品",
    title: "溶剤・接着剤・塗料・界面活性剤の動向",
    description:
      "ナフサ由来化学品の値上げ見通しと、製造業・建設業・日用品への波及を用途別に整理します。",
    heroKicker: "CHEMICALS",
  },
  {
    slug: "non-ferrous-metals",
    label: "非鉄金属",
    title: "アルミ・銅・亜鉛の価格動向",
    description:
      "LME相場と円安の二重影響を前提に、アルミ・銅・亜鉛を中心とした調達コスト上昇リスクを業種別に確認します。",
    heroKicker: "NON-FERROUS METALS",
  },
  {
    slug: "industry-impact",
    label: "業種別影響",
    title: "製造業・EC・食品メーカー・建設の調達コスト影響",
    description:
      "食品、EC、製造、建設など主要業種ごとに、年間コスト増と利益圧迫リスクを試算します。",
    heroKicker: "INDUSTRY IMPACT",
  },
  {
    slug: "action-roadmap",
    label: "対策ロードマップ",
    title: "調達戦略・代替材・在庫・価格転嫁の整理",
    description:
      "短期・中期・長期の3段階で、調達契約、代替材、在庫、価格転嫁を実務的に進める手順をまとめます。",
    heroKicker: "ACTION ROADMAP",
  },
];

export const MATERIALS_SCENARIO_SLUGS = MATERIALS_SCENARIO_SERIES.filter((item) => item.slug !== "index").map((item) => item.slug);

export function getMaterialsScenarioPageBySlug(slug: string) {
  return MATERIALS_SCENARIO_SERIES.find((item) => item.slug === slug);
}

export function getMaterialsScenarioPagePath(slug: string) {
  return slug === "index" ? MATERIALS_SCENARIO_BASE_PATH : `${MATERIALS_SCENARIO_BASE_PATH}/${slug}`;
}

export function getMaterialsScenarioNeighbors(slug: string) {
  const index = MATERIALS_SCENARIO_SERIES.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? MATERIALS_SCENARIO_SERIES[index - 1] : null,
    next: index < MATERIALS_SCENARIO_SERIES.length - 1 ? MATERIALS_SCENARIO_SERIES[index + 1] : null,
  };
}
