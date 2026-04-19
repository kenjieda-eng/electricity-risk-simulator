import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import DecileSavingCalculator from "../../components/market-data/DecileSavingCalculator";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { DecilePriceBarLineChart } from "../../components/market-data/DecilePriceCharts";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import {
  DECILE_LABELS,
  DECILE_DEMAND,
  DECILE_PRICE,
  DECILE_STD,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["demand-decile-price-risk"];

// --- 定数 ---
const pageTitle = "需要が上位10%に入ると価格は2.6倍｜需要デシル別の価格リスク分析";
const pageDescription =
  "電力需要を10等分（デシル）して分析すると、需要最上位10%（D10）の平均価格20.59円はD1の8.06円の2.6倍。標準偏差も4.6倍に達し、価格リスクは需要水準で指数関数的に増大します。法人のピーク需要管理の重要性を解説。";
const pageUrl = "https://simulator.eic-jp.org/demand-decile-price-risk";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力需要 デシル",
    "JEPX 高需要 価格",
    "電力価格リスク 需要",
    "ピーク需要 電気料金",
    "市場連動 リスク分析",
    "デマンドコントロール 効果",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/market-data", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/market-data"],
  },
};

// --- キー統計 ---
const keyStats = [
  { label: "D10 平均スポット価格", value: "20.59 円", sub: "最上位10%の需要帯" },
  { label: "D1 平均スポット価格", value: "8.06 円", sub: "最下位10%の需要帯（D10比2.6倍安）" },
  { label: "D10 価格標準偏差 σ", value: "22.97 円", sub: "D1の4.6倍のボラティリティ" },
  { label: "D10 需要水準", value: "135,497 MW", sub: "全国最高需要帯（猛暑・寒波日）" },
];

// デシルごとのゾーン色
function decileRowClass(index: number): string {
  if (index >= 9) return "bg-red-50";
  if (index >= 8) return "bg-orange-50";
  if (index >= 5) return "bg-yellow-50/50";
  return index % 2 === 0 ? "bg-white" : "bg-slate-50";
}

function decilebadgeClass(index: number): string {
  if (index >= 9) return "bg-red-100 text-red-700";
  if (index >= 8) return "bg-orange-100 text-orange-700";
  if (index >= 5) return "bg-yellow-100 text-yellow-700";
  return "bg-slate-100 text-slate-600";
}

function decileZoneLabel(index: number): string {
  if (index >= 9) return "危険ゾーン";
  if (index >= 8) return "高リスク";
  if (index >= 5) return "移行ゾーン";
  return "安定ゾーン";
}

