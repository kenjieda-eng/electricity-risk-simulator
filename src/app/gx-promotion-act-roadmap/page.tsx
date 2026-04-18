import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "GX推進法・GX-ETS導入ロードマップ｜2023年成立〜2026年本格稼働";
const pageDescription =
  "GX推進法・GX-ETS制度の時系列と、法人への影響を段階別に整理します。";
const pageUrl = "https://simulator.eic-jp.org/gx-promotion-act-roadmap";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "GX-ETS", "GX推進法"],
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
          { name: "GX推進法・GX-ETS導入ロードマップ" },
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
          <span className="text-slate-800">GX推進法・GX-ETS導入ロードマップ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">GX推進法・GX-ETS導入ロードマップ｜2023年成立〜2026年本格稼働</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">GX推進法・GX-ETS制度の時系列と、法人への影響を段階別に整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GX推進法の概要</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX推進法（グリーン・トランスフォーメーション推進法）は、2023年5月成立・2023年7月施行の法律で、脱炭素社会への移行を「成長機会」として捉え、官民で150兆円の投資を実現するための枠組みです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">主要施策は、①GX経済移行債の発行、②GX-ETS（排出量取引制度）の創設、③化石燃料賦課金の導入、④GX推進機構の設置、の4本柱です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">段階的導入のタイムライン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2023年5月：GX推進法成立。7月：施行。2023年：GX-ETS試行運用（自主参加）。2026年：GX-ETS本格稼働（義務参加）。2028年：化石燃料賦課金導入。2033年：電力のカーボンプライシング（有償オークション）導入。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">段階的にカーボンコストが上昇する設計で、2033年までに企業の化石燃料使用コストは大きく上昇する見込みです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人電気料金への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①GX-ETS：電力会社が排出枠購入コストを料金に転嫁。②化石燃料賦課金：火力発電の燃料コストが上昇し、燃料費調整額に反映。③有償オークション：電力会社の排出枠購入コストが本格的に料金に波及。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2030年までにkWhあたり1〜3円程度の上昇要因が段階的に積み上がる可能性があり、中長期の電力コスト計画に織り込む必要があります。</p>
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
