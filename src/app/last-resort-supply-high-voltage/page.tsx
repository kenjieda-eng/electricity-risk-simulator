import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "高圧・特別高圧の法人が最終保障供給で確認したいポイント";
const pageDescription =
  "高圧・特別高圧で受電している法人・自治体が、最終保障供給の局面で確認したい料金、契約、見直しの考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 高圧",
    "最終保障供給 特別高圧",
    "高圧 最終保障供給 切り替え",
    "特別高圧 電気料金 見直し",
    "最終保障供給 法人 実務",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-high-voltage",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-high-voltage",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "高圧・特別高圧の法人が最終保障供給で確認したいポイント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function LastResortSupplyHighVoltagePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧・特別高圧の法人が最終保障供給で確認したいポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の実務は、高圧・特別高圧の受電区分を前提に整理する必要があります。低圧契約と異なり、
          契約電力や30分値、デマンド、使用パターンが切り替え判断に直結します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧・特別高圧で論点が変わる理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量規模が大きく、契約条件の差が金額に反映されやすいためです。単価だけでなく、契約電力、負荷特性、運用条件を含めた総合判断が必要になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金表・請求書で見たい項目</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力と基本料金の関係</li>
            <li>電力量料金と使用量の変動</li>
            <li>燃料費調整額など調整項目の寄与</li>
            <li>前月比・前年同月比での変化</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">切替時に整理したい使用実績</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積の前提として、月次使用量だけでなく30分値、最大デマンド、季節変動、稼働時間帯を整理すると比較精度が上がります。
            高圧・特別高圧ではこの準備が切り替えスピードを左右します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">工場・ビル・商業施設・自治体施設で見方が変わる点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>工場: 生産計画とピーク負荷の連動が大きい</li>
            <li>ビル: 空調負荷と稼働時間の管理が重要</li>
            <li>商業施設: 営業時間帯と季節要因の影響が大きい</li>
            <li>自治体施設: 供給継続性と調達手続きの整合が必要</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">既存の高圧・特高解説ページから確認する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本の読み方は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧電力の料金の見方
            </Link>
            、特別高圧の論点は{" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              特別高圧電力の料金の見方
            </Link>{" "}
            が参考になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply-target",
              title: "最終保障供給の対象は誰か",
              description: "高圧・特別高圧の対象判定の考え方を確認できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "切替時に必要な情報整理と進め方を確認できます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "請求項目の基礎を整理できます。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧電力の料金の見方",
              description: "特別高圧の契約特性と確認ポイントを整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="区分別の整理を比較実務へつなげる"
          description="受電区分と使用実績を整理したら、比較ページで切り替え候補を具体化できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーターを使う" },
          ]}
        />
      </section>
    </main>
  );
}
