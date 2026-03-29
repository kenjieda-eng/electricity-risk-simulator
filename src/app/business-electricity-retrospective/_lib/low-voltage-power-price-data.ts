export type MonthlyPricePoint = {
  date: string;
  price: number;
};

export const LOW_VOLTAGE_POWER_MONTHLY_PRICES: MonthlyPricePoint[] = [
  { date: "2019-01-01", price: 23.63532 },
  { date: "2019-02-01", price: 24.34509 },
  { date: "2019-03-01", price: 26.63062 },
  { date: "2019-04-01", price: 26.88491 },
  { date: "2019-05-01", price: 27.61738 },
  { date: "2019-06-01", price: 27.98626 },
  { date: "2019-07-01", price: 27.33803 },
  { date: "2019-08-01", price: 23.85393 },
  { date: "2019-09-01", price: 25.12258 },
  { date: "2019-10-01", price: 26.95006 },
  { date: "2019-11-01", price: 28.44999 },
  { date: "2019-12-01", price: 26.54762 },
  { date: "2020-01-01", price: 23.33562 },
  { date: "2020-02-01", price: 24.10054 },
  { date: "2020-03-01", price: 25.15319 },
  { date: "2020-04-01", price: 26.09599 },
  { date: "2020-05-01", price: 27.79532 },
  { date: "2020-06-01", price: 27.71624 },
  { date: "2020-07-01", price: 26.01676 },
  { date: "2020-08-01", price: 23.47337 },
  { date: "2020-09-01", price: 22.8237 },
  { date: "2020-10-01", price: 26.40765 },
  { date: "2020-11-01", price: 27.00812 },
  { date: "2020-12-01", price: 24.91541 },
  { date: "2021-01-01", price: 20.01056 },
  { date: "2021-02-01", price: 21.41659 },
  { date: "2021-03-01", price: 23.26459 },
  { date: "2021-04-01", price: 25.29424 },
  { date: "2021-05-01", price: 26.70598 },
  { date: "2021-06-01", price: 27.50291 },
  { date: "2021-07-01", price: 25.05547 },
  { date: "2021-08-01", price: 23.16411 },
  { date: "2021-09-01", price: 25.52366 },
  { date: "2021-10-01", price: 27.80797 },
  { date: "2021-11-01", price: 29.06497 },
  { date: "2021-12-01", price: 27.39255 },
  { date: "2022-01-01", price: 23.75563 },
  { date: "2022-02-01", price: 25.03292 },
  { date: "2022-03-01", price: 27.28063 },
  { date: "2022-04-01", price: 29.65583 },
  { date: "2022-05-01", price: 31.78751 },
  { date: "2022-06-01", price: 32.13162 },
  { date: "2022-07-01", price: 28.99215 },
  { date: "2022-08-01", price: 28.85352 },
  { date: "2022-09-01", price: 30.32305 },
  { date: "2022-10-01", price: 33.6673 },
  { date: "2022-11-01", price: 36.80172 },
  { date: "2022-12-01", price: 35.74464 },
  { date: "2023-01-01", price: 31.5452 },
  { date: "2023-02-01", price: 26.1427 },
  { date: "2023-03-01", price: 27.85262 },
  { date: "2023-04-01", price: 29.83594 },
  { date: "2023-05-01", price: 30.53298 },
  { date: "2023-06-01", price: 30.28612 },
  { date: "2023-07-01", price: 26.50581 },
  { date: "2023-08-01", price: 23.5968 },
  { date: "2023-09-01", price: 23.73479 },
  { date: "2023-10-01", price: 30.13545 },
  { date: "2023-11-01", price: 33.03082 },
  { date: "2023-12-01", price: 30.03661 },
  { date: "2024-01-01", price: 26.36486 },
  { date: "2024-02-01", price: 27.08811 },
  { date: "2024-03-01", price: 28.02799 },
  { date: "2024-04-01", price: 30.2222 },
  { date: "2024-05-01", price: 32.02995 },
  { date: "2024-06-01", price: 32.66048 },
  { date: "2024-07-01", price: 31.67946 },
  { date: "2024-08-01", price: 28.39984 },
  { date: "2024-09-01", price: 26.08041 },
  { date: "2024-10-01", price: 28.93983 },
  { date: "2024-11-01", price: 33.27149 },
  { date: "2024-12-01", price: 34.01213 },
  { date: "2025-01-01", price: 28.63389 },
  { date: "2025-02-01", price: 27.41508 },
  { date: "2025-03-01", price: 28.39439 },
  { date: "2025-04-01", price: 32.32907 },
  { date: "2025-05-01", price: 34.70209 },
  { date: "2025-06-01", price: 34.57768 },
  { date: "2025-07-01", price: 29.1404 },
  { date: "2025-08-01", price: 25.64791 },
  { date: "2025-09-01", price: 26.22529 },
  { date: "2025-10-01", price: 29.29041 },
  { date: "2025-11-01", price: 33.58157 },
  { date: "2025-12-01", price: 32.39592 },
];

export type YearlySummaryPoint = {
  year: number;
  averagePrice: number;
  yearOverYear: number | null;
};

export const getYearlySummary = (): YearlySummaryPoint[] => {
  const yearlyMap = new Map<number, number[]>();

  for (const point of LOW_VOLTAGE_POWER_MONTHLY_PRICES) {
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
