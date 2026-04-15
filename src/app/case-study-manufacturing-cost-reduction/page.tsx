import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "製造業：年間電気代を18%削減した契約見直し事例｜関東の金属加工工場";
const pageDescription =
  "関東の金属加工工場が電力契約の見直しにより年間約430万円（18%）の電気代削減を達成した事例。デマンド制御・契約電力の適正化・新電力への切り替えを組み合わせた具体的な施策と Before/After 数値を詳しく解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-manufacturing-cost-reduction";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["製造業 電気代削減", "金属加工 電力契約", "デマンド制御 事例", "工場 電気代 見直し", "契約電力 適正化", "新電力 切り替え"],
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

const beforeAfter = [
  { item: "基本料金（月額）", before: "248,000円", after: "189,000円", diff: "▲59,000円" },
  { item: "電力量料金（月額）", before: "198,000円", after: "172,000円", diff: "▲26,000円" },
  { item: "燃料費調整額（月額）", before: "62,000円", after: "48,000円", diff: "▲14,000円" },
  { item: "再エネ賦課金（月額）", before: "28,000円", after: "24,000円", diff: "▲4,000円" },
  { item: "合計（月額）", before: "536,000円", after: "433,000円", diff: "▲103,000円" },
  { item: "合計（年額）", before: "6,432,000円", after: "5,196,000円", diff: "▲1,236,000円※" },
];

const measures = [
  {
    title: "契約電力の適正化（最大デマンドの実測調査）",
    detail:
      "従来は余裕を見て契約電力を500kWに設定していたが、過去2年分のデマンドデータを分析したところ実際の最大デマンドは年間を通じて380kW前後であることが判明。契約電力を410kWに引き下げ、基本料金を大幅圧縮。",
    effect: "月額▲59,000円（基本料金削減）",
  },
  {
    title: "デマンド監視システム導入・ピークカット運転",
    detail:
      "リアルタイムデマンド監視装置を導入し、デマンドが目標値の90%に達した際に大型コンプレッサーの稼働を一時停止する制御ロジックを実装。生産ラインへの影響を最小化しながら最大デマンドを安定的に抑制。",
    effect: "契約電力適正化の効果を維持・継続",
  },
  {
    title: "新電力への切り替え（電力量料金の単価改善）",
    detail:
      "大手電力の低圧動力メニューから高圧受電の新電力プランへ切り替え。燃料費調整額の上限設定があるプランを選択することで、燃調費の急騰リスクも軽減。",
    effect: "電力量料金・燃調費合計 月額▲40,000円",
  },
];

const successFactors = [
  "過去データの詳細分析：2年分の30分単位デマンドデータを精査し、ピーク発生パターンを特定",
  "生産スケジュールとの連携：大型設備の同時起動を避けるシフト調整で物理的なピーク抑制",
  "段階的な実施：まずデータ分析 → 契約変更 → 設備導入の順で進め、各段階で効果を確認",
  "複数施策の組み合わせ：単一施策ではなく基本料金・電力量料金・燃調費をそれぞれ攻略",
  "継続モニタリング：導入後も月次でデマンド実績を確認し、翌年度の契約電力を最適調整",
];

