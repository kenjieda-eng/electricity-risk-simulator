import type { Metadata } from "next";
import Link from "next/link";
import {
  HISTORICAL_EXPLANATION_ITEMS,
  HUB_SERIES_POINTS,
  MONTHLY_RETROSPECTIVE_ITEMS,
  UKRAINE_SHOCK_FEATURE_ITEMS,
} from "./_lib/hub-data";

const pageTitle = "法人電気料金振り返り｜月次動向・年次推移を実務視点で確認";
const pageDescription =
  "法人向け電気料金の月次動向と年次推移を、補助政策と新電力ネットのデータをもとに整理した解説ページです。低圧・高圧・特別高圧ごとの違いや、予算・契約見直しに役立つ見方を確認できます。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人電気料金振り返り",
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

export default function BusinessElectricityRetrospectivePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人電気料金振り返り</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          月次の法人向け電気料金動向を、補助政策と当社団が運営している「新電力ネット」の推移データをもとに整理するコンテンツです。
          「なぜ下がったのか・上がったのか」「契約区分ごとに意味がどう違うか」を、実務視点で確認できます。
        </p>
        <section className="mt-6 rounded-lg border border-slate-200 bg-white p-4 sm:p-5">
          <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">このシリーズで確認できること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {HUB_SERIES_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </header>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">最新の月次振り返り</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {MONTHLY_RETROSPECTIVE_ITEMS.map((item) => (
            <article key={item.href} className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                <Link href={item.href} className="underline-offset-2 hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline">
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-500 sm:text-sm">
          今後の月次記事もこのセクションに追加していく想定です。
        </p>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">検証特集：ウクライナショックと法人電気料金</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年のウクライナ危機は、燃料調達、卸電力市場、補助政策、契約実務まで含めて、法人電気料金の見え方を大きく変えました。
          年別ページだけでは追いにくい「何が起点で、どこに波及し、いま何を学ぶべきか」を、検証特集としてまとめます。
          2026年3月のホルムズ海峡封鎖を受けて、過去のショックをどう読み直すかという視点もあわせて整理します。
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {UKRAINE_SHOCK_FEATURE_ITEMS.map((item) => (
            <article key={item.href} className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                <Link href={item.href} className="underline-offset-2 hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline">
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">区分別の通史解説（2019年〜2025年）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年から2025年までの推移を、契約区分ごとにまとめて確認したい方向けの解説です。
          コロナ禍、燃料高騰、ウクライナ危機、補助政策の影響を、区分ごとに整理しています。
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {HISTORICAL_EXPLANATION_ITEMS.map((item) => (
            <article key={item.href} className="flex h-full flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                <Link href={item.href} className="underline-offset-2 hover:underline">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
              <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline">
                {item.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-slate-900">年次アーカイブ（2019年〜2025年）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧・高圧・低圧電力・低圧電灯の4区分を、年ごとのページで確認できます。
          年別の推移を個別に見たい場合は、アーカイブ一覧から参照してください。
        </p>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-base font-semibold text-slate-900">年次アーカイブ一覧</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年〜2025年の各年ページを一覧で確認できます。
          </p>
          <Link
            href="/business-electricity-retrospective/archive"
            className="mt-3 inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            年次アーカイブ一覧を見る
          </Link>
        </div>
      </section>
    </main>
  );
}
