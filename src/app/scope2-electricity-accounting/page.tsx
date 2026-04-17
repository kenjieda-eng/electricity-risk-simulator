import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "Scope2（電力排出量）の算定と報告ガイド";
const pageDescription =
  "Scope2は購入した電力・熱・蒸気に由来する間接排出量です。マーケット基準とロケーション基準の違いと算定手順を整理します。";
const pageUrl = "https://simulator.eic-jp.org/scope2-electricity-accounting";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "Scope2"],
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
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "Scope2（電力排出量）の算定と報告ガイド" },
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
          <span className="text-slate-800">Scope2（電力排出量）の算定と報告ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Scope2（電力排出量）の算定と報告ガイド</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">Scope2は購入した電力・熱・蒸気に由来する間接排出量です。マーケット基準とロケーション基準の違いと算定手順を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Scope2算定の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Scope2は、企業が外部から購入した電力・熱・蒸気の使用に伴って発生する温室効果ガス排出量を指します。電力会社の発電時点で排出されたCO2を、電力を買った側で算入するという考え方です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">算定は、電力使用量（kWh）× 排出係数（kg-CO2/kWh）で求めます。排出係数は電力会社別に毎年度環境省が公表しており、使用電力量に応じて自動的に反映されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ロケーション基準とマーケット基準の違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ロケーション基準は、電力網の平均的な排出係数（全国平均や事業者平均）を使う方法で、企業の個別選択を反映しません。マーケット基準は、企業が契約した再エネメニューや購入した非化石証書を反映できる方法で、調達努力が数値に表れます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GHGプロトコルでは両方の開示を推奨しており、マーケット基準の方が数値は低くなる傾向があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">算定から開示までのフロー</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">算定の第一歩は、使用電力量データの集約です。複数拠点を持つ企業では、拠点ごとに電力会社が異なり、請求書データを一元化する仕組みが必要です。次に排出係数を掛けて排出量を算出し、再エネメニューや証書購入分を差し引きます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDP、GXリーグ、SBTiなど、開示先によって求められるフォーマットが異なるため、事前確認が必要です。</p>
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
