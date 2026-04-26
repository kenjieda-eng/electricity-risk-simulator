import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "容量拠出金とは｜2026〜2028年度の単価・法人への影響額・対策を完全解説";
const pageDescription =
  "容量拠出金とは何か、なぜ電気料金に上乗せされるのか、2026年度の単価と法人への影響額、月額試算と対策をわかりやすく解説。既存「仕組み」記事との差別化版。";
const publishedDate = "2026-05-09";
const pageUrl = "https://simulator.eic-jp.org/what-is-capacity-contribution";

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "容量拠出金は電気代のどこに含まれていますか？",
    answer:
      "小売電気事業者により表示方法が異なります。主流は「燃料費調整額」「再エネ賦課金」と並ぶ独立項目として明示する方式ですが、基本料金や従量料金に内訳非開示で含めるケースもあります。請求書の明細で「容量拠出金」「容量市場費用」等の記載を確認してください。",
  },
  {
    question: "容量拠出金の単価はいつ決まりますか？",
    answer:
      "毎年度のメインオークション（4 年前実施）の約定結果を踏まえて、各小売電気事業者が翌年度の単価を 1〜3 月頃に公表します。2026 年度分は 2025 年 12 月頃、2027 年度分は 2026 年 12 月頃に各社サイトで公開されます。",
  },
  {
    question: "容量拠出金は将来下がる可能性はありますか？",
    answer:
      "電源構成や DR 普及度により変動しますが、2030 年度までは上昇トレンドが予想されます。理由は、火力発電の老朽化加速 + 蓄電池等の新設電源の費用回収需要 + 容量市場の需要拡大の 3 点です。長期的には DR 普及で抑制される可能性があります。",
  },
  {
    question: "中小企業（低圧）にも容量拠出金は影響しますか？",
    answer:
      "影響します。低圧の小規模事業者でも 2026 年度で月数千円〜1 万円程度の負担増が見込まれます。kWh あたり 1.5 円前後の上乗せとなるため、年間消費 1 万 kWh の小規模事業所で年 15,000 円程度の追加負担です。",
  },
  {
    question: "DR（デマンドレスポンス）に参加すれば容量拠出金を相殺できますか？",
    answer:
      "完全相殺は困難ですが、kW 規模 100 kW 以上の法人なら DR 奨励金で容量拠出金の 30〜60% を相殺できるケースが多いです。DR は「容量市場の供給側」として収入を得られる仕組みなので、容量拠出金の支払い側から「払う側 + 受け取る側」に転換できます。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金",
    "容量拠出金 とは",
    "容量拠出金 法人",
    "容量拠出金 単価",
    "容量拠出金 2026",
    "容量市場 法人",
    "電気料金 上乗せ",
    "デマンドレスポンス DR",
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

export default function WhatIsCapacityContributionPage() {
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
          { name: "電気料金の推移と高止まり", url: "https://simulator.eic-jp.org/articles/price-trends" },
          { name: "容量拠出金とは" },
        ]}
        faq={FAQ_ITEMS}
      />

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">電気料金の推移と高止まり</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{pageTitle}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <strong className="font-semibold text-slate-900">容量拠出金</strong>とは、将来の電力供給力（kW）を確保するために小売電気事業者が容量市場で支払うコストを、電気料金として消費者に転嫁する費用です。本記事では「とは」検索者向けに、要点 → 単価表 → 法人月額試算 → 対策の順で短くまとめます。仕組みや歴史の深掘りは{" "}
          <Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            容量拠出金（仕組み解説版）
          </Link>
          を参照してください。
        </p>
      </header>

      <TableOfContents />
      <section className="mt-6 space-y-6">
        {/* 1. 要点 3 行 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">1. 容量拠出金とは（要点 3 行）</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong className="font-semibold text-slate-900">定義</strong>: 将来の電力供給力（kW）を確保するため、電力会社が容量市場で確保したコストを小売料金に上乗せする費用
            </li>
            <li>
              <strong className="font-semibold text-slate-900">開始</strong>: 2024 年度から徴収開始、2026 年度から本格化
            </li>
            <li>
              <strong className="font-semibold text-slate-900">誰が払う</strong>: 電気を使うすべての消費者（家庭・法人）
            </li>
          </ul>
        </section>

        {/* 2. なぜ必要なのか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2. なぜ必要なのか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>火力発電所の老朽化・廃止が進行</li>
            <li>再エネ拡大で火力の稼働率が低下し、新設投資の回収が困難に</li>
            <li>容量市場で「将来も発電できる状態を保つ」ことに対価を支払う仕組みを導入</li>
          </ul>
        </section>

        {/* 3. 単価表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">3. 2026〜2028 年度の単価</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-900">約定価格（円/kW・年）</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-900">想定総額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2024</td>
                  <td className="px-3 py-2 text-right text-slate-700">3,495</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 1.6 兆円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2025</td>
                  <td className="px-3 py-2 text-right text-slate-700">5,242</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 2.4 兆円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2026</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 6,000（予測）</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 2.7 兆円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2027</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 7,000（予測）</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 3.2 兆円</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">2028</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 8,000（予測）</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 3.6 兆円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 約定価格は容量市場メインオークションの結果。地域・電源により変動します。詳しい年度別推移は{" "}
            <Link href="/capacity-contribution-history" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金の年度別推移
            </Link>
            を参照。
          </p>
        </section>

        {/* 4. 法人の電気料金にどう乗るか */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">4. 法人の電気料金にどう乗るか（実額試算）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <strong className="font-semibold text-slate-900">試算前提</strong>: 高圧 500 kW 契約、年間消費 200 万 kWh の中堅製造業
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-900">年度</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-900">月額</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-900">年額</th>
                  <th className="px-3 py-2 text-right font-semibold text-slate-900">kWh あたり</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2024</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 145,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 1.75 百万円</td>
                  <td className="px-3 py-2 text-right text-slate-700">0.87 円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2025</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 218,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 2.62 百万円</td>
                  <td className="px-3 py-2 text-right text-slate-700">1.31 円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2026</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 250,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 3.00 百万円</td>
                  <td className="px-3 py-2 text-right text-slate-700">1.50 円</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-3 py-2 text-slate-700">2027</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 292,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 3.50 百万円</td>
                  <td className="px-3 py-2 text-right text-slate-700">1.75 円</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-slate-700">2028</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 333,000 円</td>
                  <td className="px-3 py-2 text-right text-slate-700">約 4.00 百万円</td>
                  <td className="px-3 py-2 text-right text-slate-700">2.00 円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧法人は <strong className="font-semibold text-slate-900">2026 年度時点で月 25 万円、2028 年度には月 33 万円</strong>の負担増が見込まれます。同条件の影響額は{" "}
            <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              容量拠出金のコスト影響試算
            </Link>
            と{" "}
            <Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              高圧の料金構造
            </Link>
            と合わせて確認できます。
          </p>
        </section>

        {/* 5. 4 つの対策 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">5. 法人がとれる 4 つの対策</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong className="font-semibold text-slate-900">使用量削減</strong>: 容量拠出金は kW（最大需要）に応じて転嫁されるため、デマンド削減が直接効きます。{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                デマンド制御の削減効果
              </Link>
              を参照。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">DR 参加</strong>: 容量市場の発動指示に応じた需要抑制で、自社が容量市場の「供給側」になれます。{" "}
              <Link href="/demand-response-revenue-model" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                DR の収益モデル
              </Link>
              で具体額を確認。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">蓄電池導入</strong>: ピーク時放電で kW を抑制。{" "}
              <Link href="/battery-electricity-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                蓄電池の電気料金対策効果
              </Link>
              で回収期間を試算できます。
            </li>
            <li>
              <strong className="font-semibold text-slate-900">契約見直し</strong>: 容量拠出金の転嫁方法は小売各社で異なります。複数社からの相見積もりで実質単価を比較してください。
            </li>
          </ol>
        </section>

        {/* 6. ダックカーブとの関連 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">6. 関連トピック｜ダックカーブとの接点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は、太陽光大量導入で生じる{" "}
            <Link href="/duck-curve-corporate-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ダックカーブ（夕方ピーク）
            </Link>
            への対応コストでもあります。夕方の供給力確保のために蓄電池・調整力電源を維持するコストが、容量拠出金として法人にも転嫁される構造を理解しておくと、対策の優先順位を判断しやすくなります。
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
            { href: "/simulate", title: "電気料金上昇リスク診断", description: "容量拠出金を含む年間影響額をシミュレーターで試算。" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額（燃調費）とは", description: "容量拠出金と並ぶ請求書の上乗せ要因。" },
            { href: "/capacity-contribution-explained", title: "容量拠出金（仕組み解説版）", description: "歴史・制度の深掘りはこちら。" },
            { href: "/capacity-contribution-cost-impact", title: "容量拠出金のコスト影響試算", description: "高圧/低圧別の影響額を比較。" },
            { href: "/capacity-contribution-history", title: "容量拠出金の年度別推移", description: "2024〜2028 年度の単価推移を整理。" },
            { href: "/demand-response-revenue-model", title: "DR の収益モデル", description: "支払い側から受取り側に転換する仕組み。" },
            { href: "/duck-curve-corporate-impact", title: "ダックカーブと法人電気料金", description: "夕方ピーク確保コストの背景を理解する。" },
          ]}
        />
      </div>

      {/* AuthorBadge */}
      <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="自社の契約電力と年間消費量から、容量拠出金を含む年間影響額をシミュレーターで把握しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "他の解説記事を読む" },
          ]}
        />
      </div>
    </main>
  );
}
