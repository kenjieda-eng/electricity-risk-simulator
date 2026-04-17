import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "自治体向け電力関連補助金・交付金の活用事例｜公共施設の省エネ支援";
const pageDescription =
  "自治体が活用できる電力・省エネ関連の国庫補助金・交付金について、制度の種類と活用事例を整理します。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-municipality-energy-examples";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自治体 補助金 電力",
    "公共施設 省エネ 補助金",
    "脱炭素先行地域 交付金",
    "自治体 再エネ 補助金",
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

const mainSubsidies = [
  {
    name: "脱炭素先行地域づくり交付金",
    operator: "環境省",
    target: "市区町村（都道府県も連携可）",
    rate: "1/2〜2/3（事業費）",
    limit: "数億〜十数億円（地域・計画規模による）",
    outline: "2050年カーボンニュートラルに向けた先行的な脱炭素モデルを形成する地域に対して交付。再エネ・省エネ・EV等を組み合わせた総合的な計画が必要。",
    requirement: "「地域脱炭素実行計画」の策定、民間との連携、計画の実現可能性の審査あり。",
  },
  {
    name: "地域脱炭素移行・再エネ推進交付金",
    operator: "環境省",
    target: "市区町村",
    rate: "1/2〜2/3（補助対象経費）",
    limit: "数千万〜数億円（事業規模による）",
    outline: "脱炭素先行地域以外の市区町村も対象。公共施設の再エネ・省エネ設備導入、地域マイクログリッドの構築等の支援。",
    requirement: "地域の脱炭素化に向けた計画の策定・公表。毎年度の公募に応募する形式。",
  },
  {
    name: "公共施設等適正管理推進事業債（脱炭素化推進事業）",
    operator: "総務省（地方債）",
    target: "地方公共団体",
    rate: "元利償還金の30〜50%を地方交付税措置",
    limit: "起債額の上限なし（交付税措置率に上限）",
    outline: "公共施設の省エネ改修・再エネ設備導入に充てる地方債。後年度に地方交付税で措置されるため実質的な補助と同等の効果がある。",
    requirement: "公共施設等総合管理計画との整合、省エネ効果の要件あり。",
  },
  {
    name: "学校施設環境改善交付金（文部科学省）",
    operator: "文部科学省",
    target: "都道府県・市区町村（学校設置者）",
    rate: "1/3（国庫補助）",
    limit: "事業費に応じて算定（工事単価に上限あり）",
    outline: "公立学校の老朽改築・大規模改造に対する補助。省エネ改修・太陽光設備設置も補助対象となる場合がある。",
    requirement: "改築・改造計画の策定、学校設置者による申請。",
  },
  {
    name: "防災・減災、国土強靭化のための社会資本整備（防災安全交付金等）",
    operator: "国土交通省・内閣府",
    target: "地方公共団体",
    rate: "1/2〜2/3（施設種別・事業内容による）",
    limit: "事業費に応じて算定",
    outline: "防災機能を持つ公共施設への再エネ・蓄電池設備導入（避難所機能強化）が対象となる場合がある。",
    requirement: "地域防災計画との整合、避難所指定等の要件。",
  },
];

const comparisonTable = [
  {
    program: "脱炭素先行地域交付金",
    facility: "公共施設全般・民間施設も含む地域全体",
    energyTarget: "再エネ・省エネ・EV・マイクログリッド等",
    rate: "1/2〜2/3",
    difficulty: "高（計画策定・審査）",
    scale: "大規模（数億円〜）",
  },
  {
    program: "地域脱炭素移行・再エネ推進交付金",
    facility: "公共施設（庁舎・学校・施設等）",
    energyTarget: "太陽光・蓄電池・LED・ZEB化等",
    rate: "1/2〜2/3",
    difficulty: "中（計画策定要）",
    scale: "中規模（数千万〜数億円）",
  },
  {
    program: "公共施設等適正管理推進事業債",
    facility: "公共施設・インフラ全般",
    energyTarget: "省エネ改修・再エネ設備全般",
    rate: "元利償還の30〜50%交付税措置",
    difficulty: "低〜中（地方債の起債手続き）",
    scale: "制限なし（起債額による）",
  },
  {
    program: "学校施設環境改善交付金",
    facility: "公立学校",
    energyTarget: "空調・LED・太陽光（改修に付帯する場合）",
    rate: "1/3",
    difficulty: "中（改築・改造計画要）",
    scale: "学校施設単位",
  },
];

