import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "小売・商業の補助金活用戦略｜SII省エネ・ZEB化補助で冷蔵ショーケース・LED・空調を導入する完全ガイド";
const pageDescription =
  "小売・商業に特化した補助金活用戦略ガイド。SII省エネ補助（ZEB・既存建築物省エネ化）、ものづくり補助（省力化）、多店舗一括導入支援、自治体補助を組合せ、冷蔵冷凍ショーケース・全館LED・高効率空調・屋上太陽光を導入する実務を、規模別事例・採択戦略・併用ルール・申請フローまで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "小売 補助金",
    "商業施設 省エネ補助金",
    "冷蔵ショーケース 補助金",
    "店舗 LED ZEB 補助金",
    "多店舗 一括 省エネ 補助",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-retail-commerce-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-retail-commerce-strategy",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/subsidies", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/subsidies"],
  },
};

const overview = [
  {
    label: "小売・商業が使える補助金の全体像",
    detail:
      "小売・商業の省エネ・脱炭素投資には、①SII省エネ補助金（ZEB・既存建築物省エネ化・工場事業場型）、②ものづくり補助金（省力化・効率化枠）、③多店舗一括導入を支援する設備補助、④GX・CN投資促進税制、⑤都道府県・市町村の独自補助、が活用できます。冷蔵冷凍ショーケース・全館LED・高効率空調・屋上太陽光は補助金費用対効果が高く、大手小売のRE100要請・サステナブル調達への対応投資としても採択評価されやすいのが特徴です（出典: SII公式・経産省・中小企業庁から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『小売・商業（スーパー・百貨店・店舗・商業施設）』に特化した補助金活用戦略です。各補助金制度の概要・採択率の総論は別途整理しています。本ページでは冷蔵冷凍ショーケース・ナイトカバー・調光付き全館LED・店舗空調といった小売固有の対象設備、多店舗一括の集約購買、大手小売CN要請に応える申請ストーリーに焦点を当てます。",
  },
  {
    label: "ショーケース・冷蔵電力の多消費と補助金の親和性",
    detail:
      "スーパー・食品小売は冷蔵冷凍ショーケースの電力が全電力の40〜60%を占める電力多消費業種。ショーケースの高効率化・扉付き化・ナイトカバー導入は省エネ絶対量が大きく、補助金の費用対効果（補助額あたりの省エネ量・CO2削減）が高く評価されやすいため、採択上有利です。物販中心の店舗でも全館LED・調光・空調更新が補助対象になります。",
  },
  {
    label: "大手小売・テナント側のCN要請を申請に活かす",
    detail:
      "大手小売チェーン・百貨店・大型商業施設のRE100・Scope3削減要請やテナントへの省エネ要請が強まり、店舗の省エネ・再エネ投資は『取引継続・出店継続のための必須投資』と位置づけられます。この外部要請を事業計画に明記することで、投資の必要性が説得力を持ち採択評価に寄与します。",
  },
  {
    label: "多店舗一括契約・集約購買と補助の連動",
    detail:
      "多店舗を持つ小売事業者は、複数店舗の高圧・低圧契約を一括契約・集約購買することで調達コストを下げつつ、同一仕様の省エネ設備（ショーケース・LED・空調）を複数店舗へ一括導入できます。一括導入は調達単価・工事費を抑え、補助金の費用対効果を高める有効な戦略です（出典: SII公式・各自治体から整理／2025年度時点）。",
  },
];

