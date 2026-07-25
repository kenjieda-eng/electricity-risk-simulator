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
  "複合商業施設の電気料金見直しポイント｜テナント共用部・空調・照明・駐車場の横断最適化";
const pageDescription =
  "駅ビル・モール・テナントビル等の複合商業施設の電気料金見直しを解説。共用部空調・照明・エスカレーター・エレベーター・機械式駐車場・給排水ポンプ、テナント個別課金とサブメーター、共用部と専有部の契約分界、固定vs市場連動、蓄電池・PPA活用まで横断的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "複合商業施設 電気料金 見直し",
    "テナントビル 共用部 電気代",
    "駅ビル モール 電力",
    "サブメーター テナント課金",
    "商業施設 空調 省エネ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/commercial-facility-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/commercial-facility-electricity-cost-review",
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
    label: "共用部セントラル空調・熱源設備",
    detail:
      "駅ビル・モールの共用通路・アトリウム・イベント広場を空調するセントラル熱源（ターボ冷凍機・吸収式冷凍機・熱源ポンプ・空調機AHU）。営業時間帯に連続稼働し、施設全体の電力使用量の30〜45%を占める最大負荷。外気温連動で夏季・冬季にピークが立つ。",
  },
  {
    label: "テナント専有部の個別空調",
    detail:
      "各テナント区画に設置された個別パッケージ空調（ビル用マルチ・EHP/GHP）。テナントの営業形態（飲食・物販・サービス）により負荷が大きく異なり、課金は共用部と分離されるのが一般的。専有部の使用量は施設全体の20〜35%を占める。",
  },
  {
    label: "共用部・専有部の照明",
    detail:
      "共用通路・サイン・駐車場・バックヤードの共用部照明と、テナント区画の専有部照明。LED化前の施設では照明が施設全体の15〜25%を占める。共用部照明は運営側、専有部照明はテナント側の負担となる分界が論点。",
  },
  {
    label: "エスカレーター・エレベーター（EV）",
    detail:
      "来館者動線を支える昇降設備。大型SCで数十台規模となり、運転台数・速度が電力に直結。施設全体の5〜12%を占める。群管理・間引き運転・人感連動で削減余地が大きい設備群。",
  },
  {
    label: "駐車場設備（機械式・自走式）",
    detail:
      "機械式立体駐車場のパレット搬送動力、自走式駐車場の照明・換気ファン・排煙設備。台数・階数により負荷が変動し、施設全体の5〜10%を占める。照明のLED化とCO2濃度連動換気で削減しやすい領域。",
  },
  {
    label: "給排水ポンプ・受変電・防災設備",
    detail:
      "受水槽・高置水槽への揚水ポンプ、排水ポンプ、受変電設備の待機損失、防災・非常用設備の常時電力。施設全体の5〜10%を占め、インバータ化・力率改善の対象になりやすいベース負荷。",
  },
];

const industryBenchmark = [
  {
    label: "施設種別の電気代水準",
    detail:
      "経産省・環境省の業務部門統計や不動産業界の運営実績によれば、複合商業施設の電気料金は管理費・共益費原価の中で最大級の比率を占め、共用部電力は施設運営コストの15〜30%規模。テナント専有部を含む総電力では、施設全体の運営費に対する影響が特に大きい業種です。",
  },
  {
    label: "延床面積あたりの電力原単位",
    detail:
      "業務用商業施設の年間電力原単位は延床1m²あたり150〜350 kWh/年が一般的な目安（施設種別・営業時間・飲食テナント比率で変動）。飲食・食品スーパー併設型は空調・厨房負荷で上振れし、物販中心型は相対的に低めの傾向。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模テナントビル・駅ビル（延床5,000〜15,000m²）で年間100〜500万 kWh、中規模モール・駅ビル（延床15,000〜60,000m²）で年間500〜2,500万 kWh、大規模SC・複合商業施設（延床60,000m²超）で年間2,500万〜1億 kWh が目安。",
  },
];

