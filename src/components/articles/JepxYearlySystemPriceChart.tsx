"use client";

import {
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
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

type JepxPoint = {
  year: number;
  systemPriceYenPerKwh: number;
};

type JepxYearlySystemPriceChartProps = {
  data: readonly JepxPoint[];
};

export default function JepxYearlySystemPriceChart({ data }: JepxYearlySystemPriceChartProps) {
  const chartData: ChartData<"line"> = {
    labels: data.map((point) => `${point.year}`),
    datasets: [
      {
        label: "JEPXスポット市場システムプライス年度平均",
        data: data.map((point) => point.systemPriceYenPerKwh),
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.16)",
        borderWidth: 2.5,
        pointRadius: 3,
        pointHoverRadius: 4,
        tension: 0.2,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label(context) {
            return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(2)} 円/kWh`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "円/kWh",
        },
        grid: {
          color: "rgba(148, 163, 184, 0.2)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-80 w-full">
      <Line data={chartData} options={options} />
    </div>
  );
}
