import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { DEMAND_HOURLY_AVG } from "../../data/demandData";
import { CDD_TREND } from "../../data/weatherData";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "蓄電池は電気料金対策としてどう効くか｜デマンド抑制とピークカットの仕組み";
const pageDescription =
  "産業用蓄電池が法人の電気料金削減にどのように貢献するかを解説します。基本料金を左右するデマンド（最大需要電力）の抑制と、時間帯別料金を活用したピークカットの仕組みを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "蓄電池 電気料金対策 法人",
    "デマンド抑制 蓄電池 効果",
    "ピークカット 蓄電池 仕組み",
    "産業用蓄電池 基本料金削減",
    "蓄電池 費用対効果 法人",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/battery-electricity-cost-benefit",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/battery-electricity-cost-benefit",
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

const demandSuppressMechanism = [
  {
    step: "1",
    heading: "デマンド（最大需要電力）の測定",
    content:
      "電力会社の計量器は30分ごとの平均使用電力（kW）を測定します。その月の最大値が「最大需要電力（デマンド）」として記録されます。",
  },
  {
    step: "2",
    heading: "基本料金の算定",
    content:
      "高圧・特別高圧契約では基本料金がデマンドに比例して決まります。契約電力（kW）に一定の単価を乗じた金額が基本料金となるため、デマンドを下げると基本料金が下がります。",
  },
  {
    step: "3",
    heading: "蓄電池によるピーク抑制",
    content:
      "デマンドが高くなりそうな時間帯（生産ラインの集中稼働・空調ピークなど）に、蓄電池から電力を供給して系統からの購入電力を抑えます。これにより30分平均電力のピークを低下させます。",
  },
  {
    step: "4",
    heading: "契約電力の見直し",
    content:
      "デマンド抑制を継続することで、より低い契約電力での契約変更が可能になる場合があります。契約電力を下げると基本料金単価の計算基準が下がり、さらなるコスト削減が期待できます。",
  },
];

const peakShiftBenefit = [
  {
    useCase: "夜間割引プランとの組み合わせ",
    description:
      "夜間の安い時間帯（例：23時〜翌7時）に充電し、昼間の高い時間帯に放電することで、単価差の分だけコストを削減できます。",
    condition: "時間帯別料金（TOU）プランまたはオフピーク割引がある場合に有効。",
  },
  {
    useCase: "太陽光余剰電力の蓄電",
    description:
      "昼間に太陽光が発電した余剰電力を蓄電し、夕方〜夜間に放電することで購入電力量を削減できます。",
    condition: "自家消費太陽光を設置している場合に特に効果的。",
  },
  {
    useCase: "市場連動プランの高値時間帯の回避",
    description:
      "市場連動型プランで電力市場価格が高騰する夕方（17〜20時）の時間帯に蓄電池から供給することで、購入コストの上昇を抑えられます。",
    condition: "市場連動プランを利用している法人に有効。",
  },
];

const limitations = [
  {
    limitation: "デマンド抑制効果はピークパターンに依存",
    detail:
      "デマンドが毎日異なる時間帯にランダムに発生する場合は、蓄電池だけでの抑制が難しくなります。定常的な使用パターンがあるほど効果が安定します。",
  },
  {
    limitation: "充放電ロスによる実質効率",
    detail:
      "蓄電池の充放電には電力損失（効率90〜95%程度）が伴います。ピークシフトで節約できる金額が、この損失コストを上回る必要があります。",
  },
  {
    limitation: "低圧契約では効果が限定的",
    detail:
      "低圧契約の多くはデマンド料金制ではなく定額の基本料金であるため、デマンド抑制による基本料金削減の効果が出ません。ピークシフトによる従量料金削減が主な効果になります。",
  },
  {
    limitation: "容量の上限による制約",
    detail:
      "蓄電池の容量（kWh）と出力（kW）には上限があります。複数のピークが短時間に集中したり、ピーク継続時間が蓄電容量を超えたりする場合は、充分な抑制ができないことがあります。",
  },
];

