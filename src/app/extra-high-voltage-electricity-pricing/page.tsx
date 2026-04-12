import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "特別高圧電力の料金の見方｜法人が請求書と料金構造で確認したいポイント";
const pageDescription =
  "特別高圧電力の料金の見方を法人向けに解説。基本料金、電力量料金、燃料費調整額、再エネ賦課金などの見方や、高圧電力との違いを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧電力 料金の見方",
    "特別高圧 請求書 見方",
    "特別高圧 高圧 違い 料金",
    "法人 電力契約 特別高圧",
    "特別高圧 電気料金 内訳",
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
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">特別高圧電力の料金の見方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧は、高圧よりさらに大きな需要を持つ施設で使われることが多い契約区分です。工場、大規模商業施設、
          データセンター、大型物流施設などで関係しやすく、請求額への影響も大きくなりやすい傾向があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、特別高圧の料金を確認するときに押さえたい基本を、請求書の見方と見直し実務の観点で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧電力とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧電力は、一般的に大口需要家向けの契約区分として扱われます。低圧や高圧より契約条件の個別性が高くなりやすく、
            料金水準や見積条件も個別設計になるケースが少なくありません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            対象施設の規模が大きい分、同じ単価差でも金額影響が大きくなりやすい点が実務上の特徴です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の料金は何で構成されるか</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金は契約電力との関係が強く、固定費部分を把握するうえで最初に確認したい項目です。契約電力の設定が変わると、
            月次の固定的な負担額も変わります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量料金は実際の使用量に応じて変動する部分です。使用量だけでなく、契約メニューや時間帯別の条件差が影響することもあるため、
            使用実態との相性を見ながら判断する必要があります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料費調整額</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は燃料価格変動を反映する項目です。単価比較だけでは見落としやすいため、請求額の増減要因として切り分けて確認することが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">再エネ賦課金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は制度に基づく費用項目です。特別高圧のように使用量が大きい契約では金額影響も大きくなりやすいため、
            制度要因として理解しておく必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力との違いをどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧は高圧より契約規模が大きく、料金影響額も大きくなりやすい区分です。見積比較でも、単価だけでなく契約条件差を丁寧に確認する姿勢が重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約規模が大きく、固定費・変動費ともに影響額が出やすい</li>
            <li>契約条件や見積条件が個別化しやすい</li>
            <li>単価の見た目より、総額の決まり方で比較する必要がある</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧の基礎は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧電力の料金の見方
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の請求書で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力</li>
            <li>使用量</li>
            <li>基本料金</li>
            <li>電力量料金</li>
            <li>燃料費調整額</li>
            <li>再エネ賦課金</li>
            <li>どの項目が変動して請求増につながったか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧の料金を見直すときの視点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見直しでは、使用量だけでなく契約条件を合わせて確認します。契約電力が実態に合っているか、燃料費調整額や市場連動要素の有無、
            契約期間や更新条件を含めて総額で判断することが実務的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧では、料金影響額が大きくなりやすいため、基本料金・電力量料金・調整項目を分けて理解することが大切です。単価だけでなく、
            契約条件と総額感で見ることで、見直し判断の精度を高めやすくなります。
          </p>
        </section>

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
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="特別高圧の料金理解を、請求確認と比較判断につなげるための導線です。"
          links={[
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧契約の請求構造を基礎から確認できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金や見積比較の前提になる考え方を整理できます。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "料金項目を全体俯瞰で確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "実際の請求書を確認する順番を整理できます。",
            },
            {
              href: "/last-resort-supply-high-voltage",
              title: "高圧・特別高圧の法人が最終保障供給で確認したいポイント",
              description: "最終保障供給時に特別高圧需要家が確認したい論点を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較で条件差を確認する"
          description="特別高圧は条件差の金額影響が大きくなりやすいため、同じ前提条件で比較して総額を確認することが重要です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="extra-high-voltage-electricity-pricing" />
      </div>
    </main>
  );
}
