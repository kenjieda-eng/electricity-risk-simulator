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
  "非鉄金属業の電気料金見直しポイント｜アルミ精錬・銅製錬・リサイクルの契約最適化";
const pageDescription =
  "非鉄金属業（アルミ・銅・鉛・亜鉛・ニッケル製錬）の電気料金見直しを解説。アルミ精錬（電力30%以上）・銅製錬の溶解工程・国際価格との関係・リサイクルアルミの優位性、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "非鉄金属業 電気料金 見直し",
    "アルミ精錬 電気代",
    "銅製錬 電力契約",
    "リサイクル アルミ 電気代",
    "非鉄金属工場 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/non-ferrous-metal-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/non-ferrous-metal-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle }],
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
    label: "アルミ精錬電解槽（電力多消費の代表）",
    detail:
      "アルミ電解（ホール・エルー法）はアルミナを電気分解で還元する工程で、世界的にも最も電力多消費の工業プロセス。1tのアルミ製造に13,000〜15,000kWh（=高炉鉄の130〜300倍）の電力が必要。日本国内のアルミ精錬は1980年代に電力コスト要因で大半が撤退し、現在は再生アルミ（リサイクル）が主力。",
  },
  {
    label: "銅製錬（電解精製・溶解）",
    detail:
      "銅の電解精製（自溶炉→転炉→電解工程）。電解精製では1tの電気銅製造に300〜450kWh、自溶炉では石炭・石油主体で電力は補助的。日本国内では大手商社系メーカーが寡占的に運営。",
  },
  {
    label: "鉛・亜鉛・ニッケル製錬",
    detail:
      "鉛の電解精製で1tあたり400〜600kWh、亜鉛の電解精製で1tあたり3,000〜3,500kWh、ニッケル製錬で1tあたり12,000〜18,000kWh。亜鉛・ニッケルが特に電力集約的。",
  },
  {
    label: "圧延・伸線・押出加工",
    detail:
      "非鉄金属の二次加工工程。圧延機・伸線機・押出機が組み合わさる。アルミ圧延工場、銅板加工工場の主力設備で1ライン200〜2,000kWの動力負荷。中規模加工工場で工場全体電力の30〜40%を占める。",
  },
  {
    label: "リサイクル工程（再生アルミ・再生銅）",
    detail:
      "電気代高騰で原料調達が難しい新地金製錬に代わり、リサイクル（スクラップ溶解→再生地金製造）が事業の主力に。再生アルミは新規地金の1/30の電力で製造可能で、電気代上昇局面では競争力が拡大。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本アルミニウム協会・日本鉱業協会の統計から、非鉄金属業の電気料金は売上高比4〜20%（アルミ電解で20〜40%）、製造原価比6〜30%。中規模非鉄加工メーカーで年30〜100億円、大手非鉄製錬メーカーで年200〜1,000億円規模の電気代に達する。",
  },
  {
    label: "製品単位あたりの電力使用量",
    detail:
      "新地金アルミ1tで13,000〜15,000kWh、再生アルミ1tで400〜600kWh（1/30）、電気銅1tで300〜450kWh、亜鉛1tで3,000〜3,500kWh、ニッケル1tで12,000〜18,000kWh。アルミ電解とニッケル製錬が電力集約的最上位。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模リサイクルアルミ・銅加工工場（200〜500名）で年間2,000万kWh〜1億kWh、中規模非鉄加工メーカー（500〜2,000名）で年間1〜5億kWh、大手非鉄製錬・加工メーカー（2,000名超）で年間5〜30億kWh。特別高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の電解工程への影響",
    detail:
      "非鉄金属業は24時間連続電解工程で月間使用量が桁違いに大きく、燃料費調整額1円/kWhの変動でも中規模工場（年3億kWh）で年3億円の差。大手非鉄製錬メーカーでは年20〜30億円のインパクト。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間3億kWh使用の中規模非鉄メーカーで年13.5億円の負担、5年で67.5億円超。減免制度（年間1,000万kWh以上等）対象は必須。",
  },
  {
    label: "国際価格（LME・SHFE）との連動",
    detail:
      "非鉄金属の市場価格はLME（ロンドン金属取引所）・SHFE（上海先物取引所）に連動し、国内製造コスト（電気代込み）と国際市場価格のスプレッドが事業収益性を決定。電気代上昇は国際競争力を直撃。",
  },
  {
    label: "リサイクル拡大と新規地金縮小",
    detail:
      "電気代高騰で新規アルミ電解は世界的に縮小、再生アルミ（リサイクル）が主力に。日本国内では再生アルミの市場シェアが2010年45%→2025年70%超に拡大。",
  },
  {
    label: "EV・脱炭素需要拡大",
    detail:
      "EV用バッテリー・モーター用銅・ニッケル、太陽光パネル用アルミ・銀の需要が急増。非鉄金属業の生産量は脱炭素ニーズで拡大トレンドだが、生産量増加で電力使用量も比例増加。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模リサイクル・加工工場（従業員200〜500名）",
    profile: "再生アルミ・銅加工／特別高圧 3,000〜10,000kW／年間 2,000万〜1億kWh",
    annualCost: "年間電気代 6〜30 億円",
    note: "新電力切替・固定3年契約・溶解炉・圧延機最適化・LED化で年7〜10%削減事例。再生アルミ事業者は電力単価上昇局面で新規地金メーカー比で競争力拡大。",
  },
  {
    size: "中規模非鉄加工・製錬メーカー（従業員500〜2,000名）",
    profile: "中堅非鉄メーカー基幹工場／特別高圧 20,000〜80,000kW／年間 1〜5億kWh",
    annualCost: "年間電気代 30〜150 億円",
    note: "固定5年契約＋自家消費太陽光（10〜20MW）＋電解槽AI制御＋廃熱回収＋空調最適化で年8〜12%削減事例。",
  },
  {
    size: "大手非鉄製錬・加工メーカー（従業員2,000名超）",
    profile: "三井金属・三菱マテリアル級／特別高圧 80,000〜300,000kW／年間 5〜30億kWh",
    annualCost: "年間電気代 150〜900 億円",
    note: "1%の単価改善でも年1.5〜9億円のインパクト。長期固定（10〜20年）契約＋大規模太陽光（50〜200MW）＋オフサイトPPA＋電解最適化AIが標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅再生アルミメーカーの年間8%削減（Before/After）",
    before: "西日本の再生アルミメーカーA社の主力工場（特別高圧 6,000kW、年間 5,000万kWh、年間電気代 15億円）。市場連動プラン継続、溶解炉制御最適化なし、廃熱回収なし、LED未更新。",
    after: "新電力切替（固定3年）／溶解炉AI制御導入（投資 8,000万円）／圧延機廃熱回収／全照明LED化／コンプレッサー台数制御／再エネ賦課金減免申請。",
    result: "年間電気代 15億円 → 13.8億円（▲8%、▲1.2億円）／契約 kW 6,000→5,500／投資回収 1年（SII補助 1/2 活用＋再エネ賦課金減免）",
  },
  {
    title: "事例2：中堅非鉄製錬メーカーの年間11%削減",
    before: "中部地区の中堅非鉄製錬メーカーB社の基幹工場（特別高圧 50,000kW、年間 3億kWh、年間電気代 90億円）。市場連動プランで2022〜2023年に月最大8億円の追加負担を経験。電解槽制御も旧式。",
    after: "固定5年プラン切替／自家消費太陽光 15MW（敷地内）／電解槽AI制御＋自動運転化／熱処理炉廃熱回収／DR契約／需要家主導型PPA補助金活用／グリーン電力20%調達／再エネ賦課金減免申請。",
    result: "年間電気代 90億円 → 80億円（▲11.1%、▲10億円）／契約 kW 50,000→45,000／投資回収 6年（補助金後 4年）",
  },
  {
    title: "事例3：大手非鉄製錬メーカー基幹工場年間40億円削減",
    before: "大手非鉄製錬メーカーC社の主力工場（特別高圧 200,000kW、年間 15億kWh、年間電気代 450億円）。長期固定契約継続もEV・脱炭素需要拡大で電力使用量増加見込み。",
    after: "電力契約の15年長期固定締結／自家消費太陽光 50MW＋オフサイトPPA 100MW（再エネ100%対応）／電解槽AI制御＋自動運転化／コージェネ拡張／DR契約／GX補助・CCUS実証／グリーン水素活用検討。",
    result: "年間電気代 450億円 → 410億円（▲8.9%、▲40億円）／契約 kW 200,000→185,000／投資回収 12年（補助金後 8年）／CO₂削減 約150,000 t/年",
  },
];

