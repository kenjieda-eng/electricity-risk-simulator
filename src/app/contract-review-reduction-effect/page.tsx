import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "契約見直しによる削減額の目安｜プラン切替・契約電力見直しの効果";
const pageDescription =
  "電力契約の見直しでどれだけ電気代を下げられるか？プラン切替・契約電力削減・小売電気事業者変更の削減効果を規模別に数値で解説。見直しの手順と注意点もあわせて紹介します。";
const pageUrl = "https://simulator.eic-jp.org/contract-review-reduction-effect";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 削減効果",
    "電気代 プラン切替 効果",
    "契約電力 削減",
    "電力会社 切り替え 節約",
    "法人 電気代 見直し",
    "電気料金 削減額",
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

const planSwitchEffects = [
  { from: "従量電灯B（低圧）", to: "低圧電力（業務用）", demand: "10〜30kW", monthlyBefore: "15〜30万円", saving: "1〜4万円/月", savingRatio: "5〜15%" },
  { from: "低圧電力", to: "高圧電力（特別契約）", demand: "50〜150kW", monthlyBefore: "40〜100万円", saving: "3〜15万円/月", savingRatio: "7〜18%" },
  { from: "高圧標準プラン", to: "時間帯別（TOU）プラン", demand: "100〜500kW", monthlyBefore: "100〜400万円", saving: "5〜40万円/月", savingRatio: "5〜12%" },
  { from: "高圧（大手電力）", to: "新電力（高圧）", demand: "100〜500kW", monthlyBefore: "100〜400万円", saving: "5〜40万円/月", savingRatio: "3〜12%" },
  { from: "高圧標準", to: "特別高圧（2,000kW以上）", demand: "2,000kW以上", monthlyBefore: "2,000万円以上", saving: "100〜300万円/月", savingRatio: "5〜15%" },
];

const demandReductionEffects = [
  { currentDemand: "100kW", reducedDemand: "85kW（-15kW）", baseChargeSaving: "1.8〜2.7万円/月", annualSaving: "21.6〜32.4万円" },
  { currentDemand: "200kW", reducedDemand: "170kW（-30kW）", baseChargeSaving: "3.6〜5.4万円/月", annualSaving: "43.2〜64.8万円" },
  { currentDemand: "300kW", reducedDemand: "255kW（-45kW）", baseChargeSaving: "5.4〜8.1万円/月", annualSaving: "64.8〜97.2万円" },
  { currentDemand: "500kW", reducedDemand: "425kW（-75kW）", baseChargeSaving: "9〜13.5万円/月", annualSaving: "108〜162万円" },
  { currentDemand: "1,000kW", reducedDemand: "850kW（-150kW）", baseChargeSaving: "18〜27万円/月", annualSaving: "216〜324万円" },
];

const reviewSteps = [
  { step: "STEP 1", title: "現在の契約内容を確認", desc: "電気料金明細書から「契約電力」「適用プラン」「電力会社」を確認します。" },
  { step: "STEP 2", title: "過去12か月のデマンド実績を確認", desc: "各月のデマンド値（kW）を請求書または電力会社のWebから取得。最高値が翌12か月の契約電力に使われます。" },
  { step: "STEP 3", title: "契約電力の適正値を算出", desc: "実績最高デマンド×1.1〜1.2が安全な契約電力の目安。現在の設定が実需と比べて過大であれば、引き下げ申請を検討します。" },
  { step: "STEP 4", title: "プラン・事業者の比較", desc: "現在のプランと時間帯別・季節別プランを比較。複数の小売電気事業者に相見積もりを依頼します。" },
  { step: "STEP 5", title: "切り替えまたは申請", desc: "電力会社へ契約変更申請（通常1〜3か月後に適用）。新電力への切り替えは手続き後、翌月〜2か月程度で完了するケースが多いです。" },
];

export default function ContractReviewReductionEffectPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          契約見直しによる削減額の目安
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">プラン切替・契約電力見直し・事業者変更の効果</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          設備を変えることなく、契約内容を見直すだけで電気代を削減できるケースは多くあります。
          「プラン切替」「契約電力の引き下げ」「電力会社の変更」という3つのアプローチにより、月額で数万〜数百万円の削減が可能です。
          本ページでは各アプローチの削減効果を数値で解説し、見直しの手順を紹介します。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約見直しで削減できる3つのポイント</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-800">① 契約電力の引き下げ</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                過去12か月の最大デマンド値より過大な契約電力になっている場合、引き下げ申請で基本料金を直接削減できます。
                デマンド15%削減で基本料金も15%削減されます。
              </p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-800">② 料金プランの最適化</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                時間帯別・季節別プランに切り替えることで、深夜・休日など単価の低い時間帯の電力を活用し電力量料金を削減できます。操業パターンによっては5〜15%の削減が可能です。
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">③ 電力会社の変更</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                複数の小売電気事業者から相見積もりを取り、現在の契約より安い事業者に切り替える方法です。
                高圧以上では3〜12%の削減が見込めるケースが多くあります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* プラン切替効果テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">プラン切替・事業者変更による削減効果の目安</h2>
          <p className="mt-2 text-sm text-slate-600">契約変更で期待できる月額削減額（概算値）</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">変更前プラン</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">変更後プラン</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">対象規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">変更前月額</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減額/月</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減率</th>
                </tr>
              </thead>
              <tbody>
                {planSwitchEffects.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2 text-slate-700">{row.from}</td>
                    <td className="px-4 py-2 font-medium text-slate-800">{row.to}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.demand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.monthlyBefore}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-emerald-700">{row.saving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.savingRatio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 削減率バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">プラン切替による削減率の比較</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "低圧→高圧切替", value: 85, note: "7〜18%削減" },
              { label: "高圧→特別高圧切替", value: 65, note: "5〜15%削減" },
              { label: "高圧TOUプランへ変更", value: 55, note: "5〜12%削減" },
              { label: "大手→新電力（高圧）", value: 45, note: "3〜12%削減" },
              { label: "従量電灯→業務用低圧", value: 70, note: "5〜15%削減" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className="h-3 rounded bg-sky-500" style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-sky-700">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 契約電力引き下げ効果テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力15%引き下げによる基本料金削減額の試算</h2>
          <p className="mt-2 text-sm text-slate-600">基本料金単価を1,200円/kW（高圧標準の目安）として試算</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">現在の契約電力</th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">引き下げ後の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">基本料金削減額/月</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">年間削減額</th>
                </tr>
              </thead>
              <tbody>
                {demandReductionEffects.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.currentDemand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-slate-600">{row.reducedDemand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-emerald-700">{row.baseChargeSaving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.annualSaving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※基本料金単価は電力会社・プランによって異なります。実際は請求書の「基本料金欄」の単価でご確認ください。</p>
        </div>
      </section>

      {/* 年間削減額バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">契約電力引き下げによる年間削減額（15%削減時）</h3>
          <div className="mt-4 space-y-3">
            {demandReductionEffects.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-32 shrink-0 text-sm text-slate-700">契約電力{item.currentDemand}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div
                    className="h-3 rounded bg-emerald-500"
                    style={{ width: `${[10, 20, 30, 50, 100][i]}%` }}
                  />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-emerald-700">{item.annualSaving}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 見直し手順 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力契約見直しの5ステップ</h2>
          <div className="mt-4 space-y-4">
            {reviewSteps.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-20 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約見直し時の注意点</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li><strong>契約電力の引き下げすぎに注意：</strong>デマンドが契約電力を超えると超過金（割増料金）が発生します。余裕を持った設定が重要です。</li>
            <li><strong>プラン変更後のシミュレーション：</strong>時間帯別プランは操業パターンによっては逆に高くなる場合があります。必ず過去の使用データで試算してから変更してください。</li>
            <li><strong>新電力のリスク確認：</strong>新電力への切り替えでは燃料費調整額の上限設定や供給安定性を事前に確認することが重要です。</li>
            <li><strong>違約金・解約条件の確認：</strong>現在の契約に解約手数料や最低契約期間が設定されている場合があります。変更前に確認してください。</li>
          </ul>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの金額・削減率は業界平均を参考にした概算値です。契約区分・地域・使用パターンにより大きく変動します。正確な見積は専門家にご相談ください。
          </p>
        </div>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの進め方を具体的に解説" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "基本料金を下げる仕組みと効果" },
            { href: "/contract-demand-what-is-it", title: "契約電力とは", description: "デマンド値の決まり方と基本料金の関係" },
            { href: "/electricity-cost-reduction-action-map", title: "電気代削減アクション一覧", description: "即効・短期・中長期の施策マップ" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の契約見直し余地を診断する"
          description="現在の契約電力・月間使用量を入力して、削減余地とリスクをシミュレーションできます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
  );
}
