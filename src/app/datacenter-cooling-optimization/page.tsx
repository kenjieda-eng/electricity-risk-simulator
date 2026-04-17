import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "データセンター冷却最適化｜PUE改善と液冷の実務";
const pageDescription =
  "データセンターのPUE（電力使用効率）改善の取り組み、空冷と液冷の比較、冷却関連電力の削減アプローチを整理します。";
const pageUrl = "https://simulator.eic-jp.org/datacenter-cooling-optimization";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "データセンター電力"],
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
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "データセンター・AI需要", url: "https://simulator.eic-jp.org/articles/datacenter-ai-demand" },
          { name: "データセンター冷却最適化" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/datacenter-ai-demand" className="underline-offset-2 hover:underline">データセンター・AI需要</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">データセンター冷却最適化</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">データセンター冷却最適化｜PUE改善と液冷の実務</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">データセンターのPUE（電力使用効率）改善の取り組み、空冷と液冷の比較、冷却関連電力の削減アプローチを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PUEとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PUE（Power Usage Effectiveness）は、データセンター全体の消費電力を、サーバー等のIT機器の消費電力で割った比率で、1.0に近いほど効率的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">国内の標準的なデータセンターのPUEは1.5〜2.0、ハイパースケーラー（Google・Amazon等）は1.1〜1.2を達成しています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">空冷から液冷へ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従来の空冷（エアコン＋床下ブロー）では1ラック15〜20kWが限界ですが、最新のAI向けラックは30〜50kWと大幅に超過します。液冷（ラック内水冷・浸漬冷却）への移行が加速しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">液冷は空冷より冷却効率が高く、PUEを1.1以下に抑えることが可能ですが、初期投資が大きく運用技術者の確保が課題です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">立地と気候の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">寒冷地立地（北海道・北欧）では外気冷却の活用で冷却電力を大幅削減できます。石狩、千歳、北欧のデータセンターは気候を活用した高効率運用の代表例です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/datacenter-ai-demand", title: "データセンター・AI需要", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/datacenter-ai-demand", label: "データセンター・AI需要の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
