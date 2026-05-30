import type {
  BuildingType,
  ContractType,
  Region,
  UsagePattern,
} from "../simulator/types";

export type { BuildingType, ContractType, Region, UsagePattern };

export type ScaleType = "small" | "medium" | "large";

export type IndustryCalculatorInput = {
  buildingType: BuildingType;
  contractType: ContractType;
  region: Region;
  scaleType: ScaleType;
  monthlyKwh?: number;
  currentAnnualCost?: number;
  floorArea?: number;
};

export type AnnualCostRange = {
  median: number;
  low: number;
  high: number;
};

export type BenchmarkComparison = {
  selfEstimatedAnnualCost: number;
  industryMedianAnnualCost: number;
  industryTop25PercentAnnualCost: number;
  deviationFromMedianPercent: number;
  deviationFromTop25PercentPercent: number;
};

export type ReductionCaseKind =
  | "contractReview"
  | "energySavingInvestment"
  | "renewableProcurement";

export type ReductionCase = {
  kind: ReductionCaseKind;
  label: string;
  description: string;
  reductionRateLow: number;
  reductionRateHigh: number;
  reductionRateMedian: number;
  annualSavingsLow: number;
  annualSavingsMedian: number;
  annualSavingsHigh: number;
  paybackNote: string;
};

export type ReductionPotential = {
  contractReview: ReductionCase;
  energySavingInvestment: ReductionCase;
  renewableProcurement: ReductionCase;
};

export type UnitPriceBreakdown = {
  baseUnitPrice: number;
  buildingFactor: number;
  contractFactor: number;
  regionFactor: number;
  fuelAdjustment: number;
  renewableSurcharge: number;
  baseChargeEquivalent: number;
  totalUnitPrice: number;
};

export type IndustryCalculatorResult = {
  inputs: {
    buildingType: BuildingType;
    contractType: ContractType;
    region: Region;
    scaleType: ScaleType;
    monthlyKwh: number;
    annualKwh: number;
  };
  unitPrice: UnitPriceBreakdown;
  estimatedAnnualCost: AnnualCostRange;
  benchmark: BenchmarkComparison;
  reductionPotential: ReductionPotential;
  disclaimer: string;
};
