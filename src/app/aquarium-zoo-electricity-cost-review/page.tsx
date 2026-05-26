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
  "水族館・動物園の電気料金見直しポイント｜生命維持装置24h・ろ過ポンプ・水温管理の契約最適化";
const pageDescription =
  "水族館・動物園の電気料金見直しを解説。生命維持装置24h、ろ過ポンプ、水温管理、展示照明、爬虫類ヒーティング、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "水族館 電気料金 見直し",
    "動物園 電気代",
    "生命維持装置 電力",
    "ろ過ポンプ 水温管理 電気代",
    "水族館 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/aquarium-zoo-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/aquarium-zoo-electricity-cost-review",
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
    label: "生命維持装置（ろ過ポンプ・水温管理・酸素供給）24h",
    detail:
      "水族館の中核設備。大水槽循環ろ過ポンプ、水温管理用ヒーター・チラー、酸素供給ブロワー、塩分濃度調整。中規模水族館で総設備300〜1,200kWの常時負荷で24h停止不可稼働。施設全体の電力使用量の40〜55%を占める最大消費要素。",
  },
  {
    label: "水族館・大水槽空調",
    detail:
      "観覧通路の空調、水槽周辺の温湿度管理、結露対策。中規模水族館で総設備100〜500kW。来園者数変動の影響を受けつつ、生体保護のため基本連続稼働。施設全体の15〜25%を占める。",
  },
  {
    label: "爬虫類・両生類のヒーティング（動物園）",
    detail:
      "爬虫類館・両生類館の温度管理用ヒーター、紫外線ライト、保温灯。動物園で総設備20〜100kWの常時負荷。冬季は電力使用量が夏季の1.5〜2倍に拡大。",
  },
  {
    label: "展示照明・LED演出（夜間水族館）",
    detail:
      "水槽展示用LEDライト、海月などのアートライト、夜間営業時の演出照明。中規模水族館で総設備50〜250kW。LED化が進み省エネ化効果が高い領域。",
  },
  {
    label: "夜間バックヤード（飼育員作業・調餌室）",
    detail:
      "飼育員作業エリア、調餌室、餌料冷蔵冷凍、医療室、検疫室の照明・空調。中規模施設で総設備30〜120kW。夜間も低負荷で継続稼働。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本動物園水族館協会（JAZA）・文科省社会教育調査・環境省動物関連統計によれば、水族館・動物園の電気料金は売上高（入園料収入＋運営費）の8〜18%（水族館は最高水準）。来園者数変動に関わらず生命維持の固定電力が大きく、業種別で最高水準の電力依存度を持つ業種。",
  },
  {
    label: "施設面積1m²あたりの電力使用量",
    detail:
      "小規模動物園で1m²あたり年間120〜250 kWh、中規模水族館で1m²あたり年間400〜800 kWh、大規模水族館（沖縄美ら海級）で1m²あたり年間700〜1,500 kWhが業界平均。水族館は動物園の3〜5倍の電力消費密度。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模動物園（地方市営）で年間80〜400万 kWh、中規模水族館（年間来園者20〜100万人）で年間500〜2,500万 kWh、大規模水族館・動物園（年間来園者200〜500万人）で年間3,000万〜1.5億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "生命維持装置の停止不可性とBCP",
    detail:
      "ろ過ポンプ・水温管理は停止すると数時間で生体に致命的影響。BCP対策として自家発電・蓄電池併設が必須水準。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模水族館（月150万kWh）で月150万円の差。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間2,000万kWh使用の中規模水族館で年9,000万円超の負担。",
  },
  {
    label: "水温管理の季節変動",
    detail:
      "冷水生物（ペンギン・寒帯魚）は夏季に冷却負荷増、温水生物（熱帯魚・サンゴ）は冬季にヒーター負荷増。夏冬で電力使用量が30〜50%変動する季節性。",
  },
  {
    label: "来園者数変動と固定電力比率",
    detail:
      "来園者数の季節変動・週末変動が大きい一方、生命維持電力は固定。来園者数に対する電気代変動率は10〜15%程度で、来園者収入減でも電力費負担が継続する財務構造。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模動物園（年間来園者10〜30万人）",
    profile: "地方市営動物園・小規模／高圧 150〜500kW／年間 80〜400万 kWh",
    annualCost: "年間電気代 2,400万〜1.2 億円",
    note: "LED化・空調インバータ化・ヒーティング最適化で年8〜12%削減事例。",
  },
  {
    size: "中規模水族館（年間来園者20〜100万人）",
    profile: "都市型水族館・中規模／高圧 600〜2,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "ろ過ポンプインバータ化＋BEMS＋自家消費太陽光で年10〜14%削減事例。",
  },
  {
    size: "大規模水族館・動物園（年間来園者200〜500万人）",
    profile: "沖縄美ら海・海遊館・東京都恩賜上野動物園等／特別高圧 3,000〜10,000kW／年間 3,000万〜1.5億 kWh",
    annualCost: "年間電気代 9〜45 億円",
    note: "長期固定（5〜10年）契約＋自家発電・蓄電池BCP＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模動物園の年間11%削減（Before/After）",
    before: "地方市営動物園A（高圧 300kW、年間 200万 kWh、年間電気代 6,000万円）。市場連動プラン継続、ろ過ポンプオンオフ制御、爬虫類館ヒーティング旧式、展示照明蛍光灯。",
    after: "新電力切替（固定3年）／LED化（展示・通路・バックヤード、投資500万円、SII補助1/2活用）／ろ過ポンプインバータ化／爬虫類館ヒーティング高効率型／空調インバータ化／デマンドコントローラー導入。",
    result: "年間電気代 6,000万円 → 5,340万円（▲11%、▲660万円）／契約 kW 300→260／投資回収 補助金後 1.5年",
  },
  {
    title: "事例2：中規模水族館の年間13%削減",
    before: "関東の中規模水族館B（高圧 1,500kW、年間 1,200万 kWh、年間電気代 3.6億円）。市場連動プランで2022〜2023年に月最大1,200万円の追加負担。ろ過ポンプ常時定格稼働、水温管理オンオフ制御。",
    after: "固定3年プラン切替／ろ過ポンプインバータ化＋台数制御／水温管理BEMS統合（生体ごと最適化）／LED演出全面化／自家消費太陽光 500kW 導入（屋根3,500 m²）／非常用蓄電池 500kWh（BCP兼用）／需要家主導型PPA／空調自動制御／ヒートポンプチラー高効率化。",
    result: "年間電気代 3.6億円 → 3.132億円（▲13%、▲4,680万円）／契約 kW 1,500→1,300／投資回収 補助金後 4年",
  },
  {
    title: "事例3：大規模水族館の年間4.5億円削減",
    before: "国内大手水族館C（特別高圧 6,000kW、年間 5,500万 kWh、年間電気代 16.5億円）。長期固定契約継続も新水槽増設で契約電力上振れ、生命維持BCP対策不十分。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2 MW＋蓄電池 5 MWh（BCP兼用、生命維持装置24h稼働継続可能）／コージェネ 1.5MW＋排熱（チラー駆動）／LED全面化／需要家主導型PPA（オフサイト風力3MW）／DR契約締結／BEMS統合運用／ろ過ポンプ全面インバータ化／水温管理AI最適化。",
    result: "年間電気代 16.5億円 → 12億円（▲27%、▲4.5億円）／契約 kW 6,000→5,300／投資回収 7年（補助金後 5年）／CO₂削減 約11,000 t/年／BCP対応で生命維持24h継続可能",
  },
];

