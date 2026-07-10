import type { Metadata } from "next";
import Link from "next/link";
import { MonthlyDataCards, MonthlyTrendChart, YearComparisonTable } from "../_components/MonthlyVisuals";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../../components/simulator/SourcesAndFaq";
import TableOfContents from "../../../components/market-data/TableOfContents";
import AuthorBadge from "../../../components/market-data/AuthorBadge";

const pageTitle = "【2026年5月】法人の電気料金はどう動いた？再エネ賦課金改定後の本格運用";
const pageDescription =
  "2026年5月使用分の法人向け電気料金動向を、5/1施行の再エネ賦課金改定・GW明けの需要急増・冷房シーズン開始の3観点で整理。低圧・高圧・特別高圧・業種別の影響と、夏季ピーク前の確認ポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/2026-05";
const publishedDate = "2026-05-15";
const updatedDate = "2026-06-04";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 2026年5月",
    "5月 電気料金 振り返り",
    "再エネ賦課金 2026年度",
    "連休明け 電力需要",
    "冷房開始 JEPX",
    "燃料費調整 5月",
    "業務用 電気料金 推移",
    "高圧 電気料金 2026",
    "特別高圧 電気料金 2026",
    "夏季ピーク前 契約見直し",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/monthly-review", width: 1200, height: 630, alt: "2026年5月の法人向け電気料金動向" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/monthly-review"],
  },
};

// 2026年5月の推計値（5/12 時点、新電力ネット2月確定値＋市況からの推計）
const MAY_2026_DATA = {
  year: 2026,
  month: 5,
  categories: [
    { label: "特別高圧", shortLabel: "特高", value: 17.0, prevMonthValue: 16.7, diff: 0.3, prevYearValue: 17.7, prevYearDiff: -0.7 },
    { label: "高圧", shortLabel: "高圧", value: 21.7, prevMonthValue: 21.0, diff: 0.7, prevYearValue: 22.6, prevYearDiff: -0.9 },
    { label: "低圧電灯", shortLabel: "低灯", value: 26.2, prevMonthValue: 26.0, diff: 0.2, prevYearValue: 29.0, prevYearDiff: -2.8 },
    { label: "低圧電力", shortLabel: "低力", value: 29.7, prevMonthValue: 28.5, diff: 1.2, prevYearValue: 34.7, prevYearDiff: -5.0 },
  ],
  trendData: [
    { label: "2025/12", values: [16.9, 20.9, 26.8, 32.4] as [number, number, number, number] },
    { label: "2026/1", values: [16.72, 20.43, 25.98, 27.79] as [number, number, number, number] },
    { label: "2026/2", values: [16.68, 18.39, 22.67, 24.01] as [number, number, number, number] },
    { label: "2026/3", values: [16.58, 18.92, 23.1, 27.37] as [number, number, number, number] },
  ],
  sameMonthHistory: [
    { year: 2023, values: [23.1, 24.8, 25.0, 30.5] as [number, number, number, number] },
    { year: 2024, values: [18.0, 21.4, 25.8, 32.0] as [number, number, number, number] },
    { year: 2025, values: [17.7, 22.6, 29.0, 34.7] as [number, number, number, number] },
    { year: 2026, values: [17.0, 21.7, 26.2, 29.7] as [number, number, number, number] },
  ],
};

const surchargeUpdate = [
  { label: "2025年度（〜2026年4月）", rate: "3.98円/kWh", note: "前年度（2024年度3.49円）から +0.49円/kWh 上昇" },
  { label: "2026年度（2026年5月〜2027年4月）", rate: "4.18円/kWh（確定値）", note: "経産省告示で5/1施行・全使用量に上乗せ" },
  { label: "差分", rate: "+0.20円/kWh（前年度比 +5.0%）", note: "kWhあたり約0.2円の単価上振れが5月使用分から発生" },
];

