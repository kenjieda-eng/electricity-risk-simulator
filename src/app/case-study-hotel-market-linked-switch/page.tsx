import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "ホテル：市場連動プランから固定プランへ切り替えた事例｜首都圏ビジネスホテル";
const pageDescription =
  "首都圏ビジネスホテルが市場連動型電力プランから固定型プランへ切り替え、電気代の予測不能な変動リスクを解消した事例。切り替えの判断基準・実際のコスト比較・リスク管理の考え方を解説します。";
const pageUrl = "https://simulator.eic-jp.org/case-study-hotel-market-linked-switch";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["市場連動プラン リスク", "固定プラン 切り替え", "ホテル 電力契約", "JEPX 価格変動", "電力プラン比較", "ホテル 電気代削減"],
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

const monthlyComparison = [
  { month: "1月", marketLinked: "3,820,000", fixed: "2,980,000", diff: "▲840,000" },
  { month: "2月", marketLinked: "3,140,000", fixed: "2,850,000", diff: "▲290,000" },
  { month: "3月", marketLinked: "2,650,000", fixed: "2,520,000", diff: "▲130,000" },
  { month: "4月", marketLinked: "2,210,000", fixed: "2,280,000", diff: "+70,000" },
  { month: "5月", marketLinked: "2,180,000", fixed: "2,290,000", diff: "+110,000" },
  { month: "6月", marketLinked: "2,640,000", fixed: "2,510,000", diff: "▲130,000" },
  { month: "7月", marketLinked: "3,980,000", fixed: "2,890,000", diff: "▲1,090,000" },
  { month: "8月", marketLinked: "4,420,000", fixed: "3,020,000", diff: "▲1,400,000" },
  { month: "9月", marketLinked: "3,310,000", fixed: "2,870,000", diff: "▲440,000" },
  { month: "10月", marketLinked: "2,290,000", fixed: "2,480,000", diff: "+190,000" },
  { month: "11月", marketLinked: "2,850,000", fixed: "2,620,000", diff: "▲230,000" },
  { month: "12月", marketLinked: "3,680,000", fixed: "2,940,000", diff: "▲740,000" },
  { month: "年間合計", marketLinked: "37,170,000円", fixed: "31,250,000円", diff: "▲5,920,000円" },
];

export default function CaseStudyHotelMarketLinkedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="ホテル：市場連動プランから固定プランへ切り替えた事例｜首都圏ビジネスホテル"
        description="首都圏ビジネスホテルが市場連動型電力プランから固定型プランへ切り替え、電気代の予測不能な変動リスクを解消した事例。切り替えの判断基準・実際のコスト比較・リスク管理の考え方を解説します。"
        url="https://simulator.eic-jp.org/case-study-hotel-market-linked-switch"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "ホテル：市場連動プランから固定プランへ切り替えた事例" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">ホテル：固定プランへの切り替え事例</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">CASE STUDY ／ 事例・削減実績</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          ホテル：市場連動プランから固定プランへ切り替えた事例
        </h1>
        <p className="mt-1 text-sm font-medium text-slate-500">首都圏ビジネスホテル ／ 高圧受電（客室180室）</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          首都圏に立地する客室180室のビジネスホテルが、2023年に市場連動型電力プランへ切り替えたものの、
          夏季・冬季のJEPXスポット価格高騰で電気代が予算を大幅に超過。
          2024年4月に固定型プランへ再切り替えし、年間電気代を<strong>約592万円削減</strong>するとともに
          コスト予測の安定化を達成した事例です。
          「安い」だけで選んだ市場連動プランのリスクと、固定プランの判断基準を詳しく解説します。
        </p>
      </header>

      {/* 企業プロフィール */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">施設プロフィール</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {[
                ["施設種別", "ビジネスホテル（シングル・ダブル中心）"],
                ["客室数", "180室"],
                ["立地", "首都圏（東京電力管内）"],
                ["受電区分", "高圧（6,600V）"],
                ["年間使用電力量", "約1,450,000kWh"],
                ["市場連動プラン期間", "2023年4月〜2024年3月（12ヶ月）"],
                ["固定プランへの切り替え", "2024年4月〜"],
                ["施設の特徴", "空調・給湯・照明の電力割合が高い。24時間稼働。"],
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

      {/* 市場連動プランの失敗 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">なぜ市場連動プランで失敗したか</h2>
        <ul className="mt-4 space-y-3">
          {[
            "2023年4月の切り替え時点では「市場価格が安定しているうちは市場連動が有利」との判断だったが、同年夏に猛暑でJEPXスポット価格が急騰。8月の電気代が予算比で160%を超えた。",
            "冬季（2024年1月〜2月）も寒波と需給逼迫で価格が高騰。暖房需要の多いホテルは特に冬の電力使用量が多く、価格高騰の影響を直撃した。",
            "ホテルは稼働率に応じてコストが変動するが、電気代が市場価格でも変動するため、収益計画が立てられず財務管理が困難になった。",
            "市場価格が高騰しても節電には限界があるため（宿泊客への影響）、コスト増をそのまま受け入れざるを得なかった。",
            "年間を通じてみると、市場連動プランの方が固定プランより高くなる月が8ヶ月/12ヶ月に達した。",
          ].map((text, i) => (
            <li key={i} className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base">
              <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center">{i + 1}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 月別比較テーブル */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">月別コスト比較：市場連動 vs 固定プラン（試算）</h2>
        <p className="mt-2 text-sm text-slate-600">市場連動プランの実績値と、同期間に固定プランであった場合の試算値を比較</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">月</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">市場連動（実績）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">固定プラン（試算）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              {monthlyComparison.map((row, i) => (
                <tr key={i} className={i === monthlyComparison.length - 1 ? "bg-sky-100 font-bold" : row.diff.startsWith("+") ? "bg-red-50" : ""}>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.month}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.marketLinked}</td>
                  <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">{row.fixed}</td>
                  <td className={`border border-slate-200 px-3 py-2 text-right font-medium ${row.diff.startsWith("+") ? "text-red-600" : "text-green-700"}`}>{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">赤行は市場連動プランの方が安かった月（4月・5月・10月）。年間トータルでは固定プランが約592万円安い結果に。</p>

        {/* CSS バー可視化 */}
        <div className="mt-6">
          <h3 className="text-base font-semibold text-slate-900 mb-3">月別電気代の比較（万円）</h3>
          <div className="space-y-2">
            {[
              { month: "1月", market: 382, fixed: 298 },
              { month: "7月", market: 398, fixed: 289 },
              { month: "8月", market: 442, fixed: 302 },
              { month: "12月", market: 368, fixed: 294 },
            ].map((bar) => (
              <div key={bar.month}>
                <p className="text-xs text-slate-600 mb-1">{bar.month}</p>
                <div className="flex gap-2 items-center">
                  <span className="text-xs text-slate-500 w-16">市場連動</span>
                  <div className="h-3 rounded bg-red-400" style={{ width: `${(bar.market / 5) * 1}%` }} />
                  <span className="text-xs text-slate-600">{bar.market}万円</span>
                </div>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-xs text-slate-500 w-16">固定</span>
                  <div className="h-3 rounded bg-sky-500" style={{ width: `${(bar.fixed / 5) * 1}%` }} />
                  <span className="text-xs text-slate-600">{bar.fixed}万円</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 切替前後のコスト比較テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">切替前後のコスト比較</h2>
        <p className="mt-2 text-sm text-slate-600">年間ベースでの費目別比較（市場連動プラン実績 vs 固定プラン切替後）</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">費目</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">市場連動（年間）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">固定切替後（年間）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">差額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約2,340万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約1,890万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲450万円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場価格調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約890万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">なし（固定込み）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲890万円相当</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約480万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約470万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲10万円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約980万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約660万円（上限設定あり）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲320万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約480万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約460万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲20万円</td>
              </tr>
              <tr className="bg-sky-100 font-bold">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">合計（年間）</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約3,717万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-slate-700">約3,125万円</td>
                <td className="border border-slate-200 px-3 py-2 text-right text-green-700">▲約592万円</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">※市場価格調整額は固定プランでは電力量料金に統合される形となるため、費目ベースの差額は参考値です。</p>
      </section>

      {/* 固定プランへの切り替え判断 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">固定プランへの切り替え判断基準</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          このホテルが固定プランへの切り替えを決定した判断基準は以下の3点です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { title: "電力使用量の節電余地が少ない", body: "宿泊客がいる以上、空調・給湯・照明を大幅に削減できない。市場価格高騰時にコスト回避手段がない。" },
            { title: "予算管理の確実性を優先", body: "賃借料・人件費と同様、電気代も固定費として管理する必要がある。月次P/L予測の精度が経営判断に直結。" },
            { title: "固定プランの単価が許容範囲内", body: "固定プランの提示単価と市場連動の過去1年平均を比較し、固定プランの方が年間トータルで優位と試算。" },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 成功要因 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">成功要因・学んだこと</h2>
        <ul className="mt-4 space-y-3">
          {[
            "市場連動プランは「節電できる体制」がある需要家向き。ホテルのように節電余地が少ない施設には不向きであることを実感",
            "固定プランへの再切り替えに際し、契約期間・違約金条項を事前に確認し、タイミングを見計らって移行",
            "プラン比較の際は「単価の安さ」だけでなく、使用量パターン・価格変動リスク・予算管理のしやすさを総合評価",
            "固定プランでも複数社から見積もりを取ることで、単価を市場水準に近づけることができた",
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
          「市場連動プランへ切り替えた当初は電気代が下がって喜んでいました。
          ただ、夏に請求書を見て青ざめました。8月は前年比で180万円増でした。
          固定に戻してからはコストが読めるようになり、財務計画の信頼性が格段に上がりました。
          安定性を求める施設には固定プランが向いていると思います。」
        </blockquote>
        <p className="mt-2 text-xs text-slate-500">― 管理部 総務・施設担当マネージャー</p>
      </section>

      {/* 誘導 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">市場連動プランか固定プランか迷っている方へ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          どちらが有利かは「節電余地があるか」「予算管理の優先度」「使用量の季節変動パターン」によって異なります。
          <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランの仕組みとリスク</Link>と
          <Link href="/fixed-price-plan" className="ml-1 text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランの特徴</Link>を合わせてご確認ください。
        </p>
      </section>

      <p className="mt-4 text-xs text-slate-400 leading-5">
        ※本ページの事例は、複数の実務相談内容をもとに再構成したモデルケースです。数値は業界平均を参考にした概算値であり、実際の削減効果は条件により異なります。
      </p>

      <div className="mt-8">
        <RelatedLinks
          heading="関連事例・記事"
          links={[
            { href: "/market-linked-plan", title: "市場連動プランとは", description: "JEPX連動型プランの仕組みとリスク・メリットを解説" },
            { href: "/fixed-price-plan", title: "固定プランとは", description: "固定型電力プランの特徴と向いている事業者の条件" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "燃料費調整額の仕組みと上限廃止後のリスク" },
            { href: "/case-study-manufacturing-cost-reduction", title: "製造業：年間18%削減した事例", description: "デマンド制御と新電力切り替えを組み合わせた製造業事例" },
          ]}
        />
      </div>
      <div className="mt-6">
        <ContentCta
          heading="あなたの施設に最適なプランを診断する"
          description="現在の電気代・使用量・契約内容を入力することで、プラン変更の効果と高騰リスクを確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/contact", label: "相談・問い合わせ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
