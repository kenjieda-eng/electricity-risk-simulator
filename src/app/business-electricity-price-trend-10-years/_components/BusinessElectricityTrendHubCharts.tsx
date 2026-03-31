"use client";

import { useMemo, useState } from "react";
import {
  BarElement,
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
import { Bar, Line } from "react-chartjs-2";
import {
  BUSINESS_ELECTRICITY_MONTHLY_SERIES,
  JEPX_SYSTEM_PRICE_YEARLY,
  MAIN_CHART_MARKERS,
  RENEWABLE_SURCHARGE_YEARLY,
  SUBSIDY_PERIOD_BANDS,
} from "../../../data/businessElectricityTrendHubData";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Legend);

const voltageMeta = {
  extraHighVoltage: { label: "特別高圧", color: "#0f766e" },
  highVoltage: { label: "高圧", color: "#1d4ed8" },
  lowVoltageLighting: { label: "低圧電灯", color: "#c2410c" },
  lowVoltagePower: { label: "低圧動力", color: "#7c3aed" },
} as const;

type VoltageKey = keyof typeof voltageMeta;

const allVoltageKeys: VoltageKey[] = ["extraHighVoltage", "highVoltage", "lowVoltageLighting", "lowVoltagePower"];

const toFixedLabel = (value: number): string => `${value.toFixed(2)} 円/kWh`;

