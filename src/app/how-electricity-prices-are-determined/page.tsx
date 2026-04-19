import type { Metadata } from "next";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import JepxYearlySystemPriceChart from "../../components/articles/JepxYearlySystemPriceChart";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/businessElectricityTrendHubData";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "電気の価格はどう決まるのか｜JEPX価格の決まり方";
const pageDescription =
  "JEPX価格は、需要と供給だけでなく、天候、時間帯、燃料価格、発電構成、需給逼迫など複数要因で動きます。電気の価格がどのように決まり、なぜ大きく変動することがあるのかを整理します。";
const pageUrl = "https://simulator.eic-jp.org/how-electricity-prices-are-determined";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "JEPX"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/power-procurement",
        width: 1200,
        height: 630,
        alt: "電気の価格はどう決まるのか",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/power-procurement"],
  },
};

const faq = [
  { question: "JEPXの電気の価格はどのように決まりますか？", answer: "JEPX価格は需給バランスを基本に、再エネ出力、火力の稼働状況、燃料価格、系統制約が複合的に影響して決まります。需要が供給余力に対して逼迫するほど価格は上がりやすく、30分単位で同時同量を合わせる必要があるため「その時間帯の厳しさ」に敏感に反応します。" },
  { question: "時間帯や天候で電気の価格が変わるのはなぜですか？", answer: "夏冬の昼夕方は冷暖房需要で価格が上がりやすくなります。特に太陽光が落ち始める夕方は、需要が高いまま再エネ出力が低下し火力で埋める比率が高まるため高値になります。逆に、需要が低く再エネ出力が高い時間帯は価格が落ち着きます。" },
  { question: "燃料価格の上昇はJEPX価格にどう影響しますか？", answer: "日本では火力発電が需給調整の中心を担う場面が多いため、LNGや石炭などの燃料価格上昇は市場価格の上昇圧力になります。ただし、需要水準・再エネ出力・使える火力の量・系統状況が同時に影響するため、燃料高だけで価格が決まるわけではありません。" },
];

