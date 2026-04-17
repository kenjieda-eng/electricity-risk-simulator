import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import {
  BUSINESS_USAGE_PROFILES,
  RENEWABLE_SURCHARGE_DATA,
} from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "再エネ賦課金とは｜2012〜2026年度の推移・計算方法・法人負担まで完全ガイド";
const pageDescription =
  "再エネ賦課金（再生可能エネルギー発電促進賦課金）の仕組み、2012〜2026年度の単価推移、計算方法、法人の月額負担試算、燃料費調整額との違いを、グラフと過去データを交えて解説します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-surcharge";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金",
    "再エネ賦課金 とは",
    "再エネ賦課金 推移",
    "再エネ賦課金 2025",
    "再エネ賦課金 計算方法",
    "法人 電気料金 制度負担",
    "再エネ賦課金 燃料費調整額 違い",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function RenewableEnergySurchargePage() {
  const first = RENEWABLE_SURCHARGE_DATA[0];
  const latest = RENEWABLE_SURCHARGE_DATA[RENEWABLE_SURCHARGE_DATA.length - 1];
  const growthMultiple = latest.unitPriceYenPerKwh / first.unitPriceYenPerKwh;
  const chartLabels = RENEWABLE_SURCHARGE_DATA.map((row) => `${row.fiscalYear}年度`);
  const chartValues = RENEWABLE_SURCHARGE_DATA.map((row) => row.unitPriceYenPerKwh);

  return (
    <>
      <ArticleJsonLd
        headline="再エネ賦課金とは｜2012〜2026年度の推移・計算方法・法人負担まで完全ガイド"
        description="再エネ賦課金（再生可能エネルギー発電促進賦課金）の仕組み、2012〜2026年度の単価推移、計算方法、法人の月額負担試算、燃料費調整額との違いを、グラフと過去データを交えて解説します。"
        url="https://simulator.eic-jp.org/renewable-energy-surcharge"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ賦課金とは" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ賦課金（再生可能エネルギー発電促進賦課金）は、FIT・FIP 制度で買い取られた再生可能エネルギー電力のコストを、
          電気の使用者全員で負担するための制度上の上乗せ費用です。電力会社を問わず全ての需要家の請求書に計上されます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、2012年度（制度開始）から{latest.fiscalYear}年度までの単価推移、計算方法、<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>との違い、
          法人規模別の月額負担までを、実データとグラフを交えて整理します。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-sky-200 bg-white p-3">
            <p className="text-xs text-slate-500">{first.fiscalYear}年度 単価</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{first.unitPriceYenPerKwh.toFixed(2)} 円/kWh</p>
          </div>
          <div className="rounded-lg border border-sky-200 bg-white p-3">
            <p className="text-xs text-slate-500">{latest.fiscalYear}年度 単価</p>
            <p className="mt-1 text-lg font-bold text-slate-900">{latest.unitPriceYenPerKwh.toFixed(2)} 円/kWh</p>
          </div>
          <div className="rounded-lg border border-sky-200 bg-white p-3">
            <p className="text-xs text-slate-500">増加倍率（{first.fiscalYear}→{latest.fiscalYear}）</p>
            <p className="mt-1 text-lg font-bold text-slate-900">約 {growthMultiple.toFixed(1)} 倍</p>
          </div>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は、2012年7月に施行された「電気事業者による再生可能エネルギー電気の調達に関する特別措置法」
            （いわゆるFIT法）に基づき、再生可能エネルギーの普及拡大を支えるため電気使用量 1kWh あたりで課される負担金です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社は再エネ電力を国が定めた調達価格で買い取る義務を負いますが、そのコストを単独で負担するのではなく、
            電気を使用する全ての需要家が使用量に比例して分担する仕組みです。小売料金の一部として請求書に記載されます。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価は年度単位で経済産業大臣が告示（毎年3月ごろ）</li>
            <li>5月検針分から翌年4月検針分まで、全国一律で適用</li>
            <li>電力会社を切り替えても単価は同じ（契約先による差はない）</li>
            <li>用途に関係なく家庭・法人・自治体すべてに適用</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2012〜{latest.fiscalYear}年度の単価推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            制度開始時の {first.unitPriceYenPerKwh.toFixed(2)} 円/kWh から、FIT 買取認定量の拡大とともに単価は急上昇しました。
            2022 年度まで右肩上がりで推移した後、2023 年度は卸電力市場価格の高騰により回避可能費用が大幅に上がった影響で、
            いったん 1.40 円/kWh まで急落。しかし 2024 年度以降は再上昇し、{latest.fiscalYear}年度には {latest.unitPriceYenPerKwh.toFixed(2)} 円/kWh と過去最高水準になっています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={chartLabels}
              series={[
                {
                  label: "再エネ賦課金（円/kWh）",
                  values: chartValues,
                  color: "#0284c7",
                  fillColor: "rgba(2,132,199,0.12)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            出典: 資源エネルギー庁「再生可能エネルギー発電促進賦課金」単価告示（2012〜{latest.fiscalYear}年度）。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別の単価・前年比・家庭月額負担</h2>
          <table className="mt-4 w-full min-w-[720px] border-collapse text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-900">
              <tr>
                <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right">単価（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">前年差（円）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">前年比（%）</th>
                <th className="border border-slate-200 px-3 py-2 text-right">家庭月額（300kWh換算）</th>
              </tr>
            </thead>
            <tbody>
              {RENEWABLE_SURCHARGE_DATA.map((row) => (
                <tr key={row.fiscalYear} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">{row.fiscalYear}年度</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.unitPriceYenPerKwh.toFixed(2)}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    {row.yearOverYearYen === null ? "—" : `${row.yearOverYearYen > 0 ? "+" : ""}${row.yearOverYearYen.toFixed(2)}`}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    {row.yearOverYearPercent === null ? "—" : `${row.yearOverYearPercent > 0 ? "+" : ""}${row.yearOverYearPercent}%`}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.monthlyBurdenYen.toLocaleString("ja-JP")} 円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">計算方法</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求額に占める再エネ賦課金は、次の単純な式で求められます。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-center text-base font-semibold text-slate-900">
            再エネ賦課金 = 単価（円/kWh）× 当月使用量（kWh）
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価は全国一律なので、契約電力会社やメニューを切り替えても金額は変わりません。
            月間使用量が大きい法人ほど金額に大きく影響する、純粋な「使用量比例」の費目です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人規模別の月額負担（{latest.fiscalYear}年度 単価 {latest.unitPriceYenPerKwh.toFixed(2)} 円/kWh）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ単価でも、月間使用量が違えば再エネ賦課金の負担額は大きく変わります。主要な業態別に月額・年額を試算しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">業態目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月間使用量</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月額負担</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年額負担</th>
                </tr>
              </thead>
              <tbody>
                {BUSINESS_USAGE_PROFILES.map((p) => {
                  const monthly = Math.round(p.monthlyKwh * latest.unitPriceYenPerKwh);
                  return (
                    <tr key={p.label} className="border-t border-slate-100">
                      <td className="border border-slate-200 px-3 py-2">
                        <div className="font-semibold text-slate-900">{p.label}</div>
                        <div className="text-xs text-slate-500">{p.description}</div>
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{p.monthlyKwh.toLocaleString("ja-JP")} kWh</td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{monthly.toLocaleString("ja-JP")} 円</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{(monthly * 12).toLocaleString("ja-JP")} 円</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            ※ 単価は全国一律のため、電力会社を切り替えても同じ金額が計上されます。月次 1,000,000 kWh の大規模工場では、
            再エネ賦課金だけで月 400 万円規模の負担になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い</h2>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">比較観点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">再エネ賦課金</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">燃料費調整額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-slate-200 px-3 py-2">根拠</td>
                  <td className="border-b border-slate-200 px-3 py-2">FIT・FIP法</td>
                  <td className="border-b border-slate-200 px-3 py-2">電気事業法および料金算定規則</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-200 px-3 py-2">変動要因</td>
                  <td className="border-b border-slate-200 px-3 py-2">FIT認定量・回避可能費用</td>
                  <td className="border-b border-slate-200 px-3 py-2">LNG・原油・石炭のCIF価格</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-200 px-3 py-2">改定頻度</td>
                  <td className="border-b border-slate-200 px-3 py-2">年1回（毎年5月検針分〜）</td>
                  <td className="border-b border-slate-200 px-3 py-2">毎月</td>
                </tr>
                <tr>
                  <td className="border-b border-slate-200 px-3 py-2">電力会社差</td>
                  <td className="border-b border-slate-200 px-3 py-2">全国一律（同じ単価）</td>
                  <td className="border-b border-slate-200 px-3 py-2">電力会社ごとに異なる</td>
                </tr>
                <tr>
                  <td className="px-3 py-2">符号</td>
                  <td className="px-3 py-2">常にプラス</td>
                  <td className="px-3 py-2">プラスにもマイナスにもなる</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳しくは{" "}
            <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              燃料費調整額の解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">もっと深く知りたい方へ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は、過去推移・計算方法・減免制度など切り口が多いテーマです。個別論点は次の解説ページで整理しています。
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/renewable-energy-surcharge-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                再エネ賦課金の推移と変動要因｜2012〜2026年度の変化を解説
              </Link>
            </li>
            <li>
              <Link href="/renewable-energy-surcharge-business-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                再エネ賦課金の法人別月額試算｜業態・規模で比較
              </Link>
            </li>
            <li>
              <Link href="/renewable-energy-surcharge-reduction-system" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                再エネ賦課金の減免制度｜対象要件と申請の流れ
              </Link>
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          intro="賦課金を燃料調整や内訳・上昇幅・長期推移と分けて見ると、請求の説明がしやすくなります。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "賦課金が請求のどこに位置するかを全体像で確認できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "制度要因を含めた上昇要因の全体像を整理できます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の10年推移",
              description: "制度改定を含む長期の位置づけを確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "賦課金と混同しやすい燃調費の役割を切り分けられます。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "再エネ賦課金と並ぶ制度要因として、容量拠出金の仕組みと影響を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して確認する"
          description="制度項目を理解したうえで、現行契約と候補条件を同条件で比較すると、見直し判断を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="renewable-energy-surcharge" />
      </div>
    </main>
    </>
  );
}
