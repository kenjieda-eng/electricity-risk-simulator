import type { Metadata } from "next";
import ReviewArticlePage from "../../components/articles/ReviewArticlePage";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "複数拠点の電力契約を見直すときの進め方";
const pageDescription =
  "多店舗企業や複数拠点を持つ法人では、電力契約の条件や使用状況が拠点ごとに異なります。一括見直しと個別見直しの考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "電力契約見直し"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/review-multi-site-electricity-contracts",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/review-multi-site-electricity-contracts",
    siteName: "法人電気料金ナビ",
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

export default function ReviewMultiSiteElectricityContractsPage() {
  const faq = [
    { question: "複数拠点の電力契約を一括で見直すことはできますか？", answer: "可能ですが、拠点ごとに契約更新日・電力会社・使用量が異なるため、まず全拠点の契約条件を一覧化することが重要です。一括と個別のどちらが効果的かは契約状況によって異なります。" },
    { question: "複数拠点の見直しはどの拠点から始めるべきですか？", answer: "使用量が多い拠点・更新日が近い拠点・現契約のリスクが高い拠点から優先するのが一般的です。本社が管理しやすい規模の拠点から始め、成功体験を積んでから他拠点に展開する方法も有効です。" },
    { question: "複数拠点をまとめて同一電力会社に統一するメリットは何ですか？", answer: "一括管理による事務コスト削減、ボリュームディスカウント交渉の余地、請求の一元化などがメリットです。ただし拠点ごとの供給エリアが異なる場合は一社統一ができないケースもあります。" },
  ];
  const sources = [
    { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力自由化・小売事業者に関する情報" },
    { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場・新電力動向データ" },
  ];
  return (
    <>
    <ReviewArticlePage
      breadcrumbLabel="複数拠点の見直し"
      slug="review-multi-site-electricity-contracts"
      jsonLdUrl="https://simulator.eic-jp.org/review-multi-site-electricity-contracts"
      jsonLdHeadline={pageTitle}
      jsonLdDescription={pageDescription}
      publishedAt="2026-03-29"
      faq={faq}
      sources={sources}
      title={pageTitle}
      lead={[
        "複数拠点を持つ法人の電力契約見直しは、単一拠点より整理対象が多くなります。契約条件、更新月、使用実態が拠点ごとに違うため、本社一括で進めるだけでは混乱しやすくなります。",
        "このページでは、多拠点の見直し実務に絞って、情報整理と優先順位のつけ方を解説します。",
      ]}
      sections={[
        {
          heading: "複数拠点の電力契約見直しが難しくなりやすい理由",
          paragraphs: [
            "店舗、工場、倉庫、オフィスでは使用パターンが異なるため、同じ比較軸をそのまま適用できない場合があります。契約期間や解約条件も拠点ごとにばらつきが出やすい点が実務上の難所です。",
            "また、請求書フォーマットや管理部署が拠点ごとに異なると、比較前のデータ整備だけで時間を要します。",
          ],
        },
        {
          heading: "まず整えたい拠点別の契約情報と請求情報",
          paragraphs: [
            "見直しの第一歩は、拠点一覧・契約一覧・請求一覧をそろえることです。資料の所在が不明な拠点を先に洗い出すと、後工程の停滞を防げます。",
            "特に更新月、解約申出期限、契約電力、直近の請求傾向は、優先的に一覧化する価値があります。",
          ],
          bullets: [
            "拠点名・契約先・契約メニュー",
            "契約期間・更新月・解約期限",
            "契約電力・使用量・請求総額",
            "設備更新予定・稼働変更予定",
          ],
        },
        {
          heading: "一括見直しと個別見直しの考え方",
          paragraphs: [
            "契約条件や更新月が近く、使用実態が似ている拠点群は一括見直しが向きます。一方で、用途や稼働パターンが異なる拠点は個別見直しの方が精度を上げやすくなります。",
            "全拠点を同時に進めるより、類似拠点ごとに段階的に進める方が、社内負荷を抑えつつ成果を出しやすい場合があります。",
          ],
        },
        {
          heading: "どの拠点から優先して見直すべきか",
          paragraphs: [
            "優先順位は、請求規模、更新時期、契約条件の硬さ、使用実態の変化の大きさで判断します。金額影響が大きい拠点や期限が近い拠点から着手すると、実務効果を早く得やすくなります。",
            "先行拠点で得た知見を他拠点へ展開すると、見積比較や社内説明の標準化にもつながります。",
          ],
        },
        {
          heading: "本社主導で進めるときの社内確認ポイント",
          paragraphs: [
            "本社主導では、現場実態を十分に拾える体制づくりが重要です。契約条件確認は本社、使用実態確認は拠点といった役割分担を明確にします。",
            "見直し目的、必要資料、期限を共通フォーマットで共有すると、部署間の認識差を減らせます。",
          ],
        },
      ]}
      extraSections={[
        {
          heading: "複数拠点 一括見直しの効果事例",
          note: (
            <div className="overflow-x-auto">
              <p className="mb-3">電力会社の統一・条件交渉による一括見直しで、平均10%程度のコスト削減が見込める事例です。</p>
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">拠点数</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">合計使用量</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見直し前</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見直し後</th>
                    <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">削減効果</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">5拠点</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">120,000kWh/月</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間3,600万円</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間3,240万円</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲360万円（▲10%）</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">10拠点</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">350,000kWh/月</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間1.05億円</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間9,450万円</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲1,050万円（▲10%）</span></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">20拠点</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">800,000kWh/月</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間2.4億円</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">年間2.16億円</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲2,400万円（▲10%）</span></td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-xs text-slate-500">※ 削減率は電力会社・エリア・契約条件により異なります。交渉力はスケールメリットに左右されます。</p>
            </div>
          ),
        },
      ]}
      relatedIntro="多拠点の見直しを実行に移すために、資料整理・社内確認・優先度判断を補完するページをあわせて確認できます。"
      relatedLinks={[
        {
          href: "/documents-needed-for-electricity-contract-review",
          title: "法人の電気料金見直しで集めるべき資料一覧",
          description: "拠点横断で集める資料を漏れなく整理できます。",
        },
        {
          href: "/internal-checklist-for-electricity-contract-review",
          title: "法人の電力契約見直しで社内確認したい項目一覧",
          description: "本社と拠点で分担したい確認事項を把握できます。",
        },
        {
          href: "/which-companies-benefit-most-from-review",
          title: "どんな会社ほど電力契約の見直し効果が出やすいのか",
          description: "多拠点法人の見直し優先度を考える参考になります。",
        },
        {
          href: "/compare",
          title: "比較ページ",
          description: "拠点ごとに条件をそろえて比較する実行段階で活用できます。",
        },
        {
          href: "/businesses-suited-for-fixed-price-electricity-plan",
          title: "固定プランが向く法人の特徴",
          description: "多拠点法人のプラン選択判断の参考として。",
        },
      ]}
      ctaDescription="多拠点情報を整えたら、使い方ページで入力手順を確認し、比較ページで拠点単位の条件差を可視化して優先拠点から進めるのが実務的です。"
      glossaryTerms={["基本料金", "電力量料金", "契約電力", "燃料費調整額", "市場連動プラン", "固定プラン"]}
    />
    <div className="mx-auto w-full max-w-[1600px] px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mt-6">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/which-companies-benefit-most-from-review", title: "どんな会社ほど電力契約の見直し効果が出やすいのか", description: "多拠点法人の見直し優先度を考える参考になります。" },
            { href: "/who-should-handle-electricity-contract-review", title: "どの部署が法人の電力契約見直しを担当するべきか", description: "拠点横断の主導部署と役割分担を整理できます。" },
            { href: "/how-to-start-electricity-contract-review", title: "法人の電力契約見直しは何から始めるべきか", description: "複数拠点を含む見直しの着手順序を整理できます。" },
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
