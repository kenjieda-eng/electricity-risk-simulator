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
  "金属プレス・板金業の電気料金見直しポイント｜プレス機・NC加工・力率改善の契約最適化";
const pageDescription =
  "金属プレス・板金業の電気料金見直しを解説。プレス機の瞬時負荷、NC加工機、力率改善、レーザー加工、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "金属プレス 電気料金 見直し",
    "板金 電気代",
    "プレス機 力率 電力",
    "NC加工 電気代",
    "金属プレス 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/metal-stamping-sheet-metal-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/metal-stamping-sheet-metal-electricity-cost-review",
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
    label: "プレス機（機械式・サーボ式）",
    detail:
      "金属プレス工場の中核設備。機械式プレス（クランク式）は起動時の瞬間負荷が突出し、サーボプレスは加工サイクル中の負荷変動が大きい。1基あたり50〜800kWで、工場全体の電力使用量の25〜40%を占める。瞬間負荷でデマンドピークが突出する典型業種。",
  },
  {
    label: "レーザー加工機（CO2・ファイバー）",
    detail:
      "板金工場の主要設備。CO2レーザー（30〜60kW、効率10〜15%）／ファイバーレーザー（10〜30kW、効率30〜40%）。1台あたり常時負荷で、補機（チラー・集塵）込みで100〜300kWの負荷。板金工場では電力使用量の20〜35%を占める。",
  },
  {
    label: "NC加工機・マシニングセンタ・タレットパンチ",
    detail:
      "NC旋盤・マシニングセンタ・タレットパンチプレス等の数値制御工作機械。1台あたり10〜100kWの負荷で、加工サイクル中の負荷変動あり。中型〜大型板金工場では工場全体の15〜25%を占める。",
  },
  {
    label: "溶接機・スポット溶接装置",
    detail:
      "アーク溶接機・スポット溶接機・抵抗溶接機等。スポット溶接は瞬間電流が大きく（数kA級）、力率が悪化しやすい。1工場あたり総設備50〜500kWで、デマンドピークと力率改善の主要因。",
  },
  {
    label: "コンプレッサー・集塵・空調",
    detail:
      "工場用エアコンプレッサー（30〜200kW）、レーザー集塵・粉じん集塵（20〜100kW）、工場空調・換気の常時負荷。コンプレッサーは中規模板金工場で電力使用量の15〜20%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本鍛圧機械工業会の統計によれば、金属プレス・板金業の電気料金は売上高の4〜10%（中小プレス専業は高水準）。製造原価に占める比率は6〜15%。瞬時負荷とデマンド管理が業種特有のコスト構造を形成。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "金属プレス加工で1トンあたり80〜180 kWh、レーザー板金加工で1トンあたり300〜700 kWh、NC加工で1トンあたり200〜500 kWhが業界平均。レーザー加工が最も電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模板金工場（年商2〜10億円）で年間30〜200万 kWh、中規模プレス工場（年商30〜150億円）で年間500〜2,500万 kWh、大規模プレスメーカー（年商300億円超）で年間2,500万〜1億 kWh。高圧契約が中規模では業界標準。",
  },
];

