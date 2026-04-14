/**
 * 月次振り返りページ用データヘルパー
 * retrospective-data.ts の年次データから、指定年月の4区分データを取得する
 */

const RETROSPECTIVE_YEARS = [2020, 2021, 2022, 2023, 2024, 2025] as const;
type RetrospectiveYear = (typeof RETROSPECTIVE_YEARS)[number];

// columnIndex: [特別高圧=0, 高圧=1, 低圧電灯=2, 低圧電力=3]
const YEARLY_DATASET: Record<RetrospectiveYear, readonly (readonly [number, number, number, number])[]> = {
  2020: [
    [11.59689, 15.05907, 21.44141, 23.33562],
    [11.52701, 14.92423, 21.40224, 24.10054],
    [11.49169, 15.09892, 21.4018, 25.15319],
    [11.68643, 15.41151, 21.53155, 26.09599],
    [11.69777, 15.82179, 21.79822, 27.79532],
    [11.60593, 15.18385, 22.18, 27.71624],
    [11.7582, 15.02283, 22.15219, 26.01676],
    [11.49271, 14.71423, 22.06617, 23.47337],
    [11.17056, 14.32724, 21.74636, 22.8237],
    [10.26079, 13.99231, 20.95819, 26.40765],
    [9.952043, 13.59679, 20.12864, 27.00812],
    [9.74004, 13.1468, 19.70699, 24.91541],
  ],
  2021: [
    [9.646761, 13.03867, 19.45762, 20.01056],
    [9.725391, 12.89822, 19.42905, 21.41659],
    [9.769137, 13.21202, 19.60711, 23.26459],
    [10.0461, 13.67085, 19.99482, 25.29424],
    [10.41201, 14.22556, 20.76116, 26.70598],
    [10.53776, 14.05022, 21.53248, 27.50291],
    [11.06963, 14.30518, 21.83409, 25.05547],
    [11.19998, 14.39637, 22.07165, 23.16411],
    [11.59427, 14.94917, 22.36642, 25.52366],
    [11.55434, 15.14645, 22.63175, 27.80797],
    [12.0215, 15.48264, 22.52315, 29.06497],
    [12.37911, 15.64394, 22.61123, 27.39255],
  ],
  2022: [
    [12.81592, 15.79904, 22.99882, 23.75563],
    [13.80314, 16.66576, 23.90161, 25.03292],
    [14.48632, 17.63385, 24.59326, 27.28063],
    [15.08708, 18.45015, 24.91716, 29.65583],
    [15.33672, 19.01453, 25.49582, 31.78751],
    [15.46441, 18.88125, 26.24696, 32.13162],
    [16.73036, 19.97943, 27.12856, 28.99215],
    [17.71479, 21.05655, 27.9327, 28.85352],
    [19.49945, 22.58069, 28.59377, 30.32305],
    [20.13789, 24.18994, 29.25057, 33.6673],
    [21.53389, 25.64257, 29.76907, 36.80172],
    [23.11012, 27.03003, 31.23845, 35.74464],
  ],
  2023: [
    [23.88089, 27.48558, 31.25489, 31.5452],
    [24.16928, 24.69981, 25.60497, 26.1427],
    [22.91141, 24.05292, 24.89027, 27.85262],
    [24.20178, 24.79219, 24.68128, 29.83594],
    [23.05446, 24.77339, 24.95428, 30.53298],
    [21.50496, 22.96874, 25.2279, 30.28612],
    [20.72707, 21.69218, 25.06436, 26.50581],
    [19.74102, 20.53096, 24.27731, 23.5968],
    [19.01652, 19.98224, 23.68067, 23.73479],
    [18.2257, 21.46739, 26.1983, 30.13545],
    [18.41238, 21.69863, 25.63728, 33.03082],
    [18.42202, 21.35238, 25.03151, 30.03661],
  ],
  2024: [
    [18.4783, 21.01045, 24.66647, 26.36486],
    [18.53248, 20.89386, 24.87948, 27.08811],
    [18.40722, 21.17356, 25.10183, 28.02799],
    [18.38915, 21.347, 25.05291, 30.2222],
    [17.97632, 21.41819, 25.75383, 32.02995],
    [17.74392, 21.6872, 27.62523, 32.66048],
    [17.97487, 22.12128, 29.04209, 31.67946],
    [17.97011, 21.88944, 28.72961, 28.39984],
    [18.00377, 20.27322, 25.39195, 26.08041],
    [17.94562, 20.86378, 25.60914, 28.93983],
    [18.50322, 22.03036, 26.60893, 33.27149],
    [18.61533, 22.91959, 28.199, 34.01213],
  ],
  2025: [
    [18.32817, 22.24823, 27.29205, 28.63389],
    [18.28577, 20.9526, 25.2326, 27.41508],
    [17.85685, 21.0486, 25.47846, 28.39439],
    [18.04825, 21.98799, 27.03588, 32.32907],
    [17.66129, 22.62949, 28.98468, 34.70209],
    [17.289, 21.74257, 28.84359, 34.57768],
    [17.17733, 21.11848, 27.87938, 29.1404],
    [17.19681, 19.90975, 25.94834, 25.64791],
    [16.90795, 19.71978, 25.73976, 26.22529],
    [16.56632, 20.11444, 26.15672, 29.29041],
    [16.78427, 21.32138, 27.32027, 33.58157],
    [16.86709, 20.94959, 26.77882, 32.39592],
  ],
};

