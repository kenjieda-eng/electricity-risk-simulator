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
  "製造業の補助金活用戦略｜SII省エネ・ものづくり・GX投資促進税制で高効率設備を導入する完全ガイド";
const pageDescription =
  "製造業に特化した補助金活用戦略ガイド。SII省エネ補助・ものづくり補助金・事業再構築補助金・GX投資促進税制を組合せ、サーボプレス・高効率コンプレッサー・熱処理炉・空調・LEDを導入する実務を、規模別事例・採択戦略・併用ルール・申請フローまで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "製造業 補助金",
    "工場 省エネ補助金",
    "SII ものづくり補助金 製造",
    "GX投資促進税制 工場",
    "サーボプレス コンプレッサー 補助金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-manufacturing-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-manufacturing-strategy",
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
    label: "製造業が使える補助金の全体像",
    detail:
      "製造業の省エネ・脱炭素投資には、①国のSII省エネ補助金（工場・事業場型）、②ものづくり補助金（生産性向上＋省エネ）、③事業再構築補助金（事業転換＋GX）、④GX・CN投資促進税制（税額控除・特別償却）、⑤需要家主導型再エネ・PPA補助、⑥都道府県・市町村の独自補助、の6層が活用できます。補助金（返済不要）と税制優遇（税負担軽減）を組合せることで、設備投資の実質負担を大きく圧縮できます（出典: SII公式・経産省・中小企業庁・各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『製造業』に特化した補助金活用戦略です。各補助金制度の概要・スケジュール・採択率の総論は別途整理しています。本ページではサーボプレス・コンプレッサー・熱処理炉といった製造業固有の対象設備、ライン更新時の補助金組合せ、生産性向上と省エネを両立する申請ストーリーに焦点を当てます。",
  },
  {
    label: "製造業の電力多消費構造と補助金の親和性",
    detail:
      "製造業はプレス・切削・熱処理・成形・コンプレッサー・空調が電力を多消費し、省エネ余地が大きい業種。高効率設備への更新は電気代削減効果が大きく、補助金の費用対効果（補助額あたりのCO2削減・電気代削減）が高く評価されやすいため、採択上有利な業種です。",
  },
  {
    label: "生産性向上との一体訴求が採択の鍵",
    detail:
      "ものづくり補助金・事業再構築補助金は『生産性向上』が主目的のため、省エネ単体ではなく『生産性向上＋省エネ＋GX対応』の複合効果を訴求すると採択率が高まります。サーボプレス化による不良率低減＋電力削減、電動射出成形機による段取り短縮＋省エネ、のように一石二鳥の投資ストーリーが有効です。",
  },
  {
    label: "親会社・取引先のCN要請を申請に活かす",
    detail:
      "完成車・大手メーカーからのScope3 GHG削減要請が強まるなか、サプライヤーの省エネ・再エネ投資は『取引継続のための必須投資』として位置づけられます。この外部要請を補助金申請の事業計画に明記することで、投資の必要性・緊急性が説得力を持ち、採択評価に寄与します。",
  },
];

const mainSubsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    role: "経産省／省エネ設備更新の主力",
    detail:
      "高効率空調・コンプレッサー・サーボプレス・熱処理炉・ヒートポンプ・LED等の省エネ設備更新が対象。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。省エネ率・費用対効果（補助額あたりの省エネ量）で採択評価。製造業の更新案件で最も実績が多い王道補助です（出典: SII公式／2025年度時点）。",
  },
  {
    name: "ものづくり・商業・サービス生産性向上促進補助金",
    role: "中小企業庁／生産性向上＋省エネ",
    detail:
      "革新的な設備・システム導入による生産性向上が主目的。省エネ・GX対応設備（サーボプレス・電動成形機・高効率設備）も対象で、補助率1/2〜2/3、上限は事業類型による。省エネ・GX枠は採択加点があり、生産性向上と省エネの両立を訴求すると有利（出典: 中小企業庁・全国中央会／2025年度時点）。",
  },
  {
    name: "事業再構築補助金",
    role: "中小企業庁／事業転換＋GX",
    detail:
      "新分野展開・事業転換等の大型投資が対象で、GX（グリーン成長）枠が設定。脱炭素関連の生産プロセス革新・新ライン構築で活用可能。補助率1/2〜2/3、上限は枠により数千万〜億円規模。EV関連部品・脱炭素素材等への事業転換と組合せると効果大（出典: 中小企業庁／2025年度時点）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    role: "経産省・国税庁／税額控除・特別償却",
    detail:
      "脱炭素関連設備の取得で投資額の10%税額控除または50%特別償却。補助金（返済不要の現金給付）と異なり税負担を軽減する仕組みで、補助金と併用可能なケースもあります。大型設備投資・自家発電・PPA関連設備で活用しやすい（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助",
    role: "経産省・環境省／再エネ調達",
    detail:
      "自家消費型太陽光・オフサイトPPA・蓄電池併設が対象。工場屋根の太陽光自家消費、サプライチェーンCN対応のPPA調達で活用。補助率1/2以内・kWh定額補助型もあり。製造業のRE100対応投資と組合せやすい（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "都道府県・市町村の独自補助",
    role: "自治体／上乗せ・横出し",
    detail:
      "製造業集積地の自治体（愛知・大阪・静岡等）は独自の省エネ・脱炭素設備補助を整備。国の補助と設備を分けることで併用可能なケースもあり、重層活用で実質負担をさらに圧縮できます。最新公募は各自治体産業労働部・商工会議所で確認（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率の水準（製造業の代表設備）",
    detail:
      "SII省エネ補助は中小1/2・大企業1/3が基本。ものづくり補助金は1/2〜2/3、GX税制は投資額の10%税額控除/50%特別償却。例えば高効率コンプレッサー更新1,000万円の場合、SII補助1/2で500万円が補助され、実質負担500万円。さらに電気代削減で年間100〜200万円の効果なら、補助後の投資回収は2.5〜5年が目安です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    label: "上限額と申請枠の選択",
    detail:
      "SII省エネ補助は事業類型により上限が異なり、先進事業は上限15億円、指定設備導入事業は上限1億円等。大型ライン更新は先進事業、単体設備更新は指定設備事業、と投資規模で枠を選びます。ものづくり補助金は枠（省力化・製品サービス・グローバル等）により上限が異なるため、投資内容に最適な枠の選択が採択の前提です。",
  },
  {
    label: "採択率の実情（公表値ベース）",
    detail:
      "ものづくり補助金の採択率は応募回・枠により概ね30〜60%の幅で推移（公募回ごとに事務局が採択結果を公表）。SII省エネ補助は予算と申請状況により変動。採択率は固定値ではなく公募回ごとに変わるため、最新の採択結果（事務局公表値）を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "費用対効果（省エネ量あたり補助額）の重要性",
    detail:
      "SII省エネ補助は『補助金1円あたりの省エネ量（kl/年・原油換算）』が採択評価の重要指標。製造業は電力多消費で省エネ絶対量が大きいため、費用対効果が高く評価されやすい。逆に、省エネ効果の小さい設備は採択されにくいため、効果の大きい設備（コンプレッサー・空調・熱処理炉）から優先するのが採択戦略です。",
  },
];

