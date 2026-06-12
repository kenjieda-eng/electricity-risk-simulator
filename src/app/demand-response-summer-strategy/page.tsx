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
  "デマンドレスポンス（DR）入門・夏のピークシフト｜容量市場・需給調整市場の経済性";
const pageDescription =
  "デマンドレスポンス（DR）の基礎と夏季ピークシフト戦略を解説。容量市場・需給調整市場の概要、法人企業の参加メリット（年収益100-500万円）、主要DRプログラム比較（東電・関電・東北電）、規模別事例、補助金活用を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンドレスポンス 法人",
    "DR 夏 ピークシフト",
    "容量市場 法人",
    "需給調整市場 参加",
    "DR 収益",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/demand-response-summer-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-response-summer-strategy",
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

const drStructure = [
  {
    label: "DR（デマンドレスポンス）の定義",
    detail:
      "電力需要のピーク時に、需要家側が能動的に電力消費を削減する仕組み。系統運用者（電力会社）からの要請または市場価格シグナルに応じて、契約電力の30〜60%を削減し、その対価として収入を得る。2022年度から本格運用された需給調整市場・容量市場で経済性が確立されてきた。",
  },
  {
    label: "夏季ピークシフトの重要性",
    detail:
      "夏季の電力需要は14〜16時にピークを迎え、太陽光発電の供給ピーク（11〜13時）とタイムラグが発生。猛暑日には系統全体の予備率が3〜5%まで低下し、需給ひっ迫警報が発令される。DRはこの局面で系統安定化に貢献し、需要家側にも収益機会を提供する。",
  },
  {
    label: "容量市場の概要",
    detail:
      "電源の供給力（kW）を取引する市場で、2024年度から本格運用。電源だけでなく、DRリソース（負荷削減能力）も売買対象に。法人企業はアグリゲーター経由でDRリソースを提供し、kWあたり年5,000〜15,000円のインセンティブ収入を得られる。",
  },
  {
    label: "需給調整市場の概要",
    detail:
      "電力の需給バランス調整（kWh）を取引する市場で、2022年度から段階的に運用開始。一次・二次・三次調整力の各商品で、DRリソースが入札可能。発動時の追加収入が得られる短期収益機会。",
  },
  {
    label: "DRと自家消費太陽光・蓄電池の連動",
    detail:
      "自家消費太陽光＋蓄電池をDRに登録することで、ピーク時の系統電力削減＋DR収入＋自家消費削減の3層メリット。CN対応・BCP対策・収益化の一石三鳥効果。",
  },
];

const drBenchmark = [
  {
    label: "DR参加による収益規模（業種別）",
    detail:
      "中規模オフィスビル（契約電力500kW）で年100〜200万円、中規模工場（契約電力1,000kW）で年200〜400万円、大型工場（契約電力5,000kW）で年500〜2,000万円規模の収益確保事例。kWあたり年5,000〜15,000円のインセンティブ＋発動時収入。",
  },
  {
    label: "DR参加の対象法人規模",
    detail:
      "契約電力50kW以上の高圧需要家からアグリゲーター経由で参加可能。100kW以上で経済合理性が出る。500kW以上で本格的な収益化、5,000kW以上では設備投資も視野に。",
  },
  {
    label: "DR発動頻度（年間）",
    detail:
      "需給調整市場で年5〜15回程度の発動。容量市場の場合は実需要に応じて発動。猛暑日（35℃以上）・需給ひっ迫警報発令時に集中。発動時間は1〜3時間程度。",
  },
];

