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
import { SPIKE_HOURS, SPIKE_MONTHS } from "../../data/marketData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const HOUR_LABELS = [
  "0時","1時","2時","3時","4時","5時","6時","7時","8時","9時",
  "10時","11時","12時","13時","14時","15時","16時","17時","18時","19時",
  "20時","21時","22時","23時",
];

const MONTH_LABELS = [
  "1月","2月","3月","4月","5月","6月",
  "7月","8月","9月","10月","11月","12月",
];

export function SpikeHourChart() {
  const data = {
    labels: HOUR_LABELS,
    datasets: [
      {
        label: "スパイク発生コマ数（50円超）",
        data: SPIKE_HOURS,
        backgroundColor: SPIKE_HOURS.map((v) =>
          v >= 100 ? "rgba(220,38,38,0.80)" : v >= 50 ? "rgba(234,179,8,0.75)" : "rgba(37,99,235,0.65)"
        ),
        borderColor: SPIKE_HOURS.map((v) =>
          v >= 100 ? "rgba(220,38,38,1)" : v >= 50 ? "rgba(234,179,8,1)" : "rgba(37,99,235,1)"
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
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y} コマ`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "スパイク発生コマ数", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 340 }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export function SpikeMonthChart() {
  const data = {
    labels: MONTH_LABELS,
    datasets: [
      {
        label: "月別スパイク発生コマ数（50円超）",
        data: SPIKE_MONTHS,
        backgroundColor: SPIKE_MONTHS.map((v) =>
          v >= 400 ? "rgba(220,38,38,0.80)" : v >= 80 ? "rgba(234,179,8,0.75)" : "rgba(37,99,235,0.65)"
        ),
        borderColor: SPIKE_MONTHS.map((v) =>
          v >= 400 ? "rgba(220,38,38,1)" : v >= 80 ? "rgba(234,179,8,1)" : "rgba(37,99,235,1)"
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
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y} コマ`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "スパイク発生コマ数", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 340 }}>
      <Bar data={data} options={options} />
    </div>
  );
}
