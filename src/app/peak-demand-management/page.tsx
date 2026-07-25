import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle =
  "ピークデマンド管理の実務ガイド｜基本料金を左右する最大需要電力の削減手法";
const pageDescription =
  "高圧・特別高圧の基本料金を決める最大需要電力（ピークデマンド）をどう管理するかを実務目線で解説。ピークカット・ピークシフト・デマンドコントローラ・BEMS・力率改善の手法と、5年累計の基本料金削減シナリオ3件を整理します。";
const pageUrl = "https://simulator.eic-jp.org/peak-demand-management";

const NEUTRAL_NOTE =
  "※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ピークデマンド 管理",
    "最大需要電力 削減",
    "ピークカット ピークシフト",
    "デマンドコントローラ BEMS",
    "基本料金 削減 力率改善",
  ],
  alternates: {
    canonical: pageUrl,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/basic", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const pageHighlights = [
  "ピークデマンド（最大需要電力・kW）の意味と、使用量（kWh）との違い",
  "デマンドが契約電力・基本料金を長期に左右する仕組みと計算例",
  "ピークカット／ピークシフトそれぞれの具体的な削減手法",
  "デマンドコントローラ・監視装置・BEMSの役割と使い分け",
  "力率改善が基本料金に効く仕組み（力率割引の考え方）",
  "業種別のピーク特性と、5年累計の基本料金削減シナリオ3件（電卓検算）",
];

const peakCutMethods = [
  {
    label: "空調の間欠運転・デマンド連動制御",
    detail:
      "デマンドが目標値に近づいた30分枠で、複数台の空調を輪番で一時停止・出力抑制する手法。室温の許容幅（例：±1〜2℃）を決めておけば体感への影響を抑えつつピークを削れます。デマンドコントローラや空調のBAS（ビル自動制御）と連動させると自動化でき、手動対応の負担が減ります。",
  },
  {
    label: "生産設備の同時起動回避（起動タイミングの分散）",
    detail:
      "始業時に空調・照明・生産ラインを一斉に立ち上げると、その30分枠のデマンドが跳ね上がります。ライン別・フロア別に5〜30分ずつ起動をずらすだけで、瞬間的な同時最大負荷を抑えられます。設備投資ゼロで着手できる代表的なピークカット策です。",
  },
  {
    label: "デマンド警報に基づく手動負荷カット",
    detail:
      "デマンド監視装置の第1警報（目標到達の予兆）・第2警報（超過リスク）に応じて、あらかじめ決めた優先順位で非重要負荷（一部照明・予備機器・充電設備等）を停止する運用。停止手順を現場の掲示・チェックリストにしておくと属人化を防げます。",
  },
  {
    label: "蓄電池・自家発電によるピークシェービング",
    detail:
      "ピーク時間帯だけ蓄電池や自家発電で系統からの受電を肩代わりし、受電端のデマンドを平準化する手法。投資規模は大きいものの、BCP（停電対策）や自家消費太陽光との組合せで多面的な効果が見込めます。導入可否は費用対効果の試算が前提です。",
  },
  {
    label: "電気式設備の一部を非電化・熱源分散でオフピーク化",
    detail:
      "給湯・乾燥・加熱など熱需要の一部を、蓄熱や別熱源に振り分けてピーク帯の電力集中を避ける考え方。設備更新のタイミングで検討すると追加投資を抑えられます。効果は設備構成により大きく異なるため個別試算が必要です。",
  },
];

