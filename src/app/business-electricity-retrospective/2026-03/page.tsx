import type { Metadata } from "next";
import Link from "next/link";
import { MonthlyDataCards, MonthlyTrendChart, YearComparisonTable } from "../_components/MonthlyVisuals";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../../components/simulator/SourcesAndFaq";
import TableOfContents from "../../../components/market-data/TableOfContents";
import AuthorBadge from "../../../components/market-data/AuthorBadge";

const pageTitle = "【2026年3月】法人の電気料金はどう動いた？政府補助縮小・JEPX安定の月";
const pageDescription =
  "2026年3月使用分の法人電気料金動向を整理。政府電気・ガス料金支援縮小、JEPXスポット安定、4月以降の構造変化前夜の局面を低圧・高圧・特別高圧と業種別影響度で詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/2026-03";
const publishedDate = "2026-04-15";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 2026年3月",
    "3月 電気料金 振り返り",
    "政府補助 縮小 電気料金",
    "JEPX 3月",
    "燃料費調整 3月",
    "再エネ賦課金 旧単価",
    "業務用 電気料金 推移",
    "高圧 電気料金 2026",
    "特別高圧 電気料金 2026",
    "補助縮小 法人契約",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/monthly-review", width: 1200, height: 630, alt: "2026年3月の法人向け電気料金動向" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/monthly-review"],
  },
};

// 2026年3月の確定値データ（新電力ネット集計 + 経産省告示 + JEPX 実績）
const MAR_2026_DATA = {
  year: 2026,
  month: 3,
  categories: [
    { label: "特別高圧", shortLabel: "特高", value: 16.58, prevMonthValue: 16.68, diff: -0.1, prevYearValue: 18.0, prevYearDiff: -1.42 },
    { label: "高圧", shortLabel: "高圧", value: 18.92, prevMonthValue: 18.39, diff: 0.53, prevYearValue: 21.5, prevYearDiff: -2.58 },
    { label: "低圧電灯", shortLabel: "低灯", value: 23.1, prevMonthValue: 22.67, diff: 0.43, prevYearValue: 25.5, prevYearDiff: -2.4 },
    { label: "低圧電力", shortLabel: "低力", value: 27.37, prevMonthValue: 24.01, diff: 3.36, prevYearValue: 28.5, prevYearDiff: -1.13 },
  ],
  trendData: [
    { label: "2025/10", values: [16.6, 20.1, 26.2, 29.3] as [number, number, number, number] },
    { label: "2025/11", values: [16.8, 21.3, 27.3, 33.6] as [number, number, number, number] },
    { label: "2025/12", values: [16.9, 20.9, 26.8, 32.4] as [number, number, number, number] },
    { label: "2026/1", values: [16.72, 20.43, 25.98, 27.79] as [number, number, number, number] },
    { label: "2026/2", values: [16.68, 18.39, 22.67, 24.01] as [number, number, number, number] },
    { label: "2026/3", values: [16.58, 18.92, 23.1, 27.37] as [number, number, number, number] },
  ],
  sameMonthHistory: [
    { year: 2023, values: [23.8, 24.5, 25.4, 27.8] as [number, number, number, number] },
    { year: 2024, values: [18.3, 20.5, 24.6, 27.2] as [number, number, number, number] },
    { year: 2025, values: [18.0, 21.5, 25.5, 28.5] as [number, number, number, number] },
    { year: 2026, values: [16.58, 18.92, 23.1, 27.37] as [number, number, number, number] },
  ],
};

const subsidySchedule = [
  { label: "2026年1月・2月使用分", lowVoltage: "4.50円/kWh", highVoltage: "2.30円/kWh", note: "冬の最大支援月（最後の手厚い局面）" },
  { label: "2026年3月使用分", lowVoltage: "1.50円/kWh", highVoltage: "0.80円/kWh", note: "縮小開始（1/3 水準へ）" },
  { label: "2026年4月使用分", lowVoltage: "縮小最終水準", highVoltage: "縮小最終水準", note: "支援最終月（5月以降は終了予定）" },
  { label: "2026年5月使用分以降", lowVoltage: "終了予定", highVoltage: "終了予定", note: "補助なしの実力ベース請求へ移行" },
];

