import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "法人向け電気料金の内訳とは｜基本料金・電力量料金・燃調費・再エネ賦課金の構成を解説";
const pageDescription =
  "法人向け電気料金の内訳を基本料金・電力量料金・燃料費調整額・再エネ賦課金の4項目で解説。構成比の目安、契約区分別の料金水準、業種別の構成比の違いも整理。請求書確認や見積比較の基礎になります。";

const linkClass = "text-sky-700 underline underline-offset-2 hover:text-sky-900";

const conclusionPoints = [
  "法人向け電気料金は、使用量だけで決まるわけではありません。",
  "基本料金、電力量料金、燃料費調整額、再エネ賦課金を分けて見ると全体像を整理しやすくなります。",
  "総額上昇時は、使用量だけでなく固定費・調整項目・制度項目も切り分けて確認する必要があります。",
];

const fourCategoryCards = [
  {
    label: "固定費",
    item: "基本料金",
    description: "契約電力や契約条件に基づく費用で、月ごとには動きにくい項目です。",
  },
  {
    label: "使用量連動",
    item: "電力量料金",
    description: "使用量に応じて増減する費用で、単価条件も総額に影響します。",
  },
  {
    label: "調整項目",
    item: "燃料費調整額",
    description: "燃料価格などを反映して月次で動きやすい費用です。",
  },
  {
    label: "制度項目",
    item: "再エネ賦課金",
    description: "制度に基づく費用で、使用量と年度単価の影響を受けます。",
  },
];

const breakdownRows = [
  {
    item: "基本料金",
    what: "契約前提に基づく固定費",
    changeBy: "契約電力・契約条件",
    monthly: "動きにくい",
    review: "比較的見直しやすい",
    perspective: "使用量が減っても残る費用として、固定費比率を確認します。",
  },
  {
    item: "電力量料金",
    what: "使用量に応じてかかる費用",
    changeBy: "使用量・単価条件",
    monthly: "動きやすい",
    review: "条件次第で見直し可能",
    perspective: "使用量だけでなく、単価体系がどうなっているかも見ます。",
  },
  {
    item: "燃料費調整額",
    what: "燃料価格や制度要因を反映する調整費",
    changeBy: "市況・制度・使用量",
    monthly: "特に動きやすい",
    review: "直接は変えにくい",
    perspective: "前月比・前年同月比で振れ幅を確認し、使用量要因と切り分けます。",
  },
  {
    item: "再エネ賦課金",
    what: "制度に基づいて加算される費用",
    changeBy: "使用量・年度単価",
    monthly: "使用量に連動",
    review: "契約見直しでは変えにくい",
    perspective: "契約の安さとは別枠の制度要因として整理します。",
  },
];

const compositionRatioRows = [
  {
    item: "基本料金",
    ratio: "25〜35%",
    volatility: "固定的（契約電力に連動）",
    note: "使用量が減っても下がりにくい",
  },
  {
    item: "電力量料金",
    ratio: "40〜50%",
    volatility: "使用量に比例",
    note: "最大の構成比を占めるケースが多い",
  },
  {
    item: "燃料費調整額",
    ratio: "5〜15%",
    volatility: "月次変動（燃料価格連動）",
    note: "高騰期には構成比が上昇しやすい",
  },
  {
    item: "再エネ賦課金",
    ratio: "5〜10%",
    volatility: "年度改定・使用量比例",
    note: "単価は毎年度改定",
  },
  {
    item: "その他（容量拠出金等）",
    ratio: "0〜5%",
    volatility: "制度に基づく",
    note: "契約種別や市場連動プランで変動",
  },
];

const contractTierRows = [
  {
    tier: "低圧（動力）",
    demand: "50kW未満",
    usage: "1,000〜10,000kWh",
    monthly: "3〜30万円",
    detail: "/high-voltage-electricity-pricing",
  },
  {
    tier: "高圧",
    demand: "50〜2,000kW",
    usage: "10,000〜500,000kWh",
    monthly: "30〜1,500万円",
    detail: "/high-voltage-electricity-pricing",
  },
  {
    tier: "特別高圧",
    demand: "2,000kW超",
    usage: "500,000kWh〜",
    monthly: "1,500万円〜",
    detail: "/extra-high-voltage-electricity-pricing",
  },
];

