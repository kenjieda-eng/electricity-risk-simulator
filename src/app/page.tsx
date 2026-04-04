import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="px-4 pb-6 pt-4 text-slate-800 sm:px-6 sm:pt-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              法人向け電気料金上昇、高騰リスクシミュレーター
            </h1>
            <p className="mt-2.5 text-sm leading-7 text-slate-700 sm:mt-3 sm:text-base sm:leading-7">
              市場価格や燃料費の変動を踏まえて、企業や自治体を含む法人組織の電気料金上昇・高騰リスクを簡易に確認できる電気料金シミュレーターです。
              月次・年間の電気代と電気料金の両面で、どれだけ負担が増えるかを試算できます。
              固定プランと市場連動型プランの比較を通じて、電力契約の更新や見直し時の検討材料を整理できます。
            </p>
          </div>

          <section className="mt-6">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
              <Image
                src="/icons/section-tools.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0"
              />
              このツールでわかること
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-impact.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  電気料金上昇時の影響イメージ
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  季節変動やリスク要因を重ねたときに、年間の電気料金がどの程度上振れしうるかを確認できます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-compare.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  固定プランと市場連動の比較
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  固定プランと市場連動型プランの差分を同じ条件で見比べ、価格変動への強さを把握できます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-review.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  電力契約の見直しポイント
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  契約更新時に確認したい条件を整理し、新電力を含む候補プラン比較のたたき台として使えます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Image
                    src="/icons/item-material.png"
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  社内検討の説明材料
                </p>
                <p className="mt-0.5 text-sm leading-5 text-slate-600">
                  想定条件ごとの数値差を可視化できるため、担当者間での比較や稟議前の整理に活用できます。
                </p>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h2 className="flex items-center gap-2.5 text-xl font-semibold text-slate-900">
              <Image
                src="/icons/section-users.png"
                alt=""
                aria-hidden="true"
                width={36}
                height={36}
                className="h-9 w-9 shrink-0"
              />
              どんな利用者に向いているか
            </h2>
            <ul className="mt-3 grid gap-2 text-sm leading-5 text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                高圧・特別高圧の電力契約を見直したい企業・自治体・各種法人
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                市場連動型プランのリスクを整理し、固定プランとの比較を進めたい担当者
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                電気料金の変動幅を確認し、新電力を含む選択肢を検討したい企業や法人
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                <Image
                  src="/icons/list-check.png"
                  alt=""
                  aria-hidden="true"
                  width={22}
                  height={22}
                  className="mt-0.5 h-[22px] w-[22px] shrink-0"
                />
                電気料金上昇リスクを社内・庁内で説明するための下準備をしたい担当者
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">解説・比較・月次動向の入口</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              試算の前後に、基礎解説や比較診断、月次の単価動向をあわせて確認すると判断材料が揃いやすくなります。
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-sm">
              <Link
                href="/articles"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-sky-800 shadow-sm hover:bg-slate-50"
              >
                解説ページ一覧
              </Link>
              <Link
                href="/how-to"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-sky-800 shadow-sm hover:bg-slate-50"
              >
                使い方
              </Link>
              <Link
                href="/compare"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-sky-800 shadow-sm hover:bg-slate-50"
              >
                料金メニュー比較
              </Link>
              <Link
                href="/articles/basic"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                基礎から知る
              </Link>
              <Link
                href="/articles/price-increase"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                料金が上がる理由
              </Link>
              <Link
                href="/articles/risk-scenarios"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                リスクシナリオ
              </Link>
              <Link
                href="/business-electricity-retrospective"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-800 shadow-sm hover:bg-slate-50"
              >
                法人電気料金振り返り
              </Link>
            </div>
            <p className="mt-3 text-xs text-slate-500 sm:text-sm">
              代表例:{" "}
              <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline-offset-2 hover:underline">
                料金の内訳
              </Link>
              ／
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline-offset-2 hover:underline">
                上がる理由
              </Link>
              ／
              <Link href="/when-to-review-electricity-contract" className="text-sky-700 underline-offset-2 hover:underline">
                見直しタイミング
              </Link>
              ／
              <Link href="/business-electricity-price-trend-10-years" className="text-sky-700 underline-offset-2 hover:underline">
                10年推移
              </Link>
            </p>
          </section>

        </div>
      </section>

      <section id="simulator" className="scroll-mt-24">
        <HomePageClient />
      </section>
    </>
  );
}
