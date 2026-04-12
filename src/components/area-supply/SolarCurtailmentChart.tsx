"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type CurtailmentRow = {
  area: string;
  month: number;
  curtailment: number;
  output: number;
};

const CURTAILMENT_DATA: CurtailmentRow[] = [
  { area: "九州", month: 1, curtailment: 7.2, output: 2579.4 },
  { area: "九州", month: 2, curtailment: 35.7, output: 2377.4 },
  { area: "九州", month: 3, curtailment: 565.6, output: 3469.4 },
  { area: "九州", month: 4, curtailment: 851.8, output: 2883.8 },
  { area: "九州", month: 7, curtailment: 0.0, output: 4180.1 },
  { area: "九州", month: 9, curtailment: 2.0, output: 3488.5 },
  { area: "九州", month: 10, curtailment: 114.7, output: 3364.2 },
  { area: "九州", month: 11, curtailment: 45.5, output: 2805.5 },
  { area: "九州", month: 12, curtailment: 3.7, output: 2110.8 },
  { area: "四国", month: 1, curtailment: 4.2, output: 746.8 },
  { area: "四国", month: 2, curtailment: 4.1, output: 869.4 },
  { area: "四国", month: 3, curtailment: 77.6, output: 962.1 },
  { area: "四国", month: 4, curtailment: 85.1, output: 1022.2 },
  { area: "四国", month: 5, curtailment: 139.8, output: 1030.4 },
  { area: "四国", month: 6, curtailment: 33.3, output: 1064.8 },
  { area: "四国", month: 7, curtailment: 0.0, output: 1253.6 },
  { area: "四国", month: 8, curtailment: 0.0, output: 1190.6 },
  { area: "四国", month: 9, curtailment: 0.0, output: 1043.4 },
  { area: "四国", month: 10, curtailment: 2.0, output: 759.7 },
  { area: "四国", month: 11, curtailment: 23.7, output: 687.1 },
  { area: "四国", month: 12, curtailment: 0.0, output: 654.8 },
  { area: "関西", month: 1, curtailment: 0.3, output: 1594.2 },
  { area: "関西", month: 2, curtailment: 0.6, output: 1849.5 },
  { area: "関西", month: 3, curtailment: 51.9, output: 2171.7 },
  { area: "関西", month: 4, curtailment: 97.1, output: 2453.1 },
  { area: "関西", month: 5, curtailment: 163.1, output: 2497.3 },
  { area: "関西", month: 6, curtailment: 57.2, output: 2542.8 },
  { area: "関西", month: 7, curtailment: 0.0, output: 2814.2 },
  { area: "関西", month: 8, curtailment: 0.0, output: 2665.7 },
  { area: "関西", month: 9, curtailment: 0.0, output: 2282.7 },
  { area: "関西", month: 10, curtailment: 13.8, output: 1758.0 },
  { area: "関西", month: 11, curtailment: 44.0, output: 1574.5 },
  { area: "関西", month: 12, curtailment: 0.0, output: 1419.4 },
  { area: "東北", month: 1, curtailment: 0.0, output: 1410.1 },
  { area: "東北", month: 2, curtailment: 3.0, output: 2016.0 },
  { area: "東北", month: 3, curtailment: 114.1, output: 2710.1 },
  { area: "東北", month: 4, curtailment: 274.2, output: 2784.0 },
  { area: "東北", month: 5, curtailment: 305.9, output: 2911.5 },
  { area: "東北", month: 6, curtailment: 103.9, output: 3345.5 },
  { area: "東北", month: 7, curtailment: 0.0, output: 3136.5 },
  { area: "東北", month: 8, curtailment: 2.2, output: 3064.6 },
  { area: "東北", month: 9, curtailment: 31.6, output: 2681.9 },
  { area: "東北", month: 10, curtailment: 4.5, output: 2213.6 },
  { area: "東北", month: 11, curtailment: 10.6, output: 2130.1 },
  { area: "東北", month: 12, curtailment: 0.0, output: 1388.5 },
  { area: "中国", month: 1, curtailment: 0.7, output: 1534.6 },
  { area: "中国", month: 2, curtailment: 14.1, output: 1578.7 },
  { area: "中国", month: 3, curtailment: 68.9, output: 2038.6 },
  { area: "中国", month: 4, curtailment: 130.1, output: 2298.6 },
  { area: "中国", month: 5, curtailment: 124.3, output: 2530.5 },
  { area: "中国", month: 6, curtailment: 68.7, output: 2362.0 },
  { area: "中国", month: 7, curtailment: 0.9, output: 2764.6 },
  { area: "中国", month: 8, curtailment: 0.0, output: 2650.2 },
  { area: "中国", month: 9, curtailment: 0.0, output: 2320.6 },
  { area: "中国", month: 10, curtailment: 14.6, output: 1760.3 },
  { area: "中国", month: 11, curtailment: 49.1, output: 1659.4 },
  { area: "中国", month: 12, curtailment: 1.5, output: 1375.9 },
  { area: "東京", month: 1, curtailment: 0.0, output: 5461.2 },
  { area: "東京", month: 2, curtailment: 0.0, output: 6269.1 },
  { area: "東京", month: 3, curtailment: 0.0, output: 6179.6 },
  { area: "東京", month: 4, curtailment: 0.0, output: 6146.1 },
  { area: "東京", month: 5, curtailment: 0.0, output: 6085.7 },
  { area: "東京", month: 6, curtailment: 0.0, output: 6808.0 },
  { area: "東京", month: 7, curtailment: 0.0, output: 7003.4 },
  { area: "東京", month: 8, curtailment: 0.0, output: 6815.6 },
  { area: "東京", month: 9, curtailment: 0.0, output: 5811.1 },
  { area: "東京", month: 10, curtailment: 0.0, output: 4057.9 },
  { area: "東京", month: 11, curtailment: 0.0, output: 4790.6 },
  { area: "東京", month: 12, curtailment: 0.0, output: 4762.9 },
];

export { CURTAILMENT_DATA };

const FOCUS_AREAS = ["九州", "四国", "関西", "東北", "中国"] as const;
const AREA_COLORS: Record<string, string> = {
  "九州": "#dc2626",
  "四国": "#f59e0b",
  "関西": "#6366f1",
  "東北": "#0d9488",
  "中国": "#f97316",
};

const MONTHS = Array.from({ length: 12 }, (_, i) => `${i + 1}月`);

export default function SolarCurtailmentChart() {
  const chartData: ChartData<"bar"> = {
    labels: MONTHS,
    datasets: FOCUS_AREAS.map((area) => {
      const rows = CURTAILMENT_DATA.filter((r) => r.area === area);
      const monthMap = new Map(rows.map((r) => [r.month, r.curtailment]));
      return {
        label: area,
        data: Array.from({ length: 12 }, (_, i) => monthMap.get(i + 1) ?? 0),
        backgroundColor: AREA_COLORS[area],
        borderWidth: 0,
      };
    }),
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { title: { display: false } },
      y: {
        title: { display: true, text: "抑制量（MW）" },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: { boxWidth: 12, padding: 8, font: { size: 11 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(1)} MW`,
        },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
