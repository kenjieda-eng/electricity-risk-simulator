import Link from "next/link";
import { getArticleBySlug } from "../../lib/articles";
import { CATEGORY_CTA } from "../../lib/categoryCta";

type CategoryNextStepCtaProps = {
  slug: string;
};

/**
 * 記事ページ・カテゴリ詳細ページに「次の一手」を示すNEXT STEP CTAブロック。
 * 記事のslugからカテゴリを解決し、カテゴリ別にチューニングされた文案と
 * シミュレーター/お問い合わせへの導線を表示する。
 */
export default function CategoryNextStepCta({ slug }: CategoryNextStepCtaProps) {
  const article = getArticleBySlug(slug);
  if (!article) return null;
  const cta = CATEGORY_CTA[article.categorySlug];
  if (!cta) return null;

  return (
    <section className="rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6">
      <div className="flex items-start gap-3">
        <span className="hidden shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-semibold text-white sm:inline-flex">
          NEXT STEP
        </span>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900">{cta.heading}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {cta.description}
          </p>
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
}
