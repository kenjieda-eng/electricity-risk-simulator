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

type MaterialsChartKind =
  | "overview-main"
  | "naphtha-share"
  | "plastic-scenarios"
  | "plastic-industry-impact"
  | "packaging-food-factors"
  | "chemicals-trend"
  | "metals-trend"
  | "industry-impact"
  | "action-effect";

type MaterialsScenarioChartCardProps = {
  title: string;
  description?: string;
  kind: MaterialsChartKind;
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

function MaterialsScenarioChart({ kind }: { kind: MaterialsChartKind }) {
  if (kind === "overview-main") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        {
          label: "プラスチック樹脂（S2）",
          data: [0, 2, 8, 15, 22, 28, 32, 35, 33, 30, 27, 25],
          borderColor: COLOR.s3,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "包装資材（S2）",
          data: [0, 1, 3, 8, 14, 20, 25, 28, 27, 24, 22, 20],
          borderColor: COLOR.s2,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "化学品（S2）",
          data: [0, 2, 6, 12, 18, 25, 30, 32, 30, 28, 25, 23],
          borderColor: COLOR.purple,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
        {
          label: "非鉄金属（S2）",
          data: [0, 3, 10, 18, 22, 25, 27, 28, 26, 24, 22, 20],
          borderColor: COLOR.blue,
          borderWidth: 2.5,
          pointRadius: 3,
          tension: 0.35,
        },
      ],
    };
    return <Line data={data} options={lineBase(-5, 40, "%", "+")} />;
  }

  if (kind === "naphtha-share") {
    const data: ChartData<"doughnut"> = {
      labels: ["ガソリン", "ナフサ", "灯油・軽油", "重油・その他"],
      datasets: [
        {
          data: [31, 25, 28, 16],
          backgroundColor: [COLOR.s3, COLOR.s2, COLOR.purple, COLOR.slate],
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

  if (kind === "plastic-scenarios") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "S1 短期安定", data: [0, 2, 8, 15, 18, 16, 14, 12, 10, 8, 6, 5], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S2 夏まで", data: [0, 2, 8, 15, 22, 28, 32, 35, 33, 30, 27, 25], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "S3 秋以降も", data: [0, 2, 8, 15, 28, 40, 50, 58, 60, 55, 50, 45], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
      ],
    };
    return <Line data={data} options={lineBase(-5, 65, "%", "+")} />;
  }

  if (kind === "plastic-industry-impact") {
    const data: ChartData<"bar"> = {
      labels: ["建材メーカー", "食品包装", "自動車部品", "医療機器", "EC梱包", "日用品"],
      datasets: [
        { label: "S2", data: [25, 22, 18, 30, 15, 20], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3", data: [45, 40, 32, 50, 28, 38], backgroundColor: "rgba(163,45,45,0.5)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 55, "%", "+")} />;
  }

  if (kind === "packaging-food-factors") {
    const data: ChartData<"bar"> = {
      labels: ["原材料高", "包装・資材", "人件費", "物流費", "円安", "エネルギー"],
      datasets: [
        {
          label: "値上げ要因比率",
          data: [99.9, 81.3, 66.0, 61.8, 1.6, 45.0],
          backgroundColor: [COLOR.s3, COLOR.s2, COLOR.purple, COLOR.blue, COLOR.slate, COLOR.coral],
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
        x: {
          min: 0,
          max: 105,
          grid: { color: COLOR.grid },
          ticks: { color: COLOR.text, callback: (v) => `${v}%` },
        },
        y: { grid: { display: false }, ticks: { color: COLOR.text } },
      },
    };
    return <Bar data={data} options={options} />;
  }

  if (kind === "chemicals-trend") {
    const data: ChartData<"line"> = {
      labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
      datasets: [
        { label: "溶剤", data: [0, 3, 8, 15, 22, 28, 32, 35, 32, 28, 25, 22], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "接着剤原料", data: [0, 2, 5, 10, 16, 22, 26, 30, 28, 25, 22, 20], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "合成ゴム", data: [0, 3, 10, 18, 25, 32, 38, 40, 37, 33, 30, 27], borderColor: COLOR.purple, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
        { label: "界面活性剤", data: [0, 1, 4, 8, 14, 20, 24, 27, 25, 22, 20, 18], borderColor: COLOR.s1, borderWidth: 2.5, pointRadius: 3, tension: 0.35 },
      ],
    };
    return <Line data={data} options={lineBase(-5, 45, "%", "+")} />;
  }

  if (kind === "metals-trend") {
    const data: ChartData<"line"> = {
      labels: ["2025/7", "10", "2026/1", "2", "3", "4(現在)", "6(予)", "8(予)", "10(予)", "12(予)"],
      datasets: [
        { label: "アルミ", data: [2300, 2350, 2400, 2450, 2550, 2650, 2750, 2800, 2700, 2600], borderColor: COLOR.s3, borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
        { label: "銅", data: [8200, 8400, 8800, 9000, 9500, 9800, 10200, 10500, 10000, 9600], borderColor: COLOR.s2, borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
        { label: "亜鉛", data: [2400, 2500, 2600, 2650, 2800, 2900, 3000, 3050, 2950, 2850], borderColor: COLOR.purple, borderWidth: 2.5, pointRadius: 3, tension: 0.3 },
      ],
    };
    return <Line data={data} options={lineBase(2000, 11000, "$/t")} />;
  }

  if (kind === "industry-impact") {
    const data: ChartData<"bar"> = {
      labels: ["食品メーカー", "EC通販", "自動車部品", "建設業", "日用品", "医療機器", "電子機器"],
      datasets: [
        { label: "S2 調達コスト増加率", data: [22, 18, 20, 25, 20, 28, 15], backgroundColor: "rgba(186,117,23,0.7)", borderRadius: 4 },
        { label: "S3 調達コスト増加率", data: [40, 32, 38, 45, 38, 50, 28], backgroundColor: "rgba(163,45,45,0.5)", borderRadius: 4 },
      ],
    };
    return <Bar data={data} options={barBase(0, 55, "%", "+")} />;
  }

  const actionData: ChartData<"scatter"> = {
    datasets: [
      { label: "即効性あり", data: [{ x: 0, y: 5 }, { x: 1, y: 8 }, { x: 2, y: 12 }], backgroundColor: "rgba(15,110,86,0.6)", pointRadius: [14, 16, 18] },
      { label: "中期的に効果", data: [{ x: 5, y: 15 }, { x: 8, y: 25 }, { x: 6, y: 18 }], backgroundColor: "rgba(186,117,23,0.6)", pointRadius: [18, 20, 16] },
      { label: "長期的に効果", data: [{ x: 12, y: 20 }, { x: 15, y: 30 }, { x: 10, y: 22 }], backgroundColor: "rgba(83,74,183,0.6)", pointRadius: [18, 22, 16] },
    ],
  };
  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "bottom" } },
    scales: {
      x: { min: -1, max: 18, grid: { color: COLOR.grid }, ticks: { color: COLOR.text, callback: (v) => `${v}カ月` } },
      y: { min: 0, max: 35, grid: { color: COLOR.grid }, ticks: { color: COLOR.text, callback: (v) => `${v}%` } },
    },
  };
  return <Scatter data={actionData} options={options} />;
}

export default function MaterialsScenarioChartCard({
  title,
  description,
  kind,
  heightClassName = "h-[280px] sm:h-[340px]",
}: MaterialsScenarioChartCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={`mt-3 w-full ${heightClassName}`}>
        <MaterialsScenarioChart kind={kind} />
      </div>
    </section>
  );
}
