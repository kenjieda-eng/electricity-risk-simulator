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
  "愛知県の自動車・輸送機器工場の電気料金完全ガイド｜豊田・刈谷・田原・みよしの特別高圧プレス／塗装／溶接ライン";
const pageDescription =
  "愛知県の自動車・輸送機器製造業に特化した法人電気代ガイド。トヨタ城下町（豊田・刈谷・田原・みよし）のプレス／塗装／溶接／組立ラインの電力消費構造、中部電力エリアの単価水準、特別高圧の競争入札、補助金活用、EV化に伴う電力需要変化までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "愛知県 自動車工場 電気料金",
    "豊田 自動車 電気代",
    "刈谷 田原 みよし 工場 電力",
    "中部電力 特別高圧 自動車",
    "自動車工場 塗装 溶接 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/aichi-automotive-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/aichi-automotive-electricity-cost",
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
    label: "愛知県の自動車産業集積 — トヨタ城下町を核とする裾野の広さ",
    detail:
      "愛知県は出荷額ベースで国内最大の自動車産業集積地。豊田市（トヨタ自動車本社・本社工場・元町・上郷・高岡・堤・下山・三好・衣浦）、刈谷市（デンソー本社・アイシン本社・豊田自動織機）、田原市（トヨタ田原工場：レクサス）、みよし市・安城市・西尾市・岡崎市までを含むサプライチェーンが県全体に広がります。完成車・Tier1・Tier2・金型・治工具・物流・試験までが半径30km圏に集積する世界的にも稀有な構造で、特別高圧契約の集中度が高いエリアです（出典: 愛知県統計年鑑・経産省工業統計）。",
  },
  {
    label: "完成車工場の電力プロファイル — プレス／溶接／塗装／組立",
    detail:
      "完成車1台の生産に要するエネルギーのうち、電力消費の中心は塗装ライン（前処理・電着・中塗・上塗・乾燥／全エネルギーの30〜40%）、プレス（大型サーボプレスの瞬間負荷）、ボディ溶接（スポット溶接ロボット）、組立ラインの照明・空調・搬送です。トヨタ環境報告書では1台当たりCO2原単位を公表しており、塗装工程の脱炭素化が長年の課題として明示されています（出典: トヨタ自動車 環境報告書／統合報告書）。",
  },
  {
    label: "Tier1・Tier2サプライヤーの電力負荷",
    detail:
      "デンソー（電子部品・パワー半導体）、アイシン（駆動系・AT/CVT）、豊田自動織機（エンジン・フォークリフト・繊維機械）、トヨタ紡織（内装）、ジェイテクト（ステアリング・軸受）など県内Tier1の本社・主力工場が立地。プレス・鋳造・熱処理・切削・組立・検査と多様な工程を抱え、デマンド変動が大きい点が特徴です。Tier2の中小工場（金属加工・樹脂成形・電子部品）も含めれば県内事業所数は数千規模に上ります。",
  },
  {
    label: "EV化・電動化シフトに伴う電力需要構造の変化",
    detail:
      "BEV/HEV/FCEVの拡大により、エンジン関連工程の縮小と引き換えに、駆動用バッテリー組立・モーター巻線・パワー半導体（IGBT/SiC）製造の電力需要が増加します。トヨタの「全方位戦略」下では既存ライン併存のため、急激なkW削減が進む見込みは薄く、むしろ電動化部品工場の新増設で県内総電力需要は当面維持〜微増基調が想定されます。",
  },
  {
    label: "中部電力エリアの系統と自動車工場の相互依存",
    detail:
      "中部電力パワーグリッドの送電網は、知多火力・武豊火力・新名古屋火力等のLNG火力を主軸に、川越火力（中部最大）、浜岡原発（停止中）、再エネ調達で構成。自動車工場群の特別高圧需要は中部全体需要の柱で、東日本大震災後の浜岡停止以降は火力依存度が上昇し、燃料費調整額の感応度が高い状態が続いています（出典: 中部電力パワーグリッド供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "中部電力ミライズ",
    role: "一般小売事業者（旧一電）",
    detail:
      "愛知県内最大シェア。豊田・刈谷・田原・みよしの特別高圧自動車工場の長期需要家を多数抱える。『高圧電力AS／BS』『業務用高圧電力プラス』『特別高圧電力』が主軸で、固定単価・燃調連動型ともに整備。2023年改定後は法人向けも実質値上げ局面が続き、競合新電力との価格差が拡大した時期もありましたが、長期安定供給と災害復旧体制の優位性で大手取引は維持基調です。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "愛知県内の特別高圧Tier1・大型Tier2の競争入札における主要対抗馬。固定単価メニュー（3〜5年契約）が中心で、年間1,000万kWh超の大型案件で実績を積み上げています。トヨタグループのCN要請（2035年カーボンニュートラル工場宣言など）を受け、非化石証書付き・再エネトラッキング付きメニューの引合いが急増しています。",
  },
  {
    name: "中部電力グループ系新電力（CDエナジー・東邦ガス系等）",
    role: "地域系新電力",
    detail:
      "東邦ガス系の電気事業（東邦ガスとくとくプラン法人向け等）は、コージェネ併設工場や東邦ガス都市ガス需要家との一括最適化提案が強み。中部圏の自動車・電子部品工場でガス＋電気の総合最適パッケージとして採用例があります。",
  },
  {
    name: "再エネ特化型・PPA事業者（みんな電力・自然電力・オリックス・東京ガス系等）",
    role: "再エネ特化型／PPA",
    detail:
      "トヨタが2035年までに全工場CN化を宣言し、Tier1・Tier2にもScope3対応の調達変更を要請するなか、追加性のある再エネ調達ニーズが拡大。屋根オンサイトPPA（豊田・田原は屋根面積が広く適性高）、オフサイトPPA（県内・三重・岐阜・長野の太陽光案件）、コーポレートPPAの引合いが急増しています。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年JEPX高騰局面では中部エリアでも一部新電力が新規受付停止・撤退（F-Power等）。2024年以降は供給枠が徐々に回復していますが、特別高圧大型案件（年間1億kWh超）では供給可能kWh枠の確保が常に課題で、入札の早期着手（契約満了12ヶ月前から）が重要です。",
  },
  {
    name: "JEPX中部エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX中部エリアのスポット価格は東京・関西と概ね連動しつつ、冬季・夏季のピーク時間帯では関西並みかやや高めで推移する局面が多い。市場連動型契約の自動車工場では2022〜2023年に大幅な単価上昇を経験し、現在は固定回帰の動きが優勢です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "中部電力エリアの特別高圧 — 自動車工場の単価水準",
    detail:
      "完成車工場・大型Tier1（2,000kW超）の特別高圧電力量料金は標準メニューで概ね16〜19円/kWh+調整項目。燃料費調整額（2024〜2025年で+2.0〜+4.0円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は22〜27円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安で、年間1億kWh級のトヨタ系完成車工場では数億円規模のインパクトになります。",
  },
  {
    label: "高圧電力 — Tier1・Tier2部品工場の単価",
    detail:
      "刈谷・安城・西尾・岡崎の高圧Tier1・Tier2工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は17〜21円/kWh+調整項目。実質単価は24〜29円/kWhレンジ。新電力経由なら2〜3円/kWh安いケースが多く、見直し効果が出やすいレンジです。",
  },
  {
    label: "燃料費調整額の感応度 — 中部電力エリア固有",
    detail:
      "中部電力エリアの電源構成はLNG火力依存度が高く、為替（円安）とLNG価格（JKMスポット）の双方に感応します。2022年Q4〜2023年Q1のピーク時は燃調が+10円/kWh超に達した局面もあり、年間使用量3,000万kWhの工場では燃調だけで年間3億円規模の変動を経験しました（出典: 中部電力ミライズ単価実績／資源エネ庁エネルギー白書）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量1億kWh級の完成車工場では年約4億円規模の負担。一部の電力多消費業種は減免（賦課金算定額の8割減免）の対象となる可能性があり、自動車部品工場の中でも電気使用量原単位の高い事業所は申請を検討する価値があります。",
  },
];

