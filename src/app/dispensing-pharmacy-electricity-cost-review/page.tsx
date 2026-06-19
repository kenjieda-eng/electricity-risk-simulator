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
  "調剤薬局の電気料金見直しポイント｜冷所保管・自動分包機・店舗一括契約・BCPの最適化";
const pageDescription =
  "調剤薬局の電気料金見直しを解説。医薬品冷蔵庫（2〜8℃）、ワクチン冷凍庫（-20℃）、自動分包機、調剤監査システム、店舗一括契約、BCP、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "調剤薬局 電気料金 見直し",
    "薬局 電気代",
    "冷所保管 ワクチン 電力",
    "自動分包機 電気代",
    "薬局 BCP 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/dispensing-pharmacy-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/dispensing-pharmacy-electricity-cost-review",
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
    label: "医薬品冷蔵庫（2〜8℃保管）",
    detail:
      "調剤薬局の中核設備。インスリン製剤・生物学的製剤・各種注射剤等を2〜8℃で安定保管するための医薬品専用冷蔵庫。1店舗あたり1〜5台、合計0.5〜3kWの常時24h稼働。停止不可で温度逸脱は医薬品廃棄に直結。店舗電力の10〜20%を占める。",
  },
  {
    label: "ワクチン冷凍庫（-20℃〜-80℃保管）",
    detail:
      "ワクチン保管用の超低温冷凍庫。-20℃クラス（多くのワクチン用）、-80℃クラス（mRNAワクチン等用）。1台あたり0.3〜1.5kW、24h連続稼働。停電・故障時のBCPが極めて重要。",
  },
  {
    label: "自動分包機（一包化装置）",
    detail:
      "錠剤・散薬の自動分包装置。1台あたり0.5〜2kW、稼働時の瞬間ピーク負荷あり。中規模店舗で1〜3台、大手チェーンでは全店標準装備。店舗のピーク電力の決定要因の一つ。",
  },
  {
    label: "調剤監査システム・電子薬歴・PC・サーバー",
    detail:
      "電子薬歴・処方鑑査システム・レセコン・PC・サーバー類の合計1〜3kW。営業時間中の連続稼働。電子化進展で店舗あたり消費電力は増加傾向。",
  },
  {
    label: "店内空調・照明",
    detail:
      "店内空調（業務用エアコン）と店内LED照明。1店舗あたり総設備5〜15kWで営業時間中（9-20時程度）連続稼働。薬剤師の作業環境確保のため適切な温湿度管理が必須。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本薬剤師会・日本保険薬局協会・厚労省衛生統計によれば、調剤薬局の電気料金は売上高の0.5〜1.5%（処方箋ベース売上に対して低水準）。事業原価に占める比率は2〜5%。冷所保管24h稼働とBCP（停電時の医薬品保護）が業種固有のコスト構造を形成。",
  },
  {
    label: "店舗1店舗あたりの電力使用量",
    detail:
      "小規模単独店で1店舗年2〜5万 kWh、中規模10店舗チェーンで1店舗年3〜6万 kWh、大規模チェーンの大型店で1店舗年5〜10万 kWhが業界平均。冷所保管設備の数とPC・分包機の稼働で変動。",
  },
  {
    label: "店舗・チェーン規模別の年間使用量",
    detail:
      "小規模単独店（年商1〜3億円）で年間2〜5万 kWh、中規模10店舗（年商20〜50億円）で年間30〜50万 kWh、大規模チェーン500店舗超（年商1,000億円超）で本部含む年間2,500万〜5,000万 kWh。小〜中規模は低圧、大手チェーン本部は特別高圧契約も。",
  },
];

