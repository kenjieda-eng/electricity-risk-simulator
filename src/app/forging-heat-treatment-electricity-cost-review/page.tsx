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
  "鍛造・熱処理業の電気料金見直しポイント｜加熱炉・焼入れ・浸炭と夜間電力活用の契約最適化";
const pageDescription =
  "鍛造・熱処理業の電気料金見直しを解説。加熱炉・焼入れ炉・浸炭炉の連続稼働、夜間電力活用、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "鍛造 電気料金 見直し",
    "熱処理 電気代",
    "加熱炉 焼入れ 電力",
    "浸炭炉 電気代",
    "鍛造 熱処理 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/forging-heat-treatment-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/forging-heat-treatment-electricity-cost-review",
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
    label: "加熱炉（鍛造前加熱）— 1,100〜1,250℃の長時間加熱",
    detail:
      "鍛造前の素材加熱炉（電気抵抗式・誘導加熱式）。鋼材を1,100〜1,250℃まで加熱して鍛造可能な状態にする。1基あたり300kW〜3MWの大電力を消費し、鍛造工場全体の電力使用量の30〜45%を占める中核設備。",
  },
  {
    label: "焼入れ炉（焼入れ・焼戻し・焼鈍）",
    detail:
      "熱処理工場の主要設備。焼入れ（800〜900℃急冷）、焼戻し（200〜650℃保持）、焼鈍（応力除去）の電気炉。1基あたり100kW〜1MWの常時負荷で、熱処理専業工場では電力使用量の35〜50%を占める。",
  },
  {
    label: "浸炭炉・窒化炉（表面硬化処理）",
    detail:
      "ガス浸炭炉（930℃前後・数時間〜十数時間連続）、真空浸炭炉、窒化炉（500〜570℃）の連続稼働設備。1基あたり50〜500kWの電力負荷で24h稼働が主流。",
  },
  {
    label: "高周波焼入れ装置（部分焼入れ）",
    detail:
      "部品の特定部位を高周波誘導加熱で局所的に焼入れする装置。1台あたり100〜500kWの瞬間大電力。デマンドピークの主要因の1つで、生産ラインの稼働パターンが電力ピークに直結。",
  },
  {
    label: "冷却設備・コンプレッサー・排煙処理",
    detail:
      "焼入れ油・水・ガスの冷却塔・チラー（30〜200kW）、コンプレッサー（30〜200kW）、排煙処理装置（20〜100kW）の常時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本鍛造協会の統計によれば、鍛造・熱処理業の電気料金は売上高の7〜15%（熱処理専業は最高水準）。製造原価に占める比率は10〜22%。加熱炉・熱処理炉の24h稼働で電力依存度が高い業種。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "熱間鍛造で1トンあたり250〜450 kWh、冷間鍛造で1トンあたり150〜250 kWh、熱処理（焼入れ）で1トンあたり400〜700 kWh、浸炭処理で1トンあたり600〜1,100 kWhが業界平均。表面硬化処理ほど電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模鍛造・熱処理工場（年商3〜15億円）で年間100〜500万 kWh、中規模熱処理工場（年商50〜200億円）で年間1,000〜3,500万 kWh、大規模鍛造メーカー（年商500億円超）で年間4,000万〜1.5億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の加熱炉24h稼働への影響",
    detail:
      "加熱炉・熱処理炉の24h稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月200万kWh）で月200万円の差、年間2,400万円規模のインパクト。利益率の薄い熱処理業界では直接利益圧迫要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間2,500万kWh使用の中規模工場で年1億円超の負担。",
  },
  {
    label: "高周波焼入れ装置のピーク電流",
    detail:
      "高周波焼入れ装置は瞬間大電力を消費。複数装置の同時稼働でデマンドピークが突出し、契約電力が実需以上に膨らむ。デマンド管理の効果が大きい業種。",
  },
  {
    label: "浸炭炉の連続稼働と市場連動リスク",
    detail:
      "浸炭炉は処理時間が数時間〜十数時間に及び、途中停止が困難。市場連動プランでは市場価格高騰局面に直撃される。JEPX高騰局面では月数百万円〜千万円規模の追加負担リスク。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、鍛造・熱処理業のような24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模鍛造・熱処理工場（年商3〜15億円、従業員10〜40名）",
    profile: "町工場レベル鍛造・熱処理／高圧 250〜700kW／年間 100〜500万 kWh",
    annualCost: "年間電気代 3,000万〜1.5億円",
    note: "夜間電力シフト・LED化・断熱改善で年8〜12%削減事例。",
  },
  {
    size: "中規模熱処理工場（年商50〜200億円、従業員100〜400名）",
    profile: "受託熱処理中堅メーカー／高圧 1,500〜3,500kW／年間 1,000〜3,500万 kWh",
    annualCost: "年間電気代 3〜10.5 億円",
    note: "炉の高効率更新＋デマンド分散＋自家消費太陽光で年10〜18%削減事例。",
  },
  {
    size: "大規模鍛造メーカー（年商500億円超、従業員500名以上）",
    profile: "自動車・建機・産機向け鍛造大手／特別高圧 5,000〜12,000kW／年間 4,000万〜1.5億 kWh",
    annualCost: "年間電気代 12〜45 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模鍛造工場の年間14%削減（Before/After）",
    before: "関東の鍛造工場A社（高圧 400kW、年間 250万 kWh、年間電気代 7,500万円）。市場連動プラン継続、加熱炉が20年経過、夜間電力未活用。",
    after: "新電力切替（固定3年）／誘導加熱式高効率加熱炉への更新（SII＋ものづくり補助1/2活用、投資1,500万円）／夜間電力シフト／LED化／断熱性能改善／デマンドコントローラー導入。",
    result: "年間電気代 7,500万円 → 6,450万円（▲14%、▲1,050万円）／契約 kW 400→340／投資回収 補助金後 1.4年",
  },
  {
    title: "事例2：中規模熱処理工場の年間17%削減",
    before: "中部地方の自動車部品熱処理工場B社（高圧 2,500kW、年間 2,500万 kWh、年間電気代 7.5億円）。市場連動プランで2022〜2023年に月最大2,500万円の追加負担を経験。高周波焼入れ装置の同時稼働でデマンドピーク発生。",
    after: "固定5年プラン切替／浸炭炉の真空浸炭化（電力▲20%）／高周波焼入れ装置の投入分散制御／自家消費太陽光 1MW 導入（屋根7,000 m²）／BEMS＋デマンド分散制御／需要家主導型PPA／コンプレッサーインバータ化。",
    result: "年間電気代 7.5億円 → 6.23億円（▲17%、▲1.27億円）／契約 kW 2,500→2,150／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模鍛造メーカーの年間1.5億円削減",
    before: "国内大手鍛造メーカーC社の主力工場（特別高圧 7,000kW、年間 7,000万 kWh、年間電気代 21億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 4 MWh／コージェネ 2MW＋排熱回収／加熱炉誘導加熱化（ガス→電気）／需要家主導型PPA（オフサイト風力4MW）／DR契約締結。",
    result: "年間電気代 21億円 → 19.5億円（▲7%、▲1.5億円）／契約 kW 7,000→6,300／投資回収 7年（補助金後 5年）／CO₂削減 約12,000 t/年",
  },
];

