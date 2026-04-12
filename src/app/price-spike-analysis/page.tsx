import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { SpikeHourChart, SpikeMonthChart } from "../../components/market-data/SpikeAnalysisCharts";
import {
  JEPX_FY_LABELS,
  JEPX_SPIKE_FY,
} from "../../data/marketData";

// --- 定数 ---
const pageTitle = "電力価格スパイクはいつ起きるか｜50円超の発生パターン分析";
const pageDescription =
  "JEPXスポット価格が50円/kWhを超える「スパイク」は年度・月・時間帯によって著しく偏在します。FY2020に749回、1月に777回集中、17〜18時がピークとなるメカニズムを徹底解説。法人電気料金の市場連動型リスクを定量的に把握するためのデータ分析。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力価格スパイク", "JEPX 50円超", "スポット価格急騰", "電力市場 急騰リスク",
    "市場連動型 リスク", "法人電気料金 高騰", "FY2020 電力高騰", "冬季電力需給逼迫",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/price-spike-analysis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/price-spike-analysis",
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

// --- ページ固有データ ---
const fyTableData = JEPX_FY_LABELS.map((label, i) => ({
  label,
  spikes: JEPX_SPIKE_FY[i],
})).filter((row) => row.spikes > 0);

// --- Page Component ---
export default function PriceSpikeAnalysisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電力価格スパイクはいつ起きるか
        </h1>
        <p className="mt-1 text-lg font-semibold text-slate-700">50円超の発生パターン分析</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPXスポット市場において、価格が50円/kWhを超える急騰（スパイク）は特定の年度・月・時間帯に著しく集中します。
          FY2020の冬季には年間749回ものスパイクが発生し、市場連動型の電気料金契約を締結していた法人に甚大なコスト増をもたらしました。
          本ページでは過去のデータを年度別・月別・時間帯別に分析し、スパイクがなぜ・いつ発生するかを体系的に解説します。
          電気料金リスクを定量的に理解し、適切な契約選択と対策立案に役立ててください。
        </p>
      </header>

      {/* サマリー統計 */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">スパイク発生の主要データ</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">最多発生年度</p>
            <p className="mt-1 text-3xl font-bold text-red-600">749回</p>
            <p className="mt-1 text-sm text-slate-600">FY2020（2020年度）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">最多発生月</p>
            <p className="mt-1 text-3xl font-bold text-red-600">777コマ</p>
            <p className="mt-1 text-sm text-slate-600">1月（全年度合算）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">ピーク時間帯</p>
            <p className="mt-1 text-3xl font-bold text-amber-600">17〜18時</p>
            <p className="mt-1 text-sm text-slate-600">159コマ（最多発生）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">FY2022スパイク数</p>
            <p className="mt-1 text-3xl font-bold text-blue-600">282回</p>
            <p className="mt-1 text-sm text-slate-600">ウクライナ危機の影響</p>
          </div>
        </div>
      </section>

      {/* スパイクの定義 */}
      <section className="mt-6 space-y-4">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. 価格スパイクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            本分析では、JEPXスポット市場（前日スポット取引）における約定価格が<strong>50円/kWhを超えた30分コマ</strong>を「価格スパイク」として定義します。
            通常のスポット価格は8〜15円/kWh程度で推移しますが、需給が著しく逼迫した局面では数十円〜250円/kWhまで急騰します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電力市場では、1日48コマ（30分×48）の入札が行われます。
            スパイクが生じたコマを市場連動型の料金プランで調達していた場合、そのコマの電力コストは通常の3〜20倍以上になります。
            頻繁なスパイク発生が続く月は電気料金明細に<strong>市場価格調整費</strong>として多額の追加請求が現れ、企業の損益に直接打撃を与えます。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">スパイク価格の影響規模イメージ</p>
            <p className="mt-1 text-sm leading-7 text-amber-700">
              月間電力使用量100,000kWhの法人が市場連動型で契約している場合、
              スパイクが集中した2021年1月では市場価格が平均40円/kWhを超えた日が続き、
              通常月比で電気代が3〜5倍に膨らんだ事業者も存在しました。
              年間を通じたリスク評価が不可欠です。
            </p>
          </div>
        </section>

        {/* 時間帯別スパイク分析 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. 時間帯別スパイク発生分布</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下のグラフは、過去のJEPXスポット市場で50円超が記録された全コマを時間帯（0〜23時）ごとに集計したものです。
            <strong>17〜18時台に最多の159コマ</strong>が集中し、16〜19時の帯が突出していることがわかります。
          </p>
          <div className="mt-4">
            <SpikeHourChart />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">なぜ夕方にスパイクが集中するのか</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力システムにおいて、<strong>17〜19時は太陽光発電の出力が急速に減少する時間帯</strong>です。
            昼間に再エネで大量供給していた分が夕方以降ゼロに近づく一方、帰宅による照明・暖冷房需要が増大します。
            これが「ダックカーブ」と呼ばれる需給パターンで、供給の急減と需要の急増が重なる夕方に市場価格が跳ね上がりやすい構造があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに、火力発電機の起動には数時間かかるため、夕方の急峻な需要増に対応できる予備力が限られており、
            価格入札競争が激化しやすい時間帯でもあります。蓄電池やデマンドレスポンス（DR）によるこの時間帯の需要抑制が、
            スパイクへの有効な対策として注目されています。
          </p>
        </section>

        {/* 月別スパイク分析 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. 月別スパイク発生パターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月別集計では<strong>1月が突出して777コマ</strong>と最多で、8月（121コマ）、3月（87コマ）が続きます。
            スパイクは明らかに冬季（12〜2月）と夏季（7〜8月）の需給逼迫期に集中しており、春秋は発生がほぼゼロです（4月・5月は0コマ）。
          </p>
          <div className="mt-4">
            <SpikeMonthChart />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-slate-900">なぜ冬（特に1月）が最もリスクが高いのか</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            冬季の電力需要は暖房によって年間最大値を記録しやすく、特に<strong>強い寒波が来襲した年の1月</strong>は需要が平常時より20〜30%増加します。
            同時に、LNG（液化天然ガス）の在庫逼迫や調達難が重なると火力発電の燃料供給に制約が生じ、供給力が低下します。
            2021年1月はコロナ禍による国際LNG需要の偏在と国内寒波が重なり、スポット価格が200円/kWhを超えるコマも発生しました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方、夏（8月）のスパイクは猛暑による冷房需要急増が主因です。ただし夏は太陽光の発電量が多いため、需給逼迫は主に夕方以降に限定される傾向があります。
          </p>
        </section>

        {/* 年度別スパイク件数表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. 年度別スパイク件数の推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表は過去17年度のうち、スパイクが実際に発生した年度のみを抜粋したものです。
            スパイクが極めて少ない年度が多い一方、FY2020・FY2021・FY2022の3年間に約1,200コマが集中していることがわかります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-4 py-2 font-semibold text-slate-700">年度</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">スパイク発生コマ数</th>
                  <th className="px-4 py-2 font-semibold text-slate-700">主な背景</th>
                </tr>
              </thead>
              <tbody>
                {fyTableData.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-2 font-medium text-slate-800">{row.label}</td>
                    <td className={`px-4 py-2 text-right font-semibold ${row.spikes >= 500 ? "text-red-600" : row.spikes >= 100 ? "text-amber-600" : "text-slate-700"}`}>
                      {row.spikes.toLocaleString()} コマ
                    </td>
                    <td className="px-4 py-2 text-slate-600">
                      {row.label === "FY2013" && "夏季需要高まり、市場流動性低下期"}
                      {row.label === "FY2018" && "夏季記録的猛暑（西日本豪雨後）"}
                      {row.label === "FY2019" && "冬季LNG調達コスト上昇"}
                      {row.label === "FY2020" && "寒波＋LNG在庫逼迫による冬季大高騰"}
                      {row.label === "FY2021" && "欧州エネルギー危機の余波、国内LNG不足"}
                      {row.label === "FY2022" && "ウクライナ侵攻・資源高・円安の複合影響"}
                      {row.label === "FY2023" && "需給正常化、政府支援策の効果"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ スパイク発生ゼロの年度（FY2010〜FY2012、FY2014〜FY2017、FY2024〜FY2026）は省略。
            FY2026はデータ集計期間中（2026年4月時点）のため参考値。
          </p>
        </section>

        {/* FY2020大高騰の背景 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. FY2020年1月大高騰の背景</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年1月（FY2020）の電力価格急騰は、日本の電力市場史上最大規模のスパイクイベントとして記録されています。
            年間749コマのスパイクのほぼすべてがこの1月に集中し、スポット価格は一時<strong>251円/kWh</strong>（データ上の年度最大値）に達しました。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">需要側の要因</p>
              <ul className="mt-2 space-y-1 text-sm text-red-700">
                <li>・ 10年に一度規模の強い寒波が西日本を直撃</li>
                <li>・ 暖房需要が急増し、全国需要が通常の120〜130%に</li>
                <li>・ コロナ禍でのテレワーク普及が昼間の家庭用電力需要を押し上げ</li>
              </ul>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">供給側の要因</p>
              <ul className="mt-2 space-y-1 text-sm text-amber-700">
                <li>・ 世界的なLNG需要急増による国内在庫の逼迫</li>
                <li>・ 複数の火力発電機が定期点検中で予備力低下</li>
                <li>・ 太陽光は冬季のため出力が低く補完効果が限定的</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            この事態は「2021年1月電力需給逼迫」として経済産業省も緊急対応を求めた社会問題となり、
            市場連動型プランを活用していた新電力各社や電力多消費企業が深刻な経営危機に陥りました。
            以降、LNG長期契約の重要性の再認識、小売電気事業者のリスク管理強化、容量市場の整備加速など、
            日本の電力市場制度に大きな変革をもたらすきっかけとなっています。
          </p>
        </section>

        {/* 法人への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. 法人への影響：市場連動型プランの本質的リスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXスポット価格を反映した<strong>市場連動型（完全市場連動・部分市場連動）の電気料金プラン</strong>を契約している法人は、
            スパイク発生時に電気代が急騰するリスクを直接負います。
            スパイクの多発した月は市場価格調整費がプラスに転じ、請求額が予算を大幅に超過する場合があります。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-800">市場連動型プランのリスク特性</p>
            <div className="mt-2 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300 text-left">
                    <th className="px-3 py-2 font-semibold text-slate-700">項目</th>
                    <th className="px-3 py-2 font-semibold text-slate-700">市場連動型</th>
                    <th className="px-3 py-2 font-semibold text-slate-700">固定価格型</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2 text-slate-700">通常時コスト</td>
                    <td className="px-3 py-2 text-green-700 font-medium">低め（市場安時に安価）</td>
                    <td className="px-3 py-2 text-slate-600">中程度（固定）</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2 text-slate-700">スパイク時コスト</td>
                    <td className="px-3 py-2 text-red-700 font-medium">急騰リスク大</td>
                    <td className="px-3 py-2 text-slate-600">影響なし</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="px-3 py-2 text-slate-700">予算管理難易度</td>
                    <td className="px-3 py-2 text-red-700 font-medium">高（変動幅大）</td>
                    <td className="px-3 py-2 text-slate-600">低（予測しやすい）</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-slate-700">適した事業者</td>
                    <td className="px-3 py-2 text-slate-600">需要制御・蓄電池保有者</td>
                    <td className="px-3 py-2 text-slate-600">リスク回避・安定優先企業</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* スパイク対策 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">7. スパイクリスクへの3つの対策</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">① 固定価格型プランへの切替</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                市場価格変動を遮断する固定単価プランへ変更することで、スパイクリスクを完全に排除できます。
                ただし平常時は市場連動より割高になる場合があります。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">② 蓄電池による自家消費最適化</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                夜間・昼間の安価なコマに充電し、スパイクが多発する17〜19時台に放電することで、
                市場連動型のまま高騰リスクをヘッジする手法です。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">③ デマンドレスポンス（DR）の活用</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                電力系統が逼迫した際に需要を自発的に削減することで、DR報酬を得るとともにスパイク時の自社需要を減らします。
                工場・倉庫・データセンターが主な対象です。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            スパイクへの対応戦略は自社の事業特性（需要の柔軟性・設備投資余力・リスク許容度）によって最適解が異なります。
            まず現在の契約が市場連動型か固定型かを確認し、市場連動型であれば過去のスパイク発生月に自社の使用量がどの程度あったかを検証することが最初のステップです。
          </p>
        </section>

        {/* 今後の展望 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">8. 今後のスパイクリスクの見通し</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再生可能エネルギーの普及が進む一方で、太陽光の出力変動と夕方の急落はダックカーブをさらに深刻化させる可能性があります。
            これはスパイクの<strong>夕方集中をさらに強める方向</strong>に作用します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            他方、蓄電池の大量普及・揚水発電の活用拡大・需給調整市場の整備・容量市場による予備力確保などが進めば、
            スパイクの発生頻度は中期的に低減する可能性もあります。
            ただし気候変動による極端な寒波・猛暑の増加はスパイクリスクを高める要因であり、
            今後もシナリオ別の想定を持った上でプラン選択・設備投資を検討することが重要です。
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>・ 容量市場（2024年度以降）→ 予備力確保によりスパイク抑制期待</li>
            <li>・ 需給調整市場の整備 → 短時間変動対応力の向上</li>
            <li>・ 蓄電池コスト低下 → 夕方スパイク対策の普及加速</li>
            <li>・ 気候変動 → 強い寒波・記録的猛暑の発生リスクは依然継続</li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/jepx-explained",
              title: "JEPXスポット市場とは何か",
              description: "電力の卸売市場であるJEPXの仕組みと法人電気料金への影響を基礎から解説。",
            },
            {
              href: "/jepx-price-volatility",
              title: "JEPXスポット価格の変動要因",
              description: "需給・燃料・再エネ・季節など価格変動を引き起こす主要因を体系的に整理。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動型電気料金プランとは",
              description: "市場連動型プランの料金構造・メリット・リスクを徹底解説。",
            },
            {
              href: "/zero-price-hours-analysis",
              title: "JEPX 0円コマの実態",
              description: "再エネ余剰による0円・超低価格コマの発生メカニズムと法人への意味を分析。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを診断する"
          description="市場連動型プランのスパイクリスクが自社にどう影響するか、シミュレーターで確認しましょう。契約種別・使用量・業種を入力するだけで高騰リスクスコアを算出します。"
          links={[
            { href: "/", label: "リスクシミュレーターで診断する" },
            { href: "/fixed-vs-market-linked-guide", label: "固定型と市場連動型の比較を読む" },
          ]}
        />
      </div>
    </main>
  );
}
