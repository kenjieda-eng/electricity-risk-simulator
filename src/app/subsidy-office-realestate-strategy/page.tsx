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
  "オフィス・不動産業の補助金活用戦略 完全ガイド｜対象・補助率・申請の進め方";
const pageDescription =
  "オフィス・不動産業（自社ビル・賃貸オフィス・ビル管理）に特化した補助金活用戦略。ZEB化・断熱改修・高効率空調照明・BEMS・変圧器をSII省エネ補助・ZEB支援・税制で導入する実務を、オーナー/テナント分離（split incentive）課題やグリーンリースも踏まえ、規模別代表シナリオ・採択戦略・併用ルールで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "オフィス 補助金 省エネ",
    "不動産 ZEB 補助金",
    "ビル 省エネ改修 補助",
    "BEMS 補助金 法人",
    "賃貸ビル グリーンリース",
    "テナントビル 脱炭素",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-office-realestate-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-office-realestate-strategy",
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
    label: "オフィス・不動産業が使える補助・税制の全体像",
    detail:
      "オフィスビル・賃貸オフィス・ビル管理事業の省エネ・脱炭素投資には、①経産省/SII省エネ補助（高効率空調・照明・変圧器・BEMS等の設備更新）、②環境省・経産省・国土交通省のZEB（ネット・ゼロ・エネルギー・ビル）支援、③GX・カーボンニュートラル投資促進税制（税額控除・特別償却）、④自治体の建築物省エネ・脱炭素改修補助、の各層が活用できます。補助金（返済不要）と税制優遇（税負担軽減）を組合せることで、ビル改修投資の実質負担を圧縮できます。補助率・上限の具体値は区分・延床・年度公募により変動するため、必ず最新の公募要領をご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『オフィス・不動産業』に特化した補助金活用戦略です。各制度の概要・公募スケジュール・採択率の総論や、補助金全体の地図は別ページで整理しています。本ページでは自社ビル・賃貸オフィス・ビル管理事業に固有の対象設備（空調・照明・変圧器・BEMS・断熱・ZEB化）、ビル一棟単位での改修計画、オーナーとテナントの便益分離（split incentive）課題への対応に焦点を当てます。なお本ガイドは制度活用の判断材料の整理です。",
  },
  {
    label: "オフィス・不動産業の電力消費構造と補助の親和性",
    detail:
      "オフィスビルは空調・照明・換気・OA機器・エレベーターが電力を消費し、なかでも空調と照明が大きな割合を占めます。築年数の経過したビルほど高効率設備への更新余地が大きく、改修による電気代削減効果が見込めるため、費用対効果（補助額あたりのエネルギー削減）の観点で補助制度との親和性が高い分野です。ただし採否は審査によるため、効果が見込めるからといって採択を断定することはできません。",
  },
  {
    label: "資産価値・テナント訴求と補助を一体で考える",
    detail:
      "ビルの省エネ・ZEB化はランニングコスト削減だけでなく、環境認証（BELS等）取得による資産価値・賃貸競争力の向上にもつながります。脱炭素対応を求めるテナント企業が増えるなか、省エネ改修を『資産価値・賃貸競争力を維持するための投資』として位置づけ、その必要性を事業計画に明記することが、補助申請のストーリー設計上も有効です。",
  },
  {
    label: "オーナー・テナント分離（split incentive）という固有課題",
    detail:
      "賃貸ビルでは、省エネ投資の費用をオーナーが負担する一方、電気代削減の便益はテナントが受け取る『便益分離（split incentive）』が起こりがちです。この構造が改修投資を停滞させる要因になるため、グリーンリース条項や共用部・専有部の切り分けといった工夫が重要になります。補助制度の活用は、この投資のハードルを下げる一手段として検討できます。本ガイドは中立的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const mainSubsidies = [
  {
    name: "経産省/SII 省エネ補助（空調・照明・変圧器・BEMS等）",
    role: "経済産業省・SII／省エネ設備更新の主力",
    detail:
      "高効率空調・LED照明・高効率変圧器（トップランナー変圧器）・BEMS・ヒートポンプ等の省エネ設備更新が対象となる枠が用意されています。補助率・上限額は事業類型・年度公募により変動するため、最新の公募要領による確認が必須です。省エネ率や費用対効果が採択評価の観点とされ、オフィスビルの設備更新で活用しやすい王道の枠です（出典: 経済産業省/SII・各制度公募要領から整理／2026年度時点）。",
  },
  {
    name: "ZEB（ネット・ゼロ・エネルギー・ビル）支援",
    role: "環境省・経産省・国土交通省／建物全体の省エネ化",
    detail:
      "断熱・高効率設備・創エネを組合せ、建物全体の一次エネルギー消費を大きく削減するZEB化（ZEB Oriented／ZEB Ready／Nearly ZEB／ZEB）への支援です。新築だけでなく既存ビルの改修も対象となる枠があり、達成水準（ZEBの区分）や延床面積によって要件・補助内容が異なります。補助率・上限の具体値は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください（出典: 環境省・経済産業省・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    role: "経済産業省・国税庁／税額控除・特別償却",
    detail:
      "脱炭素関連設備の取得について、一定の要件のもとで税額控除または特別償却が受けられる税制措置です。補助金（返済不要の現金給付）とは仕組みが異なり税負担を軽減するもので、補助金と併用可能なケースもありますが、取得価額の調整等のルールがあるため要件確認が必須です。大型のビル設備投資・自家消費設備で活用が検討できます（出典: 経済産業省・国税庁・各制度公募要領から整理／2026年度時点・要件確認必須）。",
  },
  {
    name: "自治体の建築物省エネ・脱炭素改修補助",
    role: "都道府県・市町村／上乗せ・横出し",
    detail:
      "東京都をはじめ多くの自治体が、建築物の省エネ改修・ZEB化・再エネ設備導入に対する独自補助を整備しています。国の補助と対象設備や財源を切り分けることで併用可能なケースもあり、重層活用で実質負担をさらに圧縮できる場合があります。制度内容・補助率・上限は自治体・年度により大きく異なるため、最新の公募要領による確認が前提です（出典: 各自治体・各制度公募要領から整理／2026年度時点）。",
  },
  {
    name: "建材・断熱・高効率設備に関する各種支援",
    role: "国土交通省・環境省ほか／断熱・外皮性能",
    detail:
      "窓・外壁等の断熱改修や高効率設備の導入を後押しする支援が、建築物の省エネ性能向上の文脈で用意されています。既存オフィスビルの外皮性能改善は空調負荷の低減につながり、ZEB化の前提工事としても位置づけられます。対象範囲・補助率・上限は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください（出典: 国土交通省・環境省・各制度公募要領から整理／2026年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率・上限は『区分・延床・年度公募』で変動する",
    detail:
      "オフィス・不動産業向けの補助は、SII省エネ補助の一部で中小1/2・大企業1/3、ZEBは達成区分（ZEB Oriented/Ready/Nearly ZEB/ZEB）と延床面積で要件・補助内容が分かれる、といった形で制度ごとに大きく異なります。SII省エネ補助の先進事業は上限15億円・指定設備導入事業は上限1億円が目安として案内される一方、ZEBやその他の枠の補助率・上限は区分・延床・年度公募により変動するため、断定せず最新の公募要領による確認が前提です。",
  },
  {
    label: "事業類型・達成水準の選択が起点になる",
    detail:
      "単体設備の更新なら省エネ補助の指定設備導入系の枠、建物全体の高度省エネならZEB系の枠、と投資内容と目標水準で制度・枠を選びます。ZEBは目指す区分（Oriented→Ready→Nearly ZEB→ZEB）が上がるほど削減要件が厳しくなる一方で支援も手厚くなる傾向があるため、ビルの規模・用途・改修余地に見合った水準設定が出発点です。具体的な要件は最新の公募要領をご確認ください。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回・枠により変動します。各制度の採択結果は事務局が公表するため、固定値として扱わず、最新の事務局公表値を確認のうえ申請戦略を立てることが重要です。本ガイドでは採択率の推測値は用いず、採否は審査によるものである点を前提に整理しています。",
  },
  {
    label: "費用対効果（エネルギー削減あたり補助額）の重要性",
    detail:
      "省エネ補助は『補助額あたりのエネルギー削減量』が採択評価の重要な観点とされます。オフィスビルでは空調・照明が消費の大きな割合を占めるため、効果の大きい設備から優先することが費用対効果を高める鍵です。逆に効果の小さい設備の単体申請は評価されにくい傾向があるため、効果の大きい設備を軸に据えるのが採択戦略の基本となります。",
  },
];

