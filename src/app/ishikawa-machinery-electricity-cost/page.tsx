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
  "石川県の機械工場の電気料金完全ガイド｜小松の建設機械・繊維機械の集積と北陸電力エリア";
const pageDescription =
  "石川県の機械製造業に特化。小松の建設機械・金沢周辺の繊維機械/産業機械の集積を背景に、機械加工（マシニング）・組立・塗装・熱処理の電力プロファイル、北陸電力エリアの単価事情（水力比率が高く燃調感応度が相対的に低め）、契約最適化、補助金・PPA活用を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "石川県 機械工場 電気料金",
    "小松 建設機械 電気代",
    "繊維機械 産業機械 電力",
    "北陸電力 高圧 機械加工",
    "マシニング 熱処理 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ishikawa-machinery-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ishikawa-machinery-electricity-cost",
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
    label: "石川県の機械産業集積 — 小松の建設機械・金沢周辺の繊維機械／産業機械",
    detail:
      "石川県は機械製造業が県の基幹産業の一つで、小松市は建設機械（コマツ発祥の地）の集積として全国に知られます。金沢市・白山市・能美市・加賀市周辺には繊維機械・産業機械・工作機械・建設機械部品・各種受託加工の事業所が広がっています。NC工作機械による機械加工、組立、塗装（乾燥炉）、熱処理（浸炭・焼入れ）まで一貫して扱う中堅工場から、受託加工の中小まで層が厚いのが特徴です。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に北陸電力エリア固有の論点を整理します（出典: 業界団体・経産省/エネ庁統計・自治体統計から整理）。",
  },
  {
    label: "機械工場の電力プロファイル — NC工作機械・熱処理炉・塗装乾燥・コンプレッサー",
    detail:
      "機械工場の電力消費の中心は、NC工作機械・マシニングセンタによる切削・研削、組立ライン、塗装（乾燥炉・前処理）、熱処理炉（浸炭・焼入れ）、エア供給のコンプレッサーです。とりわけ熱処理炉と塗装乾燥は電力・燃料を多く消費し、マシニングセンタの主軸モーター・クーラント・集塵もベース負荷を押し上げます。一般に機械加工系では加工・用役で電力の50〜70%程度を占めるとされ（出典: 業界団体・省エネ事例から整理）、稼働の山谷が大きいためデマンド（kW）の平準化が単価最適化の主戦場になります。",
  },
  {
    label: "受託加工・多品種小ロットの電力負荷",
    detail:
      "石川県は受託加工の中小企業が多く、多品種・小ロットの加工ラインを抱える事業所が目立ちます。段取り替え（チェンジオーバー）のたびに工作機械の起動停止が増え、加工内容によって主軸負荷・クーラント・集塵の稼働が断続的に増減するため、デマンド変動が大きくなりがちです。連続生産ではなくロット生産が中心の工程構成では、ピーク需要の平準化が契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "熱処理・塗装乾燥に伴う恒常負荷とピーク",
    detail:
      "熱処理炉（浸炭・焼入れ・焼戻し）は昇温・保持に長時間を要し、炉を一度立ち上げると連続運転が基本となるため、夜間・休日もベース電力が続きやすい工程です。塗装の乾燥炉・前処理ラインも昇温時にピークが立ちます。生産を止めても炉の保温や保管・空調は止めにくいため、ベース電力が高く需要が平準化しにくい点が機械工場の電力構造の特徴です。炉の運用最適化・断熱改善は電力削減の重要論点です（出典: 省エネ事例・業界団体資料から整理）。",
  },
  {
    label: "北陸電力エリアの系統と機械工場の関係",
    detail:
      "石川県は北陸電力エリアに属し、小売は北陸電力（北陸電力ミライズではなく北陸電力本体が法人小売を担う）、送配電は北陸電力送配電が担います。北陸エリアは水力発電比率が全国的にも高く、黒部川・庄川・手取川水系などの豊富な水資源を背景に、相対的に安定した電源構成を持つのが特徴です。志賀原子力発電所は現在停止中で、その分を火力・水力・他エリアからの融通で補っています。JEPX北陸エリア価格を参照しつつ、エリア固有の単価事情を踏まえた契約戦略が求められます（出典: 北陸電力送配電 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "北陸電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "石川県内最大シェア。小松市・金沢市・白山市・能美市の高圧・特別高圧の機械工場の長期需要家を多数抱えます。法人向けの高圧・特別高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。北陸は水力比率が高く全国でも電力単価が相対的に低位という特徴があり、燃料費調整額の感応度も他エリアと比べて相対的に低めとされます。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 北陸電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "石川県内の高圧・特別高圧機械工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい大型加工拠点で実績を積み上げています。ただし北陸エリアは元々の単価水準が相対的に低位なため、他エリアほど大きな価格差が出にくい局面もあり、供給可能kWh枠と燃調条件を含めた総合比較が必要です。なお本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    name: "地域系・ガス系新電力（北陸圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "北陸圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。機械工場では塗装乾燥・熱処理に蒸気・燃焼需要が伴うため、ガス＋電気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "建設機械・産業機械の大手やグローバル供給網に組み込まれる部品サプライヤーでは、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（敷地・屋根面積を活かす自家消費）、オフサイトPPA（県内・北陸圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。北陸は水力中心で系統の再エネ比率がもともと高い点も特徴ですが、追加性のある調達を求める需要家にはPPAが選択肢となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。北陸エリアは相対的に価格変動が穏やかだったとされますが、それでも供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい機械工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX北陸エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX北陸エリアのスポット価格は、水力比率が高い供給構造を背景に、他エリアと比べて相対的に落ち着いた推移を示す局面が多いとされます。ただし渇水期や全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "北陸電力エリアの特別高圧 — 大規模機械工場の単価水準",
    detail:
      "大規模建設機械工場・大型加工拠点（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね14〜17円/kWh＋調整項目とされます。北陸は水力比率が高く単価が全国でも相対的に低位なため、他エリア（東京・関西・中部等）よりやや低めのレンジに収まる傾向があります。燃料費調整額（北陸はエリア特性として感応度が相対的に低め）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は19〜24円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小機械工場の単価",
    detail:
      "金沢市・白山市・能美市・加賀市の高圧機械工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は15〜19円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は21〜26円/kWhレンジが目安です。北陸は元々の単価が低位なため新電力切替による下げ幅は他エリアより小さくなりやすい一方、燃調感応度が低いことで単価の安定性が得られる点はメリットになり得ます。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 北陸電力エリア固有（相対的に低め）",
    detail:
      "北陸電力エリアは水力発電比率が高く、火力（LNG・石炭）への依存度が他エリアより相対的に低いため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面でも、北陸の燃調変動幅は火力依存度の高いエリアと比べて穏やかに推移した側面があります。とはいえ渇水年には水力出力が落ち火力比率が上がるため、燃調がゼロではない点に留意が必要です（出典: 北陸電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量2,000万kWh級の大規模機械工場では年約8,360万円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い熱処理・加工系の機械工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の電力会社・契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模建設機械工場（特別高圧 4,000kW、年間 2,200万kWh）— 代表シナリオ",
    before:
      "Before: 小松周辺の大規模建設機械工場A（NC工作機械・マシニングセンタの機械加工＋熱処理炉＋塗装乾燥＋組立を一貫）。熱処理炉と塗装乾燥が連続運転し、マシニングのクーラント・集塵・コンプレッサーが常時稼働。北陸電力の特別高圧契約＋燃調連動。年間電気代 約5.0億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／NC工作機械の待機電力カット・主軸/クーラントのインバータ最適化／熱処理炉の断熱改修・バッチ統合・排熱回収／塗装乾燥炉の昇温制御・前処理の省エネ／工場屋根の自家消費太陽光（オンサイトPPA）導入／BEMS・需給予測で加工ピークをシフト。",
    result:
      "Result: 年間電気代 約5.0億円 → 約4.3億円（▲約14%、▲7,000万円・目安）／契約電力 4,000→3,650kW／加工・熱処理の用役電力を削減／RE100比率の段階的引上げ。5年累計では ▲7,000万円×5年＝▲3.5億円（目安）。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模機械工場（高圧 1,200kW、年間 750万kWh）— 代表シナリオ",
    before:
      "Before: 金沢市・白山市の中規模機械工場B（産業機械・工作機械部品の切削・研削・組立・塗装）。NC工作機械群＋塗装乾燥＋コンプレッサーが稼働。北陸電力の業務用高圧電力＋燃調連動。段取り替えに伴う起動停止でデマンド変動が大きく、年間電気代 約1.8億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／NC工作機械の待機電力・主軸/クーラントのインバータ更新（SII補助1/2活用を検討）／コンプレッサー高効率機更新＋エア漏れ対策／塗装乾燥炉の昇温制御最適化／屋根太陽光の自家消費（オンサイトPPA）導入／BEMSで加工ピーク平準化。",
    result:
      "Result: 年間電気代 約1.8億円 → 約1.55億円（▲約14%、▲2,500万円・目安）／契約電力 1,200→1,100kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。5年累計では ▲2,500万円×5年＝▲1.25億円（目安）。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小受託加工（高圧 400kW、年間 230万kWh）— 代表シナリオ",
    before:
      "Before: 能美市・加賀市近郊の中小受託加工C社（従業員60名・多品種小ロットの切削／研削／表面処理）。北陸電力の業務用高圧電力＋燃調連動。NC工作機械＋コンプレッサー＋集塵が中心で、夜間も一部炉・装置のベース電力が続く。年間電気代 約5,500万円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場のLED化（県補助＋SII併用を検討）／NC工作機械の待機電力カット・力率改善／コンプレッサー集中管理＋エア漏れ対策／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約5,500万円 → 約4,700万円（▲約14.5%、▲800万円・目安）／契約電力 400→360kW／投資回収 補助金後 2年前後（目安）。5年累計では ▲800万円×5年＝▲4,000万円（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "NC工作機械・マシニングの加工負荷集中",
    detail:
      "NC工作機械・マシニングセンタは主軸モーター・送り軸・クーラントポンプ・集塵が稼働し、重切削や同時多軸加工では瞬時的な負荷ピークが立ちます。多台数を同時に立ち上げると工場全体のデマンドが跳ね上がり、契約電力（kW）の過大設定につながりがちです。一般に機械加工系では加工・用役で電力の50〜70%程度を占めるとされ、待機電力カット・力率改善・起動タイミングの分散が単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "熱処理炉・塗装乾燥の用役負荷",
    detail:
      "熱処理炉（浸炭・焼入れ・焼戻し）は昇温・保持に長時間連続運転するため電力・燃料負荷が大きい工程です。加えて塗装の乾燥炉・前処理ライン、洗浄・脱脂の加熱も用役電力・燃料を押し上げます。これらは品質要件のため運転条件の自由度が低い一方、炉の断熱改善・バッチ統合・排熱回収・昇温制御の最適化で一定の改善余地があります（出典: 省エネ事例・業界団体資料から整理）。",
  },
  {
    label: "北陸電力エリアの燃調感応度（相対的に低め）",
    detail:
      "北陸電力エリアは水力比率が高く火力依存度が相対的に低いため、燃料費調整額の感応度が他エリアより低めとされるのがエリア固有の特徴です。これは燃料高騰局面で単価が急騰しにくいメリットになり得る一方、渇水年には水力出力が落ち火力比率が上がるため燃調が増える局面もあります。石川の機械工場では、この相対的に安定した単価環境を前提に固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット受託加工に伴うデマンド変動",
    detail:
      "受託加工・産業機械部品は多品種小ロット生産が中心で、段取り替えのたびに工作機械の起動停止が増え、主軸負荷・クーラント・集塵の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて建設機械・産業機械の大手やグローバル供給網からScope3 GHG排出削減要請が強まり、部品サプライヤーでも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。北陸は系統の再エネ比率がもともと高い点が有利に働き得ますが、追加性のある調達を求められる場合はPPA等が選択肢となります。本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "石川県 産業政策・ものづくり産業振興補助（石川県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、機械産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興政策（ものづくり基盤の強化を含む）に基づく補助メニュー。機械・受託加工の高効率コンプレッサー・LED・熱処理炉断熱・工作機械更新・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は石川県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 石川県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率コンプレッサー・工作機械・LED・熱処理炉・ヒートポンプ・乾燥設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "機械工場のコンプレッサー高効率化・NC工作機械の省エネ更新・全館LED化・熱処理炉の断熱改修などで活用しやすい主力補助です。石川県内の建設機械・産業機械・受託加工の更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい機械工場・加工拠点で活用が想定されます。建設機械・産業機械サプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。北陸は系統再エネ比率が高い点も踏まえ、追加性の要否を整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率コンプレッサー・ヒートポンプ・燃料転換・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "中部経済産業局（北陸支局含む）サプライチェーン強靱化・脱炭素関連補助",
    target: "機械・受託加工の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "ものづくり産業の国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。石川の建設機械・産業機械・受託加工の高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "小松市 — 建設機械の中核",
    detail:
      "小松市は建設機械（コマツ発祥の地）の集積として全国に知られ、建設機械の組立・機械加工・部品サプライヤーが集中するエリアです。NC工作機械・マシニングセンタによる重切削、熱処理炉、塗装乾燥、組立を抱える高圧・特別高圧の機械工場が多く、加工・用役負荷が大きい点が共通します。多品種・大型部品の加工のためデマンド変動も大きく、契約電力最適化の余地があります。",
  },
  {
    label: "金沢市・野々市市 — 産業機械・工作機械・精密",
    detail:
      "金沢市・野々市市近郊には産業機械・工作機械・精密部品・繊維機械関連の事業所が立地します。切削・研削・組立・検査ラインの電力に加え、塗装乾燥やコンプレッサーが恒常負荷となります。都市部の物流・人材機能と連動し、多様な受託加工と完成機メーカーが集積しています。",
  },
  {
    label: "白山市・能美市 — 機械加工・部品サプライヤー集積",
    detail:
      "白山市・能美市近郊は機械加工・建設機械部品・産業機械部品のサプライヤーが立地するエリアです。多品種小ロットの加工ラインを抱える事業所が多く、段取り替えに伴う起動停止のための主軸・クーラント・集塵負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、設備更新と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "加賀市・能美 — 機械・繊維機械・周辺産業",
    detail:
      "加賀市・能美近郊には機械・繊維機械・周辺産業の事業所が立地します。豊富な水資源を背景とした工業用水の確保がしやすい立地特性があり、加工・洗浄に必要な用水面での優位性が指摘されることがあります。高圧契約の中小製造業が中心で、加工・熱処理・コンプレッサーの恒常負荷が電力構造の柱です。",
  },
  {
    label: "県内全域 — ものづくり基盤を起源とする産業集積",
    detail:
      "石川の機械産業は、建設機械・繊維機械・工作機械を中心としたものづくり基盤の上に蓄積されてきた産業集積の上に成り立っています。完成機メーカーから部品加工・表面処理・組立までの裾野が県内で完結しやすく、建設機械・産業機械の集積を支えるエコシステムを形成しています。これらの事業所群は、北陸電力エリアの水力中心の電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "北陸エリアの新電力浸透度",
    detail:
      "北陸電力エリアの新電力比率は、元々の単価水準が全国でも低位なこともあり、他エリア（東京・関西）と比べて低めにとどまる傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。価格差が出にくい分、切替メリットは燃調条件・契約期間・再エネ付加価値で判断する必要があります。年間使用量の大きい機械工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、北陸でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。北陸はもともと燃調感応度が低めですが、渇水年の火力比率上昇や全国需給逼迫時の連系影響もあるため、長期固定（2〜5年）で単価を安定させる選択が検討されています。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "北陸電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・水力中心の安定供給。デメリット: 新電力との比較で単価がやや高めになる局面、燃料費調整額の条件差。北陸は元々の単価が低位なため新電力との価格差は他エリアより小さくなりやすく、継続か切替かは総合的な比較が必要です。いずれにせよ本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（石川×機械固有）",
    detail:
      "①機械加工・熱処理を伴う工場への供給実績、②非化石証書／再エネトラッキング付メニュー（建設機械・産業機械サプライチェーンのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（北陸は元々低めだが渇水年リスクを確認）、⑤BCP対応（停電時の炉・装置の保護・段取り再開）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "建設機械・産業機械サプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・北陸圏の太陽光案件）／コーポレートPPAが検討材料になります。北陸は系統再エネ比率が高い一方、追加性のある調達を求められる場合はPPAが選択肢です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "NC工作機械の待機電力カット＋インバータ最適化",
    detail:
      "NC工作機械・マシニングセンタは、非加工時の主軸・クーラント・油圧・集塵の待機電力を自動停止（オートシャットダウン）で抑えられます。さらに主軸・クーラントポンプ・送り軸のインバータ最適化と力率改善を組合せることで電力▲10〜20%程度が見込めます。多台数の起動タイミング分散でデマンドピークも抑えられます。SII補助＋県補助の併用で投資回収 2〜4年が目安です。効果は加工内容や設備年式によって変動します。",
  },
  {
    label: "熱処理炉の断熱改善・バッチ統合・排熱回収",
    detail:
      "熱処理炉（浸炭・焼入れ・焼戻し）は炉壁の断熱改修、バッチの統合運転、昇温・保持プロファイルの最適化により、品質を維持しつつ運転電力・燃料を抑える余地があります。排熱を前処理・洗浄の加熱や暖房に回す排熱回収も電力・燃料削減に寄与します。設備更新（高効率炉）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。機械工場では計装エア・搬送・洗浄・ブロー乾燥など圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "塗装乾燥・前処理の運転最適化＋LED化",
    detail:
      "塗装乾燥炉の昇温制御・断熱、前処理ラインの加熱・洗浄の運転スケジュール最適化で、品質を維持しつつ用役電力を抑えられます。あわせて工場全館のLED化は機械加工現場でも効果が大きく、照度を確保しつつ照明電力を削減できます。これらは比較的着手しやすく、投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる機械工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、加工ピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。北陸の系統特性も踏まえ、本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "NC工作機械・マシニングの非加工時待機電力（主軸・クーラント・集塵）が自動停止されているか",
  "熱処理炉・塗装乾燥・コンプレッサーの年間使用kWhを工程別に把握しているか",
  "多台数の工作機械の起動タイミング分散でデマンドピークを抑える余地があるか",
  "燃料費調整額の条件（北陸は相対的に低めだが渇水年の影響）を契約書で確認したか",
  "北陸電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "建設機械・産業機械サプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "石川県・SII・経産局補助の併用可否を設備別に整理したか",
  "段取り替えに伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の炉・装置の保護と段取り再開（自家発・蓄電池・UPS）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "石川県の機械工場は北陸電力エリア固有の単価メリットがありますか？",
    answer:
      "北陸電力エリアは水力発電比率が全国的にも高く、電力単価が相対的に低位とされるのがエリア固有の特徴です。火力依存度が低いため燃料費調整額の感応度も相対的に低めで、燃料高騰局面で単価が急騰しにくいメリットがあります。ただし渇水年には水力出力が落ち火力比率が上がるため燃調がゼロになるわけではありません。元々の単価が低位なため新電力切替による下げ幅は他エリアより小さくなりやすい点にも留意が必要です。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 北陸電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "機械工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般にNC工作機械・マシニングセンタの加工（主軸・クーラント・集塵）と、熱処理炉・塗装乾燥の用役負荷が電力消費の中心とされ、加工・用役で工場全体の50〜70%程度を占めるとされます。次いでコンプレッサー（圧縮空気）、照明、検査・搬送ラインが続きます。重切削や炉の昇温時にデマンドピークが立ちやすいため、待機電力カット・起動タイミング分散・炉の断熱とバッチ統合が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "受託加工・多品種小ロットの工場で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種小ロット加工では段取り替えに伴う工作機械の起動停止で主軸・クーラント・集塵負荷が断続的に発生し、デマンド変動が大きくなりがちです。生産スケジュールの調整や多台数の起動タイミング分散、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせてNC工作機械の待機電力カット、コンプレッサー高効率化、LED化が有効です。石川県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "石川の機械工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。北陸は系統の再エネ比率がもともと高いため、追加性が必要かどうかを整理することが重要です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は機械工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量2,000万kWh級の大規模機械工場では年約8,360万円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い熱処理・加工系の機械工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "石川の機械工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。北陸エリアは元々の単価が低位なため、他エリアほど大きな価格差が出にくく、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "石川県の補助金は機械工場でも使えますか？",
    answer:
      "使える可能性があります。石川県はものづくり基盤の強化を含む産業振興政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。コンプレッサー・工作機械・LED・熱処理炉断熱・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は石川県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の炉・装置の保護は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は北陸電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし機械工場では停電時に熱処理炉の保護・加工中ワークの保全・装置の安全停止と段取り再開が品質・安全に直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "北陸電力 法人向け料金プラン", url: "https://www.rikuden.co.jp/" },
  { name: "北陸電力送配電 供給・系統情報", url: "https://www.rikuden.co.jp/nw/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "石川県 産業政策・ものづくり振興", url: "https://www.pref.ishikawa.lg.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "経済産業省", url: "https://www.meti.go.jp/" },
];

export default function IshikawaMachineryElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ishikawa-machinery-electricity-cost"
        datePublished="2026-06-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "石川県の機械工場の電気料金", url: "https://simulator.eic-jp.org/ishikawa-machinery-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">石川県の機械工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            石川県の機械工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            石川県は小松の建設機械（コマツ発祥の地）を核に、金沢市・白山市・能美市周辺の繊維機械・産業機械・工作機械・建設機械部品まで、機械製造業が県の基幹産業として集積する地域です。本ページでは「石川県 × 機械製造業」というクロス領域に絞り、北陸電力エリア固有の単価事情（水力比率が高く燃調感応度が相対的に低め）と、NC工作機械による機械加工／組立／塗装乾燥／熱処理炉の電力プロファイル、契約最適化、補助金・PPA活用までを実務目線で整理します。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-11" updatedAt="2026-06-11" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>石川県の機械産業集積（小松・金沢・白山・能美・加賀）の電力プロファイル</li>
              <li>大規模建設機械／中規模機械／中小受託加工のBefore/After代表シナリオ3件</li>
              <li>北陸電力エリアの単価水準と燃調感応度（相対的に低め）</li>
              <li>建設機械・産業機械サプライチェーンのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>石川×機械に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「石川 × 機械」のクロス領域に特化したガイドです。石川県全体の文脈は{" "}
            <Link href="/ishikawa-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              石川県の法人電気料金ガイド
            </Link>
            、業種一般としての組立・加工工場全体は{" "}
            <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              組立工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川県の機械産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県は建設機械・繊維機械・産業機械・工作機械を中心としたものづくり集積地です。小松市の建設機械（コマツ発祥の地）を核に、金沢市・白山市・能美市・加賀市等に産業機械・工作機械・建設機械部品・受託加工の工場群が広がり、NC工作機械・熱処理炉・塗装乾燥を抱える高圧・特別高圧の機械工場が多数立地しています。
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
              石川県全体の文脈は{" "}
              <Link href="/ishikawa-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                石川県の法人電気料金ガイド
              </Link>
              、北陸電力エリア全体は{" "}
              <Link href="/region-hokuriku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                北陸電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                組立工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              北陸電力エリアの主要電力会社・新電力（石川×機械での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県内の機械工場は、北陸電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。北陸は元々の単価が低位なため価格差が出にくい一方、燃調安定性や再エネ付加価値で選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              北陸電力エリアの料金水準と機械工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（北陸は相対的に低め）、再エネ賦課金の累積負担を、機械工場の代表的な契約タイプ別に整理します。北陸固有の水力中心・燃調低感応の特性を踏まえた契約戦略が経営判断の中心となります。
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
              規模別代表シナリオ3件 — 大規模建設機械／中規模機械／中小受託加工（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。北陸は燃調感応度が低く削減率はやや控えめになりやすい点も踏まえています。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">組立工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川×機械固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川の機械工場の電気代は、NC工作機械・マシニングの加工負荷集中・熱処理炉／塗装乾燥の用役負荷・北陸エリアの燃調感応度（相対的に低め）・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 石川県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県の産業振興補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、経産局のサプライチェーン強靱化補助の5層を組合せ、機械・受託加工の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（小松／金沢・野々市／白山・能美／加賀・能美）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川の機械サプライチェーンは、小松市の建設機械中核を中心に、金沢・野々市の産業機械・工作機械・精密、白山・能美の機械加工・部品サプライヤー集積、加賀・能美の機械・繊維機械・周辺産業、県内全域のものづくり基盤という構造です。
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
              電力会社切替の実情 — 北陸電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              北陸は元々の単価が低位で価格差が出にくいこと、市場連動からの固定回帰、建設機械・産業機械サプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              石川×機械の省エネ・自家消費事例（NC工作機械／熱処理炉／コンプレッサー／塗装乾燥・LED／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              機械工場の省エネは、NC工作機械の待機電力カット＋インバータ最適化、熱処理炉の断熱・バッチ統合・排熱回収、コンプレッサー高効率化、塗装乾燥・前処理の運転最適化＋LED化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              石川×機械 契約見直しチェックリスト（12項目）
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
              シミュレーターで石川×機械の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川の機械工場は、NC工作機械・マシニングの加工負荷集中・熱処理炉／塗装乾燥の用役負荷・建設機械／産業機械サプライチェーンのCN要請など複合リスクを抱えます。北陸は燃調感応度が低めという優位性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約14%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-11"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/ishikawa-business-electricity-cost", title: "石川県の法人電気料金ガイド（地域一般）", description: "石川県全体の電力事情・北陸電力エリア・補助金。" },
              { href: "/region-hokuriku-business-electricity", title: "北陸電力エリアの法人電気代事情", description: "北陸エリアの料金体系・水力比率・燃調感応度低め。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し（業種一般）", description: "加工・組立・塗装ラインのデマンド最適化。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工工場の電気料金見直し（業種一般）", description: "プレス・研磨・めっき・熱処理の電力最適化。" },
              { href: "/toyama-pharmaceutical-electricity-cost", title: "富山県の医薬品工場の電気料金（業種×地域）", description: "同じ北陸エリアの医薬品クロス。エリア軸が共通で業種が異なる。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "高騰時の経営影響を踏まえた選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "各エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイト屋根PPA活用", description: "屋根面積を活かす自家消費PPA。" },
            ]}
          />

          <ContentCta
            heading="石川の機械工場の電気代リスクを自社条件で試算する"
            description="大規模建設機械・中規模機械・中小受託加工いずれも、北陸電力エリア・NC工作機械・熱処理炉・塗装乾燥・建設機械／産業機械サプライチェーンのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="石川の機械工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模建設機械・中規模機械・中小受託加工いずれも、NC工作機械の加工負荷・熱処理炉・塗装乾燥の規模感と建設機械／産業機械サプライチェーンのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で石川県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
