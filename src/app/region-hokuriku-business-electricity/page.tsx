import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { JEPX_AREA_YEARLY_AVG } from "../../data/jepxData";
import { DEMAND_AREA_FY, LOAD_FACTOR_FY, DEMAND_AREA_SHARE } from "../../data/demandData";
import { getWeatherByRegion } from "../../data/weatherData";

const pageTitle = "北陸電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "北陸電力エリア（富山・石川・福井・岐阜一部）の法人向け電気料金を詳解。高圧・特別高圧の単価目安、2023〜2026年の料金改定動向、水力豊富な電源構成と2023年大幅値上げの影響、新電力の参入状況を解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-hokuriku-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "北陸電力 法人",
    "北陸エリア 電気料金",
    "富山 石川 福井 高圧電力",
    "北陸電力 料金改定",
    "北陸 新電力",
    "法人電気代 北陸",
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
  "富山県",
  "石川県",
  "福井県",
  "岐阜県（一部）",
];

const areaBasicInfo = [
  { label: "担当都道府県", value: "富山県・石川県・福井県・岐阜県（一部）" },
  { label: "旧一般電気事業者", value: "北陸電力" },
  { label: "送配電事業者", value: "北陸電力送配電" },
  { label: "小売事業者", value: "北陸電力（小売部門）" },
  { label: "管内面積（概算）", value: "約 12,600 km²（全国最小クラス）" },
  { label: "管内世帯数（概算）", value: "約 130万世帯" },
  { label: "法人需要家数の目安", value: "約 15万口（高圧以上：約 1万口）" },
  { label: "電源構成の特徴", value: "水力約 25〜30%（包蔵水力が全国屈指）、原子力（志賀原発の動向注視）、石炭火力約 20%、LNG約 15%" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 10〜15%（全国最低水準）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,300〜1,600 円/kW",
    ryoryo: "約 10〜13 円/kWh",
    nencho: "燃調費別途",
    note: "大工場・大型施設向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,400〜1,700 円/kW",
    ryoryo: "約 12〜15 円/kWh",
    nencho: "燃調費別途",
    note: "中規模ビル・工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 850〜1,050 円/kW",
    ryoryo: "約 13〜16 円/kWh",
    nencho: "燃調費別途",
    note: "小規模工場・飲食店など",
  },
];

const revisionHistory = [
  {
    date: "2023年4月",
    content: "規制料金（家庭向け）が約 46% の大幅値上げ。企業向けも約 20〜25% 上昇し、全国最安水準の地位が揺らぎ始めた。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。LNG・石炭価格の高止まりを反映してプラス幅が拡大。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。高圧・特別高圧需要家の契約単価に容量市場調達コストが転嫁される形となった。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置が段階的縮小・終了。法人の請求額が再び上昇。アルミ・化学など電力多消費産業への影響が大きかった。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ（前年比 +0.4 円程度）。高圧以上の影響も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG・石炭価格のやや落ち着きにより燃調費プラス幅はわずかに縮小傾向。志賀原発の再稼働審査の進展が中長期の料金安定化の鍵となる。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "需要規模が全国最小クラスであり、新電力にとって採算が取りにくいエリア。参入社数は全国最低水準で、高圧向けに実績のある事業者は数十社程度（2024年時点）。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "2022年のエネルギー危機以降、北陸でも新規受付を停止した新電力が確認されている。もともとの参入数が少ないため、撤退後の選択肢が極めて限定的になっている。",
  },
  {
    category: "市場シェア推移",
    detail:
      "新電力シェアは 10〜15% で推移しており、全国平均（30% 超）を大きく下回る。需要密度の低さと旧一電の競争力ある料金水準が新電力の参入を抑制している。",
  },
  {
    category: "価格競争力",
    detail:
      "2023年の大幅値上げ前は北陸電力の料金が全国最安水準であったため、新電力の削減メリットが薄かった。値上げ後は競争余地が若干拡大しているが、需要規模の小ささから参入社数は依然として少ない。",
  },
];