const demandManagement = [
  {
    label: "電解槽AI制御による最適化",
    detail:
      "アルミ・亜鉛・銅の電解槽運転をAI化することで瞬時消費電力▲5〜10%削減。電解電圧・電流密度の最適化、不純物濃度に応じた運転調整。中規模非鉄メーカーで年数億〜数十億円規模の削減。",
  },
  {
    label: "溶解炉のスケジュール最適化",
    detail:
      "再生アルミ・再生銅の溶解炉運転を電力単価安価な深夜時間帯にシフト。DR契約と組合せで年数千万〜億円規模の削減効果。",
  },
  {
    label: "圧延・伸線・押出機のインバータ化",
    detail:
      "非鉄金属加工工程の大型圧延機・伸線機・押出機のインバータ化＋台数制御で電力▲15〜25%削減。中規模加工工場で年数億円規模の削減。",
  },
  {
    label: "計画停止と需給逼迫期DR連動",
    detail:
      "夏冬の電力需給逼迫期に計画的なメンテナンス停止を行うDRプログラム参加。電力会社からインセンティブ収入も得られ、年数億〜十数億円の収益化が可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "電解槽AI制御・溶解炉・圧延機・廃熱回収・LED",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "非鉄金属業のような大量電力消費業種で採択率が高い主力補助金。電解最適化・廃熱回収で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が広大、24h稼働の非鉄金属業と相性極良好。20〜100MW級も対象。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "電解最適化・コージェネ・CCUS・グリーン水素",
    rate: "1/2、上限数十億円",
    note: "CN対応のための大型補助。非鉄金属業のGX投資の主力財源。",
  },
  {
    name: "再エネ賦課金減免制度",
    target: "年間1,000万kWh以上の電気多消費事業者",
    rate: "減免率による（最大80%）",
    note: "非鉄金属業のほぼ全社が対象。年数億〜数百億円の負担軽減効果。原単位改善計画提出が必要。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "特別高圧契約で長期固定（5〜20年）への切替の検討余地があるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "電解槽AI制御導入による瞬時電力削減を試算したか",
  "工場敷地を活用した自家消費太陽光（10〜100MW）導入の試算を実施したか",
  "圧延・伸線・押出機・溶解炉のインバータ化を評価したか",
  "再生アルミ・再生銅事業の電力競争力を経営計画に織り込んだか",
  "廃熱回収・蒸気タービン拡張の費用対効果を評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当し、申請を実施したか",
  "EV・脱炭素需要拡大に伴う電力需要増を経営計画に織り込んだか",
  "GX補助・需要家主導型PPA補助金の組合せ申請を検討したか",
];

const faqItems = [
  { question: "非鉄金属業の電気代水準はどれくらいですか？", answer: "売上高比4〜20%（アルミ電解で20〜40%）、製造原価比6〜30%が業界平均です。中規模非鉄加工メーカーで年30〜150億円、大手非鉄製錬メーカーで年150〜900億円規模の電気代になります。" },
  { question: "アルミ電解はなぜ電力多消費なのですか？", answer: "ホール・エルー法ではアルミナを高温融解状態で電気分解するため、電力エネルギーが直接化学エネルギーに変換されます。1tのアルミ製造に13,000〜15,000kWh必要で、これは鉄鋼業（高炉50〜100kWh）の130〜300倍に達します。" },
  { question: "再生アルミと新規地金アルミの電力差は？", answer: "再生アルミは溶解工程のみで1tあたり400〜600kWh、新規地金は電解工程で1tあたり13,000〜15,000kWh。約1/30の電力で製造可能で、電気代上昇局面では再生アルミの競争力が拡大します。" },
  { question: "非鉄金属業に向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続電解で電力多消費の非鉄金属業は固定プラン（10〜20年長期）推奨。市場高騰時の影響額が桁違いに大きく、国際市場価格（LME）が電気代上昇分を吸収できないためです。" },
  { question: "電解槽AI制御でどれだけ電気代を下げられますか？", answer: "瞬時消費電力▲5〜10%削減事例多数。中規模非鉄メーカーで年間2〜10億円規模の削減、SII補助1/2活用で投資回収1〜2年。電解電圧・電流密度の最適化、不純物濃度に応じた運転調整が中核。" },
  { question: "自家消費型太陽光は非鉄金属工場で投資回収できますか？", answer: "工場敷地が広大、24h連続稼働の非鉄金属業は業種別で最上位の相性。20MWで年2,200〜2,600万kWh発電、年22〜26億円削減、投資回収6〜8年（補助金後4〜6年）。100MW級でも検討余地。" },
  { question: "EV・脱炭素需要拡大で電力使用量はどれくらい増えますか？", answer: "EV用バッテリー・モーター用銅・ニッケル、太陽光パネル用アルミの需要急増で、業界全体の生産量が年5〜10%増加トレンド。電力使用量も比例増加するため、長期電力供給確保が経営戦略の中核論点に。" },
  { question: "非鉄金属業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（電解制御・廃熱回収）、需要家主導型PPA補助金（大規模太陽光）、脱炭素先行地域・GX補助（電解最適化・CCUS）、再エネ賦課金減免の4本柱です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本アルミニウム協会", url: "https://www.aluminum.or.jp/" },
  { name: "一般社団法人 日本鉱業協会", url: "https://www.kogyo-kyokai.gr.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function NonFerrousMetalElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/non-ferrous-metal-electricity-cost-review"
        datePublished="2026-05-21"
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
          <span className="text-slate-800">非鉄金属業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            非鉄金属業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            非鉄金属業（アルミ・銅・鉛・亜鉛・ニッケル製錬／加工）は、電解工程の極大電力消費、24時間連続稼働、LME国際市場価格との連動という典型的エネルギー多消費業種です。アルミ電解は1tあたり13,000〜15,000kWhで、製造原価の30%以上が電気代という業界特性。新規地金製錬の縮小と再生アルミ・再生銅の競争力拡大、EV・脱炭素需要による生産量増加など事業環境が大きく変化しています。本ページでは非鉄金属業特有の電力負荷特性、業界平均水準、規模別事例、電解最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>非鉄金属業の電力使用プロファイル（アルミ電解／銅製錬／鉛亜鉛／圧延／リサイクル）</li>
              <li>業界平均の電気代水準（売上高比4〜40%）と単位金属単価</li>
              <li>燃料費調整額・再エネ賦課金・LME連動・EV需要の影響</li>
              <li>規模別（リサイクル／中堅製錬／大手製錬）の電気代と削減事例3件（Before/After）</li>
              <li>電解槽AI制御・溶解炉最適化・リサイクル事業の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・再エネ賦課金減免の組合せ活用</li>
              <li>非鉄金属業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              非鉄金属業の電力使用特性 — アルミ電解・銅製錬・リサイクル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業の電力使用は『アルミ電解（最大消費）／銅製錬（電解精製）／鉛・亜鉛・ニッケル製錬／圧延・伸線・押出加工／リサイクル工程』の5層構造です。電解工程の存否で電力使用プロファイルが大きく異なり、自社設備構成の把握が見直しの起点となります。
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
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比4〜40%、アルミ電解で最大
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業の電気代水準は事業形態（電解・リサイクル・加工）で極端に異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本アルミニウム協会・日本鉱業協会・経産省工業統計から整理。実値は電解比率・新規/再生比率で2〜10倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              非鉄金属業の主要な電気代上昇要因 — 燃料費・賦課金・LME連動・EV需要
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。LME国際市場価格との連動、リサイクル拡大、EV・脱炭素需要拡大は業界固有の構造要因です。
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
              規模別の削減事例3件 — リサイクル／中堅製錬／大手非鉄製錬
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種の事例は{" "}
              <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鉄鋼業の電気料金見直し</Link>
              、{" "}
              <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">化学業の電気料金見直し</Link>
              、{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              リサイクル拡大とEV需要拡大の事業機会
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代上昇局面では再生アルミ・再生銅事業の競争力が拡大。同時にEV・脱炭素需要で銅・ニッケル・アルミ需要が急増中で、非鉄金属業全体が成長フェーズに。電力契約戦略はこの2つの構造変化を踏まえて立案する必要があります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">リサイクル事業の競争力</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>再生アルミは新規地金の1/30の電力</li>
                  <li>電気代上昇局面で競争力拡大</li>
                  <li>日本国内シェア2010年45%→2025年70%超</li>
                  <li>CN対応のScope3削減でも有利</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">EV・脱炭素需要拡大</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>EVバッテリー用銅・ニッケル急増</li>
                  <li>太陽光パネル用アルミ・銀需要拡大</li>
                  <li>業界生産量年5〜10%増加トレンド</li>
                  <li>長期電力供給確保が経営戦略の中核</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              連続稼働工場の関連論点は{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              非鉄金属業のデマンド管理 — 電解AI制御・溶解スケジュール・DR連動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業のデマンド管理は『電解槽AI制御』『溶解炉スケジュール最適化』『圧延・伸線インバータ化』『計画停止DR連動』の4論点を組合せて最適化します。
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
              燃料費調整・市場連動プランの影響 — アルミ電解の極端な感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              アルミ電解は製造原価の30%以上が電気代という極端な構造のため、市場価格高騰局面で経営インパクトが直撃します。20年級の超長期固定契約も標準的に検討される業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プラン（長期）が向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>製造原価の30%以上が電気代（アルミ電解）</li>
                  <li>LME国際市場価格で即時転嫁が困難</li>
                  <li>EV・脱炭素需要で電力使用量増加トレンド</li>
                  <li>20年級超長期契約と相性良好</li>
                  <li>再生アルミ事業の長期計画と整合的</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>LME価格との比較で原価競争力低下</li>
                  <li>新規地金事業の撤退判断を加速</li>
                  <li>JEPX 80円/kWh級高騰時に年数十億円の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、固定プラン適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、比較は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定プランの違い</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種特有の節電・省エネ施策 — 電解AI制御・廃熱回収・大規模太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業向けの省エネ施策は『電解槽AI制御』『廃熱回収システム』『圧延・伸線インバータ化』『大規模太陽光（20〜100MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電解槽AI制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>瞬時電力▲5〜10%</li>
                  <li>電解電圧・電流密度最適化</li>
                  <li>SII補助1/2、投資回収1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃熱回収システム</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電解・溶解・圧延の廃熱再利用</li>
                  <li>蒸気使用量▲40〜60%</li>
                  <li>SII補助1/2、投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">大規模太陽光（20〜100MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>20MWで年2,200〜2,600万kWh発電</li>
                  <li>連続稼働で自家消費率95%超</li>
                  <li>投資回収 6〜8年（補助金後 4〜6年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">リサイクル事業拡大</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>新規地金の1/30の電力</li>
                  <li>電気代上昇局面で競争力</li>
                  <li>CN対応Scope3削減にも有効</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・再エネ賦課金減免
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜5年短縮できます。再エネ賦課金減免制度は年数億〜数百億円規模の負担軽減効果。
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
              <Link href="/renewable-energy-surcharge-reduction-system" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金減免制度</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              非鉄金属業に合った契約見直しチェックリスト（12項目）
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
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社非鉄金属工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非鉄金属業は電解多消費・LME連動・リサイクル拡大・EV需要拡大の4重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>EV需要拡大に伴う電力需要増シナリオを比較する</li>
              <li>事例で示した8〜11%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="non-ferrous-metal-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "金属製造業の類似事例。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "電解業の類似事例（クロル・アルカリ）。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工の関連事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "金属加工先業種の関連事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "電力多消費業種が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "電解制御・廃熱回収で活用できる主力補助金。" },
              { href: "/renewable-energy-surcharge-reduction-system", title: "再エネ賦課金減免制度", description: "電気多消費業種の主力負担軽減制度。" },
            ]}
          />

          <ContentCta
            heading="自社非鉄金属工場条件でリスクを確認する"
            description="アルミ電解・銅製錬・圧延・リサイクル工程の電力使用パターンをもとに、電気料金の上振れ幅をシミュレーターで試算できます。EV需要拡大後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
