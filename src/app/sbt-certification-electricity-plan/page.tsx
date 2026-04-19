import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "SBT（Science Based Targets）認定と電力調達計画｜削減目標と再エネ移行ロードマップ";
const pageDescription =
  "SBT認定の要件と、電力調達に関わる目標設定・ロードマップ策定の実務を整理します。";
const pageUrl = "https://simulator.eic-jp.org/sbt-certification-electricity-plan";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "SBT認定", "再エネ電力"],
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
    images: [{ url: "/api/og/decarbonization", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/decarbonization"],
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
          { name: "SBT（Science Based Targets）認定と電力調達計画" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/decarbonization" className="underline-offset-2 hover:underline">脱炭素・GX対応</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">SBT（Science Based Targets）認定と電力調達計画</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">SBT（Science Based Targets）認定と電力調達計画｜削減目標と再エネ移行ロードマップ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">SBT認定の要件と、電力調達に関わる目標設定・ロードマップ策定の実務を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">SBTとは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT（Science Based Targets initiative）は、パリ協定の1.5℃目標と整合する温室効果ガス削減目標を認定する国際イニシアチブで、CDP・WWF・UNGC・WRIの4団体が運営しています。2024年までに世界5,000社以上、日本企業は600社超が認定を取得しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">認定には、Scope1・Scope2・Scope3の排出削減目標を設定し、審査を経る必要があります。2034年以降は全企業に対し1.5℃目標整合が義務化される見込みです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力調達に関わる目標設定</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Scope2の削減は電力調達に直結します。主要な打ち手は、①省エネによる絶対排出量削減、②再エネ電力への切替、の2つです。再エネ100%を目指すなら、5〜15年でのロードマップを描きます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">短期（3年）は非化石証書付きメニューで初期達成、中期（5〜10年）はPPA契約で価格安定化、長期（10年以上）は自家発電比率を高めるのが典型的なパターンです。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">認定取得のコストとベネフィット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT申請費は規模により数百万円、認定取得後の進捗管理・開示コストも毎年発生します。一方で、取引先からのサステナビリティ評価、ESG投資流入、採用ブランディングなど、経営的ベネフィットは定量化が難しいものの大きいと言われます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業向けに簡易なSBT（SME Route）も用意されており、大企業に比べて申請要件が緩和されています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">SBT達成ロードマップの設計パターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">典型的なロードマップ：年度0（基準年）→年度3（Scope2の20%削減、非化石証書活用）→年度5（50%再エネ化、PPA契約で長期ヘッジ）→年度10（80%再エネ化、自家発電20%）→年度15（100%再エネ）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Scope3（サプライチェーン排出量）の削減は、サプライヤーとの協議が必要で、Scope2より時間がかかります。バリューチェーン全体のSBT目標設定（FLAG Guidance適用）も段階的に広がっています。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">SBT認定の審査基準はSBTi公式の「SBTi Corporate Net-Zero Standard」で定められており、削減率・対象範囲・再エネ調達要件が詳細に規定されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">環境省「脱炭素経営ガイドブック」や、経産省のGXリーグ参加企業向けガイドラインも、SBT取得時の実務指針として参照されることが多いです。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://sciencebasedtargets.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">Science Based Targets initiative</a></li>
            <li><a href="https://www.env.go.jp/earth/ondanka/supply_chain/gvc/index.html" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">環境省 脱炭素経営</a></li>
            <li><a href="https://www.cdp.net/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CDP (Disclosure Insight Action)</a></li>
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
