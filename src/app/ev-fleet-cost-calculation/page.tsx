import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "社用車EV導入時の電力コスト試算";
const pageDescription =
  "社用車をEV化する際の充電電力量、月間電気代、既存の燃料費との比較試算を、一般的な前提条件を使って整理します。";
const pageUrl = "https://simulator.eic-jp.org/ev-fleet-cost-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "EV充電", "充電設備"],
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
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "社用車EV導入時の電力コスト試算" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ev-charging" className="underline-offset-2 hover:underline">EV・充電インフラ</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">社用車EV導入時の電力コスト試算</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">社用車EV導入時の電力コスト試算</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">社用車をEV化する際の充電電力量、月間電気代、既存の燃料費との比較試算を、一般的な前提条件を使って整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力使用量の試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EVの電費は4〜6km/kWhが一般的で、月走行2,000kmなら月間400〜500kWhの電力を消費します。10台で月4,000〜5,000kWh、単価25円/kWhなら月10万〜12.5万円が充電コストです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし急速充電の公共ステーション利用は単価50〜80円/kWhと大きく跳ね上がるため、自社充電比率を高めることがコスト抑制の鍵です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">基本料金への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">普通充電（6kW）を夜間のみ使うなら契約電力への影響は小さいですが、日中の急速充電利用ではデマンド値に大きく影響します。既存の契約電力に10〜30kWの追加が想定されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約電力が1段階上がれば基本料金が年間数十万円増える可能性があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ガソリン車との総コスト比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ガソリン車（燃費12km/L、ガソリン170円/L）の月走行2,000kmは月28,000円。EV（電費5km/kWh、電力25円/kWh）なら月10,000円で、燃料コストで年間20万円超の削減が可能です。車両コスト差・補助金・メンテナンスを加えた総合比較が必要です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/ev-charging", title: "EV・充電インフラ", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/ev-charging", label: "EV・充電インフラの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
