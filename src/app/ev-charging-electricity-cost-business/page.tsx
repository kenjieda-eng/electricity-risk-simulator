import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "EV充電設備の電気代｜法人向け料金計算と契約のポイント";
const pageDescription =
  "法人がEV充電設備を導入したときの電気代を、普通充電（6kW）・急速充電（50kW/150kW）別に試算。基本料金への影響、低圧/高圧の切替ライン、時間帯別単価の活用、充電タイミング最適化まで実務向けに整理します。";
const pageUrl =
  "https://simulator.eic-jp.org/ev-charging-electricity-cost-business";

// --- 充電機器別 消費電力 ---
const chargerSpecRows: {
  type: string;
  power: string;
  hour: string;
  daily: string;
  monthly: string;
}[] = [
  {
    type: "普通充電（6kW・単相200V）",
    power: "6 kW",
    hour: "6 kWh/時",
    daily: "48 kWh（8時間稼働）",
    monthly: "約1,000 kWh（22営業日）",
  },
  {
    type: "急速充電（50kW・三相200V）",
    power: "50 kW",
    hour: "50 kWh/時",
    daily: "200 kWh（4時間稼働）",
    monthly: "約4,400 kWh（22営業日）",
  },
  {
    type: "超急速充電（150kW・三相）",
    power: "150 kW",
    hour: "150 kWh/時",
    daily: "300 kWh（2時間稼働）",
    monthly: "約6,600 kWh（22営業日）",
  },
];

// --- 月額電気代試算 ---
const monthlyCostRows: {
  type: string;
  energy: string;
  kwhCost: string;
  baseImpact: string;
  total: string;
}[] = [
  {
    type: "普通充電 1基（6kW）",
    energy: "約1,000 kWh/月",
    kwhCost: "約25,000円（25円/kWh）",
    baseImpact: "低圧契約内で収まるケース多い",
    total: "約25,000〜30,000円/月",
  },
  {
    type: "普通充電 3基（18kW相当）",
    energy: "約3,000 kWh/月",
    kwhCost: "約75,000円",
    baseImpact: "契約電力見直し必要の可能性",
    total: "約80,000〜95,000円/月",
  },
  {
    type: "急速充電 1基（50kW）",
    energy: "約4,400 kWh/月",
    kwhCost: "約88,000円（20円/kWh・高圧）",
    baseImpact: "基本料金 +約85,000円/月",
    total: "約170,000〜180,000円/月",
  },
];

