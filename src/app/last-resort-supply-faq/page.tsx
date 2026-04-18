import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "最終保障供給に関するFAQ｜申込・料金・期間の疑問まとめ";
const pageDescription =
  "最終保障供給について検索されやすい質問を、結論から先に整理したFAQページです。";
const pageUrl = "https://simulator.eic-jp.org/last-resort-supply-faq";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電気料金FAQ"],
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
          { name: "FAQ集（よくある質問）", url: "https://simulator.eic-jp.org/articles/faq" },
          { name: "最終保障供給に関するFAQ" },
        ]}
        faq={[
          { question: "最終保障供給とは？", answer: "一般送配電事業者が、電力の供給を受けられない需要家に対して最終的に供給する仕組み。2022年以降の新電力撤退で利用者が急増しました。" },
          { question: "誰でも申し込める？", answer: "高圧・特別高圧の需要家が対象。低圧需要家には別の供給制度があります。" },
          { question: "申込方法は？", answer: "管内の一般送配電事業者のWebサイトから申込書をダウンロードして提出。受付から供給開始まで数日〜2週間程度。" },
          { question: "料金は高い？", answer: "2022年以降、標準料金より1.2倍を基本として設計され、最終保障料金は小売料金より割高が基本。早期の切替を推奨。" },
          { question: "いつまで使える？", answer: "原則として最低限の期間の供給で、代替供給先を見つけるまでの「つなぎ」の位置づけ。長期利用は想定されていません。" },
          { question: "解約・切替の手続きは？", answer: "新しい小売電気事業者と契約を結べば、自動的に最終保障供給から切替わります。個別解約手続きは基本不要。" },
          { question: "最終保障供給の料金が異常に高い月があった？", answer: "JEPX価格に連動する設計のため、スポット価格高騰時には月額が大きく上昇することがあります。" },
          { question: "最終保障供給中に契約電力が変わった場合は？", answer: "一般送配電事業者に連絡し、契約電力の見直しを依頼。契約電力の変更は料金に大きく影響するため、早期対応が重要。" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/faq" className="underline-offset-2 hover:underline">FAQ集（よくある質問）</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">最終保障供給に関するFAQ</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給に関するFAQ｜申込・料金・期間の疑問まとめ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">最終保障供給について検索されやすい質問を、結論から先に整理したFAQページです。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">最終保障供給の基本FAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q1：最終保障供給とは？ A：一般送配電事業者が、電力の供給を受けられない需要家に対して最終的に供給する仕組み。2022年以降の新電力撤退で利用者が急増しました。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q2：誰でも申し込める？ A：高圧・特別高圧の需要家が対象。低圧需要家には別の供給制度があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q3：申込方法は？ A：管内の一般送配電事業者のWebサイトから申込書をダウンロードして提出。受付から供給開始まで数日〜2週間程度。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">料金・期間のFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q4：料金は高い？ A：2022年以降、標準料金より1.2倍を基本として設計され、最終保障料金は小売料金より割高が基本。早期の切替を推奨。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q5：いつまで使える？ A：原則として最低限の期間の供給で、代替供給先を見つけるまでの「つなぎ」の位置づけ。長期利用は想定されていません。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q6：解約・切替の手続きは？ A：新しい小売電気事業者と契約を結べば、自動的に最終保障供給から切替わります。個別解約手続きは基本不要。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくあるトラブルのFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q7：最終保障供給の料金が異常に高い月があった？ A：JEPX価格に連動する設計のため、スポット価格高騰時には月額が大きく上昇することがあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q8：契約更新通知が来たが、自動継続される？ A：通知内容を確認し、必要なら事前に切替手続きを進める。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務Q&A：切替時の注意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q9：最終保障供給から切替する前に確認すべきことは？ A：①現在の契約電力・電力使用量を把握、②複数の新電力から見積を取得、③切替手続きに要する期間（通常1〜2ヶ月）を考慮。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q10：最終保障供給中に契約電力が変わった場合は？ A：一般送配電事業者に連絡し、契約電力の見直しを依頼。契約電力の変更は料金に大きく影響するため、早期対応が重要。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q11：切替先の新電力が撤退した場合、再度最終保障供給になる？ A：そのとおり。新電力選定時は、事業継続性（財務体力・供給実績）も評価軸に入れることが重要。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">最終保障供給の制度・料金設計は、経産省の「電気事業法」関連告示と、各一般送配電事業者の約款で規定されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">料金高騰時の対応や制度見直しの議論は、資源エネルギー庁の電力・ガス基本政策小委員会で継続的に行われています。</p>
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
              { href: "/why-business-electricity-expensive-faq", title: "法人電気代なぜ高いFAQ", description: "3軸で原因と対処法" },
              { href: "/contract-review-flow-faq", title: "契約見直しフローFAQ", description: "着手から切替完了まで" },
              { href: "/market-linked-plan-faq", title: "市場連動プランFAQ", description: "向く企業・向かない企業" },
              { href: "/articles/glossary", title: "用語集", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/faq", label: "FAQ集（よくある質問）の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
