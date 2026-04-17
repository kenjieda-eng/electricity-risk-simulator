import type { Metadata } from "next";
import { ArticleJsonLd } from "../../../components/seo/JsonLd";
import UkraineShockSeriesNav, { UkraineShockPrevNext } from "../_components/UkraineShockSeriesNav";
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
        <UkraineShockSeriesNav currentSlug="ukraine-shock-by-voltage-class" />

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
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
          <h3 className="mt-5 text-lg font-semibold text-slate-900">契約区分で差が出る構造的な理由</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>特別高圧</strong>は2000年の自由化開始以来、最も早く競争市場に組み込まれた区分です。需要家側に交渉力があり、契約条件を個別に設計できる反面、
            市場連動比率が高い調達構造を採用しているケースが多く、卸電力市場（JEPX）や燃料価格の変動がダイレクトに反映されます。
            ウクライナショック期には上昇も早かったものの、大口需要家は交渉や調達手段の多様化で緩和余地を持つことができました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>高圧</strong>は小売電気事業者の調達構造をそのまま反映しやすい区分です。多くの法人が小売事業者と相対契約を結んでおり、
            契約更新のタイミングで大幅な値上げ通知が届くケースが2022年後半から2023年にかけて相次ぎました。
            特に新電力から旧一般電気事業者への切り替えが集中した時期には、見積取得自体が困難になる事態も発生しています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>低圧電力</strong>は、規制料金（経過措置料金）が残る場合にはタイムラグが大きくなります。燃料費調整制度を通じて徐々に反映されますが、
            燃調上限の存在により、急騰局面では実際のコスト上昇分が請求に反映されない期間が生じました。
            2023年6月の規制料金値上げ認可によって一気に水準訂正が行われ、需要家にとっては「突然の大幅値上げ」として体感されました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>低圧電灯</strong>は家庭向けと同じ規制料金体系に属するため、政策的に抑制されやすい特徴があります。
            激変緩和措置（電気・ガス価格激変緩和対策事業）の恩恵も受けやすい一方、制度変更時のインパクトは大きく、
            多拠点展開する法人では拠点数に応じた合算影響が無視できない規模になります。
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
          <h3 className="mt-5 text-lg font-semibold text-slate-900">年平均で見た変動幅の違い</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ピーク値だけでなく年平均で比較すると、区分ごとの市場感応度の違いがより明確になります。
            特別高圧は2021年平均約10.7円/kWhから2022年平均約17.1円/kWhへと約60%上昇しました。
            高圧は2021年平均約14.1円/kWhから2022年平均約19.6円/kWhへと約39%の上昇です。
            一方、低圧電灯は2021年平均約21.1円/kWhから2022年平均約26.8円/kWhへと約27%の上昇にとどまり、
            低圧電力は2021年平均約24.8円/kWhから2022年平均約31.0円/kWhへと約25%の上昇でした。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の年平均上昇率が最大であることは、市場連動型の調達構造を持つ区分ほど燃料・卸電力価格の変動に敏感であることを示しています。
            低圧系の上昇率が相対的に低いのは、規制料金の存在や燃料費調整の上限制度が緩衝材として機能した結果です。
            ただし、2023年以降の規制料金値上げや燃調上限撤廃を経て、この緩衝効果は縮小しつつあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整の反映タイムラグの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の変動を左右する大きな要素が燃料費調整制度です。しかし、この制度の適用方法は契約区分によって大きく異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>特別高圧・高圧の自由化料金</strong>では、燃料費調整は小売事業者の調達構造次第です。
            JEPX連動型の契約では月次で市場価格が反映され、相対契約でも四半期ごとの見直し条項を含むケースが一般的です。
            そのため、燃料価格の上昇が比較的短いタイムラグで請求単価に現れます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>低圧の規制料金</strong>では、燃料費調整は旧一般電気事業者が設定する基準燃料価格に連動し、
            3〜5か月前の貿易統計をもとに算定されるため、市場実勢との間にタイムラグが生じます。
            さらに2023年3月末まで適用されていた燃料費調整の上限規制により、実際の燃料コスト上昇分が請求に反映されない局面が続きました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃調上限を超えるコスト上昇分は小売事業者が自己負担する構造となっており、これが新電力の経営悪化・撤退の一因となりました。
            結果として高圧需要家が契約先を失い、最終保障供給に移行するケースも発生しています。
            2023年4月以降は多くの旧一般電気事業者が燃調上限を撤廃しており、今後の有事局面では低圧でもより早くコスト変動が反映される可能性があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">託送料金と容量拠出金の影響差</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の構成要素のうち、託送料金（送配電網の利用料）も契約区分で単価が異なります。
            高圧・特別高圧は送配電効率が高い（高電圧のまま受電するため変換ロスが少ない）ことから、低圧と比べて託送単価が低く設定されています。
            これは平時の単価差の一因ですが、有事局面での上昇率の違いには直接的な影響は限定的です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方、2024年4月から本格徴収が始まった容量拠出金は、主に高圧・特別高圧の契約単価に上乗せされる形で影響が出ています。
            容量市場の導入は将来の供給力確保を目的としていますが、短期的には電気料金の上昇要因となり、
            特にウクライナショック後の高止まり局面と重なったことで、法人需要家の負担感を強めています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は全区分で一律の単価が適用されますが、使用量が大きい特別高圧・高圧の需要家ほど絶対額への影響が大きくなります。
            年間数千万kWhを消費する大規模工場では、賦課金単価の1円/kWhの変動が年間数千万円規模の負担増に直結するため、
            予算策定時には賦課金の見通しも重要な変数となります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策の見え方はどう違ったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策は需要家の請求負担を平準化する役割を持ちましたが、全区分で同一効果ではありません。契約電圧、調達構造、燃料費調整の反映方式が異なるため、
            同じ支援局面でも「どれだけ効いたか」は区分別に確認する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電気・ガス価格激変緩和対策事業による値引きは、低圧で7円/kWh、高圧で3.5円/kWhと区分によって単価が異なりました。
            低圧需要家にとっては請求額の目に見える軽減となった一方、高圧・特別高圧では燃料高騰による上昇幅に対して補助の割合が相対的に小さく、
            「補助があっても高い」という実感が残りやすい構造でした。
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

        <UkraineShockPrevNext currentSlug="ukraine-shock-by-voltage-class" />

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
