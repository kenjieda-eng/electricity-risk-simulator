import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "最終保障供給の料金｜通常契約との差額を使用量別に試算";
const pageDescription =
  "最終保障供給の料金水準、通常契約との差の理由、JEPX連動部分の仕組み、2022年ピーク時の高騰、激変緩和措置、実額試算までを法人向けに詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/last-resort-supply-price";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 料金",
    "最終保障供給 高い",
    "最終保障供給 通常契約 差",
    "最終保障供給 JEPX",
    "最終保障供給 試算",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

const faqItems = [
  {
    question: "最終保障供給の料金は通常の電力契約と比べてどのくらい高いですか？",
    answer: "最終保障供給の料金は通常の小売契約より一般的に2〜3割高く設定されています。JEPXの市場価格が高騰した2022年ピーク時には通常の数倍に達したケースもありました。月間使用量が多いほど差額も大きくなるため、早期の通常契約への切替が推奨されます。",
  },
  {
    question: "最終保障供給に激変緩和措置は適用されますか？",
    answer: "政府の電気代補助（激変緩和措置）は最終保障供給にも適用される場合がありますが、補助の終了後は通常の料金水準に戻ります。補助に頼った状態を継続することは中長期のコスト管理上リスクがあるため、通常契約への移行を早めに進めることが重要です。",
  },
  {
    question: "最終保障供給に入ったまま放置するとどうなりますか？",
    answer: "割高な料金が継続し、月額電気代が数十万〜数百万円規模で増加する可能性があります。自治体の場合は補正予算の計上が必要になることもあります。長期化するほど損失が積み上がるため、切替先が決まり次第、速やかに移行手続きを進めてください。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の料金規制・監視データ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "最終保障供給制度・料金水準に関する資料" },
  { name: "JEPX（日本卸電力取引所）", url: "http://www.jepx.org", description: "スポット市場価格データ" },
];

export default function LastResortSupplyPricePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2025-08-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "最終保障供給の料金" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">料金はなぜ高いのか</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の料金はなぜ高いのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の料金は、通常の小売契約より 2〜3 割高い設定です。
          2022 年の急増局面では、JEPX 連動部分の算定が見直されるまで、通常契約の 1.5〜2 倍になった月もありました。
          このページでは、料金の構造、通常契約との差の理由、実額試算までを詳しく解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金体系の基本</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の料金は、一般送配電事業者が経済産業大臣の認可を受けた料金表に基づいて算定されます。
            通常の小売料金と同様に、<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>＋<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>＋<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>＋<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>の構成ですが、
            標準メニュー（旧一般電気事業者の規制料金）に比べて 20% 程度高い単価設定になっています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">料金構成</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
              <li>基本料金：通常契約の約 1.2 倍</li>
              <li>電力量料金：通常契約の約 1.2 倍</li>
              <li>燃料費調整額：通常契約と同じ算定</li>
              <li>再エネ賦課金：通常契約と同じ</li>
              <li>（2022年10月〜2023年5月）市場連動分として JEPX 連動上乗せ</li>
            </ul>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年10月：JEPX連動部分の導入</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年 9 月以前の最終保障供給料金は、標準メニューに対して固定で 1.2 倍の割増でした。
            しかし 2022 年の急増で問題化したのは「通常契約より安く見える時期があった」ことです。
            JEPX 価格が高騰した 2022 年夏、最終保障供給に敢えて移行する事業者が現れ、制度の趣旨と矛盾しました。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            これを受けて、2022 年 10 月から最終保障供給料金に「<Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額</Link>」が追加され、
            <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link> 高騰時はより高くなる仕組みに見直されました。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実額試算：高圧 500kW 契約、月10万kWh</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中規模工場（500kW 高圧契約、月10万kWh）を例に、通常契約と最終保障供給の月額を比較します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">通常契約（固定）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">最終保障供給</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">基本料金</td><td className="border border-slate-200 px-3 py-2 text-right">約 80 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 96 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">電力量料金</td><td className="border border-slate-200 px-3 py-2 text-right">約 180 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 216 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">燃料費調整額</td><td className="border border-slate-200 px-3 py-2 text-right">約 25 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 25 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">再エネ賦課金</td><td className="border border-slate-200 px-3 py-2 text-right">約 35 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 35 万円</td></tr>
                <tr className="border-t bg-red-50"><td className="border border-slate-200 px-3 py-2 font-semibold">月額合計</td><td className="border border-slate-200 px-3 py-2 text-right font-bold">約 320 万円</td><td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">約 372 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2">年額換算</td><td className="border border-slate-200 px-3 py-2 text-right">約 3,840 万円</td><td className="border border-slate-200 px-3 py-2 text-right font-semibold">約 4,460 万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 概算試算。実際の料金は地域・契約区分・JEPX 連動部分により変動します。
            年額で 620 万円（16%）、月額で 52 万円程度の差が出ます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ高く設定されているのか</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>制度の趣旨</strong>：あくまで「臨時的な最後の拠り所」であり、安価な通常契約に戻ることを前提とした設計。
              安いと移行が長期化し、電力市場の健全な流動性を損なう。
            </li>
            <li>
              <strong>送配電事業者のリスク負担</strong>：一般送配電事業者は本来、供給事業を主業務としていない。
              急な供給増加のコストを吸収する必要があり、リスクプレミアムが乗る。
            </li>
            <li>
              <strong>調達コストの反映</strong>：送配電事業者は自ら発電所を持たないため、JEPX 等で電気を調達する必要がある。
              その調達コストが料金に反映される。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量規模別の月額コスト差</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が大きいほど、最終保障供給と通常契約の差額が急拡大します。月1万kWhから月50万kWhまでの規模別試算です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">使用量規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">通常契約 月額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">最終保障 月額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月額差</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年額差</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">月1万kWh（小規模オフィス）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約18万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約26万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+8万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+96万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">月5万kWh（中規模ビル・工場）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約90万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約130万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+40万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+480万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">月20万kWh（大規模工場・商業施設）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約360万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約520万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+160万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-red-700">+1,920万円</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-slate-200 px-3 py-2">月50万kWh（大型施設・特別高圧）</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約900万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">約1,300万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">+400万円</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">+4,800万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 通常契約は電力量料金約18円/kWh、最終保障供給は約26円/kWhで概算。基本料金・燃調・再エネ賦課金は別途加算。実際の料金はエリア・契約区分・JEPX連動部分により変動します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人への実務的な影響</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>月額で数十万〜数百万円の上振れが即時発生</li>
            <li>予算外の追加コストで、経営説明が必要になる</li>
            <li>自治体の場合、補正予算の計上が必要になることも</li>
            <li>長期化するほど損失が積み上がるため、早期切替が最優先</li>
          </ul>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-01" />

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/last-resort-supply", title: "最終保障供給とは", description: "制度の基本解説。" },
            { href: "/last-resort-supply-history", title: "最終保障供給の件数推移", description: "2022年急増の詳細。" },
            { href: "/last-resort-supply-switch", title: "最終保障供給から切り替えるには", description: "切替実務の手順。" },
            { href: "/last-resort-vs-retail-contract", title: "最終保障供給と通常契約の違い", description: "通常契約との比較。" },
            { href: "/last-resort-supply-emergency-response", title: "入りそうなときの対応", description: "早期発見と準備。" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約見直しの始め方", description: "最終保障供給からの脱出に向けた次契約の検討手順。" },
          ]}
        />

        <ContentCta
          heading="通常契約への切替を急ぐ"
          description="最終保障供給は長期利用を前提にしていない制度です。早めの切替準備を。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
