import type { Metadata } from "next";
import LowVoltagePowerRetrospectiveCharts from "../_components/LowVoltagePowerRetrospectiveCharts";
import { LOW_VOLTAGE_POWER_MONTHLY_PRICES, getYearlySummary } from "../_lib/low-voltage-power-price-data";

const pageTitle =
  "低圧電力の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説";
const pageDescription =
  "2019年から2025年までの低圧電力の電気料金推移を年別に解説。コロナ禍による需要変化、ウクライナ危機後の燃料高、電気・ガス料金支援の影響まで、法人向けにわかりやすく整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/low-voltage-power-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/low-voltage-power-2019-2025",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "低圧電力の電気料金推移（2019年～2025年）",
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

export default function LowVoltagePowerRetrospectivePage() {
  const yearlyRows = getYearlySummary();
  const firstYear = yearlyRows[0];
  const latestYear = yearlyRows[yearlyRows.length - 1];
  const changeFrom2019 =
    firstYear && latestYear
      ? (((latestYear.averagePrice - firstYear.averagePrice) / firstYear.averagePrice) * 100).toFixed(1)
      : null;

  const peakPoint = LOW_VOLTAGE_POWER_MONTHLY_PRICES.reduce((max, current) =>
    current.price > max.price ? current : max
  );
  const bottomPoint = LOW_VOLTAGE_POWER_MONTHLY_PRICES.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電力の電気料金は、2019年から2025年にかけて変動幅が大きく推移しました。2020年から2021年は低下傾向
          が見られましたが、2022年に急上昇し、2023年以降も高いレンジで上下しています。動力設備を持つ店舗・作業場・
          小規模工場では、単価変動が利益に与える影響が大きいため、年次推移の把握が重要です。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年平均の推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          年平均の推移を見ると、低圧電力の平均単価は2019年が26.3円/kWh、2020年が25.4円/kWh、2021年が
          25.2円/kWhでした。そこから2022年に30.3円/kWhへ急上昇し、2023年は28.6円/kWh、2024年は29.9円/kWh、
          2025年は30.2円/kWhと高止まりしています。2019年比では
          {changeFrom2019 !== null ? `約${changeFrom2019}%高い` : "高い"}水準です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          月次データではピークが{peakPoint.date.slice(0, 7).replace("-", "年")}月の
          {peakPoint.price.toFixed(1)}円/kWh、ボトムが{bottomPoint.date.slice(0, 7).replace("-", "年")}月の
          {bottomPoint.price.toFixed(1)}円/kWhでした。
        </p>

        <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead className="bg-slate-100">
              <tr>
                <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年</th>
                <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">
                  年平均単価（円/kWh）
                </th>
                <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">前年比</th>
              </tr>
            </thead>
            <tbody>
              {yearlyRows.map((row) => (
                <tr key={row.year} className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">{row.year}</td>
                  <td className="border-b border-slate-200 px-3 py-2">{row.averagePrice.toFixed(1)}</td>
                  <td className="border-b border-slate-200 px-3 py-2">
                    {row.yearOverYear === null
                      ? "-"
                      : `${row.yearOverYear > 0 ? "+" : ""}${row.yearOverYear.toFixed(1)}%`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <LowVoltagePowerRetrospectiveCharts />
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年：比較的安定しつつも季節変動あり</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年の低圧電力は、年平均で26.3円/kWhでした。月別では23.6円～28.4円/kWhと、低圧電灯よりも振れ幅が
          大きく、動力需要の影響を受けやすい特徴が見られます。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2020年：コロナ禍でやや低下</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2020年の年平均は25.4円/kWhで、2019年より約3.4%低下しました。年後半は上下を繰り返しつつも、全体として
          は前年より低めのレンジです。需要減と燃料市況の変化が低圧電力にも反映された年でした。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2021年：低水準で推移しつつ年後半に上振れ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2021年の年平均は25.2円/kWhで、2020年よりわずかに低下しました。1月は20.0円/kWhまで下がる一方、11月は
          29.1円/kWhまで上がっており、年内でも変動幅が大きい点が特徴です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2022年：急騰局面、36円台の高値を記録</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の年平均は30.3円/kWhで、前年比20.2%増でした。秋以降の上昇が顕著で、11月には36.8円/kWhまで
          上昇しています。低圧電力は変動幅が大きく、急騰局面でのコスト負担が重くなりやすい区分です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2023年：前年より低下するも依然高値圏</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2023年の年平均は28.6円/kWhで、2022年比では5.6%低下しました。ただし、年内には30円台の月も複数あり、
          平時より高い単価レンジが続いています。補助政策の下支えがあっても、高止まり感は残る結果となりました。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2024年：再上昇し、年平均は29.9円/kWh</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2024年の年平均は29.9円/kWhで、前年比4.5%上昇しました。春から初夏にかけて上昇し、年末には34.0円/kWh
          まで上がっています。低圧電力は、設備稼働の影響も受けやすいため、単価と使用量を分けて管理する視点が重要です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2025年：30円台中心で高止まり継続</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2025年の年平均は30.2円/kWhで、2024年より1.0%上昇しました。夏場に一時低下する月はあるものの、春・初夏・
          年末には30円台が続き、高止まり基調が継続しています。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年～2025年の低圧電力の電気料金推移から読み取れること</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この7年間の推移は、(1)2019〜2021年の緩やかな低下、(2)2022年の急騰、(3)2023〜2025年の高止まり、
          の流れで整理できます。低圧電力は月次の振れ幅が大きく、単価変化が月次収支に直結しやすい区分です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          実務では、年間平均だけでなくピーク月・ボトム月・前後年比較を合わせて確認することで、契約見直しや予算編成の
          判断精度を上げられます。特に高騰局面では、単価トレンドの継続性を四半期単位で点検することが有効です。
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">まとめ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力の電気料金は、2019年の26.3円/kWhから2025年は30.2円/kWhへ上昇しました。2022年に急騰した後、
            2023年以降も高い単価レンジが続いています。単価変動の影響が大きい契約区分のため、年次推移と月次ピークを
            併せて確認することが重要です。
          </p>
        </div>
      </section>
    </main>
  );
}
