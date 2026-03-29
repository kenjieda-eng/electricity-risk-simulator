import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "どんな会社ほど電力契約の見直し効果が出やすいのか";
const pageDescription =
  "電力契約の見直し効果は、すべての法人で同じではありません。複数拠点、高使用量、契約更新前など、見直し効果が出やすい会社の特徴を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/which-companies-benefit-most-from-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/which-companies-benefit-most-from-review",
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

export default function WhichCompaniesBenefitMostFromReviewPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "電力契約の見直しは、すべての法人で同じ効果が出るわけではありません。自社に見直し余地があるかを先に把握すると、比較の優先度を決めやすくなります。",
        "このページでは、料金水準だけでなく契約条件や使用パターンも含めて、見直し効果が出やすい法人の特徴を整理します。",
      ]}
      sections={[
        {
          heading: "電力契約の見直し効果はどんな会社で出やすいのか",
          paragraphs: [
            "使用量が大きい法人や複数拠点を持つ法人は、見直しによる影響額が大きくなりやすい傾向があります。契約更新前であれば、条件変更の柔軟性も高くなります。",
            "ただし、見直し効果は単価低減だけでなく、契約安定性や運用負荷の改善として現れる場合もあります。",
          ],
        },
        {
          heading: "見直し余地が大きくなりやすい法人の特徴",
          paragraphs: [
            "拠点間で契約条件や料金水準にばらつきがある法人は、整理と統一だけでも改善余地が見つかることがあります。特に更新月が分散している場合は、優先順位をつけた段階見直しが有効です。",
            "値上げ通知対応だけでなく、設備更新や稼働変更が重なっている法人も見直し余地が大きくなりやすい傾向があります。",
          ],
          bullets: [
            "複数拠点で契約条件がばらついている",
            "契約更新時期が近づいている",
            "使用量やデマンドが大きく変化している",
            "請求確認と契約管理の連携が弱い",
          ],
        },
        {
          heading: "契約条件と使用実態のズレが出やすいケース",
          paragraphs: [
            "契約条件が導入時の前提のままになっていると、現状の運用実態と合わなくなることがあります。単価が妥当でも、契約電力や更新条件が実態とずれていれば最適とは言えません。",
            "請求書、契約書、見積書を横断して確認すると、どこにズレがあるかを把握しやすくなります。",
          ],
        },
        {
          heading: "大きく下がらない場合でも見直す意味があるケース",
          paragraphs: [
            "見直しで大幅な価格差が出ない場合でも、契約条件の明確化や更新時の柔軟性確保は実務上の価値があります。予算説明の透明性が高まることも重要な効果です。",
            "将来の値上げ局面で慌てずに判断できる体制を整える意味でも、定期的な見直しは有効です。",
          ],
        },
        {
          heading: "自社の優先度をどう判断するか",
          paragraphs: [
            "優先度は、影響額、更新期限、実態変化、社内体制の4点で判断します。全項目を一度に進めるより、優先度の高い拠点や契約から着手する方が成果につながりやすくなります。",
            "判断に迷う場合は、まず最低限の確認項目を押さえてから比較に進むと、手戻りを減らせます。",
          ],
        },
      ]}
      relatedIntro="自社の見直し優先度を判断するために、使用実態変化や基本確認項目をあわせて確認できます。"
      relatedLinks={[
        {
          href: "/why-business-electricity-costs-are-high",
          title: "法人の電気料金が高い会社に共通する特徴",
          description: "高止まり要因を契約・運用面から確認できます。",
        },
        {
          href: "/review-contract-when-usage-changes",
          title: "使用量やデマンドが変わったとき、電力契約は見直すべきか",
          description: "使用実態変化を見直し判断につなげる方法を確認できます。",
        },
        {
          href: "/review-multi-site-electricity-contracts",
          title: "複数拠点の電力契約を見直すときの進め方",
          description: "多拠点法人の優先順位付けを整理できます。",
        },
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "見直し優先度判断の前提を短時間で確認できます。",
        },
      ]}
      ctaDescription="見直し優先度を整理したら、比較ページで高優先の契約から検討し、使い方ページを参照しながら実務フローへ落とし込みます。"
    />
  );
}
