"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { JEPX_HOURLY } from "../../data/marketData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const HOUR_LABELS = Array.from({ length: 24 }, (_, i) => `${i}時`);

export default function JepxHourlyPriceChart() {
  const data = {
    labels: HOUR_LABELS,
    datasets: [
      {
        label: "時間帯別平均スポット価格（円/kWh）",
        data: JEPX_HOURLY,
        borderColor: "rgba(37,99,235,1)",
        backgroundColor: "rgba(37,99,235,0.08)",
        borderWidth: 2.5,
        pointBackgroundColor: JEPX_HOURLY.map((v) =>
          v >= 15 ? "rgba(220,38,38,1)" : "rgba(37,99,235,1)"
        ),
        pointRadius: 4,
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y.toFixed(2)} 円/kWh`,
        },
      },
    },
    scales: {
      y: {
        min: 8,
        title: { display: true, text: "円/kWh", font: { size: 12 } },
        grid: { color: "rgba(0,0,0,0.06)" },
      },
      x: {
        grid: { display: false },
        ticks: { font: { size: 11 } },
      },
    },
  };

  return (
    <div style={{ height: 380 }}>
      <Line data={data} options={options} />
    </div>
  );
}
