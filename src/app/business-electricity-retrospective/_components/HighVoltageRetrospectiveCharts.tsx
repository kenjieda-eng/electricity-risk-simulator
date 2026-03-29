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
import { HIGH_VOLTAGE_MONTHLY_PRICES, getYearlySummary } from "../_lib/high-voltage-price-data";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const monthLabel = (rawDate: string): string => {
  const date = new Date(rawDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}/${month}`;
};

export default function HighVoltageRetrospectiveCharts() {
  const yearlySummary = useMemo(() => getYearlySummary(), []);

  const monthlyLineData = useMemo<ChartData<"line">>(
    () => ({
      labels: HIGH_VOLTAGE_MONTHLY_PRICES.map((point) => monthLabel(point.date)),
      datasets: [
        {
          label: "高圧 単価（円/kWh）",
          data: HIGH_VOLTAGE_MONTHLY_PRICES.map((point) => point.price),
          borderColor: "#0f766e",
          backgroundColor: "rgba(15, 118, 110, 0.16)",
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 3,
          tension: 0.2,
        },
      ],
    }),
    []
  );

  const monthlyLineOptions = useMemo<ChartOptions<"line">>(
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
          title: { display: true, text: "円/kWh" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 14,
          },
          grid: { display: false },
        },
      },
    }),
    []
  );

  const yearlyBarData = useMemo<ChartData<"bar">>(
    () => ({
      labels: yearlySummary.map((row) => `${row.year}年`),
      datasets: [
        {
          label: "年平均単価（円/kWh）",
          data: yearlySummary.map((row) => row.averagePrice),
          backgroundColor: "rgba(30, 64, 175, 0.75)",
          borderColor: "#1e40af",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    }),
    [yearlySummary]
  );

  const yearlyBarOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(1)} 円/kWh`;
            },
          },
        },
      },
      scales: {
        y: {
          title: { display: true, text: "円/kWh" },
          beginAtZero: false,
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          grid: { display: false },
        },
      },
    }),
    []
  );

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-900">データグラフ</h2>
      <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
        月次データの折れ線と、年平均の棒グラフで高圧単価の推移を可視化しています。2022年から2023年にかけての
        急上昇と、2024年以降の高止まり下での緩やかな低下が確認できます。
      </p>

      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-lg font-semibold text-slate-900">月次推移（2019年1月〜2025年12月）</h3>
        <div className="mt-3 h-[280px] w-full sm:h-[340px]">
          <Line data={monthlyLineData} options={monthlyLineOptions} />
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h3 className="text-lg font-semibold text-slate-900">年平均推移（2019年〜2025年）</h3>
        <div className="mt-3 h-[240px] w-full sm:h-[300px]">
          <Bar data={yearlyBarData} options={yearlyBarOptions} />
        </div>
      </div>
    </section>
  );
}
