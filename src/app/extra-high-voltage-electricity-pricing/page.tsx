import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "特別高圧電力の料金の見方｜高圧との違い・負荷率・個別交渉のポイントを解説";
const pageDescription =
  "特別高圧電力の料金を法人向けに解説。高圧との比較表、負荷率の重要性、需要調整契約、託送料金の比重、個別交渉の実態まで体系的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧電力 料金の見方",
    "特別高圧 高圧 違い",
    "特別高圧 負荷率",
    "特別高圧 個別交渉",
    "法人 電力契約 特別高圧",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/extra-high-voltage-electricity-pricing",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/extra-high-voltage-electricity-pricing",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "特別高圧電力の料金の見方",
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

export default function ExtraHighVoltageElectricityPricingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <Link href="/articles/basic" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基礎から知る</Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <span className="text-slate-700">特別高圧の料金</span>
          </li>
        </ol>
      </nav>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">特別高圧電力の料金の見方｜高圧との違い・負荷率・個別交渉のポイントを解説</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧は、高圧よりさらに大きな需要を持つ施設で使われることが多い契約区分です。工場、大規模商業施設、
          データセンター、大型物流施設などで関係しやすく、請求額への影響も大きくなりやすい傾向があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、特別高圧に固有の論点（負荷率・需要調整契約・個別交渉）と、
          <Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧電力</Link>
          との主な違いを体系的に整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 特別高圧電力とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧電力とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧電力は、一般的に大口需要家向けの契約区分として扱われます。低圧や高圧より契約条件の個別性が高くなりやすく、
            料金水準や見積条件も個別設計になるケースが少なくありません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            対象施設の規模が大きい分、同じ単価差でも金額影響が大きくなりやすい点が実務上の特徴です。
            <Link href="/contract-demand-what-is-it" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>
            の水準が高圧の数倍以上になるため、基本料金の絶対額も相当に大きくなります。
          </p>
        </section>

        {/* 高圧との主な違い（比較表） */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧との主な違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧と高圧では、契約規模だけでなく料金の決まり方や交渉プロセスも大きく異なります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">比較項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高圧</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特別高圧</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">契約電力</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50〜2,000kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2,000kW超</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">基本料金単価目安</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,500〜1,900円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200〜1,600円/kW</td>
              </tr>
              <tr className="bg-amber-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">単価1円差の年間影響</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">〜60万円（月使用量50,000kWh基準）</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">〜1,800万円（月使用量150万kWh基準）</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">見積形態</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">標準メニューベース</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">個別交渉が中心</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">需要調整</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">一部対応</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約に組み込まれやすい</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">託送料金の比重</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中程度</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高い（総額に占める割合が大きい）</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 単価は大手電力会社の標準メニュー目安。実際の料金は個別契約によって異なります。
          </p>
        </section>

        {/* 特別高圧特有の論点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧特有の論点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧では意識しにくいが、特別高圧では実務上の重要度が高くなる論点が4つあります。
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">1. 負荷率の重要性</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                負荷率とは、契約電力に対して実際にどれだけ安定的に電力を使っているかを示す指標です（月平均使用電力÷最大需要電力）。
                特別高圧では、負荷率が低いと基本料金の「割高感」が増します。
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                たとえば契約電力5,000kWで負荷率40%の場合、月間使用量は約144万kWhになります。
                同じ使用量でも負荷率60%にできれば、契約電力を3,330kWに圧縮でき、基本料金を大幅に削減できます。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">2. 需要調整契約</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                需要調整契約とは、電力会社の求めに応じて一時的に電力使用量を削減する代わりに、基本料金の割引や調整金を受け取る仕組みです。
                特別高圧クラスでは、この調整対応がコスト構造の一部として契約に組み込まれるケースがあります。
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                対応可否や削減可能量を事前に把握しておくことで、交渉時の条件改善につながることがあります。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">3. 託送料金の比重</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                電力料金には、発電コストのほかに送配電網の利用料（託送料金）が含まれます。特別高圧では直接受電のケースもあり、
                託送料金の扱いが契約内容によって異なります。
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                新電力から調達する場合、発電コストと託送料金を分けて把握することで、見積の構造を正確に読み解けます。
                総額比較だけでは見えにくいコスト要因のひとつです。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">4. 個別交渉の実態</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                特別高圧では、標準メニューの単価をそのまま適用するケースは少なく、使用量・施設条件・調達条件を踏まえた個別見積が基本です。
                交渉の余地は広い一方、比較の前提条件を揃えることが難しくなります。
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                見積を複数社から取得する際は、契約期間・調整条件・解約条件・燃料費調整額の取り扱いを統一した前提で比較することが重要です。
              </p>
            </div>
          </div>
        </section>

        {/* 料金構成と計算例 */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の料金構成と計算例（契約電力3,000kW・月1,500,000kWh）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">請求項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">単価目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200〜1,600円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約350〜465万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜18円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約1,800〜2,700万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲2〜+5円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲300〜+750万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3.49円/kWh（2025年度）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約524万円</span></td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">月額合計</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約2,400〜4,400万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧では、電力量料金の<span className="font-semibold text-slate-900">1円/kWh</span>の差が年間<span className="font-semibold text-slate-900">1,800万円</span>の差になります。
            単価交渉1円の重みが、高圧とは桁違いになる点を意識して見積を比較することが重要です。
          </p>
        </section>

        {/* 特別高圧の請求書で確認したいポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の請求書で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>
              の水準と実態使用量との乖離
            </li>
            <li>負荷率（月平均使用電力 ÷ 最大需要電力）の推移</li>
            <li>基本料金・電力量料金それぞれの金額と比率</li>
            <li>燃料費調整額の増減トレンド</li>
            <li>再エネ賦課金の金額</li>
            <li>需要調整対応の有無とインセンティブ</li>
            <li>どの項目が変動して請求増につながったか</li>
          </ul>
        </section>

        {/* 関連ガイドハブ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の関連ガイド</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金構造の全体像を把握したうえで、目的に応じた詳細ガイドへ進んでください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <Link
              href="/extra-high-voltage-electricity-bill-guide"
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-300 hover:shadow-md"
            >
              <p className="font-semibold text-sky-700">特別高圧の請求書ガイド</p>
              <p className="mt-1 text-xs text-slate-600">実際の請求書を項目別に読み解く手順を整理。大口需要家ならではの確認ポイントを解説。</p>
            </Link>
            <Link
              href="/extra-high-voltage-quotation-guide"
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-300 hover:shadow-md"
            >
              <p className="font-semibold text-sky-700">特別高圧の見積ガイド</p>
              <p className="mt-1 text-xs text-slate-600">個別交渉における見積書の読み方と比較条件の統一方法を解説。</p>
            </Link>
            <Link
              href="/extra-high-voltage-contract-review-points"
              className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:border-sky-300 hover:shadow-md"
            >
              <p className="font-semibold text-sky-700">特別高圧の契約見直しポイント</p>
              <p className="mt-1 text-xs text-slate-600">更新時期・解約条件・単価交渉の実務ポイントを体系的にまとめています。</p>
            </Link>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="特別高圧の料金理解を、請求確認と比較判断につなげるための導線です。"
          links={[
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧契約の請求構造を基礎から確認できます。特別高圧との比較の出発点になります。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金や見積比較の前提になる考え方を整理できます。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の仕組み",
              description: "固定費として毎月発生する基本料金の算定方法と削減アプローチを解説しています。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の管理",
              description: "基本料金を左右するデマンド値の仕組みと、負荷率改善の実務アプローチを確認できます。",
            },
            {
              href: "/last-resort-supply-high-voltage",
              title: "高圧・特別高圧の最終保障供給",
              description: "最終保障供給時に特別高圧需要家が確認したい論点を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較で条件差を確認する"
          description="特別高圧は条件差の金額影響が大きくなりやすいため、同じ前提条件で比較して総額を確認することが重要です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/basic", label: "基礎知識をまとめて読む" },
          ]}
        />
      </section>
    </main>
  );
}
