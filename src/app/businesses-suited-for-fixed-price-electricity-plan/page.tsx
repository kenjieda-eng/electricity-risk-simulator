import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
const pageTitle =
  "固定プランが向く法人の特徴｜予算管理と安定性を重視する場合の考え方";
const pageDescription =
  "法人の電力契約で固定プランが向くのはどのような企業か。予算管理重視、利益率が低い業種、価格転嫁が難しい法人など、固定プランとの相性がよいケースを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "固定プラン 向く 法人",
    "電力 固定契約 メリット",
    "法人 電気料金 固定プラン",
    "電力契約 安定性 法人",
    "固定プラン 市場連動 どちら",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/businesses-suited-for-fixed-price-electricity-plan",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/businesses-suited-for-fixed-price-electricity-plan",
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

const suitedCharacteristics = [
  {
    heading: "予算管理の安定性を重視する法人",
    content:
      "年度予算を組む法人では、電気料金の月次変動が予算と実績の乖離を生みやすくなります。固定プランであれば、電力量料金の単価が契約期間中は一定（燃料費調整額の扱いによる変動は別途確認が必要）であるため、予算策定の精度を高めやすくなります。",
    examples: "自治体、医療法人、学校法人、社会福祉法人、上場企業（予算管理が厳格な部門）",
  },
  {
    heading: "利益率が低い業種",
    content:
      "食品スーパー、飲食業、物流業など、売上に対する利益率が低い業種では、電気料金の数%の上振れが営業利益を直接圧迫します。市場連動プランでは高騰月に想定外のコストが発生するリスクがあり、固定プランのほうが経営の見通しを立てやすくなります。",
    examples: "スーパー、飲食チェーン、物流倉庫、食品工場、小売チェーン",
  },
  {
    heading: "価格転嫁が難しい法人",
    content:
      "電気料金が上がっても、その分を製品価格やサービス料金に転嫁しにくい業種では、コスト上昇がそのまま利益減に直結します。公定価格で事業を行う医療機関や介護施設、長期契約で価格が固定されている業種は特にこの傾向が強くなります。",
    examples: "病院、介護施設、公共施設、長期受注型の製造業",
  },
  {
    heading: "電力使用量が大きい法人",
    content:
      "使用量が大きいほど、市場価格の変動が金額ベースで大きく影響します。月間使用量が数万kWhを超えるような法人では、1kWhあたり数円の変動が月額数十万円の差になることがあります。固定プランは、こうした変動リスクの絶対額を抑える効果があります。",
    examples: "大規模工場、データセンター、大型商業施設、大学キャンパス",
  },
  {
    heading: "社内説明・稟議のしやすさを重視する法人",
    content:
      "市場連動プランを選ぶ場合、「なぜ価格変動リスクを許容するのか」を社内で説明する必要があります。固定プランは「安定性を重視した選択」として社内の合意が得られやすく、稟議や経営層への説明負荷が軽減されます。",
    examples: "意思決定プロセスが複雑な大企業、合議制の自治体、理事会承認が必要な法人",
  },
];

const industryFitTable = [
  { industry: "スーパー・食品小売", fit: "高い", reason: "利益率が低く、使用量が大きい。上振れの影響が大きい。" },
  { industry: "病院・医療機関", fit: "高い", reason: "価格転嫁が困難。安定性が最優先。" },
  { industry: "介護・福祉施設", fit: "高い", reason: "公定価格の制約。予算管理が厳格。" },
  { industry: "自治体施設", fit: "高い", reason: "年度予算制。市場連動リスクの説明が困難。" },
  { industry: "物流倉庫（冷蔵）", fit: "高い", reason: "ベースロードが大きく、上振れの絶対額が大きい。" },
  { industry: "飲食チェーン", fit: "やや高い", reason: "利益率が低く、多拠点で影響が累積。" },
  { industry: "大規模工場", fit: "やや高い", reason: "使用量が非常に大きく、リスク管理が重要。" },
  { industry: "オフィスビル", fit: "中程度", reason: "使用量と利益率のバランスによる。" },
];

const faqItems = [
  { question: "固定プランが特に向いているのはどのような業種ですか？", answer: "飲食業・小売業・医療介護など、電気代の変動が損益に大きく影響する業種、年度予算を固定的に管理する自治体・学校、担当者リソースが限られている中小企業などに特に向いています。" },
  { question: "利益率が低い業種はなぜ固定プランが向いていますか？", answer: "利益率が低い業種では電気代の単価が少し上昇するだけで利益を圧迫します。固定プランは電力量料金の単価変動リスクを抑えられるため、コスト予測が立てやすく経営の安定につながります。" },
  { question: "固定プランを選ぶ際に見積で確認すべき点は何ですか？", answer: "燃料費調整額の計算方式と上限設定、容量拠出金の含有状況、契約期間と違約金条件を確認することが重要です。単価が安くても他の費目で不利になるケースがあるため総額比較が必要です。" },
];

