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
  "メッキ・表面処理業の電気料金見直しポイント｜電解・整流器・排水処理の契約最適化";
const pageDescription =
  "メッキ・表面処理業の電気料金見直しを解説。電解槽・整流器の直流大電力、排水処理24h稼働、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "メッキ 電気料金 見直し",
    "表面処理 電気代",
    "電解槽 整流器 電力",
    "排水処理 電気代",
    "メッキ 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/plating-surface-treatment-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/plating-surface-treatment-electricity-cost-review",
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
    label: "電解槽・整流器（電気メッキ）",
    detail:
      "メッキ工場の中核設備。電気メッキ（亜鉛・ニッケル・クロム・銅・金・銀）の電解槽は数百〜数千Aの直流電流を必要とし、整流器（AC→DC変換）が大電力を消費する。1基あたり50〜500kWで、メッキ工場全体の電力使用量の40〜55%を占める業種特有のコスト構造。",
  },
  {
    label: "前処理・後処理槽（脱脂・酸洗・水洗）",
    detail:
      "メッキ前の脱脂槽（60〜80℃加温）・酸洗槽・後処理水洗槽の加温・撹拌電力。1工場あたり総設備100〜500kWの常時負荷。メッキライン全体で工場の15〜25%を占める。",
  },
  {
    label: "排水処理設備（24h連続稼働）",
    detail:
      "メッキ排水中の重金属・シアン・酸アルカリを処理する設備。中和・凝集沈殿・濾過・脱水の各工程が24h連続稼働。1工場あたり50〜400kWの常時負荷で、停止が法令違反に直結するため稼働必須。",
  },
  {
    label: "排煙処理・スクラバー設備",
    detail:
      "メッキ槽から発生するヒューム・酸蒸気を処理するスクラバー・排煙処理装置。1工場あたり30〜200kWの常時負荷。労働安全衛生法・大気汚染防止法対応で稼働停止不可。",
  },
  {
    label: "乾燥炉・空調・コンプレッサー",
    detail:
      "メッキ後の乾燥炉（電気式・80〜150℃）、工場空調・換気、コンプレッサー（30〜100kW）等の常時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・全国鍍金工業組合連合会の統計によれば、メッキ・表面処理業の電気料金は売上高の8〜18%（電気メッキ専業は最高水準）。製造原価に占める比率は12〜25%。電解槽の直流大電力と排水処理24h稼働で電力依存度が極めて高い業種。",
  },
  {
    label: "メッキ面積1m²あたりの電力使用量",
    detail:
      "亜鉛メッキで1m²あたり1.5〜3 kWh、ニッケルメッキで1m²あたり2〜4 kWh、クロムメッキで1m²あたり3〜6 kWh、金メッキで1m²あたり0.5〜1.5 kWhが業界平均。クロムメッキが最も電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模メッキ工場（年商2〜10億円）で年間50〜300万 kWh、中規模メッキ工場（年商30〜150億円）で年間800〜3,500万 kWh、大規模メッキメーカー（年商200億円超）で年間3,500万〜1.5億 kWh。高圧契約が中規模では業界標準。",
  },
];

const costFactors = [
  {
    label: "整流器の直流大電力ベースロード",
    detail:
      "電解槽・整流器の24h稼働（メッキ品質維持のため停止困難）で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月150万kWh）で月150万円の差、年間1,800万円規模のインパクト。",
  },
  {
    label: "排水処理24h稼働の市場連動リスク",
    detail:
      "排水処理は法令上停止できず24h稼働必須。市場連動プランでは市場価格高騰局面に直撃される。JEPX高騰局面では月数百万円〜千万円規模の追加負担リスク。",
  },
  {
    label: "整流器効率と電力ロス",
    detail:
      "従来型シリコン整流器の効率は85〜90%、最新IGBT整流器は95〜97%。整流器更新で電力▲5〜10%の削減効果があり、中規模工場で年300〜500万円の削減。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間2,000万kWh使用の中規模工場で年9,000万円超の負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、メッキ業のような24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模メッキ工場（年商2〜10億円、従業員10〜30名）",
    profile: "町工場レベル電気メッキ／高圧 200〜500kW／年間 50〜300万 kWh",
    annualCost: "年間電気代 1,500万〜9,000万円",
    note: "整流器更新・LED化・前処理槽断熱で年8〜12%削減事例。",
  },
  {
    size: "中規模メッキ工場（年商30〜150億円、従業員50〜300名）",
    profile: "受託電気メッキ中堅メーカー／高圧 1,500〜3,500kW／年間 800〜3,500万 kWh",
    annualCost: "年間電気代 2.4〜10.5 億円",
    note: "整流器IGBT化＋排水処理高効率化＋自家消費太陽光で年10〜18%削減事例。",
  },
  {
    size: "大規模メッキメーカー（年商200億円超、従業員300名以上）",
    profile: "自動車部品・電子部品向けメッキ大手／特別高圧 4,000〜10,000kW／年間 3,500万〜1.5億 kWh",
    annualCost: "年間電気代 10.5〜45 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模メッキ工場の年間13%削減（Before/After）",
    before: "関東のメッキ工場A社（高圧 400kW、年間 200万 kWh、年間電気代 6,000万円）。市場連動プラン継続、整流器が15年経過、前処理槽断熱なし。",
    after: "新電力切替（固定3年）／整流器をIGBT式高効率型に更新（SII＋ものづくり補助1/2活用、投資1,200万円）／前処理槽断熱改善／LED化／排水処理ポンプインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 6,000万円 → 5,220万円（▲13%、▲780万円）／契約 kW 400→350／投資回収 補助金後 1.5年",
  },
  {
    title: "事例2：中規模メッキ工場の年間17%削減",
    before: "中部地方の自動車部品メッキ工場B社（高圧 2,500kW、年間 2,500万 kWh、年間電気代 7.5億円）。市場連動プランで2022〜2023年に月最大2,500万円の追加負担。整流器25年経過。",
    after: "固定5年プラン切替／全整流器IGBT式更新（電力▲10%）／排水処理高効率化（インバータ化）／自家消費太陽光 1MW 導入（屋根7,000 m²）／BEMS／前処理槽ヒートポンプ加温化／コンプレッサーインバータ化。",
    result: "年間電気代 7.5億円 → 6.23億円（▲17%、▲1.27億円）／契約 kW 2,500→2,150／投資回収 補助金後 3.2年",
  },
  {
    title: "事例3：大規模メッキメーカーの年間1.5億円削減",
    before: "国内大手メッキメーカーC社の主力工場（特別高圧 7,000kW、年間 7,000万 kWh、年間電気代 21億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 4 MWh／コージェネ 2MW＋排熱回収／全整流器IGBT化／需要家主導型PPA（オフサイト風力4MW）／DR契約締結／排水処理熱回収。",
    result: "年間電気代 21億円 → 19.5億円（▲7%、▲1.5億円）／契約 kW 7,000→6,300／投資回収 7年（補助金後 5年）／CO₂削減 約12,000 t/年",
  },
];

