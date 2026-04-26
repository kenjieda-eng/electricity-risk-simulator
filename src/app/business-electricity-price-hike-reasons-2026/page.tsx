import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import TableOfContents from "../../components/market-data/TableOfContents";
import SisterSiteLink from "../../components/simulator/SisterSiteLink";
import FloatingCta from "../../components/simulator/FloatingCta";

// --- 定数 ---
const pageTitle =
  "法人の電気料金はなぜ値上げされるのか｜2026年最新の構造解説";
const pageDescription =
  "2026年時点で法人の電気料金が値上げされる理由を、燃料費・再エネ賦課金・容量拠出金・市場連動要素・託送料金改定の5軸で構造的に整理。補助終了後の請求書の見え方と、契約見直し判断の起点までわかりやすく解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/business-electricity-price-hike-reasons-2026";

// --- 5軸の値上げ要因 ---
const hikeDrivers: {
  axis: string;
  headline: string;
  body: string;
  signal: string;
}[] = [
  {
    axis: "① 燃料費（燃調費）",
    headline: "2026年度はLNG・原油の高止まりが燃調単価を押し上げ",
    body: "LNG・原油・石炭のCIF価格に連動する燃料費調整額は、2022年のウクライナ危機後にいったん高止まりし、激変緩和措置で見かけ上は落ち着いて見えていました。2025年度末で補助の縮小・終了が進み、2026年度は基準燃料価格との差が再び大きく見えるため、燃調単価が請求書上で大きく戻るケースが増えています。",
    signal: "請求書「燃料費調整額」の単価と、前年同月の比較。",
  },
  {
    axis: "② 再エネ賦課金",
    headline: "2024年度の大幅上昇後、2026年度も高水準を維持",
    body: "再エネ賦課金は2024年度に3.49円/kWhへ大幅に上昇し、2025年度以降も3円台後半の水準が継続する見通しです。FIT/FIP電源の買取残高と回避可能費用の差が単価を規定するため、LNG価格が下がると翌年度の賦課金はむしろ上がるという逆相関の動きが、2026年度の請求書にも影響します。",
    signal: "毎年5月検針分から改定される単価。",
  },
  {
    axis: "③ 容量拠出金",
    headline: "2024年度から始まった転嫁が、2026年度には2倍超に",
    body: "容量市場の約定結果を小売事業者が需要家に転嫁する容量拠出金は、2024年度の0.5円/kWh程度から2026年度には1.1円/kWh前後まで上昇する見通しです。固定プランでは単価に内包されて見えにくく、次回契約更新時の単価上昇として現れる点が、法人担当者にとって認識しづらい値上げ要因になっています。",
    signal: "契約更新時の単価見積、もしくは明細の容量拠出金欄。",
  },
  {
    axis: "④ 市場連動要素（JEPX・市場価格調整額）",
    headline: "猛暑・厳冬・供給ひっ迫局面でスポット価格が単価に直接反映",
    body: "市場連動プランや市場価格調整額つきメニューでは、JEPXスポット価格の月平均が単価に直接反映されます。2026年は原子力発電の再稼働進捗・再エネ出力制御・火力退役のバランスにより、時間帯・季節単位でのボラティリティが高まる局面があり、夏冬のピーク月に一時的な請求額の跳ね上がりが発生しやすい構造です。",
    signal: "市場価格調整額の月次単価、JEPX月平均と前年同月比。",
  },
  {
    axis: "⑤ 託送料金改定",
    headline: "レベニューキャップ制度下で各エリアの託送単価が段階的に改定",
    body: "2023年度に始まった送配電会社のレベニューキャップ制度のもと、各エリアの託送料金は5年間の総括原価をベースに年度ごとに改定されます。設備更新・再エネ連系投資・災害復旧コストの織り込みにより、2026年度以降もエリアによっては託送単価が上方改定され、料金プランの基本料金・電力量料金に段階的に反映されていきます。",
    signal: "契約書・見積書の託送料金内訳、送配電事業者の公表資料。",
  },
];

