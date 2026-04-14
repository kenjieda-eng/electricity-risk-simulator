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
          <div className="mt-4 space-y-3">
            {[
              {
                priority: "★最優先",
                priorityColor: "bg-red-100 text-red-800 border-red-200",
                title: "契約更新時期の把握と前倒し交渉",
                detail: "更新集中を避け、交渉余地を確保する。特に複数拠点を持つ法人は、拠点ごとの更新月を一覧化し、市況の高い時期に更新が重ならないよう分散させる。",
                steps: ["全拠点の契約終了日を一覧化する", "更新が集中する時期を特定する", "主要拠点は6ヶ月前から複数業者へ打診を開始する"],
              },
              {
                priority: "★最優先",
                priorityColor: "bg-red-100 text-red-800 border-red-200",
                title: "複数見積の取得と条件比較の標準化",
                detail: "固定・市場連動・ハイブリッドを横並びで評価する。単価だけでなく、燃料費調整・市場連動係数・上限条項・供給継続条件を同一フォーマットで比較できる体制を作る。",
                steps: ["見積比較シートに「単価以外の調整項目」列を追加する", "最低2〜3案を取得することを社内ルール化する", "上限条項の有無を必須確認項目とする"],
              },
              {
                priority: "★★重要",
                priorityColor: "bg-orange-100 text-orange-800 border-orange-200",
                title: "燃料・市場リスクの社内説明体制の整備",
                detail: "経営会議で前提と不確実性を分けて示す。「確定値」「推定レンジ」「示唆」の3層表記を導入し、未確定領域を断定せずに経営層へ説明できる資料テンプレートを用意する。",
                steps: ["電気代予算資料に「前提条件」欄を設ける", "補助政策の反映有無を明示する", "前年同期比と直近3ヶ月平均を併記する"],
              },
              {
                priority: "★★重要",
                priorityColor: "bg-orange-100 text-orange-800 border-orange-200",
                title: "予算の複数シナリオ管理",
                detail: "平常・高止まり・再上昇の3ケースで管理する。「元に戻る前提」の単一予算は、ショック時に説明がつかなくなる。上振れシナリオの根拠を資料に残しておくことが重要。",
                steps: ["予算に平常・高止まり・再上昇の3ケースを設定する", "各ケースの前提（LNG価格・為替・補助有無）を明示する", "月次でシナリオとの乖離をモニタリングする"],
              },
              {
                priority: "★★★推奨",
                priorityColor: "bg-sky-100 text-sky-800 border-sky-200",
                title: "市場連動比率の確認とヘッジ方針の社内合意",
                detail: "市場連動比率が高い拠点は、上限設定やヘッジ方針を社内合意しておく。上昇局面では市場連動が即請求に反映されるため、事前の閾値設定と対応手順が重要。",
                steps: ["拠点ごとの市場連動比率を把握する", "許容できる単価上限を経営層と合意する", "上限を超えた際の対応フローを文書化する"],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex flex-wrap items-start gap-2">
                  <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-bold ${item.priorityColor}`}>{item.priority}</span>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                <ul className="mt-2 space-y-0.5 pl-4 text-sm leading-6 text-slate-600">
                  {item.steps.map((step) => (
                    <li key={step} className="list-disc">{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2026年に向けた教訓と確認事項</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ウクライナショックの経験から得られた主要な教訓と、2026年局面で法人が確認すべきアクションをまとめました。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">教訓</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">具体的な内容</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">2026年局面での確認アクション</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">上昇は時間差で来る</td>
                  <td className="border-b border-slate-200 px-3 py-2">燃料価格上昇から請求反映まで3〜6ヶ月のタイムラグがある。足元の請求が安定していても、先行指標の悪化には早期対応が必要</td>
                  <td className="border-b border-slate-200 px-3 py-2">燃料費調整・JEPX動向を月次でモニタリングし、先行変化を早期検知する</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">一度上がった単価は元に戻らない</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022〜2023年の急騰後、2025年時点でも2019年水準には戻っていない。規制料金値上げ・容量拠出金は恒久的コスト要因</td>
                  <td className="border-b border-slate-200 px-3 py-2">予算は「急騰前に戻る前提」ではなく、高止まり基準での複数シナリオを置く</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">補助は実力値を隠す</td>
                  <td className="border-b border-slate-200 px-3 py-2">政府補助が厚い期間は請求が下がって見えるが、実力値は変わっていない。補助終了時に一気に顕在化するリスクがある</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助有無・補助単価を請求書から分離し、実力値ベースで予算を管理する</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">契約区分で影響の出方が異なる</td>
                  <td className="border-b border-slate-200 px-3 py-2">同じ局面でも特別高圧・高圧・低圧で上昇速度・ピーク水準・補助の効き方が異なる。全社平均だけでは実態が見えにくい</td>
                  <td className="border-b border-slate-200 px-3 py-2">拠点・区分別にKPIを設定し、契約更新月の分散管理を実施する</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">供給不安は契約条件を先に締め付ける</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022年の新電力撤退ラッシュのように、実際の請求上昇より先に見積条件や供給継続性が悪化する局面がある</td>
                  <td className="border-b border-slate-200 px-3 py-2">契約更新を前倒しし、供給継続条項・上限条項・複数業者の競合状況を事前に確認する</td>
                </tr>
              </tbody>
            </table>
          </div>
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
