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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["for-executives"];

const pageTitle =
  "IR開示における電気代リスク｜有価証券報告書・統合報告書・株主総会対応の完全ガイド";
const pageDescription =
  "CFO向けに有価証券報告書・統合報告書での電気代リスク開示、投資家への感度分析説明、株主総会の質問対応、TCFD/ISSB対応の記載例まで、IR実務に直結する情報を体系的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "IR 電気代 開示",
    "有価証券報告書 電力リスク",
    "統合報告書 Scope2",
    "株主総会 電気料金",
    "投資家 感度分析",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ir-disclosure-electricity-risk",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ir-disclosure-electricity-risk",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/cfo-executive", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/cfo-executive"],
  },
};

const disclosureStructure = [
  {
    label: "有価証券報告書での開示位置",
    detail:
      "有価証券報告書では『事業等のリスク』『経営者による財政状態、経営成績及びキャッシュ・フローの状況の分析』『コーポレート・ガバナンスの状況等』の3か所で電気代リスクに言及するのが標準。事業等のリスクには『エネルギー価格変動リスク』『気候変動リスク（移行リスク）』として記載、MD&Aではセグメント別の影響を定量説明する。",
  },
  {
    label: "統合報告書での開示位置",
    detail:
      "統合報告書では『マテリアリティ』『リスクマネジメント』『気候変動への対応』『価値創造プロセス』の4か所で電気代リスクとScope2排出量を統合的に記載。TCFD準拠4項目（ガバナンス・戦略・リスク管理・指標と目標）に沿って構成するのが2024年以降の標準。",
  },
  {
    label: "決算短信・四半期報告書での開示",
    detail:
      "決算短信では『業績見通し』にエネルギー価格変動の影響を定性的に記載するのが一般的。電気代上振れが業績予想下方修正の要因となる場合、明示的に開示する必要。四半期報告書（2024年廃止予定）に代わる第1・第3四半期決算短信でも同等の言及が推奨。",
  },
  {
    label: "コーポレート・ガバナンス報告書での開示",
    detail:
      "コーポレートガバナンス・コード対応として、サステナビリティ委員会・リスク管理委員会での電気代・Scope2議論をガバナンス報告書に記載。取締役会の監督体制、報酬への組み込み状況も2024年以降の開示推奨項目。",
  },
  {
    label: "TCFD・ISSB対応の年次開示",
    detail:
      "TCFD準拠開示（プライム上場義務）、ISSB S2基準対応（2026〜2027年度〜本格化）の2階層で気候関連リスク開示。電気代上昇シナリオ、Scope2排出量、削減目標進捗、財務影響を定量開示することが求められる。",
  },
];

const disclosureContent = [
  {
    label: "事業等のリスクへの記載例",
    detail:
      "『当社グループの事業活動は電力エネルギーに依存しており、燃料費調整額・再エネ賦課金等の上昇または電力市場価格の変動により、製造原価及び販管費が増加するリスクがあります。当該リスクは特に当社の[製造／物流／IT]事業セグメントへの影響が大きく、電力単価1円/kWh上昇時の年間追加コストは約[X]百万円と試算しています』というような定量説明が標準。",
  },
  {
    label: "MD&Aセクションへの記載例",
    detail:
      "『当連結会計年度の電力エネルギーコストは前期比[X]%増の[X]億円となりました。主な増加要因は[燃料費調整額の上振れ／電力使用量の増加／再エネ賦課金の上昇]で、それぞれ[X]億円、[X]億円、[X]億円の影響と試算しています。この影響は[製造原価率の悪化／販管費率の上昇]として営業利益率を[X]ポイント押し下げました』のように要因分解を提示。",
  },
  {
    label: "感度分析の開示",
    detail:
      "『電力単価±5円/kWhの変動が年間営業利益に与える影響：±[X]億円（営業利益の±[X]%）。再エネ賦課金が2030年に5円/kWhに上昇した場合の累積影響：[X]億円』のような定量的感度分析を統合報告書・有価証券報告書に開示。投資家・アナリストの分析モデルに直接活用される情報。",
  },
  {
    label: "Scope2排出量とその削減目標",
    detail:
      "『Scope2排出量（マーケットベース）：[X]万t-CO₂（前期比[X]%減）／Scope2排出量（ロケーションベース）：[X]万t-CO₂』を年次開示。削減目標として『2030年までにScope1+2排出量を2020年比[X]%削減』『2050年までにカーボンニュートラル達成』を明示するのが2024年以降の標準。",
  },
  {
    label: "電力調達戦略の開示",
    detail:
      "『再エネ電力調達比率：[X]%（前期[X]%）、内訳：再エネメニュー[X]%、PPA契約[X]%、自家消費太陽光[X]%、非化石証書[X]%』のように再エネ調達の構成を開示。長期PPA契約締結、コーポレートPPA合意の発表は、機関投資家から高評価を受ける。",
  },
];

