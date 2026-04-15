import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { HotDaysBarChart, TropicalNightsLineChart } from "../../components/market-data/ExtremeHeatCharts";
import {
  HEAT_YEARS,
  HOT_DAYS_TOKYO,
  HOT_DAYS_OSAKA,
  HOT_DAYS_NAGOYA,
  TROPICAL_NIGHTS_TOKYO,
  TROPICAL_NIGHTS_OSAKA,
  PEAK_DATES,
  PEAK_VALUES,
} from "../../data/marketData";

const pageTitle = "猛暑日・熱帯夜と電力リスク｜1995年からの極端気象日数の推移";
const pageDescription =
  "東京の猛暑日は1995年13日から2025年29日へ2.2倍に急増。大阪の熱帯夜は81日（2025年）と記録更新が続く。極端気象の増加がJEPXスポット価格・電力需要に与える影響と法人の対策を実データで解説します。";
const pageUrl = "https://simulator.eic-jp.org/extreme-heat-electricity-risk";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "猛暑日 電力需要",
    "熱帯夜 電気料金",
    "極端気象 JEPX",
    "夏 電力価格 高騰",
    "猛暑 法人電気料金",
    "デマンドコントロール 猛暑",
    "名古屋 猛暑日 最多",
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

const keyStats = [
  { label: "東京 猛暑日（2025年）", value: "29日", sub: "1995年13日の2.2倍" },
  { label: "大阪 熱帯夜（2025年）", value: "81日", sub: "1995年42日の1.9倍" },
  { label: "名古屋 猛暑日（2025年）", value: "52日", sub: "全国主要都市ワースト" },
  { label: "ピーク需要Top10", value: "全て8月", sub: "2018〜2022年に集中" },
];

// 猛暑日数の5年平均を計算
const hotDaysPeriods = [
  { period: "1995–1999", indices: [0,1,2,3,4] },
  { period: "2000–2004", indices: [5,6,7,8,9] },
  { period: "2005–2009", indices: [10,11,12,13,14] },
  { period: "2010–2014", indices: [15,16,17,18,19] },
  { period: "2015–2019", indices: [20,21,22,23,24] },
  { period: "2020–2025", indices: [25,26,27,28,29,30] },
].map((row) => {
  const tokyoVals = row.indices.map((i) => HOT_DAYS_TOKYO[i]);
  const osakaVals = row.indices.map((i) => HOT_DAYS_OSAKA[i]);
  const nagoyaVals = row.indices.map((i) => HOT_DAYS_NAGOYA[i]);
  const avg = (arr: number[]) => Math.round(arr.reduce((a, b) => a + b, 0) / arr.length * 10) / 10;
  return {
    period: row.period,
    tokyo: avg(tokyoVals),
    osaka: avg(osakaVals),
    nagoya: avg(nagoyaVals),
  };
});

export default function ExtremeHeatElectricityRiskPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">猛暑日・熱帯夜と電力リスク</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          猛暑日・熱帯夜と電力リスク
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">1995年からの極端気象日数の推移</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最高気温35℃以上の「猛暑日」と最低気温25℃以上の「熱帯夜」は、エアコン冷房の需要を
          爆発的に増加させる気象現象です。1995年から2025年の30年間で、東京の猛暑日は13日から29日へ2.2倍、
          大阪の熱帯夜は42日から81日へ1.9倍に増加しました。名古屋は2025年に52日の猛暑日を記録し
          主要都市ワーストを更新。この極端気象の増加がJEPXスポット価格の高騰リスクを構造的に高めています。
        </p>
      </header>

      {/* キーナンバー */}
      <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {keyStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
          </div>
        ))}
      </section>

      {/* 定義 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">猛暑日・熱帯夜の定義と電力への意味</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <h3 className="text-base font-semibold text-red-900">猛暑日（もうしょび）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              <span className="font-semibold">定義:</span> 日最高気温が35℃以上の日<br />
              <span className="font-semibold">電力への影響:</span> 冷房需要が最大化し、昼〜夕方の電力需要がピークを形成。
              JEPXスポット市場では午後の価格が急騰しやすく、供給予備力が低下すると
              需給逼迫警報の発令につながることがあります。
            </p>
          </div>
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
            <h3 className="text-base font-semibold text-orange-900">熱帯夜（ねったいや）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              <span className="font-semibold">定義:</span> 日最低気温が25℃以上の夜<br />
              <span className="font-semibold">電力への影響:</span> 夜間の冷房需要が高止まりし、深夜〜早朝の電力消費が増加。
              従来は夜間に需要が下がり価格も低下していたが、熱帯夜の増加により夜間電力の
              需給バランスも逼迫するリスクが高まっています。
            </p>
          </div>
        </div>
      </section>

      {/* チャート1: 猛暑日数 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">猛暑日（35℃超）日数の推移（1995〜2025年）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          東京・大阪・名古屋の猛暑日数を年次棒グラフで比較。2010年代から増加傾向が明確になり、
          2025年には名古屋52日、大阪45日、東京29日を記録しています。
        </p>
        <div className="mt-4">
          <HotDaysBarChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 気象庁 各観測地点の日別気温データを年次集計（1995〜2025年）
        </p>
      </section>

      {/* チャート2: 熱帯夜 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">熱帯夜（25℃超）日数の推移（1995〜2025年）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          東京・大阪の熱帯夜日数を折れ線グラフで表示。大阪は2025年に81日と過去最多を記録し、
          夏の3ヶ月間のほぼ全夜が熱帯夜となっています。
        </p>
        <div className="mt-4">
          <TropicalNightsLineChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 気象庁 各観測地点の日別最低気温データを年次集計（1995〜2025年）
        </p>
      </section>

      {/* 30年トレンド（明確な増加） */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">30年トレンド：明確な増加傾向</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          5年ごとの猛暑日数平均を見ると、増加傾向が明確に確認できます。
          特に2010年代以降は加速しており、2020年代の平均は1990年代後半に比べて
          東京・大阪・名古屋ともに2倍以上の水準に達しています。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">期間</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">東京（日/年）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-amber-700">大阪（日/年）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-orange-700">名古屋（日/年）</th>
              </tr>
            </thead>
            <tbody>
              {hotDaysPeriods.map((row, i) => (
                <tr key={row.period} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium">{row.period}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-red-700 font-semibold">{row.tokyo}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-amber-700 font-semibold">{row.osaka}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-orange-700 font-semibold">{row.nagoya}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">猛暑日（最高気温35℃以上）の年間日数5年平均値</p>
      </section>

      {/* 都市間比較 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">都市間比較：名古屋が猛暑日最多、大阪が熱帯夜最多</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-orange-100 bg-orange-50 p-4">
            <h3 className="text-base font-semibold text-orange-900">名古屋：猛暑日の多さ</h3>
            <p className="text-2xl font-bold text-orange-700 mt-1">52日（2025年）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              内陸盆地地形により、熱がこもりやすく最高気温が上がりやすい。
              主要都市の中で猛暑日数が最多で、製造業が集積する中部地区の
              工場・倉庫は電力需要管理が特に重要です。
            </p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
            <h3 className="text-base font-semibold text-amber-900">大阪：熱帯夜の多さ</h3>
            <p className="text-2xl font-bold text-amber-700 mt-1">81日（2025年）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              海洋性気候の影響で夜間も気温が下がりにくく、熱帯夜が全国最多水準。
              飲食・ホテル・商業施設など夜間も稼働する業種は冷房電力の増加が
              電気料金を押し上げます。
            </p>
          </div>
          <div className="rounded-xl border border-red-100 bg-red-50 p-4">
            <h3 className="text-base font-semibold text-red-900">東京：増加率で2.2倍</h3>
            <p className="text-2xl font-bold text-red-700 mt-1">29日（2025年）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              1995年の13日から2025年の29日へ2.2倍の増加。東京エリアは全国最大の電力消費地域であり、
              猛暑日における需要増がJEPX東京エリア価格に直接影響します。
            </p>
          </div>
        </div>
      </section>

      {/* 電力需要への影響 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電力需要への影響：冷房需要の構造的増加</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          猛暑日・熱帯夜の増加は、単なる「暑い日が増えた」ではなく、電力システムに対して
          構造的な負荷増加をもたらしています。
        </p>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">1</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">冷房需要の長期化</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                かつて7〜8月が中心だった冷房シーズンが、6月下旬から9月中旬まで拡大。
                エアコンの稼働時間が年々延長しており、年間電力消費に占める冷房比率が増加しています。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">2</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">ピーク需要の集中化</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                猛暑日の昼間（13〜16時）に需要が極端に集中するため、ピーク時の供給余力が
                極度に低下します。{PEAK_DATES[0].slice(0, 4)}年など、猛暑年の需要ピーク日には
                全国需要が16万MW超に達しました。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">3</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">夜間需要の底上げ</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                熱帯夜の増加により、深夜0〜5時の需要も高止まりするようになりました。
                従来は「夜間の安い時間帯」として活用されてきた深夜電力の価格優位性が
                徐々に縮小しつつあります。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">4</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">設備能力の限界への接近</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                空調設備は「設計最大需要」を基準に設計されていますが、猛暑日の増加により
                その設計水準を上回るケースが増えています。設備の更新・増強コストが発生し、
                ビル管理コストの上昇要因になっています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JEPX価格への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX価格への影響：猛暑日→需要増→価格上昇</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          JEPXスポット市場では、電力需要と価格の間に強い相関があります。
          猛暑日は需要急増を引き起こし、供給余力が低下するにつれて価格が指数関数的に上昇します。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">猛暑日のデータ（平均）</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li>平均需要: <span className="font-semibold text-red-700">112,228 MW</span>（通常比+25%）</li>
              <li>平均JEPX価格: <span className="font-semibold text-red-700">12.61 円/kWh</span></li>
              <li>通常日比の価格倍率: <span className="font-semibold text-red-700">+31%</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">価格高騰のメカニズム</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              需要が増加すると、電力会社は限界費用の高い発電機（LNG火力など）を追加稼働させます。
              この「限界費用」が市場価格を決定するため、需要が高いほど価格は高くなります。
              需要が供給能力の90%を超えると価格が急騰する傾向があります。
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-800">注意: 市場連動型プランの法人への影響</p>
          <p className="mt-1 text-sm leading-7 text-red-700">
            <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動型（JEPX連動）プラン</Link>
            の法人は、猛暑日の電気代が通常日の1.3倍以上になる可能性があります。
            猛暑年が続く中で、市場連動型を選択している場合は特に夏季の電気料金予算管理が重要です。
          </p>
        </div>
      </section>

      {/* ピーク需要日との関連 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ピーク需要日Top10：全て8月に集中</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          過去の電力需要ピーク日トップ10はすべて8月に集中しており、しかも2018〜2022年の
          猛暑年に集中しています。猛暑日の増加と電力需要ピークの高止まりが連動していることが分かります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">順位</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">日付</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">ピーク需要（MW）</th>
              </tr>
            </thead>
            <tbody>
              {PEAK_DATES.map((date, i) => (
                <tr key={date} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-500">{i + 1}位</td>
                  <td className={`border border-slate-200 px-3 py-2 font-semibold ${i === 0 ? "text-red-700" : "text-slate-700"}`}>{date}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-600">
                    {PEAK_VALUES[i].toLocaleString()} MW
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: 各一般送配電事業者公表の30分値データ集計（9エリア合計の最大需要日）
        </p>
      </section>

      {/* 法人の対策 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人の対策：デマンドコントロール・蓄電池・空調効率化</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">デマンドコントロール</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              猛暑日のピーク時間帯（13〜16時）に電力使用量を制御し、
              デマンド値（最大需要電力）の超過を防ぎます。
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロールシステム</Link>
              の導入で基本料金の上昇を抑制できます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">蓄電池の活用</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              深夜や太陽光が豊富な昼前に充電し、猛暑日の価格高騰時間帯（14〜18時）に放電する
              アービトラージ戦略が有効です。市場連動型プランとの組み合わせで
              <Link href="/battery-electricity-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金削減効果</Link>
              が期待できます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">空調効率化・断熱改修</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              高効率空調（COP値の高い機種）への更新、窓の遮熱フィルム・日よけの設置、
              屋上・外壁の断熱強化により冷房負荷を低減します。
              初期投資はかかりますが、猛暑年が続くほど投資回収期間が短くなります。
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4">
          <h3 className="text-base font-semibold text-sky-900">電力調達プランの見直し</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            猛暑リスクが高い業種（24時間稼働の工場・物流・医療機関など）では、
            夏季の市場連動リスクを固定価格型プランで回避することも検討に値します。
            <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定単価プラン</Link>は
            市場連動型より単価が高い傾向がありますが、極端猛暑年には逆転する可能性があります。
          </p>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          猛暑日・熱帯夜の増加は30年間の明確なトレンドであり、今後も継続・加速する可能性が高い現象です。
          東京の猛暑日は30年で2.2倍、大阪の熱帯夜は1.9倍に増加し、
          名古屋の2025年猛暑日52日は電力需要に深刻な影響を与えています。
          法人の電気料金戦略においては、猛暑日のピーク需要管理と
          JEPX価格高騰リスクへの備えが、今後ますます重要になります。
          デマンドコントロール、蓄電池、空調効率化、プラン選択の4つの対策を
          総合的に検討することをお勧めします。
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/warming-trend-30-years", title: "温暖化30年と電力需要", description: "1995年からの気温上昇トレンドと電気料金への中長期影響。" },
            { href: "/winter-vs-summer-electricity", title: "冬と夏、どちらが電気料金リスクか", description: "季節別データで検証する電力コストリスク。" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "猛暑ピーク時のデマンド抑制で電気代を下げる方法。" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "夏の高値時間帯を避けるための蓄電池活用法。" },
            { href: "/jepx-spot-price-dashboard", title: "JEPXスポット価格の全体像", description: "猛暑年のJEPX価格がどう動いたかを詳解。" },
            { href: "/electricity-demand-pattern", title: "電力需要の時間帯・季節パターン", description: "需要パターンの詳細データと法人への影響。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="猛暑リスクを踏まえた電気料金診断"
          description="猛暑日の増加が自社の電気料金にどう影響するか、シミュレーターで確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "電力市場の解説記事一覧" },
          ]}
        />
      </div>
    </main>
  );
}
