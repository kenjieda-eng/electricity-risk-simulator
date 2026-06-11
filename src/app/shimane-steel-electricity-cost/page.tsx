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
  "島根県の特殊鋼工場の電気料金完全ガイド｜安来の特殊鋼・刃物鋼の集積と中国電力エリア";
const pageDescription =
  "島根県の特殊鋼・金属に特化。安来の特殊鋼・刃物鋼・金属粉末の集積を背景に、電気炉（アーク炉）・圧延・熱処理の電力プロファイル、中国電力エリアの単価事情（島根2号機の再稼働進行）、契約最適化、補助金・PPA活用を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "島根県 特殊鋼 電気料金",
    "安来 ヤスキハガネ 電気代",
    "電気炉 アーク炉 電力",
    "中国電力 特別高圧 鉄鋼",
    "金属粉末 熱処理 省エネ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shimane-steel-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shimane-steel-electricity-cost",
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
    label: "島根県の特殊鋼産業集積 — 安来「ヤスキハガネ」を起源とする裾野",
    detail:
      "島根県、とりわけ安来市は「ヤスキハガネ」で知られる特殊鋼の集積地で、刃物鋼・工具鋼・金属粉末・電子材料までを含む高付加価値の金属工場群が立地しています。電気炉（アーク炉）による特殊鋼の溶解を中核に、圧延・鍛造・熱処理・真空処理・粉末冶金まで一貫した工程を県内で完結できる事業所が集積しています。安来を中心に松江・出雲・雲南などへも金属関連の裾野が広がり、多品種・少量・高付加価値の特殊鋼が事業構造の特徴です。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に中国電力エリア固有の論点を整理します（目安・出典: 業界団体・経産省/エネ庁統計・自治体統計から整理）。",
  },
  {
    label: "特殊鋼工場の電力プロファイル — 電気炉（アーク炉）の瞬時電力が極大",
    detail:
      "特殊鋼工場の電力消費の中核は電気炉（アーク炉）による溶解で、アーク放電時の瞬時電力が極めて大きく、契約電力（kW）・需給調整・市場価格の影響を特に強く受けます。溶解の立ち上がりで大電流が流れ、デマンドのピークが鋭く立つため、操業スケジュールと投入電力の管理が電力単価最適化の主戦場になります。これに圧延・鍛造の駆動電力、熱処理炉・真空炉の長時間連続加熱、粉末冶金の焼結が重なり、工場全体の電力構造はアーク炉のピーク負荷とベース負荷の二層で構成されます（目安・出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "刃物鋼・工具鋼・金属粉末の多品種少量生産と電力負荷",
    detail:
      "安来の特殊鋼は刃物鋼・工具鋼・金属粉末・電子材料など多品種少量・高付加価値が中心で、鋼種ごとに溶解条件・熱処理プロファイルが異なります。鋼種切替のたびにアーク炉の溶解条件や熱処理炉の温度帯を変える必要があり、炉の昇温・保持・冷却サイクルが断続的に増減するためデマンド変動が大きくなりがちです。連続大量生産ではなくバッチ的な操業構成では、アーク炉のピーク需要をいかに平準化するかが契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "熱処理炉・真空炉に伴う恒常負荷とデマンド変動",
    detail:
      "特殊鋼は焼入れ・焼戻し・浸炭・真空熱処理など熱処理工程が品質を左右し、熱処理炉・真空炉が長時間連続で稼働します。アーク炉の溶解が止まっても、熱処理炉の昇温・保持や真空ポンプ・冷却設備のベース負荷は続くため、夜間・休日も一定の需要が残る点が特殊鋼工場の電力構造の特徴です。加えてアーク炉特有の大きなデマンド変動・力率低下・高調波が受変電設備に負荷をかけるため、力率改善・高調波対策が基本料金と設備保全の両面で重要になります（目安・出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "中国電力エリアの系統と特殊鋼工場の関係",
    detail:
      "島根県は中国電力エリアに属し、小売は中国電力（本体が法人小売を担う）、送配電は中国電力ネットワークが担います。中国エリアは三隅などの火力と中国山地の水力を主力としつつ、島根原子力発電所2号機の再稼働が進行しており、電源構成の見通しに影響します。火力比率が一定あるため燃料費調整額の感応度は中位とされ、為替・燃料価格の変動が一定程度単価に反映されます。アーク炉のように瞬時電力が極大の需要家は、JEPX中国エリア価格や需給調整の影響を特に受けやすいため、エリア固有の単価事情を踏まえた契約戦略が求められます（目安・出典: 業界団体・エネ庁統計・自治体統計から整理）。",
  },
];

