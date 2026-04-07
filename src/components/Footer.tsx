import Link from "next/link";

const siteTitle = "法人向け電気料金上昇・高騰リスクシミュレーター";

const siteDescription =
  "法人・企業・自治体向けに、電気料金の上昇リスク、料金比較、契約見直しに役立つ情報を掲載しています。";

const mainPageLinks = [
  { href: "/", label: "電気料金上昇リスクを診断する" },
  { href: "/how-to", label: "電力料金上昇リスク診断の使い方" },
  { href: "/articles/basic", label: "法人向け電気料金の基礎知識" },
  { href: "/business-electricity-retrospective", label: "法人電気料金振り返り" },
  { href: "/articles", label: "解説ページ一覧" },
] as const;

/** テーマ別：基礎 → 値上がり → 時系列 → 契約 → 見直し → リスク → 調達 → 最終保障 → 業種 */
const themeLinks = [
  { href: "/articles/basic", label: "基礎から知る" },
  { href: "/articles/price-increase", label: "料金が上がる理由を知る" },
  { href: "/articles/price-trends", label: "電気料金の推移と高止まり" },
  { href: "/articles/plan-types", label: "契約メニューの違いを知る" },
  { href: "/articles/review-points", label: "見直しポイントを知る" },
  { href: "/articles/risk-scenarios", label: "リスクシナリオ別に知る" },
  { href: "/articles/power-procurement", label: "電力調達の仕組みを知る" },
  { href: "/articles/last-resort-supply", label: "最終保障供給を知る" },
  { href: "/articles/by-industry", label: "業種別に知る" },
] as const;

const retrospectiveDataLinks = [
  { href: "/business-electricity-retrospective/2026-02", label: "2026年2月の電気料金 振り返り" },
  { href: "/business-electricity-retrospective/2026-01", label: "2026年1月の電気料金 振り返り" },
  { href: "/business-electricity-retrospective/archive", label: "電気料金振り返り｜年次アーカイブ" },
  {
    href: "/business-electricity-price-trend-10-years",
    label: "法人向け電気料金の推移を10年で見る",
  },
  { href: "/business-electricity-retrospective/ukraine-shock-overview", label: "ウクライナショックからの学び" },
  { href: "/special/emergency-scenario-analysis", label: "法人電気代の3シナリオを比較" },
  { href: "/special/oil-scenario-analysis", label: "原油高・物流コストのシナリオ分析" },
  { href: "/special/gas-scenario-analysis", label: "法人ガス代のシナリオ分析" },
  { href: "/special/materials-packaging-scenario-analysis", label: "原材料・包装資材のシナリオ分析" },
  { href: "/special/food-procurement-scenario-analysis", label: "食料品仕入コストのシナリオ分析" },
] as const;

const blockHeadingClass =
  "text-sm font-semibold tracking-wide text-sky-950";

export function Footer() {
  return (
    <footer
      data-public-footer="true"
      className="border-t-2 border-sky-500 bg-gradient-to-b from-sky-50/70 to-sky-100/50"
    >
      <div className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6 2xl:gap-8">
          <section aria-labelledby="footer-site-overview" className="space-y-3 sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <h2 id="footer-site-overview" className="text-base font-bold leading-snug text-sky-950">
              {siteTitle}
            </h2>
            <p className="text-sm leading-relaxed text-sky-900/80">{siteDescription}</p>
          </section>

          <section aria-labelledby="footer-main-pages">
            <h2 id="footer-main-pages" className={blockHeadingClass}>
              主要ページ
            </h2>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {mainPageLinks.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link href={link.href} className="text-sm text-sky-900/80 transition hover:text-sky-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-theme-links">
            <h2 id="footer-theme-links" className={blockHeadingClass}>
              テーマ別に見る
            </h2>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {themeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-sky-900/80 transition hover:text-sky-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-retrospective-data">
            <h2 id="footer-retrospective-data" className={blockHeadingClass}>
              振り返り・データを見る
            </h2>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {retrospectiveDataLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm leading-snug text-sky-900/80 transition hover:text-sky-950">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="footer-site-operation">
            <h2 id="footer-site-operation" className={blockHeadingClass}>
              サイト運営
            </h2>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li>
                <Link href="/about-this-site" className="text-sm text-sky-900/80 transition hover:text-sky-950">
                  このサイトの思い
                </Link>
              </li>
              <li>
                <a
                  href="https://eic-jp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-relaxed text-sky-900/80 transition hover:text-sky-950"
                >
                  一般社団法人エネルギー情報センター
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-8 border-t border-sky-200 pt-5 sm:mt-10">
          <div className="mb-3 sm:mb-4">
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
