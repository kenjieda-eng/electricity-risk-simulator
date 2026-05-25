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
  "窯業・陶磁器業の電気料金見直しポイント｜焼成炉・乾燥・電気窯の契約最適化";
const pageDescription =
  "窯業・陶磁器業の電気料金見直しを解説。焼成炉（1,200〜1,400℃長時間）、電気窯24h、乾燥機、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "窯業 電気料金 見直し",
    "陶磁器 電気代",
    "焼成炉 電気窯 電力",
    "乾燥機 電気代",
    "窯業 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ceramics-pottery-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ceramics-pottery-electricity-cost-review",
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
    label: "焼成炉（トンネルキルン・電気窯）",
    detail:
      "窯業の中核設備。焼成温度は陶器800〜1,200℃、磁器1,250〜1,400℃。電気窯（24h連続稼働）またはガス窯＋電気予熱で運用。1基あたり電気窯200kW〜2MW、ガス窯の電気補機50〜300kW。工場全体の電力使用量の40〜60%を占める業種特有のコスト構造。",
  },
  {
    label: "乾燥機（成形品の乾燥工程）",
    detail:
      "成形品（陶土）の乾燥工程。電気・蒸気・温風乾燥で1基あたり50〜500kW。乾燥時間は数時間〜数日と長く、24h稼働が主流。工場全体の15〜25%を占める。",
  },
  {
    label: "原料粉砕・成形機",
    detail:
      "陶土・釉薬の粉砕機（ボールミル等）、成形機（プレス・ろくろ・鋳込み）の動力。1工場あたり総設備100〜500kWで、工場全体の10〜20%を占める。",
  },
  {
    label: "釉薬塗布・乾燥設備",
    detail:
      "釉薬の調合・塗布・乾燥工程。塗布ブース・乾燥炉で1工場あたり50〜200kWの常時負荷。",
  },
  {
    label: "コンプレッサー・空調・集塵",
    detail:
      "工場用エアコンプレッサー（30〜200kW）、空調・換気、粉じん集塵（20〜100kW）の常時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本陶業連盟の統計によれば、窯業・陶磁器業の電気料金は売上高の6〜15%（電気窯採用工場は最高水準）。製造原価に占める比率は10〜22%。焼成炉24h連続稼働で電力依存度が高い業種。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "陶器（電気窯）で1トンあたり1,200〜2,500 kWh、磁器（電気窯）で1トンあたり1,800〜3,500 kWh、タイル・衛生陶器（ガス窯＋電気補機）で1トンあたり300〜600 kWh、ファインセラミックス（電気窯）で1トンあたり3,000〜8,000 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模陶磁器工房（年商1〜10億円）で年間50〜300万 kWh、中規模窯業工場（年商30〜200億円）で年間800〜3,500万 kWh、大規模窯業メーカー（年商500億円超）で年間3,500万〜1.5億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "電気窯24h連続稼働のベースロード",
    detail:
      "電気窯は焼成サイクル中24h連続稼働、焼成完了後の徐冷も電力が必要。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月200万kWh）で月200万円の差、年間2,400万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間2,500万kWh使用の中規模工場で年1.125億円超の負担。",
  },
  {
    label: "焼成炉の連続稼働と市場連動リスク",
    detail:
      "焼成サイクルが数日〜数週間連続する場合、市場価格高騰局面に直撃される。JEPX高騰局面では月数百万円〜千万円規模の追加負担リスク。",
  },
  {
    label: "季節変動による需要差",
    detail:
      "陶磁器は季節商戦（年末年始・お中元等）の需要があり、生産が時期的に集中する場合、季節別の電力契約最適化が重要。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模陶磁器工房（年商1〜10億円、従業員5〜30名）",
    profile: "工芸陶磁器・小ロット窯業／低圧〜高圧 100〜500kW／年間 50〜300万 kWh",
    annualCost: "年間電気代 1,500万〜9,000万円",
    note: "電気窯運用最適化・LED化・断熱改善で年8〜12%削減事例。",
  },
  {
    size: "中規模窯業工場（年商30〜200億円、従業員100〜400名）",
    profile: "タイル・衛生陶器・ファインセラミックス中堅メーカー／高圧 2,000〜4,500kW／年間 800〜3,500万 kWh",
    annualCost: "年間電気代 2.4〜10.5 億円",
    note: "電気窯高効率化＋自家消費太陽光＋断熱改善で年10〜15%削減事例。",
  },
  {
    size: "大規模窯業メーカー（年商500億円超、従業員500名以上）",
    profile: "TOTO・INAX・日本ガイシ等大手／特別高圧 5,000〜12,000kW／年間 3,500万〜1.5億 kWh",
    annualCost: "年間電気代 10.5〜45 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模陶磁器工房の年間12%削減（Before/After）",
    before: "中部地方の陶磁器工房A社（高圧 350kW、年間 200万 kWh、年間電気代 6,000万円）。市場連動プラン継続、電気窯24h稼働、断熱性能低下。",
    after: "新電力切替（固定3年）／電気窯の断熱改善＋高効率型に更新（SII＋ものづくり補助1/2活用、投資1,500万円）／LED化／乾燥機高効率化／コンプレッサーインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 6,000万円 → 5,280万円（▲12%、▲720万円）／契約 kW 350→300／投資回収 補助金後 2.1年",
  },
  {
    title: "事例2：中規模窯業工場の年間14%削減",
    before: "中部地方のタイル工場B社（高圧 3,000kW、年間 2,500万 kWh、年間電気代 7.5億円）。市場連動プランで2022〜2023年に月最大2,500万円の追加負担。電気窯24h稼働。",
    after: "固定5年プラン切替／電気窯断熱全面改善＋高効率型／自家消費太陽光 1MW 導入（屋根7,000 m²）／BEMS／乾燥機ヒートポンプ化／需要家主導型PPA／コンプレッサーインバータ化／焼成サイクル最適化。",
    result: "年間電気代 7.5億円 → 6.45億円（▲14%、▲1.05億円）／契約 kW 3,000→2,600／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模窯業メーカーの年間1.6億円削減",
    before: "国内大手窯業メーカーC社の主力工場（特別高圧 7,000kW、年間 7,000万 kWh、年間電気代 21億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 3 MW＋蓄電池 5 MWh／コージェネ 2MW＋排熱回収／全焼成炉断熱更新／需要家主導型PPA（オフサイト風力5MW）／DR契約締結／乾燥機ヒートポンプ化。",
    result: "年間電気代 21億円 → 19.4億円（▲7.6%、▲1.6億円）／契約 kW 7,000→6,200／投資回収 7年（補助金後 5年）／CO₂削減 約14,000 t/年",
  },
];

