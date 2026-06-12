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
  "病院・医療施設の夏季ピーク対策｜法人の夏季電気代対策（24h空調・無停電要件／規模別・代表シナリオ）";
const pageDescription =
  "病院・医療施設（クリニック・総合病院・大学病院）の夏季ピーク対策を解説。24時間空調と無停電/BCP要件の両立、医療機器負荷、手術室・ICU・病棟・外来の部門別最適戦略、病床規模別の投資パターン、代表シナリオ、補助金活用までを患者安全最優先の論調で実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "病院 夏季 ピーク対策",
    "医療施設 電気代 削減",
    "病院 24時間空調 省エネ",
    "病院 無停電 BCP 蓄電池",
    "手術室 ICU 空調 電力",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/hospital-summer-peak-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hospital-summer-peak-strategy",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/seasonal-strategy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/seasonal-strategy"],
  },
};

const peakStructure = [
  {
    label: "24時間連続空調の宿命",
    detail:
      "外来・病棟・手術室・ICUのいずれも患者が滞在するため空調を止められず、空調はベースロード（基底負荷）として常時稼働します。夏季はこの基底負荷の上に外気冷房負荷が積み上がりピーク電力が押し上げられます。",
  },
  {
    label: "医療機器負荷の常時上乗せ",
    detail:
      "MRI・CT・人工呼吸器・透析装置・滅菌装置などは診療時間帯に集中して稼働します。画像診断系の大型機器は待機時とピーク時の差が大きく、空調ピークと診療ピークが重なると施設全体の最大需要が押し上げられます。",
  },
  {
    label: "給湯・滅菌・厨房の熱負荷",
    detail:
      "給湯・中央材料室の高圧蒸気滅菌・入院食の厨房はいずれも大きな熱・電力負荷を持ちます。これらの熱源を電化した施設では夏季の冷房負荷と熱源負荷が同時に発生し、契約電力（デマンド）の上振れ要因になります。",
  },
  {
    label: "無停電・BCP要件との両立",
    detail:
      "病院は災害拠点としての機能維持が求められ、非常用発電機や無停電電源（UPS）の確保が前提です。重要負荷は決して落とせず、節電は『止めてよい負荷』と『止められない負荷』を厳密に切り分けて設計する必要があります。",
  },
  {
    label: "臨床制約による温度設定の限界",
    detail:
      "手術室は清浄度のため低温・高換気、ICUや新生児室は厳格な温湿度管理が必要です。一律の温度設定緩和は通用せず、臨床上許容される範囲でゾーンごとに最適化する運用が病院の省エネの肝になります。",
  },
];

const industryBenchmark = [
  {
    label: "病床規模別の年間電気代水準（目安）",
    detail:
      "公開情報の目安として、19床以下の有床クリニックで年間300万〜1,500万円、100〜300床の中規模総合病院で1.5億〜5億円、500床超の大学病院で8億〜25億円のレンジが整理できます。延床面積・診療科構成・機器の有無で同じ病床数でも2倍前後ぶれます。",
  },
  {
    label: "夏季電気代の上振れ幅（対通年比・目安）",
    detail:
      "病院全体の目安として夏季は対通年で+10〜20%程度。空調比率が高い大規模急性期病院ほど上振れ幅が大きく、クリニックは絶対額が小さい一方で診療時間帯の空調ピークが目立ちます。猛暑年はレンジ上限側に寄る想定が安全です。",
  },
  {
    label: "用途別の電力構成比（目安）",
    detail:
      "病院の電力使用は空調35〜45%、照明15〜20%、医療機器15〜25%、給湯・厨房・滅菌などの熱源10〜20%が一般的な目安です。空調が最大費目のため、夏季ピーク対策は空調の運用最適化と高効率化が中心になります。",
  },
];

