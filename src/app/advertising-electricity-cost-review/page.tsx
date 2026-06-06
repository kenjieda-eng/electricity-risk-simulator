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
  "広告業の電気料金見直しポイント｜制作スタジオ・編集機材・サーバーの契約最適化";
const pageDescription =
  "広告業（広告代理店・制作プロダクション・PR会社）の電気料金見直しを解説。制作スタジオの照明・音響、編集機材・サーバー、展示会・イベント時のスポット電力、DX・AI活用による電力需要変化、規模別事例、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "広告業 電気料金 見直し",
    "広告代理店 電気代",
    "制作スタジオ 電力契約",
    "編集機材 サーバー 電気代",
    "PR会社 電気料金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/advertising-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/advertising-electricity-cost-review",
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
    label: "制作スタジオ（照明・音響・撮影機材）",
    detail:
      "TVCM・WEB動画制作の撮影スタジオは、LED/タングステン照明（合計30〜200kW級）、音響卓・モニタリング機材、グリーンバック合成用バトンライトなどが集中稼働する。1日撮影でスタジオ全体の電力使用量は2,000〜8,000kWh、本格大型スタジオでは月20〜60万kWhに達するケースもある。",
  },
  {
    label: "編集機材・カラーグレーディング室",
    detail:
      "編集ルームは1部屋あたりワークステーション3〜10台、4K/8Kマスターモニター（200〜600W級）、外部レンダーノード、NAS（4〜8U）、空調設備が常時稼働。10部屋規模の編集スタジオで月10〜30万kWh、年120〜360万kWhの電力を消費する。",
  },
  {
    label: "オフィス・サーバー（業務システム+クラウド連携）",
    detail:
      "広告代理店の本社オフィスは、社員1人あたり月100〜200kWh（東京都・ビジネスフロアの平均）と通常水準だが、社内DAM（デジタル・アセット・マネジメント）サーバー、レンダーファーム、クラウド連携の通信機器が加わる。",
  },
  {
    label: "展示会・イベント・キャンペーン会場の電力",
    detail:
      "プロモーションイベント・展示会の会場側スポット電力は、ブースあたり10〜100kW（音響・映像・ライティング）。屋外イベントでは仮設発電機+グリッド電源のハイブリッド調達も発生する。短期間の高負荷契約として通常電力契約とは別管理が必要。",
  },
  {
    label: "DX・AI活用（生成AI・レンダリング）",
    detail:
      "近年は生成AI（画像・動画・コピー生成）の社内GPU活用、3DCG/VFXのレンダリングがオンプレ＋クラウド混在で増加。GPUサーバー1台あたり最大2〜5kWの連続消費、レンダリングファーム導入で月の電力使用量が30〜50%増える事例も。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省・電通報告・日本広告業協会等の参考値から、広告業の電気代は売上高比0.2〜0.8%程度。大手代理店本社で年8,000〜2億円、中堅プロダクションで年1,500〜5,000万円、制作スタジオ単体で年3,000万〜1.5億円が一般的なレンジ。",
  },
  {
    label: "従業員1人あたりの電力使用量",
    detail:
      "事務職中心の代理店本社で従業員1人あたり月100〜200kWh、編集・制作スタッフ主体のプロダクションで月200〜500kWh、スタジオ運営会社では月500〜1,500kWh。職種構成比で電気代強度が大きく異なる。",
  },
  {
    label: "拠点規模別の年間使用量",
    detail:
      "小規模PR/制作会社（30〜100名）で年間10〜40万kWh、中堅プロダクション（150〜500名）で年間50〜200万kWh、大手代理店本社（1,000名超）で年間500〜2,000万kWh。低圧〜高圧契約が中心で、本社ビル全体管理は特別高圧も。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額のオフィス契約への影響",
    detail:
      "オフィス中心の広告業でも、燃料費調整額1円/kWhの変動で年間100万kWh使用の拠点で年100万円の差。複数拠点を持つ代理店では合計影響額が数千万円規模になる。2022年以降4〜5円/kWhレンジで推移し継続的な上昇要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間200万kWh使用の中堅代理店で年836万円の負担、5年で4,180万円超。",
  },
  {
    label: "クライアント請求の透明性要求",
    detail:
      "近年は広告主（クライアント）から制作費の内訳開示・透明性が求められ、スタジオ撮影日の電力コストを実費精算するケースも増加。電力単価の上昇は制作コストとして直接見える化される構造に変わりつつある。",
  },
  {
    label: "サステナビリティ・グリーン認証対応",
    detail:
      "外資系広告主・大手ナショナルクライアントは、サプライヤー側にもCDP/SBTi対応や再エネ100%調達を要求。グリーン電力証書・非化石証書の購入コストが新たな負担増要因に。",
  },
  {
    label: "イベント・展示会の需要変動",
    detail:
      "プロモーションイベント開催時はスポット契約・短期高負荷が発生し、契約電力ピーク超過リスクが上がる。デマンド管理が不十分だとイベント月の基本料金が1.5〜2倍に跳ね上がる事例も。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模PR/制作会社（従業員30〜100名）",
    profile: "都内ベンチャー系プロダクション／低圧 50〜150kW／年間 10〜40万kWh",
    annualCost: "年間電気代 300〜1,200万円",
    note: "オフィス＋小規模スタジオ。新電力切替・固定3年契約・LED化・空調更新で年8〜12%削減事例。クライアント請求の透明化対応も急務。",
  },
  {
    size: "中堅プロダクション・代理店支社（従業員150〜500名）",
    profile: "中堅広告代理店・制作プロダクション／高圧 300〜800kW／年間 50〜200万kWh",
    annualCost: "年間電気代 1,500〜6,000万円",
    note: "オフィス＋専用編集スタジオ＋小規模サーバー室。固定5年契約＋LED＋空調最適化＋グリーン電力部分調達で年10〜15%削減事例。",
  },
  {
    size: "大手代理店本社・大型スタジオ運営（従業員1,000名超）",
    profile: "電通・博報堂級本社／特別高圧 2,000〜8,000kW／年間 500〜2,000万kWh",
    annualCost: "年間電気代 1.5〜8 億円",
    note: "1%の単価改善でも年150〜800万円のインパクト。長期固定5〜10年契約＋オフサイトPPA＋自社レンダーファームの省エネが主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅PR会社の年間11%削減（Before/After）",
    before: "都内のPR/コンテンツ制作会社A社（高圧 120kW、年間 35万kWh、年間電気代 1,050万円）。市場連動プラン継続、LED未更新、サーバー室の空調最適化なし、グリーン電力対応なし。",
    after: "新電力切替（固定3年）／全照明LED化（投資 80万円）／サーバー室空調インバータ化／在宅勤務拡大でオフィス稼働率調整／グリーン電力証書 25% 部分調達。",
    result: "年間電気代 1,050万円 → 935万円（▲11%、▲115万円）／契約 kW 120→105／投資回収 1.2年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅広告代理店本社の年間14%削減",
    before: "東京の中堅広告代理店B社本社（高圧 600kW、年間 180万kWh、年間電気代 5,400万円）。市場連動プランで2022〜2023年に月最大400万円の追加負担を経験。",
    after: "固定5年プラン切替／編集スタジオの空調自動制御化／LED化100%（投資 250万円）／サーバー室の冷却最適化／グリーン電力証書 30%調達／クライアント請求にエコ電力プレミアム反映。",
    result: "年間電気代 5,400万円 → 4,644万円（▲14%、▲756万円）／契約 kW 600→520／投資回収 2.5年（補助金後 1.5年）",
  },
  {
    title: "事例3：大手代理店本社・大型スタジオ年間9,000万円削減",
    before: "大手広告代理店C社本社＋関連スタジオ（特別高圧 5,000kW、年間 1,200万kWh、年間電気代 4億円）。長期固定契約継続もGPU/レンダリング負荷増で電力使用量が3年で15%増加。",
    after: "電力契約の8年長期固定締結／自家消費太陽光 1MW（本社屋上）／オフサイトPPA 2MW（再エネ100%対応）／レンダーファーム液冷化／クラウドレンダリング併用最適化／DR契約。",
    result: "年間電気代 4億円 → 3.1億円（▲22.5%、▲9,000万円）／契約 kW 5,000→4,500／投資回収 5.5年（補助金後 4年）／CO₂削減 約3,500 t/年",
  },
];

