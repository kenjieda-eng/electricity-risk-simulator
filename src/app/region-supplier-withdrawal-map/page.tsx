import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "エリア別 新電力撤退状況マップ｜2022年以降の契約解除動向";
const pageDescription =
  "2022年以降の新電力撤退・契約解除状況を全国10エリアで比較。撤退が起きる理由、代表的な撤退事例、契約解除通知が来たときの対応、エリア別の切替先の考え方を詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-supplier-withdrawal-map";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新電力 撤退",
    "電力 契約解除",
    "新電力 倒産",
    "電力会社 撤退 エリア",
    "新電力 高騰 対応",
    "電力 切替",
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

const areaSummary = [
  {
    area: "北海道電力エリア",
    severity: "中",
    newPowerShare: "約 15〜18%",
    withdrawalLevel: "中規模",
    returnToOldRate: "最終保障供給に移行するケースあり",
    recovery: "2024年以降やや安定",
    color: "bg-blue-400",
    severityColor: "text-amber-600",
  },
  {
    area: "東北電力エリア",
    severity: "中",
    newPowerShare: "約 15〜20%",
    withdrawalLevel: "中規模",
    returnToOldRate: "東北電力へ戻るケースが主流",
    recovery: "2024年以降やや安定",
    color: "bg-teal-400",
    severityColor: "text-amber-600",
  },
  {
    area: "東京電力エリア",
    severity: "大",
    newPowerShare: "約 28〜35%",
    withdrawalLevel: "最大規模（全国最多）",
    returnToOldRate: "TEPCO EP へ戻るか他の大手新電力へ",
    recovery: "2025年以降回復傾向",
    color: "bg-sky-500",
    severityColor: "text-red-600",
  },
  {
    area: "中部電力エリア",
    severity: "中",
    newPowerShare: "約 20〜25%",
    withdrawalLevel: "中規模",
    returnToOldRate: "中部電力ミライズへ戻るケースが多い",
    recovery: "大口産業は比較的安定",
    color: "bg-emerald-400",
    severityColor: "text-amber-600",
  },
  {
    area: "北陸電力エリア",
    severity: "小〜中",
    newPowerShare: "約 10〜15%",
    withdrawalLevel: "小規模",
    returnToOldRate: "北陸電力へ戻るケースが主流",
    recovery: "2023年後半に安定",
    color: "bg-green-400",
    severityColor: "text-yellow-600",
  },
  {
    area: "関西電力エリア",
    severity: "中",
    newPowerShare: "約 20〜28%",
    withdrawalLevel: "中規模",
    returnToOldRate: "関西電力・地場系新電力へ移行",
    recovery: "大手・地場系が安定的に維持",
    color: "bg-indigo-400",
    severityColor: "text-amber-600",
  },
  {
    area: "中国電力エリア",
    severity: "小〜中",
    newPowerShare: "約 12〜18%",
    withdrawalLevel: "小規模",
    returnToOldRate: "中国電力へ戻るケースが主流",
    recovery: "2024年に安定",
    color: "bg-orange-400",
    severityColor: "text-yellow-600",
  },
  {
    area: "四国電力エリア",
    severity: "小",
    newPowerShare: "約 10〜15%",
    withdrawalLevel: "小規模",
    returnToOldRate: "四国電力へ戻るケースが主流",
    recovery: "2023年後半に安定",
    color: "bg-amber-400",
    severityColor: "text-green-600",
  },
  {
    area: "九州電力エリア",
    severity: "小〜中",
    newPowerShare: "約 18〜23%",
    withdrawalLevel: "小〜中規模",
    returnToOldRate: "九州電力・再エネ系新電力へ",
    recovery: "2024年に安定傾向",
    color: "bg-yellow-500",
    severityColor: "text-yellow-600",
  },
  {
    area: "沖縄電力エリア",
    severity: "なし",
    newPowerShare: "自由化なし（沖縄電力独占）",
    withdrawalLevel: "該当なし",
    returnToOldRate: "沖縄電力のみ",
    recovery: "制度上、撤退リスクなし",
    color: "bg-red-300",
    severityColor: "text-green-600",
  },
];

