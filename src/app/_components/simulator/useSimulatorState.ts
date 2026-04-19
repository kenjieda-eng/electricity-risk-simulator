"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { calculateRiskScore } from "../../../lib/riskScore";
import { trackEvent } from "../../../lib/analytics/ga";
import {
  buildResultCommentary,
  calculateScenario,
  getOrderedMonths,
} from "../../../lib/simulator";
import type {
  ChartSeriesKey,
  InputState,
  SeriesVisibility,
  VisibleTotalCard,
} from "./types";

const INPUT_STATE_SESSION_KEY = "ana-simulation-input-state";

const INITIAL_STATE: InputState = {
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
};

export function useSimulatorState() {
  const router = useRouter();
  const [simulationCount, setSimulationCount] = useState<number | null>(null);
  const [averageRiskScore, setAverageRiskScore] = useState<number | null>(null);
  const [state, setState] = useState<InputState>(INITIAL_STATE);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [seriesVisibility, setSeriesVisibility] = useState<SeriesVisibility>({
    baselineFixed: true,
    baselineMarket: true,
    currentFixed: true,
    currentMarket: true,
  });

  const worstCaseRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await fetch("/api/simulation-results/average", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });
        const json = (await response.json()) as {
          ok?: boolean;
          averageRiskScore?: number | null;
          count?: number;
        };
        if (!response.ok || !json.ok) return;
        setSimulationCount(
          typeof json.count === "number" && Number.isFinite(json.count) ? json.count : null
        );
        setAverageRiskScore(
          typeof json.averageRiskScore === "number" && Number.isFinite(json.averageRiskScore)
            ? json.averageRiskScore
            : null
        );
      } catch {
        // aborted or offline — silently skip
      }
    })();
    return () => controller.abort();
  }, []);

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

  const visibleTotalCards = useMemo<VisibleTotalCard[]>(
    () =>
      [
        {
          key: "baselineFixed" as const,
          label: "固定プラン（当初想定）",
          total: baselineScenario.totalA,
          className: "rounded-xl border border-slate-200 bg-slate-50 p-4",
          textClassName: "text-slate-900",
          subTextClassName: "text-slate-500",
        },
        {
          key: "baselineMarket" as const,
          label: "市場連動プラン（当初想定）",
          total: baselineScenario.totalB,
          className: "rounded-xl border border-rose-200 bg-rose-50 p-4",
          textClassName: "text-rose-700",
          subTextClassName: "text-rose-500",
        },
        {
          key: "currentFixed" as const,
          label: "固定プラン（リスク要因反映後）",
          total: currentScenario.totalA,
          className: "rounded-xl border border-slate-300 bg-slate-100 p-4",
          textClassName: "text-slate-900",
          subTextClassName: "text-slate-600",
          requiresStress: true,
        },
        {
          key: "currentMarket" as const,
          label: "市場連動プラン（リスク要因反映後）",
          total: currentScenario.totalB,
          className: "rounded-xl border border-pink-200 bg-pink-50 p-4",
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

  const toggleSeriesVisibility = useCallback((key: ChartSeriesKey) => {
    setSeriesVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  }, []);

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

  const handleAnonymousShare = useCallback(async () => {
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

    trackEvent("simulator_start", {
      contract_type: state.contractType,
      region: state.region,
      building_type: state.buildingType,
      usage_pattern: state.usagePattern,
    });

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
      trackEvent("simulation_complete", {
        contract_type: state.contractType,
        region: state.region,
        risk_score: riskScore,
        risk_label: riskLabel,
      });
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
  }, [state, currentScenario, riskScoreResult, router]);

  return {
    // state
    state,
    setState,
    simulationCount,
    averageRiskScore,
    isSaving,
    saveError,
    seriesVisibility,
    worstCaseRef,
    // computed
    orderedMonths,
    baselineScenario,
    currentScenario,
    hasStressFactors,
    visibleTotalCards,
    commentaryLines,
    riskScoreResult,
    // actions
    toggleSeriesVisibility,
    handleAnonymousShare,
  };
}
