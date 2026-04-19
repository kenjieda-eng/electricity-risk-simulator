import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "市場価格調整額とは｜仕組み・計算方法・JEPX連動と燃料費調整額との違いを徹底解説";
const pageDescription =
  "市場価格調整額とは、JEPX卸電力市場の価格動向を電気料金に反映する調整項目です。仕組み・計算方法、燃料費調整額との違い、2020〜2025年度のJEPXシステムプライス推移、法人契約で注意すべきポイントを実データとグラフで徹底解説します。";
const pageUrl = "https://simulator.eic-jp.org/market-price-adjustment";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場価格調整額",
    "市場価格調整額 とは",
    "市場価格調整額とは",
    "市場価格調整額 JEPX",
    "市場価格調整額 計算",
    "市場価格調整額 燃料費調整額 違い",
    "燃料費調整額 市場価格調整額 違い",
    "市場連動 調整額",
    "電気料金 調整項目",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/price-increase", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

const faq = [
  { question: "市場価格調整額とは何ですか？", answer: "市場価格調整額は、卸電力市場（JEPX）の価格動向を電気料金に反映する調整項目です。燃料費調整額と似た役割を持ちますが、参照している価格が「燃料CIF価格」ではなく「JEPXの市場価格」である点が異なります。電力会社ごとに名称や算定ルールが異なります。" },
  { question: "市場価格調整額と燃料費調整額の違いは何ですか？", answer: "市場価格調整額はJEPX市場価格を参照し月次で反映されるため変動幅が大きく、上限が原則ありません。一方、燃料費調整額は燃料CIF価格を参照し3〜5ヶ月のラグで反映され、規制料金には上限が設定されています。" },
  { question: "固定単価プランでも市場価格調整額は発生しますか？", answer: "はい。固定単価プランでも、別立てで市場連動項目（市場価格調整額）が含まれているケースがあります。契約書の末尾の小さな条項に算定ルールが記載されていることが多いため、見積比較時には注意が必要です。" },
];

export default function MarketPriceAdjustmentPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2025-08-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "料金が上がる理由を知る", url: "https://simulator.eic-jp.org/articles/price-increase" },
          { name: "市場価格調整額とは" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav className="mb-4 text-xs text-slate-500">
        <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
        <span className="mx-1">&gt;</span>
        <Link href="/articles/price-increase" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金が上がる理由を知る</Link>
        <span className="mx-1">&gt;</span>
        <span>市場価格調整額とは</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場価格調整額とは｜仕組み・計算方法・燃料費調整額との違い</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場価格調整額とは、卸電力市場（JEPX）の価格動向を電気料金に反映する調整項目です。
          燃料費調整額と似た役割を持ちますが、参照する価格が「燃料CIF価格」ではなく「JEPX市場価格」である点が決定的に異なり、変動幅・反映タイミング・上限ルールも大きく違います。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、市場価格調整額の仕組み、計算方法、JEPXシステムプライス推移との関係、
          <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額（燃調費）</Link>
          との違い、法人契約で注意すべきポイントを、実データとグラフで整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整額の基本</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額は、電気の仕入れコストの一部が JEPX 価格に連動する場合に、
            その変動を料金に反映するための調整項目です。契約書・約款では「市場調整額」「電源調達調整額」「市場連動調整」
            など複数の名称で記載されます。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力会社ごとに名称・算定ルール・反映方法が異なる</li>
            <li>固定単価プランの一部で別立て項目として入ることがある</li>
            <li>市場連動プランでは、単価そのものが市場に連動するため別立てにならない場合も多い</li>
            <li>上限の有無は契約ごとに大きく異なる</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXシステムプライスとの連動</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額の根拠は JEPX スポット市場（一日前市場）のシステムプライスです。
            参考までに、2016〜2025 年度の年度平均システムプライスの推移を確認しておきます。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#7c3aed",
                  fillColor: "rgba(124,58,237,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 日本卸電力取引所（JEPX）公表値。2022年度は 20.37 円/kWh と過去最高。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
      <MarketDataDownload
        apiPath="/api/datasets/price-adjustment"
        caption="燃料費調整・再エネ賦課金履歴（CC BY 4.0、商用利用可）"
      />
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い（詳細版）</h2>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">比較観点</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">市場価格調整額</th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left font-semibold">燃料費調整額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">参照指標</td><td className="border border-slate-200 px-3 py-2">JEPX市場価格</td><td className="border border-slate-200 px-3 py-2">燃料CIF価格</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">反映タイミング</td><td className="border border-slate-200 px-3 py-2">月次（当月 or 前月実績）</td><td className="border border-slate-200 px-3 py-2">3〜5ヶ月ラグ</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">変動の幅</td><td className="border border-slate-200 px-3 py-2">大きい（市場動向をほぼそのまま）</td><td className="border border-slate-200 px-3 py-2">中程度（基準単価で緩和）</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">契約上の上限</td><td className="border border-slate-200 px-3 py-2">原則なし（自由設計）</td><td className="border border-slate-200 px-3 py-2">規制料金のみあり</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">表示</td><td className="border border-slate-200 px-3 py-2">契約によって名称が異なる</td><td className="border border-slate-200 px-3 py-2">統一的に「燃料費調整額」</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人契約で見落としやすいポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>「燃調」と「市場調整」を二重に計上される契約がある（総額が上がりやすい）</li>
            <li>固定単価に見えても、別立てで市場連動項目が入っているケースがある</li>
            <li>電気料金値引き（激変緩和措置）は燃調には適用されたが、市場連動項目には適用されなかった例がある</li>
            <li>契約書の末尾にある小さな条項に算定ルールが書かれていることが多い</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整と市場連動は何が違うのか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場連動は、市場価格に連動する契約設計そのもの</li>
            <li>市場価格調整は、契約単価とは別に変動要素として反映される考え方</li>
            <li>同じ「市場」という言葉でも、比較すべき場所が異なる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動の基礎は{" "}
            <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動プランとは
            </Link>
            、契約タイプ比較は{" "}
            <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動プランと固定プランの違い
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場環境別の月額影響レンジ（過去実績ベース）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の高圧事業所で、基準単価10円/kWhの場合の影響試算です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場環境</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX月平均</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">調整単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額影響</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">過去の該当時期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">安定期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">7〜9円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲1〜3円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">▲5〜15万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2020年春〜秋</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">やや上昇</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜15円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+2〜5円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+10〜25万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023〜2024年通常期</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高騰期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20〜30円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+10〜20円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+50〜100万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2022年通年</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">異常高騰</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50円超</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+40円超</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+200万円超</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2021年1月</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 上限設定がない契約では、異常高騰時に月額が数百万円単位で増加する可能性があります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約メニュー名だけで判断しないことが重要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「固定」「市場連動」といった名称は、契約の全体像を示す入口に過ぎません。実際の比較では、どの項目が固定で、どの項目が後から動くかを分けて確認することが、
            契約後のギャップを減らす近道です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較で確認したいポイントは以下のとおりです。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>調整対象となる価格指標が何か</li>
            <li>調整額の上限・下限の有無</li>
            <li>反映タイミング（月次か時間帯別か）</li>
            <li>基本料金・電力量料金との関係</li>
            <li>他の調整費（燃料費調整額など）との重複有無</li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">もっと深く知りたい方へ</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/market-price-adjustment-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場価格調整額の推移とJEPX価格の関係
              </Link>
            </li>
            <li>
              <Link href="/market-price-adjustment-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場価格調整額の計算方法と契約約款の読み方
              </Link>
            </li>
            <li>
              <Link href="/market-price-adjustment-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場価格調整額の上振れリスクと備え方
              </Link>
            </li>
          </ul>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org", description: "スポット市場のシステムプライス公表データ" },
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力料金制度・調整項目に関する情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "小売電気事業者の料金メニュー・約款の監視データ" },
          ]}
          publishedAt="2025-08-11"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "燃調費の仕組みと請求影響。" },
            { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場価格連動型契約の特徴。" },
            { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本。" },
            { href: "/how-to-read-electricity-quote", title: "電気料金見積書の見方", description: "契約条件の読み方。" },
          ]}
        />

        <ContentCta
          heading="同条件で比較する"
          description="調整項目の差を把握したら、同じ前提条件で複数メニューを比較し、総額差を確認することが有効です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
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
