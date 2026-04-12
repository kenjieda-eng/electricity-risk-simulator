import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "高圧電力の請求書の見方｜法人の見積比較に使いたい確認ポイント";
const pageDescription =
  "高圧電力契約の請求書で確認すべき項目を解説。契約電力・デマンド・基本料金・電力量料金・各種調整費など、見積比較や社内説明に使える読み方のポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧電力 請求書 見方",
    "高圧 電気 請求書 確認項目",
    "高圧 契約電力 デマンド",
    "高圧 基本料金 電力量料金",
    "法人 電気 請求書 比較",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/high-voltage-electricity-bill-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-electricity-bill-guide",
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
    heading: "契約電力とデマンド値の確認",
    content: [
      "高圧電力の請求書で最初に確認すべきは「契約電力（kW）」です。高圧契約では、過去1年間（当月を含む直近12か月）の最大需要電力（デマンド値）が契約電力の決定に直接影響します。デマンド値は30分ごとの平均電力の最大値として記録され、一度高いデマンドが記録されると1年間その値が契約電力に反映されます。",
      "請求書には前月のデマンド実績値と、現在の契約電力が記載されています。「現在の契約電力がいつのデマンド実績から設定されているか」を把握することで、契約電力の引き下げ可能性を判断する材料になります。",
    ],
    checkPoints: [
      "現在の契約電力は何kWか",
      "直近12か月のデマンド最大値はいつ記録されたか",
      "現在の契約電力と直近デマンドの差はどの程度あるか（余裕があれば見直し余地あり）",
      "デマンドの季節変動パターン（夏冬に集中しているか）",
    ],
  },
  {
    heading: "基本料金の算出構造",
    content: [
      "高圧電力の基本料金は「契約電力（kW）× 基本料金単価（円/kW）× 力率割引率」で算出されます。一般的に力率が85%以上の場合に割引が適用され、85%未満の場合は逆に割増が課されます。力率は使用している電気機器の特性によって決まるため、コンデンサ設置等で改善できるケースがあります。",
      "基本料金は使用量がゼロでも発生する固定費です。月間の請求額における基本料金の占有率を把握しておくと、「どこまで節電しても削減できないコスト」が明確になり、見積比較時の判断軸として活用できます。",
    ],
    checkPoints: [
      "現在適用されている基本料金単価（円/kW）",
      "力率割引・割増の適用状況（力率の実績値）",
      "月間請求額に占める基本料金の割合",
      "冬季・夏季料金の季節変動がある場合、その差額",
    ],
  },
  {
    heading: "電力量料金の時間帯区分と単価",
    content: [
      "高圧電力の電力量料金は、昼間時間帯・夜間時間帯・ピーク時間帯など、時間帯によって異なる単価が設定されているプランが多くあります。時間帯別料金の場合、請求書には各時間帯の使用量（kWh）と単価が列記されます。",
      "自社の設備稼働パターンと時間帯別料金が合っているかどうかは、見直し判断の重要ポイントです。夜間稼働が多い工場であれば夜間単価の低いプランが有利になりますし、昼間のみ稼働するオフィスであれば夜間単価を重視する必要はありません。使用量の時間帯別内訳を確認しておくことが、見積条件の精度を高めます。",
    ],
    checkPoints: [
      "時間帯別料金区分（昼間・夜間・ピーク等）の単価一覧",
      "各時間帯の月間使用量の割合",
      "夏季・冬季など季節による単価変動の有無",
      "現在のプランが自社の稼働パターンに合っているか",
    ],
  },
  {
    heading: "燃料費調整額と市場連動調整額",
    content: [
      "燃料費調整額は、LNG・石炭・原油など燃料価格の変動を月次で電気料金に反映する調整項目です。高圧電力の場合、使用量が大きいため調整額の絶対値も大きくなります。月ごとに加算・減算が変わるため、過去12か月の推移を確認することで変動リスクの傾向をつかめます。",
      "市場連動型プランでは「電源調達調整費」「市場価格調整額」等の名称で、JEPXスポット価格に連動した調整額が加算されます。この項目が請求書にある場合は市場連動プランであることを意味し、電力市場が高騰した際の上振れリスクを評価する必要があります。固定単価型と市場連動型の違いは、見積書を比較する際の根本的な前提条件です。",
    ],
    checkPoints: [
      "燃料費調整額の過去12か月の変動幅（最大値・最小値）",
      "市場価格調整額の項目が存在するか（市場連動型の可能性）",
      "高騰時の単月最大負担額はいくらだったか",
      "上限（キャップ）が設定されている契約か",
    ],
  },
  {
    heading: "再エネ賦課金と容量拠出金",
    content: [
      "再生可能エネルギー発電促進賦課金（再エネ賦課金）は全使用量に対して一律単価が課されます。年度ごとに単価が改定されており、使用量の多い高圧契約では年間の負担額が相当規模になります。見積比較の際は、どの見積書も同じ再エネ賦課金を含んでいるかを確認してください。",
      "容量拠出金は2024年度から導入された容量市場に基づく費用で、電力の安定供給維持のために需要家に転嫁される制度負担です。請求書での表示方法は電力会社によって異なり、別項目表示の場合と電力量料金に含まれている場合があります。",
    ],
    checkPoints: [
      "現在の再エネ賦課金単価と年間負担額の試算",
      "容量拠出金が別項目で表示されているか、電力量料金に含まれているか",
      "見積書との比較時に両項目が一致した条件で比較できているか",
    ],
  },
  {
    heading: "請求書から読み取る比較用基礎データ",
    content: [
      "見積比較を行う前に、現行請求書から整理しておくべきデータがあります。これらは「見積条件の共通化」に使うためのもので、複数社から見積を取る際に同じ条件で比較するための基礎資料になります。",
      "特に重要なのは、月ごとの使用量（kWh）と最大需要電力（デマンド、kW）の12か月分の実績です。使用量の多い月・少ない月でそれぞれ試算してもらうことで、年間コストの見通しが立てやすくなります。",
    ],
    checkPoints: [
      "直近12か月の月別使用量（kWh）一覧",
      "直近12か月の月別最大需要電力（デマンド、kW）",
      "供給地点特定番号（見積依頼時に必要）",
      "現行契約の契約種別と供給電圧",
    ],
  },
];

export default function HighVoltageElectricityBillGuidePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧電力の請求書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力（6,600V供給）の電気料金請求書は、低圧契約と比べて項目が多く、基本料金の決まり方や調整費の扱いが異なります。見積比較や契約見直しを進めるうえで、請求書の各項目が何を意味するかを正確に把握することが出発点になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、高圧電力の請求書で確認すべき主要項目について、見積比較への活用方法も含めて整理します。全体の料金構造については{" "}
          <Link
            href="/how-to-read-business-electricity-bill"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            法人向け電気料金請求書の見方
          </Link>{" "}
          もあわせてご確認ください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>高圧電力の請求書に含まれる主な項目とその読み方</li>
            <li>契約電力・デマンドが基本料金に与える影響</li>
            <li>時間帯別電力量料金の確認ポイント</li>
            <li>見積比較に使う基礎データの整理方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧電力の請求書の全体構造
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求書は大きく「固定費（基本料金）」と「変動費（電力量料金＋各種調整費）」に分かれています。低圧と異なる最大の特徴は、基本料金がデマンド管理によって決まる点です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">区分</th>
                  <th className="p-3 text-left font-semibold text-slate-900">項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">算出の基礎</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">固定費</td>
                  <td className="p-3 text-slate-700">基本料金</td>
                  <td className="p-3 text-slate-700">契約電力（kW）× 単価 × 力率係数</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700" rowSpan={5}>変動費</td>
                  <td className="p-3 text-slate-700">電力量料金</td>
                  <td className="p-3 text-slate-700">使用量（kWh）× 時間帯別単価</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">燃料費調整額</td>
                  <td className="p-3 text-slate-700">使用量 × 調整単価（毎月変動）</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">再エネ賦課金</td>
                  <td className="p-3 text-slate-700">使用量 × 賦課金単価（年度改定）</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">市場価格調整額</td>
                  <td className="p-3 text-slate-700">市場連動プランのみ</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">容量拠出金</td>
                  <td className="p-3 text-slate-700">制度負担（表示方法は事業者による）</td>
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
            {section.content.map((para, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
                {para}
              </p>
            ))}
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {section.checkPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧電力の請求書を見積比較に活用する流れ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の確認が完了したら、次のステップとして見積書の取得・比較に進みます。見積比較では同じ条件で各社を横並びにすることが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 1：請求書から整理するデータ</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>12か月分の月別使用量（kWh）</li>
                <li>12か月分の月別デマンド（kW）</li>
                <li>現行の基本料金単価・電力量料金単価</li>
                <li>供給地点特定番号</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Step 2：見積書で確認する項目</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>基本料金単価の比較</li>
                <li>電力量料金単価（時間帯別）の比較</li>
                <li>燃料費調整額・市場連動調整額の扱い</li>
                <li>容量拠出金・再エネ賦課金の含め方</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の見積書の読み方については{" "}
            <Link
              href="/high-voltage-quotation-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              高圧電力見積書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧請求書の実例数値（契約電力300kW・月30,000kWh）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">算定</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">300kW × 1,650円 × 0.97</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">480,150円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30,000kWh × 17.5円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">525,000円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30,000kWh × +1.8円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">54,000円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30,000kWh × 3.49円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">104,700円</span></td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">請求合計（税抜）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">1,163,850円</td>
              </tr>
            </tbody>
          </table>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="高圧電力の請求書理解を深め、見積比較に活かすための関連ページです。"
          links={[
            {
              href: "/high-voltage-quotation-guide",
              title: "高圧電力見積書の見方",
              description:
                "高圧電力の見積書で比較すべき項目と注意点を整理。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "デマンド値が契約電力と基本料金に与える影響を解説。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "契約電力と基本料金単価の関係、力率割引の仕組みを解説。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "電力量料金の構造と時間帯別料金の確認ポイント。",
            },
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の全体構造と主要項目の読み方を整理。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description: "複数の見積書を横並びで比較するための整理方法。",
            },
          ]}
        />

        <ContentCta
          heading="請求書の情報をもとにリスクを試算する"
          description="高圧電力の契約電力・使用量をもとに、電気料金の上振れリスクをシミュレーションできます。見積比較の前に現状を把握しておくと比較の精度が高まります。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="high-voltage-electricity-bill-guide" />
      </div>
    </main>
  );
}
