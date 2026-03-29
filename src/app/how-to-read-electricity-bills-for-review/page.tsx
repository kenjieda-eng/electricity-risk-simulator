import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "請求書のどこを見れば電力契約見直しのヒントが分かるのか";
const pageDescription =
  "電力契約の見直しでは、まず請求書の確認が重要です。契約電力、使用量、調整額など、法人向け請求書で見ておきたいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-read-electricity-bills-for-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-bills-for-review",
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

export default function HowToReadElectricityBillsForReviewPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "見直し実務の入口として最も使いやすい資料は請求書です。まず請求書から現状を把握すると、契約書や見積書で何を確認すべきかが明確になります。",
        "このページでは、料金内訳の一般論ではなく、見直し判断につなげる読み方に絞って解説します。",
      ]}
      sections={[
        {
          heading: "電力契約見直しの出発点として請求書を見る理由",
          paragraphs: [
            "請求書には、契約電力、使用量、基本料金、電力量料金、調整項目など、見直し判断に必要な情報がまとまっています。まず現状の請求構造を把握することで、比較前提をそろえやすくなります。",
            "値上げ感の原因が使用量増なのか単価改定なのかを切り分ける第一歩として、請求書確認は欠かせません。",
          ],
        },
        {
          heading: "請求書でまず確認したい主要項目",
          paragraphs: [
            "契約電力、基本料金、電力量料金、使用量、燃料費調整額、市場価格調整額などの主要項目を確認します。どの項目が月次変動の主因かを把握することが重要です。",
            "項目名は電力会社ごとに異なる場合があるため、表記差に注意しながら同一概念で整理します。",
          ],
          bullets: [
            "契約電力とその変更有無",
            "基本料金と電力量料金の内訳",
            "使用量の推移とピーク傾向",
            "燃料費調整額・市場価格調整額などの調整項目",
            "請求対象期間と検針日",
          ],
        },
        {
          heading: "高い理由を分けて見るための読み方",
          paragraphs: [
            "請求額が高い理由は、使用量要因、単価要因、調整項目要因に分けて確認します。総額だけで判断すると、どこから手をつけるべきかが不明確になります。",
            "月次比較では、増減した項目を特定してから契約条件や運用実態との関係を確認すると、見直し方針を立てやすくなります。",
          ],
        },
        {
          heading: "複数月の請求書を並べて見たいポイント",
          paragraphs: [
            "1か月分だけでは季節要因や一時要因を見誤るため、複数月で並べて変化を確認します。可能であれば過去1年分の推移を把握すると、構造的な変化が見えやすくなります。",
            "補助政策の影響や設備変更の影響がある時期は、前後比較で分けて見ると判断精度が上がります。",
          ],
        },
        {
          heading: "請求書確認の次に見たい資料",
          paragraphs: [
            "請求書だけでは、更新条件や違約金などの契約リスクは把握できません。次の段階で契約書、覚書、見積書を確認し、請求実績との整合を取ることが必要です。",
            "資料をそろえて比較前提を統一すると、社内説明も進めやすくなります。",
          ],
        },
      ]}
      relatedIntro="請求書で現状を把握した後は、資料収集・契約書確認・最低限チェック項目へ進むと実務が止まりにくくなります。"
      relatedLinks={[
        {
          href: "/documents-needed-for-electricity-contract-review",
          title: "法人の電気料金見直しで集めるべき資料一覧",
          description: "請求書の次に必要な資料を整理できます。",
        },
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "請求書確認を含む基本確認項目を整理できます。",
        },
        {
          href: "/where-to-check-in-electricity-contract",
          title: "契約書のどこに見直し時の注意点が書かれているのか",
          description: "請求書で見えない契約条件を確認する際に役立ちます。",
        },
        {
          href: "/how-to",
          title: "シミュレーターの使い方",
          description: "請求書情報を比較検討へつなげる手順を確認できます。",
        },
      ]}
      ctaDescription="請求書の確認項目を整理できたら、使い方ページを参照して必要情報を準備し、比較ページで契約条件との整合を確認します。"
    />
  );
}
