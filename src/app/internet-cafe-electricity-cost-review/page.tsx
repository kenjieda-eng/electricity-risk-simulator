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
  "ネットカフェ・マンガ喫茶の電気料金見直しポイント｜個室PC・個室空調・24h稼働・深夜単価活用の最適化";
const pageDescription =
  "ネットカフェ・マンガ喫茶の電気料金見直しを解説。個室PC（数十〜数百台）、個室空調、サーバー、看板照明24h、PC省電力モード、店舗ピーク管理、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ネットカフェ マンガ喫茶 電気料金 見直し",
    "ネットカフェ 電気代",
    "個室PC 電力 省電力",
    "24時間稼働 補助金",
    "ネットカフェ チェーン 一括契約",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/internet-cafe-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/internet-cafe-electricity-cost-review",
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
    label: "個室PC＋モニター（数十〜数百台同時稼働）",
    detail:
      "ネットカフェ・マンガ喫茶の中核設備。個室PC1台あたり100〜300W＋モニター50〜150W、1店舗あたり50〜200台。総設備10〜80kWで24h連続稼働の場合あり。店舗電力の30〜50%を占める。省電力モード設定の有無で消費電力が大きく変動。",
  },
  {
    label: "個室空調（多区画個別制御）",
    detail:
      "ネットカフェ・マンガ喫茶の個室・パーティション区画の空調。1店舗あたり総設備20〜80kWで24h連続稼働。個室間の温度差確保のため細かな個別制御が必要で、空調コストが店舗電力の25〜40%を占める。",
  },
  {
    label: "サーバー・ネットワーク機器・ゲーム機",
    detail:
      "店内サーバー、ネットワーク機器、共用ゲーム機（VR・大型ゲーム機等）、課金システム・受付端末等。1店舗あたり総設備2〜10kWで24h連続稼働。サーバールームの空調も別途必要。",
  },
  {
    label: "店内照明（24h点灯）・看板照明",
    detail:
      "24h営業のための店内LED照明・看板照明。1店舗あたり総設備3〜10kW、24時間連続稼働。LED化済みでも24h点灯のため年間電力消費は無視できない。",
  },
  {
    label: "シャワー給湯・自販機・厨房",
    detail:
      "シャワー利用客向けの給湯（電気給湯器またはエコキュート）、店内自販機・コーヒーマシン・簡易厨房設備（電子レンジ・カップ麺給湯等）の合計2〜10kW。長時間滞在客向けサービスの電力負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本複合カフェ協会・経産省特定サービス産業実態調査によれば、ネットカフェ・マンガ喫茶業の電気料金は売上高の8〜15%（24h営業・個室PC多い店舗で最高水準）。事業原価に占める比率は15〜25%。24h個室空調＋PC連続稼働が業種固有のコスト構造を形成。",
  },
  {
    label: "個室1部屋あたりの電力使用量",
    detail:
      "PC＋モニター＋個室空調の合計で1部屋年1,500〜3,500 kWhが業界平均。PC省電力モード未設定店舗は1部屋年3,000〜5,000 kWh、最新省電力設定店舗は1部屋年1,000〜2,000 kWhに圧縮可能。",
  },
  {
    label: "店舗・チェーン規模別の年間使用量",
    detail:
      "小規模店（年商3,000〜8,000万円、PC50〜80台）で年間10〜25万 kWh、中規模FC（年商8,000万〜3億円、PC100〜200台）で年間25〜80万 kWh、多店舗チェーン100店舗超（年商200億円超）で本部含む年間5,000万〜1.5億 kWh。中規模以上は高圧契約が標準。",
  },
];

