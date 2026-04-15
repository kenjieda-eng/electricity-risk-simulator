import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "法人電気料金の月次推移パターン｜直近12ヶ月の動きを読むフレームワーク";
const pageDescription =
  "法人の電気料金を月次で分析するフレームワークを解説。季節性と制度要因の切り分け、前月比と前年同月比の使い分け、月次データの入手方法を整理。";
const pageUrl =
  "https://simulator.eic-jp.org/monthly-electricity-price-trend-analysis";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 月次",
    "電気料金 推移 分析",
    "前月比 前年同月比",
    "電気料金 季節性",
    "高圧 月次コスト",
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

// 月次分析3ステップ
const analysisSteps = [
  {
    step: "Step 1: 使用量（kWh）の変動を確認する",
    description:
      "まず料金全体の変動が「使用量の変化によるもの」かどうかを切り分けます。",
    details: [
      "前月比・前年同月比で使用量（kWh）を比較する",
      "季節ごとの増減（冷暖房需要）は正常な変動として区別する",
      "工場稼働率・テナント入退去など操業要因による変動を記録する",
      "需要ピーク（デマンド値）が基本料金に影響していないか確認する",
    ],
  },
  {
    step: "Step 2: 電力量料金単価（円/kWh）の変動を確認する",
    description:
      "次に使用量は変わらないのに請求額が増えている場合、単価の変化を確認します。",
    details: [
      "電力量料金の単価を請求書から直接読み取る",
      "段階制料金（第1〜第3段階）で使用量に応じた単価ランクが変わっていないか確認する",
      "契約変更・料金改定の有無を電力会社の通知で確認する",
      "kWhあたりの実効単価＝（燃調後請求額）÷（kWh）で月次比較する",
    ],
  },
  {
    step: "Step 3: 燃調費・再エネ賦課金などの調整項目を確認する",
    description:
      "単価が変動していた場合、どの調整項目が変化したかを特定します。",
    details: [
      "燃料費調整額（燃調費）は月次で変動する。前月との差額を算出する",
      "再生可能エネルギー賦課金は毎年4月に改定される",
      "激変緩和措置などの補助が適用・終了していないか確認する",
      "これらを分解することで「制度変更による増加」と「使用量による増加」が区別できる",
    ],
  },
];

// 前月比 vs 前年同月比の使い分けテーブル
const comparisonData = [
  {
    scene: "夏季の電気料金増加を評価する",
    prevMonth: "使用量増加の確認に適している（冷房増加の把握）",
    prevYearSameMonth: "昨年夏との料金水準の比較に適している",
    recommendation: "前年同月比",
    reason: "気温・稼働条件が近い年同期と比べないと季節性を除去できない",
  },
  {
    scene: "燃調費の値上がりを評価する",
    prevMonth: "直近の変動幅をリアルタイムで把握できる",
    prevYearSameMonth: "年間での燃調費推移の変化を把握できる",
    recommendation: "前月比",
    reason: "燃調費は月次改定のため、直前月との比較が最も即時性が高い",
  },
  {
    scene: "賦課金改定（4月）の影響を評価する",
    prevMonth: "3月→4月の変化を捉えるのに有効",
    prevYearSameMonth: "前年4月との比較で改定幅を把握できる",
    recommendation: "前月比",
    reason: "4月改定は必ず前月（3月）と比べることで変化額が明確になる",
  },
  {
    scene: "年間予算の消化率を管理する",
    prevMonth: "単月の急増・急減を検知できる",
    prevYearSameMonth: "予算策定時の根拠年度との比較に使いやすい",
    recommendation: "前年同月比",
    reason: "季節変動が打ち消されるため、構造的なコスト変化を把握しやすい",
  },
  {
    scene: "契約切り替え効果を測定する",
    prevMonth: "切り替え前後の即時比較に使える",
    prevYearSameMonth: "1年後に同一季節条件で効果を検証できる",
    recommendation: "両方を使う",
    reason:
      "切り替え直後は前月比、1年後に前年同月比で効果を確認するのが理想",
  },
];

