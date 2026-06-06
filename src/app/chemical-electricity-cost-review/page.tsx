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
  "化学業の電気料金見直しポイント｜石油化学コンビナート・コージェネ・カーボンニュートラルの契約最適化";
const pageDescription =
  "化学業（石油化学・基礎化学・精密化学）の電気料金見直しを解説。コンビナート24h連続稼働、停止コスト極大、自家発電（コージェネ）併用、カーボンニュートラル目標、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "化学業 電気料金 見直し",
    "石油化学 電気代",
    "化学プラント 電力契約",
    "コージェネ 自家発電",
    "化学工場 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/chemical-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/chemical-electricity-cost-review",
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
    label: "石油化学コンビナート（特別高圧・大規模連続稼働）",
    detail:
      "エチレン・プロピレン・ベンゼン製造などの石油化学コンビナートは、特別高圧（5,000〜30,000kW）規模の電力契約が一般的。24時間×365日連続稼働で年間使用量5,000万〜3億kWh、年間電気代15〜100億円規模の事業所も。停止コストが極大で、計画停止以外の停電は経営インパクト甚大。",
  },
  {
    label: "電解工程（クロル・アルカリ・水電解）",
    detail:
      "食塩電解（クロル・アルカリプロセス）でカセイソーダ・塩素・水素を製造する化学工程。電力消費が極めて大きく、製造コストの50〜70%が電気代という典型的な電力多消費業種。電解槽1セットで500〜2,000kWの常時負荷。",
  },
  {
    label: "蒸留・分離・反応工程",
    detail:
      "化学プラントの主力工程。蒸留塔のリボイラ・コンデンサ、反応器の攪拌・加熱・冷却、ガス圧縮機（コンプレッサー）が組み合わさる。1工程あたり数百〜数千kWの常時負荷で、複数工程の合算で工場全体の電力消費の30〜50%を占める。",
  },
  {
    label: "自家発電（コージェネ・産業用蒸気タービン）",
    detail:
      "化学業は熱・電力併給のコージェネが標準装備。1拠点で20〜200MW級のガスタービン・蒸気タービンを自家保有し、グリッドからの購入電力は不足分のみ。コージェネ発電比率が70〜90%に達する大手化学工場も多い。",
  },
  {
    label: "ユーティリティ設備（コンプレッサー・ポンプ・冷却塔）",
    detail:
      "化学プラントを支える付帯設備。コンプレッサー（100〜10,000kW）、循環ポンプ、冷却塔ファン、計装制御室が24h稼働。電力消費の15〜25%を占める。インバータ化の余地が大きい設備。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本化学工業協会の統計から、化学業の電気料金は売上高比3〜10%（電解業で15〜25%）、製造原価比5〜18%。中堅化学メーカーで年20〜100億円、大手石油化学コンビナートで年100〜500億円規模の電気代に達する。",
  },
  {
    label: "製品単位あたりの電力使用量",
    detail:
      "エチレン1t製造で350〜600 kWh、カセイソーダ1tで2,200〜2,800 kWh、塩素1tで2,500〜3,200 kWh、塩化ビニル1tで350〜500 kWh。電解業がもっとも電力集約的で、化学業全体の電力消費の中核。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模精密化学工場（200〜500名）で年間500〜3,000万kWh、中規模化学工場（500〜2,000名）で年間3,000万〜2億kWh、大規模石油化学コンビナート（2,000名超）で年間2億〜10億kWh。特別高圧契約＋大規模コージェネが標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額のコンビナート連続稼働への影響",
    detail:
      "化学業は24時間連続稼働で月間使用量が桁違いに大きく、燃料費調整額1円/kWhの変動でも中規模工場（年5,000万kWh）で年5,000万円の差。大手コンビナートでは年5億円超のインパクト。2022年以降4〜5円/kWhレンジで推移し、化学業の電気代上振れの最大要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間1億kWh使用の中規模化学工場で年4.18億円の負担、5年で20.9億円超。減免制度（年間1,000万kWh以上等）対象だが申請要件は厳格。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金はkWhベースで上乗せされ、化学業のような大量電力消費業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "カーボンニュートラル目標と電化対応",
    detail:
      "化学業界のカーボンニュートラル目標達成のため、ボイラー・加熱設備の電化、グリーン水素利用、CCUS（CO2回収・利用・貯留）導入が進行。電化により電力使用量が更に増加トレンド。",
  },
  {
    label: "コージェネ燃料費との連動",
    detail:
      "コージェネ発電比率が高い化学業では、グリッド購入電力単価上昇と同時にコージェネ燃料費（LNG・原油）も上昇。両方の影響を受けるため、エネルギー戦略の総合最適化が必須。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模精密化学・ファインケミカル工場（従業員200〜500名）",
    profile: "精密化学・受託合成製造／特別高圧 1,000〜3,000kW／年間 500〜3,000万kWh",
    annualCost: "年間電気代 1.5〜9 億円",
    note: "新電力切替・固定3年契約・LED化・反応器最適化で年8〜12%削減事例。電解業を含む工場では更に大きな効果。",
  },
  {
    size: "中規模化学工場（従業員500〜2,000名）",
    profile: "国内中堅化学メーカー基幹工場／特別高圧 5,000〜20,000kW／年間 3,000万〜2億kWh",
    annualCost: "年間電気代 9〜60 億円",
    note: "固定5年契約＋自家消費太陽光（5〜10MW）＋コージェネ拡張＋廃熱回収＋空調最適化で年10〜18%削減事例。",
  },
  {
    size: "大規模石油化学コンビナート（従業員2,000名超）",
    profile: "総合化学・石油化学コンビナート／特別高圧 20,000〜100,000kW／年間 2〜10億kWh",
    annualCost: "年間電気代 60〜300 億円",
    note: "1%の単価改善でも年6,000万〜3億円のインパクト。長期固定（10〜20年）契約＋大規模太陽光（30〜100MW）＋コージェネ＋オフサイトPPA＋CCUS実証が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅精密化学メーカーの年間11%削減（Before/After）",
    before: "西日本のファインケミカルメーカーA社の主力工場（特別高圧 2,500kW、年間 2,000万kWh、年間電気代 6億円）。市場連動プラン継続、LED未更新、反応器の温度制御最適化なし、コージェネなし。",
    after: "新電力切替（固定3年）／全照明LED化（投資 500万円）／反応器の温度制御最適化（バッチ管理AI導入）／コンプレッサー台数制御＋インバータ化／力率改善コンデンサ更新。",
    result: "年間電気代 6億円 → 5.34億円（▲11%、▲6,600万円）／契約 kW 2,500→2,300／投資回収 2年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅化学メーカー本社工場の年間18%削減",
    before: "中部地区の中堅化学メーカーB社の基幹工場（特別高圧 12,000kW、年間 1.2億kWh、年間電気代 36億円）。市場連動プランで2022〜2023年に月最大1.5億円の追加負担を経験。コージェネ稼働率も低位。",
    after: "固定5年プラン切替／自家消費太陽光 8MW（屋根45,000m²）／コージェネ稼働率向上施策／反応器熱回収導入／DR契約／需要家主導型PPA補助金活用／グリーン電力20%調達。",
    result: "年間電気代 36億円 → 29.5億円（▲18%、▲6.5億円）／契約 kW 12,000→10,500／投資回収 6.5年（補助金後 4.5年）",
  },
  {
    title: "事例3：大規模石油化学コンビナート年間25億円削減",
    before: "国内大手石油化学コンビナートC社（特別高圧 50,000kW、年間 4億kWh、年間電気代 120億円）。長期固定契約継続もコージェネ老朽化、電化シフト対応が遅延、CN対応も20%止まり。",
    after: "電力契約の15年長期固定締結／コージェネ更新（80→200MW）／自家消費太陽光 50MW＋蓄電池 30MWh／オフサイトPPA 30MW（再エネ100%対応）／CCUS実証導入／DR契約／GX補助・需要家主導型PPA活用。",
    result: "年間電気代 120億円 → 95億円（▲20.8%、▲25億円）／契約 kW 50,000→45,000／投資回収 10年（補助金後 7年）／CO₂削減 約120,000 t/年",
  },
];

