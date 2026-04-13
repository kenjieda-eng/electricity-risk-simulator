import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "市場価格が法人料金に反映される仕組み｜JEPXから請求書までの流れ";
const pageDescription =
  "日本卸電力取引所（JEPX）の市場価格が、どのような経路で法人向け電気料金に反映されるかを解説します。スポット市場から請求書の各項目まで、価格波及の仕組みを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 法人料金 反映",
    "卸電力市場 小売料金 仕組み",
    "電力市場価格 法人 影響",
    "市場連動プラン JEPX 仕組み",
    "スポット市場 電気料金 反映",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/market-price-reflected-in-corporate-rates",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/market-price-reflected-in-corporate-rates",
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

const marketFlowSteps = [
  {
    step: "1",
    heading: "JEPX スポット市場での取引",
    content:
      "発電事業者と小売電気事業者が翌日の30分ごとのコマ単位で電力を売買します。入札価格によって市場価格（約定価格）が決まり、全国で9エリアごとに価格が形成されます。",
    note: "市場価格は天候・需要・燃料価格・電源の稼働状況によって大きく変動します。",
  },
  {
    step: "2",
    heading: "小売事業者の調達コストへの反映",
    content:
      "市場から調達した電力のコストは、小売事業者の調達コストに直接算入されます。JEPX依存度が高い小売事業者ほど、市場価格の変動がコストに即座に影響します。",
    note: "相対契約や自社発電との組み合わせにより、市場変動の影響度は事業者によって異なります。",
  },
  {
    step: "3",
    heading: "プランタイプによる転嫁方法の違い",
    content:
      "調達コストを顧客に転嫁する方法はプランタイプによって異なります。市場連動プランではJEPX価格が直接料金に反映され、固定プランでは一定期間のコストを見込んで単価が設定されます。",
    note: "固定プランでも調達コストが想定を上回れば、次の更新時に単価改定が行われます。",
  },
  {
    step: "4",
    heading: "請求書への反映",
    content:
      "市場連動プランでは、当月の時間帯別JEPX価格に自社の使用量を掛けた金額が電力量料金に反映されます。固定プランでは単価が一定のため月ごとの請求額変動は少ないですが、燃料費調整額は別途変動します。",
    note: "請求書の各項目の見方は「法人電気料金の明細の見方」で詳しく確認できます。",
  },
];

const marketLinkageTypes = [
  {
    type: "完全市場連動型",
    description: "JEPXスポット価格に一定のスプレッド（手数料・利益）を加えた単価を毎月または毎時間適用",
    risk: "高騰時に料金が大幅に上昇するリスクがある",
  },
  {
    type: "一部市場連動型（部分調整型）",
    description: "基本単価は固定し、市場価格が一定水準を超えた分だけ追加料金として請求",
    risk: "完全連動より変動幅は小さいが、高騰時の影響は受ける",
  },
  {
    type: "上限付き市場連動型",
    description: "JEPX価格が上限価格を超えた場合でも上限額までに料金を抑制",
    risk: "高騰時のリスクは限定されるが、上限設定の条件を確認することが重要",
  },
  {
    type: "固定型（市場連動なし）",
    description: "契約期間中は電力量単価を固定。燃料費調整額は別途変動",
    risk: "市場高騰の直接影響は受けないが、調達コスト上昇分が更新時に転嫁される",
  },
];

export default function MarketPriceReflectedInCorporateRatesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場価格の反映の仕組み</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          市場価格が法人料金に反映される仕組み
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力の卸市場であるJEPX（日本卸電力取引所）では、電力の売買が毎日行われています。この市場で形成される価格が、最終的に法人向け電気料金の請求書に反映されるまでには、いくつかの段階があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          市場連動プランを利用している場合は特に、どのような仕組みで市場価格が料金に転嫁されているかを理解しておくことが、コスト管理と契約見直しの判断に役立ちます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>JEPXスポット市場の仕組みと価格形成</li>
            <li>市場価格から請求書に至るまでの4段階の流れ</li>
            <li>プランタイプ別の市場価格の反映方法</li>
            <li>法人として把握すべきリスクの見方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            JEPXとは何か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX（Japan Electric Power Exchange）は、発電事業者と小売電気事業者が電力を売買する卸電力取引所です。2005年に設立され、電力自由化の進展とともに取引量が拡大してきました。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXには複数の市場がありますが、最も基本的なのは翌日の30分ごとの電力を取引するスポット市場です。全国を北海道・東北・東京・中部・北陸・関西・中国・四国・九州の9エリアに分けて価格が形成されます。エリア間で需給が逼迫すると「エリアプライス」が分断し、一部エリアで極端に高い価格が生じることがあります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年1月には厳寒と発電所トラブルが重なり、JEPXスポット価格が一時的に通常の数十倍に跳ね上がる事象が発生しました。この影響で多くの新電力が経営危機に陥り、一部は撤退・廃業しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            市場価格から請求書までの4つの流れ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXの市場価格が法人の請求書に反映されるまでのプロセスを段階的に確認します。
          </p>
          <div className="mt-4 space-y-4">
            {marketFlowSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {item.step}
                  </span>
                  <p className="text-sm font-semibold text-slate-900">{item.heading}</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.content}</p>
                <p className="mt-2 text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            プランタイプ別の市場価格反映方式
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格をどの程度・どのように料金に転嫁するかは、プランタイプによって大きく異なります。
          </p>
          <div className="mt-4 space-y-4">
            {marketLinkageTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.type}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                <p className="mt-1 text-xs text-slate-500">リスクの特性: {item.risk}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            プランタイプの詳細な比較は{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランと固定プランの違い
            </Link>{" "}
            をご参照ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            市場価格が高騰しやすい条件
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXスポット価格が急騰しやすい条件を知っておくことで、リスクの高い時期を事前に意識できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">冬季の寒波・夏季の猛暑</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                暖房・冷房需要が急増し、全体の需要が発電設備の供給力に近づくと価格が上昇しやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LNG・石炭の国際価格高騰</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                火力発電の限界費用が上昇することで、市場全体の価格を押し上げる効果があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">発電所の予期せぬ停止</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                大規模発電所のトラブルや定期検査が重なると、供給力が一時的に不足し価格が跳ね上がることがあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光発電の出力変動</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                曇天や日没後に太陽光発電の出力が急落すると、夕方の需要ピーク時に市場価格が急上昇するケースがあります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人として知っておくべき対応策
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランを利用している法人は、市場価格の変動に伴う料金リスクに対して以下のような対応を検討できます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold">市場価格の動向を定期的に確認：</span>
              JEPXのウェブサイトで月次・年次の価格推移を確認し、調達コストの変動傾向を把握する。
            </li>
            <li>
              <span className="font-semibold">固定プランへの切り替えを検討：</span>
              市場価格の高騰リスクを避けたい場合は、固定単価のプランへの切り替えを比較検討する。
            </li>
            <li>
              <span className="font-semibold">デマンドピーク管理：</span>
              市場価格が高い時間帯の消費を抑制することで、市場連動プランのコスト増を軽減できる場合がある。
            </li>
            <li>
              <span className="font-semibold">自家消費太陽光・蓄電池の検討：</span>
              市場価格が高い時間帯に自家発電・蓄電池からの供給を増やすことで、購入電力量と料金を抑制できる。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX市場での価格形成から法人の請求書に至るまでには、調達コストの確定、プランタイプによる転嫁方式の選択、燃料費調整額や容量市場コストとの合算という段階があります。市場連動プランを利用している場合は特に、市場価格が高騰する条件と自社の使用パターンを照らし合わせてリスクを把握することが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-procurement-affects-corporate-rates",
              title: "調達構成の違いが法人料金にどう影響するか",
              description: "電力会社の仕入れ構造と料金水準の関係。",
            },
            {
              href: "/oil-and-corporate-electricity-price",
              title: "原油価格と法人電気料金の関係",
              description: "燃料価格の波及経路と影響の見方。",
            },
            {
              href: "/fx-and-corporate-electricity-price",
              title: "為替と法人電気料金の関係",
              description: "円安が電気料金に影響する仕組みを整理。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "両プランの仕組みとリスクの差を比較。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "燃料費調整額の算定方法と変動要因。",
            },
            {
              href: "/capacity-market-and-corporate-rates",
              title: "容量市場と法人料金の関係",
              description: "容量市場の制度と今後の負担見通し。",
            },
          ]}
        />

        <ContentCta
          heading="市場連動リスクを数値で確認する"
          description="現在の契約条件と市場価格シナリオを入力して、料金の上振れリスクを試算できます。"
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
