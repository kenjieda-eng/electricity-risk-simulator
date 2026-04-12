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
import { FLOW_DATA } from "../../data/areaSupplyData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function InterAreaFlowChart() {
  const chartData: ChartData<"bar"> = {
    labels: FLOW_DATA.map((r) => r.area),
    datasets: [
      {
        label: "平均融通（MW）",
        data: FLOW_DATA.map((r) => r.avg),
        backgroundColor: FLOW_DATA.map((r) =>
          r.avg >= 0 ? "rgba(239,68,68,0.7)" : "rgba(59,130,246,0.7)"
        ),
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: { display: true, text: "MW（正=輸入、負=輸出）" },
        ticks: { callback: (v) => `${Number(v).toLocaleString()}` },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const v = ctx.parsed.y;
            return `${v >= 0 ? "輸入" : "輸出"}: ${Math.abs(v).toLocaleString()} MW`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: 360 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}
