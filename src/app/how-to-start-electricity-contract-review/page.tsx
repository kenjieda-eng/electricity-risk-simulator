import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import SwitchSavingCalculator from "../../components/market-data/SwitchSavingCalculator";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];


const pageTitle =
  "高圧電力の見直しはどこから始める？｜法人向け5ステップと優先度判断";
const pageDescription =
  "高圧・特別高圧の法人電力契約の見直しを、請求書収集→契約条件確認→使用量整理→複数社見積→切替判断の5ステップで解説。所要時間・担当部署・優先度マトリクスで、何から着手すべきかが明確になります。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 始め方",
    "法人 電気料金 見直し 手順",
    "電力契約 優先度",
    "電力 見直し ステップ",
    "法人 電気代 削減 方法",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-start-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-start-electricity-contract-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/review-points", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/review-points"],
  },
};

const steps = [
  {
    step: "Step 1",
    title: "請求書3ヶ月分を集める",
    description:
      "直近3ヶ月の電気料金請求書を手元にそろえます。月別の使用量・契約電力・調整額・基本料金の内訳を把握するための出発点です。",
  },
  {
    step: "Step 2",
    title: "契約条件を確認する",
    description:
      "現在の契約書・別紙・覚書を確認し、契約期間・更新時期・中途解約条件・通知期限を把握します。見直し可能なタイミングが分かります。",
  },
  {
    step: "Step 3",
    title: "使用量とデマンドを整理する",
    description:
      "月別使用量と直近12ヶ月の最大デマンド（契約電力の前提）を一覧化します。見積依頼時の前提条件として使用します。",
  },
  {
    step: "Step 4",
    title: "複数社へ見積を依頼する",
    description:
      "整理した前提条件をもとに複数社（最低3社）へ同じ条件で見積を依頼します。前提をそろえることで比較が意味を持ちます。",
  },
  {
    step: "Step 5",
    title: "比較して切替判断を行う",
    description:
      "年間総額・契約条件・リスクの出方の3点で比較し、切替の可否を判断します。判断根拠を記録しておくと次回更新時に役立ちます。",
  },
];

const stepDetails = [
  {
    step: "Step 1",
    content: "請求書3ヶ月分を収集",
    duration: "1〜3日",
    dept: "総務・経理",
    docs: "電気料金請求書、検針票",
  },
  {
    step: "Step 2",
    content: "契約書・別紙・覚書の確認",
    duration: "1〜2日",
    dept: "総務・購買",
    docs: "電力供給契約書、別紙、覚書",
  },
  {
    step: "Step 3",
    content: "使用量・デマンドの整理",
    duration: "2〜5日",
    dept: "施設管理・総務",
    docs: "12ヶ月分の検針データ、デマンド履歴",
  },
  {
    step: "Step 4",
    content: "複数社への見積依頼",
    duration: "1〜2週間",
    dept: "総務・購買",
    docs: "使用量・デマンド一覧、現契約条件",
  },
  {
    step: "Step 5",
    content: "比較・社内決裁・切替判断",
    duration: "1〜3週間",
    dept: "総務・経営・購買",
    docs: "見積比較表、年間コスト試算、契約条件差一覧",
  },
];

const priorityMatrix = [
  {
    scale: "年間1,000万円以上",
    highChange: "優先度：高（即着手）",
    midChange: "優先度：高（即着手）",
    lowChange: "優先度：中（更新前に対応）",
  },
  {
    scale: "年間300〜1,000万円",
    highChange: "優先度：高（即着手）",
    midChange: "優先度：中（更新前に対応）",
    lowChange: "優先度：低（次回更新時）",
  },
  {
    scale: "年間300万円未満",
    highChange: "優先度：中（更新前に対応）",
    midChange: "優先度：低（次回更新時）",
    lowChange: "優先度：低（現状維持可）",
  },
];

const doNotItems = [
  {
    title: "いきなり見積依頼を行う",
    reason:
      "請求書・契約条件の確認前に見積を依頼しても、前提条件がそろわず比較が意味をなしません。まず現状把握を先行させます。",
  },
  {
    title: "単価だけで比較・判断する",
    reason:
      "燃調費の上限・市場連動の有無・容量拠出金の含み方など、単価以外の条件が実質コストを大きく左右します。年間総額と条件差を軸にします。",
  },
  {
    title: "1社だけに見積を依頼する",
    reason:
      "比較対象がなければ現契約の有利不利が判断できません。最低3社に同じ前提で依頼し、横並び比較を行います。",
  },
];

