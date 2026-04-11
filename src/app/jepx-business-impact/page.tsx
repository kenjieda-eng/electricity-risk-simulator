import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import { JEPX_SYSTEM_PRICE_YEARLY } from "../../data/priceAdjustmentHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "JEPXが法人の電気料金に与える影響｜調達経路別の波及と備え方";
const pageDescription =
  "JEPXスポット価格が法人の電気料金にどう波及するかを、契約タイプ別（固定・市場連動・ハイブリッド）に整理。2021年1月・2022年度の実例から、経営への影響と備え方を解説します。";
const pageUrl = "https://simulator.eic-jp.org/jepx-business-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX 法人",
    "JEPX 電気料金 影響",
    "市場連動 法人",
    "調達 経路 法人電気",
    "電気料金 リスク 法人",
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

export default function JepxBusinessImpactPage() {
  const labels = JEPX_SYSTEM_PRICE_YEARLY.map((r) => `${r.year}年度`);
  const values = JEPX_SYSTEM_PRICE_YEARLY.map((r) => r.systemPriceYenPerKwh);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">JEPXが法人料金に与える影響</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPXが法人の電気料金に与える影響</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX 価格は、法人の電気料金に「直接的」「間接的」「遅延的」の 3 つの経路で影響します。
          どの経路で波及するかは契約メニュー次第です。このページでは、契約タイプ別の波及構造と、
          実際の過去事例から見える経営影響を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX価格の波及経路（3パターン）</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">① 直接反映（市場連動）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                市場連動プラン契約。JEPX 価格がそのまま請求単価に反映される。最大の上振れリスクを持つ。
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">② 間接反映（調達マージン）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                固定単価契約でも、電力会社の調達コストに影響。契約更新時に本体単価として転嫁される。
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">③ 遅延反映（長期ヘッジ）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                長期契約や相対契約をベースにしている事業者では、JEPX の短期変動はほぼ影響しない。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別 JEPX の推移（参考）</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "JEPXシステムプライス年度平均（円/kWh）",
                  values,
                  color: "#2563eb",
                  fillColor: "rgba(37,99,235,0.14)",
                },
              ]}
              yTitle="円/kWh"
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約タイプ別の影響試算（月 10 万 kWh）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2019 年度（平常時）と 2022 年度（ウクライナ危機）を比較し、契約タイプ別の年額影響を試算します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">契約タイプ</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2019年度年額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2022年度年額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">差額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2 font-semibold">完全市場連動</td><td className="border border-slate-200 px-3 py-2 text-right">約 950 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 2,440 万円</td><td className="border border-slate-200 px-3 py-2 text-right font-bold text-red-700">+1,490 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2 font-semibold">ハイブリッド（β=0.5）</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,100 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,850 万円</td><td className="border border-slate-200 px-3 py-2 text-right">+750 万円</td></tr>
                <tr className="border-t"><td className="border border-slate-200 px-3 py-2 font-semibold">固定単価（2年契約）</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,400 万円</td><td className="border border-slate-200 px-3 py-2 text-right">約 1,400 万円</td><td className="border border-slate-200 px-3 py-2 text-right">±0 円（契約期間中）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 電力量料金のみの試算。実際には託送料金・基本料金・再エネ賦課金等が別途加算されます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実際の影響事例</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例1：中規模工場（市場連動）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                連続操業の中規模製造業（月 30 万 kWh）。市場連動プラン継続で、2022 年度の電気代が前年比 +6,500 万円。
                取引先への価格転嫁が間に合わず、一時的に営業利益率が 2% 低下。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例2：飲食チェーン（新電力破綻）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                新電力の市場連動プラン契約。契約先の事業撤退で最終保障供給へ移行。
                最終保障供給の料金水準が高く、さらに +30% の負担増。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例3：自治体施設（固定契約）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                旧一般電気事業者の固定単価契約。2022 年度の JEPX 高騰の影響は限定的。
                契約更新時（2023 年度）に 20% 程度の値上げを受け入れ。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">事例4：データセンター（長期PPA）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                再エネ PPA ベースで 10 年固定調達。JEPX 高騰の影響はほぼゼロ。
                同業他社が苦しむ中で競争優位を確保。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人担当者が確認すべきポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の契約がどの波及経路にあるか（約款・契約書で確認）</li>
            <li>市場連動の場合、上限条項があるか</li>
            <li>固定単価契約でも、次回更新時に本体単価が上がるリスクを想定</li>
            <li>長期契約は安定の代わりに、市場下落時の割高感を受け入れる覚悟が必要</li>
            <li>単一電力会社への依存を避け、複数メニュー・複数拠点分散を検討</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/jepx-explained", title: "JEPXとは", description: "卸電力市場の基本解説。" },
            { href: "/jepx-spot-market-history", title: "JEPXスポット市場の価格推移", description: "過去の実績数値。" },
            { href: "/jepx-price-volatility", title: "JEPX価格変動の要因", description: "価格が動く原因を整理。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "契約視点のリスク整理。" },
            { href: "/bilateral-power-contracts", title: "相対契約とは", description: "市場に依存しない調達。" },
            { href: "/long-term-power-procurement", title: "長期契約とは", description: "安定調達の選択肢。" },
          ]}
        />

        <ContentCta
          heading="自社の波及リスクを可視化"
          description="現在の契約タイプでJEPX上振れシナリオの影響を試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーションを始める" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="jepx-business-impact" />
      </div>
    </main>
  );
}
