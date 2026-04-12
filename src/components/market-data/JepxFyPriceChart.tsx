"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { JEPX_FY_LABELS, JEPX_FY_AVG } from "../../data/marketData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function JepxFyPriceChart() {
  const data = {
    labels: JEPX_FY_LABELS,
    datasets: [
      {
        label: "年度平均スポット価格（円/kWh）",
        data: JEPX_FY_AVG,
        backgroundColor: JEPX_FY_AVG.map((v) =>
          v >= 18 ? "rgba(220,38,38,0.75)" : v >= 14 ? "rgba(234,179,8,0.75)" : "rgba(37,99,235,0.75)"
        ),
        borderColor: JEPX_FY_AVG.map((v) =>
          v >= 18 ? "rgba(220,38,38,1)" : v >= 14 ? "rgba(234,179,8,1)" : "rgba(37,99,235,1)"
        ),
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number } }) => `${ctx.parsed.y.toFixed(2)} 円/kWh`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
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
      <Bar data={data} options={options} />
    </div>
  );
}