const industryImpact = [
  {
    title: "業種1: 完成車組立工場（特別高圧 30,000kW、年間 1.5億kWh）",
    before:
      "Before: 県内完成車組立工場A（敷地面積150万m²、生産能力年45万台）。プレス・溶接・塗装・組立を内製。中部電力ミライズの特別高圧契約＋既往の燃調連動。2023年度は燃調上昇＋夏冬ピーク重なりで請求がピーク月17億円規模。年間電気代 約170億円。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約獲得（再エネ比率40%・トラッキング付）／塗装ラインの低温硬化型塗料導入＋廃熱回収／プレスのサーボモーター更新／工場屋根全面PPA（25MW相当、自家消費＋RE100算入）／BEMS・需給予測AI導入。",
    result:
      "Result: 年間電気代 約170億円 → 約140億円（▲約18%、▲30億円・目安）／契約電力 30,000→27,500kW／RE100比率 約30%達成／CN工場宣言ロードマップ準拠。",
  },
  {
    title: "業種2: Tier1電子部品工場（特別高圧 5,000kW、年間 3,500万kWh）",
    before:
      "Before: 刈谷市のTier1電子部品工場B（パワー半導体・モーター制御ECU）。クリーンルーム＋実装ライン＋検査が24時間稼働。市場連動プラン併用で2023年1月の高騰局面では月3.8億円の請求。年間電気代 約42億円。",
    after:
      "After: 入札特化型新電力に固定2年で切替／クリーンルーム外気冷房（フリークーリング）の中間期適用拡大／コンプレッサー高効率機更新（SII補助1/2活用、投資2.5億円）／自家消費太陽光1.5MW＋蓄電池3MWh導入／需給予測AIでピークシフト。",
    result:
      "Result: 年間電気代 約42億円 → 約35億円（▲約17%、▲7億円・目安）／契約電力 5,000→4,600kW／投資回収 補助金後 2.5年前後（目安）／Scope2排出量▲25%。",
  },
  {
    title: "業種3: Tier2金属加工工場（高圧 1,500kW、年間 1,100万kWh）",
    before:
      "Before: みよし市のTier2金属プレス・切削加工C社（従業員120名）。完成車向けプレス部品＋切削部品。中部電力ミライズの業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+22%の電気代増加。年間電気代 約3.0億円。",
    after:
      "After: 中部系新電力に固定2年・燃調上限ありで切替／プレスのサーボ化＋油圧→電動化／工場LED化（県補助＋SII併用、投資3,500万円）／コンプレッサーの集中管理＋エア漏れ対策／屋根太陽光500kW自家消費。",
    result:
      "Result: 年間電気代 約3.0億円 → 約2.4億円（▲約20%、▲6,000万円・目安）／契約電力 1,500→1,350kW／投資回収 補助金後 2.0年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "塗装ライン電力負荷の集中",
    detail:
      "完成車工場の塗装ラインは前処理・電着・中塗・上塗・乾燥が直列に並び、温度・湿度管理＋乾燥炉電力＋クリーン度維持の空調が連続稼働。1台当たり消費電力では塗装が30〜40%を占めるとされ、塗装ラインのkW削減が工場全体の電力単価最適化の主戦場です（出典: トヨタ環境報告書／自動車工業会データ）。",
  },
  {
    label: "プレスラインの瞬間ピーク負荷",
    detail:
      "大型サーボプレス（数千kW級）の稼働時瞬間電力が契約電力（kW）を押し上げ、デマンド料金の主要因に。プレス機の稼働タイミング分散・サーボモーター回生制動・蓄電池併用での平準化が、契約kW削減＝基本料金削減に直結します。",
  },
  {
    label: "中部電力エリアの燃調感応度",
    detail:
      "中部電力エリアはLNG火力依存度が高く、為替（円安）とLNGスポット価格（JKM）に強く感応。2022〜2023年の高騰局面では燃調が前年比＋6〜8円/kWhに拡大し、年間1億kWh級工場で年8〜10億円規模のコスト変動を経験。今後も燃調を見据えた固定vs市場連動の選択が経営判断の中心になります。",
  },
  {
    label: "EV化に伴う設備投資の電力需要",
    detail:
      "BEV化に伴いエンジン関連工程は縮小する一方、駆動用バッテリー組立・モーター巻線・パワー半導体製造の新規ラインが立ち上がり、新増設工場の電力需要が増加。トヨタ系列全体では当面の県内総需要は維持〜微増基調が想定され、契約電力の最適化は引き続き経営課題です。",
  },
  {
    label: "再エネ賦課金とTier1のCN要請",
    detail:
      "再エネ賦課金が年々上昇するなか、完成車メーカーからTier1・Tier2へのScope3 GHG排出削減要請が強まり、サプライヤー側でも再エネ電源調達（PPA・非化石証書）が事実上必須化。電気代単価そのものに加え、再エネ調達コストも経営計画に織り込む必要があります。",
  },
];

