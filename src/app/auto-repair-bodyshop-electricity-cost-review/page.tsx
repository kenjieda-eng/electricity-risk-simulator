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
  "自動車整備・板金塗装業の電気料金見直しポイント｜塗装ブース・コンプレッサー・リフトの契約最適化";
const pageDescription =
  "自動車整備・板金塗装業の電気料金見直しを解説。塗装ブース乾燥、エアコンプレッサー、リフト・溶接機、規模別事例、固定vs市場連動、EV車整備対応、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自動車整備 電気料金 見直し",
    "板金塗装 電気代",
    "塗装ブース コンプレッサー 電力",
    "整備工場 電気代",
    "整備業 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/auto-repair-bodyshop-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/auto-repair-bodyshop-electricity-cost-review",
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
    label: "塗装ブース乾燥（強制乾燥バーナー＋電力換気）",
    detail:
      "板金塗装業の最大電力要素。塗装ブース（吹付＋強制乾燥）は、強制乾燥バーナー（灯油・ガス）＋給排気ファン（5〜15kW）＋赤外線乾燥灯（10〜30kW）の連動運転で、1ブース20〜60kWの瞬時負荷。1工場あたり総設備60〜200kWで、塗装繁忙期はピーク要素。塗装工場全体の電力使用量の30〜45%を占める。",
  },
  {
    label: "エアコンプレッサー（24h待機）",
    detail:
      "整備工場の中核設備。スプレーガン・インパクトレンチ・タイヤ交換機等の動力源。1工場あたり総設備15〜75kWで、漏れ対策不十分時は24h待機運転で電力浪費。整備工場全体の20〜35%を占める。インバータ化で20〜35%削減可能。",
  },
  {
    label: "リフト・自動車整備機器（瞬時負荷）",
    detail:
      "2柱・4柱・シザーリフト（1台あたり2.2〜5.5kW）、タイヤチェンジャー、ホイールバランサー、4輪アライメントテスター等の瞬時負荷。1工場あたりリフト3〜10台、合計10〜50kWの瞬時負荷で30分デマンドに影響。",
  },
  {
    label: "溶接機・研磨機・板金工具",
    detail:
      "板金作業用のスポット溶接機（10〜30kW瞬時）、半自動溶接機（5〜15kW）、サンダー・グラインダー（1〜3kW）等の瞬時負荷。板金作業集中時はデマンドが跳ね上がる。",
  },
  {
    label: "EV車整備用高電圧装備",
    detail:
      "EV車・HV車整備の普及で、高電圧バッテリー診断装置、絶縁チェッカー、EV専用リフト、EV充電器（普通7kW・急速50kW）の導入が進む。整備工場の電力構造を変えつつある。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本自動車整備振興会連合会・日本自動車車体整備協同組合連合会・経産省自動車課の統計によれば、自動車整備・板金塗装業の電気料金は売上高の1.5〜4%（板金塗装業は塗装ブース稼働で最高水準）。粗利ベースでは5〜15%に達する。塗装ブース・コンプレッサーが業種特性。",
  },
  {
    label: "整備工場1施設あたりの電力使用量",
    detail:
      "小規模整備工場（指定工場・1〜3名）で年間1〜3万 kWh、中規模認証工場（5〜15名）で年間5〜25万 kWh、大規模板金センター（20名以上＋塗装ブース複数）で年間40〜200万 kWh。塗装ブース有無で2〜3倍の差が出る業種。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模整備工場（年商0.5〜1.5億円）で年間1〜3万 kWh、中規模認証工場（年商2〜10億円）で年間5〜25万 kWh、大規模板金センター（年商15億円超）で年間40〜200万 kWh。整備工場の事業承継・経営統合で大型化が進行中。",
  },
];

