import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人の電力契約見直しで社内確認したい項目一覧";
const pageDescription =
  "法人向け電力契約の見直しでは、請求条件だけでなく、社内の関係部署や運用実態の確認も重要です。総務・経理・施設管理などの確認項目を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/internal-checklist-for-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/internal-checklist-for-electricity-contract-review",
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

export default function InternalChecklistForElectricityContractReviewPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "電力契約の見直しは、外部比較だけで完結する業務ではありません。社内で必要情報がそろわないと、見積比較や稟議が進まず、期限超過につながることがあります。",
        "このページでは、部署横断で確認すべき項目を整理し、見直し実務を前に進めるための社内チェックリストを示します。",
      ]}
      sections={[
        {
          heading: "法人の電力契約見直しで社内確認が重要な理由",
          paragraphs: [
            "見直し判断には、契約条件、請求実績、使用実態、設備計画など複数情報が必要です。これらは部門ごとに保有先が分かれるため、初期段階で確認体制を作ることが欠かせません。",
            "社内確認が不十分だと、比較前提が曖昧になり、導入後に『想定と違う』というズレが発生しやすくなります。",
          ],
        },
        {
          heading: "部署ごとに確認したい主な項目",
          paragraphs: [
            "総務、経理、施設管理、購買、拠点責任者では確認観点が異なります。誰がどの情報を持つかを明確にすると、依頼漏れを防げます。",
            "経営企画が関与する場合は、予算影響や説明資料の整合も合わせて確認すると意思決定が早くなります。",
          ],
          bullets: [
            "総務: 契約書、更新期限、解約手続き",
            "経理: 請求書、計上タイミング、予算影響",
            "施設管理: 使用実態、デマンド、設備変更予定",
            "購買: 比較条件、見積取得、取引条件",
            "拠点責任者: 稼働実態、運用上の制約",
          ],
        },
        {
          heading: "契約・請求・使用実態でそろえておきたい情報",
          paragraphs: [
            "契約情報と請求情報だけでなく、実際の運用実態を合わせて確認することで、単価比較では見えないリスクを把握できます。過去数か月から1年程度のデータがあると判断精度が上がります。",
            "設備更新予定や稼働変更予定がある場合は、見積前提に反映できるよう時期も明確にしておくことが重要です。",
          ],
        },
        {
          heading: "稟議や社内説明で押さえたい論点",
          paragraphs: [
            "社内説明では、価格差だけでなく契約条件、柔軟性、運用負荷、切替後確認の体制まで示すと納得を得やすくなります。単価だけの説明は、後からの質問対応が増えがちです。",
            "比較前提と判断基準を先に合意しておくことで、部署間の認識差を最小化できます。",
          ],
        },
        {
          heading: "見直しを進めやすくする社内整理の考え方",
          paragraphs: [
            "社内整理は、担当者単独ではなく、情報保有部署と期限をセットで管理する運用が有効です。特に更新前は、確認遅れがそのまま機会損失につながります。",
            "切替後の請求確認担当まで事前に決めておくと、見直しを一時的対応で終わらせず、次回更新にも活かしやすくなります。",
          ],
        },
      ]}
      relatedIntro="社内確認項目を整理したら、担当体制・必要資料・全体手順を接続して実行しやすい形にします。"
      relatedLinks={[
        {
          href: "/who-should-handle-electricity-contract-review",
          title: "どの部署が法人の電力契約見直しを担当するべきか",
          description: "主導部署と分担体制の考え方を整理できます。",
        },
        {
          href: "/documents-needed-for-electricity-contract-review",
          title: "法人の電気料金見直しで集めるべき資料一覧",
          description: "社内確認で必要な資料の収集範囲を明確にできます。",
        },
        {
          href: "/how-to-start-electricity-contract-review",
          title: "法人の電力契約見直しは何から始めるべきか",
          description: "社内確認を含む見直し全体手順を確認できます。",
        },
        {
          href: "/switching-business-electricity-contract",
          title: "法人が電力契約を切り替えるときの注意点",
          description: "社内整理を切替実務へつなげる際の確認点を把握できます。",
        },
      ]}
      ctaDescription="社内確認項目をそろえたら、比較ページで候補を同条件で検討し、使い方ページを参照しながら稟議・切替までの実務を進めます。"
    />
  );
}
