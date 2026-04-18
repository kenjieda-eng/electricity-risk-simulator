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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["subsidies"];


const pageTitle = "自治体別 電力関連補助金の探し方｜都道府県・市区町村の独自制度";
const pageDescription =
  "都道府県・市区町村が独自に実施する電力・省エネ・再エネ関連補助金の探し方を解説。自治体補助金の特徴・検索方法・国の制度との組み合わせポイントを整理しました。2026年度版。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-local-government-list";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 補助金 電力",
    "都道府県 省エネ補助金",
    "市区町村 再エネ補助金",
    "地方 太陽光補助金 法人",
    "自治体独自 助成金",
    "補助金 検索方法",
    "2026年度 自治体補助金",
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

const localSubsidyTypes = [
  {
    type: "省エネ設備導入補助",
    overview: "高効率空調・照明・ボイラー等の更新費用を支援。国のSII補助金と類似した設備が対象になることが多い。",
    rateRange: "設備費の10〜50%程度（自治体による）",
    limitRange: "数十万〜数百万円（規模による）",
    timing: "年1〜2回（自治体ごとに異なる）",
  },
  {
    type: "太陽光発電システム導入補助",
    overview: "自家消費型太陽光の設置費用を支援。住宅向けが多いが、事業者向けを設けている自治体も増加中。",
    rateRange: "設備費の10〜30%程度",
    limitRange: "数十万〜200万円程度",
    timing: "通年・予算上限まで",
  },
  {
    type: "蓄電池・蓄電システム導入補助",
    overview: "太陽光とセットでの蓄電池導入を支援するケースが多い。単体補助は限定的な自治体もある。",
    rateRange: "設備費の10〜30%程度",
    limitRange: "数十万円程度",
    timing: "太陽光補助と連動",
  },
  {
    type: "エネルギー診断補助",
    overview: "省エネ診断の受診費用を補助。診断費用の一部または全額を負担する自治体もある。",
    rateRange: "診断費用の50〜100%",
    limitRange: "数万〜十数万円",
    timing: "随時受付が多い",
  },
  {
    type: "脱炭素・カーボンニュートラル宣言支援",
    overview: "GHG排出量算定・削減計画策定・CO₂見える化ツール導入費用を支援する自治体が増加中。",
    rateRange: "費用の1/2〜2/3程度",
    limitRange: "数十万〜数百万円",
    timing: "年1〜2回公募",
  },
];

const searchMethods = [
  {
    method: "自治体公式ウェブサイトの検索",
    detail: "都道府県・市区町村の公式サイトで「省エネ補助金」「再エネ補助金」「脱炭素」などで検索。産業振興課・環境政策課・エネルギー担当課が窓口になることが多い。",
    url: "",
  },
  {
    method: "中小企業庁 補助金ナビ",
    detail: "「ミラサポplus」では補助金・助成金の一括検索が可能。都道府県・業種・目的で絞り込めるため、自治体補助金も含めて横断検索できる。",
    url: "https://mirasapo-plus.go.jp/",
  },
  {
    method: "J-Net21 補助金・助成金検索",
    detail: "中小機構が運営するJ-Net21でも全国の補助金・助成金を検索できる。自治体ごとの一覧として確認しやすい。",
    url: "https://j-net21.smrj.go.jp/",
  },
  {
    method: "商工会議所・商工会への相談",
    detail: "地域の商工会議所・商工会は自治体補助金の情報を定期的に収集しており、申請サポートを行っているケースもある。",
    url: "",
  },
  {
    method: "エネルギー担当職員・産業担当職員への直接問い合わせ",
    detail: "ウェブに掲載されていない非公開の補助施策（試験的な補助等）が存在するケースもある。担当課へ直接電話・メールで確認するのが確実。",
    url: "",
  },
];

