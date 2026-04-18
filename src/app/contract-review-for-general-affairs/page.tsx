import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];


const pageTitle =
  "契約見直し時に総務が見るポイント｜社内調整と手続きの進め方";
const pageDescription =
  "電力契約見直しにおける総務部門の役割と確認ポイントを解説。ベンダー管理・書類の取り扱い・社内関係部門との連携・手続き進行など、実務に沿った進め方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 総務",
    "電気料金 契約更新 総務 手続き",
    "法人 電力 見直し 社内調整",
    "電気料金 担当 総務 役割",
    "電力切り替え 社内手続き",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/contract-review-for-general-affairs",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contract-review-for-general-affairs",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function ContractReviewForGeneralAffairsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="契約見直し時に総務が見るポイント｜社内調整と手続きの進め方"
        description="電力契約見直しにおける総務部門の役割と確認ポイントを解説。ベンダー管理・書類の取り扱い・社内関係部門との連携・手続き進行など、実務に沿った進め方を整理します。"
        url="https://simulator.eic-jp.org/contract-review-for-general-affairs"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約見直し時に総務が見るポイント" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">総務が見るポイント</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          契約見直し時に総務が見るポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは、経理・施設管理・経営層など複数の部門が関わります。その中で総務部門は、ベンダー対応・書類手続き・社内連携のハブとなることが多く、プロセス全体を円滑に進める上で重要な役割を担います。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電力契約見直しにおける総務部門の実務的な確認ポイントと進め方を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>電力契約見直しにおける総務の役割</li>
            <li>ベンダー管理と見積依頼時の窓口対応</li>
            <li>契約書・書類の管理と確認事項</li>
            <li>社内関係部門との連携の進め方</li>
            <li>切替後の手続きと運用管理</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電力契約見直しにおける総務の役割
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約見直しのプロセスでは、総務部門が担う役割は会社の規模・組織によって異なりますが、一般的には以下の業務が中心となります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              {
                role: "スケジュール管理",
                desc: "契約満了日から逆算して、見積依頼・比較・稟議・手続きの各マイルストーンを設定し、進捗を管理する。",
              },
              {
                role: "ベンダー対応の窓口",
                desc: "見積依頼先との連絡・資料の受け渡し・質問対応など、外部業者との窓口を担う。",
              },
              {
                role: "書類・契約書の管理",
                desc: "現行契約書・見積書・新契約書の保管と、必要書類の収集・提出を管理する。",
              },
              {
                role: "社内関係部門への連絡",
                desc: "経理・施設管理・経営層との連絡調整。各部門が必要とする情報を適切なタイミングで共有する。",
              },
            ].map((item) => (
              <div key={item.role} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.role}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            現行契約の確認と情報収集
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直し開始時に最初に行うのは、現行契約の内容確認です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行の契約書・料金メニュー説明書を取り出し、満了日・自動更新申出期限を確認する</li>
            <li>中途解約条項（違約金・予告期間）の有無と内容を確認する</li>
            <li>直近12か月分の電気料金請求書を収集・整理する</li>
            <li>供給地点特定番号を請求書から確認・記録する（複数拠点がある場合は全拠点分）</li>
            <li>現行の電力会社の担当者連絡先を確認しておく</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積依頼の準備と送付
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積依頼は、複数の電力会社に同時・同条件で行うことで比較可能な見積が得られます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積依頼先のリストアップ（最低2〜3社を目安）</li>
            <li>見積依頼書の作成：使用量データの添付、前提条件の明示、希望契約期間、回答期限を記載する</li>
            <li>見積依頼は書面（メール）で行い、条件を明確にしたまま複数社に一斉送付する</li>
            <li>回答期限（2週間程度）と担当者の連絡先を明示する</li>
            <li>受領後に前提条件が揃っているかを確認し、不明点は電力会社に照会する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積依頼に必要な情報の整理については{" "}
            <Link
              href="/information-to-prepare-before-quotation-request"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              新電力の相見積もり前に整理したい情報
            </Link>{" "}
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内関係部門との連携
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約見直しには複数の部門が関わります。総務部門は各部門と以下の形で連携します。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">経理部門との連携</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                見直しによる年間コスト変動の見込みを共有する。稟議・予算修正が必要な場合は経理の承認フローを確認し、スケジュールに組み込む。請求書の発行方法変更が必要な場合は事前に連絡する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">施設管理部門との連携</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                切替工事の有無・日程、設備への影響、供給開始の確認作業など、現場での対応が必要な事項を施設管理部門と調整する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">経営層・承認者への報告</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                見積比較の結果と推奨プランをまとめた資料を作成し、経営層・承認者に説明する。稟議書の形式が決まっている場合はそれに準拠する。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約手続きと切替後の管理
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約先が決定した後の手続き管理も総務部門が担うことが多いです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約書の内容を確認し（契約期間・単価・解約条件など）、署名・捺印・提出を行う</li>
            <li>現行電力会社への解約通知が必要な場合は、予告期限内に書面で通知する</li>
            <li>切替日・供給開始日を関係部門に連絡する</li>
            <li>切替後の初回請求書で、契約内容どおりの請求になっているかを確認する</li>
            <li>新しい契約書・約款・担当者連絡先を所定の場所に保管する</li>
            <li>次回の更新時期をスケジュールに登録し、6〜3か月前にアラームが出るようにしておく</li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            よくある失敗と対策
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自動更新の申出期限を過ぎてしまう → 契約書にリマインダーを設定し、6か月前に確認する</li>
            <li>見積の比較条件が揃っておらず正確な比較ができない → 見積依頼書で前提条件を明示する</li>
            <li>稟議の承認に時間がかかり手続きが間に合わない → 承認フローの所要時間を逆算してスケジュールを組む</li>
            <li>切替後の請求書を確認せずに放置する → 初回請求書を受け取ったら契約条件と照合する</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="contract-review-for-general-affairs" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "法人の電力契約更新の3か月前にやること",
              description: "更新準備の時系列手順と全体フロー。",
            },
            {
              href: "/information-to-prepare-before-quotation-request",
              title: "新電力の相見積もり前に整理したい情報",
              description: "見積依頼に必要な情報の整理方法。",
            },
            {
              href: "/contract-review-for-accounting",
              title: "契約見直し時に経理が見るポイント",
              description: "予算管理と会計処理の確認事項。",
            },
            {
              href: "/contract-review-for-facility-management",
              title: "契約見直し時に施設管理が見るポイント",
              description: "設備と供給安定性の確認事項。",
            },
            {
              href: "/not-just-unit-price-comparison-checklist",
              title: "請求単価だけで比較しないためのチェックポイント",
              description: "総額比較の考え方と確認事項。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備で確認すべき全項目の一覧。",
            },
            {
              href: "/electricity-contract-cancellation-renewal-terms",
              title: "電力契約の解約・更新条件の確認ポイント",
              description: "総務が把握すべき解約条件と更新手続きの詳細。",
            },
          ]}
        />

        <ContentCta
          heading="見直しの根拠を数値で示す"
          description="シミュレーターで現行契約の上振れリスクを試算することで、経営層や関係部門への説明に使える数値根拠を作れます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
