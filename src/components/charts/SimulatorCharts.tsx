"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
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

let registered = false;
function ensureRegistered() {
  if (registered) return;
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  registered = true;
}

export function SimulatorLineChart({
  data,
  options,
}: {
  data: ChartData<"line">;
  options: ChartOptions<"line">;
}) {
  ensureRegistered();
  return <Line data={data} options={options} />;
}

export function SimulatorBarChart({
  data,
  options,
}: {
  data: ChartData<"bar">;
  options: ChartOptions<"bar">;
}) {
  ensureRegistered();
  return <Bar data={data} options={options} />;
}

export default SimulatorLineChart;
