import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import {
  InteractiveSankey, EmissionFactorMap, RegulationTimelineHorizontal,
  PriceHeatmap, ScenarioWaterfall, ComparisonRadar,
} from "../../components/market-data/DataVisualizations";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "データビジュアル集｜電力フロー・排出マップ・制度年表";
const pageDescription = "Sankey図・日本地図・年表・ヒートマップ・Waterfall・レーダーチャートなど、電力・脱炭素関連データを6種のビジュアライゼーションで整理。";
const pageUrl = "https://simulator.eic-jp.org/data-visualizations";

export const metadata: Metadata = {
  title: pageTitle, description: pageDescription, alternates: { canonical: pageUrl },
  openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: "法人電気料金ナビ", locale: "ja_JP", type: "website", images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }] },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd headline={pageTitle} description={pageDescription} url={pageUrl} datePublished="2026-04-18"
        breadcrumbItems={[{ name: "ホーム", url: "https://simulator.eic-jp.org/" }, { name: "データビジュアル集" }]} />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">データビジュアル集</span>
        </nav>
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">📊 データビジュアル集</h1>
          <p className="mt-4 text-sm leading-7">電力・脱炭素に関する代表的データをグラフィックで整理。社内勉強会・経営報告に流用可（CC BY 4.0）。</p>
        </header>
        <InteractiveSankey />
        <EmissionFactorMap />
        <RegulationTimelineHorizontal />
        <PriceHeatmap />
        <ScenarioWaterfall />
        <ComparisonRadar />
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/business-electricity-retrospective", title: "月次振り返りハブ", description: "可視化の元データを月次で公開中。" },
              { href: "/business-electricity-price-trend-10-years", title: "10年推移ピラー", description: "長期トレンドの解説記事。" },
              { href: "/last-resort-supply-history", title: "最終保障供給 推移", description: "制度の変遷を時系列で確認。" },
              { href: "/articles", title: "記事ハブ", description: "テーマ別の解説記事。" },
              { href: "/", title: "シミュレーター", description: "30秒でリスク診断。" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
