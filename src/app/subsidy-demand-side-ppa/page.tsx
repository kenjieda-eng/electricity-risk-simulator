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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["subsidies"];


const pageTitle = "需要家主導型太陽光PPAの補助金活用｜オフサイトPPAで電力コスト削減";
const pageDescription =
  "環境省「需要家主導型太陽光発電導入支援事業」を活用したオフサイトPPA・コーポレートPPAの解説。補助対象・補助率・申請スケジュールと、再エネ調達コスト削減のシミュレーション例を紹介します。2026年度版。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-demand-side-ppa";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "需要家主導型太陽光発電 補助金",
    "オフサイトPPA 補助金",
    "コーポレートPPA 助成金",
    "再エネ調達 法人",
    "太陽光 電力コスト削減",
    "環境省 PPA補助金",
    "2026年度 再エネ補助金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/subsidies", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/subsidies"],
  },
};

const overviewTable = [
  { item: "事業名", value: "需要家主導型太陽光発電導入支援事業" },
  { item: "実施機関", value: "環境省（委託先：民間事業者）" },
  { item: "事業形態", value: "オフサイトPPA／自己託送モデル" },
  { item: "補助対象", value: "発電設備・系統接続費用・蓄電池（条件による）等の初期費用の一部" },
  { item: "補助額（目安）", value: "定額補助 2〜4万円/kW相当（設備容量ベース）" },
  { item: "補助上限（目安）", value: "事業費の1/2〜2/3（案件規模・容量による）" },
  { item: "公募時期（目安）", value: "2026年4月〜6月（目安）※環境省公式サイトで要確認" },
  { item: "再エネ要件", value: "FIT/FIP認定を受けない太陽光発電によりPPA事業者経由で需要家に供給するもの" },
  { item: "PPA契約期間", value: "原則10年以上（長期固定価格の電力購入契約）" },
  { item: "申請主体の要件", value: "需要家が主導する調達であること（需要家が申請または共同申請）" },
];

const simulationPatterns = [
  {
    label: "パターンA：中規模工場（年間使用量500万kWh）",
    currentCost: "年間電気料金：約7,500万円",
    ppaSaving: "PPA単価が市場より概ね2〜4円/kWh安くなった場合、年間100〜200万円の削減試算",
    subsidyEffect: "初期費用1億円の場合、補助金で概ね3,000〜5,000万円を削減",
    note: "年間削減効果と補助金で回収期間を大幅に短縮できる想定例",
  },
  {
    label: "パターンB：商業施設（年間使用量200万kWh）",
    currentCost: "年間電気料金：約3,000万円",
    ppaSaving: "PPA経由再エネ比率30%達成で年間数百万円の削減ポテンシャル",
    subsidyEffect: "初期費用5,000万円の場合、補助金で概ね1,500〜2,500万円を削減",
    note: "RE100・脱炭素宣言と組み合わせることで対外的な価値も生まれる",
  },
  {
    label: "パターンC：オフィスビル（複数テナント）",
    currentCost: "テナント全体の年間電気料金：約5,000万円",
    ppaSaving: "共用部・オーナー使用分にPPA電力を充当することで固定費を削減",
    subsidyEffect: "補助金活用でPPA事業者のシステム費用が下がり、PPA単価の引き下げ交渉余地が生まれる",
    note: "テナントへのグリーン電力訴求でビルの競争力向上にもつながる",
  },
];

