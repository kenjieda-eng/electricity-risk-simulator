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
  "農業・一次産業の補助金活用戦略 完全ガイド｜対象・補助率・申請の進め方";
const pageDescription =
  "農業・一次産業（施設園芸・畜産・選果貯蔵・水産の陸上設備）に特化した補助金活用戦略。施設園芸の省エネ（ヒートポンプ暖房・木質バイオマス）、A重油からの燃料転換、選果場/冷蔵の自然冷媒、みどりの食料システム戦略関連を、規模別代表シナリオ・採択戦略・併用ルールで整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "農業 補助金 省エネ",
    "施設園芸 ヒートポンプ 補助",
    "みどりの食料システム戦略",
    "畜産 省エネ 補助",
    "産地生産基盤パワーアップ",
    "一次産業 脱炭素 補助",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-agriculture-primary-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-agriculture-primary-strategy",
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
    label: "一次産業が使える補助の全体像（6つの入口）",
    detail:
      "農業・一次産業の省エネ・脱炭素・設備更新には、①農林水産省「みどりの食料システム戦略」関連の設備導入支援、②「産地生産基盤パワーアップ事業」「強い農業・担い手づくり総合支援交付金」等の産地・経営体向け支援、③経済産業省/SIIの省エネ補助（高効率設備の更新）、④環境省の自然冷媒設備（選果場・冷蔵庫の脱フロン）導入支援、⑤需要家主導型再エネ・自家消費太陽光等の再エネ調達支援、⑥都道府県・市町村の独自補助、という6つの入口があります。補助率・交付上限は事業・年度・地域により変動するため、最新の公募要領・実施要綱による確認が前提です（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『農業・一次産業』に特化した補助金活用戦略です。各補助金制度の概要・スケジュール・採択率の総論や、製造業・物流業など他業種の戦略は別ページで整理しています。本ページでは施設園芸のヒートポンプ暖房・木質バイオマス、A重油からの燃料転換、選果・貯蔵施設の冷蔵省エネ、畜産の換気・空調といった一次産業固有の対象設備、産地ぐるみの導入、食料供給・環境負荷低減を両立する申請ストーリーに焦点を当てます。",
  },
  {
    label: "一次産業のエネルギー構造と補助の親和性",
    detail:
      "施設園芸は冬期の加温（重油暖房・ヒートポンプ）、選果・貯蔵施設は冷蔵・予冷の電力、畜産は換気・空調・給温が主なエネルギー需要です。いずれも燃料・電力の消費が大きく、高効率設備への更新や燃料転換による削減余地が大きい分野。みどりの食料システム戦略が掲げる環境負荷低減（化石燃料からの転換・CO2削減）と方向性が一致するため、政策目的に沿った投資として位置づけやすいのが特徴です。補助率・交付額の具体値は事業・年度・地域により変動します。",
  },
  {
    label: "食料供給・産地維持との一体訴求が鍵",
    detail:
      "農林水産省系の事業は『食料の安定供給』『産地の生産基盤強化』『環境負荷低減』が主目的のため、省エネ・燃料転換を単体で訴えるのではなく、生産性向上・品質向上・産地競争力・環境対応を一体で訴求すると評価されやすい傾向があります。例えばヒートポンプ暖房化による燃料費削減＋暖房精度向上＋CO2削減、のように複数の効果を束ねた事業計画が有効です。なお採否は審査によるため、断定的な推奨はできません。",
  },
  {
    label: "燃料費高騰リスクへの構造的対応",
    detail:
      "A重油・LPガス等の化石燃料価格は国際情勢で変動し、施設園芸・乾燥・温調コストを押し上げます。ヒートポンプや木質バイオマスへの燃料転換は、燃料価格変動リスクそのものを縮小する構造的対応です。電力についても再エネ賦課金（2026年度4.18円/kWh（確定））を含む単価構成を踏まえ、省エネ・自家消費と契約の見直しを組合せることで、年度をまたぐコスト変動を平準化できます。",
  },
];

