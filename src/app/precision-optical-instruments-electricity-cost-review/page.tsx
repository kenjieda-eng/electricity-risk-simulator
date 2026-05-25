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
  "精密・光学機器業の電気料金見直しポイント｜恒温恒湿・クリーン環境・微小振動対策の契約最適化";
const pageDescription =
  "精密・光学機器業（光学レンズ・カメラ・顕微鏡・計測器）の電気料金見直しを解説。恒温恒湿24h制御、クリーンルーム、防振空調、規模別事例、固定vs市場連動、補助金活用まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "精密機器 電気料金 見直し",
    "光学機器 電気代",
    "恒温恒湿 電力",
    "クリーンルーム 精密 電気代",
    "光学 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/precision-optical-instruments-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/precision-optical-instruments-electricity-cost-review",
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
    label: "恒温恒湿室（20℃±0.5℃・湿度±5%RH管理）",
    detail:
      "精密・光学機器製造の中核設備。レンズ加工・組立・検査の恒温恒湿室は20℃±0.5℃、湿度50%±5%RHの精密制御が必須。空調機・チラー・除湿機の24h連続稼働で、工場全体の電力使用量の30〜45%を占める業種特有のコスト構造。",
  },
  {
    label: "クリーンルーム（防塵・微小粒子管理）",
    detail:
      "光学レンズ・センサ組立のクラス1,000〜100クリーンルーム。HEPA・ULPAフィルター、温湿度管理、静電気管理を伴う。1工場あたり総設備200〜1,500kWで、工場全体の20〜35%を占める。",
  },
  {
    label: "光学測定装置・干渉計（連続稼働）",
    detail:
      "レーザー干渉計、形状測定機、表面粗さ計、コリメータ等の精密測定装置。1台あたり5〜30kWで、品質保証のため24h稼働が主流。工場全体の8〜15%を占める。",
  },
  {
    label: "防振空調・防振設備",
    detail:
      "ナノメートル精度の加工・測定のため、空調機・コンプレッサー・ポンプの低振動仕様を導入。専用防振装置が必要で、通常仕様より電力消費が10〜15%高い。",
  },
  {
    label: "コンプレッサー・真空ポンプ・チラー",
    detail:
      "クリーンエアコンプレッサー、真空ポンプ（光学薄膜形成）、装置冷却用チラー（30〜200kW）の常時負荷。精密機器工場では総設備の15〜25%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本光学工業協会の統計によれば、精密・光学機器業の電気料金は売上高の4〜10%。製造原価に占める比率は6〜15%。恒温恒湿24h制御とクリーンルーム稼働で電力依存度が高い業種。",
  },
  {
    label: "恒温恒湿室面積1m²あたりの電力使用量",
    detail:
      "恒温恒湿（±0.5℃級）で1m²あたり年間600〜1,200 kWh、クリーンクラス10,000で1m²あたり年間500〜1,000 kWh、クラス1,000で1m²あたり年間1,500〜3,000 kWhが業界平均。精密性が高いほど電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模光学工場（年商3〜15億円）で年間50〜300万 kWh、中規模精密機器工場（年商50〜300億円）で年間800〜3,500万 kWh、大規模光学メーカー（年商500億円超）で年間3,500万〜1.5億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "恒温恒湿24h制御のベースロード",
    detail:
      "恒温恒湿室・クリーンルームは24h停止不可。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月200万kWh）で月200万円の差、年間2,400万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間2,500万kWh使用の中規模工場で年1.125億円超の負担。",
  },
  {
    label: "防振仕様による電力増",
    detail:
      "精密加工・測定のため低振動仕様の空調・コンプレッサーを導入すると通常仕様より電力消費が10〜15%増加。投資判断時に電力増の試算が必須。",
  },
  {
    label: "夏季の除湿負荷増",
    detail:
      "梅雨・夏季の高湿度期に除湿負荷が増大。恒温恒湿室の除湿用再加熱（リヒート）で電力が2〜3倍に。気候変動で除湿需要は増加傾向。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模光学工場（年商3〜15億円、従業員10〜50名）",
    profile: "レンズ研磨・小ロット光学／高圧 200〜500kW／年間 50〜300万 kWh",
    annualCost: "年間電気代 1,500万〜9,000万円",
    note: "LED化・恒温空調最適化で年8〜12%削減事例。",
  },
  {
    size: "中規模精密機器工場（年商50〜300億円、従業員200〜500名）",
    profile: "カメラ・顕微鏡・計測器中堅メーカー／高圧 2,000〜4,500kW／年間 800〜3,500万 kWh",
    annualCost: "年間電気代 2.4〜10.5 億円",
    note: "恒温恒湿空調高効率化＋自家消費太陽光で年10〜15%削減事例。",
  },
  {
    size: "大規模光学メーカー（年商500億円超、従業員500名以上）",
    profile: "光学レンズ・センサ・装置大手／特別高圧 5,000〜12,000kW／年間 3,500万〜1.5億 kWh",
    annualCost: "年間電気代 10.5〜45 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模光学工場の年間12%削減（Before/After）",
    before: "関東の光学レンズ工場A社（高圧 350kW、年間 200万 kWh、年間電気代 6,000万円）。市場連動プラン継続、恒温恒湿室24h稼働、空調が15年経過。",
    after: "新電力切替（固定3年）／恒温恒湿空調インバータ化（SII＋ものづくり補助1/2活用、投資1,000万円）／LED化／温湿度設定の見直し（過剰精度の緩和）／コンプレッサーインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 6,000万円 → 5,280万円（▲12%、▲720万円）／契約 kW 350→310／投資回収 補助金後 1.4年",
  },
  {
    title: "事例2：中規模精密機器工場の年間14%削減",
    before: "中部地方のカメラ工場B社（高圧 3,000kW、年間 2,500万 kWh、年間電気代 7.5億円）。市場連動プランで2022〜2023年に月最大2,500万円の追加負担。恒温恒湿室・クリーンルーム稼働。",
    after: "固定5年プラン切替／恒温恒湿空調インバータ化＋BEMS連動／自家消費太陽光 1MW 導入（屋根7,000 m²）／HEPA高効率型／温湿度ゾーン管理／コンプレッサー真空ポンプインバータ化／デシカント空調導入で除湿効率化。",
    result: "年間電気代 7.5億円 → 6.45億円（▲14%、▲1.05億円）／契約 kW 3,000→2,600／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模光学メーカーの年間1.5億円削減",
    before: "国内大手光学メーカーC社の主力工場（特別高圧 7,000kW、年間 7,000万 kWh、年間電気代 21億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 4 MWh／コージェネ 2MW＋排熱回収／恒温恒湿空調全面更新／需要家主導型PPA（オフサイト風力4MW）／DR契約締結／デシカント空調＋ヒートポンプ。",
    result: "年間電気代 21億円 → 19.5億円（▲7%、▲1.5億円）／契約 kW 7,000→6,300／投資回収 7年（補助金後 5年）／CO₂削減 約15,000 t/年",
  },
];

