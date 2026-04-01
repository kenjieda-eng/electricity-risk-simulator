export type RetrospectiveCardItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

type ArchiveCategory = {
  label: string;
  slugSuffix: "extra-high-voltage" | "high-voltage" | "low-voltage-power" | "low-voltage-lighting";
};

export const HUB_SERIES_POINTS = [
  "単月の変化を、補助要因と市場要因に分けて確認できる",
  "低圧・高圧・特別高圧で、同じ月でも意味合いがどう違うかを整理できる",
  "月次結果を、次月以降の予算や契約見直しにどうつなげるかを確認できる",
] as const;

export const MONTHLY_RETROSPECTIVE_ITEMS: RetrospectiveCardItem[] = [
  {
    title: "【2026年2月】法人の電気料金はどう動いた？",
    description:
      "補助政策と当社団が運営している「新電力ネット」のデータから、補助の恩恵を最終確認し、補助終了前後への備えを契約区分別に整理します。",
    href: "/business-electricity-retrospective/2026-02",
    ctaLabel: "記事を読む",
  },
  {
    title: "【2026年1月】法人の電気料金はどう動いた？",
    description:
      "補助政策と当社団が運営している「新電力ネット」のデータから、秋からの上昇局面に対し、1月使用分で空気が大きく変わった点を整理します。",
    href: "/business-electricity-retrospective/2026-01",
    ctaLabel: "記事を読む",
  },
];

export const HISTORICAL_EXPLANATION_ITEMS: RetrospectiveCardItem[] = [
  {
    title: "特別高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説",
    description: "特別高圧の推移データをもとに、年ごとの変化と背景要因を整理した長文解説です。",
    href: "/business-electricity-retrospective/special-high-voltage-2019-2025",
    ctaLabel: "記事を読む",
  },
  {
    title: "高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説",
    description: "高圧の推移データをもとに、年ごとの変化と背景要因を整理した長文解説です。",
    href: "/business-electricity-retrospective/high-voltage-2019-2025",
    ctaLabel: "記事を読む",
  },
  {
    title: "低圧電灯の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説",
    description: "低圧電灯の推移データをもとに、年ごとの変化と背景要因を整理した長文解説です。",
    href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025",
    ctaLabel: "記事を読む",
  },
  {
    title: "低圧電力の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説",
    description: "低圧電力の推移データをもとに、年ごとの変化と背景要因を整理した長文解説です。",
    href: "/business-electricity-retrospective/low-voltage-power-2019-2025",
    ctaLabel: "記事を読む",
  },
];

export const UKRAINE_SHOCK_FEATURE_ITEMS: RetrospectiveCardItem[] = [
  {
    title: "ウクライナショックとは何だったのか",
    description:
      "2022年のウクライナ危機が、法人電気料金にどのような変化をもたらしたのかを全体整理。高騰、高止まり、補助政策までまとめて確認できます。",
    href: "/business-electricity-retrospective/ukraine-shock-overview",
    ctaLabel: "記事を読む",
  },
  {
    title: "なぜ法人電気料金は上がったのか",
    description:
      "LNG、石炭、為替、卸市場などがどう連鎖したのかを整理。遠い出来事が日本の法人電気料金にどう響いたかを説明します。",
    href: "/business-electricity-retrospective/why-business-electricity-prices-rose-after-ukraine",
    ctaLabel: "記事を読む",
  },
  {
    title: "2021年後半〜2023年の時系列整理",
    description:
      "高騰局面がどの順番で進んだのかを時系列で確認。社内説明用の整理にも使いやすい構成です。",
    href: "/business-electricity-retrospective/ukraine-shock-timeline-2021-2023",
    ctaLabel: "記事を読む",
  },
  {
    title: "区分別に見る影響の違い",
    description:
      "特別高圧、高圧、低圧電力、低圧電灯で影響がどう違ったのかを横比較。区分ごとの意味合いを整理します。",
    href: "/business-electricity-retrospective/ukraine-shock-by-voltage-class",
    ctaLabel: "記事を読む",
  },
  {
    title: "契約実務には何が起きたのか",
    description:
      "市場連動、新電力、最終保障供給など、ウクライナショックが契約実務に与えた影響を分かりやすくまとめます。",
    href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice",
    ctaLabel: "記事を読む",
  },
  {
    title: "ホルムズ海峡封鎖が示したこと",
    description:
      "2026年3月の出来事を踏まえ、ウクライナショックから何を学び、今後の電力契約や予算策定にどう備えるかを整理します。",
    href: "/business-electricity-retrospective/lessons-from-ukraine-shock-for-2026",
    ctaLabel: "記事を読む",
  },
];

export const ARCHIVE_YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025] as const;

const ARCHIVE_CATEGORIES: ArchiveCategory[] = [
  { label: "特別高圧", slugSuffix: "extra-high-voltage" },
  { label: "高圧", slugSuffix: "high-voltage" },
  { label: "低圧電力", slugSuffix: "low-voltage-power" },
  { label: "低圧電灯", slugSuffix: "low-voltage-lighting" },
];

export const YEARLY_ARCHIVE_ITEMS = ARCHIVE_YEARS.map((year) => ({
  year,
  links: ARCHIVE_CATEGORIES.map((category) => ({
    label: `${year}年 ${category.label}`,
    href: `/business-electricity-retrospective/${year}-${category.slugSuffix}`,
  })),
}));
