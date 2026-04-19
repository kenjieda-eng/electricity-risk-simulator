import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "デマンド・契約電力関連用語集｜30分値・力率・最大需要";
const pageDescription =
  "デマンド管理・契約電力の決定方式に関する専門用語を整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/demand-power-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "デマンド用語"],
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
    images: [{ url: "/api/og/glossary", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/glossary"],
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
          { name: "デマンド・契約電力関連用語集" },
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
          <span className="text-slate-800">デマンド・契約電力関連用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">デマンド・契約電力関連用語集｜30分値・力率・最大需要</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">高圧契約では「デマンド」管理が電気代を大きく左右します。30分値・最大需要・力率・契約電力の決定方式まで、関連する用語を体系的に整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンドの基本</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">デマンド</dt><dd className="mt-1">30分単位の平均需要電力（kW）。瞬間電力ではなく30分平均で評価。</dd></div>
              <div><dt className="font-semibold text-slate-900">最大需要電力</dt><dd className="mt-1">月間で最も高かったデマンド値。基本料金算定の元になる。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピークデマンド</dt><dd className="mt-1">需要量がピークに達した時点・値。デマンド超過の警報対象。</dd></div>
              <div><dt className="font-semibold text-slate-900">デマンド監視装置</dt><dd className="mt-1">30分デマンドを監視し、契約電力超過を予防する装置。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約電力の決定方式</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">契約電力</dt><dd className="mt-1">需要家と電力会社が契約する最大需要電力。基本料金の単位。</dd></div>
              <div><dt className="font-semibold text-slate-900">実量制</dt><dd className="mt-1">過去12ヶ月の最大デマンドで契約電力を自動更新する方式。</dd></div>
              <div><dt className="font-semibold text-slate-900">協議制</dt><dd className="mt-1">需要家と電力会社の協議で契約電力を決定する方式。設備容量で算定。</dd></div>
              <div><dt className="font-semibold text-slate-900">基本料金単価</dt><dd className="mt-1">契約電力1kWあたりの基本料金。エリア・電圧で異なる。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">力率と割引</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">力率</dt><dd className="mt-1">皮相電力に対する有効電力の比率。100%が理想。</dd></div>
              <div><dt className="font-semibold text-slate-900">力率割引・割増</dt><dd className="mt-1">力率85%を基準に、上下1%ごとに基本料金が0.85%変動する制度。</dd></div>
              <div><dt className="font-semibold text-slate-900">力率改善コンデンサ</dt><dd className="mt-1">力率を改善するための機器。基本料金削減に効果。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ピーク管理の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">ピークカット</dt><dd className="mt-1">デマンドピーク時に消費を抑制すること。基本料金削減に直結。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピークシフト</dt><dd className="mt-1">ピーク時間の消費を時間帯外に移すこと。</dd></div>
              <div><dt className="font-semibold text-slate-900">ベースロード</dt><dd className="mt-1">常時稼働するベースの電力需要。</dd></div>
              <div><dt className="font-semibold text-slate-900">負荷率</dt><dd className="mt-1">平均需要÷最大需要の比率。設備の使用効率を示す。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/electricity_liberalization/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 電気料金のしくみ</a></li>
            <li><a href="https://www.tepco.co.jp/ep/corporate/index-j.html" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">各電力会社 高圧契約ガイド</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/high-voltage-glossary", title: "高圧・特別高圧電気契約の用語集", description: "高圧・特別高圧の電気契約・受変電設備に関する専門用語を一覧で整理した用語集です。" },
              { href: "/low-voltage-glossary", title: "低圧電気契約の用語集", description: "低圧電気契約に関する用語と、料金プラン・契約条件の基本概念を整理した用語集です。" },
              { href: "/renewable-detail-glossary", title: "再エネ調達詳細用語集", description: "再エネ調達の手段・国際証書・追加性に関する詳細用語を整理した発展編用語集です。" },
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
