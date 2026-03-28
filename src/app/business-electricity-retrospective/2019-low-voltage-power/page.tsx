import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "【2019年】低圧電力の電気料金を振り返る｜月別のkWh単価と年間の動き";
const pageDescription =
  "2019年の低圧電力料金を月別のkWhあたり単価で振り返ります。年間平均・高値安値に加え、低圧電力を利用する主な需要家像を整理します。";

const monthlyPrices = [
  { month: "2019年1月", price: "23.6円/kWh" },
  { month: "2019年2月", price: "24.3円/kWh" },
  { month: "2019年3月", price: "26.6円/kWh" },
  { month: "2019年4月", price: "26.9円/kWh" },
  { month: "2019年5月", price: "27.6円/kWh" },
  { month: "2019年6月", price: "28.0円/kWh" },
  { month: "2019年7月", price: "27.3円/kWh" },
  { month: "2019年8月", price: "23.9円/kWh" },
  { month: "2019年9月", price: "25.1円/kWh" },
  { month: "2019年10月", price: "27.0円/kWh" },
  { month: "2019年11月", price: "28.4円/kWh" },
  { month: "2019年12月", price: "26.5円/kWh" },
];

const monthlyChartData = [
  { month: "1月", value: 23.6 },
  { month: "2月", value: 24.3 },
  { month: "3月", value: 26.6 },
  { month: "4月", value: 26.9 },
  { month: "5月", value: 27.6 },
  { month: "6月", value: 28.0 },
  { month: "7月", value: 27.3 },
  { month: "8月", value: 23.9 },
  { month: "9月", value: 25.1 },
  { month: "10月", value: 27.0 },
  { month: "11月", value: 28.4 },
  { month: "12月", value: 26.5 },
];

const monthlyDigest = [
  "1月：23.6円/kWhでスタート",
  "2月：24.3円/kWhへ上昇",
  "3月：26.6円/kWhまで上昇",
  "4月：26.9円/kWhで高止まり",
  "5月：27.6円/kWhへさらに上昇",
  "6月：28.0円/kWhで上半期ピーク",
  "7月：27.3円/kWhへ低下",
  "8月：23.9円/kWhまで急低下",
  "9月：25.1円/kWhへ反発",
  "10月：27.0円/kWhへ再上昇",
  "11月：28.4円/kWhで年間ピーク",
  "12月：26.5円/kWhで年末着地",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-low-voltage-power",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-low-voltage-power",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "2019年の低圧電力料金の振り返り",
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

export default function BusinessElectricityRetrospective2019LowVoltagePowerPage() {
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
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2019年】低圧電力の電気料金を振り返る</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電力は、モーターやポンプなど動力設備を持つ需要家で使われる契約区分です。設備稼働時間の影響を受けやすく、
          単価変動と使用量変動が重なると、請求額の振れ幅が大きくなりやすい特徴があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、2019年の低圧電力料金を月別のkWhあたり単価で振り返ります。数値は小数点第一位で四捨五入しています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電力は、動力機器（モーター、ポンプ、空調の動力、冷凍・冷蔵設備など）を使う需要家で利用される区分で、
          小規模工場、作業場、冷蔵設備を持つ店舗、機械設備のある事業所などで利用されます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の低圧電力料金データ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずは2019年の月別単価を確認します。下表は、低圧電力のkWhあたり単価を小数点第一位で四捨五入した値です。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">月</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                    低圧電力のkWhあたり単価
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
            低圧電力は年間を通じた変動幅が大きく、上昇局面と低下局面がはっきり切り替わる年でした。
            年後半に再上昇して11月にピークをつけた点も特徴です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間平均と高値・安値</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間平均：26.3円/kWh</li>
            <li>年間最高：28.4円/kWh（11月）</li>
            <li>年間最安：23.6円/kWh（1月）</li>
            <li>高値と安値の差：4.8円/kWh</li>
            <li>年初（1月）と年末（12月）の差：+2.9円/kWh</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の低圧電力は、年内の変動幅が比較的大きく、特に春以降の上昇局面が目立ちます。動力負荷の大きい需要家では、
            単価差がコストに与える影響が大きくなりやすい区分です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高値28.4円/kWhと安値23.6円/kWhの差は4.8円/kWhで、低圧電灯や高圧と比べても変動幅が大きい水準です。
            稼働率が高い月と重なると、コストインパクトはさらに拡大します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の月別推移グラフ（低圧電力）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            表データを折れ線グラフで可視化したものです。年内で上昇・低下・再上昇が切り替わる特徴を視覚的に確認できます。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[320px] min-w-[760px] w-full"
              role="img"
              aria-label="2019年の低圧電力の月別kWh単価推移グラフ"
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
            ※縦軸は2019年内の最小値〜最大値（23.6〜28.4円/kWh）を基準に表示しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">利用者像（低圧電力）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力は、照明中心ではなく動力中心の利用者が主な対象です。設備稼働時間や季節要因により電力量が変わりやすいため、
            単価変動と使用量の両面から月次管理することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            具体的には、町工場、食品加工の作業場、冷蔵・冷凍設備を持つ小売、機械設備を使う整備業など、
            動力負荷が主役となる事業者が中心です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間の流れは3つの場面に分けると見やすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の低圧電力は、年間を3つの局面で整理すると、変動の意味を把握しやすくなります。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">1. 年初から初夏にかけて上昇</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            1月23.6円/kWhから始まり、2月24.3円/kWh、3月26.6円/kWh、4月26.9円/kWh、5月27.6円/kWh、
            6月28.0円/kWhへと上昇しました。上半期は明確な上昇局面です。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">2. 夏場にいったん低下</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            7月27.3円/kWhから8月23.9円/kWhへ大きく下がり、9月は25.1円/kWhへ戻す動きとなりました。
            この期間は変化が速く、単月判断の難しさが出やすい局面です。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">3. 秋以降に再上昇し年末へ</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月は27.0円/kWh、11月は28.4円/kWhで年間ピーク、12月は26.5円/kWhまで下がって着地しました。
            年末は年初より2.9円/kWh高く、年を通すと上昇寄りの結果です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人実務ではどう読むべきか</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">変動幅を前提に予算を組む</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間平均26.3円/kWhだけで予算化すると、ピーク月との乖離が出る可能性があります。低圧電力では
            最大値と最小値の差を前提にしたレンジ管理が有効です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">稼働計画と単価動向を重ねる</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            動力設備の稼働が増える月に単価が上がると、請求額は二重に上がります。設備保守・生産計画・営業時間の見直しと
            単価推移をあわせて見ることで、実効的なコスト管理が可能になります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">比較月を固定して社内説明を行う</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            8月の23.9円/kWhを基準にするのか、11月の28.4円/kWhを基準にするのかで判断は変わります。
            社内レポートでは比較軸を固定し、見方のブレを減らすことが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の低圧電力料金を月ごとに簡潔に見ると</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各月の印象を短くまとめると次の通りです。
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
            2019年の低圧電力料金は、前半上昇・夏場低下・秋再上昇という局面が明確な年でした。年間平均は26.3円/kWh、
            最高は11月の28.4円/kWh、最安は1月の23.6円/kWhです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高値と安値の差は4.8円/kWhで、動力需要家にとっては実務的な影響が大きい水準です。単月ではなく年間の流れで把握し、
            稼働計画とあわせて管理する視点が重要です。
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
              href="/business-electricity-retrospective/2019-low-voltage-lighting"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              2019年 低圧電灯の振り返り
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
