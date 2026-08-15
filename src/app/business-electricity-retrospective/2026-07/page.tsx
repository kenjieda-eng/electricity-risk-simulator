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
  "【2026年7月】法人の電気料金はどう動いた？猛暑でJEPX前年比+40.5%・電気ガス料金支援の初適用・燃調は上昇局面へ";
const pageDescription =
  "2026年7月使用分の法人向け電気料金を、JEPXスポット7月平均17.91円/kWh（前年比+40.5%）と夕方の58円台スパイク、7月使用分から始まった電気・ガス料金支援（低圧▲3.5円・高圧▲1.8円/kWh、特別高圧は対象外）、主要10社の燃料費調整（7月分・8月分）の3観点で整理します。";
const pageUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/2026-07";
const publishedDate = "2026-08-02";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 2026年7月",
    "7月 電気料金 振り返り",
    "電気・ガス料金支援 7月使用分 初適用",
    "JEPX 7月 平均 前年比 40.5%",
    "燃料費調整 2026年7月 8月分",
    "猛暑 電力需要 2026",
    "JEPX スパイク 58円 夕方",
    "高圧 電気料金 2026",
    "特別高圧 支援 対象外",
    "電力取引報 公表待ち",
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
      { url: "/api/og/monthly-review", width: 1200, height: 630, alt: "2026年7月の法人向け電気料金動向" },
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
 * カードは最新確定分（2026年4月分）を表示する。
 * 2026年5月分以降は未公表（5月分＝8月中旬、7月分＝10月頃の公表見込み）。
 */
const JULY_PAGE_DATA: MonthlyPageData = {
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
    { year: 2023, values: [20.73, 21.69, 25.06, 26.51] as [number, number, number, number] },
    { year: 2024, values: [17.97, 22.12, 29.04, 31.68] as [number, number, number, number] },
    { year: 2025, values: [17.18, 21.12, 27.88, 29.14] as [number, number, number, number] },
  ],
};

const YEAR_COMPARISON_CATEGORIES = ["特別高圧", "高圧", "低圧電灯", "低圧電力"] as const;

// 電気・ガス料金支援の値引き単価（★使用月ベース。特別高圧は対象外）
const supportUnitByUsageMonth = [
  { item: "電気（低圧）", jul: "▲3.5 円/kWh", aug: "▲4.5 円/kWh", sep: "▲3.5 円/kWh" },
  { item: "電気（高圧）", jul: "▲1.8 円/kWh", aug: "▲2.3 円/kWh", sep: "▲1.8 円/kWh" },
  { item: "電気（特別高圧）", jul: "対象外", aug: "対象外", sep: "対象外" },
  { item: "都市ガス", jul: "▲14.0 円/m3", aug: "▲18.0 円/m3", sep: "▲14.0 円/m3" },
];

// 請求書で支援の反映を確認する実務ステップ
const billCheckSteps = [
  {
    step: "① 「使用月」と「請求月」を取り違えない",
    detail:
      "支援単価は使用月ベースで決まります。7月使用分は、多くの契約で8月に届く請求（8月検針・8月請求）に反映されます。請求書の日付だけを見て「7月の請求に入っていないから対象外」と判断すると誤ります。まず検針期間（○月○日〜○月○日）を確認し、それが何月使用分にあたるかを特定してください。",
  },
  {
    step: "② 値引き行の名称と単価を確認する",
    detail:
      "値引きは「電気・ガス料金支援」「特別値引き」など、各社で異なる名称の独立した行として記載されるのが一般的です。低圧なら▲3.5円/kWh、高圧なら▲1.8円/kWh（いずれも7月使用分）が使用電力量に乗じられているかを、金額÷使用kWhで逆算して確かめられます。",
  },
  {
    step: "③ 契約区分が支援対象かを確認する",
    detail:
      "今回の支援は低圧・高圧が対象で、特別高圧は対象外です。特別高圧で受電している事業所の請求書には値引き行が現れません。同一企業でも、本社が高圧・基幹工場が特別高圧といったケースでは、拠点ごとに効果が分かれます。",
  },
  {
    step: "④ 支援対象外のコストが残っていることを確認する",
    detail:
      "再エネ賦課金4.18円/kWh、燃料費調整、市場価格調整、基本料金は支援の対象外で、請求書にそのまま残ります。値引き行があっても請求総額が前月より増えることは十分に起こり得ます。増減の要因を分解して確認してください。",
  },
  {
    step: "⑤ 8月使用分で単価が変わることを織り込む",
    detail:
      "8月使用分は低圧▲4.5円/kWh・高圧▲2.3円/kWhと増額される一方、9月使用分は7月と同じ水準に戻ります。冷房需要が最も大きい月に値引きが厚くなる設計のため、月次の請求額の比較では「支援単価の変化分」を差し引いて見る必要があります。",
  },
];

// JEPXスポット エリア別月間平均（円/kWh・公式CSV全コマ単純平均）
// prevMonthDiff は本表の 2026/7 と 2026/6 の掲載値から算出した参考値
const jepxAreaJul = [
  { area: "システムプライス", jul2026: "17.91", jun2026: "15.10", jul2025: "12.75", yoy: "+5.16", mom: "+2.81", up: true },
  { area: "北海道", jul2026: "14.32", jun2026: "14.51", jul2025: "13.11", yoy: "+1.21", mom: "▲0.19", up: true },
  { area: "東北", jul2026: "17.98", jun2026: "15.29", jul2025: "13.00", yoy: "+4.98", mom: "+2.69", up: true },
  { area: "東京", jul2026: "19.86", jun2026: "20.01", jul2025: "13.88", yoy: "+5.98", mom: "▲0.15", up: true },
  { area: "中部", jul2026: "18.84", jun2026: "17.92", jul2025: "13.84", yoy: "+5.01", mom: "+0.92", up: true },
  { area: "北陸", jul2026: "17.26", jun2026: "13.94", jul2025: "13.37", yoy: "+3.89", mom: "+3.32", up: true },
  { area: "関西", jul2026: "17.19", jun2026: "13.88", jul2025: "13.37", yoy: "+3.83", mom: "+3.31", up: true },
  { area: "中国", jul2026: "16.18", jun2026: "10.79", jul2025: "11.71", yoy: "+4.48", mom: "+5.39", up: true },
  { area: "四国", jul2026: "13.63", jun2026: "7.88", jul2025: "9.60", yoy: "+4.03", mom: "+5.75", up: true },
  { area: "九州", jul2026: "15.37", jun2026: "10.02", jul2025: "11.38", yoy: "+3.99", mom: "+5.35", up: true },
];