const usageExamples = [
  {
    title: "庁舎のLED化・空調設備更新",
    program: "地域脱炭素移行・再エネ推進交付金 または 公共施設等適正管理推進事業債",
    overview: "市区町村の庁舎・支所・公民館等の照明をLED化し、老朽化した空調設備を高効率機に更新する。最も着手しやすい省エネ施策の一つ。",
    effect: "電力使用量20〜40%削減、年間電気料金数百万円の削減が見込める場合も。",
    point: "事業債（起債）は手続きが比較的シンプル。年度内完了の工程管理が重要。",
  },
  {
    title: "学校施設（小中学校）への太陽光設備導入",
    program: "学校施設環境改善交付金 ＋ 地域脱炭素移行・再エネ推進交付金",
    overview: "校舎屋根への太陽光パネル設置と蓄電池の組み合わせ。平時の電気代削減と停電時の避難所機能強化を同時に実現する。",
    effect: "電力使用量の20〜50%を再エネで賄うことが可能。避難所電力の確保にも貢献。",
    point: "文科省補助と環境省交付金を組み合わせることで補助率を積み上げられる場合がある。設備を分けて申請することが必要。",
  },
  {
    title: "公共施設のZEB（ゼロエネルギービル）化",
    program: "脱炭素先行地域交付金 または 地域脱炭素移行・再エネ推進交付金",
    overview: "改築・新築の機会に合わせて公共施設のZEB化を推進。断熱改修・高効率設備・再エネ・蓄電池を組み合わせた総合的な省エネ施策。",
    effect: "基準一次エネルギー消費量から50〜100%削減。建物運用コストの大幅な圧縮が可能。",
    point: "ZEB設計には専門的知識が必要。省エネコンサルタントやESCO事業者の活用が有効。",
  },
  {
    title: "地域マイクログリッドの構築",
    program: "脱炭素先行地域交付金（大規模事業向け）",
    overview: "複数の公共施設・民間施設をつなぐ地域内の分散型電力供給ネットワーク。再エネ発電・蓄電池・デマンドコントロールを組み合わせる。",
    effect: "地域全体の再エネ比率向上、停電時の地域BCP機能強化。",
    point: "民間との連携・共同計画が採択に有利。事前の地域コンソーシアム形成が必要。",
  },
  {
    title: "公共施設の電力一括購買・PPAモデル導入",
    program: "地域脱炭素移行・再エネ推進交付金（初期設備費補助）",
    overview: "複数の公共施設の電力を一括して再エネPPAで調達。電力会社への支払いを変動費から固定費（PPA料金）に転換することで料金の安定化も図る。",
    effect: "複数施設の電力をまとめることでPPA単価の交渉力が向上。変動リスクの軽減。",
    point: "長期契約（10〜20年）のため、首長・議会の意思決定プロセスを早めに動かすことが必要。",
  },
];

const practicalPoints = [
  {
    title: "関連計画の策定要件を事前に確認する",
    detail: "多くの補助金・交付金は「地域脱炭素実行計画」「公共施設等総合管理計画」「地域防災計画」等との整合を求めます。計画が未策定の場合は同時並行で策定を進める必要があります。",
  },
  {
    title: "申請事務の工数を過小評価しない",
    detail: "国庫補助金・交付金は申請書類が多く、担当部署の工数が相当かかります。外部コンサルへの委託、省エネ診断の先行実施、ESCO活用等で事務負担を軽減する方法を検討してください。",
  },
  {
    title: "複数年度計画で段階的に申請する",
    detail: "全施設を一度に整備するのではなく、優先順位の高い施設から段階的に申請する計画を立てると、毎年度の申請負担が平準化されます。脱炭素化ロードマップを策定して計画的に進めることが重要です。",
  },
  {
    title: "省エネ診断を活用して計画の根拠を作る",
    detail: "補助金の採択審査では省エネ効果の定量的な根拠が必要です。環境省や経済産業省が提供する無料・低コストの省エネ診断サービスを活用することで、申請書の精度を高めることができます。",
  },
];

