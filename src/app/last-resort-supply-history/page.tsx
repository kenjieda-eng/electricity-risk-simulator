import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import PriceAdjustmentLineChart from "../../components/articles/PriceAdjustmentLineChart";
import {
  LAST_RESORT_SUPPLY_MONTHLY,
  NEW_POWER_EXIT_YEARLY,
} from "../../data/lastResortSupplyHistory";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "最終保障供給の件数推移と2022年急増の詳細｜新電力撤退と受付再開の流れ";
const pageDescription =
  "最終保障供給の契約件数を2021年から2025年まで月次で追跡。2022年ウクライナ危機起点の急増、ピーク時の52,000件到達、旧一般電気事業者の受付再開、新電力の整理までを時系列で詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/last-resort-supply-history";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 件数",
    "最終保障供給 推移",
    "最終保障供給 2022",
    "新電力 撤退 件数",
    "電力会社 受付停止",
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

export default function LastResortSupplyHistoryPage() {
  const labels = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.yearMonth);
  const values = LAST_RESORT_SUPPLY_MONTHLY.map((r) => r.contractCount);
  const exitLabels = NEW_POWER_EXIT_YEARLY.map((r) => `${r.year}年`);
  const exitValues = NEW_POWER_EXIT_YEARLY.map((r) => r.exitCount);

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">件数推移と2022年急増の詳細</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の件数推移と2022年急増の詳細</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の契約件数は、2022 年春から 2023 年前半にかけて歴史的な急増を記録しました。
          このページでは、月次推移と新電力の撤退件数を重ね合わせ、何が起きたのかを時系列で詳しく整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約件数の月次推移</h2>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={labels}
              series={[
                {
                  label: "最終保障供給契約件数（件）",
                  values,
                  color: "#b91c1c",
                  fillColor: "rgba(185,28,28,0.12)",
                },
              ]}
              unit="件"
              yTitle="件数"
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年度別の詳細と背景</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">時点</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">契約件数</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な動向</th>
                </tr>
              </thead>
              <tbody>
                {LAST_RESORT_SUPPLY_MONTHLY.map((r) => (
                  <tr key={r.yearMonth} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2">{r.yearMonth}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{r.contractCount.toLocaleString("ja-JP")} 件</td>
                    <td className="border border-slate-200 px-3 py-2 text-xs">{r.comment ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">新電力の撤退件数（年次）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の急増と並行して、新電力の経営破綻・事業撤退・他社譲渡が相次ぎました。
            2022 年は単年で約 114 社が撤退し、それ以前の平均（年数件）と比べて突出した数字となっています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <PriceAdjustmentLineChart
              labels={exitLabels}
              series={[
                {
                  label: "新電力の撤退・事業停止件数（社）",
                  values: exitValues,
                  color: "#dc2626",
                  fillColor: "rgba(220,38,38,0.14)",
                },
              ]}
              unit="社"
              yTitle="社数"
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年の連鎖反応：何が起きていたのか</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>2022年2月〜</strong>：ウクライナ危機発生。LNG スポット価格が歴史的水準まで急騰。
              JEPX 年度平均は 20 円/kWh 超に。
            </li>
            <li>
              <strong>2022年3〜4月</strong>：新電力各社が新規受付停止を発表。契約満了を迎える法人需要家が次の契約先を見つけられない状況に。
            </li>
            <li>
              <strong>2022年5〜6月</strong>：旧一般電気事業者も新規受付を停止・制限。法人需要家の行き場がなくなる。
            </li>
            <li>
              <strong>2022年7〜12月</strong>：最終保障供給への移行が急増。12月には 52,000 件の過去最高に。
            </li>
            <li>
              <strong>2023年前半</strong>：政府の激変緩和措置開始、LNG 価格の落ち着きで市場が正常化。
              旧一般電気事業者が順次新規受付を再開。
            </li>
            <li>
              <strong>2023年後半〜2024年</strong>：切替が進み、最終保障供給からの順次離脱。2024年末には 6,000 件台まで減少。
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">今後のリスク：再来する可能性</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022 年のような急増は特殊事象のように見えますが、次の条件が揃えば再発する可能性があります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>LNG スポット価格の再急騰（中東情勢、供給ショック等）</li>
            <li>原子力発電所の長期停止による火力依存度上昇</li>
            <li>夏季猛暑・冬季寒波での需給逼迫</li>
            <li>新電力の財務体質が依然として脆弱な構造</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人としては、契約更新時の上振れリスクを常に意識し、
            <Link href="/last-resort-supply-emergency-response" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              最終保障供給に入りそうなときの対応手順
            </Link>
            を社内で共有しておくことが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/last-resort-supply", title: "最終保障供給とは", description: "制度の基本解説。" },
            { href: "/last-resort-supply-price", title: "最終保障供給の料金", description: "通常契約より高い理由。" },
            { href: "/last-resort-supply-switch", title: "最終保障供給から切り替えるには", description: "切替実務の手順。" },
            { href: "/last-resort-supply-emergency-response", title: "最終保障供給に入りそうなときの対応", description: "早期発見と準備。" },
            { href: "/fuel-cost-adjustment-upper-limit", title: "燃料費調整額の上限制度", description: "2022年撤退の背景。" },
            { href: "/market-price-adjustment-risk", title: "市場価格調整額の上振れリスク", description: "JEPX高騰リスクの経営影響。" },
          ]}
        />

        <ContentCta
          heading="自社の回避策を検討する"
          description="契約見直しで最終保障供給に入らない備えをしましょう。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="last-resort-supply-history" />
      </div>
    </main>
  );
}