// 主要電力10社 燃料費調整（円/kWh・税込）。7月分・8月分はいずれも支援の値引き前。
// augHighWithSupport は 8月分（料金月）が多くの契約で7月使用分にあたることを踏まえ、高圧の支援単価▲1.80円/kWhを反映した参考値。
const fuelAdjustment2026JulAug = [
  {
    area: "北海道電力",
    basis: "燃調本体",
    julExtra: "▲2.15", julHigh: "▲2.21",
    augExtra: "▲1.31", augHigh: "▲1.34", augHighWithSupport: "▲3.14",
    note: "8月分は7月分比で特高+0.84・高圧+0.87とマイナス幅が縮小（＝実質の負担増方向）",
  },
  {
    area: "東北電力",
    basis: "燃調本体",
    julExtra: "0.51", julHigh: "0.53",
    augExtra: "0.93", augHigh: "0.97", augHighWithSupport: "▲0.83",
    note: "市場価格調整は別建て。8月分の合計（検針初日）は特高+1.13円/kWh、高圧は支援反映後▲0.63円/kWh（市場+0.19込み）",
  },
  {
    area: "東京電力エナジーパートナー",
    basis: "燃調本体",
    julExtra: "1.57", julHigh: "1.60",
    augExtra: "1.57", augHigh: "1.60", augHighWithSupport: "▲0.20",
    note: "2系列制。7月分は始期1日系列（7/30確定）、8月分は検針日系列の確定値。始期1日系列の8月分は8/28公表予定。市場価格調整は別建て",
  },
  {
    area: "中部電力ミライズ",
    basis: "燃調＋HH・卸市場調整",
    julExtra: "1.92", julHigh: "1.94",
    augExtra: "3.70", augHigh: "3.74", augHighWithSupport: "1.94",
    note: "8月分は7月分比で特高+1.78・高圧+1.80と10社中で最大の上昇。市場連動分が主導",
  },
  {
    area: "北陸電力",
    basis: "燃調本体",
    julExtra: "▲7.04", julHigh: "▲7.17",
    augExtra: "▲6.68", augHigh: "▲6.81", augHighWithSupport: "▲8.61",
    note: "8月分の市場価格調整は±0円で確定。合計は特高▲6.68円/kWh、高圧は支援反映後▲8.61円/kWh",
  },
  {
    area: "関西電力",
    basis: "燃調本体",
    julExtra: "▲0.91", julHigh: "▲0.92",
    augExtra: "▲0.69", augHigh: "▲0.70", augHighWithSupport: "▲2.50",
    note: "8月分の市場価格調整は500kW以上+0.62円/kWh、特別高圧+0.61円/kWhで確定（別建て）",
  },
  {
    area: "中国電力",
    basis: "合計値",
    julExtra: "▲1.09", julHigh: "▲1.11",
    augExtra: "▲0.71", augHigh: "▲0.72", augHighWithSupport: "▲2.52",
    note: "8月分は7月分比で特高+0.38・高圧+0.39。マイナス幅の縮小が続く",
  },
  {
    area: "四国電力",
    basis: "燃調本体",
    julExtra: "▲6.69", julHigh: "▲6.87",
    augExtra: "▲6.26", augHigh: "▲6.42", augHighWithSupport: "▲8.22",
    note: "8月分は7月分比で特高+0.43・高圧+0.45。マイナス基調は維持",
  },
  {
    area: "九州電力",
    basis: "燃調本体",
    julExtra: "▲0.83", julHigh: "▲0.84",
    augExtra: "▲0.63", augHigh: "▲0.65", augHighWithSupport: "▲2.45",
    note: "★前号（6月号）は合計値（燃調＋離島＋市場0.25）で掲載。本号は燃調本体で掲載しており基準が異なる",
  },
  {
    area: "沖縄電力",
    basis: "燃調＋離島",
    julExtra: "▲11.70", julHigh: "▲11.97",
    augExtra: "▲10.82", augHigh: "▲11.08", augHighWithSupport: "▲12.88",
    note: "8月分は7月分比で特高+0.88・高圧+0.89。マイナス幅は10社中で最大",
  },
];

// 8地点の7月平均気温（気象庁観測値）と平年差
const temperature8Cities = [
  { city: "札幌", temp: "22.6℃", anomaly: "+1.5℃", note: "北日本も高温側で推移" },
  { city: "仙台", temp: "24.6℃", anomaly: "+1.7℃", note: "東北南部でも冷房負荷が増加" },
  { city: "東京", temp: "27.2℃", anomaly: "+1.5℃", note: "猛暑日9日・熱帯夜10日" },
  { city: "名古屋", temp: "29.0℃", anomaly: "+2.1℃", note: "平年差は福岡に次ぐ大きさ（広島と同値）" },
  { city: "大阪", temp: "29.3℃", anomaly: "+1.6℃", note: "西日本の卸価格上昇と重なる" },
  { city: "広島", temp: "29.3℃", anomaly: "+2.1℃", note: "中国エリアの需要押し上げ要因" },
  { city: "福岡", temp: "29.8℃", anomaly: "+2.4℃", note: "8地点で平年差が最大" },
  { city: "那覇", temp: "29.3℃", anomaly: "+0.2℃", note: "8地点で平年差が最小" },
];

// 東京（気象庁観測値）の猛暑指標
const tokyoHeatStats = [
  { label: "猛暑日（最高35℃以上）", value: "9日", note: "7月20〜25日の6日連続と、7月29〜31日の3日" },
  { label: "真夏日（最高30℃以上）", value: "21日", note: "月の3分の2を超える日数" },
  { label: "熱帯夜（最低25℃以上）", value: "10日", note: "夜間も冷房負荷が落ちにくい" },
  { label: "月間最高気温", value: "37.1℃", note: "7月25日に観測" },
];

// 燃料市況の指標（6月貿易統計＝直近の実績、8月分燃調＝2026年3〜5月の算定期間）
const fuelMarketIndicators = [
  { item: "原油（6月貿易統計）", value: "117.2 米ドル/バレル", meaning: "直近の輸入実績。反映されるのは秋以降の燃調" },
  { item: "LNG（6月貿易統計）", value: "576.8 米ドル/トン", meaning: "同上。液化天然ガスの輸入CIF価格" },
  { item: "石炭（6月貿易統計）", value: "145.3 米ドル/トン", meaning: "同上。石炭火力の燃料費に影響" },
  { item: "為替（6月貿易統計）", value: "159.7 円/米ドル", meaning: "円建て燃料費を押し上げる方向に働く水準" },
  { item: "原油（8月分燃調の算定期間）", value: "86.7 米ドル/バレル", meaning: "2026年3〜5月の平均。8月分の単価に反映済み" },
  { item: "為替（8月分燃調の算定期間）", value: "158 円/米ドル", meaning: "2026年3〜5月の平均。8月分の単価に反映済み" },
];

const augustCheckpoints = [
  {
    heading: "①支援の「効き方」を契約区分ごとに分解する（低圧▲3.5・高圧▲1.8・特別高圧は対象外）",
    content:
      "7月使用分から始まった電気・ガス料金支援は、低圧▲3.5円/kWh・高圧▲1.8円/kWhで、特別高圧は対象外です。複数拠点を持つ企業では、低圧の店舗・高圧の工場・特別高圧の基幹拠点で効果がまったく異なります。8月使用分は低圧▲4.5円/kWh・高圧▲2.3円/kWhに増額され、9月使用分は7月と同じ水準に戻ります。まず自社の拠点を契約区分別に棚卸しし、「どこにいくら効くのか」を月別に置いた表を作ることが、8〜9月の資金繰り見通しの精度を上げます。",
  },
  {
    heading: "②夕方のスパイク時間帯に照準を合わせる（7月24日18:30〜19:00に西日本4エリアで58.38円/kWh）",
    content:
      "2026年7月のJEPXは、月間平均が17.91円/kWhである一方、関西・中国・四国・九州の4エリアで7月24日18時30分〜19時00分に58.38円/kWhを記録しました。東京も7月23日に50.01円/kWhをつけています。市場連動型プランでは、平均値ではなくこの時間帯の単価が請求に効きます。日没に向けて太陽光の出力が落ちる一方で冷房需要が残る夕方帯は、8月以降も同じ構造を持ちます。デマンドの山を昼から夕方へずらす運用が、かえって単価の高い時間帯に負荷を寄せていないかを確認してください。",
  },
  {
    heading: "③燃調の上昇局面を前提に、支援終了後（10月使用分以降）の姿を先に描く",
    content:
      "8月分の燃料費調整は、東京電力エナジーパートナーを除く9社で7月分から上昇方向（マイナス幅の縮小または加算幅の拡大）に動きました。支援は9月使用分までの設計であり、10月使用分以降の取り扱いは本記事執筆時点で決まっていません。支援の値引き行がなくなった場合の請求額を、いまの燃調水準で試算しておくと、予算の下振れ余地を早めに把握できます。なお本記事は今後の単価水準を予測するものではなく、確認すべき論点の整理にとどめています。",
  },
];

