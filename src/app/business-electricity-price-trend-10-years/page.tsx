import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import BusinessElectricityTrendHubCharts from "./_components/BusinessElectricityTrendHubCharts";
import {
  CONTRACT_VIEWPOINT_ROWS,
  TRANSITION_COMPARISON_CARDS,
  TREND_EVENT_TIMELINE,
} from "../../data/businessElectricityTrendHubData";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "法人向け電気料金の推移を10年で見る｜高止まり・急騰・補助政策を整理";
const pageDescription =
  "法人向け電気料金の推移を、特別高圧・高圧・低圧のデータと図表で整理。急騰局面、高止まり、補助政策、再エネ賦課金、JEPX市場の見え方を10年視点で解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 推移 10年",
    "電気代 値上げ 推移",
    "法人向け電気料金 高止まり",
    "電気料金 いつから高くなった",
    "法人 電気料金 長期推移",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-price-trend-10-years",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-price-trend-10-years",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人向け電気料金の推移を10年で見る" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function BusinessElectricityPriceTrend10YearsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金の推移を10年で見る</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電気料金は、単月の上げ下げだけでは実態を捉えにくく、基準期、急騰期、高止まり、補助による見かけの低下、補助縮小後の再評価までを
          連続で確認する必要があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページは「グラフを見る → 主要イベントを読む → 契約区分差を理解する → 関連詳細ページへ進む」を前提に、図表中心で読み解けるカテゴリ内ハブとして再構成しています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          月次連続の公開データは2019年以降が中心のため、グラフは2019年以降を軸にしつつ、年表は2016年以降の制度・市場転換点を重ねて確認できる構成です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "10年視点で見ると、単発の値上げではなく複数回の上昇局面が見える",
            "大きな転換点は2022年前後で、契約区分ごとの差が拡大",
            "ピークアウト後も2010年代後半に戻り切らない系列が多い",
            "補助政策の有無で、見かけの請求負担と本来水準がずれる",
          ].map((point) => (
            <article key={point} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm leading-7 text-slate-700">{point}</p>
            </article>
          ))}
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">このページでわかること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>法人向け電気料金の全体推移と急騰局面の位置づけ</li>
            <li>ピーク後も高止まりして見える構造要因</li>
            <li>補助政策が料金の見え方に与える影響</li>
            <li>特別高圧・高圧・低圧で見え方が違う理由</li>
            <li>詳細テーマへ進むための関連ページ導線</li>
          </ul>
        </section>

        <BusinessElectricityTrendHubCharts />

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2016年以降の推移で見える転換点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            グラフだけでは要因が見えにくいため、制度・市場・国際要因を年表で重ねます。各イベントで「何が起きたか」と
            「料金を見るうえで何に効いたか」を分けて確認すると、社内説明で論点を整理しやすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {TREND_EVENT_TIMELINE.map((event) => (
              <article key={event.year + event.title} className="rounded-lg border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">{event.year}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-900">{event.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{event.whatHappened}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">料金への効き方: {event.whyItMatters}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2019年平均 → ピーク局面 → 最新の比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            連続月次データの基準期を2019年に置き、ピーク局面と最新値を並べて変化幅を表示しています。2016-2018は公開月次の連続性が
            そろわないため、基準比較は2019年平均で統一しています。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {TRANSITION_COMPARISON_CARDS.map((card) => (
              <article key={card.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{card.label}</h3>
                <dl className="mt-3 space-y-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between gap-2">
                    <dt>{card.baselineLabel}</dt>
                    <dd>{card.baselineValue.toFixed(2)} 円/kWh</dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt>{card.peakLabel}</dt>
                    <dd>
                      {card.peakValue.toFixed(2)} 円/kWh（+{card.peakDelta.toFixed(2)} 円 / +{card.peakDeltaPercent}%）
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <dt>{card.latestLabel}</dt>
                    <dd>
                      {card.latestValue.toFixed(2)} 円/kWh（+{card.latestDelta.toFixed(2)} 円 / +{card.latestDeltaPercent}%）
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧・高圧・低圧で見え方が違う理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じニュースでも、契約区分ごとに単価水準・総額影響・補助の見え方が異なります。自社に近い区分で読まないと、意思決定で誤読しやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-800">
                  <th className="border border-slate-200 px-3 py-2 text-left">契約区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な対象</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">単価水準の見え方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">調整項目の効き方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">補助の見え方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">実務上の見方</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {CONTRACT_VIEWPOINT_ROWS.map((row) => (
                  <tr key={row.contractType}>
                    <td className="border border-slate-200 px-3 py-2">{row.contractType}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.target}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.unitPriceView}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.adjustmentImpact}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.subsidyView}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.practicalView}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">急騰局面はどこだったか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大きな上昇は2022年後半から2023年前半に集中し、燃料・為替・市場の複合要因が重なりました。2021年初の需給ひっ迫は先行シグナルとして
            捉えると説明しやすく、2022年の地政学要因で上昇が加速した流れがグラフ上でも確認できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに詳しい背景は{" "}
            <Link href="/how-long-business-electricity-price-surge-lasts" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が高騰するのはいつまで続くのか
            </Link>{" "}
            で、市場要因と契約反映のタイムラグに分けて確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ピーク後も高止まりして見える理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高止まりは「短期で下がらない」だけではなく、基準期との比較で戻り切らない状態を指します。調達環境の変化、契約単価の改定、調整項目の残存影響が
            同時に効くため、ピークアウト後も2010年代後半に完全復帰しない系列が残ります。詳しくは{" "}
            <Link href="/why-electricity-prices-have-not-returned" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              急騰後も元に戻らない背景
            </Link>
            でも整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助政策があると何が見えにくくなるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策が入る期間は、請求時点の見かけの負担が下がる一方で、契約単価や調達コストの本来水準は同時には下がらないことがあります。比較実務では、
            「補助込みの見かけ負担」と「補助を除いた水準」を分けて読むことが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            補助政策の見え方は{" "}
            <Link href="/impact-of-electricity-subsidy-ending" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              補助金終了の影響
            </Link>
            と{" "}
            <Link href="/electricity-price-subsidy-impact" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              補助金縮小で見え方はどう変わったか
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">推移を読むときに注意したいこと</h2>
          <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <p>
              <span className="font-semibold text-slate-900">1) 粒度をそろえる:</span> 月次と年度を混在させる場合は、どの図がどの粒度かを分けて読みます。
            </p>
            <p>
              <span className="font-semibold text-slate-900">2) 単価と総額を分離する:</span> 特別高圧は単価が低めでも総額影響が大きく、低圧は構成比で印象が変わりやすい点に注意が必要です。
            </p>
            <p>
              <span className="font-semibold text-slate-900">3) 制度要因を重ねる:</span> 補助や再エネ賦課金は請求見え方を動かすため、単価トレンドと同時に確認します。
            </p>
            <p>
              <span className="font-semibold text-slate-900">4) 自社区分で読む:</span> 特別高圧・高圧・低圧を横並びで見た後に、自社と近い契約区分へ絞り込むと誤読を抑えられます。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">関連ページでさらに確認したいテーマ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このページで全体像を確認した後、詳細論点は次のページへ進むと理解を深めやすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Link href="/why-electricity-prices-have-not-returned" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">急騰後も元に戻らない背景</p>
              <p className="mt-1 text-sm text-slate-700">高止まりを構造要因で分解して確認。</p>
            </Link>
            <Link href="/impact-of-electricity-subsidy-ending" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">補助金終了の影響</p>
              <p className="mt-1 text-sm text-slate-700">補助後の見かけ変化と実力水準の違いを確認。</p>
            </Link>
            <Link href="/business-electricity-bill-breakdown" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">法人向け電気料金の内訳とは</p>
              <p className="mt-1 text-sm text-slate-700">請求内訳のどこが増減したかを項目別に整理。</p>
            </Link>
            <Link href="/high-voltage-electricity-pricing" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">高圧電力の料金の見方</p>
              <p className="mt-1 text-sm text-slate-700">高圧契約で比較時に見落としやすい点を確認。</p>
            </Link>
            <Link href="/extra-high-voltage-electricity-pricing" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">特別高圧関連ページ</p>
              <p className="mt-1 text-sm text-slate-700">大口需要家向けの実務論点を確認。</p>
            </Link>
            <Link href="/business-electricity-retrospective" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100">
              <p className="text-sm font-semibold text-slate-900">法人電気料金振り返り</p>
              <p className="mt-1 text-sm text-slate-700">月次の最新動向を契約区分別に追跡。</p>
            </Link>
            <Link href="/market-linked-vs-fixed" className="rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 md:col-span-2">
              <p className="text-sm font-semibold text-slate-900">市場連動 / 固定プランの違い</p>
              <p className="mt-1 text-sm text-slate-700">推移理解を契約メニュー選定に接続。</p>
            </Link>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金を10年視点で読む目的は、単発の値上げ把握ではなく、転換点の連続性をつかむことです。急騰期の要因、ピーク後の高止まり、
            補助政策による見かけ差、契約区分による見え方の違いを図表で切り分けると、予算計画・社内説明・契約見直しの判断軸が揃います。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特に実務では、総額だけでなく単価系列を継続監視し、自社契約区分のデータを基準に政策要因を上書きして読むことが有効です。
          </p>
        </section>

        <RelatedLinks
          heading="あわせて読みたい記事"
          intro="10年推移の次は、上昇要因・制度費目・年次データ・診断比較で、自社の説明資料を厚くできます。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "チャートの転換点を、要因の言葉で説明しやすくなります。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどの程度上がるのか",
              description: "長期トレンドと直近の上がり幅の関係を整理できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度費目が長期推移の中でどう見えるかを補えます。",
            },
            {
              href: "/business-electricity-retrospective",
              title: "法人電気料金振り返り",
              description: "年別・月次の実データで、直近の位置づけを確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューの比較・診断",
              description: "長期リスクの理解を、契約タイプの比較に接続できます。",
            },
            {
              href: "/why-electricity-prices-have-not-returned",
              title: "急騰後も元に戻らないのはなぜか",
              description: "高止まりの背景を要因分解で深掘りできます。",
            },
          ]}
        />

        <ContentCta
          heading="長期推移を前提に、次の見直し判断へ"
          description="急騰・高止まり・補助要因を分けて理解したうえで比較に進むと、単価だけでない実務判断がしやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-trends", label: "推移と高止まりカテゴリへ" },
            { href: "/business-electricity-bill-breakdown", label: "内訳の確認に進む" },
          ]}
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">推移と高止まりに関連する記事</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            10年推移の全体像を踏まえたうえで、個別の論点を深掘りできます。
          </p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/electricity-price-trend-2019-2025" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">法人向け電気料金は高止まりしているのか</span>
            </Link>
            <Link href="/how-long-business-electricity-price-surge-lasts" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">電気料金の高騰はいつまで続くのか</span>
            </Link>
            <Link href="/electricity-price-without-renewable-surcharge" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">再エネ賦課金を除いても電気料金は高いのか</span>
            </Link>
            <Link href="/electricity-price-by-voltage-type" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">特別高圧・高圧・低圧で上がり方はどう違うか</span>
            </Link>
            <Link href="/electricity-price-subsidy-impact" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">補助金縮小で見え方はどう変わったか</span>
            </Link>
            <Link href="/capacity-contribution-cost-impact" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">容量拠出金で電気代はどのくらい上がるのか</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="business-electricity-price-trend-10-years" />
      </div>
    </main>
  );
}
