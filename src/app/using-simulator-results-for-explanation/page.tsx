import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "シミュレーター結果を説明材料にする方法｜診断結果の読み方と活用";
const pageDescription =
  "電気料金リスクシミュレーターの診断結果を社内説明・稟議・経営報告に活用する方法を解説。結果の読み方、数値の意味、社内共有時のポイント、説明資料への落とし込み方まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 シミュレーター 活用",
    "電力コスト シミュレーション 説明",
    "電気料金 診断結果 社内共有",
    "電力契約 シミュレーション 稟議",
    "電気代 リスク 試算 説明材料",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/using-simulator-results-for-explanation",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/using-simulator-results-for-explanation",
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

const resultItems = [
  {
    label: "リスクスコア",
    detail:
      "現行の電力契約条件のもとで、電気料金の上振れリスクがどの程度高いかを示す指標。スコアが高いほど、燃料価格や市場価格の変動に対して電気料金が大きく影響を受けやすい状態にあることを示す。社内説明では「現状のリスクの高さ」を示す指標として活用できる。",
  },
  {
    label: "年間上振れリスク（金額）",
    detail:
      "現行の契約条件のもとで、燃料費調整額や市場価格が上昇した場合の年間電気料金の増加予測額。「最大で年間○万円増加する可能性がある」という形で示され、リスクの大きさを金額で把握できる。稟議書・経営報告の数値根拠として使いやすい。",
  },
  {
    label: "シナリオ別の影響額",
    detail:
      "「燃料費高騰シナリオ」「市場価格上昇シナリオ」「複合リスクシナリオ」など、複数の前提条件でシミュレーションした場合の影響額。シナリオの数が多いほど「幅の広い見通し」を提示でき、「最悪ケース」と「平常時」の差を説明材料にできる。",
  },
  {
    label: "プラン比較（固定 vs 市場連動）",
    detail:
      "現行のプランと、固定プランまたは市場連動プランに切り替えた場合の年間コスト比較。「見直しによる削減効果」を試算する際の参考値として活用できる。比較の前提条件（使用量・単価）が同じであることを確認して使う。",
  },
];

const usageCases = [
  {
    heading: "経営層・役員への報告",
    content:
      "シミュレーターのスコアと年間上振れリスク金額を使い、「現状のリスク水準」を端的に示す。「リスクスコアが○点で、最悪ケースで年間○万円の追加コストが発生しうる」という一言で、問題の大きさを伝えられる。詳細は別途資料に添付する。",
  },
  {
    heading: "稟議書への添付資料",
    content:
      "シミュレーターの診断結果を印刷・スクリーンショットして稟議書の添付資料として使用する。「削減効果の試算根拠」として、担当者の試算よりも客観的な根拠として機能する。使用した前提条件（月間使用量・契約電力・現行単価）を明記して添付する。",
  },
  {
    heading: "社内の問題提起資料",
    content:
      "電力契約の見直しを提案する際の「問題提起資料」として活用する。現状のリスクスコアと、見直し後の改善シナリオを並べることで「何もしないことのリスク」と「対策の効果」を比較できる資料になる。",
  },
  {
    heading: "電力会社との交渉材料",
    content:
      "シミュレーターで試算した年間コスト見込みを、電力会社との見積交渉時の参考値として活用する。「このシナリオでのリスクを抑えるプランを提案してほしい」という形で、交渉の方向性を示すことができる。",
  },
];

export default function UsingSimulatorResultsForExplanationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/internal-explanation" className="underline-offset-2 hover:underline">社内説明・稟議の進め方</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">シミュレーター結果の活用方法</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          シミュレーター結果を説明材料にする方法
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金リスクシミュレーターの診断結果は、社内での電力契約見直しの提案・稟議・経営報告において有効な説明材料として活用できます。ただし、診断結果の数値の意味を正確に理解した上で活用することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、シミュレーターの主要な出力結果の読み方と、社内説明への具体的な活用方法を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>シミュレーターの主要な出力結果の読み方</li>
            <li>各数値が意味することと活用シーン</li>
            <li>経営層説明・稟議書・社内報告への落とし込み方</li>
            <li>シミュレーター結果を使う際の注意点</li>
            <li>シミュレーターを使う前の準備</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターを使う前に準備すること
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターの診断結果を説明材料として活用するためには、正確な入力データを準備することが前提です。以下の情報を事前に揃えておくと、診断結果の信頼性が高まります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>直近12か月の月間電力使用量（kWh）</li>
            <li>現行の電力量料金単価（円/kWh）</li>
            <li>契約電力または最大需要電力（kW）</li>
            <li>現行のプラン種別（固定・市場連動・燃調ありなど）</li>
            <li>年間電気料金の合計額（請求書ベース）</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            これらのデータは請求書から読み取ることができます。確認方法は{" "}
            <Link
              href="/how-to-read-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金請求書の見方
            </Link>{" "}
            で解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            診断結果の主要項目と読み方
          </h2>
          <div className="mt-4 space-y-3">
            {resultItems.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            説明シーン別の活用方法
          </h2>
          <div className="mt-4 space-y-4">
            {usageCases.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター結果を使う際の注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーター結果を社内説明に活用する際、以下の点を説明材料の中に明記しておくと、審査者からの質問に対応しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>シミュレーションは一定の前提条件（使用量・単価・変動率）をもとにした試算であり、確定値ではない</li>
            <li>実際の電気料金は市場環境・契約条件・使用量の変化によって異なる可能性がある</li>
            <li>複数のシナリオを示す場合、各シナリオの前提を明記する</li>
            <li>シミュレーター結果は判断材料のひとつであり、最終的な意思決定は実際の見積もとに行う</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターの使い方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターの入力項目と結果の見方については、{" "}
            <Link
              href="/how-to"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              シミュレーターの使い方
            </Link>{" "}
            で詳しく解説しています。初めて使用する場合は、使い方ページを先に確認することをお勧めします。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するときのポイント",
              description: "シミュレーター結果を経営層説明に活用する方法。",
            },
            {
              href: "/approval-document-key-points",
              title: "電力契約見直しの稟議書に入れたい論点整理",
              description: "シミュレーター結果を稟議書の根拠資料として活用。",
            },
            {
              href: "/explaining-price-surge-risk",
              title: "値上がりリスクを社内で説明するときのポイント",
              description: "リスクを数値化して伝えるための構成と方法。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "シミュレーター入力に必要なデータを請求書から読み取る方法。",
            },
            {
              href: "/information-to-prepare-before-inquiry",
              title: "問い合わせ前に社内で揃えたい情報",
              description: "シミュレーターと見積依頼の準備を同時に進める方法。",
            },
            {
              href: "/how-to",
              title: "シミュレーターの使い方",
              description: "シミュレーターの入力方法と結果の見方を解説。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで診断してみる"
          description="現行の電力契約条件を入力することで、電気料金の上振れリスクと見直し効果を試算できます。社内説明の数値根拠として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