const caseStudies = [
  {
    title: "事例1: 中堅金属プレス工場（高圧1,200kW・従業員80名）",
    before:
      "Before: 油圧プレス・旧型コンプレッサー・蛍光灯照明のまま。年間電気代約9,500万円。設備更新したいが投資負担がネックで先送りしていた。",
    after:
      "After: SII省エネ補助（1/2）でサーボプレス化・高効率インバータコンプレッサー・全館LED化を実施。投資総額3,000万円のうち補助1,500万円獲得。ものづくり補助金は生産性向上枠で別ラインのNC更新に活用。",
    result:
      "Result: 実質投資負担 約1,500万円／年間電気代 ▲約1,800万円（▲19%）／補助後の投資回収 約1年（目安）／不良率低減で生産性も向上。",
  },
  {
    title: "事例2: 樹脂成形＋電子部品工場（高圧600kW・従業員45名）",
    before:
      "Before: 油圧射出成形機・旧型空調。年間電気代約5,500万円。親会社からCN対応（Scope3削減）を要請されていた。",
    after:
      "After: ものづくり補助金（省エネ・GX枠）で電動射出成形機に更新（生産性向上＋省エネを一体訴求し採択）／SII補助で空調更新／自治体補助でLED化／需要家主導型補助で屋根太陽光導入。",
    result:
      "Result: 実質投資負担を約45%圧縮／年間電気代 ▲約1,000万円（▲18%）／親会社CN要請に対応しサプライヤー評価向上／投資回収 補助後2.5年（目安）。",
  },
  {
    title: "事例3: 大型完成車・部品工場（特別高圧・大企業）",
    before:
      "Before: 塗装ライン乾燥炉・大型設備が高経年。年間電気代規模が大きく、CN工場目標の達成手段を模索。",
    after:
      "After: SII先進事業（大企業1/3）で塗装ライン低温硬化＋廃熱回収設備を導入／GX投資促進税制（特別償却）を併用して税負担を軽減／需要家主導型PPA補助で屋根太陽光＋オフサイトPPAを調達。",
    result:
      "Result: 大型投資の実質負担を補助＋税効果で圧縮／年間電気代 ▲約18%／CN工場ロードマップに沿った投資を前倒し実現。",
  },
];

const cautionItems = [
  {
    label: "公募期間・交付決定前の発注は対象外",
    detail:
      "補助金は原則『交付決定後』に発注・契約した設備が対象。交付決定前に発注すると補助対象外になるため、公募スケジュールと設備調達のタイミング管理が必須です。リードタイムの長い設備は特に注意が必要です。",
  },
  {
    label: "同一設備への国補助の重複は不可",
    detail:
      "同一の設備・経費に対して複数の国庫補助を重複して受けることは原則不可。ただし対象設備を分ける、国と自治体で財源が異なる場合に併用可、等のルールがあります。併用可否は補助金ごとに異なるため事前確認が必須です。",
  },
  {
    label: "実績報告・効果測定の負担",
    detail:
      "省エネ補助は交付後に省エネ効果の実績報告（使用量データ提出）が求められます。BEMS・計測体制を整えておくと報告がスムーズ。報告不備は補助金返還リスクにつながるため、申請段階から測定計画を立てることが重要です。",
  },
  {
    label: "事業計画書の質が採択を左右",
    detail:
      "特にものづくり補助金・事業再構築補助金は事業計画書の完成度が採択を大きく左右します。生産性向上・省エネ・GX対応の定量効果、投資の必要性、実現可能性を説得力ある構成で記述する必要があります。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回により変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で戦略を立てることが重要です。",
  },
];

const targetEquipment = [
  {
    label: "高効率コンプレッサー（インバータ式）",
    detail:
      "工場のエア漏れ・過剰圧力の見直し＋高効率インバータコンプレッサーへの更新で電力▲15〜25%。投資効率が高く採択されやすい王道設備。SII省エネ補助1/2で投資回収1.5〜2.5年が目安。",
  },
  {
    label: "サーボプレス・電動射出成形機",
    detail:
      "油圧式からサーボ・電動式への更新で電力▲15〜30%＋瞬間ピーク平準化（契約電力削減）。ものづくり補助金（生産性向上＋省エネ）・SII補助の対象。生産性向上効果と一体訴求で採択率が高まります。",
  },
  {
    label: "高効率空調・熱処理炉",
    detail:
      "高効率空調・熱処理炉への更新＋廃熱回収で電力・熱を削減。SII省エネ補助の対象で、製造業の大きな省エネ余地。廃熱回収との組合せで費用対効果が高まり採択上有利です。",
  },
  {
    label: "LED照明・BEMS",
    detail:
      "全館LED化で照明電力▲50〜70%、BEMS導入で需要見える化＋ピーク制御。投資回収が早く（1.5〜2.5年）、自治体補助との併用もしやすい。BEMSは省エネ効果の実績報告にも活用できます。",
  },
  {
    label: "自家消費太陽光・蓄電池",
    detail:
      "工場屋根の太陽光自家消費＋蓄電池で電気代削減＋RE100対応＋ピークカット。需要家主導型再エネ補助・GX税制の対象。親会社CN要請への対応手段としても有効です。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 省エネ診断・現状把握",
    detail:
      "まず工場の電力使用状況を把握し、省エネ余地の大きい設備を特定。省エネ診断（無料診断含む）を活用すると、補助金申請に必要な現状データ・改善計画の根拠が整います。",
  },
  {
    label: "STEP2: 補助金の選定・枠の決定",
    detail:
      "投資内容・規模・目的に応じて最適な補助金（SII/ものづくり/事業再構築/GX税制）と申請枠を選定。複数補助金の併用・重ね取りの可否も事前確認します。",
  },
  {
    label: "STEP3: 事業計画書の作成",
    detail:
      "生産性向上・省エネ・GX対応の定量効果、投資の必要性（親会社CN要請等）、実現可能性を記述。採択される計画書には明確な数値根拠とストーリーが必要です。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請。採択後、交付決定を待ってから設備を発注（決定前発注は対象外）。交付決定前の発注に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告",
    detail:
      "設備導入後、省エネ効果の実績報告（使用量データ）を提出。BEMS・計測体制があると報告がスムーズで、効果の継続管理にも役立ちます。",
  },
];

