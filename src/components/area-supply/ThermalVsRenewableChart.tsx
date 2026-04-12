"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { FY_TREND } from "../../data/areaSupplyData";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

export default function ThermalVsRenewableChart() {
  const chartData: ChartData<"bar"> = {
    labels: FY_TREND.map((r) => r.fy),
    datasets: [
      {
        label: "火力",
        data: FY_TREND.map((r) => r.thermal),
        backgroundColor: "#78716c",
        borderWidth: 0,
        stack: "supply",
      },
      {
        label: "原子力",
        data: FY_TREND.map((r) => r.nuclear),
        backgroundColor: "#6366f1",
        borderWidth: 0,
        stack: "supply",
      },
      {
        label: "再エネ",
        data: FY_TREND.map((r) => r.renewable),
        backgroundColor: "#22c55e",
        borderWidth: 0,
        stack: "supply",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: {
        stacked: true,
        title: { display: true, text: "平均出力（MW）" },
        ticks: { callback: (v) => `${Number(v).toLocaleString()}` },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, padding: 8, font: { size: 11 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} MW`,
        },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
