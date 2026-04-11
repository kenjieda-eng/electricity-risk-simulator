import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "市場価格調整額の計算方法と契約約款の読み方｜法人向けに詳細解説";
const pageDescription =
  "市場価格調整額の代表的な計算方法（月平均連動型・JEPX実績連動型・α×β型など）と、契約約款で確認すべき条項、見積比較で注意すべきポイントを法人向けに詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/market-price-adjustment-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場価格調整額 計算",
    "市場連動 約款",
    "JEPX 計算式",
    "見積書 調整項目",
    "市場連動 比較",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function MarketPriceAdjustmentCalculationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場価格調整額の計算方法</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場価格調整額の計算方法</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場価格調整額の算定方法は、電力会社・契約メニューごとに大きく異なります。
          同じ「市場価格調整額」という名称でも、算定ルールが違えば請求額に数倍の差が出ます。
          このページでは代表的な 3 タイプの計算方法と、契約約款の読み方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">タイプ1：月平均連動型</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            当月の JEPX システムプライスの月平均値と、基準単価の差額を kWh あたりに上乗せする最もシンプルな方式です。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">市場調整単価 = (当月 JEPX システムプライス平均) − 基準単価</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            例：基準単価が 10 円/kWh、当月 JEPX 平均が 15 円/kWh の場合、市場調整単価は +5 円/kWh。
            月 10 万 kWh なら月 50 万円の追加請求となります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">タイプ2：30分単位実績連動型（真の市場連動）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX の 30 分単位のシステムプライスを、同じ時間帯の使用量と掛け合わせて計算する方式です。
            月平均ではなく「その時間帯に使った電気の市場価格」をそのまま反映します。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">
              市場調整額 = Σ（30分ごとのJEPX価格 × 30分ごとの使用量）− Σ（基準単価 × 30分ごとの使用量）
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            負荷カーブが JEPX 高値の時間帯（夏夕方・冬朝晩）に偏っている法人は、月平均連動型よりも不利になりやすい方式です。
            逆に、深夜や JEPX 安値時間に使用が集中する事業者には有利になる場合もあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">タイプ3：α×β型（ハイブリッド）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定単価部分 α に加えて、JEPX 価格 × 一定係数 β を足す方式。固定型と市場連動型の中間的な性格を持ちます。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-900">
            <p className="font-semibold">
              電力量料金 = α（固定部分）＋ β ×（JEPX月平均 − 基準単価）
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            β（連動係数）の値で市場リスクのシェア比率が決まります。β = 0.3 なら、JEPX 変動の 30% のみが料金に反映される設計です。
            「緩衝型市場連動」「固定＋市場調整ミックス」などの名称で提示されることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約約款で確認すべき 5 項目</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><strong>参照価格</strong>：JEPX システムプライスか、エリアプライスか、時間帯別か</li>
            <li><strong>参照期間</strong>：当月実績か、前月実績か、一定期間平均か</li>
            <li><strong>基準単価</strong>：何円/kWh で設定されているか</li>
            <li><strong>連動係数（β）</strong>：市場変動の何%が反映されるか</li>
            <li><strong>上限・下限の有無</strong>：異常値時に歯止めがあるか</li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較時の落とし穴</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力量料金の単価だけを見ると、固定型が有利に見えることが多い</li>
            <li>市場連動型は別立ての市場調整額を足すと、実質的な総額が大きく変わる</li>
            <li>見積書に「過去実績での試算」が書かれている場合、その期間（平常時か高騰時か）で印象が大きく変わる</li>
            <li>上振れシナリオ（JEPX 平均 +5 円や +10 円）での試算を必ず依頼する</li>
            <li>契約期間中に算定方法を変更する条項があるかどうかの確認</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/market-price-adjustment", title: "市場価格調整額とは", description: "制度の基本まとめ。" },
            { href: "/market-price-adjustment-history", title: "市場価格調整額の推移", description: "JEPX連動の実績を数値で把握。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "備え方と判断軸。" },
            { href: "/market-linked-plan", title: "市場連動プランとは", description: "契約タイプ全体の整理。" },
            { href: "/how-to-read-electricity-quote", title: "電気料金見積書の見方", description: "見積書の確認ポイント。" },
          ]}
        />

        <ContentCta
          heading="実際の契約を比較する"
          description="同条件で複数メニューを比較すると、算定方法の違いによる総額差を把握しやすくなります。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
