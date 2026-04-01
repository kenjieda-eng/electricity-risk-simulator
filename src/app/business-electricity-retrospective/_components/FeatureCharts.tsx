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
  Title,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import {
  VOLTAGE_COLORS,
  VOLTAGE_LABELS,
  type VoltageKey,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

type MultiLinePoint = {
  label: string;
  values: Record<VoltageKey, number>;
};

type MultiLineChartCardProps = {
  title: string;
  description: string;
  points: MultiLinePoint[];
  keys: readonly VoltageKey[];
  compact?: boolean;
};

export function MultiLineChartCard({ title, description, points, keys, compact = false }: MultiLineChartCardProps) {
  const data = useMemo<ChartData<"line">>(
    () => ({
      labels: points.map((point) => point.label),
      datasets: keys.map((key) => ({
        label: `${VOLTAGE_LABELS[key]}（円/kWh）`,
        data: points.map((point) => point.values[key]),
        borderColor: VOLTAGE_COLORS[key],
        backgroundColor: `${VOLTAGE_COLORS[key]}33`,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        tension: 0.2,
      })),
    }),
    [keys, points],
  );

  const options = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(1)}円/kWh`;
            },
          },
        },
      },
      scales: {
        y: {
          title: { display: true, text: "円/kWh" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: compact ? 8 : 14,
          },
          grid: { display: false },
        },
      },
    }),
    [compact],
  );

  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
      <div className="mt-3 h-[280px] w-full sm:h-[340px]">
        <Line data={data} options={options} />
      </div>
    </section>
  );
}

type BarRow = {
  label: string;
  values: Record<VoltageKey, number>;
};

type MultiBarChartCardProps = {
  title: string;
  description: string;
  rows: BarRow[];
  keys: readonly VoltageKey[];
};

export function MultiBarChartCard({ title, description, rows, keys }: MultiBarChartCardProps) {
  const data = useMemo<ChartData<"bar">>(
    () => ({
      labels: rows.map((row) => row.label),
      datasets: keys.map((key) => ({
        label: `${VOLTAGE_LABELS[key]}（円/kWh）`,
        data: rows.map((row) => row.values[key]),
        backgroundColor: `${VOLTAGE_COLORS[key]}cc`,
        borderRadius: 6,
      })),
    }),
    [keys, rows],
  );

  const options = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(1)}円/kWh`;
            },
          },
        },
      },
      scales: {
        y: {
          title: { display: true, text: "円/kWh" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          grid: { display: false },
        },
      },
    }),
    [],
  );

  return (
    <section className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-700">{description}</p>
      <div className="mt-3 h-[260px] w-full sm:h-[320px]">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
}