// 主要電力10社の2026年5月分 燃料費調整（円/kWh・税込・燃調本体）。各社2026年4月28日発表の一次出典に基づく。市場価格調整は別途。
const fuelAdjustmentSummary = [
  { area: "北海道電力", extraHigh: "▲2.31", high: "▲2.38", note: "" },
  { area: "東北電力", extraHigh: "0.33", high: "0.35", note: "市場価格調整は別途" },
  { area: "東京電力EP", extraHigh: "0.87", high: "0.89", note: "2026年4月新約款＝燃調本体＋市場価格調整（別途）" },
  { area: "中部電力ミライズ", extraHigh: "0.12", high: "0.12", note: "市場価格調整は別途" },
  { area: "北陸電力", extraHigh: "▲7.22", high: "▲7.36", note: "" },
  { area: "関西電力", extraHigh: "▲1.02", high: "—", note: "高圧500kW未満は市場価格調整込で▲1.24" },
  { area: "中国電力", extraHigh: "▲1.38", high: "▲1.41", note: "合計値" },
  { area: "四国電力", extraHigh: "▲6.89", high: "▲7.07", note: "" },
  { area: "九州電力", extraHigh: "▲0.99", high: "▲1.01", note: "合計値" },
  { area: "沖縄電力", extraHigh: "▲12.11", high: "▲12.39", note: "合計値（燃調＋離島）" },
];

const jepxAreaSummary = [
  { area: "北海道", may2026: "13.2", may2025: "8.7", diff: "+4.5" },
  { area: "東北", may2026: "12.8", may2025: "8.4", diff: "+4.4" },
  { area: "東京", may2026: "13.5", may2025: "8.9", diff: "+4.6" },
  { area: "中部", may2026: "13.3", may2025: "8.7", diff: "+4.6" },
  { area: "北陸", may2026: "13.0", may2025: "8.5", diff: "+4.5" },
  { area: "関西", may2026: "13.4", may2025: "8.8", diff: "+4.6" },
  { area: "中国", may2026: "13.2", may2025: "8.7", diff: "+4.5" },
  { area: "四国", may2026: "13.1", may2025: "8.6", diff: "+4.5" },
  { area: "九州", may2026: "12.9", may2025: "8.5", diff: "+4.4" },
  { area: "沖縄", may2026: "16.8", may2025: "11.0", diff: "+5.8" },
];

const temperatureBy8Cities = [
  { city: "札幌", avg: "12.5°C", note: "平年並み（+0.2°C）" },
  { city: "仙台", avg: "16.8°C", note: "やや高め（+0.5°C）" },
  { city: "東京", avg: "20.3°C", note: "平年比 +0.7°C で冷房開始やや早め" },
  { city: "名古屋", avg: "20.5°C", note: "平年比 +0.6°C" },
  { city: "大阪", avg: "20.8°C", note: "平年比 +0.7°C で冷房需要前倒し" },
  { city: "広島", avg: "19.5°C", note: "平年比 +0.4°C" },
  { city: "福岡", avg: "20.5°C", note: "平年比 +0.5°C" },
  { city: "那覇", avg: "24.8°C", note: "平年比 +0.6°C で本格冷房期入り" },
];

const industryImpactMatrix = [
  { industry: "製造業（24時間操業）", impact: "中", reason: "連続稼働で賦課金改定の影響を全使用量で受ける。固定プランの継続が望ましい" },
  { industry: "製造業（日中操業）", impact: "中", reason: "賦課金改定の影響あり。夜間操業への一部シフトでデマンド分散を検討" },
  { industry: "病院・医療機関", impact: "中", reason: "24時間稼働かつ補助対象外。夏季ピーク前にデマンド管理を要点検" },
  { industry: "データセンター", impact: "高", reason: "高ベースロードで賦課金改定の絶対額が最大級。再エネPPA併用検討の好機" },
  { industry: "オフィスビル", impact: "中", reason: "5月は中間期で空調需要少。6月から本格化、契約見直しは5月中に完了が望ましい" },
  { industry: "商業施設・スーパー", impact: "中", reason: "冷蔵稼働で常時負荷大。6月以降のピーク前に冷凍機 COP 改善を要検討" },
  { industry: "ホテル・宿泊", impact: "中", reason: "GW繁忙期と通常期のコントラスト大。閑散期の見直しタイミング" },
  { industry: "飲食チェーン", impact: "低", reason: "5月は中間期、本格化は7月以降。今のうちに固定プラン年契約への切替検討" },
];

