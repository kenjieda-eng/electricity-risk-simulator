import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "グループ会社統合時の電力契約最適化｜高圧一括契約化のメリット";
const pageDescription =
  "グループ会社統合時に、個別契約から一括契約に集約することでの電力コスト削減と運用効率化を整理します。";
const pageUrl = "https://simulator.eic-jp.org/group-electricity-consolidation";

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
          { name: "M&A・組織再編時の電力契約", url: "https://simulator.eic-jp.org/articles/ma-organizational-change" },
          { name: "グループ会社統合時の電力契約最適化" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ma-organizational-change" className="underline-offset-2 hover:underline">M&A・組織再編時の電力契約</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">グループ会社統合時の電力契約最適化</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">グループ会社統合時の電力契約最適化｜高圧一括契約化のメリット</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">グループ会社統合時に、個別契約から一括契約に集約することでの電力コスト削減と運用効率化を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">グループ個別契約のデメリット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グループ各社が個別に電力契約を持つ場合、①スケールメリットが活きない（単価が高止まり）、②契約管理の重複（各社で担当者・書類）、③交渉力分散、④データ統合困難、のデメリットがあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">子会社数が10社以上、拠点数が数十を超える規模では、一括化・集約化の効果が顕著に現れます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">一括契約化のメリット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①単価の引下げ（数%〜10%）：大口契約のスケールメリット。②契約管理工数の削減：共通フォーマット・集中管理で担当者を集約。③交渉力の向上：供給者にとって大口顧客となる。④データ活用の容易化：グループ全体のエネルギーマネジメント。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間電気代5億円以上の規模なら、一括化で年間数千万円規模の削減効果が期待できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施ステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①各社の契約現状（電力会社・単価・契約期間）を一覧化、②本社一括契約の設計、③電力会社との交渉、④契約切替（既存契約の解約・新規契約）、⑤グループ各社への請求・配賦ルール策定、の5ステップで実施。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">既存契約の違約金が発生する場合は、切替タイミングを調整することで違約金を回避するのが得策。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">集約効果の試算テンプレート</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【例：グループ会社10社、年間電気代合計5億円の場合】</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">単価削減：5〜10%の交渉成功で、年間2,500〜5,000万円の削減。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約管理工数：各社担当者の工数▲50%相当。本社1名での集中管理が実務的。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データ活用：Scope2排出量の一元把握で、グループ全体のサステナビリティ開示を効率化。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">追加投資（エネマネシステム・契約管理）：初期500〜2,000万円。1〜3年で回収。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グループ会社の電力調達最適化は、経産省「電力システム改革」資料および中小企業庁「グループ内取引適正化ガイドライン」などで関連情報が提供されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">税務面では、グループ内取引価格設定（移転価格）の観点からも、適正な価格での電力配賦が求められます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/ma-electricity-contract-succession", title: "M&A時の電力契約承継", description: "スキーム別の手続き" },
              { href: "/company-split-electricity-contract", title: "会社分割時の電力契約", description: "分割・新規契約設定" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/ma-organizational-change", title: "M&A・組織再編時の電力契約", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/ma-organizational-change", label: "M&A・組織再編時の電力契約の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