const simulationPatterns = [
  {
    label: "パターンA：国補助金＋自治体補助の組み合わせ（設備更新）",
    investment: "空調更新費用：2,000万円",
    national: "SII省エネ補助金：約1,000万円（1/2）",
    local: "自治体省エネ補助：100〜200万円（上乗せ可の場合）",
    net: "実質負担：約800〜900万円",
    note: "自治体補助との重複可否は申請前に確認が必須",
  },
  {
    label: "パターンB：自治体単独補助の活用（小規模事業者）",
    investment: "LED照明更新費用：200万円",
    national: "国補助金：要件未満で対象外の場合",
    local: "自治体補助：40〜80万円（20〜40%）",
    net: "実質負担：120〜160万円",
    note: "国補助の最低補助額に満たない小規模投資には自治体補助が有効",
  },
  {
    label: "パターンC：太陽光＋蓄電池（自治体補助のみ）",
    investment: "太陽光＋蓄電池：500万円",
    national: "国補助金：条件による",
    local: "自治体補助：50〜100万円程度（設備規模による）",
    net: "実質負担：400〜450万円",
    note: "自治体によっては太陽光と蓄電池をセットで補助額が増える制度あり",
  },
];

const steps = [
  { step: "STEP 1", label: "立地・操業地の自治体を特定", detail: "本社・工場・店舗それぞれの都道府県・市区町村を把握する。複数の自治体に操業している場合はすべて確認する。" },
  { step: "STEP 2", label: "各自治体の担当課を調べる", detail: "環境政策課・産業振興課・エネルギー担当課など自治体によって窓口が異なる。ウェブサイトの「事業者向け補助金」ページを優先的に確認する。" },
  { step: "STEP 3", label: "補助メニューと要件を確認", detail: "対象設備・補助率・補助上限・公募時期・対象事業者の要件を確認する。申請書類の雛形が配布されている場合は早めに入手する。" },
  { step: "STEP 4", label: "国の補助金との重複可否を確認", detail: "同一設備への重複補助が認められない場合は、費用の内訳を整理して申請する補助金を選択する。" },
  { step: "STEP 5", label: "公募期間内に申請", detail: "予算上限に達した時点で締め切られる制度が多い。公募開始日になるべく早く申請することが採択率向上につながる。" },
  { step: "STEP 6", label: "設備発注・導入・実績報告", detail: "交付決定後に発注・導入を進め、完了後に実績報告書を提出する。" },
];

const pitfalls = [
  { title: "事業所立地の自治体しか調べない", detail: "本社と工場が異なる自治体の場合、両方の自治体に補助制度がある可能性があります。すべての操業地を確認してください。" },
  { title: "予算上限を見落とす", detail: "自治体補助金は予算額が少なく、公募開始後すぐに上限に達するケースがあります。公募開始日を事前にカレンダーに入れておきましょう。" },
  { title: "国補助金との重複申請をしてしまう", detail: "重複不可の制度に両方申請すると、いずれかの補助金の返還を求められます。申請前に必ず両方の実施機関に確認してください。" },
  { title: "申請書類の様式が自治体ごとに異なる", detail: "国の補助金と自治体補助金では書類の様式・求められる情報が異なります。まとめて申請する場合は書類管理に注意が必要です。" },
];