const energySaving = [
  {
    label: "効果の大きい設備から優先（採択戦略）",
    detail:
      "補助金は費用対効果（省エネ量あたり補助額）が評価されるため、効果の大きいコンプレッサー・空調・熱処理炉から優先するのが採択戦略。小さい効果の設備を単体申請するより、大きい効果の設備を軸に申請する方が採択率が高まります。",
  },
  {
    label: "生産性向上との一体投資",
    detail:
      "サーボプレス化（不良率低減＋省エネ）、電動成形機（段取り短縮＋省エネ）のように、生産性向上と省エネを両立する投資はものづくり補助金で高く評価されます。一石二鳥の投資ストーリーを設計しましょう。",
  },
  {
    label: "国補助＋自治体補助＋税制の重層活用",
    detail:
      "国のSII補助＋自治体の上乗せ補助＋GX税制を組合せることで、実質負担を最大限圧縮できます。設備・経費・財源の切り分けで併用可能なケースを見極めるのが上級テクニックです。",
  },
  {
    label: "再エネ調達（PPA）との組合せ",
    detail:
      "省エネ設備（電気を減らす）＋再エネ調達（電気を脱炭素化）を組合せると、電気代削減とCN対応を同時実現。需要家主導型PPA補助・GX税制を活用し、親会社CN要請にも対応できます。",
  },
  {
    label: "複数年計画での段階申請",
    detail:
      "一度に全設備を更新せず、優先度の高い設備から複数年計画で段階的に申請する戦略も有効。年度ごとの予算・公募に合わせて計画的に補助を獲得し、キャッシュフロー負担を平準化できます。",
  },
];

const checklistItems = [
  "工場の電力使用状況を設備別に把握しているか（省エネ診断の活用）",
  "効果の大きい設備（コンプレッサー・空調・熱処理炉）を優先候補にしているか",
  "投資規模・目的に応じた補助金・申請枠を選定したか",
  "ものづくり補助金は生産性向上＋省エネの一体訴求になっているか",
  "GX投資促進税制（税額控除・特別償却）の併用可否を確認したか",
  "国補助・自治体補助・税制の重層活用の可否を整理したか",
  "親会社・取引先のCN要請を事業計画に反映したか",
  "交付決定後に発注するスケジュール管理ができているか",
  "実績報告のための計測体制（BEMS等）を準備しているか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
  "補助後の投資回収年数を試算したか",
  "不採択時の再申請・別補助金への切替戦略を準備したか",
];