export default function DemandDecilePriceRiskPage() {
  return (
    <>
      <ArticleJsonLd
        headline="需要が上位10%に入ると価格は2.6倍｜需要デシル別の価格リスク分析"
        description="電力需要を10等分（デシル）して分析すると、需要最上位10%（D10）の平均価格20.59円はD1の8.06円の2.6倍。標準偏差も4.6倍に達し、価格リスクは需要水準で指数関数的に増大します。法人のピーク需要管理の重要性を解説。"
        url="https://simulator.eic-jp.org/demand-decile-price-risk"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "需要が上位10%に入ると価格は2.6倍" },
        ]}
      faq={FAQ}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">需要デシルと価格リスク</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          需要が上位10%に入ると価格は2.6倍
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">需要デシル別の価格リスク分析</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          全時間帯のデータを需要水準で10等分（デシル）して価格を分析すると、
          需要最上位10%（D10: 平均135,497MW以上）での平均JEPXスポット価格は<strong>20.59円/kWh</strong>と、
          需要最下位10%（D1: 平均73,400MW以下）の8.06円の<strong>2.6倍</strong>に達します。
          さらに価格のばらつき（標準偏差）はD10でσ=22.97と、D1の4.95の<strong>4.6倍</strong>。
          価格リスクは需要水準とともに指数関数的に増大する構造が明確に見えています。
        </p>
      </header>

      {/* キー統計 */}
      <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {keyStats.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
          </div>
        ))}
      </section>

      {/* 結論 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">結論：価格リスクは需要水準で指数関数的に増大する</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電力市場における価格形成は、需要水準によって非線形に変化します。
          D1〜D5（低〜中需要）では価格は8〜10円台で比較的安定していますが、
          D6以降から緩やかに上昇し始め、D9〜D10では急激に価格水準とボラティリティが跳ね上がります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この背景には、火力発電所の起動コスト・最低出力制約があります。
          需要が一定水準を超えると、通常は停止させておく「ピーク対応の高コスト火力」を起動する必要が生じ、
          これが市場の限界費用を押し上げます。また、需給バランスが崩れやすくなるため
          価格変動幅（ボラティリティ）も拡大します。
        </p>
      </section>

      {/* チャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">デシル別の平均価格（青棒）と標準偏差（赤線）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          横軸はD1（低需要）〜D10（高需要）の10デシル。左軸が平均価格（円/kWh）、右軸が価格の標準偏差σ。
          需要が高いデシルほど棒が伸び、赤い折れ線（ボラティリティ）が急上昇するのが見えます。
          破線グレーは需要水準の参考表示です（右側の隠し軸）。
        </p>
        <div className="mt-4">
          <DecilePriceBarLineChart />
        <MarketDataDownload
          filename="demand-decile-price.csv"
          headers={["decile", "price_jpy_kwh", "std"]}
          rows={DECILE_LABELS.map((label, i) => ({
            decile: label,
            price_jpy_kwh: DECILE_PRICE[i],
            std: DECILE_STD[i],
          }))}
          apiPath="/api/market-data"
          caption="需要デシル別の価格と標準偏差"
        />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          出典: JEPXスポット価格・OCCTO需要実績データより集計
        </p>
      </section>

      {/* デシル分析とは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">デシル分析とは：全時間帯を需要水準で10等分</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          デシル（decile）とは、データを10等分したときの各区間のことです。
          本分析では全時間帯を電力需要の低い順に並べ、下位10%をD1、上位10%をD10として
          各区間の平均価格と価格標準偏差を算出しています。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          この手法により「同じ市場連動型プランでも、需要の高い時間帯を多く使う企業ほど高コスト・高リスクになる」
          という構造を定量的に示すことができます。自社がどのデシル帯で電力を主に消費しているかを把握することが
          コスト管理の第一歩です。
        </p>
      </section>

      {/* D1-D5: 安定ゾーン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">D1〜D5：安定ゾーン（8〜10円、低ボラ）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          D1からD5は平均需要73,400〜95,626MWの範囲で、平均価格は8.06〜9.98円/kWh。
          標準偏差も4.95〜6.23円と比較的小さく、価格変動が予測しやすい安定ゾーンです。
          春の閑散期、深夜・早朝の時間帯がこのゾーンに多く含まれます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          市場連動型プランにおいて、需要調整によって電力使用をこのゾーンに集中させられれば
          電気料金の大幅な削減が期待できます。ただし、D1帯は深夜0〜4時が中心であり、
          実際に稼働シフトできる業種は限られます。
        </p>
      </section>

      {/* D6-D8: 移行ゾーン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">D6〜D8：緩やかな上昇ゾーン（10〜13円）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          D6（100,624MW）からD8（111,427MW）は、平均価格10.69〜12.39円、
          標準偏差6.94〜9.82円と、価格・ボラティリティともに緩やかに上昇します。
          日中の平日稼働時間帯（9〜17時）がこのゾーンに多く含まれます。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          多くの法人は最も長い稼働時間がこのD6〜D8帯に集中しています。
          ここで使用量を10%削減するだけでも、年間電気代への影響は無視できない水準になります。
        </p>
      </section>

      {/* D9-D10: 危険ゾーン */}
      <section className="mt-6 rounded-xl border border-red-100 bg-red-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">D9〜D10：危険ゾーン（14〜21円、ボラ爆発）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          D9（119,848MW以上）から価格水準が14.04円に急上昇し、D10（135,497MW以上）では20.59円に達します。
          標準偏差はD9で12.52円、D10で22.97円と、価格の振れ幅が平均値に匹敵するほど大きくなります。
          これは「高需要時に価格スパイク（50円・80円超）が集中する」ことを意味します。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          D10の平均20.59円という数字は、スパイク価格（50〜100円超）の影響で押し上げられている面があり、
          「いつも20円」ではなく「ほとんどの時間は14〜16円だが、ときどき50〜100円超になる」という
          分布をしています。市場連動型プランでD10帯に多くの消費が集中している企業は、
          スパイク時の請求額が突出して高くなるリスクがあります。
        </p>
      </section>

      {/* 全デシルテーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">全10デシルの需要水準・平均価格・標準偏差</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">デシル</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均価格（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">標準偏差 σ</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">ゾーン</th>
              </tr>
            </thead>
            <tbody>
              {DECILE_LABELS.map((label, i) => (
                <tr key={label} className={decileRowClass(i)}>
                  <td className="border border-slate-200 px-3 py-2 font-bold text-slate-800">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-600">
                    {DECILE_DEMAND[i].toLocaleString()}
                  </td>
                  <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${i >= 9 ? "text-red-700" : i >= 8 ? "text-orange-700" : i >= 5 ? "text-yellow-700" : "text-slate-700"}`}>
                    {DECILE_PRICE[i].toFixed(2)}
                  </td>
                  <td className={`border border-slate-200 px-3 py-2 text-right ${i >= 9 ? "font-bold text-red-700" : i >= 8 ? "text-orange-600" : "text-slate-600"}`}>
                    {DECILE_STD[i].toFixed(2)}
                  </td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${decilebadgeClass(i)}`}>
                      {decileZoneLabel(i)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* D10の中身 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">D10の中身：猛暑日と寒波日が集中</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          D10（135,497MW超）の需要は、主に<Link href="/winter-vs-summer-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">厳冬期（寒波）</Link>と
          猛暑日の二つのシーズンに集中しています。
          特に冬の寒波時は電力需要が高く、かつ太陽光発電の出力が低下し、
          LNG・石炭の燃料調達コストが高騰しやすいため、価格スパイクが頻発します。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          2021年1月の寒波時には最大価格251円/kWhという記録的スパイクが発生しています。
          これらの極端な価格がD10の標準偏差σ=22.97を押し上げている主因です。
          D10は「多くの時間帯は15〜18円だが、ごくまれに50〜200円超になる」分布と理解するのが正確です。
        </p>
      </section>

      {/* 法人への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人への影響：デマンドが高い時間帯に集中する企業ほどリスク大</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">高リスク企業プロフィール</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              夏・冬の電力ピーク時間帯（猛暑日の14〜16時、寒波日の8〜10時）に稼働が集中する企業は
              D10帯での消費比率が高くなります。食品・化学・自動車などの大型製造業、
              商業施設（夏の冷房がピーク）、病院・ホテルなどが該当します。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">低リスク企業プロフィール</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              深夜・早朝に主な電力消費が集中する業種（夜間製造、データセンターの夜間バッチ処理など）や、
              春・秋の閑散期に生産が集中するビジネスは、D1〜D4帯での消費が多くなり
              市場連動型プランのリスクが低い傾向があります。
            </p>
          </div>
        </div>
      </section>

      {/* 対策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">対策：ピークシフト・デマンドコントロール・プラン選択</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">1</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">ピークシフト：D10時間帯の使用量を削減</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                猛暑日・寒波日のピーク時間帯（D10帯）に設備を止める、
                あるいは前後の時間帯にシフトするだけで、単価の高い時間帯の消費を大幅に削減できます。
                生産計画・空調スケジュールの柔軟化が鍵です。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">2</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">デマンドコントロール：契約電力の管理</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                高圧・特別高圧契約では「デマンド値（30分最大電力）」が契約電力・基本料金に直結します。
                ピーク需要を抑えることは、市場価格リスクの回避だけでなく
                基本料金削減にも直接つながります。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">3</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">市場連動型を避けるべき企業の特徴</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                ①夏・冬のピーク時間帯に生産・営業が集中する、②需要変動が大きく調整が難しい、
                ③電気料金の予算管理が厳格でコスト変動に耐えにくい、という3条件が揃う企業は
                市場連動型プランよりも固定単価型を選ぶ方がリスク管理上有利です。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">4</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">蓄電池によるピーク対応</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                D1〜D5帯（低価格時間帯）に充電し、D9〜D10帯（高価格時間帯）に放電することで
                高コスト電力の購入量を減らせます。蓄電池はデマンド対策としても機能し、
                投資対効果が高まります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：「いつ電力を使うか」が「いくら払うか」を決める時代</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          需要デシル分析が示すのは、電力市場での価格リスクが「使用量」だけでなく
          「使用する需要水準（タイミング）」によって大きく変わるという事実です。
          同じ100kWhを消費するなら、D1帯（平均8円）ではなくD10帯（平均21円）に使えば
          コストは2.6倍になります。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          従来の電気料金管理は「総使用量×単価」の削減が中心でしたが、
          市場連動型プランが普及した現代では「どのデシル帯で使うか」という視点が不可欠になっています。
          自社の消費パターンを把握し、高需要帯への集中を避ける戦略的な電力管理が
          競争力の差を生む時代になっています。
        </p>
      </section>

      {/* 関連リンク */}
      
      <DecileSavingCalculator />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />
      <MarketDataFaq items={FAQ} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/winter-vs-summer-electricity",
              title: "冬と夏の電気料金リスクの違い",
              description: "D10帯を構成する寒波と猛暑、それぞれの電力需要・価格パターンの比較。",
            },
            {
              href: "/renewable-share-price-correlation",
              title: "再エネ比率と価格の逆相関",
              description: "需要水準と並ぶ価格決定要因「再エネ供給比率」の実証データ。",
            },
            {
              href: "/duck-curve-electricity-price-impact",
              title: "ダックカーブとは何か",
              description: "時間帯別ネット需要の変動が生み出す昼安・夕高の価格構造。",
            },
            {
              href: "/zero-price-hours-analysis",
              title: "ゼロ円・マイナス価格の実態",
              description: "低需要×高再エネ供給が引き起こす異常値コマの分析。",
            },
            {
              href: "/area-price-spread",
              title: "エリア間の価格差",
              description: "同じ需要水準でもエリアにより異なる価格水準の実態。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動型プランに向かない企業",
              description: "デシルD9〜D10に消費が集中する企業が固定型を選ぶべき理由。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電力需要パターンとリスクを診断する"
          description="市場連動型プランの価格リスクは、自社の需要タイミングに大きく依存します。シミュレーターで契約プランと需要パターンに合わせたリスクを確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "電力市場の解説記事一覧" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
