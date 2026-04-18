import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
const pageTitle =
  "市場連動プランが向かない法人の特徴｜価格変動リスクを踏まえた判断ポイント";
const pageDescription =
  "市場連動プランを慎重に検討すべき法人の特徴を解説。予算管理重視、利益率が低い、価格転嫁が難しいなど、市場連動リスクの影響が大きいケースを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場連動プラン 向かない",
    "市場連動 電気料金 リスク",
    "法人 電力 市場連動 注意",
    "市場連動プラン デメリット 法人",
    "電力契約 市場連動 やめたほうがいい",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/businesses-not-suited-for-market-linked-electricity-plan",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/businesses-not-suited-for-market-linked-electricity-plan",
    siteName: "法人電気料金ナビ",
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

const notSuitedCharacteristics = [
  {
    heading: "予算管理を厳格に行う法人",
    content:
      "年度予算や月次予算の精度が求められる法人では、市場連動プランによる月ごとの請求額変動が予算管理の負担を増やします。予算と実績の乖離が頻繁に発生すると、経理部門への報告負担が増え、予備費の確保も必要になります。",
    impact: "予算超過が繰り返されると、他の経費項目の圧縮や追加承認の手続きが発生する。",
  },
  {
    heading: "利益率が低い業種",
    content:
      "営業利益率が数%程度の業種では、電気料金の数%の上振れが利益を大きく削る可能性があります。市場価格が高騰した月は想定外のコスト増となり、月次決算に直接影響します。",
    impact: "売上増で吸収できない規模のコスト増が、四半期・年度の利益計画を狂わせることがある。",
  },
  {
    heading: "価格転嫁が困難な法人",
    content:
      "電気料金が上がっても、その分を製品価格やサービス料金に転嫁しにくい業種は、コスト上昇をそのまま利益減として受け止めなければなりません。医療報酬や介護報酬など公定価格で事業を行う法人、長期契約で売価が固定されている製造業などが該当します。",
    impact: "コスト増分を吸収する手段が限られるため、固定プランによるリスク回避の意味が大きくなる。",
  },
  {
    heading: "電力使用量が非常に大きい法人",
    content:
      "月間使用量が大きい法人ほど、市場価格の変動が金額ベースで大きな影響を与えます。市場価格が1kWhあたり数円上がるだけで、月額数十万〜数百万円の差が出ることがあります。",
    impact: "高騰時の影響額が大きいため、想定外のコスト増への備えが必要になる。",
  },
  {
    heading: "市場連動リスクを社内で説明しにくい法人",
    content:
      "市場連動プランを選択する場合、「なぜ価格変動リスクを許容するのか」「高騰時にどう対処するのか」を社内で説明する必要があります。意思決定プロセスが複雑な大企業や、合議制の自治体、理事会承認が必要な法人では、この説明負荷が選択のハードルになります。",
    impact: "導入後に市場が高騰した場合、「なぜ市場連動を選んだのか」の責任論になりやすい。",
  },
  {
    heading: "24時間稼働でベースロードが大きい法人",
    content:
      "病院、データセンター、冷蔵倉庫、連続操業工場など、24時間稼働でベースロードが大きい法人は、夜間の安値メリットを一定程度得られる場合がありますが、昼間の高値帯の影響も大きく受けます。特に需給逼迫時の価格高騰は昼間に集中するため、リスクの絶対額が大きくなります。",
    impact: "年間を通じてのリスク管理が必要であり、固定プランでの安定確保が優先されるケースが多い。",
  },
];

const faqItems = [
  { question: "市場連動プランが向かないのはどのような法人ですか？", answer: "年間予算を固定的に管理したい法人、電気代変動が損益に直結する業種（飲食・小売・医療など）、月次モニタリング体制がない法人、社内説明で変動理由を毎月説明するリソースがない組織は特に慎重に検討すべきです。" },
  { question: "市場連動プランのリスクは具体的にどのくらいですか？", answer: "JEPXの年度平均価格はFY2019の約8円/kWhからFY2022には約20円/kWhまで上昇しました。使用量100万kWh/年の法人では、この変動だけで年間コストが1,200万円以上増加する計算になります。" },
  { question: "既に市場連動プランに加入しているがリスクが心配です。どうすればよいですか？", answer: "まず契約書の解約条件・通知期限・違約金を確認します。次の更新タイミングで固定プランへの切替を検討するか、電力使用量の削減・使用時間帯のシフトでリスクを軽減する対応が有効です。" },
];

