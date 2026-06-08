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
  "徳島県の化学・LED工場の電気料金完全ガイド｜阿南の化学・LED関連集積と四国電力";
const pageDescription =
  "徳島県の化学・LED製造業に特化。阿南を中心とした化学・LED関連・電子材料の集積を核に、化学反応・結晶成長・蛍光体・クリーンルームの電力プロファイル、四国電力エリアの単価事情（伊方3号機稼働）、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します（香川=食品・愛媛=製紙とは業種で分離）。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "徳島県 化学 電気料金",
    "阿南 LED 電気代",
    "化学工場 電力",
    "四国電力 特別高圧 化学",
    "LED 結晶成長 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/tokushima-chemical-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tokushima-chemical-electricity-cost",
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
    label: "徳島県の化学・LED産業集積 — 阿南を中核とした素材・電子材料の集積",
    detail:
      "徳島県は阿南市を中核に化学・LED関連・電子材料の事業所が集積し、特別高圧・高圧の電力多消費の大口需要家が立地する地域です。阿南のLED・化学関連を軸に、徳島市・小松島市・吉野川流域へと化学・素材・電子材料の裾野が広がり、結晶成長・蛍光体焼成・クリーンルーム・化学反応といった電力プロファイルの異なる工程が県内に集積しています。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に四国電力エリア固有の論点を整理します（出典: 徳島県統計・経産省工業統計から整理）。",
  },
  {
    label: "化学工場の電力プロファイル — 反応・蒸留・分離・電解と用役負荷",
    detail:
      "化学工場の電力消費の中心は、反応・蒸留・分離プロセス、電解、ポンプ・コンプレッサー・送風機、冷却（冷凍機・冷却塔）、純水・スチーム等の用役（ユーティリティ）です。とりわけ連続操業の化学プラントは反応・蒸留・分離のためにベース電力が高く、ポンプ・送風機・冷却が24時間連続で稼働します。用役の比率が高い傾向があり（一般に動力・冷却・用役で電力の40〜60%程度を占めるとされます／出典: 業界団体・省エネ事例から整理）、ポンプ・冷却・コンプレッサーの運転最適化が電力単価最適化の主戦場となります。",
  },
  {
    label: "LED関連（結晶成長・蛍光体・クリーンルーム）の恒常負荷とデマンド特性",
    detail:
      "徳島県内にはLED関連の結晶成長（MOCVD等の高温・長時間連続プロセス）、蛍光体の焼成、クリーンルームの恒温恒湿管理、純水・ドライエア供給、検査を担う事業所が集積します。結晶成長炉やクリーンルーム空調は電力多消費で24時間連続稼働が基本であり、品種切替や条件変更のたびに恒温恒湿・焼成の負荷が変動し、デマンド（kW）のピークが発生しやすいのが特徴です。連続稼働とバッチ的な工程が混在する構成では、ピーク需要の平準化が契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "24時間連続操業・純水/スチーム供給に伴うベース負荷",
    detail:
      "化学・LED製造では反応・結晶成長の品質保証のため温度・清浄度・純度を常時維持する必要があり、ポンプ・冷却・空調・純水・スチーム供給が24時間連続で稼働します。連続プラントは生産を止めても再立上げのコストが大きいため運転を完全停止できないことが多く、夜間・休日も一定のベース電力が続く点が化学・LED工場の電力構造の特徴です。ベース電力の見える化と用役（ユーティリティ）の運転最適化が、工場全体の電力削減余地を把握する出発点となります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "四国電力エリアの系統と化学・LED工場の関係",
    detail:
      "徳島県は四国電力エリアに属し、小売は四国電力（四国電力本体が法人小売を担う）、送配電は四国電力送配電が担います。四国エリアは伊方原子力発電所3号機（愛媛県）が稼働しており、原子力＋水力＋火力（LNG・石炭）の構成です。伊方3号機の稼働はエリアの限界費用・燃料費調整額の安定化に寄与しますが、火力も一定比率を占めるため燃調感応度は中程度とされます。徳島は阿南を中心に化学・LED関連が集積し大口需要が立地しています。四国は本州と連系線で接続され需給に応じた電力融通があります。JEPX四国エリア価格を参照しつつ、エリア固有の単価事情を踏まえた契約戦略が求められます（出典: 四国電力送電 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "四国電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "徳島県内最大シェア。阿南・徳島・小松島の特別高圧・高圧の化学・LED工場の長期需要家を多数抱えます。法人向けの特別高圧・高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。四国は伊方3号機の稼働でエリアの限界費用が安定化していますが、火力も一定比率を占めるため燃調感応度は中程度とされます。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 四国電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "徳島県内の特別高圧・高圧の化学・LED工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい化学プラント・結晶成長工場で実績を積み上げています。四国エリアは伊方3号機稼働で価格が比較的安定する局面がある一方、需給次第で価格差が出る場面もあるため、供給可能kWh枠と燃調条件を含めた総合比較が有効です。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（四国圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "四国圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。化学・LED工場では反応・乾燥・焼成に伴うスチーム・温水需要や純水・ドライエア供給があり、ガス＋電気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "化学・LEDはグローバル供給網に組み込まれることが多く、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（広い屋根面積を活かす自家消費）、オフサイトPPA（県内・四国圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。徳島は日射条件が比較的良好で再エネ導入の余地もあり、追加性のある調達を求める需要家にはPPAが選択肢となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。四国エリアも例外ではなく供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい化学・LED工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX四国エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX四国エリアのスポット価格は、伊方3号機稼働による限界費用の安定化を背景に比較的落ち着く局面がある一方、火力も一定比率を占めるため燃料価格や需給に応じて変動する場面があります。全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "四国電力エリアの特別高圧 — 大規模化学・LED工場の単価水準",
    detail:
      "大規模化学・LED工場（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね14〜18円/kWh＋調整項目とされます。四国は伊方3号機稼働で限界費用が比較的安定する一方、火力も一定比率を占めるため燃料高騰局面では単価が上ぶれする場面もあります。燃料費調整額（四国はエリア特性として感応度が中程度）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は20〜25円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小化学・電子材料工場の単価",
    detail:
      "徳島・阿南・小松島の高圧化学・電子材料工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は16〜20円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は22〜27円/kWhレンジが目安です。四国は伊方3号機稼働で限界費用が比較的安定するぶん、新電力切替や固定化による単価安定のメリットが出やすい局面があります。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 四国電力エリア固有（中程度）",
    detail:
      "四国電力エリアは伊方3号機（原子力）が稼働しているため、火力（LNG・石炭）依存度が一定に抑えられ、燃料費調整額の感応度は中程度とされるのがエリア固有の特徴です。とはいえ火力も一定比率を占めるため、2022〜2023年の全国的な燃料高騰局面では四国の燃調も拡大し、年間使用量の大きい化学・LED工場では単価上昇を経験しました。伊方3号機の安定稼働はエリアの限界費用の安定化に寄与しますが、当面は燃調変動を見据えた固定vs市場連動の選択が経営判断の中心となります（出典: 四国電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量4,000万kWh級の大規模化学・LED工場では年約1.67億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い化学・LED工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模化学・LED工場（特別高圧 7,000kW、年間 4,200万kWh）— 代表シナリオ",
    before:
      "Before: 阿南近郊の大規模化学・LED工場A（結晶成長・蛍光体焼成・クリーンルームを内製）。結晶成長炉・クリーンルーム空調が24時間連続稼働し、化学反応・冷却（冷凍機・冷却塔）が常時運転。四国電力の特別高圧契約＋燃調連動。動力・冷却・用役の電力比率が高く、年間電気代 約10.5億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／結晶成長炉・クリーンルーム空調の運用最適化＋インバータ化／冷却塔・ポンプの運転最適化／高効率コンプレッサー更新／工場屋根の自家消費太陽光（オンサイトPPA）導入／BEMS・需給予測による空調・動力のピークシフト。",
    result:
      "Result: 年間電気代 約10.5億円 → 約8.9億円（▲約15%、▲1.6億円・目安）。5年累計の削減額は約8.0億円（年▲1.6億円×5年＝8.0億円）。契約電力 7,000→6,400kW／冷却・ポンプ運転最適化で用役電力を削減／RE100比率の段階的引上げ。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模化学・電子材料工場（高圧 1,800kW、年間 1,200万kWh）— 代表シナリオ",
    before:
      "Before: 徳島市の中規模化学・電子材料工場B（反応・蒸留・乾燥・電子材料の製造）。反応槽・蒸留塔・乾燥機＋純水・スチーム用役が稼働。四国電力の業務用高圧電力＋燃調連動。品種切替に伴う反応・乾燥負荷の変動でデマンドが上下し、年間電気代 約2.9億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／高効率コンプレッサー・ポンプ更新（SII補助1/2活用を検討）／冷凍機の運転最適化／純水・スチームの用役最適化／屋根太陽光の自家消費（オンサイトPPA）導入／BEMSで動力・冷却ピーク平準化。",
    result:
      "Result: 年間電気代 約2.9億円 → 約2.45億円（▲約15%、▲4,500万円・目安）。5年累計の削減額は約2.25億円（年▲4,500万円×5年＝2.25億円）。契約電力 1,800→1,650kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小化学・LED部材工場（高圧 700kW、年間 460万kWh）— 代表シナリオ",
    before:
      "Before: 小松島近郊の中小化学・LED部材工場C社（化学・LED部材の小ロット多品種製造）。四国電力の業務用高圧電力＋燃調連動。反応・乾燥・焼成＋冷凍機・検査が中心で、夜間・休日もベース電力が続く。年間電気代 約1.1億円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場LED化（県補助＋SII併用を検討）／コンプレッサー集中管理＋エア漏れ対策／冷凍機・乾燥の運転最適化／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約1.1億円 → 約9,400万円（▲約15%、▲1,600万円・目安）。5年累計の削減額は約8,000万円（年▲1,600万円×5年＝8,000万円）。契約電力 700→640kW／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "化学反応・蒸留・分離・電解の連続負荷集中",
    detail:
      "化学工場では反応・蒸留・分離・電解のために、ポンプ・送風機・コンプレッサー・冷却が24時間止められず連続稼働します。連続プラントほど反応条件・温度を一定に保つ必要があり、ベース電力が高くなります。一般に化学工場では動力・冷却・用役で電力の40〜60%程度を占めるとされ、ポンプ・冷却・コンプレッサーの運用最適化（インバータ化・運転スケジュール・過剰圧力の見直し）が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "結晶成長（MOCVD等）・蛍光体焼成・純水/ドライエア製造の用役負荷",
    detail:
      "LED関連の結晶成長炉（MOCVD等）は高温・長時間連続プロセスで電力負荷が大きく、蛍光体の焼成炉・乾燥機も加熱・保温で電力を多く消費します。加えて純水製造（RO・イオン交換）、ドライエア・圧縮空気の供給、検査・測定装置の常時稼働も用役電力を押し上げます。これらは品質保証のため運転条件の自由度が低い一方、待機時の保温温度・運転スケジュールの最適化で一定の改善余地があります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "四国電力エリアの燃調感応度（中程度）",
    detail:
      "四国電力エリアは伊方3号機（原子力）の稼働で火力依存度が一定に抑えられるため、燃料費調整額の感応度は中程度とされるのがエリア固有の特徴です。これは燃料高騰局面での単価上ぶれが相対的に緩和されやすい一方、火力も一定比率を占めるため燃調変動が完全になくなるわけではありません。徳島の化学・LED工場では、この燃調変動を前提に固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット製造に伴うデマンド変動",
    detail:
      "化学・LED部材は多品種小ロット生産が中心の事業所も多く、品種切替や条件変更のたびに反応・乾燥・焼成・恒温恒湿が発生し、冷却・純水・ドライエア設備の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて化学・LEDはグローバル供給網からScope3 GHG排出削減要請が強まり、素材・部材の事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。徳島は日射条件が比較的良好で自家消費太陽光の余地がある点が特徴ですが、調達形態の要否は供給網の要請次第です。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "徳島県 産業・脱炭素関連補助（徳島県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、化学・LED・素材産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策に基づく補助メニュー。化学・LED工場の高効率冷凍機・コンプレッサー・ポンプ・LED・断熱・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は徳島県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 徳島県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率冷凍機・冷却塔・LED・コンプレッサー・ポンプ・ヒートポンプ・焼成/乾燥設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "化学・LED工場の冷凍機・冷却塔更新・コンプレッサー高効率化・全館LED化・乾燥/焼成設備更新などで活用しやすい主力補助です。徳島県内の化学・LEDの更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい化学・LED工場で活用が想定されます。化学・LEDサプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。徳島は日射条件が比較的良好で、追加性のある調達を検討しやすい点も踏まえて整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率冷凍機・ヒートポンプ・燃料転換・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "四国経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "化学・LED・電子材料の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "化学・LED・素材の国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。徳島の化学・LEDの高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "阿南市 — 化学・LED関連・電子材料の中核",
    detail:
      "阿南市は化学・LED関連・電子材料の事業所が集中する徳島県の中核エリアです。結晶成長・蛍光体焼成・クリーンルームを抱える特別高圧・高圧の化学・LED工場が多く、電力多消費の大口需要が立地します。結晶成長・冷却・純水・スチームを含む用役負荷が大きい点が共通し、多品種製造のためデマンド変動も大きく、契約電力最適化の余地があります。",
  },
  {
    label: "徳島市 — 化学・電子・医薬中間体を含む製造集積",
    detail:
      "徳島市には化学・電子・医薬中間体を含む製造の事業所と本社機能が集積します。反応・蒸留・乾燥の電力に加え、純水・スチーム供給が恒常負荷となります。臨海部の物流機能とも連動し、原料・製品の保管・出荷を支えるインフラが集積しています。高圧契約の中小〜中堅製造業が中心で、設備更新と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "小松島市 — 化学・素材・周辺産業の集積",
    detail:
      "小松島市は化学・素材・周辺産業の工場が立地するエリアです。反応・乾燥・冷却の製造ラインを抱える事業所が多く、品種切替に伴う反応・乾燥負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、コンプレッサー・冷凍機・ポンプの恒常負荷が電力構造の柱となります。設備更新と運用改善を組合せた電気代最適化の余地があります。",
  },
  {
    label: "吉野川流域（吉野川市・石井等）— 化学・食品を含む製造の周辺集積",
    detail:
      "吉野川流域（吉野川市・石井方面を含む広域）には化学・食品を含む製造・周辺産業の事業所が立地します。反応・乾燥・冷却の電力構造が共通し、高圧契約の中小製造業が中心です。動力・冷却・コンプレッサーの恒常負荷が電力構造の柱で、設備更新と運用改善の余地があります。",
  },
  {
    label: "県内全域 — 阿南のLED・化学を軸とした素材・電子材料の産業基盤",
    detail:
      "徳島の化学・LED産業は、阿南のLED・化学関連を軸に、素材・電子材料の裾野が県内で広がる産業集積の上に成り立っています。製造から検査・物流までの裾野が県内で広がりつつあり、化学・LED・電子材料の集積を支えるエコシステムが形成されています。これらの事業所群は、四国電力エリアの伊方3号機稼働を前提とした電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "四国エリアの新電力浸透度",
    detail:
      "四国電力エリアの新電力比率は、年間使用量の大きい工場を中心に切替検討が進みやすい傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。伊方3号機稼働で限界費用が比較的安定するぶん、燃調条件・契約期間・再エネ付加価値で切替メリットを判断する必要があります。年間使用量の大きい化学・LED工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、四国でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。四国は伊方3号機稼働で燃調感応度が中程度とされる一方、全国需給逼迫時にはエリア間連系を通じて影響を受けることもあり、長期固定（2〜5年）で単価を安定させる選択が検討されています。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・四国エリアでの供給安定性。デメリット: 火力も一定比率を占めることに伴う燃調変動、新電力との比較での単価差。継続か切替かは燃調条件・契約期間・再エネ付加価値を含めた総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（徳島×化学・LED固有）",
    detail:
      "①化学・LED・連続稼働工場への供給実績、②非化石証書／再エネトラッキング付メニュー（化学・LEDサプライチェーンのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（四国は中程度のため上限・連動条件を確認）、⑤BCP対応（停電時の反応・結晶成長・恒温恒湿の継続）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "化学・LEDサプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・四国圏の太陽光案件）／コーポレートPPAが検討材料になります。徳島は日射条件が比較的良好で、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "冷凍機・冷却塔の高効率化＋運転最適化",
    detail:
      "化学・LED工場の冷却（冷凍機・冷却塔）は連続負荷の中心で、高効率機更新＋台数制御・冷却水温度の最適化により冷凍機負荷を抑えられます。徳島は冬期・中間期の外気温が比較的低く、フリークーリングの適用余地もあります。冷凍機のインバータ化と組合せると効果が高まり、電力▲10〜20%程度が見込めます。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は工程要件や気候条件によって変動します。",
  },
  {
    label: "結晶成長炉・焼成/乾燥の運用改善",
    detail:
      "結晶成長炉・焼成炉・乾燥機は待機時の保温温度・運転スケジュールの最適化により、品質を維持しつつ運転時間と保温電力を抑える余地があります。複数ロットのスケジュール統合や立上げ・立下げの効率化も電力削減に寄与します。設備更新（高効率機）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。化学・LED工場では計装エア・搬送・ドライエアなど圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "ポンプ・純水・ドライエアの運転最適化",
    detail:
      "ポンプ（送液・冷却水循環）のインバータ化、純水製造装置（RO・イオン交換）、ドライエア供給、検査・測定装置の運転スケジュール最適化、待機電力の見える化により、品質を維持しつつベース電力を抑えられます。用役（ユーティリティ）の運転最適化は工場全体の電力削減余地を把握する出発点であり、定量化することが重要です。投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる化学・LED工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、動力・冷却ピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。徳島の日射条件も踏まえ、本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冷凍機・冷却塔の台数制御・冷却水温度設定が品質を維持できる範囲で適正化されているか",
  "結晶成長炉・焼成/乾燥・純水・ドライエア・検査装置の年間使用kWhを工程別に把握しているか",
  "フリークーリングを中間期・冬期に活用できる余地があるか（徳島は冬期外気温が比較的低い）",
  "燃料費調整額の条件（四国は中程度のため上限・連動条件）を契約書で確認したか",
  "四国電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "化学・LEDサプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "徳島県・SII・経産局補助の併用可否を設備別に整理したか",
  "多品種切替に伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の品質保証（反応・結晶成長・恒温恒湿・自家発・蓄電池）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "徳島県の化学・LED工場は四国電力エリア固有の単価リスクがありますか？",
    answer:
      "四国電力エリアは伊方原子力発電所3号機（愛媛）が稼働しており、火力（LNG・石炭）依存度が一定に抑えられるため、燃料費調整額の感応度は中程度とされるのがエリア固有の特徴です。伊方3号機の稼働はエリアの限界費用の安定化に寄与する一方、火力も一定比率を占めるため燃調変動が完全になくなるわけではありません。需給次第で新電力切替や長期固定による単価安定のメリットが出やすい局面もあります。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 四国電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "化学・LED工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般に化学工場では反応・蒸留・分離に伴うポンプ・送風機・冷却（冷凍機・冷却塔）・コンプレッサーが電力消費の中心とされ、動力・冷却・用役で工場全体の40〜60%程度を占めるとされます。LED関連では結晶成長炉（MOCVD等）・蛍光体焼成・クリーンルーム空調・純水/ドライエアが続きます。これらは24時間連続稼働が多く停止できないため、冷却・ポンプ・コンプレッサーの運転最適化・インバータ化が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "化学・LED部材の工場で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種小ロット製造では品種切替に伴う反応・乾燥・焼成・恒温恒湿で冷却・純水負荷が断続的に発生し、デマンド変動が大きくなりがちです。生産スケジュールの調整やピーク需要の平準化、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせて冷凍機・冷却塔の高効率化、コンプレッサー高効率化、ポンプのインバータ化、LED化が有効です。徳島県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "徳島の化学・LED工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。徳島は日射条件が比較的良好で、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は化学・LED工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量4,000万kWh級の大規模化学・LED工場では年約1.67億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い化学・LED工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "徳島の化学・LED工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。四国エリアは伊方3号機稼働で価格が比較的安定する局面がある一方、需給次第で価格差が出ることもあるため、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "徳島県の補助金は化学・LED工場でも使えますか？",
    answer:
      "使える可能性があります。徳島県は産業振興・脱炭素政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。冷凍機・冷却塔・コンプレッサー・ポンプ・LED・断熱・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は徳島県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の品質保証は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は四国電力送電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし化学・LED工場では停電時に反応・結晶成長・恒温恒湿条件の継続が品質保証に直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "四国電力 法人向け料金プラン", url: "https://www.yonden.co.jp/" },
  { name: "四国電力送配電 供給・系統情報", url: "https://www.yonden.co.jp/nw/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "徳島県 産業政策・脱炭素", url: "https://www.pref.tokushima.lg.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "日本化学工業協会", url: "https://www.nikkakyo.org/" },
];

export default function TokushimaChemicalElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tokushima-chemical-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "徳島県の化学・LED工場の電気料金", url: "https://simulator.eic-jp.org/tokushima-chemical-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">徳島県の化学・LED工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            徳島県の化学・LED工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            徳島県は阿南を中核に化学・LED関連・電子材料が集積し、特別高圧・高圧の電力多消費の大口需要家が立地する地域です。本ページでは「徳島県 × 化学・LED製造業」というクロス領域に絞り、四国電力エリア固有の単価事情（伊方3号機稼働で燃調感応度は中程度）と、化学反応・結晶成長・蛍光体・クリーンルームの電力プロファイル、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。同じ四国電力エリアでも香川＝食品、愛媛＝製紙とは業種・電力プロファイルが異なるため、本ページは化学・LEDに分離して扱います。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>徳島県の化学・LED産業集積（阿南・徳島・小松島・吉野川流域）の電力プロファイル</li>
              <li>大規模化学・LED／中規模化学・電子材料／中小化学・LED部材のBefore/After代表シナリオ3件</li>
              <li>四国電力エリアの単価水準と燃調感応度（中程度・伊方3号機稼働）</li>
              <li>化学・LEDサプライチェーンのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>徳島×化学・LEDに特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「徳島 × 化学・LED」のクロス領域に特化したガイドです。徳島県全体の文脈は{" "}
            <Link href="/tokushima-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              徳島県の法人電気料金ガイド
            </Link>
            、業種一般としての化学工場全体は{" "}
            <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              化学工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              徳島県の化学・LED産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県は阿南市を中核とした化学・LED関連・電子材料、徳島市の化学・電子・医薬中間体、小松島市の化学・素材、吉野川流域の化学・食品周辺と、県内に化学・LED・素材の事業所が広く集積しています。結晶成長・蛍光体焼成・クリーンルーム・化学反応を抱える特別高圧・高圧の工場が多数立地し、阿南のLED・化学関連を軸とした素材・電子材料の産業基盤が形成されています。
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
              徳島県全体の文脈は{" "}
              <Link href="/tokushima-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                徳島県の法人電気料金ガイド
              </Link>
              、四国電力エリア全体は{" "}
              <Link href="/region-shikoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                四国電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                化学工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              四国電力エリアの主要電力会社・新電力（徳島×化学・LEDでの実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県内の化学・LED工場は、四国電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。四国は伊方3号機稼働で限界費用が比較的安定する一方、需給次第で価格差が出る局面もあり、選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              四国電力エリアの料金水準と化学・LED工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（四国は中程度）、再エネ賦課金の累積負担を、化学・LED工場の代表的な契約タイプ別に整理します。四国固有の伊方3号機稼働・燃調中程度の特性を踏まえた契約戦略が経営判断の中心となります。
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
              規模別代表シナリオ3件 — 大規模化学・LED／中規模化学・電子材料／中小化学・LED部材（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/chemical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">化学工場の電気料金見直し</Link>
              、{" "}
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              徳島×化学・LED固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島の化学・LED工場の電気代は、化学反応・蒸留・分離・電解の連続負荷・結晶成長／焼成／純水/ドライエアの用役負荷・四国エリアの燃調感応度（中程度）・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 徳島県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県の産業・脱炭素補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、経産局のサプライチェーン強靱化補助の5層を組合せ、化学・LEDの更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（阿南／徳島／小松島／吉野川流域）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島の化学・LEDサプライチェーンは、阿南の化学・LED関連・電子材料中核を中心に、徳島市の化学・電子・医薬中間体、小松島の化学・素材、吉野川流域の化学・食品周辺、県内全域の阿南のLED・化学を軸とした素材・電子材料の産業基盤という構造です。
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
              電力会社切替の実情 — 四国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              四国は伊方3号機稼働で限界費用が比較的安定する一方需給次第で価格差が出ること、市場連動からの固定回帰、化学・LEDサプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              徳島×化学・LEDの省エネ・自家消費事例（冷凍機・冷却塔／結晶成長・焼成／コンプレッサー／ポンプ・純水・ドライエア／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              化学・LED工場の省エネは、冷凍機・冷却塔の高効率化＋運転最適化、結晶成長炉・焼成/乾燥の運用改善、コンプレッサー高効率化、ポンプ・純水・ドライエアの運転最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              徳島×化学・LED 契約見直しチェックリスト（12項目）
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
              シミュレーターで徳島×化学・LEDの電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島の化学・LED工場は、化学反応・結晶成長の連続負荷・冷却／純水/ドライエアの用役負荷・化学・LEDサプライチェーンのCN要請など複合リスクを抱えます。四国は燃調感応度が中程度という特性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
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
              { href: "/tokushima-business-electricity-cost", title: "徳島県の法人電気料金ガイド（地域一般）", description: "徳島県全体の電力事情・四国電力・補助金。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国エリアの料金体系・伊方3号機・燃調感応度。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/chemical-electricity-cost-review", title: "化学工場の電気料金見直し（業種一般）", description: "反応・蒸留・分離・冷却・用役の最適化。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体工場の電気料金見直し（業種一般）", description: "LED結晶成長・クリーンルーム24時間稼働の近接業種。" },
              { href: "/kagawa-food-electricity-cost", title: "香川県の食品工場×四国電力（地域クロス）", description: "四国エリア軸・業種分離: 香川=食品／徳島=化学LED。" },
              { href: "/ehime-paper-electricity-cost", title: "愛媛県の製紙工場×四国電力（地域クロス）", description: "四国エリア軸・業種分離: 愛媛=製紙／徳島=化学LED。" },
              { href: "/okayama-chemical-electricity-cost", title: "岡山県の化学工場×中国電力（地域クロス）", description: "化学業種の別エリア比較（中国電力）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募時期と採択率の見立てで申請計画を立てる。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動の適否を判断する観点。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="徳島の化学・LED工場の電気代リスクを自社条件で試算する"
            description="大規模化学・LED・中規模化学・電子材料・中小化学・LED部材いずれも、四国電力エリア・化学反応・結晶成長・化学LEDサプライチェーンのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="徳島の化学・LED工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模化学・LED・中規模化学・電子材料・中小化学・LED部材いずれも、化学反応・結晶成長・クリーンルームの規模感と化学・LEDサプライチェーンのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で徳島県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
