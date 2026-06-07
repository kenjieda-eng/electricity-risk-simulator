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
  "鋳造・ダイカスト業の電気料金見直しポイント｜電気炉・誘導炉・保持炉とBCPの契約最適化";
const pageDescription =
  "鋳造・ダイカスト業の電気料金見直しを解説。電気炉・誘導炉による金属溶解の連続大電力、保持炉24h稼働、湯漏れリスクとBCP、デマンドピーク管理、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "鋳造 電気料金 見直し",
    "ダイカスト 電気代",
    "電気炉 誘導炉 電力",
    "保持炉 24h 電気代",
    "鋳造 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/casting-diecasting-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/casting-diecasting-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
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
    label: "電気炉（アーク炉・誘導炉）— 主溶解設備",
    detail:
      "鋳造・ダイカスト工場の中核設備。アーク炉（鉄鋼系）・誘導炉（非鉄・特殊鋼）で金属を1,400〜1,700℃まで加熱溶解する。1基あたり500kW〜10MWの大電力を消費し、工場全体の電力使用量の40〜60%を占める業種特有のコスト構造。",
  },
  {
    label: "保持炉（湯保持・取鍋）— 24h連続稼働",
    detail:
      "溶解した金属を鋳込み温度（600〜750℃のアルミ、1,400℃の鋳鉄など）で保持する炉。生産ライン稼働中は24h連続稼働が必須で、停止すると湯が固化するため再稼働には大エネルギーが必要。工場全体の15〜25%を占める。",
  },
  {
    label: "ダイカストマシン（金型温調・射出）",
    detail:
      "ダイカスト工場の主要設備。金型温調機（150〜250℃維持）、油圧式または電動式射出装置、エジェクタ駆動の動力。1台あたり50〜500kWの常時負荷で、工場の電力使用量の10〜20%を占める。",
  },
  {
    label: "集塵・排煙処理設備",
    detail:
      "溶解炉・鋳造ラインから発生する金属粉じん・ヒューム・排煙を処理する集塵機・スクラバー・バグフィルター。1工場あたり50〜500kWの常時負荷。粉じん爆発リスクと法規制対応で稼働停止不可。",
  },
  {
    label: "コンプレッサー・冷却塔・砂処理設備",
    detail:
      "金型冷却・砂型造型・脱型工程の動力。コンプレッサー（30〜200kW）、冷却塔ファン・ポンプ（20〜100kW）、砂再生プラント（50〜300kW）が含まれる。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本鋳造協会の統計によれば、鋳造・ダイカスト業の電気料金は売上高の8〜18%（鉄鋳物業は最高水準）。製造原価に占める比率は12〜25%で全業種で最高クラス。電気炉・誘導炉の溶解電力依存度が極めて高い。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "鋳鉄で1トンあたり550〜700 kWh、鋳鋼で1トンあたり600〜800 kWh、アルミダイカストで1トンあたり800〜1,200 kWh、銅合金で1トンあたり400〜600 kWhが業界平均。誘導炉の方がアーク炉より15〜25%効率が良いとされる。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模鋳造工場（年商3〜15億円）で年間100〜600万 kWh、中規模ダイカスト工場（年商50〜300億円）で年間1,500〜5,000万 kWh、大規模鋳造メーカー（年商500億円超）で年間5,000万〜2億 kWh。特別高圧契約が中・大規模では業界標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の溶解電力ベースへの影響",
    detail:
      "電気炉・誘導炉・保持炉の24h稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月300万kWh）で月300万円の差、年間3,600万円規模のインパクト。鋳造業の利益率は低く、電気代変動が直接利益を圧迫する。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間4,000万kWh使用の中規模工場で年1.6億円超の負担。再エネ賦課金減免制度の対象（電気使用密度要件）に該当するケース多数。",
  },
  {
    label: "電気炉のピーク電流とデマンド突出",
    detail:
      "アーク炉は溶解開始直後（投入電流最大期）に瞬間負荷が突出する。誘導炉も投入直後に高負荷。複数炉の同時投入でデマンドピークが突出し、契約電力が実需以上に膨らむ。デマンド管理の効果が極めて大きい業種。",
  },
  {
    label: "保持炉24h停止不可による市場連動リスク",
    detail:
      "保持炉は生産期間中24h稼働が必須。停止すると湯が固化、再加熱に多大なエネルギーが必要なため、市場連動プランで市場価格高騰局面に直撃される。JEPX高騰局面では月数千万円規模の追加負担リスク。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、鋳造業のような24h溶解保持稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模鋳造工場（年商3〜15億円、従業員10〜40名）",
    profile: "町工場レベル鋳物・特殊鋳造／高圧 300〜800kW／年間 100〜600万 kWh",
    annualCost: "年間電気代 3,000万〜1.8億円",
    note: "誘導炉中心・LED化・コンプレッサー更新で年8〜12%削減事例。",
  },
  {
    size: "中規模ダイカスト工場（年商50〜300億円、従業員100〜500名）",
    profile: "自動車部品系ダイカスト中堅メーカー／高圧 2,000〜5,000kW／年間 1,500〜5,000万 kWh",
    annualCost: "年間電気代 4.5〜15 億円",
    note: "誘導炉高効率化＋デマンド分散＋自家消費太陽光で年10〜18%削減事例。",
  },
  {
    size: "大規模鋳造メーカー（年商500億円超、従業員500名以上）",
    profile: "自動車・建機・産機向け鋳造大手／特別高圧 6,000〜15,000kW／年間 5,000万〜2億 kWh",
    annualCost: "年間電気代 15〜60 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模鋳物工場の年間13%削減（Before/After）",
    before: "東海地方の鋳物工場A社（高圧 500kW、年間 300万 kWh、年間電気代 9,000万円）。市場連動プラン継続、誘導炉が15年経過、デマンド管理は手動。",
    after: "新電力切替（固定3年）／誘導炉を高効率インバータ式に更新（SII補助1/2活用、投資1,800万円）／デマンドコントローラー導入／LED化／コンプレッサーインバータ化／力率改善。",
    result: "年間電気代 9,000万円 → 7,830万円（▲13%、▲1,170万円）／契約 kW 500→440／投資回収 補助金後 1.5年",
  },
  {
    title: "事例2：中規模ダイカスト工場の年間16%削減",
    before: "中部地方の自動車部品ダイカスト工場B社（高圧 3,500kW、年間 3,000万 kWh、年間電気代 9億円）。市場連動プランで2022〜2023年に月最大3,500万円の追加負担を経験。複数炉同時投入でデマンドピーク発生。",
    after: "固定5年プラン切替／誘導炉の高効率インバータ化＋投入タイミング分散制御／自家消費太陽光 1.5MW 導入（屋根10,000 m²）／BEMS＋デマンド分散制御／需要家主導型PPA／集塵機インバータ化。",
    result: "年間電気代 9億円 → 7.56億円（▲16%、▲1.44億円）／契約 kW 3,500→3,000／投資回収 補助金後 3.2年",
  },
  {
    title: "事例3：大規模鋳造メーカーの年間1.8億円削減",
    before: "国内大手鋳造メーカーC社の主力工場（特別高圧 9,000kW、年間 9,000万 kWh、年間電気代 27億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 3 MW＋蓄電池 5 MWh／コージェネ 3MW＋排熱回収／全炉インバータ式更新／需要家主導型PPA（オフサイト風力5MW）／DR契約締結。",
    result: "年間電気代 27億円 → 25.2億円（▲6.7%、▲1.8億円）／契約 kW 9,000→8,200／投資回収 7年（補助金後 5年）／CO₂削減 約20,000 t/年",
  },
];

