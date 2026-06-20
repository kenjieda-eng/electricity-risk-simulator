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
  "物流業の補助金活用戦略｜国交省物流補助・SII省エネで冷凍機・自動倉庫・LEDを導入する完全ガイド";
const pageDescription =
  "物流業に特化した補助金活用戦略ガイド。国土交通省物流効率化・脱炭素化補助、SII省エネ補助、需要家主導型PPA補助を組合せ、冷凍冷蔵倉庫の冷凍機・自動倉庫・LED・屋根太陽光を導入する実務を、規模別事例・採択戦略・併用ルール・申請フローまで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "物流業 補助金",
    "倉庫 省エネ補助金",
    "国交省 物流効率化 補助",
    "冷凍冷蔵倉庫 冷凍機 補助金",
    "自動倉庫 LED 補助金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-logistics-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-logistics-strategy",
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
    label: "物流業が使える補助金の全体像",
    detail:
      "物流業の省エネ・脱炭素投資には、①国土交通省の物流効率化・脱炭素化補助、②SII省エネ補助金（工場・事業場型）、③需要家主導型再エネ・PPA補助、④GX・CN投資促進税制、⑤都道府県・市町村の独自補助、が活用できます。冷凍冷蔵倉庫の冷凍機更新・自動倉庫・LED・屋根太陽光は補助金費用対効果が高く、3PL大手のRE100要請への対応投資としても採択評価されやすいのが特徴です（出典: 国交省物流政策課・SII公式・経産省から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『物流業（倉庫・冷凍冷蔵・配送）』に特化した補助金活用戦略です。各補助金制度の概要・採択率の総論は別途整理しています。本ページでは冷凍機・庫内ファン・自動倉庫・自動仕分け機といった物流業固有の対象設備、24時間冷却の省エネ投資、3PL大手CN要請に応える申請ストーリーに焦点を当てます。",
  },
  {
    label: "冷凍冷蔵倉庫の電力多消費と補助金の親和性",
    detail:
      "冷凍冷蔵倉庫は冷却用電力が全電力の60〜80%を占める電力多消費業種。冷凍機の高効率インバータ化・COP改善は省エネ絶対量が大きく、補助金の費用対効果（補助額あたりの省エネ量・CO2削減）が高く評価されやすいため、採択上有利です。常温倉庫でも自動倉庫・自動仕分け機の省エネ投資が対象になります。",
  },
  {
    label: "3PL大手・荷主のCN要請を申請に活かす",
    detail:
      "アマゾン・大手3PL・大手小売・大手食品メーカーのRE100・Scope3削減要請が強まり、倉庫事業者の省エネ・再エネ投資は『取引継続のための必須投資』と位置づけられます。この外部要請を事業計画に明記することで、投資の必要性が説得力を持ち採択評価に寄与します。",
  },
  {
    label: "物流2024年問題と効率化補助の連動",
    detail:
      "物流の2024年問題（ドライバー時間外規制）を背景に、国交省は物流効率化・省力化への支援を強化。自動倉庫・自動仕分け機・モーダルシフト等の効率化投資は、省エネ・脱炭素と一体で支援対象となるケースが増えており、効率化と省エネを両立する投資ストーリーが有効です（出典: 国交省物流政策課／2025年度時点）。",
  },
];

