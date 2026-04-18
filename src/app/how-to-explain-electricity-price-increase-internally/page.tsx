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

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle =
  "電気料金が上がったときの社内説明の進め方｜要因分解と報告テンプレート";
const pageDescription =
  "法人の電気料金が上がったとき、経営層や管理部門への社内説明をどう進めるかを整理。要因分解の切り分け方、報告に使えるテンプレート構成、よくある質問への回答例を解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 社内説明",
    "電気料金 値上がり 報告",
    "電気料金 要因分解",
    "法人 電気料金 経営報告",
    "電気料金上昇 説明 テンプレート",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-explain-electricity-price-increase-internally",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-explain-electricity-price-increase-internally",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faqRows = [
  {
    question: "なぜ使用量は変わらないのに高くなったのか",
    answer:
      "燃料費調整額の上昇・市場連動分の増加・補助金終了のいずれかを特定して説明する。数値で根拠を示すと説得力が増す。",
    linkHref: "/why-business-electricity-bills-rise-suddenly",
    linkLabel: "突然の値上がり要因を詳しく見る",
  },
  {
    question: "他社も同じくらい上がっているのか",
    answer:
      "契約条件が異なるため一概に比較できない。業種別・契約区分別の相場データで自社の位置づけを確認するのが実務的。",
    linkHref: "/business-electricity-price-benchmark",
    linkLabel: "業種別相場を確認する",
  },
  {
    question: "いつまで上がり続けるのか",
    answer:
      "費目により見通しが異なる。燃料費調整額は市況次第で変動し、再エネ賦課金・容量拠出金は構造的に増加傾向が続く見込み。",
    linkHref: "/when-will-business-electricity-prices-drop",
    linkLabel: "今後の見通しを読む",
  },
  {
    question: "何か対策はないのか",
    answer:
      "①契約メニューの見直し、②使用量削減（省エネ・デマンド管理）、③契約タイプ変更（固定型↔市場連動型）の3軸で整理して示す。",
    linkHref: "/compare",
    linkLabel: "料金メニューを比較する",
  },
  {
    question: "来期の予算はどうすればよいか",
    answer:
      "現状維持・上振れ・下振れの3シナリオを準備するのが実務的。過去の変動幅を参考に±10〜20%程度のバッファを見込む。",
    linkHref: "/how-much-business-electricity-prices-increase",
    linkLabel: "上昇幅の目安を確認する",
  },
];

const monthlyTableRows = [
  {
    item: "使用量（kWh）",
    current: "42,500",
    prev: "41,800",
    prevYear: "38,200",
    momDiff: "+1.7%",
    yoyDiff: "+11.3%",
    note: "夏季エアコン稼働増",
  },
  {
    item: "基本料金（円）",
    current: "185,000",
    prev: "185,000",
    prevYear: "178,000",
    momDiff: "0%",
    yoyDiff: "+3.9%",
    note: "デマンド値変更なし",
  },
  {
    item: "電力量料金（円）",
    current: "637,500",
    prev: "627,000",
    prevYear: "534,800",
    momDiff: "+1.7%",
    yoyDiff: "+19.2%",
    note: "単価改定の影響あり",
  },
  {
    item: "燃料費調整額（円）",
    current: "89,250",
    prev: "96,140",
    prevYear: "134,700",
    momDiff: "▲7.2%",
    yoyDiff: "▲33.7%",
    note: "原油価格軟化で低下",
  },
  {
    item: "再エネ賦課金（円）",
    current: "70,125",
    prev: "70,125",
    prevYear: "55,390",
    momDiff: "0%",
    yoyDiff: "+26.6%",
    note: "年度改定で単価上昇",
  },
  {
    item: "容量拠出金（転嫁分）（円）",
    current: "38,250",
    prev: "38,250",
    prevYear: "0",
    momDiff: "0%",
    yoyDiff: "新規",
    note: "2024年度より請求開始",
  },
  {
    item: "合計（税抜）（円）",
    current: "1,020,125",
    prev: "1,017,515",
    prevYear: "902,890",
    momDiff: "+0.3%",
    yoyDiff: "+12.9%",
    note: "",
  },
];

const tips = [
  {
    num: "1",
    heading: "結論から先に示す",
    body: "「前年同月比＋○万円（＋○%）」という数字を冒頭に置く。経営層は要因よりも先に規模感を知りたい。",
  },
  {
    num: "2",
    heading: "社内要因と社外要因を明確に分ける",
    body: "使用量や設備変更は社内要因、燃調費・再エネ賦課金・補助金は社外（市場・制度）要因。混在させると責任の所在が不明瞭になる。",
  },
  {
    num: "3",
    heading: "前年同月比を軸にする",
    body: "電気料金は季節変動が大きく、前月比だけでは誤解を生みやすい。前年同月比を主軸にして、前月比は補足として添える。",
  },
  {
    num: "4",
    heading: "対応可能な費目と不可能な費目を区別する",
    body: "「何かできるか」を必ず問われる。省エネ・デマンド管理・契約見直しで削減できる費目と、制度・市場要因で削減困難な費目を事前に整理しておく。",
  },
  {
    num: "5",
    heading: "来期予算の仮定条件を明示する",
    body: "「燃調費は現状水準を仮定」「再エネ賦課金は昨年度実績を使用」など、予算計上の根拠を添えることで後から検証できる説明になる。",
  },
];