const demandManagement = [
  {
    label: "ろ過ポンプのインバータ化・台数制御",
    detail:
      "大水槽循環ろ過ポンプをインバータ化し、水質測定値連動で運転台数を最適化。ろ過電力▲20〜35%。",
  },
  {
    label: "水温管理の生体別最適化",
    detail:
      "BEMS連動で生体ごとに最適水温を維持しつつ、許容範囲内で外気温連動制御。水温管理電力▲15〜25%。",
  },
  {
    label: "夜間バックヤードの照明・空調最適化",
    detail:
      "夜間飼育員作業エリアの照明人感センサー化、空調の夜間モード切替。バックヤード電力▲30〜40%。",
  },
  {
    label: "自家発電・蓄電池BCPの平常時活用",
    detail:
      "BCP用自家発電・蓄電池をピークカット・デマンド削減に併用。契約電力▲10〜15%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "LED・空調更新・ろ過ポンプインバータ化・ヒートポンプチラー・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "水族館・動物園向けで採択率が高い主力補助金。ろ過ポンプインバータ化で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池（BCP兼用）の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい水族館・動物園と相性が良い。24h生命維持稼働で自家消費率85%超。BCP補助で蓄電池併設も可能。",
  },
  {
    name: "文化庁 文化施設・博物館振興補助金",
    target: "公立水族館・動物園の省エネ設備更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "公立施設で活用しやすい文化施設特有の補助制度。",
  },
  {
    name: "環境省 動物園水族館等の生物多様性保全補助",
    target: "種保存・展示環境改善と省エネを兼ねる設備",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "JAZA加盟施設で利用可能。生物多様性と脱炭素の両面支援。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "全面省エネ更新・コージェネ・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "ろ過ポンプの電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "ろ過ポンプ・水温管理・空調・展示照明・ヒーティングの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（300kW〜2MW）導入の試算を実施したか",
  "ろ過ポンプインバータ化・水温管理BEMSの投資回収試算を実施したか",
  "生命維持装置のBCP対策（自家発電・蓄電池）の整備状況を確認したか",
  "デマンドコントローラー・夜間バックヤード最適化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当するか",
  "SII・需要家主導型PPA・文化庁補助・環境省JAZA関連補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "水族館・動物園の電気代水準はどれくらいですか？", answer: "売上高比8〜18%（水族館は最高水準）が業界平均。小規模動物園（年間来園者20万人級）で年2,400万〜1.2億円、中規模水族館（年間来園者50万人級）で年1.5〜7.5億円、大規模水族館・動物園（年間来園者300万人級）で年9〜45億円規模の電気代になります。" },
  { question: "ろ過ポンプの電気代を削減するには？", answer: "①インバータ化＋台数制御（電力▲20〜35%）、②水質測定値連動の運転最適化、③高効率ポンプへの更新、④配管・フィルター抵抗低減、⑤BEMSによる需要見える化、の5本柱が中心。投資回収はSII補助で3〜5年が目安です。" },
  { question: "水温管理の電気代対策は？", answer: "①生体ごとに最適水温幅を設定し許容範囲内で外気連動制御、②高効率ヒートポンプチラーへの更新、③水槽断熱性能改善、④冷水生物用と温水生物用の熱交換利用、⑤BEMS統合管理、の5本柱が効果的。中規模水族館で年800〜1,500万円の削減が目安。" },
  { question: "展示照明の電気代対策は？", answer: "①LED化（電力▲50〜70%）、②調光制御で時間帯別最適化、③水槽内LEDの省エネ型更新、④通路・バックヤードLED化、⑤夜間営業時の演出照明スケジュール最適化、の5本柱が効果的。中規模水族館で年500〜1,000万円の削減が目安。" },
  { question: "水族館・動物園の固定プランと市場連動プランどちらが向きますか？", answer: "生命維持装置24h稼働必須、停止不可、入園料への即時転嫁困難のため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続施設で月数千万円の追加負担が発生しました。" },
  { question: "生命維持装置のBCP対策はどうすべきですか？", answer: "①自家発電（ディーゼル／ガス、500kW〜2MW）導入、②蓄電池（500kWh〜5MWh）併設、③太陽光自家消費との統合、④停電シナリオ別のBCP計画策定、⑤年次BCP訓練、の5本柱が必須。補助金活用で投資負担軽減可能。" },
  { question: "水族館・動物園向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、文化庁文化施設振興補助、環境省JAZA関連補助、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は水族館・動物園で投資回収できますか？", answer: "屋根面積3,000m²以上、24h生命維持稼働の施設は業種別で最上位の相性。1MWで年110〜130万kWh発電、年1,800〜2,200万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。BCP兼用蓄電池併設で投資効率さらに向上。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "公益社団法人 日本動物園水族館協会（JAZA）", url: "https://www.jaza.jp/" },
  { name: "文部科学省 社会教育調査", url: "https://www.mext.go.jp/b_menu/toukei/chousa02/shakai/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function AquariumZooElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/aquarium-zoo-electricity-cost-review"
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
          <span className="text-slate-800">水族館・動物園の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            水族館・動物園の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            水族館・動物園は、ろ過ポンプ・水温管理・酸素供給の生命維持装置24h稼働、大水槽空調、爬虫類両生類のヒーティング、展示照明など多面的な電力負荷を持ち、生命維持の停止不可性と来園者数変動による固定電力負担が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>水族館・動物園の電力使用プロファイル（ろ過／水温／空調／展示照明）</li>
              <li>業界平均の電気代水準（売上高比8〜18%）と施設単位あたり単価</li>
              <li>ろ過ポンプインバータ化・水温管理最適化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>生命維持装置BCP（自家発電・蓄電池）の整備施策</li>
              <li>SII・PPA・文化庁補助・JAZA関連補助・GX補助の組合せ活用</li>
              <li>水族館・動物園向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              水族館・動物園の電力使用特性 — 生命維持・水温・空調・展示
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園の電力使用は『生命維持装置／空調／ヒーティング／展示照明／夜間バックヤード』の5層で構成されます。生命維持装置24h停止不可稼働が最大消費要素で業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比8〜18%、施設単位120〜1,500 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園の電気代水準は業態（動物園／水族館）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本動物園水族館協会（JAZA）・文科省社会教育調査・環境省動物関連統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              水族館・動物園の主要な電気代上昇要因 — 生命維持・水温・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園の電気代上昇は、生命維持装置停止不可性に加え、水温管理の季節変動、来園者数変動下の固定電力、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模動物園／中規模水族館／大規模水族館・動物園
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/cultural-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">文化施設の電気料金見直し</Link>
              、{" "}
              <Link href="/amusement-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">アミューズメント施設の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              生命維持装置・水温管理のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園はろ過ポンプインバータ制御、水温管理生体別最適化、夜間バックヤード省エネ、BCP蓄電池併用など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h生命維持稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園は生命維持装置24h停止不可・水温管理の連続稼働必須・入園料への即時転嫁困難のため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>生命維持装置の24h稼働が必須</li>
                  <li>停止が即座に生体に致命的影響</li>
                  <li>入園料への即時転嫁が困難（年度予算管理）</li>
                  <li>水温管理停止で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に水温管理負荷増</li>
                  <li>夜間時間帯の生命維持で継続負担</li>
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
              再エネ賦課金の影響 — 24h生命維持業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。水族館・動物園の中規模施設では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模水族館（年1,200万kWh）の負担額試算</p>
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
              水族館・動物園特有の節電・省エネ施策 — ろ過・水温・LED・BCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園の省エネは『ろ過ポンプインバータ化』『水温管理BEMS統合』『LED展示照明全面化』『自家発電・蓄電池BCP』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ろ過ポンプインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>オンオフ→インバータ＋台数制御</li>
                  <li>ろ過電力▲20〜35%</li>
                  <li>SII＋GX補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">水温管理BEMS統合</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>生体ごと最適温度幅＋外気連動制御</li>
                  <li>水温管理電力▲15〜25%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED展示照明全面化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蛍光灯・HID→LED化で電力▲50〜70%</li>
                  <li>調光制御で時間帯別最適化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h生命維持稼働で自家消費率85%超</li>
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
              補助金活用（業種別） — SII・PPA・文化庁補助・JAZA関連・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園向けに活用しやすい補助金は5本柱。ろ過ポンプインバータ化＋自家消費太陽光＋BCP蓄電池はSII＋PPA＋GX補助の組合せで補助率を最大化できます。
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
              水族館・動物園に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社水族館・動物園の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水族館・動物園は生命維持装置24h稼働・水温管理季節変動・来園者数変動下の固定電力の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>ろ過ポンプ・水温管理のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した11〜27%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="aquarium-zoo-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設の電気料金見直し", description: "公立施設運営が共通。" },
              { href: "/amusement-facility-electricity-cost-review", title: "アミューズメント施設の電気料金見直し", description: "集客施設運営が共通。" },
              { href: "/public-gym-electricity-cost-review", title: "公共ジムの電気料金見直し", description: "公共施設運営が共通。" },
              { href: "/hot-spring-facility-electricity-cost-review", title: "温泉施設の電気料金見直し", description: "ポンプ循環設備が共通。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "24h生命維持稼働が共通。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "24h停止不可業種で共通。" },
              { href: "/research-facility-electricity-cost-review", title: "研究施設の電気料金見直し", description: "生体研究・温度管理が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "施設の電気代削減", description: "電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "施設電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "水族館・動物園が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "ろ過ポンプ・空調更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "生命維持24h事業者のリスク。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の水族館・動物園条件でリスクを確認する"
            description="ろ過ポンプ・水温管理・展示照明・空調の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。ろ過ポンプインバータ化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="水族館・動物園の電力契約見直し、専門家に相談しませんか？"
            description="ろ過ポンプ・水温管理・展示照明・空調の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で水族館・動物園事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
