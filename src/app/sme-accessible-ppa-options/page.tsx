import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "中小企業でも使えるPPAメニュー｜小規模向けアグリゲーションPPAの仕組み";
const pageDescription =
  "従来は大企業向けだったPPAを、中小企業が使えるようにしたアグリゲーション型や小規模向けメニューを整理します。";
const pageUrl = "https://simulator.eic-jp.org/sme-accessible-ppa-options";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "コーポレートPPA", "中小企業電気代"],
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
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "中小企業でも使えるPPAメニュー" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/corporate-ppa" className="underline-offset-2 hover:underline">コーポレートPPA</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中小企業でも使えるPPAメニュー</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">中小企業でも使えるPPAメニュー｜小規模向けアグリゲーションPPAの仕組み</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">従来は大企業向けだったPPAを、中小企業が使えるようにしたアグリゲーション型や小規模向けメニューを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中小企業がPPAに参加しにくかった理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従来のコーポレートPPAは、発電事業者が需要家1社と長期契約を結ぶ形が主流で、最低契約規模が数MW以上・年間数億円規模の調達が必要でした。中小企業にとっては契約ハードルが高く、参加は困難でした。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">また、20年の長期契約に耐える信用力（格付け）も要求されるため、中堅以下の企業には参入の壁がありました。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">アグリゲーション型PPAの仕組み</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">アグリゲーターが複数の中小需要家をまとめ、発電事業者と1つの大型PPA契約を結ぶスキームです。各需要家は自社の需要量（数百MWh/年〜）に応じて契約を切り出すことで、小規模でも参加可能になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本では2022年以降、自治体や地銀系のアグリゲーターが参入し、中小製造業・病院・学校などの参加が増えています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">小規模向けメニューの選び方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社の再エネ100%メニュー（トラッキング付き）、②地域エネルギー会社のPPAメニュー、③アグリゲーターのグループPPA、の3つが中小企業の選択肢です。①は手軽、②は地域貢献、③は価格ヘッジと再エネ由来が両立できる特徴があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約期間は5〜15年、契約規模は年間100MWh〜と、従来より参入しやすい条件のメニューが増えています。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/corporate-ppa", label: "コーポレートPPAの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
