export type RiskScoreInput = {
  contractType?: string;
  region?: string;
  springCost: number;
  summerCost: number;
  autumnCost: number;
  winterCost: number;
  buildingType?: string;
  usagePattern: string;
  floorArea: number;
};

export type RiskScoreBreakdown = {
  seasonalVariationScore: number;
  peakScore: number;
  usagePatternScore: number;
  unitCostScore: number;
  contractTypeScore: number;
  regionScore: number;
  buildingTypeScore: number;
};

export type RiskScoreResult = {
  score: number;
  label: string;
  breakdown: RiskScoreBreakdown;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const safeNumber = (value: number) => Math.max(0, Number(value) || 0);

const getPeakScore = (peakRate: number): number => {
  if (peakRate < 0.05) return 1;
  if (peakRate < 0.1) return 3;
  if (peakRate < 0.15) return 5;
  if (peakRate < 0.2) return 7;
  if (peakRate < 0.25) return 9;
  if (peakRate < 0.3) return 11;
  if (peakRate < 0.35) return 13;
  if (peakRate < 0.4) return 15;
  if (peakRate < 0.45) return 17;
  if (peakRate < 0.5) return 19;
  return 20;
};

const getUsagePatternScore = (usagePattern: string): number => {
  const scoreMap: Record<string, number> = {
    night: 5,
    balanced: 8,
    "weekend-busy": 10,
    daytime: 12,
    "seasonal-heavy": 11,
    "24h": 15,
  };
  return scoreMap[usagePattern] ?? 8;
};

const getUnitCostScore = (unitCostPerSqm: number): number => {
  if (unitCostPerSqm < 100) return 1;
  if (unitCostPerSqm < 150) return 2;
  if (unitCostPerSqm < 200) return 3;
  if (unitCostPerSqm < 250) return 4;
  if (unitCostPerSqm < 300) return 5;
  if (unitCostPerSqm < 350) return 6;
  if (unitCostPerSqm < 400) return 7;
  if (unitCostPerSqm < 450) return 8;
  if (unitCostPerSqm < 500) return 9;
  return 10;
};

export const getRiskLabel = (score: number): string => {
  if (score <= 24) return "低い";
  if (score <= 49) return "やや低い";
  if (score <= 69) return "注意";
  if (score <= 84) return "高い";
  return "非常に高い";
};

const getContractTypeScore = (contractType?: string): number => {
  const normalized = (contractType ?? "").toLowerCase().trim();
  const scoreMap: Record<string, number> = {
    low: 8,
    "low-voltage": 8,
    "低圧法人": 8,
    high: 5,
    "high-voltage": 5,
    "高圧": 5,
    special: 3,
    "extra-high-voltage": 3,
    "特別高圧": 3,
  };
  return scoreMap[normalized] ?? 5;
};

const getRegionScore = (region?: string): number => {
  const normalized = (region ?? "").toLowerCase().trim();
  const scoreMap: Record<string, number> = {
    hokkaido: 8,
    "北海道": 8,
    kyushu: 7,
    "九州": 7,
    shikoku: 7,
    "四国": 7,
    okinawa: 7,
    "沖縄": 7,
    chugoku: 6,
    "中国": 6,
    shutoken: 6,
    "首都圏": 6,
    tohoku: 6,
    "東北": 6,
    "kita-kanto": 6,
    "北関東": 6,
    kansai: 5,
    "関西": 5,
    chubu: 5,
    "中部": 5,
    hokuriku: 5,
    "北陸": 5,
  };
  return scoreMap[normalized] ?? 6;
};

const getBuildingTypeScore = (buildingType?: string): number => {
  const normalized = (buildingType ?? "").toLowerCase().trim();
  const scoreMap: Record<string, number> = {
    office: 2,
    retail: 4,
    restaurant: 4,
    factory: 5,
    welfare: 5,
    hotel: 4,
    warehouse: 3,
    school: 3,
    datacenter: 5,
    public: 3,
  };
  return scoreMap[normalized] ?? 3;
};

export const calculateRiskScore = (params: RiskScoreInput): RiskScoreResult => {
  const spring = safeNumber(params.springCost);
  const summer = safeNumber(params.summerCost);
  const autumn = safeNumber(params.autumnCost);
  const winter = safeNumber(params.winterCost);
  const floorAreaRaw = Number(params.floorArea);
  const floorArea = Number.isFinite(floorAreaRaw) && floorAreaRaw > 0 ? floorAreaRaw : 1;

  const seasonalCosts = [spring, summer, autumn, winter];
  const averageCost = seasonalCosts.reduce((sum, value) => sum + value, 0) / 4;
  const maxCost = Math.max(...seasonalCosts);
  const minCost = Math.min(...seasonalCosts);

  const variationRate = averageCost > 0 ? (maxCost - minCost) / averageCost : 0;
  const seasonalVariationScore = clamp(Math.min(32, Math.round(variationRate * 60)), 0, 32);

  const peakRate = averageCost > 0 ? maxCost / averageCost - 1 : 0;
  const peakScore = getPeakScore(peakRate);

  const usagePatternScore = getUsagePatternScore(params.usagePattern);

  const averageCostYen = averageCost * 10000;
  const unitCostPerSqm = averageCostYen / floorArea;
  const unitCostScore = getUnitCostScore(unitCostPerSqm);
  const contractTypeScore = getContractTypeScore(params.contractType);
  const regionScore = getRegionScore(params.region);
  const buildingTypeScore = getBuildingTypeScore(params.buildingType);

  const rawScore =
    seasonalVariationScore +
    peakScore +
    usagePatternScore +
    unitCostScore +
    contractTypeScore +
    regionScore +
    buildingTypeScore;
  const score = clamp(Math.round(rawScore), 0, 100);
  const label = getRiskLabel(score);

  return {
    score,
    label,
    breakdown: {
      seasonalVariationScore,
      peakScore,
      usagePatternScore,
      unitCostScore,
      contractTypeScore,
      regionScore,
      buildingTypeScore,
    },
  };
};