const peakShiftMethods = [
  {
    label: "生産・稼働スケジュールの時間帯シフト",
    detail:
      "電力を多く使う工程を、需要が集中する時間帯（夏の13〜16時、冬の朝夕など）から早朝・夜間へ移す運用。工程間の在庫バッファを持てる業種では、品質・納期に影響を与えずにピークを平準化できます。時間帯別料金メニューと組み合わせると電力量料金の低減にもつながります。",
  },
  {
    label: "蓄熱空調・氷蓄熱による夜間シフト",
    detail:
      "夜間に氷・冷水・温水を蓄えておき、昼間のピーク帯はその蓄熱を使って空調負荷を賄う方式。昼間の受電デマンドを下げつつ、電力使用そのものを夜間へ移せます。既設更新時に検討されることが多い設備です。",
  },
  {
    label: "EV充電・充電設備のスケジュール制御",
    detail:
      "社用EVやフォークリフトの充電を、デマンドが高い時間帯を避けて夜間・休憩時間に自動でずらす制御。充電器の負荷が大きい事業所ほど効果が出やすく、スマート充電機能やタイマー制御で実装できます。",
  },
  {
    label: "バッチ処理・洗浄・給湯の夜間集約",
    detail:
      "まとめて実施できる洗浄・給湯・バッチ処理を夜間や需要の谷に寄せることで、昼間ピークを避ける運用。人員シフトとの調整が前提ですが、追加投資が小さく取り組みやすいのが利点です。",
  },
  {
    label: "デマンドレスポンス（DR）への参加",
    detail:
      "電力需給がひっ迫する時間帯に需要を抑制し、対価を得る仕組み。上げDR・下げDRがあり、アグリゲーターを介して参加する形が一般的です。ピークシフトの取り組みが、そのままDRの実行能力になります。制度・報酬条件は年度で変わるため要確認です。",
  },
];

const industryPeaks = [
  {
    label: "食品・冷蔵冷凍（24時間稼働）",
    detail:
      "冷蔵冷凍のベース負荷が大きく、夏季は外気温上昇で凝縮器負荷が増えて昼間デマンドが跳ねやすい。夜間予冷・蓄熱運用でピークを平準化でき、ピークシフトの余地が比較的大きい業種です。",
  },
  {
    label: "製造・金属加工",
    detail:
      "大型モーター・加熱炉・コンプレッサーの同時起動でデマンドが急上昇しやすい。起動タイミングの分散とインバータ化、力率改善が効きやすく、ピークカット余地が大きい傾向です。",
  },
  {
    label: "商業施設・小売",
    detail:
      "開店前の空調立ち上げと来客ピークが重なり、夏冬の昼間にデマンドが集中。空調のデマンド連動制御と照明のLED化・調光で平準化しやすい業種です。",
  },
  {
    label: "オフィスビル",
    detail:
      "始業時の一斉起動と昼過ぎの空調ピークが特徴。BEMSによる見える化とゾーン別空調制御で、体感を損なわずにピークを抑えやすい構造です。",
  },
  {
    label: "医療・介護・宿泊",
    detail:
      "24時間稼働かつ設備停止に制約が多く、負荷カットの余地は限定的。蓄熱・自家発電・力率改善など「止めずに平準化する」手法が中心になります。",
  },
  {
    label: "データセンター・IT",
    detail:
      "常時高負荷でベース需要が大きく、デマンドの振れ幅は相対的に小さい一方、絶対水準が高い。空調（PUE）改善と力率管理が基本料金の主要な削減軸になります。",
  },
];

const monitorFeatures = [
  {
    label: "30分デマンドのリアルタイム監視",
    detail:
      "現在の30分枠の予測デマンドを常時算出し、目標値に対する進捗を表示。超過が予測されると警報を出します。",
  },
  {
    label: "多段階の警報（第1・第2警報など）",
    detail:
      "目標到達の予兆で第1警報、超過リスク段階で第2警報を発報。段階に応じた対応手順を決めておくと運用が安定します。",
  },
  {
    label: "制御出力による自動負荷制御",
    detail:
      "接点出力で空調・照明・特定設備を自動でON/OFF・出力抑制。手動対応の負担を減らし、削減の再現性を高めます。",
  },
  {
    label: "実績データの記録・分析",
    detail:
      "月次・時間帯別のデマンド実績を蓄積し、ピーク発生パターンの分析や目標値の見直しに活用できます。",
  },
];

