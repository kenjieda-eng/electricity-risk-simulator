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
  "金属加工業の電気料金見直しポイント｜プレス・切削・熱処理・表面処理の契約最適化";
const pageDescription =
  "金属加工業（プレス・切削・熱処理・表面処理・溶接）の電気料金見直しを解説。動力設備、熱処理炉の高負荷、メッキ・陽極酸化、溶接工程の電力消費、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "金属加工業 電気料金 見直し",
    "プレス 切削 電気代",
    "熱処理炉 電力契約",
    "表面処理 メッキ 電気代",
    "金属加工工場 電力コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/metal-processing-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/metal-processing-electricity-cost-review",
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
    label: "プレス・切削・研削（動力設備）",
    detail:
      "金属加工業の中核工程。プレス機（100〜2,000t）、CNC旋盤、マシニングセンタ、研削盤などが組み合わさる。1台あたり数十〜数百kWの動力負荷、中規模金属加工工場で数十台並列稼働、工場全体電力の25〜40%を占める。",
  },
  {
    label: "熱処理炉（焼入れ・焼戻し・浸炭）",
    detail:
      "金属の特性改善・硬度調整のための熱処理工程。電気炉（焼入れ・焼戻し・浸炭・窒化）、ガス炉、真空炉など。1台あたり50〜500kWの加熱負荷、複数炉並列で工場全体電力の20〜35%を占める。中規模工場で月20〜80万kWh、年250〜1,000万kWhの電力消費。",
  },
  {
    label: "表面処理（メッキ・陽極酸化）",
    detail:
      "金属の防錆・装飾・機能化のための表面処理工程。電気メッキ（クロム・ニッケル・亜鉛）、陽極酸化（アルマイト処理）、化成処理が連続稼働。電解槽1基で数十〜数百kWの常時負荷、メッキ専業工場で工場全体電力の40〜60%を占める。",
  },
  {
    label: "溶接工程",
    detail:
      "アーク溶接、スポット溶接、レーザー溶接、TIG/MIG溶接の各設備。1台あたり数十kWの瞬時電力（連続的だがピークが大きい）。組立工程併設の金属加工工場で工場全体電力の10〜15%を占める。",
  },
  {
    label: "コンプレッサー・空調・廃液処理",
    detail:
      "工場全体を支えるコンプレッサー（圧縮空気品質要求高）、空調、表面処理工場の廃液処理設備（中和・凝集沈殿・処分）が24h稼働。電力消費の10〜20%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本金属加工協会・全国鍍金工業組合連合会の統計から、金属加工業の電気料金は売上高比3〜10%（メッキ専業で5〜15%）、製造原価比5〜18%。中規模金属加工工場で年3〜15億円、大手熱処理・表面処理メーカーで年20〜100億円規模の電気代に達する。",
  },
  {
    label: "加工方法別の電力使用量",
    detail:
      "切削加工1tで150〜400kWh、プレス加工1tで30〜80kWh、熱処理1tで250〜800kWh、メッキ1m²で15〜80kWh、陽極酸化1m²で20〜60kWh。熱処理・メッキが電力集約的。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模金属加工・メッキ工場（80〜300名）で年間500〜2,000万kWh、中規模工場（300〜1,000名）で年間2,000万〜6,000万kWh、大手熱処理・表面処理メーカー（1,000名超）で年間6,000万〜3億kWh。高圧・特別高圧契約が中心。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の熱処理連続稼働への影響",
    detail:
      "熱処理工場・メッキ工場は24時間連続稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動で中規模工場（年3,000万kWh）で年3,000万円の差。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間3,000万kWh使用の中規模金属加工工場で年1.254億円の負担、5年で6.27億円。減免制度（年間1,000万kWh以上等）対象は必須。",
  },
  {
    label: "熱処理炉の燃料転換（電化シフト）",
    detail:
      "従来は重油・LNG加熱の熱処理炉が主流だが、脱炭素規制で電気炉への転換が加速。電化により電力使用量が2〜3倍になる工場もあり、契約電力上振れが事業課題。",
  },
  {
    label: "顧客（自動車・電機）のサプライチェーンCN要求",
    detail:
      "自動車・電機メーカー等の大手顧客からサプライチェーン全体CN目標達成を要求。金属加工メーカー側に再エネ100%調達が事実上必須化。",
  },
  {
    label: "海外工場との価格競争",
    detail:
      "東南アジア・中国・インドの海外金属加工工場との価格競争で、国内工場の電気代上昇が原価競争力を直撃。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模金属加工・メッキ工場（従業員80〜300名）",
    profile: "中小切削加工・メッキ業者／高圧 500〜2,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "新電力切替・固定3年契約・熱処理炉断熱改善・LED化で年8〜12%削減事例。",
  },
  {
    size: "中規模金属加工工場（従業員300〜1,000名）",
    profile: "中堅金属加工・熱処理業者／高圧／特別高圧 2,000〜6,000kW／年間 2,000万〜6,000万kWh",
    annualCost: "年間電気代 6〜18 億円",
    note: "固定5年契約＋自家消費太陽光（1〜3MW）＋熱処理炉廃熱回収＋メッキ電解槽最適化＋空調最適化で年10〜14%削減事例。",
  },
  {
    size: "大手熱処理・表面処理メーカー（従業員1,000名超）",
    profile: "全国展開の熱処理・表面処理大手／特別高圧 6,000〜20,000kW／年間 6,000万〜3億kWh",
    annualCost: "年間電気代 18〜90 億円",
    note: "1%の単価改善でも年1,800万〜9,000万円のインパクト。長期固定（10〜15年）契約＋大規模太陽光（3〜10MW）＋オフサイトPPA＋DR契約が標準。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅金属加工工場の年間10%削減（Before/After）",
    before: "東日本の金属加工メーカーA社の主力工場（高圧 1,800kW、年間 1,500万kWh、年間電気代 4.5億円）。市場連動プラン継続、熱処理炉断熱劣化、メッキ電解槽最適化なし、LED未更新。",
    after: "新電力切替（固定3年）／熱処理炉断熱改修＋廃熱回収（投資 1,800万円）／メッキ電解槽の電解効率改善／全照明LED化／コンプレッサー台数制御。",
    result: "年間電気代 4.5億円 → 4.05億円（▲10%、▲4,500万円）／契約 kW 1,800→1,650／投資回収 2年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模熱処理メーカーの年間13%削減",
    before: "中部地区の熱処理メーカーB社の基幹工場（特別高圧 4,000kW、年間 3,500万kWh、年間電気代 10.5億円）。市場連動プランで2022〜2023年に月最大1.2億円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 2MW（屋根12,000m²）／熱処理炉廃熱回収（複数炉）／真空炉導入（高効率化）／DR契約／需要家主導型PPA補助金活用／グリーン電力25%調達。",
    result: "年間電気代 10.5億円 → 9.14億円（▲13%、▲1.36億円）／契約 kW 4,000→3,600／投資回収 6年（補助金後 4年）",
  },
  {
    title: "事例3：大手熱処理・表面処理メーカー年間8億円削減",
    before: "全国展開の大手熱処理・表面処理メーカーC社の基幹工場（特別高圧 12,000kW、年間 1.5億kWh、年間電気代 45億円）。長期固定契約継続も顧客（自動車メーカー）のCN要求対応が遅延。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 8MW＋蓄電池 5MWh／オフサイトPPA 15MW（再エネ100%対応）／熱処理炉電化＋廃熱回収／メッキ電解槽AI最適化／DR契約／需要家主導型PPA＋GX補助活用。",
    result: "年間電気代 45億円 → 37億円（▲17.8%、▲8億円）／契約 kW 12,000→10,500／投資回収 7年（補助金後 5年）／CO₂削減 約15,000 t/年",
  },
];

