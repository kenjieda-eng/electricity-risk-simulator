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
  "紙パルプ業の電気料金見直しポイント｜大規模製紙工場のバイオマス自家発電と契約最適化";
const pageDescription =
  "紙パルプ業（製紙工場）の電気料金見直しを解説。製紙工程の大規模電力消費、バイオマス自家発電との連携、特別高圧契約の最適化、大手vs中規模工場の戦略差、補助金活用と契約見直しチェックリストまで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "紙パルプ業 電気料金 見直し",
    "製紙工場 電気代 削減",
    "パルプ工場 電力契約",
    "バイオマス発電 製紙",
    "特別高圧 製紙工場",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/pulp-paper-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/pulp-paper-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

const usageProfile = [
  {
    label: "抄紙機（製紙の基幹設備）",
    detail:
      "製紙工場の電力消費の30〜45%を占める基幹設備。大型抄紙機1台あたり1,000〜5,000 kWの連続負荷。24時間365日連続稼働が前提で、停止すると再起動に12〜24時間と数百万円のコストがかかる。",
  },
  {
    label: "リファイナー・パルパー（叩解・離解工程）",
    detail:
      "パルプを叩解・離解する工程で電力消費の20〜30%。リファイナー1台あたり500〜2,000 kWの高負荷モーターが連続稼働。製品品質に直結する工程で省エネ余地が限定される。",
  },
  {
    label: "蒸解・漂白工程（化学パルプ）",
    detail:
      "クラフトパルプ製造で蒸解・漂白工程の電力消費が大きい（10〜20%）。化学反応の温度管理（170〜180°C蒸解）・撹拌・ポンプ動力で連続電力負荷。",
  },
  {
    label: "排水処理・大気汚染防止設備",
    detail:
      "製紙排水処理プラント（曝気・凝集・濾過）の電力消費は工場全体の8〜15%。法令遵守のため24時間連続稼働必須。排煙脱硫・脱硝設備も常時稼働。",
  },
  {
    label: "ユーティリティ（圧縮空気・冷却水・蒸気）",
    detail:
      "コンプレッサー・ポンプ・ファン類のユーティリティ電力で工場全体の15〜25%を占める。インバーター化の余地が大きく、省エネ投資の主戦場。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本製紙連合会・経産省工業統計によれば、紙パルプ業の電気料金は売上高の4.0〜8.0%（製造業平均1.5〜2.0%の3〜4倍）。電力多消費業種で、エネルギーコストが事業競争力を左右する典型業種。",
  },
  {
    label: "紙1トンあたりの電力消費",
    detail:
      "段ボール原紙で500〜800 kWh/t、新聞紙で600〜900 kWh/t、印刷用紙で700〜1,200 kWh/t、化学パルプで700〜1,000 kWh/t（パルプ生産のみ）。製品種別で大きく異なるが、家庭1か月の電力使用量（200〜300kWh）の数倍を紙1トンで消費。",
  },
  {
    label: "工場規模別の電力契約",
    detail:
      "中規模製紙工場（年間生産10〜30万t）で特別高圧 2,000〜5,000 kW、年間2,000〜5,000万kWh。大規模工場（年間50万t超）で特別高圧10,000〜30,000 kW、年間1〜3億kWh。大手製紙会社の全社合計では年間数十億kWh規模。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の急騰（24h連続稼働）",
    detail:
      "24時間連続稼働で月間使用量極大（中規模で月200〜400万kWh）。燃料費調整額1円/kWhの変動で月200〜400万円の差。年間2,400〜4,800万円の上振れ。固定プラン切替で年間1,500〜3,000万円の安定化事例多数。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年3,000万kWh使用の中規模製紙工場で年1.05億円→1.19億円→1.25億円と3年で年2,070万円の負担増。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、紙パルプ業のような超大量電力消費業種では年数千万円〜数億円規模の影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "化石燃料価格高騰（蒸気・電力連動）",
    detail:
      "製紙工場は蒸気と電力を同時に大量使用するため、化石燃料価格高騰の影響を二重に受ける。重油・石炭・LNG価格が原料費と電気代の両面で利益率を圧迫する構造。",
  },
  {
    label: "原料パルプ・古紙価格との連動",
    detail:
      "古紙価格・木材チップ価格の高騰時に電気代も同時上昇する局面が多く、3重コスト圧迫の経営環境。価格転嫁の遅れが利益率を直撃する。",
  },
];

