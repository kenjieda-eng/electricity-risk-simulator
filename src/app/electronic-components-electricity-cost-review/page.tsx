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
  "電子部品業の電気料金見直しポイント｜クリーンルーム・リフロー炉・24h検査の契約最適化";
const pageDescription =
  "電子部品業の電気料金見直しを解説。実装ライン・リフロー炉、クリーンルーム空調、24h検査ライン、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電子部品 電気料金 見直し",
    "実装 リフロー 電気代",
    "クリーンルーム 電力",
    "24h検査 電気代",
    "電子部品 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/electronic-components-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electronic-components-electricity-cost-review",
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
    label: "実装ライン・リフロー炉（SMT実装）",
    detail:
      "電子部品工場の中核設備。チップマウンタ＋リフロー炉（240〜260℃のはんだリフロー）＋検査装置の自動実装ライン。1ラインあたり50〜200kWで、24h稼働が主流。工場全体の電力使用量の20〜35%を占める。",
  },
  {
    label: "クリーンルーム空調（HEPA・温湿度管理）",
    detail:
      "クラス1,000〜10,000のクリーンルームの空調・HEPAフィルター・温湿度管理。1工場あたり総設備300〜2,000kWの常時負荷。電子部品工場では電力使用量の30〜45%を占める最大消費要素。",
  },
  {
    label: "検査ライン・テスター（24h連続稼働）",
    detail:
      "ICテスター・LCRメーター・X線検査・AOI（自動光学検査）等の検査装置。1台あたり5〜50kWで24h連続稼働。工場全体の10〜20%を占める。品質保証のため停止できない。",
  },
  {
    label: "ウェハー処理・成膜・露光設備",
    detail:
      "半導体・MEMS等の電子部品製造でのウェハー処理装置、CVD/PVD成膜装置、露光装置、エッチング装置。1台あたり50〜500kWで、製造工程の中核を担う。",
  },
  {
    label: "コンプレッサー・真空ポンプ・チラー",
    detail:
      "クリーンエア（CDA）コンプレッサー、真空ポンプ、装置冷却用チラー（30〜200kW）の常時負荷。電子部品工場では総設備の15〜25%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・電子情報技術産業協会（JEITA）の統計によれば、電子部品業の電気料金は売上高の5〜12%（半導体系は最高水準）。製造原価に占める比率は8〜18%。クリーンルーム空調と24h検査稼働で電力依存度が高い業種。",
  },
  {
    label: "クリーンルーム面積1m²あたりの電力使用量",
    detail:
      "クラス10,000で1m²あたり年間500〜1,000 kWh、クラス1,000で1m²あたり年間1,500〜3,000 kWh、クラス100で1m²あたり年間4,000〜8,000 kWhが業界平均。クラス数が一桁下がるごとに電力消費が2〜3倍に。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模実装工場（年商3〜15億円）で年間100〜500万 kWh、中規模電子部品工場（年商50〜300億円）で年間1,500〜6,000万 kWh、大規模電子部品メーカー（年商500億円超）で年間6,000万〜3億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "クリーンルーム24h稼働のベースロード",
    detail:
      "クリーンルーム空調・HEPAフィルター・温湿度管理は24h停止不可。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月300万kWh）で月300万円の差、年間3,600万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間4,000万kWh使用の中規模工場で年1.672億円超の負担。",
  },
  {
    label: "検査・リフロー炉の市場連動リスク",
    detail:
      "24h検査ライン・リフロー炉の連続稼働で市場価格高騰局面に直撃される。JEPX高騰局面では月数百万円〜千万円規模の追加負担リスク。",
  },
  {
    label: "クリーンクラス高度化による電力増",
    detail:
      "顧客要求でクリーンクラスを上げる（10,000→1,000など）と電力消費が2〜3倍に。投資判断時に電力増の試算が必須。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模実装工場（年商3〜15億円、従業員10〜50名）",
    profile: "受託実装・小ロット製造／高圧 300〜800kW／年間 100〜500万 kWh",
    annualCost: "年間電気代 3,000万〜1.5億円",
    note: "LED化・クリーン空調最適化で年8〜12%削減事例。",
  },
  {
    size: "中規模電子部品工場（年商50〜300億円、従業員200〜500名）",
    profile: "コンデンサ・抵抗器・コネクタ等中堅メーカー／高圧 2,500〜6,000kW／年間 1,500〜6,000万 kWh",
    annualCost: "年間電気代 4.5〜18 億円",
    note: "クリーンルーム空調高効率化＋自家消費太陽光で年10〜16%削減事例。",
  },
  {
    size: "大規模電子部品メーカー（年商500億円超、従業員500名以上）",
    profile: "MLCC・半導体パッケージ等大手／特別高圧 8,000〜20,000kW／年間 6,000万〜3億 kWh",
    annualCost: "年間電気代 18〜90 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模実装工場の年間13%削減（Before/After）",
    before: "関東の電子部品実装工場A社（高圧 500kW、年間 300万 kWh、年間電気代 9,000万円）。市場連動プラン継続、クリーンルーム空調24h稼働、リフロー炉が10年経過。",
    after: "新電力切替（固定3年）／クリーンルーム空調最適化（温湿度設定見直し）／リフロー炉高効率型に更新（SII＋ものづくり補助1/2活用、投資1,200万円）／LED化／コンプレッサーインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 9,000万円 → 7,830万円（▲13%、▲1,170万円）／契約 kW 500→450／投資回収 補助金後 1.5年",
  },
  {
    title: "事例2：中規模電子部品工場の年間15%削減",
    before: "中部地方のコンデンサ工場B社（高圧 4,000kW、年間 4,000万 kWh、年間電気代 12億円）。市場連動プランで2022〜2023年に月最大4,000万円の追加負担。クリーンルーム空調24h稼働。",
    after: "固定5年プラン切替／クリーンルーム空調インバータ化＋HEPAフィルター高効率型／自家消費太陽光 1.5MW 導入（屋根10,000 m²）／BEMS＋温湿度最適化／需要家主導型PPA／真空ポンプインバータ化／検査装置スタンバイ電力削減。",
    result: "年間電気代 12億円 → 10.2億円（▲15%、▲1.8億円）／契約 kW 4,000→3,500／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模電子部品メーカーの年間2.5億円削減",
    before: "国内大手電子部品メーカーC社の主力工場（特別高圧 10,000kW、年間 1億 kWh、年間電気代 30億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 4 MW＋蓄電池 5 MWh／コージェネ 3MW＋排熱回収／クリーンルーム空調全面更新／需要家主導型PPA（オフサイト風力5MW）／DR契約締結／クリーンクラス最適化。",
    result: "年間電気代 30億円 → 27.5億円（▲8.3%、▲2.5億円）／契約 kW 10,000→9,000／投資回収 7年（補助金後 5年）／CO₂削減 約20,000 t/年",
  },
];

