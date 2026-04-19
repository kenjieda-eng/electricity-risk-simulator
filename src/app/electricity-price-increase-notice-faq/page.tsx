import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電気代の値上げ通知が来たときのFAQ｜確認・交渉・切替の流れ";
const pageDescription =
  "電力会社から値上げ通知が届いた際の、確認事項・交渉可否・他社への切替手順をFAQ形式で整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-price-increase-notice-faq";

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
          { name: "FAQ集（よくある質問）", url: "https://simulator.eic-jp.org/articles/faq" },
          { name: "電気代の値上げ通知が来たときのFAQ" },
        ]}
        faq={[
          { question: "値上げ通知の見方は？", answer: "①値上げ実施日、②値上げ幅（円/kWh・基本料金）、③理由、④解約の自由、の4点を最優先で確認します。" },
          { question: "値上げ理由として妥当なもの？", answer: "燃料費・市場価格・制度改正（託送料金・容量拠出金）などが一般的な理由。燃料費調整ではなく基本単価の改定の場合は、社内説明に根拠が必要です。" },
          { question: "通知なしの値上げは違法？", answer: "契約条件により事前通知期間が定められており、通知なしまたは短期通知は契約違反の可能性があります。" },
          { question: "値上げは交渉できる？", answer: "小規模契約は交渉余地は限定的ですが、中大規模は価格交渉・条件変更の余地があります。値上げ幅の根拠資料を求めることが交渉の第一歩。" },
          { question: "引き止め交渉で有利な条件が出る？", answer: "切替の意向を明示することで、値上げ幅の緩和・契約期間延長によるディスカウントなどの条件が出ることがあります。" },
          { question: "値上げ通知を受けて、すぐ切替すべき？", answer: "切替には1〜2ヶ月かかり、切替先も同水準の値上げをしているケースが多い。複数社見積・比較が不可欠。" },
          { question: "値上げ前に解約すると違約金がかかる？", answer: "契約条件に違約金条項があれば発生。値上げ通知時は「消費者保護の観点から違約金免除」が認められるケースもあります。" },
          { question: "契約期間中の値上げを拒絶できる？", answer: "契約条件次第。多くの場合、値上げ実施前に解約する権利が認められる（違約金なし）ケースがあるため、契約書の確認を優先。" },
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
          <span className="text-slate-800">電気代の値上げ通知が来たときのFAQ</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気代の値上げ通知が来たときのFAQ｜確認・交渉・切替の流れ</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力会社から値上げ通知が届いた際の、確認事項・交渉可否・他社への切替手順をFAQ形式で整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">通知到着時の確認事項FAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q1：値上げ通知の見方は？ A：①値上げ実施日、②値上げ幅（円/kWh・基本料金）、③理由、④解約の自由、の4点を最優先で確認します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q2：値上げ理由として妥当なもの？ A：燃料費・市場価格・制度改正（託送料金・容量拠出金）などが一般的な理由。燃料費調整ではなく基本単価の改定の場合は、社内説明に根拠が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q3：通知なしの値上げは違法？ A：契約条件により事前通知期間が定められており、通知なしまたは短期通知は契約違反の可能性があります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">交渉の余地FAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q4：値上げは交渉できる？ A：小規模契約は交渉余地は限定的ですが、中大規模は価格交渉・条件変更の余地があります。値上げ幅の根拠資料を求めることが交渉の第一歩。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q5：引き止め交渉で有利な条件が出る？ A：切替の意向を明示することで、値上げ幅の緩和・契約期間延長によるディスカウントなどの条件が出ることがあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切替判断のFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q6：値上げ通知を受けて、すぐ切替すべき？ A：切替には1〜2ヶ月かかり、切替先も同水準の値上げをしているケースが多い。複数社見積・比較が不可欠。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q7：値上げ前に解約すると違約金がかかる？ A：契約条件に違約金条項があれば発生。値上げ通知時は「消費者保護の観点から違約金免除」が認められるケースもあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">回答が曖昧な場合のFAQ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q8：電力会社から「市場価格高騰のため」と言われたが、具体的な数字を示さない場合は？ A：経産省・電力広域機関が公開する市場価格データと照合。根拠が不明確なら、値上げ幅の妥当性を説明責任として求める。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q9：値上げ通知の書式・記載が不十分な場合は？ A：書面で再発行を依頼。消費者庁・経産省の問い合わせ窓口（電気の消費者相談）にも相談可能。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Q10：契約期間中の値上げを拒絶できる？ A：契約条件次第。多くの場合、値上げ実施前に解約する権利が認められる（違約金なし）ケースがあるため、契約書の確認を優先。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力契約の値上げ通知については、消費者庁「電気の消費者情報」および経産省「電力・ガス取引監視等委員会」が情報提供と相談対応を行っています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">値上げ理由の裏付けデータは、資源エネルギー庁「電力調査統計」やJEPX公式で確認できます。</p>
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
