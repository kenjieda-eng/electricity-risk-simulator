import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "最終保障供給を社内説明するときのポイント｜比較表・報告テンプレート・FAQ";
const pageDescription =
  "最終保障供給に移行した際の社内説明のポイントを解説。通常契約との比較表、経営層への3ステップ報告テンプレート、よくある質問と回答を掲載します。";

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

const faqItems = [
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
  {
    question: "再発を防ぐためにどうするか",
    answer:
      "契約先の定期的な財務モニタリング、更新半年前からの複数社見積収集、代替候補リストの常時更新という3点を管理体制に組み込みます。担当者交代時の引き継ぎ手順も整備します。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の制度・件数データ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "最終保障供給制度の解説・法令根拠" },
];

export default function LastResortSupplyInternalExplanationPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/last-resort-supply-internal-explanation"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "社内説明のポイント" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給の社内説明</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
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
            <li>通常契約と最終保障供給の比較表（社内説明用）</li>
            <li>経営層への3ステップ報告テンプレート</li>
            <li>社内でよく出る質問と回答（FAQ 5問）</li>
            <li>早期脱出に向けた行動計画の提示方法</li>
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

        {/* Table 1: 社内説明用比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内説明で使える最終保障供給 vs 通常契約の比較表
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層や関係部門への説明資料として、そのまま使える比較表です。「説明のポイント」欄の言い回しを参考にしてください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">比較項目</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">通常契約</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">最終保障供給</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">説明のポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">料金水準</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">契約ベース</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">通常比+20〜60%高い</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">「割高だが供給は継続」</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">契約期間</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">1〜3年</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">原則1年以内の切替前提</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">「一時的な措置」</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">選択の自由度</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">複数社から選択</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">送配電事業者が指定</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">「選べない」</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">料金の予見性</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">契約条件で見通せる</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">市場環境で変動しやすい</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">「予算超過リスク」</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">切替に必要な期間</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">1〜3ヶ月</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">最終保障→通常は1〜2ヶ月</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">「早期離脱が基本」</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 2: 経営層への報告テンプレート */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層への報告テンプレート（3ステップ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            口頭報告・メール・稟議資料いずれの場合も、以下の3ステップで構成すると伝わりやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">ステップ</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">内容</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">伝えるべきポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-sky-700">Step 1：現状説明</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">最終保障供給に入った／入りそうな状況</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">なぜこうなったか（新電力撤退／契約切れ）</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-sky-700">Step 2：コスト影響</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">月額・年額の増加額</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">通常契約との差額を具体的に</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-sky-700">Step 3：対応策</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">切替先の候補と見積取得状況</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">早期離脱のスケジュール</td>
                </tr>
              </tbody>
            </table>
          </div>
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

        {/* FAQ Table */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内でよく出る質問と回答（FAQ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層・関係部門から寄せられることが多い5つの質問と、回答のポイントを整理しました。
          </p>
          <div className="mt-4 space-y-3">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Q{index + 1}：{item.question}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">A：{item.answer}</p>
              </div>
            ))}
          </div>
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

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2026-04-10" />

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
    </>
  );
}