const costFactors = [
  {
    label: "冷所保管24h連続稼働のベースロード",
    detail:
      "医薬品冷蔵庫・ワクチン冷凍庫は24h停止不可。月間使用量に占める比率が高く、燃料費調整額1円/kWhの変動でも中規模チェーン（月3万kWh）で月3万円の差、年間36万円規模のインパクト。",
  },
  {
    label: "自動分包機のピーク負荷",
    detail:
      "自動分包機の同時起動で店舗ピーク電力（デマンド）が跳ね上がる。デマンド料金（基本料金）の決定要因となり、店舗単位で月数千〜数万円の差を生む。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間30万kWh使用の中規模10店舗チェーンで年125.4万円超の負担。500店舗超チェーンでは負担額が請求総額の10〜15%に達する。",
  },
  {
    label: "BCP（停電時の医薬品保護）対応コスト",
    detail:
      "停電時の医薬品冷蔵庫・ワクチン冷凍庫保護のため、UPS・蓄電池・非常用発電機の導入が必須。BCP投資の電力契約への影響（容量増・予備電源等）も考慮が必要。",
  },
  {
    label: "店舗一括契約の規模メリット",
    detail:
      "10店舗超のチェーンでは本部一括電力契約で年数百万〜数千万円規模の削減事例あり。500店舗超チェーンでは年1〜3億円規模の削減ポテンシャル。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模単独店（年商1〜3億円、薬剤師2〜5名）",
    profile: "門前薬局・地域密着型／低圧 20〜50kW／年間 2〜5万 kWh",
    annualCost: "年間電気代 70万〜200万円",
    note: "LED化・高効率エアコン更新・冷蔵庫更新・新電力切替で年8〜12%削減事例。",
  },
  {
    size: "中規模10店舗チェーン（年商20〜50億円）",
    profile: "地域チェーン薬局・複数店展開／低圧合計 300〜500kW／年間 30〜50万 kWh",
    annualCost: "年間電気代 1,000万〜1,800万円",
    note: "本部一括契約＋高効率冷蔵庫更新＋LED統一＋新電力切替で年12〜18%削減事例。",
  },
  {
    size: "大規模チェーン500店舗超（年商1,000億円超）",
    profile: "全国大手調剤チェーン（アインHD・日本調剤等）／特別高圧本部＋多数店舗／年間 2,500万〜5,000万 kWh",
    annualCost: "年間電気代 8.5億〜18億円",
    note: "本部特別高圧契約＋長期固定＋全店LED統一＋冷蔵庫高効率化＋BCP統合＋PPAで年10〜15%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模調剤薬局の年間10%削減（Before/After）",
    before: "都内の門前薬局A店（低圧 30kW、年間 3.5万 kWh、年間電気代 130万円）。電力会社デフォルトプラン、医薬品冷蔵庫15年経過、空調10年経過、白熱灯・蛍光灯混在。",
    after: "新電力切替（固定3年）／LED全面更新／高効率エアコン更新／医薬品冷蔵庫の最新省エネ型更新（補助1/3活用）／自動分包機の使用時間平準化／UPS導入（BCP対応）。",
    result: "年間電気代 130万円 → 117万円（▲10%、▲13万円）／契約 kW 30→25／投資回収 補助金後 3年",
  },
  {
    title: "事例2：中規模10店舗チェーンの年間16%削減",
    before: "関東で10店舗を運営する地域チェーン薬局B社（合計低圧 400kW、年間 40万 kWh、年間電気代 1,400万円）。各店個別契約継続、店舗毎の契約条件バラつき、自動分包機同時起動でデマンドピーク高止まり。",
    after: "本部一括契約への切替（固定3年）／LED全面更新／高効率エアコン更新／医薬品冷蔵庫の最新省エネ型統一更新／ワクチン冷凍庫の高効率モデル更新／デマンドコントローラー各店設置／BEMS導入／非常用発電機＋蓄電池でBCP統合。",
    result: "年間電気代 1,400万円 → 1,176万円（▲16%、▲224万円）／契約 kW 400→335／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：500店舗チェーンの年間1.7億円削減",
    before: "全国500店舗大手調剤チェーンC社（本部含む合計特別高圧 5,000kW、年間 3,500万 kWh、年間電気代 12.25億円）。各店個別契約継続、店舗毎の契約条件バラつき。",
    after: "本部特別高圧契約への集約／長期5年固定プラン／全店LED統一・高効率エアコン更新／医薬品冷蔵庫・ワクチン冷凍庫の最新省エネ型統一更新／自家消費太陽光（本部物流センター＋大型店30店、合計2MW）／DR契約締結／BEMS全店標準化／BCP統合（非常用発電機＋蓄電池）／需要家主導型PPA。",
    result: "年間電気代 12.25億円 → 10.5億円（▲14%、▲1.75億円）／契約 kW 5,000→4,300／投資回収 補助金後 4.5年／CO₂削減 約4,000 t/年",
  },
];

