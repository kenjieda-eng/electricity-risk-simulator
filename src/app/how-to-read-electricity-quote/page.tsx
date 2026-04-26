import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const pageTitle = "法人向け電気料金見積書の見方｜比較時に確認したい項目と注意点";
const pageDescription =
  "法人向け電気料金見積書の見方を解説。基本料金・電力量料金・燃調費・市場連動の確認ポイントから、3社比較テンプレート、契約条件の見落とし防止まで、見積比較の実務を網羅的に整理します。";
const publishedDate = "2026-03-01";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 見積書 見方 法人",
    "新電力 見積 比較 法人",
    "電力会社 見積書 確認ポイント",
    "法人 電気料金 見積",
    "電力見積 比較 注意点",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-quote",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-quote",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/basic",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金見積書の見方",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "電気料金の見積書はどこに注目して比較すべきですか？",
    answer:
      "5 項目を必ず比較してください: ①基本料金(円/kW・月)、②電力量料金単価(円/kWh、時間帯別の場合は加重平均)、③燃料費調整額の単価と上限有無、④再エネ賦課金(全社共通)、⑤契約期間と解約違約金。これらを Excel に並べて単価比較すると、各社の本質的な違いが見えます。",
  },
  {
    question: "見積書の単価が安く見えても実際の請求が高くなることはありますか？",
    answer:
      "あります。よくあるケースは: ①燃料費調整額に上限がない(急騰時に大きく上乗せ)、②深夜・休日割引が自社の操業パターンと合わない、③契約電力(kW)が高めに設定されており基本料金が割高、④付帯サービス料金(請求書送付料・支払手数料)が別途請求される、などです。年間総額試算で必ず確認してください。",
  },
  {
    question: "見積書に書かれている「契約電力」とは何ですか？どう決まりますか？",
    answer:
      "契約電力は最大需要 kW を指し、基本料金算出の基準となります。高圧契約の場合、過去 12 か月の最大デマンド値(30 分平均)から自動計算されます。一度上昇すると 12 か月間は下がらないため、特定月の冷暖房ピークで急上昇すると基本料金が高止まりするリスクがあります。デマンド管理機器の導入で抑制可能です。",
  },
  {
    question: "見積書を依頼する際、複数社に同条件で依頼するコツはありますか？",
    answer:
      "「電気料金見積依頼書」テンプレを統一して使うのがおすすめです。記載項目: ①供給開始希望日、②契約期間、③契約電力 kW、④過去 12 か月の使用量 kWh(月別)、⑤希望する付帯サービス(CO2 ゼロ等)、⑥燃料費調整額の上限有無、です。本サイトのダウンロードページに無料テンプレを用意しています。",
  },
  {
    question: "見積書をもらってから契約まで、通常どれくらいの期間がかかりますか？",
    answer:
      "標準は 1〜2 か月です。①見積依頼〜受領(2〜3 週間)、②社内決裁(2〜4 週間)、③契約締結〜供給開始(1〜2 か月)の合計です。年度切替期(4 月開始)を狙う場合、前年 12 月までに動き始めるのが安全です。緊急切替の場合は最短 1 か月で可能ですが、選択肢が限定されコスト削減幅が小さくなる傾向です。",
  },
];


const quotationItems = [
  {
    heading: "基本料金",
    points: [
      "契約電力（kW）×基本料金単価で算出される。見積書によっては力率割引を含んだ金額で表示されている場合がある。",
      "契約電力の設定が現行と異なる場合、単純な単価比較ができない点に注意する。",
      "基本料金単価が安くても、電力量料金側で調整されているケースがあるため、総額で確認する。",
    ],
  },
  {
    heading: "電力量料金",
    points: [
      "使用量（kWh）×電力量料金単価で算出される。時間帯別（昼間・夜間など）で単価が異なるプランもある。",
      "見積書で提示される単価が「燃料費調整額込み」か「別途」かを確認する。込みの場合は見た目の単価が高く見えることがある。",
      "使用量が季節で大きく変動する施設では、年間平均ではなく月別の試算で比較するほうが正確になる。",
    ],
  },
  {
    heading: "燃料費調整額",
    points: [
      "見積書に燃料費調整額がどう反映されているかは重要な比較ポイント。「単価に含む」「別途加算」「独自算定」など扱いが異なる。",
      "上限の有無や算定式が異なる場合、単価が安く見えても請求時に差が出ることがある。",
      "旧一般電気事業者（大手電力）の規制料金では上限が設定されているが、新電力では上限がないケースもある。",
    ],
  },
  {
    heading: "再エネ賦課金",
    points: [
      "全需要家に一律適用される制度負担。年度ごとに単価が改定される。",
      "見積書に含まれていない場合でも、実際の請求では加算されるため、比較時は「再エネ賦課金を除いた部分」と「含めた総額」の両方で確認するとよい。",
    ],
  },
  {
    heading: "市場価格調整額・電源調達調整費",
    points: [
      "市場連動型プランの場合、JEPX（日本卸電力取引所）のスポット価格に連動する調整額が加算される。",
      "見積書では「電源調達調整費」「市場連動調整額」など名称が異なる場合がある。有無そのものを確認することが最初のステップ。",
      "この項目の有無が、固定プランと市場連動プランの実質的な違いとなる。",
    ],
  },
  {
    heading: "容量拠出金",
    points: [
      "2024年度から始まった制度負担。請求書や見積書への反映方法は電力会社によって異なる。",
      "見積書に「容量拠出金相当額」として明記される場合と、電力量料金に含まれている場合がある。",
      "比較時には、この費用が見積単価に含まれているかどうかを確認する。",
    ],
  },
];

