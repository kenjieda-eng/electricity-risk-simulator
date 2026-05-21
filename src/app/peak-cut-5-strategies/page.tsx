import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["for-executives"];

const pageTitle =
  "業種横断 ピークカット5戦略｜空調・LED・蓄電池・運用改善・契約見直しのROI比較";
const pageDescription =
  "業種横断のピークカット5戦略を解説。高効率空調（ROI 3-5年）、LED照明（ROI 2-3年）、蓄電池（ROI 5-7年）、運用改善（ROI即時）、契約見直し（ROI即時）の比較。規模別事例、補助金活用まで整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ピークカット 戦略",
    "夏 ピークシフト 法人",
    "高効率空調 LED 蓄電池",
    "ピーク削減 ROI",
    "デマンド削減 投資",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/peak-cut-5-strategies",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/peak-cut-5-strategies",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/seasonal-strategy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/seasonal-strategy"],
  },
};

const peakStructure = [
  {
    label: "ピーク電気代の経済インパクト",
    detail:
      "夏季ピーク日（猛暑日）の電気代は通常日の1.5〜2.5倍。中規模オフィスビル（年間電気代1億円）で猛暑日1日あたり追加50〜150万円、年間猛暑日5〜10日で年300〜1,500万円のインパクト。経営判断レベルの論点。",
  },
  {
    label: "契約電力（デマンド）更新リスク",
    detail:
      "高圧契約の契約電力は過去12ヶ月の最大デマンドで自動更新。8月の冷房ピーク日に1回でも契約電力を超過すると、その後12ヶ月の基本料金が10〜20%上振れ。年間で数十万〜数千万円のインパクトを与える。",
  },
  {
    label: "JEPX市場連動のリスク",
    detail:
      "市場連動プラン契約の法人で、夏季電気代が通常月の2〜3倍に上振れる主因。2022年8月のJEPX平均44円/kWhで業界全体に大きな影響。固定プランへの切替がリスク回避の基本。",
  },
  {
    label: "業種別ピーク特性",
    detail:
      "オフィス系（14〜16時ピーク）、製造業（24h稼働ベース＋冷房追加）、商業施設（営業時間ピーク）、データセンター（24h稼働＋冷却負荷）で業種別の最適戦略が異なる。",
  },
  {
    label: "5戦略の優先順位の考え方",
    detail:
      "ROI（投資回収）と即効性で優先順位を決定。即時効果は契約見直し・運用改善、中期効果はLED・空調更新、長期効果は蓄電池・自家消費太陽光。フェーズドアプローチが原則。",
  },
];

const industryBenchmark = [
  {
    label: "業界平均のピークカット効果",
    detail:
      "5戦略を組合せた場合、業界平均で電気代▲15〜25%削減事例。オフィス系で▲20〜30%、製造業で▲10〜18%、商業施設で▲15〜25%、データセンターで▲10〜15%。",
  },
  {
    label: "投資規模と削減効果のパターン",
    detail:
      "中規模法人（年間電気代5億円）で総投資1〜3億円規模、5戦略の組合せで年5,000万〜1.2億円削減事例。投資回収3〜7年、補助金活用で2〜5年に短縮可能。",
  },
  {
    label: "戦略単独の削減効果",
    detail:
      "高効率空調▲8〜15%、LED ▲5〜10%、蓄電池▲5〜10%（ピーク削減）、運用改善▲5〜10%、契約見直し▲3〜8%。組合せ効果で15〜25%達成。",
  },
];

