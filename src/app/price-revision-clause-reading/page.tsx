import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "料金改定条項の典型と読み方｜事前通知期間・異議申立の扱い";
const pageDescription =
  "電力契約の料金改定条項の典型パターンと、需要家側が確認すべき項目を整理します。";
const pageUrl = "https://simulator.eic-jp.org/price-revision-clause-reading";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "料金改定条項の典型と読み方" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">料金改定条項の典型と読み方</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">料金改定条項の典型と読み方｜事前通知期間・異議申立の扱い</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約の料金改定条項の典型パターンと、需要家側が確認すべき項目を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金改定条項の基本構造</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力契約の料金改定条項は、①改定事由（燃料費・市場価格・制度改正など）、②改定通知期間、③需要家の解約権、④異議申立手続き、の4要素で構成されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">小売電気事業者側が一方的に改定する権利を持つのが通常ですが、需要家には改定を受け入れずに解約する権利（違約金なし解約）が認められるケースが多いです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">事前通知期間の確認ポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事前通知期間は、契約により30日前〜6ヶ月前まで様々です。短期通知は需要家に不利（代替調達の時間が短い）、長期通知は有利です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">通知方法（書面・電子・メール）、通知到達時点の定義、も重要項目。電子通知では「送信日」「開封日」「掲載日」など定義が曖昧だと紛争の原因になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">異議申立・解約権の実務</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">値上げ通知を受けて解約を選択する場合、①通知受領の記録、②解約意思の書面通知、③移行先との契約手続き、の3段階を早期に進めます。解約申入れ期限を過ぎると自動的に値上げ受け入れとみなされる条項もあるため要注意。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約書原本を保管し、改定条項の記述を契約締結時・更新時に確認する習慣が、有事の備えになります。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
