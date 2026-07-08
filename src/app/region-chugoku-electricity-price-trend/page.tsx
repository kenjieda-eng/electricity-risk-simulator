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
// B-83 エリア別 法人電気料金 推移深掘りシリーズ（中国／山陽・山陰）
//  - 本ページ = 「1エリア（中国電力エリア）の推移・単価水準の縦深掘り」
//  - 全国10エリア横断比較の総論は /electricity-price-trend-by-area（親）
//  - エリア総合（市況・新電力動向）は /region-chugoku-business-electricity
//  - 全国・月次・契約区分別の推移データは /business-electricity-retrospective
//  データ規律: 単価の具体数値は公的統計の概括のみ。予測値の断定はしない。
// =============================================================

const pageTitle =
  "中国エリアの法人電気料金 推移と単価水準｜特高・高圧・低圧の位置づけと見通しの考え方";
const pageDescription =
  "中国電力エリア（広島・岡山・山口・鳥取・島根）の法人向け電気料金の推移と単価水準を、公的統計の概括をもとに整理。特別高圧・高圧・低圧の位置づけ、石炭火力依存と島根原発2号機再稼働が推移に与える構造、賦課金など全国共通の上昇要因、見通しの考え方を中立的に解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/region-chugoku-electricity-price-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中国 法人 電気料金 推移",
    "中国電力エリア 単価 水準",
    "広島 高圧 電気代 推移",
    "中国電力 法人 料金 推移",
    "中国 特別高圧 単価",
    "中国電力 電気料金 見通し",
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
    factor: "燃料市況（石炭・LNG・原油）",
    detail:
      "中国電力エリアは石炭火力の比率が一定程度高く、国際石炭価格やLNG価格の変動が燃料費調整額を通じて単価に反映されやすい構造です。",
    direction: "上昇・下降の両方向に振れる。高騰局面では実質単価が上振れしやすい。",
  },
  {
    factor: "為替（円安・円高）",
    detail: "燃料は輸入依存のため、円安は調達コストを押し上げ、円高は緩和方向に働きます。",
    direction: "円安局面では燃調費のプラス幅が拡大しやすい。",
  },
  {
    factor: "電源構成（石炭火力・原子力）",
    detail:
      "石炭火力への依存が一定程度あるため燃料市況の影響を直接受けます。島根原発2号機の再稼働は燃料費の安定度を左右する要素です。",
    direction: "構造は中期的にゆっくり変化。短期の単価は燃料市況に連動しやすい。",
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
    feature: "大規模工場・製鉄・石油化学等。山陽工業地帯の重工業需要が多く、市場・燃料市況の影響を受けやすく、上昇局面での変動幅が相対的に大きい。",
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
    label: "小規模高圧オフィス（中国・年間40万kWh）",
    usageManKwh: 40,
    improvementYen: 1.5,
    annualSavingMan: 60,
    fiveYearMan: 300,
    note: "複数社の相見積もり・燃調キャップ付プランへの切替で単価改善を図る例。",
  },
  {
    label: "中規模工場（高圧・年間240万kWh）",
    usageManKwh: 240,
    improvementYen: 1.2,
    annualSavingMan: 288,
    fiveYearMan: 1440,
    note: "デマンド管理と調達見直しを組み合わせた例。設備投資は別途。",
  },
  {
    label: "大規模需要（高圧〜特別高圧・年間1,000万kWh）",
    usageManKwh: 1000,
    improvementYen: 1.0,
    annualSavingMan: 1000,
    fiveYearMan: 5000,
    note: "特高・大口の入札・自家消費を含む中長期の最適化を織り込んだ例。",
  },
];

// --- チェックリスト ---
const checkList = [
  "過去3〜5年の推移で、自社の実質単価（燃調・賦課金・容量拠出金込み）がどう動いたかを把握しているか",
  "石炭・LNG市況・為替の変動が自社の燃調費にどの程度反映されるかを試算しているか",
  "全国平均の推移と、中国エリアの相対位置（割高グループ）を分けて理解しているか",
  "固定型と市場連動型のリスク配分を、推移の局面に合わせて再点検しているか",
  "賦課金・容量拠出金など、燃料が落ち着いても下がりにくい固定的上昇要因を別枠で把握しているか",
];

