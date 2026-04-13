import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "固定と市場連動の比較を経営層に説明するときのポイント｜判断材料の整理";
const pageDescription =
  "固定価格プランと市場連動プランの違いを経営層に説明する際のポイントを解説。両プランのリスク特性の伝え方、判断軸の整理、数値での比較方法、経営判断を支える説明材料の作り方まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "固定プラン 市場連動 比較 経営",
    "電力プラン 違い 説明 役員",
    "電気料金 固定 変動 判断",
    "市場連動 リスク 経営判断",
    "電力契約 プラン選択 説明",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/explaining-fixed-vs-market-to-management",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/explaining-fixed-vs-market-to-management",
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

const planComparison = [
  {
    item: "料金の変動性",
    fixed: "基本的に固定（燃料費調整額は変動する場合あり）",
    market: "市場価格（JEPX等）に連動して月次・日次で変動",
  },
  {
    item: "コスト予測のしやすさ",
    fixed: "予算計画が立てやすい",
    market: "変動幅が大きく予算計画が難しい",
  },
  {
    item: "価格高騰時のリスク",
    fixed: "高騰の影響を受けにくい（上限がある）",
    market: "市場価格の急騰が直接コストに影響する",
  },
  {
    item: "価格が安い時の恩恵",
    fixed: "市場価格が下がっても料金は変わらない",
    market: "市場価格が安い時は割安になりうる",
  },
  {
    item: "電気料金削減の期待",
    fixed: "市場より割高になる時期もある",
    market: "平均すれば安くなる可能性があるが不確実",
  },
  {
    item: "適したケース",
    fixed: "リスク許容度が低い・利益率が低い・予算管理が重要",
    market: "リスク許容度が高い・使用量の調整が可能・短期的な割安を優先",
  },
];

const executiveKeyPoints = [
  {
    label: "「どちらが安いか」ではなく「どちらのリスクをとるか」",
    detail:
      "市場連動プランが「必ず安い」わけでなく、固定プランが「必ず割高」でもない。経営層への説明では、「コストの予測可能性」と「価格変動リスクの許容度」を軸に選択の話をすることが重要。「どちらが得か」という損得の話ではなく、「どちらのリスクを取ることが自社の経営状況に合うか」という選択の話として進める。",
  },
  {
    label: "固定の「安心」と市場連動の「不確実性」を数値で示す",
    detail:
      "「固定プランを選択した場合の年間コスト見通し（固定値）」と「市場連動プランを選択した場合の年間コストの幅（最安値〜最大値）」を並べて示すことで、リスクの差が可視化される。シミュレーターを使って、両プランの年間コスト差と上振れリスクの差を試算して示すことが有効。",
  },
  {
    label: "自社のリスク許容度を確認する",
    detail:
      "市場連動プランのリスクを許容できるかは、業種・利益率・電気料金が事業コストに占める割合によって異なる。利益率が低い業種（食品小売・製造業など）は電気料金の上振れが収益に直接影響するため、固定プランの安定性が優先されやすい。経営層に「どの程度の上振れまで許容できるか」を明示的に確認することが判断の前提になる。",
  },
  {
    label: "市場連動プランを選ぶ場合は「上振れ上限」を示す",
    detail:
      "もし市場連動プランを検討する場合、「最悪ケースでは年間○万円の追加コストが発生しうる」という上限を示して承認を得ることが重要。「平均すれば安い」だけの説明では、高騰時に説明責任が問われる可能性がある。上振れシナリオを事前に共有しておくことで、高騰時の社内対応がスムーズになる。",
  },
];

export default function ExplainingFixedVsMarketToManagementPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/internal-explanation" className="underline-offset-2 hover:underline">社内説明・稟議の進め方</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">固定と市場連動の比較を経営層へ</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          固定と市場連動の比較を経営層に説明するときのポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しを進める際、「固定価格プランと市場連動プランのどちらを選ぶか」は重要な意思決定のひとつです。担当者レベルでは整理できても、経営層・役員への説明では、両プランの違いと自社にとってのリスクを適切に伝えることが求められます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、固定プランと市場連動プランの違いを経営層に説明する際のポイントと、判断材料の整理方法を解説します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>固定プランと市場連動プランの主な違い</li>
            <li>経営層説明で意識すべき4つのポイント</li>
            <li>リスク特性を数値で示す方法</li>
            <li>自社のリスク許容度を確認する考え方</li>
            <li>市場連動を選ぶ場合の注意点</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの主な違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まず両プランの基本的な違いを整理します。この整理が経営層説明の起点になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2">固定プラン</th>
                  <th className="border border-slate-200 px-3 py-2">市場連動プラン</th>
                </tr>
              </thead>
              <tbody>
                {planComparison.map((row) => (
                  <tr key={row.item}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.fixed}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.market}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            プランの詳細については{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランと固定プランの違い
            </Link>{" "}
            で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層説明で意識すべき4つのポイント
          </h2>
          <div className="mt-4 space-y-4">
            {executiveKeyPoints.map((item) => (
              <div key={item.label}>
                <h3 className="text-lg font-semibold text-slate-900">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            担当者が事前に整理すべき判断材料
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層に判断を委ねる前に、担当者として以下の材料を整理しておくことで説明がスムーズになります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>固定プランと市場連動プランの年間コスト試算（同一使用量で比較）</li>
            <li>市場連動の「最安値シナリオ」と「高騰シナリオ」のコスト差</li>
            <li>自社の電気料金が事業コスト（変動費）に占める割合</li>
            <li>自社の利益率と、電気料金が10〜20%上昇した場合の利益への影響額</li>
            <li>過去の市場価格の実績変動幅（参考値）</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            稟議書・比較表への反映
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定・市場連動の比較を稟議書・比較表に反映する際は、「年間コスト試算の比較」と「リスク特性の説明」を分けて記載することが重要です。単純な年間コスト比較だけでは市場連動のリスクが伝わらないため、上振れシナリオを別途記載する構成が有効です。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            稟議書の構成については{" "}
            <Link
              href="/approval-document-key-points"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電力契約見直しの稟議書に入れたい論点整理
            </Link>
            で、比較表の作り方は{" "}
            <Link
              href="/sharing-comparison-table-internally"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              比較表を社内共有するときのポイント
            </Link>
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を詳しく比較。",
            },
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するときのポイント",
              description: "コストとリスクを経営層に伝えるための構成全体。",
            },
            {
              href: "/sharing-comparison-table-internally",
              title: "比較表を社内共有するときのポイント",
              description: "固定・市場連動の比較を含む比較表の作り方。",
            },
            {
              href: "/approval-document-key-points",
              title: "電力契約見直しの稟議書に入れたい論点整理",
              description: "プラン比較を稟議書に組み込む方法。",
            },
            {
              href: "/who-should-choose-fixed-price-plan",
              title: "固定プランが向く事業者の特徴",
              description: "固定プランを選ぶべき法人の判断軸の整理。",
            },
            {
              href: "/who-should-choose-market-linked-plan",
              title: "市場連動プランが向く事業者の特徴",
              description: "市場連動を選ぶ際のリスク条件と判断基準。",
            },
          ]}
        />

        <ContentCta
          heading="両プランの料金差をシミュレーションで確認する"
          description="シミュレーターを使うことで、固定プランと市場連動プランの年間コスト差と上振れリスクの差を試算できます。経営層説明の数値根拠として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
