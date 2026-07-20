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
  "撮影スタジオ・映像制作の電気料金見直しポイント｜撮影照明・編集ルーム・密閉スタジオ空調の契約最適化";
const pageDescription =
  "撮影スタジオ・映像制作の電気料金見直しを解説。撮影照明（ハロゲン/LED/HMI）、編集ルーム、密閉スタジオ空調、撮影日ピーク、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "撮影スタジオ 電気料金 見直し",
    "映像制作 電気代",
    "撮影照明 LED 電力",
    "編集ルーム 電気代",
    "映画スタジオ 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/film-production-studio-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/film-production-studio-electricity-cost-review",
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
    description: pageTitle,
    images: ["/api/og/industry-guide"],
  },
};

const usageProfile = [
  {
    label: "撮影照明（ハロゲン・LED・HMI）",
    detail:
      "撮影スタジオの基幹設備。タングステン（ハロゲン）2〜10kW/灯、HMI（高効率放電ランプ）1.2〜18kW/灯、LED撮影ライト0.3〜2kW/灯。中規模スタジオで撮影時総設備100〜400kW、撮影日のみピーク稼働。スタジオ全体電力の30〜50%を占める。",
  },
  {
    label: "密閉スタジオ空調（防音密閉スペース）",
    detail:
      "防音密閉構造の撮影スタジオは外気導入が制限され、人員＋照明発熱の負荷集中。中規模スタジオで総設備50〜250kW、撮影中は連続稼働。スタジオ全体の20〜30%を占める。",
  },
  {
    label: "編集ルーム（高性能PC・サーバー）24h",
    detail:
      "映像編集用高性能ワークステーション（1台2〜5kW）、レンダリングサーバー、ストレージNAS、編集ルーム空調。中規模プロダクションで総設備50〜200kWの常時稼働。納期前は24h稼働。",
  },
  {
    label: "音響設備（録音・MA・整音）",
    detail:
      "録音スタジオ、MAスタジオ、整音ルーム、防音空調、ProTools等DAWシステム。中規模プロダクションで総設備20〜80kW。長時間稼働で機材一定電力。",
  },
  {
    label: "グリーンバック・モーションキャプチャ機材",
    detail:
      "VFX用グリーンバック専用LED照明、モーションキャプチャカメラ、専用PC、トラッキングシステム。大規模スタジオで総設備50〜200kW。撮影日のみ稼働だが瞬間負荷大。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本映画製作者連盟・日本映像ソフト協会・経産省コンテンツ産業課によれば、撮影スタジオ・映像制作の電気料金は売上高の3〜8%（撮影主体は最高水準）。撮影日と非撮影日の負荷格差大、機材点数による変動大。",
  },
  {
    label: "スタジオ面積1m²あたりの電力使用量",
    detail:
      "小規模スタジオで1m²あたり年間180〜350 kWh、中規模映像プロダクションで1m²あたり年間300〜600 kWh、大規模撮影所で1m²あたり年間400〜900 kWh（複数ステージ含む）が業界平均。撮影頻度が高いスタジオは平均より高い。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模スタジオ（年商0.5〜2億円）で年間20〜100万 kWh、中規模映像プロダクション（年商5〜20億円）で年間150〜600万 kWh、大規模撮影所（東宝・東映・日活等、年商50〜500億円）で年間800万〜5,000万 kWh。複数ステージ運営で特別高圧契約も。",
  },
];

