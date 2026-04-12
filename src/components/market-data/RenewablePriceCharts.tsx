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
  type TooltipItem,
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

// 価格が高い=赤系、低い=緑系のグラデーション
function priceToColor(price: number, alpha = 0.75): string {
  // 価格範囲: ~6 (低) ～ ~15 (高)
  const min = 6;
  const max = 15;
  const ratio = Math.min(Math.max((price - min) / (max - min), 0), 1);
  // ratio=0: 緑 (5,150,105)、ratio=1: 赤 (220,38,38)
  const r = Math.round(5 + ratio * (220 - 5));
  const g = Math.round(150 + ratio * (38 - 150));
  const b = Math.round(105 + ratio * (38 - 105));
  return `rgba(${r},${g},${b},${alpha})`;
}

export function RenSharePriceBarChart() {
  const data = {
    labels: REN_SHARE_LABELS,
    datasets: [
      {
        label: "平均スポット価格（円/kWh）",
        data: REN_SHARE_PRICE,
        backgroundColor: REN_SHARE_PRICE.map((v) => priceToColor(v, 0.78)),
        borderColor: REN_SHARE_PRICE.map((v) => priceToColor(v, 1)),
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
            `平均 ${ctx.parsed.y.toFixed(2)} 円/kWh`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 4,
        title: {
          display: true,
          text: "平均スポット価格（円/kWh）",
          font: { size: 12 },
        },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
        title: {
          display: true,
          text: "再エネ比率帯",
          font: { size: 12 },
        },
      },
    },
  };

  return (
    <div style={{ height: 340 }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export function RenHourlyDualAxisChart() {
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
          label: (ctx: TooltipItem<"line">) => {
            const lbl = (ctx.dataset.label ?? "") as string;
            if (lbl.includes("比率"))
              return `再エネ比率 ${ctx.parsed.y.toFixed(1)} %`;
            return `スポット価格 ${ctx.parsed.y.toFixed(2)} 円/kWh`;
          },
        },
      },
    },
    scales: {
      yShare: {
        type: "linear" as const,
        position: "left" as const,
        title: {
          display: true,
          text: "再エネ比率（%）",
          font: { size: 12 },
        },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 0,
        max: 40,
      },
      yPrice: {
        type: "linear" as const,
        position: "right" as const,
        title: {
          display: true,
          text: "スポット価格（円/kWh）",
          font: { size: 12 },
        },
        grid: { display: false },
        min: 8,
        max: 20,
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
