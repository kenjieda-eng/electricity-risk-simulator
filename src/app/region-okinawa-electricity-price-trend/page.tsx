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
// B-83 エリア別 法人電気料金 推移深掘りシリーズ（沖縄／沖縄電力エリア）
//  - 本ページ = 「1エリア（沖縄電力エリア）の推移・単価水準の縦深掘り」
//  - 全国10エリア横断比較の総論は /electricity-price-trend-by-area（親）
//  - エリア総合（市況・新電力動向）は /region-okinawa-business-electricity
//  - 沖縄電力という特定企業のプランは /okiden-corporate-electricity-guide
//  データ規律: 単価の具体数値は公的統計・JEPX実績の概括のみ。将来価格の断定はしない。
//  賦課金は2026年度4.18円/kWhのみ。2026年度時点・最新の公表情報で要確認。
// =============================================================

const pageTitle =
  "沖縄エリアの法人電気料金 推移と単価水準｜独立系統・JEPX対象外・石油火力依存の構造（代表シナリオ）";
const pageDescription =
  "沖縄電力エリアの法人向け電気料金の推移と単価水準を、公的統計の概括をもとに整理。本土非連系の独立系統、JEPXスポット対象外（沖縄電力の燃調と自社電源構成が単価を規定）、石油火力依存度の高さと燃調感応度、離島ユニバーサルサービス、台風BCPを中立的に解説します。将来価格は断定しません。既存の沖縄事情・沖縄電力ガイドと読み分けます。";
const pageUrl =
  "https://simulator.eic-jp.org/region-okinawa-electricity-price-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "沖縄 法人 電気料金 推移",
    "沖縄電力エリア 単価 水準",
    "沖縄 JEPX対象外 独立系統",
    "石油火力 燃調 沖縄",
    "離島 ユニバーサルサービス 台風 BCP",
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

// --- 沖縄はJEPX対象外。単価を規定する要因（燃調・電源・独立系統） ---
// 出典: 公的統計・沖縄電力の公表情報の概括。JEPXエリアプライスは存在しない（架空価格は記載しない）。
const okinawaPriceDrivers = [
  { label: "JEPXとの関係", price: "—", note: "沖縄はJEPXスポット対象外。エリアプライスによる仕入れ指標は本土と異なる。" },
  { label: "単価の主な規定要因", price: "燃調＋電源", note: "沖縄電力の燃料費調整と自社電源構成（石油火力比率の高さ）が小売単価に効きやすい。" },
  { label: "系統の性格", price: "独立", note: "本土非連系の独立系統。需給・BCP・台風影響の出方が本土と異なる。" },
  { label: "離島・US", price: "構造コスト", note: "離島ユニバーサルサービス費用がエリア全体の単価構造に関与し得る。" },
  { label: "台風BCP", price: "運用リスク", note: "独立系統のため本土からの応援融通が前提にならない。法人BCPと直結。" },
];