const utilitiesList = [
  {
    name: "中国電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "島根県内最大シェア。安来・松江・出雲・雲南の高圧・特別高圧の特殊鋼工場の長期需要家を多数抱えます。法人向けの高圧・特別高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。中国エリアは火力と水力を主力とし、島根原子力発電所2号機の再稼働進行が中期的な電源構成に影響するとされ、燃料費調整額の感応度は中位です。アーク炉のように瞬時電力が極大の需要家には需給調整・契約電力面での対応力が論点となります。長期安定供給と災害復旧体制から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたもので、特定の電力会社・契約形態を推奨するものではありません（目安・出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "島根県内の高圧・特別高圧特殊鋼工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きいアーク炉工場の大型案件で実績を積み上げています。ただしアーク炉は瞬時電力が極大でデマンドの読みにくい負荷であるため、供給可能kWh枠・契約電力・燃調条件を含めた総合比較が必要です。瞬時のピーク負荷を許容できるかは事業者ごとに条件が異なるため、入札時に負荷曲線を提示した精緻な見積取得が実務上重要になります。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（中国圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "中国圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。特殊鋼工場では熱処理炉・鍛造加熱で燃料（ガス・重油）需要も大きいため、ガス＋電気＋熱の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成とアーク炉のピーク負荷条件に依存し、特定の事業者の優劣を述べるものではありません。本記載は中立的な位置づけ整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "特殊鋼大手やグローバル供給網に組み込まれる事業者では、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（敷地・屋根面積を活かす自家消費）、オフサイトPPA（県内・中国圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。ただしアーク炉は瞬時電力が極大で自家消費太陽光だけではピークを賄いきれないため、PPAは年間使用量ベースの再エネ調達・CN対応として位置づけられます。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。中国エリアも例外ではなく、とりわけアーク炉のように瞬時電力が極大で市場価格の影響を受けやすい需要家では、供給枠の確保が容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい特殊鋼工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    name: "JEPX中国エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX中国エリアのスポット価格は、火力と水力を主力とする供給構造を背景に推移しますが、全国的な需給逼迫時にはエリア間連系を通じて上昇することがあります。島根原子力発電所2号機の再稼働進行は中期的な需給に影響する要素として注目されます。アーク炉のように瞬時電力が極大の市場連動型契約では、価格スパイク時に溶解タイミングが重なると単価が大きく振れるため、変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "中国電力エリアの特別高圧 — 大規模特殊鋼工場の単価水準",
    detail:
      "大型アーク炉を擁する特殊鋼工場（2,000kW超・年1億kWh超規模）の特別高圧電力量料金は、標準メニューで概ね15〜18円/kWh＋調整項目とされます。中国エリアは火力と水力を主力とし、島根2号機の再稼働進行を含む電源構成のもとで単価が形成されます。燃料費調整額（中国エリアは火力比率から感応度は中位）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は20〜26円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定・アーク炉の負荷曲線で変動します（目安・出典: 業界団体・経産省/エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小特殊鋼工場の単価",
    detail:
      "安来・松江・出雲・雲南の高圧特殊鋼工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は16〜20円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は22〜28円/kWhレンジが目安です。アーク炉や小型炉を持つ工場ではデマンドのピークが鋭いため、契約電力の設定と力率改善が基本料金に直結します。いずれにせよ自社のアーク炉・熱処理炉の使用実態に即した比較検討が前提です（目安・出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "燃料費調整額の感応度 — 中国電力エリア固有（中位）",
    detail:
      "中国電力エリアは三隅などの火力と中国山地の水力を主力とし、火力依存度が一定あるため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度は中位とされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面では火力分の燃調が単価を押し上げました。島根原子力発電所2号機の再稼働進行は、中期的に火力依存度を下げ燃調感応度を緩和し得る要素として注目されます。とはいえ現時点では燃調変動が残るため、契約戦略に織り込む必要があります（目安・出典: 業界団体・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量1.5億kWh級の大規模アーク炉工場では年6億円規模の負担となり、電力多消費の特殊鋼工場では負担の絶対額が大きくなります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高いアーク炉工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（目安・出典: エネ庁統計から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模特殊鋼工場（特別高圧・電炉特殊鋼、年間 1.5億kWh規模）— 代表シナリオ",
    before:
      "Before: 安来近郊の大規模特殊鋼工場A（大型アーク炉による特殊鋼・刃物鋼の溶解＋圧延・熱処理）。アーク炉溶解が電力消費の中核で瞬時電力が極大、熱処理炉・真空炉が常時稼働。中国電力の特別高圧契約＋燃調連動。年間電気代 約12億円規模（目安）。以下は公開情報から再構成した代表シナリオです。本記載は特定の電力会社・契約形態を推奨するものではありません。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（負荷曲線を提示し非化石証書付の選択肢を比較）／アーク炉の投入電力管理・溶解スケジュール最適化でデマンドピークを平準化／力率改善・高調波対策で受変電を最適化／熱処理炉の高効率化＋排熱回収／工場屋根の自家消費太陽光（オンサイトPPA）／BEMS・需給予測でピークシフト。",
    result:
      "Result: 年間電気代 約12億円 → 約10.5億円（▲約12.5%、▲1.5億円・目安）／アーク炉のピーク平準化で契約電力を抑制／5年累計では ▲1.5億円×5年＝▲7.5億円（目安）。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模特殊鋼工場（高圧／特別高圧・圧延／熱処理、年間 3.0億円規模）— 代表シナリオ",
    before:
      "Before: 安来・松江近郊の中規模特殊鋼工場B（圧延・鍛造・熱処理を中核に多品種少量）。アーク炉または受材の圧延・熱処理炉が稼働し、鋼種切替でデマンド変動が大きい。中国電力の業務用高圧／特別高圧電力＋燃調連動。年間電気代 約3.0億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／熱処理炉のインバータ・高効率バーナー更新＋排熱回収（SII補助1/2活用を検討）／コンプレッサー高効率機更新＋エア漏れ対策／力率改善・高調波対策／屋根太陽光の自家消費（オンサイトPPA）／BEMSで炉のピーク平準化。",
    result:
      "Result: 年間電気代 約3.0億円 → 約2.6億円（▲約13%、▲4,000万円・目安）／投資回収 補助金後 2〜3年前後（目安）／5年累計では ▲4,000万円×5年＝▲2.0億円（目安）。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小特殊鋼・金属粉末（高圧・二次加工／金属粉末、年間 8,000万円規模）— 代表シナリオ",
    before:
      "Before: 安来・雲南近郊の中小特殊鋼・金属粉末C社（従業員80名・二次加工／粉末冶金／熱処理の小ロット多品種）。中国電力の業務用高圧電力＋燃調連動。熱処理炉・焼結炉・恒温室が中心で、夜間・休日もベース電力が続く。年間電気代 約8,000万円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場・炉周りのLED化＋断熱（県補助＋SII併用を検討）／熱処理炉・焼結炉の高効率化＋排熱回収／コンプレッサー集中管理＋エア漏れ対策／力率改善／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約8,000万円 → 約7,000万円（▲約12.5%、▲1,000万円・目安）／投資回収 補助金後 2年前後（目安）／5年累計では ▲1,000万円×5年＝▲5,000万円（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "電気炉（アーク炉）の瞬時電力極大とデマンドピーク",
    detail:
      "特殊鋼工場の電力構造の最大の特徴は、アーク炉溶解時の瞬時電力が極めて大きいことです。アーク放電の立ち上がりで大電流が流れ、デマンド（kW）のピークが鋭く立つため、契約電力が過大設定になりやすく基本料金を押し上げます。さらに市場連動契約では価格スパイク時に溶解が重なると単価が大きく振れます。投入電力管理・溶解スケジュールの平準化・蓄電やフライホイールの併用がピーク抑制の主戦場で、ここの巧拙が電力単価最適化を大きく左右します（目安・出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "熱処理炉・真空炉・焼結の用役負荷",
    detail:
      "特殊鋼の品質を決める焼入れ・焼戻し・浸炭・真空熱処理・焼結は、熱処理炉・真空炉が長時間連続運転するため電力・燃料負荷が大きい工程です。真空ポンプ・冷却設備・搬送も用役電力を押し上げます。これらは品質保証のため運転条件の自由度が低い一方、炉の断熱強化・高効率バーナー化・排熱回収・運転スケジュールの最適化で一定の改善余地があります。アーク炉のピーク負荷とは別に、熱処理炉のベース負荷を下げる視点が重要です（目安・出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "中国電力エリアの燃調感応度（中位）と島根2号機再稼働",
    detail:
      "中国電力エリアは火力と水力を主力とし、火力依存度が一定あるため燃料費調整額の感応度は中位とされるのがエリア固有の特徴です。燃料高騰局面では火力分の燃調が単価を押し上げる一方、極端な急騰は起こりにくい中位の位置づけです。島根原子力発電所2号機の再稼働進行は、中期的に火力依存度を下げ燃調感応度を緩和し得る要素として注目されます。安来の特殊鋼工場では、この中位の単価環境を前提に固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "力率低下・高調波と多品種切替のデマンド変動",
    detail:
      "アーク炉は力率が低下しやすく高調波を発生させるため、受変電設備への負荷と力率割引・割増の面で基本料金に影響します。加えて刃物鋼・工具鋼・金属粉末など多品種少量生産では、鋼種切替のたびに溶解・熱処理条件が変わり炉の稼働が断続的に増減してデマンドのピークが発生しやすくなります。力率改善（コンデンサ・SVC）・高調波対策・生産スケジュール調整・蓄電池併用がピーク需要の平準化と基本料金（契約kW）削減に直結します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、電力多消費のアーク炉工場では負担の絶対額が大きく、年々の制度動向を経営計画に織り込む必要があります。加えて自動車・工具・電子部品など川下の供給網からScope3 GHG排出削減要請が強まり、特殊鋼事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。アーク炉は瞬時電力が極大で自家消費だけでは賄いきれないため、年間使用量ベースの再エネ調達としてPPA等が選択肢となります。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "島根県 産業政策・省エネ／脱炭素関連補助（島根県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、ものづくり振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策に基づく補助メニュー。特殊鋼・金属の高効率熱処理炉・コンプレッサー・LED・断熱・力率改善・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は島根県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（目安・出典: 自治体統計・島根県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率熱処理炉・コンプレッサー・ヒートポンプ・LED・力率改善・排熱回収設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "特殊鋼工場の熱処理炉更新・コンプレッサー高効率化・全館LED化・排熱回収などで活用しやすい主力補助です。安来・松江・出雲の特殊鋼・金属粉末の更新案件でも申請対象となり得ます。アーク炉の周辺設備（受変電・力率改善）も対象範囲を要確認です。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（目安・出典: SII公募要領から整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい特殊鋼工場で活用が想定されます。供給網のCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。ただしアーク炉は瞬時電力が極大で自家消費太陽光だけではピークを賄いきれないため、年間使用量ベースの再エネ調達として位置づける整理が現実的です。最新の公募要件は所管窓口で確認してください（目安・出典: 経産省/エネ庁統計から整理）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率熱処理炉・ヒートポンプ・排熱回収・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。アーク炉設備の更新や工場新増設時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります／目安・出典: 経産省統計から整理）。",
  },
  {
    name: "中国経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "特殊鋼・金属の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "素材産業の国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。安来の特殊鋼・刃物鋼・金属粉末の高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります（目安・出典: 中国経済産業局・経産省統計から整理）。",
  },
];

