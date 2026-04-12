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
import { Line, Bar } from "react-chartjs-2";
import {
  WARMING_YEARS,
  WARMING_TOKYO,
  WARMING_OSAKA,
  WARMING_SAPPORO,
  WARMING_DECADES,
  WARMING_DEC_TOKYO,
  WARMING_DEC_OSAKA,
  WARMING_DEC_SAPPORO,
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

export function WarmingTrendLineChart() {
  const data = {
    labels: WARMING_YEARS.map(String),
    datasets: [
      {
        label: "東京",
        data: WARMING_TOKYO,
        borderColor: "rgba(239,68,68,1)",
        backgroundColor: "rgba(239,68,68,0.08)",
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "rgba(239,68,68,1)",
        tension: 0.3,
        fill: false,
      },
      {
        label: "大阪",
        data: WARMING_OSAKA,
        borderColor: "rgba(234,179,8,1)",
        backgroundColor: "rgba(234,179,8,0.08)",
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "rgba(234,179,8,1)",
        tension: 0.3,
        fill: false,
      },
      {
        label: "札幌",
        data: WARMING_SAPPORO,
        borderColor: "rgba(37,99,235,1)",
        backgroundColor: "rgba(37,99,235,0.08)",
        borderWidth: 2,
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
            `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} ℃`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "年平均気温（℃）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 7,
        max: 20,
      },
      x: {
        grid: { display: false },
        ticks: {
          maxTicksLimit: 16,
          font: { size: 11 },
        },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Line data={data} options={options} />
    </div>
  );
}

export function WarmingDecadeBarChart() {
  const data = {
    labels: WARMING_DECADES,
    datasets: [
      {
        label: "東京",
        data: WARMING_DEC_TOKYO,
        backgroundColor: "rgba(239,68,68,0.75)",
        borderColor: "rgba(239,68,68,1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "大阪",
        data: WARMING_DEC_OSAKA,
        backgroundColor: "rgba(234,179,8,0.75)",
        borderColor: "rgba(234,179,8,1)",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "札幌",
        data: WARMING_DEC_SAPPORO,
        backgroundColor: "rgba(37,99,235,0.75)",
        borderColor: "rgba(37,99,235,1)",
        borderWidth: 1,
        borderRadius: 4,
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
            `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} ℃`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "10年平均気温（℃）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 7,
        max: 20,
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div style={{ height: 340 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
