import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "契約期間中の解約・違約金FAQ｜中途解約条項の読み方";
const pageDescription =
  "電力契約の契約期間中に解約する場合の違約金・精算金の扱いについて、よくある質問を整理します。";
const pageUrl = "https://simulator.eic-jp.org/mid-term-cancellation-penalty-faq";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電気料金FAQ", "電力契約違約金"],
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
          { name: "契約期間中の解約・違約金FAQ" },
        ]}
        faq={[
          { question: "違約金はいくらかかる？", answer: "契約条件により、①定額（数万〜数十万円）、②残存契約期間×月額料金の一定割合、③残存使用量×特定単価、の3パターンが主流です。" },
          { question: "違約金は交渉で減額できる？", answer: "値上げ通知後の解約、電力会社側の契約違反、不可抗力での解約などでは減額・免除の余地があります。" },
          { question: "違約金条項がない契約はある？", answer: "一部の短期契約・自治体向け契約には違約金なしもありますが、長期契約（2年以上）では設定されているのが通常。" },
          { question: "解約の申入期限は？", answer: "契約満了の1〜6ヶ月前までの事前通知が必要な場合が多いです。期限を過ぎると自動更新となり、違約金なし解約のタイミングを失います。" },
          { question: "新電力が撤退した場合、違約金はどうなる？", answer: "電力会社側の責任による契約終了では、違約金は発生しないのが原則です。" },
          { question: "契約内容が覚えていない場合は？", answer: "電力会社に契約書・契約条件の再発行を依頼。重要条項は書面で確認を残すことを推奨。" },
          { question: "違約金を払ってでも切替するべき？", answer: "切替後の年間削減額×残存期間が違約金+切替コストを上回るなら切替が経済的。比較試算は必ず行う。" },
          { question: "違約金は次の電力会社が負担してくれる？", answer: "一部の新電力は、違約金負担特典を提示するケースがあります。切替見積時に確認すると有利。" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/faq" className="underline-offset-2 hover:underline">FAQ集（よくある質問）</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">契約期間中の解約・違約金FAQ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">契約期間中の解約・違約金FAQ｜中途解約条項の読み方</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約の契約期間中に解約する場合の違約金・精算金の扱いについて、よくある質問を整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金の基本FAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q1：違約金はいくらかかる？ A：契約条件により、①定額（数万〜数十万円）、②残存契約期間×月額料金の一定割合、③残存使用量×特定単価、の3パターンが主流です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q2：違約金は交渉で減額できる？ A：値上げ通知後の解約、電力会社側の契約違反、不可抗力での解約などでは減額・免除の余地があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q3：違約金条項がない契約はある？ A：一部の短期契約・自治体向け契約には違約金なしもありますが、長期契約（2年以上）では設定されているのが通常。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">解約プロセスのFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q4：解約の申入期限は？ A：契約満了の1〜6ヶ月前までの事前通知が必要な場合が多いです。期限を過ぎると自動更新となり、違約金なし解約のタイミングを失います。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q5：新電力が撤退した場合、違約金はどうなる？ A：電力会社側の責任による契約終了では、違約金は発生しないのが原則です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q6：契約内容が覚えていない場合は？ A：電力会社に契約書・契約条件の再発行を依頼。重要条項は書面で確認を残すことを推奨。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切替先選定のFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q7：違約金を払ってでも切替するべき？ A：切替後の年間削減額×残存期間が違約金+切替コストを上回るなら切替が経済的。比較試算は必ず行う。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q8：違約金は次の電力会社が負担してくれる？ A：一部の新電力は、違約金負担特典を提示するケースがあります。切替見積時に確認すると有利。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">紛争時のFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q9：違約金額が契約書と違う場合は？ A：契約書を根拠に異議申立。経産省「電力・ガス取引監視等委員会」にも相談可能。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q10：違約金支払いを拒絶するとどうなる？ A：電力会社からの訴訟、信用情報への影響の可能性。まず法律相談を検討。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q11：消費者契約法で違約金が無効になることはある？ A：法人契約は原則対象外。ただし個人事業主・小規模事業者は一部救済可能なケースあり。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力契約の違約金に関する監督は、経産省「電力・ガス取引監視等委員会」で行われています。不公正な条項は公正取引委員会にも相談可能です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">下請法・独占禁止法の観点から、明らかに過大な違約金設定は「買いたたき」や「優越的地位濫用」に該当する可能性があります。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.caa.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">消費者庁</a></li>
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
