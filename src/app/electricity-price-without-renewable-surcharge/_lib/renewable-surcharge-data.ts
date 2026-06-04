/**
 * 後方互換の再エクスポート。
 * 再エネ賦課金単価の正準ソースは src/lib/data/renewableSurcharge.ts に移設済み（SSOT化・タスクC-1）。
 * 既存の import 互換のため、本パスからの再エクスポートを維持する。
 */
export { RENEWABLE_SURCHARGE_DATA } from "../../../lib/data/renewableSurcharge";
export type { RenewableSurchargeRow } from "../../../lib/data/renewableSurcharge";
