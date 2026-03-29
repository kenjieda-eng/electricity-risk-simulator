import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人の電気料金見直しで集めるべき資料一覧";
const pageDescription =
  "法人向け電気料金の見直しでは、請求書、契約書、見積書、使用実績などの資料整理が重要です。比較や社内確認の前に集めたい資料を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/documents-needed-for-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/documents-needed-for-electricity-contract-review",
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

export default function DocumentsNeededForElectricityContractReviewPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "見直し実務が止まる原因の多くは、比較前に必要資料がそろっていないことです。何を集めるべきかを先に整理すると、見積取得や社内確認をスムーズに進められます。",
        "このページでは、資料の『確認方法』ではなく『収集対象』に特化して、実務で使える一覧を整理します。",
      ]}
      sections={[
        {
          heading: "電気料金見直しで資料整理が重要な理由",
          paragraphs: [
            "資料が不足した状態で比較すると、前提条件がそろわず判断がぶれやすくなります。特に複数拠点では、資料保有先が分散しているため初期整理が不可欠です。",
            "資料整理を最初に行うことで、期限管理、社内説明、切替手続きまで一貫した進行がしやすくなります。",
          ],
        },
        {
          heading: "まず集めたい請求書・契約書・見積書",
          paragraphs: [
            "請求書は過去数か月から1年分、契約書は現契約本文と覚書、見積書は比較対象分をそろえます。資料の更新日や適用期間も合わせて確認しておくと誤読を防げます。",
            "見積書は最新版だけでなく、前提条件が分かる補足資料も保管しておくと、社内説明時に役立ちます。",
          ],
          bullets: [
            "過去数か月から1年分の請求書",
            "現契約書、別紙、覚書、更新条件資料",
            "比較対象の見積書と条件説明資料",
            "通知文書や改定案内などの補足資料",
          ],
        },
        {
          heading: "使用実績や設備情報で確認したいこと",
          paragraphs: [
            "使用量実績、可能であれば需要実績や30分値を用意すると、見積前提を実態に合わせやすくなります。設備変更予定や稼働変更情報も、比較時の重要な前提です。",
            "設備情報が不足すると、契約条件と運用実態のミスマッチを見落としやすくなります。",
          ],
        },
        {
          heading: "複数拠点企業で追加でそろえたい資料",
          paragraphs: [
            "多拠点法人では、拠点一覧と契約一覧を統一フォーマットで作成すると、優先順位をつけやすくなります。拠点ごとの更新月と契約電力を一目で確認できる形が有効です。",
            "本社集約管理と現場保管の資料が混在するため、取得元と最新版の管理ルールを決めておくと運用しやすくなります。",
          ],
        },
        {
          heading: "比較や社内説明に使いやすい整理方法",
          paragraphs: [
            "資料は『契約』『請求』『使用実態』『見積』の4区分で整理し、比較前提との対応関係を明確にします。社内説明では、資料根拠を示すことで判断の透明性が上がります。",
            "切替後の確認にも使えるよう、初回請求確認に必要な資料も同時に残しておくと実務効率が高まります。",
          ],
        },
      ]}
      relatedIntro="資料収集を実行に移すために、請求書の読み方・社内確認項目・多拠点実務・全体手順をあわせて確認できます。"
      relatedLinks={[
        {
          href: "/how-to-read-electricity-bills-for-review",
          title: "請求書のどこを見れば電力契約見直しのヒントが分かるのか",
          description: "収集した請求書の確認視点を具体化できます。",
        },
        {
          href: "/internal-checklist-for-electricity-contract-review",
          title: "法人の電力契約見直しで社内確認したい項目一覧",
          description: "資料収集を部署連携に落とし込めます。",
        },
        {
          href: "/review-multi-site-electricity-contracts",
          title: "複数拠点の電力契約を見直すときの進め方",
          description: "多拠点での資料整理・優先順位判断に使えます。",
        },
        {
          href: "/how-to-start-electricity-contract-review",
          title: "法人の電力契約見直しは何から始めるべきか",
          description: "資料収集を含む全体手順を確認できます。",
        },
      ]}
      ctaDescription="必要資料をそろえたら、使い方ページで入力前提を確認し、比較ページで条件差を同じ土台で評価して見直し判断を進めます。"
    />
  );
}