const industryImpact = [
  { industry: "製造業（24時間操業）", impact: "高", reason: "ベースロードが大きく、JEPX前年比+40.5%の影響を全量で受ける。高圧なら支援▲1.8円/kWhが効くが、特別高圧受電の拠点は対象外。夕方帯の生産シフトが単価の高い時間に重なっていないか要確認" },
  { industry: "商業施設・スーパー", impact: "高", reason: "冷蔵・冷凍の常時負荷に猛暑の冷房需要が加わり、7月は年間で最も負荷が重い月。低圧店舗は▲3.5円/kWh、高圧施設は▲1.8円/kWhと支援の厚みが異なるため、店舗種別ごとの効果差を把握しておきたい" },
  { industry: "病院・介護施設", impact: "高", reason: "熱帯夜10日（東京）で夜間も空調を落とせず、24時間の冷房負荷が続いた。高圧が中心のため支援は効くが、デマンド更新が起きると基本料金が翌月以降1年間上がる点の影響が大きい" },
  { industry: "データセンター", impact: "高", reason: "外気温上昇で冷却動力が増え、負荷率も高い。特別高圧受電の施設は支援の対象外で、JEPXと市場価格調整の上昇をそのまま受ける構造。市場連動比率と契約更改時期の点検を優先したい" },
  { industry: "オフィスビル", impact: "中", reason: "猛暑日9日（東京）で日中の冷房負荷が集中。高圧なら支援▲1.8円/kWhが効く一方、夕方の残業時間帯がスパイク時間と重なりやすい。テナント課金の設計と実費の乖離も確認どころ" },
  { industry: "ホテル・宿泊", impact: "中", reason: "客室と共用部の空調が24時間稼働し、熱帯夜で夜間負荷が落ちにくい。西日本エリアはJEPXの前月比上昇が大きく、立地エリアによって市場連動プランの影響差が出た月" },
  { industry: "物流・冷蔵倉庫", impact: "高", reason: "外気温上昇で冷凍機の負荷が直接増える。7月は庫内温度維持のための電力量が伸びやすく、支援の値引きを上回るコスト増になり得る。ピークカットと庫内運用の両面で点検したい" },
  { industry: "飲食チェーン", impact: "中", reason: "低圧中心で1拠点あたりの影響は限定的だが、支援は低圧▲3.5円/kWhと厚い。多店舗合算では値引き効果もコスト増も無視できず、8月使用分▲4.5円/kWhの増額分も含めた月別把握が有効" },
];

const reviewChecklist = [
  "7月使用分の請求書（多くは8月請求）で、電気・ガス料金支援の値引き行が計上されているか、単価が低圧▲3.5円/kWh・高圧▲1.8円/kWhになっているかを確認する",
  "特別高圧で受電している拠点は支援の対象外である点を踏まえ、拠点別に「支援が効く／効かない」を区分して予算に反映する",
  "8月使用分は低圧▲4.5円/kWh・高圧▲2.3円/kWhに増額、9月使用分は7月と同水準に戻る設計であることを、月別の資金繰り表に織り込む",
  "8月分の燃料費調整単価が7月分からどの方向に動いたか（東京電力エナジーパートナーを除く9社で上昇方向）を、自社の契約先について値引き前ベースで確認する",
  "市場連動型プランの法人は、月間平均17.91円/kWhではなく夕方のスパイク（西日本4エリア58.38円/kWh・東京50.01円/kWh）が請求に効く点を踏まえ、時間帯別の使用実績を確認する",
  "猛暑によるデマンド（契約電力）更新が起きていないかを7月の実績で確認し、更新されていた場合は翌月以降1年間の基本料金増を予算に反映する",
  "4区分の7月実績単価は電力取引報の公表待ち（10月頃見込み）である点を踏まえ、確定値が出たタイミングで単価前提を更新する",
];

const faqItems = [
  {
    question: "電気・ガス料金支援は7月使用分からいくら値引きされますか？特別高圧も対象ですか？",
    answer:
      "使用月ベースで、電気は7月使用分が低圧▲3.5円/kWh・高圧▲1.8円/kWh、8月使用分が低圧▲4.5円/kWh・高圧▲2.3円/kWh、9月使用分が低圧▲3.5円/kWh・高圧▲1.8円/kWhです。都市ガスは順に▲14.0・▲18.0・▲14.0円/m3となっています。★特別高圧は対象外で、特別高圧で受電している事業所の請求書には値引き行が現れません。財源は予備費5,135億円です。適用条件や請求書上の表記は各社で異なるため、必ず契約先の公式情報でご確認ください。",
  },
  {
    question: "7月使用分の支援は、いつの請求書に反映されますか？",
    answer:
      "支援の単価は使用月ベースで決まるため、7月使用分は多くの契約で8月に届く請求（8月検針・8月請求）に反映されます。請求書の日付だけを見ると「7月の請求に値引きがないから対象外」と誤解しやすい部分です。まず検針期間（○月○日〜○月○日）を確認し、それが何月使用分にあたるかを特定してから、値引き行の有無と単価を確認してください。値引き額を使用電力量で割ると、適用単価を逆算できます。",
  },
  {
    question: "2026年7月のJEPXスポット価格はどのくらい上がったのですか？",
    answer:
      "2026年7月のJEPXシステムプライス月間平均は17.91円/kWhで、前年同月（12.75円/kWh）比+5.16円、+40.5%の上昇でした。前月（15.10円/kWh）比でも+2.81円です。月間最高はシステムプライスで46.88円/kWh（7月23日16時30分〜17時00分）、エリア別では関西・中国・四国・九州の4エリアが7月24日18時30分〜19時00分に58.38円/kWh、東京が7月23日に50.01円/kWhを記録しました。月間最低はシステムプライス7.82円/kWh（7月3日の昼間）です。約定総量は376.97億kWh（前年同月272.05億kWh・+38.6%）でした。数値はJEPX公表のスポット取引結果CSVから全コマ単純平均で算出しています。",
  },
  {
    question: "なぜ7月は西日本エリアの卸価格の上がり方が大きかったのですか？",
    answer:
      "前月比で見ると、四国+5.75円/kWh、中国+5.39円/kWh、九州+5.35円/kWh、北陸+3.32円/kWh、関西+3.31円/kWhと西日本の上昇が目立つ一方、東京は▲0.15円/kWh、北海道は▲0.19円/kWhと小幅に低下しました。気象庁の8地点（札幌・仙台・東京・名古屋・大阪・広島・福岡・那覇）の7月平均気温でも、福岡+2.4℃・広島+2.1℃・名古屋+2.1℃と西日本〜東海で平年差が大きく、冷房需要の増加と重なった月でした。7月24日18時30分〜19時00分には関西・中国・四国・九州の4エリアで58.38円/kWhのスパイクも発生しています。ただし卸価格は需要・燃料・電源計画・連系線の混雑など複数の要因で決まるため、気温だけで説明できるものではありません。",
  },
  {
    question: "2026年8月分の燃料費調整単価はどう動きましたか？",
    answer:
      "支援の値引き前で比べると、8月分の燃料費調整は東京電力エナジーパートナー（特高1.57円/kWh・高圧1.60円/kWhで7月分と同水準。ただし7月分は始期1日系列、8月分は検針日系列で系列が異なります）を除く9社が上昇方向に動きました。上昇幅が最も大きいのは中部電力ミライズで、高圧が1.94円/kWhから3.74円/kWhへ+1.80円/kWh（HH・卸市場調整を内包した数値）です。北陸電力▲6.81円/kWh、四国電力▲6.42円/kWh、沖縄電力▲11.08円/kWhのようにマイナス基調を保つ会社でも、マイナス幅は縮小しています。なお高圧は支援▲1.80円/kWhが加わるため、請求ベースでは低下する契約もあります。本記事の表は値引き前と支援反映後を分けて掲載しています。",
  },
  {
    question: "2026年7月の4区分（低圧・高圧・特別高圧）の実績単価はいくらでしたか？",
    answer:
      "2026年7月分の4区分実績単価は、本記事公開時点では未公表です。出典としている電力・ガス取引監視等委員会「電力取引報」は2026年4月分までが公表済みで、5月分は8月中旬、7月分は10月頃の公表見込みです。このため本ページのカードは最新の確定分（2026年4月分）を表示し、7月の動向は燃料費調整・JEPX・気象・支援策から定性的に整理しています。参考として、過去の7月分は2023年7月が特別高圧20.73円/kWh・高圧21.69円/kWh・低圧電灯25.06円/kWh・低圧電力26.51円/kWh、2025年7月が同17.18・21.12・27.88・29.14円/kWhでした。確定値が公表され次第、順次更新します。",
  },
  {
    question: "2026年7月に電力需給ひっ迫は起きたのですか？",
    answer:
      "2026年7月22日、電力広域的運営推進機関（OCCTO）が東京電力パワーグリッド管内を対象に、16時30分〜17時30分の広域予備率が5%を下回る見通しとなったことを受けて、自家発電設備の焚き増しを依頼しました。一方で、需給ひっ迫注意報・警報の発令は確認されていません。猛暑による需要増で予備率が薄くなる局面はあったものの、需要側に数値目標付きの節電が求められる事態には至らなかった、というのが7月の姿です。なお料金面では、需給の逼迫度は卸価格のスパイクを通じて市場連動型プランに影響します。",
  },
  {
    question: "再エネ賦課金は2026年7月も4.18円/kWhのままですか？",
    answer:
      "はい。2026年度の再生可能エネルギー発電促進賦課金は4.18円/kWhで確定しており、2027年4月検針分までこの単価が適用されます。7月使用分でも全使用量に同じ単価が上乗せされます。賦課金は電気・ガス料金支援の対象外であり、値引き行があっても賦課金の負担は変わりません。使用量が多い法人ほど固定的な負担として効いてくる項目です。",
  },
];

