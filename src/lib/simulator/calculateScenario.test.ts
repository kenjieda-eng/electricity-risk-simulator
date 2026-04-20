import { describe, expect, it } from "vitest";
import {
  buildResultCommentary,
  calcMonthlyBase,
  calculateScenario,
  getOrderedMonths,
  getSeasonType,
} from "./calculateScenario";
import { stressMultipliers } from "./constants";
import type { ScenarioResult, SimulationInput, StressFlags } from "./types";

/* ------------------------------------------------------------------ */
/*  Helper: デフォルト入力値                                            */
/* ------------------------------------------------------------------ */
const NO_STRESS: StressFlags = {
  heatwave: false,
  coldWave: false,
  fuelPrice: false,
  geopolitical: false,
  outage: false,
};

const defaultInput: SimulationInput = {
  contractType: "high",
  region: "shutoken",
  springCost: 100,
  summerCost: 110,
  autumnCost: 100,
  winterCost: 105,
  startMonth: 4,
  buildingType: "office",
  usagePattern: "balanced",
  floorArea: 5000,
  stress: { ...NO_STRESS },
};

/* ------------------------------------------------------------------ */
/*  getSeasonType                                                     */
/* ------------------------------------------------------------------ */
describe("getSeasonType", () => {
  it("夏: 7月・8月・9月", () => {
    expect(getSeasonType(7)).toBe("summer");
    expect(getSeasonType(8)).toBe("summer");
    expect(getSeasonType(9)).toBe("summer");
  });

  it("冬: 12月・1月・2月", () => {
    expect(getSeasonType(12)).toBe("winter");
    expect(getSeasonType(1)).toBe("winter");
    expect(getSeasonType(2)).toBe("winter");
  });

  it("秋: 10月・11月", () => {
    expect(getSeasonType(10)).toBe("autumn");
    expect(getSeasonType(11)).toBe("autumn");
  });

  it("春: 3月・4月・5月・6月", () => {
    expect(getSeasonType(3)).toBe("spring");
    expect(getSeasonType(4)).toBe("spring");
    expect(getSeasonType(5)).toBe("spring");
    expect(getSeasonType(6)).toBe("spring");
  });
});

