import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "請求書のどこを見れば見直しのヒントが分かるのか｜7つの確認ポイントと次のアクション";
const pageDescription =
  "電力契約見直しの出発点となる請求書の読み方を解説します。契約電力・使用量・基本料金・電力量料金・燃調費・再エネ賦課金・前年同月比の7項目を表で整理し、見直しのヒントと次のアクションをまとめました。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金請求書",
    "見直しヒント",
    "法人電気料金",
    "燃料費調整",
    "再エネ賦課金",
    "契約電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/how-to-read-electricity-bills-for-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-read-electricity-bills-for-review",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const checkPoints = [
  {
    item: "契約電力",
    value: "契約電力（kW）と直近12ヶ月の実績デマンド（kW）",
    hint: "実績デマンドが契約電力を大幅に下回っている場合、契約電力の見直しで基本料金を削減できる可能性がある",
    action: "デマンドデータを入手し、契約電力との乖離を数値で確認する",
  },
  {
    item: "月間使用量",
    value: "月間電力使用量（kWh）と前年同月差",
    hint: "使用量が変化していない場合でも総額が増えていれば、単価・調整項目に原因がある。使用量増加が原因なら運用見直しが先決",
    action: "使用量増減の原因（設備変更・稼働変化・季節）を特定する",
  },
  {
    item: "基本料金",
    value: "基本料金の月次金額（円）",
    hint: "基本料金が総額の30〜40%を超えている場合、契約電力の過剰設定や料金メニューの見直し余地がある",
    action: "基本料金構成比を算出し、契約電力適正化の検討に進む",
  },
  {
    item: "電力量料金",
    value: "電力量料金の月次金額と適用単価（円/kWh）",
    hint: "同使用量でも単価が上昇していれば改定タイミングや料金メニューの構造が要因。時間帯別単価の場合は使用時間帯との一致を確認",
    action: "単価体系（定額・時間帯別・段階別）と実態稼働時間帯を照合する",
  },
  {
    item: "燃調費",
    value: "燃料費調整額の月次金額と単価（円/kWh）",
    hint: "上限撤廃型では高騰期に電力量料金を上回る月もある。上限設定の有無で比較対象の優先度が変わる",
    action: "契約書で燃調費の上限設定を確認し、比較見積の依頼条件に明示する",
  },
  {
    item: "再エネ賦課金",
    value: "再生可能エネルギー発電促進賦課金の月次金額",
    hint: "全電力会社共通単価のため比較では差が出ないが、総額増の原因把握や削減余地の判断に使う。大口では非化石証書活用で実質的な削減が可能な場合がある",
    action: "再エネ賦課金を把握したうえで削減余地は他項目（基本料金・電力量料金）に集中する",
  },
  {
    item: "前年同月比",
    value: "前年同月の総額との差額（円）と変化率（%）",
    hint: "使用量が変わらず総額が増加していれば燃調費・単価改定が主因。変化率が10%超なら具体的な原因分析を優先する",
    action: "増加原因を「使用量要因」「単価要因」「調整項目要因」の3つに分解して整理する",
  },
];

const reviewSigns = [
  {
    sign: "使用量は変わらないのに総額が増えている",
    cause: "燃調費の上昇または単価改定が主因",
    action: "燃調費の推移と契約書の上限条項を確認し、上限なし契約の場合は比較検討を開始する",
  },
  {
    sign: "実績デマンドが契約電力を大幅に下回っている",
    cause: "契約電力が過剰設定で基本料金を過払いしている",
    action: "デマンドデータを取得し、契約電力の引き下げ申請または契約変更を検討する",
  },
  {
    sign: "基本料金の構成比が総額の35%を超えている",
    cause: "契約電力過多または料金メニューが使用パターンに合っていない",
    action: "料金メニュー（時間帯別・季節別）を比較し、使用パターンとの適合性を確認する",
  },
  {
    sign: "前年同月比で総額が15%以上増加している",
    cause: "燃調費・再エネ賦課金・単価改定が複合的に影響している可能性",
    action: "各項目の前年比を個別に算出し、原因項目を特定してから対策を検討する",
  },
  {
    sign: "月によって総額のばらつきが極端に大きい",
    cause: "デマンドのピーク値で基本料金が決まる「最大デマンド制」が影響している可能性",
    action: "デマンドのピーク発生月と基本料金の関係を確認し、デマンド管理の余地を検討する",
  },
];

export default function HowToReadElectricityBillsForReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:underline">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li>
            <Link href="/articles/review-points" className="hover:underline">
              見直しポイントを知る
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li className="text-slate-700">請求書から見直しのヒントを読む</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          請求書のどこを見れば見直しのヒントが分かるのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見直し実務の入口として最も使いやすい資料は請求書です。契約電力・使用量・基本料金・電力量料金・燃調費・再エネ賦課金・前年同月比の7項目を確認することで、何を優先して見直すべきかが明確になります。このページでは各項目で「見るべき数値」「見直しのヒント」「次のアクション」を表で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 確認ポイントテーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書の確認ポイントと見直しへのつなげ方（7項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の7項目は法人向け電力請求書で標準的に記載されている項目です。各項目の確認が見直し判断にどうつながるかを整理しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    確認項目
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    見るべき数値
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    見直しのヒント
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    次のアクション
                  </th>
                </tr>
              </thead>
              <tbody>
                {checkPoints.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-3 font-medium text-slate-900 whitespace-nowrap align-top">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.value}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.hint}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※電力会社によって項目名や表記が異なる場合があります。同一概念で読み替えて確認してください。
          </p>
        </section>

        {/* 見直しサイン5パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書から見えた見直しサイン：5つのパターン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下のいずれかに当てはまる場合は、電力契約の見直しを検討するタイミングです。パターンごとに想定原因と推奨アクションを整理しました。
          </p>
          <div className="mt-4 space-y-3">
            {reviewSigns.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-sky-800">
                  パターン{i + 1}：{item.sign}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  <span className="font-medium text-slate-800">想定原因：</span>
                  {item.cause}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  <span className="font-medium text-slate-800">推奨アクション：</span>
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 複数月比較 */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書は複数月を並べて見る
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            1か月分だけでは季節要因や一時要因を見誤ります。可能であれば直近12ヶ月分を並べることで、構造的な変化が見えやすくなります。
          </p>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
            <li>・燃調費が上昇し始めた時期を特定できる</li>
            <li>・デマンドのピーク発生月と基本料金の相関が分かる</li>
            <li>・補助政策（電気・ガス価格激変緩和措置など）の影響期間を除外して評価できる</li>
            <li>・設備変更や稼働変更の前後で使用量の変化を確認できる</li>
          </ul>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            請求書確認の次に見たい資料
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書だけでは、更新条件や違約金などの契約リスクは把握できません。次のステップで契約書・覚書・見積書を確認し、請求実績との整合を取ることが必要です。資料がそろうと社内説明も進めやすくなります。
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/documents-needed-for-electricity-contract-review",
              title: "法人の電気料金見直しで集めるべき資料一覧",
              description: "請求書の次に必要な資料を整理できます。",
            },
            {
              href: "/5-minimum-checkpoints-for-electricity-contract-review",
              title: "法人の電力契約見直しで最低限確認したい5項目",
              description: "請求書確認を含む基本確認項目を整理できます。",
            },
            {
              href: "/where-to-check-in-electricity-contract",
              title: "契約書のどこに見直し時の注意点が書かれているのか",
              description:
                "請求書で見えない契約条件を確認する際に役立ちます。",
            },
            {
              href: "/how-to",
              title: "シミュレーターの使い方",
              description:
                "請求書情報を比較検討へつなげる手順を確認できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="請求書の確認項目を整理できたら、使い方ページを参照して必要情報を準備し、比較ページで契約条件との整合を確認します。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/review-points", label: "見直しポイントの記事一覧へ" },
          ]}
        />
      </div>
    </main>
  );
}