const investorCommunication = [
  {
    label: "決算説明会での説明ポイント",
    detail:
      "決算説明会では『電力エネルギーコストの前期比変動とその要因』『将来の電気代見通しと業績への影響』『省エネ・再エネ投資の進捗と効果』の3点を必ず説明。アナリストからは『感度分析』『Scope2削減進捗』『電力契約形態（固定／市場連動比率）』への質問が増加しているため、想定問答集を整備すべき。",
  },
  {
    label: "個別IR面談での質問対応",
    detail:
      "機関投資家との個別IR面談では『電気代上昇に対する対策の具体性』『PPA契約・再エネ調達の具体的進捗』『TCFD/ISSB対応の進捗』『内部炭素価格の導入有無』が頻出。CFO・IR担当が一貫した回答を用意し、開示情報との整合を保つ必要。",
  },
  {
    label: "ESG格付機関への対応",
    detail:
      "MSCI ESG・FTSE Russell ESG・Sustainalytics等のESG格付機関は、Scope2削減進捗・再エネ比率・電気代戦略を重要評価項目として採用。年次質問票への回答精度がESGスコアに直結。CFOは経営企画・サステナビリティ部門と連携して質問票回答プロセスを整備する。",
  },
  {
    label: "サステナビリティレポート（CDP/GRI）対応",
    detail:
      "CDP（Carbon Disclosure Project）気候変動質問書ではScope1/2/3排出量・削減目標・気候戦略の詳細を開示。GRI（Global Reporting Initiative）スタンダードに沿った詳細データ開示も標準化。これら開示は機関投資家のスクリーニング条件としても活用されている。",
  },
];

const shareholderMeeting = [
  {
    label: "株主総会での想定質問と回答例",
    detail:
      "Q: 電気代上昇が業績に与える影響は？／A: 当期電力エネルギーコストは前期比+[X]億円増、営業利益率を[X]ポイント押し下げました。今後は新電力切替・PPA契約・自家消費太陽光導入で年間[X]億円のコスト削減を見込んでいます。／Q: Scope2削減目標は？／A: 2030年までに[X]%削減、2050年カーボンニュートラル達成を目標としており、再エネ比率を現在の[X]%から[X]%に拡大します。",
  },
  {
    label: "ESG・気候関連の株主提案への対応",
    detail:
      "2023〜2024年は気候関連株主提案が増加。プライム上場企業ではESG活動家投資家からの『パリ協定整合計画の開示』『Scope2削減目標の引き上げ』『TCFD準拠計画の詳細開示』要求が増加。取締役会・経営陣として一貫した方針表明と対応体制が必要。",
  },
  {
    label: "個人株主向け説明資料",
    detail:
      "個人株主向け株主通信・株主総会招集通知では、電気代戦略を分かりやすく整理した1ページ要約を入れることが推奨。グラフ・図解で『電気代の前期比増減』『再エネ調達比率の推移』『Scope2削減進捗』を可視化する。",
  },
  {
    label: "株主総会後のフォローアップ",
    detail:
      "株主総会で出た質問・要望をベースに、次年度のIR資料・有価証券報告書の開示内容を改善する循環を作る。電気代・気候関連で具体的提案があった場合、サステナビリティ委員会で検討し、回答を統合報告書等に反映するプロセスを整備。",
  },
];

