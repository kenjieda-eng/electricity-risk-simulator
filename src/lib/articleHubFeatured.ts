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
      "要因ごとに上振れの出方が異なります。猛暑・円安・地政学の代表シナリオを押さえたうえで、診断・比較で自社条件を試すと判断がしやすくなります。",
    slugList: [
      "electricity-cost-risk-heatwave",
      "electricity-cost-risk-yen-depreciation",
      "electricity-cost-risk-geopolitics",
    ],
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
    ],
  },
  "risk-scenarios": {
    heading: "シナリオ理解と診断・比較への導線",
    intro:
      "要因別に上振れリスクの出方は異なります。猛暑・円安・地政学の代表シナリオを押さえたうえで、比較診断で自社条件を試すと判断がしやすくなります。",
    slugs: [
      "electricity-cost-risk-heatwave",
      "electricity-cost-risk-yen-depreciation",
      "electricity-cost-risk-geopolitics",
    ],
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
  decarbonization: {
    heading: "脱炭素・GX対応の出発点となる3記事",
    intro:
      "Scope2排出量算定・RE100対応・GX-ETSの本格稼働に備える、企業の脱炭素戦略の入口となる代表記事です。",
    slugs: ["scope2-electricity-accounting", "re100-overview-for-business", "gx-ets-impact-business-electricity"],
  },
  "corporate-ppa": {
    heading: "コーポレートPPAの全体像をつかむ代表記事",
    intro:
      "オンサイト・オフサイト・バーチャルの3形態の違いと、長期再エネ調達の意思決定に必要な観点を整理します。",
    slugs: ["corporate-ppa-overview", "onsite-vs-offsite-ppa", "virtual-ppa-explained"],
  },
  "energy-dx": {
    heading: "エネルギーマネジメント・DXの代表記事",
    intro:
      "BEMS/FEMS/EMSの違いと、AI需要予測・スマートメーターデータ活用による電力最適化の基礎を整理します。",
    slugs: ["bems-fems-ems-overview", "ai-electricity-optimization", "smart-meter-data-utilization"],
  },
  "energy-bcp": {
    heading: "電力BCP・災害対策の代表記事",
    intro:
      "停電・需給ひっ迫・新電力撤退などの電力リスクに対する事業継続計画（BCP）の設計入口を整理します。",
    slugs: ["energy-bcp-overview", "emergency-power-source-options", "microgrid-for-business"],
  },
  "sme-guide": {
    heading: "中小企業向け電気代見直しの代表記事",
    intro:
      "低圧契約・小規模事業者向けに、限られた予算で成果を出すための電気代見直しの実務手順を整理します。",
    slugs: ["sme-electricity-basics", "low-voltage-review-essentials", "sme-cost-reduction-quick-wins"],
  },
  "accounting-tax": {
    heading: "電気代の経理・税務処理の代表記事",
    intro:
      "電気代の勘定科目・インボイス対応・蓄電池の減価償却など、経理・財務担当者がつまずきやすい論点を整理します。",
    slugs: ["electricity-expense-accounting", "invoice-system-electricity", "solar-battery-depreciation"],
  },
  glossary: {
    heading: "用語集の代表記事",
    intro:
      "契約・市場・設備の3分野に分けて、繰り返し登場する電気事業の専門用語を整理しています。",
    slugs: ["glossary-contract-terms", "glossary-market-terms", "glossary-equipment-terms"],
  },
  faq: {
    heading: "FAQ集の代表記事",
    intro:
      "「電気代なぜ高い」「契約見直し何から」のような検索されやすい疑問に、結論ベースで答える代表記事です。",
    slugs: ["faq-why-business-electricity-high", "faq-contract-review-where-to-start", "faq-market-linked-plan"],
  },
  "regulation-timeline": {
    heading: "制度改正タイムラインの代表記事",
    intro:
      "電力自由化・容量市場・再エネ賦課金など、主要制度改正の時系列と料金影響を整理した代表記事です。",
    slugs: ["power-market-regulation-overview", "capacity-market-timeline", "renewable-surcharge-reform-timeline"],
  },
  "ev-charging": {
    heading: "EV・充電インフラの代表記事",
    intro:
      "法人EV導入時の充電設備の契約区分・基本料金影響・補助金活用の入口となる代表記事です。",
    slugs: ["corporate-ev-charging-basics", "charging-station-contract-types", "ev-fleet-cost-calculation"],
  },
  "contract-legal": {
    heading: "契約書・約款の読み方 代表記事",
    intro:
      "電力契約書の主要条項・自動更新リスク・不可抗力条項など、法務視点で押さえるべき代表記事です。",
    slugs: ["electricity-contract-clauses", "auto-renewal-clause-risks", "force-majeure-electricity"],
  },
  "ma-organizational-change": {
    heading: "M&A・組織再編時の電力契約 代表記事",
    intro:
      "合併・分社・事業譲渡時の電力契約承継・名義変更・デューデリジェンスの代表記事です。",
    slugs: ["ma-electricity-contract-handling", "spin-off-energy-contracts", "business-transfer-name-change-procedure"],
  },
  "global-energy": {
    heading: "海外拠点・グローバルエネルギー 代表記事",
    intro:
      "海外主要国の電気料金水準・グローバル拠点のエネルギー戦略・多国籍企業の脱炭素対応の代表記事です。",
    slugs: ["overseas-energy-strategy", "global-electricity-price-benchmark", "global-renewable-procurement-strategy"],
  },
  "datacenter-ai-demand": {
    heading: "データセンター・AI需要 代表記事",
    intro:
      "AI時代の電力需要急増・データセンター立地要件・冷却最適化の代表記事です。",
    slugs: ["datacenter-electricity-demand-surge", "ai-workload-energy-impact", "datacenter-cooling-optimization"],
  },
};
