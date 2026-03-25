import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "特別高圧・高圧・低圧で電気料金の上がり方はどう違うのか｜法人向けに推移を比較";
const pageDescription =
  "特別高圧・高圧・低圧の電気料金推移を比較しながら、上がり方の違いや見え方の差を法人向けに解説します。契約区分ごとに何をどう比較すべきかも整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧 高圧 低圧 違い",
    "法人 電気料金 区分比較",
    "電気料金 推移 区分別",
    "高圧電力 料金見直し",
    "契約区分 比較方法",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-by-voltage-type",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-by-voltage-type",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "電気料金の区分別比較",
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

export default function ElectricityPriceByVoltageTypePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          特別高圧・高圧・低圧で電気料金の上がり方はどう違うのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の高止まりを確認するときは、区分を分けて見ることが欠かせません。特別高圧、高圧、低圧では契約条件や影響要因が異なり、
          同じ期間でも上がり方や落ち着き方に差が出ます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、2019年から2025年の推移をもとに区分ごとの差を整理し、自社の契約区分で何を確認すべきかを解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分ごとに電気料金の見え方は変わる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧、高圧、低圧は、同じ電気料金でも変動の受け方が異なります。例えば、特別高圧と高圧は調達環境や契約条件の変化が単価に出やすく、
            低圧電灯は補助金や制度要因の見え方が重なりやすい特徴があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            まずは自社がどの契約区分かを明確にし、その区分の推移で判断することが、実務的な第一歩です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">推移データで見る区分ごとの差</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年から2021年平均と2025年を比較すると、全区分で高い水準が続いています。なかでも上昇幅は特別高圧と高圧で大きく、
            低圧でも安値期には戻っていません。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2019-2021平均</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2022年</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2025年</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">特別高圧</td>
                  <td className="border border-slate-200 px-3 py-2">11.434</td>
                  <td className="border border-slate-200 px-3 py-2">17.143</td>
                  <td className="border border-slate-200 px-3 py-2">17.414</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">高圧</td>
                  <td className="border border-slate-200 px-3 py-2">15.024</td>
                  <td className="border border-slate-200 px-3 py-2">20.577</td>
                  <td className="border border-slate-200 px-3 py-2">21.145</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">低圧電灯</td>
                  <td className="border border-slate-200 px-3 py-2">21.760</td>
                  <td className="border border-slate-200 px-3 py-2">26.839</td>
                  <td className="border border-slate-200 px-3 py-2">26.891</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">低圧電力</td>
                  <td className="border border-slate-200 px-3 py-2">25.622</td>
                  <td className="border border-slate-200 px-3 py-2">30.336</td>
                  <td className="border border-slate-200 px-3 py-2">30.194</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2022年の急騰後にピークから低下した区分があっても、基準期に戻っていない点は共通しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が自社の契約区分で確認したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約区分に応じて、見るべき論点は少しずつ変わります。特別高圧・高圧では単価条件と調達条件、低圧では制度要因や補助金の見え方を分けて確認することが有効です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>特別高圧: 単価上振れの継続と調達条件の変化</li>
            <li>高圧: 基本料金と電力量料金のバランス、契約更新条件</li>
            <li>低圧電灯: 制度要因や補助金による見え方の変化</li>
            <li>低圧電力: 季節変動を含む年間での比較</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単純な平均比較だけでは見落としやすい点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            区分をまたいだ単純比較だけで「自社は高い・安い」を判断すると、見落としが発生しやすくなります。契約条件、稼働時間、季節変動、
            調整項目の扱いが異なるため、まずは同一区分内で時系列比較するのが基本です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            区分別の請求構造は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧電力の料金解説
            </Link>
            、見直しの時期は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミングのページ
            </Link>
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="区分差を把握したうえで、契約見直しの実務に接続しやすいページです。"
          links={[
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧契約で確認したい請求項目と見方を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直しに適した場面と確認項目を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "契約比較で外しにくい実務観点を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="自社区分で比較を進める"
          description="区分ごとの違いを前提に、現行契約と候補条件を比較すると、判断の精度を上げやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/high-voltage-electricity-pricing", label: "高圧料金の見方を見る" },
            { href: "/when-to-review-electricity-contract", label: "見直しタイミングを見る" },
          ]}
        />
      </section>
    </main>
  );
}
