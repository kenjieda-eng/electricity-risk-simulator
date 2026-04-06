"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  ArcElement,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

type OilChartKind =
  | "gas-scenarios"
  | "mechanism-breakdown"
  | "subsidy-fund"
  | "subsidy-gap"
  | "diesel-scenarios"
  | "logistics-surcharge"
  | "logistics-industry"
  | "fleet-annual"
  | "fleet-vehicle"
  | "action-effect";

type OilScenarioChartCardProps = {
  title: string;
  description?: string;
  kind: OilChartKind;
  heightClassName?: string;
};

const COLOR = {
  s1: "#0F6E56",
  s2: "#BA7517",
  s3: "#E24B4A",
  coral: "#D85A30",
  blue: "#185FA5",
  purple: "#534AB7",
  slate: "#64748B",
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

function OilScenarioChart({ kind }: { kind: OilChartKind }) {
  if (kind === "mechanism-breakdown") {
    const data: ChartData<"doughnut"> = {
      labels: ["原油コスト", "税金", "精製・流通", "スタンド利益"],
      datasets: [
        {
          data: [40, 38, 15, 7],
          backgroundColor: [COLOR.coral, COLOR.purple, COLOR.s2, "#888780"],
          borderWidth: 0,
          hoverOffset: 6,
        },
      ],
    };
    const options: ChartOptions<"doughnut"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      cutout: "55%",
    };
    return <Doughnut data={data} options={options} />;
  }

  if (kind === "action-effect") {
    const data: ChartData<"scatter"> = {
      datasets: [
        {
          label: "即効性あり",
          data: [{ x: 0, y: 5 }, { x: 1, y: 12 }, { x: 2, y: 8 }],
          backgroundColor: "rgba(15,110,86,0.6)",
          pointRadius: [16, 18, 14],
        },
        {
          label: "中期的に効果",
          data: [{ x: 8, y: 45 }, { x: 6, y: 30 }, { x: 5, y: 15 }],
          backgroundColor: "rgba(186,117,23,0.6)",
          pointRadius: [22, 18, 14],
        },
        {
          label: "長期的に効果",
          data: [{ x: 18, y: 65 }, { x: 14, y: 50 }, { x: 10, y: 20 }],
          backgroundColor: "rgba(83,74,183,0.6)",
          pointRadius: [24, 20, 14],
        },
      ],
    };
    const options: ChartOptions<"scatter"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: {
        x: {
          min: -1,
          max: 22,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.text, callback: (v) => `${v}カ月` },
        },
        y: {
          min: 0,
          max: 75,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.text, callback: (v) => `${v}%` },
        },
      },
    };
    return <Scatter data={data} options={options} />;
  }

  if (kind === "gas-scenarios") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "S1 補助金あり", data: [156, 158, 175, 170, 168, 167, 166, 165, 164, 163, 163, 163], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S2 補助金あり", data: [156, 158, 175, 172, 174, 176, 178, 175, 172, 170, 168, 167], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S3 補助金→枯渇", data: [156, 158, 175, 172, 178, 185, 195, 210, 218, 215, 208, 200], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "補助金なし", data: [156, 158, 191, 210, 215, 218, 225, 230, 228, 220, 215, 210], borderColor: "#888", borderWidth: 1.5, borderDash: [6, 4], pointRadius: 0, tension: 0.35 },
        { label: "200円ライン", data: Array(12).fill(200), borderColor: "rgba(226,75,74,0.5)", borderWidth: 1, borderDash: [4, 3], pointRadius: 0 },
      ],
    };
    return <Line data={data} options={lineBase(140, 240, "円")} />;
  }

  if (kind === "subsidy-fund") {
    const data: ChartData<"line"> = {
      labels: ["3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "S1 残高推移", data: [10800, 10200, 9600, 9100, 8700, 8300, 7900, 7600, 7300, 7000], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
        { label: "S2 残高推移", data: [10800, 9800, 8700, 7500, 6300, 5200, 4100, 3000, 2000, 1000], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
        { label: "S3 残高推移", data: [10800, 9500, 8000, 6500, 5000, 3500, 2000, 500, 0, 0], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
      ],
    };
    return <Line data={data} options={lineBase(0, 12000, "億円")} />;
  }

  if (kind === "diesel-scenarios") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "S1 短期安定化", data: [135, 137, 155, 150, 148, 146, 145, 144, 143, 142, 142, 142], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S2 夏まで", data: [135, 137, 155, 152, 154, 158, 162, 160, 155, 150, 148, 147], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S3 秋以降も", data: [135, 137, 155, 152, 160, 170, 180, 195, 205, 200, 192, 185], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
      ],
    };
    return <Line data={data} options={lineBase(120, 220, "円")} />;
  }

  if (kind === "logistics-surcharge") {
    const data: ChartData<"line"> = {
      labels: ["2024/1", "4", "7", "10", "2025/1", "4", "7", "10", "2026/1", "3", "4(予)", "7(予)"],
      datasets: [
        { label: "燃料サーチャージ率", data: [8, 7, 6, 5, 5, 4, 4, 3, 3, 12, 10, 15], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.3, yAxisID: "y" },
        { label: "軽油価格", data: [138, 135, 130, 128, 126, 124, 122, 120, 135, 155, 150, 162], borderColor: COLOR.coral, borderWidth: 2, pointRadius: 2, tension: 0.3, yAxisID: "y1" },
      ],
    };
    const options: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: {
        x: { grid: { display: false }, ticks: { color: COLOR.text, font: { size: 10 } } },
        y: {
          position: "left",
          min: 0,
          max: 20,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.s1, callback: (v) => `${v}%` },
        },
        y1: {
          position: "right",
          min: 110,
          max: 170,
          grid: { display: false },
          ticks: { color: COLOR.coral, callback: (v) => `${v}円` },
        },
      },
    };
    return <Line data={data} options={options} />;
  }

  if (kind === "logistics-industry") {
    const data: ChartData<"bar"> = {
      labels: ["EC・通販", "食品メーカー", "小売チェーン", "建設業", "製造業（部品）", "農業"],
      datasets: [
        { label: "S2", data: [18, 25, 15, 22, 12, 20], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3", data: [30, 40, 25, 35, 20, 35], backgroundColor: "rgba(163,45,45,0.5)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 45, "%", "+")} />;
  }

  if (kind === "fleet-annual") {
    const data: ChartData<"bar"> = {
      labels: ["5台", "10台", "50台", "100台"],
      datasets: [
        { label: "S1", data: [7.5, 15, 75, 150], backgroundColor: "rgba(15,110,86,0.7)", borderRadius: 4 },
        { label: "S2", data: [15, 30, 150, 300], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3", data: [24, 48, 240, 480], backgroundColor: "rgba(163,45,45,0.7)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 520, "万円", "+")} />;
  }

  if (kind === "fleet-vehicle") {
    const data: ChartData<"bar"> = {
      labels: ["2025年", "S1想定", "S2想定", "S3想定"],
      datasets: [
        { label: "ガソリン車", data: [23.4, 25.2, 27.0, 30.0], backgroundColor: COLOR.s3, borderRadius: 4 },
        { label: "HV", data: [12.8, 13.7, 14.7, 16.4], backgroundColor: COLOR.s2, borderRadius: 4 },
        { label: "EV", data: [9.0, 9.5, 10.8, 11.7], backgroundColor: COLOR.s1, borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 35, "万円")} />;
  }

  const subsidyGapData: ChartData<"bar"> = {
    labels: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      { label: "補助金あり（S2想定）", data: [172, 174, 176, 178, 175, 172, 170, 168, 167], backgroundColor: "rgba(15,110,86,0.7)", borderRadius: 4 },
      { label: "補助金なし（S2想定）", data: [210, 215, 218, 225, 230, 228, 220, 215, 210], backgroundColor: "rgba(226,75,74,0.5)", borderRadius: 4 },
    ],
  };
  return <Bar data={subsidyGapData} options={barBase(140, 240, "円")} />;
}

export default function OilScenarioChartCard({
  title,
  description,
  kind,
  heightClassName = "h-[280px] sm:h-[340px]",
}: OilScenarioChartCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={`mt-3 w-full ${heightClassName}`}>
        <OilScenarioChart kind={kind} />
      </div>
    </section>
  );
}