const contractConditions = [
  {
    label: "契約期間",
    detail:
      "1年・2年・3年などの設定。長期契約は単価が安くなるケースがあるが、中途解約条件とセットで確認する。",
  },
  {
    label: "中途解約条項",
    detail:
      "契約期間中に解約する場合の違約金や解約予告期間の有無。予告なしで解約できるケースは少ない。",
  },
  {
    label: "自動更新条項",
    detail:
      "契約満了時に自動更新される条件と、更新拒否の申出期限を確認する。",
  },
  {
    label: "価格改定条項",
    detail:
      "契約期間中に単価改定が行われる可能性があるか。「固定」と表示されていても調整費の変動で実質的に変わる場合がある。",
  },
  {
    label: "支払条件",
    detail:
      "請求サイクル、支払期日、遅延損害金の有無。経理部門の処理フローに影響する。",
  },
];

const faq = [
  { question: "電力の見積書で最初に確認すべき項目は何ですか？", answer: "基本料金単価・電力量料金単価・燃料費調整額の扱い（上限あり/なし）・市場価格調整額の有無の4点を最初に確認します。これらが異なると年間コストに大きな差が生じます。" },
  { question: "見積書の「税込/税抜」はどちらで比較すべきですか？", answer: "消費税率は統一されているため税抜単価で比較するのが基本です。ただし支払いは税込になるため最終的な年間コスト試算は税込で確認しましょう。" },
  { question: "見積書に燃料費調整額の上限がない場合、リスクはありますか？", answer: "はい。上限なしの場合、燃料価格高騰時に請求額が上振れするリスクがあります。2022年度には上限なしの自由料金で燃調費が大幅に上昇し、予算を超過した事例が多発しました。" },
];

