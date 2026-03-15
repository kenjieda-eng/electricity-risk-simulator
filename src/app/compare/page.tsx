"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
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
import { getRiskLabel } from "../../lib/riskScore";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

type CompareApiData = {
  id: string;
  input: {
    contract_type: string;
    region: string;
    spring_cost: number;
    summer_cost: number;
    autumn_cost: number;
    winter_cost: number;
    start_month: number;
    building_type: string;
    usage_pattern: string;
    floor_area: number;
  };
  output: {
    fixed_total: number;
    market_total: number;
    diff_rate: number;
    risk_score: number | null;
    risk_label: string | null;
    seasonal_variation_score: number | null;
    peak_score: number | null;
    usage_pattern_score: number | null;
    unit_cost_score: number | null;
    contract_type_score: number | null;
    region_score: number | null;
    building_type_score: number | null;
  };
};

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

const formatNumber = (value: number) => value.toLocaleString("ja-JP");
const formatSignedNumber = (value: number) =>
  `${value >= 0 ? "+" : "-"}${Math.abs(value).toLocaleString("ja-JP")}`;
const getCheaperPlanText = (fixedTotal: number, marketTotal: number) => {
  if (fixedTotal < marketTotal) return "固定プランのほうが得です";
  if (marketTotal < fixedTotal) return "市場連動プランのほうが得です";
  return "両プランは同水準です";
};
const getCheaperPlanDetailText = (fixedTotal: number, marketTotal: number) => {
  const gap = Math.abs(fixedTotal - marketTotal);
  if (fixedTotal < marketTotal) {
    return `固定プランのほうが ${formatNumber(gap)} 万円得です`;
  }
  if (marketTotal < fixedTotal) {
    return `市場連動プランのほうが ${formatNumber(gap)} 万円得です`;
  }
  return "両プランは同水準です";
};

type SeasonType = "spring" | "summer" | "autumn" | "winter";
type StressFlags = {
  heatwave: boolean;
  coldWave: boolean;
  fuelPrice: boolean;
  geopolitical: boolean;
  outage: boolean;
};
type ScenarioResult = {
  lineA: number[];
  lineB: number[];
  monthlyAValues: number[];
  monthlyBValues: number[];
  totalA: number;
  totalB: number;
};
type ChartSeriesKey = "baselineFixed" | "baselineMarket" | "currentFixed" | "currentMarket";

const contractFactorMap: Record<string, number> = {
  low: 1.03,
  high: 1.0,
  special: 0.96,
};

const regionFactorMap: Record<string, number> = {
  hokkaido: 1.04,
  tohoku: 1.02,
  "kita-kanto": 1.01,
  shutoken: 1.0,
  tokyo: 1.0,
  hokuriku: 1.01,
  chubu: 1.0,
  kansai: 0.99,
  chugoku: 0.99,
  shikoku: 0.98,
  kyushu: 0.98,
  okinawa: 1.03,
};

const regionSeasonMap: Record<string, Record<SeasonType, number>> = {
  hokkaido: { spring: 1.0, summer: 0.96, autumn: 1.0, winter: 1.18 },
  tohoku: { spring: 1.0, summer: 0.98, autumn: 1.0, winter: 1.12 },
  "kita-kanto": { spring: 1.0, summer: 1.03, autumn: 1.0, winter: 1.04 },
  shutoken: { spring: 1.0, summer: 1.06, autumn: 1.0, winter: 1.02 },
  tokyo: { spring: 1.0, summer: 1.06, autumn: 1.0, winter: 1.02 },
  hokuriku: { spring: 1.0, summer: 0.99, autumn: 1.0, winter: 1.08 },
  chubu: { spring: 1.0, summer: 1.02, autumn: 1.0, winter: 1.03 },
  kansai: { spring: 1.0, summer: 1.04, autumn: 1.0, winter: 0.99 },
  chugoku: { spring: 1.0, summer: 1.02, autumn: 1.0, winter: 0.99 },
  shikoku: { spring: 1.0, summer: 1.04, autumn: 1.0, winter: 0.97 },
  kyushu: { spring: 1.0, summer: 1.05, autumn: 1.0, winter: 0.97 },
  okinawa: { spring: 1.03, summer: 1.14, autumn: 1.03, winter: 0.9 },
};

const buildingFactorMap: Record<string, number> = {
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
  // 既存データ互換
  store: 1.07,
  hospital: 1.09,
};