const demandManagement = [
  {
    label: "複数炉投入タイミングの分散制御",
    detail:
      "複数の電気炉・誘導炉を運用する場合、投入タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を20〜30%削減した事例。デマンドコントローラーと炉制御盤の連動が必須。",
  },
  {
    label: "保持炉夜間運転シフト",
    detail:
      "保持炉の稼働を電力単価安価な深夜〜早朝に最大化する運用設計。3交代制工場では夜間溶解＋日中保持で5〜10%のピーク削減が可能。",
  },
  {
    label: "ダイカストマシン稼働の負荷追従",
    detail:
      "ダイカストマシンの起動・射出サイクルを溶解炉投入と重ねない運用。BEMSによる工場全体の負荷追従で15〜20%のピーク削減事例。",
  },
  {
    label: "集塵・コンプレッサーのインバータ・台数制御",
    detail:
      "集塵機・コンプレッサーのインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率誘導炉・インバータ化・LED・集塵機・コンプレッサー・空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "鋳造業向けで採択率が高い主力補助金。誘導炉更新・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h保持稼働で自家消費率70%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "誘導炉・ダイカストマシンの新型導入・革新的生産設備",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "鋳造・ダイカスト業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "電気炉のさらなる電化（コークス→電気）・排熱発電",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた電化や排熱発電で大型補助の対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小鋳造事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "複数炉同時投入時のピーク使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "電気炉・保持炉・ダイカストマシン・集塵設備の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（500kW〜3MW）導入の試算を実施したか",
  "誘導炉のインバータ化・高効率化の投資回収試算を実施したか",
  "保持炉の断熱性能改善・夜間運転シフトの余地を確認したか",
  "デマンドコントローラー・複数炉投入分散の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "鋳造・ダイカスト業の電気代水準はどれくらいですか？", answer: "売上高比8〜18%（鉄鋳物業は最高水準）、製造原価比12〜25%が業界平均で全業種最高クラス。中規模ダイカスト工場（年商200億円級）で年4.5〜15億円、大規模鋳造メーカー（年商500億円超）で年15〜60億円規模の電気代になります。" },
  { question: "電気炉・誘導炉の電力を削減するには？", answer: "①誘導炉の高効率インバータ式への更新（電力▲15〜25%）、②複数炉投入タイミング分散、③溶解バッチの大型化（小ロット繰返しの集約）、④投入材料の予熱化、⑤BEMS・デマンド制御、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで2〜4年が目安です。" },
  { question: "保持炉24h稼働の電気代を削減するには？", answer: "①保持炉の断熱性能改善（電力▲10〜20%）、②夜間電力活用シフト、③保持温度の最適化（過剰加熱の抑制）、④保持炉カバーの活用、⑤新型省エネ保持炉への更新、の5本柱が効果的。投資回収は補助金活用で1〜3年が目安。" },
  { question: "ダイカストマシンの電気代対策は？", answer: "①油圧式から電動式ダイカストマシンへの更新（電力▲30〜50%）、②金型温調機の高効率化、③射出サイクル最適化、④待機電力の削減、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年500〜1,200万円の削減が目安。" },
  { question: "鋳造業の固定プランと市場連動プランどちらが向きますか？", answer: "電気炉・保持炉の24h連続稼働でベースロードが大きく、生産停止が極めて困難なため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "誘導炉のインバータ化は投資回収できますか？", answer: "従来の低周波誘導炉からインバータ式高効率誘導炉への更新で、溶解電力15〜25%削減。中規模工場（年間3,000万kWh）で年間1,500〜2,500万円の削減、投資回収はSII補助で3〜4年が目安です。電力コスト変動の影響緩和も同時に達成できます。" },
  { question: "鋳造業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は鋳造工場で投資回収できますか？", answer: "屋根面積3,000m²以上、24h保持炉稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率70%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 日本鋳造協会", url: "https://www.foundry.jp/" },
  { name: "経済産業省 製造産業局", url: "https://www.meti.go.jp/policy/mono_info_service/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function CastingDiecastingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/casting-diecasting-electricity-cost-review"
        datePublished="2026-05-25"
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
          <span className="text-slate-800">鋳造・ダイカスト業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            鋳造・ダイカスト業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            鋳造・ダイカスト業は、電気炉・誘導炉による金属溶解の大電力、保持炉24h連続稼働、ダイカストマシン射出工程、集塵・排煙処理など多面的な電力負荷を持ち、製造原価に占める電気代比率は全業種で最高クラスです。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>鋳造・ダイカスト業の電力使用プロファイル（電気炉／保持炉／ダイカストマシン／集塵）</li>
              <li>業界平均の電気代水準（売上高比8〜18%）と製品単位あたり単価</li>
              <li>誘導炉のインバータ化・高効率化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>保持炉24h稼働の省エネ施策</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネ補助の組合せ活用</li>
              <li>鋳造業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鋳造・ダイカスト業の電力使用特性 — 電気炉・保持炉・ダイカストマシン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造・ダイカスト業の電力使用は『電気炉（溶解）／保持炉／ダイカストマシン／集塵排煙／砂処理コンプレッサー』の5層で構成されます。電気炉の大電力と保持炉24h稼働が業界特有のコスト構造を形成します。
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比8〜18%、製品単位550〜1,200 kWh/t
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造・ダイカスト業の電気代水準は製品種別（鋳鉄／鋳鋼／アルミ／銅合金）と炉種で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本鋳造協会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鋳造業の主要な電気代上昇要因 — 溶解電力・保持炉・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造業の電気代上昇は、電気炉・保持炉のベースロードに加え、デマンドピーク、市場連動リスク、容量拠出金が複合的に重なります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模鋳物／中規模ダイカスト／大規模鋳造メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造・ダイカスト業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-3">
                    <p><span className="font-semibold text-slate-700">プロファイル：</span>{item.profile}</p>
                    <p><span className="font-semibold text-slate-700">年間電気代：</span>{item.annualCost}</p>
                    <p><span className="font-semibold text-slate-700">特徴：</span>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
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
              関連業種は{" "}
              <Link href="/forging-heat-treatment-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鍛造・熱処理業の電気料金見直し</Link>
              、{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              複数炉投入・保持炉24h稼働のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造業は複数炉投入タイミング分散、保持炉夜間運転シフト、ダイカストマシン稼働の負荷追従など、業種特有のデマンド管理戦略が極めて効果的です。
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
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 保持炉24h稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造業は電気炉・保持炉の24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気炉・保持炉の24h稼働が必須</li>
                  <li>湯固化リスクで稼働停止が致命的</li>
                  <li>鋳造品の即時価格転嫁が困難</li>
                  <li>大電力消費で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に溶解電力負荷増</li>
                  <li>複数炉投入が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円〜億単位の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 大電力消費業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。鋳造業の中規模工場では負担額が請求総額の10〜18%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模ダイカスト工場（年3,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1.047億円</li>
                  <li>2025年度（3.98円/kWh）：年 1.194億円（+1,470万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1.254億円（+2,070万円）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鋳造業特有の節電・省エネ施策 — 誘導炉インバータ化・保持炉断熱・電動ダイカスト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造業の省エネは『誘導炉インバータ化』『保持炉断熱・夜間運転』『電動ダイカストマシン』『集塵機インバータ化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">誘導炉インバータ化・高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>低周波→中・高周波インバータ式で溶解電力▲15〜25%</li>
                  <li>SII＋ものづくり補助で大型補助対象</li>
                  <li>投資回収 3〜4年（補助金後 2〜3年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">保持炉の断熱・夜間運転シフト</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>保持炉断熱性能改善で電力▲10〜20%</li>
                  <li>夜間時間帯利用で単価▲30%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電動ダイカストマシン</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>油圧式→電動式で電力▲30〜50%</li>
                  <li>サイクルタイム短縮で生産性向上も同時実現</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（500kW〜3MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h保持炉稼働で自家消費率70%超</li>
                  <li>投資回収 7〜10年（補助金後 5〜7年）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・ものづくり・GX補助・中小省エネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造業向けに活用しやすい補助金は5本柱。誘導炉インバータ化はSII＋ものづくり補助の組合せで補助率を最大化できます。
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
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鋳造業に合った契約見直しチェックリスト（12項目）
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社鋳造工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鋳造・ダイカスト業は電気炉の大電力消費・保持炉24h稼働・湯固化リスクの3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>複数炉投入のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した13〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-25"
            />
            <GlossaryLinks currentSlug="casting-diecasting-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/forging-heat-treatment-electricity-cost-review", title: "鍛造・熱処理業の電気料金見直し", description: "加熱炉・焼入れの電力対策。" },
              { href: "/metal-stamping-sheet-metal-electricity-cost-review", title: "金属プレス・板金業の電気料金見直し", description: "プレス機の瞬時負荷対策。" },
              { href: "/plating-surface-treatment-electricity-cost-review", title: "メッキ・表面処理業の電気料金見直し", description: "電解・整流器の大電力対策。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し", description: "金属加工一般の見直しポイント。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "電炉・連続鋳造の大電力対策。" },
              { href: "/non-ferrous-metal-electricity-cost-review", title: "非鉄金属業の電気料金見直し", description: "アルミ・銅の溶解・圧延対策。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し", description: "ダイカスト・鋳鍛造の取引先業種。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "鋳造法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "誘導炉・コンプレッサー更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "保持炉24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の鋳造工場条件でリスクを確認する"
            description="電気炉・保持炉・ダイカストマシンの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。誘導炉インバータ化後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="鋳造・ダイカスト業の電力契約見直し、専門家に相談しませんか？"
            description="電気炉・保持炉・ダイカストマシン・集塵設備の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で鋳造業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
