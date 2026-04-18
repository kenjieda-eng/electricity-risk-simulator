import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "料金制度関連用語集｜燃料費調整額・再エネ賦課金・託送料金・容量拠出金";
const pageDescription =
  "法人電気料金の請求書に登場する制度用語を、計算式と推移データと合わせて整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/rate-structure-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "再エネ電力", "託送料金"],
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
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "料金制度関連用語集" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/glossary" className="underline-offset-2 hover:underline">用語集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">料金制度関連用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">料金制度関連用語集｜燃料費調整額・再エネ賦課金・託送料金・容量拠出金</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">法人電気料金の請求書に登場する制度用語を、計算式と推移データと合わせて整理した用語集です。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金構成要素の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">基本料金：契約電力に応じた固定料金。使用量に関わらず発生。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力量料金：使用電力量（kWh）に応じた従量料金。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">燃料費調整額：燃料価格の変動を反映する調整額。kWhあたりで加減算されます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度関連の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">再エネ賦課金：再エネ導入促進のためkWhあたり加算される賦課金。経産省が年度ごとに決定。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">託送料金：一般送配電事業者が送電網を使う対価として受け取る料金。小売料金に内包されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">容量拠出金：将来の供給力確保のため、小売電気事業者が負担する料金。2024年度から本格稼働。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金プランの用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">従量電灯：低圧需要家向けの定番プラン。3段階料金。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">低圧電力：動力機器向けのプラン。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">市場連動プラン：JEPX市場価格に応じて料金が変動するプラン。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">計算・調整の用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">市場価格調整額：JEPXスポット価格の変動を反映する調整額（市場連動プラン）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電源調達調整費：市場価格変動を反映するために一部事業者が設ける調整費。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">レベニューキャップ：一般送配電事業者の総収入に上限を設ける規制。2023年導入。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">力率割引：力率の良し悪しで基本料金が変動する制度。通常90%を基準に±1%ごとに0.85%増減。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最大需要電力（デマンド）：30分単位の需要ピーク。契約電力の決定基準。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各種料金制度の詳細は、資源エネルギー庁「電気料金のしくみ」ポータル、および電力広域的運営推進機関（OCCTO）の公表資料で確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最新の賦課金・調整額推移は、経産省・電力会社の公式サイトで月次・年次で公開されています。</p>
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
              { href: "/electricity-contract-glossary", title: "契約関連用語集", description: "契約電力・基本料金・デマンド" },
              { href: "/electricity-market-glossary", title: "市場関連用語集", description: "JEPX・スポット・先物" },
              { href: "/electricity-facility-glossary", title: "設備関連用語集", description: "高圧・低圧・キュービクル" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/glossary", title: "用語集", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/glossary", label: "用語集の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
