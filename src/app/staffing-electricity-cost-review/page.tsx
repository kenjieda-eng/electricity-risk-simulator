import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];

const pageTitle =
  "人材派遣業の電気料金見直しポイント｜多拠点支店・スタッフ管理拠点の契約最適化";
const pageDescription =
  "人材派遣業（一般派遣・紹介予定派遣・人材紹介）の電気料金見直しを解説。本社オフィス＋全国多拠点支店、規模変動（契約更新時期）、スタッフ管理拠点の電力プロファイル、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "人材派遣業 電気料金 見直し",
    "派遣会社 電気代",
    "多拠点 支店 電力契約",
    "人材紹介業 電気料金",
    "派遣 集中契約",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/staffing-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/staffing-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

const usageProfile = [
  {
    label: "本社オフィス（コーポレート機能）",
    detail:
      "人材派遣業の本社は経営管理・営業統括・システム運用が中心。1人あたり月100〜180kWhの一般オフィス水準。100名規模の本社で年間15〜25万kWh、500名規模で年間60〜120万kWhが目安。",
  },
  {
    label: "全国多拠点支店（営業拠点）",
    detail:
      "人材派遣業は地域密着型の支店展開が事業の根幹。大手では全国50〜200拠点を展開。1拠点あたり低圧10〜50kW、年3〜15万kWh。スタッフ面談スペース・登録会・研修ルームの稼働で平日昼間中心の電力消費が発生。",
  },
  {
    label: "スタッフ登録会・研修拠点",
    detail:
      "週末・夜間にスタッフ登録会・研修を集中開催する派遣業特有の電力負荷。100人規模の研修ルームを併設する大型支店では、登録会開催日に通常日の1.5〜2倍の電力消費。",
  },
  {
    label: "ITシステム（マッチング・給与計算）",
    detail:
      "派遣スタッフのスキル・マッチング・給与計算・労務管理システム。自社サーバー運用の中堅以上では本社サーバー室で月3,000〜8,000kWh、年4〜10万kWh。クラウド移行が進行中。",
  },
  {
    label: "コールセンター・サポート機能（24h）",
    detail:
      "大手派遣会社では派遣先からの緊急対応・夜間サポート用コールセンター運用。1コールセンターあたり50〜200kWh規模、24時間連続稼働で年間40〜180万kWhを消費。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省・日本人材派遣協会等の参考値から、人材派遣業の電気代は売上高比0.1〜0.4%（業務原価比0.5〜2%）と業界全体で低い水準。中堅派遣会社で年800万〜3,000万円、大手派遣会社（全国200支店）で年5,000万〜2億円が一般的レンジ。",
  },
  {
    label: "従業員1人あたりの電力使用量",
    detail:
      "営業中心の支店スタッフで従業員1人あたり月100〜180kWh（一般オフィス水準）、本社コーポレートで月100〜200kWh、コールセンタースタッフで月200〜400kWh。職種・拠点機能で20〜100%格差。",
  },
  {
    label: "拠点規模別の年間使用量",
    detail:
      "小規模派遣会社（30〜100名、本社+1〜3支店）で年間10〜30万kWh、中堅派遣会社（300〜1,000名、本社+20〜50支店）で年間80〜300万kWh、大手派遣会社（1,000名超、本社+100〜200支店）で年間500〜2,000万kWh。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の多拠点合算インパクト",
    detail:
      "本社+100支店で年間500万kWh使用の大手派遣会社で燃料費調整額1円/kWh変動による年500万円の差。年間2,000万kWh規模では年2,000万円超。2022年以降4〜5円/kWhレンジで推移する継続的上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間500万kWh使用の中堅派遣会社で年2,250万円の負担、5年で1.125億円超。",
  },
  {
    label: "派遣契約期間と拠点規模変動",
    detail:
      "人材派遣業は派遣契約の更新時期（3月・9月）と新年度（4月）に登録会・研修ピークが集中。閑散期と繁忙期で電力使用量が1.3〜1.5倍変動するため、契約電力の最適点が難しい。",
  },
  {
    label: "多拠点分散契約の機会損失",
    detail:
      "全国100〜200支店をビル管理会社経由で個別契約しているケースで、グループ集中購買すれば年5〜10%単価改善できる機会を逸失している事例が大半。集中購買担当不在が課題。",
  },
  {
    label: "派遣先請求の透明化要求",
    detail:
      "派遣契約は時給×時間課金が主流で、運営諸経費（電気代含む）は派遣料金に含まれる。近年は大手派遣先からの諸経費透明化要求で、電気代上昇分の料金改定対応が課題に。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模派遣会社（従業員30〜100名）",
    profile: "地域密着型派遣／低圧 20〜80kW／年間 10〜30万kWh",
    annualCost: "年間電気代 300〜900万円",
    note: "本社+1〜3支店。新電力切替・固定3年契約・LED化・空調最適化で年7〜10%削減事例。",
  },
  {
    size: "中堅派遣会社（従業員300〜1,000名）",
    profile: "本社+20〜50支店／低圧合計 200〜500kW／年間 80〜300万kWh",
    annualCost: "年間電気代 2,400万〜9,000万円",
    note: "支店グループ一括契約＋固定5年契約＋LED＋空調最適化で年10〜13%削減事例。コールセンター併設で電力強度UP。",
  },
  {
    size: "大手派遣会社（従業員1,000名超）",
    profile: "本社+100〜200支店＋複数コールセンター／高圧合計 1,000〜3,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜6 億円",
    note: "1%の単価改善でも年150〜600万円のインパクト。長期固定5〜10年契約＋オフサイトPPA＋本社太陽光＋全国LED改修プログラム。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模派遣会社の年間9%削減（Before/After）",
    before: "地方都市の小規模派遣会社A社（本社+2支店、低圧合計 60kW、年間 18万kWh、年間電気代 540万円）。各拠点個別契約、市場連動プラン継続、LED未更新。",
    after: "本社・支店をグループ一括契約化（固定3年）／全拠点LED化（投資 60万円）／空調個別制御化／登録会開催日のピーク管理導入。",
    result: "年間電気代 540万円 → 491万円（▲9%、▲49万円）／契約 kW 合計 60→55／投資回収 1.3年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅派遣会社の年間13%削減",
    before: "中堅派遣会社B社（本社+30支店、低圧合計 350kW、年間 250万kWh、年間電気代 7,500万円）。各支店個別契約、市場連動プラン、コールセンター併設で24h稼働あり。",
    after: "支店＋本社グループ一括契約化／固定5年プラン切替／全拠点LED＋BEMS導入／コールセンター空調最適化／登録会研修ルームの自動制御／グリーン電力20%調達。",
    result: "年間電気代 7,500万円 → 6,525万円（▲13%、▲975万円）／契約 kW 合計 350→310／投資回収 2.8年（補助金後 1.8年）",
  },
  {
    title: "事例3：大手派遣会社の年間8,000万円削減",
    before: "大手派遣会社C社（本社+150支店+大型コールセンター3拠点、高圧合計 2,500kW、年間 1,500万kWh、年間電気代 4.5億円）。長期固定契約継続も支店分散管理、グリーン電力対応40%止まり。",
    after: "電力契約の8年長期固定締結／全国支店グループ集中購買体制構築／本社屋上太陽光 500kW／コールセンター3拠点の空調・LED改修／オフサイトPPA 2MW（再エネ100%）／DR契約／派遣先請求書での透明化。",
    result: "年間電気代 4.5億円 → 3.7億円（▲17.8%、▲8,000万円）／契約 kW 合計 2,500→2,200／投資回収 5.5年（補助金後 4年）／CO₂削減 約4,500 t/年",
  },
];

