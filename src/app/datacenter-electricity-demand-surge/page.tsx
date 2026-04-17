import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "データセンター電力需要の急増｜AI時代の需要動向";
const pageDescription =
  "生成AI・クラウド需要の急拡大でデータセンターの電力需要が急増しています。日本・世界の動向と法人電気料金への波及を整理します。";
const pageUrl = "https://simulator.eic-jp.org/datacenter-electricity-demand-surge";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "AI最適化", "データセンター電力", "AI電力需要"],
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
          { name: "データセンター電力需要の急増" },
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
          <span className="text-slate-800">データセンター電力需要の急増</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">データセンター電力需要の急増｜AI時代の需要動向</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">生成AI・クラウド需要の急拡大でデータセンターの電力需要が急増しています。日本・世界の動向と法人電気料金への波及を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">世界のデータセンター電力需要の動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">IEA予測では、データセンターの世界電力消費量は2022年460TWhから2026年には620〜1,050TWhに拡大するとされ、AIワークロードが主要な拡大要因です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">米国・欧州では既にデータセンター集積地域で電力供給制約が顕在化し、新設の停滞・電力価格上昇が起きています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">日本の動向</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">国内でも千葉・印西、大阪、福岡、北海道千歳などに大型データセンター建設が相次ぎ、地域の電力需要を押し上げる要因となっています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">北海道のラピダス関連、関東のハイパースケール拠点など、従来の電力供給計画を超える需要増が見込まれています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人電気料金への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需要拡大に対応した発電所・送電インフラ整備費用は、最終的に全需要家の電気料金に転嫁されます。特に容量拠出金・託送料金の上昇圧力として2026年以降顕在化する見込みです。</p>
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
