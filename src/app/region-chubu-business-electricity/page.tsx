import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { JEPX_AREA_YEARLY_AVG } from "../../data/jepxData";
import { DEMAND_AREA_FY, LOAD_FACTOR_FY, DEMAND_AREA_SHARE } from "../../data/demandData";

const pageTitle = "中部電力エリアの法人電気代事情｜製造業集積地の電力事情";
const pageDescription =
  "中部電力エリア（東海5県＋長野・静岡富士川以西）の法人向け電気料金を詳解。製造業・自動車産業集積による大口産業電力の特性、高圧・特別高圧の単価目安、2023〜2026年の改定動向、新電力状況と契約見直しのポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-chubu-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中部電力 法人",
    "中電エリア 電気料金",
    "中部 高圧電力 単価",
    "中部電力 製造業",
    "愛知 法人電気代",
    "東海 新電力",
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

const prefectures = [
  "愛知県",
  "静岡県（富士川以西）",
  "岐阜県（一部）",
  "三重県（一部）",
  "長野県",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "愛知県・静岡県（富士川以西）・岐阜県（一部）・三重県（一部）・長野県" },
  { label: "旧一般電気事業者", value: "中部電力（送配電：中部電力パワーグリッド）" },
  { label: "小売子会社", value: "中部電力ミライズ" },
  { label: "管内面積（概算）", value: "約 39,800 km²" },
  { label: "管内世帯数（概算）", value: "約 760万世帯" },
  { label: "法人需要家数の目安", value: "約 100万口（高圧以上：約 10万口）" },
  { label: "電源構成の特徴", value: "LNG火力約 40〜45%、石炭火力約 15%、浜岡原発は停止中（2026年4月時点）" },
  { label: "産業用電力の特性", value: "製造業・自動車関連の大口産業電力需要が全国随一。特別高圧の契約件数が多い" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 20〜25%（高圧・特別高圧の推計）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,300〜1,600 円/kW",
    ryoryo: "約 10.5〜13 円/kWh",
    nencho: "燃調費別途",
    note: "大型工場・自動車メーカー向け",
  },
  {
    menu: "高圧（6kV）産業用電力",
    kihon: "約 1,400〜1,800 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "中規模工場・部品メーカー向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,400〜1,800 円/kW",
    ryoryo: "約 14〜17 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・商業施設向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 850〜1,050 円/kW",
    ryoryo: "約 14〜17 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ認可。中部電力ミライズも高圧・特別高圧の標準メニューを同時期に改定。浜岡原発停止による発電コスト増を反映。",
  },
  {
    date: "2023年9月",
    content: "LNG スポット価格の落ち着きを受けて燃料費調整額のプラス幅が縮小傾向に転じる。ただし絶対水準は依然として高い。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。製造業大手の特別高圧需要家においても調達コストに転嫁され、年間数百万円規模の追加コストが発生するケースも。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置終了。製造業の電力コストが再び上昇し、原価管理上のインパクトが顕在化。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金 3.49 円/kWh へ引き上げ。大口産業需要家でも購入電力量が多いため、年間の賦課金総額が膨らむ。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG価格のやや落ち着きにより燃調費プラス幅は縮小傾向。ただし浜岡原発の再稼働見通しは依然として不透明で、火力依存は継続。",
  },
];

const manufacturingFeatures = [
  {
    title: "産業用電力需要が全国最大規模",
    body: "愛知県を中心とする中部エリアは自動車・機械・航空宇宙などの製造業が高密度で集積しており、24時間稼働の大型工場も多いです。特別高圧（2万V以上）の大口需要家数は全国で最も多いエリアの一つで、電力調達コストの管理が製品原価に直結します。",
  },
  {
    title: "浜岡原発停止による電源構成の変化",
    body: "2011年以降、中部電力の浜岡原子力発電所（静岡県）は停止が継続しています（2026年4月時点）。本来なら原子力で賄えた電力をLNG火力・石炭火力で代替しているため、電力調達コストが高止まりしやすい構造となっています。再稼働の見通しは規制審査の状況に依存します。",
  },
  {
    title: "製造業のEV化・脱炭素対応で電力需要増",
    body: "自動車メーカーの EV 製造ラインへの転換に伴い、工場の電力需要がさらに増加する見通しがあります。一方で脱炭素目標（Scope2削減）のため、再エネ電力・非化石証書・オフサイト PPA の需要も急増しており、電力調達戦略が複雑化しています。",
  },
  {
    title: "インフラ系・官公庁需要の存在感",
    body: "名古屋市・浜松市・静岡市などの大都市を抱えるエリアでもあり、商業施設・交通・行政施設の電力需要も大きい。大口産業に加えて業務用の高圧需要家も多く、新電力の営業対象として幅広い。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "製造業大手の電力購買部門が相見積もりを徹底するため、新電力各社が積極営業。50〜70社程度が高圧以上のプランを展開（2024年時点）。中部電力ミライズと競合するEneos・豊通グループ系なども存在感。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のエネルギー危機時に複数の中小新電力が高圧向け新規受付停止。大口産業需要家は長期固定契約が多いため、撤退通知の影響は他エリアより相対的に少ないが、中小工場は注意が必要。",
  },
  {
    category: "大口交渉の特性",
    detail:
      "製造業の大口需要家はサプライチェーン全体の電力購買一括契約や複数拠点の一括入札を実施するケースも多い。単価の引き下げ余地は小口より大きく、専門の電力調達コンサルタントを起用する企業もある。",
  },
  {
    category: "価格競争力",
    detail:
      "中部電力ミライズの高圧標準単価は全国中位程度。新電力は5〜12%程度の引き下げを提示することが多い。ただし固定価格契約の期間設定が重要で、市場連動型は変動リスクあり。",
  },
];

export default function RegionChubuBusinessElectricityPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-teal-200 bg-teal-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-teal-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          中部電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-teal-800">製造業集積地の電力事情</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          中部電力エリアは、自動車・機械・航空宇宙など日本を代表する製造業が集積する地域です。
          24時間稼働の大型工場が多く、特別高圧・高圧の産業用電力が電力需要の大きな割合を占めます。
          一方、浜岡原発の停止が継続しており、LNG 火力への依存が電気料金の押し上げ要因となっています。
          本ページでは、エリアの基本情報・料金水準・産業特性・新電力状況・見直しポイントを詳しく解説します。
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {prefectures.map((p) => (
            <span
              key={p}
              className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800"
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
          中部電力エリアの規模感・事業者構成・電源特性を確認してください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-teal-50">
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">項目</th>
                <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">内容</th>
              </tr>
            </thead>
            <tbody>
              {areaBasicInfo.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700 whitespace-nowrap">{row.label}</td>
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
          以下は中部電力ミライズの標準メニューをベースにした概算値です。
          燃料費調整額・再エネ賦課金（2026年4月時点: 3.49 円/kWh）は別途加算されます。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-teal-50">
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
              { area: "中部電力エリア（当エリア）", value: 15.0, color: "bg-teal-600" },
              { area: "北陸電力エリア", value: 14.5, color: "bg-green-400" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア", value: 19.5, color: "bg-red-400" },
            ].map((item) => (
              <div key={item.area}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span className={item.area.includes("当エリア") ? "font-bold text-teal-800" : ""}>{item.area}</span>
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

      {/* 製造業集積地としての特性 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">製造業集積地としての電力特性</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {manufacturingFeatures.map((item, i) => (
            <div key={i} className="rounded-xl border border-teal-100 bg-teal-50 p-4">
              <h3 className="text-base font-semibold text-teal-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>

        {/* 産業別電力消費割合 */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-slate-900">中部エリアの産業別電力消費割合（概算）</h3>
          <p className="mt-1 text-xs text-slate-500">エネルギー庁データをもとにした概算。</p>
          <div className="mt-4 space-y-3">
            {[
              { sector: "製造業（輸送機械・金属・化学等）", pct: 58, color: "bg-teal-500" },
              { sector: "業務用（ビル・商業・行政等）", pct: 22, color: "bg-sky-400" },
              { sector: "家庭用", pct: 14, color: "bg-slate-300" },
              { sector: "その他（農業・建設等）", pct: 6, color: "bg-slate-200" },
            ].map((item) => (
              <div key={item.sector}>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                  <span>{item.sector}</span>
                  <span>{item.pct}%</span>
                </div>
                <div className="h-4 w-full rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-400">※製造業比率は全国平均（約 45%）を大幅に上回る。</p>
        </div>
      </section>

      {/* 最近の改定動向 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最近の料金改定動向（2023〜2026年）</h2>
        <div className="mt-4 space-y-3">
          {revisionHistory.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-xs font-semibold text-teal-700 pt-1">{item.date}</div>
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
      <section className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">中部電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">複数拠点の一括入札を検討する</span>
            — 製造業で複数工場・拠点を持つ場合、エリア内の需要を束ねて一括入札することで単価引き下げ余地が大きくなります。
          </li>
          <li>
            <span className="font-semibold">デマンドコントロールで基本料金を削減する</span>
            — 大型工場では最大需要電力（デマンド）の管理が重要。デマンドを10%削減できれば基本料金に直接反映されます。
          </li>
          <li>
            <span className="font-semibold">固定価格契約期間と燃調費上限を確認する</span>
            — 市場連動型の新電力プランは変動リスクが高い。特に24時間稼働の工場では固定費比率の高い契約の方が予算管理しやすい場合があります。
          </li>
          <li>
            <span className="font-semibold">Scope2削減のための再エネ調達を検討する</span>
            — EV化・脱炭素目標に対応するため、非化石証書・オフサイト PPA・コーポレート PPA の活用を検討してください。
          </li>
          <li>
            <span className="font-semibold">浜岡原発の再稼働動向をウォッチする</span>
            — 再稼働が実現すれば電源構成が変化し、燃料費調整額の水準が下がる可能性があります。
            <Link href="/fuel-cost-adjustment" className="ml-1 text-teal-700 underline underline-offset-2 hover:text-teal-900">
              燃料費調整額の仕組みはこちら
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
                const areaPrice = row.chubu;
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
          中部エリアは製造業の大型需要が特徴で、FY2022は+0.41円とほぼ全国平均に近い動き。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          中部電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "chubu")?.share}%を占めます。製造業集積で需要は安定推移。負荷率{LOAD_FACTOR_FY.find(r => r.fy === 2023)?.chubu}%。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-teal-50">
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
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.chubu.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.chubu}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: OCCTO公表データを集計（FY2016〜FY2023）</p>
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
              href: "/capacity-contribution-cost-impact",
              title: "容量拠出金が電気代に与えるインパクト",
              description: "2024年度から本格化した容量拠出金の影響を試算付きで解説。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
            },
            {
              href: "/region-tokyo-business-electricity",
              title: "東京電力エリアの法人電気代事情",
              description: "LNG火力依存と首都圏集中による東京エリアの料金特性を解説。",
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
          heading="中部電力エリアの電気料金リスクを診断する"
          description="製造業・工場の電力コストをシミュレーターで診断。燃調費変動・容量拠出金・再エネ賦課金の増加リスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "解説記事一覧へ" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="region-chubu-business-electricity" />
      </div>
    </main>
  );
}
