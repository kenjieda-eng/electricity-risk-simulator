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
  "理容室・美容室の電気料金見直しポイント｜シャンプー給湯・ドライヤー同時稼働・店内空調の契約最適化";
const pageDescription =
  "理容室・美容室の電気料金見直しを解説。シャンプー湯沸し給湯、ドライヤー同時稼働ピーク、施術空調、演出LED、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "理容室 美容室 電気料金 見直し",
    "サロン 電気代",
    "ドライヤー 給湯 電力",
    "美容室 エコキュート",
    "美容室 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/hair-salon-barber-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hair-salon-barber-electricity-cost-review",
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
    label: "シャンプー給湯（給湯器・エコキュート）",
    detail:
      "理容室・美容室の中核設備。シャンプー1回あたり40〜60Lの温水使用、1日あたり数十〜数百回の給湯需要。電気給湯器（瞬間式・貯湯式）またはエコキュートで店舗総設備5〜30kWの常時負荷。サロン全体の電力使用量の20〜35%を占める。",
  },
  {
    label: "ドライヤー（同時稼働ピーク負荷）",
    detail:
      "プロ用ドライヤー1台あたり1,200〜1,800W。土日午後のピーク時間帯（12-18時）に複数席同時稼働で店舗ピーク電力の30〜50%を形成。小規模サロンで瞬間最大10〜15kW、中規模チェーン店で30〜60kWに達する。デマンド契約電力の決定要因。",
  },
  {
    label: "施術空調・店内空調",
    detail:
      "施術中の客の快適性確保のための業務用エアコン（壁掛けまたは天井カセット）。1店舗あたり総設備5〜30kWで営業時間中（10-20時程度）連続稼働。夏季・冬季はピーク負荷の大きな要因。",
  },
  {
    label: "店内照明（演出LED・施術灯）",
    detail:
      "サロンの内装演出を支える調光LED照明、鏡周りの施術用照明、エントランス演出照明等。1店舗あたり総設備1〜5kW、営業時間中の常時稼働。LED化済みでも演出用に多灯化されると消費は無視できない。",
  },
  {
    label: "店内BGM・受付POS・カラーリング機器",
    detail:
      "店内BGMスピーカー、受付POS・予約端末、カラーリング加温機・ヘッドスパ機器、トリートメント機器（スチーマー等）の合計1〜5kW。常時または間欠稼働で店舗のベースロードを形成。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全日本美容業生活衛生同業組合連合会・全国理容生活衛生同業組合連合会・経産省商業統計によれば、理容室・美容室の電気料金は売上高の2〜5%（給湯比重が大きい店舗ほど高水準）。店舗運営原価に占める比率は5〜10%。シャンプー給湯とドライヤー同時稼働が業種固有のコスト構造を形成。",
  },
  {
    label: "施術席1席あたりの電力使用量",
    detail:
      "1席あたり年間2,500〜5,000 kWhが業界平均。給湯方式（電気給湯器／エコキュート／ガス）で大きく変動。電気給湯器中心の店舗は1席年4,000〜6,000 kWh、エコキュート＋ガス併用店舗は1席年2,000〜3,000 kWhに収まる。",
  },
  {
    label: "店舗規模別の年間使用量",
    detail:
      "小規模1〜3席（年商1,000〜3,000万円）で年間1.5〜5万 kWh、中規模4〜10席チェーン（年商3,000万〜2億円）で年間10〜50万 kWh、大規模美容室・100店舗FC（年商100億円超）で本部含む年間1,000万〜3,000万 kWh。小規模は低圧、中規模以上は高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "ドライヤー同時稼働によるデマンドピーク",
    detail:
      "土日午後のピーク時間帯にドライヤーが複数席同時稼働すると、瞬間最大電力（デマンド）が大きく跳ね上がる。デマンド料金（基本料金）の決定要因となり、店舗単位で月数千〜数万円の差を生む。デマンドコントローラー・空調セットバック制御で平準化が必須。",
  },
  {
    label: "シャンプー給湯のエネルギーコスト",
    detail:
      "電気給湯器（瞬間式）は使用時の電力負荷が大きく、ピーク料金時間帯の使用が電気代を押し上げる。エコキュート切替で消費電力1/3、深夜電力プラン適合で更にコスト圧縮可能。年商5,000万円規模の店舗で年20〜50万円の差。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間20万kWh使用の中規模サロンで年83.6万円の負担。多店舗FCチェーンでは負担額が請求総額の10〜15%に達する。",
  },
  {
    label: "燃料費調整額の月次変動",
    detail:
      "燃料費調整額1円/kWhの変動で、中規模サロン（月1.5万kWh）で月1.5万円、年間18万円の差。給湯・空調主体の業種は月次の電気代変動が経営収支に直結。",
  },
  {
    label: "FC本部の電力契約と店舗一括契約",
    detail:
      "100店舗FCチェーンでは本部による一括電力契約で年数千万円規模の削減事例あり。個店毎契約より新電力相見積で大幅な単価交渉力を獲得できる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模理容室・美容室（1〜3席、年商1,000〜3,000万円）",
    profile: "個人サロン・地域密着型／低圧 10〜30kW／年間 1.5〜5万 kWh",
    annualCost: "年間電気代 60万〜200万円",
    note: "LED化・エコキュート切替・深夜電力プラン適合で年10〜18%削減事例。",
  },
  {
    size: "中規模美容室チェーン（4〜10席、年商3,000万〜2億円）",
    profile: "都市部中堅サロン・複数席チェーン／高圧 60〜200kW／年間 10〜50万 kWh",
    annualCost: "年間電気代 300万〜1,500万円",
    note: "デマンドコントローラー＋空調最適化＋エコキュート＋新電力切替で年12〜18%削減事例。",
  },
  {
    size: "大規模美容室・100店舗FC（合計、年商100億円超）",
    profile: "全国FCチェーン・大手美容室／高圧合計 1,000〜3,000kW／年間 1,000万〜3,000万 kWh",
    annualCost: "年間電気代 3億〜10億円",
    note: "本部一括電力契約＋長期固定＋全店LED統一＋エコキュート標準化で年8〜15%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模美容室の年間15%削減（Before/After）",
    before: "都内の個人美容室A店（4席、低圧 25kW、年間 3万 kWh、年間電気代 150万円）。電気給湯器（瞬間式）使用、空調10年経過、白熱灯・蛍光灯混在。",
    after: "新電力切替（固定3年）／エコキュート導入（補助1/3活用、投資40万円）／LED全面更新／高効率エアコン更新／深夜電力プラン適合（オール電化プラン）／デマンドコントローラー導入。",
    result: "年間電気代 150万円 → 127.5万円（▲15%、▲22.5万円）／契約 kW 25→20／投資回収 補助金後 2年",
  },
  {
    title: "事例2：中規模美容室チェーンの年間17%削減",
    before: "関東5店舗を運営する中堅美容室チェーンB社（合計高圧 600kW、年間 25万 kWh、年間電気代 800万円）。市場連動プランで2022〜2023年に月最大30万円の追加負担。土日ドライヤー同時稼働でデマンドピーク高止まり。",
    after: "固定3年プラン切替／全店エコキュート統一導入／LED全面更新／高効率エアコン更新／デマンドコントローラー各店設置／ドライヤー使用時間帯の空調セットバック制御／BEMS導入。",
    result: "年間電気代 800万円 → 664万円（▲17%、▲136万円）／契約 kW 600→480／投資回収 補助金後 2.5年",
  },
  {
    title: "事例3：100店舗FCチェーンの年間1.2億円削減",
    before: "全国100店舗FC美容室チェーンC社（本部含む合計高圧 2,000kW、年間 2,500万 kWh、年間電気代 8億円）。各店個別契約継続、店舗毎の契約条件バラつき。",
    after: "本部一括電力契約の締結／長期5年固定プラン／全店LED統一・エコキュート標準化／本部に集約した新電力相見積（10社）／自家消費太陽光（本部研修所＋大型店20店、合計500kW）／DR契約締結／BEMS全店標準化／FC本部によるエネルギーマネジメント支援。",
    result: "年間電気代 8億円 → 6.8億円（▲15%、▲1.2億円）／契約 kW 2,000→1,750／投資回収 補助金後 4年／CO₂削減 約2,500 t/年",
  },
];

