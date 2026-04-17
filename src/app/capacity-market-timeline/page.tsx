import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "容量市場の制度変遷と電気料金への影響";
const pageDescription =
  "2020年メインオークション開始から2024年本格稼働、2025年以降の価格動向まで、容量市場のタイムラインと法人料金への影響を整理します。";
const pageUrl = "https://simulator.eic-jp.org/capacity-market-timeline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "容量市場"],
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
          { name: "制度改正タイムライン", url: "https://simulator.eic-jp.org/articles/regulation-timeline" },
          { name: "容量市場の制度変遷と電気料金への影響" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/regulation-timeline" className="underline-offset-2 hover:underline">制度改正タイムライン</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">容量市場の制度変遷と電気料金への影響</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">容量市場の制度変遷と電気料金への影響</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">2020年メインオークション開始から2024年本格稼働、2025年以降の価格動向まで、容量市場のタイムラインと法人料金への影響を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">容量市場導入の背景</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">容量市場は、将来の電力供給力を確保するために、発電能力（kW）自体を取引する市場です。火力発電所の休廃止が進むなかで供給力不足を防ぐ制度として、2020年に初回オークションが実施されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">約定された発電能力に対する支払いは容量拠出金として小売電気事業者に課され、最終的に法人・家庭の電気料金に転嫁されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要年度の動き</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2020年度：初回メインオークション実施、約定価格14,137円/kW。2021〜2023年度：段階的な運用調整期間。2024年度：本格受渡し開始で容量拠出金が電気料金に反映開始。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2024年度以降、高圧・特別高圧の電気料金に「容量拠出金相当額」として年間数百万〜数千万円のコストが上乗せされる法人も出ています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">今後の見通し</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2030年代に向けて火力発電所の老朽化・脱炭素化が進むなか、容量市場の約定価格は上昇傾向と予想されています。再エネ中心の電源構成への移行期間中は、容量拠出金の負担は継続するとみられます。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/regulation-timeline", label: "制度改正タイムラインの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