const subsidies = [
  {
    name: "あいち産業労働振興プラン関連補助（愛知県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2025年度時点",
    note: "県独自の産業振興政策に基づく補助メニュー。自動車部品中小製造業の高効率設備更新・コンプレッサー・LED・断熱・BEMS等が対象。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・冷凍・LED・コンプレッサー・サーボプレス・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "愛知県内の完成車・Tier1・Tier2の更新案件で採択実績多数。塗装ライン省エネ・コンプレッサー高効率化・全館LED化などで活用しやすい主力補助。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "豊田・田原など屋根面積の大きい完成車工場・大型Tier1で活用が拡大。トヨタCN工場宣言とリンクして、サプライチェーン全体でのPPA共同調達も検討段階。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "EV関連設備投資・燃料転換・PPA関連設備の取得で活用可能。所管: 経産省・国税庁。中部経産局に事前相談窓口があり、工場新増設時に組合せ検討するのが定石。",
  },
  {
    name: "中部経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "Tier1・Tier2の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "EV化に伴うサプライチェーン再編・Tier2の高度化を後押しする中部経産局独自メニュー。年度ごとの公募タイミング把握が重要。",
  },
];

const industryProfile = [
  {
    label: "豊田市 — トヨタ完成車・本社機能の集積",
    detail:
      "トヨタ自動車本社・本社工場・元町・上郷・高岡・堤・下山・三好・衣浦の各工場が集中。完成車組立＋エンジン＋トランスミッション＋一部部品まで内製領域が広く、特別高圧契約の集中度は世界トップクラス。年間総電力需要は数十億kWh規模に達するとされます。",
  },
  {
    label: "刈谷市・安城市 — Tier1中枢",
    detail:
      "デンソー本社・刈谷工場・安城工場、アイシン本社、豊田自動織機、ジェイテクト、トヨタ車体（吉原・富士松）が立地するTier1中枢エリア。電子部品・駆動系・素材・組立まで多様な工程が稼働し、高圧・特別高圧の大型需要家が集中しています。",
  },
  {
    label: "田原市 — レクサス専門工場",
    detail:
      "トヨタ田原工場はレクサスRX・LX・GX等の主力生産拠点。広大な敷地と屋根面積、海岸立地（風況有利）から、オンサイトPPA・大規模太陽光・将来的な風力ハイブリッド調達の適性が高いエリアです。",
  },
  {
    label: "みよし市・西尾市・岡崎市 — Tier2サプライヤー集積",
    detail:
      "Tier2の金属加工・樹脂成形・電子部品・治工具メーカーが多数立地。中小規模の高圧契約が中心で、設備更新と新電力切替を組み合わせた電気代見直し余地が大きいエリアです。",
  },
  {
    label: "知多半島・名古屋港臨海部 — 鋳造・素材・物流連動",
    detail:
      "知多製鋼所（日本製鉄系）等の素材供給、名古屋港の輸出物流（完成車・部品輸出のハブ）と連動する事業所が立地。素材から完成車までのサプライチェーンが県内で完結する稀有なエコシステムを形成しています。",
  },
];

