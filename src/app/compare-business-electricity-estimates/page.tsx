import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "法人向け電力見積書の比較で見落としやすい項目｜7つの確認ポイントと実例";
const pageDescription =
  "法人向け電力見積書は単価だけでは比較できません。燃調費・市場連動・契約期間・容量拠出金など見落としやすい7項目を実例つきで整理し、チェックリストを提供します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力見積書 比較",
    "法人 電気料金 見積",
    "燃料費調整額 見積",
    "電力契約 見落とし",
    "見積比較 チェックリスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/compare-business-electricity-estimates",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/compare-business-electricity-estimates",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const missedItems = [
  {
    item: "燃調費の扱い差",
    content: "上限なし・上限あり・固定などの条件差を記載しない",
    impact: "高",
    check: "「燃料費調整額の上限」を明示させる",
  },
  {
    item: "市場連動の有無",
    content: "JEPX連動型と固定型が混在しているのに明示なし",
    impact: "高",
    check: "料金種別（固定／連動）を確認",
  },
  {
    item: "契約期間・違約金",
    content: "3年縛り・中途解約違約金が条件欄の末尾に記載",
    impact: "中",
    check: "契約期間と解約手数料を別紙含め確認",
  },
  {
    item: "基本料金の前提差",
    content: "契約電力の想定値が各社でバラバラ",
    impact: "中",
    check: "実績デマンド（直近12ヶ月最大値）で統一して依頼",
  },
  {
    item: "容量拠出金の含み方",
    content: "含む社・別建て社が混在し単価に反映されていない",
    impact: "中",
    check: "容量拠出金が単価内か否かを明記させる",
  },
  {
    item: "再エネ賦課金の表示",
    content: "国が定める賦課金を単価に含めているかどうかの記載なし",
    impact: "低",
    check: "再エネ賦課金を含む場合の単価内訳を確認",
  },
  {
    item: "支払条件",
    content: "翌月払い・翌々月払いが混在し資金繰りの前提が異なる",
    impact: "低",
    check: "支払期日・振替日を条件欄で確認",
  },
];

const threeCompanyExample = [
  {
    label: "表面単価（電力量料金）",
    a: "16.0円/kWh",
    b: "15.2円/kWh",
    c: "14.8円/kWh",
  },
  {
    label: "燃調費上限",
    a: "上限あり（±3円）",
    b: "上限なし",
    c: "固定込みで別算定",
  },
  {
    label: "市場連動",
    a: "なし（固定）",
    b: "JEPX50%連動",
    c: "なし（固定）",
  },
  {
    label: "容量拠出金",
    a: "単価内",
    b: "単価内",
    c: "別途請求（0.6円/kWh相当）",
  },
  {
    label: "契約期間・違約金",
    a: "1年・違約金なし",
    b: "2年・早期解約1ヶ月分",
    c: "3年・早期解約3ヶ月分",
  },
  {
    label: "実質年間コスト（月5万kWh想定）",
    a: "約9,600,000円",
    b: "約9,800,000円〜上振れあり",
    c: "約9,960,000円（容量拠出金込）",
  },
];

const checklistItems = [
  "燃料費調整額の上限・下限・計算式を確認したか",
  "市場連動型か固定型かを全社一致の条件で比較したか",
  "容量拠出金が単価内か別建てかを各社に明記させたか",
  "契約電力の前提を自社の実績デマンドに統一したか",
  "契約期間と中途解約時の費用を条件欄で確認したか",
  "支払条件（翌月・翌々月払い等）を確認したか",
];

export default function CompareBusinessElectricityEstimatesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav aria-label="パンくずナビ" className="mb-4 text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-sky-700 underline underline-offset-2">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li>
            <Link
              href="/articles/review-points"
              className="hover:text-sky-700 underline underline-offset-2"
            >
              見直しポイントを知る
            </Link>
          </li>
          <li aria-hidden="true">&gt;</li>
          <li className="text-slate-700">見積書比較で見落としやすい項目</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電力見積書の比較で見落としやすい項目
        </h1>
        <p className="mt-1 text-sm text-slate-500">7つの確認ポイントと実例</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見積書比較で最もよくある失敗は、表面単価だけで判断してしまうことです。燃料費調整額の上限の有無・市場連動の条件差・容量拠出金の含み方など、表に出にくい項目が実際の年間コストを左右します。このページでは見落としやすい7項目を実例と確認方法つきで整理します。
        </p>
      </header>

      <div className="mt-6 space-y-6">
        {/* セクション1: 見落としやすい7項目テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較で見落としやすい7項目
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の7項目は、見積書の表面には出にくい条件差です。各社に同じ前提で提示させることが、正確な比較の出発点になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    見落としの内容
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold w-16 text-center">
                    影響度
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    確認方法
                  </th>
                </tr>
              </thead>
              <tbody>
                {missedItems.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.content}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center">
                      <span
                        className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${
                          row.impact === "高"
                            ? "bg-red-100 text-red-700"
                            : row.impact === "中"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {row.impact}
                      </span>
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.check}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* セクション2: 3社見積の見落とし例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3社見積の見落とし例：表面単価 vs 実質年間コスト
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            下表は月間使用量5万kWhの中規模法人が3社から見積を取得した場合の条件差の例です。表面単価が最安のC社が、条件を含めると最もコスト高になるケースを示しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 font-semibold">
                    比較項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    A社
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    B社
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-center">
                    C社
                  </th>
                </tr>
              </thead>
              <tbody>
                {threeCompanyExample.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      i === threeCompanyExample.length - 1
                        ? "bg-sky-50 font-semibold"
                        : i % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.label}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-800">
                      {row.a}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-800">
                      {row.b}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-800">
                      {row.c}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※実質年間コストはJEPX平常時・燃調費標準水準での試算値。市場連動型（B社）は相場次第で上振れあり。
          </p>
        </section>

        {/* セクション3: 見積比較チェックリスト */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較チェックリスト（6項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書を受け取ったら、以下6項目を確認してから比較を進めます。未確認の項目があれば各社に問い合わせて同じ前提にそろえます。
          </p>
          <ul className="mt-4 space-y-2">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-sky-300 bg-white text-xs font-bold text-sky-700">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* セクション4: 社内説明への整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較結果を社内説明しやすく整理するポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            決裁者への報告では単価比較表ではなく、「年間総額の差」「条件の違い」「上振れリスクの出方」の3点を1枚にまとめると説明負担が減ります。市場連動型を含む提案では、平常時・高騰時の2ケースを併記しておくと説明時の想定外を防ぎやすくなります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の前提がそろっていない段階での社内提案は、後から条件面の懸念が出て手戻りになりやすいため、前提統一を先行させることが重要です。
          </p>
        </section>
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          intro="見積書比較を精度高く進めるために、あわせて確認できるページです。"
          links={[
            {
              href: "/how-to-read-electricity-quote",
              title: "電力見積書の読み方：各行の意味と確認ポイント",
              description:
                "見積書の行ごとの意味と、問い合わせ時の確認ポイントを整理できます。",
            },
            {
              href: "/cheap-unit-price-not-always-better",
              title: "なぜ単価が安い提案でも有利とは限らないのか",
              description:
                "表面単価と実質コストの差が生まれる5パターンを確認できます。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積比較表の作り方：社内説明用テンプレート",
              description:
                "複数見積を横並びにする比較表の構成例を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description:
                "整理した前提条件をもとに候補を横並びで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="見積条件を整理したら比較へ"
          description="前提をそろえた見積書が手元にあれば、比較ページで年間総額と条件差を確認し、社内説明の準備を進められます。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/", label: "シミュレーターで診断する" },
          ]}
        />
      </div>
    </main>
  );
}