const costFactors = [
  {
    label: "戦略1：高効率空調の特徴",
    detail:
      "ROI 3〜5年（補助金後 1.5〜3年）。中規模オフィスで投資5,000万〜2億円、年1,000万〜5,000万円削減。SII省エネ補助金1/2活用で投資回収短縮。15年使用前提でNPV +1〜3億円規模。",
  },
  {
    label: "戦略2：LED照明の特徴",
    detail:
      "ROI 2〜3年（補助金後 1〜2年）。中規模法人で投資500〜3,000万円、年300〜1,500万円削減。最短回収のため、まずLEDから着手するのが標準。発熱減で空調負荷も同時削減。",
  },
  {
    label: "戦略3：蓄電池の特徴",
    detail:
      "ROI 5〜7年（補助金後 4〜5年）。中規模法人で投資5,000万〜2億円、年1,000万〜3,000万円削減（ピーク削減＋DR収入）。BCP対策との両立。需要家主導型PPA補助金1/2活用。",
  },
  {
    label: "戦略4：運用改善・スケジュール最適化の特徴",
    detail:
      "ROI 即時（投資ほぼ不要）。BEMSと運用ルール整備で年300万〜2,000万円削減。設定温度緩和、空調・照明スケジュール最適化、生産シフト夜間移行など。CFO視点で最優先施策。",
  },
  {
    label: "戦略5：契約見直し・市場連動回避の特徴",
    detail:
      "ROI 即時（投資なし）。市場連動プランから固定プランへの切替で、夏季高騰時の年200〜2,000万円リスク削減。新電力5〜10社からの相見積で更に単価改善。",
  },
];

const strategyComparison = [
  {
    title: "戦略1：高効率空調（投資型・中期）",
    investment: "中規模オフィスで投資5,000万〜2億円。インバータ駆動・最新エコチラー・空冷／水冷ヒートポンプ等への更新。",
    return: "電力▲8〜15%、年1,000万〜5,000万円削減。15年使用前提でNPV +1〜3億円規模。",
    payback: "ROI 3〜5年（SII省エネ補助1/2活用で 1.5〜3年）。",
  },
  {
    title: "戦略2：LED照明（投資型・短期）",
    investment: "中規模法人で投資500〜3,000万円。全照明LED化、調光・人感センサー併用。",
    return: "電力▲5〜10%、年300〜1,500万円削減。発熱減で空調負荷も同時削減。",
    payback: "ROI 2〜3年（補助1/2活用で 1〜2年）。最短回収のため第一着手。",
  },
  {
    title: "戦略3：蓄電池（投資型・長期）",
    investment: "中規模法人で投資5,000万〜2億円。ピーク削減用蓄電池1〜5MWh、DR連動・BCP対策。",
    return: "電力▲5〜10%（ピーク削減）、年1,000万〜3,000万円削減＋DR収入。",
    payback: "ROI 5〜7年（PPA補助1/2活用で 4〜5年）。BCP・CN価値も加味。",
  },
  {
    title: "戦略4：運用改善・スケジュール最適化（即時型）",
    investment: "BEMS導入500〜1,500万円。運用ルール整備のみであれば投資ほぼゼロ。",
    return: "電力▲5〜10%、年300万〜2,000万円削減。設定温度緩和・スケジュール最適化。",
    payback: "ROI 即時〜1年。CFO視点で最優先施策。",
  },
  {
    title: "戦略5：契約見直し・市場連動回避（即時型・無投資）",
    investment: "投資ほぼゼロ（契約手数料程度）。新電力5〜10社からの相見積。",
    return: "電力▲3〜8%、市場高騰回避で年200〜2,000万円リスク削減。",
    payback: "ROI 即時。市場高騰時の保険として最重要。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模法人（年間電気代5,000万〜2億円）",
    profile: "中小オフィス・店舗・小規模工場",
    annualCost: "総投資 500万〜5,000万円、年300万〜2,500万円削減",
    note: "LED→運用改善→契約見直しの3戦略を即時実施。空調更新は中期計画化。投資回収2〜4年。",
  },
  {
    size: "中規模法人（年間電気代2〜10億円）",
    profile: "中堅オフィスビル・工場・商業施設",
    annualCost: "総投資 5,000万〜3億円、年3,000万〜2億円削減",
    note: "5戦略を3年計画で組合せ。LED+運用改善+契約見直しを1年目、空調更新を2-3年目、蓄電池を3年目以降に着手。",
  },
  {
    size: "大規模法人（年間電気代10〜100億円）",
    profile: "大手工場・本社ビル・大規模商業施設",
    annualCost: "総投資 3〜30億円、年2〜20億円削減",
    note: "5戦略フル活用＋自家消費太陽光・オフサイトPPA・DRが標準。投資回収5〜7年、長期固定契約と組合せ。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅オフィスビル（年間21%削減）",
    before: "東京・中堅オフィスビル（年間電気代3億円、契約電力1,500kW）。市場連動プラン継続、LED未更新、空調インバータなし、BEMS未導入。",
    after: "①LED化全面（投資 1,500万円）／②BEMS導入＋運用最適化（投資 800万円）／③固定3年プラン切替／④高効率空調更新（投資 8,000万円、3年計画）／⑤蓄電池1MWh導入（投資 8,000万円、5年計画）。",
    result: "年間電気代 3億円 → 2.37億円（▲21%、▲6,300万円）／契約 kW 1,500→1,300／投資合計1.9億円、補助金1/2活用で実質9,500万円／総合投資回収 2.5年。",
  },
  {
    title: "事例2：中規模製造工場（年間17%削減）",
    before: "中部地区・中規模工場（年間電気代5億円、契約電力2,500kW）。市場連動プランで2022〜2023年に夏季月最大1.5億円の追加負担。",
    after: "①LED化＋運用改善（投資 2,500万円）／②固定5年プラン＋DR参加（投資なし、年250万円収入）／③高効率空調＋廃熱回収（投資 1.5億円）／④自家消費太陽光2MW＋蓄電池1MWh（投資 3億円）／⑤生産シフト夜間移行・冷房戦略最適化。",
    result: "年間電気代 5億円 → 4.15億円（▲17%、▲8,500万円）／DR収入年250万円／契約 kW 2,500→2,200／投資合計4.75億円、補助金1/2活用で実質2.4億円／総合投資回収 3年（補助金後）。",
  },
  {
    title: "事例3：大手商業施設（年間20%削減）",
    before: "東京・大手商業施設（年間電気代25億円、契約電力12,000kW）。長期固定契約継続も冷蔵冷凍＋冷房の二重負荷で夏季電気代高騰。",
    after: "①LED化＋人感センサー＋調光（投資 1.5億円）／②BEMS統合＋運用最適化（投資 5,000万円）／③長期固定10年プラン継続／④高効率冷凍機・空調更新（投資 12億円、5年計画）／⑤蓄電池5MWh＋自家消費太陽光5MW＋DR参加（投資 12億円、補助金後 6億円）。",
    result: "年間電気代 25億円 → 20億円（▲20%、▲5億円）／DR収入年1,500万円／契約 kW 12,000→10,500／投資合計26億円、補助金1/2活用で実質13億円／総合投資回収 4.5年（補助金後）／CO₂削減 約15,000 t/年。",
  },
];

