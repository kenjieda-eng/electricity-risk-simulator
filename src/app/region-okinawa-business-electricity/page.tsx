import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "沖縄電力エリアの法人電気代事情｜料金水準・改定動向・新電力状況";
const pageDescription =
  "沖縄電力エリア（沖縄県）の法人向け電気料金を詳解。全国最高水準の電力量料金、孤立系統・離島送電コスト、新電力がほぼ参入しない市場構造、観光業中心の電力需要と契約見直しポイントを解説します。";
const pageUrl = "https://simulator.eic-jp.org/region-okinawa-business-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "沖縄電力 法人",
    "沖縄電力エリア 電気料金",
    "沖縄 高圧電力 単価",
    "沖縄電力 料金改定",
    "沖縄 新電力",
    "法人電気代 沖縄",
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

const prefectures = ["沖縄県"];

const areaBasicInfo = [
  { label: "担当都道府県", value: "沖縄県" },
  { label: "旧一般電気事業者", value: "沖縄電力（送配電・小売一体）" },
  { label: "小売子会社", value: "沖縄電力（分社化なし）" },
  { label: "管内面積（概算）", value: "約 2,280 km²" },
  { label: "管内世帯数（概算）", value: "約 70万世帯" },
  { label: "法人需要家数の目安", value: "約 10万口（高圧以上：約 0.5万口）" },
  { label: "電源構成の特徴", value: "LNG火力約50%、石炭火力約30%、石油火力約10%、再エネ約10%（ほぼ太陽光）" },
  { label: "市場シェア（新電力）", value: "電力量ベースで約 5〜8%（全国最低クラス）" },
];

const priceTable = [
  {
    menu: "特別高圧（2万V以上）",
    kihon: "約 1,700〜2,100 円/kW",
    ryoryo: "約 15〜18 円/kWh",
    nencho: "燃調費別途",
    note: "大型ホテル・大型商業施設向け",
  },
  {
    menu: "高圧（6kV）業務用電力",
    kihon: "約 1,900〜2,300 円/kW",
    ryoryo: "約 17〜20 円/kWh",
    nencho: "燃調費別途",
    note: "ホテル・商業施設・中規模工場向け",
  },
  {
    menu: "低圧電力（動力）",
    kihon: "約 1,100〜1,400 円/kW",
    ryoryo: "約 18〜21 円/kWh",
    nencho: "燃調費別途",
    note: "飲食店・小規模事業所など",
  },
];

const revisionHistory = [
  {
    date: "2023年6月",
    content: "規制料金（低圧）値上げ申請認可。LNG・石炭・石油の高騰を受けた改定。本土との連系線がないため独自の燃料調達コストが反映。",
  },
  {
    date: "2023年12月",
    content: "燃料費調整額の基準燃料価格を改定。石油火力の燃油価格高止まりもあり、他エリアより高いプラス幅を維持。",
  },
  {
    date: "2024年4月",
    content: "容量拠出金制度開始。沖縄電力も制度の対象となり、高圧・特別高圧の調達コストに容量市場コストが加算。",
  },
  {
    date: "2024年10月",
    content: "電気・ガス料金激変緩和措置が終了。沖縄でも法人の請求額が他エリアと同様に上昇。電力量料金の高さから影響額が大きい。",
  },
  {
    date: "2025年4月",
    content: "再エネ賦課金が 3.49 円/kWh に引き上げ。電力量料金がもともと高いエリアだけに、賦課金の絶対額負担も大きい。",
  },
  {
    date: "2026年4月（直近）",
    content: "LNG価格のやや落ち着きで燃調費は若干改善傾向。ただし石油火力由来コストと離島送電コストは構造的に高止まりが続く見込み。",
  },
];

const newPowerStatus = [
  {
    category: "参入状況",
    detail:
      "沖縄電力が送配電と小売を一体で担い、本土との連系線がないため新電力の参入障壁が極めて高い。参入社数は全国最低クラスの数社程度に限られ（2024年時点）、高圧向けプランを展開できる事業者は非常に限定的。",
  },
  {
    category: "撤退・解除状況",
    detail:
      "もともと参入社数が少ないため、2022〜2023年の撤退ラッシュの影響は限定的だった。ただし少ない選択肢のなかで契約していた需要家には打撃となった事例も存在。",
  },
  {
    category: "市場シェア推移",
    detail:
      "新電力シェアは長年5〜8%程度で推移し、全国10エリアの中で最も低い水準。孤立系統という構造的な制約から、短中期での大幅なシェア拡大は見込みにくい状況。",
  },
  {
    category: "価格競争力",
    detail:
      "沖縄電力との競合プランを持つ新電力が極めて少なく、価格競争による恩恵を受けにくいエリア。自家発電（太陽光＋蓄電池）や省エネ投資による使用量削減が最も有効なコスト低減策となる。",
  },
];

export default function RegionOkinawaBusinessElectricityPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">REGION ／ 地域別電気料金事情</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          沖縄電力エリアの法人電気代事情
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">料金水準・改定動向・新電力状況</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          沖縄電力エリア（沖縄県）は全国10エリアの中で最も電力量料金が高く、本土との連系線がない孤立系統として
          独自の電力需給バランスを保っています。LNG・石炭・石油の燃料コストが高い構造に加え、
          離島送電コストも料金水準を押し上げています。新電力がほぼ参入しておらず、
          観光業（宿泊・飲食）を中心とした法人需要家にとって、コスト削減の選択肢が限られるのが現状です。
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
          沖縄電力エリアの規模感・事業者構成を確認してください。
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
          以下は沖縄電力の標準メニューをベースにした概算値です。
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
              { area: "四国電力エリア", value: 17.0, color: "bg-amber-400" },
              { area: "九州電力エリア", value: 14.2, color: "bg-yellow-500" },
              { area: "沖縄電力エリア（当エリア）", value: 19.5, color: "bg-red-600" },
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
        <h2 className="text-xl font-semibold text-slate-900">沖縄電力エリア特有の事情</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">全国最高水準の電力量料金</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              沖縄電力の高圧電力量料金は全国10エリアの中で最も高く、高圧メニューで17〜20円/kWh前後、
              低圧電力では18〜21円/kWh前後と突出しています。LNG・石炭・石油の複数燃料への依存と
              離島エリア特有の設備コストが重なり、構造的な高コスト体質が続いています。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">離島送電コストと孤立系統</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              沖縄本島のほか、石垣島・宮古島・久米島など多数の有人離島に送電する必要があり、
              その設備投資・維持コストが電気料金に含まれています。また本土（九州電力エリア）との
              連系線がなく「孤立系統」であるため、緊急時の電力融通や需給調整が本土より困難です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">新電力がほぼ参入していない</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              送配電と小売が分社化されず一体運営されていること、市場規模が小さいこと、
              孤立系統のため本土からの電力調達が不可能なことから、新電力の参入が極めて困難な構造になっています。
              事実上、沖縄電力との契約が唯一の選択肢となるケースが大半です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-4">
            <h3 className="text-base font-semibold text-sky-900">観光業中心の電力需要構造</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              沖縄の産業は観光業（ホテル・宿泊・飲食・商業施設）が中心であり、
              冷房需要が大きい夏季に電力ピークが集中します。客室稼働率に応じた電力消費変動が大きく、
              デマンドコントロールや省エネ設備投資（高効率空調・LED等）が特に効果的な対策となります。
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
        <h2 className="text-xl font-semibold text-slate-900">沖縄電力エリアで契約見直しを進める際のポイント</h2>
        <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>
            <span className="font-semibold">省エネ投資でコスト削減を図る</span>
            — 新電力への切り替えが困難なエリアのため、高効率空調・LED照明・インバータ制御など
            省エネ設備投資による使用量削減が最も直接的かつ確実なコスト低減策です。
          </li>
          <li>
            <span className="font-semibold">太陽光＋蓄電池の自家発電を検討する</span>
            — 日射量が多い沖縄は太陽光発電の発電効率が高く、屋根置き太陽光や
            自家消費型PPAの導入効果が大きいエリアです。蓄電池との組み合わせで
            夜間・曇天時のカバーも検討できます。
          </li>
          <li>
            <span className="font-semibold">デマンドコントロールを徹底する</span>
            — 観光業では夏季の冷房需要ピーク時のデマンド超過が基本料金を押し上げます。
            BEMS（ビルエネルギー管理システム）やデマンドコントローラーの導入で
            契約電力の最適化を図ってください。
          </li>
          <li>
            <span className="font-semibold">燃料費調整額の上限設定を確認する</span>
            — 沖縄電力の標準メニューにおける燃調費の上限設定を把握しておくことで、
            最悪シナリオでの請求額を予測できます。
            LNG・石炭・石油の価格動向をウォッチし、コスト予算に反映させてください。
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
              href: "/region-chugoku-business-electricity",
              title: "中国電力エリアの法人電気代事情",
              description: "石炭火力依存と島根原発再稼働による影響を解説。",
            },
            {
              href: "/region-shikoku-business-electricity",
              title: "四国電力エリアの法人電気代事情",
              description: "伊方原発と四国エリアの料金特性を解説。",
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
          heading="沖縄電力エリアの電気料金リスクを診断する"
          description="現在の契約内容をもとに、燃料費変動・容量拠出金・再エネ賦課金の影響を数値で把握できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="region-okinawa-business-electricity" />
      </div>
    </main>
  );
}