const mainSubsidies = [
  {
    name: "SII 省エネ補助金（ZEB・既存建築物省エネ化）",
    role: "経産省・環境省／店舗・商業施設の主力",
    detail:
      "店舗・商業施設のZEB化（ネット・ゼロ・エネルギー・ビル）、既存建築物の省エネ改修が対象。高効率空調・全館LED・断熱・BEMS等で活用可能。補助率はZEB水準・事業区分により異なります。新築・大規模改修の店舗ではZEBランクに応じた補助が狙えます（出典: SII公式・環境省／2025年度時点）。",
  },
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    role: "経産省／ショーケース・空調更新の主力",
    detail:
      "冷蔵冷凍ショーケース（高効率・自然冷媒）・空調・LED等の省エネ設備更新が対象。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。ショーケースは省エネ絶対量が大きく費用対効果で採択上有利です（出典: SII公式／2025年度時点）。",
  },
  {
    name: "ものづくり補助金（省力化・効率化枠）",
    role: "中小企業庁／省力化・効率化",
    detail:
      "中小小売事業者は、ものづくり補助金の省力化枠等でセルフレジ・自動発注・店舗オペレーション効率化設備の導入が対象になる場合があります。省力化（人手不足対応）と省エネを一体訴求すると採択上有利です（出典: 中小企業庁／2025年度時点）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    role: "経産省・国税庁／税額控除・特別償却",
    detail:
      "脱炭素関連設備の取得で投資額の10%税額控除または50%特別償却。ショーケース・空調・自家消費太陽光・PPA関連設備で活用しやすく、補助金と併用可能なケースもあります（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    name: "都道府県・市町村の独自補助",
    role: "自治体／上乗せ・横出し",
    detail:
      "商業集積のある自治体（東京・大阪・愛知・福岡等）は独自の省エネ・脱炭素設備補助を整備。LED・ショーケース・空調・太陽光が対象になりやすく、国補助と設備を分けることで併用可能なケースもあり、重層活用で実質負担を圧縮できます（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助",
    role: "経産省・環境省／再エネ調達",
    detail:
      "屋上の自家消費型太陽光・オフサイトPPA・蓄電池併設が対象。大型商業施設・郊外型店舗は屋上・駐車場の面積を活かした太陽光の適性が高い。大手小売のRE100対応投資と組合せやすく、補助率1/2以内・kWh定額補助型もあります（出典: 経産省・環境省／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率の水準（小売・商業の代表設備）",
    detail:
      "SII省エネ補助は中小1/2・大企業1/3が基本。例えばショーケース更新4,000万円の場合、SII補助1/2で2,000万円が補助され実質負担2,000万円。冷蔵電力▲20〜30%で年間数百万〜千万円の削減なら、補助後の投資回収は3〜4年が目安です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    label: "上限額と申請枠の選択",
    detail:
      "SII省エネ補助は事業類型により上限が異なり、大型商業施設の大規模改修はZEB・先進事業（上限15億円）、単体設備は指定設備導入事業（上限1億円）等。多店舗一括は店舗ごと・グループでの申請枠の選択が前提です。投資規模に応じた枠の選択が重要です。",
  },
  {
    label: "採択率の実情（公表値ベース）",
    detail:
      "採択率は補助金・公募回により変動し、各事務局が公募回ごとに採択結果を公表しています。ショーケース更新は省エネ効果が大きく費用対効果が高いため採択されやすい傾向。採択率は固定値ではないため、最新の事務局公表値を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "費用対効果（省エネ量あたり補助額）の重要性",
    detail:
      "SII省エネ補助は補助額あたりの省エネ量で採択評価。スーパー・食品小売はショーケースの24時間冷却で省エネ絶対量が大きく、扉付き化・高効率化の効果が大きいため費用対効果が高く評価されます。効果の大きいショーケース・空調から優先するのが採択戦略です。",
  },
];

const caseStudies = [
  {
    title: "事例1: 大型総合スーパー多店舗一括（合計特別高圧6,000kW）",
    before:
      "Before: 旧型オープンショーケース・蛍光灯照明のまま。10店舗合計の年間電気代約12億円。本部主導でCN対応・省エネ改修を検討していたが投資負担が課題。",
    after:
      "After: SII先進事業でショーケースを扉付き・自然冷媒・高効率化に多店舗一括更新／既存建築物省エネ化補助で全館LED＋調光＋空調更新／需要家主導型PPA補助で屋上太陽光＋蓄電池導入。多店舗一括の集約購買で調達単価を圧縮。",
    result:
      "Result: 10店舗合計の年間電気代 ▲約24%（▲2.9億円）／RE100比率約30%達成／補助後の投資回収 3〜4年（目安）／大手取引先のCN要請に対応。",
  },
  {
    title: "事例2: 中規模食品スーパー単店（高圧900kW）",
    before:
      "Before: 旧型ショーケース・蛍光灯照明。年間電気代約1.8億円。本部からCN対応を求められていた。",
    after:
      "After: SII省エネ補助（1/2）でショーケース高効率化＋ナイトカバー導入＋全館LED化（投資4,000万円のうち補助2,000万円）／自治体補助で空調更新／屋上太陽光自家消費。",
    result:
      "Result: 実質投資負担 約1,600万円／年間電気代 ▲約21%（▲3,800万円）／補助後の投資回収 約2.5年（目安）／生鮮品質の安定化も実現。",
  },
  {
    title: "事例3: 中規模アパレル・物販店舗＋商業ビル（高圧700kW）",
    before:
      "Before: 物販中心の店舗、空調・照明が高経年。年間電気代約1.4億円。人手不足でセルフレジ導入を検討。",
    after:
      "After: ものづくり補助金（省力化枠）でセルフレジ・自動発注を更新（省力化＋省エネを一体訴求し採択）／SII補助で空調更新・調光付きLED化／屋上太陽光導入。",
    result:
      "Result: 実質投資負担を約40%圧縮／年間電気代 ▲約20%（▲2,800万円）／省力化で人手不足に対応／投資回収 補助後2.5年（目安）。",
  },
];

