import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "ネガワット取引とは｜法人向け仕組み・収益モデル・アグリゲーター活用ガイド";
const pageDescription =
  "ネガワット取引（節電量を電力市場で取引する仕組み）の基本から法人の収益モデル、アグリゲーター活用、デマンドレスポンスとの違いまで実務目線で 3,200 字で解説。";
const publishedDate = "2026-04-25";
const pageUrl = "https://simulator.eic-jp.org/negawatt-trading-explained";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "ネガワット取引とデマンドレスポンス（DR）の違いは何ですか？",
    answer:
      "ネガワット取引は「節電量を市場で取引する」概念全般を指します。DR はネガワット取引を実現する具体的手法（系統運用者からの指示に応じた需要抑制）です。容量市場・需給調整市場・卸市場の 3 市場すべてに DR で参加することで、ネガワット取引が成立します。",
  },
  {
    question: "ネガワット取引に参加するための最小規模はどの程度ですか？",
    answer:
      "市場ごとに異なりますが、容量市場は 1,000 kW（1 MW）、需給調整市場は 5,000 kW（5 MW）が最小単位です。中小規模法人はアグリゲーター経由で複数社を束ねて参加するのが一般的で、法人 1 社あたり最低 50-100 kW 程度の節電可能量が必要です。",
  },
  {
    question: "ネガワット取引の収入は法人税法上どう扱われますか？",
    answer:
      "アグリゲーターから受け取る収入は「雑収入」として営業外収益に計上するのが一般的です。事業活動に関連する場合は売上計上も可能。消費税は課税対象（10%）。詳細は税理士確認推奨です。",
  },
  {
    question: "発動指示が来た際、操業に影響が出ないように対応できますか？",
    answer:
      "事前に「発動可能な設備リスト」を登録しておくことで、操業継続に必要な設備は除外できます。例: 製造ライン本体は除外し、空調・照明・補機類のみで節電を達成。アグリゲーターと相談して、自社の操業パターンに合わせた発動シナリオを設計することが可能です。",
  },
  {
    question: "蓄電池があればネガワット取引の収益は増えますか？",
    answer:
      "大幅に増えます。蓄電池があれば操業を一切止めずに節電（蓄電池放電で需要を相殺）が可能なため、発動可能容量が大幅に増加。さらに容量市場への「蓄電池単独の供給力」としても参加可能。蓄電池 + ネガワット取引の組み合わせは収益最大化の王道です。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ネガワット取引",
    "ネガワット 法人",
    "アグリゲーター ネガワット",
    "需給調整市場 法人",
    "容量市場 ネガワット",
    "デマンドレスポンス 収益",
    "節電 収益化",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

export default function NegawattTradingExplainedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        dateModified={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力調達の仕組みを知る", url: "https://simulator.eic-jp.org/articles/power-procurement" },
          { name: "ネガワット取引とは" },
        ]}
        faq={FAQ_ITEMS}
      />

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">電力調達の仕組みを知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong className="font-semibold text-slate-900">ネガワット取引</strong>（Negawatt = Negative Watt）は、節電した電力量を発電と等価に扱い、電力市場で取引する仕組みです。本記事では、概念・3 つの市場・アグリゲーターの役割・法人の収益試算まで、概念整理に特化して解説します。具体的な収益最大化手法は{" "}
          <Link href="/demand-response-revenue-model" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            DR の収益モデル
          </Link>{" "}
          で深掘りします。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 1. ネガワット取引とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. ネガワット取引とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ネガワット取引は、需要側で抑制された電力量（節電量）を、新たに発電された電力と同等のものとして扱う取引概念です。発電所を新設する代わりに、需要側の節電を「仮想発電」として活用することで、供給力不足の解消とコスト削減を両立できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>2017 年: 日本でネガワット取引市場が本格開始</li>
            <li>2024 年: 容量市場に統合され、参入要件と単価が標準化</li>
            <li>2026 年: 需給調整市場での発動回数が増加し、収益機会が拡大</li>
          </ul>
        </section>

        {/* 2. なぜ注目されているのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. なぜ注目されているのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ネガワット取引は、供給側の構造変化と需要側の経営課題が交わる場として、ここ数年で急速に注目を集めています。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>火力発電所の老朽化・廃止により、構造的な供給力不足が顕在化</li>
            <li>蓄電池整備にはコスト・用地・調達リードタイムの制約が大きい</li>
            <li>需要側の節電は新規発電所より安価かつ即時実装可能</li>
            <li>法人にとっては「節電が収益源」になる新しい構造が生まれる</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            供給力確保コストの転嫁構造は{" "}
            <Link href="/what-is-capacity-contribution" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金とは
            </Link>{" "}
            にまとめており、ネガワット取引が「需要側からの供給力提供」として位置づけられる背景を確認できます。
          </p>
        </section>

        {/* 3. ネガワット取引の 3 つの市場 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. ネガワット取引の 3 つの市場</h2>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">A. 容量市場（4 年前オークション）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              4 年後の供給力（kW）をオークションで取引する市場。ネガワットは「需要削減能力」として参加可能で、約定価格は概ね 5,000-8,000 円/kW・年。長期の収益見通しが立てやすい点が特長。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">B. 需給調整市場（リアルタイム）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              系統運用者の指示で即時節電を行う市場。発動単価が高く（30-100 円/kWh 相当）、緊急性に応じた高単価が魅力。一方で、即応性の確保（数分以内）が要件となるため、自動制御装置が必要。
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">C. 卸電力取引所（JEPX）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              ネガワットアグリゲーターが代行参加し、スポット価格高騰時に節電指示を行う仕組み。価格が 30 円/kWh を超える時間帯に節電するほど収益が高まる。{" "}
              <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                JEPX の仕組み
              </Link>{" "}
              および{" "}
              <Link href="/duck-curve-corporate-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                ダックカーブが法人に与える影響
              </Link>{" "}
              と合わせて理解すると、節電タイミングの判断が早まる。
            </p>
          </div>
        </section>

        {/* 4. アグリゲーターの役割 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. アグリゲーターの役割</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人 1 社では市場参加の最低単位（1 MW 等）を満たせないことが多いため、複数の法人需要を束ねて市場参加するのが「アグリゲーター」の役割です。アグリゲーターは法人と市場の橋渡しを行い、契約・制御・精算を一括で代行します。
          </p>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">主要アグリゲーター（参考）</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>エナリス</li>
              <li>関西電力（関電エネルギーソリューション）</li>
              <li>東京電力（TEPCO エナジーパートナー）</li>
              <li>アズビル金門</li>
              <li>エネット</li>
            </ul>
          </div>

          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-lg font-semibold text-slate-900">法人側の手間</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>契約締結 + リアルタイム制御装置の設置</li>
              <li>発動指示への対応（自動化可能）</li>
              <li>事前に「発動可能設備リスト」と「除外設備」を登録</li>
            </ul>
          </div>
        </section>

        {/* 5. 法人が得られる収益 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. 法人が得られる収益</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧 500 kW 契約・節電可能量 100 kW の中堅製造業を例に、3 市場での月額収入目安を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-100 text-left">
                  <th className="px-3 py-2 font-semibold text-slate-900">市場</th>
                  <th className="px-3 py-2 font-semibold text-slate-900 text-right">月額収入目安</th>
                  <th className="px-3 py-2 font-semibold text-slate-900 text-right">年額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2">容量市場</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 50,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 60 万円</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2">需給調整市場</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 30,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 36 万円</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="px-3 py-2">JEPX 連動</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 20,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 24 万円</td>
                </tr>
                <tr className="border-b border-slate-300 bg-sky-50">
                  <td className="px-3 py-2 font-semibold text-slate-900">合計</td>
                  <td className="px-3 py-2 text-right font-semibold text-slate-900">約 100,000 円</td>
                  <td className="px-3 py-2 text-right font-semibold text-slate-900">約 120 万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            100 kW 規模で <strong className="font-semibold text-slate-900">年間 100-150 万円の追加収入</strong> が現実的です。デマンド管理と組み合わせた{" "}
            <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              基本料金削減効果
            </Link>{" "}
            と合算すると、節電施策の経済性は十分に成立します。
          </p>
        </section>

        {/* 6. 参入時の注意事項 + まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. 参入時の注意事項｜まとめ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>リアルタイム制御装置の初期投資（500-1,500 万円）が必要</li>
            <li>発動指示時の操業影響を事前評価し、除外設備を登録しておく</li>
            <li>アグリゲーター契約の手数料（収益の 20-40%）が発生する</li>
            <li>蓄電池併設で操業を止めずに節電可能となり、収益が大幅に増加</li>
            <li>残存収益でも年間 100 万円規模が見込めるため、十分魅力的</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まずシミュレーターで自社の節電可能 kW を確認し、{" "}
            <Link href="/demand-response-revenue-model" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              DR の収益モデル
            </Link>{" "}
            で具体的な事業者比較に進むのが効率的です。
          </p>
        </section>
      </section>

      {/* FAQ */}
      <div className="mt-8">
        <MarketDataFaq heading="よくある質問" items={FAQ_ITEMS} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/", title: "電気料金上昇リスク診断", description: "30 秒で自社のリスクスコアと年間影響額を試算できます。" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "請求書に直接効く燃料費調整の仕組みを確認できます。" },
            { href: "/demand-response-revenue-model", title: "DR の収益モデル", description: "ネガワット取引の収益最大化手法を深掘りで解説（G-05）。" },
            { href: "/what-is-capacity-contribution", title: "容量拠出金とは｜2026〜2028年度の単価", description: "需要側からの供給力提供という位置づけを制度から確認。" },
            { href: "/jepx-explained", title: "JEPX とは｜卸電力市場の仕組み", description: "スポット価格急騰のメカニズムを理解。" },
            { href: "/duck-curve-corporate-impact", title: "ダックカーブが法人に与える影響", description: "夕方ピーク単価高騰の構造とネガワット取引の親和性を整理。" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池の電気料金対策効果", description: "蓄電池放電で操業を止めずに節電する手法。" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "ネガワット取引と組み合わせる基本料金削減策。" },
            { href: "/electricity-bcp-for-corporates", title: "電力 BCP とは", description: "DR/ネガワットを BCP の対策の一環として位置づける視点。" },
          ]}
        />
      </div>

      {/* AuthorBadge */}
      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="自社の節電可能 kW をシミュレーターで把握し、収益モデル詳細記事と合わせて事業者選定の判断材料を整理しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/power-procurement", label: "電力調達の仕組み記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
