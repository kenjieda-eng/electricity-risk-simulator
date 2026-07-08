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
// B-83 エリア別 法人電気料金 推移深掘りシリーズ（東北）
//  - 本ページ = 「1エリア（東北電力エリア）の推移・単価水準の縦深掘り」
//  - 全国10エリア横断比較の総論は /electricity-price-trend-by-area（親）
//  - エリア総合（市況・新電力動向）は /region-tohoku-business-electricity
//  - 全国・月次・契約区分別の推移データは /business-electricity-retrospective
//  データ規律: 単価の具体数値は公的統計の概括のみ。予測値の断定はしない。
// =============================================================

const pageTitle =
  "東北エリアの法人電気料金 推移と単価水準｜特高・高圧・低圧の位置づけと見通しの考え方";
const pageDescription =
  "東北電力エリア（東北6県＋新潟県）の法人向け電気料金の推移と単価水準を、公的統計の概括をもとに整理。特別高圧・高圧・低圧の位置づけ、女川原発の再稼働や再エネ比率の高さが推移に与える構造、賦課金など全国共通の上昇要因、見通しの考え方を中立的に解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/region-tohoku-electricity-price-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "東北 法人 電気料金 推移",
    "東北電力エリア 単価 水準",
    "東北 高圧 電気代 推移",
    "東北電力 法人 料金 推移",
    "東北 特別高圧 単価",
    "東北 電気料金 見通し",
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
      "東北エリアも火力（LNG・石炭等）を電源構成に含むため、国際燃料価格の変動は燃料費調整額を通じて単価に反映されます。ただし女川原発の再稼働や比較的豊富な水力・再エネが、燃料市況への感応度を緩和する方向にも働きます。",
    direction: "上昇・下降の両方向に振れる。燃料費に依存しない電源の比率が感応度を左右する。",
  },
  {
    factor: "為替（円安・円高）",
    detail: "火力燃料は輸入依存のため、円安は調達コストを押し上げ、円高は緩和方向に働きます。",
    direction: "円安局面では燃調費のプラス幅が拡大しやすい。",
  },
  {
    factor: "電源構成（原子力・再エネ・火力）",
    detail:
      "東北エリアは女川原発の再稼働に加え、風力・地熱・水力など再エネのポテンシャルが大きいエリアです。燃料費に依存しない電源の比率が高いほど、燃料市況の直接的な影響は相対的に和らぎます。",
    direction: "構造は中期的にゆっくり変化。原発稼働・再エネ拡大は燃料費の安定度に寄与し得る。",
  },
  {
    factor: "制度コスト（賦課金・容量拠出金・託送）",
    detail:
      "再エネ賦課金・容量拠出金・託送料金は全国共通の制度コストで、燃料市況とは独立に単価へ上乗せされます。",
    direction: "近年は上昇・固定化の方向。燃料が落ち着いても下がりにくい。",
  },
];

// --- 契約区分別の推移の特徴 ---
const voltageTrend = [
  {
    type: "特別高圧（2万V以上）",
    feature: "大規模工場・データセンター等。市場・燃料市況の影響を受けやすく、上昇局面での変動幅が相対的に大きい。",
  },
  {
    type: "高圧（6kV）",
    feature: "中規模ビル・工場の中心区分。燃調費・賦課金・容量拠出金の合算で実質単価が押し上げられている。",
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
    label: "小規模高圧オフィス（東北・年間35万kWh）",
    usageManKwh: 35,
    improvementYen: 1.6,
    annualSavingMan: 56,
    fiveYearMan: 280,
    note: "複数社の相見積もり・燃調キャップ付プランへの切替で単価改善を図る例。",
  },
  {
    label: "中規模工場（高圧・年間220万kWh）",
    usageManKwh: 220,
    improvementYen: 1.4,
    annualSavingMan: 308,
    fiveYearMan: 1540,
    note: "デマンド管理と調達見直しを組み合わせた例。設備投資は別途。",
  },
  {
    label: "大規模需要（高圧〜特別高圧・年間1,000万kWh）",
    usageManKwh: 1000,
    improvementYen: 1.2,
    annualSavingMan: 1200,
    fiveYearMan: 6000,
    note: "特高・大口の入札・自家消費を含む中長期の最適化を織り込んだ例。",
  },
];