const costFactors = [
  {
    label: "共用部電力の燃料費調整額影響",
    detail:
      "共用部空調・照明の年間使用量が大きいため、燃料費調整額1円/kWhの変動でも中規模施設（共用部で月100万kWh）で月100万円、年間1,200万円規模のインパクト。共益費・管理費への転嫁ルールがテナント契約に依存し、運営側が変動を吸収する構造になりやすい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間2,000万kWh使用の中規模施設で共用部・専有部合計の賦課金負担が年8,000万円超に達し、共益費算定を圧迫します。",
  },
  {
    label: "テナント個別課金・サブメーター・契約分界の複雑さ",
    detail:
      "複合商業施設は共用部（運営側）と専有部（テナント側）で契約・課金が分かれ、サブメーターでテナントへ実費按分するケースが多い。分界点の設定・検針・按分ルールが不透明だと、単価上昇分の負担配分でトラブルになりやすく、見直しの前提整理が不可欠です。",
  },
  {
    label: "夏季・冬季の空調ピーク",
    detail:
      "商業施設は来館者数と外気温の双方に空調負荷が連動し、夏季（7〜9月）・冬季（12〜2月）に共用部空調のデマンドピークが立つ。ピーク時の契約電力（kW）が基本料金を左右するため、ピークカットの巧拙が年間コストを大きく分けます。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、長時間営業の商業施設に影響。新電力経由でも回避できず、共用部・専有部いずれの契約にも長期的な電気代上昇圧力として継続します。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模テナントビル・駅ビル（延床5,000〜15,000m²）",
    profile: "駅前テナントビル・小型駅ビル／高圧 300〜800kW／年間 100〜500万 kWh",
    annualCost: "年間電気代（共用部中心）3,000万〜1.5億円",
    note: "共用部LED化・高効率空調更新・デマンド制御で年8〜15%削減事例。",
  },
  {
    size: "中規模モール・駅ビル（延床15,000〜60,000m²）",
    profile: "地域中核モール・駅ビル／高圧〜特別高圧 800〜3,000kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代（共用部＋専有部）1.5〜7.5億円",
    note: "BEMS統合＋自家消費太陽光＋蓄電池で年10〜18%削減事例。",
  },
  {
    size: "大規模SC・複合商業施設（延床60,000m²超）",
    profile: "大型ショッピングセンター・複合商業施設／特別高圧 3,000〜10,000kW／年間 2,500万〜1億 kWh",
    annualCost: "年間電気代 7.5〜30億円",
    note: "長期固定契約と需要家主導型PPA併用＋ZEB Ready化が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：駅前テナントビルの年間12%削減（Before/After）",
    before: "首都圏の駅前テナントビルA（高圧 600kW、共用部年間 300万 kWh、共用部年間電気代 8,000万円）。市場連動プランを継続、共用部照明が蛍光灯のまま、空調は築15年のセントラル熱源。テナントへのサブメーター按分ルールが不透明。",
    after: "新電力切替（固定3年）／共用部LED全面更新（SII補助1/3活用）／セントラル熱源の高効率インバータ機更新／デマンドコントローラー導入／サブメーター按分ルールの明確化とテナント合意。",
    result: "共用部年間電気代 8,000万円 → 7,040万円（▲12%、▲960万円）／契約 kW 600→540／投資回収 補助金後 3.5年",
  },
  {
    title: "事例2：中規模モールの年間15%削減",
    before: "地方中核都市のモールB（特別高圧 1,800kW、共用部＋専有部で年間 2,000万 kWh、年間電気代 3.2億円）。2022〜2023年に市場連動で月最大1,800万円の追加負担を経験。夏季の共用部空調ピークで契約電力が上振れ。",
    after: "共用部を固定5年プランへ切替／BEMSで共用部＋専有部の使用量を統合可視化／高効率空調＋全館LED化（SII＋環境省補助）／自家消費太陽光 1MW（屋上・駐車場）＋蓄電池 2MWh／エスカレーター群管理制御。",
    result: "年間電気代 3.2億円 → 2.72億円（▲15%、▲4,800万円）／契約 kW 1,800→1,560／投資回収 補助金後 4.0年",
  },
  {
    title: "事例3：大規模SCの年間1.17億円削減",
    before: "郊外型大規模ショッピングセンターC（特別高圧 5,000kW、年間 6,000万 kWh、年間電気代 9.0億円）。長期固定契約を継続も増床で契約電力が上振れ。機械式駐車場・多数のエスカレーターで昇降設備の電力比率が高い。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 3MW＋蓄電池 4MWh／需要家主導型PPA（オフサイト太陽光5MW）／全館ZEB Ready化改修（高効率空調・LED・断熱）／昇降設備群管理＋駐車場CO2連動換気／DR契約締結。",
    result: "年間電気代 9.0億円 → 7.83億円（▲13%、▲1.17億円）／契約 kW 5,000→4,400／投資回収 6.0年（補助金後 4.5年）",
  },
];

