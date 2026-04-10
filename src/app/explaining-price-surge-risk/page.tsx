import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "値上がりリスクを社内で説明するときのポイント｜数値で伝えるリスクの見せ方";
const pageDescription =
  "電気料金の値上がりリスクを社内で説明する際のポイントを解説。リスクの大きさを数値化する方法、シナリオ別の伝え方、感覚論から脱する説明の構成、経営層・財務担当への説明材料の作り方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 値上がり リスク 説明",
    "電力コスト リスク 社内 数値",
    "電気料金 高騰 リスク 伝え方",
    "電力調達 リスク 経営 説明",
    "電気料金上昇 財務影響 試算",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/explaining-price-surge-risk",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/explaining-price-surge-risk",
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

const riskNumerics = [
  {
    label: "現在の年間電気料金（実績）",
    detail:
      "直近12か月の電気料金合計を起点として示す。「現在は年間○○○万円」という実績ベースの数字を出発点にすることで、リスクの議論が具体的になる。",
  },
  {
    label: "単価の上昇パターン別の試算",
    detail:
      "「単価が10%上昇した場合＝年間○万円増」「単価が20%上昇した場合＝年間△万円増」という形で、複数のシナリオを試算する。幅を持った数値で示すことで、リスクの大きさを実感させやすくなる。",
  },
  {
    label: "損益への換算",
    detail:
      "電気料金の増加額を「利益への影響」に換算することで、経営層への説得力が増す。「年間○万円のコスト増は、利益率○%の場合、売上○万円分に相当する」という換算が有効。",
  },
  {
    label: "過去の実績ベースの変動幅",
    detail:
      "電気料金が過去5年間でどの程度変動したかを実績で示すことで、将来のリスクに対する説得力が高まる。「過去に○%の変動があった実績がある」という事実は、「起こりうるリスク」の説得力を強める。",
  },
];

const scenarioTypes = [
  {
    heading: "ベースシナリオ（現状維持）",
    content:
      "現在の電力市場・燃料価格の水準が概ね継続した場合の電気料金見通し。大きな変動がなければ現状水準が継続するという前提を示す。これを「比較の基準」として他のシナリオと対比させる。",
  },
  {
    heading: "上昇シナリオ（高騰リスク）",
    content:
      "燃料価格の上昇・再エネ賦課金の増加・市場価格の高騰など、上振れ要因が重なった場合の電気料金見通し。「最悪の場合、年間○万円の追加コストが発生する可能性がある」という形で上限を示すことで、リスクの「上振れ幅」を把握できる。シミュレーターを使った試算が有効。",
  },
  {
    heading: "対策後シナリオ（見直し効果）",
    content:
      "電力契約の見直しや設備対策を実施した場合の電気料金見通し。「対策を実施することで、年間○万円〜○万円のコスト削減が期待できる」という形で示す。「何もしない」場合と「対策をした」場合の比較が、経営判断の材料になる。",
  },
];

export default function ExplainingPriceSurgeRiskPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          値上がりリスクを社内で説明するときのポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「電気料金がこのまま上がり続けると経営に影響が出る可能性がある」という懸念を持っていても、それを社内で説明して理解・行動を促すことは容易ではありません。感覚論ではなく数値に基づいた説明が、関係者の意識と行動を変える起点になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電気料金の値上がりリスクを社内に効果的に伝えるための数値化の方法とシナリオ別の見せ方を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>リスクを数値化するための4つの観点</li>
            <li>シナリオ別（ベース・高騰・対策後）の見せ方</li>
            <li>損益への換算で経営層の理解を深める方法</li>
            <li>感覚論を脱するためのデータ活用</li>
            <li>シミュレーター結果の活用方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ「感覚論」ではなく「数値」が重要か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「電気代が高くなっている気がする」という感覚的な懸念では、経営層の優先事項には入りにくいのが現実です。数値化することで以下の効果が生まれます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>問題の大きさが具体的に把握できる</li>
            <li>「対策をする価値があるか」の判断基準が明確になる</li>
            <li>「どれくらいの予算・工数を投じてよいか」の判断ができる</li>
            <li>行動しなかった場合のコストが見える化される</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            リスクを数値化するための4つの観点
          </h2>
          <div className="mt-4 space-y-3">
            {riskNumerics.map((item) => (
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
            シナリオ別の見せ方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単一の数値よりも、「複数のシナリオ」で示すことで、リスクの幅と対策の価値を同時に伝えることができます。
          </p>
          <div className="mt-4 space-y-4">
            {scenarioTypes.map((item) => (
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
            シミュレーターを使ったリスク試算
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金リスクのシミュレーターを使うことで、現行契約条件のもとで燃料費調整額や市場価格が変動した場合の年間影響額を試算できます。試算結果は社内説明の数値根拠として活用できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額が○円/kWh上昇した場合の年間追加コスト</li>
            <li>市場価格が○%上昇した場合の年間追加コスト（市場連動プランの場合）</li>
            <li>固定プランへの切替による上振れリスクの抑制効果</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーター結果の読み方と活用方法は{" "}
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
            経営層・財務担当に刺さる伝え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金リスクを経営層・財務担当に伝える際は、以下のポイントを意識すると理解を得やすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">経営層向け</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>売上・利益への換算で事業インパクトを示す</li>
                <li>「今後3〜5年でどうなるか」の見通しを示す</li>
                <li>対策の費用対効果をシンプルに示す</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">財務担当向け</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>予算計画への影響（上振れリスクの金額・確率）を示す</li>
                <li>固定コストとして予算に組み込めるか否かを整理する</li>
                <li>対策後の予算安定化効果を示す</li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/using-simulator-results-for-explanation",
              title: "シミュレーター結果を説明材料にする方法",
              description: "診断結果の読み方とリスク説明への活用方法。",
            },
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するときのポイント",
              description: "コストとリスクを経営層に伝えるための構成。",
            },
            {
              href: "/explaining-bill-fluctuation-factors",
              title: "請求書の変動要因を社内で説明するときのポイント",
              description: "燃調・賦課金など変動要因の伝え方。",
            },
            {
              href: "/worst-case-electricity-cost-risk",
              title: "電力コストの最悪ケースのリスクとは",
              description: "最悪シナリオの具体的な数値と背景の整理。",
            },
            {
              href: "/how-long-business-electricity-price-surge-lasts",
              title: "法人の電気料金高騰はいつまで続くか",
              description: "高止まりの継続性と見通しの整理。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどの程度上がるのか",
              description: "上昇幅の実績と今後のシナリオ別試算。",
            },
          ]}
        />

        <ContentCta
          heading="リスクの大きさをシミュレーションで確認する"
          description="シミュレーターを使うことで、現行契約での電気料金上振れリスクを数値で把握できます。社内説明の数値根拠として活用できます。"
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
