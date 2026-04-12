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
import { Bar, Line } from "react-chartjs-2";
import {
  HEAT_YEARS,
  HOT_DAYS_TOKYO,
  HOT_DAYS_OSAKA,
  HOT_DAYS_NAGOYA,
  TROPICAL_NIGHTS_TOKYO,
  TROPICAL_NIGHTS_OSAKA,
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

export function HotDaysBarChart() {
  const data = {
    labels: HEAT_YEARS.map(String),
    datasets: [
      {
        label: "東京",
        data: HOT_DAYS_TOKYO,
        backgroundColor: "rgba(239,68,68,0.72)",
        borderColor: "rgba(239,68,68,1)",
        borderWidth: 1,
        borderRadius: 2,
      },
      {
        label: "大阪",
        data: HOT_DAYS_OSAKA,
        backgroundColor: "rgba(234,179,8,0.72)",
        borderColor: "rgba(234,179,8,1)",
        borderWidth: 1,
        borderRadius: 2,
      },
      {
        label: "名古屋",
        data: HOT_DAYS_NAGOYA,
        backgroundColor: "rgba(249,115,22,0.72)",
        borderColor: "rgba(249,115,22,1)",
        borderWidth: 1,
        borderRadius: 2,
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
            `${ctx.dataset.label}: ${ctx.parsed.y} 日`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "猛暑日日数（日）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { maxTicksLimit: 16, font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export function TropicalNightsLineChart() {
  const data = {
    labels: HEAT_YEARS.map(String),
    datasets: [
      {
        label: "東京（熱帯夜）",
        data: TROPICAL_NIGHTS_TOKYO,
        borderColor: "rgba(239,68,68,1)",
        backgroundColor: "rgba(239,68,68,0.1)",
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: "rgba(239,68,68,1)",
        tension: 0.3,
        fill: false,
      },
      {
        label: "大阪（熱帯夜）",
        data: TROPICAL_NIGHTS_OSAKA,
        borderColor: "rgba(234,179,8,1)",
        backgroundColor: "rgba(234,179,8,0.1)",
        borderWidth: 2.5,
        pointRadius: 3,
        pointBackgroundColor: "rgba(234,179,8,1)",
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
            `${ctx.dataset.label}: ${ctx.parsed.y} 日`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "熱帯夜日数（日）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { maxTicksLimit: 16, font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 360 }}>
      <Line data={data} options={options} />
    </div>
  );
}
