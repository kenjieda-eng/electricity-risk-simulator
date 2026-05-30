import type {
  AnnualCostRange,
  BenchmarkComparison,
  IndustryCalculatorInput,
  IndustryCalculatorResult,
  ReductionCase,
  ReductionCaseKind,
  ReductionPotential,
  UnitPriceBreakdown,
} from "./types";
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
} from "./unitPriceMatrix";

const DEFAULT_DISCLAIMER =
  "本試算はあくまで目安です。実際の電気代は契約条件・使用パターン・燃料費調整・各種制度負担により変動します。具体的な単価・条件は契約書および個別見積で確認してください。本計算機は中立的立場で判断材料を提供するものであり、特定の電力会社・契約形態を推奨するものではありません。契約判断は専門家への相談を推奨します。";

const round = (value: number): number => Math.round(value);

const clampPositive = (value: number, fallback: number): number => {
  if (!Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

/**
 * 単価計算（円/kWh）の内訳を組み立てる。
 * 公式: totalUnitPrice = baseUnitPrice × buildingFactor × contractFactor × regionFactor
 *                       + fuelAdjustment + renewableSurcharge + baseChargeEquivalent
 *
 * buildingFactor は buildingBaseUnitPriceMap に既に組み込まれているため、ここでは1.0扱いで明示。
 * scaleFactor は基本電力量料金部分（規模割引）に乗じる。
 */
export const buildUnitPriceBreakdown = (
  input: IndustryCalculatorInput
): UnitPriceBreakdown => {
  const baseUnitPrice = buildingBaseUnitPriceMap[input.buildingType];
  const buildingFactor = 1.0; // 業種特性は base にあらかじめ反映済
  const contractFactor = contractFactorMap[input.contractType];
  const regionFactor = regionFactorMap[input.region];
  const scaleFactor = scaleFactorMap[input.scaleType];

  const energyChargePart =
    baseUnitPrice * buildingFactor * contractFactor * regionFactor * scaleFactor;

  const fuelAdjustment = fuelAdjustmentByRegion[input.region];
  const renewableSurcharge = RENEWABLE_SURCHARGE_PER_KWH;
  const baseChargeEquivalent = baseChargeEquivalentMap[input.contractType];

  const totalUnitPrice =
    energyChargePart + fuelAdjustment + renewableSurcharge + baseChargeEquivalent;

  return {
    baseUnitPrice,
    buildingFactor,
    contractFactor,
    regionFactor,
    fuelAdjustment,
    renewableSurcharge,
    baseChargeEquivalent,
    totalUnitPrice,
  };
};

/**
 * 推定年間電気代の中央値・レンジを算出。
 * レンジ: median ± 8%。
 */
export const calculateAnnualElectricityCost = (
  input: IndustryCalculatorInput
): { unitPrice: UnitPriceBreakdown; annualKwh: number; range: AnnualCostRange } => {
  const monthlyKwh = clampPositive(
    Number(input.monthlyKwh ?? NaN),
    scaleDefaultMonthlyKwhMap[input.scaleType]
  );
  const annualKwh = monthlyKwh * 12;
  const unitPrice = buildUnitPriceBreakdown(input);

  const median = annualKwh * unitPrice.totalUnitPrice;
  const range: AnnualCostRange = {
    median: round(median),
    low: round(median * PRICE_RANGE_LOW_MULTIPLIER),
    high: round(median * PRICE_RANGE_HIGH_MULTIPLIER),
  };

  return { unitPrice, annualKwh, range };
};

/**
 * 業種ベンチマーク比較を組み立てる。
 * 業種中央値: 入力業種＋規模で、エリア・契約を全国基準(shutoken×high)に正規化した年間電気代。
 * 業種上位25%: 業種中央値 × 0.85（エネルギー効率上位の水準）。
 */
export const getBenchmarkComparison = (
  input: IndustryCalculatorInput,
  selfEstimatedAnnualCost: number,
  annualKwh: number
): BenchmarkComparison => {
  const normalizedInput: IndustryCalculatorInput = {
    ...input,
    region: "shutoken",
    contractType: "high",
  };
  const normalizedUnitPrice = buildUnitPriceBreakdown(normalizedInput);
  const industryMedianAnnualCost = round(
    annualKwh * normalizedUnitPrice.totalUnitPrice
  );
  const industryTop25PercentAnnualCost = round(
    industryMedianAnnualCost * INDUSTRY_BENCHMARK_TOP25_MULTIPLIER
  );

  const deviationFromMedianPercent =
    industryMedianAnnualCost > 0
      ? ((selfEstimatedAnnualCost - industryMedianAnnualCost) /
          industryMedianAnnualCost) *
        100
      : 0;
  const deviationFromTop25PercentPercent =
    industryTop25PercentAnnualCost > 0
      ? ((selfEstimatedAnnualCost - industryTop25PercentAnnualCost) /
          industryTop25PercentAnnualCost) *
        100
      : 0;

  return {
    selfEstimatedAnnualCost,
    industryMedianAnnualCost,
    industryTop25PercentAnnualCost,
    deviationFromMedianPercent: Math.round(deviationFromMedianPercent * 10) / 10,
    deviationFromTop25PercentPercent:
      Math.round(deviationFromTop25PercentPercent * 10) / 10,
  };
};

const REDUCTION_LABELS: Record<
  ReductionCaseKind,
  { label: string; description: string; paybackNote: string }
> = {
  contractReview: {
    label: "契約見直し（プラン・契約電力の最適化）",
    description:
      "契約区分・契約電力・燃調条件の見直し、相見積取得で5〜15%の単価削減余地があります。投資不要・短期で効果が出やすい第一の打ち手です。",
    paybackNote: "投資不要・即時効果（契約切替後の最初の検針月から反映）。",
  },
  energySavingInvestment: {
    label: "省エネ投資（LED・空調・コンプレッサー等）",
    description:
      "高効率設備への更新、デマンド制御、断熱改善等で10〜20%の使用量削減余地があります。補助金活用で投資回収を短縮できる場合があります。",
    paybackNote:
      "投資規模により回収目安は2〜5年。GX・CN投資促進税制・省エネ補助金の活用余地あり。",
  },
  renewableProcurement: {
    label: "再エネ調達（PPA・非化石証書・再エネメニュー）",
    description:
      "コーポレートPPA・再エネメニュー・非化石証書の活用で3〜10%の電気代削減（PPAプレミアム差し引き後）と RE100 対応の両立が可能です。",
    paybackNote:
      "長期契約（10〜20年）が中心。再エネプレミアム差し引き後の実質効果。",
  },
};

const buildReductionCase = (
  kind: ReductionCaseKind,
  baselineAnnualCost: number
): ReductionCase => {
  const rate = reductionRateMap[kind];
  const meta = REDUCTION_LABELS[kind];
  return {
    kind,
    label: meta.label,
    description: meta.description,
    reductionRateLow: rate.low,
    reductionRateMedian: rate.median,
    reductionRateHigh: rate.high,
    annualSavingsLow: round(baselineAnnualCost * rate.low),
    annualSavingsMedian: round(baselineAnnualCost * rate.median),
    annualSavingsHigh: round(baselineAnnualCost * rate.high),
    paybackNote: meta.paybackNote,
  };
};

/**
 * 削減余地3案を組み立てる。
 * 仕様書 §4 削減余地3案より。
 */
export const getReductionPotential = (
  baselineAnnualCost: number
): ReductionPotential => ({
  contractReview: buildReductionCase("contractReview", baselineAnnualCost),
  energySavingInvestment: buildReductionCase(
    "energySavingInvestment",
    baselineAnnualCost
  ),
  renewableProcurement: buildReductionCase(
    "renewableProcurement",
    baselineAnnualCost
  ),
});

/**
 * D-1 業種別電気代計算機の本体。
 * 入力 → 単価計算 → 年間電気代 → 業種ベンチマーク比較 → 削減余地3案 を組み立てる。
 *
 * パフォーマンス: 全計算をシンクロにクライアントサイドで実行（100ms以内目標）。
 *
 * 中立性: 本関数は特定の電力会社・契約形態の優劣評価を行わず、公開情報に基づく目安を提供する。
 */
export const calculateIndustryElectricity = (
  input: IndustryCalculatorInput
): IndustryCalculatorResult => {
  const { unitPrice, annualKwh, range } = calculateAnnualElectricityCost(input);
  const monthlyKwh = annualKwh / 12;

  const benchmark = getBenchmarkComparison(input, range.median, annualKwh);
  const reductionPotential = getReductionPotential(range.median);

  return {
    inputs: {
      buildingType: input.buildingType,
      contractType: input.contractType,
      region: input.region,
      scaleType: input.scaleType,
      monthlyKwh,
      annualKwh,
    },
    unitPrice,
    estimatedAnnualCost: range,
    benchmark,
    reductionPotential,
    disclaimer: DEFAULT_DISCLAIMER,
  };
};
