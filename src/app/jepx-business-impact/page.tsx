import type { Metadata } from "next";
import Link from "next/link";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import { JEPX_HOURLY_AVG, JEPX_AREA_SPREAD_2026 } from "../../data/jepxData";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "JEPXが法人の電気料金に与える影響｜調達経路別の波及と備え方";
const pageDescription =
  "JEPXスポット価格が法人の電気料金にどう波及するかを、契約タイプ別（固定・市場連動・ハイブリッド）に整理。2021年1月・2022年度の実例から、経営への影響と備え方を解説します。";
const pageUrl = "https://simulator.eic-jp.org/jepx-business-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 法人",
    "JEPX 電気料金 影響",
    "市場連動 法人",
    "調達 経路 法人電気",
    "電気料金 リスク 法人",
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

const faq = [
  { question: "JEPXの価格変動は法人の電気料金にどのように影響しますか？", answer: "JEPX価格は「直接反映（市場連動プラン）」「間接反映（固定プランの更新時転嫁）」「遅延反映（長期契約でほぼ影響なし）」の3つの経路で法人料金に波及します。どの経路で影響するかは契約メニュー次第です。" },
  { question: "市場連動プランと固定プランで、JEPX高騰時の影響はどれくらい違いますか？", answer: "月10万kWh使用の場合、2019年度と2022年度を比較すると、完全市場連動プランでは年額+約1,490万円の増加に対し、固定単価の2年契約では契約期間中の影響はゼロです。ただし固定契約も更新時に値上げを受ける可能性があります。" },
  { question: "JEPX高騰に対してどのような備えが有効ですか？", answer: "市場連動プランの場合は上限条項の有無を確認することが重要です。また、複数メニュー・複数拠点への分散、長期契約や相対契約の活用、再エネPPAなどの選択肢を検討することで、JEPX高騰リスクを軽減できます。" },
];

