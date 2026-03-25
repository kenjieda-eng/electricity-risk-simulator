import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金の相場はどう見る？比較前に知りたい考え方を解説";
const pageDescription =
  "法人向け電気料金の相場感をどう捉えるかを整理。単価だけで比較しにくい理由、請求書や見積書で確認したいポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 相場",
    "電気料金 相場 見方",
    "法人 見積比較",
    "請求書 見直し",
    "高圧 特別高圧 料金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-price-benchmark",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-price-benchmark",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金の相場はどう見るか",
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

export default function BusinessElectricityPriceBenchmarkPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金の相場はどう見る？請求書・見積書を比較するときの考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金の相場を知りたいと思っても、家庭向けのように単純な比較はしにくいのが実情です。
          契約電力、使用量、使用時間帯、契約メニュー、調整項目によって見え方が変わるためです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人向け電気料金の相場をどう見ればよいか、比較前に押さえたい考え方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人向け電気料金の相場が見えにくい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人契約は拠点規模や運用条件の差が大きく、同じ業種でも料金構造が一致しません。
            そのため、単一の相場数値で高い・安いを判定するのは難しく、条件ごとの比較が必要になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単価だけで比較しにくい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価が低く見えても、基本料金や調整項目、契約条件によって最終総額は変わります。相場感をつかむには、単価だけでなく請求額の構成を分けて確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金構造の基礎は
            {" "}
            <Link href="/business-electricity-bill-breakdown" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人向け電気料金の内訳
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で先に確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金・電力量料金・調整項目を分けて把握する</li>
            <li>契約電力と使用量の関係を確認する</li>
            <li>前月・前年同月と比較して増減要因を整理する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実際の確認手順は
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              請求書の見方
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で相場感をつかむ考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            相場感をつかむには、複数見積を同じ前提で比較することが有効です。基本料金、電力量料金、調整項目、契約条件をそろえて比較すると、価格差の理由を説明しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較の詳細は
            {" "}
            <Link href="/how-to-read-electricity-quote" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見積書の見方
            </Link>
            と
            {" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ポイント
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧・特別高圧で見方が変わる理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧では、契約電力やデマンド、時間帯影響の見方がより重要になります。低圧向けの感覚で単純比較すると、判断を誤るリスクがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特高の料金構造は
            {" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧料金の見方
            </Link>
            と
            {" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              特別高圧料金の見方
            </Link>
            をあわせて確認すると整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断しにくいときに確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            判断が難しいときは、現在契約の請求実績と候補見積を同一条件で並べること、契約条件の差を明文化すること、変動要因を許容できるかを社内で確認することが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金の相場は、単価だけでなく総額と条件を合わせて見ることで実務的に判断しやすくなります。請求書確認と複数見積比較を組み合わせることが、相場感をつかむ近道です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="相場感の整理を、請求確認と比較判断に接続するための導線です。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "相場比較の前提となる料金構造を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "現状把握に必要な請求書の見方を整理できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積比較で確認したい項目を整理できます。",
            },
            {
              href: "/articles",
              title: "法人向け電気料金の基礎知識",
              description: "関連する基礎・見直しテーマを一覧で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較前提をそろえて確認する"
          description="相場感を整理したら、比較ページとシミュレーションで条件差を具体的に確認することが有効です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