const demandManagement = [
  {
    label: "全国支店グループ一括契約化",
    detail:
      "全国100〜200支店をグループ一括契約に統合することで電力単価▲5〜10%削減。新電力との交渉力強化、契約条件統一による管理コスト削減効果も発生する。",
  },
  {
    label: "登録会・研修ルームの自動制御",
    detail:
      "週末・夜間の登録会・研修ピークに合わせた空調・照明自動制御。在室センサー＋スケジューラ連動で、空室時の電力消費を100%削減。月の電力使用量▲10〜20%削減事例。",
  },
  {
    label: "コールセンターの空調・サーバー最適化",
    detail:
      "24h稼働コールセンターの空調インバータ化＋サーバー仮想化で電力▲20〜30%削減。BEMS統合で全体最適化が可能。",
  },
  {
    label: "閑散期の契約電力ダウンサイズ",
    detail:
      "派遣契約閑散期（5〜7月、10〜12月）には実稼働が低下するため、年間契約電力を繁忙期で設定すると過剰契約に。実デマンド実績の見直しで基本料金▲10〜15%削減可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / オフィス・コールセンター型）",
    target: "本社・支店のLED・空調・BEMS／コールセンター空調更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "派遣業の本社・支店設備更新で活用しやすい主力補助金。コールセンター空調更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "本社屋上太陽光・オフサイトPPA",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "大型本社ビルを保有する大手派遣会社で活用可能。賃借ビルの場合はオフサイトPPAで対応。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "派遣先大手企業向け再エネ調達対応",
    rate: "1/2、上限数億円",
    note: "サステナビリティ重視派遣先対応の差別化施策に活用可能。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小派遣会社のオフィス・支店設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の中小派遣会社で活用可能。LED・空調更新で採択率高い。",
  },
];

