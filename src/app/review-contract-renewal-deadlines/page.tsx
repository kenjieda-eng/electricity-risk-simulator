import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人の電力契約を更新前に確認したい期限とは";
const pageDescription =
  "法人向け電力契約の見直しで重要な、更新月・通知期限・解約申出期限の確認ポイントを整理します。自動更新や切替準備の遅れを防ぎたい企業・自治体向けの実務解説です。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し", "自治体電力契約"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/review-contract-renewal-deadlines",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/review-contract-renewal-deadlines",
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

export default function ReviewContractRenewalDeadlinesPage() {
  const faq = [
    { question: "電力契約の更新前に確認すべき期限は何ですか？", answer: "更新月・通知期限・解約申出期限の3点を確認します。通知期限（多くは更新月の2〜3か月前）を過ぎると比較検討の余地が狭まるため、少なくとも6か月前から準備することが推奨されます。" },
    { question: "自動更新された場合、すぐに解約できますか？", answer: "多くの契約では自動更新後も解約可能ですが、途中解約の場合は違約金が発生する場合があります。契約書の中途解約条項と違約金の計算方法を事前に確認することが重要です。" },
    { question: "法人の電力契約の更新は何か月前から準備すべきですか？", answer: "理想は更新月の6か月前から情報収集を始め、3か月前には見積依頼を行い、1〜2か月前に解約通知・切替判断を行うスケジュールが推奨されます。" },
  ];
  const sources = [
    { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・契約に関する情報" },
    { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力契約の制度・手続きに関する情報" },
  ];
  return (
    <ReviewArticlePage
      breadcrumbLabel="更新前の確認期限"
      slug="review-contract-renewal-deadlines"
      jsonLdUrl="https://simulator.eic-jp.org/review-contract-renewal-deadlines"
      jsonLdHeadline={pageTitle}
      jsonLdDescription={pageDescription}
      publishedAt="2026-03-29"
      faq={faq}
      sources={sources}
      title={pageTitle}
      lead={[
        "更新前の見直しでは、料金単価より先に期限管理を確認することが重要です。更新月だけを見ていると、通知期限や解約申出期限を過ぎてしまい、比較や切替の余地を失うことがあります。",
        "このページでは、更新前に見落としやすい期限の違いと、実務で間に合わせるための準備時期を整理します。",
      ]}
      sections={[
        {
          heading: "法人の電力契約で「更新前の期限確認」が重要な理由",
          paragraphs: [
            "法人の電力契約は、自動更新条項があることで、気づかないまま次年度へ継続してしまうケースがあります。更新時に見直すつもりでも、通知期限を過ぎると選択肢が狭くなります。",
            "特に値上げ通知が来てから動く運用だと、解約申出期限に間に合わない可能性があります。まず期限を把握し、比較・社内確認・切替準備の時間を逆算するのが実務の基本です。",
          ],
        },
        {
          heading: "まず確認したい更新月・通知期限・解約申出期限",
          paragraphs: [
            "更新月と通知期限は同じ意味ではありません。更新月は契約が切り替わる時点、通知期限はその前に意思表示が必要な締切です。",
            "解約申出期限がさらに早い契約もあるため、契約書本文だけでなく、覚書や別紙の期限記載まで含めて確認します。",
          ],
          bullets: [
            "更新月: 契約が満了・更新される月",
            "通知期限: 条件変更や更新拒否の通知締切",
            "解約申出期限: 解約意思表示が必要な最終時点",
          ],
        },
        {
          heading: "自動更新条項で見落としやすい注意点",
          paragraphs: [
            "自動更新のある契約では、更新拒否の期限を超えると同条件または改定条件で継続されることがあります。見直しの自由度を確保するためには、満了日の管理だけでは不十分です。",
            "また、更新時に単価改定条件が適用される契約では、通知時期と適用時期がずれる場合があります。請求書への反映タイミングも合わせて確認しておくと社内説明がしやすくなります。",
          ],
        },
        {
          heading: "見直し準備はいつから始めるべきか",
          paragraphs: [
            "比較や見積取得、社内稟議、切替手続きには想定より時間がかかります。更新月の直前ではなく、少なくとも数か月前から資料収集と社内調整を始める運用が安全です。",
            "複数拠点を持つ法人では、拠点ごとの更新月や契約条件が違うため、優先順位をつけた段階実施が実務的です。",
          ],
        },
        {
          heading: "更新前に社内でそろえておきたい確認事項",
          paragraphs: [
            "期限確認に必要な資料は、契約書、覚書、見積書、過去請求書です。資料ごとに記載内容が異なるため、1つの文書だけで判断しないことが重要です。",
            "あわせて、現場の使用実態や設備変更予定を確認すると、更新後に契約条件が実態とずれるリスクを減らせます。",
          ],
        },
      ]}
      extraSections={[
        {
          heading: "契約更新タイミング別 見直し効果の目安",
          note: (
            <div className="overflow-x-auto">
              <p className="mb-3">月間50,000kWh使用の高圧事業所を想定した、更新タイミング別の見直し効果目安です。</p>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">更新までの期間</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見直し可能な範囲</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間効果目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">6か月以上前</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">プラン変更・電力会社切替</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲50〜200万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">3〜6か月前</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">条件交渉・相見積取得</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲30〜100万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜3か月前</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約条項の微調整</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲10〜30万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">1か月未満</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">更新条件の確認のみ</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">効果限定的</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-xs text-slate-500">※ 効果は契約条件・エリア・使用パターンにより異なります。</p>
            </div>
          ),
        },
      ]}
      relatedIntro="期限管理を整理した後は、契約条件・見直し手順・切替実務まで確認すると、更新前の判断が進めやすくなります。"
      relatedLinks={[
        {
          href: "/when-to-review-electricity-contract",
          title: "法人が電力契約を見直すタイミング",
          description: "見直し時期の全体像と判断の入口を確認できます。",
        },
        {
          href: "/electricity-contract-terms",
          title: "法人向け電力契約で確認したい契約条件",
          description: "更新条項・違約金・解約条件の基本確認に使えます。",
        },
        {
          href: "/how-to-start-electricity-contract-review",
          title: "法人の電力契約見直しは何から始めるべきか",
          description: "期限確認を含む実務手順を入口から整理できます。",
        },
        {
          href: "/switching-business-electricity-contract",
          title: "法人が電力契約を切り替えるときの注意点",
          description: "更新前の準備を切替実行に接続する際の注意点を確認できます。",
        },
        {
          href: "/electricity-contract-cancellation-renewal-terms",
          title: "電力契約の解約・更新条件の確認ポイント",
          description: "更新期限と解約条件を詳しく確認できます。",
        },
      ]}
      ctaDescription="更新前に期限を整理したら、比較ページで候補条件を並べて、社内確認に使える判断材料を準備しておくと実行段階で混乱しにくくなります。"
      glossaryTerms={["市場連動プラン", "固定プラン", "燃料費調整額", "最終保障供給", "基本料金"]}
    />
  );
}
