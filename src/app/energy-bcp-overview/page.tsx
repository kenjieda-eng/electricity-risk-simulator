import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "法人の電力BCP概論｜停電・需給ひっ迫に備えた事業継続";
const pageDescription =
  "電力BCPは災害・需給ひっ迫・新電力撤退に備えた事業継続設計です。必要電力量の算定から対策手段の選び方までを整理します。";
const pageUrl = "https://simulator.eic-jp.org/energy-bcp-overview";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力BCP"],
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
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "法人の電力BCP概論" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">法人の電力BCP概論</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電力BCP概論｜停電・需給ひっ迫に備えた事業継続</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力BCPは災害・需給ひっ迫・新電力撤退に備えた事業継続設計です。必要電力量の算定から対策手段の選び方までを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力BCPが重要になった背景</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力BCP（事業継続計画）は、従来は自然災害時の停電対応が主な論点でしたが、近年は需給ひっ迫・新電力撤退・サイバー攻撃による系統障害など、より広範なリスクを想定する必要があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022年3月の電力需給ひっ迫警報、新電力事業者の相次ぐ撤退・倒産、2025年以降の容量市場本格稼働による価格変動など、想定すべきリスクは増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">最低限確保すべき電力量の算定</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事業継続に必要な電力量の算定は、①完全停止時の待機電力、②最低限の業務継続に必要な電力、③通常の業務運営に必要な電力、の3段階で考えます。データセンター・医療機関・製造業では第2〜3段階の電力量が大きく、非常用電源の容量設計に影響します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">多くの企業では、②を12〜72時間維持できる非常用電源を整備するのが標準です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP対策の階層と優先順位</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第1層はUPS（瞬断対策、数分〜1時間）、第2層は非常用発電機（数時間〜数日）、第3層は複数回線・自家発電（長期）です。コストは段階が上がるほど指数的に増え、事業のリスク耐性に応じて選定します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-bcp", label: "電力BCP・災害対策の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
