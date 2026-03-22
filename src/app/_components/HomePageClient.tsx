"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { calculateRiskScore } from "../../lib/riskScore";

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

const monthNames = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

const INPUT_STATE_SESSION_KEY = "ana-simulation-input-state";

type ContractType = "low" | "high" | "special";
type Region =
  | "hokkaido"
  | "tohoku"
  | "kita-kanto"
  | "shutoken"
  | "hokuriku"
  | "chubu"
  | "kansai"
  | "chugoku"
  | "shikoku"
  | "kyushu"
  | "okinawa";
type BuildingType =
  | "office"
  | "retail"
  | "restaurant"
  | "factory"
  | "welfare"
  | "hotel"
  | "warehouse"
  | "school"
  | "datacenter"
  | "public";
type UsagePattern =
  | "balanced"
  | "daytime"
  | "night"
  | "24h"
  | "weekend-busy"
  | "seasonal-heavy";
type SeasonType = "spring" | "summer" | "autumn" | "winter";

type StressFlags = {
  heatwave: boolean;
  coldWave: boolean;
  fuelPrice: boolean;
  geopolitical: boolean;
  outage: boolean;
};

type InputState = {
  contractType: ContractType | "";
  region: Region | "";
  springCost: number | "";
  summerCost: number | "";
  autumnCost: number | "";
  winterCost: number | "";
  startMonth: number | "";
  buildingType: BuildingType | "";
  usagePattern: UsagePattern | "";
  floorArea: number | "";
  stress: StressFlags;
};

type ScenarioResult = {
  lineA: number[];
  lineB: number[];
  monthlyAValues: number[];
  monthlyBValues: number[];
  totalA: number;
  totalB: number;
};

type ChartSeriesKey =
  | "baselineFixed"
  | "baselineMarket"
  | "currentFixed"
  | "currentMarket";

const contractFactorMap: Record<ContractType, number> = {
  low: 1.03,
  high: 1.0,
  special: 0.96,
};

const regionFactorMap: Record<Region, number> = {
  hokkaido: 1.04,
  tohoku: 1.02,
  "kita-kanto": 1.01,
  shutoken: 1.0,
  hokuriku: 1.01,
  chubu: 1.0,
  kansai: 0.99,
  chugoku: 0.99,
  shikoku: 0.98,
  kyushu: 0.98,
  okinawa: 1.03,
};

const regionSeasonMap: Record<Region, Record<SeasonType, number>> = {
  hokkaido: { spring: 1.0, summer: 0.96, autumn: 1.0, winter: 1.18 },
  tohoku: { spring: 1.0, summer: 0.98, autumn: 1.0, winter: 1.12 },
  "kita-kanto": { spring: 1.0, summer: 1.03, autumn: 1.0, winter: 1.04 },
  shutoken: { spring: 1.0, summer: 1.06, autumn: 1.0, winter: 1.02 },
  hokuriku: { spring: 1.0, summer: 0.99, autumn: 1.0, winter: 1.08 },
  chubu: { spring: 1.0, summer: 1.02, autumn: 1.0, winter: 1.03 },
  kansai: { spring: 1.0, summer: 1.04, autumn: 1.0, winter: 0.99 },
  chugoku: { spring: 1.0, summer: 1.02, autumn: 1.0, winter: 0.99 },
  shikoku: { spring: 1.0, summer: 1.04, autumn: 1.0, winter: 0.97 },
  kyushu: { spring: 1.0, summer: 1.05, autumn: 1.0, winter: 0.97 },
  okinawa: { spring: 1.03, summer: 1.14, autumn: 1.03, winter: 0.9 },
};

const buildingFactorMap: Record<BuildingType, number> = {
  office: 1.0,
  retail: 1.07,
  restaurant: 1.1,
  factory: 1.12,
  welfare: 1.09,
  hotel: 1.11,
  warehouse: 0.96,
  school: 0.94,
  datacenter: 1.2,
  public: 1.02,
};

const usageFactorMap: Record<UsagePattern, number> = {
  balanced: 1.03,
  daytime: 1.0,
  night: 1.07,
  "24h": 1.1,
  "weekend-busy": 1.04,
  "seasonal-heavy": 1.09,
};

const getSeasonType = (monthNumber: number): SeasonType => {
  if ([7, 8, 9].includes(monthNumber)) return "summer";
  if ([12, 1, 2].includes(monthNumber)) return "winter";
  if ([10, 11].includes(monthNumber)) return "autumn";
  return "spring";
};

