import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "法人の電気料金はなぜ急に上がるのか｜6つの急上昇パターンと月額影響を解説";
const pageDescription =
  "法人の電気料金が急に上がる6つのパターンを、月額影響額つきで解説。燃調費・市場連動・補助金終了・契約更新の影響幅と、急上昇時の初動チェックフローを整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 急に上がる",
    "法人 電気代 今月から上がった",
    "燃料費調整額 市場価格調整額",
    "補助金終了 電気料金",
    "電力契約 更新 単価見直し",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/why-business-electricity-bills-rise-suddenly",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-business-electricity-bills-rise-suddenly",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金はなぜ急に上がるのか",
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

export default function WhyBusinessElectricityBillsRiseSuddenlyPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金はなぜ急に上がるのか｜6つの急上昇パターンと月額影響を解説"
        description="法人の電気料金が急に上がる6つのパターンを、月額影響額つきで解説。燃調費・市場連動・補助金終了・契約更新の影響幅と、急上昇時の初動チェックフローを整理。"
        url="https://simulator.eic-jp.org/why-business-electricity-bills-rise-suddenly"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金はなぜ急に上がるのか" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link
              href="/articles/price-increase"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              料金が上がる理由を知る
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">なぜ急に上がるのか</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金はなぜ急に上がるのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、毎月ゆるやかに変わるとは限りません。ある月から請求額が急に上がったように見える場合は、
          使用量の増加だけでなく、料金単価や調整項目、政策要因、契約条件の変化が重なっていることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「なぜ今月から上がったのか」という実務上の疑問に絞り、急上昇パターン別の月額影響レンジ・初動チェックフロー・Before/Afterシミュレーションを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 急上昇パターン別テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            急上昇パターン別の月額影響レンジ（月5万kWhの場合）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            急に上がったときに最初に疑うべきパターンと、その月額影響の目安を整理します。複数要因が重なるケースも多く、
            対応優先度の高いパターンを先に特定することが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">
                    急上昇パターン
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">
                    影響の出方
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">
                    月5万kWhの月額影響
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">
                    持続期間
                  </th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">
                    対応の優先度
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    使用量の急増（猛暑・厳冬）
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    電力量料金が増加
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                    +10〜30万円
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    1〜3ヶ月
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">
                    中（季節要因）
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    <Link
                      href="/fuel-cost-adjustment"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      燃料費調整額の急騰
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    燃調単価が上昇
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                    +10〜50万円
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    数ヶ月〜半年
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                    高
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    <Link
                      href="/market-price-adjustment"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      市場価格調整額の急騰
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    市場連動分が上昇
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-red-700">
                    +15〜100万円超
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    数日〜数ヶ月
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">
                    最高（市場連動型）
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    <Link
                      href="/impact-of-electricity-subsidy-ending"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      補助金の縮小・終了
                    </Link>
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    軽減分がなくなる
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                    +9〜35万円
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    恒久的
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                    高
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    契約更新による単価改定
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    基本料金・電力量料金単価上昇
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                    +5〜25万円
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    契約期間中
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                    高
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    再エネ賦課金の改定
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    年度改定で上昇
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                    +2.5〜5万円
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    1年間
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">
                    低（制度要因）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※月額影響はおおよその目安です。契約単価・使用量・補助金額により異なります。
          </p>
        </section>

        {/* Before/After シミュレーション */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Before/After シミュレーション（月5万kWh高圧・燃調＋市場高騰）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額と市場価格調整額が同時に急騰した場合、月額でどれほど請求が変わるかを試算します。
            基本料金・電力量料金は変わらなくても、調整項目だけで+67万円となるケースがあります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-sky-100 text-left">
                  <th className="border border-sky-200 px-3 py-2 font-semibold text-slate-800">
                    費目
                  </th>
                  <th className="border border-sky-200 px-3 py-2 font-semibold text-slate-800">
                    通常月
                  </th>
                  <th className="border border-sky-200 px-3 py-2 font-semibold text-slate-800">
                    急上昇月（燃調+市場高騰）
                  </th>
                  <th className="border border-sky-200 px-3 py-2 font-semibold text-slate-800">
                    差額
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">基本料金</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">75万円</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">75万円</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-500">±0</td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">電力量料金</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">80万円</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">80万円</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-500">±0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">
                    <Link
                      href="/fuel-cost-adjustment"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      燃料費調整額
                    </Link>
                  </td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">+5万円</td>
                  <td className="border border-sky-100 px-3 py-2 font-medium text-orange-700">
                    +25万円
                  </td>
                  <td className="border border-sky-100 px-3 py-2 font-medium text-orange-700">
                    +20万円
                  </td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">
                    <Link
                      href="/market-price-adjustment"
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      市場価格調整額
                    </Link>
                  </td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">+3万円</td>
                  <td className="border border-sky-100 px-3 py-2 font-medium text-red-700">
                    +50万円
                  </td>
                  <td className="border border-sky-100 px-3 py-2 font-medium text-red-700">
                    +47万円
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">再エネ賦課金</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">17.5万円</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-700">17.5万円</td>
                  <td className="border border-sky-100 px-3 py-2 text-slate-500">±0</td>
                </tr>
                <tr className="bg-sky-100 font-semibold">
                  <td className="border border-sky-200 px-3 py-2 text-slate-900">合計</td>
                  <td className="border border-sky-200 px-3 py-2 text-slate-900">180.5万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-red-700">247.5万円</td>
                  <td className="border border-sky-200 px-3 py-2 text-red-700">+67万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※試算値です。実際の請求額は契約内容・使用パターン・補助金の有無により異なります。
          </p>
        </section>

        {/* 初動チェックフロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            急に上がったときの初動チェックフロー
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求額が急増したと気づいたら、以下のステップで原因を絞り込みます。
            上から順に確認することで、対応すべき優先事項が見えてきます。
          </p>
          <ol className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                1
              </span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  使用量（kWh）が前月・前年同月と比べて増えていないか確認
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  請求書の使用量欄または検針票で確認。増加している場合は空調・生産増による季節要因か操業変化かを切り分けます。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                2
              </span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  燃料費調整額の単価が前月と比べて変化していないか確認
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  電力会社のWebサイトまたは請求書の単価欄で確認。
                  <Link
                    href="/fuel-cost-adjustment"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    燃料費調整額の仕組み
                  </Link>
                  も参照してください。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                3
              </span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  市場価格調整額や電源調達調整費の項目があるか、金額が変化していないか確認
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  市場連動型契約の場合は特に要注意。
                  <Link
                    href="/market-price-adjustment"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    市場価格調整額の解説
                  </Link>
                  で仕組みを確認できます。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                4
              </span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  補助金の適用が終了・縮小していないか確認
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  経産省の負担軽減策が適用されていた場合、終了時に実質単価が上昇します。
                  <Link
                    href="/impact-of-electricity-subsidy-ending"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    補助金終了の影響
                  </Link>
                  も参照してください。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                5
              </span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  契約更新や単価改定の通知が来ていなかったか確認
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  更新時に条件が変更される場合があります。
                  <Link
                    href="/when-business-electricity-price-increases-start"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    値上がりが始まるタイミング
                  </Link>
                  も合わせて確認してください。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-bold text-slate-600">
                6
              </span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">
                  上記で特定できない場合、電力会社に照会
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  請求書に記載のお客様番号を手元に用意し、「前月比でどの項目が増加したか」を具体的に確認します。
                  <Link
                    href="/how-to-read-electricity-bill"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    請求書の読み方
                  </Link>
                  も参考にしてください。
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* 使用量増加 vs 単価変動 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まず確認したいのは使用量の増加か料金単価の変化か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最初に分けて考えたいのは、使用量が増えたのか、それとも1kWhあたりの実質単価が上がったのかという点です。気温や操業状況による
            使用量増加はよくありますが、それとは別に、燃料費調整額や市場価格調整額、契約単価の見直しで請求額が増えることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            総額だけで判断せず、使用量、基本料金、電力量料金、各種調整項目を分けて確認することが重要です。詳しい項目の読み方は{" "}
            <Link
              href="/how-to-read-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              請求書の読み方
            </Link>
            を参照してください。
          </p>
        </section>

        {/* 燃調費 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            燃料費調整額の変動で請求額が大きく動くことがある
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、火力発電の燃料価格の変動を一定のルールで料金へ反映する仕組みです。LNG、石炭、原油などの燃料価格が上昇すると、
            数か月のタイムラグを経て請求額に反映されることがあります。月5万kWhの規模では+10〜50万円の影響となることもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            仕組みの詳細は{" "}
            <Link
              href="/fuel-cost-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額（燃調費）の解説
            </Link>
            で確認できます。
          </p>
        </section>

        {/* 市場価格調整額 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            市場価格調整額や市場連動要素で急上昇することがある
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            卸電力市場の価格上昇が反映される契約では、短期間で請求額が大きく動くことがあります。需給が逼迫する局面や、燃料高、
            猛暑・厳冬が重なる局面では、市場価格が上がりやすくなります。月5万kWhでは+15〜100万円超の影響になることもあり、
            6つのパターンの中で最も急激な変動リスクがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額の考え方は{" "}
            <Link
              href="/market-price-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場価格調整額の解説
            </Link>
            が参考になります。
          </p>
        </section>

        {/* 補助金終了 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            補助金の縮小や終了で見かけ上大きく上がることがある
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            政府の負担軽減策や補助金が入っていた時期は、実際の原価上昇の一部が見えにくくなっています。補助金が縮小・終了すると、
            調達環境が急変していなくても、請求額だけが急に上がったように見えることがあります。一度終了すると恒久的な上昇となるため、
            早期に対処することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            <Link
              href="/impact-of-electricity-subsidy-ending"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              補助金終了が電気料金に与える影響
            </Link>
            で月額試算の詳細を確認できます。
          </p>
        </section>

        {/* 契約更新 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約更新時の単価見直しで上がることがある
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電力契約では、契約更新のタイミングで基本料金や電力量料金単価が見直されることがあります。市場環境が不安定な時期は、
            更新後の条件が従来より厳しくなる場合もあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積書や契約更新案内で旧条件と新条件の差分を確認し、どの項目が増えたかを明確にすることが大切です。
            値上がりが実際に適用されるタイミングは{" "}
            <Link
              href="/when-business-electricity-price-increases-start"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              値上がりが始まるタイミング
            </Link>
            で確認できます。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金が急に上がる背景には、使用量増加だけでなく、燃料費調整額、市場価格調整額、補助金終了、契約更新など6つのパターンがあります。
            月5万kWhの規模では最大+100万円超の影響になることもあります。
            請求額の総額だけでは原因が見えにくいため、初動チェックフローに沿って項目ごとに切り分けて確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            上昇要因の全体像を把握したい場合は{" "}
            <Link
              href="/why-business-electricity-prices-rise"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がる理由
            </Link>
            もあわせて確認してください。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="why-business-electricity-bills-rise-suddenly" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "JEPX", "基本料金", "電気料金の内訳"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="急な上昇要因を切り分けた後に、項目別の仕組みと見直し判断へつなげる導線です。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "上昇要因の全体像を整理できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調単価の仕組みと請求への影響額を確認できます。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "請求額に影響する市場要因の見方を確認できます。",
            },
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "補助金終了が電気料金に与える影響",
              description: "補助金終了時の月額影響試算を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金請求書の読み方",
              description: "請求書の各項目の意味と確認ポイントを整理できます。",
            },
            {
              href: "/when-business-electricity-price-increases-start",
              title: "法人の電気料金値上がりが始まるタイミング",
              description: "値上がりが適用されるタイミングを契約種別で確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "同条件で比較し、契約判断に必要な差分を確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "急上昇後の料金水準の推移実態をデータで確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="請求額の急変要因を比較で確認する"
          description="要因を切り分けた後は、現行契約と候補条件を同じ前提で比較すると、社内説明と見直し判断を進めやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧を見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
