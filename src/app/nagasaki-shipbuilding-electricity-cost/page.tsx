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
  "長崎県の造船・重工業の電気料金完全ガイド｜長崎・佐世保の造船集積と九州電力";
const pageDescription =
  "長崎県の造船・重工業に特化。長崎・佐世保の造船・舶用機械・重機械の集積を核に、大型構造物溶接・クレーン・機械加工・塗装乾燥の電力プロファイル、九州電力エリアの単価事情（原子力4基＋太陽光導入量国内最大級で燃調感応度が相対的に低め）、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します（広島=呉の造船とは検索意図を分離）。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "長崎県 造船 電気料金",
    "佐世保 重工 電気代",
    "造船所 溶接 電力",
    "九州電力 特別高圧 造船",
    "舶用機械 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/nagasaki-shipbuilding-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/nagasaki-shipbuilding-electricity-cost",
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
    label: "長崎県の造船・重工業集積 — 長崎・佐世保を核とした臨海重工の二大拠点構造",
    detail:
      "長崎県は長崎港の造船・舶用機械・重機械の中核集積と、佐世保港の造船・艦船修繕・重機械の集積という二大拠点を軸に、諫早・大村・西海方面の造船関連サプライヤーや金属加工・鉄工の事業所が広く立地する、国内有数の造船・重工業の県です。半島・離島が多い地形のもと、大型構造物の建造・艤装・修繕を担う特別高圧・高圧の大口需要家は臨海部の受電点に集中しています。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした造船・舶用機械の事業所群の集積構造を前提に、九州電力エリア固有の論点を整理します（出典: 長崎県統計・経産省工業統計から整理）。",
  },
  {
    label: "造船・重工業の電力プロファイル — 大型構造物溶接・クレーン・機械加工・塗装乾燥",
    detail:
      "造船・重工業の電力消費の中心は、アーク溶接・自動溶接（大電流・断続的に大きなピーク）、大型クレーン・門型クレーン（揚重時のピーク）、機械加工（NC・大型工作機械）、塗装ブースの乾燥・換気、コンプレッサー（エア工具・ブラスト用）です。連続操業ではなくブロック建造の工程進捗に依存するバッチ的な負荷が特徴で、溶接とクレーンの同時稼働でデマンド（kW）のピークが立ちやすい点が論点です。電子工場のような24時間連続のベース負荷型ではなく、ピークの高さと立ち方が電力構造を左右するため、契約電力（kW）の最適化＝ピーク平準化が単価最適化の主戦場となります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "溶接・クレーン同時稼働によるデマンドピーク特性",
    detail:
      "造船所では大型ブロックの溶接工程とクレーンによる揚重・反転が同時に走る局面でデマンド（kW）のピークが急峻に立ち上がります。アーク溶接・自動溶接は大電流を断続的に消費し、門型クレーンの揚重時にも瞬間的な負荷がかかるため、両者が重なる時間帯に契約電力を押し上げがちです。工程スケジュールの調整やピーク平準化、溶接電源の高効率インバータ化により、基本料金（契約kW）の削減余地が生まれます。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "工程進捗依存のバッチ負荷と機械加工・塗装乾燥の用役負荷",
    detail:
      "造船・重工業の電力負荷は、ブロック建造・艤装・塗装・修繕といった工程進捗に依存し、品種（船種）や工程段階によって変動します。NC・大型工作機械による機械加工、塗装ブースの乾燥・換気、ブラスト用コンプレッサーが用役負荷の柱で、工程の山谷に応じて稼働が増減します。連続操業型工場のような均一なベース負荷ではないため、工程別の使用kWhの把握と、ピーク時間帯の見える化が電力削減余地を把握する出発点となります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "九州電力エリアの系統と造船・重工業の関係",
    detail:
      "長崎県は九州電力エリアに属し、小売は九州電力（九州電力本体が法人小売を担う）、送配電は九州電力送配電が担います。九州エリアは原子力4基（玄海3・4号機、川内1・2号機）が稼働し、加えて太陽光の導入量が国内最大級で、晴天日中には出力制御が実施されるほど再エネ比率が高いのが特徴です。この電源構成により燃料費調整額の感応度は相対的に低めとされます。長崎は半島・離島が多く系統の端に位置する地域もあり、造船・重工の大口需要家は臨海部の受電点に集中しています。玄海原発は県境（佐賀側）に近い立地で、JEPX九州エリア価格は晴天日中に太陽光で低下する局面があります（出典: 九州電力送配電 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "長崎県内最大シェア。長崎・佐世保の特別高圧・高圧の造船・舶用機械・重機械の長期需要家を多数抱えます。法人向けの特別高圧・高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。九州は原子力4基稼働＋太陽光導入量が国内最大級で、燃料費調整額の感応度は相対的に低めとされ、造船所の単価安定にはプラス材料です。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 九州電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "長崎県内の特別高圧・高圧の造船・重工業の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい大型造船所で実績を積み上げています。九州エリアは原子力＋太陽光で燃調感応度が相対的に低めのため固定の単価安定が活きやすい局面もありますが、供給可能kWh枠と燃調条件を含めた総合比較が有効です。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（九州圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "九州圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。造船・重工業では塗装乾燥の熱需要やブラスト・エア工具のための圧縮空気需要があり、ガス＋電気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "造船・舶用機械はグローバル供給網や海運の脱炭素要請に組み込まれることが多く、Scope2/Scope3対応の再エネ調達ニーズが高まっています。造船所は広い屋根面積・ヤードを持つため、屋根オンサイトPPA（自家消費）、オフサイトPPA（県内・九州圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。九州は太陽光導入量が国内最大級で再エネ調達の選択肢が比較的広い一方、出力制御による発電機会損失も論点となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。九州エリアも例外ではなく供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい大型造船所では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX九州エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX九州エリアのスポット価格は、原子力4基稼働＋太陽光導入量が国内最大級という供給構造を背景に、晴天日中には太陽光で価格が低下する局面が見られる一方、太陽光の出力が落ちる夕方・夜間には上昇するなど時間帯による振れが特徴的です。出力制御が実施されるほど再エネ比率が高いことはエリアの限界費用の低位安定に寄与し得ますが、全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "九州電力エリアの特別高圧 — 大型造船所の単価水準",
    detail:
      "大型造船所・重機械工場（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね13〜17円/kWh＋調整項目とされます。九州は原子力4基稼働＋太陽光導入量が国内最大級で、燃料費調整額の感応度が相対的に低めとされるため、燃料高騰局面でも単価の上ぶれが抑えられやすいのが特徴です。燃料費調整額と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は特別高圧で19〜24円/kWhレンジ（九州の低燃調を反映）が目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模舶用機械・中小造船関連の単価",
    detail:
      "長崎・佐世保・諫早の高圧の舶用機械・鉄工事業所（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は15〜19円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は高圧で21〜26円/kWhレンジが目安です。九州は燃調感応度が相対的に低いぶん単価が安定しやすい局面がありますが、溶接・クレーンのピークによる契約電力（基本料金）の影響が大きいため、ピーク平準化と固定化を組合せた見直しのメリットが出やすい場合があります。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 九州電力エリア固有（相対的に低め）",
    detail:
      "九州電力エリアは原子力4基（玄海3・4号機、川内1・2号機）が稼働し、加えて太陽光の導入量が国内最大級であるため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面でも、原子力・再エネ比率の高さが緩衝材となり、火力依存度の高いエリアに比べて燃調の拡大が抑えられやすい傾向がありました。この低い燃調感応度は造船所の単価安定にプラスですが、当面も固定vs市場連動の選択は使用パターン次第で判断する必要があります（出典: 九州電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量5,000万kWh級の大型造船所では年約2.09億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量の大きい造船・重工業では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大型造船所（特別高圧 10,000kW、年間 5,000万kWh）— 代表シナリオ",
    before:
      "Before: 長崎・佐世保近郊の大型造船所A（大型構造物溶接・門型クレーン・機械加工・塗装乾燥を内製）。アーク・自動溶接と大型クレーンが工程進捗に応じて稼働し、溶接・クレーンの同時稼働でデマンドのピークが立つ。九州電力の特別高圧契約＋燃調連動。年間電気代 約12.5億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／溶接電源の高効率インバータ化＋溶接・クレーン同時稼働の平準化／クレーン回生電力の活用／コンプレッサー高効率化＋エア漏れ対策／塗装乾燥の廃熱回収／工場屋根の自家消費太陽光（オンサイトPPA）＋蓄電池でピークシフト／BEMS・需給予測によるデマンド管理。",
    result:
      "Result: 年間電気代 約12.5億円 → 約10.6億円（▲約15%、▲1.9億円・目安）。5年累計の削減額は約9.5億円（年▲1.9億円×5年＝9.5億円）。契約電力 10,000→9,200kW／溶接・クレーンの同時稼働平準化でピークを抑制／RE100比率の段階的引上げ。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模舶用機械・艤装（高圧 2,000kW、年間 1,300万kWh）— 代表シナリオ",
    before:
      "Before: 長崎市の中規模舶用機械・艤装工場B（舶用機械加工・艤装・溶接の多工程製造）。機械加工・溶接・塗装が工程に応じて稼働。九州電力の業務用高圧電力＋燃調連動。工程切替に伴う機械・溶接負荷の変動でデマンドが上下し、年間電気代 約3.2億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／高効率コンプレッサー・溶接電源更新（SII補助1/2活用を検討）／工作機械の待機電力削減・運転スケジュール最適化／屋根太陽光の自家消費（オンサイトPPA）＋蓄電池でピーク平準化／BEMSでデマンド管理。",
    result:
      "Result: 年間電気代 約3.2億円 → 約2.7億円（▲約15%、▲5,000万円・目安）。5年累計の削減額は約2.5億円（年▲5,000万円×5年＝2.5億円）。契約電力 2,000→1,840kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小造船関連・鉄工（高圧 700kW、年間 450万kWh）— 代表シナリオ",
    before:
      "Before: 西海・大村近郊の中小造船関連・鉄工C社（従業員80名・鉄工／溶接／機械加工の小ロット多工程）。九州電力の業務用高圧電力＋燃調連動。溶接・クレーン・機械加工が中心で、工程進捗に応じて負荷が増減する。年間電気代 約1.05億円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場のLED化（県補助＋SII併用を検討）／コンプレッサー集中管理＋エア漏れ対策／溶接・クレーンのピーク平準化／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約1.05億円 → 約9,000万円（▲約14%、▲1,500万円・目安）。5年累計の削減額は約7,500万円（年▲1,500万円×5年＝7,500万円）。契約電力 700→640kW／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "溶接・クレーン同時稼働によるデマンドピーク集中",
    detail:
      "造船・重工業では大型構造物のアーク溶接・自動溶接（大電流・断続消費）と門型クレーンの揚重が同じ時間帯に走ると、デマンド（kW）のピークが急峻に立ち上がります。連続操業型工場と異なり負荷が均一でないため、ピークの高さが契約電力（基本料金）を直接押し上げます。一般に造船所ではこうしたピークが電気代の基本料金部分を左右し、ピーク平準化・工程スケジュール調整・溶接電源のインバータ化・蓄電池併用が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "機械加工（NC・大型工作機械）・塗装乾燥・コンプレッサーの用役負荷",
    detail:
      "機械加工のNC・大型工作機械、塗装ブースの乾燥・換気、ブラスト・エア工具用のコンプレッサーは用役電力の柱です。これらは工程進捗に応じて稼働し、塗装乾燥の加熱・換気やコンプレッサーの圧縮空気供給が電力負荷を押し上げます。運転条件には品質・安全上の制約がある一方、待機時の運転スケジュール最適化やエア漏れ対策で一定の改善余地があります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "九州電力エリアの燃調感応度（相対的に低め）",
    detail:
      "九州電力エリアは原子力4基稼働＋太陽光導入量が国内最大級であるため、燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。これは燃料高騰局面でも単価の上ぶれが抑えられやすい点でプラスで、造船所の単価安定に寄与します。一方、低い燃調感応度のもとでも溶接・クレーンのデマンドピークによる基本料金の影響は残るため、長崎の造船・重工業では燃調安定を前提に、契約電力最適化と固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "工程進捗依存のバッチ負荷とピーク変動",
    detail:
      "造船・重工業はブロック建造・艤装・塗装・修繕といった工程進捗に依存するバッチ的な生産が中心で、船種や工程段階の切替のたびに溶接・クレーン・機械加工・塗装乾燥の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金と海運・サプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて造船・舶用機械は海運の脱炭素やグローバル供給網からScope3 GHG排出削減要請が強まり、造船所・舶用機械の事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。九州は太陽光導入量が国内最大級で再エネ調達の選択肢が比較的広い点が特徴ですが、調達形態の要否は供給網の要請次第です。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "長崎県 産業・脱炭素関連補助（長崎県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、造船・舶用産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策に基づく補助メニュー。造船・重工業の高効率コンプレッサー・溶接電源・LED・塗装乾燥廃熱回収・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は長崎県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 長崎県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・コンプレッサー・溶接電源・LED・ヒートポンプ・廃熱回収設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "造船・重工業のコンプレッサー高効率化・溶接電源更新・全館LED化・塗装乾燥の廃熱回収などで活用しやすい主力補助です。長崎県内の造船・舶用機械の更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積・ヤードの大きい造船所・重機械工場で活用が想定されます。海運・造船サプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。九州は太陽光導入が進み追加性のある調達を検討しやすい一方、出力制御の影響も踏まえて整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率コンプレッサー・溶接電源・廃熱回収・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "九州経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "造船・舶用機械の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "造船・舶用機械の国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。長崎の造船・重工業の高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "長崎市 — 長崎港の造船・重工の中核",
    detail:
      "長崎市は長崎港を擁する造船・舶用機械・重機械の中核集積エリアです。大型構造物の溶接・門型クレーン・機械加工・塗装乾燥を抱える特別高圧・高圧の造船所・舶用機械の事業所群が立地し、溶接・クレーン・コンプレッサーを含む用役負荷が大きい点が共通します。工程進捗に応じたバッチ的な負荷でデマンド変動も大きく、契約電力最適化の余地があります。",
  },
  {
    label: "佐世保市 — 佐世保港の造船・艦船修繕・重機械の集積",
    detail:
      "佐世保市には佐世保港を核とした造船・艦船修繕・重機械の事業所が集積しています。新造のみならず修繕・改造の工程が多く、溶接・クレーン・塗装・機械加工が工程に応じて稼働します。修繕ヤードの稼働は受注の山谷で変動するため、ピーク平準化と契約電力の見直し余地が大きい点が特徴です。臨海部の物流機能とも連動しています。",
  },
  {
    label: "諫早市 — 電子・機械を含む製造業の周辺集積（造船関連サプライヤーを含む）",
    detail:
      "諫早市は電子・機械を含む製造業の事業所が立地するエリアで、造船関連のサプライヤー（部品加工・鉄工・機械加工）を含みます。溶接・機械加工・コンプレッサーの用役負荷が電力構造の柱で、高圧契約の中小〜中堅製造業が中心です。設備更新と運用改善を組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "西海市・大村 — 造船関連・金属加工・鉄工の事業所立地",
    detail:
      "西海市・大村近郊には造船関連・金属加工・鉄工の事業所が立地します。小ロット多工程の鉄工・溶接・機械加工を担う中小事業者が多く、工程切替に伴う溶接・機械負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、コンプレッサー・LED・溶接電源の更新と契約見直しを組合せた電気代最適化の余地があります。",
  },
  {
    label: "県内全域 — 造船・舶用を軸とした重工業のサプライチェーン基盤",
    detail:
      "長崎の造船・重工業は、長崎・佐世保の二大拠点を核に、諫早・大村・西海方面の造船関連サプライヤー・鉄工・金属加工が裾野を支えるサプライチェーン構造の上に成り立っています。設計・加工・建造・艤装・修繕・物流までの裾野が県内で広がり、造船・舶用機械の集積を支えるエコシステムが形成されています。これらの事業所群は、九州電力エリアの原子力4基稼働＋太陽光導入量が国内最大級という電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "九州エリアの新電力浸透度",
    detail:
      "九州電力エリアの新電力比率は、原子力＋太陽光で燃調感応度が相対的に低めという供給構造のもと、年間使用量の大きい工場を中心に切替検討が進む傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。切替メリットは燃調条件・契約期間・再エネ付加価値で判断する必要があります。年間使用量の大きい造船・重工業では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、九州でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。九州は原子力＋太陽光で燃調感応度が相対的に低めですが、全国需給逼迫時にはエリア間連系を通じて影響を受けることもあり、長期固定（2〜5年）で単価を安定させる選択が検討されています。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・九州エリアでの供給安定性・原子力＋太陽光に伴う燃調の安定。デメリット: 新電力との比較での単価差、固定単価の硬直性。継続か切替かは燃調条件・契約期間・再エネ付加価値を含めた総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（長崎×造船固有）",
    detail:
      "①造船・重工・大口需要家への供給実績、②非化石証書／再エネトラッキング付メニュー（海運・造船サプライチェーンのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（九州は相対的に低めだが上限・連動条件を確認）、⑤BCP対応（停電時の溶接・クレーン・塗装工程の継続と安全確保）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "海運・造船サプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・九州圏の太陽光案件）／コーポレートPPAが検討材料になります。九州は太陽光導入量が国内最大級で追加性のある調達を比較的検討しやすい環境ですが、出力制御による発電機会損失も論点です。導入可否は屋根面積・ヤード・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "溶接・クレーンのピーク平準化＋蓄電池併用",
    detail:
      "造船所の電気代の基本料金（契約kW）はデマンドピークで決まるため、溶接とクレーンの同時稼働を工程スケジュールでずらし、ピークを平準化することが最大の打ち手です。あわせて蓄電池でピーク時に放電してデマンドを抑える運用が有効で、BEMSによる需要の見える化と組合せると効果が高まります。ピーク平準化と契約電力の見直しで基本料金▲10〜20%程度が見込めるケースもあります。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は工程構成や受注変動によって変動します。",
  },
  {
    label: "溶接電源の高効率インバータ化＋クレーン回生電力の活用",
    detail:
      "アーク溶接・自動溶接の電源を高効率インバータ機に更新すると、無効電力・損失を抑え、ピーク電流の立ち方も改善できます。あわせて門型クレーンの降下・制動時に発生する回生電力を回収・再利用することで、工場全体の電力消費を抑える余地があります。設備更新（高効率機）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。造船・重工業ではブラスト・エア工具・搬送など圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "塗装乾燥の廃熱回収・機械加工の運転最適化",
    detail:
      "塗装ブースの乾燥・換気は加熱・送風で電力負荷が大きい工程ですが、廃熱回収や換気量の適正化、機械加工（NC・工作機械）の待機電力削減・運転スケジュール最適化により、品質を維持しつつベース電力を抑えられます。用役（ユーティリティ）の運転最適化は工場全体の電力削減余地を把握する出発点であり、定量化することが重要です。投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積・ヤードを確保できる造船所・重機械工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、溶接・クレーンのピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。九州の太陽光導入環境も踏まえ、本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "溶接・クレーンの同時稼働ピークを工程スケジュール調整・蓄電池で平準化できる余地があるか",
  "溶接電源・機械加工・塗装乾燥・コンプレッサーの年間使用kWhを工程別に把握しているか",
  "溶接電源の高効率インバータ化・クレーン回生電力の活用余地を検討したか",
  "燃料費調整額の条件（九州は相対的に低めだが上限・連動条件）を契約書で確認したか",
  "九州電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "海運・造船サプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・ヤード・kW・年間発電量・回収年数）を実施したか",
  "長崎県・SII・経産局補助の併用可否を設備別に整理したか",
  "工程進捗に伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の溶接・クレーン・塗装工程の安全確保（自家発・蓄電池）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "長崎県の造船・重工業は九州電力エリア固有の単価リスクがありますか？",
    answer:
      "九州電力エリアは原子力4基（玄海3・4号機、川内1・2号機）が稼働し、加えて太陽光の導入量が国内最大級であるため、燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。これは燃料高騰局面でも単価の上ぶれが抑えられやすい点でプラスで、造船所の単価安定に寄与します。一方、低い燃調感応度のもとでも溶接・クレーンの同時稼働によるデマンドピークが基本料金（契約kW）を押し上げやすい点には注意が必要です。火力依存度が相対的に低いぶん燃調は安定しやすいため、契約電力の最適化と固定vs市場連動の選択を組合せて検討する価値があります。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 九州電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "造船・重工業で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般にアーク溶接・自動溶接（大電流・断続消費）と大型クレーン・門型クレーン（揚重時のピーク）が電力消費とデマンドの中心とされます。次いで機械加工（NC・大型工作機械）、塗装ブースの乾燥・換気、ブラスト・エア工具用のコンプレッサーが続きます。これらは連続稼働ではなく工程進捗に依存するバッチ的な負荷で、溶接とクレーンが同時に走る局面でデマンドのピークが急峻に立つため、ピーク平準化・工程スケジュール調整・溶接電源のインバータ化が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "造船所・舶用機械の工場で電気代を下げる打ち手は何ですか？",
    answer:
      "工程進捗依存のバッチ生産では溶接・クレーン・機械加工・塗装乾燥の稼働が断続的に発生し、デマンド変動が大きくなりがちです。溶接とクレーンの同時稼働を工程スケジュールでずらすピーク平準化、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせて溶接電源の高効率インバータ化・クレーン回生電力の活用、コンプレッサー高効率化、塗装乾燥の廃熱回収、LED化が有効です。長崎県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "長崎の造船所で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積・ヤードを確保できる造船所・重機械工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。九州は太陽光導入量が国内最大級で追加性のある調達を比較的検討しやすい環境ですが、出力制御による発電機会損失も論点となります。導入可否は屋根面積・ヤード・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は造船・重工業の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量5,000万kWh級の大型造船所では年約2.09億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量の大きい造船・重工業では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "長崎の造船・重工業でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。九州エリアは原子力＋太陽光で燃調感応度が相対的に低めのため固定の単価安定が活きやすい局面もありますが、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "長崎県の補助金は造船・重工業でも使えますか？",
    answer:
      "使える可能性があります。長崎県は造船・舶用を主要産業とする産業振興・脱炭素政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。高効率コンプレッサー・溶接電源・LED・塗装乾燥廃熱回収・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は長崎県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の工程継続は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は九州電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし造船・重工業では停電時に溶接・クレーン・塗装工程の安全な停止と再開、仕掛品の品質確保が重要であり、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保と安全確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "九州電力 法人向け料金プラン", url: "https://www.kyuden.co.jp/" },
  { name: "九州電力送配電 供給・系統情報", url: "https://www.kyuden.co.jp/td_index.html" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "長崎県 産業政策・脱炭素", url: "https://www.pref.nagasaki.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "日本造船工業会", url: "https://www.sajn.or.jp/" },
];

export default function NagasakiShipbuildingElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/nagasaki-shipbuilding-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "長崎県の造船・重工業の電気料金", url: "https://simulator.eic-jp.org/nagasaki-shipbuilding-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">長崎県の造船・重工業の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            長崎県の造船・重工業の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            長崎県は長崎・佐世保を二大拠点として造船・舶用機械・重機械が広く集積し、諫早・大村・西海方面に造船関連サプライヤーや鉄工が裾野を支える、国内有数の造船・重工業の県です。本ページでは「長崎県 × 造船・重工業」というクロス領域に絞り、九州電力エリア固有の単価事情（原子力4基稼働＋太陽光導入量が国内最大級で燃調感応度が相対的に低め）と、大型構造物溶接／クレーン／機械加工／塗装乾燥の電力プロファイル、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。なお広島＝呉・江田島の造船を含む自動車・造船クロスとは対象を分け、長崎＝長崎・佐世保の造船専業集積として検索意図を分離しています。本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>長崎県の造船・重工業集積（長崎・佐世保・諫早・西海/大村）の電力プロファイル</li>
              <li>大型造船所／中規模舶用機械／中小造船関連・鉄工のBefore/After代表シナリオ3件</li>
              <li>九州電力エリアの単価水準と燃調感応度（相対的に低め・原子力4基＋太陽光国内最大級）</li>
              <li>海運・造船サプライチェーンのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>長崎×造船に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「長崎 × 造船・重工業」のクロス領域に特化したガイドです。長崎県全体の文脈は{" "}
            <Link href="/nagasaki-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              長崎県の法人電気料金ガイド
            </Link>
            、業種一般としての造船・重工全体は{" "}
            <Link href="/shipbuilding-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              造船・重工の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              長崎県の造船・重工業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県は長崎港の造船・舶用機械・重機械の中核集積と、佐世保港の造船・艦船修繕・重機械の集積という二大拠点を軸に、諫早・大村・西海方面の造船関連サプライヤーや鉄工・金属加工の事業所が広く立地しています。大型構造物の溶接・建造・艤装・修繕を担う特別高圧・高圧の大口需要家が臨海部の受電点に集中し、造船・舶用機械の事業所群が県内のサプライチェーンを支えています。
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
              長崎県全体の文脈は{" "}
              <Link href="/nagasaki-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                長崎県の法人電気料金ガイド
              </Link>
              、九州電力エリア全体は{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                九州電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/shipbuilding-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                造船・重工の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの主要電力会社・新電力（長崎×造船での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県内の造船・重工業は、九州電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。九州は原子力4基稼働＋太陽光導入量が国内最大級で燃調感応度が相対的に低めという特性のもと、固定の単価安定が活きやすい局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              九州電力エリアの料金水準と造船・重工業への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（九州は相対的に低め）、再エネ賦課金の累積負担を、造船・重工業の代表的な契約タイプ別に整理します。九州固有の原子力4基稼働＋太陽光国内最大級・燃調相対的に低めの特性を踏まえつつ、溶接・クレーンのデマンドピーク対策を組合せた契約戦略が経営判断の中心となります。
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
              規模別代表シナリオ3件 — 大型造船所／中規模舶用機械／中小造船関連・鉄工（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/shipbuilding-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">造船・重工の電気料金見直し</Link>
              、{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">連続操業工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              長崎×造船固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎の造船・重工業の電気代は、溶接・クレーン同時稼働のデマンドピーク・機械加工／塗装乾燥／コンプレッサーの用役負荷・九州エリアの燃調感応度（相対的に低め）・工程進捗依存のバッチ変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 長崎県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県の産業・脱炭素補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、経産局のサプライチェーン強靱化補助の5層を組合せ、造船・重工業の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（長崎／佐世保／諫早／西海・大村）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎の造船・重工サプライチェーンは、長崎港の造船・重工の中核を中心に、佐世保港の造船・艦船修繕・重機械の集積、諫早の造船関連サプライヤーを含む製造業の周辺集積、西海・大村の造船関連・金属加工・鉄工、県内全域の造船・舶用を軸とした重工業のサプライチェーン基盤という構造です。
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
              九州は原子力＋太陽光で燃調感応度が相対的に低めであること、市場連動からの固定回帰、海運・造船サプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              長崎×造船の省エネ・自家消費事例（溶接・クレーン平準化／溶接電源インバータ・回生／コンプレッサー／塗装乾燥廃熱・機械加工／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              造船・重工業の省エネは、溶接・クレーンのピーク平準化＋蓄電池併用、溶接電源の高効率インバータ化＋クレーン回生電力の活用、コンプレッサー高効率化、塗装乾燥の廃熱回収＋機械加工の運転最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              長崎×造船 契約見直しチェックリスト（12項目）
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
              シミュレーターで長崎×造船の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎の造船・重工業は、溶接・クレーン同時稼働のデマンドピーク・機械加工／塗装乾燥の用役負荷・海運/造船サプライチェーンのCN要請など複合リスクを抱えます。九州は燃調感応度が相対的に低めという特性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
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
              { href: "/nagasaki-business-electricity-cost", title: "長崎県の法人電気料金ガイド（地域一般）", description: "長崎県全体の電力事情・九州電力・補助金。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州エリアの料金体系・原子力＋太陽光・燃調感応度。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/shipbuilding-electricity-cost-review", title: "造船・重工の電気料金見直し（業種一般）", description: "溶接・クレーン・機械加工・塗装乾燥の最適化。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "連続操業工場の電気料金見直し（業種一般）", description: "ベース負荷・デマンド管理・契約電力の最適化。" },
              { href: "/hiroshima-automotive-electricity-cost", title: "広島県の自動車・造船×中国電力（地域クロス）", description: "広島=呉・江田島の造船を含む自動車クロス。長崎=長崎・佐世保の造船専業集積と検索意図を分離。" },
              { href: "/hyogo-steel-electricity-cost", title: "兵庫県の鉄鋼・重工×関西電力（地域クロス）", description: "重工つながりの別業種・別エリア比較。" },
              { href: "/oita-semiconductor-electricity-cost", title: "大分県の半導体・電子部品×九州電力（地域クロス）", description: "同じ九州電力エリアの別業種クロス。業種で論点を分離。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "年度公募のタイミングと採択率の見立て。" },
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
            heading="長崎の造船・重工業の電気代リスクを自社条件で試算する"
            description="大型造船所・中規模舶用機械・中小造船関連いずれも、九州電力エリア・溶接/クレーンのデマンドピーク・海運/造船サプライチェーンのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="長崎の造船・重工業の電力契約見直し、専門家に相談しませんか？"
            description="大型造船所・中規模舶用機械・中小造船関連いずれも、溶接・クレーン・機械加工・塗装乾燥の規模感と海運・造船サプライチェーンのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で長崎県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