const getOrderedMonths = (startMonth: number): number[] =>
  Array.from({ length: 12 }, (_, index) => ((startMonth - 1 + index) % 12) + 1);

const calcMonthlyBase = (
  monthNumber: number,
  springCost: number,
  summerCost: number,
  autumnCost: number,
  winterCost: number
): number => {
  const type = getSeasonType(monthNumber);
  if (type === "summer") return summerCost;
  if (type === "winter") return winterCost;
  if (type === "autumn") return autumnCost;
  return springCost;
};

const buildResultCommentary = (
  currentScenario: ScenarioResult,
  baselineScenario: ScenarioResult,
  selectedFactors: string[]
): string[] => {
  const marketGap = currentScenario.totalB - currentScenario.totalA;
  const fixedDiff = currentScenario.totalA - baselineScenario.totalA;
  const marketDiff = currentScenario.totalB - baselineScenario.totalB;
  const commentary: string[] = [];

  if (selectedFactors.length === 0) {
    commentary.push("リスク要因が未選択のため、平時を前提にした比較結果です。");
    commentary.push(
      "現在の条件では、市場連動プランは固定プランより低い累計で推移しています。"
    );
    commentary.push(
      "気候リスク要因や供給不安を追加すると、市場連動プランの上振れ幅が大きくなります。"
    );
    return commentary;
  }

  commentary.push(`現在は ${selectedFactors.join("、")} を反映したシナリオです。`);

  if (marketGap > 0) {
    commentary.push(
      `市場連動プランは固定プランより ${Math.abs(marketGap).toLocaleString(
        "ja-JP"
      )} 万円高く、変動影響を強く受けています。`
    );
  } else {
    commentary.push(
      `市場連動プランは固定プランより ${Math.abs(marketGap).toLocaleString(
        "ja-JP"
      )} 万円低く、まだ価格優位性を維持しています。`
    );
  }

  if (marketDiff > fixedDiff) {
    commentary.push(
      `当初想定からの増加幅は、市場連動のほうが ${Math.abs(
        marketDiff - fixedDiff
      ).toLocaleString("ja-JP")} 万円大きく出ています。`
    );
  } else if (fixedDiff > marketDiff) {
    commentary.push(
      `当初想定からの増加幅は、固定プランのほうが ${Math.abs(
        fixedDiff - marketDiff
      ).toLocaleString("ja-JP")} 万円大きく出ています。`
    );
  } else {
    commentary.push("当初想定からの増加幅は、両プランでほぼ同水準です。");
  }

  commentary.push(
    "特に地政学リスクや発電所停止を重ねると、市場連動プランの上振れが目立ちやすくなります。"
  );
  return commentary;
};

