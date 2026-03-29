export type MonthlyPricePoint = {
  date: string;
  price: number;
};

export const LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES: MonthlyPricePoint[] = [
  { date: "2019-01-01", price: 22.55433 },
  { date: "2019-02-01", price: 22.77055 },
  { date: "2019-03-01", price: 22.82384 },
  { date: "2019-04-01", price: 22.63526 },
  { date: "2019-05-01", price: 22.64041 },
  { date: "2019-06-01", price: 23.04401 },
  { date: "2019-07-01", price: 23.08595 },
  { date: "2019-08-01", price: 23.22527 },
  { date: "2019-09-01", price: 22.98066 },
  { date: "2019-10-01", price: 22.57162 },
  { date: "2019-11-01", price: 22.02759 },
  { date: "2019-12-01", price: 21.66659 },
  { date: "2020-01-01", price: 21.44141 },
  { date: "2020-02-01", price: 21.40224 },
  { date: "2020-03-01", price: 21.4018 },
  { date: "2020-04-01", price: 21.53155 },
  { date: "2020-05-01", price: 21.79822 },
  { date: "2020-06-01", price: 22.18 },
  { date: "2020-07-01", price: 22.15219 },
  { date: "2020-08-01", price: 22.06617 },
  { date: "2020-09-01", price: 21.74636 },
  { date: "2020-10-01", price: 20.95819 },
  { date: "2020-11-01", price: 20.12864 },
  { date: "2020-12-01", price: 19.70699 },
  { date: "2021-01-01", price: 19.45762 },
  { date: "2021-02-01", price: 19.42905 },
  { date: "2021-03-01", price: 19.60711 },
  { date: "2021-04-01", price: 19.99482 },
  { date: "2021-05-01", price: 20.76116 },
  { date: "2021-06-01", price: 21.53248 },
  { date: "2021-07-01", price: 21.83409 },
  { date: "2021-08-01", price: 22.07165 },
  { date: "2021-09-01", price: 22.36642 },
  { date: "2021-10-01", price: 22.63175 },
  { date: "2021-11-01", price: 22.52315 },
  { date: "2021-12-01", price: 22.61123 },
  { date: "2022-01-01", price: 22.99882 },
  { date: "2022-02-01", price: 23.90161 },
  { date: "2022-03-01", price: 24.59326 },
  { date: "2022-04-01", price: 24.91716 },
  { date: "2022-05-01", price: 25.49582 },
  { date: "2022-06-01", price: 26.24696 },
  { date: "2022-07-01", price: 27.12856 },
  { date: "2022-08-01", price: 27.9327 },
  { date: "2022-09-01", price: 28.59377 },
  { date: "2022-10-01", price: 29.25057 },
  { date: "2022-11-01", price: 29.76907 },
  { date: "2022-12-01", price: 31.23845 },
  { date: "2023-01-01", price: 31.25489 },
  { date: "2023-02-01", price: 25.60497 },
  { date: "2023-03-01", price: 24.89027 },
  { date: "2023-04-01", price: 24.68128 },
  { date: "2023-05-01", price: 24.95428 },
  { date: "2023-06-01", price: 25.2279 },
  { date: "2023-07-01", price: 25.06436 },
  { date: "2023-08-01", price: 24.27731 },
  { date: "2023-09-01", price: 23.68067 },
  { date: "2023-10-01", price: 26.1983 },
  { date: "2023-11-01", price: 25.63728 },
  { date: "2023-12-01", price: 25.03151 },
  { date: "2024-01-01", price: 24.66647 },
  { date: "2024-02-01", price: 24.87948 },
  { date: "2024-03-01", price: 25.10183 },
  { date: "2024-04-01", price: 25.05291 },
  { date: "2024-05-01", price: 25.75383 },
  { date: "2024-06-01", price: 27.62523 },
  { date: "2024-07-01", price: 29.04209 },
  { date: "2024-08-01", price: 28.72961 },
  { date: "2024-09-01", price: 25.39195 },
  { date: "2024-10-01", price: 25.60914 },
  { date: "2024-11-01", price: 26.60893 },
  { date: "2024-12-01", price: 28.199 },
  { date: "2025-01-01", price: 27.29205 },
  { date: "2025-02-01", price: 25.2326 },
  { date: "2025-03-01", price: 25.47846 },
  { date: "2025-04-01", price: 27.03588 },
  { date: "2025-05-01", price: 28.98468 },
  { date: "2025-06-01", price: 28.84359 },
  { date: "2025-07-01", price: 27.87938 },
  { date: "2025-08-01", price: 25.94834 },
  { date: "2025-09-01", price: 25.73976 },
  { date: "2025-10-01", price: 26.15672 },
  { date: "2025-11-01", price: 27.32027 },
  { date: "2025-12-01", price: 26.77882 },
];

export type YearlySummaryPoint = {
  year: number;
  averagePrice: number;
  yearOverYear: number | null;
};

export const getYearlySummary = (): YearlySummaryPoint[] => {
  const yearlyMap = new Map<number, number[]>();

  for (const point of LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES) {
    const year = Number(point.date.slice(0, 4));
    const list = yearlyMap.get(year) ?? [];
    list.push(point.price);
    yearlyMap.set(year, list);
  }

  const years = [...yearlyMap.keys()].sort((a, b) => a - b);

  return years.map((year, index) => {
    const monthlyValues = yearlyMap.get(year) ?? [];
    const avg = monthlyValues.reduce((sum, value) => sum + value, 0) / monthlyValues.length;
    const prev = index > 0 ? years[index - 1] : null;
    const prevAvg =
      prev !== null
        ? (yearlyMap.get(prev) ?? []).reduce((sum, value) => sum + value, 0) /
          (yearlyMap.get(prev) ?? []).length
        : null;
    const yoy = prevAvg ? ((avg - prevAvg) / prevAvg) * 100 : null;

    return {
      year,
      averagePrice: Number(avg.toFixed(1)),
      yearOverYear: yoy !== null ? Number(yoy.toFixed(1)) : null,
    };
  });
};
