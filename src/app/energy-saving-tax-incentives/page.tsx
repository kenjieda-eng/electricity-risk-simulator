import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "省エネ税制・中小企業経営強化税制｜電力関連設備の優遇一覧";
const pageDescription =
  "省エネ設備・蓄電池・太陽光・EV充電設備などへの税制優遇制度を一覧で整理します。";
const pageUrl = "https://simulator.eic-jp.org/energy-saving-tax-incentives";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "産業用蓄電池", "中小企業電気代", "省エネ税制", "EV充電", "充電設備"],
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
          { name: "省エネ税制・中小企業経営強化税制" },
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
          <span className="text-slate-800">省エネ税制・中小企業経営強化税制</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">省エネ税制・中小企業経営強化税制｜電力関連設備の優遇一覧</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">省エネ設備・蓄電池・太陽光・EV充電設備などへの税制優遇制度を一覧で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中小企業経営強化税制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業経営強化税制は、中小企業が生産性向上や経営力強化のために設備投資する場合、即時償却または税額控除（7〜10%）が受けられる制度です。省エネ・脱炭素関連設備も対象で、BEMS・蓄電池・EV充電器などが含まれます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">適用には、経営力向上計画の認定が必要で、計画策定と認定申請に2〜3ヶ月かかります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">カーボンニュートラル投資促進税制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">GX設備の導入に対し、即時償却または税額控除（5〜10%）が受けられる制度です。需給調整に資する設備（蓄電池・デマンド制御設備）、脱炭素効果の高い設備が対象です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">2025年度以降の制度改正で対象範囲と控除率が段階的に見直されているため、最新の適用条件を税理士・商工会議所で確認することが重要です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金との併用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">省エネ補助金・GX補助金を受ける場合、税制優遇との併用可否、補助金部分の扱い（圧縮記帳）などが複雑になります。事前に補助事業者・税理士と調整が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中長期で複数の補助金・税制を組み合わせることで、投資回収期間を大幅に短縮できるケースがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">税制優遇一覧表（主要）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【中小企業経営強化税制】対象：生産性向上設備・省エネ設備・脱炭素設備。優遇：即時償却または税額控除7%（特定中小企業10%）。適用期限：2027年3月末まで（延長の可能性あり）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【カーボンニュートラル投資促進税制】対象：GX設備（需給調整・脱炭素設備）。優遇：即時償却または税額控除5%（特定条件で10%）。適用期限：2026年3月末。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【中小企業投資促進税制】対象：機械装置・ソフトウェア。優遇：30%特別償却または税額控除7%。適用期限：2027年3月末。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【生産性向上特別措置法（中小企業向け）】対象：市町村の先端設備等導入計画認定設備。優遇：固定資産税ゼロ（最大3年）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">複数制度の同時適用は原則不可のため、投資効果を試算して最適な制度を選びます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業経営強化税制・カーボンニュートラル投資促進税制の最新情報は、中小企業庁・経産省公式サイトで確認できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">申請手続きは経営革新等支援機関（認定支援機関）や商工会議所が支援しており、税理士との連携で進めるのが一般的です。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
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
