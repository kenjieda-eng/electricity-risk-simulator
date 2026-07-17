import type { Metadata } from "next";
import Link from "next/link";
import type { MonthlyPageData } from "../_lib/monthly-page-data";
import { MonthlyDataCards, MonthlyTrendChart } from "../_components/MonthlyVisuals";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../../components/simulator/SourcesAndFaq";
import TableOfContents from "../../../components/market-data/TableOfContents";
import AuthorBadge from "../../../components/market-data/AuthorBadge";

const pageTitle =
  "【2026年6月】法人の電気料金はどう動いた？7-9月支援策決定・JEPX前年比+39%・燃調と気象の総整理";
const pageDescription =
  "2026年6月使用分の法人向け電気料金動向を、6/12認可の7〜9月電気・ガス料金支援、JEPXスポット6月平均15.10円/kWh（前年同月比約+39%）、主要10社の燃料費調整、梅雨・台風による気象の4観点で整理。4区分の実績単価は電力取引報の公表待ちのため、確定値と定性整理を明確に分けて解説します。";
const pageUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/2026-06";
const publishedDate = "2026-07-09";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 2026年6月",
    "6月 電気料金 振り返り",
    "電気・ガス料金支援 7月 8月 9月",
    "JEPX 6月 平均 前年比",
    "燃料費調整 2026年6月",
    "電力需給 節電要請なし 2026",
    "梅雨 台風 電力需要",
    "高圧 電気料金 2026",
    "特別高圧 電気料金 2026",
    "電力取引報 確定値",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/monthly-review", width: 1200, height: 630, alt: "2026年6月の法人向け電気料金動向" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/monthly-review"],
  },
};

/**
 * 4区分の確定単価（電力・ガス取引監視等委員会「電力取引報」から算出＝販売額÷販売電力量・全国計・検針期間ベース・事後訂正あり得る）。
 * カードは最新確定分（2026年4月分・2026-07-17公表）を表示する。
 * 5月分以降は未公表。6月分の実績単価は9月頃公表見込み。
 */
const JUNE_PAGE_DATA: MonthlyPageData = {
  year: 2026,
  month: 4,
  categories: [
    { label: "特別高圧", shortLabel: "特高", value: 17.56, prevMonthValue: 16.58, diff: 0.98, prevYearValue: 18.05, prevYearDiff: -0.49 },
    { label: "高圧", shortLabel: "高圧", value: 21.37, prevMonthValue: 18.92, diff: 2.45, prevYearValue: 21.99, prevYearDiff: -0.62 },
    { label: "低圧電灯", shortLabel: "低灯", value: 25.94, prevMonthValue: 23.1, diff: 2.84, prevYearValue: 27.04, prevYearDiff: -1.1 },
    { label: "低圧電力", shortLabel: "低力", value: 32.12, prevMonthValue: 27.37, diff: 4.75, prevYearValue: 32.33, prevYearDiff: -0.21 },
  ],
  trendData: [
    { label: "2025/11", values: [16.78, 21.32, 27.32, 33.58] as [number, number, number, number] },
    { label: "2025/12", values: [16.87, 20.95, 26.78, 32.4] as [number, number, number, number] },
    { label: "2026/1", values: [16.72, 20.43, 25.98, 27.79] as [number, number, number, number] },
    { label: "2026/2", values: [16.68, 18.39, 22.67, 24.01] as [number, number, number, number] },
    { label: "2026/3", values: [16.58, 18.92, 23.1, 27.37] as [number, number, number, number] },
    { label: "2026/4", values: [17.56, 21.37, 25.94, 32.12] as [number, number, number, number] },
  ],
  sameMonthHistory: [
    { year: 2023, values: [21.5, 22.97, 25.23, 30.29] as [number, number, number, number] },
    { year: 2024, values: [17.74, 21.69, 27.63, 32.66] as [number, number, number, number] },
    { year: 2025, values: [17.29, 21.74, 28.84, 34.58] as [number, number, number, number] },
  ],
};

const YEAR_COMPARISON_CATEGORIES = ["特別高圧", "高圧", "低圧電灯", "低圧電力"] as const;

// 7〜9月「電気・ガス料金支援」の単価公表例（四国電力・料金月ベース、円/kWh）。★一例であり各社・各月で異なる。
const supportUnitExamples = [
  { type: "低圧", aug: "▲3.5", sep: "▲4.5", oct: "▲3.5" },
  { type: "高圧", aug: "▲1.8", sep: "▲2.3", oct: "▲1.8" },
];

// JEPXスポット エリア別月間平均（円/kWh・公式CSV全コマ単純平均）
const jepxAreaJun = [
  { area: "システムプライス", jun2026: "15.10", may2026: "14.06", jun2025: "10.87", yoy: "+4.23", up: true },
  { area: "北海道", jun2026: "14.51", may2026: "13.65", jun2025: "9.37", yoy: "+5.14", up: true },
  { area: "東北", jun2026: "15.29", may2026: "14.38", jun2025: "11.05", yoy: "+4.24", up: true },
  { area: "東京", jun2026: "20.01", may2026: "18.01", jun2025: "12.96", yoy: "+7.05", up: true },
  { area: "中部", jun2026: "17.92", may2026: "16.23", jun2025: "11.04", yoy: "+6.88", up: true },
  { area: "北陸", jun2026: "13.94", may2026: "13.94", jun2025: "10.68", yoy: "+3.26", up: true },
  { area: "関西", jun2026: "13.88", may2026: "13.94", jun2025: "10.68", yoy: "+3.20", up: true },
  { area: "中国", jun2026: "10.79", may2026: "11.76", jun2025: "9.41", yoy: "+1.38", up: true },
  { area: "四国", jun2026: "7.88", may2026: "7.57", jun2025: "9.20", yoy: "▲1.32", up: false },
  { area: "九州", jun2026: "10.02", may2026: "9.48", jun2025: "9.37", yoy: "+0.65", up: true },
];