const demandManagement = [
  {
    label: "焼成炉投入タイミングの分散",
    detail:
      "複数の焼成炉を運用する場合、投入タイミングを1〜3時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。",
  },
  {
    label: "乾燥機の夜間運転シフト",
    detail:
      "乾燥工程を電力単価安価な深夜〜早朝に集中させる運用設計。3交代制工場で夜間集中乾燥で5〜10%のピーク削減が可能。",
  },
  {
    label: "焼成サイクル最適化",
    detail:
      "焼成温度プロファイル・昇温速度の最適化、炉内充填率向上で電力▲10〜15%。BEMSによる需要見える化が必須。",
  },
  {
    label: "コンプレッサー・集塵のインバータ化",
    detail:
      "コンプレッサー・集塵機のインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率焼成炉・電気窯・乾燥機ヒートポンプ・LED・コンプレッサー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "窯業向けで採択率が高い主力補助金。焼成炉更新・乾燥機ヒートポンプ化で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h電気窯稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新成形装置・焼成炉・電気窯の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "窯業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ガス窯→電気窯化、排熱発電",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱発電で大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小陶磁器事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "焼成炉の同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "焼成炉・乾燥機・成形機・コンプレッサーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜3MW）導入の試算を実施したか",
  "焼成炉断熱改善・電気窯高効率化の投資回収試算を実施したか",
  "乾燥機のヒートポンプ化の投資回収試算を実施したか",
  "デマンドコントローラー・焼成炉投入分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "窯業・陶磁器業の電気代水準はどれくらいですか？", answer: "売上高比6〜15%（電気窯採用工場は最高水準）、製造原価比10〜22%が業界平均。中規模窯業工場（年商150億円級）で年2.4〜10.5億円、大規模窯業メーカー（年商500億円超）で年10.5〜45億円規模の電気代になります。" },
  { question: "電気窯の電気代を削減するには？", answer: "①断熱性能改善（電力▲10〜15%）、②高効率電気窯への更新、③焼成サイクル最適化（昇温速度・保持時間）、④炉内充填率向上、⑤排熱回収、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "乾燥機の電気代対策は？", answer: "①乾燥機のヒートポンプ化（電気ヒーター比効率3倍）、②夜間電力活用シフト、③乾燥時間最適化、④断熱性能改善、⑤排熱回収との連携、の5本柱が効果的。中規模工場で年300〜700万円の削減が目安。" },
  { question: "焼成炉の連続稼働対策は？", answer: "①焼成炉断熱全面改善、②焼成温度プロファイル最適化、③複数炉投入分散、④BEMSによる需要見える化、⑤排熱回収による予熱化、の5本柱が効果的。中規模工場で年500〜1,200万円の削減が目安。" },
  { question: "窯業・陶磁器業の固定プランと市場連動プランどちらが向きますか？", answer: "電気窯・焼成炉の連続稼働でベースロードが大きく、焼成サイクル途中の停止が品質劣化につながるため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "乾燥機のヒートポンプ化は投資回収できますか？", answer: "従来の電気ヒーター式乾燥機からヒートポンプ式への更新で、総合効率3倍、電力▲50〜70%。中規模工場（年間2,500万kWh）で年間800〜1,500万円の削減、投資回収はSII＋GX補助で3〜5年が目安です。" },
  { question: "窯業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は窯業工場で投資回収できますか？", answer: "屋根面積3,000m²以上、24h電気窯稼働の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本陶業連盟", url: "https://www.nittouren.or.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function CeramicsPotteryElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ceramics-pottery-electricity-cost-review"
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
          <span className="text-slate-800">窯業・陶磁器業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            窯業・陶磁器業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            窯業・陶磁器業は、焼成炉（1,200〜1,400℃の高温長時間焼成）、電気窯24h連続稼働、乾燥機、原料粉砕など多面的な電力負荷を持ち、季節商戦の需要変動も加わる業種です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>窯業・陶磁器業の電力使用プロファイル（焼成炉／電気窯／乾燥機／成形）</li>
              <li>業界平均の電気代水準（売上高比6〜15%）と製品単位あたり単価</li>
              <li>電気窯断熱改善・乾燥機ヒートポンプ化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>焼成サイクル最適化の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>窯業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              窯業・陶磁器業の電力使用特性 — 焼成炉・電気窯・乾燥・成形
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業・陶磁器業の電力使用は『焼成炉電気窯／乾燥機／成形機／釉薬塗布乾燥／コンプレッサー集塵』の5層で構成されます。電気窯24h連続稼働が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比6〜15%、製品単位300〜8,000 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業・陶磁器業の電気代水準は製品種別（陶器／磁器／タイル／ファインセラミックス）と焼成方式で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本陶業連盟・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              窯業・陶磁器業の主要な電気代上昇要因 — 焼成・乾燥・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業・陶磁器業の電気代上昇は、電気窯24h稼働ベースロードに加え、焼成炉連続稼働、季節変動、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模陶磁器／中規模窯業／大規模窯業メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業・陶磁器業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/glass-manufacturing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガラス製造業の電気料金見直し</Link>
              、{" "}
              <Link href="/glass-ceramics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガラス・窯業業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              焼成炉・乾燥機のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業は焼成炉投入分散、乾燥機夜間運転シフト、焼成サイクル最適化など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h電気窯稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業は電気窯・焼成炉の24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気窯の24h稼働が必須</li>
                  <li>焼成サイクル途中停止が品質劣化につながる</li>
                  <li>陶磁器価格への即時転嫁が困難</li>
                  <li>大電力消費で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に焼成電力負荷増</li>
                  <li>電気窯24h稼働が高単価時間帯に直撃</li>
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
              再エネ賦課金の影響 — 24h電気窯業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。窯業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模窯業工場（年2,500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 8,725万円</li>
                  <li>2025年度（3.98円/kWh）：年 9,950万円（+1,225万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 1.125億円（+2,525万円）</li>
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
              窯業特有の節電・省エネ施策 — 電気窯断熱・乾燥機ヒートポンプ・サイクル最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業の省エネは『電気窯断熱改善』『乾燥機ヒートポンプ化』『焼成サイクル最適化』『排熱回収』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電気窯断熱改善</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>断熱材高性能化で電力▲10〜15%</li>
                  <li>炉寿命延長も同時実現</li>
                  <li>SII＋ものづくり補助で投資回収2〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">乾燥機ヒートポンプ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気ヒーター→ヒートポンプで効率3倍</li>
                  <li>乾燥電力▲50〜70%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">焼成サイクル最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>昇温速度・保持時間最適化で電力▲10〜15%</li>
                  <li>炉内充填率向上で生産性向上も同時実現</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜3MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h電気窯稼働で自家消費率80%超</li>
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
              窯業向けに活用しやすい補助金は5本柱。電気窯断熱改善はSII＋ものづくり補助の組合せで補助率を最大化できます。
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
              窯業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社窯業工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業・陶磁器業は電気窯24h連続稼働・焼成サイクル途中停止リスク・季節変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>焼成炉のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="ceramics-pottery-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/glass-manufacturing-electricity-cost-review", title: "ガラス製造業の電気料金見直し", description: "溶融炉24hの電力対策。" },
              { href: "/glass-ceramics-electricity-cost-review", title: "ガラス・窯業業の電気料金見直し", description: "ガラス窯業合体の見直し。" },
              { href: "/cement-readymix-concrete-electricity-cost-review", title: "セメント・生コン業の電気料金見直し", description: "粉砕ミルの電力対策。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "24h連続稼働が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "窯業法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "電気窯・乾燥機ヒートポンプ更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "電気窯24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/construction-electricity-cost-review", title: "建設業の電気料金見直し", description: "タイル・衛生陶器の取引先業種。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "建材としての取引先業種。" },
            ]}
          />

          <ContentCta
            heading="自社の窯業工場条件でリスクを確認する"
            description="電気窯・焼成炉・乾燥機・成形機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。断熱改善後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="窯業・陶磁器業の電力契約見直し、専門家に相談しませんか？"
            description="電気窯・焼成炉・乾燥機・成形機の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で窯業・陶磁器業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
