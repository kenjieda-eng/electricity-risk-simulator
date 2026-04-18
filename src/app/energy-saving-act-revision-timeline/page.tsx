import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "省エネ法改正の時系列｜非化石エネルギー転換義務化の流れ";
const pageDescription =
  "省エネ法改正のタイムラインと、法人に課される非化石エネルギー転換義務について整理します。";
const pageUrl = "https://simulator.eic-jp.org/energy-saving-act-revision-timeline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "省エネ法"],
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
          { name: "省エネ法改正の時系列" },
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
          <span className="text-slate-800">省エネ法改正の時系列</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">省エネ法改正の時系列｜非化石エネルギー転換義務化の流れ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">省エネ法改正のタイムラインと、法人に課される非化石エネルギー転換義務について整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ法の改正方向性</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ法は、1979年の制定以来、複数回の改正を経ています。2022年の改正（2023年4月施行）では、名称が「エネルギーの使用の合理化及び非化石エネルギーへの転換等に関する法律」に変更され、非化石エネルギーへの転換が目的として明記されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">対象企業には、省エネだけでなく「非化石エネルギーへの転換」と「電気需要の最適化」への取組みが求められるようになりました。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要改正のタイムライン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022年：省エネ法改正成立。2023年4月：改正法施行、非化石エネルギー転換・電気需要最適化が追加。2024年〜：定期報告書の様式変更、非化石比率の開示義務化。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">今後も段階的に要件強化が見込まれ、中期計画書には再エネ導入計画の具体性が求められる方向です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人実務への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特定事業者（年間エネルギー使用量1,500kL原油換算以上）・第一種エネルギー管理指定工場は、再エネ調達計画の具体化が必要。非化石比率が低い場合は説明責任が発生します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">関連手続きとして、非化石エネルギー活用計画の策定、定期報告書への記載、中期計画書への盛り込み、などが必要です。</p>
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
