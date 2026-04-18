import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "最終保障供給に入りそうなときの対応手順｜タイムラインと警告サイン一覧";
const pageDescription =
  "最終保障供給に移行しそうな場合の対応手順を解説。警告サインの早期察知、発覚から切替完了までの緊急タイムライン、6項目チェックリストを掲載します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 対応 手順",
    "電力 契約 失効 対処",
    "最終保障供給 早期発見",
    "電力会社 倒産 対応",
    "最終保障供給 切替準備",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/last-resort-supply-emergency-response",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-emergency-response",
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

const responseSteps = [
  {
    step: "STEP 1：現状確認と初期対応",
    actions: [
      "電力会社または一般送配電事業者に連絡を取り、供給継続の可否を確認する。",
      "最終保障供給制度の発動状況・移行予定を確認する。",
      "使用量データ（過去12〜24カ月、できれば30分コマ別）を取得・準備する。",
    ],
  },
  {
    step: "STEP 2：社内報告と意思決定体制の確立",
    actions: [
      "経営層・上位管理者に速やかに報告する（報告内容は別ページを参照）。",
      "代替先確保に向けた意思決定体制と予算枠を確保する。",
      "担当者と権限の明確化を行い、スピーディな交渉・決定ができる体制を整える。",
    ],
  },
  {
    step: "STEP 3：代替供給先の打診・見積依頼",
    actions: [
      "複数の電力会社・大手新電力に使用量データを提供し、見積を依頼する。",
      "現在の契約条件（電圧区分、使用量規模）を正確に伝える。",
      "見積の回答期限を明確に設定し、早期の回答を求める。",
    ],
  },
  {
    step: "STEP 4：見積比較と候補選定",
    actions: [
      "年間総コスト（基本料金＋電力量料金＋燃調＋賦課金）で比較する。",
      "供給安定性・財務健全性・サポート体制も評価する。",
      "経営層への比較表提示と最終候補の承認を得る。",
    ],
  },
  {
    step: "STEP 5：契約締結と切替手続き",
    actions: [
      "選定した電力会社と契約条件を確定する。",
      "一般送配電事業者への切替手続きを完了する（手続きには数週間かかる場合があります）。",
      "最終保障供給からの脱出日を確認し、関係者に周知する。",
    ],
  },
];

const checklistItems = [
  "現行の電力契約書と直近12カ月分の請求書を手元に用意している",
  "供給地点特定番号（22桁）を把握している（見積依頼に必須）",
  "月間使用量と最大需要電力（kW）のデータを準備している",
  "最終保障供給の適用開始日と上限期間（通常9カ月）を確認している",
  "3社以上の電力会社・新電力に見積依頼を送付済みである",
  "経営層への第一報を完了し、切替完了の目標期日を合意している",
];

const faqItems = [
  {
    question: "最終保障供給に移行しそうだと気づいたら最初に何をすべきですか？",
    answer: "まず現在の電力会社または一般送配電事業者に連絡し、供給継続の可否と最終保障供給移行の見通しを確認します。次に使用量データ（月間・30分コマ別）を取得し、複数の代替電力会社への見積依頼を即時に開始することが優先です。",
  },
  {
    question: "最終保障供給への移行に気づく「警告サイン」にはどのようなものがありますか？",
    answer: "契約中の電力会社から「供給継続困難」「新規受付停止」「契約解除予告」などの通知が届いた場合が主な警告サインです。また、電力会社の財務悪化・倒産報道も早期対応のトリガーになります。年に一度は現行電力会社の経営状況を確認することが推奨されます。",
  },
  {
    question: "最終保障供給の適用期間内に移行先が見つからない場合はどうなりますか？",
    answer: "供給期間の上限（通常9か月程度）が来ても代替先が見つからない場合は、電力供給が停止するリスクがあります。この事態を避けるためにも、発覚後できる限り早く複数社への相談を開始し、必要であれば電力コンサルタントに支援を依頼することも選択肢になります。",
  },
];

const sources = [
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "最終保障供給の移行手続き・対応に関する情報" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力供給継続制度・最終保障供給の実務ガイド" },
  { name: "新電力ネット", url: "https://pps-net.org", description: "電力会社の撤退・倒産情報" },
];

export default function LastResortSupplyEmergencyResponsePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/last-resort-supply-emergency-response"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "最終保障供給を知る", url: "https://simulator.eic-jp.org/articles/last-resort-supply" },
          { name: "入りそうなときの対応手順" },
        ]}
        faq={faqItems}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/last-resort-supply" className="underline-offset-2 hover:underline">最終保障供給を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給の緊急対応</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給に入りそうなときの対応手順
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給に移行すると、電気料金が通常より大幅に高くなります。できる限り短期間で通常の小売契約に戻ることが重要ですが、そのためには早期発見と迅速な行動が不可欠です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、最終保障供給に入りそうな兆候を早期に察知するための警告サイン、発覚から代替契約を結ぶまでの緊急タイムライン、そして担当者が確認すべき6項目チェックリストを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>最終保障供給に近づいている警告サイン一覧</li>
            <li>発覚から切替完了までの緊急対応タイムライン</li>
            <li>各ステップで優先すべき行動</li>
            <li>担当者が確認すべき6項目チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">

        {/* Table 1: 緊急対応タイムライン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            緊急対応タイムライン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給への移行が確実・濃厚になった時点から、以下のタイムラインで動くことが重要です。スピードが早期離脱のカギです。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">時期</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">アクション</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">担当</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">必要な情報・資料</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">ゴール</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">発覚直後（1〜3日）</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">状況把握・社内報告</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">総務／施設管理</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">現行契約書・請求書</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">経営層への第一報</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-orange-700">1週間以内</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">見積依頼開始</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">総務／調達</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">供給地点番号・使用量</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">3社以上に見積依頼</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-700">2〜4週間</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">見積比較・候補選定</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">総務／経理</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">見積書・契約条件</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">切替先の決定</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-700">1〜2ヶ月</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">切替手続き完了</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">総務</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">申込書・供給開始日</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">最終保障からの離脱</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-sky-700">切替後</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">請求書確認・社内報告</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">経理</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">新契約の請求書</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">正常化の確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Table 2: 警告サイン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給に入る警告サイン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下のサインを早期に察知することで、最終保障供給への移行前に代替先の確保を開始できます。緊急度に応じて即座に動いてください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">警告サイン</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">具体的な状況</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">対応の緊急度</th>
                  <th className="border border-slate-300 px-4 py-2 text-left font-semibold text-slate-900">確認先</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">電力会社から撤退通知</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">契約先が事業撤退を通知</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">最高</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">電力会社／送配電</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">契約満了の見落とし</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">更新手続きの期限切れ</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-red-700">最高</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">契約書の確認</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">受付停止の情報</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">候補先が新規受付を停止</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-orange-700">高</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">電力会社HP</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">見積が取れない</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">複数社から見積拒否</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-orange-700">高</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">代理店／コンサル</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">異常な単価提示</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">通常の2倍以上の提示</td>
                  <td className="border border-slate-300 px-4 py-2 font-semibold text-slate-600">中</td>
                  <td className="border border-slate-300 px-4 py-2 text-slate-700">他社との比較</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            対応手順：5ステップ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給への移行が確実・濃厚になった時点から、以下の5ステップで対応します。スピードが重要です。
          </p>
          <div className="mt-4 space-y-4">
            {responseSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-slate-900">{item.step}</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                  {item.actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            緊急時のチェックリスト（6項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給への移行が判明した直後に確認すべき6項目です。すべてにチェックが入るまでが初動対応です。
          </p>
          <div className="mt-4 space-y-2">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-slate-400 bg-white text-xs font-bold text-slate-500">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給期間中にすべきこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に入ってからも、以下の対応を並行して進めます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">供給期間の残日数を常に把握する：</span>
              供給期間の上限（通常9カ月）までの残余日数をカレンダーで管理し、逆算して代替契約の完了期限を設定します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">追加コストを毎月把握する：</span>
              通常契約時との差額を毎月集計し、早期脱出の緊急性を定量的に示します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">複数の候補と並行交渉する：</span>
              一社に絞って交渉すると交渉力が弱まります。複数社と並行して進め、最終的に最も有利な条件を引き出します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">一般送配電事業者との連絡を維持する：</span>
              新たな供給開始日の調整など、切替手続きで一般送配電事業者との連絡が必要になります。担当窓口を把握しておきます。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再発防止のための定期的な管理体制
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給リスクを再度避けるために、以下の管理体制を日常的に維持します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約先の電力会社の経営状況を年一回以上確認する（決算公告、信用情報など）。</li>
            <li>契約更新時期の半年前から代替候補の見積収集を始める。</li>
            <li>代替候補リスト（自社の電圧区分・使用量に対応できる電力会社のリスト）を常に更新する。</li>
            <li>電力担当者が変わる際に、上記の管理事項を確実に引き継ぐ。</li>
          </ul>
        </section>

        <SourcesAndFaq sources={sources} faq={faqItems} publishedAt="2026-04-10" />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "最終保障供給制度の基本的な仕組みと概要。",
            },
            {
              href: "/last-resort-supply-internal-explanation",
              title: "最終保障供給を社内説明するときのポイント",
              description: "経営層・関係部門への説明方法。",
            },
            {
              href: "/last-resort-supply-comparison-positioning",
              title: "最終保障供給を比較検討の中でどう位置づけるか",
              description: "代替先選定時の判断基準の整理。",
            },
            {
              href: "/last-resort-supply-extra-high-voltage",
              title: "特別高圧で最終保障供給を使うときの注意点",
              description: "大規模需要家での対応の留意点。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "定期的な管理体制の確認項目。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "代替先選定時の見積比較の方法。",
            },
          ]}
        />

        <ContentCta
          heading="代替供給先の候補をシミュレーターで試算する"
          description="現在の使用量をもとに、代替候補の電力プランの年間コストをシミュレーターで比較確認できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
