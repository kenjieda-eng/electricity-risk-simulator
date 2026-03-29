import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人向け電力見積書の比較で見落としやすい項目";
const pageDescription =
  "法人向け電力見積書は、単価だけでは比較できません。基本料金、燃料費調整額、市場価格連動の有無、契約期間など、見落としやすい項目を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/compare-business-electricity-estimates",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/compare-business-electricity-estimates",
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

export default function CompareBusinessElectricityEstimatesPage() {
  return (
    <ReviewArticlePage
      title={pageTitle}
      lead={[
        "見積書比較で起きやすい失敗は、見た目の単価だけで判断してしまうことです。法人向け電力契約では、後から効く調整項目や契約条件で総額が変わるため、項目のそろえ方が重要になります。",
        "このページでは、見積書そのものの読み方に絞って、比較時に見落としやすい実務項目を整理します。",
      ]}
      sections={[
        {
          heading: "法人向け電力見積書は単価だけで比べない",
          paragraphs: [
            "基本料金・電力量料金の単価が低く見えても、調整項目や前提条件が異なると実際の請求額は一致しません。比較時は、料金がどのように構成されるかを同じ形式で並べる必要があります。",
            "特に市場連動の要素が含まれる提案では、上振れ時の扱いを読み取らないまま判断すると、導入後の説明負担が増えます。",
          ],
        },
        {
          heading: "見積書でまず確認したい料金項目",
          paragraphs: [
            "基本料金と電力量料金に加えて、燃料費調整額や市場価格調整額、再エネ賦課金の扱いを確認します。各項目が含まれているか、別建てなのかで見え方が大きく変わります。",
            "見積書ごとに表記が異なるため、含む・含まないを明確にした比較表を作ると社内説明が進めやすくなります。",
          ],
          bullets: [
            "基本料金・電力量料金の計算前提",
            "燃料費調整額・市場価格調整額の扱い",
            "再エネ賦課金などの共通費目の扱い",
            "想定使用量・契約電力の前提条件",
          ],
        },
        {
          heading: "条件欄で見落としやすい契約期間・違約金・更新条件",
          paragraphs: [
            "見積書の料金欄ばかり見ていると、条件欄の契約期間や中途解約条件を見落としやすくなります。単価が安くても、柔軟性が低い契約では将来の見直しが難しくなる場合があります。",
            "更新条件や自動更新の有無も、比較項目として扱うことが重要です。更新時の単価改定条件がある場合は、初年度の価格だけで判断しない方が安全です。",
          ],
        },
        {
          heading: "一見安く見える見積書で注意したいポイント",
          paragraphs: [
            "使用量前提が低く設定されている見積は、実運用と乖離しやすく、実請求で差が出ることがあります。必ず現契約の実績値に近い前提で再試算します。",
            "また、拠点ごとに契約電力や稼働パターンが異なる場合、全拠点一律の前提で比較すると判断を誤るため、拠点別に前提を分けて確認します。",
          ],
        },
        {
          heading: "見積比較を社内説明しやすくする整理のしかた",
          paragraphs: [
            "比較結果は、単価比較ではなく年間総額・条件差・リスク差の3点で整理すると、決裁者にも伝わりやすくなります。調整項目の上振れ余地を明記しておくと、導入後の認識差を減らせます。",
            "最終判断では、価格だけでなく契約安定性や運用負荷も評価軸に含めることが実務的です。",
          ],
        },
      ]}
      relatedIntro="見積書比較を精度高く進めるために、比較の基本軸と単価以外の判断視点をあわせて確認できます。"
      relatedLinks={[
        {
          href: "/how-to-compare-electricity-suppliers",
          title: "新電力を比較するときのポイント",
          description: "見積比較の前提になる比較軸を全体で整理できます。",
        },
        {
          href: "/electricity-contract-terms",
          title: "法人向け電力契約で確認したい契約条件",
          description: "見積条件欄で見たい契約論点を確認できます。",
        },
        {
          href: "/cheap-unit-price-not-always-better",
          title: "なぜ単価が安い提案でも、必ずしも有利とは限らないのか",
          description: "見かけの安さと実請求の差が生まれる理由を確認できます。",
        },
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "比較前に外せない確認事項を短時間で整理できます。",
        },
      ]}
      ctaDescription="見積項目をそろえて整理したら、比較ページで候補を横並びにし、社内説明用の前提条件を明確にして判断を進めます。"
    />
  );
}