export default function HowToExplainElectricityPriceIncreaseInternallyPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気料金が上がったときの社内説明の進め方｜要因分解と報告テンプレート"
        description="法人の電気料金が上がったとき、経営層や管理部門への社内説明をどう進めるかを整理。要因分解の切り分け方、報告に使えるテンプレート構成、よくある質問への回答例を解説。"
        url="https://simulator.eic-jp.org/how-to-explain-electricity-price-increase-internally"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気料金が上がったときの社内説明の進め方" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500">
        <Link href="/" className="hover:text-sky-700">
          ホーム
        </Link>
        <span>/</span>
        <Link
          href="/articles/price-increase"
          className="hover:text-sky-700"
        >
          料金が上がる理由を知る
        </Link>
        <span>/</span>
        <span className="text-slate-700">値上がりの社内説明</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金が上がったときの社内説明の進め方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金が上昇したとき、経営層や管理部門への報告は「なぜ上がったのか」「自社でできることはあるのか」の2点を明確にすることが核心です。このページでは、要因分解の切り分け方、報告書の構成例、よくある質問への回答例、月次比較フォーマットを整理します。
        </p>
      </header>

      {/* H2: なぜ社内説明が難しいのか */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          なぜ社内説明が難しいのか
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              複数要因が同時に動く
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              電気料金は使用量・基本料金・燃料費調整額・再エネ賦課金・容量拠出金・補助金など多数の費目で構成されています。ある月に総額が上がったとしても、それが「どの費目の増加によるものか」を特定しないと正確な説明ができません。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              使用量と単価の切り分けが直感的でない
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              「先月より高い」という事実だけでは、使用量が増えたのか単価が上がったのかが分かりません。使用量（kWh）と単価（円/kWh）を分けて示すことで、省エネで対応できる部分と市場・制度要因で対応困難な部分が明確になります。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              燃調費・再エネ賦課金は社外要因
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              燃料費調整額は液化天然ガス（LNG）や原油の市況に連動し、再エネ賦課金・容量拠出金は政府の制度で年度ごとに単価が変わります。これらは自社の努力で削減できない費目であることを明示することが、説明の信頼性を高めます。
            </p>
          </div>
        </div>
      </section>

      {/* H2: 要因分解の基本フレーム */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          要因分解の基本フレーム
        </h2>
        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          下表を埋めることで、値上がりの主因がどの費目にあるかを一覧で把握できます。前年同月比の列を必ず記入し、季節要因と構造的変化を区別してください。
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  要因カテゴリ
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  確認項目
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  今月の変化
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  前年同月比
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  社内で対応可能か
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {[
                {
                  category: "使用量",
                  item: "月間使用量（kWh）",
                  response: "可能（省エネ・運用改善）",
                },
                {
                  category: "基本料金",
                  item: "契約電力・基本料金単価",
                  response: "一部可能（デマンド管理）",
                },
                {
                  category: "電力量料金",
                  item: "電力量料金単価",
                  response: "契約見直しで対応",
                },
                {
                  category: "燃料費調整額",
                  item: "燃調単価（円/kWh）",
                  response: "不可（市場要因）",
                },
                {
                  category: "市場価格調整額",
                  item: "市場連動分",
                  response: "契約タイプ変更で対応",
                },
                {
                  category: "再エネ賦課金",
                  item: "賦課金単価",
                  response: "不可（制度要因）",
                },
                {
                  category: "容量拠出金",
                  item: "転嫁単価",
                  response: "不可（制度要因）",
                },
                {
                  category: "補助金",
                  item: "適用有無・金額",
                  response: "不可（政策要因）",
                },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-medium text-slate-800">
                    {row.category}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{row.item}</td>
                  <td className="px-4 py-3 text-slate-400">記入欄</td>
                  <td className="px-4 py-3 text-slate-400">記入欄</td>
                  <td className="px-4 py-3 text-slate-700">{row.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          ※ 市場価格調整額は一部の市場連動型契約に存在する費目。固定型契約には含まれない場合があります。
        </p>
      </section>

      {/* H2: 報告書の構成例 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">報告書の構成例</h2>
        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          社内報告書は3ステップで構成するとシンプルかつ説明しやすくなります。
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
              1
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              結論（冒頭1行）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              「前年同月比＋○万円（＋○%）」という数値を最初に示します。経営層が最初に知りたいのは規模感です。要因よりも先に結論を置くことで、その後の説明が理解されやすくなります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
              2
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              要因分解（表で示す）
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              上述の要因分解テーブルを使い、費目ごとの増減額を示します。社内要因（使用量増加など）と社外要因（燃調費・制度変更）を明確に区別し、それぞれの寄与額を記載します。
            </p>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
              3
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              今後の見通しと対応案
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              費目別に「来期も継続するか」「削減の余地があるか」を整理します。対応案として、省エネ・デマンド管理・契約見直しの3軸で具体的なアクションを提示します。
            </p>
          </div>
        </div>
      </section>

      {/* H2: 経営層からよくある質問と回答例 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          経営層からよくある質問と回答例
        </h2>
        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          報告後に受けやすい質問を事前に想定しておくと、説明がスムーズになります。
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  質問
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  回答の方向性
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  参考ページ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {faqRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="px-4 py-3 font-medium text-slate-800 align-top">
                    {row.question}
                  </td>
                  <td className="px-4 py-3 text-slate-700 align-top">
                    {row.answer}
                  </td>
                  <td className="px-4 py-3 align-top">
                    <Link
                      href={row.linkHref}
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      {row.linkLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* H2: 月次報告に使える比較フォーマット */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          月次報告に使える比較フォーマット
        </h2>
        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          下表は高圧契約・月間使用量約42,500kWhの事業所を例に作成した記入例です。実際の請求書から数値を転記してご活用ください。
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 rounded-xl border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  費目
                </th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">
                  当月
                </th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">
                  前月
                </th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">
                  前年同月
                </th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">
                  前月比
                </th>
                <th className="px-4 py-3 text-right font-semibold text-slate-700">
                  前年比
                </th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">
                  要因メモ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {monthlyTableRows.map((row, i) => (
                <tr
                  key={i}
                  className={
                    i === monthlyTableRows.length - 1
                      ? "bg-sky-50 font-semibold"
                      : i % 2 === 0
                      ? "bg-white"
                      : "bg-slate-50"
                  }
                >
                  <td className="px-4 py-3 text-slate-800">{row.item}</td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    {row.current}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    {row.prev}
                  </td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    {row.prevYear}
                  </td>
                  <td
                    className={`px-4 py-3 text-right ${
                      row.momDiff.startsWith("▲")
                        ? "text-sky-700"
                        : row.momDiff === "0%"
                        ? "text-slate-500"
                        : "text-red-600"
                    }`}
                  >
                    {row.momDiff}
                  </td>
                  <td
                    className={`px-4 py-3 text-right ${
                      row.yoyDiff.startsWith("▲")
                        ? "text-sky-700"
                        : row.yoyDiff === "新規"
                        ? "text-orange-600"
                        : row.yoyDiff === "0%"
                        ? "text-slate-500"
                        : "text-red-600"
                    }`}
                  >
                    {row.yoyDiff}
                  </td>
                  <td className="px-4 py-3 text-slate-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">
          ※ 数値はイメージ例です。実際の料金は契約内容・地域・事業者によって異なります。
        </p>
      </section>

      {/* H2: 社内説明を円滑にする5つのポイント */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          社内説明を円滑にする5つのポイント
        </h2>
        <div className="space-y-3">
          {tips.map((tip) => (
            <div
              key={tip.num}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex-shrink-0">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {tip.num}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {tip.heading}
                </h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  {tip.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
          <li>
            ・電気料金の値上がり説明は「結論→要因分解→対応案」の3ステップで構成する
          </li>
          <li>
            ・社内要因（使用量・デマンド）と社外要因（燃調費・制度）を明確に分ける
          </li>
          <li>
            ・月次報告には前年同月比を軸にした費目別比較表を活用する
          </li>
          <li>
            ・「何か対策はないか」という問いには省エネ・デマンド管理・契約見直しの3軸で回答する
          </li>
          <li>
            ・来期予算は仮定条件を明示した3シナリオ（現状維持・上振れ・下振れ）で提示する
          </li>
        </ul>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="how-to-explain-electricity-price-increase-internally" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/why-business-electricity-bills-rise-suddenly",
              title: "法人の電気料金が突然上がる理由",
              description:
                "燃調費・市場連動・補助金終了など、突発的な値上がり要因を費目別に解説します。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどのくらい上がるのか",
              description:
                "契約区分・業種別の上昇幅の目安と、来期予算の組み方を整理します。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "業種別の電気料金相場",
              description:
                "自社の電気料金が業種平均と比べて高いか低いかを確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description:
                "費目別の確認ポイントと、請求書から要因分解につなげる方法を解説します。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description:
                "固定型・市場連動型など契約タイプ別のリスクと特徴を比較できます。",
            },
            {
              href: "/articles/price-increase",
              title: "料金が上がる理由を知る（カテゴリ一覧）",
              description:
                "電気料金上昇に関するすべての解説ページをまとめています。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "説明資料の根拠となる料金推移データを確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="要因を可視化してシミュレーションする"
          description="自社の電気料金が今後どのくらい上昇するか、費目別のリスクをシミュレーターで確認しましょう。契約メニューの比較診断も合わせてご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
