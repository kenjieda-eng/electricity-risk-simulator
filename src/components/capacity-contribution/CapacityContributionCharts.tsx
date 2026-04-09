"use client";

import { useMemo } from "react";
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

const COLORS = {
  blue: "#2563EB",
  sky: "#0EA5E9",
  amber: "#D97706",
  emerald: "#059669",
  rose: "#E11D48",
  slate: "#64748B",
  violet: "#7C3AED",
  grid: "rgba(148,163,184,0.25)",
  text: "#334155",
};

function defaultBarOptions(maxY: number, ySuffix: string): ChartOptions<"bar"> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: {
      x: { grid: { display: false }, ticks: { color: COLORS.text } },
      y: {
        min: 0,
        max: maxY,
        grid: { color: COLORS.grid },
        ticks: {
          color: COLORS.text,
          callback: (v) => `${v}${ySuffix}`,
        },
      },
    },
  };
}

function defaultLineOptions(maxY: number, ySuffix: string): ChartOptions<"line"> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: {
      x: { grid: { display: false }, ticks: { color: COLORS.text } },
      y: {
        min: 0,
        max: maxY,
        grid: { color: COLORS.grid },
        ticks: {
          color: COLORS.text,
          callback: (v) => `${v}${ySuffix}`,
        },
      },
    },
  };
}

// --- 容量市場 約定価格の推移 ---
function CapacityMarketPriceChart() {
  const data = useMemo<ChartData<"bar">>(
    () => ({
      labels: ["2024年度", "2025年度", "2026年度", "2027年度（見通し）"],
      datasets: [
        {
          label: "約定価格（円/kW）",
          data: [3495, 5413, 7656, 9200],
          backgroundColor: [COLORS.sky, COLORS.blue, COLORS.amber, COLORS.rose],
          borderRadius: 6,
        },
      ],
    }),
    [],
  );
  return <Bar data={data} options={defaultBarOptions(12000, "円/kW")} />;
}

// --- kWhあたり転嫁単価の推移 ---
function ContributionPerKwhChart() {
  const data = useMemo<ChartData<"line">>(
    () => ({
      labels: ["2024年度", "2025年度", "2026年度", "2027年度（見通し）"],
      datasets: [
        {
          label: "容量拠出金 転嫁単価（円/kWh）",
          data: [0.5, 0.8, 1.1, 1.4],
          borderColor: COLORS.blue,
          backgroundColor: "rgba(37,99,235,0.1)",
          fill: true,
          tension: 0.3,
          pointRadius: 5,
          pointBackgroundColor: COLORS.blue,
        },
      ],
    }),
    [],
  );
  return <Line data={data} options={defaultLineOptions(2.0, "円")} />;
}

// --- 契約区分別 年間影響額 ---
function ImpactByVoltageChart() {
  const data = useMemo<ChartData<"bar">>(
    () => ({
      labels: ["特別高圧\n(800万kWh/年)", "高圧\n(60万kWh/年)", "低圧電力\n(6万kWh/年)", "低圧電灯\n(3万kWh/年)"],
      datasets: [
        {
          label: "2024年度",
          data: [400, 30, 3.0, 1.5],
          backgroundColor: COLORS.sky,
          borderRadius: 4,
        },
        {
          label: "2026年度",
          data: [880, 66, 6.6, 3.3],
          backgroundColor: COLORS.amber,
          borderRadius: 4,
        },
      ],
    }),
    [],
  );
  const options: ChartOptions<"bar"> = {
    ...defaultBarOptions(1000, "万円"),
    scales: {
      ...defaultBarOptions(1000, "万円").scales,
      x: { grid: { display: false }, ticks: { color: COLORS.text, font: { size: 11 } } },
    },
  };
  return <Bar data={data} options={options} />;
}

