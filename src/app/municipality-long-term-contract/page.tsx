import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "自治体の長期継続契約（債務負担行為）と電力契約の関係｜自治体向け";
const pageDescription =
  "単年度予算の制約下で複数年の電力契約を結ぶための債務負担行為の仕組みと活用上の注意点を整理します。";
const pageUrl = "https://simulator.eic-jp.org/municipality-long-term-contract";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 長期継続契約",
    "債務負担行為 電力",
    "自治体 電力 複数年契約",
    "地方自治法 電力契約",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const contractTypeRows = [
  {
    type: "単年度契約",
    basis: "地方自治法（原則）",
    approval: "不要",
    period: "1年以内",
    merit: "年度ごとに見直しが可能。柔軟性が高い",
    demerit: "毎年度入札が必要で事務負担大。安定調達が難しい",
  },
  {
    type: "長期継続契約",
    basis: "地方自治法234条の3・各自治体条例",
    approval: "不要（条例根拠のみで可）",
    period: "条例で定める年数（多くは3年以内）",
    merit: "入札手続きの簡略化。複数年にわたる安定調達",
    demerit: "条例整備が必要。市場が急落しても単価変更しにくい",
  },
  {
    type: "債務負担行為",
    basis: "地方自治法214条",
    approval: "議会の議決が必要",
    period: "年数の上限なし（議決内容に依存）",
    merit: "長期・大規模案件に対応できる。予算の透明性が高い",
    demerit: "議会審議・議決が必要で手続きに時間がかかる",
  },
];

const periodRows = [
  {
    period: "2年",
    scene: "市場価格の変動リスクが高い時期、初めて長期契約を導入する自治体",
    merit: "リスクが限定的。中途変更がしやすい",
    note: "メリットは小さいが失敗リスクも低い",
  },
  {
    period: "3年",
    scene: "電力調達の安定化を優先したい。多くの自治体条例で認められている標準的な期間",
    merit: "単価交渉力が最も高まりやすい。事業者も応じやすい",
    note: "条例の定めを確認。最も普及している期間",
  },
  {
    period: "5年",
    scene: "大規模・特別高圧施設。PPA・再エネ調達を組み合わせる場合",
    merit: "長期固定で予算見通しを安定化できる",
    note: "市場変動リスクが大きくなるため価格改定条項を必ず設ける",
  },
];

const cautions = [
  {
    title: "市場環境の急変リスク",
    desc: "固定単価で長期契約した後に市場価格が大幅に下落した場合、単価改定ができず割高になるリスクがあります。価格改定条項（トリガー条件）を契約書に明記することで一定の対応が可能です。",
  },
  {
    title: "中途解約条項の確認",
    desc: "施設の廃止・統廃合・用途変更が発生した場合に備え、中途解約できる条件と違約金の有無を事前に確認・交渉してください。自治体側の都合による解約は損害賠償請求を受ける可能性があります。",
  },
  {
    title: "価格改定条件の設計",
    desc: "燃料費調整単価の上限撤廃・再エネ賦課金の変動など、固定単価に影響する外部変動要素について契約書に価格改定のルール（変動幅・協議の開始条件等）を盛り込むことが重要です。",
  },
  {
    title: "条例整備の確認",
    desc: "長期継続契約を締結するには各自治体の「長期継続契約条例」が必要です。条例がない場合は整備から着手する必要があります。近隣自治体の条例を参考に法制担当と協議してください。",
  },
];

export default function MunicipalityLongTermContractPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体・公共向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">長期継続契約と債務負担行為</span>
      </nav>

      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体の長期継続契約（債務負担行為）と電力契約の関係
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          地方自治法の単年度予算主義のもとでは、電力契約も原則として1年ごとの更新が求められます。
          しかし毎年度の入札は事務負担が大きく、入札不調リスクや調達コストの上昇につながることもあります。
          長期継続契約と債務負担行為の仕組みを正しく理解し、安定的かつコスト効率の高い電力調達を実現するための実務ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 単年度主義と長期契約の必要性 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単年度予算主義と電力契約の課題</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地方自治法第208条は「普通地方公共団体の会計年度は、毎年4月1日に始まり、翌年3月31日に終わる」と規定しており、
            自治体の支出は原則として当該年度内に完結する必要があります。これを「単年度予算主義」と呼びます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力調達においては、この単年度主義が以下の問題を引き起こしています。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            <li>毎年度の入札手続きに財政・総務・施設管理担当者の工数が集中する</li>
            <li>電力会社の観点からも「1年しか保証されない」ため価格を高めに設定しがちになる</li>
            <li>入札不調が発生した場合の4月1日以降の供給確保が困難になる</li>
            <li>長期的な省エネ投資やPPA導入との連携が図りにくい</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            これらの課題を解決する手段として、地方自治法は「長期継続契約」と「債務負担行為」という2つの仕組みを用意しています。
          </p>
        </section>

        {/* 3つの契約形態の比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単年度契約・長期継続契約・債務負担行為の比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約で活用できる3つの契約形態を比較します。自団体の条例整備状況と議会対応の容易さに応じて選択してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約形態</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">法的根拠</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">議会議決</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">期間</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">メリット</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">デメリット</th>
                </tr>
              </thead>
              <tbody>
                {contractTypeRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.type}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.basis}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.approval}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.period}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.merit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.demerit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 長期継続契約の法的根拠 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">長期継続契約の法的根拠と条例の要件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地方自治法第234条の3は「普通地方公共団体は、翌年度以降にわたり、電気、ガス若しくは水の供給若しくは電気通信役務の提供を受ける契約又は不動産を借りる契約その他政令で定める契約を締結することができる」と規定しています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力はこの条文が明示する「電気の供給を受ける契約」に該当するため、
            条例を整備することで議会議決なしに複数年契約を締結できます。
            多くの自治体では「長期継続契約に関する条例」において対象契約の種類と最長期間を定めています。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">条例整備前に確認すべき事項</p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm leading-6 text-amber-700">
              <li>自団体に「長期継続契約条例」が既に存在するか確認する</li>
              <li>条例がある場合、電力（電気の供給）が対象として列挙されているか確認する</li>
              <li>条例で定められた最長期間を超える契約は締結できない</li>
              <li>条例がない場合は法制担当・議会と連携して条例制定から着手する</li>
            </ul>
          </div>
        </section>

        {/* 期間設定の考え方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約期間の設定：2年・3年・5年の使い分け</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期継続契約の期間をどう設定するかは、調達安定性とコストリスクのバランスによって異なります。
            以下の表を参考に自団体の状況に合った期間を選択してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">期間</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">適した場面</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">主なメリット</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">備考</th>
                </tr>
              </thead>
              <tbody>
                {periodRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.period}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.scene}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.merit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">長期継続契約の4つの注意点</h2>
          <div className="mt-4 space-y-4">
            {cautions.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{i + 1}. {item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 他自治体の導入事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の導入事例と傾向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力価格が高止まりする中、長期継続契約を導入する自治体は増加傾向にあります。
            以下に代表的な導入パターンをまとめました。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">政令市・中核市の多くが3年契約を標準化：</span>
              大規模自治体では特別高圧・高圧施設を対象に3年の長期継続契約を締結する事例が増加。
              単価を固定しつつ、燃料費調整単価のみ変動させる「ハイブリッド型」を採用するケースも見られます。
            </li>
            <li>
              <span className="font-semibold">中小規模自治体は都道府県の共同調達と組み合わせ：</span>
              単独では参加者が集まりにくい中小規模市町村では、都道府県が主導する長期一括調達に参加することで
              スケールメリットと安定調達を同時に実現している事例があります。
            </li>
            <li>
              <span className="font-semibold">PPA（電力購入契約）との組み合わせ：</span>
              脱炭素目標を持つ自治体では、再生可能エネルギーのPPAを20年契約で締結するケースも登場しています。
              この場合は長期継続契約ではなく債務負担行為を設定することが一般的です。
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-800">傾向まとめ</p>
            <p className="mt-1 text-sm leading-6 text-sky-700">
              電力市場の不安定さが続く現状では、単年度契約を維持する自治体は少数派になりつつあります。
              条例整備と入札仕様書の整備を組み合わせ、安定調達と価格リスク管理の両立を目指す動きが主流になっています。
            </p>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：長期継続契約を導入する際のチェックリスト</h2>
          <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自団体の「長期継続契約条例」の整備状況と対象範囲を確認する</li>
            <li>電力が条例の対象契約として明記されているか確認する</li>
            <li>契約期間（2年・3年・5年）を調達安定性とコストリスクから判断する</li>
            <li>固定単価か変動型か、または燃調のみ変動させるハイブリッド型かを決める</li>
            <li>価格改定条項・中途解約条項を契約書に盛り込む</li>
            <li>大規模案件や特別高圧施設については債務負担行為も検討する</li>
          </ol>
        </section>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-procurement-methods",
              title: "自治体電力調達の入札実務",
              description: "一般競争・指名競争・随意契約の使い分けと入札仕様書作成のポイントを解説。",
            },
            {
              href: "/municipality-procurement-bidding-failure",
              title: "自治体電力入札が不調になったときの対応ガイド",
              description: "入札不調後の随意契約移行・再入札・議会説明の実務手順を解説。",
            },
            {
              href: "/municipality-annual-budget-impact",
              title: "電気料金高騰が自治体予算に与える影響",
              description: "電力コスト上昇が自治体財政・補正予算・事業縮小に与える影響を整理。",
            },
            {
              href: "/municipality-bundled-procurement",
              title: "公共施設の電力一括調達（バンドリング）の進め方",
              description: "複数施設の電力契約を一括調達するバンドリング手法のメリットと進め方。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="自団体の電力コストを試算する"
          description="シミュレーターで現在の電力調達コストを把握し、長期契約導入の判断材料にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/articles/municipality", label: "自治体向け記事一覧を見る" },
          ]}
        />
      </div>
    </main>
  );
}