const industryProfile = [
  {
    label: "安来市 — 特殊鋼・刃物鋼の中核（ヤスキハガネ）",
    detail:
      "安来市は「ヤスキハガネ」で知られる特殊鋼の中核で、刃物鋼・工具鋼・金属粉末・電子材料を扱う高圧・特別高圧の工場が集中するエリアです。日立金属（現プロテリアル）の歴史的な集積を背景に、アーク炉溶解・圧延・鍛造・熱処理・真空処理を含む一貫工程が立地し、電力プロファイルの中核はアーク炉の瞬時電力極大という点が共通します。多品種少量のためデマンド変動も大きく、契約電力最適化の余地があります。本記載は集積構造の中立的説明であり、特定企業の優劣を述べるものではありません。",
  },
  {
    label: "松江市 — 加工・周辺産業・物流連動",
    detail:
      "松江市近郊には特殊鋼の二次加工・周辺産業・物流が連動する金属関連事業所が立地します。圧延材・線材の加工、熱処理、検査・出荷を支える機能が集積し、熱処理炉やコンプレッサーの用役負荷が恒常的に発生します。県庁所在地の機能と連動し、素材から加工・出荷を支えるインフラが集積しています。中小〜中堅の高圧契約が中心です。",
  },
  {
    label: "出雲市 — 金属加工・電子材料関連",
    detail:
      "出雲市近郊は金属加工・電子材料関連の事業所が立地するエリアです。特殊鋼の二次加工や金属粉末・電子材料の精密処理を扱う事業所が多く、熱処理・真空処理・精密加工の電力負荷が断続的に発生します。中小〜中堅規模の高圧契約が中心で、設備更新と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "雲南市・周辺 — 二次加工・金属粉末の集積",
    detail:
      "雲南市近郊には特殊鋼の二次加工・金属粉末・周辺産業の事業所が立地します。焼結炉・熱処理炉を抱える粉末冶金系の事業所では、炉の昇温・保持・冷却サイクルがベース負荷の柱となります。高圧契約の中小製造業が中心で、炉の高効率化と力率改善が電力構造の改善余地です。",
  },
  {
    label: "県内全域 — 特殊鋼・電炉を起源とする産業基盤",
    detail:
      "島根の特殊鋼産業は安来のヤスキハガネを起源に長年にわたって蓄積されてきた電気炉・特殊鋼の産業基盤の上に成り立っています。溶解から圧延・熱処理・粉末冶金・電子材料までの裾野が県内で完結しやすく、高付加価値・多品種少量の特殊鋼集積を支えるエコシステムを形成しています。これらの事業所群は、中国電力エリアの火力・水力を主力とし島根2号機の再稼働が進行する電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "中国エリアの新電力浸透度",
    detail:
      "中国電力エリアの新電力比率は、全国平均と比べて中位の水準にあるとされます（目安・出典: 経産省/エネ庁統計から整理）。特殊鋼工場のように年間使用量が大きくアーク炉の瞬時電力が極大の需要家では、供給可能kWh枠と負荷曲線の許容が前提となるため、競争入札による相見積が有効です。ただし瞬時のピーク負荷を許容できる事業者は限られる局面もあり、最終判断は自社の使用実態とアーク炉の操業条件に即して行う必要があります。本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、中国エリアでも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。とりわけアーク炉は瞬時電力が極大で価格スパイク時に溶解が重なると単価が大きく振れるため、長期固定（2〜5年）で単価を安定させる選択が検討されています。島根2号機の再稼働進行は中期的な需給に影響する要素ですが、固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "中国電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・アーク炉のピーク負荷への対応実績。デメリット: 新電力との比較で単価がやや高めになる局面、燃料費調整額の条件差。中国エリアは燃調感応度が中位で、島根2号機の再稼働進行が中期的な単価環境に影響し得るため、継続か切替かは総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（島根×特殊鋼固有）",
    detail:
      "①アーク炉・連続稼働工場への供給実績と瞬時ピーク負荷の許容、②非化石証書／再エネトラッキング付メニュー（供給網のCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（中国エリアは中位・島根2号機の動向を確認）、⑤BCP対応（停電時の炉・溶湯の安全確保）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。本記載は特定の契約形態を推奨するものではありません。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "供給網のCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・中国圏の太陽光案件）／コーポレートPPAが検討材料になります。ただしアーク炉は瞬時電力が極大で自家消費太陽光だけではピークを賄いきれないため、PPAは年間使用量ベースの再エネ調達・CN対応として位置づけるのが現実的です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "アーク炉の投入電力管理＋ピーク平準化",
    detail:
      "アーク炉の溶解は投入電力管理（電力プロファイル制御）・スクラップ予熱・溶解スケジュールの最適化により、品質を維持しつつ瞬時のデマンドピークを抑える余地があります。複数炉のタイミングをずらすピークシフトや蓄電池・フライホイール併用で契約電力（kW）を抑えると基本料金が下がります。設備更新と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。効果は鋼種・操業条件によって変動します。",
  },
  {
    label: "熱処理炉・焼結炉の高効率化＋排熱回収",
    detail:
      "焼入れ・焼戻し・浸炭・真空熱処理・焼結の炉は、断熱強化・高効率バーナー化・燃焼制御の最適化＋排熱回収（予熱・給湯・他工程利用）で電力・燃料▲10〜20%程度が見込めます。炉の昇温・保持の運転スケジュール統合も省エネに寄与します。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は炉の種類・稼働率・既設効率によって変動します。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。特殊鋼工場では搬送・洗浄・計装エアなど圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "力率改善・高調波対策＋受変電最適化",
    detail:
      "アーク炉は力率が低下しやすく高調波を発生させるため、コンデンサ・SVC（静止型無効電力補償装置）・高調波フィルタの導入で力率を改善すると、力率割引の獲得と受変電設備の保全の両面で効果があります。受変電設備の更新・最適化はアーク炉のピーク負荷を安定させ、設備劣化の抑制にも寄与します。投資回収は設備により2〜4年程度が目安です。効果は炉の負荷条件によって変動します。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる特殊鋼工場では、屋根太陽光の自家消費PPAが年間使用量ベースの再エネ調達の打ち手となり得ます。初期投資ゼロで再エネ調達を進めつつ、BEMSで需要を見える化し、アーク炉・熱処理炉のピークを平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。アーク炉のピークは太陽光だけでは賄えないため、ピーク抑制策と組合せる整理が前提です。本記載は特定の調達形態や特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績（アーク炉ピーク含む）に対して過剰でないか",
  "アーク炉の投入電力管理・溶解スケジュールでデマンドピークを平準化する余地があるか",
  "熱処理炉・真空炉・焼結炉の年間使用kWhを工程別に把握しているか",
  "力率改善（コンデンサ・SVC）・高調波対策で力率割引を獲得できているか",
  "燃料費調整額の条件（中国エリアは中位・島根2号機の動向）を契約書で確認したか",
  "中国電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から負荷曲線付きで相見積を取得したか",
  "供給網からのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "島根県・SII・中国経済産業局補助の併用可否を設備別に整理したか",
  "鋼種切替に伴うデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の炉・溶湯の安全確保（自家発・蓄電池・非常用電源）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "島根県の特殊鋼工場は中国電力エリア固有の単価特性がありますか？",
    answer:
      "中国電力エリアは三隅などの火力と中国山地の水力を主力とし、火力依存度が一定あるため燃料費調整額の感応度は中位とされるのがエリア固有の特徴です。島根原子力発電所2号機の再稼働進行は、中期的に火力依存度を下げ燃調感応度を緩和し得る要素として注目されます。とりわけアーク炉は瞬時電力が極大で需給調整・市場価格の影響を特に受けやすいため、契約電力と力率改善が単価に直結します。なお本回答は特定の電力会社・契約形態を推奨するものではありません（目安・出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    question: "特殊鋼工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般に電気炉（アーク炉）による溶解が電力消費の中核とされ、アーク放電時の瞬時電力が極めて大きく契約電力（kW）・需給調整・市場価格の影響を特に強く受けます。次いで熱処理炉・真空炉・焼結炉の長時間連続加熱、圧延・鍛造の駆動電力、コンプレッサー・搬送が続きます。アーク炉のピーク負荷の平準化・力率改善・熱処理炉の高効率化が電力単価最適化の主戦場です（目安・出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "刃物鋼・金属粉末の多品種少量生産で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種少量生産では鋼種切替のたびに溶解・熱処理条件が変わり、炉の昇温・保持・冷却が断続的に増減してデマンド変動が大きくなりがちです。生産スケジュールの調整やアーク炉のピーク需要の平準化、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせて熱処理炉・焼結炉の高効率化＋排熱回収、コンプレッサー高効率化、力率改善・高調波対策が有効です。島根県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・鋼種・立地によって異なります。",
  },
  {
    question: "島根の特殊鋼工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では年間使用量ベースの再エネ調達として現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達とCN対応の両立が期待できます。ただしアーク炉は瞬時電力が極大で自家消費太陽光だけではピークを賄いきれないため、PPAはピーク抑制策と組合せる整理が前提です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は特殊鋼工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量1.5億kWh級の大規模アーク炉工場では年6億円規模の負担となり、電力多消費の特殊鋼工場では負担の絶対額が大きくなります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高いアーク炉工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（目安・出典: エネ庁統計から整理）。",
  },
  {
    question: "島根の特殊鋼工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。ただしアーク炉は瞬時電力が極大でデマンドの読みにくい負荷であるため、供給可能kWh枠・契約電力・燃調条件を含めた総合比較が重要になります。瞬時のピーク負荷を許容できる事業者は限られる局面もあるため、負荷曲線を提示した精緻な見積取得が前提です。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "島根県の補助金は特殊鋼工場でも使えますか？",
    answer:
      "使える可能性があります。島根県は中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があり、特殊鋼・金属の高効率熱処理炉・コンプレッサー・LED・断熱・力率改善・BEMSなど対象設備は幅広いとされます。国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は島根県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます（目安・出典: 自治体統計から整理）。",
  },
  {
    question: "停電時の安全確保は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は中国電力ネットワーク（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし特殊鋼工場では停電時にアーク炉の溶湯・熱処理炉の安全確保が品質・安全に直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中国電力 法人向け料金プラン", url: "https://www.energia.co.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "島根県（産業政策・補助金）", url: "https://www.pref.shimane.lg.jp/" },
  { name: "経済産業省", url: "https://www.meti.go.jp/" },
  { name: "中国電力ネットワーク（送配電・系統情報）", url: "https://www.energia.co.jp/nw/" },
];

export default function ShimaneSteelElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/shimane-steel-electricity-cost"
        datePublished="2026-06-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "島根県の特殊鋼工場の電気料金", url: "https://simulator.eic-jp.org/shimane-steel-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">島根県の特殊鋼工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            島根県の特殊鋼工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            島根県、とりわけ安来市は「ヤスキハガネ」で知られる特殊鋼・刃物鋼・金属粉末・電子材料の集積地です。本ページでは「島根県 × 特殊鋼」というクロス領域に絞り、中国電力エリア固有の単価事情（火力・水力主力で島根2号機の再稼働が進行・燃調感応度は中位）と、電気炉（アーク炉）の瞬時電力が極大という電力プロファイル、圧延・熱処理の用役負荷、契約最適化、補助金・PPA活用までを実務目線で整理します。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-11" updatedAt="2026-06-11" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>島根県の特殊鋼産業集積（安来・松江・出雲・雲南）の電力プロファイル</li>
              <li>大規模電炉特殊鋼／中規模圧延・熱処理／中小二次加工・金属粉末のBefore/After代表シナリオ3件</li>
              <li>中国電力エリアの単価水準と燃調感応度（中位・島根2号機再稼働進行）</li>
              <li>供給網のCN要請を踏まえた再エネ調達（PPA・非化石証書）とアーク炉ピーク抑制の進め方</li>
              <li>島根×特殊鋼に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「島根 × 特殊鋼（安来の特殊鋼・電炉）」のクロス領域に特化したガイドです。集積タイプの異なる{" "}
            <Link href="/hyogo-steel-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              兵庫県の鉄鋼業（神戸製鋼・姫路）
            </Link>
            、{" "}
            <Link href="/wakayama-steel-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              和歌山県の鉄鋼業（和歌山臨海の一貫製鉄）
            </Link>
            とは集積タイプが異なるため、本記事は安来の特殊鋼・電気炉に絞って扱います。業種一般としての鉄鋼業全体は{" "}
            <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              鉄鋼業の電気料金見直し
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              島根県の特殊鋼産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根県、とりわけ安来市はヤスキハガネを起源とする特殊鋼の集積地です。刃物鋼・工具鋼・金属粉末・電子材料までを含む高付加価値の金属工場群が安来・松江・出雲・雲南等に広がり、電気炉（アーク炉）による溶解を中核に圧延・鍛造・熱処理を含む高圧・特別高圧の工場が多数立地しています。電力プロファイルの中核はアーク炉の瞬時電力が極大という点です。
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
              島根県全体の文脈は{" "}
              <Link href="/shimane-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                島根県の法人電気料金ガイド
              </Link>
              、中国電力エリア全体は{" "}
              <Link href="/region-chugoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中国電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                鉄鋼業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中国電力エリアの主要電力会社・新電力（島根×特殊鋼での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根県内の特殊鋼工場は、中国電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。アーク炉は瞬時電力が極大で需給調整・市場価格の影響を強く受けるため、供給可能kWh枠・契約電力・燃調安定性・再エネ付加価値で選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              中国電力エリアの料金水準と特殊鋼工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（中国エリアは中位）、再エネ賦課金の累積負担を、特殊鋼工場の代表的な契約タイプ別に整理します。中国エリア固有の火力・水力主力で島根2号機の再稼働が進行する電源構成と、アーク炉の瞬時電力極大という負荷特性を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は2026年時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定・アーク炉の負荷曲線で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 新電力ネット（https://pps-net.org/unit）・業界団体・経産省/エネ庁統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別代表シナリオ3件 — 大規模電炉特殊鋼／中規模圧延・熱処理／中小二次加工・金属粉末（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根県内の代表的な3規模で、契約見直し＋設備対策＋アーク炉ピーク抑制＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。電炉は電力負荷が極大で削減余地も大きい一方、実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鉄鋼業の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              島根×特殊鋼固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根の特殊鋼工場の電気代は、アーク炉の瞬時電力極大とデマンドピーク・熱処理炉／焼結の用役負荷・中国エリアの燃調感応度（中位・島根2号機再稼働進行）・力率低下／高調波と多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 島根県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根県の産業振興補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、中国経済産業局のサプライチェーン強靱化補助の5層を組合せ、特殊鋼・金属の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（安来／松江／出雲／雲南）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根の特殊鋼サプライチェーンは、安来の特殊鋼・刃物鋼の中核を中心に、松江の加工・周辺産業・物流連動、出雲の金属加工・電子材料関連、雲南・周辺の二次加工・金属粉末集積、県内全域の特殊鋼・電炉を起源とする産業基盤という構造です。
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
              電力会社切替の実情 — 中国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              アーク炉の瞬時電力極大に伴う供給枠・負荷曲線の許容、市場連動からの固定回帰、供給網のCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したもので、特定の電力会社・契約形態を推奨するものではありません。
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
              島根×特殊鋼の省エネ・自家消費事例（アーク炉投入電力管理／熱処理炉／コンプレッサー／力率改善／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特殊鋼工場の省エネは、アーク炉の投入電力管理＋ピーク平準化、熱処理炉・焼結炉の高効率化＋排熱回収、コンプレッサー高効率化、力率改善・高調波対策、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造（とりわけアーク炉のピーク）により異なります。
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
              島根×特殊鋼 契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。とりわけアーク炉のピーク負荷の把握は精緻な見積取得の前提です。
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
              シミュレーターで島根×特殊鋼の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              島根の特殊鋼工場は、アーク炉の瞬時電力極大によるデマンドピーク・熱処理炉／焼結の用役負荷・供給網のCN要請など複合リスクを抱えます。中国エリアは燃調感応度が中位で島根2号機の再稼働が進行する点もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約12.5〜13%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/shimane-business-electricity-cost", title: "島根県の法人電気料金ガイド（地域一般）", description: "島根県全体の電力事情・中国電力エリア・補助金。" },
              { href: "/region-chugoku-business-electricity", title: "中国電力エリアの法人電気代事情", description: "中国エリアの料金体系・島根2号機再稼働・燃調感応度。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し（業種一般）", description: "高炉・電炉・圧延の電力負荷と契約最適化。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工工場の電気料金見直し（業種一般）", description: "プレス・研磨・めっき・熱処理の電力最適化。" },
              { href: "/hyogo-steel-electricity-cost", title: "兵庫県の鉄鋼業の電気料金（業種×地域）", description: "神戸製鋼・姫路の鉄鋼集積。集積タイプが異なる。" },
              { href: "/wakayama-steel-electricity-cost", title: "和歌山県の鉄鋼業の電気料金（業種×地域）", description: "和歌山臨海の一貫製鉄。本記事は安来の特殊鋼。" },
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
            ]}
          />

          <ContentCta
            heading="島根の特殊鋼工場の電気代リスクを自社条件で試算する"
            description="大規模電炉特殊鋼・中規模圧延／熱処理・中小二次加工／金属粉末いずれも、中国電力エリア・アーク炉の瞬時電力極大・島根2号機再稼働進行・供給網のCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="島根の特殊鋼工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模電炉特殊鋼・中規模圧延／熱処理・中小二次加工／金属粉末いずれも、アーク炉の瞬時電力極大・熱処理炉の用役負荷・力率／高調波対策・供給網のCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で島根県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
