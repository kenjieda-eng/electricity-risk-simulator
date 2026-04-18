import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "CDP質問書の電力関連回答の書き方｜Scope2と再エネ調達の開示項目";
const pageDescription =
  "CDP質問書で問われる電力関連項目（Scope2排出量・再エネ調達・追加性・トラッキング）の回答設計と推奨エビデンスを整理します。";
const pageUrl = "https://simulator.eic-jp.org/cdp-questionnaire-electricity-response";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "CDP開示", "再エネ電力", "Scope2"],
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
          { name: "脱炭素・GX対応", url: "https://simulator.eic-jp.org/articles/decarbonization" },
          { name: "CDP質問書の電力関連回答の書き方" },
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
          <span className="text-slate-800">CDP質問書の電力関連回答の書き方</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">CDP質問書の電力関連回答の書き方｜Scope2と再エネ調達の開示項目</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">CDP質問書で問われる電力関連項目（Scope2排出量・再エネ調達・追加性・トラッキング）の回答設計と推奨エビデンスを整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">CDP質問書とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDP（旧：Carbon Disclosure Project）は、気候変動・森林・水に関する企業開示を評価する国際NGOです。CDP気候変動質問書は、グローバル機関投資家のエンゲージメントツールとして位置づけられ、日本企業も2,000社以上が回答しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2024年以降の質問書ではScope2排出量の算定方法、再エネ調達手段、追加性（Additionality）の確認が強化され、数字の提出だけでなく調達戦略の開示が重視されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力関連の主要な質問項目</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">主要項目は、①Scope2排出量（ロケーション基準・マーケット基準の両方）、②再エネ電力の調達量と手段（PPA・自家発電・証書）、③再エネ100%達成目標年、④証書のトラッキング情報、⑤追加性評価の5つです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">マーケット基準では、トラッキング付き非化石証書、J-クレジット、グリーン電力証書、PPA由来の再エネ電力が反映できます。各々の購入根拠を開示することで、評価スコアが向上します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">回答設計の実務ポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDPスコア（A〜D-）を上げるには、①Scope2算定の透明性、②数値目標と進捗、③第三者保証、④マネジメント層の関与、が鍵です。初回回答はC〜D評価が多く、数年かけてB・Aを目指す企業が一般的です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">回答根拠となる計算シート、契約書、証書データは内部で整理・保管し、翌年度の回答効率化と第三者検証に備えます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">CDP回答準備のタイムライン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDP質問書は毎年4月に公開、7月末が回答期限です。準備期間は通常3〜6ヶ月、初回回答の場合は1年以上前から着手するケースもあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">推奨スケジュール：①前年11月〜12月：前年回答のレビューと改善項目抽出、②1月〜3月：データ収集・算定・社内承認、③4月〜6月：質問書への回答入力、④7月：最終確認・提出。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">効率化のポイントは、環境データ管理システム（Enablon・Salesforce Sustainability Cloud等）の導入と、各拠点との連携ルール整備です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">CDP質問書はGHGプロトコルScope2ガイダンスに準拠しており、同プロトコルで定められたロケーション基準・マーケット基準の算定ルールを理解しておくことが前提となります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT認定企業は、CDP質問書での優遇スコアが与えられるため、両方への対応を統合的に進めるのが効率的です。TCFD推奨情報の開示との連携も重要です。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.cdp.net/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CDP (Disclosure Insight Action)</a></li>
            <li><a href="https://ghgprotocol.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GHGプロトコル</a></li>
            <li><a href="https://ghg-santeikohyo.env.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">環境省 温室効果ガス算定報告公表制度</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/corporate-decarbonization-overview", title: "法人の脱炭素対応の全体像", description: "電力調達と情報開示の4段階を整理" },
              { href: "/re100-overview-for-business", title: "RE100とは", description: "参加要件と実務フローを解説" },
              { href: "/scope2-electricity-accounting", title: "Scope2算定と報告ガイド", description: "マーケット基準とロケーション基準" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
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