const usageFactorMap: Record<string, number> = {
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

const calculateScenario = (
  input: CompareApiData["input"],
  stressFlags: StressFlags
): ScenarioResult => {
  const safeSpring = Math.max(0, Number(input.spring_cost) || 0);
  const safeSummer = Math.max(0, Number(input.summer_cost) || 0);
  const safeAutumn = Math.max(0, Number(input.autumn_cost) || 0);
  const safeWinter = Math.max(0, Number(input.winter_cost) || 0);
  const floorArea = Math.max(1, Number(input.floor_area) || 1);
  const startMonth = Math.min(12, Math.max(1, Number(input.start_month) || 1));
  const orderedMonths = getOrderedMonths(startMonth);
  const contractType = input.contract_type || "high";
  const region = input.region || "shutoken";
  const buildingType = input.building_type || "office";
  const usagePattern = input.usage_pattern || "balanced";

  const contractFactor = contractFactorMap[contractType] ?? 1;
  const regionFactor = regionFactorMap[region] ?? 1;
  const buildingFactor = buildingFactorMap[buildingType] ?? 1;
  const usageFactor = usageFactorMap[usagePattern] ?? 1;
  const seasonalFactors = regionSeasonMap[region] ?? regionSeasonMap.shutoken;
  const areaFactor = Math.max(0.85, Math.min(1.25, 1 + ((floorArea - 5000) / 5000) * 0.08));

  const lineA: number[] = [];
  const lineB: number[] = [];
  const monthlyAValues: number[] = [];
  const monthlyBValues: number[] = [];
  let cumulativeA = 0;
  let cumulativeB = 0;
  for (const [monthIndex, monthNumber] of orderedMonths.entries()) {
    const seasonType = getSeasonType(monthNumber);
    const baseMonthly =
      calcMonthlyBase(monthNumber, safeSpring, safeSummer, safeAutumn, safeWinter) *
      contractFactor *
      regionFactor *
      seasonalFactors[seasonType] *
      buildingFactor *
      usageFactor *
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

const buildResultCommentary = (
  currentFixedTotal: number,
  currentMarketTotal: number,
  baselineFixedTotal: number,
  baselineMarketTotal: number,
  selectedFactors: string[]
): string[] => {
  const marketGap = currentMarketTotal - currentFixedTotal;
  const fixedDiff = currentFixedTotal - baselineFixedTotal;
  const marketDiff = currentMarketTotal - baselineMarketTotal;
  const commentary: string[] = [];

  if (selectedFactors.length === 0) {
    commentary.push("リスク要因が未選択のため、平時を前提にした比較結果です。");
    commentary.push("現在の条件では、市場連動プランは固定プランより低い累計で推移しています。");
    commentary.push("リスク要因を追加すると、市場連動プランの上振れ幅が大きくなりやすくなります。");
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

  commentary.push("地政学リスクや発電所停止を重ねると、市場連動プランの上振れが目立ちやすくなります。");
  return commentary;
};

const contractTypeLabels: Record<string, string> = {
  low: "低圧",
  high: "高圧",
  special: "特別高圧",
};

const regionLabels: Record<string, string> = {
  hokkaido: "北海道",
  tohoku: "東北",
  "kita-kanto": "北関東",
  shutoken: "首都圏",
  tokyo: "東京",
  chubu: "中部",
  hokuriku: "北陸",
  kansai: "関西",
  chugoku: "中国",
  shikoku: "四国",
  kyushu: "九州",
  okinawa: "沖縄",
};

const buildingTypeLabels: Record<string, string> = {
  office: "オフィス",
  retail: "商業店舗",
  restaurant: "飲食店・外食",
  factory: "工場",
  welfare: "病院・福祉施設",
  hotel: "ホテル・宿泊施設",
  store: "店舗",
  warehouse: "倉庫",
  datacenter: "データセンター",
  public: "公共施設",
  hospital: "病院",
  school: "学校",
};

const usagePatternLabels: Record<string, string> = {
  balanced: "終日バランス型",
  daytime: "平日日中メイン",
  "24h": "24時間稼働",
  night: "夜間中心",
  "weekend-busy": "土日稼働型",
  "seasonal-heavy": "季節偏重",
};

const stressFactorLabels: Record<string, string> = {
  heatwave: "猛暑",
  coldWave: "厳冬",
  fuelPrice: "為替リスク（円安）",
  geopolitical: "地政学リスク",
  outage: "災害リスク",
};

const riskFactorReasonMap: Record<string, string> = {
  seasonal_variation_score: "季節ごとの電気料金差が大きい",
  peak_score: "特定月の電気料金が突出しやすい",
  usage_pattern_score: "使用パターンが価格変動の影響を受けやすい",
  unit_cost_score: "面積あたりの電気料金水準が高め",
  contract_type_score: "契約種別の特性上、価格変動の影響を受けやすい",
  region_score: "エリア特性として価格変動リスクが出やすい",
  building_type_score: "建物用途として電力需要が高くなりやすい",
};

const toJapaneseLabel = (value: string, labels: Record<string, string>) => labels[value] ?? value;

function ComparePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const savedResultId = searchParams.get("id");
  const fallbackRiskScoreParam = searchParams.get("riskScore");
  const fallbackRiskLabelParam = searchParams.get("riskLabel");
  const selectedStressParam = searchParams.get("stress");
  const [compareData, setCompareData] = useState<CompareApiData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [averageRiskScore, setAverageRiskScore] = useState<number | null>(null);
  const [seriesVisibility, setSeriesVisibility] = useState<Record<ChartSeriesKey, boolean>>({
    baselineFixed: true,
    baselineMarket: true,
    currentFixed: true,
    currentMarket: true,
  });

  useEffect(() => {
    if (!savedResultId) return;

    const controller = new AbortController();
    const load = async () => {
      setIsLoading(true);
      setFetchError("");
      try {
        const response = await fetch(
          `/api/simulation-results/${encodeURIComponent(savedResultId)}`,
          {
            method: "GET",
            cache: "no-store",
            signal: controller.signal,
          }
        );
        const json = (await response.json()) as {
          ok?: boolean;
          data?: CompareApiData;
          error?: string;
        };
        if (!response.ok || !json.ok || !json.data) {
          throw new Error(json.error || "対象データの取得に失敗しました。");
        }
        setCompareData(json.data);
      } catch (error) {
        if (controller.signal.aborted) return;
        setCompareData(null);
        setFetchError(error instanceof Error ? error.message : "対象データの取得に失敗しました。");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void load();
    return () => controller.abort();
  }, [savedResultId]);

  useEffect(() => {
    const controller = new AbortController();

    const loadAverageRisk = async () => {
      try {
        const response = await fetch("/api/simulation-results/average", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        const json = (await response.json()) as {
          ok?: boolean;
          averageRiskScore?: number | null;
        };
        if (!response.ok || !json.ok) return;
        setAverageRiskScore(
          typeof json.averageRiskScore === "number" && Number.isFinite(json.averageRiskScore)
            ? json.averageRiskScore
            : null
        );
      } catch {
        if (controller.signal.aborted) return;
      }
    };

    void loadAverageRisk();
    return () => controller.abort();
  }, []);

  const displayedRiskScore = useMemo(() => {
    if (compareData?.output.risk_score !== null && compareData?.output.risk_score !== undefined) {
      return compareData.output.risk_score;
    }
    if (fallbackRiskScoreParam) {
      const parsed = Number(fallbackRiskScoreParam);
      if (Number.isFinite(parsed)) return Math.round(parsed);
    }
    return null;
  }, [compareData, fallbackRiskScoreParam]);

  const displayedRiskLabel = useMemo(() => {
    if (compareData?.output.risk_label) return compareData.output.risk_label;
    if (fallbackRiskLabelParam) return fallbackRiskLabelParam;
    if (displayedRiskScore !== null) return getRiskLabel(displayedRiskScore);
    return null;
  }, [compareData, fallbackRiskLabelParam, displayedRiskScore]);

  const hasRisk = useMemo(
    () => displayedRiskScore !== null && displayedRiskLabel !== null,
    [displayedRiskScore, displayedRiskLabel]
  );
  const riskComparison = useMemo(() => {
    if (displayedRiskScore === null || averageRiskScore === null) return null;
    const diff = Number((displayedRiskScore - averageRiskScore).toFixed(1));
    if (Math.abs(diff) < 0.1) {
      return {
        trend: "same" as const,
        diffText: "平均とほぼ同じ",
        supportText: "平均水準のため、継続的なモニタリングをおすすめします。",
      };
    }
    if (diff > 0) {
      return {
        trend: "higher" as const,
        diffText: `平均より ${diff.toFixed(1)} ポイント高い`,
        supportText: "平均より高いため、注意が必要です。",
      };
    }
    return {
      trend: "lower" as const,
      diffText: `平均より ${Math.abs(diff).toFixed(1)} ポイント低い`,
      supportText: "平均より低めですが、急な相場変動には引き続き注意してください。",
    };
  }, [displayedRiskScore, averageRiskScore]);
  const riskScoreReasonText = useMemo(() => {
    if (displayedRiskScore === null) return "このスコアは、入力した電気料金や利用条件の組み合わせから算出しています。";
    const output = compareData?.output;
    if (!output) {
      return "このスコアは、入力した電気料金や利用条件の組み合わせから算出しています。";
    }

    const factorEntries = Object.entries(riskFactorReasonMap)
      .map(([key, label]) => {
        const rawValue = output[key as keyof CompareApiData["output"]];
        return { label, score: typeof rawValue === "number" ? rawValue : null };
      })
      .filter((item): item is { label: string; score: number } => item.score !== null)
      .sort((a, b) => b.score - a.score);

    const topFactors = factorEntries.slice(0, 2);
    if (topFactors.length === 0) {
      return "このスコアは、入力した電気料金や利用条件の組み合わせから算出しています。";
    }

    const detailText = topFactors.map((factor) => factor.label).join("、");
    return `今回の点数は、${detailText} 傾向が重なって算出されています。`;
  }, [compareData, displayedRiskScore]);
  const selectedStressFactors = useMemo(() => {
    if (!selectedStressParam) return [];
    return selectedStressParam
      .split(",")
      .map((key) => key.trim())
      .filter(Boolean)
      .map((key) => stressFactorLabels[key] ?? key);
  }, [selectedStressParam]);
  const selectedStressKeys = useMemo(() => {
    if (!selectedStressParam) return [];
    return selectedStressParam
      .split(",")
      .map((key) => key.trim())
      .filter((key) => key in stressFactorLabels);
  }, [selectedStressParam]);
  const stressFlags = useMemo<StressFlags>(
    () => ({
      heatwave: selectedStressKeys.includes("heatwave"),
      coldWave: selectedStressKeys.includes("coldWave"),
      fuelPrice: selectedStressKeys.includes("fuelPrice"),
      geopolitical: selectedStressKeys.includes("geopolitical"),
      outage: selectedStressKeys.includes("outage"),
    }),
    [selectedStressKeys]
  );
  const orderedMonths = useMemo(() => {
    if (!compareData) return [];
    const startMonth = Math.min(12, Math.max(1, Number(compareData.input.start_month) || 1));
    return getOrderedMonths(startMonth);
  }, [compareData]);
  const baselineScenario = useMemo(
    () =>
      compareData
        ? calculateScenario(compareData.input, {
            heatwave: false,
            coldWave: false,
            fuelPrice: false,
            geopolitical: false,
            outage: false,
          })
        : null,
    [compareData]
  );
  const currentScenario = useMemo(
    () => (compareData ? calculateScenario(compareData.input, stressFlags) : null),
    [compareData, stressFlags]
  );
  const commentaryLines = useMemo(() => {
    if (!compareData || !baselineScenario || !currentScenario) return [];
    return buildResultCommentary(
      currentScenario.totalA,
      currentScenario.totalB,
      baselineScenario.totalA,
      baselineScenario.totalB,
      selectedStressFactors
    );
  }, [compareData, baselineScenario, currentScenario, selectedStressFactors]);
  const lineData = useMemo<ChartData<"line">>(
    () => {
      const datasets: NonNullable<ChartData<"line">["datasets"]> = [];
      if (seriesVisibility.baselineFixed) {
        datasets.push({
          label: "固定プラン（反映前）",
          data: baselineScenario?.lineA ?? [],
          borderColor: "#0f172a",
          backgroundColor: "rgba(15, 23, 42, 0.15)",
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.25,
        });
      }
      if (seriesVisibility.baselineMarket) {
        datasets.push({
          label: "市場連動プラン（反映前）",
          data: baselineScenario?.lineB ?? [],
          borderColor: "#dc2626",
          backgroundColor: "rgba(220, 38, 38, 0.15)",
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.25,
        });
      }
      if (seriesVisibility.currentFixed) {
        datasets.push({
          label: "固定プラン（反映後）",
          data: currentScenario?.lineA ?? [],
          borderColor: "#334155",
          borderDash: [6, 4],
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.25,
        });
      }
      if (seriesVisibility.currentMarket) {
        datasets.push({
          label: "市場連動プラン（反映後）",
          data: currentScenario?.lineB ?? [],
          borderColor: "#be123c",
          borderDash: [6, 4],
          pointRadius: 0,
          borderWidth: 2,
          tension: 0.25,
        });
      }
      return {
        labels: orderedMonths.map((month) => monthNames[month - 1]),
        datasets,
      };
    },
    [orderedMonths, baselineScenario, currentScenario, seriesVisibility]
  );
  const lineOptions = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toLocaleString("ja-JP")} 万円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "累計電気代（万円）" },
        },
      },
    }),
    []
  );
  const barData = useMemo<ChartData<"bar">>(
    () => {
      const datasets: NonNullable<ChartData<"bar">["datasets"]> = [];
      if (seriesVisibility.baselineFixed) {
        datasets.push({
          label: "固定プラン（反映前）",
          data: baselineScenario?.monthlyAValues ?? [],
          backgroundColor: "rgba(15, 23, 42, 0.45)",
        });
      }
      if (seriesVisibility.baselineMarket) {
        datasets.push({
          label: "市場連動プラン（反映前）",
          data: baselineScenario?.monthlyBValues ?? [],
          backgroundColor: "rgba(220, 38, 38, 0.45)",
        });
      }
      if (seriesVisibility.currentFixed) {
        datasets.push({
          label: "固定プラン（反映後）",
          data: currentScenario?.monthlyAValues ?? [],
          backgroundColor: "rgba(15, 23, 42, 0.82)",
        });
      }
      if (seriesVisibility.currentMarket) {
        datasets.push({
          label: "市場連動プラン（反映後）",
          data: currentScenario?.monthlyBValues ?? [],
          backgroundColor: "rgba(220, 38, 38, 0.78)",
        });
      }
      return {
        labels: orderedMonths.map((month) => monthNames[month - 1]),
        datasets,
      };
    },
    [orderedMonths, baselineScenario, currentScenario, seriesVisibility]
  );
  const barOptions = useMemo<ChartOptions<"bar">>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label(context) {
              return `${context.dataset.label}: ${Number(context.parsed.y).toLocaleString("ja-JP")} 万円`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "月額電気代（万円）" },
        },
      },
    }),
    []
  );
  const fixedPlanIncrease = useMemo(() => {
    if (!currentScenario || !baselineScenario) return null;
    return currentScenario.totalA - baselineScenario.totalA;
  }, [currentScenario, baselineScenario]);
  const marketPlanIncrease = useMemo(() => {
    if (!currentScenario || !baselineScenario) return null;
    return currentScenario.totalB - baselineScenario.totalB;
  }, [currentScenario, baselineScenario]);
  const planAdvantageWithoutRisk = useMemo(() => {
    if (!baselineScenario) return null;
    return getCheaperPlanDetailText(baselineScenario.totalA, baselineScenario.totalB);
  }, [baselineScenario]);
  const planAdvantageWithRisk = useMemo(() => {
    if (!currentScenario) return null;
    return getCheaperPlanDetailText(currentScenario.totalA, currentScenario.totalB);
  }, [currentScenario]);
  const toggleSeriesVisibility = (key: ChartSeriesKey) =>
    setSeriesVisibility((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <main className="mx-auto min-h-screen max-w-[1600px] bg-slate-50 px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          電気料金上昇リスクスコア／平均スコアとの比較
        </h1>
        <button
          type="button"
          onClick={() => window.print()}
          className="print:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        >
          印刷
        </button>
      </header>

      <section className="grid grid-cols-1 gap-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h2 className="text-lg font-bold tracking-[0.05em] text-amber-700 sm:text-xl">
              リスクスコア
            </h2>
            <p className="text-sm text-amber-800 sm:text-base">
              電気料金の上振れリスクを 0〜100 点で示した指標です。点数が低いほど上振れリスクが低く、料金が安定している状態を示します。
            </p>
          </div>
          {hasRisk ? (
            <>
              <p className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1 text-amber-900">
                <span className="text-3xl font-extrabold leading-none text-rose-700 sm:text-4xl">
                  {displayedRiskScore}
                  <span className="ml-2 text-3xl font-extrabold leading-none text-rose-700 sm:text-4xl">
                    / 100
                  </span>
                </span>
                <span className="text-3xl font-extrabold leading-none text-rose-700 sm:text-4xl">
                  判定: {displayedRiskLabel}
                </span>
                <span className="ml-6 sm:ml-8 text-3xl font-extrabold leading-none text-amber-800 sm:text-4xl">
                  平均:{" "}
                  {averageRiskScore !== null ? `${averageRiskScore.toFixed(1)} / 100` : "-"}
                </span>
                {riskComparison ? (
                  <span className="text-3xl font-extrabold leading-none text-amber-900 sm:text-4xl">
                    {riskComparison.diffText}
                  </span>
                ) : null}
              </p>
              <p className="mt-2 text-sm leading-6 text-amber-900 sm:text-base">
                {`${riskComparison ? `${riskComparison.supportText} ` : ""}${riskScoreReasonText}`}
              </p>
            </>
          ) : (
            <>
              <p className="mt-3 text-lg text-amber-900 sm:text-xl">リスクスコア情報がまだありません。</p>
              <p className="mt-2 text-lg font-semibold text-amber-800 sm:text-xl">
                平均: {averageRiskScore !== null ? `${averageRiskScore.toFixed(1)} / 100` : "-"}
              </p>
            </>
          )}
        </div>
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-slate-500">
            今回の入力データ
          </h2>
          {compareData ? (
            <>
              <dl className="mt-3 space-y-2 text-base text-slate-700">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>契約種別</dt>
                  <dd className="font-medium text-slate-900">
                    {toJapaneseLabel(compareData.input.contract_type, contractTypeLabels)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>エリア</dt>
                  <dd className="font-medium text-slate-900">
                    {toJapaneseLabel(compareData.input.region, regionLabels)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>春の月間電気代（万円）</dt>
                  <dd className="font-medium text-slate-900">
                    {`${formatNumber(compareData.input.spring_cost)} 万円`}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>夏の月間電気代（万円）</dt>
                  <dd className="font-medium text-slate-900">
                    {`${formatNumber(compareData.input.summer_cost)} 万円`}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>秋の月間電気代（万円）</dt>
                  <dd className="font-medium text-slate-900">
                    {`${formatNumber(compareData.input.autumn_cost)} 万円`}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>冬の月間電気代（万円）</dt>
                  <dd className="font-medium text-slate-900">
                    {`${formatNumber(compareData.input.winter_cost)} 万円`}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>グラフ開始月</dt>
                  <dd className="font-medium text-slate-900">{`${compareData.input.start_month} 月`}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>建物用途</dt>
                  <dd className="font-medium text-slate-900">
                    {toJapaneseLabel(compareData.input.building_type, buildingTypeLabels)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>使用パターン</dt>
                  <dd className="font-medium text-slate-900">
                    {toJapaneseLabel(compareData.input.usage_pattern, usagePatternLabels)}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>延床面積（㎡）</dt>
                  <dd className="font-medium text-slate-900">
                    {`${formatNumber(compareData.input.floor_area)} ㎡`}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                <p className="text-sm font-semibold text-slate-500">前ページで選択したリスク要因</p>
                <p className="mt-1 text-base text-slate-700">
                  {selectedStressFactors.length > 0 ? selectedStressFactors.join("、") : "未選択"}
                </p>
              </div>
            </>
          ) : (
            <p className="mt-3 text-base text-slate-600">
              {isLoading
                ? "対象データを読み込み中です..."
                : fetchError || "対象データが見つかりません。"}
            </p>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-slate-500">
            今回のアウトプットデータ
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            入力条件に対するリスク要因反映前・反映後の累計金額です。
          </p>
          {compareData ? (
            <>
              <dl className="mt-3 space-y-2 text-base text-slate-700">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>固定プラン累計（リスク要因反映前・万円）</dt>
                  <dd className="font-medium text-slate-900">
                    {baselineScenario ? `${formatNumber(baselineScenario.totalA)} 万円` : "-"}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>市場連動累計（リスク要因反映前・万円）</dt>
                  <dd className="font-semibold text-rose-700">
                    {baselineScenario ? `${formatNumber(baselineScenario.totalB)} 万円` : "-"}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-2">
                  <dt>固定プラン累計（リスク要因反映後・万円）</dt>
                  <dd className="font-medium text-slate-900">
                    {`${formatNumber(compareData.output.fixed_total)} 万円`}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt>市場連動累計（リスク要因反映後・万円）</dt>
                  <dd className="font-semibold text-rose-700">
                    {`${formatNumber(compareData.output.market_total)} 万円`}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-sm font-semibold text-slate-600">
                  リスク要因による増加額（リスク要因反映後 - リスク要因反映前）
                </p>
                <div className="mt-2 space-y-1 text-base text-slate-800">
                  <p>
                    固定プラン:{" "}
                    <span className="font-semibold">
                      {fixedPlanIncrease !== null ? `${formatSignedNumber(fixedPlanIncrease)} 万円` : "-"}
                    </span>
                  </p>
                  <p>
                    市場連動プラン:{" "}
                    <span className="font-semibold">
                      {marketPlanIncrease !== null ? `${formatSignedNumber(marketPlanIncrease)} 万円` : "-"}
                    </span>
                  </p>
                </div>
                <div className="mt-3 space-y-1 text-sm text-slate-700">
                  <p>
                    選択したリスク要因が発生しなければ:{" "}
                    <span className="font-semibold">{planAdvantageWithoutRisk ?? "-"}</span>
                  </p>
                  <p>
                    選択したリスク要因が発生した場合:{" "}
                    <span className="font-semibold">{planAdvantageWithRisk ?? "-"}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                  結果解説
                </p>
                <div className="mt-2 space-y-1 text-base leading-7 text-slate-700">
                  {commentaryLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="mt-3 text-base text-slate-600">
              {isLoading
                ? "対象データを読み込み中です..."
                : fetchError || "今回のアウトプットデータが見つかりません。"}
            </p>
          )}
        </div>
      </section>

      <section className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold uppercase tracking-[0.08em] text-slate-500">
          年間シミュレーショングラフ
        </h2>
        {compareData && baselineScenario && currentScenario ? (
          <>
            <p className="mt-2 text-sm text-slate-500">
              折れ線は累計、棒は各月の4プラン比較です。チェックで表示/非表示を切り替えできます。
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700 sm:grid-cols-2">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={seriesVisibility.baselineFixed}
                  onChange={() => toggleSeriesVisibility("baselineFixed")}
                  className="h-4 w-4 rounded border-slate-300 text-slate-700 focus:ring-slate-400"
                />
                固定プラン（反映前）
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={seriesVisibility.baselineMarket}
                  onChange={() => toggleSeriesVisibility("baselineMarket")}
                  className="h-4 w-4 rounded border-slate-300 text-rose-700 focus:ring-rose-400"
                />
                市場連動プラン（反映前）
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={seriesVisibility.currentFixed}
                  onChange={() => toggleSeriesVisibility("currentFixed")}
                  className="h-4 w-4 rounded border-slate-300 text-slate-700 focus:ring-slate-400"
                />
                固定プラン（反映後）
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={seriesVisibility.currentMarket}
                  onChange={() => toggleSeriesVisibility("currentMarket")}
                  className="h-4 w-4 rounded border-slate-300 text-rose-700 focus:ring-rose-400"
                />
                市場連動プラン（反映後）
              </label>
            </div>
            <div className="mt-3 h-[260px] w-full sm:h-[320px]">
              <Line data={lineData} options={lineOptions} />
            </div>
            <div className="mt-4 h-[220px] w-full sm:h-[280px]">
              <Bar data={barData} options={barOptions} />
            </div>
          </>
        ) : (
          <p className="mt-3 text-base text-slate-600">
            {isLoading ? "グラフデータを読み込み中です..." : "グラフ表示に必要なデータがありません。"}
          </p>
        )}
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-base text-slate-600 sm:text-lg">
          入力画面に戻ると、前回の入力内容は引き継がれません。条件を変更する場合は、再度入力してください。
        </p>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => window.open("/", "_blank", "noopener,noreferrer")}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:text-lg"
          >
            再度入力する
          </button>
        </div>
      </section>

    </main>
  );
}

export default function ComparePage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto min-h-screen max-w-[1600px] bg-slate-50 px-4 py-10 text-slate-800 sm:px-6 lg:px-8">
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-base text-slate-600">比較データを読み込み中です...</p>
          </section>
        </main>
      }
    >
      <ComparePageContent />
    </Suspense>
  );
}
