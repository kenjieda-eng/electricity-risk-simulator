import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import TableOfContents from "../../components/market-data/TableOfContents";

// --- 定数 ---
const pageTitle =
  "容量拠出金はいくら？使用量別の負担額シミュレーション";
const pageDescription =
  "容量拠出金の負担額を月5,000/10,000/30,000/50,000/100,000/300,000 kWhの使用量別に、2024/2025/2026年度の年度推移で試算。業種別の目安も含めて、予算策定と社内説明に使える数字を整理します。";
const pageUrl =
  "https://simulator.eic-jp.org/capacity-contribution-simulation";

// --- 単価推移 ---
const unitPrice: { year: string; yen: number; note: string }[] = [
  { year: "2024年度", yen: 0.5, note: "転嫁開始の初年度" },
  { year: "2025年度", yen: 0.8, note: "約定価格の上昇を反映" },
  { year: "2026年度", yen: 1.1, note: "過去実績で最高水準の見通し" },
];

// --- 使用量別シミュレーション ---
// 数値は単純試算：使用量(kWh) × 単価(円/kWh) × 12ヶ月 = 年間負担額(円)
type SimRow = {
  usage: string;
  usageKwh: number;
  typical: string;
};

const simRows: SimRow[] = [
  {
    usage: "月 5,000 kWh",
    usageKwh: 5000,
    typical: "小規模オフィス・クリニック・小型店舗",
  },
  {
    usage: "月 10,000 kWh",
    usageKwh: 10000,
    typical: "中型オフィス・コンビニ・小規模飲食チェーン",
  },
  {
    usage: "月 30,000 kWh",
    usageKwh: 30000,
    typical: "中規模工場・スーパー・学校・ホテル",
  },
  {
    usage: "月 50,000 kWh",
    usageKwh: 50000,
    typical: "大規模オフィス・商業施設テナント・食品工場",
  },
  {
    usage: "月 100,000 kWh",
    usageKwh: 100000,
    typical: "大規模工場・病院・ショッピングモール",
  },
  {
    usage: "月 300,000 kWh",
    usageKwh: 300000,
    typical: "超大型施設・冷蔵倉庫・データセンター",
  },
];

const formatYen = (v: number): string => {
  if (v >= 10000) return `${Math.round(v / 1000).toLocaleString()},000円`;
  return `${Math.round(v).toLocaleString()}円`;
};

const formatAnnualYen = (v: number): string => {
  if (v >= 1000000)
    return `${(v / 10000).toLocaleString(undefined, { maximumFractionDigits: 0 })}万円`;
  if (v >= 10000)
    return `${(v / 10000).toLocaleString(undefined, { maximumFractionDigits: 1 })}万円`;
  return `${Math.round(v).toLocaleString()}円`;
};

