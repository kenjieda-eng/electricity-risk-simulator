import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle = "電力の入札・相見積の進め方｜自治体・公共機関向けの実務ガイド";
const pageDescription =
  "自治体・公共機関が電力を調達する際の入札・相見積の進め方を実務視点で解説。一般競争入札と指名競争入札・随意契約の使い分け、仕様書の作成、予定価格の設定、入札不調時の対応まで整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-bidding-guide-municipality";

// 契約方式の比較
const methodRows = [
  {
    method: "一般競争入札",
    target: "予定価格が一定額以上の契約（地方自治法上の原則）",
    merit: "価格競争が働きやすく、透明性・説明責任が確保される",
    demerit: "参加資格審査・公告期間が長く、不調リスクが比較的高い",
  },
  {
    method: "指名競争入札",
    target: "一定の技術・実績を求める場合や、一般競争になじまない契約",
    merit: "入札参加者を事前にスクリーニングでき、品質の担保に使える",
    demerit: "指名理由の明確化が必要で、談合防止の観点から件数に制限がある",
  },
  {
    method: "随意契約",
    target: "少額契約、入札不調後の再発注、緊急性の高い契約など",
    merit: "手続きが短く、相手方と条件交渉しやすい",
    demerit: "対象範囲が条例・規則で限定され、議会・監査での説明が必要",
  },
];

// スケジュール例
const scheduleRows = [
  { step: "仕様書・予定価格の内部決裁", days: "契約開始の90日前" },
  { step: "入札公告・指名通知", days: "契約開始の60日前（公告期間は最低10日）" },
  { step: "質疑応答・現地説明（任意）", days: "公告後2週間以内" },
  { step: "入札書の提出・開札", days: "契約開始の35日前" },
  { step: "落札決定・契約書締結", days: "契約開始の20日前" },
  { step: "需要地点登録・切替開始", days: "契約開始の5日前" },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 入札 自治体",
    "電力調達 相見積",
    "一般競争入札 電力",
    "指名競争入札",
    "随意契約 電気",
    "電力入札 仕様書",
    "予定価格 電力",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/municipality", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/municipality"],
  },
};