const benchmarkDisclosure = [
  {
    label: "プライム上場企業の開示動向（2024年度）",
    detail:
      "東証プライム上場企業の電気代関連開示状況：①電気代の絶対額開示 約35%、②売上高電気代比率開示 約20%、③感度分析開示 約25%、④Scope2排出量開示 約65%、⑤Scope2削減目標開示 約55%、⑥再エネ比率開示 約40%。開示水準は年々向上中で、CFOは業界トップ水準を目指す必要。",
  },
  {
    label: "業種別開示精度の差",
    detail:
      "エネルギー多消費業種（化学・鉄鋼・紙パルプ）は感度分析・Scope2を詳細開示する傾向（70〜90%の企業が定量開示）。サービス業・金融業は開示水準がやや劣るが、TCFD/ISSB対応として徐々に水準向上。CFOは同業他社の開示水準を年次調査し、自社の位置付けを把握すべき。",
  },
  {
    label: "海外企業の開示先進事例",
    detail:
      "Apple・Microsoft・Google等のグローバル企業は、Scope2排出量を100%再エネ化済み（マーケットベース）と開示。詳細な調達電源別データ、地域別排出量、リアルタイム調達電力データまで開示している企業も。日本企業もこのレベルの開示水準に追随することが投資家から期待されている。",
  },
  {
    label: "中小企業・非上場企業の開示要請",
    detail:
      "プライム上場の取引先からScope2排出量開示・削減を要請される中堅・中小・非上場企業が増加。サプライチェーン全体のScope3対応の一環として、取引先選定基準にScope2削減進捗が組み込まれつつある。CFOは取引機会維持の観点からも開示準備を進める必要。",
  },
];

const internalControl = [
  {
    label: "IR情報の正確性確保プロセス",
    detail:
      "IR資料・有価証券報告書での電気代・Scope2開示は、財務・経営企画・サステナビリティ・IR部門の4部門連携で正確性を確保。電気代の月次データ、契約情報、Scope2算出データを一元管理し、開示前に内部レビュー（IRディスクロージャー委員会等）を経るプロセスが必要。",
  },
  {
    label: "適時開示（TDnet）対応",
    detail:
      "電気代の大幅な変動が業績予想に重要な影響を与える場合、適時開示の対象となる。例：電力契約の大幅改定、PPA契約締結、大型省エネ投資、Scope2削減目標の変更等。CFOは適時開示判断のフロー・基準を整備しておく必要。",
  },
  {
    label: "誤開示防止と訂正対応",
    detail:
      "Scope2排出量の算出ミス、感度分析の前提誤り、再エネ比率の誤表示などが発生した場合の訂正手続を整備。プライム上場企業は誤開示が課徴金・上場契約違反のリスクとなるため、開示前の二重チェック体制が必須。",
  },
  {
    label: "第三者保証の活用",
    detail:
      "Scope2排出量の第三者保証（限定的保証または合理的保証）を取得することで、開示の信頼性向上＋誤開示リスク低減が可能。会計監査と一体的に保証を取得することで、保証コストの効率化も実現できる。",
  },
];

