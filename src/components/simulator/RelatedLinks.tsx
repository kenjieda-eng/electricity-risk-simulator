import Link from "next/link";

type RelatedLinkItem = {
  href: string;
  title: string;
  description: string;
};

type RelatedLinksProps = {
  heading: string;
  intro?: string;
  links: RelatedLinkItem[];
};

export default function RelatedLinks({ heading, intro, links }: RelatedLinksProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-semibold text-slate-900">{heading}</h2>
      {intro ? <p className="mt-2 text-sm leading-7 text-slate-700">{intro}</p> : null}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:bg-slate-100"
          >
            <p className="text-sm font-semibold text-slate-900">{link.title}</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">{link.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
