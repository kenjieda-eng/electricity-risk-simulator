"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export type PriceAdjustmentSeries = {
  label: string;
  values: number[];
  color: string;
  fillColor?: string;
  dashed?: boolean;
};

type Props = {
  labels: string[];
  series: PriceAdjustmentSeries[];
  unit?: string;
  yTitle?: string;
  height?: number;
};

export default function PriceAdjustmentLineChart({
  labels,
  series,
  unit = "円/kWh",
  yTitle,
  height = 320,
}: Props) {
  const chartData: ChartData<"line"> = {
    labels,
    datasets: series.map((s) => ({
      label: s.label,
      data: s.values,
      borderColor: s.color,
      backgroundColor: s.fillColor ?? s.color,
      borderWidth: 2.5,
      borderDash: s.dashed ? [6, 4] : undefined,
      pointRadius: 3,
      pointHoverRadius: 5,
      tension: 0.25,
      fill: Boolean(s.fillColor),
    })),
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label(context) {
            const value = Number(context.parsed.y);
            return `${context.dataset.label}: ${value.toFixed(2)} ${unit}`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: Boolean(yTitle),
          text: yTitle ?? "",
        },
        grid: { color: "rgba(148, 163, 184, 0.2)" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div style={{ height }} className="w-full">
      <Line data={chartData} options={options} />
    </div>
  );
}
