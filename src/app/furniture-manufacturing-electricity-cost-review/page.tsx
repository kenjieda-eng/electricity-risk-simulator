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
  "家具・建具製造業の電気料金見直しポイント｜塗装ブース・木工機械・乾燥炉の契約最適化";
const pageDescription =
  "家具・建具製造業の電気料金見直しを解説。塗装ブース・乾燥炉、木工機械、NC加工機、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "家具製造 電気料金 見直し",
    "建具 電気代",
    "塗装ブース 電力",
    "木工機械 電気代",
    "家具 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/furniture-manufacturing-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/furniture-manufacturing-electricity-cost-review",
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
    label: "塗装ブース（塗装室・乾燥炉）",
    detail:
      "家具・建具製造の主要工程。スプレー塗装ブース＋乾燥炉（電気・蒸気・赤外線）で電力＋空調負荷が大きい。1ラインあたり50〜300kWで、塗装ブース内の換気・温湿度管理が必須。工場全体の電力使用量の20〜30%を占める。",
  },
  {
    label: "木工機械（NC加工・パネルソー・面取機）",
    detail:
      "家具部材加工の中核設備。NC加工機（マシニングセンタ）、パネルソー、面取機、ボーリング機等で1工場あたり総設備200〜800kW。日中稼働中心で、工場全体の25〜40%を占める。",
  },
  {
    label: "接着剤プレス（圧着・乾燥）",
    detail:
      "突板・化粧板・合板の圧着プレス、ドアパネルの接着乾燥工程。1基あたり50〜300kWで、加熱（80〜120℃）と圧力を組み合わせた工程。",
  },
  {
    label: "集塵機・粉じん処理設備",
    detail:
      "木屑・粉じん集塵機、ダクト・サイクロン分離機等で1工場あたり50〜300kWの常時負荷。粉じん爆発リスクと労働安全衛生法対応で稼働停止不可。",
  },
  {
    label: "コンプレッサー・空調・換気",
    detail:
      "工場用エアコンプレッサー（30〜200kW）、塗装ブース換気、空調・換気の常時負荷。塗装ブースの強制換気が電力消費の大きな要素。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本家具産業振興会の統計によれば、家具・建具製造業の電気料金は売上高の3〜8%。製造原価に占める比率は5〜12%。塗装・乾燥・木工機械の電力依存度が中位の業種。",
  },
  {
    label: "製品1m³あたりの電力使用量",
    detail:
      "家具（高級家具）で1m³あたり400〜800 kWh、建具（ドア・窓枠）で1m³あたり300〜600 kWh、システムキッチン等で1m³あたり500〜1,000 kWhが業界平均。塗装工程の電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模家具工場（年商1〜5億円）で年間20〜150万 kWh、中規模家具工場（年商10〜80億円）で年間300〜1,500万 kWh、大規模家具メーカー（年商150億円超）で年間1,500万〜6,000万 kWh。高圧契約が中規模では業界標準。",
  },
];

