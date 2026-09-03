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
  "【2026年8月】法人の電気料金はどう動いた？JEPX前年比+59.7%・支援は最大単価の8月使用分・高温は西日本中心";
const pageDescription =
  "2026年8月使用分の法人向け電気料金を、JEPXスポット8月平均19.14円/kWh（前年比+59.7%）と8月26日夕方の55.23円/kWh、支援単価が最も厚い8月使用分（低圧▲4.5円・高圧▲2.3円/kWh、特別高圧は対象外）、主要10社の燃料費調整（8月分・9月分）の3観点で整理します。";
const pageUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/2026-08";
const publishedDate = "2026-09-03";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 2026年8月",
    "8月 電気料金 振り返り",
    "電気・ガス料金支援 8月使用分 4.5円 2.3円",
    "JEPX 8月 平均 前年比 59.7%",
    "燃料費調整 2026年8月分 9月分",
    "高圧 電気料金 2026",
    "特別高圧 支援 対象外",
    "JEPX 55.23円 スパイク 8月26日",
    "電力取引報 2026年5月分",
    "西日本 高温 2026年8月",
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
      { url: "/api/og/monthly-review", width: 1200, height: 630, alt: "2026年8月の法人向け電気料金動向" },
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
 * 4区分の確定単価（電力・ガス取引監視等委員会「電力取引報」から算出＝販売額÷販売電力量・全国計・事後訂正あり得る・多くの事業者が検針期間ベースで報告（暦月ベースも可））。
 * カードは最新確定分（2026年5月分・2026-08-17公表）を表示する。
 * 2026年6月分以降は公表待ち。
 */
