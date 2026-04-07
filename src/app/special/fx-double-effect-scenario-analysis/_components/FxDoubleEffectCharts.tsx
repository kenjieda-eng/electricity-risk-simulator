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
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

type FxChartKind =
  | "overview-main"
  | "mechanism-rate"
  | "yen-scenarios"
  | "oil-scenarios"
  | "double-impact"
  | "household-impact"
  | "corporate-impact";

type FxDoubleEffectChartCardProps = {
  title: string;
  description?: string;
  kind: FxChartKind;
  heightClassName?: string;
};

const COLOR = {
  s1: "#0F6E56",
  s2: "#BA7517",
  s3: "#E24B4A",
  blue: "#185FA5",
  purple: "#534AB7",
  text: "#475569",
  grid: "rgba(15, 23, 42, 0.08)",
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

function FxDoubleEffectChart({ kind }: { kind: FxChartKind }) {
  if (kind === "overview-main") {
    const data: ChartData<"line"> = {
      labels: ["2025/1", "4", "7", "10", "2026/1", "2", "3", "4(現在)"],
      datasets: [
        {
          label: "ドル円",
          data: [148, 150, 152, 155, 156, 158, 159.7, 159.5],
          borderColor: COLOR.s3,
          borderWidth: 2.5,
          pointRadius: 4,
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "WTI",
          data: [72, 68, 70, 74, 78, 82, 98, 102],
          borderColor: COLOR.blue,
          borderWidth: 2.5,
          pointRadius: 4,
          tension: 0.3,
          yAxisID: "y1",
        },
      ],
    };
    const options: ChartOptions<"line"> = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
      scales: {
        x: { grid: { display: false }, ticks: { color: COLOR.text } },
        y: {
          position: "left",
          min: 140,
          max: 170,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.s3, callback: (v) => `${v}円` },
        },
        y1: {
          position: "right",
          min: 50,
          max: 120,
          grid: { display: false },
          ticks: { color: COLOR.blue, callback: (v) => `$${v}` },
        },
      },
    };
    return <Line data={data} options={options} />;
  }

  if (kind === "mechanism-rate") {
    const data: ChartData<"line"> = {
      labels: ["2024/1", "4", "7", "10", "2025/1", "4", "7", "10", "2026/1", "4(現在)"],
      datasets: [
        {
          label: "日米金利差",
          data: [5.1, 5.0, 4.8, 4.5, 4.3, 4.0, 3.8, 3.5, 3.3, 3.2],
          borderColor: COLOR.s3,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "ドル円",
          data: [148, 154, 161, 153, 156, 150, 152, 155, 156, 159.5],
          borderColor: COLOR.blue,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.3,
          yAxisID: "y1",
        },
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
          min: 2.5,
          max: 5.5,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.s3, callback: (v) => `${Number(v).toFixed(1)}%` },
        },
        y1: {
          position: "right",
          min: 140,
          max: 170,
          grid: { display: false },
          ticks: { color: COLOR.blue, callback: (v) => `${v}円` },
        },
      },
    };
    return <Line data={data} options={options} />;
  }

  if (kind === "yen-scenarios") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        {
          label: "円高シナリオ",
          data: [156, 155, 154, 152, 150, 149, 148, 147, 148, 149, 150, 150],
          borderColor: COLOR.s1,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "中央シナリオ",
          data: [156, 158, 159.7, 159, 160, 161, 162, 161, 160, 158, 157, 156],
          borderColor: COLOR.s2,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "円安シナリオ",
          data: [156, 158, 159.7, 161, 163, 165, 167, 168, 166, 164, 162, 160],
          borderColor: COLOR.s3,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
      ],
    };
    return <Line data={data} options={lineBase(142, 172, "円")} />;
  }

  if (kind === "oil-scenarios") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "S1 安定化", data: [78, 82, 85, 82, 80, 78, 76, 75, 74, 75, 76, 78], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S2 長期化", data: [78, 82, 98, 102, 100, 98, 100, 102, 100, 96, 94, 92], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S3 エスカレーション", data: [78, 82, 98, 102, 108, 115, 122, 125, 120, 115, 112, 110], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
      ],
    };
    return <Line data={data} options={lineBase(60, 130, "", "$")} />;
  }

  if (kind === "double-impact") {
    const data: ChartData<"bar"> = {
      labels: ["原油・LNG", "食料品", "化学品", "非鉄金属", "半導体"],
      datasets: [
        { label: "原油高", data: [35, 8, 28, 15, 3], backgroundColor: "rgba(226,75,74,0.7)", borderRadius: 4 },
        { label: "円安", data: [8, 8, 8, 8, 8], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "W効果", data: [3, 1, 3, 2, 0], backgroundColor: "rgba(83,74,183,0.7)", borderRadius: 4 },
      ],
    };
    const options = barBase(0, 50, "%", "+");
    options.scales = {
      ...options.scales,
      x: { ...(options.scales?.x ?? {}), stacked: true, grid: { display: false }, ticks: { color: COLOR.text } },
      y: { ...(options.scales?.y ?? {}), stacked: true, min: 0, max: 50, ticks: { color: COLOR.text, callback: (v) => `+${v}%` }, grid: { color: COLOR.grid } },
    };
    return <Bar data={data} options={options} />;
  }

  if (kind === "household-impact") {
    const data: ChartData<"bar"> = {
      labels: ["単身 車なし", "夫婦 車なし", "4人家族 車1台", "4人家族 車2台"],
      datasets: [
        { label: "S1", data: [4, 5.5, 9, 11.5], backgroundColor: "rgba(15,110,86,0.7)", borderRadius: 4 },
        { label: "S2", data: [8, 12, 19.5, 24], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3", data: [13, 19.5, 31, 39], backgroundColor: "rgba(163,45,45,0.7)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 50, "万円", "+")} />;
  }

  const data: ChartData<"bar"> = {
    labels: ["飲食業", "食品製造", "運輸物流", "小売業", "化学素材", "自動車", "電機精密", "観光インバウンド"],
    datasets: [
      { label: "コスト増（マイナス影響）", data: [-40, -30, -22, -18, -22, 0, 0, 0], backgroundColor: "rgba(226,75,74,0.7)", borderRadius: 4 },
      { label: "円安メリット（プラス影響）", data: [0, 0, 0, 0, 5, 25, 18, 20], backgroundColor: "rgba(15,110,86,0.7)", borderRadius: 4 },
    ],
  };
  return <Bar data={data} options={barBase(-50, 35, "%", "")} />;
}

export default function FxDoubleEffectChartCard({
  title,
  description,
  kind,
  heightClassName = "h-[280px] sm:h-[340px]",
}: FxDoubleEffectChartCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={`mt-3 w-full ${heightClassName}`}>
        <FxDoubleEffectChart kind={kind} />
      </div>
    </section>
  );
}
