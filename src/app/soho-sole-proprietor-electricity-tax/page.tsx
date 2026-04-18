import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "個人事業主・SOHOの電気代経費計上｜家事按分と税務処理";
const pageDescription =
  "自宅兼事務所の個人事業主が、電気代を事業経費として計上する際の家事按分の考え方と根拠資料を整理します。";
const pageUrl = "https://simulator.eic-jp.org/soho-sole-proprietor-electricity-tax";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "個人事業主経費"],
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "個人事業主・SOHOの電気代経費計上" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/sme-guide" className="underline-offset-2 hover:underline">中小企業・小規模事業者向け</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">個人事業主・SOHOの電気代経費計上</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">個人事業主・SOHOの電気代経費計上｜家事按分と税務処理</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">自宅兼事務所の個人事業主が、電気代を事業経費として計上する際の家事按分の考え方と根拠資料を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代の家事按分の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自宅兼事務所で事業を行う個人事業主は、電気代を「事業利用分」と「私用分」に按分し、事業分のみを必要経費に計上できます。国税庁の指針では、合理的な基準で区分すれば家事按分が認められます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">按分率の根拠として使える基準は、①使用時間（事業時間÷24時間）、②専有面積（事業専用スペース÷全床面積）、③コンセント数（事業機器÷全機器）などです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">典型的な按分率</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">フルタイムで自宅を事務所として使う場合、按分率30〜50%が実務的な目安です。パートタイムなら10〜30%、副業レベルなら5〜20%程度が妥当な範囲です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">按分率が高すぎると税務調査で指摘される可能性があります。根拠書類（使用時間記録・間取り図・機器リスト）を保管しておくことが重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人化後の変化</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事業を法人化した場合、電気代の扱いは、①事業所を分離（法人として独立契約）、②自宅の一部を法人に賃貸、③役員が個人として支払い法人に請求、などのパターンがあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人化前後で税負担・社保・手続きコストが大きく変わるため、個人事業主→法人化の判断は税理士と相談することを推奨します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/sme-guide", title: "中小企業・小規模事業者向け", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/sme-guide", label: "中小企業・小規模事業者向けの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