const costFactors = [
  {
    label: "プレス機瞬時負荷のデマンドピーク",
    detail:
      "機械式プレスは起動時の瞬間負荷が突出し、複数台の同時起動で契約電力が実需の1.5〜2倍に膨らむことがある。デマンド管理の効果が極めて大きい業種で、デマンドコントローラー導入で年5〜15%の削減事例多数。",
  },
  {
    label: "力率低下による基本料金割増",
    detail:
      "プレス機・溶接機の誘導性負荷は力率を低下させ、力率85%未満では基本料金が割増される。逆に力率改善で割引（最大15%）が適用される。力率改善コンデンサ導入は投資回収1〜2年と極めて効率的。",
  },
  {
    label: "燃料費調整額の市場連動影響",
    detail:
      "燃料費調整額1円/kWhの変動で中規模工場（月100万kWh）で月100万円の差、年間1,200万円規模のインパクト。利益率の薄い受託加工業界では直接利益圧迫要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間1,500万kWh使用の中規模工場で年6,270万円の負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模板金工場（年商2〜10億円、従業員5〜30名）",
    profile: "町工場レベル板金・プレス／低圧〜高圧 100〜400kW／年間 30〜200万 kWh",
    annualCost: "年間電気代 900万〜6,000万円",
    note: "力率改善・LED化・コンプレッサー更新で年8〜15%削減事例。",
  },
  {
    size: "中規模プレス工場（年商30〜150億円、従業員50〜300名）",
    profile: "自動車部品プレス中堅／高圧 1,000〜2,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "サーボプレス更新＋デマンド分散＋自家消費太陽光で年10〜18%削減事例。",
  },
  {
    size: "大規模プレスメーカー（年商300億円超、従業員300名以上）",
    profile: "自動車・家電向けプレス大手／特別高圧 3,000〜8,000kW／年間 2,500万〜1億 kWh",
    annualCost: "年間電気代 7.5〜30 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模板金工場の年間16%削減（Before/After）",
    before: "関西の板金工場A社（高圧 250kW、年間 150万 kWh、年間電気代 4,500万円）。市場連動プラン継続、機械式プレス、力率82%、レーザーCO2式。",
    after: "新電力切替（固定3年）／力率改善コンデンサ設置（基本料金割引適用）／レーザーCO2→ファイバー化（SII＋ものづくり補助1/2活用、投資1,800万円）／デマンドコントローラー導入／LED化／コンプレッサーインバータ化。",
    result: "年間電気代 4,500万円 → 3,780万円（▲16%、▲720万円）／契約 kW 250→210／投資回収 補助金後 1.8年",
  },
  {
    title: "事例2：中規模プレス工場の年間17%削減",
    before: "中部地方の自動車部品プレス工場B社（高圧 1,800kW、年間 1,800万 kWh、年間電気代 5.4億円）。市場連動プランで2022〜2023年に月最大1,800万円の追加負担。プレス起動のデマンドピーク発生、力率80%。",
    after: "固定5年プラン切替／機械式プレス→サーボプレス更新（電力▲30%）／プレス起動分散制御／力率改善コンデンサ全面更新／自家消費太陽光 0.8MW 導入（屋根5,000 m²）／BEMS／コンプレッサーインバータ化。",
    result: "年間電気代 5.4億円 → 4.48億円（▲17%、▲9,200万円）／契約 kW 1,800→1,500／投資回収 補助金後 3.0年",
  },
  {
    title: "事例3：大規模プレスメーカーの年間1.2億円削減",
    before: "国内大手プレスメーカーC社の主力工場（特別高圧 5,000kW、年間 5,000万 kWh、年間電気代 15億円）。長期固定契約継続も新ライン増設で契約電力上振れ、力率85%。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2 MW＋蓄電池 3 MWh／コージェネ 1.5MW／全プレスサーボ化／力率改善で基本料金▲10%／需要家主導型PPA（オフサイト風力3MW）／DR契約締結。",
    result: "年間電気代 15億円 → 13.8億円（▲8%、▲1.2億円）／契約 kW 5,000→4,400／投資回収 7年（補助金後 5年）／CO₂削減 約9,000 t/年",
  },
];

