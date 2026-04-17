import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "中小企業の電気料金の基礎｜低圧契約を理解する";
const pageDescription =
  "中小企業の電気料金はほぼ低圧契約。高圧との違い、料金体系、見直しの余地を分かりやすく整理します。";
const pageUrl = "https://simulator.eic-jp.org/sme-electricity-basics";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "中小企業電気代", "低圧契約"],
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
          { name: "中小企業の電気料金の基礎" },
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
          <span className="text-slate-800">中小企業の電気料金の基礎</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中小企業の電気料金の基礎｜低圧契約を理解する</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">中小企業の電気料金はほぼ低圧契約。高圧との違い、料金体系、見直しの余地を分かりやすく整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧と高圧の違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約電力50kW未満は低圧、50kW以上は高圧、2,000kW以上は特別高圧と分類されます。中小企業の多くは低圧（低圧電力・低圧電灯）に該当し、電柱から直接電力を引き込む形が一般的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">高圧と違い自前のキュービクル設備が不要で、保安費用も発生しません。一方、電力量単価は高圧より高めで、削減の余地は限定的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">低圧プランの種類</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">低圧電力（動力）は業務用冷蔵庫・エアコン・業務用機器向け、低圧電灯は照明・コンセント向けです。両者は契約単位が異なり、プランも別々に選べます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従量電灯B/C、動力プラン、時間帯別料金、市場連動プランなど、地域と電力会社によって選択肢があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">見直しの着眼点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社の切り替え（新電力比較）、②プランの切り替え（時間帯別・市場連動）、③契約アンペアの見直し、④設備の省エネ化、の順に検討します。切り替えは違約金・手数料が少なく、即効性のある打ち手です。</p>
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
