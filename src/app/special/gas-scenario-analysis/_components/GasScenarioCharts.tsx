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
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Tooltip, Legend);

type GasChartKind =
  | "gas-scenarios"
  | "mechanism-structure"
  | "mechanism-jkm"
  | "subsidy-trend"
  | "subsidy-gap"
  | "lpg-trend"
  | "industry-impact"
  | "cost-annual"
  | "cost-monthly"
  | "electrification-comparison"
  | "action-effect";

type GasScenarioChartCardProps = {
  title: string;
  description?: string;
  kind: GasChartKind;
  heightClassName?: string;
};

const COLOR = {
  s1: "#0F6E56",
  s2: "#BA7517",
  s3: "#E24B4A",
  blue: "#185FA5",
  coral: "#D85A30",
  purple: "#534AB7",
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

function GasScenarioChart({ kind }: { kind: GasChartKind }) {
  if (kind === "mechanism-structure") {
    const data: ChartData<"doughnut"> = {
      labels: ["原料費（LNG等）", "導管・供給コスト", "消費税・諸税", "事業者利益"],
      datasets: [
        {
          data: [45, 30, 10, 15],
          backgroundColor: [COLOR.blue, COLOR.purple, COLOR.s2, "#888780"],
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

  if (kind === "mechanism-jkm") {
    const data: ChartData<"line"> = {
      labels: ["2025/7", "8", "9", "10", "11", "12", "2026/1", "2", "3/1", "3/9", "3/20", "4(現在)"],
      datasets: [
        {
          label: "JKM（$/mmBtu）",
          data: [12, 11.5, 11, 10.5, 10.8, 11, 11.2, 11.1, 14, 24.8, 20, 19.5],
          borderColor: COLOR.blue,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.3,
          yAxisID: "y",
        },
        {
          label: "WTI（$/bbl）",
          data: [72, 70, 68, 70, 72, 74, 78, 82, 98, 102, 100, 102],
          borderColor: COLOR.coral,
          borderWidth: 2.2,
          pointRadius: 2,
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
          min: 5,
          max: 30,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.blue, callback: (v) => `${v}$/mmBtu` },
        },
        y1: {
          position: "right",
          min: 60,
          max: 110,
          grid: { display: false },
          ticks: { color: COLOR.coral, callback: (v) => `$${v}` },
        },
      },
    };
    return <Line data={data} options={options} />;
  }

  if (kind === "subsidy-trend") {
    const data: ChartData<"bar"> = {
      labels: ["2025/8", "9", "10", "11", "12", "2026/1", "2", "3", "4", "5(予)", "6(予)", "7(予)"],
      datasets: [
        {
          label: "都市ガス補助金",
          data: [15, 15, 15, 0, 0, 15, 18, 18, 6, 0, 0, 0],
          backgroundColor: "rgba(15,110,86,0.7)",
          borderRadius: 4,
        },
      ],
    };
    return <Bar data={data} options={barBase(0, 25, "円/m3")} />;
  }

  if (kind === "subsidy-gap") {
    const data: ChartData<"bar"> = {
      labels: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        {
          label: "補助金あり",
          data: [47400, 48000, 50400, 54600, 57000, 58500, 57600, 55800, 54000],
          backgroundColor: "rgba(15,110,86,0.7)",
          borderRadius: 4,
        },
        {
          label: "補助金なし",
          data: [49200, 52500, 58200, 66000, 72000, 75000, 73500, 70500, 67500],
          backgroundColor: "rgba(226,75,74,0.55)",
          borderRadius: 4,
        },
      ],
    };
    return <Bar data={data} options={barBase(40000, 80000, "円")} />;
  }

  if (kind === "lpg-trend") {
    const data: ChartData<"line"> = {
      labels: ["2025/1", "4", "7", "10", "2026/1", "3", "4(現在)", "7(予)", "10(予)"],
      datasets: [
        {
          label: "LPガス従量単価",
          data: [540, 535, 530, 535, 540, 560, 570, 610, 640],
          borderColor: COLOR.s3,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.3,
        },
        {
          label: "都市ガス従量単価（熱量換算）",
          data: [320, 315, 310, 312, 318, 330, 348, 400, 430],
          borderColor: COLOR.blue,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.3,
        },
      ],
    };
    return <Line data={data} options={lineBase(250, 700, "円/m3")} />;
  }

  if (kind === "industry-impact") {
    const data: ChartData<"bar"> = {
      labels: ["飲食業", "食品製造", "宿泊業", "クリーニング", "病院・介護", "温浴施設", "一般オフィス"],
      datasets: [
        { label: "S2", data: [20, 25, 22, 28, 18, 30, 8], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3", data: [40, 50, 45, 55, 35, 60, 15], backgroundColor: "rgba(163,45,45,0.55)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 65, "%", "+")} />;
  }

  if (kind === "cost-annual") {
    const data: ChartData<"bar"> = {
      labels: ["100m3", "300m3", "1,000m3", "3,000m3", "10,000m3"],
      datasets: [
        { label: "S1", data: [9, 27, 90, 270, 900], backgroundColor: "rgba(15,110,86,0.7)", borderRadius: 4 },
        { label: "S2", data: [24, 72, 240, 720, 2400], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3", data: [48, 144, 480, 1440, 4800], backgroundColor: "rgba(163,45,45,0.7)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 5000, "万円", "+")} />;
  }

  if (kind === "cost-monthly") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        {
          label: "2025年",
          data: [43.5, 43.5, 43.5, 43.5, 43.5, 43.5, 43.5, 43.5, 43.5, 43.5, 43.5, 43.5],
          borderColor: "#888",
          borderWidth: 1.5,
          borderDash: [6, 4],
          pointRadius: 0,
        },
        {
          label: "S1",
          data: [43.5, 44.4, 45.0, 47.4, 48.6, 50.4, 51.6, 51.0, 49.8, 48.0, 46.5, 45.0],
          borderColor: COLOR.s1,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "S2",
          data: [43.5, 44.4, 45.0, 47.4, 49.5, 53.4, 57.6, 60.0, 61.5, 59.4, 57.0, 55.5],
          borderColor: COLOR.s2,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "S3",
          data: [43.5, 44.4, 45.0, 47.4, 51.0, 58.5, 66.0, 72.0, 75.0, 73.5, 70.5, 67.5],
          borderColor: COLOR.s3,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
      ],
    };
    return <Line data={data} options={lineBase(35, 80, "千円")} />;
  }

  if (kind === "electrification-comparison") {
    const data: ChartData<"bar"> = {
      labels: ["2025年", "S1想定", "S2想定", "S3想定"],
      datasets: [
        { label: "都市ガス給湯器", data: [72, 79, 90, 108], backgroundColor: COLOR.s3, borderRadius: 4 },
        { label: "LPガス給湯器", data: [108, 118, 130, 153], backgroundColor: COLOR.s2, borderRadius: 4 },
        { label: "業務用ヒートポンプ", data: [36, 38, 42, 46], backgroundColor: COLOR.s1, borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 170, "万円")} />;
  }

  const actionData: ChartData<"scatter"> = {
    datasets: [
      {
        label: "即効性あり",
        data: [{ x: 0, y: 5 }, { x: 0, y: 8 }, { x: 1, y: 20 }],
        backgroundColor: "rgba(15,110,86,0.6)",
        pointRadius: [14, 16, 18],
      },
      {
        label: "中期的に効果",
        data: [{ x: 6, y: 18 }, { x: 8, y: 15 }, { x: 4, y: 10 }],
        backgroundColor: "rgba(186,117,23,0.6)",
        pointRadius: [18, 16, 14],
      },
      {
        label: "長期的に効果",
        data: [{ x: 14, y: 60 }, { x: 18, y: 70 }, { x: 10, y: 50 }],
        backgroundColor: "rgba(83,74,183,0.6)",
        pointRadius: [22, 24, 20],
      },
    ],
  };
  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
    scales: {
      x: { min: -1, max: 22, grid: { color: COLOR.grid }, ticks: { color: COLOR.text, callback: (v) => `${v}カ月` } },
      y: { min: 0, max: 80, grid: { color: COLOR.grid }, ticks: { color: COLOR.text, callback: (v) => `${v}%` } },
    },
  };
  return <Scatter data={actionData} options={options} />;
}

export default function GasScenarioChartCard({
  title,
  description,
  kind,
  heightClassName = "h-[280px] sm:h-[340px]",
}: GasScenarioChartCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={`mt-3 w-full ${heightClassName}`}>
        <GasScenarioChart kind={kind} />
      </div>
    </section>
  );
}
