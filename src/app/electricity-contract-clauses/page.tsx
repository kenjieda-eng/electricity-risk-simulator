import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力契約書の主要条項｜法人契約で必ず確認すべき項目";
const pageDescription =
  "電力契約書・供給約款の主要条項（供給条件・料金・期間・解約・不可抗力）を、法人担当者向けに読み解くポイントと共に整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-contract-clauses";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力契約書", "供給約款"],
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "電力契約書の主要条項" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電力契約書の主要条項</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力契約書の主要条項｜法人契約で必ず確認すべき項目</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約書・供給約款の主要条項（供給条件・料金・期間・解約・不可抗力）を、法人担当者向けに読み解くポイントと共に整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約書の標準的な構成</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力供給契約書は、供給条件（電力量・電圧・受電地点）、料金（単価・算定方法・調整額）、契約期間、更新、解約条件、不可抗力、紛争解決の各条項で構成されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">約款は事業者ごとに標準版があり、個別契約書と組み合わせて読む必要があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金算定の核となる条項</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">料金条項では、基本料金の単価、電力量料金単価、燃料費調整式、再エネ賦課金の扱い、そのほかの手数料（容量拠出金相当額など）が記載されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に燃料費調整・市場価格調整式の上限・下限設定、改定タイミングの規定は、将来の支払額を左右する重要条項です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">期間・解約条項</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約期間、自動更新有無、更新拒絶通知期限（通常3ヶ月前）、中途解約違約金の計算式が主要論点です。違約金は残期間電気代の30〜100%が相場で、高額化しやすいポイントです。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