const sizeBenchmarks = [
  {
    size: "中小製紙工場（年生産3〜10万t、専門紙・特殊紙メイン）",
    profile: "抄紙機1〜2台／特別高圧 1,000〜3,000 kW／年間 1,000〜3,000 万 kWh",
    annualCost: "年間電気代 2.5〜7.5 億円",
    note: "新電力切替・固定3〜5年契約・高効率モーター更新・コンプレッサーインバーター化で年10〜18%削減事例。SII補助金1/2活用で投資回収4〜6年。",
  },
  {
    size: "中規模製紙工場（年生産15〜40万t、段ボール原紙・新聞紙）",
    profile: "抄紙機2〜4台／特別高圧 5,000〜15,000 kW／年間 4,000万〜1.2億 kWh",
    annualCost: "年間電気代 10〜30 億円",
    note: "バイオマス自家発電（黒液回収ボイラ・木質チップ）＋系統電力の最適化／固定5〜7年プラン＋自家消費太陽光（2〜5MW）／高効率抄紙機更新で年15〜22%削減。",
  },
  {
    size: "大規模製紙工場（年生産50万t超、大手製紙メーカー基幹工場）",
    profile: "抄紙機5〜10台／特別高圧 20,000〜50,000 kW／年間 1.5〜4億 kWh",
    annualCost: "年間電気代 40〜100 億円",
    note: "0.5〜1%の単価改善でも年数千万〜数億円のインパクト。バイオマス自家発電を主力とし系統電力は補完位置／長期固定10年契約＋逆潮流（余剰電力売電）／DR契約＋VBP（バーチャル・パワー・プラント）参加で年15〜25%削減。",
  },
];

const caseStudies = [
  {
    title: "事例1：中小特殊紙工場（年生産5万t）の年間14%削減（Before/After）",
    before: "中小特殊紙工場A社（抄紙機1台、特別高圧1,800 kW、年間1,500万kWh、年間電気代3.75億円）。地域電力会社の特別高圧B契約継続、コンプレッサー・モーター老朽化、自家消費太陽光なし。",
    after: "新電力切替（固定5年）／コンプレッサー全機インバーター化（投資 5,000万円）／高効率モーター更新／自家消費太陽光500 kW導入。",
    result: "年間電気代 3.75億円 → 3.23億円（▲14%、▲5,250万円）／契約 kW 1,800→1,650／投資回収 3.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模製紙工場（年生産25万t）の年間18%削減",
    before: "中規模製紙工場B社（抄紙機3台、特別高圧 8,000 kW、年間 6,500 万 kWh、年間電気代 16.25億円）。バイオマス自家発電10 MW運用済も系統電力依存度高い、固定3年プラン継続。",
    after: "固定7年プラン切替／バイオマス自家発電容量増強（10→15 MW、投資30億円）／自家消費太陽光 3 MW 導入（屋根18,000 m²）／高効率抄紙機1台更新／DR契約締結／需要家主導型PPA補助金活用。",
    result: "年間電気代 16.25億円 → 13.32億円（▲18%、▲2.93億円）／契約 kW 8,000→6,500／投資回収 8.5年（補助金後 6.5年）／系統電力比率 70%→45%",
  },
  {
    title: "事例3：大手製紙メーカー基幹工場（年生産80万t）の年間8.5億円削減",
    before: "大手製紙メーカーC社の基幹工場（抄紙機6台、特別高圧 35,000 kW、年間 2.8億 kWh、年間電気代 70億円）。バイオマス自家発電40 MW（黒液回収ボイラ＋木質バイオマス）運用、長期固定10年契約継続、CO₂排出量削減目標30%（2030年）。",
    after: "バイオマス自家発電容量増強（40→60 MW、投資150億円）／自家消費太陽光 8 MW＋蓄電池 12 MWh／DR（デマンドレスポンス）契約強化／VBP（バーチャル・パワー・プラント）参加／逆潮流（余剰電力売電）開始／全社共通電力購入契約再交渉。",
    result: "年間電気代 70億円 → 61.5億円（▲12%、▲8.5億円）／系統電力比率 50%→25%／投資回収 10年（補助金後 7.5年）／CO₂削減 約45,000 t/年／余剰電力売電収入 年5億円",
  },
];

