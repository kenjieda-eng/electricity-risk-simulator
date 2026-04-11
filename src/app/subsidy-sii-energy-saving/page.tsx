import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "省エネ補助金（SII）の申請ガイド｜対象・補助率・スケジュール";
const pageDescription =
  "SII（環境共創イニシアチブ）が実施する省エネルギー投資促進支援事業の申請ガイド。対象設備・補助率・補助上限・申請スケジュールを解説し、採択率を高めるポイントと注意点をまとめました。2026年度版。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-sii-energy-saving";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "SII 省エネ補助金",
    "先進的省エネルギー投資促進支援事業",
    "省エネ補助金 申請",
    "補助率 中小企業",
    "高効率空調 補助金",
    "照明 LED 補助金 法人",
    "2026年度 省エネ補助金",
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

const overviewTable = [
  { item: "事業名", value: "先進的省エネルギー投資促進支援事業" },
  { item: "実施機関", value: "SII（一般社団法人環境共創イニシアチブ）" },
  { item: "対象設備", value: "高効率空調・照明・ボイラー・変圧器・冷凍冷蔵設備・産業用モーターなど" },
  { item: "補助率（目安）", value: "中小企業：概ね1/2以内、大企業：概ね1/3以内" },
  { item: "補助上限額（目安）", value: "最大15億円程度（区分・設備種別による）" },
  { item: "補助下限額（目安）", value: "概ね100万円程度（要件を満たす省エネ量が必要）" },
  { item: "公募時期（目安）", value: "2026年4〜6月（1次）、8〜10月（2次）※要確認" },
  { item: "省エネ要件", value: "一定以上の省エネルギー率が求められる（区分により異なる）" },
];

const simulationPatterns = [
  {
    label: "パターンA：中小企業・空調更新",
    investment: "2,000万円",
    rate: "1/2",
    subsidy: "概ね1,000万円",
    netCost: "概ね1,000万円",
    note: "高効率空調への更新、省エネ率15%以上が要件の例",
  },
  {
    label: "パターンB：中小企業・照明LED化＋空調",
    investment: "5,000万円",
    rate: "1/2",
    subsidy: "概ね2,500万円",
    netCost: "概ね2,500万円",
    note: "複数設備をまとめて申請した場合の想定例",
  },
  {
    label: "パターンC：大企業・工場設備一括更新",
    investment: "3億円",
    rate: "1/3",
    subsidy: "概ね1億円",
    netCost: "概ね2億円",
    note: "補助上限に達する場合は上限額が優先される",
  },
];

const steps = [
  { step: "STEP 1", label: "公募要領の確認・登録申請", detail: "SII公式サイトで最新の公募要領を入手。GビズIDを取得して電子申請システムへ登録する。" },
  { step: "STEP 2", label: "省エネ診断・設備選定", detail: "対象設備を決定し、省エネルギー計算書を作成。省エネ率の要件を満たすか事前に確認する。" },
  { step: "STEP 3", label: "申請書類の作成", detail: "事業計画書・省エネルギー計算書・見積書・会社概要等を準備。記載ミスが多いため専門家への相談も有効。" },
  { step: "STEP 4", label: "電子申請（公募期間内）", detail: "期限内にオンライン申請システムで提出。補足書類の郵送が必要な場合もある。" },
  { step: "STEP 5", label: "採択審査・交付決定", detail: "採択後に交付決定通知が届く。交付決定を受けてから発注・着工を行う（着工前申請が大原則）。" },
  { step: "STEP 6", label: "設備導入・完了報告", detail: "設備導入後に実績報告書を提出。省エネ効果の実測データが求められることがある。" },
  { step: "STEP 7", label: "補助金の交付", detail: "完了確認後に補助金が指定口座へ振り込まれる。" },
];

const pitfalls = [
  { title: "着工前申請を忘れる", detail: "交付決定前に発注・着工すると補助対象外になります。必ず採択・交付決定後に動いてください。" },
  { title: "省エネ率が要件を満たさない", detail: "申請後に設備仕様を変更すると省エネ率が変わり要件を満たせなくなる場合があります。設備選定段階で余裕を持った計算が必要です。" },
  { title: "見積書の有効期限切れ", detail: "申請時と交付決定時で見積有効期限が切れるケースがあります。有効期限の長い見積書を取得しておきましょう。" },
  { title: "GビズIDの準備不足", detail: "GビズIDの取得に時間がかかる場合があります。公募開始前に余裕をもって取得してください。" },
  { title: "実績報告の省エネ効果未達", detail: "実際の省エネ量が計画を大幅に下回ると補助金の返還を求められる場合があります。" },
];

export default function SubsidySiiEnergySavingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-emerald-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          省エネ補助金（SII）の申請ガイド
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">対象設備・補助率・申請スケジュール</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          SII（環境共創イニシアチブ）が実施する「先進的省エネルギー投資促進支援事業」は、
          法人が高効率設備に投資する際の費用を補助する制度です。中小企業は概ね投資額の1/2、
          大企業は1/3程度の補助が受けられ、電気料金の削減と初期投資回収の両立が可能です。
          本ページでは2026年度の制度概要と申請ガイドをまとめます。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 制度概要テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">制度概要（2026年度・目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 補助率・上限額・公募時期は年度・区分により異なります。必ず最新公募要領を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 w-36">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">内容</th>
                </tr>
              </thead>
              <tbody>
                {overviewTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 対象事業者・対象設備 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">対象事業者と対象設備</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-slate-800">対象事業者</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li>・ 法人（株式会社・合同会社・一般社団法人など）</li>
                <li>・ 個人事業主（事業用設備が対象）</li>
                <li>・ 中小企業・大企業いずれも対象（補助率が異なる）</li>
                <li>・ 日本国内に事業所があること</li>
                <li>・ 反社会的勢力でないこと、税金の未納がないこと</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-slate-800">主な対象設備</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li>・ 高効率空調（ターボ冷凍機・ビル用マルチ等）</li>
                <li>・ 高効率照明（LEDなど）</li>
                <li>・ 高効率ボイラー・給湯器</li>
                <li>・ 高効率変圧器</li>
                <li>・ 産業用高効率モーター・インバーター</li>
                <li>・ 冷凍冷蔵設備（業務用冷凍・冷蔵庫）</li>
                <li>・ コージェネレーションシステム</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            SIIが指定するカタログ登録製品、または一定の省エネ性能基準を満たす設備が対象となります。
            設備仕様の確認は早めに行ってください。
          </p>
        </section>

        {/* 補助額シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助額シミュレーション（想定例）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下はあくまで想定例です。実際の補助額は設備種別・省エネ率・事業者区分等により異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">想定ケース</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">投資額（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助額（概算）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">実質負担（概算）</th>
                </tr>
              </thead>
              <tbody>
                {simulationPatterns.map((p, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-800">{p.label}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{p.investment}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{p.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-emerald-700">{p.subsidy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{p.netCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 space-y-1">
            {simulationPatterns.map((p, i) => (
              <p key={i} className="text-xs text-slate-500">※ {p.label}：{p.note}</p>
            ))}
          </div>
        </section>

        {/* 申請の流れ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請の流れ</h2>
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

        {/* よくある失敗 */}
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

        {/* 他の制度との併用 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他の制度との併用可否</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">同一設備への重複適用</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2">自治体の省エネ補助金</td>
                  <td className="border border-slate-200 px-3 py-2 text-amber-700 font-medium">原則不可（要確認）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">自治体によって異なるため事前確認が必須</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">省エネ投資促進税制（税制優遇）</td>
                  <td className="border border-slate-200 px-3 py-2 text-emerald-700 font-medium">原則可能</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">補助金受領額は圧縮記帳後の取得価額で税額控除を計算</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2">環境省のCO₂削減設備補助金</td>
                  <td className="border border-slate-200 px-3 py-2 text-amber-700 font-medium">同一設備は不可</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">設備を分けて申請する手法を検討する余地あり</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">中小企業省エネ経営促進融資</td>
                  <td className="border border-slate-200 px-3 py-2 text-emerald-700 font-medium">可能（融資と補助金の併用）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">補助金を原資に融資を返済する計画が立てやすい</td>
                </tr>
              </tbody>
            </table>
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
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-demand-side-ppa", title: "需要家主導型太陽光PPAの補助金活用", description: "オフサイトPPAで電力コストを削減する仕組みと補助制度" },
            { href: "/subsidy-local-government-list", title: "自治体別 電力関連補助金の探し方", description: "都道府県・市区町村の独自制度を効率的に探す方法" },
            { href: "/subsidy-application-approval-document", title: "補助金申請を前提とした稟議書の書き方", description: "構成と数値の示し方を具体的に解説" },
            { href: "/solar-suitability-diagnosis", title: "太陽光導入向き不向き診断", description: "自社に太陽光導入が適しているかを確認" },
            { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光は電気料金対策としてどう効くか", description: "導入効果と費用対効果の考え方" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電気料金の現状をまず把握しましょう"
          description="省エネ補助金の申請を検討する前に、現状の電気料金負担を数値で確認。シミュレーターで診断すれば、投資対効果の説明資料に使える数値が得られます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
      <div className="mt-6">
        <CategoryNextStepCta slug="subsidy-sii-energy-saving" />
      </div>
    </main>
  );
}