const costFactors = [
  {
    label: "猛暑の長期化トレンド",
    detail:
      "公開情報では夏季平均気温は上昇傾向にあり、猛暑日の日数も増加しています。外気温が高い日が長く続くほど24時間空調を行う病院の冷房負荷は積み上がり、ピーク電力使用量がトレンド的に上昇します。",
  },
  {
    label: "高度医療機器の電化・大型化",
    detail:
      "高磁場MRI・マルチスライスCT・ハイブリッド手術室など医療機器は高度化・大型化が進み、付帯空調（機器冷却）も増えています。診療能力の向上は電力需要の増加と表裏一体で、契約電力の見直しが必要になる局面が増えています。",
  },
  {
    label: "空調・熱源設備の更新遅れ",
    detail:
      "病院は診療を止めにくく更新工事のタイミングを確保しにくいため、老朽化した低効率設備を使い続けるケースが少なくありません。更新遅れは夏季の電力ロスとして表れ、高効率機器への更新余地（=削減ポテンシャル）が大きいことを意味します。",
  },
  {
    label: "燃調・市場価格の変動",
    detail:
      "燃料費調整額や市場価格は燃料市況・JEPXスポット価格の影響で変動します。将来の水準は想定の域を出ませんが、目安レンジとして燃料市況が高止まりすれば調整額が上振れする想定で資金計画を立てるのが堅実です。電気代はkWh×単価で積み上がるため使用量の平準化が単価変動の影響を和らげます。",
  },
  {
    label: "再エネ賦課金などの公的賦課",
    detail:
      "再エネ賦課金は2026年度で4.18円/kWhです。賦課金や容量拠出金などの公的負担はkWhあたりで一律に課されるため、使用量が大きい大規模病院ほど絶対額のインパクトが大きく、省エネ（kWh削減）の経済効果が直接的に効いてきます。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模（有床クリニック・19床以下／年間電気代300万〜1,500万円）",
    profile: "診療所・有床クリニック・小規模専門病院",
    annualCost: "投資 100万〜800万円で年30万〜250万円削減（目安）",
    note: "LED化・高効率エアコン更新・運用改善を即時実施。デマンド監視装置の導入で契約電力の最適化から着手するのが定石です。",
  },
  {
    size: "中規模（100〜300床／年間電気代1.5億〜5億円）",
    profile: "中規模総合病院・ケアミックス病院",
    annualCost: "投資 5,000万〜3億円で年1,500万〜8,000万円削減（目安）",
    note: "高効率空調・BEMS・熱源最適化を3年計画で組合せ。非常用電源の更新に合わせ蓄電池併設を検討し、BCPとピークカットを同時に強化します。",
  },
  {
    size: "大規模（500床超・大学病院／年間電気代8億〜25億円）",
    profile: "大学病院・基幹病院・高度急性期病院",
    annualCost: "投資 3億〜20億円で年1億〜5億円削減（目安）",
    note: "コージェネ・大型蓄電池・自家消費太陽光・DR参加を総合活用。Scope2排出削減と災害時の電源自立を両立する中長期投資計画が標準です。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1：有床クリニック（中小・夏季ピーク約12%圧縮の目安）",
    before:
      "都市部・19床の有床クリニック（年間電気代の目安1,200万円、契約電力の目安60kW）。個別エアコンが老朽化し一律の温度設定で運転、外来診療のピーク時間帯に契約電力が押し上げられていた。",
    after:
      "①高効率エアコン更新（投資の目安400万円、省エネ補助活用）／②ゾーン別温度設定と運転最適化／③LED全面化（投資の目安150万円）／④デマンド監視と契約電力見直し。臨床要件を損なわない範囲に限定。",
    result:
      "夏季ピーク電力の目安で約12%圧縮、年間電気代の目安で約100万〜140万円削減。契約電力の目安は60kW→54kW。投資合計の目安550万円、補助活用後で投資回収は3〜4年の目安。公開事例・業界団体ヒアリングから整理した代表シナリオです。",
  },
  {
    title: "代表シナリオ2：中規模総合病院（200床・夏季ピーク約15%圧縮の目安）",
    before:
      "地方都市・200床の総合病院（年間電気代の目安3億円、契約電力の目安1,800kW）。中央熱源は老朽化、BEMS未導入で部門別把握ができず、最大需要日に契約電力へ迫る運転が常態化。非常用発電機のみでBCPを担保していた。",
    after:
      "①高効率ターボ冷凍機への熱源更新（投資の目安1.2億円、省エネ補助活用）／②BEMS導入で部門別可視化と空調ゾーン制御（投資の目安4,000万円）／③蓄電池併設でピークシフトとBCP強化（投資の目安1億円）／④照明LED化。手術室・ICUの温湿度要件は厳守し削減は外来・共用部に限定。",
    result:
      "夏季ピーク電力の目安で約15%圧縮、年間電気代の目安で約4,500万〜5,400万円削減。契約電力の目安は1,800kW→1,550kW。投資合計の目安2.6億円、補助活用後で投資回収は4〜5年の目安。本シナリオは代表的な構成を示すものです。",
  },
  {
    title: "代表シナリオ3：大学病院（700床・夏季ピーク約14%圧縮の目安）",
    before:
      "大都市・700床の大学病院（年間電気代の目安15億円、契約電力の目安7,000kW）。高度医療機器が多数稼働しハイブリッド手術室・複数のMRI/CTを保有。夏季は冷房負荷と医療機器負荷が日中に集中し最大需要を形成していた。",
    after:
      "①コージェネ導入と排熱の空調・給湯利用（投資の目安6億円、GX補助活用）／②大型蓄電池とDR参加でピークシフト（投資の目安3億円）／③自家消費太陽光の屋上設置（投資の目安1.5億円、PPA補助）／④BEMS統合制御と外気冷房／⑤手術室・ICU・無菌室は要件を厳守し対象を外来棟・共用部に限定。",
    result:
      "夏季ピーク電力の目安で約14%圧縮、年間電気代の目安で約1.8億〜2.1億円削減、DR収入の目安で年800万円。契約電力の目安は7,000kW→6,200kW。投資合計の目安10.5億円、補助活用後で投資回収は5〜6年の目安。本シナリオは代表例の整理です。",
  },
];

