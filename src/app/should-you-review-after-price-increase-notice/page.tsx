import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "値上げ通知が来たとき、法人の電力契約はすぐ見直すべきか";
const pageDescription =
  "値上げ通知が届いたからといって、すぐ切り替えるべきとは限りません。通知内容、適用時期、契約条件を確認しながら見直し判断を進めるポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/should-you-review-after-price-increase-notice",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/should-you-review-after-price-increase-notice",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/review-points", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/review-points"],
  },
};

export default function ShouldYouReviewAfterPriceIncreaseNoticePage() {
  const faq = [
    { question: "値上げ通知が届いたらすぐに電力会社を切り替えるべきですか？", answer: "すぐに切り替えるより、まず通知内容（適用時期・対象条件）と契約の解約条件を確認することが先決です。通知に反論・交渉の余地がある場合もあり、慌てて比較すると判断を誤るリスクがあります。" },
    { question: "値上げ通知と実際の適用はどのくらい前に来ますか？", answer: "一般的に1〜3か月前に通知が来るケースが多いですが、契約内容によって異なります。通知が来たら即座に適用時期と契約更新日を確認し、見直しに使える時間を把握することが重要です。" },
    { question: "値上げ通知後に見積比較をする際に注意することは？", answer: "現契約の解約条件・違約金・切替タイミングを確認した上で、複数社に同じ条件で見積依頼することが重要です。単価だけでなく、燃調費や容量拠出金の扱いも含めて比較します。" },
  ];
  const sources = [
    { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・料金改定に関する情報" },
    { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力供給契約の制度・ルールに関する情報" },
  ];
  return (
    <>
    <ReviewArticlePage
      breadcrumbLabel="値上げ通知が来たとき"
      slug="should-you-review-after-price-increase-notice"
      jsonLdUrl="https://simulator.eic-jp.org/should-you-review-after-price-increase-notice"
      jsonLdHeadline={pageTitle}
      jsonLdDescription={pageDescription}
      publishedAt="2026-03-29"
      faq={faq}
      sources={sources}
      title={pageTitle}
      lead={[
        "値上げ通知を受けると、すぐ切替を検討したくなりますが、まずは通知内容の確認が先です。適用時期や対象条件を把握しないまま比較すると、判断を誤る可能性があります。",
        "このページでは、通知後の実務対応に絞って、確認順序と判断の分岐を整理します。",
      ]}
      sections={[
        {
          heading: "値上げ通知が来たときに最初に確認したいこと",
          paragraphs: [
            "最初に確認するのは、値上げの適用時期と対象範囲です。いつの使用分から反映されるのか、全量なのか一部条件なのかで対応優先度が変わります。",
            "通知文面だけで判断せず、現契約の条項と照合して、改定根拠や通知期限の妥当性を確認します。",
          ],
        },
        {
          heading: "通知内容で見たい適用時期・対象範囲・条件変更",
          paragraphs: [
            "単なる単価改定なのか、契約条件全体の見直しかを切り分けることが重要です。条件変更を含む通知なら、価格以外のリスクも同時に評価する必要があります。",
            "契約期間、更新条項、調整項目の扱いが変わる場合は、比較前提そのものを見直す必要があります。",
          ],
          bullets: [
            "改定開始月と請求反映タイミング",
            "適用対象の契約・拠点範囲",
            "単価改定のみか、契約条件変更を伴うか",
            "通知期限と異議申出・解約期限の関係",
          ],
        },
        {
          heading: "すぐ見直すべきケースと慎重に判断したいケース",
          paragraphs: [
            "更新期限や解約申出期限が近い場合は、すぐに比較準備へ進む必要があります。一方で、期限まで余裕があり条件変更が限定的な場合は、慌てず資料整理と比較前提の統一を優先できます。",
            "重要なのは、感情的な判断ではなく、期限と影響度を基準に行動を分けることです。",
          ],
        },
        {
          heading: "比較前に確認しておきたい契約期限と条件",
          paragraphs: [
            "通知を見た段階で、現契約の更新月・通知期限・解約期限を再確認します。期限が厳しい契約では、見積取得と社内確認を同時並行で進める必要があります。",
            "比較時は、見積条件だけでなく、違約金や更新条件まで含めて同条件で評価することが不可欠です。",
          ],
        },
        {
          heading: "社内で説明しやすい見直し判断の進め方",
          paragraphs: [
            "社内説明では『通知内容の確認結果』『期限制約』『代替案比較』の順に整理すると、意思決定が通りやすくなります。単価差だけを示すより、判断理由を共有しやすくなります。",
            "切替を選ばない場合も、判断根拠を文書化しておくと次回通知時の対応が早くなります。",
          ],
        },
      ]}
      extraSections={[
        {
          heading: "値上げ通知後の見直しで期待できる効果",
          note: (
            <div className="overflow-x-auto">
              <p className="mb-3">月間50,000kWh使用の高圧事業所を想定した、値上げ幅別の見直し効果目安です。</p>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">値上げ幅</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間増加額</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">相見積で期待できる削減</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">+2円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">+120万円/年</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲60〜120万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">+3円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">+180万円/年</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲90〜180万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">+5円/kWh以上</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">+300万円以上/年</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲150〜300万円</span></td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">実例:</span> 月50,000kWh使用の商業施設が3円/kWh値上げ通知を受けて相見積を取得 → 他社で1.5円/kWh安い条件を獲得し、年間<span className="font-semibold text-slate-900">▲90万円</span>のコスト削減を実現。
              </p>
            </div>
          ),
        },
      ]}
      relatedIntro="値上げ通知対応の精度を上げるために、期限確認・契約書確認・単価比較の見方をあわせて確認できます。"
      relatedLinks={[
        {
          href: "/is-business-electricity-price-increase-unreasonable",
          title: "法人の電気料金の値上げはおかしいのか",
          description: "値上げに違和感がある場合の確認観点を整理できます。",
        },
        {
          href: "/review-contract-renewal-deadlines",
          title: "法人の電力契約を更新前に確認したい期限とは",
          description: "通知後に必須となる期限確認の実務を把握できます。",
        },
        {
          href: "/where-to-check-in-electricity-contract",
          title: "契約書のどこに見直し時の注意点が書かれているのか",
          description: "通知内容を契約条項と照合する際の確認箇所を整理できます。",
        },
        {
          href: "/cheap-unit-price-not-always-better",
          title: "なぜ単価が安い提案でも、必ずしも有利とは限らないのか",
          description: "通知後の比較で起きやすい単価偏重の誤判断を避けられます。",
        },
        {
          href: "/businesses-suited-for-fixed-price-electricity-plan",
          title: "固定プランが向く法人の特徴",
          description: "値上げ通知を受けて固定プランへの切替を検討する際の判断基準。",
        },
      ]}
      ctaDescription="通知内容と期限を整理したら、使い方ページで比較準備を確認し、比較ページで代替案を同条件で評価して判断を進めます。"
      glossaryTerms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "市場連動プラン", "固定プラン", "最終保障供給"]}
    />
    <div className="mx-auto w-full max-w-[1600px] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mt-6">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/review-contract-renewal-deadlines", title: "法人の電力契約を更新前に確認したい期限とは", description: "通知と期限を照らし合わせて判断する際の参考。" },
            { href: "/where-to-check-in-electricity-contract", title: "契約書のどこに見直し時の注意点が書かれているのか", description: "通知内容と契約条項の整合を確認する視点を整理します。" },
            { href: "/switching-business-electricity-contract", title: "法人が電力契約を切り替えるときの注意点", description: "通知を受けて切替に進む場合の実務ポイント。" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="契約見直しの次のステップ"
          description="見直しのポイントを確認したら、シミュレーターで自社のリスクを診断してみましょう。"
          links={[
            { href: "/simulate", label: "リスク診断シミュレーター" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
    </div>
    </>
  );
}