const industryPatterns = [
  {
    industry: "工場・製造業",
    feature: "電力量料金の比率が高い",
    reason: "稼働時間が長く使用量が大きいため、使用量連動費用が総額の過半を占めるケースが多い。",
    tip: "燃料費調整額の影響も使用量分だけ拡大するため、調整項目の振れに注意が必要。",
  },
  {
    industry: "オフィス・商業施設",
    feature: "基本料金の比率が比較的高い",
    reason: "空調・照明が多く契約電力は高めに設定されるが、稼働が昼間・平日に集中しやすい。",
    tip: "契約電力の見直しで固定費を下げられる余地があるか確認する価値がある。",
  },
  {
    industry: "冷凍倉庫・スーパー",
    feature: "通年で使用量が安定的に高い",
    reason: "冷凍・冷蔵設備の常時稼働により季節変動が小さく、ベースロード消費が大きい。",
    tip: "使用量の変動幅が小さい分、燃料費調整額・再エネ賦課金の単価変動が読みやすい。",
  },
  {
    industry: "病院・医療機関",
    feature: "24時間稼働でベースロードが高い",
    reason: "医療機器・空調・照明を24時間維持するため、基本料金・電力量料金とも高水準が続きやすい。",
    tip: "固定費の比率が高いため、デマンド管理による契約電力の引き下げが効果的なケースがある。",
  },
];

const sampleBillItems = [
  { label: "基本料金", amount: "120,000円" },
  { label: "電力量料金", amount: "380,000円" },
  { label: "燃料費調整額", amount: "65,000円" },
  { label: "再エネ賦課金", amount: "90,000円" },
];

const increaseCases = [
  {
    title: "ケース1 使用量は大きく変わっていないのに総額が上がった",
    description:
      "使用量以外の要因が動いた可能性があります。まずは燃料費調整額と再エネ賦課金を確認し、そのうえで単価条件や契約条件の変更有無を見ます。",
    checks: ["燃料費調整額", "再エネ賦課金", "単価条件", "契約条件変更"],
  },
  {
    title: "ケース2 使用量が増えて総額も上がった",
    description:
      "操業増、季節要因、空調負荷の増加などで電力量料金が増えている可能性があります。使用量の増加幅とあわせて、単価条件も変わっていないか確認すると判断しやすくなります。",
    checks: ["操業増", "季節要因", "空調負荷増", "単価条件"],
  },
  {
    title: "ケース3 使用量は減ったのに請求額があまり下がらない",
    description:
      "固定費である基本料金の比率が高い、あるいは調整項目が上がっている可能性があります。契約電力が実態より高いままになっていないかも含めて見直し候補を整理します。",
    checks: ["基本料金比率", "燃料費調整額", "再エネ賦課金", "契約電力の妥当性"],
  },
];

const invoiceSteps = [
  {
    step: "1",
    title: "前月比・前年同月比で総額を見る",
    description: "まず総額の増減をつかみ、月次の振れなのか、前年と比べても高いのかを確認します。",
  },
  {
    step: "2",
    title: "使用量が増えたかを見る",
    description: "使用量が増えていれば、電力量料金の増加が主因かどうかを見極めやすくなります。",
  },
  {
    step: "3",
    title: "基本料金に変化がないかを見る",
    description: "契約電力や契約条件の変化がないかを確認し、固定費部分の増減を切り分けます。",
  },
  {
    step: "4",
    title: "燃料費調整額を見る",
    description: "使用量が大きく変わらないのに総額が上がる場合は、まず調整項目の影響を確認します。",
  },
  {
    step: "5",
    title: "再エネ賦課金を見る",
    description: "制度項目として別枠で確認し、燃料費調整額と混同しないように整理します。",
  },
  {
    step: "6",
    title: "契約条件変更の有無を見る",
    description: "最後に契約更新や条件変更の有無を確認すると、見積比較へつなげやすくなります。",
  },
];

const documentComparisonRows = [
  {
    document: "請求書",
    purpose: "今月・過去の実績確認",
    points: "総額、使用量、基本料金、燃料費調整額、再エネ賦課金",
    risk: "総額だけ見て、何が起きたかの切り分けをしないこと",
  },
  {
    document: "見積書",
    purpose: "今後の契約条件比較",
    points: "基本料金、電力量料金、調整項目の扱い、契約期間、更新条件",
    risk: "単価だけ見て、条件差や前提差を見落とすこと",
  },
];

