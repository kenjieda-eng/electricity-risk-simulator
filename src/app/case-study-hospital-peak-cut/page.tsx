import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd, ReviewJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["case-studies"];


const pageTitle = "病院：デマンド制御で基本料金を22%圧縮した事例｜中規模総合病院";
const pageDescription =
  "中規模総合病院がデマンド制御システムを導入し、基本料金を年間22%（約840万円）削減した事例。医療施設特有の制約下での施策設計・段階的な実施・Before/After 数値を詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-hospital-peak-cut";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["病院 電気代削減", "医療施設 デマンド制御", "病院 基本料金 削減", "デマンドピークカット 医療", "病院 電力コスト", "総合病院 電気代"],
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

const beforeAfter = [
  { item: "契約電力", before: "1,800kW", after: "1,400kW", diff: "▲400kW（▲22%）" },
  { item: "基本料金（月額）", before: "3,816,000円", after: "2,968,000円", diff: "▲848,000円" },
  { item: "電力量料金（月額）", before: "4,280,000円", after: "4,190,000円", diff: "▲90,000円" },
  { item: "燃料費調整額（月額）", before: "1,340,000円", after: "1,310,000円", diff: "▲30,000円" },
  { item: "合計（月額）", before: "9,436,000円", after: "8,468,000円", diff: "▲968,000円" },
  { item: "合計（年額）", before: "約1億1,300万円", after: "約1億160万円", diff: "▲約1,140万円" },
];

const controlTargets = [
  { equipment: "空調設備（中央管理型）", action: "デマンドアラート時に出力を80%に制限（10分間）", effect: "約80kW削減" },
  { equipment: "給湯ヒーター群", action: "ピーク時間帯に沸き増しを一時停止（蓄熱量で補完）", effect: "約60kW削減" },
  { equipment: "冷水・温水ポンプ", action: "インバーター制御で出力を段階的に絞る", effect: "約40kW削減" },
  { equipment: "非医療系照明（廊下・駐車場）", action: "デマンドアラート時に50%調光", effect: "約30kW削減" },
  { equipment: "電気温水器（厨房補助）", action: "ピーク帯での使用を制限し夜間に移動", effect: "約20kW削減" },
];

