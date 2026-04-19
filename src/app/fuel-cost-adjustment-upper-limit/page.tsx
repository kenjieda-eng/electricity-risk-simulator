import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "燃料費調整額の上限制度｜規制料金と自由料金の違い、2022年の上限到達を解説";
const pageDescription =
  "燃料費調整額には、規制料金では基準燃料価格の1.5倍という上限があり、自由料金では原則上限なし。2022年の上限到達による電力会社の赤字、新電力の撤退、法人への影響を整理します。";
const pageUrl = "https://simulator.eic-jp.org/fuel-cost-adjustment-upper-limit";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額 上限",
    "燃調 上限 規制料金",
    "自由料金 上限なし",
    "2022年 電力会社 赤字",
    "新電力 撤退",
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

export default function FuelCostAdjustmentUpperLimitPage() {
  return (
    <>
      <ArticleJsonLd
        headline="燃料費調整額の上限制度｜規制料金と自由料金の違い、2022年の上限到達を解説"
        description="燃料費調整額には、規制料金では基準燃料価格の1.5倍という上限があり、自由料金では原則上限なし。2022年の上限到達による電力会社の赤字、新電力の撤退、法人への影響を整理します。"
        url="https://simulator.eic-jp.org/fuel-cost-adjustment-upper-limit"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "燃料費調整額の上限制度" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">燃料費調整額の上限制度</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">燃料費調整額の上限制度</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          燃料費調整額には、規制料金と自由料金で扱いが大きく異なります。規制料金（低圧の経過措置料金）には
          「基準燃料価格の 1.5 倍」という上限がありますが、自由料金（法人向け高圧・特別高圧、新電力プランなど）には
          原則として上限がありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          この違いは 2022 年のウクライナ危機で深刻な問題になり、規制料金の上限到達による電力会社の赤字、
          自由料金の燃調急騰による新電力の経営悪化・撤退など、多くの影響を引き起こしました。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規制料金の上限の仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力自由化以前から続く「経過措置料金（低圧）」は、電気事業法で料金算定ルールが定められています。
            その中に、燃料費調整額の上限として「基準燃料価格の 1.5 倍」というキャップが設定されています。
          </p>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">上限到達の考え方</p>
            <p className="mt-2">平均燃料価格が「基準燃料価格 × 1.5」を上回った場合、上回った分は料金に反映されない</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            つまり、燃料価格がどれだけ急騰しても、規制料金需要家の請求額には上限以上のコストは転嫁されません。
            反面、電力会社側で「転嫁できなかったコスト」が赤字として残る構造です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年：規制料金の上限到達</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年のウクライナ危機で LNG スポット価格が急騰し、日本の多くの電力会社の規制料金で
            2022 年夏〜秋にかけて燃調単価が上限に到達しました。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この結果、2022 年度は旧一般電気事業者各社で数百億円〜数千億円規模の燃料費転嫁不足が発生。
            2023 年 6 月に多くの電力会社が規制料金の本体値上げ（認可料金改定）を申請・実施し、
            同時に基準燃料価格も引き上げました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">電力会社</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2023年改定値上げ幅（規制料金、低圧）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">北海道電力</td><td className="border border-slate-200 px-3 py-2">約 20%</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">東北電力</td><td className="border border-slate-200 px-3 py-2">約 24%</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">北陸電力</td><td className="border border-slate-200 px-3 py-2">約 42%</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">中国電力</td><td className="border border-slate-200 px-3 py-2">約 29%</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">四国電力</td><td className="border border-slate-200 px-3 py-2">約 25%</td></tr>
                <tr className="border-t border-slate-100"><td className="border border-slate-200 px-3 py-2">沖縄電力</td><td className="border border-slate-200 px-3 py-2">約 38%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 値上げ幅は改定時の標準的な使用量での概算。東京電力・中部電力・関西電力・九州電力は当時規制料金改定を実施せず。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自由料金（法人契約）は上限なし</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向けの高圧・特別高圧契約や、新電力の自由料金プランには、燃調の上限制度は原則として適用されません。
            契約書・約款で個別に上限を設けている場合もありますが、多くは「燃料価格に応じて無制限に反映」する仕組みです。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>2022年の影響：</strong>自由料金の燃調は上限なく上昇。ある月の燃調単価が +10 円/kWh を超えるケースもあり、
              請求額が前年比 2〜3 倍になる法人需要家も出ました。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">新電力への影響と市場撤退</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            新電力の多くは、燃調を伴う契約ではなく JEPX 市場調達をベースにしていたため、
            2022 年の市場価格急騰でそのまま仕入れコストが上昇。約款上転嫁できる範囲を超えた損失が発生し、
            2022〜2023 年に数十社が事業撤退・新規受付停止・他社への事業譲渡に追い込まれました。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">主な影響事例</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
              <li>新規申込受付停止：旧一般電気事業者を含む複数社</li>
              <li>新電力の撤退・事業停止：2022〜2023年で 100 社以上</li>
              <li>最終保障供給への移行件数が急増</li>
            </ul>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給については{" "}
            <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              最終保障供給とは
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が契約時に確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約約款に燃調の上限記載があるか</li>
            <li>上限がある場合、基準燃料価格の何倍か</li>
            <li>上限到達時、電力会社が契約解除できる条項があるか</li>
            <li>値上げ通知があった場合の対応フロー（継続 or 切替）</li>
            <li>最終保障供給に移行した場合の単価水準</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="fuel-cost-adjustment-upper-limit" terms={["燃料費調整額", "最終保障供給", "市場連動プラン", "固定プラン", "再エネ賦課金"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "制度の基本まとめ。" },
            { href: "/fuel-cost-adjustment-history", title: "燃料費調整額の推移詳細", description: "2022年の急騰を含む年度別分析。" },
            { href: "/fuel-cost-adjustment-calculation", title: "燃料費調整額の計算式の詳細", description: "計算要素の内訳と電力会社差。" },
            { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時の受け皿制度。" },
            { href: "/last-resort-supply-price", title: "最終保障供給の料金水準", description: "標準料金より高い仕組みを確認。" },
            { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "燃調上限到達後の料金水準推移をデータで確認できます。" },
          ]}
        />

        <ContentCta
          heading="契約条件の見直しを検討する"
          description="燃調に上限がない契約が大半を占める中、契約見直しで総額の上振れリスクを管理することが重要です。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="fuel-cost-adjustment-upper-limit" />
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