const demandManagement = [
  {
    label: "クリーンルーム空調の負荷追従制御",
    detail:
      "クリーンルーム空調をBEMS連動で温湿度・在室人数に応じてインバータ制御。1工場の最大負荷を10〜20%削減した事例。",
  },
  {
    label: "リフロー炉の起動分散・予熱最適化",
    detail:
      "複数のリフロー炉を運用する場合、起動タイミングを30分〜1時間ずらすことでデマンドピークを抑制。予熱時間最適化で5〜10%の削減。",
  },
  {
    label: "検査装置のスタンバイ電力削減",
    detail:
      "24h検査装置のスタンバイ電力（待機時の消費）を見直し、生産休止時の自動オフ設定で5〜10%の削減。",
  },
  {
    label: "コンプレッサー・真空ポンプのインバータ化",
    detail:
      "クリーンエアコンプレッサー・真空ポンプのインバータ化・台数制御で20〜35%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "クリーンルーム空調高効率化・LED・コンプレッサー・チラー・リフロー炉",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "電子部品業向けで採択率が高い主力補助金。クリーンルーム空調更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24hクリーンルーム稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新実装装置・リフロー炉・検査装置の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "電子部品業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "クリーンルーム空調全面更新・排熱回収・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
  {
    name: "経産省 半導体・電子部品サプライチェーン強化補助金",
    target: "半導体・電子部品製造設備の更新・新設",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "半導体・電子部品業特有の補助制度。経済安保観点で大型補助の対象。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "クリーンルーム空調の電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "実装ライン・リフロー炉・検査装置・クリーンルーム空調の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（500kW〜3MW）導入の試算を実施したか",
  "クリーンルーム空調のインバータ化・HEPA高効率化の投資回収試算を実施したか",
  "クリーンクラスの過剰設定（顧客要求超え）がないか確認したか",
  "デマンドコントローラー・リフロー炉起動分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・半導体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "電子部品業の電気代水準はどれくらいですか？", answer: "売上高比5〜12%（半導体系は最高水準）、製造原価比8〜18%が業界平均。中規模電子部品工場（年商200億円級）で年4.5〜18億円、大規模電子部品メーカー（年商500億円超）で年18〜90億円規模の電気代になります。" },
  { question: "クリーンルーム空調の電気代を削減するには？", answer: "①空調インバータ化＋BEMS連動制御（電力▲10〜20%）、②HEPAフィルター高効率型への更新、③温湿度設定の見直し（顧客要求の最小化）、④クリーンクラス最適化、⑤夜間・休止時の運転モード切替、の5本柱が中心。投資回収はSII補助で2〜4年が目安です。" },
  { question: "リフロー炉の電気代対策は？", answer: "①高効率リフロー炉への更新（電力▲20〜30%）、②起動タイミング分散、③予熱時間最適化、④保温性能改善、⑤BEMSによる稼働見える化、の5本柱が効果的。中規模工場で年300〜800万円の削減が目安。" },
  { question: "24h検査ラインの電気代対策は？", answer: "①検査装置スタンバイ電力削減、②生産休止時の自動オフ設定、③検査装置の最新省エネ型への更新、④検査ラインの集約・最適化、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年200〜500万円の削減が目安。" },
  { question: "電子部品業の固定プランと市場連動プランどちらが向きますか？", answer: "クリーンルーム空調・24h検査ラインの連続稼働でベースロードが大きく、品質保証のため停止できないため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "クリーンルーム空調のインバータ化は投資回収できますか？", answer: "従来のオンオフ制御からインバータ制御＋BEMS連動への更新で、空調電力▲10〜20%。中規模工場（年間4,000万kWh）で年間2,000〜3,500万円の削減、投資回収はSII＋GX補助の組合せで3〜5年が目安です。" },
  { question: "電子部品業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、半導体・電子部品サプライチェーン強化補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は電子部品工場で投資回収できますか？", answer: "屋根面積3,000m²以上、24hクリーンルーム稼働の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 電子情報技術産業協会（JEITA）", url: "https://www.jeita.or.jp/" },
  { name: "経済産業省 商務情報政策局", url: "https://www.meti.go.jp/policy/it_policy/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ElectronicComponentsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/electronic-components-electricity-cost-review"
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
          <span className="text-slate-800">電子部品業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電子部品業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電子部品業は、実装ライン・リフロー炉、クリーンルーム空調（HEPA・温湿度管理）、24h検査ライン、ウェハー処理装置など多面的な電力負荷を持ち、クリーンルーム空調が最大消費要素となる業種です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>電子部品業の電力使用プロファイル（実装／クリーンルーム／検査／ウェハー処理）</li>
              <li>業界平均の電気代水準（売上高比5〜12%）とクリーンルーム単位あたり単価</li>
              <li>クリーンルーム空調インバータ化・BEMS連動の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>24h検査ライン・リフロー炉の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・半導体補助の組合せ活用</li>
              <li>電子部品業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電子部品業の電力使用特性 — 実装・クリーンルーム・検査・ウェハー処理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業の電力使用は『実装ライン／クリーンルーム空調／検査ライン／ウェハー処理／コンプレッサー真空ポンプ』の5層で構成されます。クリーンルーム空調24h稼働が最大消費要素で業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比5〜12%、クリーンルーム単位500〜8,000 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業の電気代水準はクリーンクラス（10,000／1,000／100）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: JEITA・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電子部品業の主要な電気代上昇要因 — クリーンルーム・検査・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業の電気代上昇は、クリーンルーム24h稼働ベースロードに加え、検査ラインの市場連動リスク、クリーンクラス高度化、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模実装／中規模電子部品／大規模電子部品メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体業の電気料金見直し</Link>
              、{" "}
              <Link href="/precision-optical-instruments-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">精密・光学機器業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              クリーンルーム空調・リフロー炉のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業はクリーンルーム空調インバータ制御、リフロー炉起動分散、検査装置スタンバイ削減など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24hクリーンルーム稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業はクリーンルーム空調・検査ラインの24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>クリーンルーム空調の24h稼働が必須</li>
                  <li>温湿度逸脱が即座に品質問題</li>
                  <li>顧客契約価格への即時転嫁が困難</li>
                  <li>大電力消費で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>検査ライン24h稼働が高単価時間帯に直撃</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円の追加負担</li>
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
              再エネ賦課金の影響 — 24hクリーンルーム稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。電子部品業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模電子部品工場（年4,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1.396億円</li>
                  <li>2025年度（3.98円/kWh）：年 1.592億円（+1,960万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 1.8億円（+4,040万円）</li>
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
              電子部品業特有の節電・省エネ施策 — クリーン空調・リフロー・検査
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業の省エネは『クリーンルーム空調インバータ化』『HEPA高効率化』『リフロー炉高効率化』『コンプレッサー真空ポンプインバータ化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">クリーンルーム空調インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>オンオフ→インバータでBEMS連動制御</li>
                  <li>空調電力▲10〜20%</li>
                  <li>SII＋GX補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">HEPA高効率化・クリーンクラス最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率HEPAで通気抵抗▲30%</li>
                  <li>顧客要求超のクラス見直しで電力▲20〜40%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">リフロー炉高効率化・起動分散</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率リフロー炉で電力▲20〜30%</li>
                  <li>起動分散でデマンドピーク抑制</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（500kW〜3MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24hクリーンルーム稼働で自家消費率80%超</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・GX補助・半導体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業向けに活用しやすい補助金は5本柱。クリーンルーム空調更新はSII＋GX補助＋半導体補助の組合せで補助率を最大化できます。
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
              電子部品業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社電子部品工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子部品業はクリーンルーム空調24h稼働・検査ライン連続稼働・温湿度逸脱リスクの3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>クリーンルーム空調のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した13〜15%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="electronic-components-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体業の電気料金見直し", description: "半導体製造の電力対策。" },
              { href: "/semiconductor-facility-electricity-cost-review", title: "半導体ファシリティの電気料金見直し", description: "ファシリティ運用の電力対策。" },
              { href: "/electronics-electricity-cost-review", title: "電機・電子業の電気料金見直し", description: "電機業一般の見直しポイント。" },
              { href: "/precision-optical-instruments-electricity-cost-review", title: "精密・光学機器業の電気料金見直し", description: "精密測定環境の電力対策。" },
              { href: "/precision-instruments-electricity-cost-review", title: "精密機器業の電気料金見直し", description: "精密機器製造の電力対策。" },
              { href: "/medical-device-manufacturing-electricity-cost-review", title: "医療機器製造業の電気料金見直し", description: "医療機器の電力対策。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "24h冷却空調が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "電子部品法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "クリーンルーム空調更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "クリーンルーム24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の電子部品工場条件でリスクを確認する"
            description="クリーンルーム空調・リフロー炉・検査ライン・ウェハー処理装置の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。空調インバータ化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="電子部品業の電力契約見直し、専門家に相談しませんか？"
            description="クリーンルーム空調・実装ライン・リフロー炉・検査装置の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で電子部品業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
