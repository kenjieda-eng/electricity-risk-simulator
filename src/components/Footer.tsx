import Link from "next/link";

const siteLinks = [
  { href: "/", label: "電気料金上昇リスクを診断する" },
  { href: "/how-to", label: "使い方を見る" },
  { href: "/compare", label: "比較ポイントを見る" },
  { href: "/articles", label: "法人向け電気料金の基礎知識を見る" },
];

const retrospectiveLink = {
  href: "/business-electricity-retrospective",
  label: "法人電気料金振り返りを見る",
};

export function Footer() {
  return (
    <footer data-public-footer="true" className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <section aria-labelledby="footer-site-name" className="space-y-3">
            <h2 id="footer-site-name" className="text-sm font-semibold text-slate-900">
              法人向け電気料金上昇、高騰リスクシミュレーター
            </h2>
            <p className="text-sm leading-7 text-slate-600">
              法人・企業・自治体向けに、電気料金の上昇リスク、料金比較、契約見直しの考え方を整理した情報を掲載しています。
            </p>
          </section>

          <section aria-labelledby="footer-main-pages">
            <h2 id="footer-main-pages" className="text-xs font-semibold tracking-wide text-slate-900">
              主要ページ
            </h2>
            <ul className="mt-4 space-y-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-600 transition hover:text-slate-900">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={retrospectiveLink.href}
                  className="text-sm text-slate-600 transition hover:text-slate-900"
                >
                  {retrospectiveLink.label}
                </Link>
              </li>
            </ul>
          </section>

          <section aria-labelledby="footer-related-info">
            <h2 id="footer-related-info" className="text-xs font-semibold tracking-wide text-slate-900">
              関連情報
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li className="text-sm text-slate-600">一般社団法人エネルギー情報センター</li>
            </ul>
          </section>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-5">
          <p className="text-xs text-slate-500">© EIC</p>
        </div>
      </div>
    </footer>
  );
}
