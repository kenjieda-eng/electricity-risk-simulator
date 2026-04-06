export const GAS_SCENARIO_BASE_PATH = "/special/gas-scenario-analysis";

export type GasScenarioPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroKicker: string;
};

export const GAS_SCENARIO_SERIES: GasScenarioPage[] = [
  {
    slug: "index",
    label: "総論トップ",
    title: "イラン情勢で法人ガス代はどうなる？都市ガス・LPガスのシナリオ別分析",
    description:
      "2026年のイラン情勢・カタールLNG停止を前提に、都市ガス・LPガスの料金見通しと法人コスト影響を3シナリオで比較する総論ページです。",
    heroKicker: "GAS SCENARIO ANALYSIS",
  },
  {
    slug: "price-mechanism",
    label: "価格の仕組み",
    title: "LNG価格からガス料金が決まるまで",
    description:
      "都市ガス料金の構成、原料費調整制度、3〜4カ月のタイムラグ、規制料金と自由料金の違いを整理します。",
    heroKicker: "MECHANISM",
  },
  {
    slug: "subsidy-outlook",
    label: "補助金の行方",
    title: "電気・ガス料金支援はいつまで続くか",
    description:
      "都市ガス補助金（18円→6円/m3）の推移と5月以降の見通し、補助金終了時のコスト影響をシナリオ別に分析します。",
    heroKicker: "SUBSIDY ANALYSIS",
  },
  {
    slug: "lpg-trend",
    label: "LPガス",
    title: "プロパンガス（LPガス）の価格動向と都市ガスとの違い",
    description:
      "LPガスの価格構造、CP価格の動向、補助金対象外リスク、都市ガスとの比較を法人向けに整理します。",
    heroKicker: "LP GAS",
  },
  {
    slug: "industry-impact",
    label: "業種別影響",
    title: "業種別ガス代影響分析",
    description:
      "飲食業・食品製造・宿泊業など業種別に、ガス代高騰が利益へ与えるインパクトを比較します。",
    heroKicker: "INDUSTRY IMPACT",
  },
  {
    slug: "cost-simulation",
    label: "コスト試算",
    title: "使用量別・シナリオ別ガス代コスト試算",
    description:
      "月間100m3から10,000m3までの使用量別に、2025年比の年間コスト増をシナリオ別に可視化します。",
    heroKicker: "COST SIMULATION",
  },
  {
    slug: "electrification-comparison",
    label: "電化比較",
    title: "ガス vs ヒートポンプ vs オール電化",
    description:
      "給湯・暖房の方式別ランニングコスト、投資回収年数、用途別の電化適用性をシナリオ別に比較します。",
    heroKicker: "ELECTRIFICATION",
  },
  {
    slug: "action-roadmap",
    label: "対策ロードマップ",
    title: "対策ロードマップ — 今からできること",
    description:
      "ガス代高騰に備える法人向け対策を、短期・中期・長期の3段階で具体的に整理します。",
    heroKicker: "ACTION ROADMAP",
  },
];

export const GAS_SCENARIO_SLUGS = GAS_SCENARIO_SERIES.filter((item) => item.slug !== "index").map((item) => item.slug);

export function getGasScenarioPageBySlug(slug: string) {
  return GAS_SCENARIO_SERIES.find((item) => item.slug === slug);
}

export function getGasScenarioPagePath(slug: string) {
  return slug === "index" ? GAS_SCENARIO_BASE_PATH : `${GAS_SCENARIO_BASE_PATH}/${slug}`;
}

export function getGasScenarioNeighbors(slug: string) {
  const index = GAS_SCENARIO_SERIES.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? GAS_SCENARIO_SERIES[index - 1] : null,
    next: index < GAS_SCENARIO_SERIES.length - 1 ? GAS_SCENARIO_SERIES[index + 1] : null,
  };
}