export default function ElectricityBiddingGuideMunicipalityPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "自治体・公共向け", url: "https://simulator.eic-jp.org/articles/municipality" },
          { name: "電力の入札・相見積の進め方" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくず */}
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体・公共向け</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電力の入札・相見積の進め方</span>
        </nav>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電力の入札・相見積の進め方｜自治体・公共機関向け
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            自治体・公共機関が電力を調達するときは、地方自治法と自治体の契約規則に沿って「一般競争入札」「指名競争入札」「随意契約」のいずれかを選択します。本記事では、契約方式の使い分けから仕様書作成、予定価格の設定、入札不調時の対応まで、担当者が実務で迷いやすいポイントを順に整理します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            入札の基本手続きに加え、近年増えている電力入札不調への具体的対応は
            <Link href="/municipality-procurement-bidding-failure" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              自治体電力入札が不調になったときの対応ガイド
            </Link>
            も合わせて参照してください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* H2: 契約方式の使い分け */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約方式の使い分け（一般・指名・随契）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              地方自治法第234条は、自治体の契約は原則として一般競争入札によることを定めています。指名競争入札と随意契約は例外的な位置づけで、条例・規則で定めた要件に該当する場合にのみ選択できます。電力調達は予定価格が高額になりやすく、基本的には一般競争入札の対象です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">方式</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">対象</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">メリット</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">注意点</th>
                  </tr>
                </thead>
                <tbody>
                  {methodRows.map((row) => (
                    <tr key={row.method} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.method}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.target}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.merit}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.demerit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 各自治体の財務規則によって金額基準や要件が異なります。事前に契約検査担当・監査部門へ確認してください。
            </p>
          </section>

          {/* H2: 仕様書の作成ポイント */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">仕様書の作成ポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              仕様書は入札参加者が価格を見積もる根拠となる最重要書類です。記載が曖昧だと応札者ごとに前提が異なってしまい、比較可能な入札になりません。電力調達の仕様書では、少なくとも次の項目を明記します。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">供給施設・契約電力：</span>対象となる施設の供給地点特定番号、契約電力（kW）、契約種別（高圧・特別高圧・低圧）を施設ごとに一覧化する</li>
              <li><span className="font-medium text-slate-900">予定使用電力量：</span>過去2〜3年度の月別使用量（kWh）を添付し、応札者が見積精度を高められるようにする</li>
              <li><span className="font-medium text-slate-900">契約期間：</span>単年度契約か複数年契約か、年度区切りのタイミング、解除条件を明記</li>
              <li><span className="font-medium text-slate-900">品質条件：</span>電気事業法に基づく供給品質、停電時対応、緊急連絡先の設置など</li>
              <li><span className="font-medium text-slate-900">料金体系：</span>基本料金・電力量料金の単価提案方法（年度固定か従量制か）、燃料費調整額・再エネ賦課金の扱い</li>
              <li><span className="font-medium text-slate-900">計量・請求方法：</span>検針方法、請求書の様式、支払サイトの指定</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特に高圧以上の契約では、燃料費調整額の上限の有無や、契約電力の超過時のペナルティ条件を具体的に指定しないと、応札各社で条件がばらつき落札後のトラブルになります。
            </p>
          </section>

          {/* H2: 予定価格の設定方法 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">予定価格の設定方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              予定価格は、入札の上限を画す最重要指標です。自治体の契約事務規則では「取引の実例価格、需給状況、履行難易度等を考慮して適正に定める」とされており、電力調達の場合は以下の複合的な視点で設定します。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>前年度の実績単価（直近12ヶ月の平均）を基準に置く</li>
              <li>現在の先物・スポット価格と、燃料費調整額の見通しを加味する</li>
              <li>一般送配電事業者の託送料金改定や再エネ賦課金の上昇分を反映する</li>
              <li>複数業者からの参考見積（市場調査）を取得し、著しい乖離がないか確認する</li>
              <li>予備費として5〜10%の余裕を見込む（近年は燃料費の変動幅が大きいため）</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              予定価格を過度に低く設定すると応札者が集まらず入札不調となります。逆に高すぎると落札金額が膨らみ議会・監査で説明を求められます。実績と市場水準の両方を参照して整合性を取るのがポイントです。
            </p>
          </section>

          {/* H2: 入札公告から開札までのスケジュール */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">入札公告から開札までのスケジュール</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力契約は切替に伴う需要地点登録（託送開始の20日前までが目安）があり、逆算して余裕を持ったスケジュールを組む必要があります。最低でも契約開始の3ヶ月前から準備を開始するのが実務上の目安です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">ステップ</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">目安時期</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleRows.map((row) => (
                    <tr key={row.step} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.step}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.days}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 自治体の契約事務規則、電力切替の託送手続き期間により前後します。
            </p>
          </section>

          {/* H2: 最低制限価格・失格基準価格 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">最低制限価格・失格基準価格の設定</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ダンピング応札を防ぐため、予定価格に加えて「最低制限価格」または「失格基準価格」（低入札価格調査制度）を併用する自治体が増えています。電力調達の文脈では、相場を大きく下回る応札が、落札後の撤退・契約不履行につながるリスクがあるためです。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">最低制限価格：</span>予定価格の70〜90%の範囲で設定し、これを下回る応札は自動的に失格にする方式</li>
              <li><span className="font-medium text-slate-900">失格基準価格（低入調）：</span>基準を下回る応札があった場合、調査のうえ履行可能性を判断する方式。単純失格ではない</li>
              <li>市場連動型の電力では「予定価格比較が難しい（連動式の評価が必要）」ため、評価式を仕様書に明記する</li>
            </ul>
          </section>

          {/* H2: 入札不調時の対応 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">入札不調時の対応（再入札・随意契約）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2022年以降、電力入札不調（応札ゼロ・全社予定価格超過）は全国の自治体で急増しています。不調となった場合は、期限切れで最終保障供給に切り替わるリスクがあるため、以下の手順で速やかに次の一手を打ちます。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>予定価格の見直し（相場上昇を織り込んだ再設定）または仕様の見直し（期間短縮・条件緩和）を行い、再度入札公告を出す</li>
              <li>時間的制約が強い場合は、地方自治法施行令第167条の2第1項第8号（不落随契）に基づき、入札参加者と随意契約の交渉に入る</li>
              <li>どの事業者からも応札が期待できない場合は、一般送配電事業者の最終保障供給へ移行する判断を準備する（高圧・特別高圧のみ）</li>
              <li>議会・監査には、入札の経過と随契・最終保障の判断根拠を時系列で説明できる資料を整える</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不落随契の相手方選定は、入札参加者の中から最も低い応札者と交渉するのが一般的です。予定価格を上方修正したうえで随契する場合は、価格決定の合理性を監査で問われるため、相場データ・他自治体事例の記録を残しておきます。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ：自治体電力調達を進める上での要点</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>契約方式は地方自治法の原則（一般競争）を起点に、財務規則の要件を満たす範囲で選択する</li>
              <li>仕様書は施設一覧・使用量実績・契約条件を過不足なく整理し、応札比較の土台を作る</li>
              <li>予定価格は実績と市場動向の双方を参照し、極端に乖離しない水準に置く</li>
              <li>入札開始は契約開始の3ヶ月前を目安に、切替手続き期間を逆算する</li>
              <li>入札不調リスクを前提に、再入札・不落随契・最終保障供給までの選択肢を事前に整理しておく</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/municipality-procurement-bidding-failure",
                title: "自治体電力入札が不調になったときの対応ガイド",
                description: "入札不調が発生したときに自治体が取るべき選択肢と実務フローを整理。",
              },
              {
                href: "/municipality-procurement-methods",
                title: "自治体電力調達の入札実務（一般・指名・随契）",
                description: "契約方式ごとの使い分け判断軸を深掘りで解説。",
              },
              {
                href: "/municipality-bundled-procurement",
                title: "公共施設の電力一括調達（バンドリング）の進め方",
                description: "複数施設を一括入札にまとめる手法のメリットと手順。",
              },
              {
                href: "/municipality-long-term-contract",
                title: "自治体の長期継続契約と電力契約の関係",
                description: "複数年契約と債務負担行為の仕組みを整理。",
              },
              {
                href: "/municipality-last-resort-supply",
                title: "自治体と最終保障供給",
                description: "入札不調・撤退後に備える最終保障供給の仕組み。",
              },
            ]}
          />

          <ContentCta
            heading="契約方式と予定価格の妥当性を確認する"
            description="過去の使用量と市場相場をもとに、入札前に試算比較しておくと予定価格の根拠資料になります。自治体の調達担当者からの相談は、エネルギー情報センターでも個別に受け付けています。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              { href: "/contact", label: "自治体担当窓口へ相談する" },
            ]}
          />
        </section>
      </main>
    </>
  );
}
