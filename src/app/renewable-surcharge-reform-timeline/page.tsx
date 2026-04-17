import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "再エネ賦課金関連の制度改正タイムライン";
const pageDescription =
  "2012年のFIT開始から、減免制度変更、2023年度の急落、2025年度の過去最高値まで、再エネ賦課金関連改正を時系列で整理します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-surcharge-reform-timeline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力"],
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
          { name: "制度改正タイムライン", url: "https://simulator.eic-jp.org/articles/regulation-timeline" },
          { name: "再エネ賦課金関連の制度改正タイムライン" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/regulation-timeline" className="underline-offset-2 hover:underline">制度改正タイムライン</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">再エネ賦課金関連の制度改正タイムライン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金関連の制度改正タイムライン</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">2012年のFIT開始から、減免制度変更、2023年度の急落、2025年度の過去最高値まで、再エネ賦課金関連改正を時系列で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">FIT開始と初期の上昇</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2012年のFIT開始時の賦課金単価は0.22円/kWhでしたが、太陽光の急速な導入で急上昇し、2019年度に2.95円/kWhに達しました。高額買取が再エネ賦課金を急速に押し上げた時期です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">減免制度・制度改正</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2017年：FIT法改正、入札制度導入、減免制度厳格化。2022年：FIP制度開始。2023年度は回避可能費用の上昇で賦課金が1.40円/kWhに急落した特異年度でした。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">近年の動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2024年度は3.49円/kWhで過去最高値を更新。2025・2026年度も高水準が続く見込みで、賦課金の長期上昇トレンドは当面変わらないとされています。減免制度を活用できる電気多消費事業者は、適用状況を年次で確認することが推奨されます。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/regulation-timeline", label: "制度改正タイムラインの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
