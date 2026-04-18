import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "PPA価格の相場と交渉ポイント｜2026年時点の円/kWh水準";
const pageDescription =
  "コーポレートPPAの単価相場、固定・市場連動の組み合わせ方、交渉で押さえるべき論点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/ppa-price-benchmark-2026";

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
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "PPA価格の相場と交渉ポイント" },
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
          <span className="text-slate-800">PPA価格の相場と交渉ポイント</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">PPA価格の相場と交渉ポイント｜2026年時点の円/kWh水準</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">コーポレートPPAの単価相場、固定・市場連動の組み合わせ方、交渉で押さえるべき論点を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PPA単価の相場</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2026年時点の日本におけるコーポレートPPA単価は、オンサイト太陽光で12〜18円/kWh、オフサイト太陽光で14〜22円/kWh、バーチャルPPAで10〜16円/kWh程度が一般的です（環境価値込み）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これは通常の小売電気料金（法人高圧で20〜30円/kWh）より低いケースもあり、価格ヘッジと脱炭素の両立手段として注目されています。ただし立地・規模・発電事業者により幅があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">価格構成と交渉余地</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">PPA単価は、①発電コスト（設備・O&M・金利）、②利益、③託送料金（オフサイト）、④需給管理手数料、⑤環境価値、で構成されます。交渉余地が大きいのは、契約期間・固定価格の期間・支払い条件です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約期間を20年→15年に短縮すると単価は1〜2円/kWh上昇する代わりに、需要変動リスクが減少します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約形態の選び方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①完全固定価格：20年間一定、シンプルだが市場下落時に割高。②市場連動＋ヘッジ：市場価格連動をベースに上下限を設定、変動ある程度受容する企業向け。③バーチャル（価格差精算）：物理調達と分離、会計処理が複雑だが柔軟性最大。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社のリスク許容度・会計方針・調達規模で選定します。</p>
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
