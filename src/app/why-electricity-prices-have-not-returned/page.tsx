import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "2022年の急騰後も電気料金が元に戻らないのはなぜか｜法人向けに高止まりの背景を解説";
const pageDescription =
  "2022年に急騰した電気料金が、その後も2019年から2021年の水準に戻っていない背景を法人向けに整理します。燃料コスト、円安、料金改定、制度面などを踏まえて解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 元に戻らない 理由",
    "法人 電気料金 高止まり 背景",
    "2022年 電気料金 急騰",
    "ピークアウト 高止まり 違い",
    "電力契約 見直し 判断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-electricity-prices-have-not-returned",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-electricity-prices-have-not-returned",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "電気料金が元に戻らない背景",
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

export default function WhyElectricityPricesHaveNotReturnedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          2022年の急騰後も電気料金が元に戻らないのはなぜか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の急騰をピークとして、電気料金は一部で落ち着きが見える場面があります。しかし、2019年から2021年の水準と比較すると、
          2023年から2025年も高い状態が続いています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、今後予測ではなく背景構造に焦点を当て、なぜ「急騰後に元の水準へ戻り切っていない」のかを法人向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年は急騰の年だった</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年平均データでは、2022年に全区分で単価が大きく上昇しました。特別高圧17.143、高圧20.577、低圧電灯26.839、低圧電力30.336と、
            2019年から2021年の水準から一段上へ移動しています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この年の急騰が強く印象に残るため、現在の水準を低く見積もってしまうことがあります。まずは急騰の年と、その後の水準を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2023年以降に少し落ち着いても元の水準には戻っていない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年以降はピークより低下する区分がある一方、2025年は依然として基準期より高い状態です。例えば高圧は2019年から2021年平均15.024に対し、
            2025年は21.145、特別高圧は11.434に対して17.414です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ここで押さえたいのは、ピークアウトと原状回復は同義ではない点です。法人の予算管理や契約判断では、前月や前年比だけでなく、
            基準期比較を組み合わせる必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">元に戻らない背景として考えられること</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金水準が戻り切らない背景は単一ではなく、複数要因の組み合わせとして捉えるのが実務的です。一般的には次の論点が重なります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料コストの上昇と調達環境の変化</li>
            <li>円安による輸入コストへの影響</li>
            <li>料金改定や契約条件見直しの反映</li>
            <li>市場価格や燃料価格の変動が単価へ波及しやすい構造</li>
            <li>補助金の有無で請求額の見え方が変わる点</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            こうした背景を踏まえると、短期の落ち着きだけで「元に戻った」と判断するのは早計です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が「一時的か構造的か」を見分ける視点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            判断のポイントは、単月や単年度の上下よりも、基準期と比較した水準が継続しているかどうかです。加えて、請求総額だけではなく、
            単価と調整項目を分けて確認すると、変化の性質が見えやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>2019年から2021年平均との乖離が続いているか</li>
            <li>区分ごとの違いを確認しているか</li>
            <li>補助金の有無とベース単価を分けて見ているか</li>
            <li>契約更新時の条件変化を把握しているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景要因の全体像は{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              上昇要因の解説
            </Link>
            、契約タイプ差は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の比較
            </Link>
            で整理できます。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電圧区分別 電気料金単価の推移（円/kWh・年平均）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特別高圧</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高圧</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">低圧電灯</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">低圧電力</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2019〜2021平均</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">11.43</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">15.02</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">22.96</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">21.15</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2022（ピーク）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">17.14</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20.58</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">26.84</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30.34</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">17.84</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">21.47</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">29.25</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">29.86</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">16.52</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20.24</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">28.21</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">28.07</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2025</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">17.41</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">21.15</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">28.58</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">29.48</td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">基準期比（2025/基準）</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+52%</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+41%</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+24%</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+39%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年の単価は、基準期（2019〜2021年平均）と比較して特別高圧で<span className="font-semibold text-slate-900">+52%</span>、高圧で<span className="font-semibold text-slate-900">+41%</span>の水準です。
            ピークからの低下はあるものの、基準期への回帰には程遠い状態が続いています。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="背景を理解した後は、契約メニュー差と比較実務へ進む流れが有効です。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "料金上昇の背景を構造的に把握できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "どのリスクを受ける契約かを比較できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "2019年から2025年の推移を確認する",
              description: "急騰と高止まりの全体像を年次で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="背景理解を比較判断につなげる"
          description="一時的変動と構造変化を分けて把握したうえで、候補プランを比較すると意思決定しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/why-business-electricity-prices-rise", label: "上昇要因の解説を見る" },
            { href: "/market-linked-vs-fixed", label: "契約タイプ比較を見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="why-electricity-prices-have-not-returned" />
      </div>
    </main>
  );
}
