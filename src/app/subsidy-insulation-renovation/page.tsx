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
  "断熱・ZEB化改修の補助金 完全ガイド｜対象・補助率・申請の進め方";
const pageDescription =
  "業務用建築物の断熱・外皮改修・ZEB化（ネット・ゼロ・エネルギー・ビル）補助の対象・補助の考え方・申請フローを整理。窓/外皮断熱・高効率空調照明・BEMSの一体改修で電気代を削減する実務を、ZEBの段階（Oriented/Ready/Nearly/ZEB）と代表シナリオで解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ZEB 補助金",
    "断熱改修 補助金 法人",
    "外皮 窓 断熱 補助",
    "ZEB Ready Oriented",
    "ビル 省エネ改修 補助",
    "建築物 脱炭素 補助",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-insulation-renovation",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-insulation-renovation",
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
    label: "断熱・ZEB化改修補助の全体像",
    detail:
      "業務用建築物の断熱・ZEB化改修には、①環境省・経済産業省が連携しSII（環境共創イニシアチブ）が執行する『建築物等の脱炭素化・レジリエンス強化のためのZEB支援事業』等の国の支援、②国土交通省の建築物省エネ関連の支援、③SII執行の省エネ設備更新補助（高効率空調・照明・BEMS等）、④都道府県・市町村の独自の建築物脱炭素補助、の重層的な制度が活用できます。窓・外皮の断熱と高効率設備・再エネを組合せて建物全体の一次エネルギー消費を削減する『ZEB化』の発想が補助の中心です。補助率・上限の具体的な数値は区分（ZEB Oriented／ZEB Ready／Nearly ZEB／ZEB）・延床面積・年度公募により変動するため、最新の公募要領による確認が前提です（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『建築物の断熱・ZEB化改修』に特化した補助金ガイドです。補助金制度全体の概要・スケジュール・採択率の総論は別途整理しています。本ページでは窓・外皮断熱、高効率空調・照明、BEMSの一体改修という建築改修固有の対象工事、ZEBの段階区分に応じた計画づくり、既存ビルの改修ZEB化の進め方に焦点を当てます。",
  },
  {
    label: "断熱・外皮改修が電気代に効く構造",
    detail:
      "業務用建築物は空調・照明が電力を多消費し、外皮（窓・壁・屋根）からの熱の出入りが空調負荷を押し上げます。窓の高断熱化（複層・Low-E）や外皮断熱で熱負荷そのものを減らすと、高効率空調の効果が一段と高まり、結果として電気使用量と契約電力（ピーク）の双方を抑えやすくなります。断熱は『設備で削る前に負荷を減らす』省エネの土台です。",
  },
  {
    label: "ZEB化は段階的に進められる",
    detail:
      "ZEB（ネット・ゼロ・エネルギー・ビル）は、断熱・高効率設備・再エネで建物の一次エネルギー消費を削減する建築です。いきなり完全なZEBを目指す必要はなく、ZEB Oriented → ZEB Ready → Nearly ZEB → ZEB と段階的に高めていけます。既存建築の改修によるZEB化も対象で、まずは外皮・設備の改善から着手し、後年に再エネを追加する複数年計画が現実的です。",
  },
  {
    label: "BEMSによる見える化と実績の裏づけ",
    detail:
      "BEMS（ビルエネルギーマネジメントシステム）でエネルギー消費を見える化すると、改修前後の削減効果を定量的に把握でき、補助金の実績報告にも活用できます。断熱・設備更新の効果を計測で裏づけることは、追加投資の意思決定や、将来の公募申請の説得材料としても有効です。",
  },
];

const zebStages = [
  {
    label: "ZEB Oriented（ゼブ・オリエンテッド）",
    detail:
      "延床面積の大きい建築物などを念頭に、一定の省エネ（一次エネルギー消費の削減）に加え、未評価技術の導入等で『ZEBを志向した建物』とする区分。完全なZEBに届かない大規模建築でも、断熱・高効率設備の改善で段階的に脱炭素を進める入口として位置づけられます。具体的な削減基準・補助の扱いは区分・延床・年度公募により変動し、最新の公募要領によります。",
  },
  {
    label: "ZEB Ready（ゼブ・レディ）",
    detail:
      "再エネを除いた省エネ（断熱・高効率設備）で一次エネルギー消費を大きく削減し、『再エネを導入すればZEBになる状態』まで仕上げた区分。再エネ設置スペースの制約がある都市部のビル改修でも目指しやすく、外皮断熱・高効率空調照明・BEMSの一体改修が中心になります。補助率・上限の具体値は創作せず、区分・延床・年度公募により変動する点に留意してください。",
  },
  {
    label: "Nearly ZEB（ニアリー・ゼブ）",
    detail:
      "ZEB Readyの省エネに加え、再エネを導入して一次エネルギー消費の正味（ネット）を『ゼロに近い』水準まで削減した区分。屋根太陽光などの再エネを組合せやすい中規模建築の改修で狙いやすい段階です。到達可否は建物条件（屋根面積・方位等）と設備計画により変わります。",
  },
  {
    label: "ZEB（ゼブ）",
    detail:
      "断熱・高効率設備・再エネを総合し、年間の一次エネルギー消費の正味をゼロにする区分。改修で完全ZEBに到達するには相応の条件が必要で、まずはOriented/Readyから段階的に高め、再エネ余地のある建物でNearly ZEB・ZEBを目指すのが現実的です。区分の判定や補助の扱いは最新の公募要領によります。",
  },
];