const targetEquipment = [
  {
    label: "高効率空調（GHP/EHP・ヒートポンプ・熱源更新）",
    detail:
      "オフィスビルの電力消費で大きな割合を占める空調の高効率化は、最も効果が見込める更新の一つです。老朽化した熱源機やパッケージエアコンの更新、ヒートポンプの導入は省エネ補助の対象となる枠があり、ビル全体の一次エネルギー削減に寄与します。ヒートポンプの活用は別ガイドも参照ください。補助率・上限は年度公募により変動するため最新の公募要領をご確認ください。",
  },
  {
    label: "LED照明・照明制御",
    detail:
      "オフィスの照明をLED化し、人感センサー・調光・タイムスケジュール制御を組合せると照明電力を大きく削減できます。投資回収が比較的早く、自治体補助との併用もしやすい王道設備です。共用部・専有部それぞれで対象範囲が異なる場合があるため、賃貸ビルでは切り分けの整理が重要です。",
  },
  {
    label: "高効率変圧器（トップランナー変圧器）",
    detail:
      "ビルの受変電設備に用いる変圧器を高効率なトップランナー変圧器へ更新することで、待機・負荷損失を抑え無理なく省エネが図れます。設備更新時期に合わせた省エネ補助の活用が検討でき、特別高圧・高圧受電のビルでは効果が見込めます。受電設備全体の最適化は別途専門的な検討が必要です。",
  },
  {
    label: "BEMS（ビルエネルギー管理システム）",
    detail:
      "BEMSを導入してフロア・テナント・用途別にエネルギー使用を見える化し、空調・照明の最適制御やピーク制御を行うと、運用面での省エネと需要平準化が進みます。BEMSは省エネ補助の対象となる枠があるうえ、補助金の実績報告に必要な使用量データの取得にも役立ちます。BEMS/FEMSの詳細は別ガイドも参照ください。",
  },
  {
    label: "断熱改修・窓改修（外皮性能）とZEB化",
    detail:
      "窓・外壁等の断熱改修は空調負荷を下げ、ZEB化の前提工事としても重要です。外皮性能の改善＋高効率設備＋創エネ（太陽光等）を組合せることで、ZEB Oriented〜ZEBの各区分を目指せます。対象範囲・補助率は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください。",
  },
];

