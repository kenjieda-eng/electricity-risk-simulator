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
  "駐車場施設・コインパーキングの電気料金見直しポイント｜機械式駐車装置・EV充電・24h照明の契約最適化";
const pageDescription =
  "駐車場施設・コインパーキングの電気料金見直しを解説。機械式駐車装置の瞬時負荷、EV充電器、24h LED照明、立体駐車場換気・排煙、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "駐車場 電気料金 見直し",
    "コインパーキング 電気代",
    "機械式駐車装置 電力",
    "立体駐車場 電気代",
    "駐車場 EV充電器 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/parking-facility-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/parking-facility-electricity-cost-review",
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
    label: "機械式駐車装置（パレット昇降）",
    detail:
      "立体駐車場・機械式パーキングの最大電力要素。垂直循環式・多段式・タワー式等のパレット昇降モーター（1台あたり7.5〜30kW）が車両入出庫時に瞬時稼働。1施設複数機械式塔の場合、合計50〜500kWの瞬時負荷で30分デマンドに直撃。立体駐車場全体の電力使用量の40〜55%を占める。",
  },
  {
    label: "EV充電器（普通7kW・急速50kW）",
    detail:
      "脱炭素対応・駐車場収益化策として急速に併設が進む。普通充電器（6〜7kW）複数台＋急速充電器（50〜150kW）1〜2台の組合せが標準化。商業施設併設駐車場・コインパーキングで導入加速。1施設で30〜300kWの充電容量追加事例も。",
  },
  {
    label: "照明（24h LED）",
    detail:
      "平面駐車場・立体駐車場の24h照明。LED化前は1施設あたり5〜30kW、LED化後で1〜10kWまで削減可能。立体駐車場では各階・スロープ・出入口で照明総量が大きく、人感センサー化が有効。深夜時間帯の電力使用量に直結。",
  },
  {
    label: "看板・サイン照明・ゲート機器",
    detail:
      "駐車場サイン照明（24h）、ゲートバー（モーター駆動、瞬時負荷）、精算機（待機電力）、防犯カメラ（常時録画）。1施設あたり3〜15kWの常時負荷。無人24h運営の駐車場では深夜電力プラン適性を左右する要素。",
  },
  {
    label: "立体駐車場換気・排煙設備",
    detail:
      "立体駐車場の機械換気（排ガス換気）と排煙設備。排気ファン（5〜30kW）と給気ファン（5〜30kW）の常時稼働。建築基準法・消防法対応の機械式排煙設備（瞬時最大100kW級）もデマンド要素。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本パーキングビジネス協会・国交省自動車局・立体駐車場工業会の統計によれば、駐車場施設の電気料金は売上高の5〜20%（機械式駐車場は最高水準）。粗利ベースでは15〜35%に達する。機械式駐車装置・換気設備・EV充電器が業種特有のコスト構造を形成する電力依存度の高い業種。",
  },
  {
    label: "駐車場1施設あたりの電力使用量",
    detail:
      "小規模平面パーキング（コインパーキング20〜50台）で年間1〜5万 kWh、中規模機械式（50〜150台、機械式塔1〜2基）で年間20〜100万 kWh、大規模立体駐車場（300〜1,000台、機械式塔複数）で年間200〜1,500万 kWh。EV充電器併設で年間使用量が1.5〜3倍化するケースも。",
  },
  {
    label: "駐車場規模別の年間使用量",
    detail:
      "小規模平面パーキング（年売上1,000万〜5,000万円）で年間1〜5万 kWh、中規模機械式（年売上1〜5億円）で年間20〜100万 kWh、大規模立体駐車場本社含む合計（年売上10億円超）で年間200〜1,500万 kWh。商業施設併設・EV充電基地化で大型化が進行中。",
  },
];