const demandManagement = [
  {
    label: "スタジオ撮影日のピーク集中対策",
    detail:
      "大型スタジオでは撮影日に照明・空調・音響が一斉稼働し、瞬間ピークが平日通常時の3〜5倍になる。撮影スケジュールを分散し、ピーク日が月内で集中しないようにすることで契約電力10〜15%削減が可能。",
  },
  {
    label: "編集ルームの空調・機材ON/OFF制御",
    detail:
      "編集ルームのカラーグレーディング機材は常時電源ONとしている例が多いが、夜間・週末の自動シャットダウンと空調連動制御で月の電力使用量を15〜25%削減できる事例あり。",
  },
  {
    label: "レンダリング・GPU稼働の夜間シフト",
    detail:
      "3DCG/VFXレンダリング、生成AI処理は夜間〜早朝の電力単価が安い時間帯への自動キュー設定でコスト削減。深夜電力単価安価業者選定とJEPX動的価格との連動運用が有効。",
  },
  {
    label: "イベント・展示会期間の契約電力臨時調整",
    detail:
      "大型プロモーションイベント開催月は契約電力が一時的に増加するため、年間契約電力を平均月ではなくピーク月で設定すると基本料金過剰になる。臨時契約・スポット契約の組合せが有効。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / オフィス・事業場型）",
    target: "LED・空調・サーバー室冷却・編集機材",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "広告代理店本社・編集スタジオの設備更新で活用しやすい主力補助金。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光（本社屋上）・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "大型本社ビル・大規模スタジオ運営会社向け。屋上面積が大きい場合に投資回収が短縮。",
  },
  {
    name: "グリーン電力・非化石証書購入補助",
    target: "ナショナルクライアント対応の再エネ調達",
    rate: "制度別、自治体補助との併用",
    note: "外資系広告主・サステナビリティ重視クライアント対応のための差別化施策に活用可能。",
  },
  {
    name: "中小企業省エネルギー設備等支援補助金",
    target: "中小制作会社・PR会社のオフィス・スタジオ設備更新",
    rate: "2/3、上限数千万円",
    note: "従業員数300名以下の制作会社で活用可能。LED・空調更新で採択率が高い。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "撮影・編集スタジオのピーク日と通常日の電力差を契約区分に反映できているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "クライアント請求書で電力コスト透明化・実費精算がなされているか",
  "本社屋上を活用した自家消費太陽光（300kW〜1MW）導入の試算を実施したか",
  "GPU/レンダリングサーバーの省電力化（液冷・最新世代化）を評価したか",
  "編集ルームの夜間・週末シャットダウン自動化を導入したか",
  "ナショナルクライアント向けにグリーン電力・非化石証書の調達計画があるか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "イベント月のスポット契約・短期契約の必要性を経営層と合意したか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "広告業の電気代水準はどれくらいですか？", answer: "売上高比0.2〜0.8%、業務原価比1〜3%が業界平均です。中堅プロダクションで年1,500〜6,000万円、大手代理店本社で年1.5〜8億円規模の電気代になります。スタジオ運営の比重が高いほど電気代強度が高くなります。" },
  { question: "代理店本社と制作プロダクションでどちらが電気代インパクトが大きいですか？", answer: "従業員1人あたりではプロダクションが本社の2〜3倍。撮影スタジオ・編集スタジオの集中稼働が要因です。本社は規模が大きい分絶対額は大きいですが、強度（売上高比）はプロダクションのほうが高くなる傾向。" },
  { question: "広告業に向く電力プランは固定ですか、市場連動ですか？", answer: "オフィス中心は市場連動も検討可能ですが、スタジオ運営会社・大規模制作会社では固定プラン推奨。夏冬のスタジオ集中稼働期と市場高値期が重なるリスクが大きいためです。" },
  { question: "GPU/レンダリングサーバー導入で電気代はどれくらい増えますか？", answer: "中規模制作会社でGPUレンダーファーム10〜20台導入時、年間電力使用量が15〜30%増、契約電力が50〜150kW増の事例が多いです。液冷化・最新世代GPU選定で電力増を抑制可能。" },
  { question: "クライアント請求での電力コスト実費精算は可能ですか？", answer: "可能で、近年は広告主からの要求で増加傾向です。撮影日数×スタジオ単価×電力割増、編集時間×時間単価×電力プレミアムのような契約が一般化。透明性確保がブランド差別化に繋がります。" },
  { question: "本社屋上太陽光は広告代理店ビルで投資回収できますか？", answer: "本社ビルの屋上面積が1,500m²以上なら検討余地。300kW太陽光で年30〜35万kWh発電、年300〜350万円削減、投資回収7〜10年（補助金後5〜7年）が目安です。賃借ビルの場合はオフサイトPPAが現実的。" },
  { question: "イベント・展示会期間の電気代を抑えるにはどうすればよいですか？", answer: "イベント月の契約電力を本契約に積み増しせず、臨時契約・スポット契約で分離するのが原則。年間契約電力をイベント月で設定すると平常時に過剰契約となるためです。仮設発電機・蓄電池併用も選択肢。" },
  { question: "広告業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（補助率1/3〜1/2、設備更新主体）、需要家主導型PPA補助金（本社太陽光）、グリーン電力購入補助（クライアント対応）、中小企業補助の組合せが効果的です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "日本広告業協会（業界統計）", url: "https://www.jaaa.ne.jp/" },
  { name: "電通報（業界動向）", url: "https://dentsu-ho.com/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function AdvertisingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/advertising-electricity-cost-review"
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
          <span className="text-slate-800">広告業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            広告業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            広告業（広告代理店・制作プロダクション・PR会社）は、本社オフィスの通常電力に加え、撮影スタジオ・編集スタジオの集中稼働、サーバー/レンダーファームの常時運用、イベント期のスポット負荷が組み合わさる業種です。生成AI活用、サステナビリティ対応、クライアント請求の透明化により電力コストは経営課題として顕在化しています。本ページでは広告業特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-21" updatedAt="2026-05-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>広告業の電力使用プロファイル（スタジオ／編集／サーバー／イベント）</li>
              <li>業界平均の電気代水準（売上高比0.2〜0.8%）と従業員あたり単価</li>
              <li>燃料費調整額・再エネ賦課金が当業種に与える影響</li>
              <li>規模別（PR会社／中堅代理店／大手本社）の電気代と削減事例3件（Before/After）</li>
              <li>クライアント請求での電力コスト透明化と実費精算</li>
              <li>SII・需要家主導型PPA・グリーン電力・中小企業補助の組合せ活用</li>
              <li>広告業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広告業の電力使用特性 — スタジオ・編集・サーバー・イベントの4層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業の電力使用は『撮影スタジオ（短期集中ピーク）／編集ルーム（連続稼働）／サーバー・GPU（24h稼働）／イベント（スポット）』の4層構造です。スタジオ・編集・サーバー稼働のバランスで電気代強度が大きく変わるため、自社事業の電力プロファイル把握が契約見直しの起点になります。
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
              業界平均の電気代水準 — 売上高比0.2〜0.8%、職種で2〜3倍格差
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業の電気代水準は事業形態（代理店本社・プロダクション・スタジオ）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本広告業協会・電通報・経産省工業統計から整理。実値は職種構成・スタジオ運営有無で1.5〜3倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広告業の主要な電気代上昇要因 — 燃料費・賦課金・クライアント要求・GPU負荷
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業の電気代上昇は、制度的要因（燃料費・賦課金）に加え、クライアントからのサステナビリティ要求、生成AI/GPU負荷増という業界固有要因が並列します。
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
              規模別の削減事例3件 — PR会社／中堅代理店／大手本社
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              業種横断のコスト構造比較は{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、{" "}
              <Link href="/it-services-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ITサービス業の電気料金見直し</Link>
              で関連業種を確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広告業のデマンド管理 — スタジオ・編集・GPU・イベント
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業のデマンド管理は『スタジオ撮影日の集中ピーク』『編集ルームの常時稼働』『GPU/レンダーファームの夜間シフト』『イベント期のスポット負荷』の4論点を組合せて最適化します。
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
              オフィス中心の広告業は連続稼働工場ほどのベースロードはありませんが、本社・スタジオ・編集ルームの合算では月の使用量が大きく、市場価格高騰局面で年間数百万〜数千万円のインパクトが発生します。固定プラン採用と市場連動回避は経営判断レベルの論点です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>スタジオ稼働・GPU負荷が増加トレンドで予算管理がしやすい</li>
                  <li>クライアント請求の透明性確保（単価変動を顧客に説明しやすい）</li>
                  <li>サステナビリティ対応（グリーン電力長期契約）と整合性</li>
                  <li>夏冬の市場高値期にスタジオ集中稼働が重なるリスクあり</li>
                  <li>生成AI・レンダリング負荷増で電力使用量が増加トレンド</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季撮影集中期と市場高値期が重なり追加コスト発生</li>
                  <li>クライアント請求書での電力コスト透明化が困難に</li>
                  <li>GPU/レンダリング負荷増で使用量増、市場高騰時の影響額拡大</li>
                  <li>JEPX 80円/kWh級高騰時に年数百万〜千万円追加負担</li>
                  <li>経営計画の予算精度低下リスク</li>
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
              再エネ賦課金の影響 — オフィス中心業種でも年数千万円規模
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。広告業でも年間電力使用量が大きい大手本社・スタジオ運営会社では年数千万円規模の負担が発生し、減免制度対象には届かない中堅企業ほど制度対応の選択肢が限られます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">代理店規模別の年間負担</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>小規模PR会社：年間50万kWh × 4.5円 = 約225万円</li>
                  <li>中堅代理店：年間200万kWh × 4.5円 = 約900万円</li>
                  <li>大手本社：年間1,500万kWh × 4.5円 = 約6,750万円</li>
                  <li>大型スタジオ運営会社：年間500万kWh × 4.5円 = 約2,250万円</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">減免制度との関係</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年間1,000万kWh以上等が対象（大手本社レベル）</li>
                  <li>原単位改善計画の提出など要件厳格</li>
                  <li>制度対象外の中堅企業はオフサイトPPAで実質回避</li>
                  <li>クライアント向け透明化施策（再エネ・賦課金内訳）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金とは</Link>
              、{" "}
              <Link href="/renewable-energy-surcharge-reduction-system" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">減免制度の仕組み</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種特有の節電・省エネ施策 — スタジオ・編集・GPU
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業向けの省エネ施策は工場系と異なり、撮影スタジオ・編集ルーム・GPUサーバー特性に対応した施策が中心となります。投資回収2〜5年で実行可能な施策が多数存在します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">スタジオ照明のLED化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>タングステン→LED転換で電力▲50〜70%</li>
                  <li>発熱減で空調負荷も同時削減</li>
                  <li>SII補助1/2活用で投資回収1〜2年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">編集ルーム自動ON/OFF制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夜間・週末の自動シャットダウン</li>
                  <li>空調連動で月の電力▲15〜25%</li>
                  <li>カラーグレーディング機材の保護にも有効</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">GPU/レンダーファーム液冷化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>空冷→液冷で全体電力▲20〜30%</li>
                  <li>サーバー室空調負荷も同時削減</li>
                  <li>大型レンダーファームで投資回収3〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">クラウドレンダリング併用</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ピーク負荷時のみクラウド利用</li>
                  <li>オンプレ機材の最大kW削減で契約電力低減</li>
                  <li>固定費削減効果が大きい</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・グリーン電力・中小企業補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋グリーン電力）で採択率が高くなる傾向。
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
              広告業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社広告事業の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広告業は本社オフィス・スタジオ・サーバー・イベントが組合さるため、契約電力の最適点が見えにくい構造です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>スタジオ稼働日のピークを前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>GPU/レンダーファーム導入後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した11〜22%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="advertising-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "本社オフィス中心業種の関連事例。" },
              { href: "/it-services-electricity-cost-review", title: "ITサービス業の電気料金見直し", description: "サーバー・データセンター活用の類似業種。" },
              { href: "/consulting-electricity-cost-review", title: "コンサルティング業の電気料金見直し", description: "オフィス中心業種としての類似事例。" },
              { href: "/small-office-electricity-cost-review", title: "小規模オフィスの電気料金見直し", description: "小規模制作会社・PR会社向けの基本。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "GPU・サーバー集中業種の類似事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "サステナビリティ重視業種の固定プラン選択の根拠。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "本社屋上太陽光の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "本社ビル・大型施設の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調更新・サーバー冷却で活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "賦課金の仕組みと推移を確認する。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調の計算式と影響額の把握。" },
            ]}
          />

          <ContentCta
            heading="自社の広告事業条件でリスクを確認する"
            description="本社オフィス・スタジオ・サーバー・イベント期の電力使用パターンをもとに、電気料金の上振れ幅をシミュレーターで試算できます。クライアント請求書の電力コスト透明化、グリーン電力対応、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
