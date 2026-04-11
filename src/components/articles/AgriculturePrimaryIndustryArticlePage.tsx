import Link from "next/link";
import ContentCta from "../simulator/ContentCta";
import InfoBox from "../simulator/InfoBox";
import RelatedLinks from "../simulator/RelatedLinks";
import CategoryNextStepCta from "../simulator/CategoryNextStepCta";
import {
  getIndustryArticleHref,
  getIndustryMiddleCategory,
} from "../../lib/articleIndustryCategories";
import type {
  AgriculturePrimaryArticle,
  AgriculturePrimaryCompositionGroup,
} from "../../lib/industryAgriculturePrimaryArticles";

type Props = {
  article: AgriculturePrimaryArticle;
};

function DualCompositionCharts({ groups }: { groups: AgriculturePrimaryCompositionGroup[] }) {
  return (
    <div className="mt-4 grid gap-4 xl:grid-cols-2">
      {groups.map((group) => (
        <section key={group.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{group.title}</h3>
          <div className="mt-4 space-y-4">
            {group.items.map((item) => (
              <div key={item.label}>
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
                  <p className="font-semibold text-slate-900">{item.label}</p>
                  <p className="shrink-0 text-slate-600">{item.share}</p>
                </div>
                <div className="mt-2 h-3 max-w-full overflow-hidden rounded-full bg-slate-200" aria-hidden>
                  <div className={`h-full max-w-full rounded-full ${item.color}`} style={{ width: item.width }} />
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function DailyLightingLoadStrip() {
  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
        完全人工光型の「1日の負荷」イメージ（照明サイクル）
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
        光合成用の照明はおおよそ16時間点灯、暗期は8時間程度が目安とされる説明があります。暗期中も空調や循環などは継続するため、24時間を通じて電力が途切れにくい構造です（比率は施設・品目で変動します）。
      </p>
      <div className="mt-4 overflow-x-auto">
        <div className="min-w-[280px] rounded-lg border border-slate-200 bg-slate-100 p-3">
          <div className="flex h-10 w-full overflow-hidden rounded-md">
            <div
              className="flex items-center justify-center bg-amber-400/90 text-xs font-semibold text-amber-950"
              style={{ width: "66.67%" }}
            >
              照明点灯（目安16h）
            </div>
            <div
              className="flex items-center justify-center bg-slate-300 text-xs font-semibold text-slate-800"
              style={{ width: "33.33%" }}
            >
              暗期（空調等は継続）
            </div>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
            図中の時間配分は原稿で示される目安（16時間／8時間）に基づく概念図です。
          </p>
        </div>
      </div>
    </section>
  );
}

function FisheriesLoadPatternComparison() {
  return (
    <section className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
        加工場と陸上養殖の「負荷の出方」イメージ
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
        水産加工場は漁期に処理量が増え、稼働率と消費が連動しやすい一方で、冷凍・冷蔵は通年で止めにくい土台があります。陸上養殖は循環と水温管理が24時間続き、魚種によって冬季または夏季に負荷が強まりやすい、という整理ができます。
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
          <p className="text-sm font-semibold text-sky-900">水産加工場</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-6 text-slate-700">
            <li>冷凍・冷蔵：通年で24時間稼働が前提になりやすい</li>
            <li>ライン稼働：漁期・水揚げに連動して変動しやすい</li>
            <li>急速冷凍：短時間でピーク電力が乗りやすい</li>
          </ul>
        </div>
        <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
          <p className="text-sm font-semibold text-teal-900">陸上養殖施設</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm leading-6 text-slate-700">
            <li>循環ポンプ：24時間の継続負荷になりやすい</li>
            <li>水温管理：通年必要、魚種で冬／夏にピークが分かれる</li>
            <li>改修余地：ポンプ制御・断熱・熱回収の検討余地が出やすい</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function renderSectionContent(
  section: AgriculturePrimaryArticle["sections"][number],
  options?: { omitBullets?: boolean },
) {
  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          {paragraph}
        </p>
      ))}
      {section.bullets && !options?.omitBullets ? (
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
                <p key={paragraph} className="mt-2 text-sm leading-7 text-slate-700">
                  {paragraph}
                </p>
              ))}
              {subsection.bullets ? (
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                  {subsection.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default function AgriculturePrimaryIndustryArticlePage({ article }: Props) {
  const middleCategory = getIndustryMiddleCategory("agriculture-primary");

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

  const extraRelatedArticleLinks = [
    {
      href: "/market-linked-vs-fixed",
      title: "市場連動プランと固定プランの違い",
      description: "単価だけでなく、変動の受け方や予算管理との相性を比較できます。",
    },
    {
      href: "/how-to-read-electricity-bill",
      title: "電気料金の請求書で確認したいポイント",
      description: "電力量料金、調整項目、契約電力などの見方を実務向けに確認できます。",
    },
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
        <p className="text-sm font-semibold text-sky-800">
          {middleCategory.name} / {article.name}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{article.metadataTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{article.metadataDescription}</p>
        <section className="mt-5 rounded-xl border border-sky-200 bg-white p-5">
          <h2 className="text-sm font-semibold text-slate-900 sm:text-base">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {article.learnPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        <section className="mt-5 grid gap-3 md:grid-cols-3">
          {article.summaryCards.map((card) => (
            <div key={card.label} className="rounded-lg border border-sky-200 bg-white p-4">
              <p className="text-sm text-slate-600">{card.label}</p>
              <p className="mt-1 text-lg font-semibold text-slate-900">{card.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.description}</p>
            </div>
          ))}
        </section>
      </header>

      <section className="mt-6 space-y-6">
        {article.sections.map((section) => {
          const isSummary = section.heading === "まとめ";
          const isEnergy2026 =
            section.heading.includes("2026年") && section.heading.includes("踏まえる");
          const omitBulletsForAmber = Boolean(isEnergy2026 && section.bullets?.length);
          const isBillingSection = section.heading === "請求書や見積書で確認したいポイント";

          return (
            <div key={section.heading}>
              <section
                className={`rounded-xl border border-slate-200 p-5 ${isSummary ? "bg-slate-50" : "bg-white"}`}
              >
                <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
                {renderSectionContent(section, { omitBullets: omitBulletsForAmber })}

                {isEnergy2026 && section.bullets?.length ? (
                  <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">とくに、次に当てはまる施設は見直しが急務になりやすいです</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {isBillingSection && article.slug === "plant-factory-greenhouse" ? (
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <InfoBox title="生産量あたりの電力（原単位）">
                      レタス1kgあたりのkWhを毎月トラッキングすると、設備改善や運用変更の効果を検証しやすくなります。
                    </InfoBox>
                    <InfoBox title="LEDのPAR効率と契約区分">
                      μmol/Jで照明の効率を確認しつつ、低圧／高圧や固定／市場連動の位置づけを請求・見積と突き合わせると整理が進みやすいです。
                    </InfoBox>
                  </div>
                ) : null}

                {isBillingSection && article.slug === "fisheries-processing-aquaculture" ? (
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <InfoBox title="加工場：デマンドと漁期">
                      急速冷凍の同時起動と、繁忙期のデマンドが基本料金に与える影響を、月次で対応関係まで見ると改善の手がかりが見えやすくなります。
                    </InfoBox>
                    <InfoBox title="養殖：水温差とポンプ">
                      海水温と養殖水温の差、ポンプの定速／可変速は、効率改善の出発点として整理しやすい項目です。
                    </InfoBox>
                  </div>
                ) : null}
              </section>

              {section.heading === article.diagramAfterHeading ? (
                <>
                  <DualCompositionCharts groups={article.compositionGroups} />
                  {article.showDailyLightingStrip ? <DailyLightingLoadStrip /> : null}
                  {article.slug === "fisheries-processing-aquaculture" ? <FisheriesLoadPatternComparison /> : null}
                </>
              ) : null}
            </div>
          );
        })}

        <RelatedLinks
          heading="農業・一次産業系の関連ページ"
          intro="近い業態をあわせて読むと、生産設備と電力契約の考え方の違いを整理しやすくなります。"
          links={relatedIndustryLinks}
        />

        <RelatedLinks
          heading="関連する解説ページ"
          intro="契約タイプや請求書の見方を合わせて押さえると、見直しの判断材料がそろいやすくなります。"
          links={extraRelatedArticleLinks}
        />

        <ContentCta
          heading="比較や見直しを進める"
          description={article.ctaDescription}
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーターを始める" },
            { href: `/articles/by-industry/${middleCategory.slug}`, label: "農業・一次産業系一覧へ戻る" },
            { href: "/articles/by-industry", label: "業種別トップへ戻る" },
          ]}
        />
      <CategoryNextStepCta categorySlug="industry-guide" />
      </section>
    </main>
  );
}
