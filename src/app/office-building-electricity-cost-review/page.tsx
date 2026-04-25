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
  "オフィスビルの電気料金見直しポイント｜空調・照明負荷を踏まえた考え方";
const pageDescription =
  "オフィスビルの電気料金が上がりやすい要因と、契約見直しの着眼点を解説。空調・照明・エレベーターの負荷特性、平日日中集中型の使用パターン、固定プランと市場連動の向き不向きを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "オフィスビル 電気料金 見直し",
    "オフィス 電気代 削減",
    "事務所 電力契約 見直し",
    "ビル 空調 電気料金",
    "オフィス 電力コスト 対策",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/office-building-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/office-building-electricity-cost-review",
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
      "オフィスビルの電気使用量の40〜60%を空調が占めることが多い。夏場の冷房・冬場の暖房で使用量が増加し、特に夏の高気温日にはデマンドピークが発生しやすい。中間期（春・秋）は使用量が大幅に減少する。",
  },
  {
    label: "照明設備",
    detail:
      "営業時間（平日8時〜20時前後）に集中して使用。LED化が進んでいる建物では照明の電力消費は大幅に削減されているが、大規模ビルでは絶対量がまだ大きいケースもある。人感センサー・照度センサーとの組み合わせが効果的。",
  },
  {
    label: "エレベーター・エスカレーター",
    detail:
      "通勤・昼食時間帯などの集中時に稼働が増加する。高層ビルでは台数が多く、合計消費量は無視できない規模になる。ただし個別に制御できる余地は少ないため、契約電力の管理よりも稼働最適化が主な対策になる。",
  },
  {
    label: "サーバー・OA機器",
    detail:
      "テレワーク普及後も、オンプレミスサーバーや複合機・PC等のOA機器が一定の電力を消費し続ける。常時稼働のサーバーはベースロードとして影響し、クラウド移行でオフィスの電力消費を削減できる場合もある。",
  },
  {
    label: "共用部・外灯",
    detail:
      "共用廊下・駐車場・外灯・防犯カメラ・エントランスなどの設備は24時間稼働するものも多い。テナントビルでは管理費と電気代の配分が複雑になることもある。",
  },
];

const reviewPoints = [
  {
    heading: "平日日中集中型の使用パターンを把握する",
    content:
      "オフィスビルは平日の昼間に電力使用が集中し、夜間・休日は大幅に低下する傾向があります。この「昼間集中・夜間低下」のパターンは、時間帯別料金設計（ピーク・オフピーク）を活用できる可能性があります。直近12か月の月次使用量に加えて、30分値のデマンドデータを収集しておくと、負荷パターンの分析に役立ちます。",
  },
  {
    heading: "季節変動の確認",
    content:
      "空調が主な電力使用の業種のため、夏（冷房）と冬（暖房）に使用量が増加し、春・秋は低くなる二山型のパターンが典型的です。ただし、近年の猛暑により夏の電力消費が年々増加傾向にあることも考慮に入れておく必要があります。",
  },
  {
    heading: "デマンドピーク管理",
    content:
      "夏の暑い日に空調・照明・OA機器が同時に動くタイミングでデマンドのピークが発生します。デマンドコントローラーによる設備の起動タイミング制御、空調設定温度の管理、照明の自動制御などを組み合わせることで、契約電力の引き下げにつながる可能性があります。",
  },
  {
    heading: "テナントビルと自社ビルの違い",
    content:
      "テナントビルでは、電力の一括受電・テナント別メーター・管理組合経由の契約など、電力の供給形態が複雑になることがあります。自社ビルでは意思決定がシンプルですが、テナントビルでは管理会社・テナント・オーナーの関係整理が必要な場合があります。",
  },
];

const faqItems = [
  { question: "オフィスビルで電気料金を削減するには何から始めればよいですか？", answer: "まず直近12か月の月次使用量とデマンドデータを収集し、ピーク時間帯と季節変動のパターンを把握することが出発点です。その上で、現行契約の基本料金と電力量料金の比率を確認し、固定プランと市場連動プランのどちらが自社に向いているかを判断します。" },
  { question: "オフィスビルは固定プランと市場連動プランのどちらが向いていますか？", answer: "大規模ビルや予算管理の説明責任がある法人は、価格変動リスクを避けられる固定プランが向きやすいです。中小規模でモニタリング体制があれば市場連動も選択肢になりますが、夏の需給逼迫時に使用量が増えるオフィスビルの特性上、リスク管理が重要になります。" },
  { question: "デマンドコントローラーはオフィスビルに効果がありますか？", answer: "効果があります。30分値デマンドのピークを監視し、設定値を超えそうになると空調・照明等を自動制御することで契約電力を引き下げられます。特に夏の空調集中時にデマンドピークが発生しやすいオフィスビルでは、基本料金削減の効果が期待できます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売自由化・省エネ政策・電気料金制度に関する情報" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "法人向け電力契約・新電力情報" },
  { name: "OCCTO（電力広域的運営推進機関）", url: "https://www.occto.or.jp", description: "需給状況・デマンドデータ・系統運用情報" },
];

