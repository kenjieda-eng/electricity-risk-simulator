import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["case-studies"];


const pageTitle = "自治体：12施設統合調達で年間3,100万円削減した事例｜地方自治体";
const pageDescription =
  "地方自治体が庁舎・公共施設12施設の電力調達を統合入札し、年間3,100万円（約21%）の電気代削減を達成した事例。公共施設の統合調達の手順・入札設計・新電力切り替えのリスク管理を解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-municipality-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["自治体 電力調達", "公共施設 電気代削減", "統合入札 電力", "地方自治体 新電力", "公共 電力コスト削減", "自治体 省エネ"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/case-studies", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/case-studies"],
  },
};

const facilities = [
  { name: "市役所本庁舎", type: "行政施設", kwhYear: 1_850_000, before: "4,440万円" },
  { name: "市民文化センター", type: "文化施設", kwhYear: 980_000, before: "2,350万円" },
  { name: "体育館・スポーツセンター", type: "スポーツ施設", kwhYear: 720_000, before: "1,730万円" },
  { name: "図書館（中央・分館2館）", type: "教育施設", kwhYear: 340_000, before: "820万円" },
  { name: "小学校（3校）", type: "学校", kwhYear: 520_000, before: "1,250万円" },
  { name: "中学校（2校）", type: "学校", kwhYear: 380_000, before: "910万円" },
  { name: "公民館（2館）", type: "コミュニティ", kwhYear: 180_000, before: "430万円" },
  { name: "合計（12施設）", type: "—", kwhYear: 4_970_000, before: "約1億4,930万円" },
];

const beforeAfter = [
  { item: "電力量料金合計（年額）", before: "約7,280万円", after: "約5,950万円", diff: "▲約1,330万円" },
  { item: "基本料金合計（年額）", before: "約4,860万円", after: "約3,980万円", diff: "▲約880万円" },
  { item: "燃料費調整額合計（年額）", before: "約1,920万円", after: "約1,310万円", diff: "▲約610万円" },
  { item: "再エネ賦課金合計（年額）", before: "約870万円", after: "約590万円", diff: "▲約280万円" },
  { item: "合計（年額・12施設）", before: "約1億4,930万円", after: "約1億1,830万円", diff: "▲約3,100万円" },
];

