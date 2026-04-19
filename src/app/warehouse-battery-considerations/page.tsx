import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import SolarPpaCalculator from "../../components/market-data/SolarPpaCalculator";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["energy-equipment"];


const pageTitle =
  "倉庫で蓄電池を検討するときの着眼点｜屋根面積と太陽光の組み合わせ";
const pageDescription =
  "物流倉庫・冷凍冷蔵倉庫が蓄電池の導入を検討する際の着眼点を解説します。広い屋根面積を活かした太陽光との組み合わせ、冷凍・冷蔵設備のピーク管理、停電リスクへの対応など倉庫特有の検討事項を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "倉庫 蓄電池 導入 検討",
    "物流倉庫 太陽光 蓄電池",
    "冷凍倉庫 蓄電池 電気料金",
    "倉庫 太陽光 自家消費",
    "物流 BCP 蓄電池",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/warehouse-battery-considerations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/warehouse-battery-considerations",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/energy-equipment", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-equipment"],
  },
};

const warehouseTypes = [
  {
    type: "常温物流倉庫",
    powerProfile: "フォークリフト充電・照明・空調が主体。昼間作業が中心のため太陽光と消費時間帯が合いやすい。",
    batteryFit: "太陽光との組み合わせで自家消費率が高まりやすい。デマンドピークは入出庫集中時に発生する傾向。",
  },
  {
    type: "冷凍・冷蔵倉庫",
    powerProfile: "冷凍・冷蔵設備の稼働が24時間続き、電力消費が大きい。夏季の外気温上昇時に冷却負荷が増大する。",
    batteryFit: "デマンドピーク抑制の効果が大きい。停電時の温度管理（商品保護）のためのBCP需要が高い。",
  },
  {
    type: "自動化・大型物流センター",
    powerProfile: "コンベア・自動搬送設備・サーバー等が消費電力の大部分を占める。24時間・365日稼働のケースも。",
    batteryFit: "停電リスクが極めて高い。蓄電池によるUPS機能・自立運転が重要。デマンド管理も大きな課題。",
  },
];

const roofSolarCombinationPoints = [
  {
    point: "屋根面積の有効活用",
    detail:
      "物流倉庫は大型・平屋根が多く、太陽光パネルの設置に適した広い面積を確保できます。1,000〜5,000m²以上の屋根を持つ倉庫では、数百kW規模の太陽光発電が可能です。",
  },
  {
    point: "屋根荷重・防水との整合",
    detail:
      "太陽光パネルの設置には屋根荷重（積載荷重）の確認が必要です。古い倉庫では補強工事が必要な場合があります。また、防水層へのアンカー工事は防水保証との整合を事前に確認することが重要です。",
  },
  {
    point: "余剰電力と蓄電池の連携",
    detail:
      "倉庫は作業時間が限られている場合もあり、太陽光発電量が消費量を上回る余剰が生じやすいです。蓄電池に蓄えることで、昼間の余剰を夕方・夜間の照明・セキュリティ・充電設備向けに活用できます。",
  },
  {
    point: "PPA（電力購入契約）の活用",
    detail:
      "初期投資なしで太陽光を設置できるPPAを活用することで、自己資金なしに自家消費の電気料金削減メリットを得られる場合があります。倉庫の屋根を活かしたPPA提案が増えています。",
  },
];

const coldStorageSpecificPoints = [
  {
    point: "停電時の商品保護が最優先課題",
    detail:
      "冷凍・冷蔵倉庫では停電が数時間続くだけで商品（食品・医薬品等）の品質維持に深刻な影響を与えます。蓄電池の自立運転による冷凍・冷蔵設備への優先給電は、単なる節電以上の価値があります。",
  },
  {
    point: "デマンドピークと冷却負荷の関係",
    detail:
      "夏季の高温時には冷凍・冷蔵設備の冷却負荷が増加し、デマンドが上昇します。この夏季ピークを蓄電池で抑制することで、年間最大デマンドを下げ基本料金を削減できます。",
  },
  {
    point: "事前冷却（プレクーリング）の活用",
    detail:
      "電力価格が安い夜間・早朝に冷凍庫内温度を通常より低めに設定（事前冷却）しておき、昼間・ピーク時に設備稼働を抑える「ピークシフト」が冷凍倉庫では有効な手段です。",
  },
];