const costFactors = [
  {
    label: "塗装ブース・乾燥炉の電力ベースロード",
    detail:
      "塗装ブース換気・乾燥炉は塗装ライン稼働中の連続稼働。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月100万kWh）で月100万円の差、年間1,200万円規模のインパクト。",
  },
  {
    label: "集塵機24h稼働の電力負荷",
    detail:
      "集塵機・粉じん処理設備は法令上停止できず24h稼働必須。電力消費が継続するため省エネ余地が大きい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間1,200万kWh使用の中規模工場で年5,400万円超の負担。",
  },
  {
    label: "コンプレッサー・塗装エアの大量消費",
    detail:
      "塗装スプレー用エアでコンプレッサーが大量消費される。エア漏れ対策と高効率コンプレッサーへの更新で大きな削減余地がある。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模家具工場（年商1〜5億円、従業員5〜20名）",
    profile: "地場家具・建具・小ロット製造／低圧〜高圧 100〜300kW／年間 20〜150万 kWh",
    annualCost: "年間電気代 600万〜4,500万円",
    note: "塗装ブース換気最適化・LED化・集塵機更新で年8〜12%削減事例。",
  },
  {
    size: "中規模家具工場（年商10〜80億円、従業員50〜200名）",
    profile: "システムキッチン・建材中堅メーカー／高圧 800〜2,000kW／年間 300〜1,500万 kWh",
    annualCost: "年間電気代 9,000万〜4.5 億円",
    note: "塗装ブース換気・コンプレッサー更新＋自家消費太陽光で年10〜15%削減事例。",
  },
  {
    size: "大規模家具メーカー（年商150億円超、従業員300名以上）",
    profile: "オフィス家具・住宅設備大手／特別高圧 2,500〜6,000kW／年間 1,500万〜6,000万 kWh",
    annualCost: "年間電気代 4.5〜18 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模家具工場の年間13%削減（Before/After）",
    before: "北陸の家具工場A社（高圧 200kW、年間 100万 kWh、年間電気代 3,000万円）。市場連動プラン継続、塗装ブース換気が常時最大、コンプレッサー15年経過。",
    after: "新電力切替（固定3年）／塗装ブース換気インバータ化（SII＋ものづくり補助1/2活用、投資600万円）／LED化／集塵機インバータ化／コンプレッサー高効率型に更新／エア漏れ対策／デマンドコントローラー導入。",
    result: "年間電気代 3,000万円 → 2,610万円（▲13%、▲390万円）／契約 kW 200→170／投資回収 補助金後 2.0年",
  },
  {
    title: "事例2：中規模家具工場の年間14%削減",
    before: "中部地方のシステムキッチン工場B社（高圧 1,500kW、年間 1,200万 kWh、年間電気代 3.6億円）。市場連動プランで2022〜2023年に月最大1,200万円の追加負担。塗装ブース・木工機械稼働。",
    after: "固定5年プラン切替／塗装ブース換気BEMS連動制御／自家消費太陽光 0.8MW 導入（屋根6,000 m²）／全コンプレッサーインバータ化／集塵機高効率化／需要家主導型PPA／NC加工機高効率化／LED化全面更新。",
    result: "年間電気代 3.6億円 → 3.1億円（▲14%、▲5,040万円）／契約 kW 1,500→1,280／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模家具メーカーの年間1.2億円削減",
    before: "国内大手オフィス家具メーカーC社の主力工場（特別高圧 4,000kW、年間 4,000万 kWh、年間電気代 12億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2 MW＋蓄電池 3 MWh／コージェネ 1MW＋排熱回収／全塗装ブース換気更新／需要家主導型PPA／DR契約締結／集塵機高効率化。",
    result: "年間電気代 12億円 → 10.8億円（▲10%、▲1.2億円）／契約 kW 4,000→3,500／投資回収 7年（補助金後 5年）／CO₂削減 約8,000 t/年",
  },
];

