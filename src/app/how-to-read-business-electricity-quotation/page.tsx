import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "法人向け電気料金見積書の見方｜比較前に確認したい項目";
const pageDescription =
  "法人向け電気料金の見積書を受け取ったとき、どこを比較すればよいかを項目別に整理。基本料金・電力量料金・燃料費調整額・契約条件など、単価以外に確認したいポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 見積書 見方",
    "電力 見積 比較 ポイント",
    "法人 電気 見積書 確認項目",
    "電力契約 見積比較",
    "法人 電気料金 見積 注意点",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-read-business-electricity-quotation",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-business-electricity-quotation",
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
  { label: "契約期間", detail: "1年・2年・3年などの設定。長期契約は単価が安くなるケースがあるが、中途解約条件とセットで確認する。" },
  { label: "中途解約条項", detail: "契約期間中に解約する場合の違約金や解約予告期間の有無。予告なしで解約できるケースは少ない。" },
  { label: "自動更新条項", detail: "契約満了時に自動更新される条件と、更新拒否の申出期限を確認する。" },
  { label: "価格改定条項", detail: "契約期間中に単価改定が行われる可能性があるか。「固定」と表示されていても調整費の変動で実質的に変わる場合がある。" },
  { label: "支払条件", detail: "請求サイクル、支払期日、遅延損害金の有無。経理部門の処理フローに影響する。" },
];

export default function HowToReadBusinessElectricityQuotationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金見積書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社から見積書を受け取ったとき、「どこを見れば正しく比較できるか」は、法人の契約見直しで最も重要な実務スキルのひとつです。単価の数字だけを見て判断すると、実際の請求額で差が出るケースは少なくありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人向け電気料金の見積書に含まれる主な項目の見方と、比較時に注意したいポイントを整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積書でまず確認すべき料金項目とその見方</li>
            <li>燃料費調整額・市場価格調整額の扱いの違い</li>
            <li>契約条件で見落としやすいポイント</li>
            <li>単価以外で比較すべき項目</li>
            <li>社内説明用に整理しやすい見方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積書を比較するときに最初に確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数の電力会社から見積を取ると、フォーマットや項目名がそれぞれ異なることがあります。比較を始める前に、以下の3点を確認しておくと判断がしやすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">前提条件が揃っているか</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                契約電力、使用量の前提が各見積書で同じ条件になっているかを確認する。前提が異なると比較にならない。
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
                固定プランか市場連動プランか。同じ「固定」でも調整費の扱いが異なるケースがあるため、契約タイプの定義を確認する。
              </p>
            </div>
          </div>
        </section>

        {quotationItems.map((item) => (
          <section
            key={item.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {item.heading}の見方
            </h2>
            <ul className="mt-3 space-y-2">
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
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約条件で確認したいこと
          </h2>
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            単価以外に比較したいポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較では、単価の高低だけでなく、以下の観点を加えると判断の精度が上がります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間の総額試算（月別に変動を織り込んだ場合）</li>
            <li>燃料費調整額の上振れリスク（上限の有無を含む）</li>
            <li>市場連動の有無とその影響幅</li>
            <li>契約期間の柔軟性（解約・変更のしやすさ）</li>
            <li>請求書のわかりやすさ・問い合わせ対応</li>
            <li>切替手続きの円滑さ（停電リスク・工事の有無）</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較の全体的な考え方は{" "}
            <Link
              href="/how-to-compare-electricity-suppliers"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              新電力を比較するときのポイント
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内説明で整理しやすい見方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較の結果を社内で説明するときは、以下の軸で整理すると伝わりやすくなります。
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
                  <td className="p-3 text-slate-700">同じ使用量前提での年間概算額（調整費込み）</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">リスク幅</td>
                  <td className="p-3 text-slate-700">燃料費・市場価格の変動でどこまで上振れしうるか</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">契約条件</td>
                  <td className="p-3 text-slate-700">期間、解約条件、自動更新、価格改定条項</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">運用面</td>
                  <td className="p-3 text-slate-700">請求書の見やすさ、問い合わせ対応、切替手続き</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            社内説明の進め方については{" "}
            <Link
              href="/how-to-explain-electricity-cost-review-internally"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金見直しを社内で説明するときのポイント
            </Link>{" "}
            で詳しく整理しています。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧見積書の項目別金額例（月50,000kWh・契約電力500kW）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見積項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">確認すべき前提条件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約72〜92万円/月</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力の設定根拠、力率割引の有無</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約75〜100万円/月</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">単価の時間帯別設定、季節別単価の有無</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲10〜+25万円/月</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">上限の有無、算定式の違い</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0〜+50万円/月</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">連動率、基準単価、上限の有無</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約17.5万円/月</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">全社共通（年度改定）</td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">月額合計</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約155〜285万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">変動項目の幅で月130万円の差が出る</td>
              </tr>
            </tbody>
          </table>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見積書の比較をさらに進めるための関連情報をまとめています。"
          links={[
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "現行契約の請求内容を把握し、見積比較の前提を整理する。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見積依頼前に整理しておきたい項目を一覧で確認。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃料費調整額の仕組みと、見積比較での確認ポイント。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約タイプ別の特徴とリスクの違いを比較。",
            },
            {
              href: "/compare",
              title: "法人向け電気料金比較ページ",
              description: "固定プランと市場連動プランの条件差を確認する。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較判断で見落としやすい観点を整理。",
            },
          ]}
        />

        <ContentCta
          heading="見積条件をシミュレーターで確認する"
          description="見積書の条件をもとに、年間コストの上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用してください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="how-to-read-business-electricity-quotation" />
      </div>
    </main>
  );
}
