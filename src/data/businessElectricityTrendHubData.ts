import { EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES } from "../app/business-electricity-retrospective/_lib/extra-high-voltage-price-data";
import { HIGH_VOLTAGE_MONTHLY_PRICES } from "../app/business-electricity-retrospective/_lib/high-voltage-price-data";
import { LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES } from "../app/business-electricity-retrospective/_lib/low-voltage-lighting-price-data";
import { LOW_VOLTAGE_POWER_MONTHLY_PRICES } from "../app/business-electricity-retrospective/_lib/low-voltage-power-price-data";
import { RENEWABLE_SURCHARGE_DATA } from "../app/electricity-price-without-renewable-surcharge/_lib/renewable-surcharge-data";

type VoltageSeries = "extraHighVoltage" | "highVoltage" | "lowVoltageLighting" | "lowVoltagePower";

export type BusinessPriceMonthlyPoint = {
  month: string;
  label: string;
  extraHighVoltage: number;
  highVoltage: number;
  lowVoltageLighting: number;
  lowVoltagePower: number;
};

const toMonthKey = (rawDate: string): string => rawDate.slice(0, 7);
const toMonthLabel = (month: string): string => month.replace("-", "/");

const highVoltageMap = new Map(HIGH_VOLTAGE_MONTHLY_PRICES.map((point) => [toMonthKey(point.date), point.price]));
const lowVoltageLightingMap = new Map(LOW_VOLTAGE_LIGHTING_MONTHLY_PRICES.map((point) => [toMonthKey(point.date), point.price]));
const lowVoltagePowerMap = new Map(LOW_VOLTAGE_POWER_MONTHLY_PRICES.map((point) => [toMonthKey(point.date), point.price]));

export const BUSINESS_ELECTRICITY_MONTHLY_SERIES: BusinessPriceMonthlyPoint[] = EXTRA_HIGH_VOLTAGE_MONTHLY_PRICES.map((point) => {
  const month = toMonthKey(point.date);
  return {
    month,
    label: toMonthLabel(month),
    extraHighVoltage: point.price,
    highVoltage: highVoltageMap.get(month) ?? 0,
    lowVoltageLighting: lowVoltageLightingMap.get(month) ?? 0,
    lowVoltagePower: lowVoltagePowerMap.get(month) ?? 0,
  };
});

export const MAIN_CHART_MARKERS = [
  { month: "2021-01", shortLabel: "2021", detail: "寒波・LNG在庫低下で市場価格が急騰。" },
  { month: "2022-02", shortLabel: "2022", detail: "ロシアのウクライナ侵略後、燃料・電力市場が大きく変動。" },
  { month: "2023-01", shortLabel: "2023", detail: "補助政策の本格実施で、見かけの請求負担が下がる局面。" },
  { month: "2024-05", shortLabel: "2024", detail: "補助縮小・再エネ賦課金上昇で、再び負担感が出やすくなる。" },
  { month: "2025-01", shortLabel: "2025", detail: "冬季の支援再開と制度変更を併せて読む必要がある局面。" },
  { month: "2026-01", shortLabel: "2026", detail: "支援再開期。補助影響と本来水準の切り分けが重要。" },
] as const;

