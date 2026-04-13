import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "法人向け電気料金請求書の見方｜項目別の確認ポイントと見直しへのつなげ方";
const pageDescription =
  "法人向け電気料金の請求書で確認すべき項目を解説。契約電力・基本料金・電力量料金・燃調費・再エネ賦課金の見方、総額上昇時の切り分け方、見積比較への活かし方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 請求書 見方 法人",
    "高圧 請求書 見るポイント",
    "電気料金 明細 どこを見る",
    "請求書 確認項目 法人",
    "法人 電気料金 請求書",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-bill",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-bill",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

const billSections = [
  {
    heading: "契約電力と基本料金",
    content: [
      "請求書の冒頭付近に記載されることが多い「契約電力」は、基本料金を決定する根拠です。高圧契約の場合、過去1年間の最大需要電力（デマンド値）に基づいて設定されるのが一般的です。",
      "基本料金は「契約電力（kW）×基本料金単価×力率割引（割増）」で算出されます。使用量がゼロでも発生する固定費であるため、見積比較の際には特に注目したい項目です。",
    ],
    checkPoints: [
      "契約電力は何kWで設定されているか",
      "力率割引が適用されているか（85%以上が割引対象）",
      "最大需要電力（デマンド）の実績値はどの程度か",
    ],
    links: (
      <>
        <Link
          href="/contract-demand-what-is-it"
          className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          契約電力とデマンドの詳細はこちら
        </Link>
      </>
    ),
  },
  {
    heading: "使用量と電力量料金",
    content: [
      "電力量料金は「使用量（kWh）×電力量料金単価」で算出されます。使用量は季節や営業時間、設備稼働によって月ごとに変動するため、直近12か月分の推移を把握しておくと比較の精度が上がります。",
      "時間帯別料金が設定されている契約では、昼間・夜間・ピーク時間帯で単価が異なります。自社の稼働パターンと照らし合わせて確認することが重要です。",
    ],
    checkPoints: [
      "月間使用量はどの程度変動しているか（夏冬のピーク、閑散期の差）",
      "時間帯別の料金設定があるか",
      "使用量が増加傾向にあるか減少傾向にあるか",
    ],
    links: (
      <>
        <Link
          href="/high-voltage-electricity-pricing"
          className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          高圧電力の料金の見方
        </Link>
      </>
    ),
  },
  {
    heading: "燃料費調整額",
    content: [
      "燃料費調整額は、LNGや石炭などの燃料価格の変動を電気料金に反映するための調整項目です。毎月変動し、請求額に大きな影響を与えることがあります。",
      "2022年以降、燃料費調整額の変動幅が大きくなり、月額数十万円単位で影響が出る法人も増えています。上限が設定されている契約と上限がない契約では、高騰時の負担が大きく異なります。",
    ],
    checkPoints: [
      "燃料費調整額はプラス（加算）かマイナス（減算）か",
      "過去12か月でどの程度変動しているか",
      "上限が設定されている契約かどうか",
    ],
    links: (
      <>
        <Link
          href="/fuel-cost-adjustment"
          className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          燃料費調整額（燃調費）の仕組みを詳しく見る
        </Link>
      </>
    ),
  },
  {
    heading: "再エネ賦課金",
    content: [
      "再生可能エネルギー発電促進賦課金（再エネ賦課金）は、固定価格買取制度（FIT）に基づく制度負担です。全需要家に一律の単価が適用され、年度ごとに改定されます。",
      "使用量が多い法人ほど負担額が大きくなるため、年間の負担額を把握しておくと、コスト構造の全体像が見えやすくなります。",
    ],
    checkPoints: [
      "現在の賦課金単価はいくらか（年度ごとに変動）",
      "自社の年間負担額はどの程度か",
      "見積比較時に再エネ賦課金が含まれているかどうか",
    ],
    links: (
      <>
        <Link
          href="/renewable-energy-surcharge"
          className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          再エネ賦課金の仕組みと負担額を確認する
        </Link>
      </>
    ),
  },
  {
    heading: "市場価格調整額（ある場合）",
    content: [
      "市場連動型プランの場合、JEPXのスポット価格に連動する調整額が請求に加算されます。「電源調達調整費」「市場連動調整額」など、名称は電力会社によって異なります。",
      "この項目があるかないかは、契約タイプの実質的な違いを示す重要なシグナルです。見積書にこの項目がある場合は、市場連動プランである可能性が高いため、上振れリスクを確認しておく必要があります。",
    ],
    checkPoints: [
      "請求書にこの項目があるかどうか",
      "月ごとの変動幅はどの程度か",
      "上振れ時にどこまで負担が増える可能性があるか",
    ],
    links: null,
  },
  {
    heading: "容量拠出金",
    content: [
      "2024年度から導入された容量市場に基づく制度負担です。電力の安定供給を維持するための費用であり、小売電気事業者を通じて需要家に転嫁されます。",
      "請求書への反映方法は電力会社によって異なり、「容量拠出金相当額」として別項目で表示される場合と、電力量料金に含まれている場合があります。",
    ],
    checkPoints: [
      "請求書でどのように表示されているか",
      "見積比較時に含まれているかどうか",
      "今後の負担額の見通し（増加傾向にある）",
    ],
    links: null,
  },
];

