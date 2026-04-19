import { describe, expect, it } from "vitest";
import { calculateRiskScore, getRiskLabel, type RiskScoreInput } from "../riskScore";

const baseInput = (overrides: Partial<RiskScoreInput> = {}): RiskScoreInput => ({
  contractType: "high",
  region: "shutoken",
  springCost: 100,
  summerCost: 100,
  autumnCost: 100,
  winterCost: 100,
  buildingType: "office",
  usagePattern: "balanced",
  floorArea: 5000,
  ...overrides,
});

describe("calculateRiskScore", () => {
  it("returns a clamped score between 0 and 100", () => {
    const result = calculateRiskScore(baseInput());
    expect(result.score).toBeGreaterThanOrEqual(0);
    expect(result.score).toBeLessThanOrEqual(100);
  });

  it("returns a lower score when seasonal costs are flat (no variation)", () => {
    const flat = calculateRiskScore(baseInput());
    const peaky = calculateRiskScore(
      baseInput({ springCost: 50, summerCost: 500, autumnCost: 50, winterCost: 500 })
    );
    expect(peaky.score).toBeGreaterThan(flat.score);
    expect(peaky.breakdown.seasonalVariationScore).toBeGreaterThan(
      flat.breakdown.seasonalVariationScore
    );
  });

  it("returns zero seasonalVariationScore when all costs are zero", () => {
    const result = calculateRiskScore(
      baseInput({ springCost: 0, summerCost: 0, autumnCost: 0, winterCost: 0 })
    );
    expect(result.breakdown.seasonalVariationScore).toBe(0);
    expect(result.breakdown.peakScore).toBe(1);
  });

  it("applies the contract-type score in both English and Japanese forms", () => {
    const en = calculateRiskScore(baseInput({ contractType: "low" }));
    const ja = calculateRiskScore(baseInput({ contractType: "低圧法人" }));
    expect(en.breakdown.contractTypeScore).toBe(ja.breakdown.contractTypeScore);
    expect(en.breakdown.contractTypeScore).toBe(8);
  });

  it("falls back to the default region score for an unknown region", () => {
    const result = calculateRiskScore(baseInput({ region: "unknown-region" }));
    expect(result.breakdown.regionScore).toBe(6);
  });

  it("defaults floorArea to 1 when it is non-positive", () => {
    const zero = calculateRiskScore(baseInput({ floorArea: 0 }));
    const negative = calculateRiskScore(baseInput({ floorArea: -100 }));
    expect(zero.breakdown.unitCostScore).toBe(negative.breakdown.unitCostScore);
  });

  it("rounds to an integer and produces a label", () => {
    const result = calculateRiskScore(baseInput());
    expect(Number.isInteger(result.score)).toBe(true);
    expect(result.label).toBeTypeOf("string");
    expect(result.label.length).toBeGreaterThan(0);
  });

  it("produces scores in the 非常に高い bucket for maxed-out high-stress inputs", () => {
    const result = calculateRiskScore(
      baseInput({
        contractType: "low",
        region: "hokkaido",
        springCost: 10,
        summerCost: 1000,
        autumnCost: 10,
        winterCost: 1000,
        buildingType: "datacenter",
        usagePattern: "24h",
        floorArea: 1,
      })
    );
    expect(result.score).toBeGreaterThanOrEqual(85);
    expect(result.score).toBeLessThanOrEqual(100);
    expect(result.label).toBe("非常に高い");
  });
});

describe("getRiskLabel", () => {
  it("maps each bucket to the expected label", () => {
    expect(getRiskLabel(0)).toBe("低い");
    expect(getRiskLabel(24)).toBe("低い");
    expect(getRiskLabel(25)).toBe("やや低い");
    expect(getRiskLabel(49)).toBe("やや低い");
    expect(getRiskLabel(50)).toBe("注意");
    expect(getRiskLabel(69)).toBe("注意");
    expect(getRiskLabel(70)).toBe("高い");
    expect(getRiskLabel(84)).toBe("高い");
    expect(getRiskLabel(85)).toBe("非常に高い");
    expect(getRiskLabel(100)).toBe("非常に高い");
  });
});
