import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給の料金はなぜ高いのか 法人向けにわかりやすく解説";
const pageDescription =
  "最終保障供給の料金が高く見えやすい理由を、通常契約との違い、料金項目、実務上の注意点とあわせて法人向けに解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 料金",
    "最終保障供給 高い",
    "最終保障供給 法人 電気料金",
    "最終保障供給 高圧 料金",
    "最終保障供給 通常契約 違い",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-price",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-price",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給の料金はなぜ高いのか",
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

export default function LastResortSupplyPricePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の料金はなぜ高いのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、通常の法人向け電力契約と役割が異なり、供給をつなぐための臨時的な仕組みです。そのため、見積競争で選んだ契約と比べると、
          料金が高く見えやすい場面があります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の料金が高く見えやすい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は、通常契約の代替メニューではなく、契約不成立時のセーフティネットです。料金の作り方も「選んで安くする契約」とは前提が異なるため、
            同じ見方で単純比較すると割高に感じやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">通常の法人向け電力契約と何が違うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            通常契約は、料金メニュー・契約期間・条件を比較して選ぶことが前提です。一方、最終保障供給は供給継続を優先する制度であり、
            価格競争による条件最適化を前提にしていません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            両者の違いは{" "}
            <Link href="/last-resort-vs-retail-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              最終保障供給と通常契約の比較ページ
            </Link>{" "}
            でも確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金表を見るときに確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金と電力量料金を分けて確認する</li>
            <li>調整項目の扱いを確認する</li>
            <li>高圧・特別高圧の区分と条件を確認する</li>
            <li>単月ではなく複数月で傾向を見る</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約の料金構造は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧電力の料金の見方
            </Link>{" "}
            も参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">長く使い続けると何が起きやすいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給を長期で維持すると、料金面・契約運用面の見直し余地を取りにくくなることがあります。供給継続を確保しつつ、
            できるだけ早い段階で次の小売契約へ移行する準備を進めることが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次の契約を探す前に整理したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力、受電区分、使用量推移</li>
            <li>現在の請求内訳と上振れ要因</li>
            <li>契約満了時期と切り替え希望時期</li>
            <li>契約条件（期間、更新、違約金）の優先順位</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見直し開始の判断は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミング
            </Link>{" "}
            と{" "}
            <Link href="/last-resort-supply-switch" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              切り替え実務
            </Link>{" "}
            を組み合わせると進めやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の全体像と対象需要家の基本を確認できます。",
            },
            {
              href: "/last-resort-vs-retail-contract",
              title: "最終保障供給と通常契約の違い",
              description: "料金だけでなく契約の前提の違いを整理できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "切り替えまでの実務フローを確認できます。",
            },
            {
              href: "/compare",
              title: "比較ページ",
              description: "通常契約の比較検討を進める入口です。",
            },
          ]}
        />

        <ContentCta
          heading="料金差の背景を整理して次契約へ進む"
          description="最終保障供給の料金の見方を押さえたら、比較ページとシミュレーターで切り替え判断を具体化できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーターを使う" },
          ]}
        />
      </section>
    </main>
  );
}
