import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["review-points"];


const pageTitle =
  "法人の電気料金見直しで集めるべき資料一覧｜8種類の資料と入手先・優先順位";
const pageDescription =
  "法人向け電気料金の見直しで必要な資料を8種類に整理しました。直近12ヶ月請求書・現行契約書・供給地点特定番号など、各資料の入手先・必要な理由・なくても進められるかを表で解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金見直し",
    "必要資料",
    "法人電力契約",
    "供給地点特定番号",
    "デマンドデータ",
    "契約書",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/documents-needed-for-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/documents-needed-for-electricity-contract-review",
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

const documents = [
  {
    name: "直近12ヶ月の請求書",
    source: "現在の電力会社（Web明細または紙）",
    reason:
      "使用量・基本料金・燃調費の推移を把握し、比較見積の前提条件をそろえるために必須",
    canProceedWithout: "不可（最低3ヶ月分は必須。12ヶ月あると精度が上がる）",
  },
  {
    name: "現行契約書（本文・別紙・覚書）",
    source: "契約締結時の書類、または電力会社に再発行依頼",
    reason:
      "契約期間・解約申出期限・違約金・燃調費の上限有無など、比較・切替判断に不可欠な条件が記載されている",
    canProceedWithout:
      "不可（更新条件が不明のまま比較すると、切替できないリスクがある）",
  },
  {
    name: "供給地点特定番号（22桁）",
    source:
      "請求書または電力会社のWebマイページに記載",
    reason:
      "他社へ見積依頼・切替申込をする際に必ず必要。この番号がないと正式な見積もりが取れない",
    canProceedWithout:
      "比較検討の初期段階は可能だが、見積依頼・切替手続きには必須",
  },
  {
    name: "契約電力通知・デマンド実績",
    source:
      "電力会社のWebマイページ、またはデマンド監視機器のログ",
    reason:
      "実態と乖離した契約電力を確認し、基本料金削減余地を定量的に把握するために必要",
    canProceedWithout:
      "可能（請求書の契約電力欄でも代用できるが、月別実績があると精度が上がる）",
  },
  {
    name: "月別使用量データ（30分値）",
    source:
      "電力会社のWebマイページ、または低圧スマートメーターデータ",
    reason:
      "時間帯別・季節別料金メニューとの適合性を検証するために必要。単価体系が使用パターンに合っているか確認できる",
    canProceedWithout:
      "可能（月次集計のみでも概算比較は可能。30分値は精密な比較時に有効）",
  },
  {
    name: "デマンドデータ（月別最大値）",
    source:
      "電力会社のWebマイページ、またはデマンド監視機器のログ",
    reason:
      "基本料金は「過去最大デマンド」で決まるメニューがあるため、デマンドの実績推移で基本料金の適正化余地を判断できる",
    canProceedWithout:
      "可能（請求書の基本料金欄から概算で確認できるが、削減余地の定量化には実績値が必要）",
  },
  {
    name: "施設図面・設備一覧",
    source:
      "施設管理担当部署または設備台帳",
    reason:
      "大型設備の更新予定・稼働変更予定がある場合、比較見積の前提を実態に合わせるために必要",
    canProceedWithout:
      "可能（設備変更予定がない場合は省略可能だが、変更予定がある場合は見積前提が変わる）",
  },
  {
    name: "更新案内・改定通知",
    source:
      "現在の電力会社から郵送またはメール",
    reason:
      "更新条件の改定や料金改定が予告されている場合、比較の前提が変わる。最新の通知を確認することで判断精度が上がる",
    canProceedWithout:
      "可能（手元にない場合は電力会社に問い合わせて最新条件を確認する）",
  },
];

const collectionFlow = [
  {
    step: 1,
    action: "請求書（直近3〜12ヶ月）を入手する",
    detail:
      "電力会社のWebマイページにログインするか、紙請求書を保管場所から取り出す。Webマイページで過去12ヶ月分をダウンロードできる場合が多い",
    parallel: "供給地点特定番号は請求書に記載されているため、同時に確認する",
  },
  {
    step: 2,
    action: "現行契約書・覚書を確認する",
    detail:
      "契約締結時の書類を保管場所（総務・経理）から取り出す。見つからない場合は電力会社へ再発行を依頼する",
    parallel: "更新案内・改定通知も同時に探す",
  },
  {
    step: 3,
    action: "使用量・デマンドデータを取得する",
    detail:
      "電力会社のWebマイページで月別使用量と最大デマンドを確認・ダウンロードする。30分値が必要な場合は別途申請が必要なケースもある",
    parallel: "施設図面・設備変更予定は施設管理担当に確認する",
  },
  {
    step: 4,
    action: "資料を4区分で整理する",
    detail:
      "「契約」「請求」「使用実態」「設備」の4区分でフォルダを作成し、入手した資料を分類する。複数拠点の場合は拠点ごとに分ける",
    parallel: "不足資料を洗い出し、追加入手のアクションを設定する",
  },
];

export default function DocumentsNeededForElectricityContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金見直しで集めるべき資料一覧｜8種類の資料と入手先・優先順位"
        description="法人向け電気料金の見直しで必要な資料を8種類に整理しました。直近12ヶ月請求書・現行契約書・供給地点特定番号など、各資料の入手先・必要な理由・なくても進められるかを表で解説します。"
        url="https://simulator.eic-jp.org/documents-needed-for-electricity-contract-review"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金見直しで集めるべき資料一覧" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
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
          <li className="text-slate-700">見直しで集めるべき資料一覧</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金見直しで集めるべき資料一覧
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見直し実務が止まる原因の多くは、比較前に必要資料がそろっていないことです。このページでは、見直しに必要な8種類の資料について「入手先」「必要な理由」「なくても進められるか」を表で整理します。何から集めるかのフローも合わせて確認できます。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 必要資料一覧テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            必要資料一覧（8種類）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直しの各フェーズ（現状把握・比較見積・切替手続き）で必要になる資料を一覧化しました。「なくても進められるか」の列で、着手に必須か任意かを確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    資料名
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    入手先
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    必要な理由
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    なくても進められるか
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-3 font-medium text-slate-900 whitespace-nowrap align-top">
                      {row.name}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.source}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.reason}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.canProceedWithout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※見積書の確認項目は{" "}
            <Link
              href="/how-to-read-electricity-quote"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金見積書の見方
            </Link>
            を参照してください。
          </p>
        </section>

        {/* 資料の集め方フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            資料の集め方フロー：どの順番で何を集めるか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            資料収集は「すべてそろうまで動かない」よりも、着手できるものから段階的に集める方が実務は早く進みます。以下の順番で進めると、見直し実行のタイムラインを確保しやすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {collectionFlow.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-700 text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{step.action}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {step.detail}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      同時に：{step.parallel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 複数拠点の注意点 */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            複数拠点企業で追加でそろえたい資料
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多拠点法人では、拠点一覧と契約一覧を統一フォーマットで作成すると優先順位をつけやすくなります。拠点ごとの更新月と契約電力を一目で確認できる形が有効です。
          </p>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
            <li>・拠点名・住所・供給地点特定番号の一覧表</li>
            <li>・各拠点の契約満了日と解約申出期限の一覧</li>
            <li>・本社集約管理と現場保管の資料の保管場所と管理担当者</li>
            <li>・拠点別の年間電気料金概算（優先度判断に使用）</li>
          </ul>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較や社内説明に使いやすい整理方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            資料は「契約」「請求」「使用実態」「設備」の4区分で整理し、比較前提との対応関係を明確にします。社内説明では資料根拠を示すことで判断の透明性が上がります。切替後の確認にも使えるよう、初回請求確認に必要な資料も同時に残しておくと実務効率が高まります。
          </p>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="documents-needed-for-electricity-contract-review" terms={["燃料費調整額", "市場価格調整額", "基本料金", "電力量料金", "契約電力", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/5-minimum-checkpoints-for-electricity-contract-review",
              title: "法人の電力契約見直しで最低限確認したい5項目",
              description:
                "請求構造と契約条件の最低限チェックに進めます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description:
                "いつ本格比較に入るかの判断軸を整理できます。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人が電力契約を切り替えるときの注意点",
              description:
                "資料がそろった後の切替実行フェーズの論点です。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description:
                "比較対象の前提条件を、項目別に確認できます。",
            },
            {
              href: "/how-to-read-electricity-bills-for-review",
              title: "請求書のどこを見れば見直しのヒントが分かるのか",
              description:
                "収集した請求書の確認視点を具体化できます。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "資料準備後のプラン選択判断の参考として。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="必要資料をそろえたら、使い方ページで入力前提を確認し、比較ページで条件差を同じ土台で評価して見直し判断を進めます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/review-points", label: "見直しポイントの記事一覧へ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
