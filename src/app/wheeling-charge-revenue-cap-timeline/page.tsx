import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "託送料金制度改革タイムライン｜レベニューキャップ導入の影響";
const pageDescription =
  "託送料金制度のレベニューキャップへの移行と、法人電気料金への影響を時系列で整理します。";
const pageUrl = "https://simulator.eic-jp.org/wheeling-charge-revenue-cap-timeline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "託送料金", "レベニューキャップ"],
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
          { name: "制度改正タイムライン", url: "https://simulator.eic-jp.org/articles/regulation-timeline" },
          { name: "託送料金制度改革タイムライン" },
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
          <span className="text-slate-800">託送料金制度改革タイムライン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">託送料金制度改革タイムライン｜レベニューキャップ導入の影響</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">託送料金制度のレベニューキャップへの移行と、法人電気料金への影響を時系列で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">レベニューキャップとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベニューキャップ（総収入上限制）は、一般送配電事業者の総収入に上限を設定し、効率化インセンティブを与える規制手法です。従来の総括原価方式から転換する形で、2023年度から本格導入されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">目的は、送配電事業者の効率化促進と、託送料金の適正化です。設備投資も総収入枠内で行うため、設備投資判断の変化が料金に反映されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度移行のタイムライン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2016年：総括原価方式のまま託送料金規制継続。2020年：レベニューキャップ導入方針決定。2023年4月：第1規制期間（5年間）開始、レベニューキャップ本格運用。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第1規制期間終了後は、効率化達成度・投資実績を評価し、第2規制期間の上限が再設定されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人電気料金への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベニューキャップ導入により、短期的には送配電事業者の設備投資・人件費の抑制が期待される一方、長期的には設備更新・系統強化の費用が織り込まれるため、託送料金の大幅な低下は期待しにくい構造です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人電気料金では、託送料金は全体の約30〜40%を占める重要項目。今後5〜10年の料金予測には、レベニューキャップ期間ごとの改定を織り込む必要があります。</p>
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
