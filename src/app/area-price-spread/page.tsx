import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { AreaSpreadGroupedChart, AreaFyPriceLineChart } from "../../components/market-data/AreaSpreadCharts";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import {
  SPREAD_MONTHS,
  SPREAD_TK_KYUSHU,
  SPREAD_TK_HOKKAIDO,
  SPREAD_TK_KANSAI,
  JEPX_FY_LABELS,
  AREA_FY_PRICE,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["area-price-spread"];

// --- 定数 ---
const pageTitle = "エリア間価格スプレッドの読み方｜東京プレミアムと地域格差";
const pageDescription =
  "JEPXエリアプライスの地域格差を徹底分析。東京-九州スプレッド最大4.19円（4月）、FY2026東京21.14円vs九州11.28円の乖離原因を解説。連系線混雑・需要集中・再エネ構成の違いが生む法人電気料金への影響。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPXエリアプライス", "電力 地域格差", "東京プレミアム 電力", "九州電力 安価",
    "連系線混雑 電気料金", "エリア間価格差 法人", "スプレッド 電力市場", "電力 地域別コスト",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/area-price-spread",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/area-price-spread",
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
const MONTH_NAMES = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

// --- Page Component ---
export default function AreaPriceSpreadPage() {
  const maxSpreadKyushu = Math.max(...SPREAD_TK_KYUSHU);
  const maxSpreadMonthIdx = SPREAD_TK_KYUSHU.indexOf(maxSpreadKyushu);

  return (
    <>
      <ArticleJsonLd
        headline="エリア間価格スプレッドの読み方｜東京プレミアムと地域格差"
        description="JEPXエリアプライスの地域格差を徹底分析。東京-九州スプレッド最大4.19円（4月）、FY2026東京21.14円vs九州11.28円の乖離原因を解説。連系線混雑・需要集中・再エネ構成の違いが生む法人電気料金への影響。"
        url="https://simulator.eic-jp.org/area-price-spread"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "エリア間価格スプレッドの読み方" },
        ]}
      faq={FAQ}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/market-data" className="underline-offset-2 hover:underline">データで見る電力市場</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">エリア間価格スプレッド</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          エリア間価格スプレッドの読み方
        </h1>
        <p className="mt-1 text-lg font-semibold text-slate-700">東京プレミアムと地域格差</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPXスポット市場には全国9エリアそれぞれの「エリアプライス」が存在し、地域によって電力価格が大きく異なります。
          東京エリアは全国最高水準で推移することが多く、九州エリアは再エネの豊富さを背景に全国最安水準を保つことが多いです。
          この「東京プレミアム」と地域格差は、連系線（エリア間送電線）の容量制約、需要集中、電源構成の違いから生まれます。
          複数拠点を持つ法人や電力調達の最適化を検討している企業にとって、エリア間スプレッドの理解は不可欠です。
        </p>
      </header>

      {/* サマリー統計 */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">エリア格差の主要データ</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">東京-九州スプレッド（最大）</p>
            <p className="mt-1 text-3xl font-bold text-red-600">{maxSpreadKyushu.toFixed(2)}円</p>
            <p className="mt-1 text-sm text-slate-600">{MONTH_NAMES[maxSpreadMonthIdx]}（月平均）</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">東京 FY2026 年度平均</p>
            <p className="mt-1 text-3xl font-bold text-red-600">21.14円</p>
            <p className="mt-1 text-sm text-slate-600">全国最高水準</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">九州 FY2026 年度平均</p>
            <p className="mt-1 text-3xl font-bold text-emerald-600">11.28円</p>
            <p className="mt-1 text-sm text-slate-600">全国最安水準</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">FY2026 東京-九州格差</p>
            <p className="mt-1 text-3xl font-bold text-amber-600">9.86円</p>
            <p className="mt-1 text-sm text-slate-600">同年度の年間格差</p>
          </div>
        </div>
      </section>

      {/* 本文セクション群 */}
      <section className="mt-6 space-y-4">

        {/* エリアプライスとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. エリアプライスとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXスポット市場では、エリア間を繋ぐ連系線（地域間送電線）の容量制約により、
            一定以上の電力を隣接エリアへ融通できない場合があります。
            この「連系線混雑」が発生すると、需要超過のエリアは高い価格で入札しなければならず、
            供給余剰のエリアは安値でも売れずに価格が低下します。
            このエリアごとに分離した価格が<strong>「エリアプライス（ノーダル価格）」</strong>です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            連系線に余裕がある（混雑していない）時間帯は、エリアプライスは全国一律の「システムプライス」に収束します。
            しかし混雑が生じると、高需要エリア（東京など）ではシステムプライスより高いエリアプライスが形成され、
            低需要・高供給エリア（九州など）ではシステムプライスより低いエリアプライスになります。
          </p>
          <div className="mt-4 rounded-lg border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">「スプレッド」とは</p>
            <p className="mt-1 text-sm leading-7 text-amber-700">
              本ページで使う「スプレッド」は東京エリアプライスと他エリアプライスの差額（円/kWh）を指します。
              スプレッドがゼロの時間帯は連系線に余裕があり、プラスの時は東京が高く（東京プレミアム）、
              マイナスの時は東京が安いことを意味します。
            </p>
          </div>
        </section>

        {/* 月別スプレッドグラフ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. 月別エリア間スプレッドの比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下のグラフは、東京エリアと九州・北海道・関西の月別平均スプレッドを比較したものです。
            <strong>東京-九州スプレッドが最大で4.19円（4月）</strong>と突出しており、春季に最大乖離が生じることがわかります。
          </p>
          <div className="mt-4">
            <AreaSpreadGroupedChart />
        <MarketDataDownload
          filename="area-spread-monthly.csv"
          headers={["month", "tk_kyushu", "tk_hokkaido", "tk_kansai"]}
          rows={SPREAD_MONTHS.map((month, i) => ({
            month,
            tk_kyushu: SPREAD_TK_KYUSHU[i],
            tk_hokkaido: SPREAD_TK_HOKKAIDO[i],
            tk_kansai: SPREAD_TK_KANSAI[i],
          }))}
          apiPath="/api/market-data"
          caption="東京エリア基準の月別スプレッド"
        />
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-700">月</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">東京-九州</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">東京-北海道</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">東京-関西</th>
                </tr>
              </thead>
              <tbody>
                {SPREAD_MONTHS.map((m, i) => (
                  <tr key={m} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-3 py-2 text-slate-800">{MONTH_NAMES[i]}</td>
                    <td className={`px-3 py-2 text-right font-medium ${SPREAD_TK_KYUSHU[i] >= 3.5 ? "text-red-600" : SPREAD_TK_KYUSHU[i] >= 2 ? "text-amber-600" : "text-slate-700"}`}>
                      +{SPREAD_TK_KYUSHU[i].toFixed(2)} 円
                    </td>
                    <td className={`px-3 py-2 text-right font-medium ${SPREAD_TK_HOKKAIDO[i] < 0 ? "text-blue-600" : "text-slate-700"}`}>
                      {SPREAD_TK_HOKKAIDO[i] >= 0 ? "+" : ""}{SPREAD_TK_HOKKAIDO[i].toFixed(2)} 円
                    </td>
                    <td className={`px-3 py-2 text-right font-medium ${SPREAD_TK_KANSAI[i] >= 3 ? "text-red-600" : SPREAD_TK_KANSAI[i] >= 1.5 ? "text-amber-600" : "text-slate-700"}`}>
                      +{SPREAD_TK_KANSAI[i].toFixed(2)} 円
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ プラス値は東京が高価格、マイナス値は東京が低価格であることを示す。月次平均値。
          </p>
        </section>

        {/* 東京が高い理由 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. なぜ東京エリアは価格が高いのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            東京エリアは全国最大の電力需要エリアであり、常に高水準の電力調達を求められます。
            以下の構造的要因が重なり、「東京プレミアム」が形成されています。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">需要側の要因</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 首都圏への人口・企業集中による高密度需要</li>
                <li>・ オフィス・商業施設・データセンターなど電力多消費施設が集積</li>
                <li>・ 夏季のヒートアイランド現象による冷房需要の増大</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">供給側の要因</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 国土が狭い関東圏に大型電源を新設しにくい</li>
                <li>・ 連系線（北本・東西）の容量制約で他エリアから融通に限界</li>
                <li>・ 柏崎刈羽原発の長期停止で大電源が欠落した状態が続く</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            特に冬季の需給逼迫時や夏季猛暑時には、他エリアから融通したくても連系線の容量上限に達してしまい、
            東京エリア内で高値の入札を積み上げることで需要を満たすしかない構造です。
            これがスパイク時の東京エリアプライスの異常な高騰（FY2026年度平均で21.14円/kWh）につながっています。
          </p>
        </section>

        {/* 九州が安い理由 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. なぜ九州エリアは価格が安いのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            九州エリアのエリアプライスは全国最安水準で推移することが多く、FY2026の年度平均は11.28円/kWhと東京の約53%の水準です。
            この「九州ディスカウント」には構造的な理由があります。
          </p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">再エネの豊富さ</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 全国最大規模の太陽光発電設備（特に宮崎・鹿児島）</li>
                <li>・ 地熱・風力・水力など多様な再エネ電源が揃う</li>
                <li>・ 春・秋の昼間は再エネ余剰が恒常化し出力制御も発生</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">原子力の稼働</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 玄海原発・川内原発が相次いで再稼働</li>
                <li>・ ランニングコストが極めて低い大電源が安定稼働</li>
                <li>・ 「限界費用ゼロ電源」の積み重ねが価格を押し下げ</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            九州から東日本への余剰電力融通は連系線（中国・四国経由）に制約があり、
            九州内の余剰電力が完全には解消されないため、エリアプライスが低く張り付く傾向があります。
            逆にいうと、九州内の大口需要家は構造的に安い電力を享受できる地理的優位性があります。
          </p>
        </section>

        {/* 年度別エリア価格推移 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. 年度別エリア価格の長期推移（17年間）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下のグラフは、システムプライス・東京・九州・関西の年度平均エリアプライスを17年分（FY2010〜FY2026）で比較したものです。
            全エリアが連動して変動しながらも、東京と九州の価格差は年々拡大する傾向が読み取れます。
          </p>
          <div className="mt-4">
            <AreaFyPriceLineChart />
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-700">年度</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">システム</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">東京</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">九州</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">関西</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-700">東京-九州差</th>
                </tr>
              </thead>
              <tbody>
                {JEPX_FY_LABELS.map((label, i) => {
                  const tkKyushuDiff = (AREA_FY_PRICE.tokyo[i] - AREA_FY_PRICE.kyushu[i]);
                  return (
                    <tr key={label} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-3 py-2 font-medium text-slate-800">{label}</td>
                      <td className="px-3 py-2 text-right text-slate-600">{AREA_FY_PRICE.system[i].toFixed(2)}</td>
                      <td className={`px-3 py-2 text-right font-medium ${AREA_FY_PRICE.tokyo[i] >= 20 ? "text-red-600" : "text-slate-700"}`}>
                        {AREA_FY_PRICE.tokyo[i].toFixed(2)}
                      </td>
                      <td className={`px-3 py-2 text-right font-medium ${AREA_FY_PRICE.kyushu[i] <= 10 ? "text-emerald-600" : "text-slate-700"}`}>
                        {AREA_FY_PRICE.kyushu[i].toFixed(2)}
                      </td>
                      <td className="px-3 py-2 text-right text-slate-600">{AREA_FY_PRICE.kansai[i].toFixed(2)}</td>
                      <td className={`px-3 py-2 text-right font-semibold ${tkKyushuDiff >= 8 ? "text-red-600" : tkKyushuDiff >= 4 ? "text-amber-600" : "text-slate-700"}`}>
                        +{tkKyushuDiff.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 単位はすべて円/kWh。FY2026はデータ集計期間内（2026年4月時点）の暫定値。
          </p>
        </section>

        {/* 春の最大乖離 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. 春（4月）が最大乖離になる理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            東京-九州スプレッドは<strong>4月が年間最大（4.19円）</strong>となっています。
            この現象は以下のメカニズムで説明できます。
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>
              <strong>九州（安い方向に作用）:</strong>
              4月は冷暖房需要が最小で全国需要が年間最低水準。九州では太陽光の出力が高く、原子力も稼働中のため供給が需要を大幅に超過。
              余剰電力が積み上がり、エリアプライスが極めて低く抑えられる。出力制御が多発するのもこの時期。
            </li>
            <li>
              <strong>東京（高い方向に作用）:</strong>
              春需要が低いにもかかわらず、東京都市圏では産業・業務需要が底堅く、大型電源の定期点検が集中する春に予備力が低下することがある。
              九州の余剰電力を融通したくても連系線容量が限界となる。
            </li>
            <li>
              <strong>スプレッドの拡大:</strong>
              九州の安値と東京の割高が同時進行することで、スプレッドが年間最大化する。
            </li>
          </ul>
        </section>

        {/* FY2022の異常スプレッド */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">7. FY2022の異常スプレッド</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FY2022は電力価格が全体的に高騰した年度でしたが、エリアプライスの格差も顕著でした。
            東京の年度平均は23.50円/kWhと突出して高く、九州は14.42円と全国最安水準を維持。
            その差は<strong>9.08円/kWh</strong>と過去最大規模の東京プレミアムが生じました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ウクライナ侵攻・LNG価格急騰・円安が重なり、全エリアで電力価格が上昇する中でも、
            東京は連系線制約と柏崎刈羽原発の長期停止という構造問題を抱えていたため、
            他エリア以上に価格が高騰しました。
            一方、九州は原子力の稼働と太陽光の豊富さで東京ほど価格が上がらず、
            格差が最大化するという事態になりました。
          </p>
          <div className="mt-4 rounded-lg border border-red-100 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-800">法人への教訓</p>
            <p className="mt-1 text-sm leading-7 text-red-700">
              FY2022のような複合危機時に「どのエリアに事業所があるか」が電気代に大きな差をもたらします。
              東京圏の電力多消費事業者は、九州・関西拠点と比較して約1.5〜2倍の電力コストを強いられた局面がありました。
            </p>
          </div>
        </section>

        {/* 法人への影響 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">8. 法人への影響：エリアプレミアムの理解と対応</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">エリアプレミアムとは何か</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型の電気料金プランでは、小売電気事業者がJEPXで調達した電力コストをもとに料金が計算されます。
            東京エリアで調達すれば東京エリアプライスが基準となるため、同じプランでも<strong>東京にある事業所と九州にある事業所では調達コストが数円/kWh異なる</strong>ことになります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            固定価格型の場合でも、小売電気事業者がヘッジコストを転嫁するため、エリアプレミアムが単価に織り込まれています。
            結果として東京エリアの料金単価は構造的に割高になりがちです。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">複数拠点企業の最適化戦略</h3>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">全国一括調達の落とし穴</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                全拠点を同一プランで一括調達する場合、東京の高コストが全体コストを押し上げます。
                エリアごとの料金水準を把握し、特に価格差が大きいエリア組み合わせがあれば個別最適化を検討する価値があります。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-sky-700">エリア別プラン選択の考え方</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                九州・関西など相対的に安価なエリアでは市場連動型の恩恵が大きく、
                東京エリアではリスクプレミアムが高いため固定型でコスト確定を優先する、
                といったエリア別の使い分けが有効な場合があります。
              </p>
            </div>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力コストのエリア差 具体的影響試算</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            年間電力使用量1,000,000kWhの事業所が東京と九州にそれぞれあるケースを想定します。
            FY2026の年度平均価格差（東京21.14円、九州11.28円）をもとに計算すると：
          </p>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-7 text-slate-700">
              東京拠点の年間電力調達コスト目安: <strong className="text-red-600">約21,140,000円</strong><br />
              九州拠点の年間電力調達コスト目安: <strong className="text-emerald-600">約11,280,000円</strong><br />
              同規模・同使用量でも <strong className="text-slate-900">年間約9,860,000円（約46%）の差</strong> が生じる計算です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ あくまで市場価格ベースの試算。実際の請求額は基本料金・送配電費用・その他調整費等を含むため異なります。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">9. まとめ：エリア格差を踏まえた電力コスト戦略</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>・ 東京エリアは需要集中・連系線制約・大電源不足という構造的要因から「東京プレミアム」が形成されている。</li>
            <li>・ 九州エリアは再エネ豊富・原子力稼働で全国最安水準を維持。東京との差はFY2026で年度平均9.86円/kWh。</li>
            <li>・ スプレッドは春（4月）が最大となり、九州の再エネ余剰と東京の構造的制約が同時に最大化する季節。</li>
            <li>・ FY2022のような複合危機時には東京プレミアムが最大9円超に達し、エリアの違いが経営コストに直結した。</li>
            <li>・ 複数拠点企業はエリアごとの価格特性を理解し、拠点別の最適な調達戦略を検討することが重要。</li>
            <li>・ 連系線の整備・増強が進めば長期的にはエリアプライスの収束が期待されるが、当面は格差が継続する見込み。</li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />
      <MarketDataFaq items={FAQ} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/inter-area-power-flow-explained",
              title: "エリア間連系線の仕組みと電力融通",
              description: "連系線の容量制約がエリア価格差を生む仕組みを基礎から解説。",
            },
            {
              href: "/area-power-supply-mix-comparison",
              title: "エリア別 電源構成比較",
              description: "東京・九州・北海道などエリアごとの発電電源構成の違いを比較分析。",
            },
            {
              href: "/price-spike-analysis",
              title: "電力価格スパイクはいつ起きるか",
              description: "50円超スパイクが年度・月・時間帯のどこに集中するかを分析。",
            },
            {
              href: "/jepx-spot-price-dashboard",
              title: "JEPXスポット価格ダッシュボード",
              description: "年度別・時間帯別・統計値をチャートで一覧できる総合ダッシュボード。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社のエリアと電気料金リスクを診断する"
          description="事業所のエリア・契約種別・使用量を入力することで、エリアプレミアムを含めた電気料金リスクスコアを算出します。複数拠点をお持ちの企業は拠点ごとに診断することをお勧めします。"
          links={[
            { href: "/", label: "リスクシミュレーターで診断する" },
            { href: "/multi-site-plan-selection", label: "複数拠点の契約最適化を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