const switchingReality = [
  {
    label: "中部エリアの新電力浸透度",
    detail:
      "中部電力エリアの新電力比率は東京・関西よりやや低め（概ね20〜30%、出典: 資源エネ庁電力ガス取引監視等委員会）。ただし豊田・刈谷の特別高圧大型案件では競争入札が標準化し、新電力落札比率は全国平均を上回ります。中小Tier2は中部電力ミライズ継続が依然多数派ですが切替余地は大きい。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で市場連動採用の自動車関連工場の多くが固定回帰。長期固定3〜5年契約が主流化しており、特別高圧では非化石証書付き／再エネトラッキング付きの組合せメニューが標準的なオプションに。",
  },
  {
    label: "中部電力ミライズ継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制（東海地震BCP）・大口需要家向けエネルギーマネジメント支援・コージェネ運用支援。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。特別高圧需要家では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（愛知×自動車固有）",
    detail:
      "①完成車・Tier1の供給実績、②非化石証書／再エネトラッキング付メニュー（CN対応）、③長期固定（3〜5年）の単価安定性、④燃調上限・連動条件、⑤BCP対応（東海地震被害想定エリア）の5点が重要です。",
  },
  {
    label: "PPA・オフサイト調達の主流化",
    detail:
      "トヨタCN工場宣言と歩調を合わせ、屋根オンサイトPPA（豊田・田原）／オフサイトPPA（県内・三重・岐阜・長野の太陽光案件）／コーポレートPPAが急拡大。RE100調達コストは従来単価＋1〜3円/kWh程度のプレミアムで推移しています。",
  },
];

