/**
 * JEPX（日本卸電力取引所）スポット市場データ
 *
 * 出典: JEPX 公表データ（2010年4月〜2026年4月）を集計
 * 期間: 281,088 レコード（30分コマ単位）
 */

// --- 年度別システムプライスサマリー ---
export type JepxYearlySummary = {
  fy: number;
  avg: number;
  median: number;
  min: number;
  max: number;
  stdDev: number;
  avgVolume: number;       // コマあたり平均約定量 (kWh)
  totalVolume: number;     // 年度合計約定量 (kWh)
  dailyVolatility: number; // 日次平均の標準偏差
  spikeCount: number;      // 50円/kWh超のコマ数
  spikeRatio: number;      // スパイク発生率 (%)
};

export const JEPX_YEARLY_SUMMARY: JepxYearlySummary[] = [
  { fy: 2010, avg: 8.38, median: 8.00, min: 3.83, max: 35.51, stdDev: 2.69, avgVolume: 313996, totalVolume: 5501206500, dailyVolatility: 1.65, spikeCount: 0, spikeRatio: 0 },
  { fy: 2011, avg: 13.72, median: 13.10, min: 5.80, max: 38.65, stdDev: 5.06, avgVolume: 268516, totalVolume: 4717287000, dailyVolatility: 3.65, spikeCount: 0, spikeRatio: 0 },
  { fy: 2012, avg: 14.43, median: 14.02, min: 6.79, max: 39.70, stdDev: 3.40, avgVolume: 420033, totalVolume: 7358985000, dailyVolatility: 1.93, spikeCount: 0, spikeRatio: 0 },
  { fy: 2013, avg: 16.51, median: 16.32, min: 5.93, max: 55.00, stdDev: 3.30, avgVolume: 587058, totalVolume: 10285251500, dailyVolatility: 1.89, spikeCount: 16, spikeRatio: 0.1 },
  { fy: 2014, avg: 14.67, median: 14.40, min: 5.47, max: 44.61, stdDev: 2.75, avgVolume: 719261, totalVolume: 12601453000, dailyVolatility: 1.81, spikeCount: 0, spikeRatio: 0 },
  { fy: 2015, avg: 9.78, median: 9.31, min: 3.82, max: 44.92, stdDev: 2.70, avgVolume: 876367, totalVolume: 15396017000, dailyVolatility: 1.88, spikeCount: 0, spikeRatio: 0 },
  { fy: 2016, avg: 8.46, median: 7.77, min: 3.84, max: 40.00, stdDev: 2.98, avgVolume: 1310611, totalVolume: 22961899500, dailyVolatility: 1.71, spikeCount: 0, spikeRatio: 0 },
  { fy: 2017, avg: 9.72, median: 8.58, min: 4.51, max: 50.00, stdDev: 3.82, avgVolume: 3344331, totalVolume: 58592675000, dailyVolatility: 2.57, spikeCount: 0, spikeRatio: 0 },
  { fy: 2018, avg: 9.76, median: 9.20, min: 3.00, max: 75.00, stdDev: 3.37, avgVolume: 11908803, totalVolume: 208642228850, dailyVolatility: 2.08, spikeCount: 7, spikeRatio: 0 },
  { fy: 2019, avg: 7.93, median: 7.34, min: 0.01, max: 60.00, stdDev: 3.12, avgVolume: 16650160, totalVolume: 292510007900, dailyVolatility: 1.76, spikeCount: 2, spikeRatio: 0 },
  { fy: 2020, avg: 11.21, median: 5.63, min: 0.01, max: 251.00, stdDev: 23.73, avgVolume: 17856066, totalVolume: 312838282100, dailyVolatility: 20.79, spikeCount: 749, spikeRatio: 4.3 },
  { fy: 2021, avg: 13.46, median: 9.76, min: 0.01, max: 80.00, stdDev: 9.99, avgVolume: 18673769, totalVolume: 327164430850, dailyVolatility: 7.94, spikeCount: 193, spikeRatio: 1.1 },
  { fy: 2022, avg: 20.41, median: 19.62, min: 0.01, max: 100.00, stdDev: 10.41, avgVolume: 18180982, totalVolume: 318530800100, dailyVolatility: 6.74, spikeCount: 282, spikeRatio: 1.6 },
  { fy: 2023, avg: 10.74, median: 10.78, min: 0.01, max: 52.94, stdDev: 4.44, avgVolume: 14884577, totalVolume: 261492253850, dailyVolatility: 2.50, spikeCount: 1, spikeRatio: 0 },
  { fy: 2024, avg: 12.29, median: 11.97, min: 0.01, max: 45.01, stdDev: 4.39, avgVolume: 15167483, totalVolume: 265734306000, dailyVolatility: 2.71, spikeCount: 0, spikeRatio: 0 },
  { fy: 2025, avg: 11.06, median: 10.78, min: 0.01, max: 37.51, stdDev: 3.88, avgVolume: 16242506, totalVolume: 284568703400, dailyVolatility: 2.17, spikeCount: 0, spikeRatio: 0 },
  { fy: 2026, avg: 15.81, median: 17.69, min: 0.01, max: 35.00, stdDev: 7.99, avgVolume: 18972848, totalVolume: 10928360500, dailyVolatility: 4.67, spikeCount: 0, spikeRatio: 0 },
];

