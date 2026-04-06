export const OIL_SCENARIO_BASE_PATH = "/special/oil-scenario-analysis";

export type OilScenarioPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroKicker: string;
};

export const OIL_SCENARIO_SERIES: OilScenarioPage[] = [
  {
    slug: "index",
    label: "総論トップ",
    title: "イラン情勢で法人ガソリン代・物流コストはどうなる？",
    description:
      "原油・ガソリン・軽油・物流・社用車・旅費への影響を3シナリオで整理した原油シナリオ分析の総論ページです。",
    heroKicker: "OIL SCENARIO ANALYSIS",
  },
  {
    slug: "price-mechanism",
    label: "価格の仕組み",
    title: "原油からガソリン価格が決まるまで",
    description:
      "原油コスト・税金・流通マージンの内訳と、原油高が店頭価格へ波及する約1カ月のタイムラグを解説します。",
    heroKicker: "MECHANISM",
  },
  {
    slug: "subsidy-outlook",
    label: "補助金の行方",
    title: "170円抑制の補助金はいつまで続くか",
    description:
      "支給単価48.1円/Lと財源1兆800億円を前提に、補助金の持続性と縮小・終了時の価格インパクトをシナリオ別に検証します。",
    heroKicker: "SUBSIDY ANALYSIS",
  },
  {
    slug: "diesel-and-heavy-oil",
    label: "軽油・重油",
    title: "軽油・重油の価格動向と暫定税率廃止",
    description:
      "軽油引取税暫定税率廃止の実質効果、軽油・重油の価格シナリオ、トラック・バス・農業への影響を整理します。",
    heroKicker: "DIESEL & HEAVY OIL",
  },
  {
    slug: "logistics-cost",
    label: "配送・物流コスト",
    title: "配送・物流コストのシナリオ別分析",
    description:
      "燃料サーチャージ率と軽油価格の関係、配送パターン別のコスト増、荷主企業への転嫁影響を具体的に確認します。",
    heroKicker: "LOGISTICS COST",
  },
  {
    slug: "fleet-cost",
    label: "社用車・営業車",
    title: "社用車・営業車の燃料コスト試算",
    description:
      "保有台数別の燃料費増加、ガソリン車/HV/EVのランニングコスト比較、EV切替の回収年数を整理します。",
    heroKicker: "FLEET COST",
  },
  {
    slug: "travel-and-commute",
    label: "出張旅費・通勤費",
    title: "出張旅費・通勤費への影響",
    description:
      "マイカー通勤のキロ単価、出張旅費規程の見直し、航空燃油サーチャージ上昇への対応ポイントを解説します。",
    heroKicker: "TRAVEL & COMMUTE",
  },
  {
    slug: "action-roadmap",
    label: "対策ロードマップ",
    title: "対策ロードマップ — 今からできること",
    description:
      "短期・中期・長期の3段階で、法人のガソリン代と物流コストの上昇に対応する実務アクションを整理します。",
    heroKicker: "ACTION ROADMAP",
  },
];

export const OIL_SCENARIO_SLUGS = OIL_SCENARIO_SERIES.filter((item) => item.slug !== "index").map((item) => item.slug);

export function getOilScenarioPageBySlug(slug: string) {
  return OIL_SCENARIO_SERIES.find((item) => item.slug === slug);
}

export function getOilScenarioPagePath(slug: string) {
  return slug === "index" ? OIL_SCENARIO_BASE_PATH : `${OIL_SCENARIO_BASE_PATH}/${slug}`;
}

export function getOilScenarioNeighbors(slug: string) {
  const index = OIL_SCENARIO_SERIES.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? OIL_SCENARIO_SERIES[index - 1] : null,
    next: index < OIL_SCENARIO_SERIES.length - 1 ? OIL_SCENARIO_SERIES[index + 1] : null,
  };
}
