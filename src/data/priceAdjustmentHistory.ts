/**
 * 法人電気料金の3大調整項目（再エネ賦課金・燃料費調整額・市場価格調整額/JEPX）の
 * 推移データを一元管理するモジュール。
 *
 * 数値はいずれも資源エネルギー庁・電力会社の公表値および JEPX 公表値に基づく概算。
 * 月次の実態値は各電力会社の公表資料を必ず確認してください。
 */

import { RENEWABLE_SURCHARGE_DATA } from "../app/electricity-price-without-renewable-surcharge/_lib/renewable-surcharge-data";
import { JEPX_SYSTEM_PRICE_YEARLY } from "./businessElectricityTrendHubData";

export { RENEWABLE_SURCHARGE_DATA, JEPX_SYSTEM_PRICE_YEARLY };

/**
 * 燃料費調整額（東京電力エナジーパートナー 高圧業務用）の
 * 年度平均の概算推移。
 *
 * 算定対象となる貿易統計上のLNG・石炭・原油CIF価格の
 * 約3〜5ヶ月遅れの影響を反映している。
 *
 * 2023年1月〜9月は政府の電気・ガス価格激変緩和対策事業により
 * 高圧 3.5円/kWh の値引きが上乗せされ、2023年10月〜2024年4月に
 * 1.8円/kWh、以降は段階的に縮小された。
 *
 * 値は単価ベース（円/kWh、小数第2位を四捨五入）。
 */
export type FuelCostAdjustmentYearRow = {
  fiscalYear: number;
  yenPerKwh: number;
  subsidyAppliedYen?: number;
  comment: string;
};

export const FUEL_COST_ADJUSTMENT_TEPCO_HIGH_VOLTAGE: FuelCostAdjustmentYearRow[] = [
  {
    fiscalYear: 2018,
    yenPerKwh: 0.6,
    comment: "原油・LNGは落ち着いた水準。燃調は±ゼロ付近で推移。",
  },
  {
    fiscalYear: 2019,
    yenPerKwh: -0.2,
    comment: "燃料安基調で燃調は小幅のマイナス域。",
  },
  {
    fiscalYear: 2020,
    yenPerKwh: -3.2,
    comment: "コロナ禍での燃料需要低下で大幅マイナス。実質的な値下がり局面。",
  },
  {
    fiscalYear: 2021,
    yenPerKwh: -0.4,
    comment: "年度前半はマイナス、後半にかけて燃料価格上昇で急速に縮小。",
  },
  {
    fiscalYear: 2022,
    yenPerKwh: 6.8,
    comment: "ウクライナ危機でLNGスポット急騰。自由料金では上限撤廃。規制料金は上限到達。",
  },
  {
    fiscalYear: 2023,
    yenPerKwh: 1.1,
    subsidyAppliedYen: 3.2,
    comment: "激変緩和対策事業により高圧は 1〜9月 3.5円/kWh、10月〜 1.8円/kWh の値引きが反映。",
  },
  {
    fiscalYear: 2024,
    yenPerKwh: 2.4,
    subsidyAppliedYen: 1.1,
    comment: "補助は縮小局面。燃料価格は高止まりで燃調は再上昇。",
  },
  {
    fiscalYear: 2025,
    yenPerKwh: 3.1,
    subsidyAppliedYen: 0.3,
    comment: "補助は再開・終了を繰り返し、ベースは燃料価格に依存。",
  },
  {
    fiscalYear: 2026,
    yenPerKwh: 3.3,
    comment: "補助なしを前提。LNG・原油の高止まり継続で燃調も高値圏。",
  },
];

/**
 * LNG・原油 CIF 価格（貿易統計、参考値）。
 * 燃料費調整額の算定基礎となる輸入価格の年次推移を把握するための補助データ。
 */
export type FuelImportPriceRow = {
  fiscalYear: number;
  lngYenPerTon: number;
  crudeYenPerKl: number;
  coalYenPerTon: number;
};

export const FUEL_IMPORT_PRICE_YEARLY: FuelImportPriceRow[] = [
  { fiscalYear: 2018, lngYenPerTon: 62000, crudeYenPerKl: 52000, coalYenPerTon: 13000 },
  { fiscalYear: 2019, lngYenPerTon: 57000, crudeYenPerKl: 48000, coalYenPerTon: 11500 },
  { fiscalYear: 2020, lngYenPerTon: 39000, crudeYenPerKl: 34000, coalYenPerTon: 8800 },
  { fiscalYear: 2021, lngYenPerTon: 64000, crudeYenPerKl: 55000, coalYenPerTon: 14500 },
  { fiscalYear: 2022, lngYenPerTon: 128000, crudeYenPerKl: 84000, coalYenPerTon: 38000 },
  { fiscalYear: 2023, lngYenPerTon: 95000, crudeYenPerKl: 78000, coalYenPerTon: 25000 },
  { fiscalYear: 2024, lngYenPerTon: 88000, crudeYenPerKl: 76000, coalYenPerTon: 21000 },
  { fiscalYear: 2025, lngYenPerTon: 92000, crudeYenPerKl: 79000, coalYenPerTon: 22500 },
];

/**
 * 再エネ賦課金の簡易サマリー（チャート用）。
 */
export const RENEWABLE_SURCHARGE_YEARLY_SIMPLE = RENEWABLE_SURCHARGE_DATA.map((row) => ({
  fiscalYear: row.fiscalYear,
  unitPriceYenPerKwh: row.unitPriceYenPerKwh,
}));

/**
 * 月次使用量別の再エネ賦課金年間負担試算。
 */
export type BusinessUsageProfile = {
  label: string;
  monthlyKwh: number;
  description: string;
};

export const BUSINESS_USAGE_PROFILES: BusinessUsageProfile[] = [
  { label: "小規模オフィス", monthlyKwh: 3000, description: "事務所・小規模店舗" },
  { label: "中規模店舗", monthlyKwh: 10000, description: "飲食・物販の中規模テナント" },
  { label: "中規模工場・倉庫", monthlyKwh: 50000, description: "設備稼働のある事業所" },
  { label: "大規模施設", monthlyKwh: 200000, description: "ショッピングモール・中規模工場" },
  { label: "大規模工場", monthlyKwh: 1000000, description: "連続操業の製造現場" },
];
