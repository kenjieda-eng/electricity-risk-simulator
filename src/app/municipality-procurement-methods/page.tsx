import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "自治体電力調達の入札実務｜一般競争・指名競争・随意契約の使い分け";
const pageDescription =
  "自治体が電力を調達する際の入札方式（一般競争・指名競争・随意契約）の適用要件・メリット・デメリットを比較表で解説。地方自治法234条の根拠から仕様書作成・予定価格設定・落札後の手続きまで実務担当者向けにまとめます。";
const pageUrl = "https://simulator.eic-jp.org/municipality-procurement-methods";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 電力調達 入札",
    "一般競争入札 自治体",
    "指名競争入札 電力",
    "随意契約 電力 自治体",
    "地方自治法234条",
    "電力入札 仕様書",
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

const methodRows = [
  {
    method: "一般競争入札",
    legalBasis: "自治法234条1項",
    requirements: "制限なし（公告により広く参加を募る）",
    merit: "競争性が高く安値になりやすい。透明性が最も高い",
    demerit: "仕様書作成・公告・開札の手続きに時間と工数がかかる。不調リスクあり",
    suitable: "大口施設・庁舎・学校群など年間使用量が大きく事業者が集まりやすい案件",
  },
  {
    method: "指名競争入札",
    legalBasis: "自治法234条2項・施行令167条",
    requirements: "契約の性質・目的が一般競争に適しない、または少額契約など政令の定める場合",
    merit: "参加資格を絞れるため、能力不足事業者の参加を防げる",
    demerit: "指名の恣意性批判を受ける可能性。電力では一般競争が主流で指名は少ない",
    suitable: "地域限定の供給エリアなど参加者が実質的に限られる場合",
  },
  {
    method: "随意契約",
    legalBasis: "施行令167条の2第1項各号",
    requirements: "競争が不適（不落後・1者のみ等）・少額・緊急・秘密保持等の政令要件",
    merit: "迅速に契約できる。特定事業者の技術・実績を活かせる",
    demerit: "透明性が低いと批判されやすい。議会説明・内部手続きが複雑",
    suitable: "入札不調後・離島・緊急対応・年度末の暫定供給",
  },
  {
    method: "共同調達（広域連合・都道府県）",
    legalBasis: "自治法252条の2等（広域連合）",
    requirements: "複数自治体での共同発注協定が必要",
    merit: "スケールメリットで単価が下がりやすい。手続き負担を分担できる",
    demerit: "参加自治体間の調整コスト。仕様統一が難しい場合あり",
    suitable: "小規模自治体・町村・一部事務組合",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "調達量・施設リストの整理",
    desc: "前年度の電力使用実績（kWh）と対象施設リストを整備。高圧・特別高圧・低圧を区分し、エリア（電力会社の供給エリア）を確認する。",
  },
  {
    step: "STEP 2",
    title: "入札方式の決定と法的根拠の確認",
    desc: "調達規模・地域特性・過去の入札実績を踏まえ一般競争入札または共同調達を選択。指名・随意が必要な場合は法令根拠を整理する。",
  },
  {
    step: "STEP 3",
    title: "予定価格の設定",
    desc: "市況（JEPXスポット価格・燃料費調整単価）と近隣自治体の契約実績を参考に予定価格を算定。固定型・変動型の条件も決める。",
  },
  {
    step: "STEP 4",
    title: "入札仕様書・公告文の作成",
    desc: "供給条件（電力量・電圧区分・契約期間・価格形式・緊急時対応）を明記。参加資格要件（小売電気事業者登録・保証金等）も設定する。",
  },
  {
    step: "STEP 5",
    title: "公告・参加申請受付",
    desc: "自治体の入札公告ページ・自治体情報システム等で公告。参加申請書・資格確認書類を受領し適格性を審査する。",
  },
  {
    step: "STEP 6",
    title: "開札・落札者決定・契約締結",
    desc: "開札調書を作成し、予定価格以下の最低価格提示者を落札者に決定。落札通知→契約書締結→議会への契約締結報告（基準額超の場合）。",
  },
];

export default function MunicipalityProcurementMethodsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体電力調達の入札実務
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-600">一般競争・指名競争・随意契約の使い分け</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力自由化以降、自治体の電力調達は競争入札が原則となりました。しかし一口に「入札」といっても、
          一般競争・指名競争・随意契約には適用要件・メリット・デメリットがあり、状況に応じた使い分けが必要です。
          地方自治法第234条の根拠から入札仕様書の作成・予定価格設定・落札後の手続きまで、
          財政・総務・施設管理担当者が押さえるべき実務を体系的に解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 法的根拠 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">地方自治法が定める契約方式の原則</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地方自治法第234条第1項は「普通地方公共団体の締結する契約は、一般競争入札、指名競争入札、
            随意契約又はせり売りの方法によりこれをしなければならない」と規定し、
            第2項で「前項の指名競争入札、随意契約又はせり売りは、政令で定める場合に該当するときに限り、
            これによることができる」と競争入札を原則としています。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力調達においては、供給エリア・調達規模・市場環境によって最適な方式が異なります。
            近年は市場の高騰を背景に一般競争入札の不落が増加し、随意契約や共同調達への移行が進んでいます。
          </p>
        </section>

        {/* 比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">入札方式の比較表</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各方式の適用要件・メリット・デメリット・適した場面を一覧で確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">方式</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">法的根拠</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">適用要件</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">メリット</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">デメリット</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">適した場面</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.method}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.legalBasis}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.requirements}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.merit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.demerit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 実務フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一般競争入札の実務フロー（6ステップ）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自治体で最も一般的な一般競争入札を例に、調達開始から契約締結までの流れを示します。
            入札公告から開札まで通常4〜8週間を要します。契約満了の3か月前には準備を開始してください。
          </p>
          <div className="mt-4 space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex-shrink-0 border-l-4 border-indigo-400 pl-4">
                  <p className="text-xs font-bold text-indigo-600">{s.step}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 予定価格設定 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予定価格の設定：市況を反映した算定が重要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力調達における予定価格は、旧来の「前年度実績単価の微増」では市場実勢と乖離し不落の原因となります。
            以下の指標を参考に市況を反映した予定価格を設定してください。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            <li>JEPX（日本卸電力取引所）スポット価格の直近12か月平均</li>
            <li>燃料費調整単価の直近動向（上限廃止・復活の有無）</li>
            <li>容量拠出金・再エネ賦課金の単価動向</li>
            <li>近隣自治体・一部事務組合の直近落札単価（情報公開請求等で入手可能）</li>
          </ul>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">固定型 vs. 変動型（市場連動型）</p>
            <p className="mt-1 text-sm leading-6 text-amber-700">
              近年、固定単価での入札を忌避する事業者が増加し、市場連動型（スポット価格＋スプレッド）のみ応札可能という
              事業者が増えています。仕様書に市場連動型を認める条件を盛り込むことで参加事業者数が増える可能性があります。
              ただし変動型はコスト予見性が低く、予算管理の難易度が上がる点に注意が必要です。
            </p>
          </div>
        </section>

        {/* 規模別対応 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規模別：入札設計の考え方</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">推奨入札方式</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium">政令市・中核市</td>
                  <td className="border border-slate-200 px-3 py-2">施設群ごとに一般競争入札（エリア分割も可）</td>
                  <td className="border border-slate-200 px-3 py-2">特別高圧・高圧・低圧を分けて入札設計する</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium">一般市（5万人以上）</td>
                  <td className="border border-slate-200 px-3 py-2">一般競争入札。不落時は随意契約へ移行</td>
                  <td className="border border-slate-200 px-3 py-2">公告期間・仕様書の標準化で手続き負担を軽減</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2 font-medium">小規模市・町村</td>
                  <td className="border border-slate-200 px-3 py-2">都道府県・広域連合の共同調達を優先検討</td>
                  <td className="border border-slate-200 px-3 py-2">単独入札だと参加者が集まらないリスクが高い</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 入札仕様書のポイント */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">入札仕様書作成の重要ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            仕様書の設計が入札の成否を左右します。以下の項目を漏れなく記載してください。
          </p>
          <ol className="mt-3 list-decimal pl-5 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
            <li>供給施設リスト（施設名・住所・電圧区分・需要番号・年間使用量の見込み）</li>
            <li>契約期間（単年度か複数年か）と自動更新の有無</li>
            <li>価格形式（固定単価 or 変動型の許容範囲）</li>
            <li>緊急時の供給継続義務と免責条件</li>
            <li>参加資格（小売電気事業者登録・保証金・過去の供給実績）</li>
            <li>環境価値（再エネ比率・非化石証書）の要件（任意だが明記推奨）</li>
          </ol>
        </section>

        {/* 議会・住民説明 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">議会報告と契約締結の手続き</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地方自治法第96条第1項第5号により、一定金額を超える契約は議会の議決が必要です。
            各自治体の条例で基準額が定められているため、契約担当課と事前に確認してください。
            入札結果（落札者・落札金額）の公表は情報公開の観点からも推奨されます。
          </p>
        </section>

        {/* 参考事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の参考事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">中核市（人口30万人規模）：</span>
            庁舎・学校・体育館を3エリアに分割して別々に一般競争入札を実施。
            エリア分割により参加事業者が分散し、各エリアで2〜4社が競争。平均落札率85%程度を実現。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">町村組合（5町村、人口計3万人）：</span>
            単独では参加者が集まらないため広域連合として共同調達を実施。
            調達量の増加により単価が下がり、各町村の担当工数も削減できた。
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-procurement-bidding-failure",
              title: "自治体電力入札が不調になったときの対応ガイド",
              description: "入札不調後の随意契約移行・再入札・議会説明の実務手順を解説。",
            },
            {
              href: "/explaining-in-municipality",
              title: "自治体庁内で電力契約見直しを説明するとき",
              description: "財政・議会・首長への説明資料作成のポイントをまとめています。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "入札・見積比較で使える電力会社評価の観点を解説。",
            },
            {
              href: "/articles/municipality",
              title: "自治体・公共向け記事一覧",
              description: "自治体の電力調達に関する記事をカテゴリでまとめています。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="入札単価の参考値を試算する"
          description="シミュレーターで自団体の電力コスト水準を把握し、予定価格設定の参考にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="municipality-procurement-methods" />
      </div>
    </main>
  );
}
