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
  "自動車部品業の電気料金見直しポイント｜Tier1/Tier2・JIT生産・EVシフトの契約最適化";
const pageDescription =
  "自動車部品業（Tier1/Tier2サプライヤー・EV部品）の電気料金見直しを解説。JIT生産の負荷変動、EVシフトに伴う電気代増、海外工場比較、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自動車部品業 電気料金 見直し",
    "Tier1 Tier2 電気代",
    "EV部品 電力契約",
    "JIT生産 電力",
    "自動車部品工場 電気代",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/auto-parts-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/auto-parts-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle }],
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
    label: "プレス・鋳造・鍛造（大型動力設備）",
    detail:
      "自動車部品の素形材製造工程。プレス機（300〜2,000t）、鋳造機、鍛造機が組み合わさる。1台あたり数百〜数千kWの動力負荷で、Tier1サプライヤーで工場全体の電力使用量の25〜40%を占める。",
  },
  {
    label: "切削加工・マシニング（精密加工）",
    detail:
      "エンジン部品・ミッション部品の切削加工。マシニングセンタ（5〜50kW）、CNC旋盤、研削盤が多数並ぶ。中規模Tier1工場で年間500〜2,000万kWh、加工量と電力消費が比例。",
  },
  {
    label: "塗装・電着塗装・乾燥炉",
    detail:
      "ボディ部品・外装部品の塗装ライン。電着塗装槽、塗装ブース空調、乾燥炉が連続稼働。1ラインで500〜2,000kWの常時負荷、塗装工場で工場全体の電力消費の20〜30%を占める。",
  },
  {
    label: "溶接ライン・組立ライン",
    detail:
      "スポット溶接・アーク溶接・レーザー溶接の各設備、ボディ・サブASSY組立ラインのコンベア・空圧・ロボット動力。Tier1で1ライン100〜500kW、複数ラインの合算で大規模負荷。",
  },
  {
    label: "EV部品（モーター・バッテリー・パワエレ）",
    detail:
      "EVシフトに伴い、車載モーター巻線、バッテリーパック組立、インバータ・コンバータの電子部品製造ラインが追加。クリーンルーム要件、温度管理、検査設備の追加で電力使用量が従来車部品工場の1.2〜1.5倍に増加トレンド。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本自動車部品工業会の統計から、自動車部品業の電気料金は売上高比3〜7%、製造原価比4〜10%。中堅Tier1サプライヤーで年5〜30億円、大手Tier1で年30〜150億円規模の電気代。",
  },
  {
    label: "製品単位あたりの電力使用量",
    detail:
      "エンジン部品1tの加工で250〜450 kWh、ボディプレス部品1tで180〜350 kWh、EVモーター1台で25〜60 kWh、バッテリーパック1台で200〜500 kWh。EV部品が電気自動車1台あたりの電力集約度を引き上げる傾向。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模Tier2部品工場（150〜500名）で年間500〜2,000万kWh、中規模Tier1工場（500〜2,000名）で年間2,000万〜1億kWh、大手Tier1メガサプライヤー（2,000名超）で年間1〜5億kWh。特別高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額のJIT生産への影響",
    detail:
      "自動車部品業は完成車メーカーのJIT生産に対応する負荷変動が大きく、燃料費調整額1円/kWhの変動でも中規模工場（年5,000万kWh）で年5,000万円の差。Tier1メガサプライヤーでは年5億円超のインパクト。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間5,000万kWh使用の中規模Tier1工場で年2.09億円の負担、5年で10.45億円超。減免制度（年間1,000万kWh以上等）対象。",
  },
  {
    label: "完成車メーカーのカーボンニュートラル要求",
    detail:
      "TOYOTA・HONDA等のサプライチェーン全体でのカーボンニュートラル目標達成のため、Tier1/Tier2サプライヤー側に再エネ100%調達・CN対応が要求。グリーン電力プレミアム、PPA契約の追加コストが新たな負担に。",
  },
  {
    label: "EVシフトに伴う電力使用量増",
    detail:
      "従来車（エンジン部品）からEV部品（モーター・バッテリー・パワエレ）への事業シフトで、製造ライン1台あたりの電力使用量が増加。EV比率上昇により業界全体の電力使用量が年5〜10%増加トレンド。",
  },
  {
    label: "海外工場との比較競争",
    detail:
      "東南アジア・メキシコ・中国の海外工場との価格競争で、国内工場の電気代上昇が原価競争力を直撃。国内Tier1サプライヤーで電気代上昇分を完成車メーカーへ転嫁できないケースが多発。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模Tier2部品工場（従業員150〜500名）",
    profile: "Tier2部品メーカー／高圧 1,000〜3,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "新電力切替・固定3年契約・LED化・コンプレッサー最適化で年8〜12%削減事例。完成車メーカーのCN要求対応強化。",
  },
  {
    size: "中規模Tier1工場（従業員500〜2,000名）",
    profile: "国内中堅Tier1サプライヤー／特別高圧 3,000〜10,000kW／年間 2,000万〜1億kWh",
    annualCost: "年間電気代 6〜30 億円",
    note: "固定5年契約＋自家消費太陽光（3〜5MW）＋プレス機インバータ化＋空調最適化＋グリーン電力部分調達で年10〜15%削減事例。",
  },
  {
    size: "大手Tier1メガサプライヤー（従業員2,000名超）",
    profile: "デンソー・アイシン級／特別高圧 10,000〜30,000kW／年間 1〜5億kWh",
    annualCost: "年間電気代 30〜150 億円",
    note: "1%の単価改善でも年3,000万〜1.5億円のインパクト。長期固定（10〜15年）契約＋大規模太陽光（10〜30MW）＋オフサイトPPA＋DR契約が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅Tier2部品工場の年間11%削減（Before/After）",
    before: "中部地区のTier2部品メーカーA社の主力工場（高圧 2,000kW、年間 1,500万kWh、年間電気代 4.5億円）。市場連動プラン継続、プレス機インバータなし、コンプレッサー台数制御なし、LED未更新。",
    after: "新電力切替（固定3年）／プレス機インバータ化（投資 1,800万円）／コンプレッサー台数制御＋インバータ化／全照明LED化／力率改善コンデンサ更新。",
    result: "年間電気代 4.5億円 → 4.0億円（▲11%、▲5,000万円）／契約 kW 2,000→1,800／投資回収 2年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅Tier1工場の年間14%削減",
    before: "国内中堅Tier1サプライヤーB社の基幹工場（特別高圧 6,000kW、年間 5,000万kWh、年間電気代 15億円）。市場連動プランで2022〜2023年に月最大8,000万円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 4MW（屋根24,000m²）／プレス機・マシニングセンタの省エネ運転制御／塗装ブース熱回収／需要家主導型PPA補助金活用／グリーン電力25%調達（完成車メーカー対応）。",
    result: "年間電気代 15億円 → 12.9億円（▲14%、▲2.1億円）／契約 kW 6,000→5,300／投資回収 6年（補助金後 4年）",
  },
  {
    title: "事例3：大手Tier1メガサプライヤー年間8億円削減",
    before: "大手Tier1メガサプライヤーC社の主力工場（特別高圧 20,000kW、年間 1.8億kWh、年間電気代 54億円）。長期固定契約継続もEV部品ライン追加で電力使用量が3年で25%増加。",
    after: "電力契約の12年長期固定締結／自家消費太陽光 20MW＋蓄電池 15MWh／オフサイトPPA 30MW（再エネ100%対応）／EV部品ライン専用空調最適化／DR契約／需要家主導型PPA＋GX補助活用／完成車メーカーへのCN対応強化。",
    result: "年間電気代 54億円 → 46億円（▲14.8%、▲8億円）／契約 kW 20,000→17,500／投資回収 8年（補助金後 5.5年）／CO₂削減 約30,000 t/年",
  },
];

