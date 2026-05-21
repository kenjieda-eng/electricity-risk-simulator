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
  "夏季ピーク電気代の基礎とCFO視点｜P/Lインパクト・業界別比率・予算織り込み";
const pageDescription =
  "CFO・経営層向けに夏季ピーク電気代の構造を解説。JEPX・燃調・デマンドの3要因、業界別の夏季電気代比率（対通年+20-40%）、来期予算への織り込み方、投資家説明、規模別事例、補助金活用を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "夏季 ピーク 電気代 CFO",
    "夏季 電気代 P/L",
    "夏ピーク 経営判断",
    "夏 電気代 予算",
    "デマンドピーク CFO",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/summer-peak-electricity-cost-cfo",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/summer-peak-electricity-cost-cfo",
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
    label: "JEPX市場価格の夏季高騰",
    detail:
      "夏季（7〜9月）のJEPXスポット価格は8月平均で15〜35円/kWh、ピーク日（猛暑日）の14〜16時帯では50〜120円/kWhに達するケースも。市場連動プラン契約の法人で電気代が通常月の2〜3倍に上振れる主因。2022年8月のJEPX平均は44円/kWhで業界全体に大きなインパクトを与えた。",
  },
  {
    label: "燃料費調整額の夏季加算",
    detail:
      "燃料費調整額は3〜5ヶ月のタイムラグで反映されるため、夏季は4〜6月のLNG・原油価格が反映される。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移し、夏季電気代の構造的上振れ要因。",
  },
  {
    label: "契約電力（デマンド）の更新リスク",
    detail:
      "高圧契約の契約電力は過去12ヶ月の最大デマンドで自動更新される。8月の冷房ピーク日に1回でも契約電力を超過すると、その後12ヶ月の基本料金が10〜20%上振れる。年間で数十万〜数千万円のインパクトを与える。",
  },
  {
    label: "再エネ賦課金との累積効果",
    detail:
      "再エネ賦課金は2026年度4.5円/kWh前後と上昇トレンドで、使用量の多い夏季は絶対額が大きくなる。年間500万kWh使用の法人で8月分の賦課金は約190万円規模。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金はkWhベースで上乗せされ、使用量集中の夏季にインパクト大。新電力経由でも回避できず、長期的な夏季電気代上昇圧力として継続。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の夏季電気代水準（対通年比）",
    detail:
      "経産省・電気事業連合会の統計から、業種平均で夏季電気代は通年比+20〜40%。製造業（24h稼働）で+15〜25%、オフィス系業種で+25〜45%、商業施設・小売業で+30〜50%、データセンター・サーバー業種で+10〜20%。",
  },
  {
    label: "業界別の年間電気代に占める夏季比率",
    detail:
      "年間電気代に対する夏季3ヶ月（7〜9月）の比率は、業種平均で30〜40%。オフィス・商業施設で40〜45%、製造業・連続稼働業種で28〜32%、データセンターで26〜30%。経営計画策定時に夏季電気代を年間4等分するのは過小評価。",
  },
  {
    label: "ピーク日（猛暑日）の影響額",
    detail:
      "猛暑日（35℃以上）の電気代は通常日の1.5〜2.5倍。中規模オフィスビル（年間電気代1億円）で猛暑日1日あたり追加で50〜150万円規模の電気代が発生。年間猛暑日5〜10日で年300〜1,500万円のインパクト。",
  },
];

