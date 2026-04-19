import { describe, expect, it } from "vitest";
import {
  calcMonthlyBase,
  calculateScenario,
  getOrderedMonths,
  getSeasonType,
} from "../calculateScenario";
import { stressMultipliers } from "../constants";
import type {
  BuildingType,
  ContractType,
  Region,
  SimulationInput,
  StressFlags,
  UsagePattern,
} from "../types";

const NO_STRESS: StressFlags = {
  heatwave: false,
  coldWave: false,
  fuelPrice: false,
  geopolitical: false,
  outage: false,
};

function baseInput(overrides: Partial<SimulationInput> = {}): SimulationInput {
  return {
    contractType: "high",
    region: "shutoken",
    springCost: 100,
    summerCost: 140,
    autumnCost: 110,
    winterCost: 130,
    startMonth: 1,
    buildingType: "office",
    usagePattern: "balanced",
    floorArea: 5000,
    stress: { ...NO_STRESS },
    ...overrides,
  };
}

describe("getSeasonType", () => {
  it("maps July/August/September to summer", () => {
    expect(getSeasonType(7)).toBe("summer");
    expect(getSeasonType(8)).toBe("summer");
    expect(getSeasonType(9)).toBe("summer");
  });
  it("maps December/January/February to winter", () => {
    expect(getSeasonType(12)).toBe("winter");
    expect(getSeasonType(1)).toBe("winter");
    expect(getSeasonType(2)).toBe("winter");
  });
  it("maps October/November to autumn", () => {
    expect(getSeasonType(10)).toBe("autumn");
    expect(getSeasonType(11)).toBe("autumn");
  });
  it("defaults remaining months to spring", () => {
    expect(getSeasonType(3)).toBe("spring");
    expect(getSeasonType(4)).toBe("spring");
    expect(getSeasonType(5)).toBe("spring");
    expect(getSeasonType(6)).toBe("spring");
  });
});

