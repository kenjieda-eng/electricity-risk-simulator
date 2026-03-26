import type { Metadata } from "next";
import Link from "next/link";
import {
  getArticlesByCategory,
  getArticlesBySlugs,
  getFeaturedArticles,
  getLatestArticles,
  getSortedCategories,
} from "../../lib/articles";

const pageTitle = "法人向け電気料金の基礎知識";
const pageDescription =
  "法人向け電気料金の見直しや比較の前に押さえたい基礎知識を、テーマ別に整理した解説ページ一覧です。料金の仕組み、上昇要因、契約メニューの違い、見直し時の確認ポイントを、必要なテーマから確認できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/articles",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/articles",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const guideCards = [
  {
    title: "初めての方におすすめ",
    description: "まずは電気料金の構造や請求書・見積書の見方から確認したい方向けです。",
    articleSlugs: ["business-electricity-bill-breakdown", "contract-demand-what-is-it", "demand-charge"],
  },
  {
    title: "見直しを検討中の方におすすめ",
    description: "契約更新や比較検討の前に、見直しの進め方を整理したい方向けです。",
    articleSlugs: ["when-to-review-electricity-contract", "how-to-compare-electricity-suppliers", "electricity-contract-terms"],
  },
  {
    title: "最終保障供給を確認したい方におすすめ",
    description: "対象・料金・切替を短時間で把握したい法人・自治体担当者向けです。",
    articleSlugs: ["last-resort-supply", "last-resort-supply-price", "last-resort-supply-switch"],
  },
  {
    title: "電気料金上昇リスクを知りたい方におすすめ",
    description: "要因別に上振れリスクを確認し、説明しやすい形で整理したい方向けです。",
    articleSlugs: ["worst-case-electricity-cost-risk", "electricity-cost-risk-heatwave", "electricity-cost-risk-geopolitics"],
  },
  {
    title: "調達構造から理解したい方におすすめ",
    description:
      "なぜ電気料金が動くのかを、調達の仕組みから確認したい方へ。市場連動プランの理解やリスク把握の前提として活用できます。",
    articleSlugs: ["how-electricity-is-procured", "jepx-explained", "how-electricity-prices-are-determined", "power-risk-management"],
    highlight: true,
  },
];

const learningCategories = getSortedCategories().filter((category) => category.group === "learning");
const monthlyCategories = getSortedCategories().filter((category) => category.group === "monthly");

export default function ArticlesPage() {
  const latestArticles = getLatestArticles(6);
  const featuredArticles = getFeaturedArticles(5);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{pageDescription}</p>
      </header>

      <section className="mt-8" aria-labelledby="guide-heading">
        <h2 id="guide-heading" className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          目的別のおすすめ導線
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {guideCards.map((guide) => (
            <article
              key={guide.title}
              className={`rounded-xl border p-5 ${guide.highlight ? "border-sky-300 bg-sky-50" : "border-slate-200 bg-white"}`}
            >
              <h3 className="text-lg font-semibold text-slate-900">{guide.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{guide.description}</p>
              <div className="mt-3 space-y-2">
                {getArticlesBySlugs(guide.articleSlugs).map((article) => (
                  <p key={article.slug}>
                    <Link href={`/${article.slug}`} className="text-sm text-sky-700 underline-offset-2 hover:underline">
                      {article.title}
                    </Link>
                  </p>
                ))}
              </div>
              {guide.highlight ? (
                <Link
                  href="/articles/power-procurement"
                  className="mt-4 inline-flex rounded-md border border-sky-300 bg-white px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
                >
                  電力調達カテゴリを見る
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          カテゴリ一覧
        </h2>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-lg font-semibold text-slate-900">基礎知識を学ぶ</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {learningCategories.map((category) => (
              <article
                key={category.slug}
                className={`rounded-xl border p-5 ${
                  category.slug === "power-procurement" ? "border-sky-300 bg-sky-50" : "border-slate-200 bg-white"
                }`}
              >
                <h4 className="text-lg font-semibold text-slate-900">
                  {category.order}. {category.name}
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-700">{category.description}</p>
                <p className="mt-3 text-sm text-slate-600">記事数: {getArticlesByCategory(category.slug).length}件</p>
                <Link
                  href={`/articles/${category.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  カテゴリを見る
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">月次の動向を確認する</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {monthlyCategories.map((category) => (
              <article key={category.slug} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-lg font-semibold text-slate-900">
                  {category.order}. {category.name}
                </h4>
                <p className="mt-2 text-sm leading-7 text-slate-700">{category.description}</p>
                <p className="mt-3 text-sm text-slate-600">記事数: {getArticlesByCategory(category.slug).length}件</p>
                <Link
                  href={category.slug === "monthly-review" ? "/business-electricity-retrospective" : `/articles/${category.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  カテゴリを見る
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          新着記事
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {latestArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs text-slate-500">{article.publishedAt}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          初めての方におすすめの記事
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {featuredArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{article.description}</p>
              <Link
                href={`/${article.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
              >
                詳しく見る
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">次のアクション</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          解説ページで前提を確認した後は、比較ページや使い方ページで自社条件に近い形の検討へ進めます。
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/compare"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            料金メニューの違いを比較する
          </Link>
          <Link
            href="/how-to"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            シミュレーターの使い方を見る
          </Link>
        </div>
      </section>
    </main>
  );
}