export default function BusinessesSuitedForFixedPricePlanPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/businesses-suited-for-fixed-price-electricity-plan"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "固定プランが向く法人の特徴" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">固定プランが向く法人の特徴</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          固定プランが向く法人の特徴
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しでは、固定プランと市場連動プランのどちらを選ぶかが重要な判断ポイントになります。どちらが正解ということではなく、自社の事業特性やリスク許容度に合った選択をすることが大切です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、固定プランとの相性がよい法人の特徴を整理しています。自社がどちらに近いかを判断する材料としてご活用ください。固定プランの基本的な仕組みは{" "}
          <Link
            href="/fixed-price-plan"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            固定プランとは
          </Link>{" "}
          で確認できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>固定プランが向きやすい法人の5つの特徴</li>
            <li>業種別に見た固定プランとの相性</li>
            <li>固定プランでも確認しておきたい注意点</li>
            <li>シミュレーターでの確認ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランを検討しやすいのはどんな法人か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは、電力量料金の単価が契約期間中は一定であるため、月々の請求額の見通しが立てやすいのが特徴です。ただし、「固定」といっても燃料費調整額などの調整項目の扱いはプランや電力会社によって異なるため、完全に請求額が固定されるわけではない点に注意が必要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            以下のような特徴を持つ法人は、固定プランとの相性がよい傾向にあります。
          </p>
        </section>

        {suitedCharacteristics.map((item) => (
          <section
            key={item.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.heading}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {item.content}
            </p>
            <p className="mt-2 text-xs text-slate-500">
              代表的な業種例：{item.examples}
            </p>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別に見た固定プランとの相性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は、業種ごとの固定プランとの相性の目安です。あくまで一般的な傾向であり、個別の条件（使用量、契約電力、財務状況など）によって最適な選択は異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">業種</th>
                  <th className="p-3 text-left font-semibold text-slate-900">相性</th>
                  <th className="p-3 text-left font-semibold text-slate-900">主な理由</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {industryFitTable.map((row) => (
                  <tr key={row.industry}>
                    <td className="p-3 text-slate-700">{row.industry}</td>
                    <td className="p-3 text-slate-700">{row.fit}</td>
                    <td className="p-3 text-slate-700">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種別の詳しい見直しポイントは、{" "}
            <Link
              href="/supermarket-electricity-cost-review"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              スーパーマーケット
            </Link>
            、{" "}
            <Link
              href="/warehouse-electricity-cost-review"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              物流倉庫
            </Link>
            、{" "}
            <Link
              href="/hospital-electricity-cost-review"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              病院
            </Link>{" "}
            の各ページで確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランでも確認したい注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランを選んだとしても、以下の点は確認しておく必要があります。「固定＝完全に安心」ではなく、変動する部分を理解したうえで選ぶことが大切です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">燃料費調整額の扱い：</span>
              電力量料金は固定でも、燃料費調整額は変動するケースがある。上限の有無や算定方式を確認する。
            </li>
            <li>
              <span className="font-semibold text-slate-900">再エネ賦課金：</span>
              年度ごとに単価が改定される制度負担であり、固定プランでも変動する。
            </li>
            <li>
              <span className="font-semibold text-slate-900">容量拠出金：</span>
              固定プランの単価に含まれている場合と別途の場合がある。
            </li>
            <li>
              <span className="font-semibold text-slate-900">契約期間の拘束：</span>
              固定プランは契約期間が長い（2〜3年）場合がある。中途解約条件を確認する。
            </li>
            <li>
              <span className="font-semibold text-slate-900">市場環境の変化：</span>
              市場価格が下がった局面では、固定プランのほうが割高になる可能性がある。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の仕組みは{" "}
            <Link
              href="/fuel-cost-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額（燃調費）とは
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランが自社に合っているかを判断するには、シミュレーターで以下の観点を確認するのが有効です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>固定プランでの年間コストを試算する</li>
            <li>市場連動プランとの年間コスト差を比較する</li>
            <li>市場価格が高騰したシナリオでの上振れ幅を確認する（固定プランのメリットが明確になる）</li>
            <li>現行契約との差額を把握する</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="businesses-suited-for-fixed-price-electricity-plan" terms={["固定プラン", "市場連動プラン", "燃料費調整額", "JEPX", "基本料金"]} />
        </div>

        <SourcesAndFaq
          faq={faqItems}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自由化に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力取引監視に関する情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "市場連動リスクを慎重に考えるべきケースの整理。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "固定プランの基本的な仕組みと特徴。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気料金見直しを社内で説明するときのポイント",
              description: "固定vs市場連動の選択を社内でどう説明するか。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書で固定プランの条件を正しく比較する方法。",
            },
          ]}
        />

        <ContentCta
          heading="固定プランと市場連動プランを比較する"
          description="自社の条件で固定プランと市場連動プランの年間コスト差をシミュレーターで試算できます。判断材料の準備にご活用ください。"
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
