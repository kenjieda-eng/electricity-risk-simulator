import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "省エネ設備投資の税制優遇｜2026年度の適用条件まとめ";
const pageDescription =
  "2026年度（令和8年度）に活用できる省エネ設備投資の税制優遇3制度（中小企業経営強化税制・エネルギー利用環境負荷低減事業適応計画認定制度・カーボンニュートラル投資促進税制）の対象設備・控除率・手続きフロー・適用期限を整理します。";
const pageUrl =
  "https://simulator.eic-jp.org/energy-saving-tax-incentive-2026";

// --- 3制度の比較 ---
const taxSystemRows: {
  name: string;
  target: string;
  deduction: string;
  period: string;
  approval: string;
}[] = [
  {
    name: "中小企業経営強化税制",
    target: "中小企業（資本金1億円以下等）",
    deduction: "即時償却 または 税額控除10%（資本金3,000万円以下）・7%",
    period: "2025年4月〜2027年3月まで（延長）",
    approval: "経営力向上計画の認定（事業分野指針所管省庁）",
  },
  {
    name: "エネルギー利用環境負荷低減事業適応計画認定制度（省エネ投資促進税制）",
    target: "全法人（中小企業特例あり）",
    deduction: "特別償却30% または 税額控除5%（一部7%）",
    period: "2025年度〜2027年度までの投資",
    approval: "経済産業大臣の事業適応計画認定",
  },
  {
    name: "カーボンニュートラルに向けた投資促進税制",
    target: "全法人（中堅・大企業中心）",
    deduction: "特別償却50% または 税額控除5%・10%",
    period: "2025年度〜2026年度末まで",
    approval: "産業競争力強化法の事業適応計画認定",
  },
];

// --- 対象設備 ---
const equipmentRows: {
  category: string;
  items: string;
  typicalCost: string;
  suitablePlan: string;
}[] = [
  {
    category: "高効率照明",
    items: "LED照明・高効率蛍光灯",
    typicalCost: "100万〜500万円（事業所規模）",
    suitablePlan: "中小企業経営強化税制（即時償却）が使いやすい",
  },
  {
    category: "高効率空調",
    items: "高効率エアコン・業務用パッケージエアコン",
    typicalCost: "200万〜2,000万円",
    suitablePlan: "省エネ投資促進税制 or 中小企業経営強化税制",
  },
  {
    category: "蓄電池",
    items: "産業用リチウムイオン蓄電池",
    typicalCost: "1,000万〜1億円",
    suitablePlan: "カーボンニュートラル投資促進税制（特別償却50%）",
  },
  {
    category: "太陽光発電",
    items: "屋根上設置型PV・自家消費型PV",
    typicalCost: "500万〜1億円",
    suitablePlan: "カーボンニュートラル投資促進税制 or 省エネ投資促進税制",
  },
  {
    category: "EV充電器",
    items: "急速充電器・普通充電器",
    typicalCost: "100万〜1,000万円",
    suitablePlan: "中小企業経営強化税制 or カーボンニュートラル税制",
  },
  {
    category: "高効率ボイラー・冷凍機",
    items: "ヒートポンプ、産業用冷凍機",
    typicalCost: "500万〜5,000万円",
    suitablePlan: "省エネ投資促進税制",
  },
];

// --- 手続きフロー ---
const procedureSteps: { no: number; title: string; body: string }[] = [
  {
    no: 1,
    title: "現状調査とエネルギー消費量の把握",
    body: "過去12ヶ月の電力使用量・熱使用量をデータ化し、削減対象設備を特定します。省エネ診断（SIIの無料診断事業等）の活用も有効です。",
  },
  {
    no: 2,
    title: "投資計画の策定と税制選定",
    body: "設備費用・年間削減見込・投資回収期間を試算。本記事の3制度表から最も有利な制度を選定します。複数制度の併用は原則不可なので、シミュレーションで比較します。",
  },
  {
    no: 3,
    title: "計画書の作成と認定申請",
    body: "選定制度に応じた計画書（経営力向上計画 / 事業適応計画）を作成し、所管省庁へ申請。標準審査期間は30〜60日です。",
  },
  {
    no: 4,
    title: "認定取得後の設備発注・導入",
    body: "認定を受けた後に設備を発注・導入します。認定日より前の発注・契約済み設備は対象外になるため、順序に注意。",
  },
  {
    no: 5,
    title: "税務申告時の適用手続き",
    body: "導入年度の法人税申告書に別表（特別償却の付表・税額控除明細）を添付。認定書・取得価額の根拠資料を保管します。",
  },
];

