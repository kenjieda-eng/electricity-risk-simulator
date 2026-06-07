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
  "ガラス製造業の電気料金見直しポイント｜溶融炉24h・徐冷炉・電気ブースターの契約最適化";
const pageDescription =
  "ガラス製造業の電気料金見直しを解説。溶融炉24h連続稼働（止められない）、徐冷炉、電気ブースター加熱、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ガラス製造 電気料金 見直し",
    "ガラス 溶融炉 電気代",
    "徐冷炉 電力",
    "電気ブースター 電気代",
    "ガラス 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/glass-manufacturing-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/glass-manufacturing-electricity-cost-review",
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
    label: "ガラス溶融炉（重油・ガス燃焼＋電気ブースター）",
    detail:
      "ガラス製造の中核設備。1,500〜1,600℃の連続24h溶融が必須で、停止すると炉が破損するため数ヶ月〜数年の連続稼働。重油・ガス燃焼が主で、電気ブースター（電極加熱）で電力負荷が加わる。1基あたり電気ブースター500kW〜3MW、工場全体の電力使用量の20〜35%を占める。",
  },
  {
    label: "徐冷炉（アニーリングレヤー）",
    detail:
      "ガラス成形後の徐冷工程。500〜600℃から常温まで30〜60分かけてゆっくり冷却。電気式徐冷炉で1基あたり50〜500kW、24h連続稼働。工場全体の10〜20%を占める。",
  },
  {
    label: "成形機（フロート・吹き・プレス）",
    detail:
      "板ガラス（フロート法）、瓶ガラス（吹き成形）、家電ガラス（プレス成形）の各成形機。動力・冷却・空調込みで1ラインあたり100〜1,000kW。工場全体の15〜25%を占める。",
  },
  {
    label: "全電気式溶融炉（特殊ガラス・光学ガラス）",
    detail:
      "特殊ガラス・光学ガラスは全電気式溶融炉を使用。1基あたり1〜10MWの大電力負荷で、24h連続稼働。工場全体の電力使用量の50〜70%を占める業種特有のコスト構造（全電気式採用工場の場合）。",
  },
  {
    label: "コンプレッサー・冷却塔・原料粉砕",
    detail:
      "工場用エアコンプレッサー（30〜200kW）、冷却塔（成形冷却用）、原料（珪砂・カレット）粉砕機（50〜300kW）の常時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・板硝子協会の統計によれば、ガラス製造業の電気料金は売上高の6〜15%（全電気式溶融炉採用工場は20%超）。製造原価に占める比率は10〜25%。溶融炉24h連続稼働で電力依存度が高い業種。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "板ガラス（フロート法）で1トンあたり400〜700 kWh、瓶ガラスで1トンあたり300〜500 kWh、光学ガラス（全電気式）で1トンあたり3,000〜6,000 kWh、特殊ガラスで1トンあたり1,500〜4,000 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模特殊ガラス工場（年商5〜30億円）で年間500〜2,500万 kWh、中規模ガラス工場（年商100〜500億円）で年間3,000〜8,000万 kWh、大規模ガラスメーカー（年商1,000億円超）で年間8,000万〜3億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "溶融炉24h連続稼働のベースロード",
    detail:
      "溶融炉は停止すると炉が破損するため24h連続稼働必須。月間使用量が極めて大きく、燃料費調整額1円/kWhの変動でも中規模工場（月500万kWh）で月500万円の差、年間6,000万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間6,000万kWh使用の中規模工場で年2.5億円超の負担。再エネ賦課金減免制度の対象（電気使用密度要件）に該当するケース多数。",
  },
  {
    label: "電気ブースター・全電気式の市場連動リスク",
    detail:
      "電気ブースター・全電気式溶融炉は連続稼働必須で停止不可。市場連動プランでは市場価格高騰局面に直撃される。JEPX高騰局面では月数千万円規模の追加負担リスク。",
  },
  {
    label: "重油・ガス価格との連動",
    detail:
      "溶融炉の主燃料である重油・LNG価格上昇時に電気ブースター比率を上げる運用調整が一般的。逆に電気代上昇時はガス比率に戻す。両エネルギー価格の同時上昇局面では削減策が限定される。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h連続稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模特殊ガラス工場（年商5〜30億円、従業員30〜100名）",
    profile: "特殊ガラス・光学ガラス／高圧 500〜1,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "電気ブースター比率最適化＋LED化＋断熱改善で年8〜12%削減事例。",
  },
  {
    size: "中規模ガラス工場（年商100〜500億円、従業員200〜600名）",
    profile: "板ガラス・瓶ガラス中堅メーカー／特別高圧 4,000〜8,000kW／年間 3,000〜8,000万 kWh",
    annualCost: "年間電気代 9〜24 億円",
    note: "溶融炉断熱＋電気ブースター高効率化＋自家消費太陽光で年8〜14%削減事例。",
  },
  {
    size: "大規模ガラスメーカー（年商1,000億円超、従業員500名以上）",
    profile: "AGC・日本電気硝子等大手／特別高圧 10,000〜30,000kW／年間 8,000万〜3億 kWh",
    annualCost: "年間電気代 24〜90 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模特殊ガラス工場の年間11%削減（Before/After）",
    before: "関東の特殊ガラス工場A社（高圧 1,000kW、年間 1,000万 kWh、年間電気代 3億円）。市場連動プラン継続、電気ブースター比率高め、徐冷炉が15年経過。",
    after: "新電力切替（固定3年）／徐冷炉高効率型に更新（SII＋ものづくり補助1/2活用、投資2,500万円）／LED化／溶融炉断熱性能改善／コンプレッサーインバータ化／電気ブースター運用最適化／デマンドコントローラー導入。",
    result: "年間電気代 3億円 → 2.67億円（▲11%、▲3,300万円）／契約 kW 1,000→900／投資回収 補助金後 2.2年",
  },
  {
    title: "事例2：中規模ガラス工場の年間13%削減",
    before: "中部地方の板ガラス工場B社（特別高圧 5,000kW、年間 5,000万 kWh、年間電気代 15億円）。市場連動プランで2022〜2023年に月最大5,000万円の追加負担。電気ブースター24h稼働。",
    after: "固定5年プラン切替／電気ブースター高効率化／自家消費太陽光 2MW 導入（屋根15,000 m²）／BEMS／溶融炉断熱全面更新／需要家主導型PPA／コンプレッサー大型インバータ化／徐冷炉省エネ更新。",
    result: "年間電気代 15億円 → 13.05億円（▲13%、▲1.95億円）／契約 kW 5,000→4,400／投資回収 補助金後 4.0年",
  },
  {
    title: "事例3：大規模ガラスメーカーの年間2.5億円削減",
    before: "国内大手ガラスメーカーC社の主力工場（特別高圧 15,000kW、年間 1.5億 kWh、年間電気代 45億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 5 MW＋蓄電池 8 MWh／コージェネ 5MW＋排熱回収／全溶融炉断熱更新／需要家主導型PPA（オフサイト風力10MW）／DR契約締結／電気ブースター制御最適化。",
    result: "年間電気代 45億円 → 42.5億円（▲5.6%、▲2.5億円）／契約 kW 15,000→13,500／投資回収 8年（補助金後 6年）／CO₂削減 約25,000 t/年",
  },
];

