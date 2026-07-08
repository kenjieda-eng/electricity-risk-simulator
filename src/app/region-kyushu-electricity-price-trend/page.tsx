import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import ConsultCta from "../../components/ConsultCta";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";

// =============================================================
// B-83 エリア別 法人電気料金 推移深掘りシリーズ（九州）
//  - 本ページ = 「1エリア（九州電力エリア）の推移・単価水準の縦深掘り」
//  - 全国10エリア横断比較の総論は /electricity-price-trend-by-area（親）
//  - エリア総合（市況・新電力動向）は /region-kyushu-business-electricity
//  - 全国・月次・契約区分別の推移データは /business-electricity-retrospective
//  データ規律: 単価の具体数値は公的統計の概括のみ。予測値の断定はしない。
// =============================================================

const pageTitle =
  "九州エリアの法人電気料金 推移と単価水準｜特高・高圧・低圧の位置づけと見通しの考え方";
const pageDescription =
  "九州電力エリア（九州7県）の法人向け電気料金の推移と単価水準を、公的統計の概括をもとに整理。特別高圧・高圧・低圧の位置づけ、玄海・川内の原子力4基稼働と全国最大級の太陽光導入という電源構成が推移に与える構造、賦課金など全国共通の上昇要因、見通しの考え方を中立的に解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/region-kyushu-electricity-price-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "九州 法人 電気料金 推移",
    "九州電力エリア 単価 水準",
    "九州 高圧 電気代 推移",
    "九電 法人 料金 推移",
    "九州 特別高圧 単価",
    "九州 電気料金 見通し",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

// --- 全国平均の年次単価（円/kWh・再エネ賦課金を含まない年平均） ---
// 出典: 資源エネルギー庁「電力調査統計」から整理。エリア別ではなく全国平均のトレンド基準。
const nationalTrend = [
  { year: "2019", sp: "12.08", hi: "15.58", ll: "22.10", lp: "26.26", note: "コロナ前の安定期" },
  { year: "2022", sp: "17.14", hi: "20.58", ll: "26.84", lp: "30.34", note: "燃料高騰で水準が切り上がる" },
  { year: "2025", sp: "17.41", hi: "21.15", ll: "26.89", lp: "30.19", note: "急騰前には戻らず高止まり" },
];

// --- 単価を動かす構造要因（中立整理） ---
const structuralFactors = [
  {
    factor: "燃料市況（LNG・石炭・原油）",
    detail:
      "九州電力エリアは原子力・太陽光の比率が相対的に高く、LNG火力への依存が東京エリアほど高くないため、燃料市況が単価に与える影響は相対的に抑えられやすい構造です。ただし火力がゼロではなく、市況の影響を受けないわけではありません。",
    direction: "高騰局面でも実質単価の上振れ幅は、燃料依存の高いエリアより小さくなりやすい。",
  },
  {
    factor: "為替（円安・円高）",
    detail:
      "輸入燃料分は円安で調達コストが押し上げられますが、燃料依存度が相対的に低いぶん、為替変動への感応度も相対的に小さめに表れやすい傾向があります。",
    direction: "円安局面では燃調費のプラス幅が生じるが、燃料依存の高いエリアほど大きくなりにくい。",
  },
  {
    factor: "電源構成（原子力・太陽光・火力）",
    detail:
      "玄海・川内の原子力4基稼働と全国最大級の太陽光導入により、燃料費に依存しない電源の比率が高いのが九州の特徴です。原子力の稼働状況は燃料費の安定度を左右します。",
    direction: "原子力稼働時は燃料費が安定しやすい。定期検査・停止時は火力・市場調達が増え振れやすい。",
  },
  {
    factor: "制度コスト（賦課金・容量拠出金・託送）",
    detail:
      "再エネ賦課金・容量拠出金・託送料金は全国共通の制度コストで、燃料市況とは独立に単価へ上乗せされます。九州では将来の系統増強（連系線・蓄電池）コストが託送に反映される可能性も論点です。",
    direction: "近年は上昇・固定化の方向。燃料が落ち着いても下がりにくい。",
  },
];

