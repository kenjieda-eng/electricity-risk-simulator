import type { Metadata } from "next";
import Link from "next/link";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";

const pageTitle = "法人が電力契約を切り替えるときの注意点";
const pageDescription =
  "法人向け電力契約の切替では、現契約の解約条件、開始時期、請求タイミングのズレなどに注意が必要です。企業・自治体の実務担当者向けに切替時の確認ポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/switching-business-electricity-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/switching-business-electricity-contract",
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

export default function SwitchingBusinessElectricityContractPage() {
  return (
    <ReviewArticlePage
      breadcrumbLabel="切り替えの注意点"
      slug="switching-business-electricity-contract"
      title={pageTitle}
      lead={[
        "見積比較で契約先を決めた後、実務でつまずきやすいのが切替手続きです。現契約の解約条件や開始日の扱いを誤ると、請求確認や社内説明が難しくなります。",
        "このページでは、選定後の実行フェーズに絞って、切替前後で確認すべきポイントを整理します。",
      ]}
      sections={[
        {
          heading: "法人の電力契約切替で最初に確認したいこと",
          paragraphs: [
            "切替で最初に確認すべきなのは、現契約の解約条件と期限です。新契約の魅力だけを見て進めると、解約期限超過や違約金発生で想定外のコストが生じることがあります。",
            "また、供給開始希望日を先に決める前に、現契約の満了日と検針日を把握しておくと、移行スケジュールを現実的に組みやすくなります。",
          ],
          note: (
            <p>
              見直しをいつ始めるかの整理は{" "}
              <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                法人が電力契約を見直すタイミング
              </Link>
              も参照してください。
            </p>
          ),
        },
        {
          heading: "切替前に整理しておきたい現契約の条件",
          paragraphs: [
            "契約期間、更新条項、違約金、解約申出期限を一覧化し、拠点単位で差分を確認します。複数拠点では、同時切替が難しいケースもあるため、優先順位を決めた段階移行が有効です。",
            "契約書本文に加えて、覚書や別紙にも重要条件が記載されることがあるため、文書一式で確認することが必要です。",
          ],
          bullets: [
            "契約満了日と自動更新の有無",
            "解約申出期限と必要手続き",
            "違約金の発生条件と算定方法",
            "現契約の請求締め日・検針日",
          ],
        },
        {
          heading: "切替手続きで注意したい開始日・検針日・請求のズレ",
          paragraphs: [
            "供給開始日と検針日が一致しない場合、初月の請求期間が通常月と異なることがあります。新旧契約の請求対象期間を把握しておかないと、社内で二重請求と誤解される場面が出ます。",
            "経理・総務・現場の確認タイミングをそろえるため、移行月の請求スケジュールを事前に共有しておくことが重要です。",
          ],
        },
        {
          heading: "切替後に請求書で確認したいポイント",
          paragraphs: [
            "切替後最初の請求書は、契約条件が正しく反映されているかを確認する重要な資料です。基本料金、電力量料金、調整項目、対象期間を現契約時と照合します。",
            "初回請求で違和感があれば、契約書・見積書・請求書の3点を突き合わせて早めに確認すると、後続月への影響を最小化できます。",
          ],
        },
        {
          heading: "トラブルを避けるための実務上の進め方",
          paragraphs: [
            "切替実務は、資料収集、社内確認、手続き実行、初回請求確認までを1つの業務として設計することが有効です。比較段階の担当者だけで完結させず、経理や拠点責任者を巻き込んだ運用が望まれます。",
            "切替後の運用確認まで行うことで、次回見直しの判断材料も蓄積しやすくなります。",
          ],
        },
      ]}
      extraSections={[
        {
          heading: "電力会社切替の標準スケジュール",
          note: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">ステップ</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">所要期間</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">主な作業</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">情報整理・現状把握</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜2週間</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">請求書収集、使用量把握、契約条件確認</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">相見積の取得</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜4週間</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">3〜5社に見積依頼、条件比較</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">見積比較・社内検討</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜2週間</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">単価比較、リスク評価、稟議</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約手続き</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">1〜2週間</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">新契約締結、旧契約解約通知</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">供給開始切替</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜4週間</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">スマートメーター切替、計量開始</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">合計</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約2〜3か月</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">余裕を持って4か月前から開始が理想</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          heading: "切替時の注意点と想定コスト",
          note: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">項目</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">内容</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">解約違約金</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約期間内解約の場合</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0〜50万円</span>（契約による）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">切替工事費</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">メーター交換等</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">通常<span className="font-semibold text-slate-900">0円</span>（一般送配電負担）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">事務手数料</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">新電力側の手数料</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">0〜数万円</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ]}
      relatedIntro="切替前後は、タイミング判断・資料・見積確認・比較を一連の流れで読むと手戻りが減ります。"
      relatedLinks={[
        {
          href: "/when-to-review-electricity-contract",
          title: "法人が電力契約を見直すタイミング",
          description: "切替に進む前の着手時期と確認順序を整理できます。",
        },
        {
          href: "/documents-needed-for-electricity-contract-review",
          title: "法人の電気料金見直しで集めるべき資料一覧",
          description: "切替時に不足しやすい資料を事前に整理できます。",
        },
        {
          href: "/5-minimum-checkpoints-for-electricity-contract-review",
          title: "法人の電力契約見直しで最低限確認したい5項目",
          description: "契約条件と請求構造の最低限チェックに進めます。",
        },
        {
          href: "/how-to-read-electricity-quote",
          title: "法人向け電気料金見積書の見方",
          description: "切替先の前提条件を、現在契約と同じ軸で確認できます。",
        },
        {
          href: "/compare",
          title: "料金メニューの比較・診断",
          description: "切替候補の受け止め方を、固定と市場連動の比較で補えます。",
        },
        {
          href: "/market-linked-vs-fixed",
          title: "市場連動プランと固定プランの違い",
          description: "切替先のプラン選択時に判断軸を整理できます。",
        },
      ]}
      ctaDescription="切替前後の確認項目を整理したら、使い方ページで入力準備を確認し、比較ページで現契約と候補を同条件で並べて最終判断へ進めます。"
      glossaryTerms={["燃料費調整額", "市場価格調整額", "最終保障供給", "市場連動プラン", "固定プラン", "基本料金"]}
    />
  );
}