export default function CaseStudyHospitalPeakCutPage() {
  return (
    <>
      <ArticleJsonLd
        headline="病院：デマンド制御で基本料金を22%圧縮した事例｜中規模総合病院"
        description="中規模総合病院がデマンド制御システムを導入し、基本料金を年間22%（約840万円）削減した事例。医療施設特有の制約下での施策設計・段階的な実施・Before/After 数値を詳しく解説します。"
        url="https://simulator.eic-jp.org/case-study-hospital-peak-cut"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "病院：デマンド制御で基本料金を22%圧縮した事例" },
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
        <span className="text-slate-800">病院：デマンド制御22%圧縮事例</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          病院：デマンド制御で基本料金を22%圧縮した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">中規模総合病院 ／ 特別高圧受電（病床数280床）</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          病床数280床の中規模総合病院が、医療機器への影響を最小化しながらデマンド制御システムを導入。
          非医療設備を対象に精緻なピークカット制御を実施することで、契約電力を1,800kWから1,400kWへ引き下げ、
          基本料金を<strong>年間22%・約1,000万円削減</strong>しました。
          医療施設特有の「止められない設備」がある中での施策設計を詳しく解説します。
        </p>
      </header>

      {/* 施設プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["施設種別", "総合病院（内科・外科・循環器・整形外科等）"],
                ["病床数", "280床"],
                ["立地", "関東圏（郊外型）"],
                ["受電区分", "特別高圧（22kV）"],
                ["契約電力（見直し前）", "1,800kW"],
                ["契約電力（見直し後）", "1,400kW"],
                ["年間使用電力量", "約8,200,000kWh"],
                ["見直し前の年間電気代", "約1億1,300万円"],
                ["稼働状況", "24時間・365日（ICU・ER常時稼働）"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-48">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
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
            "電気代が年間1億円を超え、経営上の最重要固定費の一つになっていた。燃料費調整額の高騰でさらに増加傾向。",
            "医療機器・生命維持装置は絶対に停電・電圧降下させられないため、デマンド制御の対象設備の選定が困難と思われていた。",
            "夏季の外来患者増加・空調フル稼働・医療機器の増設が重なる時間帯に最大デマンドが発生。年に数回のピークで契約電力が決まっていた。",
            "設備担当者が少なく、デマンド監視を手動で行う人員的余裕がなかった。",
            "過去にデマンド制御の提案を受けたことはあったが「医療機器への影響が心配」として見送ってきた。",
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
        <h2 className="text-xl font-semibold text-slate-900">実施した施策</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              step: "STEP 1",
              title: "設備分類：「制御可能」と「制御不可」の厳格な仕分け",
              detail: "まず全電気設備を「医療系（手術室・ICU・医療機器・生命維持）」と「非医療系（空調・照明・給湯・厨房・駐車場）」に分類。医療系設備は制御対象から完全除外し、非医療系のみを対象とした。制御対象設備の電力容量合計は約350kW。",
            },
            {
              step: "STEP 2",
              title: "デマンド監視システムの導入（自動制御）",
              detail: "30分単位のデマンド値をリアルタイムで監視し、予測デマンドが設定値（1,350kW）の90%に達した段階でアラートを発し、自動的に非医療系設備の出力を段階的に制限するシステムを導入。医療系設備とは独立した制御回路で実装。",
            },
            {
              step: "STEP 3",
              title: "3ヶ月の試験運用・最大デマンドの実測",
              detail: "夏季3ヶ月間を試験期間として実際に制御を稼働させ、医療業務への影響がないことを確認した上で、本格運用へ移行。試験期間中の最大デマンドが1,380kWに収まったことを確認後、契約電力を1,400kWに変更申請。",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-sky-700">{m.step}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* 制御対象設備テーブル */}
        <h3 className="mt-5 text-base font-semibold text-slate-900">デマンド制御の対象設備と効果</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">設備</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">制御内容</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">削減効果</th>
              </tr>
            </thead>
            <tbody>
              {controlTargets.map((row) => (
                <tr key={row.equipment}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.equipment}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.action}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-medium">{row.effect}</td>
                </tr>
              ))}
              <tr className="bg-slate-100 font-bold">
                <td className="border border-slate-200 px-3 py-2 text-slate-700" colSpan={2}>合計</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約230kW削減</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 削減結果 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">削減結果（Before / After）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し後</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">差額</th>
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
          <h3 className="text-base font-semibold text-slate-900 mb-3">基本料金削減の内訳（月額）</h3>
          <div className="space-y-3">
            {[
              { label: "見直し前の基本料金", amount: 382, color: "bg-red-300", max: 400 },
              { label: "見直し後の基本料金", amount: 297, color: "bg-sky-500", max: 400 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.amount}万円/月</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-200">
                  <div className={`h-4 rounded ${bar.color}`} style={{ width: `${(bar.amount / bar.max) * 100}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs text-green-700 font-semibold mt-2">▲22%（約85万円/月）削減</p>
          </div>
        </div>
      </section>

      {/* デマンド制御の月別効果テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">デマンド制御の月別効果</h2>
        <p className="mt-2 text-sm text-slate-600">代表的な4か月の制御前後のデマンド値と基本料金削減額の比較</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">月</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">制御前デマンド</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">制御後デマンド</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">基本料金削減額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">8月（夏季ピーク）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,780kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,370kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約870,000円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1月（冬季）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,640kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,360kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約594,000円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">4月（中間期）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,510kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,350kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約340,000円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10月（秋季）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,480kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1,340kW</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約297,000円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">※基本料金削減額は契約電力変更後（1,400kW）の基本料金単価×削減kW数で試算。実際の削減額は変更後の月から確定します。</p>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因</h2>
        <ul className="mt-4 space-y-3">
          {[
            "医療系・非医療系設備の厳格な分類：制御対象を明確にしたことで医療業務への影響ゼロを担保",
            "3ヶ月の試験期間：本番投入前に実際の制御効果と安全性を確認し、院内の信頼を獲得",
            "自動制御システム：人手に頼らず30分単位でリアルタイム制御し、担当者の工数を最小化",
            "年に数回のピークに注目：デマンドは「最大1回」の値で12ヶ月の基本料金が決まる仕組みを活用",
            "契約電力の段階的引き下げ：いきなり大きく下げるのではなく実績を確認しながら段階的に変更",
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
          「医療施設でデマンド制御は難しいと思っていましたが、制御対象を非医療系設備に絞れば十分効果があることがわかりました。
          試験期間中に一度も医療側からクレームはありませんでした。
          年間1,000万円以上の削減は想定を超える結果で、今後は使用量そのものの削減にも取り組む予定です。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 施設管理部 電気主任技術者</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">医療施設の電気代削減でお悩みの方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「医療機器があるからデマンド制御は無理」と思っている施設でも、設備を適切に分類することで十分な効果が得られます。
          <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドの仕組み</Link>を理解した上で、
          まず過去1〜2年の最大デマンド値を確認することを推奨します。
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
            { href: "/contract-demand-what-is-it", title: "デマンドとは", description: "基本料金を決めるデマンドの仕組みと削減方法" },
            { href: "/business-electricity-bill-breakdown", title: "法人向け電気料金の内訳とは", description: "基本料金・電力量料金・燃調費・再エネ賦課金の仕組み" },
            { href: "/case-study-manufacturing-cost-reduction", title: "製造業：年間18%削減した事例", description: "デマンド制御と新電力切り替えを組み合わせた工場事例" },
            { href: "/case-study-office-building-review", title: "オフィスビル：契約電力の適正化で年間580万円削減", description: "オフィスビルの契約見直し事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="施設のデマンドリスクを診断する"
          description="現在の契約電力と実際の使用状況を入力して、基本料金の削減余地を確認しましょう。"
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

      <ReviewJsonLd
        itemReviewed={{ name: "病院でのデマンド制御による基本料金圧縮の実務手順", type: "Service" }}
        reviewBody="中規模総合病院がデマンド制御システムを導入し基本料金を年間22%（約840万円）削減した事例。医療施設特有の停止不可設備への配慮を踏まえた段階的施策と Before/After 数値で、医療系のデマンド管理に再現可能な手順として参考になる。"
        ratingValue={4.7}
        datePublished="2026-04-17"
      />
    </main>
    </>
  );
}
