import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "V2H・V2B（車両から建物への給電）の仕組み｜BCP兼用のEV活用";
const pageDescription =
  "電気自動車（EV）を蓄電池として活用するV2H・V2Bの仕組み、法人でのBCP活用と経済性を整理します。";
const pageUrl = "https://simulator.eic-jp.org/v2h-v2b-explained";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力BCP", "産業用蓄電池", "EV充電", "V2H"],
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
          { name: "V2H・V2B（車両から建物への給電）の仕組み" },
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
          <span className="text-slate-800">V2H・V2B（車両から建物への給電）の仕組み</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">V2H・V2B（車両から建物への給電）の仕組み｜BCP兼用のEV活用</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気自動車（EV）を蓄電池として活用するV2H・V2Bの仕組み、法人でのBCP活用と経済性を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">V2H・V2Bとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">V2H（Vehicle to Home）は、EVから家庭へ電力を供給する仕組み。V2B（Vehicle to Building）は、EVから業務用建物への給電です。EV本体の大容量バッテリー（40〜100kWh）を、非常時・ピーク時の蓄電池として使います。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">専用のV2H機器（双方向充放電器）が必要で、機器費用は50〜100万円、工事費込みで総額100〜200万円が目安です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人BCPでの活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人がEV社用車を複数台保有する場合、V2H/V2B機器と組み合わせることで、停電時に車両が非常用電源として機能します。EV5台（各50kWh）で250kWhの容量、家庭・小規模事業所なら数日間の電力供給が可能です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">専用の非常用発電機に比べ、①平常時は車両として稼働、②長時間停電でもEV移動充電可能、③環境負荷が低い、などのメリットがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">経済性とROI</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">V2H単独ではROIが難しいですが、①平常時のピークカット、②夜間充電→昼間放電（TOU活用）、③停電時のBCP、の3つを兼用することで投資回収が改善します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">EV導入コスト＋V2H機器＋補助金を考慮すると、投資回収期間は5〜10年程度。補助金を最大限活用することが経済性の鍵です。</p>
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
