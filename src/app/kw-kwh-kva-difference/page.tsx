import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

// --- 定数 ---
const pageTitle = "kW・kWh・kVAの違い｜電気料金で使われる単位の基礎をわかりやすく解説";
const pageDescription =
  "kW（キロワット）・kWh（キロワットアワー）・kVA（キロボルトアンペア）の違いを法人向けに解説。請求書・見積書のどこに出るか、契約電力・使用量・力率との関係を具体例で整理。";

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "kW kWh kVA 違い",
    "キロワット キロワットアワー",
    "契約電力 単位",
    "電気料金 単位 解説",
    "力率 kVA kW",
    "デマンド kW",
    "法人 電気料金 基礎",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/kw-kwh-kva-difference",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kw-kwh-kva-difference",
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

// --- Page Component ---
export default function KwKwhKvaDifferencePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="before:mx-1 before:content-['>']">
            <Link
              href="/articles/basic"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              基礎から知る
            </Link>
          </li>
          <li className="before:mx-1 before:content-['>']">
            <span>kW・kWh・kVAの違い</span>
          </li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          kW・kWh・kVAの違い
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の請求書や見積書には、kW・kWh・kVAという3種類の単位が登場します。それぞれが「何を表すのか」「料金のどの部分に影響するのか」を正確に理解しておくことで、契約内容の妥当性を自分で検証できるようになります。このページでは具体例と表を使って、3つの単位の違いをわかりやすく整理します。
        </p>
      </header>

      {/* 本文 */}
      <div className="mt-6 space-y-6">

        {/* H2: 3つの単位を一言で整理する */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3つの単位を一言で整理する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まず、3つの単位の意味と役割を一覧でつかんでおきましょう。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">単位</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">読み方</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">意味</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">たとえるなら</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">請求書での登場箇所</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">キロワット</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">ある瞬間の電力の大きさ</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">水道の蛇口の太さ</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力、デマンド値</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">キロワットアワー</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">一定時間に使った電力の量</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">バケツに溜まった水の量</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">月間使用量、電力量料金</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kVA</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">キロボルトアンペア</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">見かけ上の電力（皮相電力）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">蛇口から出る水の勢い（ロスを含む）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">変圧器容量、一部の契約電力</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: kWとkWhの違いを具体例で理解する */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">kWとkWhの違いを具体例で理解する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            kWは「電力の大きさ（瞬間の消費速度）」、kWhは「実際に使った量（消費速度×時間）」です。
            電気料金への影響も異なります。kWは<strong>基本料金（契約電力・デマンド）</strong>に、kWhは<strong>電力量料金</strong>に直接結びつきます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">状況</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">kW（瞬間の電力）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">時間</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">kWh（使った量）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">料金への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">エアコン1台を1時間運転</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">3kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">1時間</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">3kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金: 3kWh×16円＝48円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">エアコン1台を8時間運転</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">3kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">8時間</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">24kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金: 24kWh×16円＝384円</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">エアコン10台を同時に1時間</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">30kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">1時間</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">30kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金: 30kWh×16円＝480円 + デマンド30kWが契約電力に影響</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">工場の機械を朝一斉起動</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-600">500kW（ピーク）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">0.5時間</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">250kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンド500kWが契約電力→基本料金に直結</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-800">
              <strong>ポイント:</strong> kWが大きいと基本料金に、kWhが大きいと電力量料金に影響します。機械を一斉起動するような「瞬間的なピーク」が大きいと、使用量が少なくても基本料金が割高になるケースがあります。
            </p>
          </div>
        </section>

        {/* H2: kVAとkWの関係（力率の話） */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">kVAとkWの関係（力率の話）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            kVAは「皮相電力」と呼ばれ、電気設備が見かけ上消費している電力の大きさを表します。実際に仕事に使われる電力（有効電力・kW）と、無効電力が合わさったものです。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3">
            <p className="text-sm font-semibold text-sky-800">
              計算式: kVA = kW ÷ 力率
            </p>
            <p className="mt-1 text-sm text-sky-700">
              力率85%の場合、100kWの実効電力を得るには約118kVAの皮相電力が必要になります。
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            力率が高いほど無駄な電力が少なく、電力会社から見ると「効率的な需要家」とみなされます。高圧・特別高圧の契約では、力率に応じて基本料金に割引または割増が適用されます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">力率</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">100kWの設備に必要なkVA</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">力率割引/割増</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">基本料金への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-green-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">100%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">100kVA</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">15%割引</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">最も安い</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-green-600">95%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">105kVA</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-green-600">10%割引</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">やや安い</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">85%（基準）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">118kVA</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">±0（基準）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">標準</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">75%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">133kVA</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">10%割増</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">やや高い</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">65%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">154kVA</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">20%割増</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">最も高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 力率による割引・割増率は電力会社・契約メニューによって異なります。上記は一般的な高圧契約の目安です。
          </p>
        </section>

        {/* H2: 請求書・見積書のどこに出てくるか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書・見積書のどこに出てくるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の電気料金請求書・電力会社からの見積書で、これらの単位がどの項目に使われているかを整理します。請求書を手元に置きながら確認してみましょう。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">書類の項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">使われる単位</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">何を確認するか</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">契約電力</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金の前提。実態より大きすぎないか</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">最大需要電力（デマンド）</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">過去12ヶ月の最大値。契約電力の決定根拠</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">月間使用量</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金の計算根拠。前年同月と比較</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">変圧器容量</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">kVA</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">設備の受電容量。高圧受電の場合に記載</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">力率</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">%（kW÷kVA）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">85%が基準。基本料金の割引/割増に影響</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">電力量料金単価</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">円/kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量に掛ける単価</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">基本料金単価</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">円/kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力に掛ける単価</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: 負荷率とは（kWとkWhの関係指標） */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">負荷率とは（kWとkWhの関係指標）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            負荷率は、契約電力（kW）に対して実際にどれだけ使用量（kWh）があるかを示す指標です。
            負荷率が高いほど「契約電力を効率よく使えている」ことを意味し、基本料金の割合が相対的に小さくなります。
          </p>
          <div className="mt-3 rounded-lg border border-sky-200 bg-sky-50 px-4 py-3">
            <p className="text-sm font-semibold text-sky-800">
              計算式: 負荷率（%）= 月間使用量（kWh）÷（契約電力（kW）× 24時間 × 30日）× 100
            </p>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">施設タイプ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">契約電力</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">月間使用量</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">負荷率</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">意味</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">オフィス（平日昼間のみ）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">200kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">40,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-600">28%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">ピーク型。基本料金の負担割合が大きい</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">工場（2交代）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">500kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">200,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">56%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">中間型。バランスが取れている</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">病院（24時間稼働）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">300kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">160,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-green-600">74%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">ベースロード型。電力量料金が主</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">データセンター</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">1,000kW</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">650,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">90%</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">超安定型。負荷率が非常に高い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            負荷率が低い施設（オフィスなど）は、ピーク時の電力を抑えること（デマンドコントロール）で契約電力を下げ、基本料金を削減できる可能性があります。
          </p>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span><strong>kW（キロワット）</strong>は瞬間の電力の大きさ。契約電力・デマンド値として<strong>基本料金</strong>に影響する。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span><strong>kWh（キロワットアワー）</strong>は実際に使った電力量。月間使用量として<strong>電力量料金</strong>に影響する。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span><strong>kVA（キロボルトアンペア）</strong>は見かけ上の電力。力率（kW÷kVA）が低いと基本料金に<strong>割増</strong>が発生する。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span><strong>負荷率</strong>（kWhとkWの比率）が低い施設はデマンドコントロールで基本料金削減の余地がある。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">▶</span>
              <span>請求書・見積書の各項目がどの単位で表されているかを把握することが、電気料金を自社で管理する第一歩。</span>
            </li>
          </ul>
        </section>

      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "kWで決まる契約電力の仕組みとデマンド値の関係を解説。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の仕組み",
              description: "契約電力（kW）に基づく基本料金の計算方法を詳しく説明。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の仕組み",
              description: "月間使用量（kWh）に基づく電力量料金の計算方法を解説。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の管理方法",
              description: "デマンド値（kW）を下げて基本料金を削減する実践ガイド。",
            },
            {
              href: "/what-is-power-factor",
              title: "力率（パワーファクター）とは",
              description: "kWとkVAの比率である力率が電気料金に与える影響を解説。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金明細の読み方",
              description: "請求書のどこにkW・kWh・kVAが記載されているかを図解。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人電気料金の内訳",
              description: "基本料金・電力量料金・燃料費調整額など料金構成を総解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを確認しませんか？"
          description="kW・kWh・kVAの数値を把握したら、次はシミュレーターで料金上昇リスクを診断しましょう。契約メニューの比較診断もご利用いただけます。"
          links={[
            { href: "/", label: "リスクシミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
  );
}
