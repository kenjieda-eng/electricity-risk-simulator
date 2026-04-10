import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "法人向け電気料金請求書の見方｜見積比較に使いたい確認ポイント";
const pageDescription =
  "法人向け電気料金の請求書で確認すべき項目を解説。契約電力・使用量・基本料金・燃料費調整額・再エネ賦課金など、見積比較や社内説明に使える読み方のポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 請求書 見方",
    "高圧 電気 請求書 確認項目",
    "法人 電気 請求書 比較",
    "電力 請求書 読み方",
    "法人 電気料金 内訳 見方",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-read-business-electricity-bill",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-business-electricity-bill",
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
  },
];

export default function HowToReadBusinessElectricityBillPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金請求書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しや見積比較を進めるうえで、現行契約の請求書を正しく読み解くことは欠かせない準備です。請求書には契約電力、使用量、料金単価、調整項目など、比較判断に必要な情報が詰まっています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人向け電気料金の請求書に含まれる主な項目について、それぞれの意味と見積比較に活用するためのポイントを整理しています。既存の{" "}
          <Link
            href="/how-to-read-electricity-bill"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            請求書確認ポイントの解説
          </Link>{" "}
          とあわせてお読みください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>請求書の主要項目の意味と見方</li>
            <li>見積比較の前提として確認すべき数値</li>
            <li>月ごとの変動を見るポイント</li>
            <li>社内説明に使いやすい整理のしかた</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書を見るときに最初に押さえたいこと
          </h2>
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
            で確認できます。このページでは、各項目を「見積比較にどう使うか」という実務的な視点で掘り下げます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
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

        {billSections.map((section) => (
          <section
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            {section.content.map((para) => (
              <p
                key={para}
                className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
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
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月ごとの変動を見るポイント
          </h2>
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較に使いたい項目
          </h2>
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
              href="/how-to-read-business-electricity-quotation"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金見積書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内説明に使いやすい整理のしかた
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の情報を社内で共有する際は、以下の3つの視点でまとめると伝わりやすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
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
          intro="請求書の理解を深め、見積比較や契約見直しに活かすための関連ページです。"
          links={[
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書を受け取ったとき、どの項目を比較すればよいかを整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "基本料金・電力量料金・調整費の構造を全体像から理解する。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の仕組みと変動が請求額に与える影響。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧契約の料金構造を基礎から確認する。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "再エネ賦課金の仕組みと負担額の見方。",
            },
          ]}
        />

        <ContentCta
          heading="請求書の情報をもとにシミュレーションする"
          description="請求書で確認した契約電力や使用量をもとに、電気料金の上振れリスクを試算できます。見積比較の前提整理にご活用ください。"
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