export default function HowToReadElectricityQuotePage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人向け電気料金見積書の見方｜比較時に確認したい項目と注意点"
        description="法人向け電気料金見積書の見方。比較時に確認すべき項目と注意点を整理します。"
        url="https://simulator.eic-jp.org/how-to-read-electricity-quote"
        datePublished="2025-08-08"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "法人向け電気料金見積書の見方" },
        ]}
        faq={FAQ_ITEMS}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li>
            <Link href="/articles/basic" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              基礎から知る
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li className="text-slate-700">見積書の見方</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金見積書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社から見積書を受け取ったとき、「どこを見れば正しく比較できるか」は、法人の契約見直しで最も重要な実務スキルのひとつです。単価の数字だけを見て判断すると、実際の請求額で差が出るケースは少なくありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人向け電気料金の見積書に含まれる主な項目の見方と、比較時に注意したいポイントを整理しています。切り替えや比較を初めて担当する方から、複数社の見積を精査したい方まで参考にしてください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積書でまず確認すべき料金項目とその見方</li>
            <li>燃料費調整額・市場価格調整額・容量拠出金の扱いの違い</li>
            <li>契約条件で見落としやすいポイント</li>
            <li>3社見積比較テンプレートと高圧の金額例</li>
            <li>社内説明用に整理しやすい見方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        {/* 1. 最初に確認したいこと */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積書を比較するときに最初に確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数の電力会社から見積を取ると、フォーマットや項目名がそれぞれ異なることがあります。比較を始める前に、以下の3点を確認しておくと判断がしやすくなります。
            <Link href="/how-to-read-electricity-bill" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              現在の請求書の構造
            </Link>
            を先に把握しておくと、見積との差分が捉えやすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">前提条件が揃っているか</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                契約電力、使用量の前提が各見積書で同じ条件になっているかを確認する。前提が異なると比較にならない。
                <Link href="/contract-demand-what-is-it" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
                  契約電力とは
                </Link>
                も参照。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">含まれる項目の範囲</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                燃料費調整額、再エネ賦課金、容量拠出金が単価に含まれているか別途かを確認する。含む範囲が違うと見た目の金額が大きく変わる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">契約タイプの確認</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                固定プランか市場連動プランか。同じ「固定」でも調整費の扱いが異なるケースがあるため、契約タイプの定義を確認する。詳細は
                <Link href="/market-linked-vs-fixed" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
                  市場連動と固定の違い
                </Link>
                へ。
              </p>
            </div>
          </div>
        </section>

        {/* 2. 主要項目の見方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書の主要項目の見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書には複数の費用項目が含まれます。
            <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電気料金の内訳
            </Link>
            を理解した上で、各項目の見方を確認すると比較が正確になります。
          </p>
          <div className="mt-4 space-y-4">
            {quotationItems.map((item) => (
              <div key={item.heading} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.heading}の見方</p>
                <ul className="mt-2 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-7 text-slate-700 sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の仕組みについては
            <Link href="/fuel-cost-adjustment" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              燃料費調整額（燃調費）とは
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 3. 契約条件 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約条件で確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金項目だけでなく、契約条件の違いも比較判断に大きく影響します。以下は見積段階で確認しておきたい主な条件です。
          </p>
          <div className="mt-4 space-y-3">
            {contractConditions.map((item) => (
              <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 比較で特に注意したい条件差 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で特に注意したい条件差</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在契約と提案見積を並べて比較するとき、以下の項目が揃っているかを確認します。前提条件の差は、見積段階では見えにくい請求差の原因になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">確認項目</th>
                  <th className="border border-slate-200 px-3 py-2">現在契約</th>
                  <th className="border border-slate-200 px-3 py-2">提案見積</th>
                  <th className="border border-slate-200 px-3 py-2">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約電力</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">同じ前提か</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">固定費が増えていないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">単価体系が違わないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">含む/含まない差はないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">見せ方の差で見落としていないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">市場連動調整額</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">連動率・上限の差はないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約期間</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">長すぎないか</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">中途解約条件</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">要確認</td>
                  <td className="border border-slate-200 px-3 py-2">柔軟性を失わないか</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. 3社比較テンプレート */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3社見積比較テンプレート（高圧・月50,000kWh想定）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の比較では、固定型・市場連動型・ハイブリッド型の組み合わせで提案を受けることがあります。以下は比較の判断軸を整理するためのテンプレート例です。
            <Link href="/how-to-compare-electricity-suppliers" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社の比較の進め方
            </Link>
            もあわせて参照してください。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  比較項目
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  A社（固定型）
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  B社（市場連動型）
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  C社（ハイブリッド型）
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金単価</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">20円/kWh</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">JEPX+8円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">15円+0.3×JEPX差</span>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  月額目安（JEPX 10円時）
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約100万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約90万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約75万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  月額目安（JEPX 20円時）
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約100万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-red-700">約140万円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約90万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃調費上限</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">あり</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">あり（+3円上限）</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約期間</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1年</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">違約金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 基本料金は含まず電力量料金部分のみの比較例。実際の見積は条件により異なります。
          </p>
        </section>

        {/* 6. 高圧見積書の金額例 */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧見積書の項目別金額例（月50,000kWh・契約電力500kW）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約の見積書では、各項目の金額規模と変動幅を把握しておくと比較精度が上がります。より詳細な確認方法は
            <Link href="/high-voltage-quotation-guide" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              高圧見積書の確認ガイド
            </Link>
            も参照してください。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  見積項目
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  金額目安
                </th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                  確認すべき前提条件
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">約72〜92万円/月</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  契約電力の設定根拠、力率割引の有無
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">約75〜100万円/月</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  単価の時間帯別設定、季節別単価の有無
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">▲10〜+25万円/月</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  上限の有無、算定式の違い
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">0〜+50万円/月</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  連動率、基準単価、上限の有無
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-slate-900">約17.5万円/月</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  全社共通（年度改定）
                </td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                  月額合計
                </td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                  約155〜285万円
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  変動項目の幅で月130万円の差が出る
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 特別高圧契約の場合は
            <Link href="/extra-high-voltage-quotation-guide" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              特別高圧見積書の確認ガイド
            </Link>
            を参照してください。
          </p>
        </section>

        {/* 7. 社内説明で整理しやすい見方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明で整理しやすい見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較の結果を社内で説明するときは、以下の4つの軸で整理すると伝わりやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">比較軸</th>
                  <th className="p-3 text-left font-semibold text-slate-900">確認内容</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">年間総額</td>
                  <td className="p-3 text-slate-700">
                    同じ使用量前提での年間概算額（調整費込み）
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">リスク幅</td>
                  <td className="p-3 text-slate-700">
                    燃料費・市場価格の変動でどこまで上振れしうるか
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">契約条件</td>
                  <td className="p-3 text-slate-700">
                    期間、解約条件、自動更新、価格改定条項
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">運用面</td>
                  <td className="p-3 text-slate-700">
                    請求書の見やすさ、問い合わせ対応、切替手続き
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内説明の進め方については
            <Link
              href="/how-to-explain-electricity-cost-review-internally"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金見直しを社内で説明するときのポイント
            </Link>
            で詳しく整理しています。
          </p>
        </section>

        {/* 8. 見積書を見る前に用意したい資料 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書を見る前に用意したい資料</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            資料の洗い出しは
            <Link
              href="/documents-needed-for-electricity-contract-review"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金見直しで集めるべき資料一覧
            </Link>
            で先に整理すると、比較依頼の段階で抜け漏れが減ります。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>直近数か月の請求書</li>
            <li>契約電力（kW）</li>
            <li>月別使用量推移（kWh）</li>
            <li>現在の契約条件（期間・更新日・解約条件）</li>
            <li>更新時期・切替希望時期</li>
            <li>拠点ごとの供給地点特定番号</li>
          </ol>
        </section>

        {/* 9. 見積書の次に確認したい実務ステップ */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書の次に確認したい実務ステップ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            見積書の見方を押さえたら、比較・確認・切替の各ステップに進むと、見直しの精度を高められます。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link
              href="/how-to-compare-electricity-suppliers"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">電力会社の比較の進め方</span>
            </Link>
            <Link
              href="/compare"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">料金メニュー比較ページ</span>
            </Link>
            <Link
              href="/market-linked-vs-fixed"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">市場連動と固定プランの違い</span>
            </Link>
            <Link
              href="/fuel-cost-adjustment"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">燃料費調整額の仕組み</span>
            </Link>
            <Link
              href="/documents-needed-for-electricity-contract-review"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">見直しで集めるべき資料一覧</span>
            </Link>
            <Link
              href="/how-to-explain-electricity-cost-review-internally"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">社内説明のポイント</span>
            </Link>
            <Link
              href="/high-voltage-quotation-guide"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">高圧見積書の確認ガイド</span>
            </Link>
            <Link
              href="/extra-high-voltage-quotation-guide"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50"
            >
              <span className="font-semibold text-slate-900">特別高圧見積書の確認ガイド</span>
            </Link>
          </div>
        </section>

        <SourcesAndFaq
          faq={FAQ_ITEMS}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力料金の制度・見積書の規制情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場データ・新電力情報" },
          ]}
          publishedAt="2025-08-08"
        />

        {/* RelatedLinks */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
          <div className="mt-4">
            <MarketDataFaq items={FAQ_ITEMS} />
          </div>
        </section>
        <RelatedLinks
          heading="関連ページ"
          intro="見積の前提を、内訳・相場・見直し実務までつなげると比較判断が安定しやすくなります。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "請求書と見積書を同じ項目軸で読むための全体像です。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "現在の請求構造を把握し、見積比較の前提を整理します。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "見積前提となる契約電力の仕組みを理解するための基本解説です。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃料費調整額の仕組みと、見積比較での確認ポイントを整理。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "見積に現れやすい契約タイプ差を比較軸で確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較の進め方",
              description: "比較判断で見落としやすい観点を整理しています。",
            },
            {
              href: "/concierge",
              title: "AI コンシェルジュで関連情報を探す",
              description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
            },
            {
              href: "/articles/basic",
              title: "法人電気料金の基礎知識",
              description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。",
            },
          ]}
        />

        {/* ContentCta */}
        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

        <ContentCta
          heading="同じ前提で見積を比較する"
          description="見積書の読み方を押さえたら、比較ページで条件差を整理し、総額と契約条件の両面で判断できます。シミュレーターで固定型・市場連動型の年間コスト差も確認してください。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/", label: "シミュレーターで診断する" },
          ]}
        />
      </section>
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