const economicsForWarehouse = [
  {
    item: "基本料金削減効果の試算",
    detail:
      "デマンドを10〜20%削減できた場合の年間基本料金削減額を試算します。大型倉庫・冷凍倉庫では電力消費が大きく、基本料金も高くなるため削減効果が大きくなります。",
  },
  {
    item: "太陽光による購入電力量削減効果",
    detail:
      "屋根に設置できる太陽光の規模（kW）と自家消費率を見積もり、年間の購入電力量削減額（電力量料金＋燃料費調整額＋再エネ賦課金）を試算します。",
  },
  {
    item: "BCP価値の定量化",
    detail:
      "停電時の商品廃棄損失・賠償リスク・顧客信頼への影響を金額換算し、蓄電池の自立運転によるBCP価値として投資判断に加えます。冷凍・冷蔵倉庫では特に重要な要素です。",
  },
];

export default function WarehouseBatteryConsiderationsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="倉庫で蓄電池を検討するときの着眼点｜屋根面積と太陽光の組み合わせ"
        description="物流倉庫・冷凍冷蔵倉庫が蓄電池の導入を検討する際の着眼点を解説します。広い屋根面積を活かした太陽光との組み合わせ、冷凍・冷蔵設備のピーク管理、停電リスクへの対応など倉庫特有の検討事項を整理します。"
        url="https://simulator.eic-jp.org/warehouse-battery-considerations"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "省エネ設備・エネルギー装備", url: "https://simulator.eic-jp.org/articles/energy-equipment" },
        ]}
        faq={[
    { question: "蓄電池や太陽光の導入で電気代はどのくらい下がりますか？", answer: "条件により異なりますが、自家消費型太陽光で5〜15%、蓄電池併用でさらに数%の削減が一般的な目安です。" },
    { question: "導入に使える補助金はありますか？", answer: "SII省エネ補助金、需要家主導型PPA補助金、自治体独自の補助金などが利用できる場合があります。" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">倉庫での蓄電池検討</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          倉庫で蓄電池を検討するときの着眼点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          物流倉庫・冷凍冷蔵倉庫は、広大な屋根面積・大きな電力消費・停電時の商品保護ニーズという特性から、蓄電池と太陽光の組み合わせが特に有効な業態のひとつです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          倉庫の種類（常温・冷凍冷蔵・自動化センター）によって電力消費パターンと課題が異なります。それぞれの特性を踏まえた着眼点と、太陽光との組み合わせによる相乗効果について整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>倉庫の種類別の電力消費パターンと蓄電池の適合性</li>
            <li>広い屋根面積を活かした太陽光との組み合わせポイント</li>
            <li>冷凍・冷蔵倉庫特有の課題（停電・夏季ピーク）への対応</li>
            <li>倉庫での経済効果試算の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            倉庫の種類と蓄電池の適合性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            倉庫といっても種類によって電力消費パターンと課題が大きく異なります。導入前に自社の倉庫タイプに対応した着眼点を確認します。
          </p>
          <div className="mt-4 space-y-4">
            {warehouseTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.type}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <span className="font-medium">電力プロファイル：</span>{item.powerProfile}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  <span className="font-medium">蓄電池の適合：</span>{item.batteryFit}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            広い屋根面積を活かした太陽光との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大型倉庫の最大の強みは、広い屋根面積による大規模な太陽光パネルの設置が可能な点です。太陽光と蓄電池を組み合わせることで、倉庫の電気料金対策として大きな効果が期待できます。
          </p>
          <div className="mt-4 space-y-4">
            {roofSolarCombinationPoints.map((item) => (
              <div
                key={item.point}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.point}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            太陽光と蓄電池の組み合わせの基本的な考え方については{" "}
            <Link
              href="/solar-battery-combination-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              太陽光と蓄電池を組み合わせる意味
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            冷凍・冷蔵倉庫特有の検討ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷凍・冷蔵倉庫では、一般の物流倉庫に加えて以下の観点が特に重要です。
          </p>
          <div className="mt-4 space-y-4">
            {coldStorageSpecificPoints.map((item) => (
              <div
                key={item.point}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.point}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷凍・冷蔵設備の事前冷却を需要応答（DR）に活用することも選択肢として考えられます。詳しくは{" "}
            <Link
              href="/demand-response-cost-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              DRは電気料金対策としてどう考えるか
            </Link>{" "}
            をご参照ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            倉庫での経済効果試算の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            倉庫での蓄電池・太陽光の経済効果を試算する際の主要な観点を整理します。デマンド抑制による<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>削減と、太陽光自家消費による<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>・<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>の削減が主な経路です。
          </p>
          <div className="mt-4 space-y-4">
            {economicsForWarehouse.map((item) => (
              <div
                key={item.item}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            倉庫での導入を進める際の確認事項
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            倉庫での蓄電池・太陽光導入を具体的に進める際に確認すべき事項をまとめます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">建物オーナーとの調整</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                賃貸倉庫の場合、太陽光パネル・蓄電池の設置にはオーナーの承諾が必要です。PPA契約の場合、建物への原状回復義務と設備帰属の整理が重要です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">屋根の状態確認</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                屋根の築年数・防水状態・荷重耐力を事前調査します。老朽化した屋根では太陽光設置前の改修が必要なケースがあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">電気設備の確認</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                既存のキュービクル・受電設備の容量・接続可能な系統側条件を確認します。大規模な太陽光設置は電力会社への系統接続申請（連系申請）が必要です。
              </p>
            </div>
            
      <SolarPpaCalculator />
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">補助金・税制の確認</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                国・自治体の<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>（省エネ支援・再エネ導入支援等）や中小企業向け税制優遇（即時償却・税額控除）の活用可能性を確認します。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            物流倉庫・冷凍冷蔵倉庫は、広い屋根面積・大きな電力消費・停電時の商品保護ニーズという特性から、太陽光と蓄電池の組み合わせが特に有効な業態です。倉庫の種類（常温・冷凍冷蔵・自動化センター）によって検討の優先事項が異なります。経済効果の試算においては、電気料金削減効果に加えてBCP価値（停電時の商品保護）も含めた総合評価をお勧めします。建物オーナーとの調整や屋根状態の確認を早めに行い、専門業者との協議を進めることが重要です。
          </p>
        </section>

        <SourcesAndFaq
          faq={[
          { question: "蓄電池や太陽光の導入で電気代はどのくらい下がりますか？", answer: "条件により異なりますが、自家消費型太陽光で5〜15%、蓄電池併用でさらに数%の削減が一般的な目安です。" },
          { question: "導入に使える補助金はありますか？", answer: "SII省エネ補助金、需要家主導型PPA補助金、自治体独自の補助金などが利用できる場合があります。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "SII 環境共創イニシアチブ", url: "https://sii.or.jp" },
          { name: "環境省", url: "https://www.env.go.jp" },
          ]}
          publishedAt="2026-04-11"
        />



        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/solar-battery-combination-benefit",
              title: "太陽光と蓄電池を組み合わせる意味",
              description: "自家消費率向上とコスト削減の相乗効果。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "購入電力削減の考え方と効果の出やすい条件。",
            },
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池は電気料金対策としてどう効くか",
              description: "デマンド抑制とピークカットの仕組みを解説。",
            },
            {
              href: "/demand-response-cost-benefit",
              title: "DRは電気料金対策としてどう考えるか",
              description: "冷凍倉庫の事前冷却とDR参加の組み合わせ。",
            },
            {
              href: "/factory-battery-considerations",
              title: "工場で蓄電池を検討するときの着眼点",
              description: "倉庫と比較した工場特有の検討事項。",
            },
            {
              href: "/demand-suppression-effectiveness",
              title: "デマンド抑制はどこまで効果があるか",
              description: "基本料金削減の可能性と限界を整理。",
            },
            {
              href: "/subsidies-overview",
              title: "蓄電池・太陽光の補助金制度まとめ",
              description: "国・自治体の補助金を活用して初期費用を抑える方法。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電気料金の見直しを始める手順",
              description: "現状把握から改善実行までのステップを解説。",
            },
          ]}
        />

        <ContentCta
          heading="倉庫の電気料金リスクを確認する"
          description="現在の契約条件と電力消費パターンをもとに、電気料金の変動リスクと削減余地をシミュレーションできます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
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
