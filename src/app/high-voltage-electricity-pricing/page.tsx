import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "高圧電力の料金の見方｜構成・計算例・見直しポイントを法人向けに解説";
const pageDescription =
  "高圧電力の料金構成を法人向けに解説。基本料金・電力量料金・燃料費調整額の仕組みから、小・中・大規模別のコスト試算、見直しポイントまで体系的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧電力 料金 見方",
    "高圧電力 料金構成",
    "高圧電力 基本料金",
    "契約電力 見直し",
    "法人 電気料金 計算",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/high-voltage-electricity-pricing",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-electricity-pricing",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/basic",
        width: 1200,
        height: 630,
        alt: "高圧電力の料金の見方",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const faq = [
  { question: "高圧電力の基本料金はどのように決まりますか？", answer: "高圧電力の基本料金は契約電力（kW）×基本料金単価で算定されます。契約電力は当月を含む直近12か月の最大デマンド値をもとに決まるため、ピーク電力を抑えることが基本料金削減の鍵です。" },
  { question: "高圧電力の月間電気代の目安はどのくらいですか？", answer: "使用量や契約規模によって大きく異なりますが、中小規模の高圧契約（100〜500kW程度）では月数十万円〜数百万円が一般的な目安です。燃料費調整額の変動によって大きく上下します。" },
  { question: "高圧電力の見直し頻度はどのくらいが適切ですか？", answer: "契約更新時期（1〜3年ごと）に加えて、燃料費調整額や市場価格が大きく変動した際も見直しのタイミングです。更新6か月前から情報収集を始めるのが効果的です。" },
];

