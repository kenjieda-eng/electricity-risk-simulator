export type MonthlyPricePoint = {
  date: string;
  price: number;
};

export const EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES: MonthlyPricePoint[] = [
  { date: "2019-01-01", price: 12.61907 },
  { date: "2019-02-01", price: 13.00546 },
  { date: "2019-03-01", price: 12.81757 },
  { date: "2019-04-01", price: 12.69766 },
  { date: "2019-05-01", price: 12.34266 },
  { date: "2019-06-01", price: 12.12808 },
  { date: "2019-07-01", price: 12.542 },
  { date: "2019-08-01", price: 12.40317 },
  { date: "2019-09-01", price: 12.21034 },
  { date: "2019-10-01", price: 11.60973 },
  { date: "2019-11-01", price: 11.70137 },
  { date: "2019-12-01", price: 11.6237 },
  { date: "2020-01-01", price: 11.59689 },
  { date: "2020-02-01", price: 11.52701 },
  { date: "2020-03-01", price: 11.49169 },
  { date: "2020-04-01", price: 11.68643 },
  { date: "2020-05-01", price: 11.69777 },
  { date: "2020-06-01", price: 11.60593 },
  { date: "2020-07-01", price: 11.7582 },
  { date: "2020-08-01", price: 11.49271 },
  { date: "2020-09-01", price: 11.17056 },
  { date: "2020-10-01", price: 10.26079 },
  { date: "2020-11-01", price: 9.952043 },
  { date: "2020-12-01", price: 9.74004 },
  { date: "2021-01-01", price: 9.646761 },
  { date: "2021-02-01", price: 9.725391 },
  { date: "2021-03-01", price: 9.769137 },
  { date: "2021-04-01", price: 10.0461 },
  { date: "2021-05-01", price: 10.41201 },
  { date: "2021-06-01", price: 10.53776 },
  { date: "2021-07-01", price: 11.06963 },
  { date: "2021-08-01", price: 11.19998 },
  { date: "2021-09-01", price: 11.59427 },
  { date: "2021-10-01", price: 11.55434 },
  { date: "2021-11-01", price: 12.0215 },
  { date: "2021-12-01", price: 12.37911 },
  { date: "2022-01-01", price: 12.81592 },
  { date: "2022-02-01", price: 13.80314 },
  { date: "2022-03-01", price: 14.48632 },
  { date: "2022-04-01", price: 15.08708 },
  { date: "2022-05-01", price: 15.33672 },
  { date: "2022-06-01", price: 15.46441 },
  { date: "2022-07-01", price: 16.73036 },
  { date: "2022-08-01", price: 17.71479 },
  { date: "2022-09-01", price: 19.49945 },
  { date: "2022-10-01", price: 20.13789 },
  { date: "2022-11-01", price: 21.53389 },
  { date: "2022-12-01", price: 23.11012 },
  { date: "2023-01-01", price: 23.88089 },
  { date: "2023-02-01", price: 24.16928 },
  { date: "2023-03-01", price: 22.91141 },
  { date: "2023-04-01", price: 24.20178 },
  { date: "2023-05-01", price: 23.05446 },
  { date: "2023-06-01", price: 21.50496 },
  { date: "2023-07-01", price: 20.72707 },
  { date: "2023-08-01", price: 19.74102 },
  { date: "2023-09-01", price: 19.01652 },
  { date: "2023-10-01", price: 18.2257 },
  { date: "2023-11-01", price: 18.41238 },
  { date: "2023-12-01", price: 18.42202 },
  { date: "2024-01-01", price: 18.4783 },
  { date: "2024-02-01", price: 18.53248 },
  { date: "2024-03-01", price: 18.40722 },
  { date: "2024-04-01", price: 18.38915 },
  { date: "2024-05-01", price: 17.97632 },
  { date: "2024-06-01", price: 17.74392 },
  { date: "2024-07-01", price: 17.97487 },
  { date: "2024-08-01", price: 17.97011 },
  { date: "2024-09-01", price: 18.00377 },
  { date: "2024-10-01", price: 17.94562 },
  { date: "2024-11-01", price: 18.50322 },
  { date: "2024-12-01", price: 18.61533 },
  { date: "2025-01-01", price: 18.32817 },
  { date: "2025-02-01", price: 18.28577 },
  { date: "2025-03-01", price: 17.85685 },
  { date: "2025-04-01", price: 18.04825 },
  { date: "2025-05-01", price: 17.66129 },
  { date: "2025-06-01", price: 17.289 },
  { date: "2025-07-01", price: 17.17733 },
  { date: "2025-08-01", price: 17.19681 },
  { date: "2025-09-01", price: 16.90795 },
  { date: "2025-10-01", price: 16.56632 },
  { date: "2025-11-01", price: 16.78427 },
  { date: "2025-12-01", price: 16.86709 },
];

export type YearlySummaryPoint = {
  year: number;
  averagePrice: number;
  yearOverYear: number | null;
};

export const getYearlySummary = (): YearlySummaryPoint[] => {
  const yearlyMap = new Map<number, number[]>();

  for (const point of EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES) {
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
