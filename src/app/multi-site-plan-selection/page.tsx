import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
const pageTitle =
  "多拠点企業はどちらを選ぶべきか｜拠点ごとの最適化と全体管理";
const pageDescription =
  "複数の事業所・施設を持つ法人が電力契約を検討する際のポイントを整理します。全拠点統一と拠点別最適化の違い、ポートフォリオアプローチ、一括契約の交渉力活用など、多拠点ならではの判断軸を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "多拠点 電力契約 法人",
    "複数事業所 電気料金 選び方",
    "多拠点 固定プラン 市場連動",
    "電力契約 一括 拠点",
    "法人 電気料金 ポートフォリオ",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/multi-site-plan-selection",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/multi-site-plan-selection",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const siteCharacteristics = [
  {
    type: "大規模・使用量の多い拠点",
    examples: "工場、大型倉庫、大型商業施設",
    characteristics: "使用量が大きく、電気代が事業コストに占める割合が高い。単価の差が金額ベースで大きく出る。",
    planThinking: "コスト変動の絶対額が大きいため、変動リスクを取るかどうかの判断が重要。利益率・財務耐性と合わせて慎重に判断する。",
  },
  {
    type: "中規模オフィス・事務所",
    examples: "本社・支社・営業所",
    characteristics: "使用量は中程度。電気代が事業コストに占める比率は低いことが多い。",
    planThinking: "電気代の比率が低ければ市場連動を試行するリスクが比較的小さい。負荷シフトの余地は少ないが、リスクの絶対額が限定的。",
  },
  {
    type: "小規模店舗・サービス拠点",
    examples: "小売店舗、サービスセンター、窓口施設",
    characteristics: "個々の使用量は小さいが、拠点数が多い場合は累積で大きくなる。管理コストも考慮が必要。",
    planThinking: "小規模拠点への市場連動適用は電力会社の契約条件の制約がある場合もある。管理の手間と節約効果のバランスを見る。",
  },
  {
    type: "特殊用途施設",
    examples: "冷凍・冷蔵倉庫、データセンター、医療施設",
    characteristics: "24時間稼働で安定的な使用パターン。停電・コスト変動が事業継続に直結。",
    planThinking: "ベースロードが大きく、安定性を最優先すべき拠点。市場連動よりも固定プランの安心感が重要になりやすい。",
  },
];

const approaches = [
  {
    approach: "全拠点を同一プランで統一する",
    pros: ["契約管理がシンプル", "一括交渉で単価を下げやすい", "電力会社への窓口が一本化できる"],
    cons: ["拠点ごとのリスク許容度の差を無視することになる", "最適なプランが拠点によって異なる場合に対応できない"],
    suitable: "拠点数が多く、管理コスト削減を優先する場合。全体として保守的な判断をするなら固定で統一も合理的。",
  },
  {
    approach: "拠点ごとに個別にプランを最適化する",
    pros: ["各拠点の特性に最も合ったプランを選べる", "大型拠点はリスク管理、小型拠点は削減追求など使い分けができる"],
    cons: ["契約管理が複雑になる", "電力会社が複数になる可能性がある", "担当者の工数が増える"],
    suitable: "拠点数が少なく（数拠点〜10拠点程度）、それぞれの特性差が大きい場合。",
  },
  {
    approach: "ポートフォリオアプローチ（プランを混在させる）",
    pros: ["全体リスクを分散できる", "市場連動の試行を一部で行いながら全体安定を確保できる", "経験値を積みながら段階的に判断できる"],
    cons: ["管理がやや複雑", "拠点別コスト管理が必要"],
    suitable: "一部の拠点でリスク許容度が高く、市場連動を試行したい場合。最初の導入ステップとして有効。",
  },
];

const faqItems = [
  { question: "多拠点企業が電力契約を一括でまとめるメリットは何ですか？", answer: "使用量が合算されることでボリュームディスカウントの交渉力が上がる、管理コストが削減される、請求の一元化で経理処理が効率化されるなどのメリットがあります。ただし供給エリアが異なる場合は一社統一ができないことがあります。" },
  { question: "多拠点企業がプランを拠点ごとに分ける理由は何ですか？", answer: "拠点ごとにリスク許容度・使用パターン・契約更新時期が異なる場合、一括契約より拠点別に最適なプランを選ぶ方が総コストを抑えられることがあります。大規模拠点と小規模拠点で異なる戦略が有効です。" },
  { question: "多拠点の電力契約見直しはどこから始めるべきですか？", answer: "まず全拠点の契約条件（契約更新日・現プラン・使用量）を一覧化します。次に使用量が多い拠点・更新日が近い拠点・市場連動リスクが高い拠点を優先して着手することが効果的です。" },
];

