import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "原油価格と法人電気料金の関係｜燃料価格の波及経路と影響の見方";
const pageDescription =
  "原油・LNG・石炭などの燃料価格が、どのような経路で法人向け電気料金に影響するかを解説します。燃料費調整額の仕組みと、料金変動リスクの把握方法を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "原油価格 法人電気料金 影響",
    "燃料費調整額 仕組み 法人",
    "LNG 石炭 電気料金 波及",
    "電気料金 原油 関係",
    "燃料価格 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/oil-and-corporate-electricity-price",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/oil-and-corporate-electricity-price",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const fuelTypes = [
  {
    fuel: "LNG（液化天然ガス）",
    share: "日本の火力発電燃料の中心。発電量の約40〜45%を占める。",
    priceLink:
      "国際LNG価格（アジアスポット価格）に連動。原油価格との相関が高い長期契約も多い。",
    lag: "約2〜3か月のタイムラグで燃料費調整額に反映。",
  },
  {
    fuel: "石炭",
    share: "安定・安価な電源として利用。発電量の約30〜35%を占める。",
    priceLink:
      "豪州産一般炭の国際市況に連動。LNGより価格変動が大きい傾向がある。",
    lag: "約2〜3か月のタイムラグで燃料費調整額に反映。",
  },
  {
    fuel: "石油（重油・原油）",
    share: "ピーク時の補完電源として利用。シェアは減少傾向。",
    priceLink:
      "WTI・ブレント原油価格に連動。ただし発電での利用比率は低下している。",
    lag: "燃料費調整額の算定基準に含まれる。",
  },
];

const adjustmentMechanism = [
  {
    phase: "基準燃料価格の設定",
    detail:
      "電力会社の料金認可時に設定された燃料の「基準価格」を基準として、現在の平均輸入価格との差額を算出します。",
  },
  {
    phase: "3か月の平均輸入価格の算出",
    detail:
      "直近3か月の原燃料の平均輸入CIF価格（LNG・石炭・石油の加重平均）を各月のデータから算出します。",
  },
  {
    phase: "調整単価の計算",
    detail:
      "算出した平均輸入価格が基準価格を上回れば正の調整額（追加請求）、下回れば負の調整額（割引）となります。",
  },
  {
    phase: "請求書への反映",
    detail:
      "当月の使用電力量（kWh）に調整単価を乗じた金額が燃料費調整額として請求書に加算・差引されます。",
  },
];

export default function OilAndCorporateElectricityPricePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          原油価格と法人電気料金の関係
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の電力は、LNG・石炭・石油などの化石燃料を使った火力発電に大きく依存しています。これらの燃料価格の変動は、燃料費調整額を通じて法人向け電気料金に転嫁されます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          「なぜ電気料金が上がったのか」「今後も上がり続けるのか」を判断するためには、燃料価格の波及経路と調整の仕組みを理解することが出発点になります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>日本の発電で使われる燃料と電気料金への影響</li>
            <li>燃料費調整額の算定・反映の仕組み</li>
            <li>原油・LNG価格と料金変動の時間的なズレ</li>
            <li>燃料価格リスクを法人として把握する視点</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            日本の電力と化石燃料の関係
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2011年の東日本大震災以降、原子力発電の稼働が大幅に制限され、日本の電力需給は化石燃料による火力発電への依存度を高めてきました。LNG・石炭・石油を合わせた化石燃料火力の比率は、時期によって70〜80%前後に達することもあります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このような構造のもとでは、国際的な燃料価格の変動は電気料金に直結します。2022年のロシアによるウクライナ侵攻を契機としたLNG・石炭価格の高騰が法人電気料金の急上昇につながったのは、この構造を如実に示した事例です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            主要燃料の特性と料金への影響
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力に使われる主要燃料それぞれの特性と、料金への影響を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {fuelTypes.map((item) => (
              <div
                key={item.fuel}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.fuel}</p>
                <p className="mt-1 text-xs text-slate-500">{item.share}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">価格連動: {item.priceLink}</p>
                <p className="mt-1 text-sm leading-6 text-slate-700">料金反映: {item.lag}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            燃料費調整額の算定・反映の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、燃料価格の変動を一定のルールに従って自動的に料金に反映する仕組みです。算定から請求書への反映までの流れを確認します。
          </p>
          <div className="mt-4 space-y-3">
            {adjustmentMechanism.map((item, index) => (
              <div
                key={item.phase}
                className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.phase}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額には上限が設定されている場合がありますが、上限を超えた超過分は電力会社が負担するか、または次期の料金改定に反映されることになります。詳しくは{" "}
            <Link
              href="/fuel-cost-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額の仕組み
            </Link>{" "}
            をご参照ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            燃料価格と料金変動の時間的なズレ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は3か月前後のタイムラグをもって料金に反映されます。このため、燃料価格の変動を見ておくことで、今後の電気料金の方向性を先読みするヒントになります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">先行指標として使えるもの</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>WTI・ブレント原油先物価格（月次・週次）</li>
                <li>JKM（アジアLNG指標価格）</li>
                <li>豪州ニューカッスル石炭価格指数</li>
                <li>円ドル為替レート（円安は燃料輸入コスト増）</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認のタイミング</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                電力会社は毎月の燃料費調整単価を公表しています。来月以降の調整単価の予測には、直近3か月の燃料輸入CIF価格を確認する方法があります。経済産業省の輸入統計が参考になります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人として燃料価格リスクを把握する視点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料価格リスクを経営管理の観点から把握するためのポイントを整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold">燃料費調整額の比率を把握する：</span>
              月々の請求書で燃料費調整額が電力量料金全体に占める割合を確認する。比率が高いほど燃料価格リスクへの感応度が高い。
            </li>
            <li>
              <span className="font-semibold">固定プランでも燃料費調整額は変動：</span>
              「固定プラン」であっても、燃料費調整額は別途変動するプランが多い。料金の「固定」部分が何を指しているか確認することが重要。
            </li>
            <li>
              <span className="font-semibold">中長期の燃料調達動向に注目：</span>
              国内外のエネルギー情勢（地政学リスク・LNG供給制約・再エネ拡大）を定期的に確認し、年間の電力コスト予算の前提条件を見直す。
            </li>
            <li>
              <span className="font-semibold">自家消費・省エネによるリスク低減：</span>
              自家消費太陽光や省エネ投資によって購入電力量を減らすことで、燃料価格変動の影響総額を小さくできる。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            為替（円安）が燃料輸入コストをさらに押し上げる仕組みについては{" "}
            <Link
              href="/fx-and-corporate-electricity-price"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              為替と法人電気料金の関係
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            原油・LNG・石炭の国際価格は、燃料費調整額を通じて約2〜3か月のタイムラグをもって法人電気料金に反映されます。日本の電力供給は化石燃料火力への依存度が高く、地政学リスクや国際市況の変動が電気料金に直結しやすい構造です。燃料価格の動向を先行指標として確認し、契約見直しや省エネ・自家消費投資の判断材料にすることが有効です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/fx-and-corporate-electricity-price",
              title: "為替と法人電気料金の関係",
              description: "円安が電気料金に影響する仕組みを整理。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "燃料費調整額の算定方法と変動要因。",
            },
            {
              href: "/how-procurement-affects-corporate-rates",
              title: "調達構成の違いが法人料金にどう影響するか",
              description: "電力会社の仕入れ構造と料金水準の関係。",
            },
            {
              href: "/market-price-reflected-in-corporate-rates",
              title: "市場価格が法人料金に反映される仕組み",
              description: "JEPXから請求書までの価格波及の流れ。",
            },
            {
              href: "/capacity-market-and-corporate-rates",
              title: "容量市場と法人料金の関係",
              description: "容量市場の制度と今後の負担見通し。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "購入電力削減で燃料費変動リスクを低減する考え方。",
            },
          ]}
        />

        <ContentCta
          heading="燃料価格リスクをシミュレーションする"
          description="現在の契約条件と燃料価格シナリオをもとに、電気料金の変動幅を試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