// --- エリア別年度平均 ---
export type JepxAreaYearlyAvg = {
  fy: number;
  systemPrice: number;
  hokkaido: number;
  tohoku: number;
  tokyo: number;
  chubu: number;
  hokuriku: number;
  kansai: number;
  chugoku: number;
  kyushu: number;
  shikoku: number;
};

export const JEPX_AREA_YEARLY_AVG: JepxAreaYearlyAvg[] = [
  { fy: 2010, systemPrice: 8.38, hokkaido: 8.59, tohoku: 8.68, tokyo: 8.45, chubu: 8.31, hokuriku: 8.29, kansai: 8.29, chugoku: 8.29, kyushu: 8.29, shikoku: 8.29 },
  { fy: 2011, systemPrice: 13.72, hokkaido: 12.11, tohoku: 14.08, tokyo: 14.31, chubu: 13.68, hokuriku: 13.68, kansai: 13.68, chugoku: 13.68, kyushu: 13.68, shikoku: 13.68 },
  { fy: 2012, systemPrice: 14.43, hokkaido: 14.25, tohoku: 14.75, tokyo: 14.75, chubu: 14.32, hokuriku: 14.32, kansai: 14.32, chugoku: 14.32, kyushu: 14.32, shikoku: 14.32 },
  { fy: 2013, systemPrice: 16.51, hokkaido: 15.90, tohoku: 16.42, tokyo: 16.44, chubu: 16.62, hokuriku: 16.62, kansai: 16.62, chugoku: 16.62, kyushu: 16.62, shikoku: 16.62 },
  { fy: 2014, systemPrice: 14.67, hokkaido: 14.63, tohoku: 14.63, tokyo: 14.63, chubu: 14.68, hokuriku: 14.71, kansai: 14.71, chugoku: 14.71, kyushu: 14.71, shikoku: 14.71 },
  { fy: 2015, systemPrice: 9.78, hokkaido: 11.52, tohoku: 10.99, tokyo: 10.99, chubu: 9.37, hokuriku: 9.37, kansai: 9.37, chugoku: 9.37, kyushu: 9.34, shikoku: 9.37 },
  { fy: 2016, systemPrice: 8.46, hokkaido: 11.94, tohoku: 9.31, tokyo: 9.32, chubu: 8.29, hokuriku: 8.28, kansai: 8.29, chugoku: 8.29, kyushu: 8.21, shikoku: 8.29 },
  { fy: 2017, systemPrice: 9.72, hokkaido: 12.47, tohoku: 10.15, tokyo: 10.15, chubu: 9.78, hokuriku: 9.81, kansai: 9.81, chugoku: 9.80, kyushu: 9.55, shikoku: 9.80 },
  { fy: 2018, systemPrice: 9.76, hokkaido: 15.30, tohoku: 10.65, tokyo: 10.68, chubu: 8.88, hokuriku: 8.88, kansai: 8.88, chugoku: 8.88, kyushu: 8.35, shikoku: 8.88 },
  { fy: 2019, systemPrice: 7.93, hokkaido: 10.74, tohoku: 9.06, tokyo: 9.12, chubu: 7.19, hokuriku: 7.18, kansai: 7.18, chugoku: 7.17, kyushu: 6.82, shikoku: 7.14 },
  { fy: 2020, systemPrice: 11.21, hokkaido: 12.30, tohoku: 11.90, tokyo: 12.02, chubu: 10.93, hokuriku: 11.06, kansai: 11.06, chugoku: 11.05, kyushu: 10.72, shikoku: 11.06 },
  { fy: 2021, systemPrice: 13.46, hokkaido: 13.74, tohoku: 13.85, tokyo: 14.27, chubu: 14.41, hokuriku: 14.12, kansai: 14.05, chugoku: 14.03, kyushu: 11.29, shikoku: 14.02 },
  { fy: 2022, systemPrice: 20.41, hokkaido: 21.66, tohoku: 21.58, tokyo: 23.50, chubu: 20.82, hokuriku: 19.55, kansai: 19.54, chugoku: 19.21, kyushu: 14.42, shikoku: 19.10 },
  { fy: 2023, systemPrice: 10.74, hokkaido: 11.44, tohoku: 11.33, tokyo: 12.20, chubu: 11.14, hokuriku: 9.85, kansai: 9.74, chugoku: 9.69, kyushu: 9.14, shikoku: 9.54 },
  { fy: 2024, systemPrice: 12.29, hokkaido: 12.64, tohoku: 12.69, tokyo: 13.66, chubu: 12.83, hokuriku: 11.85, kansai: 11.70, chugoku: 11.66, kyushu: 10.86, shikoku: 10.66 },
  { fy: 2025, systemPrice: 11.06, hokkaido: 11.70, tohoku: 11.39, tokyo: 12.45, chubu: 11.36, hokuriku: 10.81, kansai: 10.65, chugoku: 10.21, kyushu: 9.81, shikoku: 8.85 },
  { fy: 2026, systemPrice: 15.81, hokkaido: 14.72, tohoku: 15.62, tokyo: 21.14, chubu: 20.19, hokuriku: 15.38, kansai: 15.10, chugoku: 13.68, kyushu: 11.28, shikoku: 7.90 },
];

