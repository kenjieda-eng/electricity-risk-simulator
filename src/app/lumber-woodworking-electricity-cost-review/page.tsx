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
  "木材加工・製材業の電気料金見直しポイント｜乾燥機・集塵・季節稼働の契約最適化";
const pageDescription =
  "木材加工・製材業の電気料金見直しを解説。木材乾燥機（24h長時間）、集塵・粉じん処理、季節稼働、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "木材加工 電気料金 見直し",
    "製材 電気代",
    "木材乾燥機 電力",
    "集塵機 電気代",
    "木材 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/lumber-woodworking-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/lumber-woodworking-electricity-cost-review",
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
    label: "木材乾燥機（高温・中温・低温乾燥）",
    detail:
      "木材加工・製材業の中核設備。高温乾燥機（90〜120℃）、中温乾燥機（60〜90℃）、低温乾燥機（40〜60℃）。乾燥時間は数日〜数週間と長く、24h連続稼働。1基あたり50〜500kWの電力＋蒸気負荷で、工場全体の電力使用量の30〜50%を占める。",
  },
  {
    label: "製材機・帯鋸盤・自動鉋盤",
    detail:
      "原木→製材→加工の自動ライン。製材機（バンドソー）、帯鋸盤、自動鉋盤等で1工場あたり総設備200〜800kW。日中稼働中心で、工場全体の20〜30%を占める。",
  },
  {
    label: "集塵機・粉じん処理設備（24h稼働）",
    detail:
      "木屑・粉じん集塵機、サイクロン分離機等で1工場あたり50〜300kWの常時負荷。粉じん爆発リスクと労働安全衛生法対応で稼働停止不可。工場全体の15〜25%を占める。",
  },
  {
    label: "コンプレッサー・圧縮空気設備",
    detail:
      "木工機械の圧縮空気源として大型コンプレッサーが設置される。1工場あたり30〜200kWの常時負荷。エア漏れによるロスが多発しやすい。",
  },
  {
    label: "塗装・接着・後加工設備",
    detail:
      "塗装ブース（電気乾燥）、接着剤プレス、サンディング設備等の後加工ライン。1工場あたり50〜300kWの動力負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本木材総合情報センターの統計によれば、木材加工・製材業の電気料金は売上高の4〜10%（乾燥工程多い工場は最高水準）。製造原価に占める比率は6〜15%。乾燥機の24h稼働で電力依存度が高い業種。",
  },
  {
    label: "製品1m³あたりの電力使用量",
    detail:
      "製材（粗加工）で1m³あたり50〜100 kWh、乾燥材で1m³あたり200〜500 kWh、加工材（鉋・接着）で1m³あたり300〜800 kWhが業界平均。乾燥工程が最も電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模製材工場（年商1〜5億円）で年間30〜200万 kWh、中規模木材加工工場（年商10〜100億円）で年間500〜2,500万 kWh、大規模木材メーカー（年商200億円超）で年間2,500万〜1億 kWh。高圧契約が中規模では業界標準。",
  },
];

