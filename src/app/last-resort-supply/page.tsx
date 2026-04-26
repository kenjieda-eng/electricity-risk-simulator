import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { LAST_RESORT_SUPPLY_MONTHLY } from "../../data/lastResortSupplyHistory";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle = "最終保障供給とは｜仕組み・料金・契約件数推移・切替実務を徹底解説";
const pageDescription =
  "最終保障供給の仕組み、料金水準、契約件数の推移（2021〜2025年）、2022年の急増と新電力撤退の背景、切替実務までを法人・自治体向けに解説します。グラフと公表データで詳しく整理。";
const pageUrl = "https://simulator.eic-jp.org/last-resort-supply";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給",
    "最終保障供給 とは",
    "最終保障供給 契約件数",
    "最終保障供給 推移",
    "最終保障供給 料金",
    "新電力 撤退",
    "最終保障供給 高圧",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/last-resort-supply", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/last-resort-supply"],
  },
};

const faqItems = [
  {
    question: "最終保障供給とはどういう制度ですか？",
    answer: "どの小売電気事業者とも契約合意に至らない高圧・特別高圧の法人・自治体に対して、一般送配電事業者が電気事業法第17条に基づき臨時供給する制度です。事業継続のためのセーフティネットであり、料金は通常の小売契約より2〜3割高く設定されています。",
  },
  {
    question: "2022年に最終保障供給が急増した理由は何ですか？",
    answer: "ウクライナ危機によるLNGスポット価格の急騰で新電力が相次いで撤退・新規受付停止し、旧一般電気事業者も受付を絞ったため行き場を失った需要家が急増しました。2022年12月に過去最高の約52,000件に達しました。",
  },
  {
    question: "最終保障供給に入った場合、どう対応すれば良いですか？",
    answer: "早期に通常の小売契約へ切り替えることが優先です。複数の電力会社に見積もりを依頼し、料金比較とシミュレーターで条件を確認した上で契約を進めてください。長期間にわたる最終保障供給は追加コストが蓄積するため、早期解消が重要です。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の件数推移・公表データ" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・最終保障供給の制度解説" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "新電力の撤退状況・市場動向" },
];

export default function LastResortSupplyPage() {
  const labels = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.yearMonth);
  const values = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.contractCount);

  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2025-08-01"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "最終保障供給とは" },
        ]}
        faq={faqItems}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="mb-4 text-sm text-slate-600">
        <Link href="/" className="underline underline-offset-2 hover:text-slate-900">トップ</Link>
        <span className="mx-2">/</span>
        <Link href="/articles/last-resort-supply" className="underline underline-offset-2 hover:text-slate-900">最終保障供給を知る</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">最終保障供給とは</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、<Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧電力</Link>または<Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧</Link>で電気を使う法人・企業・自治体などが、
          どの小売電気事業者とも契約合意に至らない場合に、一般送配電事業者から臨時的に供給を受ける仕組みです。
          電気事業法第 17 条に基づく供給義務に支えられており、電気が止まらないためのセーフティネットです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          2022 年のウクライナ危機と新電力撤退の連鎖で利用件数が一時 52,000 件まで急増し、
          それまで一般にほとんど知られていなかった制度が広く注目されるようになりました。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約件数の推移（2021〜2025年）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021 年までは月末時点で全国 100 件以下の小規模な制度でしたが、2022 年春から新電力の撤退・新規受付停止を受けて急増。
            2022 年 12 月に過去最高の約 52,000 件に達しました。その後、市場の落ち着きと旧一般電気事業者の受付再開により、
            2025 年時点では 5,000 件台で落ち着いています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "最終保障供給の契約件数（月末時点、全国合計）",
                  values,
                  color: "#b91c1c",
                  fillColor: "rgba(185,28,28,0.14)",
                },
              ]}
              unit="件"
              yTitle="契約件数"
            />
          </div>
          <p className="mt-3 text-xs text-slate-500">
            出典: 電力・ガス取引監視等委員会公表資料等に基づく概算。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の基本</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給は、通常の小売契約が成立しない局面で電気供給を継続するための制度です。料金の安さを競う契約ではなく、
            事業継続や公共サービス継続の観点で電気を途切れさせないことが主眼です。
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>供給主体：各エリアの一般送配電事業者（送電会社）</li>
            <li>対象：高圧・特別高圧需要家（低圧は「最終保障供給」ではなく別制度）</li>
            <li>料金水準：通常の小売契約より 2〜3 割高い設定（激変緩和措置あり）</li>
            <li>継続期間：原則として次の供給者が見つかるまでの暫定</li>
            <li>申請：小売から供給拒否通知を受けた後に送配電事業者に申込み</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ2022年に急増したのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年 2 月のウクライナ危機以降、LNG スポット価格が急騰し、<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link> 年度平均は 20 円/kWh 超に達しました。
            これにより、JEPX 依存度が高い新電力の多くが赤字に転落し、次のような連鎖反応が発生しました。
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>新電力が新規受付停止 → 契約満了需要家が行き場を失う</li>
            <li>旧一般電気事業者も新規受付停止 → 切替先がない状態</li>
            <li>やむなく最終保障供給へ移行 → 件数急増</li>
            <li>2022 年 12 月に 52,000 件のピーク</li>
            <li>2023 年から段階的に市場正常化 → 順次減少</li>
          </ol>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>ポイント：</strong>最終保障供給の料金水準は通常より 2〜3 割高いため、
              法人の請求額は急増。自治体でも補正予算で数千万〜数億円規模の追加計上が相次ぎました。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給シリーズの関連ページ</h2>
          
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-3 grid gap-2 md:grid-cols-2">
            <Link href="/last-resort-supply-history" className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm transition hover:bg-sky-100">
              <span className="font-semibold text-slate-900">最終保障供給の件数推移と2022年急増の詳細</span>
            </Link>
            <Link href="/last-resort-supply-target" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給の対象は誰か</span>
            </Link>
            <Link href="/last-resort-supply-price" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給の料金はなぜ高いのか</span>
            </Link>
            <Link href="/last-resort-supply-switch" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給から切り替えるには</span>
            </Link>
            <Link href="/municipality-last-resort-supply" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">自治体向け最終保障供給の注意点</span>
            </Link>
            <Link href="/last-resort-supply-high-voltage" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">高圧需要家の最終保障供給</span>
            </Link>
            <Link href="/last-resort-supply-extra-high-voltage" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">特別高圧での最終保障供給の注意点</span>
            </Link>
            <Link href="/last-resort-supply-terms" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給の契約条件</span>
            </Link>
            <Link href="/last-resort-vs-retail-contract" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給と通常契約の違い</span>
            </Link>
            <Link href="/last-resort-supply-emergency-response" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">最終保障供給に入りそうなときの対応</span>
            </Link>
            <Link href="/last-resort-supply-internal-explanation" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm transition hover:bg-sky-50">
              <span className="font-semibold text-slate-900">社内説明のポイント</span>
            </Link>
            <Link href="/articles/last-resort-supply" className="rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-sm transition hover:bg-sky-100">
              <span className="font-semibold text-sky-900">最終保障供給カテゴリ一覧へ</span>
            </Link>
          </div>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2025-08-01" />

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/last-resort-vs-retail-contract", title: "最終保障供給と通常契約の違い", description: "役割・料金・期間の差を比較。" },
            { href: "/fuel-cost-adjustment-upper-limit", title: "燃料費調整額の上限制度", description: "2022年の新電力撤退の背景。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "JEPX急騰の請求影響。" },
            { href: "/when-to-review-electricity-contract", title: "法人が電力契約を見直すタイミング", description: "橋渡しから本契約への整理。" },
            { href: "/concierge", title: "AI コンシェルジュで関連情報を探す", description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。" },
            { href: "/articles/basic", title: "法人電気料金の基礎知識", description: "電気料金の構成・契約の種類・値上がり要因など、基礎から体系的に学べます（人気ハブページ）。" },
          ]}
        />

        <AuthorBadge publishedAt="2026-03-01" updatedAt="2026-03-01" />

        <ContentCta
          heading="通常契約への見直しを進める"
          description="最終保障供給の基本を整理したら、比較ページとシミュレーターで次契約の方向性を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーターを使う" },
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
