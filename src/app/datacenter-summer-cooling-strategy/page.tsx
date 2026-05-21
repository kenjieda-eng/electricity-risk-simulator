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
  "データセンターの夏季冷却戦略｜PUE改善・外気冷房・液浸冷却・AIワークロード対応";
const pageDescription =
  "データセンター（ハイパースケール・コロケーション・自社DC）の夏季冷却戦略を解説。PUE（電力使用効率）改善、外気冷房・水冷・液浸冷却、AIワークロード増加対応、グリーン認証連動、規模別事例、補助金活用まで整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "データセンター 夏 冷却 戦略",
    "DC PUE 改善 夏",
    "外気冷房 液浸冷却",
    "AI データセンター 電力",
    "DC 夏季 ピーク",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/datacenter-summer-cooling-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/datacenter-summer-cooling-strategy",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/seasonal-strategy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/seasonal-strategy"],
  },
};

const peakStructure = [
  {
    label: "データセンターのPUE（電力使用効率）",
    detail:
      "PUE = 総電力 / IT機器電力。1.0が理想値（IT機器以外の電力ゼロ）。日本DCの平均PUEは1.6〜1.8、最新ハイパースケールDCで1.15〜1.30、レガシーDCで1.9〜2.2。夏季は外気温上昇で平均より0.05〜0.15悪化する傾向。",
  },
  {
    label: "夏季の冷却電力急増",
    detail:
      "DC総電力のうち冷却電力は通年25〜45%だが、夏季はピーク35〜55%に上昇。外気温30℃超では冷凍機フル稼働、35℃超では効率劣化。北海道・東北の冷涼立地DCでも夏季の最大ピーク日は注意が必要。",
  },
  {
    label: "AIワークロード増加の夏季影響",
    detail:
      "生成AI・機械学習の需要急増でGPUサーバー導入が拡大。GPUサーバーは従来サーバーの3〜10倍の電力密度（ラック当たり10〜40kW）。夏季の冷却負荷急増と組合さり、冷却インフラの限界突破リスク。",
  },
  {
    label: "夏季冷却方式の選択肢",
    detail:
      "空冷（CRAC/CRAH）、外気冷房（フリークーリング）、水冷（液体冷却）、液浸冷却（オイル浸漬）の4方式。夏季は外気冷房の効率低下、水冷・液浸冷却の優位性が高まる。",
  },
  {
    label: "顧客クラウド事業者の夏季対応要求",
    detail:
      "AWS、Google、Microsoft等の大手顧客はSLA（Service Level Agreement）で稼働率99.99%以上を要求。夏季のピーク時に冷却インフラがダウンすれば違約金が発生。冷却バックアップ設計が経営課題。",
  },
];

const industryBenchmark = [
  {
    label: "データセンターの夏季電気代水準",
    detail:
      "DC全体で対通年+10〜20%。冷却電力比率が上がる夏季はPUEが平均+0.05〜0.15悪化。年間電気代に占める夏季3ヶ月（7〜9月）の比率は26〜30%（オフィスより低いが絶対額大）。",
  },
  {
    label: "DC規模別の年間使用量",
    detail:
      "小規模DC（IT電力500kW〜2MW）で年間500〜2,000万kWh、中規模DC（IT電力2〜10MW）で年間2,000万〜1億kWh、大規模DC（IT電力10〜50MW）で年間1〜5億kWh、ハイパースケールDC（IT電力50MW超）で年間5億kWh超。",
  },
  {
    label: "夏季ピーク時の冷却負荷",
    detail:
      "中規模DC（IT電力5MW）で通常冷却負荷2〜2.5MW、夏季ピーク日3〜3.5MW（+40〜50%）。年間最大kWは8月14〜16時で記録、契約電力に直結。",
  },
];

