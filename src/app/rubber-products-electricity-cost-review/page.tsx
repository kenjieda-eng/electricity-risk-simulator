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
  "ゴム製品業の電気料金見直しポイント｜加硫・混練機・押出成形の契約最適化";
const pageDescription =
  "ゴム製品業の電気料金見直しを解説。加硫工程（スチーム＋電力）、バンバリーミキサ、押出成形、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ゴム製品 電気料金 見直し",
    "加硫 電気代",
    "バンバリーミキサ 電力",
    "押出成形 ゴム 電気代",
    "ゴム 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/rubber-products-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/rubber-products-electricity-cost-review",
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
    label: "加硫プレス・加硫缶（スチーム＋電気加熱）",
    detail:
      "ゴム製品の中核工程。加硫プレス（150〜200℃のスチーム加熱＋電気加熱補助）でゴム素材を架橋反応。1基あたり50〜500kWの電力負荷で、加硫サイクル中の連続稼働。タイヤ・工業用ゴム工場で電力使用量の25〜40%を占める。",
  },
  {
    label: "バンバリーミキサ（混練機）",
    detail:
      "ゴム素材と添加剤を混練する大型機械。1基あたり300〜2,000kWの大電力を消費し、バッチ式運転で起動時の瞬間負荷が突出する。工場全体の電力使用量の15〜30%を占める。",
  },
  {
    label: "押出機・カレンダー（成形）",
    detail:
      "ゴムシート・ホース・パッキン等の押出成形機、カレンダー（ローラー圧延機）。1基あたり100〜500kWの常時負荷。連続稼働が主流で、生産ライン全体で工場の15〜25%を占める。",
  },
  {
    label: "射出成形機（ゴム射出）",
    detail:
      "ゴム部品（パッキン・シール等）の射出成形機。1台あたり50〜300kWの動力負荷。電動式射出成形機は油圧式比で電力▲30〜50%効率化。",
  },
  {
    label: "冷却・コンプレッサー・空調",
    detail:
      "加硫後の急冷チラー（30〜200kW）、コンプレッサー（30〜200kW）、空調・換気の常時負荷。冷却塔の循環ポンプを含む。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本ゴム工業会の統計によれば、ゴム製品業の電気料金は売上高の5〜12%（タイヤ・大型工業用ゴムは最高水準）。製造原価に占める比率は8〜18%。加硫・混練工程の電力依存度が高い業種。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "タイヤで1トンあたり1,500〜2,500 kWh、工業用ゴム（押出）で1トンあたり800〜1,500 kWh、ゴム射出成形品で1トンあたり1,200〜2,000 kWhが業界平均。タイヤ製造が最も電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模ゴム工場（年商3〜15億円）で年間100〜500万 kWh、中規模ゴム工場（年商50〜300億円）で年間1,500〜6,000万 kWh、大規模タイヤメーカー（年商500億円超）で年間6,000万〜3億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "加硫工程のスチーム＋電力ベースロード",
    detail:
      "加硫工程は24h連続稼働、スチーム＋電気加熱で月間使用量が大きい。燃料費調整額1円/kWhの変動でも中規模工場（月300万kWh）で月300万円の差、年間3,600万円規模のインパクト。",
  },
  {
    label: "バンバリーミキサ起動の瞬間負荷",
    detail:
      "バンバリーミキサは起動時の瞬間負荷が突出し、複数台同時起動で契約電力が実需の1.5倍に膨らむことがある。デマンド管理の効果が極めて大きい業種。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間4,000万kWh使用の中規模工場で年1.672億円の負担。",
  },
  {
    label: "加硫24h稼働の市場連動リスク",
    detail:
      "加硫工程は連続稼働必須で市場価格高騰局面に直撃される。JEPX高騰局面では月数百万円〜千万円規模の追加負担リスク。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模ゴム工場（年商3〜15億円、従業員10〜40名）",
    profile: "工業用ゴム・小ロットゴム部品／高圧 300〜700kW／年間 100〜500万 kWh",
    annualCost: "年間電気代 3,000万〜1.5億円",
    note: "電動射出成形機・LED化・コンプレッサー更新で年8〜12%削減事例。",
  },
  {
    size: "中規模ゴム工場（年商50〜300億円、従業員100〜500名）",
    profile: "自動車部品ゴム・産業用ゴム中堅メーカー／高圧 2,000〜5,000kW／年間 1,500〜6,000万 kWh",
    annualCost: "年間電気代 4.5〜18 億円",
    note: "加硫プレス高効率化＋自家消費太陽光で年10〜15%削減事例。",
  },
  {
    size: "大規模タイヤメーカー（年商500億円超、従業員500名以上）",
    profile: "ブリヂストン・住友ゴム等大手／特別高圧 6,000〜15,000kW／年間 6,000万〜3億 kWh",
    annualCost: "年間電気代 18〜90 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模ゴム工場の年間13%削減（Before/After）",
    before: "関西のゴム工場A社（高圧 400kW、年間 300万 kWh、年間電気代 9,000万円）。市場連動プラン継続、油圧式射出成形機10台、加硫プレス断熱性能低下。",
    after: "新電力切替（固定3年）／油圧式→電動式射出成形機更新（SII＋ものづくり補助1/2活用、投資1,500万円）／加硫プレス断熱改善／LED化／コンプレッサーインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 9,000万円 → 7,830万円（▲13%、▲1,170万円）／契約 kW 400→340／投資回収 補助金後 1.8年",
  },
  {
    title: "事例2：中規模ゴム工場の年間15%削減",
    before: "中部地方の自動車部品ゴム工場B社（高圧 3,500kW、年間 3,500万 kWh、年間電気代 10.5億円）。市場連動プランで2022〜2023年に月最大3,500万円の追加負担。バンバリーミキサ複数台同時起動でデマンドピーク発生。",
    after: "固定5年プラン切替／バンバリーミキサ起動分散制御／自家消費太陽光 1.5MW 導入（屋根10,000 m²）／BEMS／全射出成形機電動化／加硫プレス断熱／需要家主導型PPA／コンプレッサーインバータ化。",
    result: "年間電気代 10.5億円 → 8.93億円（▲15%、▲1.57億円）／契約 kW 3,500→3,000／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模タイヤメーカーの年間1.8億円削減",
    before: "国内大手タイヤメーカーC社の主力工場（特別高圧 10,000kW、年間 1億 kWh、年間電気代 30億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 4 MW＋蓄電池 6 MWh／コージェネ 3MW＋排熱回収／全加硫プレス更新／需要家主導型PPA（オフサイト風力5MW）／DR契約締結／タイヤ加硫サイクル最適化。",
    result: "年間電気代 30億円 → 28.2億円（▲6%、▲1.8億円）／契約 kW 10,000→9,000／投資回収 8年（補助金後 6年）／CO₂削減 約15,000 t/年",
  },
];