export default function HowToStartElectricityContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電力契約見直しは何から始めるべきか｜5ステップと優先度判断の考え方"
        description="法人向け電力契約の見直し手順を5ステップで解説。請求書収集から見積比較・切替判断まで所要時間と担当部署を整理し、優先度判断マトリクスで着手タイミングを明確にします。"
        url="https://simulator.eic-jp.org/how-to-start-electricity-contract-review"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電力契約見直しは何から始めるべきか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくずナビ" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-sky-700 underline underline-offset-2">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li>
            <Link
              href="/articles/review-points"
              className="hover:text-sky-700 underline underline-offset-2"
            >
              見直しポイントを知る
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li className="text-slate-700">見直しは何から始めるべきか</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧電力の見直しはどこから始める？法人向け5ステップ
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          請求書収集 → 契約条件確認 → 使用量整理 → 複数社見積 → 切替判断
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong>結論から言うと、高圧・特別高圧の電力契約見直しは「請求書3か月分の収集」から始めます。</strong>
          比較作業を先に進めたくなりますが、請求書・契約書・使用量のデータがそろわない状態では見積依頼の前提条件が不揃いになり、判断が誤りやすくなります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、高圧電力の見直しを5ステップで整理し、各ステップの所要時間・担当部署・優先度判断マトリクスまで網羅します。
          「何から手をつけていいかわからない」状態から抜け出すための最短ルートです。
        </p>
      </header>

      <div className="mt-6 space-y-6">
        {/* セクション1: 5ステップのフロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見直しの5ステップ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しは以下の順番で進めます。比較作業だけが先行すると、前提条件がそろわず判断が誤りやすくなるため、Step 1〜3の現状把握を先に完了させることが重要です。
          </p>
          <ol className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold text-sky-700">{s.step}</p>
                  <p className="font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* セクション2: ステップ別の所要時間と担当者テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ステップ別の所要時間と担当部署
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各ステップの所要目安と必要資料を整理しています。複数部署が関わるステップでは早期に役割分担を共有することで停滞を防げます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    ステップ
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    内容
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    所要目安
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    担当部署
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    必要な資料
                  </th>
                </tr>
              </thead>
              <tbody>
                {stepDetails.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">
                      {row.step}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-800">
                      {row.content}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.duration}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.dept}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.docs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※所要目安は単拠点・担当者1名が兼務で対応した場合の目安です。複数拠点・多部署連携が必要な場合はさらに長くなります。
          </p>
        </section>

        {/* セクション3: 優先度判断マトリクス */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見直しの優先度判断マトリクス
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「年間電気代の規模」と「前年比の変動幅」の2軸で、見直し着手の優先度を判断できます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-left">
                    年間電気代規模
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    前年比＋15%以上
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    前年比＋5〜15%
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    前年比±5%以内
                  </th>
                </tr>
              </thead>
              <tbody>
                {priorityMatrix.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.scale}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center font-semibold text-red-700">
                      {row.highChange}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center font-semibold text-amber-700">
                      {row.midChange}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-600">
                      {row.lowChange}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※更新時期が6ヶ月以内に迫っている場合は、上記判定より1段階優先度を上げて対応することを推奨します。
          </p>
        </section>

        {/* セクション4: 最初にやってはいけないこと */}
        <section className="rounded-xl border border-amber-100 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最初にやってはいけないこと（3項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直し初期によくある判断ミスです。いずれも後から手戻りが発生しやすいパターンです。
          </p>
          <ul className="mt-4 space-y-3">
            {doNotItems.map((item, i) => (
              <li
                key={i}
                className="rounded-lg border border-amber-200 bg-white p-4"
              >
                <p className="font-semibold text-amber-800">
                  NG {i + 1}：{item.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {item.reason}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="how-to-start-electricity-contract-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "基本料金", "電力量料金", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <SwitchSavingCalculator />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          intro="見直し全体の入口として、段階的に確認できるページです。"
          links={[
            {
              href: "/documents-needed-for-electricity-contract-review",
              title: "法人の電気料金見直しで集めるべき資料一覧",
              description:
                "Step 1〜3で必要な資料の収集範囲と優先順位を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金請求書の読み方：各行の意味と確認ポイント",
              description:
                "請求書の各行が何を意味するかをStep 1で確認できます。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しで最低限確認したい5項目",
              description:
                "Step 2〜3で使える社内確認チェックリストを把握できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description:
                "Step 4〜5で前提をそろえた見積を横並びで確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "見積比較で確認すべき調整項目の代表格、燃調費の仕組みを事前に理解できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="全体手順を確認したら次のステップへ"
          description="請求書と契約書の確認が済んだら、比較ページとシミュレーターで見直し判断を実行段階へ進めます。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/", label: "シミュレーターで診断する" },
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
