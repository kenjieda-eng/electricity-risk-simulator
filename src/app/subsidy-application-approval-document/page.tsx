import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "補助金申請を前提とした稟議書の書き方｜構成と数値の示し方";
const pageDescription =
  "省エネ・再エネ補助金の申請を前提とした法人向け稟議書の書き方を解説。補助金込みの投資回収計算、意思決定者が見るポイント、よくある差し戻し理由と対策をまとめました。電力コスト削減投資の社内承認を通すための実践ガイドです。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-application-approval-document";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "稟議書 補助金 書き方",
    "省エネ投資 稟議",
    "電力コスト削減 稟議書",
    "補助金 社内承認",
    "設備投資 稟議 例文",
    "投資回収計算 補助金込み",
    "再エネ導入 稟議書",
  ],
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

const documentStructure = [
  {
    section: "1. 件名",
    point: "「〇〇設備更新に係る投資承認申請（補助金活用）」のように、補助金活用が前提であることを件名に含める。",
    example: "例：「高効率空調設備更新投資に係る稟議（SII省エネ補助金活用）」",
  },
  {
    section: "2. 申請概要・目的",
    point: "何のための投資か、現状の課題（電気料金の負担額・上昇率・リスク）と解決策を端的に述べる。補助金の活用により実質負担が大幅に軽減される点を冒頭で示す。",
    example: "例：「電気料金の高騰（過去3年で年間〇〇万円増加）への対応として、補助金を活用した高効率空調への更新を行い、年間〇〇万円のコスト削減と回収期間〇年を実現する。」",
  },
  {
    section: "3. 現状と課題",
    point: "現行設備の老朽化・省エネ性能の低さ・電力コストへの影響を数値で示す。電気料金シミュレーターや請求書データを活用して具体的な金額を記載する。",
    example: "例：「現在の空調設備はXX年製で省エネ評価〇。年間電力消費量約〇万kWh、電気代コスト約〇〇万円のうち空調分は約〇〇万円を占める。」",
  },
  {
    section: "4. 投資内容・仕様",
    point: "導入する設備の仕様・メーカー・型番・設置台数・工事概要を記載。補助金の対象設備要件を満たすことを明記する。",
    example: "例：「導入予定：〇〇メーカー 高効率ビルマルチ〇台。SIIカタログ登録品（型番：〇〇）。COP〇以上、省エネ率〇%達成見込み。」",
  },
  {
    section: "5. 費用・補助金の内訳",
    point: "総工費・補助対象費用・見込み補助額・実質負担額を表形式で整理する。補助率・補助上限の根拠（公募要領のページ数等）も記載する。",
    example: "参照：次のテーブルを活用",
  },
  {
    section: "6. 投資回収計算",
    point: "①補助金なし／②補助金あり のパターンを並べて回収期間を比較する。電気料金の上昇シナリオ（現状維持・中程度上昇・高騰）ごとに感度分析を付けると説得力が増す。",
    example: "例：「補助金なしで回収〇年、補助金ありで回収〇年。年率5%の電気料金上昇シナリオでは回収期間がさらに〇年短縮。」",
  },
  {
    section: "7. 補助金申請スケジュール",
    point: "公募開始〜採択〜交付決定〜着工〜完工〜実績報告〜補助金受領の全体スケジュールを一覧化する。意思決定が遅れた場合の公募締め切りリスクを示す。",
    example: "例：「1次公募締切〇月〇日。社内承認が〇月〇日までに完了しない場合、次回（〇月）まで申請機会を逸失する。」",
  },
  {
    section: "8. リスクと対応策",
    point: "補助金が採択されなかった場合の対応（設備投資を延期・再申請・代替施策）を示す。採択率の目安や過去実績も記載できると理解が得られやすい。",
    example: "例：「万一不採択の場合、同設備をリース契約に切り替えることで初期投資なしでの導入が可能。」",
  },
  {
    section: "9. 添付書類",
    point: "見積書・公募要領（該当ページ抜粋）・省エネ計算書・省エネシミュレーション根拠資料を添付する。",
    example: "例：「添付①：〇〇社見積書（有効期限〇月〇日）、添付②：SII公募要領pp.〇〇-〇〇、添付③：省エネルギー計算書（案）」",
  },
];

const costTable = [
  { item: "設備費（機器本体）", amount: "〇〇〇万円" },
  { item: "工事費（撤去・設置）", amount: "〇〇万円" },
  { item: "設計費・諸経費", amount: "〇〇万円" },
  { item: "総投資額（税抜）", amount: "〇〇〇万円", bold: true },
  { item: "補助対象費用（見込み）", amount: "〇〇〇万円" },
  { item: "補助率", amount: "1/2（中小企業の場合）" },
  { item: "見込み補助額", amount: "▲〇〇万円", bold: true, green: true },
  { item: "実質負担額（概算）", amount: "〇〇〇万円", bold: true },
];