const drFactors = [
  {
    label: "アグリゲーター経由参加のメリット",
    detail:
      "東電EP、関電エナジーソリューション、電力小売事業者がアグリゲーターとして個別法人を束ねるサービスを提供。法人側は契約手続き・運用代行を任せられ、設備投資不要のケースが大半。複数アグリゲーターからの相見積で条件交渉も可能。",
  },
  {
    label: "DR発動時の業務影響",
    detail:
      "発動時（年5〜15日程度）に契約電力の30〜60%を削減する運用が必要。空調設定変更（28→30℃）、生産シフト（夜間移行）、ライン停止、自家発電起動などの組合せ。事前に現場部門との連携体制構築が必須。",
  },
  {
    label: "DRと電力プランの組合せ",
    detail:
      "固定プラン＋DR参加が標準パターン。市場連動プラン＋DRの組合せは複雑だが、JEPX高騰時の市場連動利益＋DR収入で更に大きなメリット。CFO判断レベルの論点。",
  },
  {
    label: "BCP（事業継続計画）との連動",
    detail:
      "DR参加で訓練される負荷削減オペレーションは、需給ひっ迫警報・停電予兆時のBCP対応にも活用可能。自家発電・蓄電池併設で更にBCP強化。",
  },
  {
    label: "ESG・CN対応との連動",
    detail:
      "DR参加は系統安定化＝再エネ電力の有効活用に貢献するため、ESG投資家・取締役会への説明材料として活用可能。TCFD/ISSB対応の文脈で『気候関連リスクへの能動的取組み』として開示できる。",
  },
];

const programComparison = [
  {
    title: "プログラム1：東電エナジーパートナーDR",
    coverage: "東京電力管内（関東1都6県）／契約電力100kW以上",
    economics: "kW あたり年8,000〜12,000円のインセンティブ収入／発動時追加収入",
    note: "国内最大規模のDR市場。アグリゲーター複数社経由で参加可能。猛暑日対応に強み。",
  },
  {
    title: "プログラム2：関電エナジーソリューションDR",
    coverage: "関西電力管内（2府4県）／契約電力50kW以上",
    economics: "kW あたり年6,000〜10,000円のインセンティブ収入／発動時追加収入",
    note: "西日本最大規模。製造業集積地でDR参加実績豊富。空調・生産ライン削減が主流。",
  },
  {
    title: "プログラム3：東北電力DR・北海道電力DR",
    coverage: "東北6県・北海道／契約電力100kW以上",
    economics: "kW あたり年5,000〜8,000円のインセンティブ収入／冬季発動も含む",
    note: "冬季のピーク（朝・夕）でもDR発動。寒冷地特有の運用パターン。",
  },
];

const caseStudies = [
  {
    title: "事例1：中規模オフィスビル（年100万円収益化）",
    before: "東京・中規模オフィスビル（契約電力500kW、年間電気代1.2億円）。DR未参加、市場連動プラン継続。夏季電気代の上振れリスクが大きい。",
    after: "アグリゲーター経由でDR参加（容量市場）／固定3年契約に切替／BEMS導入で発動時運用自動化／空調設定温度緩和（26→28℃）のテナント協力。",
    result: "年DR収入 100万円（kW単価2,000円）／市場高騰回避で年500万円リスク削減／投資回収 6ヶ月（BEMS）／CO₂削減 約30 t/年",
  },
  {
    title: "事例2：中規模工場（年300万円収益化）",
    before: "中部地区・中規模工場（契約電力1,500kW、年間電気代3.5億円）。市場連動プランで2022〜2023年に夏季月最大1,500万円の追加負担を経験。",
    after: "アグリゲーター経由でDR参加（容量市場＋需給調整市場）／固定5年プラン切替／自家消費太陽光1MW＋蓄電池0.5MWh導入（DR連動）／生産シフト夜間移行のオプション運用。",
    result: "年DR収入 300万円／自家消費削減 年1,000万円／市場高騰回避 年2,000万円リスク削減／投資回収 5年（補助金後 3年）／CO₂削減 約700 t/年",
  },
  {
    title: "事例3：大型工場（年1,500万円収益化）",
    before: "西日本・大型製造工場（契約電力10,000kW、年間電気代25億円）。DR参加検討段階。市場連動プランで2022年夏季に月最大1.5億円の追加負担。",
    after: "アグリゲーター経由でDR参加（容量市場＋需給調整市場主力）／長期固定10年プラン切替／自家消費太陽光10MW＋蓄電池5MWh／DR発動時の生産バッチ調整プロトコル整備／DR専任担当配置。",
    result: "年DR収入 1,500万円／自家消費削減 年1.5億円／市場高騰回避 年5億円リスク削減／投資回収 6年（補助金後 4年）／CO₂削減 約5,000 t/年",
  },
];