const demandManagement = [
  {
    label: "電気ブースター運用の負荷平準化",
    detail:
      "電気ブースターの加熱出力を時間帯別電力単価に応じて調整。深夜時間帯に電気比率を上げ、昼間に下げる運用で5〜10%の削減。",
  },
  {
    label: "徐冷炉の連続運転最適化",
    detail:
      "徐冷炉の温度プロファイル最適化、複数炉の運転スケジュール調整で電力▲10〜15%。BEMSによる需要見える化が必須。",
  },
  {
    label: "成形・冷却ラインの負荷追従",
    detail:
      "成形機・冷却塔・コンプレッサーのインバータ化＋台数制御で20〜30%削減。生産変動に追従させることで効率化。",
  },
  {
    label: "デマンドコントローラー導入",
    detail:
      "プレス・コンプレッサー・補機の同時起動を抑制し、デマンドピークを15〜20%抑制。投資回収1〜2年と効率的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率徐冷炉・電気ブースター・LED・コンプレッサー・断熱改善",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "ガラス業向けで採択率が高い主力補助金。徐冷炉更新・断熱改善で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h溶融炉稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新成形装置・徐冷炉・電気ブースターの新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "ガラス業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "全電気式溶融炉化（重油→電気）・排熱発電",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱発電で大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小ガラス事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "電気ブースター・徐冷炉の電力プロファイルを把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "溶融炉・徐冷炉・成形機・コンプレッサーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（1MW〜5MW）導入の試算を実施したか",
  "電気ブースター・徐冷炉の高効率化の投資回収試算を実施したか",
  "溶融炉の断熱性能改善余地を確認したか",
  "デマンドコントローラー・電気ブースター運用最適化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ガラス製造業の電気代水準はどれくらいですか？", answer: "売上高比6〜15%（全電気式溶融炉採用工場は20%超）、製造原価比10〜25%が業界平均で全業種高位。中規模ガラス工場（年商300億円級）で年9〜24億円、大規模ガラスメーカー（年商1,000億円超）で年24〜90億円規模の電気代になります。" },
  { question: "溶融炉24h連続稼働の電気代対策は？", answer: "①溶融炉の断熱性能改善（電力▲10〜15%）、②電気ブースター比率の時間帯別最適化、③カレット（くずガラス）使用率向上、④バッチ予熱化、⑤排熱回収、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで3〜5年が目安です。" },
  { question: "電気ブースターの電気代を削減するには？", answer: "①電気ブースター電極の高効率化、②深夜時間帯シフト運用、③燃料との比率最適化、④BEMSによる需要見える化、⑤断熱性能改善、の5本柱が効果的。中規模工場で年1,500〜3,000万円の削減が目安。" },
  { question: "徐冷炉の電気代対策は？", answer: "①高効率徐冷炉への更新（電力▲15〜25%）、②温度プロファイル最適化、③断熱性能改善、④炉内充填率向上、⑤排熱回収、の5本柱が効果的。中規模工場で年500〜1,200万円の削減が目安。" },
  { question: "ガラス製造業の固定プランと市場連動プランどちらが向きますか？", answer: "溶融炉・電気ブースター・徐冷炉の24h連続稼働でベースロードが大きく、炉停止が物理的に不可能なため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "全電気式溶融炉化（重油→電気）は投資回収できますか？", answer: "重油溶融炉から全電気式溶融炉への転換は、電力大幅増（+150%）と引き換えに重油代▲100%、CO₂排出大幅減を実現。総合コストはエネルギー価格次第で変動。GX補助で大型補助対象、特殊ガラス・光学ガラス向けで採用拡大中。" },
  { question: "ガラス製造業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はガラス工場で投資回収できますか？", answer: "屋根面積5,000m²以上、24h溶融炉稼働の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "板硝子協会", url: "https://www.itakyo.or.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function GlassManufacturingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/glass-manufacturing-electricity-cost-review"
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
          <span className="text-slate-800">ガラス製造業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ガラス製造業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ガラス製造業は、溶融炉の24h連続稼働（停止すると炉破損）、電気ブースター加熱、徐冷炉、成形機など多面的な電力負荷を持ち、製造原価に占める電気代比率は全業種で最高クラスです。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ガラス製造業の電力使用プロファイル（溶融炉／電気ブースター／徐冷炉／成形）</li>
              <li>業界平均の電気代水準（売上高比6〜15%）と製品単位あたり単価</li>
              <li>電気ブースター・徐冷炉高効率化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>溶融炉24h連続稼働の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>ガラス業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ガラス製造業の電力使用特性 — 溶融炉・電気ブースター・徐冷炉・成形
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス製造業の電力使用は『溶融炉電気ブースター／徐冷炉／成形機／全電気式溶融炉／コンプレッサー粉砕』の5層で構成されます。溶融炉24h連続稼働と電気ブースターが業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比6〜15%、製品単位300〜6,000 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス製造業の電気代水準はガラス種別（板ガラス／瓶ガラス／光学／特殊）と溶融方式で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 板硝子協会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ガラス製造業の主要な電気代上昇要因 — 溶融・電気ブースター・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス製造業の電気代上昇は、溶融炉24h稼働ベースロードに加え、電気ブースター市場連動、燃料価格連動、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模特殊ガラス／中規模ガラス／大規模ガラスメーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス製造業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/glass-ceramics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガラス・窯業業の電気料金見直し</Link>
              、{" "}
              <Link href="/ceramics-pottery-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">窯業・陶磁器業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              溶融炉・電気ブースターのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス業は電気ブースター運用平準化、徐冷炉連続運転最適化、成形冷却ライン負荷追従など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h溶融炉稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス業は溶融炉・徐冷炉の24h連続稼働が物理的必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>溶融炉の24h連続稼働が物理的必須</li>
                  <li>炉停止が炉破損につながり致命的</li>
                  <li>ガラス価格への即時転嫁が困難</li>
                  <li>大電力消費で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に電気ブースター負荷増</li>
                  <li>溶融炉24h稼働が高単価時間帯に直撃</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万〜億単位の追加負担</li>
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
              再エネ賦課金の影響 — 大電力消費業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ガラス業の中規模工場では負担額が請求総額の10〜18%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模ガラス工場（年5,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1.745億円</li>
                  <li>2025年度（3.98円/kWh）：年 1.99億円（+2,450万円）</li>
                  <li>2026年度（4.18円/kWh）：年 2.09億円（+3,450万円）</li>
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
              ガラス業特有の節電・省エネ施策 — 溶融炉断熱・徐冷炉更新・ブースター最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス業の省エネは『溶融炉断熱改善』『徐冷炉高効率化』『電気ブースター運用最適化』『カレット使用率向上』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">溶融炉断熱改善</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>断熱材高性能化で電力▲10〜15%</li>
                  <li>炉寿命延長で更新コスト削減も同時実現</li>
                  <li>SII＋ものづくり補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">徐冷炉高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率徐冷炉で電力▲15〜25%</li>
                  <li>温度プロファイル最適化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電気ブースター運用最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>燃料との比率最適化、電力▲5〜10%</li>
                  <li>BEMS連動で時間帯別制御</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1MW〜5MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h溶融炉稼働で自家消費率80%超</li>
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
              ガラス業向けに活用しやすい補助金は5本柱。溶融炉断熱改善はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
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
              ガラス業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社ガラス工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス製造業は溶融炉24h物理的連続稼働・電気ブースター市場連動・炉破損リスクの3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>電気ブースターのピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した11〜13%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="glass-manufacturing-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/glass-ceramics-electricity-cost-review", title: "ガラス・窯業業の電気料金見直し", description: "ガラス・窯業合体の見直しポイント。" },
              { href: "/ceramics-pottery-electricity-cost-review", title: "窯業・陶磁器業の電気料金見直し", description: "焼成炉の電力対策。" },
              { href: "/cement-readymix-concrete-electricity-cost-review", title: "セメント・生コン業の電気料金見直し", description: "粉砕ミルの電力対策。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "電炉24h連続稼働対策。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "24h連続稼働が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "ガラス法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "徐冷炉・断熱改善の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "溶融炉24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "自動車ガラスの取引先業種。" },
              { href: "/construction-electricity-cost-review", title: "建設業の電気料金見直し", description: "板ガラスの取引先業種。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社のガラス工場条件でリスクを確認する"
            description="溶融炉・電気ブースター・徐冷炉・成形機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。断熱改善後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="ガラス製造業の電力契約見直し、専門家に相談しませんか？"
            description="溶融炉・電気ブースター・徐冷炉・成形機の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でガラス製造業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
