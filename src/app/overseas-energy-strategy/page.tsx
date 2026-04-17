import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "海外拠点のエネルギー戦略｜多国籍企業の電力調達設計";
const pageDescription =
  "海外拠点を持つ企業の電力調達は、各国の制度・価格水準を踏まえた個別最適化が必要です。基本的な枠組みを整理します。";
const pageUrl = "https://simulator.eic-jp.org/overseas-energy-strategy";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "海外電力"],
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
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "海外拠点のエネルギー戦略" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">海外拠点のエネルギー戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">海外拠点のエネルギー戦略｜多国籍企業の電力調達設計</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">海外拠点を持つ企業の電力調達は、各国の制度・価格水準を踏まえた個別最適化が必要です。基本的な枠組みを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">国別の電力市場の多様性</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各国の電力市場は制度・料金水準が大きく異なります。米国は州単位で自由化度合いが異なり、欧州は全面自由化、東南アジアは一部自由化、中東は国営企業による独占供給など、多様です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">多国籍企業では、グループ共通のポリシーと各国個別戦略を組み合わせる二層構造が一般的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">グローバルなエネルギー調達方針</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100加盟企業では、拠点ごとに現地の再エネ調達手段（PPA・証書・メニュー）を選び、グループ全体で再エネ比率目標を管理します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各国のレギュラトリーチェンジ（炭素税、再エネ義務など）にも対応する必要があり、地域ごとのエネルギー担当の配置が実務上有効です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">リスク管理の要点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">為替リスク、政治リスク、規制変更リスク、気候物理リスクなど多面的です。特に発電事業者の信用・長期契約の履行能力は、国ごとに慎重な評価が必要です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/global-energy", title: "海外拠点・グローバルエネルギー", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/global-energy", label: "海外拠点・グローバルエネルギーの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