const energySaving = [
  {
    label: "塗装ライン低温硬化型塗料＋廃熱回収",
    detail:
      "塗装ラインの乾燥炉温度を従来の140〜160℃から100〜120℃に低温化することで電力▲20〜30%が見込めます。さらに乾燥炉排熱を前処理・電着の温水加熱に再利用することで全体エネルギーを最適化。SII補助＋県補助の併用で投資回収 3〜4年が目安。",
  },
  {
    label: "プレスのサーボ化＋蓄電池併用ピークカット",
    detail:
      "従来油圧プレスをサーボプレスに更新することで電力消費▲15〜25%、加えて回生電力を蓄電池に貯めることでピーク需要▲10〜15%。契約電力（kW）削減で基本料金が直接下がり、投資回収 4〜5年（補助金活用で2〜3年）。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%。Tier1・Tier2いずれでも投資効率が高く、SII補助1/2でほぼ確実に回収可能（1.5〜2.5年）。",
  },
  {
    label: "屋根オンサイトPPA＋自家消費",
    detail:
      "豊田・田原・刈谷の大型完成車・Tier1工場では屋根面積1〜5万m²以上が確保可能で、屋根太陽光1〜25MW級の自家消費PPAが現実的な打ち手。初期投資ゼロでRE100算入＋電気代単価下げが両立。",
  },
  {
    label: "BEMS・需給予測AI＋デマンドレスポンス",
    detail:
      "BEMSで需要見える化＋AIによる翌日需給予測＋DR市場参加で、ピーク需要▲10〜15%＋DR報酬収入を獲得可能。中部電力ミライズ・中部電力PGの調整力公募・容量市場経由でも収益化が可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "塗装ライン乾燥炉のkW・年間使用kWhを工程別に把握しているか",
  "プレスラインの瞬間ピーク電力を蓄電池等で平準化できる余地はあるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中部電力ミライズの2023年改定後単価で再見積を取得したか",
  "全国系・中部系・再エネ特化型の新電力10社以上から相見積を取得したか",
  "完成車メーカー（トヨタ等）からのScope3/CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "オフサイトPPA・コーポレートPPAの調達可能性をデベロッパーに照会したか",
  "あいち産業労働振興・SII・経産局補助の併用可否を設備別に整理したか",
  "EV化に伴う将来工程変化（バッテリー組立等）の電力需要見込を経営計画に織り込んだか",
  "東海地震BCP（停電復旧優先度・自家発・蓄電池）の体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "愛知県の自動車工場は中部電力エリア固有の単価リスクが大きいですか？",
    answer:
      "中部電力エリアはLNG火力依存度が高く、為替（円安）とLNGスポット価格（JKM）に強く感応するため、燃料費調整額の変動幅が大きい構造です。2022〜2023年高騰時には燃調が＋6〜8円/kWhに拡大した局面もあり、年間1億kWh級の特別高圧需要家では年間数億円規模の単価変動を経験しました。固定単価＋燃調上限ありのプランへの切替、または非化石証書付き再エネメニューでヘッジするのが基本戦略です（出典: 中部電力ミライズ単価実績／エネ庁エネルギー白書）。",
  },
  {
    question: "完成車工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的に塗装ライン（前処理・電着・中塗・上塗・乾燥）が全エネルギーの30〜40%を占めるとされます。次いでプレス（大型サーボプレスの瞬間負荷）、ボディ溶接ロボット、組立ラインの空調・照明・搬送が続きます。塗装の低温硬化化・乾燥炉廃熱回収、プレスのサーボ化＋蓄電池併用が電力単価最適化の主戦場です（出典: トヨタ環境報告書／自動車工業会データ）。",
  },
  {
    question: "Tier1・Tier2のサプライヤーは完成車メーカーからどんなCN要請を受けていますか？",
    answer:
      "トヨタは2035年までに全工場CN化、サプライヤーにもScope3 GHG排出削減を要請しています。具体的には、再エネ電源調達（PPA・非化石証書）、CO2原単位の継続改善、CN投資計画の開示などが求められ、対応状況が将来の取引選定にも影響します。中小Tier2でも県補助＋SII補助＋オンサイトPPAの組合せで対応可能です。",
  },
  {
    question: "豊田・田原の大型工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "現実的です。完成車・大型Tier1工場は屋根面積1〜5万m²以上を確保できるケースが多く、1〜25MW級の屋根太陽光PPAが導入可能です。初期投資ゼロ・PPA事業者が設備所有・自社は20年間の電力購入契約という形が標準。RE100算入＋電気代単価下げが両立でき、トヨタCN工場宣言の実現手段としても採用例が増えています。",
  },
  {
    question: "EV化で愛知県の自動車関連電力需要は減りますか？",
    answer:
      "短中期では減らない見通しです。BEV/HEV/FCEV併存の全方位戦略下で、既存エンジン関連工程は当面維持、加えてバッテリー組立・モーター巻線・パワー半導体製造の新規ラインが立ち上がるため、県内総電力需要はむしろ維持〜微増基調が想定されます。長期（2040年代以降）は工程構成次第ですが、契約電力の見直しは継続的な経営課題です。",
  },
  {
    question: "刈谷・安城のTier1工場でどの新電力が実績多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と入札特化型新電力が主要プレイヤーです。固定単価3〜5年契約＋非化石証書付メニューが標準化しており、再エネトラッキング付きの追加性を持つメニューも引合いが増えています。特定企業の落札実績は入札情報公開の範囲で各社IRや業界紙で確認可能です。",
  },
  {
    question: "あいち産業労働振興プラン関連補助は自動車部品工場でも使えますか？",
    answer:
      "使える可能性が高いです。県独自の産業振興政策に基づき、中小・中堅製造業の省エネ設備・脱炭素設備導入を後押しする補助メニューが整備されています。コンプレッサー・LED・断熱・BEMSなど対象設備は幅広く、SII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は愛知県産業労働部・あいち産業振興機構の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "東海地震BCPは新電力切替後も継続できますか？",
    answer:
      "物理的な復旧作業は中部電力パワーグリッド（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発との連系条件を必ず確認してください。トヨタ系列ではBCP訓練・自家発連系試験を定期実施する慣行があります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中部電力ミライズ 法人向け料金プラン", url: "https://miraiz.chuden.co.jp/" },
  { name: "中部電力パワーグリッド 供給計画", url: "https://powergrid.chuden.co.jp/" },
  { name: "トヨタ自動車 統合報告書／環境報告書", url: "https://global.toyota/jp/sustainability/report/" },
  { name: "愛知県 産業労働部 産業振興政策", url: "https://www.pref.aichi.jp/sangyoseisaku/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function AichiAutomotiveElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/aichi-automotive-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "愛知県の自動車・輸送機器工場の電気料金", url: "https://simulator.eic-jp.org/aichi-automotive-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">愛知県の自動車・輸送機器工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            愛知県の自動車・輸送機器工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            愛知県はトヨタ自動車本社を中心に、豊田・刈谷・田原・みよし・安城・西尾・岡崎までを含む世界トップクラスの自動車産業集積地です。本ページでは「愛知県 × 自動車・輸送機器製造業」というクロス領域に絞り、中部電力エリア固有の単価事情と、プレス／塗装／溶接／組立ラインの電力プロファイル、特別高圧の競争入札、補助金活用、EV化に伴う需要構造変化までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>愛知県の自動車産業集積（豊田・刈谷・田原・みよし）の電力プロファイル</li>
              <li>完成車／Tier1／Tier2のBefore/After削減事例3件</li>
              <li>中部電力エリアの単価水準と燃調感応度</li>
              <li>トヨタCN工場宣言を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>愛知×自動車に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「愛知 × 自動車」のクロス領域に特化したガイドです。愛知県全体の文脈は{" "}
            <Link href="/aichi-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              愛知県の法人電気料金完全ガイド
            </Link>
            、業種一般としての自動車部品業全体は{" "}
            <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              自動車部品業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              愛知県の自動車産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛知県は出荷額・事業所数・従業員数のいずれでも国内最大の自動車産業集積地です。完成車・Tier1・Tier2・素材・物流・試験までが半径30km圏内に完結する世界的にも稀有な構造で、特別高圧契約の集中度が極めて高いエリアとなっています。
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
              愛知県全体の文脈は{" "}
              <Link href="/aichi-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                愛知県の法人電気料金ガイド
              </Link>
              、中部電力エリア全体は{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中部電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                自動車部品業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中部電力エリアの主要電力会社・新電力（愛知×自動車での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛知県内の自動車関連工場は、中部電力ミライズに加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給。完成車・大型Tier1では競争入札が標準化し、Tier2の中小工場では切替余地が依然大きい状態です。
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
              中部電力エリアの料金水準と自動車工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度、再エネ賦課金の累積負担を、自動車工場の代表的な契約タイプ別に整理します。中部電力エリア固有のLNG感応度を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 完成車／Tier1／Tier2（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛知県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・トヨタ環境報告書等から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              愛知×自動車固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛知の自動車工場の電気代上昇は、塗装ライン集中負荷・プレス瞬間ピーク・中部エリアの燃調感応度・EV化に伴う設備投資・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 愛知県・国・中部経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              あいち産業労働振興プラン関連補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、中部経産局のサプライチェーン強靱化補助の5層を組合せ、Tier1・Tier2の更新投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（豊田／刈谷／田原／みよし）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛知の自動車サプライチェーンは、豊田の完成車本社機能を中心に、刈谷・安城のTier1中枢、田原のレクサス専門工場、みよし・西尾・岡崎のTier2集積、知多・名古屋港の素材・物流連動という5層構造です。
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
              電力会社切替の実情 — 中部電力ミライズと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              完成車・大型Tier1では競争入札が標準化、Tier2では切替余地大、トヨタCN宣言と連動した再エネ調達（PPA・非化石証書）の主流化が共通トレンド。市場連動からの固定回帰も顕著です。
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
              愛知×自動車の省エネ・自家消費事例（塗装ライン／プレス／コンプレッサー／屋根PPA／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車工場の省エネは、塗装ライン低温硬化＋廃熱回収、プレスのサーボ化＋蓄電池、コンプレッサー高効率化、屋根オンサイトPPA、BEMS＋需給予測AIの5軸が主力。完成車・Tier1・Tier2いずれでも投資回収2〜5年で実現可能なメニューが揃っています。
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
              愛知×自動車 契約見直しチェックリスト（12項目）
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
              シミュレーターで愛知×自動車の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛知の自動車工場は、中部エリアのLNG感応度・塗装ライン集中負荷・トヨタCN要請・EV化など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オンサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した17〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-28"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/aichi-business-electricity-cost", title: "愛知県の法人電気料金ガイド（地域一般）", description: "愛知県全体の文脈・中京工業地帯・名古屋港物流。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し（業種一般）", description: "Tier1/Tier2のプレス・切削・塗装・組立の業種別最適化。" },
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情", description: "中部全体の料金体系・改定動向・燃調感応度。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/hiroshima-automotive-electricity-cost", title: "広島県の自動車・造船工場の電気料金", description: "中国電力エリアのマツダ城下町・造船クロス。" },
              { href: "/mie-semiconductor-electricity-cost", title: "三重県の半導体・電子部品工場の電気料金", description: "中部電力エリアの四日市・亀山クロス。" },
              { href: "/shizuoka-manufacturing-electricity-cost", title: "静岡県の製造業の電気料金", description: "浜松輸送機器・富士製紙・楽器の集積クロス。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "Tier1・Tier2の固定回帰の判断軸。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "高騰時の経営影響を踏まえた選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "中部エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "中部エリアでも影響大の項目。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/corporate-ppa-introduction-guide", title: "コーポレートPPA導入ガイド", description: "トヨタCN対応の追加性ある再エネ調達。" },
              { href: "/onsite-rooftop-solar-ppa", title: "オンサイト屋根PPA活用", description: "豊田・田原の大型屋根面積活用例。" },
            ]}
          />

          <ContentCta
            heading="愛知の自動車工場の電気代リスクを自社条件で試算する"
            description="豊田・刈谷・田原・みよしの自動車工場固有の条件（中部電力エリア・塗装ライン・特別高圧・トヨタCN要請）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オンサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="愛知の自動車工場の電力契約見直し、専門家に相談しませんか？"
            description="完成車・Tier1・Tier2いずれも特別高圧・高圧の規模感とトヨタCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で愛知県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