export default function SubsidyMunicipalityEnergyExamplesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="自治体向け電力関連補助金・交付金の活用事例｜公共施設の省エネ支援"
        description="自治体が活用できる電力・省エネ関連の国庫補助金・交付金について、制度の種類と活用事例を整理します。"
        url="https://simulator.eic-jp.org/subsidy-municipality-energy-examples"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "自治体向け電力関連補助金・交付金の活用事例" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">自治体向け電力関連補助金・交付金の活用事例</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自治体向け電力関連補助金・交付金の活用事例
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">公共施設の省エネ支援｜制度の種類と活用事例の整理</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          地方自治体は公共施設の運営において多くの電力コストを負担しており、
          電気料金の高騰が自治体財政に与える影響は年々大きくなっています。
          国は自治体の脱炭素化・省エネ化を支援するための補助金・交付金を複数用意しており、
          うまく活用することで公共施設の電気代削減と温室効果ガス排出削減を同時に推進できます。
          本ページでは自治体が活用できる主な国庫補助金・交付金と、具体的な活用事例を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-4">

        {/* 主な補助金・交付金 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体が使える主な国庫補助金・交付金</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 補助率・要件は年度・事業内容により変更されます。必ず最新の公募要領・制度解説をご確認ください。
          </p>
          <div className="mt-4 space-y-4">
            {mainSubsidies.map((sub, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-slate-800">{sub.name}</h3>
                  <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-700">{sub.operator}</span>
                </div>
                <p className="mt-2 text-sm text-slate-700">{sub.outline}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3 text-xs">
                  <div>
                    <span className="text-slate-500">対象</span>
                    <p className="font-medium text-slate-700">{sub.target}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">補助率</span>
                    <p className="font-bold text-sky-700">{sub.rate}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">上限額目安</span>
                    <p className="font-medium text-slate-700">{sub.limit}</p>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-500">申請要件：{sub.requirement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 補助金比較表 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金ごとの対象施設・補助率の比較</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度名</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">対象施設</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">対象事業</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">申請難易度</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">規模感</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.program}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.facility}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.energyTarget}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.difficulty}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 活用事例 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">活用事例</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            以下は自治体が実際に取り組みやすい活用事例です。
            自治体の規模・施設の状況・脱炭素計画の進捗に応じて適切な制度を選択してください。
          </p>
          <div className="mt-4 space-y-4">
            {usageExamples.map((ex, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start gap-2">
                  <h3 className="text-base font-semibold text-slate-800">{ex.title}</h3>
                </div>
                <p className="mt-1 text-xs font-semibold text-sky-700">活用制度：{ex.program}</p>
                <p className="mt-2 text-sm text-slate-700">{ex.overview}</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 text-xs">
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-2">
                    <span className="font-semibold text-emerald-700">期待効果</span>
                    <p className="mt-1 text-slate-700">{ex.effect}</p>
                  </div>
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-2">
                    <span className="font-semibold text-amber-700">実務ポイント</span>
                    <p className="mt-1 text-slate-700">{ex.point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 申請の実務ポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請の実務ポイント</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {practicalPoints.map((point, i) => (
              <div key={i} className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-sm font-semibold text-slate-800">{point.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 制度活用のステップ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体が補助金活用を進めるためのステップ</h2>
          <div className="mt-4 space-y-3">
            {[
              { step: "STEP 1", label: "公共施設の電力使用状況の把握", detail: "全施設の電気代・電力使用量を整理する。どの施設が多く電力を消費しているか、設備の老朽度はどうかを可視化する。" },
              { step: "STEP 2", label: "地域脱炭素実行計画の策定・更新", detail: "脱炭素関連の補助金の多くは計画策定が前提条件。まだ策定していない場合は、補助金申請と並行して計画策定を進める。" },
              { step: "STEP 3", label: "省エネ診断の実施", detail: "無料・低コストの公共施設省エネ診断を活用して、設備更新の優先順位と削減効果を定量化する。補助申請書の根拠データとなる。" },
              { step: "STEP 4", label: "補助金の選定・申請スケジュールの立案", detail: "施設の条件・事業規模・計画の進捗に応じて最適な補助制度を選定し、年間の申請スケジュールを策定する。" },
              { step: "STEP 5", label: "設計・工事・実績報告", detail: "交付決定後に設計・発注・工事を実施。完了後に実績報告書を提出して補助金を受領する。工程管理と事務書類の管理が重要。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white">{s.step}</span>
                <div>
                  <p className="font-semibold text-slate-800">{s.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：自治体の電気代削減は計画と補助金の組み合わせで進める</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・ 自治体向け補助金は「脱炭素先行地域交付金」「地域脱炭素移行・再エネ推進交付金」「公共施設等適正管理推進事業債」が主要3制度。</li>
            <li>・ 補助率は1/2〜2/3程度。事業債は交付税措置により実質的な補助と同等の効果がある。</li>
            <li>・ 申請には関連計画の策定要件があるものが多い。計画策定と補助申請を並行して進める。</li>
            <li>・ まずは着手しやすい庁舎LED化・空調更新から始め、段階的に再エネ・ZEB化・マイクログリッドへ展開する。</li>
            <li>・ 省エネ診断・ESCOの活用で申請の事務負担を軽減しながら成果を最大化する。</li>
          </ul>
        </section>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/municipality-procurement-bidding-failure", title: "自治体の電力入札・調達の失敗事例と対策", description: "入札不調・調達リスクを防ぐための実務ポイント" },
            { href: "/subsidy-local-government-list", title: "自治体別 電力関連補助金の探し方", description: "都道府県・市区町村の独自制度を効率的に探す方法" },
            { href: "/municipality-re100-decarbonization", title: "自治体のRE100・脱炭素化の取り組み", description: "公共部門の再エネ100%調達と脱炭素計画の進め方" },
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="自治体の電力コスト現状を把握するところから"
          description="補助金活用の前に、公共施設の電気料金負担の現状を数値で確認することが重要です。シミュレーターを活用して、削減優先度の高い施設・設備を特定しましょう。"
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
