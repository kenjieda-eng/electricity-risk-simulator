import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "託送料金制度改革タイムライン｜レベニューキャップ導入の影響";
const pageDescription =
  "託送料金制度のレベニューキャップへの移行と、法人電気料金への影響を時系列で整理します。";
const pageUrl = "https://simulator.eic-jp.org/wheeling-charge-revenue-cap-timeline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "託送料金", "レベニューキャップ"],
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
          { name: "制度改正タイムライン", url: "https://simulator.eic-jp.org/articles/regulation-timeline" },
          { name: "託送料金制度改革タイムライン" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/regulation-timeline" className="underline-offset-2 hover:underline">制度改正タイムライン</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">託送料金制度改革タイムライン</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">託送料金制度改革タイムライン｜レベニューキャップ導入の影響</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">託送料金制度のレベニューキャップへの移行と、法人電気料金への影響を時系列で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">レベニューキャップとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベニューキャップ（総収入上限制）は、一般送配電事業者の総収入に上限を設定し、効率化インセンティブを与える規制手法です。従来の総括原価方式から転換する形で、2023年度から本格導入されました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">目的は、送配電事業者の効率化促進と、託送料金の適正化です。設備投資も総収入枠内で行うため、設備投資判断の変化が料金に反映されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度移行のタイムライン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2016年：総括原価方式のまま託送料金規制継続。2020年：レベニューキャップ導入方針決定。2023年4月：第1規制期間（5年間）開始、レベニューキャップ本格運用。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第1規制期間終了後は、効率化達成度・投資実績を評価し、第2規制期間の上限が再設定されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人電気料金への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベニューキャップ導入により、短期的には送配電事業者の設備投資・人件費の抑制が期待される一方、長期的には設備更新・系統強化の費用が織り込まれるため、託送料金の大幅な低下は期待しにくい構造です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人電気料金では、託送料金は全体の約30〜40%を占める重要項目。今後5〜10年の料金予測には、レベニューキャップ期間ごとの改定を織り込む必要があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">第1規制期間（2023-2027）の論点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【効率化目標】各一般送配電事業者に数値目標が設定され、達成度により収益上限が変動。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【投資計画】再エネ連携強化・系統増強・BCP対策のための投資が織り込み。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【レビュー】2026年度に中間レビューが実施される予定。規制期間中の制度見直しの可能性も。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">第2規制期間（2028-2032）に向けた議論も、2027年度には開始される見込みです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベニューキャップ制度の詳細は、経産省「電力・ガス取引監視等委員会」の公表資料で確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各一般送配電事業者の託送料金改定情報は、各社公式サイトおよび経産省公示で発表されます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/electricity-liberalization-timeline", title: "電力自由化タイムライン", description: "法人電気料金への影響" },
              { href: "/capacity-market-timeline", title: "容量市場タイムライン", description: "2020年〜本格稼働" },
              { href: "/renewable-surcharge-revision-history", title: "再エネ賦課金改正履歴", description: "FIT開始から現在" },
              { href: "/articles/decarbonization", title: "脱炭素・GX対応", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/glossary", title: "用語集", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/regulation-timeline", label: "制度改正タイムラインの他の記事を読む" },
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
