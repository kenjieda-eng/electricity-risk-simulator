import { getLatestSurcharge } from "../data/renewableSurcharge";

/**
 * D-2 シナリオ別シミュレーション シナリオΔ（変動）マトリクス
 *
 * D-1（業種別電気代計算機）の単価式の「加算項」にシナリオごとのΔを重ねるための定数テーブル。
 * unitPriceMatrix.ts と同じ設計思想（公開情報ベースの目安レンジ・出典明記・捏造ゼロ）。
 *
 * 出典の軸（各Δは下記公開情報からの「目安レンジ」。確定値ではない将来値は必ず「想定」と明示）:
 * - 資源エネルギー庁: 燃料費調整制度・電力需給見通し・激変緩和措置（電気・ガス価格激変緩和対策事業）の終了
 * - OCCTO（電力広域的運営推進機関）: 供給計画・需給ひっ迫見通し
 * - 各電力会社公表の燃料費調整単価実績（原油・LNG・石炭の3〜5ヶ月遅れ反映）
 * - 経済産業省告示: 再生可能エネルギー発電促進賦課金（再エネ賦課金）単価（SSOT: src/lib/data/renewableSurcharge）
 * - JEPX スポット市場価格の季節変動・需給ひっ迫時のスパイク実績
 * 参照日: 2026年6月時点の公開情報。
 *
 * ★中立性・数値ガバナンス:
 * - 各Δは「そのシナリオが起きた場合」の試算用の目安であり、特定の将来を予測・断定するものではない。
 * - 再エネ賦課金は2026年度の確定単価（SSOT）を基準（baseline=Δ0）とし、将来の上昇はあくまで「想定」。
 * - 特定の電力会社・契約形態の優劣評価は一切行わない。
 *
 * 単位はすべて 円/kWh。市場プレミアムは高圧契約を基準とした目安（契約メニュー別の感応度精緻化はPhase2）。
 */

export type ScenarioId = "baseline" | "upside" | "structural" | "easing";

export type ScenarioDelta = {
  id: ScenarioId;
  /** 表示用ラベル */
  label: string;
  /** シナリオの説明（中立・「起きた場合」の試算である旨を内包） */
  description: string;
  /** 燃料費調整額の増減（円/kWh）。原油・LNG・円安などで変動 */
  deltaFuelAdjustment: number;
  /** 再エネ賦課金の増減（円/kWh）。baseline=0（2026年度確定4.18が基準）。将来上昇は「想定」 */
  deltaSurcharge: number;
  /** 市場連動/需給ひっ迫プレミアム（円/kWh・高圧基準）。JEPXスパイク・容量市場等の上乗せ目安 */
  marketPremium: number;
  /** 激変緩和補助による単価低下分（円/kWh）。式上は減算項。2025年度で補助は終了済のためbaseline含め全0 */
  subsidyReliefDelta: number;
  /** 各Δの出典・前提・「想定」注記 */
  sourceNote: string;
};

/**
 * 4シナリオのΔ定義。
 *
 * 目安レンジ（出典で裏取りした初期値・確定予測ではない）:
 * | シナリオ              | Δ燃調 | Δ賦課金 | 市場プレミアム(高圧基準) | 補助金 |
 * | baseline 標準         |  0    | 0(=4.18) |  0                       | 0      |
 * | upside 原油高・円安・夏ひっ迫 | +3.0 | 0   | +1.5                    | 0      |
 * | structural 構造高止まり | +1.0 | +0.3想定 | +0.8                  | 0      |
 * | easing 緩和           | -1.5  | 0       | -0.5                    | 0      |
 *
 * 合計Δ（baselineからの上乗せ・円/kWh）:
 *   upside +4.5 > structural +2.1 > baseline 0 > easing -2.0（単調性を満たす）
 */
