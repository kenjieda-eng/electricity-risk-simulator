"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart, Line } from "react-chartjs-2";
import {
  SEASON_LABELS,
  SEASON_DEMAND,
  SEASON_PRICE_AVG,
  SUMMER_HOURLY_DEMAND,
  WINTER_HOURLY_DEMAND,
} from "../../data/marketData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HOUR_LABELS = Array.from({ length: 24 }, (_, i) => `${i}時`);

export function SeasonDemandPriceChart() {
  const data = {
    labels: SEASON_LABELS,
    datasets: [
      {
        type: "bar" as const,
        label: "平均需要（MW）",
        data: SEASON_DEMAND,
        backgroundColor: [
          "rgba(34,197,94,0.7)",
          "rgba(239,68,68,0.7)",
          "rgba(234,179,8,0.7)",
          "rgba(37,99,235,0.7)",
        ],
        borderColor: [
          "rgba(34,197,94,1)",
          "rgba(239,68,68,1)",
          "rgba(234,179,8,1)",
          "rgba(37,99,235,1)",
        ],
        borderWidth: 1,
        borderRadius: 4,
        yAxisID: "yDemand",
      },
      {
        type: "line" as const,
        label: "平均スポット価格（円/kWh）",
        data: SEASON_PRICE_AVG,
        borderColor: "rgba(168,85,247,1)",
        backgroundColor: "rgba(168,85,247,0.15)",
        borderWidth: 2.5,
        pointRadius: 6,
        pointBackgroundColor: "rgba(168,85,247,1)",
        tension: 0.3,
        fill: false,
        yAxisID: "yPrice",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index" as const, intersect: false },
    plugins: {
      legend: {
        position: "top" as const,
        labels: { font: { size: 12 }, boxWidth: 16 },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { dataset: { label?: string; yAxisID?: string }; parsed: { y: number } }) => {
            if (ctx.dataset.yAxisID === "yPrice") {
              return `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} 円/kWh`;
            }
            return `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} MW`;
          },
        },
      },
    },
    scales: {
      yDemand: {
        type: "linear" as const,
        position: "left" as const,
        title: { display: true, text: "平均需要（MW）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 80000,
        max: 120000,
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? `${(value / 1000).toFixed(0)}k` : value,
        },
      },
      yPrice: {
        type: "linear" as const,
        position: "right" as const,
        title: { display: true, text: "平均価格（円/kWh）", font: { size: 12 } },
        grid: { display: false },
        min: 0,
        max: 20,
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 13 } },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}

export function HourlyDemandComparisonChart() {
  const data = {
    labels: HOUR_LABELS,
    datasets: [
      {
        label: "夏（6〜8月）",
        data: SUMMER_HOURLY_DEMAND,
        borderColor: "rgba(239,68,68,1)",
        backgroundColor: "rgba(239,68,68,0.08)",
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: "rgba(239,68,68,1)",
        tension: 0.3,
        fill: false,
      },
      {
        label: "冬（12〜2月）",
        data: WINTER_HOURLY_DEMAND,
        borderColor: "rgba(37,99,235,1)",
        backgroundColor: "rgba(37,99,235,0.08)",
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: "rgba(37,99,235,1)",
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index" as const, intersect: false },
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
        min: 70000,
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? `${(value / 1000).toFixed(0)}k` : value,
        },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 }, maxTicksLimit: 13 },
      },
    },
  };

  return (
    <div style={{ height: 360 }}>
      <Line data={data} options={options} />
    </div>
  );
}
