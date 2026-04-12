"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DEMAND_HOURLY, SUMMER_HOURLY_DEMAND, WINTER_HOURLY_DEMAND } from "../../data/marketData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const HOUR_LABELS = Array.from({ length: 24 }, (_, i) => `${i}時`);

export default function DemandHourlyChart() {
  const data = {
    labels: HOUR_LABELS,
    datasets: [
      {
        label: "年間平均（MW）",
        data: DEMAND_HOURLY,
        borderColor: "rgba(37,99,235,1)",
        backgroundColor: "rgba(37,99,235,0.07)",
        borderWidth: 2.5,
        pointRadius: 3,
        tension: 0.35,
        fill: true,
      },
      {
        label: "夏季（7-9月）",
        data: SUMMER_HOURLY_DEMAND,
        borderColor: "rgba(220,38,38,0.85)",
        backgroundColor: "transparent",
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.35,
        borderDash: [5, 3],
        fill: false,
      },
      {
        label: "冬季（12-2月）",
        data: WINTER_HOURLY_DEMAND,
        borderColor: "rgba(99,102,241,0.85)",
        backgroundColor: "transparent",
        borderWidth: 2,
        pointRadius: 2,
        tension: 0.35,
        borderDash: [3, 3],
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: { font: { size: 12 }, boxWidth: 16 },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { dataset: { label?: string }; parsed: { y: number } }) =>
            `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} MW`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "需要（MW）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? `${(value / 1000).toFixed(0)}k` : value,
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Line data={data} options={options} />
    </div>
  );
}