const mainSubsidies = [
  {
    name: "みどりの食料システム戦略 関連の設備導入支援",
    role: "農林水産省／環境負荷低減・脱炭素",
    detail:
      "化石燃料からの転換（園芸用ヒートポンプ・木質バイオマス暖房等）、温室効果ガス削減に資する設備の導入を後押しする枠組みです。施設園芸のA重油暖房からの転換が代表的な対象。補助率・交付上限は事業・年度・地域により変動し、最新の公募要領・実施要綱による確認が必須です（出典: 農林水産省・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    name: "産地生産基盤パワーアップ事業",
    role: "農林水産省／産地の収益力・基盤強化",
    detail:
      "産地の収益力向上・生産基盤の強化を目的に、生産・流通・加工に係る施設整備等を支援する事業です。選果場・集出荷・貯蔵施設の整備や、省エネ・高効率化を伴う設備更新で活用される場合があります。補助率・交付額は事業・年度・地域により変動するため、創作的な数値を用いず、最新の実施要綱・公募要領を確認してください（出典: 農林水産省・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    name: "強い農業・担い手づくり総合支援交付金 等",
    role: "農林水産省／経営体・担い手向け設備支援",
    detail:
      "農業経営体・担い手の規模拡大や生産性向上に資する機械・施設の導入を支援する交付金です。施設園芸・畜産・選果貯蔵の設備導入で活用される場合があります。補助率・上限は事業・年度・地域により異なり、年度ごとに要件が見直されるため、最新の公募要領・実施要綱による確認が前提です（出典: 農林水産省・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    name: "SII 省エネ補助（経産省・高効率設備の更新）",
    role: "経済産業省／SII（省エネ設備更新の主力）",
    detail:
      "高効率空調・冷蔵設備・ヒートポンプ・LED等の省エネ設備更新が対象。省エネ補助の補助率は中小1/2・大企業1/3が目安、先進事業は上限15億円、指定設備導入事業は上限1億円が目安です。選果・貯蔵施設や農業法人の事業場の省エネ更新で活用できる場合があります。最新の公募要領・採択結果を確認してください（出典: SII／2026年度時点）。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    name: "環境省 自然冷媒設備（脱フロン）導入支援",
    role: "環境省／選果場・冷蔵庫の自然冷媒化",
    detail:
      "選果場・冷蔵庫・冷凍施設の自然冷媒（CO2・アンモニア等）設備の導入を支援する枠組みです。フロン規制対応とエネルギー効率改善を同時に進められるのが特徴。補助率・交付上限は事業・年度により変動するため、最新の公募要領・実施要綱で確認してください（出典: 環境省・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    name: "再エネ調達・自家消費支援／自治体の独自補助",
    role: "経産省・環境省・自治体／再エネ・上乗せ",
    detail:
      "自家消費型太陽光・蓄電池・需要家主導型再エネ等の再エネ調達支援に加え、都道府県・市町村が農業・畜産・水産向けの独自補助を整備している場合があります。国の補助と設備・財源を分けることで併用可能なケースもありますが、可否は制度ごとに異なるため事前確認が必須です。最新公募は各自治体の農林水産部局・JA・商工会等で確認してください（出典: 経済産業省・環境省・各自治体から整理／2026年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率・交付上限の考え方（農水省系）",
    detail:
      "農林水産省系の各事業（みどりの食料システム戦略関連・産地生産基盤パワーアップ事業・強い農業づくり交付金等）の補助率・交付上限は、事業・年度・地域により変動します。本ページでは創作的な数値を示さず、『最新の公募要領・実施要綱による』ことを原則とします。導入を検討する際は、対象品目・地域・事業類型ごとの要件を、所管窓口や都道府県の農林水産部局で確認してください（出典: 農林水産省・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    label: "補助率・上限の考え方（SII省エネ補助）",
    detail:
      "経産省/SIIの省エネ補助は、補助率が中小1/2・大企業1/3、上限が先進事業15億円・指定設備導入事業1億円、というのが一般的な目安です。選果・貯蔵施設や農業法人の事業場の高効率設備更新で活用できる場合があります。ただし要件・上限は公募回ごとに見直されるため、最新の公募要領・採択結果による確認が前提です（出典: SII／2026年度時点）。",
  },
  {
    label: "採否は審査による・断定推奨はしない",
    detail:
      "いずれの制度も、申請すれば必ず採択されるものではなく、採否は審査によります。採択率は予算・申請件数・公募回により変動するため、推測値で判断せず、最新の事務局・所管窓口の公表情報を確認してください。本ページは特定の制度・設備・事業者を断定的に推奨するものではなく、判断材料の整理を目的としています（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "費用対効果（削減量あたり）の重要性",
    detail:
      "省エネ・脱炭素系の支援では、投資額あたりのエネルギー削減量・CO2削減量が評価の観点になることが多いです。施設園芸の加温・選果貯蔵の冷蔵・畜産の換気は消費が大きく削減余地が大きいため、効果の大きい設備（ヒートポンプ・自然冷媒冷蔵・高効率換気）から優先するのが現実的です。効果の小さい設備の単体申請より、効果の大きい設備を軸に組み立てる方が、計画の説得力が高まります。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1: 施設園芸（重油暖房→ヒートポンプ・目安レンジ）",
    before:
      "Before: 冬期の加温をA重油暖房機で行い、燃料費が経営を圧迫。燃料価格の変動で年度ごとのコストが読みにくく、暖房精度（温度ムラ）にも課題があった。施設規模により年間エネルギー費は数百万〜千万円規模。",
    after:
      "After: みどりの食料システム戦略関連の設備導入支援＋自治体補助の活用を前提に、園芸用ヒートポンプへ転換（一部に木質バイオマス暖房を併用する構成も検討）。電力契約・自家消費の見直しを併せて実施。",
    result:
      "Result: 燃料費・暖房関連コスト ▲約15〜30%（目安・施設条件で変動）／A重油依存の縮小で価格変動リスクを低減／暖房精度向上で生育環境を安定化。補助率・交付額は事業・年度・地域により変動し、採否は審査による。",
  },
  {
    title: "代表シナリオ2: 選果・貯蔵施設の冷蔵省エネ（自然冷媒・目安レンジ）",
    before:
      "Before: 選果場・貯蔵庫の冷蔵設備が高経年で、消費電力が大きい。フロン規制への対応も将来課題として残っていた。年間電気代は施設規模により数百万〜数千万円規模。",
    after:
      "After: 環境省の自然冷媒設備導入支援＋SII省エネ補助の活用を前提に、自然冷媒の高効率冷蔵設備へ更新。庫内の運用最適化・LED化・計測体制の整備を併せて実施。",
    result:
      "Result: 冷蔵関連の電力 ▲約15〜25%（目安・運用条件で変動）／脱フロン対応を同時に前進／更新後の運用最適化で削減を継続。補助率・交付上限は事業・年度により変動し、採否は審査による。",
  },
  {
    title: "代表シナリオ3: 畜産の換気・空調・給温の省エネ（目安レンジ）",
    before:
      "Before: 畜舎の換気ファン・空調・給温設備が旧型で電力・燃料の消費が大きい。夏季の暑熱対策と冬季の保温で年間を通じてエネルギーを消費していた。",
    after:
      "After: 強い農業づくり交付金等の経営体向け支援＋SII省エネ補助の活用を前提に、高効率換気・空調・ヒートポンプ給温へ更新。換気制御・断熱の見直しを併せて実施。",
    result:
      "Result: 換気・空調・給温関連のエネルギー ▲約15〜25%（目安・畜種・規模で変動）／飼養環境の安定で生産性にも寄与。補助率・交付額は事業・年度・地域により変動し、採否は審査による。特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const cautionItems = [
  {
    label: "交付決定前の発注・着工は対象外になりやすい",
    detail:
      "多くの補助・交付金は、原則『交付決定後』に発注・契約・着工した設備が対象です。交付決定前に発注すると補助対象外になる場合があるため、公募スケジュールと設備調達・工事のタイミング管理が必須です。施工リードタイムの長い施設整備は特に注意が必要で、可否は最新の実施要綱で確認してください。",
  },
  {
    label: "同一設備への複数補助の重複は原則不可",
    detail:
      "同一の設備・経費に対し、複数の国庫補助を重複して受けることは原則不可です。ただし対象設備を分ける、国と自治体で財源が異なる場合に併用可、等のルールがある場合があります。併用可否は制度ごとに異なるため、事業・年度ごとに事前確認が必須です（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    label: "実績報告・効果測定の負担",
    detail:
      "省エネ・脱炭素系の支援では、交付後に効果（エネルギー使用量・CO2削減量等）の実績報告を求められる場合があります。電力・燃料の計測体制を整えておくと報告がスムーズで、報告不備は返還リスクにつながり得るため、申請段階から測定計画を立てることが重要です。",
  },
  {
    label: "事業計画の質と地域・産地との整合",
    detail:
      "農水省系の事業は、産地計画・地域の方針との整合や、食料供給・環境負荷低減への寄与の説明が評価に影響することがあります。生産性・品質・環境対応の定量効果、投資の必要性、実現可能性を、産地ぐるみの文脈で説得力ある構成にすることが採択上重要です。なお採否は審査によります。",
  },
  {
    label: "失敗例: 単体・小規模での燃料転換のみ",
    detail:
      "燃料転換や設備更新を、効果の小さい設備の単体・小規模で申請すると、費用対効果や政策目的との結びつきが弱く評価されにくいことがあります。効果の大きい設備（ヒートポンプ・自然冷媒冷蔵・高効率換気）を軸に、運用改善・計測・再エネと束ねた計画にする方が、説得力が高まります。",
  },
];

const targetEquipment = [
  {
    label: "園芸用ヒートポンプ（暖房・温調）",
    detail:
      "施設園芸の加温をA重油暖房からヒートポンプへ転換することで、燃料費削減・暖房精度向上・CO2削減を同時に狙えます。みどりの食料システム戦略関連の設備導入支援やSII省エネ補助の対象になり得ます。補助率・交付額は事業・年度・地域により変動し、最新の実施要綱で確認してください。",
  },
  {
    label: "木質バイオマス暖房（燃料転換）",
    detail:
      "地域の木質チップ・ペレット等を燃料とするバイオマス暖房は、化石燃料からの転換手段の一つです。ヒートポンプとの併用構成で、外気温が低い時間帯の加温を補う設計も検討されます。地域資源の活用と環境負荷低減の両面で政策目的に整合しやすい設備です。",
  },
  {
    label: "自然冷媒の冷蔵・予冷設備（選果・貯蔵）",
    detail:
      "選果場・貯蔵庫の冷蔵・予冷を、自然冷媒（CO2・アンモニア等）の高効率設備へ更新することで、消費電力削減と脱フロンを同時に進められます。環境省の自然冷媒設備導入支援やSII省エネ補助の対象になり得ます。詳細は別ページの自然冷媒の解説も参照ください。",
  },
  {
    label: "畜産の高効率換気・空調・給温",
    detail:
      "畜舎の換気ファン・空調・給温を高効率機へ更新し、換気制御・断熱を見直すことで、暑熱対策・保温と省エネを両立できます。経営体向け交付金やSII省エネ補助の対象になり得ます。畜種・規模で効果が変わるため、効果の大きい設備から優先します。",
  },
  {
    label: "LED・計測（BEMS等）・自家消費太陽光",
    detail:
      "選果場・畜舎・関連施設のLED化、エネルギー計測（見える化）、屋根上の自家消費太陽光は、削減効果と実績報告の両面で有効です。再エネ賦課金（2026年度4.18円/kWh（確定））を含む電気代の構造を踏まえ、省エネと自家消費・契約の見直しを組合せると効果が高まります。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: エネルギー診断・現状把握",
    detail:
      "まず加温・冷蔵・換気・照明など設備別のエネルギー使用状況を把握し、削減余地の大きい設備を特定します。省エネ診断（無料診断を含む）を活用すると、申請に必要な現状データ・改善計画の根拠が整います。",
  },
  {
    label: "STEP2: 制度の選定・枠の決定",
    detail:
      "投資内容・規模・目的に応じて、農水省系（みどり関連・産地生産基盤パワーアップ・強い農業づくり交付金等）、経産省/SII省エネ補助、環境省の自然冷媒、自治体補助のうち最適な制度・枠を選定します。併用・重ね取りの可否も事前確認します（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    label: "STEP3: 事業計画・産地計画との整合",
    detail:
      "生産性・品質・環境負荷低減の定量効果、投資の必要性（燃料費高騰・産地維持等）、実現可能性を記述し、産地計画・地域方針との整合も意識します。創作的な補助率・交付額は用いず、要件は最新の実施要綱に基づいて記載します。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請します。採択後、交付決定を待ってから発注・着工するのが原則で、交付決定前の発注は対象外になり得ます。施工リードタイムの長い施設整備は特にタイミング管理が重要です。採否は審査によります。",
  },
  {
    label: "STEP5: 導入・実績報告・運用最適化",
    detail:
      "設備導入後、求められる場合は効果（エネルギー使用量・CO2削減量等）の実績報告を提出します。計測体制があると報告がスムーズで、導入後の運用最適化により削減を継続できます。",
  },
];

const energySaving = [
  {
    label: "効果の大きい設備から優先（採択戦略）",
    detail:
      "費用対効果（削減量あたりの投資・補助）が評価されやすいため、消費の大きいヒートポンプ加温・自然冷媒冷蔵・高効率換気から優先するのが現実的です。効果の小さい設備を単体申請するより、効果の大きい設備を軸に組み立てる方が、計画の説得力が高まります。",
  },
  {
    label: "食料供給・産地競争力との一体訴求",
    detail:
      "燃料転換・省エネを単体で訴えるのではなく、品質向上・産地競争力・環境負荷低減と束ねて訴求すると、農水省系の政策目的に整合しやすくなります。ヒートポンプ化による燃料費削減＋生育環境の安定、のように複数効果を結びつけた計画が有効です。なお採否は審査によります。",
  },
  {
    label: "国×自治体×再エネの重層活用",
    detail:
      "国の支援に加え、自治体の独自補助や再エネ調達支援を、設備・経費・財源の切り分けで組合せられるケースがあります。可否は制度ごとに異なるため事前確認が必須ですが、重層活用により実質負担を圧縮できる可能性があります（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    label: "産地ぐるみ・複数経営体での取組",
    detail:
      "個別経営体の単独ではなく、産地ぐるみ・複数経営体での共同導入や、集出荷・選果・貯蔵の共同施設の更新は、産地の基盤強化という政策目的に整合しやすい取組です。地域の方針・産地計画と連携した申請が説得力を持ちます。",
  },
  {
    label: "複数年計画での段階導入",
    detail:
      "一度に全設備を更新せず、効果の大きい設備から複数年計画で段階的に導入する戦略も有効です。年度ごとの予算・公募に合わせて計画的に進め、キャッシュフロー負担を平準化できます。燃料・電力の単価変動も踏まえ、優先順位を見直しながら進めます。",
  },
];

const checklistItems = [
  "加温・冷蔵・換気・照明など設備別のエネルギー使用状況を把握しているか（省エネ診断の活用）",
  "効果の大きい設備（ヒートポンプ加温・自然冷媒冷蔵・高効率換気）を優先候補にしているか",
  "投資規模・目的に応じた制度・枠（農水省系／SII／環境省／自治体）を選定したか",
  "燃料費高騰・産地維持など投資の必要性を事業計画に反映したか",
  "産地計画・地域方針との整合を意識した計画になっているか",
  "国補助・自治体補助・再エネ支援の重層活用の可否を確認したか",
  "補助率・交付額は創作せず最新の公募要領・実施要綱で確認したか",
  "交付決定後に発注・着工するスケジュール管理ができているか",
  "実績報告のための計測体制（電力・燃料の計量）を準備しているか",
  "採否は審査による前提で、推測値に頼らず最新情報を確認したか",
  "補助後の燃料費・電気代削減と投資回収の目安を試算したか",
  "不採択時の再申請・別制度への切替や段階導入を準備したか",
];

const faqItems = [
  {
    question: "農業・一次産業が最初に検討すべき補助はどれですか？",
    answer:
      "目的によって入口が異なります。施設園芸のA重油暖房からの転換ならみどりの食料システム戦略関連の設備導入支援、選果・貯蔵の冷蔵省エネや脱フロンなら環境省の自然冷媒設備導入支援、産地・経営体としての基盤強化なら産地生産基盤パワーアップ事業や強い農業・担い手づくり総合支援交付金、高効率設備の更新なら経産省/SIIの省エネ補助が候補です。補助率・交付額は事業・年度・地域により変動し、採否は審査によります。本ページは一次産業特化の戦略整理で、制度の総論は補助金カテゴリの概要記事も参照してください（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    question: "施設園芸のヒートポンプ暖房は補助の対象になりますか？",
    answer:
      "対象になり得ます。園芸用ヒートポンプはA重油等の化石燃料からの転換手段として、みどりの食料システム戦略関連の設備導入支援や、高効率設備としてSII省エネ補助の対象になり得ます。木質バイオマス暖房との併用構成も検討されます。ただし補助率・交付上限・要件は事業・年度・地域により変動するため、創作的な数値を用いず、最新の公募要領・実施要綱による確認が必須です。採否は審査によります。",
  },
  {
    question: "選果場・冷蔵庫の自然冷媒設備にはどんな支援がありますか？",
    answer:
      "選果場・冷蔵庫・冷凍施設の自然冷媒（CO2・アンモニア等）設備の導入は、環境省の自然冷媒設備導入支援の対象になり得ます。フロン規制への対応とエネルギー効率改善を同時に進められるのが特徴です。高効率化の側面ではSII省エネ補助の対象になる場合もあります。補助率・交付上限は事業・年度により変動するため、最新の公募要領・実施要綱で確認してください。詳しくは別ページの自然冷媒の解説も参照ください（出典: 環境省・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    question: "畜産の換気・空調の省エネ更新は補助を使えますか？",
    answer:
      "使える場合があります。畜舎の高効率換気・空調・給温（ヒートポンプ等）への更新は、経営体向けの交付金（強い農業・担い手づくり総合支援交付金等）やSII省エネ補助の対象になり得ます。暑熱対策・保温と省エネの両立が評価されやすい一方、補助率・交付額は事業・年度・地域により変動し、採否は審査によります。畜種・規模で効果が変わるため、効果の大きい設備から優先するのが現実的です（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    question: "補助率や交付額の具体的な数字を教えてください。",
    answer:
      "農水省系の各事業（みどり関連・産地生産基盤パワーアップ・強い農業づくり交付金等）の補助率・交付上限は、事業・年度・地域により変動するため、本ページでは創作的な数値を示しません。最新の公募要領・実施要綱による確認が原則です。経産省/SIIの省エネ補助は、補助率が中小1/2・大企業1/3、上限が先進事業15億円・指定設備導入事業1億円というのが一般的な目安ですが、これも公募回ごとに見直されます。いずれも採否は審査によります（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。",
  },
  {
    question: "他業種（製造業・物流業）の戦略と何が違いますか？",
    answer:
      "対象設備と政策目的が異なります。製造業はサーボプレス・コンプレッサー・熱処理炉等が中心で生産性向上と一体訴求、物流業は冷蔵・冷凍倉庫や荷役設備が中心です。一次産業は施設園芸の加温・選果貯蔵の冷蔵・畜産の換気が中心で、みどりの食料システム戦略や産地基盤強化といった農林水産分野の政策目的に整合させる点が特徴です。自社の事業内容に応じて、製造業や物流業の戦略ページと使い分けてください。採否は審査によります。",
  },
  {
    question: "交付決定前に設備を発注してしまうとどうなりますか？",
    answer:
      "原則として補助対象外になり得ます。多くの補助・交付金は『交付決定後』に発注・契約・着工した設備が対象で、交付決定前の発注は補助を受けられない場合があります。施設整備や特注設備はリードタイムが長く、公募スケジュールと調達・工事のタイミング管理が特に重要です。発注を急ぐ場合は、所管窓口に対象範囲と発注可能時期を必ず確認してください。可否は最新の実施要綱によります。",
  },
  {
    question: "電気代・燃料費の削減効果はどう試算すればよいですか？",
    answer:
      "まず設備別のエネルギー使用状況を把握し、ヒートポンプ化・自然冷媒・高効率換気等による削減量を見積もります。電気については再エネ賦課金（2026年度4.18円/kWh（確定））を含む単価構成を踏まえ、省エネ・自家消費・契約見直しの複合効果で考えます。具体的な年間削減額・投資回収の目安は、業種別の電気料金計算ツールで自社条件に当てはめて試算できます。数値は条件で変動するため、目安としてご活用ください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "農林水産省（みどりの食料システム戦略・各種補助事業）", url: "https://www.maff.go.jp/" },
  { name: "経済産業省（省エネ・GX政策）", url: "https://www.meti.go.jp/" },
  { name: "資源エネルギー庁（エネルギー需給・再エネ）", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function SubsidyAgriculturePrimaryStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-agriculture-primary-strategy"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "農業・一次産業の補助金活用戦略", url: "https://simulator.eic-jp.org/subsidy-agriculture-primary-strategy" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">農業・一次産業の補助金活用戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            農業・一次産業の補助金活用戦略 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            農業・一次産業（施設園芸・畜産・選果貯蔵・水産の陸上設備）は、加温・冷蔵・換気で燃料・電力を多く消費し、燃料費高騰の影響を受けやすい分野です。本ページでは施設園芸のヒートポンプ暖房・木質バイオマス、A重油からの燃料転換、選果場・冷蔵の自然冷媒、みどりの食料システム戦略関連の設備導入支援を、規模別の代表シナリオ・採択戦略・併用ルール・申請フローまで整理します。補助率・交付額は事業・年度・地域により変動し、採否は審査によります。本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>一次産業が使える6つの補助の入口と総論・他業種戦略との使い分け</li>
              <li>園芸ヒートポンプ・木質バイオマス・自然冷媒冷蔵・高効率換気等の対象設備</li>
              <li>規模別の補助前後Before/After代表シナリオ3件（目安レンジ）</li>
              <li>食料供給・産地競争力と省エネ・脱炭素を一体訴求する採択戦略</li>
              <li>一次産業向け補助金活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは2026年度時点の整理です。補助率・交付額・要件は変動するため、最新の公募要領・実施要綱をご確認ください。各補助金制度の概要・採択率の総論は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">一次産業が使える補助の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              農業・一次産業の省エネ・脱炭素・設備更新には、農林水産省系の事業・経産省/SIIの省エネ補助・環境省の自然冷媒・自治体補助など6つの入口があります。化石燃料からの転換や高効率化は、みどりの食料システム戦略の環境負荷低減と方向性が一致し、政策目的に沿った投資として位置づけやすいのが特徴です。補助率・交付額は事業・年度・地域により変動します。
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
              施設園芸の電力プロファイルや見直しの考え方は{" "}
              <Link href="/articles/by-industry/agriculture-primary/plant-factory-greenhouse" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">植物工場・施設園芸の電気料金見直し</Link>
              、業種別の選び方は{" "}
              <Link href="/articles/by-industry" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の電気料金見直し（一覧）</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">総論・他業種戦略との使い分け（カニバリ回避）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページは農業・一次産業に特化した戦略です。制度横断の総論や、製造業・物流業など他業種の戦略は別ページで整理しています。自社の事業内容に応じて、適切なページを使い分けてください。採否は審査によります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">他業種戦略との使い分け</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  工場の生産設備が中心なら{" "}
                  <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
                  、冷蔵・冷凍倉庫や荷役が中心なら{" "}
                  <Link href="/subsidy-logistics-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流業の補助金活用戦略</Link>
                  。加工・冷凍食品の側面が強い場合は{" "}
                  <Link href="/frozen-food-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍食品事業の電気料金見直し</Link>
                  も参照ください。一次産業は施設園芸の加温・選果貯蔵の冷蔵・畜産の換気が中心です。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">制度横断の総論</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  制度の全体像は{" "}
                  <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
                  、併用は{" "}
                  <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール</Link>
                  、補助か契約見直しかの優先順位は{" "}
                  <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
                  を参照してください。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要な補助・交付金の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              農業・一次産業が活用できる主要な補助・交付金・税制を、役割・対象別に整理します。投資内容に応じて最適な制度を選定し、併用・重ね取りの可否を検討します。補助率・交付額は事業・年度・地域により変動し、創作せず最新の実施要綱で確認します。
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
            <p className="mt-3 text-xs text-slate-500">
              ※ 上表は2026年度時点の整理です。補助率・交付額・要件は事業・年度・地域により変動するため、最新の公募要領・実施要綱を必ず確認してください（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象設備（園芸ヒートポンプ・木質バイオマス・冷蔵・換気）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助で導入しやすい一次産業固有の設備を整理します。消費の大きいヒートポンプ加温・自然冷媒冷蔵・高効率換気から優先するのが現実的です。
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
              、選果場・冷蔵の自然冷媒は{" "}
              <Link href="/subsidy-natural-refrigerant-freezer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自然冷媒冷凍・冷蔵設備の補助ガイド</Link>
              、SII省エネ補助の総論は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金（総論）</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助率と上限の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助率・交付上限・採否の考え方を整理します。農水省系の補助率・交付額は事業・年度・地域により変動するため創作せず、最新の公募要領・実施要綱による確認を原則とします。SII省エネ補助は中小1/2・大企業1/3、上限は先進15億円・指定1億円が目安です。
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
              ※ 補助率・上限・採否は2026年度時点の整理です。農水省系は事業・年度・地域により変動するため、最新の公募要領・実施要綱を必ず確認してください（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              を参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の代表シナリオ3件 — 補助前後の目安（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一次産業の代表的な3パターンで、補助活用による実質負担圧縮と削減効果をBefore/After方式で提示します。いずれも公開情報・実務知見から再構成した代表シナリオで、数値は目安レンジです。補助率・交付額は事業・年度・地域により変動し、採否は審査によります。
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
              自社条件での燃料費・電気代削減と投資回収の目安は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の電気料金計算ツール</Link>
              で試算できます。再エネ賦課金（2026年度4.18円/kWh（確定））を含む単価構成を踏まえて優先順位づけにご活用ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">一次産業の採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              効果の大きい設備からの優先、食料供給・産地競争力との一体訴求、国×自治体×再エネの重層活用、産地ぐるみの取組、複数年計画での段階導入が採択戦略の柱です。採否は審査によります。
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
              GX・CN投資促進税制の併用余地は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              、蓄電池・太陽光は{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・太陽光設備の補助ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              エネルギー診断から実績報告まで、申請の標準的な流れを整理します。交付決定前の発注・着工は対象外になり得る点に特に注意が必要です。施設整備はリードタイムが長いため、タイミング管理が重要です。
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
              、申請書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金の申請・交付書類ガイド</Link>
              、省エネ診断は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              を参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用ルールと重層活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同一の設備・経費への複数の国庫補助の重複は原則不可ですが、対象設備を分ける・国と自治体で財源が異なる場合に併用可、等のルールがある場合があります。可否は制度・事業・年度ごとに異なるため、事前確認が必須です。重層活用により実質負担を圧縮できる可能性がありますが、断定はできません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">国×自治体×再エネの切り分け</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  国の支援（農水省系・SII・環境省）と、自治体の独自補助、再エネ調達支援を、設備・経費・財源の切り分けで組合せられる場合があります。可否は制度ごとに異なるため、所管窓口・自治体の農林水産部局で事前確認してください。詳細は{" "}
                  <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
                  。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自治体補助の探し方</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  都道府県・市町村が農業・畜産・水産向けの独自補助を整備している場合があります。地域別の探し方は{" "}
                  <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体補助金の一覧・探し方</Link>
                  を参照ください。最新公募はJA・商工会等でも確認できます。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・失敗例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助活用で失敗しないための留意点を整理します。発注・着工タイミング、併用ルール、実績報告、計画の質と産地計画との整合が成否を左右します。採否は審査によります。
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
              不採択への対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              、補助か契約見直しかの優先順位は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代の見直しポイント</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報の更新と確認の進め方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助・交付金は年度ごとに要件・予算・公募スケジュールが見直されます。本ページは2026年度時点の整理であり、補助率・交付額・要件は変動するため、最新の公募要領・実施要綱をご確認ください。情報源としては、農林水産省・経済産業省・資源エネルギー庁・環境省・SIIの公式情報のほか、都道府県の農林水産部局・JA・商工会等の窓口が有用です。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">公式情報での確認</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  みどりの食料システム戦略・産地生産基盤パワーアップ事業・強い農業づくり交付金等は農林水産省、省エネ補助はSII・経済産業省、自然冷媒は環境省が所管です。補助率・交付額の具体値は創作せず、各事業の最新の実施要綱・公募要領で確認してください（出典: 農林水産省・経済産業省/SII・各事業実施要綱から整理／2026年度時点）。
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電力・燃料単価の確認</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  電気代・産業別エネルギー消費の最新動向は{" "}
                  <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
                  のデータも参照のうえ、再エネ賦課金（2026年度4.18円/kWh（確定））を含む単価構成を踏まえて、省エネ・燃料転換投資の優先順位づけにご活用ください。特定の電力会社・契約形態を推奨するものではありません。
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xl font-semibold text-slate-900">一次産業向け補助金活用チェックリスト（12項目）</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              申請前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、採択の可能性や費用対効果が下がります。採否は審査による前提で進めてください。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              トップの記事ハブは{" "}
              <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金シミュレーター（ホーム）</Link>
              から辿れます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-xl font-semibold text-slate-900">シミュレーターで補助活用後の電気代・燃料費を試算する</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助でヒートポンプ・自然冷媒冷蔵・高効率換気を導入した場合の削減効果を、自社条件に当てはめて試算できます。補助前後の燃料費・電気代と投資回収の目安を定量化し、申請する制度・設備の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・燃料費と上振れリスクを確認する</li>
              <li>高効率設備・燃料転換後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数の目安を比較する</li>
              <li>省エネ＋自家消費＋契約見直しの複合効果を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、再エネ賦課金（2026年度4.18円/kWh（確定））を含む単価構成を踏まえてご活用ください。数値は条件で変動する目安です。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/industry-electricity-calculator", title: "業種別の電気料金計算ツール", description: "施設園芸・畜産等の条件で削減・投資回収の目安を試算。" },
              { href: "/subsidies-overview", title: "補助金・助成金の全体像（総論）", description: "制度横断の概要と入口の選び方。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（総論）", description: "高効率設備更新の主力補助の制度概要。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率（総論）", description: "公募タイミングと採択の考え方。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "園芸用ヒートポンプ等の補助活用。" },
              { href: "/subsidy-natural-refrigerant-freezer", title: "自然冷媒冷凍・冷蔵設備の補助ガイド", description: "選果場・冷蔵庫の脱フロンと省エネ。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助ガイド", description: "自家消費太陽光・蓄電池の補助活用。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "診断で現状把握と申請根拠を整える。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-application-approval-document", title: "補助金の申請・交付書類ガイド", description: "申請から交付までの書類実務。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×再エネの組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数の目安比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-local-government-list", title: "自治体補助金の一覧・探し方", description: "農業・畜産・水産向けの地域補助。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "税額控除・特別償却の要件と対象。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "補助か契約見直しかの判断軸。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "工場の生産設備が中心の場合はこちら。" },
              { href: "/subsidy-logistics-strategy", title: "物流業の補助金活用戦略", description: "冷蔵・冷凍倉庫・荷役が中心の場合はこちら。" },
            ]}
          />

          <ContentCta
            heading="一次産業の補助金活用と電気代・燃料費削減を専門家に相談する"
            description="施設園芸のヒートポンプ化・選果貯蔵の自然冷媒・畜産の換気省エネは、対象設備の選定・採択戦略・併用ルールが複雑です。まず業種別の電気料金計算ツールで削減余地を試算し、必要に応じて専門家へご相談ください。補助率・交付額は事業・年度・地域により変動し、採否は審査によります。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別の電気料金を試算する" },
              { href: "/subsidies-overview", label: "補助金の全体像を見る" },
              { href: "/subsidy-schedule-and-approval-rate", label: "公募スケジュールと採択率を見る" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="一次産業の補助金活用、専門家に相談しませんか？"
            description="施設園芸・畜産・選果貯蔵の高効率設備の選定、補助・交付金の組合せ、採択される事業計画書の作成は専門知識を要します。エネルギー情報センターは中立的立場で、一次産業の補助金活用・電気代削減の判断材料を整理します。初回相談は無料です。特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
