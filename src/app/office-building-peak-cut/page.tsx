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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];

const pageTitle =
  "オフィスビルのピークカット｜ZEB化・BEMS活用・テナント連動・共用部電力管理";
const pageDescription =
  "オフィスビル（自社ビル・テナントビル・本社）の夏季ピークカット戦略を解説。ZEB化（Zero Energy Building）、空調最適化（BEMS活用）、テナント企業との連動、共用部電力管理、規模別事例、補助金活用まで実務的に整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "オフィスビル ピークカット",
    "ZEB 法人",
    "BEMS オフィス",
    "テナント 電力 連動",
    "共用部 電力 管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/office-building-peak-cut",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/office-building-peak-cut",
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
    label: "オフィスビルの夏季電力構造",
    detail:
      "オフィスビル電力は空調（50〜60%）／照明（15〜25%）／OA機器（10〜15%）／給排水・エレベーター（5〜10%）／その他（5%）で構成。夏季はピーク14〜16時の冷房負荷が突出し、通年比+25〜45%の上振れ。",
  },
  {
    label: "自社ビルvs賃借ビルの差異",
    detail:
      "自社ビルは投資・運用すべて自社判断、ZEB化・自家消費太陽光・蓄電池導入の長期投資が可能。賃借ビルは共用部はビル管理会社契約、専有部のみ自社契約。テナント連動やBEMS導入で対策。",
  },
  {
    label: "共用部vs専有部の電力管理",
    detail:
      "共用部（エレベーター・廊下・空調機械室）はビルオーナー契約、専有部（各テナント区画）はテナント別契約。電気代の3〜4割が共用部、テナント全体の協力なしには対策が制限される。",
  },
  {
    label: "BEMS（Building Energy Management System）活用",
    detail:
      "BEMSによる空調・照明・コンセント電力の統合制御で、電力使用量▲15〜25%削減。中規模オフィスビル（年間電気代3億円）で年4,500〜7,500万円規模の削減事例。SII補助1/2活用で投資回収1.5〜2.5年。",
  },
  {
    label: "テナント企業との連動",
    detail:
      "テナント企業のリモートワーク併用、空調設定温度緩和（26→28℃）、サマータイム勤務など、テナント側の協力でビル全体のピーク削減が可能。CFO・ファシリティ部門・テナント企業の3者協議が必須。",
  },
];

const industryBenchmark = [
  {
    label: "オフィスビルの夏季電気代水準",
    detail:
      "オフィスビル全体（共用部+専有部）で対通年+25〜45%。年間電気代に占める夏季3ヶ月（7〜9月）の比率は40〜45%。猛暑日の電気代は通常日の1.5〜2倍に上振れる。",
  },
  {
    label: "ビル規模別の年間使用量",
    detail:
      "小規模オフィスビル（延床1,000〜3,000m²）で年間60〜250万kWh、中規模（3,000〜15,000m²）で年間250〜1,500万kWh、大規模（15,000〜50,000m²）で年間1,500〜5,000万kWh、超大規模（50,000m²超）で年間5,000万kWh超。",
  },
  {
    label: "ZEB化の到達レベル別電気代削減",
    detail:
      "ZEB Oriented（▲40%）／ZEB Ready（▲50%）／Nearly ZEB（▲75%）／ZEB（▲100%、再エネ含む）。新築・大規模改修時に検討。投資回収7〜15年、補助金活用で5〜10年。",
  },
];

