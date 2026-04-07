export const FX_DOUBLE_EFFECT_BASE_PATH = "/special/fx-double-effect-scenario-analysis";

export type FxDoubleEffectPage = {
  slug: string;
  label: string;
  title: string;
  description: string;
  heroKicker: string;
};

export const FX_DOUBLE_EFFECT_SERIES: FxDoubleEffectPage[] = [
  {
    slug: "index",
    label: "総論トップ",
    title: "円安×原油高 ダブルショックの全体像",
    description:
      "為替と原油のW効果が家計と法人に与える影響を、連鎖構造・シナリオ・マトリクス試算まで整理した総論ページです。",
    heroKicker: "W-EFFECT ANALYSIS",
  },
  {
    slug: "chain-mechanism",
    label: "連鎖構造",
    title: "日銀利上げ後ずれから輸入コスト増までの連鎖",
    description:
      "イラン情勢、原油高、日銀の利上げ後ずれ、日米金利差、円安進行がつながる負の連鎖を図解します。",
    heroKicker: "CHAIN MECHANISM",
  },
  {
    slug: "yen-scenario",
    label: "円安シナリオ",
    title: "150円〜165円の4段階 円安シナリオ分析",
    description:
      "ドル円150〜165円の4段階で輸入コストへの影響を比較し、利上げ・介入・FRBのトリガーを整理します。",
    heroKicker: "YEN SCENARIO",
  },
  {
    slug: "oil-scenario",
    label: "原油シナリオ",
    title: "WTI 80/100/120ドルの3段階 原油シナリオ分析",
    description:
      "ホルムズ海峡の状況を前提に、WTI 80/100/120ドルの3シナリオで円建てコストへの影響を整理します。",
    heroKicker: "OIL SCENARIO",
  },
  {
    slug: "double-effect-matrix",
    label: "W効果試算",
    title: "為替×原油のマトリクスで見るW効果試算",
    description:
      "ドル円150〜165円とWTI80〜120ドルの12パターンを掛け合わせ、円建て輸入コスト増を定量比較します。",
    heroKicker: "W-EFFECT SIMULATION",
  },
  {
    slug: "household-impact",
    label: "家計への影響",
    title: "世帯タイプ別 年間支出増シミュレーション",
    description:
      "単身、夫婦、4人家族の世帯タイプ別に、食費・ガソリン・光熱費などの年間増加額を比較します。",
    heroKicker: "HOUSEHOLD IMPACT",
  },
  {
    slug: "corporate-impact",
    label: "法人への影響",
    title: "業種別 輸入コスト増と利益圧迫の分析",
    description:
      "輸入型企業のコスト増と、輸出型企業の円安メリットが同時に進む二極化構造を業種別に整理します。",
    heroKicker: "CORPORATE IMPACT",
  },
  {
    slug: "action-roadmap",
    label: "対策ロードマップ",
    title: "為替ヘッジから調達戦略までの対策整理",
    description:
      "家計・法人それぞれの対策を、全シナリオ共通、S2以上、S3想定の3段階で整理します。",
    heroKicker: "ACTION ROADMAP",
  },
];

export const FX_DOUBLE_EFFECT_SLUGS = FX_DOUBLE_EFFECT_SERIES.filter((item) => item.slug !== "index").map((item) => item.slug);

export function getFxDoubleEffectPageBySlug(slug: string) {
  return FX_DOUBLE_EFFECT_SERIES.find((item) => item.slug === slug);
}

export function getFxDoubleEffectPagePath(slug: string) {
  return slug === "index" ? FX_DOUBLE_EFFECT_BASE_PATH : `${FX_DOUBLE_EFFECT_BASE_PATH}/${slug}`;
}

export function getFxDoubleEffectNeighbors(slug: string) {
  const index = FX_DOUBLE_EFFECT_SERIES.findIndex((item) => item.slug === slug);
  if (index === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: index > 0 ? FX_DOUBLE_EFFECT_SERIES[index - 1] : null,
    next: index < FX_DOUBLE_EFFECT_SERIES.length - 1 ? FX_DOUBLE_EFFECT_SERIES[index + 1] : null,
  };
}