// --- 2025→2026年度の単価影響イメージ ---
const impactRows: {
  item: string;
  fy2025: string;
  fy2026: string;
  delta: string;
}[] = [
  {
    item: "燃料費調整額（補助反映後→補助縮小後）",
    fy2025: "補助で見かけ上低水準",
    fy2026: "補助縮小で見かけ上の反発",
    delta: "+数円/kWh規模で戻りが見える",
  },
  {
    item: "再エネ賦課金",
    fy2025: "約3.98円/kWh",
    fy2026: "3〜4円/kWh台で推移見通し",
    delta: "高水準を維持",
  },
  {
    item: "容量拠出金",
    fy2025: "約0.8円/kWh",
    fy2026: "約1.1円/kWh",
    delta: "+0.3円/kWh",
  },
  {
    item: "託送料金（エリア平均イメージ）",
    fy2025: "改定初期の水準",
    fy2026: "レベニューキャップ下で段階改定",
    delta: "エリアにより0.1〜0.3円/kWh規模",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 値上げ 2026",
    "法人 電気料金 値上げ 理由",
    "電気代 値上げ 2026年",
    "電気料金 上がる 理由 最新",
    "法人 電気代 高騰 要因",
    "容量拠出金 2026",
    "再エネ賦課金 2026",
    "託送料金 改定 法人",
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
export default function BusinessElectricityPriceHikeReasons2026Page() {
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
          { name: "2026年最新の値上げ構造解説" },
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
          <span className="text-slate-700">2026年最新の値上げ構造</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            料金が上がる理由を知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            法人の電気料金はなぜ値上げされるのか｜2026年最新の構造解説
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            2026年の法人電気料金は、燃料費の反発・再エネ賦課金の高止まり・容量拠出金の段階上昇・託送料金改定・市場連動要素のボラティリティという
            <strong>5つの要因が重なって押し上げられます</strong>。
            単年の値上げではなく、各要因が異なるタイミングと期間で効いてくるため、請求書の単価だけを見ても全体像がつかみにくいのが2026年の特徴です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、2026年時点で効いている値上げ要因を5軸に分解し、それぞれがどの項目でいつ現れるかを実務目線で整理します。「なぜ上がるのか」を一般論でまとめた
            <Link
              href="/why-business-electricity-prices-rise"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がる理由（基本編）
            </Link>
            と読み合わせると、2026年固有の論点を把握しやすくなります。
          </p>
          <p className="mt-3 rounded-lg border border-sky-300 bg-white p-3 text-sm leading-7 text-slate-700 sm:text-base">
            📈 過去 10 年の推移データは{" "}
            <Link href="/business-electricity-price-trend-10-years" className="font-semibold text-sky-700 underline-offset-2 hover:text-sky-900">
              法人電気料金の10年推移
            </Link>
            （Pillar B）を参照してください。本記事は最新性軸（2026 年要因）の Pillar A です。
          </p>
        </header>

        <TableOfContents />
        <section className="mt-6 space-y-6">
          {/* 2026年特有の背景 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              なぜ2026年の値上げは「構造的」と言われるのか
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2022〜2023年の電気料金急騰は、ウクライナ情勢に起因するLNG価格スパイクという「一時的ショック」として説明できました。これに対して2026年の値上げは、単発の国際イベントではなく、
              <strong>
                補助金の縮小、容量市場の制度開始、送配電投資のレベニューキャップ改定、再エネ買取残高の増加
              </strong>
              といった制度・構造要因が同時並行で進んでいる点が特徴です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              そのため、燃料価格が落ち着いても料金水準が以前の水準に戻らない「高止まり」が続き、予算策定や社内説明では「いつ戻るか」ではなく「どこで負担をコントロールするか」という観点が必要になります。
            </p>
          </section>

          {/* 5軸分解 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              2026年の値上げ要因5軸
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下の5軸で整理すると、請求書のどの項目で、どのタイミングで値上げが現れるかをそろえて把握できます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {hikeDrivers.map((d, i) => (
                <div
                  key={d.axis}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">
                        {d.axis}
                      </p>
                      <h3 className="mt-0.5 text-base font-semibold text-slate-900">
                        {d.headline}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {d.body}
                      </p>
                      <p className="mt-2 text-xs text-slate-500">
                        確認ポイント：{d.signal}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 年度比較表 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              2025年度と2026年度の単価イメージ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              制度要因の単価変化を並べると、2026年度は容量拠出金と再エネ賦課金の合計だけで5円/kWh前後にのぼり、そこに燃調費の補助縮小分が加わる構図が見えてきます。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      項目
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      2025年度
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      2026年度
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      変化の方向感
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {impactRows.map((row) => (
                    <tr
                      key={row.item}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.item}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.fy2025}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.fy2026}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-rose-700">
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は各制度の公表値・業界公表見通しをもとにした概算イメージです。契約区分・小売電気事業者の転嫁方針により個別の単価は異なります。
            </p>
          </section>

          {/* 請求書でどう見えるか */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              請求書・見積書でどう見えるか
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年の値上げは、請求書上では「燃料費調整額の反発」と「再エネ賦課金の単価改定」として目に見えて現れる一方、容量拠出金と託送料金改定は
              <strong>電力量料金単価・基本料金に内包されて見えにくい</strong>
              形で進みます。そのため、「単価がじわじわ上がっている」ように感じられるケースが多く、どの要因で上がっているかを分解しないと、次の行動（契約見直し・使用量削減・予算調整）の優先順位がつけられません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見積書比較の段階では、
              <Link
                href="/how-to-check-capacity-contribution-terms"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                容量拠出金の確認項目
              </Link>
              と
              <Link
                href="/how-to-check-fuel-cost-adjustment-terms"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                燃料費調整額の条項
              </Link>
              を横並びでそろえることで、どの会社の提案が構造的にコスト安定なのかを見極めやすくなります。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  2026年の値上げは「5軸（燃料費・再エネ賦課金・容量拠出金・市場連動・託送料金）の同時進行」が特徴。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  補助縮小による燃調反発と、制度起因の単価上昇が重なるため、予算は前年比+数%ではなく構造要因別に再設計が必要。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  容量拠出金と託送改定は単価に内包されやすいため、更新見積の段階で各項目の条項を比較する必要がある。
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              さらに掘り下げる場合は、{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline-offset-2 hover:text-sky-900">
                電気料金が上がる根本理由
              </Link>
              、{" "}
              <Link href="/why-electricity-prices-have-not-returned" className="text-sky-700 underline-offset-2 hover:text-sky-900">
                電気料金が戻らない理由
              </Link>
              、定量的には{" "}
              <Link href="/how-much-business-electricity-prices-increase" className="text-sky-700 underline-offset-2 hover:text-sky-900">
                電気料金が何パーセント上がるか
              </Link>
              、見落とされがちな単価増は{" "}
              <Link href="/hidden-electricity-price-increases" className="text-sky-700 underline-offset-2 hover:text-sky-900">
                ステルス値上げ・隠れ値上げ
              </Link>
              を併読すると、5 軸それぞれの背景と数値感がさらに深く理解できます。
            </p>
          </section>
        </section>

        <SisterSiteLink
          variant="related-stat"
          href="https://pps-net.org/unit"
          title="法人・家庭の電気料金の平均単価の推移"
          description="新電力ネットによる電気料金推移統計データ。"
        />

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="値上げ・推移クラスターの全体像"
            intro="本記事（Pillar A = 最新性軸）から、Pillar B（10 年推移軸）と 4 本のクラスター記事 + Pillar B 配下の 2 記事へのナビゲーションです。"
            links={[
              {
                href: "/business-electricity-price-trend-10-years",
                title: "法人電気料金の10年推移（Pillar B）",
                description: "過去 10 年の年度別データで高止まりの構造的背景を確認できます。",
              },
              {
                href: "/why-business-electricity-prices-rise",
                title: "電気料金が上がる根本理由",
                description: "4要因でシンプルに整理した入口記事。まず全体像を押さえたいときに。",
              },
              {
                href: "/why-electricity-prices-have-not-returned",
                title: "電気料金が戻らない理由",
                description: "ピーク後も水準が下がりきらない構造要因を解説。",
              },
              {
                href: "/how-much-business-electricity-prices-increase",
                title: "電気料金が何パーセント上がるか",
                description: "業種・契約区分別に値上げ幅を定量試算した実数記事。",
              },
              {
                href: "/hidden-electricity-price-increases",
                title: "ステルス値上げ・隠れ値上げ",
                description: "請求書では気づきにくい単価上昇の見落としポイント。",
              },
              {
                href: "/electricity-price-trend-2019-2025",
                title: "電気料金 2019〜2025 年推移",
                description: "Pillar B 配下、近年の単価推移を年度別に確認。",
              },
              {
                href: "/when-will-business-electricity-prices-drop",
                title: "電気料金はいつ下がるか",
                description: "Pillar B 配下、料金下降タイミングの予測整理。",
              },
              {
                href: "/capacity-contribution-explained",
                title: "容量拠出金とは｜仕組み・負担額・電気料金への影響",
                description: "2024年度から始まった制度上の値上げ要因を構造から解説。",
              },
              {
                href: "/fuel-cost-adjustment",
                title: "燃料費調整額と市場価格調整額の違い",
                description: "燃調の仕組み・計算式・2018〜2026年度の推移を実データで整理。",
              },
              {
                href: "/renewable-energy-surcharge",
                title: "再エネ賦課金とは",
                description: "2024年度の大幅上昇を含む、制度起因の主要コスト項目を解説。",
              },
              {
                href: "/electricity-price-outlook-2026",
                title: "2026年の電気料金見通し",
                description: "年度単位の推移見通しとリスクシナリオを整理しています。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社の値上げ影響額を試算する"
            description="契約区分と月間使用量を入力すると、5軸の要因別に法人電気料金の上昇リスクを定量化できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </div>

        <FloatingCta />
      </main>
    </>
  );
}
