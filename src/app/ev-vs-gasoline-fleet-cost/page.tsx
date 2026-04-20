import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "社用車EV化のコスト比較｜ガソリン車 vs 電気自動車";
const pageDescription =
  "社用車10台をEV化するTCO（総保有コスト）を、ガソリン車と電気自動車で徹底比較。年間走行距離5,000/15,000/30,000km別の損益分岐点、5年・10年保有の試算、補助金・電池劣化・出先充電コストまで実務視点で整理します。";
const pageUrl =
  "https://simulator.eic-jp.org/ev-vs-gasoline-fleet-cost";

// --- 初期費用比較 ---
const initialCostRows: {
  item: string;
  gasoline: string;
  ev: string;
}[] = [
  {
    item: "車両本体（1台・小型乗用）",
    gasoline: "250万円",
    ev: "450万円",
  },
  {
    item: "補助金（CEV補助金等・2026年度想定）",
    gasoline: "なし",
    ev: "▲55万円",
  },
  {
    item: "充電設備（1台あたり按分）",
    gasoline: "0円",
    ev: "15万円（共有6kW普通充電）",
  },
  {
    item: "実質的な初期費用（1台あたり）",
    gasoline: "250万円",
    ev: "410万円",
  },
  {
    item: "10台分の実質初期費用",
    gasoline: "2,500万円",
    ev: "4,100万円",
  },
];

// --- 年間ランニングコスト比較（15,000km/年 の場合）---
const annualCostRows: {
  item: string;
  gasoline: string;
  ev: string;
}[] = [
  {
    item: "燃料費／電気代",
    gasoline: "約212,500円（170円/L・12km/L）",
    ev: "約75,000円（25円/kWh・5km/kWh）",
  },
  {
    item: "車検・定期点検",
    gasoline: "約80,000円",
    ev: "約45,000円",
  },
  {
    item: "オイル交換等の消耗品",
    gasoline: "約30,000円",
    ev: "約5,000円",
  },
  {
    item: "自動車税",
    gasoline: "約34,500円",
    ev: "約25,000円（グリーン化特例）",
  },
  {
    item: "1台あたり年間合計",
    gasoline: "約357,000円",
    ev: "約150,000円",
  },
  {
    item: "10台分の年間合計",
    gasoline: "約357万円",
    ev: "約150万円",
  },
];

// --- 走行距離別 損益分岐点 ---
const breakEvenRows: {
  distance: string;
  annualDiff: string;
  breakEven: string;
  fiveYear: string;
  tenYear: string;
}[] = [
  {
    distance: "5,000 km/年（営業軽利用）",
    annualDiff: "約110万円/年",
    breakEven: "約14.5年",
    fiveYear: "EV不利（△1,050万円）",
    tenYear: "EV不利（△500万円）",
  },
  {
    distance: "15,000 km/年（一般的な社用車）",
    annualDiff: "約207万円/年",
    breakEven: "約7.7年",
    fiveYear: "EV不利（△560万円）",
    tenYear: "EV有利（+470万円）",
  },
  {
    distance: "30,000 km/年（配送・営業ハード利用）",
    annualDiff: "約414万円/年",
    breakEven: "約3.9年",
    fiveYear: "EV有利（+470万円）",
    tenYear: "EV有利（+2,540万円）",
  },
];

