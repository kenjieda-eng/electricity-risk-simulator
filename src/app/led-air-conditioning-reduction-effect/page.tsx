import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "LED化・空調最適化の削減効果｜設備対策で使用量を下げる";
const pageDescription =
  "LED照明への切り替えと空調設備の最適化で電気代はどれだけ下がるか？削減効果を規模別・設備別に数値で解説。初期費用・回収期間・補助金情報もあわせて紹介します。";
const pageUrl = "https://simulator.eic-jp.org/led-air-conditioning-reduction-effect";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "LED化 電気代削減効果",
    "空調 省エネ 削減効果",
    "LED照明 法人 節電",
    "空調最適化 電気代",
    "設備省エネ 削減額",
    "LED切り替え 費用対効果",
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

const ledEffectByScale = [
  { scale: "小規模オフィス（〜30坪）", lamps: "20〜50灯", currentCost: "2,000〜5,000円/月（照明分）", saving: "800〜2,500円/月", ratio: "40〜50%", initCost: "5〜15万円", roi: "3〜6年" },
  { scale: "中規模オフィス（100坪）", lamps: "100〜200灯", currentCost: "1〜2万円/月（照明分）", saving: "4,000〜1万円/月", ratio: "40〜55%", initCost: "20〜60万円", roi: "2〜5年" },
  { scale: "大規模オフィス（500坪）", lamps: "500〜1,000灯", currentCost: "5〜10万円/月（照明分）", saving: "2〜5万円/月", ratio: "40〜55%", initCost: "100〜300万円", roi: "2〜5年" },
  { scale: "工場・倉庫（中規模）", lamps: "100〜300灯（水銀灯含む）", currentCost: "5〜15万円/月（照明分）", saving: "2.5〜9万円/月", ratio: "50〜65%", initCost: "50〜200万円", roi: "1〜3年" },
  { scale: "小売店舗（1店舗）", lamps: "100〜300灯", currentCost: "2〜6万円/月（照明分）", saving: "1〜3.5万円/月", ratio: "50〜60%", initCost: "20〜80万円", roi: "2〜4年" },
  { scale: "飲食店（40〜60席）", lamps: "50〜150灯", currentCost: "1〜3万円/月（照明分）", saving: "5,000〜1.8万円/月", ratio: "45〜60%", initCost: "15〜50万円", roi: "2〜4年" },
  { scale: "病院・医療施設", lamps: "500〜2,000灯", currentCost: "20〜60万円/月（照明分）", saving: "8〜35万円/月", ratio: "40〜55%", initCost: "200〜1,000万円", roi: "2〜4年" },
];

const airconEffectData = [
  { measure: "フィルター清掃（月1回）", effect: "2〜5%削減", cost: "0〜数千円", timing: "即日" },
  { measure: "設定温度の適正化（冷房+2℃）", effect: "5〜10%削減（空調分）", cost: "0円", timing: "即日" },
  { measure: "インバータ制御への切り替え", effect: "15〜30%削減（空調分）", cost: "設備更新費", timing: "〜6か月" },
  { measure: "高効率機（最新モデル）への更新", effect: "20〜35%削減（空調分）", cost: "50〜500万円/台", timing: "1〜3年" },
  { measure: "外気導入・換気の最適化", effect: "5〜15%削減（空調分）", cost: "設備費", timing: "〜1年" },
  { measure: "建物断熱改修（内窓・遮熱フィルム）", effect: "10〜25%削減（空調分）", cost: "10〜500万円", timing: "1〜3年" },
  { measure: "空調ゾーニングの見直し", effect: "5〜15%削減（空調分）", cost: "工事費", timing: "〜1年" },
  { measure: "タイマー・在室センサー制御", effect: "10〜20%削減（空調分）", cost: "5〜50万円", timing: "〜6か月" },
];

