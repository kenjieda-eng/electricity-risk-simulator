import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getArticlesBySlugs, getCategoryBySlug, getSortedCategories } from "../../../lib/articles";

type PageParams = {
  categorySlug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const defaultDescription = "法人向け電気料金の基礎知識をテーマ別に整理したカテゴリ一覧ページです。";

const categoryDescriptionOverrides: Record<string, string> = {
  "power-procurement":
    "法人向け電気料金の背景にある、電力会社の調達構造を整理した解説カテゴリです。自社発電、市場調達、JEPX、相対契約、分散調達、ヘッジの考え方を順に確認できます。",
};

export function generateStaticParams() {
  return getSortedCategories().map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return {};
  }

  const title = `${category.name}｜法人向け電気料金の基礎知識`;
  const description = categoryDescriptionOverrides[category.slug] ?? category.description ?? defaultDescription;
  const canonicalPath = `https://simulator.eic-jp.org/articles/${category.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-default.png"],
    },
  };
}

export default async function ArticleCategoryPage({ params }: PageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);
  const recommendedArticles = getArticlesBySlugs(category.recommendedReadingOrder);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link href="/articles" className="underline-offset-2 hover:underline">
          解説ページ一覧
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">{category.name}</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-sm text-slate-600">カテゴリ {category.order}</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{category.name}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{category.intro}</p>
      </header>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このカテゴリで分かること</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {category.learnPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">おすすめの読む順番</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {recommendedArticles.map((article) => (
            <li key={article.slug}>
              <Link href={`/${article.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6" aria-labelledby="article-list-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="article-list-heading" className="text-xl font-semibold text-slate-900 sm:text-2xl">
            記事一覧
          </h2>
          <p className="text-sm text-slate-600">{categoryArticles.length}件</p>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {categoryArticles.map((article) => (
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

      {category.slug === "power-procurement" ? (
        <section className="mt-8 rounded-xl border border-sky-300 bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">あわせて読みたいカテゴリ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            調達構造の理解は、料金上昇要因や契約メニュー、リスクシナリオの理解とつながります。次のカテゴリへ進むと、実務での比較や説明に使いやすくなります。
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/articles/price-increase" className="rounded-lg border border-sky-200 bg-white p-3 text-sm text-sky-700 hover:bg-sky-100">
              料金が上がる理由を知る
            </Link>
            <Link href="/articles/plan-types" className="rounded-lg border border-sky-200 bg-white p-3 text-sm text-sky-700 hover:bg-sky-100">
              契約メニューの違いを知る
            </Link>
            <Link href="/articles/risk-scenarios" className="rounded-lg border border-sky-200 bg-white p-3 text-sm text-sky-700 hover:bg-sky-100">
              リスクシナリオ別に知る
            </Link>
          </div>
        </section>
      ) : null}

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">戻り導線と関連ページ</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            解説ページ一覧に戻る
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            料金メニューの比較を見る
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