// --- 単価を動かす構造要因（中立整理） ---
const structuralFactors = [
  {
    factor: "燃料市況（LNG・石炭・原油／石油）",
    detail:
      "沖縄電力エリアは火力（LNG・石炭・石油）依存度が大きく、燃料市況が燃料費調整額に反映されやすい構造です。石油火力比率が本土比で相対的に高い点が、燃調感応度を押し上げる要因になり得ます。",
    direction: "上昇・下降の両方向に振れる。燃料高騰局面ではプラス幅が拡大しやすい。",
  },
  {
    factor: "為替（円安・円高）",
    detail: "火力燃料は輸入依存のため、円安は調達コストを押し上げ、円高は緩和方向に働きます。",
    direction: "円安局面では燃調費のプラス幅が拡大しやすい。",
  },
  {
    factor: "電源構成（火力中心・原子力なし）",
    detail:
      "沖縄エリアに原子力発電所は立地しません。LNG・石炭・石油の火力構成と再エネ（主に太陽光）が需給を支えます。独立系統のため本土からの融通が前提にならず、エリア内で需給を完結させる必要があります。",
    direction: "火力比率が高いほど燃料・為替の影響を受けやすい。再エネ拡大は昼間需給の運用に影響。",
  },
  {
    factor: "JEPX対象外（卸指標の不在）",
    detail:
      "沖縄はJEPXスポットの対象外であり、本土のようなエリアプライスを仕入れ指標として用いる前提がありません。小売単価の見え方は沖縄電力の燃調と自社電源構成で整理するのが適切です。",
    direction: "市場連動プランの本土型物差しは使えない。燃調条件・契約条件の確認が中心。",
  },
  {
    factor: "制度コスト（賦課金・容量拠出金・託送）＋離島US",
    detail:
      "再エネ賦課金・容量拠出金・託送料金は全国共通の制度コストです。加えて離島ユニバーサルサービスに関わる構造コストが、エリア全体の単価水準に影響し得ます。",
    direction: "近年は上昇・固定化の方向。燃料が落ち着いても下がりにくい。",
  },
];

// --- 契約区分別の推移の特徴 ---
const voltageTrend = [
  {
    type: "特別高圧（2万V以上）",
    feature: "空港・大型商業・大規模施設など大口需要向け。燃料市況・燃調の影響を受けやすく、上昇局面での変動幅が相対的に大きい。",
  },
  {
    type: "高圧（6kV）",
    feature: "ホテル・病院・中規模ビル・工場の中心区分。燃調費・賦課金・容量拠出金の合算で実質単価が押し上げられる。独立系統ゆえ固定費の単価への乗せ方が相対的に高くなりやすい。",
  },
  {
    type: "低圧電力（動力）",
    feature: "小規模事業所・店舗。基本料金と従量のバランスで、契約電力の管理余地が残る。通年冷房需要が大きい拠点では使用量の季節差が本土と異なる場合がある。",
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
    label: "小規模高圧オフィス（沖縄・年間25万kWh）",
    usageManKwh: 25,
    improvementYen: 1.4,
    annualSavingMan: 35,
    fiveYearMan: 175,
    note: "燃調条件・契約期間の点検と、省エネ・自家消費の併用で実質単価改善を図る例。（検算：25×1.4＝35、35×5＝175）",
  },
  {
    label: "中規模ホテル・商業施設（高圧・年間180万kWh）",
    usageManKwh: 180,
    improvementYen: 1.2,
    annualSavingMan: 216,
    fiveYearMan: 1080,
    note: "通年冷房負荷を前提にデマンド管理・契約電力適正化と調達見直しを組み合わせた例。設備投資は別途。（検算：180×1.2＝216、216×5＝1080）",
  },
  {
    label: "大規模需要（高圧〜特別高圧・年間800万kWh）",
    usageManKwh: 800,
    improvementYen: 1.0,
    annualSavingMan: 800,
    fiveYearMan: 4000,
    note: "特高・大口の個別交渉・自家消費・BCP電源を含む中長期の最適化を織り込んだ例。（検算：800×1.0＝800、800×5＝4000）",
  },
];

// --- チェックリスト ---
const checkList = [
  "過去3〜5年の推移で、自社の実質単価（燃調・賦課金・容量拠出金込み）がどう動いたかを把握しているか",
  "沖縄はJEPX対象外であり、本土のエリアプライスと同じ物差しで単価を語れないことを理解しているか",
  "石油火力比率の高さ・独立系統を踏まえ、燃調上振れを年次予算の保守的バッファとして織り込んでいるか",
  "離島立地の有無、台風時の停電・復旧をBCPとして契約・設備（自家発・蓄電池）と一体で確認しているか",
  "賦課金（2026年度4.18円/kWh）・容量拠出金など、燃料が落ち着いても下がりにくい固定的上昇要因を別枠で把握しているか",
];

