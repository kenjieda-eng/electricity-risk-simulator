import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "容量拠出金で法人の電気代はいくら上がる？使用量別の影響額と対策";
const pageDescription =
  "容量拠出金で法人の電気代はいくら上がるのかを、月1万kWh・5万kWh・10万kWhの使用量別に試算。固定プランと市場連動プランでの出方の違い、見積比較のチェックポイント、負担増への対策までわかりやすく解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/capacity-contribution-impact-on-business";

// --- 月額影響試算 ---
const monthlyImpactRows: {
  usage: string;
  usage2024: string;
  usage2025: string;
  usage2026: string;
  diff: string;
  annualDiff: string;
}[] = [
  {
    usage: "月 1万 kWh（小規模オフィス・店舗）",
    usage2024: "約 5,000円",
    usage2025: "約 8,000円",
    usage2026: "約 11,000円",
    diff: "+6,000円/月",
    annualDiff: "+7.2万円/年",
  },
  {
    usage: "月 5万 kWh（中規模オフィス・工場）",
    usage2024: "約 25,000円",
    usage2025: "約 40,000円",
    usage2026: "約 55,000円",
    diff: "+30,000円/月",
    annualDiff: "+36万円/年",
  },
  {
    usage: "月 10万 kWh（大規模工場・施設）",
    usage2024: "約 50,000円",
    usage2025: "約 80,000円",
    usage2026: "約 110,000円",
    diff: "+60,000円/月",
    annualDiff: "+72万円/年",
  },
];

// --- 固定 vs 市場連動比較 ---
const planComparisonRows: {
  item: string;
  fixed: string;
  marketLinked: string;
}[] = [
  {
    item: "容量拠出金の見え方",
    fixed: "単価（電力量料金）に内包される",
    marketLinked: "別建ての項目として請求されるケースが多い",
  },
  {
    item: "反映タイミング",
    fixed: "契約更新時に単価へ織り込まれる",
    marketLinked: "年度ごとに単価が改定される",
  },
  {
    item: "見積比較での注意点",
    fixed: "「容量拠出金込みか」を見積書で要確認",
    marketLinked: "「容量拠出金」「容量市場費用」の項目名・単価を確認",
  },
  {
    item: "負担増の把握しやすさ",
    fixed: "見えにくいが単価に隠れる",
    marketLinked: "明細で把握しやすい",
  },
];

// --- チェックポイント ---
const checkPoints: { title: string; body: string }[] = [
  {
    title: "見積書で「容量拠出金」の有無を確認する",
    body: "項目として別建てになっているか、単価に含まれているかを確認します。別建ての場合は2024年度約0.5円/kWh→2026年度約1.1円/kWhの範囲で妥当かを見ます。",
  },
  {
    title: "単価の内訳を電力会社に確認する",
    body: "固定プランで容量拠出金が内包される場合、次回更新時の単価上昇に反映されるため、次期見積での変化幅を事前に質問しておきます。",
  },
  {
    title: "年度ごとの変動を想定して予算化する",
    body: "約定価格は毎年変動するため、単年度だけでなく2026→2027年度にかけての上振れ幅もシナリオとして織り込みます。",
  },
  {
    title: "再エネ賦課金・燃調費との合算で把握する",
    body: "制度要因の合計（再エネ賦課金+容量拠出金+燃調費）で見ることで、料金の「構造的な上昇分」と「燃料相場による変動分」を切り分けて社内説明できます。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 電気代",
    "容量拠出金 法人",
    "容量拠出金 影響額",
    "容量拠出金 試算",
    "容量拠出金 いくら",
    "容量拠出金 kWh",
    "容量拠出金 固定 市場連動",
    "法人 電気代 上昇 対策",
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
        url: "/api/og/price-increase",
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
    images: ["/api/og/price-increase"],
  },
};

