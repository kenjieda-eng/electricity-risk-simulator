"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { ChartData, ChartOptions } from "chart.js";
import { monthNames, type ScenarioResult } from "../../../lib/simulator";
import type {
  ChartSeriesKey,
  InputState,
  SeriesVisibility,
} from "./types";
import type { Dispatch, SetStateAction } from "react";

const chartLoading = () => (
  <div className="h-full w-full animate-pulse rounded-md bg-slate-100" aria-hidden="true" />
);

const LineChart = dynamic(
  () => import("../../../components/charts/SimulatorCharts").then((m) => m.SimulatorLineChart),
  { ssr: false, loading: chartLoading }
);

const BarChart = dynamic(
  () => import("../../../components/charts/SimulatorCharts").then((m) => m.SimulatorBarChart),
  { ssr: false, loading: chartLoading }
);

type SimulatorChartProps = {
  state: InputState;
  setState: Dispatch<SetStateAction<InputState>>;
  orderedMonths: number[];
  baselineScenario: ScenarioResult;
  currentScenario: ScenarioResult;
  hasStressFactors: boolean;
  seriesVisibility: SeriesVisibility;
  toggleSeriesVisibility: (key: ChartSeriesKey) => void;
};

export function SimulatorChart({
  state,
  setState,
  orderedMonths,
  baselineScenario,
  currentScenario,
  hasStressFactors,
  seriesVisibility,
  toggleSeriesVisibility,
}: SimulatorChartProps) {
  // Defer chart.js chunk fetch + mount to browser idle time so it runs after
  // hydration and first paint. Keeps LCP / TBT lower on mobile; desktop sees no
  // perceivable change (idle fires within ~1 frame).
  const [chartReady, setChartReady] = useState(false);
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    };
    if (typeof w.requestIdleCallback === "function") {
      w.requestIdleCallback(() => setChartReady(true), { timeout: 800 });
    } else {
      const id = setTimeout(() => setChartReady(true), 200);
      return () => clearTimeout(id);
    }
  }, []);

  const lineData = useMemo<ChartData<"line">>(
    () => ({
      labels: orderedMonths.map((month) => monthNames[month - 1]),
      datasets: [
        {
          label: "固定プラン（当初想定）",
          data: baselineScenario.lineA,
          hidden: !seriesVisibility.baselineFixed,
          borderColor: "#9CA3AF",
          backgroundColor: "rgba(156, 163, 175, 0.12)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.25,
        },
        {
          label: "市場連動プラン（当初想定）",
          data: baselineScenario.lineB,
          hidden: !seriesVisibility.baselineMarket,
          borderColor: "#DC2626",
          backgroundColor: "rgba(220, 38, 38, 0.10)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.3,
        },
        {
          label: "固定プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.lineA : [],
          hidden: !seriesVisibility.currentFixed || !hasStressFactors,
          borderColor: "#475569",
          backgroundColor: "rgba(71, 85, 105, 0.08)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.25,
          borderDash: [6, 5],
        },
        {
          label: "市場連動プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.lineB : [],
          hidden: !seriesVisibility.currentMarket || !hasStressFactors,
          borderColor: "#BE123C",
          backgroundColor: "rgba(190, 24, 93, 0.08)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.3,
          borderDash: [6, 5],
        },
      ],
    }),
    [orderedMonths, baselineScenario, currentScenario, hasStressFactors, seriesVisibility]
  );

  const lineOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      animation: {
        duration: 650,
        easing: "easeOutCubic",
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString(
                "ja-JP"
              )} 万円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "年間累積電気代（万円）" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          grid: { display: false },
        },
      },
    }),
    []
  );

  const barData = useMemo<ChartData<"bar">>(
    () => ({
      labels: orderedMonths.map((month) => monthNames[month - 1]),
      datasets: [
        {
          label: "固定プラン（当初想定）",
          data: baselineScenario.monthlyAValues,
          hidden: !seriesVisibility.baselineFixed,
          backgroundColor: "rgba(148, 163, 184, 0.75)",
          borderColor: "#94A3B8",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "市場連動プラン（当初想定）",
          data: baselineScenario.monthlyBValues,
          hidden: !seriesVisibility.baselineMarket,
          backgroundColor: "rgba(244, 63, 94, 0.75)",
          borderColor: "#F43F5E",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "固定プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.monthlyAValues : [],
          hidden: !seriesVisibility.currentFixed || !hasStressFactors,
          backgroundColor: "rgba(71, 85, 105, 0.7)",
          borderColor: "#475569",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "市場連動プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.monthlyBValues : [],
          hidden: !seriesVisibility.currentMarket || !hasStressFactors,
          backgroundColor: "rgba(190, 24, 93, 0.7)",
          borderColor: "#BE185D",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    }),
    [orderedMonths, baselineScenario, currentScenario, hasStressFactors, seriesVisibility]
  );

  const barOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 650,
        easing: "easeOutCubic",
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString(
                "ja-JP"
              )} 万円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "月額電気代（万円）" },
          grid: { color: "rgba(148, 163, 184, 0.16)" },
        },
        x: {
          stacked: false,
          grid: { display: false },
        },
      },
    }),
    []
  );

  return (
    <>
      <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
        年間シミュレーション
      </h2>
      <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
        開始月に応じて月ラベルと季節判定が切り替わり、2つのプランの推移を即時に再計算・再描画します。実線は当初想定、点線はリスク要因を反映したシナリオです。下のプルダウンとチェック項目で、グラフの開始月と表示するプランを変更できます。
      </p>
      <div className="mt-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2.5">
        <div className="flex items-center gap-2">
          <label htmlFor="startMonth" className="text-sm font-medium text-slate-700 sm:text-base">
            グラフ開始月
          </label>
          <select
            id="startMonth"
            value={state.startMonth}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                startMonth:
                  e.target.value === ""
                    ? ""
                    : Math.min(12, Math.max(1, Number(e.target.value) || 1)),
              }))
            }
            className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:w-36 sm:text-base"
          >
            {monthNames.map((label, idx) => (
              <option key={label} value={idx + 1}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
        <label className="inline-flex items-center gap-1.5 leading-tight">
          <input
            type="checkbox"
            checked={seriesVisibility.baselineFixed}
            onChange={() => toggleSeriesVisibility("baselineFixed")}
            className="h-5 w-5 rounded border-slate-300 text-slate-600 focus:ring-slate-400"
          />
          固定プラン（当初想定）
        </label>
        <label className="inline-flex items-center gap-1.5 leading-tight">
          <input
            type="checkbox"
            checked={seriesVisibility.baselineMarket}
            onChange={() => toggleSeriesVisibility("baselineMarket")}
            className="h-5 w-5 rounded border-slate-300 text-rose-600 focus:ring-rose-400"
          />
          市場連動プラン（当初想定）
        </label>
        <label className="inline-flex items-center gap-1.5 leading-tight">
          <input
            type="checkbox"
            checked={seriesVisibility.currentFixed && hasStressFactors}
            onChange={() => toggleSeriesVisibility("currentFixed")}
            disabled={!hasStressFactors}
            className="h-5 w-5 rounded border-slate-300 text-slate-700 focus:ring-slate-400 disabled:cursor-not-allowed"
          />
          固定プラン（リスク要因反映後）
        </label>
        <label className="inline-flex items-center gap-1.5 leading-tight">
          <input
            type="checkbox"
            checked={seriesVisibility.currentMarket && hasStressFactors}
            onChange={() => toggleSeriesVisibility("currentMarket")}
            disabled={!hasStressFactors}
            className="h-5 w-5 rounded border-slate-300 text-pink-700 focus:ring-pink-400 disabled:cursor-not-allowed"
          />
          市場連動プラン（リスク要因反映後）
        </label>
      </div>
      <div className="mt-3 h-[160px] w-full sm:h-[200px] lg:h-[220px] xl:h-[260px]">
        {chartReady ? <LineChart data={lineData} options={lineOptions} /> : chartLoading()}
      </div>
      <div className="mt-4">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">毎月の電気代比較</h3>
        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          同じ条件で見た、各月の固定プランと市場連動プランの月額比較です。
        </p>
        <div className="mt-2 h-[110px] w-full sm:h-[130px]">
          {chartReady ? <BarChart data={barData} options={barOptions} /> : chartLoading()}
        </div>
      </div>
    </>
  );
}
