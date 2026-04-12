/**
 * 電力需要データ（全国9エリア）
 *
 * 出典: 電力広域的運営推進機関（OCCTO）公表データを集計
 * 期間: FY2016〜FY2023（時間単位 70,128レコード）
 */

// --- エリア別需要シェア ---
export const DEMAND_AREA_SHARE = [
  { area: "hokkaido", areaJa: "北海道", share: 3.5 },
  { area: "tohoku", areaJa: "東北", share: 9.4 },
  { area: "tokyo", areaJa: "東京", share: 32.4 },
  { area: "chubu", areaJa: "中部", share: 15.2 },
  { area: "hokuriku", areaJa: "北陸", share: 3.3 },
  { area: "kansai", areaJa: "関西", share: 16.4 },
  { area: "chugoku", areaJa: "中国", share: 6.9 },
  { area: "shikoku", areaJa: "四国", share: 3.1 },
  { area: "kyushu", areaJa: "九州", share: 9.8 },
] as const;

// --- 年度別全国需要トレンド ---
export type DemandFyTrend = {
  fy: number;
  avgMW: number;
  peakMW: number;
  yoyChange: number | null; // %
};

export const DEMAND_FY_TREND: DemandFyTrend[] = [
  { fy: 2016, avgMW: 100921, peakMW: 154720, yoyChange: null },
  { fy: 2017, avgMW: 102003, peakMW: 154920, yoyChange: 1.1 },
  { fy: 2018, avgMW: 101643, peakMW: 163390, yoyChange: -0.4 },
  { fy: 2019, avgMW: 99233, peakMW: 163540, yoyChange: -2.4 },
  { fy: 2020, avgMW: 98108, peakMW: 164910, yoyChange: -1.1 },
  { fy: 2021, avgMW: 100150, peakMW: 163260, yoyChange: 2.1 },
  { fy: 2022, avgMW: 98444, peakMW: 164890, yoyChange: -1.7 },
  { fy: 2023, avgMW: 97286, peakMW: 159630, yoyChange: -1.2 },
];

// --- エリア別年度平均需要 (MW) ---
export type DemandAreaFy = {
  fy: number;
  hokkaido: number;
  tohoku: number;
  tokyo: number;
  chubu: number;
  hokuriku: number;
  kansai: number;
  chugoku: number;
  shikoku: number;
  kyushu: number;
  total: number;
};

export const DEMAND_AREA_FY: DemandAreaFy[] = [
  { fy: 2016, hokkaido: 3590, tohoku: 9383, tokyo: 32355, chubu: 15275, hokuriku: 3386, kansai: 16674, chugoku: 7117, shikoku: 3220, kyushu: 9922, total: 100921 },
  { fy: 2017, hokkaido: 3557, tohoku: 9461, tokyo: 32819, chubu: 15473, hokuriku: 3487, kansai: 16823, chugoku: 7105, shikoku: 3243, kyushu: 10035, total: 102003 },
  { fy: 2018, hokkaido: 3495, tohoku: 9451, tokyo: 33035, chubu: 15521, hokuriku: 3416, kansai: 16719, chugoku: 7013, shikoku: 3126, kyushu: 9867, total: 101643 },
  { fy: 2019, hokkaido: 3462, tohoku: 9202, tokyo: 32295, chubu: 15169, hokuriku: 3289, kansai: 16326, chugoku: 6814, shikoku: 3069, kyushu: 9607, total: 99233 },
  { fy: 2020, hokkaido: 3473, tohoku: 9261, tokyo: 31905, chubu: 14875, hokuriku: 3254, kansai: 16047, chugoku: 6673, shikoku: 3063, kyushu: 9557, total: 98108 },
  { fy: 2021, hokkaido: 3472, tohoku: 9538, tokyo: 32375, chubu: 15309, hokuriku: 3369, kansai: 16375, chugoku: 6875, shikoku: 3100, kyushu: 9737, total: 100150 },
  { fy: 2022, hokkaido: 3432, tohoku: 9284, tokyo: 31923, chubu: 14948, hokuriku: 3250, kansai: 16145, chugoku: 6690, shikoku: 3121, kyushu: 9650, total: 98444 },
  { fy: 2023, hokkaido: 3421, tohoku: 9069, tokyo: 31798, chubu: 14792, hokuriku: 3146, kansai: 15963, chugoku: 6473, shikoku: 2962, kyushu: 9662, total: 97286 },
];