const decisionFramework = [
  {
    horizon: "短期（1年以内）",
    title: "開示基盤整備フェーズ",
    initiatives: [
      "有価証券報告書『事業等のリスク』への電気代記載追加",
      "Scope2排出量（ロケーション・マーケット両基準）の正確算出",
      "感度分析（電力単価±1〜5円/kWh）の試算と開示",
      "決算説明会・個別IR面談の想定問答集整備",
      "ESG格付機関・CDP質問票への回答体制構築",
    ],
    investment: "投資規模 500万〜2,000万円（保証・コンサル含む）",
    roiTarget: "IR開示水準向上・機関投資家評価維持・取引機会保持",
  },
  {
    horizon: "中期（3年）",
    title: "詳細開示・統合報告書高度化フェーズ",
    initiatives: [
      "TCFD/ISSB準拠の詳細シナリオ分析開示",
      "Scope2削減目標（2030年・2050年）の取締役会承認・対外開示",
      "統合報告書での価値創造プロセスへの統合",
      "サステナビリティ・リンク・ローン（SLL）組成",
      "第三者保証（合理的保証）への移行",
    ],
    investment: "投資規模 2,000万〜1億円、ROI: ESGスコア向上・SLL金利優遇",
    roiTarget: "ESGスコア業界トップ層・機関投資家保有比率拡大",
  },
  {
    horizon: "長期（5年以上）",
    title: "グローバル開示水準達成フェーズ",
    initiatives: [
      "海外グローバル企業並みの詳細開示（地域別Scope2等）",
      "気候関連目標と役員報酬の連動",
      "RE100/SBT認定取得と進捗開示",
      "国際統合報告協議会（IIRC）フレームワーク完全準拠",
      "投資家・社会への透明性最大化",
    ],
    investment: "投資規模 数千万〜数億円/年（保証・データ基盤等）",
    roiTarget: "ESGトップ評価・グローバルインデックス（DJSI等）採用",
  },
];

const faqItems = [
  { question: "有価証券報告書で電気代リスクをどう開示すべきですか？", answer: "『事業等のリスク』『経営者による財政状態、経営成績及びキャッシュ・フローの状況の分析』『コーポレート・ガバナンスの状況等』の3か所で言及するのが標準です。事業等のリスクには『エネルギー価格変動リスク』『気候変動リスク（移行リスク）』として記載、MD&Aではセグメント別の影響を定量説明します。" },
  { question: "感度分析はどう開示すべきですか？", answer: "『電力単価±5円/kWhの変動が年間営業利益に与える影響：±X億円（営業利益の±X%）。再エネ賦課金が2030年に5円/kWhに上昇した場合の累積影響：X億円』のような定量的感度分析を統合報告書・有価証券報告書に開示します。投資家・アナリストの分析モデルに直接活用される情報です。" },
  { question: "Scope2排出量はどのレベルで開示すべきですか？", answer: "プライム上場企業ではScope2排出量（マーケット・ロケーション両基準）と削減目標（2030年・2050年）の開示が事実上必須。年次推移、業種比較、削減目標進捗率を統合報告書に詳細記載するのが2024年以降の標準です。" },
  { question: "決算説明会での想定質問は？", answer: "①電力エネルギーコストの前期比変動とその要因、②将来の電気代見通しと業績への影響、③省エネ・再エネ投資の進捗と効果、④感度分析、⑤Scope2削減進捗、⑥電力契約形態（固定／市場連動比率）の6項目が頻出。想定問答集を整備しておく必要があります。" },
  { question: "株主総会での電気代関連質問にはどう答えますか？", answer: "電気代の前期比増減と要因、Scope2削減進捗、PPA契約・再エネ調達戦略の3軸で回答準備をします。具体的な数値（売上高電気代比率、Scope2排出量、再エネ比率）と中期計画（2030年目標等）を明示することで、株主の不安を解消し信頼を獲得できます。" },
  { question: "ESG格付機関への対応はどう進めますか？", answer: "MSCI ESG・FTSE Russell ESG・Sustainalytics等の年次質問票への回答精度がESGスコアに直結します。CFOは経営企画・サステナビリティ部門と連携して質問票回答プロセスを整備し、Scope2削減進捗・再エネ比率・電気代戦略を一貫した内容で開示する必要があります。" },
  { question: "TCFD/ISSB対応で何を開示すべきですか？", answer: "TCFD準拠4項目（ガバナンス・戦略・リスク管理・指標と目標）に沿って構成。シナリオ分析（2℃以下・4℃の2シナリオ）、Scope2排出量、削減目標進捗、財務影響を定量開示します。ISSB S2基準では2026〜2027年度開始事業年度から本格適用予定です。" },
  { question: "中小企業も電気代開示が必要ですか？", answer: "プライム上場の取引先からScope2排出量開示・削減を要請される中堅・中小・非上場企業が増加しています。サプライチェーン全体のScope3対応の一環として、取引機会維持の観点からも開示準備を進める必要があります。任意開示でも、取引先・金融機関への提示資料として整備することが推奨されます。" },
];