const faqItems = [
  {
    question: "中国エリアの法人電気料金は、推移として高いのですか？",
    answer:
      "電力・ガス取引監視等委員会や資源エネルギー庁の公表統計から整理すると、中国電力エリアの高圧単価は全国10エリアの中で割高グループ（概ね16〜17円/kWh前後）に位置します。北海道・沖縄・四国に次ぐ水準で、関西・九州エリアより1〜3円/kWh高い水準で推移してきました。これは石炭火力への一定の依存と原子力比率の低さに由来します。島根原発2号機の再稼働は燃料費の安定に寄与する要素ですが、数値は時点で変わるため、最新は各公式でご確認ください。",
  },
  {
    question: "2019〜2025年で、中国エリアの単価はどのように推移しましたか？",
    answer:
      "全国平均でみると、2022年の燃料高騰で特別高圧・高圧を中心に水準が大きく切り上がり、2023〜2025年は急騰前の2019〜2021年水準には戻っていません。中国エリアもこの全国的な高止まりの傾向を共有しており、石炭・LNG市況に敏感な推移となっています。本ページの数値は公的統計の概括であり、実際の請求単価は契約・使用量・時期で異なります。",
  },
  {
    question: "中国エリアの単価が動く主な要因は何ですか？",
    answer:
      "燃料市況（特に石炭・LNG）・為替・電源構成・制度コスト（再エネ賦課金・容量拠出金・託送料金）の4つが主因です。短期の変動は燃料市況と為替に連動しやすく、制度コストは燃料が落ち着いても下がりにくい固定的な上昇要因として残ります。中国エリアは石炭火力の比率が一定程度高いため、石炭市況の影響が相対的に表れやすい構造です。",
  },
  {
    question: "再エネ賦課金は推移にどう効いていますか？",
    answer:
      "再エネ賦課金は全国一律で、2026年度は4.18円/kWhです。近年は上昇基調で、燃料市況とは独立に単価へ上乗せされます。賦課金や容量拠出金といった制度コストは、燃料価格が下がった局面でも実質単価の下支え要因として残るため、推移を読む際は燃料要因と制度要因を分けて把握することが重要です。",
  },
  {
    question: "島根原発の再稼働は中国エリアの推移にどう影響しますか？",
    answer:
      "島根原子力発電所2号機が再稼働しており、火力（石炭・LNG等）の一部を代替することで燃料費の安定度に寄与するとされます。原子力比率が高まるほど燃料市況への感応度は相対的に低下し得ますが、定期検査や規制対応で停止期間も生じ得ます。3号機など今後の稼働動向は時点で変わり、断定はできないため、最新は公的な公表資料でご確認ください。本ページでは特定の稼働見通しを断定しません。",
  },
  {
    question: "JEPXの中国エリアプライスは料金にどう関係しますか？",
    answer:
      "JEPX（日本卸電力取引所）のエリアプライスは、市場連動型プランの仕入れコストに直結します。中国エリアは西日本の需給に連動しやすく、需給の逼迫時や燃料市況の変化で価格が振れやすい傾向があります。ただし具体的な価格差は時期・時間帯で大きく変動するため、本ページでは傾向・構造の説明にとどめます。市場連動型を検討する場合は、価格変動リスクの範囲を必ず確認してください。",
  },
  {
    question: "全国横断の比較や、他エリアとの違いはどこで確認できますか？",
    answer:
      "10エリアを横並びで比較する総論は「エリア別（電力会社別）の電気料金推移比較」を、中国エリア全体の市況・新電力動向は「中国電力エリアの法人電気代事情」をご覧ください。本ページはその中で、中国エリアの推移と単価水準に絞って深掘りする位置づけです。全国・月次・契約区分別の推移データは月次振り返りシリーズで確認できます。",
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
  { name: "中国電力", url: "https://www.energia.co.jp/", description: "中国電力エリアの法人向け料金プラン情報" },
  { name: "JEPX（日本卸電力取引所）", url: "https://www.jepx.jp", description: "エリアプライスの傾向（市場連動プランの仕入れ指標）" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
];

export default function RegionChugokuElectricityPriceTrendPage() {
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
          { name: "中国エリアの法人電気料金 推移と単価水準" },
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
          <span className="text-slate-800">中国エリアの推移と単価水準</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-indigo-700">REGION ／ 推移・単価水準の深掘り</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            中国エリアの法人電気料金 推移と単価水準
          </h1>
          <p className="mt-1 text-base font-medium text-indigo-800">特別高圧・高圧・低圧の位置づけと見通しの考え方</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            中国電力エリア（広島・岡山・山口・鳥取・島根の5県）の法人向け電気料金は、全国的な高止まりの流れを共有しつつ、石炭火力への一定の依存から燃料市況の影響を受けやすい推移をたどってきました。
            本ページでは、公的統計の概括をもとに、中国エリアの単価水準がどの位置にあるのか、推移を動かす構造要因は何か、そして将来を断定しない「見通しの考え方」を中立的に整理します。
          </p>
        </header>

        {/* 読み分け案内（意図分離） */}
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
          📌 <span className="font-semibold">このページの読み分け</span>：
          全国10エリアを横並びで比較する総論は{" "}
          <Link href="/electricity-price-trend-by-area" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別（電力会社別）の電気料金推移比較</Link>、
          中国エリア全体の市況・新電力動向は{" "}
          <Link href="/region-chugoku-business-electricity" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">中国電力エリアの法人電気代事情</Link>、
          全国・月次・契約区分別の推移データは{" "}
          <Link href="/business-electricity-retrospective" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気料金の月次振り返り</Link>
          をご覧ください。<span className="font-semibold">本ページは、中国エリアの「推移・単価水準」に特化</span>しています。
        </div>

        <AuthorBadge publishedAt="2026-07-08" updatedAt="2026-07-08" />
        <TableOfContents />

        <div className="mt-6 space-y-6">
          {/* H2-1 全国推移と中国の位置づけ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              全国の法人電気料金推移（2019〜2025）と中国エリアの位置づけ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず全国平均の年次単価で、推移の大きな流れを確認します。下表は再エネ賦課金を含まない年平均単価（円/kWh）で、2022年を境に水準が切り上がり、
              2025年時点でも2019年水準には戻っていないことが読み取れます。中国エリアも、この全国的な高止まりの傾向を共有しています。
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
              中国エリアの単価水準はどの位置にあるか（公的統計の概括）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力・ガス取引監視等委員会や資源エネルギー庁の公表統計から整理すると、中国電力エリアの高圧単価は全国10エリアの中で<span className="font-semibold">割高グループ</span>に位置します。
              北海道・沖縄・四国に次ぐ水準で、関西・九州エリアより1〜3円/kWh高い、という相対的な位置づけです。
              これは統計上の相対位置を概括したものであり、エリア間の優劣を断定するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">相対位置</p>
                <p className="mt-1 text-sm text-slate-700">高圧単価は全国の割高グループ。参考水準として概ね16〜17円/kWh前後で語られることが多い区分。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">上振れの起きやすさ</p>
                <p className="mt-1 text-sm text-slate-700">石炭火力への依存が一定程度あり、燃調費が石炭・LNG市況の変動に反応しやすい。高騰局面で実質単価が伸びやすい。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">需要の特徴</p>
                <p className="mt-1 text-sm text-slate-700">山陽工業地帯に鉄鋼・自動車・石油化学など重工業が集積。特別高圧の大口需要が多い産業構造。</p>
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
              中国エリアで単価を動かす構造要因（燃料市況・為替・電源構成・制度）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価の推移は、偶然ではなく構造的な要因の組み合わせで動きます。中国エリアで特に効きやすいのは、石炭・LNGを中心とした燃料市況と為替です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">要因</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">中国エリアでの効き方</th>
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

          {/* H2-4 電源構成と中国固有の事情 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電源構成と中国エリア固有の事情（石炭火力・島根原発の位置づけ）
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">石炭火力への一定の依存</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  中国電力エリアは電源構成に占める石炭火力の比率が一定程度高く（概ね4割前後で語られる規模）、国際石炭価格が上がると燃料費調整額を通じて単価が押し上げられます。
                  加えて、GX（グリーントランスフォーメーション）に伴う炭素関連コストの動向も、石炭火力由来の電力コストに影響し得る点が、中国エリアの実質単価が上振れしやすい構造的な理由です。
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">島根原発2号機の再稼働（2026年時点）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  島根原子力発電所2号機が再稼働しており、火力（石炭・LNG等）の一部を代替することで燃料費の安定度に寄与するとされます。
                  ただし定期検査や規制対応で停止期間も生じ得るほか、3号機など今後の稼働動向は時点で変わるため、最新は各公式でご確認ください。本ページでは特定の稼働見通しを断定しません。
                </p>
              </div>
              <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-4">
                <h3 className="text-base font-semibold text-indigo-900">山陽工業地帯の重工業需要と系統</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  広島・岡山・山口を中心に鉄鋼・自動車・石油化学など電力多消費型の産業が集積し、特別高圧の大口需要が多いエリアです。
                  一方で西日本の需給に連動しやすく、逼迫する局面ではJEPXエリアプライスが振れやすい面もあります。
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              エリアの電源構成の比較は{" "}
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別電源構成の比較</Link>
              、エリア全体の市況・新電力動向は{" "}
              <Link href="/region-chugoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中国電力エリアの法人電気代事情</Link>
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
              JEPX 中国エリアプライスの傾向（構造の説明）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを検討する場合、JEPX（日本卸電力取引所）の中国エリアプライスが仕入れコストの目安になります。
              中国エリアは西日本の需給に連動しやすく、猛暑・厳寒による需給逼迫時や燃料市況の変化で価格が振れやすい傾向があります。
              一方、太陽光の発電量が多い時間帯は昼間の価格が低下する場面もあります。
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
              推移を読むうえで、燃料市況と切り分けて把握したいのが制度コストです。これらは全国共通で、中国エリアにも同様に上乗せされます。
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
              将来の単価を断定することはできません。ここでは、中国エリアの推移を「予測」ではなく「構造要因の組み合わせ」で捉えるための視点を整理します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりうる方向に働く要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・石炭・LNG・原油など燃料市況の落ち着き</li>
                  <li>・円高方向への為替変動</li>
                  <li>・島根原発2号機の再稼働など燃料費に依存しない電源の寄与</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりにくくする要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・再エネ賦課金・容量拠出金など制度コストの上昇・固定化</li>
                  <li>・託送料金の投資対応による上昇圧力</li>
                  <li>・石炭火力への依存構造による燃料市況への感応度</li>
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
            from="region-chugoku-price-trend"
            heading="中国エリアの電気料金、推移を踏まえて見直せるか無料で相談しませんか？"
            description="一般社団法人エネルギー情報センター（中立・非営利）。推移と自社の使用実態を照らし合わせ、契約・調達の見直し余地を中立的に整理します。初回相談は無料、営業電話はいたしません。"
          />

          {/* H2-10 代表シナリオ */}
          <section className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ：契約見直しによる削減の試算例（中国エリア・高圧水準ベース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下は、中国エリアの一般的な高圧需要を想定した「契約見直しで得られうる削減」の試算例です。将来の単価を予測するものではなく、
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
              推移を踏まえて中国エリアの法人が確認したい5項目
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
              <li>・中国エリアの高圧単価は全国の割高グループ（概ね16〜17円/kWh前後）。石炭火力依存で燃料高騰局面に上振れしやすい構造。</li>
              <li>・全国平均は2022年に水準が切り上がり、2025年も2019年水準には戻っていない（中国も同傾向）。</li>
              <li>・推移は燃料市況・為替・電源構成・制度コストの組み合わせで動く。</li>
              <li>・賦課金（2026年度4.18円/kWh）・容量拠出金など制度コストは下がりにくい。</li>
              <li>・島根原発2号機の再稼働は燃料費の安定に寄与する一方、将来は断定せず構造要因で見通しを考え、契約・調達の点検を先に行うのが現実的。</li>
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
              { href: "/region-chugoku-business-electricity", title: "中国電力エリアの法人電気代事情", description: "中国エリア全体の市況・料金改定・新電力動向を解説（エリア総合）。" },
              { href: "/energia-corporate-electricity-guide", title: "中国電力（エネルギア）の法人向けプラン解説", description: "エリア市況に対し、中国電力という特定企業のプラン体系・サポートを中立的に解説。" },
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
              { href: "/region-kyushu-electricity-price-trend", title: "九州エリアの推移と単価水準", description: "原発稼働で割安グループの九州エリアの推移を深掘り。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代見直しの基本ポイント", description: "業種・エリアを問わない契約見直しの基本フレーム。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="中国エリアの推移を踏まえて、自社の電気料金を点検する"
            description="全国的な高止まりと中国エリアの石炭火力依存構造を前提に、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
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
