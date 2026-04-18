import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "再エネ関連用語集｜FIT・FIP・非化石証書・RE100・J-クレジット";
const pageDescription =
  "再生可能エネルギー関連の主要用語を意味・計算・関連制度とともに整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "RE100", "非化石証書"],
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
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "再エネ関連用語集" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/glossary" className="underline-offset-2 hover:underline">用語集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">再エネ関連用語集</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ関連用語集｜FIT・FIP・非化石証書・RE100・J-クレジット</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">再生可能エネルギー関連の主要用語を意味・計算・関連制度とともに整理した用語集です。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度・調達手段の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">FIT（固定価格買取制度）：再エネ電力を固定価格で一定期間買い取る制度。2012年開始、kWhあたりの買取価格は電源種・規模で異なります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">FIP（Feed-in Premium）：市場価格に一定額を上乗せして買い取る制度。2022年開始。市場連動性があり、発電事業者の価格感応度を高める設計です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PPA（Power Purchase Agreement）：発電事業者と需要家の長期電力購入契約。オンサイト・オフサイト・バーチャルの3形態があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">証書・価値化の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">非化石証書：非化石電源由来の環境価値を切り離した証書。FIT非化石・非FIT非化石（再エネ指定あり/なし）の3種類。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">J-クレジット：温室効果ガス排出削減量・吸収量をクレジット化した制度。省エネ・再エネ・森林吸収などが対象。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グリーン電力証書：再エネで発電された電力の環境価値を証明する証書。民間制度で、需要家が自主的に購入します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">国際イニシアチブの用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100：事業用電力を100%再エネで賄うことを宣言する企業イニシアチブ。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT（Science Based Targets）：科学的根拠に基づく排出削減目標の認定制度。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDP：気候変動・森林・水に関する企業開示を評価する国際NGO。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/glossary", title: "用語集", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/glossary", label: "用語集の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
