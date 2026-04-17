import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "法人EV充電の基礎｜充電設備の種類と必要な電力契約";
const pageDescription =
  "法人が社用車EVを導入する際の、充電設備の種類（普通・急速）、必要な電力契約区分、費用構造を整理します。";
const pageUrl = "https://simulator.eic-jp.org/corporate-ev-charging-basics";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "EV充電", "充電設備"],
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
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "法人EV充電の基礎" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ev-charging" className="underline-offset-2 hover:underline">EV・充電インフラ</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">法人EV充電の基礎</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人EV充電の基礎｜充電設備の種類と必要な電力契約</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">法人が社用車EVを導入する際の、充電設備の種類（普通・急速）、必要な電力契約区分、費用構造を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">EV充電設備の種類</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV充電器は大きく普通充電（3kW・6kW）と急速充電（20kW〜150kW）に分かれます。社内・事業所内での夜間充電は普通充電で十分ですが、営業車の日中充電には急速充電が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">導入台数・利用パターンにより、設置台数・出力・契約区分が決まります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力契約への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">普通充電器を数台設置する程度なら既存の低圧契約で対応可能ですが、急速充電器を1台設置するだけで50kW超になり、高圧契約への切替が必要になることもあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">設置前に既存契約の契約電力余裕、キュービクル容量、配線能力を確認することが重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主な費用項目</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">充電器本体（普通型50万〜100万円、急速型300万〜600万円）、工事費、高圧受電設備改修費、補助金申請代行費用、保守料金が主な項目です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/ev-charging", title: "EV・充電インフラ", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/ev-charging", label: "EV・充電インフラの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