const scenarios = [
  {
    title: "シナリオ1：小規模高圧（ピークカット中心）",
    profile:
      "高圧・契約電力200kW前後の事業所。始業時の一斉起動と空調ピークが主因。設備投資は最小限で、起動分散＋デマンド警報運用を徹底。",
    reduction: "デマンド ▲20kW",
    calc: "1,700円/kW/月 × 20kW × 12ヶ月 = 年40.8万円 → 5年累計 204万円",
    note: "起動タイミングの分散と手動負荷カットが中心のため追加投資は小さく、効果は運用の徹底度で変動します。",
  },
  {
    title: "シナリオ2：中規模（デマコン＋ピークシフト）",
    profile:
      "高圧・契約電力500〜800kW級の工場。デマンドコントローラで空調・非重要負荷を自動制御し、一部工程を夜間へシフト。",
    reduction: "デマンド ▲50kW",
    calc: "1,700円/kW/月 × 50kW × 12ヶ月 = 年102万円 → 5年累計 510万円",
    note: "デマコン導入費用と運用体制が前提。ピークシフトによる電力量料金の低減効果は別途上乗せされる場合があります。",
  },
  {
    title: "シナリオ3：大規模（BEMS＋力率改善＋シフト）",
    profile:
      "特別高圧・契約電力2,000kW超級の拠点。BEMSで全館を見える化し、力率改善・蓄熱シフト・自動制御を統合運用。",
    reduction: "デマンド ▲120kW",
    calc: "1,700円/kW/月 × 120kW × 12ヶ月 = 年244.8万円 → 5年累計 1,224万円",
    note: "力率改善（進相コンデンサ）による基本料金割引が加わると効果はさらに大きくなります。投資回収は個別試算が前提です。",
  },
];

const checklistItems = [
  "直近12か月の月別デマンド値（最大需要電力・kW）を把握しているか",
  "現在の契約電力が「いつ・なぜ発生したデマンド」で設定されたか特定しているか",
  "デマンドが最大になりやすい季節・曜日・時間帯を分析しているか",
  "始業時の一斉起動を段階的に分散する運用があるか",
  "空調のデマンド連動制御（間欠運転・出力抑制）を導入しているか",
  "デマンド監視装置・デマンドコントローラの目標値を契約電力より低く設定しているか",
  "非重要負荷の停止優先順位（警報時の対応手順）を明文化しているか",
  "ピークシフト可能な工程・充電・洗浄・給湯を洗い出しているか",
  "力率（進相コンデンサの容量・劣化）を点検し、力率割引を取りこぼしていないか",
  "BEMS等で30分デマンドを見える化し、効果を金額で測定しているか",
  "デマンドレスポンス（DR）・補助金の活用余地を確認しているか",
  "基本料金単価（円/kW）と削減目標kWから、年間削減額を試算しているか",
];

