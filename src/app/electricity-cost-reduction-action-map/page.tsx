import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "電気代削減アクション一覧｜即効・短期・中長期で整理";
const pageDescription =
  "法人の電気代削減施策を「即効（今すぐ）」「短期（3〜6か月）」「中長期（1年以上）」の3段階で一覧整理。コスト・効果・難易度をあわせて解説。優先順位の決め方も紹介します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-cost-reduction-action-map";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代削減 施策",
    "法人 電気代 節約",
    "電力コスト削減 方法",
    "電気代削減 アクション",
    "電気代削減 一覧",
    "即効 省エネ",
    "電力契約 見直し",
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

const immediateActions = [
  { action: "空調・照明の不使用時オフ徹底", effect: "3〜8%削減", cost: "0円", difficulty: "低", category: "運用" },
  { action: "空調設定温度の適正化（冷房28℃・暖房20℃）", effect: "5〜10%削減", cost: "0円", difficulty: "低", category: "運用" },
  { action: "空調フィルターの清掃（詰まり解消）", effect: "2〜5%削減", cost: "数千円", difficulty: "低", category: "運用" },
  { action: "コンプレッサー・エア漏れ点検", effect: "1〜5%削減", cost: "点検費のみ", difficulty: "低", category: "運用" },
  { action: "PCのスリープ・電源設定見直し", effect: "1〜3%削減", cost: "0円", difficulty: "低", category: "運用" },
  { action: "使用していない機器の主電源オフ", effect: "1〜4%削減", cost: "0円", difficulty: "低", category: "運用" },
  { action: "デマンド実績の把握・高値月の原因分析", effect: "間接的に効果大", cost: "0円", difficulty: "低", category: "把握" },
];

const shortTermActions = [
  { action: "デマンド値の下げ交渉（契約電力見直し）", effect: "基本料金5〜20%削減", cost: "申請費のみ", difficulty: "中", category: "契約" },
  { action: "電力プランの切り替え（時間帯別等）", effect: "5〜15%削減", cost: "ほぼ0円", difficulty: "中", category: "契約" },
  { action: "小売電気事業者の相見積もり・切り替え", effect: "3〜12%削減", cost: "手続き費用", difficulty: "中", category: "契約" },
  { action: "デマンドコントローラーの導入", effect: "基本料金10〜25%削減", cost: "20〜100万円", difficulty: "中", category: "設備" },
  { action: "照明のLED化（部分導入から開始）", effect: "照明分40〜60%削減", cost: "10〜50万円/フロア", difficulty: "低", category: "設備" },
  { action: "エアコンフィルター自動清掃機能機種への更新", effect: "3〜8%削減", cost: "設備更新費", difficulty: "中", category: "設備" },
  { action: "タイマー・センサーによる照明制御", effect: "5〜15%削減", cost: "5〜30万円", difficulty: "中", category: "設備" },
  { action: "冷蔵設備のナイトカーテン設置（小売・飲食）", effect: "5〜15%削減", cost: "設備費", difficulty: "低", category: "設備" },
];

const longTermActions = [
  { action: "高効率空調設備への更新（インバータ型）", effect: "空調分20〜35%削減", cost: "50〜500万円", difficulty: "高", category: "設備" },
  { action: "コンプレッサーの省エネ型更新", effect: "10〜30%削減", cost: "100〜500万円", difficulty: "高", category: "設備" },
  { action: "高効率変圧器（アモルファス）への更新", effect: "1〜5%削減", cost: "100〜500万円", difficulty: "高", category: "設備" },
  { action: "PPA（電力購入協定）・太陽光発電導入", effect: "10〜30%削減（再エネ分）", cost: "設置費（PPAは0円も可）", difficulty: "高", category: "調達" },
  { action: "蓄電池の導入（ピークシフト）", effect: "基本料金10〜25%削減", cost: "500万〜数千万円", difficulty: "高", category: "設備" },
  { action: "BEMS（ビルエネルギー管理システム）導入", effect: "5〜20%削減", cost: "数百万〜数千万円", difficulty: "高", category: "IT" },
  { action: "自家発電設備（コジェネレーション）", effect: "15〜40%削減", cost: "1,000万円〜", difficulty: "高", category: "設備" },
  { action: "工場ラインの生産シフト最適化", effect: "デマンド10〜25%削減", cost: "コンサル費", difficulty: "高", category: "運用" },
  { action: "特別高圧契約への切り替え（大規模施設）", effect: "電力量単価15〜30%低減", cost: "受電設備費", difficulty: "高", category: "契約" },
];

export default function ElectricityCostReductionActionMapPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電気代削減アクション一覧
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">即効・短期・中長期で整理した施策マップ</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「電気代を下げたい」と思っても、どこから手をつければよいかわからないケースは多くあります。
          削減施策は、今すぐ取り組めるものから設備投資が必要な中長期のものまで多岐にわたります。
          本ページでは法人が取り組める電気代削減アクションを「即効（コスト・手間ゼロ）」「短期（3〜6か月）」「中長期（1年以上）」の3段階で整理しました。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">削減施策の3つのフェーズ</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-800">即効フェーズ（今すぐ）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                初期投資不要・運用改善だけで実現できる施策。合計で5〜15%程度の削減余地があります。まずここから着手することでPDCAを回せます。
              </p>
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-800">短期フェーズ（3〜6か月）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                契約変更・小規模設備投資で実現できる施策。投資回収が早く（1〜3年）、確実な効果が見込めます。
              </p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">中長期フェーズ（1年以上）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                大型設備更新・調達方法の抜本的見直しで実現。初期投資は大きいですが、長期的な効果と競争力強化につながります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 即効アクション */}
      <section className="mt-6">
        <div className="rounded-xl border border-emerald-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-emerald-800">即効フェーズ：今すぐできる施策一覧</h2>
          <p className="mt-2 text-sm text-slate-600">初期投資なし・運用改善で実現できるアクション</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-emerald-50">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">施策</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減効果の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">初期コスト</th>
                  <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-slate-700">難易度</th>
                </tr>
              </thead>
              <tbody>
                {immediateActions.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-emerald-50/30"}>
                    <td className="px-4 py-2 text-slate-800">{row.action}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-emerald-700">{row.effect}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.cost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-center">
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">{row.difficulty}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 即効バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">即効施策の削減効果比較</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "空調設定温度の適正化", value: 75, note: "5〜10%" },
              { label: "空調フィルター清掃", value: 40, note: "2〜5%" },
              { label: "照明・空調の不使用時オフ", value: 60, note: "3〜8%" },
              { label: "PCスリープ設定", value: 25, note: "1〜3%" },
              { label: "コンプレッサーエア漏れ補修", value: 35, note: "1〜5%" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className="h-3 rounded bg-emerald-500" style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-16 shrink-0 text-right text-sm font-semibold text-emerald-700">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 短期アクション */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-sky-800">短期フェーズ：3〜6か月で着手できる施策一覧</h2>
          <p className="mt-2 text-sm text-slate-600">契約変更・小規模設備投資で実現できるアクション</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">施策</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減効果の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">初期コスト</th>
                  <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-slate-700">難易度</th>
                </tr>
              </thead>
              <tbody>
                {shortTermActions.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sky-50/30"}>
                    <td className="px-4 py-2 text-slate-800">{row.action}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.effect}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.cost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-center">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${row.difficulty === "低" ? "bg-emerald-100 text-emerald-800" : "bg-sky-100 text-sky-800"}`}>{row.difficulty}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 短期バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">短期施策の削減効果比較</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "デマンドコントローラー", value: 85, note: "基本料金10〜25%削減" },
              { label: "電力プラン切り替え", value: 65, note: "5〜15%削減" },
              { label: "LED化（照明分）", value: 80, note: "照明分40〜60%削減" },
              { label: "契約電力の見直し", value: 70, note: "基本料金5〜20%削減" },
              { label: "小売業者の切り替え", value: 55, note: "3〜12%削減" },
              { label: "タイマー・センサー制御", value: 45, note: "5〜15%削減" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className="h-3 rounded bg-sky-500" style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-36 shrink-0 text-right text-sm font-semibold text-sky-700">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 中長期アクション */}
      <section className="mt-6">
        <div className="rounded-xl border border-amber-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-amber-800">中長期フェーズ：1年以上の計画が必要な施策一覧</h2>
          <p className="mt-2 text-sm text-slate-600">設備更新・調達見直しで実現できる抜本的アクション</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-amber-50">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">施策</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減効果の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">初期コスト</th>
                  <th className="whitespace-nowrap px-4 py-2 text-center font-semibold text-slate-700">難易度</th>
                </tr>
              </thead>
              <tbody>
                {longTermActions.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                    <td className="px-4 py-2 text-slate-800">{row.action}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-amber-700">{row.effect}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.cost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-center">
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">{row.difficulty}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 優先順位の決め方 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">優先順位の決め方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            削減施策を選ぶ際は「効果の大きさ × 実施のしやすさ」で優先順位をつけることが基本です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">まず把握から始める</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                電気代の内訳（基本料金・電力量料金・燃調費）と、過去12か月のデマンド実績を把握することが最初のステップ。
                費目が分からないと、どの施策が効くかも判断できません。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">コストゼロ施策から始める</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                運用改善（空調設定・照明オフ・フィルター清掃）は投資不要で即実施できます。
                これだけで5〜15%削減できることも多く、まずここで成果を出してから次のステップへ進みましょう。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">ROIで設備投資を評価する</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                設備投資の場合は「投資回収年数＝初期費用÷年間削減額」で評価します。
                目安として3〜5年以内に回収できるものを優先し、補助金を活用して回収を早めることも検討してください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの削減効果は業界平均を参考にした概算値です。建物・設備・使用状況によって効果は異なります。
            正確な削減余地の評価は、エネルギー診断士や省エネ専門業者にご相談ください。
          </p>
        </div>
      </section>

      {/* データの根拠と出典 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">データの根拠と出典</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          本ページの削減効果データは以下を参考にしています。
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          <li>
            <span className="font-semibold">経済産業省</span>「省エネルギー政策」関連資料（省エネ診断事業の実績データ）
          </li>
          <li>
            <span className="font-semibold">一般財団法人 省エネルギーセンター（ECCJ）</span>「省エネ事例集」
          </li>
          <li>
            <span className="font-semibold">SII（環境共創イニシアチブ）</span>「補助金交付先の省エネ実績報告」
          </li>
          <li>
            <span className="font-semibold">一般社団法人エネルギー情報センター</span> 独自調査・シミュレーション結果
          </li>
        </ul>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-amber-800">
            <span className="font-semibold">重要:</span> 本ページの数値は上記データをもとにした概算・目安であり、
            特定の契約条件や時期における正確な削減額を保証するものではありません。
            実際の削減効果は設備状況・使用パターン・建物特性により大きく異なります。
            最終的な判断には、必ず専門業者の診断や見積もりをご確認ください。
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          最終更新: 2026年4月（2024〜2025年度の施策実績を反映）
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/contract-review-reduction-effect", title: "契約見直しによる削減額の目安", description: "プラン切替・契約電力見直しの効果を数値で解説" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "基本料金を下げる仕組みと効果量を解説" },
            { href: "/led-air-conditioning-reduction-effect", title: "LED化・空調最適化の削減効果", description: "設備対策で使用量をどれだけ下げられるか" },
            { href: "/reduction-measure-difficulty-matrix", title: "削減施策の効果・難易度マトリクス", description: "施策の優先順位を可視化するマトリクス" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の削減余地を診断する"
          description="現在の電気代水準と上昇リスクをシミュレーターで確認し、どの施策を優先すべきかの判断材料にしてください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to-start-electricity-contract-review", label: "電力契約の見直し方を読む" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="electricity-cost-reduction-action-map" />
      </div>
    </main>
  );
}