// --- 月次システムプライス（FY2023以降） ---
export type JepxMonthlySummary = {
  month: string;  // "YYYY-MM"
  avg: number;
  min: number;
  max: number;
};

export const JEPX_MONTHLY_SUMMARY: JepxMonthlySummary[] = [
  { month: "2023-04", avg: 8.56, min: 0.01, max: 18.76 },
  { month: "2023-05", avg: 8.65, min: 0.01, max: 18.00 },
  { month: "2023-06", avg: 8.48, min: 0.01, max: 16.88 },
  { month: "2023-07", avg: 10.13, min: 0.01, max: 24.82 },
  { month: "2023-08", avg: 11.68, min: 0.03, max: 25.00 },
  { month: "2023-09", avg: 13.39, min: 0.01, max: 52.94 },
  { month: "2023-10", avg: 11.24, min: 0.01, max: 21.69 },
  { month: "2023-11", avg: 14.20, min: 0.01, max: 22.70 },
  { month: "2023-12", avg: 12.40, min: 0.01, max: 23.00 },
  { month: "2024-01", avg: 10.12, min: 0.01, max: 17.60 },
  { month: "2024-02", avg: 9.36, min: 0.01, max: 19.16 },
  { month: "2024-03", avg: 10.66, min: 0.01, max: 36.59 },
  { month: "2024-04", avg: 9.44, min: 0.01, max: 19.50 },
  { month: "2024-05", avg: 9.62, min: 0.01, max: 20.72 },
  { month: "2024-06", avg: 10.92, min: 0.01, max: 21.66 },
  { month: "2024-07", avg: 14.15, min: 3.00, max: 30.00 },
  { month: "2024-08", avg: 14.48, min: 9.31, max: 40.01 },
  { month: "2024-09", avg: 13.96, min: 6.00, max: 45.01 },
  { month: "2024-10", avg: 12.68, min: 0.01, max: 33.25 },
  { month: "2024-11", avg: 12.42, min: 0.01, max: 21.32 },
  { month: "2024-12", avg: 12.26, min: 0.01, max: 22.78 },
  { month: "2025-01", avg: 12.43, min: 0.01, max: 22.60 },
  { month: "2025-02", avg: 13.94, min: 1.00, max: 22.76 },
  { month: "2025-03", avg: 11.31, min: 0.01, max: 37.55 },
  { month: "2025-04", avg: 9.82, min: 0.01, max: 20.30 },
  { month: "2025-05", avg: 8.92, min: 0.01, max: 18.44 },
  { month: "2025-06", avg: 10.87, min: 0.01, max: 30.56 },
  { month: "2025-07", avg: 12.75, min: 5.78, max: 37.51 },
  { month: "2025-08", avg: 11.98, min: 3.01, max: 36.99 },
  { month: "2025-09", avg: 11.62, min: 2.01, max: 36.00 },
  { month: "2025-10", avg: 11.67, min: 4.00, max: 30.00 },
  { month: "2025-11", avg: 10.55, min: 0.01, max: 18.52 },
  { month: "2025-12", avg: 10.58, min: 2.01, max: 18.25 },
  { month: "2026-01", avg: 11.27, min: 1.00, max: 34.26 },
  { month: "2026-02", avg: 10.45, min: 0.01, max: 19.80 },
  { month: "2026-03", avg: 12.12, min: 0.01, max: 23.31 },
  { month: "2026-04", avg: 15.81, min: 0.01, max: 35.00 },
];

