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
// B-83 エリア別 法人電気料金 推移深掘りシリーズ（四国／四国電力エリア）
//  - 本ページ = 「1エリア（四国電力エリア）の推移・単価水準の縦深掘り」
//  - 全国10エリア横断比較の総論は /electricity-price-trend-by-area（親）
//  - エリア総合（市況・新電力動向）は /region-shikoku-business-electricity
//  - 四国電力という特定企業のプランは /yonden-corporate-electricity-guide
//  データ規律: 単価の具体数値は公的統計・JEPX実績の概括のみ。将来価格の断定はしない。
//  賦課金は2026年度4.18円/kWhのみ。2026年度時点・最新の公表情報で要確認。
// =============================================================

const pageTitle =
  "四国エリアの法人電気料金 推移と単価水準｜JEPX全国最低水準・伊方3号機・本四連系の構造（代表シナリオ）";
const pageDescription =
  "四国電力エリア（香川・徳島・愛媛・高知）の法人向け電気料金の推移と単価水準を、公的統計とJEPX実績の概括をもとに整理。小売の高圧単価は全国では割高グループでありながら、JEPX四国エリアプライスは全国最低水準（2026年6月で約7.88円/kWh・前年同月比マイナスは全国で四国のみ）という二面性、伊方3号機の稼働を含む電源構成、本四連系線での融通、製紙・造船・化学の産業構成、賦課金など全国共通の上昇要因を中立的に解説します。将来価格は断定しません。";
const pageUrl =
  "https://simulator.eic-jp.org/region-shikoku-electricity-price-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "四国 法人 電気料金 推移",
    "四国電力エリア 単価 水準",
    "JEPX 四国 エリアプライス 全国最低",
    "伊方原発 3号機 電気料金",
    "本四連系線 融通",
    "四国 電気料金 見通し",
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

// --- JEPX 四国エリアプライスの月次参考（月次振り返り2026-06号と整合） ---
// 出典: JEPX（日本卸電力取引所）月間平均。市場連動プランの仕入れ指標としての参考。
const jepxShikokuRef = [
  { label: "2026年6月", price: "7.88", note: "全国最低水準。前年同月比マイナスは全国で四国のみ。" },
  { label: "2026年5月", price: "7.57", note: "太陽光の余剰で昼間が下がりやすい季節。" },
  { label: "2025年6月", price: "9.20", note: "前年同月。2026年6月は前年より低下（▲1.32円）。" },
];

// --- 単価を動かす構造要因（中立整理） ---
const structuralFactors = [
  {
    factor: "燃料市況（LNG・石炭・原油）",
    detail:
      "四国電力エリアは火力（LNG・石炭等）分の燃料市況が燃料費調整額に反映されます。伊方3号機の稼働により原子力比率が相対的に高位となる局面では、燃調費のプラス幅が中位に抑えられやすい構造です。",
    direction: "上昇・下降の両方向に振れる。原子力稼働局面ではプラス幅が相対的に抑えられやすい。",
  },
  {
    factor: "為替（円安・円高）",
    detail: "火力燃料は輸入依存のため、円安は調達コストを押し上げ、円高は緩和方向に働きます。原子力・水力分は為替の影響を受けにくい部分です。",
    direction: "円安局面では燃調費のプラス幅が拡大しやすいが、原子力稼働が影響を和らげる場面もある。",
  },
  {
    factor: "電源構成（原子力・水力・火力）",
    detail:
      "伊方原子力発電所3号機（出力89万kW・2026年時点で稼働）の稼働状況が、中期的な燃料費の安定度を左右し得ます。定期検査・規制対応による停止時は火力代替が増え、燃調費が上振れしやすくなります。",
    direction: "構造は稼働状況で変化。停止局面では火力分の燃料市況に連動しやすい。",
  },
  {
    factor: "JEPXエリアプライス（卸市場・太陽光出力制御）",
    detail:
      "四国エリアは小規模需要に対し太陽光導入量が大きく、昼間の余剰で出力制御（再エネ抑制）が全国でも起きやすいエリアです。これがJEPX四国エリアプライスを全国最低水準に押し下げる一因で、市場連動プランの仕入れ指標に直結します。",
    direction: "昼間の価格が下がりやすい一方、需給逼迫・燃料市況の変化で振れる。",
  },
  {
    factor: "制度コスト（賦課金・容量拠出金・託送）",
    detail:
      "再エネ賦課金・容量拠出金・託送料金は全国共通の制度コストで、燃料市況や卸価格とは独立に単価へ上乗せされます。四国エリアにも同様に加算されます。",
    direction: "近年は上昇・固定化の方向。燃料や卸価格が落ち着いても下がりにくい。",
  },
];

