import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "分社化・会社分割時の電力契約｜空白期間を避けるための設計";
const pageDescription =
  "会社分割・分社化時の電力契約の分割・新規契約設定と、実行日前後の空白期間リスクを回避する手順を整理します。";
const pageUrl = "https://simulator.eic-jp.org/spin-off-energy-contracts";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "分社化"],
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
          { name: "M&A・組織再編時の電力契約", url: "https://simulator.eic-jp.org/articles/ma-organizational-change" },
          { name: "分社化・会社分割時の電力契約" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ma-organizational-change" className="underline-offset-2 hover:underline">M&A・組織再編時の電力契約</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">分社化・会社分割時の電力契約</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">分社化・会社分割時の電力契約｜空白期間を避けるための設計</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">会社分割・分社化時の電力契約の分割・新規契約設定と、実行日前後の空白期間リスクを回避する手順を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">会社分割時の契約扱い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">会社分割（吸収分割・新設分割）では、分割契約書で承継対象とした資産・負債・契約が分割先会社に移転します。電力契約も明示的に承継対象に含める必要があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">除外された場合、分割先は分割実行日から新規契約が必要になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">空白期間リスクの回避</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">分割実行日に電力供給が途切れることは絶対に避ける必要があります。最悪のケースは、既存契約が実行日で終了し、新規契約がまだ始まっていない状態で最終保障供給に自動切替されるパターンです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">実行日の少なくとも3ヶ月前から、電力会社との承継手続・新規契約準備を並行して進めます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">分社後のメニュー再検討</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">分社により事業規模が小さくなる場合、高圧から低圧への契約区分変更、または規模縮小に合わせたプラン見直しが有効な場合があります。実行日と合わせて再契約を検討します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/ma-organizational-change", title: "M&A・組織再編時の電力契約", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/ma-organizational-change", label: "M&A・組織再編時の電力契約の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
