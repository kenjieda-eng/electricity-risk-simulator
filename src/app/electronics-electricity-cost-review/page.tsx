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
  "電子機器業の電気料金見直しポイント｜SMT実装・リフロー炉・検査装置の契約最適化";
const pageDescription =
  "電子機器業（家電・産業機器・PCB実装）の電気料金見直しを解説。SMT実装ライン、リフロー炉・はんだ付け、検査装置・恒温恒湿環境、試作と量産の電力差、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電子機器業 電気料金 見直し",
    "SMT実装 電気代",
    "リフロー炉 電力契約",
    "電子部品工場 電気代",
    "検査装置 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electronics-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electronics-electricity-cost-review",
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
    label: "SMT実装ライン（プリント基板実装）",
    detail:
      "電子機器製造の中核工程。SMT（Surface Mount Technology）実装ラインはチップマウンタ（高速モーター・吸着ヘッド）、印刷機、検査装置が並ぶ。1ラインで100〜500kWの動力負荷、中規模電子機器工場で複数ライン合算500〜2,000kWの常時稼働。",
  },
  {
    label: "リフロー炉・はんだ付け（加熱工程）",
    detail:
      "プリント基板のはんだ実装にはリフロー炉（赤外線・熱風）が使用される。1台あたり30〜200kWの加熱負荷、複数ライン並列で工場全体電力の20〜30%を占める。半田槽（フローはんだ）も併用される。",
  },
  {
    label: "検査装置・試験環境（恒温恒湿）",
    detail:
      "電子機器の検査・試験には恒温恒湿環境が必須。高温高湿試験、低温試験、ESD試験、振動試験、機能検査装置が連続稼働。試験室の空調＋装置電力で工場全体電力の10〜15%を占める。",
  },
  {
    label: "クリーンルーム（部分的）",
    detail:
      "高品質要求の電子機器（医療用・産業用）製造ではクラス1万〜10万のクリーンルームを併設。半導体ほどではないが、空調＋FFUで100〜500kWの常時負荷が発生する。",
  },
  {
    label: "試作・量産・コンプレッサー",
    detail:
      "試作段階では装置稼働率が低く電力使用量も少ないが、量産段階に入ると装置フル稼働で電力使用量が2〜4倍に。また工場全体を支えるコンプレッサー、空調、照明、廃熱処理が常時稼働。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・電子情報技術産業協会（JEITA）の統計から、電子機器業の電気料金は売上高比1〜4%（民生用機器で1〜2%、産業用機器で2〜5%）。中規模電子機器工場で年5〜30億円、大手家電メーカー基幹工場で年50〜200億円規模の電気代に達する。",
  },
  {
    label: "製品単位あたりの電力使用量",
    detail:
      "プリント基板1枚の実装で0.5〜3kWh、家電製品1台（テレビ・冷蔵庫等）で15〜80kWh、産業用機器1台で50〜500kWh。製品サイズと部品実装数に応じて電力使用量が比例。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模電子機器・部品工場（200〜500名）で年間500〜2,000万kWh、中規模電子機器工場（500〜2,000名）で年間2,000万〜1.5億kWh、大手家電メーカー基幹工場（2,000名超）で年間1.5〜10億kWh。特別高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の量産工場への影響",
    detail:
      "電子機器業は量産フェーズで24時間稼働の3交代制を採用するケースが多く、燃料費調整額1円/kWhの変動で中規模工場（年5,000万kWh）で年5,000万円の差。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間5,000万kWh使用の中規模工場で年2.09億円の負担、5年で10.45億円超。減免制度（年間1,000万kWh以上等）対象。",
  },
  {
    label: "海外工場との競争",
    detail:
      "東南アジア・中国・台湾の海外電子機器工場との価格競争で、国内工場の電気代上昇が原価競争力を直撃。家電メーカーの国内生産シェア低下の一因に。",
  },
  {
    label: "EV・5G・IoT機器の需要拡大",
    detail:
      "EV用パワエレ、5G基地局、IoT機器の需要急増で電子機器業の生産量は増加トレンド。生産量増加で電力使用量も比例増加。",
  },
  {
    label: "顧客のサプライチェーンCN要求",
    detail:
      "Apple・自動車メーカー・通信キャリア等の大手顧客からサプライチェーン全体CN目標達成を要求。電子機器メーカー側に再エネ100%調達・PPA契約が事実上必須化。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模電子機器・部品工場（従業員200〜500名）",
    profile: "中小電子機器メーカー／高圧 1,000〜3,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "新電力切替・固定3年契約・SMT実装ラインインバータ化・LED化で年8〜12%削減事例。",
  },
  {
    size: "中規模電子機器工場（従業員500〜2,000名）",
    profile: "国内中堅電子機器メーカー／特別高圧 3,000〜15,000kW／年間 2,000万〜1.5億kWh",
    annualCost: "年間電気代 6〜45 億円",
    note: "固定5年契約＋自家消費太陽光（2〜5MW）＋リフロー炉熱回収＋空調最適化＋グリーン電力部分調達で年10〜14%削減事例。",
  },
  {
    size: "大手家電メーカー基幹工場（従業員2,000名超）",
    profile: "パナソニック・ソニー級／特別高圧 20,000〜80,000kW／年間 1.5〜10億kWh",
    annualCost: "年間電気代 45〜300 億円",
    note: "1%の単価改善でも年4,500万〜3億円のインパクト。長期固定（10〜15年）契約＋大規模太陽光（10〜30MW）＋オフサイトPPA＋DR契約が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅電子部品工場の年間10%削減（Before/After）",
    before: "東日本の電子部品メーカーA社の主力工場（高圧 2,500kW、年間 1,800万kWh、年間電気代 5.4億円）。市場連動プラン継続、SMTラインインバータなし、リフロー炉熱回収なし、LED未更新。",
    after: "新電力切替（固定3年）／SMTラインインバータ化（投資 2,500万円）／リフロー炉熱回収導入／全照明LED化／コンプレッサー台数制御。",
    result: "年間電気代 5.4億円 → 4.86億円（▲10%、▲5,400万円）／契約 kW 2,500→2,300／投資回収 2年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模電子機器工場の年間13%削減",
    before: "中部地区の中堅電子機器メーカーB社の基幹工場（特別高圧 8,000kW、年間 6,000万kWh、年間電気代 18億円）。市場連動プランで2022〜2023年に月最大1.5億円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 3MW（屋根18,000m²）／リフロー炉熱回収＋温度制御最適化／検査装置空調最適化／DR契約／需要家主導型PPA補助金活用／グリーン電力20%調達。",
    result: "年間電気代 18億円 → 15.66億円（▲13%、▲2.34億円）／契約 kW 8,000→7,200／投資回収 6年（補助金後 4年）",
  },
  {
    title: "事例3：大手家電メーカー基幹工場年間12億円削減",
    before: "大手家電メーカーC社の基幹工場（特別高圧 40,000kW、年間 3億kWh、年間電気代 90億円）。長期固定契約継続もEV・5G需要拡大で電力使用量増加。顧客（自動車メーカー）のCN要求対応中。",
    after: "電力契約の12年長期固定締結／自家消費太陽光 15MW＋蓄電池 10MWh／オフサイトPPA 30MW（再エネ100%対応）／SMTライン・リフロー炉省エネ運転制御／DR契約／需要家主導型PPA＋GX補助活用。",
    result: "年間電気代 90億円 → 78億円（▲13.3%、▲12億円）／契約 kW 40,000→36,000／投資回収 8年（補助金後 5.5年）／CO₂削減 約25,000 t/年",
  },
];