const demandManagement = [
  {
    label: "段階的導入の原則（フェーズドアプローチ）",
    detail:
      "5戦略を一度に導入せず、ROIと即効性で優先順位を付ける。1年目: 契約見直し+運用改善+LED、2年目: 空調更新、3年目以降: 蓄電池・太陽光・DR。各フェーズで効果検証し次フェーズ調整。",
  },
  {
    label: "補助金スケジュールとの整合",
    detail:
      "SII補助金・需要家主導型PPA補助金・GX補助の公募スケジュールに合わせて投資計画を立案。複数補助金の組合せ申請で採択率向上、補助金切れ前の前倒し実施で投資回収短縮。",
  },
  {
    label: "BEMS導入が運用改善の基盤",
    detail:
      "5戦略のうち戦略4（運用改善）の基盤がBEMS（Building Energy Management System）。LED・空調・蓄電池・自家発電を統合制御することで、全戦略の効果を最大化。",
  },
  {
    label: "経営層・現場部門の合意形成",
    detail:
      "5戦略の導入には、CFO（投資判断）・施設管理（運用変更）・現場部門（業務影響）の3者合意が必須。経営層向けROI試算と現場部門向け運用設計を並行進行。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・LED・コンプレッサー・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "5戦略中、戦略1・2・4の主力補助金。複数施策の組合せ申請で採択率向上。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "戦略3（蓄電池）に活用。自家消費太陽光と組合せで投資回収短縮。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "再エネ・蓄電池・統合システム・DR",
    rate: "1/2、上限数十億円",
    note: "大規模法人向け。CN対応との連動で大型補助の対象。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小企業の空調・LED・BEMS更新",
    rate: "2/3、上限数千万円",
    note: "従業員300名以下の中小企業向け。戦略1・2・4の組合せに最適。",
  },
];

