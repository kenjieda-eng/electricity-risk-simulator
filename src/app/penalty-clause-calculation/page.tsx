import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "違約金・精算金条項の計算方法｜残存契約期間と違約金の関係";
const pageDescription =
  "電力契約の違約金条項の典型計算式と、交渉・免除の余地について整理します。";
const pageUrl = "https://simulator.eic-jp.org/penalty-clause-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "電力契約違約金"],
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "違約金・精算金条項の計算方法" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">違約金・精算金条項の計算方法</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">違約金・精算金条項の計算方法｜残存契約期間と違約金の関係</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">電力契約の違約金条項の典型計算式と、交渉・免除の余地について整理します。</p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金条項の典型パターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①定額型：一定金額（数万〜数十万円）を一律徴収。小規模契約に多い。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">②月額連動型：残存契約期間×月額料金×一定率（20〜50%）。中〜大規模契約で一般的。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">③使用量連動型：残存期間×想定使用量×特定単価。契約電力の大きい特別高圧契約に多い。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">計算シミュレーションの例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">例：5年契約の3年目で解約。月額電気代150万円。違約金条項が「残存契約期間月額×30%」なら、違約金=24ヶ月×150万円×30%=1,080万円。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">違約金額が大きい場合、切替による削減額との比較が不可欠です。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">免除・減額の交渉余地</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①電力会社側の契約違反（供給義務不履行）、②値上げ通知後の解約、③不可抗力事由、④相互合意による早期終了、などのケースでは違約金の免除・減額が認められる可能性があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">交渉時は、契約書の違約金条項の法的有効性（消費者契約法・独禁法の観点）を論点にすることで、実態的に減額できる場合もあります。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金計算シート（実務テンプレート）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Step1】契約書の違約金条項を確認（定額/月額連動/使用量連動）。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Step2】残存契約期間と月額/使用量を特定。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Step3】計算式に当てはめて違約金総額を算出。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Step4】切替後の年間削減額×残存期間と比較。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【Step5】差額（切替メリット）がマイナスなら維持、プラスなら切替が経済的。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">交渉により違約金を▲30〜50%圧縮できるケースもあり、複数社見積と並行して検討します。</p>
          </section>
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">不公正な違約金は、公正取引委員会「優越的地位濫用ガイドライン」や消費者契約法10条（不当条項）に該当する可能性があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力契約の違約金紛争は、経産省「電力・ガス取引監視等委員会」の相談窓口でも対応しています。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.caa.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">消費者庁</a></li>
            <li><a href="https://www.jftc.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">公正取引委員会</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/electricity-contract-main-clauses", title: "電力契約書の主要条項", description: "法人担当者向けの読み方" },
              { href: "/force-majeure-clause", title: "不可抗力条項の典型例", description: "災害・需給ひっ迫時の責任分担" },
              { href: "/auto-renewal-clause", title: "自動更新条項と更新拒絶", description: "通知期限管理と解除" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
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
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
