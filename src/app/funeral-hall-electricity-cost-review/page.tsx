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
  "葬儀場・斎場の電気料金見直しポイント｜安置冷蔵24h・式場空調・不規則ピーク稼働の契約最適化";
const pageDescription =
  "葬儀場・斎場の電気料金見直しを解説。安置冷蔵24h、式場空調、不規則ピーク、待合室、霊柩車EV充電、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "葬儀場 電気料金 見直し",
    "斎場 電気代",
    "安置冷蔵 電力",
    "セレモニーホール 空調 電気代",
    "葬儀場 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/funeral-hall-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/funeral-hall-electricity-cost-review",
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
    label: "安置冷蔵庫・霊安室冷却（24h停止不可）",
    detail:
      "ご遺体の安置冷蔵庫・霊安室冷却設備。中規模セレモニーホールで総設備20〜80kWの常時負荷で24h停止不可稼働。冷蔵庫1台あたり1〜3kW、複数体収容で多台数化。施設全体の電力使用量の15〜25%を占める基幹設備。",
  },
  {
    label: "式場・待合室空調（不規則ピーク）",
    detail:
      "通夜・告別式の進行に合わせて稼働する式場空調、待合室空調、受付ロビー空調。中規模ホールで総設備50〜200kW、葬儀件数の日次変動で負荷が10〜100%の幅で変動。施設全体の電力使用の25〜35%を占める。",
  },
  {
    label: "照明（式場・待合・夜間待機）",
    detail:
      "式場照明、待合室照明、ロビー・廊下照明、夜間遺体安置エリアの常時点灯。中規模ホールで総設備15〜50kW。夜間待機照明は24h点灯のため省エネ余地大。",
  },
  {
    label: "厨房設備（精進料理・通夜振る舞い）",
    detail:
      "通夜振る舞い・精進料理の業務用厨房（オーブン・冷蔵冷凍・配膳保温）。中規模ホールで総設備20〜80kW。葬儀日のみ稼働、稼働率は週2〜4日。",
  },
  {
    label: "霊柩車・送迎車のEV充電（EV化進行）",
    detail:
      "霊柩車・送迎マイクロバスのEV化が進行中。普通充電（6kW）／急速充電（50kW）の駐車場設置。中規模拠点で総設備30〜100kW。深夜時間帯シフトで電気代最適化が可能。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全日本葬祭業協同組合連合会・経産省特定サービス産業実態調査によれば、葬儀場・斎場の電気料金は売上高の2〜5%。1葬儀あたりの平均単価100〜200万円のうち電気代相当は約2〜4万円換算。安置冷蔵24h稼働で固定電力負担が大きい業種。",
  },
  {
    label: "施設面積1m²あたりの電力使用量",
    detail:
      "小規模式場（収容50〜120名）で1m²あたり年間150〜280 kWh、中規模セレモニーホール（収容150〜400名）で1m²あたり年間200〜400 kWh、大規模葬祭チェーン（複数式場）で1m²あたり年間250〜450 kWhが業界平均。安置冷蔵24h稼働の影響で平均より高い。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模式場（年商1〜3億円）で年間20〜80万 kWh、中規模セレモニーホール（年商5〜15億円）で年間100〜400万 kWh、大規模葬祭チェーン（年商30〜200億円）で年間1,000〜3,500万 kWh（複数式場合算）。チェーン化が進み広域契約最適化の余地大。",
  },
];