const mainSubsidies = [
  {
    name: "国土交通省 物流効率化・脱炭素化補助",
    role: "国交省／物流業の主力",
    detail:
      "物流事業者の効率化設備・脱炭素設備・モーダルシフトが対象。自動倉庫・自動仕分け機・冷凍機の高効率化等で活用可能。補助率は対象経費の1/2程度（事業区分による）。物流2024年問題対応の省力化・効率化と一体で支援されるケースが増えています（出典: 国交省物流政策課／2025年度時点）。",
  },
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    role: "経産省／冷凍機・空調更新の主力",
    detail:
      "冷凍冷蔵倉庫の冷凍機（高効率インバータ・自然冷媒）・庫内ファン・空調・LED等の省エネ設備更新が対象。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。冷凍冷蔵は省エネ絶対量が大きく費用対効果で採択上有利です（出典: SII公式／2025年度時点）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助",
    role: "経産省・環境省／再エネ調達",
    detail:
      "倉庫屋根の自家消費型太陽光・オフサイトPPA・蓄電池併設が対象。物流倉庫は屋根面積が大きく（1〜5万m²超）、屋根太陽光PPAの適性が高い。3PL大手のRE100対応投資と組合せやすく、補助率1/2以内・kWh定額補助型もあります（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    role: "経産省・国税庁／税額控除・特別償却",
    detail:
      "脱炭素関連設備の取得で投資額の10%税額控除または50%特別償却。冷凍機・自家発電・PPA関連設備で活用しやすく、補助金と併用可能なケースもあります（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    name: "都道府県・市町村の独自補助",
    role: "自治体／上乗せ・横出し",
    detail:
      "物流拠点が集積する自治体（神奈川・千葉・茨城・大阪等）は独自の省エネ・脱炭素設備補助を整備。国補助と設備を分けることで併用可能なケースもあり、重層活用で実質負担を圧縮できます（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    name: "中小企業向け補助（ものづくり等）",
    role: "中小企業庁／省力化・効率化",
    detail:
      "中小物流事業者は、ものづくり補助金の省力化枠等で自動倉庫・自動仕分け機・WMS連動システムの導入が対象になる場合があります。省力化（2024年問題対応）と省エネを一体訴求すると採択上有利です（出典: 中小企業庁／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率の水準（物流業の代表設備）",
    detail:
      "SII省エネ補助は中小1/2・大企業1/3、国交省物流補助は対象経費の1/2程度が基本。例えば冷凍機更新5,000万円の場合、SII補助1/2で2,500万円が補助され実質負担2,500万円。冷凍電力▲20〜30%で年間数百万〜千万円の削減なら、補助後の投資回収は3〜4年が目安です（出典: SII公式・国交省／2025年度時点・個別案件で変動）。",
  },
  {
    label: "上限額と申請枠の選択",
    detail:
      "SII省エネ補助は事業類型により上限が異なり、大型冷凍冷蔵倉庫の冷凍機更新は先進事業（上限15億円）、単体設備は指定設備導入事業（上限1億円）等。国交省物流補助は事業区分により上限が異なります。投資規模に応じた枠の選択が前提です。",
  },
  {
    label: "採択率の実情（公表値ベース）",
    detail:
      "採択率は補助金・公募回により変動し、各事務局が公募回ごとに採択結果を公表しています。冷凍冷蔵の冷凍機更新は省エネ効果が大きく費用対効果が高いため採択されやすい傾向。採択率は固定値ではないため、最新の事務局公表値を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "費用対効果（省エネ量あたり補助額）の重要性",
    detail:
      "SII省エネ補助は補助額あたりの省エネ量で採択評価。冷凍冷蔵倉庫は24時間冷却で省エネ絶対量が大きく、冷凍機COP改善の効果が大きいため費用対効果が高く評価されます。効果の大きい冷凍機・庫内ファンから優先するのが採択戦略です。",
  },
];

const caseStudies = [
  {
    title: "事例1: 大型冷凍冷蔵自動倉庫（特別高圧8,000kW）",
    before:
      "Before: 旧型冷凍機・半閉鎖型レシプロ機のまま。年間電気代約16億円。冷凍機更新と自動倉庫増設を検討していたが投資負担が課題。",
    after:
      "After: SII先進事業で冷凍機を高効率インバータ式に更新（COP改善）／国交省物流補助で自動倉庫AS/RS増設／需要家主導型PPA補助で屋根太陽光＋蓄電池導入。複数補助の重層活用で実質負担を圧縮。",
    result:
      "Result: 年間電気代 ▲約22%（▲3.5億円）／RE100比率約40%達成／補助後の投資回収 3〜4年（目安）／3PL大手CN要請に対応。",
  },
  {
    title: "事例2: 中規模冷凍冷蔵倉庫（高圧1,200kW）",
    before:
      "Before: 旧型冷凍機・蛍光灯照明。年間電気代約2.5億円。荷主からCN対応を求められていた。",
    after:
      "After: SII省エネ補助（1/2）で冷凍機高効率インバータ化＋庫内ファンEC化＋全館LED化（投資5,000万円のうち補助2,500万円）／自治体補助でナイトカバー導入／屋根太陽光自家消費。",
    result:
      "Result: 実質投資負担 約2,000万円／年間電気代 ▲約20%（▲5,000万円）／補助後の投資回収 約2.5年（目安）／品質クレーム削減も実現。",
  },
  {
    title: "事例3: 中規模常温物流倉庫＋自動仕分け（高圧1,000kW）",
    before:
      "Before: EC配送向け常温倉庫、自動仕分け機が高経年。年間電気代約2億円。2024年問題対応で省力化投資が急務。",
    after:
      "After: ものづくり補助金（省力化枠）で自動仕分け機・WMS連動システムを更新（省力化＋省エネを一体訴求し採択）／SII補助で空調更新・LED化／屋根太陽光導入。",
    result:
      "Result: 実質投資負担を約40%圧縮／年間電気代 ▲約20%（▲4,000万円）／省力化で2024年問題に対応／投資回収 補助後2.5年（目安）。",
  },
];

