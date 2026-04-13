import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { JEPX_AREA_YEARLY_AVG } from "../../data/jepxData";
import { DEMAND_AREA_FY, LOAD_FACTOR_FY, DEMAND_AREA_SHARE } from "../../data/demandData";
import { getWeatherByRegion } from "../../data/weatherData";

const pageTitle = "四国電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "四国電力エリア（香川・徳島・愛媛・高知）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、伊方原発の稼働影響、太陽光出力制御リスク、新電力の参入状況と契約見直しポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-shikoku-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "四国電力 法人",
    "四国電力エリア 電気料金",
    "香川 高圧電力 単価",
    "四国電力 料金改定",
    "四国 新電力",
    "法人電気代 四国",
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

const prefectures = ["香川県", "徳島県", "愛媛県", "高知県"];

const areaBasicInfo = [
  { label: "担当都道府県", value: "香川県・徳島県・愛媛県・高知県" },
  { label: "旧一般電気事業者", value: "四国電力（送配電：四国電力送配電）" },
  { label: "小売子会社", value: "四国電力" },
  { label: "管内面積（概算）", value: "約 18,800 km²" },
  { label: "管内世帯数（概算）", value: "約 170万世帯" },
  { label: "法人需要家数の目安", value: "約 20万口（高圧以上：約 1.2万口）" },
  { label: "電源構成の特徴", value: "原子力（伊方原発）が約20〜25%、LNG火力約20%、石炭火力約15%、水力約10%、太陽光約15%" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 12〜18%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,500〜1,800 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・紙パルプ・化学工場向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,600〜2,000 円/kW",
    ryoryo: "約 15〜18 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 950〜1,150 円/kW",
    ryoryo: "約 16〜19 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請認可。高圧・特別高圧の自由化メニューも同時期に標準プランを改定。LNG・石炭の高騰を反映。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。LNG・石炭価格の高止まりを受けてプラス幅が継続。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年8月",
    content: "伊方原発3号機が定期検査後に再稼働。電源構成の原子力比率が回復し、燃調費プラス幅の抑制に寄与。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。太陽光の普及が進む四国でも賦課金負担は増加。",
  },
  {
    date: "2026年4月（直近）",
    content: "伊方原発稼働の安定化傾向により燃調費は落ち着き気味。ただし容量拠出金・再エネ賦課金は継続してコスト上昇圧力に。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "小規模エリアのため新電力の参入社数は全国でも少ない部類。20〜30社程度が高圧向けプランを展開（2024年時点）。需要規模の制約から大手新電力でも限定的な展開にとどまるケースが多い。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022〜2023年のエネルギー危機では、四国エリアでも一部新電力が高圧向け新規受付を停止・既存契約の解除通知を実施。需要規模が小さいだけに影響を受けた需要家の割合が相対的に高かった。",
  },
  {
    category: "市場シェア推移",
    detail:
      "2020年に約8%だった新電力シェアが2022年には18%前後まで拡大したが、撤退で2023年は12〜15%程度に縮小。参入社数の少なさから回復のペースは緩やか。",
  },
  {
    category: "価格競争力",
    detail:
      "需要規模が小さく競合が少ないため、新電力が大きな値引きを提示しにくい構造。ただし伊方原発が安定稼働している局面では四国電力の標準メニューも比較的安定しており、比較によるメリットが出しやすいタイミングがある。",
  },
];