// 主要電力10社の6月分 燃料費調整（円/kWh・税込・燃調本体、5月分比）
const fuelAdjustment2026Jun = [
  { area: "北海道電力", extraHigh: "▲2.32", extraHighDiff: "▲0.01", high: "▲2.38", highDiff: "±0.00", note: "燃調本体は前月比ほぼ横ばい" },
  { area: "東北電力", extraHigh: "0.39", extraHighDiff: "+0.06", high: "0.40", highDiff: "+0.05", note: "市場価格調整が別途（検針初日以外▲0.09）" },
  { area: "東京電力EP", extraHigh: "1.44", extraHighDiff: "+0.57", high: "1.47", highDiff: "+0.58", note: "2026年4月新約款＝燃調＋時間帯別市場価格調整。市場調整ゼロプランは特高2.61/高圧2.68" },
  { area: "中部電力ミライズ", extraHigh: "1.45", extraHighDiff: "+1.33", high: "1.47", highDiff: "+1.35", note: "2026年4月からHH・卸市場調整を内包（上昇は市場連動分が主導）" },
  { area: "北陸電力", extraHigh: "▲7.18", extraHighDiff: "+0.04", high: "▲7.32", highDiff: "+0.04", note: "燃調本体はマイナス基調を維持" },
  { area: "関西電力", extraHigh: "▲0.98", extraHighDiff: "+0.04", high: "▲0.99", highDiff: "—", note: "高圧500kW未満は市場調整+0.35込みで▲0.64" },
  { area: "中国電力", extraHigh: "▲1.32", extraHighDiff: "+0.06", high: "▲1.35", highDiff: "+0.06", note: "合計値" },
  { area: "四国電力", extraHigh: "▲6.86", extraHighDiff: "+0.03", high: "▲7.04", highDiff: "+0.03", note: "燃調本体はマイナス基調を維持" },
  { area: "九州電力", extraHigh: "▲0.68", extraHighDiff: "+0.31", high: "▲0.70", highDiff: "+0.31", note: "合計値（燃調＋離島＋市場0.25）" },
  { area: "沖縄電力", extraHigh: "▲12.04", extraHighDiff: "+0.07", high: "▲12.32", highDiff: "+0.07", note: "合計値（燃調＋離島）" },
];

// 8地点の6月平均気温（気象庁）と平年差
const temperature8Cities = [
  { city: "札幌", temp: "18.5℃", anomaly: "+1.5℃", note: "北日本は高温" },
  { city: "仙台", temp: "19.6℃", anomaly: "+0.4℃", note: "平年をやや上回る" },
  { city: "東京", temp: "21.5℃", anomaly: "▲0.4℃", note: "曇雨天続きで平年をやや下回る" },
  { city: "名古屋", temp: "23.0℃", anomaly: "±0℃", note: "平年並み" },
  { city: "大阪", temp: "23.4℃", anomaly: "▲0.2℃", note: "平年並み" },
  { city: "広島", temp: "23.1℃", anomaly: "▲0.1℃", note: "平年並み" },
  { city: "福岡", temp: "23.5℃", anomaly: "+0.2℃", note: "平年並み" },
  { city: "那覇", temp: "26.7℃", anomaly: "▲0.5℃", note: "6/29頃に梅雨明け" },
];

const peakPrepCheckpoints = [
  {
    heading: "①7〜9月支援の反映と、支援対象外コスト（賦課金4.18円/kWh・燃調・市場調整）の切り分け",
    content:
      "6/12に認可された7〜9月使用分の電気・ガス料金支援は、8月分が増額される見込みです。ただし単価は各社・各月で異なり、適用条件は各社公式で確認が必要です。支援はあくまで一部単価の値引きであり、再エネ賦課金（2026年度確定 4.18円/kWh、2027年4月検針分まで）や燃料費調整、市場価格調整といった支援対象外のコストは請求書に残ります。7〜9月の請求書では「支援でどこが下がり、どこは下がらないのか」を切り分けて確認することが起点になります。",
  },
  {
    heading: "②市場連動プランの夏季リスク再点検（JEPX前年比約+39%・東西価格差）",
    content:
      "2026年6月のJEPXシステムプライス月間平均は15.10円/kWh、前年同月比+4.23円（約+39%）でした。東京20.01円/kWh・中部17.92円/kWhと東エリアが高い一方、四国は7.88円/kWhで前年比マイナスと、東西の価格差が鮮明です。市場連動型プランを採用する法人は、拠点のあるエリアの水準と、7〜8月のピーク需要期に向けた上振れ余地をシミュレーターで試算し、固定プランとの比較材料を7月中に整えておくのが望ましいタイミングです。",
  },
  {
    heading: "③デマンド（契約電力）管理と今夏需給の確認（節電要請なし・全エリア予備率3%以上）",
    content:
      "5/20の経産省の夏季電力需給対策では、全エリアで安定供給に必要な予備率3%以上が確保され、今夏の数値目標付き節電要請は見送られました。供給面の逼迫感は相対的に小さい一方、冷房立ち上がりによるデマンド（最大需要電力）超過は基本料金を翌月以降1年間押し上げます。7〜8月のピーク前に、デマンドコントローラや蓄電池・自家消費太陽光といったピークカット策の要否を判断しておくことが、年間の基本料金コントロールにつながります。",
  },
];