const combinedEffectData = [
  { type: "小規模オフィス（10〜30名）", ledSaving: "1〜2万円/年", airconSaving: "5〜10万円/年", total: "6〜12万円/年" },
  { type: "中規模オフィス（50〜100名）", ledSaving: "5〜12万円/年", airconSaving: "20〜50万円/年", total: "25〜62万円/年" },
  { type: "大規模オフィス（300名以上）", ledSaving: "24〜60万円/年", airconSaving: "100〜250万円/年", total: "124〜310万円/年" },
  { type: "工場（中規模）", ledSaving: "30〜100万円/年", airconSaving: "40〜120万円/年", total: "70〜220万円/年" },
  { type: "小売店舗（スーパー中規模）", ledSaving: "12〜42万円/年", airconSaving: "50〜120万円/年", total: "62〜162万円/年" },
  { type: "飲食店（60席規模）", ledSaving: "6〜21万円/年", airconSaving: "20〜60万円/年", total: "26〜81万円/年" },
];

export default function LedAirConditioningReductionEffectPage() {
  return (
    <>
      <ArticleJsonLd
        headline="LED化・空調最適化の削減効果｜設備対策で使用量を下げる"
        description="LED照明への切り替えと空調設備の最適化で電気代はどれだけ下がるか？削減効果を規模別・設備別に数値で解説。初期費用・回収期間・補助金情報もあわせて紹介します。"
        url="https://simulator.eic-jp.org/led-air-conditioning-reduction-effect"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "LED化・空調最適化の削減効果" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">LED化・空調最適化の効果</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          LED化・空調最適化の削減効果
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">設備対策で電気使用量を下げる</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気代削減の設備対策として最も効果が高く、かつ投資回収が早いのが「LED照明への切り替え」と「空調設備の最適化」です。
          照明のLED化では蛍光灯・水銀灯と比べて40〜65%の電力削減が実現でき、空調の最適化では空調電力の20〜35%削減が見込めます。
          本ページでは規模別・設備別の削減効果を数値で解説します。
        </p>
      </header>

      {/* 2つの対策の概要 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LED化と空調最適化：2大設備対策の特徴</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">LED照明への切り替え</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・蛍光灯比：40〜55%削減</li>
                <li>・水銀灯（工場・倉庫）比：50〜65%削減</li>
                <li>・寿命が約4倍（メンテナンスコスト削減）</li>
                <li>・補助金・リース・PPA活用で初期費用を抑制可能</li>
                <li>・工事期間が短く（1〜数日）業務影響が少ない</li>
              </ul>
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-800">空調設備の最適化</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・電気代の40〜55%を占める最大の消費源を削減</li>
                <li>・フィルター清掃・設定温度だけでも5〜10%効果</li>
                <li>・高効率機への更新で20〜35%削減</li>
                <li>・インバータ化・外気制御などの中間的施策も有効</li>
                <li>・建物断熱改修と組み合わせると相乗効果が大きい</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LED削減効果テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LED化による削減効果・費用対効果（規模別）</h2>
          <p className="mt-2 text-sm text-slate-600">蛍光灯からLED蛍光灯への全灯切り替えの場合</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">事業規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">灯数</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">現在の照明電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減額/月</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減率</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">初期費用目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">回収期間</th>
                </tr>
              </thead>
              <tbody>
                {ledEffectByScale.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2 font-medium text-slate-800">{row.scale}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.lamps}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.currentCost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-emerald-700">{row.saving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.ratio}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.initCost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※補助金（省エネ設備補助等）を活用した場合、初期費用と回収期間はさらに短縮できます。</p>
        </div>
      </section>

      {/* LED削減バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">照明種別 LED化による削減率の比較</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "水銀灯→LED（工場・屋外）", value: 60, note: "50〜65%削減", color: "bg-amber-500" },
              { label: "蛍光灯（直管）→LED", value: 48, note: "40〜55%削減", color: "bg-amber-400" },
              { label: "蛍光灯（丸型）→LED", value: 45, note: "40〜50%削減", color: "bg-sky-500" },
              { label: "白熱球・ハロゲン→LED", value: 85, note: "75〜90%削減", color: "bg-emerald-500" },
              { label: "HIDランプ→LED（店舗）", value: 55, note: "45〜65%削減", color: "bg-purple-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-52 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-3 rounded ${item.color}`} style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-emerald-700">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 空調最適化施策テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">空調最適化施策の一覧と削減効果</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">施策</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">削減効果</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">初期コスト</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">着手時期</th>
                </tr>
              </thead>
              <tbody>
                {airconEffectData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2 font-medium text-slate-800">{row.measure}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.effect}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.cost}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 空調削減バーグラフ */}
      <section className="mt-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">空調施策別 削減効果の比較（空調電力量に対する割合）</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "高効率機への更新", value: 85, note: "20〜35%削減", color: "bg-sky-600" },
              { label: "インバータ切り替え", value: 70, note: "15〜30%削減", color: "bg-sky-500" },
              { label: "建物断熱改修", value: 60, note: "10〜25%削減", color: "bg-emerald-500" },
              { label: "センサー制御導入", value: 50, note: "10〜20%削減", color: "bg-purple-500" },
              { label: "設定温度適正化（+2℃）", value: 38, note: "5〜10%削減", color: "bg-amber-500" },
              { label: "フィルター清掃", value: 20, note: "2〜5%削減", color: "bg-teal-500" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-3 rounded ${item.color}`} style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-24 shrink-0 text-right text-sm font-semibold text-sky-700">{item.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LED+空調の合計効果 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LED化＋空調最適化の合計削減効果（年間試算）</h2>
          <p className="mt-2 text-sm text-slate-600">両施策を組み合わせた場合の年間削減額の目安</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">事業規模・業態</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">LED化削減額/年</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">空調最適化削減額/年</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">合計削減額/年</th>
                </tr>
              </thead>
              <tbody>
                {combinedEffectData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2 font-medium text-slate-800">{row.type}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-emerald-700">{row.ledSaving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-sky-700">{row.airconSaving}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-bold text-slate-900">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 補助金情報 */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">設備更新に活用できる主な補助金・支援制度</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">省エネルギー投資促進支援事業（経産省）</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">省エネ設備への更新を対象に、投資額の一部を補助。LED・高効率空調・インバータ等が対象となる場合があります。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">事業再構築補助金・ものづくり補助金</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">省エネ設備更新を含む設備投資が対象になる場合があります。対象要件・申請時期は各公募要領をご確認ください。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">地方自治体の補助金</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">都道府県・市区町村が独自にLED照明・省エネ空調の導入補助を実施している場合があります。地域の担当窓口に確認してください。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold text-slate-900">リース・PPAの活用</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">LED照明・太陽光発電などはリースやPPA（電力購入協定）を活用することで初期費用ゼロで導入できる場合があります。月々の削減額が支払いを上回れば即座にコスト削減効果が得られます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの削減効果は業界平均を参考にした概算値です。設備の種類・使用時間・建物の特性・地域によって効果は異なります。正確な削減余地の評価は省エネ診断士や専門業者にご相談ください。
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
            { href: "/electricity-cost-reduction-action-map", title: "電気代削減アクション一覧", description: "即効・短期・中長期で整理した施策マップ全体を確認" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "基本料金を下げるデマンド管理の仕組みと効果" },
            { href: "/contract-review-reduction-effect", title: "契約見直しによる削減額の目安", description: "プラン切替・契約電力見直しの効果を解説" },
            { href: "/reduction-measure-difficulty-matrix", title: "削減施策の効果・難易度マトリクス", description: "施策の優先順位を可視化するマトリクス" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの手順と最初にすべきことを解説。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="設備対策の効果を自社で試算する"
          description="現在の電気代水準と削減余地をシミュレーターで確認し、どの設備対策を優先すべきかの判断材料にしてください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/electricity-cost-reduction-action-map", label: "削減施策一覧を見る" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
