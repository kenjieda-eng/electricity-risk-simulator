import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd, ReviewJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["case-studies"];


const pageTitle = "物流倉庫：自家消費太陽光併設で年間9%削減した事例｜食品物流センター";
const pageDescription =
  "食品物流センターが屋根上への自家消費型太陽光発電を設置し、電力会社からの購入量を削減。年間電気代の9%・約380万円削減を達成した事例。導入コスト・発電量・回収期間を詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-logistics-solar-integration";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["物流倉庫 太陽光発電", "自家消費 太陽光", "食品物流 電気代削減", "倉庫 電力コスト削減", "太陽光 投資回収", "自家消費型 太陽光"],
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

const monthlyGeneration = [
  { month: "1月", gen: 28, purchase: 285, saving: 56 },
  { month: "2月", gen: 35, purchase: 260, saving: 70 },
  { month: "3月", gen: 48, purchase: 238, saving: 96 },
  { month: "4月", gen: 58, purchase: 220, saving: 116 },
  { month: "5月", gen: 62, purchase: 215, saving: 124 },
  { month: "6月", gen: 52, purchase: 228, saving: 104 },
  { month: "7月", gen: 58, purchase: 272, saving: 116 },
  { month: "8月", gen: 60, purchase: 290, saving: 120 },
  { month: "9月", gen: 50, purchase: 258, saving: 100 },
  { month: "10月", gen: 44, purchase: 242, saving: 88 },
  { month: "11月", gen: 32, purchase: 268, saving: 64 },
  { month: "12月", gen: 25, purchase: 290, saving: 50 },
];

const yearlyTotal = monthlyGeneration.reduce((acc, m) => ({
  gen: acc.gen + m.gen,
  saving: acc.saving + m.saving,
}), { gen: 0, saving: 0 });