const costFactors = [
  {
    label: "夏季気温上昇と空調負荷増",
    detail:
      "過去30年で日本の夏季平均気温は約1.5℃上昇、猛暑日が2.5倍に増加。オフィスビル冷房需要が拡大、ピーク電力使用量がトレンド的に上昇。10年前と同じビルでも電気代は20〜30%増。",
  },
  {
    label: "リモートワーク併用による電力構造変化",
    detail:
      "コロナ後のリモートワーク併用で、実出社率50〜70%が定着しているオフィスでは電力使用量が▲20〜30%減少。一方で『出社日集中』により、特定日のピークが高まる現象も。BEMS活用が必須。",
  },
  {
    label: "テナント企業のESG要求",
    detail:
      "外資系・大手テナントから『再エネ100%対応ビル』『ZEB認証ビル』が要求される時代に。CN対応のため、ZEB化・グリーン電力調達・テナント還元プログラムの整備が経営課題。",
  },
  {
    label: "電化シフトと電力需要増",
    detail:
      "ガス暖房→電気ヒートポンプ暖房・コージェネからの電力依存度上昇など、ビル電化シフトで電力使用量が増加。夏季冷房負荷との合計で年間電力使用量が増加トレンド。",
  },
  {
    label: "BEMS技術の進化",
    detail:
      "AI予測・IoTセンサー・クラウド統合のBEMS最新世代で、従来比で削減効果が1.5〜2倍に拡大。投資コスト低下と削減効果向上で、中規模ビルでの導入が標準化。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模オフィスビル（延床1,000〜3,000m²、年間電気代2,000万〜8,000万円）",
    profile: "中小企業本社ビル・テナント数3〜10社",
    annualCost: "投資 500万〜2,000万円で年200万〜800万円削減",
    note: "LED＋空調個別制御＋固定プラン切替を即時実施。BEMSは検討段階。投資回収2〜3年。",
  },
  {
    size: "中規模オフィスビル（延床3,000〜15,000m²、年間電気代8,000万〜4億円）",
    profile: "中堅企業本社・複合テナントビル・テナント数10〜50社",
    annualCost: "投資 2,000万〜2億円で年800万〜1億円削減",
    note: "LED＋BEMS＋高効率空調＋契約見直しを3年計画で組合せ。ZEB Oriented化も検討。",
  },
  {
    size: "大規模オフィスビル（延床15,000m²超、年間電気代4〜30億円）",
    profile: "大手本社ビル・ランドマークビル・REIT保有ビル",
    annualCost: "投資 2〜30億円で年1〜10億円削減",
    note: "ZEB Ready/Nearly ZEB化＋自家消費太陽光＋蓄電池＋DR参加＋テナント連動が標準。CN/ESG対応との連動。",
  },
];

const caseStudies = [
  {
    title: "事例1：中規模オフィスビル（年間20%削減）",
    before: "東京・中規模オフィスビル（延床8,000m²、年間電気代1.5億円、契約電力600kW）。市場連動プラン継続、BEMS未導入、空調個別制御なし、LED未更新。",
    after: "①BEMS導入＋運用最適化（投資 1,200万円）／②LED化全面（投資 800万円）／③固定3年プラン切替／④高効率空調更新（投資 6,000万円、3年計画）／⑤テナント連動の設定温度ガイドライン整備。",
    result: "年間電気代 1.5億円 → 1.2億円（▲20%、▲3,000万円）／契約 kW 600→520／投資合計8,000万円、補助金1/2活用で実質4,000万円／総合投資回収 1.5年（補助金後）／テナント満足度向上による稼働率改善。",
  },
  {
    title: "事例2：大手本社ビル（ZEB Ready化、年間50%削減）",
    before: "東京・大手本社ビル（延床35,000m²、年間電気代8億円、契約電力3,500kW）。長期固定契約継続もESG投資家対応でZEB化が経営課題。",
    after: "①ZEB Ready改修（投資 30億円、補助1/2活用）／②自家消費太陽光1MW（屋上）＋蓄電池0.5MWh／③オフサイトPPA3MW（再エネ100%対応）／④BEMS統合制御＋AI予測／⑤DR参加。",
    result: "年間電気代 8億円 → 4億円（▲50%、▲4億円）／DR収入年600万円／契約 kW 3,500→2,500／投資合計35億円、補助金1/2活用で実質17.5億円／総合投資回収 4.5年（補助金後）／CO₂削減 約12,000 t/年／ESG投資家対応強化。",
  },
  {
    title: "事例3：大規模テナントビル（REIT保有）（年間18%削減）",
    before: "大阪・大規模テナントビル（延床25,000m²、年間電気代5億円、契約電力2,500kW）。REIT保有、テナント満足度向上が経営課題。長期固定契約継続もテナントからの再エネ要求拡大。",
    after: "①BEMS統合制御（投資 5,000万円）／②LED化全面（投資 2,000万円）／③屋上太陽光800kW＋オフサイトPPA2MW（再エネ100%対応）／④テナント還元プログラム（再エネ証書テナント別配賦）／⑤共用部高効率空調更新。",
    result: "年間電気代 5億円 → 4.1億円（▲18%、▲9,000万円）／契約 kW 2,500→2,200／投資合計7億円、補助金1/2活用で実質3.5億円／総合投資回収 4年（補助金後）／テナント稼働率2%向上による収益増。",
  },
];

