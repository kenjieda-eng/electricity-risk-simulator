import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DuckCurveChart from "../../components/area-supply/DuckCurveChart";
import { HOURLY_DATA } from "../../data/areaSupplyData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "ダックカーブとは｜太陽光が生む電力市場価格の昼低下・夕方急騰の仕組み";
const pageDescription =
  "ダックカーブとは、太陽光発電の普及で昼間のネット需要が大きく沈み夕方に急上昇する需要曲線のこと。昼12時7,819MWから夕方18時11,923MWへわずか6時間で4,104MWのランプアップが発生し、JEPX市場価格の昼間低下・夕方高騰として法人の電気料金に直結します。仕組みと影響、対策を解説。";
const pageUrl = "https://simulator.eic-jp.org/duck-curve-electricity-price-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ダックカーブ",
    "ダックカーブとは",
    "ダックカーブ 電力",
    "ネット需要",
    "太陽光 市場価格",
    "JEPX 昼間 低下",
    "夕方 電力価格 急騰",
    "ランプアップ 電力",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/power-procurement", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/power-procurement"],
  },
};

const keyNumbers = [
  { label: "昼12時ネット需要", value: "7,819 MW", sub: "1日の最低点（ダックの腹）" },
  { label: "夕方18時ネット需要", value: "11,923 MW", sub: "1日の最高点（ダックの首）" },
  { label: "ランプアップ幅", value: "4,104 MW", sub: "12時→18時の6時間で急上昇" },
  { label: "太陽光ピーク（11時）", value: "3,949 MW", sub: "9エリア合計の平均出力" },
];

export default function DuckCurveElectricityPriceImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/duck-curve-electricity-price-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "ダックカーブとは" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">ダックカーブとは何か</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">POWER SUPPLY ／ 電力調達の仕組みを知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          ダックカーブとは｜太陽光が生む電力市場価格の昼低下・夕方急騰の仕組み
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">昼と夕方で電力市場価格が変わる理由</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ダックカーブとは、太陽光発電の普及により昼間の「ネット需要」（総需要から太陽光・風力を差し引いた残余需要）が大きく落ち込み、夕方に太陽光が沈むと急激に跳ね上がる現象のこと。
          グラフの形がアヒル（ダック）の背中と首に似ていることから名付けられました。JEPX 市場価格の昼間低下・夕方急騰として法人の電気料金に直接影響する、電力調達の最重要キーワードです。
        </p>
      </header>

      {/* キーナンバー */}
      <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {keyNumbers.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">{item.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-900">{item.value}</p>
            <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
          </div>
        ))}
      </section>

      {/* チャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別 需要・ネット需要・太陽光出力</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          9エリア合計の平均値です。青線が総需要、赤線がネット需要（需要−太陽光−風力）、黄色が太陽光出力。
          昼間にネット需要が沈み込み、夕方に急上昇する「アヒルの形」が鮮明です。
        </p>
        <div className="mt-4">
          <DuckCurveChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: 各一般送配電事業者公表の30分値データを集計（2024年2月〜2026年4月）</p>
      </section>

      {/* 時間帯別データテーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">時間帯別データ（抜粋）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">時刻</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">総需要</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">ネット需要</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">太陽光</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">風力</th>
              </tr>
            </thead>
            <tbody>
              {HOURLY_DATA.filter((r) => [0, 6, 9, 11, 12, 15, 18, 21].includes(r.hour)).map((row, i) => (
                <tr key={row.hour} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium">{row.hour}:00</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.demand.toLocaleString()} MW</td>
                  <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.hour === 12 ? "text-blue-600" : row.hour === 18 ? "text-red-600" : ""}`}>
                    {row.netDemand.toLocaleString()} MW
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-amber-600">{row.solar.toLocaleString()} MW</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-cyan-600">{row.wind.toLocaleString()} MW</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ダックカーブのメカニズム */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">ダックカーブが生まれるメカニズム</h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">1</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">朝：太陽光が立ち上がり、火力が絞られる</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                6時から太陽光出力が急増し、8時には2,181MW。火力発電所は出力を下げて太陽光に道を譲ります。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">2</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">昼：ネット需要が底に沈む（ダックの腹）</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                11〜12時に太陽光は約3,900MWに達し、ネット需要は7,819MWまで低下。JEPX市場価格も昼間は最安水準に。
                余剰が大きいエリアでは<Link href="/solar-curtailment-by-area" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">出力制御</Link>が発生します。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">3</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">夕方：太陽光が沈み、火力が急加速（ダックの首）</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                15時から太陽光が急減し、18時にはほぼゼロ。一方で夕方の電力需要は12,123MWとピーク水準。
                火力発電所が一斉にフル稼働する必要があり、燃料消費が急増。JEPX市場価格は1日の最高値をつけやすい時間帯です。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-500 text-sm font-bold text-white">4</div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">夜間：需要減少とともにネット需要も低下</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                21時以降は需要自体が減少し、火力も出力を下げていきます。翌朝に再び同じサイクルが繰り返されます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 法人への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">ダックカーブが法人電気料金に与える影響</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">市場連動型プランへの影響</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              昼間（10〜14時）はJEPX価格が低く、電気代が安くなります。しかし夕方（17〜19時）には
              価格が急騰するため、この時間帯の電力使用量が多い業種（飲食・小売・オフィスの残業時間）は
              コスト増のリスクがあります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">蓄電池の経済合理性</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              昼間の安い電力を蓄電池に充電し、夕方の高い時間帯に放電する「アービトラージ」が
              経済的に成立しやすくなっています。昼夕の価格差が大きいほど蓄電池の投資回収が早まります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">需要シフトの戦略</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              生産設備や空調の稼働スケジュールを昼間にシフトできれば、安い時間帯のメリットを最大化できます。
              EV充電を昼間に行うことも有効です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">固定価格型プランの安定性</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定価格型プラン</Link>であれば
              昼夕の市場価格変動は影響しません。ただし市場連動型より単価が高く設定されていることが一般的です。
            </p>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          ダックカーブは太陽光の普及がもたらした構造変化であり、今後さらに深化していきます。
          法人にとっては「いつ電力を使うか」が「どれだけ使うか」と同等に重要な時代になっています。
          自社の使用パターンを把握し、市場連動型か固定価格型かの選択、蓄電池導入の検討、
          需要シフトの余地を探ることが、コスト最適化の鍵です。
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "9エリアの発電ミックスを比較。太陽光のシェア差も可視化。" },
            { href: "/solar-curtailment-by-area", title: "太陽光出力制御の実態", description: "ダックの腹が深すぎて発生する出力制御の状況。" },
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "JEPXの価格変動が請求額にどう反映されるか。" },
            { href: "/fixed-price-plan", title: "固定単価プランとは", description: "市場変動を避ける固定価格型契約の仕組み。" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "蓄電池のピークカット・アービトラージ効果を解説。" },
            { href: "/inter-area-power-flow-explained", title: "エリア間電力融通の実態", description: "連系線がダックカーブの緩和にどう貢献するか。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを時間帯別に把握する"
          description="市場連動型プランの場合、時間帯別の使用パターンがコストを左右します。シミュレーターで診断できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/power-procurement", label: "電力調達の記事一覧" },
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
