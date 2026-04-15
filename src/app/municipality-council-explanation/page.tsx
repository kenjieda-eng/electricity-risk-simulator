import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "議会で電気代高騰を説明するための資料作成ガイド";
const pageDescription =
  "自治体議会で電気代高騰を説明するための資料構成・記載例・想定Q&Aを財政・総務担当者向けに解説。補正予算説明・決算審査・予算審査それぞれの場面で使える説明資料のフレームワークと図表の作り方をまとめます。";
const pageUrl = "https://simulator.eic-jp.org/municipality-council-explanation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "議会 電気代 説明",
    "補正予算 説明資料",
    "自治体 議会 光熱水費",
    "電気代高騰 議会対応",
    "決算審査 電気代",
    "自治体 電力コスト 説明",
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

const documentScenes = [
  {
    scene: "補正予算の提案説明",
    audience: "総務委員会・予算特別委員会",
    purpose: "電気代不足の理由と補正額の妥当性を説明",
    keyPoints: ["不足額の積算根拠", "市況の客観データ", "財源確保の方法", "再発防止策"],
    format: "A4横・4〜6ページ程度の説明資料＋別添資料（グラフ）",
  },
  {
    scene: "決算審査での質疑応答",
    audience: "決算審査特別委員会",
    purpose: "光熱水費の予算対比執行状況を説明",
    keyPoints: ["予算現額・執行額・差額の一覧", "主な増減理由", "施設別の内訳", "他自治体との比較"],
    format: "決算書の付属資料として施設別集計表を添付",
  },
  {
    scene: "次年度当初予算の説明",
    audience: "予算審査特別委員会",
    purpose: "光熱水費の積算根拠と今後のコスト見通しを説明",
    keyPoints: ["積算単価の前提と根拠", "使用量見込みの算出方法", "省エネ・調達見直しの効果", "リスクシナリオ"],
    format: "事業シートに積算根拠を詳細記載。グラフを別添",
  },
  {
    scene: "一般質問への答弁",
    audience: "本会議",
    purpose: "電力調達・コスト管理に関する議員質問への回答",
    keyPoints: ["簡潔な事実関係", "比較データ", "今後の対応方針", "住民サービスへの影響"],
    format: "答弁原稿（口頭）＋必要に応じて資料配布",
  },
];

const steps = [
  {
    step: "STEP 1",
    title: "説明の「目的」と「聴衆」を明確にする",
    desc: "補正予算の承認を得るのか、決算審査で事実を説明するのかによって資料の構成が変わる。委員会の種類・議員の関心事項（節電・コスト削減・他市比較等）を事前に把握しておく。",
  },
  {
    step: "STEP 2",
    title: "数値データの収集と整理",
    desc: "施設別の電気代実績（月別・年度別）、予算現額、単価推移、使用量推移を収集。複数年にわたる推移グラフを作成することで「構造的な問題」であることが視覚的に伝わる。",
  },
  {
    step: "STEP 3",
    title: "市況データの引用",
    desc: "資源エネルギー庁の電力市場動向レポート、JEPXスポット価格、燃料費調整単価の推移など公的データを引用する。自治体独自の主観判断でなく客観的事実であることを示す。",
  },
  {
    step: "STEP 4",
    title: "説明資料の構成を設計する",
    desc: "「①結論（補正額〇〇万円）→②理由（市況上昇・使用量）→③根拠データ（グラフ・表）→④再発防止策」の順で構成する。「何を・なぜ・いくら」が一目でわかる構成が委員会での質疑を減らす。",
  },
  {
    step: "STEP 5",
    title: "想定Q&Aの作成と内部共有",
    desc: "委員からの予想質問と回答を5〜10問程度作成し、担当課長・部長と共有する。「なぜ当初予算で対応できなかったのか」「他市との比較はどうか」「節電努力はしたのか」が定番質問。",
  },
  {
    step: "STEP 6",
    title: "首長・副首長へのレク",
    desc: "補正予算提案の前日までに首長・副首長への事前説明を実施。議会での答弁は首長が行う場合もあるため、数値・文脈を正確に共有しておく。",
  },
];

const documentStructure = [
  { section: "表紙・概要", content: "補正理由・金額・対象施設を1枚で要約。最初のページで結論を示す" },
  { section: "1. 電気代高騰の背景", content: "市況推移グラフ（JEPXスポット価格・燃料費調整単価）を掲載。外部要因であることを示す" },
  { section: "2. 予算対比の執行状況", content: "施設別の予算現額・執行額・残額の一覧表。不足額の内訳を明示" },
  { section: "3. 積算の根拠", content: "残月数×推定使用量×推定単価の計算式と前提を記載。表形式で施設別に示す" },
  { section: "4. 財源の確保", content: "財政調整基金取り崩し・流用・予備費充当のいずれかと金額を記載" },
  { section: "5. 再発防止策", content: "翌年度当初予算の積算方法改善・調達見直し計画を箇条書きで示す" },
];

export default function MunicipalityCouncilExplanationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体の電力契約</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">議会での説明資料</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          議会で電気代高騰を説明するための資料作成ガイド
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          補正予算の提案説明・決算審査・予算審査・一般質問と、議会で電気代高騰について説明する場面は多岐にわたります。
          場面ごとに「何を・誰に・どう説明するか」が異なり、不適切な資料構成は委員会での追及につながります。
          本ページでは各場面での説明資料の構成・記載例・想定Q&A、図表の作り方まで財政・総務担当者向けに解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 説明場面の整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気代高騰について議会で説明する場面</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            議会での電気代説明は、場面によって目的・聴衆・求められる内容が異なります。
            まず自分が対応する場面を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">場面</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">対象委員会等</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">目的</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">説明の核心ポイント</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">資料形式</th>
                </tr>
              </thead>
              <tbody>
                {documentScenes.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.scene}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.audience}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.purpose}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      <ul className="list-disc pl-3">
                        {row.keyPoints.map((kp, j) => (
                          <li key={j}>{kp}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 実務フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">説明資料作成の実務フロー（6ステップ）</h2>
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

        {/* 説明資料の構成 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補正予算説明資料の標準構成（6セクション）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の構成を基本フレームとして、各自治体の実情に合わせてカスタマイズしてください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">セクション</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">記載内容</th>
                </tr>
              </thead>
              <tbody>
                {documentStructure.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700 whitespace-nowrap">{row.section}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 図表の作り方 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">説得力を高める図表の作り方</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">電力単価の推移グラフ</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                2020年度以降の月別単価推移を折れ線グラフで表示。当初予算単価ラインを点線で示すと、
                乖離が視覚的に明確になる。JEPXスポット価格との連動性を示すと説得力が増す。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">施設別執行状況の棒グラフ</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                施設ごとの予算現額と執行見込みを積み上げ棒グラフで表示。超過見込み施設を色分けすると
                委員が視覚的に把握しやすい。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">使用量vs.単価の散布図または2軸グラフ</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                コスト上昇が「使用量の増加」と「単価上昇」のどちらによるものかを分解して示す。
                使用量は横ばいでも単価上昇でコストが増えていることが伝わる。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-semibold text-slate-900">他自治体比較表</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                近隣・同規模自治体の光熱水費の対予算比や単価水準と比較する表を添付。
                自団体のコスト管理が妥当であることを示す材料になる。
              </p>
            </div>
          </div>
        </section>

        {/* 規模別留意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">規模別：議会対応の留意点</h2>
          <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-indigo-700">政令市・中核市：</span>
              議員数が多く、財政・環境・施設管理それぞれの委員会でまたがって審査される。
              委員会ごとに質問傾向が異なるため、同じデータでも切り口を変えた資料を準備する。
            </li>
            <li>
              <span className="font-semibold text-indigo-700">一般市：</span>
              総務委員会での説明が中心。議員の電力市場に関する知識にばらつきがあるため、
              専門用語を避けた平易な説明と、JEPXなど専門データの補足説明資料の両方を用意する。
            </li>
            <li>
              <span className="font-semibold text-indigo-700">町村：</span>
              議会の規模が小さく、全員協議会での説明となる場合も多い。首長との連携が特に重要。
              議員との距離が近いため、日常的な情報提供（電気代の動向報告等）が有効。
            </li>
          </ul>
        </section>

        {/* 議会・住民への説明ポイント */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">資料作成での注意点：やりがちなミス</h2>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold">根拠なき単価設定：</span>
              「前年比〇%増」と書くだけで根拠のない場合、委員から「なぜその数字か」と追及される。
              必ずJEPXや<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整</Link>単価などの公的データを根拠として示す。
            </li>
            <li>
              <span className="font-semibold">施設別内訳の省略：</span>
              総額のみ記載して内訳を省略すると「どの施設が問題か」の質問が来る。
              主要施設（庁舎・学校・体育館等）は必ず個別に記載する。
            </li>
            <li>
              <span className="font-semibold">再発防止策の抽象化：</span>
              「市況を適切に反映します」だけでは再発防止策として不十分。
              「〇年度から市況連動型積算方式を採用し、バッファを〇%積み増す」と具体的に記載する。
            </li>
          </ul>
        </section>

        {/* 参考事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他自治体の参考事例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">中核市（人口25万人規模）：</span>
            補正予算説明資料に「JEPXスポット価格の過去5年推移グラフ」と「燃料費調整単価の月別推移表」を添付。
            委員から「電力市場のことがよくわかった」と評価され、補正予算は全会一致で可決。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <span className="font-semibold">一般市（人口6万人規模）：</span>
            決算審査で光熱水費の大幅超過を問われ、施設別執行状況一覧・単価推移グラフ・近隣市比較表の
            3点セットで回答。「丁寧な資料で理解できた」との評価を委員長から受けた。
          </p>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-supplementary-budget",
              title: "電気代高騰と補正予算の組み方｜議会説明のポイント",
              description: "補正予算の手段選択から積算根拠の作り方まで解説。",
            },
            {
              href: "/municipality-annual-budget-impact",
              title: "年度予算と電気代高騰のバランスをどう取るか",
              description: "当初予算の積算方法から年間を通じた予算管理まで解説。",
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
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "議会への報告構成の参考にもなる電力リスク報告の論点整理。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="議会説明のデータ準備に"
          description="シミュレーターで電力コストを試算し、補正予算説明資料のデータとしてご活用ください。詳細なご相談はお気軽にどうぞ。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/contact", label: "専門家に相談する" },
          ]}
        />
      </div>
    </main>
  );
}
