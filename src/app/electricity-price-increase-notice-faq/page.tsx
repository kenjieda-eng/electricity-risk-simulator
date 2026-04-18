import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電気代の値上げ通知が来たときのFAQ｜確認・交渉・切替の流れ";
const pageDescription =
  "電力会社から値上げ通知が届いた際の、確認事項・交渉可否・他社への切替手順をFAQ形式で整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-price-increase-notice-faq";

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
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "FAQ集（よくある質問）", url: "https://simulator.eic-jp.org/articles/faq" },
          { name: "電気代の値上げ通知が来たときのFAQ" },
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
          <span className="text-slate-800">電気代の値上げ通知が来たときのFAQ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代の値上げ通知が来たときのFAQ｜確認・交渉・切替の流れ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力会社から値上げ通知が届いた際の、確認事項・交渉可否・他社への切替手順をFAQ形式で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">通知到着時の確認事項FAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q1：値上げ通知の見方は？ A：①値上げ実施日、②値上げ幅（円/kWh・基本料金）、③理由、④解約の自由、の4点を最優先で確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q2：値上げ理由として妥当なもの？ A：燃料費・市場価格・制度改正（託送料金・容量拠出金）などが一般的な理由。燃料費調整ではなく基本単価の改定の場合は、社内説明に根拠が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q3：通知なしの値上げは違法？ A：契約条件により事前通知期間が定められており、通知なしまたは短期通知は契約違反の可能性があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">交渉の余地FAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q4：値上げは交渉できる？ A：小規模契約は交渉余地は限定的ですが、中大規模は価格交渉・条件変更の余地があります。値上げ幅の根拠資料を求めることが交渉の第一歩。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q5：引き止め交渉で有利な条件が出る？ A：切替の意向を明示することで、値上げ幅の緩和・契約期間延長によるディスカウントなどの条件が出ることがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切替判断のFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q6：値上げ通知を受けて、すぐ切替すべき？ A：切替には1〜2ヶ月かかり、切替先も同水準の値上げをしているケースが多い。複数社見積・比較が不可欠。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q7：値上げ前に解約すると違約金がかかる？ A：契約条件に違約金条項があれば発生。値上げ通知時は「消費者保護の観点から違約金免除」が認められるケースもあります。</p>
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
