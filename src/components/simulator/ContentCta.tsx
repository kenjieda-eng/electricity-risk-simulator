"use client";

import Link from "next/link";
import { resolveCtaFrom, trackEvent } from "../../lib/analytics/ga";

type CtaLinkItem = {
  href: string;
  label: string;
};

type ContentCtaProps = {
  heading: string;
  description: string;
  links: CtaLinkItem[];
};

export default function ContentCta({ heading, description, links }: ContentCtaProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => {
              // /contact 宛のリンクのみ流入元を付与する（他リンクは cta_from を送らない）。
              const ctaFrom = resolveCtaFrom(link.href);
              trackEvent("cta_click", {
                label: link.label,
                href: link.href,
                ...(ctaFrom ? { cta_from: ctaFrom } : {}),
              });
            }}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