const targetBuildings = [
  {
    label: "対象となる建築物の例",
    detail:
      "オフィスビル、学校・教育施設、庁舎、病院・福祉施設、店舗・商業施設、ホテル、工場の事務棟など、業務用の建築物が広く想定されます。新築だけでなく既存建築の改修によるZEB化も対象で、外皮・設備の高経年化が進んだ建物ほど断熱・更新の効果が出やすい傾向があります。対象範囲は制度・年度公募により異なるため、最新の公募要領による確認が前提です。",
  },
  {
    label: "対象となる事業者",
    detail:
      "民間法人、医療法人・社会福祉法人、学校法人、地方公共団体など、建物の所有者・使用者となる幅広い主体が想定されます。テナント入居の場合はオーナーとの調整が必要になることがあり、所有関係に応じた申請主体の整理が重要です。採否は審査によります。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "改修ZEB化という選択肢",
    detail:
      "ストック（既存建築）の脱炭素化は社会全体の課題で、改修によるZEB化は新築よりも対象となる建物が圧倒的に多い領域です。建て替えが難しい庁舎・学校・既存ビルでも、外皮断熱と高効率設備の更新でZEB Oriented/Readyを目指せる点が、改修ZEB化の意義です。",
  },
  {
    label: "建物用途による設計の違い",
    detail:
      "オフィスは執務時間帯の空調・照明負荷、学校は夏季・授業時間の負荷、店舗は営業時間と外気導入、病院は24時間運用と用途で負荷プロファイルが異なります。用途ごとに効く対策（断熱重視か設備重視か）が変わるため、現状把握に基づく設計が採択・効果の両面で重要です。",
  },
];

const targetWorks = [
  {
    label: "窓・開口部の断熱（複層・Low-E・内窓）",
    detail:
      "外皮のなかでも熱の出入りが大きいのが窓です。複層ガラス・Low-E複層・内窓（二重窓）への更新で日射・貫流による空調負荷を低減します。改修では既存サッシを活かす内窓方式が工期・コストの面で採用されやすく、執務を止めずに施工できる場合があります。",
  },
  {
    label: "外壁・屋根・断熱材の強化",
    detail:
      "外壁・屋根の断熱強化や遮熱・日射制御（庇・ルーバー・遮熱塗装）で、外皮全体の熱負荷を抑えます。屋根断熱は最上階の空調負荷低減に効きやすく、太陽光設置と併せて検討すると相乗効果が見込めます。外皮性能の改善はZEB区分の到達度に直結します。",
  },
  {
    label: "高効率空調（熱源・ヒートポンプ）",
    detail:
      "高効率の熱源機・ヒートポンプ空調への更新は、業務用建築の省エネの主力です。断熱で熱負荷を下げたうえで高効率空調に更新すると、容量の適正化（過大設備の回避）も進み、電気使用量と契約電力の双方を抑えやすくなります。",
  },
  {
    label: "高効率照明（LED・人感/調光制御）",
    detail:
      "全館LED化と、人感センサー・昼光連動調光・タイマー制御の組合せで照明電力を削減します。照明は投資回収が比較的早く、改修の初期段階で着手しやすい対策です。照明発熱の低減は空調負荷の軽減にも寄与します。",
  },
  {
    label: "BEMS（エネルギー見える化・最適制御）",
    detail:
      "BEMSで電力・空調・照明のデータを収集し、見える化と最適制御を行います。改修効果の検証、ピーク制御、実績報告に活用でき、断熱・設備更新の効果を継続的に管理できます。BEMSはZEB化の運用面を支える基盤です。",
  },
];

