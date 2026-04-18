import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "再エネ調達詳細用語集｜FIT・FIP・PPA・GO・I-REC";
const pageDescription =
  "再エネ調達の手段・国際証書・追加性に関する詳細用語を整理した発展編用語集です。";
const pageUrl = "https://simulator.eic-jp.org/renewable-detail-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "再エネ用語", "PPA用語", "国際エネルギー"],
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
          { name: "再エネ調達詳細用語集" },
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
          <span className="text-slate-800">再エネ調達詳細用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ調達詳細用語集｜FIT・FIP・PPA・GO・I-REC</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">再エネ調達の検討が進むにつれ、より深い専門用語に出会います。証書の国際標準・調達契約の細目・追加性評価まで、実務担当者向けの詳細用語を整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">国際証書制度</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">I-REC（International REC）</dt><dd className="mt-1">国際的な再エネ証書制度。中東・東南アジア・アフリカで利用が広がる。</dd></div>
              <div><dt className="font-semibold text-slate-900">REC（Renewable Energy Certificate）</dt><dd className="mt-1">米国の再エネ証書。州ごとに制度設計が異なる。</dd></div>
              <div><dt className="font-semibold text-slate-900">GO（Guarantees of Origin）</dt><dd className="mt-1">EU圏の再エネ電力起源証明書。</dd></div>
              <div><dt className="font-semibold text-slate-900">GEC（Green Energy Certificate）</dt><dd className="mt-1">中国の再エネ証書制度。</dd></div>
              <div><dt className="font-semibold text-slate-900">J-クレジット</dt><dd className="mt-1">日本の温室効果ガス削減・吸収量クレジット制度。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PPA契約形態</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">コーポレートPPA</dt><dd className="mt-1">企業と発電事業者の長期電力購入契約。再エネ調達の主要手段。</dd></div>
              <div><dt className="font-semibold text-slate-900">オンサイトPPA</dt><dd className="mt-1">需要家の敷地内に発電所を設置するPPA。</dd></div>
              <div><dt className="font-semibold text-slate-900">オフサイトPPA</dt><dd className="mt-1">需要家から離れた場所に発電所を設置し送電するPPA。</dd></div>
              <div><dt className="font-semibold text-slate-900">バーチャルPPA（VPPA）</dt><dd className="mt-1">物理的な電力フローと別に、価格差と環境価値のみ取引するPPA。金融契約の性質。</dd></div>
              <div><dt className="font-semibold text-slate-900">Sleeve PPA</dt><dd className="mt-1">小売事業者を介して発電所と需要家を繋ぐPPA形態。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">追加性とトラッキング</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">追加性（Additionality）</dt><dd className="mt-1">再エネ調達が、その契約がなければ生まれなかった発電をもたらしたか。</dd></div>
              <div><dt className="font-semibold text-slate-900">トラッキング情報</dt><dd className="mt-1">証書・電力の発電源特定情報。</dd></div>
              <div><dt className="font-semibold text-slate-900">24/7 Carbon-Free Energy</dt><dd className="mt-1">年間総量ではなく時間単位で再エネ需給を一致させる概念。</dd></div>
              <div><dt className="font-semibold text-slate-900">Time-matched Renewable Energy</dt><dd className="mt-1">時間マッチング再エネ。Google・Microsoftが推進。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">評価指標</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">LCOE（均等化発電コスト）</dt><dd className="mt-1">発電所ライフサイクル全体の発電コスト。再エネ価格指標。</dd></div>
              <div><dt className="font-semibold text-slate-900">CFE Score</dt><dd className="mt-1">Carbon-Free Energyスコア。Googleが提唱する時間マッチング指標。</dd></div>
              <div><dt className="font-semibold text-slate-900">Scope2 Market-based</dt><dd className="mt-1">GHGプロトコルScope2のマーケット基準算定。</dd></div>
              <div><dt className="font-semibold text-slate-900">Scope2 Location-based</dt><dd className="mt-1">GHGプロトコルScope2のロケーション基準算定。電力網の平均排出係数で算定。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.there100.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">RE100 (The Climate Group)</a></li>
            <li><a href="https://ghgprotocol.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GHGプロトコル</a></li>
            <li><a href="https://www.enecho.meti.go.jp/category/saving_and_new/saiene/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 再エネ政策</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/high-voltage-glossary", title: "高圧・特別高圧電気契約の用語集", description: "高圧・特別高圧の電気契約・受変電設備に関する専門用語を一覧で整理した用語集です。" },
              { href: "/low-voltage-glossary", title: "低圧電気契約の用語集", description: "低圧電気契約に関する用語と、料金プラン・契約条件の基本概念を整理した用語集です。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力関連用語集", description: "デマンド管理・契約電力の決定方式に関する専門用語を整理した用語集です。" },
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
            description="用語の理解を深めたら、関連する解説記事や料金シミュレーターも合わせてご活用ください。"
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
