import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { DEMAND_HOURLY_AVG, DEMAND_WEEKDAY_WEEKEND, LOAD_FACTOR_FY } from "../../data/demandData";

const pageTitle = "契約電力とは｜法人の電気料金・基本料金・見積比較で押さえたい考え方";
const pageDescription =
  "契約電力とは何かを法人向けに解説。基本料金との関係、請求書や見積書での見方、見直し時に確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "契約電力とは 法人",
    "契約電力 基本料金 関係",
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
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "契約電力とは",
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

export default function ContractDemandWhatIsItPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">契約電力とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電気料金では、契約電力という言葉が請求書や見積書で頻繁に登場します。記載は見つけられても、
          実務上どのように重要なのか分かりにくいケースがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約電力の基本的な考え方と、請求確認・見積比較で押さえたい確認ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力が何を決める数値なのか</li>
            <li>使用量とどこが違い、請求書のどこで確認するか</li>
            <li>見積比較や契約見直しで判断を誤らないための確認軸</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力は何を決める数値なのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は、電力契約の前提条件を表す重要な数値です。実際に使った電力量そのものではなく、基本料金や契約条件を読む起点になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、請求書や見積書では使用量とは別に確認し、契約前提としての整合性を見ていく必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量とは何が違うか</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">契約電力</th>
                  <th className="border border-slate-200 px-3 py-2">使用量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">意味</td>
                  <td className="border border-slate-200 px-3 py-2">契約条件の前提になる数値</td>
                  <td className="border border-slate-200 px-3 py-2">実際に使った電力量</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">主に関係するもの</td>
                  <td className="border border-slate-200 px-3 py-2">基本料金・契約条件</td>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">実務で見る場面</td>
                  <td className="border border-slate-200 px-3 py-2">見積比較・契約更新・見直し</td>
                  <td className="border border-slate-200 px-3 py-2">月次請求確認・使用実績把握</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力はなぜ重要か</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金に関係しやすい</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が少ない月でも、基本料金は契約条件の影響を受けます。「あまり使っていないのに高い」と感じる場合は、契約電力と基本料金の関係確認が必要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">見積比較の前提になる</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力が異なる前提で算出された見積同士は単純比較できません。必ず同じ契約電力、同じ使用条件で比較しているかを確認します。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">設備更新や稼働変化とも関係する</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            空調設備の更新、生産ラインの増設、稼働時間帯の変更、拠点統廃合などがあると、過去の契約条件が現在の実態に合わなくなることがあります。
            使用量やピークの出方が変わった時は見直しトリガーです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力を見るときによくある誤解</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力はその月の使用量そのものだと考えてしまう</li>
            <li>契約電力が大きいほど、使わない月の固定費にも影響しやすいことを見落とす</li>
            <li>契約電力の数字だけで判断し、基本料金や使用実態と合わせて見ない</li>
            <li>見積比較で契約電力の前提差を確認せず、単価だけで判断してしまう</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書や見積書ではどこを見ればよいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力の記載欄</li>
            <li>基本料金の算出前提</li>
            <li>契約種別（低圧・高圧・特別高圧）</li>
            <li>現在契約と提案条件の差</li>
            <li>更新条件と見直し時期</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力の意味合いは契約区分によって見え方が異なるため、高圧・特別高圧のページもあわせて確認すると実務で使いやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">短い具体例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価が安く見える見積を受け取っても、契約電力の前提が現在契約より大きければ、固定費が増える可能性があります。
            単価だけでなく、契約電力を同一条件でそろえて比較することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力は、請求書と見積書の理解に欠かせない基礎概念です。使用量とは別の概念として押さえ、比較や見直しでは基本料金との関係を含めて確認することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">こんな方におすすめ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>初めて請求書を見る担当者</li>
            <li>契約更新前に全体像を確認したい方</li>
            <li>見積比較の前提知識を整理したい方</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次に読むページ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力とピーク使用の関係を知るなら「デマンドとは」</li>
            <li>現在の請求書を確認するなら「電気料金の請求書で確認したいポイント」</li>
            <li>見積比較へ進むなら「法人向け電気料金見積書の見方」</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実際の電力需要データで見る契約電力の重要性</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全国の実測データ（OCCTO公表データ集計）をもとに、電力需要がどのような時間帯パターンを持つかを確認します。需要のピーク構造を知ることが、契約電力の最適化につながります。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">24時間の需要パターン（全国平均）</h3>
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

          <h3 className="mt-6 text-lg font-semibold text-slate-900">平日 vs 休日の需要差</h3>
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

          <h3 className="mt-6 text-lg font-semibold text-slate-900">負荷率低下トレンド（東京エリア）</h3>
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

        <RelatedLinks
          heading="関連ページ"
          intro="契約電力の理解を、請求確認と見積比較の実務に接続するための導線です。"
          links={[
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
          ]}
        />

        <ContentCta
          heading="前提をそろえて比較する"
          description="契約電力を含む前提条件をそろえて比較することで、見積の差を実務的に判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="contract-demand-what-is-it" />
      </div>
    </main>
  );
}