const subsidyRates = [
  {
    label: "補助の考え方（区分・延床・年度で変動）",
    detail:
      "断熱・ZEB化改修の補助は、到達するZEB区分（ZEB Oriented／ZEB Ready／Nearly ZEB／ZEB）・延床面積・年度公募の枠組みによって補助率や上限が変わります。一般に省エネ・脱炭素の度合いが高いほど手厚くなる傾向がありますが、具体的な補助率%・上限額はここでは創作せず、最新の公募要領による確認を必須とします（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "対象経費の範囲",
    detail:
      "断熱（窓・外皮）、高効率空調・照明、BEMS、再エネ設備など、ZEB化に資する設備・工事費が対象経費の中心です。設計費・効果検証費が対象となる制度もありますが、範囲は制度・公募ごとに異なります。対象外経費（既存撤去の一部、汎用什器等）も定められるため、見積段階で対象範囲を切り分けることが重要です。",
  },
  {
    label: "区分到達度が補助・評価に影響",
    detail:
      "どのZEB区分に到達する計画かは、補助の枠組みや評価に影響します。改修では再エネ余地が限られることも多く、まずは省エネ（断熱・高効率設備）でZEB Ready相当を目指し、可能なら再エネを加えてNearly ZEB・ZEBへ高める設計が現実的です。区分判定の方法は最新の公募要領によります。",
  },
  {
    label: "費用対効果と削減量の重要性",
    detail:
      "脱炭素補助は『投じた費用あたりの一次エネルギー削減・CO2削減』が評価の重要な観点になりやすい領域です。断熱で負荷を下げ、高効率設備で効率を上げ、BEMSで運用を最適化する一体改修は、削減量と費用対効果の両面で説明しやすく、計画の説得力を高めます。採否は審査によります。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1: 中規模オフィスビルのZEB Oriented改修（延床・規模目安レンジ）",
    before:
      "Before: 単板ガラス・高経年空調・蛍光灯のまま運用。夏冬の外皮負荷が大きく空調が過負荷気味で、年間電気代は中規模オフィスとして高止まり。建て替えは難しく、改修での脱炭素化を検討。",
    after:
      "After: 内窓・Low-E複層で窓断熱を強化し、高効率熱源・空調へ更新、全館LED化と昼光連動調光、BEMSで見える化。再エネ余地が限られるためまずはZEB Oriented相当を志向。補助は区分・延床・年度公募により変動するため最新の公募要領で確認。",
    result:
      "Result: 外皮負荷低減＋高効率空調・照明で電気代Before/After ▲約15〜25%（▲%は目安）／契約電力のピークも低下／BEMSで効果を継続管理。区分・補助の扱いは最新の公募要領による。",
  },
  {
    title: "代表シナリオ2: 学校の断熱＋空調更新（規模目安レンジ）",
    before:
      "Before: 普通教室の窓が単板で夏は高温・冬は底冷え、扇風機と高経年エアコンで対応。授業時間帯に空調・照明負荷が集中し、夏季の電気代がかさんでいた。",
    after:
      "After: 窓の内窓・複層化と屋根断熱で外皮を強化し、高効率空調へ更新、LED化と人感・タイマー制御を導入。BEMSで教室別の使用量を見える化。改修ZEB化として段階的にZEB Oriented/Readyを志向。補助は区分・延床・年度公募により変動。",
    result:
      "Result: 学習環境の改善とともに電気代Before/After ▲約15〜20%（▲%は目安）／夏季ピークの抑制／教育施設の脱炭素化を段階的に前進。補助率・上限は最新の公募要領による。",
  },
  {
    title: "代表シナリオ3: 既存ビルのNearly ZEB改修（規模目安レンジ）",
    before:
      "Before: 屋根面積に余裕のある中規模ビルで、外皮・設備が高経年。空調・照明の電力負荷が大きく、テナント・所有者ともに脱炭素対応を求められていた。",
    after:
      "After: 外皮断熱（窓・屋根）と高効率空調・LED・BEMSで省エネをZEB Ready相当まで進め、屋根太陽光（自家消費）を追加して再エネを上乗せ。正味の一次エネルギー消費を大きく削減しNearly ZEBを志向。補助は区分・延床・年度公募により変動。",
    result:
      "Result: 省エネ＋再エネの一体改修で電気代Before/After ▲約25〜35%（▲%は目安）／ピークカットと自家消費で系統からの購入電力を圧縮／脱炭素のアピール材料に。区分・補助の扱いは最新の公募要領による。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 現状把握・省エネ診断",
    detail:
      "まず建物のエネルギー使用状況と外皮・設備の現状を把握します。省エネ診断や外皮性能の確認で、断熱・設備更新の余地と優先順位を整理。現状データはZEB区分の検討と事業計画の根拠になります。",
  },
  {
    label: "STEP2: ZEB区分・計画の設計",
    detail:
      "どのZEB区分（Oriented／Ready／Nearly ZEB／ZEB）を目指すかを、建物条件（延床・屋根面積・再エネ余地）と予算から設計します。改修では省エネ先行・再エネ後年の段階計画が現実的なことも多く、ZEBプランナー等の専門家と連携すると精度が高まります。",
  },
  {
    label: "STEP3: 補助金の選定・公募確認",
    detail:
      "目指す区分・延床・建物用途に合う制度を選び、最新の公募要領で対象・補助の考え方・スケジュール・対象経費を確認します。補助率・上限は区分・延床・年度公募により変動するため、必ず最新の公募要領による確認を行います。",
  },
  {
    label: "STEP4: 事業計画・申請",
    detail:
      "断熱・高効率設備・再エネ・BEMSの計画と、削減効果（一次エネルギー・CO2・電気代）の定量根拠を事業計画にまとめて申請します。採択される計画には、現状データに基づく具体的な数値根拠と実現可能性が必要です。採否は審査によります。",
  },
  {
    label: "STEP5: 交付決定後に着工・実績報告",
    detail:
      "原則として交付決定後に契約・着工します（決定前の発注は対象外となるのが一般的）。改修後はBEMS等で効果を計測し、実績報告を行います。報告の不備は補助金返還リスクにつながるため、申請段階から計測計画を立てます。",
  },
];

