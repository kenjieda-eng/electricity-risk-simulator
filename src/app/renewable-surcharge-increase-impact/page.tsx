import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "再エネ賦課金上昇で法人の電気料金はどう変わるか｜制度改定と負担増の見方";
const pageDescription =
  "再生可能エネルギー発電促進賦課金（再エネ賦課金）が上昇した場合、法人の電気料金にどう影響するかを解説。制度の仕組み、将来の方向性、法人の負担増の計算方法を説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 上昇 法人",
    "再生可能エネルギー発電促進賦課金 電気料金",
    "再エネ賦課金 将来 見通し",
    "法人 電気料金 賦課金",
    "FIT 賦課金 負担",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/renewable-surcharge-increase-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/renewable-surcharge-increase-impact",
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

const surchargeHistory = [
  { year: "2012年度", amount: "0.22円/kWh", note: "制度開始" },
  { year: "2014年度", amount: "0.75円/kWh", note: "急増開始" },
  { year: "2017年度", amount: "2.64円/kWh", note: "" },
  { year: "2019年度", amount: "2.95円/kWh", note: "" },
  { year: "2022年度", amount: "3.45円/kWh", note: "過去最高水準" },
  { year: "2023年度", amount: "1.40円/kWh", note: "電力・ガス価格激変緩和措置による抑制" },
  { year: "2024年度", amount: "3.49円/kWh", note: "措置終了後の水準回帰" },
];

export default function RenewableSurchargeIncreaseImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          再エネ賦課金上昇で法人の電気料金はどう変わるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再生可能エネルギー発電促進賦課金（再エネ賦課金）は、FIT（固定価格買取制度）のコストを電力消費者全体で分担する制度です。2012年の制度開始以来、単価は増加傾向をたどり、大口需要家である法人にとって無視できないコスト要因となっています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ賦課金は固定プランでも市場連動プランでも、契約プランに関係なく使用量に応じて課されます。したがって、どのプランを選んでいても、賦課金の単価が上昇すれば法人の電気料金は増加します。このページでは、賦課金の仕組みと将来の方向性、法人への影響を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>再エネ賦課金の仕組みと決まり方</li>
            <li>過去の推移と将来の方向性</li>
            <li>法人の負担増の計算方法</li>
            <li>高使用量法人への影響と対策</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再エネ賦課金とはどのような制度か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は、FIT制度のもとで再生可能エネルギーの発電事業者から電力会社が買い取るコストを、電気利用者全体に按分して負担させる仕組みです。毎年度、経済産業省が単価を改定し、電気料金に自動的に反映されます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価の決まり方は、FITによる買取総額から再エネの市場価値相当分を差し引いた「回避可能費用超過分」を、全国の使用電力量で割って算出します。再エネ導入量が増えれば買取コストが増加し、市場の電力価格が低ければ超過分が大きくなるため、単価が上昇しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の基本的な仕組みは{" "}
            <Link
              href="/renewable-energy-surcharge"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              再エネ賦課金とは
            </Link>{" "}
            で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            過去の推移：10年で約15倍に
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の単価は制度開始以来、一貫して増加傾向にあります。以下に年度別の推移をまとめます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">年度</th>
                  <th className="p-3 text-left font-semibold text-slate-900">単価</th>
                  <th className="p-3 text-left font-semibold text-slate-900">備考</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {surchargeHistory.map((row) => (
                  <tr key={row.year}>
                    <td className="p-3 text-slate-700">{row.year}</td>
                    <td className="p-3 font-medium text-slate-700">{row.amount}</td>
                    <td className="p-3 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年度は政府の激変緩和措置（補助）により一時的に単価が抑制されましたが、措置終了後は再び3円台の水準に戻りました。この推移は、制度的な上昇圧力が継続していることを示しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人の負担増の計算方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の負担増は、以下の計算で求められます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">負担増の計算式</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              年間負担増（円）＝ 年間使用量（kWh）× 賦課金増加分（円/kWh）
            </p>
            <div className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
              <p>例1：年間 600,000kWh × +1円/kWh ＝ 年間 +600,000円</p>
              <p>例2：年間 1,200,000kWh × +1円/kWh ＝ 年間 +1,200,000円</p>
              <p>例3：年間 6,000,000kWh × +1円/kWh ＝ 年間 +6,000,000円</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大口の高圧・特別高圧需要家では、年間使用量が数百万〜数千万kWhに達するため、賦課金単価が1円上昇するだけでも年間数百万円規模のコスト増となります。このような法人には特に重要なリスク要因です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            将来の方向性：上昇圧力は続くか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の将来的な方向性を考えるうえでのポイントを整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">再エネ導入量の拡大：</span>
              政府の方針として再エネ比率の拡大が継続されており、FITによる買取コストは中長期的に増加していく可能性があります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">FIT→FIPへの移行：</span>
              新しいFIP制度では市場価格に応じた補助となるため、市場価格が低い局面では賦課金が増加しやすい構造です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">政府の激変緩和措置の不確実性：</span>
              過去に補助措置が講じられたことがありますが、恒常的な制度ではなく、将来の継続は不確実です。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中長期的には再エネ賦課金が年間の電気料金に占める割合が高まっていく可能性が高く、法人の電気料金管理において無視できないリスク要因として位置づけることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            備え方：賦課金上昇リスクへの対策
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の上昇は、プラン選択では回避できない制度負担です。そのため、対策の主軸は「影響額を事前に把握する」「使用量を減らして影響を最小化する」という方向になります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">年間使用量に基づいて影響額を試算しておく：</span>
              賦課金が「+0.5円」「+1円」「+2円」となった場合の年間追加コストを把握します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">省エネ投資の優先順位に反映する：</span>
              使用量を削減することで賦課金上昇の影響を最小化できます。ROIを計算する際の参考値として賦課金上昇シナリオを組み込みます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">自家消費太陽光発電の検討：</span>
              自家消費による電力使用量の削減は、賦課金負担の軽減にも直結します。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "FIT制度と賦課金の仕組みを基礎から解説。",
            },
            {
              href: "/capacity-contribution-increase-impact",
              title: "容量拠出金増加で法人の負担はどう変わるか",
              description: "再エネ賦課金に続く新たな制度負担の解説。",
            },
            {
              href: "/fuel-adjustment-surge-impact",
              title: "燃料費調整額上昇で法人の電気料金はどう上がるか",
              description: "賦課金と並ぶ電気料金上昇要因の解説。",
            },
            {
              href: "/lng-price-surge-electricity-cost-impact",
              title: "LNG高騰で法人の電気料金はどう上がるか",
              description: "燃料価格高騰シナリオの仕組みと影響。",
            },
            {
              href: "/business-electricity-cost-components",
              title: "法人の電気料金の内訳",
              description: "電気料金を構成する各要素の全体像。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "賦課金を含むコスト全体の見直し項目。",
            },
          ]}
        />

        <ContentCta
          heading="賦課金上昇シナリオを自社の数字で確認する"
          description="再エネ賦課金が上昇した場合の年間コスト増加額を、シミュレーターで試算できます。使用量の大きな法人ほど確認をお勧めします。"
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
