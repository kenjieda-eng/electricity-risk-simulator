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
  "富山県の医薬品工場の電気料金完全ガイド｜くすりの富山・後発薬／配置薬の製造集積と北陸電力";
const pageDescription =
  "富山県の医薬品製造業に特化。「くすりの富山」の伝統を背景にした後発医薬品（ジェネリック）・配置薬の製造集積を核に、GMP対応クリーンルーム・空調・凍結乾燥・純水製造の電力プロファイル、北陸電力エリアの単価事情（水力比率が高く燃調感応度が相対的に低め）、契約最適化、補助金・PPA活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "富山県 医薬品工場 電気料金",
    "くすりの富山 電気代",
    "後発薬 ジェネリック 電力",
    "北陸電力 高圧 製薬",
    "GMP クリーンルーム 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/toyama-pharmaceutical-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/toyama-pharmaceutical-electricity-cost",
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
    label: "富山県の医薬品産業集積 — 「くすりの富山」を起源とする裾野の広さ",
    detail:
      "富山県は江戸時代の配置薬（売薬・置き薬）を起源に、約300年にわたって医薬品産業が県の基幹産業として発展してきました。富山市・高岡市・滑川市・立山町・上市町・砺波などに、製薬・後発医薬品（ジェネリック）受託製造（CMO/CDMO）・配置薬・OTC・生薬・健康食品までを含む工場群が集積しています。錠剤・カプセル・注射剤・点眼・軟膏など多品種を扱う事業所が多く、受託製造を含めれば県内の関連事業所数は相当規模に上ります。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に北陸電力エリア固有の論点を整理します（出典: 富山県統計・経産省工業統計から整理）。",
  },
  {
    label: "医薬品工場の電力プロファイル — クリーンルーム空調・凍結乾燥・純水製造",
    detail:
      "医薬品工場の電力消費の中心は、GMP対応クリーンルームの恒温恒湿空調（外気処理・HEPAフィルター・差圧管理）、注射剤の凍結乾燥（フリーズドライ）、純水・注射用水（WFI）製造、原薬・製剤の温度管理、検査・包装ラインです。とりわけクリーンルームの空調は24時間連続稼働で停止できず、外気処理・再熱・加湿のために多くのエネルギーを要するため、工場全体の電力消費に占める空調比率が高い傾向があります（一般に空調・用役で40〜60%程度を占めるとされます／出典: 業界団体・省エネ事例から整理）。差圧管理を維持しつつ空調の運用を最適化することが、電力単価最適化の主戦場となります。",
  },
  {
    label: "後発医薬品（ジェネリック）・受託製造（CMO/CDMO）の電力負荷",
    detail:
      "富山県は後発医薬品やOTC・受託製造の集積地として知られ、多品種・小ロットの製造ラインを抱える事業所が多いのが特徴です。品目切替（チェンジオーバー）のたびに洗浄・乾燥・清浄度回復が必要となり、空調・純水・乾燥設備の稼働が断続的に増減するため、デマンド変動が大きくなりがちです。連続生産ではなくバッチ生産が中心の工程構成では、ピーク需要の平準化が契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "24時間温度管理・冷蔵保管に伴う恒常負荷",
    detail:
      "医薬品は原薬・中間体・製剤・ワクチン等で厳格な温度管理（常温・冷所2〜8℃・冷凍）が求められ、冷蔵・定温倉庫や恒温室が24時間連続で稼働します。生産を止めても品質保証のための保管・空調は止められないため、ベース電力が高く、夜間・休日も一定の需要が続く点が医薬品工場の電力構造の特徴です。冷蔵保管の運用最適化は冷凍冷蔵倉庫の見直しと共通する論点が多く、定温管理の効率化余地を把握することが重要です（出典: 厚労省GMP関連資料・省エネ事例から整理）。",
  },
  {
    label: "北陸電力エリアの系統と医薬品工場の関係",
    detail:
      "富山県は北陸電力エリアに属し、小売は北陸電力（北陸電力ミライズではなく北陸電力本体が法人小売を担う）、送配電は北陸電力送配電が担います。北陸エリアは水力発電比率が全国的にも高く、黒部川・庄川・神通川水系などの豊富な水資源を背景に、相対的に安定した電源構成を持つのが特徴です。志賀原子力発電所（石川県）は現在停止中で、その分を火力・水力・他エリアからの融通で補っています。JEPX北陸エリア価格を参照しつつ、エリア固有の単価事情を踏まえた契約戦略が求められます（出典: 北陸電力送配電 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "北陸電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "富山県内最大シェア。富山市・高岡・滑川・立山町の高圧・特別高圧の医薬品工場の長期需要家を多数抱えます。法人向けの高圧・特別高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。北陸は水力比率が高く全国でも電力単価が相対的に低位という特徴があり、燃料費調整額の感応度も他エリアと比べて相対的に低めとされます。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 北陸電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "富山県内の高圧・特別高圧医薬品工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい受託製造（CMO/CDMO）大型案件で実績を積み上げています。ただし北陸エリアは元々の単価水準が相対的に低位なため、他エリアほど大きな価格差が出にくい局面もあり、供給可能kWh枠と燃調条件を含めた総合比較が必要です。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（北陸圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "北陸圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。医薬品工場では蒸気需要（滅菌・乾燥・加湿）が大きいため、ガス＋電気＋蒸気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "製薬大手やグローバル供給網に組み込まれる受託製造事業者では、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（敷地・屋根面積を活かす自家消費）、オフサイトPPA（県内・北陸圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。北陸は水力中心で系統の再エネ比率がもともと高い点も特徴ですが、追加性のある調達を求める需要家にはPPAが選択肢となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。北陸エリアは相対的に価格変動が穏やかだったとされますが、それでも供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい医薬品工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
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
    label: "北陸電力エリアの特別高圧 — 大規模医薬品工場の単価水準",
    detail:
      "大規模後発薬工場・大型受託製造（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね14〜17円/kWh＋調整項目とされます。北陸は水力比率が高く単価が全国でも相対的に低位なため、他エリア（東京・関西・中部等）よりやや低めのレンジに収まる傾向があります。燃料費調整額（北陸はエリア特性として感応度が相対的に低め）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は19〜24円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小医薬品工場の単価",
    detail:
      "富山市・高岡・滑川・立山町の高圧医薬品工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は15〜19円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は21〜26円/kWhレンジが目安です。北陸は元々の単価が低位なため新電力切替による下げ幅は他エリアより小さくなりやすい一方、燃調感応度が低いことで単価の安定性が得られる点はメリットになり得ます。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 北陸電力エリア固有（相対的に低め）",
    detail:
      "北陸電力エリアは水力発電比率が高く、火力（LNG・石炭）への依存度が他エリアより相対的に低いため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度が相対的に低めとされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面でも、北陸の燃調変動幅は火力依存度の高いエリアと比べて穏やかに推移した側面があります。とはいえ渇水年には水力出力が落ち火力比率が上がるため、燃調がゼロではない点に留意が必要です（出典: 北陸電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量3,000万kWh級の大規模医薬品工場では年約1.25億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い医薬品工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模後発薬工場（特別高圧 8,000kW、年間 4,500万kWh）— 代表シナリオ",
    before:
      "Before: 県内の大規模後発医薬品（ジェネリック）工場A（敷地広大・多品種大量生産＋受託製造）。GMP対応クリーンルームの恒温恒湿空調が24時間連続稼働し、凍結乾燥・純水製造・冷蔵保管が常時運転。北陸電力の特別高圧契約＋燃調連動。空調・用役の電力比率が高く、年間電気代 約11億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／クリーンルーム空調の外気冷房（フリークーリング）を中間期に拡大＋インバータ化＋差圧設定の最適化／凍結乾燥の棚温プロファイル・運転スケジュール見直しで運用改善／工場屋根の自家消費太陽光（オンサイトPPA）導入／BEMS・需給予測による空調ピークシフト。",
    result:
      "Result: 年間電気代 約11億円 → 約9.4億円（▲約15%、▲1.6億円・目安）／契約電力 8,000→7,300kW／空調の中間期外気冷房で用役電力を削減／RE100比率の段階的引上げ。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模製薬工場（高圧 1,800kW、年間 1,300万kWh）— 代表シナリオ",
    before:
      "Before: 富山市の中規模製薬工場B（錠剤・カプセル・点眼の多品種製造）。GMPクリーンルーム空調＋純水製造＋検査・包装ラインが稼働。北陸電力の業務用高圧電力＋燃調連動。品目切替に伴う洗浄・乾燥でデマンド変動が大きく、年間電気代 約3.0億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／クリーンルーム空調のインバータ更新＋外気冷房の中間期適用（SII補助1/2活用を検討）／コンプレッサー高効率機更新＋エア漏れ対策／純水製造装置の運転最適化／屋根太陽光の自家消費（オンサイトPPA）導入／BEMSで空調ピーク平準化。",
    result:
      "Result: 年間電気代 約3.0億円 → 約2.55億円（▲約15%、▲4,500万円・目安）／契約電力 1,800→1,650kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小製薬・受託製造（高圧 600kW、年間 420万kWh）— 代表シナリオ",
    before:
      "Before: 滑川市・立山町近郊の中小製薬・受託製造C社（従業員80名・OTC／生薬／受託の小ロット多品種）。北陸電力の業務用高圧電力＋燃調連動。クリーンルーム空調＋恒温室＋冷蔵保管が中心で、夜間・休日もベース電力が続く。年間電気代 約9,500万円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場・恒温室のLED化（県補助＋SII併用を検討）／クリーンルーム空調の差圧最適化＋外気冷房／コンプレッサー集中管理＋エア漏れ対策／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約9,500万円 → 約8,100万円（▲約15%、▲1,400万円・目安）／契約電力 600→540kW／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "クリーンルーム空調の連続負荷集中",
    detail:
      "GMP対応クリーンルームは恒温恒湿・差圧管理・HEPAろ過のため、外気処理・再熱・加湿の空調が24時間止められず連続稼働します。清浄度クラスが高い区域ほど換気回数が多く、外気導入量と再熱量が増えるため電力消費が膨らみます。一般に医薬品工場では空調・用役で電力の40〜60%程度を占めるとされ、空調の運用最適化（外気冷房・差圧設定・換気回数の適正化）が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "凍結乾燥（フリーズドライ）・純水製造の用役負荷",
    detail:
      "注射剤・バイオ製剤の凍結乾燥は、棚冷却・コンデンサ冷却・真空ポンプが長時間連続運転するため電力負荷が大きい工程です。加えて純水・注射用水（WFI）製造の蒸留・RO・加熱、滅菌の蒸気需要も用役電力・燃料を押し上げます。これらは品質保証のため運転条件の自由度が低い一方、運転スケジュール・棚温プロファイルの最適化で一定の改善余地があります（出典: 厚労省GMP関連資料・省エネ事例から整理）。",
  },
  {
    label: "北陸電力エリアの燃調感応度（相対的に低め）",
    detail:
      "北陸電力エリアは水力比率が高く火力依存度が相対的に低いため、燃料費調整額の感応度が他エリアより低めとされるのがエリア固有の特徴です。これは燃料高騰局面で単価が急騰しにくいメリットになり得る一方、渇水年には水力出力が落ち火力比率が上がるため燃調が増える局面もあります。富山の医薬品工場では、この相対的に安定した単価環境を前提に固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット製造に伴うデマンド変動",
    detail:
      "後発薬・受託製造・OTCは多品種小ロット生産が中心で、品目切替のたびに洗浄・乾燥・清浄度回復が発生し、空調・純水・乾燥設備の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて製薬大手やグローバル供給網からScope3 GHG排出削減要請が強まり、受託製造事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。北陸は系統の再エネ比率がもともと高い点が有利に働き得ますが、追加性のある調達を求められる場合はPPA等が選択肢となります。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "富山県 産業政策・くすりの富山関連補助（富山県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、医薬品産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興政策（くすりの富山の基盤強化を含む）に基づく補助メニュー。医薬品・受託製造の高効率空調・コンプレッサー・LED・断熱・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は富山県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 富山県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・冷凍・LED・コンプレッサー・ヒートポンプ・凍結乾燥設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "医薬品工場のクリーンルーム空調更新・コンプレッサー高効率化・全館LED化・冷蔵設備更新などで活用しやすい主力補助です。富山県内の製薬・受託製造の更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい医薬品工場・受託製造工場で活用が想定されます。製薬サプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。北陸は系統再エネ比率が高い点も踏まえ、追加性の要否を整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率空調・ヒートポンプ・燃料転換・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "中部経済産業局（北陸支局含む）サプライチェーン強靱化・脱炭素関連補助",
    target: "医薬品・受託製造の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "医薬品の安定供給・国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。富山の後発薬・受託製造の高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "富山市 — 製薬・受託製造の中核",
    detail:
      "富山市は「くすりの富山」の中核として、製薬企業・後発医薬品メーカー・受託製造（CMO/CDMO）・配置薬・生薬・健康食品の事業所が集中するエリアです。GMP対応クリーンルームを抱える高圧・特別高圧の医薬品工場が多く、空調・純水・凍結乾燥を含む用役負荷が大きい点が共通します。多品種製造のためデマンド変動も大きく、契約電力最適化の余地があります。",
  },
  {
    label: "高岡市・射水市 — 製造・包装・物流連動",
    detail:
      "高岡市・射水市近郊には製造・包装・物流が連動する医薬品関連事業所が立地します。包装・検査ラインの電力に加え、冷蔵・定温倉庫の温度管理が恒常負荷となります。臨海部の物流機能と連動し、原薬・製剤の保管・出荷を支えるインフラが集積しています。",
  },
  {
    label: "滑川市・上市町 — 後発薬・受託製造の集積",
    detail:
      "滑川市・上市町近郊は後発医薬品・受託製造の工場が立地するエリアです。多品種小ロットの製造ラインを抱える事業所が多く、品目切替に伴う洗浄・乾燥・清浄度回復のための空調・純水負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、設備更新と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "立山町・砺波 — 製造・原料・周辺産業",
    detail:
      "立山町・砺波近郊には医薬品の製造・原料・周辺産業の事業所が立地します。豊富な水資源を背景とした純水・用水の確保がしやすい立地特性があり、医薬品製造に必要な水質管理面での優位性が指摘されることがあります。高圧契約の中小製造業が中心で、空調・冷蔵の恒常負荷が電力構造の柱です。",
  },
  {
    label: "県内全域 — 配置薬（売薬）を起源とする産業基盤",
    detail:
      "富山の医薬品産業は配置薬（売薬・置き薬）を起源に約300年にわたって蓄積されてきた産業基盤の上に成り立っています。製造から流通・品質管理・人材育成までの裾野が県内で完結しやすく、後発医薬品・受託製造の集積を支えるエコシステムを形成しています。これらの事業所群は、北陸電力エリアの水力中心の電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "北陸エリアの新電力浸透度",
    detail:
      "北陸電力エリアの新電力比率は、元々の単価水準が全国でも低位なこともあり、他エリア（東京・関西）と比べて低めにとどまる傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。価格差が出にくい分、切替メリットは燃調条件・契約期間・再エネ付加価値で判断する必要があります。年間使用量の大きい医薬品工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、北陸でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。北陸はもともと燃調感応度が低めですが、渇水年の火力比率上昇や全国需給逼迫時の連系影響もあるため、長期固定（2〜5年）で単価を安定させる選択が検討されています。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "北陸電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・水力中心の安定供給。デメリット: 新電力との比較で単価がやや高めになる局面、燃料費調整額の条件差。北陸は元々の単価が低位なため新電力との価格差は他エリアより小さくなりやすく、継続か切替かは総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（富山×医薬品固有）",
    detail:
      "①医薬品・連続稼働工場への供給実績、②非化石証書／再エネトラッキング付メニュー（製薬サプライチェーンのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（北陸は元々低めだが渇水年リスクを確認）、⑤BCP対応（停電時の品質保証・冷蔵保管の継続）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "製薬サプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・北陸圏の太陽光案件）／コーポレートPPAが検討材料になります。北陸は系統再エネ比率が高い一方、追加性のある調達を求められる場合はPPAが選択肢です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "クリーンルーム空調の外気冷房＋差圧最適化",
    detail:
      "GMPクリーンルームの空調は、中間期・冬期に外気冷房（フリークーリング）を活用することで冷凍機負荷を抑えられます。さらに差圧設定・換気回数を清浄度を維持できる範囲で適正化し、外気導入量と再熱量を抑制することで電力▲10〜20%程度が見込めます。空調機のインバータ化と組合せると効果が高まります。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は清浄度要件や気候条件によって変動します。",
  },
  {
    label: "凍結乾燥（フリーズドライ）の運用改善",
    detail:
      "凍結乾燥は棚温プロファイル・真空度・乾燥時間の最適化により、品質を維持しつつ運転時間とコンデンサ・真空ポンプの電力を抑える余地があります。複数バッチのスケジュール統合やコンデンサ除霜の効率化も電力削減に寄与します。設備更新（高効率機）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。医薬品工場では計装エア・搬送・洗浄など圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "純水製造・冷蔵保管の運転最適化",
    detail:
      "純水・注射用水（WFI）製造装置の運転スケジュール最適化、冷蔵・定温倉庫の温度帯・断熱・扉開閉管理の見直しで、品質を維持しつつベース電力を抑えられます。冷蔵保管の効率化は冷凍冷蔵倉庫の見直しと共通する論点が多く、定温管理の最適化余地を把握することが重要です。投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる医薬品工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、空調ピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。北陸の系統特性も踏まえ、本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "クリーンルーム空調の換気回数・差圧設定が清浄度を維持できる範囲で適正化されているか",
  "凍結乾燥・純水製造・冷蔵保管の年間使用kWhを工程別に把握しているか",
  "外気冷房（フリークーリング）を中間期・冬期に活用できる余地があるか",
  "燃料費調整額の条件（北陸は相対的に低めだが渇水年の影響）を契約書で確認したか",
  "北陸電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "製薬サプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "富山県・SII・経産局補助の併用可否を設備別に整理したか",
  "多品種切替に伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の品質保証（冷蔵保管・空調継続・自家発・蓄電池）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "富山県の医薬品工場は北陸電力エリア固有の単価メリットがありますか？",
    answer:
      "北陸電力エリアは水力発電比率が全国的にも高く、電力単価が相対的に低位とされるのがエリア固有の特徴です。火力依存度が低いため燃料費調整額の感応度も相対的に低めで、燃料高騰局面で単価が急騰しにくいメリットがあります。ただし渇水年には水力出力が落ち火力比率が上がるため燃調がゼロになるわけではありません。元々の単価が低位なため新電力切替による下げ幅は他エリアより小さくなりやすい点にも留意が必要です。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 北陸電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "医薬品工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般にGMP対応クリーンルームの恒温恒湿空調（外気処理・HEPAろ過・差圧管理）が電力消費の中心とされ、空調・用役で工場全体の40〜60%程度を占めるとされます。次いで凍結乾燥（フリーズドライ）、純水・注射用水製造、冷蔵・定温保管、検査・包装ラインが続きます。これらは24時間連続稼働が多く停止できないため、外気冷房の活用・差圧設定の最適化・設備のインバータ化が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "後発医薬品（ジェネリック）・受託製造の工場で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種小ロット製造では品目切替に伴う洗浄・乾燥・清浄度回復で空調・純水負荷が断続的に発生し、デマンド変動が大きくなりがちです。生産スケジュールの調整やピーク需要の平準化、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせてクリーンルーム空調の外気冷房・差圧最適化、コンプレッサー高効率化、LED化が有効です。富山県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "富山の医薬品工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。北陸は系統の再エネ比率がもともと高いため、追加性が必要かどうかを整理することが重要です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は医薬品工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量3,000万kWh級の大規模医薬品工場では年約1.25億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い医薬品工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "富山の医薬品工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。北陸エリアは元々の単価が低位なため、他エリアほど大きな価格差が出にくく、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "富山県の補助金は医薬品工場でも使えますか？",
    answer:
      "使える可能性があります。富山県は「くすりの富山」の基盤強化を含む産業振興政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。クリーンルーム空調・コンプレッサー・LED・断熱・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は富山県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の品質保証は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は北陸電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし医薬品工場では停電時に冷蔵保管・空調・凍結乾燥の継続が品質保証に直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "北陸電力 法人向け料金プラン", url: "https://www.rikuden.co.jp/" },
  { name: "北陸電力送配電 供給・系統情報", url: "https://www.rikuden.co.jp/nw/" },
  { name: "厚生労働省（医薬品製造・GMP）", url: "https://www.mhlw.go.jp/" },
  { name: "富山県 産業政策・くすりの富山", url: "https://www.pref.toyama.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function ToyamaPharmaceuticalElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/toyama-pharmaceutical-electricity-cost"
        datePublished="2026-06-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "富山県の医薬品工場の電気料金", url: "https://simulator.eic-jp.org/toyama-pharmaceutical-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">富山県の医薬品工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            富山県の医薬品工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            富山県は「くすりの富山」配置薬（売薬）を起源に、約300年にわたって医薬品産業が発展してきた地域です。本ページでは「富山県 × 医薬品製造業」というクロス領域に絞り、北陸電力エリア固有の単価事情（水力比率が高く燃調感応度が相対的に低め）と、GMP対応クリーンルーム空調／凍結乾燥／純水製造の電力プロファイル、契約最適化、補助金・PPA活用までを実務目線で整理します。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-05" updatedAt="2026-06-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>富山県の医薬品産業集積（富山・高岡・滑川・立山町）の電力プロファイル</li>
              <li>大規模後発薬／中規模製薬／中小製薬・受託のBefore/After代表シナリオ3件</li>
              <li>北陸電力エリアの単価水準と燃調感応度（相対的に低め）</li>
              <li>製薬サプライチェーンのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>富山×医薬品に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「富山 × 医薬品」のクロス領域に特化したガイドです。富山県全体の文脈は{" "}
            <Link href="/toyama-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              富山県の法人電気料金ガイド
            </Link>
            、業種一般としての医薬品工場全体は{" "}
            <Link href="/pharmaceutical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              医薬品工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              富山県の医薬品産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県は配置薬（売薬・置き薬）を起源に約300年の歴史を持つ医薬品産業の集積地です。製薬・後発医薬品（ジェネリック）・受託製造（CMO/CDMO）・OTC・生薬・健康食品までを含む工場群が富山市・高岡・滑川・立山町等に広がり、GMP対応クリーンルームを抱える高圧・特別高圧の医薬品工場が多数立地しています。
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
              富山県全体の文脈は{" "}
              <Link href="/toyama-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                富山県の法人電気料金ガイド
              </Link>
              、北陸電力エリア全体は{" "}
              <Link href="/region-hokuriku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                北陸電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/pharmaceutical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                医薬品工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              北陸電力エリアの主要電力会社・新電力（富山×医薬品での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県内の医薬品工場は、北陸電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。北陸は元々の単価が低位なため価格差が出にくい一方、燃調安定性や再エネ付加価値で選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              北陸電力エリアの料金水準と医薬品工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（北陸は相対的に低め）、再エネ賦課金の累積負担を、医薬品工場の代表的な契約タイプ別に整理します。北陸固有の水力中心・燃調低感応の特性を踏まえた契約戦略が経営判断の中心となります。
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
              規模別代表シナリオ3件 — 大規模後発薬／中規模製薬／中小製薬・受託（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・GMP省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/pharmaceutical-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">医薬品工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              富山×医薬品固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山の医薬品工場の電気代は、クリーンルーム空調の連続負荷・凍結乾燥／純水製造の用役負荷・北陸エリアの燃調感応度（相対的に低め）・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 富山県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県の産業振興補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、経産局のサプライチェーン強靱化補助の5層を組合せ、医薬品・受託製造の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（富山／高岡・射水／滑川・上市／立山・砺波）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山の医薬品サプライチェーンは、富山市の製薬・受託製造中核を中心に、高岡・射水の製造・包装・物流連動、滑川・上市の後発薬・受託集積、立山・砺波の製造・原料、県内全域の配置薬を起源とする産業基盤という構造です。
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
              北陸は元々の単価が低位で価格差が出にくいこと、市場連動からの固定回帰、製薬サプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              富山×医薬品の省エネ・自家消費事例（クリーンルーム空調／凍結乾燥／コンプレッサー／純水・冷蔵／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              医薬品工場の省エネは、クリーンルーム空調の外気冷房＋差圧最適化、凍結乾燥の運用改善、コンプレッサー高効率化、純水・冷蔵保管の運転最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              富山×医薬品 契約見直しチェックリスト（12項目）
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
              シミュレーターで富山×医薬品の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山の医薬品工場は、クリーンルーム空調の連続負荷・凍結乾燥／純水製造の用役負荷・製薬サプライチェーンのCN要請など複合リスクを抱えます。北陸は燃調感応度が低めという優位性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
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
              publishedAt="2026-06-05"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/toyama-business-electricity-cost", title: "富山県の法人電気料金ガイド（地域一般）", description: "富山県全体の電力事情・北陸の水力・補助金。" },
              { href: "/region-hokuriku-business-electricity", title: "北陸電力エリアの法人電気代事情", description: "北陸エリアの料金体系・水力比率・燃調感応度低め。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/pharmaceutical-electricity-cost-review", title: "医薬品工場の電気料金見直し（業種一般）", description: "GMPクリーンルーム・空調・凍結乾燥の最適化。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "連続操業工場の電気料金見直し（業種一般）", description: "24時間連続プロセス・温調のデマンド最適化。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍冷蔵倉庫の電気料金見直し（業種一般）", description: "医薬品の冷蔵保管・定温管理の最適化。" },
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
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="富山の医薬品工場の電気代リスクを自社条件で試算する"
            description="大規模後発薬・中規模製薬・中小製薬／受託いずれも、北陸電力エリア・クリーンルーム空調・凍結乾燥・製薬サプライチェーンのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="富山の医薬品工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模後発薬・中規模製薬・中小製薬／受託いずれも、GMPクリーンルーム空調・凍結乾燥・冷蔵保管の規模感と製薬サプライチェーンのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で富山県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