// 高圧施設の月次推移例（12ヶ月の模擬データ）
const monthlyMockData = [
  { month: "1月", usageKwh: 128000, energyChargeYen: 2176000, fuelAdjYen: 358400, totalYen: 2534400 },
  { month: "2月", usageKwh: 122000, energyChargeYen: 2074000, fuelAdjYen: 341600, totalYen: 2415600 },
  { month: "3月", usageKwh: 115000, energyChargeYen: 1955000, fuelAdjYen: 322000, totalYen: 2277000 },
  { month: "4月", usageKwh: 108000, energyChargeYen: 1836000, fuelAdjYen: 313200, totalYen: 2149200 },
  { month: "5月", usageKwh: 105000, energyChargeYen: 1785000, fuelAdjYen: 304500, totalYen: 2089500 },
  { month: "6月", usageKwh: 114000, energyChargeYen: 1938000, fuelAdjYen: 319200, totalYen: 2257200 },
  { month: "7月", usageKwh: 138000, energyChargeYen: 2346000, fuelAdjYen: 372600, totalYen: 2718600 },
  { month: "8月", usageKwh: 145000, energyChargeYen: 2465000, fuelAdjYen: 391500, totalYen: 2856500 },
  { month: "9月", usageKwh: 132000, energyChargeYen: 2244000, fuelAdjYen: 356400, totalYen: 2600400 },
  { month: "10月", usageKwh: 110000, energyChargeYen: 1870000, fuelAdjYen: 308000, totalYen: 2178000 },
  { month: "11月", usageKwh: 116000, energyChargeYen: 1972000, fuelAdjYen: 324800, totalYen: 2296800 },
  { month: "12月", usageKwh: 125000, energyChargeYen: 2125000, fuelAdjYen: 350000, totalYen: 2475000 },
];

// 月次データの入手先テーブル
const dataSources = [
  {
    source: "電力会社のWeb請求書・マイページ",
    url: "各社のマイページ（例: 東京電力EP「でんき家計簿」等）",
    updateFreq: "毎月（検針後約3〜5営業日）",
    checkPoint:
      "月次のkWh・燃調単価・合計額が確認可能。CSVダウンロードができる場合は活用する",
  },
  {
    source: "資源エネルギー庁「電力・ガス小売市場の動向」",
    url: "https://www.enecho.meti.go.jp/",
    updateFreq: "月次（翌月下旬頃）",
    checkPoint: "標準電力量料金・燃調費単価の全国集計値。自社データとの照合に使う",
  },
  {
    source: "財務省貿易統計（燃料CIF価格）",
    url: "https://www.customs.go.jp/toukei/info/",
    updateFreq: "月次（翌月中旬頃）",
    checkPoint:
      "LNG・石炭・原油のCIF価格。3〜5ヶ月後の燃調費変動の先行指標として活用",
  },
  {
    source: "電力広域的運営推進機関（OCCTO）「需給バランス」",
    url: "https://www.occto.or.jp/",
    updateFreq: "日次・月次",
    checkPoint:
      "全国の電力需給状況。需給逼迫時は市場価格上昇→市場連動型契約への影響が大きい",
  },
  {
    source: "日本卸電力取引所（JEPX）スポット市場価格",
    url: "https://www.jepx.jp/",
    updateFreq: "日次（前日公表）",
    checkPoint:
      "市場連動型プランの契約者は必須。月次平均を集計して毎月の変動トレンドを把握する",
  },
];

