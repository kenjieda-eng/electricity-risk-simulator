import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];


const pageTitle =
  "自治体庁舎の電気料金見直しポイント｜年度予算制を踏まえた考え方";
const pageDescription =
  "自治体庁舎の電力契約見直しにおける特有の制約（年度予算制・入札・説明責任）と対応方法を解説。固定プランが選ばれやすい理由、調達プロセス、議会への説明ポイントまで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 電気料金 見直し",
    "庁舎 電力契約 入札",
    "自治体 電気代 削減",
    "公共施設 電力 調達",
    "自治体 エネルギー 契約",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/municipality-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/municipality-electricity-cost-review",
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

const loadCharacteristics = [
  {
    label: "庁舎空調・換気",
    detail:
      "窓口業務・執務スペース・会議室など多様な用途で空調が稼働。平日の執務時間帯に集中するが、電算センター・サーバー室など常時空調が必要な区画も存在する。",
  },
  {
    label: "照明設備",
    detail:
      "廊下・階段・駐車場など共用部は夜間も稼働する。執務室はLED化が進んでいる施設もあるが、古い庁舎では蛍光灯が残っているケースもある。",
  },
  {
    label: "電算・情報処理設備",
    detail:
      "住民基本台帳・税務・福祉など基幹システムのサーバーは24時間稼働。サーバー室の冷却設備も常時稼働となる。行政DX推進でクラウド移行が進む施設では、オンプレミスの消費量が減少する傾向。",
  },
  {
    label: "上下水道施設・ポンプ場",
    detail:
      "上水道・下水道のポンプ設備は24時間稼働で、電力消費が大きい。一般庁舎とは別の契約・メーターで管理されることが多いが、一括調達の対象になる場合もある。",
  },
];

const reviewPoints = [
  {
    heading: "年度予算制への対応",
    content:
      "自治体は年度（4月〜3月）で予算管理を行います。電力契約の費用を年度予算に正確に計上するためには、年間コストの予測可能性が重要です。市場連動プランでは月次の費用がブレるため、補正予算対応が必要になるケースもあります。固定プランが選ばれやすい最大の理由の一つです。",
  },
  {
    heading: "入札・見積合せの調達プロセス",
    content:
      "自治体の電力調達は、地方自治法・地方公共団体の物品等調達規則等に基づき、原則として入札または見積合せによって行われます。随意契約ができる条件に制約があるため、更新のたびに調達プロセスを経る必要があります。年度末近くに入札を実施し、翌年度4月から新契約を開始するスケジュールが一般的です。",
  },
  {
    heading: "議会・監査委員への説明責任",
    content:
      "電力調達コストは住民の税金であるため、議会・監査委員から「なぜこの事業者を選んだのか」「なぜこのプランなのか」を問われる可能性があります。市場連動プランを選ぶ場合は、リスクの説明や上振れ時の対応方針についても事前に整理しておく必要があります。",
  },
  {
    heading: "複数施設の一括調達",
    content:
      "庁舎だけでなく、学校・公民館・図書館・体育館・公営住宅など多数の公共施設を一括で調達することで、交渉力が高まり有利な条件を得やすくなる場合があります。ただし施設ごとに電圧区分・使用量が異なるため、一括調達の設計には各施設の情報整理が必要です。",
  },
];

