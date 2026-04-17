import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "どの部署が法人の電力契約見直しを担当するべきか";
const pageDescription =
  "法人向け電力契約の見直しは、総務・経理・施設管理・購買など複数部署にまたがることがあります。どの部署が主導しやすいかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/who-should-handle-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/who-should-handle-electricity-contract-review",
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

export default function WhoShouldHandleElectricityContractReviewPage() {
  const faq = [
    { question: "電力契約見直しは総務と経理どちらが担当すべきですか？", answer: "会社規模や体制によりますが、契約管理に強い組織は総務主導、コスト管理に強い組織は経理主導が機能しやすい傾向があります。重要なのは期限管理・情報収集・判断基準の統一を担える部署が主導することです。" },
    { question: "施設管理部門は電力契約見直しにどう関わりますか？", answer: "施設管理は使用量・デマンド実績の把握に強みがあります。見積依頼の前提条件となるデータの提供や、切替後の設備影響確認などで重要な役割を担います。" },
    { question: "複数部署で見直しを進めるとき、役割をどう決めますか？", answer: "主導部署が全体進行と期限管理を担い、協力部署は専門情報の提供と確認を担う形が実務的です。役割を文書化しておくと依頼漏れや判断遅延を防げます。" },
  ];
  const sources = [
    { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力契約の制度・手続きに関する情報" },
    { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・自由化に関する情報" },
  ];
  return (
    <ReviewArticlePage
      breadcrumbLabel="担当部署"
      slug="who-should-handle-electricity-contract-review"
      jsonLdUrl="https://simulator.eic-jp.org/who-should-handle-electricity-contract-review"
      jsonLdHeadline={pageTitle}
      jsonLdDescription={pageDescription}
      publishedAt="2026-03-29"
      faq={faq}
      sources={sources}
      title={pageTitle}
      lead={[
        "電力契約見直しは、誰が担当するかが曖昧なままだと進みにくい業務です。比較先を探す作業より先に、主導部署と協力部署の役割を明確にすることが実務上の近道になります。",
        "このページでは、企業・自治体・各種法人で使いやすい体制の考え方を、部署別の役割差に沿って整理します。",
      ]}
      sections={[
        {
          heading: "電力契約見直しの担当部署が曖昧になりやすい理由",
          paragraphs: [
            "契約書は総務、請求は経理、使用実態は施設管理や拠点が持つことが多く、情報保有先が分散しやすいのが背景です。業務の境界が曖昧だと、見直しが後回しになります。",
            "また、通常運用に支障がない限り優先順位が上がりにくく、値上げ通知などの外部要因が起きるまで着手されないケースもあります。",
          ],
        },
        {
          heading: "総務・経理・施設管理・購買の役割の違い",
          paragraphs: [
            "総務は契約期限管理、経理は請求確認、施設管理は使用実態把握、購買は比較調達の実行に強みがあります。どれか1部署だけで完結するより、役割分担した方が精度を上げやすくなります。",
            "経営企画が関与する場合は、予算影響や意思決定資料の整合を担う役割として機能しやすくなります。",
          ],
        },
        {
          heading: "どの部署が主導しやすいかをどう考えるか",
          paragraphs: [
            "正解は1つではなく、会社規模、拠点数、契約管理体制で変わります。契約管理が強い組織では総務主導、コスト管理が強い組織では経理主導が機能しやすい傾向があります。",
            "重要なのは、主導部署が『期限管理・情報収集・判断基準の統一』を担えるかどうかです。",
          ],
          bullets: [
            "単一拠点中心: 総務または経理主導が進めやすい",
            "多拠点企業: 本社主導＋拠点責任者連携が有効",
            "設備比重が高い業態: 施設管理の関与を厚くする",
          ],
        },
        {
          heading: "複数部署で進めるときの役割分担",
          paragraphs: [
            "主導部署は全体進行と期限管理、協力部署は専門情報の提供と確認を担う形が実務的です。役割を文書化すると、依頼漏れや判断遅延を防げます。",
            "比較段階だけでなく、切替後の請求確認担当まで決めておくと、見直し業務が継続運用につながります。",
          ],
        },
        {
          heading: "見直しを止めないための社内体制づくり",
          paragraphs: [
            "担当が曖昧だと、更新期限直前まで着手できない状態に陥りやすくなります。定期的な確認サイクルを設け、期限前に自動で検討開始できる運用を作ることが重要です。",
            "体制が明確になると、比較結果の社内説明や決裁も一貫した論点で進めやすくなります。",
          ],
        },
      ]}
      extraSections={[
        {
          heading: "担当部門別の見直し対応範囲と確認数値",
          note: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">担当部門</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">主な対応範囲</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">確認すべき数値</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">総務・管理部門</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書確認、契約更新管理</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">月額推移、前年同月比</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">経理・財務部門</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">予算策定、コスト分析</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間電力費、予算差異率</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">設備・施設管理</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量管理、省エネ対応</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンド値、力率、時間帯別使用量</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">経営企画・調達</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">電力会社選定、契約交渉</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">見積比較（円/kWh）、契約期間、違約金</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      relatedIntro="担当体制を決めた後は、社内確認項目と多拠点実務の進め方を合わせて確認すると実行しやすくなります。"
      relatedLinks={[
        {
          href: "/internal-checklist-for-electricity-contract-review",
          title: "法人の電力契約見直しで社内確認したい項目一覧",
          description: "部署横断で確認すべき具体項目を確認できます。",
        },
        {
          href: "/how-to-start-electricity-contract-review",
          title: "法人の電力契約見直しは何から始めるべきか",
          description: "担当体制を含む全体手順を入口から整理できます。",
        },
        {
          href: "/review-multi-site-electricity-contracts",
          title: "複数拠点の電力契約を見直すときの進め方",
          description: "多拠点体制での役割分担と優先度判断を確認できます。",
        },
        {
          href: "/articles/review-points",
          title: "見直しポイントを知るカテゴリ",
          description: "見直し実務の関連テーマを順に確認できます。",
        },
        {
          href: "/market-linked-vs-fixed",
          title: "市場連動プランと固定プランの違い",
          description: "担当体制が決まったら確認したいプラン選択の考え方。",
        },
      ]}
      ctaDescription="主導部署と役割分担を決めたら、使い方ページで準備手順を確認し、比較ページで共通前提をそろえて検討を進めます。"
      glossaryTerms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "市場連動プラン", "固定プラン", "電気料金の内訳"]}
    />
  );
}
