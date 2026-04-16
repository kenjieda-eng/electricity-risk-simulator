import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getIndustryArticleHref,
  getIndustryMiddleCategories,
  getIndustryMiddleCategory,
} from "../../../../lib/articleIndustryCategories";
import CategoryNextStepCta from "../../../../components/simulator/CategoryNextStepCta";
import { BreadcrumbJsonLd } from "../../../../components/seo/JsonLd";

type PageParams = {
  middle: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

export function generateStaticParams() {
  return getIndustryMiddleCategories().map((category) => ({
    middle: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { middle } = await params;
  const category = getIndustryMiddleCategory(middle);

  if (!category) {
    return {};
  }

  const canonicalPath = `https://simulator.eic-jp.org/articles/by-industry/${category.slug}`;

  return {
    title: category.metadataTitle,
    description: category.metadataDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: category.metadataTitle,
      description: category.metadataDescription,
      url: canonicalPath,
      siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
      locale: "ja_JP",
      type: "article",
      images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: category.metadataTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: category.metadataTitle,
      description: category.metadataDescription,
      images: ["/twitter-default.png"],
    },
  };
}

export default async function IndustryMiddlePage({ params }: PageProps) {
  const { middle } = await params;
  const category = getIndustryMiddleCategory(middle);

  if (!category) {
    notFound();
  }

  return (
    <>
    <BreadcrumbJsonLd
      items={[
        { name: "ホーム", url: "https://simulator.eic-jp.org/" },
        { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
        { name: "業種別", url: "https://simulator.eic-jp.org/articles/by-industry" },
        { name: category.name },
      ]}
    />
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
        <Link href="/articles/by-industry" className="underline-offset-2 hover:underline">
          業種別に知る
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">{category.name}</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-sm text-slate-600">カテゴリ 9 / 業種別に知る</p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">{category.name}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{category.intro}</p>
      </header>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">この分類の特徴</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {category.features.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">見直しで確認したいポイント</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {category.reviewPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6" aria-labelledby="planned-industries-heading">
        <div className="flex items-end justify-between gap-4">
          <h2 id="planned-industries-heading" className="text-xl font-semibold text-slate-900 sm:text-2xl">
            この分類に含まれる業種
          </h2>
          <p className="text-sm text-slate-600">{category.industries.length}業種</p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {category.industries.map((industry) => {
            const detailHref = getIndustryArticleHref(category.slug, industry.plannedSlug);

            return (
              <article
                key={industry.plannedSlug}
                data-planned-slug={industry.plannedSlug}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
                  {detailHref ? (
                    <span className="shrink-0 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">公開中</span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">準備中</span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{industry.description}</p>
                {detailHref ? (
                  <Link
                    href={detailHref}
                    className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                  >
                    詳細ページを見る
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">戻り導線</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/articles/by-industry"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            業種別に知るへ戻る
          </Link>
        </div>
      </section>

      <div className="mt-6">
        <CategoryNextStepCta categorySlug="industry-guide" />
      </div>
    </main>
    </>
  );
}