describe("getOrderedMonths", () => {
  it("returns 12 consecutive months starting from given month", () => {
    expect(getOrderedMonths(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(getOrderedMonths(4)).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3]);
    expect(getOrderedMonths(12)).toEqual([12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
});

describe("calcMonthlyBase", () => {
  it("picks seasonal cost based on month", () => {
    expect(calcMonthlyBase(8, 100, 140, 110, 130)).toBe(140); // summer
    expect(calcMonthlyBase(1, 100, 140, 110, 130)).toBe(130); // winter
    expect(calcMonthlyBase(10, 100, 140, 110, 130)).toBe(110); // autumn
    expect(calcMonthlyBase(4, 100, 140, 110, 130)).toBe(100); // spring
  });
});

describe("calculateScenario — baseline (no stress)", () => {
  it("produces 12 data points for line and monthly arrays", () => {
    const input = baseInput();
    const result = calculateScenario(getOrderedMonths(1), input, NO_STRESS);
    expect(result.lineA).toHaveLength(12);
    expect(result.lineB).toHaveLength(12);
    expect(result.monthlyAValues).toHaveLength(12);
    expect(result.monthlyBValues).toHaveLength(12);
  });

  it("cumulative line matches sum of monthly values", () => {
    const input = baseInput();
    const result = calculateScenario(getOrderedMonths(1), input, NO_STRESS);
    const sumA = result.monthlyAValues.reduce((a, b) => a + b, 0);
    const sumB = result.monthlyBValues.reduce((a, b) => a + b, 0);
    // Rounding in cumulative may drift by ±12; allow small tolerance.
    expect(Math.abs(result.lineA[11] - sumA)).toBeLessThan(12);
    expect(Math.abs(result.lineB[11] - sumB)).toBeLessThan(12);
  });

  it("higher seasonal costs lead to roughly proportional totals", () => {
    const low = calculateScenario(
      getOrderedMonths(1),
      baseInput({ springCost: 50, summerCost: 70, autumnCost: 55, winterCost: 65 }),
      NO_STRESS
    );
    const high = calculateScenario(
      getOrderedMonths(1),
      baseInput({ springCost: 100, summerCost: 140, autumnCost: 110, winterCost: 130 }),
      NO_STRESS
    );
    expect(high.totalA).toBeGreaterThan(low.totalA * 1.8);
    expect(high.totalA).toBeLessThan(low.totalA * 2.2);
  });

  it("all contract types produce positive totals", () => {
    const types: ContractType[] = ["low", "high", "special"];
    for (const t of types) {
      const r = calculateScenario(
        getOrderedMonths(1),
        baseInput({ contractType: t }),
        NO_STRESS
      );
      expect(r.totalA).toBeGreaterThan(0);
      expect(r.totalB).toBeGreaterThan(0);
    }
  });

  it("all regions produce positive totals", () => {
    const regions: Region[] = [
      "hokkaido",
      "tohoku",
      "kita-kanto",
      "shutoken",
      "hokuriku",
      "chubu",
      "kansai",
      "chugoku",
      "shikoku",
      "kyushu",
      "okinawa",
    ];
    for (const r of regions) {
      const result = calculateScenario(
        getOrderedMonths(1),
        baseInput({ region: r }),
        NO_STRESS
      );
      expect(result.totalA).toBeGreaterThan(0);
      expect(result.totalB).toBeGreaterThan(0);
    }
  });
});

describe("calculateScenario — stress scenarios", () => {
  it("heatwave raises summer monthly market value", () => {
    const months = getOrderedMonths(1);
    const baseline = calculateScenario(months, baseInput(), NO_STRESS);
    const stressed = calculateScenario(months, baseInput(), {
      ...NO_STRESS,
      heatwave: true,
    });
    // July is index 6, August is index 7, September is index 8.
    for (const idx of [6, 7, 8]) {
      expect(stressed.monthlyBValues[idx]).toBeGreaterThan(
        baseline.monthlyBValues[idx]
      );
    }
    // Non-summer months should be unchanged.
    expect(stressed.monthlyBValues[0]).toBe(baseline.monthlyBValues[0]);
  });

  it("heatwave applies extra multiplier for seasonal-heavy usage pattern", () => {
    const months = getOrderedMonths(1);
    const withBalanced = calculateScenario(
      months,
      baseInput({ usagePattern: "balanced" }),
      { ...NO_STRESS, heatwave: true }
    );
    const withSeasonalHeavy = calculateScenario(
      months,
      baseInput({ usagePattern: "seasonal-heavy" }),
      { ...NO_STRESS, heatwave: true }
    );
    // seasonal-heavy gets +6% additional on market line; compare ratios (both also receive usagePattern base factor).
    const balancedRatio = withBalanced.monthlyBValues[7];
    const heavyRatio = withSeasonalHeavy.monthlyBValues[7];
    expect(heavyRatio).toBeGreaterThan(balancedRatio);
  });

  it("coldWave raises winter monthly market value", () => {
    const months = getOrderedMonths(1);
    const baseline = calculateScenario(months, baseInput(), NO_STRESS);
    const stressed = calculateScenario(months, baseInput(), {
      ...NO_STRESS,
      coldWave: true,
    });
    // December is index 11, Jan index 0, Feb index 1.
    for (const idx of [11, 0, 1]) {
      expect(stressed.monthlyBValues[idx]).toBeGreaterThan(
        baseline.monthlyBValues[idx]
      );
    }
  });

  it("fuelPrice raises every month for both plans", () => {
    const months = getOrderedMonths(1);
    const baseline = calculateScenario(months, baseInput(), NO_STRESS);
    const stressed = calculateScenario(months, baseInput(), {
      ...NO_STRESS,
      fuelPrice: true,
    });
    for (let i = 0; i < 12; i++) {
      expect(stressed.monthlyAValues[i]).toBeGreaterThan(baseline.monthlyAValues[i]);
      expect(stressed.monthlyBValues[i]).toBeGreaterThan(baseline.monthlyBValues[i]);
    }
  });

  it("geopolitical stress impacts market more than fixed", () => {
    const months = getOrderedMonths(1);
    const baseline = calculateScenario(months, baseInput(), NO_STRESS);
    const stressed = calculateScenario(months, baseInput(), {
      ...NO_STRESS,
      geopolitical: true,
    });
    const fixedDelta = (stressed.totalA - baseline.totalA) / baseline.totalA;
    const marketDelta = (stressed.totalB - baseline.totalB) / baseline.totalB;
    expect(marketDelta).toBeGreaterThan(fixedDelta);
  });

  it("outage only affects month index 0 and 1", () => {
    const months = getOrderedMonths(1);
    const baseline = calculateScenario(months, baseInput(), NO_STRESS);
    const stressed = calculateScenario(months, baseInput(), {
      ...NO_STRESS,
      outage: true,
    });
    expect(stressed.monthlyAValues[0]).toBeGreaterThan(baseline.monthlyAValues[0]);
    expect(stressed.monthlyAValues[1]).toBeGreaterThan(baseline.monthlyAValues[1]);
    for (let i = 2; i < 12; i++) {
      expect(stressed.monthlyAValues[i]).toBe(baseline.monthlyAValues[i]);
      expect(stressed.monthlyBValues[i]).toBe(baseline.monthlyBValues[i]);
    }
  });

  it("outage adds 6% extra on market for 24h/night usage in impact month", () => {
    const months = getOrderedMonths(1);
    const with24h = calculateScenario(
      months,
      baseInput({ usagePattern: "24h" }),
      { ...NO_STRESS, outage: true }
    );
    const withBalanced = calculateScenario(
      months,
      baseInput({ usagePattern: "balanced" }),
      { ...NO_STRESS, outage: true }
    );
    // 24h path receives both the base 1.10 usage factor AND the outage 1.06 extra.
    // Compare to balanced at 1.03. 24h should exceed balanced even before extra, but extra should widen the gap.
    const scale24 = with24h.monthlyBValues[0] / with24h.monthlyBValues[2];
    const scaleBalanced = withBalanced.monthlyBValues[0] / withBalanced.monthlyBValues[2];
    expect(scale24).toBeGreaterThan(scaleBalanced);
  });

  it("all-stress worst-case exceeds each single-stress total", () => {
    const months = getOrderedMonths(1);
    const worstCase = calculateScenario(months, baseInput(), {
      heatwave: true,
      coldWave: true,
      fuelPrice: true,
      geopolitical: true,
      outage: true,
    });
    const onlyFuel = calculateScenario(months, baseInput(), {
      ...NO_STRESS,
      fuelPrice: true,
    });
    expect(worstCase.totalB).toBeGreaterThan(onlyFuel.totalB);
  });
});

describe("calculateScenario — boundary values", () => {
  it("clamps floorArea to minimum 1", () => {
    const result = calculateScenario(
      getOrderedMonths(1),
      baseInput({ floorArea: 0 }),
      NO_STRESS
    );
    expect(result.totalA).toBeGreaterThan(0);
    expect(Number.isFinite(result.totalA)).toBe(true);
  });

  it("handles large floor area without overflow", () => {
    const result = calculateScenario(
      getOrderedMonths(1),
      baseInput({ floorArea: 50000 }),
      NO_STRESS
    );
    expect(Number.isFinite(result.totalA)).toBe(true);
    expect(Number.isFinite(result.totalB)).toBe(true);
  });

  it("handles zero costs gracefully", () => {
    const result = calculateScenario(
      getOrderedMonths(1),
      baseInput({
        springCost: 0,
        summerCost: 0,
        autumnCost: 0,
        winterCost: 0,
      }),
      NO_STRESS
    );
    expect(result.totalA).toBe(0);
    expect(result.totalB).toBe(0);
  });

  it("handles all building types without error", () => {
    const types: BuildingType[] = [
      "office",
      "retail",
      "restaurant",
      "factory",
      "welfare",
      "hotel",
      "warehouse",
      "school",
      "datacenter",
      "public",
    ];
    for (const b of types) {
      const result = calculateScenario(
        getOrderedMonths(1),
        baseInput({ buildingType: b }),
        NO_STRESS
      );
      expect(result.totalA).toBeGreaterThan(0);
    }
  });

  it("handles all usage patterns without error", () => {
    const patterns: UsagePattern[] = [
      "balanced",
      "daytime",
      "night",
      "24h",
      "weekend-busy",
      "seasonal-heavy",
    ];
    for (const p of patterns) {
      const result = calculateScenario(
        getOrderedMonths(1),
        baseInput({ usagePattern: p }),
        NO_STRESS
      );
      expect(result.totalA).toBeGreaterThan(0);
    }
  });
});

describe("stressMultipliers constants", () => {
  it("keeps market multiplier >= fixed multiplier for each stress family", () => {
    expect(stressMultipliers.heatwave.market).toBeGreaterThan(
      stressMultipliers.heatwave.fixed
    );
    expect(stressMultipliers.coldWave.market).toBeGreaterThan(
      stressMultipliers.coldWave.fixed
    );
    expect(stressMultipliers.fuelPrice.market).toBeGreaterThan(
      stressMultipliers.fuelPrice.fixed
    );
    expect(stressMultipliers.geopolitical.market).toBeGreaterThan(
      stressMultipliers.geopolitical.fixed
    );
    expect(stressMultipliers.outage.impactMonth.market).toBeGreaterThan(
      stressMultipliers.outage.impactMonth.fixed
    );
  });
});
