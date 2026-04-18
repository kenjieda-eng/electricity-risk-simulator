import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "テナント契約と電気代の関係｜サブメーター・按分の扱い";
const pageDescription =
  "複数テナントが入居するビル・商業施設で、電気代をどう按分・請求するかのルールと実務を整理します。";
const pageUrl = "https://simulator.eic-jp.org/tenant-sub-meter-electricity-billing";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "テナント電気代"],
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "テナント契約と電気代の関係" },
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
          <span className="text-slate-800">テナント契約と電気代の関係</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">テナント契約と電気代の関係｜サブメーター・按分の扱い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">複数テナントが入居するビル・商業施設で、電気代をどう按分・請求するかのルールと実務を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">テナント契約の電気代構造</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">商業ビル・オフィスビルでは、ビルオーナーが電力会社と一括契約し、テナントには共益費・専有部電気代として転嫁するパターンが多いです。この場合、テナントはビル経由で間接的に電気代を支払います。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方で、テナントが個別契約（メーターごと）を持ち、電力会社に直接支払うパターンもあります。契約形態により管理責任・自由度が変わります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">サブメーターによる按分</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ビル一括契約の場合、サブメーター（戸別メーター）を設置して実使用量を計測し、それに基づいて按分するのが公平な方式です。メーターなしで面積按分するケースもありますが、使用パターンによる差を反映できません。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">按分ルール（単価・基本料金比率・共用部の扱い）は、賃貸借契約または管理規約で明示する必要があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">インボイス制度対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2023年のインボイス制度導入により、ビルオーナーからテナントへの電気代請求もインボイス発行が必要です。ビルオーナーが適格請求書発行事業者でなければ、テナント側で仕入税額控除できなくなります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約見直し時は、ビルオーナーの登録状況と請求書フォーマットを確認しておくことが重要です。</p>
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
