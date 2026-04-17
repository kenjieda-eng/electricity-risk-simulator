import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "法人の電力契約更新の6か月前にやること｜早めに始める見直し準備";
const pageDescription =
  "法人の電力契約更新を6か月前から準備するメリットと具体的な手順を解説。情報収集・市場調査・社内調整の各フェーズを時系列で整理し、3か月前の見積取得に向けたロードマップを示します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 更新 6か月前",
    "法人 電力契約 更新 準備",
    "電力契約 見直し 早め",
    "法人 電気料金 契約更新 スケジュール",
    "電力 相見積もり 準備",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/contract-renewal-6-months-before",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contract-renewal-6-months-before",
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

const phases = [
  {
    timing: "6か月前",
    title: "現行契約の全体把握",
    tasks: [
      "契約書を取り出し、契約満了日・自動更新条項・更新拒否の申出期限を確認する",
      "中途解約条項の有無と、違約金の計算方法・予告期間を確認する",
      "現行の料金体系（固定単価か市場連動か）を整理する",
      "燃料費調整額・市場価格調整額・容量拠出金の扱いを契約書で確認する",
      "現行の電力会社・契約メニュー名・高圧/特高の区分を記録する",
    ],
  },
  {
    timing: "5〜5.5か月前",
    title: "使用実績データの整理",
    tasks: [
      "直近12〜24か月分の請求書を収集する",
      "月別の使用電力量（kWh）・最大需要電力（kW）・請求金額を一覧化する",
      "季節変動（夏冬と春秋の差）を確認する",
      "供給地点特定番号（22桁）を請求書から確認・記録する",
      "スマートメーターの有無と、30分値データの取得可否を確認する",
    ],
  },
  {
    timing: "4〜5か月前",
    title: "市場・料金動向の調査",
    tasks: [
      "電気料金の最新動向（燃料費調整額の推移、規制料金の改定状況）を調べる",
      "市場連動型プランの現状リスクを確認する（JEPXスポット価格の推移）",
      "競合している電力会社のメニュー構成を概観する",
      "業界団体・業種別の電気料金水準を参考に自社の位置づけを確認する",
      "省エネ・デマンドコントロールによるコスト削減余地を概算する",
    ],
  },
  {
    timing: "3〜4か月前",
    title: "社内調整と見直し方針の確定",
    tasks: [
      "電気料金見直しの必要性を上位部門・経営層に共有する",
      "見直し方針（コスト優先か安定性優先か）を関係者間で合意する",
      "稟議・承認フローを確認し、スケジュールを逆算する",
      "見積取得・比較・決裁・手続き完了の各マイルストーンを設定する",
      "担当者を明確にし、外部への窓口（見積依頼先とのやりとり）を決める",
    ],
  },
];

