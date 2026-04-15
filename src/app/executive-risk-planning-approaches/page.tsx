import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気料金リスクを事業計画に織り込む3つのアプローチ｜経営層向け";
const pageDescription =
  "固定費化・ヘッジ・分散の3つの考え方から、電力コストリスクを事業計画に反映する方法を比較します。";
const pageUrl = "https://simulator.eic-jp.org/executive-risk-planning-approaches";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電気料金 リスク管理", "電力コスト 事業計画", "電力 ヘッジ", "電気代 固定費化"],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const approachComparison = [
  {
    approach: "固定費化",
    costLevel: "やや高め（固定プレミアム）",
    riskReduction: "高い（予算確定性大）",
    difficulty: "低〜中",
    suitableFor: "中小企業・製造業・予算管理重視の企業",
  },
  {
    approach: "ヘッジ",
    costLevel: "市場次第（上限抑制が目的）",
    riskReduction: "中〜高（上限設定可能）",
    difficulty: "中〜高",
    suitableFor: "大企業・電力費比率が高い業種",
  },
  {
    approach: "分散",
    costLevel: "変動（全体でならす）",
    riskReduction: "中（局所リスク低減）",
    difficulty: "中",
    suitableFor: "多拠点企業・複数電源を持つ大企業",
  },
];

const riskTypes = [
  {
    type: "価格変動リスク",
    description: "燃料費調整・容量拠出金・市場価格の変動によって、電力の調達単価が想定より高くなるリスク。",
    impact: "電力費の増加→利益圧迫",
    managementApproach: "固定費化・ヘッジ",
  },
  {
    type: "供給途絶リスク",
    description: "災害・設備トラブル・電力不足等により、必要な電力を確保できなくなるリスク。",
    impact: "生産停止・事業継続不能",
    managementApproach: "分散調達・自家発電・BCP",
  },
  {
    type: "制度変更リスク",
    description: "再エネ賦課金・容量市場制度・省エネ規制等の政策・制度が変わることで、コスト構造が変化するリスク。",
    impact: "予期せぬコスト増・規制対応コスト",
    managementApproach: "情報収集・中計への感応度分析織り込み",
  },
];

const combinationPatterns = [
  {
    pattern: "固定費化＋分散",
    description: "主力拠点は固定プランで予算を確定させつつ、一部拠点は異なる電力会社との契約で調達先を分散。中規模製造業・チェーン店舗に適合。",
  },
  {
    pattern: "ヘッジ＋分散",
    description: "大口需要家が市場連動型を軸にしながら、電源（自社太陽光・PPA）を組み合わせることでリスクを分散。大企業・エネルギー集約業種向け。",
  },
  {
    pattern: "固定費化（一部）＋ヘッジ（一部）",
    description: "年間使用量の60〜70%を固定単価で確保し、残りを市場連動にすることで、安定性とコスト削減余地を両立させる方法。",
  },
];

export default function ExecutiveRiskPlanningApproachesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/for-executives" className="underline-offset-2 hover:underline">経営層・CFO向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気料金リスクを事業計画に織り込む3つのアプローチ</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電気料金リスクを事業計画に織り込む3つのアプローチ
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力コストは「受け身に支払うもの」から「能動的にマネジメントするリスク」へと位置づけを変える時代になっています。
          固定費化・ヘッジ・分散という3つのアプローチを比較し、自社の業種・規模・リスク許容度に合った戦略を選択することが、
          中期経営計画・予算策定の精度を高める鍵になります。本ページではその考え方を体系的に整理します。
        </p>
      </header>

      {/* セクション1: リスクの3分類 */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. 電力コストリスクの3分類</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力コストに関するリスクは大きく3種類に分類できます。それぞれ性質が異なるため、対処のアプローチも異なります。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">リスク区分</th>
                  <th className="p-3 text-left font-semibold">内容</th>
                  <th className="p-3 text-left font-semibold">主な影響</th>
                  <th className="p-3 text-left font-semibold">主な対処アプローチ</th>
                </tr>
              </thead>
              <tbody>
                {riskTypes.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.type}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.description}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-red-700 font-medium">{row.impact}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-sky-700 font-medium">{row.managementApproach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション2: アプローチ1 固定費化 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. アプローチ1：固定費化</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            固定単価契約（固定プラン）に切り替えることで、電力費を予算内に収める確実性を高めるアプローチです。
            市場価格の変動に左右されず、年度予算・中計に確定した電力費数値を織り込むことができます。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-semibold text-green-800">メリット</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-green-900">
                <li>・ 予算策定・中計への織り込みが容易</li>
                <li>・ 市場急騰時の突発的コスト増を回避</li>
                <li>・ 契約管理が比較的シンプル</li>
                <li>・ 経営会議での報告説明が容易</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="text-base font-semibold text-red-800">デメリット・注意点</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-red-900">
                <li>・ 市場価格が下落しても恩恵を受けにくい</li>
                <li>・ 固定単価には「安定のプレミアム」が含まれるため割高になる場合がある</li>
                <li>・ 長期固定契約は途中解約時にペナルティが生じる場合あり</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション3: アプローチ2 ヘッジ */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. アプローチ2：ヘッジ</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型契約を基本としながら、価格の上振れリスクを抑制するための手段を組み合わせるアプローチです。
            主に大口需要家・電力費比率の高い業種で採用されます。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-semibold text-green-800">メリット</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-green-900">
                <li>・ 市場価格が低い局面ではコスト削減効果を享受できる</li>
                <li>・ 上限（キャップ）設定により最悪シナリオを限定できる</li>
                <li>・ 固定費化より柔軟な設計が可能</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="text-base font-semibold text-red-800">デメリット・注意点</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-red-900">
                <li>・ 仕組みが複雑で担当者の知識が必要</li>
                <li>・ ヘッジ手数料・オプション料が発生する場合あり</li>
                <li>・ 大手・高圧以上の大口需要家向けの手法が多い</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション4: アプローチ3 分散 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. アプローチ3：分散</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電源・契約・拠点を分散させることで、特定のリスク要因への依存度を下げるアプローチです。
            自家発電（太陽光・コージェネ）、複数電力会社との分割契約、蓄電池の組み合わせが代表例です。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">
              <h3 className="text-base font-semibold text-green-800">メリット</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-green-900">
                <li>・ 単一電力会社・電源への依存度を下げられる</li>
                <li>・ 供給途絶リスクへの耐性が上がる</li>
                <li>・ 自家発電は長期的なコスト低減にもつながる</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="text-base font-semibold text-red-800">デメリット・注意点</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-red-900">
                <li>・ 初期投資・管理コストが発生する</li>
                <li>・ 複数契約の管理が複雑になる</li>
                <li>・ 分散投資の回収期間の見積もりが必要</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* セクション5: 3アプローチ比較表 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">5. 3アプローチの比較表</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">アプローチ</th>
                  <th className="p-3 text-left font-semibold">コスト水準</th>
                  <th className="p-3 text-left font-semibold">リスク低減効果</th>
                  <th className="p-3 text-left font-semibold">実行難易度</th>
                  <th className="p-3 text-left font-semibold">適合する企業規模・業種</th>
                </tr>
              </thead>
              <tbody>
                {approachComparison.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.approach}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.costLevel}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.riskReduction}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700">{row.difficulty}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{row.suitableFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション6: 事業計画への織り込み方 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">6. 事業計画への織り込み方（3シナリオ法）</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力コストを事業計画に反映する際は、最低3シナリオを用意することを推奨します。
            単一の「予算値」だけでは電気代の変動に対応できません。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "楽観シナリオ",
                color: "border-green-200 bg-green-50",
                labelColor: "text-green-700",
                content: "電力市場が安定〜下落。現状水準から▲5〜10%程度。再エネ普及・燃料価格安定が前提。",
              },
              {
                label: "標準シナリオ（基準ケース）",
                color: "border-slate-200 bg-slate-50",
                labelColor: "text-slate-700",
                content: "直近1〜2年の実績単価を基に±5%以内で推移。容量拠出金の段階的増加を織り込む。",
              },
              {
                label: "悲観シナリオ",
                color: "border-red-200 bg-red-50",
                labelColor: "text-red-700",
                content: "有事・燃料高騰・容量市場急騰等で+20〜35%上昇。BCP・対応施策とセットで計画に記載。",
              },
            ].map((s, i) => (
              <div key={i} className={`rounded-xl border p-4 ${s.color}`}>
                <h3 className={`text-base font-semibold ${s.labelColor}`}>{s.label}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション7: 組み合わせパターン */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">7. アプローチの組み合わせパターン</h2>
        <div className="space-y-3">
          {combinationPatterns.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.pattern}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-mid-term-plan-electricity",
              title: "中期経営計画に電力コストを織り込む方法",
              description: "中計の財務モデルに電力費の変動シナリオを反映する実践的な手順。",
            },
            {
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク",
              description: "電力コスト急騰をBCPと財務リスク管理の観点から整理します。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定単価型の違いと選び方",
              description: "電力契約の価格方式の違いとメリット・デメリットを比較解説します。",
            },
            {
              href: "/executive-electricity-kpi-dashboard",
              title: "電力コストのKPI管理と経営ダッシュボードの設計",
              description: "電力費を経営KPIとして定常監視するための指標とダッシュボードの設計ガイド。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="電力コストリスクを数値で把握する"
          description="シミュレーターで自社の電気代上昇シナリオを試算し、事業計画への反映に活用してください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "関連解説記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
