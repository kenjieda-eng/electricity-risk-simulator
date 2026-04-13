import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { DEMAND_MONTHLY_AVG, DEMAND_SEASON_HOUR } from "../../data/demandData";
import { WINTER_TMIN_TREND, HDD_TREND, SAPPORO_EXTREME_COLD } from "../../data/weatherData";

const pageTitle =
  "厳冬で法人・企業・自治体の電気料金・電気代はどう上がる？冬の上振れリスクを解説";
const pageDescription =
  "厳冬によって法人・企業・自治体の電気料金・電気代が上がる仕組みを解説。12月〜2月の暖房需要増、市場連動プランと固定プランの違い、冬季コスト上昇への備えを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "厳冬 電気料金 法人",
    "冬 電気代 上振れ",
    "暖房需要 電力コスト",
    "市場連動 固定 比較",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-severe-winter",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-severe-winter",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "厳冬リスクの解説",
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

export default function ElectricityCostRiskSevereWinterPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">厳冬リスク</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          厳冬で法人・企業・自治体の電気料金・電気代はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          冬は夏ほど注目されにくい一方で、暖房需要や供給余力の変化によって電気料金・電気代が上振れしやすい場面があります。
          法人・企業・自治体では、朝夕の需要集中や長時間運用が請求額に影響するケースが見られます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、厳冬リスクの基本構造と、契約メニューごとの見え方、冬前に確認したい実務ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">厳冬リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            厳冬リスクは、主に12月〜2月の暖房需要増により、電気料金が上振れしやすくなる要因です。特に朝夕は需要が伸びやすく、
            需給バランスが厳しくなることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            夏と同様に、単価の変動と使用量増が重なると、電気代の上振れ幅が大きくなるため、冬季も事前確認が重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ冬に電気料金・電気代が上がりやすいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冬季は暖房負荷の増加により使用量が伸びやすくなります。あわせて燃料コストや市場価格の変動が重なると、
            単価面でも上振れが生じる可能性があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            つまり、冬の電気料金上昇は「使った量が増えた」だけでは説明しきれない場合があります。請求書では、使用量、単価、調整項目を分けて確認する視点が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランで違いはあるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は、冬季の価格変動が請求額に反映されやすい傾向があります。対して、
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            は毎月単価が急変しにくいものの、請求額増や契約更新時の上昇が起こり得ます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            冬季だけでなく年間契約として見ることが重要です。契約タイプの整理は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体で影響が出やすい施設</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>寒冷地の事業所や倉庫、物流拠点</li>
            <li>福祉施設、医療系施設、学校、公共施設など暖房需要が高い施設</li>
            <li>稼働時間が長く、朝夕の需要増が顕著な施設</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            施設ごとの使用パターンを把握し、冬季特有の負荷を前提に契約や運用を見直すことが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">冬前に確認したい契約・運用ポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約更新タイミングと更新条件</li>
            <li>月別・時間帯別の使用パターン</li>
            <li>空調・暖房の運用計画</li>
            <li>料金メニューと調整項目の再確認</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            具体的な見直し手順は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電力契約を見直すタイミング
            </Link>
            、背景要因の全体像は{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            のページで確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">厳冬リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ベースケースとの比較で冬季要因の影響を把握したうえで、他要因と重ねた場合の変化を確認すると判断しやすくなります。
            最後に{" "}
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            と照合することで、年間の安全幅を検討しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需要データで見る厳冬リスクの実態</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            1月({DEMAND_MONTHLY_AVG.find(m => m.month === 1)?.avgMW.toLocaleString()}MW)と
            2月({DEMAND_MONTHLY_AVG.find(m => m.month === 2)?.avgMW.toLocaleString()}MW)が年間最大需要月。
            暖房需要が夏のピークを上回ります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            冬の18時台は{DEMAND_SEASON_HOUR.find(h => h.hour === 18)?.winter.toLocaleString()}MWに達し、暖房と照明が重なるピーク。
            夏の14時台({DEMAND_SEASON_HOUR.find(h => h.hour === 14)?.summer.toLocaleString()}MW)にほぼ匹敵する水準です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            厳冬時はLNG消費量も増加するため、燃料費調整額の上昇と需要ピークによるJEPX高騰が同時に発生するリスクがあります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">月</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                </tr>
              </thead>
              <tbody>
                {DEMAND_MONTHLY_AVG.filter(m => m.month <= 3 || m.month >= 11).map((row, i) => (
                  <tr key={row.month} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.label}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.avgMW.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">30年の気象データで見る厳冬リスクの変化</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期的な気象トレンドは、厳冬リスクの性質を変えつつあります。暖房需要の全体的な減少傾向と、依然として残る短期集中型の寒波リスクを気象庁データで確認します。
          </p>

          {/* A: 冬の平均最低気温 */}
          <h3 className="mt-5 text-lg font-semibold text-slate-900">冬（1〜2月）の平均最低気温の変化</h3>
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
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">変化</th>
                </tr>
              </thead>
              <tbody>
                {WINTER_TMIN_TREND.map((row, i) => (
                  <tr key={row.regionKey} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.cityJa}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.tmin1995_99.toFixed(1)}℃</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.tmin2020_25.toFixed(1)}℃</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.change >= 0 ? "text-sky-700" : "text-slate-600"}`}>
                      {row.change >= 0 ? `+${row.change.toFixed(1)}` : row.change.toFixed(1)}℃
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            名古屋+1.4℃、札幌+1.2℃ — 冬の最低気温は全都市で上昇傾向。温暖化により暖房需要は緩やかに減少しています。
          </div>

          {/* B: 暖房度日(HDD) */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">暖房度日（HDD）の減少トレンド</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            暖房度日（基準温度14℃）は暖房エネルギー需要の目安。1995〜99年平均と2020〜24年平均を比較（主要5都市）。
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">都市</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">1995〜99年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">2020〜24年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">減少率</th>
                </tr>
              </thead>
              <tbody>
                {HDD_TREND.map((row, i) => (
                  <tr key={row.regionKey} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.cityJa}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">{row.hdd1995_99.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.hdd2020_24.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-sky-700">{row.changePercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            大阪-19%、仙台-16%、金沢-16% — 暖房の必要日数は着実に減少しています。長期的には暖房電力需要の水準が下がる傾向にあります。
          </div>

          {/* C: 札幌の極寒日 */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">札幌の極寒日（-10℃以下）の推移</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">期間</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">-10℃以下の日数（累計）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "1990年代", value: SAPPORO_EXTREME_COLD.d1990s },
                  { label: "2000年代", value: SAPPORO_EXTREME_COLD.d2000s },
                  { label: "2010年代", value: SAPPORO_EXTREME_COLD.d2010s },
                  { label: "2020年代", value: SAPPORO_EXTREME_COLD.d2020s },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.label}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.value}日</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-7 text-slate-700">
            札幌の-10℃以下の日数: 1990年代64日 → 2020年代35日（約半減）。北海道でも厳寒日は明確に減少しており、暖房需要の長期的な減少と整合します。
          </div>

          {/* D: 注意喚起 */}
          <h3 className="mt-6 text-lg font-semibold text-slate-900">それでも厳冬リスクが残る理由</h3>
          <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 text-sm leading-7 text-slate-700">
            <p>
              暖房需要の減少トレンドにもかかわらず、1〜2月は依然として全国需要が最大（約11.2万MW）の季節です。厳冬リスクが「なくなった」わけではなく、<strong className="text-slate-900">LNG需給逼迫や寒波の短期集中リスクは依然として残ります。</strong>
            </p>
            <p className="mt-2">
              2021年1月のJEPX高騰（最大251円/kWh）は、まさに寒波が直接の引き金でした。年単位の需要が減っても、数日間の急激な寒波で需給は瞬時に逼迫します。市場連動プランを契約する法人にとって、冬の短期リスク管理は引き続き重要です。
            </p>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="冬季の上振れ要因を、契約比較と見直し判断に接続するための関連ページです。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動の影響を受けやすい契約の特徴を確認できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "予算見通しを重視する契約の考え方を整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約タイプ別のリスク差を比較できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "電力契約を見直すタイミング",
              description: "更新前に確認したい実務ポイントを整理できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "冬以外も含む上昇要因の全体像を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="冬季リスクを前提に比較・試算する"
          description="厳冬リスクを把握した後は、契約条件の比較とシミュレーションで、自社・自施設の上振れ幅を具体的に確認できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
