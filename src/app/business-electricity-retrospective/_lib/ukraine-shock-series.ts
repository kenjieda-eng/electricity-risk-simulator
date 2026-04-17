export type UkraineShockPage = {
  slug: string;
  label: string;
  title: string;
  href: string;
};

export const UKRAINE_SHOCK_SERIES: UkraineShockPage[] = [
  {
    slug: "ukraine-shock-overview",
    label: "全体整理",
    title: "ウクライナショックとは何だったのか",
    href: "/business-electricity-retrospective/ukraine-shock-overview",
  },
  {
    slug: "ukraine-shock-timeline-2021-2023",
    label: "時系列整理",
    title: "2021年後半〜2023年の時系列整理",
    href: "/business-electricity-retrospective/ukraine-shock-timeline-2021-2023",
  },
  {
    slug: "why-business-electricity-prices-rose-after-ukraine",
    label: "要因分解",
    title: "なぜ法人電気料金は上がったのか",
    href: "/business-electricity-retrospective/why-business-electricity-prices-rose-after-ukraine",
  },
  {
    slug: "ukraine-shock-by-voltage-class",
    label: "区分別比較",
    title: "高圧・特別高圧・低圧で影響はどう違ったのか",
    href: "/business-electricity-retrospective/ukraine-shock-by-voltage-class",
  },
  {
    slug: "ukraine-shock-and-contract-practice",
    label: "契約実務",
    title: "新電力・市場連動・最終保障供給に何が起きたのか",
    href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice",
  },
  {
    slug: "lessons-from-ukraine-shock-for-2026",
    label: "教訓と備え",
    title: "ウクライナショックから何を学ぶか",
    href: "/business-electricity-retrospective/lessons-from-ukraine-shock-for-2026",
  },
];

export function getUkraineShockPage(slug: string) {
  return UKRAINE_SHOCK_SERIES.find((p) => p.slug === slug) ?? null;
}

export function getUkraineShockNeighbors(slug: string) {
  const index = UKRAINE_SHOCK_SERIES.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? UKRAINE_SHOCK_SERIES[index - 1] : null,
    next: index < UKRAINE_SHOCK_SERIES.length - 1 ? UKRAINE_SHOCK_SERIES[index + 1] : null,
  };
}