const demandManagement = [
  {
    label: "空調ゾーン制御による負荷平準化",
    detail:
      "外来・病棟・管理諸室・共用部を別ゾーンで運転し在室状況に応じて制御します。夜間に人がいない外来エリアの空調を抑制するだけでも基底負荷を下げられます。手術室・ICUなど臨床要件のある区域は対象外とし患者安全を最優先に切り分けます。",
  },
  {
    label: "BEMSによる部門別デマンド可視化",
    detail:
      "BEMS（ビルエネルギー管理システム）で部門別・用途別の電力を可視化すると、どの時間帯に何が需要を押し上げているかを特定できます。ピーク形成要因を把握し、空調の予冷・台数制御・機器稼働の時間分散で契約電力を抑えます。",
  },
  {
    label: "コージェネ・蓄電池による電源の自立",
    detail:
      "コージェネ（熱電併給）は排熱を空調・給湯に利用でき夏季ピーク時の系統依存を下げます。蓄電池はピークシフトと非常用電源を兼ねBCPと省エネを両立します。重要負荷の無停電性を確保したうえで止めてよい負荷だけを対象にします。",
  },
  {
    label: "無停電要件と両立する制御設計",
    detail:
      "デマンド制御は『生命維持・手術・透析などの止められない負荷』を対象から完全に除外して設計します。空調の予冷運転や共用部照明の調光など患者ケアに影響しない領域に限定して需要を平準化するのが原則です。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・熱源（ターボ冷凍機等）・BEMS・換気設備",
    rate: "中小1/2、大企業1/3（公募回により変動）",
    note: "病院の空調・熱源更新で最も活用しやすい主力補助金。複数施策の組合せで採択率が高まる傾向。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内（公募条件により変動）",
    note: "屋上・敷地に余地がある病院で夏季ピーク削減と再エネ調達・BCP強化を同時に進められます。",
  },
  {
    name: "脱炭素・GX関連補助（環境省・経産省）",
    target: "コージェネ・ヒートポンプ・高効率熱源",
    rate: "1/2程度（事業区分により変動）",
    note: "災害拠点病院の電源自立とCN対応を両立する大型投資の財源として活用余地があります。",
  },
  {
    name: "医療施設・自治体向け省エネ／防災関連支援",
    target: "災害拠点機能・非常用電源・設備更新",
    rate: "事業により異なる（公募要領で要確認）",
    note: "厚労省・自治体の補助とエネルギー系補助の組合せでBCPと省エネ投資の自己負担を圧縮できる場合があります。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか確認したか",
  "高圧／特別高圧の境界に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "空調のゾーン別制御・運転スケジュール最適化を臨床要件を踏まえて設計したか",
  "手術室・ICU・無菌室など『止められない負荷』を制御対象から除外しているか",
  "BEMS（中央監視）で部門別・用途別のデマンドを可視化できているか",
  "非常用電源の更新時期に合わせて蓄電池併設（BCP×ピークカット）を検討したか",
  "屋上・敷地を活用した自家消費太陽光導入の試算を実施したか",
  "新電力数社からの相見積を取得し、固定／市場連動を中立的に比較したか",
  "再エネ賦課金減免制度など公的軽減策の対象に該当するか確認したか",
];

const faqItems = [
  { question: "病院の夏季電気代は通年比でどれくらい上がりますか？", answer: "病院全体では対通年で+10〜20%程度が目安です。空調比率が高い大規模急性期病院ほど上振れ幅が大きく、クリニックは絶対額が小さい一方で診療時間帯の空調ピークが目立ちます。猛暑年はレンジ上限側を想定すると安全です（公開情報目安）。" },
  { question: "24時間空調の病院でも電気代は下げられますか？", answer: "下げられます。空調を止めるのではなく外来・管理諸室・共用部など『止めてよい区域』をゾーン別に最適化し、高効率機器更新とBEMSによる需要可視化を組合せます。手術室・ICUなど臨床要件のある区域は対象外とし、患者安全を最優先に切り分けます。" },
  { question: "手術室やICUの温度設定を緩めて節電してよいですか？", answer: "推奨しません。手術室は清浄度・換気量、ICUや新生児室は厳格な温湿度管理が必要で、一律の設定緩和は患者安全を損なうおそれがあります。重要諸室は要件を厳守し、削減は影響のない区域に限定するのが病院の省エネの大前提です。" },
  { question: "無停電・BCP要件とピークカットは両立できますか？", answer: "両立できます。生命維持・手術・透析などの重要負荷を制御対象から完全に除外し、空調の予冷運転や共用部の調光など影響のない領域に限定して需要を平準化します。蓄電池はピークシフトと非常用電源を兼ね、BCP強化と省エネを同時に進められます。" },
  { question: "病院に向く電力プランは固定ですか、市場連動ですか？", answer: "ベース負荷が大きい病院は価格の予見性を重視し固定プランを選ぶ施設が多い傾向ですが、市場連動が不利と決まるわけではなく需要構造・リスク許容度次第です。本記事は特定の電力会社・契約形態を推奨するものではありません。中立的に相見積で比較してください。" },
  { question: "病院で蓄電池や自家消費太陽光は投資回収できますか？", answer: "屋上・敷地の余地と24時間需要のある病院は相性が比較的良い傾向です。蓄電池はピークシフトとBCPを兼ね、太陽光は昼間の空調ピークと発電が重なり自家消費率が高くなりやすい目安です。補助活用後で投資回収5〜6年程度の代表シナリオが整理できます（公開情報目安）。" },
  { question: "病院でデマンドレスポンス（DR）に参加できますか？", answer: "重要負荷を除外したうえで共用部空調の調整や蓄電池・自家発電の活用により参加余地があります。患者安全に影響しない範囲に限定する必要があり、まず止めてよい負荷の切り分けと制御設計が前提です。経済性は施設規模・設備構成で変わります。" },
  { question: "病院向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（高効率空調・熱源・BEMS）、需要家主導型PPA／蓄電池補助、脱炭素・GX関連補助（コージェネ・ヒートポンプ）が主な選択肢です。厚労省・自治体の医療・防災系支援との組合せで自己負担を圧縮できる場合があります。公募条件は公募回ごとに確認してください。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "厚生労働省（医療施設・災害医療）", url: "https://www.mhlw.go.jp/" },
  { name: "電力広域的運営推進機関（OCCTO・容量市場）", url: "https://www.occto.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/unit" },
];

export default function HospitalSummerPeakStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hospital-summer-peak-strategy"
        datePublished="2026-06-12"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "季節別の電気代対策", url: "https://simulator.eic-jp.org/articles/seasonal-strategy" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/seasonal-strategy" className="underline-offset-2 hover:underline">季節別の電気代対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">病院・医療施設の夏季ピーク対策</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            病院・医療施設の夏季ピーク対策
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            病院・医療施設は24時間空調と無停電（BCP）要件を同時に背負うため、夏季の電力ピーク対策はオフィスや工場とは前提が異なります。本ページでは患者安全と医療継続性を最優先に、手術室・ICU・病棟・外来の部門別負荷差を踏まえ、無理な節電に陥らない夏季ピーク戦略を整理します。クリニックから大学病院まで病床規模別の投資パターン、代表シナリオ、補助金活用までを実務観点でまとめました。なお本記事は判断材料の整理を目的とし、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-12" updatedAt="2026-06-12" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>病院の夏季電力構造（24h空調・医療機器・給湯/滅菌）</li>
              <li>病床規模別の夏季電気代水準と上振れ幅の目安</li>
              <li>夏季上昇要因（猛暑・高度医療機器電化・空調更新遅れ）</li>
              <li>病床規模別の投資パターン（クリニック〜大学病院）</li>
              <li>規模別の代表シナリオ3件（Before/After/Result）</li>
              <li>部門別最適戦略（手術室／ICU／病棟／外来）とBCP両立</li>
              <li>病院向け補助金と立案前チェックリスト10項目</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              病院の夏季電力構造 — 24h空調・医療機器・給湯/滅菌
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の夏季電気代は『24時間連続空調／医療機器負荷／給湯・滅菌・厨房の熱負荷／無停電・BCP要件／臨床制約による温度限界』の5論点で構造化されます。電気代はkWh（使用量）×単価で積み上がるため、止められない負荷を抱えつつどこで使用量とピークを平準化するかが設計の核心です。患者安全を起点に組み立てるのが大前提で、本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {peakStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の全体像は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                夏季ピーク電気代の基礎とCFO視点
              </Link>
              、5戦略の全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                業種横断ピークカット5戦略
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の病院夏季電気代水準（病床規模別）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の夏季電気代水準は病床規模・診療科構成・高度医療機器の有無で大きく異なります。公開情報の目安として整理した水準を自院のベンチマーク比較にご活用ください。数値は代表的なレンジであり、特定の電力会社・契約形態を推奨するものではありません。
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
              ※ 出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。実値は病床規模・診療科・地域で1.5〜2倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要な病院夏季電気代上昇要因 — 猛暑・高度医療機器・更新遅れ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の夏季電気代上昇は、猛暑の長期化・高度医療機器の電化・空調設備の更新遅れ・燃調や市場価格の変動・公的賦課という構造的要因が並列します。単独の対策では効かず、設備・運用・契約の三位一体で取り組む必要があります。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピークの全体像は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">夏季ピーク電気代の基礎とCFO視点</Link>
              で深掘りできます。賦課金や調整額の前提として、再エネ賦課金は2026年度で4.18円/kWhです。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              病床規模別の投資パターン — クリニック／中規模病院／大学病院
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の夏季ピーク対策投資は病床規模で大きく異なります。小規模はLED・高効率エアコン・運用改善とデマンド監視を即時実施、中規模は高効率熱源＋BEMS＋蓄電池併設、大規模はコージェネ・大型蓄電池・自家消費太陽光・DRを総合活用します。いずれも患者安全と臨床要件を侵さない範囲に限定するのが原則で、本表は特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.profile}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{item.annualCost}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              施設条件を入れて規模別に試算するなら{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              が便利です。仮に中規模病院で年▲4,500万円の削減を想定すると、5年累計は ▲4,500万円 ×5年＝▲2億2,500万円 の効果目安になります（試算上の目安）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の代表シナリオ3件 — クリニック／総合病院／大学病院
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ここで示す3件は公開事例・業界団体ヒアリングから整理した代表シナリオです。特定施設の数値ではなく、規模ごとの典型的な構成と効果の目安をBefore/Afterで示すものです。いずれも患者安全と医療継続性を最優先にしており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果の目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実際の事例は{" "}
              <Link href="/case-study-hospital-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院のピークカット事例</Link>
              、料金の見直し手順は{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院の電気料金見直し</Link>
              を参照。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              病院のデマンド管理 — ゾーン制御・BEMS・コージェネ／無停電の両立
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院のデマンド管理は『空調ゾーン制御』『BEMSによる部門別可視化』『コージェネ・蓄電池による電源自立』『無停電要件と両立する制御設計』の4論点を組合せて最適化します。最大の前提は止めてよい負荷と絶対に止められない負荷を厳密に切り分けることです。
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
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール入門</Link>
              、削減効果は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              、契約電力の考え方は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）とは</Link>
              を参照。なお制御設計はあくまで判断材料です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              部門別の最適戦略 — 手術室／ICU／病棟／外来
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の省エネは部門ごとに臨床要件が異なるため、部門別に最適戦略を分けて設計します。重要諸室は要件厳守、影響の小さい区域から段階的に着手するのが基本です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">手術室（OR）の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>清浄度・換気量・術野環境は要件を厳守</li>
                  <li>未使用時間帯のセットバック運転</li>
                  <li>高効率空調・全熱交換器で換気ロス低減</li>
                  <li>温度設定の一律緩和は行わない</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ICU・重症系の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>厳格な温湿度管理を維持</li>
                  <li>UPS・非常用電源の冗長確保を最優先</li>
                  <li>削減対象から除外し安全側に設計</li>
                  <li>医療機器の局所冷却を効率化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">病棟の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>療養環境を保ちつつ共用部を調光・調整</li>
                  <li>高効率エアコン更新と外気導入の最適化</li>
                  <li>給湯の電気ヒートポンプ化と夜間蓄熱</li>
                  <li>患者快適性を損なわない範囲で実施</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">外来・共用部の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>診療時間外のゾーン別空調停止・抑制</li>
                  <li>待合・廊下のLED化と人感制御</li>
                  <li>予冷運転で日中ピークを平準化</li>
                  <li>削減余地が最も大きい着手対象</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              部門別の切り分けは自院の臨床体制に合わせた判断材料であり、特定の電力会社・契約形態を推奨するものではありません。共用部対策は{" "}
              <Link href="/office-building-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルのピークカット</Link>
              も参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              BCP・無停電とピークカットの両立 — 電源自立と安全確保
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院は災害拠点としての機能維持が前提であり、ピークカットは『電源の信頼性を高めながら需要を平準化する』方向で設計します。非常用発電機・UPS・蓄電池を組合せ、重要負荷の無停電性を確保したうえで止めてよい負荷だけを対象にします。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電源自立の設計軸</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>重要負荷（手術・透析・ICU）は無停電を最優先</li>
                  <li>蓄電池はピークシフトと非常用電源を兼用</li>
                  <li>コージェネで系統依存と排熱ロスを低減</li>
                  <li>太陽光＋蓄電池で災害時電源を確保</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">両立のための運用ルール</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>制御対象から重要負荷を完全に除外</li>
                  <li>影響のない領域に限定した需要平準化</li>
                  <li>猛暑・災害時のフェイルセーフ運転を定義</li>
                  <li>定期的な負荷見直しと制御ロジック検証</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蓄電池とBCPの設計は{" "}
              <Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池×BCP×ピークカット</Link>
              、夏のピークシフトは{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR入門・夏のピークシフト</Link>
              を参照。本節も判断材料の整理であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（病院の夏季ピーク対策） — SII・PPA・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の夏季ピーク対策に活用しやすい補助金は4本柱です。投資のタイミングを補助金スケジュールと合わせると自己負担を圧縮して投資回収を短縮できます。複数補助金の組合せ申請で採択率が高まる傾向があり、医療・防災系支援との併用も検討に値します。
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
              個別制度は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金の活用</Link>
              、{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              を参照。補助制度の活用方針も中立的な判断材料であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              病院の夏季ピーク対策チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピーク対策の立案前に、このチェックリストで自院の状況を整理してください。1項目でも未確認があれば、相見積の精度や交渉力、患者安全との両立設計の質が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              固定プランの適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、シリーズ全体は{" "}
              <Link href="/articles/seasonal-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">季節別の電気代対策（一覧）</Link>
              を参照。チェックリストの活用も判断材料の整理にすぎません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで病院の夏季ピーク対策を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              病院の夏季電気代は病床規模・診療科構成・高度医療機器の有無・空調比率で大きく異なります。シミュレーターで自院条件の夏季上振れ幅と、高効率空調・蓄電池・自家消費太陽光・DR参加のメリットを定量化できます。電気代はkWh×単価で積み上がるため、使用量とピークの平準化効果を数字で確認するのが第一歩です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスクを確認する</li>
              <li>部門別・規模別のピークカット削減ポテンシャルを試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を中立的に把握する</li>
              <li>高効率設備・蓄電池投資の投資回収シナリオを比較する</li>
              <li>代表シナリオの夏季ピーク約12〜15%圧縮の自院適用可能性を見立てる</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              施設条件を入れて試算するなら{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              から始められます。試算結果は判断材料であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-12"
            />
            <GlossaryLinks currentSlug="hospital-summer-peak-strategy" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別戦略のハブ。" },
              { href: "/case-study-hospital-peak-cut", title: "病院のピークカット事例", description: "病院の実際のピークカット事例を詳説。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "病院の電力プロファイルと料金見直し手順。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と主要プログラム比較。" },
              { href: "/battery-storage-bcp-peak-cut-hybrid", title: "蓄電池×BCP×ピークカット", description: "BCPと省エネを両立する蓄電池設計。" },
              { href: "/demand-control-guide", title: "デマンドコントロール入門", description: "契約電力管理の基礎を解説。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド制御の削減効果試算。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）とは", description: "契約電力の決まり方と最適化。" },
              { href: "/office-building-peak-cut", title: "オフィスビルのピークカット", description: "共用部のZEB化・BEMSでピーク削減。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "高効率空調・熱源更新の主力補助金。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上太陽光の投資回収の考え方。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "病院など連続稼働業種のプラン選択。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "施設条件を入れて規模別に試算。" },
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策 一覧", description: "季節別シリーズのハブページ。" },
            ]}
          />

          <ContentCta
            heading="自院の夏季ピーク対策をシミュレーターで確認する"
            description="病床規模・診療科構成・空調比率をもとに、夏季電気代の上振れ幅と高効率空調・蓄電池・自家消費太陽光・DR参加のメリットを試算できます。患者安全とBCPを最優先にした計画策定にもご活用ください。"
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
            description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・医療機関の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