const costFactors = [
  {
    label: "安置冷蔵の24h停止不可性",
    detail:
      "安置冷蔵庫はご遺体安置の品質管理上、停止不可。月間使用量が小さくても固定電力負担として継続。燃料費調整額1円/kWhの変動でも中規模ホール（月30万kWh）で月30万円の差。",
  },
  {
    label: "不規則ピーク（葬儀件数の日次変動）",
    detail:
      "葬儀件数は日次で大幅変動（0件〜複数件／日）。空調・厨房・照明のピーク負荷が不規則に発生し、デマンド予測が困難。契約電力過剰になりやすい業種。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間250万kWh使用の中規模ホールで年1,125万円超の負担。",
  },
  {
    label: "夜間待機照明・空調の継続負荷",
    detail:
      "深夜帯のロビー照明・空調・遺体安置エリア照明が24h継続。中規模ホールで夜間負荷が日中ピークの30〜40%水準。LED化・待機モード設定で改善余地大。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模式場（年商1〜3億円、収容50〜120名）",
    profile: "家族葬専門・1日1組式場／高圧 50〜180kW／年間 20〜80万 kWh",
    annualCost: "年間電気代 600万〜2,400万円",
    note: "LED化・空調インバータ化・安置冷蔵高効率化で年7〜10%削減事例。",
  },
  {
    size: "中規模セレモニーホール（年商5〜15億円、収容150〜400名）",
    profile: "都市型セレモニーホール・複数式場併設／高圧 200〜600kW／年間 100〜400万 kWh",
    annualCost: "年間電気代 3,000万〜1.2 億円",
    note: "LED全面化＋BEMS＋安置冷蔵更新で年10〜13%削減事例。",
  },
  {
    size: "大規模葬祭チェーン（年商30〜200億円、複数式場）",
    profile: "ベルコ・ティア・燦ホールディングス等チェーン／高圧合計 1,500〜4,500kW／年間 1,000〜3,500万 kWh",
    annualCost: "年間電気代 3〜10.5 億円",
    note: "長期固定（5年）契約＋複数拠点広域最適化＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模家族葬式場の年間10%削減（Before/After）",
    before: "関東の家族葬式場A社（高圧 120kW、年間 60万 kWh、年間電気代 1,800万円）。市場連動プラン継続、安置冷蔵庫15年経過、ロビー照明24h点灯、空調オンオフ制御。",
    after: "新電力切替（固定3年）／LED全面化（投資300万円、SII補助1/2活用）／空調インバータ化／安置冷蔵庫高効率型更新／夜間待機照明の調光・人感制御／デマンドコントローラー導入。",
    result: "年間電気代 1,800万円 → 1,620万円（▲10%、▲180万円）／契約 kW 120→100／投資回収 補助金後 1.7年",
  },
  {
    title: "事例2：中規模セレモニーホールの年間13%削減",
    before: "中部のセレモニーホールB社（高圧 400kW、年間 300万 kWh、年間電気代 9,000万円）。市場連動プランで2022〜2023年に月最大200万円の追加負担。安置冷蔵24h稼働、夜間照明常時点灯、不規則ピーク管理不十分。",
    after: "固定3年プラン切替／LED全面化／空調インバータ化＋BEMS／安置冷蔵庫高効率型一括更新／自家消費太陽光 150kW 導入（屋根1,200 m²）／デマンド予測システム／夜間待機運転モード設定／霊柩車EV充電の深夜シフト。",
    result: "年間電気代 9,000万円 → 7,830万円（▲13%、▲1,170万円）／契約 kW 400→340／投資回収 補助金後 3年",
  },
  {
    title: "事例3：大規模葬祭チェーンの年間1.1億円削減",
    before: "国内大手葬祭チェーンC社の主力地域（高圧合計 3,000kW、年間 2,500万 kWh、年間電気代 7.5億円）。長期固定契約継続も拠点追加で契約電力上振れ、複数拠点の電力契約バラバラ。",
    after: "電力契約の5年長期固定締結（複数拠点広域最適化）／自家消費太陽光 800kW（複数拠点屋根分散）＋蓄電池 1MWh／LED全面化／需要家主導型PPA／BEMS統合運用／安置冷蔵高効率化／霊柩車EV充電インフラ整備（深夜シフト）／空調自動制御。",
    result: "年間電気代 7.5億円 → 6.4億円（▲14.7%、▲1.1億円）／契約 kW 3,000→2,600／投資回収 6年（補助金後 4年）／CO₂削減 約4,500 t/年",
  },
];