export default function OfficeBuildingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/office-building-electricity-cost-review"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
          { name: "オフィスビルの見直しポイント" },
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
        <span className="text-slate-800">オフィスビルの見直しポイント</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          オフィスビルの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          オフィスビルの電気料金は、空調・照明・エレベーターなど複数の設備が組み合わさっており、特に夏冬の空調シーズンに使用量が増加します。平日日中に使用が集中するパターンは、料金プランの選択や設備対策の判断に影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、オフィスビル特有の負荷特性を踏まえ、契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>オフィスビルの電力消費を構成する主要設備と特性</li>
            <li>平日日中集中型使用パターンと季節変動の把握方法</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>デマンドピーク管理と設備対策の考え方</li>
            <li>テナントビルと自社ビルの違いによる契約の複雑さ</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            オフィスビルの電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビルの電気料金上昇には、以下のような構造的な要因があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>空調設備が電気使用量の40〜60%を占め、夏冬の気温変動で大きく変わる</li>
            <li>近年の猛暑・厳冬化により、空調需要のピーク値が年々高まる傾向</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>・<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>など、コントロールできない上乗せ費用の増加</li>
            <li>大規模ビルでは電力使用量が多く、単価変動の影響が金額ベースで大きい</li>
            <li>設備の老朽化により、効率が低下した空調・照明が使用量を押し上げる場合がある</li>
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
            オフィスビルの電力使用は、以下の設備カテゴリに大きく分けて考えることができます。
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
            オフィスビルは、業種特性によって固定プランと市場連動プランの向き不向きが分かれます。事業規模・リスク許容度・予算管理の方法を整理した上で判断することが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすいケース</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>大規模ビル（使用量が多く変動の絶対額が大きい）</li>
                <li>上場企業・公益法人など予算管理の説明責任がある法人</li>
                <li>夏場に空調需要が大きく、需給逼迫リスクと重なる懸念がある</li>
                <li>電力担当者が価格モニタリングに充てるリソースが少ない</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討できるケース</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>中小規模ビルで電力使用量が限定的（上振れの絶対額が小さい）</li>
                <li>電力価格モニタリング・DR対応ができる体制がある</li>
                <li>市場価格の変動リスクを許容できる財務基盤がある</li>
                <li>コスト削減目標が高く、平均コスト低下を優先したい</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            プラン選択の考え方は{" "}
            <Link
              href="/fixed-vs-market-linked-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランと市場連動プランの判断ガイド
            </Link>{" "}
            で詳しく整理しています。
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
            契約見直しと並行して、設備面での省エネ対策を検討することで、電気料金の削減効果をさらに高められます。オフィスビルで検討されることの多い設備対策は以下のとおりです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調の高効率化・制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                インバーター制御・部分負荷効率の高い機種への更新。フロア別・時間帯別のきめ細かい制御で、使用量削減とデマンド抑制の両方に効果が出やすい。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">照明のLED化・センサー制御</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                未LED化のフロアがある場合は、LED化による電力削減効果が大きい。人感センサー・照度センサーとの組み合わせで、自動消灯・調光による削減効果を高める。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                30分値デマンドのピークを監視し、設定値を超えそうになると空調・照明等を自動制御。<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>の引き下げにつながり、<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>の削減効果がある。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">屋上・壁面太陽光</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                屋上面積がある自社ビルでは、<Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光</Link>発電で昼間の購入電力を削減できる。PPAモデルを活用することで初期投資を抑えて導入できる場合もある。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビルの契約見直しでは、以下の観点でシミュレーターを活用すると、判断材料を数値で把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約での年間上振れリスク額を確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を試算する</li>
            <li>夏の需給逼迫シナリオでの影響額を把握する</li>
            <li>燃料費高騰・円安シナリオでの電気料金への影響を確認する</li>
          </ul>
        </section>

        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="office-building-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "デマンド値"]} />
        </div>

        <SourcesAndFaq sources={sourcesItems} faq={faqItems} publishedAt="2026-04-10" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/industry-electricity-guide",
              title: "業種別の電気料金見直しガイド一覧",
              description: "業種ごとの負荷特性と契約見直しの考え方を一覧で確認。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "固定プランを選ぶ判断基準とよくあるケース。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備の基本項目を一覧で確認。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・空調負荷の特性から見た契約見直しの考え方。",
            },
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "安定性重視の医療施設における契約設計の考え方。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "デマンド料金（基本料金）の仕組み",
              description: "契約電力とデマンドの関係、基本料金の削減方法。",
            },
            {
              href: "/office-electricity-cost-benchmark",
              title: "オフィスの電気料金相場と目安",
              description: "オフィスビルの規模・用途別の電気料金水準を把握し、自社コストと比較する。",
            },
            {
              href: "/demand-control-reduction-effect",
              title: "デマンドコントロールによる電気料金削減効果",
              description: "オフィスビルでのデマンド管理が基本料金削減にどれだけ効果があるかを解説。",
            },
            {
              href: "/small-office-electricity-cost-review",
              title: "小規模オフィスの電気代",
              description: "ビル内テナントとなる小規模オフィスの電気代構造を把握し、ビル側がテナントのコスト感を理解した上で共用部設計を最適化できます。",
            },
            {
              href: "/factory-electricity-cost-benchmark",
              title: "工場電気代ベンチマーク",
              description: "中央管理、大型空調、大電力契約という点でオフィスビルと工場は共通点が多く、設備運用の最適化手法が相互に参考になります。",
            },
            {
              href: "/holding-company-electricity-review",
              title: "ホールディングス電気代見直し",
              description: "複数物件を保有する企業の全社視点の電気代見直しを参照し、保有ビルの一括契約・共同調達による交渉力強化のヒントを得られます。",
            },
            {
              href: "/retail-store-electricity-cost-benchmark",
              title: "小売店電気代ベンチマーク",
              description: "商業テナントが入るオフィスビルでは、テナント側の小売店舗ベンチマークを把握すると、共用部料金や転貸電気の妥当性を判断しやすくなります。",
            },
          ]}
        />

        <ContentCta
          heading="自社のオフィスビルの条件でリスクを確認する"
          description="空調・照明・電力使用量を踏まえた契約条件をシミュレーターに入力して、年間リスク額や固定プランとの比較を確認できます。"
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