const demandManagement = [
  {
    label: "抄紙機の連続稼働率最大化",
    detail:
      "抄紙機の停止・再起動を最小化し連続稼働率を95%以上に維持。停止コスト（再起動電力＋逸失利益）を回避することで実質的な省エネを実現。",
  },
  {
    label: "リファイナー・パルパーのインバーター制御",
    detail:
      "従来固定速モーターを最新インバーター制御に更新。負荷追従で年間電力▲15〜25%削減。投資回収3〜5年（SII補助活用で2〜3年）。",
  },
  {
    label: "コンプレッサー・ポンプの可変速制御",
    detail:
      "ユーティリティ系設備のインバーター化で年間電力▲20〜30%削減。製紙工場の省エネ投資の最も効果が高い領域。",
  },
  {
    label: "バイオマス自家発電と系統電力の最適配分",
    detail:
      "黒液回収ボイラ・木質チップ発電と系統電力の発電原価比較を月次で実施。系統高騰時はバイオマス出力増、バイオマス燃料費高騰時は系統依存度上げる柔軟運用。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率モーター・コンプレッサー・抄紙機更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "紙パルプ業の設備投資の主力補助金。インバーター化・モーター更新で採択率高い。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場屋根面積を活用しやすく、24h稼働ベースロード大の製紙工場と相性良い。",
  },
  {
    name: "バイオマス利用補助（経産省・林野庁）",
    target: "黒液回収ボイラ・木質バイオマス発電",
    rate: "1/3〜1/2、上限数億〜数十億円",
    note: "紙パルプ業の主力電源対策。製紙工程の副産物（黒液）を活用する循環型エネルギー。",
  },
  {
    name: "脱炭素・GX促進補助（経産省・環境省）",
    target: "脱炭素設備投資（高効率設備・再エネ）",
    rate: "1/3〜1/2、上限数十億円",
    note: "2025年度以降紙パルプ業のCO₂削減投資が対象に拡大。大規模プロジェクト向け。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "特別高圧の中の契約区分（自由化・規制）変更余地を確認したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "バイオマス自家発電と系統電力の発電原価比較を月次で実施しているか",
  "抄紙機・リファイナー・コンプレッサーの設備更新計画と電気契約見直しを同期させたか",
  "工場屋根面積を活用した自家消費型太陽光の適性（耐荷重・方位・遮蔽）を確認したか",
  "蓄電池導入の経済合理性（ピークカット効果＋BCP＋補助金）を試算したか",
  "DR契約・VBP参加によるリベート収入機会を評価したか",
  "余剰電力売電（逆潮流）の可能性と系統運用者との協議を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象要件（製造業の原単位要件）を確認したか",
  "JEPX市場価格高騰局面でのバイオマス出力増運用シミュレーションを実施したか",
];

const faqItems = [
  { question: "紙パルプ業の電気代水準はどれくらいですか？", answer: "売上高の4.0〜8.0%が目安です（製造業平均の3〜4倍）。年間電気代は中小特殊紙工場（年生産5万t）で2.5〜7.5億円、中規模製紙工場（年生産25万t）で10〜30億円、大手製紙メーカー基幹工場（年生産80万t）で40〜100億円規模になります。" },
  { question: "紙パルプ業の固定プランと市場連動プランどちらが向きますか？", answer: "24時間365日連続稼働で使用量が膨大なため、市場価格変動の影響額が桁違いに大きく、固定プランが強く向きます。長期固定（5〜10年）契約が業界標準で、化石燃料価格・古紙価格との3重コスト圧迫の中で電気代の安定性は経営の根幹。バイオマス自家発電との組み合わせ運用が主流です。" },
  { question: "バイオマス自家発電は紙パルプ業でどれくらい一般的ですか？", answer: "大規模製紙工場では黒液回収ボイラ（クラフトパルプ製造の副産物利用）＋木質バイオマスで自家発電比率50〜70%が標準。電力多消費業種ゆえに自家発電の経済合理性が高く、CO₂削減目標達成にも寄与します。中規模工場も10〜30%のバイオマス発電を持つケースが増加中。" },
  { question: "紙1トンあたりの電気代はどれくらいですか？", answer: "段ボール原紙で1トンあたり1,200〜2,000円、新聞紙で1,500〜2,300円、印刷用紙で1,800〜3,000円が目安です（電力単価25円/kWh前提）。電力単価が30円/kWhに上昇すると1トンあたり300〜600円の追加コストとなり、製品価格への転嫁余地が経営判断の重要論点になります。" },
  { question: "紙パルプ業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（補助率1/3〜1/2、モーター・コンプレッサー・抄紙機）、需要家主導型PPA補助金（太陽光・蓄電池）、バイオマス利用補助（黒液回収ボイラ・木質バイオマス）、脱炭素・GX促進補助（高効率設備）の4本柱。大規模投資（数十億円規模）の場合は複数補助金の組合せ申請が標準。" },
  { question: "DR契約・VBP参加でどれくらいリベートが得られますか？", answer: "中規模製紙工場（特別高圧 5,000 kW）のDR契約参加で年500〜2,000万円のリベート収入が現実的。大規模工場ではVBP参加と組み合わせて年5,000万円〜数億円規模も可能。需給逼迫時に抄紙機出力を一時調整できる柔軟性が前提です。" },
  { question: "工場屋根への自家消費太陽光は紙パルプ業で投資回収できますか？", answer: "屋根面積10,000 m²以上、24h連続稼働ベースロード極大の製紙工場は業種別で最上位の相性。1 MW級で年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜8年）が目安です。バイオマス発電と組み合わせて再エネ比率向上の経営目標達成にも寄与します。" },
  { question: "紙パルプ業のBCP電源確保はどう設計すべきですか？", answer: "バイオマス自家発電（黒液回収ボイラ）が事実上のBCP電源として機能。系統停電時もパルプ製造を継続できる体制が業界標準。中規模以上の工場は系統＋自家発電のハイブリッド運用で電力安定供給を実現しています。蓄電池導入は瞬停対策・ピークカット用途が主目的。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "経済産業省（工業統計・紙パルプ業データ）", url: "https://www.meti.go.jp/statistics/" },
  { name: "日本製紙連合会（業界統計・電力消費データ）", url: "https://www.jpa.gr.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PulpPaperElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/pulp-paper-electricity-cost-review"
        datePublished="2026-05-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">紙パルプ業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            紙パルプ業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            紙パルプ業（製紙工場）は、抄紙機・リファイナー・蒸解・漂白工程・排水処理が24時間365日連続稼働する、製造業の中でも代表的な電力多消費業種です。電気料金が売上高の4.0〜8.0%を占め、化石燃料価格・古紙価格との3重コスト圧迫の中で、バイオマス自家発電と系統電力の最適配分が経営競争力を左右します。本ページでは紙パルプ業特有の電力構造、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-17" updatedAt="2026-05-17" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>紙パルプ業の電力使用プロファイル（抄紙機／リファイナー／排水処理／ユーティリティ）</li>
              <li>業界平均の電気代水準（売上高比4.0〜8.0%）と紙1トンあたり単価</li>
              <li>バイオマス自家発電（黒液回収ボイラ・木質バイオマス）と系統電力の最適配分</li>
              <li>規模別（中小／中規模／大手基幹）の電気代と削減事例3件（Before/After）</li>
              <li>デマンド管理・コンプレッサーインバーター化・自家消費太陽光の費用対効果</li>
              <li>SII・PPA・バイオマス・GX促進補助の組合せ活用</li>
              <li>紙パルプ業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              紙パルプ業の電力使用特性 — 抄紙機を中心とした製造工程の5層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業の電力使用は『抄紙機（30〜45%）／リファイナー・パルパー（20〜30%）／蒸解・漂白（10〜20%）／排水処理（8〜15%）／ユーティリティ（15〜25%）』の5層構造です。24時間365日連続稼働が前提で、停止損失コストが極めて大きいため省エネ余地が限定される一方、わずかな効率改善でも年間数千万円のインパクトを生みます。
            </p>
            <div className="mt-4 space-y-3">
              {usageProfile.map((item) => (
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
              業界平均の電気代水準 — 売上高比4.0〜8.0%、紙1t単価1,200〜3,000円
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業の電気代水準は事業形態（特殊紙／段ボール原紙／新聞紙／印刷用紙）と規模で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本製紙連合会・経産省工業統計・紙パルプ業界誌から整理。実値は製品種別・古紙比率・自家発電比率で1.5倍前後ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              紙パルプ業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・原料連動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握し、化石燃料・古紙価格との3重コスト構造への対応策を講じる必要があります。
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
              規模別の削減事例3件 — 中小特殊紙／中規模製紙／大手基幹工場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種横断のコスト構造比較は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              、関連業種の事例は{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">連続操業工場の見直し</Link>
              、{" "}
              <Link href="/printing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">印刷業の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド管理のポイント — 連続稼働率最大化と自家発電連携
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業のデマンド管理は『抄紙機の連続稼働率最大化』『インバーター化』『ユーティリティ可変速制御』『バイオマス自家発電と系統電力の最適配分』の4軸で進めます。停止損失コストが大きいため、運用最適化の効果が極めて大きい業種です。
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
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              、削減効果の試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 大量使用業種ゆえの長期固定戦略
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業は24時間365日連続稼働で年間使用量が桁違いに大きく、市場価格高騰局面での影響額が事業継続を左右します。長期固定（5〜10年）契約とバイオマス自家発電の組み合わせが業界の標準戦略です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが強く向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>使用量が桁違いに大きく価格変動の影響額が事業継続リスク</li>
                  <li>24時間365日連続稼働で価格変動から逃れる手段がない</li>
                  <li>古紙価格・化石燃料価格との3重コスト圧迫の中で電気代安定が必須</li>
                  <li>長期固定（5〜10年）契約でバイオマス自家発電投資の判断基準が安定</li>
                  <li>紙製品の販売価格決定が長期取引契約で電気代変動の即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期に最も電力を使う特性がリスクを最大化</li>
                  <li>使用量が桁違いのため高騰時の追加コストが数億〜数十億円規模</li>
                  <li>抄紙機停止損失（数百〜数千万円/日）のため節電不可</li>
                  <li>電力市場の常時監視と緊急対応体制が必要</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数十億円の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、固定プラン適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、比較は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定プランの違い</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 大量使用業種ゆえの巨額負担と減免活用
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間使用量が桁違いに大きい紙パルプ業では、負担額が請求総額の15〜20%、年間数億〜数十億円規模に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模製紙工場（年6,500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 2.27億円</li>
                  <li>2025年度（3.98円/kWh）：年 2.59億円（+0.32億円）</li>
                  <li>2026年度（4.18円/kWh）：年 2.72億円（+0.45億円）</li>
                  <li>3年間で年4,400万円超の負担増（年使用量横ばい前提）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">減免制度の活用</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年間電力使用量1,000万kWh以上の事業所で減免対象</li>
                  <li>紙パルプ業は電力多消費業種として原単位要件を満たしやすい</li>
                  <li>大手製紙メーカーの基幹工場は減免率 8/10〜9/10（負担減80〜90%）の事例も</li>
                  <li>自家消費太陽光・バイオマス自家発電で系統供給量を減らすことが追加策</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、自家消費太陽光による削減策は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              紙パルプ業特有の節電・省エネ施策 — バイオマス・インバーター・太陽光・DR
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業の省エネは『バイオマス自家発電』『コンプレッサー・モーターのインバーター化』『高効率抄紙機更新』『DR契約・VBP参加』の4軸で組み立てます。各軸の年間削減効果と投資回収年数を提示します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">バイオマス自家発電（黒液回収ボイラ・木質）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>黒液回収ボイラ（クラフトパルプ製造の副産物利用）で系統電力依存度▲30〜50%</li>
                  <li>木質バイオマス発電と組み合わせて再エネ比率向上</li>
                  <li>バイオマス利用補助1/3〜1/2活用で投資回収7〜10年</li>
                  <li>CO₂削減目標達成（2030年・2050年）の主軸</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コンプレッサー・モーターのインバーター化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ユーティリティ電力▲20〜30%（年間数千万〜数億円削減）</li>
                  <li>SII補助1/2活用で投資回収2〜3年</li>
                  <li>製紙工場の省エネ投資で最も効果が高い領域</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（2〜10 MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電（年1,000〜1,500万円削減）</li>
                  <li>必要屋根面積 約6,000〜8,000 m²/MW</li>
                  <li>投資回収 7〜10年（補助金後 5〜8年）</li>
                  <li>24h連続稼働で自家消費率極めて高い</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">DR契約・VBP参加・余剰電力売電</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>DR契約参加で年500〜2,000万円のリベート</li>
                  <li>VBP参加でアグリゲーター収入年5,000万〜数億円</li>
                  <li>バイオマス自家発電の余剰電力売電年数億円</li>
                  <li>新たな収益源として注目される領域</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              、太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、蓄電池活用は{" "}
              <Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池のBCP×ピークカット活用</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・バイオマス・GX促進
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。大規模投資（数十〜数百億円規模）の場合は複数補助金の組合せ申請（SII＋PPA＋バイオマス＋GX）が標準で、採択率も高くなります。
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
              紙パルプ業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
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
              シミュレーターで自社製紙工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              紙パルプ業は電力多消費業種として、わずかな電気料金変動でも年間数千万〜数億円のインパクトが発生します。シミュレーターで自社条件における年間上振れ幅を試算し、長期固定契約・バイオマス自家発電投資・太陽光導入の優先順位付けに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プラン（5〜10年）と市場連動プランの年間コスト差を把握する</li>
              <li>バイオマス自家発電と系統電力の最適配分シナリオを比較する</li>
              <li>事例で示した12〜18%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-17"
            />
            <GlossaryLinks currentSlug="pulp-paper-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "32業種の電気料金見直しポイントをハブから探す。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "連続操業工場の電気料金見直し", description: "24h稼働のベースロード極大の工場との比較。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "生産ラインとデマンド管理の考え方。" },
              { href: "/printing-electricity-cost-review", title: "印刷業の電気料金見直し", description: "紙パルプの主要顧客である印刷業の電力構造。" },
              { href: "/semiconductor-facility-electricity-cost-review", title: "半導体施設の電気料金見直し", description: "電力多消費業種としての対策比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "大量使用業種に長期固定が強く向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減・BCP・自家発電補完の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "工場屋根面積極大の紙パルプ業の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "24h連続稼働の紙パルプ業の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "モーター・コンプレッサー更新で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "24h稼働・高負荷で共通する大型設備の構造比較。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード極大の紙パルプ業に直結するリスク。" },
            ]}
          />

          <ContentCta
            heading="自社の製紙工場条件でリスクを確認する"
            description="製紙工場の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。バイオマス自家発電・太陽光導入後のシナリオ比較や、長期固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
