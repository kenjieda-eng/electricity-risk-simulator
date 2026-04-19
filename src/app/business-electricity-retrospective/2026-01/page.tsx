import type { Metadata } from "next";
import Link from "next/link";
import { getMonthlyPageData } from "../_lib/monthly-page-data";
import { MonthlyDataCards, MonthlyTrendChart, YearComparisonTable, SubsidyImpactChart } from "../_components/MonthlyVisuals";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";

const pageTitle = "【2026年1月】法人の電気料金はどう動いた？補助政策とデータで読む年明けの変化";
const pageDescription =
  "2026年1月使用分の法人向け電気料金動向を、低圧・高圧・特別高圧ごとに整理。補助政策の影響と、3月以降の補助縮小局面での実務ポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人 電気料金 2026年1月", "電気代 推移 2026", "補助政策 電気料金", "法人 電力コスト", "電気料金 振り返り"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/2026-01",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/2026-01",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/monthly-review",
        width: 1200,
        height: 630,
        alt: "2026年1月の法人向け電気料金動向",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/monthly-review"],
  },
};

// 2026年1月の概算データ（retrospective-data.tsに2026年データがないため手動定義）
const JAN_2026_DATA = {
  year: 2026,
  month: 1,
  categories: [
    { label: "特別高圧", shortLabel: "特高", value: 16.5, prevMonthValue: 16.9, diff: -0.4, prevYearValue: 18.3, prevYearDiff: -1.8 },
    { label: "高圧", shortLabel: "高圧", value: 20.5, prevMonthValue: 20.9, diff: -0.4, prevYearValue: 22.2, prevYearDiff: -1.7 },
    { label: "低圧電灯", shortLabel: "低灯", value: 25.5, prevMonthValue: 26.8, diff: -1.3, prevYearValue: 27.3, prevYearDiff: -1.8 },
    { label: "低圧電力", shortLabel: "低力", value: 27.0, prevMonthValue: 32.4, diff: -5.4, prevYearValue: 28.6, prevYearDiff: -1.6 },
  ],
  trendData: [
    { label: "2025/8", values: [17.2, 19.9, 25.9, 25.6] as [number, number, number, number] },
    { label: "2025/9", values: [16.9, 19.7, 25.7, 26.2] as [number, number, number, number] },
    { label: "2025/10", values: [16.6, 20.1, 26.2, 29.3] as [number, number, number, number] },
    { label: "2025/11", values: [16.8, 21.3, 27.3, 33.6] as [number, number, number, number] },
    { label: "2025/12", values: [16.9, 20.9, 26.8, 32.4] as [number, number, number, number] },
    { label: "2026/1", values: [16.5, 20.5, 25.5, 27.0] as [number, number, number, number] },
  ],
  sameMonthHistory: [
    { year: 2023, values: [23.9, 27.5, 31.3, 31.5] as [number, number, number, number] },
    { year: 2024, values: [18.5, 21.0, 24.7, 26.4] as [number, number, number, number] },
    { year: 2025, values: [18.3, 22.2, 27.3, 28.6] as [number, number, number, number] },
    { year: 2026, values: [16.5, 20.5, 25.5, 27.0] as [number, number, number, number] },
  ],
};

