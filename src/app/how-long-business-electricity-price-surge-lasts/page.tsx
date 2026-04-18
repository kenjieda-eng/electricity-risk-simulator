import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "法人の電気料金が高騰するのはいつまで続くのか｜主要指標別の見通しとシナリオ分析";
const pageDescription =
  "法人の電気料金高騰がいつまで続くのかを、LNG輸入価格・為替・JEPX・再エネ賦課金など主要指標別に整理。過去の高騰期との比較、楽観・基本・悲観の3シナリオ、今すぐできる対応策まで解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代高騰 いつまで",
    "電気代 値上げ 2026",
    "法人向け電気料金 見通し",
    "電気料金 高止まり いつまで",
    "法人 電力市場 価格動向",
    "LNG 電気料金 見通し",
    "再エネ賦課金 いつまで",
    "電気料金 シナリオ分析",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-long-business-electricity-price-surge-lasts",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-long-business-electricity-price-surge-lasts",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金が高騰するのはいつまで続くのか",
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

export default function HowLongBusinessElectricityPriceSurgeLastsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金が高騰するのはいつまで続くのか｜主要指標別の見通しとシナリオ分析"
        description="法人の電気料金高騰がいつまで続くのかを、LNG輸入価格・為替・JEPX・再エネ賦課金など主要指標別に整理。過去の高騰期との比較、楽観・基本・悲観の3シナリオ、今すぐできる対応策まで解説します。"
        url="https://simulator.eic-jp.org/how-long-business-electricity-price-surge-lasts"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気料金が高騰するのはいつまで続くのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-500">
        <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
          ホーム
        </Link>
        <span>/</span>
        <Link
          href="/articles/price-trends"
          className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          電気料金の推移と高止まり
        </Link>
        <span>/</span>
        <span>いつまで続くのか</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金が高騰するのはいつまで続くのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「いつまで続くか」を1つの数字で断定することは難しく、法人向け電気料金は複数要因の重なりで決まります。重要なのは、将来予測を当てることよりも、
          高騰が続くかどうかを判断する観点をそろえることです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見通しを立てるときに確認したい主要指標・過去の高騰期との比較・3つのシナリオ・法人が今できる対応策を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 高騰継続を左右する主要指標 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高騰継続を左右する主要指標（2025年時点）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の動向は単一の指標では決まりません。以下の6指標を組み合わせて読むことで、「なぜ下がらないのか」「何が変われば動くのか」が見えやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">指標</th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    現在の状況（2025年時点）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">下がる条件</th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">上がる条件</th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    法人への影響経路
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    LNG輸入価格
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    70〜80円/kg（やや安定）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">供給増・需要減</td>
                  <td className="border border-slate-200 px-3 py-2">地政学リスク・争奪</td>
                  <td className="border border-slate-200 px-3 py-2">燃調費→請求額</td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    為替（円ドル）
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    150円前後（円安基調）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">日米金利差縮小</td>
                  <td className="border border-slate-200 px-3 py-2">金利差拡大</td>
                  <td className="border border-slate-200 px-3 py-2">輸入燃料コスト</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    JEPX年度平均
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    10〜14円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2">再エネ増・需給緩和</td>
                  <td className="border border-slate-200 px-3 py-2">猛暑・厳冬・燃料高</td>
                  <td className="border border-slate-200 px-3 py-2">市場連動プランの請求</td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    再エネ賦課金
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    3.49円/kWh（過去最高）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">回避可能費用＞買取費用</td>
                  <td className="border border-slate-200 px-3 py-2">FIT認定量増</td>
                  <td className="border border-slate-200 px-3 py-2">全プラン共通</td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    容量拠出金
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    1.5〜2.0円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2">オークション低下</td>
                  <td className="border border-slate-200 px-3 py-2">火力維持需要</td>
                  <td className="border border-slate-200 px-3 py-2">全プラン共通</td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    託送料金
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    3.0〜5.0円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2">効率化</td>
                  <td className="border border-slate-200 px-3 py-2">送配電投資増</td>
                  <td className="border border-slate-200 px-3 py-2">全プラン共通</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※各指標の数値は2025年時点の参考水準。詳細は
            <Link
              href="/fuel-cost-adjustment-history"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃料費調整額の推移
            </Link>
            および
            <Link
              href="/lng-electricity-price"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              LNGと電気料金の関係
            </Link>
            を参照。
          </p>
        </section>

        {/* 過去の高騰期と回復期の比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">過去の高騰期と回復期の比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去の高騰事例を振り返ると、「原因が市場要因か構造要因か」で回復の有無が大きく変わることがわかります。2022年以降の高騰は構造的な性質が強く、単純な回復を期待しにくい状況です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">高騰期</th>
                  <th className="border border-slate-200 px-3 py-2">原因</th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    ピーク時の上昇幅
                  </th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    回復までの期間
                  </th>
                  <th className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    完全に戻ったか
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    2008年（リーマン前）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">原油高騰</td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    ＋2〜3円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">約1年</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="inline-block rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                      ほぼ戻った
                    </span>
                  </td>
                </tr>
                <tr className="bg-slate-50 hover:bg-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    2011年（東日本大震災）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">原発停止・火力依存増</td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    ＋3〜5円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">戻っていない</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="inline-block rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                      構造的に上昇
                    </span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium whitespace-nowrap">
                    2022年（ウクライナ危機）
                  </td>
                  <td className="border border-slate-200 px-3 py-2">LNG高騰・新電力撤退</td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">
                    ＋5〜10円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">進行中</td>
                  <td className="border border-slate-200 px-3 py-2">
                    <span className="inline-block rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">
                      戻っていない
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上昇幅は高圧標準的契約の参考値。詳細は
            <Link
              href="/business-electricity-price-trend-10-years"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金の推移を10年で見る
            </Link>
            および
            <Link
              href="/why-electricity-prices-have-not-returned"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              急騰後も元に戻らない理由
            </Link>
            を参照。
          </p>
        </section>

        {/* シナリオ別の見通し */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">シナリオ別の見通し</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            今後の電気料金動向は、外部環境と制度変化の組み合わせによって大きく3つのシナリオに分かれます。いずれのシナリオでも、制度的コスト（再エネ賦課金・容量拠出金・託送料金）は下がりにくい点に注意が必要です。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {/* 楽観シナリオ */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="mb-2 inline-block rounded bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                楽観シナリオ
              </div>
              <h3 className="text-base font-semibold text-slate-900">
                LNG安定＋円高が重なった場合
              </h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・LNG価格安定＋円高転換で燃調費が低下</li>
                <li>・高圧契約で▲1〜3円/kWhの改善余地</li>
                <li>・ただし再エネ賦課金・容量拠出金は下がらない</li>
                <li>・制度コスト分の高止まりは残る</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                実現には日米金利差縮小と中東・欧州情勢の安定が必要。
              </p>
            </div>
            {/* 基本シナリオ */}
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <div className="mb-2 inline-block rounded bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-700">
                基本シナリオ（最も可能性が高い）
              </div>
              <h3 className="text-base font-semibold text-slate-900">現状維持・高止まり継続</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・燃調費は横ばい〜微減で推移</li>
                <li>・再エネ賦課金・容量拠出金は微増</li>
                <li>・トータルの請求額は現水準が継続</li>
                <li>・補助政策終了後に実質値上がりの可能性</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                市場が落ち着いても制度負担が底上げするパターン。
              </p>
            </div>
            {/* 悲観シナリオ */}
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <div className="mb-2 inline-block rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-700">
                悲観シナリオ
              </div>
              <h3 className="text-base font-semibold text-slate-900">地政学リスク＋猛暑が重なった場合</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・地政学リスク再燃でLNG高騰</li>
                <li>・猛暑・厳冬で市場連動価格が急上昇</li>
                <li>・燃調費＋市場連動で＋3〜8円/kWh</li>
                <li>・2022年の再来が現実的に起こりうる</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                詳細は
                <Link
                  href="/market-price-adjustment-risk"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  市場価格調整リスク
                </Link>
                を参照。
              </p>
            </div>
          </div>
        </section>

        {/* 高騰が長引くときに見られやすい条件 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高騰が長引くときに見られやすい条件</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料価格と為替が同時に不安定な状態が続く</li>
            <li>卸電力市場価格（JEPX）の高止まりや変動幅拡大が続く</li>
            <li>補助政策の縮小・終了と契約更新時期が重なる</li>
            <li>市場連動要素の比率が高い契約を採用している</li>
            <li>再エネ賦課金・容量拠出金などの制度コストが積み上がる</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「なぜ下がらないのか」の構造については
            <Link
              href="/when-will-business-electricity-prices-drop"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金はいつ下がるのか
            </Link>
            でも詳しく解説しています。
          </p>
        </section>

        {/* 法人が今できる5つの対応 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が今できる5つの対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高騰終息の見通しが不透明な局面では、「いつ下がるかを待つ」より「高止まりを前提に備える」アプローチが有効です。
          </p>
          <ol className="mt-4 space-y-4">
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  現行契約の料金構成を分解して把握する
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  燃料費調整額・再エネ賦課金・容量拠出金・市場連動要素をそれぞれ切り分けて、どの要因が高い請求額を生み出しているかを特定する。請求書の内訳確認から始めることが第一歩。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  複数の料金メニュー・電力会社を比較する
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  同じ使用量でも、固定型・市場連動型・時間帯別によって請求額は大きく変わります。
                  <Link
                    href="/compare"
                    className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                  >
                    料金メニュー比較診断
                  </Link>
                  を活用して、自社の使用パターンに合ったプランを確認しましょう。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  契約更新タイミングと市場動向を連動させる
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  市場価格が高い局面での固定価格更新は、長期的なコスト固定リスクを高めます。更新時期の前に複数シナリオを想定した交渉準備を行うことが重要です。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                4
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  省エネ・需要調整（DR）で使用量自体を減らす
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  単価が高止まりするなかで最も確実なコスト削減策は、使用量の削減です。ピーク電力の抑制、空調・照明・生産プロセスの見直しを優先順位をつけて進めましょう。
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                5
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  予算計画に複数シナリオを盛り込む
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700">
                  電気代を単一予測値で固定するのではなく、「基本シナリオ」「悲観シナリオ」の2ケースで中期予算を試算しておくことで、急激な値上がりへの対応判断が速くなります。
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金高騰がいつまで続くかは断定しにくい一方、判断の軸は整理できます。LNG・為替・JEPX・制度コストの6指標を組み合わせて読み、過去の高騰期との比較から「今回は構造的な問題を含む」ことを理解したうえで、シナリオ別に備えることが実務上の有効な手立てです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「高止まりはいつか終わる」という前提に立つのではなく、「高止まりが続く可能性を前提にどう動くか」で意思決定を設計することが、今の法人経営において重要な視点です。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="how-long-business-electricity-price-surge-lasts" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "JEPX", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="見通し判断の軸を整理した後に、推移確認と契約要因の分解へ進むための導線です。"
          links={[
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の推移を10年で見る",
              description: "時系列の全体像を俯瞰できます。",
            },
            {
              href: "/why-electricity-prices-have-not-returned",
              title: "急騰後も元に戻らないのはなぜか",
              description: "高止まり背景の構造を確認できます。",
            },
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料市場と価格連動の前提を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment-history",
              title: "燃料費調整額の推移と仕組み",
              description: "燃調費の歴史的推移と算定方法を確認できます。",
            },
            {
              href: "/market-price-adjustment-risk",
              title: "市場価格連動リスクとは",
              description: "市場連動型契約の価格変動リスクを整理できます。",
            },
            {
              href: "/when-will-business-electricity-prices-drop",
              title: "法人の電気料金はいつ下がるのか",
              description: "下落条件と時期の見方を解説しています。",
            },
          ]}
        />

        <ContentCta
          heading="見通しを比較判断につなげる"
          description="高騰継続の可能性を前提に、現行契約と候補条件を比較すると、予算策定と見直し判断を進めやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-trends", label: "推移と高止まりカテゴリを見る" },
            { href: "/", label: "シミュレーターで診断する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
