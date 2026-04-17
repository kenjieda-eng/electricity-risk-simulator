import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "AIワークロードのエネルギー影響｜学習・推論の電力消費";
const pageDescription =
  "生成AI・機械学習の学習・推論プロセスが消費する電力の実態と、電力効率化の技術動向を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ai-workload-energy-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "AI最適化", "AI電力需要"],
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
          { name: "データセンター・AI需要", url: "https://simulator.eic-jp.org/articles/datacenter-ai-demand" },
          { name: "AIワークロードのエネルギー影響" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/datacenter-ai-demand" className="underline-offset-2 hover:underline">データセンター・AI需要</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">AIワークロードのエネルギー影響</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">AIワークロードのエネルギー影響｜学習・推論の電力消費</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">生成AI・機械学習の学習・推論プロセスが消費する電力の実態と、電力効率化の技術動向を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">学習と推論のエネルギー差</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">大規模言語モデル（LLM）の学習には1回あたり数GWh〜数十GWhの電力が必要で、数万台のGPUを数週間〜数ヶ月稼働させます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方、推論（実際の利用）は1クエリあたり数Wh程度ですが、利用規模が大きくなると学習の数倍の累積消費になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">実用段階でのエネルギー管理は推論の効率化が中心課題です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GPU・アクセラレータの電力消費</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最新のAI向けGPU（H100、B200等）は単体で700W〜1,000W超、1ラックで30〜50kW、大型データセンターでは1拠点で数十MW規模の電力契約が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従来のサーバーラック（5〜10kW）の5〜10倍の電力密度となり、冷却設計も根本的に見直しが必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力効率化の方向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">モデル圧縮（量子化・蒸留）、推論専用チップ、液冷・浸漬冷却、動的負荷分散、再エネ地域への移設など、複数アプローチが並行で進んでいます。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/datacenter-ai-demand", title: "データセンター・AI需要", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/datacenter-ai-demand", label: "データセンター・AI需要の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
