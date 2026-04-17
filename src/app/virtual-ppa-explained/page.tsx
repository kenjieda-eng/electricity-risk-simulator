import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "バーチャルPPAとは｜仕組みと日本での実施可能性";
const pageDescription =
  "バーチャルPPAは物理的な電力ではなく、価格差と環境価値のみをやり取りする金融スキームです。欧米の普及状況と日本での実施条件を整理します。";
const pageUrl = "https://simulator.eic-jp.org/virtual-ppa-explained";

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
          { name: "バーチャルPPAとは" },
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
          <span className="text-slate-800">バーチャルPPAとは</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">バーチャルPPAとは｜仕組みと日本での実施可能性</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">バーチャルPPAは物理的な電力ではなく、価格差と環境価値のみをやり取りする金融スキームです。欧米の普及状況と日本での実施条件を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">バーチャルPPAの仕組み</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">バーチャルPPA（VPPA）では、企業は発電事業者と契約単価を固定する契約を結びますが、物理的な電力の流れは別に、発電事業者は生み出した電力を市場で売却し、企業は通常通り小売電力会社から電力を買います。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約で固定した単価と市場価格の差額は企業と発電事業者の間で精算され、環境価値（非化石証書やトラッキング情報）は企業に帰属します。結果として、市場価格が下がったときは企業が追加支払い、上がったときは発電事業者から受け取る構造になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">メリットとリスク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">物理的な電力調達ルートを変える必要がなく、現行の電力契約を維持したまま再エネ証書を確保できるのが最大のメリットです。複数拠点を持つ企業でも、拠点ごとに調達を組み直す必要がありません。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方で、市場価格が固定単価を下回り続ける局面では毎月の精算で支払い超過が続くリスクがあります。会計上はデリバティブとして評価されるケースが多く、減損や期末評価の検討も必要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">日本での導入状況</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">日本では2021年以降、非化石証書の直接取引制度やバーチャルPPA制度の整備が進み、実際の契約事例も増えています。制度運用は欧米に比べてまだ発展途上で、契約形態ごとに税務・会計処理を個別確認する必要があります。</p>
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
