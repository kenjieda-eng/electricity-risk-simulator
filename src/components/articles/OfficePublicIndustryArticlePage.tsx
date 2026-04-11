import Link from "next/link";
import ContentCta from "../simulator/ContentCta";
import RelatedLinks from "../simulator/RelatedLinks";
import CategoryNextStepCta from "../simulator/CategoryNextStepCta";
import {
  getIndustryArticleHref,
  getIndustryMiddleCategory,
} from "../../lib/articleIndustryCategories";
import type { OfficePublicIndustryArticle } from "../../lib/industryOfficePublicArticles";

type OfficePublicIndustryArticlePageProps = {
  article: OfficePublicIndustryArticle;
};

function getDefaultLearnPoints(articleName: string) {
  return [
    `${articleName}で電気料金が上がりやすい背景`,
    `${articleName}で電気を多く使う設備や確認ポイント`,
    `${articleName}で考えやすい契約や対策の方向性`,
  ];
}

function OfficePublicIndustrySummaryCards({ article }: OfficePublicIndustryArticlePageProps) {
  const visuals = article.visuals;

  if (!visuals) {
    return null;
  }

  return (
    <section className="mt-5 grid gap-3 md:grid-cols-3">
      {visuals.summaryCards.map((card) => (
        <div key={card.label} className="rounded-lg border border-sky-200 bg-white p-4">
          <p className="text-sm text-slate-600">{card.label}</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">{card.value}</p>
          <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
        </div>
      ))}
    </section>
  );
}

function OfficePublicIndustryChart({ article }: OfficePublicIndustryArticlePageProps) {
  const visuals = article.visuals;

  if (!visuals) {
    return null;
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">{visuals.chart.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{visuals.chart.description}</p>
      <div className="mt-4 space-y-4">
        {visuals.chart.items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="text-slate-600">{item.value}</p>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200" aria-hidden>
              <div className={`h-full rounded-full ${item.color}`} style={{ width: item.width }} />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function OfficePublicIndustryArticlePage({
  article,
}: OfficePublicIndustryArticlePageProps) {
  const middleCategory = getIndustryMiddleCategory("office-public");

  if (!middleCategory) {
    return null;
  }

  const relatedIndustryLinks = article.relatedIndustrySlugs
    .map((slug) => {
      const industry = middleCategory.industries.find((item) => item.plannedSlug === slug);
      const href = getIndustryArticleHref(middleCategory.slug, slug);

      if (!industry || !href) {
        return null;
      }

      return {
        href,
        title: industry.name,
        description: industry.description,
      };
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const learnPoints = article.learnPoints ?? getDefaultLearnPoints(article.name);
  const chartInsertAfterHeading = article.visuals?.chartPlacementAfterSection ?? article.sections[1]?.heading;
  let chartInserted = false;

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
        <Link href="/articles/by-industry" className="underline-offset-2 hover:underline">
          業種別に知る
        </Link>
        <span className="px-2">›</span>
        <Link href={`/articles/by-industry/${middleCategory.slug}`} className="underline-offset-2 hover:underline">
          {middleCategory.name}
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">{article.name}</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-sm font-semibold text-sky-800">業務・公共系 / {article.name}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{article.metadataTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{article.metadataDescription}</p>

        <section className="mt-5 rounded-xl border border-sky-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900 sm:text-base">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {learnPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <OfficePublicIndustrySummaryCards article={article} />
      </header>

      <section className="mt-6 space-y-6">
        {article.sections.map((section) => {
          const isSummary = section.heading === "まとめ";
          const shouldInsertChart = !chartInserted && article.visuals && section.heading === chartInsertAfterHeading;

          if (shouldInsertChart) {
            chartInserted = true;
          }

          return (
            <div key={section.heading} className="space-y-6">
              <section
                className={`rounded-xl border border-slate-200 p-5 ${isSummary ? "bg-slate-50" : "bg-white"}`}
              >
                <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
                {section.subsections?.length ? (
                  <div className="mt-4 space-y-4">
                    {section.subsections.map((subsection) => (
                      <article key={subsection.heading} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <h3 className="text-lg font-semibold text-slate-900">{subsection.heading}</h3>
                        {subsection.paragraphs?.map((paragraph) => (
                          <p key={paragraph} className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                            {paragraph}
                          </p>
                        ))}
                        {subsection.bullets ? (
                          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                      </article>
                    ))}
                  </div>
                ) : null}
              </section>
              {shouldInsertChart ? <OfficePublicIndustryChart article={article} /> : null}
            </div>
          );
        })}

        {!chartInserted && article.visuals ? <OfficePublicIndustryChart article={article} /> : null}

        {relatedIndustryLinks.length ? (
          <RelatedLinks
            heading="このカテゴリの関連ページ"
            intro="近い施設形態もあわせて見ると、負荷構造や見直しの優先順位の違いを整理しやすくなります。"
            links={relatedIndustryLinks}
          />
        ) : null}

        <ContentCta
          heading="比較や見直しを進める"
          description={article.ctaDescription}
          links={[
            { href: "/articles/by-industry/office-public", label: "業務・公共系一覧へ戻る" },
            { href: "/articles/by-industry", label: "業種別トップへ戻る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーターを始める" },
          ]}
        />
      <CategoryNextStepCta categorySlug="industry-guide" />
      </section>
    </main>
  );
}
