import type {
  BuildingType,
  ContractType,
  Region,
  SeasonType,
  UsagePattern,
} from "./types";

export const monthNames = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
];

export const contractFactorMap: Record<ContractType, number> = {
  low: 1.03,
  high: 1.0,
  special: 0.96,
};

export const regionFactorMap: Record<Region, number> = {
  hokkaido: 1.04,
  tohoku: 1.02,
  "kita-kanto": 1.01,
  shutoken: 1.0,
  hokuriku: 1.01,
  chubu: 1.0,
  kansai: 0.99,
  chugoku: 0.99,
  shikoku: 0.98,
  kyushu: 0.98,
  okinawa: 1.03,
};

export const regionSeasonMap: Record<Region, Record<SeasonType, number>> = {
  hokkaido: { spring: 1.0, summer: 0.96, autumn: 1.0, winter: 1.18 },
  tohoku: { spring: 1.0, summer: 0.98, autumn: 1.0, winter: 1.12 },
  "kita-kanto": { spring: 1.0, summer: 1.03, autumn: 1.0, winter: 1.04 },
  shutoken: { spring: 1.0, summer: 1.06, autumn: 1.0, winter: 1.02 },
  hokuriku: { spring: 1.0, summer: 0.99, autumn: 1.0, winter: 1.08 },
  chubu: { spring: 1.0, summer: 1.02, autumn: 1.0, winter: 1.03 },
  kansai: { spring: 1.0, summer: 1.04, autumn: 1.0, winter: 0.99 },
  chugoku: { spring: 1.0, summer: 1.02, autumn: 1.0, winter: 0.99 },
  shikoku: { spring: 1.0, summer: 1.04, autumn: 1.0, winter: 0.97 },
  kyushu: { spring: 1.0, summer: 1.05, autumn: 1.0, winter: 0.97 },
  okinawa: { spring: 1.03, summer: 1.14, autumn: 1.03, winter: 0.9 },
};

export const buildingFactorMap: Record<BuildingType, number> = {
  office: 1.0,
  retail: 1.07,
  restaurant: 1.1,
  factory: 1.12,
  welfare: 1.09,
  hotel: 1.11,
  warehouse: 0.96,
  school: 0.94,
  datacenter: 1.2,
  public: 1.02,
};

export const usageFactorMap: Record<UsagePattern, number> = {
  balanced: 1.03,
  daytime: 1.0,
  night: 1.07,
  "24h": 1.1,
  "weekend-busy": 1.04,
  "seasonal-heavy": 1.09,
};

// Stress multipliers calibrated against JEPX history and 2022 fuel-cost crisis.
// Update 2026-04-19: fuelPrice fixed/market and coldWave market raised per audit
// (.ai-team/STRESS_MULTIPLIER_AUDIT_RESULT.md) to reflect 2022-23 reality.
export const stressMultipliers = {
  heatwave: { fixed: 1.06, market: 1.35, seasonalHeavyExtra: 1.06 },
  coldWave: { fixed: 1.07, market: 1.55, seasonalHeavyExtra: 1.06 },
  fuelPrice: { fixed: 1.18, market: 1.35 },
  geopolitical: { fixed: 1.18, market: 1.52 },
  outage: {
    impactMonth: { fixed: 1.08, market: 1.3, nightOr24hExtra: 1.06 },
    aftershockMonth: { fixed: 1.03, market: 1.1 },
  },
} as const;

export const fixedPlanBaseMultiplier = 1.08;

export const marketSeasonalWave = {
  summer: 0.98,
  winter: 1.02,
  shoulderAdjustment: 1.02,
  other: 0.88,
} as const;