export default function MultiSitePlanSelectionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/multi-site-plan-selection"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約メニューの違いを知る", url: "https://simulator.eic-jp.org/articles/plan-types" },
          { name: "多拠点企業の判断軸" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">多拠点企業</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          多拠点企業はどちらを選ぶべきか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          複数の事業所・施設を持つ法人にとって、電力契約の見直しは「全拠点を一括でどのプランにするか」だけでなく、「拠点ごとの特性に合わせて最適化するか」という選択肢があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          多拠点の場合、一括契約による価格交渉力の活用と、拠点別リスク管理の最適化という2つの方向性の間でバランスを取る必要があります。このページでは、多拠点企業が電力プランを検討する際の考え方と判断軸を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>拠点タイプ別の特性とプラン選択の考え方</li>
            <li>統一・個別最適化・ポートフォリオの3つのアプローチ</li>
            <li>一括交渉で価格交渉力を活かす方法</li>
            <li>多拠点管理の実務的な注意点</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            多拠点企業に固有の課題
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単一拠点の法人では「自社にとってどちらが合っているか」という一つの判断で済みますが、多拠点の場合は拠点ごとに特性が異なります。工場・倉庫・オフィス・店舗が混在する企業では、一律に同じ判断を当てはめることが最適解にならないケースがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方で、拠点ごとに別々の電力会社・別々のプランを管理することは実務上の工数を増やします。「最適化のメリット」と「管理コスト」のバランスを取ることが多拠点企業特有の課題です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            拠点タイプ別の特性とプラン選択の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まず自社の拠点をタイプ別に分類し、それぞれの特性を把握することが出発点になります。
          </p>
          <div className="mt-4 space-y-4">
            {siteCharacteristics.map((site) => (
              <div key={site.type} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-base font-semibold text-slate-900">{site.type}</p>
                <p className="mt-1 text-xs text-slate-500">例：{site.examples}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{site.characteristics}</p>
                <p className="mt-2 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
                  <span className="font-medium text-slate-900">プラン検討の視点：</span>{site.planThinking}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3つのアプローチとその特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多拠点企業が電力契約を検討する際の主な進め方として、以下の3つのアプローチがあります。
          </p>
          <div className="mt-4 space-y-4">
            {approaches.map((item) => (
              <div key={item.approach} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.approach}</h3>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-700">メリット</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-700">
                      {item.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-700">デメリット・注意点</p>
                    <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-700">
                      {item.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm text-sky-800">
                  <span className="font-medium">向いているケース：</span>{item.suitable}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            一括交渉で価格交渉力を活かす
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多拠点企業の強みの一つは、電力会社への交渉において「総使用量」を背景にした価格交渉ができることです。1拠点ずつ個別に交渉するよりも、複数拠点をまとめて提示することで、単価の引き下げや条件の改善を交渉しやすくなるケースがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、一括交渉には注意点もあります。電力会社によっては高圧・特別高圧・低圧をまとめた一括対応ができない場合もあります。また、プランの種類（固定・市場連動）が同一でなければ一括見積もりが難しいケースもあります。交渉の際は「総量でいくらになるか」を確認したうえで、拠点別の条件と比較することをお勧めします。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            多拠点管理の実務的な注意点
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">拠点ごとの使用量データを把握する：</span>
              現状の各拠点の月間使用量・契約電力を整理することが比較の前提になります。スマートメーターの場合はデータ取得が容易ですが、古い施設では検針票の確認が必要です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">契約更新タイミングの違いを確認する：</span>
              拠点ごとに契約期間・更新タイミングが異なる場合、一括切り替えができない可能性があります。まず更新時期を確認し、優先順位をつけて進めるのが現実的です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">電圧区分の違いに注意する：</span>
              特別高圧・高圧・低圧の拠点が混在する場合、プランの選択肢や交渉窓口が異なります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">管理拠点（本社・経理部門）と現場（各施設管理者）の役割分担：</span>
              多拠点の電力契約を本社で一括管理するか、各施設が管理するかによって、情報収集・契約交渉の体制も変わります。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：多拠点企業の判断ステップ
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>全拠点の使用量・契約電力・更新時期を一覧化する</li>
            <li>拠点をタイプ別（大規模工場、オフィス、小規模店舗など）に分類する</li>
            <li>タイプ別にリスク許容度と予算管理の要件を整理する</li>
            <li>統一・個別最適化・ポートフォリオのどのアプローチが管理コストと効果のバランスが取れるかを検討する</li>
            <li>電力会社との一括交渉の可能性を確認したうえで見積もりを比較する</li>
          </ol>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="multi-site-plan-selection" terms={["市場連動プラン", "固定プラン", "基本料金", "契約電力", "燃料費調整額"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/market-linked-plan-suited-businesses",
              title: "市場連動プランが向く可能性がある法人の特徴",
              description: "リスク許容度や財務耐性から検討できる条件を整理。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "安定性重視の判断軸と業種別の相性。",
            },
            {
              href: "/factory-fixed-vs-market-linked",
              title: "工場は固定と市場連動のどちらが向くか",
              description: "製造拠点の稼働パターンと電力プランの考え方。",
            },
            {
              href: "/commercial-facility-fixed-vs-market-linked",
              title: "商業施設は固定と市場連動のどちらが向くか",
              description: "営業時間・設備負荷から考えるプラン選択。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "多拠点の見直し準備に使える確認項目一覧。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "複数拠点の見積書を比較する際のポイント。",
            },
          ]}
        />

        <ContentCta
          heading="拠点ごとのコストをシミュレーターで試算する"
          description="各拠点の使用量・契約電力を入力して、固定プランと市場連動プランのコスト差を確認できます。多拠点の判断材料にご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
