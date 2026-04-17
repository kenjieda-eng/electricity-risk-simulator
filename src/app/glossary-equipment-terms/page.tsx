import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力設備の用語集｜高圧・低圧・キュービクル・受変電設備";
const pageDescription =
  "電力設備関連の基本用語（高圧・低圧・受電方式・キュービクル・PAS・VCB）を整理します。";
const pageUrl = "https://simulator.eic-jp.org/glossary-equipment-terms";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "低圧契約"],
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
          { name: "電力設備の用語集" },
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
          <span className="text-slate-800">電力設備の用語集</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力設備の用語集｜高圧・低圧・キュービクル・受変電設備</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力設備関連の基本用語（高圧・低圧・受電方式・キュービクル・PAS・VCB）を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">受電区分</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">低圧：契約電力50kW未満、電柱から直接引込。高圧：50kW以上2,000kW未満、キュービクル（自家用受変電設備）が必要。特別高圧：2,000kW以上、大型変電設備が必要。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">受電区分が上がるほど単価は安くなる一方、自前の設備投資と保安費用が必要になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">キュービクル</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">高圧契約時に必要な屋外型の自家用変電設備で、6,600Vの高圧電力を低圧（100V/200V）に変換します。年1回の電気主任技術者による点検が法定必須です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">設置コストは数百万円、更新サイクルは約20〜25年が目安です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PAS・VCB・保安装置</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PAS（柱上開閉器）は高圧電力引き込み点の保安装置、VCB（真空遮断器）はキュービクル内の主遮断器です。これらの定期点検と更新は、停電事故の予防に直結します。</p>
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
