import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle = "急騰後も電気料金が元に戻らないのはなぜか｜一時的要因と構造的要因を整理";
const pageDescription =
  "2022年に急騰した電気料金が、その後も2019年から2021年の水準に戻っていない背景を法人向けに整理します。LNG価格・円安・料金改定・再エネ賦課金・容量拠出金など要因を一時的と構造的に分類して解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 元に戻らない 理由",
    "法人 電気料金 高止まり 背景",
    "電気料金 一時的要因 構造的要因",
    "再エネ賦課金 容量拠出金 高止まり",
    "電力契約 見直し 判断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-electricity-prices-have-not-returned",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-electricity-prices-have-not-returned",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "電気料金が元に戻らない背景",
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

export default function WhyElectricityPricesHaveNotReturnedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="急騰後も電気料金が元に戻らないのはなぜか｜一時的要因と構造的要因を整理"
        description="2022年に急騰した電気料金が、その後も2019年から2021年の水準に戻っていない背景を法人向けに整理します。LNG価格・円安・料金改定・再エネ賦課金・容量拠出金など要因を一時的と構造的に分類して解説します。"
        url="https://simulator.eic-jp.org/why-electricity-prices-have-not-returned"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "急騰後も電気料金が元に戻らないのはなぜか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくず">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <Link href="/articles/price-trends" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <span>なぜ元に戻らないのか</span>
          </li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          急騰後も電気料金が元に戻らないのはなぜか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の急騰をピークとして、電気料金は一部で落ち着きが見える場面があります。しかし、2019年から2021年の水準と比較すると、
          2023年から2025年も高い状態が続いています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、今後予測ではなく背景構造に焦点を当て、なぜ「急騰後に元の水準へ戻り切っていない」のかを法人向けに整理します。
          要因を「一時的」と「構造的」に分類することで、各費目が戻る可能性かどうかを見極める視点を提供します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年は急騰の年だった</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年平均データでは、2022年に全区分で単価が大きく上昇しました。特別高圧17.143、高圧20.577、低圧電灯26.839、低圧電力30.336と、
            2019年から2021年の水準から一段上へ移動しています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この年の急騰が強く印象に残るため、現在の水準を低く見積もってしまうことがあります。まずは急騰の年と、その後の水準を分けて確認することが重要です。
            詳しい年次推移は{" "}
            <Link href="/electricity-price-trend-2019-2025" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              2019年から2025年の推移
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2023年以降に少し落ち着いても元の水準には戻っていない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年以降はピークより低下する区分がある一方、2025年は依然として基準期より高い状態です。例えば高圧は2019年から2021年平均15.024に対し、
            2025年は21.145、特別高圧は11.434に対して17.414です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ここで押さえたいのは、ピークアウトと原状回復は同義ではない点です。法人の予算管理や契約判断では、前月や前年比だけでなく、
            基準期比較を組み合わせる必要があります。長期的な視点については{" "}
            <Link href="/business-electricity-price-trend-10-years" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              10年間の単価推移
            </Link>
            も参照してください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電圧区分別 電気料金単価の推移（円/kWh・年平均）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特別高圧</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高圧</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">低圧電灯</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">低圧電力</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2019〜2021平均</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">11.43</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">15.02</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">22.96</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">21.15</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2022（ピーク）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">17.14</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20.58</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">26.84</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30.34</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">17.84</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">21.47</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">29.25</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">29.86</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">16.52</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20.24</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">28.21</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">28.07</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2025</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">17.41</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">21.15</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">28.58</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">29.48</td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">基準期比（2025/基準）</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+52%</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+41%</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+24%</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+39%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年の単価は、基準期（2019〜2021年平均）と比較して特別高圧で<span className="font-semibold text-slate-900">+52%</span>、高圧で<span className="font-semibold text-slate-900">+41%</span>の水準です。
            ピークからの低下はあるものの、基準期への回帰には程遠い状態が続いています。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一時的要因 vs 構造的要因：何が戻り、何が戻らないのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高止まりの背景は単一の原因ではなく、「一時的な要因」と「構造的な要因」が重なっています。それぞれの現状と今後の見通しを整理します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">要因</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">分類</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">2022年時点</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">2025年時点</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">戻る見込み</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    LNG価格急騰
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">一時的</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">105円/kg前後</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">72円/kg前後</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">一部戻った</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">円安の定着</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800">半構造的</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">130→150円/ドル方向</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">150円前後で推移</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">戻っていない</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">規制料金改定</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">構造的</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">改定前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">改定後（6社＋15〜44%）</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">元に戻らない</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/renewable-energy-surcharge-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    再エネ賦課金上昇
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">構造的</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3.45円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3.49円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">高止まり</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/capacity-contribution-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    容量拠出金
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-800">構造的（新規）</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">制度なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1.5〜2.0円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">増加方向</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電気料金補助金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800">一時的</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">適用開始</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">終了</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再導入は不透明</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNG価格は一部緩和されましたが、規制料金改定・再エネ賦課金・容量拠出金といった構造的な費目は元に戻らない、あるいは増加方向にあります。
            「ピークアウト＝元に戻った」ではない理由がここにあります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">費目別の「戻りやすさ」整理</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金を構成する各費目は、戻りやすさが異なります。契約管理・予算計画では費目ごとに性質を把握することが重要です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">費目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">戻りやすさ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">根拠</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    燃調費
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">戻りやすい</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料価格下落で自動反映される仕組み</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整額</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">戻りやすい（市場連動型のみ）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX市場価格の低下に連動</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金単価</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-700">戻りにくい</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">規制料金改定後の単価が契約基準となるため</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/renewable-energy-surcharge-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    再エネ賦課金
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">ほぼ戻らない</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">制度設計上、下がる局面は限定的</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/capacity-contribution-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    容量拠出金
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">当面戻らない</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">制度拡大フェーズにあり、単価は増加傾向</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <Link href="/wheeling-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                    託送料金
                  </Link>
                </td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">戻らない</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">送配電設備投資の積み上げにより継続上昇</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃調費のように「市況連動で自動的に反映される費目」は戻る可能性があります。一方で再エネ賦課金・容量拠出金・託送料金は構造上戻りにくく、
            電気料金の底上げ要因として機能し続けています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が「一時的か構造的か」を見分ける視点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            判断のポイントは、単月や単年度の上下よりも、基準期と比較した水準が継続しているかどうかです。加えて、請求総額だけではなく、
            単価と調整項目を分けて確認すると、変化の性質が見えやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>2019年から2021年平均との乖離が続いているか</li>
            <li>区分ごとの違いを確認しているか</li>
            <li>補助金の有無とベース単価を分けて見ているか</li>
            <li>燃調費・再エネ賦課金・容量拠出金をそれぞれ把握しているか</li>
            <li>契約更新時の条件変化を把握しているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金がいつ下がるかについては{" "}
            <Link href="/when-will-business-electricity-prices-drop" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人電気料金が下がる条件
            </Link>
            で整理しています。契約メニューの比較は{" "}
            <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              比較診断ページ
            </Link>
            で確認できます。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="why-electricity-prices-have-not-returned" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "託送料金", "JEPX", "市場連動プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="背景を理解した後は、費目別の詳細と比較実務へ進む流れが有効です。"
          links={[
            {
              href: "/electricity-price-trend-2019-2025",
              title: "2019年から2025年の推移を確認する",
              description: "急騰と高止まりの全体像を年次で確認できます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "10年間の法人電気料金単価推移",
              description: "長期視点での構造変化を把握できます。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移と仕組み",
              description: "一時的要因の代表・燃調費の動向を理解できます。",
            },
            {
              href: "/renewable-energy-surcharge-history",
              title: "再エネ賦課金の推移と見通し",
              description: "構造的高止まり要因の一つを詳しく確認できます。",
            },
            {
              href: "/capacity-contribution-history",
              title: "容量拠出金の推移と仕組み",
              description: "新たな構造コストとして拡大中の費目を把握できます。",
            },
            {
              href: "/wheeling-charge-explained",
              title: "託送料金の仕組みと上昇背景",
              description: "送配電投資による底上げ要因を理解できます。",
            },
            {
              href: "/when-will-business-electricity-prices-drop",
              title: "法人電気料金が下がる条件",
              description: "今後の見通しと判断軸を整理できます。",
            },
            {
              href: "/articles/price-trends",
              title: "電気料金の推移と高止まり（カテゴリ一覧）",
              description: "関連ページ一覧から体系的に学べます。",
            },
          ]}
        />

        <ContentCta
          heading="背景理解を比較判断につなげる"
          description="一時的変動と構造変化を分けて把握したうえで、候補プランを比較すると意思決定しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/why-business-electricity-prices-rise", label: "上昇要因の解説を見る" },
            { href: "/market-linked-vs-fixed", label: "契約タイプ比較を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