const cautionItems = [
  {
    label: "公募期間・交付決定前の発注は対象外",
    detail:
      "補助金は原則『交付決定後』に発注・契約した設備が対象。冷凍機・自動倉庫はリードタイムが長いため、公募スケジュールと設備調達のタイミング管理が特に重要です。",
  },
  {
    label: "同一設備への国補助の重複は不可",
    detail:
      "同一の設備・経費に複数の国庫補助を重複して受けることは原則不可。国交省物流補助とSII省エネ補助で対象設備を分ける等のルールで併用可能なケースがあるため、事前確認が必須です。",
  },
  {
    label: "省エネ効果の実績報告（冷凍機）",
    detail:
      "省エネ補助は交付後に省エネ効果の実績報告が必要。冷凍冷蔵倉庫は計測体制（BEMS・電力計測）を整えておくと報告がスムーズで、効果の継続管理にも役立ちます。",
  },
  {
    label: "効率化と省エネの一体訴求",
    detail:
      "国交省物流補助・ものづくり補助金は効率化・省力化が主目的のため、省エネ単体ではなく『効率化（2024年問題対応）＋省エネ＋CN対応』の複合効果を訴求すると採択率が高まります。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回で変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で戦略を立てることが重要です。",
  },
];

const targetEquipment = [
  {
    label: "高効率冷凍機（インバータ・自然冷媒）",
    detail:
      "半閉鎖型レシプロ機からインバータスクリュー・自然冷媒（アンモニア・CO2）冷凍機への更新でCOP改善・冷却電力▲20〜30%。冷凍冷蔵倉庫の最大の省エネ余地で、SII省エネ補助の王道設備。投資回収3〜4年が目安。",
  },
  {
    label: "庫内ファンEC化・デフロスト最適化",
    detail:
      "庫内ファンのEC（電子整流子）モーター化＋デフロスト（霜取り）最適化で電力▲10〜15%。冷凍機更新と組合せると効果大。SII省エネ補助の対象です。",
  },
  {
    label: "自動倉庫・自動仕分け機",
    detail:
      "自動倉庫AS/RS・自動仕分け機・搬送ロボットは国交省物流補助・ものづくり補助金（省力化）の対象。2024年問題対応の省力化＋省エネの一体訴求で採択上有利です。",
  },
  {
    label: "LED照明・ナイトカバー",
    detail:
      "天井が高く照明数の多い物流倉庫の全館LED化で照明電力▲50〜70%。冷蔵ショーケースのナイトカバーで冷蔵電力削減。投資回収が早く自治体補助との併用もしやすい設備です。",
  },
  {
    label: "屋根太陽光・蓄電池",
    detail:
      "屋根面積の大きい物流倉庫（1〜5万m²超）は屋根太陽光1〜10MW級＋蓄電池の自家消費が現実的。需要家主導型再エネ補助・GX税制の対象で、3PL大手RE100対応の手段としても有効です。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 電力使用・冷却負荷の把握",
    detail:
      "まず冷凍機・庫内ファン・自動倉庫・空調の電力使用状況を把握。省エネ診断を活用すると、冷凍機COP・省エネ余地が定量化でき、申請の根拠が整います。",
  },
  {
    label: "STEP2: 補助金の選定・枠の決定",
    detail:
      "投資内容（冷凍機更新／自動倉庫／屋根太陽光）に応じて国交省物流補助・SII省エネ補助・需要家主導型PPA補助を選定し、併用可否を確認します。",
  },
  {
    label: "STEP3: 事業計画書の作成",
    detail:
      "効率化（2024年問題対応）・省エネ・CN対応（3PL大手要請）の定量効果と必要性を記述。冷凍機更新の省エネ量・COP改善を数値で示すと説得力が高まります。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請。交付決定後に冷凍機・自動倉庫を発注（決定前発注は対象外）。リードタイムの長い設備は調達計画に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告",
    detail:
      "設備導入後、省エネ効果の実績報告を提出。冷凍冷蔵は計測体制（BEMS）があると報告がスムーズで、継続的な省エネ管理にも役立ちます。",
  },
];

