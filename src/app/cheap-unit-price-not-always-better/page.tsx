import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "なぜ単価が安い提案でも、必ずしも有利とは限らないのか";
const pageDescription =
  "電力契約の見直しでは、単価が安い提案が必ずしも有利とは限りません。契約条件、調整項目、使用実態との相性を踏まえて判断するポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/cheap-unit-price-not-always-better",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/cheap-unit-price-not-always-better",
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

export default function CheapUnitPriceNotAlwaysBetterPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "見積比較で最も起きやすい誤解は『単価が安いほど有利』という判断です。法人向け電力契約では、単価以外の条件が実請求に強く影響するため、総合評価が必要です。",
        "このページでは、安さの見え方そのものに焦点を当て、実務で判断を誤りやすいポイントを整理します。",
      ]}
      sections={[
        {
          heading: "単価が安い提案でも有利とは限らない理由",
          paragraphs: [
            "見かけの単価は同じ比較軸で表示されていないことがあり、調整項目や条件差を含めると結果が変わる場合があります。単価だけで意思決定すると、導入後に想定との差が出やすくなります。",
            "契約の有利不利は、請求総額と契約柔軟性の両面で確認することが重要です。",
          ],
        },
        {
          heading: "実際の請求額に差が出る主な要因",
          paragraphs: [
            "燃料費調整額、市場価格調整額、契約電力前提、使用量前提などが違うと、単価が安くても請求総額で不利になることがあります。見積の含む・含まないの表記差にも注意が必要です。",
            "特に月次変動を受けやすい項目は、平常時だけでなく変動時の影響まで確認しておくと判断しやすくなります。",
          ],
          bullets: [
            "調整項目の扱いと上振れ余地",
            "契約期間・更新条件・違約金",
            "使用量と契約電力の前提差",
            "請求対象期間の扱い",
          ],
        },
        {
          heading: "契約条件と使用実態で見たいポイント",
          paragraphs: [
            "使用パターンによって有利不利は変わるため、自社の稼働実態を反映した前提で比較することが重要です。昼夜の負荷差や季節変動が大きい法人では、単価表だけでは判断しにくくなります。",
            "契約条件の柔軟性もあわせて評価し、将来の見直し余地を確保できるかを確認します。",
          ],
        },
        {
          heading: "価格だけで選ぶと起こりやすい見落とし",
          paragraphs: [
            "安価提案でも、更新条件が厳しい、解約時の負担が大きい、請求確認が複雑になるなど、運用面で課題が出る場合があります。導入後の実務負荷まで含めた評価が必要です。",
            "単価差の説明だけで社内決裁を進めると、後から条件面の懸念が出て手戻りになりやすくなります。",
          ],
        },
        {
          heading: "提案を実務的に比較するための考え方",
          paragraphs: [
            "比較では、年間総額、条件差、リスクの出方を同時に整理し、説明可能な判断基準を作ります。数字だけでなく、契約安定性と運用しやすさも評価軸に含めます。",
            "この整理を行うことで、価格変動局面でも再現性のある見直し判断がしやすくなります。",
          ],
        },
      ]}
      relatedIntro="単価偏重の判断を避けるために、見積書比較の実務ページと既存比較ページをあわせて確認できます。"
      relatedLinks={[
        {
          href: "/compare-business-electricity-estimates",
          title: "法人向け電力見積書の比較で見落としやすい項目",
          description: "見積書の具体的な確認項目を実務目線で整理できます。",
        },
        {
          href: "/how-to-compare-electricity-suppliers",
          title: "新電力を比較するときのポイント",
          description: "比較の全体軸と判断基準を確認できます。",
        },
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "価格以外も含めた基本確認項目を把握できます。",
        },
        {
          href: "/compare",
          title: "比較ページ",
          description: "整理した判断軸で候補条件を横並びで確認できます。",
        },
      ]}
      ctaDescription="単価以外の判断軸を整理したら、比較ページで年間総額と条件差を確認し、使い方ページで社内説明しやすい形に落とし込みます。"
    />
  );
}
