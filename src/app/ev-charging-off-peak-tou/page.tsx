import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "EV充電の深夜電力活用とTOU料金｜時間帯別単価の最適化";
const pageDescription =
  "EV充電を時間帯別料金（TOU）の安い時間に集中させて電気代を削減する手法と、必要な設備を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ev-charging-off-peak-tou";

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
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "EV・充電インフラ", url: "https://simulator.eic-jp.org/articles/ev-charging" },
          { name: "EV充電の深夜電力活用とTOU料金" },
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
          <span className="text-slate-800">EV充電の深夜電力活用とTOU料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">EV充電の深夜電力活用とTOU料金｜時間帯別単価の最適化</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">EV充電を時間帯別料金（TOU）の安い時間に集中させて電気代を削減する手法と、必要な設備を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">TOU料金プランとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">TOU（Time of Use）料金は、時間帯により単価が変わる料金プランで、昼間ピーク・夜間オフピーク・中間時間の3段階が一般的です。夜間単価は昼間の30〜60%程度まで低下するケースが多いです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV充電は、深夜（オフピーク）に集中させることで、充電コストを大きく削減できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">スマート充電制御</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV充電器にスマート充電機能があれば、電力系統の需給に応じて自動で充電開始・停止を制御できます。OCPP（Open Charge Point Protocol）準拠の機器なら、メーカーを問わずクラウド制御可能です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">スマート充電を活用することで、深夜電力帯のフル活用、契約電力超過の回避、需給調整市場への参加による対価獲得、などが可能です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①TOU料金プランがエリア・電力会社にあるか、②充電器のスマート充電対応可否、③複数車両の充電スケジューリング、④充電量のデータ可視化、を確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">大規模なEVフリートを持つ物流業・運送業では、TOU＋スマート充電の組み合わせで年間数百万〜数千万円の節約事例もあります。</p>
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
