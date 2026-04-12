"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  type TooltipItem,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import {
  DECILE_LABELS,
  DECILE_DEMAND,
  DECILE_PRICE,
  DECILE_STD,
} from "../../data/marketData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// D1-D8: 青系、D9: オレンジ、D10: 赤
function decileBarColor(index: number, alpha = 0.75): string {
  if (index === 9) return `rgba(220,38,38,${alpha})`;
  if (index === 8) return `rgba(249,115,22,${alpha})`;
  return `rgba(37,99,235,${alpha})`;
}

export function DecilePriceBarLineChart() {
  const data = {
    labels: DECILE_LABELS,
    datasets: [
      {
        type: "bar" as const,
        label: "平均スポット価格（円/kWh）",
        data: DECILE_PRICE,
        backgroundColor: DECILE_PRICE.map((_, i) => decileBarColor(i, 0.72)),
        borderColor: DECILE_PRICE.map((_, i) => decileBarColor(i, 1)),
        borderWidth: 1,
        borderRadius: 4,
        yAxisID: "yPrice",
        order: 2,
      },
      {
        type: "line" as const,
        label: "価格標準偏差（σ）",
        data: DECILE_STD,
        borderColor: "rgba(220,38,38,0.9)",
        backgroundColor: "rgba(220,38,38,0.1)",
        borderWidth: 2,
        fill: false,
        tension: 0.35,
        pointRadius: 4,
        pointBackgroundColor: "rgba(220,38,38,0.9)",
        yAxisID: "yStd",
        order: 1,
      },
      {
        type: "line" as const,
        label: "需要水準（MW）",
        data: DECILE_DEMAND,
        borderColor: "rgba(100,116,139,0.5)",
        backgroundColor: "rgba(100,116,139,0.05)",
        borderWidth: 1.5,
        borderDash: [4, 4],
        fill: false,
        tension: 0.35,
        pointRadius: 3,
        pointBackgroundColor: "rgba(100,116,139,0.6)",
        yAxisID: "yDemand",
        order: 3,
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
        display: true,
        position: "top" as const,
        labels: { font: { size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar" | "line">) => {
            const lbl = (ctx.dataset.label ?? "") as string;
            if (lbl.includes("需要")) return `需要 ${ctx.parsed.y.toLocaleString()} MW`;
            if (lbl.includes("標準")) return `σ ${ctx.parsed.y.toFixed(2)} 円`;
            return `平均 ${ctx.parsed.y.toFixed(2)} 円/kWh`;
          },
        },
      },
    },
    scales: {
      yPrice: {
        type: "linear" as const,
        position: "left" as const,
        title: {
          display: true,
          text: "平均スポット価格（円/kWh）",
          font: { size: 12 },
        },
        grid: { color: "rgba(0,0,0,0.06)" },
        min: 0,
        max: 28,
      },
      yStd: {
        type: "linear" as const,
        position: "right" as const,
        title: {
          display: true,
          text: "標準偏差 σ（円/kWh）",
          font: { size: 12 },
        },
        grid: { display: false },
        min: 0,
        max: 30,
      },
      yDemand: {
        type: "linear" as const,
        display: false,
        min: 60000,
        max: 160000,
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
