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
  "カラオケボックスの電気料金見直しポイント｜個室AV機器・空調・24h看板・ドリンクバーの契約最適化";
const pageDescription =
  "カラオケボックスの電気料金見直しを解説。個室AV機器・空調同時稼働ピーク、24h深夜営業、廊下センサー化、ドリンクバー機器、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "カラオケ 電気料金 見直し",
    "カラオケボックス 電気代",
    "個室 AV機器 空調 電力",
    "24h店舗 電気代",
    "カラオケ 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/karaoke-box-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/karaoke-box-electricity-cost-review",
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
    label: "個室AV機器（モニター・アンプ・カラオケ機・マイク）",
    detail:
      "カラオケボックスの中核設備。1個室あたりカラオケ機本体（300〜600W）、大型モニター（55〜75インチ、200〜400W）、アンプ（300〜800W）、マイク／無線受信機（30〜100W）の常時稼働。1個室あたり総設備0.8〜1.8kWで、稼働中＋待機時もスタンバイ電力が大きい。30〜60室の中規模店で個室AV機器合計25〜100kW。店全体の電力使用量の25〜35%を占める。",
  },
  {
    label: "個室空調（同時稼働ピーク）",
    detail:
      "個室ごとの業務用エアコン（1.5〜3.0kW/個室）。週末・夜間の同時稼働で店全体の最大デマンドを形成する最大要素。30〜60室の中規模店で個室空調合計50〜180kW。店全体の電力使用量の35〜50%を占めるピーク要素。",
  },
  {
    label: "廊下・厨房・トイレ・共用部",
    detail:
      "廊下照明（24h点灯）、厨房（フライヤー・電子レンジ・冷蔵庫・製氷機）、トイレ換気、共用空調等。中規模店で20〜50kWの常時負荷。廊下照明のセンサー化で20〜30%削減可能。",
  },
  {
    label: "看板照明・サイン照明（24h）",
    detail:
      "店舗看板・ファサード照明・サイン照明は24h点灯が標準（24h営業店）。1店舗あたり3〜15kWのLED看板照明。深夜時間帯の電力使用量に直結し、深夜料金プラン適性を左右する。",
  },
  {
    label: "ドリンクバー機器・厨房機器",
    detail:
      "ドリンクバー（コーヒーマシン、ジュースディスペンサー、製氷機、冷蔵冷凍ショーケース）、フードメニュー用厨房機器（フライヤー、電子レンジ、IHコンロ）。中規模店で15〜40kWの常時負荷＋瞬時負荷。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全国カラオケ事業者協会・経産省特定サービス産業実態調査の統計によれば、カラオケボックスの電気料金は売上高の5〜12%（24h営業店は最高水準）。粗利ベースでは10〜25%に達する。個室AV機器＋個室空調＋24h深夜営業で電力依存度が極めて高い業種。客足変動が経営課題。",
  },
  {
    label: "1個室あたりの電力使用量",
    detail:
      "個室AV機器＋個室空調の合計で1個室あたり2.5〜5.0kWの最大負荷、年間1個室あたり5,000〜15,000 kWhの使用量。稼働率（客入り率）が40〜70%で、深夜帯の客足低下時もスタンバイ電力が継続発生。",
  },
  {
    label: "店舗規模別の年間使用量",
    detail:
      "小規模店（10〜20室、年商0.5〜1.5億円）で年間10〜30万 kWh、中規模店（30〜60室、年商2〜8億円）で年間50〜200万 kWh、大手チェーン本部含む合計（100〜300店舗）で年間500〜3,000万 kWh。コロナ後の客足回復＋カラオケ機高機能化で電力使用量増加トレンド。",
  },
];

