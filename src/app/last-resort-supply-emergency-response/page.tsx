import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "最終保障供給に入りそうなときの対応手順｜早期発見と切替準備";
const pageDescription =
  "電力会社との契約が失効しそうな場合や最終保障供給に移行しそうな場合の対応手順を解説。早期察知のポイント、連絡先の確認、代替供給先の確保手順を詳しく説明します。";

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

const warningSignals = [
  {
    signal: "電力会社から燃料費調整額の上限超過に関する通知が届く",
    detail:
      "上限超過分を電力会社が吸収し続けている状態は、電力会社の経営を圧迫しており、最悪の場合は事業継続困難につながるリスクシグナルです。",
  },
  {
    signal: "電力会社の契約・供給に関する通知文書が届く",
    detail:
      "「供給条件の変更」「契約の見直しについて」などの通知は、状況が変化していることを示している可能性があります。内容を確認し、疑問があれば直接問い合わせます。",
  },
  {
    signal: "ニュースや業界情報で電力会社の経営悪化が報道される",
    detail:
      "契約先の電力会社について、経営状況に関する報道がある場合は早めに対応を検討します。",
  },
  {
    signal: "料金の請求が届かない・連絡が取れない",
    detail:
      "通常通りの請求書が届かない、担当者への連絡が繋がりにくいなどの異変は、迅速な確認が必要なシグナルです。",
  },
];

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

export default function LastResortSupplyEmergencyResponsePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給に入りそうなときの対応手順
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給に移行すると、電気料金が通常より大幅に高くなります。できる限り短期間で通常の小売契約に戻ることが重要ですが、そのためには早期発見と迅速な行動が不可欠です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、最終保障供給に入りそうな兆候を早期に察知するためのシグナルと、察知してから代替契約を結ぶまでの対応手順を5ステップで整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>最終保障供給に近づいているサインの早期発見方法</li>
            <li>発覚から代替契約締結までの5ステップ</li>
            <li>各ステップで優先すべき行動</li>
            <li>最終保障供給期間中にすべきこと</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給に近づいているサインを早期に察知する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に至る前に、以下のような兆候に注意することで早期対応が可能になります。
          </p>
          <div className="mt-4 space-y-3">
            {warningSignals.map((item) => (
              <div
                key={item.signal}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">⚠ {item.signal}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
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
              href: "/how-to-read-business-electricity-quotation",
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
      <div className="mt-6">
        <CategoryNextStepCta slug="last-resort-supply-emergency-response" />
      </div>
    </main>
  );
}
