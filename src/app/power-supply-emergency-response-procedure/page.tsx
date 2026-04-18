import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "需給ひっ迫警報時の法人の対応手順｜節電要請レベル別アクション";
const pageDescription =
  "電力需給ひっ迫注意報・警報の発令時に、法人が取るべき段階的な節電アクションを整理します。";
const pageUrl = "https://simulator.eic-jp.org/power-supply-emergency-response-procedure";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "需給ひっ迫"],
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
          { name: "需給ひっ迫警報時の法人の対応手順" },
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
          <span className="text-slate-800">需給ひっ迫警報時の法人の対応手順</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">需給ひっ迫警報時の法人の対応手順｜節電要請レベル別アクション</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力需給ひっ迫注意報・警報の発令時に、法人が取るべき段階的な節電アクションを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">需給ひっ迫警報・注意報とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力需給ひっ迫注意報・警報は、電力需給が逼迫して大規模停電のおそれがあるときに、経産省から発令される注意喚起です。注意報は予備率5%以下、警報は予備率3%以下が発令目安です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022年3月に初めて東京エリアで警報が発令されて以来、冬季・夏季のピーク期に注意報が発令される事例が増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">レベル別の節電アクション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベル1（注意報前段）：空調設定緩和（冬20℃→18℃、夏28℃→30℃）、照明の一部消灯、事務機器のスリープ活用。企業負担小、削減効果3〜5%。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベル2（注意報発令）：非必須設備の停止、始業時間の前倒し、在宅勤務の拡大、エレベーター一部停止。企業負担中、削減効果5〜10%。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベル3（警報発令）：生産ラインの一部停止、営業時間短縮、非常用電源の起動準備。企業負担大、削減効果10%以上。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">事前準備のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">事前に節電レベル別のアクションプランを策定し、経営層・現場・設備管理者で役割分担を明確化しておきます。通知経路（メール・社内放送・掲示）と連絡体制を平常時に整備することが、迅速な対応につながります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需要家側DRプログラムに参加していれば、節電実施により電力会社から対価を受け取ることもできます。</p>
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