const demandManagement = [
  {
    label: "BEMSによる統合制御",
    detail:
      "BEMSで空調・照明・コンセント電力を統合制御。在室検知・スケジュール連動・外気温連動制御で電力▲15〜25%削減。中規模ビルで年800万〜1億円削減事例。",
  },
  {
    label: "テナント連動の設定温度ガイドライン",
    detail:
      "テナント企業との合意のもと、夏季設定温度28℃ガイドラインを実施。空調負荷▲15〜20%削減。テナント側のリモートワーク併用・サマータイム勤務との連動。",
  },
  {
    label: "共用部の高効率化",
    detail:
      "共用部（エレベーター・廊下・空調機械室）のLED化＋空調更新＋エレベーター省エネ運転で、共用部電力▲20〜30%削減。ビル全体電気代▲5〜10%。",
  },
  {
    label: "リモートワーク日の空調・照明自動シャットダウン",
    detail:
      "出社率50〜70%の中で『出社日集中』を活用し、リモートワーク日（金曜等）は空調・照明を一部停止。BEMS連動で自動化、月の電力▲5〜10%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / オフィス・事業場型）",
    target: "BEMS・高効率空調・LED・断熱性能向上",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "オフィスビルの主力補助金。BEMS導入＋空調更新の組合せ申請で採択率高い。",
  },
  {
    name: "ZEB化補助金（環境省・経産省）",
    target: "ZEB Oriented/Ready/Nearly ZEB化",
    rate: "1/2〜3/5、上限数億円",
    note: "新築・大規模改修時のZEB認証取得で活用可能。投資家・テナント要求対応に整合的。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "屋上太陽光・蓄電池・オフサイトPPA",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "REIT/大型自社ビルで活用可能。屋上面積大の商業ビル・オフィスビルで投資回収短縮。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小オフィスビルの設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員300名以下の中小企業向け。LED・空調更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "ビルの種別（自社／賃借／REIT保有）と電力契約構造を確認したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "BEMS導入による電力削減効果を試算したか",
  "テナント企業との設定温度ガイドライン合意を進めたか",
  "共用部の高効率化（LED・空調・エレベーター）を検討したか",
  "屋上太陽光（300kW〜2MW）の導入試算を実施したか",
  "ZEB化（Oriented/Ready/Nearly ZEB）の検討を行ったか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "ESG投資家・テナント向けにグリーン電力調達計画を立てたか",
];

const faqItems = [
  { question: "オフィスビルの夏季電気代は通年比でどれくらい上がりますか？", answer: "対通年+25〜45%が業界平均です。年間電気代に占める夏季3ヶ月（7〜9月）の比率は40〜45%、猛暑日の電気代は通常日の1.5〜2倍に上振れます。" },
  { question: "BEMS導入で本当に電気代を下げられますか？", answer: "可能です。BEMSによる空調・照明・コンセント電力の統合制御で電力▲15〜25%削減事例多数。中規模オフィスビル（年間電気代3億円）で年4,500〜7,500万円規模の削減、SII補助1/2活用で投資回収1.5〜2.5年。AI予測機能搭載の最新BEMSでは更に削減効果拡大。" },
  { question: "賃借ビルでもピークカット対策は可能ですか？", answer: "可能です。専有部のLED化・BEMS導入・設定温度ガイドライン・サマータイム勤務は自社判断で実施可能。共用部はビル管理会社との協議が必要ですが、テナント全体での要請でビル全体の改善も期待できます。" },
  { question: "ZEB化はどれくらいのコスト削減になりますか？", answer: "ZEB Oriented（▲40%）／ZEB Ready（▲50%）／Nearly ZEB（▲75%）／ZEB（▲100%、再エネ含む）の削減効果。大手本社ビルで年4億円削減（年間電気代8億円→4億円）の事例。投資回収7〜15年、補助金活用で5〜10年。" },
  { question: "テナント連動の設定温度ガイドラインはどう進めるべきですか？", answer: "①テナント企業との協議会設置、②夏季設定温度28℃ガイドライン合意、③クールビズ推奨、④リモートワーク日の空調停止、⑤定期的な効果報告。空調負荷▲15〜20%削減、テナント満足度も向上する事例多数。" },
  { question: "屋上太陽光はオフィスビルで投資回収できますか？", answer: "屋上面積1,500m²以上で検討余地。500kW太陽光で年55〜65万kWh発電、年550〜650万円削減、投資回収7〜10年（補助金後5〜7年）が目安。テナント還元プログラムと組合せでESG価値も。" },
  { question: "REIT/不動産ファンド保有ビルの対応は？", answer: "ESG投資家対応で再エネ100%・ZEB認証が標準化。BEMS統合制御＋屋上太陽光＋オフサイトPPA＋テナント還元プログラムの組合せで投資価値向上＋テナント稼働率向上の両立。年18%削減事例多数。" },
  { question: "オフィスビル向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（BEMS・空調・LED）、ZEB化補助金（新築・大規模改修）、需要家主導型PPA補助金（屋上太陽光）、中小企業補助の4本柱です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "環境省（ZEB事業）", url: "https://www.env.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "一般社団法人 ビルディング協会連合会", url: "https://www.bma.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function OfficeBuildingPeakCutPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/office-building-peak-cut"
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
          <span className="text-slate-800">オフィスビルのピークカット</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            オフィスビルのピークカット
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビル（自社ビル・テナントビル・本社）の夏季ピークカットは、ZEB化、BEMS活用、テナント企業との連動、共用部電力管理の4論点を組合せて最適化します。コロナ後のリモートワーク併用、テナント企業のESG要求、ZEB認証ビルへの投資家関心拡大で、オフィスビルの電力管理は経営戦略の中核になりつつあります。本ページでは自社ビル・賃借ビル・REIT保有ビルの差異、BEMS導入効果、ZEB化レベル別削減、テナント連動戦略、規模別事例、補助金活用までを実務に直結する観点で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>オフィスビルの夏季電力構造と自社ビル・賃借ビルの差異</li>
              <li>共用部・専有部の電力管理体制</li>
              <li>BEMS活用による統合制御と削減効果（▲15〜25%）</li>
              <li>テナント連動の設定温度ガイドライン</li>
              <li>ZEB化レベル別削減効果（Oriented〜ZEB）</li>
              <li>規模別事例3件（中規模ビル／大手本社ZEB／REIT保有ビル）</li>
              <li>オフィスビル向け補助金とチェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              オフィスビルの夏季電力構造 — 自社・賃借・共用部・専有部
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルの夏季電力構造は『電力構成（空調50〜60%中心）／自社vs賃借／共用部vs専有部／BEMS活用／テナント連動』の5論点で構造化されます。ビル種別と契約構造の理解が、効果的なピークカット戦略の基礎です。
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
              、5戦略の全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                業種横断ピークカット5戦略
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均のオフィスビル夏季電気代水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルの夏季電気代水準はビル規模・種別で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 経産省・環境省ZEB事業・ビルディング協会連合会から整理。実値はビル種別・延床面積で1.5〜2倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要なオフィスビル夏季電気代上昇要因 — 気温・リモート・ESG・電化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルの夏季電気代上昇は、気温上昇トレンド、リモートワーク併用の構造変化、テナントESG要求、電化シフト、BEMS技術進化という構造的要因が並列します。
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
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の投資パターン — 小規模／中規模／大規模ビル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルのピークカット投資はビル規模で大きく異なります。小規模ではLED＋空調個別制御＋固定プラン切替、中規模ではLED＋BEMS＋高効率空調を3年計画で組合せ、大規模ではZEB Ready/Nearly ZEB化＋自家消費太陽光＋蓄電池＋DRが標準です。
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
              規模別事例3件 — 中規模ビル／大手本社ZEB／REIT保有ビル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。各事例でビル種別・投資規模に応じた最適戦略を確認できます。
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
              オフィスビルのデマンド管理 — BEMS・テナント連動・共用部
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルのデマンド管理は『BEMS統合制御』『テナント連動の設定温度ガイドライン』『共用部高効率化』『リモートワーク日の自動シャットダウン』の4論点を組合せて最適化します。
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
              ZEB化の到達レベル別戦略 — Oriented／Ready／Nearly ZEB／ZEB
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ZEB（Zero Energy Building）は到達レベル別に4段階あり、投資規模・削減効果・対象ビル規模が異なります。新築・大規模改修時に検討する長期投資施策です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ZEB Oriented（▲40%）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>10,000m²以上の大規模ビル向け</li>
                  <li>BEMS＋高効率設備＋自然採光</li>
                  <li>投資回収7〜10年</li>
                  <li>ZEB認証取得の初段階</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ZEB Ready（▲50%）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>断熱性能向上＋高効率設備フル活用</li>
                  <li>BEMS＋AI予測制御</li>
                  <li>投資回収10〜13年</li>
                  <li>再エネなしでの最高水準</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Nearly ZEB（▲75%）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ZEB Ready＋自家消費太陽光</li>
                  <li>蓄電池併設で安定供給</li>
                  <li>投資回収12〜15年</li>
                  <li>大型本社ビル向け</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ZEB（▲100%）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>消費電力＝再エネ供給で実質ゼロ</li>
                  <li>オフサイトPPA＋自家消費太陽光</li>
                  <li>投資回収15〜20年</li>
                  <li>シンボリックなランドマークビル</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              テナント連動戦略 — 設定温度ガイドライン・還元プログラム
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              テナント連動戦略はオフィスビルのピークカットで最も効果的かつ低投資な施策。テナント企業との合意形成と実施フォローアップが成功の鍵です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">設定温度ガイドライン</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季28℃設定の合意</li>
                  <li>クールビズ推奨</li>
                  <li>リモートワーク日活用</li>
                  <li>空調負荷▲15〜20%削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">テナント還元プログラム</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>再エネ電力をテナント別配賦</li>
                  <li>再エネ証書発行</li>
                  <li>テナント側ESG対応</li>
                  <li>稼働率向上の差別化</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産業の関連は{" "}
              <Link href="/real-estate-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">不動産業の電気料金見直し</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（オフィスビル向け） — SII・ZEB・PPA・中小企業
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビル向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。複数補助金の組合せ申請（SII＋ZEB＋PPA）で採択率が高くなる傾向。
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
              オフィスビル ピークカットチェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルのピークカット戦略立案前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、ビル全体の最適化が制限されます。
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
              シミュレーターでオフィスビルのピークカット効果を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルの夏季電気代はビル種別・契約構造・テナント数で大きく異なります。シミュレーターで自社条件における夏季上振れ幅と、BEMS・ZEB化・テナント連動のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスクを確認する</li>
              <li>BEMS導入のROIと削減効果を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>ZEB化レベル別の投資回収シナリオを比較する</li>
              <li>事例で示した▲18〜50%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="office-building-peak-cut" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別冷却戦略のハブ。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と主要プログラム比較。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/manufacturing-cooling-strategy", title: "製造業の冷房戦略", description: "工場・倉庫の温度管理と高効率設備投資判断。" },
              { href: "/datacenter-cooling-optimization", title: "データセンターの冷却最適化", description: "PUE改善・外気冷房・液浸冷却の費用対効果。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "オフィスビル業種別電力プロファイル詳細。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "中小オフィス向け基本戦略。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "REIT/PM業の電力契約管理。" },
              { href: "/consulting-electricity-cost-review", title: "コンサルティング業の電気料金見直し", description: "オフィス中心業種の関連事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "オフィスビルの固定プラン選択。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上太陽光の投資回収試算。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "本社・支店ビルの一括契約戦略。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "BEMS・空調更新の主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金。" },
              { href: "/cfo-electricity-cost-basics", title: "CFOのための電気代基礎", description: "オフィスビルの経営判断フレームワーク。" },
              { href: "/electricity-cost-seasonal-pattern", title: "電気料金の季節パターン", description: "夏冬の電気代変動の基礎理解。" },
            ]}
          />

          <ContentCta
            heading="自社オフィスビルのピークカット効果を確認する"
            description="ビル種別・契約構造・テナント数をもとに、夏季電気代の上振れ幅とBEMS・ZEB化・テナント連動のメリットを試算できます。3年計画策定にもご活用ください。"
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
