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
  PERIOD_COMPARE_BLOCKS,
  VOLTAGE_ORDER,
  getAverageByPeriod,
  getLatestConfirmedDate,
  getSeriesByRange,
  getYearlyAverages,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

const pageTitle = "ウクライナショックから何を学ぶか｜2026年3月ホルムズ海峡封鎖が示したこと";
const pageDescription =
  "ウクライナショックの経験を踏まえ、2026年3月のホルムズ海峡封鎖が何を示したのかを整理。法人の電力契約、予算策定、説明資料作成に役立つ視点をまとめます。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/lessons-from-ukraine-shock-for-2026";

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
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "ウクライナショックの教訓と2026年示唆" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function LessonsFromUkraineShockFor2026Page() {
  const yearlyRows = getYearlyAverages(2019, 2025).map((row) => ({ label: `${row.year}年`, values: row.values }));
  const latestDate = getLatestConfirmedDate();
  const latestRow = latestDate ? getSeriesByRange(latestDate, latestDate)[0] : null;

  const compareRows: Array<{ label: string; values: Record<(typeof VOLTAGE_ORDER)[number], number> }> = PERIOD_COMPARE_BLOCKS.map((block) => ({
    label: block.label,
    values: getAverageByPeriod(block.start, block.end),
  }));
  if (latestRow) {
    compareRows.push({
      label: `${latestDate.slice(0, 4)}年${latestDate.slice(5, 7)}月`,
      values: latestRow.values,
    });
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          過去の整理で終わらせず、次のショックに備えるための実務ページです。2026年3月のホルムズ海峡封鎖は、まだ電気料金実績が出揃っていないため、
          本ページでは未来データを置かず、契約・予算・社内説明の観点で示唆を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "ウクライナショックで見えたのは、燃料・市場・制度が重なると法人単価が段階的に切り上がること。",
            "2026年3月のホルムズ海峡封鎖は、輸送起点でも同様に供給不安が波及し得ることを再確認させた。",
            "次に備える実務は、単価予測よりも契約条件の透明化と複数シナリオ予算の運用にある。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ウクライナショックで何が見えたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019〜2021年平均と2022〜2023年平均を比較すると、4区分すべてで基準単価が切り上がっています。2024〜2025年は低下したものの、
            「元に戻る」ではなく「高い基準で落ち着く」状態が続きました。
          </p>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2019年〜2025年の長期推移"
              description="2022年の急変がどの位置にあるか、また2024〜2025年の高止まり局面を俯瞰するための長期チャートです。"
              points={yearlyRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="ショック前後比較（期間平均＋最新確定月）"
              description="2019-2021平均、2022-2023平均、2024-2025平均、最新確定月を比較。未来値は置かず、確定データまでで止めています。"
              rows={compareRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2026年3月のホルムズ海峡封鎖は何を思い出させたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            企業実務にとって重要なのは、事象名ではなく、どの経路でコスト不確実性が増えるかです。ホルムズ海峡封鎖は、輸送経路の制約が
            燃料調達の期待値と見積条件に波及する可能性を示しました。実績値が確定する前に、前提管理を先に整えることが求められます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">同じ点と違う点</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">同じ点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">違う点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">企業実務での備え</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">供給不安が燃料・卸市場・見積条件へ波及する</td>
                  <td className="border-b border-slate-200 px-3 py-2">ウクライナ局面は欧州ガス需給、ホルムズ局面は輸送途絶リスクが主軸</td>
                  <td className="border-b border-slate-200 px-3 py-2">契約更新前倒し、上限条項確認、複数見積の常態化</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">請求に出るまで時間差がある</td>
                  <td className="border-b border-slate-200 px-3 py-2">ショック初期の速度と継続期間が異なる可能性</td>
                  <td className="border-b border-slate-200 px-3 py-2">使用月と請求月を分けた月次モニタリング</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">単価だけで判断するとリスクを見落とす</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助政策の有無が局面ごとに異なる</td>
                  <td className="border-b border-slate-200 px-3 py-2">実力値と補助反映値を分けた説明資料を作る</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人がいま確認すべきこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約更新時期：更新集中を避け、交渉余地を確保する。</li>
            <li>単価以外の調整項目：燃料費調整、連動係数、上限条項を明示する。</li>
            <li>燃料・市場リスクの説明：経営会議で前提と不確実性を分けて示す。</li>
            <li>複数見積：固定・市場連動・ハイブリッドを横並びで評価する。</li>
            <li>予算シナリオ：平常・高止まり・再上昇の3ケースで管理する。</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算・契約見直し・社内説明への落とし込み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実績確定を待つだけでは、更新交渉と予算再設定が後手になります。未確定領域は「断定しない」前提で示唆化し、判断に必要な条件を先に揃えることが、
            2026年局面の実務対応として有効です。
          </p>
        </section>

        <HormuzInsight
          same="供給不安が起きると、法人電気料金は実績確定より先に見積条件へ反映される点です。"
          diff="2026年3月以降は実績データが未確定であり、数値断定ではなく前提管理として扱う必要があります。"
          actions={[
            "予算資料に『確定値』『推定レンジ』『示唆』の3層表記を導入する。",
            "契約比較時は単価表の横に、継続供給条項と調整項目を並記する。",
            "経営層向けには、ショック類型ごとの影響経路図をテンプレート化する。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice", label: "契約実務への波及ページ" },
            { href: "/business-electricity-retrospective/ukraine-shock-overview", label: "全体整理ページ" },
            { href: "/compare", label: "市場連動/固定の比較ページ" },
          ]}
        />

        <SourceList
          items={[
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力政策情報" },
            { href: "https://www.iea.org/topics/energy-security", label: "IEA Energy Security" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
    </main>
  );
}
