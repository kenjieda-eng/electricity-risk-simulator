import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_KEYS, RETROSPECTIVE_YEARS } from "./_lib/retrospective-data";

const pageTitle = "法人電気料金振り返り | 月次で見る電気料金動向";
const pageDescription =
  "法人向け電気料金の月次動向を、補助政策と当社団が運営している「新電力ネット」の推移データをもとに整理する振り返りコンテンツです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
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
  const yearlyRetrospectiveYears = [2019, ...RETROSPECTIVE_YEARS];

  const categoryLabels: Record<(typeof CATEGORY_KEYS)[number], string> = {
    "extra-high-voltage": "特別高圧",
    "high-voltage": "高圧",
    "low-voltage-power": "低圧電力",
    "low-voltage-lighting": "低圧電灯",
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人電気料金振り返り</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          月次の法人向け電気料金動向を、補助政策と当社団が運営している「新電力ネット」の推移データをもとに整理するコンテンツです。
          「なぜ下がった/上がったのか」「契約区分ごとに意味がどう違うか」を実務視点で確認できます。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">記事一覧</h2>
        <section className="mt-4 rounded-lg border border-slate-200 bg-sky-50/40 p-4">
          <h3 className="text-lg font-semibold text-slate-900">2019年〜2025年 年次振り返り（4区分）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年から2025年まで、特別高圧・高圧・低圧電力・低圧電灯の4区分を年別ページで整理しています。
            すべて小数点第一位で四捨五入した値を掲載し、グラフと前後年比較を確認できます。
          </p>
          <div className="mt-4 space-y-3">
            {yearlyRetrospectiveYears.map((year) => (
              <div key={year} className="rounded-md border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">{year}年</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {CATEGORY_KEYS.map((categoryKey) => (
                    <Link
                      key={`${year}-${categoryKey}`}
                      href={`/business-electricity-retrospective/${year}-${categoryKey}`}
                      className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      {year}年 {categoryLabels[categoryKey]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              href="/business-electricity-retrospective/special-high-voltage-2019-2025"
              className="underline-offset-2 hover:underline"
            >
              特別高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年から2025年までの特別高圧データをもとに、コロナ禍、ウクライナ危機、電気・ガス料金支援の影響を
            年別に整理した長文解説ページです。月次推移と年平均推移のグラフも掲載しています。
          </p>
          <Link
            href="/business-electricity-retrospective/special-high-voltage-2019-2025"
            className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
          >
            記事を読む
          </Link>
        </article>

        <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              href="/business-electricity-retrospective/high-voltage-2019-2025"
              className="underline-offset-2 hover:underline"
            >
              高圧の電気料金推移（2019年～2025年）｜コロナ・ウクライナ危機・補助金の影響を年別に解説
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年から2025年までの高圧データをもとに、コロナ禍、ウクライナ危機、電気・ガス料金支援の影響を
            年別に整理した長文解説ページです。月次推移と年平均推移のグラフも掲載しています。
          </p>
          <Link
            href="/business-electricity-retrospective/high-voltage-2019-2025"
            className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
          >
            記事を読む
          </Link>
        </article>

        <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              href="/business-electricity-retrospective/low-voltage-lighting-2019-2025"
              className="underline-offset-2 hover:underline"
            >
              低圧電灯の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年から2025年までの低圧電灯データをもとに、コロナ禍、燃料高騰、電気・ガス料金支援の影響を
            年別に整理した長文解説ページです。月次推移と年平均推移のグラフも掲載しています。
          </p>
          <Link
            href="/business-electricity-retrospective/low-voltage-lighting-2019-2025"
            className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
          >
            記事を読む
          </Link>
        </article>

        <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              href="/business-electricity-retrospective/low-voltage-power-2019-2025"
              className="underline-offset-2 hover:underline"
            >
              低圧電力の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            2019年から2025年までの低圧電力データをもとに、コロナ禍、燃料高騰、電気・ガス料金支援の影響を
            年別に整理した長文解説ページです。月次推移と年平均推移のグラフも掲載しています。
          </p>
          <Link
            href="/business-electricity-retrospective/low-voltage-power-2019-2025"
            className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
          >
            記事を読む
          </Link>
        </article>

        <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              href="/business-electricity-retrospective/2026-02"
              className="underline-offset-2 hover:underline"
            >
              【2026年2月】法人の電気料金はどう動いた？
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            補助政策と当社団が運営している「新電力ネット」のデータから、補助の恩恵を最終確認し、補助終了前後への備えを契約区分別に整理します。
          </p>
          <Link
            href="/business-electricity-retrospective/2026-02"
            className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
          >
            記事を読む
          </Link>
        </article>

        <article className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">
            <Link
              href="/business-electricity-retrospective/2026-01"
              className="underline-offset-2 hover:underline"
            >
              【2026年1月】法人の電気料金はどう動いた？
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            補助政策と当社団が運営している「新電力ネット」のデータから、秋からの上昇局面に対し、1月使用分で空気が大きく変わった点を整理します。
          </p>
          <Link
            href="/business-electricity-retrospective/2026-01"
            className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
          >
            記事を読む
          </Link>
        </article>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このシリーズで確認できること</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          <li>単月の請求額変化を、補助要因と市場要因に分けて把握する</li>
          <li>低圧・高圧・特別高圧で、同じ月でも意味合いが異なる点を整理する</li>
          <li>月次結果を次月以降の予算・契約見直しにどうつなげるかを確認する</li>
        </ul>
      </section>
    </main>
  );
}
