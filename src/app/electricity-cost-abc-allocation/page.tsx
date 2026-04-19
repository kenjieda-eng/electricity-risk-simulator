import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電気代の部門別・製品別配賦方法｜ABC原価計算の実務";
const pageDescription =
  "電気代を製造原価・部門別に配賦し、正確な製品原価を把握するためのABC（活動基準原価計算）の考え方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-cost-abc-allocation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "ABC原価計算"],
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
          { name: "電気代の経理・税務", url: "https://simulator.eic-jp.org/articles/accounting-tax" },
          { name: "電気代の部門別・製品別配賦方法" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/accounting-tax" className="underline-offset-2 hover:underline">電気代の経理・税務</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電気代の部門別・製品別配賦方法</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代の部門別・製品別配賦方法｜ABC原価計算の実務</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気代を製造原価・部門別に配賦し、正確な製品原価を把握するためのABC（活動基準原価計算）の考え方を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜ電気代の配賦が重要か</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">製造業・サービス業では、電気代は間接費として集計され、何らかのルールで製品・部門に配賦されます。配賦ルールが雑だと、製品別収益性が歪み、誤った価格決定・投資判断につながります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">特に電力多消費業種（冷凍倉庫・データセンター・半導体など）では、電気代配賦の精度が原価管理の品質を大きく左右します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">伝統的な配賦方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①売上高按分：最も簡便だが、電力消費量と売上は必ずしも比例せず歪みが大きい。②人員数按分：間接部門向けで使うが、製造業には不適。③設備時間按分：設備ごとの稼働時間で按分、精度はまずまず。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらは手軽だが、精度は限定的です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ABC原価計算の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ABC（Activity-Based Costing）は、活動（設備運転・空調・照明など）を基準に電気代を配賦する方法です。各活動の電力消費量を計測し、製品・部門が使う活動量に応じて配賦します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">精度は最も高いですが、計測機器の設置・データ集計コストが発生します。高コスト製品群・差別化が必要な業種ほどABCの効果が大きく現れます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ABC導入の実務ステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step1：主要活動（コストプール）の特定。例：生産ラインA・B、空調、照明、倉庫冷蔵。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step2：活動別の電力消費量計測。サブメーター設置、またはインバータ・機器別電力計の設置。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step3：活動ドライバ（配賦基準）の決定。例：ラインAは稼働時間、空調は面積×時間。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Step4：製品・部門別に活動使用量を集計し、電気代を按分。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">初期投資：メーター設置費用、BEMS／原価計算システムで数百万円〜。効果：製品別採算の精度向上、無駄のある製品の特定。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">原価計算基準（企業会計原則）は管理会計の基本ルールですが、ABCは公式ルールではなく実務の選択肢です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業庁「原価管理ガイド」や、日本管理会計学会の実務事例集が導入時の参考になります。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.mof.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">財務省</a></li>
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/electricity-cost-account-classification", title: "電気代の勘定科目", description: "部門配賦と月次処理" },
              { href: "/invoice-system-electricity", title: "インボイス制度と電気代", description: "仕入税額控除の扱い" },
              { href: "/battery-solar-depreciation", title: "蓄電池・太陽光の減価償却", description: "耐用年数と税制優遇" },
              { href: "/articles/sme-guide", title: "中小企業・小規模事業者向け", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/accounting-tax", label: "電気代の経理・税務の他の記事を読む" },
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
