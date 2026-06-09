import { calculateIndustryElectricity } from "./industryElectricityCalc";
import {
  PRICE_RANGE_HIGH_MULTIPLIER,
  PRICE_RANGE_LOW_MULTIPLIER,
} from "./unitPriceMatrix";
import {
  SCENARIO_DELTAS,
  type ScenarioDelta,
  type ScenarioId,
} from "./scenarioMatrix";
import type {
  AnnualCostRange,
  IndustryCalculatorInput,
  UnitPriceBreakdown,
} from "./types";

/**
 * D-2 シナリオ別シミュレーション計算エンジン。
 *
 * 設計方針:
 * - D-1（業種別電気代計算機）の `calculateIndustryElectricity` をそのまま再利用し、
 *   その出力（単価内訳・年間kWh・年間額レンジ・disclaimer）を baseline として用いる。
 *   → ★baseline シナリオ（Δ=0）の単価・年間額が D-1 と完全一致することを構造的に保証する。
 * - 各シナリオは D-1 の総単価に「加算項のΔ」だけを重ねる（係数積 energyChargePart は不変）。
 *     scenarioTotalUnitPrice = D-1総単価
 *                            + Δ燃調 + Δ賦課金 + 市場プレミアム − 補助金緩和
 * - 年間額レンジ倍率（±8%）は D-1 と同一の PRICE_RANGE_*_MULTIPLIER を流用。
 *
 * 依存方向は lib→app を維持（本モジュールは src/app を import しない）。
 * D-1エンジン（unitPriceMatrix.ts / industryElectricityCalc.ts）は不変・再利用のみ。
 *
 * ★中立性: 特定の電力会社・契約形態の優劣評価は行わない。各シナリオは「起きた場合」の
 * 試算であり予測ではない旨を disclaimer に明示する。
 */

/** シナリオ適用後の単価内訳（D-1内訳にシナリオΔを加えたもの）。 */
export type ScenarioUnitPriceBreakdown = UnitPriceBreakdown & {
  /** シナリオΔ: 燃料費調整の増減（円/kWh） */
  deltaFuelAdjustment: number;
  /** シナリオΔ: 再エネ賦課金の増減（円/kWh・将来は「想定」） */
  deltaSurcharge: number;
  /** シナリオΔ: 市場連動/需給ひっ迫プレミアム（円/kWh） */
  marketPremium: number;
  /** シナリオΔ: 激変緩和補助による低下分（円/kWh・減算項） */
  subsidyReliefDelta: number;
  /** 燃料費調整 + Δ燃調（表示用の実効値） */
  effectiveFuelAdjustment: number;
  /** 再エネ賦課金 + Δ賦課金（表示用の実効値） */
  effectiveRenewableSurcharge: number;
  /** シナリオ適用後の総単価（円/kWh） */
  scenarioTotalUnitPrice: number;
};

/** 1シナリオ分の計算結果。 */
export type ScenarioCostResult = {
  id: ScenarioId;
  label: string;
  description: string;
  sourceNote: string;
  unitPrice: ScenarioUnitPriceBreakdown;
  annualKwh: number;
  /** 推定年間電気代（中央値±8%） */
  estimatedAnnualCost: AnnualCostRange;
  /** 対 baseline 上振れ率（％・小数1桁） */
  upliftVsBaselinePercent: number;
  /** 対 baseline 差額（中央値・円） */
  annualCostDeltaVsBaseline: number;
};

/** シナリオ別シミュレーション全体の結果。 */
export type ScenarioSimulationResult = {
  inputs: {
    buildingType: IndustryCalculatorInput["buildingType"];
    contractType: IndustryCalculatorInput["contractType"];
    region: IndustryCalculatorInput["region"];
    scaleType: IndustryCalculatorInput["scaleType"];
    monthlyKwh: number;
    annualKwh: number;
  };
  /** baseline（=D-1）の年間額レンジ。各シナリオの基準。 */
  baselineAnnualCost: AnnualCostRange;
  /** baseline を含む4シナリオの結果（SCENARIO_DELTAS の順）。 */
  scenarios: ScenarioCostResult[];
  disclaimer: string;
};

const round = (value: number): number => Math.round(value);
const round1 = (value: number): number => Math.round(value * 10) / 10;