const splitIncentive = [
  {
    label: "便益分離（split incentive）の構造",
    detail:
      "賃貸ビルでは、省エネ改修の費用をオーナー（貸主）が負担する一方、電気代削減という便益の多くを専有部を使うテナント（借主）が受け取る、という非対称が生じます。この『投資する人と得をする人が違う』構造が、賃貸ビルの省エネ投資が進みにくい根本要因です。共用部はオーナー、専有部はテナント、と費用と便益の帰属がずれる点を最初に整理することが対策の出発点です。",
  },
  {
    label: "グリーンリースによる費用と便益の再配分",
    detail:
      "グリーンリースは、省エネ改修の費用とその効果（光熱費削減分）をオーナーとテナントで分担・再配分する賃貸借契約上の取り決めです。例えばオーナーが空調・照明を高効率化し、削減した光熱費の一部を『グリーンリース料』として賃料に上乗せする、といった形で双方にメリットを生む設計が可能です。これにより投資のハードルを下げ、補助制度の活用余地も広げられます。",
  },
  {
    label: "共用部先行・専有部協調のステップ設計",
    detail:
      "まずオーナー単独で意思決定できる共用部（廊下・エントランス・受変電・共用空調・共用照明）の省エネ改修を先行し、効果と実績をつくったうえで、テナントの協力が必要な専有部の改修へ段階的に広げる進め方が現実的です。共用部の改修だけでもビル全体のエネルギー削減に寄与し、ZEB化の積み上げにもつながります。",
  },
  {
    label: "テナント脱炭素ニーズと一体で訴求する",
    detail:
      "脱炭素対応を求めるテナント企業の増加は、賃貸ビルの省エネ・ZEB化を後押しする追い風です。環境認証取得や省エネ性能の高さを賃貸競争力として訴求し、テナントの脱炭素ニーズと改修投資を結びつけることで、split incentiveの壁を越える合意形成がしやすくなります。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1: 中規模自社オフィスビル（高圧・延床約5,000m²／空調照明＋BEMS）",
    before:
      "Before: 築20年超の自社ビル。老朽化したパッケージ空調・蛍光灯照明のまま運用し、空調・照明が電気代の大きな割合を占めていた。設備更新の必要は認識していたが投資判断を先送りしていた。",
    after:
      "After: 省エネ補助を活用し、高効率空調への熱源更新・全館LED化・照明制御・BEMS導入を一体で実施。BEMSで用途別の見える化を行い、運用面の省エネと実績報告体制を同時に整備した。投資内容・補助率・上限は最新の公募要領に基づき検討。",
    result:
      "Result（目安レンジ）: 年間電気代 ▲約15〜20%（目安）／空調・照明の高効率化と運用最適化が寄与／BEMSにより継続的な効果管理と実績報告が容易に。数値は条件により変動し、採否は審査による。",
  },
  {
    title: "代表シナリオ2: 賃貸オフィス（高圧・ZEB Oriented改修＋グリーンリース）",
    before:
      "Before: テナント入居の賃貸オフィスビル。オーナーは省エネ改修を検討するも、削減効果の多くがテナント側に帰属する便益分離（split incentive）がネックで投資判断が進まなかった。",
    after:
      "After: 共用部の高効率空調・LED化・断熱改修を先行し、ZEB Oriented水準を目標に設定。グリーンリース条項で削減効果の一部を賃料に反映し、費用と便益をオーナー・テナントで再配分。ZEB支援・自治体補助の活用可否を最新の公募要領で確認のうえ申請を検討した。",
    result:
      "Result（目安レンジ）: 共用部中心の改修で年間電気代 ▲約10〜18%（目安）／環境認証取得で賃貸競争力が向上／グリーンリースで投資回収の合意形成が進展。数値は条件により変動し、採否は審査による。",
  },
  {
    title: "代表シナリオ3: 不動産会社の保有ビル一括省エネ（複数棟・段階申請）",
    before:
      "Before: 複数の保有ビルを持つ不動産会社。各棟で空調・照明・変圧器の高経年化が進み、ビルごとに省エネ余地が大きかったが、一括投資の負担が課題だった。",
    after:
      "After: 効果の大きい棟・設備から優先順位をつけ、複数年計画で省エネ補助・ZEB支援・GX税制を段階的に活用。共用部の空調・照明・変圧器・BEMSを軸に、棟ごとに最適な枠を選定。併用可否・財源の切り分けは最新の公募要領で確認した。",
    result:
      "Result（目安レンジ）: ポートフォリオ全体で年間電気代 ▲約12〜18%（目安）／段階申請でキャッシュフロー負担を平準化／環境性能の底上げで保有資産価値の維持に寄与。数値は条件により変動し、採否は審査による。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 省エネ診断・現状把握",
    detail:
      "まずビルのエネルギー使用状況を用途別（空調・照明・換気・動力等）に把握し、省エネ余地の大きい設備・棟を特定します。省エネ診断を活用すると、補助申請に必要な現状データと改善計画の根拠が整います。賃貸ビルでは共用部・専有部の切り分けもこの段階で整理します。",
  },
  {
    label: "STEP2: 制度・枠の選定と目標水準の決定",
    detail:
      "投資内容・規模・目的に応じて、省エネ補助の指定設備系か、ZEB系か、税制併用か、自治体補助の上乗せか、を選定します。ZEBを目指す場合は達成区分（Oriented〜ZEB）と延床に応じた要件を確認します。補助率・上限は区分・延床・年度公募により変動するため、最新の公募要領による確認が前提です。",
  },
  {
    label: "STEP3: 事業計画書・改修計画の作成",
    detail:
      "省エネ・脱炭素効果の定量試算、投資の必要性（資産価値・賃貸競争力・テナント要請）、実現可能性を記述します。賃貸ビルではグリーンリース等によるsplit incentiveへの対応方針も計画に盛り込むと説得力が高まります。採否は審査によるため、断定的な表現は避け、根拠と数値で構成します。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請し、採択・交付決定を待ってから設備を発注します。交付決定前の発注は原則として補助対象外となるため、公募スケジュールと設備調達のタイミング管理が必須です。リードタイムの長い設備は特に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告・効果検証",
    detail:
      "設備導入後、エネルギー削減効果の実績報告（使用量データ）を提出します。BEMS・計測体制があると報告がスムーズで、効果の継続管理にも役立ちます。報告不備は補助金返還リスクにつながるため、申請段階から測定計画を立てておくことが重要です。",
  },
];

