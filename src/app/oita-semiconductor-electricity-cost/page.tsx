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
  "大分県の半導体・電子工場の電気料金完全ガイド｜大分・国東の先端電子集積と九州電力";
const pageDescription =
  "大分県の半導体・電子製造業に特化。大分・国東・中津の先端電子・半導体関連の集積を核に、クリーンルーム24時間稼働・実装・検査の電力プロファイル、九州電力エリアの単価事情（原子力4基＋太陽光導入量国内最大級で燃調感応度が相対的に低め）、契約最適化、補助金・PPA活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "大分県 半導体 電気料金",
    "国東 電子 電気代",
    "九州電力 特別高圧 半導体",
    "クリーンルーム 電力",
    "半導体 後工程 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/oita-semiconductor-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/oita-semiconductor-electricity-cost",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const electricSituation = [
  {
    label: "大分県の半導体・電子産業集積 — 大分・国東・中津の臨海＋空港近接の立地構造",
    detail:
      "大分県は大分市臨海コンビナートに隣接する電子・半導体関連と素材産業、国東市の空港近接の先端電子・半導体関連の集積、中津市の電子・自動車部品を含む製造集積と、県内各方面に半導体・電子の事業所が広く立地しています。九州の半導体サプライチェーンの一角として、後工程（実装・検査）や電子デバイス、素材・部材の供給を担う事業所が多く、クリーンルームを抱える高圧・特別高圧の電力需要家が多数立地しています。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に九州電力エリア固有の論点を整理します（出典: 大分県統計・経産省工業統計から整理）。なお同じ半導体クラスタでも、熊本＝菊陽町（JASM等の前工程ファブ）、大分＝先端電子・関連の集積と、検索意図・対象を分離して整理します。",
  },
  {
    label: "半導体・電子工場の電力プロファイル — クリーンルーム空調・実装・検査",
    detail:
      "半導体・電子工場の電力消費の中心は、クリーンルームの恒温恒湿空調（外気処理・HEPAろ過・差圧管理）、実装ライン（リフロー炉・はんだ・マウンター）、純水・ドライエア製造、検査・測定装置、コンプレッサーです。とりわけクリーンルーム空調と恒温恒湿管理は24時間連続稼働で停止できず、外気処理・再熱・加湿のために多くのエネルギーを要するため、工場全体の電力消費に占める空調・用役の比率が高い傾向があります（一般に空調・用役で40〜60%程度を占めるとされます／出典: 業界団体・省エネ事例から整理）。温湿度精度を維持しつつ空調運用を最適化することが、電力単価最適化の主戦場となります。",
  },
  {
    label: "半導体後工程・実装ラインの恒常負荷とデマンド特性",
    detail:
      "大分県内には半導体の後工程（組立・実装・検査）や電子部品の実装を担う事業所が多く、リフロー炉・恒温槽・バーンイン・測定装置が長時間連続で稼働します。品種切替や検査条件変更のたびに恒温恒湿の負荷が変動し、デマンド（kW）のピークが発生しやすいのが特徴です。連続稼働とバッチ的な検査工程が混在する工程構成では、ピーク需要の平準化が契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "24時間恒温恒湿・純水/ドライエア供給に伴うベース負荷",
    detail:
      "半導体・電子製造ではクリーンルームの温湿度・清浄度を品質保証のため常時維持する必要があり、空調・純水・ドライエア供給が24時間連続で稼働します。生産ラインを止めても清浄度回復のコストを避けるため空調を完全停止できないことが多く、夜間・休日も一定のベース電力が続く点が半導体・電子工場の電力構造の特徴です。ベース電力の見える化と用役（ユーティリティ）の運転最適化が、工場全体の電力削減余地を把握する出発点となります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "九州電力エリアの系統と半導体・電子工場の関係",
    detail:
      "大分県は九州電力エリアに属し、小売は九州電力（九州電力本体が法人小売を担う）、送配電は九州電力送配電が担います。九州エリアは原子力4基（玄海3・4号機、川内1・2号機）が稼働し、太陽光の導入量が国内最大級で、春・秋の晴天日中には出力制御（再エネ出力抑制）が実施されるほど再エネ比率が高いのが特徴です。原子力＋太陽光の比率が高く火力依存度が他エリアより低いため、燃料費調整額の感応度は相対的に低めとされます。JEPX九州エリア価格は晴天日中に太陽光で低下する局面があり、日中の太陽光余剰を活かす自家消費・蓄電の余地も大きいエリアです（出典: 九州電力送配電 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "大分県内最大シェア。大分・国東・中津の高圧・特別高圧の半導体・電子工場の長期需要家を多数抱えます。法人向けの高圧・特別高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。九州は原子力4基＋太陽光導入量が国内最大級で火力依存度が相対的に低く、燃料費調整額の感応度が他エリアより低めとされる点がエリアの特徴です。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 九州電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "大分県内の高圧・特別高圧の半導体・電子工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きいクリーンルーム工場で実績を積み上げています。九州エリアは太陽光が潤沢で晴天日中の市場価格が低下する局面があるため、供給可能kWh枠と燃調条件、日中の調達価格メリットを含めた総合比較が有効です。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（九州圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "九州圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。半導体・電子工場では恒温恒湿の蒸気・温水需要やドライエア供給があり、ガス＋電気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "半導体・電子はグローバル供給網に組み込まれることが多く、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（広い屋根面積を活かす自家消費）、オフサイトPPA（県内・九州圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。九州は太陽光導入量が国内最大級で、晴天日中の太陽光余剰を自家消費・蓄電で活かす余地が大きく、追加性のある調達を求める需要家にはPPAが有力な選択肢となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。九州エリアも例外ではなく供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい半導体・電子工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX九州エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX九州エリアのスポット価格は、太陽光の導入量が国内最大級であることを背景に、春・秋の晴天日中には太陽光で価格が大きく低下する局面があり、出力制御（再エネ出力抑制）が実施される日もあります。一方で夕方の太陽光減少時や全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。日中の低価格を活かす自家消費・蓄電との組合せは九州エリアの強みですが、変動への耐性は各社で異なります。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "九州電力エリアの特別高圧 — 大規模半導体・電子工場の単価水準",
    detail:
      "大規模半導体工場・電子工場（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね14〜17円/kWh＋調整項目とされます。九州は原子力＋太陽光の比率が高く火力依存度が他エリアより低いため、燃料高騰局面でも燃調の上ぶれが相対的に抑えられやすい点がエリアの特徴です。燃料費調整額（九州はエリア特性として感応度が相対的に低め）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は19〜24円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小半導体・電子工場の単価",
    detail:
      "大分・国東・中津の高圧半導体・電子工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は15〜19円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は21〜26円/kWhレンジが目安です。九州は太陽光が潤沢で日中の市場価格が下がる局面があるぶん、自家消費太陽光や日中比率の高い操業との組合せで単価メリットを取りやすい局面があります。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 九州電力エリア固有（相対的に低め）",
    detail:
      "九州電力エリアは原子力4基（玄海3・4号機、川内1・2号機）が稼働し、太陽光の導入量が国内最大級で火力（LNG・石炭）への依存度が他エリアより低いため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面でも、九州の燃調拡大は火力依存度の高いエリアに比べて相対的に抑えられる傾向がありました。この低い燃調感応度は半導体・電子工場の単価安定にプラスに働きますが、市場連動採用時は夕方の需給や全国連系の影響も見据えた固定vs市場連動の選択が経営判断の中心となります（出典: 九州電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量4,000万kWh級の大規模半導体・電子工場では年約1.67億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い半導体・電子工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模半導体工場（特別高圧 8,000kW、年間 4,800万kWh）— 代表シナリオ",
    before:
      "Before: 大分・国東近郊の大規模半導体工場A（クリーンルーム・実装・検査ラインを内製）。恒温恒湿空調が24時間連続稼働し、リフロー炉・純水・ドライエア供給が常時運転。九州電力の特別高圧契約＋燃調連動。空調・用役の電力比率が高く、年間電気代 約12億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／クリーンルーム空調の外気冷房（フリークーリング）を中間期・冬期に拡大＋インバータ化＋差圧設定の最適化／実装ライン・恒温槽の運転スケジュール見直し／工場屋根の自家消費太陽光（オンサイトPPA・九州は日中太陽光余剰活用余地大）導入／BEMS・需給予測による空調ピークシフト。",
    result:
      "Result: 年間電気代 約12億円 → 約10億円（▲約17%、▲2億円・目安）。5年累計の削減額は約10億円（年▲2億円×5年＝10億円）。契約電力 8,000→7,300kW／中間期外気冷房で用役電力を削減／RE100比率の段階的引上げ。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模電子部品工場（高圧 1,600kW、年間 1,100万kWh）— 代表シナリオ",
    before:
      "Before: 大分市の中規模電子部品工場B（実装・コネクタ・センサ部品の多品種製造）。クリーンルーム空調＋実装ライン＋検査が稼働。九州電力の業務用高圧電力＋燃調連動。品種切替に伴う恒温恒湿負荷の変動でデマンドが上下し、年間電気代 約2.6億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／クリーンルーム空調のインバータ更新＋外気冷房の中間期適用（SII補助1/2活用を検討）／コンプレッサー高効率機更新＋エア漏れ対策／純水・ドライエア装置の運転最適化／屋根太陽光の自家消費（オンサイトPPA）導入／BEMSで空調ピーク平準化。",
    result:
      "Result: 年間電気代 約2.6億円 → 約2.2億円（▲約15%、▲4,000万円・目安）。5年累計の削減額は約2.0億円（年▲4,000万円×5年＝2.0億円）。契約電力 1,600→1,470kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小電子部品・実装（高圧 600kW、年間 400万kWh）— 代表シナリオ",
    before:
      "Before: 中津市近郊の中小電子部品・実装C社（従業員90名・基板実装／検査の小ロット多品種）。九州電力の業務用高圧電力＋燃調連動。クリーンルーム空調＋恒温槽＋検査装置が中心で、夜間・休日もベース電力が続く。年間電気代 約9,200万円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場・検査室のLED化（県補助＋SII併用を検討）／クリーンルーム空調の差圧最適化＋外気冷房／コンプレッサー集中管理＋エア漏れ対策／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約9,200万円 → 約7,900万円（▲約14%、▲1,300万円・目安）。5年累計の削減額は約6,500万円（年▲1,300万円×5年＝6,500万円）。契約電力 600→545kW／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "クリーンルーム空調・恒温恒湿の連続負荷集中",
    detail:
      "半導体・電子のクリーンルームは温湿度・清浄度・差圧管理のため、外気処理・再熱・加湿の空調が24時間止められず連続稼働します。清浄度クラスが高い区域ほど換気回数が多く、外気導入量と再熱量が増えるため電力消費が膨らみます。一般に半導体・電子工場では空調・用役で電力の40〜60%程度を占めるとされ、空調の運用最適化（外気冷房・差圧設定・換気回数の適正化）が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "実装ライン（リフロー炉）・純水/ドライエア製造の用役負荷",
    detail:
      "実装ラインのリフロー炉・はんだ槽・恒温槽は加熱・保温で電力負荷が大きい工程です。加えて純水製造（RO・イオン交換）、ドライエア・圧縮空気の供給、検査・測定装置の常時稼働も用役電力を押し上げます。これらは品質保証のため運転条件の自由度が低い一方、待機時の保温温度・運転スケジュールの最適化で一定の改善余地があります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "九州電力エリアの燃調感応度（相対的に低め）と再エネ余剰の活用",
    detail:
      "九州電力エリアは原子力＋太陽光の比率が高く火力依存度が他エリアより低いため、燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。これは燃料高騰局面でも単価の上ぶれが相対的に抑えられやすい安心材料である一方、春・秋の晴天日中には太陽光で出力制御が起きるほど再エネが潤沢で、日中の自家消費・蓄電による単価メリットを取りやすい点も特徴です。大分の半導体・電子工場では、この低い燃調感応度と日中の再エネ余剰を前提に固定vs市場連動・自家消費の組合せを検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット製造に伴うデマンド変動",
    detail:
      "電子部品・実装は多品種小ロット生産が中心で、品種切替や検査条件変更のたびに恒温恒湿・乾燥・清浄度回復が発生し、空調・純水・ドライエア設備の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて半導体・電子はグローバル供給網からScope3 GHG排出削減要請が強まり、後工程・実装の事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。九州は太陽光導入量が国内最大級で追加性のある自家消費・PPAの選択肢が比較的広い点が特徴ですが、調達形態の要否は供給網の要請次第です。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "大分県 産業・脱炭素関連補助（大分県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、半導体・電子産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策に基づく補助メニュー。半導体・電子工場の高効率空調・コンプレッサー・LED・断熱・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は大分県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 大分県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・冷凍・LED・コンプレッサー・ヒートポンプ・恒温恒湿設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "半導体・電子工場のクリーンルーム空調更新・コンプレッサー高効率化・全館LED化・恒温槽更新などで活用しやすい主力補助です。大分県内の半導体・電子の更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい半導体・電子工場で活用が想定されます。半導体サプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。九州は太陽光導入量が国内最大級で晴天日中の余剰活用余地が大きく、追加性のある調達を検討しやすい点も踏まえて整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率空調・ヒートポンプ・燃料転換・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "九州経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "半導体・電子の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "半導体・電子の国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。大分の半導体・電子の高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "大分市 — 臨海コンビナート隣接の電子・半導体関連と素材産業（先端電子の中核）",
    detail:
      "大分市は臨海コンビナートに隣接する電子・半導体関連と素材産業を中心に、先端電子の事業所が集中するエリアです。クリーンルームを抱える高圧・特別高圧の半導体・電子工場が多く、空調・純水・ドライエア・実装を含む用役負荷が大きい点が共通します。多品種製造のためデマンド変動も大きく、契約電力最適化の余地があります。",
  },
  {
    label: "国東市 — 先端電子・半導体関連の集積（空港近接の電子デバイス立地）",
    detail:
      "国東市は大分空港に近接する立地を活かした先端電子・半導体関連の事業所が集積するエリアです。電子デバイス・実装・検査・恒温恒湿の電力に加え、純水・ドライエア供給が恒常負荷となります。空港近接の物流機能とも連動し、部品・製品の保管・出荷を支えるインフラが集積しています。",
  },
  {
    label: "中津市 — 電子・自動車部品を含む製造集積",
    detail:
      "中津市近郊は電子・自動車部品を含む製造業の工場が立地するエリアです。多品種小ロットの製造ラインを抱える事業所が多く、品種切替に伴う恒温恒湿・清浄度回復のための空調・純水負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、設備更新と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "日出町・杵築 — 電子・半導体周辺の事業所立地",
    detail:
      "日出町・杵築（県央広域を含む）には電子・半導体周辺産業の製造・周辺事業所が立地します。実装・検査・恒温恒湿の電力構造が共通し、高圧契約の中小製造業が中心です。空調・コンプレッサーの恒常負荷が電力構造の柱で、設備更新と運用改善の余地があります。",
  },
  {
    label: "県内全域 — 九州の半導体サプライチェーンの一角としての電子産業基盤",
    detail:
      "大分の半導体・電子産業は、既存の電子・素材・精密機械の裾野に加え、九州の半導体サプライチェーンの一角としての産業集積の上に成り立っています。製造から検査・物流までの裾野が県内で広がりつつあり、半導体・電子の後工程・関連の集積を支えるエコシステムが形成されています。これらの事業所群は、九州電力エリアの原子力＋太陽光比率が高い電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "九州エリアの新電力浸透度",
    detail:
      "九州電力エリアの新電力比率は、太陽光が潤沢で晴天日中の市場価格が低下する局面があることから、年間使用量の大きい工場を中心に切替・自家消費の検討が進みやすい傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。切替メリットは燃調条件・契約期間・再エネ付加価値・日中の調達価格で判断する必要があります。年間使用量の大きい半導体・電子工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランと固定の選択",
    detail:
      "2022〜2023年の全国的な高騰局面では、市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。九州は原子力＋太陽光比率が高く燃調感応度が相対的に低めのため、固定でも単価が安定しやすい一方、晴天日中の太陽光で市場価格が下がる局面を活かせるなら自家消費・市場連動の併用も検討余地があります。固定か市場連動かは各社のリスク許容度と操業パターンによって異なります。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・九州エリアでの供給安定性・原子力＋太陽光比率の高さに伴う燃調の安定性。デメリット: 新電力との比較での単価差、晴天日中の太陽光余剰を自家消費で取り込めない場合の機会損失。継続か切替かは燃調条件・契約期間・再エネ付加価値を含めた総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（大分×半導体・電子固有）",
    detail:
      "①半導体・電子・連続稼働工場への供給実績、②非化石証書／再エネトラッキング付メニュー（半導体サプライチェーンのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（九州は相対的に低めだが上限・連動条件を確認）、⑤BCP対応（停電時の清浄度・恒温恒湿の継続）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "半導体サプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・九州圏の太陽光案件）／コーポレートPPAが検討材料になります。九州は太陽光導入量が国内最大級で晴天日中の余剰活用余地が大きく、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "クリーンルーム空調の外気冷房＋差圧最適化",
    detail:
      "半導体・電子クリーンルームの空調は、中間期・冬期に外気冷房（フリークーリング）を活用することで冷凍機負荷を抑えられます。さらに差圧設定・換気回数を清浄度を維持できる範囲で適正化し、外気導入量と再熱量を抑制することで電力▲10〜20%程度が見込めます。空調機のインバータ化と組合せると効果が高まります。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は清浄度要件や気候条件によって変動します。",
  },
  {
    label: "実装ライン・恒温槽の運用改善",
    detail:
      "リフロー炉・はんだ槽・恒温槽は待機時の保温温度・運転スケジュールの最適化により、品質を維持しつつ運転時間と保温電力を抑える余地があります。複数ロットのスケジュール統合や立上げ・立下げの効率化も電力削減に寄与します。設備更新（高効率機）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。半導体・電子工場では計装エア・搬送・ドライエアなど圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "純水・ドライエア・検査装置の運転最適化",
    detail:
      "純水製造装置（RO・イオン交換）、ドライエア供給、検査・測定装置の運転スケジュール最適化、待機電力の見える化により、品質を維持しつつベース電力を抑えられます。用役（ユーティリティ）の運転最適化は工場全体の電力削減余地を把握する出発点であり、定量化することが重要です。投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる半導体・電子工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。九州は太陽光導入量が国内最大級で日中の発電量・余剰活用余地が大きく、あわせてBEMSで需要を見える化し、空調ピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "クリーンルーム空調の換気回数・差圧設定が清浄度を維持できる範囲で適正化されているか",
  "実装ライン・純水・ドライエア・検査装置の年間使用kWhを工程別に把握しているか",
  "外気冷房（フリークーリング）を中間期・冬期に活用できる余地があるか",
  "燃料費調整額の条件（九州は相対的に低めだが上限・連動条件）を契約書で確認したか",
  "九州電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "半導体サプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか（九州は晴天日中の太陽光余剰が大きい）",
  "大分県・SII・経産局補助の併用可否を設備別に整理したか",
  "多品種切替に伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の品質保証（清浄度・恒温恒湿・空調継続・自家発・蓄電池）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "大分県の半導体・電子工場は九州電力エリア固有の単価リスクがありますか？",
    answer:
      "九州電力エリアは原子力4基（玄海3・4号機、川内1・2号機）が稼働し、太陽光の導入量が国内最大級で火力（LNG・石炭）への依存度が他エリアより低いため、燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。これは燃料高騰局面でも単価の上ぶれが相対的に抑えられやすい安心材料です。一方、市場連動を採用する場合は、夕方の太陽光減少時や全国的な需給逼迫時の価格変動には注意が必要です。火力依存度が相対的に低いぶん、固定でも単価が安定しやすく、晴天日中の太陽光余剰を自家消費で取り込むメリットも大きい局面があります。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 九州電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "半導体・電子工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般にクリーンルームの恒温恒湿空調（外気処理・HEPAろ過・差圧管理）が電力消費の中心とされ、空調・用役で工場全体の40〜60%程度を占めるとされます。次いで実装ライン（リフロー炉・恒温槽）、純水・ドライエア製造、検査・測定装置、コンプレッサーが続きます。これらは24時間連続稼働が多く停止できないため、外気冷房の活用・差圧設定の最適化・設備のインバータ化が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "半導体後工程・実装の工場で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種小ロット製造では品種切替に伴う恒温恒湿・清浄度回復で空調・純水負荷が断続的に発生し、デマンド変動が大きくなりがちです。生産スケジュールの調整やピーク需要の平準化、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせてクリーンルーム空調の外気冷房・差圧最適化、コンプレッサー高効率化、LED化が有効です。九州は晴天日中の太陽光余剰が大きく、自家消費太陽光との組合せも有力です。大分県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "大分の半導体・電子工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。九州は太陽光導入量が国内最大級で晴天日中の発電量・余剰活用余地が大きく、自家消費型のPPAと相性が良い環境です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は半導体・電子工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量4,000万kWh級の大規模半導体・電子工場では年約1.67億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い半導体・電子工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "大分の半導体・電子工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。九州エリアは太陽光が潤沢で晴天日中の市場価格が下がる局面があるため、燃調条件・契約期間・非化石証書付の有無・日中の調達価格メリットを含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "大分県の補助金は半導体・電子工場でも使えますか？",
    answer:
      "使える可能性があります。大分県は産業振興・脱炭素政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。クリーンルーム空調・コンプレッサー・LED・断熱・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は大分県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の品質保証は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は九州電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし半導体・電子工場では停電時に清浄度・恒温恒湿・実装条件の継続が品質保証に直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "九州電力 法人向け料金プラン", url: "https://www.kyuden.co.jp/" },
  { name: "九州電力送配電 供給・系統情報", url: "https://www.kyuden.co.jp/td_index.html" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "大分県 産業政策・脱炭素", url: "https://www.pref.oita.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "経済産業省（半導体・デジタル産業戦略）", url: "https://www.meti.go.jp/" },
];

export default function OitaSemiconductorElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/oita-semiconductor-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "大分県の半導体・電子工場の電気料金", url: "https://simulator.eic-jp.org/oita-semiconductor-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">大分県の半導体・電子工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            大分県の半導体・電子工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            大分県は大分・国東・中津に先端電子・半導体関連が広く集積し、九州の半導体サプライチェーンの一角を担う地域です。本ページでは「大分県 × 半導体・電子製造業」というクロス領域に絞り、九州電力エリア固有の単価事情（原子力4基＋太陽光導入量国内最大級で燃調感応度が相対的に低め）と、クリーンルーム24時間稼働／実装／検査の電力プロファイル、契約最適化、補助金・PPA活用までを実務目線で整理します。なお同じ九州の半導体でも、熊本＝菊陽町（JASM等の前工程ファブ）、大分＝先端電子・関連の集積と検索意図・対象を分離します。本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>大分県の半導体・電子産業集積（大分・国東・中津）の電力プロファイル</li>
              <li>大規模半導体／中規模電子部品／中小実装のBefore/After代表シナリオ3件</li>
              <li>九州電力エリアの単価水準と燃調感応度（相対的に低め・原子力4基＋太陽光国内最大級）</li>
              <li>半導体サプライチェーンのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>大分×半導体・電子に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「大分 × 半導体・電子」のクロス領域に特化したガイドです。大分県全体の文脈は{" "}
            <Link href="/oita-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              大分県の法人電気料金ガイド
            </Link>
            、業種一般としての半導体工場全体は{" "}
            <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              半導体工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分県の半導体・電子産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県は大分市臨海コンビナート隣接の電子・半導体関連と素材産業、国東市の空港近接の先端電子・半導体関連、中津市の電子・自動車部品を含む製造集積と、県内各方面に半導体・電子の事業所が広く集積しています。クリーンルームを抱える高圧・特別高圧の半導体・電子工場が多数立地し、九州の半導体サプライチェーンの一角としての産業基盤が形成されています。
            </p>
            <div className="mt-4 space-y-3">
              {electricSituation.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県全体の文脈は{" "}
              <Link href="/oita-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                大分県の法人電気料金ガイド
              </Link>
              、九州電力エリア全体は{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                九州電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                半導体工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの主要電力会社・新電力（大分×半導体・電子での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県内の半導体・電子工場は、九州電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。九州は原子力＋太陽光比率が高く燃調感応度が相対的に低めで、晴天日中の太陽光で市場価格が下がる局面があるなど、選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
            </p>
            <div className="mt-4 space-y-3">
              {utilitiesList.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">役割: {item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの料金水準と半導体・電子工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（九州は相対的に低め）、再エネ賦課金の累積負担を、半導体・電子工場の代表的な契約タイプ別に整理します。九州固有の原子力＋太陽光比率高め・燃調相対的に低めの特性と日中の再エネ余剰を踏まえた契約戦略が経営判断の中心となります。
            </p>
            <div className="mt-4 space-y-3">
              {priceBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 単価は2026年時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 新電力ネット（https://pps-net.org/unit）・業界団体・経産省/エネ庁統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別代表シナリオ3件 — 大規模半導体／中規模電子部品／中小実装（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
            </p>
            <div className="mt-4 space-y-4">
              {industryImpact.map((cs) => (
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
              業種一般の事例は{" "}
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体工場の電気料金見直し</Link>
              、{" "}
              <Link href="/electronics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電子部品工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分×半導体・電子固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分の半導体・電子工場の電気代は、クリーンルーム空調の連続負荷・実装／純水/ドライエアの用役負荷・九州エリアの燃調感応度（相対的に低め）と再エネ余剰活用・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              個別要因は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金・優遇制度 — 大分県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県の産業・脱炭素補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、九州経済産業局のサプライチェーン強靱化補助の5層を組合せ、半導体・電子の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
            </p>
            <div className="mt-4 space-y-3">
              {subsidies.map((item) => (
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
              補助金スケジュールは{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              、SIIの詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要拠点／集積地の電力プロファイル（大分／国東／中津／日出・杵築）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分の半導体・電子サプライチェーンは、大分市の臨海コンビナート隣接の先端電子中核を中心に、国東の空港近接の先端電子・半導体関連、中津の電子・自動車部品を含む製造集積、日出・杵築の電子・半導体周辺、県内全域の九州サプライチェーンの一角としての産業基盤という構造です。
            </p>
            <div className="mt-4 space-y-3">
              {industryProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電力会社切替の実情 — 九州電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九州は原子力＋太陽光比率が高く燃調感応度が相対的に低めであること、晴天日中の太陽光余剰を活かす自家消費・蓄電の余地が大きいこと、半導体サプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
            </p>
            <div className="mt-4 space-y-3">
              {switchingReality.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分×半導体・電子の省エネ・自家消費事例（クリーンルーム空調／実装・恒温槽／コンプレッサー／純水・ドライエア／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体・電子工場の省エネは、クリーンルーム空調の外気冷房＋差圧最適化、実装ライン・恒温槽の運用改善、コンプレッサー高効率化、純水・ドライエア・検査装置の運転最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分×半導体・電子 契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで大分×半導体・電子の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分の半導体・電子工場は、クリーンルーム空調の連続負荷・実装／純水/ドライエアの用役負荷・半導体サプライチェーンのCN要請など複合リスクを抱えます。九州は燃調感応度が相対的に低めで晴天日中の太陽光余剰が大きいという特性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約15%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-09"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/oita-business-electricity-cost", title: "大分県の法人電気料金ガイド（地域一般）", description: "大分県全体の電力事情・九州電力・補助金。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州エリアの料金体系・原子力＋太陽光比率・燃調感応度。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体工場の電気料金見直し（業種一般）", description: "クリーンルーム24時間稼働・純水・用役の最適化。" },
              { href: "/electronics-electricity-cost-review", title: "電子部品工場の電気料金見直し（業種一般）", description: "クリーンルーム空調・実装・検査の最適化。" },
              { href: "/kumamoto-semiconductor-electricity-cost", title: "熊本県の半導体・電子部品工場（地域クロス）", description: "意図分離: 熊本＝菊陽町JASMの前工程ファブ／大分＝先端電子集積。" },
              { href: "/mie-semiconductor-electricity-cost", title: "三重県の半導体・電子部品工場（地域クロス）", description: "半導体業種の別エリア比較（中部電力）。" },
              { href: "/nagasaki-shipbuilding-electricity-cost", title: "長崎県の造船業×九州電力（地域クロス）", description: "同じ九州電力エリアの別業種クロス。業種で論点を分離。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募時期と採択率の見通しを整理。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動の適否を判断する。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="大分の半導体・電子工場の電気代リスクを自社条件で試算する"
            description="大規模半導体・中規模電子部品・中小実装いずれも、九州電力エリア・クリーンルーム空調・実装・半導体サプライチェーンのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="大分の半導体・電子工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模半導体・中規模電子部品・中小実装いずれも、クリーンルーム空調・実装・検査の規模感と半導体サプライチェーンのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で大分県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