const costFactors = [
  {
    label: "AIワークロード急増による夏季冷却負荷増",
    detail:
      "生成AIの需要急増でGPUサーバー導入が世界的に拡大。NVIDIA H100/H200級GPUは1台で約700W〜1,000W、8 GPU構成で5〜8kW。夏季の冷却負荷増加と組合さり、冷却インフラ限界突破リスクが拡大。",
  },
  {
    label: "夏季気温上昇トレンドと外気冷房効率の変化",
    detail:
      "外気冷房は外気温が低いほど効率高。日本の夏季気温上昇トレンドで、外気冷房可能時間が減少傾向（東京で年間1,500時間→1,200時間）。北海道・東北のDC立地メリットが拡大。",
  },
  {
    label: "JEPX高騰・燃調・賦課金の累積",
    detail:
      "夏季のJEPX高騰（8月平均15〜35円/kWh）、燃調の遅延反映、再エネ賦課金・容量拠出金の累積で、DC夏季電気代が通常月の1.5〜2倍に上振れるケースも。",
  },
  {
    label: "顧客SLAと冷却バックアップ要求",
    detail:
      "AWS、Google、Microsoft等のSLA 99.99%以上要求で、夏季ピーク時の冷却バックアップ（冗長化N+1、N+2、2N）が必須。冗長設備の電力消費も計算に入れる必要。",
  },
  {
    label: "電力会社との長期契約の重要性",
    detail:
      "DC事業は10〜20年の長期計画。電力会社との15〜20年級長期固定契約、オフサイトPPA、自家消費太陽光の組合せで電力供給安定性を確保。市場連動は事業継続リスク大。",
  },
];

const coolingMethods = [
  {
    title: "方式1：空冷＋CRAC/CRAH（夏季は冷凍機フル稼働）",
    investment: "中規模DC（IT電力5MW）で投資3〜5億円。精密空調機（CRAC/CRAH）＋冷凍機＋冷却塔の組合せ。",
    return: "PUE 1.7〜2.0（夏季は+0.1悪化）、ラック電力密度〜10kW対応。",
    payback: "初期投資安価だが、夏季PUE改善余地小。AIワークロード対応は困難。",
  },
  {
    title: "方式2：外気冷房（フリークーリング、夏季制約あり）",
    investment: "中規模DC追加投資1〜2億円。外気導入ダクト＋熱交換器＋制御装置。",
    return: "PUE 1.3〜1.5、年間電力▲15〜25%（夏季は効果半減）。",
    payback: "投資回収3〜5年（補助金後 2〜3年）。北海道・東北で年間効果最大。",
  },
  {
    title: "方式3：水冷（夏季も安定）",
    investment: "中規模DC追加投資5〜10億円。水冷ラック＋冷水循環システム＋冷凍機。",
    return: "PUE 1.2〜1.4（夏季も安定）、ラック電力密度〜30kW対応。",
    payback: "投資回収5〜7年。AIワークロード対応の標準解、夏季効率安定。",
  },
  {
    title: "方式4：液浸冷却（夏季最強）",
    investment: "中規模DC追加投資10〜20億円。液浸タンク＋専用オイル＋熱交換システム。",
    return: "PUE 1.10〜1.20（夏季も安定）、ラック電力密度50kW超対応。",
    payback: "投資回収7〜10年。最新ハイパースケールDCで標準化、夏季最強。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模DC（IT電力500kW〜2MW、年間電気代1.5億〜6億円）",
    profile: "中小ホスティング・自社DC・地域DC",
    annualCost: "投資 3,000万〜2億円で年1,500万〜1億円削減",
    note: "PUE 1.8→1.5を目標。外気冷房＋空調最適化＋LED＋固定プラン切替で対応。投資回収3〜5年。",
  },
  {
    size: "中規模DC（IT電力2〜10MW、年間電気代6億〜30億円）",
    profile: "中堅クラウド・コロケーション・大手企業自社DC",
    annualCost: "投資 2〜10億円で年1〜5億円削減",
    note: "PUE 1.6→1.3を目標。外気冷房フル＋水冷導入＋自家消費太陽光＋オフサイトPPAで対応。",
  },
  {
    size: "大規模DC・ハイパースケール（IT電力10MW超、年間電気代30億円超）",
    profile: "ハイパースケール事業者・大手クラウド・AI特化DC",
    annualCost: "投資 10〜100億円で年5〜50億円削減",
    note: "PUE 1.3→1.15以下を目標。液浸冷却＋水冷フル＋大規模PPA（50〜200MW）＋自家消費太陽光が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中規模コロケーションDC（夏季電気代▲20%）",
    before: "関東・中規模コロケーションDC（IT電力5MW、PUE 1.8、年間電気代20億円、夏季電気代6億円）。市場連動プラン継続、外気冷房未導入、空調最適化なし。",
    after: "①外気冷房導入（投資 5億円、補助1/2活用）／②高効率冷凍機更新（投資 8億円）／③空調最適化＋ホット/コールドアイル分離（投資 1億円）／④固定5年プラン切替／⑤温度設定緩和（22→25℃）。",
    result: "夏季電気代 6億円 → 4.8億円（▲20%、▲1.2億円）／年間 PUE 1.8→1.4／契約 kW 9,000→7,200／投資合計14億円、補助金1/2活用で実質7億円／総合投資回収 1.5年（補助金後）／CO₂削減 約12,000 t/年。",
  },
  {
    title: "事例2：大規模AI特化DC（夏季電気代▲30%）",
    before: "東北・大規模AI特化DC（IT電力20MW、PUE 1.6、年間電気代80億円、夏季電気代24億円）。市場連動プランで2022〜2023年夏季月最大10億円の追加負担。GPUサーバー増設で電力使用量増加。",
    after: "①液浸冷却導入（投資 25億円、補助1/2活用）／②水冷ラック拡張（投資 15億円）／③固定10年プラン切替＋DR参加／④自家消費太陽光10MW＋蓄電池5MWh／⑤オフサイトPPA30MW（再エネ100%対応）。",
    result: "夏季電気代 24億円 → 16.8億円（▲30%、▲7.2億円）／年間 PUE 1.6→1.2／DR収入年3,000万円／契約 kW 32,000→25,000／投資合計65億円、補助金1/2活用で実質33億円／総合投資回収 2年（補助金後）／CO₂削減 約60,000 t/年。",
  },
  {
    title: "事例3：ハイパースケールDC（夏季電気代▲13%）",
    before: "北海道・ハイパースケールDC（IT電力50MW、PUE 1.3、年間電気代200億円、夏季電気代55億円）。最新世代だが、夏季PUE 1.15目標達成のため更なる最適化が経営課題。",
    after: "①液浸冷却拡張（投資 50億円、補助1/2活用）／②AI予測制御による空調最適化／③長期固定20年契約／④オフサイトPPA100MW（再エネ100%対応）／⑤外気冷房フル活用（北海道立地優位）。",
    result: "夏季電気代 55億円 → 47.85億円（▲13%、▲7.15億円）／年間 PUE 1.3→1.15／契約 kW 65,000→57,000／投資合計55億円、補助金1/2活用で実質28億円／総合投資回収 4年（補助金後）／CO₂削減 約75,000 t/年。",
  },
];

