export type ContractType = "low" | "high" | "special";

export type Region =
  | "hokkaido"
  | "tohoku"
  | "kita-kanto"
  | "shutoken"
  | "hokuriku"
  | "chubu"
  | "kansai"
  | "chugoku"
  | "shikoku"
  | "kyushu"
  | "okinawa";

export type BuildingType =
  | "office"
  | "retail"
  | "restaurant"
  | "factory"
  | "welfare"
  | "hotel"
  | "warehouse"
  | "school"
  | "datacenter"
  | "public";

export type UsagePattern =
  | "balanced"
  | "daytime"
  | "night"
  | "24h"
  | "weekend-busy"
  | "seasonal-heavy";

export type SeasonType = "spring" | "summer" | "autumn" | "winter";

export type StressFlags = {
  heatwave: boolean;
  coldWave: boolean;
  fuelPrice: boolean;
  geopolitical: boolean;
  outage: boolean;
};

export type SimulationInput = {
  contractType: ContractType | "";
  region: Region | "";
  springCost: number | "";
  summerCost: number | "";
  autumnCost: number | "";
  winterCost: number | "";
  startMonth: number | "";
  buildingType: BuildingType | "";
  usagePattern: UsagePattern | "";
  floorArea: number | "";
  stress: StressFlags;
};

export type ScenarioResult = {
  lineA: number[];
  lineB: number[];
  monthlyAValues: number[];
  monthlyBValues: number[];
  totalA: number;
  totalB: number;
};
