/**
 * 気象データ（9都市・30年分）
 *
 * 出典: 気象庁 過去の気象データ検索（1995年〜2025年）を集計
 * 都市: 札幌・仙台・東京・名古屋・金沢・大阪・広島・松山・福岡
 */

// --- 10年平均気温トレンド ---
export type DecadalTemp = {
  decade: string;
  sapporo: number;
  sendai: number;
  tokyo: number;
  nagoya: number;
  kanazawa: number;
  osaka: number;
  hiroshima: number;
  matsuyama: number;
  fukuoka: number;
};

export const DECADAL_AVG_TEMP: DecadalTemp[] = [
  { decade: "1990年代", sapporo: 9.14, sendai: 12.90, tokyo: 16.78, nagoya: 16.35, kanazawa: 15.05, osaka: 17.30, hiroshima: 16.86, matsuyama: 16.87, fukuoka: 17.37 },
  { decade: "2000年代", sapporo: 9.36, sendai: 12.95, tokyo: 16.88, nagoya: 16.71, kanazawa: 15.30, osaka: 17.63, hiroshima: 16.92, matsuyama: 17.12, fukuoka: 17.70 },
  { decade: "2010年代", sapporo: 9.75, sendai: 13.53, tokyo: 16.88, nagoya: 16.95, kanazawa: 15.49, osaka: 17.53, hiroshima: 17.03, matsuyama: 17.20, fukuoka: 17.91 },
  { decade: "2020年代", sapporo: 10.32, sendai: 14.25, tokyo: 17.14, nagoya: 17.45, kanazawa: 16.04, osaka: 17.96, hiroshima: 17.48, matsuyama: 17.64, fukuoka: 18.36 },
];

// --- 猛暑日(35℃超)の10年ごとカウント ---
export type ExtremeHotDays = {
  city: string;
  cityJa: string;
  regionKey: string;
  d1990s: number;
  d2000s: number;
  d2010s: number;
  d2020s: number;
};

export const EXTREME_HOT_DAYS: ExtremeHotDays[] = [
  { city: "Sapporo", cityJa: "札幌", regionKey: "hokkaido", d1990s: 1, d2000s: 2, d2010s: 0, d2020s: 8 },
  { city: "Sendai", cityJa: "仙台", regionKey: "tohoku", d1990s: 1, d2000s: 5, d2010s: 15, d2020s: 32 },
  { city: "Tokyo", cityJa: "東京", regionKey: "tokyo", d1990s: 21, d2000s: 36, d2010s: 80, d2020s: 101 },
  { city: "Nagoya", cityJa: "名古屋", regionKey: "chubu", d1990s: 53, d2000s: 152, d2010s: 175, d2020s: 179 },
  { city: "Kanazawa", cityJa: "金沢", regionKey: "hokuriku", d1990s: 18, d2000s: 32, d2010s: 42, d2020s: 62 },
  { city: "Osaka", cityJa: "大阪", regionKey: "kansai", d1990s: 42, d2000s: 153, d2010s: 176, d2020s: 164 },
  { city: "Hiroshima", cityJa: "広島", regionKey: "chugoku", d1990s: 25, d2000s: 63, d2010s: 111, d2020s: 109 },
  { city: "Matsuyama", cityJa: "松山", regionKey: "shikoku", d1990s: 8, d2000s: 42, d2010s: 78, d2020s: 83 },
  { city: "Fukuoka", cityJa: "福岡", regionKey: "kyushu", d1990s: 18, d2000s: 50, d2010s: 136, d2020s: 126 },
];

// --- 夏(7-8月)の平均最高気温トレンド ---
export type SummerTmaxTrend = {
  cityJa: string;
  regionKey: string;
  tmax1995_99: number;
  tmax2020_25: number;
  change: number;
};

export const SUMMER_TMAX_TREND: SummerTmaxTrend[] = [
  { cityJa: "札幌", regionKey: "hokkaido", tmax1995_99: 25.6, tmax2020_25: 28.2, change: 2.6 },
  { cityJa: "仙台", regionKey: "tohoku", tmax1995_99: 27.2, tmax2020_25: 30.0, change: 2.7 },
  { cityJa: "東京", regionKey: "tokyo", tmax1995_99: 30.7, tmax2020_25: 32.5, change: 1.8 },
  { cityJa: "名古屋", regionKey: "chubu", tmax1995_99: 32.0, tmax2020_25: 33.7, change: 1.7 },
  { cityJa: "金沢", regionKey: "hokuriku", tmax1995_99: 30.0, tmax2020_25: 32.1, change: 2.0 },
  { cityJa: "大阪", regionKey: "kansai", tmax1995_99: 32.4, tmax2020_25: 33.7, change: 1.3 },
  { cityJa: "広島", regionKey: "chugoku", tmax1995_99: 31.7, tmax2020_25: 32.7, change: 1.0 },
  { cityJa: "松山", regionKey: "shikoku", tmax1995_99: 31.6, tmax2020_25: 32.8, change: 1.2 },
  { cityJa: "福岡", regionKey: "kyushu", tmax1995_99: 31.3, tmax2020_25: 33.2, change: 1.9 },
];

// --- 冬(1-2月)の平均最低気温トレンド ---
export type WinterTminTrend = {
  cityJa: string;
  regionKey: string;
  tmin1995_99: number;
  tmin2020_25: number;
  change: number;
};

