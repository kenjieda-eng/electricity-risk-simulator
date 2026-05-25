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
  "造船・舶用業の電気料金見直しポイント｜大型溶接・ガントリークレーン・ドック照明の契約最適化";
const pageDescription =
  "造船・舶用業の電気料金見直しを解説。大型溶接機・ガントリークレーン、ドック照明、特別高圧契約、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "造船 電気料金 見直し",
    "舶用 電気代",
    "大型溶接 ガントリークレーン 電力",
    "ドック照明 電気代",
    "造船 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shipbuilding-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shipbuilding-electricity-cost-review",
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
    label: "大型溶接機・自動溶接ライン",
    detail:
      "造船業の中核設備。船体構造の大型溶接機、自動溶接ロボット、潜弧溶接（SAW）等で1台あたり100〜500kW。同時複数稼働でデマンドピークが突出する。造船所全体の電力使用量の20〜30%を占める。",
  },
  {
    label: "ガントリークレーン・大型クレーン",
    detail:
      "造船所の主要動力。ブロック組立・搭載に使用する数十〜数百トン吊り大型クレーン、ゴライアスクレーン（吊上荷重1,000t超）。1基あたり起動時1,000〜5,000kWの瞬間負荷。複数基同時稼働でデマンドピーク突出。",
  },
  {
    label: "ドック照明・船内照明（24h点灯）",
    detail:
      "ドック内照明、船内作業照明は24h点灯が主流。大型造船所では数千〜数万灯の照明が必要。1造船所あたり総設備500〜2,000kWの常時負荷。LED化で大幅削減余地あり。",
  },
  {
    label: "コンプレッサー・圧縮空気（高圧大量）",
    detail:
      "造船所では工作機械・溶接機・空気圧工具の動力源として高圧コンプレッサーが大量設置される。1造船所あたり300〜2,000kWの常時負荷。エア漏れによるロスが多発。",
  },
  {
    label: "塗装・乾燥・特殊工場（船底塗装）",
    detail:
      "船底塗装の塗装ブース、乾燥設備、ショットブラスト等の特殊工場。1工場あたり総設備200〜1,000kWの動力負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本造船工業会の統計によれば、造船・舶用業の電気料金は売上高の3〜8%。製造原価に占める比率は5〜12%。大型溶接機・クレーン・ドック照明の電力依存度が中位の業種だが、規模が大きく絶対額が大きい。",
  },
  {
    label: "船1隻あたりの電力使用量",
    detail:
      "中型バルクキャリア（5万トン級）建造で1隻あたり500〜800万 kWh、大型コンテナ船（10万トン級）建造で1隻あたり1,200〜2,000万 kWh、LNGタンカー建造で1隻あたり1,800〜3,000万 kWhが業界平均。",
  },
  {
    label: "造船所規模別の年間使用量",
    detail:
      "中小型造船所（年商50〜300億円）で年間1,000〜4,000万 kWh、大型造船所（年商500〜2,000億円）で年間4,000万〜2億 kWh、超大型造船所（年商3,000億円超）で年間2億〜5億 kWh。特別高圧契約が業界標準。",
  },
];

