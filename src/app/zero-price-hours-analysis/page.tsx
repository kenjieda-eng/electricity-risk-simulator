import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { MARKET_DATA_FAQ } from "../../data/marketDataFaq";
import { RenSharePriceChart, RenHourlyOverlayChart } from "../../components/market-data/ZeroPriceCharts";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import {
  REN_SHARE_LABELS,
  REN_SHARE_PRICE,
  REN_SHARE_COUNT,
} from "../../data/marketData";


const FAQ = MARKET_DATA_FAQ["zero-price-hours-analysis"];

// --- 定数 ---
const pageTitle = "JEPX 0円コマの実態｜なぜ電力がタダになる時間帯があるのか";
const pageDescription =
  "JEPXスポット市場で価格が0.01円/kWhや0円になる「0円コマ」が発生する仕組みを解説。再エネ比率40%超で平均6.49円と激安化、太陽光10,000MW超で約6.3%がゼロ価格になる実態と法人への意味を分析します。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 0円コマ", "電力 ゼロ価格", "再エネ余剰 電力価格", "太陽光 電力価格低下",
    "市場連動型 昼間安価", "スポット価格 逆相関", "再生可能エネルギー 過剰発電", "法人電気料金 昼間安価",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/zero-price-hours-analysis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/zero-price-hours-analysis",
    siteName: "法人電気料金ナビ",
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

