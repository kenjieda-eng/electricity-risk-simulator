import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "需給・計画値関連用語集｜インバランス・計画値同時同量・ゲートクローズ";
const pageDescription =
  "電力需給管理に関わる用語を、小売電気事業者・需要家の視点で整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/supply-demand-planning-glossary";

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
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "需給・計画値関連用語集" },
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
          <span className="text-slate-800">需給・計画値関連用語集</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">需給・計画値関連用語集｜インバランス・計画値同時同量・ゲートクローズ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力需給管理に関わる用語を、小売電気事業者・需要家の視点で整理した用語集です。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">計画値同時同量の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">計画値同時同量：小売電気事業者が、30分単位で需要予測と供給計画を一致させる義務。2016年の小売全面自由化で導入。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">発電計画・需要計画：翌日の発電量・需要量を30分単位で提出する計画。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ゲートクローズ：計画値の最終提出期限。実需給1時間前。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">インバランスの用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">インバランス：計画値と実際の発電・需要の差。差額は一般送配電事業者が調整し、発生側に精算義務があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">インバランス料金：インバランス分に課される料金。需給逼迫時は高騰する可能性があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">インバランスリスク：小売電気事業者が市場連動で需要家に転嫁するリスク。市場連動プラン需要家が意識すべき項目。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">需給調整の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需給調整市場：一般送配電事業者が調整力を調達する市場。2021年から段階的に開設。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">調整力：需要変動・発電変動に対応する電源・需要抑制能力。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">予備率：需要に対する供給余力の比率。7%以下で需給逼迫注意報、3%以下で警報発令の目安。</p>
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
