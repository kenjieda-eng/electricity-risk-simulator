import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "エネルギーマネジメント導入のROI試算｜投資回収年数の目安";
const pageDescription =
  "BEMS/FEMS/EMSの導入投資額と年間削減額から、投資回収年数（ROI）を試算する方法を解説します。";
const pageUrl = "https://simulator.eic-jp.org/energy-management-roi-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "BEMS", "エネルギーマネジメント"],
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
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "エネルギーマネジメント導入のROI試算" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">エネルギーマネジメント導入のROI試算</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">エネルギーマネジメント導入のROI試算｜投資回収年数の目安</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">BEMS/FEMS/EMSの導入投資額と年間削減額から、投資回収年数（ROI）を試算する方法を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">エネマネ投資の主要コスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">BEMS導入の主要コストは、①計測機器（センサー・スマートメーター）設置費、②制御機器（空調・照明との連携装置）、③ソフトウェア（見える化・制御）、④導入工事・設定、⑤年間保守費、の5項目です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オフィスビル1棟で数百万〜1,500万円、中規模工場で1,000万〜3,000万円、大規模工場で数千万〜1億円程度が目安です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">年間削減効果の見積り方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">削減効果は、①電力量削減（ベース消費量の5〜15%削減）、②契約電力引き下げ（5〜15%削減）、③需給調整市場参加による収益、の合計で試算します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間電気代1億円の工場でBEMS導入→5〜15%削減なら年500万〜1,500万円の削減。投資2,000万円なら1.5〜4年で回収の試算になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ROIを最大化する運用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ROIは、①導入時のコミッショニング（初期チューニング）の品質、②運用担当者の育成、③定期的な効果検証、で大きく変わります。装置導入だけで終わると効果が出ず、運用改善と一体で進めることが重要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">補助金（省エネ補助金・GX関連補助金）で初期投資を抑える選択肢も活用します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-dx", label: "エネルギーマネジメント・DXの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
