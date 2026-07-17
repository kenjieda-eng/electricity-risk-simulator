import type { Metadata } from "next";
import Link from "next/link";
import { MonthlyDataCards, MonthlyTrendChart, YearComparisonTable } from "../_components/MonthlyVisuals";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../../components/simulator/SourcesAndFaq";
import TableOfContents from "../../../components/market-data/TableOfContents";
import AuthorBadge from "../../../components/market-data/AuthorBadge";

const pageTitle = "【2026年4月】法人の電気料金はどう動いた？政府補助最終月・容量拠出金本格化";
const pageDescription =
  "2026年4月使用分の法人電気料金動向を整理。政府電気・ガス料金支援最終月、容量拠出金2026年度本格徴収開始、東京電力法人向け料金改定初月の局面を低圧・高圧・特別高圧と業種別影響度で詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/2026-04";
const publishedDate = "2026-05-15";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 2026年4月",
    "4月 電気料金 振り返り",
    "政府補助 終了 電気料金",
    "容量拠出金 2026年度",
    "東京電力 法人 料金改定",
    "JEPX 4月",
    "燃料費調整 4月",
    "再エネ賦課金 旧単価 最終月",
    "高圧 電気料金 2026",
    "特別高圧 電気料金 2026",
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
      { url: "/api/og/monthly-review", width: 1200, height: 630, alt: "2026年4月の法人向け電気料金動向" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/monthly-review"],
  },
};

// 2026年4月の確定値（電力取引報・令和8年4月分・2026-07-17公表）
const APR_2026_DATA = {
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
    { year: 2023, values: [23.6, 24.3, 25.2, 28.0] as [number, number, number, number] },
    { year: 2024, values: [18.1, 20.7, 24.9, 28.5] as [number, number, number, number] },
    { year: 2025, values: [18.05, 21.99, 27.04, 32.33] as [number, number, number, number] },
    { year: 2026, values: [17.56, 21.37, 25.94, 32.12] as [number, number, number, number] },
  ],
};

const structuralChanges = [
  { label: "①政府電気・ガス料金支援 最終月", detail: "4月使用分（5月検針）で支援終了。5月使用分以降は値引きなしの実力ベース請求へ移行。低圧・高圧の補助縮小単価がこの月で打ち止め。" },
  { label: "②容量拠出金 2026年度本格徴収開始", detail: "首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担が4月使用分から始動。10エリアで単価差あり、地域ごとの影響度を要確認。" },
  { label: "③東京電力EP 法人向け料金改定 初月", detail: "4/1 から特別高圧・高圧の料金プラン改定（基本料金値下げ + 電力量料金値上げ）。省エネ努力企業に有利・24h 稼働企業は実質値上げとなるケースが多い。" },
];

const fuelAdjustmentApr = [
  { area: "北海道電力", high: "1.74", extra: "1.69", note: "4月単価 1.74円/kWh（高圧）、前月比 -0.09円で例外的減少" },
  { area: "東北電力", high: "2.88", extra: "2.78", note: "4月単価 2.88円/kWh（高圧）、前月比 +0.12円" },
  { area: "東京電力EP", high: "2.67", extra: "2.63", note: "4月単価 2.67円/kWh（高圧）、前月比 +0.15円・法人料金改定初月" },
  { area: "中部電力ミライズ", high: "1.14", extra: "1.12", note: "4月単価 1.14円/kWh（高圧）、前月比 +0.22円で上昇率最大" },
  { area: "北陸電力", high: "2.28", extra: "2.25", note: "4月単価 2.28円/kWh（高圧）、前月比 0.00円で横ばい" },
  { area: "関西電力", high: "2.73", extra: "2.70", note: "4月単価 2.73円/kWh（高圧）、原発比率高い構成" },
  { area: "中国電力", high: "3.28", extra: "3.18", note: "4月単価 3.28円/kWh（高圧）、石炭比率高い構成" },
  { area: "四国電力", high: "2.37", extra: "2.31", note: "4月単価 2.37円/kWh（高圧）、原発再稼働で安定" },
  { area: "九州電力", high: "1.14", extra: "1.12", note: "4月単価 1.14円/kWh（高圧）、原発比率最大で全国最低水準" },
  { area: "沖縄電力", high: "3.72", extra: "3.65", note: "4月単価 3.72円/kWh（高圧）、島嶼系統で全国最高水準" },
];

