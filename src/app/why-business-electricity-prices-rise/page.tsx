import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { CDD_TREND } from "../../data/weatherData";

const pageTitle = "法人の電気料金が上がる理由とは？値上がりの主な要因と見直しポイントを解説";
const pageDescription =
  "法人の電気料金が上がる理由を、燃料価格、LNG、為替、JEPX、市場連動、燃料費調整額、再エネ賦課金、使用量や契約条件などの観点から整理して解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 上がる理由",
    "電気代 値上がり 要因",
    "燃料費調整額 再エネ賦課金",
    "JEPX 市場連動",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-business-electricity-prices-rise",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-business-electricity-prices-rise",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金が上がる理由",
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

export default function WhyBusinessElectricityPricesRisePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金が上がる理由とは？主な値上がり要因を整理
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金が上がったとき、原因は一つとは限りません。燃料価格の上昇、円安、市場価格の変動、燃料費調整額、制度要因、
          使用量の増加、契約条件の変化など、複数の要素が重なって請求額が変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          単に電気代が上がったと捉えるのではなく、何が増えたのかを分けて見ることが重要です。このページでは、上昇要因を全体像として整理し、
          見直し時に確認すべき観点を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金はなぜ変動するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金は、毎月まったく同じ条件で決まるわけではありません。請求額は、使用量だけでなく、契約プラン、燃料価格、
            卸市場価格、制度上の上乗せ項目など、複数の要素で決まります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            前月より使用量があまり変わっていなくても請求額が増えることがある一方、使用量が増えているのに単価が下がるケースもあります。
            請求額の変化は、単一要因で判断しない視点が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料価格の上昇が電気料金に影響する理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力供給では、火力発電が今も重要な役割を担っています。火力発電に使うLNG、石炭、原油などの価格が上がると、
            発電コストも上がり、その影響が電気料金に波及します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特に日本は燃料の多くを輸入に頼っているため、海外市況の影響を受けやすい構造です。上流のエネルギーコスト上昇が、
            法人の請求額増加につながるケースは少なくありません。背景構造は{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGと電気料金の解説
            </Link>
            でも確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG・原油・石炭・為替の影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金に影響する燃料は一つではありません。LNG、原油、石炭など、それぞれの国際価格が変動し、それが電力コストに反映されます。
            なかでもLNGは、日本の電力料金との関係が深い燃料の一つです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに見落としにくいのが為替です。同じ燃料価格でも、円安が進むと日本円ベースの輸入コストは上がります。
            国際市況と為替の両方を見ることが、請求額変化の理解につながります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格（JEPX）と契約プランの影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇は、燃料価格だけで決まるわけではありません。市場連動型プランでは、JEPXなどの卸電力市場価格の変動が料金に反映されやすくなります。
            需給が逼迫した時間帯や季節には、市場価格の上昇が請求額へ波及することがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方、固定型プランでも契約更新時や条件変更時に価格条件が見直される場合があります。契約タイプの違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動型と固定型の比較ページ
            </Link>
            で整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額や制度要因の影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金には、使用量や契約単価以外にも制度的な項目が上乗せされます。代表的なのが燃料費調整額や再エネ賦課金です。
            これらは総額に直接影響するため、請求額が増えた際は単価以外の変化も確認する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の仕組みは{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説ページ
            </Link>
            で詳しく整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量や契約条件によって請求額が上がるケース</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金が上がる理由は、外部要因だけではありません。自社側の使い方や契約条件が原因で請求額が増えるケースもあります。
            例えば、空調負荷の増加、稼働時間の延長、生産量の増加、ピーク時間帯への使用集中、契約電力の上昇などです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約内容が現在の使用実態に合っていない場合、必要以上にコストを負担していることもあります。市況要因と自社運用要因の両方を分けて見ることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が見直し時に確認したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金を見直すときは、安い単価を探すだけでは不十分です。まずは請求額が上がっている理由を切り分けることが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量が増えているのか</li>
            <li>契約単価が上がっているのか</li>
            <li>燃料費調整額の影響が大きいのか</li>
            <li>再エネ賦課金など制度項目が増えているのか</li>
            <li>市場連動型の影響を受けているのか</li>
            <li>契約条件が自社の実態に合っているか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">気候変動による構造的な需要変化</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            温暖化による冷房需要の増加（CDD: 東京+24%, 名古屋+40%）は、夏のピーク電力を構造的に押し上げ、JEPX卸価格の上昇要因になっています。猛暑日の増加（東京: 1990年代21日→2020年代101日）は、電力需給逼迫のリスクを高め、法人電気料金の上振れ要因として長期的に作用します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">都市</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">1995〜99年CDD</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">2020〜24年CDD</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">増加率</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CDD_TREND.map((row, i) => (
                  <tr key={row.cityJa} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{row.cityJa}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{row.cdd1995_99}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{row.cdd2020_24}</td>
                    <td className="border border-slate-200 p-3 text-right font-semibold text-rose-600">+{row.changePercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※CDD（冷房度日）: 基準温度22℃を超えた日の積算値。出典: 気象庁過去の気象データ（1995〜2024年）を集計。
          </p>
        </section>

        <RelatedLinks
          heading="次に確認したいページ"
          intro="「なぜ上がるか」を押さえたら、上がり幅・制度費目・長期推移・年次データへ進むと説明が具体化しやすくなります。"
          links={[
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどの程度上がるのか",
              description: "単価改定と調整項目を分けて、上がり幅の見方を整理できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因として請求に乗る賦課金の位置づけを確認できます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の10年推移",
              description: "長期の転換点と高止まりを、区分別に位置づけられます。",
            },
            {
              href: "/business-electricity-retrospective",
              title: "法人電気料金振り返り",
              description: "月次・年次の実データから、直近の動きを補完できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "燃調費が請求に反映される流れを個別に深掘りできます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して確認する"
          description="原因を切り分けた後は、現行契約と候補条件を同じ前提で比較することで、見直し方針を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">上昇要因をさらに個別に確認する</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            料金上昇の背景にある個別要因を、それぞれのページで詳しく確認できます。
          </p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/capacity-contribution-explained" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">容量拠出金とは</span>
              <span className="ml-2 text-slate-600">— 2024年度から始まった新たな制度負担</span>
            </Link>
            <Link href="/market-price-adjustment" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">市場価格調整額とは</span>
              <span className="ml-2 text-slate-600">— 市場連動型で発生する調整項目</span>
            </Link>
            <Link href="/impact-of-electricity-subsidy-ending" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">補助金終了の影響</span>
              <span className="ml-2 text-slate-600">— 補助縮小後の請求額の変化</span>
            </Link>
            <Link href="/why-market-linked-electricity-prices-rise" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">市場連動プランで上がる仕組み</span>
              <span className="ml-2 text-slate-600">— 市場連動特有の上昇パターン</span>
            </Link>
            <Link href="/why-business-electricity-bills-rise-suddenly" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">なぜ急に上がるのか</span>
              <span className="ml-2 text-slate-600">— ある月から請求が急増する理由</span>
            </Link>
            <Link href="/when-business-electricity-price-increases-start" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">値上げはいつから反映されるか</span>
              <span className="ml-2 text-slate-600">— 検針月・契約更新との関係</span>
            </Link>
            <Link href="/lng-electricity-price" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">LNGと電気料金の関係</span>
              <span className="ml-2 text-slate-600">— LNG市場の動きが法人料金に波及する背景</span>
            </Link>
            <Link href="/power-procurement-adjustment-fee" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">電源調達調整費とは</span>
              <span className="ml-2 text-slate-600">— 燃調費との違いと見積比較での確認</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="why-business-electricity-prices-rise" />
      </div>
    </main>
  );
}
