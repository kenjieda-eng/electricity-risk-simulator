import { EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES } from "../../app/business-electricity-retrospective/_lib/extra-high-voltage-price-data";
import { HIGH_VOLTAGE_MONTHLY_PRICES } from "../../app/business-electricity-retrospective/_lib/high-voltage-price-data";
import { LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES } from "../../app/business-electricity-retrospective/_lib/low-voltage-lighting-price-data";
import { LOW_VOLTAGE_POWER_MONTHLY_PRICES } from "../../app/business-electricity-retrospective/_lib/low-voltage-power-price-data";

export const VOLTAGE_ORDER = [
  "extra-high-voltage",
  "high-voltage",
  "low-voltage-power",
  "low-voltage-lighting",
] as const;

export type VoltageKey = (typeof VOLTAGE_ORDER)[number];

export const VOLTAGE_LABELS: Record<VoltageKey, string> = {
  "extra-high-voltage": "特別高圧",
  "high-voltage": "高圧",
  "low-voltage-power": "低圧電力",
  "low-voltage-lighting": "低圧電灯",
};

export const VOLTAGE_COLORS: Record<VoltageKey, string> = {
  "extra-high-voltage": "#0f766e",
  "high-voltage": "#1d4ed8",
  "low-voltage-power": "#b45309",
  "low-voltage-lighting": "#7c3aed",
};

type MonthlyPoint = { date: string; price: number };

type MonthlyMap = Record<VoltageKey, MonthlyPoint[]>;

const MONTHLY_MAP: MonthlyMap = {
  "extra-high-voltage": EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES,
  "high-voltage": HIGH_VOLTAGE_MONTHLY_PRICES,
  "low-voltage-power": LOW_VOLTAGE_POWER_MONTHLY_PRICES,
  "low-voltage-lighting": LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES,
};

export type SeriesPoint = {
  date: string;
  label: string;
  year: number;
  month: number;
  values: Record<VoltageKey, number>;
};

export type YearlyRow = {
  year: number;
  values: Record<VoltageKey, number>;
};

export type VoltageStatsRow = {
  key: VoltageKey;
  label: string;
  avg: number;
  max: number;
  min: number;
  range: number;
};

const round1 = (value: number) => Math.round(value * 10) / 10;

const parseYearMonth = (date: string) => {
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  return { year, month };
};

const toLabel = (year: number, month: number) => `${year}/${String(month).padStart(2, "0")}`;

const isInRange = (date: string, start: string, end: string) => date >= start && date <= end;

export const getLatestConfirmedDate = () => EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES[EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES.length - 1]?.date ?? "";

export const getSeriesByRange = (start: string, end: string): SeriesPoint[] => {
  const base = EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES.filter((point) => isInRange(point.date, start, end));
  return base.map((point) => {
    const { year, month } = parseYearMonth(point.date);
    const values = VOLTAGE_ORDER.reduce(
      (acc, key) => {
        const matched = MONTHLY_MAP[key].find((row) => row.date === point.date);
        acc[key] = round1(matched?.price ?? 0);
        return acc;
      },
      {} as Record<VoltageKey, number>,
    );
    return {
      date: point.date,
      label: toLabel(year, month),
      year,
      month,
      values,
    };
  });
};

export const getYearlyAverages = (startYear: number, endYear: number): YearlyRow[] => {
  const rows: YearlyRow[] = [];
  for (let year = startYear; year <= endYear; year += 1) {
    const values = VOLTAGE_ORDER.reduce(
      (acc, key) => {
        const inYear = MONTHLY_MAP[key].filter((point) => point.date.startsWith(`${year}-`)).map((point) => point.price);
        const avg = inYear.length > 0 ? inYear.reduce((sum, value) => sum + value, 0) / inYear.length : 0;
        acc[key] = round1(avg);
        return acc;
      },
      {} as Record<VoltageKey, number>,
    );
    rows.push({ year, values });
  }
  return rows;
};

export const getYearlyValueByKey = (startYear: number, endYear: number, key: VoltageKey) =>
  getYearlyAverages(startYear, endYear).map((row) => ({ label: `${row.year}年`, value: row.values[key] }));

export const getAverageByPeriod = (start: string, end: string): Record<VoltageKey, number> => {
  const rows = getSeriesByRange(start, end);
  return VOLTAGE_ORDER.reduce(
    (acc, key) => {
      const list = rows.map((row) => row.values[key]);
      acc[key] = list.length ? round1(list.reduce((sum, value) => sum + value, 0) / list.length) : 0;
      return acc;
    },
    {} as Record<VoltageKey, number>,
  );
};

export const getVoltageStats = (start: string, end: string): VoltageStatsRow[] => {
  const rows = getSeriesByRange(start, end);
  return VOLTAGE_ORDER.map((key) => {
    const values = rows.map((row) => row.values[key]);
    const max = values.length ? Math.max(...values) : 0;
    const min = values.length ? Math.min(...values) : 0;
    const avg = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    return {
      key,
      label: VOLTAGE_LABELS[key],
      avg: round1(avg),
      max: round1(max),
      min: round1(min),
      range: round1(max - min),
    };
  });
};

export const SHOCK_EVENT_NOTES = [
  { label: "2022年2月 侵攻で市場緊張が拡大", when: "2022-02-01" },
  { label: "2023年初 補助政策が本格化", when: "2023-01-01" },
  { label: "2025年度にかけて補助縮小・終了", when: "2025-04-01" },
  { label: "2026年3月 ホルムズ海峡封鎖", when: "2026-03-01" },
] as const;

export const PERIOD_COMPARE_BLOCKS = [
  { label: "2019-2021平均", start: "2019-01-01", end: "2021-12-01" },
  { label: "2022-2023平均", start: "2022-01-01", end: "2023-12-01" },
  { label: "2024-2025平均", start: "2024-01-01", end: "2025-12-01" },
] as const;

export const DATA_DISCLAIMER =
  "本ページの単価は、当社団が運営する新電力ネットの公開値をもとに、消費税および再生可能エネルギー発電促進賦課金を含まない参考値として整理したものです。表記は小数点第一位で四捨五入しています。";