// --- 電池劣化と出先充電 ---
const hiddenCosts: { title: string; body: string }[] = [
  {
    title: "電池劣化コスト",
    body: "EVの駆動用電池は、走行距離・充電回数・気温条件により8〜10年で容量が70〜80%まで劣化します。交換費用は1台あたり100〜200万円と高額で、10年保有前提ならこの項目をTCOに組み込むか、前提として除外するかで結論が変わります。リース契約ではこの劣化リスクをリース料に転嫁されるのが通例です。",
  },
  {
    title: "出先充電（公共充電）コスト",
    body: "自社充電比率が100%なら電気代は上の試算どおりですが、現実には出先で急速充電を使う機会が発生します。公共急速充電の単価は50〜80円/kWhとレートが高く、利用比率が20%を超えると自社充電前提の試算から月数千円〜1万円上振れします。配送業など稼働距離が長い業態では、自社充電インフラの整備が必須要件になります。",
  },
  {
    title: "冬季の電費悪化",
    body: "リチウムイオン電池は低温環境で出力・容量が低下します。冬季（12〜2月）は暖房用電力も加わって電費が夏季より20〜30%悪化し、実走行の電気代試算にバッファが必要です。北海道・東北・北陸の事業者は、年間電費を5km/kWhではなく4km/kWh前提で保守的に試算することを推奨します。",
  },
  {
    title: "充電待ち時間の機会損失",
    body: "急速充電でも30〜40分、普通充電で8時間かかるため、給油5分のガソリン車より実働時間が短くなります。業務車両の稼働率が高い業態では、この機会損失を金銭換算（ドライバー人件費×待ち時間）してTCOに入れる検討が必要です。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "社用車 EV化",
    "EV ガソリン 比較",
    "EV TCO",
    "社用車 EV コスト",
    "EV 損益分岐点",
    "EV 補助金 法人",
    "フリート EV化",
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
        url: "/api/og/ev-charging",
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
    images: ["/api/og/ev-charging"],
  },
};