const faqItems = [
  {
    question: "ピークデマンドとデマンド値・契約電力は何が違いますか？",
    answer:
      "ピークデマンド（最大需要電力）は、30分ごとに計測される平均電力（kW）のうち、その期間で最も高かった値を指します。高圧・特別高圧では直近12か月の最大デマンドが「契約電力」として設定され、これに基本料金単価を掛けたものが基本料金になります。つまりデマンド値と最大需要電力はほぼ同義で、その最大値が契約電力を決めます。デマンド値の基礎は /demand-value-guide で解説しており、本ページはその管理・削減の実務に焦点を当てています。",
  },
  {
    question: "ピークカットとピークシフトはどう違いますか？",
    answer:
      "ピークカットは、ピーク時間帯の電力そのものを削る（設備を止める・出力を抑える）手法で、デマンド（kW）を直接下げます。ピークシフトは、使う量は変えずに時間帯を需要の谷へ移す手法で、昼間の受電デマンドを平準化します。両者は排他ではなく、起動分散（カット）＋夜間シフト（シフト）のように組み合わせると効果が高まります。",
  },
  {
    question: "デマンドを下げると電気代はどのくらい安くなりますか？",
    answer:
      "基本料金は「契約電力（kW）× 基本料金単価 × 力率係数」で計算されます。基本料金単価が1,700円/kW/月前後（一般的なレンジの例示）とすると、契約電力を10kW下げれば月1.7万円・年20.4万円、50kWなら年102万円の基本料金削減になる計算です。単価は契約・エリアで異なるため、実際の請求書の単価で試算してください。",
  },
  {
    question: "デマンドコントローラを入れれば自動で下がりますか？",
    answer:
      "デマンドコントローラ（デマコン）は目標超過を予測して警報や自動制御を行う装置ですが、効果は「何を・どの順で止めるか」という制御設定と運用ルール次第です。制御対象がなかったり目標値が高すぎたりすると効果は限定的です。監視装置の選び方は /demand-monitoring-device-selection も参考にしてください。",
  },
  {
    question: "BEMSとデマンドコントローラは何が違いますか？",
    answer:
      "デマンドコントローラは主に最大需要電力の抑制に特化した装置です。BEMS（ビルエネルギー管理システム）は空調・照明・電力を横断して見える化・最適制御する仕組みで、デマンド管理はその機能の一部として含まれます。小規模ならデマコン単体、大規模で多設備を統合管理したい場合はBEMSが選択肢になります。",
  },
  {
    question: "力率改善はデマンド管理と関係がありますか？",
    answer:
      "基本料金には力率割引・割増があり、力率が高いほど基本料金が下がる仕組みです（多くのメニューで基準85%を境に1%ごとに増減）。力率が低いと同じ有効電力でも受電設備の負荷が増え、基本料金も割高になります。進相コンデンサで力率を改善すればデマンド管理と合わせて基本料金を圧縮できます。詳しくは /what-is-power-factor を参照してください。",
  },
  {
    question: "運用改善だけでどこまで下げられますか？",
    answer:
      "起動タイミングの分散・空調の間欠運転・警報時の負荷カットといった運用改善は、設備投資ゼロでも取り組め、事業所によっては数%〜十数%のデマンド抑制が期待できます。ただし効果は元の運用状態や設備構成に大きく依存し、断定はできません。まずは30分デマンドの見える化から始め、効果を金額で測定するのが確実です。",
  },
  {
    question: "デマンド管理と再エネ賦課金の削減は別物ですか？",
    answer:
      "別物です。デマンド管理が下げるのは契約電力（kW）に連動する『基本料金』で、再エネ賦課金は使用量（kWh）に単価を掛けて課される費目です。賦課金単価は2026年度4.18円/kWhで、これはデマンドを下げても単価自体は変わりません。使用量そのものを減らす省エネはkWh側の削減、デマンド管理はkW側の削減、と切り分けて考えると整理しやすくなります。",
  },
];

const sourcesItems = [
  {
    name: "経済産業省 資源エネルギー庁（省エネポータルサイト）",
    url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/",
  },
  {
    name: "電力・ガス取引監視等委員会",
    url: "https://www.emsc.meti.go.jp/",
  },
  {
    name: "一般社団法人 環境共創イニシアチブ（SII）",
    url: "https://sii.or.jp/",
  },
  {
    name: "新電力ネット（電力単価・スポット価格）",
    url: "https://pps-net.org",
  },
  {
    name: "新電力ネット（エリア別電力単価データ）",
    url: "https://pps-net.org/unit",
  },
  { name: "一般社団法人エネルギー情報センター 独自調査" },
];

