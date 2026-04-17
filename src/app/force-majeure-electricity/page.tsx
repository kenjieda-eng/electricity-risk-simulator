import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "電力契約の不可抗力条項｜災害・需給ひっ迫時の責任範囲";
const pageDescription =
  "電力契約における不可抗力（Force Majeure）条項の典型例と、災害・需給ひっ迫時の責任分担の考え方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/force-majeure-electricity";

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
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "電力契約の不可抗力条項" },
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
          <span className="text-slate-800">電力契約の不可抗力条項</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力契約の不可抗力条項｜災害・需給ひっ迫時の責任範囲</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約における不可抗力（Force Majeure）条項の典型例と、災害・需給ひっ迫時の責任分担の考え方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">不可抗力条項の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">不可抗力条項は、自然災害・戦争・疫病・規制変更など、当事者の支配を超えた事象が発生した場合に、契約上の義務を一部または全部免除する規定です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力契約では、発電事業者側（供給責任）と需要家側（支払責任）のそれぞれにどの事象を免責とするかが定められます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">典型的な記載例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">地震・津波・大規模停電など大規模自然災害、戦争・内乱・テロ、法令・規制の大幅変更、電力系統の大規模事故などが典型です。パンデミック・労使紛争を含むかどうかは事業者により異なります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">確認・交渉のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①対象事象の範囲、②発動後の通知期限、③継続期間中の料金減額・停止、④事象終了後の復帰手続き、⑤長期継続時の解除権、の5点を重点確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022年の需給ひっ迫では、事業者側が不可抗力を援用してスポット相当額への単価改定を求めた事例もあり、この条項の実効性が改めて注目されました。</p>
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
