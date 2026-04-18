import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "GHGプロトコルとScope2マーケット基準の実務｜算定範囲と再エネ証書の適用ルール";
const pageDescription =
  "GHGプロトコルScope2ガイダンスに基づくマーケット基準算定のルールと、証書・PPA・メニューの反映方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ghg-protocol-scope2-market-based";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "Scope2", "GHGプロトコル", "コーポレートPPA"],
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
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "GHGプロトコルとScope2マーケット基準の実務" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">GHGプロトコルとScope2マーケット基準の実務</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">GHGプロトコルとScope2マーケット基準の実務｜算定範囲と再エネ証書の適用ルール</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">GHGプロトコルScope2ガイダンスに基づくマーケット基準算定のルールと、証書・PPA・メニューの反映方法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GHGプロトコルScope2ガイダンスとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GHGプロトコル（Greenhouse Gas Protocol）は、企業の温室効果ガス算定・報告の国際標準で、WRIとWBCSDが共同開発しました。Scope2ガイダンス（2015年発行）では、ロケーション基準とマーケット基準の両方の開示が推奨されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本のCDP回答、有価証券報告書サステナビリティ開示、SBT認定の多くはこのガイダンスに準拠しています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">マーケット基準で反映できる証書・契約</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">マーケット基準では、①電力会社との再エネメニュー契約（トラッキング情報付き）、②非化石証書（再エネ指定・トラッキング付き）、③コーポレートPPA由来の再エネ電力、④J-クレジット・グリーン電力証書、が反映できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">反映の優先順位は、PPA・専用メニュー契約 ＞ 非化石証書 ＞ J-クレジット、の順が一般的です。重要なのはダブルカウントを避けること（同じ発電量を複数企業で二重に主張しない）です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務上の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">証書購入の日付・年度が算定対象年度と一致する必要があります。また、地理的・時間的一致（同じ電力系統内で、同じ年度内に発電・消費されたもの）が望ましいとされ、将来的には時間一致（Time-matched）が標準化される可能性があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第三者保証を取得する場合、証書・契約書・使用電力量データの三点セットを証跡として提出できるように整備しておきます。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