const demandManagement = [
  {
    label: "安置冷蔵のインバータ化・台数制御",
    detail:
      "安置冷蔵庫のインバータ化と稼働台数の収容人数連動制御。安置電力▲15〜25%。",
  },
  {
    label: "不規則ピーク対応のデマンド予測",
    detail:
      "葬儀予約データと連動したデマンド予測システムで、空調・厨房のピーク時間帯前負荷分散。契約電力を10〜15%削減。",
  },
  {
    label: "夜間待機照明の調光・人感制御",
    detail:
      "ロビー・廊下の夜間待機照明を人感センサー＋調光制御。夜間照明電力▲30〜50%。",
  },
  {
    label: "霊柩車EV充電の深夜シフト",
    detail:
      "霊柩車・送迎マイクロバスのEV充電を電力単価安価な深夜帯（22時〜翌6時）に集中。充電電力単価▲20〜30%。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "LED・空調更新・安置冷蔵庫・高効率厨房機器・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "葬儀業向けで採択率が高い主力補助金。安置冷蔵庫の高効率型一括更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい郊外型ホールと相性が良い。24h安置冷蔵稼働で自家消費率70〜80%。",
  },
  {
    name: "経産省 ものづくり・サービス等補助金",
    target: "厨房設備・安置冷蔵庫の最新型更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "葬祭業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "EV充電インフラ補助金（経産省・環境省）",
    target: "霊柩車・送迎車向け普通充電・急速充電設備",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "葬祭業のEV化推進で利用可能。普通充電数十口の大規模採択も。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "空調全面更新・蓄電池・コージェネ",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "安置冷蔵庫の稼働状況と電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "安置冷蔵・式場空調・厨房・夜間照明の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（100kW〜800kW）導入の試算を実施したか",
  "LED化・空調インバータ化・安置冷蔵更新の投資回収試算を実施したか",
  "葬儀件数日次変動に応じたデマンド予測ができているか",
  "夜間待機照明・空調の調光・人感制御の導入状況を確認したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・EV充電補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "葬儀場・斎場の電気代水準はどれくらいですか？", answer: "売上高比2〜5%が業界平均。小規模式場（年商2億円級）で年600万〜2,400万円、中規模セレモニーホール（年商10億円級）で年3,000万〜1.2億円、大規模葬祭チェーン（年商100億円級）で年3〜10.5億円規模の電気代になります。" },
  { question: "安置冷蔵庫の電気代を削減するには？", answer: "①インバータ化＋台数制御（電力▲15〜25%）、②高効率冷蔵庫への更新（電力▲20〜30%）、③収容人数連動の稼働台数最適化、④断熱性能改善、⑤冷却温度の適正化、の5本柱が中心。投資回収はSII補助で3〜5年が目安です。" },
  { question: "不規則ピーク稼働のデマンド管理は？", answer: "①葬儀予約データ連動のデマンド予測システム、②空調・厨房のピーク時間帯前負荷分散、③契約電力の見直し（過剰防止）、④デマンドコントローラー導入、⑤BEMSによる需要見える化、の5本柱が効果的。中規模ホールで契約電力▲10〜15%削減可能。" },
  { question: "夜間待機照明の電気代対策は？", answer: "①LED化（電力▲50〜60%）、②人感センサー連動（待機時間電力▲30〜50%）、③調光制御、④エリア別ON/OFF制御、⑤夜間待機モード切替、の5本柱が効果的。中規模ホールで年100〜300万円の削減が目安。" },
  { question: "葬儀業の固定プランと市場連動プランどちらが向きますか？", answer: "安置冷蔵24h稼働・通夜告別式の進行時刻固定・葬儀価格の即時転嫁困難のため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続事業者で月数百万円の追加負担が発生しました。" },
  { question: "安置冷蔵の高効率化は投資回収できますか？", answer: "従来型→高効率インバータ型への更新で、安置電力▲20〜30%。中規模ホール（年間300万kWh）で年間300〜500万円の削減、投資回収はSII＋GX補助の組合せで3〜5年が目安です。" },
  { question: "葬儀業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、EV充電インフラ補助、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は葬儀場で投資回収できますか？", answer: "屋根面積1,000m²以上、24h安置冷蔵稼働の郊外型ホールは業種別で中上位の相性。200kWで年22〜28万kWh発電、年350〜500万円の削減、投資回収8〜11年（補助金後5〜7年）が目安です。安置冷蔵24h稼働で自家消費率70〜80%になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全日本葬祭業協同組合連合会", url: "https://www.sousai.or.jp/" },
  { name: "公益社団法人 日本消費者協会", url: "https://jca-home.com/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function FuneralHallElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/funeral-hall-electricity-cost-review"
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
          <span className="text-slate-800">葬儀場・斎場の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            葬儀場・斎場の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            葬儀場・斎場は、安置冷蔵庫の24h停止不可稼働、不規則ピークの式場・待合室空調、夜間待機照明、霊柩車EV充電など多面的な電力負荷を持ち、葬儀件数日次変動と固定電力負担が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>葬儀業の電力使用プロファイル（安置冷蔵／式場空調／厨房／夜間照明）</li>
              <li>業界平均の電気代水準（売上高比2〜5%）と施設単位あたり単価</li>
              <li>安置冷蔵高効率化・LED化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>不規則ピーク対応のデマンド予測施策</li>
              <li>SII・PPA・ものづくり補助・EV充電補助・GX補助の組合せ活用</li>
              <li>葬儀業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              葬儀業の電力使用特性 — 安置冷蔵・式場空調・厨房・夜間照明
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業の電力使用は『安置冷蔵／式場待合空調／照明／厨房／霊柩車EV充電』の5層で構成されます。安置冷蔵24h停止不可稼働が固定負荷の中核で、葬儀件数の日次変動による不規則ピークが業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比2〜5%、施設単位150〜450 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業の電気代水準は施設規模（家族葬式場／セレモニーホール／葬祭チェーン）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全日本葬祭業協同組合連合会・日本消費者協会・経産省特定サービス産業実態調査から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              葬儀業の主要な電気代上昇要因 — 安置冷蔵24h・不規則ピーク・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業の電気代上昇は、安置冷蔵の停止不可性に加え、葬儀件数日次変動による不規則ピーク、夜間待機負荷、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 家族葬式場／セレモニーホール／葬祭チェーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/wedding-banquet-hall-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">結婚式場・宴会場の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              安置冷蔵・式場空調のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業は安置冷蔵インバータ制御、不規則ピーク予測、夜間待機照明調光、霊柩車EV充電深夜シフトなど、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 安置冷蔵24h稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業は安置冷蔵24h稼働・通夜告別式の進行時刻固定・葬儀価格への即時転嫁困難のため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>安置冷蔵の24h稼働が必須</li>
                  <li>葬儀進行の時刻変更が不可能</li>
                  <li>葬儀価格への即時転嫁が困難</li>
                  <li>不規則ピークで高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>夜間時間帯の安置冷蔵で継続負担</li>
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
              再エネ賦課金の影響 — 24h稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。葬儀業の中規模ホールでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模セレモニーホール（年300万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1,047万円</li>
                  <li>2025年度（3.98円/kWh）：年 1,194万円（+147万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 1,350万円（+303万円）</li>
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
              葬儀業特有の節電・省エネ施策 — 安置冷蔵・LED・空調・EV充電
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業の省エネは『安置冷蔵高効率化』『LED全面化＋夜間調光』『式場空調インバータ化＋BEMS』『霊柩車EV充電深夜シフト』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">安置冷蔵高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>従来型→高効率インバータ型更新</li>
                  <li>安置電力▲20〜30%</li>
                  <li>SII＋GX補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED全面化＋夜間調光</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蛍光灯・水銀灯→LED化で電力▲50〜60%</li>
                  <li>夜間人感センサー連動で更に▲30〜50%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">霊柩車EV充電深夜シフト</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>EV充電を深夜帯（22〜6時）に集中</li>
                  <li>充電電力単価▲20〜30%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（100kW〜800kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h安置冷蔵稼働で自家消費率70〜80%</li>
                  <li>投資回収 8〜11年（補助金後 5〜7年）</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・EV充電補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業向けに活用しやすい補助金は5本柱。安置冷蔵更新＋空調更新はSII＋GX補助の組合せで補助率を最大化できます。
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
              葬儀業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社葬儀場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              葬儀業は安置冷蔵24h稼働・不規則ピーク・夜間待機継続負荷の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>安置冷蔵・空調のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した10〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="funeral-hall-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/wedding-banquet-hall-electricity-cost-review", title: "結婚式場・宴会場の電気料金見直し", description: "式場運営が共通。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "宴会場・宿泊運営が共通。" },
              { href: "/business-hotel-electricity-cost-review", title: "ビジネスホテルの電気料金見直し", description: "宿泊業の電力管理が共通。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "飲食チェーンの電気料金見直し", description: "厨房設備が共通。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設の電気料金見直し", description: "大空間空調が共通。" },
              { href: "/hot-spring-facility-electricity-cost-review", title: "温泉施設の電気料金見直し", description: "宴会場運営が共通。" },
              { href: "/nursing-care-facility-electricity-cost-review", title: "介護施設の電気料金見直し", description: "24h稼働業種で共通。" },
              { href: "/factory-electricity-cost-reduction", title: "施設の電気代削減", description: "電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "施設電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "葬儀業が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "安置冷蔵・空調更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "24h稼働事業者のリスク。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機（自社条件で年間電気代を試算）", description: "業種・規模・契約・エリアを入力するだけで推定年間電気代と削減余地3案を即時表示します。" },
            ]}
          />

          <ContentCta
            heading="自社の葬儀場・斎場条件でリスクを確認する"
            description="安置冷蔵・式場空調・夜間照明・霊柩車EV充電の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。安置冷蔵高効率化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="葬儀場・斎場の電力契約見直し、専門家に相談しませんか？"
            description="安置冷蔵・式場空調・夜間照明・霊柩車EV充電の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で葬祭事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