const summerPrepCheckpoints = [
  {
    heading: "①夏季ピーク月（7-8月）の使用量試算と契約電力の妥当性確認",
    content:
      "夏季のピーク月使用量を昨年実績で確認し、現在の契約電力が妥当かを点検します。デマンド超過があると基本料金が翌月以降1年間自動的に上振れする構造のため、5月のうちにピークカット策（蓄電池・自家消費太陽光・デマンドコントローラ）の導入可否を判断します。",
  },
  {
    heading: "②固定プランと市場連動プランの夏季リスクシナリオ比較",
    content:
      "夏季はJEPXスポット価格が冬季に次いで高騰しやすく、市場連動プランの上振れリスクが顕在化します。シミュレーターで7-9月の影響額を試算し、固定プランへの切替余地（解約金を払っても合理的か）を5月中に判断します。",
  },
  {
    heading: "③再エネ賦課金改定の年間累計インパクト確認と予算修正",
    content:
      "+0.20円/kWh の単価上振れは、年間使用量100万kWhの法人で年20万円増、1,000万kWhの法人で年200万円増。2026年度予算策定時の前提が古いままなら、5月時点で上期予算の修正と通期見通しの再確認が必要です。",
  },
];

const reviewChecklist = [
  "5月使用分の請求書（6月中旬請求）で再エネ賦課金が新単価4.18円/kWhに切り替わっているかを確認",
  "燃料費調整額の単価が前月比でどの方向に動いたか（電力会社ごとに差が大きい）を点検",
  "GW期間中の使用量低下と平日通常稼働の差を実績データで確認、契約電力の妥当性に再反映",
  "夏季ピーク月（7-9月）の予算を、賦課金改定 +0.20円/kWh と燃料費調整変動を織り込んで再計算",
  "市場連動プラン採用法人は、6-8月のJEPX上振れリスク試算をシミュレーターで確認",
  "業種別影響度マトリックス（H2-9）で自社の優先度を確認し、5月内に意思決定する案件を絞り込む",
];

