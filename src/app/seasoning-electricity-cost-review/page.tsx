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
  "調味料業の電気料金見直しポイント｜醤油熟成・味噌発酵・ソース加熱の契約最適化";
const pageDescription =
  "調味料業（醤油・味噌・ソース・ドレッシング）の電気料金見直しを解説。熟成・濾過・発酵温度管理・加熱冷却の連続稼働、規模別事例、固定vs市場連動の判断、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "調味料業 電気料金 見直し",
    "醤油 熟成 電気代",
    "味噌 発酵 電力",
    "ソース 工場 電気代",
    "調味料 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/seasoning-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/seasoning-electricity-cost-review",
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
    label: "発酵タンク・熟成タンク（醤油・味噌）",
    detail:
      "醤油の熟成タンクは6ヶ月〜2年の長期温度管理（20〜30℃の精密制御）、味噌の発酵タンクは数ヶ月〜数年の温度管理（25〜35℃）が必須。長期発酵期間中の温度維持電力が工場全体の25〜40%を占める。発酵期の急な温度変動への対応が品質を左右。",
  },
  {
    label: "濾過・分離・精製設備",
    detail:
      "醤油の生揚げ濾過、味噌のすりつぶし、ソース・ドレッシングの均質化（ホモジナイザー）の動力電力。遠心分離機・フィルタープレスの電力負荷で工場全体の15〜25%を占める。連続運転が原則。",
  },
  {
    label: "加熱・冷却ライン（ソース・ドレッシング）",
    detail:
      "ソース・ケチャップ・マヨネーズの加熱殺菌・冷却凝固設備。電気・蒸気ボイラー、冷却塔・凝固設備の電力負荷で工場全体の20〜30%を占める。連続生産で多数台同時稼働。",
  },
  {
    label: "充填・パッケージング設備",
    detail:
      "PETボトル・ガラス瓶・パウチへの充填機、ラベラー・キャッパー・段ボール詰めの自動ラインの動力。1ラインあたり50〜200kWの常時負荷。",
  },
  {
    label: "原料加工・洗浄設備",
    detail:
      "大豆・小麦・米麹の原料前処理（洗浄・蒸し・冷却）、麹室の温度管理、CIP洗浄機の電力負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・日本調味料協会の統計によれば、調味料業の電気料金は売上高の3〜7%（業種により差異）。製造原価に占める比率は5〜13%。長期発酵・熟成電力で電力依存度が中位。",
  },
  {
    label: "1リットル製品あたりの電力使用量",
    detail:
      "醤油で1リットルあたり0.3〜0.6 kWh、味噌で1kgあたり0.4〜0.8 kWh、ソース・ドレッシングで1リットルあたり0.2〜0.5 kWhが業界平均。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模醤油・味噌蔵（年商5〜30億円）で年間50〜300万 kWh、中規模調味料工場（年商50〜300億円）で年間500〜2,500万 kWh、大規模調味料メーカー（年商500億円超）で年間2,500万〜1億 kWh。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の長期発酵ベースへの影響",
    detail:
      "醤油・味噌の長期熟成温度管理は24時間連続で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月100万kWh）で月100万円の差、年間1,200万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間1,500万kWh使用の中規模工場で年6,000万円超の負担。",
  },
  {
    label: "長期発酵期間中の温度管理コスト",
    detail:
      "醤油6ヶ月〜2年、味噌6ヶ月〜3年の発酵・熟成期間中、24時間温度管理が必須。在庫タンクの温度維持電力が業界の電気代上昇要因のひとつ。エネルギー価格上昇の影響を回避できない。",
  },
  {
    label: "夏季冷房・冬季暖房の両ピーク",
    detail:
      "発酵タンクの最適温度（20〜35℃）を維持するため、夏季は冷房、冬季は暖房が必要。両ピークが顕著で、年間を通じた温度管理電力が事業者コストを左右。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、調味料業のような24時間稼働業種に影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模醤油蔵・味噌蔵（年商5〜30億円、従業員15〜80名）",
    profile: "地場醤油蔵・地味噌メーカー／高圧 150〜400kW／年間 50〜300万 kWh",
    annualCost: "年間電気代 1,500〜9,000 万円",
    note: "長期熟成期間中の温度管理が中心／LED化・空調更新で年10〜15%削減事例多数。",
  },
  {
    size: "中規模調味料工場（年商50〜300億円、従業員100〜400名）",
    profile: "醤油・味噌・ソース中堅メーカー／高圧 1,000〜2,500kW／年間 500〜2,500万 kWh",
    annualCost: "年間電気代 1.5〜7.5 億円",
    note: "発酵タンク温度自動制御＋自家消費太陽光で年8〜15%削減事例。",
  },
  {
    size: "大規模調味料メーカー（年商500億円超、従業員400名以上）",
    profile: "キッコーマン・味の素・カゴメ等の総合調味料メーカー／特別高圧 3,000〜8,000kW／年間 2,500万〜1億 kWh",
    annualCost: "年間電気代 7.5〜30 億円",
    note: "長期固定（5〜10年）契約と需要家主導型PPA併用が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：地場醤油蔵の年間13%削減（Before/After）",
    before: "関西の地場醤油蔵A社の年商15億円事業（高圧 250kW、年間 150万 kWh、年間電気代 4,500万円）。市場連動プラン継続、熟成タンク温度管理は手動。",
    after: "新電力切替（固定3年）／熟成タンク温度自動制御＋IoT管理／全照明LED化／冷却設備のインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 4,500万円 → 3,920万円（▲13%、▲580万円）／契約 kW 250→220／投資回収 1.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模ソース工場の年間16%削減",
    before: "関東のソース・ドレッシングメーカーB社の年商200億円工場（高圧 2,000kW、年間 2,200万 kWh、年間電気代 6.6億円）。市場連動プランで2022〜2023年に月最大2,500万円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 1MW 導入（屋根7,000 m²）／加熱殺菌設備のヒートポンプ化／均質化機のインバータ化／BEMS導入。",
    result: "年間電気代 6.6億円 → 5.54億円（▲16%、▲1.06億円）／契約 kW 2,000→1,750／投資回収 5.0年（補助金後 3.4年）",
  },
  {
    title: "事例3：大規模調味料メーカーの年間1.6億円削減",
    before: "国内大手調味料メーカーC社の基幹工場（特別高圧 5,000kW、年間 4,800万 kWh、年間電気代 14.4億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2.5 MW＋蓄電池 3 MWh／コージェネ 1.5MW／需要家主導型PPA（オフサイト風力3MW）／DR契約締結。",
    result: "年間電気代 14.4億円 → 12.8億円（▲11%、▲1.6億円）／契約 kW 5,000→4,500／投資回収 6.5年（補助金後 4.8年）",
  },
];

