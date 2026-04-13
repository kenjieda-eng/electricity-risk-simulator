import type { ArticleCategorySlug } from "../data/articles";

/** /articles とカテゴリハブで使う「代表記事」まわりの設定 */
export type ArticlesThemeRow = {
  key: string;
  title: string;
  intro: string;
  slugList: string[];
  categoryHref: string;
  /** 記事以外の自然な導線（比較ページなど） */
  extraCards?: Array<{ href: string; title: string; description: string }>;
};

export const ARTICLES_THEME_ROWS: ArticlesThemeRow[] = [
  {
    key: "basic",
    title: "基礎から知る",
    intro:
      "まず法人向け電気料金の全体像を押さえ、見積書を見る前に請求内訳を確認し、相場観までそろえるなら次の記事から入ると流れがつかみやすいです。",
    slugList: ["business-electricity-bill-breakdown", "how-to-read-electricity-quote", "business-electricity-price-benchmark"],
    categoryHref: "/articles/basic",
  },
  {
    key: "price-increase",
    title: "料金が上がる理由を知る",
    intro:
      "単価改定だけでなく、燃料・市場・制度がどう請求に乗るかを順に押さえると、社内説明や見積比較の精度が上がります。",
    slugList: ["why-business-electricity-prices-rise", "how-much-business-electricity-prices-increase", "renewable-energy-surcharge"],
    categoryHref: "/articles/price-increase",
    extraCards: [
      {
        href: "/business-electricity-price-trend-10-years",
        title: "法人向け電気料金の10年推移で全体像をつかむ",
        description: "年次・区分の位置づけを長期で確認し、単発の値上げだけで終わらない見方に繋げられます。",
      },
    ],
  },
  {
    key: "risk-scenarios",
    title: "リスクシナリオ別に知る",
    intro:
      "要因ごとに上振れの出方が異なります。代表例を読んだうえで、診断・比較で自社条件を試すと判断がしやすくなります。",
    slugList: ["electricity-cost-risk-heatwave", "business-electricity-price-trend-10-years"],
    categoryHref: "/articles/risk-scenarios",
    extraCards: [
      {
        href: "/compare",
        title: "固定プランと市場連動プランの比較（リスク診断）",
        description: "猛暑などの要因を重ねたときの差分を、同じ前提で可視化できます。",
      },
    ],
  },
  {
    key: "power-procurement",
    title: "電力調達の仕組みを知る",
    intro:
      "電力会社がどこから電気を仕入れているかを押さえると、料金変動の背景が理解しやすくなります。",
    slugList: ["how-electricity-is-procured", "jepx-explained", "power-risk-management"],
    categoryHref: "/articles/power-procurement",
  },
  {
    key: "retrospective",
    title: "法人電気料金振り返り",
    intro:
      "月次・年次のデータを見たあと、長期推移や上昇要因の解説へ進むと「単月だけの印象」で終わらせずに済みます。",
    slugList: [],
    categoryHref: "/business-electricity-retrospective",
    extraCards: [
      {
        href: "/business-electricity-retrospective/2025-low-voltage-lighting",
        title: "【2025年】低圧電灯の電気料金を振り返る",
        description: "店舗・小規模拠点の代表区分として、年間の単価推移を確認できます。",
      },
      {
        href: "/business-electricity-retrospective/2024-low-voltage-power",
        title: "【2024年】低圧電力の電気料金を振り返る",
        description: "動力用途の低圧区分で、前年比較と年内の流れを整理できます。",
      },
      {
        href: "/business-electricity-retrospective/2020-extra-high-voltage",
        title: "【2020年】特別高圧の電気料金を振り返る",
        description: "急変期前後の大口需要家区分を、年単位で位置づけできます。",
      },
      {
        href: "/business-electricity-price-trend-10-years",
        title: "法人向け電気料金の10年推移で構造をつかむ",
        description: "年別データの前後関係を、長期チャートと解説で補います。",
      },
    ],
  },
];

/** カテゴリページ先頭の「ここから読む」用（本文の重複を避けつつハブを補強） */
export const CATEGORY_HUB_SPOTLIGHT: Partial<
  Record<
    ArticleCategorySlug,
    {
      heading: string;
      intro: string;
      slugs: string[];
    }
  >
> = {
  basic: {
    heading: "このカテゴリでまず読みたい代表記事",
    intro:
      "全体像（内訳）→見積の読み方→相場観の順に進むと、見直しや比較の前提がそろいやすいです。",
    slugs: ["business-electricity-bill-breakdown", "how-to-read-electricity-quote", "business-electricity-price-benchmark"],
  },
  "price-increase": {
    heading: "上昇の構造をつかむための代表記事",
    intro:
      "「なぜ上がるか」「どの程度か」「どの費目が上乗せされるか」を分けて押さえると、請求書の見方に直結します。",
    slugs: [
      "why-business-electricity-prices-rise",
      "how-much-business-electricity-prices-increase",
      "renewable-energy-surcharge",
      "business-electricity-price-trend-10-years",
    ],
  },
  "risk-scenarios": {
    heading: "シナリオ理解と診断・比較への導線",
    intro:
      "個別シナリオのあとで長期推移と比較診断を見ると、予算・契約の次アクションを決めやすくなります。",
    slugs: ["electricity-cost-risk-heatwave", "business-electricity-price-trend-10-years"],
  },
  "power-procurement": {
    heading: "電力調達の全体像をつかむ代表記事",
    intro:
      "仕入れの全体像→市場の仕組み→リスク管理の順に読むと、電力会社の調達構造が整理しやすくなります。",
    slugs: ["how-electricity-is-procured", "jepx-explained", "power-risk-management"],
  },
  "for-executives": {
    heading: "経営層がまず確認したい3つの視点",
    intro:
      "経営者・CFOが電気料金を経営課題として扱うには、3つの視点を軸に整理するのが効果的です。第一は財務インパクト——電気代の変動がEBITDAや営業利益にどう影響するかを定量的に把握する視点です。第二はリスク管理——電力供給途絶や価格急騰がBCPや事業継続にどう波及するかを事前に評価する視点です。第三はガバナンス——取締役会・経営会議での報告項目の整理と、ESGレポーティングへの開示接続という視点です。以下の3記事がその入口になります。",
    slugs: ["executive-ebitda-impact", "executive-business-continuity-risk", "executive-board-reporting-items"],
  },
};