const steps = [
  { step: "STEP 1", label: "PPA事業者の選定・基本合意", detail: "複数のPPA事業者から提案を受け、単価・契約年数・再エネ証書の扱いを比較する。補助金活用を前提に交渉することを明示する。" },
  { step: "STEP 2", label: "補助金公募要領の確認", detail: "環境省の最新公募要領でPPA事業者側・需要家側の要件を確認する。PPA事業者が補助金申請を主導するケースが多い。" },
  { step: "STEP 3", label: "事業計画の策定", detail: "発電設備の設置場所・発電量・系統接続計画・需要家への供給スキームを整理した事業計画書を作成する。" },
  { step: "STEP 4", label: "補助金申請（公募期間内）", detail: "PPA事業者または需要家が申請主体となる。書類の不備が多いため専門家の確認を推奨。" },
  { step: "STEP 5", label: "採択・交付決定", detail: "採択後に交付決定を受けてから発注・着工。PPA契約の最終締結も交付決定後が安全。" },
  { step: "STEP 6", label: "設備設置・系統接続・運転開始", detail: "再エネ電力の供給開始後、実績報告書を提出して補助金を受領する。" },
];

const pitfalls = [
  { title: "PPA事業者任せで要件を確認しない", detail: "PPA事業者が補助金申請を主導する場合でも、需要家側の要件・書類提出が必要なケースがあります。自社の担当者を必ずアサインしてください。" },
  { title: "PPA契約期間と補助金の条件が合わない", detail: "補助金によっては一定期間の事業継続が条件になる場合があります。PPA契約の途中解約条件と照合してください。" },
  { title: "再エネ証書の扱いが不明確", detail: "PPAで調達した電力のCO₂ゼロ属性（非化石証書等）の帰属が契約上明記されていないと、RE100申請等に使えない場合があります。" },
  { title: "補助金申請前に契約を締結する", detail: "補助金の交付決定前にPPA本契約を締結・着工すると補助対象外になります。基本合意書と本契約のタイミングを慎重に設計してください。" },
];