// --- エリア別負荷率推移 (%) ---
export type LoadFactorFy = {
  fy: number;
  hokkaido: number;
  tohoku: number;
  tokyo: number;
  chubu: number;
  hokuriku: number;
  kansai: number;
  chugoku: number;
  shikoku: number;
  kyushu: number;
};

export const LOAD_FACTOR_FY: LoadFactorFy[] = [
  { fy: 2016, hokkaido: 69, tohoku: 68, tokyo: 61, chubu: 61, hokuriku: 66, kansai: 63, chugoku: 67, shikoku: 60, kyushu: 64 },
  { fy: 2017, hokkaido: 68, tohoku: 65, tokyo: 61, chubu: 63, hokuriku: 64, kansai: 64, chugoku: 64, shikoku: 62, kyushu: 63 },
  { fy: 2018, hokkaido: 64, tohoku: 66, tokyo: 58, chubu: 59, hokuriku: 66, kansai: 58, chugoku: 63, shikoku: 58, kyushu: 62 },
  { fy: 2019, hokkaido: 67, tohoku: 64, tokyo: 58, chubu: 59, hokuriku: 63, kansai: 58, chugoku: 63, shikoku: 61, kyushu: 61 },
  { fy: 2020, hokkaido: 64, tohoku: 63, tokyo: 57, chubu: 57, hokuriku: 61, kansai: 55, chugoku: 60, shikoku: 58, kyushu: 58 },
  { fy: 2021, hokkaido: 69, tohoku: 64, tokyo: 57, chubu: 62, hokuriku: 62, kansai: 58, chugoku: 63, shikoku: 62, kyushu: 62 },
  { fy: 2022, hokkaido: 60, tohoku: 61, tokyo: 54, chubu: 59, hokuriku: 60, kansai: 59, chugoku: 63, shikoku: 60, kyushu: 61 },
  { fy: 2023, hokkaido: 65, tohoku: 63, tokyo: 58, chubu: 60, hokuriku: 62, kansai: 59, chugoku: 62, shikoku: 60, kyushu: 61 },
];

// --- 月別平均全国需要 (MW) ---
export const DEMAND_MONTHLY_AVG = [
  { month: 1, label: "1月", avgMW: 112482 },
  { month: 2, label: "2月", avgMW: 112049 },
  { month: 3, label: "3月", avgMW: 99211 },
  { month: 4, label: "4月", avgMW: 89384 },
  { month: 5, label: "5月", avgMW: 84831 },
  { month: 6, label: "6月", avgMW: 93225 },
  { month: 7, label: "7月", avgMW: 106281 },
  { month: 8, label: "8月", avgMW: 109998 },
  { month: 9, label: "9月", avgMW: 98917 },
  { month: 10, label: "10月", avgMW: 89506 },
  { month: 11, label: "11月", avgMW: 94070 },
  { month: 12, label: "12月", avgMW: 107057 },
] as const;

// --- 時間帯別平均全国需要 (MW) ---
export const DEMAND_HOURLY_AVG = [
  { hour: 0, avgMW: 84761 },
  { hour: 1, avgMW: 82297 },
  { hour: 2, avgMW: 83159 },
  { hour: 3, avgMW: 85074 },
  { hour: 4, avgMW: 85874 },
  { hour: 5, avgMW: 86329 },
  { hour: 6, avgMW: 89417 },
  { hour: 7, avgMW: 94956 },
  { hour: 8, avgMW: 103895 },
  { hour: 9, avgMW: 109999 },
  { hour: 10, avgMW: 110859 },
  { hour: 11, avgMW: 111061 },
  { hour: 12, avgMW: 107109 },
  { hour: 13, avgMW: 109720 },
  { hour: 14, avgMW: 109509 },
  { hour: 15, avgMW: 108924 },
  { hour: 16, avgMW: 110307 },
  { hour: 17, avgMW: 111029 },
  { hour: 18, avgMW: 111247 },
  { hour: 19, avgMW: 108700 },
  { hour: 20, avgMW: 104458 },
  { hour: 21, avgMW: 99548 },
  { hour: 22, avgMW: 94742 },
  { hour: 23, avgMW: 90365 },
] as const;

