import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRY_CATEGORY_TOP, getIndustryMiddleCategories } from "../../../lib/articleIndustryCategories";

const canonicalPath = "https://simulator.eic-jp.org/articles/by-industry";

export const metadata: Metadata = {
  title: INDUSTRY_CATEGORY_TOP.metadataTitle,
  description: INDUSTRY_CATEGORY_TOP.metadataDescription,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: INDUSTRY_CATEGORY_TOP.metadataTitle,
    description: INDUSTRY_CATEGORY_TOP.metadataDescription,
    url: canonicalPath,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: INDUSTRY_CATEGORY_TOP.metadataTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: INDUSTRY_CATEGORY_TOP.metadataTitle,
    description: INDUSTRY_CATEGORY_TOP.metadataDescription,
    images: ["/twitter-default.png"],
  },
};

export default function ArticlesByIndustryPage() {
  const middleCategories = getIndustryMiddleCategories();

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
        <span className="text-slate-800">{INDUSTRY_CATEGORY_TOP.pageTitle}</span>
      </nav>

      <header className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/factory-building.svg" alt="業種別カテゴリのアイコン" width={36} height={36} />
          <div>
            <p className="text-sm font-semibold text-slate-500">カテゴリ 9</p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">{INDUSTRY_CATEGORY_TOP.pageTitle}</h1>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{INDUSTRY_CATEGORY_TOP.lead}</p>
      </header>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">このカテゴリで分かること</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
          {INDUSTRY_CATEGORY_TOP.learnPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8" aria-labelledby="industry-group-heading">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/network-procurement.svg" alt="分類一覧のアイコン" width={32} height={32} />
          <h2 id="industry-group-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            業種分類から探す
          </h2>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {middleCategories.map((category, index) => (
            <article key={category.slug} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <Image src="/icons/articles/factory-building.svg" alt="" width={32} height={32} aria-hidden />
                <p className="text-xs font-semibold tracking-wide text-slate-500">分類 {index + 1}</p>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{category.name}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-700">{category.shortDescription}</p>
              <p className="mt-2 text-sm text-slate-600">対象業種: {category.industries.length}業種</p>
              <Link
                href={`/articles/by-industry/${category.slug}`}
                className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
              >
                分類を見る
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">どこから読むとよいか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{INDUSTRY_CATEGORY_TOP.readingGuide}</p>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-sky-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">次に確認したいページ</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          業種ごとの見方を整理したうえで、固定プランと市場連動プランの違いを確認すると、比較検討の軸を合わせやすくなります。
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href={INDUSTRY_CATEGORY_TOP.footerLink.href}
            className="inline-flex items-center justify-center rounded-md border border-sky-300 bg-white px-4 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            {INDUSTRY_CATEGORY_TOP.footerLink.label}
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            解説ページ一覧に戻る
          </Link>
        </div>
      </section>
    </main>
  );
}