const costFactors = [
  {
    label: "個室空調の同時稼働ピーク",
    detail:
      "週末・夜間（19時〜23時）の個室同時稼働で、個室空調＋個室AV機器のデマンドが店全体の最大デマンドを形成。30〜60室の中規模店で最大デマンド200〜400kWに達し、年間最大デマンドが契約電力を決定。デマンド管理が経営課題。",
  },
  {
    label: "AV機器のスタンバイ電力",
    detail:
      "カラオケ機・モニター・アンプの非稼働時スタンバイ電力が店全体の電力使用量の5〜10%を占める。深夜時間帯の客足低下時も電力消費継続。スマートコンセント・遠隔電源管理での削減余地が大きい。",
  },
  {
    label: "24h深夜営業のベースロード",
    detail:
      "24h営業店は廊下照明・看板・空調・冷蔵庫が常時稼働。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模店（月10万kWh）で月10万円の差、年120万円規模のインパクト。深夜料金プランの活用余地が大きい。",
  },
  {
    label: "業界の客足変動とリスク",
    detail:
      "カラオケ業界はコロナ禍で大きな打撃を受け、客足回復途上。週末ピーク＋平日閑散の落差が大きく、稼働率変動が電力契約最適化を難しくしている。デマンド契約と従量料金のバランス管理が重要。",
  },
  {
    label: "再エネ賦課金・容量拠出金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。中規模カラオケ店（年100万kWh）で年450万円超の負担。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模店（10〜20室、年商0.5〜1.5億円）",
    profile: "個人経営・地方カラオケボックス／低圧 50〜120kW／年間 10〜30万 kWh",
    annualCost: "年間電気代 300万〜900万円",
    note: "LED化・空調更新・AV機器スタンバイ電力削減で年8〜12%削減事例。",
  },
  {
    size: "中規模店（30〜60室、年商2〜8億円）",
    profile: "全国チェーン中規模店（ビッグエコー等）／高圧 150〜400kW／年間 50〜200万 kWh",
    annualCost: "年間電気代 1,500万〜6,000万円",
    note: "個室空調インバータ化＋廊下センサー化＋深夜料金プラン活用で年10〜15%削減事例。",
  },
  {
    size: "大手チェーン本部含む合計（100〜300店舗）",
    profile: "シダックス・ジャンカラ等大手／高圧合計 2,000〜8,000kW／年間 500〜3,000万 kWh",
    annualCost: "年間電気代 1.5〜9 億円",
    note: "長期固定（3〜5年）契約＋全店BEMS＋スマート電源管理で年8〜13%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模店の年間11%削減（Before/After）",
    before: "地方の個人経営カラオケ店A社（低圧 80kW、年間 20万 kWh、年間電気代 600万円）。市場連動プラン継続、AV機器スタンバイ常時、廊下蛍光灯24h点灯、空調10年経過。",
    after: "新電力切替（固定3年）／全照明LED化＋廊下人感センサー化（投資150万円、SII補助1/2活用）／AV機器のスマートコンセント＋休室時自動電源OFF／空調高効率モデル更新（5室）／看板LED化／デマンドコントローラー導入。",
    result: "年間電気代 600万円 → 534万円（▲11%、▲66万円）／契約 kW 80→65／投資回収 補助金後 3年",
  },
  {
    title: "事例2：中規模店の年間14%削減",
    before: "全国チェーン中規模店B社（高圧 300kW、年間 130万 kWh、年間電気代 3,900万円）。市場連動プランで2022〜2023年に月最大400万円の追加負担。45室、24h営業。",
    after: "固定3年プラン切替／個室空調全機インバータ化＋集中制御／AV機器のスマートコンセント＋遠隔電源管理（休室時自動OFF）／廊下・トイレ人感センサー化／看板・サインLED化＋深夜調光／深夜料金プラン活用／厨房・ドリンクバー省エネ化／デマンドコントローラー導入／BEMS導入。",
    result: "年間電気代 3,900万円 → 3,354万円（▲14%、▲546万円）／契約 kW 300→250／投資回収 補助金後 4年",
  },
  {
    title: "事例3：大手チェーン本部の年間9,000万円削減",
    before: "大手カラオケチェーンC社の直営150店舗合計（高圧合計 5,000kW、年間 2,500万 kWh、年間電気代 7.5億円）。長期固定契約継続も新店増設で契約電力上振れ。",
    after: "電力契約の5年長期固定締結／全店BEMS導入＋本部一括監視／全店個室空調インバータ化／全店AV機器スマート電源管理（休室自動OFF）／全店LED＋センサー化／需要家主導型PPA（オフサイト太陽光4MW）／全店深夜料金プラン活用／全店厨房・ドリンクバー省エネ化／全店ピークカット運用／DR契約締結／新店からの省エネ標準仕様化。",
    result: "年間電気代 7.5億円 → 6.6億円（▲12%、▲9,000万円）／契約 kW 5,000→4,300／投資回収 4年（補助金後 3年）／CO₂削減 約7,000 t/年",
  },
];