export default function HowToReadElectricityBillPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <Link
              href="/articles/basic"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              基礎から知る
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">請求書の見方</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金請求書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しや見積比較を進めるうえで、現行契約の請求書を正しく読み解くことは欠かせない準備です。請求書には契約電力、使用量、料金単価、調整項目など、比較判断に必要な情報が詰まっています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人担当者が請求書でまず確認したい項目を実務で使いやすい順番で整理し、総額上昇時の切り分け方から見積比較への活かし方まで解説します。初めて請求書を確認する担当者から、見直し判断を進めたい方まで参考にしてください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>請求書の全体構造（固定費と変動費の区分）</li>
            <li>請求書を確認する実務的な順番</li>
            <li>主要項目の意味と確認ポイント（契約電力・燃調費・再エネ賦課金など）</li>
            <li>総額が上がったときの切り分けフロー</li>
            <li>見積比較や社内説明への活かし方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">

        {/* 請求書の全体構造 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書の全体構造（固定費と変動費）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金の請求書は、大きく分けて「固定費部分（基本料金）」と「変動費部分（電力量料金＋調整項目）」で構成されています。この構造を把握しておくと、請求額の変動要因を切り分けやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金の内訳の全体像は{" "}
            <Link
              href="/business-electricity-bill-breakdown"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金の内訳とは
            </Link>{" "}
            でも確認できます。このページでは各項目を実務的な視点で掘り下げます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">区分</th>
                  <th className="p-3 text-left font-semibold text-slate-900">主な項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">変動特性</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">固定費</td>
                  <td className="p-3 text-slate-700">基本料金</td>
                  <td className="p-3 text-slate-700">契約電力が変わらない限り一定</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700" rowSpan={5}>変動費</td>
                  <td className="p-3 text-slate-700">電力量料金</td>
                  <td className="p-3 text-slate-700">使用量に比例して変動</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">燃料費調整額</td>
                  <td className="p-3 text-slate-700">燃料価格に連動して毎月変動</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">再エネ賦課金</td>
                  <td className="p-3 text-slate-700">年度ごとに改定、使用量に比例</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">市場価格調整額</td>
                  <td className="p-3 text-slate-700">市場連動プランのみ。日次で変動</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">容量拠出金</td>
                  <td className="p-3 text-slate-700">制度に基づく。反映方法は事業者による</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 確認順番 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書はこの順番で確認する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            先に契約前提と固定費を確認し、その後に使用量連動・調整項目・制度項目を見ると、増減理由を説明しやすくなります。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力（基本料金の前提を確認）</li>
            <li>基本料金（固定費の水準）</li>
            <li>電力量料金と使用量（変動費の主体）</li>
            <li>燃料費調整額（市況連動の調整項目）</li>
            <li>再エネ賦課金（制度負担）</li>
            <li>市場価格調整額・容量拠出金（あれば）</li>
            <li>総額と前月・前年同月との差</li>
          </ol>
        </section>

        {/* 項目別の確認ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">項目別の確認ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各項目の意味と、見積比較や見直し判断に活用するためのポイントを整理します。
          </p>
        </section>

        {billSections.map((section) => (
          <section
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
            {section.content.map((para) => (
              <p key={para} className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {para}
              </p>
            ))}
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {section.checkPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            {section.links && (
              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {section.links}
              </p>
            )}
          </section>
        ))}

        {/* 項目別に見るときの実務ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">項目別に見るときの実務ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各項目をどう確認し、見直し判断へつなげるかを一覧で整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">項目</th>
                  <th className="border border-slate-200 px-3 py-2">何を確認するか</th>
                  <th className="border border-slate-200 px-3 py-2">見直し判断へのつなげ方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">契約電力</td>
                  <td className="border border-slate-200 px-3 py-2">前月から変化がないか、実態に対して大きすぎないか</td>
                  <td className="border border-slate-200 px-3 py-2">見積比較の前提条件として使う</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">固定費部分の水準と契約条件変化</td>
                  <td className="border border-slate-200 px-3 py-2">使用量減でも総額が下がらない理由を把握する</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2">使用量増減と単価体系の差</td>
                  <td className="border border-slate-200 px-3 py-2">操業変化や季節要因の影響を整理する</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">前月・前年同月との変化</td>
                  <td className="border border-slate-200 px-3 py-2">使用量以外の上昇要因として切り分ける</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">制度単価と使用量の掛け合わせ</td>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額とは別要因として整理する</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 総額が上がったときの確認フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">総額が上がったときの確認フロー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「先月より請求が高い」「前年より料金が上がった」と感じたとき、以下の順番で原因を切り分けると説明しやすくなります。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>まず使用量が増えたか確認する</li>
            <li>使用量が大きく変わっていなければ燃料費調整額を見る</li>
            <li>再エネ賦課金の影響（特に4月以降の単価改定）を確認する</li>
            <li>市場価格調整額・容量拠出金の有無と変動を確認する</li>
            <li>基本料金が変わっていないか確認する</li>
            <li>契約条件や契約電力の変化有無を確認する</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            例えば「使用量はほぼ同じなのに総額が上がった」場合は、調整項目か契約条件の変化が原因であるケースが多くなります。使用量要因と制度・市況要因を分けて把握することで、社内報告の説明精度が高まります。
          </p>
        </section>

        {/* 前月・前年同月と比べる */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">前月・前年同月と比べて見たいポイント</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2">前月比で見たいこと</th>
                  <th className="border border-slate-200 px-3 py-2">前年同月比で見たいこと</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">使用量</td>
                  <td className="border border-slate-200 px-3 py-2">季節要因や操業変化</td>
                  <td className="border border-slate-200 px-3 py-2">例年との差</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">契約条件の変化</td>
                  <td className="border border-slate-200 px-3 py-2">固定費構造の変化</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">燃料費調整額</td>
                  <td className="border border-slate-200 px-3 py-2">月次変動の大きさ</td>
                  <td className="border border-slate-200 px-3 py-2">市況影響の継続性</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">再エネ賦課金</td>
                  <td className="border border-slate-200 px-3 py-2">影響の有無</td>
                  <td className="border border-slate-200 px-3 py-2">制度単価の違い</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 月ごとの変動を見るポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月ごとの変動を見るポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書を1か月分だけ見ても、電気料金の全体像は把握しにくいものです。直近12か月分の請求書を時系列で並べると、以下のことがわかります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>季節による使用量の変動パターン（夏冬にピークが出るか、通年で一定か）</li>
            <li>燃料費調整額の変動幅（月によってどこまで振れるか）</li>
            <li>基本料金の変化（デマンド更新によって契約電力が変わったか）</li>
            <li>前年同月と比べた増減（使用量は同じなのに料金が上がっている場合は調整項目の影響）</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この推移を把握しておくことで、見積依頼時に「使用量のピーク月と閑散月で試算してほしい」といった具体的なリクエストが可能になり、より精度の高い見積が得られます。
          </p>
        </section>

        {/* 複数拠点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">複数拠点を比べるときの見方</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額だけでなく内訳差を見る</li>
            <li>契約電力の違いを確認する</li>
            <li>基本料金比率・使用量比率・調整項目比率を分けて見る</li>
            <li>同じ業態でも使用パターン差がある前提で比較する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧など電圧区分が異なる拠点を比較する場合は、単純な金額比較ではなく契約区分ごとの構造差も考慮が必要です。
            <Link
              href="/high-voltage-electricity-bill-guide"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              高圧電気料金の見方
            </Link>
            ・
            <Link
              href="/extra-high-voltage-electricity-bill-guide"
              className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              特別高圧電気料金の見方
            </Link>
            もあわせて確認してください。
          </p>
        </section>

        {/* 各変動項目の月額影響レンジ */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            各変動項目の月額影響レンジ（高圧・月50,000kWh目安）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            変動項目ごとの月額への影響幅を目安として整理します。高騰時の影響が大きい項目ほど、見積比較時の注目度を上げることが重要です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">変動項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">通常時の変動幅</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高騰時の変動幅</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">確認頻度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月±5〜10万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-red-700">月+25〜50万円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月±5〜15万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="font-semibold text-red-700">月+50〜100万円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年度改定で±3〜5万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（4月）</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量変動</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月±10〜20万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">猛暑・厳冬で+30万円超</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">毎月</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 見積比較に使いたい項目 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較に使いたい項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書から見積比較に使いたい主な項目は以下のとおりです。これらを事前に整理しておくと、見積条件のすり合わせがスムーズになります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">供給条件の基礎データ</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>契約電力（kW）</li>
                <li>月間使用量（kWh）の推移</li>
                <li>最大需要電力（デマンド）の実績</li>
                <li>供給地点特定番号</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">比較判断の材料</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>現行の基本料金単価と電力量料金単価</li>
                <li>燃料費調整額の推移</li>
                <li>市場価格調整額の有無と推移</li>
                <li>年間の合計請求額</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の読み方は{" "}
            <Link
              href="/how-to-read-electricity-quote"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金見積書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        {/* 社内説明 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明で整理しやすい見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の情報を社内で共有する際は、以下の3つの視点でまとめると伝わりやすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">コスト構造</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                固定費と変動費の割合。基本料金がどこまで占めているか。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">変動要因</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                燃料費調整額や市場連動調整額がどの程度請求額に影響しているか。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">経年比較</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                前年同月や過去3年の推移。使用量が同じなのに金額が上がっている場合の要因。
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="請求書確認を、要因分析と比較判断につなげるための関連ページです。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "料金全体の構造を先に俯瞰できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金の前提となる概念を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "単価変動要因を個別に理解できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因の見方を整理できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "請求書の確認内容を見積比較につなげる視点を確認できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "請求確認結果を見直し判断につなげる視点を確認できます。",
            },
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電気料金の請求書ガイド",
              description: "高圧契約の請求書に特化した確認ポイントを解説。",
            },
            {
              href: "/extra-high-voltage-electricity-bill-guide",
              title: "特別高圧電気料金の請求書ガイド",
              description: "特別高圧契約の請求構造と確認ポイント。",
            },
          ]}
        />

        <ContentCta
          heading="請求書の情報をもとにシミュレーションする"
          description="請求書で確認した契約電力や使用量をもとに、電気料金の上振れリスクを試算できます。見積比較の前提整理や契約見直し判断にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
