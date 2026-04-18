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
  "法人の契約見直し実務ガイド一覧｜準備から比較・切替までの進め方";
const pageDescription =
  "法人が電力契約を見直す際の実務プロセスを、準備・比較・切替の各フェーズに分けて解説する一覧ページ。チェックリスト・タイムライン・見積準備・燃料費調整の確認まで網羅。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電力契約 見直し 手順",
    "電気料金 見直し 実務",
    "電力切替 準備 チェックリスト",
    "電気代 削減 法人 進め方",
    "電力契約 比較 ガイド",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/contract-review-practice-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contract-review-practice-guide",
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

type GuideSection = {
  phase: string;
  phaseLabel: string;
  items: { href: string; title: string; summary: string }[];
};

const guideSections: GuideSection[] = [
  {
    phase: "phase1",
    phaseLabel: "フェーズ1：現状把握・準備",
    items: [
      {
        href: "/business-electricity-contract-checklist",
        title: "法人の電力契約見直しチェックリスト",
        summary:
          "見直しを始める前に確認すべき項目を網羅したチェックリスト。現行契約の把握から見積依頼までの準備に使えます。",
      },
      {
        href: "/documents-needed-for-electricity-contract-review",
        title: "電力契約見直しに必要な書類と情報",
        summary:
          "見積依頼・比較・切替の各段階で必要になる書類・情報の一覧。事前に準備しておくことでスムーズに進められます。",
      },
      {
        href: "/business-electricity-bill-breakdown",
        title: "法人向け電気料金の請求書の見方",
        summary:
          "請求書の各行項目（基本料金・電力量料金・燃料費調整・再エネ賦課金など）の意味と確認ポイント。",
      },
    ],
  },
  {
    phase: "phase2",
    phaseLabel: "フェーズ2：タイミングの見極め",
    items: [
      {
        href: "/electricity-contract-terms",
        title: "電力契約の契約期間と更新タイミングの確認",
        summary:
          "契約期間の種類と自動更新の仕組み。見直し検討の開始タイミングは更新日から逆算して計画します。",
      },
      {
        href: "/electricity-contract-cancellation-renewal-terms",
        title: "電力契約の解約・更新条件の確認ポイント",
        summary:
          "中途解約違約金・解約通知の締め切り・切替手続きの流れを事前に把握しておくことで、タイミングを逃しません。",
      },
    ],
  },
  {
    phase: "phase3",
    phaseLabel: "フェーズ3：見積比較",
    items: [
      {
        href: "/compare-business-electricity-estimates",
        title: "法人の電力見積書の比較ポイント",
        summary:
          "複数の電力会社から見積を取った際の比較方法。単価だけでなく、条件の揃え方・注意すべき項目を整理します。",
      },
      {
        href: "/cheap-unit-price-not-always-better",
        title: "単価が安くても有利とは限らない理由",
        summary:
          "見積単価の低さだけで判断すると見落としやすいポイント。基本料金・調整費・オプション条件まで確認します。",
      },
      {
        href: "/fuel-cost-adjustment",
        title: "燃料費調整制度の仕組みと確認ポイント",
        summary:
          "燃料費調整の計算方法と、見積段階での確認事項。固定プランでも変動する場合があるため要確認。",
      },
      {
        href: "/does-fuel-cost-adjustment-change-even-in-fixed-plan",
        title: "固定プランでも燃料費調整は変動するのか",
        summary:
          "「固定プランだから安心」という誤解を整理。固定される範囲と変動が残る部分の違いを確認します。",
      },
    ],
  },
  {
    phase: "phase4",
    phaseLabel: "フェーズ4：プラン選択の判断",
    items: [
      {
        href: "/compare-market-linked-and-fixed-by-risk-pattern",
        title: "リスクパターン別・市場連動と固定の比較",
        summary:
          "自社のリスク許容度・使用量・業種特性から、固定プランと市場連動プランのどちらが適切かを整理します。",
      },
      {
        href: "/businesses-suited-for-fixed-price-electricity-plan",
        title: "固定プランが向く法人の特徴",
        summary: "固定プランを選ぶ判断基準と、よく当てはまる法人のパターン。",
      },
      {
        href: "/businesses-not-suited-for-market-linked-electricity-plan",
        title: "市場連動プランが向かない法人の特徴",
        summary: "市場連動プランを選ぶ際のリスクと、慎重に判断すべきケース。",
      },
    ],
  },
  {
    phase: "phase5",
    phaseLabel: "フェーズ5：社内対応",
    items: [
      {
        href: "/5-minimum-checkpoints-for-electricity-contract-review",
        title: "電力契約見直しの最低限確認ポイント5つ",
        summary:
          "忙しい担当者が最低限押さえるべきポイントを5項目に絞って整理。稟議・社内説明にも活用できます。",
      },
    ],
  },
];