// --- 注意点 ---
const cautionItems: { title: string; body: string }[] = [
  {
    title: "認定前の発注は対象外",
    body: "計画認定より前に発注・契約した設備は税制優遇の対象外です。見積段階で認定申請を並行させ、認定取得後に発注する順序を厳守します。",
  },
  {
    title: "複数税制の併用不可",
    body: "同一設備への複数税制の重複適用は原則禁止。中小企業経営強化税制とカーボンニュートラル投資促進税制のどちらが有利かを事前試算で判断します。",
  },
  {
    title: "税額控除には年度上限",
    body: "税額控除を選択した場合、法人税額の20%が上限。上限超過分は翌年度への繰越が可能な制度と不可の制度があるため、制度別の条件を確認。",
  },
  {
    title: "適用期限と延長議論",
    body: "3制度とも2026年度末〜2027年度末で一旦期限を迎えます。延長議論は毎年末の税制改正大綱で示されるため、年度末の駆け込み投資か延長待ちかの判断に影響します。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "省エネ 税制 2026",
    "中小企業経営強化税制",
    "カーボンニュートラル 税制",
    "省エネ投資促進税制",
    "省エネ設備 税額控除",
    "蓄電池 税制",
    "LED 税制",
    "令和8年度 税制",
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
        url: "/api/og/accounting-tax",
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
    images: ["/api/og/accounting-tax"],
  },
};

