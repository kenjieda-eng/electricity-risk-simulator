import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { DEMAND_HOURLY_AVG } from "../../data/demandData";

const pageTitle =
  "自家消費型太陽光は電気料金対策としてどう効くか｜購入電力削減の考え方";
const pageDescription =
  "自家消費型の太陽光発電が、法人の電気料金をどのように削減するかを解説します。購入電力量の削減メカニズム、効果が出やすい条件、および他の対策との組み合わせについて整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自家消費 太陽光 電気料金対策",
    "自家消費型太陽光 法人 メリット",
    "太陽光発電 購入電力削減",
    "法人 太陽光 費用対効果",
    "自家消費 太陽光 効果",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/self-consumption-solar-cost-benefit",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/self-consumption-solar-cost-benefit",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const costReductionMechanism = [
  {
    mechanism: "購入電力量の削減",
    detail:
      "太陽光が発電した電力を敷地内で直接使用することで、その分だけ系統からの購入電力量（kWh）が減少します。減った購入量に応じて従量料金（電力量料金）が削減されます。",
  },
  {
    mechanism: "燃料費調整額の影響を受ける量の削減",
    detail:
      "購入電力量が減ると、燃料費調整額の算定対象となる使用量も減ります。燃料費調整額が高騰している時期ほど、自家消費による削減効果が大きくなります。",
  },
  {
    mechanism: "再エネ賦課金の削減",
    detail:
      "購入電力量の削減に比例して、再エネ賦課金も減額されます。再エネ賦課金は1kWhあたり数円規模のため、自家消費量が多いほど積み上げ効果があります。",
  },
  {
    mechanism: "電気料金上昇リスクのヘッジ",
    detail:
      "将来の電気料金上昇（燃料価格・為替・容量拠出金等）に対して、自家消費比率を高めることはコスト上昇リスクの一部を遮断する効果があります。",
  },
];

const suitableConditions = [
  {
    condition: "昼間に電力を多く使う業態",
    detail:
      "工場・倉庫・小売施設・オフィスなど、昼間（9〜17時頃）の使用電力が多い法人ほど、太陽光発電のピーク発電時間と使用時間が重なり自家消費率が高まります。",
  },
  {
    condition: "屋根・架台スペースが確保できる",
    detail:
      "自家消費型太陽光の設置には、南向きに近い向きの屋根面積（または平屋根・駐車場架台）が必要です。設置可能容量（kW）が大きいほど発電量・削減効果が大きくなります。",
  },
  {
    condition: "電気料金単価が高い契約",
    detail:
      "電力量料金・燃料費調整額・再エネ賦課金の合計単価が高い契約ほど、自家消費1kWhあたりの節約額が大きくなり投資回収期間が短縮されます。",
  },
  {
    condition: "PPAや第三者所有モデルを活用できる",
    detail:
      "初期費用なしで太陽光を設置できるPPA（電力購入契約）を活用することで、投資不要で自家消費の電気料金削減効果を得られる場合があります。",
  },
];

const limitationsAndConsiderations = [
  {
    item: "夜間・悪天候時は発電ゼロ",
    detail:
      "太陽光は発電できない時間帯（夜間・曇天）は系統電力に依存します。24時間稼働の工場や夜間消費が多い事業所では、蓄電池との組み合わせが必要になります。",
  },
  {
    item: "余剰電力の扱い",
    detail:
      "使いきれない余剰電力は系統に逆潮流（売電）するか、蓄電池に蓄えることになります。余剰が多い場合、売電単価次第で経済性が変わります。",
  },
  {
    item: "設備の維持・更新コスト",
    detail:
      "太陽光パネルの寿命は20〜25年程度ですが、パワーコンディショナー（PCS）は10〜15年での交換が必要な場合があります。長期の費用対効果試算に含めることが重要です。",
  },
];

export default function SelfConsumptionSolarCostBenefitPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          自家消費型太陽光は電気料金対策としてどう効くか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          固定価格買取制度（FIT）の買取単価が低下する中、売電より自家消費を主目的とした「自家消費型太陽光」に注目が集まっています。発電した電力をそのまま施設内で使うことで、購入電力量を減らし電気料金を削減する効果があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          自家消費型太陽光が電気料金にどのように効くか、効果が出やすい条件は何かを理解することで、導入検討の精度が高まります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>購入電力量削減の仕組みと4つのコスト削減効果</li>
            <li>自家消費型太陽光の効果が出やすい条件</li>
            <li>余剰電力・夜間対応など留意点の整理</li>
            <li>蓄電池との組み合わせの考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自家消費型太陽光とは
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光とは、発電した電力をFITによる売電ではなく、主に施設内での自己消費を目的として設置する太陽光発電システムです。屋根・壁面・駐車場架台などに設置し、昼間の電力需要を自家発電で賄います。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FITの売電単価（住宅用）が2024年度以降さらに低下する一方、電気料金は上昇傾向にあるため、自家消費型の方が経済合理性が高いケースが増えています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気料金削減の4つのメカニズム
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光が電気料金を削減する経路を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {costReductionMechanism.map((item) => (
              <div
                key={item.mechanism}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.mechanism}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            効果が出やすい条件
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光の電気料金削減効果が出やすい法人の条件を確認します。
          </p>
          <div className="mt-4 space-y-4">
            {suitableConditions.map((item) => (
              <div
                key={item.condition}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.condition}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自家消費率の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費率とは、太陽光が発電した電力量のうち施設内で消費した割合です。自家消費率が高いほど購入電力削減効果が大きく、経済効果も高まります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">自家消費率を高める方法</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>発電量に見合った規模（過大設置を避ける）</li>
                <li>蓄電池を組み合わせて余剰を蓄える</li>
                <li>昼間の電力使用を増やすスケジュール調整</li>
                <li>電気自動車（EV）・電気ボイラー等への充電・活用</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">目安となる自家消費率</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                昼間稼働の工場・倉庫では70〜90%以上の自家消費率が達成できるケースもあります。夜間稼働が多い施設は50%前後にとどまることもあり、蓄電池との組み合わせが重要になります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            留意点の整理
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光を検討する際に、事前に把握しておくべき留意点を整理します。
          </p>
          <div className="mt-4 space-y-3">
            {limitationsAndConsiderations.map((item) => (
              <div
                key={item.item}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池との組み合わせによる自家消費率向上の効果については{" "}
            <Link
              href="/solar-battery-combination-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              太陽光と蓄電池を組み合わせる意味
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光は、購入電力量を減らすことで電力量料金・燃料費調整額・再エネ賦課金を同時に削減する効果があります。昼間に電力消費が集中する業態で、屋根や架台スペースを確保できる法人にとっては有効な電気料金対策です。電気料金の上昇傾向が続く環境では、将来のコスト上昇リスクをヘッジする意味合いも高まっています。蓄電池との組み合わせを検討する場合は、自家消費率をどこまで高められるかを中心に試算することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            需要パターンと太陽光発電のミスマッチ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全国の時間帯別平均需要データと太陽光発電の出力特性を照合すると、重要な構造的ミスマッチが見えてきます。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <p className="text-sm font-semibold text-rose-900">夕方ピーク（18時台）に太陽光はほぼゼロ</p>
              <p className="mt-2 text-sm leading-6 text-rose-800">
                全国需要は18時台（{DEMAND_HOURLY_AVG.find((d) => d.hour === 18)?.avgMW.toLocaleString()}MW）にピークを迎えますが、
                太陽光発電の出力はこの時間帯にはほぼゼロです。
                自家消費型太陽光だけではデマンドピーク対策として機能しません。
              </p>
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-900">昼12時台の需要落ち込み（太陽光の影響）</p>
              <p className="mt-2 text-sm leading-6 text-sky-800">
                昼12時台の全国需要は{DEMAND_HOURLY_AVG.find((d) => d.hour === 12)?.avgMW.toLocaleString()}MWに落ち込みます。
                これは太陽光の大量導入により自家消費・逆潮流が増えた影響です。
                自家消費型太陽光は昼間の購入電力削減には有効ですが、夕方のデマンドピーク対策には蓄電池の併用が必要です。
              </p>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto">
            <div className="space-y-1.5">
              {DEMAND_HOURLY_AVG.map((d) => {
                const isPeak = d.hour === 18;
                const isDip = d.hour === 12;
                const barWidth = Math.round(((d.avgMW - 80000) / 35000) * 100);
                return (
                  <div key={d.hour} className="flex items-center gap-2">
                    <span className="w-10 shrink-0 text-right text-xs text-slate-600">{d.hour}時</span>
                    <div className="flex-1 rounded bg-slate-100">
                      <div
                        className={`h-3 rounded ${
                          isPeak ? "bg-rose-500" : isDip ? "bg-amber-400" : "bg-slate-300"
                        }`}
                        style={{ width: `${Math.max(barWidth, 2)}%` }}
                      />
                    </div>
                    <span className="w-24 shrink-0 text-right text-xs text-slate-600">
                      {d.avgMW.toLocaleString()} MW
                      {isPeak && <span className="ml-1 rounded-full bg-rose-100 px-1 text-rose-700">ピーク</span>}
                      {isDip && <span className="ml-1 rounded-full bg-amber-100 px-1 text-amber-700">昼間谷</span>}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">太陽光の導入効果を最大化する複合戦略</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              太陽光の導入効果を最大化するには、昼間の自家消費で電力量料金を削減しつつ、蓄電池で夕方ピークの基本料金削減も狙う複合戦略が有効です。
              太陽光のみでは夕方18時台のデマンドには対応できないため、蓄電池との組み合わせが戦略の核となります。
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※出典: 電力広域的運営推進機関（OCCTO）公表データ（FY2016〜2023）を集計。全国9エリア合計値。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/solar-battery-combination-benefit",
              title: "太陽光と蓄電池を組み合わせる意味",
              description: "自家消費率向上とコスト削減の相乗効果。",
            },
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池は電気料金対策としてどう効くか",
              description: "デマンド抑制とピークカットの仕組みを解説。",
            },
            {
              href: "/why-corporations-consider-batteries",
              title: "法人が蓄電池を検討する理由",
              description: "電気料金対策とBCPの両面から検討の動機を整理。",
            },
            {
              href: "/warehouse-battery-considerations",
              title: "倉庫で蓄電池を検討するときの着眼点",
              description: "屋根面積と太陽光の組み合わせを含む倉庫特有の検討。",
            },
            {
              href: "/oil-and-corporate-electricity-price",
              title: "原油価格と法人電気料金の関係",
              description: "燃料費調整額の仕組みと自家消費との関連。",
            },
            {
              href: "/demand-suppression-effectiveness",
              title: "デマンド抑制はどこまで効果があるか",
              description: "基本料金削減の可能性と限界を整理。",
            },
          ]}
        />

        <ContentCta
          heading="電気料金の削減余地を確認する"
          description="現在の契約条件でシミュレーションして、自家消費対策の優先度を把握できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="self-consumption-solar-cost-benefit" />
      </div>
    </main>
  );
}
