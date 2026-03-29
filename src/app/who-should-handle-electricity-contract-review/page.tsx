import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "どの部署が法人の電力契約見直しを担当するべきか";
const pageDescription =
  "法人向け電力契約の見直しは、総務・経理・施設管理・購買など複数部署にまたがることがあります。どの部署が主導しやすいかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
  return (
    <ReviewArticlePage
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
      ]}
      ctaDescription="主導部署と役割分担を決めたら、使い方ページで準備手順を確認し、比較ページで共通前提をそろえて検討を進めます。"
    />
  );
}