export const SCENARIO_DELTAS: ScenarioDelta[] = [
  {
    id: "baseline",
    label: "標準（現状継続）",
    description:
      "現在の燃料費調整・再エネ賦課金（2026年度確定）・市場水準が当面続くと仮定した基準シナリオ。D-1（業種別電気代計算機）の試算と完全に一致します。",
    deltaFuelAdjustment: 0,
    deltaSurcharge: 0,
    marketPremium: 0,
    subsidyReliefDelta: 0,
    sourceNote:
      "基準シナリオ。再エネ賦課金は2026年度の確定単価（SSOT）、燃料費調整・市場水準は直近実績の目安をそのまま用います（Δ=0）。",
  },
  {
    id: "upside",
    label: "上振れ（原油高・円安・夏の需給ひっ迫）",
    description:
      "原油・LNG価格の上昇と円安が重なり、さらに夏季の需要ピークで需給がひっ迫した場合の試算。あくまで「そうなった場合」の目安で、発生を予測するものではありません。",
    deltaFuelAdjustment: 3.0,
    deltaSurcharge: 0,
    marketPremium: 1.5,
    subsidyReliefDelta: 0,
    sourceNote:
      "Δ燃調 +3.0円/kWh（目安+2〜+4。過去の原油急騰・円安局面で各社燃料費調整が数ヶ月遅れで数円/kWh上振れした実績レンジ）。市場プレミアム +1.5円/kWh（目安+1〜+3。夏季JEPXスパイク・需給ひっ迫時の上乗せ目安）。賦課金は2026年度確定値で据え置き。",
  },
  {
    id: "structural",
    label: "構造高止まり（補助終了・賦課金上昇想定）",
    description:
      "激変緩和措置が終了した状態が続き、再エネ賦課金が次年度以降に上昇すると想定した構造的な高止まりシナリオ。賦課金の上昇幅は確定値ではなく「想定」です。",
    deltaFuelAdjustment: 1.0,
    deltaSurcharge: 0.3,
    marketPremium: 0.8,
    subsidyReliefDelta: 0,
    sourceNote:
      "Δ燃調 +1.0円/kWh（目安+0.5〜+1.5）。Δ賦課金 +0.3円/kWh（目安+0.2〜+0.5）は『次年度以降の上昇を想定した値であり確定値ではない』。基準は2026年度確定の再エネ賦課金単価（SSOT）。市場プレミアム +0.8円/kWh。激変緩和補助は2025年度で終了済のため減算は0。",
  },
  {
    id: "easing",
    label: "緩和（原発再稼働進行・原油安）",
    description:
      "原子力発電の再稼働が進み、原油・LNG価格が落ち着いた場合の試算。電気代が下振れする方向の目安で、こちらも発生を断定するものではありません。",
    deltaFuelAdjustment: -1.5,
    deltaSurcharge: 0,
    marketPremium: -0.5,
    subsidyReliefDelta: 0,
    sourceNote:
      "Δ燃調 -1.5円/kWh（目安-1〜-2。原発再稼働進行・燃料安局面で燃料費調整が低下した実績レンジ）。再エネの制度負担は標準シナリオから据え置き（Δ0）。市場プレミアム -0.5円/kWh（需給緩和で市場価格が落ち着く想定）。",
  },
];

/** ScenarioId 順の固定表示順（baseline → upside → structural → easing）。 */
export const SCENARIO_IDS: ScenarioId[] = SCENARIO_DELTAS.map((s) => s.id);

/** id から ScenarioDelta を取得。該当なしは undefined。 */
export function getScenarioDelta(id: ScenarioId): ScenarioDelta | undefined {
  return SCENARIO_DELTAS.find((s) => s.id === id);
}

/**
 * baseline シナリオは Δ がすべて 0 であることの保証（baseline=D-1一致の前提）。
 * テスト・呼び出し側のガードに利用する。
 */
export const BASELINE_SCENARIO_ID: ScenarioId = "baseline";

/**
 * 基準となる再エネ賦課金単価（円/kWh・2026年度確定）。
 * SSOT（src/lib/data/renewableSurcharge）由来。Δ賦課金はこの値への上乗せ「想定」。
 */
export const SCENARIO_BASE_SURCHARGE_PER_KWH = getLatestSurcharge().unitPriceYenPerKwh;
