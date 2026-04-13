import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SolarCurtailmentChart from "../../components/area-supply/SolarCurtailmentChart";

const pageTitle = "太陽光出力制御の実態｜どのエリアでどれだけ捨てられているか";
const pageDescription =
  "九州13.8%、四国10.5%、関西10.1%──太陽光発電の出力抑制が常態化しているエリアがあります。30分値実績データから月別・エリア別の抑制量を可視化し、法人の太陽光投資判断やFIT/FIP売電への影響を解説します。";
const pageUrl = "https://simulator.eic-jp.org/solar-curtailment-by-area";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "太陽光 出力制御",
    "出力抑制 エリア別",
    "太陽光 カーテイルメント",
    "九州 太陽光 抑制",
    "FIT FIP 出力制御",
    "再エネ 余剰電力",
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

const curtailmentSummary = [
  { area: "九州", freq: "13.8%", maxMW: "4,838", avgMW: "62", note: "全国最多。3〜4月が深刻" },
  { area: "四国", freq: "10.5%", maxMW: "1,230", avgMW: "17", note: "需要規模小で余剰吸収困難" },
  { area: "関西", freq: "10.1%", maxMW: "2,650", avgMW: "19", note: "原子力ベースロードとの競合" },
  { area: "東北", freq: "7.8%", maxMW: "3,751", avgMW: "36", note: "風力との同時余剰も発生" },
  { area: "中国", freq: "6.9%", maxMW: "2,348", avgMW: "20", note: "太陽光シェア15.8%で上位" },
  { area: "中部", freq: "3.2%", maxMW: "1,982", avgMW: "5", note: "春季のみ一時的に発生" },
  { area: "北陸", freq: "2.6%", maxMW: "703", avgMW: "1", note: "太陽光導入量自体が少ない" },
  { area: "北海道", freq: "1.6%", maxMW: "461", avgMW: "1", note: "蓄電池で一部吸収" },
  { area: "東京", freq: "0.0%", maxMW: "0", avgMW: "0", note: "需要最大でまだ吸収余力あり" },
];

const monthlyPatterns = [
  { month: "3〜5月（春季）", description: "抑制が最も深刻な時期。日射量が多い一方、冷暖房需要が少なく電力需要が年間最低水準。九州では3月に565.6MW、4月に851.8MWの平均抑制が発生。" },
  { month: "7〜8月（夏季）", description: "冷房需要で電力消費が増加し、太陽光の出力を吸収できるため抑制はほぼゼロ。九州でも7月の抑制はゼロ。" },
  { month: "10〜11月（秋季）", description: "気温が下がり始め需要は緩やかだが、日射はまだ強い時期。九州で114.7MW（10月）、関西で44.0MW（11月）と中程度の抑制。" },
  { month: "12〜2月（冬季）", description: "暖房需要で電力消費が増加するが、日射量も減少するため抑制は少ない。ただし九州は2月でも35.7MWの抑制が発生。" },
];

export default function SolarCurtailmentByAreaPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">太陽光出力制御の実態</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">POWER SUPPLY ／ 電力調達の仕組みを知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          太陽光出力制御の実態
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">どのエリアでどれだけ捨てられているか</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          太陽光発電の導入拡大に伴い、電力需要の少ない時間帯に余剰電力が発生し、「出力制御（カーテイルメント）」が
          常態化するエリアが増えています。九州では昼間時間帯の13.8%で抑制が発生し、ピーク時には4,838MWもの太陽光出力が
          カットされています。30分値の実績データからエリア別・月別の抑制状況を分析し、法人の太陽光投資判断や
          契約選択への影響を解説します。
        </p>
      </header>

      {/* 出力制御とは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">太陽光出力制御（カーテイルメント）とは</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電力系統は常に「需要＝供給」のバランスを保つ必要があります。太陽光の発電量が需要を上回ると
          周波数が乱れるリスクがあるため、一般送配電事業者が太陽光発電所に出力を下げるよう指示します。
          これが出力制御です。制御された電力は発電されず、いわば「捨てられた」状態になります。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">FIT/FIP売電収入への影響</p>
            <p className="mt-1 text-sm text-slate-700">
              出力制御中は発電できないため、売電収入がゼロになります。FIT認定設備でも制御対象となり、
              投資回収計画に直接影響します。
            </p>
          </div>
          <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">自家消費型への影響</p>
            <p className="mt-1 text-sm text-slate-700">
              自家消費型太陽光は系統への逆潮流を制御されるケースがあります。蓄電池との併用で
              自家消費率を高める対策が有効です。
            </p>
          </div>
        </div>
      </section>

      {/* チャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別・月別 太陽光出力抑制量</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          主要5エリア（九州・四国・関西・東北・中国）の月別平均抑制量（MW）です。
          春季（3〜5月）に抑制が集中し、夏季はほぼゼロになる季節パターンが鮮明です。
        </p>
        <div className="mt-4">
          <SolarCurtailmentChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: 各一般送配電事業者公表の30分値データを集計（2024年2月〜2026年4月）</p>
      </section>

      {/* 抑制頻度テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">エリア別 出力制御頻度（昼間時間帯 6〜18時）</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">エリア</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">抑制頻度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">最大抑制量</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均抑制量</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">備考</th>
              </tr>
            </thead>
            <tbody>
              {curtailmentSummary.map((row, i) => (
                <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.area}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{row.freq}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.maxMW} MW</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">{row.avgMW} MW</td>
                  <td className="border border-slate-200 px-3 py-2 text-xs text-slate-500">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 月別パターン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">季節別の抑制パターン</h2>
        <div className="mt-4 space-y-3">
          {monthlyPatterns.map((item) => (
            <div key={item.month} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
              <h3 className="text-sm font-semibold text-slate-800">{item.month}</h3>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 東京は0% */}
      <section className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ東京は抑制ゼロなのか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          東京エリアの太陽光抑制率は0.0%です。これは太陽光が少ないからではなく（出力は全国最大の最大17,840MW）、
          需要が全国最大で余剰が発生しないためです。さらに東北から常時4,000MW超の電力を輸入しており、
          連系線を通じて東北の余剰電力も吸収する受け皿になっています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          ただし将来的に太陽光導入がさらに進めば、東京エリアでも昼間の余剰が発生する可能性があります。
          その場合、<Link href="/duck-curve-electricity-price-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ダックカーブ</Link>の深化とともに
          抑制が始まるシナリオも想定されます。
        </p>
      </section>

      {/* 法人への影響 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人にとっての意味</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">太陽光投資の判断</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              九州・四国で太陽光のFIT/FIP売電を検討する場合、春季の抑制リスクを投資回収計算に織り込む必要があります。
              蓄電池併設やオフサイトPPA先のエリア選定も重要な判断要素です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">市場連動型プランへの影響</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              出力制御が発生するほど太陽光が余る＝昼間のJEPX価格が低下します。市場連動型プランの場合、
              昼間のコストが安くなる一方、夕方のランプアップ時に急騰するリスクがあります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">需要シフトの機会</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              抑制エリアでは昼間に電力が余っています。蓄電池や蓄熱、EV充電などで昼間に電力を使う「需要シフト」は
              系統にも企業コストにも有益な戦略です。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">再エネ賦課金との関係</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              抑制により発電されなかった電力もFIT買取対象にはなりませんが、FIT導入量の増加は再エネ賦課金の
              上昇圧力に。法人は賦課金コストと抑制ロスの両面を意識する必要があります。
            </p>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "9エリアの発電ミックスを比較。太陽光シェアの違いも一覧。" },
            { href: "/duck-curve-electricity-price-impact", title: "ダックカーブとは何か", description: "太陽光余剰と夕方急騰のメカニズムを解説。" },
            { href: "/inter-area-power-flow-explained", title: "エリア間電力融通の実態", description: "連系線が余剰電力の吸収にどう貢献しているか。" },
            { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "太陽光導入と賦課金コストの関係を基礎から解説。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを把握する"
          description="太陽光出力制御による市場価格変動が自社のコストにどう影響するか、シミュレーターで確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/power-procurement", label: "電力調達の記事一覧" },
          ]}
        />
      </div>
    </main>
  );
}
