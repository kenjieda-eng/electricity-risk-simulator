import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "飲食チェーン：40店舗一括見直しで年間2,800万円削減した事例｜居酒屋チェーン";
const pageDescription =
  "居酒屋チェーン40店舗が電力契約を一括見直し、年間2,800万円（約17%）の電気代削減を達成した事例。夜間営業特有の電力需要パターンへの対応と施策の詳細を解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-restaurant-chain-reduction";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["飲食チェーン 電気代削減", "居酒屋 電力コスト", "飲食店 電力契約 見直し", "チェーン店 電気代 一括", "夜間営業 電力", "飲食業 省エネ"],
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
  { item: "電力量料金合計（月額・40店舗）", before: "6,480,000円", after: "5,320,000円", diff: "▲1,160,000円" },
  { item: "基本料金合計（月額・40店舗）", before: "2,340,000円", after: "1,920,000円", diff: "▲420,000円" },
  { item: "燃料費調整額合計（月額）", before: "1,580,000円", after: "1,200,000円", diff: "▲380,000円" },
  { item: "再エネ賦課金合計（月額）", before: "420,000円", after: "370,000円", diff: "▲50,000円" },
  { item: "合計（月額・40店舗）", before: "10,820,000円", after: "8,810,000円", diff: "▲2,010,000円" },
  { item: "合計（年額・40店舗）", before: "約1億6,200万円", after: "約1億3,400万円", diff: "▲約2,800万円" },
];

const measuresData = [
  {
    step: "STEP 1",
    title: "40店舗の一括データ収集・現状分析",
    detail: "各店舗の過去2年分の電力使用量データを本部で一元化。立地・面積・客席数・営業時間別にクラスタリングし、電力使用量・単価の不均一性を可視化。料金単価が最も高い15店舗を優先見直し対象に設定。",
  },
  {
    step: "STEP 2",
    title: "夜間営業に適した電力メニューへの切り替え",
    detail: "居酒屋の営業時間（17:00〜24:00）は夜間電力の比重が大きいため、昼夜の時間帯別単価設定が有利なプランを選択。40店舗のボリュームを活かして新電力3社と競合見積もりを実施。",
  },
  {
    step: "STEP 3",
    title: "厨房設備の省エネ化（LED・高効率機器）",
    detail: "白熱灯・蛍光灯が残る28店舗でLED化を実施。厨房の一部ガス機器を高効率IH機器へ切り替え（電気使用量は増加するが総エネルギーコストは減少）。換気扇のインバーター化で動力電力を削減。",
  },
  {
    step: "STEP 4",
    title: "デマンド管理の導入（閉店後の設備管理）",
    detail: "閉店後の業務用冷蔵庫・冷凍庫の温度設定見直しと、不要な待機電力（サイネージ・厨房一部機器）のタイマー管理を導入。閉店後の電力使用量を平均15%削減。",
  },
];

export default function CaseStudyRestaurantChainPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">飲食チェーン：2,800万円削減事例</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          飲食チェーン：40店舗一括見直しで年間2,800万円削減した事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">居酒屋チェーン ／ 低圧（40店舗）</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          関東〜関西に40店舗を展開する居酒屋チェーンが、2024年に全店舗の電力契約・設備を一括で見直した事例です。
          夜間営業に特化した電力メニューへの切り替え・LED化・閉店後の待機電力削減を組み合わせ、
          年間<strong>約2,800万円（17%）</strong>の電気代削減を達成しました。
          飲食業特有の「夜間・深夜帯の電力需要」に特化した見直し手法を解説します。
        </p>
      </header>

      {/* プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">企業・施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["業種", "居酒屋チェーン（和食系）"],
                ["店舗数", "40店舗"],
                ["立地エリア", "関東〜関西（主要都市駅前立地）"],
                ["店舗面積", "50〜150坪（平均80坪）"],
                ["受電区分", "全店舗低圧（単相3線・三相3線混在）"],
                ["営業時間", "17:00〜24:00（一部深夜2時まで）"],
                ["年間使用電力量合計", "約3,100,000kWh"],
                ["見直し前の年間電気代", "約1億6,200万円"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="border border-slate-200 bg-slate-50 px-3 py-2 font-medium text-slate-700 w-48">{label}</td>
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
            "原材料費・人件費の上昇に加え、2022〜2023年の電力高騰で年間電気代が約30%増加。40店舗合計の電気代が経営に重くのしかかっていた。",
            "各店舗が個別に電力会社と契約しており、本部で全体の電力コストを把握する仕組みがなかった。",
            "夜間営業のため昼間の電力契約（従量電灯）のままであり、夜間の電力単価が高くなっていた。",
            "閉店後も冷蔵庫・冷凍庫・サイネージ・一部厨房機器が稼働し続け、深夜・早朝の待機電力が無駄になっていた。",
            "厨房機器のLED化・高効率化は「初期投資が惜しい」として先送りにされており、照明コストが高止まりしていた。",
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
        <h2 className="text-xl font-semibold text-slate-900">実施した施策（4段階）</h2>
        <div className="mt-4 space-y-4">
          {measuresData.map((m, i) => (
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
        <p className="mt-2 text-sm text-slate-600">40店舗合計の月額・年額比較</p>
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

        {/* CSS バー */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">施策別削減効果の内訳（年間・概算）</h3>
          <div className="space-y-3">
            {[
              { label: "電力メニュー切り替え（単価改善）", amount: "約1,400万円", rate: 50, color: "bg-sky-500" },
              { label: "LED照明・設備省エネ化", amount: "約840万円", rate: 30, color: "bg-green-500" },
              { label: "閉店後の待機電力削減", amount: "約420万円", rate: 15, color: "bg-indigo-400" },
              { label: "その他（契約メニュー最適化）", amount: "約140万円", rate: 5, color: "bg-teal-400" },
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
            "夜間営業に最適なプランを選択：昼夜の時間帯別単価設計のプランを使うことで、実態と合った料金体系に変更",
            "40店舗のボリューム活用：新電力との交渉で単価改善と燃調費上限設定を同時に実現",
            "閉店後の「見えないコスト」を削減：深夜の待機電力は意識されにくいが、積み上がると年間400万円超",
            "LED化のリース活用：初期投資をリースで平準化し、月次の節電効果がリース料を上回る設計",
            "本部主導の一元管理体制：各店舗の担当者に任せず、本部がデータを把握・管理するプロセスを構築",
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
          「電気代高騰への対策として最初はメニュー変更だけを考えていましたが、
          閉店後の待機電力も思ったより大きかったです。
          40店舗を同時に動かすのは大変でしたが、本部が主導したことで各店舗の説得も早くできました。
          年間2,800万円の削減は、今の利益率では数十店舗分の売上に相当します。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 経営管理部 コストマネジメント担当</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">飲食業・チェーン店の方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          夜間に電力使用量が集中する飲食業では、昼夜の時間帯別単価設計のプランへの切り替えが有効なケースがあります。
          また閉店後の待機電力は「見えないコスト」として放置されがちです。
          <Link href="/how-to-start-electricity-contract-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力契約の見直し手順</Link>を参考に、まず現状を把握することから始めてみてください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      <div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/how-to-start-electricity-contract-review", title: "電力契約の見直しはどこから始めるか", description: "見直しの手順と最初にすべきこと" },
            { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "複数の電力会社を正しく比較するための方法" },
            { href: "/case-study-retail-chain-review", title: "小売チェーン30店舗：年間4,200万円削減", description: "ドラッグストアチェーンの一括見直し事例" },
            { href: "/case-study-municipality-procurement", title: "自治体：12施設統合調達で年間3,100万円削減", description: "地方自治体の統合調達事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="飲食店・チェーンの電気代を診断する"
          description="シミュレーターで現在の電気代リスクを確認。複数店舗の相談もお気軽にどうぞ。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
    </main>
  );
}
