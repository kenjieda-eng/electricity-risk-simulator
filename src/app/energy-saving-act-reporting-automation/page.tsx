import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "省エネ法定期報告の自動化｜システム活用による工数削減";
const pageDescription =
  "省エネ法の定期報告書作成を電力データ連携で自動化し、担当者の工数を削減する仕組みを整理します。";
const pageUrl = "https://simulator.eic-jp.org/energy-saving-act-reporting-automation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "省エネ法"],
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
          { name: "エネルギーマネジメント・DX", url: "https://simulator.eic-jp.org/articles/energy-dx" },
          { name: "省エネ法定期報告の自動化" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-dx" className="underline-offset-2 hover:underline">エネルギーマネジメント・DX</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">省エネ法定期報告の自動化</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">省エネ法定期報告の自動化｜システム活用による工数削減</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">省エネ法の定期報告書作成を電力データ連携で自動化し、担当者の工数を削減する仕組みを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ法定期報告とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ法（エネルギーの使用の合理化等に関する法律）では、エネルギー使用量（原油換算）が一定規模以上の特定事業者に、毎年の定期報告書・中長期計画書の提出を義務付けています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">報告書には、事業所別・設備別のエネルギー使用量、削減実績、今後の計画などを記載します。手作業で集計すると、担当者の工数は数週間〜1ヶ月規模になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自動化の主要アプローチ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力データのクラウド集約、②定型フォーマットへの自動マッピング、③集計ロジックの自動実行、の3段階で省エネ法報告を自動化できます。SaaS型エネマネサービスには、省エネ法報告テンプレートが標準搭載されているものもあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">完全自動化は難しい場合でも、半自動化（80%自動＋最終確認）で大幅な工数削減が可能です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入時のチェックポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①複数拠点のデータ統合可否、②単位変換（kWh→原油換算GJ）の自動化、③対象設備・業種フォーマットの網羅性、④申請様式（エネ庁フォーマット）への出力可否、を確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社の事業所が特定事業者・第二種エネルギー管理指定工場に該当するかを、エネルギー使用量から事前確認しておきます。</p>
          </section>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/energy-dx", label: "エネルギーマネジメント・DXの他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