export default function SubsidyDemandSidePpaPage() {
  return (
    <>
      <ArticleJsonLd
        headline="需要家主導型太陽光PPAの補助金活用｜オフサイトPPAで電力コスト削減"
        description="環境省「需要家主導型太陽光発電導入支援事業」を活用したオフサイトPPA・コーポレートPPAの解説。補助対象・補助率・申請スケジュールと、再エネ調達コスト削減のシミュレーション例を紹介します。2026年度版。"
        url="https://simulator.eic-jp.org/subsidy-demand-side-ppa"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "需要家主導型太陽光PPAの補助金活用" },
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
        <span className="text-slate-800">需要家主導型太陽光PPAの補助金</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-emerald-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          需要家主導型太陽光PPAの補助金活用
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">オフサイトPPAで電力コスト削減</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自社の屋根や敷地に太陽光を設置できない企業でも、オフサイトPPA（第三者が所有する発電所から電力を調達する契約）を活用すれば
          再生可能エネルギーを導入できます。環境省の「需要家主導型太陽光発電導入支援事業」はこの初期費用を補助する制度で、
          電力コスト削減と脱炭素経営の両立を後押しします。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* オフサイトPPAの仕組み */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">オフサイトPPAとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            PPA（Power Purchase Agreement：電力購入契約）とは、発電事業者が設置・所有する<Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光発電</Link>設備から電力を長期固定価格で購入する契約です。
            オンサイトPPAは自社敷地内に設置するのに対し、オフサイトPPAは別の場所にある発電所から系統を通じて電力を調達します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需要家側のメリットは、初期費用ゼロ（あるいは大幅削減）で再エネ電力を長期固定価格で調達できる点です。
            <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>や市場連動分の変動リスクをヘッジしながら、RE100・脱炭素宣言への対応が可能になります。
          </p>
        </section>

        {/* 制度概要テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">需要家主導型太陽光発電導入支援事業 概要（目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 補助率・上限額・公募時期は年度により変更されます。必ず環境省の最新公募要領をご確認ください。
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

        {/* 補助額の詳細 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助額・主な要件の詳細（目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下は2026年4月時点の公開情報に基づく概算です。正式な数値は環境省の公募要領でご確認ください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-slate-800">補助額（目安）</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>・ <strong>定額補助：</strong>2〜4万円/kW相当（設備容量ベース）</li>
                <li>・ <strong>補助上限：</strong>事業費の1/2〜2/3</li>
                <li>・ 例）1,000kW案件の場合、2,000〜4,000万円相当の補助が目安</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-slate-800">主な申請要件</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>・ <strong>需要家主導：</strong>需要家が調達を主導すること</li>
                <li>・ <strong>FIT/FIP対象外：</strong>FIT・FIP認定を受けない発電設備であること</li>
                <li>・ <strong>契約期間：</strong>PPA契約は原則10年以上</li>
                <li>・ <strong>事業形態：</strong>オフサイトPPAまたは自己託送モデル</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 対象事業者・対象設備 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">対象事業者と主な要件</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-slate-800">需要家側（電力を使う企業）</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li>・ 日本国内に事業所を持つ法人</li>
                <li>・ PPA事業者と長期（概ね10〜20年）の電力購入契約を締結する意思があること</li>
                <li>・ 再エネ由来電力の調達に関する社内承認を得ていること</li>
                <li>・ 一定規模以上の電力消費があること（規模要件は公募要領で確認）</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <h3 className="text-base font-semibold text-slate-800">PPA事業者側（申請主体の場合）</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-700">
                <li>・ 太陽光発電設備の設置・所有・運営を行う事業者</li>
                <li>・ 需要家との電力購入契約を締結済みまたは締結予定</li>
                <li>・ 一定の事業実績・資本要件を満たすこと</li>
                <li>・ 設備のモニタリング・保守体制があること</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 補助金活用シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金活用シミュレーション（想定例）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下はあくまでイメージです。実際の削減額・補助額は案件・契約内容・制度条件により大きく異なります。
          </p>
          <div className="mt-4 space-y-4">
            {simulationPatterns.map((p, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-800">{p.label}</h3>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li>・ 現状コスト：{p.currentCost}</li>
                  <li>・ PPA活用時：{p.ppaSaving}</li>
                  <li>・ 補助金効果：{p.subsidyEffect}</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">※ {p.note}</p>
              </div>
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

        {/* 注意点・よくある失敗 */}
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

        {/* 他の制度との組み合わせ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">他の制度との組み合わせ</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度・認証</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">組み合わせの効果</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2">SII省エネ補助金</td>
                  <td className="border border-slate-200 px-3 py-2">需要側の省エネ設備との組み合わせで電力消費量も削減</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">同一設備への重複補助は不可</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">SHIFT事業</td>
                  <td className="border border-slate-200 px-3 py-2">GHG削減計画とPPAを組み合わせて脱炭素経営を加速</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">SHIFT事業の対象費用と重複しないよう整理が必要</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-slate-200 px-3 py-2">RE100・CDP申請</td>
                  <td className="border border-slate-200 px-3 py-2">PPAで調達したCFE属性を認証に活用</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">非化石証書等の帰属を契約上明記する必要あり</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2">自治体の再エネ補助金</td>
                  <td className="border border-slate-200 px-3 py-2">発電所立地自治体の補助との上乗せが可能な場合あり</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">重複不可の場合が多いため事前確認が必須</td>
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
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "設備更新系補助金の詳細ガイド" },
            { href: "/subsidy-shift-project", title: "SHIFT事業と電力コスト戦略", description: "脱炭素経営支援と組み合わせる方法" },
            { href: "/solar-suitability-diagnosis", title: "太陽光導入向き不向き診断", description: "自社に太陽光導入が適しているかを確認" },
            { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光は電気料金対策としてどう効くか", description: "導入効果と費用対効果の考え方" },
            { href: "/battery-suitability-diagnosis", title: "蓄電池導入向き不向き診断", description: "蓄電池との組み合わせ効果を確認" },
            { href: "/municipality-procurement-methods", title: "自治体電力調達の入札実務", description: "自治体向けPPA活用を検討する際の調達方式の基礎知識。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="再エネ調達の前に電力コストの現状を把握しましょう"
          description="オフサイトPPAの効果を試算するには、まず現状の電力単価・使用量・コスト構造を把握することが出発点です。シミュレーターで現状を数値化してください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
