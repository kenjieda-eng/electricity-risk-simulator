import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "最終保障供給を社内説明するときのポイント｜なぜ料金が高いのかの伝え方";
const pageDescription =
  "最終保障供給に移行した、または移行可能性がある際の社内説明のポイントを解説。なぜ料金が高いのか、制度の位置づけ、早期脱出の必要性を経営層・担当者に伝える方法を説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 社内説明",
    "最終保障供給 料金 高い 理由",
    "電力契約 失効 経営層 報告",
    "最終保障供給 稟議",
    "電力 緊急 社内 説明",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/last-resort-supply-internal-explanation",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-internal-explanation",
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

const explanationPoints = [
  {
    question: "なぜ料金が通常より高いのか",
    answer:
      "最終保障供給は「緊急避難的な供給」として制度設計されており、供給側（一般送配電事業者）が追加的なコストやリスクを負担する代わりに、料金水準が高く設定されています。これは制度の仕組み上、やむを得ないものです。「相手が値上げをしてきた」という問題ではありません。",
  },
  {
    question: "いつまでこの料金が続くのか",
    answer:
      "最終保障供給には供給期間の上限（通常9カ月程度）があります。この期間内に代替の電力会社と契約を結ぶ必要があります。早期に代替先を確保できれば、高い料金が続く期間を最小限にできます。",
  },
  {
    question: "なぜこのような事態になったのか",
    answer:
      "最終保障供給に移行する原因は主に「契約先の電力会社の倒産・事業撤退」「契約期間満了時の更新失敗」「解除条件の発動」などです。担当者が故意に起こした問題ではなく、電力自由化制度下で発生し得るリスクです。",
  },
  {
    question: "今後どう対処するのか",
    answer:
      "代替の電力会社・新電力との交渉を直ちに開始しています。供給期間の上限である○カ月以内を目標に通常契約への切替を完了させます。見積比較を行い、コスト最小化と供給安定性を両立できる先を選定します。",
  },
];

export default function LastResortSupplyInternalExplanationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給を社内説明するときのポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社の倒産や契約失効などで最終保障供給に切り替わった場合、または切り替わる可能性が生じた場合、担当者は経営層や関係部門に対して速やかに状況を説明する必要があります。しかし「最終保障供給」は一般的にはなじみの薄い制度であり、なぜ料金が高いのか、いつまで続くのか、どう対処するのかを分かりやすく伝えることが求められます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、社内説明でよく出る疑問とその回答の考え方、説明の構成方法を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>社内で聞かれる典型的な疑問とその回答のポイント</li>
            <li>なぜ料金が高いのかの説明方法</li>
            <li>経営層への報告に含めるべき情報</li>
            <li>早期脱出に向けた行動計画の説明方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給とは何か：一言で説明するなら
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内説明の冒頭では、最終保障供給を一言で説明することが重要です。以下のような表現が分かりやすく伝わりやすいです。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">社内説明例（概要説明）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              「最終保障供給とは、電力会社との通常契約が何らかの理由で失効した際に、電力の供給を一定期間継続するための制度です。電力自由化後のセーフティネットとして法律で定められており、一般送配電事業者（旧来の地域電力会社）が担当します。料金は通常契約より高く設定されており、あくまでも緊急避難的な利用が前提です。」
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の基本的な仕組みは{" "}
            <Link
              href="/last-resort-supply"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              最終保障供給とは
            </Link>
            {" "}で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内でよく出る疑問と回答のポイント
          </h2>
          <div className="mt-3 space-y-3">
            {explanationPoints.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">Q：{item.question}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">A：{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層への報告に含めるべき情報
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層（役員・CFO・事業責任者）への報告では、以下の情報を明確に伝えることが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">現在の状況：</span>
              最終保障供給に移行した（または移行可能性がある）という事実と、その原因。
            </li>
            <li>
              <span className="font-semibold text-slate-900">財務的な影響：</span>
              現在の料金と最終保障供給の料金の差額、月次・年次での追加コスト見込み。
            </li>
            <li>
              <span className="font-semibold text-slate-900">供給期間の上限：</span>
              最終保障供給がいつまで利用できるか（通常9カ月程度）と、その期限。
            </li>
            <li>
              <span className="font-semibold text-slate-900">対処方針と目標期日：</span>
              代替先との交渉を○月○日までに完了させる、という具体的な目標。
            </li>
            <li>
              <span className="font-semibold text-slate-900">意思決定が必要な事項：</span>
              複数候補の中から選択する場合の判断基準の確認、決裁権限の確認。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「なぜこうなったのか」への回答の準備
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層から「なぜ事前に気づかなかったのか」「担当者の管理不足ではないか」という指摘がある場合に備えて、以下の点を整理しておきます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">電力自由化制度上のリスクであること：</span>
              小売電力市場の自由化以降、電力会社の倒産・撤退は複数発生しており、制度上起こりうるリスクとして認識されています。
            </li>
            <li>
              <span className="font-semibold text-slate-900">事前の察知が難しい場合があること：</span>
              電力会社が突然の事業停止を発表するケースでは、事前察知には限界があります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">今後の再発防止策：</span>
              契約先の定期的なモニタリング、代替候補のリスト作成、更新タイミングでの複数社見積など、今後の管理強化策を提示します。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            早期脱出に向けた行動計画の提示
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内説明の最後に、具体的な行動計画を提示することで、経営層に「問題に対処している」という安心感を与えることができます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">行動計画のサンプル構成</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>○月○日まで：代替候補の電力会社・新電力のリストアップ</li>
              <li>○月○日まで：使用量データを各社に提供し、見積を要求</li>
              <li>○月○日まで：見積比較表の作成・上司への報告</li>
              <li>○月○日まで：最終候補との交渉・契約条件の確定</li>
              <li>○月○日まで：切替手続き完了・最終保障供給からの脱出</li>
            </ol>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の基本的な仕組みと概要（社内説明の前提知識）。",
            },
            {
              href: "/last-resort-supply-emergency-response",
              title: "最終保障供給に入りそうなときの対応手順",
              description: "事前察知から切替完了までの対応フロー。",
            },
            {
              href: "/last-resort-supply-comparison-positioning",
              title: "最終保障供給を比較検討の中でどう位置づけるか",
              description: "通常契約との判断基準と比較の考え方。",
            },
            {
              href: "/last-resort-supply-extra-high-voltage",
              title: "特別高圧で最終保障供給を使うときの注意点",
              description: "大規模需要家での影響額と早期脱出の重要性。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気料金見直しを社内で説明するときのポイント",
              description: "通常の契約見直し時の社内説明方法。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "最終保障供給リスクを踏まえた契約管理の確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="代替契約の候補をシミュレーターで試算する"
          description="最終保障供給からの脱出候補となる電力プランの年間コストをシミュレーターで比較確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
  );
}