export default function MunicipalityElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="自治体庁舎の電気料金見直しポイント｜年度予算制を踏まえた考え方"
        description="自治体庁舎の電力契約見直しにおける特有の制約（年度予算制・入札・説明責任）と対応方法を解説。固定プランが選ばれやすい理由、調達プロセス、議会への説明ポイントまで整理します。"
        url="https://simulator.eic-jp.org/municipality-electricity-cost-review"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={[
    { question: "業種ごとに電力契約の見直しポイントは違いますか？", answer: "はい、使用パターン・ピーク時間帯・契約区分が業種ごとに異なるため、見直しの着眼点も変わります。" },
    { question: "電気代の相場はどこで確認できますか？", answer: "経済産業省の電力取引報や新電力ネットの統計データで業種別の目安を確認できます。" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">自治体庁舎の見直しポイント</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          自治体庁舎の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自治体庁舎の電力契約は、民間企業とは異なる制約のもとで見直しを進める必要があります。年度予算制・入札・説明責任という3つの制約が、調達方法・プラン選択・タイミングに大きく影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自治体庁舎特有の制約を踏まえた契約見直しの着眼点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>庁舎の電力消費を構成する主要設備と特性</li>
            <li>年度予算制が電力契約に与える影響</li>
            <li>入札・見積合せによる調達プロセスの基本</li>
            <li>固定プランが自治体に向きやすい理由</li>
            <li>複数施設の一括調達を検討する際の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自治体庁舎で電気料金が課題になりやすい背景
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            近年の電気料金上昇は、自治体の財政に直接影響しています。特に以下の要因が課題を大きくしています。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整</Link>・<Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金</Link>・<Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金</Link>の増加で、予算計上額が当初見込みを超えるケースが増えている</li>
            <li>自由化後に旧一般電気事業者から新電力に切り替えた施設で、新電力の撤退・経営悪化による再調達が必要になったケース</li>
            <li>電気代値上がりへの対応を住民・議会から求められることで、担当部署の説明負荷が高まっている</li>
            <li>省エネ・脱炭素の取組みとして再エネ電力の調達を求められるケースが増えている</li>
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
            自治体に固定プランが向きやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体庁舎では、民間と異なる制約から固定プランが選ばれる傾向が強くあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年度予算に電気代を確定的に計上できる</li>
                <li>市場価格が高騰しても補正予算対応を最小化できる</li>
                <li>議会・監査委員への説明が「固定単価で調達」として明確にできる</li>
                <li>電力価格モニタリングのための専任担当者が確保しにくい</li>
                <li>市場連動の上振れリスクを税金で負担することへの住民説明が難しい</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の条件</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>上振れシナリオを含めたリスク分析が事前に完成している</li>
                <li>補正予算対応の手続きが整備されている</li>
                <li>担当部署にエネルギー価格を管理できる知識・体制がある</li>
                <li>議会・首長への事前説明と合意が取れている</li>
              </ul>
            </div>
          </div>
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
            契約見直しの基本的な手順は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            も参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再エネ電力の調達とコストバランス
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体では、2050年カーボンニュートラルの目標やRE100相当の取組みとして、再エネ電力の調達を求められるケースが増えています。ただし再エネ電力を調達する際は、コストとの兼ね合いを整理しておく必要があります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">再エネ調達の主な方法</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>再エネ指定電力メニューへの切替（プレミアム付きが多い）</li>
                <li>非化石証書・J-クレジットの購入</li>
                <li>庁舎への<Link href="/solar-self-consumption-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光</Link>の導入</li>
                <li>PPA（電力購入契約）による再エネ調達</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">コスト面での注意点</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>再エネプレミアムにより年間コストが上昇する</li>
                <li>非化石証書の価格は市場動向により変動する</li>
                <li>太陽光・PPAは初期投資または長期契約が伴う</li>
                <li>コストと脱炭素効果のバランスを議会・住民に説明できるよう整理する</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体の電力契約見直しでは、以下の観点でシミュレーターを活用すると議会説明・稟議資料の根拠となる数値を整理できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスク額を確認する</li>
            <li>固定プランと市場連動プランの年間コスト差を試算する</li>
            <li>需給逼迫・燃料高騰シナリオでの影響額を把握する（補正予算の備えに）</li>
            <li>複数施設の一括調達時の総コストを試算する</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <SourcesAndFaq
          faq={[
          { question: "業種ごとに電力契約の見直しポイントは違いますか？", answer: "はい、使用パターン・ピーク時間帯・契約区分が業種ごとに異なるため、見直しの着眼点も変わります。" },
          { question: "電気代の相場はどこで確認できますか？", answer: "経済産業省の電力取引報や新電力ネットの統計データで業種別の目安を確認できます。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />


          <GlossaryLinks currentSlug="municipality-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン"]} />
        </div>

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
              description: "固定プランが有利に働く法人のパターンと判断基準。",
            },
            {
              href: "/office-building-electricity-cost-review",
              title: "オフィスビルの電気料金見直しポイント",
              description: "オフィス系施設の負荷特性と見直しの考え方。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備の基本項目を一覧で確認。",
            },
            {
              href: "/electricity-contract-cancellation-renewal-terms",
              title: "電力契約の解約・更新条件の確認ポイント",
              description: "解約通知期限・切替手続きの基本。",
            },
            {
              href: "/municipality-procurement-methods",
              title: "自治体の電力調達方式の比較",
              description: "入札・随意契約・共同調達など自治体向け調達手段の整理。",
            },
            {
              href: "/municipality-bundled-procurement",
              title: "自治体の電力一括調達のメリットと注意点",
              description: "複数施設をまとめて調達するバンドル調達で自治体がコストを削減する方法。",
            },
          ]}
        />

        <ContentCta
          heading="自治体の電力契約条件でリスクを確認する"
          description="庁舎の契約電力・使用量・プラン条件をシミュレーターに入力して、年間リスク額や議会説明に使える数値を確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
