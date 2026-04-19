"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderSearch from "./search/HeaderSearch";

type HeaderLink = {
  href: string;
  label: string;
};

const headerLinks: HeaderLink[] = [
  { href: "/", label: "TOP" },
  { href: "/simulate", label: "リスク診断" },
  { href: "/compare", label: "料金比較" },
  { href: "/articles", label: "解説記事" },
  { href: "/articles/by-industry", label: "業種別ガイド" },
  { href: "/special", label: "特集" },
  { href: "/business-electricity-retrospective", label: "振り返り" },
  { href: "/contact", label: "相談する" },
];

const isActivePath = (pathname: string, href: string): boolean => {
  // Exact-match routes.
  if (href === "/" || href === "/contact") {
    return pathname === href;
  }

  // /articles/by-industry must outrank /articles when pathname is under by-industry.
  if (href === "/articles") {
    if (pathname.startsWith("/articles/by-industry")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // /special and subroutes.
  if (href === "/special") {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <header
      data-public-header="true"
      className="border-b-2 border-sky-500 bg-gradient-to-b from-sky-50 to-white"
    >
      <div className="relative mx-auto max-w-[1600px] px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-4">
          <Link href="/" aria-label="法人電気料金ナビへ戻る">
            <Image
              src="/logo.png"
              alt="法人電気料金ナビのロゴ"
              width={300}
              height={57}
              className="h-auto w-[220px] sm:w-[300px] lg:w-[343px]"
              priority
            />
          </Link>
          <div className="min-w-0 w-full flex-1">
            <div className="flex items-center justify-end gap-2 mb-1.5 sm:mb-0 sm:absolute sm:right-4 sm:top-3 sm:gap-3 lg:right-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 rounded-md border border-amber-400 bg-amber-50 px-2.5 py-1.5 text-xs font-semibold leading-tight text-amber-900 shadow-sm transition hover:bg-amber-100 hover:border-amber-500 sm:px-3 sm:py-2 sm:text-sm"
                aria-label="お問い合わせ・ご相談受付ページへ移動"
              >
                <span aria-hidden="true">✉</span>
                お問い合わせ・ご相談
              </Link>
              <HeaderSearch />
            </div>
            <p className="text-sm font-medium leading-tight text-slate-700 sm:text-lg">
              法人電気料金ナビ
            </p>
          </div>
        </div>

        <nav aria-label="主要導線" className="mt-3 sm:mt-4">
          <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:flex lg:flex-wrap lg:items-center lg:gap-2">
            {headerLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              const isContactLink = link.href === "/contact";

              const baseClass =
                "flex items-center justify-center border-b-2 px-2.5 py-1.5 text-sm leading-tight transition-colors duration-150 sm:px-3 sm:text-[17px]";

              const contactClass = active
                ? "bg-amber-100 text-amber-900 border-amber-600 font-semibold"
                : "bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 hover:border-amber-500 font-semibold";

              const normalClass = active
                ? "text-sky-700 border-sky-600 font-semibold bg-sky-50/60"
                : "text-sky-900 border-transparent hover:bg-sky-100 hover:text-sky-950 hover:border-sky-400";

              return (
                <li key={link.href} className="min-w-0 lg:flex-1">
                  <Link
                    href={link.href}
                    className={`${baseClass} ${isContactLink ? contactClass : normalClass}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