const costFactors = [
  {
    label: "24h個室空調＋PC連続稼働のベースロード",
    detail:
      "個室空調・PC・サーバーは24h連続稼働必須。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模FC（月5万kWh）で月5万円、年間60万円規模のインパクト。",
  },
  {
    label: "PC省電力モード未設定のコスト浪費",
    detail:
      "個室PCに省電力モード（一定時間操作なしで画面オフ・スリープ）が未設定の場合、PC1台あたり年間2,000〜4,000円の余分な電気代が発生。100台店舗で年20〜40万円、500台店舗で年100〜200万円の浪費。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間50万kWh使用の中規模FCで年209万円の負担。多店舗チェーンでは負担額が請求総額の10〜15%に達する。",
  },
  {
    label: "夜間滞在客（深夜単価活用）",
    detail:
      "深夜・早朝の長時間滞在客（ナイトパック利用）が売上の中核。深夜単価が低い電力プランの活用で、深夜帯（22-8時）の連続稼働コストを5〜15%削減可能。",
  },
  {
    label: "店舗ピーク管理と本部一括契約",
    detail:
      "100店舗超のチェーンでは本部一括電力契約で年数千万円〜億円規模の削減事例あり。個店毎契約より新電力相見積で大幅な単価交渉力を獲得できる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模店（PC50〜80台、年商3,000〜8,000万円）",
    profile: "個人経営・地域単独店／低圧 40〜100kW／年間 10〜25万 kWh",
    annualCost: "年間電気代 350万〜850万円",
    note: "PC省電力モード設定・LED化・空調制御・新電力切替で年8〜15%削減事例。",
  },
  {
    size: "中規模FC（PC100〜200台、年商8,000万〜3億円）",
    profile: "FC加盟店・都市部・複合カフェ／高圧 100〜250kW／年間 25〜80万 kWh",
    annualCost: "年間電気代 850万〜2,800万円",
    note: "デマンドコントローラー＋PC省電力設定＋空調最適化＋新電力切替で年10〜18%削減事例。",
  },
  {
    size: "多店舗チェーン100店舗超（年商200億円超）",
    profile: "全国大手チェーン（快活CLUB・自遊空間等）／高圧合計 5,000〜15,000kW／年間 5,000万〜1.5億 kWh",
    annualCost: "年間電気代 17〜52億円",
    note: "本部一括電力契約＋長期固定＋全店PC省電力統一＋空調制御＋自家消費太陽光＋深夜単価活用で年10〜16%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模ネットカフェの年間12%削減（Before/After）",
    before: "都内のネットカフェA店（PC60台、低圧 80kW、年間 18万 kWh、年間電気代 630万円）。電力会社デフォルトプラン、PC省電力モード未設定、空調10年経過、白熱灯・蛍光灯混在。",
    after: "新電力切替（固定3年）／PC省電力モード全台設定（30分操作なしで画面オフ・1時間でスリープ）／LED全面更新／高効率エアコン更新（補助1/3活用）／深夜帯の照明セットバック制御／デマンドコントローラー導入。",
    result: "年間電気代 630万円 → 554万円（▲12%、▲76万円）／契約 kW 80→65／投資回収 補助金後 2.5年",
  },
  {
    title: "事例2：中規模FCネットカフェの年間15%削減",
    before: "関東の複合カフェFC加盟店B店（PC180台、高圧 200kW、年間 60万 kWh、年間電気代 2,100万円）。市場連動プランで2022〜2023年に月最大80万円の追加負担。個室空調・PC連続稼働でデマンドピーク高止まり。",
    after: "固定3年プラン切替／PC省電力モード全台統一設定／個室空調インバータ化＋人感センサー連動／LED全面更新／高効率エアコン更新／サーバー高効率化／深夜帯の店内照明セットバック制御／デマンドコントローラー設置／BEMS導入。",
    result: "年間電気代 2,100万円 → 1,785万円（▲15%、▲315万円）／契約 kW 200→165／投資回収 補助金後 3年",
  },
  {
    title: "事例3：100店舗チェーンの年間4.5億円削減",
    before: "全国120店舗大手複合カフェチェーンC社（本部含む合計高圧 12,000kW、年間 8,000万 kWh、年間電気代 28億円）。各店個別契約継続、店舗毎の契約条件バラつき。",
    after: "本部一括電力契約の締結／長期5年固定プラン／全店PC省電力モード統一設定／全店LED統一・高効率エアコン更新／個室空調インバータ化全店展開／自家消費太陽光（本部物流＋大型店30店、合計3MW）／DR契約締結／BEMS全店標準化／深夜単価プランの活用／需要家主導型PPA。",
    result: "年間電気代 28億円 → 23.5億円（▲16%、▲4.5億円）／契約 kW 12,000→10,200／投資回収 補助金後 4年／CO₂削減 約12,000 t/年",
  },
];

