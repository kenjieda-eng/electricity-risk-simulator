import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "マイクログリッドとは｜法人拠点での自立運転を実現する仕組み";
const pageDescription =
  "マイクログリッドは、自家発電・蓄電池・制御システムを組み合わせて自立運転可能にする電力システムです。導入形態と効果を整理します。";
const pageUrl = "https://simulator.eic-jp.org/microgrid-for-business";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "マイクログリッド"],
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
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "マイクログリッドとは" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">マイクログリッドとは</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">マイクログリッドとは｜法人拠点での自立運転を実現する仕組み</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">マイクログリッドは、自家発電・蓄電池・制御システムを組み合わせて自立運転可能にする電力システムです。導入形態と効果を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">マイクログリッドの基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">マイクログリッドは、自家発電設備（太陽光・風力・コジェネ）、蓄電池、負荷制御装置を統合し、平常時は電力系統に接続されながら、系統停電時には独立して自立運転できる小規模な電力ネットワークです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">対象は単一施設（病院・工場）から複数施設（キャンパス・工業団地）まで幅広く、防災・脱炭素・コスト管理を同時に実現する手段として注目されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入効果</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">停電時の事業継続、再エネ利用率の向上、ピーク時の電気料金削減、VPP参加による収益化など、複数のメリットが同時に得られます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に需要家単独でのオフグリッドではなく、平常時は系統接続しつつ必要時に自立運転する設計が経済性・安定性の両面で有利です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入の課題</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">初期投資は数千万円〜数十億円と大きく、投資回収は10〜20年が目安です。制御システムの複雑さ、規制対応（電気事業法）、技術者の確保など、単独施設での導入にはハードルがあります。自治体や工業団地単位での共同導入が検討されるケースも増えています。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-bcp", label: "電力BCP・災害対策の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
