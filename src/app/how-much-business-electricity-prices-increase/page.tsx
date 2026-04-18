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

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


// --- 定数 ---
const pageTitle = "法人の電気料金はどのくらい上がるのか｜要因別の影響幅と実績データ";
const pageDescription =
  "法人の電気料金がどのくらい上がるかを、要因別の影響幅テーブルと2022〜2025年の実績データで解説。燃調費・市場連動・再エネ賦課金・補助金終了の月額影響を使用量別に試算。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 値上げ どのくらい",
    "電気料金 値上げ 比較",
    "法人向け電気料金 値上げ幅",
    "燃料費調整額 市場価格調整額",
    "請求額 増え方 見方",
    "電気料金 値上げ 実績",
    "法人 電気代 シミュレーション",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-much-business-electricity-prices-increase",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-much-business-electricity-prices-increase",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- Page Component ---
export default function HowMuchBusinessElectricityPricesIncreasePage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金はどのくらい上がるのか｜要因別の影響幅と実績データ"
        description="法人の電気料金がどのくらい上がるかを、要因別の影響幅テーブルと2022〜2025年の実績データで解説。燃調費・市場連動・再エネ賦課金・補助金終了の月額影響を使用量別に試算。"
        url="https://simulator.eic-jp.org/how-much-business-electricity-prices-increase"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金はどのくらい上がるのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">

      {/* パンくずナビ */}
      <nav aria-label="パンくずリスト" className="mb-4 flex items-center gap-1.5 text-xs text-slate-500">
        <Link href="/" className="hover:text-sky-700 hover:underline">ホーム</Link>
        <span aria-hidden="true">/</span>
        <Link href="/articles/price-increase" className="hover:text-sky-700 hover:underline">料金が上がる理由を知る</Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-700">どのくらい上がるのか</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金はどのくらい上がるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金の値上げ幅は一律ではなく、契約条件・使用量・調整項目・補助政策の状況で大きく変わります。
          「なぜ上がるか」だけでなく、<strong>「どの項目がどれだけ上がるか」</strong>を分けて把握することが、コスト管理と社内説明の前提になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、要因別の影響幅テーブルと2022〜2025年の実績データ、使用量規模別のシミュレーションを示し、値上げ幅の確認方法を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-8">

        {/* 値上げ要因別の影響幅テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">値上げ要因別の影響幅</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人電気料金の上昇は単一要因ではなく、下表の複数の項目が同時に、または時間差で積み重なって発生します。
            それぞれの発生頻度と影響幅の目安を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-300 px-3 py-2 font-semibold">値上げ要因</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">1kWhあたりの変動幅</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">月5万kWh施設の月額影響</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">月20万kWh施設の月額影響</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">発生頻度</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-2 font-medium">
                    <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">単価改定（契約更新時）</Link>
                  </td>
                  <td className="border border-slate-300 px-3 py-2">+1〜5円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2">+5〜25万円</td>
                  <td className="border border-slate-300 px-3 py-2">+20〜100万円</td>
                  <td className="border border-slate-300 px-3 py-2">1〜3年に1回</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium">
                    <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の変動</Link>
                  </td>
                  <td className="border border-slate-300 px-3 py-2">▲2〜+5円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2">▲10〜+25万円</td>
                  <td className="border border-slate-300 px-3 py-2">▲40〜+100万円</td>
                  <td className="border border-slate-300 px-3 py-2">毎月</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-2 font-medium">
                    <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額の変動</Link>
                  </td>
                  <td className="border border-slate-300 px-3 py-2">▲3〜+10円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2">▲15〜+50万円</td>
                  <td className="border border-slate-300 px-3 py-2">▲60〜+200万円</td>
                  <td className="border border-slate-300 px-3 py-2">毎月（市場連動型）</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium">
                    <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金の改定</Link>
                  </td>
                  <td className="border border-slate-300 px-3 py-2">+0.5〜1円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2">+2.5〜5万円</td>
                  <td className="border border-slate-300 px-3 py-2">+10〜20万円</td>
                  <td className="border border-slate-300 px-3 py-2">年1回（4月）</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-2 font-medium">
                    <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の増加</Link>
                  </td>
                  <td className="border border-slate-300 px-3 py-2">+0.3〜1円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2">+1.5〜5万円</td>
                  <td className="border border-slate-300 px-3 py-2">+6〜20万円</td>
                  <td className="border border-slate-300 px-3 py-2">年次</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium">
                    <Link href="/impact-of-electricity-subsidy-ending" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金の縮小・終了</Link>
                  </td>
                  <td className="border border-slate-300 px-3 py-2">+1.8〜7円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2">+9〜35万円</td>
                  <td className="border border-slate-300 px-3 py-2">+36〜140万円</td>
                  <td className="border border-slate-300 px-3 py-2">政策変更時</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 変動幅はあくまで目安です。実際の影響額は契約条件・調達方式・地域・時期によって異なります。
          </p>
        </section>

        {/* 2022〜2025年の実績ベースの上昇幅 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年〜2025年の実績ベースの上昇幅</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            直近の実績として、どのタイミングでどの程度の上昇が発生したかを整理します。
            累積すると月5万kWh規模でも年間数百万円単位の影響が生じています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-300 px-3 py-2 font-semibold">時期</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">主な上昇要因</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">高圧平均の上昇幅目安</th>
                  <th className="border border-slate-300 px-3 py-2 font-semibold">月5万kWhの月額影響</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-2 font-medium">2022年後半</td>
                  <td className="border border-slate-300 px-3 py-2">LNG高騰＋燃調急上昇</td>
                  <td className="border border-slate-300 px-3 py-2 text-red-700 font-semibold">+8〜15円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2 text-red-700 font-semibold">+40〜75万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium">2023年前半</td>
                  <td className="border border-slate-300 px-3 py-2">大手電力値上げ（規制料金）</td>
                  <td className="border border-slate-300 px-3 py-2 text-red-700 font-semibold">+2〜5円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2 text-red-700 font-semibold">+10〜25万円</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-2 font-medium">2023年10月</td>
                  <td className="border border-slate-300 px-3 py-2">補助金半減（▲7円→▲3.5円）</td>
                  <td className="border border-slate-300 px-3 py-2 text-orange-700 font-semibold">+3.5円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2 text-orange-700 font-semibold">+17.5万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-3 py-2 font-medium">2024年6月</td>
                  <td className="border border-slate-300 px-3 py-2">補助金終了</td>
                  <td className="border border-slate-300 px-3 py-2 text-orange-700 font-semibold">+1.8〜3.5円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2 text-orange-700 font-semibold">+9〜17.5万円</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-3 py-2 font-medium">2025年4月</td>
                  <td className="border border-slate-300 px-3 py-2">再エネ賦課金過去最高</td>
                  <td className="border border-slate-300 px-3 py-2 text-orange-700 font-semibold">+0.68円/kWh</td>
                  <td className="border border-slate-300 px-3 py-2 text-orange-700 font-semibold">+3.4万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上昇幅は高圧契約（業務用・産業用）の目安値です。市場連動型契約では変動幅がさらに大きくなるケースがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            月次・年次の詳細な動向は
            <Link href="/business-electricity-retrospective" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人電気料金振り返りシリーズ
            </Link>
            で確認できます。
          </p>
        </section>

        {/* 使用量規模別の年間コスト増加シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量規模別の年間コスト増加シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価が+3円/kWh上昇した場合の年間追加コストを、規模別に示します。
            使用量が多い施設ほど、単価の微小な変動でも年間影響が桁違いに拡大します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">小規模</p>
              <p className="mt-1 text-lg font-bold text-slate-900">月1万kWh</p>
              <p className="mt-2 text-2xl font-bold text-red-700">年間 +36万円</p>
              <p className="mt-1 text-xs text-slate-500">単価+3円/kWh × 1万kWh × 12ヶ月</p>
              <p className="mt-2 text-sm text-slate-600">小規模店舗・中小オフィスが該当。月3万円の追加負担が12ヶ月続く計算。</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">中規模</p>
              <p className="mt-1 text-lg font-bold text-slate-900">月5万kWh</p>
              <p className="mt-2 text-2xl font-bold text-red-700">年間 +180万円</p>
              <p className="mt-1 text-xs text-slate-500">単価+3円/kWh × 5万kWh × 12ヶ月</p>
              <p className="mt-2 text-sm text-slate-600">中規模スーパー・工場・病院が該当。月15万円の追加が12ヶ月続く。</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">大規模</p>
              <p className="mt-1 text-lg font-bold text-slate-900">月20万kWh</p>
              <p className="mt-2 text-2xl font-bold text-red-700">年間 +720万円</p>
              <p className="mt-1 text-xs text-slate-500">単価+3円/kWh × 20万kWh × 12ヶ月</p>
              <p className="mt-2 text-sm text-slate-600">大規模商業施設・物流倉庫が該当。月60万円の追加負担。</p>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-700">超大規模</p>
              <p className="mt-1 text-lg font-bold text-slate-900">月100万kWh</p>
              <p className="mt-2 text-2xl font-bold text-red-700">年間 +3,600万円</p>
              <p className="mt-1 text-xs text-slate-500">単価+3円/kWh × 100万kWh × 12ヶ月</p>
              <p className="mt-2 text-sm text-slate-600">大型工場・データセンターが該当。月300万円の追加が経営に直結。</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自社の契約条件・使用量を入力して実際の影響額を算出するには、
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              シミュレーター
            </Link>
            を活用してください。
          </p>
        </section>

        {/* 上がり幅を確認するチェックリスト */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">上がり幅を確認するチェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書・契約内容を手元に用意して、以下の6項目を確認してください。
          </p>
          <ul className="mt-4 space-y-3">
            {[
              {
                no: "1",
                label: "電力量料金の単価を前回契約と比較したか",
                note: "更新時の単価改定が最大の増加要因になりやすい。",
              },
              {
                no: "2",
                label: "燃料費調整額の単価（円/kWh）を請求書で確認したか",
                note: "毎月変動する。プラスかマイナスかで請求差が大きく変わる。",
              },
              {
                no: "3",
                label: "市場価格調整額が適用されている契約か確認したか",
                note: "市場連動型は変動幅が大きい。固定型と比較検討する価値がある。",
              },
              {
                no: "4",
                label: "再エネ賦課金の単価（年1回4月改定）を把握しているか",
                note: "2025年4月に過去最高水準に改定された。",
              },
              {
                no: "5",
                label: "容量拠出金が請求に含まれているか・単価を把握しているか",
                note: "2024年度以降、段階的に請求額への反映が進んでいる。",
              },
              {
                no: "6",
                label: "補助金（電気・ガス・食料品等価格高騰対策）の適用有無を確認したか",
                note: "縮小・終了のタイミングで見かけ上の急上昇が発生する。",
              },
            ].map((item) => (
              <li key={item.no} className="flex items-start gap-3 rounded-lg border border-sky-100 bg-white p-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {item.no}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-500">{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 上がり幅の見方と注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">上がり幅を見るときの注意点</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>前月比だけでなく前年同月比・複数年比較も行う</li>
            <li>請求総額で判断せず、各項目の単価と使用量を個別に確認する</li>
            <li>補助政策の反映有無を分けて影響額を試算する</li>
            <li>契約更新による単価改定は調整項目と別論点として整理する</li>
            <li>他社事例の値上げ幅をそのまま自社に当てはめない（契約区分・調達方式で差が出る）</li>
          </ul>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金がどのくらい上がるかは、単価改定・燃調費・市場連動・再エネ賦課金・容量拠出金・補助金終了という複数要因の組み合わせで決まります。
            2022〜2025年の実績では、複数の要因が重なった時期に月5万kWhの施設で月40〜75万円規模の影響が生じており、
            <Link href="/business-electricity-price-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              業種別の水準感
            </Link>
            との比較も参考になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            値上げ幅を正確に把握するには、請求項目ごとの内訳確認を前提とした上で、
            <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              契約メニューの比較
            </Link>
            や上記チェックリストの活用が有効です。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="how-much-business-electricity-prices-increase" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "託送料金", "市場連動プラン", "固定プラン"]} />
        </div>

        {/* 関連リンク */}
        <RelatedLinks
          heading="あわせて読みたい記事"
          intro="値上げ幅の確認後は、要因の詳細・制度費目・長期推移・契約見直しへと読み進めると、社内説明と対策立案がしやすくなります。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "上昇要因の全体像を整理。値上げ幅の背景を理解するための基礎ページ。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "毎月変動する燃調費の仕組みと請求への影響を解説。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場連動型契約特有の調整項目。変動幅が大きく、上昇時のリスクを確認できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "年1回4月に改定される制度費目。2025年の過去最高水準の影響を確認できます。",
            },
            {
              href: "/capacity-contribution-cost-impact",
              title: "容量拠出金で電気代はどのくらい上がるのか",
              description: "2024年度以降に本格化した新たな費目の影響額を契約区分別に解説。",
            },
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "電気料金補助金終了の影響",
              description: "補助金縮小・終了タイミングで発生した実質的な値上げ幅を解説。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人電気料金の水準感・相場感",
              description: "業種・規模別の単価目安。自社の料金が妥当か判断する基準に。",
            },
            {
              href: "/compare",
              title: "料金メニューの比較・診断",
              description: "自社条件で固定型と市場連動型の差分を試算できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "値上げ幅の積み重ねで形成された料金水準の推移をデータで確認できます。",
            },
          ]}
        />

        {/* CTA */}
        <ContentCta
          heading="値上げ幅を自社の数字で確認する"
          description="使用量・契約区分・調達方式を入力すると、要因別の影響額と候補条件の比較が可視化されます。チェックリストで確認した項目を入力して試算してみてください。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/articles/price-increase", label: "料金上昇カテゴリを見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
