import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { CDD_TREND } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import PriceIncreaseCalculator from "../../components/market-data/PriceIncreaseCalculator";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqPageJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "電気料金が上がる理由｜法人向けに主要4要因と見直しポイントを整理";
const pageDescription =
  "法人の電気料金が上がる理由は「燃料価格」「市場価格（JEPX）」「制度負担（再エネ賦課金・容量拠出金）」「契約条件」の4要因に整理できます。実データと見直し観点で徹底解説。";
const publishedDate = "2026-03-01";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 上がる 理由",
    "法人 電気料金 値上げ",
    "法人 電気代 値上がり",
    "法人 電気料金 上がる理由",
    "電気代 値上がり 要因",
    "燃料費調整額 再エネ賦課金",
    "JEPX 市場連動",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-business-electricity-prices-rise",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-business-electricity-prices-rise",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/price-increase",
        width: 1200,
        height: 630,
        alt: "法人の電気料金が上がる理由",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "2026 年現在、なぜ法人の電気料金は高止まりしているのですか？",
    answer:
      "主因は 4 つです。①LNG・原油の国際価格高騰（地政学リスク継続）、②再エネ賦課金の上昇（2026 年度 4.06 円/kWh）、③容量拠出金の本格化（2026 年度から月数十万円増）、④老朽火力廃止に伴う供給力タイト化です。これらは構造的要因のため、2030 年代まで高止まりが続く見込みです。",
  },
  {
    question: "電気料金が下がる可能性はありますか？",
    answer:
      "短期的には限定的ですが、長期的には 2030 年以降の蓄電池普及・再エネコスト低下で部分的な下落余地があります。ただし日本特有の容量市場コスト・送配電コスト・脱炭素コストは構造的に上乗せされるため、2020 年代前半の水準には戻らないと予想されます。「下がるのを待つ」のではなく「上がる前提での対策」が現実的です。",
  },
  {
    question: "燃料費調整額と容量拠出金の違いは何ですか？",
    answer:
      "燃料費調整額は LNG・原油・石炭の輸入価格に連動して毎月変動する項目で、燃料の上下で増減します。容量拠出金は将来の供給力（kW）を確保するための費用で、2024 年度から徴収開始、2026 年度から本格化します。両者は別々に電気料金に上乗せされ、合計で月数万〜数十万円の影響額となります。",
  },
  {
    question: "業界平均と比べて自社の電気料金が高いか確認する方法はありますか？",
    answer:
      "本サイトの「業界別電気代ベンチマーク」記事で業種別の平均単価が確認できます。例: 製造業（高圧）は 22-28 円/kWh、オフィスビルは 25-30 円/kWh、データセンターは 18-22 円/kWh が 2026 年初頭の目安です。自社単価が業界平均を 10% 以上上回る場合、契約見直しで削減余地がある可能性が高いです。",
  },
  {
    question: "再生可能エネルギー賦課金は今後さらに上がりますか？",
    answer:
      "上昇トレンドは続くと予想されます。2024 年度 3.49 円/kWh → 2025 年度 3.98 円/kWh → 2026 年度 4.06 円/kWh と上昇しており、2030 年度頃に 4.5〜5.0 円/kWh のピークを迎える見込みです。FIT 買取期間終了後は段階的に低下しますが、2030 年代後半までは高水準で推移します。",
  },
];


export default function WhyBusinessElectricityPricesRisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "料金が上がる理由を知る", url: "https://simulator.eic-jp.org/articles/price-increase" },
          { name: "法人の電気料金が上がる理由" },
        ]}
      />
      <FaqPageJsonLd faqs={FAQ_ITEMS} />

      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金が上がる理由｜法人向け主要4要因
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong className="font-semibold text-slate-900">法人の電気料金が上がる理由</strong>は、①燃料価格（LNG・原油・石炭）②市場価格（JEPX）③制度負担（再エネ賦課金・容量拠出金）④契約条件（使用量・契約電力）の4要因に分解できます。値上げ通知や請求増に直面したときは、この4要因のどれが効いているかを切り分けることが、正しい見直し判断の出発点です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人の電気料金が上がる4要因をそれぞれ実データで整理し、各要因が「いつ・どの程度」請求額に反映されるか、
          見直し時に確認すべき観点とあわせて解説します。
        </p>
      </header>


      <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
        📌 値上げ・推移クラスターの全体像は{" "}
        <Link href="/business-electricity-price-hike-reasons-2026" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
          2026年法人電気料金の値上げ理由
        </Link>
        （Pillar A = 最新性軸）と{" "}
        <Link href="/business-electricity-price-trend-10-years" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
          法人電気料金の10年推移
        </Link>
        （Pillar B = データ系軸）を参照してください。
      </div>
      <TableOfContents />
      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金はなぜ変動するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金は、毎月まったく同じ条件で決まるわけではありません。請求額は、使用量だけでなく、契約プラン、燃料価格、
            卸市場価格、制度上の上乗せ項目など、複数の要素で決まります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            前月より使用量があまり変わっていなくても請求額が増えることがある一方、使用量が増えているのに単価が下がるケースもあります。
            請求額の変化は、単一要因で判断しない視点が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料価格の上昇が電気料金に影響する理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力供給では、火力発電が今も重要な役割を担っています。火力発電に使うLNG、石炭、原油などの価格が上がると、
            発電コストも上がり、その影響が電気料金に波及します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特に日本は燃料の多くを輸入に頼っているため、海外市況の影響を受けやすい構造です。上流のエネルギーコスト上昇が、
            法人の請求額増加につながるケースは少なくありません。背景構造は{" "}
            <Link href="/lng-electricity-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              LNGと電気料金の解説
            </Link>
            でも確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG・原油・石炭・為替の影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金に影響する燃料は一つではありません。LNG、原油、石炭など、それぞれの国際価格が変動し、それが電力コストに反映されます。
            なかでもLNGは、日本の電力料金との関係が深い燃料の一つです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに見落としにくいのが為替です。同じ燃料価格でも、円安が進むと日本円ベースの輸入コストは上がります。
            国際市況と為替の両方を見ることが、請求額変化の理解につながります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格（JEPX）と契約プランの影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇は、燃料価格だけで決まるわけではありません。<Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動型プラン</Link>では、<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link>などの卸電力市場価格の変動が料金に反映されやすくなります。
            需給が逼迫した時間帯や季節には、市場価格の上昇が請求額へ波及することがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方、固定型プランでも契約更新時や条件変更時に価格条件が見直される場合があります。契約タイプの違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動型と固定型の比較ページ
            </Link>
            で整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額や制度要因の影響</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金には、使用量や契約単価以外にも制度的な項目が上乗せされます。代表的なのが<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>や<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>、そして2024年度から転嫁が始まった<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>です。
            これらは総額に直接影響するため、請求額が増えた際は単価以外の変化も確認する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の仕組みは{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説ページ
            </Link>
            で詳しく整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量や契約条件によって請求額が上がるケース</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金が上がる理由は、外部要因だけではありません。自社側の使い方や契約条件が原因で請求額が増えるケースもあります。
            例えば、空調負荷の増加、稼働時間の延長、生産量の増加、ピーク時間帯への使用集中、契約電力の上昇などです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約内容が現在の使用実態に合っていない場合、必要以上にコストを負担していることもあります。市況要因と自社運用要因の両方を分けて見ることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が見直し時に確認したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金を見直すときは、安い単価を探すだけでは不十分です。まずは請求額が上がっている理由を切り分けることが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量が増えているのか</li>
            <li>契約単価が上がっているのか</li>
            <li>燃料費調整額の影響が大きいのか</li>
            <li>再エネ賦課金など制度項目が増えているのか</li>
            <li>市場連動型の影響を受けているのか</li>
            <li>契約条件が自社の実態に合っているか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">気候変動による構造的な需要変化</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            温暖化による冷房需要の増加（CDD: 東京+24%, 名古屋+40%）は、夏のピーク電力を構造的に押し上げ、JEPX卸価格の上昇要因になっています。猛暑日の増加（東京: 1990年代21日→2020年代101日）は、電力需給逼迫のリスクを高め、法人電気料金の上振れ要因として長期的に作用します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">都市</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">1995〜99年CDD</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">2020〜24年CDD</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">増加率</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {CDD_TREND.map((row, i) => (
                  <tr key={row.cityJa} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{row.cityJa}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{row.cdd1995_99}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{row.cdd2020_24}</td>
                    <td className="border border-slate-200 p-3 text-right font-semibold text-rose-600">+{row.changePercent}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※CDD（冷房度日）: 基準温度22℃を超えた日の積算値。出典: 気象庁過去の気象データ（1995〜2024年）を集計。
          </p>
        </section>

        
      <MarketDataDownload
        apiPath="/api/datasets/weather"
        caption="気温・気象データ（CC BY 4.0、商用利用可）"
      />
      <PriceIncreaseCalculator />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="why-business-electricity-prices-rise" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "託送料金", "市場連動プラン", "固定プラン", "JEPX"]} />
        </div>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
          <div className="mt-4">
            <MarketDataFaq items={FAQ_ITEMS} />
          </div>
        </section>
        <RelatedLinks
          heading="次に確認したいページ"
          intro="「なぜ上がるか」を押さえたら、上がり幅・制度費目・長期推移・年次データへ進むと説明が具体化しやすくなります。"
          links={[
            { href: "/business-electricity-price-hike-reasons-2026", title: "2026年法人電気料金の値上げ理由（Pillar A）", description: "最新性軸で 2026 年の値上げ要因 5 軸を分解した起点記事。" },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどの程度上がるのか",
              description: "単価改定と調整項目を分けて、上がり幅の見方を整理できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因として請求に乗る賦課金の位置づけを確認できます。",
            },
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の10年推移",
              description: "長期の転換点と高止まりを、区分別に位置づけられます。",
            },
            {
              href: "/business-electricity-retrospective",
              title: "法人電気料金振り返り",
              description: "月次・年次の実データから、直近の動きを補完できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "燃調費が請求に反映される流れを個別に深掘りできます。",
            },
            {
              href: "/concierge",
              title: "AI コンシェルジュで関連情報を探す",
              description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
            },
            {
              href: "/articles/basic",
              title: "法人電気料金の基礎知識",
              description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。",
            },
          ]}
        />

        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

        <ContentCta
          heading="実際に比較して確認する"
          description="原因を切り分けた後は、現行契約と候補条件を同じ前提で比較することで、見直し方針を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">上昇要因をさらに個別に確認する</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            料金上昇の背景にある個別要因を、それぞれのページで詳しく確認できます。
          </p>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/capacity-contribution-explained" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">容量拠出金とは</span>
              <span className="ml-2 text-slate-600">— 2024年度から始まった新たな制度負担</span>
            </Link>
            <Link href="/market-price-adjustment" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">市場価格調整額とは</span>
              <span className="ml-2 text-slate-600">— 市場連動型で発生する調整項目</span>
            </Link>
            <Link href="/impact-of-electricity-subsidy-ending" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">補助金終了の影響</span>
              <span className="ml-2 text-slate-600">— 補助縮小後の請求額の変化</span>
            </Link>
            <Link href="/why-market-linked-electricity-prices-rise" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">市場連動プランで上がる仕組み</span>
              <span className="ml-2 text-slate-600">— 市場連動特有の上昇パターン</span>
            </Link>
            <Link href="/why-business-electricity-bills-rise-suddenly" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">なぜ急に上がるのか</span>
              <span className="ml-2 text-slate-600">— ある月から請求が急増する理由</span>
            </Link>
            <Link href="/when-business-electricity-price-increases-start" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">値上げはいつから反映されるか</span>
              <span className="ml-2 text-slate-600">— 検針月・契約更新との関係</span>
            </Link>
            <Link href="/lng-electricity-price" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">LNGと電気料金の関係</span>
              <span className="ml-2 text-slate-600">— LNG市場の動きが法人料金に波及する背景</span>
            </Link>
            <Link href="/power-procurement-adjustment-fee" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">電源調達調整費とは</span>
              <span className="ml-2 text-slate-600">— 燃調費との違いと見積比較での確認</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="why-business-electricity-prices-rise" />
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