const costFactors = [
  {
    label: "撮影日の集中ピーク負荷",
    detail:
      "撮影日のみ照明・空調がピーク稼働。中規模スタジオで撮影時は通常時の3〜5倍の電力。デマンドが1日のピークで決まり、撮影頻度が低くても契約電力高止まり。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間400万kWh使用の中規模プロダクションで年1,672万円の負担。",
  },
  {
    label: "密閉スタジオの空調効率",
    detail:
      "防音密閉構造で外気導入制限、人員＋照明発熱の集中負荷。空調COPが低下しやすく、空調電力割合が一般オフィスの1.5〜2倍。",
  },
  {
    label: "編集機材24h稼働の連続負荷",
    detail:
      "納期前のレンダリングは24h連続稼働。サーバールーム空調も連続稼働必須。撮影なしでも編集電力で常時負荷。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、撮影日ピーク業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模スタジオ（年商0.5〜2億円）",
    profile: "都市型レンタルスタジオ・1ステージ／低圧 50〜150kW／年間 20〜100万 kWh",
    annualCost: "年間電気代 600万〜3,000万円",
    note: "LED撮影照明化・空調インバータ化で年10〜15%削減事例。",
  },
  {
    size: "中規模映像プロダクション（年商5〜20億円）",
    profile: "テレビCM・WEB動画専門中堅／高圧 200〜600kW／年間 150〜600万 kWh",
    annualCost: "年間電気代 4,500万〜1.8 億円",
    note: "LED撮影＋編集ルーム省電力＋自家消費太陽光で年12〜16%削減事例。",
  },
  {
    size: "大規模撮影所（年商50〜500億円、複数ステージ）",
    profile: "東宝・東映スタジオ・日活撮影所等／高圧 1,000〜4,000kW／年間 800万〜5,000万 kWh",
    annualCost: "年間電気代 2.4〜15 億円",
    note: "長期固定（5〜10年）契約＋LED全面化＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模撮影スタジオの年間13%削減（Before/After）",
    before: "都内の撮影スタジオA社（低圧 100kW、年間 60万 kWh、年間電気代 1,800万円）。市場連動プラン継続、ハロゲン撮影照明、空調オンオフ制御、編集ルーム省電力未対応。",
    after: "新電力切替（固定3年）／LED撮影照明への全面更新（タングステン→LED、投資300万円、SII補助1/2活用）／空調インバータ化／編集ルーム省電力設定／撮影スケジュール最適化（電力単価安価時間帯活用）／デマンドコントローラー導入。",
    result: "年間電気代 1,800万円 → 1,566万円（▲13%、▲234万円）／契約 kW 100→80／投資回収 補助金後 1.3年",
  },
  {
    title: "事例2：中規模映像プロダクションの年間15%削減",
    before: "都内の映像プロダクションB社（高圧 400kW、年間 350万 kWh、年間電気代 1.05億円）。市場連動プランで2022〜2023年に月最大350万円の追加負担。撮影照明ハロゲン主体、編集ルーム24h稼働、密閉スタジオ空調オーバースペック。",
    after: "固定3年プラン切替／LED撮影照明全面化（HMI・タングステン→LED、投資1,500万円）／密閉スタジオ空調インバータ化＋BEMS／自家消費太陽光 150kW 導入（屋根1,200 m²）／編集機材省電力ワークフロー導入／レンダリング夜間シフト／撮影スケジュール最適化／空調自動制御。",
    result: "年間電気代 1.05億円 → 8,925万円（▲15%、▲1,575万円）／契約 kW 400→340／投資回収 補助金後 3年",
  },
  {
    title: "事例3：大規模撮影所の年間2億円削減",
    before: "国内大手撮影所C社の主力ステージ群（高圧 2,500kW、年間 1,800万 kWh、年間電気代 5.4億円）。長期固定契約継続もVFXステージ増設で契約電力上振れ、複数ステージ間の機材重複多数。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 1 MW＋蓄電池 1MWh／コージェネ 500kW＋排熱回収（空調駆動）／LED撮影照明全面化／需要家主導型PPA／DR契約締結／BEMS統合運用／編集機材集約化／レンダリング集中サーバー化／空調全面更新／撮影スケジュール統合管理。",
    result: "年間電気代 5.4億円 → 3.4億円（▲37%、▲2億円）／契約 kW 2,500→2,000／投資回収 6年（補助金後 4年）／CO₂削減 約3,600 t/年",
  },
];