export const WINTER_TMIN_TREND: WinterTminTrend[] = [
  { cityJa: "札幌", regionKey: "hokkaido", tmin1995_99: -6.9, tmin2020_25: -5.7, change: 1.2 },
  { cityJa: "仙台", regionKey: "tohoku", tmin1995_99: -1.6, tmin2020_25: -0.5, change: 1.1 },
  { cityJa: "東京", regionKey: "tokyo", tmin1995_99: 2.6, tmin2020_25: 2.6, change: -0.1 },
  { cityJa: "名古屋", regionKey: "chubu", tmin1995_99: 0.7, tmin2020_25: 2.1, change: 1.4 },
  { cityJa: "金沢", regionKey: "hokuriku", tmin1995_99: 0.8, tmin2020_25: 1.8, change: 1.0 },
  { cityJa: "大阪", regionKey: "kansai", tmin1995_99: 2.8, tmin2020_25: 3.6, change: 0.9 },
  { cityJa: "広島", regionKey: "chugoku", tmin1995_99: 1.9, tmin2020_25: 2.7, change: 0.8 },
  { cityJa: "松山", regionKey: "shikoku", tmin1995_99: 2.3, tmin2020_25: 3.3, change: 1.0 },
  { cityJa: "福岡", regionKey: "kyushu", tmin1995_99: 3.8, tmin2020_25: 4.8, change: 1.0 },
];

// --- 冷房度日(CDD, base 22℃)推移 ---
export type CddTrend = {
  cityJa: string;
  regionKey: string;
  cdd1995_99: number;
  cdd2020_24: number;
  change: number;
  changePercent: number;
};

export const CDD_TREND: CddTrend[] = [
  { cityJa: "東京", regionKey: "tokyo", cdd1995_99: 470, cdd2020_24: 583, change: 112, changePercent: 24 },
  { cityJa: "大阪", regionKey: "kansai", cdd1995_99: 602, cdd2020_24: 747, change: 145, changePercent: 24 },
  { cityJa: "名古屋", regionKey: "chubu", cdd1995_99: 500, cdd2020_24: 702, change: 202, changePercent: 40 },
  { cityJa: "福岡", regionKey: "kyushu", cdd1995_99: 534, cdd2020_24: 739, change: 205, changePercent: 38 },
  { cityJa: "広島", regionKey: "chugoku", cdd1995_99: 530, cdd2020_24: 672, change: 142, changePercent: 27 },
];

// --- 暖房度日(HDD, base 14℃)推移 ---
export type HddTrend = {
  cityJa: string;
  regionKey: string;
  hdd1995_99: number;
  hdd2020_24: number;
  change: number;
  changePercent: number;
};

export const HDD_TREND: HddTrend[] = [
  { cityJa: "札幌", regionKey: "hokkaido", hdd1995_99: 2526, hdd2020_24: 2272, change: -253, changePercent: -10 },
  { cityJa: "仙台", regionKey: "tohoku", hdd1995_99: 1534, hdd2020_24: 1290, change: -243, changePercent: -16 },
  { cityJa: "東京", regionKey: "tokyo", hdd1995_99: 800, hdd2020_24: 722, change: -78, changePercent: -10 },
  { cityJa: "金沢", regionKey: "hokuriku", hdd1995_99: 1172, hdd2020_24: 990, change: -182, changePercent: -16 },
  { cityJa: "大阪", regionKey: "kansai", hdd1995_99: 820, hdd2020_24: 668, change: -152, changePercent: -19 },
];

// --- 熱帯夜(最低気温25℃超) 主要年 ---
export const TROPICAL_NIGHTS_TOKYO = [
  { year: 2010, count: 56 },
  { year: 2018, count: 42 },
  { year: 2019, count: 28 },
  { year: 2020, count: 27 },
  { year: 2021, count: 19 },
  { year: 2022, count: 27 },
  { year: 2023, count: 57 },
  { year: 2024, count: 47 },
  { year: 2025, count: 55 },
] as const;

export const TROPICAL_NIGHTS_OSAKA = [
  { year: 2010, count: 55 },
  { year: 2018, count: 53 },
  { year: 2019, count: 38 },
  { year: 2020, count: 47 },
  { year: 2021, count: 37 },
  { year: 2022, count: 51 },
  { year: 2023, count: 61 },
  { year: 2024, count: 72 },
  { year: 2025, count: 81 },
] as const;

// --- 札幌の極寒日(-10℃以下) 10年ごと ---
export const SAPPORO_EXTREME_COLD = {
  d1990s: 64,
  d2000s: 90,
  d2010s: 68,
  d2020s: 35,
} as const;

// --- 東京の年平均気温ランキング ---
export const TOKYO_HOTTEST_YEARS = [
  { rank: 1, year: 2023, temp: 18.14 },
  { rank: 2, year: 2024, temp: 18.05 },
  { rank: 3, year: 2025, temp: 17.80 },
  { rank: 4, year: 2004, temp: 17.59 },
  { rank: 5, year: 2013, temp: 17.36 },
] as const;

// --- ヘルパー ---
export const getWeatherByRegion = (regionKey: string) => ({
  hotDays: EXTREME_HOT_DAYS.find((d) => d.regionKey === regionKey),
  summerTmax: SUMMER_TMAX_TREND.find((d) => d.regionKey === regionKey),
  winterTmin: WINTER_TMIN_TREND.find((d) => d.regionKey === regionKey),
  cdd: CDD_TREND.find((d) => d.regionKey === regionKey),
  hdd: HDD_TREND.find((d) => d.regionKey === regionKey),
});
