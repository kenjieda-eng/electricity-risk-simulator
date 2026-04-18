import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import TrendForecastCalculator from "../../components/market-data/TrendForecastCalculator";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "法人向け電気料金は高止まりしているのか｜2019〜2025年の年次データと構造要因";
const pageDescription =
  "2019年から2025年までの年次単価データをもとに、法人向け電気料金が2022年急騰後も元の水準に戻っていない実態を解説します。構造的な高止まり要因と月額影響シミュレーションも掲載。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 推移",
    "電気料金 高止まり",
    "2019 2025 電気料金",
    "特別高圧 高圧 低圧 比較",
    "法人 電力契約 見直し",
    "電気料金 構造要因",
    "再エネ賦課金 容量拠出金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-trend-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-trend-2019-2025",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金の推移",
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

export default function ElectricityPriceTrend20192025Page() {
  return (
    <>
      <ArticleJsonLd
        headline="法人向け電気料金は高止まりしているのか｜2019〜2025年の年次データと構造要因"
        description="2019年から2025年までの年次単価データをもとに、法人向け電気料金が2022年急騰後も元の水準に戻っていない実態を解説します。構造的な高止まり要因と月額影響シミュレーションも掲載。"
        url="https://simulator.eic-jp.org/electricity-price-trend-2019-2025"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人向け電気料金は高止まりしているのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">高止まりしているのか</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ページヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金は高止まりしているのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金は、2022年に大きく上昇した後、足元でやや落ち着いたように見える場面があります。ただし、2019年から2021年の水準と比較すると、
          2023年から2025年も依然として高い水準にあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、年次単価データをもとに急騰と高止まりを区別して整理し、構造的な要因と月額コストへの具体的な影響まで確認します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* ── 年次推移テーブル ── */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2019〜2025年の年次単価推移（円/kWh、年平均）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>を含まない年平均単価の推移です。2022年を境に水準が切り上がり、
            2025年現在も2019〜2021年の水準には戻っていないことが読み取れます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">特別高圧</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">高圧</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">低圧電灯</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">低圧電力</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な出来事</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2019</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">12.084</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">15.581</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">22.102</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">26.262</td>
                  <td className="border border-slate-200 px-3 py-2">コロナ前の安定期</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2020</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">11.388</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">14.241</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">22.143</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">25.420</td>
                  <td className="border border-slate-200 px-3 py-2">コロナ需要減</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2021</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">10.830</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">14.252</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">21.235</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">25.184</td>
                  <td className="border border-slate-200 px-3 py-2">回復途上＋冬季スパイク</td>
                </tr>
                {/* 2019-2021平均行 */}
                <tr className="bg-sky-50 font-semibold text-slate-800">
                  <td className="border border-slate-200 px-3 py-2">2019〜2021平均</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">11.434</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">15.024</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">21.760</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">25.622</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600 font-normal">急騰前の基準水準</td>
                </tr>
                {/* 2022 急騰行 */}
                <tr className="bg-red-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-800">2022</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-800">17.143</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-800">20.577</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-800">26.839</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-800">30.336</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">ウクライナ危機・燃料高騰</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2023</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">17.836</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">21.469</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">29.247</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">29.860</td>
                  <td className="border border-slate-200 px-3 py-2">大手電力値上げ＋補助金</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">2024</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">16.522</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">20.244</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">28.211</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">28.070</td>
                  <td className="border border-slate-200 px-3 py-2">補助金縮小・容量拠出金開始</td>
                </tr>
                {/* 2025 高止まり行 */}
                <tr className="bg-amber-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-800">2025</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-800">17.414</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-800">21.145</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-800">26.891</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-800">30.194</td>
                  <td className="border border-slate-200 px-3 py-2 text-amber-700">再エネ賦課金過去最高・補助終了</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 資源エネルギー庁「電力調査統計」をもとに作成。単位は円/kWh（再エネ賦課金を含まない年平均値）。
          </p>
        </section>

        {/* ── 2022年急騰と高止まりの違い ── */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2022年に急騰し、その後も元の水準には戻っていない
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年はウクライナ危機に端を発した燃料高騰で、全区分が一気に水準を切り上げました。その後2023〜2025年は急騰前との比較で上昇幅は縮小したものの、
            2019〜2021年の平均値には戻っていません。特別高圧で約＋52%、高圧で約＋41%の乖離が続いています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            重要なのは、ピークアウトしたかどうかと過去の水準に戻ったかどうかは別の論点だという点です。法人の料金判断では、前年比較だけでなく数年単位の比較が必要です。
            詳細は{" "}
            <Link
              href="/why-electricity-prices-have-not-returned"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金が元に戻らない理由
            </Link>
            も参照してください。
          </p>
        </section>

        {/* ── 高止まりの構造的要因テーブル ── */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高止まりの構造的要因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年時点で電気料金が安値期に戻らない背景には、複数の構造的な要因が重なっています。
            単なる燃料価格の問題にとどまらず、制度変更が上昇圧力を固定化しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">要因</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">内容</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2019年以前との違い</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">今後下がる可能性</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium">燃料調達コスト</td>
                  <td className="border border-slate-200 px-3 py-2">LNG・石炭の国際価格が上昇</td>
                  <td className="border border-slate-200 px-3 py-2">2019年の1.5〜2倍水準</td>
                  <td className="border border-slate-200 px-3 py-2">市況次第で変動</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">為替（円安）</td>
                  <td className="border border-slate-200 px-3 py-2">円ドル150円前後</td>
                  <td className="border border-slate-200 px-3 py-2">2019年は110円前後</td>
                  <td className="border border-slate-200 px-3 py-2">金利差縮小で一部戻る可能性</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium">大手電力の規制料金改定</td>
                  <td className="border border-slate-200 px-3 py-2">2023年に6社が値上げ</td>
                  <td className="border border-slate-200 px-3 py-2">規制料金の基準が上がった</td>
                  <td className="border border-slate-200 px-3 py-2">再値下げは制度的に難しい</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">2025年度3.49円（過去最高）</td>
                  <td className="border border-slate-200 px-3 py-2">2019年は2.95円</td>
                  <td className="border border-slate-200 px-3 py-2">当面高止まり</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium">容量拠出金</td>
                  <td className="border border-slate-200 px-3 py-2">2024年度から本格開始</td>
                  <td className="border border-slate-200 px-3 py-2">2019年は制度なし</td>
                  <td className="border border-slate-200 px-3 py-2">新たな構造的上昇要因</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">託送料金</td>
                  <td className="border border-slate-200 px-3 py-2">レベニューキャップ制で微増傾向</td>
                  <td className="border border-slate-200 px-3 py-2">投資増による上昇圧力</td>
                  <td className="border border-slate-200 px-3 py-2">下がる見込みなし</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の詳細は{" "}
            <Link
              href="/fuel-cost-adjustment-history"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整単価の推移
            </Link>
            も参照してください。
          </p>
        </section>

        {/* ── 月額影響シミュレーション ── */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月額影響シミュレーション（高圧・月50,000kWh施設の例）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月50,000kWhを使用する高圧契約の施設を例に、2019年水準と2025年水準を費目別に比較します。
            「少し上がった」という感覚が、実際には年間数百万円規模のコスト増になっていることがわかります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">費目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2019年水準</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2025年水準</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">差額（月額）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">差額（年額）</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">75万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">106万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋31万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋372万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">燃調費</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">＋2万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">＋8万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋6万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋72万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">14.8万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">17.5万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋2.7万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋32万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">容量拠出金</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">0円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">7.5万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋7.5万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">＋90万円</td>
                </tr>
                <tr className="bg-amber-50 font-bold text-slate-900">
                  <td className="border border-slate-200 px-3 py-2">合計差額</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">―</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">―</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700">＋47万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700">＋566万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            試算前提: 高圧契約・月50,000kWh使用。電力量料金は年次単価を使用。燃調費・再エネ賦課金・容量拠出金は各年度の代表値を使用。
            実際の料金は契約条件・地域・月ごとに異なります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社の使用量で計算したい場合は{" "}
            <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              料金メニュー比較診断
            </Link>
            をご活用ください。
          </p>
        </section>

        {/* ── 区分別の上昇幅 ── */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧・高圧・低圧で上昇幅はどう違うか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            上昇幅は区分ごとに異なり、特に特別高圧と高圧で上振れが大きい傾向があります。低圧電灯と低圧電力も2022年以降に上がったままで、安値期には戻っていません。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>特別高圧: 2021年10.830円 → 2025年17.414円（＋60.8%）</li>
            <li>高圧: 2021年14.252円 → 2025年21.145円（＋48.4%）</li>
            <li>低圧電灯: 2021年21.235円 → 2025年26.891円（＋26.6%）</li>
            <li>低圧電力: 2021年25.184円 → 2025年30.194円（＋19.9%）</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            区分別の料金構造の違いは{" "}
            <Link
              href="/electricity-price-by-voltage-type"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電圧区分別の料金構造
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* ── 高止まりを前提に見ておくべきポイント ── */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高止まりを前提に法人が見ておきたいポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の電気料金を一時的な高騰として扱うだけでは、見直しのタイミングを逃す可能性があります。法人としては、高止まりの可能性を前提に、
            調達条件と契約構造を再点検することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約更新時に単価と調整項目の条件を再確認する</li>
            <li>市場連動型と固定型のリスク配分を比較する</li>
            <li>直近1年だけでなく3〜5年でコスト推移を評価する</li>
            <li>補助金の有無とベース単価を分けて判断する</li>
            <li>容量拠出金・再エネ賦課金などの固定的上昇要因を別枠で把握する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金の影響については{" "}
            <Link
              href="/electricity-price-subsidy-impact"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金補助金の影響
            </Link>
            、今後の見通しは{" "}
            <Link
              href="/how-long-business-electricity-price-surge-lasts"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人電気料金の高騰はいつまで続くか
            </Link>
            を参照してください。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="electricity-price-trend-2019-2025" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "JEPX", "市場連動プラン", "高圧電力", "電気料金の内訳"]} />
        </div>

        {/* ── 関連リンク ── */}
        
      <TrendForecastCalculator />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-2">
          <RelatedLinks
            heading="関連ページ"
            intro="データの背景と長期トレンドを確認すると、見直し判断に接続しやすくなります。"
            links={[
              {
                href: "/business-electricity-price-trend-10-years",
                title: "法人電気料金10年間の推移",
                description: "2015年からの長期データで構造変化を俯瞰できます。",
              },
              {
                href: "/why-electricity-prices-have-not-returned",
                title: "電気料金が元に戻らない理由",
                description: "ピークアウト後も高止まりが続く構造的背景を解説します。",
              },
              {
                href: "/electricity-price-by-voltage-type",
                title: "電圧区分別の料金構造",
                description: "特別高圧・高圧・低圧の違いと契約選択のポイントを整理しています。",
              },
              {
                href: "/fuel-cost-adjustment-history",
                title: "燃料費調整単価の推移",
                description: "燃調費の単価変動と電気料金への影響を年次データで確認できます。",
              },
              {
                href: "/electricity-price-subsidy-impact",
                title: "電気料金補助金の影響",
                description: "補助金の縮小・終了が請求額に与えた影響を整理しています。",
              },
              {
                href: "/how-long-business-electricity-price-surge-lasts",
                title: "法人電気料金の高騰はいつまで続くか",
                description: "各要因の見通しをもとに今後のシナリオを整理しています。",
              },
              {
                href: "/market-linked-plan",
                title: "市場連動プランとは",
                description: "高止まり局面でのプラン選択リスクを確認できます。",
              },
            ]}
          />
        </div>

        {/* ── CTA ── */}
        <ContentCta
          heading="高止まりを前提に、現行契約を比較する"
          description="2025年水準での電気料金が今後も続くと仮定したうえで、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-trends", label: "電気料金推移の記事一覧を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
