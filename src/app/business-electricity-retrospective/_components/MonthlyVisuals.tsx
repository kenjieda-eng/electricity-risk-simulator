/**
 * 月次振り返りページ用ビジュアルコンポーネント
 * すべてServer Component（SVGベース、"use client"不要）
 */
import type { MonthlyPageData } from "../_lib/monthly-page-data";

/* ─── 1. データサマリーカード ─── */

function DiffBadge({ diff }: { diff: number | null }) {
  if (diff === null) return null;
  const isUp = diff > 0;
  const isFlat = diff === 0;
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
        isFlat ? "text-slate-500" : isUp ? "text-red-600" : "text-emerald-600"
      }`}
    >
      {isFlat ? "→" : isUp ? "▲" : "▼"}
      {isFlat ? "横ばい" : `${Math.abs(diff).toFixed(1)}円`}
    </span>
  );
}

export function MonthlyDataCards({ data }: { data: MonthlyPageData }) {
  const bgColors = [
    "border-indigo-200 bg-indigo-50",
    "border-sky-200 bg-sky-50",
    "border-amber-200 bg-amber-50",
    "border-emerald-200 bg-emerald-50",
  ];
  const textColors = [
    "text-indigo-900",
    "text-sky-900",
    "text-amber-900",
    "text-emerald-900",
  ];
  const valueColors = [
    "text-indigo-700",
    "text-sky-700",
    "text-amber-700",
    "text-emerald-700",
  ];

  return (
    <section className="mt-6">
      <h2 className="text-xl font-semibold text-slate-900">
        {data.year}年{data.month}月の契約区分別kWh単価
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
        当社団が運営している「新電力ネット」のデータをもとに、契約区分ごとのkWhあたり単価を整理しました。
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {data.categories.map((cat, i) => (
          <div key={cat.label} className={`rounded-xl border p-4 ${bgColors[i]}`}>
            <p className={`text-sm font-semibold ${textColors[i]}`}>{cat.label}</p>
            <p className={`mt-1 text-2xl font-bold tracking-tight ${valueColors[i]}`}>
              {cat.value.toFixed(1)}
              <span className="ml-1 text-sm font-normal text-slate-500">円/kWh</span>
            </p>
            <div className="mt-2 flex items-center gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                前月比 <DiffBadge diff={cat.diff} />
              </span>
              {cat.prevYearDiff !== null && (
                <span className="flex items-center gap-1">
                  前年比 <DiffBadge diff={cat.prevYearDiff} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500">
        ※消費税および再生可能エネルギー発電促進賦課金を含まない参考値です。
      </p>
    </section>
  );
}

/* ─── 2. 直近6ヶ月推移グラフ（SVG） ─── */

const CHART_COLORS = ["#4f46e5", "#0284c7", "#d97706", "#059669"] as const;
const CHART_LABELS = ["特別高圧", "高圧", "低圧電灯", "低圧電力"] as const;

export function MonthlyTrendChart({ data }: { data: MonthlyPageData }) {
  const { trendData } = data;
  if (trendData.length < 2) return null;

  const W = 720;
  const H = 300;
  const PL = 48; // padding left
  const PR = 16;
  const PT = 24;
  const PB = 52;
  const innerW = W - PL - PR;
  const innerH = H - PT - PB;

  // 全値から min/max を取得
  const allValues = trendData.flatMap((d) => d.values);
  const rawMin = Math.min(...allValues);
  const rawMax = Math.max(...allValues);
  const padding = (rawMax - rawMin) * 0.1 || 1;
  const minVal = rawMin - padding;
  const maxVal = rawMax + padding;
  const range = maxVal - minVal;

  const getX = (i: number) => PL + (innerW / (trendData.length - 1)) * i;
  const getY = (v: number) => PT + innerH - ((v - minVal) / range) * innerH;

  const tickCount = 5;

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">
        直近6ヶ月の推移（4区分比較）
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
        当月を含む直近6ヶ月のkWh単価推移を、契約区分別に表示しています。
      </p>

      {/* 凡例 */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
        {CHART_LABELS.map((label, i) => (
          <span key={label} className="flex items-center gap-1.5">
            <span
              className="inline-block h-2.5 w-4 rounded-sm"
              style={{ backgroundColor: CHART_COLORS[i] }}
            />
            {label}
          </span>
        ))}
      </div>

      <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-[300px] min-w-[680px] w-full"
          role="img"
          aria-label={`${data.year}年${data.month}月を含む直近6ヶ月の契約区分別kWh単価推移`}
        >
          {/* グリッド線 + Y軸ラベル */}
          {Array.from({ length: tickCount }, (_, idx) => {
            const ratio = idx / (tickCount - 1);
            const y = PT + innerH * ratio;
            const val = maxVal - range * ratio;
            return (
              <g key={`tick-${idx}`}>
                <line x1={PL} y1={y} x2={W - PR} y2={y} stroke="#e2e8f0" strokeWidth="1" />
                <text x={6} y={y + 4} fontSize="11" fill="#64748b">
                  {val.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* 4本の折れ線 */}
          {[0, 1, 2, 3].map((catIdx) => {
            const points = trendData
              .map((d, i) => `${getX(i)},${getY(d.values[catIdx])}`)
              .join(" ");
            return (
              <g key={catIdx}>
                <polyline
                  points={points}
                  fill="none"
                  stroke={CHART_COLORS[catIdx]}
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {trendData.map((d, i) => (
                  <circle
                    key={`${catIdx}-${i}`}
                    cx={getX(i)}
                    cy={getY(d.values[catIdx])}
                    r="3.5"
                    fill={CHART_COLORS[catIdx]}
                  />
                ))}
                {/* 最終点にラベル */}
                <text
                  x={getX(trendData.length - 1) + 4}
                  y={getY(trendData[trendData.length - 1].values[catIdx]) + 4}
                  fontSize="10"
                  fill={CHART_COLORS[catIdx]}
                  fontWeight="600"
                >
                  {trendData[trendData.length - 1].values[catIdx].toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* X軸ラベル */}
          {trendData.map((d, i) => (
            <text
              key={d.label}
              x={getX(i)}
              y={H - 10}
              textAnchor="middle"
              fontSize="11"
              fill="#334155"
            >
              {d.label}
            </text>
          ))}
        </svg>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        ※縦軸は表示期間内の最小値〜最大値を基準に自動調整しています。
      </p>
    </section>
  );
}

/* ─── 3. 前年同月比テーブル ─── */

export function YearComparisonTable({ data }: { data: MonthlyPageData }) {
  const { sameMonthHistory, month, year } = data;
  if (sameMonthHistory.length < 2) return null;

  const currentEntry = sameMonthHistory.find((e) => e.year === year);
  const prevEntry = sameMonthHistory.find((e) => e.year === year - 1);

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">{month}月のkWh単価：年別比較</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
        同じ{month}月で過去の水準と比較すると、現在の料金がどのあたりに位置しているかを把握しやすくなります。
      </p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full border-collapse text-sm leading-6 sm:text-base">
          <thead className="bg-slate-50">
            <tr>
              <th className="border-b border-slate-200 px-3 py-2.5 text-left font-semibold text-slate-900">
                契約区分
              </th>
              {sameMonthHistory.map((entry) => (
                <th
                  key={entry.year}
                  className={`border-b border-slate-200 px-3 py-2.5 text-right font-semibold ${
                    entry.year === year ? "bg-sky-50 text-sky-900" : "text-slate-900"
                  }`}
                >
                  {entry.year}年
                </th>
              ))}
              {prevEntry && (
                <th className="border-b border-slate-200 px-3 py-2.5 text-right font-semibold text-slate-900">
                  前年比
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {CHART_LABELS.map((label, catIdx) => {
              const currentVal = currentEntry?.values[catIdx];
              const prevVal = prevEntry?.values[catIdx];
              const diff = currentVal != null && prevVal != null
                ? Math.round((currentVal - prevVal) * 10) / 10
                : null;
              return (
                <tr key={label} className="odd:bg-white even:bg-slate-50/60">
                  <td className="border-b border-slate-200 px-3 py-2.5 font-medium text-slate-800">
                    {label}
                  </td>
                  {sameMonthHistory.map((entry) => (
                    <td
                      key={entry.year}
                      className={`border-b border-slate-200 px-3 py-2.5 text-right tabular-nums ${
                        entry.year === year ? "bg-sky-50 font-semibold text-sky-900" : "text-slate-700"
                      }`}
                    >
                      {entry.values[catIdx].toFixed(1)}円
                    </td>
                  ))}
                  {diff !== null && (
                    <td className="border-b border-slate-200 px-3 py-2.5 text-right">
                      <DiffBadge diff={diff} />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        ※単位は円/kWh。消費税および再生可能エネルギー発電促進賦課金を含まない参考値です。
      </p>
    </section>
  );
}

/* ─── 4. 補助金影響の可視化（横棒グラフ） ─── */

type SubsidyInfo = {
  lowVoltage: number;   // 低圧への補助単価 (円/kWh)
  highVoltage: number;  // 高圧への補助単価 (円/kWh)
};

export function SubsidyImpactChart({
  data,
  subsidy,
  monthLabel,
}: {
  data: MonthlyPageData;
  subsidy: SubsidyInfo;
  monthLabel: string;
}) {
  // 低圧電灯=index2, 低圧電力=index3, 高圧=index1
  const items = [
    {
      label: "低圧電灯",
      currentValue: data.categories[2].value,
      subsidyAmount: subsidy.lowVoltage,
    },
    {
      label: "低圧電力",
      currentValue: data.categories[3].value,
      subsidyAmount: subsidy.lowVoltage,
    },
    {
      label: "高圧",
      currentValue: data.categories[1].value,
      subsidyAmount: subsidy.highVoltage,
    },
  ];

  const maxBarValue = Math.max(...items.map((item) => item.currentValue + item.subsidyAmount));
  const barScale = 100 / maxBarValue;

  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">
        {monthLabel}の補助金インパクト
      </h2>
      <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
        補助がなかった場合の実力値（薄色部分）と、補助適用後の単価を並べて表示しています。
        特別高圧は補助対象外のため含まれていません。
      </p>
      <div className="mt-4 space-y-4">
        {items.map((item) => {
          const realValue = item.currentValue + item.subsidyAmount;
          const barW = realValue * barScale;
          const subsidyW = item.subsidyAmount * barScale;
          const currentW = barW - subsidyW;
          return (
            <div key={item.label}>
              <div className="mb-1 flex items-baseline justify-between">
                <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                <span className="text-xs text-slate-500">
                  実力値 {realValue.toFixed(1)}円 → 補助後 {item.currentValue.toFixed(1)}円
                </span>
              </div>
              <div className="flex h-7 overflow-hidden rounded-md border border-slate-200">
                <div
                  className="flex items-center bg-sky-600"
                  style={{ width: `${currentW}%` }}
                >
                  <span className="px-1.5 text-xs font-semibold text-white">
                    {item.currentValue.toFixed(1)}
                  </span>
                </div>
                <div
                  className="flex items-center bg-red-200"
                  style={{ width: `${subsidyW}%` }}
                >
                  <span className="px-1.5 text-xs font-semibold text-red-700">
                    -{item.subsidyAmount.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-sm bg-sky-600" />
          補助後の単価
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-4 rounded-sm bg-red-200" />
          補助による減額分
        </span>
      </div>
      <p className="mt-2 text-xs text-slate-500">
        ※実力値は補助単価を加算した概算値です。実際の請求額は電力会社・契約条件により異なります。
      </p>
    </section>
  );
}
