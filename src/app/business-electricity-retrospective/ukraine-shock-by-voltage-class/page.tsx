import type { Metadata } from "next";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import { MultiBarChartCard, MultiLineChartCard } from "../_components/FeatureCharts";
import {
  ConclusionThreePoints,
  DataNote,
  HormuzInsight,
  RelatedLinks,
  SourceList,
} from "../_components/FeatureArticleSections";
import {
  DATA_DISCLAIMER,
  VOLTAGE_ORDER,
  getSeriesByRange,
  getVoltageStats,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

const pageTitle = "高圧・特別高圧・低圧で影響はどう違ったのか｜ウクライナショック期の比較";
const pageDescription =
  "ウクライナショック期に、高圧・特別高圧・低圧電力・低圧電灯で電気料金への影響がどう違ったのかを比較。法人の契約区分ごとの意味合いを整理します。";
const canonicalUrl = "https://simulator.eic-jp.org/business-electricity-retrospective/ukraine-shock-by-voltage-class";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["ウクライナショック 契約区分", "高圧 特別高圧 影響比較", "電気料金 区分別 推移", "低圧 高圧 電気代", "ウクライナ 電力 契約"],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "区分別比較ページ" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function UkraineShockByVoltageClassPage() {
  const trendRows = getSeriesByRange("2021-01-01", "2023-12-01").map((row) => ({ label: row.label, values: row.values }));
  const stats = getVoltageStats("2021-01-01", "2023-12-01");
  const statRows = [
    {
      label: "平均",
      values: stats.reduce((acc, row) => ({ ...acc, [row.key]: row.avg }), {} as Record<(typeof VOLTAGE_ORDER)[number], number>),
    },
    {
      label: "高値",
      values: stats.reduce((acc, row) => ({ ...acc, [row.key]: row.max }), {} as Record<(typeof VOLTAGE_ORDER)[number], number>),
    },
    {
      label: "安値",
      values: stats.reduce((acc, row) => ({ ...acc, [row.key]: row.min }), {} as Record<(typeof VOLTAGE_ORDER)[number], number>),
    },
    {
      label: "レンジ幅",
      values: stats.reduce((acc, row) => ({ ...acc, [row.key]: row.range }), {} as Record<(typeof VOLTAGE_ORDER)[number], number>),
    },
  ];

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={canonicalUrl}
        datePublished="2025-04-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人電気料金振り返り", url: "https://simulator.eic-jp.org/business-electricity-retrospective" },
          { name: "契約区分別の影響" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            既存の通史ページは区分ごとに縦読みする構成です。本ページでは、同じ期間を4区分で横比較し、どの区分がどの局面で敏感だったかを
          予算策定と契約説明に使える形で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "同じ上昇局面でも、特別高圧・高圧・低圧で波及速度と振れ幅は異なる。",
            "補助政策の見え方は区分によって違い、請求感だけでは実力値を見誤りやすい。",
            "2026年3月の供給不安局面では、まず高圧系で警戒感が高まりやすい構造が続く。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較する4区分の前提</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電圧と需要規模が違えば、価格リスクの伝わり方も変わります。特別高圧と高圧は調達コストの変化を先に受けやすく、
            低圧系は補助の反映度合いで請求感が変わりやすい点が特徴です。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">区分</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">対象となりやすい需要家</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ショック時の見え方</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">補助政策の見え方</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">予算策定時の注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">特別高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">大規模工場、データセンター、大型公共設備</td>
                  <td className="border-b border-slate-200 px-3 py-2">調達・市場の変化が先に見えやすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">直接的な下押しを受けにくい</td>
                  <td className="border-b border-slate-200 px-3 py-2">単価より契約条件と供給継続性を重視</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">中規模工場、病院、物流施設、商業施設</td>
                  <td className="border-b border-slate-200 px-3 py-2">上昇局面で感応度が高い</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助で請求変動が和らぐ局面がある</td>
                  <td className="border-b border-slate-200 px-3 py-2">更新時期と燃料費調整条件を要確認</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">低圧電力</td>
                  <td className="border-b border-slate-200 px-3 py-2">小規模工場、店舗動力、冷蔵冷凍設備</td>
                  <td className="border-b border-slate-200 px-3 py-2">季節・補助で見え方が振れやすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助期と非補助期の差が体感されやすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">請求月と使用月を分けて比較する</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2">低圧電灯</td>
                  <td className="border-b border-slate-200 px-3 py-2">小規模店舗、小規模オフィス、サービス拠点</td>
                  <td className="border-b border-slate-200 px-3 py-2">変動幅は比較的抑えられるが上昇は継続</td>
                  <td className="border-b border-slate-200 px-3 py-2">補助有無で予算差異が出やすい</td>
                  <td className="border-b border-slate-200 px-3 py-2">拠点数が多いほど合算影響を確認する</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月次推移を並べると何が違うか</h2>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2021年〜2023年の区分別推移"
              description="4区分を同じ期間で重ねることで、上昇開始時期と反落の仕方の違いを視覚化しています。"
              points={trendRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="平均・高値・安値・レンジ幅の比較"
              description="同じ『上昇』でも、レンジ幅と最大値の位置づけが区分ごとに異なる点を確認できます。"
              rows={statRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別のウクライナショック影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各契約区分のショック前平均・ピーク時・上昇幅・上昇率を比較しました。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ショック前平均（2021年年平均）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">ピーク時（2022〜2023年最高値）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">上昇幅（円/kWh）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">上昇率（ピーク/2021年比）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">特別高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">10.8円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">24.2円/kWh（2023年2月）</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">+13.4円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">約+124%</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">高圧</td>
                  <td className="border-b border-slate-200 px-3 py-2">14.3円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">27.5円/kWh（2023年1月）</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">+13.2円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">約+92%</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">低圧電力</td>
                  <td className="border-b border-slate-200 px-3 py-2">25.2円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">36.8円/kWh（2022年11月）</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">+11.6円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">約+46%</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">低圧電灯</td>
                  <td className="border-b border-slate-200 px-3 py-2">21.2円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">31.3円/kWh（2023年1月）</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">+10.1円/kWh</td>
                  <td className="border-b border-slate-200 px-3 py-2 text-red-600">約+48%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※単価は当社団運営「新電力ネット」掲載データをもとにした参考値です。実際の契約単価は条件により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策の見え方はどう違ったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策は需要家の請求負担を平準化する役割を持ちましたが、全区分で同一効果ではありません。契約電圧、調達構造、燃料費調整の反映方式が異なるため、
            同じ支援局面でも「どれだけ効いたか」は区分別に確認する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実務ではどこに注意すべきか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>全社平均ではなく、区分別・拠点別に予算感応度を分解する。</li>
            <li>契約更新月を揃えず、時期分散で再見積リスクを平準化する。</li>
            <li>単価比較時は、燃料費調整・解約条件・供給継続条項まで確認する。</li>
          </ul>
        </section>

        <HormuzInsight
          same="供給不安の局面では、まず高圧系の見積条件が先に引き締まり、低圧へ時間差で波及しやすい構造は共通しています。"
          diff="ホルムズ海峡局面は輸送途絶リスクの短期評価が中心で、長期ガス不足中心だった2022年とは主因が異なります。"
          actions={[
            "高圧・特別高圧拠点は、次回更新条件を前倒しで確認する。",
            "低圧多拠点は、補助終了後の請求増分を拠点束で試算する。",
            "区分別KPI（平均・高値・レンジ幅）を月次レビューに組み込む。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/high-voltage-2019-2025", label: "高圧の年次ページ" },
            { href: "/business-electricity-retrospective/low-voltage-power-2019-2025", label: "低圧電力の年次ページ" },
            { href: "/compare", label: "市場連動/固定の比較ページ" },
          ]}
        />

        <SourceList
          items={[
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力制度情報" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
      </main>
    </>
  );
}