// --- Page Component ---
export default function ZeroPriceHoursAnalysisPage() {
  return (
    <>
      <ArticleJsonLd
        headline="JEPX 0円コマの実態｜なぜ電力がタダになる時間帯があるのか"
        description="JEPXスポット市場で価格が0.01円/kWhや0円になる「0円コマ」が発生する仕組みを解説。再エネ比率40%超で平均6.49円と激安化、太陽光10,000MW超で約6.3%がゼロ価格になる実態と法人への意味を分析します。"
        url="https://simulator.eic-jp.org/zero-price-hours-analysis"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "JEPX 0円コマの実態" },
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
        <span className="text-slate-800">0円コマの実態</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">MARKET DATA ／ データで見る電力市場</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          JEPX 0円コマの実態
        </h1>
        <p className="mt-1 text-lg font-semibold text-slate-700">なぜ電力がタダになる時間帯があるのか</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力市場では、電気の価格がほぼゼロ（0.01円/kWh）または実質ゼロになる「0円コマ」が発生することがあります。
          これは電力が余って安くなるという現象で、太陽光発電の急速な普及が主要因です。
          FY2019以降、特に晴天の春・秋の昼間に頻繁に見られるようになりました。
          0円コマは、市場連動型の電気料金契約を持つ法人にとっては「ほぼ無料で電力を調達できる時間帯」として恩恵をもたらす一方、
          自家発電・売電事業者にとっては収入ゼロを意味する深刻な問題でもあります。
        </p>
      </header>

      {/* サマリー統計 */}
      <section className="mt-6">
        <h2 className="text-xl font-semibold text-slate-900">0円コマに関する主要データ</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">再エネ40%超時の平均価格</p>
            <p className="mt-1 text-3xl font-bold text-emerald-600">6.49円</p>
            <p className="mt-1 text-sm text-slate-600">通常（0〜5%比率）の半分以下</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">0円価格コマの割合</p>
            <p className="mt-1 text-3xl font-bold text-emerald-600">約6.3%</p>
            <p className="mt-1 text-sm text-slate-600">太陽光10,000MW超時</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">0.01円コマ初観測</p>
            <p className="mt-1 text-3xl font-bold text-blue-600">FY2019〜</p>
            <p className="mt-1 text-sm text-slate-600">以降、発生頻度が増加傾向</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">昼間（11〜13時）の平均価格</p>
            <p className="mt-1 text-3xl font-bold text-blue-600">約9.8〜11円</p>
            <p className="mt-1 text-sm text-slate-600">夕方（18時）15.76円の約60%</p>
          </div>
        </div>
      </section>

      {/* 本文セクション群 */}
      <section className="mt-6 space-y-4">

        {/* 0円コマの仕組み */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. 0円コマとはどのような現象か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXのスポット市場（前日市場）では、各発電事業者が翌日の各30分コマに対して<strong>入札価格と入札量</strong>を提出し、
            安い順に約定する「オークション形式」で価格が決まります。
            価格はゼロ円から最大200円/kWhの範囲で入札され、需要量に達した最後の入札価格が約定価格（限界費用価格）となります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            0円コマが発生するのは、<strong>需要を上回る量の電力が0円（または非常に低い価格）で入札された時</strong>です。
            太陽光や風力など、燃料コストがほぼゼロの再エネ発電事業者は、発電できる状況であれば0円や0.01円で入札するインセンティブがあります。
            これらの入札だけで需要が満たされると、約定価格は0.01円/kWh（市場最低価格）になります。
          </p>
          <div className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">なぜ再エネ事業者は0円で入札するのか</p>
            <p className="mt-1 text-sm leading-7 text-emerald-700">
              太陽光・風力は「燃料費がゼロ」「設備が稼働していれば発電コストは限界的にゼロ」という特性があります。
              FIT（固定価格買取制度）の適用を受けていない発電分については、0円でも売電したほうが放棄するより合理的です。
              出力制御（カーテイルメント）を避けるための低価格入札も行われます。
            </p>
          </div>
        </section>

        {/* 再エネ比率と価格の逆相関 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. 再エネ比率が高いほどスポット価格は下がる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下のグラフは、各30分コマの再エネ供給比率を8段階に分類し、それぞれの平均スポット価格をプロットしたものです。
            再エネ比率が高くなるほど価格が明確に低下する<strong>強い逆相関関係</strong>が確認できます。
          </p>
          <div className="mt-4">
            <RenSharePriceChart />
        <MarketDataDownload
          filename="renewable-share-price.csv"
          headers={["share_bucket", "avg_price_jpy_kwh"]}
          rows={REN_SHARE_LABELS.map((label, i) => ({
            share_bucket: label,
            avg_price_jpy_kwh: REN_SHARE_PRICE[i],
          }))}
          apiPath="/api/market-data"
          caption="再エネ比率別の平均価格"
        />
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-4 py-2 font-semibold text-slate-700">再エネ比率帯</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">平均スポット価格</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">コマ数</th>
                  <th className="px-4 py-2 font-semibold text-slate-700">価格水準</th>
                </tr>
              </thead>
              <tbody>
                {REN_SHARE_LABELS.map((label, i) => (
                  <tr key={label} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-2 text-slate-800">{label}</td>
                    <td className={`px-4 py-2 text-right font-semibold ${REN_SHARE_PRICE[i] <= 7 ? "text-emerald-600" : REN_SHARE_PRICE[i] <= 11 ? "text-amber-600" : "text-slate-700"}`}>
                      {REN_SHARE_PRICE[i].toFixed(2)} 円/kWh
                    </td>
                    <td className="px-4 py-2 text-right text-slate-600">{REN_SHARE_COUNT[i].toLocaleString()}</td>
                    <td className="px-4 py-2 text-slate-600 text-xs">
                      {REN_SHARE_PRICE[i] <= 7 ? "非常に安価（再エネ余剰域）" : REN_SHARE_PRICE[i] <= 11 ? "やや安価" : "標準〜高め"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 全年度の30分コマデータを再エネ比率帯で分類した集計値。コマ数は分析対象期間内の合計。
          </p>
        </section>

        {/* 時間帯別の逆相関 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. 昼間の高再エネ比率と価格の時間帯別逆相関</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下のグラフは、時間帯別の平均再エネ比率（緑・左軸）とスポット価格（赤・右軸）を重ねて表示したものです。
            再エネ比率が最大化する<strong>10〜13時台に価格が谷</strong>を形成し、
            再エネが沈む<strong>17〜19時台に価格がピーク</strong>を迎える逆相関パターンが鮮明です。
          </p>
          <div className="mt-4">
            <RenHourlyOverlayChart />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            特に注目すべきは10〜14時の時間帯で、再エネ比率が平均30〜34%に達するこの帯は、
            スポット価格が9.8〜11.0円/kWhと1日の中で最も安価な水準です。
            晴天の春・秋には再エネ比率がさらに高まり、0円コマが発生しやすい条件が整います。
          </p>
          <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-800">ダックカーブとの関係</p>
            <p className="mt-1 text-sm leading-7 text-blue-700">
              太陽光の発電ピーク（10〜14時）→ 需要を供給が上回り価格低下 → 日没後（17時以降）供給急減で価格急騰、
              というパターンがカリフォルニア州の電力需要曲線に形が似ているため「ダックカーブ」と呼ばれます。
              太陽光の普及が進む日本でも、このパターンは年々顕著になっています。
            </p>
          </div>
        </section>

        {/* 0円コマが発生しやすい条件 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. 0円コマが発生しやすい条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            0円コマの発生はランダムではなく、以下の条件が重なると確率が大きく高まります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">時間帯条件</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ <strong>10〜14時台</strong>（太陽光ピーク）</li>
                <li>・ 日照時間が長い春・秋の晴天日</li>
                <li>・ 気温が快適で冷暖房需要が少ない日</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-800">系統条件</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 太陽光出力が全国10,000MW超の日</li>
                <li>・ 大型連休（GW・お盆）等の需要低下期</li>
                <li>・ 九州・中国エリアで出力制御が発動する日</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            九州エリアでは特に0円コマの発生率が高く、再エネ出力制御（カーテイルメント）との関係が深いです。
            太陽光が大量に入力されるにもかかわらず消費が少ない春の休日昼間には、
            電力を「捨てる」（出力制御）か「0円で売る」かという二択を迫られる事業者が続出しています。
          </p>
        </section>

        {/* 法人にとっての意味 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. 法人にとっての意味：機会とリスク</h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">市場連動型契約の法人：昼間の恩恵</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型プランを契約している法人は、0円コマ・超低価格コマの恩恵を直接受けます。
            昼間（10〜14時）の電気調達コストが大幅に下がり、特に工場・物流倉庫・データセンターなど
            昼間に大量の電力を使う事業者は、<strong>年間の電気代削減効果が無視できない規模</strong>になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに、意図的に昼間の電力使用量を増やす（冷蔵倉庫の予冷、蓄電池への充電、昼間シフト生産）ことで、
            0円コマを積極活用するエネルギーマネジメント戦略も有効です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">売電側・発電事業者：収入ゼロの深刻化</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方、太陽光発電で売電収入を得ている事業者（FIT期間終了後の卒FIT、PPAなど）にとって、
            0円コマは<strong>発電していても収入がゼロになる</strong>ことを意味します。
            昼間の太陽光発電ピーク時に市場価格がゼロであれば、FIT以外での売電収益は発生しません。
            「太陽光パネルを設置したのに昼間の収益が期待より大幅に低い」という問題は、今後さらに顕在化するリスクがあります。
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left">
                  <th className="px-4 py-2 font-semibold text-slate-700">立場</th>
                  <th className="px-4 py-2 font-semibold text-slate-700">0円コマの意味</th>
                  <th className="px-4 py-2 font-semibold text-slate-700">対応の方向性</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-slate-800 font-medium">市場連動型の電力購入者</td>
                  <td className="px-4 py-2 text-emerald-700">昼間電力がほぼ無料→コスト削減機会</td>
                  <td className="px-4 py-2 text-slate-600">昼間シフト、蓄電池充電、積極活用</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-slate-800 font-medium">固定価格型の電力購入者</td>
                  <td className="px-4 py-2 text-slate-600">0円コマの恩恵は受けられない</td>
                  <td className="px-4 py-2 text-slate-600">市場連動型への切替を検討</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-slate-800 font-medium">卒FIT・自家発余剰売電者</td>
                  <td className="px-4 py-2 text-red-700">昼間の売電収入がゼロ→収益悪化</td>
                  <td className="px-4 py-2 text-slate-600">蓄電池で昼間を夕方にシフト</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-slate-800 font-medium">再エネ発電事業者</td>
                  <td className="px-4 py-2 text-red-700">市場売電収益がゼロ→投資回収懸念</td>
                  <td className="px-4 py-2 text-slate-600">コーポレートPPA・容量市場活用</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 0円コマが増えている背景 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. 0円コマが増えている背景</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FY2019以降、0.01円コマの発生が目立つようになりました。これは日本全体の太陽光発電容量が急増し、
            春・秋の晴天昼間に電力需要を上回る供給が生じるケースが増えたためです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            国内の太陽光発電導入量はFY2012のFIT開始以来急増し、2024年時点で累積設備容量は約90GW超。
            春と秋の穏やかな気候で冷暖房需要が低く、かつ晴天が多い日には昼間の供給過剰が常態化しつつあります。
            九州電力管内は特に顕著で、出力制御コマと0円コマが頻発する「再エネ過剰ゾーン」になっています。
          </p>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
            <li>・ 2012年FIT開始 → 太陽光投資が急増、設備容量が急拡大</li>
            <li>・ 2019年頃 → 0.01円コマが観測され始める</li>
            <li>・ 2023〜2024年 → 春・秋の昼間を中心に0円コマが頻発</li>
            <li>・ 今後 → 蓄電池普及・水素製造等で余剰電力活用が進む見込み</li>
          </ul>
        </section>

        {/* 今後の展望 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">7. 蓄電池普及で0円コマは減る？</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            0円コマは「電力が余っている」シグナルであり、蓄電池・揚水発電・水素製造などによる余剰電力の吸収手段が整備されると、
            0円コマは減少していく可能性があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実際、蓄電池の大量導入と需給調整市場の整備が進めば、昼間の過剰供給を夕方の不足時間帯へシフトする経済合理性が生まれます。
            これにより昼間のゼロ価格は緩和され、夕方のスパイクも抑制されるという二重の効果が期待されます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし蓄電池コストの低下ペースと再エネ増設ペースの競走次第では、当面は0円コマが継続・増加する可能性も否定できません。
            法人として「昼間の安価な電力を最大限活用する」というエネルギー戦略の重要性は今後も増していきます。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">8. まとめ：0円コマから読み取るべきこと</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>・ JEPXの0円コマは「再エネ余剰」を示すシグナルであり、太陽光の急増に伴いFY2019以降に顕在化。</li>
            <li>・ 再エネ比率40%超の時間帯では平均6.49円/kWhまで価格が低下し、通常時の半分以下になる。</li>
            <li>・ 0円コマは昼間（10〜14時）の晴天・低需要の日に集中し、特に春・秋・九州エリアで頻発。</li>
            <li>・ 市場連動型の電力購入者は昼間の低価格を享受できる一方、固定価格型には恩恵がない。</li>
            <li>・ 売電事業者・卒FIT後の事業者にとっては昼間の収入ゼロリスクとして対策が必要。</li>
            <li>・ 蓄電池・ダックカーブ対応の需要シフトにより、0円コマを積極活用する戦略が合理的。</li>
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
              href: "/duck-curve-electricity-price-impact",
              title: "ダックカーブと電力価格への影響",
              description: "太陽光普及により昼間と夕方の価格差が拡大するダックカーブ現象を解説。",
            },
            {
              href: "/renewable-share-price-correlation",
              title: "再エネ比率と電力価格の相関分析",
              description: "再エネ供給比率が上昇するほどスポット価格が下がるメカニズムをデータで解説。",
            },
            {
              href: "/price-spike-analysis",
              title: "電力価格スパイクはいつ起きるか",
              description: "50円超のスパイクが発生する年度・月・時間帯パターンを分析。",
            },
            {
              href: "/solar-curtailment-by-area",
              title: "エリア別 太陽光出力制御の実態",
              description: "九州を中心に広がる出力制御の現状と電力市場への影響を解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金プランを最適化する"
          description="0円コマの恩恵を最大化するには市場連動型プランが有効です。一方、スパイクリスクも伴います。シミュレーターで自社の使用パターンに合ったプランを診断しましょう。"
          links={[
            { href: "/", label: "リスクシミュレーターで診断する" },
            { href: "/market-linked-plan", label: "市場連動型プランの詳細を読む" },
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