const demandManagement = [
  {
    label: "個室空調の集中制御＋スケジュール運転",
    detail:
      "個室空調をBEMS連動で集中制御し、未入室個室の空調を自動停止。週末・夜間ピーク時の最大デマンドを15〜25%削減した事例。",
  },
  {
    label: "AV機器スマート電源管理（休室時自動OFF）",
    detail:
      "個室AV機器（モニター・アンプ・カラオケ機）をスマートコンセント・遠隔電源管理で休室時に自動電源OFF。スタンバイ電力▲80%、店全体の電力▲5〜10%。",
  },
  {
    label: "廊下・トイレ照明の人感センサー化",
    detail:
      "廊下・トイレ・共用部の照明を人感センサー化し、人通過時のみ点灯。電力▲30〜50%、SII補助で投資回収2〜3年。",
  },
  {
    label: "深夜料金プラン活用＋ピークカット",
    detail:
      "24h営業店は深夜電力プラン（22時〜8時の安価時間帯）を活用し、深夜帯の運営コストを削減。蓄熱式空調との組合せで更に効果向上。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場型）",
    target: "LED化・人感センサー・空調・厨房機器・スマート電源管理",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "カラオケ業向けで採択率が高い主力補助金。LED化＋センサー化で採択実績多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "ロードサイド型店舗の屋根面積活用太陽光と相性が良い。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新AV機器・カラオケ機システムの新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "カラオケ業の中小事業者で採択実績多数。AV機器更新のタイミングで活用。",
  },
  {
    name: "経産省 中小企業省力化投資補助金",
    target: "BEMS・スマート電源管理・遠隔監視システム",
    rate: "1/2〜2/3、上限機種別に設定",
    note: "中小カラオケチェーンの本部一括監視システム導入で活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "全店脱炭素化・太陽光・蓄電池",
    rate: "1/2、上限数十億円",
    note: "大手チェーンの全店脱炭素プロジェクトで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "個室空調の同時稼働ピークを把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "AV機器のスタンバイ電力（休室時）を測定したか",
  "廊下・トイレ照明の人感センサー化を導入しているか",
  "24h営業店で深夜料金プランを活用しているか",
  "屋根面積を活用した自家消費太陽光（30〜200kW）導入の試算を実施したか",
  "個室空調のインバータ化・集中制御を導入しているか",
  "デマンドコントローラー・空調集中制御の組合せを検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "SII・PPA・ものづくり補助・省力化投資補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "カラオケボックスの電気代水準はどれくらいですか？", answer: "売上高比5〜12%（24h営業店は最高水準）、粗利比10〜25%が業界平均。中規模店（30〜60室）で年1,500〜6,000万円、大手チェーン本部含む合計（100〜300店舗）で年1.5〜9億円規模の電気代になります。客足変動と固定的なベースロードのバランスが課題です。" },
  { question: "個室空調の電気代を削減するには？", answer: "①インバータ化（電力▲20〜30%）、②集中制御＋未入室個室の自動停止、③設定温度の見直し（夏26-28℃・冬20-22℃）、④フィルター清掃の頻度管理、⑤BEMSによる需要見える化、の5本柱が効果的。中規模店で年200〜500万円の削減が目安。" },
  { question: "AV機器のスタンバイ電力対策は？", answer: "スマートコンセント＋遠隔電源管理で休室時にAV機器（モニター・アンプ・カラオケ機）を自動電源OFF。スタンバイ電力▲80%、店全体の電力▲5〜10%。中規模店（45室級）で年100〜200万円の削減が目安。投資回収2〜3年です。" },
  { question: "24h営業店の電気代対策は？", answer: "①深夜料金プラン（22時〜8時の安価時間帯）の活用、②廊下・看板照明の深夜調光、③蓄熱式空調による深夜電力シフト、④深夜帯の最小限運営（個室空調自動停止）、⑤BEMSによる需要見える化、の5本柱が効果的。中規模24h店で年200〜400万円の削減が目安。" },
  { question: "カラオケ業の固定プランと市場連動プランどちらが向きますか？", answer: "24h営業＋週末夜間ピーク＋AV機器スタンバイ電力で連続稼働必須のため、固定プランが向きます。2022〜2023年の市場高騰局面では市場連動継続店舗で月数十万〜数百万円の追加負担が発生しました。客足変動が大きい業界特性も固定プラン優位性を高めています。" },
  { question: "個室空調の集中制御で本当に削減できますか？", answer: "BEMS連動の集中制御で未入室個室の空調自動停止＋設定温度の上限下限管理を実施することで、ピーク時の最大デマンド▲15〜25%、年間電気代▲10〜15%の削減事例があります。中規模店（45室）で年300〜500万円の削減が一般的です。" },
  { question: "カラオケ業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、中小企業省力化投資補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "客足変動の大きい業種で電力契約最適化のコツは？", answer: "①過去2〜3年の月別・時間帯別実績を新電力に提供し、季節変動を加味した見積取得、②基本料金の比率が高くなりすぎないプラン選択、③ピーク削減施策の併用、④デマンド契約と従量料金のバランス管理、⑤多店舗事業者は店舗単位ではなくグループ単位での一括契約交渉、が重要です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 全国カラオケ事業者協会", url: "https://www.karaoke.or.jp/" },
  { name: "経済産業省 特定サービス産業実態調査", url: "https://www.meti.go.jp/statistics/tyo/tokusabizi/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function KaraokeBoxElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/karaoke-box-electricity-cost-review"
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
          <span className="text-slate-800">カラオケボックスの見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            カラオケボックスの電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            カラオケボックスは、個室AV機器（モニター・アンプ・カラオケ機）と個室空調の週末夜間同時稼働ピーク、AV機器のスタンバイ電力、廊下・トイレ・共用部の24h照明、24h営業の深夜電力、ドリンクバー機器など多面的な電力負荷を持ち、客足変動と固定的なベースロードのバランス管理が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>カラオケ業の電力使用プロファイル（個室AV／個室空調／廊下／ドリンクバー）</li>
              <li>業界平均の電気代水準（売上高比5〜12%）と1個室あたり単価</li>
              <li>個室空調集中制御＋AV機器スマート電源管理の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>24h営業店の深夜電力プラン活用</li>
              <li>SII・PPA・ものづくり補助・省力化補助・GX補助の組合せ活用</li>
              <li>カラオケ業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              カラオケ業の電力使用特性 — 個室AV・個室空調・廊下・ドリンクバー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業の電力使用は『個室AV機器／個室空調／廊下・厨房・共用部／看板・サイン照明／ドリンクバー機器・厨房機器』の5層で構成されます。個室空調の同時稼働ピークとAV機器スタンバイ電力が業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比5〜12%、24h店は最高水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業の電気代水準は店舗規模・24h営業有無・室数で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全国カラオケ事業者協会・経産省特定サービス産業実態調査から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              カラオケ業の主要な電気代上昇要因 — 個室空調・スタンバイ・24h・客足変動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業の電気代上昇は、個室空調同時稼働ピーク、AV機器スタンバイ電力、24h深夜営業のベースロード、客足変動、再エネ賦課金、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模店／中規模店／大手チェーン本部
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/restaurant-chain-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">外食チェーンの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              個室空調・AV機器のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業は個室空調集中制御、AV機器スマート電源管理、廊下・トイレ照明センサー化、深夜料金プラン活用など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 24h営業＋スタンバイ電力の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業は24h営業＋週末夜間ピーク＋AV機器スタンバイ電力で連続稼働必須のため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h営業店の常時稼働</li>
                  <li>週末夜間ピークの空調集中</li>
                  <li>AV機器スタンバイ電力継続</li>
                  <li>客単価への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に空調負荷増</li>
                  <li>週末夜間ピークが高単価時間帯に集中</li>
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
              再エネ賦課金の影響 — 24hカラオケ業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。カラオケ業の中規模店では負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模店（年130万kWh）の負担額試算</p>
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
              カラオケ業特有の節電・省エネ施策 — 空調集中・スマート電源・センサー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業の省エネは『個室空調インバータ化＋集中制御』『AV機器スマート電源管理』『廊下・トイレ人感センサー化』『深夜料金プラン活用』『屋根面積活用太陽光』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">個室空調インバータ化＋集中制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>個別→インバータ＋BEMS集中制御で電力▲20〜30%</li>
                  <li>未入室個室の自動停止</li>
                  <li>SII補助で投資回収3〜4年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">AV機器スマート電源管理</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>スマートコンセント＋遠隔電源管理</li>
                  <li>休室時スタンバイ電力▲80%</li>
                  <li>店全体の電力▲5〜10%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廊下・トイレ人感センサー化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>LED化＋人感センサーで電力▲30〜50%</li>
                  <li>SII補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">屋根面積活用太陽光（30〜200kW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ロードサイド型店舗の屋根活用</li>
                  <li>夜間ピーク業種で自家消費率50〜70%</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・省力化補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業向けに活用しやすい補助金は5本柱。空調＋AV機器更新はSII＋ものづくり補助＋省力化投資補助の組合せで補助率を最大化できます。
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
              カラオケ業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社カラオケ店の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              カラオケ業は個室空調同時稼働・AV機器スタンバイ電力・24h深夜営業の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>個室空調集中制御のピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した11〜14%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="karaoke-box-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/amusement-facility-electricity-cost-review", title: "アミューズメント施設の電気料金見直し", description: "24h営業・娯楽業の共通論点。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "外食チェーンの電気料金見直し", description: "厨房・ドリンクバーが共通。" },
              { href: "/single-restaurant-electricity-cost-review", title: "単独飲食店の電気料金見直し", description: "厨房機器が共通。" },
              { href: "/business-hotel-electricity-cost-review", title: "ビジネスホテルの電気料金見直し", description: "個室空調集中制御が共通。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "客室空調制御が共通。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "24h店舗の共通論点。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店舗の電気料金見直し", description: "看板照明・空調が共通。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設の電気料金見直し", description: "AV機器運用の共通論点。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h営業店の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "カラオケ業が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "ロードサイド店舗の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED化・空調更新の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "24h営業事業者のリスク。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理の基本", description: "個室空調同時稼働のピーク管理。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社カラオケ店の条件でリスクを確認する"
            description="個室AV機器・個室空調・廊下照明・看板照明・ドリンクバーの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。AV機器スマート電源管理後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="カラオケボックスの電力契約見直し、専門家に相談しませんか？"
            description="個室AV機器・個室空調・廊下センサー・24h看板照明・ドリンクバー機器の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でカラオケ業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
