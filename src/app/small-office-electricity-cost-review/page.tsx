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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle =
  "中小オフィスの電気料金見直しポイント｜限られた使用量でも効果を出す考え方";
const pageDescription =
  "中小オフィスの電気料金見直しを解説。使用量が少なくても基本料金の比率が高い構造、空調・照明の稼働パターン、固定プランと市場連動の選択基準、テナントビルでの制約まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中小オフィス 電気料金 見直し",
    "小規模オフィス 電気代 削減",
    "テナントオフィス 電力契約",
    "オフィス 基本料金 削減",
    "中小企業 電力コスト 見直し",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/small-office-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/small-office-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

const loadCharacteristics = [
  {
    label: "空調設備",
    detail:
      "執務室の空調はオフィスの電力使用の中心を占めます。中小規模では個別エアコンを利用しているケースが多く、始業・終業時に集中して稼働するパターンが典型的です。夏・冬のピーク期には使用量が倍増することがあります。",
  },
  {
    label: "照明",
    detail:
      "蛍光灯からLEDへの切替えが進んだオフィスでは照明の比率は低下しています。ただし、執務室・廊下・トイレなどをまとめると一定の割合を占めます。在室管理センサーやタイマー制御で削減できる余地が残っている場合もあります。",
  },
  {
    label: "OA機器・サーバー",
    detail:
      "PC・コピー機・ネットワーク機器などのOA機器は、業務時間中は常時稼働します。小規模なサーバーをオフィス内に置いている場合、24時間稼働するため夜間のベースロードを形成します。クラウド移行によって削減できるケースもあります。",
  },
  {
    label: "給湯・衛生設備",
    detail:
      "電気温水器や電気ケトルなどの給湯設備は、朝のピーク時間帯に集中して使用されることがあります。使用量としては小さいものの、デマンドのピーク形成に寄与する場合があります。",
  },
];

const reviewPoints = [
  {
    heading: "基本料金の比率を確認する",
    content:
      "中小オフィスでは使用量（電力量料金）が少ない一方、基本料金（契約電力 × 単価）が月額費用に占める比率が高くなりがちです。契約電力が実際のピーク需要に対して過大に設定されていないかを確認することが第一歩です。直近12か月のデマンド実績（最大需要電力）と契約電力を比較してみると、引き下げ余地が見えることがあります。",
  },
  {
    heading: "テナントビルの制約を把握する",
    content:
      "テナントとしてオフィスを借りている場合、建物一括受電が採用されているケースがあります。この場合、個別に新電力と契約することができず、ビルオーナーが決める電気料金が適用されます。まず自社の契約形態がどちらかを確認し、個別契約が可能な場合に見直しの選択肢が広がります。",
  },
  {
    heading: "稼働パターンと実績使用量の整理",
    content:
      "月〜金の日中のみ稼働するオフィスは、電力使用の時間帯が集中しています。深夜・土日の使用量が極めて少ない場合、時間帯別料金プランよりも単純な低圧従量プランの方が合う場合もあります。請求書から月ごとの使用量推移を12か月分確認し、変動幅を把握しておきましょう。",
  },
  {
    heading: "複数拠点の一括見直し",
    content:
      "複数の事務所・拠点を持つ場合、まとめて見積依頼をすることで交渉力が高まる場合があります。ただし、各拠点の契約種別（低圧・高圧）や使用量が大きく異なる場合は、個別の条件精査も必要です。拠点ごとの現状を一覧化しておくと見積依頼が進めやすくなります。",
  },
];

