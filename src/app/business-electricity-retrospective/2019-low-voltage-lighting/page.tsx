import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "【2019年】低圧電灯の電気料金を振り返る｜月別のkWh単価と年間の動き";
const pageDescription =
  "2019年の低圧電灯料金を月別のkWhあたり単価で振り返ります。年間平均・高値安値に加え、低圧電灯を利用する主な需要家像を整理します。";

const monthlyPrices = [
  { month: "2019年1月", price: "22.6円/kWh" },
  { month: "2019年2月", price: "22.8円/kWh" },
  { month: "2019年3月", price: "22.8円/kWh" },
  { month: "2019年4月", price: "22.6円/kWh" },
  { month: "2019年5月", price: "22.6円/kWh" },
  { month: "2019年6月", price: "23.0円/kWh" },
  { month: "2019年7月", price: "23.1円/kWh" },
  { month: "2019年8月", price: "23.2円/kWh" },
  { month: "2019年9月", price: "23.0円/kWh" },
  { month: "2019年10月", price: "22.6円/kWh" },
  { month: "2019年11月", price: "22.0円/kWh" },
  { month: "2019年12月", price: "21.7円/kWh" },
];

const monthlyChartData = [
  { month: "1月", value: 22.6 },
  { month: "2月", value: 22.8 },
  { month: "3月", value: 22.8 },
  { month: "4月", value: 22.6 },
  { month: "5月", value: 22.6 },
  { month: "6月", value: 23.0 },
  { month: "7月", value: 23.1 },
  { month: "8月", value: 23.2 },
  { month: "9月", value: 23.0 },
  { month: "10月", value: 22.6 },
  { month: "11月", value: 22.0 },
  { month: "12月", value: 21.7 },
];

