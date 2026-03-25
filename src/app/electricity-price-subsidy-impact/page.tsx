import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "補助金縮小で電気料金はどう見え方が変わったのか｜法人向けに推移データから整理";
const pageDescription =
  "電気料金補助金の影響で、2023年以降の電気料金の見え方は変わっています。補助金があるときと縮小後で、法人向け電気料金の実感がどう変わるのかを推移データをもとに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 補助金 影響",
    "法人 電気料金 見え方",
    "補助金縮小 電気代",
    "ベース単価 高止まり",
    "電力契約 見直し 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-subsidy-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-subsidy-impact",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "補助金縮小と電気料金の見え方",
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

export default function ElectricityPriceSubsidyImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">補助金縮小で電気料金はどう見え方が変わったのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、補助金の有無によって請求額の見え方が変わります。負担感が一時的に和らぐ期間がある一方で、
          補助金が縮小すると、ベース単価の高さが再び見えやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、2019年から2025年の推移を踏まえ、2023年以降の見え方の変化を法人向けに整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金があるときは請求額の見え方が変わる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金が適用される期間は、請求額が抑えられて見えるため、単価の基礎的な水準変化を把握しにくくなります。
            その結果、実際には高い水準が続いていても、負担が落ち着いたように見えることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、補助の有無で見える請求額と、補助を除いたベースの単価水準を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2023年以降の推移をどう読むか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年から2025年の年平均データを見ると、2022年ほどのピークではないものの、基準期より高い水準が続いています。例えば高圧は、
            2023年22.958、2024年21.469、2025年21.145で、2019年から2021年平均15.024を大きく上回ります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            同様に特別高圧も、2023年21.189、2024年18.212、2025年17.414と高い水準です。補助金による見え方の変化と、実際の単価水準を切り分ける必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が「一時的な抑制」と「ベース単価」を分けて考える理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助は短期的な負担緩和として有効でも、契約見直しの判断軸を補助前提に置くと、縮小時にコストが想定より増える可能性があります。
            法人の中期的な予算管理では、補助の有無より先にベース単価の水準を確認することが必要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>短期の請求額だけで判断しない</li>
            <li>契約更新時の単価条件を明確に確認する</li>
            <li>補助縮小後のコスト感を事前に想定する</li>
            <li>調整項目と契約単価を分けて分析する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金頼みで判断しないための見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、月次請求の上下だけを追うのではなく、複数年での単価推移を確認しながら契約条件を見直すことが有効です。
            比較時は、補助がある前提とない前提の両方で試算し、想定レンジを持っておくと判断しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較方法は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力比較のポイント
            </Link>
            、見直しの時期は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミングの解説
            </Link>
            も参考になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="補助金の見え方を整理したうえで、比較実務に接続するためのページです。"
          links={[
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "補助の有無を含めた比較観点を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直し判断のタイミングと確認項目を把握できます。",
            },
            {
              href: "/electricity-price-without-renewable-surcharge",
              title: "再エネ賦課金を除いた見方",
              description: "請求額とベース単価を分けて把握する視点を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="補助の有無を分けて比較する"
          description="一時的な抑制効果とベース単価を切り分けて比較すると、契約判断の再現性を高めやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/how-to-compare-electricity-suppliers", label: "比較ポイントを見る" },
            { href: "/when-to-review-electricity-contract", label: "見直しタイミングを見る" },
          ]}
        />
      </section>
    </main>
  );
}