const withdrawalReasons = [
  {
    reason: "電力卸市場（JEPX）価格の急騰",
    detail:
      "2021〜2022年のウクライナ侵攻・LNG価格急騰を受け、電力卸市場価格（JEPX）が急騰。自前の発電所を持たず卸市場から電力を調達していた新電力は、高騰した電力を低廉な固定価格で顧客に供給し続け、逆ザヤで経営が悪化しました。",
  },
  {
    reason: "固定価格・上限なし燃調費契約の逆ザヤ",
    detail:
      "燃料費調整額の上限（キャップ）を設けずに固定単価で供給していた新電力は、燃調費がキャップを超える部分を自社負担することになり、財務が急速に悪化。契約解除・撤退を余儀なくされました。",
  },
  {
    reason: "自己資本の薄さ・資金調達難",
    detail:
      "新電力ベンチャーは自己資本が少なく、価格急騰による損失を吸収する体力がありませんでした。銀行融資も困難になり、短期間で事業継続が不可能になるケースが続出しました。",
  },
  {
    reason: "電力調達契約の期間ミスマッチ",
    detail:
      "供給先顧客との契約は1〜3年の長期固定、電力調達は短期スポットという期間ミスマッチを持つ事業者は、市況高騰時に大きな損失を被りました。長期の調達契約や先物ヘッジを持たない事業者ほど脆弱でした。",
  },
  {
    reason: "規制強化・届出義務の未履行",
    detail:
      "経営悪化に伴い、電力供給義務の履行が困難になった事業者が小売電気事業者の登録を自主廃止するケースも。登録抹消後は最終保障供給への移行となります。",
  },
];

const withdrawalCases = [
  {
    scale: "大規模（数万口以上）",
    description:
      "複数の大手・中堅新電力が2022年中に高圧向け新規受付を停止し、その後既存契約についても1〜2年で段階的に解除を通知。解除後は最終保障供給もしくは他の新電力・旧一電への移行を余儀なくされた。",
    impact: "東京・関西エリアで顕著",
  },
  {
    scale: "中規模（数千〜1万口程度）",
    description:
      "中堅・地域特化型の新電力が電力調達コストの増加に耐えられず、特定エリアでの事業を終了。既存顧客に3〜6ヶ月前の解除通知を送付し、最終保障供給への移行を促した。",
    impact: "全国各エリアで発生",
  },
  {
    scale: "小規模（〜数百口）",
    description:
      "新規参入から日が浅い小規模新電力が2022年後半に事業継続を断念。顧客への告知が不十分なまま事業を停止し、最終保障供給に自動移行するケースもあった。",
    impact: "全国で多数発生",
  },
];

const afterNotificationSteps = [
  {
    step: "1",
    title: "通知書の内容を確認する",
    detail: "解除日・移行先（最終保障供給か否か）・手続き期限を確認。解除日の60日前に通知する義務がある。",
  },
  {
    step: "2",
    title: "最終保障供給への自動移行を把握する",
    detail: "切替先が見つからない場合、旧一電の最終保障供給に自動移行される。単価は通常の標準メニューより割高（約1.1〜1.2倍が目安）。",
  },
  {
    step: "3",
    title: "複数の新電力・旧一電に見積もり依頼",
    detail: "解除日までに新しい供給先を確保する。余裕を持って3〜4社に並行して見積もりを依頼。旧一電への戻りも選択肢の一つ。",
  },
  {
    step: "4",
    title: "切替手続きを完了させる",
    detail: "新供給先が決まったら、旧供給者の解除日と新供給者の開始日が重ならないよう注意して手続きを完了させる。",
  },
];

const switchingGuide = [
  {
    area: "東京電力エリア",
    guide: "大手新電力（エネット・Daigasエナジー・JERA）または TEPCO EP の標準メニューへ。財務安定重視なら旧一電に戻ることも有効。",
  },
  {
    area: "関西電力エリア",
    guide: "Daigasエナジー・関西電力・エネオス系が安定。地場系の財務基盤が強いエリア。",
  },
  {
    area: "中部電力エリア",
    guide: "中部電力ミライズ・豊通グループ系・エネオス系が選択肢。大口は一括入札も有効。",
  },
  {
    area: "九州電力エリア",
    guide: "九州電力本体・再エネ特化型の新電力・西部ガス系。再エネ環境価値の取得も検討。",
  },
  {
    area: "その他エリア",
    guide: "旧一電への戻りを基本選択肢として、財務基盤の安定した大手新電力に見積もりを依頼する。",
  },
];

export default function RegionSupplierWithdrawalMapPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">新電力撤退状況マップ</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          エリア別 新電力撤退状況マップ
        </h1>
        <p className="mt-1 text-base font-medium text-rose-800">2022年以降の契約解除動向</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2022年のウクライナ侵攻以降、LNG・電力卸価格の急騰を受けて、日本各地で新電力による
          高圧法人顧客への契約解除が相次ぎました。本ページでは、全国10エリアの撤退状況・規模・
          回復状況を一覧で比較し、撤退が起きる構造的な理由、代表的な事例、
          解除通知を受けた際の対応、エリア別の切替先の考え方を詳しく解説します。
        </p>
      </header>

      {/* 全国撤退状況サマリー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">全国の撤退状況サマリー（2022年以降）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2022年初頭から2023年末にかけて、全国で200社超（高圧向け）の新電力が新規受付停止・既存契約解除・事業廃止のいずれかの対応を取ったとされています。
          解除通知を受けた法人需要家数は全国合計で数十万口規模と推計されており、エネルギー自由化後最大の混乱となりました。
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-rose-100 bg-rose-50 p-4 text-center">
            <p className="text-3xl font-bold text-rose-700">200社超</p>
            <p className="mt-1 text-xs text-slate-600">新規受付停止・撤退・廃業（高圧向け）の新電力数（2022〜2023年）</p>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 p-4 text-center">
            <p className="text-3xl font-bold text-amber-700">数十万口</p>
            <p className="mt-1 text-xs text-slate-600">解除通知を受けた法人（高圧以上）需要家数の推計</p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
            <p className="text-3xl font-bold text-slate-700">2024〜2025年</p>
            <p className="mt-1 text-xs text-slate-600">多くのエリアで市場が安定化。ただし撤退リスクはゼロではない</p>
          </div>
        </div>
      </section>

      {/* エリア別テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別 新電力撤退状況一覧</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2022〜2025年の状況を10エリアで比較。「撤退規模」はエリア内での相対的な影響度の目安です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-rose-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">撤退規模</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">新電力シェア（推計）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">主な移行先</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">現在の状況</th>
              </tr>
            </thead>
            <tbody>
              {areaSummary.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700 whitespace-nowrap">
                    <span className={`inline-block w-2 h-2 rounded-full ${row.color} mr-2`} />
                    {row.area}
                  </td>
                  <td className={`border border-slate-200 px-3 py-2 font-semibold ${row.severityColor}`}>
                    {row.severity}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.newPowerShare}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.returnToOldRate}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.recovery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 影響度の可視化バー */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">エリア別 新電力シェア（推計）比較</h3>
          <p className="mt-1 text-xs text-slate-500">高圧・特別高圧需要家の電力量ベース推計。2025年時点。</p>
          <div className="mt-4 space-y-3">
            {[
              { area: "東京電力エリア", share: 31, color: "bg-sky-500" },
              { area: "関西電力エリア", share: 24, color: "bg-indigo-400" },
              { area: "中部電力エリア", share: 22, color: "bg-teal-400" },
              { area: "九州電力エリア", share: 20, color: "bg-amber-500" },
              { area: "東北電力エリア", share: 17, color: "bg-teal-300" },
              { area: "北海道電力エリア", share: 16, color: "bg-blue-400" },
              { area: "中国電力エリア", share: 15, color: "bg-orange-400" },
              { area: "北陸電力エリア", share: 12, color: "bg-green-400" },
              { area: "四国電力エリア", share: 12, color: "bg-amber-300" },
              { area: "沖縄電力エリア", share: 0, color: "bg-slate-300" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>{item.area}</span>
                  <span>{item.share}%</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.share * 3}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">※推計値。実際のシェアは経済産業省・電力広域的運営推進機関のデータで確認できます。</p>
        </div>
      </section>

      {/* 代表的な撤退事例 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">代表的な撤退事例（規模感で整理）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          個別企業名は伏せ、規模感と影響パターンで整理しています。
        </p>
        <div className="mt-4 space-y-4">
          {withdrawalCases.map((item, i) => (
            <div key={i} className="rounded-xl border border-rose-100 bg-rose-50 p-4">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-rose-600 px-2 py-0.5 text-xs font-bold text-white">{item.scale}</span>
                <span className="text-xs text-slate-500">{item.impact}</span>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 撤退が起きる理由 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">撤退が起きる構造的な理由</h2>
        <div className="mt-4 space-y-3">
          {withdrawalReasons.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">
                <span className="mr-2 text-rose-600">▶</span>{item.reason}
              </h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 契約解除通知が来たらどうすべきか */}
      <section className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">契約解除通知が来たらどうすべきか</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          高圧法人向けの供給契約解除通知を受けた場合、以下の手順で対応してください。
        </p>
        <div className="mt-4 space-y-3">
          {afterNotificationSteps.map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-600 text-white text-sm font-bold flex items-center justify-center">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <p className="text-sm text-slate-700">
            より詳しい緊急対応フローは
            <Link href="/emergency-supplier-withdrawal" className="ml-1 text-rose-700 underline underline-offset-2 hover:text-rose-900 font-semibold">
              新電力から契約解除通知が届いたとき
            </Link>
            のページで解説しています。
          </p>
        </div>
      </section>

      {/* 最終保障供給とは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最終保障供給への移行と単価の目安</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          切替先が決まらない場合、法律上、旧一般電気事業者（旧一電）が「最終保障供給」として電力を供給する義務を負います。
          ただし最終保障供給の単価は、通常の旧一電の高圧標準メニューより割高（目安: 約10〜20%高い水準）に設定されており、
          長期間そのまま放置するとコスト高になります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">通常の高圧標準メニュー</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">最終保障供給</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "電力量料金", normal: "標準単価", last: "標準単価 × 1.1〜1.2程度" },
                { label: "基本料金", normal: "標準単価", last: "標準単価 × 1.1〜1.2程度" },
                { label: "契約期間", normal: "1〜3年固定", last: "原則として短期（半年〜1年）" },
                { label: "切替の自由", normal: "あり", last: "あり（いつでも移行可）" },
                { label: "推奨利用期間", normal: "長期利用可", last: "切替先が見つかるまでの一時的利用推奨" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{row.label}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.normal}</td>
                  <td className="border border-slate-200 px-4 py-2 text-rose-700 font-medium">{row.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* エリア別の切替先の考え方 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別の切替先の考え方</h2>
        <div className="mt-4 space-y-3">
          {switchingGuide.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.area}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.guide}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          切替先の比較方法・評価軸について詳しくは
          <Link href="/how-to-compare-electricity-suppliers" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
            電力会社の比較方法
          </Link>
          をご覧ください。
        </p>
      </section>

      {/* 新電力選定時のチェックポイント */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">撤退リスクを下げる新電力選定のチェックポイント</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center">1</span>
            <span><span className="font-semibold">自社発電所の有無</span> — 発電所を持つ事業者は卸価格高騰の影響を受けにくい。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center">2</span>
            <span><span className="font-semibold">長期調達契約・先物ヘッジの有無</span> — 短期スポット調達のみに依存していないか確認。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center">3</span>
            <span><span className="font-semibold">親会社・グループの財務規模</span> — 大手グループ傘下の事業者は資金調達力が高く撤退リスクが低い。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center">4</span>
            <span><span className="font-semibold">燃料費調整額のキャップ有無</span> — キャップなしのプランは高騰時にリスクが顧客に転嫁される可能性あり。</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sky-600 text-white text-xs flex items-center justify-center">5</span>
            <span><span className="font-semibold">事業継続年数・顧客数</span> — 一定規模の顧客基盤と運営実績を持つ事業者の方が安定性が高い傾向がある。</span>
          </li>
        </ul>
      </section>

      {/* 注記 */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※本ページの料金・シェア情報は2026年4月時点の公開情報をもとにした概算値です。
          正確な単価は各電力会社の公式ホームページまたは見積書でご確認ください。
        </p>
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたとき",
              description: "撤退通知を受けた際の緊急対応フローと手続きを詳しく解説。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "新電力選定の評価軸と見積もり取得のコツを紹介。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃調費の仕組みと新電力撤退の関係を詳しく解説。",
            },
            {
              href: "/region-tokyo-business-electricity",
              title: "東京電力エリアの法人電気代事情",
              description: "全国最大規模の撤退が発生した東京エリアの詳細。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "JEPX連動型プランのリスクと活用場面を解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="現在の電気料金リスクを診断する"
          description="契約している新電力の撤退リスク・燃料費変動リスク・料金高騰リスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/emergency-supplier-withdrawal", label: "緊急対応ガイドを見る" },
          ]}
        />
      </div>
    </main>
  );
}