const demandManagement = [
  {
    label: "SMT実装ライン・チップマウンタの起動シフト",
    detail:
      "複数SMTラインの同時起動を避け、ライン別に時間差で起動。3交代制工場では夜勤シフト時刻の調整で5〜10%のピーク削減が可能。",
  },
  {
    label: "リフロー炉の温度制御最適化",
    detail:
      "リフロー炉の温度プロファイル最適化＋廃熱回収で電力▲15〜25%削減。複数炉の運転スケジュール調整も有効。",
  },
  {
    label: "検査装置・試験室空調の最適化",
    detail:
      "恒温恒湿試験室・検査ラインの空調をVAV制御化、装置稼働状況に応じた制御で電力▲15〜20%削減。投資回収2〜3年。",
  },
  {
    label: "コンプレッサー・空調のインバータ化",
    detail:
      "工場全体の大型コンプレッサー、塗装ブース空調はインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "SMT実装ライン・リフロー炉・コンプレッサー・LED・空調更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "電子機器業のような連続稼働業種で採択率が高い主力補助金。SMTライン・リフロー炉で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が比較的広く、24h稼働の電子機器業と相性良好。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "リフロー炉電化・大規模PPA・コージェネ",
    rate: "1/2、上限数億円",
    note: "CN対応のための大型補助。顧客サプライチェーンCN要求対応に整合。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小電子機器・部品工場の設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小電子機器メーカーで活用可能。LED・空調・SMTライン更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "SMT実装ライン・チップマウンタのインバータ化・最新世代化を評価したか",
  "工場敷地を活用した自家消費太陽光（1〜10MW）導入の試算を実施したか",
  "リフロー炉の温度制御最適化・廃熱回収を評価したか",
  "検査装置・試験室空調のVAV制御を導入したか",
  "コンプレッサー・空調・照明のインバータ化＋LED化を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "顧客（IT・自動車）のサプライチェーンCN要求対応のグリーン電力調達計画があるか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
];

const faqItems = [
  { question: "電子機器業の電気代水準はどれくらいですか？", answer: "売上高比1〜4%（民生用機器で1〜2%、産業用機器で2〜5%）が業界平均です。中規模電子機器工場で年6〜45億円、大手家電メーカー基幹工場で年45〜300億円規模の電気代になります。" },
  { question: "SMT実装ラインで電気代はどう変動しますか？", answer: "SMT実装は量産フェーズで24時間稼働の3交代制を採用するケースが多く、稼働率に応じて電力使用量が2〜4倍変動します。試作フェーズと量産フェーズで契約電力の最適点が異なるため、量産化タイミングでの契約見直しが重要です。" },
  { question: "リフロー炉の熱回収でどれだけ電気代を下げられますか？", answer: "リフロー炉廃熱を周辺設備の予熱・湯沸かしに再利用することで、リフロー炉電力▲15〜25%削減事例多数。中規模電子機器工場で年5,000万〜1.5億円規模の削減、SII補助1/2活用で投資回収2〜3年。" },
  { question: "電子機器業に向く電力プランは固定ですか、市場連動ですか？", answer: "量産フェーズで24時間連続稼働の電子機器工場は固定プラン推奨。市場高騰時の影響額が大きく、顧客への即時転嫁が困難なためです。家電メーカーは長期固定（10〜15年）契約も標準。" },
  { question: "顧客（Apple・自動車メーカー）のCN要求にどう対応すべきですか？", answer: "オフサイトPPA契約（再エネ100%対応）と非化石証書購入の組合せが標準。Tier1サプライヤーは2030年までの段階的対応計画策定が一般的で、対応しない場合は受注機会喪失リスクも。" },
  { question: "自家消費型太陽光は電子機器工場で投資回収できますか？", answer: "屋根面積10,000m²以上、24h連続稼働の電子機器工場は業種別で上位の相性。3MWで年330〜390万kWh発電、年3,000〜4,000万円削減、投資回収6〜8年（補助金後4〜6年）が目安。" },
  { question: "海外工場との価格競争で電気代上昇分はどう対処できますか？", answer: "国内工場の電気代上昇は原価競争力を直撃しますが、省エネ投資（年7〜13%削減）と再エネ調達による顧客プレミアム獲得で相殺可能。グリーン電力対応で『脱炭素サプライヤー』としての差別化戦略が有効。" },
  { question: "電子機器業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（SMTライン・リフロー炉）、需要家主導型PPA補助金（屋上太陽光）、脱炭素先行地域・GX補助、中小企業補助の4本柱です。複数組合せで採択率向上。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "電子情報技術産業協会（JEITA）", url: "https://www.jeita.or.jp/" },
  { name: "一般社団法人 日本電子回路工業会（JPCA）", url: "https://www.jpca.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function ElectronicsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/electronics-electricity-cost-review"
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
          <span className="text-slate-800">電子機器業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電子機器業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電子機器業（家電・産業機器・PCB実装）は、SMT実装ライン、リフロー炉、検査装置・恒温恒湿環境が並列する大規模製造業です。EV・5G・IoT需要拡大、海外工場との価格競争、顧客サプライチェーンCN要求といった経営課題に直面しています。本ページでは電子機器業特有の電力負荷特性、業界平均水準、規模別事例、SMT・リフロー炉最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>電子機器業の電力使用プロファイル（SMT／リフロー炉／検査／クリーン環境）</li>
              <li>業界平均の電気代水準（売上高比1〜5%）と単位製品単価</li>
              <li>燃料費調整額・再エネ賦課金・EV/5G需要拡大の影響</li>
              <li>規模別（中小部品工場／中規模電子機器／大手家電）の電気代と削減事例3件（Before/After）</li>
              <li>SMTライン・リフロー炉省エネの費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>電子機器業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電子機器業の電力使用特性 — SMT・リフロー炉・検査装置
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業の電力使用は『SMT実装ライン／リフロー炉・はんだ付け／検査装置・試験環境／クリーンルーム（部分的）／コンプレッサー・空調』の5層構造です。SMTライン・リフロー炉が電力消費の中核で、量産フェーズと試作フェーズで電力プロファイルが大きく変わります。
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
              業界平均の電気代水準 — 売上高比1〜5%、産業用で更に高い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業の電気代水準は事業形態（民生用・産業用・電子部品）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 電子情報技術産業協会・日本電子回路工業会・経産省工業統計から整理。実値は製品種別・実装難度で1.5〜3倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電子機器業の主要な電気代上昇要因 — 燃料費・賦課金・海外競争・CN要求
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、海外工場との価格競争、顧客サプライチェーンCN要求、EV/5G需要拡大という業界固有要因が並列します。
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
              規模別の削減事例3件 — 中小部品工場／中規模電子機器／大手家電
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体業の電気料金見直し</Link>
              、{" "}
              <Link href="/precision-instruments-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">精密機器業の電気料金見直し</Link>
              、{" "}
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              試作と量産の電力差・量産化タイミングでの契約見直し
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業の電力プロファイルは試作フェーズと量産フェーズで大きく異なります。試作段階の装置稼働率は20〜40%だが、量産フェーズに入ると80〜95%に上昇し電力使用量が2〜4倍に。量産化タイミングでの契約電力見直しが経営戦略の中核です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">試作フェーズの特徴</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>装置稼働率20〜40%</li>
                  <li>SMTライン1ライン稼働</li>
                  <li>検査装置・試験室は常時稼働</li>
                  <li>契約電力は実需要の半分前後</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">量産フェーズの特徴</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>装置稼働率80〜95%</li>
                  <li>SMT複数ライン3交代制</li>
                  <li>リフロー炉フル稼働</li>
                  <li>契約電力2〜4倍に上振れ</li>
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
              電子機器業のデマンド管理 — SMT起動シフト・リフロー最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業のデマンド管理は『SMTライン・チップマウンタ起動シフト』『リフロー炉温度制御最適化』『検査装置・試験室空調最適化』『コンプレッサーインバータ化』の4論点を組合せて最適化します。
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
              燃料費調整・市場連動プランの影響 — 量産工場の感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業の量産工場は24時間連続稼働でベースロードが大きく、海外工場との価格競争で顧客への即時転嫁が困難なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プラン採用は経営判断レベルの論点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>量産フェーズで24時間連続稼働</li>
                  <li>海外工場との価格競争で転嫁困難</li>
                  <li>EV/5G需要拡大で電力使用量増加</li>
                  <li>顧客（Apple・自動車）のCN要求と整合</li>
                  <li>長期投資回収計画の予算精度確保</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>海外工場との価格競争で原価競争力低下</li>
                  <li>顧客のCN要求と矛盾</li>
                  <li>JEPX 80円/kWh級高騰時に年数億円の追加負担</li>
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
              業種特有の節電・省エネ施策 — SMT・リフロー・コンプレッサー・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業向けの省エネ施策は『SMT実装ラインインバータ化』『リフロー炉熱回収＋温度制御』『コンプレッサー台数制御』『自家消費型太陽光（3〜15MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">SMTライン最新世代化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>チップマウンタ最新世代化</li>
                  <li>電力▲15〜20%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">リフロー炉熱回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>廃熱の予熱・湯沸かし再利用</li>
                  <li>電力▲15〜25%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コンプレッサー台数制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>200〜2,000kW級のインバータ化</li>
                  <li>電力▲20〜35%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（3〜15MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>3MWで年330〜390万kWh発電</li>
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
              電子機器業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。
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
              電子機器業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社電子機器工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電子機器業はSMT量産・海外競争・顧客CN要求・EV/5G需要拡大の4重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>量産化タイミング前後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した10〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="electronics-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体業の電気料金見直し", description: "半導体製造の類似事例。" },
              { href: "/precision-instruments-electricity-cost-review", title: "精密機器業の電気料金見直し", description: "精密加工業種の類似事例。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "EV電装部品の関連業種。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工の関連事例。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立ライン中心の関連事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "SMTライン・リフロー炉で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の電子機器業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社電子機器工場条件でリスクを確認する"
            description="SMTライン・リフロー炉・検査装置・クリーンルームの電力使用パターンをもとに、電気料金の上振れ幅をシミュレーターで試算できます。量産化タイミングでのシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
