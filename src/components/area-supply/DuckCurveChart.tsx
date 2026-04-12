"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { HOURLY_DATA } from "../../data/areaSupplyData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function DuckCurveChart() {
  const labels = HOURLY_DATA.map((r) => `${r.hour}:00`);

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "総需要",
        data: HOURLY_DATA.map((r) => r.demand),
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.08)",
        borderWidth: 2.5,
        pointRadius: 2,
        tension: 0.3,
        fill: false,
      },
      {
        label: "ネット需要（需要 − 太陽光 − 風力）",
        data: HOURLY_DATA.map((r) => r.netDemand),
        borderColor: "#dc2626",
        backgroundColor: "rgba(220,38,38,0.10)",
        borderWidth: 2.5,
        pointRadius: 2,
        tension: 0.3,
        fill: true,
      },
      {
        label: "太陽光出力",
        data: HOURLY_DATA.map((r) => r.solar),
        borderColor: "#eab308",
        backgroundColor: "rgba(234,179,8,0.15)",
        borderWidth: 2,
        pointRadius: 1,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: true, text: "時刻" } },
      y: {
        title: { display: true, text: "MW" },
        beginAtZero: true,
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
    <div style={{ height: 400 }}>
      <Line data={chartData} options={options} />
    </div>
  );
}