const demandManagement = [
  {
    label: "整流器投入タイミングの分散制御",
    detail:
      "複数の整流器・電解槽を運用する場合、投入タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。",
  },
  {
    label: "前処理槽加温の夜間運転シフト",
    detail:
      "前処理槽の加温を電力単価安価な深夜〜早朝に集中させる運用設計。3交代制工場で夜間集中加温で5〜10%のピーク削減が可能。",
  },
  {
    label: "排水処理ポンプの負荷追従",
    detail:
      "排水処理ポンプ・撹拌機のインバータ化・台数制御で20〜30%削減。排水量変動に追従させることで効率化。",
  },
  {
    label: "コンプレッサー・スクラバーのインバータ化",
    detail:
      "コンプレッサー・スクラバーファンのインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "IGBT整流器・LED・コンプレッサー・空調・ヒートポンプ加温化",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "メッキ業向けで採択率が高い主力補助金。整流器更新・ヒートポンプ加温化で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h電解槽稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "IGBT整流器・最新メッキライン・排水処理高効率化",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "メッキ業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "前処理槽ヒートポンプ加温化・排熱回収",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱回収で大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小メッキ事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "整流器の同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "整流器・前処理槽・排水処理・スクラバーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜2MW）導入の試算を実施したか",
  "整流器のIGBT式高効率化の投資回収試算を実施したか",
  "前処理槽の断熱性能改善・ヒートポンプ加温化の余地を確認したか",
  "デマンドコントローラー・整流器投入分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "メッキ・表面処理業の電気代水準はどれくらいですか？", answer: "売上高比8〜18%（電気メッキ専業は最高水準）、製造原価比12〜25%が業界平均で全業種高位。中規模メッキ工場（年商100億円級）で年2.4〜10.5億円、大規模メッキメーカー（年商200億円超）で年10.5〜45億円規模の電気代になります。" },
  { question: "整流器の電気代を削減するには？", answer: "①シリコン整流器→IGBT整流器更新（電力▲5〜10%、効率97%超）、②整流器投入タイミング分散、③直流配線損失最小化、④電解槽の濃度・温度最適化、⑤BEMS・デマンド制御、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "排水処理24h稼働の電気代対策は？", answer: "①排水処理ポンプ・撹拌機インバータ化（電力▲20〜30%）、②排水量変動に追従する負荷制御、③排水熱回収による前処理槽加温化、④濾過設備の高効率化、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年200〜500万円の削減が目安。" },
  { question: "前処理槽加温の電気代対策は？", answer: "①槽断熱性能改善（電力▲15〜25%）、②ヒートポンプ加温化（電気ヒーター比効率3倍）、③加温時間の最適化、④フタ・蓋の活用、⑤排熱回収との連携、の5本柱が効果的。中規模工場で年300〜700万円の削減が目安。" },
  { question: "メッキ業の固定プランと市場連動プランどちらが向きますか？", answer: "電解槽・排水処理の24h連続稼働でベースロードが大きく、停止が法令違反・品質劣化につながるため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "整流器のIGBT化は投資回収できますか？", answer: "従来のシリコン整流器からIGBT整流器への更新で、整流効率85〜90%→95〜97%。中規模工場（年間2,500万kWh）で電力▲5〜10%、年間1,000〜1,500万円の削減、投資回収はSII＋ものづくり補助で2〜3年が目安です。" },
  { question: "メッキ業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はメッキ工場で投資回収できますか？", answer: "屋根面積2,500m²以上、24h電解槽稼働の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全国鍍金工業組合連合会", url: "https://www.zenmeren.or.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PlatingSurfaceTreatmentElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/plating-surface-treatment-electricity-cost-review"
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
          <span className="text-slate-800">メッキ・表面処理業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            メッキ・表面処理業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            メッキ・表面処理業は、電解槽・整流器の直流大電力、前処理槽の加温電力、排水処理24h連続稼働、スクラバー排煙処理など多面的な電力負荷を持ち、製造原価に占める電気代比率は全業種で最高クラスです。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>メッキ・表面処理業の電力使用プロファイル（電解／前処理／排水処理／スクラバー）</li>
              <li>業界平均の電気代水準（売上高比8〜18%）とメッキ単位あたり単価</li>
              <li>整流器IGBT化・ヒートポンプ加温化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>排水処理24h稼働の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>メッキ業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              メッキ・表面処理業の電力使用特性 — 電解・前処理・排水処理・スクラバー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ・表面処理業の電力使用は『電解槽整流器／前処理槽／排水処理／スクラバー／乾燥炉』の5層で構成されます。電解槽の直流大電力と排水処理24h稼働が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比8〜18%、メッキ単位0.5〜6 kWh/m²
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ・表面処理業の電気代水準はメッキ種別（亜鉛／ニッケル／クロム／金）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全国鍍金工業組合連合会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              メッキ業の主要な電気代上昇要因 — 電解・排水処理・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ業の電気代上昇は、電解槽・排水処理の24h稼働ベースロードに加え、整流器効率、市場連動リスク、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模メッキ／中規模メッキ／大規模メッキメーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ・表面処理業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/metal-stamping-sheet-metal-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属プレス・板金業の電気料金見直し</Link>
              、{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              整流器・排水処理のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ業は整流器投入タイミング分散、前処理槽夜間運転シフト、排水処理ポンプの負荷追従など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h電解槽稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ業は電解槽・排水処理の24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電解槽の24h稼働が必須</li>
                  <li>排水処理停止が法令違反</li>
                  <li>受託加工単価への即時転嫁が困難</li>
                  <li>整流器大電力で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に電解電力負荷増</li>
                  <li>排水処理24h稼働が高単価時間帯に直撃</li>
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
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。メッキ業の中規模工場では負担額が請求総額の10〜18%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模メッキ工場（年2,000万kWh）の負担額試算</p>
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
              メッキ業特有の節電・省エネ施策 — 整流器IGBT化・ヒートポンプ加温・排水熱回収
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ業の省エネは『整流器IGBT化』『前処理槽ヒートポンプ加温化』『排水処理インバータ化』『排水熱回収』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">整流器IGBT化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>シリコン→IGBTで効率85→97%</li>
                  <li>電力▲5〜10%、整流ロス大幅減</li>
                  <li>SII＋ものづくり補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">前処理槽ヒートポンプ加温化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気ヒーター→ヒートポンプで効率3倍</li>
                  <li>加温電力▲50〜70%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">排水処理インバータ化・熱回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>排水処理ポンプインバータ化で▲20〜30%</li>
                  <li>排水熱回収で前処理槽加温補助</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h電解槽稼働で自家消費率80%超</li>
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
              メッキ業向けに活用しやすい補助金は5本柱。整流器IGBT化はSII＋ものづくり補助の組合せで補助率を最大化できます。
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
              メッキ業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社メッキ工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メッキ・表面処理業は電解槽の大電力消費・排水処理24h稼働・法令上停止不可の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>整流器投入のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した13〜17%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="plating-surface-treatment-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/casting-diecasting-electricity-cost-review", title: "鋳造・ダイカスト業の電気料金見直し", description: "電気炉・保持炉の電力対策。" },
              { href: "/forging-heat-treatment-electricity-cost-review", title: "鍛造・熱処理業の電気料金見直し", description: "加熱炉・焼入れの電力対策。" },
              { href: "/metal-stamping-sheet-metal-electricity-cost-review", title: "金属プレス・板金業の電気料金見直し", description: "プレス機の瞬時負荷対策。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工一般の見直しポイント。" },
              { href: "/electronic-components-electricity-cost-review", title: "電子部品業の電気料金見直し", description: "電子部品製造の電力対策。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "メッキの取引先業種。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "排水処理が共通する業種。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "メッキ法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "整流器・ヒートポンプ更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "電解槽24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
            ]}
          />

          <ContentCta
            heading="自社のメッキ工場条件でリスクを確認する"
            description="電解槽・整流器・排水処理・前処理槽の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。整流器IGBT化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="メッキ・表面処理業の電力契約見直し、専門家に相談しませんか？"
            description="電解槽・整流器・排水処理・前処理槽の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でメッキ業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
