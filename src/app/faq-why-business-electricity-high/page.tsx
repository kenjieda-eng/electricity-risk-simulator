import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "【FAQ】法人電気代はなぜ高いのか｜主な原因と対処法";
const pageDescription =
  "「法人電気代 なぜ高い」の検索ニーズに答えるFAQ。燃料費調整・再エネ賦課金・契約条件の3軸で原因と対処法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/faq-why-business-electricity-high";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "電気料金FAQ"],
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
          { name: "【FAQ】法人電気代はなぜ高いのか" },
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
          <span className="text-slate-800">【FAQ】法人電気代はなぜ高いのか</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【FAQ】法人電気代はなぜ高いのか｜主な原因と対処法</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">「法人電気代 なぜ高い」の検索ニーズに答えるFAQ。燃料費調整・再エネ賦課金・契約条件の3軸で原因と対処法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 法人電気代が急に高くなった、なぜ？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最も多い原因は、①燃料費調整額の上昇、②再エネ賦課金の単価改定（毎年5月）、③政府の電気代補助金終了、④市場連動プランの市場価格上昇、⑤契約更新時の単価改定、⑥設備増強による使用量増、の6つです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">請求書の「燃料費調整額」「再エネ賦課金」「電力量料金単価」を前月・前年同月と比較することで、原因の切り分けができます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 新電力から大手電力に戻せば安くなる？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">必ずしも安くなりません。特に2022年以降は大手電力のほうが高いケースも多く、過去の慣性で判断せず、現時点の比較見積が必須です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最終保障供給に陥ると大手電力の標準単価の約1.2倍が適用されるため、早めの切替先確保が重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. どこから見直せばいい？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①現契約の内容確認（契約電力・単価・更新月）、②過去12ヶ月の請求データ集計、③3〜5社への相見積、④比較と社内説明、⑤契約切替、の順が標準です。</p>
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
