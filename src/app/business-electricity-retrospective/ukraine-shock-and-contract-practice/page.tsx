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

const pageTitle = "新電力・市場連動・最終保障供給に何が起きたのか｜契約実務への波及";
const pageDescription =
  "ウクライナショック期に、新電力、市場連動、最終保障供給など契約実務に何が起きたのかを整理。法人の電力契約見直しに直結する論点を解説します。";
const canonicalUrl =
  "https://simulator.eic-jp.org/business-electricity-retrospective/ukraine-shock-and-contract-practice";

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
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "契約実務への波及" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const planComparisonRows = [
  { label: "2021年平均", values: getAverageByPeriod("2021-01-01", "2021-12-01") },
  { label: "2022年平均", values: getAverageByPeriod("2022-01-01", "2022-12-01") },
  { label: "2023年平均", values: getAverageByPeriod("2023-01-01", "2023-12-01") },
];

export default function UkraineShockAndContractPracticePage() {
  const trendRows = getSeriesByRange("2021-01-01", "2023-12-01").map((row) => ({ label: row.label, values: row.values }));

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          このページは特集内で最も実務寄りの整理です。単価上昇そのものより、契約方式ごとに何が起き、どこでリスクが顕在化したかを整理し、
          いまの見直しに直結する確認項目へ落とし込みます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "市場連動プランは上昇局面で価格変動が即時に出やすく、固定プランは更新時に再評価が集中した。",
            "新電力の調達余力が逼迫した局面では、供給停止や条件変更、最終保障供給移行の負担が重くなった。",
            "契約実務では単価比較だけでなく、調整項目・上限条件・供給継続性を同時に見る必要がある。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">価格高騰は契約実務にどう響いたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021〜2023年の推移では、単価上昇が急な局面ほど契約方式ごとの差が広がります。市場連動は即時連動、固定は更新時再見積、
            新電力は調達構造次第で供給条件が変化しやすく、同じ「上がった」でも実務負荷が異なります。
          </p>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2021年〜2023年の料金推移（契約実務の前提）"
              description="契約判断の前提として、4区分の上昇局面と反落局面を時系列で確認します。"
              points={trendRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="2021→2023の平均単価比較（見積再評価の圧力）"
              description="平均水準がどこまで切り上がったかを比較し、更新見積にかかる圧力を把握します。"
              rows={planComparisonRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動は何が厳しかったのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動は安定局面では競争力がありますが、ショック時は価格反映が速く、短期間で予算超過が起きやすいのが難点です。契約時には、
            上限条項、再協議条項、インデックス参照ルールを必ず確認すべきです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランは何を守り、何を守れなかったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定は契約期間中の予見性を守りますが、更新時に市況が高いと一気に新単価へ切り替わるため、更新タイミングが集中するとリスクが顕在化します。
            特に大口需要家は、更新月の分散と複数見積を実務ルール化しておくことが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">新電力と最終保障供給の論点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            新電力側の調達余力が低下した局面では、供給条件の見直しや契約継続性が課題になります。最終保障供給はセーフティネットですが、
            価格・条件面で平時の最適契約とは性格が異なるため、非常時対応として位置づけるべきです。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約類型</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">平時の特徴</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ショック時の論点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">確認すべき条件</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">固定プラン</td>
                  <td className="border-b border-slate-200 px-3 py-2">期間中の単価予見性が高い</td>
                  <td className="border-b border-slate-200 px-3 py-2">更新時に高単価へ再設定されやすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">更新月、途中解約条件、再見積ルール</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">市場連動プラン</td>
                  <td className="border-b border-slate-200 px-3 py-2">市況低下時にメリットが出やすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">上昇局面で請求が急変しやすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">連動指標、上限設定、ヘッジ有無</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">最終保障供給</td>
                  <td className="border-b border-slate-200 px-3 py-2">供給継続のセーフティネット</td>
                  <td className="border-b border-slate-200 px-3 py-2">価格・条件が重くなる可能性</td>
                  <td className="border-b border-slate-200 px-3 py-2">適用条件、移行期間、再切替手順</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が比較時に見るべき条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価だけでなく、燃料費調整・市場連動係数・上限条項まで見る。</li>
            <li>供給継続性（再調達可能性、契約解除時の移行条件）を確認する。</li>
            <li>見積は最低2〜3案を取得し、更新時期を分散させる。</li>
          </ul>
        </section>

        <HormuzInsight
          same="供給不安局面では、単価より先に契約条件が厳格化することがあり、供給継続性の確認が重要になる点は同じです。"
          diff="ホルムズ海峡封鎖は輸送由来の短期不確実性が強く、価格急変時の契約条項確認がより即応的に求められます。"
          actions={[
            "契約更新前に、価格条件と供給継続条項を別表で整理する。",
            "市場連動比率が高い拠点は、上限設定やヘッジ方針を社内合意しておく。",
            "最終保障供給への移行手順を非常時マニュアルとして用意する。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/ukraine-shock-overview", label: "全体整理ページ" },
            { href: "/compare", label: "市場連動/固定の比較ページ" },
            { href: "/business-electricity-retrospective/lessons-from-ukraine-shock-for-2026", label: "2026年への示唆ページ" },
          ]}
        />

        <SourceList
          items={[
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力制度情報" },
            { href: "https://www.jepx.jp/", label: "日本卸電力取引所（JEPX）" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
    </main>
  );
}
