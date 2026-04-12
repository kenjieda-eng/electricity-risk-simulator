"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  TEMP_BIN_LABELS,
  TEMP_BIN_DEMAND,
  TEMP_BIN_PRICE,
} from "../../data/marketData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function TempBinChart() {
  const data = {
    labels: TEMP_BIN_LABELS,
    datasets: [
      {
        type: "bar" as const,
        label: "平均需要（MW）",
        data: TEMP_BIN_DEMAND,
        backgroundColor: "rgba(37,99,235,0.6)",
        borderColor: "rgba(37,99,235,1)",
        borderWidth: 1,
        borderRadius: 4,
        yAxisID: "yDemand",
      },
      {
        type: "line" as const,
        label: "平均スポット価格（円/kWh）",
        data: TEMP_BIN_PRICE,
        borderColor: "rgba(220,38,38,1)",
        backgroundColor: "rgba(220,38,38,0.1)",
        borderWidth: 2.5,
        pointBackgroundColor: "rgba(220,38,38,1)",
        pointRadius: 5,
        tension: 0.3,
        yAxisID: "yPrice",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: { font: { size: 12 }, boxWidth: 16 },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { dataset: { label?: string; yAxisID?: string }; parsed: { y: number } }) => {
            if (ctx.dataset.yAxisID === "yPrice") {
              return `${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} 円/kWh`;
            }
            return `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} MW`;
          },
        },
      },
    },
    scales: {
      yDemand: {
        type: "linear" as const,
        position: "left" as const,
        title: { display: true, text: "需要（MW）", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
        ticks: {
          callback: (value: string | number) =>
            typeof value === "number" ? `${(value / 1000).toFixed(0)}k` : value,
        },
      },
      yPrice: {
        type: "linear" as const,
        position: "right" as const,
        title: { display: true, text: "価格（円/kWh）", font: { size: 12 } },
        grid: { display: false },
        min: 0,
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}
