import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "コーポレートPPAとは｜3種類の契約形態と選び方";
const pageDescription =
  "コーポレートPPAは企業が発電事業者と直接交わす長期の再エネ電力調達契約です。オンサイト・オフサイト・バーチャルの違いと選定軸を整理します。";
const pageUrl = "https://simulator.eic-jp.org/corporate-ppa-overview";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "コーポレートPPA"],
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
          { name: "コーポレートPPAとは" },
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
          <span className="text-slate-800">コーポレートPPAとは</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">コーポレートPPAとは｜3種類の契約形態と選び方</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">コーポレートPPAは企業が発電事業者と直接交わす長期の再エネ電力調達契約です。オンサイト・オフサイト・バーチャルの違いと選定軸を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">コーポレートPPAの基本</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">コーポレートPPA（Power Purchase Agreement）は、企業が発電事業者と長期の電力購入契約を交わす調達方式です。一般的な電力小売契約（1〜3年）に比べ、10〜20年と長期が特徴で、その間の単価を固定できることで価格ヘッジ効果があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">再エネ100%調達の主要手段として欧米で広がり、日本でも2020年代に入って急速に普及しています。特に、発電事業者にとって長期収入が保証されることで新規再エネ発電所の建設が進む点で、脱炭素政策上も重要視されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オンサイト・オフサイト・バーチャルの違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オンサイトPPAは、企業の敷地内（屋根・駐車場など）に発電事業者が太陽光を設置し、発電した電力を企業が買い取る方式です。工事のコントロールは難しいものの、物理的に自社で使う電力の一部を直接置き換えられます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オフサイトPPAは、発電所と需要地が離れており、送電網（託送）を経由して電力を届ける方式です。発電規模を自由に設計でき、敷地制約を受けません。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">バーチャルPPAは、物理的な電力の流れとは切り離し、価格差のやり取りと環境価値（非化石証書）だけを契約する金融的なスキームです。欧米で主流で、日本でも制度整備が進んでいます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約設計のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約期間（10〜20年が主流）、固定価格かヘッジ付きか、環境価値の帰属、中途解約条件、供給保証範囲（発電量の下振れ対応）が主要論点です。特に20年契約では、途中で事業環境が変わる前提で柔軟性条項を入れておくことが重要です。</p>
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
