import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import ContentCta from "../../../components/simulator/ContentCta";
import RelatedLinks from "../../../components/simulator/RelatedLinks";
import {
  CATEGORY_KEYS,
  getAllRetrospectiveSlugs,
  getRetrospectivePageData,
  YEAR_CONTEXTS,
  type CategoryKey,
} from "../_lib/retrospective-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const baseUrl = "https://simulator.eic-jp.org";

const categoryLinkLabels: Record<CategoryKey, string> = {
  "extra-high-voltage": "特別高圧",
  "high-voltage": "高圧",
  "low-voltage-power": "低圧電力",
  "low-voltage-lighting": "低圧電灯",
};

const formatDiffText = (value: number, positiveLabel: string, negativeLabel: string) => {
  if (value > 0) {
    return `${value.toFixed(1)}円/kWh${positiveLabel}`;
  }
  if (value < 0) {
    return `${Math.abs(value).toFixed(1)}円/kWh${negativeLabel}`;
  }
  return "前年差なし";
};

const formatSignedValue = (value: number) => (value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1));

export async function generateStaticParams() {
  return getAllRetrospectiveSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getRetrospectivePageData(slug);

  if (!data) {
    return {};
  }

  const url = `${baseUrl}/business-electricity-retrospective/${slug}`;
  return {
    title: data.pageTitle,
    description: data.pageDescription,
    keywords: [
      `${data.category.label} 電気料金 ${data.year}年`,
      `${data.category.label} 電気代 推移`,
      "法人 電気料金 振り返り",
      `${data.year}年 電力コスト`,
      `${data.category.label} kWh単価`,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: data.pageTitle,
      description: data.pageDescription,
      url,
      siteName: "法人電気料金ナビ",
      locale: "ja_JP",
      type: "article",
      images: [
        {
          url: "/ogp-default.png",
          width: 1200,
          height: 630,
          alt: `${data.year}年 ${data.category.label}の振り返り`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.pageTitle,
      description: data.pageDescription,
      images: ["/twitter-default.png"],
    },
  };
}

export default async function BusinessElectricityRetrospectiveYearCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getRetrospectivePageData(slug);
  if (!data) {
    notFound();
  }

  const yearContext = YEAR_CONTEXTS[data.year];

  const chartWidth = 800;
  const chartHeight = 320;
  const paddingLeft = 40;
  const paddingRight = 20;
  const paddingTop = 20;
  const paddingBottom = 44;
  const chartInnerWidth = chartWidth - paddingLeft - paddingRight;
  const chartInnerHeight = chartHeight - paddingTop - paddingBottom;
  const maxValue = Math.max(...data.monthlyRows.map((item) => item.value));
  const minValue = Math.min(...data.monthlyRows.map((item) => item.value));
  const valueRange = maxValue - minValue || 1;
  const tickCount = 5;

  const getX = (index: number) => {
    const step = chartInnerWidth / (data.monthlyRows.length - 1);
    return paddingLeft + step * index;
  };

  const getY = (value: number) => {
    const normalized = (value - minValue) / valueRange;
    return paddingTop + chartInnerHeight - normalized * chartInnerHeight;
  };

  const linePoints = data.monthlyRows.map((item, index) => `${getX(index)},${getY(item.value)}`).join(" ");
  const areaPoints = [
    `${getX(0)},${paddingTop + chartInnerHeight}`,
    linePoints,
    `${getX(data.monthlyRows.length - 1)},${paddingTop + chartInnerHeight}`,
  ].join(" ");

  const previousComparisonText = data.previousYearComparison
    ? formatDiffText(data.previousYearComparison.diff, "上昇", "低下")
    : null;
  const nextComparisonText = data.nextYearComparison
    ? formatDiffText(data.nextYearComparison.diff, "上昇", "低下")
    : null;
  const topMonthsText = data.maxMonths.join("・");
  const bottomMonthsText = data.minMonths.join("・");
  const startEndTrendText =
    data.startEndDiff > 0
      ? `年初から年末にかけて${Math.abs(data.startEndDiff).toFixed(1)}円/kWh上昇`
      : data.startEndDiff < 0
        ? `年初から年末にかけて${Math.abs(data.startEndDiff).toFixed(1)}円/kWh低下`
        : "年初と年末は同水準";

  const q1ToQ4Diff = Number((data.quarterlyAverages[3].value - data.quarterlyAverages[0].value).toFixed(1));
  const q1ToQ4Text =
    q1ToQ4Diff > 0
      ? `Q1からQ4にかけて+${q1ToQ4Diff.toFixed(1)}円/kWh`
      : q1ToQ4Diff < 0
        ? `Q1からQ4にかけて${q1ToQ4Diff.toFixed(1)}円/kWh`
        : "Q1とQ4は同水準";

  const categoryKey = data.category.key;
  const prevYearSlug =
    data.year > 2020 ? (`${data.year - 1}-${categoryKey}` as const) : null;
  const nextYearSlug =
    data.year < 2025 ? (`${data.year + 1}-${categoryKey}` as const) : null;
  const alternateCategoryKey = CATEGORY_KEYS.find((key) => key !== categoryKey) ?? categoryKey;
  const alternateYearSlug = `${data.year}-${alternateCategoryKey}` as const;

  const retrospectiveRelatedLinks = [
    {
      href: "/business-electricity-retrospective",
      title: "法人電気料金振り返り（一覧・月次）",
      description: "年次ページの前後関係や最新月次記事へ戻る入口です。",
    },
    {
      href: "/business-electricity-price-trend-10-years",
      title: "法人向け電気料金の10年推移で長期の位置づけを確認する",
      description: "単年データの前後を、長期チャートと解説で補います。",
    },
    {
      href: "/why-business-electricity-prices-rise",
      title: "法人の電気料金が上がる理由",
      description: "その年の水準を、構造要因の観点から説明しやすくなります。",
    },
    ...(prevYearSlug
      ? [
          {
            href: `/business-electricity-retrospective/${prevYearSlug}`,
            title: `【${data.year - 1}年】${data.category.label}の電気料金を振り返る`,
            description: "前年同区分の年間推移で、変化の幅を比較できます。",
          },
        ]
      : []),
    ...(nextYearSlug
      ? [
          {
            href: `/business-electricity-retrospective/${nextYearSlug}`,
            title: `【${data.year + 1}年】${data.category.label}の電気料金を振り返る`,
            description: "翌年同区分へ進むと、トレンドの続きを確認できます。",
          },
        ]
      : []),
    ...(alternateYearSlug !== data.slug
      ? [
          {
            href: `/business-electricity-retrospective/${alternateYearSlug}`,
            title: `【${data.year}年】${categoryLinkLabels[alternateCategoryKey]}の電気料金を振り返る`,
            description: "同じ年の別契約区分を見て、横比較の軸を補います。",
          },
        ]
      : []),
  ];

  return (
    <>
      <ArticleJsonLd
        headline={data.pageTitle}
        description={data.pageDescription}
        url={`${baseUrl}/business-electricity-retrospective/${slug}`}
        datePublished={`${data.year}-01-01`}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り", url: "https://simulator.eic-jp.org/business-electricity-retrospective" },
          { name: data.pageTitle },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            【{data.year}年】{data.category.label}の電気料金を振り返る
          </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、{data.year}年の{data.category.label}のkWhあたり単価を月別に整理します。数値はすべて
          小数点第一位で四捨五入しており、年間平均・高値安値・前後年比較まで一つのページで確認できます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          {data.category.shortLabel}は、主に{data.category.users}
          で関係する区分です。単月だけでなく年単位で確認することで、現在の価格水準を実務的に判断しやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          特に法人実務では、見積比較・契約更新・予算策定のタイミングが月単位で分散するため、どの月を基準に見たかで評価が変わりやすくなります。
          年間の並びを確認しておくことで、単月の印象だけで判断するリスクを減らせます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページは、月別表・年間指標・前後年比較・四半期平均を同じ前提で並べ、社内説明や稟議で使いやすい形にしています。
          年間平均だけでなく、どの時期に高く、どの時期に落ち着いたかまで把握できる構成です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          ※掲載している単価は、消費税および再生可能エネルギー発電促進賦課金を含まない参考値です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">{data.year}年の{data.category.label}料金データ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表は、{data.year}年の月別単価です。毎月の値を同じ丸め条件で並べることで、年内の流れを横並びで比較できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、請求書の総額だけを見ていると、使用量変動と単価変動が混ざって見えることがあります。kWhあたり単価の推移を独立して確認しておくと、
            「使用量が増えた結果の増額なのか」「単価そのものが上がったのか」を切り分けやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">月</th>
                  <th className="border-b border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                    {data.category.label}のkWhあたり単価
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.monthlyRows.map((item) => (
                  <tr key={item.month} className="odd:bg-white even:bg-slate-50/60">
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{item.month}</td>
                    <td className="border-b border-slate-200 px-4 py-3 text-slate-700">{item.value.toFixed(1)}円/kWh</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年間の最高月は{topMonthsText}（{data.maxValue.toFixed(1)}円/kWh）、年間の最安月は{bottomMonthsText}（
            {data.minValue.toFixed(1)}円/kWh）です。高値と安値の差は{data.range.toFixed(1)}円/kWhあり、年間で見たときに
            一定の幅が存在することがわかります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            また、{startEndTrendText}という流れです。年初と年末の差は、翌年度予算や契約条件の目線を置く際の基準として使いやすい指標です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間平均と高値・安値</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間平均：{data.avg.toFixed(1)}円/kWh</li>
            <li>
              年間最高：{data.maxValue.toFixed(1)}円/kWh（{data.maxMonths.join("・")}）
            </li>
            <li>
              年間最安：{data.minValue.toFixed(1)}円/kWh（{data.minMonths.join("・")}）
            </li>
            <li>高値と安値の差：{data.range.toFixed(1)}円/kWh</li>
            <li>
              年初（1月）と年末（12月）の差：
              {data.startEndDiff > 0 ? "+" : ""}
              {data.startEndDiff.toFixed(1)}円/kWh
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年間平均は、年の代表値として便利ですが、それだけで意思決定すると高値月・安値月の実務インパクトを見落としがちです。
            {data.category.label}のように使用量規模が大きくなりやすい区分では、わずかな単価差でも月次コストに与える影響は無視できません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、平均・高値・安値・年初年末差をセットで見ることが重要です。ひとつの指標だけでなく複数の視点で確認することで、
            「平常水準」「上振れ月」「下振れ月」を切り分けた説明がしやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">前後年との比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ{data.category.label}区分で、前年・翌年の年間平均と比べると、{data.year}年の位置づけが見えやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {data.previousYearComparison ? (
              <li>
                前年（{data.previousYearComparison.year}年）平均 {data.previousYearComparison.avg.toFixed(1)}円/kWh
                と比べて {previousComparisonText}
              </li>
            ) : (
              <li>前年データは比較対象外です。</li>
            )}
            {data.nextYearComparison ? (
              <li>
                翌年（{data.nextYearComparison.year}年）平均 {data.nextYearComparison.avg.toFixed(1)}円/kWh
                と比べると {nextComparisonText}
              </li>
            ) : (
              <li>翌年データは比較対象外です。</li>
            )}
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単月比較だけで判断せず、年平均ベースで前後年を押さえておくと、予算説明や契約見直しの判断軸を合わせやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            前年比・翌年比は、「今の水準が特殊なのか」「長期トレンドの途中なのか」を判断するための補助線です。特に社内共有では、
            1年分だけを提示するより、前後年を含めた位置づけを添える方が合意形成が進みやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">{data.year}年の月別推移グラフ（{data.category.label}）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            表データを折れ線で可視化したグラフです。上昇局面と低下局面の切り替わりを視覚的に確認できます。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <svg
              viewBox={`0 0 ${chartWidth} ${chartHeight}`}
              className="h-[320px] min-w-[760px] w-full"
              role="img"
              aria-label={`${data.year}年の${data.category.label}の月別kWh単価推移グラフ`}
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

              {data.monthlyRows.map((item, index) => {
                const x = getX(index);
                const y = getY(item.value);
                return (
                  <g key={item.shortMonth}>
                    <circle cx={x} cy={y} r="4" fill="#0369a1" />
                    <text x={x} y={chartHeight - 14} textAnchor="middle" fontSize="11" fill="#334155">
                      {item.shortMonth}
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
            ※縦軸は{data.year}年内の最小値〜最大値（{data.minValue.toFixed(1)}〜{data.maxValue.toFixed(1)}
            円/kWh）を基準に表示しています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            グラフでは、月次の上下だけでなく、上昇局面がどれくらい継続したか、下降局面に切り替わる転換点がどこにあるかも確認できます。
            表と合わせて見ることで、単価トレンドを定量と視覚の両面から把握できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">四半期で見る年内の流れ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {data.year}年を四半期で区切ると、短期的なノイズをならした傾向が確認しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {data.quarterlyAverages.map((quarter) => (
              <li key={quarter.label}>
                {quarter.label}平均：{quarter.value.toFixed(1)}円/kWh
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            四半期で均すと、月次の短期変動に左右されにくく、年内の方向感が読み取りやすくなります。{q1ToQ4Text}
            となっており、年の前半と後半で単価水準に差があるかを確認できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            予算管理の現場では、四半期単位で見た傾向を次四半期の見込みに反映させるケースが多く、年次レビューとの相性が良い指標です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">この年の背景</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{yearContext.headline}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {yearContext.backgroundFactors.map((factor) => (
              <li key={factor}>{factor}</li>
            ))}
          </ul>
          {yearContext.jepxContext && (
            <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-800">JEPX卸市場の状況</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{yearContext.jepxContext}</p>
            </div>
          )}
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間の流れは3つの場面で読むと整理しやすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {data.year}年の{data.category.label}単価は、12カ月をそのまま追うだけでも傾向が見えますが、実務的には「前半・中盤・後半」の
            3つに分けて読むと、社内説明に使いやすい形になります。
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">1. 年初〜春先（1〜3月）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            1月は{data.monthlyRows[0].value.toFixed(1)}円/kWh、3月は{data.monthlyRows[2].value.toFixed(1)}円/kWhです。
            {yearContext.q1Context}
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">2. 春〜初夏（4〜6月）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            4月は{data.monthlyRows[3].value.toFixed(1)}円/kWh、6月は{data.monthlyRows[5].value.toFixed(1)}円/kWhです。
            {yearContext.q2Context}
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">3. 夏〜秋（7〜9月）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            7月は{data.monthlyRows[6].value.toFixed(1)}円/kWh、9月は{data.monthlyRows[8].value.toFixed(1)}円/kWhです。
            {yearContext.q3Context}
          </p>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">4. 秋〜年末（10〜12月）</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            10月は{data.monthlyRows[9].value.toFixed(1)}円/kWh、12月は{data.monthlyRows[11].value.toFixed(1)}円/kWhです。
            {yearContext.q4Context}
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            こうした4区分での読み方を固定しておくと、年度が変わっても同じフォーマットで比較でき、担当者間での認識ズレを抑えられます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人実務での読み方</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">年間平均だけで結論を出さない</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間平均{data.avg.toFixed(1)}円/kWhは全体像の把握に有効ですが、最高{data.maxValue.toFixed(1)}円/kWhと
            最安{data.minValue.toFixed(1)}円/kWhの差{data.range.toFixed(1)}円/kWhが示すように、月ごとの振れ幅も確認が必要です。
          </p>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">比較する基準月をそろえる</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            社内で「以前より高い/低い」と説明する際は、比較元の月を明確にそろえることが重要です。同じ年の中でも基準月が違えば
            印象が大きく変わるため、誤解を避けるには比較軸の統一が欠かせません。
          </p>
          {yearContext.practicalNotes.map((note, index) => (
            <div key={index}>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{data.year}年の実務ポイント {index + 1}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{note}</p>
            </div>
          ))}
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">{data.year}年の月ごとの要点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は、各月の値と前月差を短くまとめた一覧です。時系列で確認すると、どの月が転換点になっているかを把握しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            {data.monthlyDigest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年末の着地を起点に翌年を評価する場合は、12月値だけでなく秋以降の推移もあわせて確認するのが有効です。
            数カ月連続の方向感を見ておくと、翌年初の見込みを説明しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            {data.year}年の{data.category.label}は、年間平均{data.avg.toFixed(1)}円/kWh、高値{data.maxValue.toFixed(1)}
            円/kWh、安値{data.minValue.toFixed(1)}円/kWhでした。高値と安値の差は{data.range.toFixed(1)}円/kWhです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            前後年比較では、前年・翌年との位置づけを確認できます。自社の予算や契約更新を考える際は、単月ではなく年単位の流れと
            比較軸をそろえて見ることが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年初から年末までの差は{formatSignedValue(data.startEndDiff)}円/kWhで、{startEndTrendText}でした。年間平均だけでなく、
            高値・安値・四半期推移を合わせて確認することで、{data.year}年の{data.category.label}単価を実務で説明しやすい形に整理できます。
          </p>
        </section>

        <RelatedLinks
          heading="あわせて読みたい記事"
          intro="単年・単区分の数値だけで終わらせず、長期推移や上昇要因、前後年・別区分の比較へ進むと説明がしやすくなります。"
          links={retrospectiveRelatedLinks}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-slate-900">{data.year}年の別契約区分へ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            同じ年のほかの区分ページへ移動し、契約区分ごとの違いを並べて確認できます。
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORY_KEYS.map((key) => (
              <Link
                key={key}
                href={`/business-electricity-retrospective/${data.year}-${key}`}
                className={`rounded-lg border px-4 py-3 text-sm font-semibold hover:bg-slate-50 ${
                  key === categoryKey ? "border-sky-300 bg-sky-50 text-sky-900" : "border-slate-200 text-slate-800"
                }`}
              >
                {data.year}年 {categoryLinkLabels[key]}
              </Link>
            ))}
          </div>
        </section>
      </section>

      <div className="mt-8">
        <ContentCta
          heading="電気料金の見直しを検討中ですか？"
          description="月次データを踏まえて、自社の契約条件やリスクを専門家と一緒に確認しませんか。"
          links={[
            { href: "/simulate", label: "リスク診断シミュレーター" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
      </main>
    </>
  );
}
