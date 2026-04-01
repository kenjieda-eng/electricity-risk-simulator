import Link from "next/link";

const siteLinks = [
  { href: "/", label: "電気料金上昇リスクを診断する" },
  { href: "/how-to", label: "電力料金上昇リスク診断の使い方" },
  { href: "/articles", label: "法人向け電気料金の基礎知識" },
];

const retrospectiveLink = {
  href: "/business-electricity-retrospective",
  label: "法人電気料金振り返り",
};

export function Footer() {
  return (
    <footer
      data-public-footer="true"
      className="border-t-2 border-sky-500 bg-gradient-to-b from-sky-50/70 to-sky-100/50"
    >
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <section aria-labelledby="footer-site-name" className="space-y-3">
            <h2 id="footer-site-name" className="text-sm font-semibold text-sky-950">
              法人向け電気料金上昇、高騰リスクシミュレーター
            </h2>
            <p className="text-sm leading-7 text-sky-900/80">
              法人・企業・自治体向けに、電気料金の上昇リスク、料金比較、契約見直しの考え方を整理した情報を掲載しています。
            </p>
          </section>

          <section aria-labelledby="footer-main-pages">
            <h2 id="footer-main-pages" className="text-xs font-semibold tracking-wide text-sky-950">
              主要ページ
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sky-900/80 transition hover:text-sky-950">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={retrospectiveLink.href}
                  className="text-sm text-sky-900/80 transition hover:text-sky-950"
                >
                  {retrospectiveLink.label}
                </Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-related-info">
            <h2 id="footer-related-info" className="text-xs font-semibold tracking-wide text-sky-950">
              サイト運営
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://eic-jp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-900/80 transition hover:text-sky-950"
                >
                  一般社団法人エネルギー情報センター
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-sky-200 pt-5">
          <div className="mb-4">
            <a href="#page-top" className="text-sm text-sky-900/80 transition hover:text-sky-950">
              ページ上部へ戻る
            </a>
          </div>
          <p className="text-xs text-sky-900/70">
            Copyright © 一般社団法人エネルギー情報センター All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
