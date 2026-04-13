import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "燃料別（LNG・石炭・原油）の価格推移と電気料金への影響度";
const pageDescription =
  "LNG・石炭・原油の3燃料の国際価格推移を比較し、日本の電気料金への影響度の違いを解説。燃料構成の変化、燃調費への反映メカニズムを整理。";
const pageUrl =
  "https://simulator.eic-jp.org/fuel-mix-price-trend-and-electricity-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "LNG 電気料金",
    "石炭 電気料金",
    "原油 電気料金",
    "燃料別 価格推移",
    "燃調費 反映",
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

// 3燃料の価格推移（2019〜2025年）
const fuelPriceData = [
  { year: 2019, lngYenPerKg: 84, coalUsdPerTon: 88, crudeUsdPerBarrel: 64 },
  { year: 2020, lngYenPerKg: 62, coalUsdPerTon: 59, crudeUsdPerBarrel: 41 },
  { year: 2021, lngYenPerKg: 88, coalUsdPerTon: 121, crudeUsdPerBarrel: 70 },
  { year: 2022, lngYenPerKg: 183, coalUsdPerTon: 323, crudeUsdPerBarrel: 101 },
  { year: 2023, lngYenPerKg: 152, coalUsdPerTon: 191, crudeUsdPerBarrel: 83 },
  { year: 2024, lngYenPerKg: 141, coalUsdPerTon: 141, crudeUsdPerBarrel: 80 },
  { year: 2025, lngYenPerKg: 148, coalUsdPerTon: 125, crudeUsdPerBarrel: 77 },
];

// 燃料別の電気料金への影響度
const impactData = [
  {
    fuel: "LNG（液化天然ガス）",
    powerShare: "約33%（2025年度）",
    fuelAdjReflect: "最も直接的に反映。燃調費の主要参照指標のひとつ",
    unitImpact:
      "10円/kg上昇 → 燃調費 +約0.3〜0.5円/kWh（規模・契約形態による）",
    note: "影響度: 高",
  },
  {
    fuel: "石炭（一般炭）",
    powerShare: "約28%（2025年度）",
    fuelAdjReflect: "燃調費参照指標に含まれるが、LNGより反映比重は低い",
    unitImpact:
      "10ドル/トン上昇 → 燃調費 +約0.1〜0.2円/kWh",
    note: "影響度: 中",
  },
  {
    fuel: "原油（C重油含む）",
    powerShare: "約3%（2025年度）",
    fuelAdjReflect: "発電利用は少ないが、燃調費計算式に原油CIF価格が含まれる",
    unitImpact:
      "10ドル/バレル上昇 → 燃調費 +約0.1円/kWh未満",
    note: "影響度: 低〜中",
  },
];

// 日本の発電燃料構成推移（4時点）
const powerMixData = [
  { year: 2015, lng: 43, coal: 32, oil: 9, nuclear: 1, renewable: 15 },
  { year: 2019, lng: 37, coal: 31, oil: 7, nuclear: 6, renewable: 19 },
  { year: 2022, lng: 34, coal: 31, oil: 7, nuclear: 5, renewable: 23 },
  { year: 2025, lng: 33, coal: 28, oil: 3, nuclear: 10, renewable: 26 },
];

// 法人担当者が見るべきポイント
const actionPoints = [
  {
    heading: "LNG価格の動向を最優先で追う",
    body:
      "発電シェア・燃調費への影響度ともにLNGが最大です。JKM（アジアスポット価格）や長期契約指標の動向を月次で確認することが重要です。",
  },
  {
    heading: "石炭は発電比率の変化を注視する",
    body:
      "カーボンニュートラルの流れで石炭火力の比率は下がる方向ですが、急激な減少は起こりにくい状況です。石炭価格の高止まりは電気料金の下方圧力を抑える要因になります。",
  },
  {
    heading: "原油は為替リスクとセットで見る",
    body:
      "原油の発電利用は少ないですが、燃調費計算に原油CIF価格が使われます。ドル建て価格に加えて円安の影響も重なる点を理解しておきましょう。",
  },
  {
    heading: "燃料構成の変化を長期目線で把握する",
    body:
      "再エネ・原子力の比率が高まるほど化石燃料依存が下がり、燃調費の振れ幅が縮小する可能性があります。2025年以降の電源構成目標を確認し、中期予算に反映させます。",
  },
];

export default function FuelMixPriceTrendAndElectricityImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link
          href="/articles/price-trends"
          className="underline-offset-2 hover:underline"
        >
          電気料金の推移と高止まり
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">燃料別価格推移と電気料金への影響度</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          燃料別（LNG・石炭・原油）の価格推移と電気料金への影響度
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の電気料金は化石燃料の国際価格に強く連動しています。しかし、LNG・石炭・原油では発電シェアも燃調費への
          反映ウェイトも異なります。このページでは3燃料の価格推移データを並べ、それぞれが電気料金に与える影響度の違いと、
          日本の発電燃料構成の変化を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 3燃料価格推移テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3燃料の国際価格推移（2019〜2025年）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNGは円/kg（日本CIF概算）、石炭・原油はドル建て国際指標の年次平均を示します。
            2022年はウクライナ危機の影響でいずれも急騰し、特に石炭は3倍以上に達しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[540px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    LNG（円/kg）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    石炭（ドル/トン）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    原油（ドル/バレル）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主なイベント</th>
                </tr>
              </thead>
              <tbody>
                {fuelPriceData.map((row) => {
                  const isHighYear = row.year === 2022 || row.year === 2023;
                  return (
                    <tr
                      key={row.year}
                      className={`border-t border-slate-100 ${isHighYear ? "bg-red-50" : ""}`}
                    >
                      <td className="border border-slate-200 px-3 py-2 font-medium">
                        {row.year}年
                      </td>
                      <td
                        className={`border border-slate-200 px-3 py-2 text-right font-semibold ${
                          row.lngYenPerKg >= 150 ? "text-red-600" : ""
                        }`}
                      >
                        {row.lngYenPerKg.toLocaleString("ja-JP")}
                      </td>
                      <td
                        className={`border border-slate-200 px-3 py-2 text-right font-semibold ${
                          row.coalUsdPerTon >= 200 ? "text-red-600" : ""
                        }`}
                      >
                        {row.coalUsdPerTon}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.crudeUsdPerBarrel}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-600">
                        {row.year === 2020 && "コロナ禍・需要低迷"}
                        {row.year === 2022 && "ウクライナ危機・過去最高水準"}
                        {row.year === 2023 && "高止まり・激変緩和措置"}
                        {(row.year === 2024 || row.year === 2025) && "緩やかな落ち着き"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※LNG: 財務省貿易統計日本CIF概算参考値。石炭: 豪州一般炭スポット指標参考値。原油: 北海ブレント年平均参考値。
          </p>
        </section>

        {/* 燃料別影響度テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            燃料別の電気料金への影響度
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            発電シェアと燃調費への反映の仕方をまとめると、LNGの影響が最も大きく、次いで石炭、原油の順です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">燃料</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    発電シェア
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    燃調費への反映
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    1単位上昇時の影響（目安）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">評価</th>
                </tr>
              </thead>
              <tbody>
                {impactData.map((row) => (
                  <tr key={row.fuel} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium">
                      {row.fuel}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.powerShare}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.fuelAdjReflect}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.unitImpact}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 font-semibold ${
                        row.note.includes("高")
                          ? "text-red-600"
                          : row.note.includes("中")
                          ? "text-amber-600"
                          : "text-slate-600"
                      }`}
                    >
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 発電燃料構成推移テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            日本の発電燃料構成推移（4時点比較）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2011年の福島第一原子力発電所事故以降、原子力から火力（特にLNG）へのシフトが続きました。
            2022年以降は原子力の再稼働と再エネの拡大により、化石燃料依存が徐々に低下しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">LNG（%）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">石炭（%）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">石油（%）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">原子力（%）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">再エネ（%）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">化石燃料計（%）</th>
                </tr>
              </thead>
              <tbody>
                {powerMixData.map((row) => {
                  const fossilTotal = row.lng + row.coal + row.oil;
                  return (
                    <tr key={row.year} className="border-t border-slate-100">
                      <td className="border border-slate-200 px-3 py-2 font-medium">
                        {row.year}年度
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.lng}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.coal}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.oil}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.nuclear}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-semibold">
                        {row.renewable}
                      </td>
                      <td
                        className={`border border-slate-200 px-3 py-2 text-right font-semibold ${
                          fossilTotal >= 80 ? "text-red-600" : "text-amber-600"
                        }`}
                      >
                        {fossilTotal}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※資源エネルギー庁「エネルギー白書」公表データを参考に作成した概算値。合計が100にならない場合があります。
          </p>
        </section>

        {/* 法人担当者が見るべきポイント */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人担当者が見るべき4つのポイント
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {actionPoints.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {idx + 1}. {item.heading}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              ・ LNGは発電シェア・燃調費への影響度ともに最大。LNG価格のモニタリングが電気料金予測の基本となる。
            </li>
            <li>
              ・ 石炭は2022年に史上最高値を記録したが、価格は2023年以降に急速に低下。ただし依然として高値水準。
            </li>
            <li>
              ・ 再エネ・原子力の比率拡大により長期的には化石燃料依存の低下が期待されるが、短期的な変動リスクは続く。
            </li>
            <li>
              ・ 予算計画には「燃料価格が10%上昇したとき電気料金はどう変わるか」のシナリオ試算を組み込むことが重要。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の計算式と法人への影響。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移詳細",
              description: "2018〜2026年度の年次データ比較。",
            },
            {
              href: "/electricity-vs-gas-price-trend",
              title: "電気料金とガス料金の推移を比較する",
              description: "光熱費全体のポートフォリオ視点での整理。",
            },
            {
              href: "/electricity-cost-risk-yen-depreciation",
              title: "円安リスクと電気料金",
              description: "ドル建て燃料価格と為替の組み合わせリスク。",
            },
          ]}
        />

        <ContentCta
          heading="燃料価格上昇シナリオを試算する"
          description="シミュレーターでLNG価格が上振れした場合の電気料金影響を概算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移・高止まりの解説を読む" },
          ]}
        />
      </section>
    </main>
  );
}
