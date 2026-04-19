import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "契約書のどこに見直し時の注意点が書かれているのか";
const pageDescription =
  "法人向け電力契約の見直しでは、契約書の更新条項、解約条件、違約金、単価改定条件などの確認が重要です。契約書で見たいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/where-to-check-in-electricity-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/where-to-check-in-electricity-contract",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/review-points", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/review-points"],
  },
};

export default function WhereToCheckInElectricityContractPage() {
  const faq = [
    { question: "電力契約書で最初に確認すべき条項はどこですか？", answer: "契約期間・更新条項・解約申出期限・違約金の4点が最優先です。特に自動更新条項は見落とすと更新後に解約できなくなるリスクがあるため、必ず確認してください。" },
    { question: "電力契約書に単価改定条項がある場合どう対応すべきですか？", answer: "単価改定条項がある場合、いつ・どのような条件で改定されるかを確認します。一方的な改定が可能な場合はリスクが高いため、改定時の通知方法や拒否・解約の選択肢も把握しておくことが重要です。" },
    { question: "電力契約書の別紙や覚書も確認すべきですか？", answer: "はい。本契約書だけでなく別紙や覚書に重要な条件が記載されているケースがあります。料金単価・調整費の扱い・特別条件などが別紙に定められていることが多いため必ず確認してください。" },
  ];
  const sources = [
    { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力供給契約の制度・ルールに関する情報" },
    { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・契約に関する情報" },
  ];
  return (
    <>
    <ReviewArticlePage
      breadcrumbLabel="契約書の注意点"
      slug="where-to-check-in-electricity-contract"
      jsonLdUrl="https://simulator.eic-jp.org/where-to-check-in-electricity-contract"
      jsonLdHeadline={pageTitle}
      jsonLdDescription={pageDescription}
      publishedAt="2026-03-29"
      faq={faq}
      sources={sources}
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
      extraSections={[
        {
          heading: "契約書の確認ポイントと金額影響の目安",
          note: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">確認項目</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見落としリスク</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額影響の目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金の算定方法</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約容量の設定ミス</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲5〜30万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整の上限有無</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">高騰時の請求急増</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">月<span className="font-semibold text-slate-900">▲5〜50万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動の算定方式</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX連動率の違い</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲20〜100万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">解約違約金条項</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">切替コストの見落とし</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">1回<span className="font-semibold text-slate-900">▲10〜50万円</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">契約期間と自動更新</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">意図しない長期拘束</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">見直し機会の喪失</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
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
        {
          href: "/electricity-contract-cancellation-renewal-terms",
          title: "電力契約の解約・更新条件の確認ポイント",
          description: "解約違約金と更新条件の実務的な確認方法。",
        },
      ]}
      ctaDescription="契約書の確認箇所を整理したら、使い方ページで必要情報を整え、比較ページで見積条件と契約条項の整合を確認して進めます。"
      glossaryTerms={["燃料費調整額", "市場価格調整額", "基本料金", "電力量料金", "市場連動プラン", "固定プラン"]}
    />
    <div className="mx-auto w-full max-w-[1600px] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mt-6">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/review-contract-renewal-deadlines", title: "法人の電力契約を更新前に確認したい期限とは", description: "契約書に記載される期限項目を実務目線で確認できます。" },
            { href: "/switching-business-electricity-contract", title: "法人が電力契約を切り替えるときの注意点", description: "解約条項を踏まえた切替時の実務ポイント。" },
            { href: "/should-you-review-after-price-increase-notice", title: "値上げ通知が来たとき、法人の電力契約はすぐ見直すべきか", description: "通知と契約条項の整合を判断する視点を整理します。" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="契約見直しの次のステップ"
          description="見直しのポイントを確認したら、シミュレーターで自社のリスクを診断してみましょう。"
          links={[
            { href: "/simulate", label: "リスク診断シミュレーター" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
    </div>
    </>
  );
}
