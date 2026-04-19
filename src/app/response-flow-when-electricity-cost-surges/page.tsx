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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "法人の電気代が年間100万円以上上がったときの対応フロー｜金額別のアクション整理";
const pageDescription =
  "法人の電気代が年間100万円・500万円・1000万円以上上がったときに何を確認し、どう対応するかをフロー形式で整理。社内アラート基準、エスカレーションルール、見直しの優先順位を解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 上昇 対応フロー",
    "電気料金 年間100万円 上昇",
    "電気代 予算超過 対応",
    "法人 電気料金 エスカレーション",
    "電気代 アラート 基準",
    "電気料金 見直し 優先順位",
    "電気代 高騰 社内対応",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/response-flow-when-electricity-cost-surges",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/response-flow-when-electricity-cost-surges",
    siteName: "法人電気料金ナビ",
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

export default function ResponseFlowWhenElectricityCostSurgesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気代が年間100万円以上上がったときの対応フロー｜金額別のアクション整理"
        description="法人の電気代が年間100万円・500万円・1000万円以上上がったときに何を確認し、どう対応するかをフロー形式で整理。社内アラート基準、エスカレーションルール、見直しの優先順位を解説。"
        url="https://simulator.eic-jp.org/response-flow-when-electricity-cost-surges"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電気代が年間100万円以上上がったときの対応フロー" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
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
          <li className="text-slate-700">電気代が年間100万円以上上がったときの対応フロー</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気代が年間100万円以上上がったときの対応フロー｜金額別のアクション整理
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気代の急上昇に直面したとき、「とりあえず節電」や「様子を見る」では対処が遅れるケースがあります。
          年間の上昇額が100万円・500万円・1,000万円・3,000万円超と大きくなるほど、対応レベルと担当者・判断事項が変わってきます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、上昇金額別のアラート基準・初動チェックリスト・社内エスカレーションのルール・見直し優先順位マトリクス、そして「様子を見る」が危険な3つの条件を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 金額別アラートテーブル */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            年間上昇額別のアラートと対応方針
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の年間上昇額を4段階に区分し、それぞれで「確認すべきこと」「対応レベル」「担当」「期限目安」を整理しました。金額が大きいほど対応の優先度と経営関与度が上がります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間上昇額</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">まず確認すべきこと</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対応レベル</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">主な担当</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対応期限目安</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">+100万円〜</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  燃料費調整・再エネ賦課金の上昇幅を特定。使用量増加との切り分け
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">担当者レベルで分析・報告。節電施策の検討開始</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">総務・施設管理担当者</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1か月以内に原因特定</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-800">+500万円〜</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  費目別の上昇内訳を定量化。契約メニューの見直し余地の有無を確認
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">部門長への報告。契約見直しの検討・電力会社への問い合わせ開始</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">総務部長・経理部長</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2週間以内に報告・方針決定</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-800">+1,000万円〜</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  調達先・契約メニューの変更可否を確認。複数の電力会社から見積取得開始
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">役員への報告。調達戦略の見直し・社内横断プロジェクト立ち上げの検討</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">経営企画・CFO・担当役員</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1週間以内に役員報告</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-900">+3,000万円〜</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">
                  事業採算への影響試算。価格転嫁・設備投資・電源調達の複合対応策の検討
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">経営課題として扱う。事業計画・中期計画への影響評価と対策のプロジェクト化</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">代表・取締役会レベル</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">即時報告・取締役会議題化</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※上昇額は「前年度実績との比較」または「予算との差異」のいずれかで判断してください。
          </p>
        </section>

        {/* 初動チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            初動チェックリスト6ステップ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の異常上昇に気づいたときに最初に行うべき確認を6ステップで整理しました。「どの費目が原因か」を特定することが最初の作業です。
          </p>
          <ol className="mt-4 space-y-3">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">1</span>
                <div>
                  <p className="font-semibold text-slate-900">請求書の費目別内訳を確認する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    「電力量料金」「燃料費調整」「再エネ賦課金」「容量拠出金」「基本料金」のどれが増えているかを費目別に確認します。合計金額だけを見ていると原因の特定が遅れます。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">2</span>
                <div>
                  <p className="font-semibold text-slate-900">使用量の変化と単価の変化を分離する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    「総額の増加＝使用量増加分＋単価上昇分」に分解します。使用量は変わっていないのに総額が増加している場合、単価上昇が主因です。自社でコントロールできる要因（使用量）と外部要因（単価）を切り分けることが対策の出発点です。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">3</span>
                <div>
                  <p className="font-semibold text-slate-900">燃料費調整の上昇幅を電力会社公表値と照合する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    契約先の電力会社が毎月中旬に公表する燃料費調整単価と請求書の値が一致しているか確認します。契約メニューに上限設定がある場合は公表値と乖離することがあります。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">4</span>
                <div>
                  <p className="font-semibold text-slate-900">デマンド値（最大需要電力）を確認する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    高圧・特別高圧契約では、過去12か月の最大デマンド値が基本料金の算定基準になります。突発的なデマンド上昇（空調の集中稼働など）がなかったか確認します。デマンドが増えると契約電力が上がり、翌年度の基本料金が高止まりします。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">5</span>
                <div>
                  <p className="font-semibold text-slate-900">新設された費目（容量拠出金等）がないか確認する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    2024〜2025年以降、容量拠出金が新たに請求書に加わる場合があります。新しい行が増えていないか確認し、その単価と計算方法を把握してください。
                  </p>
                </div>
              </div>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-800">6</span>
                <div>
                  <p className="font-semibold text-slate-900">今後3か月の見通しを試算する</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    翌月の燃料費調整単価は前月中旬に公表されます。来月・再来月・3か月後の月額を推計し、年間換算での上昇額を早期に試算することで、対応の緊急度を経営に示せます。
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* 社内エスカレーションテーブル */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内エスカレーションの基準テーブル
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            上昇額の大きさによって報告先・判断事項・必要資料が異なります。あらかじめエスカレーション基準を社内ルール化しておくと、担当者が「報告すべきか迷う」時間を削減できます。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">上昇額（年間）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">報告先</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">判断事項</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">必要資料</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">+100万円〜499万円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">部門長・総務部長</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">節電目標の設定、翌月予算見直しの要否</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">費目別上昇内訳表、前年同月比推移グラフ</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-800">+500万円〜999万円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">経理部長・管理本部長</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">予算修正の可否、契約見直しの検討開始、補正予算要求の要否</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">費目別内訳、3か月見通し試算、他社見積比較資料（可能であれば）</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-800">+1,000万円〜2,999万円</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">CFO・担当役員・経営企画</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">調達戦略の変更、価格転嫁の検討、省エネ設備投資の優先順位付け</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">上昇原因分析レポート、対策オプション比較（コスト削減効果・初期投資・回収期間）</td>
              </tr>
              <tr className="even:bg-slate-50">
                <td className="border border-slate-200 px-3 py-2">
                  <span className="inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-900">+3,000万円〜</span>
                </td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">代表・取締役会</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">事業採算の再評価、中期計画・設備投資計画の修正、複合対策の優先実施判断</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">事業への損益影響試算、対策ロードマップ（短期〜中長期）、外部専門家意見（必要に応じ）</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 見直し優先順位マトリクス */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見直し施策の優先順位マトリクス
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の見直し施策を「コスト削減効果」と「実施のしやすさ」の2軸で4象限に分類しました。まず右上の「効果大×実施容易」から着手することが基本です。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {/* 第1象限: 効果大×実施容易 */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">効果大 × 実施容易 ——— 最優先</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-emerald-600">▶</span>
                  <span><strong>燃料費調整の上限設定プランへの切り替え</strong>｜調整費が青天井になっているプランを上限付きプランに変更。交渉または他社乗り換えで対応</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-emerald-600">▶</span>
                  <span><strong>デマンドコントロールの即時実施</strong>｜デマンドが高い施設のピーク時間帯の機器稼働スケジュールを見直し。初期投資ほぼゼロ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-emerald-600">▶</span>
                  <span><strong>複数社からの見積取得・比較</strong>｜新電力・大手電力の競合見積を取得し、調達コストの基準値を確認</span>
                </li>
              </ul>
            </div>
            {/* 第2象限: 効果大×実施難 */}
            <div className="rounded-xl border-2 border-sky-300 bg-sky-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">効果大 × 実施難 ——— 中長期で計画</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
                  <span><strong>自家消費型太陽光の導入</strong>｜設備投資・屋根条件・系統接続の検討が必要。効果は大きく回収期間7〜12年が目安</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
                  <span><strong>高効率設備へのリプレース</strong>｜空調・照明・コンプレッサー等の省エネ設備更新。設備投資判断が必要</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
                  <span><strong>相対契約・電源直接調達</strong>｜大口（特別高圧以上）は電源直接調達も選択肢。交渉・契約締結に時間を要する</span>
                </li>
              </ul>
            </div>
            {/* 第3象限: 効果小×実施容易 */}
            <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">効果小 × 実施容易 ——— 補完的に実施</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-slate-500">▶</span>
                  <span><strong>不使用時の消灯・スタンバイ電力削減</strong>｜効果は限定的だが習慣化で継続的に効く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-slate-500">▶</span>
                  <span><strong>エアコン設定温度の調整</strong>｜冷暖房の設定温度を1℃変えると数%の削減効果</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-slate-500">▶</span>
                  <span><strong>月次モニタリングの強化</strong>｜請求書を費目別にExcel管理するだけでも異変の早期発見に有効</span>
                </li>
              </ul>
            </div>
            {/* 第4象限: 効果小×実施難 */}
            <div className="rounded-xl border-2 border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">効果小 × 実施難 ——— 後回し可</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-slate-400">▶</span>
                  <span><strong>省エネ認証・ISO50001の取得</strong>｜認証自体がコスト削減を保証するわけではない。PR目的なら検討</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-slate-400">▶</span>
                  <span><strong>エネルギー管理士の採用・育成</strong>｜大規模施設では有用だが、中小規模では即効性は限定的</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 様子を見るが危険な3つの条件 */}
        <section className="rounded-xl border border-rose-200 bg-rose-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「様子を見る」が危険な3つの条件
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の上昇は「一時的な高騰かもしれない」と様子を見てしまいがちです。しかし以下の3つの条件に当てはまる場合、対応を先延ばしにするほど損失が拡大します。
          </p>
          <ul className="mt-4 space-y-4">
            <li className="rounded-xl border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-800">条件1：市場連動プランで燃調・市場調整に上限がない</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                上限設定のない市場連動プランは、JEPXスポット価格が高騰するたびに調整費が無制限に上がります。2021年1月のJEPXスパイク時は月額電気代が通常の3〜10倍になった法人事例もあります。「様子を見る」間にも毎月コストが積み上がるため、上限付きプランへの切り替え相談を即日開始すべきです。
              </p>
            </li>
            <li className="rounded-xl border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-800">条件2：契約更新時期が3か月以内に迫っている</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                電力会社との契約更新は通常3〜6か月前に申し出が必要です。更新時期を過ぎると自動更新で同じ条件が継続され、次の更新まで変更できないケースがあります。「様子を見ている」うちに更新期限を過ぎると、不利な条件のまま1年以上継続することになります。
              </p>
            </li>
            <li className="rounded-xl border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-800">条件3：省エネ設備の補助金申請期限が近い</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                経産省・環境省・自治体の省エネ設備補助金には申請期限があります。補助率は50〜3分の1程度のものが多く、期限を逃すと初期投資額が大幅に増加します。「電気代が下がったら検討する」という姿勢では、補助金を活用できずに投資回収期間が長くなる恐れがあります。
              </p>
            </li>
          </ul>
        </section>

      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="response-flow-when-electricity-cost-surges" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/budget-planning-in-high-price-era",
              title: "電気料金高止まり時代の予算策定",
              description: "シナリオ別の予算前提の置き方・費目別の取り扱い方を整理。",
            },
            {
              href: "/electricity-price-data-sources",
              title: "電気料金推移データの入手先と確認方法",
              description: "原因分析に使う外部データの入手先と確認タイミングの解説。",
            },
            {
              href: "/should-you-review-after-price-increase-notice",
              title: "値上げ通知が来たら見直すべきか",
              description: "値上げ通知を受け取ったときの判断基準と対応の手順。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気代見直しを社内で説明する方法",
              description: "経営層・上司への報告をスムーズにするための資料構成と説明の型。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気代上昇リスクを数字で確認する"
          description="「年間いくら上がるか」をシミュレーターで試算できます。契約区分・使用量・現在の単価を入力するだけで、上昇シナリオ別の影響額がわかります。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/articles/review-points", label: "見直しポイントの解説を読む" },
          ]}
        />
      </div>
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