// --- 契約区分別の推移の特徴 ---
const voltageTrend = [
  {
    type: "特別高圧（2万V以上）",
    feature: "製紙・化学・造船など四国の電力多消費産業向け。燃料市況の影響を受けやすく、上昇局面での変動幅が相対的に大きい。愛媛県東予を中心に大口需要が集積する区分。",
  },
  {
    type: "高圧（6kV）",
    feature: "中規模ビル・工場の中心区分。燃調費・賦課金・容量拠出金の合算で実質単価が押し上げられる。小規模エリアゆえ固定費の単価への乗せ方が相対的に高くなりやすい。",
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
    label: "小規模高圧オフィス（四国・年間25万kWh）",
    usageManKwh: 25,
    improvementYen: 1.4,
    annualSavingMan: 35,
    fiveYearMan: 175,
    note: "全国対応の新電力を含めた相見積もり・燃調条件の点検で単価改善を図る例。（検算：25×1.4＝35、35×5＝175）",
  },
  {
    label: "中規模製紙・食品工場（高圧・年間180万kWh）",
    usageManKwh: 180,
    improvementYen: 1.2,
    annualSavingMan: 216,
    fiveYearMan: 1080,
    note: "デマンド管理・昼間の市場連動部分採用と調達見直しを組み合わせた例。設備投資は別途。（検算：180×1.2＝216、216×5＝1080）",
  },
  {
    label: "大規模需要（高圧〜特別高圧・年間800万kWh）",
    usageManKwh: 800,
    improvementYen: 1.0,
    annualSavingMan: 800,
    fiveYearMan: 4000,
    note: "特高・大口の個別交渉・自家消費を含む中長期の最適化を織り込んだ例。（検算：800×1.0＝800、800×5＝4000）",
  },
];

// --- チェックリスト ---
const checkList = [
  "過去3〜5年の推移で、自社の実質単価（燃調・賦課金・容量拠出金込み）がどう動いたかを把握しているか",
  "小売の高圧単価は全国では割高グループでも、JEPX四国エリアプライスは全国最低水準という二面性を分けて理解しているか",
  "伊方3号機の定期検査・停止局面で火力代替が増える上振れリスクを、年次予算の保守的バッファとして織り込んでいるか",
  "太陽光出力制御で昼間のJEPX価格が下がりやすい特性を、市場連動部分の採否検討に反映しているか",
  "賦課金（2026年度4.18円/kWh）・容量拠出金など、燃料や卸価格が落ち着いても下がりにくい固定的上昇要因を別枠で把握しているか",
];