/**
 * D-1 の disclaimer に「シナリオは"起きた場合"の試算であり予測ではない」旨を追記した中立注記。
 * 賦課金の確定値リテラルは prose に直書きせず「2026年度の確定単価（基準）」と表現する
 * （surcharge-guard が誤検出しない・SSOT改定にも追従する）。
 */
const SCENARIO_DISCLAIMER_SUFFIX =
  "本シミュレーションの各シナリオは「その状況が起きた場合」の試算であり、特定の将来を予測・断定するものではありません。" +
  "各シナリオの変動幅（Δ）は資源エネルギー庁・OCCTO・各社の燃料費調整実績・各種告示等の公開情報に基づく目安レンジです。" +
  "再エネ賦課金は2026年度の確定単価を基準（標準シナリオはΔ0）とし、将来の上昇はあくまで「想定」です。";

/**
 * D-1 総単価にシナリオΔを重ねた単価内訳を組み立てる。
 * energyChargePart（係数積）は不変。加算項のΔのみを反映する。
 */
const buildScenarioUnitPriceBreakdown = (
  base: UnitPriceBreakdown,
  delta: ScenarioDelta
): ScenarioUnitPriceBreakdown => {
  const effectiveFuelAdjustment = base.fuelAdjustment + delta.deltaFuelAdjustment;
  const effectiveRenewableSurcharge =
    base.renewableSurcharge + delta.deltaSurcharge;
  const scenarioTotalUnitPrice =
    base.totalUnitPrice +
    delta.deltaFuelAdjustment +
    delta.deltaSurcharge +
    delta.marketPremium -
    delta.subsidyReliefDelta;

  return {
    ...base,
    deltaFuelAdjustment: delta.deltaFuelAdjustment,
    deltaSurcharge: delta.deltaSurcharge,
    marketPremium: delta.marketPremium,
    subsidyReliefDelta: delta.subsidyReliefDelta,
    effectiveFuelAdjustment,
    effectiveRenewableSurcharge,
    scenarioTotalUnitPrice,
  };
};

/**
 * シナリオ別シミュレーションの本体。
 * baseline 含む4シナリオの結果配列（SCENARIO_DELTAS の順）を返す。
 *
 * ★baseline（Δ=0）の単価・年間額は D-1 `calculateIndustryElectricity` と完全一致する。
 */
export const calculateScenarioSimulation = (
  input: IndustryCalculatorInput
): ScenarioSimulationResult => {
  // D-1 をそのまま再利用（単価内訳・年間kWh・年間額・disclaimer を baseline として取得）。
  const d1 = calculateIndustryElectricity(input);
  const base = d1.unitPrice;
  const annualKwh = d1.inputs.annualKwh;
  const baselineAnnualCost = d1.estimatedAnnualCost;
  const baselineMedian = baselineAnnualCost.median;

  const scenarios: ScenarioCostResult[] = SCENARIO_DELTAS.map((delta) => {
    const unitPrice = buildScenarioUnitPriceBreakdown(base, delta);
    // D-1 と同一アルゴリズム: low/high は丸め前の median から算出する。
    // これにより baseline（Δ=0）のレンジが D-1 と1円単位まで完全一致する。
    const rawMedian = annualKwh * unitPrice.scenarioTotalUnitPrice;
    const median = round(rawMedian);
    const estimatedAnnualCost: AnnualCostRange = {
      median,
      low: round(rawMedian * PRICE_RANGE_LOW_MULTIPLIER),
      high: round(rawMedian * PRICE_RANGE_HIGH_MULTIPLIER),
    };
    const upliftVsBaselinePercent =
      baselineMedian > 0
        ? round1(((median - baselineMedian) / baselineMedian) * 100)
        : 0;

    return {
      id: delta.id,
      label: delta.label,
      description: delta.description,
      sourceNote: delta.sourceNote,
      unitPrice,
      annualKwh,
      estimatedAnnualCost,
      upliftVsBaselinePercent,
      annualCostDeltaVsBaseline: median - baselineMedian,
    };
  });

  return {
    inputs: {
      buildingType: d1.inputs.buildingType,
      contractType: d1.inputs.contractType,
      region: d1.inputs.region,
      scaleType: d1.inputs.scaleType,
      monthlyKwh: d1.inputs.monthlyKwh,
      annualKwh,
    },
    baselineAnnualCost,
    scenarios,
    disclaimer: `${d1.disclaimer} ${SCENARIO_DISCLAIMER_SUFFIX}`,
  };
};
