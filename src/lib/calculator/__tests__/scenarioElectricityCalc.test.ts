import { describe, expect, it } from "vitest";
import { calculateIndustryElectricity } from "../industryElectricityCalc";
import { calculateScenarioSimulation } from "../scenarioElectricityCalc";
import {
  BASELINE_SCENARIO_ID,
  SCENARIO_DELTAS,
  SCENARIO_IDS,
  SCENARIO_BASE_SURCHARGE_PER_KWH,
} from "../scenarioMatrix";
import {
  PRICE_RANGE_HIGH_MULTIPLIER,
  PRICE_RANGE_LOW_MULTIPLIER,
} from "../unitPriceMatrix";
import type {
  BuildingType,
  ContractType,
  IndustryCalculatorInput,
  Region,
  ScaleType,
} from "../types";

const BUILDINGS: BuildingType[] = [
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
const CONTRACTS: ContractType[] = ["low", "high", "special"];
const REGIONS: Region[] = [
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
const SCALES: ScaleType[] = ["small", "medium", "large"];

const baseInput = (
  overrides: Partial<IndustryCalculatorInput> = {}
): IndustryCalculatorInput => ({
  buildingType: "office",
  contractType: "high",
  region: "shutoken",
  scaleType: "medium",
  ...overrides,
});

const scenarioById = (
  result: ReturnType<typeof calculateScenarioSimulation>,
  id: string
) => {
  const s = result.scenarios.find((x) => x.id === id);
  if (!s) throw new Error(`scenario ${id} not found`);
  return s;
};

/* ------------------------------------------------------------------ */
/*  scenarioMatrix の整合性                                            */
/* ------------------------------------------------------------------ */
describe("scenarioMatrix — Δ定義の整合性", () => {
  it("4シナリオ(baseline/upside/structural/easing)を定義", () => {
    expect(SCENARIO_IDS).toEqual(["baseline", "upside", "structural", "easing"]);
  });

  it("baseline は全Δが0（D-1一致の前提）", () => {
    const baseline = SCENARIO_DELTAS.find((s) => s.id === BASELINE_SCENARIO_ID)!;
    expect(baseline.deltaFuelAdjustment).toBe(0);
    expect(baseline.deltaSurcharge).toBe(0);
    expect(baseline.marketPremium).toBe(0);
    expect(baseline.subsidyReliefDelta).toBe(0);
  });

  it("基準の再エネ賦課金は2026年度確定値 4.18円/kWh（SSOT）", () => {
    expect(SCENARIO_BASE_SURCHARGE_PER_KWH).toBe(4.18);
  });

  it("合計Δ（円/kWh）が upside > structural > baseline > easing の順", () => {
    const totalDelta = (id: string) => {
      const d = SCENARIO_DELTAS.find((s) => s.id === id)!;
      return (
        d.deltaFuelAdjustment +
        d.deltaSurcharge +
        d.marketPremium -
        d.subsidyReliefDelta
      );
    };
    expect(totalDelta("upside")).toBeGreaterThan(totalDelta("structural"));
    expect(totalDelta("structural")).toBeGreaterThan(totalDelta("baseline"));
    expect(totalDelta("baseline")).toBe(0);
    expect(totalDelta("baseline")).toBeGreaterThan(totalDelta("easing"));
  });

  it("structural の Δ賦課金は「想定」（>0・確定でない旨を sourceNote/description に明示）", () => {
    const structural = SCENARIO_DELTAS.find((s) => s.id === "structural")!;
    expect(structural.deltaSurcharge).toBeGreaterThan(0);
    expect(structural.sourceNote).toContain("想定");
    expect(structural.description).toContain("想定");
  });

  it("全シナリオの sourceNote が非空", () => {
    for (const d of SCENARIO_DELTAS) {
      expect(d.sourceNote.length).toBeGreaterThan(0);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  ★baseline = D-1 一致（スナップショット）                            */
/* ------------------------------------------------------------------ */
describe("calculateScenarioSimulation — baseline=D-1 完全一致", () => {
  it("代表入力: baseline の総単価・年間額レンジが D-1 と一致", () => {
    const input = baseInput({ monthlyKwh: 300_000 });
    const scenario = calculateScenarioSimulation(input);
    const d1 = calculateIndustryElectricity(input);
    const baseline = scenarioById(scenario, "baseline");

    expect(baseline.unitPrice.scenarioTotalUnitPrice).toBe(
      d1.unitPrice.totalUnitPrice
    );
    expect(baseline.estimatedAnnualCost).toEqual(d1.estimatedAnnualCost);
    expect(scenario.baselineAnnualCost).toEqual(d1.estimatedAnnualCost);
    expect(scenario.inputs.annualKwh).toBe(d1.inputs.annualKwh);
  });

  it("baseline の上振れ%・差額は0", () => {
    const scenario = calculateScenarioSimulation(baseInput());
    const baseline = scenarioById(scenario, "baseline");
    expect(baseline.upliftVsBaselinePercent).toBe(0);
    expect(baseline.annualCostDeltaVsBaseline).toBe(0);
  });

  it("全業種×全契約×全エリア(330ケース): baseline 総単価=D-1 totalUnitPrice", () => {
    for (const b of BUILDINGS) {
      for (const c of CONTRACTS) {
        for (const r of REGIONS) {
          const input: IndustryCalculatorInput = {
            buildingType: b,
            contractType: c,
            region: r,
            scaleType: "medium",
          };
          const baseline = scenarioById(
            calculateScenarioSimulation(input),
            "baseline"
          );
          const d1 = calculateIndustryElectricity(input);
          expect(baseline.unitPrice.scenarioTotalUnitPrice).toBe(
            d1.unitPrice.totalUnitPrice
          );
          expect(baseline.estimatedAnnualCost.median).toBe(
            d1.estimatedAnnualCost.median
          );
        }
      }
    }
  });

  it("全規模(3種)・monthlyKwh指定でも baseline=D-1 年間額一致", () => {
    for (const s of SCALES) {
      const input = baseInput({ scaleType: s, monthlyKwh: 123_456 });
      const baseline = scenarioById(
        calculateScenarioSimulation(input),
        "baseline"
      );
      const d1 = calculateIndustryElectricity(input);
      expect(baseline.estimatedAnnualCost).toEqual(d1.estimatedAnnualCost);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  Δ加算と単調性                                                       */
/* ------------------------------------------------------------------ */
describe("calculateScenarioSimulation — Δ加算・単調性", () => {
  it("単価が upside > structural > baseline > easing（同一入力）", () => {
    const r = calculateScenarioSimulation(baseInput());
    const up = scenarioById(r, "upside").unitPrice.scenarioTotalUnitPrice;
    const st = scenarioById(r, "structural").unitPrice.scenarioTotalUnitPrice;
    const ba = scenarioById(r, "baseline").unitPrice.scenarioTotalUnitPrice;
    const ea = scenarioById(r, "easing").unitPrice.scenarioTotalUnitPrice;
    expect(up).toBeGreaterThan(st);
    expect(st).toBeGreaterThan(ba);
    expect(ba).toBeGreaterThan(ea);
  });

  it("年間額も upside > structural > baseline > easing", () => {
    const r = calculateScenarioSimulation(baseInput({ monthlyKwh: 200_000 }));
    const up = scenarioById(r, "upside").estimatedAnnualCost.median;
    const st = scenarioById(r, "structural").estimatedAnnualCost.median;
    const ba = scenarioById(r, "baseline").estimatedAnnualCost.median;
    const ea = scenarioById(r, "easing").estimatedAnnualCost.median;
    expect(up).toBeGreaterThan(st);
    expect(st).toBeGreaterThan(ba);
    expect(ba).toBeGreaterThan(ea);
  });

  it("各シナリオ総単価 = D-1総単価 + Δ燃調 + Δ賦課金 + 市場プレミアム − 補助金", () => {
    const input = baseInput();
    const d1 = calculateIndustryElectricity(input);
    const r = calculateScenarioSimulation(input);
    for (const delta of SCENARIO_DELTAS) {
      const s = scenarioById(r, delta.id);
      const expected =
        d1.unitPrice.totalUnitPrice +
        delta.deltaFuelAdjustment +
        delta.deltaSurcharge +
        delta.marketPremium -
        delta.subsidyReliefDelta;
      expect(s.unitPrice.scenarioTotalUnitPrice).toBeCloseTo(expected, 9);
    }
  });

  it("実効賦課金 = 基準賦課金 + Δ賦課金（baseline=基準のまま）", () => {
    const r = calculateScenarioSimulation(baseInput());
    const baseline = scenarioById(r, "baseline");
    expect(baseline.unitPrice.effectiveRenewableSurcharge).toBe(
      SCENARIO_BASE_SURCHARGE_PER_KWH
    );
    const structural = scenarioById(r, "structural");
    expect(structural.unitPrice.effectiveRenewableSurcharge).toBeCloseTo(
      SCENARIO_BASE_SURCHARGE_PER_KWH + structural.unitPrice.deltaSurcharge,
      9
    );
  });

  it("upside/structural の上振れ%は正、easing は負", () => {
    const r = calculateScenarioSimulation(baseInput({ monthlyKwh: 300_000 }));
    expect(scenarioById(r, "upside").upliftVsBaselinePercent).toBeGreaterThan(0);
    expect(
      scenarioById(r, "structural").upliftVsBaselinePercent
    ).toBeGreaterThan(0);
    expect(scenarioById(r, "easing").upliftVsBaselinePercent).toBeLessThan(0);
  });

  it("年間額レンジは中央値±8%（low<median<high・倍率0.92/1.08近傍）", () => {
    const r = calculateScenarioSimulation(baseInput({ monthlyKwh: 300_000 }));
    for (const s of r.scenarios) {
      const { low, median, high } = s.estimatedAnnualCost;
      expect(low).toBeLessThan(median);
      expect(median).toBeLessThan(high);
      // 丸め前 median から算出するため ±1円の丸め差を許容して倍率を確認。
      expect(Math.abs(low - median * PRICE_RANGE_LOW_MULTIPLIER)).toBeLessThanOrEqual(1);
      expect(Math.abs(high - median * PRICE_RANGE_HIGH_MULTIPLIER)).toBeLessThanOrEqual(1);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  中立性・disclaimer                                                  */
/* ------------------------------------------------------------------ */
describe("calculateScenarioSimulation — 中立性", () => {
  it("disclaimer は D-1準拠（目安・中立）＋『予測ではない』を含む", () => {
    const r = calculateScenarioSimulation(baseInput());
    expect(r.disclaimer).toContain("目安");
    expect(r.disclaimer).toContain("中立");
    expect(r.disclaimer).toContain("予測");
    expect(r.disclaimer).toContain("想定");
  });

  it("4シナリオを baseline→upside→structural→easing の順で返す", () => {
    const r = calculateScenarioSimulation(baseInput());
    expect(r.scenarios.map((s) => s.id)).toEqual([
      "baseline",
      "upside",
      "structural",
      "easing",
    ]);
  });
});

/* ------------------------------------------------------------------ */
/*  網羅・エッジ・パフォーマンス                                         */
/* ------------------------------------------------------------------ */
describe("calculateScenarioSimulation — 網羅・性能", () => {
  it("代表ケースで全シナリオが正値・有限", () => {
    for (const b of BUILDINGS) {
      const r = calculateScenarioSimulation({
        buildingType: b,
        contractType: "high",
        region: "shutoken",
        scaleType: "medium",
      });
      for (const s of r.scenarios) {
        expect(Number.isFinite(s.unitPrice.scenarioTotalUnitPrice)).toBe(true);
        expect(s.estimatedAnnualCost.median).toBeGreaterThan(0);
        expect(s.unitPrice.scenarioTotalUnitPrice).toBeGreaterThan(0);
      }
    }
  });

  it("1000回の計算が 150ms 以内（クライアント同期目標）", () => {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      calculateScenarioSimulation({
        buildingType: BUILDINGS[i % BUILDINGS.length],
        contractType: CONTRACTS[i % CONTRACTS.length],
        region: REGIONS[i % REGIONS.length],
        scaleType: SCALES[i % SCALES.length],
        monthlyKwh: 100_000 + i * 100,
      });
    }
    expect(performance.now() - start).toBeLessThan(150);
  });
});
