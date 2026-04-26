import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
const pageTitle =
  "固定プランが向く法人の特徴｜予算管理と安定性を重視する場合の考え方";
const pageDescription =
  "法人の電力契約で固定プランが向くのはどのような企業か。予算管理重視、利益率が低い業種、価格転嫁が難しい法人など、固定プランとの相性がよいケースを整理します。";
const publishedDate = "2026-04-10";

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
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/plan-types", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/plan-types"],
  },
};

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "固定価格型プランに向いている業種は具体的にどんな業種ですか？",
    answer:
      "①夕方ピーク操業の製造業（17-19 時に電力使用が集中）、②24 時間稼働のデータセンター・冷凍倉庫、③医療機関・介護施設のような電力供給安定性が必須の業種、④経営予算上、料金変動を許容できない中堅・中小企業が代表例です。共通点は「電力使用パターンが固定的」で「価格変動による経営影響が大きい」ことです。",
  },
  {
    question: "固定価格型プランの典型的な単価はいくらくらいですか？",
    answer:
      "2026 年初頭時点で、高圧（500 kW）の場合 22-28 円/kWh、低圧の場合 28-35 円/kWh が目安です。市場連動型と比較すると 2-5 円/kWh 高い水準ですが、JEPX 価格急騰時のリスク（瞬間的に 100 円/kWh 超）を回避できる安心料込みの単価と捉えるのが妥当です。",
  },
  {
    question: "固定価格型でも燃料費調整額の影響は受けますか？",
    answer:
      "受けます。固定価格型は基本料金と電力量料金の単価が固定されるだけで、燃料費調整額は LNG・原油の輸入価格に連動して毎月変動します。「上限あり固定価格型」を選択すれば、燃料費調整額にも上限が設定され、急騰時のリスクを限定できます。完全固定を求める場合は「上限あり」を必ず選択してください。",
  },
  {
    question: "固定価格型と再エネ 100% プランは併用できますか？",
    answer:
      "可能です。一部小売で「固定価格型 × 非化石証書付き」のオプション提供があります。CSR 報告書や Scope2 排出量削減を求められる企業は、固定価格型のコスト安定性 + 再エネ 100% の環境価値を両立できます。ただし通常の固定価格型より 0.5〜2 円/kWh の上乗せがあります。",
  },
  {
    question: "固定価格型の契約期間は通常何年ですか？",
    answer:
      "標準は 1〜3 年契約です。1 年契約は柔軟性が高い反面、毎年の更新交渉で単価変更リスクがあります。3 年契約は単価が固定される安心感がありますが、市場価格が下落した場合に解約違約金（基本料金の 1〜3 か月分）が発生する可能性があります。経営計画期間と整合させた選択を推奨します。",
  },
];


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
        faq={FAQ_ITEMS}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">固定プランが向く法人の特徴</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
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

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="businesses-suited-for-fixed-price-electricity-plan" terms={["固定プラン", "市場連動プラン", "燃料費調整額", "JEPX", "基本料金"]} />
        </div>

        <SourcesAndFaq
          faq={FAQ_ITEMS}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自由化に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力取引監視に関する情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
          <div className="mt-4">
            <MarketDataFaq items={FAQ_ITEMS} />
          </div>
        </section>
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
            {
              href: "/concierge",
              title: "AI コンシェルジュで関連情報を探す",
              description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
            },
          ]}
        />

        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

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
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
