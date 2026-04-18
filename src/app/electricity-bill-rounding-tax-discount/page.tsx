import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

// --- 定数 ---
const pageTitle =
  "電気料金の端数処理・消費税・割引の見方｜請求書の計算が合わないときの確認ポイント";
const pageDescription =
  "電気料金の端数処理ルール、消費税の課税タイミング、口座振替割引の廃止傾向を解説。請求書と手計算が合わない原因、見積比較時の端数差の見方を法人向けに整理。";

const linkClass = "text-sky-700 underline underline-offset-2 hover:text-sky-900";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 端数処理",
    "電気料金 消費税",
    "電気料金 割引",
    "口座振替割引",
    "請求書 計算 合わない",
    "電気料金 見積比較",
    "法人 電気料金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-bill-rounding-tax-discount",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-bill-rounding-tax-discount",
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

const faq = [
  { question: "電気料金の請求書と自分で計算した金額が合わない理由は何ですか？", answer: "電力会社の端数処理（切り捨て・四捨五入）や、消費税の計算タイミング（税抜で積み上げてから課税するか、各項目に課税するか）の違いが原因になることがあります。数円〜数十円の差は端数処理の違いで正常範囲です。" },
  { question: "口座振替割引は今でも使えますか？", answer: "大手電力会社を中心に口座振替割引（1〜55円/月程度）を廃止・縮小する傾向が続いています。現在の契約が割引対象かどうかは電力会社の料金規定や請求書で確認できます。" },
  { question: "電気料金の消費税はどのタイミングで計算されますか？", answer: "基本的には各費目（基本料金・電力量料金・燃料費調整額など）の合計に対して10%の消費税が課税されます。一部の電力会社では項目ごとに消費税を積み上げる場合もあり、計算方法は電力会社の約款で確認できます。" },
];