export default function CaseStudyMunicipalityPage() {
  return (
    <>
      <ArticleJsonLd
        headline="自治体：12施設統合調達で年間3,100万円削減した事例｜地方自治体"
        description="地方自治体が庁舎・公共施設12施設の電力調達を統合入札し、年間3,100万円（約21%）の電気代削減を達成した事例。公共施設の統合調達の手順・入札設計・新電力切り替えのリスク管理を解説します。"
        url="https://simulator.eic-jp.org/case-study-municipality-procurement"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "自治体：12施設統合調達で年間3,100万円削減した事例" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">自治体：12施設統合調達事例</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体：12施設統合調達で年間3,100万円削減した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">地方自治体（人口約15万人）／ 公共施設12施設</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          人口約15万人の地方自治体が、庁舎・学校・文化施設など12施設の電力調達を個別契約から統合入札方式へ切り替え。
          競争原理の導入と新電力への切り替えにより、年間電気代を約1億4,930万円から約1億1,830万円へ、
          <strong>年間約3,100万円（21%）の削減</strong>を実現しました。
          公共施設特有の制約（議会承認・入札手続き・安定供給要件）を乗り越えた手順を詳しく解説します。
        </p>
      </header>

      {/* 施設プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自治体・施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["自治体規模", "人口約15万人（中核市に準じる規模）"],
                ["対象施設数", "12施設"],
                ["電力調達方式（見直し前）", "施設ごとに個別契約（大手電力会社）"],
                ["電力調達方式（見直し後）", "12施設統合入札（新電力）"],
                ["合計年間使用電力量", "約4,970,000kWh"],
                ["見直し前の年間電気代合計", "約1億4,930万円"],
                ["入札実施時期", "2024年2月（翌年度4月からの切り替え）"],
                ["契約期間", "2年間（再入札条件付き）"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-48">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 施設一覧テーブル */}
        <h3 className="mt-5 text-base font-semibold text-slate-900">対象施設の一覧と規模</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">施設名</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">種別</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">年間使用量</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前電気代</th>
              </tr>
            </thead>
            <tbody>
              {facilities.map((row, i) => (
                <tr key={i} className={i === facilities.length - 1 ? "bg-sky-100 font-bold" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.name}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.type}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.kwhYear.toLocaleString()}kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.before}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 課題 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">抱えていた課題</h2>
        <ul className="mt-4 space-y-3">
          {[
            "電力高騰で年間電気代が2年間で約40%増加。各施設の電気代予算を超過し、補正予算対応が毎年発生していた。",
            "12施設がそれぞれ個別に大手電力会社と随意契約しており、統合調達・競争入札の実施経験が担当部署にほとんどなかった。",
            "「新電力は供給が不安定では」という懸念が議会・幹部から出ており、切り替えへの心理的ハードルが高かった。",
            "学校・病院など重要施設が含まれており、停電・供給停止リスクへの対策が必須だった。",
            "入札仕様書の作成・電力会社の資格審査・議会承認など、公共調達特有のプロセスに時間と工数がかかる。",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 施策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">実施した施策（統合入札の手順）</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              step: "STEP 1",
              title: "全施設の電力使用データ収集・現状コスト算定",
              detail: "12施設の過去2年分の電力使用量・電気代を収集。施設ごとの単価・デマンド・燃調費の実態を整理。合計年間電気代約1億4,930万円を議会・財政担当に可視化し、統合入札実施の承認を取得。",
            },
            {
              step: "STEP 2",
              title: "入札仕様書の策定・安定供給要件の設定",
              detail: "新電力への懸念を払拭するため、入札参加資格として「小売電気事業者登録済み」「過去3年間の供給実績あり」「最終保障供給への切り替え対応」を条件として設定。燃料費調整額の上限設定のあるプランを優先条件とした。",
            },
            {
              step: "STEP 3",
              title: "一般競争入札の実施（5社が応札）",
              detail: "仕様書を公告後、大手電力会社を含む5社が応札。入札の結果、燃調費上限設定あり・安定供給実績豊富な新電力事業者が最低価格で落札。議会承認後、2024年4月より切り替え開始。",
            },
            {
              step: "STEP 4",
              title: "切り替え後のモニタリング体制構築",
              detail: "毎月の電力使用量・請求額を本庁財政担当で一元管理。異常値（前年同月比20%以上の乖離）をアラートで検知する仕組みを整備。契約期間満了時の再入札を前提とした継続的なコスト管理体制を確立。",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-sky-700">{m.step}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 削減結果 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">削減結果（Before / After）</h2>
        <p className="mt-2 text-sm text-slate-600">12施設合計の年額比較</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">費目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前（年額）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し後（年額）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">削減額</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((row, i) => (
                <tr key={i} className={i === beforeAfter.length - 1 ? "bg-sky-100 font-bold" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.item}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.before}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.after}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-green-700">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CSS バー */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">施設規模別の削減貢献（年間・概算）</h3>
          <div className="space-y-3">
            {[
              { label: "市役所本庁舎", amount: "約950万円", rate: 31, color: "bg-sky-500" },
              { label: "市民文化センター・体育館等", amount: "約820万円", rate: 26, color: "bg-indigo-500" },
              { label: "学校（小・中5校）", amount: "約650万円", rate: 21, color: "bg-teal-500" },
              { label: "図書館・公民館等", amount: "約680万円", rate: 22, color: "bg-green-500" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.amount}（{bar.rate}%）</span>
                </div>
                <div className="h-3 w-full rounded bg-slate-200">
                  <div className={`h-3 rounded ${bar.color}`} style={{ width: `${bar.rate * 3}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因</h2>
        <ul className="mt-4 space-y-3">
          {[
            "統合入札によるボリューム効果：12施設まとめた調達量が交渉力を高め、単価を大幅改善",
            "入札仕様書への安定供給要件の明記：議会・市民への説明責任を果たしつつ、質の高い入札者を確保",
            "透明性の確保：一般競争入札により公平性・透明性を担保し、住民への説明が容易",
            "燃調費上限設定を条件化：価格変動リスクを仕様段階で組み込んだことで将来の予算超過を防止",
            "財政担当による一元管理：各施設に任せず、本庁が全体を管理するガバナンス体制を構築",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 text-green-600 font-bold">✓</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 担当者コメント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">担当者コメント</h2>
        <blockquote className="mt-4 border-l-4 border-sky-400 pl-4 text-sm leading-7 text-slate-700 sm:text-base italic">
          「議会や幹部への説明では『新電力は大丈夫か』という質問が多かったですが、
          仕様書に安定供給要件を明記したことで理解を得られました。
          一般競争入札で5社が応札し、最終的に21%削減という結果になりました。
          年間3,100万円は別の施設のサービス改善に活用できます。
          他の自治体にも早く取り組んでほしいと思います。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 財政課 公共施設管理担当係長</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">自治体・公共施設の電力調達担当者の方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          まだ個別契約・随意契約を続けている自治体では、統合入札への移行で大きな削減余地があります。
          入札仕様書の作成・安定供給要件の設定についてはノウハウが必要です。
          <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の比較方法</Link>も参考にしながら、
          まず全施設の電力コストの合計を把握することから始めてみてください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "複数の電力会社を比較するための具体的な方法" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの手順と最初にすべきこと" },
            { href: "/case-study-retail-chain-review", title: "小売チェーン30店舗：年間4,200万円削減", description: "一括見直しのスケールメリットを活かした事例" },
            { href: "/case-study-restaurant-chain-reduction", title: "飲食チェーン：40店舗で年間2,800万円削減", description: "チェーン店の一括見直し事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="自治体・公共施設の電力コストを診断する"
          description="現在の電力調達コストのリスクをシミュレーターで確認。統合調達の相談もお気軽にどうぞ。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
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