export default function SubsidyLocalGovernmentListPage() {
  return (
    <>
      <ArticleJsonLd
        headline="自治体別 電力関連補助金の探し方｜都道府県・市区町村の独自制度"
        description="都道府県・市区町村が独自に実施する電力・省エネ・再エネ関連補助金の探し方を解説。自治体補助金の特徴・検索方法・国の制度との組み合わせポイントを整理しました。2026年度版。"
        url="https://simulator.eic-jp.org/subsidy-local-government-list"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "自治体別 電力関連補助金の探し方" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">自治体別 電力関連補助金の探し方</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-emerald-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体別 電力関連補助金の探し方
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">都道府県・市区町村の独自制度を効率的に探す</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          国の補助金（SII・環境省等）だけでなく、都道府県・市区町村が独自に設ける補助金を活用することで、
          電力コスト削減のための投資負担をさらに軽減できます。自治体補助金は規模が小さい分、
          申請の敷居が低く小規模な投資にも対応していることが多いです。本ページでは効率的な探し方と注意点を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 自治体補助金の特徴 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体補助金の特徴</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-sm font-semibold text-emerald-800">メリット</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 補助下限額が低く小規模投資でも対象になりやすい</li>
                <li>・ 申請書類が国補助金より簡略な場合が多い</li>
                <li>・ 担当窓口に直接相談できる（対面での情報収集が可能）</li>
                <li>・ 国の補助金と上乗せ適用できる場合がある</li>
                <li>・ 地域内の工事業者を使う条件で補助率が上がる制度もある</li>
              </ul>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-sm font-semibold text-amber-800">注意点</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>・ 予算額が少なく早期に締め切られることが多い</li>
                <li>・ 自治体によって制度の有無・内容が大きく異なる</li>
                <li>・ 年度ごとに制度が廃止・変更されることがある</li>
                <li>・ 国補助金との重複不可の場合が多い</li>
                <li>・ 情報がウェブに掲載されていない場合がある</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 自治体補助金の種類一覧テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体補助金の主な種類（一般的な例）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下は一般的な制度タイプの例示です。実際の補助率・上限は自治体ごとに大きく異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助の種類</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">概要</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">上限（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">公募時期</th>
                </tr>
              </thead>
              <tbody>
                {localSubsidyTypes.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{s.type}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.overview}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.rateRange}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.limitRange}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 効率的な探し方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体補助金の効率的な探し方</h2>
          <div className="mt-4 space-y-3">
            {searchMethods.map((m, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-800">{i + 1}. {m.method}</h3>
                <p className="mt-2 text-sm text-slate-700">{m.detail}</p>
                {m.url && (
                  <p className="mt-1">
                    <a href={m.url} className="text-sky-700 underline underline-offset-2 hover:text-sky-900 text-sm" target="_blank" rel="noopener noreferrer">{m.url}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 補助金活用シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">国補助金＋自治体補助金の組み合わせシミュレーション（想定例）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下はあくまで想定例です。自治体補助との重複可否や補助率は必ず各実施機関に確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">想定ケース</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">投資額</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">国補助金（概算）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">自治体補助（概算）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">実質負担（概算）</th>
                </tr>
              </thead>
              <tbody>
                {simulationPatterns.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-800">{p.label}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{p.investment}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{p.national}</td>
                    <td className="border border-slate-200 px-3 py-2 text-emerald-700 font-medium">{p.local}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{p.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 space-y-1">
            {simulationPatterns.map((p, i) => (
              <p key={i} className="text-xs text-slate-500">※ {p.note}</p>
            ))}
          </div>
        </section>

        {/* 申請の流れ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体補助金の申請フロー</h2>
          <div className="mt-4 space-y-3">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="shrink-0 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">{s.step}</span>
                <div>
                  <p className="font-semibold text-slate-800">{s.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請時の注意点・よくある失敗</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {pitfalls.map((p, i) => (
              <div key={i} className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <h3 className="text-sm font-semibold text-amber-800">⚠ {p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 情報の鮮度注記 */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-base font-semibold text-amber-800">情報の鮮度についての注記</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            本ページの情報は2026年4月時点の公開情報をもとにしています。補助金制度は年度ごとに内容・補助率・上限額が変更される場合があります。
            申請前に必ず各実施機関の最新公募要領をご確認ください。
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>・ SII（環境共創イニシアチブ）: <a href="https://sii.or.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://sii.or.jp/</a></li>
            <li>・ 資源エネルギー庁: <a href="https://www.enecho.meti.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.enecho.meti.go.jp/</a></li>
            <li>・ 環境省: <a href="https://www.env.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.env.go.jp/</a></li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "国の設備更新系補助金の詳細ガイド" },
            { href: "/subsidy-demand-side-ppa", title: "需要家主導型太陽光PPAの補助金活用", description: "再エネ調達の補助金と組み合わせ" },
            { href: "/subsidy-shift-project", title: "SHIFT事業と電力コスト戦略", description: "脱炭素経営支援と組み合わせる方法" },
            { href: "/subsidy-application-approval-document", title: "補助金申請を前提とした稟議書の書き方", description: "社内承認を取りやすくする書き方" },
            { href: "/articles/subsidies", title: "補助金・助成金カテゴリ一覧", description: "補助金関連記事をまとめて確認" },
            { href: "/municipality-procurement-methods", title: "自治体電力調達の入札実務", description: "自治体の補助金活用と電力調達を組み合わせる際の参考に。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="まず電気料金の現状コストを把握しましょう"
          description="自治体補助金の活用を検討する際も、現状の電力コスト・使用量・リスクの数値把握が出発点になります。シミュレーターで現状診断を行ってください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