const demandManagement = [
  {
    label: "恒温恒湿空調の負荷追従制御",
    detail:
      "恒温恒湿空調をBEMS連動で外気条件・在室人数に応じてインバータ制御。1工場の最大負荷を10〜15%削減した事例。",
  },
  {
    label: "クリーンルーム温湿度ゾーン管理",
    detail:
      "クリーンルーム内の温湿度要求が異なる工程をゾーン分けし、必要な精度のみ高精度制御。電力▲10〜20%。",
  },
  {
    label: "デシカント空調による除湿効率化",
    detail:
      "高湿度期の除湿をデシカント空調＋ヒートポンプの組合せで電力▲30〜40%。リヒート不要で大幅省エネ。",
  },
  {
    label: "コンプレッサー・真空ポンプのインバータ化",
    detail:
      "コンプレッサー・真空ポンプのインバータ化・台数制御で20〜35%削減。低振動仕様を維持しつつ効率化。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "恒温恒湿空調高効率化・LED・コンプレッサー・チラー・デシカント空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "精密・光学機器業向けで採択率が高い主力補助金。空調更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h恒温恒湿稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新精密加工装置・測定装置・恒温恒湿空調の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "精密・光学機器業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "恒温恒湿空調全面更新・排熱回収・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小光学事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "恒温恒湿空調の電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "恒温恒湿室・クリーンルーム・測定装置・コンプレッサーの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜2MW）導入の試算を実施したか",
  "恒温恒湿空調のインバータ化・デシカント化の投資回収試算を実施したか",
  "温湿度精度の過剰設定（顧客要求超え）がないか確認したか",
  "デマンドコントローラー・空調ゾーン管理の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "精密・光学機器業の電気代水準はどれくらいですか？", answer: "売上高比4〜10%、製造原価比6〜15%が業界平均。中規模精密機器工場（年商200億円級）で年2.4〜10.5億円、大規模光学メーカー（年商500億円超）で年10.5〜45億円規模の電気代になります。" },
  { question: "恒温恒湿室の電気代を削減するには？", answer: "①空調インバータ化＋BEMS連動制御（電力▲10〜15%）、②温湿度精度の最適化（顧客要求の最小化）、③デシカント空調＋ヒートポンプ導入（除湿電力▲30〜40%）、④温湿度ゾーン管理、⑤外気条件に応じた運転モード切替、の5本柱が中心。投資回収はSII補助で2〜4年が目安です。" },
  { question: "クリーンルームの電気代対策は？", answer: "①HEPA・ULPAフィルター高効率型への更新（通気抵抗▲30%）、②空調インバータ化、③クリーンクラス最適化、④温湿度ゾーン管理、⑤夜間・休止時の運転モード切替、の5本柱が効果的。中規模工場で年500〜1,200万円の削減が目安。" },
  { question: "夏季の除湿負荷を削減するには？", answer: "①デシカント空調＋ヒートポンプ導入（除湿電力▲30〜40%）、②リヒート最小化、③排熱回収による再加熱補助、④外気条件に応じた除湿モード制御、⑤断熱・気密性能改善、の5本柱が効果的。投資回収は補助金活用で2〜4年が目安。" },
  { question: "精密・光学機器業の固定プランと市場連動プランどちらが向きますか？", answer: "恒温恒湿室・クリーンルーム・測定装置の連続稼働でベースロードが大きく、温湿度逸脱が即座に品質問題につながるため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "デシカント空調＋ヒートポンプは投資回収できますか？", answer: "従来の冷却除湿＋リヒート方式からデシカント＋ヒートポンプへの更新で、除湿電力▲30〜40%。中規模工場（年間2,500万kWh）で年間1,000〜1,500万円の削減、投資回収はSII＋GX補助で3〜5年が目安です。" },
  { question: "精密・光学機器業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は精密・光学機器工場で投資回収できますか？", answer: "屋根面積2,500m²以上、24h恒温恒湿稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本光学工業協会", url: "https://www.joia-jp.org/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function PrecisionOpticalInstrumentsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/precision-optical-instruments-electricity-cost-review"
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
          <span className="text-slate-800">精密・光学機器業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            精密・光学機器業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            精密・光学機器業（光学レンズ・カメラ・顕微鏡・計測器）は、恒温恒湿室（20℃±0.5℃）の24h連続制御、クリーンルームの防塵管理、防振空調、24h測定装置稼働など多面的な電力負荷を持ちます。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>精密・光学機器業の電力使用プロファイル（恒温恒湿／クリーンルーム／測定装置／防振空調）</li>
              <li>業界平均の電気代水準（売上高比4〜10%）と空間単位あたり単価</li>
              <li>恒温恒湿空調インバータ化・デシカント化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>夏季除湿負荷の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>精密・光学機器業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              精密・光学機器業の電力使用特性 — 恒温恒湿・クリーンルーム・測定・防振
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業の電力使用は『恒温恒湿室／クリーンルーム／光学測定装置／防振空調／コンプレッサー真空ポンプ』の5層で構成されます。恒温恒湿24h制御が最大消費要素で業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比4〜10%、空間単位500〜3,000 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業の電気代水準は精度クラス（恒温恒湿級・クリーンクラス）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本光学工業協会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              精密・光学機器業の主要な電気代上昇要因 — 恒温恒湿・除湿・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業の電気代上昇は、恒温恒湿24h制御ベースロードに加え、防振仕様の電力増、夏季除湿負荷、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模光学／中規模精密機器／大規模光学メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/precision-instruments-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">精密機器業の電気料金見直し</Link>
              、{" "}
              <Link href="/electronic-components-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電子部品業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              恒温恒湿空調・除湿のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業は恒温恒湿空調インバータ制御、温湿度ゾーン管理、デシカント空調、コンプレッサーインバータ化など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h恒温恒湿稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業は恒温恒湿室・クリーンルームの24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>恒温恒湿空調の24h稼働が必須</li>
                  <li>温湿度逸脱が即座に品質問題</li>
                  <li>顧客契約価格への即時転嫁が困難</li>
                  <li>夏季除湿負荷で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季の市場高値期に除湿負荷急増</li>
                  <li>恒温恒湿24h稼働が高単価時間帯に直撃</li>
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
              再エネ賦課金の影響 — 24h恒温恒湿業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。精密・光学機器業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模精密機器工場（年2,500万kWh）の負担額試算</p>
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
              精密・光学機器業特有の節電・省エネ施策 — 恒温恒湿空調・デシカント・ゾーン管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業の省エネは『恒温恒湿空調インバータ化』『デシカント空調＋ヒートポンプ』『温湿度ゾーン管理』『HEPA高効率化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">恒温恒湿空調インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>オンオフ→インバータでBEMS連動制御</li>
                  <li>空調電力▲10〜15%</li>
                  <li>SII＋GX補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">デシカント空調＋ヒートポンプ</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>除湿電力▲30〜40%、リヒート不要</li>
                  <li>夏季高湿度期に特に効果大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">温湿度ゾーン管理</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>工程別精度要求に応じたゾーン分け</li>
                  <li>電力▲10〜20%、過剰精度の解消</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h恒温恒湿稼働で自家消費率80%超</li>
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
              精密・光学機器業向けに活用しやすい補助金は5本柱。恒温恒湿空調更新はSII＋GX補助の組合せで補助率を最大化できます。
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
              精密・光学機器業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社精密・光学機器工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              精密・光学機器業は恒温恒湿24h制御・夏季除湿負荷・温湿度逸脱リスクの3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>恒温恒湿空調のピーク影響額を試算する</li>
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
            <GlossaryLinks currentSlug="precision-optical-instruments-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/precision-instruments-electricity-cost-review", title: "精密機器業の電気料金見直し", description: "精密機器一般の見直しポイント。" },
              { href: "/electronic-components-electricity-cost-review", title: "電子部品業の電気料金見直し", description: "電子部品製造の電力対策。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体業の電気料金見直し", description: "半導体製造の電力対策。" },
              { href: "/semiconductor-facility-electricity-cost-review", title: "半導体ファシリティの電気料金見直し", description: "ファシリティ運用の電力対策。" },
              { href: "/medical-device-manufacturing-electricity-cost-review", title: "医療機器製造業の電気料金見直し", description: "クリーン環境が共通。" },
              { href: "/electronics-electricity-cost-review", title: "電機・電子業の電気料金見直し", description: "電機業一般の見直しポイント。" },
              { href: "/research-facility-electricity-cost-review", title: "研究施設の電気料金見直し", description: "恒温恒湿環境が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "精密機器法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "恒温恒湿空調更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "恒温恒湿24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の精密・光学機器工場条件でリスクを確認する"
            description="恒温恒湿空調・クリーンルーム・光学測定装置の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。デシカント空調導入後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="精密・光学機器業の電力契約見直し、専門家に相談しませんか？"
            description="恒温恒湿空調・クリーンルーム・光学測定装置の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で精密・光学機器業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