const faqItems = [
  { question: "中小オフィスでも電力契約の見直しは効果がありますか？", answer: "はい。使用量が少ない中小オフィスでも、基本料金（デマンド料金）の比率が高い場合は見直し効果が出やすいです。契約電力の設定が実態より高くなっている場合、引き下げるだけで毎月の基本料金を削減できます。" },
  { question: "テナントビル入居の中小オフィスは契約を変えられますか？", answer: "テナントビルの場合、一括受電方式では個別に電力会社を変えられないことがあります。まず自社の電力契約が直接契約か一括受電かを確認し、直接契約であれば新電力への切り替えや料金プランの見直しが可能です。" },
  { question: "中小オフィスで市場連動プランは向きますか？", answer: "電力使用量が少ない中小オフィスでは、価格変動の絶対額が小さいため市場連動のメリット・デメリットも限定的です。ただしモニタリング体制が取れない場合は固定プランの方が管理しやすく、予算予測も立てやすいです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売自由化・電気料金制度に関する情報" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "法人向け電力契約・新電力情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "需給状況・デマンドデータ情報" },
];

export default function SmallOfficeElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/small-office-electricity-cost-review"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
          { name: "中小オフィスの見直しポイント" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">中小オフィスの見直しポイント</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          中小オフィスの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          中小規模のオフィスは、大型施設と比べると電気使用量は少ないものの、基本料金の比率が相対的に高く、見直しの効果が出やすい場合があります。テナントビルの制約や、空調・OA機器の稼働パターンを踏まえたうえで、適切な契約条件を選ぶことが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、中小オフィス特有の負荷特性を踏まえ、契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>中小オフィスの電気料金が上がりやすい構造的な理由</li>
            <li>空調・照明・OA機器の負荷特性から見た着眼点</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>テナントビルでの制約と個別契約の確認方法</li>
            <li>設備対策（LED・空調更新）との相性</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            中小オフィスの電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中小オフィスは使用量が少ないにもかかわらず、料金構造の特性から割高になりやすい場合があります。主な要因は以下のとおりです。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>（最低料金・<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>）が使用量に対して相対的に大きい</li>
            <li>夏・冬の空調需要が使用量を大きく押し上げる</li>
            <li>テナントビル一括受電では比較・交渉の余地が生まれにくい</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整</Link>単価の上昇が月額コストに毎月上乗せされる</li>
            <li><Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>が使用量に比例して増加している</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇要因の全体像は{" "}
            <Link
              href="/why-business-electricity-prices-rise"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がる理由
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            負荷特性から見た着眼点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中小オフィスの電力使用は、以下の設備カテゴリに大きく分けて考えることができます。各設備の負荷特性を理解しておくと、契約見直しや設備対策の優先順位が見えてきます。
          </p>
          <div className="mt-4 space-y-3">
            {loadCharacteristics.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中小オフィスは、使用量の絶対値が小さいため、プランの選択による金額差が大企業と比べると小さくなりがちです。一方で、電気料金は事業経費に対する比率として見たときに影響が大きい場合があります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>月次の経費が一定になり、予算管理が容易になる</li>
                <li>担当者の管理工数が少なくて済む</li>
                <li>市場価格の動向を追い続ける体制がない場合に向く</li>
                <li>使用量が少なくても上振れ時の影響を完全に遮断できる</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>使用量が少ないため、安くなる時の恩恵も小さい</li>
                <li>価格変動の監視・対応体制が必要になる</li>
                <li>夏・冬の使用量増加期と価格上昇が重なるリスク</li>
                <li>社内の経費精算・予算管理が複雑になりやすい</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランが向く法人の特徴は{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランが向く法人の特徴
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約見直しで確認したいこと
          </h2>
          <div className="mt-4 space-y-4">
            {reviewPoints.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しの全体的な進め方は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しと並行して、設備面での対策を検討することで、電気料金の削減効果をさらに高められる場合があります。中小オフィスで比較的導入コストが抑えられる設備対策を以下に整理します。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明への切替え</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                まだ蛍光灯が残っている場合、LEDへの切替えは初期投資回収が早く効果が明確。照明制御（センサー・タイマー）の導入も合わせて検討できる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調設備の更新・管理</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                10年以上経過した旧型エアコンは効率が低下しています。高効率機への更新のほか、フィルター清掃・設定温度管理などの運用改善も効果があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">スマートタップ・電力可視化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                待機電力の削減やOA機器の電源管理に活用できます。電力使用量を可視化することで、削減効果の測定と継続改善が可能になります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">クラウド移行によるサーバー削減</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                オンプレミスサーバーをクラウドに移行することで、24時間稼働の設備電力を削減できます。ITコスト削減と電気代削減を同時に検討できる機会です。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中小オフィスの契約見直しでは、以下の観点でシミュレーターを活用すると、判断材料を数値で把握できます。使用量が少なくても、料金構造の違いによって年間コストに差が生じることを確認できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を試算する</li>
            <li>燃料費調整額の変動が月額に与える影響幅を把握する</li>
            <li>契約電力の見直しによる基本料金削減効果を確認する</li>
          </ul>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="small-office-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "市場連動プラン", "固定プラン", "電気料金の内訳"]} />
        </div>

        <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-04-10" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向きやすい理由。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目を見積比較に活用するためのポイント。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・空調負荷を踏まえた食品小売の契約見直しの考え方。",
            },
            {
              href: "/convenience-store-electricity-cost-review",
              title: "コンビニの電気料金見直しポイント",
              description: "24時間営業と多拠点を踏まえた考え方。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
            {
              href: "/electricity-cost-benchmark-by-industry",
              title: "業種別・電気料金の相場と目安",
              description: "中小オフィスの電気料金水準を業界平均と比較し、コスト見直しの根拠を把握する。",
            },
          ]}
        />

        <ContentCta
          heading="自社の条件でリスクを確認する"
          description="中小オフィスの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
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