const costFactors = [
  {
    label: "機械式駐車装置の瞬時負荷とピーク管理",
    detail:
      "機械式駐車装置のパレット昇降モーター（1台7.5〜30kW）が車両入出庫時に瞬時稼働。複数機械式塔の同時稼働で30分デマンドが跳ね上がり、年間最大デマンドが契約電力を決定。デマンド管理を怠ると基本料金が過剰になりやすい業種特性。",
  },
  {
    label: "EV充電器併設による契約電力の増加",
    detail:
      "EV急速充電器（50〜150kW）併設で契約電力が大幅増加。中規模機械式駐車場（既存契約150kW）に150kW機を1台追加で契約電力が2倍化、基本料金が月20〜30万円規模で増加するケースも。実需要との乖離管理が経営課題。",
  },
  {
    label: "24h照明・換気のベースロード",
    detail:
      "24h照明・立体駐車場換気は連続稼働。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模機械式駐車場（月5万kWh）で月5万円の差、年60万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金・容量拠出金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。中規模機械式駐車場（年60万kWh）で年270万円超の負担。容量拠出金も24h稼働業種に影響大。",
  },
  {
    label: "立体駐車場の換気・排煙設備の電力",
    detail:
      "建築基準法・消防法対応の換気・排煙設備は常時稼働必須。電力使用量の20〜30%を占めるケースもあり、インバータ化・CO/排ガス濃度連動制御で削減余地が大きい。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模平面パーキング（コインパーキング20〜50台）",
    profile: "無人24h運営コインパーキング／低圧 10〜30kW／年間 1〜5万 kWh",
    annualCost: "年間電気代 30万〜150万円",
    note: "LED化・人感センサー化・精算機省エネで年8〜12%削減事例。",
  },
  {
    size: "中規模機械式（50〜150台、機械式塔1〜2基）",
    profile: "都市部機械式駐車場／低圧 50〜150kW／年間 20〜100万 kWh",
    annualCost: "年間電気代 600万〜3,000万円",
    note: "機械式制御最適化＋LED化＋EV充電器最適化で年10〜15%削減事例。",
  },
  {
    size: "大規模立体駐車場（300〜1,000台、機械式塔複数）",
    profile: "商業施設併設・大手駐車場運営／高圧 200〜800kW／年間 200〜1,500万 kWh",
    annualCost: "年間電気代 6,000万〜4.5億円",
    note: "長期固定（3〜5年）契約＋換気インバータ化＋屋上太陽光＋EV充電基地化で年10〜15%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模平面パーキングの年間12%削減（Before/After）",
    before: "都市部コインパーキングA社（低圧 20kW、年間 3万 kWh、年間電気代 90万円）。市場連動プラン継続、蛍光灯24h点灯、精算機3台、防犯カメラ4台。",
    after: "新電力切替（固定3年）／全照明LED化＋人感センサー化（投資60万円、SII補助1/2活用）／精算機省エネモード設定／看板LED化／デマンド対策。",
    result: "年間電気代 90万円 → 79万円（▲12%、▲11万円）／投資回収 補助金後 3年",
  },
  {
    title: "事例2：中規模機械式駐車場の年間14%削減",
    before: "都市部機械式駐車場B社（低圧 120kW、年間 60万 kWh、年間電気代 1,800万円）。市場連動プランで2022〜2023年に月最大200万円の追加負担。機械式塔2基、EV充電器なし。",
    after: "固定3年プラン切替／機械式駐車装置の運転制御最適化（同時稼働回避）／全LED化＋人感センサー化／換気ファンインバータ化／CO濃度連動制御／精算機・看板省エネ化／EV普通充電器導入（CEV補助1/2）／デマンドコントローラー導入。",
    result: "年間電気代 1,800万円 → 1,548万円（▲14%、▲252万円）／契約 kW 120→100／投資回収 補助金後 3年",
  },
  {
    title: "事例3：大規模立体駐車場の年間4,500万円削減",
    before: "商業施設併設大規模立体駐車場C社（高圧 600kW、年間 800万 kWh、年間電気代 2.4億円）。長期固定契約継続もEV充電器併設拡大で契約電力上振れ。機械式塔複数・換気設備大規模。",
    after: "電力契約の5年長期固定締結／屋上太陽光 300kW＋蓄電池 500kWh／機械式駐車装置の制御最適化（運転計画＋蓄電池ピークシフト）／換気ファンインバータ化＋CO濃度連動制御／EV充電基地化（普通10台＋急速2台、ピークカット運用）／全LED化／需要家主導型PPA／BEMS導入／DR契約締結。",
    result: "年間電気代 2.4億円 → 1.95億円（▲18.8%、▲4,500万円）／契約 kW 600→480／投資回収 補助金後 5年／CO₂削減 約3,500 t/年",
  },
];