const paybackTable = [
  { scenario: "補助金なし・電気料金現状維持", payback: "約〇年〇ヵ月", note: "ベースケース" },
  { scenario: "補助金あり・電気料金現状維持", payback: "約〇年〇ヵ月", note: "補助金効果で〇年短縮" },
  { scenario: "補助金あり・電気料金年率3%上昇", payback: "約〇年〇ヵ月", note: "電気料金上昇でさらに短縮" },
  { scenario: "補助金あり・電気料金年率5%上昇", payback: "約〇年〇ヵ月", note: "高騰シナリオでも〇年以内に回収" },
];

const returnReasons = [
  { reason: "補助金の採択を前提とした意思決定になっている", fix: "「補助金が採択されなかった場合の代替案」を必ず記載し、採択が前提ではなく「採択された場合にメリットが大きい」という構成にする。" },
  { reason: "補助金の金額・補助率が確定値として書かれている", fix: "「公募要領に基づく見込み値（概算）」であることを明記し、確定額は採択後の交付決定通知で確認する旨を添える。" },
  { reason: "投資回収計算の根拠が不明確", fix: "電気料金の単価・使用量・削減量の計算根拠を別紙に整理し、参照できる形にする。シミュレーターの出力を添付するのも有効。" },
  { reason: "スケジュールの緊急性が伝わっていない", fix: "「〇月〇日までに承認がなければ今年度の公募に間に合わない」という具体的なデッドラインを赤字・太字で示す。" },
  { reason: "着工前申請の必要性が説明されていない", fix: "「補助金は着工前申請が原則であり、承認後に発注・着工する必要がある」ことを明記し、スケジュールの拘束条件を明確にする。" },
  { reason: "見積書の有効期限が記載されていない", fix: "添付する見積書の有効期限を必ず記載し、期限切れの場合の対応（再取得の可否）も書き添える。" },
];

export default function SubsidyApplicationApprovalDocumentPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-emerald-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          補助金申請を前提とした稟議書の書き方
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">構成と数値の示し方</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          省エネ・再エネ補助金を活用した設備投資は、社内の承認（稟議）が必要です。
          「補助金が採択された場合の実質負担額」「投資回収期間」「申請スケジュールの制約」を
          正確に伝える稟議書を作ることが、意思決定を早める鍵です。
          本ページでは補助金申請を前提とした稟議書の構成と、差し戻しを防ぐポイントを解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 稟議書の基本構成 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">稟議書の基本構成（9項目）</h2>
          <p className="mt-2 text-sm text-slate-600">
            補助金申請を前提とした稟議書は、通常の設備投資稟議に加えて「補助金の条件・スケジュール・リスク」を組み込む必要があります。
          </p>
          <div className="mt-4 space-y-3">
            {documentStructure.map((d, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-800">{d.section}</h3>
                <p className="mt-2 text-sm text-slate-700">{d.point}</p>
                <p className="mt-2 text-xs text-slate-500 italic">{d.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 費用・補助金内訳テーブル例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">費用・補助金内訳テーブルの例</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下はテーブルの構成例です。実際の金額は見積書と公募要領に基づいて記入してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">費用項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">金額（概算・税抜）</th>
                </tr>
              </thead>
              <tbody>
                {costTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className={`border border-slate-200 px-3 py-2 ${row.bold ? "font-semibold text-slate-800" : "text-slate-700"}`}>{row.item}</td>
                    <td className={`border border-slate-200 px-3 py-2 ${row.green ? "font-semibold text-emerald-700" : row.bold ? "font-semibold text-slate-800" : "text-slate-700"}`}>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 見込み補助額は「公募要領における補助率・上限額を根拠とした概算値」である旨を本文中に記載すること。
          </p>
        </section>

        {/* 投資回収計算テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">投資回収計算（シナリオ別）の示し方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金は今後も変動するため、「現状維持」「中程度上昇」「高騰」の3シナリオで回収期間を比較することが重要です。
            補助金の有無もセットで示すと、補助金活用の意義が経営層に伝わりやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">シナリオ</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">想定回収期間</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">備考</th>
                </tr>
              </thead>
              <tbody>
                {paybackTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-800">{row.scenario}</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{row.payback}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            シミュレーターで現状の電気料金リスクを診断した結果を「電気料金上昇シナリオの根拠」として添付すると、
            投資回収計算の説得力が大幅に向上します。
          </p>
        </section>

        {/* 差し戻し理由と対策 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある差し戻し理由と対策</h2>
          <div className="mt-4 space-y-3">
            {returnReasons.map((r, i) => (
              <div key={i} className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="text-sm font-semibold text-amber-800">⚠ 差し戻し理由：{r.reason}</h3>
                <p className="mt-2 text-sm text-slate-700"><span className="font-semibold text-emerald-700">対策：</span>{r.fix}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 意思決定者が見るポイント */}
        <section className="rounded-xl border border-emerald-300 bg-emerald-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">意思決定者（役員・CFO）が注目するポイント</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { label: "実質負担額はいくらか", detail: "補助金込みの正味投資額と資金調達方法（自己資金・融資・リース）を明確にする" },
              { label: "何年で回収できるか", detail: "投資回収期間を複数シナリオで示す。「設備寿命内に回収できるか」が判断基準になる" },
              { label: "補助金が採択されなかった場合はどうなるか", detail: "不採択リスクへの対応策（再申請・代替手段）を必ず記載する" },
              { label: "いつまでに決定が必要か", detail: "公募締め切り・着工前申請の制約から逆算した「社内決定のデッドライン」を明示する" },
              { label: "省エネ効果は確実か", detail: "省エネ率・削減量の計算根拠を明確にする。診断書があれば添付する" },
              { label: "コンプライアンス上の問題はないか", detail: "補助金の申請・受領が法的に適切であること、担当者が確認していることを示す" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-emerald-200 bg-white p-4">
                <h3 className="text-sm font-semibold text-slate-800">{item.label}</h3>
                <p className="mt-2 text-xs text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 申請スケジュールの示し方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請スケジュールの示し方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金申請は「着工前に申請・採択が必要」という制約があるため、
            スケジュールの緊急性を経営層に正確に伝えることが承認を早める鍵です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">マイルストーン</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">時期（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">担当</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { milestone: "稟議承認", timing: "〇月〇日まで（デッドライン）", owner: "経営層" },
                  { milestone: "補助金申請書提出", timing: "〇月〇日（公募締切）", owner: "担当部署" },
                  { milestone: "採択結果通知（見込み）", timing: "〇月頃", owner: "SII／実施機関" },
                  { milestone: "交付決定", timing: "〇月頃", owner: "SII／実施機関" },
                  { milestone: "設備発注（交付決定後）", timing: "〇月", owner: "調達部門" },
                  { milestone: "設備設置・工事完了", timing: "〇月", owner: "施工業者" },
                  { milestone: "実績報告・補助金受領", timing: "〇月", owner: "担当部署" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className={`border border-slate-200 px-3 py-2 ${i === 0 ? "font-semibold text-red-700" : "text-slate-800"}`}>{row.milestone}</td>
                    <td className={`border border-slate-200 px-3 py-2 ${i === 0 ? "font-semibold text-red-700" : "text-slate-700"}`}>{row.timing}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 「稟議承認」行を赤字で強調することで、意思決定者にデッドラインの重要性が伝わります。
          </p>
        </section>

        {/* 情報の鮮度注記 */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-base font-semibold text-amber-800">情報の鮮度についての注記</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            本ページの情報は2026年4月時点の公開情報をもとにしています。補助金制度は年度ごとに内容・補助率・上限額が変更される場合があります。
            申請前に必ず各実施機関の最新公募要領をご確認ください。
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>・ SII（環境共創イニシアチブ）: <a href="https://sii.or.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://sii.or.jp/</a></li>
            <li>・ 資源エネルギー庁: <a href="https://www.enecho.meti.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.enecho.meti.go.jp/</a></li>
            <li>・ 環境省: <a href="https://www.env.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.env.go.jp/</a></li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "稟議に必要な制度の詳細情報" },
            { href: "/subsidy-demand-side-ppa", title: "需要家主導型太陽光PPAの補助金活用", description: "再エネ調達系補助金の詳細" },
            { href: "/approval-document-key-points", title: "電力契約見直しの稟議書に入れたい論点整理", description: "電力契約変更に特化した稟議書の論点" },
            { href: "/solar-suitability-diagnosis", title: "太陽光導入向き不向き診断", description: "稟議の前提となる適否判断に活用" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "蓄電池投資の費用対効果を把握" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="稟議書に使える電気料金リスクの数値を取得しましょう"
          description="投資回収計算や電気料金上昇シナリオの根拠として、シミュレーターの診断結果を活用できます。具体的な数値が稟議書の説得力を高めます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
  );
}
