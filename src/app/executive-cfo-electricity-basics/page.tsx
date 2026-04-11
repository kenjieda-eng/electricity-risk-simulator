import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "CFOのための電力市場基礎｜燃調費・市場連動・容量拠出金を1ページで";
const pageDescription =
  "燃料費調整額・市場連動型契約・容量拠出金・再エネ賦課金の仕組みをCFO・経営層向けに解説。法人電気料金の構成要素と価格変動要因を1ページで把握し、財務計画・契約判断に活用できます。";
const pageUrl = "https://simulator.eic-jp.org/executive-cfo-electricity-basics";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額 CFO",
    "市場連動型電力 経営",
    "容量拠出金 法人",
    "電力料金 構成要素",
    "電気料金 仕組み CFO",
    "法人電気料金 財務",
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

const electricityComponents = [
  {
    name: "基本料金",
    type: "固定費",
    description: "契約電力（kW）に対して毎月一定額が発生。使用量に関わらず払い続けるコスト。",
    volatility: "低",
    managementPoint: "契約電力の見直しでデマンドコントロール可能",
  },
  {
    name: "電力量料金",
    type: "変動費（固定単価）",
    description: "使用した電力量（kWh）に応じて発生。単価は契約種別によって固定または変動する。",
    volatility: "中〜高",
    managementPoint: "省エネ・節電で直接削減可能",
  },
  {
    name: "燃料費調整額",
    type: "変動費（市場連動）",
    description: "石炭・LNG・石油の国際市場価格に連動して毎月変動する調整額。上限撤廃後は大幅上昇が起きた。",
    volatility: "極めて高",
    managementPoint: "固定燃調・上限付き契約でリスク軽減可能",
  },
  {
    name: "再エネ賦課金",
    type: "変動費（政策連動）",
    description: "再生可能エネルギー固定価格買取制度（FIT）の費用を電力使用者が負担する制度的コスト。",
    volatility: "中（政策変更リスク）",
    managementPoint: "省エネで使用量削減が基本対策",
  },
  {
    name: "容量拠出金",
    type: "変動費（市場連動）",
    description: "2024年度から本格導入。発電容量確保のための費用で、容量市場オークション結果に連動。",
    volatility: "中〜高（新制度）",
    managementPoint: "単価予測を契約更新の判断材料に",
  },
  {
    name: "送配電網利用料（託送料）",
    type: "固定費（規制料金）",
    description: "電力を送る送配電設備の使用料。規制料金で安定しているが定期改定がある。",
    volatility: "低",
    managementPoint: "基本的に変更不可。把握のみ",
  },
];

const contractTypes = [
  {
    type: "大手電力の規制料金",
    fixity: "高固定",
    riskLevel: "低",
    merit: "価格の安定性が高い。変動リスクが小さい",
    demerit: "割高になる場合がある。値上げ申請が通ると一気に上昇",
    suitable: "価格安定を最優先する企業",
  },
  {
    type: "大手電力の自由化料金（固定単価）",
    fixity: "固定",
    riskLevel: "低〜中",
    merit: "一定期間の価格確定。予算管理がしやすい",
    demerit: "市場が下がっても恩恵を受けにくい。解約違約金あり",
    suitable: "予算確定を重視する企業",
  },
  {
    type: "新電力（固定単価）",
    fixity: "固定",
    riskLevel: "中（倒産リスク含む）",
    merit: "競合により割安な場合がある",
    demerit: "供給者倒産・撤退リスクあり。2021年に多数発生",
    suitable: "価格と信用力のバランスを重視する企業",
  },
  {
    type: "市場連動型（スポット連動）",
    fixity: "変動",
    riskLevel: "高",
    merit: "市場安値時はコストが大幅に低下する",
    demerit: "市場高騰時に単価が急騰。財務計画が立てにくい",
    suitable: "市場リスクを許容できる大企業・電力知識のある企業",
  },
];

const priceDrivers = [
  {
    driver: "LNG（液化天然ガス）国際価格",
    impact: "極めて大",
    mechanism: "日本の火力発電の約4割はLNG。国際価格高騰が燃調費を直撃する",
    recentTrend: "ウクライナ情勢後に急騰。2023年以降やや落ち着きも高止まり",
  },
  {
    driver: "石炭国際価格",
    impact: "大",
    mechanism: "石炭火力の燃料費に影響。LNG同様、燃調費の変動要因",
    recentTrend: "2022年に過去最高水準。その後下落傾向も高い水準",
  },
  {
    driver: "円安・為替",
    impact: "大",
    mechanism: "燃料はほぼ全量輸入。円安は輸入コスト増→燃調費上昇を通じて電気代に波及",
    recentTrend: "2022〜2024年の円安が電気代上昇を増幅",
  },
  {
    driver: "卸電力市場価格（JEPX）",
    impact: "市場連動契約に直結",
    mechanism: "スポット市場の価格が市場連動型契約の単価に直接反映される",
    recentTrend: "2021年冬に歴史的高騰（100円/kWhを超える日も）",
  },
  {
    driver: "容量市場オークション結果",
    impact: "中（増加傾向）",
    mechanism: "4年前に実施されたオークション結果が実際の拠出金に反映される",
    recentTrend: "2024年度から本格算入。今後も増加見込み",
  },
];

export default function ExecutiveCfoElectricityBasicsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">

      {/* ヘッダー */}
      <header className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          CFOのための電力市場基礎
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">燃調費・市場連動・容量拠出金を1ページで</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          電気代の請求書には「燃料費調整額」「再エネ賦課金」「容量拠出金」など、
          複数の変動要素が含まれています。これらを正確に理解しなければ、なぜ電気代が上がったのかを
          説明できず、適切な契約選択もできません。本ページでは、CFO・財務責任者が
          「電力コストの変動構造」を把握するために必要な基礎知識を、コンパクトに整理します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 法人向け電気料金は「基本料金＋電力量料金＋燃調費＋再エネ賦課金＋容量拠出金」の5要素で構成される。</li>
          <li>・ 変動要素（燃調費・容量拠出金・市場連動単価）が大きくなっており、2020年代の電気代上昇の主因となっている。</li>
          <li>・ 契約形態（固定・市場連動）の選択は財務リスク管理の判断であり、CFOが関与すべき意思決定領域である。</li>
          <li>・ 容量拠出金は2024年度から本格算入され、今後も単価は変動する新しいコスト要素として注視が必要。</li>
          <li>・ 円安・LNG価格・JEPX市場価格の3指標を追うだけで、電気代変動の7〜8割は説明できる。</li>
        </ul>
      </section>

      {/* セクション1: 電気料金の構成要素 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. 法人電気料金の構成要素（一覧）</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-5 sm:text-base">
            法人向け電気料金は以下の6つの要素から構成されます。
            CFOとして把握すべきは特に「変動性が高い要素」です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">料金構成要素</th>
                  <th className="p-3 text-center font-semibold">費用性質</th>
                  <th className="p-3 text-center font-semibold">変動性</th>
                  <th className="p-3 text-left font-semibold">概要</th>
                  <th className="p-3 text-left font-semibold">管理ポイント</th>
                </tr>
              </thead>
              <tbody>
                {electricityComponents.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.name}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs text-slate-600">{row.type}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.volatility.includes("極めて高") ? "text-red-700" :
                      row.volatility.includes("高") ? "text-orange-600" :
                      row.volatility.includes("中") ? "text-amber-600" : "text-green-700"
                    }`}>{row.volatility}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600 max-w-xs">{row.description}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{row.managementPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション2: 燃料費調整額の仕組み */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 燃料費調整額（燃調費）の仕組み</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            燃調費は、電力会社が発電に使う燃料（LNG・石炭・石油）の輸入価格に連動して
            毎月変動する料金調整の仕組みです。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-800">計算の仕組み</h3>
              <ul className="mt-2 text-xs text-slate-600 space-y-1 leading-6">
                <li>・ 3か月前の平均燃料価格を基に翌月の燃調費単価を決定</li>
                <li>・ 燃料価格が基準価格より高い → 燃調費がプラス（電気代↑）</li>
                <li>・ 燃料価格が基準価格より低い → 燃調費がマイナス（電気代↓）</li>
                <li>・ 2022年以前は上限額があったが、規制料金メニューの上限は撤廃された</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-800">CFOが注目すべきポイント</h3>
              <ul className="mt-2 text-xs text-slate-600 space-y-1 leading-6">
                <li>・ 毎月変動するため、月次の電気代が予測しにくい</li>
                <li>・ 上限なしの契約では急騰時に電気代が青天井になるリスクがある</li>
                <li>・ 「固定燃調」や「燃調上限付き」契約を選ぶことでリスク軽減が可能</li>
                <li>・ 新電力の一部は燃調費の扱いが異なるため、契約内容を精査が必要</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3: 市場連動型契約 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 契約形態の選択：固定 vs 市場連動</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-5 sm:text-base">
            電力契約の形態は財務リスク管理の問題です。各契約形態の特徴を把握した上で、
            自社の財務的リスク許容度に応じた選択が必要です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">契約形態</th>
                  <th className="p-3 text-center font-semibold">固定性</th>
                  <th className="p-3 text-center font-semibold">リスク水準</th>
                  <th className="p-3 text-left font-semibold">メリット</th>
                  <th className="p-3 text-left font-semibold">デメリット</th>
                  <th className="p-3 text-left font-semibold">適した企業</th>
                </tr>
              </thead>
              <tbody>
                {contractTypes.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{row.type}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs text-slate-600">{row.fixity}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.riskLevel.includes("高") ? "text-red-700" :
                      row.riskLevel.includes("中") ? "text-amber-600" : "text-green-700"
                    }`}>{row.riskLevel}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{row.merit}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-red-600">{row.demerit}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション4: 容量拠出金 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. 容量拠出金：2024年度から本格導入の新コスト</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金とは、電力の安定供給を担保するための「発電設備容量」を確保する費用を、
            電力使用者が負担する仕組みです。2020年度に容量市場のオークションが開始され、
            2024年度から実際の請求に算入されています。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-800">仕組みの概要</h3>
              <p className="mt-2 text-xs text-slate-600 leading-6">
                4年前に容量市場オークションで落札された「発電容量の提供」に対して、
                電力消費者が費用を負担する仕組み。落札価格が高いほど拠出金が増える。
              </p>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-800">CFOへの影響</h3>
              <p className="mt-2 text-xs text-slate-600 leading-6">
                2024年度から電気代の内訳に新たに追加。今後の単価水準は毎年のオークション結果に依存し、
                増加傾向が続く可能性がある。予算策定時は要注意。
              </p>
            </div>
            <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
              <h3 className="text-sm font-bold text-slate-800">対応策</h3>
              <p className="mt-2 text-xs text-slate-600 leading-6">
                容量拠出金は電力会社・新電力ともに請求される。省エネで使用量を減らすことが
                直接的な削減策。契約切り替えでは改善が難しいコスト。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション5: 価格変動ドライバー */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">5. 電気代を動かす5つの価格変動ドライバー</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 mb-5 sm:text-base">
            CFOが追うべき電気代変動の主要ドライバーを整理します。
            これらを定期的にモニタリングすることで、電気代の先行指標として活用できます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">変動要因</th>
                  <th className="p-3 text-center font-semibold">電気代への影響</th>
                  <th className="p-3 text-left font-semibold">波及メカニズム</th>
                  <th className="p-3 text-left font-semibold">2020年代の動向</th>
                </tr>
              </thead>
              <tbody>
                {priceDrivers.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{row.driver}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-semibold ${
                      row.impact === "極めて大" ? "text-red-700" :
                      row.impact === "大" ? "text-orange-600" : "text-amber-600"
                    }`}>{row.impact}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{row.mechanism}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{row.recentTrend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション6: 電気代の価格構造イメージ */}
      <section className="mt-8 rounded-xl border border-slate-300 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">6. 電気代の価格構造イメージ（構成割合の目安）</h2>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {[
            { name: "電力量料金（固定部分）", pct: "約40〜50%", color: "bg-slate-600" },
            { name: "燃料費調整額", pct: "約10〜25%（変動大）", color: "bg-red-500" },
            { name: "基本料金", pct: "約10〜20%", color: "bg-slate-400" },
            { name: "再エネ賦課金", pct: "約5〜10%", color: "bg-green-500" },
            { name: "容量拠出金", pct: "約2〜5%（増加中）", color: "bg-amber-500" },
            { name: "託送料金", pct: "約10〜15%", color: "bg-slate-300" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
              <div className={`w-3 h-10 rounded-full ${item.color} shrink-0`} />
              <div>
                <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-500">{item.pct}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">※ 契約形態・電力会社・使用量・市場環境によって大きく異なります。あくまで目安の割合です。</p>
      </section>

      {/* セクション7: 経営判断の論点 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">7. CFOが持つべき基本的な論点</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q1.</span>現在の電力契約に「燃調費の上限」は設定されているか？青天井ではないか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q2.</span>市場連動型契約の場合、JEPXスポット市場価格の急騰時に単価はどう変動するか把握しているか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q3.</span>容量拠出金は来年度・再来年度の予算にどの程度影響するか試算済みか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q4.</span>電力コストの変動要因（LNG価格・為替・JEPX）を財務部門は月次でモニタリングしているか？</li>
          <li className="flex gap-2"><span className="font-bold text-amber-600 shrink-0">Q5.</span>現在の電力会社・契約は、財務リスク管理の観点から最適な選択か？競合他社と比較したか？</li>
        </ul>
      </section>

      {/* セクション8: 次ステップ */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">8. 担当者への指示事項（次ステップ）</h2>
        <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>現在の電力契約書を入手し、燃調費の上限有無・市場連動の仕組みを確認させる</li>
          <li>直近12か月分の電気代請求書から燃調費・容量拠出金の月次推移を集計させる</li>
          <li>来年度の容量拠出金単価の見通しを電力会社に問い合わせさせる</li>
          <li>LNG価格・JEPX月次価格のモニタリング体制を財務部門に整備させる</li>
          <li>固定単価・固定燃調の代替契約の見積もりを2〜3社から取得させる</li>
        </ol>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃料費調整額の仕組みと計算方法を詳しく解説します。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "容量拠出金の背景・仕組み・今後の見通しを解説します。",
            },
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "EBITDAへの定量的インパクトをフレームワークと試算テーブルで解説します。",
            },
            {
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク",
              description: "BCPと財務リスクの観点から電力リスクを整理します。",
            },
            {
              href: "/explaining-fixed-vs-market-to-management",
              title: "固定と市場連動の比較を経営層に説明するとき",
              description: "固定・市場連動の違いを経営層向けに説明するフレームワーク。",
            },
          ]}
        />
      </div>

      {/* ContentCta */}
      <div className="mt-6">
        <ContentCta
          heading="電力コストの変動リスクを今すぐ確認する"
          description="シミュレーターで自社の電気代リスクを試算できます。契約形態の見直し・経営相談はお問い合わせください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "経営相談はこちら" },
          ]}
        />
      </div>
    </main>
  );
}
