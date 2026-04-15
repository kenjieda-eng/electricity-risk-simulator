import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "電気料金高止まり時代の予算策定｜シナリオ別前提の置き方と社内合意の進め方";
const pageDescription =
  "電気料金が高止まりする時代の予算策定方法を解説。過去5年の変動レンジに基づくシナリオ別前提、費目ごとの変動幅の織り込み方、四半期見直しのポイントを整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 予算策定",
    "電気代 高止まり 予算",
    "電気料金 シナリオ 前提",
    "電気代 予算超過 社内説明",
    "法人 電気料金 変動幅",
    "電気代 四半期見直し",
    "電気料金 楽観 悲観 シナリオ",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/budget-planning-in-high-price-era",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/budget-planning-in-high-price-era",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
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

export default function BudgetPlanningInHighPriceEraPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link href="/articles/price-trends" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">電気料金高止まり時代の予算策定</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金高止まり時代の予算策定｜シナリオ別前提の置き方と社内合意の進め方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金が高止まりしている局面では、前年度実績をそのまま予算に置くと大きく外れるリスクがあります。
          燃料費調整・市場価格調整・再エネ賦課金・容量拠出金はそれぞれ独立した変動要因を持ち、組み合わせによって総額が10〜30%以上ぶれることもあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、過去5年の変動レンジを根拠にした3シナリオ別の予算前提の置き方、費目ごとの取り扱い方、予算超過時の社内説明テンプレート、四半期レビューで見るべき指標を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 過去5年の変動レンジテーブル */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            過去5年の費目別変動レンジ（2020〜2025年度）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主要費目の最安値・最高値・平均値・変動幅を整理しました。「変動幅」は最高値と最安値の差です。予算策定時の「どのくらい外れうるか」の根拠として使用できます。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">費目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">最安値</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">最高値</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">5年平均</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">変動幅</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">電力量料金単価<br /><span className="text-xs font-normal text-slate-500">（高圧）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">12.5円/kWh<br /><span className="text-xs text-slate-500">（2020年度）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">17.8円/kWh<br /><span className="text-xs text-slate-500">（2022年度）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">15.2円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">5.3円/kWh<br /><span className="text-xs font-normal">(+42%)</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">原料コストと市場価格に連動</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">燃料費調整単価<br /><span className="text-xs font-normal text-slate-500">（高圧・月次）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">−3.0円/kWh<br /><span className="text-xs text-slate-500">（2020年後半）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">+8.9円/kWh<br /><span className="text-xs text-slate-500">（2022年冬）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">+2.1円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">11.9円/kWh<br /><span className="text-xs font-normal">(最大幅)</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">LNG・石炭価格に3か月ラグで追随</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">1.40円/kWh<br /><span className="text-xs text-slate-500">（2021年度）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">3.49円/kWh<br /><span className="text-xs text-slate-500">（2023年度）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">2.64円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">2.09円/kWh<br /><span className="text-xs font-normal">(+149%)</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回改定。増加基調が続く見通し</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">容量拠出金</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">0円/kWh<br /><span className="text-xs text-slate-500">（2024年度まで）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">0.6〜1.0円/kWh<br /><span className="text-xs text-slate-500">（2025年度以降）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">段階的増加中</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">新規上昇要因</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">容量市場オークション結果で4年後に確定</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">JEPXスポット価格<br /><span className="text-xs font-normal text-slate-500">（月間平均）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">5〜8円/kWh<br /><span className="text-xs text-slate-500">（2020年）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">50〜250円/kWh<br /><span className="text-xs text-slate-500">（2021年1月スパイク）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">10〜18円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">極端なスパイクあり</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場連動プランは直接影響を受ける</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※各費目の数値は参考レンジです。地域・契約区分・プランにより実績は異なります。
          </p>
        </section>

        {/* 3シナリオ別予算前提テーブル */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3シナリオ別の予算前提（高圧・月間5万kWh使用の場合）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「楽観シナリオ」は燃料費調整が低水準・市場価格が落ち着いている場合、「基本シナリオ」は2024〜2025年の現状水準継続、「悲観シナリオ」は2022年型の高騰再現を想定しています。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">シナリオ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">前提条件</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">推定月額<br /><span className="text-xs font-normal">（高圧5万kWh）</span></th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">年額（推定）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-right font-semibold text-slate-900">前年比（参考）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">楽観</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  燃調±0〜+1円/kWh、JEPXスポット8〜10円/kWh水準、再エネ賦課金2.5円/kWh
                </td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">約90万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">約1,080万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">−15〜−20%</td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">基本</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  燃調+2〜+3円/kWh、JEPXスポット12〜15円/kWh水準、再エネ賦課金3.0〜3.5円/kWh
                </td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-sky-700">約115万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-sky-700">約1,380万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">±0〜+5%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-800">悲観</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  燃調+5〜+8円/kWh、JEPXスポット20〜30円/kWh水準、再エネ賦課金3.5〜4円/kWh
                </td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">約155万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-rose-700">約1,860万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">+35〜+50%</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※月額・年額は契約電力50kW・月間5万kWhを想定した試算値。基本料金・送配電費・容量拠出金を含む概算。実際の金額は契約内容・エリア・使用量により大きく異なります。
          </p>
        </section>

        {/* 費目別の前提の置き方 */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            費目別の予算前提の置き方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            費目によって「固定値で置けるもの」と「レンジで置くべきもの」が異なります。変動リスクの高い費目は楽観・悲観の両面を明記しておくと、予算超過時の社内説明が容易になります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">費目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定値 or レンジ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見直し頻度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">設定のポイント</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">固定値</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（契約更新時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンド実績の最大値（過去12か月）×単価で計算。夏冬は多めに見積もる</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">固定値</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（契約更新時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約単価を使用。使用量の季節変動は月別で分けて管理</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">燃料費調整</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">レンジ</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月次（翌月分を毎月確認）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">直近6か月の平均値をベースに±2〜3円/kWhのレンジで設定</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">市場価格調整</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">レンジ</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月次</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">JEPX先物価格を参考に楽観・悲観幅を設ける。市場連動プランは特に重点管理</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">固定値</span>
                  <span className="ml-1 text-xs text-slate-500">（年度改定後）</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（4月改定後に更新）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">4月改定時に確定。確定前は前年度比+10〜20%を悲観ケースとして織り込む</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">容量拠出金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-semibold text-amber-800">レンジ</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（容量市場オークション後）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">確定値は請求書で確認。将来年度分はOCCTOオークション結果を参照</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">送配電費用</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-semibold text-slate-700">固定値</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年1回（託送料金改定時）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">規制料金のため突発的変動は少ないが、制度改定時（数年に一度）に見直しが必要</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 予算超過時の社内説明テンプレート */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            予算超過時の社内説明テンプレート（3ステップ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代が予算を超過した場合、「なぜ超えたか」「どこが変動したか」「今後どうなるか」の3点を構造的に説明することが重要です。
          </p>
          <ol className="mt-4 space-y-4">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">1</span>
                <div>
                  <p className="font-semibold text-slate-900">超過額と超過要因を費目別に示す</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    「年間予算1,200万円に対し実績1,450万円。差異250万円のうち燃料費調整の上昇で160万円、再エネ賦課金の増加で60万円、残り30万円は使用量増加によるもの」と費目別に分解します。「電気代が上がった」ではなく「燃料費調整が〇円/kWh上昇した」という具体性が重要です。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">2</span>
                <div>
                  <p className="font-semibold text-slate-900">外部要因と内部要因を分けて説明する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    燃料費調整・再エネ賦課金・市場価格調整は「外部要因（外部環境の変化によるもの、自社努力では回避不能）」であることを明示します。内部要因（使用量増加）は自社の対策余地があるため、節電施策の状況とあわせて説明します。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">3</span>
                <div>
                  <p className="font-semibold text-slate-900">来年度予算への反映方針を提示する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    「来年度は基本シナリオを1,380万円、悲観ケースを1,680万円として予算要求します。燃料費調整の動向次第で四半期ごとに予算見通しを更新します」という形で見直し方針を示すと、経営層の理解が得やすくなります。
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* 四半期レビューで見るべき5指標 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            四半期レビューで見るべき5つの指標
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金は毎月変動しますが、予算進捗の管理は四半期単位で行うと経営報告とも合わせやすくなります。レビュー時にチェックすべき5指標を整理しました。
          </p>
          <ul className="mt-4 space-y-3">
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">1. 総実績額 vs 予算進捗率</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                「Q1実績360万円÷年間予算1,380万円＝26.1%」のように進捗率を確認します。季節性がある場合（夏冬に使用量増加）は、月別予算配分との差異も見てください。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">2. 実績単価（円/kWh）の変化</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                請求総額÷使用量で算出した「実績単価」を前四半期・前年同期と比較します。単価が上昇しているのに総額が変わっていない場合は使用量が減っている可能性があります。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">3. 燃料費調整の累計差異</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                予算策定時の燃調前提と実績の差分を累計で管理します。Q1終了時点で「予算前提+2.0円に対して実績+3.5円。差異1.5円/kWh×使用量換算で年間追加コストは約90万円」のように早期に影響を定量化できます。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">4. 翌四半期の燃調・市場価格見込み</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                翌月の燃調単価は前月中旬に公表されるため、Q2開始前にはQ2の3か月分の方向感をつかめます。LNG輸入価格の直近動向（IEAやSパターンの原料炭価格）も加味してシナリオを更新してください。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">5. 制度変更の予告情報</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                再エネ賦課金の改定予告（1〜3月）、容量拠出金のオークション結果公表（随時）、経産省の補助金終了・新設情報を四半期ごとに確認します。これらは予算計画の大幅修正が必要になる契機です。
              </p>
            </li>
          </ul>
        </section>

      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="budget-planning-in-high-price-era" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-price-data-sources",
              title: "電気料金推移データの入手先と確認方法",
              description: "予算策定に使う外部データの入手先・確認タイミング・使い方を整理。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "電気料金の推移（2019〜2025年）",
              description: "過去6年間の変動を費目別に整理した解説ページ。変動レンジの根拠として活用できます。",
            },
            {
              href: "/response-flow-when-electricity-cost-surges",
              title: "電気代が年間100万円以上上がったときの対応フロー",
              description: "予算超過時に何を確認し、どう対応するかを金額別のアクションで整理。",
            },
            {
              href: "/municipality-supplementary-budget",
              title: "自治体の電気料金高騰による補正予算",
              description: "自治体担当者向けの電気代予算管理・補正予算対応の解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金シナリオを数字で確認する"
          description="予算前提の楽観・悲観シナリオを具体的な金額で試算できます。契約規模・使用量を入力するだけで年間コスト変化の概算が出ます。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/articles/price-trends", label: "推移・高止まりの解説を読む" },
          ]}
        />
      </div>
    </main>
  );
}