const misconceptions = [
  {
    title: "単価だけ見れば十分",
    description:
      "単価は重要ですが、それだけでは固定費や調整項目の影響を見落とします。見積比較でも請求確認でも、単価は内訳の一部として扱うほうが実務では安全です。",
  },
  {
    title: "請求額はすべて使用量で決まる",
    description:
      "使用量が大きな要素であることは確かですが、基本料金や燃料費調整額、再エネ賦課金も総額に影響します。使用量が同じでも請求額が変わる理由はここにあります。",
  },
  {
    title: "燃料費調整額と再エネ賦課金は同じようなもの",
    description:
      "どちらも請求額に加わる項目ですが、燃料費調整額は主に市況や制度要因を反映し、再エネ賦課金は制度に基づく費用です。性質が違うため、分けて見るほうが原因を説明しやすくなります。",
  },
  {
    title: "基本料金の影響は小さい",
    description:
      "使用量が多い月は目立ちにくくても、使用量が減ったときに下がりにくさとして現れます。請求額が思ったほど下がらないときは、基本料金の比率を確認する価値があります。",
  },
];

const nextReadingLinks = [
  {
    href: "/contract-demand-what-is-it",
    title: "契約電力とは",
    description: "基本料金の前提となる考え方を整理したいときに向いています。",
  },
  {
    href: "/contract-demand-what-is-it",
    title: "デマンドとは",
    description: "ピーク使用と契約電力の関係を確認したいときの詳細ページです。",
  },
  {
    href: "/fuel-cost-adjustment",
    title: "燃料費調整額（燃調費）とは",
    description: "月次で動きやすい調整項目を個別に見たいときに進めます。",
  },
  {
    href: "/renewable-energy-surcharge",
    title: "再エネ賦課金とは",
    description: "制度項目としての見方を切り分けたいときに確認できます。",
  },
  {
    href: "/how-to-read-electricity-bill",
    title: "電気料金の請求書で確認したいポイント",
    description: "実際の請求書をどの順番で見るかを、より実務寄りに整理しています。",
  },
  {
    href: "/how-to-read-electricity-quote",
    title: "法人向け電気料金見積書の見方",
    description: "請求確認の次に、比較すべき条件を見積書で確認したいときに役立ちます。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 内訳",
    "電気料金 内訳 企業",
    "高圧 電気料金 内訳",
    "請求書 電気料金 内訳 法人",
    "法人向け 電気料金 見積書",
    "燃料費調整額 再エネ賦課金",
    "電気料金 構成比",
    "基本料金 電力量料金 割合",
    "契約区分 料金水準",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-bill-breakdown",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-bill-breakdown",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金の内訳とは",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faq = [
  { question: "法人の電気料金の内訳で最も大きいのはどれですか？", answer: "多くの場合、基本料金と電力量料金が大部分を占めます。ただし燃料費調整額が高騰した2022〜2023年度には調整項目の比率が大きく増加しました。契約区分や使用量によって構成比は異なります。" },
  { question: "再エネ賦課金は契約区分によって金額が変わりますか？", answer: "単価（円/kWh）は全国一律ですが、使用電力量に比例するため契約電力が大きい事業者ほど負担が増えます。電気多消費事業者向けの減免制度もあります。" },
  { question: "燃料費調整額はどのくらい変動しますか？", answer: "毎月変動し、燃料市況によっては月間数十万円単位での変動が生じることもあります。2022年度は急騰し、規制料金の上限に達した電力会社も出ました。" },
];

export default function BusinessElectricityBillBreakdownPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人向け電気料金の内訳とは｜基本料金・電力量料金・燃調費・再エネ賦課金の構成を解説"
        description="法人向け電気料金の内訳を基本料金・電力量料金・燃料費調整額・再エネ賦課金の4項目で解説。構成比の目安、契約区分別の料金水準、業種別の構成比の違いも整理。"
        url="https://simulator.eic-jp.org/business-electricity-bill-breakdown"
        datePublished="2025-08-03"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "法人向け電気料金の内訳とは" },
        ]}
        faq={faq}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className={linkClass}>
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/articles/basic" className={linkClass}>
              基礎から知る
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-700">電気料金の内訳</li>
        </ol>
      </nav>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金の内訳とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は使用量だけで決まるわけではなく、請求書には性質の異なる費用が並びます。全体像を先に整理しておくと、
          請求確認や見積比較で何を見ればよいかが分かりやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金は、単純に使用量だけで決まる構造ではありません。請求書には固定費、使用量に応じて動く費用、月ごとに動きやすい調整項目、
            制度に基づく項目が並びます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、まず全体像をつかむことに重点を置きます。詳細な算定ルールではなく、「どう分けて見るか」「どこから確認するか」を整理し、
            <Link href="/how-to-read-electricity-bill" className={linkClass}>
              請求書確認
            </Link>
            や
            <Link href="/how-to-read-electricity-quote" className={linkClass}>
              見積比較
            </Link>
            へ自然につなげる入口ページとして使える構成にしています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>4分類で法人向け電気料金の全体像を見る考え方</li>
            <li>料金構成比の目安と変動特性</li>
            <li>契約区分（低圧・高圧・特別高圧）ごとの料金水準</li>
            <li>業種によって異なる構成比の違い</li>
            <li>請求書を見る順番と、総額上昇時の初期チェックの進め方</li>
            <li>請求確認から見積比較へつなげるときの基本的な視点</li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず押さえたい結論</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {conclusionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人向け電気料金は複数の項目の積み上げで決まる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求額の全体像は、まず「
            <Link href="/basic-charge-explained" className={linkClass}>
              基本料金
            </Link>
            」「
            <Link href="/energy-charge-explained" className={linkClass}>
              電力量料金
            </Link>
            」「
            <Link href="/fuel-cost-adjustment" className={linkClass}>
              燃料費調整額
            </Link>
            」「
            <Link href="/renewable-energy-surcharge" className={linkClass}>
              再エネ賦課金
            </Link>
            」の4分類でつかむと整理しやすくなります。
            それぞれ性質が違うため、同じ総額上昇でも見に行く先が変わります。
          </p>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-900 sm:text-base">
            請求額 = 基本料金 + 電力量料金 + 燃料費調整額 + 再エネ賦課金
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fourCategoryCards.map((card) => (
              <article key={card.item} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{card.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{card.item}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{card.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">
            契約によっては
            {" "}
            <Link href="/market-price-adjustment" className={linkClass}>
              市場価格調整額
            </Link>
            {" "}
            などの細かな項目が加わることがありますが、入口ページではまずこの4つで全体像をつかむのが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人向け電気料金を4つに分けて見る</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">何を表すか</th>
                  <th className="border border-slate-200 px-3 py-2">何で変わるか</th>
                  <th className="border border-slate-200 px-3 py-2">月ごとに動きやすいか</th>
                  <th className="border border-slate-200 px-3 py-2">見直しで変えやすいか</th>
                  <th className="border border-slate-200 px-3 py-2">実務での見方</th>
                </tr>
              </thead>
              <tbody>
                {breakdownRows.map((row) => (
                  <tr key={row.item}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.what}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.changeBy}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.monthly}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.review}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.perspective}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 新規: 料金構成比の目安テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金構成比の目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の請求書で各項目がどのくらいの割合を占めるかは、業種・使用量・市況によって変わります。
            ただし、以下の目安を知っておくと「思ったより基本料金が高い」「燃料費調整額の影響が大きい」といった異常値に気づきやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">構成比目安</th>
                  <th className="border border-slate-200 px-3 py-2">変動特性</th>
                  <th className="border border-slate-200 px-3 py-2">実務メモ</th>
                </tr>
              </thead>
              <tbody>
                {compositionRatioRows.map((row) => (
                  <tr key={row.item}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">{row.ratio}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.volatility}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
            ※構成比は高圧契約の標準的な事業所を想定した目安です。燃料費調整額は市況によって構成比が大きく変動します。2022〜2023年の高騰期には15%を超えるケースも見られました。
          </p>
        </section>

        {/* 新規: 契約区分別料金水準 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別の料金水準目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気契約は、契約電力の大きさによって
            <Link href="/high-voltage-electricity-pricing" className={linkClass}>
              高圧
            </Link>
            ・
            <Link href="/extra-high-voltage-electricity-pricing" className={linkClass}>
              特別高圧
            </Link>
            に区分されます。区分が変わると料金メニューの構造も変わるため、自社がどの区分に当たるかを把握しておくことが請求確認の出発点になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">契約区分</th>
                  <th className="border border-slate-200 px-3 py-2">契約電力目安</th>
                  <th className="border border-slate-200 px-3 py-2">月間使用量目安</th>
                  <th className="border border-slate-200 px-3 py-2">月額電気代目安</th>
                </tr>
              </thead>
              <tbody>
                {contractTierRows.map((row) => (
                  <tr key={row.tier}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      <Link href={row.detail} className={linkClass}>
                        {row.tier}
                      </Link>
                    </td>
                    <td className="border border-slate-200 px-3 py-2">{row.demand}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.usage}</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
            ※月額の幅は契約電力・使用量・単価水準・調整項目の影響によって大きく変動します。実際の見積・請求書の数字と照合しながら使ってください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求額のイメージを数字で見る</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">理解用サンプル（高圧・月間50,000kWh規模）</p>
              <dl className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                {sampleBillItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 border-b border-slate-200 pb-2 last:border-b-0 last:pb-0"
                  >
                    <dt>{item.label}</dt>
                    <dd className="font-semibold text-slate-900">{item.amount}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 rounded-lg bg-white px-3 py-3 text-base font-semibold text-slate-900">
                  <dt>合計</dt>
                  <dd>655,000円</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">この例で見たいこと</p>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                この例では電力量料金が総額の約58%を占め、基本料金は約18%です。燃料費調整額と再エネ賦課金を合算すると約24%になり、
                使用量を変えなくても市況・制度要因だけで総額が数万円単位で動く可能性があります。
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                自社の請求書でも同様に構成比を計算すると、どの項目が変動リスクを持つかが見えてきます。
              </p>
            </div>
          </div>
        </section>

        {/* 新規: 業種別構成比の違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別構成比の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の内訳構成比は業種によって異なります。同じ料金体系の契約でも、稼働パターンや設備特性によって
            「どの項目が大きいか」が変わります。自社の業種に近いパターンを参考に、請求書の見方を調整してみてください。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {industryPatterns.map((pattern) => (
              <article key={pattern.industry} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{pattern.industry}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-sky-700">
                  {pattern.feature}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{pattern.reason}</p>
                <p className="mt-2 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2 text-xs leading-6 text-slate-700">
                  実務メモ: {pattern.tip}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">各項目は何を表しているか</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/basic-charge-explained" className={linkClass}>
              基本料金
            </Link>
            は固定費としての性格が強く、
            {" "}
            <Link href="/contract-demand-what-is-it" className={linkClass}>
              契約電力
            </Link>
            {" "}
            や契約条件と関係します。使用量が減っても残りやすい費用なので、総額が思ったほど下がらないときは、固定費の比率を確認する視点が重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力の背景には
            {" "}
            <Link href="/contract-demand-what-is-it" className={linkClass}>
              デマンド
            </Link>
            {" "}
            の考え方がありますが、このページでは詳細運用には踏み込みません。まずは「使用量が減っても残る費用」として押さえておくと全体像を見やすくなります。
          </p>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/energy-charge-explained" className={linkClass}>
              電力量料金
            </Link>
            は使用量に応じて増減する項目です。ただし、請求額を見るときは使用量だけでなく単価条件もあわせて確認する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較に進む場面では、
            {" "}
            <Link href="/how-to-read-electricity-quote" className={linkClass}>
              法人向け電気料金見積書の見方
            </Link>
            {" "}
            で、現在契約と同じ前提で比較できているかを確認すると判断しやすくなります。
          </p>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">燃料費調整額</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/fuel-cost-adjustment" className={linkClass}>
              燃料費調整額
            </Link>
            は、燃料価格や制度要因を反映する項目です。前月比や前年同月比で動きやすく、使用量が大きく変わっていなくても請求額差が出る理由になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約によっては
            {" "}
            <Link href="/market-price-adjustment" className={linkClass}>
              市場価格調整額
            </Link>
            {" "}
            のような別の調整項目が見えることもありますが、このページでは「月次で動きやすい調整項目」として整理します。
          </p>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">再エネ賦課金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/renewable-energy-surcharge" className={linkClass}>
              再エネ賦課金
            </Link>
            は制度に基づく費用で、使用量に応じて増えます。契約の安さとは別枠で見たほうが整理しやすく、燃料費調整額と同じ要因として扱わないことが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価は毎年度改定されるため、前年と同じ使用量でも賦課金額が変わることがあります。このページでは、制度項目として切り分ける視点を押さえることを優先します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求額が上がったときはどこから確認するか</h2>
          <div className="mt-4 grid gap-4 xl:grid-cols-3">
            {increaseCases.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{item.description}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">確認したい点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                  {item.checks.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書を見る順番</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {invoiceSteps.map((item) => (
              <article key={item.step} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-semibold text-sky-700">
                  {item.step}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            この順で見ると、総額の増減を「使用量要因」「固定費要因」「調整項目」「制度項目」に切り分けやすくなります。実際の確認手順をさらに細かく見たい場合は、
            {" "}
            <Link href="/how-to-read-electricity-bill" className={linkClass}>
              電気料金の請求書で確認したいポイント
            </Link>
            {" "}
            へ進むと、月次確認の流れを実務に落とし込みやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書と見積書では見る目的が違う</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">見る資料</th>
                  <th className="border border-slate-200 px-3 py-2">主な目的</th>
                  <th className="border border-slate-200 px-3 py-2">確認したい項目</th>
                  <th className="border border-slate-200 px-3 py-2">よくある見落とし</th>
                </tr>
              </thead>
              <tbody>
                {documentComparisonRows.map((row) => (
                  <tr key={row.document}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.document}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.purpose}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.points}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            請求書では「何が起きたか」を確認し、見積書では「どの条件で契約するか」を比較します。
            {" "}
            <Link href="/how-to-read-electricity-bill" className={linkClass}>
              請求書の確認ポイント
            </Link>
            {" "}
            と
            {" "}
            <Link href="/how-to-read-electricity-quote" className={linkClass}>
              見積書の見方
            </Link>
            {" "}
            を分けて見ると、役割の違いが整理しやすくなります。料金メニューを比較したい場合は
            {" "}
            <Link href="/compare" className={linkClass}>
              比較ページ
            </Link>
            {" "}
            も活用できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある誤解</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {misconceptions.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで扱うこと / 扱わないこと</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">扱うこと</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>請求額の全体構造</li>
                <li>各項目の役割の違い</li>
                <li>構成比の目安と変動特性</li>
                <li>契約区分別の料金水準</li>
                <li>業種別の構成比の傾向</li>
                <li>請求確認・見積比較の入口となる考え方</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">扱わないこと</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>契約電力の詳細算定</li>
                <li>デマンド管理の詳細運用</li>
                <li>固定プランと市場連動プランの深い比較</li>
                <li>個別見積条件の細かな精査</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">こんな方におすすめ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>初めて請求書を見る担当者</li>
            <li>契約更新前に全体像を確認したい方</li>
            <li>見積比較の前提知識を整理したい方</li>
            <li>業種ごとの電気代の特徴を把握したい方</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次に読むページ</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {nextReadingLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金は、使用量だけでなく固定費・調整項目・制度項目を分けて見ることが重要です。構成比の目安を知ることで異常値に気づきやすくなり、
            契約区分や業種ごとの特性を理解しておくと自社の請求書の見方が一段と具体的になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求確認と見積比較は役割が異なるため、まずはこのページで全体像をつかみ、その後に
            <Link href="/how-to-read-electricity-bill" className={linkClass}>
              請求書確認
            </Link>
            ・
            <Link href="/how-to-read-electricity-quote" className={linkClass}>
              見積書確認
            </Link>
            の詳細ページへ進むと判断しやすくなります。
          </p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力料金の構成・制度に関するデータ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場データ・料金情報" },
          ]}
          publishedAt="2025-08-03"
        />

        <RelatedLinks
          heading="関連する解説ページ"
          intro="内訳を押さえたら、見積・相場・制度要因・上昇理由へ進むと請求の読み解きが一段深まります。"
          links={[
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "請求内訳と同じ項目軸で、見積の前提を確認できます。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人向け電気料金の相場はどう見るか",
              description: "単価水準を判断するときの相場観のつかみ方です。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因として請求に乗る賦課金の位置づけを整理できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "内訳のどの要因が効いているかを全体像でつなげられます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金と仕組み",
              description: "高圧契約の料金体系を詳しく確認できます。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧電力の料金と仕組み",
              description: "大規模需要家向けの特別高圧の料金体系を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="請求確認から比較判断へつなげる"
          description="現在の請求構造を整理してから比較に進むと、単価差だけでなく条件差まで含めて判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