const demandManagement = [
  {
    label: "外気冷房（フリークーリング）の夏季活用",
    detail:
      "外気温が冷水温度（10〜18℃）より低い時間帯に冷凍機をバイパスし外気で直接冷却。夏季は早朝・夜間の活用で冷却電力▲15〜25%削減。北海道・東北では夏季でも年間1,500〜2,500時間活用可能。",
  },
  {
    label: "ホット/コールドアイル分離",
    detail:
      "サーバーラックの吸気側（コールドアイル）と排気側（ホットアイル）を物理分離し、冷気と暖気の混合を防ぐ。冷却効率15〜25%向上、PUE 0.1〜0.2改善事例。夏季の冷凍機負荷軽減に直結。",
  },
  {
    label: "温度設定緩和（22→25〜27℃）",
    detail:
      "ASHRAEの推奨上限27℃まで温度設定を緩和し、冷却負荷を削減。サーバー機器の信頼性も検証済み（メーカー保証範囲）。夏季冷却電力▲10〜15%削減。",
  },
  {
    label: "AI予測制御による夏季最適化",
    detail:
      "Google DeepMindのDCMS（DC Management System）のような、AI予測制御で空調・冷凍機運転を最適化。Google DCで冷却電力▲40%削減実績。夏季気温予測と連動して事前準備。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率冷凍機・外気冷房・空調最適化・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "DCのPUE改善で活用しやすい主力補助金。複数施策の組合せで採択率向上。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "DC敷地が広い場合、再エネ100%対応の主力施策。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "液浸冷却・水冷・大規模再エネ・自家発電",
    rate: "1/2、上限数十億円",
    note: "ハイパースケールDC向け大型補助。CN対応との連動。",
  },
  {
    name: "デジタルインフラ整備補助",
    target: "DC新設・更新・地方分散立地",
    rate: "制度別、自治体補助との併用可",
    note: "経産省・自治体のDC立地誘致施策。北海道・東北・九州での新設DCで活用可能。",
  },
];