const demandManagement = [
  {
    label: "発動時の空調・照明制御自動化",
    detail:
      "BEMSによる発動時の空調・照明制御自動化で、運用負荷を最小化。設定温度緩和（26→28℃）・照明明るさ調整・不要照明オフを発動シグナルで自動実行。",
  },
  {
    label: "生産シフトの夜間移行",
    detail:
      "発動時の生産ラインを夜間にシフトする運用設計。事前に顧客・物流との調整体制を整え、DR発動時に柔軟に対応できる体制構築。",
  },
  {
    label: "自家発電・蓄電池の起動連動",
    detail:
      "DR発動時に自家発電・蓄電池を自動起動。系統電力削減を達成しつつ事業継続。蓄電池はDR発動以外でも夜間充電・昼間放電でピーク削減に貢献。",
  },
  {
    label: "ライン停止・部分稼働の組合せ",
    detail:
      "発動時に低優先度ラインを停止、高優先度ラインのみ稼働の運用設計。事前に優先順位リスト整備・現場部門との合意形成が必要。",
  },
];

const subsidyPrograms = [
  {
    name: "DR関連設備補助金（経産省）",
    target: "DR制御装置・BEMS・通信装置・蓄電池連動制御",
    rate: "中小1/2、大企業1/3、上限数千万円",
    note: "DR参加のための制御装置・通信設備の補助。アグリゲーター経由参加の場合は不要なケースも。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入（DR連動）",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "DR連動を前提とした太陽光・蓄電池導入で、補助率が手厚くなる場合あり。",
  },
  {
    name: "省エネ補助金（経産省 SII）",
    target: "BEMS・高効率空調・LED（DR運用と連動）",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "DR運用に必要なBEMS・高効率設備の補助。DR参加と組合せ申請で採択率向上。",
  },
  {
    name: "脱炭素先行地域・GX補助",
    target: "DR・再エネ・蓄電池の統合システム",
    rate: "1/2、上限数億円",
    note: "大規模DRシステム（5MW以上）の統合システム導入で活用可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が50kW以上でDR参加要件を満たすか確認したか",
  "現在の電力会社（地域電力・新電力）のDRプログラム提供有無を確認したか",
  "複数アグリゲーターから相見積を取得したか",
  "発動時の負荷削減目標（kW・%）を経営層と合意したか",
  "発動時の運用プロトコル（空調・生産・照明）を整備したか",
  "BEMS・自家発電・蓄電池の連動可能性を評価したか",
  "現場部門（製造・施設管理）との連携体制を構築したか",
  "DR収入を予算・財務計画に織り込んだか",
  "DR発動履歴の振り返り・改善サイクルを設定したか",
  "ESG・CN対応の説明材料としてDR参加を活用しているか",
];

const faqItems = [
  { question: "DR参加で本当に年100万円以上の収益化が可能ですか？", answer: "可能です。中規模法人（契約電力500kW以上）で年100〜500万円規模の収益確保事例が多数あります。kWあたり年5,000〜15,000円のインセンティブ収入＋猛暑日のピーク削減で発動時追加収入。設備投資不要のアグリゲーター経由参加が一般化しています。" },
  { question: "DR参加の対象法人規模はどれくらいですか？", answer: "契約電力50kW以上の高圧需要家からアグリゲーター経由で参加可能です。100kW以上で経済合理性が出ます。500kW以上で本格的な収益化、5,000kW以上では設備投資（自家消費太陽光・蓄電池）も視野に入ります。" },
  { question: "DR発動時の業務影響はどれくらいですか？", answer: "発動時（年5〜15日程度・1〜3時間）に契約電力の30〜60%を削減する運用が必要です。空調設定変更、生産シフト、ライン停止、自家発電起動などの組合せ。事前に現場部門との連携体制構築が必須です。" },
  { question: "DRと市場連動プランの組合せは可能ですか？", answer: "可能で、CFO判断レベルの戦略です。固定プラン＋DRが標準パターンですが、市場連動プラン＋DRの組合せはJEPX高騰時の市場連動利益＋DR収入で更に大きなメリット。リスク許容度が高い法人向け。" },
  { question: "DR参加と自家消費太陽光・蓄電池の連動メリットは？", answer: "3層メリット：①ピーク時の系統電力削減（DR貢献）、②DR収入確保、③自家消費削減。中規模工場でDR収入年300万＋自家消費削減年1,000万＋市場高騰回避年2,000万の合計年3,300万円規模のメリット事例。CN対応・BCP対策にも貢献。" },
  { question: "アグリゲーターはどのような会社ですか？", answer: "東電EP、関電エナジーソリューション、電力小売事業者がアグリゲーターとして個別法人を束ねるサービスを提供。法人側は契約手続き・運用代行を任せられ、設備投資不要のケースが大半です。複数アグリゲーターからの相見積で条件交渉も可能。" },
  { question: "DR発動頻度はどれくらいですか？", answer: "需給調整市場で年5〜15回程度の発動。容量市場の場合は実需要に応じて発動。猛暑日（35℃以上）・需給ひっ迫警報発令時に集中します。冬季（東北・北海道）でも朝夕の冷え込み時に発動するケースあり。" },
  { question: "DR参加と既存の電力契約の関係は？", answer: "既存の電力契約とは独立して参加可能です。契約変更不要、新電力切替も不要のケースが大半。一部のアグリゲーターは特定の電力会社と提携しているため、複数アグリゲーターから条件比較するのが原則。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "経済産業省 資源エネルギー庁（DR関連）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力広域的運営推進機関（OCCTO）", url: "https://www.occto.or.jp/" },
  { name: "JEPX（日本卸電力取引所）", url: "https://www.jepx.jp/" },
  { name: "経済産業省（需給調整市場・容量市場）", url: "https://www.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function DemandResponseSummerStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/demand-response-summer-strategy"
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
          <span className="text-slate-800">DR入門・夏のピークシフト</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            デマンドレスポンス（DR）入門・夏のピークシフト
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドレスポンス（DR）は、夏季ピーク電気代対策の中で『コスト削減』ではなく『新たな収益機会』としてCFOが評価すべき施策です。2022年度から本格運用された需給調整市場、2024年度から本格運用された容量市場で、法人企業がDRリソースを提供することで年100〜500万円規模の収益確保が可能になりました。本ページではDRの基礎、容量市場・需給調整市場の概要、主要DRプログラム比較、規模別事例、運用プロトコル、補助金活用、参加チェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>DRの基礎と夏季ピークシフトの重要性</li>
              <li>容量市場・需給調整市場の概要</li>
              <li>業種別・規模別のDR収益規模</li>
              <li>主要DRプログラム比較（東電・関電・東北電）</li>
              <li>規模別事例3件（中規模オフィス／中規模工場／大型工場）</li>
              <li>DR発動時の運用プロトコル・現場連携</li>
              <li>DR関連補助金と参加チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季ピーク電気代の構造 — DRが活躍する局面
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の上振れは、JEPX高騰・燃調・デマンド・賦課金の4要因が重なる構造ですが、DRはこの中で『系統安定化＝需給ひっ迫回避』に直接貢献する仕組みです。猛暑日の14〜16時帯の電力削減で、需要家側に収益を還元します。
            </p>
            <p className="mt-3 text-xs text-slate-500">なお、本記載は特定の電力会社・契約形態を推奨するものではありません。</p>
            <div className="mt-4 space-y-3">
              {drStructure.map((item) => (
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
              、ピークカット施策の全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                業種横断ピークカット5戦略
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の夏季電気代水準・DR収益規模
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加の収益規模は法人規模と業種で異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <div className="mt-4 space-y-3">
              {drBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 経産省・電力広域的運営推進機関（OCCTO）・アグリゲーター公表資料から整理。実値は地域・業種・契約条件で1.5〜2倍ぶれます。
            </p>
            <p className="mt-3 text-xs text-slate-500">※ 出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。単価・統計・削減率は公開情報ベースの目安です。本記載は特定の電力会社・契約形態を推奨するものではありません。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要な夏季電気代上昇要因 — DR導入の検討論点
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR導入の検討では、アグリゲーター選定、運用設計、電力プラン連動、BCP・ESG連動の5つの論点を整理することが重要です。CFO・現場部門・経営層の3者協議が必須。
            </p>
            <p className="mt-3 text-xs text-slate-500">※ 本記載は特定の電力会社・契約形態を推奨するものではありません。</p>
            <div className="mt-4 space-y-3">
              {drFactors.map((item) => (
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
              対策別ROI分析3件 — DR×設備投資×契約見直しの組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加は単独でも収益化可能ですが、固定プラン切替・自家消費太陽光・蓄電池との組合せで最大効果が出ます。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-3 text-xs text-slate-500">上記の数値はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種の事例は{" "}
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
              主要DRプログラム比較 — 東電・関電・東北電・北海道電
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地域電力会社・アグリゲーターでDRプログラムが異なります。自社の所在地域・業種・契約電力に応じて、最適なプログラムを選定してください。複数アグリゲーターから相見積を取得し、条件比較が原則。
            </p>
            <p className="mt-3 text-xs text-slate-500">なお本記載は特定の電力会社・契約形態を推奨するものではありません。</p>
            <div className="mt-4 space-y-4">
              {programComparison.map((pg) => (
                <div key={pg.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{pg.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">対象エリア：</span>{pg.coverage}</p>
                    <p><span className="font-semibold text-slate-700">経済性：</span>{pg.economics}</p>
                    <p><span className="font-semibold text-emerald-700">特徴：</span>{pg.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DRの経済性（発動収入・年収入の試算）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加の経済性は『kW単価×契約電力×参加kW比率』の基本式で計算可能。中規模法人（契約電力1,000kW、参加kW 300kW、kW単価8,000円）で年240万円のインセンティブ収入＋発動時収入で年300万円規模が目安。
            </p>
            <p className="mt-3 text-xs text-slate-500">なお本ページの内容は特定の電力会社・契約形態を推奨するものではありません。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">基本料金（年間固定）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>kW単価：5,000〜15,000円（地域・市場で変動）</li>
                  <li>参加kW：契約電力の30〜60%が目安</li>
                  <li>年契約：発動有無に関わらず確保</li>
                  <li>中規模法人で年100〜500万円規模</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">発動時収入（変動）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>発動頻度：年5〜15回</li>
                  <li>1回あたり数十万円〜数百万円</li>
                  <li>猛暑日・需給ひっ迫時に集中</li>
                  <li>年間合計で基本料金と同等規模</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              シミュレーターで自社条件での収益試算は{" "}
              <Link href="/simulate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>
              で実施できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DR発動時の運用プロトコル — 空調・生産・自家発電
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR発動時の運用は『空調・照明制御自動化』『生産シフト夜間移行』『自家発電・蓄電池起動連動』『ライン停止・部分稼働』の4論点を組合せて設計します。事前に現場部門との合意形成が必須。
            </p>
            <p className="mt-3 text-xs text-slate-500">なお、本記載は特定の電力会社・契約形態を推奨するものではありません。</p>
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
              業種別の DR 適性 — 製造・オフィス・商業・DCで比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加の適性は業種で異なります。製造業（生産シフト柔軟性）・データセンター（負荷管理高度）はDR適性高、オフィス・商業施設は限定的なDR参加が中心、24h連続稼働で削減余地が小さい業種は適性低。
            </p>
            <p className="mt-3 text-xs text-slate-500">上記の数値はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">製造業（DR適性高）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>生産シフトの夜間移行可能</li>
                  <li>ライン停止・部分稼働の柔軟性</li>
                  <li>自家発電・蓄電池併用が一般的</li>
                  <li>DR収入年200〜2,000万円規模</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">データセンター（DR適性高）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>負荷管理の高度化が進む</li>
                  <li>空調最適化（PUE改善）と連動</li>
                  <li>地理分散による負荷シフト</li>
                  <li>DR収入年500万〜5,000万円規模</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">オフィス・商業（DR適性中）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>空調設定温度緩和が中心</li>
                  <li>テナント・社員協力が必要</li>
                  <li>削減余地は限定的</li>
                  <li>DR収入年50〜300万円規模</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">病院・宿泊施設（DR適性低）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h連続稼働で削減余地小</li>
                  <li>患者・宿泊客の快適性優先</li>
                  <li>限定的なDR参加が中心</li>
                  <li>DR収入年30〜150万円規模</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DR関連補助金活用 — SII・PPA・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加に活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。アグリゲーター経由参加では補助金不要のケースも多い。
            </p>
            <p className="mt-3 text-xs text-slate-500">本記載は特定の電力会社・契約形態を推奨するものではありません。</p>
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
              DR参加チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加検討前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、アグリゲーター選定や条件交渉の精度が下がります。
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
              シミュレーターで自社DR参加の収益機会を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR参加の収益機会は契約電力・業種・運用柔軟性で大きく異なります。シミュレーターで自社条件におけるDR収入と、固定プラン切替・自家消費太陽光導入の組合せ効果を試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件でのDR収入規模を試算する</li>
              <li>固定プラン切替＋DR参加の総合メリットを把握する</li>
              <li>自家消費太陽光＋蓄電池＋DRの3層効果を確認する</li>
              <li>発動時の業務影響シナリオを評価する</li>
              <li>事例で示した年100〜2,000万円の収益レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="demand-response-summer-strategy" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別冷却戦略のハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業種別に夏季の年間電気代を試算。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "高効率空調・LED・蓄電池・運用改善・契約見直しの5戦略。" },
              { href: "/manufacturing-cooling-strategy", title: "製造業の冷房戦略", description: "工場・倉庫の温度管理と高効率設備投資判断。" },
              { href: "/office-building-peak-cut", title: "オフィスビルのピークカット", description: "ZEB化・BEMS・テナント連動でピーク削減。" },
              { href: "/datacenter-cooling-optimization", title: "データセンターの冷却最適化", description: "PUE改善・外気冷房・液浸冷却の費用対効果。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "DR連動とピーク削減・BCP強化の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "DR連動で投資回収短縮の太陽光導入。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定プラン+DRの組合せ戦略。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/capacity-contribution-cost-impact", title: "容量拠出金の事業影響", description: "容量市場参加とDR収入の関係。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "DR運用に必要なBEMS・空調更新で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "DR連動を前提とした太陽光・蓄電池導入。" },
              { href: "/cfo-electricity-cost-basics", title: "CFOのための電気代基礎", description: "DR収入のP/L上の位置付けと経営判断。" },
            ]}
          />

          <ContentCta
            heading="自社DR参加の収益機会をシミュレーターで確認する"
            description="契約電力・業種・運用柔軟性をもとに、DR参加の収益機会と固定プラン切替・自家消費太陽光導入の組合せ効果を試算できます。アグリゲーター選定の参考データにもご活用ください。"
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