// --- 時間帯別平均システムプライス（全期間） ---
export type JepxHourlyAvg = {
  hour: number;   // 0-23
  label: string;  // "00:00" etc
  avg: number;
};

export const JEPX_HOURLY_AVG: JepxHourlyAvg[] = [
  { hour: 0, label: "00:00", avg: 10.48 },
  { hour: 1, label: "01:00", avg: 10.12 },
  { hour: 2, label: "02:00", avg: 10.23 },
  { hour: 3, label: "03:00", avg: 10.44 },
  { hour: 4, label: "04:00", avg: 10.54 },
  { hour: 5, label: "05:00", avg: 10.62 },
  { hour: 6, label: "06:00", avg: 11.01 },
  { hour: 7, label: "07:00", avg: 11.41 },
  { hour: 8, label: "08:00", avg: 11.59 },
  { hour: 9, label: "09:00", avg: 12.12 },
  { hour: 10, label: "10:00", avg: 11.64 },
  { hour: 11, label: "11:00", avg: 11.38 },
  { hour: 12, label: "12:00", avg: 9.84 },
  { hour: 13, label: "13:00", avg: 11.59 },
  { hour: 14, label: "14:00", avg: 12.34 },
  { hour: 15, label: "15:00", avg: 13.16 },
  { hour: 16, label: "16:00", avg: 15.09 },
  { hour: 17, label: "17:00", avg: 15.76 },
  { hour: 18, label: "18:00", avg: 15.73 },
  { hour: 19, label: "19:00", avg: 14.70 },
  { hour: 20, label: "20:00", avg: 13.57 },
  { hour: 21, label: "21:00", avg: 12.37 },
  { hour: 22, label: "22:00", avg: 12.14 },
  { hour: 23, label: "23:00", avg: 11.06 },
];

// --- FY2026エリア間スプレッド ---
export type JepxAreaSpread2026 = {
  area: string;
  areaJa: string;
  mean: number;
  std: number;
  min: number;
  max: number;
};

export const JEPX_AREA_SPREAD_2026: JepxAreaSpread2026[] = [
  { area: "hokkaido", areaJa: "北海道", mean: -1.08, std: 5.55, min: -15.30, max: 26.60 },
  { area: "tohoku", areaJa: "東北", mean: -0.19, std: 5.50, min: -15.30, max: 26.60 },
  { area: "tokyo", areaJa: "東京", mean: 5.33, std: 5.17, min: -5.00, max: 36.67 },
  { area: "chubu", areaJa: "中部", mean: 4.38, std: 4.89, min: -6.55, max: 24.82 },
  { area: "hokuriku", areaJa: "北陸", mean: -0.43, std: 4.88, min: -14.22, max: 19.70 },
  { area: "kansai", areaJa: "関西", mean: -0.70, std: 4.67, min: -14.22, max: 16.78 },
  { area: "chugoku", areaJa: "中国", mean: -2.13, std: 4.24, min: -18.04, max: 9.75 },
  { area: "kyushu", areaJa: "九州", mean: -4.52, std: 4.79, min: -19.99, max: 7.11 },
  { area: "shikoku", areaJa: "四国", mean: -7.90, std: 6.22, min: -28.13, max: 4.11 },
];

// --- ヘルパー関数 ---

/** エリアキーから該当エリアのJEPX年次平均を取得 */
export const getAreaPriceByRegion = (
  regionKey: "hokkaido" | "tohoku" | "tokyo" | "chubu" | "hokuriku" | "kansai" | "chugoku" | "kyushu" | "shikoku"
) => JEPX_AREA_YEARLY_AVG.map((row) => ({ fy: row.fy, price: row[regionKey] }));

/** FY2016以降のデータに絞り込み（自由化以降） */
export const JEPX_YEARLY_SINCE_LIBERALIZATION = JEPX_YEARLY_SUMMARY.filter((row) => row.fy >= 2016);
