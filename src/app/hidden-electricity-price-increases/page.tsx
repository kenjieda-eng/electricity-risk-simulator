import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "電気料金の「見えない値上げ」とは｜単価は変わらなくても負担が増える6つの理由";
const pageDescription =
  "契約単価が変わっていないのに電気代が高くなる「見えない値上げ」を解説。燃調費上昇、再エネ賦課金改定、容量拠出金導入、託送料金微増、補助金終了、消費税の6パターンを整理。";
const pageUrl = "https://simulator.eic-jp.org/hidden-electricity-price-increases";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 見えない値上げ",
    "電気代 なぜ高い",
    "燃調費 値上げ",
    "再エネ賦課金 改定",
    "容量拠出金",
    "電気料金 単価 変わらない",
    "法人 電気代 増加",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/price-trends", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-trends"],
  },
};

// --- データ定義 ---

type HiddenIncreasePattern = {
  pattern: string;
  reflection: string;
  timing: string;
  impact: string;
  countermeasure: string;
};

const HIDDEN_INCREASE_PATTERNS: HiddenIncreasePattern[] = [
  {
    pattern: "燃料費調整額（燃調費）の上昇",
    reflection: "契約単価の外で毎月変動",
    timing: "毎月（請求時に初めて気づく）",
    impact: "+2.5〜25万円/月",
    countermeasure: "契約タイプ変更で一部対応可",
  },
  {
    pattern: "再エネ賦課金の改定",
    reflection: "年度改定のため単価票は変わらない",
    timing: "毎年4月（年度切り替え時）",
    impact: "+2.5〜5万円/月",
    countermeasure: "対応不可（全需要家一律）",
  },
  {
    pattern: "容量拠出金の導入・増加",
    reflection: "料金表に記載されず内包されていく",
    timing: "年度ごと（段階引き上げ）",
    impact: "+2.5〜10万円/月",
    countermeasure: "対応不可（制度上の負担）",
  },
  {
    pattern: "託送料金の改定",
    reflection: "小幅改定のため請求書に目立たない",
    timing: "数年に1回（規制審査後）",
    impact: "+1〜3万円/月",
    countermeasure: "対応不可（送配電利用料）",
  },
  {
    pattern: "政府補助金の縮小・終了",
    reflection: "補助分がなくなり本来水準に戻る",
    timing: "政策変更時（終期は事前に告知）",
    impact: "+9〜35万円/月",
    countermeasure: "対応不可（政策依存）",
  },
  {
    pattern: "消費税率の変更",
    reflection: "全費目に一定率乗算",
    timing: "税制改正時",
    impact: "全費目に比例して増加",
    countermeasure: "対応不可（税制）",
  },
];

type CumulativeEffect = {
  pattern: string;
  base2019: string;
  change2022: string;
  change2025: string;
  monthlyDelta: string;
  annualDelta: string;
};

const CUMULATIVE_EFFECTS: CumulativeEffect[] = [
  {
    pattern: "燃調費",
    base2019: "▲1〜0円/kWh",
    change2022: "+5〜10円/kWh",
    change2025: "+1〜3円/kWh",
    monthlyDelta: "+5〜15万円",
    annualDelta: "+60〜180万円",
  },
  {
    pattern: "再エネ賦課金",
    base2019: "2.95円/kWh",
    change2022: "3.45円/kWh",
    change2025: "3.49円/kWh",
    monthlyDelta: "+2〜3万円",
    annualDelta: "+24〜36万円",
  },
  {
    pattern: "容量拠出金",
    base2019: "導入前",
    change2022: "段階導入開始",
    change2025: "0.4〜1.5円/kWh相当",
    monthlyDelta: "+2〜7.5万円",
    annualDelta: "+24〜90万円",
  },
  {
    pattern: "託送料金",
    base2019: "基準値",
    change2022: "微増",
    change2025: "微増累積",
    monthlyDelta: "+1〜2万円",
    annualDelta: "+12〜24万円",
  },
  {
    pattern: "補助金の有無",
    base2019: "なし",
    change2022: "激変緩和措置適用",
    change2025: "終了・大幅縮小",
    monthlyDelta: "+9〜35万円（終了時）",
    annualDelta: "+108〜420万円（年換算）",
  },
];