export default function HighVoltageElectricityPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline="高圧電力の料金の見方｜構成・計算例・見直しポイントを法人向けに解説"
        description="高圧電力の料金構成を法人向けに解説。基本料金・電力量料金・燃料費調整額の仕組みから、小・中・大規模別のコスト試算、見直しポイントまで体系的に整理します。"
        url="https://simulator.eic-jp.org/high-voltage-electricity-pricing"
        datePublished="2025-08-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "高圧電力の料金の見方" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <Link href="/articles/basic" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基礎から知る</Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <span className="text-slate-700">高圧電力の料金</span>
          </li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧電力の料金の見方｜構成・計算例・見直しポイントを法人向けに解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力の請求書には、基本料金、電力量料金、燃料費調整額、再エネ賦課金など複数の項目が並びます。
          総額だけを見ても、何が原因で高くなっているのか、どこに見直し余地があるのかは分かりにくいことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページは「高圧電力の料金構造全体」を俯瞰するための入口です。料金の仕組みを理解したうえで、
          請求書の読み方・見積の確認・契約見直しへと段階的に進む構成になっています。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 高圧電力とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力は、主に一定規模以上の法人施設で利用される電力契約です。工場、倉庫、商業施設、オフィスビル、病院、学校などで使われるケースが多く、
            家庭向けや小規模店舗向けの低圧契約とは料金の見方や契約条件が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>
            は高圧料金の根幹をなす指標です。使用量だけでなく、設備条件・契約内容なども請求額に影響するため、
            請求構造全体を見て判断する視点が必要です。
          </p>
        </section>

        {/* 料金構成 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力の料金は何で構成されるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求額は、一般に複数項目の組み合わせで決まります。主な構成要素は次のとおりです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                <Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                契約電力をベースに決まる固定的な費用。使用量がゼロでもかかるため、コスト全体に占める比率が高い。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                <Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                実際に使用した電力量（kWh）に単価を掛けた変動費。使用量や時間帯の条件によって変わる。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">
                <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                燃料価格変動を毎月反映する調整項目。使用量に乗じる形で請求額を増減させる。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">再エネ賦課金</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                再生可能エネルギー固定価格買取制度に基づく費用。使用量が多いほど金額影響も大きくなる。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書を見るときは、どの項目が固定的か、どの項目が変動しやすいかを先に切り分けると整理しやすくなります。
            <Link href="/demand-value-guide" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値</Link>
            の管理も基本料金の最適化に直結します。
          </p>
        </section>

        {/* コスト構成シミュレーション */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力のコスト構成シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            規模別に月額コストの目安を試算しました。基本料金・電力量料金・調整項目の構成比が規模によってどう変わるかを確認できます。
          </p>

          {/* 小規模 */}
          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-semibold text-slate-900">小規模：契約100kW・月10,000kWh</h3>
            <p className="mt-1 text-xs text-slate-500">小規模オフィス・店舗・クリニックなどに多いケース</p>
            <table className="mt-3 w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">請求項目</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">算定条件</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">100kW × 1,650円/kW × 力率割引0.97</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約16万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">10,000kWh × 16円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約16万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額・再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量ベース</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約3〜5万円</td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">月額合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約30〜40万円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 中規模 */}
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-semibold text-slate-900">中規模：契約500kW・月50,000kWh</h3>
            <p className="mt-1 text-xs text-slate-500">中規模工場・スーパー・病院・複合施設などに多いケース</p>
            <table className="mt-3 w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">請求項目</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">算定条件</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">500kW × 1,500円/kW × 力率割引0.97</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約73万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">50,000kWh × 16円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約80万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額・再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量ベース</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約15〜27万円</td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">月額合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約160〜200万円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 大規模 */}
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-semibold text-slate-900">大規模：契約1,500kW・月200,000kWh</h3>
            <p className="mt-1 text-xs text-slate-500">大型工場・物流センター・大規模商業施設などに多いケース</p>
            <table className="mt-3 w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">請求項目</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">算定条件</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">1,500kW × 1,500円/kW × 力率割引0.97</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約218万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">200,000kWh × 16円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約320万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額・再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量ベース</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約28〜70万円</td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">月額合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約550〜750万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 単価は大手電力会社の標準メニュー目安。力率割引0.97適用。燃料費調整額は市場状況によって変動します。実際の料金はご契約内容をご確認ください。
          </p>
        </section>

        {/* 基本料金 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            <Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>
            の見方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金は、高圧契約の中でも重要な項目です。一般に契約電力などの条件をもとに決まり、使用量が少ない月でも一定額がかかることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            使用量だけを減らしても、基本料金の影響が大きいと総額は想定ほど下がらない場合があります。見直し時には、
            現在の契約電力や契約条件が実態に合っているかを確認することが大切です。
            <Link href="/demand-value-guide" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値の管理</Link>
            は、基本料金を下げるための実務的な手段のひとつです。
          </p>
        </section>

        {/* 電力量料金 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            <Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>
            の見方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量料金は、実際に使用した電力量に応じて増減する項目です。使用量が増えれば請求額も増え、使用量が減れば請求額も下がるのが基本です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、契約プランや時間帯別単価の設定によって見え方は変わります。月ごとの総使用量だけでなく、どの時間帯に使っているか、
            季節変動があるかも確認材料になります。
          </p>
        </section>

        {/* 燃料費調整額・再エネ賦課金 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>
            ・再エネ賦課金の見方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求書では、燃料費調整額や再エネ賦課金も重要な項目です。これらは、基本料金や電力量料金とは別に請求額へ影響します。
            使用量の変化だけでなく、調整項目の増減もあわせて確認することが大切です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            使用量があまり変わっていないのに請求額が増えた場合、これらの項目が要因になっていることがあります。
          </p>
        </section>

        {/* 請求書で確認したい実務ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で確認したい実務ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求書を確認するときは、総額だけで判断しないことが重要です。少なくとも次の観点で確認すると、原因の切り分けがしやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金はいくらか</li>
            <li>電力量料金はいくらか</li>
            <li>燃料費調整額の影響はどの程度か</li>
            <li>再エネ賦課金はいくらか</li>
            <li>使用量は前月・前年同月と比べてどうか</li>
            <li>
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>
              や契約条件に変化はないか
            </li>
          </ul>
        </section>

        {/* 高圧電力の関連ガイドハブ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力の関連ガイド</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金構造の全体像を把握したうえで、目的に応じた詳細ガイドへ進んでください。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/high-voltage-electricity-bill-guide"
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-300 hover:shadow-md"
            >
              <p className="font-semibold text-sky-700">高圧電力の請求書ガイド</p>
              <p className="mt-1 text-xs text-slate-600">実際の請求書を項目別に読み解く手順を整理。確認漏れを防ぐためのチェックリスト付き。</p>
            </Link>
            <Link
              href="/high-voltage-quotation-guide"
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-300 hover:shadow-md"
            >
              <p className="font-semibold text-sky-700">高圧電力の見積ガイド</p>
              <p className="mt-1 text-xs text-slate-600">新規契約・切替時に見積書で確認すべき項目と比較の落とし穴を解説。</p>
            </Link>
            <Link
              href="/high-voltage-contract-review-points"
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-300 hover:shadow-md"
            >
              <p className="font-semibold text-sky-700">高圧電力の契約見直しポイント</p>
              <p className="mt-1 text-xs text-slate-600">更新時期・解約条件・単価比較の実務ポイントを体系的にまとめています。</p>
            </Link>
          </div>
        </section>

        {/* 高圧契約の見直し */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧契約の見直しで確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約を見直すときは、単価比較だけでなく請求構造全体を確認することが重要です。基本料金の負担、使用量変動との整合、
            燃料費調整額や市場連動の影響、固定型と市場連動型の適合性、リスク許容度との一致をあわせて確認します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金表の見た目だけでは分からない差が、請求構造の中にあることもあります。
            <Link href="/compare" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">比較ページ</Link>
            を起点に、現行契約と候補を同じ前提で比較してみてください。
          </p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "高圧電力の契約制度・料金規制データ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・系統情報" },
          ]}
          publishedAt="2025-08-05"
        />

        <RelatedLinks
          heading="関連ページ"
          intro="高圧料金の読み方を、要因分析と契約比較へつなげるための導線です。"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金の算定に直結する契約電力の仕組みと、見直し判断の基礎を整理しています。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の仕組み",
              description: "固定費として毎月発生する基本料金の算定方法と削減アプローチを解説しています。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の仕組み",
              description: "使用量に連動する変動費の見方と、単価比較の注意点を整理しています。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の管理",
              description: "基本料金を左右するデマンド値の仕組みと、実務的な管理方法を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "月次請求に影響する燃調費の基本と、確認ポイントを整理しています。",
            },
            {
              href: "/last-resort-supply-high-voltage",
              title: "高圧・特別高圧の最終保障供給",
              description: "最終保障供給局面での高圧実務の確認項目を整理できます。",
            },
            {
              href: "/concierge",
              title: "AI コンシェルジュで関連情報を探す",
              description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
            },
            {
              href: "/articles/basic",
              title: "法人電気料金の基礎知識",
              description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。",
            },
          ]}
        />

        <AuthorBadge publishedAt="2026-03-01" updatedAt="2026-03-01" />

        <ContentCta
          heading="実際の条件で比較する"
          description="解説で確認した観点をもとに、現行契約と候補を同じ前提で比較すると、見直し余地が見えやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/basic", label: "基礎知識をまとめて読む" },
          ]}
        />
      </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
