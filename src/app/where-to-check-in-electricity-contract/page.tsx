import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "契約書のどこに見直し時の注意点が書かれているのか";
const pageDescription =
  "法人向け電力契約の見直しでは、契約書の更新条項、解約条件、違約金、単価改定条件などの確認が重要です。契約書で見たいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/where-to-check-in-electricity-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/where-to-check-in-electricity-contract",
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

export default function WhereToCheckInElectricityContractPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "見直し時に契約条件を理解しているつもりでも、実際には重要条項の確認漏れが起きやすいのが契約書です。特に更新・解約・単価改定に関する条項は、小さな記載でも実務影響が大きくなります。",
        "このページでは、契約条件の一般論ではなく、契約書のどこを読むかに絞って確認ポイントを整理します。",
      ]}
      sections={[
        {
          heading: "電力契約見直しで契約書確認が欠かせない理由",
          paragraphs: [
            "見積書の価格条件だけでは、更新制約や解約リスクを把握しきれません。契約書を確認することで、いつ・どの条件で見直し可能かを明確にできます。",
            "特に期限管理が必要な条項は、見直し可否そのものに直結するため、比較前に確認しておく必要があります。",
          ],
        },
        {
          heading: "まず見たい更新条項・解約条件・通知期限",
          paragraphs: [
            "更新条項では、自動更新の有無、通知期限、更新時の条件変更ルールを確認します。解約条件では、解約申出期限と必要手続きの記載場所を押さえることが重要です。",
            "更新月だけを見て判断すると、通知期限を見落として機会を逃すため、条項単位で確認します。",
          ],
          bullets: [
            "契約期間の開始日・終了日",
            "自動更新の有無と更新拒否期限",
            "解約申出期限と必要書類",
            "更新時の条件改定条項",
          ],
        },
        {
          heading: "単価改定や違約金で確認したいポイント",
          paragraphs: [
            "単価改定条項は、改定条件、通知方法、適用時期を確認します。改定幅だけでなく、改定の前提となる指標や判断条件まで確認しておくと誤解を減らせます。",
            "違約金条項では、発生条件、算定方法、対象期間を確認し、切替や統廃合計画と整合しているかを判断します。",
          ],
        },
        {
          heading: "本文以外の別紙・覚書で見落としやすい点",
          paragraphs: [
            "重要条件が別紙や覚書に記載されているケースは珍しくありません。本文だけを読んで判断すると、通知期限や例外条件の見落としにつながります。",
            "契約書一式を一覧化し、条項が分散している場合は照合表を作ると実務で扱いやすくなります。",
          ],
        },
        {
          heading: "契約書確認を見積比較につなげる考え方",
          paragraphs: [
            "契約書確認の目的は、見積比較を正しく行う前提をつくることです。請求書実績と見積条件を契約条項に照らして確認すると、実際の運用リスクを把握できます。",
            "契約書だけで判断せず、請求書・見積書と合わせて確認する運用を基本にすると、導入後のズレを抑えられます。",
          ],
        },
      ]}
      relatedIntro="契約書確認を見直し実務へつなげるために、既存の契約条件解説や期限管理・請求書確認ページをあわせて活用できます。"
      relatedLinks={[
        {
          href: "/electricity-contract-terms",
          title: "法人向け電力契約で確認したい契約条件",
          description: "契約条件の全体像を先に確認したい場合に役立ちます。",
        },
        {
          href: "/review-contract-renewal-deadlines",
          title: "法人の電力契約を更新前に確認したい期限とは",
          description: "契約書条項を期限管理へ落とし込む際に使えます。",
        },
        {
          href: "/switching-business-electricity-contract",
          title: "法人が電力契約を切り替えるときの注意点",
          description: "契約書確認を切替実務へつなげる際の注意点を確認できます。",
        },
        {
          href: "/how-to-read-electricity-bills-for-review",
          title: "請求書のどこを見れば電力契約見直しのヒントが分かるのか",
          description: "契約書と請求書の突合に使える確認視点を整理できます。",
        },
      ]}
      ctaDescription="契約書の確認箇所を整理したら、使い方ページで必要情報を整え、比較ページで見積条件と契約条項の整合を確認して進めます。"
    />
  );
}
