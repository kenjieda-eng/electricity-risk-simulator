import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { DEMAND_PEAK_DAYS, DEMAND_SEASON_HOUR } from "../../data/demandData";
import { EXTREME_HOT_DAYS, SUMMER_TMAX_TREND, CDD_TREND, TROPICAL_NIGHTS_TOKYO } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "猛暑で法人・企業・自治体の電気料金・電気代はどう上がる？夏の上振れリスクを解説";
const pageDescription =
  "猛暑によって法人・企業・自治体の電気料金・電気代が上がる仕組みを解説。7月〜9月の需給逼迫、市場連動プランと固定プランの違い、夏の電気代対策を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "猛暑 電気料金 法人",
    "夏 電気代 上振れ",
    "市場連動プラン リスク",
    "固定プラン 比較",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-heatwave",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-heatwave",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "猛暑リスクの解説",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faqItems = [
  {
    question: "猛暑のとき、法人の電気料金はどのくらい上がる可能性がありますか？",
    answer: "猛暑の夏（7〜9月）は電力需要が急増し、JEPXスポット価格が通常比+3〜8円/kWh程度上昇することがあります。市場連動プランでは月額電気代が10〜30%程度増加するケースもあり得ます。2023年の猛暑では一時的に15円/kWhを超えるエリアもありました。",
  },
  {
    question: "猛暑リスクの影響を受けやすいのはどのような契約ですか？",
    answer: "市場連動プラン（JEPXスポット価格に連動）は猛暑時の需給逼迫による価格上昇を直接受けます。固定プランは短期の市場変動の影響を受けにくいですが、翌年の更新時に市場水準を反映した料金に改定されることがあります。",
  },
  {
    question: "猛暑による電気料金上昇リスクに備えるには何をすべきですか？",
    answer: "夏期の需要実績（月間使用量・ピーク電力）を事前に確認し、市場連動プランと固定プランの比較を行うことが有効です。特に空調使用が多い業種・施設では、夏季の上振れ幅を考慮した年間予算計画を立てることをお勧めします。",
  },
];

