import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "グループ会社統合時の電力契約最適化｜高圧一括契約化と連結調達ガバナンスの実務";
const pageDescription =
  "グループ企業の電力契約を個別契約から一括契約・共同購買へ集約することで得られるスケールメリット・単価交渉力・Scope2連結開示の効率化を、規模別の効果目安と実施ステップ、ガバナンス設計まで含めて整理します。";
const pageUrl = "https://simulator.eic-jp.org/group-electricity-consolidation";

const faqItems = [
  {
    question: "グループ各社の電力契約を一括化すると、必ず単価は下がりますか？",
    answer:
      "必ず下がるとは限りませんが、まとめることで供給者から見た契約規模が大きくなり、価格交渉の余地が生まれやすくなります。一般に大口契約ほど単価が低くなる傾向があり、年間電気代の合計が大きいグループほど効果が出やすいとされます。ただし、各拠点の高圧・特別高圧の別、需要パターン（昼夜・季節）、既存契約の残期間によって効果は変動するため、まずは各社の契約条件を一覧化して現状を可視化することが出発点になります。",
  },
  {
    question: "拠点が複数の電力エリアにまたがっている場合でも一括化できますか？",
    answer:
      "できます。新電力（小売電気事業者）の多くは全国エリアで供給可能なため、北海道から九州まで拠点が分散していても1社の小売事業者と契約を集約することは可能です。ただし、エリアごとに託送料金（一般送配電事業者へ支払う送電網利用料）が異なるため、エリア横断で完全に同一単価にはならない点に注意が必要です。エリア別の単価差を前提に、グループ全体での加重平均単価と管理工数の削減効果で評価するのが実務的です。",
  },
  {
    question: "一括契約と共同購買（共同調達）はどう違いますか？",
    answer:
      "一括契約は、親会社または特定の代表会社が契約名義を一本化し、各社へ社内配賦する方式です。共同購買は、各社が法的には個別に契約を維持しつつ、調達条件の交渉や入札を共同で行い、まとめて単価メリットを引き出す方式です。一括契約は管理が集中しガバナンスが効きやすい一方、社内配賦ルールや債権債務の整理が必要になります。共同購買は各社の独立性を保ちやすい反面、交渉の主体が曖昧になりやすい面があります。グループの資本関係や経理体制に応じて選択します。",
  },
  {
    question: "自己託送や需要BG（バランシンググループ）はグループ調達で使えますか？",
    answer:
      "使える場合があります。自己託送は、自社（またはグループ内の密接な関係にある会社）の発電設備でつくった電気を、送配電網を介して離れた自社拠点へ送る仕組みで、グループ内の余剰電源を有効活用する選択肢になります。需要BGは、複数の需要家をまとめて1つの計画値同時同量の単位として扱う枠組みで、新電力がグループ需要を束ねる際の運用基盤になります。いずれも制度要件や手続きが細かく定められているため、資源エネルギー庁の公表資料や供給者の説明を確認のうえ検討してください。",
  },
  {
    question: "親会社が主導して調達ガバナンスを敷く際のポイントは？",
    answer:
      "第一に、調達方針・契約承認権限・更新時期の管理を本社（または持株会社）に集約し、各社が個別に不利な条件で更新してしまう状態を防ぐことです。第二に、契約条件・単価・燃料費調整・市場連動の有無などの情報を統一フォーマットで集約し、グループ全体で横比較できるようにすることです。第三に、グループ内取引価格（移転価格）の観点から、本社が各社へ電気代を配賦する際の価格設定が適正であることを担保する点です。これらを規程化することで、調達の属人化と単価の高止まりを抑制できます。",
  },
  {
    question: "Scope2の連結開示と電力調達の一括化はどう関係しますか？",
    answer:
      "Scope2は、購入した電気・熱の使用に伴う間接的な温室効果ガス排出量を指します（GHGプロトコルの区分）。電力契約をグループで一括管理すると、各社の使用電力量・排出係数・非化石証書の付与状況を一元的に把握でき、連結ベースのScope2算定と開示が効率化します。また、グループとして再生可能エネルギー由来メニューや非化石証書をまとめて調達すれば、連結での排出削減を計画的に進めやすくなります。算定区分や報告の考え方はGHGプロトコル・環境省の公表資料に沿って整理してください。",
  },
  {
    question: "既存契約の途中解約で違約金が発生する場合、どう判断すべきですか？",
    answer:
      "違約金（解約金・最低利用期間の精算金）が発生する場合は、一括化で得られる削減額と違約金を比較し、回収できるかを確認します。多くの契約は更新月が決まっているため、各社の契約満了時期に合わせて段階的に切り替える「ローリング移行」を取ると、違約金を回避しつつ集約を進められます。一斉切替を急ぐより、満了の早い拠点から順に集約していくほうが、トータルコストでは有利になるケースが多くあります。",
  },
  {
    question: "中小規模のグループ（数社程度）でも一括化の効果はありますか？",
    answer:
      "規模が小さいほど単価交渉の効果は限定的になりますが、管理工数の削減・契約期限の一元管理・燃料費調整や市場連動リスクの統一把握といった運用面のメリットは小規模でも得られます。とくに、各社バラバラに契約していて更新漏れや不利なメニューが放置されている状態を整理するだけでも、無駄なコストの是正につながります。まずは契約一覧の作成と、料金メニュー比較・診断による現状把握から始めるとよいでしょう。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "グループ一括契約", "共同購買", "Scope2"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/ma-organizational-change", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/ma-organizational-change"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "M&A・組織再編時の電力契約", url: "https://simulator.eic-jp.org/articles/ma-organizational-change" },
          { name: "グループ会社統合時の電力契約最適化" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ma-organizational-change" className="underline-offset-2 hover:underline">M&A・組織再編時の電力契約</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">グループ会社統合時の電力契約最適化</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">グループ会社統合時の電力契約最適化｜高圧一括契約化と連結調達ガバナンスの実務</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">グループ企業の電力契約を、個別契約から一括契約・共同購買へ集約することで得られるスケールメリット・単価交渉力・運用効率化、そしてScope2連結開示との連動を、規模別の効果目安と実施ステップ、調達ガバナンスの設計まで含めて整理します。子会社が多く拠点が分散しているグループほど、集約による効果と管理品質の向上が期待できます。</p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-29" />
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">グループ個別契約のデメリット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グループ各社が個別に電力契約を持つ場合、①スケールメリットが活きない（単価が高止まり）、②契約管理の重複（各社で担当者・書類）、③交渉力分散、④データ統合困難、のデメリットがあります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">子会社数が10社以上、拠点数が数十を超える規模では、一括化・集約化の効果が顕著に現れます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">個別契約が放置されたグループでは、各社の担当者が独自に契約更新を行うため、メニューの選択も交渉条件もバラバラになりがちです。ある拠点は市場連動メニュー、別の拠点は固定単価メニュー、さらに別の拠点は旧来の規制料金に近いプランを継続している、といった状態が珍しくありません。この「契約のサイロ化」は、単価の最適化を阻むだけでなく、グループ全体としての電力コストの実態を経営層が把握できない構造的な問題を生みます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">さらに、燃料費調整額や再エネ賦課金、市場連動部分の変動が各社で別々に表れるため、電気料金が上昇したときに「どの拠点・どの契約が原因でコストが膨らんだのか」を切り分ける作業に時間がかかります。契約情報がグループで統一されていないと、料金高騰時の打ち手（メニュー切替・契約電力の見直し・需要平準化）も後手に回りやすくなります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">経理面では、各社が個別に請求書を受領・処理するため、支払いや仕訳の重複作業が発生します。グループ全体で見れば、契約・経理・データ集計のいずれにおいても、個別契約は「規模の不経済」を生んでいると言えます。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">一括契約化のメリット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①単価の引下げ（数%〜10%）：大口契約のスケールメリット。②契約管理工数の削減：共通フォーマット・集中管理で担当者を集約。③交渉力の向上：供給者にとって大口顧客となる。④データ活用の容易化：グループ全体のエネルギーマネジメント。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">年間電気代5億円以上の規模なら、一括化で年間数千万円規模の削減効果が期待できます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">単価交渉力の源泉は「契約規模の大きさ」と「需要の質」です。グループ需要を束ねると契約電力（kW）や年間使用量（kWh）が大きくなり、供給者にとって獲得・維持の価値が高い顧客になります。加えて、昼夜の需要が平準化されているグループ（オフィス系と工場系・倉庫系が混在するなど）は、供給者にとって計画値同時同量を運用しやすく、結果として有利な条件を引き出せる余地があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">管理面の効果も見逃せません。契約満了月をグループで一元管理すれば、更新漏れや不利な自動更新を防げます。請求・仕訳・燃料費調整の確認を本社に集約すれば、各社の経理工数を圧縮できます。さらに、使用電力量・契約電力・排出係数のデータが一カ所に集まることで、省エネ法の定期報告やサステナビリティ開示に必要な数値の整備が大幅に効率化します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">非化石証書や再エネメニューを束ねて調達できる点も、一括化の戦略的な価値です。グループとして調達量がまとまると、再エネ価値の確保や中長期の脱炭素計画を、拠点ごとにバラバラに進めるよりも計画的・低コストに実行しやすくなります。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">一括契約・共同購買のスキーム</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グループでの調達集約には、大きく次の3つのスキームがあります。それぞれ法的な契約主体・社内配賦の要否・ガバナンスの効きやすさが異なります。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">①一括契約（名義一本化）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">親会社または代表会社が契約名義を持ち、各社へ社内配賦。ガバナンスが最も効きやすいが、配賦ルールと債権債務の整理が必要。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">②共同購買（共同調達）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">各社が個別契約を維持しつつ、入札・交渉を共同で実施しまとめて単価メリットを獲得。各社の独立性を保ちやすい。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">③グループ需要BG活用</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">新電力がグループ需要を1つのバランシンググループとして運用。需要平準化のメリットを契約条件に反映しやすい。</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">どのスキームを選ぶかは、資本関係（完全子会社か持分法適用か）、経理体制（連結決算・グループ通算の有無）、各社の独立性をどこまで尊重するか、によって変わります。完全子会社中心のグループでは①一括契約が、独立性の高い事業会社が並ぶグループでは②共同購買が選ばれやすい傾向があります。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自己託送・需要BGの活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グループ内に自家発電設備や太陽光・コージェネレーションがある場合、自己託送を使って、ある拠点で発電した電気を送配電網経由で離れた自社（グループ）拠点へ供給する選択肢が検討できます。グループ内で電源を融通することで、外部からの購入電力を減らし、調達リスクと脱炭素の両面でメリットを得られる可能性があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">需要BG（バランシンググループ）は、複数の需要家拠点をまとめて計画値同時同量の単位として扱う仕組みです。新電力がグループ需要を1つのBGとして運用すると、拠点間で需要の山谷が相殺され、需給管理のコストやインバランスのリスクを抑えやすくなります。これは供給者にとってのコスト低減につながり、結果として契約条件に反映される余地があります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ただし、自己託送・需要BGはいずれも制度上の要件や手続き（密接関係性の要件、計画提出、計量・精算の仕組みなど）が細かく定められています。導入を検討する際は、資源エネルギー庁の公表資料や供給者・送配電事業者の説明を確認し、要件を満たすかどうかを個別に判断してください。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">親会社主導の調達ガバナンス</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">調達を集約しても、運用ルール（ガバナンス）が整っていなければ、効果は持続しません。親会社または持株会社が主導して、次の3点を規程化することが重要です。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-semibold">承認権限の集約</span>：一定規模以上の電力契約の締結・更新は本社承認を必須とし、各社が単独で不利な条件に更新することを防ぐ。</li>
              <li><span className="font-semibold">情報の標準化</span>：契約単価・契約電力・燃料費調整・市場連動の有無・契約満了月を統一フォーマットで集約し、グループ横断で比較可能にする。</li>
              <li><span className="font-semibold">配賦価格の適正性</span>：本社が各社へ電気代を配賦する価格は、グループ内取引価格（移転価格）の観点から適正であることを担保する。</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらを規程と年次レビューの仕組みに落とし込むことで、調達の属人化と単価の高止まりを構造的に防げます。持株会社体制のグループでは、<Link href="/holding-company-electricity-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">持株会社による電力契約の見直し</Link>の考え方も併せて参照すると、調達方針の整理に役立ちます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">複数電力エリアにまたがる拠点の管理</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">全国に拠点を持つグループでは、北海道・東北・東京・中部・北陸・関西・中国・四国・九州・沖縄といった電力エリアに需要が分散します。新電力の多くは全国供給が可能なため、契約自体は1社へ集約できますが、エリアごとに託送料金（一般送配電事業者へ支払う送電網の利用料）が異なる点に注意が必要です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">そのため、エリアをまたぐと完全に同一単価にはなりません。実務では、エリア別の単価差を前提にしたうえで、グループ全体の加重平均単価・管理工数・データ整備の効率化で総合評価するのが現実的です。エリア別の市場価格(エリアプライス)も時間帯・季節で変動するため、市場連動メニューを採用する場合はエリアごとの価格特性を踏まえた設計が求められます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各エリアの単価水準を把握する際は、<a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力ネットの電気料金単価一覧（pps-net.org/unit）</a>のような公開情報も、相場感をつかむ参考になります。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施ステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">①各社の契約現状（電力会社・単価・契約期間）を一覧化、②本社一括契約の設計、③電力会社との交渉、④契約切替（既存契約の解約・新規契約）、⑤グループ各社への請求・配賦ルール策定、の5ステップで実施。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">既存契約の違約金が発生する場合は、切替タイミングを調整することで違約金を回避するのが得策。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">各ステップを実務的に補足します。ステップ①の現状一覧化では、契約電力(kW)・年間使用量(kWh)・現行単価・燃料費調整の方式・市場連動の有無・契約満了月・解約条件を、グループ全社分そろえます。ここがすべての出発点であり、抜け漏れがあると後の交渉や配賦設計に響きます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">ステップ②③では、グループ需要をまとめた条件で複数の供給者に見積りや入札を依頼します。単価だけでなく、燃料費調整・市場連動部分のリスク分担、非化石証書・再エネメニューの提供条件、契約期間や中途解約条件まで含めて比較することが重要です。ステップ④の切替は、後述のとおり契約満了の早い拠点から順に移すローリング方式が、違約金回避の観点で有利です。ステップ⑤の配賦ルールは、各社のメーター実測値（kWh）を基本に、燃料費調整や基本料金部分の按分方法まで明文化しておきます。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の効果目安と試算テンプレート</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">【例：グループ会社10社、年間電気代合計5億円の場合】</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">単価削減：5〜10%の交渉成功で、年間2,500〜5,000万円の削減。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約管理工数：各社担当者の工数▲50%相当。本社1名での集中管理が実務的。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">データ活用：Scope2排出量の一元把握で、グループ全体のサステナビリティ開示を効率化。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">追加投資（エネマネシステム・契約管理）：初期500〜2,000万円。1〜3年で回収。</p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">規模が異なるグループでも、考え方は共通です。以下はあくまで一般的な目安であり、実際の効果は需要パターン・既存契約条件・市場環境で大きく変動します（出典: 資源エネルギー庁 / 経産省 / 各種実務ガイド 等から整理・2025年時点）。</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">小規模グループ（数社・年間〜1億円）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">単価メリットは限定的。主効果は契約期限の一元管理・更新漏れ防止・経理工数削減。Before：各社個別更新で不利メニューが放置。After：満了月の統一と現状可視化で無駄を是正。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">中規模グループ（10社前後・年間数億円）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">本例の通り、数%〜10%の単価交渉余地が現実的に生まれる規模。Before：交渉力分散・データ散在。After：本社集約で交渉力と開示効率が向上。</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-semibold text-slate-900">大規模グループ（数十社・年間10億円超）</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">需要BG・自己託送・再エネ一括調達まで含めた戦略的調達が射程に入る。Before：エリア横断で管理不能。After：連結ガバナンスとScope2連結算定を体系化。</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">※上記の削減率・金額・投資回収年数はいずれも幅のある目安であり、特定の成果を保証するものではありません。自社の年間電気代と上昇リスクは、<Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーター</Link>での試算と、<Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較・診断</Link>を併用して確認してください。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Scope2連結開示との連動</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">Scope2は、購入した電気・熱・蒸気の使用に伴う間接的な温室効果ガス排出量を指す区分です（GHGプロトコルによる定義）。サステナビリティ情報開示の進展に伴い、グループ連結ベースでのScope2算定・開示の重要性が高まっています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力調達を一括管理すると、各社の使用電力量・契約上の排出係数・非化石証書や再エネメニューの付与状況を一元的に把握でき、ロケーション基準・マーケット基準のいずれの算定にも必要なデータをそろえやすくなります。各社が個別に契約・データ管理している状態では、係数の取り違えや集計漏れが起きやすく、連結開示の信頼性に影響します。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">さらに、グループとして再エネ由来メニューや非化石証書をまとめて調達すれば、連結でのScope2削減を計画的に進められます。算定区分・報告の考え方はGHGプロトコルおよび環境省の公表資料に沿って整理し、開示先（適用される基準・ガイドライン）に合わせて運用してください。</p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">グループ会社の電力調達最適化は、経産省「電力システム改革」資料および中小企業庁「グループ内取引適正化ガイドライン」などで関連情報が提供されます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">税務面では、グループ内取引価格設定（移転価格）の観点からも、適正な価格での電力配賦が求められます。グループ内で電気代を配賦する場合の経理処理や勘定科目の考え方は、<Link href="/articles/accounting-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気代の経理・税務</Link>のカテゴリも参考になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自己託送・需要BG・計画値同時同量などの制度面は資源エネルギー庁、Scope2を含む温室効果ガス算定はGHGプロトコル・環境省、グループ内取引・移転価格は国税庁の公表資料が一次情報になります。本ページの数値・目安は、これらの公的資料・実務ガイドから整理したものです（2025年時点）。</p>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
          <div className="mt-4 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-base font-semibold text-slate-900">Q. {item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.chusho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業庁</a></li>
            <li><a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力ネット 電気料金単価一覧（pps-net.org/unit）</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/ma-electricity-contract-succession", title: "M&A時の電力契約承継", description: "スキーム別の手続き" },
              { href: "/company-split-electricity-contract", title: "会社分割時の電力契約", description: "分割・新規契約設定" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/ma-organizational-change", title: "M&A・組織再編時の電力契約", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/ma-organizational-change", label: "M&A・組織再編時の電力契約の他の記事を読む" },
            ]}
          />
        </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      </main>
    </>
  );
}