const combinationRules = [
  {
    label: "同一経費への国補助の重複は原則不可",
    detail:
      "同一の設備・経費に対して複数の国庫補助を重複して受けることは原則できません。ただし対象設備・経費を分ける、国と自治体で財源が異なる場合に併用可、等のルールがあり、併用可否は制度ごとに異なります。最新の公募要領による確認が必須です。",
  },
  {
    label: "国補助＋自治体補助の重層",
    detail:
      "国のZEB・省エネ補助に加え、都道府県・市町村が独自の建築物脱炭素補助を整備している場合があります。財源・対象経費の切り分けで併用できるケースもあるため、自治体の制度も併せて確認すると実質負担を抑えられる可能性があります。",
  },
  {
    label: "税制（GX・CN投資促進税制等）との関係",
    detail:
      "脱炭素関連設備では税制優遇（税額控除・特別償却）の対象となる場合があります。補助金で取得価額が圧縮される分、税制の対象額が調整される等のルールがあるため、補助と税制の組合せは税理士・所管窓口に事前確認が必須です。要件確認のうえ活用してください。",
  },
  {
    label: "再エネ・蓄電池補助との組合せ",
    detail:
      "屋根太陽光・蓄電池の導入では再エネ関連の補助・税制が活用できる場合があります。断熱・省エネ（ZEB Ready相当）に再エネを上乗せしてNearly ZEB・ZEBを目指す設計では、設備・経費の切り分けで重層活用の余地を検討します。可否は最新の公募要領によります。",
  },
];

const cautionItems = [
  {
    label: "交付決定前の発注は対象外になりやすい",
    detail:
      "補助金は原則『交付決定後』に契約・発注した工事・設備が対象です。改修は設計・調整に時間がかかるため、公募スケジュールと設計・調達のタイミング管理が失敗を避ける鍵になります。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。",
  },
  {
    label: "区分・補助率を思い込みで計画しない",
    detail:
      "ZEB区分の判定や補助率・上限は、延床・年度公募・制度により変動します。過去の数値や伝聞で計画を固めると、実際の公募要領と乖離するおそれがあります。必ず最新の公募要領による数値で計画してください。",
  },
  {
    label: "効果検証・実績報告の体制不足",
    detail:
      "断熱・設備更新の効果は計測で裏づける必要があります。BEMS・計測体制がないと実績報告が困難になり、補助金返還リスクにつながることがあります。申請段階から計測計画を組み込むことが重要です。",
  },
  {
    label: "テナント・所有関係の調整漏れ",
    detail:
      "テナント入居の建物では、オーナーと使用者の調整不足で工事・申請が進まないことがあります。改修範囲・費用負担・申請主体を早期に整理することが、計画を止めないためのポイントです。",
  },
  {
    label: "設備のみで断熱を軽視する失敗",
    detail:
      "高効率空調だけを更新し外皮断熱を軽視すると、熱負荷が大きいまま設備効率に頼ることになり、削減効果・費用対効果が伸びにくくなります。『負荷を減らす断熱』と『効率を上げる設備』の両輪で計画することが、ZEB化の基本です。",
  },
];