export default function BusinessesNotSuitedForMarketLinkedPlanPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/businesses-not-suited-for-market-linked-electricity-plan"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "市場連動プランが向かない法人の特徴" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場連動が向かない法人の特徴</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          市場連動プランが向かない法人の特徴
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場連動プランは、市場価格が安定している局面ではコストメリットが出る可能性がある一方、高騰時には想定を大きく上回る請求が発生するリスクがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          「市場連動が向かない」とは「絶対に選ぶべきでない」ということではなく、「慎重に検討すべき条件がある」という意味です。このページでは、市場連動プランのリスクが特に大きく影響しやすい法人の特徴を整理しています。市場連動プランの仕組みは{" "}
          <Link
            href="/market-linked-plan"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            市場連動プランとは
          </Link>{" "}
          で確認できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>市場連動プランを慎重に考えたい法人の特徴</li>
            <li>価格変動が経営に与える影響の考え方</li>
            <li>向かないケースとして考えやすい業種</li>
            <li>例外的に検討余地があるケース</li>
            <li>シミュレーターでの確認ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            市場連動プランを慎重に考えたい法人とは
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは、JEPXのスポット価格に連動して電力量料金が変動する契約です。市場が安定していれば固定プランより安くなる月が出ることもありますが、需給逼迫や燃料高騰で市場価格が急騰した場合、月額の請求が通常の数倍になるリスクがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            以下のような特徴を持つ法人は、市場連動プランのリスクが事業に与える影響が大きいため、慎重な検討が必要です。
          </p>
        </section>

        {notSuitedCharacteristics.map((item) => (
          <section
            key={item.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.heading}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {item.content}
            </p>
            <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-3">
              <p className="text-sm text-amber-900">
                <span className="font-semibold">影響：</span>{item.impact}
              </p>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            向かないケースとして考えやすい業種
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            上記の特徴を複数持つ業種は、市場連動プランとの相性が低い傾向にあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">特に慎重に検討したい業種</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>病院・医療機関（価格転嫁困難＋24時間稼働）</li>
                <li>介護・福祉施設（公定価格＋安定性重視）</li>
                <li>食品スーパー（低利益率＋大量使用）</li>
                <li>冷蔵・冷凍倉庫（大量のベースロード）</li>
                <li>自治体施設（年度予算制＋説明責任）</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">慎重に条件を確認したい業種</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>飲食チェーン（低利益率＋多拠点）</li>
                <li>大規模工場（大量使用＋上振れの絶対額大）</li>
                <li>学校法人（年度予算制）</li>
                <li>公共施設（議会・住民への説明責任）</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            例外的に検討余地があるケース
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            上記に当てはまる法人でも、以下のような条件が揃う場合は市場連動プランの検討余地が出てくることがあります。ただし、いずれも事前の十分な検討とリスク管理体制の構築が前提です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">高騰時の上限条項がある契約：</span>
              一定の市場価格を超えた場合に上限が設定されているプラン（キャップ付き市場連動）であれば、上振れリスクを限定できる。
            </li>
            <li>
              <span className="font-semibold text-slate-900">固定と市場連動の併用：</span>
              複数拠点や複数契約を持つ法人が、一部を市場連動にすることでポートフォリオとしてリスクを分散する考え方。
            </li>
            <li>
              <span className="font-semibold text-slate-900">十分な財務余力がある法人：</span>
              上振れリスクを吸収できる財務基盤がある場合、中長期での平均コスト低減を狙う判断もあり得る。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較時に確認したいポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランと固定プランを比較する際は、以下の観点を確認してください。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>固定プランとの年間コスト差（平常時と高騰時の両方で）</li>
            <li>過去の市場高騰月（2022年冬など）で試算した場合の上振れ幅</li>
            <li>上限条項の有無（キャップの設定水準）</li>
            <li>契約期間と途中での契約変更の可否</li>
            <li>市場連動を選んだ場合の社内説明のしやすさ</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            両プランの違いの全体像は{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランと固定プランの違い
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランが自社に合わないかどうかを判断するには、シミュレーターで以下を確認するのが有効です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場連動プランでの年間コストと最大上振れ幅を試算する</li>
            <li>固定プランとのコスト差を確認する</li>
            <li>高騰シナリオ（猛暑・厳冬・燃料高騰）での影響額を把握する</li>
            <li>上振れ幅が自社の利益率に対してどの程度のインパクトがあるかを確認する</li>
          </ul>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="businesses-not-suited-for-market-linked-electricity-plan" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "燃料費調整額"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場価格データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度に関する情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向く理由。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場連動プランの仕組みと特徴を基礎から理解。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "安定性重視の医療施設における契約見直し。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "低利益率の商業施設の見直しの考え方。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気料金見直しを社内で説明するときのポイント",
              description: "市場連動リスクを社内でどう伝えるか。",
            },
          ]}
        />

        <ContentCta
          heading="市場連動リスクをシミュレーターで確認する"
          description="市場連動プランでの上振れ幅や固定プランとの差額を、自社の条件でシミュレーションできます。判断材料としてご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
