"use client";

import type {
  BuildingType,
  ContractType,
  Region,
  UsagePattern,
} from "../../../lib/simulator";
import type { SimulatorFormProps } from "./types";

export function SimulatorInputs({ state, setState }: Pick<SimulatorFormProps, "state" | "setState">) {
  const setNumber =
    (key: "springCost" | "summerCost" | "autumnCost" | "winterCost" | "floorArea") =>
    (value: string) =>
      setState((prev) => ({ ...prev, [key]: value === "" ? "" : Number(value) || 0 }));

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-semibold text-slate-900">入力条件</h2>
      <p className="mt-1 mb-6 text-sm font-medium text-rose-600">
        1〜9の項目を、プルダウン選択または数値入力してください。
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="contractType" className="mb-1.5 block text-base font-medium text-slate-700">
            1. 契約種別
          </label>
          <select
            id="contractType"
            value={state.contractType}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                contractType: e.target.value as ContractType,
              }))
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            <option value="">選択してください</option>
            <option value="low">低圧法人（小さめの店舗・事務所向け）</option>
            <option value="high">高圧（中規模ビル・工場向け）</option>
            <option value="special">特別高圧（大規模施設・大工場向け）</option>
          </select>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            迷った場合は、中規模施設の目安として `高圧`
            を選ぶと近い想定になります。
          </p>
        </div>

        <div>
          <label htmlFor="region" className="mb-1.5 block text-base font-medium text-slate-700">
            2. エリア
          </label>
          <select
            id="region"
            value={state.region}
            onChange={(e) =>
              setState((prev) => ({ ...prev, region: e.target.value as Region }))
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            <option value="">選択してください</option>
            <option value="hokkaido">北海道</option>
            <option value="tohoku">東北</option>
            <option value="kita-kanto">北関東</option>
            <option value="shutoken">首都圏</option>
            <option value="hokuriku">北陸</option>
            <option value="chubu">中部</option>
            <option value="kansai">関西</option>
            <option value="chugoku">中国</option>
            <option value="shikoku">四国</option>
            <option value="kyushu">九州</option>
            <option value="okinawa">沖縄</option>
          </select>
        </div>

        <p className="text-sm font-medium text-red-600">金額は万円単位で入力してください</p>

        <div>
          <label htmlFor="springCost" className="mb-1.5 block text-base font-medium text-slate-700">
            3. 春の月間電気代（万円）
          </label>
          <input
            id="springCost"
            type="number"
            min={0}
            value={state.springCost}
            onChange={(e) => setNumber("springCost")(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label htmlFor="summerCost" className="mb-1.5 block text-base font-medium text-slate-700">
            4. 夏の月間電気代（万円）
          </label>
          <input
            id="summerCost"
            type="number"
            min={0}
            value={state.summerCost}
            onChange={(e) => setNumber("summerCost")(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label htmlFor="autumnCost" className="mb-1.5 block text-base font-medium text-slate-700">
            5. 秋の月間電気代（万円）
          </label>
          <input
            id="autumnCost"
            type="number"
            min={0}
            value={state.autumnCost}
            onChange={(e) => setNumber("autumnCost")(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label htmlFor="winterCost" className="mb-1.5 block text-base font-medium text-slate-700">
            6. 冬の月間電気代（万円）
          </label>
          <input
            id="winterCost"
            type="number"
            min={0}
            value={state.winterCost}
            onChange={(e) => setNumber("winterCost")(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label htmlFor="buildingType" className="mb-1.5 block text-base font-medium text-slate-700">
            7. 建物用途
          </label>
          <select
            id="buildingType"
            value={state.buildingType}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                buildingType: e.target.value as BuildingType,
              }))
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            <option value="">選択してください</option>
            <option value="office">オフィス</option>
            <option value="retail">商業店舗</option>
            <option value="restaurant">飲食店・外食</option>
            <option value="factory">工場</option>
            <option value="welfare">病院・福祉施設</option>
            <option value="hotel">ホテル・宿泊施設</option>
            <option value="warehouse">物流倉庫</option>
            <option value="school">学校・教育施設</option>
            <option value="datacenter">データセンター</option>
            <option value="public">公共施設</option>
          </select>
        </div>

        <div>
          <label htmlFor="usagePattern" className="mb-1.5 block text-base font-medium text-slate-700">
            8. 電力使用パターン
          </label>
          <select
            id="usagePattern"
            value={state.usagePattern}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                usagePattern: e.target.value as UsagePattern,
              }))
            }
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          >
            <option value="">選択してください</option>
            <option value="balanced">終日バランス型（時間帯の偏りが小さい）</option>
            <option value="daytime">平日日中メイン（平日昼に集中）</option>
            <option value="night">夜間・夕方メイン（夕方以降に需要増）</option>
            <option value="24h">24時間稼働（工場・データセンター型）</option>
            <option value="weekend-busy">土日稼働型（週末の負荷が高い）</option>
            <option value="seasonal-heavy">季節変動大（冷暖房影響が大きい）</option>
          </select>
        </div>

        <div>
          <label htmlFor="floorArea" className="mb-1.5 block text-base font-medium text-slate-700">
            9. 延床面積（㎡）
          </label>
          <p className="mb-2 text-sm text-slate-500">
            参考: 1㎡ = 約0.3025坪（30坪の場合は約99㎡）
          </p>
          <input
            id="floorArea"
            type="number"
            min={1}
            value={state.floorArea}
            onChange={(e) => setNumber("floorArea")(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>
      </div>
    </aside>
  );
}

export function StressFactorChecks({ state, setState, worstCaseRef }: SimulatorFormProps) {
  const allStressOn = Object.values(state.stress).every(Boolean);

  return (
    <section className="order-1 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900 sm:text-xl">
        電気料金が上がるリスク要因
        <span className="text-sm font-medium text-slate-500 sm:text-base">チェック項目</span>
      </h3>
      <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">
        チェックしたリスク要因が累積で反映され、料金が上振れするシナリオとしてグラフに反映されます。
      </p>
      <div className="mt-3 grid gap-2">
        <label className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-2.5">
          <input
            ref={worstCaseRef}
            id="stressWorstCase"
            type="checkbox"
            checked={allStressOn}
            onChange={(e) => {
              const checked = e.target.checked;
              setState((prev) => ({
                ...prev,
                stress: {
                  heatwave: checked,
                  coldWave: checked,
                  fuelPrice: checked,
                  geopolitical: checked,
                  outage: checked,
                },
              }));
            }}
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold">☑ ワーストシナリオ </span>
            <span className="text-slate-500">
              主要な上振れリスク要因をすべて一括で反映します。最も厳しいケースをまとめて確認したいときに使います。
            </span>
          </span>
        </label>
        <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
          <input
            id="stressHeatwave"
            type="checkbox"
            checked={state.stress.heatwave}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                stress: { ...prev.stress, heatwave: e.target.checked },
              }))
            }
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold">☑ リスク要因1：猛暑 </span>
            <span className="text-slate-500">
              影響月: 7月〜9月。夏場の需給逼迫を想定し、固定プランは緩やかに上昇し、市場連動プランは大きく上振れしやすくなります。
            </span>
          </span>
        </label>
        <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
          <input
            id="stressColdWave"
            type="checkbox"
            checked={state.stress.coldWave}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                stress: { ...prev.stress, coldWave: e.target.checked },
              }))
            }
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold">☑ リスク要因2：厳冬 </span>
            <span className="text-slate-500">
              影響月: 12月〜2月。冬場の暖房需要増を想定し、特に市場連動プランは冬季コストが上振れしやすくなります。
            </span>
          </span>
        </label>
        <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
          <input
            id="stressFuelPrice"
            type="checkbox"
            checked={state.stress.fuelPrice}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                stress: { ...prev.stress, fuelPrice: e.target.checked },
              }))
            }
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold">☑ リスク要因3：為替リスク（円安） </span>
            <span className="text-slate-500">
              影響月: 通年。円安が進む局面を想定。輸入燃料コストが上がり、固定プラン・市場連動プランともに料金が上振れしやすくなります。
            </span>
          </span>
        </label>
        <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
          <input
            id="stressGeopolitical"
            type="checkbox"
            checked={state.stress.geopolitical}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                stress: { ...prev.stress, geopolitical: e.target.checked },
              }))
            }
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold">☑ リスク要因4：地政学リスク </span>
            <span className="text-slate-500">
              影響月: 通年。中東情勢の悪化や国際紛争などで、燃料の調達不安が強まる場面を想定。特に市場連動プランは影響を受けやすくなります。
            </span>
          </span>
        </label>
        <label className="flex items-start gap-2 rounded-lg border border-slate-200 p-2.5">
          <input
            id="stressOutage"
            type="checkbox"
            checked={state.stress.outage}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                stress: { ...prev.stress, outage: e.target.checked },
              }))
            }
            className="mt-1 h-5 w-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
          />
          <span className="text-sm leading-6 text-slate-700 sm:text-base">
            <span className="font-semibold">☑ リスク要因5：災害リスク </span>
            <span className="text-slate-500">
              影響月: 発生月と翌月。災害により発電所の稼働が停止・低下する場面を想定。供給が減るため、発生月は特に大きく、翌月も余波で市場価格が上振れしやすくなります。
            </span>
          </span>
        </label>
      </div>
    </section>
  );
}