export default function JepxBusinessImpactPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力調達の仕組みを知る", url: "https://simulator.eic-jp.org/articles/power-procurement" },
          { name: "JEPXが法人料金に与える影響" },
        ]}
        faq={faq}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">JEPXが法人料金に与える影響</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPXが法人の電気料金に与える影響</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX 価格は、法人の電気料金に「直接的」「間接的」「遅延的」の 3 つの経路で影響します。
          どの経路で波及するかは契約メニュー次第です。このページでは、契約タイプ別の波及構造と、
          実際の過去事例から見える経営影響を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX価格の波及経路（3パターン）</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">① 直接反映（市場連動）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                市場連動プラン契約。JEPX 価格がそのまま請求単価に反映される。最大の上振れリスクを持つ。
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">② 間接反映（調達マージン）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                固定単価契約でも、電力会社の調達コストに影響。契約更新時に本体単価として転嫁される。
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">③ 遅延反映（長期ヘッジ）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                長期契約や相対契約をベースにしている事業者では、JEPX の短期変動はほぼ影響しない。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別 JEPX の推移（参考）</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#2563eb",
                  fillColor: "rgba(37,99,235,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約タイプ別の影響試算（月 10 万 kWh）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019 年度（平常時）と 2022 年度（ウクライナ危機）を比較し、契約タイプ別の年額影響を試算します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">契約タイプ</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2019年度年額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2022年度年額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">差額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2 font-semibold">完全市場連動</td><td className="border border-slate-200 px-3 py-2 text-right">約 950 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 2,440 万円</td><td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">+1,490 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2 font-semibold">ハイブリッド（β=0.5）</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,100 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,850 万円</td><td className="border border-slate-200 px-3 py-2 text-right">+750 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2 font-semibold">固定単価（2年契約）</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,400 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,400 万円</td><td className="border border-slate-200 px-3 py-2 text-right">±0 円（契約期間中）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電力量料金のみの試算。実際には託送料金・基本料金・再エネ賦課金等が別途加算されます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実際の影響事例</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例1：中規模工場（市場連動）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                連続操業の中規模製造業（月 30 万 kWh）。市場連動プラン継続で、2022 年度の電気代が前年比 +6,500 万円。
                取引先への価格転嫁が間に合わず、一時的に営業利益率が 2% 低下。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例2：飲食チェーン（新電力破綻）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                新電力の市場連動プラン契約。契約先の事業撤退で最終保障供給へ移行。
                最終保障供給の料金水準が高く、さらに +30% の負担増。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例3：自治体施設（固定契約）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                旧一般電気事業者の固定単価契約。2022 年度の JEPX 高騰の影響は限定的。
                契約更新時（2023 年度）に 20% 程度の値上げを受け入れ。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例4：データセンター（長期PPA）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                再エネ PPA ベースで 10 年固定調達。JEPX 高騰の影響はほぼゼロ。
                同業他社が苦しむ中で競争優位を確保。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人担当者が確認すべきポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の契約がどの波及経路にあるか（約款・契約書で確認）</li>
            <li>市場連動の場合、上限条項があるか</li>
            <li>固定単価契約でも、次回更新時に本体単価が上がるリスクを想定</li>
            <li>長期契約は安定の代わりに、市場下落時の割高感を受け入れる覚悟が必要</li>
            <li>単一電力会社への依存を避け、複数メニュー・複数拠点分散を検討</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">時間帯別JEPX平均価格</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全期間の30分コマデータを時間帯別に集計しました。太陽光発電の普及により昼間（特に12時台）の卸価格が大幅に低下しており、
            反対に夕方（17〜18時台）は需要急増と太陽光出力減少が重なり最も高くなります。
          </p>
          <div className="mt-4 space-y-1">
            {JEPX_HOURLY_AVG.map((row) => {
              const maxPrice = 17;
              const pct = Math.min((row.avg / maxPrice) * 100, 100);
              const barColor =
                row.avg < 11
                  ? "bg-green-400"
                  : row.avg > 14
                  ? "bg-red-400"
                  : "bg-yellow-400";
              const isMin = row.hour === 12;
              const isMax = row.hour === 17;
              return (
                <div key={row.hour} className="flex items-center gap-2 text-xs text-slate-700">
                  <span className="w-14 shrink-0 text-right font-medium">{row.label}</span>
                  <div className="flex-1 rounded-sm bg-slate-100">
                    <div
                      className={`${barColor} h-5 rounded-sm transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className={`w-24 shrink-0 font-semibold ${isMin ? "text-green-700" : isMax ? "text-red-700" : ""}`}>
                    {row.avg.toFixed(2)}円{isMin ? "（最安）" : isMax ? "（最高）" : ""}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>12時台 9.84円（最安）vs 17時台 15.76円（最高）</strong> — 差は約6円/kWhに達します。
              市場連動プランの場合、この時間差が月次コストに直接影響します。
              昼間の安価な電力を積極的に活用（蓄電・シフト生産）すると電力調達コストを抑えやすくなります。
            </p>
          </div>
          <p className="mt-2 text-xs text-slate-500">出典: JEPX公表データ（2010年4月〜2026年4月）の全30分コマを時間帯別に集計。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">エリア間価格差（FY2026）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FY2026のエリアプライスとシステムプライスの差を整理しました。
            東京エリアは平均+5.33円と大幅に高く、一方で九州・四国は太陽光大量導入の影響でシステムプライスより安くなる傾向があります。
            エリアによって「実際に適用される価格」が大きく異なることに注意が必要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">エリア</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">システムプライスとの差（平均）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">標準偏差</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">最安差</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">最高差</th>
                </tr>
              </thead>
              <tbody>
                {JEPX_AREA_SPREAD_2026.map((row) => (
                  <tr
                    key={row.area}
                    className={
                      row.area === "tokyo"
                        ? "bg-red-50"
                        : row.area === "kyushu" || row.area === "shikoku"
                        ? "bg-green-50"
                        : "odd:bg-white even:bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.areaJa}</td>
                    <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${row.mean > 0 ? "text-red-700" : "text-green-700"}`}>
                      {row.mean > 0 ? "+" : ""}{row.mean.toFixed(2)}円
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">±{row.std.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.min.toFixed(2)}円</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">+{row.max.toFixed(2)}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>太陽光が多い九州・四国では昼間にマイナス差が拡大。</strong>
              再エネ出力が集中する時間帯は卸価格がシステムプライスを大幅に下回ることがあります。
              一方、首都圏（東京）は送電容量制約で高止まりしやすく、FY2026は平均+5.33円と突出しています。
            </p>
          </div>
          <p className="mt-2 text-xs text-slate-500">出典: JEPX公表データ（FY2026 4月期）のエリアプライスとシステムプライスの差を集計。</p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org", description: "スポット市場の約定価格・約定量データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力市場制度・料金制度の概要" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "小売電気事業者の撤退・経営状況の監視レポート" },
          ]}
          publishedAt="2026-04-11"
        />

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本解説。" },
            { href: "/jepx-spot-market-history", title: "JEPXスポット市場の価格推移", description: "過去の実績数値。" },
            { href: "/jepx-price-volatility", title: "JEPX価格変動の要因", description: "価格が動く原因を整理。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "契約視点のリスク整理。" },
            { href: "/bilateral-power-contracts", title: "相対契約とは", description: "市場に依存しない調達。" },
            { href: "/long-term-power-procurement", title: "長期契約とは", description: "安定調達の選択肢。" },
          ]}
        />

        <ContentCta
          heading="自社の波及リスクを可視化"
          description="現在の契約タイプでJEPX上振れシナリオの影響を試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="jepx-business-impact" />
      </div>
    </main>
    </>
  );
}
