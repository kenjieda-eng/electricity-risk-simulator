import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力市場の用語集｜JEPX・スポット・先渡し・先物・容量市場";
const pageDescription =
  "電力市場関連の用語（JEPX・スポット・時間前・先渡し・先物・容量市場・需給調整市場）を整理します。";
const pageUrl = "https://simulator.eic-jp.org/glossary-market-terms";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "容量市場"],
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
          { name: "電力市場の用語集" },
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
          <span className="text-slate-800">電力市場の用語集</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力市場の用語集｜JEPX・スポット・先渡し・先物・容量市場</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力市場関連の用語（JEPX・スポット・時間前・先渡し・先物・容量市場・需給調整市場）を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">JEPXとスポット市場</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">JEPX（日本卸電力取引所）は日本の電力取引の中核市場で、スポット市場・時間前市場・先渡し市場を運営します。スポット市場は翌日24時間を30分単位（48コマ）で前日午前10時までに入札・約定する市場です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">市場連動プランの単価はこのスポット価格を参照します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">先渡し・先物</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">先渡し市場はJEPX内の相対取引市場で、週間・月間など中長期の数量・価格を事前約定します。電力先物はEEX（欧州）やTOCOM（日本）で上場されており、価格変動リスクのヘッジ手段として使われます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">容量市場・需給調整市場</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">容量市場は4年後の発電能力を取引する市場で、2024年度から本格稼働。需給調整市場は系統の周波数・電圧を調整するアンシラリー需要を取引する市場です。いずれも最終的な電気料金に間接的に影響します。</p>
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