// --- 時間帯別単価の活用 ---
const touOptimization: { title: string; body: string }[] = [
  {
    title: "深夜電力での普通充電集中",
    body: "社用車の普通充電は、22時〜8時のオフピーク帯に集中させると、単価は10〜15円/kWhまで下がります。日中の25〜30円/kWhと比べて約半額になる計算です。業務終了後にタイマー充電することで、1台あたり月3,000〜5,000円の削減が可能です。",
  },
  {
    title: "急速充電のピークカット運用",
    body: "急速充電は基本料金へのインパクトが大きいため、デマンド値が立つ13〜16時帯を避けるのが鉄則。業務車両の走行後、翌朝までに間に合わせる運用計画にすれば、デマンドのピーク形成を回避できます。",
  },
  {
    title: "昼間の太陽光自家消費との組合せ",
    body: "屋根上太陽光を自家消費している事業所では、日中の余剰電力でEV充電することでkWh単価を実質ゼロ近くまで圧縮できます。日射条件の良い10〜14時の充電スケジューリングが効果的です。",
  },
  {
    title: "ピークシフトタイマーの設定",
    body: "多くの業務用EV充電器は充電開始時刻・終了時刻の予約機能を持ちます。契約プランの時間帯料金と電気自動車の運用パターン（次回使用時刻）をマッピングし、充電器設定として反映するのが実装ステップです。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "EV充電 電気代",
    "EV充電 法人",
    "EV充電 基本料金",
    "急速充電 電気代",
    "普通充電 電気代",
    "EV充電 契約電力",
    "EV充電 時間帯別",
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
export default function EvChargingElectricityCostBusinessPage() {
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
          { name: "EV充電設備の電気代" },
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
          <span className="text-slate-700">EV充電設備の電気代</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            EV・充電インフラ
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            EV充電設備の電気代｜法人向け料金計算と契約のポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            EV充電設備の電気代は、<strong>充電器の出力（kW）× 稼働時間 × kWh単価</strong>で概算できます。
            ただし法人利用では、従量料金に加えて <strong>基本料金（契約電力）への影響</strong>が見過ごせません。
            とくに急速充電器（50kW以上）を入れると契約区分を低圧から高圧へ切り替える必要が出てくるケースがあり、
            基本料金の構造変化が月額コストの主因になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、普通充電・急速充電・超急速充電ごとの月額コスト試算、
            既存契約で収まるかの判定ライン、時間帯別単価を活用した充電タイミング最適化までを整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 充電器の消費電力 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              充電器タイプ別の消費電力
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人向けEV充電器は、<strong>普通充電（3〜6kW）</strong>、
              <strong>急速充電（20〜50kW）</strong>、<strong>超急速充電（90〜150kW以上）</strong>の3分類が主流です。
              充電器の定格出力 × 稼働時間 で月間消費電力を概算します。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      充電器タイプ
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      定格出力
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      1時間あたり
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      1日あたり（想定）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      月間使用量
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {chargerSpecRows.map((row) => (
                    <tr
                      key={row.type}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.type}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.power}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.hour}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.daily}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold">
                        {row.monthly}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ 上記は定格フル稼働前提の最大値です。実際の稼働率は30〜60%程度で変動します。
            </p>
          </section>

          {/* 月額電気代試算 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              月額電気代の試算
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月額コストは「従量料金（kWh × 単価）+ 基本料金への追加分」の合計で見ます。
              急速充電を入れると、kWh従量よりも<strong>基本料金インパクトの方が大きくなる</strong>ことに注意が必要です。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      構成
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      月間使用量
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      従量料金
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      基本料金影響
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      月額合計
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {monthlyCostRows.map((row) => (
                    <tr
                      key={row.type}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.type}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.energy}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.kwhCost}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.baseImpact}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-rose-700">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              ※ 基本料金単価は高圧 1,700円/kW/月で試算。低圧は契約アンペア単価が異なります。
            </p>
          </section>

          {/* 低圧/高圧の切替ライン */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              低圧/高圧の切替ライン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約電力<strong>50kW未満は低圧</strong>、<strong>50kW以上は高圧</strong>（特別高圧は2,000kW以上）に区分されます。
              普通充電（6kW）を数基設置する程度なら既存の低圧契約で収まるケースが多い一方、
              急速充電（50kW）1基を入れると、既存の契約電力に50kWが上乗せされて高圧切替が必要になりやすくなります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧切替は受変電設備（キュービクル）設置と電気主任技術者の選任が必要になり、
              初期投資は300万〜1,000万円、年間の保安費用も数十万円発生します。
              この固定費を上回る使用量メリットが出るかを、3〜5年の中期視点で試算するのが実務です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              詳しい区分は
              <Link
                href="/corporate-ev-charging-basics"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                法人EV充電の基礎
              </Link>
              、既存契約への影響は
              <Link
                href="/charging-station-contract-types"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                EV充電設備の電力契約タイプ
              </Link>
              で整理しています。
            </p>
          </section>

          {/* 時間帯別単価の活用 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              時間帯別単価と充電タイミング最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EV充電コストは、時間帯別料金（TOU）や深夜電力プランとの組合せで大幅に下げられます。
              業務車両の運行時間とセットで充電スケジュールを設計します。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {touOptimization.map((t, i) => (
                <div
                  key={t.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 設計チェックリスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              EV充電設備導入時の契約設計チェックリスト
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                導入する充電器の総定格出力（kW）と、既存の契約電力（kW）の合計を算出する。
              </li>
              <li>
                50kWを超えるなら高圧契約の切替可否を電力会社と事前協議する。
              </li>
              <li>
                時間帯別料金プラン（深夜電力・季時別・TOU）の有無を確認する。
              </li>
              <li>
                デマンド値の形成時刻と充電時刻が重ならないスケジュールを設計する。
              </li>
              <li>
                屋根上太陽光・蓄電池とのセットで自家消費を最大化できないか検討する。
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
                  EV充電の電気代は「出力×時間×単価」＋基本料金インパクトで試算。急速充電は基本料金の影響が主因。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  契約電力50kW未満は低圧、50kW以上は高圧。急速充電導入は高圧切替コストと費用対効果を確認。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  時間帯別単価・深夜電力プランの活用で、充電コストを3〜5割削減できる余地あり。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  太陽光自家消費・ピークシフトタイマーを組み合わせると、さらなる最適化が可能。
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
                href: "/corporate-ev-charging-basics",
                title: "法人EV充電の基礎｜充電設備の種類と必要な電力契約",
                description:
                  "充電器の種類・契約区分・費用構造の全体像。本記事の前提知識の整理に。",
              },
              {
                href: "/charging-station-contract-types",
                title: "EV充電設備の電力契約タイプ",
                description:
                  "事業用・従業員用・一般開放の違いによる契約選択のポイント。",
              },
              {
                href: "/ev-fleet-cost-calculation",
                title: "社用車EV導入時の電力コスト試算",
                description:
                  "EV化した社用車の充電電力量と月間電気代の概算。",
              },
              {
                href: "/ev-charging-off-peak-tou",
                title: "EV充電の深夜電力活用とTOU料金",
                description:
                  "時間帯別料金を活かした充電スケジューリングの実装事例。",
              },
              {
                href: "/v2h-v2b-explained",
                title: "V2H・V2Bの仕組み｜BCP兼用のEV活用",
                description:
                  "EVを蓄電池として活用し、BCPとピークカットに併用する運用モデル。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="EV充電設備導入による電気代インパクトを数値で確認"
            description="契約区分・使用量・充電器構成を入力すると、基本料金変化を含む年間コスト影響を試算できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "導入相談（無料）" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
