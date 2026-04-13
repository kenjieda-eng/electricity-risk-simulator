import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "経営層向けに電力契約見直しを説明するときのポイント｜コストとリスクの伝え方";
const pageDescription =
  "電力契約の見直しを経営層・役員に説明する際のポイントを解説。コスト削減の数値化、リスクの伝え方、意思決定を促す説明構成、よくある質問への対応方法まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 経営層 説明",
    "電気料金 上昇 役員 報告",
    "電力コスト 削減 経営判断",
    "電力契約 稟議 経営承認",
    "電気料金リスク 経営 説明",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/explaining-to-executives",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/explaining-to-executives",
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

const executivesConcerns = [
  {
    label: "コストへの影響の大きさ",
    detail:
      "経営層は「電気料金が年間でどの程度コストを押し上げているか」「このまま放置すると今後どうなるか」を知りたがっている。具体的な金額・割合で伝えることが重要。",
  },
  {
    label: "切替のリスクと安全性",
    detail:
      "「今の電力会社から切り替えて問題ないのか」「サービス品質や供給安定性に影響はないか」という懸念が多い。電力系統の仕組みを踏まえた上で、切替後も品質は変わらない旨を端的に伝える。",
  },
  {
    label: "意思決定に必要な期間と手続き",
    detail:
      "「いつまでに決める必要があるか」「手続きにどれだけ工数がかかるか」は経営層が知りたいポイント。契約更新時期・手続き期限を明示すると意思決定がしやすくなる。",
  },
  {
    label: "失敗した場合のリスク",
    detail:
      "「もし変えて高くなったらどうするのか」という逆方向のリスクへの懸念も多い。固定プランの選択・契約条件の確認・解約条件の把握など、下振れリスクを抑える措置を説明できるようにしておく。",
  },
];

const explanationStructure = [
  {
    step: "1. 現状の問題提起",
    content:
      "「現在の電気料金は○○万円/年で、前年比○%増加しています。このまま推移すると年間△△万円規模のコスト増になる見込みです」という形で、現状の数値を示す。感覚論ではなく数字で問題の大きさを伝えることが経営層への説明の基本。",
  },
  {
    step: "2. リスクの背景と外部要因の説明",
    content:
      "電気料金の上昇は燃料費・再エネ賦課金・容量拠出金など複数の要因による構造的な変化であることを説明する。「単なる一時的な上昇ではない」ことを伝えることで、見直しの必要性の理解が深まる。",
  },
  {
    step: "3. 見直しによる改善余地の提示",
    content:
      "「プランの見直し・切替によって年間○○万円程度の削減が見込める」という試算を示す。シミュレーター結果や見積比較の数値を根拠として示すと説明の信頼性が高まる。",
  },
  {
    step: "4. 意思決定のタイムラインと必要な承認",
    content:
      "「契約更新期限が○月○日のため、○月末までに意思決定が必要です」「今月中に稟議承認をいただければ次の更新タイミングに切替が可能です」という形で、行動を促す期限を明示する。",
  },
  {
    step: "5. リスクへの対処の説明",
    content:
      "切替後に料金が上昇するリスクへの対処（固定プランの選択・複数年契約の条件確認など）を説明する。「最悪の場合どうなるか」を先に答えておくことで経営層の懸念を事前に解消できる。",
  },
];

export default function ExplainingToExecutivesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/internal-explanation" className="underline-offset-2 hover:underline">社内説明・稟議の進め方</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">経営層への説明のポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          経営層向けに電力契約見直しを説明するときのポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは、担当者レベルでは必要性が明確でも、経営層・役員への説明で承認を得ることが壁になるケースが少なくありません。経営層は担当者と異なる観点から意思決定をするため、説明の構成と伝え方を工夫することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電力契約見直しを経営層に説明する際の効果的なポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>経営層が電力契約見直しで気にする主な観点</li>
            <li>説明の基本構成（5ステップ）</li>
            <li>数値での説明とシミュレーター結果の活用方法</li>
            <li>よくある質問と返答の準備</li>
            <li>稟議書との連携のしかた</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層が気にする主な観点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層への説明を効果的に行うには、「担当者が説明したい内容」ではなく「経営層が知りたい内容」に合わせることが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {executivesConcerns.map((item) => (
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
            経営層への説明の基本構成
          </h2>
          <div className="mt-4 space-y-4">
            {explanationStructure.map((item) => (
              <div key={item.step}>
                <h3 className="text-lg font-semibold text-slate-900">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            数値で伝えることの重要性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層への説明で最も効果的なのは、「感覚」ではなく「数値」で伝えることです。特に以下の数値を準備しておくと説明が具体的になります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行の年間電気料金と前年比増加額・増加率</li>
            <li>見直しで期待できる年間削減額（試算）</li>
            <li>削減額が損益に占める割合（利益への影響換算）</li>
            <li>見直しをしない場合の3〜5年後の想定コスト増（シナリオ別）</li>
            <li>切替に伴う費用・工数（ゼロに近い場合はその旨も明示）</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーター結果を活用することで、これらの数値を準備しやすくなります。シミュレーター結果の読み方と活用方法は{" "}
            <Link
              href="/using-simulator-results-for-explanation"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              シミュレーター結果を説明材料にする方法
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            よくある質問と返答の準備
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層からの質問として多いものを事前に想定し、返答を準備しておくことで説明がスムーズになります。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">「切り替えて問題ないのか？」</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">電力の品質・安定性は電力会社を変えても変わりません。電力は送配電会社の設備を通じて届くためです。契約する小売電力会社が変わるだけで、電線や電力の品質は同一の設備が維持します。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">「なぜ今なのか？」</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">現行契約の更新時期が○月であり、この時期を逃すと次の見直し機会まで○年待つことになります。また電力コストの上昇傾向が続く中で、対応が遅れるほどコスト増を受け続けることになります。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">「見直したら上がることはないか？」</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">固定プランを選択することで価格変動リスクを抑えることができます。また複数の見積を比較して、現行より確実に低い条件のものを選定する方針で進める予定です。</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            稟議書との連携
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層への口頭・スライド説明と並行して、稟議書に必要な情報を整理しておくことで、承認プロセスをスムーズに進められます。稟議書に含めるべき論点については{" "}
            <Link
              href="/approval-document-key-points"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電力契約見直しの稟議書に入れたい論点整理
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/approval-document-key-points",
              title: "電力契約見直しの稟議書に入れたい論点整理",
              description: "承認を得やすい稟議書の構成と記載内容。",
            },
            {
              href: "/using-simulator-results-for-explanation",
              title: "シミュレーター結果を説明材料にする方法",
              description: "診断結果の読み方と経営層への活用方法。",
            },
            {
              href: "/explaining-price-surge-risk",
              title: "値上がりリスクを社内で説明するときのポイント",
              description: "数値でリスクを伝えるための構成と見せ方。",
            },
            {
              href: "/internal-consensus-building-order",
              title: "契約見直しの社内合意を進める順番",
              description: "関係者の巻き込み方と段取りの整理。",
            },
            {
              href: "/explaining-fixed-vs-market-to-management",
              title: "固定と市場連動の比較を経営層に説明するときのポイント",
              description: "判断材料の整理と経営層向けの伝え方。",
            },
            {
              href: "/sharing-comparison-table-internally",
              title: "比較表を社内共有するときのポイント",
              description: "わかりやすい比較表の作り方と共有方法。",
            },
          ]}
        />

        <ContentCta
          heading="説明材料となる数値を準備する"
          description="シミュレーターを使うことで、現行契約の料金上振れリスクや見直し効果を試算できます。経営層への説明に使える数値の準備に活用できます。"
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
