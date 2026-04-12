import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { DEMAND_PEAK_DAYS, DEMAND_SEASON_HOUR } from "../../data/demandData";

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

export default function ElectricityCostRiskHeatwavePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
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
            <li>デマンド管理と契約電力の整合</li>
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
      <div className="mt-6">
        <CategoryNextStepCta slug="electricity-cost-risk-heatwave" />
      </div>
    </main>
  );
}
