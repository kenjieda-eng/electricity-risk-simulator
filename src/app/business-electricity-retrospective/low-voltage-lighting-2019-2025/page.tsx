import type { Metadata } from "next";
import LowVoltageLightingRetrospectiveCharts from "../_components/LowVoltageLightingRetrospectiveCharts";
import {
  LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES,
  getYearlySummary,
} from "../_lib/low-voltage-lighting-price-data";

const pageTitle =
  "低圧電灯の電気料金推移（2019年～2025年）｜コロナ・燃料高・補助金の影響を年別に解説";
const pageDescription =
  "2019年から2025年までの低圧電灯の電気料金推移を年別に解説。コロナ禍による需要変化、ウクライナ危機後の燃料高、電気・ガス料金支援の影響まで、法人向けにわかりやすく整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/low-voltage-lighting-2019-2025",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/low-voltage-lighting-2019-2025",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "低圧電灯の電気料金推移（2019年～2025年）",
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

export default function LowVoltageLightingRetrospectivePage() {
  const yearlyRows = getYearlySummary();
  const firstYear = yearlyRows[0];
  const latestYear = yearlyRows[yearlyRows.length - 1];
  const changeFrom2019 =
    firstYear && latestYear
      ? (((latestYear.averagePrice - firstYear.averagePrice) / firstYear.averagePrice) * 100).toFixed(1)
      : null;

  const peakPoint = LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES.reduce((max, current) =>
    current.price > max.price ? current : max
  );
  const bottomPoint = LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電灯の電気料金は、2019年から2025年にかけて大きく変動しました。2020年から2021年は低下傾向で推移
          しましたが、2022年には燃料高の影響で急上昇し、その後も高止まりしながら推移しています。店舗・小規模
          オフィスなどの照明系契約では、単価変動が毎月のコスト感に直結するため、年次で流れを確認することが重要です。
        </p>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年平均の推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          年平均の推移を見ると、低圧電灯の平均単価は2019年が22.7円/kWh、2020年が21.4円/kWh、2021年が
          21.2円/kWhでした。そこから2022年に26.8円/kWhへ急上昇し、2023年は25.5円/kWh、2024年は26.4円/kWh、
          2025年は26.9円/kWhと高水準が続いています。2019年比では
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

        <LowVoltageLightingRetrospectiveCharts />
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年：コロナ前の比較的安定した水準</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2019年の低圧電灯は、年平均で22.7円/kWhでした。月別では21.7円～23.2円/kWhの範囲で推移しており、
          年内の振れ幅は限定的です。後年と比べると、この年は低圧電灯単価が比較的安定していた時期といえます。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2020年：コロナ禍で低下基調に</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2020年の年平均は21.4円/kWhで、2019年より約5.7%低下しました。年後半にかけて下がる流れが続き、12月は
          19.7円/kWhまで低下しています。世界的な需要減と燃料価格の軟化が、低圧電灯の単価にも反映された年でした。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2021年：低水準で推移しつつ後半に持ち直し</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2021年の年平均は21.2円/kWhで、2020年よりわずかに低下しました。前半は19円台中心でしたが、年後半には
          22円台まで戻しており、翌年の上昇局面につながる変化が見られます。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2022年：燃料高で急上昇、31円台まで到達</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2022年の年平均は26.8円/kWhで、前年比26.4%増の大幅上昇でした。1月22.9円/kWhから12月31.2円/kWhへ
          一気に上がり、低圧電灯でも仕入環境の悪化が強く反映された年です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2023年：補助金が下支えするも高値圏が続く</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2023年の年平均は25.5円/kWhで、2022年比では4.9%低下しました。ただし年初は31.3円/kWhと非常に高く、
          年間を通じて24〜26円台中心の高値圏です。補助政策の効果で急騰は緩和された一方、平時水準には戻っていません。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2024年：再び上昇し、夏場に29円台</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2024年の年平均は26.4円/kWhで、前年比3.5%上昇しました。夏場にかけて上昇し、7月は29.0円/kWhまで
          上がっています。低圧電灯は需要家数が多く、単価水準の変化が広い業種に影響する点が特徴です。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2025年：高止まりのまま年平均は26.9円/kWh</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2025年の年平均は26.9円/kWhで、2024年からさらに1.9%上昇しました。年内では25円台後半〜28円台後半で
          推移しており、低圧電灯単価は依然としてコロナ前より高い水準にあります。
        </p>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年～2025年の低圧電灯の電気料金推移から読み取れること</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この7年間の推移は、(1)2019〜2021年の低下・安定、(2)2022年の急上昇、(3)2023〜2025年の高止まり局面、
          の3段階で整理できます。低圧電灯は、照明・コンセント用途を中心とする契約のため、幅広い業種で実務的な影響が
          大きい区分です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          価格判断では、「単月で下がったか」だけでなく、年平均の位置、ピーク月とボトム月、政策支援の有無を合わせて
          見ることが重要です。予算策定・契約見直し・社内説明の精度を高めるには、長期の推移を構造的に把握する視点が
          欠かせません。
        </p>

        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-lg font-semibold text-slate-900">まとめ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電灯の電気料金は、2019年の22.7円/kWhから、2025年は26.9円/kWhへ上昇しました。2020年から2021年は
            低下傾向でしたが、2022年に急騰し、2023年以降も高止まり水準が続いています。今後の判断でも、単月だけでなく
            年次推移と政策影響をセットで確認することが実務上重要です。
          </p>
        </div>
      </section>
    </main>
  );
}