const approvalPoints = [
  {
    label: "現状データに基づく削減根拠",
    detail:
      "省エネ診断・実測データを基に、断熱・設備更新による一次エネルギー・CO2・電気代の削減を定量的に示すと、計画の説得力が高まります。根拠の薄い計画は評価されにくいため、現状把握を起点にしましょう。採否は審査によります。",
  },
  {
    label: "断熱＋設備＋運用の一体設計",
    detail:
      "外皮断熱（負荷低減）、高効率設備（効率向上）、BEMS（運用最適化）を一体で設計すると、削減量と費用対効果の両面で説明しやすくなります。バラバラの単体更新より、ZEB化として束ねた計画が評価されやすい傾向があります。",
  },
  {
    label: "目指すZEB区分の明確化",
    detail:
      "ZEB Oriented／Ready／Nearly ZEB／ZEB のどれを、どの根拠で目指すのかを明確にすることが重要です。区分の到達根拠（外皮性能・設備効率・再エネ量）を計画に示すと、審査での説明が通りやすくなります。区分判定は最新の公募要領によります。",
  },
  {
    label: "ZEBプランナー等の専門家連携",
    detail:
      "ZEBの計画・設計には専門知識が要ります。ZEBプランナー・設計事務所・施工会社と早期に連携すると、区分設計・対象経費の切り分け・実現可能性の精度が上がります。専門家の知見は採択・効果の両面で有効です。",
  },
  {
    label: "複数年・段階計画の妥当性",
    detail:
      "一度に全てを改修するのが難しい場合、省エネ先行・再エネ後年の段階計画が現実的です。年度ごとの公募・予算に合わせた無理のない計画は、実現可能性の面で評価されやすく、キャッシュフロー負担も平準化できます。",
  },
];

const infoUpdate = [
  {
    label: "公募要領は年度ごとに更新される",
    detail:
      "断熱・ZEB化補助の対象・補助率・上限・スケジュールは年度公募ごとに見直されます。前年度の内容がそのまま適用されるとは限らないため、申請を検討する都度、最新の公募要領による確認が必須です。本ページは2026年度時点の整理です。最新公募要領をご確認ください。",
  },
  {
    label: "公式情報での確認を基本に",
    detail:
      "制度の一次情報は、環境省・経済産業省・国土交通省・SII等の公式サイトと各制度の公募要領です。本ページは概観の整理であり、最終判断は公式の最新情報に基づいて行ってください。採否は審査によります。",
  },
  {
    label: "電気代・エネルギー単価の動向",
    detail:
      "改修効果（電気代削減）の見立てには、足元の電気料金・エネルギー単価の動向把握も役立ちます。再エネ賦課金は2026年度4.18円/kWh（確定）で、これも電気代の構成要素です。単価動向を踏まえて投資の優先順位を検討してください。",
  },
  {
    label: "自治体制度の最新化",
    detail:
      "都道府県・市町村の建築物脱炭素補助は、予算・年度で内容が変わります。国の制度と併せて、立地自治体の最新の制度・公募を確認することで、重層活用の可能性を取りこぼさないようにしましょう。",
  },
];

const checklistItems = [
  "建物のエネルギー使用状況・外皮性能を把握しているか（省エネ診断の活用）",
  "目指すZEB区分（Oriented/Ready/Nearly ZEB/ZEB）を建物条件から検討したか",
  "窓・外皮の断熱を計画に含めているか（設備偏重になっていないか）",
  "高効率空調・照明・BEMSを一体で設計しているか",
  "再エネ（屋根太陽光等）の余地と段階導入を検討したか",
  "最新の公募要領で対象・補助の考え方・スケジュールを確認したか",
  "対象経費・対象外経費を見積段階で切り分けたか",
  "国補助・自治体補助・税制の重層活用の可否を整理したか",
  "テナント・所有関係の調整（申請主体・費用負担）を済ませたか",
  "交付決定後に着工するスケジュール管理ができているか",
  "実績報告のための計測体制（BEMS等）を準備しているか",
  "改修後の電気代削減・投資回収を試算したか",
];

