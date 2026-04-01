import type { Metadata } from "next";
import { MultiBarChartCard, MultiLineChartCard } from "../_components/FeatureCharts";
import {
  ConclusionThreePoints,
  DataNote,
  EventNotes,
  HormuzInsight,
  RelatedLinks,
  SourceList,
} from "../_components/FeatureArticleSections";
import {
  DATA_DISCLAIMER,
  SHOCK_EVENT_NOTES,
  VOLTAGE_ORDER,
  getSeriesByRange,
  getYearlyAverages,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

const pageTitle = "ウクライナショックとは何だったのか｜法人電気料金に起きた変化を全体整理";
const pageDescription =
  "ウクライナ危機を契機に、法人電気料金に何が起きたのかを全体整理。燃料高騰、補助政策、区分別の違い、2026年3月ホルムズ海峡封鎖への示唆まで実務視点で解説。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/ukraine-shock-overview";

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
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "ウクライナショック総論" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function UkraineShockOverviewPage() {
  const yearlyRows = getYearlyAverages(2019, 2025).map((row) => ({ label: `${row.year}年`, values: row.values }));
  const focusedRows = getSeriesByRange("2021-07-01", "2023-12-01").map((row) => ({ label: row.label, values: row.values }));
  const compareRows = getYearlyAverages(2021, 2023).map((row) => ({ label: `${row.year}年`, values: row.values }));

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2021年後半からの燃料高に、2022年2月以降の地政学リスク、卸市場の緊張、補助政策が重なり、法人電気料金は単発ではない構造変化を経験しました。
          このページは、6本の検証特集の入口として、2019年から2025年の俯瞰と、2021年後半〜2023年の急変局面を実務向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "2022年の上昇は単月の変動ではなく、燃料・市場・制度が重なった大きな局面だった。",
            "法人電気料金は区分や契約条件によって影響の出方が違い、同じ月でも体感差が大きかった。",
            "2026年3月のホルムズ海峡封鎖は、供給不安リスクが再び料金に波及し得ることを思い出させた。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年から見ると何が特異だったのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年から2021年前半までは、区分差はあってもレンジは比較的読みやすい状態でした。2021年後半からはLNG・石炭・為替の同時進行で上昇圧力が増し、
            2022年にかけて4区分すべてで水準が切り上がりました。2024年以降は低下した月もありますが、2019年平均には戻り切っていません。
          </p>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2019年〜2025年の年平均推移（4区分比較）"
              description="特別高圧・高圧・低圧電力・低圧電灯の年平均単価を同一スケールで比較。ショック後の基準値上昇を俯瞰できます。"
              points={yearlyRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="2021年→2023年の水準変化"
              description="上昇局面の前後で、どの区分の平均単価がどの程度切り上がったかを比較しています。"
              rows={compareRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2021年後半から2023年にかけて何が起きたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年後半に始まった上昇圧力は、2022年2月以降の緊張拡大で加速し、2022年後半から2023年前半にピーク圏へ入りました。
            2023年は補助政策が効き始めた一方、ピークからの低下は一様ではなく、契約区分ごとに戻り方が異なります。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
            <MultiLineChartCard
              title="2021年後半〜2023年末の局面拡大"
              description="最も変動が大きかった時期を拡大し、上昇の速度と戻りの差を比較できるようにしています。"
              points={focusedRows}
              keys={VOLTAGE_ORDER}
              compact
            />
            <EventNotes items={SHOCK_EVENT_NOTES} />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人電気料金にどう波及したか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧と高圧は、燃料・市場の変化が先に見えやすく、低圧系は補助政策の反映で請求感が変わりやすい傾向が見えます。
            実務では、調達単価の上昇そのものに加えて、契約更新時期、燃料費調整、請求月とのタイムラグを分けて説明することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策で何が和らいだか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策は請求ベースの急変を和らげましたが、燃料・調達構造由来の上昇圧力を消したわけではありません。したがって、補助期の単価を平常値と置くと、
            補助縮小・終了時に予算差異が生じます。社内説明では「補助が効いた見え方」と「実力値」を分けて示すのが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高止まり局面をどう読むか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2024〜2025年はピークアウト後の低下局面ですが、2019年対比では依然高い水準です。見積や予算は「急騰前に戻る前提」ではなく、
            平均値が一段高い前提で複数シナリオを置くほうが実務的です。
          </p>
        </section>

        <HormuzInsight
          same="海外起点の供給不安が、燃料・卸市場を通じて日本の法人電気料金へ時間差で波及し得る点です。"
          diff="ウクライナショックは欧州ガス需給の長期ひっ迫色が強く、ホルムズ海峡封鎖は輸送途絶リスクの即時性が強い点が異なります。"
          actions={[
            "契約更新前に、固定単価・市場連動・調整項目の条件差を比較する。",
            "予算は単一ケースではなく、平常・上振れ・再上振れの3ケースで置く。",
            "経営層向け説明では、未確定データを断定せず、示唆として前提条件を明示する。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/high-voltage-2019-2025", label: "高圧の年次通史ページ" },
            { href: "/business-electricity-retrospective/special-high-voltage-2019-2025", label: "特別高圧の年次通史ページ" },
            { href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice", label: "契約実務への波及を見る" },
          ]}
        />

        <SourceList
          items={[
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力・ガス政策情報" },
            { href: "https://www.iea.org/topics/energy-security", label: "IEA Energy Security" },
            { href: "https://www.jepx.jp/", label: "日本卸電力取引所（JEPX）" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
    </main>
  );
}
