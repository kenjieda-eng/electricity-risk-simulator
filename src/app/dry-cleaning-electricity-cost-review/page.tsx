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
  "クリーニング店の電気料金見直しポイント｜大型乾燥機・プレス機・ボイラー・ドライ洗浄機の契約最適化";
const pageDescription =
  "クリーニング店の電気料金見直しを解説。大型乾燥機、プレス機（蒸気＋電力）、ボイラー、ドライ洗浄機、ヒートポンプ乾燥機更新、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "クリーニング 電気料金 見直し",
    "クリーニング工場 電気代",
    "大型乾燥機 ボイラー 電力",
    "ヒートポンプ乾燥機 補助金",
    "クリーニング 省エネ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/dry-cleaning-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/dry-cleaning-electricity-cost-review",
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
    label: "大型乾燥機（連続稼働型）",
    detail:
      "クリーニング工場の中核設備。1台あたり10〜50kW、24時間連続稼働の場合もあり。ガス併用型と電気専用型あり。1工場あたり総設備50〜500kW。工場全体の電力使用量の30〜45%を占める。ヒートポンプ乾燥機への更新で電力▲40〜60%が可能。",
  },
  {
    label: "洗濯機（業務用大型・連続バッチ）",
    detail:
      "業務用大型洗濯機1台あたり5〜30kW、1工場あたり総設備50〜200kWで稼働。バッチ単位で起動するため瞬間ピーク電力の要因。洗濯水の温度制御（給湯）も電力消費に影響。",
  },
  {
    label: "プレス機・仕上げアイロン（蒸気＋電力）",
    detail:
      "シャツ・スーツ等の仕上げ工程で使用。プレス機1台あたり3〜10kW、1工場あたり総設備30〜150kW。蒸気供給とのコンビネーションで電力使用。連続稼働での発熱要素も大きい。",
  },
  {
    label: "ボイラー・蒸気発生装置（電気併用型）",
    detail:
      "プレス用蒸気・洗濯給湯用ボイラー。ガス・灯油主体だが電気併用型も増加。1工場あたり総設備30〜200kW相当の電力負荷。蒸気と電力の使い分けが工場コスト構造を決定する。",
  },
  {
    label: "ドライ洗浄機（溶剤循環・冷却）",
    detail:
      "石油系・パークロロエチレン系等の溶剤を使用するドライ洗浄機。1台あたり5〜20kW、1工場あたり総設備20〜100kWで稼働。溶剤回収用冷却装置の電力消費も含む。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全国クリーニング生活衛生同業組合連合会・経産省生活衛生関係営業統計によれば、クリーニング業の電気料金は売上高の5〜12%（工場併設店舗では最高水準）。事業原価に占める比率は8〜18%。大型乾燥機・ボイラー・プレス機の連続稼働が業種固有のコスト構造を形成。",
  },
  {
    label: "処理量1kgあたりの電力使用量",
    detail:
      "ワイシャツ1kgあたり0.5〜1.5 kWh、洗濯物1kgあたり0.3〜0.8 kWhが業界平均。乾燥機の種類（ガス／電気／ヒートポンプ）と工程数で大きく変動。ヒートポンプ乾燥機採用工場は1kgあたり0.2〜0.5 kWhに圧縮可能。",
  },
  {
    label: "店舗・工場規模別の年間使用量",
    detail:
      "小規模単独店（年商2,000〜5,000万円）で年間3〜10万 kWh、中規模工場併設（年商1〜5億円）で年間40〜200万 kWh、大規模クリーニング工場（年商10億円超、24h稼働）で年間500万〜2,000万 kWh。中規模以上は高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "大型乾燥機・ボイラー連続稼働のベースロード",
    detail:
      "大型乾燥機・ボイラーは24h連続稼働の場合あり。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月20万kWh）で月20万円の差、年間240万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。年間200万kWh使用の中規模工場で年900万円超の負担。大規模工場では負担額が請求総額の10〜15%に達する。",
  },
  {
    label: "蒸気ボイラーと電力の使い分けコスト",
    detail:
      "ガス・灯油ボイラー（蒸気）と電力の使い分けが燃料コスト全体を決定。電気料金とガス料金の単価変動を継続的にモニタリングし、最適な配分を見直す必要あり。",
  },
  {
    label: "市場連動プランの連続稼働リスク",
    detail:
      "24h連続稼働の大型乾燥機・ボイラーは市場価格高騰局面に直撃される。JEPX高騰局面では月数百万円規模の追加負担リスク。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模単独店（年商2,000〜5,000万円、従業員2〜5名）",
    profile: "個人クリーニング店・取次店併設／低圧 30〜80kW／年間 3〜10万 kWh",
    annualCost: "年間電気代 100万〜400万円",
    note: "LED化・高効率エアコン更新・ボイラー更新で年8〜12%削減事例。",
  },
  {
    size: "中規模工場併設店（年商1〜5億円、従業員10〜30名）",
    profile: "工場併設店舗・地域チェーン／高圧 150〜500kW／年間 40〜200万 kWh",
    annualCost: "年間電気代 1,400万〜7,000万円",
    note: "ヒートポンプ乾燥機更新＋ボイラー高効率化＋新電力切替で年12〜18%削減事例。",
  },
  {
    size: "大規模クリーニング工場（年商10億円超、24h稼働）",
    profile: "大手チェーン・FC本部工場／高圧 600〜2,000kW／年間 500万〜2,000万 kWh",
    annualCost: "年間電気代 1.7億〜7億円",
    note: "ヒートポンプ乾燥機全面更新＋自家消費太陽光＋長期固定契約＋シフト最適化で年10〜18%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模クリーニング店の年間11%削減（Before/After）",
    before: "地方都市のクリーニング店A社（低圧 60kW、年間 7万 kWh、年間電気代 280万円）。電力会社デフォルトプラン、ガス乾燥機10年経過、白熱灯・蛍光灯混在。",
    after: "新電力切替（固定3年）／LED全面更新／高効率エアコン更新（補助1/3活用）／ガス乾燥機の燃焼制御最適化／プレス機の蒸気回収配管断熱／デマンドコントローラー導入。",
    result: "年間電気代 280万円 → 249万円（▲11%、▲31万円）／契約 kW 60→48／投資回収 補助金後 3年",
  },
  {
    title: "事例2：中規模工場併設店の年間17%削減",
    before: "関東のクリーニング工場併設店B社（高圧 350kW、年間 150万 kWh、年間電気代 5,250万円）。市場連動プランで2022〜2023年に月最大200万円の追加負担。大型乾燥機・ボイラー24h稼働。",
    after: "固定3年プラン切替／ヒートポンプ乾燥機への更新（SII＋ものづくり補助1/2活用、投資3,000万円）／ボイラー高効率化／プレス機蒸気回収＋断熱／LED全面更新／デマンドコントローラー設置／工場稼働シフト最適化（深夜帯シフト強化）／BEMS導入。",
    result: "年間電気代 5,250万円 → 4,358万円（▲17%、▲892万円）／契約 kW 350→280／投資回収 補助金後 3.5年",
  },
  {
    title: "事例3：大規模クリーニング工場の年間1.1億円削減",
    before: "大手クリーニングチェーンC社の主力工場（高圧 1,500kW、年間 1,500万 kWh、年間電気代 5.25億円）。24h稼働、ガス乾燥機中心、長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の5年長期固定締結／ヒートポンプ乾燥機全面更新／自家消費太陽光 1.5 MW＋蓄電池 3 MWh／コージェネ 1MW＋排熱回収／ボイラー全面更新／プレス機蒸気回収・断熱／需要家主導型PPA／DR契約締結／工場稼働シフト最適化／BEMS全工場展開。",
    result: "年間電気代 5.25億円 → 4.15億円（▲21%、▲1.1億円）／契約 kW 1,500→1,250／投資回収 補助金後 4.5年／CO₂削減 約7,000 t/年",
  },
];

