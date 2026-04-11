import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "問い合わせ前に社内で揃えたい情報｜見積依頼・相談の質を上げる準備";
const pageDescription =
  "電力会社への見積依頼・相談を行う前に社内で準備しておくべき情報を解説。必要なデータの収集方法、確認すべき契約条件、準備不足で起きる問題、問い合わせ先の選び方まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力会社 見積依頼 準備",
    "電気料金 相談 準備 社内",
    "電力契約 問い合わせ 必要書類",
    "電気料金 見積 事前準備",
    "電力切替 相談 情報収集",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/information-to-prepare-before-inquiry",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/information-to-prepare-before-inquiry",
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

const requiredInfo = [
  {
    category: "使用量データ",
    items: [
      "直近12か月（可能であれば24か月）の月別電力使用量（kWh）",
      "年間使用量の合計（kWh）",
      "最大月・最小月の使用量と、季節変動のパターン",
    ],
    source: "電気料金請求書またはスマートメーターデータ",
  },
  {
    category: "契約情報",
    items: [
      "現行の契約電力または最大需要電力（kW）",
      "現行の電力プラン名・料金形態（固定・市場連動など）",
      "現行の基本単価（円/kWh）と基本料金（円/kW）",
      "契約更新日・契約満了日",
      "中途解約条件・違約金の有無",
    ],
    source: "電力契約書または請求書",
  },
  {
    category: "施設・設備情報",
    items: [
      "供給電圧（特別高圧・高圧・低圧）",
      "施設の用途・業種",
      "施設の建物・フロア数、使用面積",
      "主要設備（空調・製造設備・冷蔵設備など）と稼働時間帯",
      "複数施設の場合は一覧と各施設の使用量",
    ],
    source: "施設管理資料・設備台帳",
  },
  {
    category: "要望・優先事項",
    items: [
      "価格重視か安定性（リスク回避）重視か",
      "再生可能エネルギー比率への要望",
      "契約期間の希望（短期か長期か）",
      "切替希望時期（現行契約更新タイミングとの整合）",
    ],
    source: "社内での検討・合意",
  },
];

const insufficientPreparationProblems = [
  "使用量データが手元にないため、正確な見積もりが出ない・比較ができない",
  "現行の契約更新日を把握していないため、見積を取っても切替タイミングを逃す",
  "解約条件を確認していないため、途中解約時の違約金が発生する",
  "要望が曖昧なため、提案された見積が自社のニーズに合わない",
  "複数施設がある場合に施設ごとの情報が揃っておらず、比較基準が揃わない",
];

export default function InformationToPrepareBeforeInquiryPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          問い合わせ前に社内で揃えたい情報
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社へ見積依頼・相談を行う際、事前に社内で必要な情報を揃えておくことで、見積の質が上がり、比較検討がしやすくなります。準備が不十分なまま問い合わせると、正確な見積が得られなかったり、比較の前提が揃わなかったりするリスクがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電力会社への問い合わせ・見積依頼の前に社内で確認・収集しておくべき情報を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積依頼前に揃えるべき4つのカテゴリの情報</li>
            <li>各情報の収集先（請求書・契約書・設備台帳など）</li>
            <li>準備不足で起きるよくある問題</li>
            <li>問い合わせの質を上げるための工夫</li>
            <li>複数施設がある場合の情報収集の進め方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            揃えておくべき4つのカテゴリの情報
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社への見積依頼・相談を効果的に進めるために、以下の4つのカテゴリで情報を事前に整理しておくことを推奨します。
          </p>
          <div className="mt-4 space-y-4">
            {requiredInfo.map((category) => (
              <div key={category.category} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{category.category}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-2 text-xs text-slate-500">収集先：{category.source}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            準備不足で起きるよくある問題
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社への問い合わせ前の準備が不十分だと、以下のような問題が起きやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {insufficientPreparationProblems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            使用量データの収集方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量データは見積の基礎になる最も重要な情報です。以下の方法で収集できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">請求書から収集</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                月次の電気料金請求書に「使用量（kWh）」が記載されている。直近12〜24か月分をExcel等にまとめると見積依頼時に提出しやすい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">現行電力会社への照会</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                過去の使用量データを現行の電力会社に問い合わせることで一括して取得できる場合がある。Webポータルから確認できるケースも多い。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">スマートメーターデータ</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                スマートメーターが導入済みの場合、30分単位の使用量データを取得できる場合がある。デマンドのピーク分析にも活用できる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">施設管理システム</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                BEMS（ビルエネルギー管理システム）を導入している場合は、エネルギー使用量データをシステムから出力できる場合がある。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の読み方については{" "}
            <Link
              href="/how-to-read-business-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金請求書の見方
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            問い合わせの質を上げるための工夫
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            情報を収集した上で、問い合わせ時に以下の工夫をすることで、有効な見積や提案を受けやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量データをExcelまたはCSV形式で用意して提出できるようにする</li>
            <li>「何を最優先にしたいか」（価格・安定性・再エネ比率など）を明確に伝える</li>
            <li>現行の契約プランと単価を示して「比較の基準」を伝える</li>
            <li>複数社に同じ条件で見積依頼することを事前に伝える（相見積もりの意図を示す）</li>
            <li>見積の有効期限を確認し、比較検討の時間を確保する</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターを活用して事前把握を強化する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積依頼の前に、シミュレーターで現行の電力契約条件でのリスクを把握しておくことで、問い合わせ時の論点が明確になります。「現状のリスクスコア・上振れリスク額」を把握した上で見積を依頼することで、「どのような条件でリスクを抑えたいか」を具体的に伝えやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "見積依頼に必要な使用量データを請求書から読み取る方法。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "受け取った見積書を正確に読み解くためのポイント。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電気料金見積もりを比較するポイント",
              description: "複数社の見積もりを適切に比較するための観点。",
            },
            {
              href: "/approval-document-key-points",
              title: "電力契約見直しの稟議書に入れたい論点整理",
              description: "見積依頼後に必要な稟議書の構成と論点。",
            },
            {
              href: "/internal-consensus-building-order",
              title: "契約見直しの社内合意を進める順番",
              description: "見積依頼から合意形成までの段取りの整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
          ]}
        />

        <ContentCta
          heading="準備した情報をシミュレーターで活用する"
          description="使用量データと現行単価が揃ったら、シミュレーターで電気料金の上振れリスクを試算できます。見積依頼前の事前把握として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="information-to-prepare-before-inquiry" />
      </div>
    </main>
  );
}