const demandManagement = [
  {
    label: "発酵タンク温度管理のスケジュール最適化",
    detail:
      "発酵期の冷却・暖房需要を電力単価安価な深夜〜早朝に集中させる運用設計。3交代制の調味料工場では昼夜の温度管理シフト調整で5〜10%のピーク削減が可能。",
  },
  {
    label: "加熱殺菌ラインのバッチタイミング分散",
    detail:
      "複数殺菌ラインを運用する場合、起動・運転タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を10〜18%削減した事例。",
  },
  {
    label: "コンプレッサー・ポンプの負荷追従",
    detail:
      "充填エア・原料移送ポンプのインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
  {
    label: "夏季ピーク・冬季ピーク双方の管理",
    detail:
      "発酵温度維持の冷房・暖房ピークが両季節で発生。夏季は事前生産＋冷蔵備蓄、冬季は熟成タンクの保温効率最適化で対応。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "調味料業向けで採択率が高い主力補助金。発酵タンク温度管理・加熱殺菌設備更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。長期発酵中の24h温度管理電力に対応。",
  },
  {
    name: "農林水産省 食品産業向け省エネ設備導入支援",
    target: "発酵タンク温度自動化・加熱殺菌高効率化・蒸気ボイラー転換",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "調味料業特有の補助制度。地場醤油蔵・味噌蔵での採択実績多数。",
  },
  {
    name: "中小企業庁 ものづくり補助金",
    target: "新製品開発・生産プロセス改善のための設備投資",
    rate: "1/2〜2/3、上限1,000万〜3,000万円",
    note: "中小調味料業者の生産設備更新で活用可能。電気代削減と生産性向上を同時実現。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ガスボイラー→電気ヒートポンプ転換、CO₂削減投資",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた加熱殺菌の電化や排熱発電で大型補助の対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク（冷房）と冬季ピーク（暖房）のどちらが大きいか把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "発酵タンク・熟成タンク・加熱殺菌ラインの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（500kW〜2MW）導入の試算を実施したか",
  "発酵タンクの温度管理自動化・IoT管理の導入余地を確認したか",
  "加熱殺菌設備のヒートポンプ化（ガス→電気）を検討したか",
  "デマンドコントローラー・冷却設備インバータ化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・農水補助・ものづくり補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "調味料業の電気代水準はどれくらいですか？", answer: "売上高比3〜7%、製造原価比5〜13%が業界平均。中規模調味料工場（年商200億円級）で年1.5〜7.5億円、大規模メーカー（年商500億円超）で年7.5〜30億円規模の電気代になります。" },
  { question: "醤油・味噌の長期熟成電力を削減するには？", answer: "①発酵タンク温度自動制御＋IoT管理（手動から自動化で電力▲10〜20%）、②熟成タンクの断熱性能改善、③冷却設備のインバータ化、④夏季・冬季のスケジュール最適化、⑤自家消費太陽光、の5本柱が効果的。投資回収は補助金活用で1〜3年が目安。" },
  { question: "ソース・ドレッシング工場の加熱殺菌電力対策は？", answer: "①加熱殺菌設備のヒートポンプ化（ガス→電気、効率3〜4倍）、②均質化機のインバータ化、③加熱・冷却サイクルの最適化、④排熱回収＋原料予熱化、⑤BEMSによる需要見える化、の5本柱が中心。GX補助で大型補助の対象になり得ます。" },
  { question: "調味料業の固定プランと市場連動プランどちらが向きますか？", answer: "長期発酵・熟成の24h温度管理が必須なため、固定プランが圧倒的に向きます。発酵タンクを停止できないため逃げ場がなく、市場高騰時のリスクが大きいです。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "発酵タンクの温度自動制御は投資回収できますか？", answer: "手動温度管理からIoT制御に切り替えることで電力▲10〜20%、中小醤油蔵で年100〜300万円削減。投資回収はSII＋農水補助活用で1〜2年が目安。品質安定化・歩留まり向上も同時達成できます。" },
  { question: "調味料業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、農林水産省食品産業向け補助、中小企業庁ものづくり補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は調味料工場で投資回収できますか？", answer: "屋根面積3,000m²以上、24h温度管理の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。長期熟成電力との同期も良好。" },
  { question: "地場醤油蔵・味噌蔵の小規模事業者でも電力契約見直しメリットはありますか？", answer: "高圧契約（150〜400kW）でも年間電気代1,500〜9,000万円規模になります。長期発酵中の24h温度管理電力が大きいため、新電力切替＋発酵タンク自動制御＋LED化の組合せで年10〜15%削減（年150〜1,350万円）が現実的。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本醤油協会", url: "https://www.soysauce.or.jp/" },
  { name: "全国味噌工業協同組合連合会", url: "https://miso.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function SeasoningElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/seasoning-electricity-cost-review"
        datePublished="2026-05-20"
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
          <span className="text-slate-800">調味料業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            調味料業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            調味料業（醤油・味噌・ソース・ドレッシング）は、長期発酵・熟成タンクの温度管理、加熱殺菌・冷却の連続稼働、充填・パッケージング設備など多面的な電力負荷を持つ業種です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>調味料業の電力使用プロファイル（発酵熟成／加熱殺菌／充填／原料加工）</li>
              <li>業界平均の電気代水準（売上高比3〜7%）と1リットルあたり単価</li>
              <li>長期発酵期間中の温度管理コストと自動制御の効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>発酵タンク温度自動化・加熱殺菌ヒートポンプ化の費用対効果</li>
              <li>SII・PPA・農水補助・ものづくり補助の組合せ活用</li>
              <li>調味料業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              調味料業の電力使用特性 — 発酵熟成・加熱殺菌の連続稼働
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業の電力使用は『発酵熟成タンク／濾過分離／加熱冷却／充填パッケージング／原料加工』の5層で構成されます。発酵熟成タンクの温度管理が工場全体の25〜40%を占め、業界特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜7%、製品1リットル0.2〜0.8 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業の電気代水準は製品種別（醤油／味噌／ソース／ドレッシング）と熟成期間の長さで大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本醤油協会・全国味噌工業協同組合連合会・経産省工業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              調味料業の主要な電気代上昇要因 — 燃料費・賦課金・長期発酵・両ピーク
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業の電気代上昇は、制度的要因（燃料費調整・賦課金・容量拠出金）と業界特有要因（長期発酵・両季節ピーク）が複合的に重なります。
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
              規模別の削減事例3件 — 小規模醤油蔵／中規模ソース／大規模調味料メーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              業種横断のコスト構造比較は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              長期発酵・両季節ピークのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業は夏季冷房・冬季暖房の両季節ピーク、長期発酵中の24h温度管理など、業種特有のデマンド管理戦略が効果的です。
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
              燃料費調整・市場連動プランの影響 — 長期発酵の24h温度管理が直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業は長期発酵・熟成タンクの24h温度管理が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>発酵タンク24h温度管理が必須</li>
                  <li>長期発酵（6ヶ月〜2年）の中断不可</li>
                  <li>調味料価格への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期に温度管理電力ピーク</li>
                  <li>発酵タンクを停止できないため逃げ場がない</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円の追加負担</li>
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
              再エネ賦課金の影響 — 大量使用業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。調味料業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模調味料工場（年2,200万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 7,678万円</li>
                  <li>2025年度（3.98円/kWh）：年 8,756万円（+1,078万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 9,900万円（+2,222万円）</li>
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
              調味料業特有の節電・省エネ施策 — 発酵自動化・加熱ヒートポンプ化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業の省エネは『発酵タンク温度自動制御』『加熱殺菌ヒートポンプ化』『均質化機インバータ化』『熟成タンク断熱改善』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">発酵タンク温度自動制御＋IoT管理</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲10〜20%（中小醤油蔵で年100〜300万円削減）</li>
                  <li>品質安定・歩留まり向上を同時達成</li>
                  <li>投資回収 SII＋農水補助活用で 1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">加熱殺菌ヒートポンプ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ガスボイラーから電気ヒートポンプへ転換</li>
                  <li>総合効率3〜4倍、電化＋脱炭素を実現</li>
                  <li>GX補助で大型補助の対象</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">均質化機・ポンプのインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電力▲20〜30%（中規模で年300〜500万円削減）</li>
                  <li>SII補助活用で投資回収 2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（500kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電</li>
                  <li>長期発酵電力との同期良好</li>
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
              補助金活用（業種別） — SII・PPA・農水補助・ものづくり補助・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業向けに活用しやすい補助金は5本柱。中小調味料業者でもものづくり補助金（補助率1/2〜2/3）の活用で投資回収を1〜2年短縮できます。
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
              調味料業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社調味料工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調味料業は長期発酵・両季節ピーク・加熱殺菌電力の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
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
              publishedAt="2026-05-20"
            />
            <GlossaryLinks currentSlug="seasoning-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "食品加工業一般の見直しポイント。" },
              { href: "/beverage-electricity-cost-review", title: "飲料業の電気料金見直し", description: "清涼飲料・酒類の電力対策。" },
              { href: "/confectionery-electricity-cost-review", title: "菓子業の電気料金見直し", description: "製菓・洋菓子・和菓子の電力対策。" },
              { href: "/dairy-electricity-cost-review", title: "乳製品業の電気料金見直し", description: "牛乳殺菌・チーズ熟成の電力対策。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "食品工場一般の見直しポイント。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "冷蔵庫の温度管理電力対策。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h温度管理法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "長期発酵法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "長期発酵電力との同期メリット。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "発酵設備・加熱殺菌設備の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "発酵24h稼働事業者のリスク。" },
            ]}
          />

          <ContentCta
            heading="自社の調味料工場条件でリスクを確認する"
            description="発酵タンク・加熱殺菌・冷却ラインの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。長期発酵電力との同期効果や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="調味料業の電力契約見直し、専門家に相談しませんか？"
            description="醤油・味噌・ソース・ドレッシングの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で調味料業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