export default function RegionShikokuBusinessElectricityPage() {
  const weather = getWeatherByRegion("shikoku");
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">四国電力エリアの事情</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          四国電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          四国電力エリア（香川・徳島・愛媛・高知の4県）は、伊方原発の稼働状況が料金水準を大きく左右するエリアです。
          一方で太陽光発電の普及に伴う出力制御が頻発しており、再エネ活用にも制約があります。
          需要規模が小さいため新電力の参入が限定的で、電力調達の選択肢が少ない点も特徴です。
          本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・契約見直しポイントを詳しく解説します。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prefectures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800"
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      {/* エリア基本情報テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア基本情報</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          四国電力エリアの規模感・事業者構成を確認してください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                  項目
                </th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                  内容
                </th>
              </tr>
            </thead>
            <tbody>
              {areaBasicInfo.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700 whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 料金水準テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">料金水準（法人向け標準メニュー目安）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          以下は四国電力の標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">メニュー区分</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">基本料金目安</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">電力量料金目安</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">燃調・賦課金</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">{row.menu}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.kihon}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.ryoryo}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-600">{row.nencho}</td>
                  <td className="border border-slate-200 px-4 py-2 text-slate-500 text-xs">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 他エリアとの料金比較（CSSバー） */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">他エリアとの料金比較（高圧電力量料金 目安）</h3>
          <p className="mt-1 text-xs text-slate-500">各エリア旧一電の標準メニューベース概算。燃調・賦課金除く。</p>
          <div className="mt-4 space-y-3">
            {[
              { area: "北海道電力エリア", value: 18.5, color: "bg-blue-400" },
              { area: "東北電力エリア", value: 16.2, color: "bg-teal-400" },
              { area: "東京電力エリア", value: 15.5, color: "bg-sky-400" },
              { area: "中部電力エリア", value: 15.0, color: "bg-emerald-400" },
              { area: "北陸電力エリア", value: 14.5, color: "bg-green-400" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア（当エリア）", value: 17.0, color: "bg-amber-600" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア", value: 19.5, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className={item.area.includes("当エリア") ? "font-bold text-sky-800" : ""}>{item.area}</span>
                  <span>{item.value} 円/kWh 前後</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-100">
                  <div
                    className={`h-4 rounded ${item.color}`}
                    style={{ width: `${((item.value - 12) / 9) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">※目安値。実際の請求単価は契約内容・使用量・時期により異なります。</p>
        </div>
      </section>

      {/* エリア特有の事情 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国電力エリア特有の事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">伊方原発の安定稼働が料金安定の鍵</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              四国電力エリアでは伊方原発（愛媛県）が電源構成の約20〜25%を担い、稼働の有無が燃料費調整額に
              直接影響します。定期検査や規制対応による停止期間には火力発電の比率が高まり、
              燃調費が増加する傾向があります。原発の稼働スケジュールを注視することが
              電気料金の変動予測に重要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">太陽光発電の出力制御が頻発</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              四国では太陽光発電の普及が進む一方、系統の受け入れ余力に限界があり、
              晴天時には頻繁に出力制御が実施されています。再エネ電源を活用したPPAや
              非化石証書の調達コストに影響する可能性があります。
              また出力制御分は実質的に発電コストの無駄となるため、
              再エネ賦課金の将来的な上昇圧力にもなり得ます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">需要規模が小さく新電力参入が限定的</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              四国4県の需要規模は全国でも小さく、新電力各社の営業リソース配分が少ないエリアです。
              参入社数が限られるため競争による値引き効果を享受しにくい面があります。
              契約候補となる新電力が少ない分、慎重な事業者選別が求められます。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">紙パルプ・化学など電力多消費産業がある</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              愛媛県を中心に紙パルプ・化学工業などの電力多消費型製造業が立地しており、
              特別高圧での大口需要が存在します。製造コストに占める電力比率が高い業種では
              わずかな単価の変動も年間コストに大きく影響するため、電力調達戦略の重要性が高いエリアです。
            </p>
          </div>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最近の料金改定動向（2023〜2026年）</h2>
        <div className="mt-4 space-y-3">
          {revisionHistory.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-xs font-semibold text-sky-700 pt-1">{item.date}</div>
              <div className="flex-1 rounded-lg border border-slate-100 bg-slate-50 px-4 py-2 text-sm leading-7 text-slate-700">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 新電力動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">新電力動向</h2>
        <div className="mt-4 space-y-3">
          {newPowerStatus.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.category}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 契約見直しポイント */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">四国電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">伊方原発の稼働スケジュールを確認する</span>
            — 定期検査や規制対応のスケジュールが燃調費の変動と連動します。
            停止期間が見込まれる時期は燃調費上昇リスクを考慮した契約設計を検討してください。
          </li>
          <li>
            <span className="font-semibold">参入可能な新電力を幅広く調査する</span>
            — 需要規模の小さいエリアのため選択肢が限られますが、全国展開型の大手新電力は
            四国でも営業していることが多い。公式サイトや代理店経由での見積もり依頼を推奨します。
          </li>
          <li>
            <span className="font-semibold">燃料費調整額の仕組みと上限設定を確認する</span>
            — 新電力との契約時にキャップ（上限）の有無を必ず確認。
            原発停止時の燃調費急増リスクに対してキャップ付きプランは有効な保険となります。
          </li>
          <li>
            <span className="font-semibold">デマンドコントロールの余地を検討する</span>
            — 高圧・特別高圧の基本料金はデマンド（最大需要電力）で決まります。
            製造ラインや設備運用の調整でピークを抑制し、基本料金を削減できる場合があります。
          </li>
          <li>
            <span className="font-semibold">容量拠出金の影響を試算する</span>
            — 2024年度以降、電力調達コストに容量市場落札価格が加算されています。
            <Link href="/capacity-contribution-cost-impact" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金の詳細はこちら
            </Link>
          </li>
        </ol>
      </section>

      {/* 注記 */}
      <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※本ページの料金・シェア情報は2026年4月時点の公開情報をもとにした概算値です。
          正確な単価は各電力会社の公式ホームページまたは見積書でご確認ください。
        </p>
      </div>

      {/* JEPXエリアプライスの推移 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">JEPX卸市場でのエリアプライス推移</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          JEPX（日本卸電力取引所）における当エリアの年度別平均価格です。市場連動型プランの仕入れコストに直結するデータです。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-sky-50">
              <tr>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">当エリア（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">システムプライス（円/kWh）</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              {JEPX_AREA_YEARLY_AVG.filter(r => r.fy >= 2016).map((row, i) => {
                const areaPrice = row.shikoku;
                const diff = Number((areaPrice - row.systemPrice).toFixed(2));
                return (
                  <tr key={row.fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.fy}年度</td>
                    <td className="border border-slate-200 px-3 py-2">{areaPrice.toFixed(2)}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-500">{row.systemPrice.toFixed(2)}</td>
                    <td className={`border border-slate-200 px-3 py-2 font-semibold ${diff > 0 ? "text-red-600" : diff < 0 ? "text-emerald-600" : "text-slate-500"}`}>
                      {diff > 0 ? "+" : ""}{diff.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          四国エリアは伊方原発と太陽光の組み合わせにより、FY2025は8.85円とシステムプライスを-2.21円下回る安値傾向。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          四国電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "shikoku")?.share}%を占めます。全国最小規模の需要エリア。西日本クラスターとの高い連動性(0.95)。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">負荷率（%）</th>
              </tr>
            </thead>
            <tbody>
              {[2016, 2023].map((fy, i) => {
                const d = DEMAND_AREA_FY.find(r => r.fy === fy);
                const lf = LOAD_FACTOR_FY.find(r => r.fy === fy);
                return (
                  <tr key={fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">FY{fy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.shikoku.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.shikoku}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
      </section>

      {/* 気候データと電力需要の関係 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">気候データと電力需要の関係</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          松山の気象データから、当エリアの電力需要に影響する気候特性を整理します。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {weather.summerTmax && (
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-800">夏の最高気温（7-8月平均）</p>
              <p className="mt-1 text-2xl font-bold text-red-900">{weather.summerTmax.tmax2020_25}℃</p>
              <p className="mt-1 text-sm text-red-700">1990年代後半比 +{weather.summerTmax.change}℃</p>
            </div>
          )}
          {weather.winterTmin && (
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-800">冬の最低気温（1-2月平均）</p>
              <p className="mt-1 text-2xl font-bold text-blue-900">{weather.winterTmin.tmin2020_25}℃</p>
              <p className="mt-1 text-sm text-blue-700">1990年代後半比 {weather.winterTmin.change > 0 ? "+" : ""}{weather.winterTmin.change}℃</p>
            </div>
          )}
          {weather.hotDays && (
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-800">猛暑日（35℃超）の10年合計</p>
              <p className="mt-1 text-sm text-amber-700">1990年代: {weather.hotDays.d1990s}日 → 2020年代: {weather.hotDays.d2020s}日</p>
              <p className="mt-1 text-sm font-semibold text-amber-900">
                {weather.hotDays.d2020s > weather.hotDays.d1990s * 2 ? `約${Math.round(weather.hotDays.d2020s / Math.max(weather.hotDays.d1990s, 1))}倍に増加` : "増加傾向"}
              </p>
            </div>
          )}
          {weather.cdd ? (
            <div className="rounded-lg border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-semibold text-orange-800">冷房度日（CDD）の変化</p>
              <p className="mt-1 text-sm text-orange-700">{weather.cdd.cdd1995_99} → {weather.cdd.cdd2020_24}</p>
              <p className="mt-1 text-sm font-semibold text-orange-900">+{weather.cdd.changePercent}%増加</p>
            </div>
          ) : weather.hdd ? (
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-800">暖房度日（HDD）の変化</p>
              <p className="mt-1 text-sm text-sky-700">{weather.hdd.hdd1995_99} → {weather.hdd.hdd2020_24}</p>
              <p className="mt-1 text-sm font-semibold text-sky-900">{weather.hdd.changePercent}%減少</p>
            </div>
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          松山の猛暑日は8日→83日（約10倍）。広島との気温相関0.992と極めて高く、中国・四国・九州は気温面でほぼ一体的に動きます。
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-retrospective/high-voltage-2019-2025",
              title: "高圧電力 2019〜2025年料金推移",
              description: "全国高圧電力の料金推移データを年次グラフで確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃調費の仕組みと法人の請求額への影響を詳しく解説。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたとき",
              description: "撤退通知を受けた際の対処手順と緊急対応フローを解説。",
            },
            {
              href: "/region-chugoku-business-electricity",
              title: "中国電力エリアの法人電気代事情",
              description: "石炭火力依存と島根原発再稼働による影響を解説。",
            },
            {
              href: "/region-kyushu-business-electricity",
              title: "九州電力エリアの法人電気代事情",
              description: "原発比率が高く料金水準が安定している九州エリアを解説。",
            },
            {
              href: "/region-supplier-withdrawal-map",
              title: "エリア別 新電力撤退状況マップ",
              description: "2022年以降の新電力撤退・解除状況を10エリアで比較。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="四国電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、原発停止リスク・容量拠出金・再エネ賦課金の影響を数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
  );
}
