import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "取締役会向け電力リスク報告テンプレートの作り方｜経営層向け";
const pageDescription =
  "取締役会・経営会議で使える電力コスト・リスク報告のテンプレート構成と記載項目を整理します。";
const pageUrl = "https://simulator.eic-jp.org/executive-board-report-template";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["取締役会 電力リスク 報告", "経営会議 電気代 報告", "電力コスト 報告テンプレート"],
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

const reportSections = [
  {
    number: "①",
    title: "概況サマリー（エグゼクティブサマリー）",
    purpose: "1〜3行で今月・今四半期の電力費の状況を要約する",
    items: [
      "今月の電力費合計（前月比・前年同月比）",
      "予算比の過不足（例：予算比+8%）",
      "主な変動要因（単価上昇か使用量増加か）",
      "特記事項・アクションが必要な事項",
    ],
    tip: "意思決定者はここだけ読んで判断できる構成にする。数字と結論を必ずセットで記載すること。",
  },
  {
    number: "②",
    title: "コスト実績 vs 予算",
    purpose: "数値の詳細と推移を示す",
    items: [
      "当月実績・累計実績（予算対比表）",
      "kWh単価の推移グラフ（3〜6ヶ月）",
      "拠点別コスト実績と前年比",
      "使用量（kWh）と単価（円/kWh）の分解表示",
    ],
    tip: "「なぜ変動したか」を単価・使用量に分解して説明できると、経営層の理解が深まる。",
  },
  {
    number: "③",
    title: "リスク要因アップデート",
    purpose: "現在・今後の電力費に影響する外部要因を報告する",
    items: [
      "燃料費調整額の動向（直近3ヶ月の推移）",
      "容量拠出金の変更予定・告知状況",
      "再エネ賦課金の見通し",
      "市場価格（JEPX）の動向（市場連動型契約の場合）",
      "電力会社からの価格改定通知の有無",
    ],
    tip: "各リスク要因の「自社への影響額の試算値」を併記すると、取締役会での判断が容易になる。",
  },
  {
    number: "④",
    title: "対応施策の進捗",
    purpose: "承認済みの施策・検討中の施策の進捗を報告する",
    items: [
      "省エネ施策の実施状況と効果（kWh削減量・円換算）",
      "電力契約見直しの検討進捗",
      "太陽光・蓄電池等の設備投資の検討状況",
      "デマンド管理施策の効果",
    ],
    tip: "「施策名」「完了予定」「担当者」「効果の定量見込み」をセットで記載すること。",
  },
  {
    number: "⑤",
    title: "今後の見通しとアクション",
    purpose: "翌月〜翌四半期の予測と意思決定が必要な事項を提示する",
    items: [
      "翌月の電力費予測（上振れリスクシナリオ含む）",
      "年度通期見通しと予算乖離予測",
      "取締役会・経営会議に判断を求める事項",
      "次回報告予定のアジェンダ",
    ],
    tip: "「何を誰が、いつまでに判断すべきか」を明記する。承認事項は別紙で詳細を添付。",
  },
];

const failurePatterns = [
  {
    pattern: "数字の羅列で結論がない",
    fix: "各セクションの末尾に「したがって○○が必要」「○○という判断を求める」と必ず結論・アクションを記載する。",
  },
  {
    pattern: "前提条件が書かれていない",
    fix: "予測値・試算値には必ず「○○を前提とした試算」と注記する。前提が変われば数字も変わることを明示する。",
  },
  {
    pattern: "担当者レベルの詳細すぎる情報を記載する",
    fix: "取締役会資料は「経営判断に必要な情報」に絞る。詳細データは別紙・補足資料として添付する。",
  },
  {
    pattern: "最悪シナリオを示さない",
    fix: "「現状維持ならこうなる」「悪化した場合はこうなる」の2パターンを必ず示す。楽観シナリオのみでは意思決定を誤る。",
  },
  {
    pattern: "前回との比較がない",
    fix: "前回報告との差分（状況変化・リスクの増減）を冒頭に記載する。変化を追うことが取締役会報告の本質的役割。",
  },
];

export default function ExecutiveBoardReportTemplatePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/for-executives" className="underline-offset-2 hover:underline">経営層・CFO向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">取締役会向け電力リスク報告テンプレートの作り方</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          取締役会向け電力リスク報告テンプレートの作り方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力コスト・リスクを取締役会・経営会議に報告する仕組みを整備することは、コーポレートガバナンスの観点からも
          重要性が高まっています。しかし「どの情報を、どの構成で、どの頻度で報告すべきか」が明確でなければ、
          報告は形式的なものになりがちです。本ページでは、実効性のある報告テンプレートの設計方法を具体的に解説します。
        </p>
      </header>

      {/* セクション1: 取締役会報告に電力リスクを入れるべき理由 */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. 取締役会報告に電力リスクを入れるべき理由</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            コーポレートガバナンス・コード（CGコード）では、取締役会がリスク管理体制を監督する義務を明記しています。
            電力コストが財務上の重大リスクになり得る業種においては、電力リスクを取締役会の監督対象に含めることが
            ガバナンス上の要請に応えることになります。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "CGコードとの接点",
                body: "CGコードは「取締役会は経営における重要なリスクを適切に監督すべき」と求めています。電力費が売上高比2%超の業種では、重要なリスク項目として取締役会に報告・監督される体制が望まれます。",
              },
              {
                title: "ESG・統合報告書への接続",
                body: "電力コスト・エネルギー消費量の管理状況は、ESG評価・統合報告書での開示事項と直結します。取締役会が関与している姿勢を示すことで、投資家・格付機関への説明力が高まります。",
              },
              {
                title: "意思決定の質を上げる",
                body: "経営会議レベルで電力リスクを定常的に確認・議論することで、省エネ投資・契約見直し・BCP対応の判断を適切なタイミングで下せるようになります。事後対応から事前対応へのシフトが可能になります。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション2: 推奨テンプレート構成（5セクション） */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 報告テンプレートの推奨構成（5セクション）</h2>
        <p className="text-sm leading-7 text-slate-700 sm:text-base">
          以下の5セクション構成が、取締役会・経営会議での電力リスク報告の標準テンプレートとして推奨されます。
        </p>
        <div className="space-y-4">
          {reportSections.map((section, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="shrink-0 rounded-full bg-sky-600 text-white font-bold text-sm w-8 h-8 flex items-center justify-center">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">目的：{section.purpose}</p>
                  <ul className="mt-3 space-y-1">
                    {section.items.map((item, j) => (
                      <li key={j} className="text-sm leading-7 text-slate-700 flex gap-2">
                        <span className="text-sky-600 font-bold shrink-0">▸</span>{item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 rounded-lg bg-amber-50 border border-amber-200 p-3">
                    <p className="text-xs text-amber-800"><strong>実務Tip：</strong>{section.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セクション3: 報告頻度の考え方 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 報告頻度の考え方</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力リスク報告の頻度は、企業規模・業種・リスク水準によって異なりますが、以下が基本的な考え方です。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">報告の種類</th>
                  <th className="p-3 text-center font-semibold">頻度</th>
                  <th className="p-3 text-left font-semibold">主な内容</th>
                  <th className="p-3 text-left font-semibold">対象会議体</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["定例報告（通常時）", "四半期", "コスト実績・リスク要因・施策進捗・見通し", "取締役会・経営会議"],
                  ["月次確認報告", "月次", "電力費実績・予算差異・単価動向", "経営会議（情報共有レベル）"],
                  ["臨時報告（異常時）", "随時", "急騰・供給不安・制度変更発表等の重大事象", "取締役会・経営会議（緊急開催も含む）"],
                  ["年次見直し報告", "年1回", "年間総括・翌年度の電力コスト戦略・契約見直し方針", "取締役会"],
                ].map(([type, freq, content, meeting], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{type}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-700">{freq}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{content}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{meeting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション4: 1ページサマリーの作り方 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. 1ページサマリーの作り方</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            取締役の多くは多忙であり、詳細資料を読む時間を確保できない場合があります。
            報告資料の冒頭に「1ページサマリー」を設けることが実務上有効です。
          </p>
          <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-5">
            <p className="text-xs font-bold text-slate-500 mb-3">【1ページサマリーの標準レイアウト例】</p>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                { area: "左上：概況（3行）", content: "今月の電力費：○○万円（予算比+○%・前年比+○%）。主因：kWh単価の上昇（＋○円/kWh）。緊急対応不要だが来月以降の単価動向を注視中。" },
                { area: "右上：主要KPI（数字）", content: "当月電力費、kWh単価、予算消化率、デマンドピーク、前年同月比——の5数値をシンプルな表で記載。" },
                { area: "左下：リスク要因（箇条書き）", content: "現在の主なリスク要因3つを1行ずつ記載。各リスクの影響額の概算も付記する。" },
                { area: "右下：アクション（判断事項）", content: "今回の取締役会・経営会議で承認・確認が必要な事項を明記。担当・期限をセットで記載する。" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
                  <p className="text-xs font-semibold text-sky-700">{item.area}</p>
                  <p className="mt-1 text-xs text-slate-600 leading-6">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* セクション5: よくある失敗パターン */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">5. よくある失敗パターンと改善策</h2>
        <div className="space-y-3">
          {failurePatterns.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-start gap-3">
                <span className="shrink-0 text-red-500 font-bold text-sm mt-0.5">✗</span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">失敗パターン：{item.pattern}</h3>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    <strong className="text-sky-700">改善策：</strong>{item.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セクション6: 経営会議と取締役会での内容の差別化 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">6. 経営会議と取締役会での内容の差別化</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            経営会議と取締役会は役割が異なるため、電力リスク報告の内容・深度も変えることが望ましいです。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">会議体</th>
                  <th className="p-3 text-left font-semibold">主な役割</th>
                  <th className="p-3 text-left font-semibold">電力リスク報告のポイント</th>
                  <th className="p-3 text-left font-semibold">適切な詳細度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "経営会議（月次）",
                    "業務執行の意思決定・進捗管理",
                    "月次実績・詳細な変動要因・施策の実施状況・翌月予測",
                    "詳細（データ・グラフを含む）",
                  ],
                  [
                    "取締役会（四半期）",
                    "経営の監督・重要事項の承認",
                    "四半期サマリー・主要リスクの変化・承認が必要な施策・中長期の見通し",
                    "サマリー中心（詳細は補足資料）",
                  ],
                ].map(([meeting, role, focus, detail], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{meeting}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{role}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-700">{focus}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション7: 経営層のアクションアイテム */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">7. 担当者への指示事項（次ステップ）</h2>
        <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>本ページの5セクション構成を基に、自社向けの電力リスク報告テンプレートのドラフトを作成させる</li>
          <li>現在の取締役会・経営会議の定例アジェンダに電力リスクの報告枠を設定する</li>
          <li>月次電力費データの収集フローと、経営会議への提出締め切りを定めたルールを整備させる</li>
          <li>初回報告に向けて、直近3年分の電力費実績・kWh単価推移・予算比データを整理させる</li>
          <li>報告テンプレートを試用した後、3ヶ月をめどにフォーマットの改善点を確認する</li>
        </ol>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "経営会議の議題として設定すべき電力リスクの論点を整理します。",
            },
            {
              href: "/executive-electricity-kpi-dashboard",
              title: "電力コストのKPI管理と経営ダッシュボードの設計",
              description: "電力費を経営KPIとして定常監視するための指標とダッシュボードの設計ガイド。",
            },
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "電力費上昇がEBITDA・営業利益率に与える財務インパクトを試算するフレームワーク。",
            },
            {
              href: "/executive-peer-cost-benchmarking",
              title: "同業他社との電力コスト比較の進め方",
              description: "業界平均・競合他社との電力費比較に使える情報源と分析の5ステップ。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直し、まず何から始めるか",
              description: "取締役会報告の後に担当者に指示する契約見直しの進め方と優先順位。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="電力コストの実態を数値で把握する"
          description="シミュレーターで自社の電気代リスクを試算し、取締役会報告の数値の根拠にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "関連解説記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