const checklistItems = [
  "前年8月の電気代を契約区分・拠点別に集計し、傾向を把握したか",
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "5戦略の自社適用可能性を経営層・現場部門で議論したか",
  "LED未更新の照明設備を洗い出したか",
  "BEMS導入による運用改善効果を試算したか",
  "高効率空調更新の中期計画を策定したか",
  "蓄電池・自家消費太陽光導入の長期計画を策定したか",
  "DR参加・固定プラン切替の即時実施を検討したか",
  "補助金（SII・PPA・GX）のスケジュールを把握したか",
  "5戦略の総合投資回収計画を取締役会・財務責任者に報告したか",
];

const faqItems = [
  { question: "5戦略のどれから着手すべきですか？", answer: "ROIと即効性で優先順位を付けます。1年目: 契約見直し（戦略5）+運用改善（戦略4）+LED（戦略2）を即時実施。2年目: 高効率空調（戦略1）の更新。3年目以降: 蓄電池（戦略3）・自家消費太陽光を中長期計画化。フェーズドアプローチが原則です。" },
  { question: "中規模法人で5戦略の総合投資回収はどれくらいですか？", answer: "中規模法人（年間電気代5億円）で総投資1〜3億円、年間削減3,000万〜2億円、総合投資回収3〜5年（補助金活用で2〜4年）が目安。15年使用前提でNPV +5億〜+20億円規模の事業価値創出。" },
  { question: "5戦略すべてを実施した場合の削減効果はどれくらいですか？", answer: "業界平均で電気代▲15〜25%。オフィス系で▲20〜30%、製造業で▲10〜18%、商業施設で▲15〜25%、データセンターで▲10〜15%。戦略単独では3〜15%の削減ですが、組合せ効果で15〜25%達成可能です。" },
  { question: "蓄電池（戦略3）はROIが長いですが、それでも導入すべきですか？", answer: "ROI 5〜7年と長いが、BCP（事業継続）・CN（カーボンニュートラル）・DR収入の3つの追加価値があります。CFO視点でNPV評価＋ESG投資家対応も加味すれば、中長期計画として導入すべき施策です。需要家主導型PPA補助金1/2活用で投資回収4〜5年に短縮可能。" },
  { question: "BEMS導入は5戦略のどこに位置付けられますか？", answer: "BEMSは戦略4（運用改善）の基盤であり、5戦略全体の制御プラットフォームです。LED・空調・蓄電池・自家発電を統合制御することで、全戦略の効果を最大化。中規模法人で投資500〜1,500万円、年300〜2,000万円削減、ROI 1〜2年。" },
  { question: "DR参加は5戦略のどこに位置付けられますか？", answer: "戦略4（運用改善）と戦略3（蓄電池）の組合せ効果として位置付けられます。蓄電池をDRに登録することで、ピーク削減＋DR収入＋自家消費削減の3層メリット。中規模工場で年300〜1,500万円規模の収益機会。" },
  { question: "5戦略の補助金組合せ申請は可能ですか？", answer: "可能で、複数補助金の組合せが採択率向上の鉄則です。SII省エネ補助金（戦略1・2・4）＋需要家主導型PPA補助金（戦略3）＋GX補助（大規模事業）の組合せで、補助率1/2〜2/3を活用可能。" },
  { question: "投資判断は経営層のどのレベルで承認すべきですか？", answer: "総投資1億円超は取締役会承認、1〜5,000万円は財務責任者承認、5,000万円以下は事業部門責任者承認が一般的。5戦略の総合投資回収計画と感度分析を経営層に報告し、フェーズドアプローチの段階的意思決定を推奨。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "電力広域的運営推進機関（OCCTO）", url: "https://www.occto.or.jp/" },
  { name: "JEPX（日本卸電力取引所）", url: "https://www.jepx.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PeakCut5StrategiesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/peak-cut-5-strategies"
        datePublished="2026-05-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "季節別の電気代対策", url: "https://simulator.eic-jp.org/articles/seasonal-strategy" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/seasonal-strategy" className="underline-offset-2 hover:underline">季節別の電気代対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">業種横断 ピークカット5戦略</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            業種横断 ピークカット5戦略
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            夏季ピーク電気代対策の5戦略（高効率空調・LED照明・蓄電池・運用改善・契約見直し）を業種横断で比較。投資型と即時型のバランス、ROI（投資回収）と削減効果を体系的に整理しました。CFO視点ではフェーズドアプローチ（即時型→中期投資型→長期投資型）が原則で、5戦略の組合せ効果で電気代▲15〜25%削減が業界平均です。本ページでは各戦略の特徴、規模別事例、補助金活用、5戦略の総合導入チェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>5戦略（高効率空調・LED・蓄電池・運用改善・契約見直し）の特徴とROI比較</li>
              <li>業種別・規模別の削減効果と投資回収パターン</li>
              <li>規模別事例3件（中堅オフィス／中規模工場／大手商業施設）</li>
              <li>フェーズドアプローチによる段階的導入</li>
              <li>5戦略向け補助金の組合せ申請</li>
              <li>5戦略総合導入10項目チェックリスト</li>
              <li>CFO向け投資判断フレームワーク</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季ピーク電気代の構造 — 5戦略が必要な理由
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピーク電気代は、契約電力（デマンド）更新リスク、JEPX市場連動リスク、業種別ピーク特性、5戦略の優先順位の考え方の5つの論点で構造化されます。各論点を理解した上で、5戦略のフェーズドアプローチを設計することが経営判断の基礎です。
            </p>
            <div className="mt-4 space-y-3">
              {peakStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の全体像は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                夏季ピーク電気代の基礎とCFO視点
              </Link>
              、DR連動は{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                デマンドレスポンス入門
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の夏季電気代水準・5戦略の削減効果
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略の組合せで電気代▲15〜25%削減が業界平均。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <div className="mt-4 space-y-3">
              {industryBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 経産省・SII採択事例・公開事例から整理。実値は業種・規模・補助金活用度で1.5〜2倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要な夏季電気代上昇要因 — 5戦略の選定論点
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略の選定は、各戦略のROI・即効性・補助金活用・BCP価値・CN価値を総合評価することが重要です。CFO視点では財務NPV評価、現場部門視点では運用負荷評価の両面で判断します。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額の仕組み</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              5戦略のROI比較 — 投資型vs即時型のバランス
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略のROI（投資回収）と削減効果を比較。CFO視点では投資回収期間・NPV・即時効果のバランスで判断すべきです。運用改善・契約見直しは即時効果のため最優先、設備投資は中長期計画として組み込むのが原則です。
            </p>
            <div className="mt-4 space-y-4">
              {strategyComparison.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">投資：</span>{cs.investment}</p>
                    <p><span className="font-semibold text-slate-700">リターン：</span>{cs.return}</p>
                    <p><span className="font-semibold text-emerald-700">回収期間：</span>{cs.payback}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別事例は{" "}
              <Link href="/manufacturing-cooling-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の冷房戦略</Link>
              、{" "}
              <Link href="/office-building-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルのピークカット</Link>
              、{" "}
              <Link href="/datacenter-cooling-optimization" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの冷却最適化</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の総合投資パターン — 小規模／中規模／大規模
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略の総合投資パターンは法人規模で大きく異なります。小規模では即時型3戦略を優先、中規模では3年計画で5戦略を組合せ、大規模では5戦略フル活用＋自家消費太陽光・PPA・DRが標準です。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.profile}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{item.annualCost}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 中堅オフィス／中規模工場／大手商業施設
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。各事例で5戦略のフェーズドアプローチによる総合投資回収を確認できます。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              5戦略のフェーズドアプローチ — 段階的導入の原則
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略を一度に導入せず、ROIと即効性で優先順位を付ける段階的導入が原則。1年目: 契約見直し+運用改善+LED、2年目: 空調更新、3年目以降: 蓄電池・太陽光・DR。各フェーズで効果検証し次フェーズ調整。
            </p>
            <div className="mt-4 space-y-3">
              {demandManagement.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド管理の削減効果試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別5戦略の適用パターン — 製造・オフィス・商業・DC
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略の適用パターンは業種で異なります。製造業は戦略1・3・4・5、オフィスは戦略1・2・4・5、商業施設は戦略1・2・3・4、データセンターは戦略1・3・4・5が中核です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">製造業（戦略1・3・4・5）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率空調＋廃熱回収（戦略1）</li>
                  <li>蓄電池＋DR連動（戦略3）</li>
                  <li>生産シフト夜間移行（戦略4）</li>
                  <li>固定プラン切替（戦略5）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">オフィスビル（戦略1・2・4・5）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率空調更新（戦略1）</li>
                  <li>LED化＋人感センサー（戦略2）</li>
                  <li>BEMS＋スケジュール最適化（戦略4）</li>
                  <li>固定プラン切替（戦略5）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">商業施設・小売（戦略1・2・3・4）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率冷凍機＋空調（戦略1）</li>
                  <li>LED化＋調光（戦略2）</li>
                  <li>蓄電池＋ピーク削減（戦略3）</li>
                  <li>運用最適化＋テナント連動（戦略4）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">データセンター（戦略1・3・4・5）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率空調＋PUE改善（戦略1）</li>
                  <li>蓄電池＋DR連動（戦略3）</li>
                  <li>外気冷房・液浸冷却（戦略4）</li>
                  <li>長期固定契約（戦略5）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（5戦略向け） — SII・PPA・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋GX）で採択率が高くなる傾向。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyPrograms.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                    <p><span className="font-semibold text-slate-700">補助率：</span>{item.rate}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別制度の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              5戦略 総合導入チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略の導入検討前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、フェーズドアプローチの精度が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで5戦略の総合効果を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5戦略の組合せ効果は法人規模・業種・現状の取組み状況で大きく異なります。シミュレーターで自社条件における総合削減効果と投資回収期間を試算し、フェーズドアプローチの計画を立案できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での5戦略の総合削減ポテンシャルを試算する</li>
              <li>各戦略単独・組合せでのROIを比較する</li>
              <li>フェーズドアプローチの3年計画を策定する</li>
              <li>補助金活用時の投資回収短縮を確認する</li>
              <li>事例で示した▲15〜25%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-21"
            />
            <GlossaryLinks currentSlug="peak-cut-5-strategies" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別冷却戦略のハブ。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と主要プログラム比較。" },
              { href: "/manufacturing-cooling-strategy", title: "製造業の冷房戦略", description: "工場・倉庫の温度管理と高効率設備投資判断。" },
              { href: "/office-building-peak-cut", title: "オフィスビルのピークカット", description: "ZEB化・BEMS・テナント連動でピーク削減。" },
              { href: "/datacenter-cooling-optimization", title: "データセンターの冷却最適化", description: "PUE改善・外気冷房・液浸冷却の費用対効果。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "戦略3（蓄電池）の詳細解説。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "戦略3と組合せの太陽光導入。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "戦略5（契約見直し）の判断軸。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "戦略5の選択における比較。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "戦略1・2・4向け主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "戦略3向け需要家主導型PPA補助金。" },
              { href: "/cfo-electricity-cost-basics", title: "CFOのための電気代基礎", description: "5戦略の経営判断フレームワーク。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "戦略5の重要性が高い業種。" },
              { href: "/electricity-cost-seasonal-pattern", title: "電気料金の季節パターン", description: "夏冬の電気代変動の基礎理解。" },
            ]}
          />

          <ContentCta
            heading="自社の5戦略総合導入効果を確認する"
            description="法人規模・業種・現状の取組み状況をもとに、5戦略の総合削減効果と投資回収期間をシミュレーターで試算できます。フェーズドアプローチの3年計画策定にもご活用ください。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
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
