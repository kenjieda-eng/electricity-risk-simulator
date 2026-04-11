import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "小売チェーン30店舗：一括見直しで年間4,200万円削減した事例｜ドラッグストア";
const pageDescription =
  "ドラッグストアチェーン30店舗が電力契約を一括見直しし、年間4,200万円（約19%）の電気代削減を達成した事例。一括交渉のメリット・施策の詳細・Before/After数値をまとめて解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-retail-chain-review";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["小売チェーン 電気代削減", "ドラッグストア 電力契約", "複数店舗 一括見直し", "チェーン店 電気代", "小売業 電力コスト削減", "一括調達 電力"],
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

const storeData = [
  { type: "旗艦店（500坪以上）", count: 4, avgKwh: "480,000kWh/年", avgBefore: "約1,150万円/年" },
  { type: "標準店（150〜300坪）", count: 18, avgKwh: "210,000kWh/年", avgBefore: "約520万円/年" },
  { type: "小型店（150坪未満）", count: 8, avgKwh: "95,000kWh/年", avgBefore: "約240万円/年" },
];

const beforeAfter = [
  { item: "基本料金合計（月額・30店舗）", before: "5,820,000円", after: "4,680,000円", diff: "▲1,140,000円" },
  { item: "電力量料金合計（月額・30店舗）", before: "8,340,000円", after: "7,120,000円", diff: "▲1,220,000円" },
  { item: "燃料費調整額合計（月額）", before: "2,160,000円", after: "1,690,000円", diff: "▲470,000円" },
  { item: "再エネ賦課金合計（月額）", before: "780,000円", after: "670,000円", diff: "▲110,000円" },
  { item: "合計（月額・30店舗）", before: "17,100,000円", after: "14,160,000円", diff: "▲2,940,000円" },
  { item: "合計（年額・30店舗）", before: "約2億2,000万円", after: "約1億7,800万円", diff: "▲約4,200万円" },
];

