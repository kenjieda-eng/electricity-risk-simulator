"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import {
  REN_SHARE_LABELS,
  REN_SHARE_PRICE,
  REN_HOURLY_SHARE,
  REN_HOURLY_PRICE,
} from "../../data/marketData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const HOUR_LABELS = [
  "0時","1時","2時","3時","4時","5時","6時","7時","8時","9時",
  "10時","11時","12時","13時","14時","15時","16時","17時","18時","19時",
  "20時","21時","22時","23時",
];

export function RenSharePriceChart() {
  const data = {
    labels: REN_SHARE_LABELS,
    datasets: [
      {
        label: "平均スポット価格（円/kWh）",
        data: REN_SHARE_PRICE,
        backgroundColor: REN_SHARE_PRICE.map((v) =>
          v <= 7 ? "rgba(5,150,105,0.80)" : v <= 11 ? "rgba(234,179,8,0.75)" : "rgba(37,99,235,0.65)"
        ),
        borderColor: REN_SHARE_PRICE.map((v) =>
          v <= 7 ? "rgba(5,150,105,1)" : v <= 11 ? "rgba(234,179,8,1)" : "rgba(37,99,235,1)"
        ),
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
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y.toFixed(2)} 円/kWh`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "平均スポット価格（円/kWh）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
        title: { display: true, text: "再エネ比率帯", font: { size: 12 } },
      },
    },
  };

  return (
    <div style={{ height: 340 }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export function RenHourlyOverlayChart() {
  const data = {
    labels: HOUR_LABELS,
    datasets: [
      {
        label: "再エネ比率（%）",
        data: REN_HOURLY_SHARE,
        borderColor: "rgba(5,150,105,0.9)",
        backgroundColor: "rgba(5,150,105,0.15)",
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        yAxisID: "yShare",
      },
      {
        label: "スポット価格（円/kWh）",
        data: REN_HOURLY_PRICE,
        borderColor: "rgba(220,38,38,0.9)",
        backgroundColor: "rgba(220,38,38,0.08)",
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        pointRadius: 3,
        yAxisID: "yPrice",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: { font: { size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            if ((ctx.dataset.label ?? "").includes("比率")) return `${ctx.parsed.y.toFixed(1)} %`;
            return `${ctx.parsed.y.toFixed(2)} 円/kWh`;
          },
        },
      },
    },
    scales: {
      yShare: {
        type: "linear" as const,
        position: "left" as const,
        title: { display: true, text: "再エネ比率（%）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 0,
      },
      yPrice: {
        type: "linear" as const,
        position: "right" as const,
        title: { display: true, text: "スポット価格（円/kWh）", font: { size: 12 } },
        grid: { display: false },
        min: 0,
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 360 }}>
      <Line data={data} options={options} />
    </div>
  );
}
