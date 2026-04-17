import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "電力会社の料金改定の仕組み｜規制料金と自由料金の値上げプロセスを解説";
const pageDescription =
  "電力会社の料金改定がどのように行われるかを解説。規制料金の経産省認可プロセス、自由料金（法人契約）の改定方式、大手電力の過去の改定履歴、法人が確認すべきポイントを整理。";

// --- 規制料金 vs 自由料金比較 ---
const comparisonRows = [
  {
    item: "対象",
    regulated: "低圧（家庭・小規模事業者）",
    free: "高圧・特別高圧（法人）",
  },
  {
    item: "料金設定",
    regulated: "経産省の認可が必要",
    free: "電力会社が自由に設定",
  },
  {
    item: "値上げプロセス",
    regulated: "申請→公聴会→認可",
    free: "通知のみ（契約約款に基づく）",
  },
  {
    item: "燃調費上限",
    regulated: "あり（規制料金メニュー）",
    free: "なし（多くの自由料金）",
  },
  {
    item: "改定頻度",
    regulated: "数年に一度（大幅改定時）",
    free: "契約更新ごと・随時",
  },
  {
    item: "透明性",
    regulated: "高い（公表義務あり）",
    free: "契約ごとに異なる",
  },
];

// --- 規制料金改定プロセス ---
const regulatedSteps = [
  {
    step: 1,
    title: "電力会社が申請",
    desc: "コスト積み上げ方式で適正原価を算定し、経済産業省に料金値上げを申請する。",
  },
  {
    step: 2,
    title: "経産省が審査",
    desc: "原価算定の妥当性、適正利潤の範囲、燃料費見通しなどを詳細に審査する。",
  },
  {
    step: 3,
    title: "消費者委員会の意見",
    desc: "消費者庁の消費者委員会が申請内容を検討し、消費者保護の観点から意見を提出する。",
  },
  {
    step: 4,
    title: "公聴会の開催",
    desc: "一般消費者や事業者が意見を述べる機会として公聴会が開催される。",
  },
  {
    step: 5,
    title: "認可・適用",
    desc: "経産省が値上げ幅を最終決定し、認可後に新料金が適用される。",
  },
];

// --- 自由料金改定パターン ---
const freePatterns = [
  {
    no: 1,
    title: "契約更新時の単価改定",
    desc: "高圧・特別高圧の法人契約は通常1〜2年の契約期間を設けており、更新のタイミングで電力会社から新しい単価が提示される。エネルギー市場の動向を反映した価格改定が行われやすい。",
  },
  {
    no: 2,
    title: "契約期間中の約款変更条項に基づく改定",
    desc: "多くの自由料金契約には「燃料費等の大幅変動時には料金を変更できる」旨の約款が含まれており、電力会社は契約期間中であっても一定の予告期間（通常1〜3か月）を設けたうえで料金を改定できる。",
  },
  {
    no: 3,
    title: "調整項目（燃調費・市場連動）による実質的な変動",
    desc: "基本単価は変わらなくても、燃料費調整額や市場価格連動部分が毎月変動するため、請求金額は実質的に毎月変わる。上限撤廃後は燃調費がマイナス方向に制限なく拡大することもある。",
  },
];

// --- 大手電力料金改定履歴 ---
const revisionHistory = [
  {
    period: "2023年6月",
    company: "東京電力EP",
    type: "規制料金値上げ",
    range: "+15〜29%",
    background: "燃料高・赤字解消",
  },
  {
    period: "2023年6月",
    company: "東北電力",
    type: "規制料金値上げ",
    range: "+22〜33%",
    background: "同上",
  },
  {
    period: "2023年6月",
    company: "北陸電力",
    type: "規制料金値上げ",
    range: "+39〜44%",
    background: "原発停止の影響大",
  },
  {
    period: "2023年6月",
    company: "中国電力",
    type: "規制料金値上げ",
    range: "+23〜31%",
    background: "同上",
  },
  {
    period: "2023年6月",
    company: "四国電力",
    type: "規制料金値上げ",
    range: "+23〜28%",
    background: "同上",
  },
  {
    period: "2023年6月",
    company: "沖縄電力",
    type: "規制料金値上げ",
    range: "+33〜39%",
    background: "離島・燃料依存",
  },
  {
    period: "2023年4月",
    company: "北海道電力",
    type: "規制料金値上げ",
    range: "+18〜23%",
    background: "同上",
  },
];

