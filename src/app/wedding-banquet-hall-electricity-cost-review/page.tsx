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
  "結婚式場・宴会場の電気料金見直しポイント｜厨房・演出照明・大空間空調・土日ピークの契約最適化";
const pageDescription =
  "結婚式場・宴会場の電気料金見直しを解説。厨房、演出照明、高天井大空間空調、土日祝のピーク稼働、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "結婚式場 電気料金 見直し",
    "宴会場 電気代",
    "ブライダル 演出照明 電力",
    "高天井 空調 電気代",
    "結婚式場 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/wedding-banquet-hall-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/wedding-banquet-hall-electricity-cost-review",
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
    label: "厨房設備（業務用オーブン・フライヤー・冷蔵冷凍）",
    detail:
      "披露宴向け大量調理を支える業務用オーブン、サラマンダー、フライヤー、スチームコンベクション、ブラストチラー、業務用冷蔵冷凍ストックの常時稼働。中規模専門式場で総設備100〜350kW、土日のピーク時間帯（11時〜21時）で電力使用量の25〜35%を占める。",
  },
  {
    label: "演出照明（シャンデリア・ムービングライト・LEDウォール）",
    detail:
      "披露宴の入場・キャンドル・ファーストバイト演出で使うシャンデリア、ムービングライト、ピンスポット、LEDウォール、ミラーボール、ガーデン演出ライト。1宴会場あたり総設備30〜120kWで同時点灯。式場全体の電力使用の10〜20%を占める。",
  },
  {
    label: "宴会場空調（高天井・大空間）",
    detail:
      "天井高5〜10mのチャペル・宴会場・ガーデン棟向けの大型空調機・床下空調・大型FCU。1宴会場あたり総設備50〜250kWで稼働。式場全体の電力使用の30〜40%を占める最大消費要素。",
  },
  {
    label: "音響設備（PA・BGM・マイクシステム）",
    detail:
      "披露宴向けのPAシステム、デジタルミキサー、ワイヤレスマイク、BGM配信、生演奏用機材。1宴会場あたり総設備5〜30kW。",
  },
  {
    label: "ブライダル写真撮影・スタジオ照明",
    detail:
      "前撮り・当日写真用の撮影スタジオ照明（タングステン／LED／フラッシュ）、ヘアメイクブース照明、衣装室照明。1式場あたり総設備20〜80kW。式場全体の電力使用の3〜8%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全日本ブライダル協会・経産省特定サービス産業実態調査によれば、結婚式場・宴会場の電気料金は売上高の3〜7%。1組あたりの平均挙式単価300〜500万円のうち電気代相当は約3〜5万円換算。土日祝に売上が集中するため固定費としての電力負担が重い業種。",
  },
  {
    label: "宴会場面積1m²あたりの電力使用量",
    detail:
      "小規模ハウスウェディング（収容80〜150名）で1m²あたり年間180〜350 kWh、中規模専門式場（収容200〜400名）で1m²あたり年間250〜500 kWh、大規模ホテル併設チェーン（収容500〜1,500名）で1m²あたり年間350〜700 kWhが業界平均。演出照明・大空間空調を抱える業種で平均より高い。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模ハウスウェディング（年商3〜8億円）で年間40〜150万 kWh、中規模専門式場（年商15〜40億円）で年間180〜600万 kWh、大規模ホテル併設チェーン（年商80〜300億円）で年間800〜3,500万 kWh。大手チェーンは複数店舗の合算で特別高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "土日祝のピーク稼働と平日閑散の負荷格差",
    detail:
      "結婚式場は土日祝に挙式・披露宴が集中し、平日は商談・打合せのみで電力負荷が10〜20%水準まで低下。ピーク日のデマンドが契約電力を決定するため、稼働率に対して契約電力が高止まりしやすい。",
  },
  {
    label: "演出照明の同時点灯による瞬時ピーク",
    detail:
      "披露宴クライマックスでシャンデリア・ムービングライト・LEDウォールが同時点灯し、瞬間的に電力負荷が2〜3倍に上昇。デマンドコントロール上の重要管理ポイント。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間500万kWh使用の中規模式場で年2,090万円の負担。",
  },
  {
    label: "客数変動による電力影響と固定費比率",
    detail:
      "披露宴1組あたりの電力使用量は招待客80〜150名で約500〜1,200kWh。客数変動の影響を直接受けやすいが、空調・基礎照明の固定部分が大きいため客単価あたり電気代の変動率は10〜15%程度。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、ピーク稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模ハウスウェディング（年商3〜8億円、収容80〜150名）",
    profile: "1棟貸切型ハウスウェディング／高圧 80〜250kW／年間 40〜150万 kWh",
    annualCost: "年間電気代 1,200万〜4,500万円",
    note: "LED演出照明化・空調インバータ化で年8〜12%削減事例。",
  },
  {
    size: "中規模専門式場（年商15〜40億円、収容200〜400名）",
    profile: "都市型専門式場・複数チャペル＋宴会場／高圧 300〜800kW／年間 180〜600万 kWh",
    annualCost: "年間電気代 5,400万〜1.8 億円",
    note: "LED演出全面化＋BEMS＋自家消費太陽光で年10〜15%削減事例。",
  },
  {
    size: "大規模ホテル併設チェーン（年商80〜300億円、収容500〜1,500名）",
    profile: "テイクアンドギヴ・ニーズ・ワタベウェディング等チェーン／特別高圧 1,500〜5,000kW／年間 800〜3,500万 kWh",
    annualCost: "年間電気代 2.4〜10.5 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模ハウスウェディングの年間12%削減（Before/After）",
    before: "関東のハウスウェディング式場A社（高圧 150kW、年間 80万 kWh、年間電気代 2,400万円）。市場連動プラン継続、ハロゲン演出照明、空調オンオフ制御、土日ピークでデマンド超過。",
    after: "新電力切替（固定3年）／LED演出照明への全面更新（投資400万円、SII補助1/2活用）／空調インバータ化／デマンドコントローラー導入／撮影スタジオLED化／ガーデン演出LED化。",
    result: "年間電気代 2,400万円 → 2,112万円（▲12%、▲288万円）／契約 kW 150→125／投資回収 補助金後 1.5年",
  },
  {
    title: "事例2：中規模専門式場の年間14%削減",
    before: "関西の専門式場B社（高圧 600kW、年間 450万 kWh、年間電気代 1.35億円）。市場連動プランで2022〜2023年に月最大450万円の追加負担。土日ピークデマンド管理不十分、シャンデリア常時点灯。",
    after: "固定3年プラン切替／LED演出照明全面化（シャンデリア・ムービング含む、投資1,500万円）／空調インバータ化＋BEMS／自家消費太陽光 250kW 導入（屋根1,800 m²）／デマンド予測システム／厨房高効率機器更新／BGM・音響系の待機電力削減。",
    result: "年間電気代 1.35億円 → 1.161億円（▲14%、▲1,890万円）／契約 kW 600→510／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模ホテル併設チェーンの年間8,000万円削減",
    before: "国内大手ブライダルチェーンC社の主力店舗群（特別高圧 3,000kW、年間 2,500万 kWh、年間電気代 7.5億円）。長期固定契約継続も新規店舗増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 1.5 MW＋蓄電池 2 MWh／コージェネ 1MW＋排熱回収（厨房・給湯活用）／LED演出照明全面化／需要家主導型PPA（オフサイト風力2MW）／DR契約締結／BEMS統合運用／高効率厨房機器更新／空調自動制御。",
    result: "年間電気代 7.5億円 → 6.7億円（▲10.7%、▲8,000万円）／契約 kW 3,000→2,700／投資回収 7年（補助金後 5年）／CO₂削減 約6,000 t/年",
  },
];