const checklistItems = [
  "本社・支店の契約電力（kW）が直近12ヶ月のデマンド実績に対して過剰でないか",
  "本社・支店をグループ一括契約に統合できているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "登録会・研修ルームのBEMS自動制御を導入したか",
  "コールセンター空調・サーバー最適化を実施したか",
  "閑散期に対応した契約電力ダウンサイズを検討したか",
  "本社屋上を活用した自家消費太陽光（300kW〜1MW）導入の試算を実施したか",
  "派遣先大手企業向けにグリーン電力調達計画があるか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "派遣先請求書での電力コスト透明化対応を検討したか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "人材派遣業の電気代水準はどれくらいですか？", answer: "売上高比0.1〜0.4%、業務原価比0.5〜2%と業界全体で低い水準です。中堅派遣会社で年2,400万〜9,000万円、大手派遣会社で年1.5〜6億円規模の電気代になります。" },
  { question: "派遣会社に向く電力プランは固定ですか、市場連動ですか？", answer: "オフィス中心は市場連動も検討可能ですが、24時間コールセンター運用や派遣先大手向けグリーン電力調達が必要な場合は固定プラン推奨です。多拠点グループ契約と長期固定単価の親和性も考慮すべきです。" },
  { question: "全国支店をグループ集中購買すると電気代はどれくらい下がりますか？", answer: "各支店個別契約をグループ一括契約に統合すると、電力単価▲5〜10%、年100〜800万円規模の削減事例が多数あります。新電力との交渉力強化と契約条件統一による管理コスト削減効果も発生します。" },
  { question: "閑散期に契約電力ダウンサイズは可能ですか？", answer: "可能です。派遣契約閑散期（5〜7月、10〜12月）には実稼働が低下するため、年間契約電力を繁忙期で設定すると過剰契約に。実デマンド実績の見直しで基本料金▲10〜15%削減事例多数。" },
  { question: "コールセンター併設で電気代はどれくらい増えますか？", answer: "100席規模のコールセンターで年間40〜80万kWh追加、年1,200万〜2,400万円の電気代増（電力単価30円/kWh想定）。空調インバータ化＋サーバー仮想化で年20〜30%削減可能、投資回収2〜3年。" },
  { question: "派遣先請求書での電力コスト透明化は可能ですか？", answer: "可能で、近年は大手派遣先からの要求で増加傾向です。派遣単価に含めるか、運営諸経費として明示するかの2パターン。透明性確保が大型契約獲得のアドバンテージになります。" },
  { question: "本社屋上太陽光は派遣会社本社で投資回収できますか？", answer: "本社ビルの屋上面積が1,500m²以上で、コールセンター併設の大手派遣会社なら検討余地。300kW太陽光で年30〜35万kWh発電、年300〜350万円削減、投資回収7〜10年（補助金後5〜7年）。賃借ビルの場合はオフサイトPPAが現実的。" },
  { question: "人材派遣業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（コールセンター空調・BEMS）、需要家主導型PPA補助金（本社太陽光）、脱炭素先行地域補助（派遣先大手対応）、中小企業補助の4本柱です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本人材派遣協会（JASSA）", url: "https://www.jassa.or.jp/" },
  { name: "厚生労働省（労働者派遣事業統計）", url: "https://www.mhlw.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function StaffingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/staffing-electricity-cost-review"
        datePublished="2026-05-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">人材派遣業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            人材派遣業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            人材派遣業（一般派遣・紹介予定派遣・人材紹介）は、本社オフィス＋全国多拠点支店＋登録会・研修拠点＋コールセンターという広範な拠点ネットワーク業種です。地域密着型の支店展開、派遣契約期間の繁閑差、派遣先大手企業のサステナビリティ要求対応が電力契約管理の課題となります。本ページでは派遣業特有の電力負荷特性、業界平均水準、規模別事例、全国支店集中購買、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>人材派遣業の電力使用プロファイル（本社／支店／登録会／コールセンター）</li>
              <li>業界平均の電気代水準（売上高比0.1〜0.4%）と従業員あたり単価</li>
              <li>燃料費調整額・再エネ賦課金が当業種に与える影響</li>
              <li>規模別（小規模／中堅／大手派遣会社）の電気代と削減事例3件（Before/After）</li>
              <li>全国支店グループ集中購買による電力単価改善の費用対効果</li>
              <li>SII・需要家主導型PPA・GX補助・中小企業補助の組合せ活用</li>
              <li>派遣業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              人材派遣業の電力使用特性 — 本社・支店・登録会・コールセンター
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              人材派遣業の電力使用は『本社オフィス／全国多拠点支店／登録会・研修拠点／コールセンター（大手のみ）』の4層構造です。多拠点展開が業界の根幹で、グループ集中購買による単価改善が見直しの中核論点になります。
            </p>
            <div className="mt-4 space-y-3">
              {usageProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気料金の上昇要因の全体像は{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人の電気料金が上がる理由
              </Link>
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比0.1〜0.4%、業種別で最も低い水準帯
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              人材派遣業の電気代水準は事業形態（一般派遣・紹介予定派遣・人材紹介）でほぼ共通の傾向を示します。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <div className="mt-4 space-y-3">
              {industryBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 日本人材派遣協会・厚生労働省統計から整理。実値はコールセンター併設有無・拠点数で2〜5倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              人材派遣業の主要な電気代上昇要因 — 燃料費・賦課金・規模変動・分散契約
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              派遣業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、派遣契約期間の繁閑差、多拠点分散契約による機会損失、派遣先大手のサステナビリティ要求という業界固有要因が並列します。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模／中堅／大手派遣会社
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              人材派遣業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種の事例は{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、{" "}
              <Link href="/consulting-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コンサルティング業の電気料金見直し</Link>
              、{" "}
              <Link href="/small-office-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小規模オフィスの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              全国支店グループ集中購買 — 派遣業の中核施策
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中堅・大手派遣会社の電気代削減で最大の効果が見込まれるのが全国支店グループ集中購買。各支店をビル管理会社経由で個別契約しているケースから、グループ一括契約に切り替えるだけで電力単価▲5〜10%の改善が一般的です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">集中購買による直接効果</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力単価▲5〜10%（年100〜800万円規模の削減）</li>
                  <li>新電力との交渉力強化</li>
                  <li>契約条件統一による管理コスト削減</li>
                  <li>請求書管理・予算管理の効率化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">グループ契約化の進め方</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>全支店の契約期間・終了月をリスト化</li>
                  <li>各支店の使用量・契約電力を集計</li>
                  <li>新電力5〜10社へグループ案件として相見積</li>
                  <li>契約終了月に合わせて段階移行</li>
                  <li>移行後はグループ購買担当・BEMS監視を運用</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多拠点企業の電気代対応は{" "}
              <Link href="/multi-site-company-price-surge-risk" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">多拠点企業の料金高騰リスク</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              人材派遣業のデマンド管理 — 集中契約・登録会自動制御・閑散期対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              派遣業のデマンド管理は『全国支店グループ一括契約』『登録会・研修ルーム自動制御』『コールセンター最適化』『閑散期ダウンサイズ』の4論点を組合せて最適化します。
            </p>
            <div className="mt-4 space-y-3">
              {demandManagement.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド管理の削減効果試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — オフィス中心業種の感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              派遣業はオフィス中心で連続稼働ではないですが、多拠点合算では月の使用量が大きく、市場価格高騰局面で年数百万〜数千万円のインパクトが発生します。コールセンター併設の大手では特に影響が大きく、固定プラン採用が経営判断レベルの論点。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>派遣単価モデルの予算精度確保</li>
                  <li>派遣先大手のサステナビリティ要求対応</li>
                  <li>多拠点グループ契約と長期固定単価の親和性</li>
                  <li>コールセンター24h稼働でベースロード大</li>
                  <li>派遣先請求書での電力コスト透明化が容易</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬高値期に派遣単価への即時転嫁が困難</li>
                  <li>派遣先大手のサステナビリティ説明が困難</li>
                  <li>多拠点合算で高騰時の影響額が大きい</li>
                  <li>JEPX高騰時に年数百万〜千万円規模の追加負担</li>
                  <li>派遣単価モデルの予算精度低下</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、固定プラン適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、比較は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定プランの違い</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種特有の節電・省エネ施策 — 集中購買・登録会制御・コールセンター
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              派遣業向けの省エネ施策は『全国支店グループ集中購買』『登録会・研修ルーム自動制御』『コールセンター空調最適化』『本社BEMS導入』が4本柱。投資回収1.5〜3年で実行可能な施策が多数存在します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">全国支店集中購買</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力単価▲5〜10%</li>
                  <li>契約条件統一・管理コスト削減</li>
                  <li>新電力との交渉力強化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">登録会・研修ルーム自動制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>在室センサー＋スケジューラ連動</li>
                  <li>空調・照明・モニター連動</li>
                  <li>空室時の電力消費を完全削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コールセンター空調最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>空調インバータ化＋温度設定緩和</li>
                  <li>サーバー仮想化・コンテインメント</li>
                  <li>電力▲20〜30%、投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">本社・支店全体LED+BEMS</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>LED化で照明電力▲50〜70%</li>
                  <li>BEMS統合で空調・照明統合制御</li>
                  <li>SII補助1/2で投資回収1.5〜2年</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・GX補助・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              派遣業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜2年短縮できます。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyPrograms.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                    <p><span className="font-semibold text-slate-700">補助率：</span>{item.rate}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別制度の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              人材派遣業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社派遣事業の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              派遣業は本社・全国支店・コールセンター・登録会が組合さる業種で、契約電力の最適点が見えにくい構造です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・グループ集中購買のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>全国支店集中購買による単価改善幅を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>コールセンター空調最適化後のシナリオ比較</li>
              <li>事例で示した9〜18%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-21"
            />
            <GlossaryLinks currentSlug="staffing-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "本社オフィス中心業種の関連事例。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "小規模派遣会社向けの基本。" },
              { href: "/consulting-electricity-cost-review", title: "コンサルティング業の電気料金見直し", description: "多拠点オフィス業種の類似事例。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "多拠点支店業種の関連事例。" },
              { href: "/it-services-electricity-cost-review", title: "ITサービス業の電気料金見直し", description: "コールセンター・サーバー併設の関連事例。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "多拠点運営に直結するリスク。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "派遣単価モデルの法人の固定プラン選択。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "本社屋上太陽光の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "本社ビル・大型施設の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "コールセンター・BEMS・LED更新で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "賦課金の仕組みと推移を確認する。" },
            ]}
          />

          <ContentCta
            heading="自社派遣事業条件でリスクを確認する"
            description="本社・全国支店・コールセンター・登録会の電力使用パターン、繁閑差対応、派遣先大手対応をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>
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