const demandManagement = [
  {
    label: "機械式駐車装置の同時稼働回避制御",
    detail:
      "複数機械式塔のパレット昇降モーター同時稼働を避け、デマンドコントローラーで1基ずつ稼働制御。1施設の最大デマンドを20〜30%削減した事例。",
  },
  {
    label: "EV急速充電器のピークカット運用",
    detail:
      "EV急速充電器に出力制御機能を組み込み、駐車場全体デマンドを上限管理。蓄電池併設で更にピーク平準化が可能。",
  },
  {
    label: "照明の人感センサー化・調光",
    detail:
      "立体駐車場の各階・スロープに人感センサーを設置し、車両・人通過時のみ点灯。電力▲40〜60%、SII補助で投資回収2〜3年。",
  },
  {
    label: "換気ファンのインバータ化＋CO濃度連動制御",
    detail:
      "立体駐車場の換気ファンをインバータ化し、CO・排ガス濃度センサー連動で必要時のみフル運転。電力▲30〜50%。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場型）",
    target: "LED化・人感センサー・換気ファン・機械式駐車装置高効率化",
    rate: "中小1/2、上限15億円",
    note: "駐車場業向けで採択率が高い主力補助金。LED化＋人感センサーで採択実績多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "屋上自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "立体駐車場の屋上・カーポート上の太陽光と相性が良い。EV充電器とのセット運用で更に効果向上。",
  },
  {
    name: "経産省 EV充電インフラ整備事業（CEV補助）",
    target: "駐車場EV充電器（普通7kW・急速50〜150kW）の新設・更新",
    rate: "1/2〜2/3、上限機種別に設定",
    note: "駐車場EV充電器の主力補助。複数台同時導入で大規模補助の対象。コインパーキング併設で活用拡大。",
  },
  {
    name: "国交省 立体駐車場省エネ・脱炭素化補助",
    target: "立体駐車場の機械装置更新・換気省エネ・EV充電",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "立体駐車場特有の補助制度。機械式駐車装置の電力削減で活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "駐車場のEV充電基地化・太陽光・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めたEV充電基地化で補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "機械式駐車装置の同時稼働回避のデマンドコントローラーを導入しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "照明のLED化率・人感センサー化率を把握しているか",
  "EV充電器併設による契約電力増の試算を実施したか",
  "立体駐車場屋上・カーポート上自家消費太陽光（30〜500kW）導入の試算を実施したか",
  "換気ファンのインバータ化・CO濃度連動制御を導入しているか",
  "深夜時間帯の照明調光・スケジュール運転を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "精算機・防犯カメラ等の常時待機機器の省エネ化を検討したか",
  "SII・CEV補助・PPA・立体駐車場補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "駐車場施設の電気代水準はどれくらいですか？", answer: "売上高比5〜20%（機械式駐車場は最高水準）、粗利比15〜35%が業界平均。中規模機械式駐車場で年600〜3,000万円、大規模立体駐車場で年6,000万〜4.5億円規模の電気代になります。電力依存度が高い業種です。" },
  { question: "機械式駐車装置の電気代を削減するには？", answer: "①複数機械式塔の同時稼働回避（デマンド制御）、②パレット昇降モーターの高効率モデル更新、③制御盤の最適化、④稼働ログ分析による運転計画、⑤蓄電池併設によるピークシフト、の5本柱が効果的。中規模機械式駐車場で年100〜300万円の削減が目安。" },
  { question: "EV充電器併設で電気代はどのくらい増えますか？", answer: "普通充電器（7kW）複数台＋急速充電器（50〜150kW）1〜2台の組合せが標準化。中規模機械式駐車場（既存契約150kW）に150kW機を1台追加すると契約電力が2倍化、基本料金が月20〜30万円規模で増加するケースも。CEV補助とPPA・蓄電池の組合せで初期投資を抑制可能です。" },
  { question: "立体駐車場の換気省エネは効果がありますか？", answer: "換気ファンのインバータ化＋CO・排ガス濃度センサー連動制御で電力▲30〜50%。中規模立体駐車場で年100〜300万円の削減が目安。SII補助で投資回収3〜4年。建築基準法・消防法要求を満たした上での最適化が重要です。" },
  { question: "駐車場の固定プランと市場連動プランどちらが向きますか？", answer: "24h照明・換気・機械式駐車装置・EV充電器の連続稼働が必要なため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続駐車場で月数十万〜数百万円の追加負担が発生しました。EV充電器併設拡大に伴いコスト変動リスクが更に増えるため、固定優位性が高まっています。" },
  { question: "立体駐車場屋上太陽光は投資回収できますか？", answer: "立体駐車場の屋上・カーポート上は太陽光設置に適し、100〜500kWの規模で設置可能。EV充電器併設駐車場なら自家消費率70〜85%、年200〜800万円の削減、PPA活用で投資回収5〜7年が目安。EV充電とのセット運用で経済合理性が高まります。" },
  { question: "コインパーキング向けの省エネはどこから始めるべきですか？", answer: "①LED化＋人感センサー化（投資40〜100万円、年20〜40万円削減）、②精算機・看板の省エネモード設定、③防犯カメラの省エネ化、④EV充電器併設による収益化、の順で取組むのが基本。SII補助1/2活用で投資回収2〜3年です。" },
  { question: "駐車場向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、CEV補助（EV充電器）、需要家主導型PPA補助金、国交省立体駐車場省エネ・脱炭素化補助、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "公益社団法人 立体駐車場工業会", url: "https://www.ritchu.or.jp/" },
  { name: "国土交通省 自動車局（駐車場行政）", url: "https://www.mlit.go.jp/road/sisaku/parking/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ParkingFacilityElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/parking-facility-electricity-cost-review"
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
          <span className="text-slate-800">駐車場施設・コインパーキングの見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            駐車場施設・コインパーキングの電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            駐車場施設は、機械式駐車装置のパレット昇降モーターによる瞬時負荷、24h LED照明、無人運営のゲート機器・精算機・防犯カメラ、近年急増するEV充電器併設、立体駐車場の換気・排煙設備など多面的な電力負荷を持ち、機械式駐車装置・EV充電器がコスト構造を急速に変えつつあります。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>駐車場の電力使用プロファイル（機械式／EV充電／24h照明／換気）</li>
              <li>業界平均の電気代水準（売上高比5〜20%）と1施設あたり単価</li>
              <li>EV充電器併設による契約電力増の試算</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>機械式駐車装置・換気・照明の省エネ施策</li>
              <li>SII・CEV補助・PPA・立体駐車場補助・GX補助の組合せ活用</li>
              <li>駐車場向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              駐車場の電力使用特性 — 機械式・EV充電・24h照明・換気
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場の電力使用は『機械式駐車装置／EV充電器／24h LED照明／看板・ゲート機器／立体駐車場換気・排煙設備』の5層で構成されます。機械式駐車装置の瞬時負荷とEV充電器併設による契約電力増が業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比5〜20%、機械式は最高水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場の電気代水準は施設形態（平面／機械式／立体）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 立体駐車場工業会・国交省自動車局から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              駐車場の主要な電気代上昇要因 — 機械式・EV充電・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場の電気代上昇は、機械式駐車装置の瞬時負荷、EV充電器併設による契約電力増、24h照明・換気ベースロード、再エネ賦課金、容量拠出金、立体駐車場換気・排煙が複合的に重なります。
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
              規模別の削減事例3件 — 小規模平面／中規模機械式／大規模立体駐車場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/gas-station-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガソリンスタンドの電気料金見直し</Link>
              、{" "}
              <Link href="/car-dealership-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車ディーラーの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              機械式駐車装置・EV充電のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場は機械式駐車装置の同時稼働回避、EV急速充電器のピークカット運用、照明の人感センサー化、換気ファンのインバータ化など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h無人運営の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場は24h照明・換気・EV充電器の連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h無人運営の常時稼働</li>
                  <li>機械式駐車装置の運用必須</li>
                  <li>立体駐車場換気が連続稼働必須</li>
                  <li>駐車料金への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に換気・照明負荷増</li>
                  <li>EV充電が高単価時間帯に集中</li>
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
              再エネ賦課金の影響 — 24h駐車場業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。駐車場の中規模機械式駐車場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模機械式駐車場（年60万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 209万円</li>
                  <li>2025年度（3.98円/kWh）：年 239万円（+30万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 270万円（+61万円）</li>
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
              駐車場特有の節電・省エネ施策 — 機械式制御・LED・換気インバータ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場の省エネは『LED化＋人感センサー化』『機械式駐車装置の同時稼働回避制御』『換気ファンインバータ化＋CO濃度連動制御』『EV充電器ピークカット運用』『屋上太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED化＋人感センサー化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蛍光灯→LED化で電力▲40〜60%</li>
                  <li>人感センサー化で更に▲30〜50%</li>
                  <li>SII補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">機械式駐車装置の同時稼働回避</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>デマンドコントローラーで1基ずつ稼働制御</li>
                  <li>最大デマンド▲20〜30%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">換気ファンインバータ化＋CO連動</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>CO・排ガス濃度連動制御で電力▲30〜50%</li>
                  <li>建築基準法・消防法要求を満たした最適化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">屋上太陽光（30〜500kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>EV充電器併設駐車場で自家消費率70〜85%</li>
                  <li>投資回収 5〜7年（補助金後 4〜5年）</li>
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
              補助金活用（業種別） — SII・CEV補助・PPA・立体駐車場補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場向けに活用しやすい補助金は5本柱。EV充電器併設はCEV補助＋PPA＋GX補助の組合せで補助率を最大化できます。
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
              駐車場に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社駐車場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              駐車場は機械式駐車装置・EV充電器併設・24h無人運営の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>機械式駐車装置のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜19%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="parking-facility-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/gas-station-electricity-cost-review", title: "ガソリンスタンドの電気料金見直し", description: "EV充電・24h照明が共通。" },
              { href: "/car-dealership-electricity-cost-review", title: "自動車ディーラーの電気料金見直し", description: "EV充電器併設が共通。" },
              { href: "/shopping-mall-electricity-cost-review", title: "ショッピングモールの電気料金見直し", description: "併設駐車場の共通論点。" },
              { href: "/department-store-electricity-cost-review", title: "百貨店の電気料金見直し", description: "立体駐車場併設の共通論点。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "立体駐車場併設の共通論点。" },
              { href: "/business-hotel-electricity-cost-review", title: "ビジネスホテルの電気料金見直し", description: "EV充電器併設の共通論点。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "24h無人運営の共通論点。" },
              { href: "/amusement-facility-electricity-cost-review", title: "アミューズメント施設の電気料金見直し", description: "駐車場併設の共通論点。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h駐車場の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "駐車場が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED化・換気更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "24h無人運営事業者のリスク。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理の基本", description: "機械式駐車装置・EV充電のピーク管理。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社駐車場の条件でリスクを確認する"
            description="機械式駐車装置・EV充電器・24h照明・換気設備の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。EV充電器併設後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="駐車場施設の電力契約見直し、専門家に相談しませんか？"
            description="機械式駐車装置・EV充電器・24h照明・立体駐車場換気の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で駐車場事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