const demandManagement = [
  {
    label: "バンバリーミキサ起動分散制御",
    detail:
      "複数のバンバリーミキサを運用する場合、起動タイミングを15〜60分ずらすことでデマンドピークを抑制。1工場の同時最大負荷を20〜30%削減した事例。",
  },
  {
    label: "加硫プレス・加硫缶の運転スケジュール最適化",
    detail:
      "加硫サイクルを電力単価安価な深夜〜早朝に集中させる運用設計。3交代制工場で5〜10%のピーク削減が可能。",
  },
  {
    label: "射出成形機の負荷追従",
    detail:
      "電動式射出成形機の採用で電力▲30〜50%。油圧式残存設備のインバータ化＋待機電力削減で更に効果向上。",
  },
  {
    label: "コンプレッサー・冷却塔のインバータ化",
    detail:
      "コンプレッサー・冷却塔ファンのインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "電動射出成形機・高効率加硫プレス・LED・コンプレッサー・空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "ゴム業向けで採択率が高い主力補助金。電動成形機更新・加硫プレス更新で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h加硫稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新ゴム成形装置・加硫プレスの新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "ゴム業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "加硫スチーム→電気化、排熱回収",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱回収で大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小ゴム事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "バンバリーミキサ同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "加硫プレス・バンバリーミキサ・押出機・射出成形機の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜3MW）導入の試算を実施したか",
  "油圧式→電動式射出成形機への更新の投資回収試算を実施したか",
  "加硫プレス断熱・電気加熱化の余地を確認したか",
  "デマンドコントローラー・バンバリー起動分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ゴム製品業の電気代水準はどれくらいですか？", answer: "売上高比5〜12%（タイヤ・大型工業用ゴムは最高水準）、製造原価比8〜18%が業界平均。中規模ゴム工場（年商200億円級）で年4.5〜18億円、大規模タイヤメーカー（年商500億円超）で年18〜90億円規模の電気代になります。" },
  { question: "加硫プレスの電気代を削減するには？", answer: "①加硫プレスの断熱性能改善（電力▲10〜15%）、②電気加熱補助の効率化、③加硫サイクル時間最適化、④スチーム配管断熱、⑤排熱回収、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "バンバリーミキサのデマンド対策は？", answer: "①バンバリーミキサ起動タイミング分散（デマンドコントローラー連動）、②高効率モーターへの更新、③混練サイクル時間最適化、④BEMS・需要見える化、⑤バッチサイズ最適化、の5本柱が効果的。中規模工場で年500〜1,200万円の削減が目安。" },
  { question: "射出成形機の電気代対策は？", answer: "①油圧式→電動式射出成形機更新（電力▲30〜50%）、②サイクルタイム短縮、③金型温調機の高効率化、④待機電力削減、⑤BEMSによる需要見える化、の5本柱が効果的。投資回収はSII＋ものづくり補助で3〜5年が目安。" },
  { question: "ゴム製品業の固定プランと市場連動プランどちらが向きますか？", answer: "加硫プレス24h連続稼働、生産ライン連続稼働でベースロードが大きく、加硫サイクル途中停止が品質劣化につながるため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "油圧式→電動式射出成形機は投資回収できますか？", answer: "従来の油圧式射出成形機から電動式への更新で、電力▲30〜50%、サイクルタイム短縮で生産性向上も同時実現。中規模工場（射出成形機10台）で年間800〜1,500万円の削減、投資回収はSII＋ものづくり補助で3〜5年が目安です。" },
  { question: "ゴム製品業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はゴム工場で投資回収できますか？", answer: "屋根面積3,000m²以上、24h加硫稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本ゴム工業会", url: "https://www.jrma.gr.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function RubberProductsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/rubber-products-electricity-cost-review"
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
          <span className="text-slate-800">ゴム製品業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ゴム製品業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ゴム製品業（タイヤ・工業用ゴム・ゴム部品）は、加硫工程のスチーム＋電気加熱、バンバリーミキサの瞬間大電力、押出・カレンダー・射出成形ラインなど多面的な電力負荷を持ちます。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ゴム製品業の電力使用プロファイル（加硫／バンバリー／押出／射出）</li>
              <li>業界平均の電気代水準（売上高比5〜12%）と製品単位あたり単価</li>
              <li>電動射出成形機・加硫プレス断熱化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>バンバリーミキサのデマンド管理</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>ゴム製品業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ゴム製品業の電力使用特性 — 加硫・バンバリー・押出・射出
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム製品業の電力使用は『加硫プレス／バンバリーミキサ／押出機／射出成形機／コンプレッサー冷却』の5層で構成されます。加硫工程の連続稼働とバンバリー瞬間負荷が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比5〜12%、製品単位800〜2,500 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム製品業の電気代水準は製品種別（タイヤ／工業用ゴム／成形品）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本ゴム工業会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ゴム製品業の主要な電気代上昇要因 — 加硫・バンバリー・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム製品業の電気代上昇は、加硫工程24h稼働ベースロードに加え、バンバリーミキサ瞬間負荷、市場連動リスク、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模ゴム／中規模ゴム／大規模タイヤメーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム製品業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/plastic-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">プラスチック業の電気料金見直し</Link>
              、{" "}
              <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">化学業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              バンバリー・加硫プレスのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム業はバンバリーミキサ起動分散、加硫プレス運転スケジュール最適化、射出成形機負荷追従など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h加硫稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム業は加硫プレスの24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>加硫プレスの24h稼働が必須</li>
                  <li>加硫サイクル途中停止が品質劣化</li>
                  <li>ゴム製品価格への即時転嫁が困難</li>
                  <li>バンバリー瞬間負荷で高単価リスク</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に加硫電力負荷増</li>
                  <li>バンバリー起動が高単価時間帯に集中</li>
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
              再エネ賦課金の影響 — 24h加硫稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ゴム業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模ゴム工場（年3,500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1.222億円</li>
                  <li>2025年度（3.98円/kWh）：年 1.393億円（+1,715万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1.463億円（+2,410万円）</li>
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
              ゴム業特有の節電・省エネ施策 — 電動射出・加硫プレス断熱・バンバリー分散
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム業の省エネは『電動射出成形機』『加硫プレス断熱』『バンバリー起動分散』『コンプレッサーインバータ化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電動射出成形機</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>油圧式→電動式で電力▲30〜50%</li>
                  <li>サイクルタイム短縮で生産性向上</li>
                  <li>SII＋ものづくり補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">加硫プレス断熱改善</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>断熱材高性能化で電力▲10〜15%</li>
                  <li>スチーム配管断熱も同時実施</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">バンバリー起動分散・大容量化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>起動分散でデマンドピーク▲20〜30%</li>
                  <li>大容量化でバッチ数削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜3MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h加硫稼働で自家消費率80%超</li>
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
              ゴム業向けに活用しやすい補助金は5本柱。電動射出成形機更新はSII＋ものづくり補助の組合せで補助率を最大化できます。
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
              ゴム業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社ゴム工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ゴム製品業は加硫24h連続稼働・バンバリー瞬間負荷・電動射出転換投資の3重課題に同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>バンバリー起動のピーク影響額を試算する</li>
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
            <GlossaryLinks currentSlug="rubber-products-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/plastic-electricity-cost-review", title: "プラスチック業の電気料金見直し", description: "射出成形が共通。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "原料が共通。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "ゴム部品の取引先業種。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立工程の電力対策。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "ゴム法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "電動射出成形機・加硫プレス更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "加硫24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "デマンド管理の基礎。" },
              { href: "/power-factor-improvement", title: "力率改善の基本", description: "バンバリーミキサ用力率改善。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社のゴム工場条件でリスクを確認する"
            description="加硫プレス・バンバリーミキサ・押出機・射出成形機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。電動射出転換後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="ゴム製品業の電力契約見直し、専門家に相談しませんか？"
            description="加硫プレス・バンバリーミキサ・押出機・射出成形機の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でゴム製品業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
