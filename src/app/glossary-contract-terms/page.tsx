import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力契約の用語集｜契約電力・基本料金・デマンド・力率";
const pageDescription =
  "法人向け電力契約でよく登場する契約関連用語を、意味・計算方法・関連記事へのリンクと共に整理します。";
const pageUrl = "https://simulator.eic-jp.org/glossary-contract-terms";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
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
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "電力契約の用語集" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/glossary" className="underline-offset-2 hover:underline">用語集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電力契約の用語集</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力契約の用語集｜契約電力・基本料金・デマンド・力率</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">法人向け電力契約でよく登場する契約関連用語を、意味・計算方法・関連記事へのリンクと共に整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約電力と基本料金</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約電力は、過去1年間の最大需要電力（30分平均）で決まる指標で、基本料金の算定基礎となります。契約電力を引き下げられれば基本料金も下がるため、デマンド管理の目的はここにあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">基本料金は契約電力×単価×力率補正で計算されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンド・力率</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド（最大需要電力）は30分単位で計測される平均電力の最大値を指し、瞬間的なピーク電流とは異なります。力率は電力の利用効率を示す指標で、85%を基準に良ければ割引、悪ければ割増が適用されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">解約・違約金関連</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中途解約違約金、最低使用期間、自動更新条項、解約申出期限など、トラブルになりやすい条項の定義と典型例を整理しています。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/glossary", title: "用語集", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/glossary", label: "用語集の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
