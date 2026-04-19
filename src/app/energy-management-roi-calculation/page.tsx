import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "エネルギーマネジメント導入のROI試算｜投資回収年数の目安";
const pageDescription =
  "BEMS/FEMS/EMSの導入投資額と年間削減額から、投資回収年数（ROI）を試算する方法を解説します。";
const pageUrl = "https://simulator.eic-jp.org/energy-management-roi-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "BEMS", "エネルギーマネジメント"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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
          { name: "エネルギーマネジメント導入のROI試算" },
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
          <span className="text-slate-800">エネルギーマネジメント導入のROI試算</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">エネルギーマネジメント導入のROI試算｜投資回収年数の目安</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">BEMS/FEMS/EMSの導入投資額と年間削減額から、投資回収年数（ROI）を試算する方法を解説します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">エネマネ投資の主要コスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">BEMS導入の主要コストは、①計測機器（センサー・スマートメーター）設置費、②制御機器（空調・照明との連携装置）、③ソフトウェア（見える化・制御）、④導入工事・設定、⑤年間保守費、の5項目です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">オフィスビル1棟で数百万〜1,500万円、中規模工場で1,000万〜3,000万円、大規模工場で数千万〜1億円程度が目安です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">年間削減効果の見積り方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">削減効果は、①電力量削減（ベース消費量の5〜15%削減）、②契約電力引き下げ（5〜15%削減）、③需給調整市場参加による収益、の合計で試算します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間電気代1億円の工場でBEMS導入→5〜15%削減なら年500万〜1,500万円の削減。投資2,000万円なら1.5〜4年で回収の試算になります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ROIを最大化する運用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ROIは、①導入時のコミッショニング（初期チューニング）の品質、②運用担当者の育成、③定期的な効果検証、で大きく変わります。装置導入だけで終わると効果が出ず、運用改善と一体で進めることが重要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">補助金（省エネ補助金・GX関連補助金）で初期投資を抑える選択肢も活用します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ROI試算テンプレート</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【試算例：中規模工場（年間電気代1億円、契約電力1,000kW）】</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">初期投資：BEMS＋センサー＋制御機器＝2,000万円。補助金（省エネ補助金1/2）＝▲1,000万円。実質投資＝1,000万円。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間削減：電力量10%削減＝1,000万円／年。ピークカット10%で契約電力減＝240万円／年。合計：1,240万円／年。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">投資回収：1,000万円÷1,240万円＝約0.8年。5年累計削減額：5,200万円。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">実際の効果はチューニングと運用で変わるため、導入後1年間は検証期間として設けるのが標準です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">BEMS・FEMS導入補助金は、資源エネルギー庁の「省エネルギー投資促進支援事業費補助金」が代表的です。公募は毎年4月〜8月が中心。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">補助金活用後のエビデンス管理（削減実績報告）は、省エネ法定期報告と一体化させることで運用効率化できます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.enecho.meti.go.jp/category/saving_and_new/saving/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 省エネ法</a></li>
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
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
