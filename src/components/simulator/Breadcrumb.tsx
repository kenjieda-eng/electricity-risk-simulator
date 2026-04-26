import Link from "next/link";
import { BreadcrumbJsonLd } from "../seo/JsonLd";

export type BreadcrumbItem = {
  /** Absolute or relative href. Last item (current page) typically omits href. */
  href?: string;
  label: string;
};

type Props = {
  items: BreadcrumbItem[];
  /** Site origin used to build absolute URLs for the BreadcrumbList schema. */
  siteUrl?: string;
};

const DEFAULT_SITE_URL = "https://simulator.eic-jp.org";

function toAbsoluteUrl(href: string, siteUrl: string): string {
  if (/^https?:\/\//.test(href)) return href;
  if (href.startsWith("/")) return `${siteUrl.replace(/\/$/, "")}${href}`;
  return `${siteUrl.replace(/\/$/, "")}/${href}`;
}

export default function Breadcrumb({ items, siteUrl = DEFAULT_SITE_URL }: Props) {
  if (items.length === 0) return null;

  const schemaItems = items.map((item) => ({
    name: item.label,
    ...(item.href ? { url: toAbsoluteUrl(item.href, siteUrl) } : {}),
  }));

  return (
    <>
      <BreadcrumbJsonLd items={schemaItems} />
      <nav aria-label="パンくず" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="underline-offset-2 hover:text-sky-700 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-slate-700" : undefined}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span className="px-1 text-slate-400" aria-hidden="true">›</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