export default function CaseStudyLogisticsSolarPage() {
  return (
    <>
      <ArticleJsonLd
        headline="物流倉庫：自家消費太陽光併設で年間9%削減した事例｜食品物流センター"
        description="食品物流センターが屋根上への自家消費型太陽光発電を設置し、電力会社からの購入量を削減。年間電気代の9%・約380万円削減を達成した事例。導入コスト・発電量・回収期間を詳しく解説します。"
        url="https://simulator.eic-jp.org/case-study-logistics-solar-integration"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "物流倉庫：自家消費太陽光併設で年間9%削減した事例" },
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
        <span className="text-slate-800">物流倉庫：太陽光併設9%削減事例</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          物流倉庫：自家消費太陽光併設で年間9%削減した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">食品物流センター ／ 高圧受電（延床面積12,000m²）</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          延床面積12,000m²の食品物流センターが、広大な屋根面積を活用して自家消費型太陽光発電（500kW）を導入。
          年間発電量は約552,000kWhで、電力会社からの購入電力量を約11%削減し、
          年間電気代を<strong>約380万円（9%）削減</strong>しました。
          初期投資額・発電量の月別実績・投資回収シミュレーションを詳しく公開します。
        </p>
      </header>

      <TableOfContents />

      {/* 施設プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["施設種別", "食品物流センター（常温・定温・冷蔵エリア混在）"],
                ["延床面積", "約12,000m²（平屋倉庫）"],
                ["立地", "関東郊外（インターチェンジ近接）"],
                ["受電区分", "高圧（6,600V）"],
                ["年間使用電力量", "約4,950,000kWh"],
                ["見直し前の年間電気代", "約4,200万円"],
                ["太陽光発電容量", "500kW（屋根上設置）"],
                ["設置パネル枚数", "約1,450枚（単結晶シリコン）"],
                ["年間想定発電量", "約552,000kWh（自家消費率99%）"],
                ["導入コスト", "約7,500万円（補助金活用後：約6,200万円）"],
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
            "冷蔵倉庫の冷却設備・フォークリフトの充電・荷役設備の稼働が重なる昼間帯に電力使用量がピークになり、電気代の大部分を占めていた。",
            "燃料費調整額の高騰で2022〜2023年に年間電気代が約1,000万円増加。荷主企業への価格転嫁が困難で収益を直撃。",
            "平屋倉庫のため広大な屋根面積があったが、太陽光発電の活用は「FIT売電より自家消費の方が有利」な状況になってからも検討が進んでいなかった。",
            "荷主企業からESG・カーボンニュートラルへの取り組みを求める声が増加しており、再生可能エネルギー活用の取り組みが必要と感じていた。",
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
              title: "屋根面積・構造調査と日射量シミュレーション",
              detail: "屋根の耐荷重・方位・傾斜角を調査。南向き傾斜屋根を優先設置エリアとし、建物ごとに影の影響を考慮した発電量シミュレーションを実施。年間発電量を550,000kWh（P50値）と試算。",
            },
            {
              step: "STEP 2",
              title: "補助金・税制優遇の活用",
              detail: "省エネ設備投資に関する補助金を活用し、初期費用を7,500万円から6,200万円に圧縮。加速償却制度により1年目の税負担も軽減。リース方式も検討したが自社所有の方が長期的コストが低い試算となったため自社設置を選択。",
            },
            {
              step: "STEP 3",
              title: "自家消費型での運用（余剰電力は最小化）",
              detail: "FIT売電ではなく全量自家消費を基本とし、昼間の冷蔵設備・フォークリフト充電・荷役設備の電力を太陽光で賄う運用設計。昼間稼働を優先配置することで自家消費率を99%に維持。",
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

      {/* 月別発電・削減テーブル */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">月別発電量・電気代削減実績</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">月</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">発電量（MWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">電力購入量（MWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">電気代削減（万円）</th>
              </tr>
            </thead>
            <tbody>
              {monthlyGeneration.map((row, i) => (
                <tr key={i}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.month}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.gen}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.purchase}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-green-700">{row.saving}</td>
                </tr>
              ))}
              <tr className="bg-sky-100 font-bold">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間合計</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{yearlyTotal.gen}MWh</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">—</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約{yearlyTotal.saving}万円</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CSS バー：月別発電量 */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">月別発電量の推移（MWh）</h3>
          <div className="space-y-2">
            {monthlyGeneration.map((bar) => (
              <div key={bar.month}>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-600 w-6">{bar.month.replace("月", "")}</span>
                  <div className="h-3 rounded bg-yellow-400" style={{ width: `${(bar.gen / 62) * 100}%` }} />
                  <span className="text-xs text-slate-600">{bar.gen}MWh</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 投資回収シミュレーション */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">投資回収シミュレーション</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">金額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["初期投資（補助金活用後）", "約6,200万円"],
                  ["年間電気代削減額", "約380万円"],
                  ["太陽光メンテナンスコスト（年）", "約30万円"],
                  ["年間純削減効果", "約350万円"],
                  ["投資回収期間（試算）", "約17.7年"],
                  ["パネル寿命（想定）", "25〜30年"],
                  ["耐用年数内の累計削減（25年）", "約8,750万円"],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{label}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700 font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 太陽光導入のコスト構造テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">太陽光導入のコスト構造</h2>
        <p className="mt-2 text-sm text-slate-600">本事例における導入コスト・発電量・削減額・回収期間の全体像</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">金額</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">導入費用（補助金適用前）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約7,500万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">500kWシステム・設置工事・諸経費含む</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">年間発電量</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約552,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">P50値。自家消費率99%で運用。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">自家消費率</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">99%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">余剰電力の売電はほぼなし。昼間需要が大きいため。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">年間削減額</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-medium">約380万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力購入量11%削減。メンテ費控除前。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">投資回収期間</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約17.7年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">補助金活用後の実質投資額6,200万円÷年間純削減350万円</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因</h2>
        <ul className="mt-4 space-y-3">
          {[
            "平屋倉庫の広大な屋根面積：大規模な500kWシステムが設置でき、スケールメリットで単位コストを抑制",
            "自家消費型を選択：FIT価格低下後の現在、売電より自家消費の方が経済メリットが大きい",
            "補助金の積極活用：設備投資補助金と加速償却制度を組み合わせ、実質投資額を大幅圧縮",
            "昼間需要が大きい施設特性：荷役・冷蔵・充電の需要が昼間に集中し、太陽光発電と相性が良かった",
            "ESGへの副次効果：CO₂削減実績を荷主企業へのアピールに活用でき、取引継続にも貢献",
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
          「投資回収に17〜18年かかる点は慎重に議論しましたが、パネルの寿命が25〜30年であることを踏まえると十分採算が取れると判断しました。
          荷主企業がESG対応を重視する傾向も強まっており、電気代削減だけでなく環境対応としての意義も大きいと感じています。
          電力高騰リスクに対するヘッジ効果も実感しています。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 経営企画部 サステナビリティ担当</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">自家消費太陽光の導入を検討している方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          自家消費型太陽光は、FIT売電の経済性が低下した現在でも「電気代の固定化・削減」と「ESG対応」を同時に実現できる手段です。
          ただし初期投資が大きいため、正確な発電量シミュレーションと補助金調査が不可欠です。
          詳細は<Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">お問い合わせ</Link>からご相談ください。
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
            { href: "/business-electricity-bill-breakdown", title: "法人向け電気料金の内訳とは", description: "電力料金の基本構造を理解する" },
            { href: "/when-to-review-electricity-contract", title: "見直しのタイミングはいつか", description: "電力契約見直しの最適タイミングと手順" },
            { href: "/case-study-manufacturing-cost-reduction", title: "製造業：年間18%削減した事例", description: "デマンド制御と契約見直しの組み合わせ事例" },
            { href: "/case-study-hospital-peak-cut", title: "病院：デマンド制御で基本料金22%圧縮", description: "医療施設でのデマンド制御事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="倉庫・物流施設の電気代を診断する"
          description="シミュレーターで現在の電気代リスクを確認。自家消費太陽光の導入相談もお気軽にどうぞ。"
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
        itemReviewed={{ name: "物流倉庫向け自家消費型太陽光導入による購入電力削減手順", type: "Service" }}
        reviewBody="食品物流センターが屋根上自家消費型太陽光を導入し、購入電力を削減して年間電気代の9%（約380万円）削減を達成した事例。導入コスト・発電量・回収期間まで開示し、物流倉庫での自家消費太陽光の費用対効果を判断する材料になる。"
        ratingValue={4.5}
        datePublished="2026-04-17"
      />
    </main>
    </>
  );
}
