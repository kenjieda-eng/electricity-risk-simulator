import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "飲食店の電気代相場｜業態・席数・営業時間別のベンチマーク";
const pageDescription =
  "居酒屋・ファミレス・ラーメン店・焼肉店・カフェなど飲食業態別の電気代相場を席数・営業時間別に解説。厨房設備・空調・照明の内訳と、コスト削減に効く施策も紹介します。";
const pageUrl = "https://simulator.eic-jp.org/restaurant-electricity-cost-benchmark";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "飲食店 電気代 相場",
    "居酒屋 電気代",
    "ファミレス 電気代",
    "ラーメン店 電気代",
    "焼肉店 電気代",
    "飲食業 電力コスト 目安",
    "飲食店 電気料金",
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

const benchmarkData = [
  { type: "カフェ・喫茶店（20席）", seats: "20席", hours: "8〜20時", demand: "8〜15kW", usage: "800〜1,500kWh", monthly: "2.4〜4.5万円", yearly: "29〜54万円" },
  { type: "ラーメン店（30席）", seats: "30席", hours: "11〜23時", demand: "10〜20kW", usage: "1,500〜2,800kWh", monthly: "4.5〜8.4万円", yearly: "54〜100万円" },
  { type: "居酒屋（40席）", seats: "40席", hours: "17〜24時", demand: "15〜30kW", usage: "3,000〜5,000kWh", monthly: "9〜15万円", yearly: "108〜180万円" },
  { type: "焼肉店（50席）", seats: "50席", hours: "17〜23時", demand: "20〜40kW", usage: "3,500〜6,000kWh", monthly: "10.5〜18万円", yearly: "126〜216万円" },
  { type: "ファミリーレストラン（80席）", seats: "80席", hours: "7〜24時", demand: "40〜80kW", usage: "7,000〜1.5万kWh", monthly: "21〜45万円", yearly: "252〜540万円" },
  { type: "回転寿司（100席）", seats: "100席", hours: "11〜22時", demand: "50〜100kW", usage: "8,000〜1.8万kWh", monthly: "24〜54万円", yearly: "288〜648万円" },
  { type: "ファストフード（標準店）", seats: "50〜80席", hours: "7〜23時", demand: "30〜60kW", usage: "5,000〜1万kWh", monthly: "15〜30万円", yearly: "180〜360万円" },
  { type: "中華料理（60席）", seats: "60席", hours: "11〜23時", demand: "20〜45kW", usage: "4,000〜8,000kWh", monthly: "12〜24万円", yearly: "144〜288万円" },
  { type: "フランチャイズ居酒屋（80席）", seats: "80席", hours: "17〜25時", demand: "30〜50kW", usage: "5,000〜8,000kWh", monthly: "15〜24万円", yearly: "180〜288万円" },
  { type: "大型宴会場（200席以上）", seats: "200席以上", hours: "11〜24時", demand: "100〜200kW", usage: "2〜4万kWh", monthly: "60〜120万円", yearly: "720万〜1,440万円" },
  { type: "深夜営業バー（20席）", seats: "20席", hours: "20〜翌5時", demand: "5〜15kW", usage: "700〜1,500kWh", monthly: "2〜4.5万円", yearly: "24〜54万円" },
  { type: "ビュッフェ・バイキング（120席）", seats: "120席", hours: "11〜21時", demand: "80〜150kW", usage: "1.5〜3万kWh", monthly: "45〜90万円", yearly: "540〜1,080万円" },
];

const barData = [
  { label: "大型宴会場（200席）", value: 85, color: "bg-slate-700", note: "60〜120万円/月" },
  { label: "ビュッフェ（120席）", value: 65, color: "bg-sky-600", note: "45〜90万円/月" },
  { label: "回転寿司（100席）", value: 50, color: "bg-emerald-500", note: "24〜54万円/月" },
  { label: "ファミレス（80席）", value: 42, color: "bg-amber-500", note: "21〜45万円/月" },
  { label: "焼肉店（50席）", value: 25, color: "bg-rose-500", note: "10.5〜18万円/月" },
  { label: "居酒屋（40席）", value: 18, color: "bg-purple-500", note: "9〜15万円/月" },
  { label: "ラーメン店（30席）", value: 9, color: "bg-teal-500", note: "4.5〜8.4万円/月" },
  { label: "カフェ（20席）", value: 5, color: "bg-sky-400", note: "2.4〜4.5万円/月" },
];

