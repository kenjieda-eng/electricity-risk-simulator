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
  "コージェネレーション導入支援 完全ガイド｜対象・補助率・申請の進め方";
const pageDescription =
  "コージェネレーション（CGS: ガスエンジン・ガスタービン・燃料電池）導入支援の対象・補助の考え方・申請フローを整理。電気＋熱の同時利用による総合効率向上、BCP（停電時自立運転）、ピークカットと電気料金への効果を、熱需要の大きい施設（ホテル・病院・食品工場）の代表シナリオで解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "コージェネ 補助金",
    "CGS 導入支援",
    "燃料電池 補助金 法人",
    "熱電併給 補助",
    "BCP 自家発電 補助",
    "コージェネ財団",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-cogeneration-introduction",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-cogeneration-introduction",
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
    label: "コージェネ導入支援を取り巻く制度の全体像",
    detail:
      "コージェネレーション（CGS）の導入には、①経済産業省／SIIが所管する省エネ補助（高効率コージェネが対象になりうる）、②一般財団法人コージェネレーション・エネルギー高度利用センター（コージェネ財団, ACEJ）が関与する業務用・産業用CGSの普及・導入支援関連事業、③脱炭素・BCP関連の各種補助、④都道府県・市町村の独自補助、が活用の入口になります。補助率・上限の具体的な数値は事業区分・年度公募により変動するため、必ず最新の公募要領をご確認ください。本ページは2026年度時点の整理です。各制度の詳細・補助率・公募スケジュールは最新公募要領をご確認ください。特定の電力会社・契約形態を推奨するものではありません。（出典: 経済産業省/SII・コージェネ財団・各制度公募要領から整理／2026年度時点）",
  },
  {
    label: "総論・他制度との使い分け（カニバリ回避）",
    detail:
      "本ページは『コージェネレーション（熱電併給）設備』の導入支援に特化した整理です。補助金制度全般の概要・公募スケジュール・採択率の総論は別ページで扱っています。本ページではガスエンジン・ガスタービン・燃料電池といったCGSの方式、電気と熱を同時に使う総合効率の考え方、熱需要の大きい施設での費用対効果、停電時の自立運転（BCP）に焦点を当てます。補助金とシミュレーターによる電気代試算（D-1）の使い分けは後段で説明します。",
  },
  {
    label: "なぜ熱需要の大きい施設で費用対効果が高いのか",
    detail:
      "コージェネは発電と同時に発生する排熱を給湯・暖房・蒸気・吸収冷凍機（冷房）として利用することで、燃料の一次エネルギーを無駄なく使い切る仕組みです。電気だけでなく熱も恒常的に使う施設（ホテル・病院・食品工場など）ほど、排熱の利用率が上がり総合効率が高まります。逆に熱需要が乏しい施設では排熱を捨てることになり費用対効果が下がるため、導入判断には熱需要プロファイルの精査が欠かせません。",
  },
  {
    label: "電気料金と燃料費の両面で見る必要性",
    detail:
      "コージェネは電気を自家発電する一方で、ガス等の燃料費が発生します。したがって損得は『削減できる買電額＋熱の代替価値』と『燃料費＋設備の償却・保守』のバランスで決まり、電気料金単価とガス単価のスプレッド（差）に大きく依存します。電気代単価・産業別エネルギー消費の最新動向は新電力ネット等のデータも参照しながら、自社の熱需要・電力需要に当てはめて見立てることが重要です。",
  },
  {
    label: "BCP（事業継続）価値の位置づけ",
    detail:
      "コージェネは停電時に系統から切り離して自立運転できる構成が選べるため、24時間稼働の病院やデータを止められない施設では『事業継続のための備え』としての価値があります。ただしBCP価値は金額換算が難しく、補助の採否や費用対効果も審査・前提条件により異なります。本ページは導入を断定的に推奨するものではなく、判断材料を中立的に整理するものです。（出典: コージェネ財団・各制度公募要領から整理／2026年度時点）",
  },
];

