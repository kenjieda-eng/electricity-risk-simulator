import {
  buildingFactorMap,
  contractFactorMap,
  fixedPlanBaseMultiplier,
  marketSeasonalWave,
  regionFactorMap,
  regionSeasonMap,
  stressMultipliers,
  usageFactorMap,
} from "./constants";
import type {
  ScenarioResult,
  SeasonType,
  SimulationInput,
  StressFlags,
} from "./types";

export const getSeasonType = (monthNumber: number): SeasonType => {
  if ([7, 8, 9].includes(monthNumber)) return "summer";
  if ([12, 1, 2].includes(monthNumber)) return "winter";
  if ([10, 11].includes(monthNumber)) return "autumn";
  return "spring";
};

export const getOrderedMonths = (startMonth: number): number[] =>
  Array.from({ length: 12 }, (_, index) => ((startMonth - 1 + index) % 12) + 1);

export const calcMonthlyBase = (
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

export const buildResultCommentary = (
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

export const calculateScenario = (
  orderedMonths: number[],
  state: SimulationInput,
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

    const shoulderAdjustment =
      monthNumber === 6 || monthNumber === 11
        ? marketSeasonalWave.shoulderAdjustment
        : 1;
    const seasonalWaveB =
      seasonType === "summer"
        ? marketSeasonalWave.summer
        : seasonType === "winter"
        ? marketSeasonalWave.winter
        : marketSeasonalWave.other * shoulderAdjustment;

    let monthlyA = baseMonthly * fixedPlanBaseMultiplier;
    let monthlyB = baseMonthly * seasonalWaveB;

    const isSummer = seasonType === "summer";
    const isWinter = seasonType === "winter";

    if (stressFlags.heatwave && isSummer) {
      monthlyA *= stressMultipliers.heatwave.fixed;
      monthlyB *= stressMultipliers.heatwave.market;
      if (usagePattern === "seasonal-heavy") {
        monthlyB *= stressMultipliers.heatwave.seasonalHeavyExtra;
      }
    }

    if (stressFlags.coldWave && isWinter) {
      monthlyA *= stressMultipliers.coldWave.fixed;
      monthlyB *= stressMultipliers.coldWave.market;
      if (usagePattern === "seasonal-heavy") {
        monthlyB *= stressMultipliers.coldWave.seasonalHeavyExtra;
      }
    }

    if (stressFlags.fuelPrice) {
      monthlyA *= stressMultipliers.fuelPrice.fixed;
      monthlyB *= stressMultipliers.fuelPrice.market;
    }

    if (stressFlags.geopolitical) {
      monthlyA *= stressMultipliers.geopolitical.fixed;
      monthlyB *= stressMultipliers.geopolitical.market;
    }

    if (stressFlags.outage) {
      const isOutageMonth = monthIndex === 0;
      const isAftershockMonth = monthIndex === 1;

      if (isOutageMonth) {
        monthlyA *= stressMultipliers.outage.impactMonth.fixed;
        monthlyB *= stressMultipliers.outage.impactMonth.market;
        if (usagePattern === "24h" || usagePattern === "night") {
          monthlyB *= stressMultipliers.outage.impactMonth.nightOr24hExtra;
        }
      } else if (isAftershockMonth) {
        monthlyA *= stressMultipliers.outage.aftershockMonth.fixed;
        monthlyB *= stressMultipliers.outage.aftershockMonth.market;
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