const demandManagement = [
  {
    label: "プレス機起動タイミングの分散制御",
    detail:
      "複数のプレス機を運用する場合、起動タイミングを5〜30分ずらすことでデマンドピークを抑制。1工場の同時最大負荷を20〜30%削減した事例。デマンドコントローラーとプレス制御盤の連動が必須。",
  },
  {
    label: "力率改善コンデンサ・SVCの活用",
    detail:
      "プレス機・溶接機の誘導性負荷を力率改善コンデンサで補償。力率82%→95%で基本料金▲13%、投資回収1〜2年。SVC（静止型無効電力補償装置）導入で動的補償も可能。",
  },
  {
    label: "レーザー加工機の負荷追従",
    detail:
      "レーザー加工機のスタンバイ電力削減（オフ時間の短縮）、ファイバーレーザー化（CO2比効率2〜3倍）でレーザー電力▲50〜70%。",
  },
  {
    label: "コンプレッサーのインバータ・台数制御",
    detail:
      "コンプレッサーのインバータ化・台数制御で20〜35%削減。プレス機エアの脈動需要に対応。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "サーボプレス・ファイバーレーザー・LED・コンプレッサー・空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "金属プレス・板金業向けで採択率が高い主力補助金。サーボプレス更新・レーザー更新で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。日中稼働中心で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "サーボプレス・ファイバーレーザー・最新NC機の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "金属プレス・板金業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "サーボプレス化・ファイバーレーザー化・蓄電池導入",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や省エネで大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小板金事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "プレス機起動の同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "プレス機・レーザー・NC加工機・溶接機の電力プロファイルを把握しているか",
  "力率の実績値を把握し、85%未満なら改善コンデンサを検討したか",
  "屋根面積を活用した自家消費太陽光（200kW〜2MW）導入の試算を実施したか",
  "サーボプレス化・ファイバーレーザー化の投資回収試算を実施したか",
  "デマンドコントローラー・プレス起動分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "金属プレス・板金業の電気代水準はどれくらいですか？", answer: "売上高比4〜10%（中小プレス専業は高水準）、製造原価比6〜15%が業界平均。中規模プレス工場（年商100億円級）で年1.5〜7.5億円、大規模プレスメーカー（年商300億円超）で年7.5〜30億円規模の電気代になります。" },
  { question: "プレス機のデマンドピークを削減するには？", answer: "①プレス機起動タイミング分散（デマンドコントローラー連動）、②機械式→サーボプレス更新（電力▲30〜40%）、③力率改善コンデンサ設置、④BEMS・需要見える化、⑤コンプレッサーインバータ化、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで1〜3年が目安です。" },
  { question: "力率改善で基本料金はどれくらい下がりますか？", answer: "力率85%未満では基本料金が割増、85%超で割引が適用されます。力率82%→95%で基本料金▲13%、力率改善コンデンサ投資（中規模工場で200〜500万円）の回収は1〜2年と極めて効率的。プレス機・溶接機の多い工場では必須の対策です。" },
  { question: "レーザー加工機の電気代対策は？", answer: "①CO2レーザー→ファイバーレーザー化（電力▲50〜70%）、②スタンバイ電力削減、③加工パターン最適化、④集塵機インバータ化、⑤レーザー電源高効率化、の5本柱が効果的。中規模工場で年300〜800万円の削減が目安。" },
  { question: "金属プレス・板金業の固定プランと市場連動プランどちらが向きますか？", answer: "プレス・板金は日中稼働中心で平日昼間の電力使用が多いため、市場連動プランは夏季・冬季の高値時間帯に直撃されるリスクが高く、固定プランが推奨されます。2022〜2023年の市場高騰局面では市場連動継続企業で月数百万円〜千万円の追加負担が発生しました。" },
  { question: "サーボプレス化は投資回収できますか？", answer: "従来の機械式プレスからサーボプレスへの更新で、電力▲30〜40%、加工精度向上・生産性向上を同時実現。中規模工場（プレス10台）で年間800〜1,500万円の削減、投資回収はSII＋ものづくり補助で3〜5年が目安です。" },
  { question: "金属プレス・板金業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はプレス・板金工場で投資回収できますか？", answer: "屋根面積1,500m²以上、日中稼働中心の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本鍛圧機械工業会", url: "https://j-fma.or.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function MetalStampingSheetMetalElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/metal-stamping-sheet-metal-electricity-cost-review"
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
          <span className="text-slate-800">金属プレス・板金業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            金属プレス・板金業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            金属プレス・板金業は、プレス機の瞬時負荷とデマンドピーク、レーザー加工機の常時負荷、NC加工機の負荷変動、溶接機の力率低下など多面的な電力負荷を持ちます。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>金属プレス・板金業の電力使用プロファイル（プレス／レーザー／NC／溶接）</li>
              <li>業界平均の電気代水準（売上高比4〜10%）と製品単位あたり単価</li>
              <li>サーボプレス化・ファイバーレーザー化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>力率改善による基本料金削減（▲13%）</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>金属プレス・板金業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              金属プレス・板金業の電力使用特性 — プレス・レーザー・NC・溶接
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業の電力使用は『プレス機／レーザー加工／NC加工／溶接／コンプレッサー集塵』の5層で構成されます。プレス機の瞬時負荷とレーザー加工の常時負荷が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比4〜10%、製品単位80〜700 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業の電気代水準は加工種別（プレス／レーザー／NC）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本鍛圧機械工業会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              金属プレス・板金業の主要な電気代上昇要因 — デマンドピーク・力率・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業の電気代上昇は、プレス瞬時負荷のデマンドピーク、力率低下による基本料金割増、燃料費調整、再エネ賦課金、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模板金／中規模プレス／大規模プレスメーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/casting-diecasting-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鋳造・ダイカスト業の電気料金見直し</Link>
              、{" "}
              <Link href="/forging-heat-treatment-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鍛造・熱処理業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              プレス機瞬時負荷・力率改善のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業はプレス機起動分散、力率改善コンデンサ、レーザー加工負荷追従、コンプレッサーインバータ化など、業種特有のデマンド・力率管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 日中稼働中心の業種
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業は日中稼働中心で平日昼間の電力使用が多く、市場連動プランでは高値時間帯に直撃されるリスクが高い業種です。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中稼働中心で高値時間帯と一致</li>
                  <li>受託加工単価への即時転嫁が困難</li>
                  <li>プレス瞬時負荷で高単価リスクが甚大</li>
                  <li>利益率の薄い業界で電気代変動が直接利益圧迫</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に電力負荷集中</li>
                  <li>プレス起動が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万〜千万円の追加負担</li>
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
              再エネ賦課金の影響 — 製造業の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。金属プレス・板金業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模プレス工場（年1,500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 5,235万円</li>
                  <li>2025年度（3.98円/kWh）：年 5,970万円（+735万円）</li>
                  <li>2026年度（4.18円/kWh）：年 6,270万円（+1,035万円）</li>
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
              金属プレス・板金業特有の節電・省エネ施策 — サーボプレス・ファイバーレーザー・力率改善
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業の省エネは『サーボプレス化』『ファイバーレーザー化』『力率改善コンデンサ』『コンプレッサーインバータ化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">サーボプレス化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>機械式→サーボ式で電力▲30〜40%</li>
                  <li>加工精度・生産性向上を同時実現</li>
                  <li>SII＋ものづくり補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ファイバーレーザー化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>CO2→ファイバーで電力▲50〜70%</li>
                  <li>加工速度・品質向上も同時実現</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">力率改善コンデンサ・SVC</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>力率82%→95%で基本料金▲13%</li>
                  <li>投資回収1〜2年と極めて効率的</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（200kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中稼働中心で自家消費率80%超</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・GX補助・中小省エネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業向けに活用しやすい補助金は5本柱。サーボプレス化はSII＋ものづくり補助の組合せで補助率を最大化できます。
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
              金属プレス・板金業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社プレス・板金工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属プレス・板金業はプレス機の瞬時負荷・レーザー加工常時負荷・力率低下による基本料金割増の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>プレス起動のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜17%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="metal-stamping-sheet-metal-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/casting-diecasting-electricity-cost-review", title: "鋳造・ダイカスト業の電気料金見直し", description: "電気炉・保持炉の電力対策。" },
              { href: "/forging-heat-treatment-electricity-cost-review", title: "鍛造・熱処理業の電気料金見直し", description: "加熱炉・焼入れの電力対策。" },
              { href: "/plating-surface-treatment-electricity-cost-review", title: "メッキ・表面処理業の電気料金見直し", description: "電解・整流器の大電力対策。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工一般の見直しポイント。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "プレス・板金の取引先業種。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立工程の電力対策。" },
              { href: "/electronic-components-electricity-cost-review", title: "電子部品業の電気料金見直し", description: "電子部品製造の電力対策。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "日中稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "プレス法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "日中稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "サーボプレス・レーザー更新の主力補助金。" },
              { href: "/power-factor-improvement", title: "力率改善の基本", description: "力率改善で基本料金▲15%。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "デマンド管理の基礎。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社のプレス・板金工場条件でリスクを確認する"
            description="プレス機・レーザー加工機・NC加工機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。サーボプレス化やファイバーレーザー化後のシナリオ比較、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="金属プレス・板金業の電力契約見直し、専門家に相談しませんか？"
            description="プレス機・レーザー加工機・NC加工機・力率改善の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で金属プレス・板金業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
