import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "法人の電力契約見直しで最低限確認したい5項目｜確認方法とリスクを整理";
const pageDescription =
  "法人向け電力契約を見直すときに最低限確認しておきたい5項目を整理します。契約電力・電力量料金・燃調費・契約期間・更新条件ごとに、確認方法と見落としリスクを表で解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約見直し",
    "確認項目",
    "法人電気料金",
    "燃料費調整",
    "契約期間",
    "違約金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/5-minimum-checkpoints-for-electricity-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/5-minimum-checkpoints-for-electricity-contract-review",
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

const checkpoints = [
  {
    item: "契約電力と基本料金",
    why: "基本料金は契約電力に比例して発生する固定費。実態より高い契約電力で設定されていると毎月過剰負担が続く",
    how: "請求書の「契約電力（kW）」欄と実績デマンド値を照合する",
    risk: "使用実態より過大な契約電力のまま更新し、年間数十万円単位の過払いが継続する",
  },
  {
    item: "電力量料金の単価体系",
    why: "時間帯別・季節別・段階別など、単価体系の違いが総額に大きく影響する。比較時の前提がそろわないと判断を誤る",
    how: "契約書または料金メニュー資料で単価区分と適用条件を確認する",
    risk: "単価水準だけで比較し、使用パターンに合わない体系を選んで実態コストが増える",
  },
  {
    item: "燃調費の扱いと上限",
    why: "燃料費調整額は市場連動で変動し、上限撤廃・市場連動型では総額が大きくぶれる。見積比較に含まれていないケースもある",
    how: "契約書の燃調条項と上限設定有無、直近請求書の燃調額を確認する",
    risk: "上限なし契約でエネルギー価格高騰時に予算超過、見積比較段階で気づかず切替後に総額が増える",
  },
  {
    item: "契約期間と違約金",
    why: "解約申出期限を過ぎると自動更新が確定し、見直し機会を1年以上失う。違約金が発生する契約では切替コストが増大する",
    how: "契約書の「契約期間」「解約申出期限」「違約金条項」を確認する",
    risk: "期限を見落として自動更新が確定し、比較・切替のタイミングを逸する",
  },
  {
    item: "更新条件と自動更新",
    why: "自動更新条項がある場合、通知期限を過ぎると旧条件で再契約が成立する。更新時改定条件も確認しないと比較前提がずれる",
    how: "契約書の自動更新条項と更新後の料金条件を確認する",
    risk: "自動更新で見直し機会を逃し続け、契約条件が市場実勢と乖離したまま運用が続く",
  },
];

const templateRows = [
  {
    item: "契約電力",
    unit: "kW",
    current: "",
    note: "実績デマンドと比較",
  },
  {
    item: "基本料金単価",
    unit: "円/kW",
    current: "",
    note: "季節・時間帯別かも確認",
  },
  {
    item: "電力量料金単価",
    unit: "円/kWh",
    current: "",
    note: "区分ごとに記入",
  },
  {
    item: "燃調費（直近月）",
    unit: "円/kWh",
    current: "",
    note: "上限有無も記載",
  },
  {
    item: "契約満了日",
    unit: "年月日",
    current: "",
    note: "自動更新の有無も確認",
  },
  {
    item: "解約申出期限",
    unit: "満了○ヶ月前",
    current: "",
    note: "",
  },
  {
    item: "違約金",
    unit: "円 または なし",
    current: "",
    note: "条件も記載",
  },
];

const priorityOrder = [
  {
    priority: 1,
    item: "契約期間と違約金",
    reason:
      "解約申出期限を最初に確認することで、見直し可能なタイミングを把握できる。期限超過は機会損失に直結するため最優先",
  },
  {
    priority: 2,
    item: "更新条件と自動更新",
    reason:
      "自動更新の通知期限は契約期間と連動している。期限把握と同時に確認すると見落としを防げる",
  },
  {
    priority: 3,
    item: "燃調費の扱いと上限",
    reason:
      "現在の請求額に直接影響する。上限撤廃型かどうかで比較対象の優先順位が変わる",
  },
  {
    priority: 4,
    item: "契約電力と基本料金",
    reason:
      "固定費の過不足を把握する。実績デマンドと照合すれば即座に過剰コストの有無を判断できる",
  },
  {
    priority: 5,
    item: "電力量料金の単価体系",
    reason:
      "比較見積を取る段階で必要な情報。まず上記4項目を確認してから整理すると効率的",
  },
];

