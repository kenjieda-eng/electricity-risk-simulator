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
  "法人の電力契約見直しで社内確認したい項目一覧｜部署別の確認分担も整理";
const pageDescription =
  "法人向け電力契約の見直しで社内確認すべき8項目を一覧化しました。契約更新時期・予算枠・意思決定権者・設備変更予定など、確認先・タイミング・リスクを表で整理し、総務・経理・施設管理・経営企画の部署別分担も解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約見直し",
    "社内確認",
    "部署別分担",
    "法人電気料金",
    "稟議",
    "BCP",
    "ESG",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/internal-checklist-for-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/internal-checklist-for-electricity-contract-review",
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

const internalChecklist = [
  {
    item: "契約更新時期",
    target: "総務・契約管理担当",
    timing: "見直し着手の最初（解約申出期限の逆算が必要）",
    risk: "更新月と解約申出期限を把握しないまま動き、タイムアウトで自動更新が確定する",
  },
  {
    item: "予算枠（電気料金の上限・目標）",
    target: "経理・財務担当",
    timing: "比較見積を取る前（比較条件の絞り込みに必要）",
    risk: "予算との整合を確認せず比較を進め、稟議段階で差し戻しが発生する",
  },
  {
    item: "意思決定権者と稟議ルート",
    target: "総務・経営企画",
    timing: "見直し計画の立案時（稟議リードタイムを確保するため）",
    risk: "意思決定者や稟議経路が不明のまま比較を進め、決裁が遅れて契約切替に間に合わない",
  },
  {
    item: "設備変更予定（空調・生産設備・照明など）",
    target: "施設管理・設備担当",
    timing: "比較見積の依頼前（見積前提に設備変更後の使用量を反映するため）",
    risk: "設備変更前の使用量で比較し、変更後の実態とかい離した契約を選ぶ",
  },
  {
    item: "拠点統廃合・移転予定",
    target: "経営企画・施設管理",
    timing: "中長期計画の確認時（拠点変更が契約期間に影響するため）",
    risk: "移転・統廃合と契約更新のタイミングが重なり、解約違約金や重複契約が発生する",
  },
  {
    item: "BCP（事業継続計画）要件",
    target: "リスク管理・総務・経営企画",
    timing: "比較対象の絞り込み前（供給信頼性・バックアップ電源要件を確認するため）",
    risk: "供給信頼性を考慮せず価格のみで切替先を選び、停電リスクへの対応が不十分になる",
  },
  {
    item: "ESG方針・再エネ調達目標",
    target: "経営企画・サステナビリティ担当",
    timing: "比較対象の絞り込み前（再エネ比率・トラッキング付非化石証書の要否を確認するため）",
    risk: "ESG要件を後から追加し、一度選んだ契約条件を再検討する手戻りが発生する",
  },
  {
    item: "支払条件・口座振替の制約",
    target: "経理・財務担当",
    timing: "切替候補を絞り込んだ後（支払方法や振替口座の変更が生じる場合があるため）",
    risk: "支払条件の変更を考慮せず切替を進め、経理処理や口座設定に遅れが生じる",
  },
];

const departmentDivision = [
  {
    dept: "総務",
    items: [
      "契約書・覚書の保管と入手",
      "契約更新時期・解約申出期限の管理",
      "意思決定権者の確認と稟議書類の準備",
      "電力会社との連絡窓口",
    ],
  },
  {
    dept: "経理",
    items: [
      "請求書の保管と月次照合",
      "電気料金の予算枠・計上方法の確認",
      "支払条件・口座振替の変更対応",
      "切替後の初回請求確認",
    ],
  },
  {
    dept: "施設管理",
    items: [
      "デマンドデータ・使用量実績の取得",
      "設備変更・稼働変更予定の情報提供",
      "拠点移転・統廃合スケジュールの共有",
      "BCP要件（バックアップ電源等）の確認",
    ],
  },
  {
    dept: "経営企画",
    items: [
      "拠点統廃合・中長期計画との整合確認",
      "ESG方針・再エネ調達目標の共有",
      "意思決定スケジュールの調整",
      "コスト削減効果の経営報告資料への反映",
    ],
  },
];

export default function InternalChecklistForElectricityContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電力契約見直しで社内確認したい項目一覧｜部署別の確認分担も整理"
        description="法人向け電力契約の見直しで社内確認すべき8項目を一覧化しました。契約更新時期・予算枠・意思決定権者・設備変更予定など、確認先・タイミング・リスクを表で整理し、総務・経理・施設管理・経営企画の部署別分担も解説します。"
        url="https://simulator.eic-jp.org/internal-checklist-for-electricity-contract-review"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電力契約見直しで社内確認したい項目一覧" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:underline">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li>
            <Link href="/articles/review-points" className="hover:underline">
              見直しポイントを知る
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li className="text-slate-700">社内確認したい項目一覧</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電力契約見直しで社内確認したい項目一覧
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは、外部比較だけで完結する業務ではありません。社内で必要情報がそろわないと、見積比較や稟議が進まず、期限超過につながることがあります。このページでは、社内で確認すべき8項目の「確認先」「タイミング」「確認しないリスク」を整理し、部署別の確認分担もまとめます。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 社内確認項目テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内確認項目一覧（8項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の8項目は、電力契約の見直し実務を進めるうえで社内での確認が必要な事項です。確認先・確認のタイミング・確認しないリスクを整理しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    確認事項
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    確認先
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    確認のタイミング
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    確認しないリスク
                  </th>
                </tr>
              </thead>
              <tbody>
                {internalChecklist.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-3 font-medium text-slate-900 whitespace-nowrap align-top">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 text-slate-700 whitespace-nowrap align-top">
                      {row.target}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.timing}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.risk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 部署別の確認分担テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            部署別の確認分担
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直し情報は複数部署に分散しています。以下の分担表を参考に、依頼先と期限を明確にして進めると漏れを防げます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {departmentDivision.map((dept, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {dept.dept}
                </h3>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  {dept.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 text-sky-600 shrink-0">・</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※組織体制によって担当部署は異なります。上記を参考に自社の体制に合わせて調整してください。
          </p>
        </section>

        {/* 稟議・社内説明のポイント */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            稟議や社内説明で押さえたい論点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内説明では、価格差だけでなく契約条件・柔軟性・運用負荷・切替後確認の体制まで示すと納得を得やすくなります。単価だけの説明は後からの質問対応が増えがちです。
          </p>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
            <li>・比較前提（契約電力・使用量・燃調費の扱い）を数値で示す</li>
            <li>・年間コスト差額と削減率を試算して提示する</li>
            <li>・契約期間・解約条件・違約金の有無を明示する</li>
            <li>・ESG・BCP要件への対応状況を補足する</li>
            <li>・切替後の請求確認担当者と初回確認時期を決めておく</li>
          </ul>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内確認を進めやすくする考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内整理は、担当者単独ではなく、情報保有部署と期限をセットで管理する運用が有効です。特に更新前は確認遅れがそのまま機会損失につながります。切替後の請求確認担当まで事前に決めておくと、見直しを一時的対応で終わらせず次回更新にも活かしやすくなります。
          </p>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="internal-checklist-for-electricity-contract-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/who-should-handle-electricity-contract-review",
              title: "どの部署が法人の電力契約見直しを担当するべきか",
              description:
                "主導部署と分担体制の考え方を整理できます。",
            },
            {
              href: "/documents-needed-for-electricity-contract-review",
              title: "法人の電気料金見直しで集めるべき資料一覧",
              description:
                "社内確認で必要な資料の収集範囲を明確にできます。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "法人の電力契約見直しは何から始めるべきか",
              description:
                "社内確認を含む見直し全体手順を確認できます。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人が電力契約を切り替えるときの注意点",
              description:
                "社内整理を切替実務へつなげる際の確認点を把握できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "社内確認後のプラン選択比較の参考として。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="社内確認項目をそろえたら、比較ページで候補を同条件で検討し、使い方ページを参照しながら稟議・切替までの実務を進めます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/review-points", label: "見直しポイントの記事一覧へ" },
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