export default function ContractRenewal6MonthsBeforePage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電力契約更新の6か月前にやること｜早めに始める見直し準備"
        description="法人の電力契約更新を6か月前から準備するメリットと具体的な手順を解説。情報収集・市場調査・社内調整の各フェーズを時系列で整理し、3か月前の見積取得に向けたロードマップを示します。"
        url="https://simulator.eic-jp.org/contract-renewal-6-months-before"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電力契約更新の6か月前にやること" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">更新6か月前にやること</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電力契約更新の6か月前にやること
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは「3か月前から」と言われますが、実際に余裕を持って進めるには6か月前からの準備が有効です。情報収集・市場調査・社内調整のフェーズを早めに終えておくことで、3か月前の見積取得以降をスムーズに進められます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約満了の6か月前から3か月前までに行う準備フェーズを時系列で整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>なぜ6か月前から動くと有利なのか</li>
            <li>6か月前〜3か月前の準備フェーズの内容</li>
            <li>現行契約の確認で見落としやすいポイント</li>
            <li>市場動向を把握するための情報源</li>
            <li>社内調整をスムーズに進めるための準備</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ6か月前から動くと有利なのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            3か月前からの見積比較・社内承認・手続きは最低限必要なプロセスです。しかし、その前段階の準備が不十分だと、見積取得の精度が低くなったり、社内合意に時間を取られて判断が遅れたりします。6か月前から動くことで得られるメリットは以下のとおりです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">見積精度の向上</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                使用実績データや契約情報を事前に整理しておくことで、見積依頼時に正確な前提条件を提示でき、比較可能な見積が返ってきやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">社内調整の余裕</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                経営層や関係部門への事前共有を済ませておくことで、稟議・承認フローが詰まるリスクを減らせます。急いで決めた契約は後から問題が出やすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場動向の把握</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                電気料金の市場環境を事前に理解しておくことで、見積を受け取ったときに「適切な水準か」を判断しやすくなります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">解約条件の事前確認</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                自動更新の申出期限や違約金の計算方法を把握しておくことで、切替コストを織り込んだ判断ができます。
              </p>
            </div>
          </div>
        </section>

        {phases.map((phase, index) => (
          <section
            key={phase.timing}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-sky-600">{phase.timing}</p>
                <h2 className="text-xl font-semibold text-slate-900">{phase.title}</h2>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {phase.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{task}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            6か月前の段階でシミュレーターを使う意味
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現行契約の条件（料金単価、燃料費調整額の扱い、使用量）を入力してシミュレーションを行うことで、「このまま契約を続けた場合の年間上振れリスク幅」を数値で確認できます。この結果は、経営層への見直し必要性の説明や、見積比較の優先度付けに活用できます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            3か月前の見積取得後に改めてシミュレーションを行うと、現行との差を具体的な金額で比較できるため、より説得力のある社内説明が可能になります。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            6か月前の準備で見落としやすいこと
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自動更新の申出期限が「2か月前」と定められているケースがあり、3か月前に気づいても手遅れになる場合がある</li>
            <li>使用実績データをまとめる際、月平均だけでなく月別のピーク需要も確認しておく必要がある</li>
            <li>供給地点特定番号は請求書のどこに記載されているか確認が必要で、見つかりにくいこともある</li>
            <li>省エネ投資や設備変更の予定がある場合、将来の使用量変化を見積比較に織り込む必要がある</li>
            <li>社内の承認フローが複数段階ある場合、各ステップの所要日数を事前に確認しておく</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            3か月前以降の流れとの接続
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            6か月前から3か月前の準備フェーズを終えると、次のステップは見積依頼の本格開始です。見積比較から契約手続き完了までの具体的な手順は{" "}
            <Link
              href="/what-to-do-3-months-before-electricity-contract-renewal"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約更新の3か月前にやること
            </Link>{" "}
            で確認できます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較の際に用意すべき情報の詳細は{" "}
            <Link
              href="/information-to-prepare-before-quotation-request"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              新電力の相見積もり前に整理したい情報
            </Link>{" "}
            でも整理しています。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="contract-renewal-6-months-before" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "市場連動プラン", "固定プラン", "最終保障供給"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "法人の電力契約更新の3か月前にやること",
              description: "見積依頼から契約手続き完了までの時系列手順。",
            },
            {
              href: "/information-to-prepare-before-quotation-request",
              title: "新電力の相見積もり前に整理したい情報",
              description: "見積精度を上げるために事前に用意する情報の整理。",
            },
            {
              href: "/electricity-contract-period-guide",
              title: "電力契約の契約期間の見方と注意点",
              description: "1年・2年・3年契約の違いと自動更新条項の確認。",
            },
            {
              href: "/mid-term-cancellation-clause-guide",
              title: "電力契約の中途解約条項の見方と注意点",
              description: "違約金と予告期間の確認方法。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直しのきっかけと判断基準の整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備で確認すべき全項目の一覧。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "6か月前の準備段階でプラン選択の軸を整理しておく。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクを今すぐ確認する"
          description="現行契約の条件でシミュレーションを行うことで、見直しの必要性を数値で把握できます。準備の第一歩として活用してください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
