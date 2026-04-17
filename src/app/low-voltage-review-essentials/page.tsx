import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "低圧契約の見直し要点｜小規模事業者向けチェックリスト";
const pageDescription =
  "低圧契約の見直しで確認すべき項目を、料金プラン・契約アンペア・電力使用実態から整理したチェックリストです。";
const pageUrl = "https://simulator.eic-jp.org/low-voltage-review-essentials";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "低圧契約"],
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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "低圧契約の見直し要点" },
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
          <span className="text-slate-800">低圧契約の見直し要点</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">低圧契約の見直し要点｜小規模事業者向けチェックリスト</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">低圧契約の見直しで確認すべき項目を、料金プラン・契約アンペア・電力使用実態から整理したチェックリストです。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">見直し前の現状把握</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">まず過去12ヶ月の電気使用量・電気料金を請求書から集計します。月別の使用量変動、ピーク月の実数、年間合計が見直し判断の基礎データとなります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">使用量が季節で大きく変わる業種（飲食・冷蔵倉庫・スキー場など）は、季節別料金や市場連動プランとの相性が業種ごとに異なります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約アンペア・契約電力の適正化</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従量電灯Bのアンペア契約、または低圧電力の契約電力（自動計算）が実際のピーク使用量に対して過剰ならば、基本料金を下げられる可能性があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ブレーカーが頻繁に落ちない範囲で、最小限の契約に見直すのが基本です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">プラン・電力会社の比較ポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">基本料金・従量料金単価・燃料費調整額上限・再エネ賦課金・その他手数料を含めた合計単価で比較します。単価が安くても違約金や契約期間縛りがあるプランも多く、総合判断が必要です。</p>
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
