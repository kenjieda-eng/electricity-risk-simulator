import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["diagnostic-tools"];


const pageTitle =
  "見積比較前チェック診断｜電力見積依頼を始める前に確認したいこと";
const pageDescription =
  "電力見積を依頼する前に確認すべき情報・資料・社内調整を診断チェックリスト形式で整理。準備不足のまま見積を取ると比較精度が下がるリスクを防ぐための実務チェックページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 見積 比較前 チェック",
    "電気料金 見積依頼 準備",
    "法人 電力見積 何を用意する",
    "電力契約 見積比較 準備リスト",
    "電気料金 見積 比較方法",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/quotation-comparison-pre-check",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/quotation-comparison-pre-check",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/diagnostic-tools", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/diagnostic-tools"],
  },
};

export default function QuotationComparisonPreCheckPage() {
  return (
    <>
      <ArticleJsonLd
        headline="見積比較前チェック診断｜電力見積依頼を始める前に確認したいこと"
        description="電力見積を依頼する前に確認すべき情報・資料・社内調整を診断チェックリスト形式で整理。準備不足のまま見積を取ると比較精度が下がるリスクを防ぐための実務チェックページです。"
        url="https://simulator.eic-jp.org/quotation-comparison-pre-check"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "診断ツール・チェックリスト", url: "https://simulator.eic-jp.org/articles/diagnostic-tools" },
        ]}
        faq={[
    { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">見積比較前チェック診断</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          見積比較前チェック診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力見積の比較は「条件を揃えること」が精度の前提です。情報が不足したまま見積を依頼すると、前提条件がそろわない見積が届いたり、比較に使えない資料になってしまうことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見積依頼を始める前に確認・準備すべき事項を「必須情報」「あると有効な情報」「社内調整事項」「見積受領後の確認ポイント」の4カテゴリでチェックリスト形式で整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積依頼に必須の情報・書類一覧</li>
            <li>精度を高めるためにあると有効な情報</li>
            <li>見積依頼前に社内で確認すべき事項</li>
            <li>見積受領後の条件確認チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ準備が見積の質を左右するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力の見積は「提供された情報の精度」に依存します。使用量データが不完全だと年間コストの試算精度が下がり、比較判断が難しくなります。また、供給地点特定番号が不明だと、そもそも見積計算を開始できない電力会社もあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積の比較方法については{" "}
            <Link href="/compare-business-electricity-estimates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人の電気料金見積比較の方法
            </Link>{" "}
            もあわせて確認してください。
          </p>
        </section>
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />



        <DiagnosisClient />

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">準備から見積比較までのステップ整理</h2>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "必須情報（供給地点特定番号・使用量・契約電力等）を揃える" },
              { step: 2, text: "シミュレーターで現行プランのリスクを試算し、社内説明の根拠を準備する" },
              { step: 3, text: "見直しの目的と比較軸を社内で共有する" },
              { step: 4, text: "2〜3社以上の電力会社に同一条件で見積依頼を出す" },
              { step: 5, text: "見積受領後、前提条件が揃っているかを確認してから比較を行う" },
              { step: 6, text: "年間総額・変動リスク・契約条件の3軸で比較し、社内承認を得る" },
            ].map(({ step, text }) => (<div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書で比較すべき項目と見落としやすいポイント</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">比較項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見るべき数値</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">見落とし例</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額影響の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金単価</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">時間帯別単価の見落とし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲20〜100万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約容量の設定差</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲5〜30万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">上限有無・算定式</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">上限なしの高騰リスク</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月<span className="font-semibold text-slate-900">▲5〜50万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">連動率・基準価格</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基準価格の違い</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲20〜100万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約期間・違約金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年数・解約条件</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">自動更新条項</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1回<span className="font-semibold text-slate-900">▲10〜50万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">力率割引</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">割引率</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">力率改善で基本料金割引</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間<span className="font-semibold text-slate-900">▲5〜15万円</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較前の準備度チェック</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            準備項目ごとに完了状況と未完了のリスク、対応方法を整理しました。見積依頼前の確認にご活用ください。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">準備項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">完了していれば</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">未完了のリスク</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対応方法</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">供給地点特定番号の確認</td>
                <td className="border border-slate-200 px-3 py-2 text-green-700">○</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積計算を開始できない電力会社がある</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">現行の電気料金請求書または電力会社Webサービスで確認</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">直近12か月の使用量データ</td>
                <td className="border border-slate-200 px-3 py-2 text-green-700">○</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年間コスト試算の精度が大幅に下がる</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力会社のWebサービスまたは請求書から月別kWhを集計</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">契約電力・受電電圧の確認</td>
                <td className="border border-slate-200 px-3 py-2 text-green-700">○</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">料金区分の見誤りで比較条件がずれる</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約書の「受電電圧」「契約電力（kW）」欄を確認</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">現契約の満了日と解約条件</td>
                <td className="border border-slate-200 px-3 py-2 text-green-700">○</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中途解約違約金が発生し、見直しのメリットが消える</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約書の「契約期間」「中途解約条件」欄を確認</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">見直しの目的・比較軸の社内共有</td>
                <td className="border border-slate-200 px-3 py-2 text-green-700">○</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">担当者間で優先軸がずれて比較・判断が迷走する</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">「コスト削減優先」「安定性優先」など目的を文書化して共有</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">稟議・決裁ルートの事前確認</td>
                <td className="border border-slate-200 px-3 py-2 text-green-700">○</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積完了後に社内調整が遅れ、更新タイミングを逃す</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">稟議書の形式・承認者・期間を事前に上長と確認</td>
              </tr>
            </tbody>
          </table>
        </section>

        <SourcesAndFaq
          faq={[
          { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />



        <RelatedLinks
          heading="関連ページ"
          intro="見積比較の準備から比較・判断まで、関連する情報をまとめました。"
          links={[
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書の各項目の意味と、比較判断に使える確認ポイントを解説。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電気料金見積比較の方法",
              description: "複数の見積を受け取ったときに、どう比較すべきかを解説。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "見積依頼前の準備全般を網羅したチェックリスト。",
            },
            {
              href: "/bill-check-diagnosis",
              title: "請求書確認ポイント診断",
              description: "見積依頼に必要な情報を請求書から確認するチェックリスト。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "いつ見積依頼を始めるべきかを更新時期から逆算して確認。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外に確認したい比較軸を整理。見積比較の精度を高める。",
            },
          ]}
        />

        <ContentCta
          heading="見積比較の前にリスクを試算する"
          description="見積依頼を始める前にシミュレーターで現行プランの上振れリスクを確認しておくと、比較の判断基準として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
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
