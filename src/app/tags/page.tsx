import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "タグ一覧｜法人向け電気料金・脱炭素・契約 横串タグハブ";
const pageDescription = "電気料金・脱炭素・PPA・BEMS・補助金などのタグから、関連記事を横串で発見できます。";
const pageUrl = "https://simulator.eic-jp.org/tags";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

const TAGS = [
  { tag: "脱炭素", count: 25, articles: ["scope2-electricity-accounting", "re100-overview-for-business", "carbon-pricing-electricity-impact"] },
  { tag: "PPA", count: 12, articles: ["corporate-ppa-overview", "virtual-ppa-explained", "onsite-vs-offsite-ppa"] },
  { tag: "BEMS", count: 10, articles: ["bems-fems-ems-overview", "ai-electricity-optimization"] },
  { tag: "補助金", count: 17, articles: ["subsidies-overview"] },
  { tag: "BCP", count: 15, articles: ["energy-bcp-overview", "microgrid-for-business", "emergency-power-source-options"] },
  { tag: "燃料費調整", count: 22, articles: ["fuel-cost-adjustment", "fuel-cost-adjustment-history"] },
  { tag: "再エネ賦課金", count: 12, articles: ["renewable-energy-surcharge", "renewable-energy-surcharge-history"] },
  { tag: "JEPX", count: 16, articles: ["jepx-spot-price-dashboard", "jepx-price-trend-and-corporate-impact"] },
  { tag: "市場連動", count: 18, articles: ["market-price-adjustment", "who-should-choose-market-linked-plan"] },
  { tag: "蓄電池", count: 14, articles: ["why-corporations-consider-batteries", "battery-suitability-diagnosis"] },
  { tag: "太陽光", count: 12, articles: ["solar-suitability-diagnosis", "non-fossil-certificates"] },
  { tag: "EV", count: 8, articles: ["corporate-ev-charging-basics", "ev-fleet-cost-calculation"] },
  { tag: "中小企業", count: 12, articles: ["sme-electricity-basics", "low-voltage-review-essentials"] },
  { tag: "法務", count: 10, articles: ["electricity-contract-clauses", "auto-renewal-clause-risks"] },
  { tag: "経理", count: 8, articles: ["electricity-expense-accounting", "invoice-system-electricity"] },
  { tag: "需給ひっ迫", count: 9, articles: ["supply-demand-tightness-impact", "supply-demand-planning-glossary"] },
  { tag: "最終保障", count: 10, articles: ["last-resort-supply-explained", "last-resort-supply-risk-diagnosis"] },
  { tag: "容量市場", count: 7, articles: ["capacity-contribution-explained", "capacity-market-timeline"] },
  { tag: "託送料金", count: 5, articles: ["wheeling-charge-explained", "wheeling-charge-revenue-cap-timeline"] },
  { tag: "海外", count: 5, articles: ["overseas-energy-strategy", "global-electricity-price-benchmark"] },
  { tag: "DC・AI", count: 6, articles: ["datacenter-electricity-demand-surge", "ai-workload-energy-impact"] },
  { tag: "業種別", count: 35, articles: ["factory-electricity-cost-reduction", "warehouse-electricity-cost-review"] },
  { tag: "東日本", count: 12, articles: ["region-tokyo-business-electricity"] },
  { tag: "西日本", count: 12, articles: ["region-kansai-business-electricity"] },
  { tag: "GX-ETS", count: 6, articles: ["gx-ets-impact-business-electricity", "gx-promotion-act-roadmap"] },
];

export default function TagsPage() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "タグ一覧" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">タグ一覧</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">🏷 タグ一覧</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            横串タグから関連記事を発見できます。タグごとの代表記事を表示しています。
          </p>
        </header>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {TAGS.map((t) => (
            <section key={t.tag} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                <span className="rounded bg-sky-100 px-2 py-0.5 text-sky-800">#{t.tag}</span>
                <span className="ml-2 text-xs text-slate-500">{t.count}記事</span>
              </p>
              <ul className="mt-2 space-y-1 text-xs">
                {t.articles.map((a) => (
                  <li key={a}><Link href={`/${a}`} className="text-sky-700 hover:underline">→ {a}</Link></li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/articles", title: "記事ハブ（カテゴリ別）", description: "タグではなくテーマで探す。" },
            { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "毎月の電気代データ。" },
            { href: "/", title: "シミュレーター", description: "リスクを30秒で診断。" },
            { href: "/articles/basic", title: "基礎カテゴリ", description: "電気料金の基礎から学ぶ。" },
            { href: "/articles/risk-scenarios", title: "リスクシナリオ", description: "シナリオ別の解説。" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