export default function CaseStudyManufacturingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">製造業：18%削減事例</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          製造業：年間電気代を18%削減した契約見直し事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">関東の金属加工工場 ／ 高圧受電（契約電力410kW）</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          関東圏に立地する従業員80名規模の金属加工工場が、2024年度に電力契約の抜本的な見直しを実施。
          デマンド制御システムの導入・契約電力の適正化・新電力への切り替えを組み合わせた結果、
          年間電気代を約2,400万円から約1,970万円へ、<strong>18%・約430万円の削減</strong>を達成しました。
          本ページでは施策の詳細と数値を公開します。
        </p>
      </header>

      {/* 企業プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">企業・施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["業種", "金属加工（プレス・切削）"],
                ["従業員数", "約80名"],
                ["立地", "関東圏（工業団地内）"],
                ["受電区分", "高圧（6,600V）"],
                ["契約電力（見直し前）", "500kW"],
                ["契約電力（見直し後）", "410kW"],
                ["年間使用電力量", "約1,850,000kWh"],
                ["見直し前の年間電気代", "約2,400万円"],
                ["操業時間", "平日 7:00〜22:00（2交代制）"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-40">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 課題 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">抱えていた課題</h2>
        <ul className="mt-4 space-y-3">
          {[
            "2022〜2023年の燃料費調整額急騰で年間電気代が30%超増加し、収益を直撃。原材料費も高騰しており、固定費削減が急務だった。",
            "契約電力500kWは10年前の設備増設時に設定したまま変更しておらず、実態と乖離している可能性が高かったが、確認する人員・知見がなかった。",
            "大型プレス機・コンプレッサーの同時起動が多く、デマンド値が不規則に跳ね上がる。過去に一度高デマンドを記録してからそのまま高い契約電力を維持していた。",
            "電力会社との契約内容を詳細に把握しているスタッフがおらず、「とりあえず現状維持」の状態が続いていた。",
            "新電力への切り替えを検討したことはあったが、供給安定性への不安と担当者の工数問題から先送りにしていた。",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 施策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">実施した施策</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-1">
          {measures.map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-sky-700">STEP {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{m.detail}</p>
              <p className="mt-2 rounded bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700 inline-block">効果: {m.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 削減結果テーブル */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">削減結果（Before / After）</h2>
        <p className="mt-2 text-sm text-slate-600">見直し前後の月額・年額比較（繁忙期の平均月）</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">費目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し後</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((row, i) => (
                <tr key={i} className={i === beforeAfter.length - 1 ? "bg-sky-100 font-bold" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.item}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.before}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.after}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-green-700">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">※年額換算は月額×12の概算。実際は季節変動があるため年間削減額は約430万円（18%）。</p>

        {/* CSS バー可視化 */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">費目別削減率の可視化</h3>
          <div className="space-y-3">
            {[
              { label: "基本料金", rate: 24, color: "bg-sky-500" },
              { label: "電力量料金", rate: 13, color: "bg-indigo-500" },
              { label: "燃料費調整額", rate: 23, color: "bg-amber-500" },
              { label: "再エネ賦課金", rate: 14, color: "bg-teal-500" },
              { label: "合計", rate: 19, color: "bg-green-500" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.rate}%削減</span>
                </div>
                <div className="h-3 w-full rounded bg-slate-200">
                  <div className={`h-3 rounded ${bar.color}`} style={{ width: `${bar.rate * 4}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 施策別削減効果内訳テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">施策別の削減効果内訳</h2>
        <p className="mt-2 text-sm text-slate-600">各施策が年間削減額430万円に占める割合と実施期間</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">施策</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">削減額（年間）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">全体に占める割合</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">実施期間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">契約電力の適正化（500kW→410kW）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-medium">約708万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約65%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">データ分析1か月・申請後即時反映</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">デマンド監視・ピークカット制御</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-medium">（上記効果を維持）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">継続効果</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">設備導入2か月・試験運用3か月</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新電力への切り替え（電力量料金）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-medium">約312万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約29%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積〜切替まで約2か月</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額の上限設定（リスク軽減）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700 font-medium">約65万円（試算）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約6%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">新電力切替と同時</td>
              </tr>
              <tr className="bg-sky-50 font-bold">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">合計</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">約430万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">100%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">着手から効果確定まで約6か月</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因</h2>
        <ul className="mt-4 space-y-3">
          {successFactors.map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 text-green-600 font-bold">✓</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 担当者コメント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">担当者コメント</h2>
        <blockquote className="mt-4 border-l-4 border-sky-400 pl-4 text-sm leading-7 text-slate-700 sm:text-base italic">
          「正直、こんなに削減できるとは思っていませんでした。デマンドのデータを見るまでは、電気代は"仕方ない固定費"という認識でした。
          分析してみると、500kWの契約電力が実態に対して過大だったことが一目瞭然で。
          デマンド制御システムの導入コストも1年半で回収できる見込みです。
          もっと早く取り組むべきでした。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 製造部 部長（設備管理担当）</p>
      </section>

      {/* 同じ悩みを抱える方へ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">同じような課題を抱える製造業の方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「デマンドが高くて基本料金が重い」「契約電力が適正かどうかわからない」という悩みは多くの工場・製造業で共通しています。
          まずは過去1〜2年分の電力使用量明細を確認し、最大<Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値</Link>と<Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力</Link>の差を確認することが出発点です。
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          当センターでは電気代の高騰リスク診断や、現在の契約状況の課題を把握するためのシミュレーターを無料で提供しています。
          また、具体的な見直し相談は<Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">お問い合わせページ</Link>からご連絡ください。
        </p>
      </section>

      {/* 免責注記 */}
      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      <div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/contract-demand-what-is-it", title: "デマンドとは", description: "基本料金を決めるデマンド（最大需要電力）の仕組みと削減方法を解説" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "契約見直しの手順と注意点を初心者向けに解説" },
            { href: "/case-study-hospital-peak-cut", title: "病院：デマンド制御で基本料金を22%圧縮した事例", description: "中規模総合病院のデマンド制御導入事例" },
            { href: "/case-study-office-building-review", title: "オフィスビル：契約電力の適正化で年間580万円削減", description: "オフィスビルの契約見直し事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="あなたの工場・事業所の削減余地を診断する"
          description="シミュレーターに現在の電気代・契約情報を入力すると、リスクスコアと削減ポテンシャルの目安がわかります。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
    </main>
  );
}
