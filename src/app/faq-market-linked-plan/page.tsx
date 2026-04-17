import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "【FAQ】市場連動プランは怖い？｜向いている企業・避けるべき企業";
const pageDescription =
  "市場連動プランに関するよくある質問。価格変動の大きさ、向く企業・向かない企業の判断軸をFAQ形式で整理します。";
const pageUrl = "https://simulator.eic-jp.org/faq-market-linked-plan";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電気料金FAQ"],
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
          { name: "FAQ集（よくある質問）", url: "https://simulator.eic-jp.org/articles/faq" },
          { name: "【FAQ】市場連動プランは怖い？" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/faq" className="underline-offset-2 hover:underline">FAQ集（よくある質問）</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">【FAQ】市場連動プランは怖い？</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">【FAQ】市場連動プランは怖い？｜向いている企業・避けるべき企業</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">市場連動プランに関するよくある質問。価格変動の大きさ、向く企業・向かない企業の判断軸をFAQ形式で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 市場連動プランは本当に安いのか？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">平常時のJEPXスポット価格は概ね10〜15円/kWhで推移しますが、冬季の需給ひっ迫時には50円/kWh超の価格が出ることもあり、年間で平準化するとリスクに見合うメリットが出ないケースもあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2022〜2023年の危機的な価格上昇では、市場連動プランを選んでいた企業で年間電気代が2〜3倍になる事例が出ました。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 市場連動に向く企業は？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力使用パターンが夜間・週末中心、②需要調整が可能（生産計画の柔軟性）、③キャッシュフローに余裕があり短期の価格上昇を吸収できる、④電力コストの変動が経営インパクトに直結しない、の4条件を満たす企業が向きます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Q. 避けるべき企業は？</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">上記の逆条件、特に電力コストが経営に直接響く業種（冷蔵倉庫・データセンター・製造業の24時間稼働）では、価格上昇時の影響が大きすぎるため避ける判断が一般的です。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/faq", label: "FAQ集（よくある質問）の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
