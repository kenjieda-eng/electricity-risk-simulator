import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "事業譲渡時の電力契約名義変更手順｜譲渡日前後のリスク管理";
const pageDescription =
  "事業譲渡のタイミングで電力契約をどう引き継ぐか、名義変更の具体的な手続きとリスクを整理します。";
const pageUrl = "https://simulator.eic-jp.org/business-transfer-name-change-procedure";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "事業譲渡"],
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
          { name: "M&A・組織再編時の電力契約", url: "https://simulator.eic-jp.org/articles/ma-organizational-change" },
          { name: "事業譲渡時の電力契約名義変更手順" },
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
          <span className="text-slate-800">事業譲渡時の電力契約名義変更手順</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">事業譲渡時の電力契約名義変更手順｜譲渡日前後のリスク管理</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">事業譲渡のタイミングで電力契約をどう引き継ぐか、名義変更の具体的な手続きとリスクを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">事業譲渡と電力契約の関係</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事業譲渡は、会社の一部または全部の事業を他社に移転する取引です。電力契約も譲渡対象事業の一部として引き継がれる必要があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">M&Aの他のスキーム（株式譲渡・合併）と異なり、事業譲渡は「個別の契約引継ぎ」が必要で、電力契約も名義変更または新規契約が求められます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">名義変更の手続き</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①譲渡契約書に電力契約の扱い（承継・解約・新規締結）を明記、②譲渡日の60〜90日前に電力会社へ連絡、③名義変更申請書の提出、④新旧名義の同意書取得、⑤実行日前後の確認、の5ステップが基本です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">新電力に切替が必要な場合は、譲渡日までに切替手続きを完了させるための事前準備が必要。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">リスク管理のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①空白期間の回避：譲渡日と電力契約切替日のずれを最小化。②最終保障供給への落ち込み防止：手続き遅延で最終保障供給に移行するリスクあり、料金が割高に。③デマンド・契約電力の精算：移行前後の使用実績に基づく精算漏れを確認。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">譲受側・譲渡側・電力会社の3者間で、事前にタイムラインを合意することが重要です。</p>
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
