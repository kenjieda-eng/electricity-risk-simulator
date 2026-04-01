import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getArticlesByCategory,
  getArticlesBySlugs,
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
] as const;

const categoryDescriptions: Record<string, string> = {
  basic: "料金の基本構造や請求書・見積書の見方を確認できます。",
  "price-increase": "料金上昇の背景を燃料・市場・制度の観点で整理します。",
  "price-trends": "推移データと制度変化から高止まりの背景を確認できます。",
  "plan-types": "市場連動と固定を中心に契約メニューの違いを比較できます。",
  "review-points": "見直し準備から比較・切替まで実務の流れを整理できます。",
  "last-resort-supply": "最終保障供給の対象、料金、切替の基本を確認できます。",
  "risk-scenarios": "リスク要因別の上振れパターンと確認順を整理できます。",
  "power-procurement": "電力会社の調達構造と価格変動の関係を把握できます。",
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
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Image src="/icons/articles/book-guide.svg" alt="基礎知識ガイドのアイコン" width={24} height={24} />
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{pageDescription}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {quickGuideCards.map((card) => (
            <article key={card.title} className="rounded-xl border border-slate-200 bg-white p-5">
              <Image src={card.icon} alt={card.alt} width={26} height={26} />
              <h2 className="mt-3 text-base font-semibold text-slate-900">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                {card.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </header>

      <section className="mt-10" aria-labelledby="categories-heading">
        <h2 id="categories-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          カテゴリから探す
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {learningCategories.map((category) => {
            const icon = categoryIcons[category.slug] ?? categoryIcons.basic;
            return (
              <article key={category.slug} className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                  <p className="text-xs font-semibold tracking-wide text-slate-500">カテゴリ {category.order}</p>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{category.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{categoryDescriptions[category.slug] ?? category.description}</p>
                <p className="mt-3 text-sm text-slate-600">記事数: {getArticlesByCategory(category.slug).length}件</p>
                <Link
                  href={`/articles/${category.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
                >
                  カテゴリを見る
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {monthlyCategory ? (
        <section className="mt-10" aria-labelledby="monthly-heading">
          <h2 id="monthly-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            月次の動向を確認する
          </h2>
          <article className="mt-4 rounded-2xl border border-sky-200 bg-sky-50 p-6">
            <div className="flex items-center gap-3">
              <Image src="/icons/articles/trend-chart.svg" alt="月次推移のアイコン" width={24} height={24} />
              <h3 className="text-lg font-semibold text-slate-900">{monthlyCategory.name}</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              補助政策や単価推移をもとに、法人向け電気料金の月次動向を整理したシリーズです。直近の動きを確認し、予算・調達判断の参考にできます。
            </p>
            <p className="mt-3 text-sm text-slate-600">記事数: {getArticlesByCategory(monthlyCategory.slug).length}件</p>
            <Link
              href="/business-electricity-retrospective"
              className="mt-4 inline-flex rounded-md border border-sky-300 bg-white px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100"
            >
              カテゴリを見る
            </Link>
          </article>
        </section>
      ) : null}

      <section className="mt-10" aria-labelledby="starter-heading">
        <div className="flex items-center gap-3">
          <Image src="/icons/articles/book-guide.svg" alt="初心者向けガイドのアイコン" width={22} height={22} />
          <h2 id="starter-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
            初めて読むならこの5本
          </h2>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {starterArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
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

      <section className="mt-10" aria-labelledby="latest-heading">
        <h2 id="latest-heading" className="text-2xl font-semibold tracking-tight text-slate-900">
          新着記事
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {latestArticles.map((article) => (
            <article key={article.slug} className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs text-slate-500">{article.publishedAt}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