const industryImpact = [
  { industry: "製造業（24時間操業）", impact: "中", reason: "ベースロードが大きく市場価格調整・燃調の変動を全量で受ける。冷房立ち上がりでデマンド増の恐れ。固定プラン継続の妥当性を点検" },
  { industry: "商業施設・スーパー", impact: "中", reason: "冷蔵・冷凍の常時負荷に冷房需要が加わる端境期。日照不足でも室内負荷は縮まず、7〜9月支援の反映確認と冷凍機効率の点検が有効" },
  { industry: "病院・介護施設", impact: "中", reason: "24時間空調で冷房需要が本格化。支援は一部単価にとどまるため、デマンド管理と契約電力の妥当性確認が要点" },
  { industry: "データセンター", impact: "高", reason: "高ベースロードで市場価格調整・燃調の絶対額が大きい。JEPX前年比+39%局面で市場連動比率の点検、再エネ調達併用の検討余地が大きい" },
  { industry: "オフィスビル", impact: "中", reason: "6月は梅雨で冷房需要が本格化する端境期。7〜8月ピーク前に契約とデマンドを点検しておく好機" },
  { industry: "ホテル・宿泊", impact: "中", reason: "客室・共用部の冷房が通年化。エリアによるJEPX差が大きいため、立地エリアの市場水準を踏まえた調達方針の確認が有効" },
  { industry: "物流・冷蔵倉庫", impact: "中", reason: "冷蔵・冷凍が常時負荷。梅雨明け後のピークに向け、デマンド超過の抑制と支援対象外コストの把握が要点" },
  { industry: "飲食チェーン", impact: "低", reason: "低圧中心で1拠点あたりの影響は限定的だが、多店舗合算では無視できない。支援反映の確認と固定プランの年契約化を検討" },
];

const reviewChecklist = [
  "7〜9月使用分の電気・ガス料金支援が、自社の契約区分・契約先で対象になるか（8月分の増額を含む）を各社公式で確認する",
  "支援対象外のコスト（再エネ賦課金4.18円/kWh・燃料費調整・市場価格調整）が請求書のどこに残るかを切り分けて把握する",
  "6月分の燃料費調整単価が前月比でどの方向に動いたか（燃調本体はほぼ横ばい〜小幅上昇、市場価格調整込みでは会社差が大きい）を契約先ごとに確認する",
  "市場連動型プランの法人は、自社エリアのJEPX水準（東西価格差）と7〜8月ピークの上振れ余地をシミュレーターで試算する",
  "冷房立ち上がりに伴うデマンド（契約電力）超過の兆候を確認し、ピークカット策の要否を7〜8月ピーク前に判断する",
  "4区分の6月実績単価は電力取引報の公表待ち（9月頃見込み）である点を踏まえ、確定値が出たタイミングで予算前提を更新する",
];