const demandManagement = [
  {
    label: "塗装ブース換気のインバータ制御",
    detail:
      "塗装ブース換気をBEMS連動でスプレー稼働状況に応じてインバータ制御。1工場の最大負荷を15〜25%削減した事例。",
  },
  {
    label: "木工機械の起動分散・連続生産",
    detail:
      "木工機械の起動タイミング分散、連続生産による稼働率向上で電力▲5〜10%。BEMSによる需要見える化が必須。",
  },
  {
    label: "集塵機のインバータ・台数制御",
    detail:
      "集塵機のインバータ化・台数制御で20〜35%削減。木工機械稼働状況に応じた負荷追従が効果的。",
  },
  {
    label: "コンプレッサーのインバータ化・エア漏れ対策",
    detail:
      "コンプレッサーのインバータ化＋エア漏れ対策で20〜30%削減。家具工場特有の大量エア消費に対する効果が大きい。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "塗装ブース換気・LED・集塵機インバータ・コンプレッサー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "家具・建具業向けで採択率が高い主力補助金。塗装ブース更新・コンプレッサー更新で採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。日中稼働中心で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新NC加工機・塗装装置・乾燥炉の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "家具・建具業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "塗装ブース換気・乾燥炉の電化・排熱回収",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱回収で大型補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小家具事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "塗装ブース換気・乾燥炉の電力プロファイルを把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "塗装ブース・木工機械・集塵機・コンプレッサーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（200kW〜2MW）導入の試算を実施したか",
  "塗装ブース換気のインバータ化の投資回収試算を実施したか",
  "コンプレッサーエア漏れ対策（年間電力▲10〜20%）の余地を確認したか",
  "デマンドコントローラー・木工機械起動分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "家具・建具製造業の電気代水準はどれくらいですか？", answer: "売上高比3〜8%、製造原価比5〜12%が業界平均。中規模家具工場（年商50億円級）で年9,000万〜4.5億円、大規模家具メーカー（年商150億円超）で年4.5〜18億円規模の電気代になります。" },
  { question: "塗装ブース換気の電気代を削減するには？", answer: "①塗装ブース換気のインバータ化＋BEMS連動制御（電力▲15〜25%）、②スプレー稼働連動制御、③乾燥炉の高効率化、④排熱回収、⑤夜間運転モード切替、の5本柱が中心。投資回収はSII補助で2〜4年が目安です。" },
  { question: "コンプレッサーの電気代対策は？", answer: "①コンプレッサーのインバータ化＋エア漏れ対策（電力▲20〜30%）、②高効率モーターへの更新、③適正圧力設定、④台数制御、⑤エア使用機器の見直し、の5本柱が効果的。中規模工場で年200〜500万円の削減が目安。エア漏れ対策は投資ゼロでも効果大。" },
  { question: "集塵機の電気代対策は？", answer: "①集塵機のインバータ化（電力▲20〜35%）、②木工機械稼働状況に応じた負荷追従、③高効率モーターへの更新、④フィルター更新、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年100〜300万円の削減が目安。" },
  { question: "家具・建具業の固定プランと市場連動プランどちらが向きますか？", answer: "塗装ブース・集塵機の連続稼働、日中稼働中心でベースロードが大きく、受託加工単価への即時転嫁が困難なため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数百万円の追加負担が発生しました。" },
  { question: "塗装ブース換気インバータ化は投資回収できますか？", answer: "従来のオンオフ制御からインバータ制御＋BEMS連動への更新で、換気電力▲15〜25%。中規模工場（年間1,200万kWh）で年間500〜1,000万円の削減、投資回収はSII＋GX補助で2〜4年が目安です。" },
  { question: "家具・建具業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は家具・建具工場で投資回収できますか？", answer: "屋根面積1,500m²以上、日中稼働中心の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本家具産業振興会", url: "https://www.kagu.or.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function FurnitureManufacturingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/furniture-manufacturing-electricity-cost-review"
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
          <span className="text-slate-800">家具・建具製造業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            家具・建具製造業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            家具・建具製造業は、塗装ブースの換気・乾燥電力、NC加工機・パネルソー等の木工機械、集塵機の常時稼働、コンプレッサーの大量エア消費など多面的な電力負荷を持ちます。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>家具・建具製造業の電力使用プロファイル（塗装／木工／集塵／コンプレッサー）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）と製品単位あたり単価</li>
              <li>塗装ブース換気インバータ化・コンプレッサー高効率化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>コンプレッサーエア漏れ対策の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>家具・建具業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              家具・建具製造業の電力使用特性 — 塗装・木工・集塵・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具製造業の電力使用は『塗装ブース乾燥／木工機械／接着剤プレス／集塵機／コンプレッサー空調』の5層で構成されます。塗装ブース換気と集塵機常時稼働が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜8%、製品単位300〜1,000 kWh/m³
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具製造業の電気代水準は製品種別（家具／建具／システムキッチン）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本家具産業振興会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              家具・建具業の主要な電気代上昇要因 — 塗装・集塵・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具業の電気代上昇は、塗装ブース換気ベースロードに加え、集塵機常時稼働、コンプレッサー大量消費、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模家具／中規模家具／大規模家具メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具製造業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/lumber-woodworking-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">木材加工・製材業の電気料金見直し</Link>
              、{" "}
              <Link href="/paint-ink-manufacturing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">塗料・インキ業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              塗装ブース・木工機械のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具業は塗装ブース換気インバータ制御、木工機械起動分散、集塵機負荷追従、コンプレッサーエア漏れ対策など、業種特有のデマンド管理戦略が効果的です。
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
              燃料費調整・市場連動プランの影響 — 日中稼働中心の業種
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具業は日中稼働中心、集塵機24h稼働で平日昼間の電力使用が多く、市場連動プランでは高値時間帯に直撃されるリスクがある業種です。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>塗装ブース・集塵機の連続稼働</li>
                  <li>日中稼働中心で高値時間帯と一致</li>
                  <li>受託加工単価への即時転嫁が困難</li>
                  <li>大規模BtoB契約価格への転嫁困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に電力負荷集中</li>
                  <li>塗装ブース稼働が高単価時間帯に集中</li>
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
              再エネ賦課金の影響 — 製造業の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。家具・建具業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模家具工場（年1,200万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 4,188万円</li>
                  <li>2025年度（3.98円/kWh）：年 4,776万円（+588万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 5,400万円（+1,212万円）</li>
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
              家具・建具業特有の節電・省エネ施策 — 塗装ブース換気・コンプレッサー・集塵
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具業の省エネは『塗装ブース換気インバータ化』『コンプレッサー高効率化＋エア漏れ対策』『集塵機インバータ化』『木工機械連続稼働』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">塗装ブース換気インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>オンオフ→インバータ＋BEMS連動</li>
                  <li>換気電力▲15〜25%</li>
                  <li>SII＋GX補助で投資回収2〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コンプレッサー高効率化＋エア漏れ対策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>インバータ化＋エア漏れ対策で電力▲20〜30%</li>
                  <li>エア漏れ対策は投資ゼロでも効果大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">集塵機インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>集塵機インバータ化で電力▲20〜35%</li>
                  <li>木工機械稼働に追従</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（200kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中稼働中心で自家消費率80%超</li>
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
              家具・建具業向けに活用しやすい補助金は5本柱。塗装ブース換気・コンプレッサー更新はSII＋ものづくり補助の組合せで補助率を最大化できます。
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
              家具・建具業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社家具・建具工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              家具・建具業は塗装ブース換気・集塵機24h稼働・コンプレッサー大量消費の3重課題に同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>塗装ブース・コンプレッサーのピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した13〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="furniture-manufacturing-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/lumber-woodworking-electricity-cost-review", title: "木材加工・製材業の電気料金見直し", description: "木材原料の取引先業種。" },
              { href: "/paint-ink-manufacturing-electricity-cost-review", title: "塗料・インキ業の電気料金見直し", description: "塗料の取引先業種。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立工程の電力対策。" },
              { href: "/construction-electricity-cost-review", title: "建設業の電気料金見直し", description: "建具の取引先業種。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "システムキッチン等の取引先業種。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "日中稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "家具・建具法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "日中稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "塗装ブース・コンプレッサー更新の主力補助金。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "デマンド管理の基礎。" },
              { href: "/power-factor-improvement", title: "力率改善の基本", description: "木工機械用力率改善。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "集塵機24h稼働事業者のリスク。" },
            ]}
          />

          <ContentCta
            heading="自社の家具・建具工場条件でリスクを確認する"
            description="塗装ブース・木工機械・集塵機・コンプレッサーの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。換気インバータ化やエア漏れ対策後のシナリオ比較、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="家具・建具製造業の電力契約見直し、専門家に相談しませんか？"
            description="塗装ブース・木工機械・集塵機・コンプレッサーの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で家具・建具業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