const demandManagement = [
  {
    label: "高周波焼入れ装置の投入分散",
    detail:
      "複数の高周波焼入れ装置を運用する場合、投入タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。",
  },
  {
    label: "加熱炉の夜間運転シフト",
    detail:
      "加熱炉・浸炭炉の連続稼働を電力単価安価な深夜〜早朝に最大化する運用設計。3交代制工場で夜間集中運用で5〜10%のピーク削減が可能。",
  },
  {
    label: "焼入れ油冷却の負荷追従",
    detail:
      "焼入れ油の冷却塔・チラーをインバータ化＋台数制御で20〜30%削減。デマンドコントローラーと連動させると更に効果的。",
  },
  {
    label: "コンプレッサーのインバータ・台数制御",
    detail:
      "コンプレッサーのインバータ化・台数制御で20〜35%削減。鍛造プレス用エアの脈動負荷に対応。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率加熱炉・誘導加熱化・LED・コンプレッサー・空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "鍛造・熱処理業向けで採択率が高い主力補助金。加熱炉更新・断熱改善で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h加熱炉稼働で自家消費率70%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "真空浸炭炉・高効率熱処理炉の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "加熱炉の電化（ガス→電気誘導加熱）・排熱発電",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱回収で大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小熱処理事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高周波焼入れ装置の同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "加熱炉・焼入れ炉・浸炭炉・コンプレッサーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜2MW）導入の試算を実施したか",
  "加熱炉の誘導加熱化（ガス→電気）の投資回収試算を実施したか",
  "夜間電力活用シフトの余地（3交代化）を確認したか",
  "デマンドコントローラー・焼入れ装置投入分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "鍛造・熱処理業の電気代水準はどれくらいですか？", answer: "売上高比7〜15%（熱処理専業は最高水準）、製造原価比10〜22%が業界平均。中規模熱処理工場（年商150億円級）で年3〜10.5億円、大規模鍛造メーカー（年商500億円超）で年12〜45億円規模の電気代になります。" },
  { question: "加熱炉の電気代を削減するには？", answer: "①誘導加熱式高効率加熱炉への更新（電力▲15〜25%）、②断熱性能改善、③加熱バッチの大型化、④素材予熱化（排熱回収）、⑤BEMS・デマンド制御、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "浸炭炉の電気代対策は？", answer: "①ガス浸炭炉から真空浸炭炉への更新（電力▲20〜30%、ガス削減も同時実現）、②浸炭時間最適化、③炉内充填率向上、④保熱性能改善、⑤雰囲気ガス回収、の5本柱が効果的。投資回収は補助金活用で3〜5年が目安。" },
  { question: "高周波焼入れ装置のデマンド対策は？", answer: "①複数装置投入タイミング分散、②インバータ式高効率装置への更新、③ワーク投入間隔最適化、④冷却設備のインバータ化、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年300〜600万円の削減が目安。" },
  { question: "鍛造・熱処理業の固定プランと市場連動プランどちらが向きますか？", answer: "加熱炉・浸炭炉・焼入れ炉の連続稼働でベースロードが大きく、生産停止が困難なため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "誘導加熱化（ガス→電気）は投資回収できますか？", answer: "従来のガス加熱炉から電気誘導加熱炉への更新で、加熱時間▲50%、エネルギー総合効率2〜3倍を実現。中規模工場（年間2,500万kWh）で電力増は+20〜30%ですが、ガス代▲70%で総合コスト▲15〜25%。GX補助で大型補助の対象になり得ます。" },
  { question: "鍛造・熱処理業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は鍛造・熱処理工場で投資回収できますか？", answer: "屋根面積2,000m²以上、24h加熱炉稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率70%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本鍛造協会", url: "https://www.jfa-net.gr.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ForgingHeatTreatmentElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/forging-heat-treatment-electricity-cost-review"
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
          <span className="text-slate-800">鍛造・熱処理業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            鍛造・熱処理業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            鍛造・熱処理業は、加熱炉・焼入れ炉・浸炭炉の連続稼働、高周波焼入れ装置のピーク電流、夜間電力活用余地など多面的な電力負荷を持ちます。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>鍛造・熱処理業の電力使用プロファイル（加熱炉／焼入れ／浸炭／高周波焼入れ）</li>
              <li>業界平均の電気代水準（売上高比7〜15%）と製品単位あたり単価</li>
              <li>加熱炉の誘導加熱化・電化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>高周波焼入れ装置のデマンド管理</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>鍛造・熱処理業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鍛造・熱処理業の電力使用特性 — 加熱炉・焼入れ・浸炭・高周波
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業の電力使用は『加熱炉／焼入れ炉／浸炭炉／高周波焼入れ／冷却・コンプレッサー』の5層で構成されます。加熱炉と熱処理炉の24h稼働が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比7〜15%、製品単位150〜1,100 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業の電気代水準は処理種別（熱間鍛造／冷間鍛造／焼入れ／浸炭）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本鍛造協会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鍛造・熱処理業の主要な電気代上昇要因 — 加熱炉・浸炭・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業の電気代上昇は、加熱炉・浸炭炉の24h稼働ベースロードに加え、高周波焼入れのデマンドピーク、市場連動リスク、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模鍛造／中規模熱処理／大規模鍛造メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/casting-diecasting-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鋳造・ダイカスト業の電気料金見直し</Link>
              、{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              高周波焼入れ・加熱炉のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業は高周波焼入れ装置の投入分散、加熱炉夜間運転シフト、焼入れ油冷却の負荷追従など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 加熱炉24h稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業は加熱炉・浸炭炉の24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>加熱炉・浸炭炉の連続稼働が必須</li>
                  <li>炉停止のリカバリーコストが甚大</li>
                  <li>受託加工単価への即時転嫁が困難</li>
                  <li>高周波焼入れの瞬間大電力で高単価リスク</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に加熱電力負荷増</li>
                  <li>高周波焼入れが高単価時間帯に集中</li>
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
              再エネ賦課金の影響 — 大電力消費業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。鍛造・熱処理業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模熱処理工場（年2,500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 8,725万円</li>
                  <li>2025年度（3.98円/kWh）：年 9,950万円（+1,225万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1.045億円（+1,725万円）</li>
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
              鍛造・熱処理業特有の節電・省エネ施策 — 誘導加熱化・真空浸炭・夜間電力
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業の省エネは『加熱炉誘導加熱化』『真空浸炭化』『夜間電力シフト』『冷却インバータ化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">加熱炉誘導加熱化・電化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ガス→電気誘導加熱で総合効率2〜3倍</li>
                  <li>加熱時間▲50%、生産性向上を同時実現</li>
                  <li>GX補助で大型補助対象、投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">真空浸炭化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ガス浸炭→真空浸炭で電力▲20〜30%</li>
                  <li>処理品質向上・ガス削減も同時達成</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">夜間電力活用シフト</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>3交代化＋夜間集中運用で単価▲30%</li>
                  <li>BEMS連動でデマンド最適化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h加熱炉稼働で自家消費率70%超</li>
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
              鍛造・熱処理業向けに活用しやすい補助金は5本柱。加熱炉誘導加熱化はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
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
              鍛造・熱処理業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社鍛造・熱処理工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鍛造・熱処理業は加熱炉・浸炭炉の連続稼働・高周波焼入れのデマンドピーク・受託加工単価転嫁困難の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>高周波焼入れの同時稼働ピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した14〜17%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="forging-heat-treatment-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/casting-diecasting-electricity-cost-review", title: "鋳造・ダイカスト業の電気料金見直し", description: "電気炉・保持炉の電力対策。" },
              { href: "/metal-stamping-sheet-metal-electricity-cost-review", title: "金属プレス・板金業の電気料金見直し", description: "プレス機の瞬時負荷対策。" },
              { href: "/plating-surface-treatment-electricity-cost-review", title: "メッキ・表面処理業の電気料金見直し", description: "電解・整流器の大電力対策。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工一般の見直しポイント。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "電炉・連続鋳造の大電力対策。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "鍛造・熱処理の取引先業種。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立工程の電力対策。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "熱処理法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "加熱炉・コンプレッサー更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "加熱炉24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の鍛造・熱処理工場条件でリスクを確認する"
            description="加熱炉・浸炭炉・高周波焼入れ装置の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。誘導加熱化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="鍛造・熱処理業の電力契約見直し、専門家に相談しませんか？"
            description="加熱炉・浸炭炉・高周波焼入れ装置・コンプレッサーの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で鍛造・熱処理業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
