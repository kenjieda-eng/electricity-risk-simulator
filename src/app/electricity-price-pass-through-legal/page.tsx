import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電気代値上げ時の価格転嫁と下請法｜適正転嫁のための記録方法";
const pageDescription =
  "電気代などのコスト上昇を取引先に価格転嫁する際の下請法対応と、適正転嫁の記録方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-price-pass-through-legal";

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
          { name: "電気代の経理・税務", url: "https://simulator.eic-jp.org/articles/accounting-tax" },
          { name: "電気代値上げ時の価格転嫁と下請法" },
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
          <span className="text-slate-800">電気代値上げ時の価格転嫁と下請法</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代値上げ時の価格転嫁と下請法｜適正転嫁のための記録方法</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気代などのコスト上昇を取引先に価格転嫁する際の下請法対応と、適正転嫁の記録方法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">価格転嫁の必要性と下請法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気代・原材料費・人件費などのコスト上昇を取引先に転嫁することは、持続可能な取引の前提です。2022年以降、政府は価格転嫁の促進を強力に推進しており、下請法・独占禁止法に基づく監視を強化しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">取引先からの価格転嫁要請を拒絶する、または協議に応じないことは「買いたたき」として下請法違反となる可能性があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">転嫁交渉の準備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">価格転嫁交渉には、①コスト上昇の根拠資料（請求書・市場データ）、②価格改定率の試算、③業界水準との比較、の3点セットが必要です。電気代上昇は公的データ（経産省・電力広域機関）で裏付けられるため、根拠は明示しやすいです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">改定申入れは、電子文書または書面で記録を残し、回答期限を設定します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">適正転嫁の記録</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">合意書・議事録・メールなど、転嫁交渉のプロセスを記録しておくことが重要です。税務調査・下請法調査で提出を求められる場合があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業庁の「価格交渉支援ツール」や、商工会議所の無料相談を活用することで、適切な交渉プロセスを設計できます。</p>
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
