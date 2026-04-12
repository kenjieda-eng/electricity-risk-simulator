"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DEMAND_MONTHLY } from "../../data/marketData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MONTH_LABELS = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

const monthColors = DEMAND_MONTHLY.map((v) => {
  if (v >= 110000) return "rgba(220,38,38,0.75)";
  if (v >= 100000) return "rgba(234,179,8,0.75)";
  if (v <= 87000) return "rgba(34,197,94,0.75)";
  return "rgba(37,99,235,0.75)";
});

export default function DemandMonthlyChart() {
  const data = {
    labels: MONTH_LABELS,
    datasets: [
      {
        label: "月別平均電力需要（MW）",
        data: DEMAND_MONTHLY,
        backgroundColor: monthColors,
        borderColor: monthColors.map((c) => c.replace("0.75", "1")),
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number } }) =>
            `${ctx.parsed.y.toLocaleString()} MW`,
        },
      },
    },
    scales: {
      y: {
        min: 75000,
        title: { display: true, text: "需要（MW）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? `${(value / 1000).toFixed(0)}k` : value,
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
