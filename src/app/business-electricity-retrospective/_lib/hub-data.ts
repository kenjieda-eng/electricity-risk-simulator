export type RetrospectiveCardItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  iconSrc?: string;
  iconAlt?: string;
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
  {
    title: "【2025年12月】法人の電気料金はどう動いた？",
    description:
      "補助金終了後3ヶ月目・暖房需要ピーク接近の年末着地を整理します。2025年の年間振り返りと、2026年の予算・契約戦略への見通しを確認できます。",
    href: "/business-electricity-retrospective/2025-12",
    ctaLabel: "記事を読む",
  },
  {
    title: "【2025年11月】法人の電気料金はどう動いた？",
    description:
      "補助金終了2ヶ月目・暖房シーズン入りで実力値ベースの上昇が本格化した月を整理します。冬季本番に向けた予算と契約見直しのポイントを確認できます。",
    href: "/business-electricity-retrospective/2025-11",
    ctaLabel: "記事を読む",
  },
  {
    title: "【2025年10月】法人の電気料金はどう動いた？",
    description:
      "激変緩和措置が正式終了し、補助なし実力値ベースの請求が初めてフルに見えた転換点の月を整理します。今後の予算策定の新しい基準点として確認できます。",
    href: "/business-electricity-retrospective/2025-10",
    ctaLabel: "記事を読む",
  },
];

export const HISTORICAL_EXPLANATION_ITEMS: RetrospectiveCardItem[] = [
];

export const HISTORICAL_EXPLANATION_ALL_LINKS = [
  {
    title: "特別高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説",
    href: "/business-electricity-retrospective/special-high-voltage-2019-2025",
  },
  {
    title: "高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説",
    href: "/business-electricity-retrospective/high-voltage-2019-2025",
  },
  {
    title: "低圧電灯の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説",
    href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025",
  },
  {
    title: "低圧電力の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説",
    href: "/business-electricity-retrospective/low-voltage-power-2019-2025",
  },
] as const;

export const UKRAINE_SHOCK_FEATURE_ITEMS: RetrospectiveCardItem[] = [
  {
    title: "ウクライナショックとは何だったのか",
    description:
      "2022年のウクライナ危機による料金変化を、高騰・高止まり・補助政策まで通して整理します。危機直後から政策対応期までの時系列を押さえ、全体像を短時間で確認できます。",
    href: "/business-electricity-retrospective/ukraine-shock-overview",
    ctaLabel: "記事を読む",
    iconSrc: "/icons/retrospective/ukraine-shock-overview.png",
    iconAlt: "価格急騰の推移を示すアイコン",
  },
  {
    title: "【時系列整理】2021年後半〜2023年の法人電気料金高騰はどう進んだか",
    description:
      "2021年後半から2023年にかけて、法人電気料金高騰がどのように進んだのかを時系列で整理。燃料高、制度対応、補助政策まで一連の流れを確認できます。",
    href: "/business-electricity-retrospective/ukraine-shock-timeline-2021-2023",
    ctaLabel: "記事を読む",
  },
  {
    title: "なぜ法人電気料金は上がったのか",
    description:
      "LNG、石炭、為替、卸市場がどう連鎖し、日本の法人料金に波及したかを整理します。どの要因がどの局面で効いたのかを分解し、上昇要因の優先度を理解できます。",
    href: "/business-electricity-retrospective/why-business-electricity-prices-rose-after-ukraine",
    ctaLabel: "記事を読む",
    iconSrc: "/icons/retrospective/price-rise-causes.png",
    iconAlt: "燃料と市場要因の連鎖を示すアイコン",
  },
  {
    title: "区分別に見る影響の違い",
    description:
      "特別高圧・高圧・低圧電力・低圧電灯の違いを横比較し、区分別の影響を整理します。同じ外部ショックでも契約区分で受け止め方が異なる理由を、実務目線で確認できます。",
    href: "/business-electricity-retrospective/ukraine-shock-by-voltage-class",
    ctaLabel: "記事を読む",
    iconSrc: "/icons/retrospective/voltage-class-diff.png",
    iconAlt: "電圧区分の比較を示すアイコン",
  },
  {
    title: "契約実務には何が起きたのか",
    description:
      "市場連動、新電力、最終保障供給など、契約実務への影響を要点で整理します。調達先選定や更新交渉で押さえるべき判断ポイントを、具体的に振り返ります。",
    href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice",
    ctaLabel: "記事を読む",
    iconSrc: "/icons/retrospective/contract-practice.png",
    iconAlt: "契約書と実務対応を示すアイコン",
  },
  {
    title: "ホルムズ海峡封鎖が示したこと",
    description:
      "2026年3月の出来事を踏まえ、今後の電力契約と予算策定への備えを整理します。過去ショックとの共通点と相違点から、次の変動局面に備える視点を明確にします。",
    href: "/business-electricity-retrospective/lessons-from-ukraine-shock-for-2026",
    ctaLabel: "記事を読む",
    iconSrc: "/icons/retrospective/hormuz-lessons.png",
    iconAlt: "海峡封鎖リスクを示すアイコン",
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
