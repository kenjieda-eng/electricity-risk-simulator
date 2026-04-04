import Link from "next/link";
import ContentCta from "../simulator/ContentCta";
import RelatedLinks from "../simulator/RelatedLinks";
import {
  getIndustryArticleHref,
  getIndustryMiddleCategory,
} from "../../lib/articleIndustryCategories";
import type { ManufacturingIndustryArticle } from "../../lib/industryManufacturingArticles";

const MIDDLE_SLUG = "it-technology" as const;

type ITTechnologyIndustryArticlePageProps = {
  article: ManufacturingIndustryArticle;
};

function ITTechnologyIndustryChartBlock({ article }: ITTechnologyIndustryArticlePageProps) {
  const visuals = article.visuals;
  if (!visuals?.chart) {
    return null;
  }
  const { chart } = visuals;
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{chart.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{chart.description}</p>
      <div className="mt-4 space-y-4">
        {chart.items.map((item) => (
          <div key={item.label}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="shrink-0 text-slate-600">{item.value}</p>
            </div>
            <div className="mt-2 h-3 min-w-0 overflow-hidden rounded-full bg-slate-200" aria-hidden>
              <div
                className={`h-full min-w-[3px] rounded-full ${item.color}`}
                style={{ width: item.width }}
              />
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** 原稿の「平日日中＋サーバールーム継続」を概念として示す（数値は付さない） */
function ItOfficeLoadProfileConcept() {
  const blocks = Array.from({ length: 12 }, (_, i) => i);
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
        平日日中の執務負荷とサーバールームの継続負荷（概念図）
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
        横軸はおおまかな時間帯の区切り（1マスがおよそ2時間分のイメージ）です。執務エリアは日中に相対的に高く、サーバールームは夜間も下がりにくいイメージを示しています。
      </p>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[280px] space-y-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">執務・共用の相対負荷</p>
            <div className="mt-2 flex gap-1" role="img" aria-label="執務エリアは深夜帯は低く、平日日中は高いイメージ">
              {blocks.map((i) => {
                const level =
                  i < 2 || i > 9 ? "bg-slate-300" : i < 4 || i > 7 ? "bg-sky-400" : "bg-sky-600";
                return <div key={i} className={`h-8 flex-1 rounded-sm ${level}`} />;
              })}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">サーバールーム（IT＋冷却）</p>
            <div
              className="mt-2 flex gap-1"
              role="img"
              aria-label="サーバールームは時間帯による高低差が小さいイメージ"
            >
              {blocks.map((i) => (
                <div key={i} className="h-8 flex-1 rounded-sm bg-slate-500" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-slate-300" aria-hidden />
          相対的に低い
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-sky-400" aria-hidden />
          中程度
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-sky-600" aria-hidden />
          日中高め
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-sm bg-slate-500" aria-hidden />
          ほぼ平坦（継続）
        </li>
      </ul>
    </section>
  );
}

export default function ITTechnologyIndustryArticlePage({ article }: ITTechnologyIndustryArticlePageProps) {
  const middleCategory = getIndustryMiddleCategory(MIDDLE_SLUG);

  if (!middleCategory) {
    return null;
  }

  const chartHeading = article.chartSectionHeading ?? "この業種で電気を多く使う場所";

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

  const learnPoints =
    article.learnPoints ??
    [
      `${article.name}で電気料金が上がりやすい背景`,
      `${article.name}で電気を多く使う設備や確認ポイント`,
      `${article.name}で考えやすい見直しの方向性`,
    ];

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
        <p className="text-sm font-semibold text-sky-800">IT・テクノロジー系 / {article.name}</p>
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

        {article.visuals?.summaryCards?.length ? (
          <section className="mt-5 grid gap-3 md:grid-cols-3">
            {article.visuals.summaryCards.map((card) => (
              <div key={card.label} className="rounded-lg border border-sky-200 bg-white p-4">
                <p className="text-sm text-slate-600">{card.label}</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">{card.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
              </div>
            ))}
          </section>
        ) : null}
      </header>

      <section className="mt-6 space-y-6">
        {article.sections.map((section) => {
          const isSummary = section.heading === "まとめ";
          const showChartHere = Boolean(article.visuals?.chart) && section.heading === chartHeading;

          return (
            <section
              key={section.heading}
              className={`rounded-xl border border-slate-200 p-5 ${isSummary ? "bg-slate-50" : "bg-white"}`}
            >
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                  {paragraph}
                </p>
              ))}
              {showChartHere ? (
                <>
                  <ITTechnologyIndustryChartBlock article={article} />
                  {article.slug === "it-office" ? <ItOfficeLoadProfileConcept /> : null}
                </>
              ) : null}
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
          );
        })}

        {relatedIndustryLinks.length ? (
          <RelatedLinks
            heading="IT・テクノロジー系の関連業種"
            intro="データセンターとITオフィスは負荷の型が近いため、あわせて読むと見直しの比較がしやすくなります。"
            links={relatedIndustryLinks}
          />
        ) : null}

        <ContentCta
          heading="比較や見直しを進める"
          description={article.ctaDescription}
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーターを始める" },
            { href: `/articles/by-industry/${MIDDLE_SLUG}`, label: "IT・テクノロジー系一覧へ戻る" },
            { href: "/articles/by-industry", label: "業種別トップへ戻る" },
          ]}
        />
      </section>
    </main>
  );
}
