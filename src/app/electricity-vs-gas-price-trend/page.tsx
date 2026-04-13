import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "電気料金とガス料金の推移を比較する｜法人のエネルギーコスト全体像";
const pageDescription =
  "法人の電気料金とガス料金の推移を重ねて比較。都市ガスの原料費調整との違い、電化率が高い企業の依存度、オール電化vsガス併用のコスト比較を整理。";
const pageUrl =
  "https://simulator.eic-jp.org/electricity-vs-gas-price-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 ガス料金 比較",
    "法人 エネルギーコスト",
    "都市ガス 原料費調整",
    "オール電化 ガス併用",
    "電気料金 推移",
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

// 2019〜2025年の電気・ガス年次指数（2020=100基準）
const priceIndexData = [
  { year: 2019, electricity: 102, gas: 104 },
  { year: 2020, electricity: 100, gas: 100 },
  { year: 2021, electricity: 107, gas: 111 },
  { year: 2022, electricity: 136, gas: 154 },
  { year: 2023, electricity: 148, gas: 162 },
  { year: 2024, electricity: 142, gas: 148 },
  { year: 2025, electricity: 138, gas: 141 },
];

// 電気とガスの料金調整制度比較
const adjustmentComparison = [
  {
    item: "調整名称",
    electricity: "燃料費調整額（燃調費）",
    gas: "原料費調整額",
  },
  {
    item: "参照指標",
    electricity: "LNG・原油・石炭CIF価格（3燃料加重平均）",
    gas: "原油CIF価格（単体）",
  },
  {
    item: "反映ラグ",
    electricity: "約3〜5ヶ月遅れ",
    gas: "約2〜3ヶ月遅れ",
  },
  {
    item: "上限設定",
    electricity: "規制料金のみ上限あり・自由料金は無制限",
    gas: "都市ガス規制料金は上限あり",
  },
  {
    item: "変動幅",
    electricity: "±8〜12円/kWh（2022年度ピーク時）",
    gas: "±4〜7円/MJ（2022年度ピーク時）",
  },
  {
    item: "法人影響度",
    electricity: "高（大口は毎月請求に直結）",
    gas: "中〜高（契約形態による）",
  },
];

// 業種別の電気・ガス比率
const industryRatioData = [
  {
    industry: "製造業（化学・素材）",
    electricityRatio: "45%",
    gasRatio: "50%",
    other: "5%",
    note: "ガス比率が特に高い",
  },
  {
    industry: "製造業（食品）",
    electricityRatio: "35%",
    gasRatio: "55%",
    other: "10%",
    note: "加熱工程でガス依存",
  },
  {
    industry: "オフィスビル",
    electricityRatio: "75%",
    gasRatio: "20%",
    other: "5%",
    note: "空調・照明が主体",
  },
  {
    industry: "商業施設・ショッピングモール",
    electricityRatio: "70%",
    gasRatio: "25%",
    other: "5%",
    note: "給湯・厨房でガス使用",
  },
  {
    industry: "ホテル・旅館",
    electricityRatio: "55%",
    gasRatio: "40%",
    other: "5%",
    note: "給湯需要が大きい",
  },
  {
    industry: "病院・医療施設",
    electricityRatio: "60%",
    gasRatio: "35%",
    other: "5%",
    note: "コジェネ導入で比率変動あり",
  },
];

// 光熱費判断ポイント
const decisionPoints = [
  {
    point: "電気・ガスの支出比率を把握する",
    detail:
      "まず光熱費全体に占める電気とガスの割合を確認します。ガス比率が高い業種はガス調達の見直しも優先度が高くなります。",
  },
  {
    point: "調整制度の反映ラグの違いを理解する",
    detail:
      "燃料価格が下がった場合、電気は3〜5ヶ月、ガスは2〜3ヶ月後に恩恵が来ます。タイミングを把握して予算修正に役立てます。",
  },
  {
    point: "オール電化とガス併用の総コストを比較する",
    detail:
      "電化率を上げると電気料金リスクへの集中が高まります。設備投資を含めた5〜10年の総コストで判断します。",
  },
  {
    point: "燃料価格の連動性を確認する",
    detail:
      "LNG・原油は連動性が高いため、電気もガスも同時に上昇しやすい傾向があります。どちらか一方に依存しすぎるリスクを意識します。",
  },
  {
    point: "補助金・助成制度の対象を確認する",
    detail:
      "電気・ガス双方に政府補助が適用された時期があります。補助終了後の計画を立てるうえで、両方の動向を追う必要があります。",
  },
];

