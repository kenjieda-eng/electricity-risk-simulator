import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "SBT（Science Based Targets）認定と電力調達計画｜削減目標と再エネ移行ロードマップ";
const pageDescription =
  "SBT認定の要件と、電力調達に関わる目標設定・ロードマップ策定の実務を整理します。";
const pageUrl = "https://simulator.eic-jp.org/sbt-certification-electricity-plan";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "SBT認定", "再エネ電力"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "SBT（Science Based Targets）認定と電力調達計画" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">SBT（Science Based Targets）認定と電力調達計画</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">SBT（Science Based Targets）認定と電力調達計画｜削減目標と再エネ移行ロードマップ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">SBT認定の要件と、電力調達に関わる目標設定・ロードマップ策定の実務を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">SBTとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT（Science Based Targets initiative）は、パリ協定の1.5℃目標と整合する温室効果ガス削減目標を認定する国際イニシアチブで、CDP・WWF・UNGC・WRIの4団体が運営しています。2024年までに世界5,000社以上、日本企業は600社超が認定を取得しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">認定には、Scope1・Scope2・Scope3の排出削減目標を設定し、審査を経る必要があります。2034年以降は全企業に対し1.5℃目標整合が義務化される見込みです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力調達に関わる目標設定</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Scope2の削減は電力調達に直結します。主要な打ち手は、①省エネによる絶対排出量削減、②再エネ電力への切替、の2つです。再エネ100%を目指すなら、5〜15年でのロードマップを描きます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">短期（3年）は非化石証書付きメニューで初期達成、中期（5〜10年）はPPA契約で価格安定化、長期（10年以上）は自家発電比率を高めるのが典型的なパターンです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">認定取得のコストとベネフィット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT申請費は規模により数百万円、認定取得後の進捗管理・開示コストも毎年発生します。一方で、取引先からのサステナビリティ評価、ESG投資流入、採用ブランディングなど、経営的ベネフィットは定量化が難しいものの大きいと言われます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業向けに簡易なSBT（SME Route）も用意されており、大企業に比べて申請要件が緩和されています。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