const demandManagement = [
  {
    label: "共用部空調のデマンド予測制御",
    detail:
      "来館者予測・外気温予報と連動して共用部セントラル空調を事前制御し、開店ピークと午後の外気温ピークの重畳を回避。中規模施設で年300〜800万円の基本料金削減効果。",
  },
  {
    label: "テナント個別空調のBEMS統合・見える化",
    detail:
      "共用部と専有部の空調・照明をBEMSで統合可視化し、テナントごとの使用量をサブメーターで把握。専有部の過剰空調を是正し、施設全体の同時最大負荷を8〜15%削減。テナント課金の公平性向上にも寄与。",
  },
  {
    label: "エスカレーター・エレベーターの群管理・間引き運転",
    detail:
      "来館者数に応じてエスカレーターの運転台数・速度を自動調整し、エレベーターを群管理で最適配車。閑散時間帯の間引き運転・人感センサー連動で昇降設備の電力を10〜25%削減。",
  },
  {
    label: "駐車場照明・換気のスケジュール／CO2連動制御",
    detail:
      "自走式駐車場の照明をLED＋人感センサー化し、換気ファンをCO2濃度連動のインバータ制御に。常時全開運転をやめることで駐車場電力を20〜35%削減、投資回収1〜2年が目安。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場・業務用ビル型）",
    target: "高効率空調・LED・熱源設備・インバータポンプ・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "業務用商業施設で採択実績の多い主力補助金。共用部空調・照明の大規模更新で活用しやすい。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋上・駐車場スペースの大きい商業施設と相性が良い。長時間営業で自家消費率を高めやすい。",
  },
  {
    name: "環境省 ZEB化・脱炭素設備導入支援",
    target: "ZEB Ready化改修（高効率空調・照明・断熱・BEMS）",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "既存商業施設のZEB化改修に活用。省エネと不動産価値向上を同時実現。詳細な建物条件は要確認。",
  },
  {
    name: "高効率空調・照明更新補助（各省・自治体）",
    target: "業務用パッケージ空調・ビル用マルチ・LED照明の更新",
    rate: "1/3〜1/2、制度により異なる",
    note: "国・自治体の省エネ設備更新支援。テナント専有部と共用部で申請主体が分かれる点に注意。",
  },
  {
    name: "フロン排出抑制法対応補助（環境省）",
    target: "特定フロン使用空調・冷凍機のノンフロン・低GWP冷媒への更新",
    rate: "1/2、上限事業規模に応じる",
    note: "フロン規制対応と省エネを同時に進める補助制度。大型熱源の更新時に検討したい。",
  },
];

const checklistItems = [
  "共用部と専有部の契約分界（メーター・課金主体）を図面で整理したか",
  "テナントへのサブメーター按分ルール（検針・単価・共益費反映）を明文化しているか",
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季・冬季の共用部空調ピーク月の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を共用部契約書で確認したか",
  "共用部照明・専有部照明のLED化率と更新計画を把握しているか",
  "セントラル熱源・個別空調の高効率機更新計画を策定したか",
  "エスカレーター・エレベーターの群管理・間引き運転の導入余地を確認したか",
  "屋上・駐車場を活用した自家消費太陽光（500kW〜3MW）導入の試算を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "SII・需要家主導型PPA・ZEB補助・フロン規制対応補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面での共益費への影響と負担配分を関係者と合意したか",
];