const demandManagement = [
  {
    label: "プレス機・マシニングセンタの起動シフト",
    detail:
      "複数プレス機・マシニングセンタの同時起動を避け、ライン別に時間差で起動。3交代制工場では夜勤シフト時刻の調整で5〜10%のピーク削減が可能。",
  },
  {
    label: "塗装ライン・乾燥炉の温度管理最適化",
    detail:
      "電着塗装槽・乾燥炉の温度設定最適化＋廃熱回収で電力▲15〜25%削減。塗装ブース空調のVAV制御も有効。",
  },
  {
    label: "コンプレッサー・空調のインバータ化",
    detail:
      "工場全体の大型コンプレッサー（200〜2,000kW）、塗装ブース空調はインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
  {
    label: "JIT負荷変動の平準化（バッチ生産導入）",
    detail:
      "完成車メーカーのJIT要求に応じる中で、製造側でバッチ生産・在庫バッファ活用で電力使用量を平準化。契約電力削減と燃料費調整額影響低減の両立が可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "プレス機・コンプレッサー・LED・空調・塗装ブース更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "自動車部品業のような連続稼働業種で採択率が高い主力補助金。プレス機・コンプレッサーで大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が広く、24h稼働で自家消費率が高い自動車部品業と相性良好。完成車メーカーCN対応に整合。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "塗装ライン電化・EV部品ライン省エネ・大規模PPA",
    rate: "1/2、上限数億円",
    note: "CN対応のための大型補助。EV部品ライン新設・既存ライン更新で活用可能。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小Tier2部品工場の設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小Tier2部品工場で活用可能。LED・空調・コンプレッサー更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "JIT負荷変動の平準化（バッチ生産・在庫バッファ）を検討したか",
  "工場敷地を活用した自家消費太陽光（3〜20MW）導入の試算を実施したか",
  "EV部品ラインの追加に伴う契約電力上振れを見積もったか",
  "プレス機・コンプレッサー・空調のインバータ化を評価したか",
  "塗装ライン・乾燥炉の廃熱回収による省エネを評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "完成車メーカーCN要求対応のグリーン電力調達計画があるか",
  "SII省エネ補助金・需要家主導型PPA補助金・GX補助の組合せ申請を検討したか",
];

const faqItems = [
  { question: "自動車部品業の電気代水準はどれくらいですか？", answer: "売上高比3〜7%、製造原価比4〜10%が業界平均です。中規模Tier1工場で年6〜30億円、大手Tier1メガサプライヤーで年30〜150億円規模の電気代になります。" },
  { question: "完成車メーカーのCN要求にはどう対応すべきですか？", answer: "サプライチェーン全体のCN目標達成のため、再エネ100%調達・PPA契約・自家消費太陽光導入が事実上必須化しています。Tier1サプライヤーは2030年までの段階的対応計画策定が一般的です。" },
  { question: "EVシフトで電気代はどれくらい増えますか？", answer: "従来車（エンジン部品）からEV部品（モーター・バッテリー・パワエレ）に事業シフトすると、製造ライン1台あたりの電力使用量が1.2〜1.5倍に増加。中規模Tier1工場で年間電力使用量が3,000〜5,000万kWh追加、契約電力1,000〜2,000kW上振れ事例。" },
  { question: "自動車部品業に向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続稼働でベースロードが大きく、完成車メーカーへの即時転嫁が困難なため固定プラン推奨。長期固定（5〜15年）契約と長期供給契約（完成車メーカーへの部品供給）の整合性も高い。" },
  { question: "JIT生産対応で契約電力の最適化は難しいですか？", answer: "完成車メーカーのJIT要求に応じる中で、製造側でバッチ生産・在庫バッファ活用で電力使用量を平準化することで契約電力削減が可能です。中規模Tier1で契約電力10〜15%削減事例多数。" },
  { question: "自家消費型太陽光は自動車部品工場で投資回収できますか？", answer: "工場敷地が広く、24h連続稼働の自動車部品工場は業種別で上位の相性。5MWで年550〜650万kWh発電、年5,000〜6,500万円削減、投資回収6〜8年（補助金後4〜6年）が目安です。" },
  { question: "完成車メーカーへの電気代上昇分転嫁は可能ですか？", answer: "原則として困難ですが、原材料費スライド条項（電気代を含む）が組まれているケースもあります。長期供給契約の改定タイミングでの電力コスト連動条項追加が交渉ポイント。" },
  { question: "自動車部品業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（プレス機・コンプレッサー）、需要家主導型PPA補助金（屋上太陽光）、脱炭素先行地域・GX補助（EV部品・塗装ライン）、中小企業補助の4本柱です。複数組合せで採択率向上。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本自動車部品工業会（JAPIA）", url: "https://www.japia.or.jp/" },
  { name: "日本自動車工業会（JAMA）", url: "https://www.jama.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function AutoPartsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/auto-parts-electricity-cost-review"
        datePublished="2026-05-21"
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
          <span className="text-slate-800">自動車部品業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            自動車部品業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自動車部品業（Tier1/Tier2サプライヤー・EV部品メーカー）は、プレス・鋳造・切削・塗装・組立工程が並列する大規模製造業です。完成車メーカーのJIT生産要求、CNサプライチェーン要求、EVシフトに伴う電力使用量増、海外工場との競争という4重の経営課題に直面しています。本ページでは自動車部品業特有の電力負荷特性、業界平均水準、規模別事例、JIT平準化、CN対応、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>自動車部品業の電力使用プロファイル（プレス／切削／塗装／組立／EV部品）</li>
              <li>業界平均の電気代水準（売上高比3〜7%）と単位製品単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金・EVシフトの影響</li>
              <li>規模別（Tier2／中堅Tier1／メガサプライヤー）の電気代と削減事例3件（Before/After）</li>
              <li>完成車メーカーCN要求対応とJIT負荷変動平準化</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>自動車部品業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              自動車部品業の電力使用特性 — プレス・切削・塗装・組立・EV部品
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業の電力使用は『プレス・鋳造・鍛造（素形材）／切削・マシニング（精密加工）／塗装・乾燥炉／溶接・組立／EV部品（モーター・バッテリー）』の5層構造です。EVシフトで電力強度が変化中、各工程の電力プロファイル把握が見直しの起点になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              業界平均の電気代水準 — 売上高比3〜7%、Tier1で大規模
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業の電気代水準は事業形態（Tier1/Tier2/Tier3）と部品種別（素形材・電装・EV部品）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              ※ 出典: 日本自動車部品工業会・日本自動車工業会・経産省工業統計から整理。実値はTier階層・EV比率で2〜4倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              自動車部品業の主要な電気代上昇要因 — 燃料費・賦課金・CN要求・EVシフト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業の電気代上昇は、制度的要因（燃料費・賦課金・容量拠出金）に加え、完成車メーカーのCNサプライチェーン要求、EVシフトに伴う電力使用量増、海外工場との競争という業界固有要因が並列します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              規模別の削減事例3件 — Tier2／中堅Tier1／メガサプライヤー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              関連業種の事例は{" "}
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">組立工場の電気料金見直し</Link>
              、{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              JIT生産対応とCNサプライチェーン要求の両立
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業のエネルギー戦略の中核はJIT生産対応とCNサプライチェーン要求の両立。完成車メーカーの即時納入要求に対応しつつ、再エネ100%調達計画を進めるという複層的アプローチが必要です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">JIT負荷変動平準化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>バッチ生産＋在庫バッファ活用</li>
                  <li>製造側で電力使用量平準化</li>
                  <li>契約電力削減と燃料費影響低減</li>
                  <li>夜間生産シフトで深夜電力活用</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">CNサプライチェーン対応</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>自家消費太陽光5〜20MW</li>
                  <li>オフサイトPPA10〜30MW</li>
                  <li>非化石証書購入で部分対応</li>
                  <li>完成車メーカーへの定期報告</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              連続稼働工場の関連論点は{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              自動車部品業のデマンド管理 — 起動シフト・塗装最適化・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業のデマンド管理は『プレス機・マシニングセンタ起動シフト』『塗装ライン温度管理最適化』『コンプレッサー・空調インバータ化』『JIT負荷平準化』の4論点を組合せて最適化します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              燃料費調整・市場連動プランの影響 — 完成車メーカーへの転嫁困難
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業は24時間連続稼働でベースロードが大きく、完成車メーカーへの即時転嫁が困難なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プラン採用は経営判断レベルの論点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24時間連続稼働・大量使用</li>
                  <li>完成車メーカーへの即時転嫁が困難</li>
                  <li>EVシフトで電力使用量増加トレンド</li>
                  <li>CN対応長期投資計画と固定単価の親和性</li>
                  <li>長期供給契約（完成車メーカー）との整合性</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>完成車メーカーへの転嫁不可で利益直撃</li>
                  <li>海外工場との価格競争で原価競争力低下</li>
                  <li>JEPX 80円/kWh級高騰時に年数億円の追加負担</li>
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
              業種特有の節電・省エネ施策 — プレス機・塗装・コンプレッサー・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業向けの省エネ施策は『プレス機・マシニングセンタのインバータ化』『塗装ライン熱回収』『コンプレッサー台数制御』『大規模自家消費太陽光（5〜20MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">プレス機・マシニングセンタ最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>サーボプレスへの更新</li>
                  <li>マシニングセンタのインバータ駆動</li>
                  <li>電力▲15〜25%、SII補助1/2</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">塗装ライン熱回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>乾燥炉廃熱の再利用</li>
                  <li>電力▲10〜20%、蒸気▲30%</li>
                  <li>SII補助1/2、投資回収3〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コンプレッサー台数制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>200〜2,000kW級のインバータ化</li>
                  <li>電力▲20〜35%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">大規模自家消費太陽光（5〜20MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>5MWで年550〜650万kWh発電</li>
                  <li>24h稼働で自家消費率95%超</li>
                  <li>投資回収 6〜8年（補助金後 4〜6年）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              自動車部品業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              シミュレーターで自社部品工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車部品業はJIT生産・CN要求・EVシフト・海外競争の4重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>EV部品ライン追加後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した11〜15%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="auto-parts-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立ライン中心の関連事例。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工の類似事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働業種の関連事例。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "重工業類似事例。" },
              { href: "/electronics-electricity-cost-review", title: "電子機器業の電気料金見直し", description: "電装部品関連業種の事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "完成車メーカーへの転嫁困難な業種の選択。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "プレス機・コンプレッサーで活用できる主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の自動車部品業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社部品工場条件でリスクを確認する"
            description="プレス・切削・塗装・組立・EV部品ラインの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。EVシフト後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
