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
  "コインランドリーの電気料金見直しポイント｜24h無人稼働・大型乾燥機ガス併用・多店舗一括契約の最適化";
const pageDescription =
  "コインランドリーの電気料金見直しを解説。大型乾燥機（ガス併用vs電気）、洗濯機、看板照明24h、両替機・POS、多店舗オペレーター一括契約、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "コインランドリー 電気料金 見直し",
    "コインランドリー 電気代",
    "乾燥機 ガス 電気 コスト比較",
    "コインランドリー 補助金",
    "多店舗 一括契約",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/coin-laundry-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/coin-laundry-electricity-cost-review",
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
    label: "大型乾燥機（ガス・電気併用）",
    detail:
      "コインランドリーの中核設備。1台あたりガス式7〜15kW相当（プラス補機の電力1〜3kW）、電気式8〜20kW。1店舗あたり乾燥機5〜15台。ガス式の場合は主に補機電力（送風・回転）、電気式の場合は加熱主体で消費が大きい。土日に集中稼働。",
  },
  {
    label: "業務用洗濯機（大型ドラム）",
    detail:
      "業務用大型洗濯機1台あたり2〜5kW、1店舗あたり5〜10台。バッチ単位で起動するため瞬間ピーク電力の要因。給湯（電気給湯器併用）の電力も含まれる。",
  },
  {
    label: "看板照明・店内照明（24h点灯）",
    detail:
      "24h営業のための看板照明・店内LED照明。1店舗あたり総設備1〜5kW、24時間連続稼働。LED化済みでも24h点灯のため年間電力消費は無視できない（年8,000〜40,000 kWh）。",
  },
  {
    label: "個室空調・店内空調（24h稼働）",
    detail:
      "店内空調は24h稼働の場合あり。1店舗あたり総設備3〜15kW、夏季・冬季の負荷が大きい。深夜・早朝の利用客減少時の制御がコスト最適化の鍵。",
  },
  {
    label: "両替機・POS・防犯カメラ・自販機",
    detail:
      "両替機（紙幣識別の電力）、POS・キャッシュレス決済端末、24h稼働の防犯カメラ・録画機、店内自販機・洗剤販売機等の合計1〜3kW。常時稼働で店舗のベースロードを形成。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全国コインランドリー連合会・経産省商業統計によれば、コインランドリー業の電気料金は売上高の8〜18%（電気式乾燥機中心の店舗で最高水準）。事業原価に占める比率は15〜30%。24h無人稼働と乾燥機ガス併用vs電気のコスト比較が業種固有のコスト構造を形成。",
  },
  {
    label: "店舗1店舗あたりの電力使用量",
    detail:
      "ガス併用型店舗で1店舗年4〜10万 kWh、電気式中心店舗で1店舗年8〜20万 kWhが業界平均。乾燥機の方式（ガス／電気）と店舗規模で大きく変動。多店舗オペレーター（50店舗超）では店舗別ばらつきの管理が重要。",
  },
  {
    label: "店舗・チェーン規模別の年間使用量",
    detail:
      "小規模店（年商800〜2,000万円、洗濯機5〜10台）で年間4〜10万 kWh、中規模FC（年商2,000〜5,000万円、洗濯機15〜20台）で年間10〜18万 kWh、多店舗オペレーター（20〜50店舗合計）で年間200万〜1,000万 kWh。小〜中規模は低圧、多店舗オペレーターは高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "24h無人稼働のベースロード",
    detail:
      "看板照明・空調・防犯カメラ・POSが24h連続稼働。月間使用量が積み上がり、燃料費調整額1円/kWhの変動でも中規模FC（月1万kWh）で月1万円、多店舗オペレーターでは月数十万円規模の差。",
  },
  {
    label: "土日ピーク利用のデマンドピーク",
    detail:
      "土日に乾燥機・洗濯機の稼働が集中し、店舗ピーク電力（デマンド）が大きく跳ね上がる。デマンド料金（基本料金）の決定要因となり、店舗単位で月数千〜数万円の差を生む。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間15万kWh使用の中規模FCで年62.7万円超の負担。多店舗オペレーターでは負担額が請求総額の10〜15%に達する。",
  },
  {
    label: "乾燥機ガス併用vs電気のコスト比較",
    detail:
      "ガス式乾燥機（主に補機電力）とフル電気式乾燥機ではエネルギーコストが大きく異なる。電気料金とガス料金の単価変動・契約形態で最適選択が変動する。新規出店・更新時の判断要素。",
  },
  {
    label: "多店舗一括契約の規模メリット",
    detail:
      "20店舗以上の多店舗オペレーターでは本部一括電力契約で年数百万〜数千万円規模の削減事例あり。個店毎契約より新電力相見積で大幅な単価交渉力を獲得できる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模店（洗濯機5〜10台、年商800〜2,000万円）",
    profile: "個人経営・地域単独店／低圧 20〜50kW／年間 4〜10万 kWh",
    annualCost: "年間電気代 130万〜400万円",
    note: "LED化・空調制御・新電力切替・深夜照明調整で年8〜12%削減事例。",
  },
  {
    size: "中規模FC（洗濯機15〜20台、年商2,000〜5,000万円）",
    profile: "FC加盟店・都市部・洗剤販売併設／低圧 50〜80kW／年間 10〜18万 kWh",
    annualCost: "年間電気代 330万〜700万円",
    note: "デマンドコントローラー＋空調最適化＋PC省電力設定＋新電力切替で年10〜15%削減事例。",
  },
  {
    size: "多店舗オペレーター（20〜50店舗、年商5〜25億円）",
    profile: "フランチャイズ本部・全国チェーン／高圧合計 200〜800kW／年間 200万〜1,000万 kWh",
    annualCost: "年間電気代 6,500万〜3.5億円",
    note: "本部一括電力契約＋長期固定＋全店LED統一＋空調制御＋自家消費太陽光（屋上）で年12〜18%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模コインランドリーの年間10%削減（Before/After）",
    before: "地方都市のコインランドリーA店（洗濯機6台・乾燥機8台、低圧 40kW、年間 6万 kWh、年間電気代 220万円）。電力会社デフォルトプラン、空調12年経過、白熱灯・蛍光灯混在、看板照明24h点灯。",
    after: "新電力切替（固定3年）／LED全面更新／高効率エアコン更新（補助1/3活用）／深夜・早朝の店内空調セットバック制御／看板照明の明るさ調整（深夜帯減光）／デマンドコントローラー導入。",
    result: "年間電気代 220万円 → 198万円（▲10%、▲22万円）／契約 kW 40→32／投資回収 補助金後 3年",
  },
  {
    title: "事例2：中規模FCコインランドリーの年間13%削減",
    before: "関東のコインランドリーFC加盟店B店（洗濯機18台・乾燥機20台、低圧 70kW、年間 14万 kWh、年間電気代 480万円）。市場連動プランで2022〜2023年に月最大15万円の追加負担。土日ピーク時のデマンド高止まり。",
    after: "固定3年プラン切替／LED全面更新／高効率エアコン更新／深夜・早朝の店内空調セットバック制御／看板照明の明るさ調整／防犯カメラの最新省電力モデル更新／デマンドコントローラー設置／BEMS導入。",
    result: "年間電気代 480万円 → 418万円（▲13%、▲62万円）／契約 kW 70→58／投資回収 補助金後 3年",
  },
  {
    title: "事例3：30店舗オペレーターの年間2,800万円削減",
    before: "全国30店舗のコインランドリーオペレーターC社（合計高圧 600kW、年間 500万 kWh、年間電気代 1.75億円）。各店個別契約継続、店舗毎の契約条件バラつき。",
    after: "本部一括電力契約の締結／長期5年固定プラン／全店LED統一・高効率エアコン更新／本部に集約した新電力相見積（10社）／自家消費太陽光（10店舗屋上、合計500kW）／DR契約締結／BEMS全店標準化／深夜帯の空調・照明制御の全店展開／ガス乾燥機・電気乾燥機の最適配置見直し。",
    result: "年間電気代 1.75億円 → 1.47億円（▲16%、▲2,800万円）／契約 kW 600→510／投資回収 補助金後 4年／CO₂削減 約1,200 t/年",
  },
];