const sourcesItems = [
  {
    name: "電力・ガス取引監視等委員会「電力取引報」",
    url: "https://www.egc.meti.go.jp/info/business/report/results.html",
    description: "4区分の確定単価（販売額÷販売電力量・全国計・検針期間ベース、事後訂正あり得る）。2026年4月分まで公表済み（5月分は8月中旬、7月分は10月頃の公表見込み）",
  },
  {
    name: "JEPX 一般社団法人 日本卸電力取引所",
    url: "https://www.jepx.jp/electricpower/market-data/spot/",
    description: "スポット取引結果（エリア別月間平均・最高値・最低値・約定総量は公表CSVの全1,488コマから単純平均等で算出。沖縄は取引対象外）",
  },
  {
    name: "経済産業省 資源エネルギー庁「電気・ガス料金支援」",
    url: "https://www.enecho.meti.go.jp/category/gekihen_lp/",
    description: "7〜9月使用分の電気・ガス料金支援の対象・単価（低圧・高圧が対象、特別高圧は対象外）",
  },
  {
    name: "経済産業省 2026年6月12日 プレスリリース",
    url: "https://www.meti.go.jp/press/2026/06/20260612003/",
    description: "電気・ガス料金支援の特例認可（予備費5,135億円）",
  },
  {
    name: "気象庁 過去の気象データ検索",
    url: "https://www.data.jma.go.jp/obd/stats/etrn/index.php",
    description: "2026年7月の8地点の月平均気温・猛暑日・真夏日・熱帯夜・月間最高気温（観測値ベース。平年差は平年値との差）。月報「7月の天候」は本記事公開時点で未公表",
  },
  {
    name: "電力広域的運営推進機関（OCCTO）",
    url: "https://www.occto.or.jp/",
    description: "2026年7月22日の東京電力パワーグリッド管内向け自家発電設備の焚き増し依頼（広域予備率が5%を下回る見通し）",
  },
  {
    name: "財務省 貿易統計",
    url: "https://www.customs.go.jp/toukei/info/",
    description: "2026年6月の原油・LNG・石炭の輸入価格および為替",
  },
  {
    name: "主要電力10社 2026年5月28日・6月26日・7月30日 各社プレスリリース",
    description: "2026年7月分・8月分の燃料費調整単価および市場価格調整（各社の燃料費調整ページを参照）",
  },
];

