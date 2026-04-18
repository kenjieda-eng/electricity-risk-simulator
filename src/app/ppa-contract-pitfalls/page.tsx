import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "コーポレートPPA契約の落とし穴｜10年以上の長期契約で失敗しないために";
const pageDescription =
  "PPA契約の10〜20年にわたる期間中に起こりやすい問題（需要変化・制度変更・発電量下振れ）と契約交渉での予防策を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ppa-contract-pitfalls";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "コーポレートPPA"],
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
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "コーポレートPPA契約の落とし穴" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/corporate-ppa" className="underline-offset-2 hover:underline">コーポレートPPA</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">コーポレートPPA契約の落とし穴</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">コーポレートPPA契約の落とし穴｜10年以上の長期契約で失敗しないために</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">PPA契約の10〜20年にわたる期間中に起こりやすい問題（需要変化・制度変更・発電量下振れ）と契約交渉での予防策を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">長期契約ゆえの需要変動リスク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PPA契約は10〜20年が主流ですが、その間に企業の事業内容が変わり電力需要が減少するリスクは無視できません。工場の統廃合、海外移転、事業売却など、契約時には予見できない環境変化が起こり得ます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約には需要減少時の対処条項（オフテイク保証、第三者譲渡、中途解約ペナルティ）を必ず織り込む必要があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">発電量の下振れ・変動への対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">太陽光PPAでは、日射量の経年劣化や天候不順で想定発電量を下回るケースがあります。契約で保証発電量を明記し、下回った場合の補償（代替調達・減額）を事前に決めておくことが重要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">風力PPAはさらに変動が大きく、需給管理手数料や短時間の変動対応コストが上乗せされるのが通常です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度変更・税制変更への備え</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">10〜20年の契約期間中に、託送料金、再エネ賦課金、容量拠出金、非化石証書制度などが改正される可能性は高いです。契約書には制度変更時の価格調整メカニズム（パス・スルー条項）を必ず入れます。</p>
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
