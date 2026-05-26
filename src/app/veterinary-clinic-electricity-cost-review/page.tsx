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
  "動物病院の電気料金見直しポイント｜手術機器・入院動物管理・X線CT・24h救急の契約最適化";
const pageDescription =
  "動物病院の電気料金見直しを解説。手術機器、検査機器（X線/エコー/CT）、入院動物管理、薬品冷蔵庫、24h救急体制、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "動物病院 電気料金 見直し",
    "獣医療 電気代",
    "ペット 入院 温度管理 電力",
    "動物病院 X線 CT 電気代",
    "動物病院 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/veterinary-clinic-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/veterinary-clinic-electricity-cost-review",
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
    label: "手術機器（麻酔器・電気メス・モニター）",
    detail:
      "動物病院の手術設備。麻酔器（吸入麻酔器・人工呼吸器）、電気メス（モノポーラ／バイポーラ）、生体モニター、無影灯、加温装置、自動輸液装置。中規模動物病院で総設備20〜80kWの手術日ピーク稼働。施設電力使用量の10〜20%を占める。",
  },
  {
    label: "検査機器（X線・エコー・CT・MRI・血液検査）",
    detail:
      "X線（10〜40kW瞬時）、超音波エコー（0.5〜2kW）、生化学・血球分析装置、内視鏡。二次診療センターではCT（50〜150kW）、MRI（30〜80kW）も。中規模で総設備20〜100kW、大規模で総設備100〜400kW。",
  },
  {
    label: "入院動物管理（保温・冷却・酸素ケージ）",
    detail:
      "入院動物用の保温ベッド、ICU・酸素ケージ（温度湿度酸素濃度管理）、爬虫類・小動物用ヒーター、術後管理用冷却装置。中規模動物病院で総設備15〜60kWの常時稼働。停止不可の生命維持要素。",
  },
  {
    label: "薬品冷蔵庫・ワクチン保管",
    detail:
      "ワクチン・血液製剤・血漿・特殊薬品の専用冷蔵冷凍庫（2〜8℃／-20℃／-80℃）。1動物病院あたり総設備3〜20kWの24h停止不可稼働。停電時のBCP対策必須。",
  },
  {
    label: "診療室空調・看板・待合室",
    detail:
      "診療室・待合室・受付・スタッフルーム空調、入口看板照明、駐車場照明。中規模動物病院で総設備20〜80kW。診療時間中の稼働がメインだが、深夜救急対応で部分稼働も。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本獣医師会・日本動物病院協会・農水省動物医薬品検査所統計によれば、動物病院の電気料金は売上高の3〜8%（CT/MRI保有の二次診療センターは最高水準）。1動物病院あたりの電気代は規模により大きく異なる。",
  },
  {
    label: "診療面積1m²あたりの電力使用量",
    detail:
      "小規模個人病院で1m²あたり年間180〜350 kWh、中規模動物病院で1m²あたり年間250〜500 kWh、大規模高度二次診療センターで1m²あたり年間400〜900 kWh（CT/MRI含む）が業界平均。CT/MRI保有施設は平均の2〜3倍。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模個人病院（年商0.5〜2億円）で年間5〜30万 kWh、中規模動物病院（年商3〜10億円）で年間50〜200万 kWh、大規模高度二次診療センター（年商15〜60億円）で年間300万〜1,500万 kWh。複数院運営チェーンも増加中。",
  },
];