const jepxApr = [
  { area: "北海道", value: "10.2" },
  { area: "東北", value: "9.8" },
  { area: "東京", value: "10.5" },
  { area: "中部", value: "10.3" },
  { area: "北陸", value: "10.0" },
  { area: "関西", value: "10.4" },
  { area: "中国", value: "10.2" },
  { area: "四国", value: "10.1" },
  { area: "九州", value: "9.7" },
  { area: "沖縄", value: "13.8" },
];

const industryImpactApr = [
  { industry: "製造業（24時間操業）", impact: "高", reason: "連続稼働で容量拠出金本格化の絶対額が最大級。東電法人料金改定の電力量料金値上げで実質値上げになりやすい" },
  { industry: "製造業（日中操業）", impact: "中", reason: "容量拠出金の影響あり。東電改定では基本料金値下げが効きやすく、改定後の請求書で個別検証が必要" },
  { industry: "病院・医療機関", impact: "高", reason: "24時間稼働で容量拠出金本格化と東電改定の影響が大。補助終了を控え5月以降の予算修正が急務" },
  { industry: "データセンター", impact: "高", reason: "高ベースロードで容量拠出金の絶対額が最大級。年間数千万〜数億円規模の追加負担。再エネPPA併用の検討必須" },
  { industry: "オフィスビル", impact: "中", reason: "4月は中間期で空調需要少。東電改定では基本料金値下げが効きやすいケースが多い。改定後の請求書で要検証" },
  { industry: "商業施設・スーパー", impact: "中", reason: "冷蔵稼働で常時負荷大。容量拠出金本格化と補助終了が同時進行、5月以降のピーク前に冷凍機 COP 改善要検討" },
  { industry: "ホテル・宿泊", impact: "中", reason: "GW繁忙期と通常期のコントラスト大。容量拠出金は契約電力ベースのため、ピーク時間の調整余地を要確認" },
  { industry: "飲食チェーン", impact: "低", reason: "4月は中間期、本格化は7月以降。低圧契約が多く容量拠出金は対象外。固定プラン年契約への切替検討の好機" },
];

const reviewChecklistApr = [
  "4月使用分の請求書（5月中旬請求）で政府補助の最終反映を確認、5月以降の補助なし請求書への準備",
  "容量拠出金本格徴収のインパクトを契約電力ベースで実額確認（首都圏 14,812円/kW × 契約電力）",
  "東京電力エナジーパートナー法人向け料金改定の影響を、自社の使用パターンで再試算（基本料金値下げ vs 電力量料金値上げのトレードオフ）",
  "燃料費調整額の前月比上昇トップ3（東電 +0.15円、中部 +0.22円、東北 +0.12円）の電力会社契約先で個別単価を確認",
  "5月使用分から始まる再エネ賦課金新単価（4.18円/kWh、+0.20円/kWh 上振れ）の年間累計インパクトを2026年度予算に最終反映",
  "ホルムズ海峡リスクで上昇予兆のJEPX動向（4月後半から上昇）を踏まえ、市場連動プラン採用法人は5月中旬までに固定切替の最終判断",
];

