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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];


const pageTitle =
  "電力契約の中途解約条項の見方と注意点｜違約金と予告期間の確認";
const pageDescription =
  "法人の電力契約における中途解約条項の読み方を解説。違約金の種類・計算方法・予告期間の確認ポイント、中途解約が合理的になる条件と判断のしかたを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 中途解約",
    "電気 違約金 計算",
    "電力契約 解約 予告期間",
    "法人 電力 切り替え 解約",
    "電力契約 途中解約 条件",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/mid-term-cancellation-clause-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/mid-term-cancellation-clause-guide",
    siteName: "法人電気料金ナビ",
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

const penaltyTypes = [
  {
    type: "定額違約金型",
    description: "解約時に固定の金額（例：10万円）を支払う。残存期間に関わらず一定額。",
    notes: "比較的シンプルで計算しやすい。残存期間が長いほど実質的なコストは低い。",
  },
  {
    type: "残存期間比例型",
    description: "残存する契約期間に応じて違約金が増減する（例：残り月数×基本料金1か月分）。",
    notes: "切替タイミングが早いほど違約金が大きくなる。切替の時期選択が重要。",
  },
  {
    type: "逸失利益型",
    description: "残存期間中に得られたはずの電力会社の利益相当額を請求するもの。計算式が複雑なことがある。",
    notes: "契約書の計算式を事前に確認し、想定される金額を試算しておく。",
  },
  {
    type: "違約金なし（予告期間のみ）",
    description: "一定の予告期間（例：3か月前通知）を守れば違約金なしで解約できる。",
    notes: "柔軟性が高い。予告期限を過ぎると自動更新されてしまう点に注意。",
  },
];

export default function MidTermCancellationClauseGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力契約の中途解約条項の見方と注意点｜違約金と予告期間の確認"
        description="法人の電力契約における中途解約条項の読み方を解説。違約金の種類・計算方法・予告期間の確認ポイント、中途解約が合理的になる条件と判断のしかたを整理します。"
        url="https://simulator.eic-jp.org/mid-term-cancellation-clause-guide"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力契約の中途解約条項の見方と注意点" },
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
        <span className="text-slate-800">中途解約条項の見方</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力契約の中途解約条項の見方と注意点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約を見直す際、現行契約の中途解約条項を事前に確認しておくことは非常に重要です。解約に伴う違約金や予告期間を把握しておかないと、切替コストを見誤ったり、希望のタイミングで切り替えられなかったりするケースがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、中途解約条項の種類・確認方法・違約金の計算パターン、そして解約が合理的になる判断基準を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>中途解約条項の種類と違約金の計算パターン</li>
            <li>予告期間の確認方法と見落としやすい注意点</li>
            <li>違約金を踏まえた切替コストの考え方</li>
            <li>中途解約が合理的になる条件</li>
            <li>契約書で確認すべき具体的な箇所</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            中途解約条項とは何か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中途解約条項とは、電力契約の満了前に契約を解除する場合の条件を定めた条項です。「途中で解約できるか」「解約する場合に何が必要か（違約金・予告期間）」が記載されています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約では、新電力（PPS）のメニューに特に見られますが、大手電力の高圧メニューにも設定されていることがあります。契約書の「解約」「中途解約」「契約解除」などの項目を確認します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            違約金の種類と計算パターン
          </h2>
          <div className="mt-4 space-y-3">
            {penaltyTypes.map((pt) => (
              <div
                key={pt.type}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{pt.type}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{pt.description}</p>
                <p className="mt-1 text-xs text-slate-500">{pt.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            予告期間の確認ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            予告期間とは、解約の意思表示から実際の契約終了・切替まで必要な期間です。予告期間が定められている場合、その期限を過ぎると切替できないか、自動更新されてしまいます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>一般的な予告期間は1〜3か月前。契約書の「解約通知」「解約申出」の項目で確認する</li>
            <li>スイッチング手続き（電力会社の切替）自体にも1〜2か月程度かかる場合があるため、予告期間と合わせて逆算する</li>
            <li>「契約満了日の○か月前まで」と「解約希望日の○か月前まで」の違いに注意する</li>
            <li>書面通知が必要な場合は、メール通知では有効でないケースがある</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            違約金を踏まえた切替コストの考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中途解約で違約金が発生する場合でも、新しい契約への切替によるコスト削減がそれを上回るなら、経済的には切替が合理的です。以下の試算を行います。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">切替のコスト</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                違約金の金額を試算する。残存契約期間と違約金の計算式から算出。電力会社に確認を取ることで正確な金額を把握できる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">切替後のコスト削減効果</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                現行と新契約の年間コスト差を見積もる。残存期間中の削減額が違約金を上回る場合は、切替が合理的。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">回収期間の確認</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                違約金の回収に何か月かかるかを確認する。「違約金÷月間削減額」で試算できる。回収期間が短いほど切替の優位性が高い。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            中途解約が合理的になる主な状況
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下のような状況では、違約金が発生しても中途解約・切替が実質的に有利になることがあります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約が市場連動型で電気料金の急騰が続いており、固定型への切替によるリスク低減効果が大きい場合</li>
            <li>現行の燃料費調整額に上限がなく、今後の上昇リスクが高い場合</li>
            <li>事業の規模変更（施設の移転・閉鎖・拡張）に伴い、使用量が大幅に変化する場合</li>
            <li>新電力の財務悪化・供給継続リスクを懸念する場合</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現行契約のリスク水準は{" "}
            <Link
              href="/simulate"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              シミュレーター
            </Link>{" "}
            を使って試算できます。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約書で確認すべき具体的な箇所
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>「解約」「中途解約」「契約解除」の条項番号と内容</li>
            <li>解約の申出方法（書面・メールなど）と宛先</li>
            <li>違約金の有無と計算式</li>
            <li>予告期間の長さと起算点</li>
            <li>「電力会社の都合による解除」と「需要家側の都合による解除」の扱いの違い</li>
            <li>不可抗力条項（災害・事故等による免責）</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="mid-term-cancellation-clause-guide" terms={["燃料費調整額", "市場価格調整額", "市場連動プラン", "固定プラン", "最終保障供給"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-contract-period-guide",
              title: "電力契約の契約期間の見方と注意点",
              description: "1年・2年・3年契約の特徴と選択の考え方。",
            },
            {
              href: "/information-to-prepare-before-quotation-request",
              title: "新電力の相見積もり前に整理したい情報",
              description: "見積依頼を精度よく行うための事前準備。",
            },
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "法人の電力契約更新の3か月前にやること",
              description: "更新準備の時系列手順。",
            },
            {
              href: "/non-price-factors-in-electricity-contract",
              title: "法人の電力契約で単価以外に確認したい項目",
              description: "リスク・条件面の確認ポイント。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較時に見落としやすい観点の整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備で確認すべき全項目の一覧。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "中途解約を検討する際のプラン切替の判断軸。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約の条件でリスクを試算する"
          description="違約金を払ってでも切り替えるべきか判断するには、現行契約のリスク水準を把握することが第一歩です。"
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
