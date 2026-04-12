import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "使用量やデマンドが変わったとき、電力契約は見直すべきか";
const pageDescription =
  "使用量やデマンドの変化は、法人向け電力契約の見直しにつながる重要なサインです。設備更新や拠点運営の変化が電気料金にどう影響するかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/review-contract-when-usage-changes",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/review-contract-when-usage-changes",
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

export default function ReviewContractWhenUsageChangesPage() {
  return (
    <ReviewArticlePage
      slug="review-contract-when-usage-changes"
      title={pageTitle}
      lead={[
        "値上げ通知がなくても、使用量やデマンドの変化は契約見直しの重要なサインです。運用実態が変わると、契約条件との相性が崩れ、電気料金や電気代が想定どおりに下がらないことがあります。",
        "このページでは、使用実態の変化を起点に、見直し判断を進める考え方を整理します。",
      ]}
      sections={[
        {
          heading: "使用量やデマンドの変化が契約見直しのサインになる理由",
          paragraphs: [
            "使用量が減っていても請求額が思ったほど下がらない場合、契約電力や調整項目の影響が残っている可能性があります。単純な使用量比較だけでは、見直し余地を把握しきれません。",
            "実務では、使用量・単価・調整項目を分けて確認し、どこにコスト要因があるかを切り分けることが重要です。",
          ],
        },
        {
          heading: "契約電力とデマンドの変化をどう見るか",
          paragraphs: [
            "契約電力やデマンドは基本料金に直結するため、ピーク需要の変化を見落とすとコスト改善機会を逃します。特に稼働時間帯の変化がある場合は、デマンド傾向もあわせて確認します。",
            "過去1年程度の請求書や需要実績を並べると、季節要因と構造変化を区別しやすくなります。",
          ],
        },
        {
          heading: "見直しにつながりやすい設備・運用の変化",
          paragraphs: [
            "空調更新、設備更新、EV導入、営業時間変更、稼働日変更などは、契約条件とのミスマッチを生みやすい代表例です。設備投資後は省エネ効果だけでなく契約側の再確認が必要です。",
            "拠点統廃合や生産計画変更のような運用変化も、見直しのきっかけになります。価格要因だけでなく利用形態の変化として整理すると判断しやすくなります。",
          ],
        },
        {
          heading: "使用実態と契約条件がずれていないか確認する",
          paragraphs: [
            "見直し時は、現契約の前提が現在の使用実態と合っているかを確認します。契約期間、更新条件、違約金を把握したうえで、実績に合う比較前提を作ることが大切です。",
            "使用実態と契約条件のズレは、単価の問題ではなく契約設計の問題として現れることがあるため、複数資料での確認が有効です。",
          ],
        },
        {
          heading: "どんな会社で見直し効果が出やすいか",
          paragraphs: [
            "使用量が大きい法人、複数拠点を持つ法人、更新時期が近い法人は、見直し効果が出やすい傾向があります。一方で、すべての法人で大きく下がるわけではない点も押さえる必要があります。",
            "コスト低減だけでなく、契約安定性や社内説明のしやすさまで含めて効果を評価すると、実務で納得感のある判断につながります。",
          ],
        },
      ]}
      extraSections={[
        {
          heading: "使用量変動パターン別 見直し効果の目安",
          note: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">変動パターン</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見直し内容</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">効果目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量が20%以上増加</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約容量の最適化・プラン変更</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金<span className="font-semibold text-slate-900">▲5〜15%</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量が20%以上減少</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約容量の縮小</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲10〜20万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">季節偏差が拡大</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動プランへの切替検討</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">閑散期で<span className="font-semibold text-slate-900">▲3〜5%</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンドピークが変化</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">ピークカット・蓄電池導入</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金<span className="font-semibold text-slate-900">▲10〜30万円/年</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      relatedIntro="使用実態の変化を確認した後は、請求書の読み方と見直し優先度の整理を組み合わせると判断しやすくなります。"
      relatedLinks={[
        {
          href: "/why-business-electricity-costs-are-high",
          title: "法人の電気料金が高い会社に共通する特徴",
          description: "高止まりしやすい契約・運用の傾向を確認できます。",
        },
        {
          href: "/which-companies-benefit-most-from-review",
          title: "どんな会社ほど電力契約の見直し効果が出やすいのか",
          description: "見直し効果が出やすい法人像を具体的に整理できます。",
        },
        {
          href: "/how-to-read-electricity-bills-for-review",
          title: "請求書のどこを見れば電力契約見直しのヒントが分かるのか",
          description: "使用量変化を請求書から確認する手順を把握できます。",
        },
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "見直し判断の基礎項目を短時間で確認できます。",
        },
      ]}
      ctaDescription="使用実態の変化を整理できたら、比較ページで現契約との差分を確認し、使い方ページを参照しながら社内説明に使える形で検討を進めます。"
    />
  );
}
