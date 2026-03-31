"use client";

import { useMemo } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { RENEWABLE_SURCHARGE_DATA } from "../_lib/renewable-surcharge-data";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

export default function RenewableSurchargeCharts() {
  const labels = useMemo(
    () => RENEWABLE_SURCHARGE_DATA.map((row) => `${row.fiscalYear}年度`),
    []
  );

  const unitPriceLineData = useMemo<ChartData<"line">>(
    () => ({
      labels,
      datasets: [
        {
          label: "買い取り単価（円/kWh）",
          data: RENEWABLE_SURCHARGE_DATA.map((row) => row.unitPriceYenPerKwh),
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.12)",
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 4,
          tension: 0.2,
        },
      ],
    }),
    [labels]
  );

  const unitPriceLineOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(2)} 円/kWh`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "円/kWh" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 8 },
          grid: { display: false },
        },
      },
    }),
    []
  );

  const monthlyBurdenBarData = useMemo<ChartData<"bar">>(
    () => ({
      labels,
      datasets: [
        {
          label: "標準家庭の月額負担（300kWh/月）",
          data: RENEWABLE_SURCHARGE_DATA.map((row) => row.monthlyBurdenYen),
          backgroundColor: "rgba(15, 118, 110, 0.75)",
          borderColor: "#0f766e",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    }),
    [labels]
  );

  const monthlyBurdenBarOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toLocaleString("ja-JP")} 円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "円/月" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 8 },
          grid: { display: false },
        },
      },
    }),
    []
  );

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金データのグラフ</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
        2012年度から2026年度までの買い取り単価と、標準家庭（300kWh/月）の月額負担を可視化しています。2023年度の
        一時的な低下と、2024年度以降の反発が読み取れます。
      </p>

      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-lg font-semibold text-slate-900">買い取り単価の推移（円/kWh）</h3>
        <div className="mt-3 h-[280px] w-full sm:h-[340px]">
          <Line data={unitPriceLineData} options={unitPriceLineOptions} />
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-lg font-semibold text-slate-900">標準家庭の月額負担の推移（300kWh/月）</h3>
        <div className="mt-3 h-[260px] w-full sm:h-[320px]">
          <Bar data={monthlyBurdenBarData} options={monthlyBurdenBarOptions} />
        </div>
      </div>
    </section>
  );
}
