import type { Metadata } from "next";
import Link from "next/link";
import { articleList, articleCategories } from "../../data/articles";
import ArticleSearchTool from "../../components/market-data/ArticleSearchTool";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "全記事検索｜法人向け電気料金・脱炭素・契約見直し200本超を横断検索";
const pageDescription = "電気料金・市場価格・脱炭素・PPA・BEMS・補助金など、200本超の解説記事をキーワード・カテゴリで横断検索できます。";
const pageUrl = "https://simulator.eic-jp.org/search";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function SearchPage() {
  // Build category lookup
  const catMap = new Map(articleCategories.map((c) => [c.slug, c.name]));
  const articles = articleList
    .filter((a) => !a.slug.includes("/"))
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      category: catMap.get(a.categorySlug) ?? a.category,
      categorySlug: a.categorySlug,
    }));

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "全記事検索" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">全記事検索</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">全記事横断検索</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金・市場・契約・脱炭素・PPA・BEMS・補助金など、{articles.length}本超の解説記事を横断検索できます。キーワードとカテゴリで絞り込み、自社課題に合う記事に最短到達できます。
          </p>
        </header>

        <ArticleSearchTool articles={articles} />

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">カテゴリから探す</h2>
          <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
            {articleCategories.map((c) => (
              <Link key={c.slug} href={`/articles/${c.slug}`} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-sky-50">
                <span className="font-semibold text-slate-900">カテゴリ{c.order}: {c.name}</span>
                <p className="mt-1 text-xs text-slate-600">{c.description}</p>
              </Link>
            ))}
          </div>
        </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
