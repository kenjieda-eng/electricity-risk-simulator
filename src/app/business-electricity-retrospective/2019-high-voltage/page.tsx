import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "【2019年】高圧の法人電気料金を振り返る｜月別のkWh単価と年間の動き";
const pageDescription =
  "2019年の高圧電力料金を月別のkWhあたり単価で振り返ります。年間の高値・安値、年初から年末にかけた動き、法人実務での見方をわかりやすく整理します。";

const monthlyPrices = [
  { month: "2019年1月", price: "16.4円/kWh" },
  { month: "2019年2月", price: "16.6円/kWh" },
  { month: "2019年3月", price: "16.8円/kWh" },
  { month: "2019年4月", price: "16.7円/kWh" },
  { month: "2019年5月", price: "16.6円/kWh" },
  { month: "2019年6月", price: "16.1円/kWh" },
  { month: "2019年7月", price: "16.1円/kWh" },
  { month: "2019年8月", price: "15.9円/kWh" },
  { month: "2019年9月", price: "15.8円/kWh" },
  { month: "2019年10月", price: "15.6円/kWh" },
  { month: "2019年11月", price: "15.6円/kWh" },
  { month: "2019年12月", price: "15.3円/kWh" },
];

const monthlyChartData = [
  { month: "1月", value: 16.4 },
  { month: "2月", value: 16.6 },
  { month: "3月", value: 16.8 },
  { month: "4月", value: 16.7 },
  { month: "5月", value: 16.6 },
  { month: "6月", value: 16.1 },
  { month: "7月", value: 16.1 },
  { month: "8月", value: 15.9 },
  { month: "9月", value: 15.8 },
  { month: "10月", value: 15.6 },
  { month: "11月", value: 15.6 },
  { month: "12月", value: 15.3 },
];

