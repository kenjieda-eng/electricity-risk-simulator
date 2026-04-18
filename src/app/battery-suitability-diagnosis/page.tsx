import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["diagnostic-tools"];


const pageTitle =
  "蓄電池導入向き不向き診断｜自社に蓄電池が合うかを整理する";
const pageDescription =
  "法人向け蓄電池（産業用蓄電池）の導入に自社が向いているかを診断チェックで確認。施設規模・電力使用パターン・予算・電気料金プランとの相性など、導入判断のポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "産業用蓄電池 導入 診断",
    "法人 蓄電池 向き不向き",
    "蓄電池 費用対効果 法人",
    "蓄電池 導入 チェックリスト",
    "電力コスト 蓄電池 削減",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/battery-suitability-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/battery-suitability-diagnosis",
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

const notSuitableConditions = [
  "電力使用量が非常に少ない（月50kWh程度以下の小規模オフィス等）",
  "施設の移転・閉鎖が近い（5年以内を想定している）",
  "設置スペースを確保できない（密集した建物内の狭小スペース）",
  "初期投資の手当てが全くなく、補助金・リースも活用できない状況",
];

export default function BatterySuitabilityDiagnosisPage() {
  return (
    <>
      <ArticleJsonLd
        headline="蓄電池導入向き不向き診断｜自社に蓄電池が合うかを整理する"
        description="法人向け蓄電池（産業用蓄電池）の導入に自社が向いているかを診断チェックで確認。施設規模・電力使用パターン・予算・電気料金プランとの相性など、導入判断のポイントを解説します。"
        url="https://simulator.eic-jp.org/battery-suitability-diagnosis"
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "診断ツール・チェックリスト", url: "https://simulator.eic-jp.org/articles/diagnostic-tools" },
        ]}
        faq={[
    { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
        ]}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">蓄電池導入向き不向き診断</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          蓄電池導入向き不向き診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          産業用蓄電池は電気料金の削減・デマンド管理・BCP対応など複数の効果が期待できる設備ですが、施設の状況・電力使用パターン・予算によって向き不向きが大きく分かれます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自社に蓄電池が向いているかどうかを「電力使用パターン」「施設・設備」「資金・予算」「BCP観点」の4カテゴリで診断します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>蓄電池が向く電力使用パターンと施設条件</li>
            <li>資金・補助金・リースを活用した導入検討の視点</li>
            <li>BCP・停電対策としての蓄電池の位置づけ</li>
            <li>向いていない条件の整理と次のアクション</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断の前に：蓄電池で何ができるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            産業用蓄電池の主な活用目的を整理します。自社で実現したいことと照らし合わせながら診断を進めてください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "ピークカット・デマンド削減", body: "使用量ピーク時に放電することで、デマンド（最大需要電力）を下げ基本料金を削減する。" },
              { title: "昼夜差益の活用", body: "夜間の安価な電力を蓄え、昼間のピーク時間帯に放電することで電力量料金の差益を得る。" },
              { title: "太陽光との組み合わせ", body: "太陽光の余剰電力を蓄電し、夜間や曇天時に活用することで自家消費率を向上させる。" },
              { title: "BCP・非常用電源", body: "停電時のバックアップ電源として機能させ、事業継続と安全確保に活用する。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入向き不向き診断チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各項目をクリックしてチェックしてください。「向いている」条件が多いほど蓄電池導入の効果が期待できます。
          </p>
          <div className="mt-4">
            <DiagnosisClient />
          </div>
        </section>

        <section className="rounded-xl border border-amber-100 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">蓄電池が向いていない条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の条件が当てはまる場合、蓄電池よりも先に取り組むべき選択肢がある可能性があります。
          </p>
          <div className="mt-4 space-y-3">
            {notSuitableConditions.map((condition) => (
              <div key={condition} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-white p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-500">
                  ✕
                </span>
                <p className="text-sm leading-6 text-slate-700">{condition}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            上記に当てはまる場合は、まず{" "}
            <Link href="/self-diagnosis-contract-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力契約の見直し
            </Link>{" "}
            や{" "}
            <Link href="/solar-suitability-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              太陽光発電の検討
            </Link>{" "}
            を優先することを検討してください。
          </p>
        </section>
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />



        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断結果から次のアクションを考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「向いている」項目が多かった場合の次のステップを整理します。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "電力使用量データ（1年分）とデマンド実績を整理し、削減シミュレーションの基礎データを作る" },
              { step: 2, text: "補助金の公募情報（経済産業省・環境省・都道府県）を確認し、申請可能な制度を把握する" },
              { step: 3, text: "リース・PPAなど初期投資を抑えた導入スキームの条件も並行して確認する" },
              { step: 4, text: "蓄電池メーカー・EPC事業者に現場調査・見積依頼を行い、投資回収期間を試算する" },
              { step: 5, text: "太陽光との同時導入を検討している場合は合わせて見積を取り、セット導入の費用対効果を比較する" },
            ].map(({ step, text }) => (<div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">蓄電池導入の費用対効果目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            施設規模別の導入費用・年間削減効果・投資回収期間の目安です。実際の数値は施設条件・補助金活用によって大きく異なります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">施設規模</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">導入費用目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間削減効果</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">回収期間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">小規模（契約電力50kW未満）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">500〜1,500万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30〜80万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約15〜20年</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">中規模（契約電力50〜200kW）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,500〜5,000万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">100〜350万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約12〜17年</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">大規模（契約電力200〜500kW）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">5,000〜1億5,000万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">400〜1,200万円/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約10〜14年</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">超大規模（契約電力500kW超）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1億円〜</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円〜/年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約8〜12年</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-slate-500">※補助金活用（経産省・環境省・都道府県）により実質投資額は20〜30%程度圧縮できる場合があります。回収期間も大幅に短縮されます。</p>
        </section>

        <SourcesAndFaq
          faq={[
          { question: "診断結果はどの程度正確ですか？", answer: "簡易診断は方向性の把握を目的としており、正確な試算には実際の請求書データや見積もりが必要です。" },
          ]}
          sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp" },
          { name: "新電力ネット", url: "https://pps-net.org" },
          ]}
          publishedAt="2026-04-11"
        />



        <RelatedLinks
          heading="関連ページ"
          intro="蓄電池検討と合わせて確認したいページです。"
          links={[
            {
              href: "/solar-suitability-diagnosis",
              title: "太陽光導入向き不向き診断",
              description: "太陽光発電の自家消費が自社に向くかを確認する診断ページ。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "設備投資の前にまず電力契約の見直しを確認する診断ページ。",
            },
            {
              href: "/fixed-vs-market-quick-diagnosis",
              title: "固定プラン・市場連動向き診断",
              description: "蓄電池導入後のプラン選択にも参考になる診断ページ。",
            },
            {
              href: "/industry-risk-diagnosis",
              title: "業種別リスク診断",
              description: "業種別に蓄電池の必要性と優先度を確認する。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害リスクと電力コスト",
              description: "BCP観点での電力リスクと備えを解説。",
            },
            {
              href: "/battery-suitability-diagnosis",
              title: "蓄電池導入向き不向き診断（このページ）",
              description: "現在のページです。",
            },
          ]}
        />

        <ContentCta
          heading="まず電力コストの現状リスクを把握する"
          description="蓄電池・太陽光などの設備投資を検討する前に、現行の電力プランのコストリスクをシミュレーターで確認しておくことで、投資の優先順位を判断しやすくなります。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
