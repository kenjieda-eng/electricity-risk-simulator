import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "オフィスの電気代相場｜従業員数・坪数・ビル規模別のベンチマーク";
const pageDescription =
  "オフィスの電気代を従業員数・坪数・ビル規模別に徹底解説。一人あたり月2,000〜5,000円が目安。テナントビル・自社ビル別の内訳構成と、相場より高い場合の確認ポイントも紹介します。";
const pageUrl = "https://simulator.eic-jp.org/office-electricity-cost-benchmark";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "オフィス 電気代 相場",
    "法人 オフィス 電気料金",
    "従業員数 電気代",
    "坪数 電気代",
    "テナントビル 電気代",
    "オフィスビル 電気代 目安",
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

const benchmarkByEmployee = [
  { size: "小規模（〜10名）", floor: "〜30坪", demand: "10〜20kW", usage: "500〜1,500kWh", monthly: "1.5〜4.5万円", perPerson: "1,500〜4,500円" },
  { size: "小規模（10〜30名）", floor: "30〜80坪", demand: "20〜50kW", usage: "1,500〜4,000kWh", monthly: "4.5〜12万円", perPerson: "2,000〜4,500円" },
  { size: "中規模（30〜100名）", floor: "80〜250坪", demand: "50〜150kW", usage: "4,000〜1.5万kWh", monthly: "12〜45万円", perPerson: "2,500〜5,000円" },
  { size: "中規模（100〜300名）", floor: "250〜700坪", demand: "150〜400kW", usage: "1.5〜4万kWh", monthly: "45〜120万円", perPerson: "3,000〜5,000円" },
  { size: "大規模（300〜1,000名）", floor: "700〜2,000坪", demand: "400kW〜1MW", usage: "4〜10万kWh", monthly: "120〜300万円", perPerson: "3,000〜4,000円" },
  { size: "大規模（1,000名以上）", floor: "2,000坪以上", demand: "1MW以上", usage: "10万kWh以上", monthly: "300万円〜", perPerson: "2,500〜3,500円" },
];

const benchmarkByFloor = [
  { category: "10坪（約33㎡）", usage: "200〜400kWh", monthly: "6,000〜1.2万円", note: "個人事務所・SOHO" },
  { category: "30坪（約100㎡）", usage: "600〜1,200kWh", monthly: "1.8〜3.6万円", note: "小規模オフィス" },
  { category: "100坪（約330㎡）", usage: "2,000〜4,000kWh", monthly: "6〜12万円", note: "中小企業の典型サイズ" },
  { category: "300坪（約990㎡）", usage: "6,000〜1.2万kWh", monthly: "18〜36万円", note: "中規模フロア" },
  { category: "1,000坪（約3,300㎡）", usage: "2〜4万kWh", monthly: "60〜120万円", note: "大型フロア・丸ビル1フロア相当" },
  { category: "3,000坪（約1万㎡）", usage: "6〜12万kWh", monthly: "180〜360万円", note: "本社ビル規模" },
];

const breakdownData = [
  { item: "空調（冷暖房）", ratio: "40〜55%", bar: 48 },
  { item: "照明", ratio: "20〜30%", bar: 25 },
  { item: "OA機器・PC", ratio: "10〜20%", bar: 15 },
  { item: "サーバー・通信機器", ratio: "5〜15%", bar: 10 },
  { item: "給湯・その他", ratio: "5〜10%", bar: 7 },
];

