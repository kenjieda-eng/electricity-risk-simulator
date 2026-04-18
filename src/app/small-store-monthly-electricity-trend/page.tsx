import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "小規模店舗の電気代月別推移の読み方｜季節変動と異常検知";
const pageDescription =
  "小規模店舗の電気代を月別・前年同月比で可視化し、異常値・改善余地を見つける方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/small-store-monthly-electricity-trend";

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
          { name: "中小企業・小規模事業者向け", url: "https://simulator.eic-jp.org/articles/sme-guide" },
          { name: "小規模店舗の電気代月別推移の読み方" },
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
          <span className="text-slate-800">小規模店舗の電気代月別推移の読み方</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">小規模店舗の電気代月別推移の読み方｜季節変動と異常検知</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">小規模店舗の電気代を月別・前年同月比で可視化し、異常値・改善余地を見つける方法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">月別電気代の基本パターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">小規模店舗の電気代は、夏（7〜9月）と冬（12〜2月）がピークで、春秋（4〜6月、10〜11月）が底になる二峰型が典型です。夏冬のピークは春秋の1.5〜2倍になるケースが多いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ピークの高さは、業態（物販・飲食・サービス）、空調方式、営業時間、立地（南向き・角地）で変わります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">異常検知のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①前年同月比+15%以上の増加→設備不調・契約条件変更・消費行動変化のいずれかを疑う。②夏冬以外のピーク→使用設備の新規追加・24時間稼働化の確認。③基本料金比率の急増→契約アンペア過大の疑い。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらのサインを月次で確認する仕組みを作ると、早期発見・早期対応につながります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">見える化ツール</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Excelで月別データを管理するのが最小限のアプローチ、Google Sheetsとスマートメーターデータ連携で半自動化、クラウド型エネマネサービスで完全自動化、の3段階があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業は初期はExcel運用、軌道に乗ったらSaaS型への移行、というステップが現実的です。</p>
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