const breakdownData = [
  { item: "厨房機器（コンロ・フライヤー等）", ratio: "30〜45%", bar: 38, color: "bg-rose-500" },
  { item: "空調（冷暖房）", ratio: "20〜30%", bar: 25, color: "bg-sky-500" },
  { item: "換気・厨房フード", ratio: "10〜20%", bar: 15, color: "bg-amber-500" },
  { item: "照明（客席・看板）", ratio: "10〜20%", bar: 15, color: "bg-emerald-500" },
  { item: "冷蔵・製氷設備", ratio: "5〜15%", bar: 10, color: "bg-purple-400" },
  { item: "その他（POS・BGM等）", ratio: "2〜5%", bar: 4, color: "bg-slate-400" },
];

export default function RestaurantElectricityCostBenchmarkPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">飲食店の電気代相場</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          飲食店の電気代相場
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">業態・席数・営業時間別のベンチマーク</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          飲食店の電気代は、業態・席数・営業時間によって幅広い範囲に分布しています。カフェ（20席）では月2〜5万円程度ですが、大型宴会場（200席以上）では月60〜120万円に達します。
          同業態・同規模の店舗と比較して自社の電気代が妥当かどうかを判断するためのベンチマークデータを整理しました。
          コスト削減のためのチェックポイントも含めて解説します。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">飲食店の電気代が高くなる理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            飲食店は同じ面積のオフィスや小売店と比べて電気代が高い傾向があります。その理由は、①<strong>厨房機器の大電力消費</strong>（コンロ・フライヤー・スチームコンベクションなど）、
            ②<strong>強力な換気設備</strong>（厨房フード・排気ファン）、③<strong>冷蔵・製氷機の連続稼働</strong>の3点が主因です。
            また夏冬の空調負荷も大きく、客席の快適性を維持するためのコストが恒常的にかかります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特に焼肉店・鉄板焼き店・中華料理店などは火力設備と換気設備の組み合わせで、他の業態と比較して電気代が高くなりやすい業態です。
            一方、カフェや軽食店は厨房規模が小さく電気代は比較的低水準です。
          </p>
        </div>
      </section>

      {/* メインテーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業態・席数別 飲食店電気代相場一覧</h2>
          <p className="mt-2 text-sm text-slate-600">2024〜2025年度の料金水準をベースにした概算値（1店舗あたり）</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">業態・規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">席数</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">営業時間</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">契約電力</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月間使用量</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">年間換算</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.type}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.seats}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.hours}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.demand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.usage}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.monthly}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* バーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業態別 月額電気代の規模感（代表値）</h2>
          <div className="mt-5 space-y-4">
            {barData.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-32 shrink-0 text-right text-sm font-semibold text-slate-700">{item.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">※各業態の代表的な規模における月額電気代の目安です。</p>
        </div>
      </section>

      {/* 内訳バーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">飲食店の電気代内訳（居酒屋・ファミレスの場合）</h2>
          <p className="mt-2 text-sm text-slate-600">厨房機器と換気設備が電気消費の中心を占めます</p>
          <div className="mt-5 space-y-4">
            {breakdownData.map((item) => (
              <div key={item.item} className="flex items-center gap-3">
                <span className="w-52 shrink-0 text-sm text-slate-700">{item.item}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.bar * 2.5}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-slate-700">{item.ratio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 業態別の特徴 */}
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">焼肉・鉄板焼き店の特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            卓上グリル・無煙ロースターの電力消費に加え、強力な換気ダクトが大量の電気を消費します。
            同席数の居酒屋と比較して30〜50%電気代が高くなることが多く、換気設備の省エネ化が最大の課題です。
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">ファストフード・ファミレスの特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            早朝から深夜まで長時間営業のため、空調・照明の稼働時間が長くなります。
            フランチャイズ本部が省エネ基準を設けているチェーンもあり、本部仕様の設備選定が重要です。
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">回転寿司・ビュッフェの特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            冷蔵・保温レーン設備が常時稼働し、電力消費量が多い業態です。
            食材の温度管理が品質に直結するため、省エネのために温度を緩めることが難しく、設備効率の改善が主な対策となります。
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">カフェ・軽食店の特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            厨房規模が小さく電気代は比較的低水準ですが、エスプレッソマシン・冷蔵ケース・空調が主な消費源です。
            おしゃれな照明を多用する業態では照明コストが割高になるケースもあります。
          </p>
        </div>
      </section>

      {/* 削減ポイント */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">飲食店の電気代削減に効く施策</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li><strong>厨房換気ファンの回転数制御：</strong>インバータ制御で換気量を調整することで、換気電力を20〜40%削減できます。調理量に合わせた自動制御が理想的です。</li>
            <li><strong>空調フィルターの定期清掃：</strong>月1〜2回のフィルター清掃で空調効率を維持し、過負荷による電力増加を防ぎます。</li>
            <li><strong>LED照明への切り替え：</strong>客席・看板・厨房のLED化で照明電力を40〜60%削減。演色性の高いLEDで食材の見栄えも改善できます。</li>
            <li><strong>製氷機・冷蔵庫の適正管理：</strong>冷蔵庫の設定温度の適正化、扉の開閉回数の削減、製氷機の氷量設定の最適化。</li>
            <li><strong>ピーク時間帯の集中管理：</strong>ランチ・ディナーピーク時に設備が一斉に稼働しないよう起動タイミングをずらすことで、デマンド値を抑制できます。</li>
          </ul>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの金額は業界平均を参考にした概算値です。契約区分・地域・設備の種類・使用パターンにより大きく変動します。正確な見積は専門家にご相談ください。
          </p>
        </div>
      </section>

      {/* データの根拠と出典 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">データの根拠と出典</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          本ページの相場データは以下の公的統計・業界データを参考に、エネルギー情報センターが独自に整理・概算したものです。
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          <li>
            <span className="font-semibold">経済産業省 資源エネルギー庁</span>「電力調査統計」（電灯電力需要実績 月次・年次）
            ― 契約種別・地域別の販売電力量・料金収入から平均単価を算出
          </li>
          <li>
            <span className="font-semibold">電力・ガス取引監視等委員会</span>「電力取引報」（小売電気事業者の販売実績）
            ― 高圧・特別高圧の事業者別販売量・単価水準の参照
          </li>
          <li>
            <span className="font-semibold">経済産業省</span>「エネルギー消費統計調査」
            ― 業種別・規模別のエネルギー消費原単位データ
          </li>
          <li>
            <span className="font-semibold">総務省統計局</span>「経済センサス―活動調査」
            ― 業種別事業所数・従業者数の規模区分
          </li>
          <li>
            <span className="font-semibold">一般社団法人エネルギー情報センター</span> 独自調査・ヒアリング
            ― 法人向け電力見積・契約実績データの集計分析
          </li>
        </ul>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-amber-800">
            <span className="font-semibold">重要:</span> 本ページの数値は上記データをもとにした概算・目安であり、
            特定の契約条件や時期における正確な請求額を保証するものではありません。
            実際の電気料金は契約プラン・使用パターン・地域・時期により大きく異なります。
            最終的な判断には、必ず電力会社の見積書や請求書の実データをご確認ください。
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          最終更新: 2026年4月（2024〜2025年度の料金水準を反映）
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/electricity-cost-benchmark-by-industry", title: "業種別 法人電気代の月額相場一覧", description: "業種横断での電気代相場を一覧で比較" },
            { href: "/retail-store-electricity-cost-benchmark", title: "小売店舗の電気代相場", description: "コンビニ・スーパー・ドラッグストアの業態別相場" },
            { href: "/led-air-conditioning-reduction-effect", title: "LED化・空調最適化の削減効果", description: "設備対策で使用量をどれだけ下げられるか" },
            { href: "/electricity-cost-reduction-action-map", title: "電気代削減アクション一覧", description: "即効・短期・中長期で整理した削減施策マップ" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="飲食店の電気代リスクを診断する"
          description="契約電力・月間使用量を入力して、現在の電気代水準と今後の上昇リスクをシミュレーションできます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "節約・見直しの解説を読む" },
          ]}
        />
      </div>
    </main>
  );
}
