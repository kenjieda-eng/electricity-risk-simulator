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
  "精密機器業の電気料金見直しポイント｜恒温恒湿・微細加工・測定室の契約最適化";
const pageDescription =
  "精密機器業（計測機器・光学機器・医療機器・時計）の電気料金見直しを解説。恒温恒湿の精密加工環境、微細加工装置、測定室の温度管理、クリーン環境空調、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "精密機器業 電気料金 見直し",
    "恒温恒湿 電気代",
    "微細加工 電力契約",
    "精密機器工場 電気代",
    "測定室 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/precision-instruments-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/precision-instruments-electricity-cost-review",
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
    label: "恒温恒湿の精密加工環境",
    detail:
      "精密機器業の電力消費の中核。±0.5℃・±5%の精度で温湿度を維持する精密加工室・測定室の空調が24時間連続稼働。1工場あたり200〜800kWの常時負荷で、電力消費の30〜45%を占める。",
  },
  {
    label: "微細加工装置（マシニングセンタ・研削盤・放電加工）",
    detail:
      "精密機器の部品加工に使用する微細加工装置。5軸マシニングセンタ、超精密旋盤、ワイヤ放電加工機、超精密研削盤などが組み合わさる。1台あたり数十〜数百kWの動力負荷で、複数台並列で工場全体電力の25〜40%を占める。",
  },
  {
    label: "測定室・検査室（厳格な温度管理）",
    detail:
      "三次元測定機（CMM）、レーザー干渉計、光学測定機などの精密測定装置を備える測定室は±0.5℃の温度精度を維持。中規模精密機器工場で1〜3室、月3,000〜10,000kWhの電力消費。",
  },
  {
    label: "クリーン環境（光学機器・医療機器）",
    detail:
      "光学機器（カメラ・レンズ）・医療機器の組立工程ではクラス10万〜100万のクリーンルームを併設。空調＋FFUで100〜500kWの常時負荷が発生。",
  },
  {
    label: "コンプレッサー・特殊ユーティリティ",
    detail:
      "精密加工装置の動力源コンプレッサー（圧縮空気品質要求高）、超純水製造装置、温調装置などの特殊ユーティリティが24h稼働。工場全体電力の10〜15%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本精密機器協会の統計から、精密機器業の電気料金は売上高比2〜6%（光学・計測機器で2〜4%、医療機器で3〜7%）。中規模精密機器工場で年5〜25億円、大手光学・医療機器メーカーで年30〜150億円規模の電気代に達する。",
  },
  {
    label: "製品単位あたりの電力使用量",
    detail:
      "計測機器1台で50〜500kWh、光学レンズ1個で5〜30kWh、医療機器1台で100〜800kWh、時計（高級機械式）1個で2〜10kWh。製品サイズと精度要求で電力使用量が大きく変動。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模精密機器工場（150〜500名）で年間500〜2,000万kWh、中規模精密機器工場（500〜2,000名）で年間2,000万〜8,000万kWh、大手光学・医療機器メーカー基幹工場（2,000名超）で年間1〜5億kWh。特別高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の恒温恒湿環境への影響",
    detail:
      "精密機器業は恒温恒湿環境の24時間連続稼働でベースロードが大きく、燃料費調整額1円/kWhの変動で中規模工場（年4,000万kWh）で年4,000万円の差。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間4,000万kWh使用の中規模精密機器工場で年1.672億円の負担、5年で8.36億円。減免制度（年間1,000万kWh以上等）対象。",
  },
  {
    label: "精度要求とエネルギー消費のトレードオフ",
    detail:
      "精密機器業の精度要求が高まるほど恒温恒湿環境のグレードが上がり、電力消費が増加。ナノレベル加工対応の最新工場では従来比で電力使用量が30〜50%増加する事例も。",
  },
  {
    label: "高精度新製品の需要拡大",
    detail:
      "医療機器（手術ロボット）、光学機器（半導体露光装置レンズ）、計測機器（精密分析装置）の需要急増で精密機器業の生産量は増加トレンド。電力使用量も比例増加。",
  },
  {
    label: "顧客（半導体・医療・自動車）のCN要求",
    detail:
      "半導体メーカー・医療機器ユーザー・自動車メーカー等の大手顧客からサプライチェーン全体CN目標達成を要求。精密機器メーカー側に再エネ100%調達が事実上必須化。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模精密機器工場（従業員150〜500名）",
    profile: "計測機器・小型光学機器メーカー／高圧 1,000〜3,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "新電力切替・固定3年契約・恒温恒湿空調インバータ化・LED化で年8〜11%削減事例。",
  },
  {
    size: "中規模精密機器工場（従業員500〜2,000名）",
    profile: "中堅光学・医療機器メーカー／特別高圧 3,000〜10,000kW／年間 2,000万〜8,000万kWh",
    annualCost: "年間電気代 6〜24 億円",
    note: "固定5年契約＋自家消費太陽光（1〜4MW）＋恒温恒湿空調最適化＋廃熱回収＋グリーン電力部分調達で年10〜14%削減事例。",
  },
  {
    size: "大手光学・医療機器メーカー基幹工場（従業員2,000名超）",
    profile: "ニコン・キヤノン・オリンパス級／特別高圧 10,000〜30,000kW／年間 1〜5億kWh",
    annualCost: "年間電気代 30〜150 億円",
    note: "1%の単価改善でも年3,000万〜1.5億円のインパクト。長期固定（10〜15年）契約＋大規模太陽光（5〜15MW）＋オフサイトPPA＋DR契約が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅計測機器メーカーの年間9%削減（Before/After）",
    before: "東日本の計測機器メーカーA社の主力工場（高圧 2,200kW、年間 1,600万kWh、年間電気代 4.8億円）。市場連動プラン継続、恒温恒湿空調インバータなし、廃熱回収なし、LED未更新。",
    after: "新電力切替（固定3年）／恒温恒湿空調インバータ化＋VAV制御（投資 2,200万円）／微細加工装置の停止時アイドル削減／全照明LED化／コンプレッサー台数制御。",
    result: "年間電気代 4.8億円 → 4.37億円（▲9%、▲4,300万円）／契約 kW 2,200→2,050／投資回収 2.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模光学機器メーカーの年間12%削減",
    before: "東日本の光学機器メーカーB社の基幹工場（特別高圧 6,000kW、年間 4,500万kWh、年間電気代 13.5億円）。市場連動プランで2022〜2023年に月最大1.2億円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 2.5MW（屋根15,000m²）／恒温恒湿空調最適化＋廃熱回収／クリーンルームVAV制御／DR契約／需要家主導型PPA補助金活用／グリーン電力20%調達。",
    result: "年間電気代 13.5億円 → 11.88億円（▲12%、▲1.62億円）／契約 kW 6,000→5,400／投資回収 6年（補助金後 4年）",
  },
  {
    title: "事例3：大手医療機器メーカー基幹工場年間5億円削減",
    before: "大手医療機器メーカーC社の基幹工場（特別高圧 15,000kW、年間 1.2億kWh、年間電気代 36億円）。長期固定契約継続も新製品（手術ロボット）量産で電力使用量増加。顧客（病院グループ）のCN対応も対応中。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 8MW＋蓄電池 5MWh／オフサイトPPA 15MW（再エネ100%対応）／恒温恒湿空調AI最適化／クリーンルームFFU個別制御／DR契約／需要家主導型PPA＋GX補助活用。",
    result: "年間電気代 36億円 → 31億円（▲13.9%、▲5億円）／契約 kW 15,000→13,000／投資回収 8年（補助金後 5.5年）／CO₂削減 約10,000 t/年",
  },
];