const faqItems = [
  {
    question: "2026年5月から再エネ賦課金が改定されたが、5月の電気料金にどう影響する？",
    answer:
      "経産省告示で2026年度の再エネ賦課金は4.18円/kWh（確定値）となり、前年度（2025年度）3.98円/kWhから +0.20円/kWhの上振れが5/1から全使用量に上乗せされます。年間使用量100万kWhの法人で年20万円増、1,000万kWhで年200万円増の影響です。",
  },
  {
    question: "ゴールデンウィークの電力需要はどう動いた？",
    answer:
      "GW期間（5/3-6）は全国的に低需要となり、JEPXスポット価格は5月中旬以降の通常水準より低く推移する見込みです。GW明けの平日（5/7以降）から需要が通常水準に復帰し、5月後半には冷房開始に伴う上振れも見込まれます。",
  },
  {
    question: "5月のJEPXスポット価格は前年同月比でどうだった？",
    answer:
      "2026年5月のJEPXエリア平均は12.9〜16.8円/kWh（5/12 時点）で、前年同月比では全エリアで約 +4.4〜+5.8円/kWh（約 +52%）の大幅上昇となっています。原油・LNG価格の上昇（ホルムズ海峡リスク反映）と政府電気・ガス料金支援終了が重なり、市場連動プラン採用法人は大きな影響を受けています。",
  },
  {
    question: "業種別では5月の電気料金影響度はどう違う？",
    answer:
      "影響度が最大なのはデータセンター（高ベースロードで賦課金改定の絶対額大）、次点は製造業・病院・ホテル・商業施設の中影響度ゾーン。飲食チェーンは5月は中間期で影響度は相対的に低めですが、7月以降の本格化前に契約見直しを進める好機です。",
  },
  {
    question: "6-8月の夏季ピーク前に法人企業が確認すべきことは？",
    answer:
      "①夏季ピーク月の使用量試算と契約電力の妥当性、②固定 vs 市場連動の夏季リスクシナリオ比較、③再エネ賦課金改定の年間累計インパクト確認の3点。5月のうちにピークカット策導入可否とプラン切替判断を完了するのが目安です。",
  },
  {
    question: "5月の主要電力10社の燃料費調整単価の動向は？",
    answer:
      "5月分の燃料費調整単価（燃調本体・税込）は、各社2026年4月28日発表の一次出典に基づき、特別高圧・高圧で会社差が大きくなっています。たとえば東京電力EPは特高0.87・高圧0.89円/kWh、中部電力ミライズは特高・高圧とも0.12円/kWh、北海道電力は特高▲2.31・高圧▲2.38円/kWhです。燃調本体とは別に市場価格調整が加わる会社もあり、詳細は各社公式でご確認ください。",
  },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・燃料費調整・再エネ賦課金告示情報" },
  { name: "JEPX 一般社団法人 日本卸電力取引所", url: "https://www.jepx.org", description: "卸電力市場のスポット価格・成約データ（10エリア）" },
  { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給状況・容量市場・系統運用情報" },
  { name: "気象庁", url: "https://www.jma.go.jp", description: "5月の月平均気温・全国8地点データ" },
];

export default function BusinessElectricityRetrospective202605Page() {
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
          { name: "2026年5月" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年5月</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年5月】法人の電気料金はどう動いた？</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金改定後の本格運用月・GW明けの需要再開・冷房シーズン入りの3つが重なる5月使用分の整理
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年5月使用分の法人向け電気料金は、3つの構造変化が同時に表面化する月です。第一に、5月1日施行の再エネ賦課金新単価（確定値 4.18円/kWh、前年度比 +0.20円）が初めて全使用量に上乗せされる本格運用月。第二に、ゴールデンウィーク中の需要落ち込みと平日通常稼働のコントラスト。第三に、冷房シーズン開始に伴うJEPXスポット価格の上振れ局面入りです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに、補助金終了後の実力ベース請求が定着した中で、6-8月の夏季ピーク前に契約見直し・設備対策を完了させる最終的なタイミングでもあります。法人にとっては「単月の請求額を確認する」だけでなく、夏季の上振れリスクを踏まえた年間予算の再点検と契約見直しの意思決定を5月中に進める必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この記事では、当社団が運営している「新電力ネット」のデータと経産省・JEPX・OCCTO・気象庁の公開情報をもとに、2026年5月使用分の電気料金動向を、低圧・高圧・特別高圧と業種別の影響度の両面から整理します。本記事掲載数値は5月15日時点の見込み値・速報値を含みます。確定値（電力・ガス取引監視等委員会「電力取引報」）は公表され次第反映します（5月分＝2026年8月中旬公表見込み）。
          </p>
        </header>

        <TableOfContents />

        <MonthlyDataCards data={MAY_2026_DATA} />
        <p className="mt-2 rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-xs leading-6 text-slate-600">
          【データ更新 2026-07-09】本ページの単価データは、電力・ガス取引監視等委員会「電力取引報」の確定値に基づき更新しました。初出時は公表前月について速報的な参考値を含んでいました。最新月の確定値は公表され次第、順次反映します。
        </p>
        <p className="mt-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-6 text-amber-800">
          ※上記カードおよび本文中の2026年5月使用分の単価（推計）は、電力取引報の公表前時点の速報的な参考値です（確定値は公表後に更新。4月分＝2026年7月中旬公表見込み、5月分はそれ以降）。確定値による推移は下記グラフ（2026年3月分まで）をご覧ください。
        </p>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年5月の結論3点 — 再エネ賦課金改定後の本格運用 + 夏季ピーク前対策</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                5月1日施行の再エネ賦課金新単価（確定値 4.18円/kWh）が初めて全使用量に上乗せされる本格運用月。前年度（2025年度）3.98円/kWhから +0.20円/kWhの上振れが、低圧・高圧・特別高圧のすべての契約区分で発生しています。
              </li>
              <li>
                JEPXスポット価格は5月中旬時点で前年同月比 +4.4〜+5.8円/kWh（約 +52%）の大幅上昇。原油・LNG高騰と政府支援終了の二重要因。6月以降の冷房需要増でさらなる上振れリスク。市場連動プラン採用法人は夏季ピーク前のリスクシナリオ確認が必須です。
              </li>
              <li>
                補助金が完全終了した実力値ベースの請求が定着した中、5月は夏季ピーク（7-9月）前の最終的な契約見直しタイミング。デマンド管理・固定プラン切替・自家消費太陽光導入の意思決定を5月中に完了させる重要月です。
              </li>
            </ol>
          </section>

          <MonthlyTrendChart data={MAY_2026_DATA} />
          <YearComparisonTable data={MAY_2026_DATA} />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">5月使用分の見通しに最も影響する3大要因（賦課金改定 / GW需要 / JEPX動向）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月使用分の電気料金を左右する要因は、過去の月次振り返りと比べて構造が大きく異なります。補助の有無を主軸に整理してきた2025年・2026年初頭の月次とは異なり、5月は「賦課金改定 / GW需要 / JEPX動向」の3要因が同時に作用する月です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">①再エネ賦課金 5/1 改定</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">3.98円→4.18円/kWh（確定値、+0.20円）。kWhあたり構造的な単価上振れで、年間使用量に応じた絶対額インパクトが5月使用分から顕在化。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">②GW明けの需要急増</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">5/3-6の低需要期からの平日通常稼働への復帰でJEPXスポットが上振れ。GW明け1週間の需給コントラストが5月後半の単価傾向を決定づける要因に。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">③冷房シーズン入り</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">5月後半からの冷房需要本格化で電力需要急増。気象庁データ（H2-8）でも全国8地点で平年比 +0.4〜+0.7°Cの高温推移、冷房開始が前倒しに。</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              全体構造としての{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気料金が上がる理由</Link>
              、{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              も併せてご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向（2026年5月）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧（電灯・電力）は、小規模事業所・店舗・サービス拠点で広く使われる契約区分です。2026年5月使用分の低圧電灯は約 26.2円/kWh（推計）、低圧電力は約 29.7円/kWh（推計）の水準で、前年同月比では電灯 -2.8円、電力 -5.0円の改善傾向となっています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              ただし、2025年5月は地政学リスクが意識されたタイミングで例外的な高水準であり、2019年比では依然50〜70%高い実力値水準が続いています。さらに5月使用分から賦課金改定 +0.20円/kWhが全使用量に上乗せされるため、6月以降の請求書ではこの単価上振れが目立つことになります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>コンビニ・物販店・ドラッグストアなどの小売業</li>
              <li>飲食店・カフェ・ベーカリーなどの店舗業態</li>
              <li>クリニック・サロン・整骨院などのサービス事業</li>
              <li>小規模オフィス・営業所・学習塾などの拠点</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              これらの低圧主体の事業者では、賦課金改定の影響額は1拠点で年数万〜数十万円規模ですが、多店舗展開している企業では合算で大きな金額になります。5月のうちに{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">削減見直しポイント</Link>
              を確認し、夏季ピーク前の契約見直しを進めることが望ましいです。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向（2026年5月）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧は、工場・商業施設・病院・学校・物流施設・オフィスビルで広く使われる主力契約区分です。2026年5月使用分の高圧は約 21.7円/kWh（推計）、前月比 +0.7円・前年同月比 -0.9円の動きとなっています。前月比のプラスは賦課金改定（+0.20円）と燃調変動の合計を反映した水準です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家は使用量が大きいため、賦課金 +0.20円/kWh の年間累計インパクトは1,000万kWh規模で年200万円増。中規模工場・物流センター・大型病院では、5月時点で2026年度予算の前提を見直す必要が出てくる規模です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>中規模工場・加工場・食品工場（連続稼働で影響大）</li>
              <li>スーパー・ショッピング施設・量販店（冷蔵稼働で常時負荷）</li>
              <li>病院・介護施設・学校法人（24時間稼働の医療機関は特に注意）</li>
              <li>倉庫・物流拠点・配送センター・冷蔵倉庫（夏季ピーク前の点検重要）</li>
              <li>延床面積の大きいオフィスビル（5月中間期、6月以降本格化）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の業種別の見直しポイントは{" "}
              <Link href="/articles/industry-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の見直しポイント集（33業種）</Link>
              、契約見直しの全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向（2026年5月）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は、大規模工場・データセンター・大型商業施設・自治体の基幹施設・大規模病院など、非常に大きな電力需要を持つ事業者が中心です。2026年5月使用分の特別高圧は約 17.0円/kWh（推計）、前月比 +0.3円・前年同月比 -0.7円の動きで、4区分のなかで最も小さな上振れにとどまっています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は燃料価格・需給・容量拠出金など構造要因が単価を主導する区分のため、賦課金改定の +0.20円/kWh の影響を受けつつも、相対的には燃料費調整の動向が支配的です。データセンターのような高ベースロード需要家では、年間使用量が数億kWh規模になるため、賦課金改定の絶対額インパクトも年数千万円規模に達するケースがあります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>素材・化学・金属・機械などの大規模工場</li>
              <li>24時間稼働の生産拠点・データセンター・大規模サーバー施設</li>
              <li>大型商業施設・再開発拠点</li>
              <li>自治体の上下水道施設・大型公共施設</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧需要家にとっては{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整の総合解説</Link>
              、{" "}
              <Link href="/jepx-spot-price-dashboard" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット価格ダッシュボード</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              が実務的な参照先になります。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年5月 改定 再エネ賦課金の単価対比（旧 vs 新）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月1日から、経産省告示による新単価が施行されました。5月使用分（6月中旬請求分）からすべての契約区分で新単価が適用されます。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-sky-300 bg-white">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-sky-100">
                  <tr>
                    <th className="border-b border-sky-200 px-3 py-2 text-left font-semibold text-slate-900">期間</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-left font-semibold text-slate-900">単価</th>
                    <th className="border-b border-sky-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {surchargeUpdate.map((row) => (
                    <tr key={row.label} className="even:bg-sky-50/30">
                      <td className="border-b border-sky-200 px-3 py-2 font-medium">{row.label}</td>
                      <td className="border-b border-sky-200 px-3 py-2">{row.rate}</td>
                      <td className="border-b border-sky-200 px-3 py-2 text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年間使用量別の追加負担額目安は次の通りです（+0.20円/kWh × 年間使用量で試算）:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>年100万kWh（中規模工場・大型小売）：約 20 万円/年</li>
              <li>年1,000万kWh（大型物流・大規模工場）：約 200 万円/年</li>
              <li>年1億kWh（大規模データセンター）：約 2,000 万円/年</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※経産省告示の確定値ベース。詳細は{" "}
              <Link href="/renewable-energy-surcharge-2026" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">2026年度の再エネ賦課金</Link>
              で解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">5月の主要電力10社の燃料費調整単価一覧（特高・高圧の燃調本体）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              主要電力10社の2026年5月分 燃料費調整単価を、特別高圧・高圧の燃調本体（税込）で統一して整理しました。各社の2026年4月28日発表（2026年6月号と同一の一次出典）に基づく5月分の値です。市場価格調整（東京電力EP・中部電力ミライズ・関西電力ほか）は別途加算があり、詳細は各社公式でご確認ください。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">電力会社</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">特高 5月 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">高圧 5月 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考（市場価格調整ほか）</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelAdjustmentSummary.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.extraHigh}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.high}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※本表は各社の燃調本体（税込）で統一しています。市場価格調整は別途加算があり、表外の注記扱いです。出典は各社2026年4月28日プレスリリース（2026年6月号のデータ集と同一）。実際の単価は各電力会社の公表値で再確認してください。{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              、{" "}
              <Link href="/how-to-check-fuel-cost-adjustment-terms" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">約款での燃料費調整確認</Link>
              も併せてご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">JEPXスポット価格 5月平均と10エリア比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月のJEPXエリアプライス（10エリア別月平均、5/12 時点実績値）と前年同月比です。原油・LNG高騰と政府支援終了で、全エリアで前年同月比 +4.4〜+5.8円/kWh（約 +52%）の大幅上昇となっています。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">エリア</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2026/5 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">2025/5 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">前年同月比</th>
                  </tr>
                </thead>
                <tbody>
                  {jepxAreaSummary.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.may2026}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.may2025}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums text-emerald-700">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              なお、5月後半からは冷房開始に伴う需要増で全エリアで上振れ局面入りが見込まれます。気象庁データ（次セクション参照）では全国8地点で平年比 +0.4〜+0.7°Cの高温推移となっており、冷房開始の前倒しが市場価格に波及する点に注意が必要です。{" "}
              <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXとは</Link>
              、{" "}
              <Link href="/jepx-spot-market-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット市場の歴史</Link>
              。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※気象庁の2026年5月の月平均気温（全国8地点・速報値）：
              {temperatureBy8Cities.map((c) => `${c.city} ${c.avg}`).join(" / ")}。{" "}
              冷房開始タイミングは前年比で1〜2週間前倒し傾向。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別の5月電気料金影響度マトリックス（製造 / 商業 / 病院 / DC等）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月の電気料金影響度を業種別に整理しました。賦課金改定 +0.20円/kWh × 年間使用量の絶対額、夏季ピーク前のタイミング、24時間稼働の有無、冷蔵稼働の有無などを総合した目安です。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">業種</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">影響度</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な要因と5月の見直しポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {industryImpactMatrix.map((row) => (
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

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">6-8月 夏季ピーク前に法人企業が確認すべき3視点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5月は夏季ピーク（7-9月）前の最終的な見直しタイミングです。次の3視点で5月中に意思決定を完了させることが、夏季の上振れリスク抑制と年間予算の安定運用につながります。
            </p>
            <div className="mt-4 space-y-4">
              {summerPrepCheckpoints.map((item) => (
                <div key={item.heading}>
                  <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{item.content}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピーク前のシナリオ試算は{" "}
              <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>
              、設備対策の全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              、CFO向けの説明資料は{" "}
              <Link href="/executive-cfo-electricity-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFOのための電気料金基礎</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">月次サマリ：2026年5月の法人電気料金概況とまとめ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年5月使用分の法人電気料金は、(1) 再エネ賦課金改定 +0.20円/kWh の本格運用月、(2) GW明けの需要急増、(3) 冷房シーズン開始の3要因が同時に作用する月でした。低圧・高圧・特別高圧のすべての契約区分で前月比 +0.2〜+1.2円/kWh の上振れとなった一方、前年同月比では -0.7〜-5.0円/kWh の低下傾向（2025年5月の地政学リスク懸念を経た反動）となっています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              5月は夏季ピーク（7-9月）前の最終的な契約見直し・設備対策の意思決定月。賦課金改定の年間累計インパクトを2026年度予算に織り込み、固定 vs 市場連動の夏季リスクシナリオ比較を踏まえて意思決定を5月中に完了させることが望まれます。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">2026年5月 主要業界ニュース 5 件</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>再エネ賦課金 過去最高 4.18円/kWh（2026年度、5/15 公開予定の 2026-05号で確定）。前年度（2025年度）3.98円/kWh から +0.20円/kWh の上振れ。</li>
              <li>政府電気・ガス料金支援 2026/4 月分で終了（5月分から値引きなし）。補助なしの実力ベース請求が定着。</li>
              <li>容量拠出金 2026年度本格徴収開始（首都圏 14,812円/kW、契約電力 1,000kW で年 1,481 万円の追加負担）。</li>
              <li>東京電力エナジーパートナー 法人向け料金改定（基本料金値下げ + 電力量料金値上げ、2026/4/1 実施）。使用量の多い法人は実質値上げとなるケースが多い。</li>
              <li>ホルムズ海峡リスクで原油 +75.19% の急騰、JEPX スポット価格も前年同月比 +52.52% の大幅上昇。市場連動プランは大きな影響を受けている。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              5月時点の確認チェックリストは次の通りです：
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {reviewChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs text-slate-500">
              ※本記事の数値は2026年5月12日時点の推計値・速報値です。再エネ賦課金（経産省告示）、燃調 5月分（新電力ネット集計、5/12時点の推計）、JEPX スポット価格（5/12 実績）をベースとしています。最新動向は電力取引報の公表に合わせて更新します（5月分＝2026年8月中旬公表見込み）。
            </p>
          </section>

          <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt={publishedDate} />

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/business-electricity-retrospective/2026-02", title: "2026年2月の振り返り", description: "前回月次サマリー（補助厚い局面の最終確認）" },
              { href: "/business-electricity-retrospective/2026-01", title: "2026年1月の振り返り", description: "補助復活直後の改善局面" },
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "全月次振り返り一覧と長期推移" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "5月動向の理解に必須のサブピラー" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "5/1改定の背景と仕組み" },
              { href: "/renewable-energy-surcharge-2026", title: "2026年度の再エネ賦課金", description: "新単価4.18円/kWhの解説" },
              { href: "/market-price-adjustment", title: "市場価格調整の総合解説", description: "JEPX連動契約の夏季リスク" },
              { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本" },
              { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格ダッシュボード", description: "リアルタイムのエリア別単価" },
              { href: "/business-electricity-cost-reduction-review-points", title: "削減見直し7ポイント", description: "包括的削減ガイド" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備で確認すべき項目" },
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（33業種）", description: "業種別の負荷特性と契約最適化" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "24時間稼働医療機関の見直し" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "連続稼働製造業の見直し" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "高ベースロード DC の見直し" },
              { href: "/executive-cfo-electricity-basics", title: "CFO向け電気料金基礎", description: "経営層向け説明資料" },
              { href: "/concierge", title: "AIコンシェルジュ", description: "業種別記事を AI 提案" },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="2026年5月の電気料金動向を踏まえ、自社の契約条件をシミュレーターで診断してください。夏季ピーク前のリスク試算にも活用できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/monthly-review", label: "他の月次振り返りを見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <AuthorBadge publishedAt={publishedDate} updatedAt={updatedDate} />
      </main>
    </>
  );
}