const demandManagement = [
  {
    label: "撮影照明のLED化・調光統合制御",
    detail:
      "ハロゲン・HMI→LED化で電力▲60〜80%。照明卓連動の調光統合制御でピーク負荷削減。撮影時最大電力▲40〜50%削減事例。",
  },
  {
    label: "密閉スタジオ空調の人員連動制御",
    detail:
      "BEMS連動でスタジオ在室人数・照明使用状況に応じてインバータ制御。空調電力▲20〜25%。",
  },
  {
    label: "編集機材の集約化・レンダリング夜間シフト",
    detail:
      "個別編集機を集中レンダリングサーバーに集約。レンダリング処理を電力単価安価な夜間に集中。編集電力▲25〜35%。",
  },
  {
    label: "撮影スケジュール最適化",
    detail:
      "複数ステージの撮影スケジュールを平準化し、同時ピーク稼働を回避。契約電力▲10〜15%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "LED撮影照明・空調更新・編集機材・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "映像制作業向けで採択率が高い主力補助金。LED撮影照明への全面更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい郊外型撮影所と相性が良い。日中撮影稼働で自家消費率70〜80%。",
  },
  {
    name: "経済産業省 コンテンツ産業支援補助金",
    target: "映像制作機材の省エネ更新・編集ワークフロー高度化",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "コンテンツ産業特有の補助制度。LED撮影＋編集ワークフロー刷新で利用可能。",
  },
  {
    name: "経産省 ものづくり・サービス等補助金",
    target: "撮影機材・編集設備の最新型更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "映像制作業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "撮影所全面更新・コージェネ・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "撮影日と非撮影日の電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "撮影照明・密閉スタジオ空調・編集ルーム・音響・VFX機材の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（100kW〜1MW）導入の試算を実施したか",
  "撮影照明LED化・空調インバータ化の投資回収試算を実施したか",
  "編集機材の集約化・レンダリング夜間シフトの導入状況を確認したか",
  "デマンドコントローラー・撮影スケジュール最適化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当するか",
  "SII・需要家主導型PPA・コンテンツ産業補助・ものづくり補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "撮影スタジオ・映像制作の電気代水準はどれくらいですか？", answer: "売上高比3〜8%（撮影主体は最高水準）が業界平均。小規模スタジオ（年商1億円級）で年600万〜3,000万円、中規模映像プロダクション（年商10億円級）で年4,500万〜1.8億円、大規模撮影所（年商100億円級）で年2.4〜15億円規模の電気代になります。" },
  { question: "撮影照明のLED化の効果は？", answer: "①ハロゲン・HMI→LEDで電力▲60〜80%、②発熱低減で空調負荷も▲20〜25%、③瞬時最大電力削減でデマンド▲30〜40%、④寿命10倍以上でランプ交換コスト削減、⑤調光調色機能で演出表現拡大、の5本柱が中心。投資回収はSII補助で2〜4年が目安です。" },
  { question: "編集ルームの電気代対策は？", answer: "①機材集約化（個別→集中レンダリング、電力▲25〜35%）、②省電力ワークステーション更新、③レンダリングの夜間シフト、④編集ルーム空調BEMS連動、⑤スリープ・電源管理徹底、の5本柱が効果的。中規模プロダクションで年300〜600万円の削減が目安。" },
  { question: "密閉スタジオの空調対策は？", answer: "①インバータ化＋BEMS連動制御（電力▲20〜25%）、②在室人数・照明使用状況連動制御、③高効率空調更新、④熱回収換気の活用、⑤空調設定温度の段階管理、の5本柱が効果的。中規模スタジオで年200〜500万円の削減が目安。" },
  { question: "映像制作業の固定プランと市場連動プランどちらが向きますか？", answer: "撮影スケジュールはクライアント都合で変更困難、撮影単価への即時転嫁困難のため、固定プランが向きます。撮影日ピーク負荷の予測が難しく市場連動はリスク大。2022〜2023年の市場高騰局面では市場連動継続事業者で月数百万円の追加負担が発生しました。" },
  { question: "撮影スケジュール最適化は投資回収できますか？", answer: "複数ステージの撮影スケジュールを平準化し、同時ピーク稼働を回避することで、契約電力▲10〜15%削減可能。中規模プロダクション（年間350万kWh）で年間500〜900万円の削減、デマンドコントローラー（投資100〜300万円）と組合せで投資回収1〜2年が目安です。" },
  { question: "映像制作業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、コンテンツ産業支援補助、ものづくり補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は撮影所で投資回収できますか？", answer: "屋根面積1,000m²以上、日中撮影稼働の郊外型撮影所は業種別で中位の相性。300kWで年33〜42万kWh発電、年500〜700万円の削減、投資回収9〜12年（補助金後6〜8年）が目安です。日中撮影頻度が高いと自家消費率70〜80%になりやすいです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本映画製作者連盟", url: "https://www.eiren.org/" },
  { name: "一般社団法人 日本映像ソフト協会", url: "https://www.jva-net.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function FilmProductionStudioElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/film-production-studio-electricity-cost-review"
        datePublished="2026-05-26"
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
          <span className="text-slate-800">撮影スタジオ・映像制作の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            撮影スタジオ・映像制作の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            撮影スタジオ・映像制作は、撮影照明（ハロゲン/LED/HMI）、密閉スタジオの集中空調、編集ルームの高性能PC24h稼働、音響設備、VFX・モーションキャプチャ機材など多面的な電力負荷を持ち、撮影日の集中ピーク負荷と編集機材連続稼働の二重構造が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>映像制作業の電力使用プロファイル（撮影照明／密閉空調／編集／VFX）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）とスタジオ単位あたり単価</li>
              <li>LED撮影照明・密閉スタジオ空調最適化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>撮影スケジュール最適化のデマンド管理施策</li>
              <li>SII・PPA・コンテンツ産業補助・ものづくり補助・GX補助の組合せ活用</li>
              <li>映像制作業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              映像制作業の電力使用特性 — 撮影照明・密閉空調・編集・VFX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業の電力使用は『撮影照明／密閉スタジオ空調／編集ルーム／音響／VFX機材』の5層で構成されます。撮影日の集中ピーク負荷と編集機材24h連続稼働が業種特有のコスト構造を形成します。
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
              で確認できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比3〜8%、スタジオ単位180〜900 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業の電気代水準は施設規模・撮影頻度で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本映画製作者連盟・日本映像ソフト協会・経産省コンテンツ産業課から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              映像制作業の主要な電気代上昇要因 — 撮影ピーク・密閉空調・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業の電気代上昇は、撮影日の集中ピーク負荷に加え、密閉スタジオ空調効率、編集機材24h稼働、容量拠出金が複合的に重なります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模スタジオ／中規模プロダクション／大規模撮影所
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-3">
                    <p><span className="font-semibold text-slate-700">プロファイル：</span>{item.profile}</p>
                    <p><span className="font-semibold text-slate-700">年間電気代：</span>{item.annualCost}</p>
                    <p><span className="font-semibold text-slate-700">特徴：</span>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
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
              関連業種は{" "}
              <Link href="/broadcasting-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">放送業の電気料金見直し</Link>
              、{" "}
              <Link href="/advertising-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">広告業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              撮影照明・編集機材のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業はLED撮影照明調光統合制御、密閉スタジオ空調人員連動、編集機材集約化、撮影スケジュール最適化など、業種特有のデマンド管理戦略が極めて効果的です。
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
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 撮影日ピーク稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業は撮影スケジュールがクライアント都合で変更困難、撮影単価への即時転嫁困難のため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>撮影スケジュールの変更が困難</li>
                  <li>クライアント単価への即時転嫁が困難</li>
                  <li>編集機材の24h稼働継続</li>
                  <li>撮影日ピーク高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に撮影日ピーク重複</li>
                  <li>編集機材夜間稼働の継続負担</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万円の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 撮影業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。映像制作業の中規模プロダクションでは負担額が請求総額の10〜15%に達します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模映像プロダクション（年350万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1,222万円</li>
                  <li>2025年度（3.98円/kWh）：年 1,393万円（+171万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1,463万円（+241万円）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              映像制作業特有の節電・省エネ施策 — LED撮影・空調・編集・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業の省エネは『LED撮影照明全面化』『密閉スタジオ空調インバータ化＋BEMS』『編集機材集約化』『撮影スケジュール最適化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED撮影照明全面化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ハロゲン・HMI→LED全面更新</li>
                  <li>撮影電力▲60〜80%</li>
                  <li>SII＋コンテンツ補助で投資回収2〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">密閉スタジオ空調BEMS</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>インバータ＋在室・照明連動制御</li>
                  <li>空調電力▲20〜25%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">編集機材集約化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>個別→集中レンダリングサーバー</li>
                  <li>編集電力▲25〜35%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（100kW〜1MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中撮影稼働で自家消費率70〜80%</li>
                  <li>投資回収 9〜12年（補助金後 6〜8年）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・コンテンツ補助・ものづくり・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業向けに活用しやすい補助金は5本柱。LED撮影照明＋編集ワークフロー刷新はSII＋コンテンツ補助＋GX補助の組合せで補助率を最大化できます。
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
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              映像制作業に合った契約見直しチェックリスト（12項目）
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社撮影スタジオ・映像制作の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              映像制作業は撮影日ピーク負荷・密閉スタジオ空調・編集24h稼働の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>撮影照明・編集機材のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した13〜37%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-26"
            />
            <GlossaryLinks currentSlug="film-production-studio-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/broadcasting-electricity-cost-review", title: "放送業の電気料金見直し", description: "スタジオ・撮影設備が共通。" },
              { href: "/advertising-electricity-cost-review", title: "広告業の電気料金見直し", description: "撮影・編集業務が共通。" },
              { href: "/publishing-electricity-cost-review", title: "出版業の電気料金見直し", description: "編集ルーム業務が共通。" },
              { href: "/it-services-electricity-cost-review", title: "IT・情報サービスの電気料金見直し", description: "編集サーバー・PCが共通。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "レンダリングサーバー運用が共通。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設の電気料金見直し", description: "演出照明・大空間運営が共通。" },
              { href: "/amusement-facility-electricity-cost-review", title: "アミューズメント施設の電気料金見直し", description: "演出照明・音響が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "施設の電気代削減", description: "電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "施設電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "撮影業の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "映像制作業が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "日中稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED撮影照明・空調更新の主力補助金。" },
              { href: "/demand-value-guide", title: "ピークデマンド管理の実務", description: "撮影日ピーク稼働法人のデマンド管理。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の撮影スタジオ・映像制作条件でリスクを確認する"
            description="撮影照明・密閉スタジオ空調・編集ルーム・VFX機材の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。LED撮影照明化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="撮影スタジオ・映像制作の電力契約見直し、専門家に相談しませんか？"
            description="撮影照明・密閉スタジオ空調・編集ルーム・VFX機材の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で映像制作事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