const demandManagement = [
  {
    label: "医薬品冷蔵庫・ワクチン冷凍庫の高効率モデル更新",
    detail:
      "10〜15年経過の医薬品冷蔵庫・ワクチン冷凍庫は最新省エネ型への更新で消費電力▲30〜50%。BCP（停電耐性）強化と組合せた更新が推奨される。",
  },
  {
    label: "自動分包機の使用時間平準化",
    detail:
      "自動分包機の同時起動を避けるための稼働時間設定・予約管理。デマンドピーク▲5〜10%。",
  },
  {
    label: "BCP統合（UPS・蓄電池・非常用発電機）",
    detail:
      "停電時の医薬品冷蔵庫・ワクチン冷凍庫保護のため、UPS・蓄電池・非常用発電機の統合導入。蓄電池はピークカットにも活用可能で電力契約最適化に貢献。",
  },
  {
    label: "多店舗チェーンの本部一括契約",
    detail:
      "10店舗超のチェーンで本部一括契約により、店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮可能。500店舗超では年1〜3億円の削減ポテンシャル。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "業務用エアコン更新・LED化・高効率医薬品冷蔵庫",
    rate: "中小1/2、大企業1/3、上限機種別",
    note: "調剤薬局の主力補助金。冷蔵庫・空調更新で採択事例多数。",
  },
  {
    name: "厚労省 医療提供体制推進事業費補助金",
    target: "ワクチン冷凍庫・BCP対応設備（UPS・非常用発電機）",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "BCP・ワクチン保管に特化した厚労省の制度。コロナ禍以降採択実績多数。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光補助金",
    target: "屋根設置型自家消費太陽光・蓄電池",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "本部物流センター・大型店の屋根面積を活用した大手チェーン向け。",
  },
  {
    name: "中小企業向け 省エネ支援補助金",
    target: "LED化・空調更新・冷蔵庫更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "個人店・中小チェーンで活用しやすい中小事業者向け制度。",
  },
  {
    name: "自治体独自の省エネ補助金",
    target: "LED・空調・冷蔵庫更新",
    rate: "自治体ごとに異なる（1/3〜1/2）",
    note: "都道府県・市区町村の独自制度。中小薬局で活用しやすい。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "医薬品冷蔵庫・ワクチン冷凍庫の電力使用量を24h時系列で把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "冷所保管設備・自動分包機・PC/サーバー・空調・照明の電力プロファイルを把握しているか",
  "医薬品冷蔵庫・ワクチン冷凍庫の最新省エネ型更新の投資回収試算を実施したか",
  "LED化・高効率エアコン更新の投資回収試算を実施したか",
  "UPS・蓄電池・非常用発電機のBCP統合を検討したか",
  "自動分包機の使用時間平準化を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多店舗チェーンの場合、本部一括契約への切替を検討したか",
  "SII・厚労省BCP補助・自家消費太陽光補助・自治体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "調剤薬局の電気代水準はどれくらいですか？", answer: "売上高比0.5〜1.5%（処方箋ベース売上に対して低水準）、事業原価比2〜5%が業界平均。中規模10店舗チェーン（年商30億円級）で年1,000〜1,800万円、500店舗超大手チェーン（年商1,000億円超）で年8.5〜18億円規模の電気代になります。" },
  { question: "医薬品冷蔵庫・ワクチン冷凍庫の電気代を削減するには？", answer: "①最新省エネ型への更新（消費電力▲30〜50%）、②扉開閉頻度の削減、③庫内整理による効率化、④温度設定の適正化、⑤BCP統合（停電時保護）の5本柱が中心。投資回収はSII＋厚労省補助で2〜3年が目安です。" },
  { question: "停電時の医薬品保護（BCP）はどう備える？", answer: "①UPS（短時間バックアップ）、②蓄電池（中時間バックアップ）、③非常用発電機（長時間バックアップ）の3層構成が推奨。蓄電池はピークカットにも活用可能で投資効率が高い。厚労省BCP補助金の活用で投資負担を軽減できます。" },
  { question: "調剤薬局の固定プランと市場連動プランどちらが向きますか？", answer: "冷所保管24h連続稼働、医薬品保管温度逸脱の許容ゼロという条件下では、固定プランが圧倒的に向きます。市場連動プランは2022〜2023年の市場高騰局面で店舗単位で月数万円の追加負担事例あり、安定運営の観点でも固定プラン推奨です。" },
  { question: "自動分包機のピーク電力を抑えるには？", answer: "①稼働時間の予約管理（同時起動回避）、②デマンドコントローラー導入、③処方箋集中時間帯（昼休み明け等）の運用見直し、④BEMSによる電力使用パターン可視化、⑤待機電力削減の5本柱が中心。中規模店で年5〜20万円の削減が目安。" },
  { question: "調剤薬局向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、厚労省医療提供体制推進事業費補助金、需要家主導型PPA補助、中小企業向け省エネ支援補助金、自治体独自補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "500店舗超チェーンで本部一括契約のメリットは？", answer: "店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮、新電力相見積の交渉力大幅向上、契約管理工数の削減、サスティナビリティ報告の集約化が可能。500店舗で年1.5〜2億円規模の削減事例があります。" },
  { question: "自家消費型太陽光は調剤薬局で投資回収できますか？", answer: "単独店の屋根面積では投資効率が低いですが、大手チェーン本部物流センター・大型店の活用は導入余地あり。2MW規模で年200〜260万kWh発電、年2,000〜2,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本薬剤師会", url: "https://www.nichiyaku.or.jp/" },
  { name: "日本保険薬局協会（NPhA）", url: "https://www.npha.jp/" },
  { name: "厚生労働省 衛生統計", url: "https://www.mhlw.go.jp/toukei/list/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function DispensingPharmacyElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/dispensing-pharmacy-electricity-cost-review"
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
          <span className="text-slate-800">調剤薬局の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            調剤薬局の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            調剤薬局は、医薬品冷蔵庫（2〜8℃）、ワクチン冷凍庫（-20℃〜-80℃）、自動分包機、調剤監査システム、店内空調・照明など多面的な電力負荷を持ち、冷所保管温度管理の停止不可性とBCP（停電時の医薬品保護）が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>調剤薬局の電力使用プロファイル（冷所保管／自動分包機／PC・サーバー／空調／照明）</li>
              <li>業界平均の電気代水準（売上高比0.5〜1.5%）と1店舗あたり単価</li>
              <li>医薬品冷蔵庫・ワクチン冷凍庫の最新省エネ型更新の費用対効果</li>
              <li>規模別（単独店・10店舗・500店舗超チェーン）の電気代と削減事例3件（Before/After）</li>
              <li>BCP統合（UPS・蓄電池・非常用発電機）の論点</li>
              <li>SII・厚労省BCP補助・自家消費太陽光・自治体補助の組合せ活用</li>
              <li>調剤薬局向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              調剤薬局の電力使用特性 — 医薬品冷蔵庫・分包機・PC・空調
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局の電力使用は『医薬品冷蔵庫／ワクチン冷凍庫／自動分包機／PC・サーバー／店内空調・照明』の5層で構成されます。冷所保管24h連続稼働と自動分包機ピーク負荷が業種特有のコスト構造を形成します。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比0.5〜1.5%、1店舗あたり2〜10万 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局の電気代水準は冷所保管設備の数と店舗規模で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本薬剤師会・日本保険薬局協会・厚労省衛生統計から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              調剤薬局の主要な電気代上昇要因 — 冷所保管・分包機・BCP・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局の電気代上昇は、冷所保管24h連続稼働のベースロード、自動分包機のピーク負荷、再エネ賦課金の年次上昇、BCP対応コスト、多店舗一括契約の規模メリットが複合的に重なります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              規模別の削減事例3件 — 単独店／10店舗チェーン／500店舗大手チェーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/drugstore-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ドラッグストアの電気料金見直し</Link>
              、{" "}
              <Link href="/clinic-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">クリニックの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              冷所保管・分包機のデマンド管理とBCP統合
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局は医薬品冷蔵庫・ワクチン冷凍庫の高効率化、自動分包機の使用時間平準化、BCP統合（UPS・蓄電池・非常用発電機）、多店舗本部一括契約など、業種特有のデマンド管理戦略が極めて効果的です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              燃料費調整・市場連動プランの影響 — 冷所保管24h稼働の安定運営
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局は冷所保管24h連続稼働、医薬品保管温度逸脱の許容ゼロという条件下では、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>冷所保管24h稼働必須</li>
                  <li>温度逸脱が医薬品廃棄に直結</li>
                  <li>処方箋単価への即時転嫁が困難</li>
                  <li>多店舗管理で予実管理が重要</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に冷蔵庫負荷増</li>
                  <li>日中ピーク時に分包機・空調集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で店舗単位で月数万円の追加負担</li>
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
              再エネ賦課金の影響 — 冷所保管24h業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。調剤薬局の大手チェーンでは負担額が請求総額の10〜15%に達します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模10店舗チェーン（年40万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 140万円</li>
                  <li>2025年度（3.98円/kWh）：年 159万円（+19万円）</li>
                  <li>2026年度（4.18円/kWh）：年 167.2万円（+27.2万円）</li>
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
              調剤薬局特有の節電・省エネ施策 — 冷蔵庫・分包機・BCP・本部一括
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局の省エネは『医薬品冷蔵庫・ワクチン冷凍庫の高効率モデル更新』『自動分包機の使用時間平準化』『LED全面更新』『BCP統合（蓄電池ピークカット）』『多店舗本部一括契約』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">冷蔵庫・冷凍庫の高効率モデル更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>最新省エネ型で消費電力▲30〜50%</li>
                  <li>BCP耐性強化と組合せ</li>
                  <li>SII＋厚労省補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自動分包機の使用時間平準化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>稼働時間予約管理</li>
                  <li>デマンドピーク▲5〜10%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">BCP統合（蓄電池ピークカット）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>停電時の医薬品冷蔵庫保護</li>
                  <li>蓄電池はピークカットにも活用</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">多店舗チェーン本部一括契約</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>本部一括契約で単価▲5〜10%</li>
                  <li>500店舗で年1.5〜2億円の削減事例</li>
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
              補助金活用（業種別） — SII・厚労省BCP・PPA・中小企業補助・自治体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局向けに活用しやすい補助金は5本柱。医薬品冷蔵庫更新＋BCP統合はSII＋厚労省BCP補助＋自治体補助の組合せで補助率を最大化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              調剤薬局に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社調剤薬局の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調剤薬局は冷所保管24h連続稼働・BCP対応必須・燃料費調整変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>冷所保管24h稼働の電気代影響額を試算する</li>
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
            <GlossaryLinks currentSlug="dispensing-pharmacy-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/drugstore-electricity-cost-review", title: "ドラッグストアの電気料金見直し", description: "医薬品取扱いと冷蔵保管が共通。" },
              { href: "/clinic-electricity-cost-review", title: "クリニックの電気料金見直し", description: "医療業として共通の論点。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "医療業として共通の論点。" },
              { href: "/nursing-care-facility-electricity-cost-review", title: "介護施設の電気料金見直し", description: "BCP・冷所保管として共通の論点。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "多店舗FC運営として共通の論点。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店の電気料金見直し", description: "店舗運営として共通の論点。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h冷所保管法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "薬局が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "大手チェーン本部・大型店の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "冷蔵庫・LED更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "冷所保管事業者のリスク。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "月次変動の根本要因。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "年次上昇の負担額試算。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "自動分包機ピーク管理の基本。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の調剤薬局条件でリスクを確認する"
            description="医薬品冷蔵庫・ワクチン冷凍庫・自動分包機・PC/サーバー・空調の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。BCP統合後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="調剤薬局の電力契約見直し、専門家に相談しませんか？"
            description="医薬品冷蔵庫・ワクチン冷凍庫・自動分包機・BCP対応の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で調剤薬局事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