// --- Page Component ---
export default function EvVsGasolineFleetCostPage() {
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
            name: "EV・充電インフラ",
            url: "https://simulator.eic-jp.org/articles/ev-charging",
          },
          { name: "社用車EV化のコスト比較" },
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
            href="/articles/ev-charging"
            className="hover:text-sky-700 hover:underline"
          >
            EV・充電インフラ
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">EV vs ガソリン 社用車TCO</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            EV・充電インフラ
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            社用車EV化のコスト比較｜ガソリン車 vs 電気自動車
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            社用車10台をEV化するか否かの判断は、<strong>TCO（総保有コスト）</strong>ベースの比較が必須です。
            初期費用はEVが高くつく一方で、年間のランニングコスト（燃料費・メンテナンス）で逆転が起こるかどうかは、
            年間走行距離と保有年数に強く依存します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、年間5,000km・15,000km・30,000kmの3パターンで損益分岐点を試算し、
            5年保有と10年保有のTCO差分、電池劣化・出先充電・冬季電費悪化といった隠れたコストまで整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 初期費用比較 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              初期費用比較（1台・10台）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EV車両は本体価格がガソリン車の1.5〜2倍程度と高額ですが、CEV補助金や地方自治体の上乗せ補助金で50万〜100万円が還元されます。
              加えて、共有充電設備のコストが1台あたり10〜20万円発生します。
              補助金反映後の実質初期費用で、両者の差額を把握します。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      項目
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      ガソリン車
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      電気自動車（EV）
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {initialCostRows.map((row) => (
                    <tr
                      key={row.item}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.item}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.gasoline}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.ev}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              10台ベースで <strong>初期費用差は約1,600万円</strong>。この差額を何年で回収できるかが、EV化判断の一次評価軸です。
            </p>
          </section>

          {/* 年間ランニングコスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              年間ランニングコスト（年間15,000km走行の場合）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費・メンテナンス・税金の年間コストは、EVの方が大幅に低くなります。
              一般的な社用車（15,000km/年）の試算では、1台あたりの年間差は約20万円、10台で年約207万円の差が出ます。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      項目
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      ガソリン車
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      電気自動車（EV）
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {annualCostRows.map((row) => (
                    <tr
                      key={row.item}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.item}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.gasoline}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.ev}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 走行距離別 損益分岐点 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              年間走行距離別の損益分岐点（10台ベース）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              初期費用差1,600万円を、ランニングコスト差で何年で回収できるかを年間走行距離別に試算しました。
              <strong>年間15,000km以上走る車両構成なら、10年保有でEVが有利</strong>になるのが目安です。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      年間走行距離
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      10台の年間差分
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      損益分岐点
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      5年保有時
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      10年保有時
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {breakEvenRows.map((row) => (
                    <tr
                      key={row.distance}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.distance}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.annualDiff}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold">
                        {row.breakEven}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.fiveYear}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.tenYear}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ 初期費用差 約1,600万円（10台）を基準に試算。燃料価格・電気料金の変動、補助金の拡充・縮小で結論は変動します。
            </p>
          </section>

          {/* 隠れたコスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              単純比較に含まれない「隠れたコスト」
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              上の試算には含めていないものの、実運用で無視できない4つの要素を整理します。
              案件評価では、これらの要素の見積を1つ1つ加算した「厳密TCO」で最終判断するのが堅実です。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {hiddenCosts.map((h, i) => (
                <div
                  key={h.title}
                  className="rounded-xl border border-amber-200 bg-amber-50 p-4"
                >
                  <h3 className="text-base font-semibold text-amber-900">
                    {i + 1}. {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {h.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 判断フレーム */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              EV化の判断フレーム
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              走行距離・保有年数・充電インフラの3軸で、EV化が有効な事業者を類型化すると以下の通りです。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <strong>EV適性「高」：</strong>年間走行15,000km以上 × 5年以上保有 × 自社充電可能。配送業・営業車で15〜20台規模。
              </li>
              <li>
                <strong>EV適性「中」：</strong>年間走行10,000〜15,000km × 7年保有 × 自社充電可能。一般的な営業車。
              </li>
              <li>
                <strong>EV適性「低」：</strong>年間走行5,000km未満 or 出先充電中心 or 3年以内で入替予定。無理にEV化する必要なし。
              </li>
            </ul>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  10台ベースで初期費用差は約1,600万円。年間15,000km走行で約7.7年、30,000km走行で約3.9年が損益分岐点。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  5年保有だと走行距離30,000km/年以上でないとEVが不利。10年保有なら15,000km/年以上でEV有利。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  電池劣化・出先充電・冬季電費悪化などの隠れコストを加算した「厳密TCO」で最終判断を。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  営業軽利用（5,000km/年）の車両は、無理にEV化せずガソリン車継続が合理的なケースも多い。
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
                href: "/ev-fleet-cost-calculation",
                title: "社用車EV導入時の電力コスト試算",
                description:
                  "EV化に伴う充電電力量と月間電気代の概算。本記事の電気代前提の根拠。",
              },
              {
                href: "/ev-charging-electricity-cost-business",
                title: "EV充電設備の電気代｜法人向け料金計算と契約のポイント",
                description:
                  "充電設備導入時の基本料金インパクトと契約設計。初期費用の前提整理に。",
              },
              {
                href: "/corporate-ev-charging-basics",
                title: "法人EV充電の基礎",
                description:
                  "充電設備の種類と必要な電力契約の全体像。",
              },
              {
                href: "/v2h-v2b-explained",
                title: "V2H・V2Bの仕組み",
                description:
                  "EVを蓄電池として活用するBCP兼用モデル。保有年数が延びるほど効果。",
              },
              {
                href: "/ev-charging-off-peak-tou",
                title: "EV充電の深夜電力活用とTOU料金",
                description:
                  "電気代25円/kWhをさらに下げるための時間帯設計。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="EV化とガソリン車継続、どちらが自社に合うか相談する"
            description="走行距離・保有台数・事業所の充電環境など、個別条件を踏まえたTCO試算のご相談を受け付けています。初回相談は無料です。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門スタッフに相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="社用車のEV化によるコスト判断、専門家に相談しませんか？"
            description="車両入替コストと電気代増加のトータル試算から充電インフラ設計、最適な導入スケジュールまで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
