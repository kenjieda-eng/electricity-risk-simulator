import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "需給調整市場の制度変遷｜2021年〜2024年の段階的開設";
const pageDescription =
  "需給調整市場の開設タイムラインと、法人電気料金への波及を時系列で整理します。";
const pageUrl = "https://simulator.eic-jp.org/supply-demand-adjustment-market-timeline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "需給調整市場"],
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
    images: [{ url: "/api/og/regulation-timeline", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/regulation-timeline"],
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
          { name: "需給調整市場の制度変遷" },
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
          <span className="text-slate-800">需給調整市場の制度変遷</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">需給調整市場の制度変遷｜2021年〜2024年の段階的開設</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">需給調整市場の開設タイムラインと、法人電気料金への波及を時系列で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">需給調整市場の位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需給調整市場は、一般送配電事業者が電力系統の需給バランスを維持するために必要な「調整力」を、全国大で取引する市場です。2021年から段階的に開設され、従来は電力会社エリア単位で行っていた調整力調達を全国最適化する仕組みです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">市場には発電事業者、蓄電池事業者、DRアグリゲーターなど多様な事業者が参加し、需要家もDRアグリゲーターを通じて間接参加が可能です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">段階的開設のタイムライン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2021年4月：三次調整力②（応動時間45分）開設。2022年4月：三次調整力①（応動時間15分）開設。2023年4月：二次調整力②（応動時間5分）開設。2024年4月：一次調整力・二次調整力①の本格稼働。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">応動時間が短くなるほど、需給ひっ迫時の価格が急騰するリスクがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人電気料金への波及</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需給調整市場で調達された調整力のコストは、一般送配電事業者の託送料金に反映されます。需給ひっ迫時の調整力価格高騰が、翌年度の託送料金改定に波及する経路です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">DR参加可能な法人は、需給調整市場への間接参加で対価を得る収益機会も得られます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">調整力の種類と応動時間（比較表）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【一次調整力】応動時間10秒以内。周波数維持が目的。主に発電所の自動制御で対応。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【二次調整力①】応動時間5分以内。エリア間周波数調整。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【二次調整力②】応動時間5分以内。需給バランス調整。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【三次調整力①】応動時間15分以内。予測誤差・発電所トラブル対応。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【三次調整力②】応動時間45分以内。需給調整の最終手段。蓄電池・DRの主戦場。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">応動時間が短いほど要求される技術水準が高く、価格も高くなります。DR参加では三次調整力②から入門するのが一般的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需給調整市場の制度詳細は、電力広域的運営推進機関（OCCTO）公式サイトで公開されています。年次の運用報告書で市場規模・価格推移も確認可能です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">DR参加の実務は、資源エネルギー庁「ディマンドリスポンス関連情報」および主要アグリゲーター各社の資料で参照できます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
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
