import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電気代値上げ時の価格転嫁と下請法｜適正転嫁のための記録方法";
const pageDescription =
  "電気代などのコスト上昇を取引先に価格転嫁する際の下請法対応と、適正転嫁の記録方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-price-pass-through-legal";

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
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/accounting-tax", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/accounting-tax"],
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
          { name: "電気代値上げ時の価格転嫁と下請法" },
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
          <span className="text-slate-800">電気代値上げ時の価格転嫁と下請法</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代値上げ時の価格転嫁と下請法｜適正転嫁のための記録方法</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電気代などのコスト上昇を取引先に価格転嫁する際の下請法対応と、適正転嫁の記録方法を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">価格転嫁の必要性と下請法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電気代・原材料費・人件費などのコスト上昇を取引先に転嫁することは、持続可能な取引の前提です。2022年以降、政府は価格転嫁の促進を強力に推進しており、下請法・独占禁止法に基づく監視を強化しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">取引先からの価格転嫁要請を拒絶する、または協議に応じないことは「買いたたき」として下請法違反となる可能性があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">転嫁交渉の準備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">価格転嫁交渉には、①コスト上昇の根拠資料（請求書・市場データ）、②価格改定率の試算、③業界水準との比較、の3点セットが必要です。電気代上昇は公的データ（経産省・電力広域機関）で裏付けられるため、根拠は明示しやすいです。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">改定申入れは、電子文書または書面で記録を残し、回答期限を設定します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">適正転嫁の記録</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">合意書・議事録・メールなど、転嫁交渉のプロセスを記録しておくことが重要です。税務調査・下請法調査で提出を求められる場合があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中小企業庁の「価格交渉支援ツール」や、商工会議所の無料相談を活用することで、適切な交渉プロセスを設計できます。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">交渉文書の実務テンプレート</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【価格改定申入書に含めるべき項目】</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①改定理由：電気代上昇率の根拠データ（経産省・電力会社公表値）。②改定対象範囲：影響する品目・サービス。③改定率：コスト上昇に対する反映率。④実施時期：改定日・猶予期間。⑤協議期間：回答期限（通常30〜60日）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">書類保管は、交渉開始から合意・実施後5年間が目安（下請法上の時効考慮）。取引先ごとのファイル管理を推奨。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">公正取引委員会・中小企業庁は、価格転嫁促進のための「パートナーシップ構築宣言」や「下請取引適正化推進月間」を運営しています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">適正転嫁状況は、下請Gメン・公取委の立入検査対象となり、違反企業には指導・勧告が行われます。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.jftc.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">公正取引委員会</a></li>
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