const faqItems = [
  {
    question: "製造業が最初に検討すべき補助金は何ですか？",
    answer:
      "省エネ設備更新ならSII省エネ補助金（工場・事業場型）が王道です。中小1/2・大企業1/3の補助率で、高効率コンプレッサー・空調・サーボプレス・熱処理炉・LED等が対象。費用対効果（省エネ量あたり補助額）で採択評価されるため、電力多消費の製造業は有利です。生産性向上を伴う設備投資ならものづくり補助金、大型の事業転換なら事業再構築補助金を検討します。本ページは製造業特化の戦略で、各制度の総論は補助金カテゴリの概要記事も参照してください（出典: SII公式／2025年度時点）。",
  },
  {
    question: "ものづくり補助金で省エネ設備は対象になりますか？",
    answer:
      "なります。ものづくり補助金は生産性向上が主目的ですが、省エネ・GX対応設備（サーボプレス・電動成形機・高効率設備）も対象で、省エネ・GX枠は採択加点があります。ただし『省エネ単体』では採択されにくいため、生産性向上（不良率低減・段取り短縮・能力増強）と省エネ・CO2削減を一体で訴求する事業計画が重要です（出典: 中小企業庁・全国中央会／2025年度時点）。",
  },
  {
    question: "補助金とGX投資促進税制は併用できますか？",
    answer:
      "ケースにより併用可能です。補助金（返済不要の現金給付）とGX税制（税負担の軽減）は仕組みが異なり、同一設備でも併用できる場合があります。ただし補助金で取得価額が圧縮される分、税制の控除対象額も調整される等のルールがあるため、税理士・所管窓口に事前確認が必須です。大型投資では補助＋税制の組合せで実質負担を大きく圧縮できます（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    question: "親会社のCN要請は補助金申請に有利になりますか？",
    answer:
      "有利に働きます。完成車・大手メーカーからのScope3 GHG削減要請を事業計画に明記すると、投資の必要性・緊急性が説得力を持ち、採択評価に寄与します。『取引継続のための必須投資』という位置づけは、補助金の政策目的（産業の脱炭素化）にも合致するため、申請ストーリーとして有効です。",
  },
  {
    question: "補助金の採択率はどのくらいですか？",
    answer:
      "採択率は補助金・公募回・申請枠により変動します。例えばものづくり補助金は応募回・枠により概ね30〜60%の幅で推移しており、各公募回の採択結果は事務局が公表しています。採択率は固定値ではないため、推測値で判断せず、最新の事務局公表値を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    question: "交付決定前に設備を発注してしまうとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助金は『交付決定後』に発注・契約した設備が対象で、交付決定前の発注は補助を受けられません。リードタイムの長い設備（大型プレス・特注設備）は特に、公募スケジュールと調達タイミングの管理が重要です。発注を急ぐ場合は、所管窓口に対象範囲を必ず確認してください。",
  },
  {
    question: "中小企業と大企業で補助率は違いますか？",
    answer:
      "違います。SII省エネ補助は中小1/2・大企業1/3が基本で、中小企業の方が手厚い補助率です。ものづくり補助金・事業再構築補助金は中小企業・小規模事業者が主対象。大企業はGX投資促進税制（税額控除・特別償却）や先進事業の活用が中心となります。自社の規模区分（中小企業基本法の定義）を確認のうえ、最適な制度を選びましょう。",
  },
  {
    question: "省エネ診断は補助金申請に役立ちますか？",
    answer:
      "大いに役立ちます。省エネ診断（無料診断含む）で工場の電力使用状況・省エネ余地を把握すると、補助金申請に必要な現状データ・改善計画の根拠が整います。診断結果は事業計画書の説得力を高め、効果の大きい設備の特定にも役立ちます。申請前のステップとして省エネ診断を活用するのが定石です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "中小企業庁 ものづくり補助金・事業再構築補助金", url: "https://www.chusho.meti.go.jp/" },
  { name: "経済産業省 資源エネルギー庁（省エネ・GX政策）", url: "https://www.enecho.meti.go.jp/" },
  { name: "経済産業省・国税庁 GX投資促進税制", url: "https://www.meti.go.jp/" },
];

export default function SubsidyManufacturingStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-manufacturing-strategy"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "製造業の補助金活用戦略", url: "https://simulator.eic-jp.org/subsidy-manufacturing-strategy" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">製造業の補助金活用戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            製造業の補助金活用戦略 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            製造業はプレス・切削・熱処理・成形・コンプレッサー・空調と電力多消費で、省エネ投資の補助金費用対効果が高い業種です。本ページではSII省エネ補助・ものづくり補助金・事業再構築補助金・GX投資促進税制を組合せ、製造業固有の設備を導入する実務を、規模別事例・採択戦略・併用ルール・申請フローまで整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>製造業が使える6層の補助金・税制の全体像と使い分け</li>
              <li>サーボプレス・コンプレッサー・熱処理炉等の固有設備と補助金</li>
              <li>規模別の補助前後Before/After投資回収事例3件</li>
              <li>生産性向上と省エネを一体訴求する採択戦略</li>
              <li>製造業向け補助金活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは製造業に特化した補助金活用戦略ガイドです。各補助金制度の概要・採択率の総論は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">製造業が使える補助金の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造業の省エネ・脱炭素投資には、国の補助金・税制・自治体補助の6層が活用できます。補助金（返済不要）と税制優遇（税負担軽減）を組合せ、生産性向上と一体で訴求することで採択率と費用対効果を最大化できます。
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
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">組立工場の電気料金見直し</Link>
              、{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要補助金・税制の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造業が活用できる主要な補助金・税制を、役割・補助率・対象設備別に整理します。投資内容に応じて最適な制度を選定し、併用・重ね取りを検討します。
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
            <div className="mt-4 space-y-3">
              {subsidyRates.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限・採択率は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・採択結果を必ず確認してください。出典: SII公式・中小企業庁・経産省から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別事例3件 — 補助前後の投資回収（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造業の代表的な3規模で、補助金活用による実質負担圧縮と投資回収の改善をBefore/After方式で提示します。いずれも公開事例・補助金実績から再構成した代表シナリオで、数値は目安レンジです。
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
            <h2 className="text-xl font-semibold text-slate-900">製造業固有の対象設備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金で導入しやすい製造業固有の設備を整理します。効果の大きいコンプレッサー・サーボプレス・空調・熱処理炉から優先するのが採択戦略です。
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
              ヒートポンプの詳細は{" "}
              <Link href="/subsidy-heat-pump-introduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ヒートポンプ導入補助の活用ガイド</Link>
              、BEMSは{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断から実績報告まで、補助金申請の標準的な流れを整理します。交付決定前の発注は対象外となる点に特に注意が必要です。
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
              補助金活用で失敗しないための留意点を整理します。発注タイミング・併用ルール・実績報告・計画書の質が成否を左右します。
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
            <h2 className="text-xl font-semibold text-slate-900">製造業の省エネ投資・採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              効果の大きい設備からの優先、生産性向上との一体投資、国×自治体×税制の重層活用、再エネ調達との組合せ、複数年計画での段階申請が採択戦略の柱です。
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
              、再エネ調達は{" "}
              <Link href="/subsidy-ppa-vppa-detail" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA/VPPA関連補助金の詳細</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">製造業向け補助金活用チェックリスト（12項目）</h2>
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
              補助金で省エネ設備を導入した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助前後の投資回収・年間削減額を定量化し、申請する補助金の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>高効率設備導入後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>固定プラン切替＋省エネ＋再エネ調達の複合効果を見立てる</li>
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
              { href: "/subsidy-ppa-vppa-detail", title: "PPA/VPPA関連補助金の詳細", description: "再エネ調達と補助金の組合せ。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "産業用ヒートポンプの補助金活用。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "工場のエネルギー管理システム補助。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-sme-energy-saving-patterns", title: "中小企業の省エネ補助活用パターン", description: "中小製造業の現実的な進め方。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し（業種一般）", description: "製造業の電力プロファイルと最適化。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し（業種一般）", description: "プレス・切削・熱処理の最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
            ]}
          />

          <ContentCta
            heading="製造業の補助金活用と電気代削減を専門家に相談する"
            description="SII省エネ補助・ものづくり補助金・GX税制を組合せた製造業の省エネ投資は、設備選定・採択戦略・併用ルールが複雑です。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。"
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
            heading="製造業の補助金活用、専門家に相談しませんか？"
            description="高効率設備の選定、補助金・税制の組合せ、採択される事業計画書の作成は専門知識を要します。エネルギー情報センターは中立的立場で製造業の補助金活用・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
