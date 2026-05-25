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
  "塗料・インキ製造業の電気料金見直しポイント｜撹拌機・分散機・防爆排気の契約最適化";
const pageDescription =
  "塗料・インキ製造業の電気料金見直しを解説。撹拌機・分散機・ミル、防爆排気設備、溶剤回収、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "塗料 電気料金 見直し",
    "インキ 電気代",
    "撹拌機 分散機 電力",
    "防爆排気 電気代",
    "塗料 インキ 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/paint-ink-manufacturing-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/paint-ink-manufacturing-electricity-cost-review",
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
    label: "撹拌機・分散機（製造工程の主力）",
    detail:
      "塗料・インキ製造の中核設備。ディゾルバー（高速撹拌）、ビーズミル（顔料分散）、3本ロールミル等で1基あたり50〜300kW。バッチ式運転で起動時の瞬間負荷が突出する。工場全体の電力使用量の30〜45%を占める業種特有のコスト構造。",
  },
  {
    label: "防爆排気・換気設備（24h稼働）",
    detail:
      "溶剤系塗料・インキの製造で発生する可燃性蒸気を排気する防爆型換気設備。1工場あたり総設備100〜500kWの常時負荷で、安全上稼働停止不可。工場全体の20〜30%を占める。",
  },
  {
    label: "溶剤回収・蒸留装置",
    detail:
      "使用済み溶剤の回収・蒸留再生装置。蒸留塔のリボイラー（電気・スチーム）と凝縮器の冷却ユニット。1基あたり100〜500kWの常時負荷。VOC排出規制対応で導入が進む。",
  },
  {
    label: "充填・包装ライン",
    detail:
      "塗料缶・インキ缶への充填機、ラベラー・キャッパー・段ボール詰めの自動ラインの動力。1ラインあたり30〜150kWの常時負荷。日中稼働が中心。",
  },
  {
    label: "コンプレッサー・冷却・空調",
    detail:
      "撹拌機エア源コンプレッサー（30〜200kW）、冷却塔（30〜150kW）、空調・換気の常時負荷。塗料工場特有の防爆仕様空調を含む。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本塗料工業会の統計によれば、塗料・インキ製造業の電気料金は売上高の3〜8%。製造原価に占める比率は5〜12%。撹拌機・防爆換気の電力依存度が中位の業種。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "建築用塗料で1トンあたり80〜150 kWh、工業用塗料で1トンあたり150〜300 kWh、インキで1トンあたり200〜400 kWh、特殊塗料（粉体・電着）で1トンあたり300〜600 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模塗料工場（年商3〜15億円）で年間50〜300万 kWh、中規模塗料工場（年商30〜200億円）で年間500〜2,500万 kWh、大規模塗料メーカー（年商500億円超）で年間2,500万〜1.5億 kWh。高圧契約が中規模では業界標準。",
  },
];

const costFactors = [
  {
    label: "防爆換気24h稼働のベースロード",
    detail:
      "防爆換気・排気設備は安全上停止不可、24h連続稼働必須。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月150万kWh）で月150万円の差、年間1,800万円規模のインパクト。",
  },
  {
    label: "撹拌機・ミル起動の瞬間負荷",
    detail:
      "ディゾルバー・ビーズミル等の起動時に瞬間負荷が突出し、複数台同時起動でデマンドピークが膨らむ。デマンド管理の効果が大きい業種。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間1,500万kWh使用の中規模工場で年6,750万円超の負担。",
  },
  {
    label: "溶剤回収装置の電力増",
    detail:
      "VOC排出規制強化で溶剤回収装置の導入が増加。蒸留・冷却の電力消費が継続するため、設備更新時に高効率型の選定が重要。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模塗料工場（年商3〜15億円、従業員10〜30名）",
    profile: "地場塗料・小ロット製造／高圧 300〜700kW／年間 50〜300万 kWh",
    annualCost: "年間電気代 1,500万〜9,000万円",
    note: "撹拌機運用最適化・LED化・コンプレッサー更新で年8〜12%削減事例。",
  },
  {
    size: "中規模塗料工場（年商30〜200億円、従業員100〜400名）",
    profile: "建築・工業用塗料中堅メーカー／高圧 1,500〜3,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "防爆換気インバータ化＋撹拌機起動分散＋自家消費太陽光で年10〜15%削減事例。",
  },
  {
    size: "大規模塗料メーカー（年商500億円超、従業員500名以上）",
    profile: "日本ペイント・関西ペイント等大手／特別高圧 4,000〜10,000kW／年間 2,500万〜1.5億 kWh",
    annualCost: "年間電気代 7.5〜45 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模塗料工場の年間13%削減（Before/After）",
    before: "関東の塗料工場A社（高圧 400kW、年間 200万 kWh、年間電気代 6,000万円）。市場連動プラン継続、防爆換気が常時最大、撹拌機の同時起動でデマンドピーク発生。",
    after: "新電力切替（固定3年）／防爆換気インバータ化（SII＋ものづくり補助1/2活用、投資1,000万円）／撹拌機起動分散制御／LED化／コンプレッサーインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 6,000万円 → 5,220万円（▲13%、▲780万円）／契約 kW 400→340／投資回収 補助金後 1.7年",
  },
  {
    title: "事例2：中規模塗料工場の年間15%削減",
    before: "中部地方の工業用塗料工場B社（高圧 2,500kW、年間 2,000万 kWh、年間電気代 6億円）。市場連動プランで2022〜2023年に月最大2,000万円の追加負担。撹拌機・ビーズミル多数稼働。",
    after: "固定5年プラン切替／防爆換気BEMS連動制御／撹拌機・ミル起動分散制御／自家消費太陽光 1MW 導入（屋根7,000 m²）／溶剤回収装置高効率化／需要家主導型PPA／コンプレッサーインバータ化／力率改善コンデンサ。",
    result: "年間電気代 6億円 → 5.1億円（▲15%、▲9,000万円）／契約 kW 2,500→2,100／投資回収 補助金後 3.2年",
  },
  {
    title: "事例3：大規模塗料メーカーの年間1.5億円削減",
    before: "国内大手塗料メーカーC社の主力工場（特別高圧 6,000kW、年間 6,000万 kWh、年間電気代 18億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 3 MW＋蓄電池 5 MWh／コージェネ 2MW＋排熱回収／防爆換気全面更新／需要家主導型PPA／DR契約締結／溶剤回収装置高効率化／撹拌機・ミル全面更新。",
    result: "年間電気代 18億円 → 16.5億円（▲8.3%、▲1.5億円）／契約 kW 6,000→5,400／投資回収 7年（補助金後 5年）／CO₂削減 約12,000 t/年",
  },
];