export default function BusinessElectricityRetrospective202601Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/business-electricity-retrospective/2026-01"
        datePublished="2026-02-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り", url: "https://simulator.eic-jp.org/business-electricity-retrospective" },
          { name: "2026年1月" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/business-electricity-retrospective" className="underline-offset-2 hover:underline">法人電気料金振り返り</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">2026年1月</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2026年1月】法人の電気料金はどう動いた？</h1>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          補助政策と当社団が運営している「新電力ネット」のデータから読む年明けの変化
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2026年1月使用分の法人向け電気料金は、2025年秋から続いていた上昇基調に、ひとまずブレーキがかかった月として見ることができます。
          当社団が運営している「新電力ネット」の推移データを見ると、2025年9月に少し値上がりし、10月にも上昇したあと、
          2026年1月使用分で大きく値下がりしています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          ただし、この値下がりは、電力市場そのものが急に安定したというより、政府補助の再拡大・強化が料金に強く反映された結果と見たほうが実態に近いです。
          資源エネルギー庁によると、2026年1月・2月使用分では、電気料金支援として低圧4.5円/kWh、高圧2.3円/kWhの補助が実施されています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          法人にとって重要なのは、1月使用分でなぜ料金が下がって見えたのか、低圧・高圧・特別高圧で意味合いがどう違うのか、
          その改善をどこまで安心材料と見てよいのかを切り分けて考えることです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          2026年3月末時点では、3月使用分で補助縮小が始まっており、4月使用分からは補助終了の予定です。
          そのため、2026年1月使用分の値下がりを振り返ることは、単なる過去の確認ではなく、
          「補助が厚かった局面はどこまでだったのか」を確認する作業でもあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          この記事では、当社団が運営している「新電力ネット」のデータと政府の公表情報をもとに、
          2026年1月使用分の電気料金動向を、低圧・高圧・特別高圧ごとに法人向けに整理します。
        </p>
      </header>

      <MonthlyDataCards data={JAN_2026_DATA} />

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2026年1月の結論3点</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              2026年1月使用分は、政府補助によって低圧・高圧の料金が大きく押し下げられた月でした。1月・2月使用分では低圧4.5円/kWh、
              高圧2.3円/kWhの補助が実施されています。
            </li>
            <li>
              低圧・高圧・特別高圧で意味合いは大きく異なります。低圧・高圧は補助の恩恵を受けやすい一方、特別高圧は補助対象外で、
              燃料価格や需給の影響をより直接受けます。
            </li>
            <li>
              1月使用分の改善は大きかったものの、現在はすでに3月使用分で補助縮小が始まり、4月使用分からは補助終了予定です。1月の水準が
              そのまま続く前提で判断しないことが重要です。
            </li>
          </ol>
        </section>

        <MonthlyTrendChart data={JAN_2026_DATA} />
        <SubsidyImpactChart
          data={JAN_2026_DATA}
          subsidy={{ lowVoltage: 4.5, highVoltage: 2.3 }}
          monthLabel="2026年1月使用分"
        />
        <YearComparisonTable data={JAN_2026_DATA} />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ2026年1月使用分は大きく下がって見えたのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分を理解するうえで最初に押さえたいのは、近年の電気料金が燃料価格だけでなく、政府補助の有無にも大きく左右されるという点です。
            ここ数年は、燃料価格高騰への対応策として行われた補助政策の開始や終了によって、月ごとの料金の見え方が変わりやすい状況が続いています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            その中で2026年1月使用分は、補助の効果が非常に分かりやすく表れた月でした。当社団が運営している「新電力ネット」のデータでは、
            2025年9月に少し値上がりし、その後10月も値上がりし、さらに2026年1月使用分で大きく値下がりしています。
            この変化の大きな背景にあるのが、政府補助です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            資源エネルギー庁の案内でも、2026年1月・2月使用分の支援額は低圧4.5円/kWh、高圧2.3円/kWhとされています。
            2025年夏の支援と比べても、冬の支援は単価が高めで、年明けの料金を押し下げる効果が大きかったことが読み取れます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            つまり、2026年1月使用分の値下がりは、電力小売各社の料金戦略だけでなく、政策的な下支えが前面に出た結果として理解するのが自然です。
            企業としては、ここを「市場が完全に落ち着いた」と受け取るのではなく、補助が厚く入っていた局面の変化として見る必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">低圧の電気料金動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧は、一般的に小規模事業所や店舗などで使われる契約区分です。法人でも、照明、空調、厨房機器、業務機器などの用途に応じて利用されています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分の低圧では、1kWhあたり4.5円の補助が入るため、料金の見え方がかなり改善しやすい状況でした。実務上は、1月使用分の補助効果が
            請求書には2月請求分として表れやすいため、経理や総務の担当者はその点も意識して見たほうが分かりやすいです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>コンビニ、物販店、ドラッグストアなどの小売業</li>
            <li>飲食店、カフェ、ベーカリーなどの店舗業態</li>
            <li>クリニック、サロン、整骨院などのサービス業</li>
            <li>小規模オフィス、営業所、学習塾などの拠点</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            こうした企業では、1拠点あたりの電力使用量は高圧ほど大きくなくても、補助単価が大きいため、1月使用分（2月請求分）で
            「かなり楽になった」と感じやすい月だったと考えられます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、その改善は補助によるものです。現在はすでに3月使用分で補助縮小が始まっており、4月使用分からは終了予定のため、
            1月使用分の請求水準をそのまま今後の基準にするのは避けたいところです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧の電気料金動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧は、工場、病院、学校、商業施設、物流施設、オフィスビルなどで広く使われる契約区分です。2026年1月使用分の高圧では、
            1kWhあたり2.3円の補助が入っており、低圧より補助単価は小さいものの、使用量が大きい施設では総額への影響はかなり大きくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務上は、こちらも1月使用分の改善が2月請求分に出やすいため、月次管理では「使用月」と「請求月」を分けて見ることが大切です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>中規模工場、加工場、食品工場</li>
            <li>スーパー、ショッピング施設、量販店</li>
            <li>病院、介護施設、学校法人</li>
            <li>倉庫、物流拠点、配送センター</li>
            <li>延床面積の大きいオフィスビル</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            これらの企業では、1月使用分の補助によって請求額が下がりやすく、月次予算の面では一定の安心感が出やすいです。一方で、高圧は低圧よりも
            契約条件の差、燃料費調整の影響、使用時間帯の違いなどが結果に表れやすく、単純に「みんな同じだけ楽になる」とは言い切れません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため高圧の企業では、2026年1月使用分を「下がった月」として受け止めるだけでなく、秋からの上昇局面がどこでいったん和らいだかを確認する月、
            そして契約条件や見積条件を見直す入り口の月として捉えるほうが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の電気料金動向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧は、大規模工場、データセンター、大型商業施設、自治体の基幹施設、大規模病院など、非常に大きな電力需要を持つ事業者が中心です。
            特別高圧は低圧・高圧と異なり、政府補助の対象外であり、主に天然ガスや石炭の価格変動の影響を受けます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このため、2026年1月使用分についても、特別高圧では低圧・高圧のような「補助による分かりやすい下押し」は前面に出ません。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>素材、化学、金属、機械などの大規模工場</li>
            <li>24時間稼働の生産拠点</li>
            <li>データセンターや大規模サーバー施設</li>
            <li>大型商業施設や再開発拠点</li>
            <li>自治体の上下水道施設や大型公共施設</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            こうした需要家では、1月使用分単月の請求額よりも、燃料価格が今後どう動くか、需給が厳しくなる季節にどう備えるか、
            調達先や契約条件をどう組むかのほうが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧では、2026年1月使用分の変化を「補助で下がった月」として見るよりも、低圧・高圧とは違って構造要因が中心であることを
            再確認する月と捉えたほうが実態に近いでしょう。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな企業が2026年1月の影響を受けやすかったか</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              低圧中心で、補助の下押しを感じやすい企業: 多店舗展開の小売業、飲食チェーン、小規模サービス拠点を多く持つ事業者、
              事務所や営業所が多い企業。
            </li>
            <li>
              高圧中心で、総額インパクトが大きい企業: 中規模工場、物流施設、病院、介護施設、商業施設、学校、オフィスビル。
            </li>
            <li>
              特別高圧で、補助より構造要因が重要な企業: 大規模製造業、データセンター、大規模公共施設、24時間運転の大型設備を持つ事業者。
            </li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分は、すべての法人に同じように効いたわけではありません。影響は契約区分と使用量構成によって差が出るため、
            自社の契約ポートフォリオに引きつけて確認する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1月使用分をそのまま安心材料にしない理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分は、低圧・高圧で大きく下がって見えやすい月でしたが、背景は補助です。現在は3月使用分で補助縮小が始まり、
            4月使用分から終了予定であるため、「このまま安定する」と判断するのは早計です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>補助を除いた実力ベース単価がどうか</li>
            <li>2月使用分以降にどこまで維持されるか</li>
            <li>3月・4月使用分でどの程度反動が出るか</li>
            <li>拠点ごとに契約区分がどう違うか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分を見て「ようやく落ち着いた」「このまま安定していきそうだ」と判断するのは少し早いかもしれません。
            企業としては、1月使用分の結果だけを見るのではなく、補助縮小後の変化を先読みしておく必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金を動かす補助以外の要因</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分の下押し要因として補助は非常に大きいですが、それだけで全体像を説明することはできません。
            電気料金が上下する主な要因としては、LNGと石炭の価格変動、国内の電力供給力不足、再エネ賦課金の価格変動が挙げられます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            とくに日本の電力は火力発電への依存が大きく、燃料価格の上昇は電気料金に反映されやすい構造です。つまり、2026年1月使用分は
            請求額が下がって見えていても、その背後にある構造リスクが消えたわけではありません。法人としては、目先の請求額の改善と
            中期的なコストリスクを分けて考える必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2026年1月時点で企業が確認したい実務ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求書の総額だけでなく、基本料金・電力量料金・燃料費調整・再エネ賦課金・補助反映分を分けて確認する</li>
            <li>使用月と請求月を分けて管理し、1月使用分と2月請求分を混同しない</li>
            <li>拠点ごとの契約区分（低圧・高圧・特別高圧）を整理し、同じ月の変化を一括評価しない</li>
            <li>春以降の予算は保守的に置き、1月使用分の安さをベースラインにしない</li>
            <li>補助で呼吸しやすい局面のうちに、契約見直しや比較のタイミングを逃さない</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月次サマリー：2026年1月の電気料金概況</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分の主要指標をまとめました。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">補助単価（1月・2月）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">前月（12月）比変化</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主な変動要因</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">低圧（電灯・電力）</td>
                  <td className="border-b border-slate-200 px-3 py-2">4.5円/kWhの補助が適用</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-emerald-700">大幅低下（補助拡大による）</td>
                  <td className="border-b border-slate-200 px-3 py-2">政府補助の再拡大・強化（激変緩和再設定）</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">2.3円/kWhの補助が適用</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-emerald-700">低下（補助効果が総額に大きく影響）</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助単価は低圧より小さいが使用量が大きく総額は改善</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">特別高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助対象外</td>
                  <td className="border-b border-slate-200 px-3 py-2">構造要因による変動</td>
                  <td className="border-b border-slate-200 px-3 py-2">燃料費調整・需給の推移が主要因</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">今後の見通し</td>
                  <td className="border-b border-slate-200 px-3 py-2">3月から補助縮小、4月から終了予定</td>
                  <td className="border-b border-slate-200 px-3 py-2">−</td>
                  <td className="border-b border-slate-200 px-3 py-2">1月水準をベースに計画を組まないことが重要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※補助単価は資源エネルギー庁の公表情報をもとにした参考値です。実際の請求額は電力会社・契約条件により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2026年1月使用分は、政府補助によって低圧・高圧の料金が大きく押し下げられた月でした。一方で、特別高圧は補助対象外であり、
            同じ「1月の値下がり」でも意味合いは契約区分で異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            現在はすでに3月使用分で補助縮小が始まり、4月使用分からは終了予定です。1月使用分は安心し切るための月ではなく、補助が厚かった
            局面の水準を確認し、反動局面に備えるための基準点として活用することが重要です。
          </p>
        </section>

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
              href="/business-electricity-retrospective/2026-02"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              2026年2月の記事を見る
            </Link>
            <Link
              href="/electricity-price-subsidy-impact"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              補助金縮小で見え方はどう変わったか
            </Link>
            <Link
              href="/articles"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              法人向け電気料金の基礎知識
            </Link>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/business-electricity-retrospective/2026-02", title: "2026年2月の振り返り", description: "補助縮小前夜の単価動向を翌月視点で確認できます。" },
            { href: "/business-electricity-retrospective/2025-12", title: "2025年12月の振り返り", description: "年末ピーク局面の推移を前月視点で確認できます。" },
            { href: "/business-electricity-retrospective", title: "法人電気料金振り返りハブ", description: "月次・年次の全ラインナップから他月に移動できます。" },
          ]}
        />

        <ContentCta
          heading="電気料金の見直しを検討中ですか？"
          description="振り返りデータを踏まえて、自社の契約条件やリスクを専門家と一緒に確認しませんか。"
          links={[
            { href: "/simulate", label: "リスク診断シミュレーター" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