export const TREND_EVENT_TIMELINE = [
  {
    year: "2016",
    title: "電力小売全面自由化",
    whatHappened: "小売全面自由化で競争環境が拡大し、料金比較の前提が多様化。",
    whyItMatters: "契約メニュー差が大きくなり、単純な単価比較だけでは実態を捉えにくくなりました。",
  },
  {
    year: "2021/01",
    title: "寒波・LNG在庫低下・市場価格高騰",
    whatHappened: "需給ひっ迫でJEPX価格が急騰し、市場環境が不安定化。",
    whyItMatters: "市場要因が調整項目や調達コストに波及し、法人単価にも遅れて反映されやすくなりました。",
  },
  {
    year: "2022/02",
    title: "ウクライナ侵略後のエネルギー高",
    whatHappened: "燃料価格・為替・調達環境が重なって大幅な上昇局面に。",
    whyItMatters: "2022年後半から2023年前半は、複数契約区分でピーク形成の起点になりました。",
  },
  {
    year: "2023",
    title: "電気・ガス料金支援の本格実施",
    whatHappened: "請求上の軽減措置が導入され、見かけの負担が抑制。",
    whyItMatters: "料金の本来水準と請求額の見え方が乖離し、比較時の注意点が増えました。",
  },
  {
    year: "2024",
    title: "補助縮小・一部終了・再実施",
    whatHappened: "補助が連続的ではなく、時期ごとに強弱が発生。",
    whyItMatters: "前月比だけでは判断しづらく、制度要因を重ねて読む必要が高まりました。",
  },
  {
    year: "2025-2026",
    title: "冬季支援の再開局面",
    whatHappened: "冬季を中心に支援が再開し、区分別に効き方の差が継続。",
    whyItMatters: "高止まり局面では、補助の有無を分けて実力単価を確認する実務が重要です。",
  },
  {
    year: "2023-2026",
    title: "再エネ賦課金の低下後再上昇",
    whatHappened: "2023年度に低下した後、2024年度以降は上昇局面へ。",
    whyItMatters: "単価トレンドだけでなく、制度負担の増減が請求見え方を大きく変えます。",
  },
] as const;

export const JEPX_SYSTEM_PRICE_YEARLY = [
  { year: 2016, systemPriceYenPerKwh: 8.47 },
  { year: 2017, systemPriceYenPerKwh: 9.74 },
  { year: 2018, systemPriceYenPerKwh: 9.74 },
  { year: 2019, systemPriceYenPerKwh: 7.92 },
  { year: 2020, systemPriceYenPerKwh: 11.12 },
  { year: 2021, systemPriceYenPerKwh: 13.48 },
  { year: 2022, systemPriceYenPerKwh: 20.37 },
  { year: 2023, systemPriceYenPerKwh: 10.74 },
  { year: 2024, systemPriceYenPerKwh: 12.3 },
  { year: 2025, systemPriceYenPerKwh: 11.05 },
] as const;

export const RENEWABLE_SURCHARGE_YEARLY = RENEWABLE_SURCHARGE_DATA.filter((row) => row.fiscalYear >= 2016).map((row) => ({
  fiscalYear: row.fiscalYear,
  unitPriceYenPerKwh: row.unitPriceYenPerKwh,
}));

export const SUBSIDY_PERIOD_BANDS = [
  {
    label: "2023/01-2023/09",
    lowVoltage: "実施（低圧向け支援単価が相対的に大きい）",
    highVoltage: "実施（低圧より小さい単価で実施）",
    extraHighVoltage: "別枠・自治体/個別制度で対応されるケースが多い",
  },
  {
    label: "2023/10-2024/04",
    lowVoltage: "継続（段階的に単価縮小）",
    highVoltage: "継続（段階的に単価縮小）",
    extraHighVoltage: "個別制度・別枠支援が中心",
  },
  {
    label: "2024/08-2024/10",
    lowVoltage: "再実施",
    highVoltage: "再実施",
    extraHighVoltage: "制度対象の確認が必要",
  },
  {
    label: "2025/01-2025/03",
    lowVoltage: "冬季支援を実施",
    highVoltage: "冬季支援を実施",
    extraHighVoltage: "別枠支援が中心",
  },
  {
    label: "2026/01-2026/03",
    lowVoltage: "冬季支援の再開局面",
    highVoltage: "冬季支援の再開局面",
    extraHighVoltage: "別枠・個別公募の確認が必要",
  },
] as const;

