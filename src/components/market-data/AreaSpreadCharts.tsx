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
  SPREAD_TK_KYUSHU,
  SPREAD_TK_HOKKAIDO,
  SPREAD_TK_KANSAI,
  JEPX_FY_LABELS,
  AREA_FY_PRICE,
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

const MONTH_LABELS = [
  "1月","2月","3月","4月","5月","6月",
  "7月","8月","9月","10月","11月","12月",
];

export function AreaSpreadGroupedChart() {
  const data = {
    labels: MONTH_LABELS,
    datasets: [
      {
        label: "東京-九州スプレッド（円/kWh）",
        data: SPREAD_TK_KYUSHU,
        backgroundColor: "rgba(220,38,38,0.70)",
        borderColor: "rgba(220,38,38,1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "東京-北海道スプレッド（円/kWh）",
        data: SPREAD_TK_HOKKAIDO,
        backgroundColor: "rgba(37,99,235,0.70)",
        borderColor: "rgba(37,99,235,1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "東京-関西スプレッド（円/kWh）",
        data: SPREAD_TK_KANSAI,
        backgroundColor: "rgba(124,58,237,0.70)",
        borderColor: "rgba(124,58,237,1)",
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: { font: { size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx) =>
            `${(ctx.dataset.label ?? "").split("（")[0]}: ${ctx.parsed.y.toFixed(2)} 円/kWh`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "スプレッド（円/kWh）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 360 }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export function AreaFyPriceLineChart() {
  const data = {
    labels: JEPX_FY_LABELS,
    datasets: [
      {
        label: "システムプライス",
        data: AREA_FY_PRICE.system,
        borderColor: "rgba(100,116,139,0.9)",
        backgroundColor: "rgba(100,116,139,0.1)",
        borderWidth: 2,
        borderDash: [5, 3],
        fill: false,
        tension: 0.3,
        pointRadius: 3,
      },
      {
        label: "東京エリア",
        data: AREA_FY_PRICE.tokyo,
        borderColor: "rgba(220,38,38,0.9)",
        backgroundColor: "rgba(220,38,38,0.08)",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 3,
      },
      {
        label: "九州エリア",
        data: AREA_FY_PRICE.kyushu,
        borderColor: "rgba(5,150,105,0.9)",
        backgroundColor: "rgba(5,150,105,0.08)",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 3,
      },
      {
        label: "関西エリア",
        data: AREA_FY_PRICE.kansai,
        borderColor: "rgba(124,58,237,0.9)",
        backgroundColor: "rgba(124,58,237,0.08)",
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 3,
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
          label: (ctx) =>
            `${ctx.dataset.label ?? ""}: ${ctx.parsed.y.toFixed(2)} 円/kWh`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "スポット平均価格（円/kWh）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 10 }, maxRotation: 45 },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Line data={data} options={options} />
    </div>
  );
}