// --- 法人向けチェックリスト ---
const checklistItems = [
  "契約書・約款に「料金改定条項」が含まれているか、その発動条件を確認する",
  "改定通知の受け取り方法（書面・メール等）と通知期限を把握しておく",
  "契約更新日を社内カレンダーに登録し、改定提示に対して比較検討する期間を確保する",
  "燃料費調整額の上限撤廃有無を確認し、単価変動リスクを試算する",
  "複数の電力会社から見積もりを取り、改定後の実効単価を比較する",
  "市場連動型プランの場合はJEPX価格の動向を月次でモニタリングする体制を整える",
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力料金改定",
    "電気料金値上げ",
    "規制料金",
    "自由料金",
    "法人電気料金",
    "料金改定プロセス",
    "経産省認可",
    "燃料費調整",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/electricity-rate-revision-mechanism",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-rate-revision-mechanism",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- Page Component ---
export default function ElectricityRateRevisionMechanismPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力会社の料金改定の仕組み｜規制料金と自由料金の値上げプロセスを解説"
        description="電力会社の料金改定がどのように行われるかを解説。規制料金の経産省認可プロセス、自由料金（法人契約）の改定方式、大手電力の過去の改定履歴、法人が確認すべきポイントを整理。"
        url="https://simulator.eic-jp.org/electricity-rate-revision-mechanism"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力会社の料金改定の仕組み" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link
              href="/articles/price-increase"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              料金が上がる理由を知る
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-700">料金改定の仕組み</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="mb-2 text-xs font-medium text-sky-700">料金が上がる理由を知る</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力会社の料金改定の仕組み
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社が料金を値上げする際、どのようなプロセスを経るのでしょうか。家庭向けの「規制料金」と法人向けの「自由料金」では、改定の手続きや透明性が大きく異なります。このページでは、それぞれの改定プロセス、大手電力の改定履歴、そして法人担当者が契約更新時に確認すべきポイントをまとめて解説します。
        </p>
      </header>

      {/* 本文 */}
      <div className="mt-6 space-y-6">

        {/* H2: 規制料金と自由料金の違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規制料金と自由料金の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電気料金は大きく「規制料金」と「自由料金」の2種類に分かれます。法人契約（高圧・特別高圧）は自由料金の対象であり、規制料金のような厳格な認可プロセスは存在しません。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                    項目
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-700">
                    規制料金
                  </th>
                  <th className="border border-slate-200 px-4 py-2 text-left font-semibold text-sky-700">
                    自由料金（法人向け）
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-4 py-2 font-medium text-slate-700">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-600">
                      {row.regulated}
                    </td>
                    <td className="border border-slate-200 px-4 py-2 text-slate-700">
                      {row.free}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: 規制料金の改定プロセス */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規制料金の改定プロセス</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            規制料金の値上げは、電力会社の一存では決められません。経済産業省への申請から認可まで、複数のチェックが入る慎重なプロセスが定められています。
          </p>
          <div className="mt-5 space-y-3">
            {regulatedSteps.map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            このプロセスには通常数か月を要するため、申請から実際の値上げ適用まである程度の猶予期間があります。一方、事前に公表されるため利用者は準備期間を確保しやすいという側面もあります。
          </p>
        </section>

        {/* H2: 自由料金（法人向け）の改定パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自由料金（法人向け）の改定パターン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向けの自由料金は、経産省の認可を要しません。主に以下の3つのパターンで料金が変動します。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-1 xl:grid-cols-3">
            {freePatterns.map((p) => (
              <div
                key={p.no}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-2 inline-block rounded-full bg-sky-100 px-3 py-0.5 text-xs font-semibold text-sky-700">
                  パターン {p.no}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 大手電力会社の主な料金改定履歴 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            大手電力会社の主な料金改定履歴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2023年は燃料費高騰や旧原子力発電所の停止による収支悪化を背景に、複数の大手電力が規制料金の大幅値上げを実施しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    時期
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    電力会社
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    改定種別
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    改定幅（目安）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">
                    背景
                  </th>
                </tr>
              </thead>
              <tbody>
                {revisionHistory.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.period}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">
                      {row.company}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.type}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-600">
                      {row.range}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.background}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
            <span className="font-semibold text-amber-700">注：</span>
            関西電力・中部電力・九州電力は2023年に規制料金の値上げを行わなかった（原発稼働等で収支が安定）。ただし自由料金メニューの改定は各社個別に実施されている場合がある。
          </div>
        </section>

        {/* H2: 法人向け自由料金の改定で確認したいこと */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人向け自由料金の改定で確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自由料金は電力会社が柔軟に改定できる分、法人側の情報収集と事前確認が重要です。以下の6点をチェックしておきましょう。
          </p>
          <ul className="mt-4 space-y-3">
            {checklistItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* H2: 新電力の料金改定はどう行われるか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            新電力の料金改定はどう行われるか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            新電力（大手電力以外の小売電気事業者）は規制料金メニューを持たず、すべての料金が自由料金です。そのため、大手電力が行うような経産省への申請や公聴会プロセスは一切ありません。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">約款に基づく改定</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                新電力の料金改定は契約約款の変更通知のみで実施できる。通知期間（1〜3か月前）を確認しておくことが重要。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">JEPX連動の場合は毎月変動</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                市場連動型プラン（スポット価格に連動）では、基本的に毎月の精算単価が変わる。電力市場の急騰時は請求額が大幅に膨らむリスクがある。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">撤退・契約終了のリスク</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                新電力は市場価格急騰時に事業継続が困難になるケースがある。撤退時は最終保障供給へ移行するが、その際の料金は割高になる。
              </p>
            </div>
          </div>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>
                規制料金（低圧向け）は経産省の認可プロセスが必要で透明性が高い。法人向けの自由料金は通知のみで改定できる。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>
                2023年6月には東京・東北・北陸・中国・四国・沖縄の6電力が規制料金を大幅値上げした。北海道電力は同年4月に実施。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>
                法人契約では、契約更新時・約款変更条項・燃調費の3つのルートで料金が変動する。いずれも事前の把握と対応準備が不可欠。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>
                新電力はすべて自由料金であり、JEPX連動プランは毎月の単価変動リスクを伴う。契約条件の精査が重要。
              </span>
            </li>
          </ul>
        </section>

      </div>

      <div className="mt-6">
        <GlossaryLinks currentSlug="electricity-rate-revision-mechanism" terms={["基本料金", "電力量料金", "燃料費調整額", "再エネ賦課金", "容量拠出金", "託送料金"]} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "燃料費・送配電費・再エネ賦課金など、法人料金が上昇する構造的要因を解説。",
            },
            {
              href: "/fuel-cost-adjustment-upper-limit",
              title: "燃料費調整額の上限撤廃とは",
              description: "規制料金の燃調上限と自由料金の違い、上限撤廃後のリスクをわかりやすく整理。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人の電気料金はどれくらい上がったか",
              description: "過去の推移データをもとに、法人契約の実効単価がどう変化したかを確認する。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "電気料金の見積書の読み方",
              description: "電力会社から届く見積書の各項目の意味と、比較時のチェックポイントを解説。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "現在の契約と他メニューの料金を比較し、最適プランを診断する。",
            },
            {
              href: "/articles/price-increase",
              title: "料金が上がる理由を知る（カテゴリ）",
              description: "電気料金上昇の要因をテーマ別に学べる記事一覧。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "改定が続く料金水準の実態を直近の推移データで確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを診断する"
          description="料金改定が続く今、自社の契約が高騰リスクにどれだけさらされているかを無料で診断できます。契約区分・使用量を入力するだけで、シミュレーション結果をすぐに確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "関連解説記事を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