const sources = [
  { name: "気象庁", url: "https://www.jma.go.jp", description: "猛暑・高温データ・気候変動傾向" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "夏季需給逼迫・JEPX価格動向データ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "夏季の電力需給・節電要請に関する資料" },
  { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "夏季スポット市場の価格データ" },
];

export default function ElectricityCostRiskHeatwavePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/electricity-cost-risk-heatwave"
        datePublished="2026-03-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "リスクシナリオ別に知る", url: "https://simulator.eic-jp.org/articles/risk-scenarios" },
          { name: "猛暑リスク" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">猛暑リスク</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          猛暑で法人・企業・自治体の電気料金・電気代はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          暑い夏は使用量が増えるだけでなく、電気の単価そのものが上がりやすい場面があります。法人・企業・自治体では空調負荷が大きく、
          請求額の増加が予想より大きくなるケースもあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、猛暑時の上振れ構造と、契約メニューごとの見え方を整理します。見直しや比較の前提としてご活用ください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">猛暑リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            猛暑リスクは、主に7月〜9月に電気料金・電気代が上振れしやすくなる要因です。冷房需要が集中しやすく、特に午後から夕方にかけて
            需給が厳しくなることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場全体の需要が高まる局面では、使用量の増加と単価上昇が同時に起こる場合があるため、夏場は月次コストの管理で注意が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ猛暑で電気料金・電気代が上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            気温上昇により空調負荷が増えると、使用量が増加します。さらに需要が集中すると市場価格が上がりやすくなり、
            市場価格の影響を受ける契約では単価面の上振れも起こり得ます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人や自治体では、床面積が大きい施設、稼働時間が長い施設、ピークが集中しやすい施設ほど影響が出やすい傾向があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランで違いはあるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は、夏場の価格変動の影響を受けやすく、上振れが見えやすい契約です。一方で、
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            でも、使用量が増えれば請求額は上がります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約の見方は単価だけでなく、使用量、ピーク、デマンドまで含めて考えることが重要です。違いの整理は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの比較ページ
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体で影響が出やすいケース</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>オフィス、工場、商業施設など空調負荷が大きい施設</li>
            <li>学校、庁舎、公共施設など一定時間帯に需要が集中しやすい施設</li>
            <li>高圧・特別高圧の大口施設で、単価変動や使用量増の影響額が大きいケース</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            施設用途ごとに負荷特性が異なるため、自社・自施設の運用実態に合わせて確認することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">夏の電気代対策として確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>空調運用の見直しとピーク時間帯の運転計画</li>
            <li><Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値</Link>管理と<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>の整合</li>
            <li>見積比較時の調整項目・契約条件の確認</li>
            <li>契約更新前の再検討タイミングの設定</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見直し時期の考え方は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電力契約を見直すタイミング
            </Link>
            、比較の進め方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>
            のページで確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">猛暑リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずはベースケースとの差分を確認し、次に
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            と比較すると、夏要因の寄与を把握しやすくなります。自社・自施設に近い使用条件で確認することが精度向上につながります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需要データで見る猛暑リスクの実態</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            歴代ピーク需要Top10は全て7-8月の平日に記録。最大は2020年8月20日の164,910MW。
            これらのデータはOCCTO（電力広域的運営推進機関）の公表データを集計したものです。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">順位</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">日付</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">曜日</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">ピーク需要（MW）</th>
                </tr>
              </thead>
              <tbody>
                {DEMAND_PEAK_DAYS.map((row, i) => (
                  <tr key={row.date} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{i + 1}</td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.date}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.day}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.peakMW.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            夏の14時台は全国需要が{DEMAND_SEASON_HOUR.find(h => h.hour === 14)?.summer.toLocaleString()}MWに達し、冷房需要が集中。
            この時間帯にJEPX価格も急騰しやすく、市場連動プランの上振れリスクが最大化します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">30年の気象データで見る猛暑リスクの構造的増大</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            猛暑リスクは単なる「今年の暑さ」ではなく、30年単位で構造的に拡大しています。気象庁データが示す長期トレンドを確認することで、夏の電気代上振れリスクが今後も続く理由が分かります。
          </p>

          {/* A: 猛暑日の10年ごと推移 */}
          <h3 className="mt-5 text-lg font-semibold text-slate-900">猛暑日（35℃超）の10年ごと累計日数</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            各10年間における猛暑日の累計日数（気象庁データより集計）。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">都市</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">1990年代</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">2000年代</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">2010年代</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">2020年代</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">倍率</th>
                </tr>
              </thead>
              <tbody>
                {EXTREME_HOT_DAYS.map((row, i) => {
                  const ratio = row.d1990s > 0 ? (row.d2020s / row.d1990s).toFixed(1) : "—";
                  const is2020sHigh = row.d2020s > 100;
                  return (
                    <tr key={row.city} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.cityJa}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.d1990s}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.d2000s}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.d2010s}</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${is2020sHigh ? "bg-red-50 text-red-700" : "text-slate-700"}`}>{row.d2020s}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.d1990s > 0 ? `${ratio}倍` : "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            東京は1990年代の21日→2020年代の101日で約5倍。名古屋は179日と全都市最多。猛暑日の急増は冷房稼働時間の長期化を意味し、夏の電力需要を構造的に押し上げています。
          </div>

          {/* B: 夏の平均最高気温上昇 */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">夏（7〜8月）の平均最高気温の変化</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            1995〜99年平均と2020〜25年平均の比較（気象庁データより）。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">都市</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">1995〜99年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">2020〜25年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">上昇幅</th>
                </tr>
              </thead>
              <tbody>
                {SUMMER_TMAX_TREND.map((row, i) => (
                  <tr key={row.regionKey} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.cityJa}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.tmax1995_99.toFixed(1)}℃</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.tmax2020_25.toFixed(1)}℃</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+{row.change.toFixed(1)}℃</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            仙台+2.7℃、札幌+2.6℃ — 北日本の上昇が最も顕著。かつて冷房不要だった地域でも冷房需要が急増しており、全国的な夏の電力需要底上げにつながっています。
          </div>

          {/* C: 冷房度日(CDD) */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">冷房度日（CDD）の増加：電力需要への構造的影響</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            冷房度日（基準温度22℃）は冷房電力需要の規模感を示す指標。1995〜99年平均と2020〜24年平均を比較（主要5都市）。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">都市</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">1995〜99年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">2020〜24年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">増加率</th>
                </tr>
              </thead>
              <tbody>
                {CDD_TREND.map((row, i) => (
                  <tr key={row.regionKey} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.cityJa}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.cdd1995_99}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.cdd2020_24}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+{row.changePercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            名古屋+40%、福岡+38% — 冷房による電力需要が構造的に増大しており、夏のピーク電力とJEPX高騰リスクは今後も拡大する見通しです。
          </div>

          {/* D: 熱帯夜 */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">東京の熱帯夜：夜間電力需要の押し上げ要因</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">熱帯夜日数</th>
                </tr>
              </thead>
              <tbody>
                {TROPICAL_NIGHTS_TOKYO.map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.year}年</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.count >= 50 ? "text-red-700" : "text-slate-700"}`}>{row.count}日</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            東京の熱帯夜は2023年に57日、2025年も55日と高水準が続いています。深夜でも冷房が切れない日が増加することで、夜間電力需要が押し上げられ、翌日の需給にも影響します。
          </div>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="electricity-cost-risk-heatwave" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "容量拠出金", "市場連動プラン"]} />
        </div>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2026-03-28" />

        <RelatedLinks
          heading="あわせて読みたい記事"
          intro="猛暑リスクの次は、ほかのシナリオ・長期推移・診断比較・上昇要因へ進むと、予算と契約の説明が揃いやすくなります。"
          links={[
            {
              href: "/articles/risk-scenarios",
              title: "リスクシナリオ別に知る（カテゴリ）",
              description: "厳冬・円安など、ほかの上振れパターンへ横展開できます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の10年推移",
              description: "夏要因を長期の需給・単価の流れの中で位置づけられます。",
            },
            {
              href: "/compare",
              title: "料金メニューの比較・診断",
              description: "猛暑要因を重ねたときの固定と市場連動の差分を試算できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "気温・需給以外の構造要因も含めて説明を補えます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "夏場の変動を受け止め方ごとに比較軸を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="夏の上振れリスクを条件別に確認する"
          description="猛暑リスクの構造を押さえた後は、比較ページやシミュレーションで自社に近い条件を試算すると、契約見直しの判断がしやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">他のリスクシナリオも確認する</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            猛暑以外にも、法人の電気料金に影響するリスク要因があります。要因ごとに上振れのパターンが異なるため、自社に関係の深いシナリオから確認できます。
          </p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/electricity-cost-risk-severe-winter" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">厳冬リスク</span>
              <span className="ml-2 text-slate-600">— 暖房需要とLNG需要増での上振れ</span>
            </Link>
            <Link href="/electricity-cost-risk-yen-depreciation" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">円安リスク</span>
              <span className="ml-2 text-slate-600">— 為替変動が燃料調達コストに影響</span>
            </Link>
            <Link href="/electricity-cost-risk-geopolitics" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">地政学リスク</span>
              <span className="ml-2 text-slate-600">— 国際情勢による供給不安と価格上昇</span>
            </Link>
            <Link href="/worst-case-electricity-cost-risk" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最悪ケースの想定</span>
              <span className="ml-2 text-slate-600">— 複数リスクが重なった場合の影響</span>
            </Link>
            <Link href="/what-is-electricity-price-risk-scenario" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">リスクシナリオとは</span>
              <span className="ml-2 text-slate-600">— 予測ではなく備えとしての考え方</span>
            </Link>
            <Link href="/how-to-use-electricity-price-risk-scenarios" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">リスクシナリオの使い方</span>
              <span className="ml-2 text-slate-600">— 予算策定や社内説明への活用法</span>
            </Link>
            <Link href="/why-electricity-prices-should-be-viewed-by-scenario" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">なぜシナリオ別に見るべきか</span>
              <span className="ml-2 text-slate-600">— 要因ごとに異なる影響の出方</span>
            </Link>
            <Link href="/which-electricity-price-risk-scenarios-to-check-first" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">どのシナリオから確認すべきか</span>
              <span className="ml-2 text-slate-600">— 自社条件に合わせた確認順の考え方</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
