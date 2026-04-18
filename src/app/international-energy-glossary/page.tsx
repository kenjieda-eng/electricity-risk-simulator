import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "国際エネルギー用語集｜LNG・OPEC・Brent・Henry Hub";
const pageDescription =
  "国際エネルギー市場・燃料指標・主要機関の用語を整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/international-energy-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "国際エネルギー", "LNG"],
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
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "国際エネルギー用語集" },
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
          <span className="text-slate-800">国際エネルギー用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">国際エネルギー用語集｜LNG・OPEC・Brent・Henry Hub</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力料金は燃料の国際価格に大きく影響されます。LNGスポット・原油指標・主要機関名など、燃料市場の用語を整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料市場の指標</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">LNG（液化天然ガス）</dt><dd className="mt-1">天然ガスを液化して輸送・貯蔵可能にしたもの。日本の発電燃料の中心。</dd></div>
              <div><dt className="font-semibold text-slate-900">Henry Hub</dt><dd className="mt-1">米国の天然ガス価格指標。LNG輸出価格の参照基準。</dd></div>
              <div><dt className="font-semibold text-slate-900">JKM（Japan Korea Marker）</dt><dd className="mt-1">アジアLNGスポット価格指標。Plattsが算出。</dd></div>
              <div><dt className="font-semibold text-slate-900">Brent原油</dt><dd className="mt-1">北海産原油の国際価格指標。</dd></div>
              <div><dt className="font-semibold text-slate-900">WTI原油</dt><dd className="mt-1">米国産原油の国際価格指標（West Texas Intermediate）。</dd></div>
              <div><dt className="font-semibold text-slate-900">ドバイ原油</dt><dd className="mt-1">中東産原油の指標。日本の輸入原油価格の参照。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">国際機関</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">IEA（国際エネルギー機関）</dt><dd className="mt-1">OECD加盟国を中心とするエネルギー協力機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">IRENA（国際再生可能エネルギー機関）</dt><dd className="mt-1">再エネ普及を推進する国際機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">OPEC（石油輸出国機構）</dt><dd className="mt-1">産油国13ヶ国の協議組織。原油生産量を調整。</dd></div>
              <div><dt className="font-semibold text-slate-900">OPEC+（拡大OPEC）</dt><dd className="mt-1">OPECに非加盟産油国（ロシア等）を加えた協議体。</dd></div>
              <div><dt className="font-semibold text-slate-900">WBCSD（持続可能な開発のための世界経済人会議）</dt><dd className="mt-1">GHGプロトコル共同開発機関。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">国際協定・枠組み</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">パリ協定</dt><dd className="mt-1">2015年採択の気候変動国際協定。1.5℃・2℃目標を設定。</dd></div>
              <div><dt className="font-semibold text-slate-900">COP（締約国会議）</dt><dd className="mt-1">気候変動枠組条約の年次会議。</dd></div>
              <div><dt className="font-semibold text-slate-900">UNFCCC（気候変動枠組条約）</dt><dd className="mt-1">気候変動対策の国際条約。</dd></div>
              <div><dt className="font-semibold text-slate-900">Net-Zero by 2050</dt><dd className="mt-1">IEAが提示した2050年ネットゼロ達成シナリオ。</dd></div>
              <div><dt className="font-semibold text-slate-900">Just Transition</dt><dd className="mt-1">脱炭素移行を公正に進める原則。労働者・地域への配慮。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">地政学・政策</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">エネルギーセキュリティ</dt><dd className="mt-1">エネルギー供給の安定確保。地政学リスクへの対応。</dd></div>
              <div><dt className="font-semibold text-slate-900">Gas-to-Power</dt><dd className="mt-1">天然ガスから発電する技術・施策。</dd></div>
              <div><dt className="font-semibold text-slate-900">Power-to-X</dt><dd className="mt-1">電力を水素・合成燃料等に変換する技術。</dd></div>
              <div><dt className="font-semibold text-slate-900">Grid Parity</dt><dd className="mt-1">再エネ発電コストが既存電源と並ぶ水準。</dd></div>
              <div><dt className="font-semibold text-slate-900">REPowerEU</dt><dd className="mt-1">EUのロシアエネルギー依存脱却計画（2022年）。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.iea.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IEA (国際エネルギー機関)</a></li>
            <li><a href="https://www.irena.org/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">IRENA (国際再生可能エネルギー機関)</a></li>
            <li><a href="https://www.enecho.meti.go.jp/about/whitepaper/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 国際エネルギー情勢</a></li>
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