const faqItems = [
  {
    question: "四国エリアの法人電気料金は、推移として安いのですか？高いのですか？",
    answer:
      "見る指標で答えが変わる「二面性」がある点が四国の特徴です。旧一般電気事業者の標準メニューをベースにした小売の高圧電力量料金でみると、四国電力エリアは全国10エリアの中で割高グループ（概ね17円/kWh前後で語られる区分）に位置します。需要規模が他エリアより小さく、固定費の単価への乗せ方が相対的に高くなりやすい構造があるためです。一方、JEPX（日本卸電力取引所）の四国エリアプライスは全国最低水準で、2026年6月は約7.88円/kWhと前年同月（約9.20円/kWh）を下回り、前年同月比マイナスは全国で四国のみでした。伊方3号機のベースロードと太陽光の出力制御が卸価格を押し下げる構造です。いずれも2026年度時点の公的統計・JEPX実績の概括で、実際の請求単価は契約・使用量・時期で異なるため、最新は各公式でご確認ください。",
  },
  {
    question: "2019〜2025年で、四国エリアの単価はどのように推移しましたか？",
    answer:
      "全国平均でみると、2022年の燃料高騰で特別高圧・高圧を中心に水準が大きく切り上がり、2023〜2025年は急騰前の2019〜2021年水準には戻っていません。四国エリアもこの全国的な高止まりの傾向を共有しています。加えて四国固有の動きとして、伊方3号機の稼働・停止のサイクルが燃調費のプラス幅に効き、卸市場（JEPX）では太陽光の拡大で昼間価格が下がりやすい傾向が強まりました。本ページの数値は公的統計・JEPX実績の概括であり、将来の単価・時期を断定するものではありません。",
  },
  {
    question: "四国エリアの単価が動く主な要因は何ですか？",
    answer:
      "火力分の燃料市況（LNG・石炭）・為替・電源構成（伊方3号機の稼働状況）・JEPXエリアプライス（太陽光出力制御を含む卸市場の動き）・制度コスト（再エネ賦課金・容量拠出金・託送料金）の組み合わせが主因です。四国は原子力の稼働局面では燃調費のプラス幅が中位に抑えられやすい一方、定期検査等での停止局面では火力代替が増え、上振れすることがあります。制度コストは燃料や卸価格が落ち着いても下がりにくい固定的な上昇要因として残ります。",
  },
  {
    question: "伊方3号機の動向は四国エリアの料金にどう関係しますか？",
    answer:
      "伊方原子力発電所3号機（出力89万kW）は四国電力エリアのベースロード電源として重要な位置を占めます。原子力の稼働は燃料費調整額を抑制する効果がある一方、定期検査・規制対応による停止時はLNG・石炭火力の代替稼働で燃調費が増加しやすくなります。稼働状況は規制・手続きの進捗により変わるため、本ページでは特定の稼働見通しを断定しません。稼働状況は時点で変わるので、最新は各公式でご確認ください。契約判断では、燃調条件・契約期間・相見積もりを総合的に評価することが現実的です。",
  },
  {
    question: "JEPX四国エリアプライスが全国最低水準なのはなぜですか？",
    answer:
      "四国エリアは小規模需要に対して太陽光の導入量が大きく、晴天時の昼間に余剰が発生しやすい構造です。系統の受け入れ余力に限界があるため出力制御（再エネ抑制）が全国でも起きやすく、抑制発動時間帯のスポット価格が大きく下がることがあります。加えて伊方3号機のベースロードが供給力を底支えします。これらが重なり、JEPX四国エリアプライスは全国最低水準となりやすく、2026年6月は約7.88円/kWhでした。ただし需給逼迫時や燃料市況の変化で価格が振れることもあり、具体的な価格差は時期・時間帯で大きく変動します。本ページでは傾向・構造の説明にとどめ、将来の価格水準は断定しません。",
  },
  {
    question: "再エネ賦課金は四国エリアの推移にどう効いていますか？",
    answer:
      "再エネ賦課金は全国一律で、2026年度は4.18円/kWhです。近年は上昇基調で、燃料市況や卸価格とは独立に単価へ上乗せされます。四国エリアも他エリアと同様にこの制度コストが加算されます。賦課金や容量拠出金といった制度コストは、燃料価格や卸価格が下がった局面でも実質単価の下支え要因として残るため、推移を読む際は燃料要因・卸市場要因と制度要因を分けて把握することが重要です。制度単価は改定され得るため、2026年度時点の値として最新は各公式でご確認ください。",
  },
  {
    question: "本四連系線は四国エリアの推移にどう関係しますか？",
    answer:
      "四国は本州側との連系線（本四連系線・阿南紀北直流幹線等）を通じて他エリアと電力を融通しています。連系線の運用状況は需給の前提に関わり、四国エリアの卸価格が周辺エリアと連動する度合いにも影響します。西日本クラスターとの連動性が高く、関西・中国エリアの需給や価格と相互に影響し合う場面があります。連系の詳細は時点で変わるため、最新は各公式でご確認ください。本ページでは構造の説明にとどめます。",
  },
  {
    question: "本ページの数値は契約先の選定に使えますか？",
    answer:
      "本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。またエリア間の優劣を断定したり、拠点移転を推奨するものでもありません。掲載の単価は公的統計・JEPX実績の概括・参考水準であり、実際の契約判断は自社の使用実態に基づく見積もり・シミュレーションで行ってください。四国は地元の新電力選択肢が限定的なため、全国対応の事業者を含めた相見積もりが現実的です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit", description: "エリア別の電力単価・統計（公開情報ベースの目安）" },
  { name: "資源エネルギー庁（エネルギー白書・電力調査統計）", url: "https://www.enecho.meti.go.jp/", description: "電力量・単価の年次統計" },
  { name: "JEPX 日本卸電力取引所", url: "https://www.jepx.jp/", description: "エリアプライスの傾向（市場連動プランの仕入れ指標）" },
  { name: "経済産業省", url: "https://www.meti.go.jp/", description: "電力制度・エネルギー政策の一次情報" },
  { name: "環境省", url: "https://www.env.go.jp/", description: "脱炭素・再エネ関連の制度情報" },
];

export default function RegionShikokuElectricityPriceTrendPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-15"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "地域別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-region" },
          { name: "四国エリアの法人電気料金 推移と単価水準" },
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
          <span className="text-slate-800">四国エリアの推移と単価水準</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-teal-700">REGION ／ 推移・単価水準の深掘り</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            四国エリアの法人電気料金 推移と単価水準
          </h1>
          <p className="mt-1 text-base font-medium text-teal-800">JEPX全国最低水準・伊方3号機・本四連系の構造（代表シナリオ）</p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            四国電力エリア（香川・徳島・愛媛・高知の4県）の法人向け電気料金は、小売の高圧単価では全国の割高グループにありながら、
            JEPX（日本卸電力取引所）の四国エリアプライスは全国最低水準という「二面性」が特徴です。2026年6月のJEPX四国は約7.88円/kWhで、
            前年同月比マイナスは全国で四国のみでした。本ページでは、公的統計とJEPX実績の概括をもとに、四国エリアの単価水準がどの位置にあるのか、
            推移を動かす構造要因（伊方3号機の稼働・太陽光出力制御・本四連系・制度コスト）は何か、そして将来を断定しない「見通しの考え方」を中立的に整理します。
            数値は2026年度時点のもので、最新の公表情報で要確認です。
          </p>
        </header>

        {/* 読み分け案内（意図分離） */}
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
          📌 <span className="font-semibold">このページの読み分け</span>：
          全国10エリアを横並びで比較する総論は{" "}
          <Link href="/electricity-price-trend-by-area" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別（電力会社別）の電気料金推移比較</Link>、
          四国エリア全体の市況・新電力動向は{" "}
          <Link href="/region-shikoku-business-electricity" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">四国電力エリアの法人電気代事情</Link>、
          四国電力という特定企業のプラン体系は{" "}
          <Link href="/yonden-corporate-electricity-guide" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">四国電力（よんでん）の法人向けプラン</Link>
          をご覧ください。<span className="font-semibold">本ページは、四国エリアの「推移・単価水準」に特化</span>しています。
        </div>

        <AuthorBadge publishedAt="2026-07-15" updatedAt="2026-07-15" />
        <TableOfContents />

        <div className="mt-6 space-y-6">
          {/* H2-1 全国推移と四国の位置づけ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              全国の法人電気料金推移（2019〜2025）と四国エリアの位置づけ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず全国平均の年次単価で、推移の大きな流れを確認します。下表は再エネ賦課金を含まない年平均単価（円/kWh）で、2022年を境に水準が切り上がり、
              2025年時点でも2019年水準には戻っていないことが読み取れます。四国エリアも、この全国的な高止まりの傾向を共有していますが、
              小売の高圧単価では全国の割高グループにありながら、卸市場（JEPX）では全国最低水準という二面性を持つ点が特徴です。
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
              四国エリアの単価水準はどの位置にあるか（小売とJEPX卸の二面性）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              四国の単価水準は、見る指標によって位置づけが変わる点に注意が必要です。旧一般電気事業者の標準メニューをベースにした<span className="font-semibold">小売の高圧電力量料金</span>でみると、
              四国電力エリアは全国10エリアの中で<span className="font-semibold">割高グループ</span>（参考水準として概ね17円/kWh前後で語られる区分）に位置します。
              需要規模が他エリアより小さく、固定費の単価への乗せ方が相対的に高くなりやすい構造があるためです。
              一方、<span className="font-semibold">JEPX（日本卸電力取引所）の四国エリアプライス</span>は全国最低水準で、伊方3号機のベースロードと太陽光の出力制御が卸価格を押し下げます。
              この「小売は割高グループ・卸は全国最低」という二面性が四国エリアの推移を読むうえでの要点です。これは統計上の相対位置の概括であり、エリア間の優劣を断定するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">小売の相対位置</p>
                <p className="mt-1 text-sm text-slate-700">高圧の小売単価は全国では割高グループ。参考水準として概ね17円/kWh前後で語られる区分。小規模エリアゆえ固定費の乗せ方が相対的に高い。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">JEPX卸の相対位置</p>
                <p className="mt-1 text-sm text-slate-700">四国エリアプライスは全国最低水準。2026年6月は約7.88円/kWhで、前年同月比マイナスは全国で四国のみ。太陽光出力制御と原子力が押し下げ要因。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-xs font-semibold text-slate-800">上振れのリスク</p>
                <p className="mt-1 text-sm text-slate-700">伊方3号機の定期検査・停止局面では火力代替が増え、燃調費が上振れするリスク。原子力稼働が推移の変数として効く点が四国固有。</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              出典: 資源エネルギー庁・JEPX等の公表統計・実績から整理（2026年度時点）。参考水準であり、実際の請求単価は契約内容・使用時間帯により異なります。最新は各公式でご確認ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ エリア間の「安い／高い」は統計上の相対位置の概括であり、拠点移転等を推奨するものではありません。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* H2-3 構造要因 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              四国エリアで単価を動かす構造要因（燃料市況・為替・電源構成・JEPX・制度）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価の推移は、偶然ではなく構造的な要因の組み合わせで動きます。四国エリアで特に効きやすいのは、伊方3号機の稼働状況と、太陽光出力制御を含むJEPXエリアプライスの動きです。
              火力分の燃料市況や為替も効きますが、その影響は原子力の稼働局面では相対的に和らげられます。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">要因</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">四国エリアでの効き方</th>
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

          {/* H2-4 電源構成と四国固有の事情 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電源構成と四国エリア固有の事情（伊方3号機・本四連系・太陽光出力制御）
            </h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <h3 className="text-base font-semibold text-teal-900">伊方原子力発電所3号機の動向（2026年度時点）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  伊方3号機（出力89万kW）は四国電力エリアのベースロード電源として重要な位置を占め、2026年度時点で稼働しています。
                  原子力の稼働は燃料費調整額を抑制する効果がある一方、定期検査・規制対応による停止時はLNG・石炭火力の代替稼働で燃調費が増加しやすくなります。
                  稼働状況は規制・手続きの進捗により変わり時点で変動するため、最新は各公式でご確認ください。本ページでは特定の稼働見通しを断定しません。
                </p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <h3 className="text-base font-semibold text-teal-900">本四連系線での他エリア融通</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  四国は本州側との連系線（本四連系線・阿南紀北直流幹線等）を通じて他エリアと電力を融通しています。
                  西日本クラスターとの連動性が高く、関西・中国エリアの需給や卸価格と相互に影響し合う場面があります。
                  連系線の運用状況は需給の前提に関わるため、卸価格を読む際の背景として押さえておくと有効です。
                </p>
              </div>
              <div className="rounded-xl border border-teal-100 bg-teal-50 p-4">
                <h3 className="text-base font-semibold text-teal-900">太陽光出力制御とJEPX全国最低水準</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  四国エリアは小規模需要に対し太陽光の導入量が大きく、晴天時の昼間に余剰が発生しやすい構造です。系統の受け入れ余力に限界があるため出力制御（再エネ抑制）が全国でも起きやすく、
                  抑制発動時間帯のスポット価格が大きく下がることがあります。伊方3号機のベースロードと相まって、JEPX四国エリアプライスは全国最低水準となりやすく、2026年6月は約7.88円/kWhでした。
                  推移を読む際は「原子力・太陽光による卸価格の低さ」と「原子力停止時の火力代替による上振れリスク」を両面で捉えることが重要です。
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              製紙・造船・化学など四国の産業構成を踏まえた事情面は{" "}
              <Link href="/region-shikoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">四国電力エリアの法人電気代事情</Link>
              、四国電力という特定企業のプラン体系は{" "}
              <Link href="/yonden-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">四国電力（よんでん）の法人向けプラン</Link>
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
              四国では愛媛県東予を中心に製紙・化学・造船など電力多消費産業が集積しており、特別高圧・高圧区分の推移が地域の産業競争力に直結します。
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
              で四国拠点の概算を試算し、{" "}
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
              JEPX 四国エリアプライスの傾向（全国最低水準の構造）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを検討する場合、JEPX（日本卸電力取引所）の四国エリアプライスが仕入れコストの目安になります。
              四国エリアは伊方3号機のベースロードと太陽光の出力制御が重なり、エリアプライスは全国最低水準で推移する傾向があります。
              下表は月次振り返り（2026-06号）の月間平均を参考として整理したものです。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead>
                  <tr className="bg-teal-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">月（JEPX四国・月間平均）</th>
                    <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">円/kWh</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">メモ</th>
                  </tr>
                </thead>
                <tbody>
                  {jepxShikokuRef.map((row, i) => (
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
              2026年6月のJEPX四国は約7.88円/kWhで、前年同月（約9.20円/kWh）を約1.32円下回りました。JEPXシステムプライスの6月月間平均が前年比で大きく上昇するなか、
              前年同月比マイナスは全国で四国のみで、東西の価格差が鮮明でした。ただし需給逼迫時や燃料市況の変化で価格が振れることもあり、具体的な価格差はその時々の需給・時間帯で大きく変動します。
              本ページでは傾向・構造の説明にとどめ、将来の価格水準を断定しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              出典: JEPX（日本卸電力取引所）月間平均・月次振り返り2026-06号から整理（2026年度時点）。市場連動型を検討する場合は、価格変動リスクの範囲を必ず確認してください。最新は各公式でご確認ください。
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
              推移を読むうえで、燃料市況・卸価格と切り分けて把握したいのが制度コストです。これらは全国共通で、四国エリアにも同様に上乗せされます。
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
              これらは燃料価格や卸価格が落ち着いた局面でも実質単価の下支え要因として残るため、「卸市場は全国最低なのに請求は思ったほど安くならない」という体感の背景になります。
              四国のようにJEPX卸が全国最低水準のエリアでも、小売の実質単価では制度コストの比重が意識されやすい点に留意が必要です。
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
              将来の単価を断定することはできません。ここでは、四国エリアの推移を「予測」ではなく「構造要因の組み合わせ」で捉えるための視点を整理します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりうる方向に働く要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・LNG・石炭・原油など火力燃料市況の落ち着き</li>
                  <li>・円高方向への為替変動</li>
                  <li>・伊方3号機の安定稼働による燃料費依存度の低下</li>
                  <li>・太陽光の拡大による昼間のJEPX価格の低下</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">下がりにくくする要因</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>・再エネ賦課金・容量拠出金など制度コストの上昇・固定化</li>
                  <li>・託送料金の投資対応による上昇圧力</li>
                  <li>・伊方3号機の定期検査・停止時の火力代替コストの増加</li>
                  <li>・小規模エリアゆえの小売固定費の単価負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              結論としては、燃料要因・卸市場要因は上下し得る一方、制度コストは下がりにくく、小売単価の急落は見込みにくいという整理になります。
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
            from="region-shikoku-price-trend"
            heading="四国エリアの電気料金、推移を踏まえて見直せるか無料で相談しませんか？"
            description="一般社団法人エネルギー情報センター（中立・非営利）。推移と自社の使用実態を照らし合わせ、契約・調達の見直し余地を中立的に整理します。初回相談は無料、営業電話はいたしません。"
          />

          {/* H2-9 代表シナリオ */}
          <section className="rounded-xl border border-teal-200 bg-teal-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ：契約見直しによる削減の試算例（四国エリア・高圧水準ベース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下は、四国エリアの一般的な高圧需要を想定した「契約見直しで得られうる削減」の試算例です。将来の単価を予測するものではなく、
              相見積もり・プラン最適化・デマンド管理・昼間の市場連動部分の活用などで実質単価を改善できた場合の年間・5年累計の目安を示します。
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
              推移を踏まえて四国エリアの法人が確認したい5項目
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
              <li>・四国エリアは「小売の高圧単価は全国の割高グループ（概ね17円/kWh前後）」でありながら「JEPX四国エリアプライスは全国最低水準」という二面性を持つ。</li>
              <li>・JEPX四国は2026年6月で約7.88円/kWh。前年同月（約9.20円/kWh）を約1.32円下回り、前年同月比マイナスは全国で四国のみ。</li>
              <li>・全国平均は2022年に水準が切り上がり、2025年も2019年水準には戻っていない（四国も同傾向）。</li>
              <li>・推移は火力の燃料市況・為替・電源構成（伊方3号機）・JEPX（太陽光出力制御）・制度コストの組み合わせで動く。本四連系線での融通も背景。</li>
              <li>・賦課金（2026年度4.18円/kWh）・容量拠出金など制度コストは下がりにくい。将来は断定せず、構造要因で見通しを考え、契約・調達の点検を先に行うのが現実的。数値は2026年度時点で最新は各公式で要確認。</li>
            </ul>
          </section>
        </div>

        {/* FAQ + 出典 */}
        <div className="mt-8">
          <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-07-15" />
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
              { href: "/region-shikoku-business-electricity", title: "四国エリアの法人電気料金事情", description: "四国の料金水準・産業構成（事情面の読み分け）。" },
              { href: "/yonden-corporate-electricity-guide", title: "四国電力の法人向けプラン", description: "四国電力の契約メニュー。" },
              { href: "/electricity-price-trend-by-area", title: "エリア別（電力会社別）の電気料金推移比較", description: "全国10エリア横断の総論（親ページ）。" },
              { href: "/region-kansai-electricity-price-trend", title: "関西エリアの電気料金推移", description: "隣接エリアの推移比較。" },
              { href: "/region-chugoku-electricity-price-trend", title: "中国エリアの電気料金推移", description: "本四連系で結ばれる隣接エリア。" },
              { href: "/region-kyushu-electricity-price-trend", title: "九州エリアの電気料金推移", description: "西日本エリアの推移比較。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機", description: "四国拠点の電気代の概算試算。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力の用語集", description: "基本料金・力率の基礎用語。" },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="四国エリアの推移を踏まえて、自社の電気料金を点検する"
            description="小売の割高グループとJEPX卸の全国最低水準という二面性、伊方3号機の稼働リスクを前提に、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
            links={[
              { href: "/industry-electricity-calculator", label: "自社の電気代を試算する" },
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
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