const monthlyDigest = [
  "1月：22.6円/kWhでスタート",
  "2月：22.8円/kWhへ上昇",
  "3月：22.8円/kWhで高めを維持",
  "4月：22.6円/kWhへ小幅低下",
  "5月：22.6円/kWhで横ばい",
  "6月：23.0円/kWhへ上昇",
  "7月：23.1円/kWhで上昇継続",
  "8月：23.2円/kWhで年間ピーク",
  "9月：23.0円/kWhへ低下",
  "10月：22.6円/kWhへ戻る",
  "11月：22.0円/kWhへ下がる",
  "12月：21.7円/kWhで年間最安",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-low-voltage-lighting",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-low-voltage-lighting",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "2019年の低圧電灯料金の振り返り",
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

export default function BusinessElectricityRetrospective2019LowVoltageLightingPage() {
  const chartWidth = 800;
  const chartHeight = 320;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 44;
  const chartInnerWidth = chartWidth - paddingLeft - paddingRight;
  const chartInnerHeight = chartHeight - paddingTop - paddingBottom;
  const maxValue = Math.max(...monthlyChartData.map((item) => item.value));
  const minValue = Math.min(...monthlyChartData.map((item) => item.value));
  const valueRange = maxValue - minValue || 1;
  const tickCount = 5;

  const getX = (index: number) => {
    const step = chartInnerWidth / (monthlyChartData.length - 1);
    return paddingLeft + step * index;
  };

  const getY = (value: number) => {
    const normalized = (value - minValue) / valueRange;
    return paddingTop + chartInnerHeight - normalized * chartInnerHeight;
  };

  const linePoints = monthlyChartData
    .map((item, index) => `${getX(index)},${getY(item.value)}`)
    .join(" ");

  const areaPoints = [
    `${getX(0)},${paddingTop + chartInnerHeight}`,
    linePoints,
    `${getX(monthlyChartData.length - 1)},${paddingTop + chartInnerHeight}`,
  ].join(" ");

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2019年】低圧電灯の電気料金を振り返る</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電灯は、照明・一般コンセント用途を中心とする需要家にとって、日々の運営コストへ直接つながる契約区分です。
          単月の請求額だけを見ていると、年間の流れを見誤ることがあるため、月次の並びで把握することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、2019年の低圧電灯料金を月別のkWhあたり単価で振り返ります。数値は小数点第一位で四捨五入しています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電灯は、主に照明・コンセント用途を中心とする契約区分で、商店、小規模オフィス、飲食店、
          サービス店舗、小規模施設などでの利用が多い区分です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の低圧電灯料金データ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずは、2019年の月別単価を確認します。下表は低圧電灯のkWhあたり単価を小数点第一位で四捨五入した値です。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">月</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                    低圧電灯のkWhあたり単価
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyPrices.map((item) => (
                  <tr key={item.month} className="odd:bg-white even:bg-slate-50/60">
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{item.month}</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ※上記は小数点第一位で四捨五入した値です（消費税・再エネ賦課金を含みません）。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2019年は、夏場にかけて上昇し、秋以降は下がる流れでした。年末にかけて低下が進んでおり、
            年初より低い水準で着地しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間平均と高値・安値</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間平均：22.7円/kWh</li>
            <li>年間最高：23.2円/kWh（8月）</li>
            <li>年間最安：21.7円/kWh（12月）</li>
            <li>高値と安値の差：1.5円/kWh</li>
            <li>年初（1月）と年末（12月）の差：-0.9円/kWh</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の低圧電灯は、夏場にかけてやや上昇し、秋以降は低下して年末に最安となる流れでした。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電灯の利用者は、営業時間帯の照明や空調の使い方で使用量が変わりやすいため、単価変動と使用量変動を分けて
            確認することで、コスト要因を説明しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の月別推移グラフ（低圧電灯）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            表データを折れ線グラフで可視化したものです。夏場に高く、秋から年末にかけて下がる流れを視覚的に確認できます。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[320px] min-w-[760px] w-full"
              role="img"
              aria-label="2019年の低圧電灯の月別kWh単価推移グラフ"
            >
              {Array.from({ length: tickCount }, (_, index) => {
                const ratio = index / (tickCount - 1);
                const y = paddingTop + chartInnerHeight * ratio;
                const tickValue = maxValue - valueRange * ratio;
                return (
                  <g key={`grid-${index}`}>
                    <line
                      x1={paddingLeft}
                      y1={y}
                      x2={chartWidth - paddingRight}
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="1"
                    />
                    <text x={8} y={y + 4} fontSize="12" fill="#64748b">
                      {tickValue.toFixed(1)}
                    </text>
                  </g>
                );
              })}

              <polygon points={areaPoints} fill="#e0f2fe" />
              <polyline points={linePoints} fill="none" stroke="#0284c7" strokeWidth="3" />

              {monthlyChartData.map((item, index) => {
                const x = getX(index);
                const y = getY(item.value);
                return (
                  <g key={item.month}>
                    <circle cx={x} cy={y} r="4" fill="#0369a1" />
                    <text x={x} y={chartHeight - 14} textAnchor="middle" fontSize="11" fill="#334155">
                      {item.month}
                    </text>
                    <text x={x} y={y - 10} textAnchor="middle" fontSize="11" fill="#0f172a">
                      {item.value.toFixed(1)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ※縦軸は2019年内の最小値〜最大値（21.7〜23.2円/kWh）を基準に表示しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">利用者像（低圧電灯）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電灯は、照明や一般コンセント負荷が中心の需要家で使われることが多く、営業時間帯の照明利用が多い
            店舗・小規模事業者で影響を受けやすい区分です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            具体的には、物販店、飲食店、美容・理容、クリニック、学習塾、小規模オフィスなど、動力設備よりも
            照明・一般負荷の比率が高い拠点が中心です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間の流れは3つの場面に分けると見やすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の低圧電灯は、年間を3つの局面に分けて見ると、変化の意味がつかみやすくなります。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">1. 年初から春先は22円台後半で推移</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            1月は22.6円/kWh、2月・3月は22.8円/kWhで、春先まで比較的高めの水準を維持しました。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">2. 初夏から夏場にかけて上昇</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            6月は23.0円/kWh、7月は23.1円/kWh、8月は23.2円/kWhで年間ピークとなり、夏場にかけて上昇しました。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">3. 秋以降は低下し年末に最安</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            9月からは低下に転じ、10月22.6円/kWh、11月22.0円/kWh、12月21.7円/kWhで着地しました。
            年末は年初より0.9円/kWh低い水準です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人実務ではどう読むべきか</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">平均だけでなく年間レンジを見る</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間平均は22.7円/kWhですが、ピーク23.2円/kWhと最安21.7円/kWhの差は1.5円/kWhあります。
            予算管理では平均値とレンジを併記すると、実態に近い説明ができます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">照明需要の時間帯を意識する</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電灯は営業時間や営業日数の影響を受けやすい区分です。単価が同じでも使用量が増えると請求額は上がるため、
            単価と運用要因を分けて確認することが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">比較月を固定して社内共有する</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            8月ピークと12月安値では見え方が異なります。社内報告では比較月を固定し、同じ物差しで推移を追うと判断のズレを防げます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の低圧電灯料金を月ごとに簡潔に見ると</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各月の印象を短く整理すると次の通りです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {monthlyDigest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の低圧電灯料金は、夏場に上昇して8月に23.2円/kWhのピークをつけ、その後は秋から年末にかけて低下し、
            12月は21.7円/kWhで着地しました。年間平均は22.7円/kWhです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            店舗や小規模オフィスなど照明需要の比率が高い利用者では、単価と使用時間帯の両面でコスト管理を行うことが重要です。
            2019年は、その運用視点を確認する基準年として使いやすい一年でした。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">関連ページ</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/business-electricity-retrospective"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              法人電気料金振り返り一覧
            </Link>
            <Link
              href="/business-electricity-retrospective/2019-extra-high-voltage"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              2019年 特別高圧の振り返り
            </Link>
            <Link
              href="/business-electricity-retrospective/2019-high-voltage"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              2019年 高圧の振り返り
            </Link>
            <Link
              href="/business-electricity-retrospective/2019-low-voltage-power"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              2019年 低圧電力の振り返り
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