const fuelAdjustmentMar = [
  { area: "北海道電力", high: "1.83", extra: "1.78", note: "3月単価 1.83円/kWh（高圧）、前月比 +0.05円" },
  { area: "東北電力", high: "2.75", extra: "2.66", note: "3月単価 2.75円/kWh（高圧）、前月比 +0.13円" },
  { area: "東京電力EP", high: "2.51", extra: "2.48", note: "3月単価 2.51円/kWh（高圧）、前月比 +0.14円" },
  { area: "中部電力ミライズ", high: "0.91", extra: "0.90", note: "3月単価 0.91円/kWh（高圧）、前月比 +0.17円で上昇率最大" },
  { area: "北陸電力", high: "2.28", extra: "2.25", note: "3月単価 2.28円/kWh（高圧）" },
  { area: "関西電力", high: "2.59", extra: "2.56", note: "3月単価 2.59円/kWh（高圧）、原発比率高い構成" },
  { area: "中国電力", high: "3.21", extra: "3.11", note: "3月単価 3.21円/kWh（高圧）、石炭比率高い構成" },
  { area: "四国電力", high: "2.35", extra: "2.29", note: "3月単価 2.35円/kWh（高圧）、原発再稼働で安定" },
  { area: "九州電力", high: "1.06", extra: "1.05", note: "3月単価 1.06円/kWh（高圧）、原発比率最大で全国最低水準" },
  { area: "沖縄電力", high: "3.75", extra: "3.68", note: "3月単価 3.75円/kWh（高圧）、島嶼系統で全国最高水準" },
];

const jepxMar = [
  { area: "北海道", value: "10.8" },
  { area: "東北", value: "10.6" },
  { area: "東京", value: "11.2" },
  { area: "中部", value: "11.0" },
  { area: "北陸", value: "10.7" },
  { area: "関西", value: "11.1" },
  { area: "中国", value: "10.9" },
  { area: "四国", value: "10.8" },
  { area: "九州", value: "10.5" },
  { area: "沖縄", value: "14.5" },
];

const industryImpactMar = [
  { industry: "製造業（24時間操業）", impact: "中", reason: "連続稼働で補助縮小の影響を全使用量で受ける。3月縮小幅は限定的だが、4月以降の終了に備えて固定プランの検討開始が望ましい" },
  { industry: "製造業（日中操業）", impact: "中", reason: "補助縮小の影響あり。3月時点では落ち着いた水準で、契約見直しの最終準備に充てやすい月" },
  { industry: "病院・医療機関", impact: "中", reason: "24時間稼働で補助縮小の絶対額大。3月のうちに春以降のデマンド管理と予算見直しを完了するのが好ましい" },
  { industry: "データセンター", impact: "高", reason: "高ベースロードで補助縮小・終了の絶対額が最大級。3月のうちに容量拠出金4月開始の織り込みを完了" },
  { industry: "オフィスビル", impact: "低", reason: "3月は中間期で空調需要少。4月以降の構造変化前に契約見直しを進めるタイミング" },
  { industry: "商業施設・スーパー", impact: "中", reason: "冷蔵稼働で常時負荷。3月時点では補助縮小幅は限定的、夏季ピーク前の準備期間" },
  { industry: "ホテル・宿泊", impact: "低", reason: "3月は通常需要期で補助縮小の影響は限定的。閑散期前の見直しタイミング" },
  { industry: "飲食チェーン", impact: "低", reason: "3月は中間期、本格化は7月以降。今のうちに固定プラン年契約への切替検討が望ましい" },
];