const cgsBasics = [
  {
    label: "コージェネレーション（CGS）とは",
    detail:
      "コージェネレーション（熱電併給）は、ガスや燃料を用いて発電し、その際に生じる排熱を同時に回収・利用するシステムです。系統電力を買って別途ボイラーで熱を作る従来方式に比べ、一次エネルギーの利用効率（総合効率）が高まる点が最大の特徴です。電気を作りながら熱も使える施設で本領を発揮します。（出典: コージェネ財団・経済産業省から整理／2026年度時点）",
  },
  {
    label: "主な方式①ガスエンジン",
    detail:
      "ガスエンジン方式は中小〜中規模の業務・産業施設で広く用いられる方式です。比較的小容量から導入でき、温水・蒸気の回収に向くため、ホテル・病院・福祉施設・食品工場など熱需要のある施設で採用例が多い構成です。具体的な発電効率や排熱回収率は機種・運転条件により異なるため、メーカー仕様と運用前提で確認します。",
  },
  {
    label: "主な方式②ガスタービン",
    detail:
      "ガスタービン方式は比較的大容量で、高温の排熱から蒸気を多く回収できるため、蒸気需要の大きい工場（食品・化学等）に向きます。大規模な熱・電力を同時に必要とする施設で総合効率を高めやすい一方、容量が大きいぶん熱需要との整合がより重要になります。",
  },
  {
    label: "主な方式③燃料電池",
    detail:
      "燃料電池方式（業務用・産業用）は化学反応で発電するため発電効率が高く、排熱も回収できます。低騒音・低振動で都市部施設にも置きやすい特性があります。導入支援の対象や要件は制度・年度により異なるため、最新の公募要領で対象範囲を確認してください。",
  },
  {
    label: "総合効率という考え方",
    detail:
      "コージェネの評価軸は『発電効率』単体ではなく、発電＋排熱利用を合わせた『総合効率』です。排熱をどれだけ無駄なく使えるか（熱の利用率）が総合効率を左右するため、熱を恒常的に使う施設ほど有利になります。コージェネ固有の効率の数値は機種・運転条件で変わるため、本ページでは特定の％を断定しません。最新公募要領・メーカー仕様で確認してください。",
  },
];

