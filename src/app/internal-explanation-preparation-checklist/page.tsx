import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";

const pageTitle =
  "社内説明準備チェックリスト｜電力契約見直しの稟議・報告前に揃えたい情報";
const pageDescription =
  "電力契約の見直しを社内で説明・稟議する前に揃えておくべき情報・資料・論点をチェックリスト形式で整理。上長・経営層・経理への説明をスムーズに進めるための実務準備ガイドです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 社内説明",
    "電気料金 稟議 準備",
    "電力 見直し 社内 報告",
    "法人 電気料金 稟議書",
    "電力契約 変更 社内承認",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/internal-explanation-preparation-checklist",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/internal-explanation-preparation-checklist",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const qaItems = [
  {
    question: "新電力に切り替えて、供給が不安定になることはないか？",
    answer: "電力の送配電（物理的な供給）は従来の一般送配電事業者が引き続き担います。新電力への切替後も、停電リスクは切替前と変わりません。新電力は「電力の小売（誰から買うか）」の変更です。",
  },
  {
    question: "新電力会社が倒産した場合はどうなるか？",
    answer: "新電力が事業撤退・倒産した場合でも、電力は最終保障供給として一般送配電事業者から引き続き供給されます。ただし、最終保障供給は通常より単価が高い傾向があるため、早急に新たな契約先を決める必要があります。",
  },
  {
    question: "見直し後に元の電力会社に戻ることはできるか？",
    answer: "契約条件によりますが、通常は他社へ移ることが可能です。ただし、中途解約時の違約金や、元の会社での新規申込み手続きが必要な場合もあります。",
  },
  {
    question: "見積の単価が安くても、後から上がる可能性はないか？",
    answer: "固定型プランは契約期間中の電力量単価が原則変わりませんが、燃料費調整額・容量拠出金などの変動要素は変わる可能性があります。変動費項目の上限設定を確認することが重要です。",
  },
];

export default function InternalExplanationPreparationChecklistPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">社内説明準備チェックリスト</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          社内説明準備チェックリスト
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しを社内で進めるためには、担当者が上長・経営層・経理部門などに対して「なぜ見直すのか」「どの会社に切り替えるのか」「どれくらい節約できるのか」を的確に説明する必要があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、社内説明・稟議・報告の前に揃えておくべき情報・資料・論点を4カテゴリのチェックリスト形式で整理します。「何を用意すれば説明できるか」を体系的に把握できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>現状確認：現行契約・料金推移・コスト比率のまとめ方</li>
            <li>リスク説明：上振れリスクの試算と説明根拠の作り方</li>
            <li>比較資料：見積比較表と判断根拠の整理方法</li>
            <li>社内プロセス：稟議・根回し・切替スケジュールの準備</li>
            <li>よくある反対意見と対応案</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明の基本構成</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約見直しの社内説明は、以下の4つのパートで構成するとまとまりやすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, title: "現状と課題", body: "現在いくら払っているか・なぜ上がっているか・このまま続くとどうなるか" },
              { step: 2, title: "見直しの方向性と比較結果", body: "どの会社のどのプランを選ぶか・比較結果はどうだったか・費用対効果はあるか" },
              { step: 3, title: "リスク評価", body: "切り替えることで何が変わるか・どんなリスクがあるか・それをどう管理するか" },
              { step: 4, title: "実行スケジュールと担当", body: "いつまでに何をするか・誰が担当するか・効果をどう確認するか" },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">準備チェックリスト（全17項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各項目をクリックしてチェックしてください。準備が整っている項目にチェックを入れることで、社内説明の準備完了度を確認できます。リスク試算には{" "}
            <Link href="/simulate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              シミュレーター
            </Link>{" "}
            を活用してください。
          </p>
          <div className="mt-4">
            <DiagnosisClient />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明でよくある反対意見と対応案</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            事前に想定質問への回答を準備しておくことで、説明の場での対応がスムーズになります。
          </p>
          <div className="mt-4 space-y-4">
            {qaItems.map((qa) => (
              <div key={qa.question} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Q. {qa.question}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">A. {qa.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">説明資料に使えるシミュレーター活用のポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターは現行プランのリスク試算に加え、複数のシナリオ（楽観・標準・悲観）での試算結果を示せるため、社内説明の「リスクセクション」に活用できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { title: "現状の確認", body: "現行プランの条件を入力し、今後の上振れリスク幅を年間ベースで試算。「なぜ見直すか」の根拠として使用。" },
              { title: "比較検討", body: "候補プランの条件で試算し、固定型・市場連動型の違いや、リスクシナリオ別のコスト差を比較。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            シミュレーターの操作方法は{" "}
            <Link href="/how-to" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              使い方ページ
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">準備度チェック結果の対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            17項目中のチェック数に応じた準備度の判定と、次に取るべき行動を整理しました。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">準備度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">判定</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">次にやること</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">0〜6項目（35%未満）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">準備不足</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">現状確認パートの「請求書・契約書の確認」から着手。シミュレーターでリスク試算を優先。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">7〜12項目（35〜70%）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">準備中</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">未完了の項目を特定し、見積比較資料・リスク説明資料を優先して整備する。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">13〜17項目（70%以上）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">説明可能</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">社内説明・稟議を進めるのに十分な準備ができています。想定質問への回答も準備して臨みましょう。</td>
              </tr>
            </tbody>
          </table>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="社内説明の準備に役立つ関連ページをまとめました。"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "見直し全体の準備チェックリストを網羅的に確認。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "現状説明に使う請求書の読み方と確認ポイントを解説。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "比較資料作成に使う見積書の読み方を解説。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電気料金見積比較の方法",
              description: "複数の見積を受け取ったときの比較方法を整理。",
            },
            {
              href: "/bill-check-diagnosis",
              title: "請求書確認ポイント診断",
              description: "現状説明のために請求書で確認すべき項目を診断。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "見積を依頼する前に揃えておくべき情報・資料を確認。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで社内説明の根拠データを作る"
          description="現行プランの上振れリスクをシミュレーターで試算し、社内説明の「リスクセクション」に活用してください。数値による説明が意思決定を後押しします。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