// --- Page Component ---
export default function CapacityContributionImpactOnBusinessPage() {
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
          { name: "容量拠出金で法人の電気代はいくら上がるか" },
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
          <span className="text-slate-700">容量拠出金の影響額と対策</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            料金が上がる理由を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            容量拠出金で法人の電気代はいくら上がる？使用量別の影響額と対策
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2024年4月に始まった容量拠出金は、kWhあたり約0.5円から2026年度には約1.1円まで上昇する見込みです。
            月1万kWhの小規模オフィスでも月+6,000円、月10万kWhの中規模工場では月+6万円規模の負担増となり、
            使用量が多い法人ほど電気代への影響が大きくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、月額の影響額を使用量別に試算し、
            固定プランと市場連動プランでの扱いの違い、見積比較での確認ポイントまで実務目線で整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 容量拠出金の基本（軽く復習） */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              容量拠出金の基本（軽く復習）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              容量拠出金は、将来の電力供給力（発電所）を確保するための
              <Link
                href="/capacity-contribution-explained"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                容量市場
              </Link>
              制度に基づき、小売電気事業者がOCCTO（電力広域的運営推進機関）へ支払う費用です。
              支払った費用は電気料金を通じて需要家に転嫁されるため、法人の電気代に直接反映されます。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              2024年度から実際の転嫁が始まり、容量市場の約定価格の上昇に伴って年度を追うごとに負担は増加しています。
              仕組みの詳細は
              <Link
                href="/capacity-contribution-explained"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                容量拠出金とは｜仕組み・負担額・電気料金への影響
              </Link>
              で整理しています。
            </p>

            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                kWhあたり転嫁単価の年度推移（概算）
              </h3>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold text-slate-500">
                    2024年度
                  </p>
                  <p className="mt-1 text-2xl font-bold text-sky-700">
                    約0.5円
                    <span className="text-base font-medium">/kWh</span>
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold text-slate-500">
                    2025年度
                  </p>
                  <p className="mt-1 text-2xl font-bold text-blue-700">
                    約0.8円
                    <span className="text-base font-medium">/kWh</span>
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold text-amber-700">
                    2026年度
                  </p>
                  <p className="mt-1 text-2xl font-bold text-amber-700">
                    約1.1円
                    <span className="text-base font-medium">/kWh</span>
                  </p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                ※ 影響額は容量市場の約定結果（OCCTO公表）および各送配電事業者の公表データに基づく試算値です。
                実際の影響額は契約条件・使用パターン・小売電気事業者の転嫁方針により異なります。
              </p>
            </div>
          </section>

          {/* 使用量別の月額影響試算 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              月額影響試算（月1万／5万／10万 kWhのケース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              容量拠出金の月額影響は <strong>「kWhあたり転嫁単価 × 月間使用量」</strong>
              で概算できます。
              2024年度（0.5円/kWh）と2026年度（1.1円/kWh）の差分は +0.6円/kWh となり、
              月1万kWhで月+6,000円、月10万kWhで月+6万円の負担増に相当します。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      使用量（月間）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      2024年度（0.5円/kWh）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      2025年度（0.8円/kWh）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      2026年度（1.1円/kWh）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      2024→2026 差分
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      年間差分
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {monthlyImpactRows.map((row) => (
                    <tr key={row.usage} className="odd:bg-white even:bg-slate-50">
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.usage}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.usage2024}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.usage2025}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.usage2026}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-rose-700">
                        {row.diff}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-rose-700">
                        {row.annualDiff}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ 計算根拠：月額影響 = kWhあたり転嫁単価 × 月間使用量。2024年度 0.5円/kWh、2025年度 0.8円/kWh、2026年度 1.1円/kWh で試算（いずれも小売電気事業者への転嫁単価の概算値）。年間差分は月間差分 × 12ヶ月。
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧など年間数百万kWh級の需要家では、
              <Link
                href="/capacity-contribution-cost-impact"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                契約区分別の年間影響額
              </Link>
              がさらに大きくなります。高圧〜特別高圧の契約区分別の試算は別ページで詳しく整理しています。
            </p>
          </section>

          {/* 固定プラン vs 市場連動プランでの扱いの違い */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              固定プラン vs 市場連動プランでの扱いの違い
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              容量拠出金は、契約プランのタイプによって請求書への現れ方が異なります。
              <Link
                href="/market-linked-vs-fixed"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                市場連動プランと固定プラン
              </Link>
              のどちらを選んでいるかで、見積比較のポイントも変わります。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      観点
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      固定プラン
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      市場連動プラン
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {planComparisonRows.map((row) => (
                    <tr
                      key={row.item}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.item}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.fixed}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.marketLinked}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              固定プランでは容量拠出金が単価に含まれて見えにくいため、
              <strong>次回契約更新時に想定以上の単価上昇</strong>として現れやすい点に注意が必要です。
              市場連動プランでは別建て明細で把握しやすい一方、
              年度ごとに単価が改定される前提で予算を置いておく必要があります。
            </p>
          </section>

          {/* 見積比較でのチェックポイント */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              見積比較でのチェックポイント
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複数社の見積を比較する際は、単価だけでなく容量拠出金の扱いもそろえて確認する必要があります。
              以下の4点を最低限チェックしましょう。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {checkPoints.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実務の手順としては、
              <Link
                href="/capacity-contribution-what-to-check"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                容量拠出金を踏まえて法人が確認したいこと
              </Link>
              もあわせて参照すると、見積書・契約書での確認項目を漏れなく押さえられます。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  容量拠出金は2024年度 約0.5円/kWh → 2026年度 約1.1円/kWhと上昇する見通し。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  月10万kWhの施設では月+6万円・年+72万円規模の負担増となり、使用量が多い法人ほど影響大。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  固定プランは単価に内包、市場連動プランは別建て明細──見積比較時は扱いの違いに注意。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  再エネ賦課金・燃料費調整額と合算した「制度要因合計」での負担把握が、社内説明・予算策定の要。
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
                href: "/capacity-contribution-explained",
                title: "容量拠出金とは｜仕組み・負担額・電気料金への影響",
                description:
                  "容量市場の基本と、なぜ2024年度から電気料金に上乗せされ始めたかをわかりやすく整理します。",
              },
              {
                href: "/capacity-contribution-cost-impact",
                title: "容量拠出金で電気代はどのくらい上がるのか（契約区分別）",
                description:
                  "特別高圧・高圧・低圧の契約区分別に年間影響額を試算。再エネ賦課金・燃調費との比較も。",
              },
              {
                href: "/capacity-contribution-what-to-check",
                title: "容量拠出金を踏まえて法人が確認したいこと",
                description:
                  "見積書・契約書での確認ポイントと、予算策定への織り込み方を実務向けに整理します。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description:
                  "容量拠出金の出方にも関わる、契約メニュー選択の基本軸を整理します。",
              },
              {
                href: "/renewable-energy-surcharge",
                title: "再エネ賦課金とは",
                description:
                  "もう一つの主要な制度要因。容量拠出金と合算した負担把握の基礎になります。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="容量拠出金を含む電気代の上昇リスクを数値で確認する"
            description="自社の契約区分・使用量を入力すると、容量拠出金を含む制度要因による上昇リスクをシミュレーションできます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              {
                href: "/articles/price-increase",
                label: "料金が上がる理由をもっと読む",
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