const targetItems = [
  {
    name: "高効率コージェネレーション設備（CGS本体）",
    role: "ガスエンジン／ガスタービン／燃料電池",
    detail:
      "高効率なコージェネ設備本体（発電機＋排熱回収）が導入支援の中心的な対象になりうる設備です。一次エネルギー削減・CO2削減への寄与、総合効率の高さが評価の観点になります。対象となる方式・効率要件は制度・年度公募により異なるため、最新公募要領をご確認ください。（出典: 経済産業省/SII・コージェネ財団から整理／2026年度時点）",
  },
  {
    name: "排熱利用設備（蒸気・温水・吸収冷凍機）",
    role: "排熱回収ボイラー／吸収式冷凍機 等",
    detail:
      "CGSの排熱を蒸気・温水・冷房（吸収冷凍機）に活用する周辺設備も、総合効率の向上に資する範囲で対象に含まれうる構成です。排熱を使い切る設計ほど費用対効果が高まるため、本体と排熱利用設備をセットで検討するのが基本です。",
  },
  {
    name: "自立運転・連系まわりの設備（BCP対応）",
    role: "自立運転対応／受変電・制御",
    detail:
      "停電時に系統から切り離して自立運転するための制御・受変電まわりの構成は、BCP価値に直結します。対象範囲・要件は制度により異なるため、自立運転を要件化したい場合は公募要領で対象設備・条件を確認します。",
  },
  {
    name: "対象者（業務用・産業用の需要家）",
    role: "法人・事業者",
    detail:
      "業務用・産業用に熱と電気を恒常的に使う法人・事業者が主な対象者像です。中小企業・大企業の別や事業区分により補助率・上限が変わる制度があり、補助率・上限は事業区分・年度公募により変動します。最新の公募要領による区分をご確認ください。特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const subsidyApproach = [
  {
    label: "補助率・上限は『事業区分・年度公募により変動』が原則",
    detail:
      "コージェネ関連の補助率・上限は、所管制度・事業区分（中小/大企業、先進/指定 等）・年度の公募により変動します。本ページでは固有の％を断定せず、『補助率・上限は事業区分・年度公募により変動』『最新の公募要領による』という前提で整理します。実際の数値は申請前に必ず最新公募要領で確認してください。（出典: 経済産業省/SII・各制度公募要領から整理／2026年度時点）",
  },
  {
    label: "参考: SII省エネ補助の規模区分の目安",
    detail:
      "高効率コージェネが省エネ補助（SII）の対象になりうる場合、SII省エネ補助の規模区分の一般的な目安として、補助率は中小1/2・大企業1/3、上限は先進事業で15億円・指定設備導入事業で1億円といった枠が知られています。ただしコージェネが対象となるか、どの枠に該当するかは年度公募で異なるため、最新公募要領で対象・区分を確認してください。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "評価される観点（採否は審査による）",
    detail:
      "省エネ・脱炭素系の補助では、一次エネルギー削減量・CO2削減量・費用対効果（補助額あたりの削減量）などが評価の観点になることが一般的です。コージェネは熱と電気を同時に使える施設で総合効率が高まりやすく、これらの観点で評価されやすい構成です。ただし採否は審査によるため、断定的な見込みは持たず、要件適合と効果の根拠づけを丁寧に行うことが重要です。",
  },
  {
    label: "補助は『現金給付』、税制は『税負担軽減』",
    detail:
      "補助金は原則として返済不要の現金給付、税制優遇（特別償却・税額控除等）は税負担を軽減する仕組みで、性格が異なります。大型のコージェネ投資では補助と税制の組合せ余地もありますが、併用可否・調整ルールは制度・年度で異なります。詳細は併用ルールの整理を参照し、最新公募要領をご確認ください。",
  },
];

const bcpEffects = [
  {
    label: "総合効率向上による一次エネルギー削減",
    detail:
      "電気と熱を同時に得ることで、買電＋別途のボイラー燃焼に比べ一次エネルギーの利用効率が高まりうる点がコージェネの基本効果です。削減幅は熱の利用率・運転パターン・機種で変わるため、固有の％は本ページでは示しません。自社の熱需要に当てはめた試算が必要です。",
  },
  {
    label: "ピークカット・契約電力への効果",
    detail:
      "コージェネで自家発電する分だけ系統からの買電（特にピーク時）を抑えられれば、ピークカットや契約電力（デマンド）の抑制につながりうる効果が期待できます。これは基本料金・需要側の負担に影響しますが、効果は運転計画次第のため、自社の負荷曲線で見立てることが重要です。",
  },
  {
    label: "BCP（停電時の自立運転）",
    detail:
      "自立運転対応の構成にすれば、停電時にも一定の電力・熱を確保できる可能性があり、24時間稼働の病院やライン停止を避けたい工場でBCP価値があります。ただしBCP価値は金額換算が難しく、必要容量・運転条件・燃料供給の前提で変わります。導入を断定的に推奨するものではありません。",
  },
  {
    label: "電気代と燃料費のスプレッド依存",
    detail:
      "コージェネの経済メリットは、削減できる電気料金（買電単価）とガス等の燃料費の差（スプレッド）に大きく依存します。電気料金単価が高く、ガス単価が相対的に安い局面ほど有利になりやすい一方、逆の局面ではメリットが縮みます。最新の電気代単価・産業別エネルギー消費は新電力ネット等も参照してください。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "再エネ賦課金など買電コストの構造も確認",
    detail:
      "買電を減らせば、電力量料金だけでなく再エネ賦課金（2026年度4.18円/kWh（確定））など従量で乗る負担も自家発電分だけ縮小しうる点も論点です。一方で全体最適は省エネ・契約見直し・再エネ調達との比較で決まるため、コージェネ単体の損得だけでなく総合的に判断します。（出典: 経済産業省/資源エネルギー庁・各制度公募要領から整理／2026年度時点）",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1: 宿泊主体のホテル（給湯・暖房の熱需要が大きい）目安レンジ",
    before:
      "Before: 客室給湯・大浴場・暖房の熱をボイラーで賄い、電気は全量を系統から購入。電気料金とガス（重油）燃料費が両建てで重く、ピーク時の買電単価上振れも負担になっていた。",
    after:
      "After: 給湯・暖房の熱需要に合わせたガスエンジンコージェネを導入候補とし、排熱を給湯・暖房に活用。導入支援（補助率・上限は事業区分・年度公募により変動）と、電気＋燃料費を合わせた最適化を前提に検討。自立運転構成で停電時の最低限の客室機能維持（BCP）も視野に入れた。",
    result:
      "Result: 代表シナリオ（数値は目安レンジ）。熱の利用率が高いほど総合効率が上がり、買電削減＋熱の代替で電気＋燃料費の最適化が期待できる構図。具体的な削減額は熱需要・電気/ガス単価で変動するため断定せず、補助後の投資回収は最新公募要領と自社条件で試算する。",
  },
  {
    title: "代表シナリオ2: 24時間稼働の病院（BCP重視）目安レンジ",
    before:
      "Before: 24時間の給湯・空調・医療機器で電気・熱を恒常的に使用。停電時の電源確保は非常用発電機のみで、平常時の省エネ・電気代対策とBCPが別々の投資になりがちだった。",
    after:
      "After: 平常時は熱電併給で総合効率を高めつつ、停電時は自立運転で重要負荷を支える構成を検討。導入支援（補助率・上限は事業区分・年度公募により変動）の対象可否を最新公募要領で確認し、平常時の電気＋燃料費最適化とBCPを一体で評価した。",
    result:
      "Result: 代表シナリオ（数値は目安レンジ）。恒常的な熱需要があるためコージェネと親和性が高く、平常時の効率向上と停電時の備えを兼ねうる。ただしBCP価値は金額換算が難しく採否も審査による。導入を断定的に推奨するものではなく、必要容量と運転計画の精査が前提。",
  },
  {
    title: "代表シナリオ3: 食品工場（蒸気・温水需要が大きい）目安レンジ",
    before:
      "Before: 加熱・殺菌・洗浄で蒸気・温水を大量に使用し、ボイラー燃料費が大きい。電力も製造ラインで多消費し、買電単価の上振れが原価を圧迫していた。",
    after:
      "After: 蒸気需要に見合うガスタービン/ガスエンジンコージェネを導入候補とし、排熱回収ボイラーで蒸気を確保。電気＋燃料費を合わせた最適化を前提に、導入支援（補助率・上限は事業区分・年度公募により変動）の対象可否を確認した。",
    result:
      "Result: 代表シナリオ（数値は目安レンジ）。蒸気・温水を使い切れるほど総合効率が高まり、買電削減＋蒸気の代替で電気＋燃料費の最適化が見込める構図。具体値は熱需要・電気/ガス単価で変動するため断定しない。特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 熱需要・電力需要の把握（省エネ診断の活用）",
    detail:
      "まず施設の熱需要（給湯・暖房・蒸気・冷房）と電力需要の時間別プロファイルを把握します。コージェネは熱の利用率が肝心なので、熱負荷の精査が出発点です。省エネ診断を活用すると、申請に必要な現状データ・根拠が整います。",
  },
  {
    label: "STEP2: 方式・容量の検討と費用対効果の試算",
    detail:
      "熱需要に見合う方式（ガスエンジン/ガスタービン/燃料電池）と容量を検討し、削減できる買電額＋熱の代替価値と、燃料費＋償却・保守を比較します。電気/ガス単価のスプレッドに左右されるため、保守的な前提でレンジ試算します。",
  },
  {
    label: "STEP3: 対象制度・公募の確認（補助率・上限は変動）",
    detail:
      "コージェネが対象になりうる制度（省エネ補助/SII・コージェネ財団関連の導入支援等）と公募区分を確認します。補助率・上限は事業区分・年度公募により変動するため、最新の公募要領で対象設備・要件・スケジュールを確認します。",
  },
  {
    label: "STEP4: 事業計画書の作成（効果の根拠づけ）",
    detail:
      "一次エネルギー削減・CO2削減・総合効率・BCP価値など、評価される観点に沿って効果を根拠づけて記述します。採否は審査によるため、要件適合と定量的な効果の妥当性を丁寧に示すことが重要です。",
  },
  {
    label: "STEP5: 公募申請〜交付決定〜導入〜実績報告",
    detail:
      "公募期間内に申請し、交付決定後に発注・契約します（交付決定前の発注は対象外になるのが一般的）。導入後は省エネ・CO2削減効果の実績報告が求められることが多く、計測体制を申請段階から準備しておくとスムーズです。",
  },
];

const combinationRules = [
  {
    label: "同一設備への国補助の重複は原則不可",
    detail:
      "同一の設備・経費に対して複数の国庫補助を重複して受けることは原則できません。対象設備や経費を分ける、国と自治体で財源が異なる場合は併用可、といったルールがあり、併用可否は制度ごとに異なります。最新公募要領をご確認ください。",
  },
  {
    label: "補助と税制（特別償却・税額控除）の関係",
    detail:
      "補助（現金給付）と税制優遇（税負担軽減）は性格が異なり、大型投資では組合せ余地があります。ただし補助で取得価額が圧縮される分の調整ルールがある場合があり、税理士・所管窓口への事前確認が必須です。",
  },
  {
    label: "国補助＋自治体補助の重層活用",
    detail:
      "国の補助に自治体の上乗せ・横出し補助を組合せられるケースがあります。コージェネ・分散電源・BCPを対象にした自治体補助もあるため、立地自治体の産業労働部・商工会議所で最新公募を確認します。",
  },
  {
    label: "省エネ・再エネ調達・契約見直しとの優先順位",
    detail:
      "コージェネは選択肢の一つで、省エネ（需要削減）・再エネ調達・契約メニュー見直しと費用対効果を比較して優先順位を決めるのが基本です。まず削減余地と契約見直し効果を試算し、そのうえでコージェネの上乗せ効果を評価します。",
  },
];

const cautionItems = [
  {
    label: "失敗例①熱需要の見込み違いで効率が出ない",
    detail:
      "発電容量に対して熱需要が不足すると排熱を捨てることになり、想定した総合効率・費用対効果が出ません。コージェネ固有の効率の数値を一般値で見込まず、自社の実需要に合わせた容量設計が不可欠です。",
  },
  {
    label: "失敗例②電気/ガス単価スプレッドの変動を織り込まない",
    detail:
      "メリットは電気料金と燃料費の差に依存するため、単価変動でメリットが縮むリスクがあります。保守的な単価前提と感度分析（単価が動いた場合のレンジ）を行い、楽観値だけで判断しないことが重要です。最新の電気代単価は新電力ネット等も参照してください。",
  },
  {
    label: "失敗例③交付決定前の発注で対象外",
    detail:
      "補助は原則『交付決定後』に発注・契約した設備が対象です。リードタイムの長いコージェネ設備は、公募スケジュールと調達タイミングの管理が特に重要です。発注を急ぐ場合は所管窓口に対象範囲を確認します。",
  },
  {
    label: "失敗例④保守・運転負担・燃料調達の見落とし",
    detail:
      "コージェネは継続的な保守・運転管理と燃料調達が前提です。初期投資だけでなくライフサイクルコスト（保守・燃料・更新）を織り込まないと、補助後でも採算が崩れることがあります。",
  },
  {
    label: "注意: 採否は審査・本ページは推奨ではない",
    detail:
      "実在する制度のみを対象に整理していますが、採否は審査によります。本ページは導入を断定的に推奨するものではなく、判断材料を中立的に整理するものです。特定の電力会社・契約形態を推奨するものではありません。本ページは2026年度時点の整理です。各制度の詳細・補助率・公募スケジュールは最新公募要領をご確認ください。（出典: 経済産業省/SII・コージェネ財団・各制度公募要領から整理／2026年度時点）",
  },
];

const adoptionPoints = [
  {
    label: "熱需要との整合を最優先に設計する",
    detail:
      "コージェネは熱を使い切れて初めて効果が出ます。熱負荷プロファイルに合わせた方式・容量設計（過大容量を避ける）が、総合効率と費用対効果、ひいては採択評価の土台になります。",
  },
  {
    label: "一次エネルギー削減・CO2削減を定量で示す",
    detail:
      "省エネ・脱炭素系の評価では削減量の根拠が重視されます。現状の使用量データ（省エネ診断等）を基に、削減量・費用対効果を定量的に示すと説得力が高まります。ただし採否は審査によります。",
  },
  {
    label: "BCP・レジリエンスの価値を計画に織り込む",
    detail:
      "24時間稼働施設では、平常時の効率向上に加え停電時の自立運転（BCP）を計画に位置づけると、投資の必要性が伝わりやすくなります。BCP価値は金額換算が難しい点は正直に整理します。",
  },
  {
    label: "対象・区分・スケジュールを最新公募要領で確認",
    detail:
      "コージェネが対象となるか、どの事業区分・補助率・上限に該当するかは年度公募で変わります。補助率・上限は事業区分・年度公募により変動するため、申請前に最新公募要領で対象設備・要件・締切を確認します。",
  },
];

const updateNotes = [
  {
    label: "情報の更新頻度と確認先",
    detail:
      "補助制度・公募要領は年度ごとに更新されます。経済産業省・資源エネルギー庁・SII・コージェネ財団（ACEJ）の公式情報を一次情報として確認し、補助率・上限・対象設備・スケジュールは申請前に最新公募要領で必ずご確認ください。本ページは2026年度時点の整理です。",
  },
  {
    label: "数値・前提の扱い",
    detail:
      "本ページではコージェネ固有の効率や補助率の具体％を断定せず、SII省エネ補助の規模区分の目安（中小1/2・大企業1/3／先進15億・指定1億）のみ参考として記載しています。再エネ賦課金は2026年度4.18円/kWh（確定）です。その他の数値は実需要・最新公募要領に基づき試算してください。",
  },
];

const checklistItems = [
  "施設の熱需要（給湯・暖房・蒸気・冷房）を時間別に把握しているか（省エネ診断の活用）",
  "発電容量と熱需要が整合し、排熱を使い切れる設計になっているか",
  "電気/ガス単価のスプレッドを保守的に置き、感度分析をしたか",
  "削減できる買電額＋熱の代替価値を定量化したか",
  "燃料費＋保守・更新を含むライフサイクルコストを織り込んだか",
  "コージェネが対象となる制度・事業区分を最新公募要領で確認したか",
  "補助率・上限が事業区分・年度公募で変動する前提を理解しているか",
  "自立運転（BCP）の要否と必要容量を整理したか",
  "交付決定後に発注するスケジュール管理ができているか",
  "実績報告のための計測体制を準備しているか",
  "省エネ・再エネ調達・契約見直しと費用対効果を比較したか",
  "採否は審査による前提で、要件適合と効果の根拠づけを準備したか",
];

const faqItems = [
  {
    question: "コージェネレーション（CGS）はどんな施設に向いていますか？",
    answer:
      "電気だけでなく熱（給湯・暖房・蒸気・冷房）を恒常的に使う施設に向いています。具体的にはホテル・病院・福祉施設・食品工場などです。コージェネは発電時の排熱を使い切れるほど総合効率が高まるため、熱需要の大きい施設で費用対効果が高くなる傾向があります。逆に熱需要が乏しい施設では排熱を捨てることになり効果が下がります。コージェネ固有の効率の数値は機種・運転条件で変わるため、自社の熱需要に当てはめた試算が必要です。",
  },
  {
    question: "コージェネ導入にはどんな補助・支援がありますか？",
    answer:
      "経済産業省／SIIが所管する省エネ補助（高効率コージェネが対象になりうる）や、一般財団法人コージェネレーション・エネルギー高度利用センター（コージェネ財団, ACEJ）が関与する業務用・産業用CGSの導入支援関連事業、脱炭素・BCP関連の補助、自治体の独自補助などが活用の入口になります。ただし補助率・上限は事業区分・年度公募により変動し、コージェネが対象となるか・どの枠かも年度で異なります。最新の公募要領で対象・要件をご確認ください。（出典: 経済産業省/SII・コージェネ財団・各制度公募要領から整理／2026年度時点）",
  },
  {
    question: "補助率や上限はどのくらいですか？",
    answer:
      "補助率・上限は事業区分・年度公募により変動するため、固定値ではありません。参考として、高効率コージェネがSII省エネ補助の対象になりうる場合、SII省エネ補助の規模区分の一般的な目安は補助率が中小1/2・大企業1/3、上限が先進事業で15億円・指定設備導入事業で1億円といった枠が知られています。ただしコージェネが対象か・どの枠に該当するかは年度公募で異なるため、必ず最新の公募要領による区分をご確認ください。",
  },
  {
    question: "コージェネで電気料金はどのくらい下がりますか？",
    answer:
      "削減幅は熱の利用率・運転パターン・電気/ガス単価のスプレッド・機種で大きく変わるため、一律の数値は示せません。経済メリットは『削減できる買電額＋熱の代替価値』と『燃料費＋償却・保守』のバランスで決まります。電気料金単価が高くガス単価が相対的に安い局面ほど有利になりやすい一方、逆では縮みます。自社の熱・電力需要と最新の単価で試算してください。",
  },
  {
    question: "停電時にも使えますか（BCP）？",
    answer:
      "自立運転に対応した構成を選べば、停電時にも系統から切り離して一定の電力・熱を確保できる可能性があり、24時間稼働の病院やライン停止を避けたい工場でBCP価値があります。ただし必要容量・運転条件・燃料供給の前提により異なり、BCP価値は金額換算が難しい点に留意が必要です。本ページは導入を断定的に推奨するものではありません。",
  },
  {
    question: "コージェネと省エネ・再エネ調達はどう使い分けますか？",
    answer:
      "まず需要削減（省エネ）と契約メニュー見直しで電気代の基礎を下げ、再エネ調達で脱炭素化、そのうえでコージェネを熱電併給の選択肢として比較するのが基本的な順序です。コージェネは熱需要の大きい施設で上乗せ効果が出やすい一方、熱需要が乏しい場合は他の手段が優先になることもあります。費用対効果を横並びで比較して優先順位を決めてください。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "交付決定前に設備を発注するとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助は『交付決定後』に発注・契約した設備が対象であることが一般的で、交付決定前の発注は補助を受けられません。コージェネはリードタイムが長いため、公募スケジュールと設備調達のタイミング管理が特に重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。最新公募要領をご確認ください。",
  },
  {
    question: "申請すれば必ず採択されますか？",
    answer:
      "いいえ。採否は審査によります。本ページは実在する制度のみを対象に判断材料を中立的に整理するもので、採択を保証したり導入を断定的に推奨したりするものではありません。一次エネルギー削減・CO2削減・総合効率・BCP価値などの観点で効果を定量的に根拠づけ、要件への適合を丁寧に示すことが採択可能性を高めるうえで重要です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "一般財団法人コージェネレーション・エネルギー高度利用センター（コージェネ財団, ACEJ）", url: "https://www.ace.or.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "経済産業省 資源エネルギー庁（省エネ・分散電源・BCP政策）", url: "https://www.enecho.meti.go.jp/" },
  { name: "経済産業省（補助・税制の所管）", url: "https://www.meti.go.jp/" },
];

export default function SubsidyCogenerationIntroductionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-cogeneration-introduction"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "コージェネレーション導入支援", url: "https://simulator.eic-jp.org/subsidy-cogeneration-introduction" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">コージェネレーション導入支援</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            コージェネレーション導入支援 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            コージェネレーション（CGS: ガスエンジン・ガスタービン・燃料電池）は、電気と熱を同時に得て一次エネルギーを使い切る熱電併給の仕組みです。本ページでは導入支援の対象・補助の考え方・申請フローを、総合効率向上・BCP（停電時自立運転）・ピークカットと電気料金への効果とあわせ、熱需要の大きい施設（ホテル・病院・食品工場）の代表シナリオで整理します。補助率・上限は事業区分・年度公募により変動するため、最新の公募要領をご確認ください。
</p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>コージェネ（熱電併給）の仕組みと総合効率の考え方</li>
              <li>ガスエンジン・ガスタービン・燃料電池の方式と対象設備・対象者</li>
              <li>補助の考え方（補助率・上限は事業区分・年度公募により変動）</li>
              <li>BCP・ピークカット効果と、熱需要の大きい施設の代表シナリオ3件</li>
              <li>申請フロー・併用ルール・採択のポイント・注意点と12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページはコージェネレーション設備の導入支援に特化した整理です。補助金制度全般の概要は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の総合ガイド</Link>
            、省エネ補助の総論は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">コージェネ導入支援の制度全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コージェネ導入には、経済産業省／SIIの省エネ補助、コージェネ財団（ACEJ）関連の導入支援、脱炭素・BCP関連補助、自治体補助が活用の入口になります。補助率・上限は事業区分・年度公募により変動し、最新の公募要領による確認が前提です。
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
              自社の電気代削減余地は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で試算したうえで、コージェネの上乗せ効果を比較するのが基本です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">コージェネレーションとは（電気＋熱・総合効率）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コージェネは発電と排熱利用を同時に行い、一次エネルギーの利用効率（総合効率）を高める仕組みです。ガスエンジン・ガスタービン・燃料電池の方式があり、熱を使い切れる施設ほど有利になります。コージェネ固有の効率の数値は機種・条件で変わるため断定しません。
            </p>
            <div className="mt-4 space-y-3">
              {cgsBasics.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱需要の大きい施設例として{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテルの電気料金見直し</Link>
              、{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象設備・対象者</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高効率コージェネ本体、排熱利用設備、自立運転まわりの構成、そして業務用・産業用の需要家が対象像です。対象となる方式・要件・区分は制度・年度公募により異なるため、最新の公募要領で対象範囲を確認します。
            </p>
            <div className="mt-4 space-y-3">
              {targetItems.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断の活用は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              、ヒートポンプとの比較は{" "}
              <Link href="/subsidy-heat-pump-introduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ヒートポンプ導入補助の活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助の考え方と上限</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助率・上限は事業区分・年度公募により変動するのが原則です。参考としてSII省エネ補助の規模区分の目安（中小1/2・大企業1/3／先進15億・指定1億）を示しますが、コージェネが対象か・どの枠かは年度で異なります。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyApproach.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限・対象は2026年度時点の整理です。コージェネ固有の補助率％は創作せず、最新の公募要領による区分を必ず確認してください。（出典: 経済産業省/SII・コージェネ財団・各制度公募要領から整理／2026年度時点）
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP・ピークカット効果と電気料金</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              総合効率向上による一次エネルギー削減、ピークカット・契約電力への効果、停電時の自立運転（BCP）、電気/ガス単価スプレッドへの依存を整理します。効果は運転計画・単価前提で変わるため、自社条件での見立てが前提です。
            </p>
            <div className="mt-4 space-y-3">
              {bcpEffects.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、電気/ガス単価スプレッドを保守的に置いて試算してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ3件（ホテル／病院／食品工場・目安レンジ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱需要の大きい3施設で、電気代＋燃料費の最適化とBCP価値の位置づけをBefore/After方式で整理します。いずれも代表シナリオ（数値は目安レンジ）で、具体値は熱需要・電気/ガス単価で変動するため断定しません。導入を断定的に推奨するものではありません。
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
              食品工場の電力プロファイルは{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場の電気料金見直し</Link>
              、ホテルのコージェネ事例は{" "}
              <Link href="/case-study-hotel-resort-cogeneration" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・リゾートのコージェネ事例</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請フロー（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱・電力需要の把握から実績報告まで、コージェネ導入支援の標準的な流れを整理します。交付決定前の発注は対象外になるのが一般的な点に特に注意します。
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
              、必要書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付の必要書類ガイド</Link>
              。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用ルール（重複・税制・自治体）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同一設備への国補助の重複は原則不可、補助と税制の関係、国＋自治体の重層活用、省エネ・再エネ調達・契約見直しとの優先順位を整理します。併用可否は制度ごとに異なるため最新公募要領をご確認ください。
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
              併用の詳細は{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              、GX・CN税制は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用ガイド</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・失敗例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱需要の見込み違い、単価スプレッドの変動、交付決定前発注、保守・燃料の見落としが代表的な失敗例です。採否は審査による前提で、楽観値だけで判断しないことが重要です。
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
              不採択時の対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              、補助か契約見直しかの優先順位は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金 vs 契約見直しの優先順位</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱需要との整合を最優先に設計し、一次エネルギー削減・CO2削減を定量で示し、BCP価値を計画に織り込み、対象・区分・スケジュールを最新公募要領で確認することが採択のポイントです。採否は審査によります。
            </p>
            <div className="mt-4 space-y-3">
              {adoptionPoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              公募スケジュールと採択率の見方は{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              、投資回収の試算は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報の更新について</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助制度・公募要領は年度ごとに更新されます。一次情報（経済産業省・資源エネルギー庁・SII・コージェネ財団）を確認し、補助率・上限・対象・スケジュールは申請前に最新公募要領でご確認ください。
            </p>
            <div className="mt-4 space-y-3">
              {updateNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本ページは2026年度時点の整理です。各制度の詳細・補助率・公募スケジュールは最新公募要領をご確認ください。（出典: 経済産業省/SII・コージェネ財団・各制度公募要領から整理／2026年度時点）
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-lg font-semibold text-slate-900">シミュレーターでコージェネ検討前の電気代を試算する</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              コージェネは選択肢の一つです。まず現行契約での年間電気代・上昇リスクを把握し、省エネ・契約見直しの効果を確認したうえで、コージェネの上乗せ効果を比較するのが定石です。{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で自社条件に当てはめて試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>省エネ・契約見直しによる削減余地を試算する</li>
              <li>買電削減（コージェネ）の上乗せ効果を比較材料にする</li>
              <li>電気/ガス単価スプレッドを保守的に置いて投資回収を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/subsidies-overview", title: "補助金・助成金の総合ガイド", description: "制度全体像と使い分けのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "コージェネ検討前の電気代・削減余地を試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（総論）", description: "高効率設備の省エネ補助の制度概要。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "熱の電化との比較検討に。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "熱・電力需要の把握と申請根拠づくり。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 法人活用ガイド", description: "税額控除・特別償却と補助の組合せ。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の見方。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "効果を根拠づける計画書の作り方。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付の必要書類ガイド", description: "申請から交付までの書類実務。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金 vs 契約見直しの優先順位", description: "投資前にやるべき順番の整理。" },
              { href: "/case-study-hotel-resort-cogeneration", title: "ホテル・リゾートのコージェネ事例", description: "熱需要の大きい宿泊施設の検討例。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し（業種）", description: "宿泊施設の電力・熱プロファイル。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し（業種）", description: "24時間稼働施設の電力・BCP。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し（業種）", description: "蒸気・温水需要の最適化。" },
              { href: "/subsidy-medical-welfare-strategy", title: "医療・福祉の補助金活用戦略", description: "病院・福祉施設の補助活用の進め方。" },
            ]}
          />

          <ContentCta
            heading="コージェネ導入と電気代削減を整理する"
            description="コージェネは熱需要の大きい施設で効果が出やすい選択肢です。まずシミュレーターで現行の電気代・削減余地を試算し、補助金の全体像と照らして優先順位を整理しましょう。補助率・上限は事業区分・年度公募により変動するため、最新公募要領をあわせてご確認ください。特定の電力会社・契約形態を推奨するものではありません。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別シミュレーターで試算する" },
              { href: "/subsidies-overview", label: "補助金の全体像を見る" },
              { href: "/", label: "トップページへ" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="コージェネ導入の判断、専門家に相談しませんか？"
            description="方式・容量の見極め、熱需要との整合、補助制度の対象確認、電気＋燃料費の最適化は専門知識を要します。エネルギー情報センターは中立的立場で、コージェネ導入と電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