// --- Page Component ---
export default function ElectricityBillRoundingTaxDiscountPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気料金の端数処理・消費税・割引の見方｜請求書の計算が合わないときの確認ポイント"
        description="電気料金の端数処理ルール、消費税の課税タイミング、口座振替割引の廃止傾向を解説。請求書と手計算が合わない原因、見積比較時の端数差の見方を法人向けに整理。"
        url="https://simulator.eic-jp.org/electricity-bill-rounding-tax-discount"
        datePublished="2026-04-13"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "電気料金の端数処理・消費税・割引の見方" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className={linkClass}>ホーム</Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link href="/articles/basic" className={linkClass}>基礎から知る</Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-700">端数処理・消費税・割引</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金の端数処理・消費税・割引の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の請求書を手計算で検算すると、数円〜数十円の差が出ることがあります。
          この差の多くは、費目ごとの端数処理ルールや消費税の課税タイミングの違いによるものです。
          本ページでは、端数処理の仕組み・消費税の課税方式・割引制度の現状を整理し、
          見積比較や請求書確認で迷ったときの判断材料を提供します。
        </p>
      </header>

      {/* セクション群 */}
      <div className="mt-6 space-y-6">

        {/* H2: 請求書の金額と手計算が合わない理由 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書の金額と手計算が合わない理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の請求書は複数の費目で構成されており、それぞれに端数処理・消費税・割引の
            適用ルールがあります。以下の4点が主な原因です。
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                端数処理のルールが費目ごとに異なる
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                <Link href="/basic-charge-explained" className={linkClass}>基本料金</Link>・<Link href="/energy-charge-explained" className={linkClass}>電力量料金</Link>・<Link href="/fuel-cost-adjustment" className={linkClass}>燃料費調整額</Link>・<Link href="/renewable-energy-surcharge" className={linkClass}>再エネ賦課金</Link>はそれぞれ個別に計算され、
                各費目の計算結果に対して端数処理（切り捨て・切り上げ）が行われます。
                電卓で合計単価を掛け算しても一致しないのはこのためです。
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                消費税の課税タイミング（内税/外税、項目別/合計後）
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                消費税は税抜合計に対して一括で課税する方式（外税・合計後）が大手電力では一般的ですが、
                一部の新電力では項目別に税込み単価を設定する方式を採用しています。
                計算順序が異なると最終的な請求額に差が出ることがあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                割引が適用されている場合の計算順序
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                口座振替割引や長期契約割引などが適用される場合、割引の適用タイミング（税抜き後か税込み後か）
                によって最終的な支払額が変わります。割引は通常、税抜き合計から控除されます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                電力会社ごとにルールが微妙に異なる
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                端数処理の方向（切り捨て・切り上げ・四捨五入）や適用タイミングは、
                各電力会社の約款で定められており、会社間で統一されていません。
                複数社の見積を比較する際に同条件での再計算が難しい原因のひとつです。
              </p>
            </div>
          </div>
        </section>

        {/* H2: 端数処理のルール */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">端数処理のルール</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            費目別の一般的な端数処理ルールを整理します。多くの場合「円未満切り捨て」が採用されていますが、
            約款によっては切り上げとなる場合もあるため、詳細は各電力会社の約款で確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">費目</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">一般的な端数処理</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">例（16.47円/kWh×50,000kWh）</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円未満切り捨て</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">727,500円→727,500円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">力率割引適用後に端数処理</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円未満切り捨て</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">823,500円→823,500円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">時間帯別の場合は帯ごとに計算</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円未満切り捨て</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量×調整単価の計算後</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">マイナス時も同じルール</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円未満切り捨て</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">174,500円→174,500円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">年度ごとの単価で計算</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><Link href="/market-price-adjustment" className={linkClass}>市場価格調整額</Link></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円未満切り捨て</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">計算方式は電力会社による</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">30分値連動の場合は複雑</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">合計（税抜）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">各項目の合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">各項目の端数処理後の合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">項目ごとの端数処理が先</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">消費税</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円未満切り捨て</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">税抜合計×10%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">合計に対して課税</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※端数処理ルールは電力会社の約款で定められており、切り上げの場合もあります。
          </p>
        </section>

        {/* H2: 消費税の課税タイミング */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">消費税の課税タイミング</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            消費税の適用方式は電力会社によって異なります。手計算と請求書の金額が合わない場合、
            どの方式が採用されているかを確認することが第一歩です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">パターン</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">説明</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">計算例（税抜合計180万円の場合）</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">採用が多い電力会社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">外税方式（合計後課税）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">税抜合計に10%を加算</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">180万円×1.1＝198万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">大手電力に多い</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">内税方式</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">各項目に税込み単価を適用</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">項目ごとに税込み→合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">一部の新電力</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">項目別課税</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">費目ごとに消費税を計算→合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">項目ごとの端数差が出やすい</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">まれ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: 割引制度の現状 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">割引制度の現状</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金に適用される割引制度は種類が限られており、近年は廃止・縮小の動きが続いています。
            法人契約で確認すべき主な割引を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">割引の種類</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">内容</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">割引額目安</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">現在の状況</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">口座振替割引</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">口座振替で支払うと適用</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">月55〜110円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">大手電力で廃止傾向。東京電力EPは2024年に廃止</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">早期支払割引</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">期日前支払いで適用</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">月額の0.5〜1%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">ごく一部の電力会社のみ</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">まとめ割引</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電気＋ガスのセット</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">月100〜300円</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">大手電力のセットプランで継続</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">長期契約割引</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">2年以上の契約で適用</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">単価0.5〜1円/kWh引き</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">一部の新電力。違約金とセット</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※割引の適用条件・金額は電力会社・契約プランによって異なります。最新情報は各社に直接確認してください。
          </p>
        </section>

        {/* H2: 見積比較で端数差が出る原因 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で端数差が出る原因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数の電力会社から見積を取り、同条件のはずなのに総額が微妙に異なるケースがあります。
            端数差が生じる主な原因は次の5点です。
          </p>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">1</span>
              <span>
                電力量料金の単価の小数点以下の桁数が異なる（2桁 vs 4桁）
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">2</span>
              <span>
                燃調費の上限設定の有無で見え方が違う
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">3</span>
              <span>
                消費税の計算順序（合計後 vs 項目別）
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">4</span>
              <span>
                基本料金の力率割引適用タイミング
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">5</span>
              <span>
                見積の前提条件（使用量・契約電力）の微妙な差
              </span>
            </li>
          </ol>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            見積を比較する際は端数の合わない理由を探るよりも、前提条件（使用量・契約電力・燃調費上限の有無）を
            統一したうえで、年間総額ベースで比較することを優先してください。
          </p>
        </section>

        {/* H2: 端数差を気にすべき場面・気にしなくてよい場面 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            端数差を気にすべき場面・気にしなくてよい場面
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            端数差はすべての場面で問題になるわけではありません。状況に応じた対応方針を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">場面</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">端数差の影響</th>
                  <th className="border border-slate-300 px-3 py-2 text-left font-semibold text-slate-900">対応</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">月額100万円以上の高圧契約</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">端数差は月数百円〜数千円。総額の差に比べて小さい</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">単価差・条件差を優先して比較</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">月額10万円以下の低圧契約</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">端数差が月額の数%になることも</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">年間合計で比較する方が正確</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">3社以上の見積比較</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">端数処理の違いで順位が変わることはまれ</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">年間総額ベースで比較</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">請求書の検算</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">1円〜数十円の差は端数処理が原因</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">約款の端数処理ルールを確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                電気料金の端数処理は費目ごとに行われるため、合計を一括で計算した結果と一致しないことがあります。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                消費税は税抜合計に一括課税する「外税方式（合計後）」が大手電力では主流ですが、
                方式は電力会社によって異なります。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                口座振替割引など従来の割引制度は廃止傾向にあり、割引に依存した比較は注意が必要です。
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              <span>
                見積比較では端数の差よりも、前提条件の統一と年間総額ベースでの比較を優先することが実務上有効です。
              </span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力料金の計算方法・消費税課税に関するデータ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
          ]}
          publishedAt="2026-04-13"
        />
      </div>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書の読み方",
              description: "請求書の各項目の意味と確認ポイントを解説。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "電気料金の見積書の読み方",
              description: "見積比較で見るべき項目と注意点を整理。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳",
              description: "基本料金・電力量料金・燃調費・再エネ賦課金の構成を解説。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人向け電気料金の相場・水準",
              description: "契約区分・業種別の料金水準を整理。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "現在の契約と他メニューを比較して見直しポイントを確認。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "見積比較の前提としてプランの選択軸を整理できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "単価の推移実態をデータで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="料金上昇リスクを数値で把握する"
          description="端数や消費税の計算方式だけでなく、燃料費調整額の変動や市場リスクも含めた総合的な料金上昇リスクをシミュレーターで確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/basic", label: "基礎から知るの記事一覧" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
