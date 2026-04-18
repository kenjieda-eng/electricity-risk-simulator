import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "持株会社化に伴う電力契約の見直し｜デマンド合算の可否";
const pageDescription =
  "持株会社化（純粋持株会社・事業持株会社）で電力契約をどう再設計するか、契約単位とデマンド合算の論点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/holding-company-electricity-review";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "デマンド監視", "持株会社電力"],
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
          { name: "持株会社化に伴う電力契約の見直し" },
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
          <span className="text-slate-800">持株会社化に伴う電力契約の見直し</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">持株会社化に伴う電力契約の見直し｜デマンド合算の可否</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">持株会社化（純粋持株会社・事業持株会社）で電力契約をどう再設計するか、契約単位とデマンド合算の論点を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">持株会社化と電力契約</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">持株会社化では、事業会社を子会社化し、株式保有で支配する構造になります。各事業会社が独立した法人として電力契約を持つため、従来の個別契約をそのまま維持するのが基本です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし、電力調達の集約・最適化の観点から、持株会社主導でエネルギー管理を統合する動きも増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンド合算の論点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">デマンド合算（複数の契約を1つとして扱う）は、電力会社・託送ルール上、同一需要地点・同一名義が原則です。持株会社化で法人格が分かれた場合、デマンド合算は原則不可。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし、エネルギーサービス契約（ESP）や自営線・グリッド内需給などの設計で、実質的に合算効果を出すスキームも検討できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務的な選択肢</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①各社ごとの個別契約を継続、②持株会社主導の電力調達で同条件・単価一括取得（契約名義は各社のまま）、③エネルギーマネジメント会社を設立してグループ需要を集約、の3パターンが実務上の選択肢です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">持株会社化のタイミングで、エネルギーマネジメント戦略を再設計することを推奨します。</p>
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
