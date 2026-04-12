// エリア別電源構成データ（30分値集計結果）
// Server ComponentとClient Componentの両方からimport可能

export type AreaShareRow = {
  area: string;
  nuclear: number;
  lng: number;
  coal: number;
  oil: number;
  otherThermal: number;
  hydro: number;
  geothermal: number;
  biomass: number;
  solar: number;
  wind: number;
};

export const AREA_SUPPLY_DATA: AreaShareRow[] = [
  { area: "北海道", nuclear: 0.0, lng: 10.3, coal: 37.8, oil: 5.5, otherThermal: 5.1, hydro: 13.9, geothermal: 0.3, biomass: 6.6, solar: 10.5, wind: 9.9 },
  { area: "東北", nuclear: 3.0, lng: 28.3, coal: 36.0, oil: 0.4, otherThermal: 2.3, hydro: 10.0, geothermal: 1.0, biomass: 5.1, solar: 9.5, wind: 4.5 },
  { area: "東京", nuclear: 0.2, lng: 55.7, coal: 20.2, oil: 1.7, otherThermal: 4.8, hydro: 4.7, geothermal: 0.0, biomass: 1.6, solar: 10.7, wind: 0.4 },
  { area: "中部", nuclear: 0.0, lng: 49.6, coal: 22.3, oil: 0.0, otherThermal: 2.1, hydro: 9.0, geothermal: 0.0, biomass: 2.8, solar: 13.5, wind: 0.6 },
  { area: "北陸", nuclear: 0.0, lng: 6.7, coal: 53.8, oil: 0.8, otherThermal: 2.7, hydro: 26.9, geothermal: 0.0, biomass: 2.6, solar: 5.9, wind: 0.6 },
  { area: "関西", nuclear: 34.8, lng: 27.1, coal: 16.5, oil: 0.4, otherThermal: 3.2, hydro: 9.0, geothermal: 0.0, biomass: 1.7, solar: 7.0, wind: 0.3 },
  { area: "中国", nuclear: 6.4, lng: 12.5, coal: 43.9, oil: 2.4, otherThermal: 8.7, hydro: 5.4, geothermal: 0.0, biomass: 4.1, solar: 15.8, wind: 0.7 },
  { area: "四国", nuclear: 17.1, lng: 6.1, coal: 45.5, oil: 1.0, otherThermal: 4.0, hydro: 7.9, geothermal: 0.0, biomass: 5.1, solar: 11.9, wind: 1.7 },
  { area: "九州", nuclear: 29.5, lng: 11.8, coal: 30.1, oil: 0.9, otherThermal: 3.1, hydro: 3.5, geothermal: 1.3, biomass: 5.6, solar: 13.3, wind: 0.9 },
];

export type HourlyRow = {
  hour: number;
  demand: number;
  netDemand: number;
  solar: number;
  wind: number;
};

export const HOURLY_DATA: HourlyRow[] = [
  { hour: 0, demand: 9251, netDemand: 9083, solar: 0, wind: 168 },
  { hour: 1, demand: 8937, netDemand: 8770, solar: 0, wind: 167 },
  { hour: 2, demand: 8985, netDemand: 8818, solar: 0, wind: 167 },
  { hour: 3, demand: 9176, netDemand: 9009, solar: 0, wind: 167 },
  { hour: 4, demand: 9306, netDemand: 9137, solar: 3, wind: 166 },
  { hour: 5, demand: 9462, netDemand: 9234, solar: 65, wind: 164 },
  { hour: 6, demand: 9835, netDemand: 9301, solar: 376, wind: 157 },
  { hour: 7, demand: 10499, netDemand: 9216, solar: 1132, wind: 151 },
  { hour: 8, demand: 11522, netDemand: 9192, solar: 2181, wind: 149 },
  { hour: 9, demand: 12152, netDemand: 8894, solar: 3109, wind: 150 },
  { hour: 10, demand: 12209, netDemand: 8346, solar: 3711, wind: 152 },
  { hour: 11, demand: 12211, netDemand: 8109, solar: 3949, wind: 154 },
  { hour: 12, demand: 11829, netDemand: 7819, solar: 3852, wind: 158 },
  { hour: 13, demand: 12079, netDemand: 8436, solar: 3480, wind: 163 },
  { hour: 14, demand: 12041, netDemand: 9071, solar: 2803, wind: 167 },
  { hour: 15, demand: 11989, netDemand: 9962, solar: 1862, wind: 165 },
  { hour: 16, demand: 12119, netDemand: 11060, solar: 895, wind: 164 },
  { hour: 17, demand: 12126, netDemand: 11697, solar: 264, wind: 164 },
  { hour: 18, demand: 12123, netDemand: 11923, solar: 33, wind: 167 },
  { hour: 19, demand: 11842, netDemand: 11675, solar: 0, wind: 166 },
  { hour: 20, demand: 11432, netDemand: 11268, solar: 0, wind: 164 },
  { hour: 21, demand: 10915, netDemand: 10751, solar: 0, wind: 163 },
  { hour: 22, demand: 10358, netDemand: 10196, solar: 0, wind: 163 },
  { hour: 23, demand: 9874, netDemand: 9708, solar: 0, wind: 166 },
];

