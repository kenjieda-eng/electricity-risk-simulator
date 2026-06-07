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
  "ネイル・エステサロンの電気料金見直しポイント｜UV/LEDライト・エステ機器・施術空調の契約最適化";
const pageDescription =
  "ネイル・エステサロンの電気料金見直しを解説。UV/LEDライト、光フェイシャル・痩身機器、施術空調、低圧高圧切替、定休日設定、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ネイル エステ サロン 電気料金 見直し",
    "ネイルサロン 電気代",
    "UV LED ライト 電力",
    "エステ機器 電気代",
    "ネイル エステ 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/beauty-nail-salon-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/beauty-nail-salon-electricity-cost-review",
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
    label: "UV/LEDライト（ネイル硬化）",
    detail:
      "ネイルサロンの中核設備。UV/LEDライト1台あたり24〜48W、1施術あたり数分〜10分の照射を複数回繰り返す。1店舗あたり総設備0.5〜3kW。施術席数とほぼ比例し、ピーク時の同時起動が瞬間消費電力を押し上げる要因。",
  },
  {
    label: "エステ機器（光フェイシャル・痩身機器・スチーマー等）",
    detail:
      "エステサロンの中核設備。光フェイシャル機器（IPL/LED）1台あたり1,500〜3,000W、痩身機器（EMS/RF/キャビテーション）1台あたり1,000〜2,500W、スチーマー1台500〜1,500W。1店舗あたり総設備5〜30kWの間欠負荷で、複数機器同時起動時のピーク電力が大きい。",
  },
  {
    label: "施術空調（個室空調制御）",
    detail:
      "個室型サロンでは個室ごとの空調制御が必須。1店舗あたり総設備5〜30kWで営業時間中（10-21時程度）連続稼働。個室の温度設定が客の快適性に直結するため空調制御の自由度が低く、ピーク負荷の大きな要因。",
  },
  {
    label: "店内照明・施術用照明",
    detail:
      "サロンの内装演出を支える調光LED照明、施術用無影灯、メイク確認用照明等。1店舗あたり総設備1〜5kW、営業時間中の常時稼働。",
  },
  {
    label: "給湯・受付POS・BGM・洗浄機",
    detail:
      "シャンプー・タオル洗浄用給湯、受付POS・予約端末、店内BGM、タオルウォーマー、超音波洗浄機等の合計1〜5kW。常時または間欠稼働で店舗のベースロードを形成。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本ネイリスト協会・日本エステティック振興協議会・経産省商業統計によれば、ネイル・エステサロンの電気料金は売上高の2〜4%（個室型エステで機器多い店舗ほど高水準）。店舗運営原価に占める比率は4〜8%。UV/LEDライト・エステ機器の同時起動ピークが業種固有のコスト構造を形成。",
  },
  {
    label: "施術席1席あたりの電力使用量",
    detail:
      "ネイルサロンで1席年1,000〜2,500 kWh、エステサロン（個室型）で1部屋年3,000〜6,000 kWhが業界平均。機器の種類・数で大きく変動。痩身機器中心の店舗は1部屋年5,000〜8,000 kWh、ハンドエステ中心の店舗は1部屋年2,000〜3,500 kWhに収まる。",
  },
  {
    label: "店舗規模別の年間使用量",
    detail:
      "小規模個人サロン（年商800〜2,500万円）で年間1〜3万 kWh、中規模サロン（年商3,000万〜2億円）で年間8〜30万 kWh、大手チェーン50店舗（年商50億円超）で本部含む年間500万〜1,500万 kWh。小規模は低圧、中規模以上は高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "エステ機器の同時起動によるデマンドピーク",
    detail:
      "光フェイシャル・痩身機器・スチーマー等が複数室で同時起動すると、瞬間最大電力（デマンド）が大きく跳ね上がる。デマンド料金（基本料金）の決定要因となり、店舗単位で月数千〜数万円の差を生む。施術室個別空調制御・予約時間ずらしで平準化が必須。",
  },
  {
    label: "個室空調の連続稼働コスト",
    detail:
      "個室型サロンは客の快適性確保のため個室空調の温度設定変更が困難。営業時間中の連続稼働で空調コストが店舗電力の30〜45%を占める。高効率エアコン更新＋人感センサー連動制御で年5〜15%削減可能。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間15万kWh使用の中規模サロンで年62.7万円超の負担。大手チェーンでは負担額が請求総額の10〜15%に達する。",
  },
  {
    label: "燃料費調整額の月次変動",
    detail:
      "燃料費調整額1円/kWhの変動で、中規模サロン（月1.2万kWh）で月1.2万円、年間14万円の差。エステ機器・空調主体の業種は月次の電気代変動が経営収支に直結。",
  },
  {
    label: "低圧→高圧切替判断",
    detail:
      "低圧契約（50kW未満）と高圧契約（50kW以上）では単価構造が大きく異なる。エステ機器・空調の総設備が50kW近辺の店舗では、低圧維持で電気代が割高になるケースあり。デマンド実績の精査と高圧切替試算が必須。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模個人サロン（1〜3室、年商800〜2,500万円）",
    profile: "個人経営ネイル・エステ／低圧 10〜30kW／年間 1〜3万 kWh",
    annualCost: "年間電気代 40万〜150万円",
    note: "LED化・高効率エアコン更新・新電力切替で年8〜15%削減事例。",
  },
  {
    size: "中規模サロン（4〜10室、年商3,000万〜2億円）",
    profile: "都市部中堅サロン・複数室／高圧 50〜150kW／年間 8〜30万 kWh",
    annualCost: "年間電気代 250万〜900万円",
    note: "デマンドコントローラー＋施術室個別空調制御＋新電力切替で年12〜18%削減事例。",
  },
  {
    size: "大手チェーン50店舗（合計、年商50億円超）",
    profile: "全国FCチェーン・大手エステチェーン／高圧合計 800〜2,500kW／年間 500万〜1,500万 kWh",
    annualCost: "年間電気代 1.5億〜4.5億円",
    note: "本部一括電力契約＋長期固定＋全店LED統一＋空調更新で年8〜15%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模個人サロンの年間13%削減（Before/After）",
    before: "都内の個人ネイル・エステサロンA店（3室、低圧 28kW、年間 2.5万 kWh、年間電気代 125万円）。電力会社デフォルトプラン、空調10年経過、白熱灯・蛍光灯混在、機器同時起動でデマンドピーク発生。",
    after: "新電力切替（固定2年）／LED全面更新／高効率エアコン更新（補助1/3活用、投資60万円）／予約時間分散による機器起動の平準化／デマンドコントローラー導入。",
    result: "年間電気代 125万円 → 108.8万円（▲13%、▲16.2万円）／契約 kW 28→22／投資回収 補助金後 2年",
  },
  {
    title: "事例2：中規模サロンの年間16%削減",
    before: "関東で5店舗を運営する中堅エステサロンB社（合計高圧 500kW、年間 18万 kWh、年間電気代 600万円）。市場連動プランで2022〜2023年に月最大25万円の追加負担。光フェイシャル・痩身機器同時起動でデマンドピーク高止まり。",
    after: "固定3年プラン切替／施術室個別空調制御（人感センサー連動）／高効率エアコン更新／LED全面更新／デマンドコントローラー各店設置／エステ機器使用時間帯の空調セットバック制御／BEMS導入／定休日の負荷ゼロ化。",
    result: "年間電気代 600万円 → 504万円（▲16%、▲96万円）／契約 kW 500→410／投資回収 補助金後 3年",
  },
  {
    title: "事例3：50店舗チェーンの年間6,500万円削減",
    before: "全国50店舗エステチェーンC社（本部含む合計高圧 1,500kW、年間 1,200万 kWh、年間電気代 3.6億円）。各店個別契約継続、店舗毎の契約条件バラつき。",
    after: "本部一括電力契約の締結／長期5年固定プラン／全店LED統一・高効率エアコン更新／本部に集約した新電力相見積（10社）／自家消費太陽光（本部研修所＋大型店10店、合計300kW）／DR契約締結／BEMS全店標準化／施術室個別空調制御の全店展開／予約管理システムでの負荷分散。",
    result: "年間電気代 3.6億円 → 3.06億円（▲15%、▲5,400万円）／契約 kW 1,500→1,275／投資回収 補助金後 4年／CO₂削減 約1,500 t/年",
  },
];