const calculateScenario = (
  orderedMonths: number[],
  state: InputState,
  stressFlags: StressFlags
): ScenarioResult => {
  const lineA: number[] = [];
  const lineB: number[] = [];
  const monthlyAValues: number[] = [];
  const monthlyBValues: number[] = [];
  let cumulativeA = 0;
  let cumulativeB = 0;

  const safeSpring = Math.max(0, Number(state.springCost) || 0);
  const safeSummer = Math.max(0, Number(state.summerCost) || 0);
  const safeAutumn = Math.max(0, Number(state.autumnCost) || 0);
  const safeWinter = Math.max(0, Number(state.winterCost) || 0);
  const floorArea = Math.max(1, Number(state.floorArea) || 1);
  const contractType = state.contractType || "high";
  const region = state.region || "shutoken";
  const buildingType = state.buildingType || "office";
  const usagePattern = state.usagePattern || "balanced";
  const areaFactor = Math.max(
    0.85,
    Math.min(1.25, 1 + ((floorArea - 5000) / 5000) * 0.08)
  );

  for (const [monthIndex, monthNumber] of orderedMonths.entries()) {
    const seasonType = getSeasonType(monthNumber);
    const baseMonthly =
      calcMonthlyBase(
        monthNumber,
        safeSpring,
        safeSummer,
        safeAutumn,
        safeWinter
      ) *
      contractFactorMap[contractType] *
      regionFactorMap[region] *
      regionSeasonMap[region][seasonType] *
      buildingFactorMap[buildingType] *
      usageFactorMap[usagePattern] *
      areaFactor;

    const shoulderAdjustment = monthNumber === 6 || monthNumber === 11 ? 1.02 : 1;
    const seasonalWaveB =
      seasonType === "summer"
        ? 0.98
        : seasonType === "winter"
        ? 1.02
        : 0.88 * shoulderAdjustment;

    let monthlyA = baseMonthly * 1.08;
    let monthlyB = baseMonthly * seasonalWaveB;

    const isSummer = seasonType === "summer";
    const isWinter = seasonType === "winter";

    if (stressFlags.heatwave && isSummer) {
      monthlyA *= 1.06;
      monthlyB *= 1.35;
      if (usagePattern === "seasonal-heavy") monthlyB *= 1.06;
    }

    if (stressFlags.coldWave && isWinter) {
      monthlyA *= 1.07;
      monthlyB *= 1.4;
      if (usagePattern === "seasonal-heavy") monthlyB *= 1.06;
    }

    if (stressFlags.fuelPrice) {
      monthlyA *= 1.12;
      monthlyB *= 1.22;
    }

    if (stressFlags.geopolitical) {
      monthlyA *= 1.18;
      monthlyB *= 1.52;
    }

    if (stressFlags.outage) {
      // 発電所停止は短期ショックとして、発生月と翌月だけ反映する
      const isOutageMonth = monthIndex === 0;
      const isAftershockMonth = monthIndex === 1;

      if (isOutageMonth) {
        monthlyA *= 1.08;
        monthlyB *= 1.3;
        if (usagePattern === "24h" || usagePattern === "night") {
          monthlyB *= 1.06;
        }
      } else if (isAftershockMonth) {
        monthlyA *= 1.03;
        monthlyB *= 1.1;
      }
    }

    monthlyAValues.push(Math.round(monthlyA));
    monthlyBValues.push(Math.round(monthlyB));
    cumulativeA += monthlyA;
    cumulativeB += monthlyB;

    lineA.push(Math.round(cumulativeA));
    lineB.push(Math.round(cumulativeB));
  }

  return {
    lineA,
    lineB,
    monthlyAValues,
    monthlyBValues,
    totalA: Math.round(cumulativeA),
    totalB: Math.round(cumulativeB),
  };
};