const demandManagement = [
  {
    label: "ヒートポンプ乾燥機への更新",
    detail:
      "従来型ガス・電気乾燥機→ヒートポンプ乾燥機への更新で乾燥機電力▲40〜60%、ガス使用量▲80〜100%。中規模工場で年500〜1,500万円の削減事例。投資回収はSII＋ものづくり補助で3〜5年が目安。",
  },
  {
    label: "工場稼働シフト最適化（深夜帯シフト強化）",
    detail:
      "大型乾燥機・洗濯機・ボイラーを電力単価安価な深夜帯（22-8時）にシフトする運用設計。市場連動プランでは10〜20%のコスト削減、固定プランでも基本料金（デマンド）削減で5〜10%の削減。",
  },
  {
    label: "プレス機・蒸気配管の断熱・蒸気回収",
    detail:
      "蒸気配管の断熱強化と凝縮水の回収により、ボイラー燃料・電力▲10〜20%。投資額が小さく投資回収1〜2年。",
  },
  {
    label: "デマンドコントローラー・BEMS導入",
    detail:
      "乾燥機・洗濯機・プレス機の同時起動を回避するデマンドコントローラー導入で契約kWを10〜20%削減。BEMS連動で更にきめ細かな制御が可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "ヒートポンプ乾燥機・高効率ボイラー・LED・コンプレッサー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "クリーニング業向けで採択率が高い主力補助金。ヒートポンプ乾燥機更新で大規模採択事例多数。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新クリーニング機器（乾燥機・洗濯機・プレス機）の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "クリーニング業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "工場屋根面積が大きい場合は導入余地大。自家消費率70%超になりやすい。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ヒートポンプ乾燥機全面更新・排熱回収・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
  {
    name: "中小企業向け 省エネ支援補助金",
    target: "LED化・空調更新・ボイラー更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "個人店・中規模店で活用しやすい中小事業者向け制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "大型乾燥機・ボイラー・プレス機の電力使用量を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "大型乾燥機・洗濯機・プレス機・ボイラー・ドライ洗浄機の電力プロファイルを把握しているか",
  "ヒートポンプ乾燥機への更新の投資回収試算を実施したか",
  "蒸気配管断熱・凝縮水回収の投資回収試算を実施したか",
  "工場稼働シフト最適化（深夜帯シフト）の効果を試算したか",
  "デマンドコントローラー・BEMS導入を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・ものづくり補助・PPA補助・GX補助・自治体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "クリーニング業の電気代水準はどれくらいですか？", answer: "売上高比5〜12%（工場併設店舗では最高水準）、事業原価比8〜18%が業界平均。中規模工場併設店（年商3億円級）で年1,400〜7,000万円、大規模クリーニング工場（年商10億円超）で年1.7〜7億円規模の電気代になります。" },
  { question: "ヒートポンプ乾燥機への更新は投資回収できますか？", answer: "従来型ガス・電気乾燥機→ヒートポンプ乾燥機への更新で乾燥機電力▲40〜60%、ガス使用量▲80〜100%。中規模工場で年500〜1,500万円の削減、SII＋ものづくり補助＋GX補助の組合せで投資回収3〜5年が目安です。" },
  { question: "ボイラー（蒸気）と電力の使い分けはどう判断する？", answer: "電気料金・ガス料金・灯油単価の比較で最適配分を決定。蒸気ボイラーの効率（80〜90%）と電気給湯の効率（COP3〜5のヒートポンプ）の総合効率比較が必要。BEMSで使用量データを蓄積し、定期見直しが推奨されます。" },
  { question: "クリーニング業の固定プランと市場連動プランどちらが向きますか？", answer: "大型乾燥機・ボイラー24h連続稼働、プレス機の稼働ピークがある業種では、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月最大200万円の追加負担事例あり。" },
  { question: "工場稼働シフトの最適化はどう進める？", answer: "①大型乾燥機・洗濯機を深夜帯（22-8時）にシフト、②プレス工程を朝シフトに集中、③従業員シフトの見直し、④BEMSで電力使用パターンを可視化、⑤労務管理ソフトと電力管理の連動、の5本柱が中心。中規模工場で年300〜800万円の削減が目安。" },
  { question: "プレス機・蒸気配管の断熱は投資回収できますか？", answer: "蒸気配管の断熱強化と凝縮水の回収により、ボイラー燃料・電力▲10〜20%。投資額が小さく（中規模工場で50〜200万円）、投資回収1〜2年が目安です。最も投資効率の高い省エネ施策の一つ。" },
  { question: "クリーニング業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、ものづくり補助金、需要家主導型PPA補助金、脱炭素先行地域・GX補助、中小企業向け省エネ支援補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はクリーニング工場で投資回収できますか？", answer: "工場屋根面積1,500m²以上、24h稼働の工場は業種別で上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率70%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全国クリーニング生活衛生同業組合連合会", url: "https://www.zenkuren.or.jp/" },
  { name: "経済産業省 生活衛生関係営業統計", url: "https://www.meti.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function DryCleaningElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/dry-cleaning-electricity-cost-review"
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
          <span className="text-slate-800">クリーニング店の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            クリーニング店の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            クリーニング業は、大型乾燥機の連続稼働、洗濯機のバッチ起動、プレス機・仕上げアイロンの蒸気＋電力使用、ドライ洗浄機の溶剤循環、ボイラー（蒸気発生）など多面的な電力負荷を持ち、24h工場稼働と蒸気・電力の使い分けが業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>クリーニング業の電力使用プロファイル（乾燥／洗濯／プレス／ボイラー／ドライ）</li>
              <li>業界平均の電気代水準（売上高比5〜12%）と処理量1kgあたり単価</li>
              <li>ヒートポンプ乾燥機更新・蒸気配管断熱の費用対効果</li>
              <li>規模別（単独店・工場併設・大規模工場）の電気代と削減事例3件（Before/After）</li>
              <li>工場稼働シフト最適化の効果</li>
              <li>SII・ものづくり補助・PPA・GX補助・自治体補助の組合せ活用</li>
              <li>クリーニング業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              クリーニング業の電力使用特性 — 大型乾燥機・洗濯機・プレス・ボイラー・ドライ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業の電力使用は『大型乾燥機／洗濯機／プレス機（蒸気＋電力）／ボイラー／ドライ洗浄機』の5層で構成されます。大型乾燥機の連続稼働とボイラー（蒸気）との使い分けが業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比5〜12%、処理量1kgあたり0.3〜1.5 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業の電気代水準は乾燥機種類（ガス／電気／ヒートポンプ）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全国クリーニング生活衛生同業組合連合会・経産省生活衛生関係営業統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              クリーニング業の主要な電気代上昇要因 — 連続稼働・蒸気/電力・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業の電気代上昇は、大型乾燥機・ボイラーの連続稼働ベースロードに加え、蒸気と電力の使い分け、市場連動プランの連続稼働リスク、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 単独店／工場併設／大規模工場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/coin-laundry-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コインランドリーの電気料金見直し</Link>
              、{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテルの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大型乾燥機・ボイラーのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業はヒートポンプ乾燥機更新、工場稼働シフト最適化、蒸気配管断熱、デマンドコントローラー導入など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h連続稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業は大型乾燥機・ボイラーの24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>大型乾燥機・ボイラー24h稼働が必須</li>
                  <li>処理納期遵守のため運転停止困難</li>
                  <li>BtoB（ホテル等）契約価格への即時転嫁が困難</li>
                  <li>ピーク時間帯に高単価が乗算される</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に連続稼働継続</li>
                  <li>大型乾燥機の長時間稼働が高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数百万円の追加負担</li>
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
              再エネ賦課金の影響 — 24h連続稼働業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。クリーニング業の中規模工場では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模クリーニング工場（年200万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 698万円</li>
                  <li>2025年度（3.98円/kWh）：年 796万円（+98万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 900万円（+202万円）</li>
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
              クリーニング業特有の節電・省エネ施策 — ヒートポンプ乾燥機・蒸気回収・シフト最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業の省エネは『ヒートポンプ乾燥機更新』『蒸気配管断熱・凝縮水回収』『工場稼働シフト最適化』『デマンドコントローラー＋BEMS』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ヒートポンプ乾燥機更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>従来型→ヒートポンプで電力▲40〜60%</li>
                  <li>ガス使用量▲80〜100%</li>
                  <li>SII＋ものづくり補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蒸気配管断熱・凝縮水回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ボイラー燃料・電力▲10〜20%</li>
                  <li>投資回収1〜2年（最も投資効率の高い施策）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">工場稼働シフト最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>大型機械の深夜帯シフト（22-8時）</li>
                  <li>デマンド▲10〜20%、年300〜800万円の削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（300kW〜1MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h稼働工場で自家消費率70%超</li>
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
              補助金活用（業種別） — SII・ものづくり・PPA・GX補助・自治体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業向けに活用しやすい補助金は5本柱。ヒートポンプ乾燥機更新はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
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
              クリーニング業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社クリーニング工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クリーニング業は大型乾燥機24h連続稼働・ボイラー蒸気/電力使い分け・燃料費調整変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>大型乾燥機の連続稼働影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した11〜21%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="dry-cleaning-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/coin-laundry-electricity-cost-review", title: "コインランドリーの電気料金見直し", description: "乾燥機が共通要素。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "クリーニング業の取引先業種。" },
              { href: "/business-hotel-electricity-cost-review", title: "ビジネスホテルの電気料金見直し", description: "クリーニング業の取引先業種。" },
              { href: "/hair-salon-barber-electricity-cost-review", title: "理容室・美容室の電気料金見直し", description: "給湯・乾燥電力が共通。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "クリーニング業の取引先業種（リネン）。" },
              { href: "/nursing-care-facility-electricity-cost-review", title: "介護施設の電気料金見直し", description: "クリーニング業の取引先業種。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "クリーニング業が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "ヒートポンプ乾燥機更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "クリーニング工場のリスク。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "月次変動の根本要因。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機（自社条件で年間電気代を試算）", description: "業種・規模・契約・エリアを入力するだけで推定年間電気代と削減余地3案を即時表示します。" },
            ]}
          />

          <ContentCta
            heading="自社のクリーニング工場条件でリスクを確認する"
            description="大型乾燥機・ボイラー・プレス機・ドライ洗浄機の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。ヒートポンプ乾燥機更新後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="クリーニング業の電力契約見直し、専門家に相談しませんか？"
            description="大型乾燥機・ボイラー・プレス機・ドライ洗浄機の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でクリーニング業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