const demandManagement = [
  {
    label: "熱処理炉のスケジュール最適化",
    detail:
      "熱処理炉の運転を電力単価安価な深夜時間帯にシフト。複数炉並列稼働の場合、起動タイミングを30分〜1時間ずらすことでデマンドピーク抑制。中規模工場で年数千万円規模の削減事例。",
  },
  {
    label: "メッキ電解槽の運転最適化",
    detail:
      "電気メッキ電解槽の運転電圧・電流密度をAI化することで電力▲5〜10%削減。電解効率改善とともに製品品質も向上。",
  },
  {
    label: "プレス・切削の起動シフト",
    detail:
      "複数プレス機・マシニングセンタの同時起動を避け、ライン別に時間差で起動。3交代制工場では夜勤シフト時刻の調整で5〜10%のピーク削減が可能。",
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
    target: "熱処理炉・プレス機・メッキ電解槽・コンプレッサー・LED・空調更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "金属加工業のような連続稼働業種で採択率が高い主力補助金。熱処理炉・廃熱回収で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場敷地が比較的広く、24h稼働の金属加工業と相性良好。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "熱処理炉電化・ヒートポンプ・大規模PPA",
    rate: "1/2、上限数億円",
    note: "重油・LNG熱処理炉の電化と再エネ調達を組合せる金属加工業で大型補助の対象。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小金属加工・メッキ業の設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小金属加工業で活用可能。LED・空調・コンプレッサー更新で採択率高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "熱処理炉の電化に伴う契約電力増加を見積もったか",
  "工場敷地を活用した自家消費太陽光（1〜10MW）導入の試算を実施したか",
  "熱処理炉・メッキ電解槽の運転スケジュール最適化を実施したか",
  "プレス機・切削装置の起動タイミング分散を検討したか",
  "廃熱回収・蒸気タービン拡張の費用対効果を評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上等）の対象に該当するか",
  "顧客（自動車・電機）のサプライチェーンCN要求対応のグリーン電力調達計画があるか",
  "SII省エネ補助金・需要家主導型PPA補助金・GX補助の組合せ申請を検討したか",
];

const faqItems = [
  { question: "金属加工業の電気代水準はどれくらいですか？", answer: "売上高比3〜10%（メッキ専業で5〜15%）、製造原価比5〜18%が業界平均です。中規模金属加工工場で年6〜18億円、大手熱処理・表面処理メーカーで年18〜90億円規模の電気代になります。" },
  { question: "熱処理炉の電化で電気代はどれくらい増えますか？", answer: "中規模熱処理工場で重油・LNG炉→電気炉転換時、電力使用量が年30〜80%増加、契約電力が500〜2,000kW上振れする事例が多いです。CN対応で不可避ですが、PPA補助金・GX補助組合せで投資回収7〜10年で実現可能。" },
  { question: "メッキ電解槽の運転最適化でどれだけ電気代を下げられますか？", answer: "電圧・電流密度のAI制御で電力▲5〜10%削減事例多数。メッキ専業工場で年5,000万〜2億円規模の削減、SII補助1/2活用で投資回収1〜2年。製品品質改善との両立も可能。" },
  { question: "金属加工業に向く電力プランは固定ですか、市場連動ですか？", answer: "24時間連続稼働でベースロードが大きい熱処理・メッキ工場は固定プラン推奨。市場高騰時の影響額が大きく、顧客への即時転嫁が困難なためです。長期固定（10〜15年）契約が標準。" },
  { question: "熱処理炉廃熱回収でどれだけ電気代を下げられますか？", answer: "廃熱を周辺設備の予熱・湯沸かしに再利用することで、熱処理炉電力▲15〜25%削減事例多数。中規模工場で年5,000万〜1.5億円規模の削減、SII補助1/2活用で投資回収2〜3年。" },
  { question: "自家消費型太陽光は金属加工工場で投資回収できますか？", answer: "工場敷地が比較的広く、24h連続稼働の金属加工工場は業種別で上位の相性。2MWで年220〜260万kWh発電、年2,200〜2,600万円削減、投資回収6〜8年（補助金後4〜6年）が目安。" },
  { question: "顧客（自動車・電機）のCN要求にどう対応すべきですか？", answer: "オフサイトPPA契約（再エネ100%対応）と非化石証書購入の組合せが標準。自動車・電機業界のサプライチェーン全体CN目標達成のため、対応しない場合は受注機会喪失リスクも。" },
  { question: "金属加工業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（熱処理炉・プレス機・メッキ）、需要家主導型PPA補助金（屋上太陽光）、脱炭素先行地域・GX補助（熱処理炉電化）、中小企業補助の4本柱です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本金属加工協会", url: "https://www.jmpa.or.jp/" },
  { name: "全国鍍金工業組合連合会", url: "https://www.zenmekiren.com/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function MetalProcessingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/metal-processing-electricity-cost-review"
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
          <span className="text-slate-800">金属加工業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            金属加工業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            金属加工業（プレス・切削・熱処理・表面処理・溶接）は、動力設備、熱処理炉、メッキ電解槽、溶接工程が並列する典型的な製造業です。脱炭素規制による熱処理炉電化、顧客（自動車・電機）のサプライチェーンCN要求、海外工場との価格競争という経営課題に直面しています。本ページでは金属加工業特有の電力負荷特性、業界平均水準、規模別事例、熱処理炉・メッキ最適化、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>金属加工業の電力使用プロファイル（プレス／切削／熱処理／メッキ／溶接）</li>
              <li>業界平均の電気代水準（売上高比3〜15%）と加工方法別単価</li>
              <li>燃料費調整額・再エネ賦課金・電化シフト・CN要求の影響</li>
              <li>規模別（小規模／中規模／大手熱処理）の電気代と削減事例3件（Before/After）</li>
              <li>熱処理炉廃熱回収・メッキ電解槽最適化の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>金属加工業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              金属加工業の電力使用特性 — プレス・切削・熱処理・表面処理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業の電力使用は『プレス・切削・研削（動力設備）／熱処理炉／表面処理（メッキ・陽極酸化）／溶接工程／コンプレッサー・空調・廃液処理』の5層構造です。事業形態（切削加工・熱処理・メッキ）で電力プロファイルが大きく異なり、自社設備構成の把握が見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比3〜15%、メッキ専業で更に高い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業の電気代水準は事業形態（切削加工・プレス・熱処理・メッキ）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本金属加工協会・全国鍍金工業組合連合会・経産省工業統計から整理。実値は熱処理・メッキ比率で2〜4倍ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              金属加工業の主要な電気代上昇要因 — 燃料費・賦課金・電化・CN要求
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、熱処理炉電化シフト、顧客サプライチェーンCN要求、海外工場との競争という業界固有要因が並列します。
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
              規模別の削減事例3件 — 小規模／中規模／大手熱処理メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              、{" "}
              <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鉄鋼業の電気料金見直し</Link>
              、{" "}
              <Link href="/precision-instruments-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">精密機器業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              熱処理炉の電化シフトと省エネの両立
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業のエネルギー戦略の中核は熱処理炉電化シフトと省エネの両立。重油・LNG炉から電気炉への転換で電力使用量が2〜3倍になる一方、廃熱回収・断熱改善・真空炉導入で電力増加を抑制する複層的アプローチが必要です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電化シフトの影響</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力使用量2〜3倍に増加</li>
                  <li>契約電力500〜2,000kW上振れ</li>
                  <li>CN対応で不可避</li>
                  <li>GX補助で投資回収7〜10年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">省エネとの両立施策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>廃熱回収システム（電力▲15〜25%）</li>
                  <li>断熱改善（電力▲10%）</li>
                  <li>真空炉導入（高効率化）</li>
                  <li>運転スケジュール最適化</li>
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
              金属加工業のデマンド管理 — 熱処理スケジュール・メッキ・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業のデマンド管理は『熱処理炉スケジュール最適化』『メッキ電解槽運転最適化』『プレス・切削起動シフト』『コンプレッサー・空調インバータ化』の4論点を組合せて最適化します。
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
              燃料費調整・市場連動プランの影響 — 24h稼働の感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱処理・メッキ工場は24時間連続稼働でベースロードが大きく、顧客への即時転嫁が困難なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プラン採用は経営判断レベルの論点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>熱処理・メッキで24時間連続稼働</li>
                  <li>顧客（自動車・電機）への即時転嫁が困難</li>
                  <li>電化シフトで電力使用量増加トレンド</li>
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
              業種特有の節電・省エネ施策 — 熱処理・メッキ・コンプレッサー・太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業向けの省エネ施策は『熱処理炉廃熱回収＋断熱改善』『メッキ電解槽AI制御』『コンプレッサー台数制御』『自家消費型太陽光（1〜10MW）』が4本柱。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">熱処理炉廃熱回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>廃熱の予熱・湯沸かし再利用</li>
                  <li>電力▲15〜25%</li>
                  <li>SII補助1/2、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">メッキ電解槽AI制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電圧・電流密度の最適化</li>
                  <li>電力▲5〜10%</li>
                  <li>SII補助1/2、投資回収1〜2年</li>
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
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1〜10MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2MWで年220〜260万kWh発電</li>
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
              金属加工業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を2〜3年短縮できます。
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
              金属加工業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社金属加工工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              金属加工業は熱処理電化・顧客CN要求・海外競争の3重課題に直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>熱処理電化後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した10〜18%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="metal-processing-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "金属加工先業種の関連事例。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "金属製造業の類似事例。" },
              { href: "/non-ferrous-metal-electricity-cost-review", title: "非鉄金属業の電気料金見直し", description: "非鉄金属関連の類似事例。" },
              { href: "/precision-instruments-electricity-cost-review", title: "精密機器業の電気料金見直し", description: "精密加工の関連事例。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立ライン中心の関連事例。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働ベースロード業種の関連事例。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "敷地大の連続稼働工場の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "熱処理炉・メッキ電解槽で活用できる主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の金属加工業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社金属加工工場条件でリスクを確認する"
            description="プレス・切削・熱処理・メッキ・溶接工程の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。熱処理電化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
