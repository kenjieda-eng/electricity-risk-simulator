import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "スマートメーターデータの業務活用｜30分値データを使いこなす";
const pageDescription =
  "スマートメーターが取得する30分単位の電力使用データを、契約見直し・設備投資判断・BCPに活用する方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/smart-meter-data-utilization";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "スマートメーター", "電力BCP"],
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
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "スマートメーターデータの業務活用" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">スマートメーターデータの業務活用</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">スマートメーターデータの業務活用｜30分値データを使いこなす</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">スマートメーターが取得する30分単位の電力使用データを、契約見直し・設備投資判断・BCPに活用する方法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">スマートメーターとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">スマートメーターは、電力使用量を30分単位で自動計測・通信するメーターで、日本では2024年までに全契約への設置がほぼ完了しました。従来の月1回検針と異なり、リアルタイムに近い使用状況を把握できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データは電力会社のポータル（高圧・特別高圧向け）や、ガス・電気使用量見える化アプリ（低圧向け）で閲覧できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">30分値データで分かること</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">時間帯別の負荷パターン、ピーク発生時刻、週末・休日の使用パターン、季節変動の詳細が把握できます。これは契約見直し・プラン選定・省エネ投資判断の基礎データとなります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に市場連動プランを検討する場合、自社の使用パターンが高値時間帯と重なるかどうかを30分値データで事前に検証することが不可欠です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">活用パターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①ピーク分析による契約電力最適化、②時間帯別料金プランへの切替判断、③設備稼働の時間シフト（早朝・夜間移行）による料金低減、④BCPシナリオのデータ基盤、が代表的な用途です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-dx", label: "エネルギーマネジメント・DXの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
