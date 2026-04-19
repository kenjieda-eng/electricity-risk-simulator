import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import { JEPX_YEARLY_SUMMARY } from "../../data/jepxData";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "JEPXとは｜卸電力市場の仕組み・価格推移・法人料金への影響を徹底解説";
const pageDescription =
  "JEPX（日本卸電力取引所）の仕組み、一日前市場・時間前市場の役割、2016〜2025年度のシステムプライス推移、電力会社の調達実務、法人料金への影響を、グラフと過去データで詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/jepx-explained";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX",
    "JEPX とは",
    "日本卸電力取引所",
    "卸電力市場",
    "一日前市場",
    "時間前市場",
    "JEPX 推移",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faq = [
  { question: "JEPXとは何ですか？", answer: "JEPX（日本卸電力取引所）は、発電事業者と小売電気事業者などが電気を売買する日本唯一の卸電力市場です。2003年に設立され、30分単位の電気を取引対象とし、年間3,000〜4,000億kWh規模の取引が行われています。" },
  { question: "JEPXの一日前市場と時間前市場の違いは何ですか？", answer: "一日前市場（スポット市場）は翌日の30分単位の電気を前日に売買する市場で、主な調達量の確保に使われます。時間前市場は当日に需要予測や発電計画のずれを修正するための市場で、天候急変などへの追加調整に使われます。" },
  { question: "JEPXの価格が法人の電気料金にどう影響しますか？", answer: "市場連動プランでは JEPX 価格が直接請求単価に反映されます。固定単価プランでも、電力会社の調達コストとして間接的に影響し、契約更新時の単価に反映されることがあります。2022年度にはJEPX年度平均が20円/kWhを超え、多くの法人で料金が上昇しました。" },
];