// --- 契約区分別の推移の特徴 ---
const voltageTrend = [
  {
    type: "特別高圧（2万V以上）",
    feature: "大規模工場・半導体・データセンター等。市場・燃料市況の影響を受けやすいが、九州は原子力・再エネ比率が高く、上昇局面の振れ幅が相対的に抑えられやすい。",
  },
  {
    type: "高圧（6kV）",
    feature: "中規模ビル・工場の中心区分。燃調費・賦課金・容量拠出金の合算で実質単価が押し上げられているが、単価水準そのものは全国比で割安グループ。",
  },
  {
    type: "低圧電力（動力）",
    feature: "小規模事業所・店舗。基本料金と従量のバランスで、契約電力の管理余地が残る。",
  },
  {
    type: "低圧電灯",
    feature: "小口・事務所照明用。制度コストの比率が相対的に高く、賦課金改定の影響が見えやすい。",
  },
];

// --- 代表シナリオ（契約見直しによる削減の試算例・前提明記） ---
//  年間削減(万円) = 使用量(万kWh) × 改善単価(円/kWh)、5年累計 = 年間削減 × 5
//  ※将来の単価予測ではなく、契約・調達の最適化で得られうる削減の「例示」。
const savingsScenarios = [
  {
    label: "小規模高圧オフィス（九州・年間40万kWh）",
    usageManKwh: 40,
    improvementYen: 1.5,
    annualSavingMan: 60,
    fiveYearMan: 300,
    note: "複数社の相見積もり・燃調キャップ付プランへの切替で単価改善を図る例。",
  },
  {
    label: "中規模工場（高圧・年間250万kWh）",
    usageManKwh: 250,
    improvementYen: 1.2,
    annualSavingMan: 300,
    fiveYearMan: 1500,
    note: "デマンド管理と調達見直しを組み合わせた例。設備投資は別途。",
  },
  {
    label: "大規模需要（高圧〜特別高圧・年間1,100万kWh）",
    usageManKwh: 1100,
    improvementYen: 1.0,
    annualSavingMan: 1100,
    fiveYearMan: 5500,
    note: "特高・大口の入札・太陽光自家消費を含む中長期の最適化を織り込んだ例。",
  },
];

// --- チェックリスト ---
const checkList = [
  "過去3〜5年の推移で、自社の実質単価（燃調・賦課金・容量拠出金込み）がどう動いたかを把握しているか",
  "原子力稼働・太陽光出力制御など九州特有の需給要因が、自社の調達や余剰電力計画に与える影響を把握しているか",
  "全国平均の推移と、九州エリアの相対位置（割安グループ）を分けて理解しているか",
  "固定型と市場連動型のリスク配分を、昼間の市場価格が下がりやすい九州の市場特性を踏まえて再点検しているか",
  "賦課金・容量拠出金・将来の系統増強コストなど、燃料が落ち着いても下がりにくい固定的上昇要因を別枠で把握しているか",
];

