import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getArticlesByCategory,
  getArticlesBySlugs,
  getLatestArticles,
  getSortedCategories,
} from "../../lib/articles";
import {
  INDUSTRY_ARTICLES_CATEGORY_CARD,
  INDUSTRY_ARTICLES_QUICK_GUIDE_CARD,
} from "../../lib/articleIndustryCategories";

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

const quickGuideCards = [
  {
    title: "初めての方へ",
    description: "電気料金の構造や請求書・見積書の見方から確認したい方向けです。",
    ctaLabel: "基礎から知るへ",
    href: "/articles/basic",
    icon: "/icons/articles/book-guide.svg",
    alt: "開いたガイドブックのアイコン",
  },
  {
    title: "見直しを検討中の方へ",
    description: "契約更新や比較検討の前に、見直しの進め方を整理したい方向けです。",
    ctaLabel: "見直しポイントを知るへ",
    href: "/articles/review-points",
    icon: "/icons/articles/checklist-document.svg",
    alt: "チェック付き書類のアイコン",
  },
  {
    title: "月次の動向を見たい方へ",
    description: "補助政策や単価推移を確認し、次月以降の予算判断につなげたい方向けです。",
    ctaLabel: "法人電気料金振り返りへ",
    href: "/business-electricity-retrospective",
    icon: "/icons/articles/trend-chart.svg",
    alt: "推移チャートのアイコン",
  },
  INDUSTRY_ARTICLES_QUICK_GUIDE_CARD,
] as const;

const categoryDescriptions: Record<string, string> = {
  basic: "料金の基本構造や請求書・見積書の見方を確認できます。",
  "price-increase": "料金上昇の背景を燃料・市場・制度の観点で整理します。",
  "price-trends": "推移データと制度変化から高止まりの背景を確認できます。",
  "plan-types": "市場連動と固定を中心に契約メニューの違いを比較できます。",
  "review-points": "見直し準備から比較・切替まで実務の流れを整理できます。",
  "last-resort-supply": "最終保障供給の対象、料金、切替の基本を確認できます。",
  "risk-scenarios": "リスク要因別の上振れパターンと確認順を整理できます。",
  "power-procurement": "電力会社の仕入れ・調達構造を、JEPXから再エネ価値まで段階的に把握できます。",
};

const categoryIcons: Record<string, { src: string; alt: string }> = {
  basic: { src: "/icons/articles/book-guide.svg", alt: "ガイドブックのアイコン" },
  "price-increase": { src: "/icons/articles/electricity-plug.svg", alt: "電力プラグのアイコン" },
  "price-trends": { src: "/icons/articles/trend-chart.svg", alt: "折れ線グラフのアイコン" },
  "plan-types": { src: "/icons/articles/factory-building.svg", alt: "事業所のアイコン" },
  "review-points": { src: "/icons/articles/checklist-document.svg", alt: "チェックリストのアイコン" },
  "last-resort-supply": { src: "/icons/articles/shield-safety.svg", alt: "保護を示す盾のアイコン" },
  "risk-scenarios": { src: "/icons/articles/warning-risk.svg", alt: "リスク注意のアイコン" },
  "power-procurement": { src: "/icons/articles/network-procurement.svg", alt: "調達ネットワークのアイコン" },
};

const starterArticleSlugs = [
  "business-electricity-bill-breakdown",
  "why-business-electricity-prices-rise",
  "market-linked-vs-fixed",
  "how-to-start-electricity-contract-review",
  "when-to-review-electricity-contract",
];

const learningCategories = getSortedCategories().filter((category) => category.group === "learning");
const monthlyCategory = getSortedCategories().find((category) => category.slug === "monthly-review");

export default function ArticlesPage() {
  const latestArticles = getLatestArticles(3);
  const starterArticles = getArticlesBySlugs(starterArticleSlugs);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-6 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/book-guide.svg" alt="基礎知識ガイドのアイコン" width={36} height={36} />
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{pageDescription}</p>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickGuideCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <Image src={card.icon} alt={card.alt} width={39} height={39} />
                <h2 className="text-base font-semibold text-slate-900">{card.title}</h2>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
              <Link
                href={card.href}
                className="mt-3 inline-flex rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {card.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </header>

      <section className="mt-8" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          カテゴリから探す
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {learningCategories.map((category) => {
            const icon = categoryIcons[category.slug] ?? categoryIcons.basic;
            return (
              <article key={category.slug} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <Image src={icon.src} alt={icon.alt} width={36} height={36} />
                  <p className="text-xs font-semibold tracking-wide text-slate-500">カテゴリ {category.order}</p>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">{categoryDescriptions[category.slug] ?? category.description}</p>
                <p className="mt-2 text-sm text-slate-600">記事数: {getArticlesByCategory(category.slug).length}件</p>
                <Link
                  href={`/articles/${category.slug}`}
                  className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  カテゴリを見る
                </Link>
              </article>
            );
          })}
          <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <Image
                src={INDUSTRY_ARTICLES_CATEGORY_CARD.icon.src}
                alt={INDUSTRY_ARTICLES_CATEGORY_CARD.icon.alt}
                width={36}
                height={36}
              />
              <p className="text-xs font-semibold tracking-wide text-slate-500">
                カテゴリ {INDUSTRY_ARTICLES_CATEGORY_CARD.order}
              </p>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{INDUSTRY_ARTICLES_CATEGORY_CARD.name}</h3>
            <p className="mt-1.5 text-sm leading-6 text-slate-700">{INDUSTRY_ARTICLES_CATEGORY_CARD.description}</p>
            <p className="mt-2 text-sm text-slate-600">記事数: {INDUSTRY_ARTICLES_CATEGORY_CARD.articleCount}件</p>
            <Link
              href={INDUSTRY_ARTICLES_CATEGORY_CARD.href}
              className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
            >
              カテゴリを見る
            </Link>
          </article>
        </div>
      </section>

      {monthlyCategory ? (
        <section className="mt-8" aria-labelledby="monthly-heading">
          <h2 id="monthly-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            月次の動向を確認する
          </h2>
          <article className="mt-3 rounded-2xl border border-sky-200 bg-sky-50 p-5">
            <div className="flex items-center gap-3">
              <Image src="/icons/articles/trend-chart.svg" alt="月次推移のアイコン" width={36} height={36} />
              <h3 className="text-lg font-semibold text-slate-900">{monthlyCategory.name}</h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              補助政策や単価推移をもとに、法人向け電気料金の月次動向を整理したシリーズです。直近の動きを確認し、予算・調達判断の参考にできます。
            </p>
            <p className="mt-2 text-sm text-slate-600">記事数: {getArticlesByCategory(monthlyCategory.slug).length}件</p>
            <Link
              href="/business-electricity-retrospective"
              className="mt-3 inline-flex rounded-md border border-sky-300 bg-white px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
            >
              カテゴリを見る
            </Link>
          </article>
        </section>
      ) : null}

      <section className="mt-8" aria-labelledby="starter-heading">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/book-guide.svg" alt="初心者向けガイドのアイコン" width={33} height={33} />
          <h2 id="starter-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            初めて読むならこの5本
          </h2>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {starterArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-700">{article.description}</p>
              <Link
                href={`/${article.slug}`}
                className="mt-3 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
              >
                詳しく見る
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          新着記事
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs text-slate-500">{article.publishedAt}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-700">{article.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
