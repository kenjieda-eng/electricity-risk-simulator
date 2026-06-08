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
  "福井県の繊維・眼鏡工場の電気料金完全ガイド｜鯖江・越前の地場産業集積と北陸電力";
const pageDescription =
  "福井県の繊維・眼鏡製造業に特化。鯖江の眼鏡、越前・福井の合繊織物・染色加工の地場集積を核に、染色のボイラー蒸気・乾燥、織機、眼鏡の研磨・メッキ・成形の電力プロファイル、北陸電力エリアの単価事情（水力比率が高く燃調感応度が相対的に低め）、契約最適化、補助金・PPA活用までを実務目線で整理します（富山=医薬品とは業種で分離）。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "福井県 繊維 電気料金",
    "鯖江 眼鏡 電気代",
    "染色加工 電力",
    "北陸電力 高圧 繊維",
    "織物 メッキ 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/fukui-textile-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fukui-textile-electricity-cost",
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
    label: "福井県の繊維・眼鏡産業集積 — 鯖江・越前・福井の地場産業構造",
    detail:
      "福井県は鯖江市を中心とした眼鏡（フレーム）の国内最大産地、越前市（武生）・福井市を核とした合繊織物・染色加工の北陸繊維産地、あわら市・坂井市のニット・染色周辺と、県内に繊維と眼鏡という二大地場産業が広く集積しています。眼鏡は研磨・切削・メッキ・成形・洗浄・塗装の多工程小ロット、繊維はウォータージェット／エアジェット織機の多数台運転と染色加工（染色機・乾燥機・ボイラー蒸気・温水・テンター乾燥）が電力／熱の多消費工程です。これらは高圧受電が中心で、大規模染色は特別高圧の需要家も立地しています。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に北陸電力エリア固有の論点を整理します（出典: 福井県統計・経産省工業統計から整理）。",
  },
  {
    label: "染色加工の電力プロファイル — ボイラー蒸気・温水・乾燥の熱需要",
    detail:
      "繊維の染色加工は、染色機・乾燥機の運転に加え、ボイラー蒸気・温水・テンター乾燥といった熱需要が極めて大きい工程です。染色・前処理・後加工では加熱・保温・乾燥が連続的に発生し、電力に加えてガス・重油などの燃料も併用する点が論点です。電力消費の中心は染色機の撹拌・循環ポンプ、テンターやシリンダー乾燥機の送風・搬送、温水・温調設備、空調・コンプレッサーで、熱需要との一体管理が電力単価最適化の主戦場になります（一般に繊維染色工場では用役・補機で電力の相当割合を占めるとされます／出典: 業界団体・省エネ事例から整理）。電力と燃料（蒸気）の両面で運用最適化を図ることが基本です。",
  },
  {
    label: "織機の多数台運転と眼鏡の多工程小ロットによる負荷特性",
    detail:
      "合繊織物の工場ではウォータージェット織機・エアジェット織機が多数台で連続運転され、織機本体に加えてエア（圧縮空気）・ポンプ・送風の補機負荷が積み上がります。一方、鯖江の眼鏡工場は研磨・切削・電気めっき・成形（射出・切削）・洗浄という多工程小ロット生産で、品種・ロット切替のたびに各工程の稼働が断続的に増減し、デマンド（kW）のピークが発生しやすいのが特徴です。連続運転の織機・染色とバッチ的な眼鏡工程が混在する産地構造では、ピーク需要の平準化が契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "メッキ・研磨・洗浄に伴う恒常負荷と用役電力",
    detail:
      "眼鏡フレーム製造では、電気めっき（表面処理）の整流器、研磨・バフ・切削の加工機、洗浄・乾燥、塗装ブースの排気・空調が用役電力の柱となります。メッキの整流器や洗浄・乾燥は一定の連続稼働があり、研磨工程は集塵・送風の補機を伴います。染色工場と同様に、こうした用役（ユーティリティ）の見える化と運転最適化が、工場全体の電力削減余地を把握する出発点となります。眼鏡・繊維いずれも、生産ラインを完全に止めにくい用役負荷をどこまで平準化・効率化できるかが論点です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "北陸電力エリアの系統と繊維・眼鏡工場の関係",
    detail:
      "福井県は北陸電力エリアに属し、小売は北陸電力（北陸電力本体が法人小売を担う）、送配電は北陸電力送配電が担います。北陸エリアは水力発電比率が全国的にも高く、電力単価が相対的に低位で、火力依存度が低いため燃料費調整額の感応度も相対的に低めとされるのがエリア固有の特徴です。志賀原子力発電所（石川）は停止中で、火力・水力・他エリア融通で補う構成です。なお福井県は嶺南に原発が立地する原発立地県ですが、県内の供給エリアは北陸電力で、原発立地と供給エリアの単価は直結しない点に留意が必要です。JEPX北陸エリア価格を参照しつつ、エリア固有の単価事情を踏まえた契約戦略が求められます（出典: 北陸電力送配電 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "北陸電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "福井県内最大シェア。鯖江・越前・福井の高圧・特別高圧の繊維（染色・織物）・眼鏡工場の長期需要家を多数抱えます。法人向けの高圧・特別高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。北陸は水力比率が高く火力依存度が低いため、燃料費調整額の感応度が相対的に低めとされ、単価水準も全国的に低位とされてきました。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 北陸電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "福井県内の高圧・特別高圧の繊維・眼鏡工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい染色加工・合繊工場で実績を積み上げています。北陸エリアは旧一電の単価が相対的に低位なため価格差が出にくい局面もありますが、供給可能kWh枠と燃調条件を含めた総合比較が有効です。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（北陸圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "北陸圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。繊維の染色加工ではボイラー蒸気・温水の熱需要が大きく、ガス＋電気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役・熱源構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "繊維・眼鏡はアパレル・アイウェアのグローバル供給網やブランド要請に組み込まれることが多く、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（広い工場屋根を活かす自家消費）、オフサイトPPA（県内・北陸圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。福井は地場産業の脱炭素を後押しする政策的背景もあり、追加性のある調達を求める需要家にはPPAが選択肢となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。北陸エリアも例外ではなく供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい染色加工・合繊工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX北陸エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX北陸エリアのスポット価格は、水力比率が高い供給構造を背景に、相対的に落ち着いた水準で推移する局面が多い一方、渇水期や全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "北陸電力エリアの特別高圧 — 大規模染色加工・合繊工場の単価水準",
    detail:
      "大規模染色加工・合繊工場（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね13〜16円/kWh＋調整項目とされます。北陸は水力比率が高く火力依存度が低いため、燃料高騰局面でも単価が相対的に上ぶれしにくく、全国的にも低位とされてきました。燃料費調整額（北陸はエリア特性として感応度が相対的に低め）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は19〜24円/kWhレンジ（北陸低位）が目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小繊維・眼鏡工場の単価",
    detail:
      "鯖江・越前・福井の高圧の繊維・眼鏡工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は14〜18円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は21〜26円/kWhレンジが目安です。北陸は旧一電の単価が低位なぶん、新電力切替による単価差は出にくい局面もありますが、固定化による単価安定のメリットは依然として検討余地があります。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 北陸電力エリア固有（相対的に低め）",
    detail:
      "北陸電力エリアは水力発電の比率が高く火力（LNG・石炭）への依存度が低いため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面でも、北陸の燃調拡大は他エリアと比べて緩やかな傾向があり、年間使用量の大きい染色工場でも単価上昇は相対的に抑えられたとされます。ただし渇水や全国需給逼迫の影響は受け得るため、燃調変動を見据えた固定vs市場連動の選択は依然として経営判断の中心となります（出典: 北陸電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量1,500万kWh級の大規模染色加工工場では年約6,300万円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い染色工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模染色加工・合繊工場（特別高圧 3,000kW、年間 1,800万kWh）— 代表シナリオ",
    before:
      "Before: 越前・福井近郊の大規模染色加工／合繊工場A（染色機・テンター乾燥・ボイラー蒸気・多数台織機を内製）。染色・乾燥の熱需要が大きく、織機が連続運転。北陸電力の特別高圧契約＋燃調連動。用役・熱の比率が高く、年間電気代 約4.0億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／染色・乾燥の廃熱回収＋ヒートポンプ化／織機・空調のインバータ化／コンプレッサー高効率化＋エア漏れ対策／工場屋根の自家消費太陽光（オンサイトPPA）導入／BEMS・需給予測による空調・用役ピークシフト。",
    result:
      "Result: 年間電気代 約4.0億円 → 約3.4億円（▲約15%、▲6,000万円・目安）。5年累計の削減額は約3.0億円（年▲6,000万円×5年＝3.0億円）。契約電力 3,000→2,750kW／廃熱回収・ヒートポンプ化で熱・用役電力を削減／RE100比率の段階的引上げ。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模織物・染色工場（高圧 1,200kW、年間 780万kWh）— 代表シナリオ",
    before:
      "Before: 福井市・越前市の中規模織物・染色工場B（合繊織物の製織＋染色・乾燥）。織機・染色機・乾燥機が稼働。北陸電力の業務用高圧電力＋燃調連動。品種切替に伴う熱・乾燥負荷の変動でデマンドが上下し、年間電気代 約1.8億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／染色乾燥の廃熱回収・断熱強化（SII補助1/2活用を検討）／織機・ポンプのインバータ化／コンプレッサー集中管理／屋根太陽光の自家消費（オンサイトPPA）導入／BEMSで用役ピーク平準化。",
    result:
      "Result: 年間電気代 約1.8億円 → 約1.53億円（▲約15%、▲2,700万円・目安）。5年累計の削減額は約1.35億円（年▲2,700万円×5年＝1.35億円）。契約電力 1,200→1,100kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小眼鏡工場（研磨・メッキ）（高圧 400kW、年間 250万kWh）— 代表シナリオ",
    before:
      "Before: 鯖江市の中小眼鏡工場C（従業員80名・フレームの研磨／電気めっき／成形／洗浄の小ロット多工程）。北陸電力の業務用高圧電力＋燃調連動。メッキ整流器・研磨・洗浄・乾燥が中心で、品種切替で各工程の稼働が断続的に増減する。年間電気代 約6,000万円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場LED化（県補助＋SII併用を検討）／メッキ整流器・洗浄・乾燥の運用最適化／コンプレッサー集中管理＋エア漏れ対策／小規模オンサイトPPAの導入検討。",
    result:
      "Result: 年間電気代 約6,000万円 → 約5,200万円（▲約13%、▲800万円・目安）。5年累計の削減額は約4,000万円（年▲800万円×5年＝4,000万円）。契約電力 400→365kW／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "染色加工のボイラー蒸気・温水・乾燥の熱需要集中",
    detail:
      "繊維の染色加工は、染色機・前処理・後加工で加熱・保温・乾燥が連続的に発生し、ボイラー蒸気・温水・テンター乾燥の熱需要が極めて大きい工程です。電力に加えてガス・重油などの燃料も併用するため、電力と熱（蒸気）の両面でコスト管理が必要になります。乾燥機の送風・搬送、循環ポンプ、温調設備が電力負荷の柱で、廃熱回収・断熱・ヒートポンプ化など熱と電力を一体で最適化することが電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "織機の多数台運転・眼鏡のメッキ/研磨の用役負荷",
    detail:
      "合繊織物のウォータージェット織機・エアジェット織機は、織機本体に加えてエア（圧縮空気）・ポンプ・送風の補機負荷が多数台ぶん積み上がります。眼鏡フレーム製造では電気めっき整流器・研磨・切削・洗浄・乾燥が用役電力を押し上げます。これらは品質・生産性のため運転条件の自由度が低い一方、待機時の運転スケジュールや圧縮空気の供給圧・エア漏れの最適化で一定の改善余地があります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "北陸電力エリアの燃調感応度（相対的に低め）",
    detail:
      "北陸電力エリアは水力比率が高く火力依存度が低いため、燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。これは燃料高騰局面でも単価が上ぶれしにくい点でメリットとなる一方、北陸の単価水準がもともと低位なため、新電力切替による単価差が出にくい局面もあります。福井の繊維・眼鏡工場では、この相対的に低めの燃調感応度を前提に固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット製造に伴うデマンド変動",
    detail:
      "眼鏡（研磨・メッキ・成形）や繊維の染色・撚糸は多品種小ロット生産が中心で、品種・ロット切替のたびに各工程の稼働や乾燥・温調が発生し、メッキ・洗浄・乾燥・空調設備の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて繊維・眼鏡はアパレル・アイウェアのグローバルブランドからScope3 GHG排出削減要請が強まり、染色・織物・眼鏡の事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。福井は地場産業の脱炭素を後押しする政策的背景があり追加性のある調達の選択肢が比較的広い点が特徴ですが、調達形態の要否は供給網の要請次第です。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "福井県 産業・脱炭素関連補助（福井県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、繊維・眼鏡など地場産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策（繊維・眼鏡の地場産業高度化を含む）に基づく補助メニュー。染色・眼鏡工場の高効率ボイラー・ヒートポンプ・コンプレッサー・LED・断熱・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は福井県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 福井県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・ボイラー・乾燥・LED・コンプレッサー・ヒートポンプ・廃熱回収設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "染色加工・織物・眼鏡工場の乾燥・ボイラー更新、廃熱回収、コンプレッサー高効率化、全館LED化などで活用しやすい主力補助です。福井県内の繊維・眼鏡の更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい染色・織物・眼鏡工場で活用が想定されます。アパレル・アイウェアのサプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。福井は地場産業の脱炭素を後押しする政策的背景があり、追加性のある調達を検討しやすい点も踏まえて整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率ボイラー・ヒートポンプ・廃熱回収・燃料転換・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "中部経済産業局（北陸支局含む） サプライチェーン強靱化・脱炭素関連補助",
    target: "繊維・眼鏡の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "地場産業の生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。福井の繊維・眼鏡の高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "鯖江市 — 眼鏡（フレーム）の国内最大産地と繊維",
    detail:
      "鯖江市は研磨・切削・電気めっき・成形を担う眼鏡（フレーム）の国内最大の地場集積を擁し、あわせて繊維の事業所も立地するエリアです。眼鏡はメッキ整流器・研磨・洗浄・乾燥の用役負荷を抱える高圧契約の中小製造業が中心で、品種・ロット切替に伴うデマンド変動が大きい点が共通します。多工程小ロットゆえに契約電力最適化の余地があります。",
  },
  {
    label: "越前市（武生）— 合繊織物・染色加工の集積（北陸の繊維産地）",
    detail:
      "越前市（武生）は合繊織物・染色加工の集積地で、北陸を代表する繊維産地の一角です。ウォータージェット／エアジェット織機の多数台運転、染色機・乾燥機・ボイラー蒸気・温水・テンター乾燥の熱需要が大きく、特別高圧・高圧の繊維工場が立地します。電力と熱（蒸気）の一体管理が電気代最適化の柱となるエリアです。",
  },
  {
    label: "福井市 — 繊維（合繊・絹人繊織物）・染色の集積と本社機能",
    detail:
      "福井市は合繊・絹人繊織物・染色の集積に加え、繊維・眼鏡企業の本社機能も立地するエリアです。織機・染色・乾燥の電力構造が共通し、高圧契約の中小〜中堅製造業が中心です。空調・コンプレッサー・乾燥の用役負荷が電力構造の柱で、設備更新と運用改善の余地があります。",
  },
  {
    label: "あわら市・坂井市 — 繊維・染色・ニットの周辺集積",
    detail:
      "あわら市・坂井市近郊は繊維・染色・ニットの周辺集積が広がるエリアです。多品種小ロットの製造ラインを抱える事業所が多く、品種切替に伴う乾燥・温調・染色負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、設備更新と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "県内全域 — 北陸の地場産業を軸とした中小製造業の基盤",
    detail:
      "福井の繊維・眼鏡産業は、長い歴史を持つ北陸の地場産業の集積の上に成り立っています。製織・染色・撚糸から眼鏡の研磨・メッキ・成形・物流まで裾野が県内で広がり、繊維と眼鏡という二大地場産業を支えるエコシステムが形成されています。これらの事業所群は、北陸電力エリアの水力比率が高い電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "北陸エリアの新電力浸透度",
    detail:
      "北陸電力エリアの新電力比率は、旧一電の単価がもともと低位で価格差が出にくい局面があることから、全国平均と比べると進みにくい傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。切替メリットは燃調条件・契約期間・再エネ付加価値で判断する必要があります。年間使用量の大きい染色加工・合繊工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、北陸でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。北陸は水力比率が高く燃調感応度が相対的に低めですが、渇水や全国需給逼迫時の影響は受け得るため、長期固定（2〜5年）で単価を安定させる選択が検討されています。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "北陸電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・北陸エリアでの供給安定性と相対的に低位な単価水準。デメリット: 旧一電単価が低位なぶん新電力との価格差が出にくく、切替メリットが見えにくい局面があること。継続か切替かは燃調条件・契約期間・再エネ付加価値を含めた総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（福井×繊維・眼鏡固有）",
    detail:
      "①繊維（染色・織物）・眼鏡・連続稼働工場への供給実績、②非化石証書／再エネトラッキング付メニュー（アパレル・アイウェアのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（北陸は相対的に低めだが上限・連動条件を確認）、⑤BCP対応（停電時の染色・メッキ工程の継続）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "アパレル・アイウェアのサプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・北陸圏の太陽光案件）／コーポレートPPAが検討材料になります。福井は地場産業の脱炭素を後押しする政策的背景があり、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "染色・乾燥の廃熱回収＋ヒートポンプ化",
    detail:
      "繊維の染色加工は蒸気・温水・乾燥の熱需要が大きいため、排ガス・排水・排気からの廃熱回収と断熱強化、乾燥・温水のヒートポンプ化により、燃料・電力の双方を抑えられます。テンター乾燥・染色機の温水系統で廃熱回収を組合せると効果が高まります。電力・熱を一体で最適化することで用役エネルギー▲10〜20%程度が見込めます。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は熱源構成や運転条件によって変動します。",
  },
  {
    label: "織機・染色機・ポンプのインバータ化と運用改善",
    detail:
      "ウォータージェット／エアジェット織機、染色機の循環ポンプ、乾燥機の送風機などはインバータ化により負荷追従運転が可能になり、待機・低負荷時の電力を抑えられます。複数ロットのスケジュール統合や立上げ・立下げの効率化も電力削減に寄与します。設備更新（高効率機）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。エアジェット織機や眼鏡の研磨・洗浄・塗装など圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "メッキ整流器・洗浄・検査装置の運転最適化",
    detail:
      "眼鏡フレームの電気めっき整流器、洗浄・乾燥装置、研磨の集塵・送風、検査装置の運転スケジュール最適化、待機電力の見える化により、品質を維持しつつベース電力を抑えられます。用役（ユーティリティ）の運転最適化は工場全体の電力削減余地を把握する出発点であり、定量化することが重要です。投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる染色・織物・眼鏡工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、用役ピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。福井の地場産業の脱炭素政策環境も踏まえ、本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "染色・乾燥のボイラー蒸気・温水の熱需要と電力負荷を工程別に把握しているか",
  "織機・染色機・乾燥・メッキ・洗浄の年間使用kWhを工程別に把握しているか",
  "廃熱回収・断熱・ヒートポンプ化で熱と電力を一体最適化する余地があるか",
  "燃料費調整額の条件（北陸は相対的に低めのため上限・連動条件）を契約書で確認したか",
  "北陸電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "アパレル・アイウェアのサプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "福井県・SII・経産局補助の併用可否を設備別に整理したか",
  "多品種切替に伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の品質保証（染色・メッキ工程の継続・自家発・蓄電池）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "福井県の繊維・眼鏡工場は北陸電力エリア固有の単価リスクがありますか？",
    answer:
      "北陸電力エリアは水力発電の比率が全国的にも高く火力依存度が低いため、燃料費調整額の感応度が相対的に低めとされ、電力単価も低位とされるのがエリア固有の特徴です。これは燃料高騰局面でも単価が上ぶれしにくい点でメリットとなります。一方、北陸の単価がもともと低位なため、新電力切替による単価差は出にくい局面もあります。志賀原子力発電所（石川）は停止中で火力・水力・他エリア融通で補う構成ですが、渇水や全国需給逼迫の影響は受け得ます。なお福井県は嶺南の原発立地県ですが、供給エリアは北陸電力で原発立地と供給エリアの単価は直結しません。本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 北陸電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "繊維（染色加工）の工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "染色加工は染色機・乾燥機の運転に加え、ボイラー蒸気・温水・テンター乾燥といった熱需要が極めて大きい工程で、電力に加えてガス・重油などの燃料も併用します。電力消費の中心は染色機の撹拌・循環ポンプ、テンターやシリンダー乾燥機の送風・搬送、温水・温調設備、空調・コンプレッサーです。これらは熱需要と一体で発生するため、廃熱回収・断熱・ヒートポンプ化など熱と電力を一体で最適化することが電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "鯖江の眼鏡工場（研磨・メッキ）で電気代を下げる打ち手は何ですか？",
    answer:
      "眼鏡フレーム製造は研磨・切削・電気めっき・成形・洗浄の多工程小ロットで、品種・ロット切替に伴いメッキ整流器・洗浄・乾燥・集塵の稼働が断続的に発生し、デマンド変動が大きくなりがちです。生産スケジュールの調整やピーク需要の平準化、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせてメッキ整流器・洗浄・乾燥の運用最適化、コンプレッサー高効率化、LED化が有効です。福井県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "福井の繊維・眼鏡工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。福井は地場産業の脱炭素を後押しする政策的背景があり、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は繊維・眼鏡工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量1,500万kWh級の大規模染色加工工場では年約6,300万円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い染色工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "福井の繊維・眼鏡工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。北陸エリアは旧一電の単価が相対的に低位で価格差が出にくい局面もあるため、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "福井県の補助金は繊維・眼鏡工場でも使えますか？",
    answer:
      "使える可能性があります。福井県は繊維・眼鏡という地場産業の高度化を含む産業振興・脱炭素政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。高効率ボイラー・ヒートポンプ・コンプレッサー・LED・断熱・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は福井県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の品質保証は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は北陸電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし繊維・眼鏡工場では停電時に染色・メッキ・乾燥工程の継続や仕掛品の品質保持が品質保証に直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "北陸電力 法人向け料金プラン", url: "https://www.rikuden.co.jp/" },
  { name: "北陸電力送配電 供給・系統情報", url: "https://www.rikuden.co.jp/nw/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "福井県 産業政策・脱炭素", url: "https://www.pref.fukui.lg.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "日本繊維産業連盟", url: "https://www.jtf-net.com/" },
];

export default function FukuiTextileElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/fukui-textile-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "福井県の繊維・眼鏡工場の電気料金", url: "https://simulator.eic-jp.org/fukui-textile-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">福井県の繊維・眼鏡工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            福井県の繊維・眼鏡工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            福井県は鯖江の眼鏡（国内最大産地）と越前・福井の合繊織物・染色加工という二大地場産業が広く集積する地域です。本ページでは「福井県 × 繊維・眼鏡製造業」というクロス領域に絞り、北陸電力エリア固有の単価事情（水力比率が高く燃調感応度が相対的に低め）と、染色のボイラー蒸気・乾燥／織機／眼鏡の研磨・メッキ・成形の電力プロファイル、契約最適化、補助金・PPA活用までを実務目線で整理します。なお同じ北陸電力エリアでも、富山＝医薬品、福井＝繊維・眼鏡で業種・電力プロファイルが異なる点を分離して扱います。本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>福井県の繊維・眼鏡産業集積（鯖江・越前・福井）の電力プロファイル</li>
              <li>大規模染色／中規模織物・染色／中小眼鏡のBefore/After代表シナリオ3件</li>
              <li>北陸電力エリアの単価水準と燃調感応度（相対的に低め・水力比率が高い）</li>
              <li>アパレル・アイウェアのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>福井×繊維・眼鏡に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「福井 × 繊維・眼鏡」のクロス領域に特化したガイドです。福井県全体の文脈は{" "}
            <Link href="/fukui-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              福井県の法人電気料金ガイド
            </Link>
            、業種一般としての繊維工場全体は{" "}
            <Link href="/textile-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              繊維工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福井県の繊維・眼鏡産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県は鯖江市を中心とした眼鏡（フレーム）の国内最大産地、越前市（武生）・福井市を核とした合繊織物・染色加工の北陸繊維産地、あわら市・坂井市のニット・染色周辺と、県内に繊維と眼鏡という二大地場産業が広く集積しています。染色加工のボイラー蒸気・温水・乾燥や、織機の多数台運転、眼鏡の研磨・メッキ・成形を抱える高圧・特別高圧の工場が多数立地し、地場産業の脱炭素を背景とした設備更新も進んでいます。
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
              福井県全体の文脈は{" "}
              <Link href="/fukui-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                福井県の法人電気料金ガイド
              </Link>
              、北陸電力エリア全体は{" "}
              <Link href="/region-hokuriku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                北陸電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/textile-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                繊維工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              北陸電力エリアの主要電力会社・新電力（福井×繊維・眼鏡での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県内の繊維・眼鏡工場は、北陸電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。北陸は旧一電の単価が相対的に低位で価格差が出にくい局面がある一方、アパレル・アイウェアのCN要請を背景に再エネ調達の選択肢が広がるなど、調達を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              北陸電力エリアの料金水準と繊維・眼鏡工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（北陸は相対的に低め）、再エネ賦課金の累積負担を、繊維・眼鏡工場の代表的な契約タイプ別に整理します。北陸固有の水力比率高め・燃調低めの特性と低位な単価水準を踏まえた契約戦略が経営判断の中心となります。
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
              規模別代表シナリオ3件 — 大規模染色／中規模織物・染色／中小眼鏡（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/textile-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">繊維工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。なお同じ北陸電力エリアでも{" "}
              <Link href="/toyama-pharmaceutical-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">富山県の医薬品工場（地域クロス）</Link>
              とは業種・電力プロファイルが異なるため、富山＝医薬品／福井＝繊維・眼鏡で論点を分離しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福井×繊維・眼鏡固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井の繊維・眼鏡工場の電気代は、染色のボイラー蒸気・乾燥の熱需要・織機/メッキ/研磨の用役負荷・北陸エリアの燃調感応度（相対的に低め）・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 福井県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県の産業・脱炭素補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、中部経済産業局（北陸支局含む）のサプライチェーン強靱化補助の5層を組合せ、繊維・眼鏡の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（鯖江／越前／福井／あわら・坂井）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井の繊維・眼鏡サプライチェーンは、鯖江の眼鏡（フレーム）国内最大産地を中心に、越前（武生）の合繊織物・染色加工集積、福井市の繊維・染色と本社機能、あわら・坂井の繊維・染色・ニット周辺、県内全域の北陸の地場産業を軸とした中小製造業の基盤という構造です。
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
              北陸は旧一電の単価が相対的に低位で価格差が出にくい局面があること、市場連動からの固定回帰、アパレル・アイウェアのサプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              福井×繊維・眼鏡の省エネ・自家消費事例（染色・乾燥の廃熱回収／織機・染色機のインバータ化／コンプレッサー／メッキ・洗浄／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              繊維・眼鏡工場の省エネは、染色・乾燥の廃熱回収＋ヒートポンプ化、織機・染色機・ポンプのインバータ化と運用改善、コンプレッサー高効率化、メッキ整流器・洗浄・検査装置の運転最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              福井×繊維・眼鏡 契約見直しチェックリスト（12項目）
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
              シミュレーターで福井×繊維・眼鏡の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井の繊維・眼鏡工場は、染色のボイラー蒸気・乾燥の熱需要・織機/メッキ/研磨の用役負荷・アパレル・アイウェアのCN要請など複合リスクを抱えます。北陸は燃調感応度が相対的に低めという特性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
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
              { href: "/fukui-business-electricity-cost", title: "福井県の法人電気料金ガイド（地域一般）", description: "福井県全体の電力事情・北陸電力・補助金。" },
              { href: "/region-hokuriku-business-electricity", title: "北陸電力エリアの法人電気代事情", description: "北陸エリアの料金体系・水力比率・燃調感応度。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/textile-electricity-cost-review", title: "繊維工場の電気料金見直し（業種一般）", description: "染色・乾燥・織機・用役の最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/toyama-pharmaceutical-electricity-cost", title: "富山県の医薬品工場×北陸電力（地域クロス）", description: "同じ北陸電力エリアの別業種クロス。富山=医薬品／福井=繊維眼鏡で業種を分離。" },
              { href: "/nagano-precision-electricity-cost", title: "長野県の精密機械工場（地域クロス）", description: "隣接の中部・精密機械クロス。業種・エリア比較。" },
              { href: "/kagawa-food-electricity-cost", title: "香川県の食品工場×四国電力（地域クロス）", description: "地方の地場産業×地域電力の別事例。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の見立て。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動の適否を見極める観点。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトPPAとオフサイトPPAの違い", description: "屋根自家消費と外部調達の比較。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="福井の繊維・眼鏡工場の電気代リスクを自社条件で試算する"
            description="大規模染色・中規模織物・中小眼鏡いずれも、北陸電力エリア・染色のボイラー蒸気/乾燥・織機・メッキ・アパレル/アイウェアのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="福井の繊維・眼鏡工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模染色・中規模織物・中小眼鏡いずれも、染色のボイラー蒸気・乾燥や織機・メッキ・研磨の規模感とアパレル・アイウェアのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で福井県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