const stackingRules = [
  {
    label: "同一設備への国補助の重複は原則不可",
    detail:
      "同一の設備・経費に対して複数の国庫補助を重複して受けることは原則としてできません。ただし対象設備を分ける、国と自治体で財源が異なる場合に併用可、といったルールがあるため、対象範囲の切り分けで併用余地が生まれます。併用可否は制度ごとに異なるため、最新の公募要領による事前確認が必須です。",
  },
  {
    label: "補助金と税制（GX・CN投資促進税制）の併用",
    detail:
      "補助金（返済不要の現金給付）とGX・CN投資促進税制（税負担の軽減）は仕組みが異なり、同一設備でも併用できるケースがあります。ただし補助で取得価額が圧縮される分、税制の控除対象額が調整される等のルールがあるため、税理士・所管窓口への事前確認が必須です。大型のビル設備投資では補助＋税制で実質負担を圧縮できる場合があります。",
  },
  {
    label: "国補助＋自治体補助の重層活用",
    detail:
      "国の省エネ補助・ZEB支援に、自治体（東京都等）の建築物省エネ・脱炭素改修補助を上乗せ・横出しで組合せられるケースがあります。設備・経費・財源の切り分けで併用可能な範囲を見極めることが、実質負担を最大限圧縮する上級テクニックです。自治体制度は年度・地域で大きく異なるため最新の公募要領をご確認ください。",
  },
  {
    label: "グリーンリースと補助の組合せ",
    detail:
      "賃貸ビルでは、補助制度で投資のハードルを下げつつ、グリーンリースで費用と便益をオーナー・テナント間で再配分する、という二段構えが有効です。補助はあくまで投資判断を後押しする一要素であり、賃貸借契約上の取り決めと併せて設計することで、split incentiveの壁を越えやすくなります。",
  },
];

