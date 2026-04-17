import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "M&A時の電力契約引継｜合併・事業譲渡での手続きの違い";
const pageDescription =
  "M&A時に電力契約をどう扱うかは、スキーム（合併・事業譲渡・株式譲渡）により大きく異なります。手続きと注意点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ma-electricity-contract-handling";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "M&A電力契約"],
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
          { name: "M&A時の電力契約引継" },
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
          <span className="text-slate-800">M&A時の電力契約引継</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">M&A時の電力契約引継｜合併・事業譲渡での手続きの違い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">M&A時に電力契約をどう扱うかは、スキーム（合併・事業譲渡・株式譲渡）により大きく異なります。手続きと注意点を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">スキーム別の契約扱い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">株式譲渡：契約当事者は変わらないため原則そのまま継続。名義変更も不要。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事業譲渡：資産・負債と共に契約も譲渡対象となるが、電力契約の承継には個別に電力会社の同意が必要。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">合併：存続会社が消滅会社の権利義務を包括承継するため、原則として自動承継されるが、電力会社への届出は必要。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">手続きの流れ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①M&A実行前の契約台帳整理、②電力会社への事前通知、③名義変更・承継手続書類の作成、④実行日の電力会社窓口確認、⑤請求先・支払口座の変更、の順で進みます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力会社によっては承継に1〜3ヶ月かかるケースもあり、クロージングスケジュールとの整合が必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある落とし穴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">名義変更漏れによる元親会社への請求継続、違約金条項の引継に関する認識齟齬、再エネメニューの契約条件改定、などがトラブルの典型パターンです。</p>
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