const costFactors = [
  {
    label: "塗装ブース乾燥工程の電力＋燃料コスト",
    detail:
      "塗装ブースは強制乾燥バーナー（灯油・ガス）＋電力換気の複合エネルギー。塗装1サイクル（吹付10分＋乾燥30分）で電力10〜30kWh、灯油2〜5L消費。月間100〜300サイクル稼働で電力・燃料コストの管理が経営課題。",
  },
  {
    label: "コンプレッサーの待機電力リーク",
    detail:
      "整備工場のコンプレッサーはエアー漏れ対策不十分時、年間電力消費の20〜40%が漏れによる無効電力。リーク対策で大幅削減可能だが、定期点検が不徹底なケースが多い。",
  },
  {
    label: "リフト・整備機器の瞬時負荷とデマンド管理",
    detail:
      "リフト・溶接機・コンプレッサーの同時稼働で30分デマンドが跳ね上がり、年間最大デマンドが契約電力を決定。デマンド管理を怠ると基本料金が過剰になりやすい。",
  },
  {
    label: "EV車整備対応の設備投資",
    detail:
      "EV・HV車整備対応で高電圧診断装置・EV専用リフト・EV充電器の導入が進む。整備工場の電力使用量が10〜30%増えるトレンド。",
  },
  {
    label: "再エネ賦課金・容量拠出金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。中規模整備工場（年15万kWh）で年62.7万円超の負担。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模整備工場（指定工場、年商0.5〜1.5億円、1〜3名）",
    profile: "地域密着型整備工場／低圧 30〜80kW／年間 1〜3万 kWh",
    annualCost: "年間電気代 30万〜90万円",
    note: "LED化・コンプレッサー漏れ対策・リフト更新で年8〜12%削減事例。",
  },
  {
    size: "中規模認証工場（年商2〜10億円、5〜15名）",
    profile: "認証工場・地域複数店舗／高圧 100〜300kW／年間 5〜25万 kWh",
    annualCost: "年間電気代 150万〜750万円",
    note: "コンプレッサーインバータ化＋塗装ブース高効率化＋LED化で年10〜15%削減事例。",
  },
  {
    size: "大規模板金センター（年商15億円超、20名以上＋塗装ブース複数）",
    profile: "大手チェーン板金センター／高圧 400〜1,200kW／年間 40〜200万 kWh",
    annualCost: "年間電気代 1,200万〜6,000万円",
    note: "長期固定（3〜5年）契約＋自家消費太陽光＋塗装ブース全面更新で年10〜15%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模整備工場の年間11%削減（Before/After）",
    before: "地方の指定工場A社（低圧 50kW、年間 2万 kWh、年間電気代 60万円）。市場連動プラン継続、コンプレッサー20年経過、リフト3台、蛍光灯照明、エアー漏れ未点検。",
    after: "新電力切替（固定3年）／コンプレッサー高効率モデル更新（SII補助1/2活用、投資80万円）／エアー配管漏れ全数点検・修繕／LED照明化／リフト更新／デマンドコントローラー導入。",
    result: "年間電気代 60万円 → 53万円（▲12%、▲7万円）／契約 kW 50→40／投資回収 補助金後 5年",
  },
  {
    title: "事例2：中規模認証工場の年間14%削減",
    before: "都市部認証工場B社（高圧 200kW、年間 18万 kWh、年間電気代 540万円）。市場連動プランで2022〜2023年に月最大60万円の追加負担。塗装ブース2基、コンプレッサー2台。",
    after: "固定3年プラン切替／塗装ブース給排気ファンインバータ化／コンプレッサー2台のインバータ化＋台数制御／エアー漏れ対策（投資100万円で年30万円削減）／LED化／赤外線乾燥灯高効率化／デマンドコントローラー導入。",
    result: "年間電気代 540万円 → 464万円（▲14%、▲76万円）／契約 kW 200→170／投資回収 補助金後 3年",
  },
  {
    title: "事例3：大規模板金センターの年間1,200万円削減",
    before: "全国チェーン板金センターC社（高圧 800kW、年間 120万 kWh、年間電気代 3,600万円）。長期固定契約継続も塗装ブース増設で契約電力上振れ。EV車整備設備も導入中。",
    after: "電力契約の5年長期固定締結／自家消費太陽光 200kW＋蓄電池 300kWh／塗装ブース3基の全面更新（強制乾燥工程の電力＋燃料効率化、SII＋GX補助で投資1.2億円）／コンプレッサー全機インバータ化／需要家主導型PPA／BEMS導入／LED全面化／DR契約締結／EV充電器ピークカット運用。",
    result: "年間電気代 3,600万円 → 2,400万円（▲33%、▲1,200万円）／契約 kW 800→650／投資回収 補助金後 5年／CO₂削減 約600 t/年",
  },
];

