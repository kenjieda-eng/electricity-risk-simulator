import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金は高止まりしているのか｜2019年から2025年の推移で見る実態";
const pageDescription =
  "2019年から2025年までの電気料金推移データをもとに、法人向け電気料金が2022年の急騰後も元の水準に戻っていない実態を解説します。特別高圧・高圧・低圧の違いも含めて整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 推移",
    "電気料金 高止まり",
    "2019 2025 電気料金",
    "特別高圧 高圧 低圧 比較",
    "法人 電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-trend-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-trend-2019-2025",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金の推移",
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

export default function ElectricityPriceTrend20192025Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金は高止まりしているのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金は、2022年に大きく上昇した後、足元でやや落ち着いたように見える場面があります。ただし、2019年から2021年の水準と比較すると、
          2023年から2025年も依然として高い水準にあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、再エネ賦課金を含まない年平均データをもとに、急騰と高止まりを分けて整理し、特別高圧・高圧・低圧で何が違うのかを確認します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年から2025年の平均単価を見ると何が起きているか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まず年平均で見ると、2019年から2021年は比較的低い水準で推移し、2022年に一段高い水準へ移行したことが読み取れます。2023年以降はピークからの低下がある区分もありますが、
            2025年時点でも2019年から2021年の平均に戻っていません。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2019-2021平均</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2025年</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">差分</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">特別高圧</td>
                  <td className="border border-slate-200 px-3 py-2">11.434</td>
                  <td className="border border-slate-200 px-3 py-2">17.414</td>
                  <td className="border border-slate-200 px-3 py-2">+52.3%</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">高圧</td>
                  <td className="border border-slate-200 px-3 py-2">15.024</td>
                  <td className="border border-slate-200 px-3 py-2">21.145</td>
                  <td className="border border-slate-200 px-3 py-2">+40.7%</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">低圧電灯</td>
                  <td className="border border-slate-200 px-3 py-2">21.760</td>
                  <td className="border border-slate-200 px-3 py-2">26.891</td>
                  <td className="border border-slate-200 px-3 py-2">+23.6%</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">低圧電力</td>
                  <td className="border border-slate-200 px-3 py-2">25.622</td>
                  <td className="border border-slate-200 px-3 py-2">30.194</td>
                  <td className="border border-slate-200 px-3 py-2">+17.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年に急騰し、その後も元の水準には戻っていない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年は、特別高圧が17.143、高圧が20.577、低圧電灯が26.839、低圧電力が30.336まで上昇しました。ここだけを見ると「異常値」と捉えたくなりますが、
            2023年から2025年も2019年から2021年と比較すると高い水準が続いています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            重要なのは、ピークアウトしたかどうかと、過去の水準に戻ったかどうかは別の論点だという点です。法人の料金判断では、前年比較だけでなく数年単位の比較が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧・高圧・低圧で上昇幅はどう違うか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            上昇幅は区分ごとに異なり、特に特別高圧と高圧で上振れが大きい傾向があります。低圧電灯と低圧電力も2022年以降に上がったままで、安値期には戻っていません。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>特別高圧: 2021年10.830から2025年17.414へ上昇</li>
            <li>高圧: 2021年14.252から2025年21.145へ上昇</li>
            <li>低圧電灯: 2021年21.235から2025年26.891へ上昇</li>
            <li>低圧電力: 2021年25.184から2025年30.194へ上昇</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            他区分との単純比較で判断するより、自社の契約区分に近いデータで変化を確認することが実務的です。区分別の見方は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧料金の解説
            </Link>
            も参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高止まりを前提に法人が見ておきたいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の電気料金を一時的な高騰として扱うだけでは、見直しのタイミングを逃す可能性があります。法人としては、高止まりの可能性を前提に、
            調達条件と契約構造を再点検することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約更新時に単価と調整項目の条件を再確認する</li>
            <li>市場連動型と固定型のリスク配分を比較する</li>
            <li>直近1年だけでなく3年から5年でコスト推移を評価する</li>
            <li>補助金の有無とベース単価を分けて判断する</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="全体像を確認した後は、背景要因と比較実務のページへ進むと、見直し判断に接続しやすくなります。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "料金上昇の背景要因を構造で整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "契約単価だけでなく条件差まで確認する軸を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "いつ見直すべきかを実務上の変化点から確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="前提変化を踏まえて比較する"
          description="高止まりの可能性を前提に、現行契約と候補プランを同条件で比較すると、次の打ち手を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/why-business-electricity-prices-rise", label: "上昇要因の解説を見る" },
            { href: "/how-to-compare-electricity-suppliers", label: "比較時の確認ポイントを見る" },
          ]}
        />
      </section>
    </main>
  );
}