const costFactors = [
  {
    label: "乾燥機長時間稼働のベースロード",
    detail:
      "木材乾燥機は数日〜数週間の連続稼働、月間使用量が大きい。燃料費調整額1円/kWhの変動でも中規模工場（月150万kWh）で月150万円の差、年間1,800万円規模のインパクト。",
  },
  {
    label: "集塵機24h稼働の電力負荷",
    detail:
      "集塵機・粉じん処理設備は法令上停止できず24h稼働必須。電力消費が継続するため省エネ余地が大きい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間2,000万kWh使用の中規模工場で年9,000万円超の負担。",
  },
  {
    label: "季節変動による稼働差",
    detail:
      "木材加工は住宅着工需要に連動し、季節変動が大きい。閑散期は稼働率が下がり契約電力が過剰になりやすい。季節別契約最適化の余地が大きい。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模製材工場（年商1〜5億円、従業員5〜20名）",
    profile: "地場製材・小ロット加工／低圧〜高圧 100〜400kW／年間 30〜200万 kWh",
    annualCost: "年間電気代 900万〜6,000万円",
    note: "集塵機インバータ化・LED化・乾燥機更新で年8〜12%削減事例。",
  },
  {
    size: "中規模木材加工工場（年商10〜100億円、従業員50〜200名）",
    profile: "建材・家具部材加工中堅／高圧 1,000〜2,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "乾燥機ヒートポンプ化＋自家消費太陽光＋木屑バイオマスで年10〜18%削減事例。",
  },
  {
    size: "大規模木材メーカー（年商200億円超、従業員300名以上）",
    profile: "住友林業・中国木材等大手／特別高圧 3,000〜8,000kW／年間 2,500万〜1億 kWh",
    annualCost: "年間電気代 7.5〜30 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋木屑バイオマス自家消費が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模製材工場の年間14%削減（Before/After）",
    before: "東北の製材工場A社（高圧 300kW、年間 150万 kWh、年間電気代 4,500万円）。市場連動プラン継続、乾燥機が15年経過、集塵機が常時最大運転。",
    after: "新電力切替（固定3年）／集塵機インバータ化（SII＋ものづくり補助1/2活用、投資600万円）／乾燥機ヒートポンプ化／LED化／コンプレッサーインバータ化／エア漏れ対策／デマンドコントローラー導入。",
    result: "年間電気代 4,500万円 → 3,870万円（▲14%、▲630万円）／契約 kW 300→250／投資回収 補助金後 1.5年",
  },
  {
    title: "事例2：中規模木材加工工場の年間16%削減",
    before: "中部地方の建材工場B社（高圧 1,800kW、年間 1,800万 kWh、年間電気代 5.4億円）。市場連動プランで2022〜2023年に月最大1,800万円の追加負担。乾燥機10基24h稼働。",
    after: "固定5年プラン切替／乾燥機全ヒートポンプ化（電力▲50〜70%）／木屑バイオマスボイラー導入（自家消費）／自家消費太陽光 1MW 導入（屋根8,000 m²）／BEMS／集塵機インバータ化／需要家主導型PPA。",
    result: "年間電気代 5.4億円 → 4.54億円（▲16%、▲8,640万円）／契約 kW 1,800→1,500／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模木材メーカーの年間1.5億円削減",
    before: "国内大手木材メーカーC社の主力工場（特別高圧 5,000kW、年間 5,000万 kWh、年間電気代 15億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 4 MWh／木屑バイオマス発電 2MW（自家消費）／全乾燥機ヒートポンプ化／需要家主導型PPA／DR契約締結／集塵機高効率化。",
    result: "年間電気代 15億円 → 13.5億円（▲10%、▲1.5億円）／契約 kW 5,000→4,500／投資回収 7年（補助金後 5年）／CO₂削減 約10,000 t/年",
  },
];

