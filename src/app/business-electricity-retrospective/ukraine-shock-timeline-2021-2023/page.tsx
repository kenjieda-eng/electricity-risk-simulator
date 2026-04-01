import type { Metadata } from "next";
import { MultiBarChartCard, MultiLineChartCard } from "../_components/FeatureCharts";
import {
  ConclusionThreePoints,
  DataNote,
  HormuzInsight,
  RelatedLinks,
  SourceList,
} from "../_components/FeatureArticleSections";
import {
  DATA_DISCLAIMER,
  VOLTAGE_ORDER,
  getAverageByPeriod,
  getSeriesByRange,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

const pageTitle = "2021年後半〜2023年の時系列整理｜法人電気料金高騰はどう進んだか";
const pageDescription =
  "2021年後半から2023年にかけて、法人電気料金高騰がどのように進んだのかを時系列で整理。燃料高、制度対応、補助政策まで一連の流れを確認できます。";
const canonicalUrl =
  "https://simulator.eic-jp.org/business-electricity-retrospective/ukraine-shock-timeline-2021-2023";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "2021年後半〜2023年の時系列整理" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const periodRows = [
  { label: "2021年後半", values: getAverageByPeriod("2021-07-01", "2021-12-01") },
  { label: "2022年前半", values: getAverageByPeriod("2022-01-01", "2022-06-01") },
  { label: "2022年後半", values: getAverageByPeriod("2022-07-01", "2022-12-01") },
  { label: "2023年前半", values: getAverageByPeriod("2023-01-01", "2023-06-01") },
  { label: "2023年後半", values: getAverageByPeriod("2023-07-01", "2023-12-01") },
];

export default function UkraineShockTimeline20212023Page() {
  const trendRows = getSeriesByRange("2021-01-01", "2023-12-01").map((row) => ({ label: row.label, values: row.values }));

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          社内説明では「いつ何が起きたか」を1枚で示せるかが重要です。このページでは、2021年後半から2023年末までを時系列で追い、
          高騰のピーク感と、落ち着き方が完全な復元ではなかった点を確認します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "上昇圧力は2022年2月以前から始まっており、侵攻で速度が上がった。",
            "2022年中は燃料・市場・契約改定が積み上がり、2023年前半まで高水準が残った。",
            "一度落ち着いても元の価格帯には戻らず、時差波及リスクは2026年局面でも重要になる。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2021年後半に始まっていた上昇圧力</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年前半は低位推移でしたが、後半から各区分で上向きが目立ち始めます。実務上は、この段階で次年度予算へ燃料上振れケースを織り込めたかどうかが、
            2022年の差異拡大を左右しました。
          </p>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2021年1月〜2023年12月の月次推移"
              description="時系列を主役に、4区分の上昇開始・ピーク・反落を同じチャートで確認できます。"
              points={trendRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="局面別平均（2021年後半〜2023年後半）"
              description="月次の細かな上下ではなく、局面単位でどの程度レンジが切り上がったかを把握するための比較です。"
              rows={periodRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年2月以降に空気が変わった</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <p>2022年2月以降は、市場での供給不安評価が一段強まり、法人向け見積の前提も保守化しました。</p>
            <p>単価改定は一斉に同時発生するのではなく、契約条件と調達余力に応じて時間差で表れます。</p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年中に何が積み上がったか</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料調達コストの上昇と調達難。</li>
            <li>卸市場価格の高止まりと先行き不確実性。</li>
            <li>更新見積のリスクプレミアム上乗せ。</li>
            <li>需要家側での契約再編、最終保障供給への移行事例。</li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2023年に何が変わったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年は補助政策による下押しが入り、請求の急激な悪化は緩和されました。ただし、補助はあくまで緩和策であり、調達構造そのものを恒久的に改善するものではありません。
            そのため、単価はピークから低下しても、以前のレンジへは戻り切りませんでした。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一度上がった料金はどう動いたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、ピーク月よりも「その後の新しい基準値」を把握することが重要です。2024年以降の予算は、2020年水準への回帰ではなく、
            2022〜2023年を経た後の高止まりレンジを前提に組むほうが、説明可能性と実績乖離の管理に有効です。
          </p>
        </section>

        <HormuzInsight
          same="ショック発生直後に全てが数字へ出るのではなく、時間差で電気料金へ反映される構造は共通しています。"
          diff="2026年3月のホルムズ海峡封鎖は輸送リスクの即時評価が中心で、2022年の欧州ガス危機とは伝播経路の主役が異なります。"
          actions={[
            "足元の請求だけでなく、次回更新見積の条件変化を先に確認する。",
            "燃料費調整・市場連動の感応度を拠点別に棚卸しする。",
            "経営会議向け資料は、時系列で「起点→波及→対応」を1ページで示す。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/ukraine-shock-overview", label: "全体整理ページ" },
            { href: "/business-electricity-retrospective/ukraine-shock-by-voltage-class", label: "区分別比較ページ" },
            { href: "/business-electricity-retrospective/archive", label: "年次アーカイブ" },
          ]}
        />

        <SourceList
          items={[
            { href: "https://www.iea.org/reports/global-energy-crisis", label: "IEA Global Energy Crisis" },
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力政策ページ" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
    </main>
  );
}
