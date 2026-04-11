import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

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

const currentStatusItems = [
  {
    label: "現在の電力契約の基本情報（プラン名・電力会社・契約電力・契約期間）",
    note: "説明の出発点として、現行契約がどのような条件かを整理します。プラン名・電力会社・契約種別（高圧・低圧等）・契約電力（kW）・満了日を1枚の表にまとめると説明しやすくなります。",
  },
  {
    label: "直近12か月分の月次電気料金（総額・使用量・主要項目別内訳）",
    note: "月次の請求金額推移グラフがあると、「いつから・どのくらい上がったか」が視覚的に伝わります。前年同月比での増減額も示すと、上昇の実感を共有しやすくなります。",
  },
  {
    label: "電気料金が上昇している場合、その原因の特定（燃料費調整額・市場価格調整額・再エネ賦課金等）",
    note: "「なぜ上がったか」を説明できないと、見直しの必要性に説得力がありません。変動費項目ごとの金額推移を整理し、上昇原因を特定しておきましょう。",
  },
  {
    label: "年間電気料金の総額と、売上・原価に占める比率（電力コスト比率）",
    note: "「年間○○万円かかっている」という絶対額と、「原価の○%を占める」という相対的な大きさの両方を示すことで、見直しの優先度が伝わりやすくなります。",
  },
];

const riskItems = [
  {
    label: "シミュレーターを使った今後の上振れリスク試算結果",
    note: "現行プランのままだと今後どの程度のコスト上振れが起こりうるかを試算した結果を示します。「楽観シナリオ・標準シナリオ・悲観シナリオ」の3パターンで示すと理解が得やすくなります。",
  },
  {
    label: "現在のプランが固定型か市場連動型か、それぞれのリスク構造の説明",
    note: "市場連動型は上振れリスクが大きいこと、固定型は安定性が高いが割高になる可能性があることを簡潔に説明します。プラン選択の方向性の根拠になります。",
  },
  {
    label: "燃料費調整額に上限設定があるかどうか（上限なしの場合はリスクの大きさを明示）",
    note: "上限なしプランのリスクは、2021〜2022年の価格高騰局面の実績データで示すと説得力が増します。「過去の高騰局面では○○万円上振れした」という事実があれば有効です。",
  },
  {
    label: "契約の自動更新リスク（更新を見逃した場合の影響）",
    note: "「見直しをしない場合に起こりうること」を示すことで、意思決定を促す材料になります。自動更新で不利な条件が延長されるリスクを数値で示せると効果的です。",
  },
];

const comparisonItems = [
  {
    label: "2社以上の見積書（同一前提条件での比較）",
    note: "1社だけでは比較にならず、社内承認を得にくい場合があります。最低2〜3社の見積を揃え、同一前提条件での比較であることを明示してください。",
  },
  {
    label: "現行プランとの年間総額比較（削減見込み額・削減率）",
    note: "「現行より年間○○万円削減できる」という数字は意思決定の最大の根拠になります。変動費を含めた年間総額ベースで比較し、削減見込みの根拠も示すことが重要です。",
  },
  {
    label: "各プランの変動リスク比較（固定費・変動費の構成比、燃料費調整額の上限有無）",
    note: "単価だけでなく、リスク構造の違いを比較することで、単純な最安値選びではなく「自社に合ったリスク水準の選択」として説明できます。",
  },
  {
    label: "切替先電力会社の信頼性・実績情報（倒産リスク等）",
    note: "新電力の撤退・倒産リスクを懸念する声が出ることがあります。切替先の設立年・資本関係・実績を簡単に示しておくと安心感につながります。",
  },
  {
    label: "契約期間・中途解約条件の比較（各社の違いを明示）",
    note: "「縛り期間がどれくらいあるか」「中途解約時の違約金はいくらか」は特に経営者・法務担当が気にするポイントです。各社の条件を横断的に整理してください。",
  },
];

const internalProcessItems = [
  {
    label: "稟議・決裁に必要な書類フォーマットを確認・用意している",
    note: "社内の稟議書フォーマットに合わせて資料を準備することで、担当部門の手戻りを減らせます。見積書の原本・比較表・説明資料をセットで提出できるようにしてください。",
  },
  {
    label: "関係部署（経理・経営企画・法務・施設管理等）への事前根回しが済んでいる",
    note: "稟議で突然反対意見が出ることを防ぐため、意思決定に関わる部署へ事前に内容を共有し、懸念事項を把握・対処しておくことが有効です。",
  },
  {
    label: "切替スケジュールと手続きの工数を整理している",
    note: "承認後に「いつまでに、誰が、何をするか」を整理しておくと、決裁後に素早く動けます。切替完了まで通常1〜2か月かかる点を踏まえたスケジュールを準備してください。",
  },
  {
    label: "切替後のモニタリング方法（コスト効果確認の仕組み）を説明できる",
    note: "「切り替えた後にきちんと効果を検証します」という説明があると、意思決定者の不安を軽減しやすくなります。月次のコスト確認方法を簡単に示すことを推奨します。",
  },
];

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
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
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
          <h2 className="text-xl font-semibold text-slate-900">① 現状確認：揃えておくべき情報（4項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「現在どのような状況か」を示す情報です。請求書と契約書から整理できます。
          </p>
          <div className="mt-4 space-y-3">
            {currentStatusItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">② リスク説明：上振れリスクの試算と根拠（4項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「このままにしておくとどうなるか」を示す情報です。シミュレーターの活用が有効です。
          </p>
          <div className="mt-4 space-y-3">
            {riskItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            リスク試算にはサイト内の{" "}
            <Link href="/simulate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              シミュレーター
            </Link>{" "}
            を活用してください。現行プランの条件を入力すると上振れリスクを数値で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">③ 比較資料：見積比較と判断根拠（5項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「なぜこの選択肢を選ぶか」の根拠となる情報です。複数社の見積書をもとに整理します。
          </p>
          <div className="mt-4 space-y-3">
            {comparisonItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-sky-100 bg-sky-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-sky-300 bg-white text-xs text-sky-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">④ 社内プロセスの準備（4項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「スムーズに意思決定してもらうための準備」です。根回し・スケジュール・フォローアップの整理が含まれます。
          </p>
          <div className="mt-4 space-y-3">
            {internalProcessItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
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
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "現状説明に使う請求書の読み方と確認ポイントを解説。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
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
      <div className="mt-6">
        <CategoryNextStepCta slug="internal-explanation-preparation-checklist" />
      </div>
    </main>
  );
}
