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
  "プラスチック・樹脂業の電気料金見直しポイント｜射出成形・押出成形・金型温調の契約最適化";
const pageDescription =
  "プラスチック・樹脂業（射出成形・押出成形・ブロー成形・樹脂加工）の電気料金見直しを解説。射出成形機の加熱冷却サイクル、押出成形の連続運転、金型温調、乾燥工程、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "プラスチック 電気料金 見直し",
    "射出成形機 電気代",
    "押出成形 電力契約",
    "樹脂工場 電気代",
    "金型温調 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/plastic-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/plastic-electricity-cost-review",
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
    label: "射出成形機（加熱冷却サイクル）",
    detail:
      "プラスチック業の中核設備。射出成形機（50t〜2,000t型締力）の加熱シリンダー、油圧／電動駆動、冷却機が連続稼働。1台あたり20〜500kWの動力負荷、中規模成形工場で10〜50台並列稼働、工場全体電力の40〜60%を占める。",
  },
  {
    label: "押出成形・ブロー成形（連続運転）",
    detail:
      "フィルム・パイプ・容器の連続成形ライン。押出機（スクリュー駆動・加熱シリンダー）、ブロー成形機、シート成形機が24時間連続稼働。1ラインで50〜300kWの常時負荷、複数ライン並列で工場全体電力の25〜40%を占める。",
  },
  {
    label: "金型温調・冷却装置",
    detail:
      "射出成形・押出成形の品質維持に必須の金型温調装置（チラー）、冷却塔、冷凍機が24時間連続稼働。中規模成形工場で200〜800kWの常時負荷、工場全体電力の15〜25%を占める。",
  },
  {
    label: "原料乾燥工程",
    detail:
      "プラスチック原料（PA、PC、PETなど）の乾燥工程。除湿乾燥機・ホッパー乾燥機が成形機ごとに併設、1台あたり10〜50kWの常時負荷。複数台並列で工場全体電力の10〜15%を占める。",
  },
  {
    label: "粉砕リサイクル・再生樹脂",
    detail:
      "成形不良品・廃材の粉砕リサイクル工程。粉砕機、ペレタイザー、ふるい分け装置が稼働。プラスチック循環経済推進でリサイクル工程が拡大トレンド、電力使用量も増加傾向。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本プラスチック工業連盟の統計から、プラスチック業の電気料金は売上高比3〜8%（射出成形専業で4〜10%）、製造原価比5〜15%。中規模成形工場で年3〜15億円、大手樹脂加工メーカーで年20〜100億円規模の電気代に達する。",
  },
  {
    label: "製品単位あたりの電力使用量",
    detail:
      "射出成形品1tで800〜1,800kWh、押出成形品1tで500〜1,200kWh、ブロー成形品1tで400〜900kWh、再生樹脂1tで150〜350kWh。射出成形がもっとも電力集約的。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模成形工場（80〜300名）で年間500〜2,000万kWh、中規模樹脂加工工場（300〜1,000名）で年間2,000万〜6,000万kWh、大手樹脂加工メーカー（1,000名超）で年間6,000万〜3億kWh。高圧・特別高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の射出成形24h稼働への影響",
    detail:
      "プラスチック業は射出成形・押出成形で24時間連続稼働、燃料費調整額1円/kWhの変動で中規模工場（年3,000万kWh）で年3,000万円の差。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間3,000万kWh使用の中規模樹脂工場で年1.254億円の負担、5年で6.27億円。減免制度（年間1,000万kWh以上等）対象。",
  },
  {
    label: "電動式射出成形機への転換",
    detail:
      "従来の油圧式射出成形機から電動式（サーボモーター駆動）への転換が加速。電動式は油圧式より電力▲30〜50%削減可能だが、設備投資が必要。CN対応も含めて転換が進行中。",
  },
  {
    label: "顧客（自動車・電機・家電）のサプライチェーンCN要求",
    detail:
      "自動車・電機・家電メーカー等の大手顧客からサプライチェーン全体CN目標達成を要求。プラスチック業側に再エネ100%調達が事実上必須化。",
  },
  {
    label: "プラスチック循環経済対応",
    detail:
      "プラスチック資源循環促進法（2022年施行）でリサイクル比率の向上が要求。再生樹脂使用比率拡大に伴う粉砕・ペレタイズ電力増加トレンド。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模成形工場（従業員80〜300名）",
    profile: "中小射出成形・押出成形業者／高圧 500〜2,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "新電力切替・固定3年契約・電動式射出成形機導入・LED化で年8〜12%削減事例。",
  },
  {
    size: "中規模樹脂加工工場（従業員300〜1,000名）",
    profile: "中堅樹脂加工メーカー／高圧／特別高圧 2,000〜6,000kW／年間 2,000万〜6,000万kWh",
    annualCost: "年間電気代 6〜18 億円",
    note: "固定5年契約＋自家消費太陽光（1〜3MW）＋電動式射出成形機導入＋金型温調最適化＋空調最適化で年10〜15%削減事例。",
  },
  {
    size: "大手樹脂加工メーカー（従業員1,000名超）",
    profile: "全国展開の樹脂加工大手／特別高圧 6,000〜20,000kW／年間 6,000万〜3億kWh",
    annualCost: "年間電気代 18〜90 億円",
    note: "1%の単価改善でも年1,800万〜9,000万円のインパクト。長期固定（10〜15年）契約＋大規模太陽光（3〜10MW）＋オフサイトPPA＋DR契約が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅成形工場の年間11%削減（Before/After）",
    before: "東日本の射出成形メーカーA社の主力工場（高圧 1,800kW、年間 1,400万kWh、年間電気代 4.2億円）。市場連動プラン継続、油圧式射出成形機継続使用、金型温調最適化なし、LED未更新。",
    after: "新電力切替（固定3年）／油圧式→電動式射出成形機更新（投資 3億円、10台）／金型温調インバータ化／全照明LED化／コンプレッサー台数制御。",
    result: "年間電気代 4.2億円 → 3.74億円（▲11%、▲4,600万円）／契約 kW 1,800→1,550／投資回収 6.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模樹脂加工メーカーの年間14%削減",
    before: "中部地区の中堅樹脂加工メーカーB社の基幹工場（特別高圧 4,000kW、年間 3,200万kWh、年間電気代 9.6億円）。市場連動プランで2022〜2023年に月最大1.2億円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 2.5MW（屋根15,000m²）／電動式射出成形機更新（20台）／金型温調＋冷却塔最適化／原料乾燥機効率改善／DR契約／需要家主導型PPA補助金活用／グリーン電力25%調達。",
    result: "年間電気代 9.6億円 → 8.26億円（▲14%、▲1.34億円）／契約 kW 4,000→3,500／投資回収 6年（補助金後 4年）",
  },
  {
    title: "事例3：大手樹脂加工メーカー年間9億円削減",
    before: "全国展開の大手樹脂加工メーカーC社の基幹工場（特別高圧 15,000kW、年間 1.5億kWh、年間電気代 45億円）。長期固定契約継続も顧客（自動車・電機）のCN要求対応中。粉砕リサイクル工程拡大で電力使用量増加。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 10MW＋蓄電池 5MWh／オフサイトPPA 20MW（再エネ100%対応）／電動式射出成形機への全面切替／金型温調AI最適化／粉砕リサイクル効率化／DR契約／需要家主導型PPA＋GX補助活用。",
    result: "年間電気代 45億円 → 36億円（▲20%、▲9億円）／契約 kW 15,000→13,000／投資回収 8年（補助金後 5.5年）／CO₂削減 約18,000 t/年",
  },
];

