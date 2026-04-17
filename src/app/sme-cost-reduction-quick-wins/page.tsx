import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "中小企業の電気代削減｜今日から始める即効策";
const pageDescription =
  "低予算・短期間で実施できる中小企業向けの電気代削減アイデア（運用改善・低コスト機器更新・契約見直し）を整理します。";
const pageUrl = "https://simulator.eic-jp.org/sme-cost-reduction-quick-wins";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "中小企業電気代"],
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "中小企業の電気代削減" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/sme-guide" className="underline-offset-2 hover:underline">中小企業・小規模事業者向け</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中小企業の電気代削減</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中小企業の電気代削減｜今日から始める即効策</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">低予算・短期間で実施できる中小企業向けの電気代削減アイデア（運用改善・低コスト機器更新・契約見直し）を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">運用改善で即効性のある対策</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">空調設定温度の1度見直し、使わない照明の消灯徹底、待機電力の削減（週末の機器電源オフ）など、運用改善は投資ゼロで効果が出せる最短の打ち手です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事務所・店舗の電気代は、この運用改善だけで5〜15%の削減が可能なケースが一般的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低コスト機器更新</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">LED照明への更新、古いエアコンの省エネ機種への入替、インバーター搭載機器への切替が代表的です。補助金との組み合わせで投資回収を短縮できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特にLED照明は10〜20万円の投資で2〜3年で回収できるケースが多く、中小企業にも取り組みやすい打ち手です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約見直しによる削減</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">新電力への切替、プラン変更、契約アンペアの見直しはいずれも初期投資ゼロで実施できます。年間電気代の5〜10%程度の削減が期待できる一方、固定期間契約や違約金は事前に確認が必要です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/sme-guide", title: "中小企業・小規模事業者向け", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/sme-guide", label: "中小企業・小規模事業者向けの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