export default function MonthlyElectricityPriceTrendAnalysisPage() {
  const annualTotal = monthlyMockData.reduce((sum, r) => sum + r.totalYen, 0);
  const annualUsage = monthlyMockData.reduce((sum, r) => sum + r.usageKwh, 0);
  const effectiveUnitPrice = (annualTotal / annualUsage).toFixed(2);

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
        <span className="text-slate-800">法人電気料金の月次推移パターン</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人電気料金の月次推移パターン
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「先月より電気代が上がった」という事実だけでは、適切な対策がとれません。
          使用量の増加なのか、燃調費の上昇なのか、賦課金改定の影響なのかを月次で切り分けるフレームワークが必要です。
          このページでは3ステップの分析手順、比較指標の使い分け、12ヶ月の模擬推移データ、
          そして信頼できる月次データの入手先を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 月次分析3ステップ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月次分析の3ステップ：使用量・単価・調整項目の切り分け
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の請求額変動を正確に把握するには、3つのレイヤーを順番に確認します。
            ステップを飛ばすと誤った原因特定につながります。
          </p>
          <div className="mt-4 space-y-4">
            {analysisSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.step}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {step.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {step.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="text-sm leading-6 text-slate-700 before:mr-2 before:content-['▸']"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 前月比 vs 前年同月比 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「前月比」vs「前年同月比」の使い分け（5場面）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            どちらの比較指標を使うべきかは場面によって異なります。誤った指標を使うと季節性や制度変更の影響が混在して判断を誤ります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left w-48">
                    場面
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    前月比の特徴
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    前年同月比の特徴
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left w-32">
                    推奨
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    理由
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900 bg-slate-50">
                      {row.scene}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.prevMonth}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.prevYearSameMonth}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">
                      {row.recommendation}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 高圧施設月次推移例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧施設の月次推移例（12ヶ月・模擬データ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約の中規模施設（年間使用量約140万kWh）を例に、月次の使用量・電力量料金・燃調費・合計額の
            推移を示します。夏冬のピーク（7〜8月・12〜1月）に向けて合計額が上昇するパターンがわかります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[580px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">月</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    使用量（kWh）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    電力量料金（円）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    燃調費（円）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    合計（円）
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyMockData.map((row) => {
                  const isPeakMonth =
                    row.month === "7月" ||
                    row.month === "8月" ||
                    row.month === "1月";
                  return (
                    <tr
                      key={row.month}
                      className={`border-t border-slate-100 ${isPeakMonth ? "bg-amber-50" : ""}`}
                    >
                      <td
                        className={`border border-slate-200 px-3 py-2 font-medium ${
                          isPeakMonth ? "text-amber-700" : ""
                        }`}
                      >
                        {row.month}
                        {isPeakMonth && (
                          <span className="ml-1 text-xs text-amber-600">▲</span>
                        )}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.usageKwh.toLocaleString("ja-JP")}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right">
                        {row.energyChargeYen.toLocaleString("ja-JP")}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-red-700">
                        {row.fuelAdjYen.toLocaleString("ja-JP")}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                        {row.totalYen.toLocaleString("ja-JP")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="bg-slate-50 font-semibold text-slate-900">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">年間合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    {annualUsage.toLocaleString("ja-JP")}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right">—</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">—</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">
                    {annualTotal.toLocaleString("ja-JP")}
                  </td>
                </tr>
                <tr>
                  <td
                    colSpan={5}
                    className="border border-slate-200 px-3 py-2 text-sm font-normal text-slate-600"
                  >
                    年間実効単価（税別概算）:{" "}
                    <span className="font-semibold text-slate-900">
                      {effectiveUnitPrice} 円/kWh
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※基本料金・再エネ賦課金は含まない模擬データです。実際の請求額とは異なります。▲は季節ピーク月。
          </p>
        </section>

        {/* 月次データの入手先テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月次データの入手先（5情報源）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社の請求書データに加えて、外部の公的データを組み合わせることで月次変動の背景を正確に把握できます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">情報源</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">URL / 場所</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">更新頻度</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">確認ポイント</th>
                </tr>
              </thead>
              <tbody>
                {dataSources.map((row, idx) => (
                  <tr key={idx} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900 bg-slate-50">
                      {row.source}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600 text-xs">
                      {row.url}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.updateFreq}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.checkPoint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月次管理のポイントまとめ
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              ・ 月次の変動分析は「使用量→単価→調整項目」の順に切り分けることが鉄則。
            </li>
            <li>
              ・ 燃調費の変動確認には前月比、予算管理・構造変化の把握には前年同月比が適している。
            </li>
            <li>
              ・ 年間12ヶ月のデータを月次グラフ化すると、季節性と制度要因が視覚的に区別しやすくなる。
            </li>
            <li>
              ・ 燃料CIF価格を3〜5ヶ月先行指標として見ることで、燃調費の動向を事前に予測できる。
            </li>
            <li>
              ・ 月次の実効単価（円/kWh）を継続記録することが、契約見直し判断の基礎データになる。
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="monthly-electricity-price-trend-analysis" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "電力量料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の月次変動の仕組みと計算式。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移詳細",
              description: "2018〜2026年度の年次推移データ。",
            },
            {
              href: "/fuel-mix-price-trend-and-electricity-impact",
              title: "燃料別価格推移と電気料金への影響度",
              description: "LNG・石炭・原油それぞれの影響度。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "法人電気料金のベンチマーク",
              description: "業種・規模別の料金水準との比較方法。",
            },
            {
              href: "/business-electricity-retrospective",
              title: "法人電気料金 月次振り返り",
              description: "直近の月次動向と実際のデータ振り返り。",
            },
          ]}
        />

        <ContentCta
          heading="自社の月次コストをシミュレーションする"
          description="月間使用量と現在の単価を入力することで、燃調上振れシナリオの年間影響額を試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移・高止まりの解説を読む" },
          ]}
        />
      </section>
    </main>
  );
}