const energySaving = [
  {
    label: "冷凍機COP改善を最優先（採択戦略）",
    detail:
      "冷凍冷蔵倉庫は冷却が全電力の60〜80%を占めるため、冷凍機のCOP改善が最大の省エネ余地。効果が大きく費用対効果が高いため、冷凍機更新を軸に申請すると採択率が高まります。",
  },
  {
    label: "効率化（2024年問題）との一体投資",
    detail:
      "自動倉庫・自動仕分け機の省力化投資は2024年問題対応と省エネを両立。国交省物流補助・ものづくり補助金（省力化枠）で評価されるため、効率化と省エネの一体訴求が有効です。",
  },
  {
    label: "国補助＋自治体補助＋税制の重層活用",
    detail:
      "国交省物流補助＋SII省エネ補助＋自治体補助＋GX税制を設備・経費で切り分けて重層活用すると、実質負担を最大限圧縮できます。併用可否の見極めが上級テクニックです。",
  },
  {
    label: "屋根太陽光（RE100対応）との組合せ",
    detail:
      "省エネ設備（電気を減らす）＋屋根太陽光（電気を脱炭素化）を組合せると、電気代削減とCN対応を同時実現。3PL大手・荷主のRE100要請に対応できます。",
  },
  {
    label: "複数倉庫・複数年での段階申請",
    detail:
      "複数倉庫を持つ事業者は、優先度の高い倉庫・設備から複数年計画で段階的に申請。年度予算・公募に合わせて計画的に補助を獲得し、キャッシュフロー負担を平準化できます。",
  },
];

const checklistItems = [
  "冷凍機・庫内ファン・自動倉庫・空調の電力使用状況を把握しているか",
  "冷凍機のCOP（成績係数）と高効率インバータ・自然冷媒への更新余地を確認したか",
  "投資内容に応じた補助金（国交省物流／SII／PPA）・枠を選定したか",
  "2024年問題対応の効率化と省エネを一体訴求しているか",
  "3PL大手・荷主のCN要請を事業計画に反映したか",
  "国補助・自治体補助・GX税制の重層活用の可否を確認したか",
  "屋根太陽光（屋根面積・kW・回収年数）の試算を実施したか",
  "交付決定後に発注するスケジュール管理（冷凍機のリードタイム）ができているか",
  "実績報告のための計測体制（BEMS等）を準備しているか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
  "補助後の投資回収年数を試算したか",
  "不採択時の再申請・別補助金への切替戦略を準備したか",
];

