import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "法人の電気代を月10万円下げた事例集｜業種別の成功パターン";
const pageDescription =
  "法人の電気代削減事例を業種横断で7件紹介。オフィスビル・製造業・飲食チェーン・医療・倉庫・小売・ホテルの月額削減額、施策、投資回収期間、担当者の声まで構造化して整理。自社に近い事例を見つけて見直しの判断材料にできます。";
const pageUrl =
  "https://simulator.eic-jp.org/electricity-cost-reduction-case-studies";

// --- 事例データ（匿名化フィクション） ---
type CaseStudy = {
  industry: string;
  scale: string;
  beforeMonthly: string;
  afterMonthly: string;
  reduction: string;
  payback: string;
  measures: string[];
  voice: string;
};

const caseStudies: CaseStudy[] = [
  {
    industry: "オフィスビル運営（首都圏・10階建）",
    scale: "高圧・契約電力450kW",
    beforeMonthly: "月額 約180万円",
    afterMonthly: "月額 約168万円",
    reduction: "月 -12万円 / 年 -144万円",
    payback: "投資ゼロ（契約見直しのみ）",
    measures: [
      "契約電力の適正化（実デマンド実績に合わせて50kW引き下げ）",
      "燃調費上限ありの固定プランへ切替",
      "見積3社相見積もりで年間単価-0.3円/kWh",
    ],
    voice:
      "過大な契約電力が長年そのままだった。デマンド履歴を半年分確認するだけで適正値がわかり、基本料金だけで月6万円下がった。",
  },
  {
    industry: "金属加工工場（関西・3交代操業）",
    scale: "高圧・契約電力600kW",
    beforeMonthly: "月額 約420万円",
    afterMonthly: "月額 約378万円",
    reduction: "月 -42万円 / 年 -504万円",
    payback: "デマンド監視装置 約8ヶ月",
    measures: [
      "デマンド監視装置の導入とピークカット運用",
      "夜間時間帯への負荷シフト（圧縮機・炉）",
      "契約プランを時間帯別料金型へ変更",
    ],
    voice:
      "工場長と現場オペレーターが毎週ピークデータを確認する運用に変えたのが一番大きい。装置投資は短期で回収できた。",
  },
  {
    industry: "飲食チェーン（40店舗・居酒屋業態）",
    scale: "低圧・低圧電力 各店40〜60kW相当",
    beforeMonthly: "全店合計 月額 約890万円",
    afterMonthly: "全店合計 月額 約790万円",
    reduction: "月 -100万円 / 年 -1,200万円",
    payback: "投資ゼロ（一括入札）",
    measures: [
      "40店舗の契約を本部主導で一括入札",
      "同一ブランド内で燃調計算方式を統一",
      "閉店時間帯の基本契約を軽契約種別へ変更",
    ],
    voice:
      "これまで各店任せで契約がバラバラだった。本部で一括入札したら、条件も揃い経理処理が圧倒的に楽になった。",
  },
  {
    industry: "中規模病院（地方都市・200床）",
    scale: "高圧・契約電力800kW",
    beforeMonthly: "月額 約520万円",
    afterMonthly: "月額 約480万円",
    reduction: "月 -40万円 / 年 -480万円",
    payback: "BEMS 約14ヶ月",
    measures: [
      "BEMS導入で30分デマンドを可視化",
      "空調・滅菌機のピーク時間調整運用",
      "契約電力を50kW引き下げ",
    ],
    voice:
      "病院という業種柄ピーク削減には限界があると思っていたが、滅菌機のスケジュール調整だけで十分に効果があった。",
  },
  {
    industry: "冷蔵倉庫（物流・関東）",
    scale: "高圧・契約電力350kW",
    beforeMonthly: "月額 約280万円",
    afterMonthly: "月額 約260万円",
    reduction: "月 -20万円 / 年 -240万円",
    payback: "インバーター化 約24ヶ月",
    measures: [
      "冷凍機のインバーター化",
      "深夜時間帯の蓄冷運用への切替",
      "時間帯別プランへの契約変更",
    ],
    voice:
      "24時間稼働の冷凍機は触りづらいと思い込んでいたが、蓄冷運用と組み合わせれば省エネと料金最適化が両立できた。",
  },
  {
    industry: "小売チェーン（ドラッグストア30店舗）",
    scale: "低圧電力・各店30〜50kW相当",
    beforeMonthly: "全店合計 月額 約680万円",
    afterMonthly: "全店合計 月額 約610万円",
    reduction: "月 -70万円 / 年 -840万円",
    payback: "LED化 約18ヶ月",
    measures: [
      "全店LED照明化と営業時間見直し",
      "本部主導で一括契約見直し",
      "デマンド管理の本部モニタリング体制構築",
    ],
    voice:
      "設備投資と契約見直しを同時に走らせたのが大きい。LED補助金もあり、実質負担は小さく済んだ。",
  },
  {
    industry: "ビジネスホテル（首都圏・中堅チェーン1棟）",
    scale: "高圧・契約電力280kW",
    beforeMonthly: "月額 約220万円",
    afterMonthly: "月額 約198万円",
    reduction: "月 -22万円 / 年 -264万円",
    payback: "投資ゼロ（プラン切替）",
    measures: [
      "市場連動型から固定プランへ切替",
      "夏季ピーク時の空調セットバック運用",
      "相見積もりで2年固定の有利単価を確保",
    ],
    voice:
      "市場連動で稼働率が上振れした月に想定外の請求額になっていた。固定プランに戻し、月次の予算管理がしやすくなった。",
  },
];