const costFactors = [
  {
    label: "大型溶接機・クレーン同時稼働のデマンドピーク",
    detail:
      "造船所では大型溶接機・クレーン・空気圧工具の同時稼働で瞬間負荷が突出。契約電力が実需の1.5〜2倍に膨らむことがある。デマンド管理の効果が極めて大きい業種。",
  },
  {
    label: "ドック照明24h点灯のベースロード",
    detail:
      "ドック照明は24h点灯が主流。月間使用量が大きく、LED化で大幅削減余地あり。燃料費調整額1円/kWhの変動でも大型造船所（月500万kWh）で月500万円の差。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間5,000万kWh使用の大型造船所で年2.25億円超の負担。再エネ賦課金減免制度の対象になりやすい。",
  },
  {
    label: "特別高圧契約・基本料金の大きさ",
    detail:
      "造船所は契約電力が大きいため特別高圧契約が標準。基本料金が大きく、契約電力（kW）最適化の効果が大きい。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、大電力消費業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "中小型造船所（年商50〜300億円、従業員200〜500名）",
    profile: "中小型船・特殊船建造／高圧 1,500〜3,500kW／年間 1,000〜4,000万 kWh",
    annualCost: "年間電気代 3〜12 億円",
    note: "LED化・コンプレッサー更新・デマンド管理で年8〜13%削減事例。",
  },
  {
    size: "大型造船所（年商500〜2,000億円、従業員1,000〜3,000名）",
    profile: "コンテナ船・タンカー建造／特別高圧 4,000〜10,000kW／年間 4,000万〜2億 kWh",
    annualCost: "年間電気代 12〜60 億円",
    note: "大型溶接機高効率化＋自家消費太陽光＋ドック照明LED化で年10〜15%削減事例。",
  },
  {
    size: "超大型造船所（年商3,000億円超、従業員5,000名以上）",
    profile: "今治造船・三菱重工等大手／特別高圧 12,000〜30,000kW／年間 2億〜5億 kWh",
    annualCost: "年間電気代 60〜150 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光＋風力PPAが主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：中型造船所の年間13%削減（Before/After）",
    before: "瀬戸内地方の中型造船所A社（高圧 2,500kW、年間 2,000万 kWh、年間電気代 6億円）。市場連動プラン継続、ドック照明水銀灯、コンプレッサー15年経過。",
    after: "新電力切替（固定3年）／ドック照明・船内照明LED化（SII＋ものづくり補助1/2活用、投資3,000万円）／大型コンプレッサー高効率化＋エア漏れ対策／溶接機起動分散制御／デマンドコントローラー導入。",
    result: "年間電気代 6億円 → 5.22億円（▲13%、▲7,800万円）／契約 kW 2,500→2,150／投資回収 補助金後 1.9年",
  },
  {
    title: "事例2：大型造船所の年間14%削減",
    before: "西日本の大型造船所B社（特別高圧 7,000kW、年間 7,000万 kWh、年間電気代 21億円）。市場連動プランで2022〜2023年に月最大7,000万円の追加負担。大型溶接機・クレーンの同時稼働でデマンドピーク発生。",
    after: "固定5年プラン切替／溶接機・クレーン起動分散制御／ドック照明全LED化／自家消費太陽光 2.5MW 導入（屋根15,000 m²＋遊休地）／BEMS／需要家主導型PPA／大型コンプレッサーインバータ化／力率改善コンデンサ。",
    result: "年間電気代 21億円 → 18.06億円（▲14%、▲2.94億円）／契約 kW 7,000→6,000／投資回収 補助金後 3.8年",
  },
  {
    title: "事例3：超大型造船所の年間3.5億円削減",
    before: "国内大手造船所C社の主力工場（特別高圧 18,000kW、年間 1.8億 kWh、年間電気代 54億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 5 MW＋蓄電池 8 MWh／コージェネ 3MW＋排熱回収／全ドック照明LED化／需要家主導型PPA（オフサイト風力10MW）／DR契約締結／大型溶接機高効率化／クレーンインバータ化。",
    result: "年間電気代 54億円 → 50.5億円（▲6.5%、▲3.5億円）／契約 kW 18,000→16,000／投資回収 8年（補助金後 6年）／CO₂削減 約25,000 t/年",
  },
];