export default function BusinessElectricityTrendHubCharts() {
  const [activeSeries, setActiveSeries] = useState<VoltageKey[]>(["extraHighVoltage", "highVoltage"]);
  const [showAllSeriesOnMobile, setShowAllSeriesOnMobile] = useState(false);

  const effectiveSeries = showAllSeriesOnMobile ? allVoltageKeys : activeSeries;

  const markerDataset = useMemo(() => {
    return BUSINESS_ELECTRICITY_MONTHLY_SERIES.map((point) => {
      const marker = MAIN_CHART_MARKERS.find((item) => item.month === point.month);
      return marker ? point.highVoltage : null;
    });
  }, []);

  const mainLineData = useMemo<ChartData<"line">>(
    () => ({
      labels: BUSINESS_ELECTRICITY_MONTHLY_SERIES.map((point) => point.label),
      datasets: [
        ...effectiveSeries.map((key) => ({
          label: `${voltageMeta[key].label}（円/kWh）`,
          data: BUSINESS_ELECTRICITY_MONTHLY_SERIES.map((point) => point[key]),
          borderColor: voltageMeta[key].color,
          backgroundColor: `${voltageMeta[key].color}22`,
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 3,
          tension: 0.2,
        })),
        {
          type: "line" as const,
          label: "注釈マーカー（主要転換点）",
          data: markerDataset,
          borderColor: "#0f172a",
          backgroundColor: "#0f172a",
          pointRadius: 4,
          pointHoverRadius: 5,
          showLine: false,
        },
      ],
    }),
    [effectiveSeries, markerDataset]
  );

  const mainLineOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              if (context.dataset.label === "注釈マーカー（主要転換点）") {
                const marker = MAIN_CHART_MARKERS.find((item) => item.month.replace("-", "/") === context.label);
                return marker ? `${marker.shortLabel}: ${marker.detail}` : "主要転換点";
              }
              return `${context.dataset.label}: ${toFixedLabel(Number(context.parsed.y))}`;
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
          ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 12 },
          grid: { display: false },
        },
      },
    }),
    []
  );

  const jepxLineData = useMemo<ChartData<"line">>(
    () => ({
      labels: JEPX_SYSTEM_PRICE_YEARLY.map((row) => `${row.year}`),
      datasets: [
        {
          label: "JEPXスポット（システムプライス年平均）",
          data: JEPX_SYSTEM_PRICE_YEARLY.map((row) => row.systemPriceYenPerKwh),
          borderColor: "#2563eb",
          backgroundColor: "rgba(37,99,235,0.15)",
          borderWidth: 2.5,
          pointRadius: 3,
          pointHoverRadius: 4,
          tension: 0.2,
        },
      ],
    }),
    []
  );

  const jepxLineOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(2)} 円/kWh`;
            },
          },
        },
      },
      scales: {
        y: { title: { display: true, text: "円/kWh" }, grid: { color: "rgba(148, 163, 184, 0.2)" } },
        x: { grid: { display: false } },
      },
    }),
    []
  );

  const renewableBarData = useMemo<ChartData<"bar">>(
    () => ({
      labels: RENEWABLE_SURCHARGE_YEARLY.map((row) => `${row.fiscalYear}年度`),
      datasets: [
        {
          label: "再エネ賦課金単価",
          data: RENEWABLE_SURCHARGE_YEARLY.map((row) => row.unitPriceYenPerKwh),
          backgroundColor: "rgba(2,132,199,0.7)",
          borderColor: "#0284c7",
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    }),
    []
  );

  const renewableBarOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toFixed(2)} 円/kWh`;
            },
          },
        },
      },
      scales: {
        y: { title: { display: true, text: "円/kWh" }, beginAtZero: true, grid: { color: "rgba(148, 163, 184, 0.2)" } },
        x: { ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 8 }, grid: { display: false } },
      },
    }),
    []
  );

  const subsidyBandData = useMemo<ChartData<"bar">>(
    () => ({
      labels: SUBSIDY_PERIOD_BANDS.map((row) => row.label),
      datasets: [
        {
          label: "低圧（電灯・動力）",
          data: SUBSIDY_PERIOD_BANDS.map(() => 1),
          backgroundColor: "rgba(194,65,12,0.75)",
          borderColor: "#c2410c",
          borderWidth: 1,
        },
        {
          label: "高圧",
          data: SUBSIDY_PERIOD_BANDS.map(() => 1),
          backgroundColor: "rgba(29,78,216,0.75)",
          borderColor: "#1d4ed8",
          borderWidth: 1,
        },
        {
          label: "特別高圧（別枠扱いが多い）",
          data: SUBSIDY_PERIOD_BANDS.map(() => 1),
          backgroundColor: "rgba(15,118,110,0.75)",
          borderColor: "#0f766e",
          borderWidth: 1,
        },
      ],
    }),
    []
  );

  const subsidyBandOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: "y",
      plugins: {
        legend: { position: "top" },
        tooltip: {
          callbacks: {
            label(context) {
              const row = SUBSIDY_PERIOD_BANDS[context.dataIndex];
              if (context.dataset.label.startsWith("低圧")) {
                return `低圧: ${row.lowVoltage}`;
              }
              if (context.dataset.label.startsWith("高圧")) {
                return `高圧: ${row.highVoltage}`;
              }
              return `特別高圧: ${row.extraHighVoltage}`;
            },
          },
        },
      },
      scales: {
        x: { stacked: true, display: false, max: 3 },
        y: { stacked: true, grid: { display: false } },
      },
    }),
    []
  );

  return (
    <section className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">2019年以降の契約区分別推移（円/kWh）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          消費税・再エネ賦課金を含まない公開月次データを使用しています。区分定義の異なる系列を混在させないため、特別高圧・高圧・低圧電灯・低圧動力を同じ定義で並べています。
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {allVoltageKeys.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() =>
                setActiveSeries((prev) =>
                  prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
                )
              }
              className={`rounded-full border px-3 py-1 text-xs sm:text-sm ${
                activeSeries.includes(key)
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {voltageMeta[key].label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setShowAllSeriesOnMobile((prev) => !prev)}
            className="rounded-full border border-sky-300 bg-sky-50 px-3 py-1 text-xs text-sky-800 sm:text-sm"
          >
            {showAllSeriesOnMobile ? "モバイル簡易表示に戻す" : "全系列を表示"}
          </button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <div className="min-w-[720px]">
            <div className="h-[320px] sm:h-[380px]">
              <Line data={mainLineData} options={mainLineOptions} />
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
          <p>読み解きの要点: 2019-2021は比較的安定、2022-2023で急上昇、その後も2019年水準には戻り切らない系列が多い構図です。</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {MAIN_CHART_MARKERS.map((marker) => (
              <li key={marker.month}>
                <span className="font-medium">{marker.shortLabel}</span>: {marker.detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">サブグラフ1: JEPXスポット市場の推移</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            すべての契約がJEPX連動ではありませんが、市場環境の変化を読む補助線として有効です。
          </p>
          <div className="mt-3 h-[240px]">
            <Line data={jepxLineData} options={jepxLineOptions} />
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">サブグラフ2: 再エネ賦課金の年度推移</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            制度負担の増減は請求全体の見え方を変えます。2023年度の低下と、2024年度以降の再上昇が確認できます。
          </p>
          <div className="mt-3 h-[240px]">
            <Bar data={renewableBarData} options={renewableBarOptions} />
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">サブグラフ3: 補助政策の実施期間帯</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            目的は見かけの負担と本来水準の切り分けです。低圧・高圧・特別高圧で支援の見え方が異なります。
          </p>
          <div className="mt-3 h-[240px]">
            <Bar data={subsidyBandData} options={subsidyBandOptions} />
          </div>
        </article>
      </section>
    </section>
  );
}
