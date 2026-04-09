import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CapacityContributionChartCard from "../../components/capacity-contribution/CapacityContributionCharts";

const pageTitle = "容量拠出金で電気代はどのくらい上がるのか｜契約区分別の影響試算";
const pageDescription =
  "容量拠出金のkWhあたり影響額を契約区分別（特別高圧・高圧・低圧）に試算。再エネ賦課金・燃調費との比較、市場連動と固定プランでの出方の違いも含めて整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 影響額",
    "容量拠出金 kWh 単価",
    "法人 電気料金 上昇 試算",
    "容量拠出金 高圧 特別高圧",
    "容量拠出金 市場連動 固定",
    "電気料金 制度負担 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/capacity-contribution-cost-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/capacity-contribution-cost-impact",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function CapacityContributionCostImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">料金が上がる理由を知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">容量拠出金で電気代はどのくらい上がるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            容量拠出金の仕組み
          </Link>
          を踏まえたうえで、このページでは法人の電気代への具体的な影響額を整理します。
          契約区分別の年間コスト増、再エネ賦課金・燃料費調整額との比較、市場連動プランと固定プランでの出方の違いを確認できます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* kWhあたりの影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">kWhあたりの転嫁単価はどのくらいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金のkWhあたり転嫁単価は、容量市場の約定価格と小売電気事業者の販売電力量をもとに算出されます。
            2024年度は約0.5円/kWh程度でしたが、約定価格の上昇に伴い、2026年度には約1.1円/kWhに達する見込みです。
          </p>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-500">2024年度</p>
              <p className="mt-1 text-2xl font-bold text-sky-700">約0.5円<span className="text-base font-medium">/kWh</span></p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-center">
              <p className="text-xs font-semibold text-slate-500">2025年度</p>
              <p className="mt-1 text-2xl font-bold text-blue-700">約0.8円<span className="text-base font-medium">/kWh</span></p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm text-center">
              <p className="text-xs font-semibold text-amber-700">2026年度</p>
              <p className="mt-1 text-2xl font-bold text-amber-700">約1.1円<span className="text-base font-medium">/kWh</span></p>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            ※ 上記は容量市場の約定価格・販売電力量から概算した参考値です。実際の転嫁額は小売電気事業者の方針により異なります。
          </p>
        </section>

        {/* 契約区分別の影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別の年間影響額</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年間使用量によって影響額は大きく変わります。特別高圧の大口需要家は年間数百万円単位、高圧でも数十万円単位の影響が見込まれます。
          </p>

          <div className="mt-4">
            <CapacityContributionChartCard
              kind="impact-by-voltage"
              title="契約区分別 容量拠出金の年間影響額（概算）"
              description="2024年度と2026年度の比較。使用量が大きい区分ほど影響額が拡大します。"
            />
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-900">契約区分</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">年間使用量（目安）</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">2024年度</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">2026年度</th>
                  <th className="px-3 py-2 font-semibold text-slate-900">増加額</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">特別高圧</td>
                  <td className="px-3 py-2">800万 kWh</td>
                  <td className="px-3 py-2">約400万円</td>
                  <td className="px-3 py-2">約880万円</td>
                  <td className="px-3 py-2 font-semibold text-rose-700">+480万円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">高圧</td>
                  <td className="px-3 py-2">60万 kWh</td>
                  <td className="px-3 py-2">約30万円</td>
                  <td className="px-3 py-2">約66万円</td>
                  <td className="px-3 py-2 font-semibold text-rose-700">+36万円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 font-medium">低圧電力</td>
                  <td className="px-3 py-2">6万 kWh</td>
                  <td className="px-3 py-2">約3万円</td>
                  <td className="px-3 py-2">約6.6万円</td>
                  <td className="px-3 py-2 font-semibold text-rose-700">+3.6万円</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">低圧電灯</td>
                  <td className="px-3 py-2">3万 kWh</td>
                  <td className="px-3 py-2">約1.5万円</td>
                  <td className="px-3 py-2">約3.3万円</td>
                  <td className="px-3 py-2 font-semibold text-rose-700">+1.8万円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            ※ 年間影響額 = kWhあたり転嫁単価 &times; 年間使用量 で概算。実際の金額は契約内容により異なります。
          </p>
        </section>

        {/* 料金構成要素の比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金・燃調費と比べてどの程度か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は、再エネ賦課金（2025年度: 約3.5円/kWh）と比べると金額は小さいものの、
            燃料費調整額と同規模の影響に成長しつつあります。制度要因が複数重なることで、合計の負担増は無視できない水準です。
          </p>

          <div className="mt-4">
            <CapacityContributionChartCard
              kind="cost-components"
              title="法人向け電気料金の構成要素（kWhあたり概算）"
              description="基本料金+電力量料金、燃調費、再エネ賦課金、容量拠出金の積み上げ推移。"
            />
          </div>

          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">制度負担の年度別推移（kWhあたり概算）</h3>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="text-center">
                <p className="text-xs font-semibold text-slate-500">再エネ賦課金</p>
                <p className="mt-1 text-sm text-slate-700">1.4円 → <span className="font-bold">3.5円</span>（2023→2026）</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-slate-500">容量拠出金</p>
                <p className="mt-1 text-sm text-slate-700">0円 → <span className="font-bold">1.1円</span>（2023→2026）</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-slate-500">制度負担 合計増</p>
                <p className="mt-1 text-sm font-bold text-rose-700">+3.2円/kWh</p>
              </div>
            </div>
          </div>
        </section>

        {/* 市場連動 vs 固定 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランでの出方の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の転嫁方法は、契約タイプによって異なります。
            <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動プランと固定プラン
            </Link>
            のどちらを選んでいるかで、見積比較の際の注意点が変わります。
          </p>

          <div className="mt-4">
            <CapacityContributionChartCard
              kind="fixed-vs-market"
              title="固定プランと市場連動プランでの容量拠出金の出方"
              description="固定プランは単価に内包、市場連動プランは別途請求されるケースが多い。"
            />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">固定プラン</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-7 text-slate-700">
                <li>&#9679; 契約単価に容量拠出金が含まれている</li>
                <li>&#9679; 請求書上は見えにくいが、更新時の単価上昇に反映</li>
                <li>&#9679; 見積比較時は「容量拠出金込みか」を確認</li>
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">市場連動プラン</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-7 text-slate-700">
                <li>&#9679; 容量拠出金が別途請求される場合がある</li>
                <li>&#9679; 「容量拠出金」「容量市場費用」等の名称で明記</li>
                <li>&#9679; 年度改定時に単価が変わる点にも注意</li>
              </ul>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>容量拠出金は2024年度の約0.5円/kWhから、2026年度には約1.1円/kWhまで上昇する見込み</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>特別高圧では年間数百万円規模、高圧でも数十万円規模のコスト増につながる</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>再エネ賦課金と合わせた制度負担の合計は2023年度比で+3.2円/kWh以上に達する</span>
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 text-sky-700">&#9679;</span>
              <span>固定プランでは更新時の単価上昇、市場連動プランでは別途請求に注意が必要</span>
            </li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは｜法人の電気料金にどう影響するか",
              description: "容量市場の仕組みと転嫁構造の基本を解説します。",
            },
            {
              href: "/capacity-contribution-what-to-check",
              title: "容量拠出金を踏まえて法人が確認したいこと",
              description: "見積書・契約書での確認ポイントと予算策定への織り込み方を整理します。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどのくらい上がるのか",
              description: "単価改定、調整項目、補助金終了など複合的な上昇要因を整理します。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方やリスクの違いを比較し、選定軸を整理します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="容量拠出金を含めた電気料金リスクを把握する"
          description="制度負担の増加を含めた上昇リスクを、シミュレーターで30秒で診断できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
  );
}
