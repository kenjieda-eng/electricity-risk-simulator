import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";


const pageTitle =
  "電気料金見直しを社内で説明するときのポイント｜稟議・共有で押さえたい論点";
const pageDescription =
  "電力契約の見直し結果を社内で説明するときに押さえたい論点を整理。なぜ見直すのか、何を比較したのか、リスクの伝え方、シミュレーター結果の使い方まで、稟議・上司説明に使えるポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 見直し 社内説明",
    "電力契約 稟議 ポイント",
    "電気代 見直し 上司 説明",
    "電力 切替 社内説明 資料",
    "法人 電力契約 稟議書",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-explain-electricity-cost-review-internally",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-explain-electricity-cost-review-internally",
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

const explanationStructure = [
  {
    step: "1",
    heading: "なぜ見直しを行うのか",
    content:
      "最初に、見直しの背景と目的を明確にします。「コスト削減」だけでなく、「契約更新時期が近い」「燃料費調整額が上昇傾向にある」「市場連動リスクを見直したい」など、具体的なきっかけを伝えると説得力が増します。",
    points: [
      "契約更新時期と現行契約の条件を簡潔に説明",
      "電気料金の推移（前年比や直近12か月の変動）を提示",
      "見直しの目的（コスト削減、リスク低減、条件改善など）を明記",
    ],
  },
  {
    step: "2",
    heading: "何を比較したのか",
    content:
      "比較検討の過程を示します。何社に見積を取り、どのような条件で比較したのかを整理することで、判断プロセスの透明性を確保できます。",
    points: [
      "見積を依頼した電力会社の数と選定理由",
      "比較の前提条件（使用量、契約電力、比較期間）",
      "比較対象のプランタイプ（固定プラン、市場連動プランなど）",
    ],
  },
  {
    step: "3",
    heading: "比較結果の要点",
    content:
      "比較結果は、年間総額での差額を中心に伝えるのが効果的です。単価だけでなく、調整費や契約条件まで含めた比較であることを示すと、判断の根拠として信頼性が高まります。",
    points: [
      "年間の総額試算での差額",
      "各候補プランの特徴（安い理由、リスク、条件差）",
      "推奨する選択肢とその理由",
    ],
  },
  {
    step: "4",
    heading: "リスクの説明",
    content:
      "コスト削減のメリットだけでなく、リスクについても正直に説明します。特に市場連動プランを推奨する場合は、上振れリスクの説明が不可欠です。固定プランの場合でも、燃料費調整額の変動リスクは触れておくのがよいでしょう。",
    points: [
      "市場連動の場合：高騰時にどこまで上振れしうるか",
      "固定の場合：燃料費調整額の変動リスクと上限の有無",
      "いずれの場合も：契約期間の拘束と中途解約条件",
    ],
  },
  {
    step: "5",
    heading: "推奨案と次のアクション",
    content:
      "最後に、推奨する選択肢と今後のスケジュールを提示します。承認者が「了解」を出しやすいよう、次に何をすればよいかを明確にしておくのがポイントです。",
    points: [
      "推奨するプランと選定理由の要約",
      "契約手続きに必要なスケジュール",
      "承認者に求めるアクション（承認・押印・追加検討事項など）",
    ],
  },
];

const audienceSpecificPoints = [
  {
    audience: "経営層・役員",
    focus: "年間コストのインパクトと経営リスクの観点",
    tips: [
      "金額は年間ベースで提示（月額では影響が小さく見えがち）",
      "リスクシナリオでの最大影響額を併記",
      "固定プランなら「安定性確保」、市場連動なら「コスト削減の可能性と許容リスク」を明確に",
    ],
  },
  {
    audience: "経理部門",
    focus: "予算管理への影響と会計処理の変更有無",
    tips: [
      "月次の請求額変動が予算に与える影響を試算",
      "経費計上のタイミングや会計処理に変更が生じないかを確認",
      "予備費の確保が必要かどうかを示す",
    ],
  },
  {
    audience: "施設管理部門",
    focus: "切替に伴う運用変更と供給の安定性",
    tips: [
      "切替時の停電リスクの有無を確認して報告",
      "切替後の問い合わせ先・請求書の変更点を整理",
      "設備面での変更が不要であることを明記（通常は不要）",
    ],
  },
  {
    audience: "自治体の庁内",
    focus: "入札・随意契約の手続きと議会説明",
    tips: [
      "調達方法（入札・プロポーザル・随意契約）の整理",
      "仕様書に盛り込むべき条件の検討",
      "住民・議会への説明を見据えた選定理由の記録",
    ],
  },
];