const cautionItems = [
  {
    label: "公募期間・交付決定前の発注は対象外",
    detail:
      "補助金は原則『交付決定後』に発注・契約した設備が対象。ショーケース・空調は多店舗一括だとリードタイムが長いため、公募スケジュールと設備調達・工事のタイミング管理が特に重要です。",
  },
  {
    label: "同一設備への国補助の重複は不可",
    detail:
      "同一の設備・経費に複数の国庫補助を重複して受けることは原則不可。ZEB補助とショーケース更新のSII補助で対象設備を分ける等のルールで併用可能なケースがあるため、事前確認が必須です。",
  },
  {
    label: "省エネ効果の実績報告（ショーケース・空調）",
    detail:
      "省エネ補助は交付後に省エネ効果の実績報告が必要。多店舗では計測体制（BEMS・電力計測）を整えておくと報告がスムーズで、効果の継続管理にも役立ちます。",
  },
  {
    label: "多店舗・テナント区分の整理",
    detail:
      "多店舗一括申請やテナント入居店舗では、申請主体・所有区分（自社所有か賃借か）・電力契約者の整理が必要。賃借物件は建物オーナーとの調整・合意形成が補助申請の前提になる場合があります。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回で変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で戦略を立てることが重要です。",
  },
];

const targetEquipment = [
  {
    label: "高効率冷蔵冷凍ショーケース（扉付き・自然冷媒）",
    detail:
      "オープンショーケースから扉付き・自然冷媒（CO2）・インバータ式ショーケースへの更新で冷蔵電力▲20〜30%。スーパー・食品小売の最大の省エネ余地で、SII省エネ補助の王道設備。投資回収3〜4年が目安。",
  },
  {
    label: "ナイトカバー・デフロスト最適化",
    detail:
      "オープンショーケースのナイトカバー（夜間カバー）導入とデフロスト（霜取り）最適化で冷蔵電力▲10〜15%。低投資で効果が出やすく、自治体補助との併用もしやすい設備です。",
  },
  {
    label: "調光付き全館LED照明",
    detail:
      "売場の蛍光灯・水銀灯からの全館LED化＋人感・照度センサー調光で照明電力▲50〜70%。照明数の多い大型店舗ほど効果が大きく、ZEB化・既存建築物省エネ化補助の対象です。",
  },
  {
    label: "高効率空調・全熱交換器",
    detail:
      "店舗の高効率パッケージエアコン・GHP・全熱交換器（外気熱回収）への更新で空調電力▲15〜25%。来店客の快適性と省エネを両立し、SII・ZEB補助の対象です。",
  },
  {
    label: "屋上・駐車場太陽光・蓄電池",
    detail:
      "大型商業施設・郊外型店舗は屋上・カーポート（駐車場）を活かした太陽光＋蓄電池の自家消費が現実的。需要家主導型再エネ補助・GX税制の対象で、大手小売RE100対応の手段としても有効です。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 電力使用・冷蔵負荷の把握",
    detail:
      "まずショーケース・空調・照明の電力使用状況を店舗別に把握。省エネ診断を活用すると、ショーケースの効率・省エネ余地が定量化でき、申請の根拠が整います。",
  },
  {
    label: "STEP2: 補助金の選定・枠の決定",
    detail:
      "投資内容（ショーケース更新／LED・空調／屋上太陽光）に応じてSII省エネ補助・ZEB補助・需要家主導型PPA補助を選定し、多店舗一括の申請枠・併用可否を確認します。",
  },
  {
    label: "STEP3: 事業計画書の作成",
    detail:
      "省力化（人手不足対応）・省エネ・CN対応（大手小売要請）の定量効果と必要性を記述。ショーケース更新の省エネ量・冷蔵電力削減を数値で示すと説得力が高まります。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請。交付決定後にショーケース・空調を発注（決定前発注は対象外）。多店舗一括はリードタイム・工事工程の調整に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告",
    detail:
      "設備導入後、省エネ効果の実績報告を提出。多店舗では計測体制（BEMS）があると報告がスムーズで、継続的な省エネ管理にも役立ちます。",
  },
];