const monthlyDigest = [
  "1月：16.4円/kWhでスタート",
  "2月：16.6円/kWhへ上昇",
  "3月：16.8円/kWhで年間ピーク",
  "4月：16.7円/kWhで高めの水準を維持",
  "5月：16.6円/kWhで引き続き高め",
  "6月：16.1円/kWhへ低下",
  "7月：16.1円/kWhで横ばい",
  "8月：15.9円/kWhへ低下",
  "9月：15.8円/kWhで下向き継続",
  "10月：15.6円/kWhまで下がる",
  "11月：15.6円/kWhで同水準",
  "12月：15.3円/kWhで年間最安値",
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-high-voltage",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-retrospective/2019-high-voltage",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "2019年の高圧法人電気料金の振り返り",
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

export default function BusinessElectricityRetrospective2019HighVoltagePage() {
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
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">【2019年】高圧の法人電気料金を振り返る</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を見直すとき、直近の請求書や見積書だけを見ると、その時点の印象に引っ張られやすくなります。
          実際には、電気料金は月ごとに動いており、ある月だけを切り取って見ると、年間の流れを見誤ることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          そこで重要になるのが、年単位での振り返りです。年間を通してどの時期に高かったのか、どの時期に落ち着いていたのか、
          上下の幅はどの程度だったのかを確認しておくと、いま見ている料金水準の意味を捉えやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、当社団が運営する「新電力ネット」の推移データをもとに、2019年の高圧電力料金を月別に振り返ります。
          高圧は、工場、オフィスビル、商業施設、病院、学校、各種事業所などで広く関係する区分であり、法人実務との相性が高い領域です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          なお、ここで掲載している数値は、高圧の電気料金に関するkWhあたり単価です。
          ※消費税および再生可能エネルギー発電促進賦課金は含まない単価です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の高圧電力料金データ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まず、2019年の月別データを確認します。下記は、高圧の電気料金に関するkWhあたり単価を、
            小数点1位まで四捨五入して表示したものです。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">月</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                    高圧のkWhあたり単価
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
            ※上記の単価は、消費税および再生可能エネルギー発電促進賦課金を含まない単価です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            数値を月順に見ると、2019年は前半と後半で空気が少し異なっていたことが見えてきます。年初から春先にかけては高めの水準が続き、
            その後は夏から秋にかけて下がり、年末に向けてさらに落ち着く流れでした。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            急激に跳ね上がる年というより、年の前半から後半にかけて、ゆるやかに水準が切り下がっていく年だったといえます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の年間平均と高値・安値</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の高圧電力料金を年間で見ると、年間平均は16.1円/kWhです。ここでも、数値はkWhあたり単価であり、
            消費税および再生可能エネルギー発電促進賦課金を含まない水準として見てください。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間で最も高かったのは、2019年3月の16.8円/kWhでした。一方、最も低かったのは、2019年12月の15.3円/kWhです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高値と安値の差は、1.5円/kWhです。差としては極端ではないようにも見えますが、使用量が大きい法人では、この差が月次コストや
            年間コストに一定の影響を与えます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            また、年初の16.4円/kWhと年末の15.3円/kWhを比べると、2019年は年初から年末にかけて1.1円/kWh低下しています。
            つまり、2019年は、前半がやや高く、後半に向けて落ち着いていった年と整理しやすい年です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の月別推移グラフ（高圧）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            表データを折れ線グラフで可視化したものです。春先に高く、夏以降に緩やかに下がる流れを視覚的に確認できます。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[320px] min-w-[760px] w-full"
              role="img"
              aria-label="2019年の高圧の月別kWh単価推移グラフ"
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
            ※縦軸は2019年内の最小値〜最大値（15.3〜16.8円/kWh）を基準に表示しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間の流れは3つの場面に分けると見やすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の高圧電力料金は、月ごとの数字を並べるだけでも傾向はわかりますが、流れとしては3つの場面に分けるとさらに見やすくなります。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">1. 年初から春先にかけては高めの水準</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            1月は16.4円/kWh、2月は16.6円/kWh、3月は16.8円/kWhでした。3月が年間のピークであり、4月も16.7円/kWhと高い水準にあります。
            5月も16.6円/kWhで、大きく崩れてはいません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このため、2019年は少なくとも春先までは、比較的しっかりした単価水準が続いていたことがわかります。年度替わりの時期に
            見積比較や契約更新を考える企業にとっては、この時期の印象が強く残りやすい年だったともいえます。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">2. 初夏から夏場にかけて水準が下がる</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            6月は16.1円/kWhとなり、5月までの流れから見ると一段低くなりました。7月も16.1円/kWhでほぼ同水準です。
            8月は15.9円/kWh、9月は15.8円/kWhとなり、夏から秋口にかけて、ゆるやかに下がる流れが続きました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            毎月の変化幅は大きくありません。ただ、数カ月をまとめて見ると、春先の高めの水準から少しずつ切り下がっていることがわかります。
            法人の電気料金は、このように急激ではないが、確かに方向感がある動きとして現れることも多く、単月だけでは見えにくい点です。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">3. 秋から年末にかけては低めの水準で推移</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月は15.6円/kWh、11月も15.6円/kWhで、ほぼ同じ水準でした。12月は15.3円/kWhとなり、ここが年間の最安値です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            春先と比べると、年末はかなり印象が異なります。2019年は、年の後半に向けて落ち着く流れがそのまま年末まで続いた年だったといえます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人実務では、この点が重要です。たとえば、春先の高い月を基準にするのか、年末の低い月を基準にするのかで、
            「いまの単価は高いのか、落ち着いているのか」の受け止め方が変わります。同じ2019年のデータでも、どの月と比較するかで印象はかなり変わります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2019年の高圧料金は、大きく荒れた年ではないが、流れははっきりしている
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の高圧電力料金は、後年の大きな変動局面と比べると、比較的落ち着いて見えるかもしれません。
            ただし、落ち着いていることと、変化がないことは同じではありません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">実際には、</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>春先が相対的に高い</li>
            <li>夏以降にゆるやかに下がる</li>
            <li>年末にかけて低い水準で着地する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            という年間の流れがはっきりあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            つまり2019年は、激しい乱高下の年ではない一方、年間の方向感は明確だった年といえます。
            このような年は、後年の上昇局面や下落局面を読むときの比較対象としても使いやすいのが特徴です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人実務ではどう読むべきか</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">年間平均だけで判断しない</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間平均は16.1円/kWhですが、平均値だけでは年の中の高低差は見えません。2019年は比較的穏やかな年に見えても、
            16.8円/kWhの月と15.3円/kWhの月がありました。見積比較や社内説明では、平均値だけではなく、年間の幅もあわせて見ることが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">比較の基準月で印象が変わる</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            3月の16.8円/kWhを基準にするのか、12月の15.3円/kWhを基準にするのかで、料金水準の見え方は変わります。
            社内で「以前より高い」「以前より安い」と説明するときは、いつの単価と比べているのかをそろえておく必要があります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">単月ではなく流れで見る</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ある1カ月だけを見ても、その年全体の傾向はわかりにくいことがあります。2019年のように毎月の差が極端でない年ほど、
            単月より年間の並びで見る方が実務に向いています。予算、契約見直し、社内稟議の場面でも、この視点は役立ちます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">単価の前提条件も確認する</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページの数値は、kWhあたり単価であり、消費税および再生可能エネルギー発電促進賦課金を含まない単価です。
            実際の請求書では、これ以外の要素も加わるため、請求額そのものと単純に一致するわけではありません。そのため、過去年比較や
            構造理解のための指標として使うのが適しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の高圧料金を月ごとに簡潔に見ると</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の各月の印象を短くまとめると、次のように整理できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {monthlyDigest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            こうして見ると、2019年は春高・年末低めという特徴がわかりやすく見えてきます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年の高圧電力料金をどう位置づけるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年は、高圧について見ると、大きく荒れた年ではなく、比較的落ち着いた中でゆるやかに下がっていく年と位置づけやすい年です。
            そのため、後から振り返ったときには基準年のように使いやすく、変動の大きい年との比較にも向いています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            また、法人向けの料金見直しでは、足元の請求額だけを見るのではなく、平時に近い年のkWhあたり単価がどのくらいだったのかを
            確認しておくことが有効です。2019年のようなデータは、そのための参照材料として使いやすいといえます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019年の高圧電力料金は、kWhあたり単価ベースで見ると、年間平均は16.1円/kWhでした。最も高かったのは3月の16.8円/kWh、
            最も低かったのは12月の15.3円/kWhで、年間の差は1.5円/kWhありました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            流れとしては、年初から春先にかけて高めの水準が続き、初夏以降はゆるやかに下がり、年末に向けて落ち着いていく年でした。
            急騰や急落の年ではありませんが、年間の方向感ははっきりしており、法人実務では単月よりも流れで読むことが重要だとわかります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            なお、このページで示した数値は、消費税および再生可能エネルギー発電促進賦課金を含まない、高圧のkWhあたり単価です。
            請求額の総額をそのまま示すものではなく、年間の傾向や比較の基準を確認するための参考データとして見るのが適しています。
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
              href="/business-electricity-price-trend-10-years"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              法人電気料金の10年推移を見る
            </Link>
            <Link
              href="/high-voltage-electricity-pricing"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              高圧の電気料金単価の基礎
            </Link>
            <Link
              href="/electricity-price-trend-2019-2025"
              className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              2019-2025年の推移比較
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