export const CONTRACT_VIEWPOINT_ROWS = [
  {
    contractType: "特別高圧",
    target: "大規模工場・データセンター等（契約電力2,000kW以上目安）",
    unitPriceView: "単価は相対的に低めでも、使用量規模が大きく総額影響は大きい",
    adjustmentImpact: "調整項目の微小な変化でも総額影響が拡大しやすい",
    subsidyView: "一般高低圧とは別枠・個別制度で扱われることがある",
    practicalView: "単価差より総額影響とヘッジ方針を重視して判断",
  },
  {
    contractType: "高圧",
    target: "中規模工場・商業施設・病院等（50〜2,000kW目安）",
    unitPriceView: "法人比較の中心になりやすく、ベンチマークとして使いやすい",
    adjustmentImpact: "燃料・市場要因の影響が請求へ反映されやすい",
    subsidyView: "低圧より単価支援が小さい傾向",
    practicalView: "同条件比較と契約更新タイミングの管理が重要",
  },
  {
    contractType: "低圧電灯",
    target: "小規模店舗・事務所等（単相、50kW未満）",
    unitPriceView: "単価水準は高圧より高めに見えやすい",
    adjustmentImpact: "基本料金と従量料金構成の印象差が出やすい",
    subsidyView: "補助の見え方が比較的強く出やすい",
    practicalView: "契約条件だけでなく使用パターンとの相性確認が必要",
  },
  {
    contractType: "低圧動力",
    target: "小規模工場・空調/動力設備を持つ施設（三相、50kW未満）",
    unitPriceView: "季節要因・稼働要因で振れ幅が大きく見えることがある",
    adjustmentImpact: "運転時間帯や負荷率による請求変動の体感が強い",
    subsidyView: "低圧電灯同様、補助時期の見え方変化が大きい",
    practicalView: "月次の使用実態とセットで見ないと誤読しやすい",
  },
] as const;

const averageForYear = (series: VoltageSeries, year: number): number => {
  const points = BUSINESS_ELECTRICITY_MONTHLY_SERIES.filter((point) => point.month.startsWith(String(year)));
  const avg = points.reduce((sum, point) => sum + point[series], 0) / points.length;
  return Number(avg.toFixed(2));
};

const peakPoint = (series: VoltageSeries): { month: string; value: number } => {
  return BUSINESS_ELECTRICITY_MONTHLY_SERIES.reduce(
    (currentPeak, point) => {
      if (point[series] > currentPeak.value) {
        return { month: point.month, value: point[series] };
      }
      return currentPeak;
    },
    { month: BUSINESS_ELECTRICITY_MONTHLY_SERIES[0].month, value: BUSINESS_ELECTRICITY_MONTHLY_SERIES[0][series] }
  );
};

const latestPoint = (series: VoltageSeries): { month: string; value: number } => {
  const latest = BUSINESS_ELECTRICITY_MONTHLY_SERIES[BUSINESS_ELECTRICITY_MONTHLY_SERIES.length - 1];
  return { month: latest.month, value: latest[series] };
};

const makeTransitionCard = (label: string, series: VoltageSeries) => {
  const baseline2019 = averageForYear(series, 2019);
  const peak = peakPoint(series);
  const latest = latestPoint(series);
  const peakDelta = Number((peak.value - baseline2019).toFixed(2));
  const peakDeltaPercent = Number((((peak.value - baseline2019) / baseline2019) * 100).toFixed(1));
  const latestDelta = Number((latest.value - baseline2019).toFixed(2));
  const latestDeltaPercent = Number((((latest.value - baseline2019) / baseline2019) * 100).toFixed(1));

  return {
    label,
    baselineLabel: "2019年平均（公開月次の基準期）",
    baselineValue: baseline2019,
    peakLabel: `ピーク（月次最高）${peak.month.replace("-", "/")}`,
    peakValue: Number(peak.value.toFixed(2)),
    peakDelta,
    peakDeltaPercent,
    latestLabel: `最新（${latest.month.replace("-", "/")}）`,
    latestValue: Number(latest.value.toFixed(2)),
    latestDelta,
    latestDeltaPercent,
  };
};

export const TRANSITION_COMPARISON_CARDS = [
  makeTransitionCard("特別高圧", "extraHighVoltage"),
  makeTransitionCard("高圧", "highVoltage"),
  makeTransitionCard("低圧電灯", "lowVoltageLighting"),
  makeTransitionCard("低圧動力", "lowVoltagePower"),
];