export default function HowToExplainElectricityCostReviewInternallyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">見直しの社内説明</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金見直しを社内で説明するときのポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは、比較検討だけでなく「社内でどう説明するか」が成否を分けることがあります。比較結果が良くても、説明がわかりにくければ承認が得られず、見直しの機会を逃してしまうケースも少なくありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電気料金見直しの結果を社内で説明するとき、稟議書を作成するとき、上司や経営層に報告するときに押さえておきたい論点を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>社内説明で押さえたい5つのステップ</li>
            <li>説明先（経営層・経理・施設管理・自治体庁内）別のポイント</li>
            <li>固定プランと市場連動プランの伝え方</li>
            <li>シミュレーター結果を説明資料として使う方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内説明で最初に押さえたいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しを社内で説明する際は、以下の構成で伝えるとスムーズです。承認者が知りたいのは「なぜ見直すのか」「何を比較したのか」「どれくらいの効果があるのか」「リスクはあるのか」「次に何をすればよいのか」の5点です。
          </p>
        </section>

        {explanationStructure.map((item) => (
          <section
            key={item.step}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                {item.step}
              </span>
              <h2 className="text-xl font-semibold text-slate-900">{item.heading}</h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {item.content}
            </p>
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">説明に含めたい内容</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            説明先別のポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            説明する相手によって、関心を持つポイントが異なります。以下は、主な説明先ごとに強調すべき観点をまとめたものです。
          </p>
          <div className="mt-4 space-y-4">
            {audienceSpecificPoints.map((item) => (
              <div
                key={item.audience}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.audience}</p>
                <p className="mt-1 text-xs text-slate-500">関心の中心：{item.focus}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  {item.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定と市場連動をどう伝えるか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランと市場連動プランの違いを社内で説明するときは、以下のように整理すると伝わりやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">観点</th>
                  <th className="p-3 text-left font-semibold text-slate-900">固定プラン</th>
                  <th className="p-3 text-left font-semibold text-slate-900">市場連動プラン</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">月々の安定性</td>
                  <td className="p-3 text-slate-700">安定（単価は一定）</td>
                  <td className="p-3 text-slate-700">変動あり（市場価格次第）</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">コスト水準</td>
                  <td className="p-3 text-slate-700">安定だがやや高めの傾向</td>
                  <td className="p-3 text-slate-700">平均は安い可能性あるが変動大</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">高騰リスク</td>
                  <td className="p-3 text-slate-700">限定的（調整費は別途変動）</td>
                  <td className="p-3 text-slate-700">大きい（数倍になるケースも）</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">予算管理</td>
                  <td className="p-3 text-slate-700">しやすい</td>
                  <td className="p-3 text-slate-700">難しい（予備費が必要）</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">社内説明</td>
                  <td className="p-3 text-slate-700">「安定性重視」で説明しやすい</td>
                  <td className="p-3 text-slate-700">リスク説明が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳しい比較は{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランと固定プランの違い
            </Link>{" "}
            で確認できます。固定プランが向く法人は{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              こちら
            </Link>
            、市場連動が向かないケースは{" "}
            <Link
              href="/businesses-not-suited-for-market-linked-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              こちら
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター結果を説明に使う考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターの診断結果は、社内説明で以下のように活用できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">「なぜ見直すのか」の根拠</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                現行契約条件での上振れリスク試算結果を提示。「このまま更新した場合、年間でこれだけ上振れする可能性がある」という形で使う。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">「どれだけ改善できるか」の示し方</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                候補プランの条件でシミュレーションした結果と現行の差額を提示。「この条件に切り替えた場合、年間でこれだけの差が出る」という形で比較する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">リスクの可視化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                市場連動プランの高騰シナリオ試算を提示し、「最悪ケースでこれだけ上がる」というリスク幅を数値で見せる。固定プランとの差が一目でわかる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">第三者的な判断材料</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                シミュレーター結果は客観的な数値であるため、担当者個人の意見ではなく「シミュレーション結果に基づく判断」として提示できる。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターの操作方法は{" "}
            <Link
              href="/how-to"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              使い方ページ
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "契約更新の3か月前にやること",
              description: "更新が近い法人向けの時系列での準備手順。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書の比較ポイントを項目別に確認。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "固定プランとの相性がよい法人の特徴。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "市場連動を慎重に考えるべきケースの整理。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "両プランの仕組みとリスクの差を比較。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーター結果を説明資料に活用する"
          description="現行契約と候補プランの条件でシミュレーションし、社内説明に使える数値資料を準備できます。"
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
