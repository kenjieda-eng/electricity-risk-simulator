import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給の対象とは｜該当する5つのケースと回避策";
const pageDescription =
  "最終保障供給の対象になる法人・自治体、高圧と特別高圧の違い、低圧との違い、自社が対象か確認するときの考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 対象",
    "最終保障供給 高圧",
    "最終保障供給 特別高圧",
    "最終保障供給 法人 自治体",
    "最終保障供給 低圧 違い",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-target",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-target",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "最終保障供給の対象は誰か",
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

export default function LastResortSupplyTargetPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給の対象</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">最終保障供給の対象は誰か</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、誰でも使う制度ではありません。法人・企業・自治体のうち、高圧または特別高圧で受電している需要家が前提になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の対象になる需要家</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            典型的には、高圧・特別高圧の契約区分で電気を使用する需要家が対象です。工場、オフィスビル、商業施設、病院、学校、自治体施設などが該当し得ます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧と特別高圧の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧と特別高圧は、受電電圧や契約規模、設備要件の観点で区分されます。どちらも法人向け電力契約の中核ですが、
            実務では請求額への影響の出方や見積比較時の確認項目が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            区分ごとの料金の見方は{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧電力の料金の見方
            </Link>{" "}
            と{" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              特別高圧電力の料金の見方
            </Link>{" "}
            を参照してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">低圧とは何が違うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧契約は一般家庭や小規模店舗で使われる契約区分で、最終保障供給の対象条件とは前提が異なります。自社契約が低圧か高圧以上かで、
            制度の関係性が大きく変わるため、まず契約区分の確認が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・工場・ビル・自治体での典型例</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>工場: 負荷が大きく、<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>とデマンド管理が重要</li>
            <li>オフィスビル・商業施設: 稼働時間帯と空調負荷の影響が大きい</li>
            <li>病院・学校: 安定供給と契約継続性の優先度が高い</li>
            <li>自治体施設: 入札・予算・契約事務との連動が必要</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自社が対象か確認する方法</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            次の資料をそろえると、対象判定を進めやすくなります。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電気料金請求書（契約区分・契約電力の記載）</li>
            <li>受電設備の情報</li>
            <li>現行契約書・見積書</li>
            <li>直近の使用実績</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            迷う場合は{" "}
            <Link href="/last-resort-supply-high-voltage" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              高圧・特別高圧の確認ポイント
            </Link>{" "}
            もあわせて確認してください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電圧区分別 最終保障供給の対象条件</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電圧区分</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約電力</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">該当する施設例</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">最終保障の位置づけ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">特別高圧</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2,000kW以上</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大規模工場、大型商業施設、データセンター</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">一般送配電事業者が供給義務</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高圧</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50kW〜2,000kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中規模工場、オフィスビル、病院、学校</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">一般送配電事業者が供給義務</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">低圧</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50kW未満</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">小規模店舗、事務所</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">経過措置料金または規制料金が適用</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2025年3月時点で最終保障供給を利用中の法人は全国で約<span className="font-semibold text-slate-900">3,800件</span>。2022年のピーク時（約14,000件）からは減少していますが、依然として小売契約への移行が完了していない事業所が残っています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の対象になるケース</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の法人が最終保障供給に移行するケースは、大きく5つに整理できます。それぞれの状況と回避策を確認します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">ケース</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">具体的な状況</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">最終保障の適用</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">回避策</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">新電力の撤退</td>
                  <td className="border border-slate-200 px-3 py-2">契約中の新電力会社が事業撤退・倒産した</td>
                  <td className="border border-slate-200 px-3 py-2">自動的に移行（需要家の申請不要）</td>
                  <td className="border border-slate-200 px-3 py-2">財務安定性が高い複数社から選択・分散</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">契約期間切れ</td>
                  <td className="border border-slate-200 px-3 py-2">契約満了前に次契約の手続きが完了しなかった</td>
                  <td className="border border-slate-200 px-3 py-2">旧契約終了後に移行</td>
                  <td className="border border-slate-200 px-3 py-2">満了3か月前から見積取得・決裁を開始</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">新規受付停止</td>
                  <td className="border border-slate-200 px-3 py-2">既存の小売事業者が新規受付・更新を停止した</td>
                  <td className="border border-slate-200 px-3 py-2">代替先が見つからない場合に移行</td>
                  <td className="border border-slate-200 px-3 py-2">更新停止の連絡後すぐに代替探索を開始</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">供給拒否</td>
                  <td className="border border-slate-200 px-3 py-2">信用・設備要件等で小売事業者に断られた</td>
                  <td className="border border-slate-200 px-3 py-2">引受先がない場合に移行</td>
                  <td className="border border-slate-200 px-3 py-2">複数社へ並行して見積依頼・条件交渉</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">自主的切替</td>
                  <td className="border border-slate-200 px-3 py-2">コスト・条件の観点から意図的に移行した（まれ）</td>
                  <td className="border border-slate-200 px-3 py-2">申請により移行（制度趣旨に反するため非推奨）</td>
                  <td className="border border-slate-200 px-3 py-2">通常契約との差額を計算し即座に再契約検討</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 最終保障供給への移行は、多くのケースでやむを得ない状況です。しかし各ケースに対応した「早期の代替確保」により移行自体を回避できる場合があります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の位置づけと実務上の考え方を確認できます。",
            },
            {
              href: "/last-resort-supply-high-voltage",
              title: "高圧・特別高圧で確認したいポイント",
              description: "受電区分ごとの確認項目を実務視点で整理しています。",
            },
            {
              href: "/compare",
              title: "比較ページ",
              description: "対象区分を整理したあとに次契約の比較検討へ進めます。",
            },
            {
              href: "/emergency-last-resort-notification",
              title: "最終保障供給への移行通知が来たら",
              description: "通知を受けた直後の対応手順を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="対象区分を確認したら次の契約準備へ"
          description="対象判定を終えたら、切り替え準備と比較ページの活用で実務を前に進めやすくなります。"
          links={[
            { href: "/last-resort-supply-switch", label: "切り替え手順を見る" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
    </main>
  );
}