const faqItems = [
  {
    question: "ZEBとは何ですか。断熱改修とどう関係しますか？",
    answer:
      "ZEB（ネット・ゼロ・エネルギー・ビル）は、断熱・高効率設備・再エネによって建物の年間一次エネルギー消費の正味をゼロに近づける建築です。区分はZEB Oriented／ZEB Ready／Nearly ZEB／ZEBの段階があります。断熱（窓・外皮）の改修は、空調などの熱負荷そのものを減らすZEB化の土台で、断熱で負荷を下げてから高効率設備・再エネを組合せると削減効果が高まります。既存建築の改修によるZEB化も対象です。補助率・上限の具体値は区分・延床・年度公募により変動するため、最新の公募要領による確認が前提です（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "既存のビルでもZEB化の補助は使えますか？",
    answer:
      "改修による既存建築のZEB化も対象として想定されています。建て替えが難しい庁舎・学校・既存ビルでも、窓・外皮の断熱強化と高効率空調・照明・BEMSの更新でZEB Oriented/Ready相当を目指せます。屋根面積に余裕があれば再エネを加えてNearly ZEB・ZEBへ段階的に高めることも可能です。対象範囲・補助の扱いは制度・年度公募により異なるため、最新の公募要領をご確認ください。採否は審査によります。",
  },
  {
    question: "補助率や上限額はどのくらいですか？",
    answer:
      "補助率・上限額は、到達するZEB区分（Oriented／Ready／Nearly ZEB／ZEB）・延床面積・年度公募の枠組みによって変動します。本ページでは具体的な%・金額は創作せず示しません。最新の公募要領による確認を必須としています。一般に省エネ・脱炭素の度合いが高いほど手厚くなる傾向はありますが、最終的な数値は必ず公式の公募要領でご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "窓だけの断熱改修でも対象になりますか？",
    answer:
      "窓・開口部の断熱は外皮改修の重要な要素ですが、ZEB化の補助は建物全体の一次エネルギー消費削減を評価する枠組みが中心です。窓単体より、外皮断熱・高効率空調照明・BEMSを一体で計画し、目指すZEB区分の到達根拠を示すほうが評価されやすい傾向があります。窓改修を単体で支援する自治体制度がある場合もあるため、対象は制度・年度公募により異なります。最新の公募要領をご確認ください。",
  },
  {
    question: "断熱改修で電気代はどれくらい下がりますか？",
    answer:
      "建物の用途・現状性能・改修内容により幅があり、一律には言えません。本ページの代表シナリオでは、外皮断熱と高効率空調・照明・BEMSの一体改修で電気代Before/Afterの削減幅を目安レンジ（▲%は目安）として示しています。断熱で熱負荷を下げると高効率空調の効果が高まり、電気使用量と契約電力（ピーク）の双方を抑えやすくなります。実際の効果は省エネ診断と試算で確認することをおすすめします。再エネ賦課金は2026年度4.18円/kWh（確定）で、これも電気代の構成要素です。",
  },
  {
    question: "申請から工事までの流れと注意点は？",
    answer:
      "現状把握・省エネ診断 → ZEB区分・計画の設計 → 補助金の選定・公募確認 → 事業計画・申請 → 交付決定後に着工・実績報告、という流れが基本です。最大の注意点は、原則として交付決定後に契約・着工する必要があり、決定前の発注は対象外となりやすいことです。改修は設計・調整に時間がかかるため、公募スケジュールと設計・調達のタイミング管理が重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。",
  },
  {
    question: "国の補助と自治体の補助は併用できますか？",
    answer:
      "同一の設備・経費に対する複数の国庫補助の重複は原則できませんが、対象経費を分ける、国と自治体で財源が異なる、等の場合に併用できるケースがあります。都道府県・市町村が独自の建築物脱炭素補助を整備していることもあり、重層活用で実質負担を抑えられる可能性があります。併用可否は制度ごとに異なるため、最新の公募要領による確認が必須です。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "ZEBプランナーなどの専門家は必要ですか？",
    answer:
      "ZEBの計画・設計・区分判定には専門知識が要るため、ZEBプランナー・設計事務所・施工会社と早期に連携することをおすすめします。専門家との連携は、区分設計・対象経費の切り分け・削減効果の根拠づくり・実現可能性の精度を高め、採択と効果の両面で有効です。最終的な区分判定や補助の扱いは最新の公募要領によります。採否は審査によります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "環境省（脱炭素・建築物のZEB化支援）", url: "https://www.env.go.jp/" },
  { name: "経済産業省 資源エネルギー庁（省エネ・ZEB政策）", url: "https://www.meti.go.jp/" },
  { name: "国土交通省（建築物省エネ関連）", url: "https://www.mlit.go.jp/" },
  { name: "SII（環境共創イニシアチブ）ZEB支援事業", url: "https://sii.or.jp/" },
];

export default function SubsidyInsulationRenovationPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-insulation-renovation"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "断熱・ZEB化改修の補助金", url: "https://simulator.eic-jp.org/subsidy-insulation-renovation" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">断熱・ZEB化改修の補助金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            断熱・ZEB化改修の補助金 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            業務用建築物の断熱・外皮改修・ZEB化（ネット・ゼロ・エネルギー・ビル）に使える補助の対象・補助の考え方・申請フローを整理します。窓・外皮断熱、高効率空調・照明、BEMSを一体で改修し、建物全体の一次エネルギー消費と電気代を削減する実務を、ZEBの段階（ZEB Oriented／ZEB Ready／Nearly ZEB／ZEB）と代表シナリオで解説します。補助率・上限の具体値は区分・延床・年度公募により変動するため、最新の公募要領による確認を前提としています。
          </p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>断熱・ZEB化改修に使える国・自治体の補助の全体像</li>
              <li>ZEBの段階区分（Oriented／Ready／Nearly ZEB／ZEB）の違い</li>
              <li>窓・外皮断熱・高効率空調照明・BEMSの対象工事</li>
              <li>中規模オフィス・学校・既存ビルの代表シナリオ3件</li>
              <li>申請フロー・併用ルール・採択のポイントとチェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは断熱・ZEB化改修に特化した補助金ガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
            、SII省エネ補助の総論は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            を参照してください。本ページは2026年度時点の整理です。制度の詳細は最新公募要領をご確認ください。特定の電力会社・契約形態を推奨するものではありません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">断熱・ZEB化改修補助の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業務用建築物の断熱・ZEB化改修には、環境省・経済産業省が連携しSIIが執行するZEB支援事業や、国土交通省の建築物省エネ関連支援、SII執行の省エネ設備更新補助、自治体の独自補助など、重層的な制度が活用できます。窓・外皮の断熱と高効率設備・再エネを組合せ、建物全体の一次エネルギー消費を削減する『ZEB化』の発想が補助の中心です。
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
              業種別の電気料金見直しは{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、{" "}
              <Link href="/school-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">学校の電気料金見直し</Link>
              も参照ください。改修後の電気代は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金計算ツール</Link>
              で試算できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限は区分・延床・年度公募により変動します（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。本ページは2026年度時点の整理です。制度の詳細は最新公募要領をご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ZEBとは何か・4つの段階区分</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ZEBは断熱・高効率設備・再エネで建物の一次エネルギー消費を削減する建築です。ZEB Oriented → ZEB Ready → Nearly ZEB → ZEB と段階的に高められ、改修ZEB化では省エネ先行・再エネ後年の段階計画が現実的です。区分判定や補助の扱いは最新の公募要領によります。
            </p>
            <div className="mt-4 space-y-3">
              {zebStages.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ ZEBの段階・到達基準・補助の扱いは制度・年度公募により異なります。特定の電力会社・契約形態を推奨するものではありません（出典: 環境省・経済産業省/SII・各制度公募要領から整理／2026年度時点）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象となる建築物・対象者</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィス・学校・庁舎・病院・店舗・ホテル等の業務用建築物が広く対象として想定され、新築だけでなく既存建築の改修ZEB化も対象です。建物用途で負荷プロファイルが異なるため、現状把握に基づく設計が重要です。
            </p>
            <div className="mt-4 space-y-3">
              {targetBuildings.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不動産・テナントビルの観点は{" "}
              <Link href="/real-estate-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">不動産業の電気料金見直し</Link>
              、オフィスのピーク対策は{" "}
              <Link href="/office-building-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルのピークカット</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象となる工事（断熱・外皮・空調・照明・BEMS）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ZEB化改修の中心は、窓・外皮の断熱（負荷低減）、高効率空調・照明（効率向上）、BEMS（運用最適化）の一体改修です。断熱で熱負荷を下げてから高効率設備に更新すると、容量適正化も進み削減効果が高まります。
            </p>
            <div className="mt-4 space-y-3">
              {targetWorks.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ヒートポンプ空調は{" "}
              <Link href="/subsidy-heat-pump-introduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ヒートポンプ導入補助の活用ガイド</Link>
              、BEMSは{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              、省エネ診断は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              も参照ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助の考え方と上限（区分・延床・年度で変動）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助率・上限は、到達するZEB区分・延床面積・年度公募の枠組みで変わります。具体的な%・金額はここでは創作せず、最新の公募要領による確認を必須とします。費用あたりの削減量（一次エネルギー・CO2）が評価の重要な観点になりやすい領域です。
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
              ※ 補助率・上限・対象経費は区分（ZEB Oriented/Ready/Nearly ZEB/ZEB）・延床・年度公募により変動します。最新の公募要領による確認が前提です。本ページは2026年度時点の整理です。制度の詳細は最新公募要領をご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ3件 — 断熱・ZEB化改修の前後（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              建物用途の異なる3つの代表シナリオで、断熱・ZEB化改修による電気代の改善イメージをBefore/After方式で提示します。いずれも公開情報・一般的な改修像から再構成した代表シナリオで、数値は目安レンジ（▲%は目安）です。補助率・上限・区分の扱いは最新の公募要領によります。
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
              オフィスビルの見直し事例は{" "}
              <Link href="/case-study-office-building-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し事例</Link>
              、投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              現状把握から実績報告まで、断熱・ZEB化改修の補助申請の標準的な流れを整理します。原則として交付決定後に着工する必要がある点（決定前発注は対象外）に特に注意が必要です。
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
              、申請に必要な書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・採択の必要書類ガイド</Link>
              、公募時期は{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用ルール（国・自治体・税制の重層活用）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同一経費への国補助の重複は原則不可ですが、対象経費の切り分けや財源の違いで併用できるケースがあります。国補助＋自治体補助＋税制（GX・CN投資促進税制等）＋再エネ補助の重層活用で実質負担を抑えられる可能性があります。可否は最新の公募要領によります。
            </p>
            <div className="mt-4 space-y-3">
              {combinationRules.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用ルールの詳細は{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              、税制は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              、自治体制度は{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体の省エネ・脱炭素補助一覧</Link>
              も参照ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・よくある失敗例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              断熱・ZEB化改修で失敗しないための留意点を整理します。発注タイミング、区分・補助率の思い込み、効果検証体制、テナント調整、断熱軽視が成否を左右します。
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
              不採択の理由と対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              、補助金と契約見直しの優先順位は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              現状データに基づく削減根拠、断熱＋設備＋運用の一体設計、目指すZEB区分の明確化、ZEBプランナー等の専門家連携、複数年・段階計画の妥当性が、採択評価で効きやすいポイントです。採否は審査によります。
            </p>
            <div className="mt-4 space-y-3">
              {approvalPoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代削減の優先順位づけは{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代削減の見直しポイント</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報の更新と確認先</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              断熱・ZEB化補助の対象・補助率・上限・スケジュールは年度公募ごとに見直されます。本ページは2026年度時点の整理です。申請を検討する都度、環境省・経済産業省・国土交通省・SII等の公式情報と最新公募要領をご確認ください。
            </p>
            <div className="mt-4 space-y-3">
              {infoUpdate.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 再エネ賦課金は2026年度4.18円/kWh（確定）。本ページは2026年度時点の整理です。制度の詳細は最新公募要領をご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-lg font-semibold text-slate-900">断熱・ZEB化改修チェックリスト（12項目）</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              申請前にこのチェックリストで自社・自施設の状況を整理しましょう。1項目でも未確認があれば、採択や費用対効果に影響する可能性があります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金全体の進め方は{" "}
              <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
              も参照ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h3 className="text-lg font-semibold text-slate-900">シミュレーターで改修後の電気代を試算する</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              断熱・ZEB化改修で省エネ設備を導入した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。改修前後の年間削減額・投資回収を定量化し、申請する補助金や区分の優先順位づけに活用できます。再エネ賦課金は2026年度4.18円/kWh（確定）で、電気代の構成要素として試算に含めて確認できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>断熱＋高効率空調・照明導入後の年間削減額を試算する</li>
              <li>改修前後の投資回収年数を比較する</li>
              <li>省エネ＋再エネ（自家消費）の複合効果を見立てる</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金計算ツール</Link>
              からどうぞ。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、改修投資の優先順位づけにご活用ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/subsidies-overview", title: "補助金・助成金の全体像（総論）", description: "制度の種類と全体像のハブ。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（総論）", description: "国の主力省エネ補助金の制度概要。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択動向。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "改修前後の回収年数比較。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "税額控除・特別償却の要件と対象設備。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "業務用ヒートポンプ空調の補助活用。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "エネルギー見える化システムの補助。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "現状把握と申請根拠づくり。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・採択の必要書類ガイド", description: "申請に必要な書類と準備。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-local-government-list", title: "自治体の省エネ・脱炭素補助一覧", description: "国補助に上乗せできる自治体制度。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "設備投資と契約最適化の使い分け。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "オフィスの電力プロファイルと最適化。" },
              { href: "/school-electricity-cost-review", title: "学校の電気料金見直し", description: "教育施設の電力最適化と省エネ。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "テナントビル・賃貸の電気代最適化。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金計算ツール", description: "改修後の電気代を業種・規模別に試算。" },
            ]}
          />

          <ContentCta
            heading="断熱・ZEB化改修と電気代削減を専門家に相談する"
            description="断熱・ZEB化改修は、目指す区分の設計・対象経費の切り分け・採択される計画づくりが複雑です。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。特定の電力会社・契約形態を推奨するものではありません。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別電気料金計算ツールで試算する" },
              { href: "/subsidies-overview", label: "補助金・助成金の全体像を見る" },
              { href: "/", label: "シミュレーターで診断する" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="断熱・ZEB化改修の補助活用、専門家に相談しませんか？"
            description="断熱・外皮改修、高効率空調・照明・BEMSの計画、ZEB区分の設計、採択される事業計画書の作成は専門知識を要します。エネルギー情報センターは中立的立場で、断熱・ZEB化改修の補助活用と電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