export default function HomePageClient() {
  const router = useRouter();
  const [state, setState] = useState<InputState>({
    contractType: "",
    region: "",
    springCost: "",
    summerCost: "",
    autumnCost: "",
    winterCost: "",
    startMonth: 1,
    buildingType: "",
    usagePattern: "",
    floorArea: "",
    stress: {
      heatwave: false,
      coldWave: false,
      fuelPrice: false,
      geopolitical: false,
      outage: false,
    },
  });
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [seriesVisibility, setSeriesVisibility] = useState<Record<ChartSeriesKey, boolean>>({
    baselineFixed: true,
    baselineMarket: true,
    currentFixed: true,
    currentMarket: true,
  });

  const worstCaseRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(INPUT_STATE_SESSION_KEY);
      if (!stored) return;

      const parsed = JSON.parse(stored) as Partial<InputState>;
      if (!parsed || typeof parsed !== "object") return;

      setState((prev) => ({
        ...prev,
        ...parsed,
        stress: {
          ...prev.stress,
          ...(parsed.stress ?? {}),
        },
      }));
    } catch {
      // 保存データが壊れている場合は無視
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(INPUT_STATE_SESSION_KEY, JSON.stringify(state));
    } catch {
      // ストレージ利用不可時は無視
    }
  }, [state]);

  const orderedMonths = useMemo(
    () => getOrderedMonths(Math.min(12, Math.max(1, Number(state.startMonth) || 1))),
    [state.startMonth]
  );

  const baselineScenario = useMemo(
    () =>
      calculateScenario(orderedMonths, state, {
        heatwave: false,
        coldWave: false,
        fuelPrice: false,
        geopolitical: false,
        outage: false,
      }),
    [orderedMonths, state]
  );

  const currentScenario = useMemo(
    () => calculateScenario(orderedMonths, state, state.stress),
    [orderedMonths, state]
  );

  const selectedFactors = useMemo(() => {
    const factors: string[] = [];
    if (state.stress.heatwave) factors.push("猛暑");
    if (state.stress.coldWave) factors.push("厳冬");
    if (state.stress.fuelPrice) factors.push("為替リスク（円安）");
    if (state.stress.geopolitical) factors.push("地政学リスク");
    if (state.stress.outage) factors.push("災害リスク");
    return factors;
  }, [state.stress]);

  const hasStressFactors = selectedFactors.length > 0;
  const allStressOn = Object.values(state.stress).every(Boolean);
  const anyStressOn = Object.values(state.stress).some(Boolean);

  const visibleTotalCards = useMemo(
    () =>
      [
        {
          key: "baselineFixed" as const,
          label: "固定プラン（当初想定）",
          total: baselineScenario.totalA,
          className:
            "rounded-xl border border-slate-200 bg-slate-50 p-4",
          textClassName: "text-slate-900",
          subTextClassName: "text-slate-500",
        },
        {
          key: "baselineMarket" as const,
          label: "市場連動プラン（当初想定）",
          total: baselineScenario.totalB,
          className:
            "rounded-xl border border-rose-200 bg-rose-50 p-4",
          textClassName: "text-rose-700",
          subTextClassName: "text-rose-500",
        },
        {
          key: "currentFixed" as const,
          label: "固定プラン（リスク要因反映後）",
          total: currentScenario.totalA,
          className:
            "rounded-xl border border-slate-300 bg-slate-100 p-4",
          textClassName: "text-slate-900",
          subTextClassName: "text-slate-600",
          requiresStress: true,
        },
        {
          key: "currentMarket" as const,
          label: "市場連動プラン（リスク要因反映後）",
          total: currentScenario.totalB,
          className:
            "rounded-xl border border-pink-200 bg-pink-50 p-4",
          textClassName: "text-pink-700",
          subTextClassName: "text-pink-500",
          requiresStress: true,
        },
      ].filter((card) => {
        if (!seriesVisibility[card.key]) return false;
        if (card.requiresStress && !hasStressFactors) return false;
        return true;
      }),
    [baselineScenario, currentScenario, hasStressFactors, seriesVisibility]
  );

  const toggleSeriesVisibility = (key: ChartSeriesKey) => {
    setSeriesVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    if (worstCaseRef.current) {
      worstCaseRef.current.indeterminate = anyStressOn && !allStressOn;
    }
  }, [anyStressOn, allStressOn]);

  const commentaryLines = useMemo(
    () => buildResultCommentary(currentScenario, baselineScenario, selectedFactors),
    [currentScenario, baselineScenario, selectedFactors]
  );
  const riskScoreResult = useMemo(
    () =>
      calculateRiskScore({
        contractType: state.contractType,
        region: state.region,
        springCost: Number(state.springCost) || 0,
        summerCost: Number(state.summerCost) || 0,
        autumnCost: Number(state.autumnCost) || 0,
        winterCost: Number(state.winterCost) || 0,
        buildingType: state.buildingType,
        usagePattern: state.usagePattern,
        floorArea: Number(state.floorArea) || 0,
      }),
    [state]
  );

  const lineData = useMemo<ChartData<"line">>(
    () => ({
      labels: orderedMonths.map((month) => monthNames[month - 1]),
      datasets: [
        {
          label: "固定プラン（当初想定）",
          data: baselineScenario.lineA,
          hidden: !seriesVisibility.baselineFixed,
          borderColor: "#9CA3AF",
          backgroundColor: "rgba(156, 163, 175, 0.12)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.25,
        },
        {
          label: "市場連動プラン（当初想定）",
          data: baselineScenario.lineB,
          hidden: !seriesVisibility.baselineMarket,
          borderColor: "#DC2626",
          backgroundColor: "rgba(220, 38, 38, 0.10)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.3,
        },
        {
          label: "固定プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.lineA : [],
          hidden: !seriesVisibility.currentFixed || !hasStressFactors,
          borderColor: "#475569",
          backgroundColor: "rgba(71, 85, 105, 0.08)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.25,
          borderDash: [6, 5],
        },
        {
          label: "市場連動プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.lineB : [],
          hidden: !seriesVisibility.currentMarket || !hasStressFactors,
          borderColor: "#BE123C",
          backgroundColor: "rgba(190, 24, 93, 0.08)",
          borderWidth: 3,
          pointRadius: 2,
          tension: 0.3,
          borderDash: [6, 5],
        },
      ],
    }),
    [orderedMonths, baselineScenario, currentScenario, hasStressFactors, seriesVisibility]
  );

  const lineOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      animation: {
        duration: 650,
        easing: "easeOutCubic",
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString(
                "ja-JP"
              )} 万円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "年間累積電気代（万円）" },
          grid: { color: "rgba(148, 163, 184, 0.2)" },
        },
        x: {
          grid: { display: false },
        },
      },
    }),
    []
  );

  const barData = useMemo<ChartData<"bar">>(
    () => ({
      labels: orderedMonths.map((month) => monthNames[month - 1]),
      datasets: [
        {
          label: "固定プラン（当初想定）",
          data: baselineScenario.monthlyAValues,
          hidden: !seriesVisibility.baselineFixed,
          backgroundColor: "rgba(148, 163, 184, 0.75)",
          borderColor: "#94A3B8",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "市場連動プラン（当初想定）",
          data: baselineScenario.monthlyBValues,
          hidden: !seriesVisibility.baselineMarket,
          backgroundColor: "rgba(244, 63, 94, 0.75)",
          borderColor: "#F43F5E",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "固定プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.monthlyAValues : [],
          hidden: !seriesVisibility.currentFixed || !hasStressFactors,
          backgroundColor: "rgba(71, 85, 105, 0.7)",
          borderColor: "#475569",
          borderWidth: 1,
          borderRadius: 6,
        },
        {
          label: "市場連動プラン（リスク要因反映後）",
          data: hasStressFactors ? currentScenario.monthlyBValues : [],
          hidden: !seriesVisibility.currentMarket || !hasStressFactors,
          backgroundColor: "rgba(190, 24, 93, 0.7)",
          borderColor: "#BE185D",
          borderWidth: 1,
          borderRadius: 6,
        },
      ],
    }),
    [orderedMonths, baselineScenario, currentScenario, hasStressFactors, seriesVisibility]
  );

  const barOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 650,
        easing: "easeOutCubic",
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${context.parsed.y.toLocaleString(
                "ja-JP"
              )} 万円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "月額電気代（万円）" },
          grid: { color: "rgba(148, 163, 184, 0.16)" },
        },
        x: {
          stacked: false,
          grid: { display: false },
        },
      },
    }),
    []
  );

  const setNumber =
    (key: "springCost" | "summerCost" | "autumnCost" | "winterCost" | "floorArea") =>
    (value: string) =>
      setState((prev) => ({ ...prev, [key]: value === "" ? "" : Number(value) || 0 }));

  const handleAnonymousShare = async () => {
    const hasSelectedStress = Object.values(state.stress).some(Boolean);
    if (!hasSelectedStress) {
      setSaveError("リスク要因を1つ以上チェックしてください。");
      return;
    }

    setIsSaving(true);
    setSaveError("");

    const diffRate =
      currentScenario.totalA > 0
        ? Number(
            (((currentScenario.totalB - currentScenario.totalA) / currentScenario.totalA) * 100).toFixed(
              2
            )
          )
        : 0;

    const payload = {
      contract_type: state.contractType,
      region: state.region,
      spring_cost: state.springCost,
      summer_cost: state.summerCost,
      autumn_cost: state.autumnCost,
      winter_cost: state.winterCost,
      start_month: state.startMonth,
      building_type: state.buildingType,
      usage_pattern: state.usagePattern,
      floor_area: state.floorArea,
      fixed_total: currentScenario.totalA,
      market_total: currentScenario.totalB,
      diff_rate: diffRate,
      risk_score: riskScoreResult.score,
      risk_label: riskScoreResult.label,
      seasonal_variation_score: riskScoreResult.breakdown.seasonalVariationScore,
      peak_score: riskScoreResult.breakdown.peakScore,
      usage_pattern_score: riskScoreResult.breakdown.usagePatternScore,
      unit_cost_score: riskScoreResult.breakdown.unitCostScore,
      contract_type_score: riskScoreResult.breakdown.contractTypeScore,
      region_score: riskScoreResult.breakdown.regionScore,
      building_type_score: riskScoreResult.breakdown.buildingTypeScore,
    };

    try {
      const response = await fetch("/api/simulation-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        id?: string;
        riskScore?: number;
        riskLabel?: string;
        error?: string;
      };

      if (!response.ok || !data.ok || !data.id) {
        throw new Error(data.error || "保存に失敗しました。");
      }
      const riskScore = data.riskScore ?? riskScoreResult.score;
      const riskLabel = data.riskLabel ?? riskScoreResult.label;
      const selectedStressKeys = Object.entries(state.stress)
        .filter(([, isSelected]) => isSelected)
        .map(([key]) => key)
        .join(",");
      router.push(
        `/compare?id=${data.id}&riskScore=${riskScore}&riskLabel=${encodeURIComponent(
          riskLabel
        )}&stress=${encodeURIComponent(selectedStressKeys)}`
      );
    } catch (error) {
      setSaveError(
        error instanceof Error
          ? error.message
          : "保存に失敗しました。時間をおいて再度お試しください。"
      );
      return;
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="mx-auto max-w-[1600px] bg-white px-4 py-5 text-slate-800 antialiased sm:px-6 lg:px-8">
      <header className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            法人向け 電気料金上昇リスク シナリオ分析
          </h1>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            企業向け・法人向けに、契約条件や価格上昇リスク要因をもとに開始月から12か月間の累計電気代と上昇リスクを比較・可視化できます。
          </p>
        </div>
        <Link
          href="/how-to"
          className="inline-flex items-center self-start rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          使い方
        </Link>
      </header>

      <section className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="mb-6 text-xl font-semibold text-slate-900">入力条件</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="contractType" className="mb-1.5 block text-base font-medium text-slate-700">
                1. 契約種別
              </label>
              <select
                id="contractType"
                value={state.contractType}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    contractType: e.target.value as ContractType,
                  }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">選択してください</option>
                <option value="low">低圧法人（小さめの店舗・事務所向け）</option>
                <option value="high">高圧（中規模ビル・工場向け）</option>
                <option value="special">特別高圧（大規模施設・大工場向け）</option>
              </select>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                迷った場合は、中規模施設の目安として `高圧`
                を選ぶと近い想定になります。
              </p>
            </div>

            <div>
              <label htmlFor="region" className="mb-1.5 block text-base font-medium text-slate-700">
                2. エリア
              </label>
              <select
                id="region"
                value={state.region}
                onChange={(e) =>
                  setState((prev) => ({ ...prev, region: e.target.value as Region }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">選択してください</option>
                <option value="hokkaido">北海道</option>
                <option value="tohoku">東北</option>
                <option value="kita-kanto">北関東</option>
                <option value="shutoken">首都圏</option>
                <option value="hokuriku">北陸</option>
                <option value="chubu">中部</option>
                <option value="kansai">関西</option>
                <option value="chugoku">中国</option>
                <option value="shikoku">四国</option>
                <option value="kyushu">九州</option>
                <option value="okinawa">沖縄</option>
              </select>
            </div>

            <div>
              <label htmlFor="springCost" className="mb-1.5 block text-base font-medium text-slate-700">
                3. 春の月間電気代（万円）
              </label>
              <input
                id="springCost"
                type="number"
                min={0}
                value={state.springCost}
                onChange={(e) => setNumber("springCost")(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>

            <div>
              <label htmlFor="summerCost" className="mb-1.5 block text-base font-medium text-slate-700">
                4. 夏の月間電気代（万円）
              </label>
              <input
                id="summerCost"
                type="number"
                min={0}
                value={state.summerCost}
                onChange={(e) => setNumber("summerCost")(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>

            <div>
              <label htmlFor="autumnCost" className="mb-1.5 block text-base font-medium text-slate-700">
                5. 秋の月間電気代（万円）
              </label>
              <input
                id="autumnCost"
                type="number"
                min={0}
                value={state.autumnCost}
                onChange={(e) => setNumber("autumnCost")(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>

            <div>
              <label htmlFor="winterCost" className="mb-1.5 block text-base font-medium text-slate-700">
                6. 冬の月間電気代（万円）
              </label>
              <input
                id="winterCost"
                type="number"
                min={0}
                value={state.winterCost}
                onChange={(e) => setNumber("winterCost")(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>

            <div>
              <label htmlFor="buildingType" className="mb-1.5 block text-base font-medium text-slate-700">
                7. 建物用途
              </label>
              <select
                id="buildingType"
                value={state.buildingType}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    buildingType: e.target.value as BuildingType,
                  }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">選択してください</option>
                <option value="office">オフィス</option>
                <option value="retail">商業店舗</option>
                <option value="restaurant">飲食店・外食</option>
                <option value="factory">工場</option>
                <option value="welfare">病院・福祉施設</option>
                <option value="hotel">ホテル・宿泊施設</option>
                <option value="warehouse">物流倉庫</option>
                <option value="school">学校・教育施設</option>
                <option value="datacenter">データセンター</option>
                <option value="public">公共施設</option>
              </select>
            </div>

            <div>
              <label htmlFor="usagePattern" className="mb-1.5 block text-base font-medium text-slate-700">
                8. 電力使用パターン
              </label>
              <select
                id="usagePattern"
                value={state.usagePattern}
                onChange={(e) =>
                  setState((prev) => ({
                    ...prev,
                    usagePattern: e.target.value as UsagePattern,
                  }))
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">選択してください</option>
                <option value="balanced">終日バランス型（時間帯の偏りが小さい）</option>
                <option value="daytime">平日日中メイン（平日昼に集中）</option>
                <option value="night">夜間・夕方メイン（夕方以降に需要増）</option>
                <option value="24h">24時間稼働（工場・データセンター型）</option>
                <option value="weekend-busy">土日稼働型（週末の負荷が高い）</option>
                <option value="seasonal-heavy">季節変動大（冷暖房影響が大きい）</option>
              </select>
            </div>

            <div>
              <label htmlFor="floorArea" className="mb-1.5 block text-base font-medium text-slate-700">
                9. 延床面積（㎡）
              </label>
              <input
                id="floorArea"
                type="number"
                min={1}
                value={state.floorArea}
                onChange={(e) => setNumber("floorArea")(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
              />
            </div>
          </div>
        </aside>

        <div className="flex flex-col gap-6">
          <section className="order-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              年間シミュレーション
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-slate-600 sm:text-base">
              開始月に応じて月ラベルと季節判定が切り替わり、2つのプランの推移を即時に再計算・再描画します。実線は当初想定、点線はリスク要因を反映したシナリオです。下のプルダウンとチェック項目で、グラフの開始月と表示するプランを変更できます。
            </p>
            <div className="mt-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2.5">
              <div className="flex items-center gap-2">
                <label htmlFor="startMonth" className="text-sm font-medium text-slate-700 sm:text-base">
                  グラフ開始月
                </label>
                <select
                  id="startMonth"
                  value={state.startMonth}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      startMonth:
                        e.target.value === ""
                          ? ""
                          : Math.min(12, Math.max(1, Number(e.target.value) || 1)),
                    }))
                  }
                  className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:w-36 sm:text-base"
                >
                  {monthNames.map((label, idx) => (
                    <option key={label} value={idx + 1}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
              <label className="inline-flex items-center gap-1.5 leading-tight">
                <input
                  type="checkbox"
                  checked={seriesVisibility.baselineFixed}
                  onChange={() => toggleSeriesVisibility("baselineFixed")}
                  className="h-5 w-5 rounded border-slate-300 text-slate-600 focus:ring-slate-400"
                />
                固定プラン（当初想定）
              </label>
              <label className="inline-flex items-center gap-1.5 leading-tight">
                <input
                  type="checkbox"
                  checked={seriesVisibility.baselineMarket}
                  onChange={() => toggleSeriesVisibility("baselineMarket")}
                  className="h-5 w-5 rounded border-slate-300 text-rose-600 focus:ring-rose-400"
                />
                市場連動プラン（当初想定）
              </label>
              <label className="inline-flex items-center gap-1.5 leading-tight">
                <input
                  type="checkbox"
                  checked={seriesVisibility.currentFixed && hasStressFactors}
                  onChange={() => toggleSeriesVisibility("currentFixed")}
                  disabled={!hasStressFactors}
                  className="h-5 w-5 rounded border-slate-300 text-slate-700 focus:ring-slate-400 disabled:cursor-not-allowed"
                />
                固定プラン（リスク要因反映後）
              </label>
              <label className="inline-flex items-center gap-1.5 leading-tight">
                <input
                  type="checkbox"
                  checked={seriesVisibility.currentMarket && hasStressFactors}
                  onChange={() => toggleSeriesVisibility("currentMarket")}
                  disabled={!hasStressFactors}
                  className="h-5 w-5 rounded border-slate-300 text-pink-700 focus:ring-pink-400 disabled:cursor-not-allowed"
                />
                市場連動プラン（リスク要因反映後）
              </label>
            </div>
            <div className="mt-3 h-[160px] w-full sm:h-[200px] lg:h-[220px] xl:h-[260px]">
              <Line data={lineData} options={lineOptions} />
            </div>
            <div className="mt-4">
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">毎月の電気代比較</h3>
              <p className="mt-1 text-sm text-slate-500 sm:text-base">
                同じ条件で見た、各月の固定プランと市場連動プランの月額比較です。
              </p>
              <div className="mt-2 h-[110px] w-full sm:h-[130px]">
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {visibleTotalCards.length > 0 ? (
                visibleTotalCards.map((card) => (
                  <div key={card.key} className={card.className}>
                    <p className={`text-sm font-semibold ${card.subTextClassName}`}>{card.label}</p>
                    <p className={`mt-2 text-3xl font-bold ${card.textClassName}`}>
                      {card.total.toLocaleString("ja-JP")} 万円
                    </p>
                  </div>
                ))
              ) : (
                <p className="rounded-xl border border-slate-200 bg-white p-4 text-base text-slate-600">
                  表示するプランを選択してください。
                </p>
              )}
            </div>
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                結果解説
              </p>
              <div className="mt-2 space-y-1 text-base leading-7 text-slate-700">
                {commentaryLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <button
                type="button"
                onClick={handleAnonymousShare}
                disabled={isSaving}
                className="inline-flex items-center justify-center rounded-lg border border-rose-700 bg-rose-700 px-5 py-3 text-base font-bold text-white shadow-sm transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-rose-300 sm:text-lg"
              >
                {isSaving
                  ? "移動中"
                  : "この入力内容で電力料金上昇リスクスコア（点数）を確認する"}
              </button>
              {saveError && (
                <p className="mt-2 text-base text-rose-700">{saveError}</p>
              )}
            </div>
          </section>

          <section className="order-1 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">電気料金が上がるリスク要因</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
              チェックしたリスク要因が累積で反映され、料金が上振れするシナリオとしてグラフに反映されます。
            </p>
            <div className="mt-3 grid gap-2">
              <label className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
                <input
                  ref={worstCaseRef}
                  id="stressWorstCase"
                  type="checkbox"
                  checked={allStressOn}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setState((prev) => ({
                      ...prev,
                      stress: {
                        heatwave: checked,
                        coldWave: checked,
                        fuelPrice: checked,
                        geopolitical: checked,
                        outage: checked,
                      },
                    }));
                  }}
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="font-semibold">☑ ワーストシナリオ </span>
                  <span className="text-slate-500">
                    主要な上振れリスク要因をすべて一括で反映します。最も厳しいケースをまとめて確認したいときに使います。
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
                <input
                  id="stressHeatwave"
                  type="checkbox"
                  checked={state.stress.heatwave}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      stress: { ...prev.stress, heatwave: e.target.checked },
                    }))
                  }
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="font-semibold">☑ リスク要因1：猛暑 </span>
                  <span className="text-slate-500">
                    影響月: 7月〜9月。夏場の需給逼迫を想定し、固定プランは緩やかに上昇し、市場連動プランは大きく上振れしやすくなります。
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
                <input
                  id="stressColdWave"
                  type="checkbox"
                  checked={state.stress.coldWave}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      stress: { ...prev.stress, coldWave: e.target.checked },
                    }))
                  }
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="font-semibold">☑ リスク要因2：厳冬 </span>
                  <span className="text-slate-500">
                    影響月: 12月〜2月。冬場の暖房需要増を想定し、特に市場連動プランは冬季コストが上振れしやすくなります。
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
                <input
                  id="stressFuelPrice"
                  type="checkbox"
                  checked={state.stress.fuelPrice}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      stress: { ...prev.stress, fuelPrice: e.target.checked },
                    }))
                  }
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="font-semibold">☑ リスク要因3：為替リスク（円安） </span>
                  <span className="text-slate-500">
                    影響月: 通年。円安が進む局面を想定。輸入燃料コストが上がり、固定プラン・市場連動プランともに料金が上振れしやすくなります。
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
                <input
                  id="stressGeopolitical"
                  type="checkbox"
                  checked={state.stress.geopolitical}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      stress: { ...prev.stress, geopolitical: e.target.checked },
                    }))
                  }
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="font-semibold">☑ リスク要因4：地政学リスク </span>
                  <span className="text-slate-500">
                    影響月: 通年。中東情勢の悪化や国際紛争などで、燃料の調達不安が強まる場面を想定。特に市場連動プランは影響を受けやすくなります。
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
                <input
                  id="stressOutage"
                  type="checkbox"
                  checked={state.stress.outage}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      stress: { ...prev.stress, outage: e.target.checked },
                    }))
                  }
                  className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-sm leading-6 text-slate-700 sm:text-base">
                  <span className="font-semibold">☑ リスク要因5：災害リスク </span>
                  <span className="text-slate-500">
                    影響月: 発生月と翌月。災害により発電所の稼働が停止・低下する場面を想定。供給が減るため、発生月は特に大きく、翌月も余波で市場価格が上振れしやすくなります。
                  </span>
                </span>
              </label>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