const costFactors = [
  {
    label: "JEPX夏季高騰の構造的要因",
    detail:
      "夏季電力需要のピーク時刻（14〜16時）と太陽光発電の供給ピーク（11〜13時）にタイムラグがあり、夕方にかけて需給逼迫が発生。火力発電のkW不足、特に老朽火力の燃料コスト上昇でJEPX価格が高騰する構造。2022年8月の44円/kWh平均はその典型例。",
  },
  {
    label: "気温上昇トレンドと冷房需要拡大",
    detail:
      "気象庁データによると、過去30年で日本の夏季平均気温は約1.5℃上昇。猛暑日も2.5倍に増加。これに伴い業務・産業の冷房需要が拡大し、ピーク電力使用量がトレンド的に上昇している。",
  },
  {
    label: "電力供給キャパシティの逼迫",
    detail:
      "2011年以降の原発稼働率低下、老朽火力の廃止・休止、再エネ拡大の中で、ピーク時の供給余力（予備率）が3〜5%まで低下する局面が常態化。需給ひっ迫警報が夏冬に発令される頻度が増加。",
  },
  {
    label: "DR（デマンドレスポンス）市場の拡大",
    detail:
      "2022年度から本格運用された需給調整市場、容量市場での負荷調整需要が拡大。CFO視点では夏季ピーク時の電力削減が新たな収益源（DR参加で年収益100〜500万円）となる可能性。",
  },
  {
    label: "ESG投資家・取締役会の関心拡大",
    detail:
      "TCFD・ISSB対応で、CFOには夏季電気代変動リスクの定量開示が求められる。投資家・取締役会向けに、夏季電気代の感度分析・シナリオ分析・対応策レポートが必要に。",
  },
];

const roiCases = [
  {
    title: "ROIケース1：設備投資型（高効率空調更新）",
    investment: "中規模オフィスビル（年間電気代1.5億円）で高効率空調更新（投資 8,000万円、補助金1/2活用で実質4,000万円）",
    return: "電力▲15〜20%、年間2,250〜3,000万円削減（夏季のみで900〜1,200万円）",
    payback: "投資回収 3.5〜4.5年（補助金後 1.5〜2.5年）。15年使用前提でNPV +1.5億円規模。",
  },
  {
    title: "ROIケース2：運用改善型（BEMS+運用最適化）",
    investment: "オフィスビル・工場のBEMS導入＋運用ルール改善（投資 800万円、SII補助1/2活用で実質400万円）",
    return: "電力▲8〜12%、年間1,200〜1,800万円削減（夏季のみで480〜720万円）",
    payback: "投資回収 0.5〜0.7年（補助金後 0.2〜0.3年）。即時効果。CFO視点で最優先施策。",
  },
  {
    title: "ROIケース3：契約見直し型（市場連動回避）",
    investment: "市場連動プランから固定3年契約への切替（投資ほぼゼロ）",
    return: "夏季の市場高騰回避で年間200〜2,000万円リスク削減（年間電気代1〜10億円規模の法人想定）",
    payback: "投資回収 即時（投資なし）。市場高騰時の保険として最重要。",
  },
];

const drEconomics = [
  {
    label: "DR参加の収益機会",
    detail:
      "需給調整市場・容量市場へのDR参加で、年間収益100〜500万円規模の確保が可能（中規模法人想定）。kW あたり年5,000〜15,000円のインセンティブ収入。猛暑日のピーク削減で更に追加収入。",
  },
  {
    label: "アグリゲーター経由のDR参加",
    detail:
      "東電EP、関電エナジーソリューション、電力小売事業者がアグリゲーターとして個別法人を束ねるサービスを提供。法人側は契約電力50kW以上から参加可能で、設備投資不要のケースが大半。",
  },
  {
    label: "DRと自家消費太陽光の相乗効果",
    detail:
      "自家消費太陽光＋蓄電池をDRに登録することで、ピーク時の系統電力削減＋DR収入＋自家消費削減の3層メリット。中規模工場で年5,000万〜1.5億円規模のメリット事例。",
  },
  {
    label: "DR参加時の業務オペレーション",
    detail:
      "DR発動時（年5〜15日程度）に契約電力の30〜60%を削減する運用が必要。空調設定変更、生産シフト、ライン停止など。CFOは現場部門との連携体制を整える必要あり。",
  },
];

