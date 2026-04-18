import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電気代の部門別・製品別配賦方法｜ABC原価計算の実務";
const pageDescription =
  "電気代を製造原価・部門別に配賦し、正確な製品原価を把握するためのABC（活動基準原価計算）の考え方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-cost-abc-allocation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "ABC原価計算"],
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
          { name: "電気代の部門別・製品別配賦方法" },
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
          <span className="text-slate-800">電気代の部門別・製品別配賦方法</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代の部門別・製品別配賦方法｜ABC原価計算の実務</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気代を製造原価・部門別に配賦し、正確な製品原価を把握するためのABC（活動基準原価計算）の考え方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜ電気代の配賦が重要か</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">製造業・サービス業では、電気代は間接費として集計され、何らかのルールで製品・部門に配賦されます。配賦ルールが雑だと、製品別収益性が歪み、誤った価格決定・投資判断につながります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に電力多消費業種（冷凍倉庫・データセンター・半導体など）では、電気代配賦の精度が原価管理の品質を大きく左右します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">伝統的な配賦方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①売上高按分：最も簡便だが、電力消費量と売上は必ずしも比例せず歪みが大きい。②人員数按分：間接部門向けで使うが、製造業には不適。③設備時間按分：設備ごとの稼働時間で按分、精度はまずまず。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらは手軽だが、精度は限定的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ABC原価計算の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ABC（Activity-Based Costing）は、活動（設備運転・空調・照明など）を基準に電気代を配賦する方法です。各活動の電力消費量を計測し、製品・部門が使う活動量に応じて配賦します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">精度は最も高いですが、計測機器の設置・データ集計コストが発生します。高コスト製品群・差別化が必要な業種ほどABCの効果が大きく現れます。</p>
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