const faqItems = [
  {
    question: "2026年4月使用分は政府補助の最終月とのことですが、5月使用分はどうなる？",
    answer:
      "資源エネルギー庁の電気・ガス料金支援は4月使用分（5月検針）で終了予定。5月使用分以降は値引きなしの実力値ベース請求に移行します。補助縮小局面の3月から完全終了への移行が4月で完結し、5月使用分から再エネ賦課金 +0.20円/kWh 上振れ・容量拠出金完全反映と重なって、構造的な負担増が顕在化します。",
  },
  {
    question: "容量拠出金 2026年度本格徴収のインパクトは？",
    answer:
      "容量市場の容量拠出金は2026年4月から本格徴収開始。首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担が発生します。10エリアで単価差があり、関西・中部などのエリアでも数千円/kW〜の規模。データセンター（契約電力 数万kW）では年間数千万円〜数億円規模、中規模工場（1,000kW 規模）で年間1,000万円超の影響です。",
  },
  {
    question: "東京電力エナジーパートナーの法人向け料金改定の影響は？",
    answer:
      "2026/4/1 から特別高圧・高圧の料金プラン改定（基本料金値下げ + 電力量料金値上げ）。省エネ努力企業（電力量当たりの単価重視ではなく契約電力を抑える企業）には有利になり、24時間稼働企業（高ベースロードで電力量が大きい）は実質値上げになりやすい構造です。改定後の請求書を自社の使用パターンで個別検証する必要があります。",
  },
  {
    question: "4月のJEPXスポット価格は3月と比べてどう動いた？",
    answer:
      "2026年4月のJEPXエリア平均は9.5〜11.0円/kWh（速報値）で、3月（10.5〜11.5円/kWh）からやや低下。4月前半はGW前の需要落ち着きで低水準、4月後半からは原油・LNG価格上昇（ホルムズ海峡リスク台頭）で上昇予兆。前年同月比では +15〜25%（2025/4は8.3円/kWh程度）の上昇傾向です。",
  },
  {
    question: "業種別では4月の電気料金影響度はどう違う？",
    answer:
      "影響度が最大なのはデータセンター・製造業（24時間操業）・病院（高影響度ゾーン）で、容量拠出金本格化と東電改定の影響が複合的に表面化。オフィスビル・商業施設・ホテル・製造業（日中操業）は中影響度、飲食チェーンは低影響度（低圧契約中心で容量拠出金対象外）。業種別の見直しタイミングは4月中旬〜5月中に最終調整を完了するのが目安です。",
  },
  {
    question: "4月の主要電力10社の燃料費調整額の動向は？",
    answer:
      "業界平均では前月比 -0.09〜+0.22円/kWh（高圧 4月確定値、新電力ネット集計）。中部電力ミライズ +0.22円/kWh が上昇率最大、東京電力EP +0.15円/kWh、東北電力 +0.12円/kWh が続く。北海道電力は -0.09円/kWhで例外的に減少、北陸電力 0.00円/kWh で横ばい。電力会社により方向性が大きく異なるため、自社契約先の個別確認が必要です。",
  },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電気・ガス料金支援・燃料費調整・再エネ賦課金告示情報" },
  { name: "新電力ネット 燃料費調整単価の推移", url: "https://pps-net.org/statistics/adjust", description: "主要電力10社の月次燃調実績データ" },
  { name: "JEPX 一般社団法人 日本卸電力取引所", url: "https://www.jepx.org", description: "卸電力市場のスポット価格・成約データ（10エリア）" },
  { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給状況・容量市場・系統運用情報" },
];

export default function BusinessElectricityRetrospective202604Page() {
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
          { name: "2026年4月" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">2026年4月</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年4月】法人の電気料金はどう動いた？</h1>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            政府補助の最終月 + 容量拠出金本格化開始 + 東京電力法人向け料金改定初月という3つの構造変化が重なる月
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年4月使用分の法人向け電気料金は、3つの構造変化が同時に進行する重要な転換月です。第一に、資源エネルギー庁の電気・ガス料金支援が4月使用分（5月検針）で終了予定となり、5月使用分以降は値引きなしの実力値ベース請求に移行します。第二に、容量市場の容量拠出金が2026年度から本格徴収開始（首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担）。第三に、東京電力エナジーパートナーの法人向け料金改定が4/1 から実施され、基本料金値下げ + 電力量料金値上げの構造で省エネ努力企業と高ベースロード企業で影響が大きく分かれる初月でもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は4月使用分まで旧単価3.98円/kWh が継続しますが、3/19 経産省告示で5月使用分以降は4.18円/kWh（過去最高、+0.20円/kWh 上振れ）の新単価に切り替わることがすでに告示済み。4月は旧単価の最終月でもあります。JEPXスポット価格は前半は安定推移したものの、後半からは原油・LNG価格上昇（ホルムズ海峡リスク台頭）で上昇予兆が顕在化してきました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、2026年4月使用分は「構造変化の前夜」というよりも「構造変化の初月」として捉える必要があります。5月以降の補助完全終了 + 再エネ賦課金上振れ + 容量拠出金完全反映 + JEPX上昇局面が複合的に作用するため、4月は2026年度の予算修正と契約見直しの最終判断を進める月となりました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この記事では、当社団が運営している「新電力ネット」のデータと経産省・JEPX・OCCTO の公開情報をもとに、2026年4月使用分の電気料金動向を、低圧・高圧・特別高圧と業種別の影響度の両面から整理します。
          </p>
        </header>

        <TableOfContents />

        <MonthlyDataCards data={APR_2026_DATA} />
        <p className="mt-2 rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-xs leading-6 text-slate-600">
          【データ更新 2026-07-09】本ページの単価データは、電力・ガス取引監視等委員会「電力取引報」の確定値に基づき更新しました。初出時は公表前月について速報的な参考値を含んでいました。最新月の確定値は公表され次第、順次反映します。
        </p>
        <p className="mt-2 rounded-md border border-sky-200 bg-sky-50 px-3 py-2 text-xs leading-6 text-slate-600">
          【データ更新 2026-07-17】2026年4月分の単価は、電力取引報の確定値（2026年7月17日公表）に更新しました。
        </p>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年4月の結論3点</h2>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                政府電気・ガス料金支援の最終月。4月使用分（5月検針）で支援終了、5月使用分以降は値引きなしの実力値ベース請求へ移行。低圧・高圧の補助縮小単価がこの月で打ち止めとなりました。
              </li>
              <li>
                容量拠出金2026年度本格徴収開始月。首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担。データセンター・大規模製造業では年間数千万〜数億円規模の影響が4月使用分から始動しました。
              </li>
              <li>
                東京電力EP法人向け料金改定の初月。4/1 から特別高圧・高圧の料金プラン改定（基本料金値下げ + 電力量料金値上げ）。省エネ努力企業に有利・24h 稼働企業は実質値上げとなりやすい構造です。4月は2026年度予算と契約戦略の最終判断月でした。
              </li>
            </ol>
          </section>

          <MonthlyTrendChart data={APR_2026_DATA} />
          <YearComparisonTable data={APR_2026_DATA} />

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜ2026年4月使用分は構造変化の初月と呼ぶのか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年4月使用分を理解するうえで最初に押さえたいのは、4月は「補助・容量拠出金・東電料金改定」の3つの構造変化が同時に進行する月だったという点です。3月までの「補助あり最終局面の落ち着き」局面とは異なり、4月は構造的な負担増が請求書に表れ始める初月であり、5月以降の本格的な負担増のスタート地点でもあります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {structuralChanges.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              当社団が運営している「新電力ネット」の解説でも、近年の電気料金は「政府の補助の有無」「燃料・市場の動向」「制度的負担（賦課金・容量市場）」によって左右されており、2026年4月は補助縮小最終・容量拠出金本格化・東電改定が同時に作用した結果として、契約形態・使用パターンによって影響度が大きく分かれる月となったと整理されます。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              つまり、4月使用分は補助あり最終局面の終焉と新たな構造変化の起点を同時に確認する月であると同時に、5月以降の本格的な負担増の前哨戦としても位置づけられます。この点を意識しておかないと、5月使用分の補助完全終了 + 再エネ賦課金上振れ + JEPX 上昇局面で「想定外」の負担増を感じる可能性があります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧（電灯・電力）は、小規模事業所・店舗・サービス拠点で広く使われる契約区分です。2026年4月使用分の低圧電灯は 25.94円/kWh、低圧電力は 32.12円/kWh の水準で、前月比はそれぞれ +2.84円、+4.75円、前年同月比はそれぞれ ▲1.10円、▲0.21円です。前月比の上昇（とくに低圧電力の +4.75円）は、検針期間・料金改定・市場価格調整等の複合要因であり、単一原因の断定はしません。補助縮小がさらに進み、5月以降の完全終了を控えた最終調整月の水準でもあります。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              低圧は資源エネルギー庁の支援対象でしたが、4月使用分が補助の最終月。5月使用分以降は値引きなしの実力値ベース請求に移行します。容量拠出金は低圧契約では直接的な負担対象とならない場合が多いですが、卸電力市場経由で間接的に小売単価に反映される構造です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>コンビニ・物販店・ドラッグストアなどの小売業</li>
              <li>飲食店・カフェ・ベーカリーなどの店舗業態</li>
              <li>クリニック・サロン・整骨院などのサービス事業</li>
              <li>小規模オフィス・営業所・学習塾などの拠点</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              これらの低圧主体の事業者では、補助終了の累計インパクトに加えて、5月使用分から始まる再エネ賦課金 +0.20円/kWh の上振れが重なってきます。月使用量1,000kWh の店舗で月200円増、年間2,400円増。多店舗展開で1,000拠点を持つチェーンでは年240万円増の影響です。4月のうちに{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">削減見直しポイント</Link>
              を確認し、5月以降の本格的な負担増に備えた契約見直しを進めることが望ましいです。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は4月使用分まで旧単価3.98円/kWh が継続。5月使用分から4.18円/kWh の新単価へ切り替わるため、4月は旧単価の最終月でもあります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧は、工場・商業施設・病院・学校・物流施設・オフィスビルで広く使われる主力契約区分です。2026年4月使用分の高圧は 21.37円/kWh、前月比 +2.45円・前年同月比 ▲0.62円の動きとなっています。前月比の上昇は、検針期間・料金改定・市場価格調整等の複合要因であり、単一原因の断定はしません。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家は使用量が大きいため、4月から始まる容量拠出金本格徴収の年間累計インパクトは、契約電力1,000kW・首都圏単価14,812円/kW で年1,481万円増。中規模工場・物流センター・大型病院では、4月時点で2026年度予算の前提を全面見直しする必要が出てくる規模です。さらに東京電力EP契約の法人では、基本料金値下げ + 電力量料金値上げの構造改定の影響が4月使用分から表れ始めました。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>中規模工場・加工場・食品工場（連続稼働で容量拠出金 + 東電改定の影響大）</li>
              <li>スーパー・ショッピング施設・量販店（冷蔵稼働で常時負荷、容量拠出金影響大）</li>
              <li>病院・介護施設・学校法人（24時間稼働の医療機関は特に注意）</li>
              <li>倉庫・物流拠点・配送センター・冷蔵倉庫（夏季ピーク前の点検重要）</li>
              <li>延床面積の大きいオフィスビル（4月中間期、6月以降本格化、東電改定で基本料金値下げが効きやすい場合あり）</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の業種別の見直しポイントは{" "}
              <Link href="/articles/industry-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の見直しポイント集（33業種）</Link>
              、契約見直しの全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。4月のうちに5月の補助完全終了 + 賦課金上振れに備えた最終判断を進めることが推奨されます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は、大規模工場・データセンター・大型商業施設・自治体の基幹施設・大規模病院など、非常に大きな電力需要を持つ事業者が中心です。2026年4月使用分の特別高圧は 17.56円/kWh、前月比 +0.98円・前年同月比 ▲0.49円の動きです。前月比の上昇は、検針期間・料金改定・市場価格調整等の複合要因であり、単一原因の断定はしません。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧は燃料価格・需給・容量拠出金など構造要因が単価を主導する区分です。4月は容量拠出金本格徴収開始の月であり、データセンター（契約電力 数万kW）では年間数千万円〜数億円規模の追加負担が4月使用分から始動。東京電力EP契約の特別高圧法人では、4/1 法人料金改定の電力量料金値上げが高ベースロード需要家に実質値上げをもたらすため、改定後の請求書の個別検証が急務となりました。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>素材・化学・金属・機械などの大規模工場（連続稼働で容量拠出金 + 東電改定の影響最大）</li>
              <li>24時間稼働の生産拠点・データセンター・大規模サーバー施設（容量拠出金年数千万〜数億円規模）</li>
              <li>大型商業施設・再開発拠点</li>
              <li>自治体の上下水道施設・大型公共施設</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              こうした需要家では、4月単月の請求額よりも、容量拠出金の年間累計、東電改定後の実質単価、5月施行の再エネ賦課金 +0.20円/kWh、4月後半から上昇予兆の燃料価格をどう備えるかが重要です。特別高圧需要家にとっては{" "}
              <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整の総合解説</Link>
              、{" "}
              <Link href="/jepx-spot-price-dashboard" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXスポット価格ダッシュボード</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              が実務的な参照先になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">どんな企業が2026年4月の影響を受けやすかったか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年4月使用分の影響度は、業種・契約区分・操業形態・電力会社契約先によって大きく異なります。業種別影響度マトリックスでは、データセンター・製造業（24時間操業）・病院が影響度「高」、その他多くの業種が「中」、低圧契約中心の飲食チェーンが「低」と整理できます。
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">業種</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-center font-semibold text-slate-900">影響度</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な要因と4月の見直しポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {industryImpactApr.map((row) => (
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
              4月時点では容量拠出金本格化と東電改定が同時進行のため、業種ごとの影響度は3月以上に鮮明になります。影響度「高」「中」の業種では契約見直しと予算修正の意思決定を4月中に完了させ、5月以降の本格的な負担増に備えることが望まれます。業種別の詳しい見直しポイントは{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院</Link>
              ／{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場</Link>
              ／{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター</Link>
              などの個別記事を参照してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">4月使用分をそのまま安心材料にしない理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              4月使用分は補助の残存により単月の単価上昇が +0.2〜+1.0円/kWh の範囲にとどまっていますが、これは「構造変化の初月」を確認する材料であって、5月以降の本格的な負担増を予告するシグナルでもあります。5月使用分で補助完全終了 + 再エネ賦課金 +0.20円/kWh 上振れ + JEPX上昇局面が重なるため、「4月の水準が続く」と見るのは早い可能性があります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>補助を除いた実力ベース単価がどうか（4月の補助縮小幅を差し引いた実力値の確認）</li>
              <li>容量拠出金が契約電力ベースでいくら積み上がるか（首都圏 14,812円/kW × 契約電力）</li>
              <li>東電改定後の実質単価が、自社の使用パターンで値下げ/値上げどちらに動いたか</li>
              <li>5月使用分で再エネ賦課金 +0.20円/kWh × 年間使用量がいくらになるか</li>
              <li>5月使用分で補助完全終了によりさらにどの程度負担が増えるか</li>
              <li>JEPX 4月後半からの上昇予兆を踏まえた市場連動プランの夏季リスク</li>
              <li>拠点ごとに契約区分・電力会社・改定影響がどう違うか</li>
            </ul>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              このため、2026年4月使用分を見て「まだ補助が効いて落ち着きそうだ」と判断するのは少し早いといえます。企業としては、4月使用分の結果だけを見るのではなく、5月以降の本格的な構造変化まで含めて見ておく必要があります。4月は「構造変化の前夜」ではなく「構造変化の初月」として位置づけてください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気料金を動かす補助以外の要因</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年4月使用分の下押し要因として、補助の最終残存はそれなりに大きかったです。一方で、電気料金の全体像はそれだけでは説明できません。当社団が運営している「新電力ネット」の解説では、電気料金が上下する主な要因として、LNGと石炭の価格変動、国内の電力供給力不足、再エネ賦課金の変動、容量市場の制度導入、各電力会社の料金体系改定が挙げられています。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              4月時点では燃料費調整の単価が -0.09〜+0.22円/kWh で電力会社により方向性が大きく異なり、中部電力ミライズ +0.22円/kWh、東京電力EP +0.15円/kWh が上昇率トップ、北海道電力 -0.09円/kWh が例外的減少という形になっています。JEPX は4月前半は10円前後の安定圏内、後半からは原油・LNG価格上昇（ホルムズ海峡リスク台頭）で上昇予兆が顕在化しました。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              つまり、2026年4月使用分は単月の請求額が小幅上昇にとどまっていても、その背後では容量拠出金本格化・東電改定・補助縮小最終という3つの構造変化が同時に作用していました。法人としては、目先の請求額の安定と中期的なコストリスクを分けて考える必要があります。全体構造としての{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気料金が上がる理由</Link>
              、{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              も併せてご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">2026年4月時点で企業が確認しておきたいこと</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              4月は5月以降の本格的な構造変化前の最終判断月であるため、4月中に意思決定を完了させるべき項目が多くあります。次の3視点で4月中に意思決定を進めることが、5月以降の上振れリスク抑制と年間予算の安定運用につながります。
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">①容量拠出金本格徴収のインパクトを契約電力ベースで実額確認</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  容量市場の容量拠出金は2026年4月から本格徴収開始。首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担となります。データセンター（契約電力 数万kW）では年間数千万円〜数億円規模の影響です。4月のうちに自社の契約電力ベースでの実額確認と、2026年度予算への織り込みを完了させてください。10エリアで単価差があるため、自社所在エリアの単価を要確認です。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">②東京電力EP法人向け料金改定の影響を自社使用パターンで再試算</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  4/1 から特別高圧・高圧の料金プラン改定（基本料金値下げ + 電力量料金値上げ）が実施されました。省エネ努力企業（契約電力を抑えた企業）には有利、24時間稼働企業（電力量が大きい）は実質値上げになりやすい構造。4月の請求書（5月中旬）で自社の使用パターンでの実質単価を再試算し、契約電力の最適化余地を判断してください。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">③5月施行の再エネ賦課金 +0.20円/kWh と補助完全終了の二重インパクト試算</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  5月使用分から再エネ賦課金は4.18円/kWh（過去最高）に切り替わり、政府電気・ガス料金支援も完全終了。年間使用量100万kWh の法人で年20万円増（賦課金分のみ）、+補助分の負担増が重なる構造です。4月のうちに5月以降の予算前提を全面見直しし、固定 vs 市場連動のリスクシナリオ比較を最終判断してください。
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
            <h2 className="text-xl font-semibold text-slate-900">月次サマリー：2026年4月の電気料金概況</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年4月使用分の主要指標と3大構造変化、主要電力10社の燃料費調整、JEPX エリア平均をまとめました。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">4月の3大構造変化</h3>
            <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full border-collapse text-sm sm:text-base">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">構造変化</th>
                    <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">内容</th>
                  </tr>
                </thead>
                <tbody>
                  {structuralChanges.map((row) => (
                    <tr key={row.label} className="even:bg-slate-50">
                      <td className="border-b border-slate-200 px-3 py-2 font-medium">{row.label}</td>
                      <td className="border-b border-slate-200 px-3 py-2 text-sm text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">4月の主要電力10社 燃料費調整額（高圧・特別高圧）</h3>
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
                  {fuelAdjustmentApr.map((row) => (
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
            <h3 className="mt-5 text-lg font-semibold text-slate-900">JEPX エリア平均（2026年4月、円/kWh）</h3>
            <div className="mt-3 grid gap-2 md:grid-cols-5 lg:grid-cols-5">
              {jepxApr.map((row) => (
                <div key={row.area} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                  <span className="font-semibold text-slate-900">{row.area}</span>
                  <span className="ml-2 tabular-nums text-slate-700">{row.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">※速報値・新電力ネット集計ベース。実際の単価は各電力会社の公表値で再確認してください。{" "}
              <Link href="/fuel-cost-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の過去推移</Link>
              。再エネ賦課金は4月使用分まで旧単価3.98円/kWh、5月使用分から4.18円/kWh の新単価に切り替わります。
            </p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">2026年4月 主要業界ニュース 5 件</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>容量市場 容量拠出金 2026 年度開始（4 月から法人料金へ反映開始、首都圏 14,812円/kW、契約電力 1,000kW で年間 約 1,481 万円の追加負担）。</li>
              <li>政府電気・ガス料金支援 最終月（4 月使用分・5 月検針で支援終了、5 月使用分から値引きなしの実力値ベース請求へ移行）。</li>
              <li>東京電力エナジーパートナー 法人向け料金改定（4/1 から特別高圧・高圧の料金プラン改定、基本料金値下げ + 電力量料金値上げ、省エネ努力企業有利・24h 稼働企業は実質値上げ）。</li>
              <li>再エネ賦課金 4.18円/kWh 確定告知（5 月以降の単価を経産省が広報強化、業界全体で「賦課金過去最高」の警告強化）。</li>
              <li>JEPX 5 月以降の上昇予兆（4 月後半から JEPX 上昇傾向、原油・LNG 価格の上昇影響、ホルムズ海峡リスク台頭）。</li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              4月時点の確認チェックリストは次の通りです：
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {reviewChecklistApr.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 rounded-md bg-white px-3 py-2 text-xs text-slate-500">
              ※本記事の数値は2026年5月15日時点の確定値です。再エネ賦課金（経産省告示）、燃調 4月分（新電力ネット集計）、JEPX スポット価格をベースとしています。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年4月使用分の法人向け電気料金は、政府補助最終月・容量拠出金本格徴収開始・東京電力EP法人料金改定初月の3つの構造変化が同時に進行する重要な転換月でした。低圧・高圧・特別高圧のすべての契約区分で前月比 +0.2〜+1.0円/kWh の小幅上昇にとどまった一方、前年同月比では特別高圧 -1.1円、高圧 -0.8円、低圧電力 -2.4円の改善傾向（2025年4月の高騰局面を経た反動）。低圧電灯のみ +0.1円とほぼ横ばいです。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              一方で、4月は「構造変化の前夜」ではなく「構造変化の初月」として位置づける必要がありました。5月使用分から始まる補助完全終了 + 再エネ賦課金 +0.20円/kWh の上振れ + 容量拠出金完全反映 + JEPX 上昇局面が複合的に作用するため、4月は2026年度の予算修正と契約見直しの最終判断を進める月でした。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2026年4月使用分をどう見るかは、「補助残存で落ち着いた」という単月の結果だけでなく、それが構造変化の初月であったこと、契約区分・電力会社・操業形態ごとに効き方が大きく違うこと、その後の補助完全終了・賦課金上振れ・容量拠出金完全反映・JEPX 上昇で何が起きるかまで含めて考えることが大切です。
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
                href="/business-electricity-retrospective/2026-05"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                2026年5月の記事を見る
              </Link>
              <Link
                href="/business-electricity-retrospective/2026-03"
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                2026年3月の記事を見る
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
              { href: "/business-electricity-retrospective/2026-05", title: "2026年5月の振り返り", description: "次月：再エネ賦課金改定後の本格運用月" },
              { href: "/business-electricity-retrospective/2026-03", title: "2026年3月の振り返り", description: "前月：政府補助縮小開始・JEPX 安定の月" },
              { href: "/business-electricity-retrospective/2026-02", title: "2026年2月の振り返り", description: "補助厚い局面の最終確認" },
              { href: "/business-electricity-retrospective/2026-01", title: "2026年1月の振り返り", description: "補助復活直後の改善局面" },
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "全月次振り返り一覧と長期推移" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "4月動向の理解に必須のサブピラー" },
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
            description="2026年4月の電気料金動向を踏まえ、自社の契約条件をシミュレーターで診断してください。5月以降の本格的な構造変化に備えた最終判断に活用できます。"
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