const monthlyTimeline = [
  {
    month: "6月（準備フェーズ）",
    detail: "前年8月の電気代振り返り、契約電力の最新化、空調メンテナンス・フィルタ清掃、BEMS設定確認、DRプログラム登録、補助金スケジュール確認、社内周知（節電・設定温度ルール）",
  },
  {
    month: "7月（始動フェーズ）",
    detail: "気温上昇に応じた段階的冷房開始、ピーク監視体制構築、第1週・第2週の使用量モニタリング、需給ひっ迫警報の体制整備、サマータイム勤務開始",
  },
  {
    month: "8月（ピーク対応フェーズ）",
    detail: "猛暑日対応プロトコル発動、契約電力超過監視、DR発動対応、各日のピーク時間帯（14〜16時）の運用調整、JEPX高騰時の市場連動契約モニタリング",
  },
  {
    month: "9月（総括・改善フェーズ）",
    detail: "夏季電気代の集計・前年比較・CFO向け報告、来年に向けた改善点抽出、補助金申請（後期分）、設備投資計画への反映、取締役会向け年次サマリー作成",
  },
];

const cfoReporting = [
  {
    label: "夏季電気代の感度分析（気温×JEPX）",
    detail:
      "気温（平均/最高/猛暑日数）×JEPX価格（8月平均15/25/35/45円）の2軸感度分析で、ストレスシナリオでの追加電気代を可視化。取締役会で『仮にJEPX 50円/kWh想定なら年+1.5億円』のような形で報告。",
  },
  {
    label: "業種別ベンチマーキング",
    detail:
      "同業他社・業界平均との比較で、自社の夏季電気代水準（売上高比、原価比、従業員あたり）を可視化。CFOとして投資家・取締役会への説明責任を果たす材料。",
  },
  {
    label: "予算策定での織り込み",
    detail:
      "来期予算で夏季電気代を年間4等分するのではなく、過去3年の月次パターンを基に夏季比率（30〜45%）を織り込む。予算精度向上で経営判断のブレを減らす。",
  },
  {
    label: "投資家・株主総会向け説明",
    detail:
      "TCFD/ISSB対応で気候関連リスクとして夏季電気代変動を開示。猛暑日トレンド・気候変動シナリオ（1.5℃／2℃／4℃）での感度分析を統合報告書に記載する事例が増加。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・LED・コンプレッサー・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "夏季ピーク対策の主力補助金。6〜7月の申請が間に合えば翌年夏季に間に合う。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "ピーク削減と再エネ調達を組合せた施策に活用可能。",
  },
  {
    name: "DR（デマンドレスポンス）補助",
    target: "DR関連設備・アグリゲーター契約",
    rate: "制度別、自治体補助との併用可",
    note: "需給調整市場・容量市場対応の設備投資に活用可能。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小企業の空調・LED・BEMS更新",
    rate: "2/3、上限数千万円",
    note: "従業員300名以下の中小企業向け。LED・空調更新で採択率高い。",
  },
];

const checklistItems = [
  "前年8月の電気代を契約区分・拠点別に集計し、傾向を把握したか",
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "市場連動プラン契約の場合、夏季の上振れリスクを経営層と共有したか",
  "高効率空調・LED・BEMSの更新計画・補助金申請を準備したか",
  "DRプログラムへの登録または検討を実施したか",
  "夏季ピーク時の運用ルール（設定温度・スケジュール）を社内周知したか",
  "需給ひっ迫警報発令時の対応プロトコルを整備したか",
  "猛暑日対応プロトコル（追加節電・契約電力モニタリング）を策定したか",
  "CFO向け感度分析・シナリオ分析を取締役会報告に組み込んだか",
];