export default function HowElectricityPricesAreDeterminedPage() {
  const factorRows = [
    {
      factor: "需要の増加",
      direction: "上がりやすい",
      scene: "猛暑・厳冬、平日昼間、操業増などで使用量が膨らむ場面",
    },
    {
      factor: "再エネ出力の低下",
      direction: "上がりやすい",
      scene: "日射が弱い、風が弱い、夕方に太陽光が落ちる場面",
    },
    {
      factor: "燃料価格の上昇",
      direction: "上がりやすい",
      scene: "LNGや石炭など火力燃料の調達コストが上がる場面",
    },
    {
      factor: "発電設備の停止・供給余力低下",
      direction: "上がりやすい",
      scene: "定期点検、トラブル、需給ひっ迫で使える電源が少ない場面",
    },
    {
      factor: "系統制約・エリア差",
      direction: "エリアごとに差が出やすい",
      scene: "送電制約やエリア間連系の限界で地域別の価格差が広がる場面",
    },
    {
      factor: "需要が弱く供給余力がある",
      direction: "下がりやすい",
      scene: "中間期、需要が落ち着き再エネ出力も高い場面",
    },
  ];

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-03-12"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力調達の仕組みを知る", url: "https://simulator.eic-jp.org/articles/power-procurement" },
          { name: "電気の価格はどう決まるのか" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電気の価格はどう決まるのか｜JEPX価格の決まり方</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPXの価格は、「電気の相場」として一言で語られることがあります。ただ、実際には、単純に需要と供給だけで決まっているわけではありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          暑い日や寒い日には需要が増えやすく、太陽光や風力の発電量が変われば供給側の条件も変わります。そこに火力発電の燃料価格、
          時間帯ごとの需要差、設備の稼働状況、送電制約などが重なることで、電気の価格は大きく動くことがあります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX価格は何で決まるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本は需給のバランスです。需要が強く、すぐ使える供給余力が小さいほど価格は上がりやすく、余力があるほど価格は落ち着きやすくなります。
            ただし、電気は保存が難しく、30分単位で同時同量を合わせる必要があるため、価格は平均値よりも「その時間帯の厳しさ」に反応しやすい特徴があります。
          </p>
          <InfoBox title="読み方のコツ">
            「今日は高いのか」を考えるときは、需要、再エネ出力、火力の稼働状況、燃料、系統制約が同じ方向に重なっていないかを見ると背景がつかみやすくなります。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需要と供給だけでは見えない要因</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            需給だけを見ると抽象的になりがちですが、実際には「どの需要が増えたのか」「どの電源が使いにくかったのか」で価格の上がり方は変わります。
            同じ需要増でも、再エネがよく出ている日と、火力依存が強まる日では価格の出方が異なります。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <InfoBox title="短期要因">
              気温、天候、曜日、時間帯、再エネ出力の変化など、その日その時間に効く要因です。
            </InfoBox>
            <InfoBox title="中期要因">
              燃料価格、火力の運転条件、需給見通し、供給余力の水準など、しばらく続く前提条件です。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">時間帯と天候で価格が変わる理由</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            夏冬の昼夕方は冷暖房需要が膨らみやすく、価格が上がりやすい時間帯です。特に太陽光が落ち始める夕方は、需要が高いまま再エネ出力が低下し、
            火力で埋める比率が高まりやすくなります。逆に需要が低く再エネ出力が高い時間帯は、価格が落ち着くことがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料価格と発電構成の影響</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本では火力発電が需給調整の中心を担う場面が多いため、LNGや石炭などの燃料価格が上がると、火力の発電コストが上昇し、
            結果として市場価格の上昇圧力になります。どの電源がその時間帯の追加供給を担うかで、価格の重みづけも変わります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ここは「燃料価格が上がれば必ず同じ幅でJEPXが上がる」という単純な話ではありません。需要水準、再エネ出力、使える火力の量、
            系統状況が同時に影響するため、燃料高は価格形成の重要な要因の一つとして見るのが実務的です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">価格変動要因の整理表</h2>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">要因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">価格が動きやすい方向</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">どういう場面で起こるか</th>
              </tr>
            </thead>
            <tbody>
              {factorRows.map((row) => (
                <tr key={row.factor} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.factor}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.direction}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.scene}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需給逼迫や系統制約が価格に与える影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需給が逼迫すると、わずかな需給差でも価格が大きく動きやすくなります。また、送電線の制約やエリア間連系の余力が限られると、
            地域ごとの価格差が開くことがあります。法人の読者にとっては、「全国で同じ値動き」とは限らない点を押さえておくと理解しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX価格の推移を見ると何が分かるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下のグラフは、JEPXスポット市場のシステムプライス年度平均の推移です。短期高騰の山谷をそのまま示すものではありませんが、
            2021年以降に価格変動が大きくなったことや、2022年度の高止まりが市場環境に与えた影響を読み取る補助線になります。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <JepxYearlySystemPriceChart data={JEPX_SYSTEM_PRICE_YEARLY} />
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            出典: JEPX公開値ベースのシステムプライス年度平均。単位は円/kWh。図は説明用に年度平均へ整理したもので、短期の高騰局面は別途日次・月次で確認が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX価格を見るときの読み方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「なぜ今日は高いのか」を考えるときは、単に需要増だけでなく、燃料、再エネ、供給余力、エリア差を重ねて見ることが大切です。
            市場連動メニューではこの変動が直接見えやすく、固定型でも更新時の調達条件に反映されることがあります。
          </p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org", description: "スポット市場のシステムプライス・エリアプライスの公表データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力需給・燃料価格・発電構成に関するデータ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・系統制約・連系線情報" },
          ]}
          publishedAt="2026-03-12"
        />

        <RelatedLinks
          heading="関連ページ"
          intro="価格形成の背景を押さえたら、燃料調達や市場以外の調達手段に進むと理解が深まります。"
          links={[
            {
              href: "/jepx-explained",
              title: "JEPXとは何か｜卸電力市場の仕組み",
              description: "価格形成の前提となる卸電力市場の基本を解説します。",
            },
            {
              href: "/fuel-procurement-and-electricity-prices",
              title: "燃料調達と電力調達はどうつながっているのか｜LNG・石炭・原油価格の影響",
              description: "燃料高が市場価格へどう波及するかを掘り下げます。",
            },
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "市場価格以外で条件を持つ調達手段を確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格が料金へ反映される契約を実務目線で見直します。",
            },
          ]}
        />

        <ContentCta
          heading="背景理解を次の記事へつなげる"
          description="価格形成が見えたら、市場依存を下げる相対契約や、燃料価格の影響を補う燃料調達の記事へ進むと全体像がつながります。"
          links={[
            { href: "/fuel-procurement-and-electricity-prices", label: "燃料調達との関係を見る" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav
          currentSlug="how-electricity-prices-are-determined"
          extraLinks={[{ href: "/fuel-procurement-and-electricity-prices", title: "燃料調達との関係も読む" }]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="how-electricity-prices-are-determined" />
      </div>
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