export default function BatteryElectricityCostBenefitPage() {
  return (
    <>
      <ArticleJsonLd
        headline="蓄電池は電気料金対策としてどう効くか｜デマンド抑制とピークカットの仕組み"
        description="産業用蓄電池が法人の電気料金削減にどのように貢献するかを解説します。基本料金を左右するデマンド（最大需要電力）の抑制と、時間帯別料金を活用したピークカットの仕組みを整理します。"
        url="https://simulator.eic-jp.org/battery-electricity-cost-benefit"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "蓄電池は電気料金対策としてどう効くか" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">蓄電池は電気料金対策としてどう効くか</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          蓄電池は電気料金対策としてどう効くか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          産業用蓄電池が電気料金の削減に貢献する仕組みは主に2つあります。ひとつは「デマンド（最大需要電力）の抑制」による<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>の削減、もうひとつは「ピークシフト」による<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>の最適化です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          どちらの効果がどれだけ期待できるかは、自社の電力使用パターンと契約条件によって大きく異なります。このページでは、仕組みと効果の出やすい条件、および限界を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>デマンド抑制と基本料金削減の仕組み</li>
            <li>ピークシフトによる電力量料金の最適化</li>
            <li>効果が出やすい条件と出にくい条件</li>
            <li>蓄電池単独の電気料金対策としての限界</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制による基本料金削減の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧</Link>・<Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>契約の法人では、基本料金がデマンド（最大需要電力）に比例して決まります。蓄電池によるデマンド抑制が基本料金削減につながるメカニズムを確認します。
          </p>
          <div className="mt-4 space-y-3">
            {demandSuppressMechanism.map((item) => (
              <div
                key={item.step}
                className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.heading}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド値は1か月のうち1回でも高い値が記録されると、その月の基本料金に影響します。つまり、1日あたり数分間のピークを繰り返し抑制することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ピークシフトによる電力量料金の最適化
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            安い時間帯に充電し、高い時間帯に放電する「ピークシフト」によって、電力量料金の単価差を節約できます。<Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プラン</Link>利用時は特に効果が大きくなります。以下はピークシフトが効果を発揮する主なケースです。
          </p>
          <div className="mt-4 space-y-4">
            {peakShiftBenefit.map((item) => (
              <div
                key={item.useCase}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.useCase}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                <p className="mt-1 text-xs text-slate-500">{item.condition}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            効果試算の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池の電気料金削減効果を試算する際の基本的な考え方を整理します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド削減効果の試算</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                削減見込みデマンド（kW）×基本料金単価（円/kW）×12か月 = 年間基本料金削減額の概算。現在のデマンドから10〜20%削減できれば、年間数十万〜百万円規模の削減になるケースがあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ピークシフト効果の試算</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                1日の充放電電力量（kWh）×（昼間単価－夜間単価）×稼働日数 = 年間ピークシフト効果の概算。単価差が大きいほど、充放電量が多いほど効果が出ます。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の試算には、充放電ロス・蓄電池容量の制約・メンテナンスコストを考慮した上で、回収年数を算出することが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">項目</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">数値</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">現行契約電力</td><td className="border border-slate-200 p-3 text-slate-700">500 kW</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">ピーク削減見込み</td><td className="border border-slate-200 p-3 text-slate-700">75 kW（15%削減）</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">基本料金単価</td><td className="border border-slate-200 p-3 text-slate-700">1,650 円/kW</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">年間基本料金削減額</td><td className="border border-slate-200 p-3 text-slate-700">75 × 1,650 × 12 = 約1,485,000円</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">蓄電池容量</td><td className="border border-slate-200 p-3 text-slate-700">200 kWh</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">蓄電池導入費用目安</td><td className="border border-slate-200 p-3 text-slate-700">200 kWh × 15万円 = 約3,000万円</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">単純回収年数</td><td className="border border-slate-200 p-3 text-slate-700">約20年（基本料金削減のみ）</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">ピークシフト併用時</td><td className="border border-slate-200 p-3 text-slate-700">約12〜15年（電力量料金削減効果を加算）</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別 蓄電池導入効果の目安
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種・規模ごとの蓄電池導入効果の概算を整理します。実際の効果は施設条件・契約内容・<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>活用の有無によって異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">業種</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">契約電力</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">ピーク削減率</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">年間削減額目安</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">回収目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">金属加工工場</td><td className="border border-slate-200 p-3 text-slate-700">500kW</td><td className="border border-slate-200 p-3 text-slate-700">10〜20%</td><td className="border border-slate-200 p-3 text-slate-700">100〜300万円</td><td className="border border-slate-200 p-3 text-slate-700">12〜20年</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">スーパーマーケット</td><td className="border border-slate-200 p-3 text-slate-700">200kW</td><td className="border border-slate-200 p-3 text-slate-700">15〜25%</td><td className="border border-slate-200 p-3 text-slate-700">60〜120万円</td><td className="border border-slate-200 p-3 text-slate-700">15〜20年</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">病院</td><td className="border border-slate-200 p-3 text-slate-700">300kW</td><td className="border border-slate-200 p-3 text-slate-700">10〜15%</td><td className="border border-slate-200 p-3 text-slate-700">60〜90万円</td><td className="border border-slate-200 p-3 text-slate-700">18〜25年※BCP価値別</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">物流倉庫</td><td className="border border-slate-200 p-3 text-slate-700">400kW</td><td className="border border-slate-200 p-3 text-slate-700">15〜25%</td><td className="border border-slate-200 p-3 text-slate-700">120〜250万円</td><td className="border border-slate-200 p-3 text-slate-700">10〜15年（太陽光併用時）</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">データセンター</td><td className="border border-slate-200 p-3 text-slate-700">1000kW</td><td className="border border-slate-200 p-3 text-slate-700">5〜10%</td><td className="border border-slate-200 p-3 text-slate-700">100〜200万円</td><td className="border border-slate-200 p-3 text-slate-700">20年超※UPS兼用で短縮可</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上記は2025〜2026年時点の蓄電池価格（15〜20万円/kWh、産業用リチウムイオン）をベースとした概算です。補助金活用により回収期間は大幅に短縮できます。
          </p>
          <p className="mt-1 text-xs text-slate-500">
            ※上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            蓄電池単独での限界を理解する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池が電気料金対策として有効な場合がある一方、以下のような限界もあります。
          </p>
          <div className="mt-4 space-y-3">
            {limitations.map((item) => (
              <div
                key={item.limitation}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.limitation}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池単独での効果が限定的な場合は、太陽光発電との組み合わせや需要応答（DR）との連携を検討することで、追加の効果が期待できます。詳しくは{" "}
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
            蓄電池は、デマンド抑制による基本料金削減とピークシフトによる電力量料金の最適化という2つの経路で電気料金削減に貢献できます。効果の大きさは自社の電力使用パターン・契約プラン・蓄電池の容量・設計次第です。導入前に自社のデマンドパターンを分析し、どちらの効果が主たる便益になるかを明確にした上で投資判断を行うことが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            需要データで見る蓄電池の最適運用タイミング
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全国の時間帯別平均需要データから、充電・放電の最適ウィンドウを特定します。
          </p>
          <div className="mt-4 space-y-2">
            {DEMAND_HOURLY_AVG.map((d) => {
              const isCharge = d.hour >= 1 && d.hour <= 5;
              const isDischarge = d.hour >= 17 && d.hour <= 18;
              const barWidth = Math.round(((d.avgMW - 80000) / 35000) * 100);
              return (
                <div key={d.hour} className="flex items-center gap-2">
                  <span className="w-10 shrink-0 text-right text-xs text-slate-600">{d.hour}時</span>
                  <div className="flex-1 rounded bg-slate-100">
                    <div
                      className={`h-3.5 rounded transition-all ${
                        isDischarge
                          ? "bg-rose-500"
                          : isCharge
                          ? "bg-sky-400"
                          : "bg-slate-300"
                      }`}
                      style={{ width: `${Math.max(barWidth, 2)}%` }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right text-xs text-slate-600">
                    {d.avgMW.toLocaleString()} MW
                    {isCharge && (
                      <span className="ml-1 rounded-full bg-sky-100 px-1 text-sky-700">充電</span>
                    )}
                    {isDischarge && (
                      <span className="ml-1 rounded-full bg-rose-100 px-1 text-rose-700">放電</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-slate-900">ピークシフトの経済的根拠</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              深夜1時台（{DEMAND_HOURLY_AVG.find((d) => d.hour === 1)?.avgMW.toLocaleString()}MW）に充電し、
              夕方18時台（{DEMAND_HOURLY_AVG.find((d) => d.hour === 18)?.avgMW.toLocaleString()}MW）に放電することで、
              需要ピーク時の契約電力を抑制できます。深夜と夕方の需要差は約29,000MW（+35%）であり、
              この差分がピークシフトの経済価値の源泉です。
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※出典: 電力広域的運営推進機関（OCCTO）公表データ（FY2016〜2023）を集計。全国9エリア合計値。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            冷房需要の増加と蓄電池の長期投資価値
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷房度日（CDD）は過去25年で名古屋+40%、福岡+38%、東京+24%増加。夏のピーク電力需要が年々増加する構造的トレンドのなかで、蓄電池によるピークシフトの経済価値は長期的に上昇し続けます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2020年代の猛暑日（35℃超）は東京で10年間に101日、名古屋で179日。蓄電池の投資回収を10〜15年で見積もる場合、この温暖化トレンドは投資判断にプラスに働く要素です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">都市</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">1995〜99年平均CDD</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">2020〜24年平均CDD</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">増加量</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">増加率</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CDD_TREND.map((row, i) => (
                  <tr key={row.cityJa} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{row.cityJa}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{row.cdd1995_99}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{row.cdd2020_24}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">+{row.change}</td>
                    <td className="border border-slate-200 p-3 text-right font-semibold text-rose-600">+{row.changePercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※CDD（冷房度日）: 基準温度22℃を超えた日の積算値。値が大きいほど冷房需要が高い。出典: 気象庁過去の気象データ（1995〜2024年）を集計。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/why-corporations-consider-batteries",
              title: "法人が蓄電池を検討する理由",
              description: "電気料金対策とBCPの両面から蓄電池検討の動機を整理。",
            },
            {
              href: "/demand-suppression-effectiveness",
              title: "デマンド抑制はどこまで効果があるか",
              description: "基本料金削減の可能性と限界を詳しく解説。",
            },
            {
              href: "/solar-battery-combination-benefit",
              title: "太陽光と蓄電池を組み合わせる意味",
              description: "自家消費率向上とコスト削減の相乗効果。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "購入電力削減の考え方と効果の出やすい条件。",
            },
            {
              href: "/factory-battery-considerations",
              title: "工場で蓄電池を検討するときの着眼点",
              description: "生産ラインとの両立を含めた工場特有の検討事項。",
            },
            {
              href: "/demand-response-cost-benefit",
              title: "DRは電気料金対策としてどう考えるか",
              description: "需要応答への参加と蓄電池の連携メリット。",
            },
            {
              href: "/subsidies-overview",
              title: "省エネ・再エネ設備の補助金概要",
              description: "蓄電池導入コストを圧縮できる補助金制度の整理。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約見直しの始め方",
              description: "蓄電池導入前に契約条件を最適化する手順。",
            },
          ]}
        />

        <ContentCta
          heading="電気料金の内訳を確認してから検討する"
          description="現在の契約条件で基本料金と電力量料金の比率を把握することが、蓄電池対策の効果試算の出発点です。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