const faqItems = [
  {
    question: "物流業が最初に検討すべき補助金は何ですか？",
    answer:
      "冷凍冷蔵倉庫なら冷凍機更新でSII省エネ補助金（工場・事業場型）が王道です。中小1/2・大企業1/3で、冷却が全電力の60〜80%を占める冷凍冷蔵倉庫は省エネ絶対量が大きく費用対効果で採択上有利。自動倉庫・自動仕分け機の省力化投資なら国交省物流効率化・脱炭素化補助やものづくり補助金（省力化枠）を検討します。本ページは物流業特化の戦略で、各制度の総論は補助金カテゴリの概要記事も参照してください（出典: SII公式・国交省／2025年度時点）。",
  },
  {
    question: "冷凍機の更新でどのくらい補助が出ますか？",
    answer:
      "SII省エネ補助で中小1/2・大企業1/3が基本です。例えば冷凍機更新5,000万円なら中小は2,500万円が補助され、実質負担2,500万円。冷凍電力▲20〜30%で年間数百万〜千万円の削減なら補助後の投資回収は3〜4年が目安。半閉鎖型レシプロ機からインバータスクリュー・自然冷媒機への更新はCOP改善効果が大きく、採択上も有利です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    question: "国交省物流補助とSII省エネ補助は併用できますか？",
    answer:
      "対象設備・経費を分ければ併用可能なケースがあります。例えば自動倉庫を国交省物流補助、冷凍機をSII省エネ補助、と設備を分けることで重層活用できる場合があります。ただし同一設備への国庫補助の重複は原則不可で、併用可否は補助金ごとに異なるため、所管窓口に事前確認が必須です（出典: 国交省・SII公式／2025年度時点）。",
  },
  {
    question: "物流2024年問題対応の投資も補助金対象になりますか？",
    answer:
      "なります。物流2024年問題（ドライバー時間外規制）対応の省力化・効率化投資（自動倉庫・自動仕分け機・WMS連動）は、国交省物流効率化補助やものづくり補助金（省力化枠）の対象です。これらの設備は省エネ効果も伴うため、効率化＋省エネ＋CN対応を一体で訴求すると採択率が高まります（出典: 国交省物流政策課／2025年度時点）。",
  },
  {
    question: "3PL大手の RE100 要請は補助金申請に有利ですか？",
    answer:
      "有利に働きます。アマゾン・大手3PL・大手小売・大手食品メーカーのRE100・Scope3削減要請を事業計画に明記すると、投資の必要性・緊急性が説得力を持ち採択評価に寄与します。倉庫の屋根太陽光・冷凍機更新は『取引継続のための必須投資』という位置づけで、補助金の政策目的（物流の脱炭素化）にも合致します。",
  },
  {
    question: "倉庫の屋根太陽光は補助金で導入できますか？",
    answer:
      "できます。需要家主導型再エネ補助・GX投資促進税制の対象です。物流倉庫は屋根面積が1〜5万m²超と大きく、屋根太陽光1〜10MW級の自家消費が現実的。RE100対応の3PL案件ではPPA事業者経由で初期投資ゼロ・20年契約の長期PPAも主流です。蓄電池併用でピークカット・BCP対応の効果も加わります（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    question: "交付決定前に冷凍機を発注するとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助金は『交付決定後』に発注・契約した設備が対象。冷凍機・自動倉庫はリードタイムが長いため、公募スケジュールと調達タイミングの管理が特に重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。",
  },
  {
    question: "中小物流事業者でも使える補助金はありますか？",
    answer:
      "あります。SII省エネ補助は中小1/2と手厚く、ものづくり補助金（省力化枠）は中小・小規模事業者が主対象です。自治体の独自補助も中小向けが多く、国補助との重層活用も可能。中小物流事業者は、冷凍機・LED・自動仕分けの優先度を決め、複数年計画で段階的に補助を獲得するのが現実的な進め方です（出典: 中小企業庁・SII公式・各自治体／2025年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "国土交通省 物流政策（物流効率化・脱炭素化）", url: "https://www.mlit.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "中小企業庁 ものづくり補助金（省力化枠）", url: "https://www.chusho.meti.go.jp/" },
  { name: "経済産業省・環境省 需要家主導型再エネ補助", url: "https://www.meti.go.jp/" },
];

export default function SubsidyLogisticsStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-logistics-strategy"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "物流業の補助金活用戦略", url: "https://simulator.eic-jp.org/subsidy-logistics-strategy" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">物流業の補助金活用戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            物流業の補助金活用戦略 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            冷凍冷蔵倉庫は冷却が全電力の60〜80%を占める電力多消費業種で、冷凍機更新の補助金費用対効果が高い業種です。本ページでは国交省物流効率化・脱炭素化補助、SII省エネ補助、需要家主導型PPA補助を組合せ、冷凍機・自動倉庫・LED・屋根太陽光を導入する実務を、規模別事例・採択戦略・併用ルール・申請フローまで整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>物流業が使える補助金・税制の全体像と使い分け</li>
              <li>冷凍機・庫内ファン・自動倉庫等の固有設備と補助金</li>
              <li>規模別の補助前後Before/After投資回収事例3件</li>
              <li>2024年問題対応の効率化と省エネを一体訴求する採択戦略</li>
              <li>物流業向け補助金活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは物流業に特化した補助金活用戦略ガイドです。各補助金制度の概要・採択率の総論は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">物流業が使える補助金の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              物流業の省エネ・脱炭素投資には、国交省物流補助・SII省エネ補助・需要家主導型PPA補助・GX税制・自治体補助が活用できます。2024年問題対応の効率化と一体で訴求し、3PL大手CN要請を反映することで採択率と費用対効果を最大化できます。
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
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">倉庫業の電気料金見直し</Link>
              、{" "}
              <Link href="/transportation-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">運輸業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要補助金・税制の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              物流業が活用できる主要な補助金・税制を、役割・補助率・対象設備別に整理します。投資内容に応じて最適な制度を選定し、併用・重ね取りを検討します。
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
              ※ 補助率・上限・採択率は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・採択結果を必ず確認してください。出典: SII公式・国交省・中小企業庁から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別事例3件 — 補助前後の投資回収（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              物流業の代表的な3規模で、補助金活用による実質負担圧縮と投資回収の改善をBefore/After方式で提示します。いずれも公開事例・補助金実績から再構成した代表シナリオで、数値は目安レンジです。
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
            <h2 className="text-xl font-semibold text-slate-900">物流業固有の対象設備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金で導入しやすい物流業固有の設備を整理します。効果の大きい冷凍機・庫内ファンから優先するのが採択戦略です。
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
              屋根太陽光は{" "}
              <Link href="/subsidy-ppa-vppa-detail" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA/VPPA関連補助金の詳細</Link>
              、BEMSは{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力使用把握から実績報告まで、補助金申請の標準的な流れを整理します。冷凍機・自動倉庫のリードタイムと交付決定前発注の禁止に特に注意が必要です。
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
              補助金活用で失敗しないための留意点を整理します。発注タイミング・併用ルール・実績報告・効率化との一体訴求が成否を左右します。
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
            <h2 className="text-xl font-semibold text-slate-900">物流業の省エネ投資・採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              冷凍機COP改善の最優先、効率化（2024年問題）との一体投資、国×自治体×税制の重層活用、屋根太陽光との組合せ、複数倉庫での段階申請が採択戦略の柱です。
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
              、小売向け戦略は{" "}
              <Link href="/subsidy-retail-commerce-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小売・商業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">物流業向け補助金活用チェックリスト（12項目）</h2>
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
              補助金で冷凍機・自動倉庫を更新した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助前後の投資回収・年間削減額を定量化し、申請する補助金の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>冷凍機COP改善後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>固定プラン切替＋省エネ＋屋根太陽光の複合効果を見立てる</li>
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
              { href: "/subsidy-ppa-vppa-detail", title: "PPA/VPPA関連補助金の詳細", description: "倉庫屋根太陽光と補助金の組合せ。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "倉庫のエネルギー管理システム補助。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-datacenter-it-strategy", title: "データセンター・IT業の補助金活用戦略", description: "24h稼働施設の補助金活用（関連業種）。" },
              { href: "/warehouse-electricity-cost-review", title: "倉庫業の電気料金見直し（業種一般）", description: "冷凍冷蔵・常温・自動倉庫の最適化。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し（業種一般）", description: "陸運・物流センターの最適化。" },
              { href: "/subsidy-demand-side-ppa", title: "需要家主導型PPA補助（総論）", description: "再エネ調達補助の制度概要。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="物流業の補助金活用と電気代削減を専門家に相談する"
            description="冷凍機更新・自動倉庫・屋根太陽光を国交省物流補助・SII省エネ補助・PPA補助で導入する物流業の投資は、設備選定・採択戦略・併用ルールが複雑です。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。"
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
            heading="物流業の補助金活用、専門家に相談しませんか？"
            description="冷凍機・自動倉庫の選定、補助金・税制の組合せ、採択される事業計画書の作成は専門知識を要します。エネルギー情報センターは中立的立場で物流業の補助金活用・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
