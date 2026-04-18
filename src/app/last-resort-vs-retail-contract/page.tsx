import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "最終保障供給と通常契約の違い｜8項目で比較する料金・条件・リスク";
const pageDescription =
  "最終保障供給と通常の法人向け電力契約の違いを、料金、契約の考え方、継続前提、見直しの必要性の観点から比較します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 通常契約 違い",
    "最終保障供給 比較",
    "最終保障供給 料金 高い 理由",
    "法人 電力契約 見直し",
    "最終保障供給 切り替え 判断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-vs-retail-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-vs-retail-contract",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給と通常契約の違い",
      },
    ],
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
    question: "最終保障供給と通常の電力契約の最大の違いは何ですか？",
    answer: "目的と料金水準が根本的に異なります。通常の小売契約は競争市場での調達コスト最適化を前提としますが、最終保障供給は供給継続を最優先とした「緊急措置」です。そのため料金は通常より2〜3割高く設定され、コスト最小化を目的とした契約ではありません。",
  },
  {
    question: "最終保障供給は長期間使い続けることができますか？",
    answer: "制度上の期限はありませんが、長期継続は推奨されません。割高な料金が継続するためコストが蓄積し、また電力市場が安定した後も移行しないままでいると機会損失が大きくなります。通常契約への移行が可能になった時点で速やかに切り替えることが重要です。",
  },
  {
    question: "最終保障供給に移行中でも通常契約の比較・検討はできますか？",
    answer: "はい、最終保障供給中でも複数の小売電気事業者に見積もりを依頼し、通常契約の候補を検討することができます。切替が完了するまでは最終保障供給が継続されますが、早期に移行先を確保することで割高な料金の継続期間を短縮できます。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給と通常供給の料金・条件に関するデータ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度の比較・解説" },
];

export default function LastResortVsRetailContractPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/last-resort-vs-retail-contract"
        datePublished="2025-08-31"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "最終保障供給と通常契約の違い" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">通常契約との違い</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給と通常の電力契約の違い</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          同じ「法人向け電力契約」に見えても、最終保障供給と通常契約では役割が大きく異なります。差分を整理すると、
          そのまま維持するか、切り替えを急ぐかの判断がしやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">役割の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は供給継続のセーフティネット、通常契約は比較して選ぶ契約です。前者は「止めないため」、後者は「条件を選ぶため」という前提の違いがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金の考え方の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            通常契約は見積競争や契約設計を通じた最適化余地がありますが、最終保障供給はその性質上、料金が高く見えやすくなります。
            単価だけでなく、契約前提そのものを分けて理解することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            詳しくは{" "}
            <Link href="/last-resort-supply-price" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              最終保障供給の料金はなぜ高いのか
            </Link>{" "}
            で解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間と継続前提の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は次契約までの橋渡しとして考えるのが基本です。通常契約は中長期での運用を前提に、料金、契約期間、更新条件、違約金などを設計して選びます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな企業が早めに見直したほうがよいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電気料金上昇の影響が損益に直結しやすい企業</li>
            <li>高圧・特別高圧で使用量が大きい企業</li>
            <li>契約更新期限や切り替え期限が近い企業</li>
            <li>複数拠点で契約条件がばらついている企業</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較するときに見るべきポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額ベースでの料金差</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>・市場調整項目の扱い</li>
            <li>契約期間、更新条件、違約金</li>
            <li>上振れ時のリスク許容度</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            変動リスクの見方は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>{" "}
            も参考になります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給と小売契約の年間コスト比較（高圧・月50,000kWh）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">最終保障供給</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">小売契約（固定）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金単価</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約25〜28円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約18〜22円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+5〜8円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月額電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約125〜140万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約90〜110万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+25〜40万円/月</span></td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">年間差額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+300〜480万円/年</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 基本料金・燃料費調整額・再エネ賦課金を除いた電力量料金部分の概算です。エリアにより異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給と通常契約の詳細比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金単価だけでなく、契約条件・リスク・柔軟性の観点から8項目で比較します。
          </p>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">通常契約（小売）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">最終保障供給</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">料金単価</td>
                  <td className="border border-slate-200 px-3 py-2">15〜22円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700 font-semibold">25〜35円/kWh</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">基本料金</td>
                  <td className="border border-slate-200 px-3 py-2">1,500〜1,900円/kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700 font-semibold">2,000〜2,500円/kW</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">燃調費上限</td>
                  <td className="border border-slate-200 px-3 py-2">プランにより異なる</td>
                  <td className="border border-slate-200 px-3 py-2">なし（上振れリスクあり）</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">契約期間</td>
                  <td className="border border-slate-200 px-3 py-2">1〜3年</td>
                  <td className="border border-slate-200 px-3 py-2">原則1年以内</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">違約金</td>
                  <td className="border border-slate-200 px-3 py-2">あり（プランによる）</td>
                  <td className="border border-slate-200 px-3 py-2">なし</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">選択の自由度</td>
                  <td className="border border-slate-200 px-3 py-2">複数社から選択可能</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">送配電事業者指定のみ</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">切替の容易さ</td>
                  <td className="border border-slate-200 px-3 py-2">随時（解約条件による）</td>
                  <td className="border border-slate-200 px-3 py-2">通常契約確保後に離脱</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">予算の見通し</td>
                  <td className="border border-slate-200 px-3 py-2">立てやすい（固定プラン）</td>
                  <td className="border border-slate-200 px-3 py-2 text-red-700">立てにくい（料金改定リスク）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 料金単価・基本料金は高圧契約・関東エリアの参考値です。エリア・時期・需要規模により変動します。
          </p>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-31" />

        <RelatedLinks
          heading="次に確認したいページ"
          intro="違いを押さえたら、制度の全体像と切替実務へ進み、通常契約の準備に戻ります。"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の全体像と基本事項を確認できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "本契約へ戻る計画を、見直しの流れの中で整理できます。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人が電力契約を切り替えるときの注意点",
              description: "切替手続きと初回請求確認の論点を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="違いを理解して切り替え判断へ進む"
          description="前提の違いを整理したら、比較ページで通常契約の候補を並べ、実務に落とし込んでいくのが有効です。"
          links={[
            { href: "/last-resort-supply-switch", label: "切り替え手順を見る" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
