export const MONTH_LABELS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"] as const;

export const RETROSPECTIVE_YEARS = [2020, 2021, 2022, 2023, 2024, 2025] as const;

export const CATEGORY_KEYS = [
  "extra-high-voltage",
  "high-voltage",
  "low-voltage-power",
  "low-voltage-lighting",
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];
export type RetrospectiveYear = (typeof RETROSPECTIVE_YEARS)[number];

type CategoryMeta = {
  key: CategoryKey;
  label: string;
  shortLabel: string;
  users: string;
  columnIndex: 0 | 1 | 2 | 3;
};

const CATEGORY_META: Record<CategoryKey, CategoryMeta> = {
  "extra-high-voltage": {
    key: "extra-high-voltage",
    label: "特別高圧",
    shortLabel: "特別高圧",
    users: "大規模工場、データセンター、再開発拠点、自治体の大型設備など",
    columnIndex: 0,
  },
  "high-voltage": {
    key: "high-voltage",
    label: "高圧",
    shortLabel: "高圧",
    users: "中規模工場、病院、学校、物流施設、商業施設、オフィスビルなど",
    columnIndex: 1,
  },
  "low-voltage-power": {
    key: "low-voltage-power",
    label: "低圧電力",
    shortLabel: "低圧電力",
    users: "動力設備を使う店舗・作業場・小規模工場・冷蔵冷凍設備のある事業者など",
    columnIndex: 3,
  },
  "low-voltage-lighting": {
    key: "low-voltage-lighting",
    label: "低圧電灯",
    shortLabel: "低圧電灯",
    users: "照明・コンセント用途が中心の店舗、小規模オフィス、サービス拠点など",
    columnIndex: 2,
  },
};

type MonthlyRow = readonly [number, number, number, number];
type YearlyDataset = Record<RetrospectiveYear, readonly MonthlyRow[]>;

const YEARLY_DATASET: YearlyDataset = {
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

export type RetrospectivePageData = {
  slug: string;
  year: RetrospectiveYear;
  category: CategoryMeta;
  pageTitle: string;
  pageDescription: string;
  monthlyRows: Array<{ month: string; shortMonth: string; value: number }>;
  avg: number;
  maxValue: number;
  maxMonths: string[];
  minValue: number;
  minMonths: string[];
  range: number;
  startValue: number;
  endValue: number;
  startEndDiff: number;
  quarterlyAverages: Array<{ label: string; value: number }>;
  monthlyDigest: string[];
  previousYearComparison: { year: number; avg: number; diff: number } | null;
  nextYearComparison: { year: number; avg: number; diff: number } | null;
};

const round1 = (value: number) => Math.round(value * 10) / 10;

const formatSigned = (value: number) => (value > 0 ? `+${value.toFixed(1)}` : value.toFixed(1));

const getAveragesByCategory = (category: CategoryMeta) => {
  const output = new Map<number, number>();
  for (const year of RETROSPECTIVE_YEARS) {
    const rows = YEARLY_DATASET[year];
    const values = rows.map((row) => round1(row[category.columnIndex]));
    const avg = round1(values.reduce((sum, value) => sum + value, 0) / values.length);
    output.set(year, avg);
  }
  return output;
};

export const getAllRetrospectiveSlugs = () =>
  RETROSPECTIVE_YEARS.flatMap((year) => CATEGORY_KEYS.map((category) => `${year}-${category}`));

export const getRetrospectivePageData = (slug: string): RetrospectivePageData | null => {
  const match = slug.match(/^(\d{4})-(extra-high-voltage|high-voltage|low-voltage-power|low-voltage-lighting)$/);
  if (!match) {
    return null;
  }

  const year = Number(match[1]) as RetrospectiveYear;
  const categoryKey = match[2] as CategoryKey;

  if (!RETROSPECTIVE_YEARS.includes(year) || !CATEGORY_KEYS.includes(categoryKey)) {
    return null;
  }

  const category = CATEGORY_META[categoryKey];
  const rows = YEARLY_DATASET[year];
  const monthlyRows = rows.map((row, idx) => ({
    month: `${year}年${MONTH_LABELS[idx]}`,
    shortMonth: MONTH_LABELS[idx],
    value: round1(row[category.columnIndex]),
  }));

  const values = monthlyRows.map((item) => item.value);
  const avg = round1(values.reduce((sum, value) => sum + value, 0) / values.length);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const maxMonths = monthlyRows.filter((item) => item.value === maxValue).map((item) => item.shortMonth);
  const minMonths = monthlyRows.filter((item) => item.value === minValue).map((item) => item.shortMonth);
  const range = round1(maxValue - minValue);
  const startValue = values[0];
  const endValue = values[values.length - 1];
  const startEndDiff = round1(endValue - startValue);

  const quarterIndices = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11],
  ];
  const quarterlyAverages = quarterIndices.map((indexes, idx) => ({
    label: `Q${idx + 1}`,
    value: round1(indexes.reduce((sum, monthIndex) => sum + values[monthIndex], 0) / indexes.length),
  }));

  const monthlyDigest = monthlyRows.map((item, idx) => {
    if (idx === 0) {
      return `${item.shortMonth}：${item.value.toFixed(1)}円/kWhでスタート`;
    }
    const prev = monthlyRows[idx - 1].value;
    const diff = round1(item.value - prev);
    const direction = diff > 0 ? "上昇" : diff < 0 ? "低下" : "横ばい";
    return `${item.shortMonth}：${item.value.toFixed(1)}円/kWh（前月比 ${formatSigned(diff)}、${direction}）`;
  });

  const averagesByYear = getAveragesByCategory(category);
  const previousAvg = averagesByYear.get(year - 1);
  const nextAvg = averagesByYear.get(year + 1);
  const previousYearComparison =
    previousAvg === undefined ? null : { year: year - 1, avg: previousAvg, diff: round1(avg - previousAvg) };
  const nextYearComparison =
    nextAvg === undefined ? null : { year: year + 1, avg: nextAvg, diff: round1(nextAvg - avg) };

  const pageTitle = `【${year}年】${category.label}の電気料金を振り返る｜月別のkWh単価・グラフ・前後年比較`;
  const pageDescription = `${year}年の${category.label}の電気料金を月別のkWh単価で整理。小数点第一位で四捨五入した表とグラフ、年間平均、高値安値、前後年比較を確認できます。`;

  return {
    slug,
    year,
    category,
    pageTitle,
    pageDescription,
    monthlyRows,
    avg,
    maxValue,
    maxMonths,
    minValue,
    minMonths,
    range,
    startValue,
    endValue,
    startEndDiff,
    quarterlyAverages,
    monthlyDigest,
    previousYearComparison,
    nextYearComparison,
  };
};
