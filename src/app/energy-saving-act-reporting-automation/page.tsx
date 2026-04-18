import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
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
      <ReadingProgressBar />
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
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

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
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">工数削減効果の目安</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【手作業の場合】中堅製造業（拠点5・事業所20）で、年間報告業務工数：約40〜60人日。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【半自動化（エネマネSaaS導入）】同規模で、年間工数：約10〜20人日。▲70%削減。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【完全自動化（エネマネ＋RPA連携）】同規模で、年間工数：約5人日以下。▲90%削減。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">工数削減のほか、報告ミス削減・監査対応の迅速化というベネフィットもあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ法定期報告の様式・記入要領は資源エネルギー庁公式サイトで公開されています。2023年の改正で非化石エネルギーへの転換・電気需要最適化の報告項目が追加されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">環境省・経産省が共同で運営する「温室効果ガス排出量算定・報告・公表制度」と併用することで、ESG開示データも一体管理できます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 省エネ法</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/bems-fems-ems-overview", title: "BEMS/FEMS/EMSの違い", description: "目的と選定基準" },
              { href: "/ai-electricity-optimization", title: "AIによる電力最適化の実務", description: "需要予測と自動制御" },
              { href: "/smart-meter-data-utilization", title: "スマートメーターデータの業務活用", description: "30分値データの分析" },
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/corporate-ppa", title: "コーポレートPPA", description: "関連カテゴリも合わせて読む" },
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
