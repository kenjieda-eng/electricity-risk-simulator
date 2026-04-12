"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { AREA_SUPPLY_DATA } from "../../data/areaSupplyData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AREAS = [
  "北海道",
  "東北",
  "東京",
  "中部",
  "北陸",
  "関西",
  "中国",
  "四国",
  "九州",
] as const;

const SOURCES = [
  { key: "nuclear", label: "原子力", color: "#6366f1" },
  { key: "lng", label: "LNG火力", color: "#f97316" },
  { key: "coal", label: "石炭火力", color: "#78716c" },
  { key: "oil", label: "石油火力", color: "#a16207" },
  { key: "otherThermal", label: "その他火力", color: "#d4d4d8" },
  { key: "hydro", label: "水力", color: "#3b82f6" },
  { key: "geothermal", label: "地熱", color: "#dc2626" },
  { key: "biomass", label: "バイオマス", color: "#22c55e" },
  { key: "solar", label: "太陽光", color: "#eab308" },
  { key: "wind", label: "風力", color: "#06b6d4" },
] as const;

export default function AreaSupplyMixChart() {
  const chartData: ChartData<"bar"> = {
    labels: AREAS as unknown as string[],
    datasets: SOURCES.map((src) => ({
      label: src.label,
      data: AREA_SUPPLY_DATA.map((row) => row[src.key]),
      backgroundColor: src.color,
      borderWidth: 0,
    })),
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        max: 100,
        title: { display: true, text: "構成比（%）" },
        ticks: { callback: (v) => `${v}%` },
      },
      y: { stacked: true },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, padding: 8, font: { size: 11 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.x.toFixed(1)}%`,
        },
      },
    },
  };

  return (
    <div style={{ height: 420 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