const demandManagement = [
  {
    label: "施術室個別空調制御（人感センサー連動）",
    detail:
      "個室の在室状況を人感センサーで検知し、無人時は空調を省エネモードに自動切替。個室空調コスト▲10〜20%、店舗ピーク電力▲5〜10%。",
  },
  {
    label: "予約管理による機器起動の平準化",
    detail:
      "予約システムで光フェイシャル・痩身機器の同時起動を回避し、機器起動時間を分散。瞬間ピーク電力を10〜15%削減した事例。",
  },
  {
    label: "定休日設定による需要平準化",
    detail:
      "週1〜2日の定休日設定で空調・機器電力を完全ゼロ化。月間電力使用量▲10〜15%、デマンド料金にも好影響。",
  },
  {
    label: "低圧→高圧切替の試算",
    detail:
      "総設備50kW近辺の店舗では、低圧維持で電気代が割高になるケースあり。デマンド実績の精査と高圧切替試算で年5〜10%の削減可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "業務用エアコン更新・LED化・高効率エステ機器",
    rate: "中小1/2、大企業1/3、上限機種別",
    note: "ネイル・エステサロンの主力補助金。高効率エアコン更新で採択事例多数。",
  },
  {
    name: "中小企業向け 省エネ支援補助金",
    target: "LED化・空調更新・エステ機器更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "個人サロン・中規模チェーンで活用しやすい中小事業者向け制度。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光補助金",
    target: "屋根設置型自家消費太陽光・蓄電池",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "本部研修所・大型店の屋根面積を活用したチェーン向け。",
  },
  {
    name: "ZEB / ZEH-M 補助金（環境省）",
    target: "店舗の高断熱化・高効率空調・自家消費太陽光",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "新築店舗・大規模リニューアル時に活用しやすい。",
  },
  {
    name: "自治体独自の省エネ補助金",
    target: "LED・空調・機器更新",
    rate: "自治体ごとに異なる（1/3〜1/2）",
    note: "都道府県・市区町村の独自制度。中小サロンで活用しやすい。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "エステ機器・UV/LEDライト・空調の同時起動ピーク電力を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "UV/LEDライト・エステ機器・空調・照明の電力プロファイルを把握しているか",
  "低圧→高圧切替の試算を実施したか（総設備50kW近辺の店舗）",
  "LED化・高効率エアコン更新の投資回収試算を実施したか",
  "施術室個別空調制御（人感センサー連動）を検討したか",
  "予約管理による機器起動の平準化を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多店舗チェーンの場合、本部一括契約への切替を検討したか",
  "SII・自家消費太陽光補助・ZEB補助・自治体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ネイル・エステサロンの電気代水準はどれくらいですか？", answer: "売上高比2〜4%（個室型エステで機器多い店舗ほど高水準）、店舗運営原価比4〜8%が業界平均。中規模サロン（年商1億円級）で年250〜900万円、50店舗チェーン（年商50億円超）で年1.5〜4.5億円規模の電気代になります。" },
  { question: "エステ機器・UV/LEDライトの同時起動ピークを抑えるには？", answer: "①予約管理システムでの機器起動時間分散、②デマンドコントローラー導入、③施術室個別空調制御、④エステ機器のスタンバイ電力削減、⑤BEMS導入の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "個室空調の電気代を削減するには？", answer: "①人感センサー連動の個別空調制御、②高効率エアコン更新、③予約管理による空調プレ運転の最小化、④定休日設定による負荷ゼロ化、⑤BEMSによる空調プロファイル最適化の5本柱が効果的。中規模サロンで年30〜80万円の削減が目安。" },
  { question: "ネイル・エステサロンの固定プランと市場連動プランどちらが向きますか？", answer: "営業時間帯（10-21時、特に夕方〜夜）に空調・エステ機器が集中するため、市場連動プランは2022〜2023年の市場高騰局面で月最大25万円の追加負担事例あり。固定プランが原則向きます。" },
  { question: "低圧→高圧切替はいつ判断すべきですか？", answer: "総設備50kW近辺の店舗、または年間使用量が低圧上限を頻繁に超える店舗で検討すべき。高圧切替時の受変電設備投資（200〜500万円）とランニングコスト削減効果を試算し、投資回収3〜5年が目安です。" },
  { question: "ネイル・エステサロン向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、中小企業向け省エネ支援補助金、需要家主導型PPA補助、ZEB補助金、自治体独自補助の5本柱。高効率エアコン＋LED＋エステ機器更新の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "50店舗チェーンで本部一括契約のメリットは？", answer: "店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮、新電力相見積の交渉力大幅向上、契約管理工数の削減、サスティナビリティ報告の集約化が可能。50店舗で年5,000万〜1億円規模の削減事例があります。" },
  { question: "自家消費型太陽光はネイル・エステサロンで投資回収できますか？", answer: "屋根面積の小さい単独サロンでは投資効率が低いですが、本部研修所・大型店・チェーン本部ビルでは導入余地あり。300kW規模で年30〜40万kWh発電、年300〜500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本ネイリスト協会（JNA）", url: "https://www.nail.or.jp/" },
  { name: "日本エステティック振興協議会", url: "https://esthe-jpc.jp/" },
  { name: "経済産業省 商業統計", url: "https://www.meti.go.jp/statistics/tyo/syougyo/index.html" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function BeautyNailSalonElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/beauty-nail-salon-electricity-cost-review"
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
          <span className="text-slate-800">ネイル・エステサロンの見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ネイル・エステサロンの電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ネイル・エステサロンは、UV/LEDライト、光フェイシャル・痩身機器、個室空調制御、演出LED照明など多面的な電力負荷を持ち、機器同時起動ピーク管理と個室空調制御が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ネイル・エステの電力使用プロファイル（UV/LEDライト／エステ機器／空調／照明）</li>
              <li>業界平均の電気代水準（売上高比2〜4%）と1部屋あたり単価</li>
              <li>施術室個別空調制御・予約管理による負荷平準化の費用対効果</li>
              <li>規模別（小・中・大手チェーン）の電気代と削減事例3件（Before/After）</li>
              <li>低圧→高圧切替の判断ポイント</li>
              <li>SII・中小企業補助・自家消費太陽光・ZEB補助・自治体補助の組合せ活用</li>
              <li>サロン向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ネイル・エステの電力使用特性 — UV/LEDライト・エステ機器・個室空調・照明
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステの電力使用は『UV/LEDライト／エステ機器（光フェイシャル・痩身）／個室空調／店内照明／給湯・POS・洗浄機』の5層で構成されます。エステ機器同時起動と個室空調連続稼働が最大消費要素で業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比2〜4%、1部屋あたり3,000〜6,000 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステサロンの電気代水準は機器種類・個室数で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本ネイリスト協会・日本エステティック振興協議会・経産省商業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ネイル・エステの主要な電気代上昇要因 — 機器ピーク・空調・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステの電気代上昇は、エステ機器同時起動によるデマンドピーク、個室空調連続稼働、燃料費調整額の月次変動、再エネ賦課金の年次上昇、低圧/高圧契約区分の最適化が複合的に重なります。
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
              規模別の削減事例3件 — 小規模個人／中規模／50店舗チェーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステの電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/hair-salon-barber-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">理容室・美容室の電気料金見直し</Link>
              、{" "}
              <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小売店の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              エステ機器ピーク・個室空調のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステは施術室個別空調制御、予約管理による機器起動平準化、定休日設定、低圧→高圧切替判断など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 夕方〜夜ピーク時の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステは営業時間帯（10-21時、特に夕方〜夜）に空調・エステ機器が集中するため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夕方〜夜の市場高値時に施術集中</li>
                  <li>個室空調は連続稼働必須</li>
                  <li>客単価への即時転嫁が困難</li>
                  <li>BtoC事業で価格安定性が経営に直結</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>夕方〜夜のピーク時に機器・空調集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で月数十万円の追加負担</li>
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
              再エネ賦課金の影響 — 個室空調主体業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ネイル・エステの中規模チェーンでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模サロン（年18万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 62.8万円</li>
                  <li>2025年度（3.98円/kWh）：年 71.6万円（+8.8万円）</li>
                  <li>2026年度（4.18円/kWh）：年 75.2万円（+12.4万円）</li>
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
              ネイル・エステ特有の節電・省エネ施策 — 個室空調・予約分散・LED
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステの省エネは『施術室個別空調制御』『予約管理での機器分散』『LED全面更新』『高効率エアコン』『多店舗本部一括契約』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">施術室個別空調制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>人感センサー連動で無人時省エネモード</li>
                  <li>個室空調コスト▲10〜20%</li>
                  <li>SII＋自治体補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">予約管理での機器分散</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>光フェイシャル・痩身機器の同時起動回避</li>
                  <li>瞬間ピーク電力▲10〜15%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED全面更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>白熱灯・蛍光灯→LEDで照明電力▲50〜70%</li>
                  <li>演出LED調光で内装表現を維持</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">多店舗チェーン本部一括契約</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>本部一括契約で単価▲5〜10%</li>
                  <li>50店舗で年5,000万〜1億円の削減事例</li>
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
              補助金活用（業種別） — SII・中小企業補助・PPA・ZEB・自治体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステサロン向けに活用しやすい補助金は5本柱。高効率エアコン＋LED＋エステ機器更新はSII＋中小企業補助＋自治体補助の組合せで補助率を最大化できます。
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
              ネイル・エステに合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社サロンの状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネイル・エステは個室空調連続稼働・エステ機器同時起動・燃料費調整変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>エステ機器同時起動ピークの影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した13〜16%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="beauty-nail-salon-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/hair-salon-barber-electricity-cost-review", title: "理容室・美容室の電気料金見直し", description: "美容関連業種で共通点が多い。" },
              { href: "/dry-cleaning-electricity-cost-review", title: "クリーニング店の電気料金見直し", description: "店舗運営として共通の論点。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店の電気料金見直し", description: "店舗運営として共通の論点。" },
              { href: "/single-restaurant-electricity-cost-review", title: "単独飲食店の電気料金見直し", description: "小規模店舗として共通の論点。" },
              { href: "/clinic-electricity-cost-review", title: "クリニックの電気料金見直し", description: "個室・空調制御として共通の論点。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "小規模事業所として共通。" },
              { href: "/hot-spring-facility-electricity-cost-review", title: "温浴施設の電気料金見直し", description: "リラクゼーション業種として共通の論点。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "BtoC事業の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "サロンが市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "本部・大型店舗向けの投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "エアコン・LED更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "月次変動の根本要因。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "年次上昇の負担額試算。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "エステ機器同時起動対策の基本。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機（自社条件で年間電気代を試算）", description: "業種・規模・契約・エリアを入力するだけで推定年間電気代と削減余地3案を即時表示します。" },
            ]}
          />

          <ContentCta
            heading="自社のサロン条件でリスクを確認する"
            description="UV/LEDライト・エステ機器・個室空調・店内照明の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。施術室個別空調制御後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="ネイル・エステサロンの電力契約見直し、専門家に相談しませんか？"
            description="UV/LEDライト・光フェイシャル/痩身機器・個室空調・演出照明の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でサロン事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