export default function CaseStudyRetailChainPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          小売チェーン30店舗：一括見直しで年間4,200万円削減した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">ドラッグストアチェーン ／ 低圧〜高圧混在（30店舗）</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          関東〜東海エリアに30店舗を展開するドラッグストアチェーンが、2024年に全店舗の電力契約を一括で見直した事例です。
          個別交渉ではなく<strong>30店舗のボリュームをまとめて新電力に提示することで交渉力を最大化</strong>し、
          電力量料金の単価改善・LED化による使用量削減・契約メニューの最適化を組み合わせ、
          年間<strong>約4,200万円（19%）</strong>の削減を達成しました。
        </p>
      </header>

      {/* 企業プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">企業・施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["業種", "ドラッグストア（小売）"],
                ["店舗数", "30店舗"],
                ["立地エリア", "関東〜東海（複数電力エリア）"],
                ["店舗面積帯", "100坪〜600坪"],
                ["受電区分", "低圧（小型店）〜高圧（旗艦店）混在"],
                ["年間使用電力量合計", "約6,800,000kWh"],
                ["見直し前の年間電気代", "約2億2,000万円"],
                ["営業時間", "9:00〜22:00（一部24時間店舗あり）"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-48">{label}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-5 text-base font-semibold text-slate-900">店舗規模別の内訳</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">店舗タイプ</th>
                <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">店舗数</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">平均使用量</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前の平均電気代</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((row) => (
                <tr key={row.type}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.type}</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-slate-700">{row.count}店</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.avgKwh}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.avgBefore}</td>
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
            "各店舗が個別に大手電力会社と契約しており、チェーン全体としての交渉力が活用できていなかった。",
            "2022〜2023年の電力高騰で30店舗合計の電気代が約35%増加。既存利益率を大きく圧迫した。",
            "照明がまだ蛍光灯の店舗が多く（18店舗）、省エネ余地が大きかったが投資判断が遅れていた。",
            "店舗ごとに電力担当者が異なり、本部で全体最適を図る体制が整っていなかった。",
            "冷蔵ショーケースが多く、電力消費量のピークが何時帯に集中しているか把握できていなかった。",
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
        <h2 className="text-xl font-semibold text-slate-900">実施した施策（3段階）</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              step: "STEP 1",
              title: "全30店舗の電力使用データを本部で一元把握",
              detail: "各店舗から過去2年分の電力使用量明細を収集し、本部で一元的に分析。店舗規模・使用量・デマンド・燃調費の実態を把握した上で、新電力3社に一括で見積もり依頼を実施。30店舗のボリュームを前面に出すことで、単価交渉で有利な立場を確保。",
            },
            {
              step: "STEP 2",
              title: "新電力への一括切り替え（電力量料金の単価改善）",
              detail: "旗艦店4店舗（高圧）と標準店・小型店26店舗（低圧）でそれぞれ最適な新電力プランを選択。燃料費調整額に上限設定のあるプランを優先。エリアをまたぐ店舗も同一事業者でまとめることで管理工数を削減。",
            },
            {
              step: "STEP 3",
              title: "LED照明への切り替え（蛍光灯18店舗を対象）",
              detail: "蛍光灯が残る18店舗でLED照明への切り替えを実施。初期投資はリース活用で平準化。照明消費電力を平均40%削減。冷蔵ショーケース扉の設置（オープンケース→扉付きへの改修）も5店舗で試験導入し、冷蔵電力を約15%削減。",
            },
          ].map((m, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-sky-700">{m.step}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 削減結果テーブル */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">削減結果（Before / After）</h2>
        <p className="mt-2 text-sm text-slate-600">30店舗合計の月額・年額比較</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">費目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し前</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">見直し後</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">削減額</th>
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

        {/* CSS バー可視化 */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">施策別削減効果の内訳（年間）</h3>
          <div className="space-y-3">
            {[
              { label: "新電力切り替え（単価改善）", amount: "約2,600万円", rate: 62, color: "bg-sky-500" },
              { label: "LED照明切り替え", amount: "約1,100万円", rate: 26, color: "bg-green-500" },
              { label: "契約メニュー最適化・その他", amount: "約500万円", rate: 12, color: "bg-indigo-400" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-semibold">{bar.amount}（{bar.rate}%）</span>
                </div>
                <div className="h-3 w-full rounded bg-slate-200">
                  <div className={`h-3 rounded ${bar.color}`} style={{ width: `${bar.rate}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因</h2>
        <ul className="mt-4 space-y-3">
          {[
            "一括交渉によるスケールメリット：30店舗まとめての切り替えを条件に、通常より有利な単価を引き出せた",
            "本部主導の一元管理：各店舗任せにせず本部が全店の契約を把握・管理する体制を整備",
            "設備投資との同時実施：LED化をリース活用で初期コストを抑えながら進め、電力単価削減と使用量削減を同時に実現",
            "複数電力会社を競わせる：3社に同時見積もりを依頼し、競争原理を働かせた",
            "スモールスタートでの効果確認：冷蔵ショーケース扉化は5店舗での試験導入後に全店展開を検討",
          ].map((text, i) => (
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
          「各店舗が個別に電力会社と交渉していたころは全く太刀打ちできませんでしたが、
          30店舗まとめて提示したとたんに新電力各社の対応が変わりました。
          交渉力はボリュームだと実感しています。LED化と合わせて実施したことで、
          効果が二重になりました。投資回収まで2年の見込みです。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 管理本部 コスト最適化推進担当</p>
      </section>

      {/* 同じ悩みを抱える方へ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">同じような課題を抱える小売・チェーン事業者の方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          複数店舗を運営しているにもかかわらず個別契約のままにしている場合、大きな交渉機会を逃している可能性があります。
          まず全店舗の電気代を合計し、年間コストの規模感を把握することが第一歩です。
          <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の比較方法</Link>も参考にしてください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      <div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "複数の電力会社を正しく比較する方法と注意点" },
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの手順と最初にすべき確認事項" },
            { href: "/case-study-restaurant-chain-reduction", title: "飲食チェーン：40店舗一括見直しで年間2,800万円削減", description: "居酒屋チェーンの事例" },
            { href: "/case-study-municipality-procurement", title: "自治体：12施設統合調達で年間3,100万円削減", description: "地方自治体の統合調達事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="チェーン全店舗の電気代を一括診断する"
          description="シミュレーターで現在の電気代リスクを確認し、削減ポテンシャルを把握しましょう。複数店舗のご相談はお問い合わせページから。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
    </main>
  );
}
