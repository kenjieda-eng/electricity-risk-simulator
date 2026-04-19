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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle =
  "法人の電気料金の値上げはいつから反映されるのか｜要因別タイムラグと請求書の見方";
const pageDescription =
  "法人の電気料金の値上げがいつ請求に反映されるかを解説。検針月・請求月のずれ、燃調費・市場連動・再エネ賦課金の反映タイムラグ、複数拠点での管理ポイントを整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 値上げ いつから",
    "電気代 値上げ 2026",
    "検針月 使用月 請求月",
    "法人向け電気料金 反映時期",
    "請求書 値上げ 反映タイミング",
    "燃料費調整額 反映 いつ",
    "再エネ賦課金 改定 いつから",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/when-business-electricity-price-increases-start",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/when-business-electricity-price-increases-start",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金の値上げはいつから反映されるのか",
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

export default function WhenBusinessElectricityPriceIncreasesStartPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金の値上げはいつから反映されるのか｜要因別タイムラグと請求書の見方"
        description="法人の電気料金の値上げがいつ請求に反映されるかを解説。検針月・請求月のずれ、燃調費・市場連動・再エネ賦課金の反映タイムラグ、複数拠点での管理ポイントを整理。"
        url="https://simulator.eic-jp.org/when-business-electricity-price-increases-start"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金の値上げはいつから反映されるのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくずナビ" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li>
            <Link
              href="/articles/price-increase"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              料金が上がる理由を知る
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li className="text-slate-700">値上げはいつから反映されるか</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金の値上げはいつから反映されるのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          値上げが公表された時期と、請求額に反映される時期は一致しないことがあります。法人向け電気料金では、使用月・検針月・請求月のずれに加え、
          燃料費調整額・再エネ賦課金・市場価格調整額・容量拠出金・契約更新など、調整項目ごとに反映タイミングが異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「いつの請求から見えるのか」を軸に、要因別の反映タイムラグと実務上の確認ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 検針月→請求月→支払月のタイムライン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            検針月・請求月・支払月のタイムライン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の請求は「使用した月」と「請求書が届く月」がずれるのが原則です。下表は4月使用分を例にした標準的な流れです。
            値上げの影響が「どの月の請求書」に初めて現れるかを確認する際の基本的な枠組みとして活用してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    ステップ
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    例（4月使用分）
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    実務上の注意点
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    使用月
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">4月</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    実際に電力を使用した月
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    検針日
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    4月末〜5月初旬
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    検針日は拠点ごとに異なる
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    請求書発行
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">5月中旬</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    使用月の翌月に届くことが多い
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    支払期日
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    5月末〜6月初旬
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    支払サイトは契約により異なる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上記は標準的な例です。電力会社・契約形態・拠点の検針日によってスケジュールは前後します。
          </p>
        </section>

        {/* 値上げ要因別の反映タイムラグ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            値上げ要因別の反映タイムラグ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            値上げ要因ごとに「いつ決まり」「いつ請求に載るか」が異なります。複数の要因が同時に動くこともあるため、要因を切り分けて把握することが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    値上げ要因
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    決定時期
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    請求反映までのラグ
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                    確認方法
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    <Link
                      href="/fuel-cost-adjustment"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      燃料費調整額
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    3ヶ月平均燃料価格確定後
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    約2〜5ヶ月
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    電力会社の燃調単価公表を確認
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    <Link
                      href="/market-price-adjustment"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      市場価格調整額
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    JEPX約定後（日次〜月次）
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    当月〜翌月
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    契約タイプにより異なる
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    <Link
                      href="/renewable-energy-surcharge"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      再エネ賦課金
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    前年度末に翌年度単価決定
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    4月検針分から
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    経産省の公表を確認
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    容量拠出金
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    オークション結果確定後
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    年度ごと
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    電力会社の料金改定案内を確認
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    契約単価改定
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    契約更新時
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    更新月の検針分から
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    更新案内・新約款を確認
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-800">
                    補助金終了
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    政府決定
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    終了月の翌検針分から
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-700">
                    経産省の激変緩和措置情報
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ ラグは目安です。電力会社・地域・契約形態により異なる場合があります。
          </p>
        </section>

        {/* 燃料費調整額の詳細 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            燃料費調整額が反映される時期
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は燃料価格の動きから数ヶ月遅れて反映されます。一般的に「X月に適用される燃調単価」は「X-3〜X-5月の平均燃料価格」をもとに計算されるため、
            燃料市況が落ち着いても請求額がすぐには下がらない、あるいは遅れて上がるように見える場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <Link
              href="/fuel-cost-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額（燃調費）の仕組み
            </Link>
            や
            <Link
              href="/fuel-cost-adjustment-calculation"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃調費の計算方法
            </Link>
            も参照してください。
          </p>
        </section>

        {/* 市場価格要因 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            市場価格要因が見えるタイミング
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格要因は契約内容で反映速度が異なります。JEPX（日本卸電力取引所）の約定価格に連動する市場連動型契約では当月〜翌月に影響が見えるのに対し、
            固定比率が高い契約では緩やかに影響が出る傾向があります。詳細は
            <Link
              href="/market-price-adjustment"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場価格調整額
            </Link>
            のページも参考になります。
          </p>
        </section>

        {/* 具体例：2025年4月の再エネ賦課金改定 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            具体例：2025年4月の再エネ賦課金改定の場合
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の単価は毎年4月から切り替わります。2025年4月改定を例にとると、以下のような流れで請求書に現れます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-white">
                  <th className="border border-sky-200 px-4 py-2 text-left font-semibold text-slate-900">
                    時期
                  </th>
                  <th className="border border-sky-200 px-4 py-2 text-left font-semibold text-slate-900">
                    内容
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-sky-200 px-4 py-2 font-medium text-slate-800">
                    2025年3月下旬
                  </td>
                  <td className="border border-sky-200 px-4 py-2 text-slate-700">
                    経産省が2025年度の再エネ賦課金単価を公表
                  </td>
                </tr>
                <tr className="bg-white/60">
                  <td className="border border-sky-200 px-4 py-2 font-medium text-slate-800">
                    2025年4月
                  </td>
                  <td className="border border-sky-200 px-4 py-2 text-slate-700">
                    新単価が適用される使用月（4月1日〜）
                  </td>
                </tr>
                <tr>
                  <td className="border border-sky-200 px-4 py-2 font-medium text-slate-800">
                    2025年4月末〜5月初旬
                  </td>
                  <td className="border border-sky-200 px-4 py-2 text-slate-700">
                    4月使用分の検針
                  </td>
                </tr>
                <tr className="bg-white/60">
                  <td className="border border-sky-200 px-4 py-2 font-medium text-slate-800">
                    2025年5月中旬
                  </td>
                  <td className="border border-sky-200 px-4 py-2 text-slate-700">
                    新単価が反映された請求書が届く（初めて変化が目に見える）
                  </td>
                </tr>
                <tr>
                  <td className="border border-sky-200 px-4 py-2 font-medium text-slate-800">
                    2025年5月末〜6月初旬
                  </td>
                  <td className="border border-sky-200 px-4 py-2 text-slate-700">
                    支払（口座引落・振込）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            つまり「4月から値上げ」と報道されても、担当者が請求書で確認できるのは5月中旬以降です。経理・調達担当者が「3月と同じはずなのに増えている」と気づくのが5月末になるケースもあります。
            <Link
              href="/renewable-energy-surcharge"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              再エネ賦課金の仕組み
            </Link>
            も合わせて確認しておくと、改定の読み取りがスムーズです。
          </p>
        </section>

        {/* 複数拠点管理時の注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            複数拠点管理時の注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数の事業所・工場・店舗を管理している場合、拠点ごとに検針日が異なるため、同じ値上げでも「いつの請求書に現れるか」がバラバラになります。
            主な注意点は次のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-medium text-slate-900">検針日のずれによる月次比較の難しさ：</span>
              拠点Aは月初検針、拠点Bは月末検針の場合、同じ月の集計でも適用単価が異なることがあります。
            </li>
            <li>
              <span className="font-medium text-slate-900">値上げ影響の把握タイミングがバラバラになる：</span>
              全拠点で値上げ反映が確認できる月を揃えて比較しないと、コスト変動の実態が見えにくくなります。
            </li>
            <li>
              <span className="font-medium text-slate-900">契約更新月が拠点ごとに異なる：</span>
              単価改定が発生する月が分散するため、年間を通じて複数回の請求変動が起きやすくなります。
            </li>
            <li>
              <span className="font-medium text-slate-900">管理台帳での検針サイクル記録が有効：</span>
              拠点ごとの検針日・支払サイト・契約更新月を一覧化しておくと、「いつ何が変わるか」を先読みしやすくなります。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link
              href="/how-to-read-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              請求書の読み方
            </Link>
            を拠点別に確認し、検針日・対象期間・各調整項目の適用月を個別に把握しておくことが、複数拠点管理では特に重要です。
          </p>
        </section>

        {/* 使用月と請求月のずれ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            使用月と請求月は同じではない
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月跨ぎの検針や締め処理があるため、値上げの影響が「翌月」や「翌々月」に見えることがあります。
            「先月と比べて請求が急増した」と感じたとき、実際には2ヶ月前の使用分が反映されているケースもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <Link
              href="/why-business-electricity-bills-rise-suddenly"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金がなぜ急に上がるのか
            </Link>
            も合わせて参照すると、急増時の要因切り分けがしやすくなります。
          </p>
        </section>

        {/* 請求書で確認したいポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用期間と検針日、請求月の関係</li>
            <li>基本料金・電力量料金の単価改定時期</li>
            <li>
              <Link
                href="/fuel-cost-adjustment"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                燃料費調整額
              </Link>
              と
              <Link
                href="/market-price-adjustment"
                className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                市場価格調整額
              </Link>
              の対象月
            </li>
            <li>補助政策の適用有無と終了時期</li>
            <li>契約更新月と約款変更の有無</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の各項目を読み解く際は
            <Link
              href="/how-to-read-electricity-bill"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金明細書の読み方
            </Link>
            のページも参考にしてください。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            値上げは「いつ発表されたか」より「いつの請求に現れるか」で把握することが実務的です。使用月・検針月・請求月のずれを前提に、
            調整項目と契約更新を分けて確認すると反映時期を整理しやすくなります。特に複数拠点を管理する場合は、拠点ごとの検針サイクルと
            契約更新月を一覧化しておくことで、いつ・どの拠点で変化が起きるかを先読みできるようになります。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="when-business-electricity-price-increases-start" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "基本料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="反映時期を整理した後に、急上昇の見え方と契約見直し判断へ進むための導線です。"
          links={[
            {
              href: "/why-business-electricity-bills-rise-suddenly",
              title: "法人の電気料金はなぜ急に上がるのか",
              description: "請求急増時の要因切り分けを確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "タイムラグを含む反映ルールを確認できます。",
            },
            {
              href: "/fuel-cost-adjustment-calculation",
              title: "燃料費調整額の計算方法",
              description: "燃調費がどのように算出されるかを整理しています。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場要因の反映方法を整理できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "年度ごとの単価改定と反映タイミングを確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金明細書の読み方",
              description: "請求書の各項目と確認ポイントを解説しています。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "反映タイミング差を踏まえて比較できます。",
            },
            {
              href: "/articles/price-increase",
              title: "料金が上がる理由を知る",
              description: "値上げ要因ごとの解説記事をまとめて確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "値上げが積み重なった料金水準の推移をデータで確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="反映時期を踏まえて条件比較する"
          description="請求に出る時期の違いを把握したうえで比較すると、見積差分と実際の請求差を整理しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-increase", label: "料金上昇カテゴリを見る" },
            { href: "/", label: "シミュレーターで診断する" },
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
