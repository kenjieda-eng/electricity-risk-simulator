import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "蓄電池・太陽光設備の減価償却と税務扱い";
const pageDescription =
  "企業が導入する蓄電池・太陽光発電設備の耐用年数、減価償却方法、各種税制優遇措置を整理します。";
const pageUrl = "https://simulator.eic-jp.org/solar-battery-depreciation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "減価償却"],
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
          { name: "電気代の経理・税務", url: "https://simulator.eic-jp.org/articles/accounting-tax" },
          { name: "蓄電池・太陽光設備の減価償却と税務扱い" },
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
          <span className="text-slate-800">蓄電池・太陽光設備の減価償却と税務扱い</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">蓄電池・太陽光設備の減価償却と税務扱い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">企業が導入する蓄電池・太陽光発電設備の耐用年数、減価償却方法、各種税制優遇措置を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">耐用年数の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">太陽光発電設備の法定耐用年数は17年、蓄電池（定置式）は6年が標準です。ただし自家発電設備として一体管理する場合、耐用年数の見直しが可能なケースもあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">取得価額・耐用年数・償却方法（定額法・定率法）は税務上の規定に従います。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中小企業経営強化税制の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業経営強化税制を使うことで、一定の要件を満たす設備投資に対して即時償却または税額控除（7%または10%）が選択可能です。蓄電池・太陽光設備は対象になる場合があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">適用には経営力向上計画の認定が必要で、事前申請が必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">その他の優遇税制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業投資促進税制、生産性向上設備投資促進税制、カーボンニュートラル投資促進税制など、複数の制度が活用できます。要件・スケジュールが異なるため、投資計画に合わせて選定します。</p>
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
