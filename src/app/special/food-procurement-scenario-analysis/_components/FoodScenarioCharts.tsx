"use client";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

type FoodChartKind =
  | "overview-main"
  | "overview-factors"
  | "restaurant-structure"
  | "manufacturer-structure"
  | "grain-oil"
  | "protein"
  | "restaurant-profit"
  | "manufacturer-categories";

type FoodScenarioChartCardProps = {
  title: string;
  description?: string;
  kind: FoodChartKind;
  heightClassName?: string;
};

const COLOR = {
  s1: "#0F6E56",
  s2: "#BA7517",
  s3: "#E24B4A",
  coral: "#D85A30",
  blue: "#185FA5",
  purple: "#534AB7",
  slate: "#888780",
  grid: "rgba(15, 23, 42, 0.08)",
  text: "#475569",
};

function lineBase(min: number, max: number, suffix = "", prefix = ""): ChartOptions<"line"> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
    scales: {
      x: { grid: { display: false }, ticks: { color: COLOR.text } },
      y: {
        min,
        max,
        grid: { color: COLOR.grid },
        ticks: { color: COLOR.text, callback: (v) => `${prefix}${v}${suffix}` },
      },
    },
  };
}

function barBase(min: number, max: number, suffix = "", prefix = ""): ChartOptions<"bar"> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
    scales: {
      x: { grid: { display: false }, ticks: { color: COLOR.text } },
      y: {
        min,
        max,
        grid: { color: COLOR.grid },
        ticks: { color: COLOR.text, callback: (v) => `${prefix}${v}${suffix}` },
      },
    },
  };
}

function FoodScenarioChart({ kind }: { kind: FoodChartKind }) {
  if (kind === "overview-main") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "食用油脂", data: [8, 10, 12, 15, 16, 18, 20, 22, 20, 18, 16, 15], borderColor: COLOR.coral, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "畜産・水産", data: [5, 6, 8, 10, 12, 14, 16, 18, 17, 15, 14, 13], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "穀物・小麦", data: [3, 4, 5, 8, 10, 12, 14, 15, 14, 12, 11, 10], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "調味料", data: [4, 5, 7, 10, 12, 14, 16, 17, 16, 14, 13, 12], borderColor: COLOR.purple, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "青果・乳製品", data: [2, 3, 4, 5, 7, 10, 12, 14, 12, 10, 8, 7], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
      ],
    };
    return <Line data={data} options={lineBase(-2, 25, "%", "+")} />;
  }

  if (kind === "overview-factors") {
    const data: ChartData<"bar"> = {
      labels: ["原材料高", "包装・資材", "人件費", "物流費", "エネルギー"],
      datasets: [
        {
          label: "値上げ要因比率",
          data: [99.9, 81.3, 66.0, 61.8, 45.6],
          backgroundColor: [COLOR.coral, COLOR.s2, COLOR.purple, COLOR.blue, COLOR.s1],
          borderRadius: 4,
        },
      ],
    };
    const options: ChartOptions<"bar"> = {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { min: 0, max: 105, grid: { color: COLOR.grid }, ticks: { color: COLOR.text, callback: (v) => `${v}%` } },
        y: { grid: { display: false }, ticks: { color: COLOR.text } },
      },
    };
    return <Bar data={data} options={options} />;
  }

  if (kind === "restaurant-structure") {
    const data: ChartData<"doughnut"> = {
      labels: ["食材原価", "人件費", "家賃", "光熱費", "その他経費", "営業利益"],
      datasets: [
        {
          data: [30, 30, 10, 5, 20, 5],
          backgroundColor: [COLOR.coral, COLOR.purple, COLOR.s2, COLOR.blue, COLOR.s1, COLOR.slate],
          borderWidth: 0,
          hoverOffset: 6,
        },
      ],
    };
    return <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false, cutout: "55%", plugins: { legend: { position: "bottom" } } }} />;
  }

  if (kind === "manufacturer-structure") {
    const data: ChartData<"doughnut"> = {
      labels: ["原材料", "包装資材", "人件費", "エネルギー", "物流費", "その他＋利益"],
      datasets: [
        {
          data: [45, 8, 18, 5, 7, 17],
          backgroundColor: [COLOR.coral, COLOR.s2, COLOR.purple, COLOR.blue, COLOR.s1, COLOR.slate],
          borderWidth: 0,
          hoverOffset: 6,
        },
      ],
    };
    return <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false, cutout: "55%", plugins: { legend: { position: "bottom" } } }} />;
  }

  if (kind === "grain-oil") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "食用油（S2）", data: [108, 110, 112, 115, 116, 118, 120, 122, 120, 118, 116, 115], borderColor: COLOR.coral, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "2025年平均", data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], borderColor: COLOR.slate, borderWidth: 1.5, borderDash: [6, 4], pointRadius: 0, tension: 0 },
      ],
    };
    return <Line data={data} options={lineBase(90, 130)} />;
  }

  if (kind === "protein") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "豚肉", data: [5, 6, 8, 10, 13, 16, 18, 20, 18, 16, 14, 13], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "鶏卵", data: [3, 4, 5, 8, 10, 12, 14, 15, 13, 12, 10, 9], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "水産物", data: [4, 5, 7, 10, 12, 15, 18, 20, 18, 15, 13, 12], borderColor: COLOR.blue, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
      ],
    };
    return <Line data={data} options={lineBase(0, 25, "%", "+")} />;
  }

  if (kind === "restaurant-profit") {
    const data: ChartData<"bar"> = {
      labels: ["月商200万", "月商300万", "月商500万", "月商1000万"],
      datasets: [
        { label: "S1 利益残存額", data: [7, 12, 22, 50], backgroundColor: "rgba(15,110,86,0.7)", borderRadius: 4 },
        { label: "S2 利益残存額", data: [2, 3, 8, 20], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3 利益残存額", data: [-3, -5, -2, 5], backgroundColor: "rgba(163,45,45,0.7)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(-8, 55, "万円")} />;
  }

  const data: ChartData<"bar"> = {
    labels: ["調味料", "加工食品", "酒類・飲料", "原材料", "菓子", "その他"],
    datasets: [
      {
        label: "2026年4月 値上げ品目数",
        data: [1514, 609, 369, 259, 30, 17],
        backgroundColor: [COLOR.coral, COLOR.s2, COLOR.purple, COLOR.s3, COLOR.blue, COLOR.slate],
        borderRadius: 4,
      },
    ],
  };
  return <Bar data={data} options={barBase(0, 1700, "品目")} />;
}

export default function FoodScenarioChartCard({
  title,
  description,
  kind,
  heightClassName = "h-[280px] sm:h-[340px]",
}: FoodScenarioChartCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={`mt-3 w-full ${heightClassName}`}>
        <FoodScenarioChart kind={kind} />
      </div>
    </section>
  );
}
