import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import BasicChargeCalculator from "../../components/market-data/BasicChargeCalculator";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { DEMAND_HOURLY_AVG, DEMAND_WEEKDAY_WEEKEND, LOAD_FACTOR_FY, DEMAND_MONTHLY_AVG, DEMAND_PEAK_DAYS } from "../../data/demandData";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "契約電力とデマンドとは｜法人の電気料金・基本料金との関係を解説";
const pageDescription =
  "契約電力とデマンドの意味を法人向けに解説。基本料金との関係、請求書・見積書での見方、30分デマンドの仕組み、ピーク管理の考え方を全国需要データ付きで整理します。";
const publishedDate = "2026-03-01";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "契約電力とは 法人",
    "デマンドとは",
    "契約電力 デマンド 関係",
    "契約電力 基本料金 関係",
    "法人 電気料金 デマンド",
    "高圧 契約電力",
    "電気料金 契約電力 見方",
    "法人 見積比較 電力契約",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/contract-demand-what-is-it",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contract-demand-what-is-it",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/basic",
        width: 1200,
        height: 630,
        alt: "契約電力とデマンドとは",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const faq = [
  { question: "契約電力とデマンドはどう違いますか？", answer: "契約電力は電力会社との契約上の最大電力（kW）で、基本料金の算定基準になります。デマンドは実際に計測された30分間の平均最大電力です。デマンドが契約電力を超えると翌年度の契約電力が引き上げられ基本料金が上がります。" },
  { question: "デマンド値を下げると基本料金は減りますか？", answer: "はい。デマンド値（最大需要電力）が下がれば契約電力を引き下げられ、基本料金の削減につながります。ピーク時間帯の消費を抑えるデマンド管理が有効です。" },
  { question: "契約電力の変更はいつでもできますか？", answer: "契約電力の変更は、申請から実際の変更まで1〜3か月程度かかるケースが多く、電力会社によって手続き方法や時期が異なります。更新タイミングや現行契約の条件を事前に確認することが重要です。" },
];