export default function ElectricityVsGasPriceTrendPage() {
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
        <span className="text-slate-800">電気料金とガス料金の推移を比較する</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金とガス料金の推移を比較する
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の光熱費を管理するうえで、電気料金とガス料金は切り離せない関係にあります。
          どちらも燃料国際価格に連動して変動しますが、調整制度の仕組みや反映ラグ、上限設定には大きな違いがあります。
          このページでは2019〜2025年の推移指数を比較し、業種別の比率や判断ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 推移テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気・ガス料金の年次推移指数（2020年＝100）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            総務省消費者物価指数（企業向け参考値）をベースに、2020年を100とした指数で比較します。
            2022〜2023年はガス料金の上昇率が電気を上回りましたが、その後は両者ともに高止まりが続いています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    電気料金指数
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    ガス料金指数
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    差（ガス－電気）
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceIndexData.map((row) => {
                  const diff = row.gas - row.electricity;
                  return (
                    <tr key={row.year} className="border-t border-slate-100">
                      <td className="border border-slate-200 px-3 py-2 font-medium">
                        {row.year}年
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.electricity}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.gas}
                      </td>
                      <td
                        className={`border border-slate-200 px-3 py-2 text-right font-semibold ${
                          diff > 10 ? "text-red-600" : diff > 0 ? "text-amber-600" : "text-slate-600"
                        }`}
                      >
                        {diff > 0 ? "+" : ""}
                        {diff}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※指数は概算参考値。消費者物価指数・資源エネルギー庁公表データを参考に作成。
          </p>
        </section>

        {/* 調整制度比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気とガスの料金調整制度比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気の「燃料費調整額」とガスの「原料費調整額」はどちらも燃料価格を自動的に料金へ転嫁する仕組みですが、
            参照指標・反映ラグ・上限設定に差があります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left w-32">
                    比較項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    電気（燃料費調整額）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    都市ガス（原料費調整額）
                  </th>
                </tr>
              </thead>
              <tbody>
                {adjustmentComparison.map((row) => (
                  <tr key={row.item} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900 bg-slate-50">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.electricity}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.gas}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 業種別電気・ガス比率 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別の電気・ガス比率
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            光熱費に占める電気とガスの比率は業種・用途によって大きく異なります。
            ガス比率が高い業種ほど、ガス調達の最適化も電気と同等かそれ以上に重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">業種</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    電気比率
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    ガス比率
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    その他
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">備考</th>
                </tr>
              </thead>
              <tbody>
                {industryRatioData.map((row) => (
                  <tr key={row.industry} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium">
                      {row.industry}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.electricityRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                      {row.gasRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">
                      {row.other}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※比率は業界平均の目安。設備構成・規模により異なります。
          </p>
        </section>

        {/* 光熱費全体での判断ポイント */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            光熱費全体での判断ポイント5つ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気とガスを別々に管理するのではなく、光熱費全体のポートフォリオとして最適化することが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {decisionPoints.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {idx + 1}. {item.point}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気・ガス比較のまとめ
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              ・ 2022〜2023年はガス料金の上昇率が電気を上回ったが、2024年以降は両者とも高止まりで収束傾向。
            </li>
            <li>
              ・ 燃料費調整額（電気）は3〜5ヶ月遅れ、原料費調整額（ガス）は2〜3ヶ月遅れで反映。タイムラグの差が予算管理に影響する。
            </li>
            <li>
              ・ 製造業・食品・ホテルはガス比率が高く、電気だけ対策しても光熱費全体の削減効果は限定的。
            </li>
            <li>
              ・ オール電化への切り替えは電気料金リスクへの集中を意味するため、総コストと分散の観点で評価が必要。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "電気料金の燃調制度の基本と計算式。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移詳細",
              description: "2018〜2026年度の年次推移データ。",
            },
            {
              href: "/electricity-cost-risk-yen-depreciation",
              title: "円安リスクと電気料金",
              description: "燃料輸入コストへの為替の影響。",
            },
            {
              href: "/fuel-mix-price-trend-and-electricity-impact",
              title: "燃料別価格推移と電気料金への影響度",
              description: "LNG・石炭・原油それぞれの影響度を比較。",
            },
          ]}
        />

        <ContentCta
          heading="自社の光熱費リスクを試算する"
          description="シミュレーターで電気料金の上昇シナリオを試算し、コスト全体への影響を把握しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移・高止まりの解説を読む" },
          ]}
        />
      </section>
    </main>
  );
}
