export const EMERGENCY_SCENARIO_BASE_PATH = "/special/emergency-scenario-analysis";

export type EmergencyScenarioPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroKicker: string;
  heroAccentClass: string;
};

export const EMERGENCY_SCENARIO_SERIES: EmergencyScenarioPage[] = [
  {
    slug: "index",
    label: "総論トップ",
    title: "有事シナリオ分析｜法人電気代の3シナリオを比較",
    description:
      "有事局面での法人電気料金リスクを、背景・仕組み・四重苦・契約別・業種別・対策まで10ページで整理した特集トップです。",
    heroKicker: "EMERGENCY SCENARIO ANALYSIS",
    heroAccentClass: "from-slate-900 to-sky-900",
  },
  {
    slug: "background",
    label: "背景",
    title: "背景｜有事局面と原油価格の変動を時系列で整理",
    description:
      "有事局面で原油価格が動く背景と、供給制約から日本企業の電気代リスクに波及するまでの前提を時系列で解説します。",
    heroKicker: "BACKGROUND",
    heroAccentClass: "from-orange-900 to-orange-700",
  },
  {
    slug: "mechanism",
    label: "仕組み",
    title: "仕組み｜原油高が法人電気代へ反映されるメカニズム",
    description:
      "燃料費調整額と市場連動の仕組み、算定タイムラグ、料金改定で反応が速くなる理由を整理します。",
    heroKicker: "MECHANISM",
    heroAccentClass: "from-emerald-900 to-teal-700",
  },
  {
    slug: "quadruple-pressure",
    label: "四重苦",
    title: "四重苦｜原油・補助金終了・再エネ賦課金・円安の複合影響",
    description:
      "2026年に法人電気代を押し上げる4要因を、積み上げで見える化しながら構造的な上昇圧力を解説します。",
    heroKicker: "QUADRUPLE PRESSURE",
    heroAccentClass: "from-zinc-900 to-red-900",
  },
  {
    slug: "scenario-1",
    label: "シナリオ1",
    title: "シナリオ1｜短期安定化（4月末）での法人電気代影響",
    description:
      "停戦と航路再開が早期に進んだ場合でも、補助金終了後の構造変化で法人電気代がどう動くかを整理します。",
    heroKicker: "SCENARIO 1",
    heroAccentClass: "from-emerald-900 to-emerald-700",
  },
  {
    slug: "scenario-2",
    label: "シナリオ2",
    title: "シナリオ2｜夏まで長期化した場合の電気代リスク",
    description:
      "夏の需要ピークと価格高騰が重なるケースで、法人の月次コストにどの程度の上振れが出るかを試算します。",
    heroKicker: "SCENARIO 2",
    heroAccentClass: "from-amber-900 to-amber-700",
  },
  {
    slug: "scenario-3",
    label: "シナリオ3",
    title: "シナリオ3｜秋以降も継続する高コスト局面への備え",
    description:
      "有事局面の長期化を前提に、電力コスト上昇の構造化と事業継続リスクを整理します。",
    heroKicker: "SCENARIO 3",
    heroAccentClass: "from-rose-900 to-rose-700",
  },
  {
    slug: "contract-risk",
    label: "契約別",
    title: "契約別リスク比較｜固定単価・市場連動の差",
    description:
      "契約タイプごとの上振れ幅をシナリオ横断で比較し、見直し優先度を判断できるように整理します。",
    heroKicker: "CONTRACT RISK",
    heroAccentClass: "from-indigo-900 to-violet-700",
  },
  {
    slug: "industry-impact",
    label: "業種別",
    title: "業種別インパクト｜電力多消費業種の影響度ランキング",
    description:
      "製造業・冷凍冷蔵・データセンターなど業種別に、シナリオごとの電気代インパクトを比較します。",
    heroKicker: "INDUSTRY IMPACT",
    heroAccentClass: "from-blue-900 to-blue-700",
  },
  {
    slug: "action-roadmap",
    label: "対策",
    title: "対策ロードマップ｜有事シナリオを前提にした実務対応",
    description:
      "今すぐ・5月まで・経営判断の3段階で、契約見直しから設備投資までの具体的な打ち手を整理します。",
    heroKicker: "ACTION ROADMAP",
    heroAccentClass: "from-pink-900 to-pink-700",
  },
];

export const EMERGENCY_SCENARIO_SLUGS = EMERGENCY_SCENARIO_SERIES.filter((item) => item.slug !== "index").map(
  (item) => item.slug,
);

export function getEmergencyScenarioPageBySlug(slug: string) {
  return EMERGENCY_SCENARIO_SERIES.find((item) => item.slug === slug);
}

export function getEmergencyScenarioPagePath(slug: string) {
  return slug === "index" ? EMERGENCY_SCENARIO_BASE_PATH : `${EMERGENCY_SCENARIO_BASE_PATH}/${slug}`;
}

export function getEmergencyScenarioNeighbors(slug: string) {
  const index = EMERGENCY_SCENARIO_SERIES.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? EMERGENCY_SCENARIO_SERIES[index - 1] : null,
    next: index < EMERGENCY_SCENARIO_SERIES.length - 1 ? EMERGENCY_SCENARIO_SERIES[index + 1] : null,
  };
}
