import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人の電力契約見直しで最低限確認したい5項目";
const pageDescription =
  "法人向け電力契約を見直すときに、最低限確認しておきたい5項目を整理します。単価比較だけで判断しないための基本チェックポイントをまとめた実務向けページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/5-minimum-checkpoints-for-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/5-minimum-checkpoints-for-electricity-contract-review",
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

export default function FiveMinimumCheckpointsForElectricityContractReviewPage() {
  return (
    <ReviewArticlePage
      slug="5-minimum-checkpoints-for-electricity-contract-review"
      title={pageTitle}
      lead={[
        "見直し担当者が最初に迷いやすいのは、何をどこまで確認すべきかです。このページはカテゴリ5の入口として、最低限外せない5項目を実務向けに整理しています。",
        "各項目は詳細ページへ接続できる構成にしているため、短時間で全体像をつかみたい場合に活用できます。",
      ]}
      sections={[
        {
          heading: "法人の電力契約見直しで最初に押さえたい考え方",
          paragraphs: [
            "見直しでは、単価の高低だけで判断しないことが基本です。請求構造、契約条件、調整項目、解約条件、使用実態の5点をそろえることで、比較判断の質が上がります。",
            "この5項目を確認すると、どの資料を追加で見るべきか、どの部署と連携すべきかも明確になります。",
          ],
        },
        {
          heading: "1. 現在の請求構造を確認する",
          paragraphs: [
            "請求書から、基本料金、電力量料金、調整項目、使用量の内訳を確認します。総額だけでは、見直し余地の所在が分かりません。",
            "複数月比較で変化を把握すると、単月の例外ではなく構造的な傾向を確認できます。",
          ],
        },
        {
          heading: "2. 契約期間と更新条件を確認する",
          paragraphs: [
            "更新月、通知期限、解約申出期限を明確にし、見直し可能なタイミングを把握します。更新月だけ見て判断すると、手続き期限に間に合わない可能性があります。",
            "自動更新条項や更新時改定条件も、見直し計画に含めて確認します。",
          ],
        },
        {
          heading: "3. 単価以外の調整項目を確認する",
          paragraphs: [
            "燃料費調整額や市場価格調整額など、後から効く項目の扱いを確認します。見積比較では、これらの項目が含まれるか否かで結果が変わります。",
            "単価が安く見える提案でも、調整項目次第で総額差が逆転する場合があります。",
          ],
        },
        {
          heading: "4. 違約金と解約条件を確認する",
          paragraphs: [
            "解約時の違約金、申出期限、必要手続きは、切替可否に直結します。比較前に把握しておくと、実行段階での手戻りを防げます。",
            "契約書本文だけでなく、別紙・覚書まで確認対象に含めることが重要です。",
          ],
        },
        {
          heading: "5. 使用実態と契約条件の合い方を確認する",
          paragraphs: [
            "使用量、デマンド、稼働時間帯、設備変更予定と、契約条件が合っているかを確認します。使用実態が変わっている場合、契約前提が古いままの可能性があります。",
            "見直し効果は、価格だけでなく運用のしやすさや説明しやすさにも表れる点を押さえます。",
          ],
        },
      ]}
      relatedIntro="5項目を押さえたら、資料・見積・切替までを同じ流れで読むと、比較から実行までがつながります。"
      relatedLinks={[
        {
          href: "/documents-needed-for-electricity-contract-review",
          title: "法人の電気料金見直しで集めるべき資料一覧",
          description: "比較前にそろえる請求書・契約書・見積書の範囲を確認できます。",
        },
        {
          href: "/when-to-review-electricity-contract",
          title: "法人が電力契約を見直すタイミング",
          description: "着手時期と確認順序を実務目線で整理できます。",
        },
        {
          href: "/switching-business-electricity-contract",
          title: "法人が電力契約を切り替えるときの注意点",
          description: "比較後の切替実行でつまずきやすい点を整理できます。",
        },
        {
          href: "/how-to-read-electricity-quote",
          title: "法人向け電気料金見積書の見方",
          description: "見積比較の前提条件を項目別に確認できます。",
        },
        {
          href: "/compare",
          title: "料金メニューの比較・診断",
          description: "固定と市場連動の差分を、自社に近い条件で試算できます。",
        },
      ]}
      ctaDescription="最低限の5項目を整理したら、比較ページで候補条件を並べ、使い方ページを見ながら実務フローに沿って確認を進めます。"
    />
  );
}