export default function JepxExplainedPage() {
  const marketRows = [
    {
      market: "一日前市場（スポット市場）",
      timing: "受渡前日に翌日の30分単位を売買するとき",
      adjust: "翌日の需要見込みに対する主な調達量",
      usage: "不足見込みを前日に埋める、余剰見込みを売却する",
    },
    {
      market: "時間前市場",
      timing: "当日に需要予測や発電計画のずれを修正するとき",
      adjust: "当日発生した過不足や見込み差",
      usage: "天候急変や需要変動を受けた追加調整",
    },
  ];

  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-03-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力調達の仕組みを知る", url: "https://simulator.eic-jp.org/articles/power-procurement" },
          { name: "JEPXとは何か" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPXとは何か｜卸電力市場の仕組み</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX（日本卸電力取引所）は、発電事業者や小売電気事業者などが電気を売買する日本唯一の卸電力市場です。
          2003 年に設立され、電力自由化の拡大とともに日本の電力取引の中核機能を担っています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、JEPX の基本機能、一日前市場・時間前市場の役割、2016 年以降の価格推移、
          電力会社の調達実務、そして法人料金への波及までを、実データとグラフで整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX（Japan Electric Power Exchange、日本卸電力取引所）は、発電事業者と小売電気事業者などが電気を売買する市場です。
            電気は大量にためておきにくく、受渡時刻ごとに需給を合わせる必要があるため、卸市場は調達実務の中核的な機能を持ちます。
          </p>
          <InfoBox title="ここで押さえたい前提">
            小売電気事業者が必要量のすべてをJEPXだけで調達するわけではありません。相対契約や自社電源などと併用しつつ、
            JEPXを短中期の調整弁として使う見方が基本です。
          </InfoBox>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>設立：2003 年（2005 年に本格運営開始）</li>
            <li>取引主体：旧一般電気事業者、新電力、発電事業者、卸専門会社など</li>
            <li>取引対象：30 分単位の電気（受渡し日時指定）</li>
            <li>取引量：年間 3,000〜4,000 億 kWh 規模（日本の年間電力需要の約 35〜40%）</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2016〜2025年度のシステムプライス推移</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX の価格動向は、法人の電気料金の背景を読む上で最も重要な指標の一つです。
            2016 年度以降の年度平均システムプライスは次のように推移してきました。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#2563eb",
                  fillColor: "rgba(37,99,235,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 日本卸電力取引所（JEPX）公表値。2022 年度は 20.37 円/kWh と過去最高。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一日前市場と時間前市場の基本</h2>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">市場名</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">いつ使うか</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">何を調整するか</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な使い方</th>
              </tr>
            </thead>
            <tbody>
              {marketRows.map((row) => (
                <tr key={row.market} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.market}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.timing}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.adjust}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">価格はどう決まるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX スポット市場の価格は、売り入札と買い入札を束ねて作られる需給曲線の交点（ブラインド・シングルプライス方式）で決まります。
            時間帯（30 分コマ）ごとに全国一律の「システムプライス」が決まり、
            送電制約が発生した時間帯はエリアごとに「エリアプライス」が分離します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">システムプライス</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">送電制約がない場合の全国一律価格。市場の基準価格。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">エリアプライス</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                北海道・東北・東京・中部・北陸・関西・中国・四国・九州の 9 エリアごとの価格。送電制約がある時間帯に分離する。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社はJEPXをどんな場面で使うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            典型的には、翌日の需要に対して不足しそうな量を一日前市場で確保し、当日になって気温や再エネ出力が変わった場合に時間前市場で微調整します。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="卸市場が調達全体のどこに位置するか"
              steps={[
                { title: "1. ベース調達", description: "自社発電、相対契約、長期契約などで基礎量を確保する" },
                { title: "2. 翌日計画", description: "需要見込みに対して一日前市場で不足や余剰を調整する" },
                { title: "3. 当日修正", description: "時間前市場で天候や需要変動によるずれを微調整する" },
                { title: "4. 小売供給", description: "最終的な調達コストと需給バランスが料金設計の背景になる" },
              ]}
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXだけで仕入れるわけではない理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXは柔軟性が高い反面、需給が引き締まった局面では価格が大きく動きます。
            2021年1月、2022年度の状況では、全量を市場に依存していた新電力の多くが経営危機に陥りました。
            そのため、多くの電力会社は市場の機動性を活かしつつ、市場依存度が高くなりすぎないよう調達ポートフォリオを設計しています。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <InfoBox title="JEPXの強み">
              需要予測との差分を埋めやすく、価格シグナルが見えるため、短期調達には欠かせない手段です。
            </InfoBox>
            <InfoBox title="JEPXの限界">
              市場価格が急騰した局面では、柔軟性の高さがそのままコスト変動の大きさにもつながります。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXの市場規模</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FY2025のコマあたり平均約定量は<strong>1,624万kWh</strong>、年間総約定量は<strong>約2,845億kWh</strong>に達しています。
            FY2010の31万kWh/コマから<strong>50倍超</strong>に成長しており、電力小売自由化以降、JEPXの約定量は急増し、
            市場の流動性と価格発見機能が大幅に向上しました。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">コマ平均約定量</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-900">年度平均価格</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主なトピック</th>
                </tr>
              </thead>
              <tbody>
                {[2010, 2016, 2019, 2022, 2025].map((fy) => {
                  const row = JEPX_YEARLY_SUMMARY.find((r) => r.fy === fy)!;
                  const topics: Record<number, string> = {
                    2010: "市場黎明期",
                    2016: "電力小売全面自由化",
                    2019: "過去最安値（7.93円）",
                    2022: "ウクライナ危機・過去最高値（20.41円）",
                    2025: "約定量50倍超・安定化傾向",
                  };
                  return (
                    <tr key={fy} className={fy === 2022 ? "bg-red-50" : fy === 2025 ? "bg-sky-50" : "odd:bg-white even:bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{fy}年度</td>
                      <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{(row.avgVolume / 10000).toFixed(0)}万kWh/コマ</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right font-semibold ${fy === 2022 ? "text-red-700" : fy === 2019 ? "text-green-700" : "text-slate-700"}`}>
                        {row.avg.toFixed(2)}円/kWh
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{topics[fy]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">出典: 日本卸電力取引所（JEPX）公表データを集計。</p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">もっと深く知りたい方へ</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/jepx-spot-market-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                JEPXスポット市場の価格推移｜2016〜2025年度の年度別詳細
              </Link>
            </li>
            <li>
              <Link href="/jepx-price-volatility" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                JEPX価格変動の要因｜需給・燃料・再エネ出力の影響
              </Link>
            </li>
            <li>
              <Link href="/jepx-business-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                JEPXが法人の電気料金に与える影響｜調達経路別の波及を整理
              </Link>
            </li>
          </ul>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org", description: "スポット市場・時間前市場の取引データ・約定結果" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力市場制度・卸電力市場の概要" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "卸電力市場の監視・分析レポート" },
          ]}
          publishedAt="2026-03-11"
        />

        <RelatedLinks
          heading="関連ページ"
          intro="JEPXの仕組みを押さえたら、次は価格形成と市場以外の調達手段を見ると全体像がつながります。"
          links={[
            {
              href: "/how-electricity-prices-are-determined",
              title: "電気の価格はどう決まるのか｜JEPX価格の決まり方",
              description: "JEPX価格がなぜ時間帯ごとに動くのかを掘り下げます。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力会社の仕入れの全体像",
              description: "市場が調達全体のどこに位置するかを入口から確認できます。",
            },
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "市場以外の調達ルートがなぜ必要かを確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "JEPX価格が料金メニューへどう波及するかを整理します。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "JEPX連動の請求反映方法。",
            },
          ]}
        />

        <ContentCta
          heading="次のステップ"
          description="JEPXの次は価格形成を見ると、なぜ同じ日でも価格差が出るのか、なぜ高騰時に影響が大きいのかが読みやすくなります。"
          links={[
            { href: "/how-electricity-prices-are-determined", label: "JEPX価格の決まり方を見る" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav currentSlug="jepx-explained" />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="jepx-explained" />
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
