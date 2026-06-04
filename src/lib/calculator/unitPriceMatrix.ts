import type { BuildingType, ContractType, Region, ScaleType } from "./types";
import { getLatestSurcharge } from "../data/renewableSurcharge";

/**
 * D-1 業種別電気代計算機 単価マトリクス
 *
 * 出典:
 * - 各電力会社公式の料金プラン公表
 * - 各社統合報告書（電源構成・燃調実績）
 * - 資源エネルギー庁・OCCTO・電力ガス取引監視等委員会の公表データ
 * - 既存 region-* 9本／industry-region 15本記事から抽出した実在レンジ
 * - 既存 src/lib/simulator/constants.ts（contractFactorMap / regionFactorMap）
 * - 既存 src/components/benchmark/BenchmarkTool.tsx（業種別単価目安）
 * 参照日: 2025年10月時点（最新公開情報を継続反映）
 *
 * 注意: すべての値は公開情報に基づく目安レンジです。具体的単価は個別見積で確認してください。
 * 本計算機は法人需要家の判断材料を提供するもので、特定企業の優劣評価は行いません。
 */

/**
 * 業種別の基準電力量単価（円/kWh、shutoken×high圧×medium規模時の中央値）。
 * benchmark 既存値と industry-region 15本のレンジから抽出。
 * 燃料費調整・再エネ賦課金は別途加算するため、ここは「基本電力量料金部分」に相当。
 */
export const buildingBaseUnitPriceMap: Record<BuildingType, number> = {
  office: 16.5, // オフィスビル: 空調・照明・サーバ
  retail: 17.5, // 小売・商業: 冷凍冷蔵・照明
  restaurant: 18.5, // 飲食: 厨房・冷設備（小規模性高）
  factory: 13.5, // 製造業: 大口・特高比率高
  welfare: 15.0, // 医療・福祉: 24時間運転
  hotel: 16.5, // ホテル・宿泊: 給湯・空調
  warehouse: 14.0, // 物流・倉庫: 冷凍冷蔵・マテハン
  school: 17.0, // 教育: 季節変動大
  datacenter: 13.0, // データセンター: 大口・連続高負荷で低単価
  public: 16.5, // その他・公共: オフィス相当
};

/**
 * 契約区分別の単価係数（既存 simulator/constants.ts と一致）。
 * 低圧 > 高圧 > 特別高圧 の単価傾向を反映。
 */
export const contractFactorMap: Record<ContractType, number> = {
  low: 1.18, // 低圧は基本料金分の上乗せが大きい
  high: 1.0, // 基準
  special: 0.92, // 特別高圧は大口割引
};

/**
 * 規模別の単価係数。
 * 規模が大きいほどスケールメリットで単価低下（小売<中堅<大規模）。
 */
export const scaleFactorMap: Record<ScaleType, number> = {
  small: 1.06, // 月10万kWh未満
  medium: 1.0, // 月10万〜100万kWh
  large: 0.94, // 月100万kWh超
};

/**
 * 規模別の月間kWhデフォルト値（monthlyKwh未指定時に使用）。
 * 各レンジの代表値（中央値）。
 */
export const scaleDefaultMonthlyKwhMap: Record<ScaleType, number> = {
  small: 50_000, // 中小: 月10万kWh未満の代表
  medium: 300_000, // 中堅: 月10万〜100万kWh
  large: 1_500_000, // 大規模: 月100万kWh超
};

/**
 * エリア別の単価係数（既存 simulator/constants.ts と一致）。
 * 出典: 各電力会社公式料金プラン・エネ庁エリア別公表値。
 */
export const regionFactorMap: Record<Region, number> = {
  hokkaido: 1.08, // 火力依存度大・寒冷地
  tohoku: 1.03,
  "kita-kanto": 1.01,
  shutoken: 1.0, // 基準
  hokuriku: 1.02,
  chubu: 1.0,
  kansai: 0.98, // 原子力稼働率高
  chugoku: 0.99,
  shikoku: 0.98, // 伊方原発稼働
  kyushu: 0.97, // 原発4基稼働＋太陽光大量導入
  okinawa: 1.10, // 独立系統・火力依存度大
};

/**
 * 燃料費調整額（直近3ヶ月平均の概算値、円/kWh）。
 * 出典: 各社公表の燃調単価実績（2025年7-9月平均の概算目安）。
 * エリア別に火力依存度・原子力比率の差を反映。
 * 実際の燃調は月ごとに変動するため、ここは目安値。
 */
export const fuelAdjustmentByRegion: Record<Region, number> = {
  hokkaido: 2.6, // 泊原発停止・火力依存
  tohoku: 2.2, // 女川再稼働進行
  "kita-kanto": 2.4,
  shutoken: 2.4,
  hokuriku: 2.0, // 水力比率高
  chubu: 2.3, // LNG依存
  kansai: 1.8, // 原発稼働
  chugoku: 2.1, // 島根2号機再稼働進行
  shikoku: 1.9, // 伊方稼働
  kyushu: 1.7, // 玄海・川内4基稼働＋太陽光
  okinawa: 2.9, // 独立系統・火力依存
};

/**
 * 再生可能エネルギー発電促進賦課金（円/kWh、2026年度）。
 * 全国一律。出典: 経済産業省告示。
 */
export const RENEWABLE_SURCHARGE_PER_KWH = getLatestSurcharge().unitPriceYenPerKwh; // 2026年度=4.18（SSOT: src/lib/data/renewableSurcharge 由来）

/**
 * 基本料金の電力量単価換算（円/kWh）。
 * 契約電力×単価で計算する基本料金を、年間kWhあたりに均した目安値。
 * 契約区分により負担割合が異なる。
 */
export const baseChargeEquivalentMap: Record<ContractType, number> = {
  low: 1.5, // 低圧電灯・低圧電力
  high: 1.0, // 高圧（実量制ベース）
  special: 0.7, // 特別高圧（協議制で割安）
};

/**
 * レンジ幅（中央値からの±倍率）。
 * 個別需要家の条件差・燃調変動・期間ばらつきを織り込む。
 */
export const PRICE_RANGE_LOW_MULTIPLIER = 0.92;
export const PRICE_RANGE_HIGH_MULTIPLIER = 1.08;

/**
 * 削減余地3案の削減率レンジ（仕様書 §4 より）。
 * 各案の削減率（中央値・低位・高位）を定義。
 */
export const reductionRateMap = {
  contractReview: { low: 0.05, median: 0.1, high: 0.15 },
  energySavingInvestment: { low: 0.1, median: 0.15, high: 0.2 },
  renewableProcurement: { low: 0.03, median: 0.065, high: 0.1 },
} as const;

/**
 * 業種ベンチマーク用の係数。
 * 業種中央値 = 全国平均（shutoken×high×medium）での同業種単価。
 * 業種上位25% = 業種中央値×0.85（よりエネルギー効率が高い水準）。
 */
export const INDUSTRY_BENCHMARK_TOP25_MULTIPLIER = 0.85;
