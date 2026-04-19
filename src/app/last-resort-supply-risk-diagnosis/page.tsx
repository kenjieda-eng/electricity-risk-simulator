import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["diagnostic-tools"];


const pageTitle =
  "最終保障供給リスク診断｜自社が最終保障供給になるリスクを確認";
const pageDescription =
  "最終保障供給（最終保障）に移行するリスクがあるかを診断チェックで確認。契約状況・新電力との関係・倒産リスクへの備えなど、法人担当者が知っておくべき判断ポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 リスク 診断",
    "最終保障供給 なりやすい",
    "新電力 倒産 最終保障",
    "法人 電力 最終保障供給",
    "最終保障供給 回避 チェック",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-risk-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-risk-diagnosis",
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


const lastResortFacts = [
  {
    title: "最終保障供給とは",
    body: "電力の小売契約が終了した際に、需要家が電力供給を受け続けられるよう、一般送配電事業者が提供するセーフティネットです。通常の小売電気事業者との契約とは別の料金体系が適用されます。",
  },
  {
    title: "最終保障供給の料金水準",
    body: "最終保障供給の料金は、通常の小売価格より高く設定される傾向があります。電力市場の状況や地域によって異なりますが、一般的に割高になる可能性が高いといえます。",
  },
  {
    title: "移行するケース",
    body: "新電力会社の事業撤退・倒産、契約期間終了後の放置、契約が成立しないまま供給が継続している状態などが最終保障供給に移行する主な原因です。",
  },
  {
    title: "移行後の対応",
    body: "最終保障供給に移行した場合、できるだけ早く新たな小売電気事業者との契約を締結することが重要です。最終保障供給期間中も切替手続きは行えます。",
  },
];

const preventionSteps = [
  { step: 1, text: "現行の電力契約書で満了日・自動更新条項を確認し、カレンダーに更新時期をメモする" },
  { step: 2, text: "供給元の電力会社の経営状況・ニュースを年数回チェックする習慣をつける" },
  { step: 3, text: "複数拠点がある場合は、全拠点の契約状況を一元的に把握するリストを作成する" },
  { step: 4, text: "契約担当者が変わる際は、電力契約情報の引き継ぎを確実に行う" },
  { step: 5, text: "万一に備えて、代替の電力会社候補（1〜2社）の情報を事前に把握しておく" },
  { step: 6, text: "万一最終保障供給に移行した場合の切替手続きフローを事前に確認しておく" },
];

export default function LastResortSupplyRiskDiagnosisPage() {
  return (
    <>
      <ArticleJsonLd
        headline="最終保障供給リスク診断｜自社が最終保障供給になるリスクを確認"
        description="最終保障供給（最終保障）に移行するリスクがあるかを診断チェックで確認。契約状況・新電力との関係・倒産リスクへの備えなど、法人担当者が知っておくべき判断ポイントを解説します。"
        url="https://simulator.eic-jp.org/last-resort-supply-risk-diagnosis"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "診断ツール・チェックリスト", url: "https://simulator.eic-jp.org/articles/diagnostic-tools" },
        ]}
        faq={[
    { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給リスク診断</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給リスク診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「最終保障供給」とは、電力の小売契約が終了した際に需要家が電力供給を受け続けられる仕組みです。ただし、通常の小売価格より割高になる傾向があり、気づかないまま移行していると、電気代が上がっている原因になっていることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自社が最終保障供給に移行するリスクがあるかをチェックリスト形式で確認し、リスクを回避するための具体的な手順を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>最終保障供給とは何か・どんな状況で移行するか</li>
            <li>自社が最終保障供給に移行するリスクの診断チェックリスト</li>
            <li>最終保障供給を未然に防ぐための対応手順</li>
            <li>移行してしまった場合の対処法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の基本知識</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            リスク診断の前に、最終保障供給の仕組みを確認しておきましょう。詳しくは{" "}
            <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              最終保障供給とは
            </Link>{" "}
            をご覧ください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {lastResortFacts.map((fact) => (
              <div key={fact.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{fact.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{fact.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスク診断チェックリスト（9項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の項目に当てはまるものをクリックしてチェックしてください。該当項目が多いほど、最終保障供給に移行するリスクが高い状況といえます。
          </p>
          <div className="mt-4">
            <DiagnosisClient />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給を未然に防ぐための6ステップ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の手順を日常的な管理業務に組み込むことで、最終保障供給へのリスクを大幅に低減できます。
          </p>
          <div className="mt-4 space-y-3">
            {preventionSteps.map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />



        <section className="rounded-xl border border-red-100 bg-red-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給に移行してしまった場合の対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            既に最終保障供給に移行している場合は、以下の手順で早急に対応してください。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "現在の供給状態を確認する（請求書の発行元・料金水準を確認）" },
              { step: 2, text: "供給地点特定番号・使用量データを整理し、見積依頼の準備を行う" },
              { step: 3, text: "複数の電力会社に見積を依頼し、早急に切替先を決定する" },
              { step: 4, text: "切替手続きを開始する（通常1〜2か月程度の手続き期間が必要）" },
            ].map(({ step, text }) => (<div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            詳しくは{" "}
            <Link href="/last-resort-supply-switch" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              最終保障供給から通常の小売契約に切り替える方法
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクレベル別の対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            診断チェックの該当数に応じたリスクレベルと、推奨アクション・対応期限を整理しました。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">リスクレベル</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">該当条件</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">推奨アクション</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対応期限</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">低</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">該当項目0〜1個。契約状況を把握・管理できている。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回の契約状況確認を習慣化。次回更新時期をカレンダーに設定。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">次回更新前（6か月前）</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">中</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">該当項目2〜3個。契約管理に一部抜けがある。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約書・更新時期を確認し、代替電力会社の候補をリストアップ。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1か月以内</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">高</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">該当項目4〜6個。複数の管理上の課題が重なっている。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">今すぐ全拠点の契約状況を棚卸し。見積依頼先も同時に探索する。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2週間以内</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">緊急</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">既に最終保障供給に移行している、または移行直前の状態。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">複数の電力会社に見積を依頼し、今すぐ切替先を決定・手続きを開始。</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">今すぐ</td>
              </tr>
            </tbody>
          </table>
        </section>

        <SourcesAndFaq
          faq={[
          { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />



        <RelatedLinks
          heading="関連ページ"
          intro="最終保障供給の仕組みと対策についてさらに詳しく確認できるページです。"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "最終保障供給の仕組みと料金水準、移行ケースを詳しく解説。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金水準",
              description: "通常の小売電力との価格差と、コストへの影響を解説。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替える方法",
              description: "移行後の切替手続きと注意点を整理。",
            },
            {
              href: "/last-resort-vs-retail-contract",
              title: "最終保障供給と通常小売契約の違い",
              description: "料金・契約条件の違いを比較形式で解説。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "更新時期から逆算して、見直し開始のタイミングを確認。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "そもそも見直しが必要かを10項目で確認する診断ページ。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクをシミュレーターで確認する"
          description="最終保障供給への移行リスクを把握したら、現行の電力プランのコストリスクもシミュレーターで確認しておきましょう。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
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