/* ------------------------------------------------------------------ */
/*  getOrderedMonths                                                  */
/* ------------------------------------------------------------------ */
describe("getOrderedMonths", () => {
  it("4月始まり → 4,5,6,...,3", () => {
    const months = getOrderedMonths(4);
    expect(months).toEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3]);
  });

  it("1月始まり → 1,2,...,12", () => {
    expect(getOrderedMonths(1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("10月始まり → 10,11,...,9", () => {
    const months = getOrderedMonths(10);
    expect(months[0]).toBe(10);
    expect(months[11]).toBe(9);
    expect(months).toHaveLength(12);
  });
});

/* ------------------------------------------------------------------ */
/*  calcMonthlyBase                                                   */
/* ------------------------------------------------------------------ */
describe("calcMonthlyBase", () => {
  it("夏月は summerCost を返す", () => {
    expect(calcMonthlyBase(7, 100, 200, 150, 180)).toBe(200);
    expect(calcMonthlyBase(8, 100, 200, 150, 180)).toBe(200);
  });

  it("冬月は winterCost を返す", () => {
    expect(calcMonthlyBase(1, 100, 200, 150, 180)).toBe(180);
    expect(calcMonthlyBase(12, 100, 200, 150, 180)).toBe(180);
  });

  it("秋月は autumnCost を返す", () => {
    expect(calcMonthlyBase(10, 100, 200, 150, 180)).toBe(150);
  });

  it("春月は springCost を返す", () => {
    expect(calcMonthlyBase(4, 100, 200, 150, 180)).toBe(100);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — 基本計算                                       */
/* ------------------------------------------------------------------ */
describe("calculateScenario — 基本計算", () => {
  it("12か月分の結果が返る", () => {
    const months = getOrderedMonths(4);
    const result = calculateScenario(months, defaultInput, NO_STRESS);

    expect(result.lineA).toHaveLength(12);
    expect(result.lineB).toHaveLength(12);
    expect(result.monthlyAValues).toHaveLength(12);
    expect(result.monthlyBValues).toHaveLength(12);
  });

  it("累積値は単調増加する", () => {
    const months = getOrderedMonths(4);
    const result = calculateScenario(months, defaultInput, NO_STRESS);

    for (let i = 1; i < 12; i++) {
      expect(result.lineA[i]).toBeGreaterThanOrEqual(result.lineA[i - 1]);
      expect(result.lineB[i]).toBeGreaterThanOrEqual(result.lineB[i - 1]);
    }
  });

  it("totalA は月次Aの合計（丸め誤差±12以内）", () => {
    const months = getOrderedMonths(4);
    const result = calculateScenario(months, defaultInput, NO_STRESS);
    const sumMonthly = result.monthlyAValues.reduce((a, b) => a + b, 0);
    expect(Math.abs(result.totalA - sumMonthly)).toBeLessThanOrEqual(12);
  });

  it("totalB は月次Bの合計（丸め誤差±12以内）", () => {
    const months = getOrderedMonths(4);
    const result = calculateScenario(months, defaultInput, NO_STRESS);
    const sumMonthly = result.monthlyBValues.reduce((a, b) => a + b, 0);
    expect(Math.abs(result.totalB - sumMonthly)).toBeLessThanOrEqual(12);
  });

  it("最終累積値 = totalA / totalB", () => {
    const months = getOrderedMonths(4);
    const result = calculateScenario(months, defaultInput, NO_STRESS);
    expect(result.lineA[11]).toBe(result.totalA);
    expect(result.lineB[11]).toBe(result.totalB);
  });

  it("ストレスなしでは固定プラン > 市場連動プラン（fixedPlanBaseMultiplier > marketSeasonalWave）", () => {
    const months = getOrderedMonths(4);
    const result = calculateScenario(months, defaultInput, NO_STRESS);
    expect(result.totalA).toBeGreaterThan(result.totalB);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — 契約区分別                                     */
/* ------------------------------------------------------------------ */
describe("calculateScenario — 契約区分別", () => {
  const months = getOrderedMonths(4);

  it("特別高圧 < 高圧 < 低圧（同条件で比較）", () => {
    const resultLow = calculateScenario(months, { ...defaultInput, contractType: "low" }, NO_STRESS);
    const resultHigh = calculateScenario(months, { ...defaultInput, contractType: "high" }, NO_STRESS);
    const resultSpecial = calculateScenario(months, { ...defaultInput, contractType: "special" }, NO_STRESS);

    expect(resultSpecial.totalA).toBeLessThan(resultHigh.totalA);
    expect(resultHigh.totalA).toBeLessThan(resultLow.totalA);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — 地域別                                         */
/* ------------------------------------------------------------------ */
describe("calculateScenario — 地域別", () => {
  const months = getOrderedMonths(4);

  it("北海道 > 首都圏 > 九州（regionFactor順）", () => {
    const hokkaido = calculateScenario(months, { ...defaultInput, region: "hokkaido" }, NO_STRESS);
    const shutoken = calculateScenario(months, { ...defaultInput, region: "shutoken" }, NO_STRESS);
    const kyushu = calculateScenario(months, { ...defaultInput, region: "kyushu" }, NO_STRESS);

    expect(hokkaido.totalA).toBeGreaterThan(shutoken.totalA);
    expect(shutoken.totalA).toBeGreaterThan(kyushu.totalA);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — 施設・用途パターン                               */
/* ------------------------------------------------------------------ */
describe("calculateScenario — 施設・用途パターン", () => {
  const months = getOrderedMonths(4);

  it("データセンター > オフィス > 倉庫（buildingFactor順）", () => {
    const dc = calculateScenario(months, { ...defaultInput, buildingType: "datacenter" }, NO_STRESS);
    const office = calculateScenario(months, { ...defaultInput, buildingType: "office" }, NO_STRESS);
    const warehouse = calculateScenario(months, { ...defaultInput, buildingType: "warehouse" }, NO_STRESS);

    expect(dc.totalA).toBeGreaterThan(office.totalA);
    expect(office.totalA).toBeGreaterThan(warehouse.totalA);
  });

  it("24h > balanced > daytime（usageFactor順）", () => {
    const h24 = calculateScenario(months, { ...defaultInput, usagePattern: "24h" }, NO_STRESS);
    const balanced = calculateScenario(months, { ...defaultInput, usagePattern: "balanced" }, NO_STRESS);
    const daytime = calculateScenario(months, { ...defaultInput, usagePattern: "daytime" }, NO_STRESS);

    expect(h24.totalA).toBeGreaterThan(balanced.totalA);
    expect(balanced.totalA).toBeGreaterThan(daytime.totalA);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — 延床面積                                       */
/* ------------------------------------------------------------------ */
describe("calculateScenario — 延床面積", () => {
  const months = getOrderedMonths(4);

  it("面積が大きいほどコストが高い", () => {
    const small = calculateScenario(months, { ...defaultInput, floorArea: 1000 }, NO_STRESS);
    const large = calculateScenario(months, { ...defaultInput, floorArea: 10000 }, NO_STRESS);

    expect(large.totalA).toBeGreaterThan(small.totalA);
  });

  it("areaFactor は 0.85〜1.25 にクランプされる", () => {
    const tiny = calculateScenario(months, { ...defaultInput, floorArea: 0 }, NO_STRESS);
    const huge = calculateScenario(months, { ...defaultInput, floorArea: 100000 }, NO_STRESS);

    // 0.85 / 1.25 の比率は約 0.68。totalA の比率もこの範囲内であるべき
    const ratio = tiny.totalA / huge.totalA;
    expect(ratio).toBeGreaterThan(0.6);
    expect(ratio).toBeLessThan(0.75);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — ストレスシナリオ                                */
/* ------------------------------------------------------------------ */
describe("calculateScenario — ストレスシナリオ", () => {
  const months = getOrderedMonths(4);

  it("猛暑フラグで夏月の市場連動が上昇する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const heatwave = calculateScenario(months, defaultInput, { ...NO_STRESS, heatwave: true });

    expect(heatwave.totalB).toBeGreaterThan(base.totalB);
    expect(heatwave.totalA).toBeGreaterThan(base.totalA);
  });

  it("猛暑は夏月（7,8,9月）のみに影響する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const heatwave = calculateScenario(months, defaultInput, { ...NO_STRESS, heatwave: true });

    // 4月始まりで index 0=4月, 3=7月, 4=8月, 5=9月
    // 春月（index 0,1,2）は変化なし
    for (let i = 0; i < 3; i++) {
      expect(heatwave.monthlyAValues[i]).toBe(base.monthlyAValues[i]);
      expect(heatwave.monthlyBValues[i]).toBe(base.monthlyBValues[i]);
    }
    // 夏月（index 3,4,5）は上昇
    for (let i = 3; i <= 5; i++) {
      expect(heatwave.monthlyAValues[i]).toBeGreaterThan(base.monthlyAValues[i]);
      expect(heatwave.monthlyBValues[i]).toBeGreaterThan(base.monthlyBValues[i]);
    }
  });

  it("寒波フラグで冬月の市場連動が上昇する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const coldWave = calculateScenario(months, defaultInput, { ...NO_STRESS, coldWave: true });

    expect(coldWave.totalB).toBeGreaterThan(base.totalB);
  });

  it("寒波は冬月（12,1,2月）のみに影響する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const coldWave = calculateScenario(months, defaultInput, { ...NO_STRESS, coldWave: true });

    // 4月始まりで index 8=12月, 9=1月, 10=2月
    // 非冬月は変化なし（春4,5,6=idx0,1,2 / 夏7,8,9=idx3,4,5）
    for (let i = 0; i <= 5; i++) {
      expect(coldWave.monthlyAValues[i]).toBe(base.monthlyAValues[i]);
    }
    // 冬月は上昇
    for (const i of [8, 9, 10]) {
      expect(coldWave.monthlyBValues[i]).toBeGreaterThan(base.monthlyBValues[i]);
    }
  });

  it("燃料費・為替フラグは全月に影響する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const fuel = calculateScenario(months, defaultInput, { ...NO_STRESS, fuelPrice: true });

    for (let i = 0; i < 12; i++) {
      expect(fuel.monthlyAValues[i]).toBeGreaterThan(base.monthlyAValues[i]);
      expect(fuel.monthlyBValues[i]).toBeGreaterThan(base.monthlyBValues[i]);
    }
  });

  it("地政学フラグは全月に影響する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const geo = calculateScenario(months, defaultInput, { ...NO_STRESS, geopolitical: true });

    for (let i = 0; i < 12; i++) {
      expect(geo.monthlyAValues[i]).toBeGreaterThan(base.monthlyAValues[i]);
      expect(geo.monthlyBValues[i]).toBeGreaterThan(base.monthlyBValues[i]);
    }
  });

  it("停電・災害フラグは最初の2か月のみに影響する", () => {
    const base = calculateScenario(months, defaultInput, NO_STRESS);
    const outage = calculateScenario(months, defaultInput, { ...NO_STRESS, outage: true });

    // index 0: 影響月
    expect(outage.monthlyAValues[0]).toBeGreaterThan(base.monthlyAValues[0]);
    expect(outage.monthlyBValues[0]).toBeGreaterThan(base.monthlyBValues[0]);
    // index 1: 余波月
    expect(outage.monthlyAValues[1]).toBeGreaterThan(base.monthlyAValues[1]);
    expect(outage.monthlyBValues[1]).toBeGreaterThan(base.monthlyBValues[1]);
    // index 2以降: 影響なし
    for (let i = 2; i < 12; i++) {
      expect(outage.monthlyAValues[i]).toBe(base.monthlyAValues[i]);
    }
  });

  it("停電×24h運用は市場連動が通常停電より高い", () => {
    const outageBalanced = calculateScenario(
      months,
      { ...defaultInput, usagePattern: "balanced" },
      { ...NO_STRESS, outage: true }
    );
    const outage24h = calculateScenario(
      months,
      { ...defaultInput, usagePattern: "24h" },
      { ...NO_STRESS, outage: true }
    );

    // 24h は nightOr24hExtra が乗るため、影響月の市場連動が追加上昇
    // ただし usageFactor も異なるので、倍率比で検証
    const ratio24h = outage24h.monthlyBValues[0] / outage24h.monthlyAValues[0];
    const ratioBalanced = outageBalanced.monthlyBValues[0] / outageBalanced.monthlyAValues[0];
    expect(ratio24h).toBeGreaterThan(ratioBalanced);
  });

  it("猛暑×季節偏重は通常猛暑より市場連動が高い", () => {
    const heatBalanced = calculateScenario(
      months,
      { ...defaultInput, usagePattern: "balanced" },
      { ...NO_STRESS, heatwave: true }
    );
    const heatSeasonal = calculateScenario(
      months,
      { ...defaultInput, usagePattern: "seasonal-heavy" },
      { ...NO_STRESS, heatwave: true }
    );

    // seasonal-heavy の夏月は seasonalHeavyExtra が追加乗算
    const ratioSeasonal = heatSeasonal.monthlyBValues[3] / heatSeasonal.monthlyAValues[3];
    const ratioBalanced = heatBalanced.monthlyBValues[3] / heatBalanced.monthlyAValues[3];
    expect(ratioSeasonal).toBeGreaterThan(ratioBalanced);
  });

  it("複数ストレスの重ね掛けで単独より高くなる", () => {
    const heatOnly = calculateScenario(months, defaultInput, { ...NO_STRESS, heatwave: true });
    const fuelOnly = calculateScenario(months, defaultInput, { ...NO_STRESS, fuelPrice: true });
    const both = calculateScenario(months, defaultInput, { ...NO_STRESS, heatwave: true, fuelPrice: true });

    expect(both.totalB).toBeGreaterThan(heatOnly.totalB);
    expect(both.totalB).toBeGreaterThan(fuelOnly.totalB);
  });

  it("全ストレス同時でも計算がクラッシュしない", () => {
    const allStress: StressFlags = {
      heatwave: true,
      coldWave: true,
      fuelPrice: true,
      geopolitical: true,
      outage: true,
    };
    const result = calculateScenario(months, defaultInput, allStress);
    expect(result.totalA).toBeGreaterThan(0);
    expect(result.totalB).toBeGreaterThan(0);
    expect(result.lineA).toHaveLength(12);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — ストレス倍率の定数値テスト                       */
/* ------------------------------------------------------------------ */
describe("stressMultipliers — 監査済み定数値", () => {
  it("猛暑: fixed=1.06, market=1.35, seasonalHeavyExtra=1.06", () => {
    expect(stressMultipliers.heatwave.fixed).toBe(1.06);
    expect(stressMultipliers.heatwave.market).toBe(1.35);
    expect(stressMultipliers.heatwave.seasonalHeavyExtra).toBe(1.06);
  });

  it("寒波: fixed=1.07, market=1.55, seasonalHeavyExtra=1.06", () => {
    expect(stressMultipliers.coldWave.fixed).toBe(1.07);
    expect(stressMultipliers.coldWave.market).toBe(1.55);
    expect(stressMultipliers.coldWave.seasonalHeavyExtra).toBe(1.06);
  });

  it("燃料費: fixed=1.18, market=1.35", () => {
    expect(stressMultipliers.fuelPrice.fixed).toBe(1.18);
    expect(stressMultipliers.fuelPrice.market).toBe(1.35);
  });

  it("地政学: fixed=1.18, market=1.52", () => {
    expect(stressMultipliers.geopolitical.fixed).toBe(1.18);
    expect(stressMultipliers.geopolitical.market).toBe(1.52);
  });

  it("停電・影響月: fixed=1.08, market=1.3, nightOr24hExtra=1.06", () => {
    expect(stressMultipliers.outage.impactMonth.fixed).toBe(1.08);
    expect(stressMultipliers.outage.impactMonth.market).toBe(1.3);
    expect(stressMultipliers.outage.impactMonth.nightOr24hExtra).toBe(1.06);
  });

  it("停電・余波月: fixed=1.03, market=1.1", () => {
    expect(stressMultipliers.outage.aftershockMonth.fixed).toBe(1.03);
    expect(stressMultipliers.outage.aftershockMonth.market).toBe(1.1);
  });
});

/* ------------------------------------------------------------------ */
/*  calculateScenario — エッジケース                                   */
/* ------------------------------------------------------------------ */
describe("calculateScenario — エッジケース", () => {
  const months = getOrderedMonths(4);

  it("コスト0でも計算できる", () => {
    const zeroInput: SimulationInput = {
      ...defaultInput,
      springCost: 0,
      summerCost: 0,
      autumnCost: 0,
      winterCost: 0,
    };
    const result = calculateScenario(months, zeroInput, NO_STRESS);
    expect(result.totalA).toBe(0);
    expect(result.totalB).toBe(0);
  });

  it("空文字の入力はデフォルト値にフォールバックする", () => {
    const emptyInput: SimulationInput = {
      contractType: "",
      region: "",
      springCost: "",
      summerCost: "",
      autumnCost: "",
      winterCost: "",
      startMonth: "",
      buildingType: "",
      usagePattern: "",
      floorArea: "",
      stress: { ...NO_STRESS },
    };
    const result = calculateScenario(months, emptyInput, NO_STRESS);
    expect(result.totalA).toBe(0);
    expect(result.totalB).toBe(0);
    expect(result.lineA).toHaveLength(12);
  });

  it("負のコスト値は0にクランプされる", () => {
    const negInput: SimulationInput = {
      ...defaultInput,
      springCost: -100,
      summerCost: -200,
      autumnCost: -50,
      winterCost: -150,
    };
    const result = calculateScenario(months, negInput, NO_STRESS);
    expect(result.totalA).toBe(0);
    expect(result.totalB).toBe(0);
  });
});

/* ------------------------------------------------------------------ */
/*  buildResultCommentary                                             */
/* ------------------------------------------------------------------ */
describe("buildResultCommentary", () => {
  const baseResult: ScenarioResult = {
    lineA: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
    lineB: [90, 180, 270, 360, 450, 540, 630, 720, 810, 900, 990, 1080],
    monthlyAValues: Array(12).fill(100),
    monthlyBValues: Array(12).fill(90),
    totalA: 1200,
    totalB: 1080,
  };

  it("リスク要因未選択で平時コメントが返る", () => {
    const comments = buildResultCommentary(baseResult, baseResult, []);
    expect(comments.length).toBeGreaterThanOrEqual(2);
    expect(comments[0]).toContain("リスク要因が未選択");
  });

  it("市場連動 > 固定のとき「高く」を含む", () => {
    const expensive: ScenarioResult = {
      ...baseResult,
      totalB: 1500,
    };
    const comments = buildResultCommentary(expensive, baseResult, ["猛暑"]);
    const joined = comments.join(" ");
    expect(joined).toContain("高く");
  });

  it("市場連動 < 固定のとき「低く」を含む", () => {
    const comments = buildResultCommentary(baseResult, baseResult, ["猛暑"]);
    const joined = comments.join(" ");
    expect(joined).toContain("低く");
  });

  it("選択要因名がコメントに含まれる", () => {
    const comments = buildResultCommentary(baseResult, baseResult, ["猛暑", "燃料高騰"]);
    expect(comments[0]).toContain("猛暑");
    expect(comments[0]).toContain("燃料高騰");
  });
});
