/**
 * 再生可能エネルギー発電促進賦課金（再エネ賦課金）単価の正準データ（SSOT）。
 *
 * 全国一律。出典: 経済産業省告示（各年度の賦課金単価）。
 * 賦課金年度は「5月検針分〜翌4月検針分」を1年度とする。
 *
 * この配列が再エネ賦課金単価の唯一の正準ソース（Single Source of Truth）。
 * チャート・履歴・ハブ・D-1計算機など全消費者はここを参照すること。
 * 年度改定時は、本配列に1行追記すれば全消費者へ自動反映される。
 *
 * 依存方向: 本モジュールは src/app を import しない（app→lib の一方向を維持）。
 */
export type RenewableSurchargeRow = {
  fiscalYear: number;
  periodLabel: string;
  unitPriceYenPerKwh: number;
  yearOverYearYen: number | null;
  yearOverYearPercent: number | null;
  annualBurdenYen: number;
  monthlyBurdenYen: number;
};

export const RENEWABLE_SURCHARGE_DATA: RenewableSurchargeRow[] = [
  {
    fiscalYear: 2012,
    periodLabel: "2012年8月分〜2013年3月分",
    unitPriceYenPerKwh: 0.22,
    yearOverYearYen: null,
    yearOverYearPercent: null,
    annualBurdenYen: 792,
    monthlyBurdenYen: 66,
  },
  {
    fiscalYear: 2013,
    periodLabel: "2013年4月分〜2014年4月分",
    unitPriceYenPerKwh: 0.35,
    yearOverYearYen: 0.13,
    yearOverYearPercent: 59,
    annualBurdenYen: 1260,
    monthlyBurdenYen: 105,
  },
  {
    fiscalYear: 2014,
    periodLabel: "2014年5月分〜2015年4月分",
    unitPriceYenPerKwh: 0.75,
    yearOverYearYen: 0.4,
    yearOverYearPercent: 114,
    annualBurdenYen: 2700,
    monthlyBurdenYen: 225,
  },
  {
    fiscalYear: 2015,
    periodLabel: "2015年5月分〜2016年4月分",
    unitPriceYenPerKwh: 1.58,
    yearOverYearYen: 0.83,
    yearOverYearPercent: 111,
    annualBurdenYen: 5688,
    monthlyBurdenYen: 474,
  },
  {
    fiscalYear: 2016,
    periodLabel: "2016年5月分〜2017年4月分",
    unitPriceYenPerKwh: 2.25,
    yearOverYearYen: 0.67,
    yearOverYearPercent: 42,
    annualBurdenYen: 8100,
    monthlyBurdenYen: 675,
  },
  {
    fiscalYear: 2017,
    periodLabel: "2017年5月分〜2018年4月分",
    unitPriceYenPerKwh: 2.64,
    yearOverYearYen: 0.39,
    yearOverYearPercent: 17,
    annualBurdenYen: 9504,
    monthlyBurdenYen: 792,
  },
  {
    fiscalYear: 2018,
    periodLabel: "2018年5月分〜2019年4月分",
    unitPriceYenPerKwh: 2.9,
    yearOverYearYen: 0.26,
    yearOverYearPercent: 10,
    annualBurdenYen: 10440,
    monthlyBurdenYen: 870,
  },
  {
    fiscalYear: 2019,
    periodLabel: "2019年5月分〜2020年4月分",
    unitPriceYenPerKwh: 2.95,
    yearOverYearYen: 0.05,
    yearOverYearPercent: 2,
    annualBurdenYen: 10620,
    monthlyBurdenYen: 885,
  },
  {
    fiscalYear: 2020,
    periodLabel: "2020年5月分〜2021年4月分",
    unitPriceYenPerKwh: 2.98,
    yearOverYearYen: 0.03,
    yearOverYearPercent: 1,
    annualBurdenYen: 10728,
    monthlyBurdenYen: 894,
  },
  {
    fiscalYear: 2021,
    periodLabel: "2021年5月分〜2022年4月分",
    unitPriceYenPerKwh: 3.36,
    yearOverYearYen: 0.38,
    yearOverYearPercent: 13,
    annualBurdenYen: 12096,
    monthlyBurdenYen: 1008,
  },
  {
    fiscalYear: 2022,
    periodLabel: "2022年5月分〜2023年4月分",
    unitPriceYenPerKwh: 3.45,
    yearOverYearYen: 0.09,
    yearOverYearPercent: 3,
    annualBurdenYen: 12420,
    monthlyBurdenYen: 1035,
  },
  {
    fiscalYear: 2023,
    periodLabel: "2023年5月分〜2024年4月分",
    unitPriceYenPerKwh: 1.4,
    yearOverYearYen: -2.05,
    yearOverYearPercent: -59,
    annualBurdenYen: 5040,
    monthlyBurdenYen: 420,
  },
  {
    fiscalYear: 2024,
    periodLabel: "2024年5月分〜2025年4月分",
    unitPriceYenPerKwh: 3.49,
    yearOverYearYen: 2.09,
    yearOverYearPercent: 149,
    annualBurdenYen: 12564,
    monthlyBurdenYen: 1047,
  },
  {
    fiscalYear: 2025,
    periodLabel: "2025年5月分〜2026年4月分",
    unitPriceYenPerKwh: 3.98,
    yearOverYearYen: 0.49,
    yearOverYearPercent: 14,
    annualBurdenYen: 14328,
    monthlyBurdenYen: 1194,
  },
  {
    fiscalYear: 2026,
    periodLabel: "2026年5月分〜2027年4月分",
    unitPriceYenPerKwh: 4.18,
    yearOverYearYen: 0.2,
    yearOverYearPercent: 5,
    annualBurdenYen: 15048,
    monthlyBurdenYen: 1254,
  },
];

/**
 * 指定年度（賦課金年度）の行を取得。該当なしは undefined。
 */
export function getSurchargeByFiscalYear(year: number): RenewableSurchargeRow | undefined {
  return RENEWABLE_SURCHARGE_DATA.find((row) => row.fiscalYear === year);
}

/**
 * 最新年度の行を取得（配列末尾＝最新年度）。
 */
export function getLatestSurcharge(): RenewableSurchargeRow {
  return RENEWABLE_SURCHARGE_DATA[RENEWABLE_SURCHARGE_DATA.length - 1];
}

/**
 * 最新の賦課金年度（＝配列末尾の fiscalYear）。
 */
export const CURRENT_FISCAL_YEAR: number = getLatestSurcharge().fiscalYear;

/**
 * 指定日付が属する賦課金年度を返す。
 * 賦課金年度は「5月検針分〜翌4月検針分」。よって5〜12月は当年、1〜4月は前年が年度となる。
 */
export function getFiscalYear(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 1-12
  return month >= 5 ? year : year - 1;
}

/**
 * 指定日付（既定は現在）に適用される賦課金単価の行を返す。
 * 該当年度がデータに無い場合は最新年度にフォールバックする。
 */
export function getCurrentSurcharge(date: Date = new Date()): RenewableSurchargeRow {
  return getSurchargeByFiscalYear(getFiscalYear(date)) ?? getLatestSurcharge();
}