// --- 平日vs休日 ---
export const DEMAND_WEEKDAY_WEEKEND = {
  weekdayAvgMW: 103243,
  weekendAvgMW: 90939,
  diffMW: 12304,
  diffPercent: 11.9,
} as const;

// --- 季節×時間帯パターン (MW) ---
export type SeasonHourDemand = {
  hour: number;
  summer: number;
  winter: number;
  spring: number;
  autumn: number;
};

export const DEMAND_SEASON_HOUR: SeasonHourDemand[] = [
  { hour: 0, summer: 84320, winter: 96869, spring: 79123, autumn: 78896 },
  { hour: 1, summer: 79995, winter: 95328, spring: 77882, autumn: 76164 },
  { hour: 2, summer: 79462, winter: 96380, spring: 79832, autumn: 77148 },
  { hour: 3, summer: 81046, winter: 97354, spring: 82282, autumn: 79789 },
  { hour: 4, summer: 81756, winter: 97605, spring: 83088, autumn: 81219 },
  { hour: 5, summer: 81553, winter: 99329, spring: 82887, autumn: 81745 },
  { hour: 6, summer: 84041, winter: 105889, spring: 84337, autumn: 83649 },
  { hour: 7, summer: 91688, winter: 112541, spring: 87397, autumn: 88460 },
  { hour: 8, summer: 104568, winter: 120405, spring: 94142, autumn: 96699 },
  { hour: 9, summer: 115190, winter: 122847, spring: 98997, autumn: 103132 },
  { hour: 10, summer: 119383, winter: 119748, spring: 99549, autumn: 104860 },
  { hour: 11, summer: 122045, winter: 117052, spring: 99608, autumn: 105592 },
  { hour: 12, summer: 119532, winter: 111520, spring: 95470, autumn: 101943 },
  { hour: 13, summer: 123064, winter: 112904, spring: 97767, autumn: 105157 },
  { hour: 14, summer: 123372, winter: 112192, spring: 97137, autumn: 105340 },
  { hour: 15, summer: 122161, winter: 112557, spring: 96206, autumn: 104795 },
  { hour: 16, summer: 121497, winter: 116620, spring: 97101, autumn: 106085 },
  { hour: 17, summer: 117929, winter: 121782, spring: 97801, autumn: 106760 },
  { hour: 18, summer: 115726, winter: 123157, spring: 100239, autumn: 106038 },
  { hour: 19, summer: 113178, winter: 120565, spring: 99143, autumn: 102069 },
  { hour: 20, summer: 107605, winter: 117217, spring: 95629, autumn: 97549 },
  { hour: 21, summer: 101636, winter: 112566, spring: 91421, autumn: 92743 },
  { hour: 22, summer: 96591, winter: 106766, spring: 87265, autumn: 88509 },
  { hour: 23, summer: 91287, winter: 102396, spring: 83560, autumn: 84381 },
];

// --- ピーク日 Top10 ---
export const DEMAND_PEAK_DAYS = [
  { date: "2020-08-20", day: "木", peakMW: 164910 },
  { date: "2022-08-02", day: "火", peakMW: 164890 },
  { date: "2020-08-21", day: "金", peakMW: 164720 },
  { date: "2019-08-02", day: "金", peakMW: 163540 },
  { date: "2018-08-03", day: "金", peakMW: 163390 },
  { date: "2021-08-05", day: "木", peakMW: 163260 },
  { date: "2018-07-23", day: "月", peakMW: 163030 },
  { date: "2022-08-03", day: "水", peakMW: 162900 },
  { date: "2018-08-02", day: "木", peakMW: 162860 },
  { date: "2022-08-01", day: "月", peakMW: 162590 },
] as const;

// --- エリア間相関（主要ペア） ---
export const DEMAND_AREA_CORRELATION = {
  hokkaidoIndependence: { minCorr: 0.55, maxCorr: 0.78, note: "北海道は他エリアとの相関が低く、寒冷地特有の独自パターン" },
  westJapanCluster: { areas: ["中国", "四国", "九州"], corrRange: "0.93〜0.97", note: "西日本は非常に高い連動性を持つ" },
  tokyoKansai: 0.955,
  tokyChubu: 0.927,
} as const;
