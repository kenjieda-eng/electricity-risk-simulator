import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "補助金終了・縮小の前後で電力契約は見直すべきか";
const pageDescription =
  "補助金の終了や縮小で電気料金の見え方は変わります。補助政策による一時的な変化と契約そのものの問題を分けて、見直し判断のポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/should-you-review-around-subsidy-end",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/should-you-review-around-subsidy-end",
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

export default function ShouldYouReviewAroundSubsidyEndPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "補助金終了や縮小の局面では、電気料金の見え方が急に変わるため、契約問題と政策要因が混同されやすくなります。見直し判断を誤らないには、要因を分けて整理することが重要です。",
        "このページでは、時事ニュースに依存せず、補助前後で使える実務的な判断手順を解説します。",
      ]}
      sections={[
        {
          heading: "補助金終了・縮小で電力契約の見直しが話題になりやすい理由",
          paragraphs: [
            "補助がある期間は請求額が抑えられて見えるため、契約条件の差が見えにくくなります。補助終了後に急な上昇を感じることで、見直し検討が一気に進むケースが多くなります。",
            "ただし、上昇要因が補助縮小なのか契約条件なのかを分けないと、比較判断の精度が下がります。",
          ],
        },
        {
          heading: "補助政策による料金変化と契約条件の違い",
          paragraphs: [
            "補助金で見かけの料金が変わっても、契約条件自体が変わったとは限りません。契約単価、調整項目、更新条件は別軸で確認する必要があります。",
            "政策要因を除いた比較を行うことで、契約見直し余地の有無をより正確に把握できます。",
          ],
          bullets: [
            "政策要因: 補助対象・補助額・適用期間",
            "契約要因: 単価体系・調整項目・契約条件",
            "運用要因: 使用量・デマンド・設備稼働",
          ],
        },
        {
          heading: "補助終了後に確認したい料金の見え方",
          paragraphs: [
            "補助終了後は、請求書のどの項目が増えているかを分解して確認します。総額だけを見ると、使用量変化と政策要因を区別しにくくなります。",
            "複数月比較で変化を把握し、短期的な変動と継続的なコスト構造を分けて判断することが重要です。",
          ],
        },
        {
          heading: "見直し判断を誤らないための比較のしかた",
          paragraphs: [
            "補助がある間に、契約条件や見積前提を整理しておくと、補助終了後に慌てずに比較できます。期限が近い契約では、準備時期の前倒しが有効です。",
            "比較では、単価差だけでなく年間総額の見え方とリスクの出方を確認すると、政策変動に左右されにくい判断ができます。",
          ],
        },
        {
          heading: "社内説明で押さえたい整理のポイント",
          paragraphs: [
            "社内説明では『補助影響』と『契約見直し余地』を分けて示すと、判断理由が伝わりやすくなります。補助終了だけを理由にした切替提案は、説得力が弱くなりがちです。",
            "政策変動があっても継続的に使える確認軸を共有しておくと、次回の見直し実務も安定します。",
          ],
        },
      ]}
      relatedIntro="補助前後の判断を安定させるために、請求書確認と見積比較の実務ページをあわせて確認できます。"
      relatedLinks={[
        {
          href: "/is-business-electricity-price-increase-unreasonable",
          title: "法人の電気料金の値上げはおかしいのか",
          description: "値上げ要因を分解して確認する視点を整理できます。",
        },
        {
          href: "/how-to-read-electricity-bills-for-review",
          title: "請求書のどこを見れば電力契約見直しのヒントが分かるのか",
          description: "補助影響と契約要因を請求書で切り分ける際に役立ちます。",
        },
        {
          href: "/compare-business-electricity-estimates",
          title: "法人向け電力見積書の比較で見落としやすい項目",
          description: "補助終了後の見積比較で外せない確認項目を整理できます。",
        },
        {
          href: "/compare",
          title: "比較ページ",
          description: "政策要因を踏まえたうえで候補条件を実務的に比較できます。",
        },
      ]}
      ctaDescription="補助影響と契約要因を分けて整理したら、比較ページで条件差を確認し、使い方ページを見ながら社内説明しやすい形で評価を進めます。"
    />
  );
}
