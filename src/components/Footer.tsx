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

const lowerLevelLinkGroups = [
  {
    title: "基礎知識のカテゴリ",
    links: [
      { href: "/articles/basic", label: "基礎から知る" },
      { href: "/articles/price-increase", label: "料金が上がる理由を知る" },
      { href: "/articles/price-trends", label: "電気料金の推移と高止まり" },
      { href: "/articles/plan-types", label: "契約メニューの違いを知る" },
      { href: "/articles/review-points", label: "見直しポイントを知る" },
      { href: "/articles/last-resort-supply", label: "最終保障供給を知る" },
      { href: "/articles/risk-scenarios", label: "リスクシナリオ別に知る" },
      { href: "/articles/power-procurement", label: "電力調達の仕組みを知る" },
    ],
  },
  {
    title: "振り返りの下位ページ",
    links: [
      {
        href: "/business-electricity-retrospective/2026-02",
        label: "2026年2月の電気料金 振り返り",
      },
      {
        href: "/business-electricity-retrospective/2026-01",
        label: "2026年1月の電気料金 振り返り",
      },
      {
        href: "/business-electricity-retrospective/ukraine-shock-overview",
        label: "ウクライナショックからの学び",
      },
      {
        href: "/business-electricity-retrospective/special-high-voltage-2019-2025",
        label: "特別高圧の電気料金推移（2019年～2025年）",
      },
      {
        href: "/business-electricity-retrospective/high-voltage-2019-2025",
        label: "高圧の電気料金推移（2019年～2025年）",
      },
      {
        href: "/business-electricity-retrospective/low-voltage-lighting-2019-2025",
        label: "低圧電灯の電気料金推移（2019年～2025年）",
      },
      {
        href: "/business-electricity-retrospective/low-voltage-power-2019-2025",
        label: "低圧電力の電気料金推移（2019年～2025年）",
      },
      {
        href: "/business-electricity-retrospective/archive",
        label: "電気料金振り返り｜年次アーカイブ",
      },
    ],
  },
] as const;

export function Footer() {
  const knowledgeLinks = lowerLevelLinkGroups[0].links;
  const retrospectiveLinks = lowerLevelLinkGroups[1].links;

  return (
    <footer
      data-public-footer="true"
      className="border-t-2 border-sky-500 bg-gradient-to-b from-sky-50/70 to-sky-100/50"
    >
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)_minmax(0,1.4fr)]">
          <section aria-labelledby="footer-site-name" className="space-y-6">
            <div className="space-y-3">
              <h2 id="footer-site-name" className="text-sm font-semibold text-sky-950">
                法人向け電気料金上昇、高騰リスクシミュレーター
              </h2>
              <p className="text-sm leading-7 text-sky-900/80">
                法人・企業・自治体向けに、電気料金の上昇リスク、料金比較、契約見直しの考え方を整理した情報を掲載しています。
              </p>
            </div>

            <div>
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
            </div>

            <div aria-labelledby="footer-related-info">
              <h2 id="footer-related-info" className="text-xs font-semibold tracking-wide text-sky-950">
                サイト運営
              </h2>
              <div className="mt-4">
                <a
                  href="https://eic-jp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-sky-900/80 transition hover:text-sky-950"
                >
                  一般社団法人エネルギー情報センター
                </a>
              </div>
            </div>
          </section>

          <section aria-labelledby="footer-knowledge-links">
            <h2 id="footer-knowledge-links" className="text-xs font-semibold tracking-wide text-sky-950">
              基礎知識のカテゴリ
            </h2>
            <ul className="mt-4 space-y-2.5">
              {knowledgeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sky-900/80 transition hover:text-sky-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-retrospective-links">
            <h2 id="footer-retrospective-links" className="text-xs font-semibold tracking-wide text-sky-950">
              振り返りの下位ページ
            </h2>
            <ul className="mt-4 space-y-2.5">
              {retrospectiveLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm leading-6 text-sky-900/80 transition hover:text-sky-950">
                    {link.label}
                  </Link>
                </li>
              ))}
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