const demandManagement = [
  {
    label: "PC省電力モードの全台統一設定",
    detail:
      "個室PCに30分操作なしで画面オフ、1時間でスリープモードを統一設定。PC電力▲20〜40%、店舗電力▲5〜10%。投資ゼロで実施可能な最優先施策。",
  },
  {
    label: "個室空調の人感センサー連動制御",
    detail:
      "個室の在室状況を人感センサーで検知し、無人時は空調を省エネモードに自動切替。個室空調コスト▲10〜20%、店舗ピーク電力▲5〜10%。",
  },
  {
    label: "深夜単価プランの活用",
    detail:
      "深夜単価が低い電力プラン（深夜割引型）の活用で、深夜帯（22-8時）の連続稼働コスト▲5〜15%。ネットカフェは深夜利用客比率が高く効果大。",
  },
  {
    label: "多店舗チェーンの本部一括契約",
    detail:
      "100店舗超のチェーンで本部一括契約により、店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮可能。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用設備型）",
    target: "業務用エアコン更新・LED化・高効率PC・サーバー",
    rate: "中小1/2、大企業1/3、上限機種別",
    note: "ネットカフェの主力補助金。個室空調・PC更新で採択事例多数。",
  },
  {
    name: "中小企業向け 省エネ支援補助金",
    target: "LED化・空調更新・PC更新",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "個人店・FC加盟店で活用しやすい中小事業者向け制度。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光補助金",
    target: "屋根設置型自家消費太陽光・蓄電池",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "本部物流センター・大型店の屋根面積を活用したチェーン向け。24h稼働で自家消費率高い。",
  },
  {
    name: "ZEB / ZEH-M 補助金（環境省）",
    target: "店舗の高断熱化・高効率空調・自家消費太陽光",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "新築店舗・大規模リニューアル時に活用しやすい。",
  },
  {
    name: "自治体独自の省エネ補助金",
    target: "LED・空調・PC更新",
    rate: "自治体ごとに異なる（1/3〜1/2）",
    note: "都道府県・市区町村の独自制度。中小店で活用しやすい。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "個室PC・モニター・サーバー・空調の電力使用量を24h時系列で把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "個室PC・個室空調・サーバー・看板照明・給湯の電力プロファイルを把握しているか",
  "PC省電力モードの全台統一設定の効果を試算したか（投資ゼロ施策）",
  "個室空調の人感センサー連動制御の投資回収試算を実施したか",
  "LED化・高効率エアコン更新の投資回収試算を実施したか",
  "深夜単価プランへの切替効果を試算したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多店舗チェーンの場合、本部一括契約への切替を検討したか",
  "SII・自家消費太陽光補助・ZEB補助・自治体補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ネットカフェ・マンガ喫茶の電気代水準はどれくらいですか？", answer: "売上高比8〜15%（24h営業・個室PC多い店舗で最高水準）、事業原価比15〜25%が業界平均。中規模FC加盟店（年商2億円級）で年850〜2,800万円、100店舗超大手チェーン（年商200億円超）で年17〜52億円規模の電気代になります。" },
  { question: "個室PCの電気代を削減するには？", answer: "①PC省電力モードの全台統一設定（投資ゼロで電力▲20〜40%）、②最新省電力PC（ノートPC型・低消費電力CPU）への更新、③モニターの自動電源OFF設定、④利用客の操作待機状態の検知、⑤BEMSによる電力使用パターン可視化の5本柱が中心。100台店舗で年20〜40万円の削減が目安。" },
  { question: "個室空調の電気代を削減するには？", answer: "①人感センサー連動の個別空調制御（無人時省エネ）、②空調インバータ化、③高効率エアコン更新、④個室間の断熱強化、⑤BEMSによる空調プロファイル最適化の5本柱が効果的。中規模店で年100〜300万円の削減が目安。" },
  { question: "ネットカフェの固定プランと市場連動プランどちらが向きますか？", answer: "個室空調・PC・サーバーの24h連続稼働で全時間帯に電力消費があるため、市場連動プランは2022〜2023年の市場高騰局面で月最大80万円の追加負担事例あり。固定プランが原則向きます。深夜単価活用なら部分的に深夜プラン併用も検討余地あり。" },
  { question: "深夜単価プランは有利ですか？", answer: "ネットカフェは深夜利用客比率が高く、ナイトパック利用が売上の中核。深夜単価が低い電力プラン（深夜割引型）の活用で、深夜帯（22-8時）の連続稼働コスト▲5〜15%。中規模店で年50〜200万円の削減が目安。" },
  { question: "PC省電力モード設定はどう進める？", answer: "①Windowsの電源管理で30分画面オフ・1時間スリープを統一設定、②モニターの自動電源OFF設定、③BIOSの省電力モード設定、④利用客操作ログでの実態把握、⑤店舗管理ソフトでの一括設定の5本柱が中心。投資ゼロで実施可能、即効性の高い施策。" },
  { question: "ネットカフェ向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、中小企業向け省エネ支援補助金、需要家主導型PPA補助、ZEB補助金、自治体独自補助の5本柱。空調＋LED＋PC更新の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "100店舗超チェーンで本部一括契約のメリットは？", answer: "店舗毎契約比で単価▲5〜10%、デマンド一括管理で更にコスト圧縮、新電力相見積の交渉力大幅向上、契約管理工数の削減、サスティナビリティ報告の集約化が可能。100店舗で年3〜5億円規模の削減事例があります。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本複合カフェ協会（JCCA）", url: "https://www.jcca.ne.jp/" },
  { name: "経済産業省 特定サービス産業実態調査", url: "https://www.meti.go.jp/statistics/tyo/tokusabizi/index.html" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function InternetCafeElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/internet-cafe-electricity-cost-review"
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
          <span className="text-slate-800">ネットカフェ・マンガ喫茶の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ネットカフェ・マンガ喫茶の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ネットカフェ・マンガ喫茶は、個室PC＋モニター（数十〜数百台同時稼働）、個室空調、サーバー、看板照明24h、シャワー給湯など多面的な電力負荷を持ち、24h個室空調＋PC連続稼働とPC省電力モード設定が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ネットカフェの電力使用プロファイル（個室PC／個室空調／サーバー／照明／給湯）</li>
              <li>業界平均の電気代水準（売上高比8〜15%）と1部屋あたり単価</li>
              <li>PC省電力モード統一設定・個室空調人感センサー連動の費用対効果</li>
              <li>規模別（小・中・100店舗チェーン）の電気代と削減事例3件（Before/After）</li>
              <li>深夜単価プラン活用の論点</li>
              <li>SII・中小企業補助・自家消費太陽光・ZEB補助・自治体補助の組合せ活用</li>
              <li>ネットカフェ向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ネットカフェの電力使用特性 — 個室PC・個室空調・サーバー・照明
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェ・マンガ喫茶の電力使用は『個室PC＋モニター／個室空調／サーバー・ネットワーク／看板照明24h／給湯・自販機・厨房』の5層で構成されます。個室PC連続稼働と個室空調24h稼働が業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比8〜15%、1部屋あたり1,500〜3,500 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェの電気代水準はPC省電力モード設定の有無で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本複合カフェ協会・経産省特定サービス産業実態調査から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ネットカフェの主要な電気代上昇要因 — 24h稼働・PC省電力・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェの電気代上昇は、24h個室空調＋PC連続稼働のベースロード、PC省電力モード未設定のコスト浪費、再エネ賦課金の年次上昇、深夜単価活用余地、店舗ピーク管理と本部一括契約が複合的に重なります。
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
              規模別の削減事例3件 — 小規模店／中規模FC／100店舗チェーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェの電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/amusement-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">アミューズメント施設の電気料金見直し</Link>
              、{" "}
              <Link href="/business-hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ビジネスホテルの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              個室PC・個室空調のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェはPC省電力モードの全台統一設定、個室空調の人感センサー連動制御、深夜単価プラン活用、多店舗本部一括契約など、業種特有のデマンド管理戦略が極めて効果的です。
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
              ネットカフェは個室空調・PC・サーバーの24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。深夜単価プランの併用も検討余地あり。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>個室空調・PC 24h稼働必須</li>
                  <li>利用客の快適性確保のため空調停止困難</li>
                  <li>ナイトパック料金への即時転嫁が困難</li>
                  <li>多店舗管理で予実管理が重要</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調連続稼働</li>
                  <li>夜間滞在客集中時にPC・空調集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で月最大80万円の追加負担</li>
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
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ネットカフェの中規模FCでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模FCネットカフェ（年60万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 209万円</li>
                  <li>2025年度（3.98円/kWh）：年 239万円（+30万円）</li>
                  <li>2026年度（4.18円/kWh）：年 250.8万円（+41.8万円）</li>
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
              ネットカフェ特有の節電・省エネ施策 — PC省電力・個室空調・深夜単価・本部一括
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェの省エネは『PC省電力モード全台統一設定（投資ゼロ）』『個室空調人感センサー連動』『LED全面更新』『深夜単価プラン活用』『多店舗本部一括契約』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">PC省電力モード全台統一設定</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>30分画面オフ・1時間スリープを統一</li>
                  <li>PC電力▲20〜40%、店舗電力▲5〜10%</li>
                  <li>投資ゼロ、即効性高い最優先施策</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">個室空調人感センサー連動</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>無人時に空調省エネモード</li>
                  <li>個室空調コスト▲10〜20%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">深夜単価プラン活用</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>深夜帯（22-8時）の連続稼働コスト▲5〜15%</li>
                  <li>ナイトパック利用率の高い店舗で効果大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">多店舗チェーン本部一括契約</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>本部一括契約で単価▲5〜10%</li>
                  <li>100店舗で年3〜5億円の削減事例</li>
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
              補助金活用（業種別） — SII・中小企業補助・PPA・ZEB・自治体補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェ向けに活用しやすい補助金は5本柱。個室空調＋LED＋PC更新はSII＋中小企業補助＋自治体補助の組合せで補助率を最大化できます。
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
              ネットカフェに合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社ネットカフェ店舗の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ネットカフェは個室PC・個室空調24h連続稼働・PC省電力モード未設定・燃料費調整変動の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>個室PC・個室空調連続稼働の電気代影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜16%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="internet-cafe-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/amusement-facility-electricity-cost-review", title: "アミューズメント施設の電気料金見直し", description: "24h営業・空調・機器電力が共通。" },
              { href: "/business-hotel-electricity-cost-review", title: "ビジネスホテルの電気料金見直し", description: "個室空調・24h稼働が共通の論点。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "個室空調・24h稼働が共通の論点。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "24h営業として共通の論点。" },
              { href: "/coin-laundry-electricity-cost-review", title: "コインランドリーの電気料金見直し", description: "24h無人運営として共通の論点。" },
              { href: "/single-restaurant-electricity-cost-review", title: "単独飲食店の電気料金見直し", description: "店舗運営として共通の論点。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設の電気料金見直し", description: "施設運営として共通の論点。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "ネットカフェが市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "多店舗チェーンの投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "個室空調・LED更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "24h稼働事業者のリスク。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "月次変動の根本要因。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "年次上昇の負担額試算。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社のネットカフェ店舗条件でリスクを確認する"
            description="個室PC・個室空調・サーバー・看板照明・シャワー給湯の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。PC省電力モード設定後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="ネットカフェ・マンガ喫茶の電力契約見直し、専門家に相談しませんか？"
            description="個室PC・個室空調・サーバー・看板照明の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でネットカフェ事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