const faqItems = [
  {
    question: "九州エリアの法人電気料金は、推移として高いのですか？",
    answer:
      "電力・ガス取引監視等委員会や資源エネルギー庁の公表統計から整理すると、九州電力エリアの高圧単価は全国10エリアの中で割安グループに位置します。関西エリアと並んで全国でも低い水準で推移してきました。玄海・川内の原子力4基が稼働し、全国最大級の太陽光導入により燃料費に依存しない電源の比率が高いため、燃料高騰局面でも実質単価の上振れ幅が相対的に抑えられやすい特徴があります。数値は時点で変わるため、最新は各公式でご確認ください。",
  },
  {
    question: "2019〜2025年で、九州エリアの単価はどのように推移しましたか？",
    answer:
      "全国平均でみると、2022年の燃料高騰で特別高圧・高圧を中心に水準が大きく切り上がり、2023〜2025年は急騰前の2019〜2021年水準には戻っていません。九州エリアもこの全国的な高止まりの傾向を共有していますが、原子力・太陽光の比率が高い電源構成から、燃料市況の変動に対する感応度が相対的に低く、上振れは抑えられやすい推移となっています。本ページの数値は公的統計の概括であり、実際の請求単価は契約・使用量・時期で異なります。",
  },
  {
    question: "九州エリアの単価が動く主な要因は何ですか？",
    answer:
      "燃料市況（LNG・石炭・原油）・為替・電源構成・制度コスト（再エネ賦課金・容量拠出金・託送料金）の4つが主因です。短期の変動は燃料市況と為替に連動しますが、九州は原子力・太陽光の比率が高くLNG依存が東京エリアほど高くないため、燃料要因の効き方は相対的に小さくなりやすい構造です。一方で制度コストは全国共通で、燃料が落ち着いても下がりにくい固定的な上昇要因として残ります。",
  },
  {
    question: "再エネ賦課金は推移にどう効いていますか？",
    answer:
      "再エネ賦課金は全国一律で、2026年度は4.18円/kWhです。近年は上昇基調で、燃料市況とは独立に単価へ上乗せされます。九州は再生可能エネルギーの発電量が多いエリアですが、賦課金の単価そのものは全国一律で決まるため、九州だけ低くなるわけではありません。賦課金や容量拠出金といった制度コストは、燃料価格が下がった局面でも実質単価の下支え要因として残るため、推移を読む際は燃料要因と制度要因を分けて把握することが重要です。",
  },
  {
    question: "九州エリアの今後の単価見通しはどう考えればよいですか？",
    answer:
      "将来の単価を断定することはできません。見通しは、燃料市況（LNG・原油）・為替・電源構成の変化・制度コストという構造要因の組み合わせで考えるのが中立的です。九州は原子力稼働と太陽光導入が燃料費の安定に寄与しますが、原子力は定期検査・規制対応で稼働が変動し、賦課金・容量拠出金などの制度コストは下がりにくいという整理になります。最新の告示・市況・稼働状況は各公式でご確認ください。",
  },
  {
    question: "太陽光の大量導入や出力制御は、料金や市場価格にどう関係しますか？",
    answer:
      "九州エリアは日照条件に恵まれ、太陽光の導入量が国内最大級です。晴天の昼間には太陽光が需要の大半を賄う場面もあり、需給バランス維持のための出力制御（抑制）が全国で最も発生しやすいエリアです。この構造から、JEPX（日本卸電力取引所）の昼間のエリアプライスが下がりやすく、全国最安水準になる場面もあります。市場連動型プランの仕入れコストに影響しますが、具体的な価格差は時期・時間帯で大きく変動するため、本ページでは傾向・構造の説明にとどめます。",
  },
  {
    question: "全国横断の比較や、他エリアとの違いはどこで確認できますか？",
    answer:
      "10エリアを横並びで比較する総論は「エリア別（電力会社別）の電気料金推移比較」を、九州エリア全体の市況・新電力動向は「九州電力エリアの法人電気代事情」をご覧ください。本ページはその中で、九州エリアの推移と単価水準に絞って深掘りする位置づけです。全国・月次・契約区分別の推移データは月次振り返りシリーズで確認できます。",
  },
  {
    question: "本ページの数値は契約先の選定に使えますか？",
    answer:
      "本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。またエリア間の優劣を断定したり、拠点移転を推奨するものでもありません。掲載の単価は公的統計の概括・参考水準であり、実際の契約判断は自社の使用実態に基づく見積もり・シミュレーションで行ってください。",
  },
];

const sourcesItems = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/", description: "平均販売単価・小売市場の統計" },
  { name: "資源エネルギー庁（電力調査統計）", url: "https://www.enecho.meti.go.jp", description: "電力量・単価の年次統計" },
  { name: "九州電力", url: "https://www.kyuden.co.jp/", description: "九州電力エリアの法人向け料金プラン情報" },
  { name: "JEPX（日本卸電力取引所）", url: "https://www.jepx.jp", description: "エリアプライスの傾向（市場連動プランの仕入れ指標）" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];

export default function RegionKyushuElectricityPriceTrendPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-08"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "地域別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-region" },
          { name: "九州エリアの法人電気料金 推移と単価水準" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">九州エリアの推移と単価水準</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-indigo-700">REGION ／ 推移・単価水準の深掘り</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            九州エリアの法人電気料金 推移と単価水準
          </h1>
          <p className="mt-1 text-base font-medium text-indigo-800">特別高圧・高圧・低圧の位置づけと見通しの考え方</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            九州電力エリア（九州7県）の法人向け電気料金は、全国的な高止まりの流れを共有しつつ、玄海・川内の原子力4基稼働と全国最大級の太陽光導入という電源構成から、燃料市況の影響を相対的に受けにくい推移をたどってきました。
            本ページでは、公的統計の概括をもとに、九州エリアの単価水準がどの位置にあるのか、推移を動かす構造要因は何か、そして将来を断定しない「見通しの考え方」を中立的に整理します。
          </p>
        </header>

        {/* 読み分け案内（意図分離） */}
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
          📌 <span className="font-semibold">このページの読み分け</span>：
          全国10エリアを横並びで比較する総論は{" "}
          <Link href="/electricity-price-trend-by-area" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別（電力会社別）の電気料金推移比較</Link>、
          九州エリア全体の市況・新電力動向は{" "}
          <Link href="/region-kyushu-business-electricity" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">九州電力エリアの法人電気代事情</Link>、
          全国・月次・契約区分別の推移データは{" "}
          <Link href="/business-electricity-retrospective" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気料金の月次振り返り</Link>
          をご覧ください。<span className="font-semibold">本ページは、九州エリアの「推移・単価水準」に特化</span>しています。
        </div>

        <AuthorBadge publishedAt="2026-07-08" updatedAt="2026-07-08" />
        <TableOfContents />

        <div className="mt-6 space-y-6">
          {/* H2-1 全国推移と九州の位置づけ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              全国の法人電気料金推移（2019〜2025）と九州エリアの位置づけ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず全国平均の年次単価で、推移の大きな流れを確認します。下表は再エネ賦課金を含まない年平均単価（円/kWh）で、2022年を境に水準が切り上がり、
              2025年時点でも2019年水準には戻っていないことが読み取れます。九州エリアも、この全国的な高止まりの傾向を共有していますが、水準そのものは全国比で割安グループに位置します。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年（全国平均）</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">特別高圧</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">高圧</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">低圧電灯</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">低圧電力</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">主な局面</th>
                  </tr>
                </thead>
                <tbody>
                  {nationalTrend.map((row, i) => (
                    <tr key={row.year} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.year}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.sp}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.hi}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.ll}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.lp}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              出典: 資源エネルギー庁「電力調査統計」から整理（全国平均・円/kWh・再エネ賦課金を含まない年平均値）。年次の詳細は{" "}
              <Link href="/electricity-price-trend-2019-2025" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">2019〜2025年の年次データ</Link>
              を参照。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-2 単価水準の位置 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州エリアの単価水準はどの位置にあるか（公的統計の概括）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力・ガス取引監視等委員会や資源エネルギー庁の公表統計から整理すると、九州電力エリアの高圧単価は全国10エリアの中で<span className="font-semibold">割安グループ</span>に位置します。
              関西エリアと並んで全国でも低い水準で推移してきたのが特徴です。これは玄海・川内の原子力4基稼働と全国最大級の太陽光導入という電源構成が背景にありますが、
              あくまで統計上の相対位置を概括したものであり、エリア間の優劣を断定するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">相対位置</p>
                <p className="mt-1 text-sm text-slate-700">高圧単価は全国で割安グループ。参考水準として概ね14円/kWh前後で語られることが多い区分。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">上振れの起きにくさ</p>
                <p className="mt-1 text-sm text-slate-700">原子力・太陽光比率が高く、LNG依存が東京ほど高くない。燃料高騰局面でも実質単価の上振れ幅が相対的に小さくなりやすい。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">市場の特徴</p>
                <p className="mt-1 text-sm text-slate-700">太陽光大量導入で昼間のJEPXエリアプライスが下がりやすく、全国最安水準になる場面がある。</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              出典: 電力・ガス取引監視等委員会・資源エネルギー庁等の公表統計から整理（2026年7月時点）。参考水準であり、実際の請求単価は契約内容・使用時間帯により異なります。最新は各公式でご確認ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ エリア間の「安い／高い」は統計上の相対位置の概括であり、拠点移転等を推奨するものではありません。
            </p>
          </section>

          {/* H2-3 構造要因 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州エリアで単価を動かす構造要因（燃料市況・為替・電源構成・制度）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価の推移は、偶然ではなく構造的な要因の組み合わせで動きます。九州エリアで特に効き方が特徴的なのは、原子力と太陽光の比率が高い電源構成による「燃料市況への感応度の低さ」です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">要因</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">九州エリアでの効き方</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">推移への影響</th>
                  </tr>
                </thead>
                <tbody>
                  {structuralFactors.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.factor}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.detail}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.direction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整額の仕組みは{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額とは</Link>
              、その単価推移は{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整単価の推移</Link>
              で詳しく解説しています。
            </p>
          </section>

          {/* H2-4 電源構成と九州固有の事情 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電源構成と九州エリア固有の事情（原子力4基稼働・太陽光大量導入）
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">原子力4基稼働による燃料費依存の抑制</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  九州電力エリアは、玄海3・4号機、川内1・2号機の計4基の原子力が稼働しており、燃料費に依存しないベースロード電源として機能しています。
                  これが、燃料高騰局面でも九州エリアの実質単価が相対的に抑えられやすい構造的理由の一つです。
                  稼働状況は定期検査・規制対応で時点により変わるため、最新は各公式でご確認ください。本ページでは特定の稼働見通しを断定しません。
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">全国最大級の太陽光導入と出力制御（2026年時点）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  九州は日照条件に恵まれ、太陽光の導入量が国内最大級です。晴天の昼間には太陽光が需要の大半を賄う場面もあり、需給バランス維持のための出力制御（抑制）が全国で最も発生しやすいエリアです。
                  この再エネの豊富さは、昼間のJEPXエリアプライスを押し下げ、燃料費に依存しない電源比率を高める方向に働きます。一方で系統制約という課題も抱えます。
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">火力（LNG・石炭）依存と連系・系統増強</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  火力の中心はLNG・石炭ですが、原子力・太陽光の比率が高いぶん、LNGへの依存度は東京エリアほど高くありません。九州は関門連系線を通じて本州と電力を融通しています。
                  出力制御の解消に向けた連系線増強や大型蓄電池の整備コストが、将来の託送料金に反映される可能性は中長期の論点として注視が必要です。
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              エリアの電源構成の比較は{" "}
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別電源構成の比較</Link>
              、エリア全体の市況・新電力動向は{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">九州電力エリアの法人電気代事情</Link>
              をあわせてご確認ください。
            </p>
          </section>

          {/* H2-5 契約区分別 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約区分別（特別高圧・高圧・低圧）の推移の特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同じエリアでも、契約区分によって推移の表れ方は異なります。上昇局面での変動幅は特別高圧・高圧で大きく、低圧は制度コストの比率が相対的に高いという違いがあります。九州はいずれの区分でも全国比で割安グループの水準です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">契約区分</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">推移の特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {voltageTrend.map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800 whitespace-nowrap">{row.type}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区分ごとの料金構造の違いは{" "}
              <Link href="/electricity-price-by-voltage-type" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電圧区分別の料金構造</Link>
              、区分別の全国推移は月次振り返りの{" "}
              <Link href="/business-electricity-retrospective/high-voltage-2019-2025" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧 2019〜2025年推移</Link>
              ・
              <Link href="/business-electricity-retrospective/special-high-voltage-2019-2025" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧 2019〜2025年推移</Link>
              で確認できます。
            </p>
          </section>

          {/* H2-6 JEPX */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              JEPX 九州エリアプライスの傾向（構造の説明）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを検討する場合、JEPX（日本卸電力取引所）の九州エリアプライスが仕入れコストの目安になります。
              九州エリアは太陽光の大量導入により、晴天の昼間は太陽光の発電量が需要を押し上回り、エリアプライスが下がりやすく全国最安水準になる場面もあります。
              一方で、日射が弱まる夕方以降や太陽光が使えない時間帯は、需給の状況次第で価格が振れることもあります。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              なお、具体的な価格差はその時々の需給・時間帯で大きく変動するため、本ページでは傾向・構造の説明にとどめ、特定の価格水準を断定しません。
              市場連動型の詳細は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              をご確認ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-7 制度コスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              賦課金・容量拠出金など全国共通の上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              推移を読むうえで、燃料市況と切り分けて把握したいのが制度コストです。これらは全国共通で、九州エリアにも同様に上乗せされます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <span className="font-semibold">再エネ賦課金</span>：全国一律。2026年度は4.18円/kWhで、近年は上昇基調。詳細は{" "}
                <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金の解説</Link>
                。
              </li>
              <li>
                <span className="font-semibold">容量拠出金</span>：2024年度から本格化した比較的新しい制度コスト。高圧・特別高圧の単価に影響。詳細は{" "}
                <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の影響</Link>
                。
              </li>
              <li>
                <span className="font-semibold">託送料金</span>：送配電網の維持・投資に対応する費用で、下がりにくい構造的な上昇圧力。九州では将来の系統増強コストが上乗せされる可能性も論点。
              </li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              これらは燃料価格が落ち着いた局面でも実質単価の下支え要因として残るため、「燃料が下がったのに思ったほど安くならない」という体感の背景になります。九州のように燃料要因が相対的に小さいエリアでは、制度コストの比重が体感として見えやすい面もあります。
            </p>
          </section>

          {/* H2-8 見通しの考え方 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              今後の単価の「見通しの考え方」（予測ではなく構造で捉える）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              将来の単価を断定することはできません。ここでは、九州エリアの推移を「予測」ではなく「構造要因の組み合わせ」で捉えるための視点を整理します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりうる方向に働く要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・LNG・原油など燃料市況の落ち着き</li>
                  <li>・円高方向への為替変動</li>
                  <li>・原子力の安定稼働と太陽光など燃料費に依存しない電源の活用</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりにくくする要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・再エネ賦課金・容量拠出金など制度コストの上昇・固定化</li>
                  <li>・託送料金・将来の系統増強投資による上昇圧力</li>
                  <li>・原子力の定期検査・停止時に増える火力・市場調達コスト</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              結論としては、九州は原子力・太陽光の比率が高く燃料要因の振れが相対的に小さい一方、制度コストは下がりにくく、急落は見込みにくいという整理になります。
              高止まりの前提で契約・調達を点検する考え方は{" "}
              <Link href="/why-electricity-prices-have-not-returned" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金が元に戻らない理由</Link>
              、今後の局面整理は{" "}
              <Link href="/how-long-business-electricity-price-surge-lasts" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高騰はいつまで続くか</Link>
              も参照してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 将来の単価・時期を断定するものではありません。最新の市況・告示・稼働状況は各公式でご確認ください。
            </p>
          </section>

          {/* H2-9 相談CTA（ConsultCta） */}
          <ConsultCta
            from="region-kyushu-price-trend"
            heading="九州エリアの電気料金、推移を踏まえて見直せるか無料で相談しませんか？"
            description="一般社団法人エネルギー情報センター（中立・非営利）。推移と自社の使用実態を照らし合わせ、契約・調達の見直し余地を中立的に整理します。初回相談は無料、営業電話はいたしません。"
          />

          {/* H2-10 代表シナリオ */}
          <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ：契約見直しによる削減の試算例（九州エリア・高圧水準ベース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下は、九州エリアの一般的な高圧需要を想定した「契約見直しで得られうる削減」の試算例です。将来の単価を予測するものではなく、
              相見積もり・プラン最適化・デマンド管理などで実質単価を改善できた場合の年間・5年累計の目安を示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              前提: 年間削減額（万円）＝ 使用量（万kWh）× 改善単価（円/kWh）、5年累計 ＝ 年間削減額 × 5年。改善単価・使用量は例示です。
            </p>
            <div className="mt-4 space-y-3">
              {savingsScenarios.map((s) => (
                <div key={s.label} className="rounded-xl border border-indigo-100 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{s.label}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    改善単価 <span className="font-semibold">{s.improvementYen}円/kWh</span> と仮定した場合：
                    年間 <span className="font-semibold text-indigo-800">▲{s.annualSavingMan}万円</span>
                    <span className="text-slate-500">（{s.usageManKwh}万kWh × {s.improvementYen}円/kWh）</span>、
                    <span className="font-semibold text-indigo-800">5年累計 ▲{s.annualSavingMan}万円 × 5年 ＝ ▲{s.fiveYearMan}万円</span>。
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              自社の使用量で試算するには{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              、プラン比較は{" "}
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較診断</Link>
              をご活用ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 試算は例示であり、削減を保証するものではありません。実際の効果は契約条件・使用実態により異なります。
            </p>
          </section>

          {/* H2-11 チェックリスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              推移を踏まえて九州エリアの法人が確認したい5項目
            </h2>
            <ol className="mt-4 space-y-3">
              {checkList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このページのまとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
              <li>・九州エリアの高圧単価は全国で割安グループ。原子力4基＋太陽光大量導入で燃料高騰局面の上振れが抑えられやすい構造。</li>
              <li>・全国平均は2022年に水準が切り上がり、2025年も2019年水準には戻っていない（九州も高止まりの傾向は共有）。</li>
              <li>・推移は燃料市況・為替・電源構成・制度コストの組み合わせで動く。九州は燃料要因の効き方が相対的に小さい。</li>
              <li>・賦課金（2026年度4.18円/kWh）・容量拠出金・将来の系統増強コストなど制度コストは下がりにくい。</li>
              <li>・将来は断定せず、構造要因で見通しを考え、契約・調達の点検を先に行うのが現実的。</li>
            </ul>
          </section>
        </div>

        {/* FAQ + 出典 */}
        <div className="mt-8">
          <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-07-08" />
        </div>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            intro="推移の背景・全国比較・エリア総合をあわせて確認すると、見直し判断に接続しやすくなります。"
            links={[
              { href: "/electricity-price-trend-by-area", title: "エリア別（電力会社別）の電気料金推移比較", description: "全国10エリアの単価水準を横並びで比較する総論（本シリーズの親ページ）。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州エリア全体の市況・料金改定・新電力動向・太陽光出力制御を解説（エリア総合）。" },
              { href: "/kyuden-corporate-electricity-guide", title: "九州電力（きゅうでん）の法人向けプラン解説", description: "エリア市況に対し、特定企業のプラン体系・原発4基稼働と太陽光導入量を中立的に解説。" },
              { href: "/business-electricity-price-trend-10-years", title: "法人電気料金の10年推移", description: "長期データで構造変化を俯瞰できるデータ系ハブ。" },
              { href: "/electricity-price-trend-2019-2025", title: "2019〜2025年の年次データと構造要因", description: "急騰と高止まりを年次単価で整理した推移の基礎。" },
              { href: "/electricity-price-by-voltage-type", title: "電圧区分別の料金構造", description: "特別高圧・高圧・低圧の価格構造と推移の違いを比較。" },
              { href: "/business-electricity-retrospective/high-voltage-2019-2025", title: "高圧電力 2019〜2025年 料金推移", description: "全国・高圧の推移を年次で確認できる月次振り返りデータ。" },
              { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", title: "特別高圧 2019〜2025年 料金推移", description: "全国・特別高圧の推移を年次で確認できるデータ。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "燃調費の仕組みと法人請求への影響を解説。" },
              { href: "/fuel-cost-adjustment-history", title: "燃料費調整単価の推移", description: "燃調単価の年次変動と単価への影響を確認できる。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "全国一律の賦課金（2026年度4.18円/kWh）の仕組みを解説。" },
              { href: "/capacity-contribution-cost-impact", title: "容量拠出金の影響", description: "高圧・特別高圧に効く新しい制度コストを解説。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "JEPX連動プランの仕組みと価格変動リスクを整理。" },
              { href: "/region-kansai-electricity-price-trend", title: "関西エリアの推移と単価水準", description: "原発比率が高く割安グループの関西エリアの推移を深掘り。" },
              { href: "/region-chugoku-electricity-price-trend", title: "中国エリアの推移と単価水準", description: "石炭火力が中心の中国エリアの推移と単価水準を深掘り。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代見直しの基本ポイント", description: "業種・エリアを問わない契約見直しの基本フレーム。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="九州エリアの推移を踏まえて、自社の電気料金を点検する"
            description="全国的な高止まりと九州エリアの原子力・太陽光比率の高い電源構成を前提に、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニュー比較診断へ" },
            ]}
          />
        </div>
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