const energySaving = [
  {
    label: "ショーケース高効率化を最優先（採択戦略）",
    detail:
      "スーパー・食品小売はショーケースが全電力の40〜60%を占めるため、ショーケースの扉付き化・高効率化が最大の省エネ余地。効果が大きく費用対効果が高いため、ショーケース更新を軸に申請すると採択率が高まります。",
  },
  {
    label: "省力化（人手不足対応）との一体投資",
    detail:
      "セルフレジ・自動発注の省力化投資は人手不足対応と省エネを両立。ものづくり補助金（省力化枠）で評価されるため、省力化と省エネの一体訴求が有効です。",
  },
  {
    label: "多店舗一括・集約購買による費用対効果向上",
    detail:
      "複数店舗の同一仕様設備を一括導入・集約購買すると調達単価・工事費を圧縮でき、補助金の費用対効果が高まります。多店舗一括契約による電力調達コスト削減と合わせると効果大です。",
  },
  {
    label: "国補助＋自治体補助＋税制の重層活用",
    detail:
      "SII省エネ補助＋ZEB補助＋自治体補助＋GX税制を設備・経費で切り分けて重層活用すると、実質負担を最大限圧縮できます。併用可否の見極めが上級テクニックです。",
  },
  {
    label: "複数店舗・複数年での段階申請",
    detail:
      "多店舗を持つ小売事業者は、優先度の高い店舗・設備から複数年計画で段階的に申請。年度予算・公募に合わせて計画的に補助を獲得し、キャッシュフロー負担を平準化できます。",
  },
];

const checklistItems = [
  "ショーケース・空調・照明の電力使用状況を店舗別に把握しているか",
  "ショーケースの扉付き化・自然冷媒・高効率化の更新余地を確認したか",
  "投資内容に応じた補助金（SII／ZEB／PPA）・枠を選定したか",
  "省力化（人手不足対応）と省エネを一体訴求しているか",
  "大手小売・テナント側のCN要請を事業計画に反映したか",
  "多店舗一括・集約購買による費用対効果向上を検討したか",
  "屋上・駐車場太陽光（面積・kW・回収年数）の試算を実施したか",
  "交付決定後に発注するスケジュール管理（ショーケースのリードタイム）ができているか",
  "実績報告のための計測体制（BEMS等）を準備しているか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
  "補助後の投資回収年数を試算したか",
  "不採択時の再申請・別補助金への切替戦略を準備したか",
];