export default function RegionHokurikuBusinessElectricityPage() {
  const weather = getWeatherByRegion("hokuriku");
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          北陸電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          北陸電力エリア（富山・石川・福井・岐阜一部）は豊富な包蔵水力を背景に長らく全国最安水準の電気料金を誇っていましたが、
          2023年4月の大幅値上げ（家庭向け約 46% ・企業向け約 20〜25%）でその地位は揺らぎました。
          アルミ・化学など電力多消費産業が集積しており、電気料金の動向が産業競争力に直結するエリアです。
          本ページでは、エリアの基本情報・料金水準・改定動向・新電力状況・
          契約見直しポイントを詳しく解説します。
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
          北陸電力エリアの規模感・事業者構成を確認してください。
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
          以下は北陸電力の標準メニューをベースにした概算値です。
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
              { area: "北陸電力エリア（当エリア）", value: 14.5, color: "bg-green-600" },
              { area: "関西電力エリア", value: 13.8, color: "bg-indigo-400" },
              { area: "中国電力エリア", value: 16.8, color: "bg-orange-400" },
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
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
        <h2 className="text-xl font-semibold text-slate-900">北陸電力エリア特有の事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">全国最安水準の電力量料金（2023年値上げで変動）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北陸電力は長年にわたり全国最安水準の電気料金を誇っていました。
              しかし 2023年4月の規制料金大幅値上げ（家庭向け約 46%、企業向け約 20〜25%）により、
              その優位性は縮小しています。現在も関西・九州と並んで低い部類ですが、
              かつての「北陸は安い」というイメージの更新が必要です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">水力発電の豊富さ</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              北陸は急峻な地形と豊富な降雪・降雨に恵まれ、全国屈指の包蔵水力を保有しています。
              水力比率が約 25〜30% に達し、燃料費変動の影響を受けにくい安定電源として機能しています。
              再エネ比率を重視する企業にとっては CO2 排出量の低さもアピールポイントです。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">新電力参入が少ない市場環境</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              需要規模が全国最小クラスであるため、新電力にとって参入メリットが薄いエリアです。
              高圧向けの新電力選択肢は全国で最も少なく、料金競争の恩恵を受けにくい状況です。
              相見積もりを取る際は全国対応の大手新電力への問い合わせが現実的な選択肢となります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">製造業（アルミ・化学）の電力多消費産業が集積</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              富山・石川を中心にアルミ精錬・化学・繊維などの電力多消費産業が集積しており、
              電気代は製造原価の重要な構成要素となっています。
              2023年の大幅値上げは産業競争力に直結した問題として地域で大きな議論を呼びました。
              省エネ投資や高効率設備への切り替えが急務となっています。
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
        <h2 className="text-xl font-semibold text-slate-900">北陸電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">2023年値上げ後の料金水準を改めて試算する</span>
            — 「北陸は安い」という従来の前提を見直し、現在の実際の請求単価を確認した上で削減目標を設定してください。
          </li>
          <li>
            <span className="font-semibold">全国対応の新電力に相見積もりを依頼する</span>
            — 地元の新電力選択肢が少ないため、全国展開の大手新電力・エネルギーコンサルへの問い合わせが有効です。
          </li>
          <li>
            <span className="font-semibold">省エネ投資で使用量自体を削減する</span>
            — 新電力への乗り換えだけでなく、高効率設備・インバーター・LED 照明などへの投資が料金削減に直結します。
          </li>
          <li>
            <span className="font-semibold">志賀原発の再稼働動向を注視する</span>
            — 再稼働が実現すれば燃料費の低い電源比率が上昇し、中長期的な料金安定化が期待されます。長期契約の交渉タイミングの見極めに活用してください。
          </li>
          <li>
            <span className="font-semibold">容量拠出金・再エネ賦課金の上昇を織り込む</span>
            — システム費用の追加転嫁が続いています。3〜5 年の電気代予測を行い、省エネ・自家消費設備の投資判断に役立ててください。
            <Link href="/capacity-contribution-cost-impact" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金の詳細はこちら
            </Link>
          </li>
        </ol>
      </section>

      {/* 電源構成の実績データ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電源構成の実績データ（30分値集計）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          2024〜2026年の30分値データ（36,960レコード）を集計した北陸エリアの電源構成実績です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600">石炭火力</p>
            <p className="mt-1 text-2xl font-bold text-slate-800">53.8%</p>
            <p className="text-xs text-slate-500">全国最高 / 平均 1,770 MW</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-semibold text-blue-700">水力</p>
            <p className="mt-1 text-2xl font-bold text-blue-900">26.9%</p>
            <p className="text-xs text-blue-600">全国最高 / 平均 886 MW</p>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs font-semibold text-amber-700">太陽光</p>
            <p className="mt-1 text-2xl font-bold text-amber-900">5.9%</p>
            <p className="text-xs text-amber-600">最大 1,260 MW</p>
          </div>
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-xs font-semibold text-indigo-700">原子力</p>
            <p className="mt-1 text-2xl font-bold text-indigo-900">0.0%</p>
            <p className="text-xs text-indigo-600">全停止（志賀原発）</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-700">
          石炭53.8%＋水力26.9%は北陸特有の電源構成です。石炭依存度は全国最高で、石炭価格の国際変動が
          料金に直結します。一方、水力26.9%も全国最高で、従来は安価な水力が料金安の一因でした。
          原子力（志賀原発）は全停止中で、再稼働の見通しが立てば電源構成が大きく変わる可能性があります。
          <a href="/area-power-supply-mix-comparison" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">→ 9エリアの電源構成を比較する</a>
        </p>
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
                const areaPrice = row.hokuriku;
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
          北陸エリアは水力発電の豊富さから安定した供給力を持ち、エリアプライスは全国平均に近い水準。
        </p>
      </section>

      {/* エリア需要の特徴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア需要の特徴</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          北陸電力エリアは全国需要の約{DEMAND_AREA_SHARE.find(a => a.area === "hokuriku")?.share}%を占めます。電力多消費産業(アルミ・化学)の集積で、産業用需要比率が高い。
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
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{d?.hokuriku.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{lf?.hokuriku}%</td>
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
          金沢の気象データから、当エリアの電力需要に影響する気候特性を整理します。
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
          金沢の猛暑日は18日→62日に増加。冬の最低気温も+1.0℃上昇し、暖房需要（HDD）は-16%減少。日本海側特有の冬の電力需要構造が緩やかに変化しています。
        </p>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/region-chubu-business-electricity",
              title: "中部電力エリアの法人電気代事情",
              description: "中部エリアの料金水準・電源構成と新電力動向を解説。",
            },
            {
              href: "/region-kansai-business-electricity",
              title: "関西電力エリアの法人電気代事情",
              description: "原発再稼働の影響と関西エリアの料金特性を解説。",
            },
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
          heading="北陸電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金のリスクを数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を確認する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="region-hokuriku-business-electricity" />
      </div>
    </main>
  );
}