// --- チェックリスト ---
const checkList = [
  "過去3〜5年の推移で、自社の実質単価（燃調・賦課金・容量拠出金込み）がどう動いたかを把握しているか",
  "燃料市況・為替の変動が自社の燃調費にどの程度反映されるかを試算しているか",
  "全国平均の推移と、東北エリアの相対位置（中位〜やや上位）を分けて理解しているか",
  "固定型と市場連動型のリスク配分を、推移の局面に合わせて再点検しているか",
  "賦課金・容量拠出金など、燃料が落ち着いても下がりにくい固定的上昇要因を別枠で把握しているか",
];

const faqItems = [
  {
    question: "東北エリアの法人電気料金は、推移として高いのですか？",
    answer:
      "電力・ガス取引監視等委員会や資源エネルギー庁の公表統計から整理すると、東北電力エリアの高圧単価は全国10エリアの中で概ね中位〜やや上位に位置し、参考水準としては概ね14〜17円/kWh前後で語られる区分です。東日本大震災後に火力依存度が上昇した経緯から、燃料費調整額のプラス幅が相対的に大きくなりやすい面がある一方、女川原発の再稼働や風力・地熱など再エネ比率の高さが燃料費の安定に寄与し得る構造も併せ持ちます。数値は時点で変わるため、最新は各公式でご確認ください。",
  },
  {
    question: "2019〜2025年で、東北エリアの単価はどのように推移しましたか？",
    answer:
      "全国平均でみると、2022年の燃料高騰で特別高圧・高圧を中心に水準が大きく切り上がり、2023〜2025年は急騰前の2019〜2021年水準には戻っていません。東北エリアもこの全国的な高止まりの傾向を共有しており、震災後の電源構成の変化を背景に燃料市況の影響を受けやすい局面も経てきました。本ページの数値は公的統計の概括であり、実際の請求単価は契約・使用量・時期で異なります。",
  },
  {
    question: "東北エリアの単価が動く主な要因は何ですか？",
    answer:
      "燃料市況・為替・電源構成・制度コスト（再エネ賦課金・容量拠出金・託送料金）の4つが主因です。短期の変動は燃料市況と為替に連動しやすく、制度コストは燃料が落ち着いても下がりにくい固定的な上昇要因として残ります。東北エリアは女川原発の再稼働や再エネ比率の高さから、燃料費に依存しない電源の比率が相対的に高く、燃料市況への感応度が緩和される方向にも働きます。",
  },
  {
    question: "女川原発の再稼働は東北エリアの単価にどう関係しますか？",
    answer:
      "女川原子力発電所は再稼働している段階にあり、燃料費の低い電源の比率が高まることは、中長期的な燃料費の安定度に寄与し得ます。ただし稼働状況や安全対策費用の動向は時点で変わり、単価は公表された算定式に基づくため、本ページでは特定の稼働見通しや値下げを断定しません。最新は各公式でご確認ください。",
  },
  {
    question: "再エネ比率の高さは東北エリアの推移にどう影響しますか？",
    answer:
      "東北エリアは風力・地熱・水力など再生可能エネルギーのポテンシャルが大きく、燃料費に依存しない電源の比率が相対的に高いエリアです。これは中長期で燃料市況への感応度を和らげる方向に働き得ます。一方、再エネ賦課金は全国一律で、直接的な電気代低減効果は限定的です。再エネ拡大に伴う出力制御など需給運用上の論点もあるため、調達プランの検討では両面を踏まえる必要があります。",
  },
  {
    question: "再エネ賦課金は推移にどう効いていますか？",
    answer:
      "再エネ賦課金は全国一律で、2026年度は4.18円/kWhです。近年は上昇基調で、燃料市況とは独立に単価へ上乗せされます。賦課金や容量拠出金といった制度コストは、燃料価格が下がった局面でも実質単価の下支え要因として残るため、推移を読む際は燃料要因と制度要因を分けて把握することが重要です。",
  },
  {
    question: "東北エリアの今後の単価見通しはどう考えればよいですか？",
    answer:
      "将来の単価を断定することはできません。見通しは、燃料市況（LNG・石炭・原油）・為替・電源構成の変化・制度コストという構造要因の組み合わせで考えるのが中立的です。燃料が落ち着けば燃調費のプラス幅は縮小し得ますが、賦課金・容量拠出金などの制度コストは下がりにくく、急落は見込みにくいという整理になります。最新の告示・市況は各公式でご確認ください。",
  },
  {
    question: "JEPXの東北エリアプライスは料金にどう関係しますか？",
    answer:
      "JEPX（日本卸電力取引所）のエリアプライスは、市場連動型プランの仕入れコストに直結します。東北エリアは冬季の暖房需要が大きく、厳寒期の需給逼迫時に価格が上振れしやすい傾向があります。一方で再エネ出力が多い時間帯は価格が低下する場面もあります。ただし具体的な価格差は時期・時間帯で大きく変動するため、本ページでは傾向・構造の説明にとどめます。市場連動型を検討する場合は、価格変動リスクの範囲を必ず確認してください。",
  },
];