export default function ContractDemandWhatIsItPage() {
  return (
    <>
      <ArticleJsonLd
        headline="契約電力とデマンドとは｜法人の電気料金・基本料金との関係を解説"
        description="契約電力とデマンドの意味を法人向けに解説。基本料金との関係、請求書・見積書での見方、30分デマンドの仕組み、ピーク管理の考え方を全国需要データ付きで整理します。"
        url="https://simulator.eic-jp.org/contract-demand-what-is-it"
        datePublished="2025-08-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "契約電力とデマンドとは" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくず">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="before:mx-1 before:content-['/']">
            <Link href="/articles/basic" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基礎から知る</Link>
          </li>
          <li className="before:mx-1 before:content-['/']">
            <span className="text-slate-700">契約電力とデマンド</span>
          </li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">契約電力とデマンドの基礎</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電気料金では、契約電力とデマンドという2つの概念が請求書・見積書に登場します。どちらも使用量とは異なる数値であり、基本料金の大きさや見積比較の前提条件に直結します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約電力とデマンドそれぞれの意味、両者の関係、そして請求確認・コスト管理での実務的な活用法を、全国需要データを交えて整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 契約電力とは何か */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は、電力契約の前提条件を表す重要な数値です。実際に使った電力量そのものではなく、基本料金や契約条件を読む起点になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、請求書や見積書では使用量とは別に確認し、契約前提としての整合性を見ていく必要があります。使用量が少ない月でも、基本料金は契約条件の影響を受けるため、「あまり使っていないのに高い」と感じる場合は、契約電力と基本料金の関係確認が必要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金の構造については
            {" "}
            <Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金とは</Link>
            で詳しく確認できます。
          </p>
        </section>

        {/* デマンドとは何か */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドは、短い時間に電力使用がどれだけ集中したかを見る考え方です。高圧・特別高圧では、30分単位のピーク値が契約電力の理解に関係しやすく、基本料金の見方にも影響します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量が同じでも、使い方の時間配分が違えばピークの出方は変わります。デマンドは「使用量は同じなのに請求感が違う」理由を説明する入口になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            たとえば、A社が朝9時に空調・照明・設備を一斉稼働し、B社が設備の立ち上げ時間を分散して稼働したとします。月間使用量が近くても、短時間のピークはA社の方が出やすく、契約電力や基本料金の見え方に差が出ることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド値の読み方と基準については
            {" "}
            <Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値の見方ガイド</Link>
            もあわせて確認できます。
          </p>
        </section>

        {/* 契約電力・デマンド・使用量の違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力・デマンド・使用量の違い</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">契約電力</th>
                  <th className="border border-slate-200 px-3 py-2">デマンド</th>
                  <th className="border border-slate-200 px-3 py-2">使用量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">意味</td>
                  <td className="border border-slate-200 px-3 py-2">契約条件の前提になる数値</td>
                  <td className="border border-slate-200 px-3 py-2">短時間の使用集中の大きさ（30分ピーク）</td>
                  <td className="border border-slate-200 px-3 py-2">実際に使った月間電力量</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">主に関係するもの</td>
                  <td className="border border-slate-200 px-3 py-2">基本料金・契約条件</td>
                  <td className="border border-slate-200 px-3 py-2">契約電力・基本料金の理解</td>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">実務で見る場面</td>
                  <td className="border border-slate-200 px-3 py-2">見積比較・契約更新・見直し</td>
                  <td className="border border-slate-200 px-3 py-2">ピーク負荷・固定費の確認</td>
                  <td className="border border-slate-200 px-3 py-2">月次請求確認・使用実績把握</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* なぜ契約電力とデマンドが重要か */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ契約電力とデマンドが重要か</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金に関係しやすい</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が少ない月でも、基本料金は契約条件の影響を受けます。契約電力が大きいほど、使わない月の固定費にも影響しやすい点を見落とさないことが重要です。
            <Link href="/business-electricity-bill-breakdown" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">法人向け電気料金の内訳</Link>
            で料金全体の構造を確認できます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">見積比較の前提になる</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力が異なる前提で算出された見積同士は単純比較できません。単価が安く見える見積を受け取っても、契約電力の前提が現在契約より大きければ固定費が増える可能性があります。
            必ず同じ契約電力・同じ使用条件で比較しているかを確認します。
            <Link href="/how-to-read-electricity-quote" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金見積書の見方</Link>
            も参考になります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">設備変更・稼働変化のトリガーになる</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            空調設備の更新、生産ラインの増設、稼働時間帯の変更、拠点統廃合などがあると、過去の契約条件が現在の実態に合わなくなることがあります。
            使用量やピークの出方が変わった時は見直しトリガーです。
          </p>
        </section>

        {/* どんな施設でデマンドが上がりやすいか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな施設でデマンドが上がりやすいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>朝の始業時に空調と照明をまとめて入れるオフィス</li>
            <li>生産開始時に複数設備を一斉稼働する工場</li>
            <li>夏季・冬季に空調負荷が集中しやすい施設</li>
            <li>冷凍・冷蔵設備を多く持つ施設</li>
            <li>曜日や時間帯で負荷が偏る施設</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求額の増加要因を自社側で整理したい場合は
            {" "}
            <Link href="/why-business-electricity-costs-are-high" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金が高い会社の特徴</Link>
            もあわせて確認すると、見直しの優先順位を決めやすくなります。
          </p>
        </section>

        {/* 24時間の需要パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">24時間の需要パターン（全国データ）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全国の実測データ（OCCTO公表データ集計）をもとに、電力需要がどのような時間帯パターンを持つかを確認します。需要のピーク構造を知ることが、契約電力の最適化につながります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold text-red-700">11時台（111,061MW）と18時台（111,247MW）にダブルピーク</span>が発生しています。この二山構造が契約電力の決定に影響します。
          </p>
          <div className="mt-4 space-y-1">
            {DEMAND_HOURLY_AVG.map((d) => {
              const maxMW = 115000;
              const pct = Math.round((d.avgMW / maxMW) * 100);
              const color =
                d.avgMW > 105000
                  ? "bg-red-500"
                  : d.avgMW >= 90000
                  ? "bg-yellow-400"
                  : "bg-green-500";
              return (
                <div key={d.hour} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-10 shrink-0 text-right">{d.hour}時</span>
                  <div className="flex-1 rounded bg-slate-100">
                    <div
                      className={`${color} h-4 rounded`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right tabular-nums">
                    {d.avgMW.toLocaleString()} MW
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-6 rounded bg-green-500" />90,000MW未満</span>
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-6 rounded bg-yellow-400" />90,000〜105,000MW</span>
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-6 rounded bg-red-500" />105,000MW超</span>
          </div>
          <MarketDataDownload
            filename="national-demand-hourly-pattern.csv"
            headers={["hour", "avg_mw"]}
            rows={DEMAND_HOURLY_AVG.map((d) => ({ hour: d.hour, avg_mw: d.avgMW }))}
            apiPath="/api/datasets/demand"
            caption="全国24時間需要パターン（OCCTO公表）"
          />
        </section>

        {/* 月別需要パターンとピーク日 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月別需要パターンとピーク日（全国データ）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の全国電力需要データ（OCCTO公表データ集計）から、デマンドが高くなりやすい月・日を確認します。季節的なパターンを把握することが、デマンド管理のタイミングを決める上で重要です。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">月別平均需要（全国）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold text-red-700">1〜2月（11.2万MW）が年間最大、5月（8.5万MW）が最小</span>。冬の暖房需要が大きく、夏の冷房需要も7〜8月に顕著に現れます。
          </p>
          <div className="mt-4 space-y-1">
            {DEMAND_MONTHLY_AVG.map((d) => {
              const maxMW = 120000;
              const pct = Math.round((d.avgMW / maxMW) * 100);
              const color =
                d.avgMW >= 110000
                  ? "bg-red-500"
                  : d.avgMW >= 100000
                  ? "bg-yellow-400"
                  : "bg-sky-400";
              return (
                <div key={d.month} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-8 shrink-0 text-right">{d.label}</span>
                  <div className="flex-1 rounded bg-slate-100">
                    <div
                      className={`${color} h-4 rounded`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right tabular-nums">
                    {d.avgMW.toLocaleString()} MW
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-6 rounded bg-sky-400" />100,000MW未満</span>
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-6 rounded bg-yellow-400" />100,000〜110,000MW</span>
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-6 rounded bg-red-500" />110,000MW超</span>
          </div>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">ピーク需要日 Top10</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">順位</th>
                  <th className="border border-slate-200 px-3 py-2">日付</th>
                  <th className="border border-slate-200 px-3 py-2">曜日</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">ピーク需要（MW）</th>
                </tr>
              </thead>
              <tbody>
                {DEMAND_PEAK_DAYS.map((d, i) => (
                  <tr key={d.date} className={i === 0 ? "bg-red-50" : ""}>
                    <td className="border border-slate-200 px-3 py-2 text-center font-semibold">{i + 1}</td>
                    <td className="border border-slate-200 px-3 py-2 tabular-nums">{d.date}</td>
                    <td className="border border-slate-200 px-3 py-2">{d.day}</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right tabular-nums font-semibold ${i === 0 ? "text-red-700" : "text-slate-700"}`}>
                      {d.peakMW.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-7 text-amber-900">
            Top10は全て7〜8月の平日。最大は2020年8月20日の164,910MW。<span className="font-semibold">猛暑×平日がデマンドのワーストケース</span>であり、夏季の平日を重点的に管理することが最も効果的です。
          </p>
        </section>

        {/* 平日 vs 休日の需要差 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">平日 vs 休日の需要差</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均需要（MW）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-semibold">平日</td>
                  <td className="border border-slate-200 px-3 py-2 text-right tabular-nums">{DEMAND_WEEKDAY_WEEKEND.weekdayAvgMW.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">休日</td>
                  <td className="border border-slate-200 px-3 py-2 text-right tabular-nums">{DEMAND_WEEKDAY_WEEKEND.weekendAvgMW.toLocaleString()}</td>
                </tr>
                <tr className="bg-amber-50">
                  <td className="border border-slate-200 px-3 py-2">差分</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-700 tabular-nums">
                    +{DEMAND_WEEKDAY_WEEKEND.diffMW.toLocaleString()} MW（+{DEMAND_WEEKDAY_WEEKEND.diffPercent}%）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            平日は休日より<span className="font-semibold">+{DEMAND_WEEKDAY_WEEKEND.diffMW.toLocaleString()}MW（+{DEMAND_WEEKDAY_WEEKEND.diffPercent}%）高い</span>ため、平日の需要パターンがデマンド値（ひいては契約電力）を決定します。休日に需要が下がっても、平日ピークが契約電力に反映される点に注意が必要です。
          </p>
        </section>

        {/* 負荷率低下トレンド */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">負荷率低下トレンド</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            負荷率とは「平均需要 ÷ 最大需要」の比率です。低下するほどピークが尖鋭化しており、契約電力の最適化が重要になります。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">東京エリア負荷率</th>
                </tr>
              </thead>
              <tbody>
                {LOAD_FACTOR_FY.map((row) => (
                  <tr key={row.fy}>
                    <td className="border border-slate-200 px-3 py-2">FY{row.fy}</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right tabular-nums font-semibold ${row.tokyo <= 55 ? "text-red-700" : "text-slate-700"}`}>
                      {row.tokyo}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-7 text-amber-900">
            東京エリアの負荷率はFY2016の61%→FY2022の54%に低下。ピークが尖鋭化しており、契約電力の最適化がますます重要になっています。
          </p>
        </section>

        {/* 請求書・見積書での確認ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書・見積書での確認ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力とデマンドの意味合いは契約区分によって見え方が異なります。請求書・見積書では以下の順番で確認します。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力の記載欄（基本料金算出の前提）</li>
            <li>基本料金の算出前提と金額</li>
            <li>契約種別（低圧・高圧・特別高圧）</li>
            <li>契約電力が現在の運用実態に合っているか</li>
            <li>使用時間帯にピーク集中が起きていないか</li>
            <li>季節や曜日で偏りがないか</li>
            <li>現在契約と提案条件の差（見積比較時）</li>
            <li>更新条件と見直し時期</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の読み方は
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金の請求書で確認したいポイント</Link>
            で、見積書の比較ポイントは
            {" "}
            <Link href="/how-to-read-electricity-quote" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人向け電気料金見積書の見方</Link>
            で確認できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の請求構造については
            {" "}
            <Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧電力の料金の見方</Link>
            および
            {" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧電力の料金の見方</Link>
            もあわせて確認すると実務で使いやすくなります。
          </p>
        </section>

        {/* デマンド管理の基本的な考え方 */}
        <section className="rounded-xl border border-slate-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンド管理の基本的な考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド管理とは、短時間のピーク集中を抑制することで、契約電力の最適化を図る取り組みです。特に夏季・冬季の平日に有効です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>同時起動を避け、設備の立ち上げ時間を分散する</li>
            <li>空調や大型設備の起動時間をずらす</li>
            <li>ピークが出やすい季節・曜日・時間帯（特に夏季平日の午前〜夕方）を把握する</li>
            <li>基本料金と電力量料金を分けて管理し、固定費と変動費を区別して見る</li>
            <li>設備更新・稼働変化があった際には契約電力の見直しを検討する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量料金の仕組みについては
            {" "}
            <Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金とは</Link>
            で確認できます。料金全体が上昇する背景については
            {" "}
            <Link href="/why-business-electricity-costs-are-high" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金が高い会社の特徴</Link>
            も参考になります。
          </p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力需給・契約制度に関するデータ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ・契約制度情報" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・デマンド情報" },
          ]}
          publishedAt="2025-08-01"
        />

        {/* 関連リンク */}
        
      <BasicChargeCalculator />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            intro="契約電力・デマンドの理解を、請求確認・見積比較・コスト管理の実務に接続するための導線です。"
            links={[
              {
                href: "/business-electricity-bill-breakdown",
                title: "法人向け電気料金の内訳とは",
                description: "料金全体の構造を俯瞰して確認できます。",
              },
              {
                href: "/how-to-read-electricity-bill",
                title: "電気料金の請求書で確認したいポイント",
                description: "請求書で見る順番と確認項目を整理できます。",
              },
              {
                href: "/how-to-read-electricity-quote",
                title: "法人向け電気料金見積書の見方",
                description: "見積比較で契約条件をどう確認するかが分かります。",
              },
              {
                href: "/high-voltage-electricity-pricing",
                title: "高圧電力の料金の見方",
                description: "契約電力が請求構造にどう影響するかを確認できます。",
              },
              {
                href: "/extra-high-voltage-electricity-pricing",
                title: "特別高圧電力の料金の見方",
                description: "より大口契約での影響の見方を整理できます。",
              },
              {
                href: "/basic-charge-explained",
                title: "基本料金とは",
                description: "基本料金の計算前提と削減の考え方を確認できます。",
              },
              {
                href: "/demand-value-guide",
                title: "デマンド値の見方ガイド",
                description: "デマンド値の読み方と基準を実務目線で整理できます。",
              },
              {
                href: "/energy-charge-explained",
                title: "電力量料金とは",
                description: "電力量料金の仕組みと変動要因を確認できます。",
              },
              {
                href: "/articles/basic",
                title: "基礎から知るカテゴリ一覧",
                description: "法人電気料金の基礎知識をカテゴリ別でまとめて確認できます。",
              },
              {
                href: "/how-to-start-electricity-contract-review",
                title: "電力契約の見直しを始めるには",
                description: "契約電力・デマンドの整理を、見直し検討のステップへつなげられます。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description: "契約構造を理解したうえでプランの選択軸を確認できます。",
              },
              {
                href: "/concierge",
                title: "AI コンシェルジュで関連情報を探す",
                description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

          <ContentCta
            heading="前提をそろえて比較・シミュレーションへ進む"
            description="契約電力とデマンドの関係を整理したら、現行契約と候補条件を同一前提で比較して見直し余地を確認できます。"
            links={[
              { href: "/compare", label: "比較ページを見る" },
              { href: "/", label: "シミュレーターで診断する" },
            ]}
          />
        </div>
      </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