const demandManagement = [
  {
    label: "乾燥機の起動分散・夜間運転シフト",
    detail:
      "複数の乾燥機を運用する場合、起動タイミングを分散させ、深夜時間帯シフトでデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。",
  },
  {
    label: "製材機・木工機械の負荷追従",
    detail:
      "製材機・木工機械の稼働を日中の連続生産期に集中させ、夜間は乾燥機・集塵機のみの低負荷運転で平準化。",
  },
  {
    label: "集塵機のインバータ・台数制御",
    detail:
      "集塵機のインバータ化・台数制御で20〜35%削減。製材機稼働状況に応じた負荷追従が効果的。",
  },
  {
    label: "コンプレッサーのインバータ化・エア漏れ対策",
    detail:
      "コンプレッサーのインバータ化＋エア漏れ対策で20〜30%削減。木工工場特有のエア漏れ多発に対する効果が大きい。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "乾燥機ヒートポンプ・LED・集塵機インバータ・コンプレッサー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "木材加工業向けで採択率が高い主力補助金。乾燥機ヒートポンプ化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。乾燥機稼働で自家消費率70%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新木工機械・乾燥機の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "木材加工業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "農林水産省 林業・木材産業構造改革事業",
    target: "木材加工機械・乾燥機・バイオマス利用設備",
    rate: "1/2、上限事業規模に応じる",
    note: "林業・木材産業特有の補助制度。乾燥機・バイオマスボイラー導入で活用。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小製材事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "乾燥機の同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "乾燥機・製材機・集塵機・コンプレッサーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（200kW〜2MW）導入の試算を実施したか",
  "乾燥機のヒートポンプ化の投資回収試算を実施したか",
  "木屑バイオマス自家消費の余地を確認したか",
  "デマンドコントローラー・乾燥機起動分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・林野補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "木材加工・製材業の電気代水準はどれくらいですか？", answer: "売上高比4〜10%（乾燥工程多い工場は最高水準）、製造原価比6〜15%が業界平均。中規模木材加工工場（年商50億円級）で年1.5〜7.5億円、大規模木材メーカー（年商200億円超）で年7.5〜30億円規模の電気代になります。" },
  { question: "木材乾燥機の電気代を削減するには？", answer: "①乾燥機のヒートポンプ化（電気ヒーター比効率3倍、電力▲50〜70%）、②木屑バイオマスボイラー併用、③乾燥スケジュール最適化、④断熱性能改善、⑤排熱回収、の5本柱が中心。投資回収はSII＋林野補助の組合せで2〜4年が目安です。" },
  { question: "集塵機の電気代対策は？", answer: "①集塵機のインバータ化（電力▲20〜35%）、②製材機稼働状況に応じた負荷追従、③高効率モーターへの更新、④フィルター更新、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年200〜500万円の削減が目安。" },
  { question: "木屑バイオマス自家消費は投資回収できますか？", answer: "工場から発生する木屑をボイラー燃料として活用し、蒸気＋電気を自家消費。バイオマスボイラー＋蒸気タービン発電で乾燥機・暖房需要をカバー。投資回収はSII＋林野補助＋FIT/FIP制度活用で5〜8年が目安。CO₂削減と電気代削減を同時実現。" },
  { question: "木材加工・製材業の固定プランと市場連動プランどちらが向きますか？", answer: "乾燥機24h連続稼働、集塵機停止不可でベースロードが大きく、生産停止が困難なため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数百万円〜千万円の追加負担が発生しました。" },
  { question: "乾燥機のヒートポンプ化は投資回収できますか？", answer: "従来の電気ヒーター式・蒸気式乾燥機からヒートポンプ式への更新で、総合効率3倍、電力▲50〜70%。中規模工場（年間1,800万kWh）で年間1,500〜3,000万円の削減、投資回収はSII＋林野補助＋GX補助で3〜5年が目安です。" },
  { question: "木材加工業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、農林水産省林業・木材産業構造改革事業、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は木材加工工場で投資回収できますか？", answer: "屋根面積2,000m²以上、乾燥機・集塵機稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率70%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本木材総合情報センター", url: "https://www.jawic.or.jp/" },
  { name: "農林水産省 林野庁", url: "https://www.rinya.maff.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function LumberWoodworkingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/lumber-woodworking-electricity-cost-review"
        datePublished="2026-05-25"
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
          <span className="text-slate-800">木材加工・製材業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            木材加工・製材業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            木材加工・製材業は、木材乾燥機の24h長時間稼働、製材機・木工機械、集塵機・粉じん処理設備、コンプレッサーなど多面的な電力負荷を持ち、住宅着工需要に連動した季節変動も加わる業種です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>木材加工・製材業の電力使用プロファイル（乾燥機／製材機／集塵／コンプレッサー）</li>
              <li>業界平均の電気代水準（売上高比4〜10%）と製品単位あたり単価</li>
              <li>乾燥機ヒートポンプ化・木屑バイオマス自家消費の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>集塵機24h稼働の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・林野補助・中小省エネの組合せ活用</li>
              <li>木材加工業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              木材加工・製材業の電力使用特性 — 乾燥・製材・集塵・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工・製材業の電力使用は『木材乾燥機／製材機木工機械／集塵機／コンプレッサー／塗装後加工』の5層で構成されます。乾燥機24h連続稼働と集塵機常時稼働が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比4〜10%、製品単位50〜800 kWh/m³
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工・製材業の電気代水準は工程種別（製材／乾燥／加工）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本木材総合情報センター・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              木材加工業の主要な電気代上昇要因 — 乾燥・集塵・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工業の電気代上昇は、乾燥機24h稼働ベースロードに加え、集塵機常時稼働、季節変動、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模製材／中規模木材加工／大規模木材メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工・製材業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/furniture-manufacturing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">家具・建具製造業の電気料金見直し</Link>
              、{" "}
              <Link href="/construction-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">建設業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              乾燥機・集塵のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工業は乾燥機起動分散、製材機負荷追従、集塵機インバータ化、コンプレッサーエア漏れ対策など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 乾燥機24h稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工業は乾燥機・集塵機の24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>乾燥機の24h稼働が必須</li>
                  <li>集塵機停止が法令違反</li>
                  <li>受託加工単価への即時転嫁が困難</li>
                  <li>住宅着工需要連動で稼働率変動</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に乾燥電力負荷増</li>
                  <li>集塵機24h稼働が高単価時間帯に直撃</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万円〜千万円の追加負担</li>
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
              再エネ賦課金の影響 — 24h乾燥業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。木材加工業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模木材加工工場（年1,800万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 6,282万円</li>
                  <li>2025年度（3.98円/kWh）：年 7,164万円（+882万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 8,100万円（+1,818万円）</li>
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
              木材加工業特有の節電・省エネ施策 — 乾燥ヒートポンプ・バイオマス・集塵
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工業の省エネは『乾燥機ヒートポンプ化』『木屑バイオマス自家消費』『集塵機インバータ化』『コンプレッサーエア漏れ対策』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">乾燥機ヒートポンプ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気ヒーター→ヒートポンプで効率3倍</li>
                  <li>乾燥電力▲50〜70%</li>
                  <li>SII＋林野補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">木屑バイオマス自家消費</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>工場木屑をボイラー＋蒸気タービン発電</li>
                  <li>乾燥機・暖房需要をカバー</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">集塵機インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>集塵機インバータ化で電力▲20〜35%</li>
                  <li>製材機稼働に追従</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（200kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>乾燥機・集塵機稼働で自家消費率70%超</li>
                  <li>投資回収 7〜10年（補助金後 5〜7年）</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・林野補助・中小省エネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工業向けに活用しやすい補助金は5本柱。乾燥機ヒートポンプ化はSII＋林野補助＋GX補助の組合せで補助率を最大化できます。
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
              木材加工業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社木材加工工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              木材加工・製材業は乾燥機24h長時間稼働・集塵機停止不可・住宅着工需要変動の3重課題に同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>乾燥機のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した14〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-25"
            />
            <GlossaryLinks currentSlug="lumber-woodworking-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/furniture-manufacturing-electricity-cost-review", title: "家具・建具製造業の電気料金見直し", description: "木材加工の取引先業種。" },
              { href: "/construction-electricity-cost-review", title: "建設業の電気料金見直し", description: "建材としての取引先業種。" },
              { href: "/paint-ink-manufacturing-electricity-cost-review", title: "塗料・インキ業の電気料金見直し", description: "塗装の関連業種。" },
              { href: "/pulp-paper-electricity-cost-review", title: "パルプ・紙業の電気料金見直し", description: "木材原料が共通。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "乾燥機が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "木材加工法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "乾燥機ヒートポンプ・集塵機更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "乾燥機24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "建材としての関連業種。" },
            ]}
          />

          <ContentCta
            heading="自社の木材加工工場条件でリスクを確認する"
            description="乾燥機・製材機・集塵機・コンプレッサーの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。ヒートポンプ化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="木材加工・製材業の電力契約見直し、専門家に相談しませんか？"
            description="乾燥機・製材機・集塵機・コンプレッサーの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で木材加工・製材業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