const sourcesItems = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/", description: "平均販売単価・小売市場の統計" },
  { name: "資源エネルギー庁（電力調査統計）", url: "https://www.enecho.meti.go.jp", description: "電力量・単価の年次統計" },
  { name: "東北電力", url: "https://www.tohoku-epco.co.jp/", description: "東北電力エリアの法人向け料金プラン情報" },
  { name: "JEPX（日本卸電力取引所）", url: "https://www.jepx.jp", description: "エリアプライスの傾向（市場連動プランの仕入れ指標）" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];

export default function RegionTohokuElectricityPriceTrendPage() {
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
          { name: "東北エリアの法人電気料金 推移と単価水準" },
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
          <span className="text-slate-800">東北エリアの推移と単価水準</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-indigo-700">REGION ／ 推移・単価水準の深掘り</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            東北エリアの法人電気料金 推移と単価水準
          </h1>
          <p className="mt-1 text-base font-medium text-indigo-800">特別高圧・高圧・低圧の位置づけと見通しの考え方</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            東北電力エリア（東北6県＋新潟県）の法人向け電気料金は、全国的な高止まりの流れを共有しつつ、女川原発の再稼働や風力・地熱など再エネ比率の高さといった東北固有の電源構成が推移に関わってきました。
            本ページでは、公的統計の概括をもとに、東北エリアの単価水準がどの位置にあるのか、推移を動かす構造要因は何か、そして将来を断定しない「見通しの考え方」を中立的に整理します。
          </p>
        </header>

        {/* 読み分け案内（意図分離） */}
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
          📌 <span className="font-semibold">このページの読み分け</span>：
          全国10エリアを横並びで比較する総論は{" "}
          <Link href="/electricity-price-trend-by-area" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別（電力会社別）の電気料金推移比較</Link>、
          東北エリア全体の市況・新電力動向は{" "}
          <Link href="/region-tohoku-business-electricity" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">東北電力エリアの法人電気代事情</Link>、
          全国・月次・契約区分別の推移データは{" "}
          <Link href="/business-electricity-retrospective" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気料金の月次振り返り</Link>
          をご覧ください。<span className="font-semibold">本ページは、東北エリアの「推移・単価水準」に特化</span>しています。
        </div>

        <AuthorBadge publishedAt="2026-07-08" updatedAt="2026-07-08" />
        <TableOfContents />

        <div className="mt-6 space-y-6">
          {/* H2-1 全国推移と東北の位置づけ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              全国の法人電気料金推移（2019〜2025）と東北エリアの位置づけ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず全国平均の年次単価で、推移の大きな流れを確認します。下表は再エネ賦課金を含まない年平均単価（円/kWh）で、2022年を境に水準が切り上がり、
              2025年時点でも2019年水準には戻っていないことが読み取れます。東北エリアも、この全国的な高止まりの傾向を共有しています。
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
              東北エリアの単価水準はどの位置にあるか（公的統計の概括）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力・ガス取引監視等委員会や資源エネルギー庁の公表統計から整理すると、東北電力エリアの高圧単価は全国10エリアの中で概ね<span className="font-semibold">中位〜やや上位</span>に位置します。
              高圧の参考水準としては概ね14〜17円/kWh前後で語られることが多い区分で、東日本大震災後に火力依存度が上昇した経緯から燃料費調整額のプラス幅が相対的に大きくなりやすい面があります。
              これは統計上の相対位置を概括したものであり、エリア間の優劣を断定するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">相対位置</p>
                <p className="mt-1 text-sm text-slate-700">高圧単価は全国中位〜やや上位。参考水準として概ね14〜17円/kWh前後で語られることが多い区分。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">燃調の効き方</p>
                <p className="mt-1 text-sm text-slate-700">震災後に火力依存度が上昇した経緯で燃調プラス幅が出やすい一方、女川再稼働・再エネ比率が緩和方向にも働く。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">需要の特性</p>
                <p className="mt-1 text-sm text-slate-700">製造業の集積と寒冷地の冬季暖房需要。冬季ピークが契約電力（基本料金）に効きやすい。</p>
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
              東北エリアで単価を動かす構造要因（燃料市況・為替・電源構成・制度）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価の推移は、偶然ではなく構造的な要因の組み合わせで動きます。東北エリアで特に意識したいのは、火力燃料の市況・為替に加え、女川原発の再稼働や再エネ比率の高さといった電源構成の要素です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">要因</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">東北エリアでの効き方</th>
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

          {/* H2-4 電源構成と東北固有の事情 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電源構成と東北エリア固有の事情（女川再稼働・再エネ比率・寒冷地需要）
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">女川原発の再稼働と燃料費の安定</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  東北電力エリアでは女川原子力発電所が再稼働している段階にあり、燃料費の低い電源の比率が高まることは、中長期的な燃料費の安定度に寄与し得ます。
                  稼働状況や安全対策費用の動向は時点で変わるため、最新は各公式でご確認ください。本ページでは特定の稼働見通しを断定しません。
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">再エネ（風力・地熱・水力）比率の高さ</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  東北エリアは風力・地熱・水力など再生可能エネルギーのポテンシャルが大きく、燃料費に依存しない電源の比率が相対的に高いエリアです。
                  これは燃料市況への感応度を和らげる方向に働き得る一方、再エネ拡大に伴う出力制御など需給運用上の論点も抱えます。
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">製造業の集積と寒冷地の暖房需要</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  宮城・福島・新潟などを中心に製造業が集積し、高圧・特別高圧の電力多消費需要が一定規模あります。
                  加えて寒冷地特有の冬季暖房需要があり、冬季ピークが契約電力（基本料金）に効きやすいのが東北エリアの特徴です。
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              エリアの電源構成の比較は{" "}
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別電源構成の比較</Link>
              、エリア全体の市況・新電力動向は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東北電力エリアの法人電気代事情</Link>
              をあわせてご確認ください。
            </p>
          </section>

          {/* H2-5 契約区分別 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約区分別（特別高圧・高圧・低圧）の推移の特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同じエリアでも、契約区分によって推移の表れ方は異なります。上昇局面での変動幅は特別高圧・高圧で大きく、低圧は制度コストの比率が相対的に高いという違いがあります。
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
              JEPX 東北エリアプライスの傾向（構造の説明）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを検討する場合、JEPX（日本卸電力取引所）の東北エリアプライスが仕入れコストの目安になります。
              東北エリアは冬季の暖房需要が大きく、厳寒期の需給逼迫時や燃料市況の変化で価格が振れやすい傾向があります。
              一方、再エネの発電量が多い時間帯は価格が低下する場面もあります。
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
              推移を読むうえで、燃料市況と切り分けて把握したいのが制度コストです。これらは全国共通で、東北エリアにも同様に上乗せされます。
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
                <span className="font-semibold">託送料金</span>：送配電網の維持・投資に対応する費用で、下がりにくい構造的な上昇圧力。
              </li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              これらは燃料価格が落ち着いた局面でも実質単価の下支え要因として残るため、「燃料が下がったのに思ったほど安くならない」という体感の背景になります。
            </p>
          </section>

          {/* H2-8 見通しの考え方 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              今後の単価の「見通しの考え方」（予測ではなく構造で捉える）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              将来の単価を断定することはできません。ここでは、東北エリアの推移を「予測」ではなく「構造要因の組み合わせ」で捉えるための視点を整理します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりうる方向に働く要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・LNG・石炭・原油など燃料市況の落ち着き</li>
                  <li>・円高方向への為替変動</li>
                  <li>・女川原発の再稼働・再エネなど燃料費に依存しない電源の比率上昇</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりにくくする要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・再エネ賦課金・容量拠出金など制度コストの上昇・固定化</li>
                  <li>・託送料金の投資対応による上昇圧力</li>
                  <li>・火力を含む電源構成の燃料市況への感応度</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              結論としては、燃料要因は上下し得る一方、制度コストは下がりにくく、急落は見込みにくいという整理になります。
              高止まりの前提で契約・調達を点検する考え方は{" "}
              <Link href="/why-electricity-prices-have-not-returned" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金が元に戻らない理由</Link>
              、今後の局面整理は{" "}
              <Link href="/how-long-business-electricity-price-surge-lasts" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高騰はいつまで続くか</Link>
              も参照してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 将来の単価・時期を断定するものではありません。最新の市況・告示は各公式でご確認ください。
            </p>
          </section>

          {/* H2-9 相談CTA（ConsultCta） */}
          <ConsultCta
            from="region-tohoku-price-trend"
            heading="東北エリアの電気料金、推移を踏まえて見直せるか無料で相談しませんか？"
            description="一般社団法人エネルギー情報センター（中立・非営利）。推移と自社の使用実態を照らし合わせ、契約・調達の見直し余地を中立的に整理します。初回相談は無料、営業電話はいたしません。"
          />

          {/* H2-10 代表シナリオ */}
          <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ：契約見直しによる削減の試算例（東北エリア・高圧水準ベース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下は、東北エリアの一般的な高圧需要を想定した「契約見直しで得られうる削減」の試算例です。将来の単価を予測するものではなく、
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
              推移を踏まえて東北エリアの法人が確認したい5項目
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
              <li>・東北エリアの高圧単価は全国中位〜やや上位。参考水準は概ね14〜17円/kWh前後。</li>
              <li>・全国平均は2022年に水準が切り上がり、2025年も2019年水準には戻っていない（東北も同傾向）。</li>
              <li>・推移は燃料市況・為替・電源構成・制度コストの組み合わせで動く。女川再稼働・再エネ比率が燃料費の安定に寄与し得る。</li>
              <li>・賦課金（2026年度4.18円/kWh）・容量拠出金など制度コストは下がりにくい。</li>
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
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北6県＋新潟の市況・料金改定・新電力動向を解説（エリア総合）。" },
              { href: "/tohoku-epco-corporate-electricity-guide", title: "東北電力の法人向けプラン解説", description: "エリア市況に対し、東北電力という特定企業のプラン体系・サポートを中立的に解説。" },
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
              { href: "/region-hokkaido-electricity-price-trend", title: "北海道エリアの推移と単価水準", description: "燃料依存・寒冷地構造で高めに推移する北海道エリアを深掘り。" },
              { href: "/region-hokuriku-electricity-price-trend", title: "北陸エリアの推移と単価水準", description: "東北と並ぶ豪雪・冬季暖房需要地域の推移を深掘り。" },
              { href: "/region-tokyo-electricity-price-trend", title: "東京（関東）エリアの推移と単価水準", description: "LNG依存で燃料市況に敏感な関東エリアの推移を深掘り。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代見直しの基本ポイント", description: "業種・エリアを問わない契約見直しの基本フレーム。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="東北エリアの推移を踏まえて、自社の電気料金を点検する"
            description="全国的な高止まりと、女川原発の再稼働・再エネ比率の高さといった東北エリアの電源構成を前提に、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
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