const faqItems = [
  {
    question: "小売・商業が最初に検討すべき補助金は何ですか？",
    answer:
      "スーパー・食品小売ならショーケース更新でSII省エネ補助金（工場・事業場型）が王道です。中小1/2・大企業1/3で、ショーケースが全電力の40〜60%を占める食品小売は省エネ絶対量が大きく費用対効果で採択上有利。大規模改修・新築ならZEB・既存建築物省エネ化補助、省力化（セルフレジ等）ならものづくり補助金（省力化枠）を検討します。本ページは小売・商業特化の戦略で、各制度の総論は補助金カテゴリの概要記事も参照してください（出典: SII公式・中小企業庁／2025年度時点）。",
  },
  {
    question: "冷蔵冷凍ショーケースの更新でどのくらい補助が出ますか？",
    answer:
      "SII省エネ補助で中小1/2・大企業1/3が基本です。例えばショーケース更新4,000万円なら中小は2,000万円が補助され、実質負担2,000万円。冷蔵電力▲20〜30%で年間数百万〜千万円の削減なら補助後の投資回収は3〜4年が目安。オープン型から扉付き・自然冷媒・インバータ式への更新は省エネ効果が大きく、採択上も有利です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    question: "ZEB補助とSII省エネ補助は併用できますか？",
    answer:
      "対象設備・経費を分ければ併用可能なケースがあります。例えば建物全体のZEB化を環境省ZEB補助、ショーケースをSII省エネ補助、と設備を分けることで重層活用できる場合があります。ただし同一設備への国庫補助の重複は原則不可で、併用可否は補助金ごとに異なるため、所管窓口に事前確認が必須です（出典: 環境省・SII公式／2025年度時点）。",
  },
  {
    question: "多店舗を持つ小売は補助金をどう活用すべきですか？",
    answer:
      "多店舗一括の集約購買と段階申請が有効です。複数店舗の同一仕様設備（ショーケース・LED・空調）を一括導入すると調達単価・工事費を圧縮でき、補助金の費用対効果が高まります。多店舗一括契約による電力調達コスト削減と合わせると効果大。優先度の高い店舗から複数年計画で段階的に申請し、年度予算・公募に合わせて計画的に補助を獲得するのが現実的です（出典: SII公式・各自治体／2025年度時点）。",
  },
  {
    question: "大手小売の RE100 要請は補助金申請に有利ですか？",
    answer:
      "有利に働きます。大手小売チェーン・百貨店・大型商業施設のRE100・Scope3削減要請やテナントへの省エネ要請を事業計画に明記すると、投資の必要性・緊急性が説得力を持ち採択評価に寄与します。屋上太陽光・ショーケース更新は『取引継続・出店継続のための必須投資』という位置づけで、補助金の政策目的（業務部門の脱炭素化）にも合致します。",
  },
  {
    question: "店舗の屋上太陽光は補助金で導入できますか？",
    answer:
      "できます。需要家主導型再エネ補助・GX投資促進税制の対象です。大型商業施設・郊外型店舗は屋上・駐車場（カーポート）の面積を活かした太陽光の自家消費が現実的。RE100対応の大手小売案件ではPPA事業者経由で初期投資ゼロ・長期PPAも主流です。蓄電池併用でピークカット・BCP対応の効果も加わります（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    question: "交付決定前にショーケースを発注するとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助金は『交付決定後』に発注・契約した設備が対象。ショーケース・空調は多店舗一括だとリードタイムが長いため、公募スケジュールと調達・工事タイミングの管理が特に重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。",
  },
  {
    question: "中小・単店の小売でも使える補助金はありますか？",
    answer:
      "あります。SII省エネ補助は中小1/2と手厚く、ものづくり補助金（省力化枠）は中小・小規模事業者が主対象です。自治体の独自補助も中小向けが多く、国補助との重層活用も可能。中小・単店の小売は、ショーケース・LED・空調の優先度を決め、ナイトカバー等の低投資施策から始めて段階的に補助を獲得するのが現実的な進め方です（出典: 中小企業庁・SII公式・各自治体／2025年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "環境省 ZEB（ネット・ゼロ・エネルギー・ビル）", url: "https://www.env.go.jp/" },
  { name: "中小企業庁 ものづくり補助金（省力化枠）", url: "https://www.chusho.meti.go.jp/" },
  { name: "経済産業省・環境省 需要家主導型再エネ補助", url: "https://www.meti.go.jp/" },
];

export default function SubsidyRetailCommerceStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-retail-commerce-strategy"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "小売・商業の補助金活用戦略", url: "https://simulator.eic-jp.org/subsidy-retail-commerce-strategy" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">小売・商業の補助金活用戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            小売・商業の補助金活用戦略 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            スーパー・食品小売は冷蔵冷凍ショーケースの電力が全電力の40〜60%を占める電力多消費業種で、ショーケース更新の補助金費用対効果が高い業種です。本ページではSII省エネ補助・ZEB化補助・ものづくり補助（省力化）・自治体補助を組合せ、冷蔵冷凍ショーケース・全館LED・高効率空調・屋上太陽光を導入する実務を、規模別事例・採択戦略・併用ルール・申請フローまで整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>小売・商業が使える補助金・税制の全体像と使い分け</li>
              <li>冷蔵冷凍ショーケース・ナイトカバー・調光LED等の固有設備と補助金</li>
              <li>規模別の補助前後Before/After投資回収事例3件</li>
              <li>多店舗一括・集約購買と省力化を一体訴求する採択戦略</li>
              <li>小売・商業向け補助金活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは小売・商業に特化した補助金活用戦略ガイドです。各補助金制度の概要・採択率の総論は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">小売・商業が使える補助金の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小売・商業の省エネ・脱炭素投資には、SII省エネ補助・ZEB補助・ものづくり補助（省力化）・GX税制・自治体補助が活用できます。多店舗一括・集約購買と省力化を一体で訴求し、大手小売CN要請を反映することで採択率と費用対効果を最大化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {overview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の電力プロファイルは{" "}
              <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小売店舗の電気料金見直し</Link>
              、{" "}
              <Link href="/supermarket-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">スーパーの電気料金見直し</Link>
              、{" "}
              <Link href="/department-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">百貨店の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要補助金・税制の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小売・商業が活用できる主要な補助金・税制を、役割・補助率・対象設備別に整理します。投資内容に応じて最適な制度を選定し、併用・重ね取りを検討します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {mainSubsidies.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助率・上限・採択率の水準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助率・上限額・採択率の水準と、費用対効果の重要性を整理します。採択率は公募回で変動するため、最新の事務局公表値での確認が前提です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyRates.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限・採択率は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・採択結果を必ず確認してください。出典: SII公式・環境省・中小企業庁から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別事例3件 — 補助前後の投資回収（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小売・商業の代表的な3規模で、補助金活用による実質負担圧縮と投資回収の改善をBefore/After方式で提示します。いずれも公開事例・補助金実績から再構成した代表シナリオで、数値は目安レンジです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">{cs.before}</span></p>
                    <p><span className="font-semibold text-slate-700">{cs.after}</span></p>
                    <p><span className="font-semibold text-emerald-700">{cs.result}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">小売・商業固有の対象設備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金で導入しやすい小売・商業固有の設備を整理します。効果の大きいショーケース・空調から優先するのが採択戦略です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {targetEquipment.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              屋上太陽光は{" "}
              <Link href="/subsidy-ppa-vppa-detail" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA/VPPA関連補助金の詳細</Link>
              、BEMSは{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力使用把握から実績報告まで、補助金申請の標準的な流れを整理します。ショーケース・空調のリードタイムと交付決定前発注の禁止に特に注意が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {applicationFlow.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業計画書の書き方は{" "}
              <Link href="/subsidy-business-plan-writing-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金事業計画書の書き方完全ガイド</Link>
              、省エネ診断は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金活用の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金活用で失敗しないための留意点を整理します。発注タイミング・併用ルール・実績報告・多店舗テナント区分の整理が成否を左右します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {cautionItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用ルールは{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              、不採択対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">小売・商業の省エネ投資・採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ショーケース高効率化の最優先、省力化（人手不足対応）との一体投資、多店舗一括・集約購買、国×自治体×税制の重層活用、複数店舗での段階申請が採択戦略の柱です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              GX税制の詳細は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              、ホテル向け戦略は{" "}
              <Link href="/subsidy-hotel-leisure-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・宿泊業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">小売・商業向け補助金活用チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金申請前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、採択率や費用対効果が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中小企業の進め方は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで補助金活用後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金でショーケース・空調を更新した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助前後の投資回収・年間削減額を定量化し、申請する補助金の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>ショーケース高効率化後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>固定プラン切替＋省エネ＋屋上太陽光の複合効果を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、省エネ投資の優先順位づけにご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-29" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（総論）", description: "国の主力省エネ補助金の制度概要。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率（総論）", description: "公募タイミングと採択率動向。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "税額控除・特別償却の要件と対象設備。" },
              { href: "/subsidy-ppa-vppa-detail", title: "PPA/VPPA関連補助金の詳細", description: "店舗屋上太陽光と補助金の組合せ。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "多店舗のエネルギー管理システム補助。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-hotel-leisure-strategy", title: "ホテル・宿泊業の補助金活用戦略", description: "通年空調・給湯の補助金活用（関連業種）。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店舗の電気料金見直し（業種一般）", description: "店舗の照明・空調の最適化。" },
              { href: "/supermarket-electricity-cost-review", title: "スーパーの電気料金見直し（業種一般）", description: "ショーケース・冷蔵の最適化。" },
              { href: "/department-store-electricity-cost-review", title: "百貨店の電気料金見直し（業種一般）", description: "大型商業施設の空調・照明最適化。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="小売・商業の補助金活用と電気代削減を専門家に相談する"
            description="ショーケース更新・LED・空調・屋上太陽光をSII省エネ補助・ZEB補助・ものづくり補助で導入する小売・商業の投資は、設備選定・採択戦略・併用ルールが複雑です。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。"
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
            heading="小売・商業の補助金活用、専門家に相談しませんか？"
            description="ショーケース・空調の選定、補助金・税制の組合せ、採択される事業計画書の作成は専門知識を要します。エネルギー情報センターは中立的立場で小売・商業の補助金活用・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