const demandManagement = [
  {
    label: "塗装ブース運用の集約・分散",
    detail:
      "複数塗装ブースの同時稼働を避け、デマンドコントローラーで稼働タイミングを分散制御。1工場の最大デマンドを15〜25%削減した事例。",
  },
  {
    label: "コンプレッサーのインバータ化＋台数制御",
    detail:
      "複数コンプレッサーのインバータ化＋台数制御で20〜35%削減。エアー漏れ対策と組合せで更に効果向上。",
  },
  {
    label: "リフト・溶接機の同時稼働回避",
    detail:
      "リフト・溶接機・グラインダーの同時稼働を作業スケジュールで分散。瞬時デマンド管理に有効。",
  },
  {
    label: "塗装ブース乾燥の温度・時間最適化",
    detail:
      "強制乾燥温度・時間を塗料種別ごとに最適化し、過剰乾燥を防止。電力＋燃料の両方を10〜20%削減可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場型）",
    target: "塗装ブース・コンプレッサー・LED化・リフト更新",
    rate: "中小1/2、上限15億円",
    note: "整備業向けで採択率が高い主力補助金。コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "整備工場の屋根面積を活用した太陽光と相性が良い。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新整備機器・塗装ブース・診断装置の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "整備業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "国交省 EV車整備対応補助金",
    target: "高電圧診断装置・EV専用リフト・EV充電器",
    rate: "1/2〜2/3、上限機種別に設定",
    note: "EV車整備対応の特別補助。整備業の脱炭素対応として活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "塗装ブース全面更新・太陽光・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "塗装ブースの電力＋燃料使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "コンプレッサーのエアー漏れ点検・修繕を定期的に実施しているか",
  "リフト・溶接機・コンプレッサーの同時稼働回避策を導入しているか",
  "屋根面積を活用した自家消費太陽光（30〜500kW）導入の試算を実施したか",
  "コンプレッサーインバータ化・塗装ブース高効率化の投資回収試算を実施したか",
  "EV車整備対応設備の電力使用量増の見積を実施したか",
  "デマンドコントローラー・塗装ブース運用最適化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "SII・PPA・ものづくり補助・EV車整備対応補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "自動車整備・板金塗装業の電気代水準はどれくらいですか？", answer: "売上高比1.5〜4%（板金塗装業は最高水準）、粗利比5〜15%が業界平均。中規模認証工場（年商5億円級）で年150〜750万円、大規模板金センター（年商15億円超）で年1,200〜6,000万円規模の電気代になります。" },
  { question: "塗装ブースの電気代を削減するには？", answer: "①給排気ファンインバータ化、②強制乾燥温度・時間の塗料種別最適化、③赤外線乾燥灯の高効率化、④塗装ブースの集約運用（同時稼働回避）、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年30〜100万円の削減が目安。" },
  { question: "コンプレッサーのエアー漏れ対策は本当に効果がありますか？", answer: "エアー漏れ対策不十分時、年間電力消費の20〜40%が漏れによる無効電力。年1回の全数点検＋配管修繕で投資50〜100万円、年30〜80万円の削減（中規模工場）が一般的。投資回収1〜2年で最も費用対効果が高い施策の一つです。" },
  { question: "EV車整備対応で電気代はどれくらい増えますか？", answer: "高電圧診断装置・EV専用リフト・EV充電器（普通7kW・急速50kW）導入で電力使用量が10〜30%増えるトレンド。EV充電器併設なら国交省補助金活用と自家消費太陽光・蓄電池の組合せで電気代増を抑制可能です。" },
  { question: "整備業の固定プランと市場連動プランどちらが向きますか？", answer: "コンプレッサー・空調・照明の連続稼働、塗装ブースの計画運用で連続稼働必須のため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続工場で月数十万円の追加負担が発生しました。" },
  { question: "塗装ブースの全面更新は投資回収できますか？", answer: "塗装ブース全面更新（最新型・高効率乾燥）で電力＋燃料▲25〜35%。大規模板金センター（年間120万kWh）で年800〜1,200万円の削減、SII＋GX補助の組合せで投資回収5〜7年が目安です。" },
  { question: "整備業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、国交省EV車整備対応補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は整備工場で投資回収できますか？", answer: "屋根面積300m²以上、日中作業の整備工場は相性が良い業種。100kWで年12〜13万kWh発電、年200〜300万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。塗装ブース・コンプレッサー稼働時間と発電時間が重なり自家消費率高めです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本自動車整備振興会連合会", url: "https://www.jaspa.or.jp/" },
  { name: "日本自動車車体整備協同組合連合会", url: "https://www.jabra.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function AutoRepairBodyshopElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/auto-repair-bodyshop-electricity-cost-review"
        datePublished="2026-05-26"
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
          <span className="text-slate-800">自動車整備・板金塗装業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            自動車整備・板金塗装業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自動車整備・板金塗装業は、塗装ブース乾燥の電力＋燃料、エアコンプレッサーの待機電力、リフト・溶接機の瞬時負荷、EV車整備対応の高電圧装備など多面的な電力負荷を持ち、認証工場・指定工場の事業形態とEV車整備対応がコスト構造を変えつつあります。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>整備業の電力使用プロファイル（塗装ブース／コンプレッサー／リフト／EV対応）</li>
              <li>業界平均の電気代水準（売上高比1.5〜4%）と工場別単価</li>
              <li>コンプレッサーエアー漏れ対策の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>塗装ブース・コンプレッサーの省エネ施策</li>
              <li>SII・PPA・ものづくり補助・EV車整備対応補助・GX補助の組合せ活用</li>
              <li>整備業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              整備業の電力使用特性 — 塗装ブース・コンプレッサー・リフト・EV対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業の電力使用は『塗装ブース乾燥／エアコンプレッサー／リフト・整備機器／溶接機・板金工具／EV車整備用高電圧装備』の5層で構成されます。塗装ブース（板金業）とコンプレッサー（整備業全般）が業種特有のコスト構造を形成します。
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比1.5〜4%、塗装ブース有無で2〜3倍差
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業の電気代水準は塗装ブース有無・工場規模で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本自動車整備振興会連合会・日本自動車車体整備協同組合連合会・経産省自動車課から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              整備業の主要な電気代上昇要因 — 塗装・コンプレッサー・EV対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業の電気代上昇は、塗装ブース乾燥の電力＋燃料、コンプレッサー待機電力リーク、リフト瞬時負荷、EV車整備対応の設備投資、再エネ賦課金が複合的に重なります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模整備工場／中規模認証工場／大規模板金センター
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/car-dealership-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車ディーラーの電気料金見直し</Link>
              、{" "}
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              コンプレッサー・塗装ブースのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業は塗装ブース運用分散、コンプレッサーインバータ化＋台数制御、リフト・溶接機の同時稼働回避、塗装ブース乾燥最適化など、業種特有のデマンド管理戦略が効果的です。
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
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 塗装ブース連続稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業はコンプレッサー・空調・塗装ブースの計画稼働が必要なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>コンプレッサー稼働が日中継続必須</li>
                  <li>塗装ブース乾燥の計画運用</li>
                  <li>整備代金への即時転嫁が困難</li>
                  <li>EV車整備拡大で電力依存度上昇</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調・塗装負荷増</li>
                  <li>塗装ブース乾燥が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万円の追加負担</li>
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
              再エネ賦課金の影響 — 整備工場業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。整備業の中規模認証工場では負担額が請求総額の10〜15%に達します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模認証工場（年18万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 62.8万円</li>
                  <li>2025年度（3.98円/kWh）：年 71.6万円（+8.8万円）</li>
                  <li>2026年度（4.18円/kWh）：年 75.2万円（+12.4万円）</li>
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
              整備業特有の節電・省エネ施策 — エアー漏れ・コンプレッサー・塗装ブース
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業の省エネは『コンプレッサーエアー漏れ対策＋インバータ化』『塗装ブース給排気ファンインバータ化』『LED化＋赤外線乾燥灯高効率化』『自家消費太陽光』『EV充電器最適化』の5軸で組み立てます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コンプレッサーエアー漏れ対策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年1回の全数点検＋配管修繕</li>
                  <li>電力▲20〜40%（最も費用対効果が高い）</li>
                  <li>SII補助で投資回収1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">塗装ブース給排気ファンインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>定速→インバータ制御で電力▲30〜40%</li>
                  <li>塗装作業の有無に応じて自動制御</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED化・赤外線乾燥灯高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>工場照明LED化で電力▲40〜60%</li>
                  <li>赤外線乾燥灯の高効率化で更に削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（30〜500kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中作業の整備工場で自家消費率70%超</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・EV車整備対応補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業向けに活用しやすい補助金は5本柱。塗装ブース更新はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
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
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              整備業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社整備工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              整備業は塗装ブース・コンプレッサー・EV車整備対応の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>コンプレッサーエアー漏れ対策の効果を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した11〜33%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-26"
            />
            <GlossaryLinks currentSlug="auto-repair-bodyshop-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/gas-station-electricity-cost-review", title: "ガソリンスタンドの電気料金見直し", description: "自動車関連業種の共通論点。" },
              { href: "/car-dealership-electricity-cost-review", title: "自動車ディーラーの電気料金見直し", description: "整備工場併設の共通論点。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "自動車関連サプライチェーンの共通論点。" },
              { href: "/parking-facility-electricity-cost-review", title: "駐車場施設の電気料金見直し", description: "EV充電器併設が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "整備業の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "整備業が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "整備工場の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "コンプレッサー・塗装ブース更新の主力補助金。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理の基本", description: "塗装ブース・リフトの同時稼働回避。" },
              { href: "/compressor-energy-saving", title: "コンプレッサーの省エネ対策", description: "エアー漏れ対策の詳細。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し", description: "EV化対応の共通論点。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "業種別リスク全体像。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社整備工場の条件でリスクを確認する"
            description="塗装ブース・エアコンプレッサー・リフト・溶接機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。コンプレッサーエアー漏れ対策後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="自動車整備・板金塗装業の電力契約見直し、専門家に相談しませんか？"
            description="塗装ブース・コンプレッサー・リフト・溶接機・EV車整備設備の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で整備業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