const demandManagement = [
  {
    label: "撹拌機・ミル起動分散制御",
    detail:
      "ディゾルバー・ビーズミル等の起動タイミング分散でデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。デマンドコントローラーと設備制御盤の連動が必須。",
  },
  {
    label: "防爆換気のBEMS連動インバータ制御",
    detail:
      "防爆換気を撹拌機稼働状況・VOC濃度に応じてBEMS連動インバータ制御。電力▲15〜25%。安全基準を満たしつつ省エネを実現。",
  },
  {
    label: "充填ラインの夜間運転シフト",
    detail:
      "充填・包装ラインの稼働を電力単価安価な深夜〜早朝に集中させる運用設計。3交代制工場で5〜10%のピーク削減が可能。",
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
    target: "高効率撹拌機・ビーズミル・防爆換気インバータ・LED・コンプレッサー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "塗料・インキ業向けで採択率が高い主力補助金。撹拌機更新・防爆換気更新で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h防爆換気稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新撹拌機・ビーズミル・溶剤回収装置の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "塗料・インキ業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "溶剤回収装置・水性塗料切替・電化",
    rate: "1/2、上限数十億円",
    note: "脱炭素・VOC削減を絡めた大型省エネで補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小塗料・インキ事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "撹拌機・ミル同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "撹拌機・ミル・防爆換気・コンプレッサー・溶剤回収の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜2MW）導入の試算を実施したか",
  "防爆換気のインバータ化＋BEMS連動の投資回収試算を実施したか",
  "撹拌機・ミルの高効率化・起動分散の余地を確認したか",
  "デマンドコントローラー・撹拌機起動分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "塗料・インキ製造業の電気代水準はどれくらいですか？", answer: "売上高比3〜8%、製造原価比5〜12%が業界平均。中規模塗料工場（年商100億円級）で年1.5〜7.5億円、大規模塗料メーカー（年商500億円超）で年7.5〜45億円規模の電気代になります。" },
  { question: "撹拌機・ミルの電気代を削減するには？", answer: "①起動タイミング分散制御（デマンドコントローラー連動）、②高効率モーターへの更新、③撹拌・分散サイクル時間最適化、④BEMS・需要見える化、⑤バッチサイズ最適化、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "防爆換気の電気代対策は？", answer: "①防爆換気のインバータ化＋BEMS連動制御（電力▲15〜25%）、②VOC濃度連動制御、③高効率モーターへの更新、④水性塗料切替によるVOC削減、⑤排熱回収、の5本柱が効果的。投資回収はSII＋GX補助で2〜4年が目安。" },
  { question: "溶剤回収装置の電気代対策は？", answer: "①高効率蒸留塔への更新、②回収溶剤の品質管理最適化、③冷却ユニットの高効率化、④熱交換器の活用、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年200〜500万円の削減が目安。" },
  { question: "塗料・インキ業の固定プランと市場連動プランどちらが向きますか？", answer: "防爆換気の24h稼働、撹拌機・ミルのバッチ運転でベースロードが大きく、安全上停止できないため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数百万〜千万円の追加負担が発生しました。" },
  { question: "防爆換気のインバータ化は投資回収できますか？", answer: "従来のオンオフ制御からインバータ＋VOC濃度連動への更新で、換気電力▲15〜25%。中規模工場（年間2,000万kWh）で年間500〜1,200万円の削減、投資回収はSII＋GX補助で2〜4年が目安です。" },
  { question: "塗料・インキ業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は塗料・インキ工場で投資回収できますか？", answer: "屋根面積2,000m²以上、24h防爆換気稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本塗料工業会", url: "https://www.toryo.or.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PaintInkManufacturingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/paint-ink-manufacturing-electricity-cost-review"
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
          <span className="text-slate-800">塗料・インキ製造業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            塗料・インキ製造業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            塗料・インキ製造業は、撹拌機・ビーズミル等の分散設備、防爆排気・換気設備（24h稼働）、溶剤回収装置、充填ラインなど多面的な電力負荷を持ち、安全上の連続稼働要件が業種特有の電気代構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>塗料・インキ業の電力使用プロファイル（撹拌／ミル／防爆換気／溶剤回収）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）と製品単位あたり単価</li>
              <li>防爆換気インバータ化・撹拌機起動分散の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>溶剤回収装置の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>塗料・インキ業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              塗料・インキ業の電力使用特性 — 撹拌・ミル・防爆換気・溶剤回収
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業の電力使用は『撹拌機ミル／防爆換気／溶剤回収／充填ライン／コンプレッサー冷却』の5層で構成されます。防爆換気24h稼働と撹拌機瞬間負荷が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜8%、製品単位80〜600 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業の電気代水準は製品種別（建築用／工業用／インキ／特殊）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本塗料工業会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              塗料・インキ業の主要な電気代上昇要因 — 防爆換気・撹拌・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業の電気代上昇は、防爆換気24h稼働ベースロードに加え、撹拌機・ミル瞬間負荷、溶剤回収装置電力増、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模塗料／中規模塗料／大規模塗料メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">化学業の電気料金見直し</Link>
              、{" "}
              <Link href="/printing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">印刷業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              撹拌機・防爆換気のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業は撹拌機・ミル起動分散、防爆換気BEMS連動制御、充填ライン夜間運転シフトなど、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h防爆換気稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業は防爆換気の24h連続稼働が安全上必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>防爆換気の24h稼働が安全上必須</li>
                  <li>停止が労働災害リスクに直結</li>
                  <li>BtoB顧客への即時転嫁が困難</li>
                  <li>撹拌機・ミル瞬間負荷で高単価リスク</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に防爆換気電力負荷増</li>
                  <li>撹拌機起動が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万〜千万円の追加負担</li>
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
              再エネ賦課金の影響 — 24h防爆換気業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。塗料・インキ業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模塗料工場（年2,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 6,980万円</li>
                  <li>2025年度（3.98円/kWh）：年 7,960万円（+980万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 9,000万円（+2,020万円）</li>
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
              塗料・インキ業特有の節電・省エネ施策 — 防爆換気・撹拌分散・溶剤回収
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業の省エネは『防爆換気インバータ化＋BEMS連動』『撹拌機・ミル起動分散』『溶剤回収高効率化』『水性塗料切替』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">防爆換気インバータ化＋BEMS連動</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>VOC濃度連動で換気電力▲15〜25%</li>
                  <li>安全基準を満たしつつ省エネ</li>
                  <li>SII＋GX補助で投資回収2〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">撹拌機・ミル起動分散制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>起動分散でデマンドピーク▲15〜25%</li>
                  <li>高効率モーター化と組合せ</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">溶剤回収高効率化・水性化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率蒸留塔で電力▲10〜20%</li>
                  <li>水性塗料切替で防爆換気電力削減も</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h防爆換気稼働で自家消費率80%超</li>
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
              塗料・インキ業向けに活用しやすい補助金は5本柱。防爆換気・撹拌機更新はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
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
              塗料・インキ業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社塗料・インキ工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              塗料・インキ業は防爆換気24h稼働・撹拌機瞬間負荷・労働安全上の停止不可の3重課題に同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>撹拌機・ミル起動のピーク影響額を試算する</li>
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
            <GlossaryLinks currentSlug="paint-ink-manufacturing-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "原料が共通。" },
              { href: "/printing-electricity-cost-review", title: "印刷業の電気料金見直し", description: "インキの取引先業種。" },
              { href: "/furniture-manufacturing-electricity-cost-review", title: "家具・建具製造業の電気料金見直し", description: "塗料の取引先業種。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "工業用塗料の取引先業種。" },
              { href: "/construction-electricity-cost-review", title: "建設業の電気料金見直し", description: "建築用塗料の取引先業種。" },
              { href: "/pharmaceutical-electricity-cost-review", title: "医薬品業の電気料金見直し", description: "撹拌・分散プロセスが共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "塗料法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "防爆換気・撹拌機更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "防爆換気24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の塗料・インキ工場条件でリスクを確認する"
            description="撹拌機・ビーズミル・防爆換気・溶剤回収装置の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。防爆換気インバータ化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="塗料・インキ製造業の電力契約見直し、専門家に相談しませんか？"
            description="撹拌機・ビーズミル・防爆換気・溶剤回収装置の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で塗料・インキ業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