const demandManagement = [
  {
    label: "射出成形機の起動シフト",
    detail:
      "複数射出成形機の同時起動を避け、ライン別に時間差で起動。3交代制工場では夜勤シフト時刻の調整で5〜10%のピーク削減が可能。電動式射出成形機ではAI制御による更なる最適化も。",
  },
  {
    label: "金型温調・冷却塔のインバータ化",
    detail:
      "金型温調装置・冷却塔ファンのインバータ化・台数制御で電力▲15〜25%削減。中規模樹脂工場で年5,000万〜1億円規模の削減事例。",
  },
  {
    label: "原料乾燥機の効率化",
    detail:
      "除湿乾燥機・ホッパー乾燥機の高効率化、乾燥工程の予熱・廃熱利用で電力▲10〜20%削減。複数台並列の効率化が中核。",
  },
  {
    label: "コンプレッサー・空調のインバータ化",
    detail:
      "工場全体の大型コンプレッサー、空調はインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "電動式射出成形機・金型温調・コンプレッサー・LED・空調更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "プラスチック業のような連続稼働業種で採択率が高い主力補助金。電動式射出成形機更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が比較的広く、24h稼働のプラスチック業と相性良好。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "電動式射出成形機・リサイクル設備・大規模PPA",
    rate: "1/2、上限数億円",
    note: "CN対応のための大型補助。プラスチック資源循環促進法対応にも整合的。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小成形・樹脂加工業の設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小成形業で活用可能。LED・空調・成形機更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "油圧式→電動式射出成形機更新による電力削減を試算したか",
  "工場敷地を活用した自家消費太陽光（1〜10MW）導入の試算を実施したか",
  "金型温調・冷却塔のインバータ化を評価したか",
  "原料乾燥機の高効率化・予熱利用を検討したか",
  "コンプレッサー・空調のインバータ化＋LED化を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "顧客（自動車・電機・家電）のサプライチェーンCN要求対応のグリーン電力調達計画があるか",
  "SII省エネ補助金・需要家主導型PPA補助金・GX補助の組合せ申請を検討したか",
];

const faqItems = [
  { question: "プラスチック・樹脂業の電気代水準はどれくらいですか？", answer: "売上高比3〜8%（射出成形専業で4〜10%）、製造原価比5〜15%が業界平均です。中規模樹脂加工工場で年6〜18億円、大手樹脂加工メーカーで年18〜90億円規模の電気代になります。" },
  { question: "電動式射出成形機への更新で電気代はどれくらい下がりますか？", answer: "油圧式から電動式（サーボモーター駆動）への更新で電力▲30〜50%削減事例多数。中規模成形工場で年5,000万〜1.5億円規模の削減、SII補助1/2活用で投資回収5〜7年。CN対応とも整合的。" },
  { question: "プラスチック業に向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続稼働で射出成形・押出成形の電力が大きいプラスチック業は固定プラン推奨。市場高騰時の影響額が大きく、顧客への即時転嫁が困難なためです。長期固定（10〜15年）契約も標準。" },
  { question: "金型温調の最適化でどれだけ電気代を下げられますか？", answer: "金型温調装置・冷却塔のインバータ化＋台数制御で電力▲15〜25%削減事例多数。中規模樹脂工場で年5,000万〜1億円規模の削減、SII補助1/2活用で投資回収2〜3年。" },
  { question: "自家消費型太陽光はプラスチック工場で投資回収できますか？", answer: "工場敷地が比較的広く、24h連続稼働のプラスチック工場は業種別で上位の相性。2.5MWで年280〜320万kWh発電、年2,500〜3,200万円削減、投資回収6〜8年（補助金後4〜6年）が目安。" },
  { question: "顧客（自動車・電機）のCN要求にどう対応すべきですか？", answer: "オフサイトPPA契約（再エネ100%対応）と非化石証書購入の組合せが標準。自動車・電機業界のサプライチェーン全体CN目標達成のため、対応しない場合は受注機会喪失リスクも。" },
  { question: "プラスチック資源循環促進法でリサイクル工程が増えた場合の電力影響は？", answer: "粉砕・ペレタイズ工程の追加で工場全体電力使用量が10〜20%増加する事例が多いです。リサイクル設備の高効率化（粉砕機インバータ化など）で電力増加を抑制可能、GX補助1/2活用で投資回収3〜5年。" },
  { question: "プラスチック・樹脂業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（電動式射出成形機・金型温調）、需要家主導型PPA補助金（屋上太陽光）、脱炭素先行地域・GX補助（リサイクル設備）、中小企業補助の4本柱です。複数組合せで採択率向上。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本プラスチック工業連盟（JPIF）", url: "https://www.jpif.gr.jp/" },
  { name: "日本プラスチック機械工業会", url: "https://www.japan-pmi.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PlasticElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/plastic-electricity-cost-review"
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
          <span className="text-slate-800">プラスチック・樹脂業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            プラスチック・樹脂業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            プラスチック・樹脂業（射出成形・押出成形・ブロー成形・樹脂加工）は、射出成形機の加熱冷却サイクル、押出成形の連続運転、金型温調、原料乾燥という典型的な製造業です。油圧式→電動式射出成形機への転換、顧客（自動車・電機・家電）のサプライチェーンCN要求、プラスチック資源循環促進法対応という経営課題に直面しています。本ページではプラスチック業特有の電力負荷特性、業界平均水準、規模別事例、電動化・最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>プラスチック業の電力使用プロファイル（射出成形／押出成形／金型温調／乾燥／リサイクル）</li>
              <li>業界平均の電気代水準（売上高比3〜10%）と成形方法別単価</li>
              <li>燃料費調整額・再エネ賦課金・電動化シフト・CN要求の影響</li>
              <li>規模別（小規模／中規模／大手樹脂加工）の電気代と削減事例3件（Before/After）</li>
              <li>電動式射出成形機・金型温調最適化の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>プラスチック業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              プラスチック業の電力使用特性 — 射出成形・押出・金型温調・乾燥
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業の電力使用は『射出成形機（加熱冷却サイクル）／押出・ブロー成形（連続運転）／金型温調・冷却装置／原料乾燥工程／粉砕リサイクル』の5層構造です。射出成形機が電力消費の40〜60%を占めるため、成形機最適化が契約見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比3〜10%、射出成形で更に高い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業の電気代水準は事業形態（射出成形・押出成形・ブロー成形・樹脂加工）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本プラスチック工業連盟・日本プラスチック機械工業会・経産省工業統計から整理。実値は射出成形比率で1.5〜3倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              プラスチック業の主要な電気代上昇要因 — 燃料費・賦課金・電動化・循環経済
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、電動式射出成形機への転換、顧客サプライチェーンCN要求、プラスチック資源循環促進法対応という業界固有要因が並列します。
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
              規模別の削減事例3件 — 小規模／中規模／大手樹脂加工
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              、{" "}
              <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">化学業の電気料金見直し</Link>
              、{" "}
              <Link href="/electronics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電子機器業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電動式射出成形機への転換と省エネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業のエネルギー戦略の中核は電動式射出成形機への転換。油圧式から電動式（サーボモーター駆動）への更新で電力▲30〜50%削減可能で、CN対応とも整合的。中堅以上の樹脂加工メーカーで2030年までの段階的更新が標準化しています。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電動式射出成形機のメリット</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲30〜50%削減</li>
                  <li>製品品質向上（精度・繰返再現性）</li>
                  <li>油圧式と比べて静音化</li>
                  <li>油漏れリスク低減（クリーン環境）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">更新の進め方</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>稼働率の高い大型機から順次更新</li>
                  <li>SII補助1/2活用で投資回収5〜7年</li>
                  <li>GX補助＋PPA補助組合せで更に短縮</li>
                  <li>2030年までの段階的計画策定</li>
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
              プラスチック業のデマンド管理 — 起動シフト・金型温調・乾燥機
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業のデマンド管理は『射出成形機起動シフト』『金型温調・冷却塔インバータ化』『原料乾燥機効率化』『コンプレッサー・空調インバータ化』の4論点を組合せて最適化します。
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
              燃料費調整・市場連動プランの影響 — 射出成形24h稼働の感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業は射出成形・押出成形で24時間連続稼働、顧客への即時転嫁が困難なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プラン採用は経営判断レベルの論点です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>射出成形・押出成形で24時間連続稼働</li>
                  <li>顧客（自動車・電機・家電）への即時転嫁が困難</li>
                  <li>電動化シフトで設備投資回収計画が複層化</li>
                  <li>CN対応長期投資計画と固定単価の親和性</li>
                  <li>長期供給契約（自動車Tier1）との整合性</li>
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
              業種特有の節電・省エネ施策 — 電動式・金型温調・コンプレッサー・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業向けの省エネ施策は『電動式射出成形機への更新』『金型温調・冷却塔インバータ化』『原料乾燥機効率化』『自家消費型太陽光（1〜10MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電動式射出成形機更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>油圧式→電動式へ更新</li>
                  <li>電力▲30〜50%</li>
                  <li>SII補助1/2、投資回収5〜7年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">金型温調インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>温調装置・冷却塔ファン制御</li>
                  <li>電力▲15〜25%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">原料乾燥機効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>除湿乾燥機の高効率化</li>
                  <li>電力▲10〜20%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1〜10MW）</p>
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
              プラスチック業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。
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
              プラスチック業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社プラスチック工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラスチック業は射出成形24h稼働・電動化シフト・顧客CN要求・循環経済対応の4重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>電動式射出成形機更新後の電力削減シナリオを比較する</li>
              <li>事例で示した11〜20%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="plastic-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "樹脂部品の関連業種事例。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "樹脂原料製造の類似事例。" },
              { href: "/electronics-electricity-cost-review", title: "電子機器業の電気料金見直し", description: "樹脂筐体製品の関連業種。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "成形・加工業種の関連事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "電動式射出成形機・金型温調で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大のプラスチック業に直結するリスク。" },
            ]}
          />

          <ContentCta
            heading="自社プラスチック工場条件でリスクを確認する"
            description="射出成形・押出成形・金型温調・乾燥工程の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。電動式射出成形機更新後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
