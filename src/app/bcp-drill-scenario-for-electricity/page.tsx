import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "BCP訓練シナリオ（電力編）｜社内演習の進め方";
const pageDescription =
  "電力停止を想定したBCP訓練シナリオの設計と、演習実施の手順を整理します。";
const pageUrl = "https://simulator.eic-jp.org/bcp-drill-scenario-for-electricity";

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
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "BCP訓練シナリオ（電力編）" },
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
          <span className="text-slate-800">BCP訓練シナリオ（電力編）</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">BCP訓練シナリオ（電力編）｜社内演習の進め方</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力停止を想定したBCP訓練シナリオの設計と、演習実施の手順を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力BCP訓練の意義</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力BCPは、計画を作るだけでは機能せず、定期的な訓練（演習）で手順を浸透させることが重要です。特に非常用電源の操作、手動作業への切替、データのバックアップ手順などは、訓練で初めて課題が可視化されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年1回の全社訓練、四半期ごとの部門訓練、月次のチェックリスト確認、の3層で運用するのが標準的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">訓練シナリオの例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">シナリオ1：夕方のピーク時に1時間停電→非常用電源起動、業務継続範囲の確認、復旧手順の確認。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">シナリオ2：需給ひっ迫警報発令→節電レベル3実施、営業時間短縮、顧客への通知。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">シナリオ3：災害による長時間停電（24〜72時間）→全面BCP起動、従業員の安否確認、拠点間フェイルオーバー。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施時のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①停電通知から業務停止までのタイムラグ計測、②非常用電源の起動時間と維持時間、③データ保全の成否、④顧客・取引先への連絡手順、⑤復旧後の業務再開手順、を確認項目に含めます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">訓練後は振り返り（KPT：Keep/Problem/Try）を実施し、BCP計画を継続的に改善します。</p>
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