// --- サマリー表 ---
const summaryRows = caseStudies.map((c) => ({
  industry: c.industry.split("（")[0],
  before: c.beforeMonthly,
  after: c.afterMonthly,
  diff: c.reduction.split(" / ")[0],
  annual: c.reduction.split(" / ")[1],
}));

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 削減 事例",
    "法人 電気代 下げる",
    "電気料金 削減 成功事例",
    "電気代 削減 月10万円",
    "法人 電力 削減 業種",
    "電気代 コスト削減 ケーススタディ",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/case-studies",
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
    images: ["/api/og/case-studies"],
  },
};

// --- Page Component ---
export default function ElectricityCostReductionCaseStudiesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "事例・削減実績を知る",
            url: "https://simulator.eic-jp.org/articles/case-studies",
          },
          { name: "業種別の電気代削減事例集" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav
          aria-label="パンくずリスト"
          className="mb-4 flex items-center gap-1.5 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-sky-700 hover:underline">
            ホーム
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/articles/case-studies"
            className="hover:text-sky-700 hover:underline"
          >
            事例・削減実績を知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">業種別の電気代削減事例集</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            事例・削減実績を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            法人の電気代を月10万円下げた事例集｜業種別の成功パターン
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「自社と似た業種で本当に削減できるのか」という疑問は、見直しを検討する多くの担当者が最初に抱くものです。
            このページでは、オフィスビル・製造業・飲食チェーン・医療・倉庫・小売・ホテルの7業種について、
            月額削減額・施策内容・投資回収期間・担当者の声を構造化して掲載します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            いずれも実在企業のデータをもとに匿名化・一般化した典型事例です。
            自社に近い事例を見つけて、次の打ち手を具体的に描くための参考としてください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* サマリー */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              7業種の削減実績サマリー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず全体像を一覧で把握し、そのあとで業種ごとの詳細を確認できる構成にしています。
              単一拠点と多店舗では削減インパクトの桁が違うため、自社規模に近い事例に注目してください。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      業種
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      Before
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      After
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      月額削減
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      年間削減
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {summaryRows.map((row) => (
                    <tr
                      key={row.industry}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.industry}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.before}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.after}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-emerald-700">
                        {row.diff}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-emerald-700">
                        {row.annual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ いずれも実在企業の取材データをもとに匿名化・一般化した典型事例です。
              契約条件・使用パターンにより実際の削減額は異なります。
            </p>
          </section>

          {/* 詳細事例 */}
          {caseStudies.map((c, idx) => (
            <section
              key={c.industry}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                事例{idx + 1}：{c.industry}
              </h2>
              <p className="mt-2 text-xs text-slate-500">{c.scale}</p>

              <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="text-xs font-semibold text-slate-500">Before</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {c.beforeMonthly}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <p className="text-xs font-semibold text-slate-500">After</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">
                    {c.afterMonthly}
                  </p>
                </div>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                  <p className="text-xs font-semibold text-emerald-700">
                    削減額
                  </p>
                  <p className="mt-1 text-lg font-bold text-emerald-700">
                    {c.reduction}
                  </p>
                </div>
                <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-center">
                  <p className="text-xs font-semibold text-sky-700">
                    投資回収
                  </p>
                  <p className="mt-1 text-lg font-bold text-sky-700">
                    {c.payback}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">
                  実施した主な施策
                </h3>
                <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                  {c.measures.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="shrink-0 text-sky-700">&#9679;</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold text-amber-700">担当者の声</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  「{c.voice}」
                </p>
              </div>
            </section>
          ))}

          {/* 共通する成功パターン */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種を横断して見える3つの成功パターン
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  1. 契約電力・デマンドの適正化
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  過去12ヶ月の実デマンドを確認するだけで、
                  多くの法人で10〜20%の基本料金削減余地が見つかります。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  2. 多店舗の一括入札
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  店舗ごとにバラバラだった契約を本部主導で統一すると、
                  単価と管理工数の両面で効果が出ます。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  3. プラン選定の見直し
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  市場連動・固定・時間帯別のどれが自社に合うかを、
                  負荷パターンから逆算すると効果的です。
                </p>
              </div>
            </div>
          </section>

          {/* 自社に置き換えるには */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              自社に置き換えて検討するには
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              まず直近12ヶ月の電気代推移と契約電力・デマンド履歴を揃えましょう。
              そのうえで、上記の事例で自社業種に近いものを参考に、
              「契約電力適正化」「プラン切替」「多店舗一括入札」のどれが効きそうかを仮説立てします。
              相見積もりを取る前の仮説があるかどうかで、見積評価の精度は大きく変わります。
            </p>
          </section>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/case-study-manufacturing-cost-reduction",
                title: "製造業：年間電気代を18%削減した契約見直し事例",
                description:
                  "関東の金属加工工場が契約電力・デマンド制御・市場連動プラン切替を組み合わせた詳細事例。",
              },
              {
                href: "/case-study-retail-chain-review",
                title: "小売チェーン30店舗：一括見直しで年間4,200万円削減",
                description:
                  "ドラッグストア30店舗の本部主導による一括入札プロセスを詳解します。",
              },
              {
                href: "/electricity-cost-reduction-action-map",
                title: "電気代削減アクションマップ",
                description:
                  "契約見直し・設備対策・運用改善の施策別効果を体系的に整理しています。",
              },
              {
                href: "/contract-review-reduction-effect",
                title: "契約見直しによる削減効果の目安",
                description:
                  "業種・規模別に、契約見直しだけで期待できる削減幅の目安を整理しています。",
              },
              {
                href: "/electricity-cost-benchmark-by-industry",
                title: "業種別の電気代ベンチマーク",
                description:
                  "自社の水準が高いか低いかを判断するための業種別相場を整理しています。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社に似た事例の削減余地を数値で確認する"
            description="事例を参考に仮説を立てたら、自社の契約条件・使用量を入力してリスクと削減余地をシミュレーションできます。専門スタッフへの相談もご活用ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門スタッフに相談する" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
