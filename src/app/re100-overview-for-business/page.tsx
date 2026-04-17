import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "RE100とは｜法人が参加する意義と実務フロー";
const pageDescription =
  "RE100は事業用電力を100%再エネで賄うことを宣言する国際イニシアチブです。加盟要件、参加コスト、実務上の進め方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/re100-overview-for-business";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "RE100"],
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
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "RE100とは" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">RE100とは</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">RE100とは｜法人が参加する意義と実務フロー</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">RE100は事業用電力を100%再エネで賄うことを宣言する国際イニシアチブです。加盟要件、参加コスト、実務上の進め方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">RE100の基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">RE100（Renewable Energy 100%）は、2014年にThe Climate Group（英）とCDPが共同で始めた国際イニシアチブで、事業に使用する電力を2050年までに100%再エネに転換することを宣言する企業の集まりです。参加企業は世界で400社超、日本企業は90社超が加盟（2026年時点）で、製造業から金融業まで幅広い業種が参加しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">加盟には年間電力消費量が100GWh以上（中小企業は要件緩和あり）、明確な目標年（遅くとも2050年）、年次報告の3条件が主要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">日本企業が再エネ100%を達成する方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本のRE100加盟企業の調達手段は、非化石証書付き電力メニュー、オフサイトPPA、オンサイト太陽光、J-クレジットの4つが代表的です。初期は非化石証書付きメニューが簡便ですが、長期では自家発電・PPAへの移行が主流です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">コーポレートPPAは電源を特定できる点と、価格ヘッジ効果がある点で注目されていますが、契約期間は10〜20年と長期化する傾向があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">参加のハードルとコスト試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">再エネ100%化による電力コストの上乗せは、選択する手段によりkWhあたり1〜3円程度の追加負担が生じるケースが多いです。年間100GWh規模なら年1〜3億円、1GWh規模でも年100〜300万円の追加コストになります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">取引先からのScope3情報開示要請、ESG投資評価、採用ブランディングといった定量化しにくい便益と比較して判断します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/decarbonization", label: "脱炭素・GX対応の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
