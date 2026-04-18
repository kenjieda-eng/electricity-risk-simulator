import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "供給地点特定番号と契約変更時の扱い｜切替時の手続き論点";
const pageDescription =
  "供給地点特定番号の意味と、契約切替・引越時の手続きで注意すべきポイントを整理します。";
const pageUrl = "https://simulator.eic-jp.org/supply-point-identification-number";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金"],
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "供給地点特定番号と契約変更時の扱い" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">供給地点特定番号と契約変更時の扱い</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">供給地点特定番号と契約変更時の扱い｜切替時の手続き論点</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号の意味と、契約切替・引越時の手続きで注意すべきポイントを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給地点特定番号とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号（SPIN：Supply Point Identification Number）は、電力供給の物理的な地点を一意に識別する22桁の番号です。一般送配電事業者が付与し、建物・メーター単位で設定されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約切替時には、この番号が新旧事業者間の情報引継ぎのキーとなります。需要家が番号を把握していないと、切替手続きが遅延する原因になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">番号の確認方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社からの請求書・契約書、②新電力からの見積書、③一般送配電事業者のWeb照会、④電力会社カスタマーサポート、で確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">複数拠点を持つ企業では、拠点別の番号リストを管理することが、切替手続きの効率化につながります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切替時の手続きチェック</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①供給地点特定番号の照会・確認、②新電力との契約申込、③切替日の指定、④最終請求の確認、⑤移行後初回請求の検算、を流れで実施します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">引越し（拠点移転）時は、旧拠点の解約と新拠点の契約を並行実施。空白期間を避けるための「重複契約期間の設定」を事前に計画します。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