const costFactors = [
  {
    label: "手術日のピーク負荷",
    detail:
      "手術日は麻酔器・電気メス・X線・モニター・無影灯が同時稼働。中規模動物病院で手術時電力は通常時の2〜3倍。デマンドが手術ピークで決まり、契約電力が高止まりしやすい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間150万kWh使用の中規模病院で年675万円超の負担。",
  },
  {
    label: "入院動物の温度管理24h",
    detail:
      "入院動物（犬・猫・小動物・爬虫類）の温度管理は24h停止不可。種別ごとに異なる温度設定で空調・ヒーター・冷却装置を運用。固定電力負担として継続。",
  },
  {
    label: "24h救急体制の深夜稼働",
    detail:
      "夜間救急体制の動物病院は深夜帯も診療室・待合室空調・照明・検査機器が稼働。一般獣医療と比較して年間稼働時間が1.5〜2倍。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h入院・救急対応業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模個人病院（年商0.5〜2億円）",
    profile: "町の動物病院・1ドクター体制／低圧 20〜50kW／年間 5〜30万 kWh",
    annualCost: "年間電気代 150万〜900万円",
    note: "LED化・空調インバータ化・薬品冷蔵庫更新で年8〜12%削減事例。",
  },
  {
    size: "中規模動物病院（年商3〜10億円）",
    profile: "複数ドクター体制・入院対応／低圧60〜150kW・高圧／年間 50〜200万 kWh",
    annualCost: "年間電気代 1,500万〜6,000万円",
    note: "LED全面化＋空調BEMS＋入院管理最適化で年10〜14%削減事例。",
  },
  {
    size: "大規模高度二次診療センター（年商15〜60億円、24h救急）",
    profile: "CT・MRI保有・24h救急・複数手術室／高圧 200〜800kW／年間 300万〜1,500万 kWh",
    annualCost: "年間電気代 9,000万〜4.5 億円",
    note: "長期固定（3〜5年）契約＋自家消費太陽光＋BCP蓄電池が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模個人動物病院の年間10%削減（Before/After）",
    before: "都内の個人動物病院A（低圧 35kW、年間 18万 kWh、年間電気代 540万円）。市場連動プラン継続、待合室・診療室の蛍光灯、空調オンオフ制御、薬品冷蔵庫旧式。",
    after: "新電力切替（固定3年）／LED化（投資100万円、SII補助1/2活用）／空調インバータ化／薬品冷蔵庫高効率型更新／入院ケージヒーター省電力タイプ／看板LED化／待合室人感センサー導入。",
    result: "年間電気代 540万円 → 486万円（▲10%、▲54万円）／契約 kW 35→30／投資回収 補助金後 1.8年",
  },
  {
    title: "事例2：中規模動物病院の年間13%削減",
    before: "関東の中規模動物病院B（高圧 100kW、年間 130万 kWh、年間電気代 3,900万円）。市場連動プランで2022〜2023年に月最大130万円の追加負担。手術日ピーク管理不十分、入院ICU温度管理オンオフ、検査機器スタンバイ電力高。",
    after: "固定3年プラン切替／LED全面化／空調BEMS統合（診察室・待合室・入院ICU・手術室の最適化）／薬品冷蔵庫一括更新／入院ケージ温度管理BEMS連動／自家消費太陽光 50kW 導入（屋根400 m²）／検査機器スタンバイ電力削減／手術スケジュール集約化。",
    result: "年間電気代 3,900万円 → 3,393万円（▲13%、▲507万円）／契約 kW 100→85／投資回収 補助金後 3年",
  },
  {
    title: "事例3：大規模高度二次診療センターの年間4,500万円削減",
    before: "関東の大規模高度二次診療センターC（高圧 500kW、年間 1,000万 kWh、年間電気代 3億円）。長期固定契約継続もCT・MRI増設で契約電力上振れ、24h救急体制で深夜電力高。BCP対策不十分。",
    after: "電力契約の5年長期固定締結／自家消費太陽光 300kW＋蓄電池 500kWh（BCP兼用）／LED全面化／空調BEMS統合／需要家主導型PPA／CT・MRIの待機電力削減／入院ICU温度管理AI最適化／薬品冷蔵庫高効率化／24h救急深夜照明調光制御／手術室高効率化。",
    result: "年間電気代 3億円 → 2.55億円（▲15%、▲4,500万円）／契約 kW 500→430／投資回収 6年（補助金後 4年）／CO₂削減 約2,500 t/年／BCPで停電時も入院・救急継続可能",
  },
];