const faqItems = [
  {
    question: "7〜9月使用分の電気・ガス料金支援は、法人にどう影響しますか？",
    answer:
      "2026年6月12日に7〜9月使用分の電気・ガス料金支援が特例的に認可され、家庭・低圧に加えて高圧も対象に含まれます。8月使用分は増額される見込みです。単価の公表例では、四国電力の料金月ベースで低圧が8月▲3.5・9月▲4.5・10月▲3.5円/kWh、高圧が▲1.8・▲2.3・▲1.8円/kWhとされていますが、これは一例であり各社・各月で異なります。適用条件・対象区分は必ず各社公式でご確認ください。",
  },
  {
    question: "2026年6月のJEPXスポット価格はなぜ前年比で大きく上がったのですか？",
    answer:
      "2026年6月のJEPXシステムプライス月間平均は15.10円/kWhで、前年同月（10.87円/kWh）比+4.23円、約+39%の上昇でした。台風の連続接近と太平洋側の日照不足（平年の8割前後）で太陽光発電が伸びにくく、東エリアの卸価格が押し上げられたことが要因の一つです。エリア差も大きく、東京20.01円/kWh・中部17.92円/kWhに対し、四国は7.88円/kWhと前年比マイナスの唯一のエリアでした。数値はJEPX公表のスポット取引結果CSVから全コマ単純平均で算出しています。",
  },
  {
    question: "2026年6月の燃料費調整単価はどう動きましたか？",
    answer:
      "主要10社の燃調本体（税込）は、5月分比で全社ほぼ横ばい〜小幅上昇（おおむね+0.03〜+0.07円/kWh）でした。一方、2026年4月に約款を改定した会社では、燃調本体とは別に時間帯別・卸市場に連動する市場価格調整が加わり、東京・中部・関西・九州などでは市場連動分が上昇を主導しています。本記事の一覧表は各社の燃調本体（税込）で統一し、市場価格調整は注記で整理しています。前号（5月号）の掲載表とは算定基準が異なるため、単純な数値比較はできません。",
  },
  {
    question: "2026年6月の4区分（低圧・高圧・特別高圧）の実績単価はいくらでしたか？",
    answer:
      "2026年6月分の4区分実績単価は、本記事公開時点では未公表です。出典としている電力・ガス取引監視等委員会「電力取引報」は2026年4月分までが公表済みで、5月分は8月中旬、6月分は9月頃の公表見込みです。このため本ページのカードは最新の確定分（2026年4月分）を表示し、6月の動向は燃料費調整・JEPX・気象・支援策から定性的に整理しています。確定値が公表され次第、順次更新します。",
  },
  {
    question: "再エネ賦課金は2026年6月も4.18円/kWhのままですか？",
    answer:
      "はい。2026年度の再生可能エネルギー発電促進賦課金は4.18円/kWhで確定しており、2027年4月検針分までこの単価が適用されます。5月に改定されて以降は据え置きで、6月使用分でも全使用量に同じ単価が上乗せされます。使用量が多い法人ほど固定的な負担として効いてくる項目です。",
  },
  {
    question: "2026年の夏（7〜8月）に節電要請は出るのですか？",
    answer:
      "2026年5月20日にまとめられた夏季の電力需給対策では、全エリアで安定供給に必要な予備率3%以上が確保される見通しとなり、今夏は数値目標付きの節電要請が見送られました。供給面の逼迫感は相対的に小さいものの、冷房需要のピークに伴うデマンド（最大需要電力）超過は基本料金に影響するため、需要側の管理は引き続き重要です。",
  },
  {
    question: "2026年6月の天候は電力需要や料金にどう関係しましたか？",
    answer:
      "6月は梅雨や台風の影響が大きい月でした。台風6号が6月3日に和歌山へ上陸し、下旬にも台風が続いたほか、複数地域で線状降水帯が発生。太平洋側と沖縄・奄美では降水がかなり多く、東京の月降水量は436.5mm（平年比260%）に達しました。太平洋側の日照不足は太陽光発電を抑え、東エリアのJEPX価格を押し上げる一因になりました。気温は北日本で高温、東・西日本と沖縄・奄美は平年並みでした。",
  },
  {
    question: "7〜8月のピーク前に、法人企業が確認しておくべきことは何ですか？",
    answer:
      "①7〜9月支援の対象可否と、支援対象外コスト（賦課金4.18円/kWh・燃調・市場価格調整）の切り分け、②市場連動プランの夏季リスク再点検（JEPX前年比約+39%・東西価格差）、③デマンド管理と今夏需給の確認（節電要請なし・全エリア予備率3%以上）の3点です。7月のうちに契約とピークカット策の要否を判断しておくことが、夏季の上振れ抑制と年間予算の安定運用につながります。",
  },
];

const sourcesItems = [
  {
    name: "電力・ガス取引監視等委員会「電力取引報」",
    url: "https://www.egc.meti.go.jp/info/business/report/results.html",
    description: "4区分の確定単価（販売額÷販売電力量・全国計・検針期間ベース、事後訂正あり得る）。2026年4月分まで公表済み",
  },
  {
    name: "JEPX 一般社団法人 日本卸電力取引所",
    url: "https://www.jepx.jp/electricpower/market-data/spot/",
    description: "スポット取引結果（エリア別月間平均は公表CSVの全コマ単純平均で算出）",
  },
  {
    name: "経済産業省 資源エネルギー庁",
    url: "https://www.enecho.meti.go.jp/category/others/energysecurity/",
    description: "電気・ガス料金支援（7〜9月）・夏季電力需給対策・エネルギー安全保障の公表情報",
  },
  {
    name: "気象庁",
    url: "https://www.data.jma.go.jp/stats/stat/202606/kiko_202606.html",
    description: "2026年6月の月平均気温・降水量（全国8地点ほか）と気象概況",
  },
  {
    name: "主要電力10社 2026年4月28日プレスリリース",
    description: "2026年6月分 燃料費調整単価（燃調本体・税込。市場価格調整は各社公式を参照）",
  },
];