export default function FiveMinimumCheckpointsForElectricityContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電力契約見直しで最低限確認したい5項目｜確認方法とリスクを整理"
        description="法人向け電力契約を見直すときに最低限確認しておきたい5項目を整理します。契約電力・電力量料金・燃調費・契約期間・更新条件ごとに、確認方法と見落としリスクを表で解説します。"
        url="https://simulator.eic-jp.org/5-minimum-checkpoints-for-electricity-contract-review"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "法人の電力契約見直しで最低限確認したい5項目" },
        ]}
      />
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
          <li className="text-slate-700">最低限確認したい5項目</li>
        </ol>
      </nav>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電力契約見直しで最低限確認したい5項目
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しでは、単価比較だけで判断すると重要な条件を見落としがちです。契約電力・電力量料金・燃調費・契約期間・更新条件の5項目を押さえることで、比較判断の前提がそろい、実行段階の手戻りを防げます。
          このページでは各項目の確認方法と、見落とした場合のリスクを表で整理します。
        </p>
      </header>

      {/* 5項目の構造化テーブル */}
      <section className="mt-6 space-y-4">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            5項目の確認内容・確認方法・リスク一覧
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の5項目は、見直し実務で最初に確認すべき基本チェックポイントです。各項目の「なぜ重要か」「確認方法」「見落とした場合のリスク」を整理しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    確認項目
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    なぜ重要か
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    確認方法
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    見落とした場合のリスク
                  </th>
                </tr>
              </thead>
              <tbody>
                {checkpoints.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-3 font-medium text-slate-900 whitespace-nowrap align-top">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.why}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.how}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.risk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 確認の優先順位 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            確認の優先順位：どの項目から見るべきか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            5項目を同時に確認することが理想ですが、優先順位をつけることで見直し着手のハードルが下がります。特に「契約期間と違約金」は、確認が遅れると選択肢が大幅に狭まるため最初に確認します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="w-16 px-3 py-2 text-center font-semibold text-slate-700">
                    優先順位
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 whitespace-nowrap">
                    確認項目
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    この順番で確認する理由
                  </th>
                </tr>
              </thead>
              <tbody>
                {priorityOrder.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-3 text-center font-bold text-sky-700 align-top">
                      {row.priority}
                    </td>
                    <td className="px-3 py-3 font-medium text-slate-900 whitespace-nowrap align-top">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 leading-6 text-slate-700 align-top">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 1枚で整理するテンプレート */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            5項目を1枚に整理するテンプレート
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下のフォーマットを参考に、現行契約の値を書き込むことで比較前提を一元管理できます。複数拠点がある場合は拠点ごとに1枚作成すると管理しやすくなります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-white">
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    確認項目
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    単位・形式
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    現行契約の値（記入欄）
                  </th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700">
                    補足メモ
                  </th>
                </tr>
              </thead>
              <tbody>
                {templateRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                  >
                    <td className="px-3 py-3 font-medium text-slate-900 whitespace-nowrap align-top">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 text-slate-600 align-top">
                      {row.unit}
                    </td>
                    <td className="px-3 py-3 text-slate-400 align-top">
                      _______________
                    </td>
                    <td className="px-3 py-3 text-slate-500 align-top">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※このテンプレートは見直し実務のたたき台として使用してください。契約書や請求書から転記することで、比較見積の取得時に必要な情報をまとめられます。
          </p>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            5項目を確認したあとのステップ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            5項目を整理すると、「どの資料がまだ不足しているか」「いつまでに動かないと機会を逃すか」が明確になります。次は必要資料の収集と社内確認を並行して進めると、見直し全体がスムーズに動きます。
          </p>
          <ul className="mt-3 space-y-1 text-sm leading-7 text-slate-700">
            <li>・契約期間・違約金が確認できたら、見直し実行のタイムラインを設定する</li>
            <li>・燃調費の扱いが確認できたら、比較見積の依頼条件に明示する</li>
            <li>・テンプレートに記入した情報を、社内共有の出発点として使う</li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="5-minimum-checkpoints-for-electricity-contract-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "市場連動プラン", "固定プラン", "電気料金の内訳"]} />
      </div>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/documents-needed-for-electricity-contract-review",
              title: "法人の電気料金見直しで集めるべき資料一覧",
              description:
                "比較前にそろえる請求書・契約書・見積書の範囲を確認できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description:
                "着手時期と確認順序を実務目線で整理できます。",
            },
            {
              href: "/switching-business-electricity-contract",
              title: "法人が電力契約を切り替えるときの注意点",
              description:
                "比較後の切替実行でつまずきやすい点を整理できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description:
                "見積比較の前提条件を項目別に確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューの比較・診断",
              description:
                "固定と市場連動の差分を、自社に近い条件で試算できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="最低限の5項目を整理したら、比較ページで候補条件を並べ、使い方ページを見ながら実務フローに沿って確認を進めます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/review-points", label: "見直しポイントの記事一覧へ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