const reviewChecklistMar = [
  "3月使用分の請求書（4月中旬請求）で補助縮小が反映されているか（低圧 1.50円/kWh、高圧 0.80円/kWh）を確認",
  "燃料費調整額の単価が前月比でどの方向に動いたか（電力会社ごとに差が大きい、東電 +0.14円・中部 +0.17円が顕著）を点検",
  "4月使用分から始まる容量拠出金本格徴収のインパクトを契約電力ベースで試算",
  "5月使用分の再エネ賦課金新単価（4.18円/kWh、+0.20円/kWh 上振れ）の年間累計インパクトを2026年度予算に反映",
  "4月以降の補助終了に備えて、固定 vs 市場連動のリスクシナリオを5月中旬までに最終判断",
  "業種別影響度マトリックスで自社の優先度を確認、4月までに意思決定する案件を絞り込む",
];

const faqItems = [
  {
    question: "2026年3月から政府電気・ガス料金支援が縮小されたが、3月の電気料金にどう影響する？",
    answer:
      "資源エネルギー庁の電気・ガス料金支援は、2026年1月・2月使用分の低圧4.50円/kWh、高圧2.30円/kWhから、3月使用分は低圧1.50円/kWh、高圧0.80円/kWhへ縮小されました。年間使用量100万kWhの低圧法人で月25万円→月12.5万円程度に圧縮、つまり3月時点で補助減額分の負担増が請求書に反映されます。",
  },
  {
    question: "3月のJEPXスポット価格は前月比でどうだった？",
    answer:
      "2026年3月のJEPXエリア平均は10.5〜11.5円/kWh（速報値）で、2月とほぼ横ばい〜微増の水準です。3月は暖房需要終わり・冷房需要前の谷間で、需給がバランスする時期。前年同月比では +20〜30%（2025/3は8.5円/kWh程度）と上昇傾向が続いていますが、4月後半以降の上昇予兆を注視する必要があります。",
  },
  {
    question: "3月の主要電力10社の燃料費調整額の動向は？",
    answer:
      "業界平均では前月比 +0.05〜+0.17円/kWh（高圧 3月確定値、新電力ネット集計）の小幅上昇。中部電力ミライズ +0.17円/kWh、東京電力EP +0.14円/kWh が上昇率トップ。北海道電力は +0.05円/kWhで最小上昇。電力会社により方向性が異なるため、自社契約先の単価動向の個別確認が必要です。",
  },
  {
    question: "業種別では3月の電気料金影響度はどう違う？",
    answer:
      "影響度が最大なのはデータセンター（高ベースロードで補助縮小・終了の絶対額大）、次点は製造業・病院・商業施設の中影響度ゾーン。3月時点では補助縮小幅が限定的（1/3水準）のため、4-5月の本格終了前に準備を進める時期です。3月のうちに固定プラン切替判断と容量拠出金4月開始の織り込みを完了させることが望まれます。",
  },
  {
    question: "4月以降の構造変化に向けて法人企業が3月時点で確認すべきことは？",
    answer:
      "①4月開始の容量拠出金本格徴収のインパクト試算（首都圏 14,812円/kW × 契約電力）、②5月施行の再エネ賦課金 +0.20円/kWh の年間累計試算、③補助完全終了後の実力値ベース請求の試算、の3点。3月時点では2026年度予算の前提を見直す最終タイミング。固定プラン切替や設備対策の意思決定を3〜4月の間に進めることが望ましいです。",
  },
  {
    question: "3月使用分の安さを通年の基準にしてもよい？",
    answer:
      "推奨しません。3月使用分は政府補助が縮小されたとはいえまだ残っており（低圧 1.50円/kWh、高圧 0.80円/kWh）、JEPX も比較的安定した水準でした。一方で4月使用分は補助最終月で5月以降は完全終了、5月使用分から再エネ賦課金 +0.20円/kWh が上乗せされ、容量拠出金 4月本格化もあります。3月の水準を基準化せず、4月以降の構造変化を織り込んだ年間予算で考えてください。",
  },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電気・ガス料金支援・燃料費調整・再エネ賦課金告示情報" },
  { name: "新電力ネット 燃料費調整単価の推移", url: "https://pps-net.org/statistics/adjust", description: "主要電力10社の月次燃調実績データ" },
  { name: "JEPX 一般社団法人 日本卸電力取引所", url: "https://www.jepx.org", description: "卸電力市場のスポット価格・成約データ（10エリア）" },
  { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給状況・容量市場・系統運用情報" },
];

export default function BusinessElectricityRetrospective202603Page() {
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
          { name: "2026年3月" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年3月</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年3月】法人の電気料金はどう動いた？</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            政府電気・ガス料金支援の縮小開始 + JEPX 安定 + 4 月以降の構造変化前夜という位置づけの月
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年3月使用分の法人向け電気料金は、補助縮小局面の入口として位置づけられる月です。資源エネルギー庁の電気・ガス料金支援では、2026年1月・2月使用分の低圧4.50円/kWh、高圧2.30円/kWhから、3月使用分は低圧1.50円/kWh、高圧0.80円/kWhへ約1/3水準まで縮小されました。手厚かった冬の補助局面が終わり、補助の縮小幅が請求書に表れ始める最初の月です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方で、3月使用分にはまだ補助が残っており、JEPXスポット価格も10.5〜11.5円/kWhの比較的安定した水準で推移しました。3月は暖房需要が落ち着き、冷房需要も本格化しない需給バランスの良い月であるため、燃料費調整の単価上昇も小幅にとどまっています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、2026年3月使用分は「補助あり最終局面の落ち着き」と「4月以降の構造変化前夜」という二つの顔を持つ月として捉える必要があります。4月使用分から容量拠出金の本格徴収が始まり、5月使用分からは再エネ賦課金 +0.20円/kWh の上振れと補助完全終了が重なるため、3月は2026年度の予算策定と契約見直しの意思決定を進める最終的なタイミングでもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この記事では、当社団が運営している「新電力ネット」のデータと経産省・JEPX・OCCTO の公開情報をもとに、2026年3月使用分の電気料金動向を、低圧・高圧・特別高圧と業種別の影響度の両面から整理します。
          </p>
        </header>

        <TableOfContents />

        <MonthlyDataCards data={MAR_2026_DATA} />
        <p className="mt-2 rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-xs leading-6 text-slate-600">
          【データ更新 2026-07-09】本ページの単価データは、電力・ガス取引監視等委員会「電力取引報」の確定値に基づき更新しました。初出時は公表前月について速報的な参考値を含んでいました。最新月の確定値は公表され次第、順次反映します。
        </p>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年3月の結論3点</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                政府電気・ガス料金支援が縮小開始。3月使用分は低圧1.50円/kWh、高圧0.80円/kWhへ約1/3水準まで圧縮され、1〜2月の手厚い補助局面からの転換点となりました。
              </li>
              <li>
                JEPXスポット価格は10.5〜11.5円/kWh前後で安定推移。暖房需要終わり・冷房需要前の谷間で、燃料費調整の単価も電力会社平均で前月比 +0.05〜+0.17円/kWh の小幅上昇にとどまりました。
              </li>
              <li>
                3月は「補助あり最終局面の落ち着き」と「4月以降の構造変化前夜」という二面性の月。4月使用分の容量拠出金本格徴収、5月使用分の再エネ賦課金上振れ・補助完全終了を控え、契約見直しと予算修正の最終タイミングです。
              </li>
            </ol>
          </section>

          <MonthlyTrendChart data={MAR_2026_DATA} />
          <YearComparisonTable data={MAR_2026_DATA} />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜ2026年3月使用分は落ち着いて見えたのか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年3月使用分を理解するうえで最初に押さえたいのは、3月は補助・燃料・需給のいずれもが「相対的に静かな局面」にあったという点です。1〜2月の手厚い補助局面ほどの強い下押し圧力はないものの、3月使用分には依然として補助が残っており、JEPX も冷房需要本格化前の安定期で、燃料費調整の上昇も小幅にとどまりました。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              当社団が運営している「新電力ネット」の解説でも、近年の電気料金は「政府の補助の有無」と「燃料・市場の動向」によって左右されており、2026年3月は補助縮小と燃料安定の双方が同時に作用した結果として、前月比で大きな変動が表面化しなかったと整理されます。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              資源エネルギー庁の案内でも、2026年3月使用分の支援額は低圧1.50円/kWh、高圧0.80円/kWhと、1〜2月の約1/3水準まで縮小されました。これは「補助縮小開始」の信号であり、4月使用分はさらに縮小、5月使用分から終了予定という段階的削減のロードマップに沿っています。3月時点での落ち着きは、補助頼みの安定であって、市場が本質的に安定したというわけではない点に注意が必要です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              つまり、3月使用分の落ち着きは、補助縮小開始の信号を確認する月であると同時に、4月以降の構造変化前夜の準備期間として捉えるのが実務的です。この点を意識しておかないと、4月使用分の容量拠出金本格化と、5月使用分の補助完全終了 + 再エネ賦課金上振れで「想定外」の負担増を感じる可能性があります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧（電灯・電力）は、小規模事業所・店舗・サービス拠点で広く使われる契約区分です。2026年3月使用分の低圧電灯は約 23.10円/kWh、低圧電力は約 27.37円/kWh の水準で、前月比はそれぞれ +0.43円、+3.36円。前月の2月使用分が補助最大かつ低圧電力の水準が大きく下がった月だったため、3月使用分はその反動として上昇し、とくに低圧電力の戻りが大きくなっています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              低圧は資源エネルギー庁の支援対象でもあり、3月使用分の補助単価は1.50円/kWh と、1〜2月の4.50円/kWh から約1/3水準まで縮小されました。実務上は、3月使用分の補助縮小が4月請求分として表れやすいため、経理や総務の担当者は「使用月」と「請求月」を分けて確認したほうが混乱しにくいです。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>コンビニ・物販店・ドラッグストアなどの小売業</li>
              <li>飲食店・カフェ・ベーカリーなどの店舗業態</li>
              <li>クリニック・サロン・整骨院などのサービス事業</li>
              <li>小規模オフィス・営業所・学習塾などの拠点</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              これらの低圧主体の事業者では、1拠点あたりの補助縮小インパクトは1kWhあたり3円差（4.50円→1.50円）で、月使用量1,000kWhの店舗で月3,000円程度の負担増となります。多店舗展開している企業では合算で大きな金額になります。3月のうちに{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">削減見直しポイント</Link>
              を確認し、4月以降の補助終了に備えた契約見直しを進めることが望ましいです。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は3月使用分まで旧単価3.98円/kWh が継続。5月使用分から4.18円/kWh の新単価へ切り替わるため、3月時点で4-5月の予算前提を見直す最終タイミングといえます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧は、工場・商業施設・病院・学校・物流施設・オフィスビルで広く使われる主力契約区分です。2026年3月使用分の高圧は約 18.92円/kWh、前月比 +0.53円・前年同月比 -2.58円の動きとなっています。前月比のプラスは補助縮小（-1.50円/kWh）と燃調変動の合計を反映した水準です。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家は使用量が大きいため、補助縮小の年間累計インパクトは、契約電力1,000kW・月使用量50万kWh規模の中規模工場で月75万円→月40万円程度（補助分のみ）。中規模工場・物流センター・大型病院では、3月時点で2026年度予算の前提を見直す必要が出てくる規模です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>中規模工場・加工場・食品工場（連続稼働で影響大）</li>
              <li>スーパー・ショッピング施設・量販店（冷蔵稼働で常時負荷）</li>
              <li>病院・介護施設・学校法人（24時間稼働の医療機関は特に注意）</li>
              <li>倉庫・物流拠点・配送センター・冷蔵倉庫（夏季ピーク前の点検重要）</li>
              <li>延床面積の大きいオフィスビル（3月中間期、6月以降本格化）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の業種別の見直しポイントは{" "}
              <Link href="/articles/industry-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の見直しポイント集（33業種）</Link>
              、契約見直しの全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。3月のうちに4月の容量拠出金本格化、5月の補助完全終了に備えた最終調整を進めることが推奨されます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は、大規模工場・データセンター・大型商業施設・自治体の基幹施設・大規模病院など、非常に大きな電力需要を持つ事業者が中心です。2026年3月使用分の特別高圧は約 16.58円/kWh、前月比 -0.10円・前年同月比 -1.42円の動きで、4区分のなかで最も安定した推移にとどまっています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              当社団が運営している「新電力ネット」の解説では、特別高圧は政府補助の対象外であり、主に天然ガスや石炭の価格変動の影響を受けると整理されています。このため、2026年3月使用分についても、特別高圧では低圧・高圧のような「補助縮小による下押しの剥落」は前面に出ません。一方で燃料費調整は前月比 +0.05〜+0.17円/kWh で電力会社により差があり、東京電力EP +0.14円/kWh、中部電力ミライズ +0.17円/kWh が顕著な上昇となっています。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>素材・化学・金属・機械などの大規模工場</li>
              <li>24時間稼働の生産拠点・データセンター・大規模サーバー施設</li>
              <li>大型商業施設・再開発拠点</li>
              <li>自治体の上下水道施設・大型公共施設</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              こうした需要家では、3月単月の請求額よりも、4月開始の容量拠出金本格徴収のインパクト（首都圏 14,812円/kW × 契約電力）、5月施行の再エネ賦課金 +0.20円/kWh の年間累計、燃料価格の今後の動きをどう備えるかが重要です。特別高圧需要家にとっては{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整の総合解説</Link>
              、{" "}
              <Link href="/jepx-spot-price-dashboard" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット価格ダッシュボード</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              が実務的な参照先になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">どんな企業が2026年3月の影響を受けやすかったか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年3月使用分の影響度は、業種・契約区分・操業形態によって大きく異なります。業種別影響度マトリックスでは、データセンターが影響度「高」、製造業・病院・商業施設が「中」、オフィスビル・ホテル・飲食チェーンが「低」と整理できます。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">業種</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">影響度</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な要因と3月の見直しポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {industryImpactMar.map((row) => (
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
              3月時点では補助縮小幅が限定的なため、業種ごとの影響度は4-5月ほど鮮明には表れません。一方で、3月は4月の容量拠出金本格化・5月の補助完全終了に向けた最終調整月であるため、影響度「高」「中」の業種では契約見直しと予算修正の意思決定を3月中に進めることが望まれます。業種別の詳しい見直しポイントは{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院</Link>
              ／{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場</Link>
              ／{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター</Link>
              などの個別記事を参照してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3月使用分をそのまま安心材料にしない理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              3月使用分は確かに落ち着いて見える月ですが、それは補助の残存と燃料安定の重なりによるもの。4月使用分で容量拠出金が本格徴収、5月使用分で再エネ賦課金 +0.20円/kWh の上振れと補助完全終了が重なるため、「3月の水準が続く」と見るのは早い可能性があります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>補助を除いた実力ベース単価がどうか</li>
              <li>4月使用分で容量拠出金がいくら積み上がるか（首都圏 14,812円/kW × 契約電力）</li>
              <li>5月使用分で再エネ賦課金 +0.20円/kWh × 年間使用量がいくらになるか</li>
              <li>5月使用分で補助完全終了によりさらにどの程度負担が増えるか</li>
              <li>拠点ごとに契約区分・電力会社がどう違うか</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              このため、2026年3月使用分を見て「まだしばらく落ち着きそうだ」と判断するのは少し早いといえます。企業としては、3月使用分の結果だけを見るのではなく、4-5月以降の構造変化まで含めて見ておく必要があります。3月は「補助あり最終局面の落ち着き」と「4月以降の構造変化前夜」の境目を確認する月として位置づけてください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気料金を動かす補助以外の要因</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年3月使用分の下押し要因として、補助の残存は大きかったです。一方で、電気料金の全体像はそれだけでは説明できません。当社団が運営している「新電力ネット」の解説では、電気料金が上下する主な要因として、LNGと石炭の価格変動、国内の電力供給力不足、再エネ賦課金の変動、容量市場の制度導入が挙げられています。さらに、日本の火力発電は天然ガスや石炭への依存が大きく、その値上がりは日本の電気料金に直結すると説明されています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              3月時点では燃料費調整の単価が小幅な上昇（前月比 +0.05〜+0.17円/kWh）にとどまっており、JEPX も10.5〜11.5円/kWh の安定圏内でした。一方で、容量市場 2026年度本格徴収準備、東京電力エナジーパートナーの法人向け料金改定（4/1 実施）、再エネ賦課金 5月新単価告示（3/19 経産省告示）といった構造変化は、3月時点ですでに業界内で大きな話題となっており、4月以降の請求書への波及が確実視されていました。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              つまり、2026年3月使用分は請求額が落ち着いて見えていても、その背後にある構造リスク（容量拠出金・賦課金・補助終了）が積み上がっていく状況だったわけです。法人としては、目先の請求額の安定と中期的なコストリスクを分けて考える必要があります。全体構造としての{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気料金が上がる理由</Link>
              、{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              も併せてご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年3月時点で企業が確認しておきたいこと</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              3月は4月以降の構造変化前夜であるため、3月中に意思決定を完了させるべき項目が多くあります。次の3視点で3月中に意思決定を進めることが、4-5月以降の上振れリスク抑制と年間予算の安定運用につながります。
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">①4月開始の容量拠出金本格徴収のインパクト試算</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  容量市場の容量拠出金は2026年4月から法人料金に本格反映開始。首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担となります。3月のうちに自社の契約電力ベースでの試算と、2026年度予算への織り込みを完了させてください。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">②5月施行の再エネ賦課金 +0.20円/kWh の年間累計試算</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  3/19 経産省告示で2026年度の再エネ賦課金は4.18円/kWh（過去最高）と確定。前年度（2025年度）3.98円/kWh から +0.20円/kWh の上振れが5月使用分から全使用量に上乗せされます。年間使用量100万kWh の法人で年20万円増、1,000万kWh で年200万円増の影響です。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">③補助完全終了後の実力値ベース請求の試算</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  政府電気・ガス料金支援は4月使用分（5月検針）で最終、5月使用分以降は終了予定。3月使用分の請求書から補助分を除いた実力値ベースの単価を算出し、5月以降の予算前提として置き直してください。固定 vs 市場連動のリスクシナリオ比較も3月中に進めるのが目安です。
                </p>
              </div>
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

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">月次サマリー：2026年3月の電気料金概況</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年3月使用分の主要指標と政府補助縮小スケジュール、主要電力10社の燃料費調整、JEPX エリア平均をまとめました。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">政府電気・ガス料金支援の縮小スケジュール</h3>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">対象月</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">低圧 補助単価</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">高圧 補助単価</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {subsidySchedule.map((row) => (
                    <tr key={row.label} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.label}</td>
                      <td className="border-b border-slate-200 px-3 py-2">{row.lowVoltage}</td>
                      <td className="border-b border-slate-200 px-3 py-2">{row.highVoltage}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">3月の主要電力10社 燃料費調整額（高圧・特別高圧）</h3>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">電力会社</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">高圧 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">特別高圧 (円/kWh)</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {fuelAdjustmentMar.map((row) => (
                    <tr key={row.area} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.area}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.high}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-right tabular-nums">{row.extra}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-xs text-slate-600">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">JEPX エリア平均（2026年3月、円/kWh）</h3>
            <div className="mt-3 grid gap-2 md:grid-cols-5 lg:grid-cols-5">
              {jepxMar.map((row) => (
                <div key={row.area} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                  <span className="font-semibold text-slate-900">{row.area}</span>
                  <span className="ml-2 tabular-nums text-slate-700">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">※速報値・新電力ネット集計ベース。実際の単価は各電力会社の公表値で再確認してください。{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">2026年3月 主要業界ニュース 5 件</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>政府電気・ガス料金支援 3 月分減額（1-2 月の手厚い補助から低圧 4.50→1.50円/kWh、高圧 2.30→0.80円/kWh の段階的減額に移行）。</li>
              <li>容量市場 2026 年度本格徴収準備（4 月から容量拠出金が法人料金に本格反映開始、業界全体で「春からの構造変化」議論が活発化）。</li>
              <li>再エネ賦課金 5 月新単価告示（3/19 経産省告示で 5 月以降 4.18円/kWh 確定、過去最高値として業界誌でも話題に）。</li>
              <li>冬季ピーク需要 過去 5 年平均並み（暖冬影響で需要急増は回避、一部地域（北海道・東北）では寒波で局所的なピーク）。</li>
              <li>JEPX 価格 安定推移（1-2 月の高騰局面から落ち着き、燃料市場の安定化が背景。4 月後半以降の上昇予兆を注視）。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              3月時点の確認チェックリストは次の通りです：
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {reviewChecklistMar.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs text-slate-500">
              ※本記事の数値は2026年4月15日時点の確定値です。再エネ賦課金（経産省告示）、燃調 3月分（新電力ネット集計）、JEPX スポット価格をベースとしています。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年3月使用分の法人向け電気料金は、政府補助縮小開始（低圧4.50→1.50円/kWh、高圧2.30→0.80円/kWh）と JEPX スポット価格の安定推移（10.5〜11.5円/kWh）が同時に作用した月でした。前月比は契約区分により -0.1〜+3.4円/kWh（特別高圧はほぼ横ばい、低圧電力は前月の大きな低下からの反動で戻りが大きめ）となった一方、前年同月比では -1.1〜-2.6円/kWh の低下傾向（2025年3月の高騰局面を経た反動）となっています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              一方で、3月は「補助あり最終局面の落ち着き」と「4月以降の構造変化前夜」の境目を確認する月でもありました。4月使用分から容量拠出金の本格徴収、5月使用分から再エネ賦課金 +0.20円/kWh の上振れと補助完全終了が重なるため、3月は2026年度の予算策定と契約見直しの意思決定を進める最終的なタイミングだったといえます。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2026年3月使用分をどう見るかは、「落ち着いた」という結果だけでなく、それが補助残存と燃料安定の重なりによるものだったこと、契約区分ごとに効き方が違うこと、その後の補助完全終了・容量拠出金本格化・賦課金上振れで何が起きるかまで含めて考えることが大切です。
            </p>
          </section>

          <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt={publishedDate} />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">関連ページ</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/business-electricity-retrospective"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                法人電気料金振り返り一覧
              </Link>
              <Link
                href="/business-electricity-retrospective/2026-04"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                2026年4月の記事を見る
              </Link>
              <Link
                href="/business-electricity-retrospective/2026-02"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                2026年2月の記事を見る
              </Link>
              <Link
                href="/renewable-energy-surcharge-2026"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                2026年度の再エネ賦課金（5月施行）
              </Link>
            </div>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/business-electricity-retrospective/2026-04", title: "2026年4月の振り返り", description: "次月：補助最終月・容量拠出金本格化の局面" },
              { href: "/business-electricity-retrospective/2026-05", title: "2026年5月の振り返り", description: "再エネ賦課金改定後の本格運用月" },
              { href: "/business-electricity-retrospective/2026-02", title: "2026年2月の振り返り", description: "前月：補助厚い局面の最終確認" },
              { href: "/business-electricity-retrospective/2026-01", title: "2026年1月の振り返り", description: "補助復活直後の改善局面" },
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "全月次振り返り一覧と長期推移" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "3月動向の理解に必須のサブピラー" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "5/1改定の背景と仕組み" },
              { href: "/renewable-energy-surcharge-2026", title: "2026年度の再エネ賦課金", description: "新単価4.18円/kWhの解説" },
              { href: "/market-price-adjustment", title: "市場価格調整の総合解説", description: "JEPX連動契約のリスク" },
              { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本" },
              { href: "/business-electricity-cost-reduction-review-points", title: "削減見直し7ポイント", description: "包括的削減ガイド" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備で確認すべき項目" },
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（33業種）", description: "業種別の負荷特性と契約最適化" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "高ベースロード DC の見直し" },
              { href: "/executive-cfo-electricity-basics", title: "CFO向け電気料金基礎", description: "経営層向け説明資料" },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="2026年3月の電気料金動向を踏まえ、自社の契約条件をシミュレーターで診断してください。4月以降の構造変化前の最終確認に活用できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/monthly-review", label: "他の月次振り返りを見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />
      </main>
    </>
  );
}