export default function BusinessElectricityRetrospective202606Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り", url: "https://simulator.eic-jp.org/business-electricity-retrospective" },
          { name: "2026年6月" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年6月</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年6月】法人の電気料金はどう動いた？</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            7〜9月の電気・ガス料金支援の決定・JEPX前年比約+39%・燃料費調整と梅雨/台風の気象を総整理
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年6月使用分の法人向け電気料金は、「支援・市場・気象」の3つの論点が同時に動いた月です。第一に、6月12日に7〜9月使用分の電気・ガス料金支援が特例的に認可され、家庭・低圧に加えて高圧も対象に含まれることが示されました。第二に、JEPXスポット価格が上昇し、システムプライスの月間平均は15.10円/kWh、前年同月比で約+39%となりました。第三に、梅雨・台風による太平洋側の日照不足が太陽光発電を抑え、東エリアの卸価格を押し上げました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方で、低圧・高圧・特別高圧の4区分の6月実績単価は、出典としている電力・ガス取引監視等委員会「電力取引報」が2026年4月分までしか公表していないため、本記事公開時点では確定していません。そこで本記事では、確定値（2026年4月分まで）と、6月の動向に関する定性整理を明確に分けて解説します。数値の断定は確定値に限り、公表待ちの項目は「公表待ち」と明記します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事は、電力・ガス取引監視等委員会「電力取引報」、JEPX、経済産業省・資源エネルギー庁、気象庁、主要電力10社の公表情報をもとに整理しています。本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。公開日は2026年7月9日です。
          </p>
        </header>

        <TableOfContents />

        <MonthlyDataCards data={JUNE_PAGE_DATA} />
        <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-6 text-slate-500">
          ※上記カードは電力・ガス取引監視等委員会「電力取引報」の最新確定分（2026年4月分・確定）です（販売額÷販売電力量・全国計・検針期間ベース、事後訂正あり得る）。
          2026年5月分以降は未公表（5月分＝8月中旬・6月分＝9月頃の公表見込み）。4月分まで確定値を反映済みです。確定値が公表され次第、順次更新します。
        </p>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年6月の結論3点 — 7〜9月支援の決定・JEPX前年比約+39%・燃調は小幅上昇基調</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                6月12日に7〜9月使用分の電気・ガス料金支援が特例的に認可され、家庭・低圧に加えて高圧も対象に含まれます。8月使用分は増額される見込みです。単価は各社・各月で異なり、適用条件は各社公式で要確認です。
              </li>
              <li>
                JEPXシステムプライスの6月月間平均は15.10円/kWh、前年同月（10.87円/kWh）比+4.23円（約+39%）。東京20.01円/kWh・中部17.92円/kWhの東エリアが高く、四国は7.88円/kWhで前年比マイナスと、東西の価格差が鮮明でした。
              </li>
              <li>
                主要10社の燃料費調整（燃調本体・税込）は5月分比で全社ほぼ横ばい〜小幅上昇（おおむね+0.03〜+0.07円/kWh）。市場価格調整込みでは会社差が大きく上昇主導のところもあります。再エネ賦課金は4.18円/kWh（2026年度確定）で据え置きです。
              </li>
            </ol>
          </section>

          <MonthlyTrendChart data={JUNE_PAGE_DATA} />
          <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-6 text-slate-500">
            ※上記グラフは電力取引報の確定値が公表済みの直近6か月（2025年11月〜2026年4月分）です。2026年5月分以降は公表待ちのため含みません。
          </p>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">参考：6月のkWh単価 年別比較（2023〜2025年は確定・2026年は公表待ち）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              同じ6月で過去の水準と比べると、現在の料金がどのあたりに位置するかを把握しやすくなります。2026年6月分は電力取引報の公表待ち（9月頃見込み）のため、確定値が出るまでは2023〜2025年の6月分を参照します。
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-left font-semibold text-slate-900">契約区分</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2023年6月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2024年6月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2025年6月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-sky-900">2026年6月</th>
                  </tr>
                </thead>
                <tbody>
                  {YEAR_COMPARISON_CATEGORIES.map((label, catIdx) => (
                    <tr key={label} className="odd:bg-white even:bg-slate-50/60">
                      <td className="border-b border-slate-200 px-3 py-2.5 font-medium text-slate-800">{label}</td>
                      {JUNE_PAGE_DATA.sameMonthHistory.map((entry) => (
                        <td key={entry.year} className="border-b border-slate-200 px-3 py-2.5 text-right tabular-nums text-slate-700">
                          {entry.values[catIdx].toFixed(1)}円
                        </td>
                      ))}
                      <td className="border-b border-slate-200 px-3 py-2.5 text-right text-sky-900">公表待ち</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※単位は円/kWh。消費税および再生可能エネルギー発電促進賦課金を含まない参考値です。数値は電力・ガス取引監視等委員会「電力取引報」から算出しています。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">政府「電気・ガス料金支援」7〜9月使用分の決定と法人への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月25日の首相表明を経て、6月12日に7〜9月使用分の電気・ガス料金支援が特例的に認可されました。予備費5,135億円を財源とし、標準的な家庭で3か月合計およそ5,000円の負担軽減が見込まれています。法人にとって重要なのは、この支援が家庭・低圧に加えて高圧も対象に含む点と、8月使用分が増額される見込みである点です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              単価は各社・各月で異なります。あくまで一例として、四国電力が公表した料金月ベースの値引き単価は次の通りです。自社の契約区分・契約先が対象になるか、また実際の単価・適用条件は、必ず各社公式でご確認ください。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-sky-300 bg-white">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="border-b border-sky-200 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-right font-semibold text-slate-900">8月分</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-right font-semibold text-slate-900">9月分</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-right font-semibold text-slate-900">10月分</th>
                  </tr>
                </thead>
                <tbody>
                  {supportUnitExamples.map((row) => (
                    <tr key={row.type} className="even:bg-sky-50/30">
                      <td className="border-b border-sky-200 px-3 py-2 font-medium">{row.type}</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-right tabular-nums">{row.aug} 円/kWh</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-right tabular-nums">{row.sep} 円/kWh</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-right tabular-nums">{row.oct} 円/kWh</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              支援は一部単価の値引きであり、請求額のすべてが下がるわけではありません。再エネ賦課金（2026年度確定 4.18円/kWh）、燃料費調整、市場価格調整といった支援対象外のコストは請求書に残ります。7〜9月の請求書では「どの単価が下がり、どこは下がらないのか」を切り分けて確認することが、支援の効果を正しく把握する第一歩です。制度の背景は{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              、{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              も併せてご確認ください。なお、本記事は特定の政策の是非を評価するものではなく、制度事実の整理を目的としています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">JEPXスポット6月平均15.10円/kWh — 前年同月比約+39%と東西価格差</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年6月のJEPXシステムプライス月間平均は15.10円/kWhで、前年同月（10.87円/kWh）比+4.23円、約+39%の上昇でした。5月（14.06円/kWh）からも上振れています。月間の最高値は32.17円/kWh、最低値は0.01円/kWh、約定総量は285.9億kWh（前年6月は222.9億kWh）と取引量も増加しました。数値はJEPX公表のスポット取引結果CSVから全コマ単純平均で算出しています。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">エリア</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/6 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/5 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2025/6 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前年同月差</th>
                  </tr>
                </thead>
                <tbody>
                  {jepxAreaJun.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jun2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.may2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jun2025}</td>
                      <td className={`border-b border-slate-200 px-3 py-2 text-right tabular-nums ${row.up ? "text-rose-700" : "text-emerald-700"}`}>{row.yoy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京20.01円/kWh・中部17.92円/kWhと東エリアが高い一方、四国は7.88円/kWhで前年比マイナスの唯一のエリアでした。台風の連続接近と太平洋側の日照不足（平年の8割前後）で太陽光発電が伸びにくく、東エリアの卸価格が押し上げられたことが背景の一つと考えられます。なお沖縄はJEPXの取引対象外のため表に含まれません。市場連動型プランを採用する法人は、拠点のあるエリアの水準差を踏まえてリスクを点検することが重要です。{" "}
              <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXとは</Link>
              、{" "}
              <Link href="/jepx-spot-price-dashboard" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット価格ダッシュボード</Link>
              、{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整の総合解説</Link>
              も参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向（2026年6月）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧（電灯・電力）は、小規模事業所・店舗・サービス拠点で広く使われる契約区分です。2026年6月分の低圧の実績単価は電力取引報の公表待ち（9月頃見込み）のため、ここでは断定を避け、確定値・燃料費調整・支援策から動向を定性的に整理します。参考として、電力取引報の最新確定分である2026年4月分は、低圧電灯25.94円/kWh・低圧電力32.12円/kWhでした（消費税・賦課金を含まない参考値）。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              6月分の燃料費調整（低圧・燃調本体）は会社差が大きく、たとえば東北電力8.36円/kWh・中部電力ミライズ1.35円/kWhのように加算となる会社がある一方、北陸電力▲7.69円/kWh・沖縄電力▲12.77円/kWhのようにマイナス（値引き方向）の会社もあります。低圧主体の事業者にとっては、7〜9月の電気・ガス料金支援が低圧も対象である点（単価例は各社公式で要確認）が7月以降の請求に効いてきます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>コンビニ・物販店・ドラッグストアなどの小売業</li>
              <li>飲食店・カフェ・ベーカリーなどの店舗業態</li>
              <li>クリニック・サロン・整骨院などのサービス事業</li>
              <li>小規模オフィス・営業所・学習塾などの拠点</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              多店舗展開の企業では、1拠点あたりの差は小さくても合算では大きな金額になります。7〜9月支援の対象可否を確認しつつ、{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">削減見直しポイント</Link>
              を参考に、夏季ピーク前の契約点検を進めることが望ましいです。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向（2026年6月）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧は、工場・商業施設・病院・学校・物流施設・オフィスビルで広く使われる主力契約区分です。2026年6月分の高圧の実績単価は電力取引報の公表待ちのため、ここでは動向を定性的に整理します。参考として、最新確定分の2026年4月分は高圧21.37円/kWhでした。今回7〜9月の電気・ガス料金支援に高圧が対象として含まれた点は、6月号の大きな論点です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              6月分の高圧・燃調本体（税込）は、5月分比で全社ほぼ横ばい〜小幅上昇（おおむね+0.03〜+0.07円/kWh）でした。ただし、2026年4月に約款を改定した会社では燃調本体とは別に市場価格調整が加わり、東京電力EPや中部電力ミライズのように市場連動分が上昇を主導するケースがあります。支援の単価例（四国電力）では高圧が8月▲1.8・9月▲2.3・10月▲1.8円/kWhとされていますが、これは一例で各社・各月で異なります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>中規模工場・加工場・食品工場（連続稼働で影響大）</li>
              <li>スーパー・ショッピング施設・量販店（冷蔵稼働で常時負荷）</li>
              <li>病院・介護施設・学校法人（24時間稼働の医療機関は特に注意）</li>
              <li>倉庫・物流拠点・配送センター・冷蔵倉庫（夏季ピーク前の点検重要）</li>
              <li>延床面積の大きいオフィスビル（梅雨で冷房需要が本格化）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の業種別の見直しポイントは{" "}
              <Link href="/articles/industry-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の見直しポイント集</Link>
              、契約見直しの全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向（2026年6月）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は、大規模工場・データセンター・大型商業施設・自治体の基幹施設・大規模病院など、非常に大きな電力需要を持つ事業者が中心です。2026年6月分の特別高圧の実績単価は電力取引報の公表待ちのため、ここでは動向を定性的に整理します。参考として、最新確定分の2026年4月分は特別高圧17.56円/kWhでした。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              6月分の特別高圧・燃調本体（税込）も、5月分比で全社ほぼ横ばい〜小幅上昇（おおむね+0.03〜+0.07円/kWh）でした。一方、東京電力EPの特高1.44円/kWh（前月比+0.57）や中部電力ミライズの特高1.45円/kWh（前月比+1.33）のように、2026年4月の約款改定で市場価格調整を内包した会社では、燃調本体以上に市場連動分の寄与が大きくなっています。特別高圧は燃料価格・需給・市場価格調整といった構造要因が単価を主導する区分であり、JEPXが前年比約+39%となった6月局面では、市場連動比率の点検が重要です。なお、今回の7〜9月支援は家庭・低圧・高圧が中心で、対象区分の詳細は各社公式で要確認です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>素材・化学・金属・機械などの大規模工場</li>
              <li>24時間稼働の生産拠点・データセンター・大規模サーバー施設</li>
              <li>大型商業施設・再開発拠点</li>
              <li>自治体の上下水道施設・大型公共施設</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧需要家にとっては{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              、{" "}
              <Link href="/jepx-spot-market-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット市場の歴史</Link>
              が実務的な参照先になります。
            </p>
          </section>

          <ContentCta
            heading="夏季の上振れリスクを試算する"
            description="JEPX前年比約+39%・東西価格差の局面です。自社エリアの水準と7〜8月ピークの影響額を、シミュレーターで試算しておきましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年6月 主要電力10社の燃料費調整単価一覧（特高・高圧の燃調本体）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              主要電力10社の2026年6月分 燃料費調整単価を、特別高圧・高圧の燃調本体（税込）で統一して整理しました。6月分は2026年1〜3月の貿易統計を反映しています（各社2026年4月28日発表、算定諸元は原油65,969円/kl・LNG87,003円/t・石炭19,176円/t）。表内の増減は5月分比です。市場価格調整（東京電力EP・中部電力ミライズ・関西電力・九州電力ほか）は別途加算があり、詳細は各社公式でご確認ください。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">電力会社</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">特高 6月 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">特高 前月差</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">高圧 6月 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">高圧 前月差</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考（市場価格調整ほか）</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelAdjustment2026Jun.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.extraHigh}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-slate-600">{row.extraHighDiff}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.high}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-slate-600">{row.highDiff}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃調本体は全社ほぼ横ばい〜小幅上昇（おおむね+0.03〜+0.07円/kWh）です。一方、市場価格調整込みでは関西+0.60・九州+0.31・東京/中部で+0.6〜+1.4円と、市場連動分が上昇を主導する会社があります。
            </p>
            <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800">
              ※本表は各社の燃調本体（税込）で統一しています。市場価格調整は表外の注記扱いで、別途加算があります。前号（2026年5月号）の掲載表とは算定基準が異なるため、単純な数値比較はできません。詳細は各社公式および{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              、{" "}
              <Link href="/how-to-check-fuel-cost-adjustment-terms" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">約款での燃料費調整確認</Link>
              をご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年6月の気象と電力需要（梅雨・台風・日照不足）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年6月は、梅雨と台風の影響が大きい月でした。台風6号が6月3日に和歌山へ上陸し、下旬にも台風7号・8号が続きました。線状降水帯は6月3日（徳島・和歌山・静岡・神奈川）と6月24日（鹿児島）に発生。降水は太平洋側と沖縄・奄美で「かなり多い」状況となり、東京の月降水量は436.5mm（平年比260%）に達しました。気温は北日本で高温、東・西日本と沖縄・奄美は平年並みでした。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">地点</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">6月平均気温</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">平年差</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">メモ</th>
                  </tr>
                </thead>
                <tbody>
                  {temperature8Cities.map((row) => (
                    <tr key={row.city} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.city}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.temp}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-slate-600">{row.anomaly}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力需要の観点では、二つの方向が同時に働きました。第一に、梅雨の曇雨天と台風による太平洋側の日照不足（平年の8割前後）で太陽光発電が伸びにくく、東エリアのJEPX価格を押し上げました。第二に、中旬の全国的な高温で冷房需要が立ち上がり始めました。梅雨入りは九州南部6月1日頃、関東甲信6月7日頃、北陸・東北南部6月20日頃、東北北部6月21日頃で、沖縄は6月29日頃に梅雨明けしています。7〜8月の本格的な冷房ピークに向けて、需要側の管理を前倒しで準備する時期にあたります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">節電要請なしの今夏需給と、7〜8月ピーク前の最終確認</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月20日にまとめられた夏季の電力需給対策では、全エリアで安定供給に必要な予備率3%以上が確保される見通しとなり、今夏は数値目標付きの節電要請が見送られました。供給面の逼迫感は相対的に小さいものの、料金面では市場価格や燃料費調整、そして冷房ピークに伴うデマンド（最大需要電力）が引き続き重要です。また、中東情勢による原油供給への不安は継続しており、国家備蓄原油の追加放出（5月1日から約20日分）も行われました。燃料価格は依然として不確実性を抱えています。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              6月は、7〜8月の本格ピーク前に契約と需要管理を点検する最終的なタイミングです。次の3視点で7月中に意思決定を進めておくと、夏季の上振れ抑制と年間予算の安定運用につながります。
            </p>
            <div className="mt-4 space-y-4">
              {peakPrepCheckpoints.map((item) => (
                <div key={item.heading}>
                  <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピーク前のシナリオ試算は{" "}
              <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>
              、設備対策の全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              、経営層向けの説明は{" "}
              <Link href="/executive-cfo-electricity-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFOのための電気料金基礎</Link>
              が参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の6月電気料金影響（製造 / 商業 / 病院 / データセンター等）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年6月の電気料金影響を業種別に整理しました。6月は梅雨で冷房需要が本格化し始める端境期であり、日照不足による市場価格の上振れと、冷房立ち上がりによるデマンド増の両面が働きます。影響度は、市場連動比率・ベースロードの大きさ・冷房や冷蔵の負荷特性・7〜9月支援の効きやすさを総合した目安です（実績単価ではなく定性的な整理です）。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">業種</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">影響度</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な要因と6月の見直しポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {industryImpact.map((row) => (
                    <tr key={row.industry} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.industry}</td>
                      <td className={`border-b border-slate-200 px-3 py-2 text-center font-semibold ${row.impact === "高" ? "text-red-700" : row.impact === "中" ? "text-amber-700" : "text-emerald-700"}`}>{row.impact}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の詳しい見直しポイントは{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院</Link>
              ／{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場</Link>
              ／{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビル</Link>
              ／{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター</Link>
              ／{" "}
              <Link href="/supermarket-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">スーパー</Link>
              などの個別記事を参照してください。
            </p>
          </section>

          <ContentCta
            heading="契約・請求の疑問を専門家に相談する"
            description="7〜9月支援の対象可否や、燃料費調整・市場価格調整の見方で迷ったら、お気軽にご相談ください。中立の立場で情報整理をお手伝いします。"
            links={[
              { href: "/contact", label: "お問い合わせ・相談する" },
              { href: "/concierge", label: "AIコンシェルジュに聞く" },
            ]}
          />

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">月次サマリ：2026年6月の法人電気料金概況とまとめ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年6月使用分の法人電気料金は、(1) 6月12日に認可された7〜9月使用分の電気・ガス料金支援（高圧も対象・8月分増額見込み）、(2) JEPXシステムプライスの月間平均15.10円/kWh・前年同月比約+39%と東西価格差、(3) 燃調本体は全社ほぼ横ばい〜小幅上昇の一方で市場価格調整込みでは会社差が大きい、という3点が重なる月でした。再エネ賦課金は4.18円/kWh（2026年度確定）で据え置きです。4区分の6月実績単価は電力取引報の公表待ち（9月頃見込み）のため、本記事では確定値と定性整理を分けて解説しました。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">2026年6月 主要トピック 5件</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>7〜9月使用分の電気・ガス料金支援を6月12日に特例認可（5月25日首相表明・予備費5,135億円・標準家庭で3か月合計およそ5,000円・8月分増額見込み）。高圧も対象。単価は各社・各月で異なり要確認。</li>
              <li>5月20日の夏季電力需給対策で全エリア予備率3%以上を確保、今夏の数値目標付き節電要請は見送り。</li>
              <li>中東情勢による原油供給不安が継続し、国家備蓄原油の追加放出（5月1日から約20日分）を実施。</li>
              <li>JEPXの6月月間平均が前年比約+39%（台風・太平洋側の日照不足が押し上げ要因の一つ）。東京20.01円/kWh・四国7.88円/kWhと東西差が鮮明。</li>
              <li>再エネ賦課金4.18円/kWhを継続（2026年度確定・2027年4月検針分まで）。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              6月時点の確認チェックリストは次の通りです。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {reviewChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs leading-6 text-slate-500">
              ※本記事の数値は、電力・ガス取引監視等委員会「電力取引報」（4区分の確定値、2026年4月分まで公表済み）、JEPX（スポット取引結果CSVの全コマ単純平均）、主要電力10社の2026年4月28日プレス（6月分燃料費調整・燃調本体）、気象庁（2026年6月の気象）、経済産業省・資源エネルギー庁（7〜9月支援・夏季需給）に基づきます。2026年5月分以降の4区分実績単価は公表待ちで、公表され次第、順次更新します。本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt={publishedDate} />

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/business-electricity-retrospective/2026-05", title: "2026年5月の振り返り", description: "前号（再エネ賦課金改定後の本格運用・夏季ピーク前対策）" },
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "全月次振り返り一覧と長期推移" },
              { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", title: "特別高圧の電気料金推移（2019〜2025）", description: "コロナ・ウクライナ危機・補助金の影響を年別に解説" },
              { href: "/business-electricity-retrospective/high-voltage-2019-2025", title: "高圧の電気料金推移（2019〜2025）", description: "年別の推移と構造変化を確認" },
              { href: "/business-electricity-retrospective/low-voltage-power-2019-2025", title: "低圧電力の電気料金推移（2019〜2025）", description: "低圧電力の長期推移を整理" },
              { href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025", title: "低圧電灯の電気料金推移（2019〜2025）", description: "低圧電灯の長期推移を整理" },
              { href: "/region-tokyo-electricity-price-trend", title: "東京エリアの電気料金推移", description: "エリア別の推移と価格差の背景" },
              { href: "/business-electricity-price-trend-10-years", title: "法人電気料金の10年推移", description: "長期の推移を俯瞰して現在地を確認" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "6月動向の理解に必須のサブピラー" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "4.18円/kWh（2026年度）の仕組み" },
              { href: "/market-price-adjustment", title: "市場価格調整の総合解説", description: "燃調本体とは別の市場連動分の見方" },
              { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格ダッシュボード", description: "エリア別の単価と東西価格差" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備で確認すべき項目" },
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集", description: "業種別の負荷特性と契約最適化" },
              { href: "/executive-cfo-electricity-basics", title: "CFO向け電気料金基礎", description: "経営層向け説明資料" },
              { href: "/contact", title: "お問い合わせ・相談", description: "契約・請求の疑問を中立の立場で整理" },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="2026年6月の動向を踏まえ、自社の契約条件をシミュレーターで診断してください。7〜8月ピーク前のリスク試算にも活用できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/monthly-review", label: "他の月次振り返りを見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <AuthorBadge publishedAt={publishedDate} />
      </main>
    </>
  );
}