const demandManagement = [
  {
    label: "演出照明の同時点灯制御",
    detail:
      "シャンデリア・ムービングライト・LEDウォールの同時点灯タイミングを照明卓と連動制御。最大瞬時負荷を15〜20%削減した事例。",
  },
  {
    label: "宴会場空調の人感・在室連動制御",
    detail:
      "高天井宴会場の空調をBEMS連動で挙式・披露宴の進行に応じてインバータ制御。空気層成層対策と組合せ、空調電力▲15〜20%。",
  },
  {
    label: "厨房ピーク負荷の事前仕込み分散化",
    detail:
      "オーブン・スチコン・ブラストチラーの事前仕込みを前日夜間〜早朝に分散。土日のピーク負荷を10〜15%削減。",
  },
  {
    label: "撮影スタジオ照明のLED化・調光化",
    detail:
      "タングステン→LED化で電力▲60〜80%。フラッシュ撮影主体運用＋ピーク時間外活用で更に効果。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "LED演出照明・空調更新・高効率厨房機器・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "結婚式場業向けで採択率が高い主力補助金。LED演出照明への全面更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい郊外型式場と相性が良い。土日ピーク稼働で自家消費率60〜70%。",
  },
  {
    name: "経産省 ものづくり・サービス等補助金",
    target: "厨房設備の最新型更新・演出設備の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "ブライダル業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "観光庁 観光施設等の省エネ・脱炭素化支援",
    target: "宴会場・ホテル併設式場の省エネ設備",
    rate: "1/2、上限事業規模に応じる",
    note: "観光庁による宴会場特有の補助制度。インバウンド対応の大型補助の対象。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "空調全面更新・コージェネ・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "土日ピーク日と平日閑散日の電力使用量の差を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "演出照明・宴会場空調・厨房・撮影スタジオの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（100kW〜1.5MW）導入の試算を実施したか",
  "演出照明のLED化・空調インバータ化の投資回収試算を実施したか",
  "シャンデリア・ムービングライトの同時点灯による瞬時ピーク管理ができているか",
  "デマンドコントローラー・厨房仕込み分散化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・観光庁補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "結婚式場・宴会場の電気代水準はどれくらいですか？", answer: "売上高比3〜7%が業界平均。小規模ハウスウェディング（年商5億円級）で年1,200万〜4,500万円、中規模専門式場（年商25億円級）で年5,400万〜1.8億円、大規模ホテル併設チェーン（年商150億円級）で年2.4〜10.5億円規模の電気代になります。" },
  { question: "宴会場空調の電気代を削減するには？", answer: "①空調インバータ化＋BEMS連動制御（電力▲15〜20%）、②高天井空気層成層対策（サーキュレーター・床下空調）、③在室人数連動制御、④空調設定温度の段階管理、⑤披露宴進行と連動した負荷追従、の5本柱が中心。投資回収はSII補助で3〜5年が目安です。" },
  { question: "演出照明のLED化の効果は？", answer: "①ハロゲン→LEDで電力▲60〜80%、②調光調色機能で演出表現拡大、③発熱低減で空調負荷も▲5〜8%、④寿命10倍以上でランプ交換コスト削減、⑤シャンデリア同時点灯の瞬時ピーク管理可能、の5本柱が効果的。中規模式場で年300〜800万円の削減が目安。" },
  { question: "厨房設備の電気代対策は？", answer: "①IH・高効率ガスコンビとの最適配置、②オーブン・スチコンの事前仕込み夜間シフト、③ブラストチラー高効率化、④冷蔵冷凍機の省エネ更新、⑤フード排気・給気の連動制御、の5本柱が効果的。中規模式場で年200〜500万円の削減が目安。" },
  { question: "結婚式場業の固定プランと市場連動プランどちらが向きますか？", answer: "土日祝の挙式・披露宴は数ヶ月前からの予約稼働でキャンセル困難、演出進行も時刻固定のため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続式場で月数百万円の追加負担が発生しました。" },
  { question: "演出照明と空調のBEMS統合制御は投資回収できますか？", answer: "従来の個別制御から照明・空調統合BEMSへの更新で、全体電力▲10〜15%。中規模式場（年間450万kWh）で年間1,000〜1,500万円の削減、投資回収はSII＋観光庁補助の組合せで3〜5年が目安です。" },
  { question: "結婚式場業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、観光庁観光施設省エネ補助、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は結婚式場で投資回収できますか？", answer: "屋根面積1,500m²以上、土日ピーク稼働の郊外型式場は業種別で中位の相性。500kWで年55〜70万kWh発電、年800〜1,000万円の削減、投資回収9〜12年（補助金後6〜8年）が目安です。蓄電池併設で平日剰余電力活用が鍵です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 全日本ブライダル協会", url: "https://www.bridal.or.jp/" },
  { name: "公益財団法人 日本ブライダル文化振興協会", url: "https://www.bia.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function WeddingBanquetHallElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/wedding-banquet-hall-electricity-cost-review"
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
          <span className="text-slate-800">結婚式場・宴会場の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            結婚式場・宴会場の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            結婚式場・宴会場は、披露宴向けの厨房稼働、シャンデリア・ムービングライト等の演出照明、高天井大空間の宴会場空調、土日祝に集中するピーク稼働など多面的な電力負荷を持ち、平日閑散と土日集中の負荷格差が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>結婚式場業の電力使用プロファイル（厨房／演出照明／宴会場空調／撮影）</li>
              <li>業界平均の電気代水準（売上高比3〜7%）と宴会場単位あたり単価</li>
              <li>LED演出照明・空調インバータ化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>土日ピーク・平日閑散の負荷管理施策</li>
              <li>SII・PPA・ものづくり補助・観光庁補助・GX補助の組合せ活用</li>
              <li>結婚式場業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              結婚式場業の電力使用特性 — 厨房・演出照明・大空間空調・撮影
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業の電力使用は『厨房／演出照明／宴会場空調／音響／撮影スタジオ』の5層で構成されます。土日祝のピーク稼働で演出照明・空調・厨房が同時稼働するため、瞬時最大デマンドが業種特有のコスト構造を形成します。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比3〜7%、宴会場単位180〜700 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業の電気代水準は施設形態（ハウスウェディング／専門式場／ホテル併設）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全日本ブライダル協会・日本ブライダル文化振興協会・経産省特定サービス産業実態調査から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              結婚式場業の主要な電気代上昇要因 — 土日ピーク・演出同時点灯・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業の電気代上昇は、土日祝ピーク稼働と平日閑散の負荷格差に加え、演出照明同時点灯による瞬時ピーク、客数変動の影響、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — ハウスウェディング／専門式場／ホテル併設チェーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテルの電気料金見直し</Link>
              、{" "}
              <Link href="/restaurant-chain-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲食チェーンの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              演出照明・宴会場空調のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業はシャンデリア・ムービングライト同時点灯の瞬時ピーク管理、宴会場空調の在室連動制御、厨房ピーク負荷の事前分散化、撮影スタジオのLED化など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 土日ピーク稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業は数ヶ月前からの予約稼働で挙式・披露宴日程の変更が困難なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>挙式日程の変更が不可能</li>
                  <li>BtoC契約価格への即時転嫁が困難</li>
                  <li>演出進行が時刻固定でピーク制御が困難</li>
                  <li>土日ピーク負荷で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>土日ピーク時間帯が高単価時間帯と重複</li>
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
              再エネ賦課金の影響 — 大空間業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。結婚式場業の中規模式場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模専門式場（年450万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1,570万円</li>
                  <li>2025年度（3.98円/kWh）：年 1,791万円（+221万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1,881万円（+311万円）</li>
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
              結婚式場業特有の節電・省エネ施策 — LED演出・空調・厨房・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業の省エネは『LED演出照明全面化』『宴会場空調インバータ化＋BEMS』『厨房ピーク分散』『撮影スタジオLED化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED演出照明全面化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>シャンデリア・ムービング・LEDウォール全面更新</li>
                  <li>演出電力▲60〜80%</li>
                  <li>SII＋観光庁補助で投資回収2〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">宴会場空調インバータ化＋BEMS</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>オンオフ→インバータでBEMS連動制御</li>
                  <li>空調電力▲15〜20%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">厨房ピーク分散化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>事前仕込みの夜間シフト</li>
                  <li>厨房ピーク電力▲10〜15%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（100kW〜1.5MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>郊外型式場で自家消費率60〜70%</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・観光庁補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業向けに活用しやすい補助金は5本柱。LED演出照明＋空調更新はSII＋観光庁補助＋GX補助の組合せで補助率を最大化できます。
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
              結婚式場業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社結婚式場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              結婚式場業は土日ピーク稼働・演出照明同時点灯・高天井空調の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>演出照明・空調のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="wedding-banquet-hall-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "宴会場・大空間空調が共通。" },
              { href: "/business-hotel-electricity-cost-review", title: "ビジネスホテルの電気料金見直し", description: "宿泊業の電力管理が共通。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "飲食チェーンの電気料金見直し", description: "厨房設備が共通。" },
              { href: "/amusement-facility-electricity-cost-review", title: "アミューズメント施設の電気料金見直し", description: "演出照明・音響が共通。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設の電気料金見直し", description: "大空間空調・演出照明が共通。" },
              { href: "/hot-spring-facility-electricity-cost-review", title: "温泉施設の電気料金見直し", description: "宴会場運営が共通。" },
              { href: "/public-gym-electricity-cost-review", title: "公共ジムの電気料金見直し", description: "大空間運営が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "施設電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予約稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "結婚式場が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "郊外型式場の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED演出照明・空調更新の主力補助金。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理の実務", description: "土日ピーク稼働法人のデマンド管理。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機（自社条件で年間電気代を試算）", description: "業種・規模・契約・エリアを入力するだけで推定年間電気代と削減余地3案を即時表示します。" },
            ]}
          />

          <ContentCta
            heading="自社の結婚式場・宴会場条件でリスクを確認する"
            description="演出照明・宴会場空調・厨房・撮影スタジオの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。LED演出照明化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="結婚式場・宴会場の電力契約見直し、専門家に相談しませんか？"
            description="演出照明・宴会場空調・厨房・撮影スタジオの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でブライダル事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