const faqItems = [
  { question: "夏季電気代は通年比でどれくらい上がりますか？", answer: "業種平均で+20〜40%、オフィス系で+25〜45%、商業施設・小売業で+30〜50%、製造業（24h稼働）で+15〜25%、データセンターで+10〜20%です。年間電気代に占める夏季3ヶ月（7〜9月）の比率は業種平均で30〜40%に達します。" },
  { question: "CFOとして夏季電気代を予算にどう織り込むべきですか？", answer: "年間電気代を月数で4等分するのは過小評価です。過去3年の月次パターンを基に夏季比率（30〜45%）を織り込み、加えてJEPX高騰・猛暑日数の感度分析を実施すべきです。来期予算で『JEPX 50円/kWh想定で年+1.5億円』のようなストレスシナリオも織り込みます。" },
  { question: "猛暑日1日でどれくらいの電気代インパクトがありますか？", answer: "中規模オフィスビル（年間電気代1億円）で猛暑日1日あたり追加50〜150万円規模の電気代が発生します。年間猛暑日5〜10日で年300〜1,500万円のインパクト。気候変動トレンドで猛暑日が増加しているため、長期的なリスク要因として無視できません。" },
  { question: "DR（デマンドレスポンス）参加で本当に収益化できますか？", answer: "可能です。中規模法人（契約電力500kW以上）で年100〜500万円規模の収益確保事例が多数あります。kW あたり年5,000〜15,000円のインセンティブ収入＋猛暑日のピーク削減で追加収入。設備投資不要のアグリゲーター経由参加が一般化しています。" },
  { question: "市場連動プランから固定プランへの切替は投資回収はどう考えますか？", answer: "投資自体はほぼゼロ（契約手数料程度）で、夏季の市場高騰回避による年間リスク削減効果が即時に得られます。年間電気代5億円規模の法人で市場高騰時の年1,000万〜1億円のリスクが回避できれば、投資回収は即時です。" },
  { question: "夏季電気代対策の補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（空調・LED・BEMS）、需要家主導型PPA補助金（太陽光・蓄電池）、DR関連補助、中小企業省エネ補助の4本柱です。6〜7月の申請が間に合えば翌年夏季に間に合います。" },
  { question: "ESG投資家への夏季電気代リスク開示はどう対応すべきですか？", answer: "TCFD/ISSB対応で気候関連リスクとして夏季電気代変動を開示します。猛暑日トレンド・気候変動シナリオ（1.5℃／2℃／4℃）での感度分析を統合報告書に記載する事例が増加。投資家からの質問対応資料として、感度分析・対応策レポートを準備すべきです。" },
  { question: "6月の準備フェーズで最優先で確認すべき項目は何ですか？", answer: "前年8月の電気代振り返り、契約電力の最新化、空調メンテナンス・フィルタ清掃、BEMS設定確認、DRプログラム登録、補助金スケジュール確認、社内周知（節電・設定温度ルール）の7項目です。準備不足で7月以降の対応が後手に回ると、年間電気代に直結します。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "電力広域的運営推進機関（OCCTO）", url: "https://www.occto.or.jp/" },
  { name: "JEPX（日本卸電力取引所）", url: "https://www.jepx.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "気象庁（夏季気温データ）", url: "https://www.data.jma.go.jp/" },
];

export default function SummerPeakElectricityCostCfoPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/summer-peak-electricity-cost-cfo"
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
          <span className="text-slate-800">夏季ピーク電気代の基礎とCFO視点</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            夏季ピーク電気代の基礎とCFO視点
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            夏季電気代は通年比+20〜40%上振れる、CFO・経営層が経営判断の中核に据えるべきテーマです。JEPX市場価格の高騰、燃料費調整額の累積、契約電力（デマンド）の更新リスク、再エネ賦課金・容量拠出金の累積効果が組み合わさり、年間電気代に占める夏季3ヶ月の比率は30〜45%に達します。本ページではCFO向けに夏季電気代の構造、業界別ベンチマーキング、対策別ROI、DR経済性、月次タイムライン、感度分析・投資家説明、補助金活用、ピーク前確認チェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>夏季ピーク電気代の構造（JEPX・燃調・デマンド・賦課金の4要因）</li>
              <li>業界別の夏季電気代水準（対通年+15〜50%）と年間に占める比率</li>
              <li>対策別ROI（設備投資 vs 運用改善 vs 契約見直し）</li>
              <li>デマンドレスポンス（DR）の経済性と参加方法</li>
              <li>月次タイムライン（6月準備→8月ピーク→9月総括）</li>
              <li>CFO向け感度分析・投資家説明・取締役会報告</li>
              <li>夏季ピーク前確認10項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季ピーク電気代の構造 — JEPX・燃調・デマンド・賦課金の4層
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の上振れは『JEPX市場価格高騰／燃料費調整額の3〜5ヶ月遅延反映／契約電力の更新リスク／再エネ賦課金・容量拠出金の累積』の4層構造です。各層が同時進行で重なるため、年間電気代に占める夏季3ヶ月（7〜9月）の比率は業種平均で30〜45%に達します。
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
              電気料金の上昇要因の全体像は{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人の電気料金が上がる理由
              </Link>
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の夏季電気代水準 — 業種別+15〜50%の上振れ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の業界平均水準は、事業形態（製造業・オフィス・商業施設・データセンター）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 経産省・電気事業連合会・気象庁から整理。実値は地域・業種・規模で1.5〜2倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要な夏季電気代上昇要因 — 気温・JEPX・DR・ESG
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の上昇は、JEPX高騰の構造的要因、気温上昇トレンド、供給キャパシティ逼迫、DR市場拡大、ESG投資家関心拡大という複合的要因が並列します。CFO視点で要因別の感度分析を実施することが経営判断の基礎です。
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
              対策別ROI分析3件 — 設備投資 vs 運用改善 vs 契約見直し
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代対策の3パターンROI分析。CFO視点では投資回収期間・NPV・即時効果のバランスで判断すべきです。運用改善・契約見直しは即時効果のため最優先、設備投資は中期計画として組み込むのが原則です。
            </p>
            <div className="mt-4 space-y-4">
              {roiCases.map((cs) => (
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
              関連業種の事例は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種横断ピークカット5戦略</Link>
              、{" "}
              <Link href="/manufacturing-cooling-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の冷房戦略</Link>
              、{" "}
              <Link href="/office-building-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルのピークカット</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンドレスポンス（DR）の経済性 — 新たな収益機会
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DRはコスト削減ではなく『新たな収益機会』としてCFOが評価すべき施策。需給調整市場・容量市場へのDR参加で、設備投資ほぼ不要で年100〜500万円規模の収益確保が可能です。
            </p>
            <div className="mt-4 space-y-3">
              {drEconomics.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR詳細は{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドレスポンス入門・夏のピークシフト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              月次タイムライン — 6月準備→8月ピーク→9月総括
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代対策は6月の準備フェーズから9月の総括フェーズまで、月単位での運用フローが重要です。CFOは各フェーズで現場部門と連携し、意思決定タイミングを逃さないことが求められます。
            </p>
            <div className="mt-4 space-y-3">
              {monthlyTimeline.map((item) => (
                <div key={item.month} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.month}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約更新タイミングは{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度の概観 — 製造・オフィス・商業・DCで比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の影響度は業種で大きく異なります。製造業（24h稼働）はベースロード比重が高く、相対的に夏季比率が低い（28〜32%）。オフィス・商業施設は冷房中心で夏季比率が高い（40〜45%）。データセンターは年中稼働で冷却負荷増の比率が低い（26〜30%）が、絶対額は最大規模に。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">製造業（24h稼働）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季比率28〜32%、対通年+15〜25%</li>
                  <li>冷房追加負荷10〜20%</li>
                  <li>連続稼働でベースロード大</li>
                  <li>DR参加でピーク削減効果大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">オフィス系業種</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季比率40〜45%、対通年+25〜45%</li>
                  <li>冷房中心、設定温度の影響大</li>
                  <li>BEMS・スケジュール最適化が効果的</li>
                  <li>テナント・社員協力が必要</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">商業施設・小売業</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季比率40〜45%、対通年+30〜50%</li>
                  <li>冷蔵冷凍＋冷房の二重負荷</li>
                  <li>営業時間中心のピーク</li>
                  <li>業態別差異大（百貨店vsコンビニ）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">データセンター・サーバー業</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季比率26〜30%、対通年+10〜20%</li>
                  <li>冷却負荷増が外気温に比例</li>
                  <li>PUE改善が効果大</li>
                  <li>AI/GPU負荷増で全体トレンド上昇</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              CFO向けレポーティング — 感度分析・投資家説明・取締役会
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              CFOは夏季電気代を単なるコスト変動ではなく『気候関連リスク・経営判断』として位置付け、感度分析・投資家説明・取締役会報告で活用します。TCFD/ISSB対応の観点でも重要なテーマです。
            </p>
            <div className="mt-4 space-y-3">
              {cfoReporting.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              CFO戦略の体系は{" "}
              <Link href="/cfo-electricity-cost-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFOのための電気代基礎</Link>
              、{" "}
              <Link href="/ir-disclosure-electricity-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IR開示における電気代リスク</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（夏季省エネ系） — SII・PPA・DR・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピーク対策に活用しやすい補助金は4本柱。6〜7月の申請が間に合えば翌年夏季に間に合うため、設備投資の意思決定タイミングが重要です。複数補助金の組合せ申請（SII＋PPA＋DR）で採択率が高くなる傾向。
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
              夏季ピーク前確認チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピークシーズン入り前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、夏季電気代の予算超過リスクが高まります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社の夏季電気代リスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代はJEPX高騰・燃調・デマンド・賦課金の4層が組合さるため、年間電気代の30〜45%が集中します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・DR参加・設備投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスクを確認する</li>
              <li>JEPX高騰時の影響額（ストレスシナリオ）を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>DR参加後の収益機会を試算する</li>
              <li>事例で示した10〜20%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="summer-peak-electricity-cost-cfo" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別冷却戦略のハブ。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と主要プログラム比較。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "高効率空調・LED・蓄電池・運用改善・契約見直しの5戦略。" },
              { href: "/manufacturing-cooling-strategy", title: "製造業の冷房戦略", description: "工場・倉庫の温度管理と高効率設備投資判断。" },
              { href: "/office-building-peak-cut", title: "オフィスビルのピークカット", description: "ZEB化・BEMS・テナント連動でピーク削減。" },
              { href: "/datacenter-cooling-optimization", title: "データセンターの冷却最適化", description: "PUE改善・外気冷房・液浸冷却の費用対効果。" },
              { href: "/cfo-electricity-cost-basics", title: "CFOのための電気代基礎", description: "P/L構造・売上高電気代比率・経営判断フレームワーク。" },
              { href: "/ir-disclosure-electricity-risk", title: "IR開示における電気代リスク", description: "有価証券報告書・統合報告書・株主総会対応。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "夏季高騰リスク回避の固定プラン選択。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "夏季高騰リスクが大きい業種の判断軸。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "夏季高騰時の動き方とリスクの差。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "夏季ピーク削減と再エネ調達の両立。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "夏季対策設備投資で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/electricity-cost-seasonal-pattern", title: "電気料金の季節パターン", description: "夏冬の電気代変動の基礎理解。" },
            ]}
          />

          <ContentCta
            heading="自社の夏季電気代リスクをCFO視点で確認する"
            description="JEPX・燃調・デマンド・賦課金の4要因を踏まえた夏季電気代の上振れ幅をシミュレーターで試算できます。来期予算策定での織り込みや、固定プラン・DR参加・設備投資の投資判断にもご活用ください。"
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