const faqItems = [
  {
    question: "沖縄エリアの法人電気料金は、推移として安いのですか？高いのですか？",
    answer:
      "小売の高圧電力量料金でみると、沖縄電力エリアは全国10エリアの中で割高グループに位置づけられることが多いです。本土非連系の独立系統、離島ユニバーサルサービス、火力（LNG・石炭・石油）依存が構造要因として挙げられます。一方で沖縄はJEPXスポット対象外のため、『卸が安い／高い』という本土と同じ指標では語れません。小売単価の見え方は沖縄電力の燃調と自社電源構成で整理するのが適切です。数値は公的統計の概括で、実際の請求単価は契約・使用量・時期で異なるため、最新は各公式でご確認ください。",
  },
  {
    question: "2019〜2025年で、沖縄エリアの単価はどのように推移しましたか？",
    answer:
      "全国平均でみると、2022年の燃料高騰で特別高圧・高圧を中心に水準が大きく切り上がり、2023〜2025年は急騰前の2019〜2021年水準には戻っていません。沖縄エリアもこの全国的な高止まりの傾向を共有しています。加えて沖縄固有の動きとして、火力燃料市況・為替・石油火力を含む電源構成が燃調費のプラス幅に効きやすい構造があります。本ページの数値は公的統計の概括であり、将来の単価・時期を断定するものではありません。",
  },
  {
    question: "沖縄エリアの単価が動く主な要因は何ですか？",
    answer:
      "火力分の燃料市況（LNG・石炭・原油／石油）・為替・電源構成（火力中心・原子力なし）・制度コスト（再エネ賦課金・容量拠出金・託送料金）・離島ユニバーサルサービスに関わる構造コストの組み合わせが主因です。沖縄はJEPX対象外のため、本土型のエリアプライス変動を主因に置く読み方は適切ではありません。制度コストは燃料が落ち着いても下がりにくい固定的な上昇要因として残ります。",
  },
  {
    question: "独立系統・石油火力は沖縄エリアの料金にどう関係しますか？",
    answer:
      "沖縄は本土と連系されていない独立系統で、エリア内で需給を完結させる必要があります。原子力発電所は立地せず、火力（LNG・石炭・石油）依存度が大きいため、燃料価格・為替の変動が燃調に反映されやすい背景があります。石油火力比率が本土比で相対的に高い点も、燃調感応度の整理で重要です。稼働状況や燃料市況は時点で変わるため、本ページでは特定の見通しを断定しません。最新は各公式でご確認ください。",
  },
  {
    question: "沖縄はJEPXのエリアプライスがあるのですか？",
    answer:
      "いいえ。沖縄はJEPXスポットの対象外です。本土のようにエリアプライスを仕入れ指標として用いる前提がなく、架空の『沖縄エリアプライス』を契約判断の根拠に置くのは適切ではありません。市場連動の考え方自体を学ぶ場合はJEPX解説ページを参照しつつ、沖縄では燃調条件・契約条件・省エネ／自家消費／BCPを中心に整理するのが現実的です。",
  },
  {
    question: "再エネ賦課金は沖縄エリアの推移にどう効いていますか？",
    answer:
      "再エネ賦課金は全国一律で、2026年度は4.18円/kWhです。近年は上昇基調で、燃料市況とは独立に単価へ上乗せされます。沖縄エリアも他エリアと同様にこの制度コストが加算されます。賦課金や容量拠出金といった制度コストは、燃料価格が下がった局面でも実質単価の下支え要因として残るため、推移を読む際は燃料要因と制度要因を分けて把握することが重要です。",
  },
  {
    question: "離島・台風は法人の電気料金・BCPにどう関係しますか？",
    answer:
      "沖縄は本島のほか多数の有人離島を抱え、離島ユニバーサルサービスの考え方が供給・コスト構造に関わります。また台風常襲地であり、独立系統のため本土からの応援融通が前提になりません。法人需要家は、契約条件だけでなく自家発・蓄電池・復旧体制をBCPとして一体で確認することが重要です。詳細は時点で変わるため、最新は各公式でご確認ください。",
  },
  {
    question: "本ページの数値は契約先の選定に使えますか？",
    answer:
      "本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。またエリア間の優劣を断定したり、拠点移転を推奨するものでもありません。掲載の単価は公的統計の概括・参考水準であり、実際の契約判断は自社の使用実態に基づく見積もり・シミュレーションで行ってください。沖縄は新電力参入が限定的な傾向があるため、利用可能な事業者の範囲で相見積を取り、燃調・契約期間・解約条件を契約書で確認することが現実的です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
  { name: "資源エネルギー庁（エネルギー白書・電力調査統計）", url: "https://www.enecho.meti.go.jp/", description: "電力量・単価の年次統計" },
  { name: "沖縄電力 公式サイト", url: "https://www.okiden.co.jp/", description: "燃調・料金・供給に関する公表情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp/", description: "供給計画・系統に関する制度・統計" },
  { name: "経済産業省", url: "https://www.meti.go.jp/", description: "電力制度・離島供給・エネルギー政策の一次情報" },
];

export default function RegionOkinawaElectricityPriceTrendPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "地域別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-region" },
          { name: "沖縄エリアの法人電気料金 推移と単価水準" },
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
          <span className="text-slate-800">沖縄エリアの推移と単価水準</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-teal-700">REGION ／ 推移・単価水準の深掘り</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            沖縄エリアの法人電気料金 推移と単価水準
          </h1>
          <p className="mt-1 text-base font-medium text-teal-800">独立系統・JEPX対象外・石油火力依存・離島US・台風BCPの構造（代表シナリオ）</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            沖縄電力エリア（沖縄本島および離島）の法人向け電気料金は、小売の高圧単価では全国の割高グループに位置づけられることが多い一方、
            JEPXスポット対象外であるため本土のエリアプライスと同じ物差しでは語れません。本ページでは、公的統計の概括をもとに、沖縄エリアの単価水準がどの位置にあるのか、
            推移を動かす構造要因（独立系統・石油火力を含む火力依存・離島ユニバーサルサービス・台風BCP・制度コスト）は何か、そして将来を断定しない「見通しの考え方」を中立的に整理します。
            数値は2026年度時点のもので、最新の公表情報で要確認です。
          </p>
        </header>

        {/* 読み分け案内（意図分離） */}
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
          📌 <span className="font-semibold">このページの読み分け</span>：
          全国10エリアを横並びで比較する総論は{" "}
          <Link href="/electricity-price-trend-by-area" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別（電力会社別）の電気料金推移比較</Link>、
          沖縄エリア全体の市況・新電力動向は{" "}
          <Link href="/region-okinawa-business-electricity" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">沖縄電力エリアの法人電気代事情</Link>、
          沖縄電力という特定企業のプラン体系は{" "}
          <Link href="/okiden-corporate-electricity-guide" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">沖縄電力（おきでん）の法人向けプラン</Link>
          をご覧ください。<span className="font-semibold">本ページは、沖縄エリアの「推移・単価水準」に特化</span>しています。
        </div>

        <AuthorBadge publishedAt="2026-07-18" updatedAt="2026-07-18" />
        <TableOfContents />

        <div className="mt-6 space-y-6">
          {/* H2-1 全国推移と沖縄の位置づけ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              全国の法人電気料金推移（2019〜2025）と沖縄エリアの位置づけ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず全国平均の年次単価で、推移の大きな流れを確認します。下表は再エネ賦課金を含まない年平均単価（円/kWh）で、2022年を境に水準が切り上がり、
              2025年時点でも2019年水準には戻っていないことが読み取れます。沖縄エリアも、この全国的な高止まりの傾向を共有していますが、
              小売の高圧単価では全国の割高グループにありながら、JEPXスポット対象外で卸指標の見え方が本土と異なる点が特徴です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-50">
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
              出典: 資源エネルギー庁「電力調査統計」から整理（全国平均・円/kWh・再エネ賦課金を含まない年平均値）。全国横断の比較は{" "}
              <Link href="/electricity-price-trend-by-area" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別の電気料金推移比較</Link>
              を参照してください。数値は2026年度時点の概括で、最新は各公式でご確認ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-2 単価水準の位置（二面性） */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              沖縄エリアの単価水準はどの位置にあるか（小売割高とJEPX対象外の読み分け）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              沖縄の単価水準は、見る指標によって位置づけが変わる点に注意が必要です。旧一般電気事業者の標準メニューをベースにした<span className="font-semibold">小売の高圧電力量料金</span>でみると、
              沖縄電力エリアは全国10エリアの中で<span className="font-semibold">割高グループ</span>（参考水準として概ね17円/kWh前後で語られる区分）に位置します。
              需要規模が他エリアより小さく、固定費の単価への乗せ方が相対的に高くなりやすい構造があるためです。
              一方、沖縄は<span className="font-semibold">JEPXスポット対象外</span>であり、本土のようなエリアプライスを仕入れ指標にできません。小売単価は沖縄電力の燃調と自社電源構成（石油火力比率の高さ）で読む必要があります。
              この「小売は割高グループ・卸指標はJEPX対象外」という読み分けが要点です。これは統計上の相対位置の概括であり、エリア間の優劣を断定するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">小売の相対位置</p>
                <p className="mt-1 text-sm text-slate-700">高圧の小売単価は全国では割高グループ。参考水準として概ね17円/kWh前後で語られる区分。小規模エリアゆえ固定費の乗せ方が相対的に高い。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">JEPXとの関係</p>
                <p className="mt-1 text-sm text-slate-700">沖縄はJEPXスポット対象外。エリアプライス数値は存在せず、小売単価は燃調と自社電源構成で読む。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">上振れのリスク</p>
                <p className="mt-1 text-sm text-slate-700">石油火力を含む火力依存と独立系統により、燃料・為替・台風時の供給継続が上振れ・運用リスクになりやすい。</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              出典: 資源エネルギー庁・沖縄電力・OCCTO等の公表統計から整理（2026年度時点）。参考水準であり、実際の請求単価は契約内容・使用時間帯により異なります。最新は各公式でご確認ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ エリア間の「安い／高い」は統計上の相対位置の概括であり、拠点移転等を推奨するものではありません。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-3 構造要因 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              沖縄エリアで単価を動かす構造要因（燃料市況・為替・電源・JEPX対象外・制度・離島）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価の推移は、偶然ではなく構造的な要因の組み合わせで動きます。沖縄エリアで特に効きやすいのは、独立系統・石油火力を含む火力依存と、JEPX対象外であることの前提、離島US・制度コストです。
              火力分の燃料市況や為替の影響が相対的に大きく出やすい点に留意が必要です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">要因</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">沖縄エリアでの効き方</th>
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
              自社の使用量で単価の影響を試算するには{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              、基本料金・力率など契約の基礎用語は{" "}
              <Link href="/demand-power-glossary" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド・契約電力の用語集</Link>
              をあわせてご確認ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-4 電源構成と沖縄固有の事情 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電源構成と沖縄エリア固有の事情（独立系統・石油火力・離島US・台風BCP）
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <h3 className="text-base font-semibold text-teal-900">火力中心・原子力なしの電源構成（2026年度時点）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  沖縄エリアに原子力発電所は立地せず、LNG・石炭・石油の火力が需給の中心です。石油火力比率が本土比で相対的に高い点が、燃調感応度の整理で重要です。
                  独立系統のため本土からの融通が前提にならず、エリア内で需給を完結させる必要があります。稼働・燃料市況は時点で変動するため、最新は各公式でご確認ください。本ページでは特定の見通しを断定しません。
                </p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <h3 className="text-base font-semibold text-teal-900">本土非連系（連系線なし）の独立系統</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  沖縄は本土と電力系統が連系されておらず、連系線を通じた他エリアとの電力融通はありません。
                  需給逼迫時の本土からの応援が物理的に前提にならない点は、BCP・電源計画の観点で他エリアと根本的に異なります。
                  西日本クラスターとの価格連動を前提にした読み方は、沖縄には当てはまりません。
                </p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <h3 className="text-base font-semibold text-teal-900">再エネ（太陽光）・離島US・台風BCP</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  日射量の多い沖縄では太陽光の導入が進み、独立系統の運用（出力制御を含む）が需給の背景になります。
                  あわせて離島ユニバーサルサービスと台風常襲地としての停電・復旧リスクが、法人のBCPと直結します。
                  沖縄はJEPX対象外であるため、スポット価格の数値で単価を語るのではなく、燃調・契約条件・自家発／蓄電池を中心に整理します。
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              観光・空港・食品など沖縄の産業構成を踏まえた事情面は{" "}
              <Link href="/region-okinawa-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">沖縄電力エリアの法人電気代事情</Link>
              、沖縄電力という特定企業のプラン体系は{" "}
              <Link href="/okiden-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">沖縄電力（おきでん）の法人向けプラン</Link>
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
              沖縄では観光・ホテル・空港・商業・食品加工などが需要の中心となりやすく、特別高圧・高圧区分の推移が地域の産業競争力に直結します。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-50">
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
              区分ごとの実質単価の重さは、自社の使用実態に当てはめて確認するのが近道です。{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              で沖縄拠点の概算を試算し、{" "}
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較診断</Link>
              でプランの違いを確認できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-6 JEPX */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              JEPX対象外であることの意味（仕入れ指標が本土と異なる）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              沖縄はJEPXスポット対象外です。したがって本土のようにエリアプライスを仕入れコストの目安にする前提がありません。
              下表は、単価を読むときに押さえるべき沖縄固有の構造要因を整理したものです。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">確認観点</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">要約</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">メモ</th>
                  </tr>
                </thead>
                <tbody>
                  {okinawaPriceDrivers.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.label}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.price}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              架空の沖縄エリアプライスは記載しません。契約判断では燃調条件・契約期間・解約条件・省エネ／自家消費／台風BCPを中心に確認してください。本ページでは構造の説明にとどめ、将来の価格水準を断定しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              出典: 公的統計・沖縄電力・OCCTO等の公表情報から整理（2026年度時点）。最新は各公式でご確認ください。
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
              推移を読むうえで、燃料市況・卸価格と切り分けて把握したいのが制度コストです。これらは全国共通で、沖縄エリアにも同様に上乗せされます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <span className="font-semibold">再エネ賦課金</span>：全国一律。2026年度は4.18円/kWhで、近年は上昇基調。制度単価は改定され得るため、2026年度時点の値として最新は各公式でご確認ください。
              </li>
              <li>
                <span className="font-semibold">容量拠出金</span>：2024年度から本格化した比較的新しい制度コスト。高圧・特別高圧の単価に影響します。
              </li>
              <li>
                <span className="font-semibold">託送料金</span>：送配電網の維持・投資に対応する費用で、下がりにくい構造的な上昇圧力です。
              </li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              これらは燃料価格が落ち着いた局面でも実質単価の下支え要因として残るため、「燃料市況が落ち着いても請求が思ったほど下がらない」という体感の背景になります。沖縄のようにJEPX対象外のエリアでは、制度コストと燃調・固定費の比重が意識されやすい点に留意が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-8 見通しの考え方 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              今後の単価の「見通しの考え方」（予測ではなく構造で捉える）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              将来の単価を断定することはできません。ここでは、沖縄エリアの推移を「予測」ではなく「構造要因の組み合わせ」で捉えるための視点を整理します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりうる方向に働く要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・LNG・石炭・原油など火力燃料市況の落ち着き</li>
                  <li>・円高方向への為替変動</li>
                  <li>・火力燃料市況の落ち着きと為替の円高方向</li>
                  <li>・省エネ・自家消費・デマンド管理による実質単価の抑制</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりにくくする要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・再エネ賦課金・容量拠出金など制度コストの上昇・固定化</li>
                  <li>・託送料金の投資対応による上昇圧力</li>
                  <li>・石油火力を含む火力燃料高騰・円安による燃調上振れ</li>
                  <li>・小規模エリアゆえの小売固定費の単価負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              結論としては、燃料要因は上下し得る一方、制度コストは下がりにくく、小売単価の急落は見込みにくいという整理になります。
              将来を断定せず、構造要因で見通しを考え、契約・調達の点検を先に行うのが現実的です。
              自社の位置づけは{" "}
              <Link href="/simulate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>
              や{" "}
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較診断</Link>
              で確認できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 将来の単価・時期を断定するものではありません。最新の市況・告示は各公式でご確認ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 相談CTA（ConsultCta・コンポーネント内h2） */}
          <ConsultCta
            from="okinawa-trend"
            heading="沖縄エリアの電気料金、推移を踏まえて見直せるか無料で相談しませんか？"
            description="一般社団法人エネルギー情報センター（中立・非営利）。推移と自社の使用実態を照らし合わせ、契約・調達の見直し余地を中立的に整理します。初回相談は無料、営業電話はいたしません。"
          />

          {/* H2-9 代表シナリオ */}
          <section className="rounded-xl border border-teal-200 bg-teal-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ：契約見直しによる削減の試算例（沖縄エリア・高圧水準ベース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下は、沖縄エリアの一般的な高圧需要を想定した「契約見直しで得られうる削減」の試算例です。将来の単価を予測するものではなく、
              相見積もり・プラン最適化・デマンド管理・自家消費・BCP電源の検討などで実質単価を改善できた場合の年間・5年累計の目安を示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              前提: 年間削減額（万円）＝ 使用量（万kWh）× 改善単価（円/kWh）、5年累計 ＝ 年間削減額 × 5年。改善単価・使用量は例示で、将来価格の断定ではありません。
            </p>
            <div className="mt-4 space-y-3">
              {savingsScenarios.map((s) => (
                <div key={s.label} className="rounded-xl border border-teal-100 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{s.label}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    改善単価 <span className="font-semibold">{s.improvementYen}円/kWh</span> と仮定した場合：
                    年間 <span className="font-semibold text-teal-800">▲{s.annualSavingMan}万円</span>
                    <span className="text-slate-500">（{s.usageManKwh}万kWh × {s.improvementYen}円/kWh）</span>、
                    <span className="font-semibold text-teal-800">5年累計 ▲{s.annualSavingMan}万円 × 5年 ＝ ▲{s.fiveYearMan}万円</span>。
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              自社の使用量で試算するには{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              、プラン比較は{" "}
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較診断</Link>
              をご活用ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 試算は例示であり、削減を保証するものではありません。実際の効果は契約条件・使用実態により異なります。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-10 チェックリスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              推移を踏まえて沖縄エリアの法人が確認したい5項目
            </h2>
            <ol className="mt-4 space-y-3">
              {checkList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* H2-11 まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このページのまとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
              <li>・沖縄エリアは小売の高圧単価では全国の割高グループに位置づけられやすく、かつJEPX対象外で卸指標の見え方が本土と異なる。</li>
              <li>・沖縄はJEPXスポット対象外のため、架空のエリアプライス数値は記載しない。単価は燃調と自社電源構成で読む。</li>
              <li>・全国平均は2022年に水準が切り上がり、2025年も2019年水準には戻っていない（沖縄も同傾向）。</li>
              <li>・推移は火力の燃料市況・為替・電源構成（独立系統・石油火力）・制度コスト・離島USの組み合わせで動く。本土非連系のため融通前提はない。</li>
              <li>・賦課金（2026年度4.18円/kWh）・容量拠出金など制度コストは下がりにくい。将来は断定せず、構造要因で見通しを考え、契約・調達の点検を先に行うのが現実的。数値は2026年度時点で最新は各公式で要確認。</li>
            </ul>
          </section>
        </div>

        {/* FAQ + 出典 */}
        <div className="mt-8">
          <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-07-18" />
        </div>

        {/* pps-net 参照（外部リンク） */}
        <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">
            ※ 電力単価・エリア別単価の最新動向は{" "}
            <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
            のデータも参照のうえ、契約見直しの判断材料にご活用ください。単価・統計は公開情報ベースの目安で、2026年度時点の最新は各公式でご確認ください。
          </p>
        </div>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            intro="推移の背景・全国比較・エリア総合・特定企業のプランをあわせて確認すると、見直し判断に接続しやすくなります。"
            links={[
              { href: "/region-okinawa-business-electricity", title: "沖縄エリアの法人電気料金事情", description: "沖縄の料金水準・産業構成（事情面の読み分け）。" },
              { href: "/okiden-corporate-electricity-guide", title: "沖縄電力の法人向けプラン", description: "おきでんの契約メニュー・独立系統の詳細。" },
              { href: "/electricity-price-trend-by-area", title: "エリア別（電力会社別）の電気料金推移比較", description: "全国10エリア横断の総論（親ページ）。" },
              { href: "/region-kyushu-electricity-price-trend", title: "九州エリアの電気料金推移", description: "本土エリアとの対比（連系前提の違い）。" },
              { href: "/region-tokyo-electricity-price-trend", title: "東京エリアの電気料金推移", description: "大口需要エリアとの対比。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調が請求に効く仕組み。" },
              { href: "/jepx-explained", title: "JEPXとは", description: "対象外であることの前提確認。" },
              { href: "/electricity-bcp-for-corporates", title: "法人のための電力BCP", description: "台風・停電対応のBCP整備。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機", description: "沖縄拠点の電気代の概算試算。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力の用語集", description: "基本料金・力率の基礎用語。" },
              { href: "/compare", title: "料金メニュー比較診断", description: "プラン比較の入口。" },
              { href: "/simulate", title: "電気料金シミュレーター", description: "上振れリスクの診断。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "2026年度4.18円/kWhの制度コスト。" },
              { href: "/capacity-contribution-explained", title: "容量拠出金とは", description: "高圧・特高の制度コスト。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光", description: "日射量の多い沖縄での選択肢。" },
              { href: "/battery-storage-bcp-peak-cut-hybrid", title: "法人向け蓄電池とBCP", description: "BCPとピークカットの兼用。" },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="沖縄エリアの推移を踏まえて、自社の電気料金を点検する"
            description="小売の割高グループとJEPX対象外という読み分け、独立系統・石油火力依存・台風BCPを前提に、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
            links={[
              { href: "/industry-electricity-calculator", label: "自社の電気代を試算する" },
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </div>
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">沖縄固有：JEPX対象外・独立系統・石油火力・離島・台風BCP</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            本シリーズの他エリア（例: 四国）ではJEPXエリアプライスを仕入れ指標の参考として扱いますが、沖縄はJEPXスポットの対象外です。したがって『エリアプライスが安い／高い』という本土と同じ物差しは使えず、沖縄電力の燃料費調整と自社電源構成（石油火力依存度の高さ）が小売単価の見え方を規定しやすい、という構成で読む必要があります。系統は本土非連系の独立系統であり、連系線による融通が前提のエリアとは需給・BCPの論点が異なります。離島へのユニバーサルサービス費用や、台風時の供給継続・復旧も法人の事業継続計画（BCP）に直結します。再エネ賦課金は全国共通で2026年度4.18円/kWhです。将来価格は断定しません。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            ※ 本節はJEPX対象外である事実と独立系統・燃調感応度の構造整理です。沖縄の架空のJEPXエリアプライスは記載しません。最新の公表情報で要確認。特定の電力会社・契約形態を推奨するものではありません。
          </p>
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