const demandManagement = [
  {
    label: "ドライヤー同時稼働時の空調セットバック制御",
    detail:
      "土日午後のピーク時間帯にドライヤー同時稼働を検知し、施術空調を一時的に設定温度±1℃で自動調整。デマンドコントローラーで店舗ピーク電力を10〜20%削減した事例。",
  },
  {
    label: "シャンプー給湯のエコキュート＋深夜電力活用",
    detail:
      "電気給湯器→エコキュートへ切替で消費電力▲約2/3、深夜電力プランで給湯コスト▲30〜50%。中規模店舗で年20〜50万円の削減。",
  },
  {
    label: "BGM・演出照明の営業時間連動制御",
    detail:
      "BGM・演出LED・エントランス照明を営業時間連動でON/OFF制御。閉店後の待機電力を削減し、年5〜10万円の削減。",
  },
  {
    label: "多店舗FCの本部一括電力契約",
    detail:
      "100店舗超のFCチェーンで本部一括契約により、店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "業務用エアコン更新・LED化・エコキュート・高効率給湯器",
    rate: "中小1/2、大企業1/3、上限機種別",
    note: "理容室・美容室の主力補助金。エコキュート導入で大規模採択事例多数。",
  },
  {
    name: "中小企業向け 省エネ支援補助金",
    target: "LED化・空調更新・給湯器更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "個人サロン・中規模チェーンで活用しやすい中小事業者向け制度。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光補助金",
    target: "屋根設置型自家消費太陽光・蓄電池",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "本部研修所・大型店の屋根面積を活用したFCチェーン向け。",
  },
  {
    name: "ZEB / ZEH-M 補助金（環境省）",
    target: "店舗の高断熱化・高効率空調・自家消費太陽光",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "新築店舗・大規模リニューアル時に活用しやすい。",
  },
  {
    name: "自治体独自の省エネ補助金",
    target: "LED・空調・給湯器更新",
    rate: "自治体ごとに異なる（1/3〜1/2）",
    note: "都道府県・市区町村の独自制度。中小サロンで活用しやすい。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "ドライヤー同時稼働時のピーク電力を時間帯別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "シャンプー給湯・ドライヤー・空調・照明の電力プロファイルを把握しているか",
  "電気給湯器→エコキュート切替の投資回収試算を実施したか",
  "LED化・高効率エアコン更新の投資回収試算を実施したか",
  "深夜電力プラン・オール電化プランの適合性を試算したか",
  "デマンドコントローラー・空調セットバック制御を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多店舗FCの場合、本部一括契約への切替を検討したか",
  "SII・自家消費太陽光補助・ZEB補助・自治体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "理容室・美容室の電気代水準はどれくらいですか？", answer: "売上高比2〜5%（給湯比重の大きい店舗ほど高水準）、店舗運営原価比5〜10%が業界平均。中規模美容室チェーン（年商1億円級）で年300〜1,500万円、100店舗FCチェーン（年商100億円超）で年3〜10億円規模の電気代になります。" },
  { question: "ドライヤー同時稼働のピーク電力を抑えるには？", answer: "①デマンドコントローラー導入、②ドライヤー使用時間帯の空調セットバック制御、③土日ピーク時の混雑分散（予約管理）、④消費電力の少ない最新ドライヤーへの更新、⑤BEMS導入の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "シャンプー給湯のエコキュート切替は投資回収できますか？", answer: "電気給湯器（瞬間式）→エコキュート切替で消費電力▲約2/3、深夜電力プランで給湯コスト▲30〜50%。中規模店舗で年20〜50万円の削減、SII補助＋自治体補助の組合せで投資回収2〜3年が目安です。" },
  { question: "美容室の固定プランと市場連動プランどちらが向きますか？", answer: "土日午後のピーク時間帯（市場高値時間帯）に給湯・空調・ドライヤーが集中するため、市場連動プランは2022〜2023年の市場高騰局面で月最大30万円の追加負担事例あり。固定プランが原則向きます。" },
  { question: "深夜電力プラン・オール電化プランは美容室で有利ですか？", answer: "エコキュートで深夜帯（23-7時）に給湯を蓄熱する運用ができれば、給湯コスト▲30〜50%。営業時間帯（10-20時）の電気代も削減可能。シャンプー需要の大きい美容室で特に効果が大きいです。" },
  { question: "美容室向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、中小企業向け省エネ支援補助金、需要家主導型PPA補助、ZEB補助金、自治体独自補助の5本柱。エコキュート＋LED＋高効率エアコンの組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "100店舗FCチェーンで本部一括契約のメリットは？", answer: "店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮、新電力相見積の交渉力大幅向上、契約管理工数の削減、サスティナビリティ報告の集約化が可能。100店舗で年1〜1.5億円規模の削減事例があります。" },
  { question: "自家消費型太陽光は美容室で投資回収できますか？", answer: "屋根面積の小さい単独サロンでは投資効率が低いですが、本部研修所・大型店・FCチェーン本部ビルでは導入余地あり。500kW規模で年50〜70万kWh発電、年500〜700万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全日本美容業生活衛生同業組合連合会", url: "https://www.biyo.or.jp/" },
  { name: "全国理容生活衛生同業組合連合会", url: "https://www.riyo.or.jp/" },
  { name: "経済産業省 商業統計", url: "https://www.meti.go.jp/statistics/tyo/syougyo/index.html" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function HairSalonBarberElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hair-salon-barber-electricity-cost-review"
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
          <span className="text-slate-800">理容室・美容室の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            理容室・美容室の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            理容室・美容室は、シャンプー湯沸しの給湯エネルギー、土日午後ピーク時間帯のドライヤー同時稼働、施術空調、演出LED照明など多面的な電力負荷を持ち、給湯方式とピーク管理が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>理容室・美容室の電力使用プロファイル（給湯／ドライヤー／空調／照明）</li>
              <li>業界平均の電気代水準（売上高比2〜5%）と1席あたり単価</li>
              <li>エコキュート切替・LED化・デマンドコントローラーの費用対効果</li>
              <li>規模別（小・中・100店舗FC）の電気代と削減事例3件（Before/After）</li>
              <li>ドライヤー同時稼働ピークの平準化施策</li>
              <li>SII・中小企業補助・自家消費太陽光・ZEB補助・自治体補助の組合せ活用</li>
              <li>サロン向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              理容室・美容室の電力使用特性 — 給湯・ドライヤー・空調・照明
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室の電力使用は『シャンプー給湯／ドライヤー同時稼働／施術空調／店内照明／BGM・POS・カラー機器』の5層で構成されます。土日午後のドライヤー同時稼働とシャンプー給湯が最大消費要素で業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比2〜5%、1席あたり2,500〜5,000 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室の電気代水準は給湯方式（電気給湯器／エコキュート／ガス）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全日本美容業生活衛生同業組合連合会・全国理容生活衛生同業組合連合会・経産省商業統計から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              理容室・美容室の主要な電気代上昇要因 — ドライヤーピーク・給湯・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室の電気代上昇は、ドライヤー同時稼働によるデマンドピーク、シャンプー給湯コスト、燃料費調整額の月次変動、再エネ賦課金の年次上昇が複合的に重なります。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模サロン／中規模チェーン／100店舗FC
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/beauty-nail-salon-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ネイル・エステサロンの電気料金見直し</Link>
              、{" "}
              <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小売店の電気料金見直し</Link>
              。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ドライヤーピーク・給湯のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室はドライヤー同時稼働時の空調セットバック制御、エコキュート＋深夜電力活用、営業時間連動の照明制御、多店舗FCの本部一括契約など、業種特有のデマンド管理戦略が極めて効果的です。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 土日ピーク時の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室は土日午後のピーク時間帯（市場高値時間帯）に給湯・空調・ドライヤーが集中するため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>土日午後の市場高値時にドライヤー集中</li>
                  <li>シャンプー給湯は連続使用必須</li>
                  <li>客単価への即時転嫁が困難</li>
                  <li>BtoC事業で価格安定性が経営に直結</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>土日午後のピーク時に給湯・ドライヤー集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で月数十万円の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 給湯主体業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。理容室・美容室の中規模チェーンでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模美容室チェーン（年25万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 87.25万円</li>
                  <li>2025年度（3.98円/kWh）：年 99.5万円（+12.25万円）</li>
                  <li>2026年度（4.18円/kWh）：年 104.5万円（+17.25万円）</li>
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
              理容室・美容室特有の節電・省エネ施策 — エコキュート・LED・デマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室の省エネは『エコキュート＋深夜電力』『LED全面更新』『高効率エアコン』『デマンドコントローラー』『多店舗本部一括契約』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">エコキュート＋深夜電力</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>電気給湯器→エコキュートで消費電力▲約2/3</li>
                  <li>深夜電力プラン適合で給湯コスト▲30〜50%</li>
                  <li>SII＋自治体補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED全面更新・演出照明</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>白熱灯・蛍光灯→LEDで照明電力▲50〜70%</li>
                  <li>演出LED調光で内装表現を維持しつつ消費削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">デマンドコントローラー</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ドライヤー同時稼働時の空調セットバック</li>
                  <li>店舗ピーク電力▲10〜20%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">多店舗FC一括契約</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>本部一括契約で単価▲5〜10%</li>
                  <li>100店舗で年1〜1.5億円の削減事例</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・中小企業補助・PPA・ZEB・自治体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室向けに活用しやすい補助金は5本柱。エコキュート＋LED＋空調更新はSII＋中小企業補助＋自治体補助の組合せで補助率を最大化できます。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              理容室・美容室に合った契約見直しチェックリスト（12項目）
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社サロンの状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              理容室・美容室は土日午後のドライヤー同時稼働ピーク・シャンプー給湯コスト・燃料費調整変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>ドライヤー同時稼働ピークの影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜17%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="hair-salon-barber-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/beauty-nail-salon-electricity-cost-review", title: "ネイル・エステサロンの電気料金見直し", description: "美容関連業種で共通点が多い。" },
              { href: "/dry-cleaning-electricity-cost-review", title: "クリーニング店の電気料金見直し", description: "給湯・乾燥電力が共通。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店の電気料金見直し", description: "店舗運営として共通の論点。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "外食チェーンの電気料金見直し", description: "多店舗FC運営として共通の論点。" },
              { href: "/single-restaurant-electricity-cost-review", title: "単独飲食店の電気料金見直し", description: "小規模店舗として共通の論点。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "多店舗FC運営として共通の論点。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "小規模事業所として共通。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "BtoC事業の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "サロンが市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "本部・大型店舗向けの投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "エコキュート・LED更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "月次変動の根本要因。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "年次上昇の負担額試算。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "ドライヤー同時稼働対策の基本。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気代計算機（自社条件で年間電気代を試算）", description: "業種・規模・契約・エリアを入力するだけで推定年間電気代と削減余地3案を即時表示します。" },
            ]}
          />

          <ContentCta
            heading="自社のサロン条件でリスクを確認する"
            description="シャンプー給湯・ドライヤー同時稼働・施術空調・店内照明の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。エコキュート切替後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="理容室・美容室の電力契約見直し、専門家に相談しませんか？"
            description="シャンプー給湯・ドライヤー同時稼働・施術空調・演出照明の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でサロン事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
