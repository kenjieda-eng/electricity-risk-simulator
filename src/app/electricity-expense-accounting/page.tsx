import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電気代の勘定科目と仕訳｜部門配賦と月次締めの実務";
const pageDescription =
  "電気代の基本的な勘定科目（水道光熱費・製造経費）、部門配賦の考え方、月次締め時の処理を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-expense-accounting";

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
          { name: "電気代の経理・税務", url: "https://simulator.eic-jp.org/articles/accounting-tax" },
          { name: "電気代の勘定科目と仕訳" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/accounting-tax" className="underline-offset-2 hover:underline">電気代の経理・税務</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電気代の勘定科目と仕訳</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代の勘定科目と仕訳｜部門配賦と月次締めの実務</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気代の基本的な勘定科目（水道光熱費・製造経費）、部門配賦の考え方、月次締め時の処理を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代の勘定科目</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気代の標準的な勘定科目は、事務所・店舗では「水道光熱費」、製造業の工場では「製造経費（動力費）」、医療機関では「水道光熱費」または「診療材料費」内の項目として処理されるのが一般的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">勘定科目の選定は自社の会計方針に従い、継続的に同じ科目を使用します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">部門配賦の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">複数部門・複数施設を持つ企業では、電気代を各部門に配賦する必要があります。専有メーターがある場合は実績配賦、ない場合は床面積・人員数・機械稼働時間比率などで按分します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">配賦基準は一度決めたら継続適用するのが原則です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">月次締めと期ずれ対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力会社の請求は通常、翌月締め・翌々月請求のため、月次決算では当月未請求分を見越計上します。標準的には「前月実績 × 当月日数 / 前月日数」で概算計上し、請求確定後に差額を調整します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/accounting-tax", label: "電気代の経理・税務の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