export default function BusinessElectricityRetrospective202607Page() {
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
          { name: "2026年7月" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年7月</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年7月】法人の電気料金はどう動いた？</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            猛暑でJEPXは前年比+40.5%・電気・ガス料金支援が7月使用分から初適用・燃料費調整は上昇局面へ
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年7月使用分の法人向け電気料金は、「猛暑・支援・燃調」の3つが同時に動いた月です。第一に、平年を大きく上回る猛暑を背景にJEPXスポットのシステムプライス月間平均が17.91円/kWhとなり、前年同月比+40.5%の上昇となりました。関西・中国・四国・九州では7月24日の夕方に58.38円/kWhのスパイクも発生しています。第二に、電気・ガス料金支援が7月使用分から適用開始となり、低圧▲3.5円/kWh・高圧▲1.8円/kWhの値引きが始まりました。ただし特別高圧は対象外です。第三に、燃料費調整は8月分で東京電力エナジーパートナーを除く9社が上昇方向に動き、上昇局面に入りました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方で、低圧・高圧・特別高圧の4区分の7月実績単価は、出典としている電力・ガス取引監視等委員会「電力取引報」が2026年4月分までしか公表していないため、本記事公開時点では確定していません。そこで本記事では、確定値（2026年4月分まで）と、7月の動向に関する定性整理を明確に分けて解説します。数値の断定は確定値に限り、公表待ちの項目は「公表待ち」と明記します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事は、電力・ガス取引監視等委員会「電力取引報」、JEPX、経済産業省・資源エネルギー庁、気象庁、電力広域的運営推進機関（OCCTO）、財務省貿易統計、主要電力10社の公表情報をもとに整理しています。本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。また、今後の価格水準を予測するものでもありません。公開日は2026年8月2日です。
          </p>
        </header>

        <TableOfContents />

        <MonthlyDataCards data={JULY_PAGE_DATA} />
        <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-6 text-slate-500">
          ※上記カードは電力・ガス取引監視等委員会「電力取引報」の最新確定分（2026年4月分・確定）です（販売額÷販売電力量・全国計・検針期間ベース、事後訂正あり得る）。
          2026年5月分以降は公表待ちです（5月分＝8月中旬、6月分＝9月頃、7月分＝10月頃の公表見込み）。確定値が公表され次第、順次更新します。
        </p>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年7月の結論3点 — 猛暑でJEPX前年比+40.5%・支援の初適用・燃調は上昇局面入り</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                平年を大きく上回る猛暑を背景に、JEPXスポットのシステムプライス月間平均は17.91円/kWhとなり、前年同月（12.75円/kWh）比+5.16円、+40.5%の上昇でした。7月23日の夕方には東京で50.01円/kWh、7月24日18時30分〜19時00分には関西・中国・四国・九州で58.38円/kWhのスパイクが発生しています。約定総量も376.97億kWh（前年同月272.05億kWh）と+38.6%増加しました。
              </li>
              <li>
                電気・ガス料金支援が7月使用分から適用開始となりました。単価は低圧▲3.5円/kWh・高圧▲1.8円/kWh（いずれも7月使用分）で、8月使用分は低圧▲4.5円/kWh・高圧▲2.3円/kWhに増額されます。★特別高圧は対象外です。7月使用分は多くの契約で8月請求に反映されるため、「請求書のどこを見れば確認できるか」を押さえておく必要があります。
              </li>
              <li>
                燃料費調整は上昇局面に入りました。8月分（支援の値引き前）は、東京電力エナジーパートナーを除く9社で7月分から上昇方向（マイナス幅の縮小または加算幅の拡大）に動いています。高圧は支援▲1.80円/kWhが加わるため請求ベースでは低下する契約もありますが、値引き前のベースは上向きです。再エネ賦課金は4.18円/kWh（2026年度確定）で据え置きです。
              </li>
            </ol>
          </section>

          <MonthlyTrendChart data={JULY_PAGE_DATA} />
          <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-6 text-slate-500">
            ※上記グラフは電力取引報の確定値が公表済みの直近6か月（2025年11月〜2026年4月分）です。2026年5月分以降は公表待ちのため含みません。
          </p>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">参考：7月のkWh単価 年別比較（2023〜2025年は確定・2026年は公表待ち）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              同じ7月で過去の水準と比べると、現在の料金がどのあたりに位置するかを把握しやすくなります。2026年7月分は電力取引報の公表待ち（10月頃見込み）のため、確定値が出るまでは2023〜2025年の7月分を参照します。2023年7月から2025年7月にかけて、特別高圧は20.73円/kWhから17.18円/kWhへ低下する一方、低圧電力は26.51円/kWhから29.14円/kWhへ上昇しており、区分によって動きの方向が異なる点が読み取れます。
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-left font-semibold text-slate-900">契約区分</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2023年7月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2024年7月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2025年7月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-sky-900">2026年7月</th>
                  </tr>
                </thead>
                <tbody>
                  {YEAR_COMPARISON_CATEGORIES.map((label, catIdx) => (
                    <tr key={label} className="odd:bg-white even:bg-slate-50/60">
                      <td className="border-b border-slate-200 px-3 py-2.5 font-medium text-slate-800">{label}</td>
                      {JULY_PAGE_DATA.sameMonthHistory.map((entry) => (
                        <td key={entry.year} className="border-b border-slate-200 px-3 py-2.5 text-right tabular-nums text-slate-700">
                          {entry.values[catIdx].toFixed(2)}円
                        </td>
                      ))}
                      <td className="border-b border-slate-200 px-3 py-2.5 text-right text-sky-900">公表待ち</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※単位は円/kWh。消費税および再生可能エネルギー発電促進賦課金を含まない参考値です。数値は電力・ガス取引監視等委員会「電力取引報」から算出しています。2026年7月分は公表待ちのため、この表では断定的な数値を示していません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">JEPXスポット7月平均17.91円/kWh — 前年同月比+40.5%と夕方の58円台スパイク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年7月のJEPXシステムプライス月間平均は17.91円/kWhで、前年同月（12.75円/kWh）比+5.16円、+40.5%の上昇でした。前月（15.10円/kWh）比でも+2.81円です。月間の最高値はシステムプライスで46.88円/kWh（7月23日16時30分〜17時00分）、最低値は7.82円/kWh（7月3日の昼間）でした。約定総量は376.97億kWh（前年同月272.05億kWh）で+38.6%と大きく増加しています。数値はJEPX公表のスポット取引結果CSVから全1,488コマの単純平均等で算出しています。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">エリア</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/7 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/6 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2025/7 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前年同月差</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前月差（算出値）</th>
                  </tr>
                </thead>
                <tbody>
                  {jepxAreaJul.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jul2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jun2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jul2025}</td>
                      <td className={`border-b border-slate-200 px-3 py-2 text-right tabular-nums ${row.up ? "text-rose-700" : "text-emerald-700"}`}>{row.yoy}</td>
                      <td className={`border-b border-slate-200 px-3 py-2 text-right tabular-nums ${row.mom.startsWith("▲") ? "text-emerald-700" : "text-rose-700"}`}>{row.mom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※2026/6の値は前号（2026年6月号）掲載値です。前年同月差はJEPX公表値に基づく数値で、端数処理前の値から算出しているため、本表の掲載値どうしの差と0.01円/kWh程度ずれる行があります。前月差は本表の2026/7と2026/6の掲載値から算出した参考値です。沖縄はJEPXの取引対象外のため表に含まれません。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">月間平均より、夕方のスパイクが請求に効く</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを採用する法人にとって重要なのは、月間平均ではなくコマ単位の単価です。2026年7月は、関西・中国・四国・九州の4エリアで7月24日18時30分〜19時00分に58.38円/kWhを記録し、東京も7月23日に50.01円/kWhをつけました。システムプライスの月間最高46.88円/kWhは、月間最低7.82円/kWhの約6倍にあたります。日没に向かって太陽光の出力が落ちる一方で、猛暑により冷房需要が夕方まで残る時間帯に、価格が集中的に立ち上がる構造です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              エリア別に前月差を見ると、四国+5.75円/kWh・中国+5.39円/kWh・九州+5.35円/kWhと西日本の上昇が大きく、北陸+3.32円/kWh・関西+3.31円/kWhが続きます。一方で東京は▲0.15円/kWh、北海道は▲0.19円/kWhと小幅に低下しました。6月号では東京20.01円/kWh・四国7.88円/kWhと東西差が大きく開いていましたが、7月は西日本が水準を切り上げたことで差が縮まる形になりました。ただし卸価格は需要・燃料価格・電源の稼働計画・連系線の混雑など複数の要因で決まるため、単一の要因で説明できるものではありません。{" "}
              <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXとは</Link>
              、{" "}
              <Link href="/jepx-spot-price-dashboard" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット価格ダッシュボード</Link>
              、{" "}
              <Link href="/jepx-spike-electricity-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスパイクの電気代インパクト</Link>
              、{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整の総合解説</Link>
              も参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気・ガス料金支援の初適用（7月使用分）— 請求書のどこで確認するか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年6月12日に特例認可された電気・ガス料金支援（予備費5,135億円）は、7月使用分から適用が始まりました。6月号の時点では「決定した制度」でしたが、7月号では「実際に請求へ反映され始めた制度」に変わります。ここで最も間違えやすいのが、単価が<strong className="font-semibold text-slate-900">使用月ベース</strong>で決まる一方、法人が目にするのは<strong className="font-semibold text-slate-900">請求月</strong>だという点です。7月使用分は、多くの契約で8月に届く請求に反映されます。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-sky-300 bg-white">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="border-b border-sky-200 px-3 py-2 text-left font-semibold text-slate-900">対象</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-right font-semibold text-slate-900">7月使用分</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-right font-semibold text-slate-900">8月使用分</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-right font-semibold text-slate-900">9月使用分</th>
                  </tr>
                </thead>
                <tbody>
                  {supportUnitByUsageMonth.map((row) => (
                    <tr key={row.item} className="even:bg-sky-50/30">
                      <td className="border-b border-sky-200 px-3 py-2 font-medium">{row.item}</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-right tabular-nums">{row.jul}</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-right tabular-nums">{row.aug}</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-right tabular-nums">{row.sep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 rounded-md bg-white px-3 py-2 text-xs leading-6 text-amber-800">
              ★<strong className="font-semibold">特別高圧は対象外です。</strong>特別高圧で受電している事業所の請求書には、この値引き行は現れません。同一企業内でも、低圧の店舗・高圧の工場・特別高圧の基幹拠点で効果がまったく異なる点に注意してください。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              なお、前号（2026年6月号）では四国電力が公表した<strong className="font-semibold text-slate-900">料金月ベース</strong>の単価例（低圧が8月▲3.5・9月▲4.5・10月▲3.5円/kWh、高圧が▲1.8・▲2.3・▲1.8円/kWh）を紹介しました。これを使用月ベースに読み替えると、低圧は7月▲3.5・8月▲4.5・9月▲3.5円/kWh、高圧は7月▲1.8・8月▲2.3・9月▲1.8円/kWhとなり、上表と整合します。「料金月」と「使用月」のどちらで書かれているかを確認しないと、1か月ずれた理解になります。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">請求書での確認 実務5ステップ</h3>
            <div className="mt-3 space-y-4">
              {billCheckSteps.map((item) => (
                <div key={item.step} className="rounded-lg border border-sky-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">{item.step}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              支援は一部単価の値引きであり、請求額のすべてが下がるわけではありません。再エネ賦課金（2026年度確定 4.18円/kWh）、燃料費調整、市場価格調整、基本料金は支援対象外として請求書に残ります。制度の背景は{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              、{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、請求書の読み方は{" "}
              <Link href="/how-to-read-electricity-bill" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金請求書の読み方</Link>
              、{" "}
              <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気料金の内訳</Link>
              、支援制度そのものの整理は{" "}
              <Link href="/electricity-price-subsidy-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金補助の影響</Link>
              、{" "}
              <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・支援制度の全体像</Link>
              も併せてご確認ください。なお、本記事は特定の政策の是非を評価するものではなく、制度事実の整理を目的としています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">猛暑と電力需要 — 東京の猛暑日9日・7月22日の自家発焚き増し依頼</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年7月は、全国的に平年を上回る気温で推移しました。8地点の7月平均気温の平年差は+0.2℃（那覇）から+2.4℃（福岡）の範囲で、いずれも平年を上回っています。台風は7月に5個発生しましたが、上陸は0個でした。6月が梅雨と台風による日照不足の月だったのに対し、7月は晴天と高温が続いた月であり、電力需要の構造がまったく異なります。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">地点</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">7月平均気温</th>
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
            <p className="mt-2 text-xs text-slate-500">
              ※気象庁の観測値ベースです。平年差は平年値との差を示します。月報「2026年7月の天候」は本記事公開時点（2026年8月2日）で未公表のため、本表は観測値から整理したものです。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">東京の猛暑指標 — 猛暑日9日・熱帯夜10日</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              需要のピークがどれだけ連続したかを見るには、平均気温よりも猛暑日や熱帯夜の日数が有効です。東京では次の通りでした。
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {tokyoHeatStats.map((row) => (
                <div key={row.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold text-slate-500">{row.label}</p>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{row.value}</p>
                  <p className="mt-1 text-xs leading-6 text-slate-600">{row.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              猛暑日が7月20日から25日まで6日連続し、7月29日から31日にも3日続いたことで、月内に2つの需要ピーク期が形成されました。熱帯夜10日は、夜間も冷房を落とせない日が3分の1近くあったことを意味し、24時間稼働の病院・介護施設・データセンター・冷蔵倉庫では負荷の谷が浅くなります。月間最高気温は7月25日の37.1℃でした。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">7月22日の需給 — OCCTOによる自家発焚き増し依頼</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              需給面では、2026年7月22日に電力広域的運営推進機関（OCCTO）が東京電力パワーグリッド管内を対象として、自家発電設備の焚き増しを依頼しました。16時30分〜17時30分の広域予備率が5%を下回る見通しとなったことが理由です。一方で、需給ひっ迫注意報・警報の発令は確認されていません。つまり、予備率が薄くなる局面はあったものの、需要側に数値目標付きの節電が求められる事態には至らなかった、というのが2026年7月の姿です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              料金の観点では、需給の逼迫度は卸価格を通じて市場連動型プランに影響します。7月23日・24日の夕方にJEPXの月間最高値が記録されたことと、7月22日に予備率が薄くなった時間帯（16時30分〜17時30分）がいずれも夕方にあたる点は、需給と価格が同じ方向を向いていたことを示しています。猛暑期のリスク整理は{" "}
              <Link href="/extreme-heat-electricity-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">猛暑と電気料金リスク</Link>
              、{" "}
              <Link href="/electricity-cost-risk-heatwave" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">熱波による電力コストリスク</Link>
              、需要側の対策は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロールの基本</Link>
              、{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">夏季のデマンドレスポンス戦略</Link>
              が参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向（2026年7月）— 支援▲3.5円が最初に効く区分</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧（電灯・電力）は、小規模事業所・店舗・サービス拠点で広く使われる契約区分です。2026年7月分の低圧の実績単価は電力取引報の公表待ち（10月頃見込み）のため、ここでは断定を避け、確定値・燃料費調整・支援策から動向を定性的に整理します。参考として、電力取引報の最新確定分である2026年4月分は、低圧電灯25.94円/kWh・低圧電力32.12円/kWhでした（消費税・賦課金を含まない参考値）。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              7月の低圧で最も大きい変化は、電気・ガス料金支援の値引き単価▲3.5円/kWh（7月使用分）が適用され始めたことです。4区分の中では低圧の値引き単価が最も厚く、8月使用分は▲4.5円/kWhへ増額されます。一方で、猛暑による冷房需要の増加で使用電力量そのものが伸びるため、単価が下がっても請求総額は増えるという組み合わせが起こり得ます。「単価」と「使用量」を分けて確認することが、7月請求の理解には欠かせません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>コンビニ・物販店・ドラッグストアなどの小売業（冷蔵ケースと空調が同時にピーク）</li>
              <li>飲食店・カフェ・ベーカリーなどの店舗業態（厨房排熱で空調負荷が上乗せ）</li>
              <li>クリニック・サロン・整骨院などのサービス事業（営業時間帯に負荷が集中）</li>
              <li>小規模オフィス・営業所・学習塾などの拠点（夕方以降の負荷が長い）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              多店舗展開の企業では、1拠点あたりの差は小さくても合算では大きな金額になります。低圧は支援の値引きが最も厚い一方、猛暑による使用量増の影響も受けやすい区分です。{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">削減見直しポイント</Link>
              、{" "}
              <Link href="/how-to-read-electricity-bills-for-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">見直しのための請求書の読み方</Link>
              を参考に、店舗単位ではなく合算での把握を進めることが望ましいです。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向（2026年7月）— 支援▲1.8円と燃調上昇の綱引き</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧は、工場・商業施設・病院・学校・物流施設・オフィスビルで広く使われる主力契約区分です。2026年7月分の高圧の実績単価は電力取引報の公表待ちのため、ここでは動向を定性的に整理します。参考として、最新確定分の2026年4月分は高圧21.37円/kWhでした。7月の高圧は、支援の値引き（▲1.8円/kWh・7月使用分）と、燃料費調整の上昇という2つの力が反対方向に働いた月です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整（値引き前）を見ると、8月分は7月分から中部電力ミライズ+1.80円/kWh、沖縄電力+0.89円/kWh、北海道電力+0.87円/kWhなど、東京電力エナジーパートナーを除く9社が上昇方向に動いています。ここに支援▲1.80円/kWhが加わることで、請求ベースでは低下する契約と、なお上昇する契約に分かれます。たとえば東京電力エナジーパートナーの8月分は値引き前1.60円/kWhに対し支援反映後▲0.20円/kWh、中部電力ミライズは値引き前3.74円/kWhに対し支援反映後1.94円/kWhとなります。同じ「支援▲1.8円」でも、燃調の水準しだいで見え方が大きく変わる点が7月号の要点です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>中規模工場・加工場・食品工場（連続稼働で猛暑の影響を全量で受ける）</li>
              <li>スーパー・ショッピング施設・量販店（冷蔵と冷房が同時にピーク）</li>
              <li>病院・介護施設・学校法人（熱帯夜10日で夜間も空調を落とせない）</li>
              <li>倉庫・物流拠点・配送センター・冷蔵倉庫（外気温上昇が冷凍機負荷に直結）</li>
              <li>延床面積の大きいオフィスビル（猛暑日9日で日中の冷房負荷が集中）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の業種別の見直しポイントは{" "}
              <Link href="/articles/industry-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の見直しポイント集</Link>
              、契約見直しの全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、デマンド（契約電力）の考え方は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向（2026年7月）— 支援対象外で市場調整の上昇を直に受ける</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は、大規模工場・データセンター・大型商業施設・自治体の基幹施設・大規模病院など、非常に大きな電力需要を持つ事業者が中心です。2026年7月分の特別高圧の実績単価は電力取引報の公表待ちのため、ここでは動向を定性的に整理します。参考として、最新確定分の2026年4月分は特別高圧17.56円/kWhでした。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              7月の特別高圧で決定的に重要なのは、<strong className="font-semibold text-slate-900">電気・ガス料金支援の対象外である</strong>という点です。低圧▲3.5円/kWh・高圧▲1.8円/kWhの値引きが始まった一方で、特別高圧の請求書にはこの行が現れません。同時に、燃料費調整は8月分で上昇方向に動いています。中部電力ミライズの特高は7月分1.92円/kWhから8月分3.70円/kWhへ+1.78円/kWh、北海道電力は▲2.15円/kWhから▲1.31円/kWhへとマイナス幅が0.84円/kWh縮小しました。市場価格調整についても、関西電力の8月分は特別高圧+0.61円/kWh、東北電力は8月分の合計（検針初日）が特高+1.13円/kWhと確定しています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              つまり特別高圧は、支援による下押しがない状態で、JEPX前年比+40.5%の局面と燃調の上昇局面を同時に受ける構造にあります。市場連動比率の点検と、契約更改時期の前倒し確認の優先度が相対的に高い区分です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>素材・化学・金属・機械などの大規模工場</li>
              <li>24時間稼働の生産拠点・データセンター・大規模サーバー施設</li>
              <li>大型商業施設・再開発拠点</li>
              <li>自治体の上下水道施設・大型公共施設</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧需要家にとっては{" "}
              <Link href="/extra-high-voltage-electricity-bill-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧の請求書ガイド</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              、{" "}
              <Link href="/jepx-price-volatility" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX価格のボラティリティ</Link>
              が実務的な参照先になります。
            </p>
          </section>

          <ContentCta
            heading="猛暑局面の上振れリスクを試算する"
            description="JEPXは前年比+40.5%、夕方には58円台のスパイクも発生しました。支援の値引きを織り込んだうえで、自社エリア・自社契約の影響額をシミュレーターで試算しておきましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年7月分・8月分 主要電力10社の燃料費調整単価（値引き前／支援反映後）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              主要電力10社の2026年7月分・8月分の燃料費調整単価を、特別高圧・高圧について整理しました。数値はすべて税込で、<strong className="font-semibold text-slate-900">7月分・8月分の各欄は電気・ガス料金支援の値引き前</strong>です。前月比を会社間で比較するときは、この値引き前ベースで揃える必要があります。そのうえで、高圧については支援を反映した参考値を別欄に併記しました。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">電力会社</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">基準</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">7月分 特高</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">7月分 高圧</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">8月分 特高<br />（値引き前）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">8月分 高圧<br />（値引き前）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-sky-900">8月分 高圧<br />（支援反映後）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelAdjustment2026JulAug.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.basis}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.julExtra}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.julHigh}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.augExtra}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.augHigh}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums font-semibold text-sky-900">{row.augHighWithSupport}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※単位は円/kWh・税込。「8月分 高圧（支援反映後）」は、料金月8月分が多くの契約で7月使用分にあたることを踏まえ、高圧の支援単価▲1.80円/kWhを値引き前の単価に加えた参考値です。特別高圧は支援の対象外のため、特高欄には支援を反映していません。実際の適用は契約先・検針期間により異なります。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">8月分は上昇方向 — 東京電力EPを除く9社</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              値引き前ベースで7月分と8月分を比べると、上昇幅が大きい順に中部電力ミライズ（高圧+1.80円/kWh）、沖縄電力（同+0.89円/kWh）、北海道電力（同+0.87円/kWh）、四国電力（同+0.45円/kWh）、東北電力（同+0.44円/kWh）、中国電力（同+0.39円/kWh）、北陸電力（同+0.36円/kWh）、関西電力（同+0.22円/kWh）、九州電力（同+0.19円/kWh）となりました。マイナス基調を保っている北陸電力・四国電力・沖縄電力などでも、マイナス幅は縮小しています。8月分は2026年3〜5月の燃料価格（原油86.7米ドル/バレル・為替158円/米ドル）を反映しており、この期間の上昇が単価に表れた形です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              東京電力エナジーパートナーだけは7月分・8月分とも特高1.57円/kWh・高圧1.60円/kWhで同じ水準です。ただし同社は2系列制をとっており、7月分は始期1日系列（7月30日確定）、8月分は検針日系列の確定値であるため、単純な前月比較はできません。始期1日系列の8月分は8月28日に公表される予定です。この点を踏まえると、「10社中9社が上昇し、1社は系列が異なるため比較保留」という読み方が実務的です。
            </p>
            <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800">
              ※基準の違いにご注意ください。本表は各社の公表単位に合わせ、燃調本体・合計値・市場調整内包の別を「基準」欄に明記しています。とくに<strong className="font-semibold">九州電力は、前号（2026年6月号）が合計値（燃調＋離島＋市場0.25）だったのに対し、本号は燃調本体で掲載</strong>しているため、前号の掲載値と単純比較はできません。中部電力ミライズはHH・卸市場調整を内包した数値、中国電力は合計値、沖縄電力は燃調＋離島です。詳細は各社公式および{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              、{" "}
              <Link href="/how-to-check-fuel-cost-adjustment-terms" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">約款での燃料費調整確認</Link>
              をご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料市況と今後の見通しの考え方 — 6月貿易統計とJKMの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整は、算定期間の燃料輸入価格をおよそ3〜5か月遅れで単価に反映する仕組みです。したがって「いま公表された単価」と「いまの燃料市況」は、指している期間が異なります。この時間差を意識せずに両者を並べると、実際の請求と食い違う理解になります。2026年7月時点で押さえておきたい指標を整理すると次の通りです。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">指標</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">水準</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">位置づけ</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelMarketIndicators.map((row) => (
                    <tr key={row.item} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.item}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.value}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              8月分の燃料費調整に反映されているのは2026年3〜5月の実績（原油86.7米ドル/バレル・為替158円/米ドル）で、これが10社中9社の上昇の背景にあります。一方、直近の6月貿易統計では原油117.2米ドル/バレル・LNG576.8米ドル/トン・石炭145.3米ドル/トン、為替159.7円/米ドルとなっており、この水準が反映されるのは秋以降の単価です。参考として、アジアのLNGスポット指標であるJKMは7月下旬に21〜22米ドル/百万BTU台で推移したと報じられています（報道ベースの二次情報のため参考扱いです）。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              ここから先の単価がどうなるかは、燃料価格だけでなく為替、各社の燃料構成比、市場価格調整の設計、そして制度面の取り扱いによって変わります。<strong className="font-semibold text-slate-900">本記事は今後の単価水準を予測するものではありません。</strong>実務的には、「燃調は3〜5か月遅れで動く」という時間軸を前提に、支援が9月使用分までの設計であることと合わせて、10月使用分以降の姿を複数パターンで置いておくことが、予算の下振れ余地を早めに把握する方法になります。燃料価格と料金の関係は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              、長期の水準感は{" "}
              <Link href="/business-electricity-price-trend-10-years" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気料金の10年推移</Link>
              、{" "}
              <Link href="/heatwave-climate-electricity-cost-outlook" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">気候変動と電力コストの見通し</Link>
              で整理しています。
            </p>
          </section>

          <ContentCta
            heading="支援の反映や燃調の見方を専門家に相談する"
            description="「支援の値引き行が請求書にない」「特別高圧の拠点だけ下がらない」「燃調が上がって支援分が相殺された」といった疑問は、契約区分と検針期間を確認すれば整理できます。中立の立場でお手伝いします。"
            links={[
              { href: "/contact", label: "お問い合わせ・相談する" },
              { href: "/concierge", label: "AIコンシェルジュに聞く" },
            ]}
          />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別に見る2026年7月の影響（冷房ピーク・夕方スパイク・支援の効き方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年7月の電気料金影響を業種別に整理しました。7月は、①猛暑による冷房ピークで使用量が伸びる、②夕方のスパイク時間帯に負荷が残る、③支援の効き方が契約区分で分かれる、という3つが同時に作用した月です。影響度は、市場連動比率・ベースロードの大きさ・冷房や冷蔵の負荷特性・支援の効きやすさを総合した目安です（実績単価ではなく定性的な整理です）。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">業種</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">影響度</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な要因と7月の見直しポイント</th>
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
              <Link href="/hospital-summer-peak-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院の夏季ピーク対策</Link>
              ／{" "}
              <Link href="/cold-storage-summer-electricity-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷蔵倉庫の夏季電力戦略</Link>
              ／{" "}
              <Link href="/datacenter-summer-cooling-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの夏季冷却戦略</Link>
              ／{" "}
              <Link href="/hotel-summer-peak-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテルの夏季ピーク対策</Link>
              ／{" "}
              <Link href="/manufacturing-cooling-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の冷却戦略</Link>
              ／{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビル</Link>
              ／{" "}
              <Link href="/supermarket-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">スーパー</Link>
              ／{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場</Link>
              などの個別記事を参照してください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">月次サマリ：2026年7月の総括と8月に向けたチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年7月使用分の法人電気料金は、(1) 平年を大きく上回る猛暑を背景にJEPXシステムプライスの月間平均が17.91円/kWh・前年同月比+40.5%となり、夕方には西日本4エリアで58.38円/kWh・東京で50.01円/kWhのスパイクが発生、(2) 電気・ガス料金支援が7月使用分から初適用となり低圧▲3.5円/kWh・高圧▲1.8円/kWhの値引きが始まった一方で特別高圧は対象外、(3) 燃料費調整は8月分で東京電力エナジーパートナーを除く9社が上昇方向に動き上昇局面へ、という3点が重なる月でした。再エネ賦課金は4.18円/kWh（2026年度確定）で据え置きです。4区分の7月実績単価は電力取引報の公表待ち（10月頃見込み）のため、本記事では確定値と定性整理を分けて解説しました。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">2026年7月 主要トピック 5件</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>JEPXシステムプライスの7月月間平均が17.91円/kWh、前年同月（12.75円/kWh）比+5.16円・+40.5%。約定総量も376.97億kWh（前年272.05億kWh）と+38.6%増加。</li>
              <li>7月24日18時30分〜19時00分に関西・中国・四国・九州で58.38円/kWh、7月23日に東京で50.01円/kWhのスパイク。システムプライスの月間最高は46.88円/kWh（7月23日16時30分〜17時00分）、最低は7.82円/kWh（7月3日昼）。</li>
              <li>電気・ガス料金支援が7月使用分から適用開始（低圧▲3.5円/kWh・高圧▲1.8円/kWh、8月使用分は▲4.5・▲2.3円/kWhへ増額、9月使用分は7月と同水準）。★特別高圧は対象外。予備費5,135億円。</li>
              <li>8月分の燃料費調整（値引き前）は東京電力エナジーパートナーを除く9社が上昇方向。上昇幅が最大なのは中部電力ミライズの高圧+1.80円/kWh。算定期間は2026年3〜5月（原油86.7米ドル/バレル・為替158円/米ドル）。</li>
              <li>猛暑（東京の猛暑日9日・熱帯夜10日・月間最高37.1℃）。7月22日にOCCTOが東京電力パワーグリッド管内へ自家発焚き増しを依頼（16時30分〜17時30分の広域予備率が5%を下回る見通し）。需給ひっ迫注意報・警報の発令は確認されていない。</li>
            </ul>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">8月に向けた確認3視点</h3>
            <div className="mt-4 space-y-4">
              {augustCheckpoints.map((item) => (
                <div key={item.heading}>
                  <h4 className="text-base font-semibold text-slate-900">{item.heading}</h4>
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
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              7月時点の確認チェックリストは次の通りです。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {reviewChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs leading-6 text-slate-500">
              ※本記事の数値は、電力・ガス取引監視等委員会「電力取引報」（4区分の確定値、2026年4月分まで公表済み）、JEPX（スポット取引結果CSVの全1,488コマ単純平均）、主要電力10社の2026年5月28日・6月26日・7月30日プレス（7月分・8月分の燃料費調整）、気象庁の観測値（2026年7月）、電力広域的運営推進機関（OCCTO）、経済産業省・資源エネルギー庁（電気・ガス料金支援）、財務省貿易統計（2026年6月）に基づきます。2026年5月分以降の4区分実績単価は公表待ちで、公表され次第、順次更新します。本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。また、今後の価格水準を予測するものでもありません。
            </p>
          </section>

          <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt={publishedDate} />

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/business-electricity-retrospective/2026-06", title: "2026年6月の振り返り", description: "前号（7〜9月支援の決定・JEPX前年比約+39%・梅雨と台風）" },
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "全月次振り返り一覧と長期推移" },
              { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", title: "特別高圧の電気料金推移（2019〜2025）", description: "コロナ・ウクライナ危機・補助金の影響を年別に解説" },
              { href: "/business-electricity-retrospective/high-voltage-2019-2025", title: "高圧の電気料金推移（2019〜2025）", description: "年別の推移と構造変化を確認" },
              { href: "/business-electricity-retrospective/low-voltage-power-2019-2025", title: "低圧電力の電気料金推移（2019〜2025）", description: "低圧電力の長期推移を整理" },
              { href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025", title: "低圧電灯の電気料金推移（2019〜2025）", description: "低圧電灯の長期推移を整理" },
              { href: "/region-kyushu-electricity-price-trend", title: "九州エリアの電気料金推移", description: "7月に前月比+5.35円/kWhとなった西日本エリアの背景" },
              { href: "/region-shikoku-electricity-price-trend", title: "四国エリアの電気料金推移", description: "7月の前月差が最大（+5.75円/kWh）となったエリア" },
              { href: "/region-kansai-electricity-price-trend", title: "関西エリアの電気料金推移", description: "夕方58.38円/kWhのスパイクが発生したエリア" },
              { href: "/region-tokyo-electricity-price-trend", title: "東京エリアの電気料金推移", description: "7月は前月比▲0.15円/kWhと小幅低下" },
              { href: "/business-electricity-price-trend-10-years", title: "法人電気料金の10年推移", description: "長期の推移を俯瞰して現在地を確認" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "8月分の上昇を理解するための基礎解説" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "4.18円/kWh（2026年度）の仕組み" },
              { href: "/market-price-adjustment", title: "市場価格調整の総合解説", description: "燃調本体とは別の市場連動分の見方" },
              { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格ダッシュボード", description: "エリア別の単価とスパイクの確認" },
              { href: "/extreme-heat-electricity-risk", title: "猛暑と電気料金リスク", description: "猛暑が法人コストに与える影響" },
              { href: "/demand-control-guide", title: "デマンドコントロールの基本", description: "冷房ピークによる契約電力更新を抑える" },
              { href: "/how-to-read-electricity-bill", title: "電気料金請求書の読み方", description: "支援の値引き行と対象外コストの切り分け" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備で確認すべき項目" },
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集", description: "業種別の負荷特性と契約最適化" },
              { href: "/executive-cfo-electricity-basics", title: "CFO向け電気料金基礎", description: "経営層向け説明資料" },
              { href: "/contact", title: "お問い合わせ・相談", description: "契約・請求の疑問を中立の立場で整理" },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="2026年7月の動向を踏まえ、自社の契約条件をシミュレーターで診断してください。支援が9月使用分までであることを前提に、10月以降の姿を試算しておくのにも活用できます。"
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
