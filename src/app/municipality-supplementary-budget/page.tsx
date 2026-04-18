import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["municipality"];


const pageTitle = "電気代高騰と補正予算の組み方｜議会説明のポイント";
const pageDescription =
  "電気代高騰による予算不足時の補正予算・流用・予備費充当の使い分けを財政担当者向けに解説。補正予算案の積算根拠の作り方、議会委員会での説明骨子、専決処分の適用判断まで実務的にまとめます。";
const pageUrl = "https://simulator.eic-jp.org/municipality-supplementary-budget";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補正予算 電気代",
    "光熱水費 補正予算",
    "自治体 予備費 電気代",
    "流用 光熱水費",
    "議会説明 補正予算",
    "電気代高騰 自治体 対応",
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
    method: "補正予算（議会議決）",
    requirement: "議会の議決が必要（臨時議会・定例議会）",
    timing: "通常は6月・9月・12月・2月の定例議会。緊急時は臨時議会",
    suitable: "超過額が大きく（数百万円以上）、議会説明が必要な場合",
    merit: "民主的正統性が高く後の監査指摘を受けにくい",
    demerit: "議会開催まで時間がかかる。議決否決のリスク",
  },
  {
    method: "予算の流用",
    requirement: "同一款内（地方自治法220条3項）の流用は長の権限で可",
    timing: "不足が判明した時点で随時",
    suitable: "同一款内に余裕がある場合。比較的少額の不足",
    merit: "議会議決不要で迅速に対応可能",
    demerit: "款をまたぐ流用は議会議決が必要。財政規律批判を受ける場合あり",
  },
  {
    method: "予備費充当",
    requirement: "条例で定める額の範囲内。充当後に議会報告",
    timing: "不足が判明した時点。充当後の議会報告が必要",
    suitable: "緊急対応・少額の予算不足",
    merit: "迅速な対応が可能",
    demerit: "予備費の残額に制約。多用すると財政規律上問題になる",
  },
  {
    method: "専決処分",
    requirement: "地方自治法179条の要件（議会が成立しない場合等）",
    timing: "議会招集の暇がない緊急時のみ",
    suitable: "年度末の緊急対応（12月〜3月の短期間に必要な場合）",
    merit: "議会が不在でも対応可能",
    demerit: "事後の議会承認が必要。否決されると政治的責任問題に",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "予算不足額の算出",
    desc: "当初予算額から4月以降の月別執行額を差し引き、年度末までの不足見込み額を算出する。使用量予測（前年実績±気温要因）と単価予測（市況動向）を組み合わせた精度の高い試算が議会説明の説得力を高める。",
  },
  {
    step: "STEP 2",
    title: "対応手段の選択",
    desc: "不足額の規模・時期・流用可能な財源の有無に応じて補正予算・流用・予備費充当を選択。複数の手段を組み合わせることも可能。選択理由を文書化しておくことが監査対応に有効。",
  },
  {
    step: "STEP 3",
    title: "財源の確保",
    desc: "補正予算の場合は財源（財政調整基金の取り崩し・国庫補助金・前年度繰越金等）を検討する。光熱水費の増加は住民サービスと直結するため、他の事業費の削減より基金取り崩しが選ばれることが多い。",
  },
  {
    step: "STEP 4",
    title: "補正予算案の作成・内部決裁",
    desc: "施設別・月別の積算根拠を添付した補正予算案を作成。市況データ・使用量実績を資料として添付し、内部決裁ルートを確認する。財政課・企画課との事前調整が重要。",
  },
  {
    step: "STEP 5",
    title: "議会への提出・説明",
    desc: "総務委員会または予算委員会での説明資料を準備。市況の客観データ・不足額の根拠・再発防止策の3点が骨子。質問想定Q&Aを作成し担当課長・部長と共有する。",
  },
];

const explanationPoints = [
  {
    point: "外部要因の明示",
    detail:
      "電気代上昇の主因が市場環境・円安・燃料費であることを、エネルギー庁の資料やJEPXデータを引用して示す。自治体の管理ミスでないことを客観的に説明する。",
  },
  {
    point: "予算乖離額の根拠",
    detail:
      "当初予算単価と実際の調達単価の差異、使用量の変化を施設別・月別に示す。概算ではなく実績データに基づく積算であることを強調する。",
  },
  {
    point: "住民サービスへの影響",
    detail:
      "電気代を削減するために施設利用制限・閉館時間延長を行った場合はその内容を説明。削減しなかった場合は「住民サービス維持のため必要な支出」と位置付ける。",
  },
  {
    point: "財源の適切性",
    detail:
      "財政調整基金取り崩しの場合は残高と復元計画を示す。基金残高が十分であれば「緊急性があるため適切な財源充当」と説明できる。",
  },
  {
    point: "再発防止策",
    detail:
      "翌年度以降の当初予算での市況反映方法の改善、調達方法の見直し（共同調達・変動型の許容）を具体的に示す。",
  },
];

export default function MunicipalitySupplementaryBudgetPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気代高騰と補正予算の組み方｜議会説明のポイント"
        description="電気代高騰による予算不足時の補正予算・流用・予備費充当の使い分けを財政担当者向けに解説。補正予算案の積算根拠の作り方、議会委員会での説明骨子、専決処分の適用判断まで実務的にまとめます。"
        url="https://simulator.eic-jp.org/municipality-supplementary-budget"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気代高騰と補正予算の組み方" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体の電力契約</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気代と補正予算</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電気代高騰と補正予算の組み方
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-600">議会説明のポイント</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気代の予算超過が判明した際、自治体財政担当者は「補正予算・流用・予備費充当・専決処分」
          という複数の対応手段から最適なものを選択しなければなりません。
          各手段には地方自治法上の根拠と議会への説明義務があり、誤った選択は後の監査・議会審査で問題となります。
          本ページでは各手段の使い分け基準から、議会委員会での説明骨子・Q&A想定まで実務担当者向けに解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 対応手段の概観 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気代不足への4つの対応手段</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            地方自治法は会計年度独立の原則（第208条）を定める一方、年度途中の財政需要の変化に対応するための
            仕組みとして補正予算（第218条）・流用（第220条）・予備費（第217条）を設けています。
            緊急時は専決処分（第179条）も選択肢となります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">手段</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">根拠・要件</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">タイミング</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">適した場面</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">メリット</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">デメリット</th>
                </tr>
              </thead>
              <tbody>
                {methodRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.method}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.requirement}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.timing}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.suitable}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.merit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.demerit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 実務フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補正予算対応の実務フロー（5ステップ）</h2>
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

        {/* 議会説明のポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">議会での説明骨子：5つのポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補正予算の議会審査では、以下の5点を丁寧に説明することで委員からの理解を得やすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {explanationPoints.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-indigo-700">
                  {i + 1}. {item.point}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 想定Q&A */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">想定Q&A：議会委員からよくある質問</h2>
          <div className="mt-3 space-y-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Q. なぜ当初予算で適切に計上できなかったのか？
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                A. 予算編成時（前年秋）には今年度の電力市況の上昇幅を正確に予測することが困難でした。
                資源エネルギー庁の見通しや直近の市況を参考に積算しましたが、
                実際の上昇幅（〇〇円/kWh）は積算単価（〇〇円/kWh）を上回りました。
                翌年度以降はより保守的な単価設定とバッファの積み増しを行います。
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Q. 節電等でコストを削減する努力はしたのか？
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                A. 〇〇施設では空調温度設定の見直しと消灯時間の繰り上げを実施し、
                前年同期比で使用量を約〇%削減しました。さらなる削減は住民サービスの低下につながるため、
                現時点では追加削減より予算補正を選択しています。
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Q. 財政調整基金を取り崩して大丈夫か？
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                A. 基金取り崩し後の残高は〇〇億円（標準財政規模の約〇%相当）となり、
                財政健全化の目安である3〜5%を下回りません。
                来年度以降、当初予算の精度向上とコスト削減により基金残高の回復を図ります。
              </p>
            </div>
          </div>
        </section>

        {/* 規模別対応 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規模別：補正予算対応の判断基準</h2>
          <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-indigo-700">政令市・中核市：</span>
              補正予算の絶対額が数億円規模に上ることもある。定例議会ごとにモニタリング結果を提供し、
              議会の追認を得やすい体制を整えておく。複数回の補正予算も視野に入れる。
            </li>
            <li>
              <span className="font-semibold text-indigo-700">一般市：</span>
              流用と予備費充当を組み合わせることで補正予算回数を最小化できる場合がある。
              ただし財政規律を保つため、総務委員会への情報提供は早期に行う。
            </li>
            <li>
              <span className="font-semibold text-indigo-700">町村：</span>
              小規模自治体では電気代超過が財政全体に占める割合が大きい。
              首長・議長との早期相談が重要。専決処分を使う場合は事後議会での説明を丁寧に行う。
            </li>
          </ul>
        </section>

        {/* 参考事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の参考事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">一般市（人口12万人規模）：</span>
            9月補正予算で光熱水費を5,000万円増額。市況データ・使用量グラフを添付した説明資料を提出し、
            委員会で可決。翌年度以降の積算方法の改善策も同資料に盛り込み、再発防止策として評価された。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">町（人口8,000人規模）：</span>
            年度末（2月）に電気代不足が判明。3月の臨時議会招集は難しいため予備費充当で対応し、
            3月議会（定例）で報告。議員からの質問に備え想定Q&Aを事前に準備した。
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-annual-budget-impact",
              title: "年度予算と電気代高騰のバランスをどう取るか",
              description: "当初予算の積算方法から年間を通じた予算管理まで解説。",
            },
            {
              href: "/municipality-council-explanation",
              title: "議会で電気代高騰を説明するための資料作成ガイド",
              description: "議会説明資料の構成と具体的な記載例をまとめています。",
            },
            {
              href: "/explaining-in-municipality",
              title: "自治体庁内で電力契約見直しを説明するとき",
              description: "財政・議会・首長への説明資料作成のポイントをまとめています。",
            },
            {
              href: "/articles/municipality",
              title: "自治体・公共向け記事一覧",
              description: "自治体の電力調達に関する記事をカテゴリでまとめています。",
            },
            {
              href: "/emergency-budget-overrun-response",
              title: "電気代急騰による予算超過の緊急対応手順",
              description: "民間企業向けだが補正予算対応の参考になる緊急対応フローを解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電力コストの試算と補正額の根拠作りに"
          description="シミュレーターで電力コストを試算し、補正予算の積算根拠資料としてご活用ください。詳細なご相談はお問い合わせから。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
