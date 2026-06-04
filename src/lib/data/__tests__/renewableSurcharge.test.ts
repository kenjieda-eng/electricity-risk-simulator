import { describe, expect, it } from "vitest";
import {
  CURRENT_FISCAL_YEAR,
  getLatestSurcharge,
  getSurchargeByFiscalYear,
  RENEWABLE_SURCHARGE_DATA,
} from "../renewableSurcharge";
import { RENEWABLE_SURCHARGE_PER_KWH } from "../../calculator/unitPriceMatrix";

describe("再エネ賦課金 SSOT（ドリフトガード）", () => {
  it("確定値スナップショット: 2024年度=3.49 円/kWh", () => {
    expect(getSurchargeByFiscalYear(2024)?.unitPriceYenPerKwh).toBe(3.49);
  });

  it("確定値スナップショット: 2025年度=3.98 円/kWh", () => {
    expect(getSurchargeByFiscalYear(2025)?.unitPriceYenPerKwh).toBe(3.98);
  });

  it("確定値スナップショット: 2026年度=4.18 円/kWh", () => {
    expect(getSurchargeByFiscalYear(2026)?.unitPriceYenPerKwh).toBe(4.18);
  });

  it("getLatestSurcharge() は最新年度（2026年度）を返す", () => {
    expect(getLatestSurcharge().fiscalYear).toBe(2026);
    expect(CURRENT_FISCAL_YEAR).toBe(2026);
  });

  it("D-1計算機のスカラーが配列由来と一致する（スカラー手書きドリフト防止）", () => {
    expect(RENEWABLE_SURCHARGE_PER_KWH).toBe(getLatestSurcharge().unitPriceYenPerKwh);
    expect(RENEWABLE_SURCHARGE_PER_KWH).toBe(4.18);
  });

  it("YoY整合: 各行の単価差分が yearOverYearYen と一致する", () => {
    for (let i = 1; i < RENEWABLE_SURCHARGE_DATA.length; i++) {
      const prev = RENEWABLE_SURCHARGE_DATA[i - 1];
      const cur = RENEWABLE_SURCHARGE_DATA[i];
      if (cur.yearOverYearYen === null) continue;
      const diff = Math.round((cur.unitPriceYenPerKwh - prev.unitPriceYenPerKwh) * 100) / 100;
      expect(diff).toBe(cur.yearOverYearYen);
    }
  });
});