const round1 = (v: number) => Math.round(v * 10) / 10;

type CategoryValues = {
  label: string;
  shortLabel: string;
  value: number;
  prevMonthValue: number | null;
  diff: number | null;
  prevYearValue: number | null;
  prevYearDiff: number | null;
};

export type MonthlyPageData = {
  year: number;
  month: number; // 1-indexed
  categories: CategoryValues[];
  /** 直近6ヶ月の推移データ（当月含む、古い順） */
  trendData: {
    label: string; // "2025/7" 形式
    values: [number, number, number, number]; // [特別高圧, 高圧, 低圧電灯, 低圧電力]
  }[];
  /** 同月の過去年データ（前年同月比テーブル用） */
  sameMonthHistory: {
    year: number;
    values: [number, number, number, number];
  }[];
};

function getMonthlyRow(year: number, monthIndex: number): readonly [number, number, number, number] | null {
  if (year in YEARLY_DATASET) {
    const rows = YEARLY_DATASET[year as RetrospectiveYear];
    if (monthIndex >= 0 && monthIndex < rows.length) {
      return rows[monthIndex];
    }
  }
  return null;
}

function getPrevMonth(year: number, month: number): { year: number; monthIndex: number } {
  if (month === 1) return { year: year - 1, monthIndex: 11 };
  return { year, monthIndex: month - 2 };
}

const CATEGORY_INFO = [
  { label: "特別高圧", shortLabel: "特高", colIdx: 0 },
  { label: "高圧", shortLabel: "高圧", colIdx: 1 },
  { label: "低圧電灯", shortLabel: "低灯", colIdx: 2 },
  { label: "低圧電力", shortLabel: "低力", colIdx: 3 },
] as const;

export function getMonthlyPageData(year: number, month: number): MonthlyPageData | null {
  const monthIndex = month - 1;
  const currentRow = getMonthlyRow(year, monthIndex);
  if (!currentRow) return null;

  const prev = getPrevMonth(year, month);
  const prevRow = getMonthlyRow(prev.year, prev.monthIndex);
  const prevYearRow = getMonthlyRow(year - 1, monthIndex);

  const categories: CategoryValues[] = CATEGORY_INFO.map(({ label, shortLabel, colIdx }) => {
    const value = round1(currentRow[colIdx]);
    const prevMonthValue = prevRow ? round1(prevRow[colIdx]) : null;
    const prevYearValue = prevYearRow ? round1(prevYearRow[colIdx]) : null;
    return {
      label,
      shortLabel,
      value,
      prevMonthValue,
      diff: prevMonthValue !== null ? round1(value - prevMonthValue) : null,
      prevYearValue,
      prevYearDiff: prevYearValue !== null ? round1(value - prevYearValue) : null,
    };
  });

  // 直近6ヶ月のトレンドデータ
  const trendData: MonthlyPageData["trendData"] = [];
  let tY = year;
  let tM = month;
  for (let i = 0; i < 6; i++) {
    const offset = 5 - i; // 5ヶ月前から当月まで
    let trendYear = year;
    let trendMonth = month - offset;
    while (trendMonth <= 0) {
      trendYear--;
      trendMonth += 12;
    }
    const row = getMonthlyRow(trendYear, trendMonth - 1);
    if (row) {
      trendData.push({
        label: `${trendYear}/${trendMonth}`,
        values: [round1(row[0]), round1(row[1]), round1(row[2]), round1(row[3])],
      });
    }
  }

  // 同月の過去年データ（最大4年分）
  const sameMonthHistory: MonthlyPageData["sameMonthHistory"] = [];
  for (const y of [2022, 2023, 2024, 2025]) {
    if (y >= year) continue;
    const row = getMonthlyRow(y, monthIndex);
    if (row) {
      sameMonthHistory.push({
        year: y,
        values: [round1(row[0]), round1(row[1]), round1(row[2]), round1(row[3])],
      });
    }
  }
  // 当年のデータも追加
  sameMonthHistory.push({
    year,
    values: [round1(currentRow[0]), round1(currentRow[1]), round1(currentRow[2]), round1(currentRow[3])],
  });

  return { year, month, categories, trendData, sameMonthHistory };
}
