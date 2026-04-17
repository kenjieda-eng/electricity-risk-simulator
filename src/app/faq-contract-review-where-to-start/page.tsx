import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "【FAQ】法人の電力契約見直しは何から始める？｜手順と期間の目安";
const pageDescription =
  "契約見直しの着手から切替完了までの標準的な流れと、各ステップで確認すべきポイントをFAQ形式で整理します。";
const pageUrl = "https://simulator.eic-jp.org/faq-contract-review-where-to-start";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電気料金FAQ"],
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
          { name: "FAQ集（よくある質問）", url: "https://simulator.eic-jp.org/articles/faq" },
          { name: "【FAQ】法人の電力契約見直しは何から始める？" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/faq" className="underline-offset-2 hover:underline">FAQ集（よくある質問）</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">【FAQ】法人の電力契約見直しは何から始める？</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【FAQ】法人の電力契約見直しは何から始める？｜手順と期間の目安</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">契約見直しの着手から切替完了までの標準的な流れと、各ステップで確認すべきポイントをFAQ形式で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 契約見直しは何から始めれば？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最初に現在の契約内容を把握します。契約書・検針票・月次請求書から、契約電力・プラン・単価・更新月・違約金条件を確認し、社内の誰が窓口かを特定します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">その後、過去12ヶ月の使用量・請求額を集計し、見直し余地の大きさを把握します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 見直しはどのくらい時間がかかる？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約内容把握に1〜2週間、相見積取得に2〜4週間、社内検討・承認に2〜4週間、切替手続きに1〜2ヶ月で、合計2〜4ヶ月が標準的な期間です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">更新月の3〜6ヶ月前から着手するのが望ましく、直前だと選択肢が狭まります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 切替時のトラブル回避策は？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最終保障供給への落とし込みを避けるため、現契約の解約手続きと新契約の供給開始日を連続させます。また、違約金条件を事前確認し、途中解約のペナルティを把握しておきます。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/faq", label: "FAQ集（よくある質問）の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
