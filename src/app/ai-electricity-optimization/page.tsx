import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "AIによる電力最適化の実務｜需要予測と自動制御の現在地";
const pageDescription =
  "AI・機械学習を使った電力需要予測、デマンドピーク制御、市場連動時の購入タイミング最適化など、最新の実務事例を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ai-electricity-optimization";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "AI最適化", "AI電力需要"],
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
          { name: "AIによる電力最適化の実務" },
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
          <span className="text-slate-800">AIによる電力最適化の実務</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">AIによる電力最適化の実務｜需要予測と自動制御の現在地</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">AI・機械学習を使った電力需要予測、デマンドピーク制御、市場連動時の購入タイミング最適化など、最新の実務事例を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">AI活用の典型的な3領域</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">AIが電力管理に使われる領域は、①需要予測、②設備制御の最適化、③市場連動プラン運用時の購入タイミング最適化の3つが代表的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需要予測は過去データ＋気象データ＋生産計画を入力に翌日・翌週の使用量を予測し、スポット市場調達・自家発電の稼働計画に使われます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入事例と効果</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">大手製造業では、AIによるデマンド制御で契約電力を5〜15%引き下げた事例、市場連動プランの運用でスポット価格の高い時間帯に自家発電を稼働させる運用で、年間数千万円規模の削減事例が報告されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方で、中小企業では学習データ不足により精度が出ないケースも多く、パッケージ化されたサービス（SaaS型）を選ぶほうが現実的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入の落とし穴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データ品質（欠損・誤差）、現場オペレーションとの整合、カスタマイズ費用の肥大化がよくある失敗パターンです。試験運用期間を設けて精度評価を行い、現場の運用負荷を増やさない設計が重要です。</p>
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