export default function OfficeElectricityCostBenchmarkPage() {
  return (
    <>
      <ArticleJsonLd
        headline="オフィスの電気代相場｜従業員数・坪数・ビル規模別のベンチマーク"
        description="オフィスの電気代を従業員数・坪数・ビル規模別に徹底解説。一人あたり月2,000〜5,000円が目安。テナントビル・自社ビル別の内訳構成と、相場より高い場合の確認ポイントも紹介します。"
        url="https://simulator.eic-jp.org/office-electricity-cost-benchmark"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "オフィスの電気代相場" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">オフィスの電気代相場</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          オフィスの電気代相場
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">従業員数・坪数・ビル規模別のベンチマーク</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          一般的なオフィスの電気代は、従業員一人あたり月2,000〜5,000円が目安です。ただし、規模・ビルの断熱性能・空調の効率・OA機器の種類によって大きく変わります。
          自社の電気代が適正かどうかを判断するためのベンチマークデータを、従業員数・坪数・ビル規模の3軸で整理しました。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">オフィスの電気代を決める3つの要因</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-800">① 空調効率</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                電気代の40〜55%を占める空調が最大のコスト要因。築年数が古い・天井が高い・外壁断熱が弱いビルほど空調負荷が増加します。
              </p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-800">② 照明・OA機器</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                照明がLED化されているか、PCがデスクトップかノートかでも差が出ます。サーバーをオンプレで持つ場合はさらに消費量が増加。
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">③ 契約プラン</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                低圧・高圧の契約区分、基本料金の設定、時間帯別プランの選択が月額に影響します。特に契約電力の過不足は基本料金の無駄につながります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 従業員数別テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">従業員数別 オフィス電気代ベンチマーク</h2>
          <p className="mt-2 text-sm text-slate-600">一般事務・IT系オフィスの場合（製造・医療設備なし）</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">フロア面積</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">契約電力目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月間使用量</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">一人あたり/月</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkByEmployee.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.size}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.floor}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.demand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.usage}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.monthly}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.perPerson}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 坪数別テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">坪数別 オフィス電気代ベンチマーク</h2>
          <p className="mt-2 text-sm text-slate-600">標準的な事務用途の場合の概算値</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">フロア面積</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月間使用量目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">該当事例</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkByFloor.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.category}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.usage}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.monthly}</td>
                    <td className="px-4 py-2 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 用途別内訳バーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">オフィス電気代の用途別内訳（一般的な割合）</h2>
          <p className="mt-2 text-sm text-slate-600">何にどれだけ電気を使っているかを把握することが削減の出発点です</p>
          <div className="mt-5 space-y-4">
            {breakdownData.map((item) => (
              <div key={item.item} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.item}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div
                    className="h-4 rounded bg-sky-500"
                    style={{ width: `${item.bar}%` }}
                  />
                </div>
                <span className="w-24 shrink-0 text-right text-sm font-semibold text-slate-700">{item.ratio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* テナントビル vs 自社ビル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">テナントビル vs 自社ビル：電気代の違い</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">テナントビル入居の場合</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・ビルオーナーが高圧一括受電し、テナントに転売するケースが多い</li>
                <li>・共用部の電気代が賃料や管理費に含まれていることがある</li>
                <li>・専用部の契約方法はビルによって異なり、交渉余地が限られる</li>
                <li>・一人あたり月3,000〜6,000円が相場（共益費込みの場合）</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">自社ビル・独立建屋の場合</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・直接電力会社と契約するため、プラン変更の自由度が高い</li>
                <li>・高圧契約に切り替えることで電力量単価を下げられる場合がある</li>
                <li>・設備投資（LED化・空調更新）の効果が直接コストに反映される</li>
                <li>・太陽光・蓄電池の導入検討も可能</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 相場より高い場合の確認ポイント */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">相場より高い場合に確認すべきポイント</h2>
          <ol className="mt-3 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
            <li><strong>空調設備の年式：</strong>10年以上経過している場合、効率が20〜30%低下していることがあります。インバータ式への更新を検討してください。</li>
            <li><strong>照明のLED化率：</strong>蛍光灯が残っている場合、LED化で照明電力を40〜60%削減できます。</li>
            <li><strong>PCのスリープ設定：</strong>退勤後にPCやモニターが稼働したままになっていないか確認しましょう。</li>
            <li><strong>デマンドのピーク管理：</strong>昼食後の一斉稼働などで契約電力が跳ね上がっていないか、デマンド実績を確認してください。</li>
            <li><strong>契約プランの見直し：</strong>低圧契約のまま大規模フロアを借りている場合、高圧切替で基本料金単価を下げられる可能性があります。</li>
          </ol>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの金額は業界平均を参考にした概算値です。契約区分・地域・使用パターンにより大きく変動します。正確な見積は専門家にご相談ください。
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
            { href: "/electricity-cost-benchmark-by-industry", title: "業種別 法人電気代の月額相場一覧", description: "製造・小売・飲食・宿泊・医療・物流の相場を一覧で確認" },
            { href: "/contract-demand-what-is-it", title: "契約電力とは", description: "デマンド値の決まり方と基本料金への影響" },
            { href: "/led-air-conditioning-reduction-effect", title: "LED化・空調最適化の削減効果", description: "設備対策でどれだけ使用量を下げられるか" },
            { href: "/contract-review-reduction-effect", title: "契約見直しによる削減額の目安", description: "プラン切替・契約電力見直しの効果を解説" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社のオフィス電気代を診断する"
          description="契約電力・月間使用量を入力して、現在の電気代水準と削減余地をシミュレーションできます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to-start-electricity-contract-review", label: "電力契約の見直し方を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