export type FyTrendRow = {
  fy: string;
  demand: number;
  thermal: number;
  renewable: number;
  nuclear: number;
  solar: number;
  wind: number;
};

export const FY_TREND: FyTrendRow[] = [
  { fy: "FY2023", demand: 9631, thermal: 6410, renewable: 2512, nuclear: 1880, solar: 1129, wind: 178 },
  { fy: "FY2024", demand: 11032, thermal: 7475, renewable: 2492, nuclear: 861, solar: 1128, wind: 153 },
  { fy: "FY2025", demand: 11002, thermal: 7286, renewable: 2609, nuclear: 961, solar: 1184, wind: 168 },
  { fy: "FY2026", demand: 10254, thermal: 5786, renewable: 2836, nuclear: 1326, solar: 1224, wind: 150 },
];

export type FlowRow = {
  area: string;
  avg: number;
  max: number;
  min: number;
  role: string;
};

export const FLOW_DATA: FlowRow[] = [
  { area: "北海道", avg: -125, max: 498, min: -763, role: "輸出" },
  { area: "東北", avg: -4041, max: -82, min: -6666, role: "輸出" },
  { area: "東京", avg: 4456, max: 7788, min: 217, role: "輸入" },
  { area: "中部", avg: 1494, max: 4288, min: -2488, role: "輸入" },
  { area: "北陸", avg: -174, max: 1184, min: -1884, role: "輸出" },
  { area: "関西", avg: 676, max: 6654, min: -3720, role: "輸入" },
  { area: "中国", avg: 123, max: 2726, min: -3238, role: "輸入" },
  { area: "四国", avg: -1030, max: 558, min: -2348, role: "輸出" },
  { area: "九州", avg: -1637, max: 224, min: -3048, role: "輸出" },
];

export type PumpedRow = {
  area: string;
  chargingPct: number;
  peakGen: number;
  peakCharge: number;
};

export const PUMPED_DATA: PumpedRow[] = [
  { area: "北海道", chargingPct: 17.3, peakGen: 581, peakCharge: -783 },
  { area: "東北", chargingPct: 9.6, peakGen: 438, peakCharge: -448 },
  { area: "東京", chargingPct: 33.4, peakGen: 7813, peakCharge: -7456 },
  { area: "中部", chargingPct: 31.9, peakGen: 3624, peakCharge: -3754 },
  { area: "北陸", chargingPct: 2.8, peakGen: 154, peakCharge: -124 },
  { area: "関西", chargingPct: 47.7, peakGen: 3231, peakCharge: -3786 },
  { area: "中国", chargingPct: 36.4, peakGen: 1738, peakCharge: -2021 },
  { area: "四国", chargingPct: 17.6, peakGen: 622, peakCharge: -618 },
  { area: "九州", chargingPct: 28.0, peakGen: 2202, peakCharge: -2466 },
];
