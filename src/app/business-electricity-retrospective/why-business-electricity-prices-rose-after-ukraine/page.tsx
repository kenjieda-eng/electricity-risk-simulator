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
  getYearlyAverages,
} from "../../../lib/businessElectricityRetrospective/shock-feature-data";

const pageTitle = "なぜ法人電気料金は上がったのか｜LNG・石炭・為替の連鎖";
const pageDescription =
  "ウクライナ危機の後、なぜ日本の法人電気料金まで上がったのか。LNG、石炭、為替、卸市場、燃料費調整の連鎖を、法人向けに分かりやすく整理。";
const canonicalUrl =
  "https://simulator.eic-jp.org/business-electricity-retrospective/why-business-electricity-prices-rose-after-ukraine";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電気料金 なぜ上がった", "LNG 石炭 為替 電気代", "法人 電気料金 上昇 原因", "燃料費調整 仕組み", "ウクライナ 電気代 影響"],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人電気料金上昇の連鎖" }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

export default function WhyPricesRoseAfterUkrainePage() {
  const trendRows = getSeriesByRange("2021-01-01", "2023-12-01").map((row) => ({ label: row.label, values: row.values }));
  const yearRows = getYearlyAverages(2021, 2023).map((row) => ({ label: `${row.year}年`, values: row.values }));

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
          { name: "なぜ電気料金は上がったのか" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <UkraineShockSeriesNav currentSlug="why-business-electricity-prices-rose-after-ukraine" />

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{pageTitle}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「戦争が遠い地域で起きても、なぜ日本の法人電気料金が上がるのか」を、燃料調達から請求単価までの経路で分解します。
          社内説明で使えるよう、抽象論ではなく、どこでコストが積み上がったかを順番に整理しています。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <ConclusionThreePoints
          points={[
            "起点は欧州のガス調達混乱だが、日本にはLNG・石炭・為替・卸市場の連鎖で波及した。",
            "長期契約や油価連動は緩衝材になったが、上昇圧力を完全には遮断できなかった。",
            "固定・市場連動・新電力の違いで、同じ上昇局面でも企業ごとの体感差が拡大した。",
          ]}
        />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">出発点はどこだったのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年後半時点で燃料需給は既にタイト化しており、2022年2月以降に欧州ガス需給の緊張が急拡大しました。LNGスポット調達の競争が激しくなると、
            日本の火力発電コストにも上昇圧力がかかります。そこへ石炭価格の上昇と円安が重なり、輸入燃料コスト全体が押し上げられました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNGの逼迫が日本にどう伝わったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNGは火力発電の主要燃料であり、国際市場でのひっ迫は電力調達コストに直結します。契約形態が違っても、最終的には燃料費調整・新規見積条件・
            リスクプレミアムとして反映され、法人向け単価に時間差で乗ります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            具体的な価格推移を見ると、アジアのLNGスポット価格は2021年前半には約10 USD/MMBtu前後で推移していましたが、欧州のガス危機が深刻化するにつれ急騰し、2022年8月には70 USD/MMBtuを超える水準に達しました。背景にあったのは、ロシアから欧州へのパイプラインガス供給が段階的に削減・停止され、EUがLNGの代替調達に殺到したことです。欧州がアジア向けスポットカーゴを高値で買い付けた結果、アジア市場の価格も連鎖的に押し上げられました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本は年間約7,000万トンのLNGを輸入する世界最大級の買い手ですが、そのうちスポット調達の比率は約10%です。残り約90%は長期契約でカバーされており、長期契約価格の多くは原油価格連動（JCC連動）で設定されています。この構造はスポット価格の急騰を直接受けにくい緩衝材となりましたが、原油価格自体も上昇していたため、3〜6か月のタイムラグを経て長期契約価格も上昇に転じ、燃料費調整額に反映される形で法人電気料金を押し上げました。
          </p>
          <div className="mt-4 space-y-4">
            <MultiLineChartCard
              title="2021年〜2023年の法人電気料金推移（4区分）"
              description="どのタイミングで単価がジャンプしたかを、区分別に同じ時系列で確認できます。"
              points={trendRows}
              keys={VOLTAGE_ORDER}
            />
            <MultiBarChartCard
              title="2021年→2022年→2023年の平均単価比較"
              description="上昇幅の大きさを区分別に比較し、どの区分で水準変化が大きかったかを可視化しています。"
              rows={yearRows}
              keys={VOLTAGE_ORDER}
            />
          </div>
          <DataNote note={DATA_DISCLAIMER} />
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ウクライナ後の値上げ要因分解</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人電気料金の上昇を引き起こした主要因を、影響経路・時期・影響幅に分けて整理しました。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full border-collapse text-sm sm:text-base">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">要因</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">影響開始時期</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">法人単価への影響幅（目安）</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">影響期間</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">2025年時点の状況</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">LNGスポット価格急騰</td>
                  <td className="border-b border-slate-200 px-3 py-2">2021年後半〜</td>
                  <td className="border-b border-slate-200 px-3 py-2">燃調費で+3〜8円/kWh（ピーク時）</td>
                  <td className="border-b border-slate-200 px-3 py-2">2021年後半〜2023年中盤（約2年）</td>
                  <td className="border-b border-slate-200 px-3 py-2">市況落ち着きも長期契約への反映は継続</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">石炭・原油価格上昇</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022年前半〜</td>
                  <td className="border-b border-slate-200 px-3 py-2">燃調費を通じて+1〜3円/kWh（高圧）</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022〜2023年（ピーク後も高止まり）</td>
                  <td className="border-b border-slate-200 px-3 py-2">緩和傾向も、単価下限の底上げが残る</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">円安（115円→150円近辺）</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022年中盤〜年末</td>
                  <td className="border-b border-slate-200 px-3 py-2">輸入燃料コスト全体を20〜30%増幅</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022〜2023年（為替は2025年も不安定）</td>
                  <td className="border-b border-slate-200 px-3 py-2">円安基調が続くと再び上振れリスク</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">JEPX卸市場の高騰</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022年前半〜後半</td>
                  <td className="border-b border-slate-200 px-3 py-2">市場連動プランで+5〜15円/kWh（ピーク時）</td>
                  <td className="border-b border-slate-200 px-3 py-2">2022〜2023年前半（断続的に発生）</td>
                  <td className="border-b border-slate-200 px-3 py-2">FY2023以降は大幅低下も、FY2019比+35%水準</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="border-b border-slate-200 px-3 py-2 font-medium">規制料金・構造コストの底上げ</td>
                  <td className="border-b border-slate-200 px-3 py-2">2023年6月〜（規制料金値上げ）</td>
                  <td className="border-b border-slate-200 px-3 py-2">単価下限を恒久的に+2〜4円/kWh引き上げ</td>
                  <td className="border-b border-slate-200 px-3 py-2">恒久的（規制料金値上げ・容量拠出金・再エネ賦課金）</td>
                  <td className="border-b border-slate-200 px-3 py-2">燃料安でも単価が下がりにくい構造が定着</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※影響幅はモデルケースの概算です。実際の変化幅は契約区分・調達条件・電力会社により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">石炭・原油・為替はどう効いたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNGだけでなく、石炭・原油の高騰と円安が同時に進んだことで、発電燃料の円建てコストはさらに増幅されました。法人料金では、燃料費調整と調達条件改定が
            積み重なり、単月では見えにくい形で平均単価を押し上げます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            石炭については、豪州ニューカッスル炭の指標価格が2021年時点の約120 USD/トンから、2022年9月には約430 USD/トンまで急騰しました。日本の火力発電における石炭火力の比率は約30%を占めており、この価格上昇は燃料費調整額を通じて法人電気料金に直接反映されます。原油もBrent原油が2022年1月の約80 USD/バレルから一時120 USD/バレルまで上昇し、その後安定化しましたが、LNG長期契約の原油連動価格を押し上げる要因として間接的にも影響しました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに深刻だったのが円安の同時進行です。ドル円レートは2022年1月の約115円から同年10月には約150円まで下落し、輸入燃料コストを円建てで約30%押し上げました。つまり、燃料価格の上昇と通貨の下落という二重のコスト増が同時に発生した形です。この「燃料高＋円安＋スポットプレミアム」の三重構造が、法人電気料金の上昇幅をかつてない水準に引き上げた主因です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">日本の調達構造は何を和らげ、何を防げなかったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本では長期契約や油価連動が一定の緩衝材として機能し、短期の急騰を平滑化する面がありました。一方で、全体として燃料コストが高止まりしたため、
            企業向け見積の再設定やリスク反映を防ぎ切ることはできませんでした。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            長期契約はLNG輸入量の約90%をカバーしており、スポット市場が70 USD/MMBtuに急騰した局面でも、長期契約価格は原油連動で20〜30 USD/MMBtu程度に収まっていました。この差額が日本の電力コストを欧州ほどの急騰から守った最大の要因です。しかし原油連動価格には約6か月のタイムラグがあるため、原油価格が上昇した2022年前半の影響は同年後半から2023年にかけて遅れて反映されました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            結果として、日本の法人電気料金は欧州のような「急騰→急落」のパターンではなく、「遅れて上昇し、高止まりが長期化する」という推移をたどりました。JEPXの卸電力市場平均価格で見ると、2021年の約13.5円/kWhから2022年には約20.4円/kWhへ上昇しており、スポット急騰が直接反映される市場連動プランの法人は特に大きな影響を受けました。長期契約による緩衝は「ピークの高さ」を抑えた一方、「上昇の持続期間」を長引かせる側面も持っていたといえます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人電気料金に反映された経路</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            国際燃料市場の変動が法人の請求書に届くまでには、複数の経路が並行して作用します。最も影響が大きかったのは燃料費調整単価です。LNG・石炭・原油の加重平均をもとに毎月算定され、法人向け単価の変動要因として最大の比重を占めました。燃料費調整は通常2〜3か月の遅延を伴って反映されるため、国際価格のピークと請求書のピークにはズレが生じます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型の契約を持つ法人にとっては、JEPXの卸電力価格がそのまま調達コストに直結します。卸市場価格は燃料費に加えて需給バランスにも左右されるため、燃料費調整とは異なるタイミングで変動が生じ、ピーク時には固定契約との単価差が5〜15円/kWhに達するケースもありました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに、2023年6月には大手電力7社が規制料金の本格改定を実施し、基本料金・電力量料金の水準自体が引き上げられました。これにより、燃料価格が下がっても単価の下限が以前より高い水準に固定される構造が生まれています。再生可能エネルギー発電促進賦課金も年度ごとに変動しており、2022年度の3.36円/kWhから2023年度に1.40円/kWhへ下がった後、2024年度には3.49円/kWhへ再上昇するなど、制度面のコスト変動も法人の負担構造に影響を与え続けています。
          </p>
        </section>

        <HormuzInsight
          same="供給不安が起きると、燃料市場と輸送リスクの再評価が同時に発生し、法人向け単価へ波及する点です。"
          diff="ウクライナ局面は欧州ガス需給の長期化、ホルムズ海峡局面は輸送経路の寸断リスクという即応色の強さが異なります。"
          actions={[
            "固定単価の残存期間と見直し条項を契約書で再確認する。",
            "市場連動プランは上限条件とヘッジ方針を事前に定義する。",
            "社内説明では、燃料要因・為替要因・制度要因を分けて説明する。",
          ]}
        />

        <RelatedLinks
          links={[
            { href: "/business-electricity-retrospective", label: "法人電気料金振り返りトップ" },
            { href: "/business-electricity-retrospective/ukraine-shock-overview", label: "全体整理ページ" },
            { href: "/business-electricity-retrospective/ukraine-shock-and-contract-practice", label: "契約実務への波及" },
            { href: "/compare", label: "市場連動・固定の比較ページ" },
          ]}
        />

        <UkraineShockPrevNext currentSlug="why-business-electricity-prices-rose-after-ukraine" />

        <SourceList
          items={[
            { href: "https://www.iea.org/reports/global-energy-crisis", label: "IEA Global Energy Crisis" },
            { href: "https://www.enecho.meti.go.jp/category/electricity_and_gas/electric/summary/", label: "資源エネルギー庁 電力・ガス制度情報" },
            { href: "https://www.jepx.jp/", label: "日本卸電力取引所（JEPX）" },
            { href: "https://simulator.eic-jp.org/business-electricity-retrospective", label: "法人電気料金振り返り（新電力ネット由来データ）" },
          ]}
        />
      </section>
      </main>
    </>
  );
}
