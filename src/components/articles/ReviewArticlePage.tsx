import type { ReactNode } from "react";
import Link from "next/link";
import ContentCta from "../simulator/ContentCta";
import RelatedLinks from "../simulator/RelatedLinks";
import CategoryNextStepCta from "../simulator/CategoryNextStepCta";

type LinkCard = {
  href: string;
  title: string;
  description: string;
};

type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: ReactNode;
};

type ReviewArticlePageProps = {
  title: string;
  lead: string[];
  sections: ArticleSection[];
  extraSections?: ArticleSection[];
  relatedIntro: string;
  relatedLinks: LinkCard[];
  ctaDescription: string;
  slug?: string;
  breadcrumbLabel?: string;
};

export default function ReviewArticlePage({
  title,
  lead,
  sections,
  extraSections,
  relatedIntro,
  relatedLinks,
  ctaDescription,
  slug,
  breadcrumbLabel,
}: ReviewArticlePageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {breadcrumbLabel && (
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">{breadcrumbLabel}</span>
        </nav>
      )}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        {lead.map((line) => (
          <p key={line} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {line}
          </p>
        ))}
      </header>

      <section className="mt-6 space-y-6">
        {sections.map((section) => (
          <section key={section.heading} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.note ? <div className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{section.note}</div> : null}
          </section>
        ))}

        {extraSections?.map((section) => (
          <section key={section.heading} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {paragraph}
              </p>
            ))}
            {section.bullets ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
            {section.note ? <div className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{section.note}</div> : null}
          </section>
        ))}

        <RelatedLinks heading="関連ページ" intro={relatedIntro} links={relatedLinks} />

        <ContentCta
          heading="比較前後の判断を進める"
          description={ctaDescription}
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/how-to", label: "使い方ページを見る" },
            { href: "/simulate", label: "シミュレーターを開く" },
          ]}
        />

        {slug ? <CategoryNextStepCta slug={slug} /> : null}
      </section>
    </main>
  );
}