const sourcesItems = [
  { name: "金融庁 企業内容等の開示", url: "https://www.fsa.go.jp/policy/kaiji/" },
  { name: "TCFDコンソーシアム", url: "https://tcfd-consortium.jp/" },
  { name: "ISSB（IFRS Foundation）", url: "https://www.ifrs.org/groups/international-sustainability-standards-board/" },
  { name: "CDP（Carbon Disclosure Project）", url: "https://www.cdp.net/ja" },
  { name: "東京証券取引所 コーポレート・ガバナンス・コード", url: "https://www.jpx.co.jp/equities/listing/cg/" },
];

export default function IrDisclosureElectricityRiskPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ir-disclosure-electricity-risk"
        datePublished="2026-05-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "CFO・経営層向け電気代戦略", url: "https://simulator.eic-jp.org/articles/cfo-executive" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/cfo-executive" className="underline-offset-2 hover:underline">CFO・経営層向け電気代戦略</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">IR開示における電気代リスク</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            IR開示における電気代リスク
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電気代リスクは投資家・機関投資家・ESG格付機関から注視される重要開示項目です。本ページでは有価証券報告書・統合報告書での記載位置、感度分析の開示方法、決算説明会・株主総会対応、TCFD/ISSB対応まで、CFO・IR担当が実務で活用できる情報を体系的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>有価証券報告書・統合報告書での電気代リスク記載位置と書き方</li>
              <li>感度分析・シナリオ分析の開示方法と記載例</li>
              <li>Scope2排出量・再エネ比率の開示水準と業種別比較</li>
              <li>決算説明会・個別IR面談での想定質問と回答例</li>
              <li>株主総会対応・ESG株主提案への対応方針</li>
              <li>ESG格付機関・CDP・GRI対応の標準プロセス</li>
              <li>意思決定フレームワーク3件（短期1年／中期3年／長期5年）</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">経営層が知るべきIR開示の構造</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代リスクのIR開示は『有価証券報告書』『統合報告書』『決算短信』『コーポレート・ガバナンス報告書』『TCFD/ISSB報告書』の5媒体で行います。各媒体の役割と記載位置を理解することがCFO・IR担当の出発点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {disclosureStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">損益計算書（P/L）と開示の整合性</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              IR開示する電気代の数値は、P/Lの『水道光熱費』『動力費』『電力料』等の勘定科目から正確に集計する必要があります。連結ベース・単体ベース・セグメント別の数値が整合していることが、IR資料の信頼性の基本です。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">開示数値の集計フロー</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li>各事業所・拠点で月次の電気代を勘定科目別に集計</li>
                <li>連結会計システムで全社合計・セグメント別合計を算出</li>
                <li>P/L上の『水道光熱費』『動力費』との整合性チェック</li>
                <li>Scope2排出量の電力使用量と整合性チェック</li>
                <li>IR資料への記載前にCFO・経営企画・財務の三者確認</li>
              </ol>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              P/L構造の詳細は{" "}
              <Link href="/cfo-electricity-cost-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFOのための電気代基礎</Link>
              。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業界平均との比較・ベンチマーク開示</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プライム上場企業の電気代・Scope2開示状況を業種別に整理することで、自社の開示水準を客観的に評価できます。海外グローバル企業の先進事例も参考にすべき重要視点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {benchmarkDisclosure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">経営指標への影響開示 — 記載例集</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実際の開示文章の標準例を5パターン整理します。事業等のリスク・MD&A・感度分析・Scope2・電力調達戦略の各シーンで活用できる雛形です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {disclosureContent.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">意思決定フレームワーク 3件 — 短期1年／中期3年／長期5年</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              IR開示水準の向上は『短期：開示基盤整備』『中期：詳細開示・統合報告書高度化』『長期：グローバル開示水準達成』の3層構造で設計します。
            </p>
            <div className="mt-4 space-y-4">
              {decisionFramework.map((cs) => (
                <div key={cs.horizon} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <p className="text-sm font-semibold text-slate-900">{cs.horizon}：{cs.title}</p>
                    <p className="text-xs text-emerald-700 font-semibold">{cs.investment}</p>
                  </div>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p className="font-semibold text-slate-700">実行打ち手:</p>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                      {cs.initiatives.map((init, idx) => (
                        <li key={idx}>{init}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-sm text-emerald-700 font-semibold">ROI目標: {cs.roiTarget}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">リスク評価 — 投資家コミュニケーション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              機関投資家・ESG格付機関・サステナビリティアナリストとの双方向コミュニケーションを通じて、開示の質と投資家評価を向上させる体系を整備します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {investorCommunication.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">取締役会への報告フォーマット — 株主総会対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              株主総会で問われる電気代関連質問への対応、ESG株主提案への姿勢表明、個人株主向け説明資料整備など、IR・株主総会対応の標準フレームワークを整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {shareholderMeeting.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ESG・サステナビリティとの統合開示</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代リスク開示はScope2排出量・気候関連リスク開示と統合的に設計する必要があります。TCFD・ISSB・CDP・GRIの各フレームワークを並列対応するための整理を提示します。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">統合開示フレームワーク</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li><strong>TCFD</strong>: ガバナンス・戦略・リスク管理・指標と目標の4項目</li>
                <li><strong>ISSB S2</strong>: 定量的財務影響開示（2026〜2027年度〜本格化）</li>
                <li><strong>CDP気候変動</strong>: Scope1/2/3排出量、削減目標、戦略の詳細質問</li>
                <li><strong>GRI 302（エネルギー）/305（排出）</strong>: 詳細データ開示</li>
                <li><strong>SASB</strong>: 業種別マテリアリティに基づく開示</li>
                <li><strong>統合報告書（IIRC）</strong>: 価値創造プロセスへの統合</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">M&A・新規事業展開時のIR開示</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              M&A・新規事業展開・拠点統廃合は、電気代リスク・Scope2排出量の構造変化を伴うため、適時開示・統合報告書での説明責任が発生します。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">M&A・事業展開時の開示ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
                <li>買収対象企業のScope2排出量と削減目標の整合性</li>
                <li>新規工場・データセンター建設に伴うScope2追加と削減計画</li>
                <li>事業撤退・閉鎖に伴うScope2排出量の減少効果</li>
                <li>長期PPA契約締結の適時開示（重要な業務上の契約）</li>
                <li>大型省エネ投資の適時開示と将来効果の説明</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">監査・内部統制 — IR情報の正確性確保</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              IR開示情報の正確性は、上場企業として最も重要な品質指標です。誤開示は課徴金・上場契約違反のリスクとなるため、開示前の確認プロセス・内部統制が必須です。
            </p>
            <div className="mt-4 space-y-3">
              {internalControl.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">経営層向けIR開示チェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              CFO・IR担当が電気代リスク・Scope2開示を整備する際のチェックリスト10項目です。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              <li>有価証券報告書『事業等のリスク』への電気代記載があるか</li>
              <li>MD&Aで電力エネルギーコストの要因分解を提示しているか</li>
              <li>感度分析（電力単価±5円/kWh）の結果を統合報告書に開示しているか</li>
              <li>Scope2排出量（マーケット・ロケーション両基準）を年次開示しているか</li>
              <li>Scope2削減目標（2030年・2050年）を取締役会承認し対外開示しているか</li>
              <li>再エネ調達比率と電力契約形態を開示しているか</li>
              <li>決算説明会・個別IR面談の想定問答集を整備しているか</li>
              <li>株主総会の想定質問・回答例を準備しているか</li>
              <li>ESG格付機関（MSCI/FTSE/Sustainalytics）・CDP質問書への回答体制があるか</li>
              <li>第三者保証（限定的または合理的）の取得計画があるか</li>
            </ol>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-19"
            />
            <GlossaryLinks currentSlug="ir-disclosure-electricity-risk" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/cfo-executive", title: "CFO・経営層向け電気代戦略（カテゴリ）", description: "CFO向け記事ハブ。" },
              { href: "/cfo-electricity-cost-basics", title: "CFOのための電気代基礎", description: "P/L構造・経営判断フレームワーク。" },
              { href: "/scope2-reduction-cfo-responsibility", title: "Scope2削減とCFOの責任", description: "Scope2算出方法と再エネ調達戦略。" },
              { href: "/manufacturing-cfo-electricity-strategy", title: "製造業CFO戦略", description: "業種別ベンチマークとIR開示。" },
              { href: "/retail-cfo-electricity-strategy", title: "流通・小売業CFO戦略", description: "店舗vs DC構造の開示。" },
              { href: "/service-industry-cfo-electricity-strategy", title: "サービス業CFO戦略", description: "オフィス電気代の開示。" },
              { href: "/executive-esg-electricity-disclosure", title: "IR・ESG開示における電力リスクの記載ガイド", description: "TCFD/ISSB対応の詳細。" },
              { href: "/executive-ebitda-impact", title: "電気代がEBITDAに与える影響の測り方", description: "感度分析の計算手法。" },
              { href: "/executive-business-continuity-risk", title: "電気代高騰と事業継続リスク", description: "BCP・財務リスクの観点。" },
              { href: "/executive-mid-term-plan-electricity", title: "中期経営計画への電力コスト織り込み方", description: "3〜5年計画への組み込み。" },
              { href: "/executive-board-reporting-items", title: "取締役会で報告すべき電力リスク5項目", description: "報告フォーマットの基本。" },
              { href: "/executive-board-report-template", title: "取締役会向け電力リスク報告テンプレート", description: "報告テンプレートの構成。" },
              { href: "/executive-risk-planning-approaches", title: "電気料金リスクを事業計画に織り込む3つのアプローチ", description: "リスク織り込み手法。" },
              { href: "/executive-peer-cost-benchmarking", title: "同業他社との電力コスト比較の進め方", description: "競合分析の手順。" },
              { href: "/executive-cfo-electricity-basics", title: "CFOのための電力市場基礎", description: "電力市場の基礎知識。" },
              { href: "/gx-ets-impact-business-electricity", title: "GX-ETSが法人電気料金に与える影響", description: "排出枠取引制度の影響。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備項目。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "削減打ち手の全体像。" },
              { href: "/articles/decarbonization", title: "脱炭素・カーボンニュートラル", description: "脱炭素戦略カテゴリ。" },
              { href: "/articles/for-executives", title: "経営層・CFO向け（一覧）", description: "経営層向け記事のハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="IR開示の感度分析シミュレーターで定量化する"
            description="電力単価±5円/kWhの感度分析、再エネ賦課金上昇シナリオ、Scope2削減コストの財務影響を、自社条件で試算できます。有価証券報告書・統合報告書の作成準備資料として活用ください。"
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
            heading="IR開示・統合報告書 専門コンサルティング"
            description="電気代リスク・Scope2排出量のIR開示文章作成、感度分析・シナリオ分析の設計、決算説明会・株主総会対応をサポートします。エネルギー情報センターは中立的立場で経営層・IR担当の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