// --- Page Component ---
export default function EnergySavingTaxIncentive2026Page() {
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
            name: "電気代の経理・税務",
            url: "https://simulator.eic-jp.org/articles/accounting-tax",
          },
          { name: "2026年度 省エネ税制まとめ" },
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
            href="/articles/accounting-tax"
            className="hover:text-sky-700 hover:underline"
          >
            電気代の経理・税務
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">2026年度 省エネ税制まとめ</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            電気代の経理・税務
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            省エネ設備投資の税制優遇｜2026年度の適用条件まとめ
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年度（令和8年度）、省エネ・脱炭素関連の設備投資には、主に<strong>3つの税制優遇制度</strong>が活用できます。
            LED照明・高効率空調・蓄電池・太陽光・EV充電器など、投資対象と設備規模によって有利な制度が異なるため、
            導入計画の初期段階での制度比較が、実質投資額を数百万円単位で圧縮する鍵になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、3制度の対象設備・控除率・手続きフロー・適用期限を一覧で整理し、
            設備種類ごとに「どの税制を選ぶのが有利か」の指針をまとめます。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 3制度の概要 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              活用できる3つの税制優遇
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年度時点で省エネ設備投資に使える主要税制は以下の3つです。
              中小企業は①または②、中堅・大企業は②または③、
              大規模な脱炭素投資（蓄電池・水素関連）は③が有利な傾向にあります。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      制度名
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      対象
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      控除内容
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      適用期間
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      前提となる認定
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {taxSystemRows.map((row) => (
                    <tr
                      key={row.name}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.name}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.target}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.deduction}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.period}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.approval}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ 制度内容・適用期間・控除率は毎年度の税制改正で変動します。最新の情報は経済産業省・中小企業庁・国税庁のウェブサイトで確認してください。
            </p>
          </section>

          {/* 対象設備 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              対象設備別の適用制度ガイド
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              設備ごとに「どの税制が使いやすいか」は、投資額規模と企業規模で決まります。
              以下は代表的な設備と、中小〜中堅企業が選択する目安です。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      設備カテゴリ
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      具体例
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      典型的な投資額
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      有利な制度
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {equipmentRows.map((row) => (
                    <tr
                      key={row.category}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.category}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.items}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.typicalCost}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.suitablePlan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 控除・償却の試算 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              控除・償却効果の試算例（蓄電池 3,000万円投資）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蓄電池3,000万円を導入する場合の、制度別のキャッシュ効果を比較します。
              法人税実効税率を約30%と仮定しています。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-sky-900">
                  ①中小企業経営強化税制（即時償却）
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  3,000万円を導入年度に全額損金算入。法人税減税効果：
                  <strong>3,000万円 × 30% = 約900万円</strong>を初年度に圧縮。
                </p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-emerald-900">
                  ②省エネ投資促進税制（特別償却30%）
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  初年度償却額：通常償却 + 特別償却（3,000×30%＝900万円）。
                  キャッシュ効果は<strong>初年度 約270万円</strong>の税圧縮。
                </p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
                <h3 className="text-base font-semibold text-amber-900">
                  ③カーボンニュートラル税制（特別償却50%）
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  初年度償却額：通常償却 + 特別償却（3,000×50%＝1,500万円）。
                  キャッシュ効果は<strong>初年度 約450万円</strong>の税圧縮。
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ 即時償却は中小企業に限定。大企業は②③から選択。キャッシュ効果は法人税率・課税所得の状況で異なります。
            </p>
          </section>

          {/* 手続きフロー */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              手続きフロー（5ステップ）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              どの制度も「計画認定 → 設備導入 → 税務申告」の3段階ですが、
              認定申請のタイミングを間違えると制度適用不可になります。
            </p>

            <div className="mt-4 space-y-3">
              {procedureSteps.map((s) => (
                <div
                  key={s.no}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {s.no}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 注意点 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              申請と適用で失敗しやすいポイント
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              毎年相談の多い注意点を4つにまとめました。税理士・認定支援機関と事前に確認することを推奨します。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {cautionItems.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-rose-200 bg-rose-50 p-4"
                >
                  <h3 className="text-base font-semibold text-rose-900">
                    {i + 1}. {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  2026年度の省エネ税制は、中小企業経営強化税制・省エネ投資促進税制・カーボンニュートラル税制の3本柱。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  中小企業はまず「即時償却」が使える中小企業経営強化税制を第一候補に検討。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  大規模な蓄電池・PVはカーボンニュートラル税制（特別償却50%）が最有利になるケースが多い。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  認定前の発注・複数税制併用は不可。計画策定から認定取得まで30〜60日を見込んでスケジュール設計する。
                </span>
              </li>
            </ul>
          </section>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/energy-saving-tax-incentives",
                title: "省エネ税制・中小企業経営強化税制｜電力関連設備の優遇一覧",
                description:
                  "制度全体の一覧と各設備カテゴリの控除率。本記事の基礎資料として。",
              },
              {
                href: "/solar-battery-depreciation",
                title: "蓄電池・太陽光設備の減価償却と税務扱い",
                description:
                  "税制優遇適用後の減価償却の実務。取得価額・耐用年数の整理。",
              },
              {
                href: "/electricity-expense-accounting-guide",
                title: "電気代の仕訳と勘定科目｜経理担当者向けガイド",
                description:
                  "税制適用で節税した後の、電気代そのものの月次経理処理。",
              },
              {
                href: "/electricity-expense-accounting",
                title: "電気代の勘定科目と仕訳（部門配賦と月次締め）",
                description:
                  "製造業向け・部門配賦の応用編。",
              },
              {
                href: "/invoice-system-electricity",
                title: "インボイス制度と電気代",
                description:
                  "設備導入に付随する電気代・仕入税額控除の論点。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="省エネ税制を活用した投資計画を相談する"
            description="設備種類・投資額・保有年数に応じた最適な税制選定をサポートします。認定支援機関・税理士との連携も可能です。"
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