const WHY_INVISIBLE = [
  {
    title: "契約単価は変わらない",
    body: "電力会社との契約で定められた基本単価・電力量単価は、正式な料金改定がなければそのままです。そのため「単価を確認→変わっていない→問題なし」という誤った判断につながります。燃調費・再エネ賦課金・容量拠出金は、単価表とは別の行に記載されているか、そもそも契約書に明示されない場合があります。",
  },
  {
    title: "請求書を総額でしか見ない",
    body: "月次の電気代を「前月比較」または「予算比較」の総額で確認している法人は多いですが、使用量や季節変動が混在するため、単価系の変動に気づきにくくなります。「使用量が増えたせいか」と解釈して終わるケースが頻発します。費目別・単価別の月次管理が行われていないと、見えない値上げは検出できません。",
  },
  {
    title: "比較基準を持っていない",
    body: "自社の電気料金が「高いかどうか」を判断するには、同規模・同業種・同契約区分との比較、または自社の過去トレンドとの比較が必要です。多くの法人では、こうした比較基準（ベンチマーク）を持っていないため、費用が増加していても「そういうものだ」と受け入れてしまいます。",
  },
];

const CHECKLIST_ITEMS = [
  "直近3年間の燃調費単価の推移を確認したか",
  "再エネ賦課金の適用単価を毎年4月に確認しているか",
  "容量拠出金の開始時期・増加スケジュールを把握しているか",
  "補助金（激変緩和措置等）の適用期間と終了予定を把握しているか",
  "請求書を費目別に分解して前年同月と比較しているか",
  "同規模法人とのベンチマーク比較（kWhあたり単価）を実施しているか",
];

export default function HiddenElectricityPriceIncreasesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気料金の「見えない値上げ」とは｜単価は変わらなくても負担が増える6つの理由"
        description="契約単価が変わっていないのに電気代が高くなる「見えない値上げ」を解説。燃調費上昇、再エネ賦課金改定、容量拠出金導入、託送料金微増、補助金終了、消費税の6パターンを整理。"
        url="https://simulator.eic-jp.org/hidden-electricity-price-increases"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気料金の「見えない値上げ」とは" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-trends" className="underline-offset-2 hover:underline">
          電気料金の推移と高止まり
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">見えない値上げ</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金の「見えない値上げ」とは
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          契約単価が変わっていないのに電気代が毎年じわじわ増えている——そう感じたことはないでしょうか。
          この現象は偶然ではなく、契約単価以外のコスト項目が静かに上昇する「見えない値上げ」によって起きています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          燃料費調整額・再エネ賦課金・容量拠出金・託送料金・補助金終了・消費税の6つのパターンを整理し、
          月5万kWhを使用する法人施設への影響額と対策可否を具体的に示します。
        </p>
      </header>

      <TableOfContents />
      <section className="mt-6 space-y-6">
        {/* 6パターン一覧テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「見えない値上げ」6パターン一覧
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            下表はいずれも「契約単価（電力量単価）が変わらなくても請求額が増加するパターン」です。
            月5万kWhの法人施設を想定した影響額の目安と、法人側の対策可否を示しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    パターン
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    単価への反映方法
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    法人が気づくタイミング
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    月5万kWhの影響額目安
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    法人側の対策可否
                  </th>
                </tr>
              </thead>
              <tbody>
                {HIDDEN_INCREASE_PATTERNS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.pattern}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.reflection}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.timing}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                      {row.impact}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.countermeasure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※影響額は概算目安。実際の金額は契約区分・電力会社・燃料市況・補助制度の状況により異なります。
          </p>
        </section>

        {/* 累積効果テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「見えない値上げ」の累積効果（2019年基準→2025年）
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2019年を基準年として、2022年・2025年時点における各パターンの累積影響を月額・年額で試算しました。
            月5万kWh利用の高圧法人施設を想定しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    パターン
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    2019年（基準）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    2022年変化
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    2025年変化
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    月額影響の目安
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    年額影響の目安
                  </th>
                </tr>
              </thead>
              <tbody>
                {CUMULATIVE_EFFECTS.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.pattern}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.base2019}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.change2022}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.change2025}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                      {row.monthlyDelta}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                      {row.annualDelta}
                    </td>
                  </tr>
                ))}
                <tr className="bg-orange-50">
                  <td className="border border-slate-200 px-3 py-2 font-bold text-slate-900">
                    合計（累積）
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600" colSpan={3}>
                    —
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-bold text-orange-800">
                    +25〜60万円/月
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-bold text-orange-800">
                    +300〜600万円以上/年
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※概算試算。燃調費は2025年時点の市況を前提。補助金終了の影響は補助適用時と終了後の差分を加算しています。
          </p>
        </section>

        {/* 累積サマリー */}
        <section className="rounded-xl border border-orange-200 bg-orange-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            6パターンが重なると年間+300〜600万円以上の「見えない値上げ」
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月5万kWhを使用する高圧法人施設では、2019年比で契約単価を一切変えていなくても、
            2025年時点で月あたり25〜60万円超の追加コストが積み上がっている可能性があります。
            これを年額に換算すると<span className="font-bold text-orange-800">300〜600万円以上</span>の増加です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            最大の要因は補助金終了と燃調費の高止まりですが、再エネ賦課金・容量拠出金のように
            今後も段階的に増加が予定されている項目も含まれており、
            「見えない値上げ」の圧力は当面続く見通しです。
          </p>
        </section>

        {/* なぜ「見えない」のか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ「見えない」のか——3つの構造的な理由
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {WHY_INVISIBLE.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「見えない値上げ」を可視化するチェックリスト
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            以下の6項目を確認することで、自社に「見えない値上げ」が発生していないかを点検できます。
          </p>
          <ul className="mt-4 space-y-3">
            {CHECKLIST_ITEMS.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-sky-300 bg-white text-xs font-bold text-sky-700">
                  {i + 1}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            6項目すべてを「はい」と答えられる法人は、「見えない値上げ」への対応が十分できています。
            1項目でも「いいえ」がある場合は、費用分解の仕組みを整えることを優先してください。
          </p>
        </section>

        {/* 各パターンの詳細説明 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">各パターンの詳細</h2>
          <div className="mt-4 space-y-5">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                1. 燃料費調整額（燃調費）の上昇
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                燃調費は契約単価とは別に毎月変動する費目です。LNG・原油・石炭のCIF価格に連動して算定され、
                価格高騰期には1kWhあたり5〜10円超に達することがあります。月5万kWhなら25〜50万円超の追加負担となります。
                完全固定型料金プランに切り替えることで燃調費変動リスクを遮断できますが、
                固定価格には市場リスク相当のプレミアムが含まれます。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">2. 再エネ賦課金の改定</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                再エネ賦課金は毎年4月に単価が改定されます。2012年の制度開始時は0.22円/kWhでしたが、
                2022年以降は3〜3.5円/kWh台で推移しています。法人は電力会社との契約単価以外でこの負担を避ける手段がなく、
                太陽光など自家発電設備による自己消費分の削減が間接的な対策になります。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                3. 容量拠出金の導入・増加
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                容量市場から調達された電源の費用を需要家が分担する「容量拠出金」は2024年度以降に本格的な負担増が始まりました。
                料金表には明示されないまま電力コストに内包されるケースがあり、今後数年にわたって段階的に増加する見通しです。
                法人にできる対策はほぼなく、コスト増を前提とした予算計画が求められます。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">4. 託送料金の改定</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                送配電ネットワークの利用料である託送料金は、総括原価方式による規制審査後に改定されます。
                1回の改定幅は小さくても、数回重なると累積影響は無視できません。
                2023〜2024年の改定では再エネ関連コストの増加や設備更新費用の上昇が反映されています。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                5. 政府補助金（激変緩和措置等）の縮小・終了
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                2023〜2024年度に実施された「激変緩和措置」は、高圧法人向けに1〜3.5円/kWhの補助を行いました。
                この補助が終了・縮小すると、単価が変わらなくても実質的な支払額は補助額分だけ増加します。
                月5万kWhの施設では補助終了で月9〜35万円の実質値上げが生じた計算になります。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">6. 消費税率の変更</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                消費税率が引き上げられると、基本料金・電力量料金・燃調費・再エネ賦課金すべてに乗算されます。
                2019年10月の8%→10%改定では電気代全体が2%分増加しました。
                今後の増税があれば、同様に全費目に影響します。
              </p>
            </div>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>
              「見えない値上げ」は契約単価外の6つのパターンが組み合わさって発生する。
            </li>
            <li>
              月5万kWhの施設では2019年比で年間+300〜600万円超の「見えない値上げ」が累積している可能性がある。
            </li>
            <li>
              対策できるのは燃調費変動への契約タイプ見直し程度で、再エネ賦課金・容量拠出金・託送料金・消費税は法人が回避できない。
            </li>
            <li>
              「見えない値上げ」を管理するには請求書の費目別分解と月次トレンド把握が最初のステップ。
            </li>
            <li>
              補助金終了など一時的なコスト急増も「見えない値上げ」の一形態であり、政策動向の継続的なウォッチが必要。
            </li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="hidden-electricity-price-increases" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "デマンド値", "契約電力", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人の電気料金明細の見方",
              description: "請求書の各費目を理解し、費目別に変動要因を把握する方法を解説。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の仕組み・計算式・2018〜2026年の推移を詳しく解説。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再生可能エネルギー賦課金とは",
              description: "再エネ賦課金の単価推移と法人負担への影響を整理。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "容量市場の仕組みと法人が負担する容量拠出金の増加傾向を解説。",
            },
            {
              href: "/wheeling-charge-explained",
              title: "託送料金とは",
              description: "送配電ネットワーク利用料（託送料金）の構造と改定の影響を解説。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金明細書の読み方",
              description: "明細書の各行の意味と確認すべき数字のチェックポイントを整理。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の「見えない値上げ」をシミュレーションする"
          description="燃調費・再エネ賦課金・容量拠出金・補助金終了など、複数要因を組み合わせた電気代上昇リスクをシミュレーターで試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
