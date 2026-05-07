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
import TableOfContents from "../../components/market-data/TableOfContents";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];

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
  { question: "30階建て高層オフィスビルと5階建て中層ビルで電力単価は違いますか？", answer: "kWh単価そのものは契約区分（高圧/特別高圧）と電力会社の料金メニューで決まり、階数で直接変わるものではありません。ただし高層ビルは延床面積も大きく契約電力（kW）が大きいため特別高圧での契約となるケースが多く、結果的にkWh単価が中層ビルより安くなる傾向があります。一方で、エレベーター・揚水・空調搬送動力など階数依存の使用量は大きいため、kWh単価ではなく『延床面積あたりの年間電気代』で比較するのが実務的です。" },
  { question: "グリーンビル認証取得は電気代にどう影響しますか？", answer: "LEED・CASBEE・ZEB認証の取得自体は審査費用がかかりますが、認証取得を目指す過程で実施される高効率空調・LED・断熱性能向上・BEMS導入により、ベースの電気代は通常10〜30%削減される事例が多いです。また再エネ100%プラン併用で『RE100相当』を実現するケースでは、再エネプレミアム分の単価上乗せが発生する一方、入居テナント側からの賃料プレミアムを得やすく、不動産価値とのトータルで判断します。" },
  { question: "ZEB化補助金は既存ビルでも対象になりますか？", answer: "なります。環境省「ZEB化推進事業」「業務用建築物の脱炭素改修支援」、経産省「省エネルギー投資促進支援事業（SII）」のいずれも、新築だけでなく既存ビルの省エネ改修を対象としています。既存ビルではZEB Ready（ZEB相当の半分以上の省エネ）レベルが現実的な目標となり、空調・照明・断熱の同時改修で50%以上の削減を達成すれば補助率3分の1〜2分の1の補助を受けられる制度設計が一般的です。" },
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

      <AuthorBadge publishedAt="2026-04-10" updatedAt="2026-04-10" />
      <TableOfContents />

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜオフィスビルの電気料金見直しが重要なのか — 空調支配と猛暑加速
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビルの電気料金上昇は、空調が使用量の40〜60%を占める「空調支配」構造と、近年の猛暑による空調需要の年々の高まりという2つの要因が重なることで他業種より加速しやすいのが特徴です。さらに、テナント賃料への転嫁ルートが契約形態（事業所ビル/区分所有/サブリース）で大きく異なるため、見直しの主体・効果配分の整理が他業種より複雑になります。以下に、構造的な要因を整理します。
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
            空調 40-60% を中核とするオフィスビル特有の負荷構造
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビルの電力使用は、空調が圧倒的な比重を占める「空調支配型」の負荷構造を持ちます。一般的なオフィスでは空調が全使用量の40〜60%、照明が15〜25%、OA機器・サーバーが10〜20%、共用部・搬送動力が10〜15%を占めるとされており、空調を制することがそのまま電気代削減の主戦場になります。各設備カテゴリの特性は以下のとおりです。
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
            階数規模別の電力消費プロファイル（5 階 / 10 階 / 30 階＋）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社ビルの電力消費が業界水準と比べて多いのか少ないのか、規模感をつかむには「延床面積あたりの年間電気代」で比較するのが実務的です。階数（建物高さ）はエレベーター・揚水ポンプ・空調搬送動力に影響し、延床面積規模は空調・照明の絶対量を決めるため、両軸で見ることが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">延床面積目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">年間使用量目安（kWh/m²）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な特徴</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-semibold">5階建て中層ビル</td>
                  <td className="border border-slate-200 px-3 py-2">2,000〜5,000m²</td>
                  <td className="border border-slate-200 px-3 py-2">約100〜140 kWh/m²</td>
                  <td className="border border-slate-200 px-3 py-2">高圧契約。エレベーター搬送動力少なめ</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">10階建て中規模ビル</td>
                  <td className="border border-slate-200 px-3 py-2">5,000〜15,000m²</td>
                  <td className="border border-slate-200 px-3 py-2">約120〜160 kWh/m²</td>
                  <td className="border border-slate-200 px-3 py-2">高圧の最上位帯。空調セントラル方式</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-semibold">30階建て高層ビル</td>
                  <td className="border border-slate-200 px-3 py-2">30,000m²超</td>
                  <td className="border border-slate-200 px-3 py-2">約140〜200 kWh/m²</td>
                  <td className="border border-slate-200 px-3 py-2">特別高圧。高速EV・揚水・全館空調制御</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">出典: 国土交通省「建築物環境配慮計画書」集計、日本ビルエネルギー総合管理技術協会「業務用ビルのエネルギー消費実態」をもとに業界平均レンジで作成。築年数・空調方式・テナント業種で変動。</p>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自社ビルのkWh/m²が業界平均レンジの上限を超えている場合、設備老朽化・空調効率低下・テナント業種特性のいずれかが原因として疑わしく、契約見直しと並行して設備更新の検討が必要なシグナルになります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            テナント転嫁の有無とプラン選択 — 自社ビル / テナントビルの違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビルでプラン選択の前に整理すべきは、電気代を最終的に誰が負担するかです。自社専有ビルでは電気代上昇は本社経費への直撃となり固定プランの安定性メリットが大きい一方、テナントビルでは共益費・実費精算・サブメーター個別契約など複数の転嫁ルートがあり、転嫁可能性の高さが市場連動の許容度を引き上げます。事業規模・リスク許容度・予算管理の方法に加えて、この『転嫁構造』を起点に判断することが重要です。
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
            グリーンビル認証（LEED / CASBEE / ZEB）と再エネ調達の連動
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            近年のオフィスビルでは、テナント企業のCDP対応やTCFD・SBT・RE100コミットメントの広がりを背景に、入居先ビルに「環境性能」を求めるテナント需要が顕在化しています。電力契約見直しと、グリーンビル認証取得・再エネ調達を一体で設計することが、単なるコスト削減を超えた競争力の源泉になります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LEED（米国基準）</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                外資系テナントが評価しやすい国際基準。エネルギー効率・水使用・室内環境・立地など総合評価。再エネ電力購入が加点要素。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">CASBEE（国内基準）</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                国内大手企業・地方自治体が評価する日本基準。建築物の環境性能を5段階で評価し、自治体の容積率緩和・税制優遇と連動するケースもある。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ZEB（経産省/環境省）</p>
              <p className="mt-1 text-xs leading-6 text-slate-600">
                Net Zero Energy Building。一次エネルギー消費量を50〜100%削減する建築物。補助金の対象としては最も額が大きく、新築・既存改修の両方に対応。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務上は、ベース契約の電源構成を再エネ比率の高いプランに切り替えるか、非化石証書を別途調達するかの2択が一般的で、後者のほうが調達単価交渉の柔軟性が高くなります。<Link href="/non-fossil-certificates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非化石証書</Link>の活用方法も合わせて検討してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            30 分値デマンドデータの取得と平日日中ピークの分析手順
          </h2>
          <div className="mt-4 space-y-4">
            <p className="text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルの契約見直しで決定的に効くのが30分値デマンドデータの取得・分析です。電力会社のWebマイページや電気料金請求書では月単位の使用量しか分からないため、契約電力の妥当性判断や時間帯別料金プランの効果試算には30分値（1日48コマ・1か月1,440コマ）の生データが必要になります。電力会社に正式申請すれば過去12〜24か月分のCSV入手が可能です。これを下記の観点で分析します。
            </p>
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
            既存ビル ZEB 化補助金と空調・照明更新の優先順位
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            既存ビルの省エネ改修では、補助金活用と投資回収期間のバランスから、改修順序を「効果の大きい順×補助率の高い順」で組むのが原則です。一般的には①空調主機更新（電気代の最大費目）、②BEMS導入（運用最適化の基盤）、③LED化、④外皮断熱の順に投資回収が早い傾向があり、ZEB Ready相当を目指すならまずこの順で着手します。オフィスビルで検討されることの多い設備対策は以下のとおりです。
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
            中規模オフィスビル（延床 5,000m²）の年間削減事例ベンチマーク
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複合施策の効果を具体的にイメージするため、中規模オフィスビルを想定した試算ベンチマークを示します。築年数・空調方式・テナント業種で削減幅は変動しますが、初期検討の目安として活用できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-900">想定モデル</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
                <li>用途：事務所ビル（自社使用＋一部テナント）</li>
                <li>延床面積 約5,000m²、地上10階建て</li>
                <li>年間電力使用量 約70万kWh</li>
                <li>現行契約：高圧、固定単価ベース、年間電気料金 約2,000万円</li>
                <li>築20年、空調セントラル方式、LED未更新エリアあり</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">削減施策と効果目安（年間）</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-600">
                <li>契約プラン見直し（複数社相見積）: 約3〜5%（約60〜100万円）</li>
                <li>BEMS導入＋運用改善: 約5〜8%（約100〜160万円）</li>
                <li>LED完全化＋人感センサー: 約3〜5%（約60〜100万円）</li>
                <li>空調主機更新（一部高効率化）: 約7〜12%（約140〜240万円）</li>
                <li>非化石証書による再エネ調達: コスト中立〜微増（テナント賃料優位）</li>
                <li className="font-semibold text-slate-800 mt-1">合計削減幅目安: 年間 約360〜600万円（18〜30%）</li>
              </ul>
            </div>
          </div>
          <p className="mt-2 text-xs text-slate-500">出典: 環境省ZEB事業実績集、不動産協会「ビル省エネ改修事例」、エネルギー情報センター内部試算をもとに業界平均レンジで作成。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで自社ビルの状況を確認する
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

        <MarketDataFaq items={__CATEGORY_FAQ__} />

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
