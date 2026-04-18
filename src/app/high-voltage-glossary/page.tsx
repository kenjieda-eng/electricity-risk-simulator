import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "高圧・特別高圧電気契約の用語集｜キュービクル・PAS・受変電設備";
const pageDescription =
  "高圧・特別高圧の電気契約・受変電設備に関する専門用語を一覧で整理した用語集です。";
const pageUrl = "https://simulator.eic-jp.org/high-voltage-glossary";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力用語", "電気代用語", "用語集", "高圧契約用語"],
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
          { name: "高圧・特別高圧電気契約の用語集" },
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
          <span className="text-slate-800">高圧・特別高圧電気契約の用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">高圧・特別高圧電気契約の用語集｜キュービクル・PAS・受変電設備</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">高圧・特別高圧契約では特有の専門用語が多く、設備担当者でも全体像を把握しにくい領域です。受変電設備・保護機器・契約方式の主要用語を体系的に整理しました。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">受変電設備の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">キュービクル</dt><dd className="mt-1">高圧受変電設備を金属製の箱に収めたユニット。屋外・屋上設置が一般的で、6.6kVなどの高圧電力を低圧に変換する。</dd></div>
              <div><dt className="font-semibold text-slate-900">PAS（柱上気中開閉器）</dt><dd className="mt-1">高圧引込線の柱上に設置され、事故時に系統から遮断する開閉器。地絡継電器との連携で動作。</dd></div>
              <div><dt className="font-semibold text-slate-900">UGS（地中線用ガス開閉器）</dt><dd className="mt-1">地中引込配電方式で使われるSF6ガス絶縁式の高圧開閉器。</dd></div>
              <div><dt className="font-semibold text-slate-900">VCB（真空遮断器）</dt><dd className="mt-1">真空中で電気接点を開閉する遮断器。高圧設備の主遮断装置として広く使われる。</dd></div>
              <div><dt className="font-semibold text-slate-900">LBS（負荷開閉器）</dt><dd className="mt-1">通常電流の開閉が可能な開閉器。VCBより安価で、定期的な開閉操作向け。</dd></div>
              <div><dt className="font-semibold text-slate-900">VT（計器用変圧器）/CT（計器用変流器）</dt><dd className="mt-1">高圧の電圧・電流を計器・継電器が扱える低い値に変換する装置。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">保護・検知の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">OCR（過電流継電器）</dt><dd className="mt-1">規定値を超える電流を検出して遮断器を動作させる継電器。</dd></div>
              <div><dt className="font-semibold text-slate-900">DGR（地絡方向継電器）</dt><dd className="mt-1">地絡事故の方向を判別して動作する継電器。需要家側の事故と系統側を区別。</dd></div>
              <div><dt className="font-semibold text-slate-900">ZCT（零相変流器）</dt><dd className="mt-1">地絡電流を検出するためのCT。</dd></div>
              <div><dt className="font-semibold text-slate-900">漏電遮断器</dt><dd className="mt-1">感電・漏電事故防止のため、漏電検出時に自動遮断する遮断器。</dd></div>
            </dl>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約・運用の用語</h2>
            <dl className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">契約電力</dt><dd className="mt-1">需要家と電力会社が契約する最大需要電力。基本料金算定の基礎。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピークデマンド</dt><dd className="mt-1">30分単位の最大需要電力。月間最大値が契約電力となる場合がある。</dd></div>
              <div><dt className="font-semibold text-slate-900">受電方式</dt><dd className="mt-1">電力を引き込む方式。1回線・2回線・スポットネットワーク等の選択肢。</dd></div>
              <div><dt className="font-semibold text-slate-900">自家用電気工作物</dt><dd className="mt-1">高圧以上の電気を受電する設備。経産省への各種届出と保安管理が必要。</dd></div>
              <div><dt className="font-semibold text-slate-900">電気主任技術者</dt><dd className="mt-1">高圧設備を管理する有資格者。第1種〜第3種で扱える電圧範囲が異なる。</dd></div>
              <div><dt className="font-semibold text-slate-900">保安規程</dt><dd className="mt-1">自家用電気工作物の保安・運用ルール。提出義務あり。</dd></div>
            </dl>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.meti.go.jp/policy/safety_security/industrial_safety/sangyo/electric/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 電気事業法・自家用電気工作物</a></li>
            <li><a href="https://www.denpo.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気保安協会</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/low-voltage-glossary", title: "低圧電気契約の用語集", description: "低圧電気契約に関する用語と、料金プラン・契約条件の基本概念を整理した用語集です。" },
              { href: "/demand-power-glossary", title: "デマンド・契約電力関連用語集", description: "デマンド管理・契約電力の決定方式に関する専門用語を整理した用語集です。" },
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
      </main>
    </>
  );
}