// --- 業種別目安 ---
const industryBenchmark: { industry: string; usage: string; impact2026: string }[] = [
  {
    industry: "小規模オフィス（50坪前後）",
    usage: "月 3,000〜8,000 kWh",
    impact2026: "年間 約 4〜10万円",
  },
  {
    industry: "コンビニ（24時間稼働）",
    usage: "月 10,000〜15,000 kWh",
    impact2026: "年間 約 13〜20万円",
  },
  {
    industry: "スーパーマーケット（中規模）",
    usage: "月 30,000〜60,000 kWh",
    impact2026: "年間 約 40〜80万円",
  },
  {
    industry: "中規模食品工場",
    usage: "月 80,000〜150,000 kWh",
    impact2026: "年間 約 105〜200万円",
  },
  {
    industry: "大規模冷蔵倉庫",
    usage: "月 200,000〜500,000 kWh",
    impact2026: "年間 約 264〜660万円",
  },
  {
    industry: "データセンター（中規模）",
    usage: "月 500,000〜1,500,000 kWh",
    impact2026: "年間 約 660〜1,980万円",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 いくら",
    "容量拠出金 シミュレーション",
    "容量拠出金 試算",
    "容量拠出金 使用量",
    "容量拠出金 kWh",
    "容量拠出金 負担額",
    "容量拠出金 法人 計算",
    "容量拠出金 業種別",
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
      { url: "/api/og/price-increase", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-increase"],
  },
};

// --- Page Component ---
export default function CapacityContributionSimulationPage() {
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
            name: "料金が上がる理由を知る",
            url: "https://simulator.eic-jp.org/articles/price-increase",
          },
          { name: "容量拠出金の使用量別シミュレーション" },
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
            href="/articles/price-increase"
            className="hover:text-sky-700 hover:underline"
          >
            料金が上がる理由を知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">容量拠出金の使用量別試算</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            料金が上がる理由を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            容量拠出金はいくら？使用量別の負担額シミュレーション
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は、
            <strong>
              2024年度 約0.5円/kWh → 2025年度 約0.8円/kWh → 2026年度 約1.1円/kWh
            </strong>
            と段階的に上昇する見通しです。法人によっては「単価の変化は小さく見えても、年間使用量に掛けると数十万〜数百万円規模」に達するため、予算策定段階で使用量別の数字を押さえておく必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、月 5,000〜300,000 kWhの6段階で、2024/2025/2026年度の年度別負担額を試算し、業種別の目安もあわせて整理します。仕組みの詳細は
            <Link
              href="/capacity-contribution-explained"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金とは
            </Link>
            、固定プランと市場連動プランでの扱いの違いは
            <Link
              href="/capacity-contribution-impact-on-business"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金で法人の電気代はいくら上がる（プラン別比較）
            </Link>
            で整理しています。
          </p>
        </header>


        <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4 text-sm leading-7 text-slate-700 sm:text-base">
          📌 容量拠出金の全体像（仕組み・影響額・対策）は{" "}
          <Link href="/what-is-capacity-contribution" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
            容量拠出金とは｜2026〜2028年度の単価・法人への影響額・対策
          </Link>
          （Pillar A）、制度全体の沿革は{" "}
          <Link href="/capacity-market-timeline" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
            容量市場の制度変遷と電気料金への影響
          </Link>
          （Pillar B）を参照してください。
        </div>
        <TableOfContents />
        <section className="mt-6 space-y-6">
          {/* 単価推移 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              年度別の単価（概算）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              試算の前提となる年度別単価は以下のとおりです。容量市場の約定結果（OCCTO公表）と、小売電気事業者の標準的な転嫁方針に基づく概算値です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {unitPrice.map((u) => (
                <div
                  key={u.year}
                  className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <p className="text-xs font-semibold text-slate-500">
                    {u.year}
                  </p>
                  <p className="mt-1 text-2xl font-bold text-sky-700">
                    約 {u.yen.toFixed(1)}
                    <span className="text-base font-medium">円/kWh</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{u.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 実際の単価は契約条件・小売電気事業者の転嫁方針・エリアにより異なります。
            </p>
          </section>

          {/* 使用量別シミュレーション表 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              使用量別・年度別の負担額シミュレーション
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月間使用量 × 単価 × 12ヶ月で年間負担額を試算しました。月次の金額と、2024→2026年度の差分（年間ベース）も並べています。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[840px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      月間使用量
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      典型業種
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold text-right">
                      2024年度 月額
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold text-right">
                      2025年度 月額
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold text-right">
                      2026年度 月額
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold text-right">
                      2026年度 年間
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold text-right">
                      2024→2026 年間差分
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {simRows.map((r) => {
                    const m24 = r.usageKwh * 0.5;
                    const m25 = r.usageKwh * 0.8;
                    const m26 = r.usageKwh * 1.1;
                    const annual26 = m26 * 12;
                    const deltaAnnual = (m26 - m24) * 12;
                    return (
                      <tr
                        key={r.usage}
                        className="odd:bg-white even:bg-slate-50"
                      >
                        <td className="border border-slate-300 px-3 py-2 font-medium">
                          {r.usage}
                        </td>
                        <td className="border border-slate-300 px-3 py-2 text-xs">
                          {r.typical}
                        </td>
                        <td className="border border-slate-300 px-3 py-2 text-right">
                          {formatYen(m24)}
                        </td>
                        <td className="border border-slate-300 px-3 py-2 text-right">
                          {formatYen(m25)}
                        </td>
                        <td className="border border-slate-300 px-3 py-2 text-right font-semibold">
                          {formatYen(m26)}
                        </td>
                        <td className="border border-slate-300 px-3 py-2 text-right font-semibold text-sky-700">
                          {formatAnnualYen(annual26)}
                        </td>
                        <td className="border border-slate-300 px-3 py-2 text-right font-semibold text-rose-700">
                          +{formatAnnualYen(deltaAnnual)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 計算式：月額 = 月間使用量（kWh）× 単価（円/kWh）。年間 = 月額 × 12ヶ月。単価は2024年度0.5円/2025年度0.8円/2026年度1.1円の概算値で統一しています。
            </p>
          </section>

          {/* 業種別目安 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別の年間負担額の目安（2026年度）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同じ使用量でも、業種特性によって月次変動幅が異なります。以下はあくまで「典型的な月次使用量レンジ」に基づく目安値で、実際は契約電力・稼働パターンにより個別に変動します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {industryBenchmark.map((b) => (
                <div
                  key={b.industry}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {b.industry}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    月間使用量の目安：{b.usage}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-rose-700">
                    2026年度の年間負担額：{b.impact2026}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 予算策定での使い方 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              予算策定と社内説明での使い方
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              上記の試算を実務に落とし込むときは、以下の3点を押さえておくと社内説明がスムーズになります。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <strong>再エネ賦課金と合算して「制度要因合計」で把握する</strong>
                。2026年度は容量拠出金（約1.1円/kWh）＋再エネ賦課金（約3.8〜4.0円/kWh想定）で
                <strong>合算約5円/kWh</strong>
                が制度要因として発生します。
              </li>
              <li>
                <strong>単年度ではなく3年（2024→2026）の推移で示す</strong>
                。単価だけ見ると小さな変化に見えますが、累計では使用量が大きい法人ほど影響が顕在化するため、時系列で並べるのが有効です。
              </li>
              <li>
                <strong>請求書の明細項目で確認できるかを把握する</strong>
                。市場連動プランでは別建て項目になることが多く、固定プランでは単価に内包されて見えにくいため、見積比較時に両者の扱いをそろえる必要があります。
              </li>
            </ol>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  容量拠出金の単価は2024年度 約0.5円/kWh → 2026年度 約1.1円/kWhと2倍超に。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  月 30,000 kWhで年間約40万円、月 300,000 kWhで年間約400万円規模の負担に到達。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  再エネ賦課金と合算した「制度要因合計」で把握し、3年推移で社内説明するのが実務上有効。
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
              { href: "/what-is-capacity-contribution", title: "容量拠出金とは｜2026〜2028年度の単価・法人への影響額・対策（Pillar A）", description: "拠出金の定義・単価表・法人月額試算・4 つの対策をまとめた起点記事。" },
              { href: "/capacity-market-timeline", title: "容量市場の制度変遷と電気料金への影響（Pillar B）", description: "制度沿革・初回オークション・拠出金導入の経緯を時系列で整理。" },
              {
                href: "/capacity-contribution-explained",
                title: "容量拠出金とは｜仕組み・負担額・電気料金への影響",
                description:
                  "制度の基本構造と、なぜ2024年度から電気料金に上乗せされ始めたかを解説。",
              },
              {
                href: "/capacity-contribution-impact-on-business",
                title: "容量拠出金で法人の電気代はいくら上がる（プラン別比較）",
                description:
                  "固定プランと市場連動プランでの扱いの違いを、見積比較の観点から整理。",
              },
              {
                href: "/capacity-contribution-cost-impact",
                title: "容量拠出金で電気代はどのくらい上がるのか（契約区分別）",
                description:
                  "特別高圧・高圧・低圧の契約区分別に年間影響額を試算します。",
              },
              {
                href: "/capacity-contribution-what-to-check",
                title: "容量拠出金を踏まえて法人が確認したいこと",
                description:
                  "見積書・契約書での確認ポイントと予算策定への織り込み方を整理。",
              },
              {
                href: "/renewable-energy-surcharge",
                title: "再エネ賦課金とは",
                description:
                  "もう一つの主要な制度要因。合算での負担把握の基礎になります。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社の使用量で容量拠出金の負担額を試算する"
            description="契約区分・月間使用量を入力すると、容量拠出金を含む制度要因の上昇リスクをシミュレーションできます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