const checklistItems = [
  "現在のPUE値（通年・夏季ピーク）を把握したか",
  "夏季ピーク日の冷却負荷kWを把握したか",
  "ラック電力密度（kW/ラック）の現状と将来計画を策定したか",
  "外気冷房（フリークーリング）の夏季活用時間を試算したか",
  "ホット/コールドアイル分離の実施状況を確認したか",
  "温度設定（22→25〜27℃）緩和の検討を行ったか",
  "AIワークロード増加に伴う水冷・液浸冷却の必要性を評価したか",
  "DC敷地を活用した自家消費太陽光（5〜30MW）導入の試算を実施したか",
  "オフサイトPPA（10〜100MW）の検討と長期契約を進めたか",
  "顧客（クラウド事業者・大手企業）のCN要求への対応計画を立てたか",
];

const faqItems = [
  { question: "データセンターの夏季電気代は通年比でどれくらい上がりますか？", answer: "DC全体で対通年+10〜20%、冷却電力比率が上がる夏季はPUEが平均+0.05〜0.15悪化します。年間電気代に占める夏季3ヶ月（7〜9月）の比率は26〜30%（オフィスより低いが絶対額大）。" },
  { question: "夏季の外気冷房（フリークーリング）の効果はどれくらいですか？", answer: "夏季は早朝・夜間の活用で冷却電力▲15〜25%削減、北海道・東北では夏季でも年間1,500〜2,500時間活用可能。立地によっては夏季も主力冷却方式として機能します。投資回収3〜5年（補助金後 2〜3年）。" },
  { question: "AIワークロード増加で夏季の冷却はどう変わりますか？", answer: "GPUサーバーは従来サーバーの3〜10倍の電力密度。ラック電力密度が10kW→30kW→50kWと急上昇トレンド。夏季の冷却負荷増加と組合さり、冷却インフラの限界突破リスクが拡大。水冷・液浸冷却が必須に。" },
  { question: "液浸冷却の夏季経済性は？", answer: "中規模DC追加投資10〜20億円、夏季もPUE 1.10〜1.20で安定し電力▲30〜50%削減。最先端AIワークロード・スパコン向け。投資回収7〜10年で、最新ハイパースケールDCで標準化が進む。" },
  { question: "DCに向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続稼働・電力品質要求極大のDCは固定プラン（15〜20年長期）推奨。市場高騰時の影響額が桁違いに大きく、瞬停による生産損失リスクの観点でも市場連動は不可です。" },
  { question: "DC敷地に自家消費太陽光は導入できますか？", answer: "敷地が広いハイパースケールDCで5〜30MW級が主流。10MWで年1,100〜1,300万kWh発電、年11〜13億円規模の電気代削減。投資回収6〜8年（補助金後4〜6年）。夏季の電力ピーク時間帯と日射ピーク時間帯が一致するため自家消費率が高い。" },
  { question: "顧客SLA 99.99%要求と夏季冷却バックアップの関係は？", answer: "夏季ピーク時の冷却バックアップ（冗長化N+1、N+2、2N）が必須。冗長設備の電力消費（PUE 0.05〜0.15）も計算に入れる必要。設計段階で冷却バックアップとPUE目標のバランスを検討。" },
  { question: "DC冷却最適化向けの補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（高効率冷凍機・外気冷房・BEMS）、需要家主導型PPA補助金（太陽光・蓄電池）、脱炭素先行地域・GX補助（液浸冷却・水冷・大規模再エネ）、デジタルインフラ整備補助の4本柱です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本データセンター協会（JDCC）", url: "https://www.jdcc.or.jp/" },
  { name: "Green Grid（PUE指針）", url: "https://www.thegreengrid.org/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function DatacenterSummerCoolingStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/datacenter-summer-cooling-strategy"
        datePublished="2026-05-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "季節別の電気代対策", url: "https://simulator.eic-jp.org/articles/seasonal-strategy" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/seasonal-strategy" className="underline-offset-2 hover:underline">季節別の電気代対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">データセンターの夏季冷却戦略</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            データセンターの夏季冷却戦略
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            データセンター（ハイパースケール・コロケーション・自社DC）の夏季冷却戦略は、PUE（電力使用効率）改善を中心に、外気冷房・水冷・液浸冷却の4方式を選択する経営判断です。生成AI・機械学習の需要急増でGPUサーバー導入が拡大、ラック電力密度が10kW→30kW→50kWと急上昇する中、夏季の冷却負荷増加と冷却インフラの限界突破リスクが経営課題に。本ページではPUE改善の実務、夏季の冷却方式比較、AIワークロード対応、グリーン認証連動、規模別事例、補助金活用までを実務に直結する観点で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>DCの夏季電力構造とPUE悪化トレンド</li>
              <li>4つの冷却方式（空冷／外気冷房／水冷／液浸冷却）の夏季比較</li>
              <li>AIワークロード増加によるラック電力密度上昇</li>
              <li>外気冷房・ホットアイル分離・温度設定緩和の夏季効果</li>
              <li>規模別事例3件（中規模コロケーション／大規模AI／ハイパースケール）</li>
              <li>顧客SLA要求と冷却バックアップ設計</li>
              <li>DC向け補助金と冷却最適化チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DCの夏季電力構造 — PUE・冷却・AI・SLA・グリーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの夏季電力構造は『PUE（夏季悪化）／冷却電力急増／AIワークロード増加／冷却方式選択／顧客SLA要求』の5論点で構造化されます。PUE改善が経営戦略の中核です。
            </p>
            <div className="mt-4 space-y-3">
              {peakStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の全体像は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                夏季ピーク電気代の基礎とCFO視点
              </Link>
              、5戦略の全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                業種横断ピークカット5戦略
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均のDC夏季電気代水準・PUE
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの夏季電気代水準はPUE・規模・冷却方式で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本データセンター協会・Green Grid・経産省統計から整理。実値はDC規模・PUE・立地で2〜3倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要なDC夏季電気代上昇要因 — AI・気温・SLA・長期契約
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの夏季電気代上昇は、AIワークロード急増、夏季気温上昇トレンド、JEPX・燃調・賦課金の累積、顧客SLAと冷却バックアップ要求、長期契約の重要性という構造的要因が並列します。
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
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季冷却方式4種の比較 — 空冷・外気冷房・水冷・液浸冷却
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの冷却方式は4種類あり、夏季のラック電力密度・PUE目標・投資規模で選択します。低密度ラックは空冷＋外気冷房、高密度（AI/HPC）ラックは水冷・液浸冷却が必須です。
            </p>
            <div className="mt-4 space-y-4">
              {coolingMethods.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">投資：</span>{cs.investment}</p>
                    <p><span className="font-semibold text-slate-700">効果：</span>{cs.return}</p>
                    <p><span className="font-semibold text-emerald-700">回収期間：</span>{cs.payback}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種の事例は{" "}
              <Link href="/datacenter-cooling-optimization" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PUE改善のデータセンター冷却最適化</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              、{" "}
              <Link href="/it-services-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ITサービス業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の投資パターン — 小規模／中規模／ハイパースケール
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの夏季冷却最適化投資は規模で大きく異なります。小規模では外気冷房＋空調最適化、中規模では水冷導入＋自家消費太陽光、ハイパースケールでは液浸冷却＋大規模PPAが標準です。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.profile}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{item.annualCost}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 中規模コロケーション／大規模AI／ハイパースケール
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。各事例で規模・PUE改善目標に応じた最適戦略を確認できます。
            </p>
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DCのデマンド管理 — 外気冷房・アイル分離・温度緩和・AI制御
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの夏季デマンド管理は『外気冷房の夏季活用』『ホット/コールドアイル分離』『温度設定緩和（22→25〜27℃）』『AI予測制御』の4論点を組合せて最適化します。
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
              デマンド管理の削減効果試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              AIワークロード対応 — GPUサーバーと夏季冷却技術の進化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              生成AI・機械学習の需要急増でGPUサーバー導入が世界的に拡大、ラック電力密度が急上昇しています。AIワークロード対応のDC設計は、夏季の冷却負荷増加と組合さり、空冷では限界、水冷・液浸冷却の導入が必須です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ラック電力密度の上昇</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>従来サーバー：5〜10kW/ラック</li>
                  <li>AI軽量：15〜25kW/ラック</li>
                  <li>AI標準：30〜40kW/ラック</li>
                  <li>AIフラッグシップ：50〜100kW/ラック</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">対応冷却方式（夏季）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>10kW以下：空冷＋外気冷房</li>
                  <li>10〜25kW：空冷強化＋アイル分離</li>
                  <li>25〜50kW：水冷（リアドア・直接水冷）</li>
                  <li>50kW超：液浸冷却</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種は{" "}
              <Link href="/datacenter-ai-demand" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター・AI電力需要</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              SLA要求と夏季冷却バックアップ設計
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              顧客（AWS・Google・Microsoft等）のSLA 99.99%以上要求で、夏季ピーク時の冷却バックアップ（冗長化N+1、N+2、2N）が必須。冗長設備の電力消費（PUE 0.05〜0.15）も計算に入れる必要があります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">冗長化レベル</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>N: 必要最小限（バックアップなし）</li>
                  <li>N+1: 1台冗長（一般的なコロケーション）</li>
                  <li>N+2: 2台冗長（高信頼性DC）</li>
                  <li>2N: 完全二重化（ティア4 DC）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">夏季冷却バックアップ設計</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>冷凍機N+1（最低限）</li>
                  <li>外気冷房バイパスの自動切替</li>
                  <li>蓄熱式冷房（ピーク時補完）</li>
                  <li>非常用発電機のテスト運転夏季実施</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（DC夏季冷却） — SII・PPA・GX・デジタルインフラ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DC冷却最適化に活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜5年短縮できます。
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
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              DC夏季冷却最適化チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DC夏季冷却最適化の検討前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、PUE改善効果が制限されます。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターでDCの夏季冷却最適化効果を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DCの夏季電気代はPUE・規模・冷却方式・AIワークロード比率で大きく異なります。シミュレーターで自社条件における夏季上振れ幅と、外気冷房・水冷・液浸冷却の総合導入効果を試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスクを確認する</li>
              <li>PUE改善目標別の電力削減シナリオを試算する</li>
              <li>長期固定契約と市場連動プランの年間コスト差を把握する</li>
              <li>AIワークロード増加後の冷却負荷シナリオを比較する</li>
              <li>事例で示した▲13〜30%の夏季削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-21"
            />
            <GlossaryLinks currentSlug="datacenter-summer-cooling-strategy" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別冷却戦略のハブ。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と主要プログラム比較。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/manufacturing-cooling-strategy", title: "製造業の冷房戦略", description: "工場・倉庫の温度管理と高効率設備投資判断。" },
              { href: "/office-building-peak-cut", title: "オフィスビルのピークカット", description: "ZEB化・BEMS・テナント連動でピーク削減。" },
              { href: "/datacenter-cooling-optimization", title: "PUE改善・データセンター冷却最適化", description: "通年でのPUE改善実務（空冷vs液冷比較）。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "DC業種別電力プロファイル詳細。" },
              { href: "/it-services-electricity-cost-review", title: "ITサービス業の電気料金見直し", description: "自社DC運用業種の関連事例。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体業の電気料金見直し", description: "クリーンルーム空調最適化の類似事例。" },
              { href: "/datacenter-ai-demand", title: "データセンター・AI電力需要", description: "AIワークロード増加トレンドの全体像。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "DCの長期固定契約選択。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "DC敷地太陽光の投資回収。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "DC高効率冷凍機・外気冷房・BEMS。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "DC等の固定プラン選択根拠。" },
            ]}
          />

          <ContentCta
            heading="自社DCの夏季冷却最適化効果を確認する"
            description="DC規模・PUE・冷却方式・AIワークロード比率をもとに、夏季電気代の上振れ幅と外気冷房・水冷・液浸冷却の総合導入効果をシミュレーターで試算できます。長期PPA契約の計画立案にもご活用ください。"
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
            heading="電力コストの見直し、専門家に相談しませんか？"
            description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
