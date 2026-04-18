import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "中国・東南アジア拠点の電力事情と再エネ調達｜現地PPA・証書制度";
const pageDescription =
  "中国・東南アジア主要国の電力事情と、現地拠点での再エネ調達手段を整理します。";
const pageUrl = "https://simulator.eic-jp.org/china-southeast-asia-electricity-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "コーポレートPPA", "中国電力"],
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
          { name: "海外拠点・グローバルエネルギー", url: "https://simulator.eic-jp.org/articles/global-energy" },
          { name: "中国・東南アジア拠点の電力事情と再エネ調達" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/global-energy" className="underline-offset-2 hover:underline">海外拠点・グローバルエネルギー</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中国・東南アジア拠点の電力事情と再エネ調達</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中国・東南アジア拠点の電力事情と再エネ調達｜現地PPA・証書制度</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">中国・東南アジア主要国の電力事情と、現地拠点での再エネ調達手段を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中国の電力事情と再エネ調達</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中国は世界最大の電力消費国で、2030年カーボンピーク・2060年カーボンニュートラル目標を宣言しています。電力市場は部分自由化の途上で、需要家が電力会社を選べる範囲は省により異なります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">再エネ調達手段は、①Green Energy Certificates（GEC）、②Corporate PPA（一部省で実施可能）、③Green Electricity Trading（緑電取引）、④自家発電（太陽光）、が主流です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">東南アジア主要国の状況</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">タイ・ベトナム・マレーシア・インドネシアなどでは、制度整備の進展度が異なります。タイは比較的自由化が進み、需要家選択肢あり。ベトナムは国営電力（EVN）独占が強い。マレーシアはCorporate PPA制度あり。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">現地工場・オフィスで再エネを調達する場合、①現地証書（各国ごと）の購入、②オンサイト太陽光、③現地PPAの順で検討するのが一般的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">グローバル対応の実務</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グローバル企業がRE100を達成する場合、各国で利用できる制度を組み合わせることが必要です。特に中国・東南アジアは制度が変わりやすく、現地パートナー・コンサルとの連携が不可欠です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グローバル本社のScope2算定では、各国の証書・PPA由来のクレジットを正しく集約・トラッキングする仕組みが重要になります。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/global-energy", title: "海外拠点・グローバルエネルギー", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/global-energy", label: "海外拠点・グローバルエネルギーの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
