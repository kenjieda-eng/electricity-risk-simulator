import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "インボイス制度と電気代｜適格請求書発行事業者の確認と経費処理";
const pageDescription =
  "インボイス制度導入後の電気代処理、電力会社の対応状況、免税事業者からの仕入税額控除の扱いを整理します。";
const pageUrl = "https://simulator.eic-jp.org/invoice-system-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "インボイス制度"],
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
          { name: "電気代の経理・税務", url: "https://simulator.eic-jp.org/articles/accounting-tax" },
          { name: "インボイス制度と電気代" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/accounting-tax" className="underline-offset-2 hover:underline">電気代の経理・税務</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">インボイス制度と電気代</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">インボイス制度と電気代｜適格請求書発行事業者の確認と経費処理</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">インボイス制度導入後の電気代処理、電力会社の対応状況、免税事業者からの仕入税額控除の扱いを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">インボイス制度の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2023年10月から導入されたインボイス制度（適格請求書等保存方式）では、仕入税額控除を受けるためには、適格請求書発行事業者（登録番号T+13桁）から適格請求書を受け取る必要があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">大手電力会社はすべて適格請求書発行事業者として登録済みで、請求書・明細書にT番号が記載されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">確認のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約中の電力会社が登録事業者であること、請求書に登録番号・税率区分・税額が明記されていること、を月次で確認します。特に地域新電力や小規模新電力との契約では、登録状況の確認が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">登録番号は国税庁の公表サイトで検索できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">免税事業者からの仕入時の扱い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">免税事業者からの電力購入では仕入税額控除ができず、2026年9月までは80%、2029年9月までは50%の経過措置があります。新電力のなかには免税事業者もあるため、契約時に確認が必要です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/accounting-tax", label: "電気代の経理・税務の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