const AUGUST_PAGE_DATA: MonthlyPageData = {
  year: 2026,
  month: 5,
  categories: [
    { label: "特別高圧", shortLabel: "特高", value: 17.45, prevMonthValue: 17.56, diff: -0.11, prevYearValue: 17.66, prevYearDiff: -0.21 },
    { label: "高圧", shortLabel: "高圧", value: 22.78, prevMonthValue: 21.37, diff: 1.41, prevYearValue: 22.63, prevYearDiff: 0.15 },
    { label: "低圧電灯", shortLabel: "低灯", value: 27.85, prevMonthValue: 25.94, diff: 1.91, prevYearValue: 28.98, prevYearDiff: -1.13 },
    { label: "低圧電力", shortLabel: "低力", value: 34.42, prevMonthValue: 32.12, diff: 2.3, prevYearValue: 34.7, prevYearDiff: -0.28 },
  ],
  trendData: [
    { label: "2025/12", values: [16.87, 20.95, 26.78, 32.4] as [number, number, number, number] },
    { label: "2026/1", values: [16.72, 20.43, 25.98, 27.79] as [number, number, number, number] },
    { label: "2026/2", values: [16.68, 18.39, 22.67, 24.01] as [number, number, number, number] },
    { label: "2026/3", values: [16.58, 18.92, 23.1, 27.37] as [number, number, number, number] },
    { label: "2026/4", values: [17.56, 21.37, 25.94, 32.12] as [number, number, number, number] },
    { label: "2026/5", values: [17.45, 22.78, 27.85, 34.42] as [number, number, number, number] },
  ],
  sameMonthHistory: [
    { year: 2023, values: [19.74, 20.53, 24.28, 23.6] as [number, number, number, number] },
    { year: 2024, values: [17.97, 21.89, 28.73, 28.4] as [number, number, number, number] },
    { year: 2025, values: [17.2, 19.91, 25.95, 25.65] as [number, number, number, number] },
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

// 「使用月」と各社の「料金月ラベル」の対応を読み解くための実務ステップ
const billCheckSteps = [
  {
    step: "① 8月使用分は支援単価が最も厚い月であることを押さえる",
    detail:
      "電気の値引きは使用月ベースで決まり、8月使用分が低圧▲4.5円/kWh・高圧▲2.3円/kWhと3か月で最も厚くなります。7月使用分・9月使用分はいずれも低圧▲3.5円/kWh・高圧▲1.8円/kWhです。8月使用分は多くの契約で9月検針分に反映されるため、9月に届く請求書で単価を確認することになります。",
  },
  {
    step: "② 電力会社の「◯月分」ラベルと使用月を取り違えない",
    detail:
      "各社が公表する「2026年9月分」は料金月（請求月）のラベルで、使用月とは一致しないことがあります。たとえば中部電力ミライズの「2026年9月分電気料金」は2026年8月使用分（ただし高圧のうち契約電力が原則500kW以上は9月使用分）です。この対応関係のため、各社の「9月分」に適用されている高圧の値引きは2.30円/kWh、つまり8月使用分の単価です。",
  },
  {
    step: "③ 値引き行の単価を金額÷使用kWhで逆算する",
    detail:
      "値引きは「電気・ガス料金支援」「特別値引き」など各社で異なる名称の独立した行として記載されるのが一般的です。8月使用分なら低圧▲4.5円/kWh・高圧▲2.3円/kWhが使用電力量に乗じられているかを、値引き金額÷使用kWhで逆算して確かめられます。",
  },
  {
    step: "④ 契約区分が支援対象かを確認する",
    detail:
      "支援の対象は低圧・高圧で、特別高圧は対象外です。特別高圧で受電している事業所の請求書には値引き行が現れません。本社が高圧・基幹工場が特別高圧といった構成では、拠点ごとに効果が分かれます。",
  },
  {
    step: "⑤ 支援対象外のコストが残っていることを確認する",
    detail:
      "再エネ賦課金4.18円/kWh、燃料費調整、市場価格調整、基本料金は支援の対象外で、請求書にそのまま残ります。8月は冷房需要で使用電力量そのものが伸びるため、値引きが厚くても請求総額が増えることは十分に起こり得ます。",
  },
  {
    step: "⑥ 10月使用分以降が未定であることを前提に置く",
    detail:
      "電気・ガス料金支援の10月使用分以降の取り扱いは、本記事公開時点で公表されていません。延長も終了も確認されていないため、値引き行がなくなった場合の請求額を現在の燃調水準で試算しておくと、予算の下振れ余地を早めに把握できます。",
  },
];

// JEPXスポット エリア別月間平均（円/kWh・公式CSV全1,488コマ単純平均）
// mom は端数処理前の値から算出した前月差
const jepxAreaAug = [
  { area: "システムプライス", aug2026: "19.14", jul2026: "17.91", aug2025: "11.98", yoy: "+7.15", yoyPct: "+59.7%", mom: "+1.23" },
  { area: "北海道", aug2026: "14.33", jul2026: "14.32", aug2025: "13.55", yoy: "+0.78", yoyPct: "+5.7%", mom: "+0.01" },
  { area: "東北", aug2026: "15.68", jul2026: "17.98", aug2025: "12.67", yoy: "+3.01", yoyPct: "+23.7%", mom: "▲2.30" },
  { area: "東京", aug2026: "21.24", jul2026: "19.86", aug2025: "13.21", yoy: "+8.04", yoyPct: "+60.9%", mom: "+1.38" },
  { area: "中部", aug2026: "21.61", jul2026: "18.84", aug2025: "12.61", yoy: "+9.01", yoyPct: "+71.5%", mom: "+2.77" },
  { area: "北陸", aug2026: "20.26", jul2026: "17.26", aug2025: "11.41", yoy: "+8.84", yoyPct: "+77.5%", mom: "+3.00" },
  { area: "関西", aug2026: "19.23", jul2026: "17.19", aug2025: "11.41", yoy: "+7.82", yoyPct: "+68.5%", mom: "+2.04" },
  { area: "中国", aug2026: "17.78", jul2026: "16.18", aug2025: "10.44", yoy: "+7.34", yoyPct: "+70.4%", mom: "+1.60" },
  { area: "四国", aug2026: "16.81", jul2026: "13.63", aug2025: "8.70", yoy: "+8.10", yoyPct: "+93.1%", mom: "+3.17" },
  { area: "九州", aug2026: "16.77", jul2026: "15.37", aug2025: "10.38", yoy: "+6.39", yoyPct: "+61.6%", mom: "+1.40" },
];

// 主要電力10社 燃料費調整（円/kWh・税込）。8月分・9月分はいずれも支援の値引き前。
// sepHighWithSupport は「9月分」（料金月）に適用される高圧の支援単価▲2.30円/kWhを反映した値。
const fuelAdjustment2026AugSep = [
  {
    area: "北海道電力",
    basis: "燃調＋市場＋離島の合算",
    augExtra: "▲1.31", augHigh: "▲1.34",
    sepExtra: "0.03", sepHigh: "0.02", sepHighWithSupport: "▲2.28",
    note: "公表単位は「燃料費等調整単価」で市場価格調整は内数（9月分は高圧▲0.12・特高▲0.11）。9月分は8月分比で特高+1.34・高圧+1.36とプラス転換",
  },
  {
    area: "東北電力",
    basis: "燃調本体",
    augExtra: "0.93", augHigh: "0.97",
    sepExtra: "1.32", sepHigh: "1.37", sepHighWithSupport: "▲0.93",
    note: "市場価格調整は別建て。9月分の合計（検針初日）は特高+1.82円/kWh、高圧繰上検針は支援反映後▲0.41円/kWh、分散検針は▲0.71円/kWh",
  },
  {
    area: "東京電力エナジーパートナー",
    basis: "燃調本体",
    augExtra: "1.57", augHigh: "1.60",
    sepExtra: "1.86", sepHigh: "1.90", sepHighWithSupport: "▲0.40",
    note: "2系列制。本号は8月分・9月分とも検針日系列で統一（前号は7月分が始期1日系列）。市場価格調整は朝・昼・晩・夜の別建て4単価",
  },
  {
    area: "中部電力ミライズ",
    basis: "燃調＋HH・卸市場調整",
    augExtra: "3.70", augHigh: "3.74",
    sepExtra: "2.74", sepHigh: "2.78", sepHighWithSupport: "0.48",
    note: "10社で唯一9月分が8月分から低下（高圧▲0.96）。HH・卸市場価格調整を内包した単一単価",
  },
  {
    area: "北陸電力",
    basis: "燃調本体",
    augExtra: "▲6.68", augHigh: "▲6.81",
    sepExtra: "▲6.22", sepHigh: "▲6.34", sepHighWithSupport: "▲8.64",
    note: "9月分の市場価格調整は±0円で確定（8月28日公表）。合計は特高▲6.22円/kWh、高圧は支援反映後▲8.64円/kWh",
  },
  {
    area: "関西電力",
    basis: "燃調本体",
    augExtra: "▲0.69", augHigh: "▲0.70",
    sepExtra: "▲0.49", sepHigh: "▲0.50", sepHighWithSupport: "▲2.80",
    note: "9月分の市場価格調整は500kW未満+0.62円/kWh、500kW以上+1.98円/kWh、特別高圧+1.96円/kWhで確定（別建て）",
  },
  {
    area: "中国電力",
    basis: "合計値",
    augExtra: "▲0.71", augHigh: "▲0.72",
    sepExtra: "▲0.18", sepHigh: "▲0.19", sepHighWithSupport: "▲2.49",
    note: "合計値で公表。9月分の高圧の内訳は燃調▲0.27＋離島0.03＋市場0.05",
  },
  {
    area: "四国電力",
    basis: "燃調本体",
    augExtra: "▲6.26", augHigh: "▲6.42",
    sepExtra: "▲5.66", sepHigh: "▲5.81", sepHighWithSupport: "▲8.11",
    note: "支援反映後▲8.11円/kWhは同社の公表値と一致。マイナス基調を保ちつつ幅は縮小",
  },
  {
    area: "九州電力",
    basis: "燃調本体",
    augExtra: "▲0.63", augHigh: "▲0.65",
    sepExtra: "▲0.45", sepHigh: "▲0.46", sepHighWithSupport: "▲2.76",
    note: "市場価格調整は別建て（9月分は高圧+0.89・特高+0.88）。合計（燃料費等調整単価）は高圧▲1.77円/kWh、特高+0.53円/kWh",
  },
  {
    area: "沖縄電力",
    basis: "燃調＋離島",
    augExtra: "▲10.82", augHigh: "▲11.08",
    sepExtra: "▲9.62", sepHigh: "▲9.86", sepHighWithSupport: "▲12.16",
    note: "支援反映後▲12.16円/kWhは同社の公表値と一致。マイナス幅は10社中で最大",
  },
];

// 参考：10月分（料金月）。高圧の支援単価は▲1.80円/kWh
const fuelAdjustment2026Oct = [
  { area: "北海道電力", extra: "0.62", high: "0.63", withSupport: "▲1.17", status: "確定（8月28日公表）" },
  { area: "東北電力", extra: "1.85", high: "1.92", withSupport: "0.12", status: "燃調本体は確定。特高と高圧繰上検針の市場価格調整・適用単価は9月24日公表予定" },
  { area: "東京電力エナジーパートナー", extra: "公表待ち", high: "公表待ち", withSupport: "—", status: "燃調は始期1日系列が10月29日、始期1日以外が9月29日に公表予定" },
  { area: "中部電力ミライズ", extra: "4.49", high: "4.54", withSupport: "2.74", status: "確定（8月28日公表）" },
  { area: "北陸電力", extra: "▲5.90", high: "▲6.01", withSupport: "▲7.81", status: "燃調は確定。市場価格調整は平均市場価格が確定次第で公表待ち" },
  { area: "関西電力", extra: "▲0.21", high: "▲0.21", withSupport: "▲2.01", status: "燃調は確定。500kW以上と特別高圧の市場価格調整は公表待ち" },
  { area: "中国電力", extra: "0.60", high: "0.61", withSupport: "▲1.19", status: "確定（8月28日公表）" },
  { area: "四国電力", extra: "▲5.33", high: "▲5.47", withSupport: "▲7.27", status: "確定（8月28日公表）" },
  { area: "九州電力", extra: "▲0.20", high: "▲0.21", withSupport: "▲2.01", status: "確定（8月28日公表）" },
  { area: "沖縄電力", extra: "▲8.88", high: "▲9.11", withSupport: "▲10.91", status: "確定（8月28日公表）" },
];

// 8地点の8月平均気温（気象庁「全国気候表（2026年8月）」）と平年差
const temperature8Cities = [
  { city: "札幌", temp: "23.5℃", normal: "22.3℃", anomaly: "+1.2℃", note: "北日本は「高い」階級" },
  { city: "仙台", temp: "24.6℃", normal: "24.4℃", anomaly: "+0.2℃", note: "8地点で平年差が3番目に小さい" },
  { city: "東京", temp: "26.7℃", normal: "26.9℃", anomaly: "▲0.2℃", note: "平年並。月降水量286.0mmで平年比185%" },
  { city: "名古屋", temp: "29.3℃", normal: "28.2℃", anomaly: "+1.1℃", note: "東海も高温側だが西日本ほどではない" },
  { city: "大阪", temp: "29.9℃", normal: "29.0℃", anomaly: "+0.9℃", note: "8地点で最も高い月平均気温" },
  { city: "広島", temp: "30.5℃", normal: "28.5℃", anomaly: "+2.0℃", note: "福岡と並び月平均30.5℃" },
  { city: "福岡", temp: "30.5℃", normal: "28.4℃", anomaly: "+2.1℃", note: "8地点で平年差が最大" },
  { city: "那覇", temp: "28.9℃", normal: "29.0℃", anomaly: "▲0.1℃", note: "沖縄・奄美は「平年並」階級" },
];

// 東京（気象庁観測値）の暑熱指標
const tokyoHeatStats = [
  { label: "猛暑日（最高35℃以上）", value: "3日", note: "8月1日36.5℃・8月2日35.3℃・8月25日35.0℃" },
  { label: "真夏日（最高30℃以上）", value: "24日", note: "猛暑日3日を含む" },
  { label: "熱帯夜（最低25℃以上）", value: "6日", note: "前号（7月）の10日から減少" },
  { label: "月間最高気温", value: "36.5℃", note: "8月1日に観測" },
  { label: "月降水量", value: "286.0mm", note: "平年比185%。東京は多雨側だった" },
];

// 燃料市況の指標（7月貿易統計＝直近の実績。米ドル単価は円建て公表値からの派生値）
const fuelMarketIndicators = [
  { item: "原油（7月貿易統計・確速）", value: "114.3 米ドル/バレル", meaning: "前月比▲2.4%。反映されるのは秋以降の燃調" },
  { item: "LNG（7月貿易統計・確速）", value: "675.5 米ドル/トン", meaning: "前月比+17.1%と4指標で最も大きく上昇" },
  { item: "一般炭（7月貿易統計・確速）", value: "149.6 米ドル/トン", meaning: "前月比+2.9%。石炭火力の燃料費に影響" },
  { item: "為替（7月貿易統計）", value: "161.83 円/米ドル", meaning: "前月比+1.3%。円建て燃料費を押し上げる方向" },
];

const septemberCheckpoints = [
  {
    heading: "①支援単価が9月使用分で薄くなることを月別に織り込む（低圧▲4.5→▲3.5・高圧▲2.3→▲1.8）",
    content:
      "電気・ガス料金支援は8月使用分が最も厚く、低圧▲4.5円/kWh・高圧▲2.3円/kWhでした。9月使用分は低圧▲3.5円/kWh・高圧▲1.8円/kWhに戻ります。使用電力量が同じでも、この単価差の分だけ請求は増える計算になります。さらに10月使用分以降の取り扱いは本記事公開時点で公表されていません。契約区分別の拠点一覧に、月別の値引き単価を並べた表を用意しておくと、9月以降の資金繰り見通しの精度が上がります。",
  },
  {
    heading: "②夕方のスパイク時間帯を8月の実測で確認する（8月26日17時00分〜17時30分に6エリアで55.23円/kWh）",
    content:
      "2026年8月のJEPXは、システムプライスの月間平均が19.14円/kWhである一方、8月26日17時00分〜17時30分には中部・北陸・関西・中国・四国・九州の6エリアが55.23円/kWhで並びました。システムプライスの月間最高も同じ8月26日の16時30分〜17時00分に50.01円/kWhをつけています。市場連動型プランでは平均値ではなくこの時間帯の単価が請求に効きます。夕方帯に負荷を寄せる運用になっていないかを、8月の30分値で確認してください。",
  },
  {
    heading: "③燃調の上昇局面が続く前提で、9月分・10月分の確定値を追う",
    content:
      "9月分の燃料費調整（値引き前）は、中部電力ミライズを除く9社が8月分から上昇方向に動きました。10月分も8社で公表済みで、北海道電力は9月分0.02円/kWhから10月分0.63円/kWhへ、中国電力は▲0.19円/kWhから0.61円/kWhへとプラス側に動いています。東京電力エナジーパートナーの10月分など未公表の項目もあるため、確定値が出た時点で自社の契約先について値引き前ベースで確認してください。なお本記事は今後の単価水準を予測するものではありません。",
  },
];

const industryImpact = [
  { industry: "製造業（24時間操業）", impact: "高", reason: "ベースロードが大きく、JEPX前年比+59.7%の影響を全量で受ける。高圧なら8月使用分の支援▲2.3円/kWhが効くが、特別高圧受電の拠点は対象外。9月使用分で▲1.8円/kWhに戻る点も織り込みたい" },
  { industry: "商業施設・スーパー", impact: "高", reason: "冷蔵・冷凍の常時負荷に冷房需要が加わる月。低圧店舗は▲4.5円/kWh、高圧施設は▲2.3円/kWh（いずれも8月使用分）と支援の厚みが異なるため、店舗種別ごとの効果差を把握しておきたい" },
  { industry: "病院・介護施設", impact: "高", reason: "24時間の空調負荷が続く。高圧が中心のため支援は効くが、デマンド更新が起きると基本料金が翌月以降1年間上がる影響が大きい。東京の熱帯夜は6日で前月の10日から減っており、地域差の確認が要る" },
  { industry: "データセンター", impact: "高", reason: "外気温上昇で冷却動力が増え、負荷率も高い。特別高圧受電の施設は支援の対象外で、JEPXと市場価格調整の上昇をそのまま受ける構造。中部・北陸エリアは前月差が大きく、立地による差が出た月" },
  { industry: "オフィスビル", impact: "中", reason: "日中の冷房負荷が中心。高圧なら8月使用分▲2.3円/kWhが効く一方、夕方の残業時間帯がスパイク時間と重なりやすい。テナント課金の設計と実費の乖離も確認どころ" },
  { industry: "ホテル・宿泊", impact: "中", reason: "客室と共用部の空調が24時間稼働する。西日本エリアはJEPXの水準が高く、立地エリアによって市場連動プランの影響差が出た月" },
  { industry: "物流・冷蔵倉庫", impact: "高", reason: "外気温上昇で冷凍機の負荷が直接増える。庫内温度維持のための電力量が伸びやすく、支援の値引きを上回るコスト増になり得る。ピークカットと庫内運用の両面で点検したい" },
  { industry: "飲食チェーン", impact: "中", reason: "低圧中心で1拠点あたりの影響は限定的だが、8月使用分の支援は低圧▲4.5円/kWhと最も厚い。多店舗合算では値引き効果もコスト増も無視できず、9月使用分▲3.5円/kWhへの縮小分も月別に把握したい" },
];

const reviewChecklist = [
  "8月使用分の請求書（多くは9月検針分）で、電気・ガス料金支援の値引き行が計上されているか、単価が低圧▲4.5円/kWh・高圧▲2.3円/kWhになっているかを確認する",
  "特別高圧で受電している拠点は支援の対象外である点を踏まえ、拠点別に「支援が効く／効かない」を区分して予算に反映する",
  "9月使用分は低圧▲3.5円/kWh・高圧▲1.8円/kWhに戻る設計であることを、月別の資金繰り表に織り込む",
  "電力会社の「9月分」（料金月）に適用されている高圧の値引きが2.30円/kWhであることを踏まえ、各社の公表単価と自社の請求書の使用月の対応を確認する",
  "9月分の燃料費調整単価が8月分からどの方向に動いたか（中部電力ミライズを除く9社で上昇方向）を、自社の契約先について値引き前ベースで確認する",
  "市場連動型プランの法人は、月間平均19.14円/kWhではなく夕方のスパイク（8月26日17時00分〜17時30分に6エリアで55.23円/kWh）が請求に効く点を踏まえ、時間帯別の使用実績を確認する",
  "冷房需要によるデマンド（契約電力）更新が起きていないかを8月の実績で確認し、更新されていた場合は翌月以降1年間の基本料金増を予算に反映する",
  "4区分の実績単価は電力取引報の2026年5月分までが確定である点を踏まえ、6月分以降が公表された時点で単価前提を更新する",
];

const faqItems = [
  {
    question: "2026年8月のJEPXスポット価格はどのくらい上がったのですか？",
    answer:
      "2026年8月のJEPXシステムプライス月間平均は19.14円/kWhで、前年同月（11.98円/kWh）比+7.15円、+59.7%の上昇でした。前月（17.91円/kWh）比でも+1.23円です。月間最高はシステムプライスで50.01円/kWh（8月26日16時30分〜17時00分）、エリア別では中部・北陸・関西・中国・四国・九州の6エリアが8月26日17時00分〜17時30分に55.23円/kWhで並びました。月間最低はシステムプライスが8.00円/kWh（8月14日10時00分〜10時30分）、エリア別は北海道の0.01円/kWh（8月2日8時30分〜9時00分）です。約定総量は385.80億kWh（前年同月268.19億kWh・+43.9%）でした。数値はJEPX公表のスポット取引結果CSVから全1,488コマの単純平均等で算出しています。",
  },
  {
    question: "8月に前月から価格が下がったエリアはありますか？",
    answer:
      "東北エリアだけが前月から低下しました。2026年7月の17.98円/kWhに対し8月は15.68円/kWhで、前月差は▲2.30円/kWhです。残る9エリアは上昇し、上げ幅が大きい順に四国+3.17円/kWh、北陸+3.00円/kWh、中部+2.77円/kWh、関西+2.04円/kWh、九州+1.40円/kWh、中国+1.60円/kWh、東京+1.38円/kWh、北海道+0.01円/kWhとなっています。前年同月比で見ると全10系列が上昇しており、上昇率が最も大きいのは四国の+93.1%、次いで北陸+77.5%、中部+71.5%です。卸価格は需要・燃料価格・電源の稼働計画・連系線の混雑など複数の要因で決まるため、単一の要因で説明できるものではありません。",
  },
  {
    question: "電気・ガス料金支援は8月使用分でいくら値引きされますか？特別高圧も対象ですか？",
    answer:
      "使用月ベースで、電気は8月使用分が低圧▲4.5円/kWh・高圧▲2.3円/kWhと3か月で最も厚くなります。7月使用分と9月使用分はいずれも低圧▲3.5円/kWh・高圧▲1.8円/kWhです。都市ガスは7月・8月・9月使用分の順に▲14.0・▲18.0・▲14.0円/m3です。★特別高圧は対象外で、特別高圧で受電している事業所の請求書には値引き行が現れません。8月使用分は多くの契約で9月検針分に反映されます。適用条件や請求書上の表記は各社で異なるため、必ず契約先の公式情報でご確認ください。",
  },
  {
    question: "電力会社が公表する「9月分」の高圧の値引きは1.8円ではないのですか？",
    answer:
      "各社が公表する「2026年9月分」は料金月（請求月）のラベルで、そこに適用されている高圧の値引きは2.30円/kWhです。1.8円/kWhは9月「使用分」の単価であり、両者は指している期間が異なります。たとえば東京電力エナジーパートナーは2026年8月28日のプレスリリースで「2026年8月分および10月分は低圧で3.50円/kWh、高圧で1.80円/kWh、9月分は低圧で4.50円/kWh、高圧で2.30円/kWh」と公表しています。本記事の10社表の「9月分 高圧（支援反映後）」欄は、この2.30円/kWhを値引き前の単価に加えた値です。",
  },
  {
    question: "2026年9月分の燃料費調整単価はどう動きましたか？",
    answer:
      "支援の値引き前で比べると、9月分の燃料費調整は中部電力ミライズ（高圧3.74円/kWhから2.78円/kWhへ▲0.96円/kWh）を除く9社が上昇方向に動きました。北海道電力は8月分▲1.34円/kWhから9月分0.02円/kWhへとプラスに転じ、東北電力は0.97円/kWhから1.37円/kWh、東京電力エナジーパートナーは1.60円/kWhから1.90円/kWhへ上昇しています。北陸電力▲6.34円/kWh、四国電力▲5.81円/kWh、沖縄電力▲9.86円/kWhのようにマイナス基調を保つ会社でも、マイナス幅は縮小しました。高圧は「9月分」に支援▲2.30円/kWhが加わるため、請求ベースでは低下する契約もあります。本記事の表は値引き前と支援反映後を分けて掲載しています。",
  },
  {
    question: "2026年8月の4区分（低圧・高圧・特別高圧）の実績単価はいくらでしたか？",
    answer:
      "2026年8月分の4区分実績単価は、本記事公開時点では公表待ちです。出典としている電力・ガス取引監視等委員会「電力取引報」は2026年5月分（2026年8月17日公表）までが公表済みで、6月分以降は公表待ちです。このため本ページのカードは最新の確定分（2026年5月分）を表示し、8月の動向は燃料費調整・JEPX・気象・支援策から定性的に整理しています。参考として、過去の8月分は2023年8月が特別高圧19.74円/kWh・高圧20.53円/kWh・低圧電灯24.28円/kWh・低圧電力23.60円/kWh、2025年8月が同17.20・19.91・25.95・25.65円/kWhでした。確定値が公表され次第、順次更新します。",
  },
  {
    question: "2026年8月は全国的に猛暑だったのですか？",
    answer:
      "いいえ。気象庁「2026年8月の天候」の階級では、西日本が「かなり高い」、北日本が「高い」、東日本と沖縄・奄美は「平年並」でした。8地点の月平均気温の平年差でも、福岡+2.1℃・広島+2.0℃・札幌+1.2℃・名古屋+1.1℃と高温側の一方、東京は▲0.2℃、那覇は▲0.1℃、仙台は+0.2℃と平年並です。東京は猛暑日3日（8月1日36.5℃・8月2日35.3℃・8月25日35.0℃）・熱帯夜6日で、月降水量は286.0mm（平年比185%）と多雨側でした。したがって「全国一律の猛暑」という整理はあたりません。なお卸価格の上昇と気温の関係は地域や時間帯によって異なり、本記事では因果関係を断定していません。",
  },
  {
    question: "2026年8月に電力需給ひっ迫は起きたのですか？",
    answer:
      "2026年8月中の電力広域的運営推進機関（OCCTO）による自家発電設備の焚き増し指示・依頼は、OCCTOの公表一覧では確認されていません。需給ひっ迫注意報・警報の発令も確認されていません。ただし、OCCTOは2025年10月以降、エリア予備率が3%を下回る場合の指示の公表箇所をログインが必要な系統情報サービスに移しているため、公表一覧に掲載がないことは「一切の指示がなかった」ことの証明にはなりません。本記事では確認できた範囲の事実として記載しています。",
  },
];

const sourcesItems = [
  {
    name: "電力・ガス取引監視等委員会「電力取引報」",
    url: "https://www.egc.meti.go.jp/info/business/report/results.html",
    description: "4区分の確定単価（販売額÷販売電力量・全国計、事後訂正あり得る。多くの事業者が検針期間ベースで報告・暦月ベースも可）。2026年5月分まで公表済み（2026年8月17日公表）、6月分以降は公表待ち",
  },
  {
    name: "JEPX 一般社団法人 日本卸電力取引所",
    url: "https://www.jepx.jp/electricpower/market-data/spot/",
    description: "スポット取引結果（エリア別月間平均・最高値・最低値・約定総量は公表CSVの全1,488コマから単純平均等で算出。沖縄は取引対象外）",
  },
  {
    name: "経済産業省 2026年6月12日 プレスリリース",
    url: "https://www.meti.go.jp/press/2026/06/20260612003/20260612003.html",
    description: "電気・ガス料金支援の7〜9月使用分の値引き単価（低圧・高圧が対象、特別高圧は対象外）",
  },
  {
    name: "経済産業省 資源エネルギー庁「エネルギー価格の支援について」",
    url: "https://www.enecho.meti.go.jp/category/gekihen_lp/",
    description: "電気・ガス料金支援の対象・単価・適用期間。10月使用分以降の取り扱いは本記事公開時点で公表なし",
  },
  {
    name: "気象庁「2026年8月の天候」・全国気候表（2026年8月）",
    url: "https://www.data.jma.go.jp/cpd/longfcst/monthly/202608/202608m.html",
    description: "2026年9月1日掲載。8地点の月平均気温・平年値・平年差（平年値は1991〜2020年）",
  },
  {
    name: "気象庁 過去の気象データ検索（東京・2026年8月の日ごとの値）",
    url: "https://www.data.jma.go.jp/stats/etrn/view/daily_s1.php?prec_no=44&block_no=47662&year=2026&month=8",
    description: "東京の猛暑日・真夏日・熱帯夜の日数、月間最高気温、月降水量の集計元",
  },
  {
    name: "電力広域的運営推進機関（OCCTO）",
    url: "https://www.occto.or.jp/institution/shiji/",
    description: "需給状況改善のための指示・依頼の公表一覧。2026年8月分の掲載は確認されていない",
  },
  {
    name: "財務省 貿易統計（2026年7月分・確速）",
    url: "https://www.customs.go.jp/toukei/shinbun/trade-st/2026/2026075.pdf",
    description: "2026年8月28日公表。原油・LNG・一般炭の輸入金額と数量、および為替（161.83円/米ドル）",
  },
  {
    name: "主要電力10社 2026年6月26日・7月30日・8月28日 各社プレスリリース",
    description: "2026年8月分・9月分・10月分の燃料費調整単価および市場価格調整（各社の燃料費調整ページを参照）",
  },
];

export default function BusinessElectricityRetrospective202608Page() {
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
          { name: "2026年8月" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年8月</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年8月】法人の電気料金はどう動いた？</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXは前年比+59.7%・電気ガス料金支援は最も厚い8月使用分・高温は西日本中心で東京は平年並
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年8月使用分の法人向け電気料金は、卸価格の水準が一段上がった月です。JEPXスポットのシステムプライス月間平均は19.14円/kWhとなり、前年同月（11.98円/kWh）比+7.15円、+59.7%となりました。8月26日の夕方には中部・北陸・関西・中国・四国・九州の6エリアが55.23円/kWhで並んでいます。一方で電気・ガス料金支援は、8月使用分が低圧▲4.5円/kWh・高圧▲2.3円/kWhと3か月で最も厚い単価でした。ただし特別高圧は対象外です。燃料費調整は9月分（料金月）で中部電力ミライズを除く9社が上昇方向に動いています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            気象については、気象庁「2026年8月の天候」の階級で西日本が「かなり高い」、北日本が「高い」、東日本と沖縄・奄美が「平年並」でした。東京の月平均気温は26.7℃で平年差▲0.2℃、月降水量は286.0mm（平年比185%）と多雨側です。全国一律の猛暑という整理はあたらないため、本記事では地域差を分けて記述し、気温と卸価格の因果関係は断定していません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧・高圧・特別高圧の4区分の8月実績単価は、出典としている電力・ガス取引監視等委員会「電力取引報」が2026年5月分までしか公表していないため、本記事公開時点では確定していません。そこで本記事では、確定値（2026年5月分まで）と、8月の動向に関する定性整理を明確に分けて解説します。数値の断定は確定値に限り、公表待ちの項目は「公表待ち」と明記します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事は、電力・ガス取引監視等委員会「電力取引報」、JEPX、経済産業省・資源エネルギー庁、気象庁、電力広域的運営推進機関（OCCTO）、財務省貿易統計、主要電力10社の公表情報をもとに整理しています。本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。また、今後の価格水準を予測するものでもありません。公開日は2026年9月3日です。
          </p>
        </header>

        <TableOfContents />

        <MonthlyDataCards data={AUGUST_PAGE_DATA} />
        <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-6 text-slate-500">
          ※上記カードは電力・ガス取引監視等委員会「電力取引報」の最新確定分（2026年5月分・2026年8月17日公表）です（販売額÷販売電力量・全国計、事後訂正あり得る。多くの事業者が検針期間ベースで報告・暦月ベースも可）。
          2026年6月分以降は公表待ちです。確定値が公表され次第、順次更新します。
        </p>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年8月の結論3点 — JEPX前年比+59.7%・支援は最大単価・高温は西日本中心</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                JEPXスポットのシステムプライス月間平均は19.14円/kWhとなり、前年同月（11.98円/kWh）比+7.15円、+59.7%の上昇でした。前月比でも+1.23円です。8月26日17時00分〜17時30分には中部・北陸・関西・中国・四国・九州の6エリアが55.23円/kWhで並び、システムプライスの月間最高は同じ8月26日16時30分〜17時00分の50.01円/kWhでした。約定総量も385.80億kWh（前年同月268.19億kWh）と+43.9%増加しています。
              </li>
              <li>
                電気・ガス料金支援は、8月使用分が低圧▲4.5円/kWh・高圧▲2.3円/kWhと7〜9月の3か月で最も厚い単価でした。9月使用分は低圧▲3.5円/kWh・高圧▲1.8円/kWhに戻ります。★特別高圧は対象外です。10月使用分以降の取り扱いは本記事公開時点で公表されていません。
              </li>
              <li>
                高温は西日本中心でした。気象庁の階級は西日本「かなり高い」・北日本「高い」・東日本と沖縄・奄美「平年並」で、8地点でも福岡+2.1℃・広島+2.0℃に対して東京▲0.2℃・那覇▲0.1℃です。燃料費調整は9月分（料金月）で中部電力ミライズを除く9社が上昇方向に動きました。再エネ賦課金は4.18円/kWh（2026年度確定）で据え置きです。
              </li>
            </ol>
          </section>

          <MonthlyTrendChart data={AUGUST_PAGE_DATA} />
          <p className="mt-2 rounded-md bg-slate-50 px-3 py-2 text-xs leading-6 text-slate-500">
            ※上記グラフは電力取引報の確定値が公表済みの直近6か月（2025年12月〜2026年5月分）です。2026年6月分以降は公表待ちのため含みません。
          </p>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">参考：8月のkWh単価 年別比較（2023〜2025年は確定・2026年は公表待ち）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              同じ8月で過去の水準と比べると、現在の料金がどのあたりに位置するかを把握しやすくなります。2026年8月分は電力取引報の公表待ちのため、確定値が出るまでは2023〜2025年の8月分を参照します。2023年8月から2025年8月にかけて、特別高圧は19.74円/kWhから17.20円/kWhへ、高圧は20.53円/kWhから19.91円/kWhへ低下する一方、低圧電力は23.60円/kWhから25.65円/kWhへ上昇しており、区分によって動きの方向が異なる点が読み取れます。
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-left font-semibold text-slate-900">契約区分</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2023年8月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2024年8月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">2025年8月</th>
                    <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-sky-900">2026年8月</th>
                  </tr>
                </thead>
                <tbody>
                  {YEAR_COMPARISON_CATEGORIES.map((label, catIdx) => (
                    <tr key={label} className="odd:bg-white even:bg-slate-50/60">
                      <td className="border-b border-slate-200 px-3 py-2.5 font-medium text-slate-800">{label}</td>
                      {AUGUST_PAGE_DATA.sameMonthHistory.map((entry) => (
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
              ※単位は円/kWh。消費税および再生可能エネルギー発電促進賦課金を含まない参考値です。数値は電力・ガス取引監視等委員会「電力取引報」から算出しています。2026年8月分は公表待ちのため、この表では断定的な数値を示していません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">JEPXスポット8月平均19.14円/kWh — 前年同月比+59.7%と8月26日夕方の55.23円</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年8月のJEPXシステムプライス月間平均は19.14円/kWhで、前年同月（11.98円/kWh）比+7.15円、+59.7%の上昇でした。前月（17.91円/kWh）比でも+1.23円です。月間の最高値はシステムプライスで50.01円/kWh（8月26日16時30分〜17時00分）、最低値は8.00円/kWh（8月14日10時00分〜10時30分）でした。約定総量は385.80億kWh（前年同月268.19億kWh）で+43.9%と大きく増加しています。数値はJEPX公表のスポット取引結果CSVから全1,488コマの単純平均等で算出しています。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">エリア</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/8 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/7 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2025/8 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前年同月差</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前年同月比</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前月差</th>
                  </tr>
                </thead>
                <tbody>
                  {jepxAreaAug.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.aug2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jul2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.aug2025}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-rose-700">{row.yoy}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-rose-700">{row.yoyPct}</td>
                      <td className={`border-b border-slate-200 px-3 py-2 text-right tabular-nums ${row.mom.startsWith("▲") ? "text-emerald-700" : "text-rose-700"}`}>{row.mom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※前年同月差・前年同月比・前月差はいずれも端数処理前の値から算出しているため、本表の掲載値どうしの差と0.01円/kWh程度ずれる行があります（四国の前月差など）。沖縄はJEPXの取引対象外のため表に含まれません。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">月間平均より、夕方のスパイクが請求に効く</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを採用する法人にとって重要なのは、月間平均ではなくコマ単位の単価です。2026年8月は、8月26日17時00分〜17時30分に中部・北陸・関西・中国・四国・九州の6エリアが55.23円/kWhで並びました。システムプライスの月間最高50.01円/kWhは、月間最低8.00円/kWhの約6倍にあたります。エリア別の最低値としては、8月2日8時30分〜9時00分に北海道が0.01円/kWhを記録しており、同じ月の中で単価の振れ幅が非常に大きい状態です。日没に向かって太陽光の出力が落ちる一方で冷房需要が夕方まで残る時間帯に、価格が集中的に立ち上がる構造は7月と共通しています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              エリア別に前月差を見ると、四国+3.17円/kWh・北陸+3.00円/kWh・中部+2.77円/kWh・関西+2.04円/kWhと中西日本の上昇が大きく、東京+1.38円/kWh・北海道+0.01円/kWhが続きます。一方で東北だけは▲2.30円/kWhと低下しました。前年同月比では10系列すべてが上昇しており、上昇率は四国+93.1%・北陸+77.5%・中部+71.5%・中国+70.4%の順で大きく、北海道は+5.7%と最も小幅です。ただし卸価格は需要・燃料価格・電源の稼働計画・連系線の混雑など複数の要因で決まるため、単一の要因で説明できるものではありません。{" "}
              <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXとは</Link>
              、{" "}
              <Link href="/jepx-spot-price-dashboard" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット価格ダッシュボード</Link>
              、{" "}
              <Link href="/jepx-spike-electricity-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスパイクの電気代インパクト</Link>
              、{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額とは</Link>
              も参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気・ガス料金支援は8月使用分が最大単価 — 低圧▲4.5円・高圧▲2.3円の読み方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気・ガス料金支援は7月使用分から9月使用分までを対象とし、その中で<strong className="font-semibold text-slate-900">8月使用分の値引き単価が最も厚く</strong>設定されています。電気は低圧▲4.5円/kWh・高圧▲2.3円/kWhで、7月使用分・9月使用分の低圧▲3.5円/kWh・高圧▲1.8円/kWhを上回ります。都市ガスも8月使用分が▲18.0円/m3と厚くなっています。★特別高圧は対象外です。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">対象</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">7月使用分</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-sky-900">8月使用分</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">9月使用分</th>
                  </tr>
                </thead>
                <tbody>
                  {supportUnitByUsageMonth.map((row) => (
                    <tr key={row.item} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.item}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.jul}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums font-semibold text-sky-900">{row.aug}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.sep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※値引き単価は使用月ベースです。7月使用分は8月検針分、8月使用分は9月検針分、9月使用分は10月検針分に対応します。10月使用分以降の取り扱いは本記事公開時点で公表されていません。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">請求書での確認 実務6ステップ</h3>
            <div className="mt-3 space-y-4">
              {billCheckSteps.map((item) => (
                <div key={item.step} className="rounded-lg border border-slate-200 bg-slate-50/60 p-4">
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">{item.step}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              請求書の各項目の意味は{" "}
              <Link href="/how-to-read-electricity-bill" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金請求書の読み方</Link>
              、支援の対象外である賦課金は{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              で整理しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">気象と電力需要 — 高温は西日本中心・東京は平年並で多雨</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              気象庁「2026年8月の天候」（2026年9月1日掲載）の階級では、西日本が「かなり高い」、北日本が「高い」、東日本と沖縄・奄美が「平年並」でした。8地点の月平均気温と平年差を見ると、福岡+2.1℃・広島+2.0℃と西日本で平年差が大きい一方、東京は▲0.2℃、那覇は▲0.1℃、仙台は+0.2℃と平年並です。<strong className="font-semibold text-slate-900">全国一律の猛暑という整理はあたりません。</strong>
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">地点</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">月平均気温</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">平年値</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">平年差</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {temperature8Cities.map((row) => (
                    <tr key={row.city} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.city}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.temp}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-slate-600">{row.normal}</td>
                      <td className={`border-b border-slate-200 px-3 py-2 text-right tabular-nums ${row.anomaly.startsWith("▲") ? "text-emerald-700" : "text-rose-700"}`}>{row.anomaly}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※平年値は1991〜2020年の値です。平年差は月平均気温から平年値を引いた値です。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">東京の暑熱指標 — 猛暑日3日・熱帯夜6日</h3>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">指標</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026年8月</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">補足</th>
                  </tr>
                </thead>
                <tbody>
                  {tokyoHeatStats.map((row) => (
                    <tr key={row.label} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.label}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums font-semibold">{row.value}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">8月の需給 — 焚き増し依頼・ひっ迫注意報は確認されていない</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2026年8月中の電力広域的運営推進機関（OCCTO）による自家発電設備の焚き増し指示・依頼は、OCCTOの公表一覧では確認されていません。需給ひっ迫注意報・警報の発令も確認されていません。ただしOCCTOは2025年10月以降、エリア予備率が3%を下回る場合の指示の公表箇所をログインが必要な系統情報サービスに移しているため、公表一覧に掲載がないことは「一切の指示がなかった」ことの証明にはなりません。本記事では確認できた範囲の事実として記載しています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              なお、東京エリアのJEPX平均は前月から+1.38円/kWh上昇していますが、東京の月平均気温は平年並でした。卸価格は需要だけでなく燃料価格・電源の稼働計画・連系線の混雑など複数の要因で決まるため、気温の高低だけで説明できるものではありません。夏季の需要対策の考え方は{" "}
              <Link href="/extreme-heat-electricity-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">猛暑と電気料金リスク</Link>
              、{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">夏季のデマンドレスポンス戦略</Link>
              が参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向（2026年8月）— 支援▲4.5円が最も厚く効いた区分</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧（電灯・電力）は、小規模事業所・店舗・サービス拠点で広く使われる契約区分です。2026年8月分の低圧の実績単価は電力取引報の公表待ちのため、ここでは断定を避け、確定値・燃料費調整・支援策から動向を定性的に整理します。参考として、電力取引報の最新確定分である2026年5月分は、低圧電灯27.85円/kWh・低圧電力34.42円/kWhでした（消費税・賦課金を含まない参考値）。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              8月の低圧で最も大きい要素は、電気・ガス料金支援の値引き単価が▲4.5円/kWh（8月使用分）と3か月で最も厚くなったことです。ただし9月使用分は▲3.5円/kWhに戻ります。一方で冷房需要により使用電力量そのものが伸びるため、単価が下がっても請求総額は増えるという組み合わせが起こり得ます。「単価」と「使用量」を分けて確認することが、8月使用分の請求（多くは9月検針分）の理解には欠かせません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>コンビニ・物販店・ドラッグストアなどの小売業（冷蔵ケースと空調が同時にピーク）</li>
              <li>飲食店・カフェ・ベーカリーなどの店舗業態（厨房排熱で空調負荷が上乗せ）</li>
              <li>クリニック・サロン・整骨院などのサービス事業（営業時間帯に負荷が集中）</li>
              <li>小規模オフィス・営業所・学習塾などの拠点（夕方以降の負荷が長い）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              多店舗展開の企業では、1拠点あたりの差は小さくても合算では大きな金額になります。低圧は支援の値引きが最も厚い一方、使用量増の影響も受けやすい区分です。{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">削減見直しポイント</Link>
              、{" "}
              <Link href="/how-to-read-electricity-bills-for-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">見直しのための請求書の読み方</Link>
              を参考に、店舗単位ではなく合算での把握を進めることが望ましいです。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向（2026年8月）— 支援▲2.3円と燃調上昇の綱引き</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧は、工場・商業施設・病院・学校・物流施設・オフィスビルで広く使われる主力契約区分です。2026年8月分の高圧の実績単価は電力取引報の公表待ちのため、ここでは動向を定性的に整理します。参考として、最新確定分の2026年5月分は高圧22.78円/kWhでした。8月の高圧は、支援の値引き（▲2.3円/kWh・8月使用分）と、燃料費調整の上昇という2つの力が反対方向に働いた月です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整（値引き前）を見ると、9月分（料金月）は8月分から北海道電力+1.36円/kWh、東北電力+0.40円/kWh、東京電力エナジーパートナー+0.30円/kWhなど、中部電力ミライズを除く9社が上昇方向に動いています。ここに「9月分」の高圧の支援▲2.30円/kWhが加わることで、請求ベースでは低下する契約と、なお上昇する契約に分かれます。たとえば東京電力エナジーパートナーの9月分は値引き前1.90円/kWhに対し支援反映後▲0.40円/kWh、中部電力ミライズは値引き前2.78円/kWhに対し支援反映後0.48円/kWhとなります。同じ「支援」でも、燃調の水準しだいで見え方が大きく変わる点は7月号と共通です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>中規模工場・加工場・食品工場（連続稼働で冷房負荷の影響を全量で受ける）</li>
              <li>スーパー・ショッピング施設・量販店（冷蔵と冷房が同時にピーク）</li>
              <li>病院・介護施設・学校法人（24時間の空調負荷が続く）</li>
              <li>倉庫・物流拠点・配送センター・冷蔵倉庫（外気温上昇が冷凍機負荷に直結）</li>
              <li>延床面積の大きいオフィスビル（日中の冷房負荷が集中）</li>
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
            <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向（2026年8月）— 支援対象外でJEPXと市場調整の上昇を直に受ける</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は、大規模工場・データセンター・大型商業施設・自治体の基幹施設・大規模病院など、非常に大きな電力需要を持つ事業者が中心です。2026年8月分の特別高圧の実績単価は電力取引報の公表待ちのため、ここでは動向を定性的に整理します。参考として、最新確定分の2026年5月分は特別高圧17.45円/kWhでした。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              8月の特別高圧で決定的に重要なのは、<strong className="font-semibold text-slate-900">電気・ガス料金支援の対象外である</strong>という点です。低圧▲4.5円/kWh・高圧▲2.3円/kWh（8月使用分）という3か月で最も厚い値引きが適用された月に、特別高圧の請求書にはこの行が現れません。同時に、燃料費調整は9月分で上昇方向に動いています。北海道電力の特高は8月分▲1.31円/kWhから9月分0.03円/kWhへ、東北電力は0.93円/kWhから1.32円/kWhへ上昇しました。市場価格調整についても、関西電力の9月分は特別高圧+1.96円/kWh、九州電力は+0.88円/kWh、東北電力は+0.47円/kWhと確定しています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              つまり特別高圧は、支援による下押しがない状態で、JEPX前年比+59.7%の局面と燃調の上昇局面を同時に受ける構造にあります。市場連動比率の点検と、契約更改時期の前倒し確認の優先度が相対的に高い区分です。
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
            heading="卸価格が一段上がった局面の影響額を試算する"
            description="JEPXは前年比+59.7%、夕方には55円台のスパイクも発生しました。支援の値引きを織り込んだうえで、自社エリア・自社契約の影響額をシミュレーターで試算しておきましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年8月分・9月分 主要電力10社の燃料費調整単価（値引き前／支援反映後）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              主要電力10社の2026年8月分・9月分の燃料費調整単価を、特別高圧・高圧について整理しました。数値はすべて税込で、<strong className="font-semibold text-slate-900">8月分・9月分の各欄は電気・ガス料金支援の値引き前</strong>です。前月比を会社間で比較するときは、この値引き前ベースで揃える必要があります。そのうえで、高圧については支援を反映した参考値を別欄に併記しました。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">電力会社</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">基準</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">8月分 特高</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">8月分 高圧</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">9月分 特高<br />（値引き前）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">9月分 高圧<br />（値引き前）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-sky-900">9月分 高圧<br />（支援反映後）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelAdjustment2026AugSep.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.basis}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.augExtra}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.augHigh}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.sepExtra}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.sepHigh}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums font-semibold text-sky-900">{row.sepHighWithSupport}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※単位は円/kWh・税込。「9月分 高圧（支援反映後）」は、各社の「9月分」（料金月）に適用される高圧の支援単価▲2.30円/kWhを値引き前の単価に加えた値です。北海道電力▲2.28円/kWh、東北電力▲0.93円/kWh、四国電力▲8.11円/kWh、沖縄電力▲12.16円/kWhなど、各社が公表している値引き後の単価と一致します。特別高圧は支援の対象外のため、特高欄には支援を反映していません。実際の適用は契約先・検針期間により異なります。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">9月分は上昇方向 — 中部電力ミライズを除く9社</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              値引き前ベースで8月分と9月分を比べると、高圧の上昇幅が大きい順に北海道電力（+1.36円/kWh）、沖縄電力（同+1.22円/kWh）、四国電力（同+0.61円/kWh）、中国電力（同+0.53円/kWh）、北陸電力（同+0.47円/kWh）、東北電力（同+0.40円/kWh）、東京電力エナジーパートナー（同+0.30円/kWh）、関西電力（同+0.20円/kWh）、九州電力（同+0.19円/kWh）となりました。マイナス基調を保っている北陸電力・四国電力・沖縄電力などでも、マイナス幅は縮小しています。10社で唯一低下したのは中部電力ミライズで、高圧が3.74円/kWhから2.78円/kWhへ▲0.96円/kWhとなりました。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              なお前号（2026年7月号）では東京電力エナジーパートナーの7月分を始期1日系列、8月分を検針日系列で掲載していましたが、本号は8月分・9月分とも検針日系列で統一しています。同社は「計量期間等の始期が毎月1日の場合」と「それ以外の場合」の2系列を別々に公表しているため、系列をまたいだ比較はできません。
            </p>
            <p className="mt-3 rounded-md bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800">
              ※基準の違いにご注意ください。本表は各社の公表単位に合わせ、燃調本体・合計値・市場調整内包の別を「基準」欄に明記しています。<strong className="font-semibold">水準の差には定義の差が含まれるため、会社間の単純比較はできません。</strong>北海道電力の「燃料費等調整単価」は燃調・市場価格調整・離島ユニバーサルサービス調整を合算した値で市場価格調整は内数、中国電力は合計値、沖縄電力は燃調＋離島、中部電力ミライズはHH・卸市場調整を内包した数値です。一方で東北電力・関西電力・九州電力・北陸電力は市場価格調整を別建てで公表しているため、本表の値に市場価格調整を機械的に足すと二重計上になる会社があります。詳細は各社公式および{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              、{" "}
              <Link href="/how-to-check-fuel-cost-adjustment-terms" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">約款での燃料費調整確認</Link>
              をご確認ください。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">参考：10月分（料金月）の燃料費調整単価</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              本記事公開時点で、10月分の燃料費調整単価は9社が公表済みです。10月分に適用される高圧の支援単価は▲1.80円/kWhです。
            </p>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">電力会社</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">10月分 特高<br />（値引き前）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">10月分 高圧<br />（値引き前）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-sky-900">10月分 高圧<br />（支援反映後）</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">状態</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelAdjustment2026Oct.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.extra}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.high}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums font-semibold text-sky-900">{row.withSupport}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※単位は円/kWh・税込。基準は8月分・9月分の表と同じです。市場価格調整が未確定の会社は、請求ベースの合計まで確定しているわけではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料市況の位置づけ — 7月貿易統計（速報）でLNGが前月比+17.1%</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整は、算定期間の燃料輸入価格を数か月遅れで単価に反映する仕組みです。したがって「いま公表された単価」と「いまの燃料市況」は、指している期間が異なります。この時間差を意識せずに両者を並べると、実際の請求と食い違う理解になります。2026年9月時点で押さえておきたい指標は次の通りです。
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
            <p className="mt-2 text-xs text-slate-500">
              ※2026年7月分の貿易統計は2026年8月28日公表の<strong className="font-semibold">速報（確速）値</strong>で、2026年9月29日の輸入確報で改定されます。為替161.83円/米ドルは財務省の公表値です。原油・LNG・一般炭の米ドル建て単価は、財務省が公表する円建ての輸入金額と数量、および為替から算出した値です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              4指標のうち最も動いたのはLNGで、前月比+17.1%でした。原油は▲2.4%と低下し、一般炭は+2.9%、為替は+1.3%です。燃料の種類によって方向が分かれているため、「燃料市況が上がった／下がった」と一括りにせず、各社の電源構成と算定期間に照らして読む必要があります。燃料費調整の仕組みそのものは{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の解説</Link>
              、算定期間と反映時期の関係は{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              、為替の影響は{" "}
              <Link href="/fx-and-corporate-electricity-price" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">為替と法人電気料金の関係</Link>
              で整理しています。
            </p>
          </section>

          <ContentCta
            heading="支援の反映や燃調の見方を専門家に相談する"
            description="「支援の値引き行が請求書にない」「特別高圧の拠点だけ下がらない」「9月分の値引きが1.8円ではなく2.3円になっている」といった疑問は、契約区分と検針期間を確認すれば整理できます。中立の立場でお手伝いします。"
            links={[
              { href: "/contact", label: "お問い合わせ・相談する" },
              { href: "/concierge", label: "AIコンシェルジュに聞く" },
            ]}
          />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別に見る2026年8月の影響（冷房ピーク・夕方スパイク・支援の効き方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年8月の電気料金影響を業種別に整理しました。8月は、①卸価格の水準が前年比+59.7%と一段上がる、②夕方のスパイク時間帯に負荷が残る、③支援の値引きが3か月で最も厚い、という3つが同時に作用した月です。影響度は、市場連動比率・ベースロードの大きさ・冷房や冷蔵の負荷特性・支援の効きやすさを総合した目安です（実績単価ではなく定性的な整理です）。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">業種</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">影響度</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な要因と8月の見直しポイント</th>
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
            <h2 className="text-xl font-semibold text-slate-900">月次サマリ：2026年8月の総括と9月に向けたチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年8月使用分の法人電気料金は、(1) JEPXシステムプライスの月間平均が19.14円/kWh・前年同月比+59.7%となり、8月26日の夕方には6エリアで55.23円/kWhのスパイクが発生、(2) 電気・ガス料金支援が3か月で最も厚い8月使用分の単価（低圧▲4.5円/kWh・高圧▲2.3円/kWh）となった一方で特別高圧は対象外、(3) 高温は西日本中心で東京・仙台・那覇は平年並、燃料費調整は9月分で中部電力ミライズを除く9社が上昇方向、という3点が重なる月でした。再エネ賦課金は4.18円/kWh（2026年度確定）で据え置きです。4区分の8月実績単価は電力取引報の公表待ちのため、本記事では確定値と定性整理を分けて解説しました。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">2026年8月 主要トピック 5件</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>JEPXシステムプライスの8月月間平均が19.14円/kWh、前年同月（11.98円/kWh）比+7.15円・+59.7%。約定総量も385.80億kWh（前年268.19億kWh）と+43.9%増加。</li>
              <li>8月26日17時00分〜17時30分に中部・北陸・関西・中国・四国・九州の6エリアで55.23円/kWh。システムプライスの月間最高は50.01円/kWh（8月26日16時30分〜17時00分）、最低は8.00円/kWh（8月14日10時00分〜10時30分）。エリア別の最低は北海道の0.01円/kWh（8月2日8時30分〜9時00分）。</li>
              <li>電気・ガス料金支援は8月使用分が最大単価（低圧▲4.5円/kWh・高圧▲2.3円/kWh）。9月使用分は低圧▲3.5円/kWh・高圧▲1.8円/kWhに戻る。★特別高圧は対象外。10月使用分以降は公表待ち。</li>
              <li>9月分（料金月）の燃料費調整（値引き前）は中部電力ミライズを除く9社が上昇方向。北海道電力は▲1.34円/kWhから0.02円/kWhへプラス転換。10月分は9社が公表済み。</li>
              <li>気象は西日本中心の高温（福岡+2.1℃・広島+2.0℃）で東京は平年並（▲0.2℃）・多雨（286.0mm・平年比185%）。東京の猛暑日3日・熱帯夜6日。台風は発生10個・上陸1個。OCCTOの焚き増し依頼と需給ひっ迫注意報・警報は確認されていない。</li>
            </ul>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">9月に向けた確認3視点</h3>
            <div className="mt-4 space-y-4">
              {septemberCheckpoints.map((item) => (
                <div key={item.heading}>
                  <h4 className="text-base font-semibold text-slate-900">{item.heading}</h4>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              シナリオ試算は{" "}
              <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>
              、設備対策の全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              、経営層向けの説明は{" "}
              <Link href="/executive-cfo-electricity-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFOのための電気料金基礎</Link>
              が参考になります。
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              8月時点の確認チェックリストは次の通りです。
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {reviewChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs leading-6 text-slate-500">
              ※本記事の数値は、電力・ガス取引監視等委員会「電力取引報」（4区分の確定値、2026年5月分まで公表済み）、JEPX（スポット取引結果CSVの全1,488コマ単純平均）、主要電力10社の2026年6月26日・7月30日・8月28日プレス（8月分・9月分・10月分の燃料費調整）、気象庁（2026年8月の天候・全国気候表・過去の気象データ検索）、電力広域的運営推進機関（OCCTO）、経済産業省・資源エネルギー庁（電気・ガス料金支援）、財務省貿易統計（2026年7月分・速報）に基づきます。2026年6月分以降の4区分実績単価は公表待ちで、公表され次第、順次更新します。本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。また、今後の価格水準を予測するものでもありません。
            </p>
          </section>

          <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt={publishedDate} />

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/business-electricity-retrospective/2026-07", title: "2026年7月の振り返り", description: "前号（JEPX前年比+40.5%・支援の初適用・燃調の上昇局面入り）" },
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "全月次振り返り一覧と長期推移" },
              { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", title: "特別高圧の電気料金推移（2019〜2025）", description: "コロナ・ウクライナ危機・補助金の影響を年別に解説" },
              { href: "/business-electricity-retrospective/high-voltage-2019-2025", title: "高圧の電気料金推移（2019〜2025）", description: "年別の推移と構造変化を確認" },
              { href: "/business-electricity-retrospective/low-voltage-power-2019-2025", title: "低圧電力の電気料金推移（2019〜2025）", description: "低圧電力の長期推移を整理" },
              { href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025", title: "低圧電灯の電気料金推移（2019〜2025）", description: "低圧電灯の長期推移を整理" },
              { href: "/region-shikoku-electricity-price-trend", title: "四国エリアの電気料金推移", description: "8月の前年同月比が最大（+93.1%）となったエリア" },
              { href: "/region-hokuriku-electricity-price-trend", title: "北陸エリアの電気料金推移", description: "8月は前年同月比+77.5%と2番目に大きい上昇" },
              { href: "/region-chubu-electricity-price-trend", title: "中部エリアの電気料金推移", description: "8月平均21.61円/kWhで9エリア中最高" },
              { href: "/region-tohoku-electricity-price-trend", title: "東北エリアの電気料金推移", description: "8月に唯一前月から低下（▲2.30円/kWh）したエリア" },
              { href: "/region-tokyo-electricity-price-trend", title: "東京エリアの電気料金推移", description: "8月平均21.24円/kWh・前月比+1.38円/kWh" },
              { href: "/business-electricity-price-trend-10-years", title: "法人電気料金の10年推移", description: "長期の推移を俯瞰して現在地を確認" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "9月分の上昇を理解するための基礎解説" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "4.18円/kWh（2026年度）の仕組み" },
              { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "燃調本体とは別の市場連動分の見方" },
              { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格ダッシュボード", description: "エリア別の単価とスパイクの確認" },
              { href: "/extreme-heat-electricity-risk", title: "猛暑と電気料金リスク", description: "高温が法人コストに与える影響" },
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
            description="2026年8月の動向を踏まえ、自社の契約条件をシミュレーターで診断してください。支援が9月使用分までであることを前提に、10月以降の姿を試算しておくのにも活用できます。"
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
