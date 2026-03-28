import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "【2019年】特別高圧の法人電気料金を振り返る｜月別のkWh単価と年間の動き";
const pageDescription =
  "2019年の特別高圧電力料金を月別のkWhあたり単価で振り返ります。年間平均・高値安値・年初から年末までの流れを簡潔に整理します。";

const monthlyPrices = [
  { month: "2019年1月", price: "12.6円/kWh" },
  { month: "2019年2月", price: "13.0円/kWh" },
  { month: "2019年3月", price: "12.8円/kWh" },
  { month: "2019年4月", price: "12.7円/kWh" },
  { month: "2019年5月", price: "12.3円/kWh" },
  { month: "2019年6月", price: "12.1円/kWh" },
  { month: "2019年7月", price: "12.5円/kWh" },
  { month: "2019年8月", price: "12.4円/kWh" },
  { month: "2019年9月", price: "12.2円/kWh" },
  { month: "2019年10月", price: "11.6円/kWh" },
  { month: "2019年11月", price: "11.7円/kWh" },
  { month: "2019年12月", price: "11.6円/kWh" },
];

const monthlyChartData = [
  { month: "1月", value: 12.6 },
  { month: "2月", value: 13.0 },
  { month: "3月", value: 12.8 },
  { month: "4月", value: 12.7 },
  { month: "5月", value: 12.3 },
  { month: "6月", value: 12.1 },
  { month: "7月", value: 12.5 },
  { month: "8月", value: 12.4 },
  { month: "9月", value: 12.2 },
  { month: "10月", value: 11.6 },
  { month: "11月", value: 11.7 },
  { month: "12月", value: 11.6 },
];

const monthlyDigest = [
  "1月：12.6円/kWhでスタート",
  "2月：13.0円/kWhで年間ピーク",
  "3月：12.8円/kWhへやや低下",
  "4月：12.7円/kWhで高めを維持",
  "5月：12.3円/kWhへ低下",
  "6月：12.1円/kWhまで下がる",
  "7月：12.5円/kWhへ反発",
  "8月：12.4円/kWhでやや低下",
  "9月：12.2円/kWhへ低下",
  "10月：11.6円/kWhで年間最安水準",
  "11月：11.7円/kWhで小幅反発",
  "12月：11.6円/kWhで年末着地",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-extra-high-voltage",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-extra-high-voltage",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "2019年の特別高圧法人電気料金の振り返り",
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

export default function BusinessElectricityRetrospective2019ExtraHighVoltagePage() {
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
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2019年】特別高圧の法人電気料金を振り返る</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を見直す際、単月の請求だけでは全体の流れを見誤ることがあります。特別高圧のように使用量が大きい契約区分では、
          わずかな単価差が月次コストや年間コストに与える影響が大きくなりやすいのが実務上の特徴です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、2019年の特別高圧電力料金を月別のkWhあたり単価で振り返ります。掲載値は小数点第一位で四捨五入しています。
          年間の高値・安値、年初と年末の差、途中の方向感をまとめて確認できる構成です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          なお、ここで示す単価は、消費税および再生可能エネルギー発電促進賦課金を含まない前提です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の特別高圧電力料金データ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずは2019年の月別データを確認します。下表は、特別高圧のkWhあたり単価を小数点第一位で四捨五入した値です。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">月</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                    特別高圧のkWhあたり単価
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
            年間を通して見ると、春先が相対的に高く、秋から年末にかけて低い水準へ移る傾向が読み取れます。
            毎月の変化幅は極端ではありませんが、方向感は比較的はっきりしています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間平均と高値・安値</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間平均：12.3円/kWh</li>
            <li>年間最高：13.0円/kWh（2月）</li>
            <li>年間最安：11.6円/kWh（10月・12月）</li>
            <li>高値と安値の差：1.4円/kWh</li>
            <li>年初（1月）と年末（12月）の差：-1.0円/kWh</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の特別高圧は、春先にやや高く、その後は年末に向けて低下する流れでした。極端な乱高下ではない一方、
            年間を通じた方向感は確認できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧では、契約電力規模が大きい需要家が多いため、1円未満の単価差でも年間インパクトは小さくありません。
            そのため、平均値だけでなく、高値月と安値月の差をあわせて確認する視点が重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の月別推移グラフ（特別高圧）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            表データを折れ線グラフで可視化したものです。春先に高く、秋から年末にかけて低めへ移る流れを視覚的に確認できます。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[320px] min-w-[760px] w-full"
              role="img"
              aria-label="2019年の特別高圧の月別kWh単価推移グラフ"
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
            ※縦軸は2019年内の最小値〜最大値（11.6〜13.0円/kWh）を基準に表示しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間の流れは3つの場面に分けると見やすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の特別高圧料金は、単純な上下だけでなく、年内での局面の切り替わりを見ると理解しやすくなります。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">1. 年初から春先は高めの水準</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            1月は12.6円/kWh、2月は13.0円/kWh、3月は12.8円/kWhで推移しました。2月が年間ピークであり、
            4月の12.7円/kWhまで高めの水準が続いています。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">2. 初夏は一段低下、夏に一時反発</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            5月は12.3円/kWh、6月は12.1円/kWhまで下がり、春先より水準が切り下がります。7月は12.5円/kWhへ
            いったん戻したものの、8月は12.4円/kWh、9月は12.2円/kWhと再び低下基調へ戻っています。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">3. 秋から年末は低めの水準で着地</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月は11.6円/kWhで年間最安水準となり、11月は11.7円/kWh、12月は11.6円/kWhでした。
            年初と比べると年末は1.0円/kWh低く、年間の終盤は落ち着いた価格帯で推移した年といえます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人実務ではどう読むべきか</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">平均値だけでなく幅を確認する</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間平均の12.3円/kWhは便利な指標ですが、最大13.0円/kWhと最小11.6円/kWhの差は1.4円/kWhあります。
            実務では、平均値とあわせて年間レンジを押さえることで、見積や予算の説明精度が上がります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">比較対象の月をそろえる</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「以前より高い・安い」を判断するとき、2月基準と12月基準では印象が変わります。社内比較や契約更改時には、
            どの月を基準にしているかをそろえることが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">単価の前提条件を揃えて使う</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページの値は、消費税・再エネ賦課金を含まない単価です。請求総額と直接一致する数値ではないため、
            「傾向把握や年比較の基準」として使うのが適しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の特別高圧料金を月ごとに簡潔に見ると</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各月の印象を短くまとめると次の通りです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {monthlyDigest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の特別高圧料金をどう位置づけるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の特別高圧は、急騰・急落というより、前半高め・後半低めの流れが明確な年です。大きなショック局面の年と比べると
            安定的に見える一方、実務では年間の方向感を読む基準年として使いやすい特徴があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            過去比較を行う際には、単月の印象で判断せず、年内の連続した変化を確認することで、次の契約判断や予算設定の精度を高められます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の特別高圧料金は、年初から春先に高め、秋から年末に低めという流れでした。年間平均は12.3円/kWhで、
            高値と安値の差は1.4円/kWhです。単月だけでなく、年間の連続した動きで把握することが実務上重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月・12月の11.6円/kWhが最安水準で、2月の13.0円/kWhが年間ピークでした。年初と年末の差は-1.0円/kWhで、
            2019年は年後半に落ち着いていく傾向が明確です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            なお、掲載値は消費税および再生可能エネルギー発電促進賦課金を含まない単価です。請求総額そのものではなく、
            年間の傾向比較や社内説明の基準データとして活用するのが適しています。
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