const cautionItems = [
  {
    label: "交付決定前の発注は対象外",
    detail:
      "補助金は原則『交付決定後』に発注・契約した設備が対象です。交付決定前に発注すると補助対象外になるため、公募スケジュールと設備調達のタイミング管理が必須です。空調熱源・受変電設備などリードタイムの長い設備は特に注意が必要です。",
  },
  {
    label: "賃貸ビルの対象範囲・所有関係の整理不足",
    detail:
      "賃貸ビルでは共用部・専有部の所有・管理関係が複雑で、補助対象範囲や申請主体の整理が不十分だと手戻りが発生します。誰が投資し、誰が便益を受け、どこまでが対象設備かを、申請前に明確化しておくことが重要です。グリーンリース等の取り決めもこの段階で詰めます。",
  },
  {
    label: "ZEB区分・延床要件の取り違え",
    detail:
      "ZEB支援は達成区分（Oriented〜ZEB）や延床面積によって要件・補助内容が異なります。目指す水準と実際に達成できる水準のずれや、延床要件の取り違えは不採択や計画変更につながります。区分・延床・年度公募により変動するため、最新の公募要領で要件を必ず確認してください。",
  },
  {
    label: "実績報告・効果測定の負担",
    detail:
      "省エネ補助は交付後にエネルギー削減効果の実績報告（使用量データ提出）が求められます。BEMS・計測体制を整えておくと報告がスムーズです。報告不備は補助金返還リスクにつながるため、申請段階から測定計画を立てることが重要です。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回・枠により変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で戦略を立てることが重要です。採否は審査によるものであり、本ガイドでは採択を断定する表現は用いていません。なお本整理は中立的な情報提供であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const strategyItems = [
  {
    label: "効果の大きい設備から優先（採択戦略）",
    detail:
      "補助は費用対効果（エネルギー削減あたり補助額）が評価の観点とされるため、消費の大きい空調・照明から優先するのが採択戦略です。効果の小さい設備を単体申請するより、効果の大きい設備を軸に申請する方が評価されやすい傾向があります。",
  },
  {
    label: "資産価値・賃貸競争力との一体訴求",
    detail:
      "省エネ・ZEB化を環境認証取得・資産価値維持・テナント訴求と一体で位置づけ、投資の必要性を事業計画に明記すると説得力が高まります。単なるコスト削減だけでなく、ビルの競争力維持という経営的意義を打ち出すことが有効です。",
  },
  {
    label: "国補助＋自治体補助＋税制の重層活用",
    detail:
      "国の省エネ補助・ZEB支援＋自治体の上乗せ補助＋GX税制を組合せることで、実質負担を最大限圧縮できる場合があります。設備・経費・財源の切り分けで併用可能なケースを見極めるのが上級テクニックです。併用可否は最新の公募要領による確認が前提です。",
  },
  {
    label: "共用部先行・複数棟の段階申請",
    detail:
      "賃貸ビルは共用部から先行し、不動産会社の複数棟保有は効果の大きい棟から複数年計画で段階申請する戦略が有効です。年度ごとの予算・公募に合わせて計画的に補助を獲得し、キャッシュフロー負担を平準化できます。",
  },
  {
    label: "省エネ（電気を減らす）＋創エネ・調達の組合せ",
    detail:
      "高効率設備で電気の使用量を減らし、太陽光自家消費等の創エネやPPA等の調達を組合せると、電気代削減と脱炭素を同時に進められます。需要側のPPA活用は別ガイドも参照ください。",
  },
];

const checklistItems = [
  "ビルのエネルギー使用を用途別（空調・照明・換気・動力）に把握しているか",
  "効果の大きい設備（空調・照明）を優先候補にしているか",
  "賃貸ビルは共用部・専有部の対象範囲・所有関係を整理したか",
  "便益分離（split incentive）への対応（グリーンリース等）を検討したか",
  "目指すZEB区分・延床要件を最新の公募要領で確認したか",
  "投資規模・目的に応じた制度・枠を選定したか",
  "GX・CN投資促進税制の併用可否を確認したか",
  "国補助・自治体補助・税制の重層活用の可否を整理したか",
  "資産価値・賃貸競争力・テナント要請を事業計画に反映したか",
  "交付決定後に発注するスケジュール管理ができているか",
  "実績報告のための計測体制（BEMS等）を準備しているか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
];

const faqItems = [
  {
    question: "オフィス・不動産業が最初に検討すべき補助は何ですか？",
    answer:
      "効果の大きい空調・照明の省エネ更新なら、経産省/SIIの省エネ補助（高効率空調・LED・変圧器・BEMS等の枠）が起点になりやすいです。建物全体の高度な省エネを目指すならZEB支援、大型投資ならGX・CN投資促進税制の併用、自治体補助の上乗せも検討できます。補助率・上限は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください。本ページはオフィス・不動産業に特化した戦略を中立的に整理したものです（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "賃貸ビルで省エネ投資が進みにくいのはなぜですか？",
    answer:
      "費用をオーナーが負担する一方、電気代削減の便益はテナントが受け取るという便益分離（split incentive）が起こりやすいためです。対策としては、グリーンリース条項で削減効果を賃料等に反映して費用と便益を再配分する、オーナー単独で判断できる共用部の改修を先行する、といった工夫があります。補助制度はこの投資のハードルを下げる一手段として活用できます。",
  },
  {
    question: "既存の古いオフィスビルでもZEB化の補助は使えますか？",
    answer:
      "既存ビルの改修を対象とするZEB支援の枠もあります。ただしZEBは達成区分（ZEB Oriented／ZEB Ready／Nearly ZEB／ZEB）や延床面積によって要件・補助内容が異なり、既存ビルでは現実的にZEB OrientedやReadyを目標とするケースが多くなります。対象範囲・補助率・上限は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください。採否は審査によるため断定はできません（出典: 環境省・経済産業省・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "補助金とGX・CN投資促進税制は併用できますか？",
    answer:
      "ケースにより併用可能です。補助金（返済不要の現金給付）とGX・CN投資促進税制（税負担の軽減）は仕組みが異なり、同一設備でも併用できる場合があります。ただし補助で取得価額が圧縮される分、税制の控除対象額が調整される等のルールがあるため、税理士・所管窓口への事前確認が必須です。大型のビル設備投資では補助＋税制で実質負担を圧縮できる場合があります（出典: 経済産業省・国税庁・各制度公募要領から整理／2026年度時点・要件確認必須）。",
  },
  {
    question: "国の補助と自治体（東京都等）の補助は重ねられますか？",
    answer:
      "対象設備や財源を切り分けることで併用可能なケースがあります。一方で、同一の設備・経費に対して複数の国庫補助を重複して受けることは原則できません。自治体補助は制度内容・補助率・上限が年度・地域で大きく異なるため、最新の公募要領で併用可否を必ず確認してください。本整理は中立的な情報提供であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "交付決定前に空調や受変電設備を発注するとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助金は『交付決定後』に発注・契約した設備が対象で、交付決定前の発注は補助を受けられません。空調熱源・受変電設備などリードタイムの長い設備は特に、公募スケジュールと調達タイミングの管理が重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。",
  },
  {
    question: "BEMSの導入は補助申請に役立ちますか？",
    answer:
      "役立ちます。BEMSは省エネ補助の対象となる枠があるうえ、用途別・テナント別のエネルギー使用の見える化と最適制御により運用面の省エネが進みます。さらに補助金の実績報告に必要な使用量データの取得にも活用でき、効果の継続管理にも有効です。BEMS/FEMSの詳細は別ガイドも参照ください。",
  },
  {
    question: "オフィス・不動産業の補助金活用後の電気代はどう試算できますか？",
    answer:
      "高効率設備の導入による削減効果は、現行の契約条件・使用量を起点に試算します。当サイトの業種別の電気料金計算ツールやシミュレーターで、自社ビルの条件に当てはめて補助前後の年間削減額・投資回収のイメージを掴むことができます。数値は条件により変動し、採否は審査によるため、最新の公募要領と併せてご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "環境省（脱炭素・ZEB関連）", url: "https://www.env.go.jp/" },
  { name: "経済産業省（省エネ・GX政策）", url: "https://www.meti.go.jp/" },
  { name: "国土交通省（建築物省エネ）", url: "https://www.mlit.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function SubsidyOfficeRealEstateStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-office-realestate-strategy"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "オフィス・不動産業の補助金活用戦略", url: "https://simulator.eic-jp.org/subsidy-office-realestate-strategy" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">オフィス・不動産業の補助金活用戦略</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            オフィス・不動産業の補助金活用戦略 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            オフィスビル・賃貸オフィス・ビル管理事業は、空調・照明を中心に電力を消費し、高効率設備への更新やZEB化で電気代削減と資産価値向上が見込める分野です。本ページではSII省エネ補助・ZEB支援・GX投資促進税制・自治体補助を組合せ、空調・照明・変圧器・BEMS・断熱改修を導入する実務を、オーナー/テナント分離（split incentive）課題やグリーンリースも踏まえ、規模別代表シナリオ・採択戦略・併用ルール・申請フローまで整理します。
          </p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>オフィス・不動産業が使える省エネ補助・ZEB支援・税制・自治体補助の全体像</li>
              <li>空調・照明・変圧器・BEMS・断熱（ZEB化）といった対象設備と補助</li>
              <li>オーナー・テナント分離（split incentive）課題とグリーンリースでの対策</li>
              <li>規模別の代表シナリオ3件（Before/After・目安レンジ）</li>
              <li>申請フロー・併用ルール・注意点と12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは2026年度時点の整理です。補助率・上限・採択率・要件は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください。各制度の概要・採択率の総論は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。本ガイドは中立的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">オフィス・不動産業が使える補助の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビル・賃貸オフィス・ビル管理事業の省エネ・脱炭素投資には、国の省エネ補助・ZEB支援・GX税制・自治体補助の各層が活用できます。補助金（返済不要）と税制優遇（税負担軽減）を組合せ、資産価値・賃貸競争力と一体で訴求することで、費用対効果と申請ストーリーを高められます。
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
              オフィスビルの電力プロファイルは{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、賃貸・保有ビルは{" "}
              <Link href="/real-estate-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">不動産業の電気料金見直し</Link>
              も参照ください。自社ビルの条件で試算するなら{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金計算ツール</Link>
              が便利です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">総論との使い分け（カニバリ回避）と主要制度</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページはオフィス・不動産業に特化した戦略です。各制度の概要・スケジュール・採択率の総論は別ページに譲り、ここではビル固有の制度活用に焦点を当てます。オフィス・不動産業が活用できる主要な補助・税制を、役割・対象設備別に整理します。具体的な補助率・上限は最新の公募要領による確認が前提です。
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
              ※ 補助率・上限・採択率・要件は区分・延床・年度公募により変動します。最新の公募要領を必ずご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。本整理は制度活用の判断材料であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象設備 — 空調・照明・変圧器・BEMS・断熱（ZEB）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助で導入しやすいオフィス・不動産業固有の設備を整理します。消費の大きい空調・照明から優先し、変圧器・BEMS・断熱（ZEB化）を組合せるのが採択戦略の基本です。
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
              、省エネ診断は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              を参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助率・上限の考え方（区分・延床・年度で変動）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助率・上限額・採択率の水準と、費用対効果の重要性を整理します。オフィス・不動産業向けの補助は制度・区分・延床・年度公募で大きく変わるため、断定せず最新の事務局公表値・公募要領での確認が前提です。
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
              ※ SII省エネ補助の一部で中小1/2・大企業1/3、先進事業15億円・指定設備導入事業1億円が目安として案内される一方、ZEB・その他の補助率/上限は区分・延床・年度公募により変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。詳細は最新の公募要領による確認が前提です（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              、見直し優先度との関係は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先度</Link>
              で解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オーナー・テナント分離（split incentive）の課題と対策</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              賃貸ビル特有の『費用はオーナー・便益はテナント』という便益分離（split incentive）の構造と、グリーンリース・共用部先行・テナント協調による対策を整理します。これは賃貸ビルの省エネ投資が進みにくい根本要因であり、補助制度の活用と併せて設計することが重要です。
            </p>
            <div className="mt-4 space-y-3">
              {splitIncentive.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              賃貸・保有ビルのコスト構造は{" "}
              <Link href="/real-estate-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">不動産業の電気料金見直し</Link>
              、見直しの基本観点は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代削減の見直しポイント</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の代表シナリオ3件 — 補助前後の投資回収（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィス・不動産業の代表的な3パターンで、補助活用による実質負担圧縮と電気代削減のイメージをBefore/After方式で提示します。いずれも公開情報・一般的な改修パターンから再構成した代表シナリオで、数値は目安レンジです。採否は審査によるため、削減幅・採択を断定するものではありません。
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
            <p className="mt-3 text-xs text-slate-500">
              ※ 代表シナリオ（いずれも目安レンジ）。電気代削減率・投資回収は契約条件・使用量・設備内容により変動し、採否は審査によります。最新の公募要領をご確認ください。本整理は中立的な情報提供を目的としています（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルの具体的な見直し事例は{" "}
              <Link href="/case-study-office-building-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し事例</Link>
              、ピーク対策は{" "}
              <Link href="/office-building-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルのピークカット</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断から実績報告まで、補助申請の標準的な流れを整理します。賃貸ビルでは共用部・専有部の切り分けとグリーンリースの整理を早い段階で行い、交付決定前の発注は対象外となる点に特に注意します。
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
              、申請・交付の必要書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付の必要書類ガイド</Link>
              を参照ください。本整理は中立的な情報提供であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用ルール（国×自治体×税制×グリーンリース）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助・税制・自治体補助・グリーンリースをどう重ねるかを整理します。同一設備への国補助の重複は原則不可ですが、対象設備や財源の切り分け、税制との併用、自治体補助の上乗せで実質負担を圧縮できる場合があります。併用可否は最新の公募要領による確認が前提です。
            </p>
            <div className="mt-4 space-y-3">
              {stackingRules.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用ルールの詳細は{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              、GX税制は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              、自治体補助は{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体の省エネ・脱炭素補助一覧</Link>
              、再エネ調達は{" "}
              <Link href="/subsidy-demand-side-ppa" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">需要家主導型PPA補助の活用ガイド</Link>
              を参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・失敗例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助活用で失敗しないための注意点を整理します。発注タイミング・賃貸ビルの対象範囲整理・ZEB区分の取り違え・実績報告・採択率の扱いが成否を左右します。
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
              不採択ポイントと再申請戦略は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オフィス・不動産業の採択戦略とチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              効果の大きい設備からの優先、資産価値・賃貸競争力との一体訴求、国×自治体×税制の重層活用、共用部先行・複数棟の段階申請、省エネ＋創エネ・調達の組合せが採択戦略の柱です。下記チェックリストで自社状況を整理しましょう。
            </p>
            <div className="mt-4 space-y-3">
              {strategyItems.map((item) => (
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
              特別高圧受電ビルの料金構造は{" "}
              <Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧の電気料金の仕組み</Link>
              、SII省エネ補助の総論は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金（総論）</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報の更新と確認先</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助制度は年度ごとに公募要領が更新され、補助率・上限・要件・採択率は区分・延床・年度公募により変動します。本ページは2026年度時点の整理であり、申請にあたっては各制度の最新の公募要領をご確認ください。再エネ賦課金は2026年度4.18円/kWh（確定）です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>省エネ補助・SII関連設備の枠は{" "}
                <a href="https://sii.or.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">SII（環境共創イニシアチブ）</a>
                で最新公募を確認
              </li>
              <li>ZEB・脱炭素施策は{" "}
                <a href="https://www.env.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">環境省</a>
                ・{" "}
                <a href="https://www.meti.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">経済産業省</a>
                で確認
              </li>
              <li>建築物省エネ・断熱関連は{" "}
                <a href="https://www.mlit.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">国土交通省</a>
                で確認
              </li>
              <li>電力単価・産業別エネルギー消費の動向は新電力ネットのデータも参照</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本ページは2026年度時点の整理です。補助率・上限・採択率・要件は区分・延床・年度公募により変動するため、最新の公募要領をご確認ください（出典: 環境省・経済産業省/SII・国土交通省・各制度公募要領から整理／2026年度時点）。本整理は中立的な情報提供であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-lg font-semibold text-slate-900">シミュレーターで補助活用後の電気代を試算する</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ設備を導入した場合の電気代削減効果を、自社ビルの条件に当てはめて試算できます。補助前後の投資回収・年間削減額のイメージを定量化し、申請する制度・設備の優先順位づけに活用できます。賃貸ビルでは共用部・専有部の切り分けやグリーンリースの設計とあわせてご検討ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>高効率空調・照明・BEMS導入後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>省エネ＋創エネ・調達の複合効果を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、省エネ投資の優先順位づけにご活用ください。数値は条件により変動し、採否は審査によります。本整理は中立的な情報提供であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/subsidies-overview", title: "補助金・助成金の全体像（総論）", description: "法人が使える補助・税制の地図。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（総論）", description: "国の主力省エネ補助の制度概要。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率（総論）", description: "公募タイミングと採択率の動向。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "税額控除・特別償却の要件と対象設備。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "ビルのエネルギー管理システム補助。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "業務用ヒートポンプの補助金活用。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "申請前の現状把握と診断活用。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付の必要書類", description: "申請から交付までの書類整理。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-local-government-list", title: "自治体の省エネ・脱炭素補助一覧", description: "東京都等の上乗せ補助の確認先。" },
              { href: "/subsidy-demand-side-ppa", title: "需要家主導型PPA補助の活用ガイド", description: "再エネ調達と補助の組合せ。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "オフィスの電力プロファイルと最適化。" },
              { href: "/real-estate-electricity-cost-review", title: "不動産業の電気料金見直し", description: "賃貸・保有ビルのコスト構造。" },
              { href: "/case-study-office-building-review", title: "オフィスビルの電気料金見直し事例", description: "見直しの具体的なケース。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金計算ツール", description: "自社ビルの条件で電気代を試算。" },
            ]}
          />

          <ContentCta
            heading="オフィス・不動産業の補助金活用と電気代削減を整理する"
            description="SII省エネ補助・ZEB支援・GX税制・自治体補助の組合せは、対象設備・補助率・併用ルール・賃貸ビルのsplit incentive対応が複雑です。まず自社ビルの条件で削減余地を試算し、補助・助成金の全体像とあわせて検討材料を整理しましょう。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別電気料金計算ツールで試算する" },
              { href: "/subsidies-overview", label: "補助金・助成金の全体像を見る" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="オフィス・不動産業の補助金活用、専門家に相談しませんか？"
            description="高効率設備の選定、ZEB化の水準設定、補助・税制の組合せ、賃貸ビルのグリーンリース設計は専門知識を要します。エネルギー情報センターは中立的立場で、オフィス・不動産業の補助金活用と電気代削減の判断材料を整理します。特定の電力会社・契約形態を推奨するものではありません。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