const demandManagement = [
  {
    label: "恒温恒湿空調のVAV制御＋AI予測",
    detail:
      "精密加工室・測定室の空調をVAV（可変風量）制御化、AI予測制御で電力▲15〜20%削減。中規模精密機器工場で年5,000万〜1億円規模の削減。",
  },
  {
    label: "微細加工装置のアイドル削減",
    detail:
      "マシニングセンタ・放電加工機の稼働停止時のアイドル電力を自動カットすることで電力▲10〜15%削減。複数装置の稼働スケジュール最適化も有効。",
  },
  {
    label: "クリーンルームFFU個別制御",
    detail:
      "光学・医療機器のクリーンルームのFFUを個別制御化することで、占有率に応じた最適運転。電力▲15〜20%削減事例。",
  },
  {
    label: "コンプレッサー・空調のインバータ化",
    detail:
      "工場全体の大型コンプレッサー、ユーティリティ機器のインバータ化・台数制御で20〜30%削減。デマンドコントローラーと連動。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "恒温恒湿空調・微細加工装置・LED・コンプレッサー更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "精密機器業のような連続稼働業種で採択率が高い主力補助金。恒温恒湿空調最適化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が比較的広く、24h稼働の精密機器業と相性良好。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "恒温恒湿空調電化・大規模PPA・ヒートポンプ",
    rate: "1/2、上限数億円",
    note: "CN対応のための大型補助。顧客サプライチェーンCN要求対応に整合。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小精密機器工場の設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小精密機器メーカーで活用可能。LED・空調・コンプレッサー更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "恒温恒湿空調のVAV制御＋AI予測導入を評価したか",
  "工場敷地を活用した自家消費太陽光（1〜8MW）導入の試算を実施したか",
  "微細加工装置のアイドル電力削減を評価したか",
  "クリーンルームFFU個別制御を導入したか",
  "コンプレッサー・空調・照明のインバータ化＋LED化を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "顧客（半導体・医療・自動車）のサプライチェーンCN要求対応のグリーン電力調達計画があるか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
];

const faqItems = [
  { question: "精密機器業の電気代水準はどれくらいですか？", answer: "売上高比2〜6%（光学・計測機器で2〜4%、医療機器で3〜7%）が業界平均です。中規模精密機器工場で年6〜24億円、大手光学・医療機器メーカーで年30〜150億円規模の電気代になります。" },
  { question: "恒温恒湿環境の電気代を下げる方法は？", answer: "VAV（可変風量）制御＋AI予測制御＋FFU個別制御＋廃熱回収の組合せで電力▲15〜25%削減事例多数。中規模精密機器工場で年5,000万〜1.5億円規模の削減、SII補助1/2活用で投資回収2〜3年。" },
  { question: "精密機器業に向く電力プランは固定ですか、市場連動ですか？", answer: "恒温恒湿環境24時間連続稼働の精密機器業は固定プラン推奨。市場高騰時の影響額が大きく、製品価格への即時転嫁が困難なためです。顧客CN要求対応とも整合的。" },
  { question: "顧客（半導体・医療・自動車）のCN要求にどう対応すべきですか？", answer: "オフサイトPPA契約（再エネ100%対応）と非化石証書購入の組合せが標準。半導体・医療・自動車業界全体で2030年までのCN対応が標準化しており、対応しない場合は受注機会喪失リスクも。" },
  { question: "精度要求とエネルギー消費のトレードオフはどう考えるべきですか？", answer: "ナノレベル加工対応の最新工場では従来比で電力使用量が30〜50%増加する事例も。精度要求拡大に対しては、空調・装置の最新世代化＋AI制御で電力増加を抑制することが重要です。" },
  { question: "自家消費型太陽光は精密機器工場で投資回収できますか？", answer: "屋根面積10,000m²以上、24h連続稼働の精密機器工場は業種別で上位の相性。2.5MWで年280〜320万kWh発電、年2,500〜3,200万円削減、投資回収6〜8年（補助金後4〜6年）が目安。" },
  { question: "微細加工装置のアイドル電力削減はどれくらい効果ありますか？", answer: "マシニングセンタ・放電加工機の稼働停止時のアイドル電力を自動カットすることで電力▲10〜15%削減。中規模精密機器工場で年2,000万〜5,000万円規模の削減、SII補助1/2活用で投資回収1〜2年。" },
  { question: "精密機器業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（恒温恒湿空調・微細加工装置）、需要家主導型PPA補助金（屋上太陽光）、脱炭素先行地域・GX補助、中小企業補助の4本柱です。複数組合せで採択率向上。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本精密機器協会（JEMIMA）", url: "https://www.jemima.or.jp/" },
  { name: "日本光学工業協会", url: "https://www.joia.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function PrecisionInstrumentsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/precision-instruments-electricity-cost-review"
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
          <span className="text-slate-800">精密機器業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            精密機器業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            精密機器業（計測機器・光学機器・医療機器・時計）は、恒温恒湿の精密加工環境、微細加工装置、測定室の厳格な温度管理、クリーン環境空調が組み合わさる典型的なエネルギー多消費業種です。ナノレベル加工対応の精度要求拡大、顧客（半導体・医療・自動車）のサプライチェーンCN要求といった経営課題に直面しています。本ページでは精密機器業特有の電力負荷特性、業界平均水準、規模別事例、恒温恒湿最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>精密機器業の電力使用プロファイル（恒温恒湿／微細加工／測定室／クリーン環境）</li>
              <li>業界平均の電気代水準（売上高比2〜7%）と単位製品単価</li>
              <li>燃料費調整額・再エネ賦課金・精度要求拡大・CN要求の影響</li>
              <li>規模別（中堅計測／中規模光学／大手医療機器）の電気代と削減事例3件（Before/After）</li>
              <li>恒温恒湿空調VAV制御・微細加工装置最適化の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>精密機器業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              精密機器業の電力使用特性 — 恒温恒湿・微細加工・測定室
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業の電力使用は『恒温恒湿空調（基幹）／微細加工装置／測定室・検査室／クリーン環境／コンプレッサー・ユーティリティ』の5層構造です。恒温恒湿空調が電力消費の30〜45%を占めるため、空調最適化が契約見直しの起点となります。
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
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比2〜7%、医療機器で更に高い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業の電気代水準は事業形態（計測・光学・医療機器・時計）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本精密機器協会・日本光学工業協会・経産省工業統計から整理。実値は製品種別・精度要求で1.5〜3倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              精密機器業の主要な電気代上昇要因 — 燃料費・賦課金・精度要求・CN
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、精度要求拡大、顧客サプライチェーンCN要求という業界固有要因が並列します。
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
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 中堅計測／中規模光学／大手医療機器
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/electronics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電子機器業の電気料金見直し</Link>
              、{" "}
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体業の電気料金見直し</Link>
              、{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              精度要求拡大とエネルギー消費のトレードオフ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業の精度要求が年々高まる中、恒温恒湿環境のグレード上昇による電力消費増加と省エネ施策の両立が経営戦略の中核です。最新世代の空調・装置への投資が必須となります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">精度要求拡大による電力影響</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>従来±1℃→±0.5℃→±0.1℃の精度向上</li>
                  <li>ナノレベル加工で電力使用量30〜50%増</li>
                  <li>クリーンルームクラス向上で電力増</li>
                  <li>製品高機能化で電力需要トレンド</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">トレードオフ解決策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>恒温恒湿空調AI最適化</li>
                  <li>最新世代インバータ機器への更新</li>
                  <li>廃熱回収システム導入</li>
                  <li>自家消費太陽光＋蓄電池併設</li>
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
              精密機器業のデマンド管理 — 恒温恒湿VAV・装置アイドル・クリーン制御
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業のデマンド管理は『恒温恒湿空調VAV制御＋AI予測』『微細加工装置アイドル削減』『クリーンルームFFU個別制御』『コンプレッサーインバータ化』の4論点を組合せて最適化します。
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
              デマンド管理の削減効果試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 恒温恒湿24h稼働の感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業は恒温恒湿環境24時間連続稼働でベースロードが大きく、市場価格高騰局面での影響額が事業収支に直撃します。固定プラン採用は経営判断レベルの論点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>恒温恒湿24時間連続稼働でベースロード大</li>
                  <li>製品価格への即時転嫁が困難（高級品）</li>
                  <li>精度要求拡大で電力使用量増加トレンド</li>
                  <li>顧客（半導体・医療・自動車）のCN要求と整合</li>
                  <li>長期投資回収計画の予算精度確保</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>精度要求拡大時の電力使用量増で更にリスク増</li>
                  <li>顧客のCN要求と矛盾</li>
                  <li>JEPX 80円/kWh級高騰時に年数千万〜数億円の追加負担</li>
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
              業種特有の節電・省エネ施策 — 恒温恒湿VAV・装置アイドル・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業向けの省エネ施策は『恒温恒湿空調VAV制御』『微細加工装置アイドル削減』『廃熱回収システム』『自家消費型太陽光（2〜8MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">恒温恒湿空調VAV</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>VAV制御＋AI予測</li>
                  <li>電力▲15〜20%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">装置アイドル削減</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>マシニングセンタ・放電加工機の自動カット</li>
                  <li>電力▲10〜15%</li>
                  <li>SII補助1/2、投資回収1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃熱回収システム</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>空調・装置の廃熱再利用</li>
                  <li>蒸気使用量▲30〜50%</li>
                  <li>SII補助1/2、投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（2〜8MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2.5MWで年280〜320万kWh発電</li>
                  <li>24h稼働で自家消費率90%超</li>
                  <li>投資回収 6〜8年（補助金後 4〜6年）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。
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
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              精密機器業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              シミュレーターで自社精密機器工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密機器業は恒温恒湿24h稼働・精度要求拡大・顧客CN要求の3重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>精度要求拡大に伴う電力需要増シナリオを比較する</li>
              <li>事例で示した9〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="precision-instruments-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/electronics-electricity-cost-review", title: "電子機器業の電気料金見直し", description: "精密電子部品の関連事例。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体業の電気料金見直し", description: "クリーン環境業種の類似事例。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工業種の関連事例。" },
              { href: "/pharmaceutical-electricity-cost-review", title: "製薬業の電気料金見直し", description: "クリーンルーム業種の類似事例。" },
              { href: "/research-facility-electricity-cost-review", title: "研究施設の電気料金見直し", description: "精密測定環境の関連事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "恒温恒湿空調・微細加工装置で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の精密機器業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社精密機器工場条件でリスクを確認する"
            description="恒温恒湿環境・微細加工装置・測定室・クリーン環境の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。精度要求拡大後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