const demandManagement = [
  {
    label: "手術スケジュール集約化・分散化",
    detail:
      "手術スケジュールを電力単価安価な時間帯に集約、または日次分散化で同時稼働回避。手術ピーク電力▲15〜25%削減。",
  },
  {
    label: "入院ケージ・ICU温度管理BEMS連動",
    detail:
      "BEMS連動で動物種別・体調別の最適温度を維持しつつインバータ制御。入院管理電力▲15〜20%。",
  },
  {
    label: "検査機器のスタンバイ電力削減",
    detail:
      "X線・エコー・血液検査機器の使用時以外の完全電源OFF設定、スタンバイ電力削減。検査機器電力▲30〜40%。",
  },
  {
    label: "24h救急体制の深夜照明調光",
    detail:
      "夜間救急対応の診療室・待合室・廊下照明を人感センサー連動の調光制御。深夜照明電力▲40〜50%。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "LED・空調更新・薬品冷蔵庫・入院ケージヒーター・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "動物病院向けで採択率が高い主力補助金。LED＋空調BEMS統合更新で中規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池（BCP兼用）の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積のある中規模・大規模動物病院と相性が良い。24h入院稼働で自家消費率70〜80%。",
  },
  {
    name: "経産省 ものづくり・サービス等補助金",
    target: "動物病院の医療機器更新・診療システム高度化",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "動物病院の中小事業者で採択実績多数。CT・MRI・検査機器更新のタイミングで活用。",
  },
  {
    name: "農水省 動物医療振興補助金",
    target: "動物医療機器の更新・診療体制強化・脱炭素化",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "農水省による動物医療特有の補助制度。動物福祉と脱炭素の両面支援。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "空調全面更新・コージェネ・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。大規模二次診療センターで利用可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "手術日と非手術日の電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "手術機器・検査機器・入院管理・薬品冷蔵・空調の電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（30kW〜500kW）導入の試算を実施したか",
  "LED化・空調BEMS・薬品冷蔵庫更新の投資回収試算を実施したか",
  "入院動物の温度管理・薬品冷蔵庫のBCP対策（蓄電池）の整備状況を確認したか",
  "デマンドコントローラー・手術スケジュール集約化の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・農水省補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "動物病院の電気代水準はどれくらいですか？", answer: "売上高比3〜8%（CT/MRI保有施設は最高水準）が業界平均。小規模個人病院（年商1億円級）で年150万〜900万円、中規模動物病院（年商5億円級）で年1,500万〜6,000万円、大規模高度二次診療センター（年商30億円級）で年9,000万〜4.5億円規模の電気代になります。" },
  { question: "手術機器の電気代を削減するには？", answer: "①手術スケジュールの集約化・分散化（ピーク電力▲15〜25%）、②電気メス・モニターのスタンバイ電力削減、③無影灯LED化、④加温装置高効率化、⑤BEMSによる需要見える化、の5本柱が中心。中規模動物病院で年100〜300万円の削減が目安。" },
  { question: "X線・CT・MRIの電気代対策は？", answer: "①使用時以外の完全電源OFF（スタンバイ電力▲30〜40%）、②計画的撮影スケジュールでピーク回避、③高効率機種への更新、④撮影室空調の使用時のみ運転、⑤デマンドコントローラー連携、の5本柱が効果的。大規模センターで年300〜700万円の削減が目安。" },
  { question: "入院動物管理の電気代対策は？", answer: "①BEMS連動の動物種別最適温度制御（電力▲15〜20%）、②高効率インバータ式ICU・酸素ケージへの更新、③断熱性能改善、④消灯時間帯の温度設定見直し、⑤稼働ケージ数の動的最適化、の5本柱が効果的。中規模動物病院で年80〜200万円の削減が目安。" },
  { question: "動物病院の固定プランと市場連動プランどちらが向きますか？", answer: "入院動物管理24h稼働・薬品冷蔵停止不可・診療料金への即時転嫁困難のため、固定プランが向きます。24h救急体制の病院では特に固定プラン優位。2022〜2023年の市場高騰局面では市場連動継続事業者で月数十〜数百万円の追加負担が発生しました。" },
  { question: "薬品冷蔵庫のBCP対策はどうすべきですか？", answer: "①ワクチン・血液製剤の冷蔵庫専用UPS／蓄電池（10〜50kWh）導入、②自家発電（小型ディーゼル・LPガス、50〜200kW）併設、③太陽光自家消費との統合、④停電シナリオ別のBCP計画策定、⑤年次BCP訓練、の5本柱が必須。補助金活用で投資負担軽減可能。" },
  { question: "動物病院向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、農水省動物医療振興補助、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は動物病院で投資回収できますか？", answer: "屋根面積300m²以上、24h入院稼働の中規模・大規模動物病院は業種別で中位の相性。100kWで年11〜14万kWh発電、年180〜250万円の削減、投資回収9〜12年（補助金後6〜8年）が目安です。BCP兼用蓄電池併設で投資効率向上。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "公益社団法人 日本獣医師会", url: "https://nichiju.lin.gr.jp/" },
  { name: "日本動物病院協会（JAHA）", url: "https://www.jaha.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function VeterinaryClinicElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/veterinary-clinic-electricity-cost-review"
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
          <span className="text-slate-800">動物病院の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            動物病院の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            動物病院は、手術機器（麻酔器・電気メス）、X線・エコー・CT・MRIなどの検査機器、入院動物の保温・冷却・酸素ケージ管理、薬品冷蔵庫、24h救急体制など多面的な電力負荷を持ち、手術日のピーク負荷と入院動物管理の24h稼働が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>動物病院の電力使用プロファイル（手術／検査／入院管理／薬品冷蔵）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）と施設単位あたり単価</li>
              <li>LED化・空調BEMS・入院管理最適化の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>薬品冷蔵BCP（蓄電池）の整備施策</li>
              <li>SII・PPA・ものづくり補助・農水省補助・GX補助の組合せ活用</li>
              <li>動物病院向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              動物病院の電力使用特性 — 手術・検査・入院管理・薬品冷蔵
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院の電力使用は『手術機器／検査機器／入院動物管理／薬品冷蔵／診療空調』の5層で構成されます。手術日のピーク負荷と入院動物の24h温度管理が業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜8%、診療面積180〜900 kWh/m²/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院の電気代水準は施設規模（個人病院／中規模／高度二次診療センター）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本獣医師会・日本動物病院協会・農水省動物医薬品検査所統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              動物病院の主要な電気代上昇要因 — 手術ピーク・入院管理・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院の電気代上昇は、手術日のピーク負荷に加え、入院管理24h、24h救急体制深夜稼働、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 個人病院／中規模動物病院／高度二次診療センター
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院の電気料金見直し</Link>
              、{" "}
              <Link href="/clinic-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">クリニックの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              手術・検査機器・入院管理のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院は手術スケジュール集約化、入院ICUのBEMS連動温度管理、検査機器スタンバイ削減、24h救急深夜照明調光など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h入院管理稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院は入院動物管理24h稼働必須・薬品冷蔵停止不可・診療料金への即時転嫁困難のため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>入院動物管理の24h稼働が必須</li>
                  <li>薬品冷蔵の停止不可（ワクチン・血液製剤）</li>
                  <li>診療料金への即時転嫁が困難</li>
                  <li>24h救急対応で深夜電力が継続</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>夜間時間帯の入院管理で継続負担</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数十〜数百万円の追加負担</li>
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
              再エネ賦課金の影響 — 24h稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。動物病院の中規模施設では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模動物病院（年130万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 454万円</li>
                  <li>2025年度（3.98円/kWh）：年 517万円（+63万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 585万円（+131万円）</li>
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
              動物病院特有の節電・省エネ施策 — LED・空調・入院管理・BCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院の省エネは『LED全面化』『空調BEMS統合』『入院ケージ温度管理最適化』『薬品冷蔵BCP（蓄電池）』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED全面化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蛍光灯・水銀灯→LED化</li>
                  <li>照明電力▲50〜60%</li>
                  <li>SII補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">空調BEMS統合</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>診察室・待合室・入院・手術室の統合制御</li>
                  <li>空調電力▲15〜20%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">入院ケージ温度管理最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>動物種別・体調別の最適温度BEMS</li>
                  <li>入院管理電力▲15〜20%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（30kW〜500kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h入院稼働で自家消費率70〜80%</li>
                  <li>投資回収 9〜12年（補助金後 6〜8年）</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・農水省補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院向けに活用しやすい補助金は5本柱。LED＋空調BEMS＋検査機器更新はSII＋ものづくり＋農水省補助の組合せで補助率を最大化できます。
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
              動物病院に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社動物病院の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              動物病院は手術日ピーク負荷・入院管理24h・薬品冷蔵停止不可の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>手術機器・検査機器のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した10〜15%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="veterinary-clinic-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "医療機器・入院管理が共通。" },
              { href: "/clinic-electricity-cost-review", title: "クリニックの電気料金見直し", description: "診療所運営が共通。" },
              { href: "/nursing-care-facility-electricity-cost-review", title: "介護施設の電気料金見直し", description: "24h稼働・温度管理が共通。" },
              { href: "/pharmaceutical-electricity-cost-review", title: "医薬品業の電気料金見直し", description: "薬品冷蔵・取引先業種が共通。" },
              { href: "/research-facility-electricity-cost-review", title: "研究施設の電気料金見直し", description: "実験動物管理が共通。" },
              { href: "/aquarium-zoo-electricity-cost-review", title: "水族館・動物園の電気料金見直し", description: "動物管理・温度管理が共通。" },
              { href: "/medical-device-manufacturing-electricity-cost-review", title: "医療機器製造業の電気料金見直し", description: "医療機器の取引先業種。" },
              { href: "/factory-electricity-cost-reduction", title: "施設の電気代削減", description: "電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "施設電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "動物病院が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調・冷蔵庫更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "入院・救急24h事業者のリスク。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社の動物病院条件でリスクを確認する"
            description="手術機器・検査機器・入院動物管理・薬品冷蔵庫の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。LED・空調BEMS導入後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="動物病院の電力契約見直し、専門家に相談しませんか？"
            description="手術機器・検査機器・入院動物管理・薬品冷蔵庫の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で動物病院事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