export default function PeakDemandManagementPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "ピークデマンド管理の実務ガイド" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">
            ホーム
          </Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">
            解説ページ一覧
          </Link>
          <span className="px-2">›</span>
          <Link href="/articles/basic" className="underline-offset-2 hover:underline">
            基礎から知る
          </Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ピークデマンド管理の実務ガイド</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide">
          <PrintButton />
        </div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ピークデマンド管理の実務ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の基本料金は「契約電力（kW）」で決まり、その契約電力は過去1年間の最大需要電力（ピークデマンド）から自動的に設定されます。一時的なピークが12か月にわたって基本料金へ響くため、ピークをいかに抑え、平準化するかが基本料金コスト管理の核心です。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド値そのものの意味・計測の基礎は{" "}
            <Link
              href="/demand-value-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              デマンド値の見方
            </Link>{" "}
            で扱っています。本ページはその先の「管理実務」——
            ピークカット／ピークシフト／デマンドコントローラ／BEMS／力率改善という
            具体的な削減手法にフォーカスして整理します。
          </p>
          <AuthorBadge publishedAt="2026-07-21" updatedAt="2026-07-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {pageHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          {/* 1 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ピークデマンド（最大需要電力）とは
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークデマンドとは「最大需要電力」のことで、30分間の平均電力（kW）のうち、その期間で最も高かった値を指します。電力量（kWh）が「どれだけ使ったか」を表すのに対し、デマンド（kW）は「どれだけ同時に使ったか」——いわば電力使用の最大瞬間風速を表す指標です。同じ月間使用量でも、使い方が集中していればデマンドは高く、分散していれば低くなります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧では、スマートメーターが30分ごとに電力量を計測し、各30分間の平均電力を積み上げます。ある30分（例：13:30〜14:00）の使用量が60kWhなら、その平均電力は60kWh÷0.5h＝120kW。1か月のすべての30分枠のうち最も高い値が、その月の最大需要電力（ピークデマンド）です。デマンド管理とは、この「最も高い1枠」をいかに低く抑えるかの取り組みにほかなりません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">kW（デマンド）</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  瞬間的な電力の大きさ。30分平均の最大値が契約電力＝基本料金を決める。「同時に使う量」の管理が対象。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">kWh（使用量）</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  一定期間に使ったエネルギー量。電力量料金・再エネ賦課金の対象。「総量」を減らす省エネが対象。
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              使用量側の費目については{" "}
              <Link
                href="/energy-charge-explained"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                電力量料金の見方
              </Link>{" "}
              を、デマンドが決める費目については{" "}
              <Link
                href="/basic-charge-explained"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                基本料金の見方
              </Link>{" "}
              をあわせてご覧ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 2 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約電力・基本料金への影響 — 一時のピークが12か月効く
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧（および特別高圧の一部）では、当月を含む直近12か月の最大デマンドが翌月以降の「契約電力」になります。これを「1年間固定制（デマンド自動更新制）」といいます。今月デマンドが過去最高を更新すると、その値が契約電力となり、1年間、基本料金の計算基礎になります。つまり、たった1つの30分枠での跳ね上がりが、その後12か月分の基本料金を押し上げてしまう構造です。
            </p>
            <div className="mt-4 flex flex-col items-center gap-2">
              <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-center text-sm font-semibold text-slate-900">
                  30分ごとの平均電力を計測 → 月内の最大値がその月のピークデマンド（kW）
                </p>
              </div>
              <div className="text-slate-400">↓</div>
              <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-center text-sm font-semibold text-slate-900">
                  直近12か月のデマンド最大値 → 契約電力（kW）として自動設定
                </p>
              </div>
              <div className="text-slate-400">↓</div>
              <div className="w-full max-w-2xl rounded-lg border border-sky-200 bg-sky-50 p-4">
                <p className="text-center text-sm font-semibold text-slate-900">
                  契約電力 × 基本料金単価 × 力率係数 = 基本料金（毎月固定）
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              金額感をつかむために簡単な計算をしておきます。基本料金単価が1,700円/kW/月前後（一般的なレンジの例示。実際は契約・エリアで異なる）とすると、契約電力が10kW増えるだけで月17,000円・年204,000円の基本料金増。逆に運用改善やデマコンで契約電力を10kW下げられれば、同額がそのまま削減になります。デマンド管理の投資対効果を評価しやすいのは、この「kWあたりの効果が単価で明確に金額化できる」性質によります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約電力の決まり方の詳細は{" "}
              <Link
                href="/contract-demand-what-is-it"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                契約電力（デマンド）の仕組み
              </Link>
              、基本料金そのものを下げる観点は{" "}
              <Link
                href="/reduce-high-voltage-basic-charge"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                高圧の基本料金を下げる方法
              </Link>{" "}
              で深掘りできます。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 3 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド発生の仕組みと30分デマンド計測
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンドが急上昇するのは、短時間に多くの機器が同時稼働するタイミングです。代表例は、①始業時間帯（空調・照明・生産設備の一斉起動）、②夏の猛暑日（冷房負荷の集中）、③生産ラインのフル稼働、④設備保全後の起動試験などです。いずれも「同時に立ち上がる」ことが引き金で、使用量（kWh）の多さとは必ずしも一致しません。使用量は多くなくても、集中すればデマンドは跳ねます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              計測の単位が「30分」であることは、管理上とても重要です。デマンドは瞬間値ではなく、30分間の平均で決まります。したがって、たとえ数分だけ大電力を使っても、その30分枠のうち残り時間を抑えれば平均は下がります。逆に、30分をまたいで高負荷が続くと平均が高止まりします。デマンドコントローラは、この「現在の30分枠が終わるまでに、このままだと平均が目標を超えるか」を予測して警報・制御を行います。時間帯別の需要傾向は{" "}
              <Link
                href="/electricity-cost-seasonal-pattern"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                電気料金の季節別パターン
              </Link>{" "}
              も参考になります。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">30分デマンドの考え方（計算例）</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>ある30分枠の使用量が 90kWh → 平均電力 90 ÷ 0.5 = 180kW（この枠のデマンド）</li>
                <li>枠の前半15分だけ高負荷でも、後半を抑えれば30分平均は下がる</li>
                <li>月内の全30分枠のうち最も高い値が「当月最大デマンド」</li>
                <li>その値が過去12か月最高なら、翌月以降の契約電力に反映</li>
              </ul>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              24時間連続稼働の事業所ではベース負荷が高く、ピークとの差が小さいことも多いため、平準化の勘所が変わります。連続稼働のリスクは{" "}
              <Link
                href="/24h-operation-price-surge-risk"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                24時間稼働企業の料金高騰リスク
              </Link>{" "}
              を参照してください。
            </p>
          </section>

          {/* 4 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ピークカットの手法 — 「使う量を削って」デマンドを下げる
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークカットは、ピーク時間帯の電力そのものを削る（設備を止める・出力を抑える）ことでデマンド（kW）を直接下げる手法です。設備投資ゼロで始められる運用改善から、蓄電池・自家発電を使う投資型まで幅があります。まずは投資の小さい運用改善から着手し、効果を測りながら投資型へ広げるのが定石です。
            </p>
            <div className="mt-4 space-y-3">
              {peakCutMethods.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{m.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{m.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークカットは「重要負荷は止めない」ことが大前提です。停止して良い負荷の優先順位を事前に決め、現場が迷わない手順にしておくことが、効果と安全の両立につながります。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 5 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ピークシフトの手法 — 「使う時間をずらして」平準化する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークシフトは、使用量そのものは変えずに、電力を使う時間帯を需要の谷（早朝・夜間など）へ移すことで、昼間の受電デマンドを平準化する手法です。生産の止められない業種でも、工程間の在庫バッファや蓄熱を活かせば取り組めます。時間帯別料金メニューと組み合わせれば、デマンド（基本料金）だけでなく電力量料金の低減にもつながります。
            </p>
            <div className="mt-4 space-y-3">
              {peakShiftMethods.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{m.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{m.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">ピークカットが向く場面</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>短時間だけ突出する一斉起動・立ち上げ負荷</li>
                  <li>止めても業務影響の小さい非重要負荷がある</li>
                  <li>まず投資ゼロで着手したい</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">ピークシフトが向く場面</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>使用量は減らせないが時間をずらせる工程がある</li>
                  <li>蓄熱・蓄電・在庫バッファを持てる</li>
                  <li>時間帯別料金メニューを利用している</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンドコントローラ・デマンド監視装置の役割
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンドコントローラ（デマコン）は、30分ごとの電力使用をリアルタイムに監視し、設定した目標デマンドを超えそうになると警報を出したり、制御できる設備（空調・照明・特定設備）を自動でOFF・出力抑制したりする装置です。目標デマンドを現在の契約電力より低く設定して運用を続けると、1年後に契約電力が下がり、基本料金の削減につながります。
            </p>
            <div className="mt-4 space-y-3">
              {monitorFeatures.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{m.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{m.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              装置は「入れれば下がる」ものではなく、制御対象の確保と目標値・手順の設計が効果を左右します。監視装置の具体的な選び方は{" "}
              <Link
                href="/demand-monitoring-device-selection"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                デマンド監視装置の選び方
              </Link>{" "}
              で整理しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 7 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              BEMSによる電力の見える化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BEMS（Building Energy Management System：ビルエネルギー管理システム）は、空調・照明・受変電などのエネルギーを横断的に計測・見える化し、最適制御する仕組みです。デマンド管理はその機能の一部として組み込まれ、30分デマンドの推移や、どの設備・フロアがピークに寄与しているかを可視化できます。「どこを・いつ抑えれば効くか」がデータで分かるため、対策の優先順位づけと効果測定が回しやすくなります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">BEMSで得られること</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>30分デマンド・使用量の時間帯別/設備別の見える化</li>
                  <li>ピーク寄与設備の特定と目標値の根拠データ</li>
                  <li>空調・照明の自動制御によるピーク平準化</li>
                  <li>対策前後の効果を金額で継続測定</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">デマコンとの使い分け</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>単一のデマンド抑制が目的 → デマコン単体で十分な場合が多い</li>
                  <li>多設備を統合管理・全体最適したい → BEMSが選択肢</li>
                  <li>省エネ（kWh）とデマンド（kW）を両面で管理したい → BEMS</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見える化は目的ではなく手段です。「見える化 → 対策 → 効果測定 → 目標見直し」のサイクルを回して初めて、基本料金の継続的な低減につながります。
            </p>
          </section>

          {/* 8 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              力率改善とデマンド管理の関係
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              基本料金は「契約電力 × 基本料金単価 × 力率係数」で計算され、力率が高いほど基本料金が下がります。多くのメニューでは基準力率85%を境に、力率が1%上がるごとに基本料金が1%割引、1%下がるごとに1%割増という仕組み（力率割引・割増）が採用されています。力率が低いと、同じ有効電力（実際に仕事をする電力）を送るために受電設備の負荷が増え、基本料金も割高になります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              力率はモーターや変圧器など誘導性負荷で下がりやすく、進相コンデンサ（力率改善用コンデンサ）を設置して改善するのが一般的です。既設のコンデンサが劣化・容量不足のまま放置されて、本来得られるはずの力率割引を取りこぼしているケースもあります。デマンド（kW）を下げる取り組みと、力率係数を上げる取り組みは、いずれも基本料金の式に直接効く「掛け算の要素」であり、両方を点検することで削減効果を最大化できます。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">基本料金の式で見る削減レバー</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>契約電力（kW）を下げる … デマンド管理（ピークカット/シフト）</li>
                <li>力率係数を上げる … 進相コンデンサの適正化・力率改善</li>
                <li>基本料金単価を見直す … 契約メニュー・電力会社の比較</li>
              </ul>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              力率の基礎は{" "}
              <Link
                href="/what-is-power-factor"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                力率とは
              </Link>
              、高圧料金の全体像は{" "}
              <Link
                href="/high-voltage-electricity-pricing"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                高圧電力の料金体系
              </Link>{" "}
              を参照してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 9 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別のピーク特性と管理の勘所
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークがいつ・なぜ立つかは業種の負荷特性で大きく異なり、有効な手法も変わります。自社に近いプロファイルを起点に、カット・シフト・力率改善のどれが効きやすいかを見立ててください。
            </p>
            <div className="mt-4 space-y-3">
              {industryPeaks.map((p) => (
                <div
                  key={p.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{p.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{p.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・地域・契約条件を入れて自社の年間電気代と削減余地を試算するなら{" "}
              <Link
                href="/industry-electricity-calculator"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                業種別電気料金シミュレーター
              </Link>{" "}
              が便利です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 10 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ3件（5年累計の基本料金削減を電卓検算）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド削減の金額効果を、基本料金単価1,700円/kW/月前後（一般的なレンジの例示。実際の単価は契約書でご確認ください）を用いて、年間・5年累計で試算します。式は「削減kW × 単価 × 12ヶ月 = 年間削減額」「年間 × 5 = 5年累計」です。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    <span className="font-semibold text-slate-700">条件：</span>
                    {s.profile}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    <span className="font-semibold text-slate-700">削減目標：</span>
                    {s.reduction}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-700">
                    <span className="font-semibold">検算：</span>
                    {s.calc}
                  </p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-sm font-semibold text-slate-900">検算の確認</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>S1：1,700 × 20 × 12 = 408,000円/年 → ×5 = 2,040,000円（204万円）</li>
                <li>S2：1,700 × 50 × 12 = 1,020,000円/年 → ×5 = 5,100,000円（510万円）</li>
                <li>S3：1,700 × 120 × 12 = 2,448,000円/年 → ×5 = 12,240,000円（1,224万円）</li>
              </ul>
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              ※ いずれも代表例です。実際の効果は基本料金単価・削減できるkW・運用の徹底度・設備構成により大きく変動します。単価は契約・エリアで異なるため、必ず自社の請求書の単価で試算してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL_NOTE}</p>
          </section>

          {/* 11 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ピークデマンド管理の導入チェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              取り組みを始める前に、このチェックリストで現状を整理してください。未確認の項目が多いほど、対策の優先順位づけや効果測定の精度が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し全体の手順は{" "}
              <Link
                href="/business-electricity-contract-checklist"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                法人電力契約見直しチェックリスト
              </Link>
              、デマンドレスポンス関連の補助は{" "}
              <Link
                href="/subsidy-demand-response-incentive"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                デマンドレスポンス補助・インセンティブ
              </Link>{" "}
              を参照してください。
            </p>
          </section>

          <SourcesAndFaq
            faq={faqItems}
            sources={sourcesItems}
            publishedAt="2026-07-21"
          />

          <GlossaryLinks
            currentSlug="peak-demand-management"
            terms={["契約電力", "デマンド値", "力率", "基本料金", "高圧電力", "電力量料金"]}
          />

          <RelatedLinks
            heading="関連ページ"
            intro="ピークデマンド管理と基本料金削減に役立つ関連ページです。"
            links={[
              {
                href: "/demand-value-guide",
                title: "デマンド値の見方",
                description: "最大需要電力の意味・30分計測・契約電力への影響の基礎。",
              },
              {
                href: "/contract-demand-what-is-it",
                title: "契約電力（デマンド）の仕組み",
                description: "デマンド自動更新制と契約電力の決まり方を解説。",
              },
              {
                href: "/basic-charge-explained",
                title: "基本料金の見方",
                description: "契約電力・力率と連動する基本料金の算出構造。",
              },
              {
                href: "/reduce-high-voltage-basic-charge",
                title: "高圧の基本料金を下げる方法",
                description: "契約電力・力率・メニューの3レバーで基本料金を圧縮。",
              },
              {
                href: "/what-is-power-factor",
                title: "力率とは",
                description: "力率割引・割増の仕組みと進相コンデンサの役割。",
              },
              {
                href: "/demand-monitoring-device-selection",
                title: "デマンド監視装置の選び方",
                description: "デマコン・監視装置の機能比較と選定ポイント。",
              },
              {
                href: "/subsidy-demand-response-incentive",
                title: "デマンドレスポンス補助・インセンティブ",
                description: "DR参加の仕組みと活用できる補助・報酬の整理。",
              },
              {
                href: "/high-voltage-electricity-pricing",
                title: "高圧電力の料金体系",
                description: "基本料金・電力量料金・力率割引を含む高圧料金の全体像。",
              },
              {
                href: "/electricity-cost-seasonal-pattern",
                title: "電気料金の季節別パターン",
                description: "夏冬のピーク集中の傾向とデマンド管理の時期。",
              },
              {
                href: "/24h-operation-price-surge-risk",
                title: "24時間稼働企業の料金高騰リスク",
                description: "連続稼働事業所のデマンド・料金リスクの特性。",
              },
              {
                href: "/business-electricity-contract-checklist",
                title: "法人電力契約見直しチェックリスト",
                description: "契約見直し準備の全項目を一覧で整理。",
              },
              {
                href: "/articles/basic",
                title: "法人電気料金の基礎知識",
                description:
                  "電気料金の構成・契約の種類・値上がり要因を基礎から学べるハブ。",
              },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社のデマンド・基本料金のリスクを試算する"
            description="現在の契約電力・デマンドをもとに、基本料金の変動リスクとデマンド削減の効果を定量的に把握できます。ピークカット・ピークシフトの投資判断にご活用ください。"
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
            heading="ピークデマンド管理・基本料金の見直し、専門家に相談しませんか？"
            description="ピークカット・ピークシフト・デマコン・BEMS・力率改善のどこから着手すべきかは、事業所の負荷特性で異なります。エネルギー情報センターは中立的な立場で、法人・自治体の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
