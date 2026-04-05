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

type ChartKind =
  | "oil-scenarios"
  | "impact-scenarios"
  | "oil-history"
  | "quadruple-stack"
  | "scenario-1"
  | "scenario-2"
  | "scenario-3"
  | "industry-impact"
  | "action-priority";

type EmergencyScenarioChartCardProps = {
  title: string;
  description?: string;
  kind: ChartKind;
  heightClassName?: string;
};

const COLORS = {
  s1: "#0F766E",
  s2: "#B45309",
  s3: "#B91C1C",
  coral: "#D97706",
  violet: "#6D28D9",
  blue: "#1D4ED8",
  grid: "rgba(148,163,184,0.25)",
  text: "#334155",
};

function createDefaultLineOptions(maxY: number, ySuffix: string, yPrefix = ""): ChartOptions<"line"> {
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
          callback: (value) => `${yPrefix}${value}${ySuffix}`,
        },
      },
    },
  };
}

function ScenarioLineChart({ kind }: { kind: ChartKind }) {
  const data = useMemo<ChartData<"line">>(() => {
    if (kind === "oil-scenarios") {
      return {
        labels: ["2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        datasets: [
          {
            label: "シナリオ1（短期安定化）",
            data: [67, 105, 90, 78, 72, 70, 68, 67, 66, 65, 65],
            borderColor: COLORS.s1,
            backgroundColor: `${COLORS.s1}33`,
            borderWidth: 2.5,
            tension: 0.35,
            pointRadius: 3,
          },
          {
            label: "シナリオ2（夏まで長期化）",
            data: [67, 105, 102, 98, 95, 92, 82, 76, 72, 70, 68],
            borderColor: COLORS.s2,
            backgroundColor: `${COLORS.s2}33`,
            borderWidth: 2.5,
            tension: 0.35,
            pointRadius: 3,
          },
          {
            label: "シナリオ3（秋以降継続）",
            data: [67, 105, 102, 105, 110, 108, 105, 100, 98, 95, 92],
            borderColor: COLORS.s3,
            backgroundColor: `${COLORS.s3}33`,
            borderWidth: 2.5,
            tension: 0.35,
            pointRadius: 3,
          },
        ],
      };
    }

    if (kind === "impact-scenarios") {
      return {
        labels: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        datasets: [
          { label: "シナリオ1", data: [2, 3, 6, 8, 7, 5, 3, 2, 1], borderColor: COLORS.s1, tension: 0.35, pointRadius: 3 },
          {
            label: "シナリオ2",
            data: [2, 5, 12, 18, 25, 22, 16, 12, 8],
            borderColor: COLORS.s2,
            tension: 0.35,
            pointRadius: 3,
          },
          {
            label: "シナリオ3",
            data: [2, 5, 14, 22, 30, 32, 35, 33, 30],
            borderColor: COLORS.s3,
            tension: 0.35,
            pointRadius: 3,
          },
        ],
      };
    }

    return {
      labels: ["1月", "2/1", "2/14", "2/28", "3/9", "3/11", "3/23", "4/1", "4/5"],
      datasets: [
        {
          label: "WTI原油先物（2026年）",
          data: [68, 67, 67, 67, 118, 88, 82, 102, 103],
          borderColor: COLORS.coral,
          backgroundColor: "rgba(217, 119, 6, 0.15)",
          fill: true,
          borderWidth: 2.5,
          tension: 0.3,
          pointRadius: 3,
        },
      ],
    };
  }, [kind]);

  const options = useMemo<ChartOptions<"line">>(() => {
    if (kind === "oil-scenarios") {
      return {
        ...createDefaultLineOptions(130, "", "$"),
        scales: {
          x: { grid: { display: false }, ticks: { color: COLORS.text } },
          y: {
            min: 50,
            max: 130,
            grid: { color: COLORS.grid },
            ticks: { color: COLORS.text, callback: (value) => `$${value}` },
          },
        },
      };
    }

    if (kind === "impact-scenarios") {
      return createDefaultLineOptions(40, "%", "+");
    }

    return {
      ...createDefaultLineOptions(130, "", "$"),
      scales: {
        x: { grid: { display: false }, ticks: { color: COLORS.text } },
        y: {
          min: 50,
          max: 130,
          grid: { color: COLORS.grid },
          ticks: { color: COLORS.text, callback: (value) => `$${value}` },
        },
      },
    };
  }, [kind]);

  return <Line data={data} options={options} />;
}