const demandManagement = [
  {
    label: "コージェネ稼働率最適化",
    detail:
      "化学業のコージェネは需要変動に応じて稼働率を最適化することでグリッド購入電力▲30〜50%削減可能。電力単価上昇局面ではコージェネ運転比率を上げる戦略が有効。",
  },
  {
    label: "電解工程のバッチタイミング分散",
    detail:
      "複数電解槽を運用する場合、起動タイミングを30分〜1時間ずらすことでデマンドピーク抑制。中規模電解工場で契約電力5〜10%削減事例。",
  },
  {
    label: "コンプレッサー・ポンプのインバータ化",
    detail:
      "化学プラントの大型コンプレッサー（500〜10,000kW）、循環ポンプのインバータ化・台数制御で電力▲15〜25%削減。デマンドコントローラーと連動させると更に効果的。",
  },
  {
    label: "計画停止と需給逼迫期の連動",
    detail:
      "夏冬の電力需給逼迫期に計画的なメンテナンス停止を行うDRプログラム参加。電力会社からインセンティブ収入も得られ、年数千万〜数億円の収益化が可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "コンプレッサー・反応器・LED・廃熱回収・空調更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "化学業のような連続稼働業種で採択率が高い主力補助金。コンプレッサー・廃熱回収で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が広大、24h稼働で自家消費率が高い化学業と相性極良好。10〜50MW級でも対象。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "コージェネ更新・電化・CCUS・グリーン水素",
    rate: "1/2、上限数億〜数十億円",
    note: "カーボンニュートラル目標達成のための大型補助。コージェネ更新・CCUS導入の主力財源。",
  },
  {
    name: "再エネ賦課金減免制度",
    target: "年間1,000万kWh以上の電気多消費事業者",
    rate: "減免率による（最大80%）",
    note: "化学業の大多数が対象。年数億〜数十億円の負担軽減効果。原単位改善計画提出が必要。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "特別高圧契約で長期固定（5〜15年）への切替の検討余地があるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "コージェネ稼働率最適化の余地を試算したか",
  "工場敷地を活用した自家消費太陽光（10〜100MW）導入の試算を実施したか",
  "コンプレッサー・ポンプ・冷却塔のインバータ化を評価したか",
  "電解工程のバッチタイミング分散を実施したか",
  "廃熱回収・蒸気タービン拡張の費用対効果を評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当し、申請を実施したか",
  "GX補助・需要家主導型PPA補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "化学業の電気代水準はどれくらいですか？", answer: "売上高比3〜10%（電解業で15〜25%）、製造原価比5〜18%が業界平均です。中規模化学工場で年9〜60億円、大規模石油化学コンビナートで年60〜300億円規模の電気代になります。" },
  { question: "コージェネ自家発電を持つ化学工場でもグリッド契約は必要ですか？", answer: "必要です。コージェネが停止時のバックアップ、需要ピーク時の不足電力購入、メンテナンス時の安定供給確保が目的。発電比率70〜90%でもグリッド契約は維持されます。" },
  { question: "化学業に向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続稼働でベースロード極大、停止コスト極大の化学業は固定プラン推奨。市場高騰時の影響額が桁違いに大きく、製品価格への即時転嫁が困難なためです。長期15〜20年の固定プランも一般的。" },
  { question: "電化シフトで電気代はどれくらい増えますか？", answer: "中規模化学工場で重油・LNG加熱設備→電気ヒーター・電気ボイラー転換時、電力使用量が年30〜60%増加、契約電力が3,000〜10,000kW上振れする事例。CN目標で不可避だが、PPA補助金・GX補助組合せで投資回収7〜10年で実現可能。" },
  { question: "化学業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（コンプレッサー・廃熱回収・反応器）、需要家主導型PPA補助金（大規模太陽光）、脱炭素先行地域・GX補助（CCUS・コージェネ）、再エネ賦課金減免の4本柱です。複数組合せで採択率向上。" },
  { question: "再エネ賦課金減免制度の対象になりますか？", answer: "年間1,000万kWh以上の電気多消費事業者であれば対象。化学業の大多数が該当。減免率は原単位改善計画の達成度で決まり、最大80%減免（年数億〜数十億円規模の負担軽減）。申請要件が厳格で6〜12ヶ月かかります。" },
  { question: "自家消費型太陽光は化学工場で投資回収できますか？", answer: "工場敷地が広大、24h連続稼働の化学工場は業種別で最上位の相性。10MWで年1,100〜1,300万kWh発電、年1.1〜1.3億円削減、投資回収6〜8年（補助金後4〜6年）。コンビナート遊休地で30〜100MW級も検討余地。" },
  { question: "コンビナート全体のオフサイトPPAは現実的ですか？", answer: "現実的です。大手石油化学コンビナートで30〜100MW級のオフサイトPPA契約事例多数。長期15〜20年契約で再エネ100%＋単価安定化を実現。CN目標達成の主力手段になっています。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本化学工業協会（JCIA）", url: "https://www.nikkakyo.org/" },
  { name: "石油化学工業協会", url: "https://www.jpca.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ChemicalElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/chemical-electricity-cost-review"
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
          <span className="text-slate-800">化学業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            化学業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            化学業（石油化学・基礎化学・精密化学）は、コンビナート24時間連続稼働、停止コスト極大、電解業の極端な電力消費という典型的エネルギー多消費業種です。コージェネ自家発電を併用しつつ、グリッド購入電力単価、燃料費調整額、再エネ賦課金、容量拠出金、カーボンニュートラル対応の電化シフトという複合的な経営課題に直面しています。本ページでは化学業特有の電力負荷特性、業界平均水準、規模別事例、コージェネ最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>化学業の電力使用プロファイル（コンビナート／電解／反応／コージェネ／ユーティリティ）</li>
              <li>業界平均の電気代水準（売上高比3〜25%）と単位製品単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金・電化シフトの影響</li>
              <li>規模別（精密化学／中規模化学／コンビナート）の電気代と削減事例3件（Before/After）</li>
              <li>コージェネ稼働率最適化・電解バッチ分散・廃熱回収の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・再エネ賦課金減免の組合せ活用</li>
              <li>化学業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              化学業の電力使用特性 — コンビナート・電解・反応・コージェネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業の電力使用は『石油化学コンビナート（特別高圧）／電解工程（電力多消費）／蒸留・反応／コージェネ自家発電／ユーティリティ』の5層構造です。コージェネ発電比率と電解工程比率で電力契約の最適点が大きく変わるため、自社設備構成の把握が見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比3〜25%、電解業で更に高い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業の電気代水準は事業形態（石油化学・電解・精密化学・基礎化学）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本化学工業協会・石油化学工業協会・経産省工業統計から整理。実値は電解比率・コージェネ発電比率で2〜5倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              化学業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・CN対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。コージェネ燃料費との連動、CN対応の電化シフトは業界固有の構造要因です。
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
              規模別の削減事例3件 — 精密化学500名／中堅化学2,000名／コンビナート
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/pharmaceutical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製薬業の電気料金見直し</Link>
              、{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場の電気代削減</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              コージェネ最適化とカーボンニュートラル対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業のエネルギー戦略の中核はコージェネ運用とCN対応の両立。グリッド購入電力単価上昇局面ではコージェネ発電比率を上げ、CN目標達成のために再エネ・水素・CCUSを段階導入するという複層的アプローチが必要です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コージェネ運用最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>需要変動に応じた稼働率調整</li>
                  <li>電力単価上昇局面で発電比率UP</li>
                  <li>LNG価格と電力単価の相対比較</li>
                  <li>蒸気タービン拡張で熱回収最大化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">CN対応の段階導入</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>自家消費太陽光10〜50MW（再エネ部分置換）</li>
                  <li>オフサイトPPA30〜100MW（コンビナート全体）</li>
                  <li>グリーン水素利用（重油代替）</li>
                  <li>CCUS実証（カーボンキャプチャ）</li>
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
              化学業のデマンド管理 — コージェネ・電解・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業のデマンド管理は『コージェネ稼働率最適化』『電解バッチタイミング分散』『コンプレッサー・ポンプインバータ化』『計画停止DR連動』の4論点を組合せて最適化します。
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
              燃料費調整・市場連動プランの影響 — コンビナート規模の上振れ感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石油化学コンビナートは24時間連続稼働かつ電力使用量が桁違いに大きく、市場価格高騰局面での影響額が事業収支に直撃します。固定プラン・長期契約は経営判断レベルの論点です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>連続稼働・大量使用で価格変動影響が桁違い</li>
                  <li>石油化学・電解業で停止コスト極大</li>
                  <li>製品価格への即時転嫁が困難（汎用樹脂等）</li>
                  <li>CN対応の長期投資計画と長期固定契約の親和性</li>
                  <li>原料費・人件費上昇局面で電力コスト固定化のメリット大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>汎用樹脂等の市場価格への即時転嫁が困難</li>
                  <li>JEPX 80円/kWh級高騰時に年数十億円の追加負担</li>
                  <li>コージェネ稼働率調整の柔軟性が必要</li>
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
              業種特有の節電・省エネ施策 — 廃熱回収・コージェネ・大規模再エネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業向けの省エネ施策は『廃熱回収システム』『コージェネ拡張・更新』『大規模太陽光（10〜100MW）』『コンプレッサーインバータ化』が4本柱。投資回収3〜10年で実行可能な施策が多数存在します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃熱回収システム</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>反応器・蒸留塔・乾燥工程の廃熱再利用</li>
                  <li>蒸気使用量▲30〜50%、電力▲10〜20%</li>
                  <li>SII補助1/2、投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コージェネ拡張・更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>20〜200MW級ガスタービン更新</li>
                  <li>電力＋蒸気同時供給、総合効率80%</li>
                  <li>GX補助1/2、投資回収10〜15年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">大規模太陽光（10〜100MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>10MWで年1,100〜1,300万kWh発電</li>
                  <li>連続稼働で自家消費率95%超</li>
                  <li>投資回収 6〜8年（補助金後 4〜6年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コンプレッサー・ポンプインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>500〜10,000kW級でインバータ＋台数制御</li>
                  <li>電力▲15〜25%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・再エネ賦課金減免
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜4年短縮できます。再エネ賦課金減免制度は年数億〜数十億円規模の負担軽減効果。
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
              化学業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社化学工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学業は連続稼働・電解・コージェネ・CN対応の電化シフトという4重のエネルギー戦略課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>電化シフト後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した11〜21%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="chemical-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/pharmaceutical-electricity-cost-review", title: "製薬業の電気料金見直し", description: "化学関連分野（原薬製造）の関連事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "重工業類似事例（電炉メーカー）。" },
              { href: "/non-ferrous-metal-electricity-cost-review", title: "非鉄金属業の電気料金見直し", description: "アルミ・銅精錬の類似事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "コンプレッサー・廃熱回収で活用できる主力補助金。" },
              { href: "/renewable-energy-surcharge-reduction-system", title: "再エネ賦課金減免制度", description: "電気多消費業種の主力負担軽減制度。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の化学業に直結するリスク。" },
            ]}
          />

          <ContentCta
            heading="自社化学工場条件でリスクを確認する"
            description="コンビナート・電解・コージェネ・反応工程の電力使用パターンをもとに、電気料金の上振れ幅をシミュレーターで試算できます。電化シフト後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