const demandManagement = [
  {
    label: "深夜・早朝の店内空調・照明セットバック制御",
    detail:
      "深夜・早朝の利用客減少時間帯（2-6時）に店内空調・看板照明を弱め制御することでコスト削減。年5〜10%の電力削減効果あり、利用客の利便性とのバランスが重要。",
  },
  {
    label: "ガス乾燥機vs電気乾燥機の最適配置",
    detail:
      "電気料金とガス料金の単価動向に応じて、新規出店時に乾燥機方式を選択。多店舗オペレーターは店舗ごとに最適配置を見直すことで年5〜10%のコスト削減。",
  },
  {
    label: "土日ピーク時のデマンド管理",
    detail:
      "土日のピーク時に乾燥機の連続起動を回避するため、デマンドコントローラー＋顧客誘導表示を組合せ。店舗ピーク電力▲10〜15%。",
  },
  {
    label: "多店舗オペレーターの本部一括契約",
    detail:
      "20店舗超のオペレーターで本部一括契約により、店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "業務用エアコン更新・LED化・高効率乾燥機",
    rate: "中小1/2、大企業1/3、上限機種別",
    note: "コインランドリーの主力補助金。高効率エアコン更新で採択事例多数。",
  },
  {
    name: "中小企業向け 省エネ支援補助金",
    target: "LED化・空調更新・乾燥機更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "個人店・FC加盟店で活用しやすい中小事業者向け制度。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光補助金",
    target: "屋根設置型自家消費太陽光・蓄電池",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "多店舗オペレーターの店舗屋上活用に向く。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新乾燥機・洗濯機の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "コインランドリー事業者で採択実績あり。設備更新のタイミングで活用。",
  },
  {
    name: "自治体独自の省エネ補助金",
    target: "LED・空調・乾燥機更新",
    rate: "自治体ごとに異なる（1/3〜1/2）",
    note: "都道府県・市区町村の独自制度。中小店で活用しやすい。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "24h無人稼働の電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "大型乾燥機・洗濯機・看板照明・店内空調・両替機の電力プロファイルを把握しているか",
  "深夜・早朝の店内空調・照明セットバック制御の効果を試算したか",
  "ガス乾燥機vs電気乾燥機の最適配置を試算したか",
  "LED化・高効率エアコン更新の投資回収試算を実施したか",
  "土日ピーク時のデマンド管理を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多店舗オペレーターの場合、本部一括契約への切替を検討したか",
  "SII・自家消費太陽光補助・ものづくり補助・自治体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "コインランドリーの電気代水準はどれくらいですか？", answer: "売上高比8〜18%（電気式乾燥機中心の店舗で最高水準）、事業原価比15〜30%が業界平均。中規模FC加盟店（年商3,000万円級）で年330〜700万円、30店舗オペレーター（年商10億円超）で年6,500万〜3.5億円規模の電気代になります。" },
  { question: "ガス乾燥機と電気乾燥機どちらが電気代有利？", answer: "ガス乾燥機は主に補機電力（送風・回転）で電力消費が小さいですが、ガス料金がかかります。電気乾燥機は加熱主体で電力消費が大きい。電気料金とガス料金の単価動向で逆転するため、新規出店・更新時に最適配分を試算する必要があります。" },
  { question: "深夜・早朝の照明制御は売上に影響しませんか？", answer: "完全消灯は防犯・利便性に影響するため不可ですが、深夜帯（2-6時）の看板照明明るさ調整・店内空調セットバックは利用客の利便性を維持しつつコスト削減可能。年5〜10%の電力削減効果あり。" },
  { question: "コインランドリーの固定プランと市場連動プランどちらが向きますか？", answer: "24h無人稼働で全時間帯に電力消費がある業種では、市場連動プランは2022〜2023年の市場高騰局面で月最大15万円の追加負担事例あり。固定プランが原則向きます。多店舗オペレーターでは長期固定が更に推奨されます。" },
  { question: "土日ピーク時のデマンドを抑えるには？", answer: "①デマンドコントローラー導入、②顧客誘導表示でピーク時間帯の利用分散、③乾燥機の連続起動回避、④店内空調セットバック制御、⑤BEMS導入の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "コインランドリー向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、中小企業向け省エネ支援補助金、需要家主導型PPA補助、ものづくり補助金、自治体独自補助の5本柱。エアコン＋LED＋乾燥機更新の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "20店舗超オペレーターで本部一括契約のメリットは？", answer: "店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮、新電力相見積の交渉力大幅向上、契約管理工数の削減、サスティナビリティ報告の集約化が可能。30店舗で年2,000万〜3,000万円規模の削減事例があります。" },
  { question: "自家消費型太陽光はコインランドリーで投資回収できますか？", answer: "単独店の屋根面積では投資効率が低いですが、多店舗オペレーターの大型店屋上活用は導入余地あり。500kW規模（10店舗合計）で年50〜70万kWh発電、年500〜700万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全国コインランドリー連合会", url: "https://coin-laundry.or.jp/" },
  { name: "経済産業省 商業統計", url: "https://www.meti.go.jp/statistics/tyo/syougyo/index.html" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function CoinLaundryElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/coin-laundry-electricity-cost-review"
        datePublished="2026-05-26"
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
          <span className="text-slate-800">コインランドリーの見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            コインランドリーの電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            コインランドリーは、大型乾燥機（ガス・電気併用）、業務用洗濯機のバッチ稼働、24h看板照明、店内空調、両替機・POS・防犯カメラなど多面的な電力負荷を持ち、24h無人稼働と多店舗一括契約が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>コインランドリーの電力使用プロファイル（乾燥／洗濯／看板照明／空調／両替）</li>
              <li>業界平均の電気代水準（売上高比8〜18%）と1店舗あたり単価</li>
              <li>深夜・早朝の照明制御・空調セットバックの費用対効果</li>
              <li>規模別（小・中・多店舗オペレーター）の電気代と削減事例3件（Before/After）</li>
              <li>ガス乾燥機vs電気乾燥機の最適配置判断</li>
              <li>SII・中小企業補助・自家消費太陽光・ものづくり補助・自治体補助の組合せ活用</li>
              <li>コインランドリー向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              コインランドリーの電力使用特性 — 乾燥機・洗濯機・看板照明・空調・両替機
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーの電力使用は『大型乾燥機（ガス・電気併用）／業務用洗濯機／看板照明24h／店内空調／両替機・POS・防犯カメラ』の5層で構成されます。24h無人稼働と土日ピーク利用が最大消費要素で業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比8〜18%、1店舗あたり4〜20万 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーの電気代水準は乾燥機方式（ガス／電気）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全国コインランドリー連合会・経産省商業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              コインランドリーの主要な電気代上昇要因 — 24h無人稼働・乾燥機・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーの電気代上昇は、24h無人稼働のベースロード、土日ピーク利用のデマンドピーク、ガス併用vs電気のコスト比較、再エネ賦課金の年次上昇、多店舗一括契約の規模メリットが複合的に重なります。
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
              規模別の削減事例3件 — 小規模店／中規模FC／多店舗オペレーター
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーの電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/dry-cleaning-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">クリーニング店の電気料金見直し</Link>
              、{" "}
              <Link href="/convenience-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コンビニの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              乾燥機・看板照明のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーは深夜・早朝の店内空調・照明セットバック、ガス/電気乾燥機の最適配置、土日ピーク時のデマンド管理、多店舗本部一括契約など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h無人稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーは24h無人稼働で全時間帯に電力消費があるため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h無人稼働で全時間帯に消費</li>
                  <li>防犯・看板で照明停止困難</li>
                  <li>料金単価への即時転嫁が困難</li>
                  <li>多店舗管理で予実管理が重要</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調連続稼働</li>
                  <li>土日ピーク時に乾燥機集中稼働</li>
                  <li>JEPX 80円/kWh級の高騰局面で店舗単位で月10万円超の追加負担</li>
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
              再エネ賦課金の影響 — 24h無人稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。コインランドリーの多店舗オペレーターでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">30店舗オペレーター（年500万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1,745万円</li>
                  <li>2025年度（3.98円/kWh）：年 1,990万円（+245万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 2,250万円（+505万円）</li>
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
              コインランドリー特有の節電・省エネ施策 — 深夜照明・空調・LED・本部一括
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーの省エネは『深夜・早朝の空調・照明セットバック』『LED全面更新』『ガス/電気乾燥機の最適配置』『デマンドコントローラー＋BEMS』『多店舗本部一括契約』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">深夜・早朝の空調・照明セットバック</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2-6時の店内空調・看板減光制御</li>
                  <li>店舗電力▲5〜10%</li>
                  <li>SII＋自治体補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED全面更新・看板照明</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蛍光灯→LEDで照明電力▲50〜70%</li>
                  <li>看板24h点灯のため投資効果大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ガス/電気乾燥機の最適配置</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気・ガス単価動向に応じた最適選択</li>
                  <li>年5〜10%のコスト削減効果</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">多店舗オペレーター本部一括契約</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>本部一括契約で単価▲5〜10%</li>
                  <li>30店舗で年2,000万〜3,000万円の削減事例</li>
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
              補助金活用（業種別） — SII・中小企業補助・PPA・ものづくり・自治体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリー向けに活用しやすい補助金は5本柱。エアコン＋LED＋乾燥機更新はSII＋中小企業補助＋自治体補助の組合せで補助率を最大化できます。
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
              コインランドリーに合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社コインランドリー店舗の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コインランドリーは24h無人稼働ベースロード・土日ピーク利用・燃料費調整変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>24h無人稼働の電気代影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した10〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-26"
            />
            <GlossaryLinks currentSlug="coin-laundry-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/dry-cleaning-electricity-cost-review", title: "クリーニング店の電気料金見直し", description: "乾燥機が共通要素。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "24h無人運営として共通の論点。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店の電気料金見直し", description: "店舗運営として共通の論点。" },
              { href: "/single-restaurant-electricity-cost-review", title: "単独飲食店の電気料金見直し", description: "小規模店舗として共通の論点。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "外食チェーンの電気料金見直し", description: "多店舗FC運営として共通の論点。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "小規模事業所として共通。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "24h無人運営が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "多店舗オペレーターの投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "エアコン・LED更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "24h無人稼働事業者のリスク。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "月次変動の根本要因。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "年次上昇の負担額試算。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "土日ピーク管理の基本。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機（自社条件で年間電気代を試算）", description: "業種・規模・契約・エリアを入力するだけで推定年間電気代と削減余地3案を即時表示します。" },
            ]}
          />

          <ContentCta
            heading="自社のコインランドリー店舗条件でリスクを確認する"
            description="大型乾燥機・洗濯機・看板照明・店内空調・両替機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。本部一括契約後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="コインランドリーの電力契約見直し、専門家に相談しませんか？"
            description="大型乾燥機・洗濯機・看板照明・店内空調の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でコインランドリー事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