export default function ContractReviewPracticeGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の契約見直し実務ガイド一覧｜準備から比較・切替までの進め方"
        description="法人が電力契約を見直す際の実務プロセスを、準備・比較・切替の各フェーズに分けて解説する一覧ページ。チェックリスト・タイムライン・見積準備・燃料費調整の確認まで網羅。"
        url="https://simulator.eic-jp.org/contract-review-practice-guide"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の契約見直し実務ガイド一覧" },
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
        <span className="text-slate-800">実務ガイド一覧</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の契約見直し実務ガイド一覧
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは、現状把握・タイミングの確認・見積比較・プラン選択・社内手続きといった複数のステップで構成されます。それぞれのステップで「何を確認すべきか」を知っておくことで、見落としなく進めることができます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、各フェーズの実務ガイドを一覧にまとめています。担当者が必要なタイミングに応じてページを参照できるよう整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>契約見直しの全体プロセスとフェーズ区分</li>
            <li>各フェーズで参照すべきガイドページへのリンク</li>
            <li>担当部門（総務・経理・施設管理）別の関与ポイント</li>
            <li>見直しを始める際の典型的な失敗パターン</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約見直しの全体プロセス
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電力契約見直しは、大きく5つのフェーズに分けて考えると整理しやすくなります。それぞれのフェーズで確認すべき事項が異なるため、各ステップで適切な情報を参照しながら進めることが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            {["現状把握・準備", "タイミング確認", "見積比較", "プラン選択", "社内対応"].map(
              (step, idx) => (
                <div
                  key={step}
                  className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-center"
                >
                  <p className="text-xs font-semibold text-sky-700">STEP {idx + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{step}</p>
                </div>
              )
            )}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直しの検討開始は、契約更新日の<strong>6か月前</strong>が一般的な目安です。解約通知の締め切りに遅れると次の更新サイクルまで待つことになるため、タイミングを早めに確認することが重要です。
          </p>
        </section>

        {guideSections.map((section) => (
          <section key={section.phase} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{section.phaseLabel}</h2>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  <p className="text-sm font-semibold text-sky-700 underline underline-offset-2">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            担当部門別の関与ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しは、総務・経理・施設管理など複数の部門が関与するケースがほとんどです。部門ごとの関与ポイントを整理しておくと、社内調整がスムーズになります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">総務・庶務担当</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>現行契約書・料金明細の収集</li>
                <li>契約期間・更新日・解約条件の確認</li>
                <li>電力会社への見積依頼・問合せ窓口</li>
                <li>切替手続きの実施・関係者への連絡</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">経理・財務担当</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>電気料金の費用分類と予算管理</li>
                <li>年間コスト試算・比較資料の作成</li>
                <li>固定プランと市場連動の収支影響分析</li>
                <li>稟議書・予算申請資料の準備</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">施設管理・設備担当</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>施設の使用量データ・負荷パターンの提供</li>
                <li>契約電力の設定妥当性の確認</li>
                <li>設備の省エネ改善余地の評価</li>
                <li>デマンドコントローラー等の設備状況の報告</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            よくある見直し失敗パターン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しでは、以下のような失敗が繰り返されやすいことが知られています。事前に把握しておくことで、同じ轍を踏まずに済みます。
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                pattern: "解約通知の締め切りを過ぎてしまった",
                detail:
                  "現行契約の解約通知期限（3か月前・6か月前など）を把握しておらず、更新後も変更できない期間が続いてしまうケース。契約書の確認を最初に行うことで防げます。",
              },
              {
                pattern: "単価だけで見積を比較した",
                detail:
                  "基本料金・燃料費調整・再エネ賦課金・上限なし市場連動条件などの違いを見落とし、「安い」と思った見積が実際には高くなるケース。条件を揃えた比較が必要です。",
              },
              {
                pattern: "使用量データを準備せずに見積依頼した",
                detail:
                  "過去の使用量データがないまま見積依頼すると、概算の見積しか得られず精度の高い比較ができません。最低12か月分のデータを準備してから依頼します。",
              },
              {
                pattern: "市場連動プランの上振れシナリオを考慮しなかった",
                detail:
                  "平均単価が安い時期の数字だけを見て市場連動に切り替えたが、需給逼迫・燃料高騰時に大幅に上振れて予算超過したケース。上振れシナリオをシミュレーターで確認しておくことで防げます。",
              },
            ].map((item) => (
              <div
                key={item.pattern}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">× {item.pattern}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="contract-review-practice-guide" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "最終保障供給"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備の全体像を確認するための基本ページ。",
            },
            {
              href: "/billing-quotation-guide",
              title: "請求書・見積書の見方ガイド一覧",
              description: "請求書・見積書の読み方と比較のポイントをまとめた一覧。",
            },
            {
              href: "/industry-electricity-guide",
              title: "業種別の電気料金見直しガイド一覧",
              description: "業種ごとの負荷特性・プラン選択の考え方。",
            },
            {
              href: "/fixed-vs-market-linked-guide",
              title: "固定プランと市場連動プランの判断ガイド一覧",
              description: "プラン選択に迷ったときの整理フレームワーク。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで見直しの判断材料をそろえる"
          description="現行契約条件での上振れリスクや、固定プランと市場連動プランのコスト差を数値で確認できます。稟議・社内説明の資料づくりにも活用できます。"
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
