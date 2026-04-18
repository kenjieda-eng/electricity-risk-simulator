"use client";

import { useState, useMemo } from "react";

type Subsidy = {
  name: string;
  agency: string;
  target: string[];
  ratio: string;
  ceiling: string;
  category: ("battery" | "solar" | "ev" | "bems" | "renovation" | "ppa")[];
  forSme: boolean;
  forLarge: boolean;
  forMunicipality: boolean;
};

const SUBSIDIES: Subsidy[] = [
  {
    name: "中小企業経営強化税制",
    agency: "中小企業庁",
    target: ["蓄電池", "省エネ設備", "BEMS"],
    ratio: "即時償却 or 税額控除7-10%",
    ceiling: "なし（取得価額）",
    category: ["battery", "bems", "renovation"],
    forSme: true,
    forLarge: false,
    forMunicipality: false,
  },
  {
    name: "カーボンニュートラル投資促進税制",
    agency: "経産省",
    target: ["蓄電池", "デマンド制御", "需給調整設備"],
    ratio: "即時償却 or 税額控除5-10%",
    ceiling: "500億円",
    category: ["battery", "bems", "renovation"],
    forSme: true,
    forLarge: true,
    forMunicipality: false,
  },
  {
    name: "レジリエンス強化型蓄電池導入支援事業",
    agency: "環境省",
    target: ["蓄電池"],
    ratio: "1/3〜2/3",
    ceiling: "5,000万円",
    category: ["battery"],
    forSme: true,
    forLarge: true,
    forMunicipality: true,
  },
  {
    name: "省エネルギー投資促進支援事業費補助金",
    agency: "資源エネルギー庁",
    target: ["BEMS", "FEMS", "省エネ設備"],
    ratio: "1/2",
    ceiling: "15億円",
    category: ["bems", "renovation"],
    forSme: true,
    forLarge: true,
    forMunicipality: false,
  },
  {
    name: "ストレージパリティ達成に向けた太陽光発電設備等支援事業",
    agency: "環境省",
    target: ["PV+蓄電池"],
    ratio: "定額（kWあたり）",
    ceiling: "5,000万円",
    category: ["solar", "battery", "ppa"],
    forSme: true,
    forLarge: true,
    forMunicipality: true,
  },
  {
    name: "CEV補助金（クリーンエネルギー自動車）",
    agency: "経産省",
    target: ["EV購入", "充電設備"],
    ratio: "車種により40〜85万円",
    ceiling: "車両価格",
    category: ["ev"],
    forSme: true,
    forLarge: true,
    forMunicipality: true,
  },
  {
    name: "東京都 創エネ・蓄エネ機器導入促進事業",
    agency: "東京都",
    target: ["蓄電池", "PV", "V2H"],
    ratio: "1/2〜2/3",
    ceiling: "1,000万円",
    category: ["battery", "solar", "ev"],
    forSme: true,
    forLarge: false,
    forMunicipality: true,
  },
  {
    name: "ZEB化推進事業",
    agency: "環境省",
    target: ["建物まるごと省エネ"],
    ratio: "2/3（ZEB Ready）",
    ceiling: "5億円",
    category: ["renovation", "bems"],
    forSme: true,
    forLarge: true,
    forMunicipality: true,
  },
];

export default function SubsidySearchTool() {
  const [category, setCategory] = useState<string>("all");
  const [orgType, setOrgType] = useState<"sme" | "large" | "municipality">("sme");

  const filtered = useMemo(() => {
    return SUBSIDIES.filter((s) => {
      const catMatch = category === "all" || s.category.includes(category as Subsidy["category"][number]);
      const orgMatch = (orgType === "sme" && s.forSme) || (orgType === "large" && s.forLarge) || (orgType === "municipality" && s.forMunicipality);
      return catMatch && orgMatch;
    });
  }, [category, orgType]);

  return (
    <section className="mt-6 rounded-xl border-2 border-green-300 bg-green-50 p-5">
      <h2 className="text-xl font-semibold text-slate-900">💰 補助金・税制検索ツール</h2>
      <p className="mt-2 text-sm leading-7 text-slate-700">
        設備カテゴリと組織種別で、活用可能な補助金・税制を絞込検索できます。複数組合せで最適な投資設計に。
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700">設備カテゴリ</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="all">すべて</option>
            <option value="battery">蓄電池</option>
            <option value="solar">太陽光</option>
            <option value="ev">EV・充電</option>
            <option value="bems">BEMS/FEMS</option>
            <option value="renovation">省エネ改修</option>
            <option value="ppa">PPA・再エネ</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700">組織種別</label>
          <select value={orgType} onChange={(e) => setOrgType(e.target.value as typeof orgType)} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="sme">中小企業</option>
            <option value="large">大企業</option>
            <option value="municipality">自治体・公共</option>
          </select>
        </div>
      </div>
      <div className="mt-4 overflow-x-auto rounded-lg border border-green-200 bg-white">
        <table className="min-w-[800px] w-full border-collapse text-sm">
          <thead>
            <tr className="bg-green-100">
              <th className="border border-green-200 px-3 py-2 text-left font-semibold">補助金名</th>
              <th className="border border-green-200 px-3 py-2 text-left font-semibold">所管</th>
              <th className="border border-green-200 px-3 py-2 text-left font-semibold">対象</th>
              <th className="border border-green-200 px-3 py-2 text-left font-semibold">補助率</th>
              <th className="border border-green-200 px-3 py-2 text-left font-semibold">上限</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={5} className="border border-green-200 px-3 py-2 text-center text-slate-500">該当する補助金がありません</td></tr>
            ) : (
              filtered.map((s, i) => (
                <tr key={i} className="odd:bg-white even:bg-green-50/40">
                  <td className="border border-green-200 px-3 py-2 font-semibold">{s.name}</td>
                  <td className="border border-green-200 px-3 py-2 text-xs">{s.agency}</td>
                  <td className="border border-green-200 px-3 py-2 text-xs">{s.target.join("・")}</td>
                  <td className="border border-green-200 px-3 py-2 text-xs">{s.ratio}</td>
                  <td className="border border-green-200 px-3 py-2 text-xs">{s.ceiling}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        ※ 主要補助金の抜粋。実際の公募状況・要件は各所管庁・自治体の公式サイトで最新情報を必ず確認してください。
      </p>
    </section>
  );
}
