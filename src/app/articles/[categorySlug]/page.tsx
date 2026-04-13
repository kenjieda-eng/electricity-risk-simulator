import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByCategory, getArticlesBySlugs, getCategoryBySlug, getSortedCategories } from "../../../lib/articles";
import { POWER_PROCUREMENT_SERIES } from "../../../lib/powerProcurementSeries";
import { CATEGORY_HUB_SPOTLIGHT } from "../../../lib/articleHubFeatured";
import type { ArticleCategorySlug } from "../../../data/articles";
import { CATEGORY_CTA } from "../../../lib/categoryCta";


type PageParams = {
  categorySlug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

const defaultDescription = "法人向け電気料金の基礎知識をテーマ別に整理したカテゴリ一覧ページです。";

const categoryDescriptionOverrides: Record<string, string> = {
  "power-procurement":
    "法人向け電気料金の背景にある、電力会社の仕入れ・調達構造を整理した解説カテゴリです。JEPX、相対契約、長期契約、先物、燃料調達、再エネ調達、非化石証書、分散調達とヘッジの考え方を順に確認できます。",
  "for-executives":
    "経営者・経営層が押さえたい法人向け電気料金・電気代の判断ポイントを整理。予算管理、契約見直し、リスク対応、社内判断に役立つ解説記事を一覧でまとめています。",
};

const categoryTitleOverrides: Record<string, string> = {
  "for-executives": "経営者向け 電気料金・電力契約の判断ポイント一覧｜法人向け解説",
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

  const title = categoryTitleOverrides[category.slug] ?? `${category.name}｜法人向け電気料金の基礎知識`;
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
  const procurementStageGroups =
    category.slug === "power-procurement"
      ? [
          { label: "初級", description: "全体像と市場の見方をつかむ入口", items: POWER_PROCUREMENT_SERIES.filter((item) => item.stage === "初級") },
          { label: "中級", description: "契約期間やヘッジ手段の違いを整理する中盤", items: POWER_PROCUREMENT_SERIES.filter((item) => item.stage === "中級") },
          { label: "応用", description: "再エネ価値とリスク管理まで広げる後半", items: POWER_PROCUREMENT_SERIES.filter((item) => item.stage === "応用") },
        ]
      : [];
  const procurementMapRows =
    category.slug === "power-procurement"
      ? [
          {
            method: "JEPX",
            role: "不足分や需給見込み差の調整",
            feature: "機動性が高い一方で、価格変動を受けやすい",
          },
          {
            method: "相対契約・長期契約",
            role: "ベース需要の安定確保",
            feature: "価格や数量の見通しを持ちやすい一方、柔軟性は下がりやすい",
          },
          {
            method: "先物",
            role: "将来価格の急変リスクへの備え",
            feature: "数量調整ではなく価格ヘッジの色合いが強い",
          },
          {
            method: "再エネ調達・非化石証書",
            role: "電源構成と環境価値の確保",
            feature: "物理電力と価値を分けて考える必要がある",
          },
        ]
      : [];

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

      {(() => {
        const spotlight = CATEGORY_HUB_SPOTLIGHT[category.slug];
        if (!spotlight) return null;
        const spotlightArticles = getArticlesBySlugs(spotlight.slugs);
        return (
          <section className="mt-6 rounded-xl border border-sky-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{spotlight.heading}</h2>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{spotlight.intro}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {spotlightArticles.map((article) => (
                <article key={article.slug} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-base font-semibold text-slate-900">
                    <Link href={`/${article.slug}`} className="underline-offset-2 hover:underline">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{article.description}</p>
                </article>
              ))}
            </div>
            {category.slug === "risk-scenarios" ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/compare"
                  className="inline-flex rounded-md border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 hover:bg-sky-100"
                >
                  料金メニューの比較・診断へ
                </Link>
                <Link
                  href="/articles"
                  className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  解説ページ一覧へ戻る
                </Link>
              </div>
            ) : null}
            {category.slug === "price-increase" ? (
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/business-electricity-retrospective"
                  className="inline-flex rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  法人電気料金振り返りで年次動向を見る
                </Link>
              </div>
            ) : null}
          </section>
        );
      })()}

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

      {category.slug === "power-procurement" ? (
        <>
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">読み進め方の目安</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {procurementStageGroups.map((group) => (
                <section key={group.label} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{group.label}</h3>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700">
                      {group.items.length}本
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{group.description}</p>
                  <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/${item.slug}`} className="text-sky-700 underline-offset-2 hover:underline">
                          {item.order}. {item.title}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">仕入れ手段の全体マップ</h2>
            <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">仕入れ手段</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な役割</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">押さえたい特徴</th>
                </tr>
              </thead>
              <tbody>
                {procurementMapRows.map((row) => (
                  <tr key={row.method} className="align-top">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.method}</th>
                    <td className="border border-slate-200 px-3 py-2">{row.role}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              まずは全体像とJEPX、その後に契約期間・ヘッジ・燃料・再エネ・価値管理へ進むと、仕入れ構造がつながって見えやすくなります。
            </p>
          </section>
        </>
      ) : null}

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
              {category.slug === "power-procurement" ? (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {POWER_PROCUREMENT_SERIES.find((item) => item.slug === article.slug)?.order ?? article.order}
                  </span>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    {POWER_PROCUREMENT_SERIES.find((item) => item.slug === article.slug)?.stage ?? "解説"}
                  </span>
                </div>
              ) : null}
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

      {(() => {
        const cta = CATEGORY_CTA[category.slug as ArticleCategorySlug];
        if (!cta) return null;
        return (
          <section className="mt-8 rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6">
            <div className="flex items-start gap-3">
              <span className="hidden shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white sm:inline-flex">
                NEXT STEP
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-900">{cta.heading}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{cta.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {cta.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={
                        link.primary
                          ? "inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700 sm:text-base"
                          : link.href === "/contact"
                            ? "inline-flex items-center justify-center rounded-lg border-2 border-amber-400 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-900 transition hover:bg-amber-100 sm:text-base"
                            : "inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:text-base"
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-900">戻り導線と関連ページ</h2>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border-2 border-sky-500 bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            シミュレーターで診断する
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-amber-400 bg-amber-50 px-4 py-2.5 text-sm font-semibold text-amber-900 transition hover:bg-amber-100"
          >
            お問い合わせ・ご相談受付
          </Link>
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

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-slate-900">他のカテゴリも確認する</h2>
        <div className="mt-3 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          <Link href="/articles/basic" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">基礎から知る</span>
            <span className="ml-1 text-slate-600">— 内訳・請求書・見積書の基本</span>
          </Link>
          <Link href="/articles/price-increase" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">料金が上がる理由</span>
            <span className="ml-1 text-slate-600">— 燃調費・賦課金・制度要因</span>
          </Link>
          <Link href="/articles/plan-types" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">契約メニューの違い</span>
            <span className="ml-1 text-slate-600">— 市場連動・固定の比較</span>
          </Link>
          <Link href="/articles/review-points" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">見直しポイント</span>
            <span className="ml-1 text-slate-600">— 見積比較・契約切替の実務</span>
          </Link>
          <Link href="/articles/risk-scenarios" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">リスクシナリオ別</span>
            <span className="ml-1 text-slate-600">— 猛暑・円安・地政学リスク</span>
          </Link>
          <Link href="/articles/by-industry" className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition hover:bg-slate-100">
            <span className="font-semibold text-slate-900">業種別に知る</span>
            <span className="ml-1 text-slate-600">— 業種ごとの電力リスク</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
