export type MonthlyPricePoint = {
  date: string;
  price: number;
};

export const HIGH_VOLTAGE_MONTHLY_PRICES: MonthlyPricePoint[] = [
  { date: "2019-01-01", price: 16.42024 },
  { date: "2019-02-01", price: 16.63939 },
  { date: "2019-03-01", price: 16.82912 },
  { date: "2019-04-01", price: 16.71777 },
  { date: "2019-05-01", price: 16.57696 },
  { date: "2019-06-01", price: 16.1047 },
  { date: "2019-07-01", price: 16.11704 },
  { date: "2019-08-01", price: 15.93893 },
  { date: "2019-09-01", price: 15.79403 },
  { date: "2019-10-01", price: 15.55274 },
  { date: "2019-11-01", price: 15.55303 },
  { date: "2019-12-01", price: 15.30072 },
  { date: "2020-01-01", price: 15.05907 },
  { date: "2020-02-01", price: 14.92423 },
  { date: "2020-03-01", price: 15.09892 },
  { date: "2020-04-01", price: 15.41151 },
  { date: "2020-05-01", price: 15.82179 },
  { date: "2020-06-01", price: 15.18385 },
  { date: "2020-07-01", price: 15.02283 },
  { date: "2020-08-01", price: 14.71423 },
  { date: "2020-09-01", price: 14.32724 },
  { date: "2020-10-01", price: 13.99231 },
  { date: "2020-11-01", price: 13.59679 },
  { date: "2020-12-01", price: 13.1468 },
  { date: "2021-01-01", price: 13.03867 },
  { date: "2021-02-01", price: 12.89822 },
  { date: "2021-03-01", price: 13.21202 },
  { date: "2021-04-01", price: 13.67085 },
  { date: "2021-05-01", price: 14.22556 },
  { date: "2021-06-01", price: 14.05022 },
  { date: "2021-07-01", price: 14.30518 },
  { date: "2021-08-01", price: 14.39637 },
  { date: "2021-09-01", price: 14.94917 },
  { date: "2021-10-01", price: 15.14645 },
  { date: "2021-11-01", price: 15.48264 },
  { date: "2021-12-01", price: 15.64394 },
  { date: "2022-01-01", price: 15.79904 },
  { date: "2022-02-01", price: 16.66576 },
  { date: "2022-03-01", price: 17.63385 },
  { date: "2022-04-01", price: 18.45015 },
  { date: "2022-05-01", price: 19.01453 },
  { date: "2022-06-01", price: 18.88125 },
  { date: "2022-07-01", price: 19.97943 },
  { date: "2022-08-01", price: 21.05655 },
  { date: "2022-09-01", price: 22.58069 },
  { date: "2022-10-01", price: 24.18994 },
  { date: "2022-11-01", price: 25.64257 },
  { date: "2022-12-01", price: 27.03003 },
  { date: "2023-01-01", price: 27.48558 },
  { date: "2023-02-01", price: 24.69981 },
  { date: "2023-03-01", price: 24.05292 },
  { date: "2023-04-01", price: 24.79219 },
  { date: "2023-05-01", price: 24.77339 },
  { date: "2023-06-01", price: 22.96874 },
  { date: "2023-07-01", price: 21.69218 },
  { date: "2023-08-01", price: 20.53096 },
  { date: "2023-09-01", price: 19.98224 },
  { date: "2023-10-01", price: 21.46739 },
  { date: "2023-11-01", price: 21.69863 },
  { date: "2023-12-01", price: 21.35238 },
  { date: "2024-01-01", price: 21.01045 },
  { date: "2024-02-01", price: 20.89386 },
  { date: "2024-03-01", price: 21.17356 },
  { date: "2024-04-01", price: 21.347 },
  { date: "2024-05-01", price: 21.41819 },
  { date: "2024-06-01", price: 21.6872 },
  { date: "2024-07-01", price: 22.12128 },
  { date: "2024-08-01", price: 21.88944 },
  { date: "2024-09-01", price: 20.27322 },
  { date: "2024-10-01", price: 20.86378 },
  { date: "2024-11-01", price: 22.03036 },
  { date: "2024-12-01", price: 22.91959 },
  { date: "2025-01-01", price: 22.24823 },
  { date: "2025-02-01", price: 20.9526 },
  { date: "2025-03-01", price: 21.0486 },
  { date: "2025-04-01", price: 21.98799 },
  { date: "2025-05-01", price: 22.62949 },
  { date: "2025-06-01", price: 21.74257 },
  { date: "2025-07-01", price: 21.11848 },
  { date: "2025-08-01", price: 19.90975 },
  { date: "2025-09-01", price: 19.71978 },
  { date: "2025-10-01", price: 20.11444 },
  { date: "2025-11-01", price: 21.32138 },
  { date: "2025-12-01", price: 20.94959 },
];

export type YearlySummaryPoint = {
  year: number;
  averagePrice: number;
  yearOverYear: number | null;
};

export const getYearlySummary = (): YearlySummaryPoint[] => {
  const yearlyMap = new Map<number, number[]>();

  for (const point of HIGH_VOLTAGE_MONTHLY_PRICES) {
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