function ScenarioBarChart({ kind }: { kind: ChartKind }) {
  const data = useMemo<ChartData<"bar">>(() => {
    if (kind === "quadruple-stack") {
      return {
        labels: ["4月", "5月", "6月", "7月", "8月"],
        datasets: [
          { label: "原油・LNG", data: [1, 2, 5, 8, 10], backgroundColor: COLORS.s3 },
          { label: "補助金終了", data: [4, 4, 4, 4, 4], backgroundColor: COLORS.s2 },
          { label: "再エネ賦課金", data: [0, 2, 2, 2, 2], backgroundColor: COLORS.violet },
          { label: "円安", data: [1, 2, 3, 3, 4], backgroundColor: COLORS.coral },
        ],
      };
    }

    if (kind === "scenario-1") {
      return {
        labels: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        datasets: [{ label: "前年比", data: [2, 3, 6, 8, 7, 5, 3, 2, 1], backgroundColor: `${COLORS.s1}cc`, borderRadius: 6 }],
      };
    }

    if (kind === "scenario-2") {
      return {
        labels: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        datasets: [{ label: "前年比", data: [2, 5, 12, 18, 25, 22, 16, 12, 8], backgroundColor: `${COLORS.s2}cc`, borderRadius: 6 }],
      };
    }

    if (kind === "scenario-3") {
      return {
        labels: ["4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        datasets: [{ label: "前年比", data: [2, 5, 14, 22, 30, 32, 35, 33, 30], backgroundColor: `${COLORS.s3}cc`, borderRadius: 6 }],
      };
    }

    if (kind === "industry-impact") {
      return {
        labels: ["製造業", "冷凍冷蔵", "データセンター", "商業施設", "物流", "オフィス"],
        datasets: [
          { label: "シナリオ1", data: [8, 9, 7, 6, 5, 4], backgroundColor: `${COLORS.s1}b3` },
          { label: "シナリオ2", data: [25, 28, 22, 18, 15, 12], backgroundColor: `${COLORS.s2}b3` },
          { label: "シナリオ3", data: [35, 38, 32, 26, 22, 18], backgroundColor: `${COLORS.s3}b3` },
        ],
      };
    }

    return {
      labels: ["電力会社切替", "デマンド管理", "LED更新", "太陽光", "蓄電池", "PPA", "省エネ改修"],
      datasets: [{ label: "削減効果", data: [18, 12, 8, 35, 20, 40, 30], backgroundColor: `${COLORS.blue}bb`, borderRadius: 6 }],
    };
  }, [kind]);

  const options = useMemo<ChartOptions<"bar">>(() => {
    if (kind === "industry-impact") {
      return {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: "y",
        plugins: { legend: { position: "bottom" } },
        scales: {
          x: { grid: { color: COLORS.grid }, ticks: { callback: (value) => `+${value}%`, color: COLORS.text } },
          y: { grid: { display: false }, ticks: { color: COLORS.text } },
        },
      };
    }

    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: kind === "quadruple-stack", position: "bottom" } },
      scales: {
        x: { stacked: kind === "quadruple-stack", grid: { display: false }, ticks: { color: COLORS.text } },
        y: {
          min: 0,
          max: kind === "scenario-3" ? 40 : kind === "scenario-2" ? 30 : 24,
          stacked: kind === "quadruple-stack",
          grid: { color: COLORS.grid },
          ticks: { callback: (value) => `+${value}%`, color: COLORS.text },
        },
      },
    };
  }, [kind]);

  return <Bar data={data} options={options} />;
}

export default function EmergencyScenarioChartCard({
  title,
  description,
  kind,
  heightClassName = "h-[280px] sm:h-[340px]",
}: EmergencyScenarioChartCardProps) {
  const lineKinds: ChartKind[] = ["oil-scenarios", "impact-scenarios", "oil-history"];
  const isLine = lineKinds.includes(kind);

  return (
    <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      {description ? <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p> : null}
      <div className={`mt-3 w-full ${heightClassName}`}>
        {isLine ? <ScenarioLineChart kind={kind} /> : <ScenarioBarChart kind={kind} />}
      </div>
    </section>
  );
}
