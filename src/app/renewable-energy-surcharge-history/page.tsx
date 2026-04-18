import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { RENEWABLE_SURCHARGE_DATA } from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "再エネ賦課金の推移と変動要因｜2012〜2026年度を完全分析";
const pageDescription =
  "再エネ賦課金の単価推移を2012年度の制度開始から2026年度まで年度ごとに解説。2023年度の大幅減、2024〜2025年度の急増の背景を、FIT認定量と回避可能費用の観点から分析します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-surcharge-history";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 推移",
    "再エネ賦課金 2023 下がった",
    "再エネ賦課金 2024 上がった",
    "再エネ賦課金 2025 単価",
    "再エネ賦課金 回避可能費用",
    "FIT認定量",
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

export default function RenewableEnergySurchargeHistoryPage() {
  const labels = RENEWABLE_SURCHARGE_DATA.map((row) => `${row.fiscalYear}年度`);
  const values = RENEWABLE_SURCHARGE_DATA.map((row) => row.unitPriceYenPerKwh);

  return (
    <>
      <ArticleJsonLd
        headline="再エネ賦課金の推移と変動要因｜2012〜2026年度を完全分析"
        description="再エネ賦課金の単価推移を2012年度の制度開始から2026年度まで年度ごとに解説。2023年度の大幅減、2024〜2025年度の急増の背景を、FIT認定量と回避可能費用の観点から分析します。"
        url="https://simulator.eic-jp.org/renewable-energy-surcharge-history"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ賦課金の推移と変動要因" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">再エネ賦課金の推移と変動要因</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金の推移と変動要因</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ賦課金は、2012年度の制度開始から現在まで単調に上がり続けたわけではありません。特に2023年度に大幅下落、
          2024〜2025年度に急反発するなど、近年は年度ごとの変動が大きくなっています。このページでは、単価推移を
          グラフと数値で追いながら、なぜ上がる・下がるのかを FIT 認定量と回避可能費用の観点から解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2012〜2026年度の単価推移グラフ</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "再エネ賦課金単価（円/kWh）",
                  values,
                  color: "#0284c7",
                  fillColor: "rgba(2,132,199,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 資源エネルギー庁「再生可能エネルギー発電促進賦課金」単価告示。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単価の決まり方（基本式）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の単価は、年度ごとに次の考え方で決まります。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">
              単価 = （当該年度の買取費用見込み − 回避可能費用 − 広域的運営推進機関費用交付金 ±調整額） ÷ 販売電力量見込み
            </p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>買取費用</strong>：FIT・FIP 認定設備が発電した電気を国が定めた価格で買い取る総額。FIT 認定量が増えるほど増加。
            </li>
            <li>
              <strong>回避可能費用</strong>：仮に再エネがなかった場合に電力会社が火力等で調達していたはずのコスト。卸電力市場価格が高ければ高いほど大きくなり、賦課金単価を押し下げる要因になる。
            </li>
            <li>
              <strong>販売電力量</strong>：分母。日本全体の販売電力量が減れば、同じ買取費用でも単価は上がる。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2012〜2022年度：ほぼ一貫した上昇局面</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            制度開始当初は 0.22 円/kWh と小さな負担でしたが、FIT 認定量（主に太陽光）の急拡大により、
            買取費用の総額は毎年数千億円単位で増加しました。この時期は回避可能費用も比較的安定しており、
            2012 年度 → 2022 年度で 15 倍以上に上昇しています。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">2012年度</p>
              <p className="mt-1 text-lg font-bold text-slate-900">0.22 円/kWh</p>
              <p className="mt-1 text-xs text-slate-500">制度開始</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">2017年度</p>
              <p className="mt-1 text-lg font-bold text-slate-900">2.64 円/kWh</p>
              <p className="mt-1 text-xs text-slate-500">5年で約12倍</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-500">2022年度</p>
              <p className="mt-1 text-lg font-bold text-slate-900">3.45 円/kWh</p>
              <p className="mt-1 text-xs text-slate-500">過去最高（当時）</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2023年度：1.40円/kWhへの急落の理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023 年度は単価が 3.45 円/kWh → 1.40 円/kWh と、前年比 59% 減（2.05 円/kWh マイナス）の異例の下落となりました。
            これは 2022 年度の <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link> スポット価格が平均 20 円/kWh 台まで高騰した影響で、
            「回避可能費用」が大幅に増えたためです。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            賦課金単価の算定では、回避可能費用が買取費用を相殺する方向に働きます。2022 年度のウクライナ危機起点の
            卸電力市場高騰が、結果として 2023 年度の賦課金を大きく引き下げました。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>要点：</strong>賦課金の下落は再エネ普及が落ち着いたからではなく、「電気全体の市況が上がったために相対的に賦課金の取り分が小さくて済んだ」結果です。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2024〜2026年度：再上昇と最高値更新</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2024 年度は 3.49 円/kWh、2025 年度は 3.98 円/kWh、2026 年度は 4.18 円/kWh と、
            再び単調な上昇トレンドに戻っています。背景には次の要因があります。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>JEPX 価格が 2022 年度ピークから正常化し、回避可能費用が減少</li>
            <li>FIT 認定量（特に中規模太陽光）の買取義務は継続して積み上がる</li>
            <li>販売電力量は省エネ・人口減で微減傾向、分母が縮む</li>
            <li>FIP 制度への移行は進むが、既存 FIT 案件の買取期間は10〜20年続く</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2030 年代前半までに単価ピークを迎える見込みで、その後は FIT 買取期間満了案件の減少により緩やかに下落していく見通しです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別の単価・前年比まとめ</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">単価</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">前年差</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">前年比</th>
                </tr>
              </thead>
              <tbody>
                {RENEWABLE_SURCHARGE_DATA.map((row) => (
                  <tr key={row.fiscalYear} className="border-t border-slate-100 hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2">{row.fiscalYear}年度</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.unitPriceYenPerKwh.toFixed(2)} 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.yearOverYearYen === null ? "—" : `${row.yearOverYearYen > 0 ? "+" : ""}${row.yearOverYearYen.toFixed(2)} 円`}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.yearOverYearPercent === null ? "—" : `${row.yearOverYearPercent > 0 ? "+" : ""}${row.yearOverYearPercent}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        
      <MarketDataDownload
        apiPath="/api/datasets/price-adjustment"
        caption="燃料費調整・再エネ賦課金履歴（CC BY 4.0、商用利用可）"
      />
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="renewable-energy-surcharge-history" terms={["再エネ賦課金", "燃料費調整額", "容量拠出金", "託送料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度の基本と計算方法、法人負担のまとめを確認できます。",
            },
            {
              href: "/renewable-energy-surcharge-business-cost",
              title: "再エネ賦課金の法人別月額試算",
              description: "業態・規模別の月額負担を試算表で比較できます。",
            },
            {
              href: "/renewable-energy-surcharge-reduction-system",
              title: "再エネ賦課金の減免制度",
              description: "電気多消費事業者向けの減免要件と申請の流れを解説します。",
            },
            {
              href: "/electricity-price-without-renewable-surcharge",
              title: "再エネ賦課金を除いても電気料金は高いのか",
              description: "賦課金を除いた本体単価の推移を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際の請求額への影響を確かめる"
          description="再エネ賦課金は使用量に正比例するため、シミュレーターで月間使用量を入力すると影響額を確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="renewable-energy-surcharge-history" />
      </div>
    </main>
    </>
  );
}
