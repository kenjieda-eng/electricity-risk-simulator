import type { Metadata } from "next";
import Link from "next/link";
import HomePageClient from "./_components/HomePageClient";

export const metadata: Metadata = {
  title: "法人向け電気料金上昇、高騰リスクシミュレーター | 電気代・電気料金の上昇リスクを試算",
  description:
    "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/",
  },
  openGraph: {
    title: "法人向け電気料金上昇、高騰リスクシミュレーター | 電気代・電気料金の上昇リスクを試算",
    description:
      "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。",
    url: "https://simulator.eic-jp.org/",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金上昇、高騰リスクシミュレーター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "法人向け電気料金上昇、高騰リスクシミュレーター | 電気代・電気料金の上昇リスクを試算",
    description:
      "法人向けに、契約条件や価格上昇・高騰リスク要因をもとに、年間の電気代と電気料金の変動や上昇リスクを試算できるシミュレーターです。",
    images: ["/twitter-default.png"],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-white px-4 pb-8 pt-6 text-slate-800 sm:px-6 sm:pt-8 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              法人向け電気料金上昇、高騰リスクシミュレーター
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              市場価格や燃料費の変動を踏まえて、企業や自治体を含む法人組織の電気料金上昇・高騰リスクを簡易に確認できる電気料金シミュレーターです。
              月次・年間の電気代と電気料金の両面で、どれだけ負担が増えるかを試算できます。
              固定プランと市場連動型プランの比較を通じて、電力契約の更新や見直し時の検討材料を整理できます。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#simulator"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
              >
                シミュレーションを始める
              </Link>
              <Link
                href="/how-to"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                使い方を見る
              </Link>
              <Link
                href="/compare"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                比較ポイントを見る
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                解説ページ一覧を見る
              </Link>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">このツールでわかること</h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">電気料金上昇時の影響イメージ</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  季節変動やリスク要因を重ねたときに、年間の電気料金がどの程度上振れしうるかを確認できます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランと市場連動の比較</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  固定プランと市場連動型プランの差分を同じ条件で見比べ、価格変動への強さを把握できます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">電力契約の見直しポイント</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  契約更新時に確認したい条件を整理し、新電力を含む候補プラン比較のたたき台として使えます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">社内検討の説明材料</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  想定条件ごとの数値差を可視化できるため、担当者間での比較や稟議前の整理に活用できます。
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-slate-900">どんな利用者に向いているか</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-2.5">
                高圧・特別高圧の電力契約を見直したい企業・自治体・各種法人
              </li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-2.5">
                市場連動型プランのリスクを整理し、固定プランとの比較を進めたい担当者
              </li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-2.5">
                電気料金の変動幅を確認し、新電力を含む選択肢を検討したい企業や法人
              </li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-2.5">
                電気料金上昇リスクを社内・庁内で説明するための下準備をしたい担当者
              </li>
            </ul>
          </section>

          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">契約見直しの解説ページ</h2>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  市場連動プランと固定プランの基礎を整理した解説ページを追加しています。実際に試算する前に整理したい方は一覧ページをご覧ください。
                </p>
              </div>
              <Link
                href="/articles"
                className="inline-flex shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                解説ページ一覧へ
              </Link>
            </div>
          </section>

        </div>
      </section>

      <section id="simulator" className="scroll-mt-24">
        <HomePageClient />
      </section>
    </>
  );
}