// --- 料金構成要素の比較（積み上げ棒グラフ風） ---
function CostComponentComparisonChart() {
  const data = useMemo<ChartData<"bar">>(
    () => ({
      labels: ["2023年度", "2024年度", "2025年度", "2026年度"],
      datasets: [
        {
          label: "基本料金+電力量料金",
          data: [20.0, 20.5, 21.0, 21.5],
          backgroundColor: COLORS.slate,
          borderRadius: 2,
        },
        {
          label: "燃料費調整額",
          data: [3.5, 2.8, 3.2, 3.8],
          backgroundColor: COLORS.emerald,
          borderRadius: 2,
        },
        {
          label: "再エネ賦課金",
          data: [1.4, 3.49, 3.5, 3.5],
          backgroundColor: COLORS.violet,
          borderRadius: 2,
        },
        {
          label: "容量拠出金",
          data: [0, 0.5, 0.8, 1.1],
          backgroundColor: COLORS.rose,
          borderRadius: 2,
        },
      ],
    }),
    [],
  );
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: {
      x: { stacked: true, grid: { display: false }, ticks: { color: COLORS.text } },
      y: {
        stacked: true,
        min: 0,
        max: 35,
        grid: { color: COLORS.grid },
        ticks: {
          color: COLORS.text,
          callback: (v) => `${v}円/kWh`,
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
}

// --- 市場連動 vs 固定 容量拠出金の出方 ---
function FixedVsMarketContributionChart() {
  const data = useMemo<ChartData<"bar">>(
    () => ({
      labels: ["固定プラン", "市場連動プラン"],
      datasets: [
        {
          label: "契約単価に含まれる容量拠出金相当額",
          data: [1.1, 0.3],
          backgroundColor: COLORS.blue,
          borderRadius: 4,
        },
        {
          label: "別途請求される容量拠出金",
          data: [0, 0.8],
          backgroundColor: COLORS.amber,
          borderRadius: 4,
        },
      ],
    }),
    [],
  );
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "bottom" } },
    scales: {
      x: { stacked: true, grid: { display: false }, ticks: { color: COLORS.text } },
      y: {
        stacked: true,
        min: 0,
        max: 1.5,
        grid: { color: COLORS.grid },
        ticks: {
          color: COLORS.text,
          callback: (v) => `${v}円/kWh`,
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
}

// --- チェックポイント重要度 ---
function CheckPriorityChart() {
  const data = useMemo<ChartData<"bar">>(
    () => ({
      labels: [
        "見積書の容量拠出金\n記載有無",
        "契約単価への\n含有・別建て",
        "年度改定時の\n通知条件",
        "予算策定への\n織り込み",
        "複数拠点の\n一括確認",
      ],
      datasets: [
        {
          label: "重要度スコア",
          data: [95, 90, 80, 85, 70],
          backgroundColor: [COLORS.rose, COLORS.amber, COLORS.blue, COLORS.emerald, COLORS.sky],
          borderRadius: 6,
        },
      ],
    }),
    [],
  );
  const options: ChartOptions<"bar"> = {
    ...defaultBarOptions(100, ""),
    indexAxis: "y" as const,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: { color: COLORS.grid },
        ticks: { color: COLORS.text },
      },
      y: {
        grid: { display: false },
        ticks: { color: COLORS.text, font: { size: 11 } },
      },
    },
  };
  return <Bar data={data} options={options} />;
}

// --- 公開用ラッパー ---
export type CapacityChartKind =
  | "market-price"
  | "per-kwh"
  | "impact-by-voltage"
  | "cost-components"
  | "fixed-vs-market"
  | "check-priority";

type Props = {
  kind: CapacityChartKind;
  title: string;
  description?: string;
};

export default function CapacityContributionChartCard({ kind, title, description }: Props) {
  return (
    <figure className="rounded-xl border border-slate-200 bg-white p-4">
      <figcaption className="mb-3">
        <p className="text-base font-semibold text-slate-900">{title}</p>
        {description && <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>}
      </figcaption>
      <div className="h-64 sm:h-72">
        {kind === "market-price" && <CapacityMarketPriceChart />}
        {kind === "per-kwh" && <ContributionPerKwhChart />}
        {kind === "impact-by-voltage" && <ImpactByVoltageChart />}
        {kind === "cost-components" && <CostComponentComparisonChart />}
        {kind === "fixed-vs-market" && <FixedVsMarketContributionChart />}
        {kind === "check-priority" && <CheckPriorityChart />}
      </div>
    </figure>
  );
}