const demandManagement = [
  {
    label: "大型溶接機・クレーン起動分散制御",
    detail:
      "大型溶接機・クレーンの起動タイミングを分散させ、デマンドピークを抑制。1造船所の同時最大負荷を20〜30%削減した事例。デマンドコントローラーと設備制御盤の連動が必須。",
  },
  {
    label: "ドック照明のLED化・人感センサー",
    detail:
      "水銀灯・蛍光灯→LED化で照明電力▲50〜70%。人感センサー・タイマー制御で更に削減。1造船所で年5,000万〜2億円の削減事例。",
  },
  {
    label: "コンプレッサーのインバータ化＋エア漏れ対策",
    detail:
      "大型コンプレッサーのインバータ化＋エア漏れ対策で20〜30%削減。造船所特有の大量エア消費に対する効果が極めて大きい。",
  },
  {
    label: "力率改善コンデンサ・SVC",
    detail:
      "大型溶接機・クレーンの誘導性負荷を力率改善コンデンサ・SVCで補償。力率82%→95%で基本料金▲13%、投資回収1〜2年。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "LED・大型コンプレッサー・大型溶接機・空調・力率改善",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "造船業向けで採択率が高い主力補助金。LED化・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積・遊休地の大きい造船所と相性が良い。自家消費率70%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新溶接ロボット・自動溶接ラインの新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "造船業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "国土交通省 海事局 造船業基盤強化補助金",
    target: "造船設備の更新・省エネ化・脱炭素化",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "海事局による造船業特有の補助制度。設備更新・脱炭素投資で活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "自家消費太陽光・蓄電池・コージェネ・カーボンニュートラル船舶建造設備",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "大型溶接機・クレーン同時稼働ピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "大型溶接機・クレーン・ドック照明・コンプレッサーの電力プロファイルを把握しているか",
  "力率の実績値を把握し、85%未満なら改善コンデンサ・SVCを検討したか",
  "屋根面積・遊休地を活用した自家消費太陽光（1MW〜5MW）導入の試算を実施したか",
  "ドック照明・船内照明のLED化の投資回収試算を実施したか",
  "大型コンプレッサーエア漏れ対策の余地を確認したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・国交省海事補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "造船・舶用業の電気代水準はどれくらいですか？", answer: "売上高比3〜8%、製造原価比5〜12%が業界平均。中小型造船所（年商200億円級）で年3〜12億円、大型造船所（年商1,000億円級）で年12〜60億円、超大型造船所（年商3,000億円超）で年60〜150億円規模の電気代になります。" },
  { question: "大型溶接機・クレーンのデマンド対策は？", answer: "①起動タイミング分散制御（デマンドコントローラー連動）、②高効率モーターへの更新、③溶接ロボット・自動化の高効率機種選定、④BEMS・需要見える化、⑤力率改善コンデンサ・SVC、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "ドック照明の電気代対策は？", answer: "①水銀灯・蛍光灯→LED化（電力▲50〜70%）、②人感センサー・タイマー制御、③ドック内のゾーン別点灯制御、④作業時間外の自動消灯、⑤BEMSによる需要見える化、の5本柱が効果的。大型造船所で年5,000万〜2億円の削減が目安。" },
  { question: "コンプレッサーの電気代対策は？", answer: "①大型コンプレッサーのインバータ化＋エア漏れ対策（電力▲20〜30%）、②高効率モーターへの更新、③適正圧力設定、④台数制御、⑤エア使用機器の見直し、の5本柱が効果的。造船所で年1,000〜3,000万円の削減が目安。エア漏れ対策は投資ゼロでも効果大。" },
  { question: "造船業の固定プランと市場連動プランどちらが向きますか？", answer: "造船所はドック照明24h稼働、大型クレーン・溶接機の大電力消費でベースロードが大きく、納期厳守でも電力使用パターンが計画化できるため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "力率改善で基本料金はどれくらい下がりますか？", answer: "力率85%未満では基本料金が割増、85%超で割引が適用されます。力率82%→95%で基本料金▲13%、力率改善コンデンサ・SVC投資（造船所で1,000〜5,000万円）の回収は1〜2年と極めて効率的。大型溶接機・クレーンの多い造船所では必須の対策です。" },
  { question: "造船業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、国土交通省海事局造船業基盤強化補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は造船所で投資回収できますか？", answer: "屋根面積1万m²以上、遊休地利用可能な造船所は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率70〜80%になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本造船工業会", url: "https://www.sajn.or.jp/" },
  { name: "国土交通省 海事局", url: "https://www.mlit.go.jp/maritime/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function ShipbuildingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/shipbuilding-electricity-cost-review"
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
          <span className="text-slate-800">造船・舶用業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            造船・舶用業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            造船・舶用業は、大型溶接機・自動溶接ライン、ガントリークレーン等の大型動力、ドック照明24h点灯、大型コンプレッサーなど多面的な電力負荷を持ち、規模が極めて大きい業種です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>造船業の電力使用プロファイル（大型溶接／クレーン／ドック照明／コンプレッサー）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）と船舶単位あたり単価</li>
              <li>ドック照明LED化・大型コンプレッサー更新の費用対効果</li>
              <li>規模別（中小・大型・超大型）の電気代と削減事例3件（Before/After）</li>
              <li>大型溶接機・クレーンのデマンド管理</li>
              <li>SII・PPA・ものづくり補助・国交省海事補助・GX補助の組合せ活用</li>
              <li>造船業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              造船・舶用業の電力使用特性 — 大型溶接・クレーン・ドック照明・コンプレッサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業の電力使用は『大型溶接機／ガントリークレーン／ドック照明／大型コンプレッサー／塗装乾燥』の5層で構成されます。大型溶接機・クレーン瞬間負荷とドック照明24h点灯が業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜8%、船舶単位500〜3,000万 kWh/隻
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船・舶用業の電気代水準は船種（バルクキャリア／コンテナ／LNG）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本造船工業会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              造船業の主要な電気代上昇要因 — デマンド・照明・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業の電気代上昇は、大型溶接機・クレーン瞬間負荷ピーク、ドック照明24h稼働ベースロード、特別高圧基本料金、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 中型造船所／大型造船所／超大型造船所
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船・舶用業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鉄鋼業の電気料金見直し</Link>
              、{" "}
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大型溶接機・クレーンのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業は大型溶接機・クレーン起動分散、ドック照明LED化、大型コンプレッサーインバータ化、力率改善など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 大規模ベースロードの直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業はドック照明24h・大型溶接機・クレーンの大電力消費でベースロードが大きく、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ドック照明24h稼働ベースロード大</li>
                  <li>大型溶接機・クレーンのデマンドピーク</li>
                  <li>長期建造契約への電気代転嫁が困難</li>
                  <li>大電力消費で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に電力負荷集中</li>
                  <li>大型クレーン稼働が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万〜億単位の追加負担</li>
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
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。造船業の大型造船所では負担額が請求総額の10〜18%に達します。再エネ賦課金減免制度の対象になりやすい。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">大型造船所（年7,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 2.443億円</li>
                  <li>2025年度（3.98円/kWh）：年 2.786億円（+3,430万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 3.15億円（+7,070万円）</li>
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
              造船業特有の節電・省エネ施策 — ドック照明LED・コンプレッサー・大型溶接機
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業の省エネは『ドック照明LED化』『大型コンプレッサー高効率化＋エア漏れ対策』『大型溶接機高効率化』『力率改善』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ドック照明・船内照明LED化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>水銀灯・蛍光灯→LEDで電力▲50〜70%</li>
                  <li>人感センサー・ゾーン制御で更に削減</li>
                  <li>SII＋海事補助で投資回収1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">大型コンプレッサー高効率化＋エア漏れ対策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>インバータ化＋エア漏れ対策で電力▲20〜30%</li>
                  <li>エア漏れ対策は投資ゼロでも効果大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">力率改善コンデンサ・SVC</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>力率82%→95%で基本料金▲13%</li>
                  <li>投資回収1〜2年と極めて効率的</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1MW〜5MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>屋根・遊休地利用で大規模導入可能</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・海事補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業向けに活用しやすい補助金は5本柱。ドック照明LED化はSII＋海事補助の組合せで補助率を最大化できます。
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
              造船業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社造船所の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船業は大型溶接機・クレーン瞬間負荷・ドック照明24h点灯・大電力消費の3重課題に同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>大型溶接機・クレーンのピーク影響額を試算する</li>
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
            <GlossaryLinks currentSlug="shipbuilding-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "造船材料の取引先業種。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "溶接が共通工程。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工が共通。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し", description: "組立工程の電力対策。" },
              { href: "/paint-ink-manufacturing-electricity-cost-review", title: "塗料・インキ業の電気料金見直し", description: "船底塗装の取引先業種。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し", description: "海運の関連業種。" },
              { href: "/warehouse-electricity-cost-review", title: "倉庫業の電気料金見直し", description: "港湾倉庫の関連業種。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "大電力法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "造船法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "大型工場の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・コンプレッサー更新の主力補助金。" },
              { href: "/power-factor-improvement", title: "力率改善の基本", description: "大型溶接機・クレーン用力率改善。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "デマンド管理の基礎。" },
            ]}
          />

          <ContentCta
            heading="自社の造船所条件でリスクを確認する"
            description="大型溶接機・ガントリークレーン・ドック照明・大型コンプレッサーの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。LED化や太陽光導入後のシナリオ比較、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="造船・舶用業の電力契約見直し、専門家に相談しませんか？"
            description="大型溶接機・ガントリークレーン・ドック照明・大型コンプレッサーの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で造船業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
