import { describe, expect, it } from "vitest";
import {
  buildUnitPriceBreakdown,
  calculateAnnualElectricityCost,
  calculateIndustryElectricity,
  getBenchmarkComparison,
  getReductionPotential,
} from "../industryElectricityCalc";
import {
  baseChargeEquivalentMap,
  buildingBaseUnitPriceMap,
  contractFactorMap,
  fuelAdjustmentByRegion,
  INDUSTRY_BENCHMARK_TOP25_MULTIPLIER,
  PRICE_RANGE_HIGH_MULTIPLIER,
  PRICE_RANGE_LOW_MULTIPLIER,
  reductionRateMap,
  regionFactorMap,
  RENEWABLE_SURCHARGE_PER_KWH,
  scaleDefaultMonthlyKwhMap,
  scaleFactorMap,
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

const baseInput = (overrides: Partial<IndustryCalculatorInput> = {}): IndustryCalculatorInput => ({
  buildingType: "office",
  contractType: "high",
  region: "shutoken",
  scaleType: "medium",
  ...overrides,
});

/* ------------------------------------------------------------------ */
/*  unitPriceMatrix の整合性                                            */
/* ------------------------------------------------------------------ */
describe("unitPriceMatrix — 定数値の整合性", () => {
  it("buildingBaseUnitPriceMap は全業種10種をカバー", () => {
    for (const b of BUILDINGS) {
      expect(buildingBaseUnitPriceMap[b]).toBeGreaterThan(0);
      expect(buildingBaseUnitPriceMap[b]).toBeLessThan(50);
    }
  });

  it("contractFactorMap は 低圧 > 高圧 > 特別高圧", () => {
    expect(contractFactorMap.low).toBeGreaterThan(contractFactorMap.high);
    expect(contractFactorMap.high).toBeGreaterThan(contractFactorMap.special);
  });

  it("scaleFactorMap は 小規模 > 中堅 > 大規模", () => {
    expect(scaleFactorMap.small).toBeGreaterThan(scaleFactorMap.medium);
    expect(scaleFactorMap.medium).toBeGreaterThan(scaleFactorMap.large);
  });

  it("regionFactorMap は全11エリアをカバー、shutoken=1.0", () => {
    for (const r of REGIONS) {
      expect(regionFactorMap[r]).toBeGreaterThan(0);
    }
    expect(regionFactorMap.shutoken).toBe(1.0);
  });

  it("regionFactorMap: 北海道・沖縄 > 首都圏 > 関西・九州", () => {
    expect(regionFactorMap.hokkaido).toBeGreaterThan(regionFactorMap.shutoken);
    expect(regionFactorMap.okinawa).toBeGreaterThan(regionFactorMap.shutoken);
    expect(regionFactorMap.shutoken).toBeGreaterThan(regionFactorMap.kansai);
    expect(regionFactorMap.shutoken).toBeGreaterThan(regionFactorMap.kyushu);
  });

  it("fuelAdjustmentByRegion は全11エリアをカバー・正値", () => {
    for (const r of REGIONS) {
      expect(fuelAdjustmentByRegion[r]).toBeGreaterThan(0);
      expect(fuelAdjustmentByRegion[r]).toBeLessThan(10);
    }
  });

  it("RENEWABLE_SURCHARGE_PER_KWH は仕様書通り 3.98 円/kWh", () => {
    expect(RENEWABLE_SURCHARGE_PER_KWH).toBe(3.98);
  });

  it("scaleDefaultMonthlyKwhMap: small < medium < large", () => {
    expect(scaleDefaultMonthlyKwhMap.small).toBeLessThan(scaleDefaultMonthlyKwhMap.medium);
    expect(scaleDefaultMonthlyKwhMap.medium).toBeLessThan(scaleDefaultMonthlyKwhMap.large);
  });

  it("reductionRateMap は仕様書 §4 の3案レンジを満たす", () => {
    expect(reductionRateMap.contractReview.low).toBe(0.05);
    expect(reductionRateMap.contractReview.high).toBe(0.15);
    expect(reductionRateMap.energySavingInvestment.low).toBe(0.1);
    expect(reductionRateMap.energySavingInvestment.high).toBe(0.2);
    expect(reductionRateMap.renewableProcurement.low).toBe(0.03);
    expect(reductionRateMap.renewableProcurement.high).toBe(0.1);
  });

  it("PRICE_RANGE 係数は低位<1<高位", () => {
    expect(PRICE_RANGE_LOW_MULTIPLIER).toBeLessThan(1);
    expect(PRICE_RANGE_HIGH_MULTIPLIER).toBeGreaterThan(1);
  });

  it("INDUSTRY_BENCHMARK_TOP25_MULTIPLIER < 1", () => {
    expect(INDUSTRY_BENCHMARK_TOP25_MULTIPLIER).toBeLessThan(1);
    expect(INDUSTRY_BENCHMARK_TOP25_MULTIPLIER).toBeGreaterThan(0);
  });

  it("baseChargeEquivalentMap: 低圧 > 高圧 > 特別高圧", () => {
    expect(baseChargeEquivalentMap.low).toBeGreaterThan(baseChargeEquivalentMap.high);
    expect(baseChargeEquivalentMap.high).toBeGreaterThan(baseChargeEquivalentMap.special);
  });
});

/* ------------------------------------------------------------------ */
/*  buildUnitPriceBreakdown                                            */
/* ------------------------------------------------------------------ */
describe("buildUnitPriceBreakdown", () => {
  it("全構成要素を含む内訳を返す", () => {
    const breakdown = buildUnitPriceBreakdown(baseInput());
    expect(breakdown.baseUnitPrice).toBeGreaterThan(0);
    expect(breakdown.buildingFactor).toBe(1.0);
    expect(breakdown.contractFactor).toBe(contractFactorMap.high);
    expect(breakdown.regionFactor).toBe(regionFactorMap.shutoken);
    expect(breakdown.fuelAdjustment).toBe(fuelAdjustmentByRegion.shutoken);
    expect(breakdown.renewableSurcharge).toBe(RENEWABLE_SURCHARGE_PER_KWH);
    expect(breakdown.baseChargeEquivalent).toBe(baseChargeEquivalentMap.high);
    expect(breakdown.totalUnitPrice).toBeGreaterThan(0);
  });

  it("単価は妥当範囲（10〜40円/kWh）に収まる(代表ケース)", () => {
    const breakdown = buildUnitPriceBreakdown(baseInput());
    expect(breakdown.totalUnitPrice).toBeGreaterThan(10);
    expect(breakdown.totalUnitPrice).toBeLessThan(40);
  });

  it("低圧 > 高圧 > 特別高圧 の単価関係を維持", () => {
    const low = buildUnitPriceBreakdown(baseInput({ contractType: "low" }));
    const high = buildUnitPriceBreakdown(baseInput({ contractType: "high" }));
    const special = buildUnitPriceBreakdown(baseInput({ contractType: "special" }));
    expect(low.totalUnitPrice).toBeGreaterThan(high.totalUnitPrice);
    expect(high.totalUnitPrice).toBeGreaterThan(special.totalUnitPrice);
  });

  it("北海道・沖縄は首都圏より単価が高い", () => {
    const hokkaido = buildUnitPriceBreakdown(baseInput({ region: "hokkaido" }));
    const shutoken = buildUnitPriceBreakdown(baseInput({ region: "shutoken" }));
    const okinawa = buildUnitPriceBreakdown(baseInput({ region: "okinawa" }));
    expect(hokkaido.totalUnitPrice).toBeGreaterThan(shutoken.totalUnitPrice);
    expect(okinawa.totalUnitPrice).toBeGreaterThan(shutoken.totalUnitPrice);
  });

  it("関西・九州は首都圏より単価が低い", () => {
    const shutoken = buildUnitPriceBreakdown(baseInput({ region: "shutoken" }));
    const kansai = buildUnitPriceBreakdown(baseInput({ region: "kansai" }));
    const kyushu = buildUnitPriceBreakdown(baseInput({ region: "kyushu" }));
    expect(kansai.totalUnitPrice).toBeLessThan(shutoken.totalUnitPrice);
    expect(kyushu.totalUnitPrice).toBeLessThan(shutoken.totalUnitPrice);
  });

  it("業種別: datacenter < factory < office < restaurant", () => {
    const dc = buildUnitPriceBreakdown(baseInput({ buildingType: "datacenter" }));
    const factory = buildUnitPriceBreakdown(baseInput({ buildingType: "factory" }));
    const office = buildUnitPriceBreakdown(baseInput({ buildingType: "office" }));
    const restaurant = buildUnitPriceBreakdown(baseInput({ buildingType: "restaurant" }));
    expect(dc.totalUnitPrice).toBeLessThan(factory.totalUnitPrice);
    expect(factory.totalUnitPrice).toBeLessThan(office.totalUnitPrice);
    expect(office.totalUnitPrice).toBeLessThan(restaurant.totalUnitPrice);
  });

  it("規模: 大規模 < 中堅 < 中小（同業種・同契約・同エリア）", () => {
    const small = buildUnitPriceBreakdown(baseInput({ scaleType: "small" }));
    const medium = buildUnitPriceBreakdown(baseInput({ scaleType: "medium" }));
    const large = buildUnitPriceBreakdown(baseInput({ scaleType: "large" }));
    expect(large.totalUnitPrice).toBeLessThan(medium.totalUnitPrice);
    expect(medium.totalUnitPrice).toBeLessThan(small.totalUnitPrice);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateAnnualElectricityCost                                     */
/* ------------------------------------------------------------------ */
describe("calculateAnnualElectricityCost", () => {
  it("monthlyKwh 未指定で scaleType デフォルト値を使う", () => {
    const result = calculateAnnualElectricityCost(baseInput());
    expect(result.annualKwh).toBe(scaleDefaultMonthlyKwhMap.medium * 12);
  });

  it("monthlyKwh 指定で年間kWh = monthlyKwh × 12", () => {
    const result = calculateAnnualElectricityCost(baseInput({ monthlyKwh: 200_000 }));
    expect(result.annualKwh).toBe(200_000 * 12);
  });

  it("レンジは median × 0.92 / 1.08 を満たす", () => {
    const result = calculateAnnualElectricityCost(baseInput({ monthlyKwh: 300_000 }));
    expect(result.range.low).toBe(Math.round(result.range.median * PRICE_RANGE_LOW_MULTIPLIER));
    expect(result.range.high).toBe(Math.round(result.range.median * PRICE_RANGE_HIGH_MULTIPLIER));
    expect(result.range.low).toBeLessThan(result.range.median);
    expect(result.range.median).toBeLessThan(result.range.high);
  });

  it("monthlyKwh = 0 は scale デフォルトにフォールバック", () => {
    const result = calculateAnnualElectricityCost(baseInput({ monthlyKwh: 0 }));
    expect(result.annualKwh).toBe(scaleDefaultMonthlyKwhMap.medium * 12);
  });

  it("monthlyKwh = 負値 は scale デフォルトにフォールバック", () => {
    const result = calculateAnnualElectricityCost(baseInput({ monthlyKwh: -100 }));
    expect(result.annualKwh).toBe(scaleDefaultMonthlyKwhMap.medium * 12);
  });

  it("monthlyKwh = NaN は scale デフォルトにフォールバック", () => {
    const result = calculateAnnualElectricityCost(baseInput({ monthlyKwh: NaN }));
    expect(result.annualKwh).toBe(scaleDefaultMonthlyKwhMap.medium * 12);
  });
});

/* ------------------------------------------------------------------ */
/*  getBenchmarkComparison                                              */
/* ------------------------------------------------------------------ */
describe("getBenchmarkComparison", () => {
  it("業種上位25% < 業種中央値", () => {
    const result = calculateIndustryElectricity(baseInput());
    expect(result.benchmark.industryTop25PercentAnnualCost).toBeLessThan(
      result.benchmark.industryMedianAnnualCost
    );
  });

  it("自社=業種中央値のとき乖離率は0%", () => {
    const result = calculateIndustryElectricity(baseInput({
      region: "shutoken",
      contractType: "high",
      scaleType: "medium",
    }));
    expect(Math.abs(result.benchmark.deviationFromMedianPercent)).toBeLessThan(0.5);
  });

  it("北海道は業種中央値より高め(=乖離率 > 0)", () => {
    const result = calculateIndustryElectricity(baseInput({
      region: "hokkaido",
      scaleType: "medium",
    }));
    expect(result.benchmark.deviationFromMedianPercent).toBeGreaterThan(0);
  });

  it("九州は業種中央値より低め(=乖離率 < 0)", () => {
    const result = calculateIndustryElectricity(baseInput({
      region: "kyushu",
      scaleType: "medium",
    }));
    expect(result.benchmark.deviationFromMedianPercent).toBeLessThan(0);
  });
});

/* ------------------------------------------------------------------ */
/*  getReductionPotential                                              */
/* ------------------------------------------------------------------ */
describe("getReductionPotential", () => {
  it("3案すべてを返す", () => {
    const reduction = getReductionPotential(10_000_000);
    expect(reduction.contractReview.kind).toBe("contractReview");
    expect(reduction.energySavingInvestment.kind).toBe("energySavingInvestment");
    expect(reduction.renewableProcurement.kind).toBe("renewableProcurement");
  });

  it("契約見直し: 5%〜15%レンジで削減額算出", () => {
    const baseline = 10_000_000;
    const cr = getReductionPotential(baseline).contractReview;
    expect(cr.annualSavingsLow).toBe(500_000);
    expect(cr.annualSavingsMedian).toBe(1_000_000);
    expect(cr.annualSavingsHigh).toBe(1_500_000);
  });

  it("省エネ投資: 10%〜20%レンジで削減額算出", () => {
    const baseline = 10_000_000;
    const es = getReductionPotential(baseline).energySavingInvestment;
    expect(es.annualSavingsLow).toBe(1_000_000);
    expect(es.annualSavingsMedian).toBe(1_500_000);
    expect(es.annualSavingsHigh).toBe(2_000_000);
  });

  it("再エネ調達(PPA): 3%〜10%レンジで削減額算出", () => {
    const baseline = 10_000_000;
    const rp = getReductionPotential(baseline).renewableProcurement;
    expect(rp.annualSavingsLow).toBe(300_000);
    expect(rp.annualSavingsHigh).toBe(1_000_000);
  });

  it("各案の low <= median <= high の順序を保つ", () => {
    const reduction = getReductionPotential(5_000_000);
    for (const kind of ["contractReview", "energySavingInvestment", "renewableProcurement"] as const) {
      const c = reduction[kind];
      expect(c.annualSavingsLow).toBeLessThanOrEqual(c.annualSavingsMedian);
      expect(c.annualSavingsMedian).toBeLessThanOrEqual(c.annualSavingsHigh);
    }
  });

  it("各案に paybackNote が付与されている", () => {
    const reduction = getReductionPotential(1_000_000);
    expect(reduction.contractReview.paybackNote.length).toBeGreaterThan(0);
    expect(reduction.energySavingInvestment.paybackNote.length).toBeGreaterThan(0);
    expect(reduction.renewableProcurement.paybackNote.length).toBeGreaterThan(0);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateIndustryElectricity — 統合                                  */
/* ------------------------------------------------------------------ */
describe("calculateIndustryElectricity — 統合", () => {
  it("デフォルト入力で全フィールドが埋まる", () => {
    const result = calculateIndustryElectricity(baseInput());
    expect(result.inputs.buildingType).toBe("office");
    expect(result.inputs.annualKwh).toBeGreaterThan(0);
    expect(result.unitPrice.totalUnitPrice).toBeGreaterThan(0);
    expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
    expect(result.benchmark.industryMedianAnnualCost).toBeGreaterThan(0);
    expect(result.reductionPotential.contractReview.annualSavingsMedian).toBeGreaterThan(0);
    expect(result.disclaimer).toContain("目安");
  });

  it("disclaimer は『目安』『中立』を明示する", () => {
    const result = calculateIndustryElectricity(baseInput());
    expect(result.disclaimer).toContain("目安");
    expect(result.disclaimer).toContain("中立");
    expect(result.disclaimer).toContain("専門家");
  });

  it("月kWh × 12 × 単価 = 年間電気代中央値（±誤差1円以内）", () => {
    const input = baseInput({ monthlyKwh: 300_000 });
    const result = calculateIndustryElectricity(input);
    const expected = 300_000 * 12 * result.unitPrice.totalUnitPrice;
    expect(Math.abs(result.estimatedAnnualCost.median - Math.round(expected))).toBeLessThanOrEqual(1);
  });

  /* ------ 代表50ケースの妥当範囲確認 ------ */
  it("代表50ケース(業種×契約×エリア×規模)の年間電気代が妥当範囲内", () => {
    // 全業種 × 一部契約 × 一部エリア × 一部規模 から代表ケース生成
    const cases: IndustryCalculatorInput[] = [];
    for (const b of BUILDINGS) {
      cases.push({ buildingType: b, contractType: "high", region: "shutoken", scaleType: "medium" });
      cases.push({ buildingType: b, contractType: "low", region: "hokkaido", scaleType: "small" });
      cases.push({ buildingType: b, contractType: "special", region: "kyushu", scaleType: "large" });
    }
    // 残り20ケース: その他組合せ
    for (const r of REGIONS) {
      cases.push({ buildingType: "office", contractType: "high", region: r, scaleType: "medium" });
      cases.push({ buildingType: "factory", contractType: "special", region: r, scaleType: "large" });
    }
    expect(cases.length).toBeGreaterThanOrEqual(50);

    for (const input of cases) {
      const result = calculateIndustryElectricity(input);
      // 単価は10〜40円/kWhの範囲
      expect(result.unitPrice.totalUnitPrice).toBeGreaterThan(10);
      expect(result.unitPrice.totalUnitPrice).toBeLessThan(40);
      // 年間電気代は正値
      expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
      // レンジ整合
      expect(result.estimatedAnnualCost.low).toBeLessThanOrEqual(result.estimatedAnnualCost.median);
      expect(result.estimatedAnnualCost.median).toBeLessThanOrEqual(result.estimatedAnnualCost.high);
      // 削減余地は正値
      expect(result.reductionPotential.contractReview.annualSavingsMedian).toBeGreaterThan(0);
      expect(result.reductionPotential.energySavingInvestment.annualSavingsMedian).toBeGreaterThan(0);
      expect(result.reductionPotential.renewableProcurement.annualSavingsMedian).toBeGreaterThan(0);
      // 業種上位25% < 業種中央値
      expect(result.benchmark.industryTop25PercentAnnualCost).toBeLessThan(
        result.benchmark.industryMedianAnnualCost
      );
    }
  });

  /* ------ 全業種×全契約×全エリア網羅(330ケース)でクラッシュしない ------ */
  it("全業種×全契約×全エリア(330ケース)でクラッシュせず正値を返す", () => {
    for (const b of BUILDINGS) {
      for (const c of CONTRACTS) {
        for (const r of REGIONS) {
          const result = calculateIndustryElectricity({
            buildingType: b,
            contractType: c,
            region: r,
            scaleType: "medium",
          });
          expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
          expect(result.unitPrice.totalUnitPrice).toBeGreaterThan(0);
        }
      }
    }
  });

  /* ------ 全規模3種も網羅 ------ */
  it("全規模(3種)でクラッシュせず正値を返す", () => {
    for (const s of SCALES) {
      const result = calculateIndustryElectricity({
        buildingType: "factory",
        contractType: "special",
        region: "shutoken",
        scaleType: s,
      });
      expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
    }
  });
});

/* ------------------------------------------------------------------ */
/*  エッジケース                                                         */
/* ------------------------------------------------------------------ */
describe("calculateIndustryElectricity — エッジケース", () => {
  it("極端に大きい monthlyKwh でも計算する", () => {
    const result = calculateIndustryElectricity(baseInput({ monthlyKwh: 100_000_000 }));
    expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
    expect(Number.isFinite(result.estimatedAnnualCost.median)).toBe(true);
  });

  it("monthlyKwh = 1 でも計算する", () => {
    const result = calculateIndustryElectricity(baseInput({ monthlyKwh: 1 }));
    expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
  });

  it("undefined optional入力で動作", () => {
    const result = calculateIndustryElectricity({
      buildingType: "datacenter",
      contractType: "special",
      region: "shutoken",
      scaleType: "large",
    });
    expect(result.estimatedAnnualCost.median).toBeGreaterThan(0);
    expect(result.inputs.annualKwh).toBe(scaleDefaultMonthlyKwhMap.large * 12);
  });

  it("currentAnnualCost / floorArea を渡しても計算結果は変わらない(参考値用)", () => {
    const without = calculateIndustryElectricity(baseInput({ monthlyKwh: 100_000 }));
    const withOptional = calculateIndustryElectricity(
      baseInput({ monthlyKwh: 100_000, currentAnnualCost: 50_000_000, floorArea: 3000 })
    );
    expect(without.estimatedAnnualCost.median).toBe(withOptional.estimatedAnnualCost.median);
  });
});

/* ------------------------------------------------------------------ */
/*  パフォーマンス                                                       */
/* ------------------------------------------------------------------ */
describe("calculateIndustryElectricity — パフォーマンス", () => {
  it("1000回の計算が 100ms 以内（クライアントサイド完結目標）", () => {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
      calculateIndustryElectricity({
        buildingType: BUILDINGS[i % BUILDINGS.length],
        contractType: CONTRACTS[i % CONTRACTS.length],
        region: REGIONS[i % REGIONS.length],
        scaleType: SCALES[i % SCALES.length],
        monthlyKwh: 100_000 + i * 100,
      });
    }
    const elapsed = performance.now() - start;
    expect(elapsed).toBeLessThan(100);
  });
});