const faqItems = [
  { question: "複合商業施設の電気代はどこが大きいですか？", answer: "共用部セントラル空調・熱源が施設全体の30〜45%を占め最大負荷です。次いでテナント専有部の個別空調（20〜35%）、共用部・専有部照明（15〜25%）、エスカレーター・エレベーター（5〜12%）、駐車場・給排水ポンプ（各5〜10%）が続きます。共用部と専有部で契約・課金が分かれる点が特徴です。" },
  { question: "共用部と専有部の契約はどう整理すればよいですか？", answer: "まず図面とメーター配置から契約分界点を確認し、共用部（運営側）と専有部（テナント側）の負担範囲を明確にします。サブメーターでテナントへ実費按分する場合は、検針・単価・共益費反映のルールを明文化し合意しておくことが、単価上昇分の負担配分トラブルを防ぐ前提になります。詳細は共用部の負担配分事例やサブメーター課金の解説を参照してください。" },
  { question: "商業施設の共用部空調の電気代を下げるには？", answer: "①セントラル熱源の高効率インバータ機更新（電力▲20〜35%）、②BEMSによる来館者・外気温連動のデマンド予測制御、③全館LED化、④外気冷房・全熱交換の活用、⑤テナント個別空調の見える化と過剰空調是正、の5本柱が中心です。SII・ZEB補助の活用で投資回収を短縮できます。" },
  { question: "複合商業施設は固定プランと市場連動プランどちらが向きますか？", answer: "長時間営業で共用部空調のベース負荷が大きく、共益費への転嫁に時間がかかるため、共用部契約は固定プランの安定性が向くケースが多いです。2022〜2023年の市場高騰局面では市場連動継続施設で月数百万〜千万円超の追加負担が発生しました。ただし自家消費太陽光・蓄電池と組み合わせた部分的な市場連動活用も選択肢で、条件により最適解は異なります。" },
  { question: "エスカレーター・エレベーターの電気代は削減できますか？", answer: "できます。来館者数に応じたエスカレーターの運転台数・速度制御、人感センサー連動の間引き運転、エレベーターの群管理最適配車で昇降設備の電力を10〜25%削減できます。閑散時間帯の運用ルール見直しは投資が小さく効果が出やすい施策です。" },
  { question: "機械式・自走式駐車場の電力対策は？", answer: "自走式駐車場は照明のLED＋人感センサー化、換気ファンのCO2濃度連動インバータ制御で駐車場電力を20〜35%削減できます（投資回収1〜2年目安）。機械式駐車場はパレット搬送動力の待機損失低減と稼働率に応じた運用最適化が中心です。" },
  { question: "商業施設向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA・蓄電池補助、環境省ZEB化・脱炭素補助、高効率空調・照明更新補助、フロン排出抑制法対応補助の5本柱です。共用部と専有部で申請主体が分かれる点に注意し、複数補助の組合せ申請で採択率と補助率を高められます。" },
  { question: "商業施設の屋上・駐車場で太陽光は投資回収できますか？", answer: "屋上・立体駐車場上部のスペースが広く、長時間営業で日中負荷が大きい商業施設は自家消費太陽光と相性が良好です。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安。蓄電池併設でピークカットと非常用電源を兼ねられます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "環境省 ZEB PORTAL（業務用建築物の省エネ）", url: "https://www.env.go.jp/earth/zeb/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
  { name: "一般社団法人エネルギー情報センター 独自調査" },
];

export default function CommercialFacilityElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/commercial-facility-electricity-cost-review"
        datePublished="2026-07-21"
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
          <span className="text-slate-800">複合商業施設の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            複合商業施設の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            駅ビル・モール・テナントビルなどの複合商業施設は、共用部のセントラル空調・照明・エスカレーター・エレベーター・駐車場・給排水ポンプに加え、テナント専有部の個別空調・照明が重なる複層的な電力負荷を持ちます。共用部（運営側）と専有部（テナント側）で契約・課金が分かれ、サブメーターによる按分や契約分界の整理が見直しの前提になる点が最大の特徴です。本ページは、複合商業施設（駅ビル・モール・テナントビル等の共用部を含む横断）の電力見直しにフォーカスします。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            読み分けの目安として、ショッピングセンターのZEB化の具体的な取り組みは{" "}
            <Link href="/case-study-shopping-center-zeb" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ショッピングセンターZEB化事例</Link>
            、スーパー単体の見直しは{" "}
            <Link href="/supermarket-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">スーパーの電気料金見直し</Link>
            、モール単体の見直しは{" "}
            <Link href="/shopping-mall-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ショッピングモールの電気料金見直し</Link>
            で扱います。本ページは複合商業施設の共用部を含む横断的な電力見直しを整理します。
          </p>
          <AuthorBadge publishedAt="2026-07-21" updatedAt="2026-07-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>複合商業施設の電力使用プロファイル（共用部空調／照明／昇降設備／駐車場／ポンプ）</li>
              <li>延床面積あたりの電力原単位と施設規模別の年間使用量</li>
              <li>共用部と専有部の契約分界・サブメーター按分・テナント個別課金の整理</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>共用部空調のデマンド予測制御・昇降設備の群管理・駐車場CO2連動制御</li>
              <li>SII・PPA・ZEB補助・高効率空調照明補助・フロン規制対応補助の組合せ活用</li>
              <li>複合商業施設向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              複合商業施設の電力使用特性 — 共用部空調・照明・昇降設備・駐車場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設の電力使用は『共用部セントラル空調／テナント個別空調／共用部・専有部照明／エスカレーター・エレベーター／駐車場・給排水ポンプ』の各層で構成されます。共用部空調と照明が施設全体の45〜65%を占め、共用部と専有部で契約・課金が分かれる独特のコスト構造を形成します。
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 延床1m²あたり150〜350 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設の電気代水準は施設種別（駅ビル／モール／SC）と飲食テナント比率・営業時間で大きく異なります。業界統計と公開データから整理した業界平均値を、自社施設の水準との比較で活用してください。
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
              ※ 出典: 経産省業務部門統計・環境省ZEB関連資料から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              複合商業施設の主要な電気代上昇要因 — 燃料費・賦課金・契約分界・空調ピーク
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設の電気代上昇は、共用部空調のベース負荷に加え、テナント個別課金と契約分界の複雑さ、夏季・冬季の空調ピーク、賦課金・容量拠出金の上乗せが複合的に重なります。
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
              、テナント按分の実務は{" "}
              <Link href="/tenant-sub-meter-electricity-billing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">テナントのサブメーター課金</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 駅前テナントビル／中規模モール／大規模SC
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設の電気代削減は規模帯ごとに最適施策の組合せが異なります。公開されている施設運営の取り組みから整理した3つのパターンをBefore/Afterで提示します。
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
              関連施設は{" "}
              <Link href="/shopping-mall-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ショッピングモールの電気料金見直し</Link>
              、{" "}
              <Link href="/department-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">百貨店の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              空調ピーク・昇降設備・駐車場のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設は共用部空調のデマンド予測制御、昇降設備の群管理、駐車場のCO2連動換気など、施設特有のデマンド管理戦略が効果的です。
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
              燃料費調整・市場連動プランの影響 — 共用部ベース負荷への波及
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設は共用部空調の長時間稼働でベース負荷が大きく、共益費への転嫁に時間差があるため、市場価格高騰局面での影響が運営収支に波及します。共用部契約では固定プランの安定性が評価される場面が多い一方、自家消費や蓄電池と組み合わせた部分的な市場連動活用も選択肢になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが評価される理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>共用部空調・照明の長時間ベース負荷が大きい</li>
                  <li>共益費への転嫁ルール改定に時間がかかる</li>
                  <li>テナント・来館者への価格転嫁が即時にできない</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の空調ピークと市場高値期の重畳</li>
                  <li>JEPX 80円/kWh級の高騰局面で共益費が急増</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、施設特有の判断軸は{" "}
              <Link href="/commercial-facility-fixed-vs-market-linked" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">商業施設の固定vs市場連動</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 長時間営業施設の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。複合商業施設の中規模施設では負担額が請求総額の10〜15%に達し、共益費算定を圧迫します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模複合商業施設（年2,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 6,980万円</li>
                  <li>2025年度（3.98円/kWh）：年 7,960万円（+980万円）</li>
                  <li>2026年度（4.18円/kWh）：年 8,360万円（+1,380万円）</li>
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
              複合商業施設特有の節電・省エネ施策 — 高効率空調・LED・蓄電池・PPA
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設の省エネは『共用部セントラル空調の高効率化』『全館LED化＋人感連動』『昇降設備の群管理』『自家消費太陽光＋蓄電池＋PPA』『BEMSによる共用部・専有部統合可視化』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">共用部セントラル空調の高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率インバータ熱源・全熱交換で電力▲20〜35%</li>
                  <li>SII＋ZEB補助＋フロン規制対応補助で投資回収 3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">全館LED化＋人感・照度連動</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>共用通路・駐車場・バックヤードで電力▲30〜50%</li>
                  <li>調光・スケジュール制御で来館状況に追従</li>
                  <li>SII補助で投資回収 2〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費太陽光＋蓄電池</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>屋上・立体駐車場上部を活用（500kW〜3MW）</li>
                  <li>蓄電池でピークカット＋非常用電源を兼用</li>
                  <li>投資回収 7〜10年（補助金後 5〜7年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">BEMSによる共用部・専有部統合可視化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>サブメーターで専有部使用量を可視化</li>
                  <li>過剰空調・照明の是正とテナント課金公平化</li>
                  <li>ZEB化・脱炭素の進捗管理基盤にもなる</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、蓄電池の判断軸は{" "}
              <Link href="/commercial-facility-battery-considerations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">商業施設の蓄電池導入の検討ポイント</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・ZEB補助・空調照明更新・フロン規制対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設向けに活用しやすい補助金は5本柱。共用部と専有部で申請主体が分かれる点に注意し、ZEB化・フロン規制対応との組合せ申請で補助率を最大化できます。
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
              、共用部負担配分の実例は{" "}
              <Link href="/case-study-tenant-building-owner-common-area" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">テナントビル共用部の負担配分事例</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              複合商業施設に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社施設の状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力、テナントとの按分合意の質が下がります。
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
              シミュレーターで自社の複合商業施設の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複合商業施設は共用部空調ベース負荷・昇降設備・駐車場・テナント個別課金の複層リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、共用部契約の固定プラン切替やピークカットのメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季・冬季の空調ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜15%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-07-21"
            />
            <GlossaryLinks currentSlug="commercial-facility-electricity-cost-review" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "基本料金", "契約電力", "デマンド値", "固定プラン", "市場連動プラン"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/shopping-mall-electricity-cost-review", title: "ショッピングモールの電気料金見直し", description: "モール単体の共用部・テナント電力対策。" },
              { href: "/department-store-electricity-cost-review", title: "百貨店の電気料金見直し", description: "百貨店の空調・照明・昇降設備の対策。" },
              { href: "/supermarket-electricity-cost-review", title: "スーパーの電気料金見直し", description: "食品スーパー単体の冷蔵・空調電力対策。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店舗の電気料金見直し", description: "小売店舗一般の見直しポイント。" },
              { href: "/case-study-shopping-center-zeb", title: "ショッピングセンターZEB化事例", description: "SCのZEB Ready化の具体的な取り組み。" },
              { href: "/case-study-tenant-building-owner-common-area", title: "テナントビル共用部の負担配分事例", description: "オーナー・テナント間の共用部電力配分。" },
              { href: "/tenant-sub-meter-electricity-billing", title: "テナントのサブメーター課金", description: "サブメーター按分・検針・課金の実務。" },
              { href: "/commercial-facility-fixed-vs-market-linked", title: "商業施設の固定vs市場連動", description: "施設特有のプラン選択判断軸。" },
              { href: "/commercial-facility-battery-considerations", title: "商業施設の蓄電池導入の検討ポイント", description: "ピークカットと非常用電源の両立。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "長時間営業施設が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上・駐車場活用の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "高効率空調・LED更新の主力補助金。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "日中負荷の大きい施設の適性。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の複合商業施設条件でリスクを確認する"
            description="共用部空調・照明・昇降設備・駐車場の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。夏季・冬季の空調ピークや、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="複合商業施設の電力契約見直し、専門家に相談しませんか？"
            description="共用部と専有部の契約分界・サブメーター按分・共用部空調の省エネは固有の論点が多くなります。エネルギー情報センターは中立的立場で施設運営者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
