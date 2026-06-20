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
  "広島県の自動車・造船業の電気料金完全ガイド｜マツダ城下町／呉・江田島の造船と中国電力の特別高圧契約";
const pageDescription =
  "広島県の自動車・造船業に特化した法人電気代ガイド。マツダ本社・府中のサプライヤー、呉・江田島の造船、福山の鉄鋼を含む重工業集積の電力プロファイル、中国電力エリアの単価事情、プレス／塗装／溶接／大型ブロック建造の特別高圧契約最適化を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "広島県 自動車 造船 電気料金",
    "マツダ 府中 電気代",
    "呉 江田島 造船 電力",
    "中国電力 特別高圧 自動車",
    "プレス 塗装 溶接 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/hiroshima-automotive-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hiroshima-automotive-electricity-cost",
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
    label: "広島県の自動車・造船集積 — マツダ城下町と瀬戸内造船",
    detail:
      "広島県はマツダを核とする自動車産業と、呉・江田島・尾道の造船業が集積する西日本有数の重工業県です。マツダ本社・宇品工場・三次事業所を中心に、府中町（マツダ本社所在）・安芸郡を中心としたTier1・Tier2サプライヤーが県内に広がります。瀬戸内海沿岸には呉のジャパンマリンユナイテッド（JMU）、江田島・因島の造船所が立地し、福山にはJFEスチール西日本製鉄所（鉄鋼）も。自動車・造船・鉄鋼の特別高圧需要家が集中する電力多消費の産業構造です（出典: 広島県工業統計・経産省工業統計・各社統合報告書）。",
  },
  {
    label: "自動車工場の電力プロファイル — プレス／塗装／溶接／組立",
    detail:
      "マツダの完成車工場では、塗装ライン（前処理・電着・中塗・上塗・乾燥／全エネルギーの30〜40%）、プレス（大型サーボプレスの瞬間負荷）、ボディ溶接ロボット、組立ラインが電力消費の中心。マツダはSKYACTIV技術・ロータリーエンジン・電動化（MX-30 EV等）を進めており、エンジン関連工程と電動化部品工程が併存。塗装の脱炭素化が長年の課題です（出典: マツダ統合報告書／サステナビリティレポート）。",
  },
  {
    label: "造船業の電力プロファイル — 大型溶接・ブロック建造・艤装",
    detail:
      "呉・江田島・因島の造船所では、鋼板の切断（プラズマ・レーザー）、大型溶接（自動溶接機・サブマージアーク溶接）、ブロック建造、塗装、艤装（電装・配管）が電力消費の中心。特に大型溶接設備の電力負荷が大きく、ドック・クレーン・コンプレッサーも含めた特別高圧契約が一般的。造船は受注変動が大きく、操業度に応じた電力需要変動が特徴です。",
  },
  {
    label: "電動化シフトとマツダの戦略",
    detail:
      "マツダはマルチソリューション戦略（内燃機関の高効率化＋電動化）を掲げ、ロータリーエンジンを発電機として使うレンジエクステンダーEV等の独自技術を展開。完成車工場では既存エンジン関連工程の維持と、駆動用バッテリー・モーター関連の新規工程が併存。県内総電力需要は当面維持〜微増基調が想定され、契約電力の最適化は継続的な経営課題です。",
  },
  {
    label: "中国電力エリアと広島重工業の相互依存",
    detail:
      "中国電力エリアの電源構成は、島根原子力発電所（2号機が再稼働へ進行）、火力（三隅・水島・新小野田等の石炭・LNG）、水力で構成。エリア需要に占める自動車・造船・鉄鋼の特別高圧の比重が大きく、中国電力供給計画にも反映されています。島根原発の再稼働進展は燃調感応度の低下要因として注目されています（出典: 中国電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "中国電力（エネルギア）",
    role: "一般小売事業者（旧一電）",
    detail:
      "広島県内自動車・造船の特別高圧長期需要家を多数抱える。『高圧電力AS／BS』『特別高圧電力』が主軸メニュー。島根原発の再稼働進展により燃調感応度の低下が期待される一方、現状は火力依存度が一定程度あり。マツダ・JMU等の大口需要家との長期的な契約関係が継続しています。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・サミットエナジー・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "広島県内の自動車Tier1・Tier2、造船サプライヤーの中堅特別高圧／高圧で競争入札の対抗馬。固定単価3〜5年契約＋燃調連動メニューが標準。マツダのCN要請（2035年カーボンニュートラル目標）を受け、Tier1・Tier2でも非化石証書付き・再エネトラッキング付きメニューの引合いが増加しています。",
  },
  {
    name: "中国電力グループ・地域新電力",
    role: "地域系新電力",
    detail:
      "中国電力グループの法人向け提案や、広島ガス系の電気事業も展開。コージェネ併設工場やガス併用工程のある自動車・造船関連工場での総合最適化提案が強み。",
  },
  {
    name: "再エネ特化型・コーポレートPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "マツダが2035年グローバル工場CN目標を掲げ、Tier1・Tier2にもScope3対応を要請するなか、追加性ある再エネ調達ニーズが拡大。屋根オンサイトPPA（完成車・大型サプライヤー工場）、オフサイトPPA（県内・中国地方の太陽光・風力）、コーポレートPPAの引合いが増加しています。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年JEPX高騰局面では中国エリアでも一部新電力が撤退・新規受付停止。現在は供給枠が徐々に回復していますが、自動車・造船の大型案件では供給可能kWh枠の確保が課題で、入札の早期着手が重要です。",
  },
  {
    name: "JEPX中国エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX中国エリアスポット価格は関西・四国と概ね連動。島根原発の再稼働が進めば、火力依存低下により価格安定化が期待されます。自動車・造船は操業時間帯の負荷が中心で、固定契約＋燃調上限ありが主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "中国電力エリアの特別高圧 — 自動車・造船の単価水準",
    detail:
      "完成車工場・大型造船所・大型Tier1（特別高圧2,000kW超、年間数千万〜億kWh級）の電力量料金は標準メニューで概ね16〜19円/kWh+調整項目。燃料費調整額（2024〜2025年で+2.0〜+4.0円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は22〜27円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安です。",
  },
  {
    label: "高圧電力 — Tier1・Tier2部品/造船サプライヤーの単価",
    detail:
      "府中・安芸郡・呉のTier1・Tier2部品工場、造船サプライヤー（500kW〜2,000kW級）の『業務用高圧電力』は17〜21円/kWh+調整項目。実質単価は24〜29円/kWhレンジ。新電力経由なら1〜3円/kWh安いケースが多く、中堅工場でも見直し効果が大きいレンジです。",
  },
  {
    label: "島根原発再稼働と燃調感応度の変化",
    detail:
      "中国電力エリアは島根原子力発電所2号機の再稼働が進行中。原子力比率の上昇は燃料費調整額の感応度を下げる方向に働き、自動車・造船の特別高圧需要家にとっては単価安定化の好材料。現状は火力依存度が一定程度あり、燃調変動リスクへの備えとして燃調上限契約の価値が高い状況です（出典: 中国電力供給計画／エネ庁エネルギー白書）。",
  },
  {
    label: "造船業の操業度変動と契約電力",
    detail:
      "造船は受注残・建造スケジュールに応じて操業度が変動し、電力需要も変動します。建造ピーク時の大型溶接・クレーン稼働で契約電力（kW）が押し上げられるため、操業計画に応じた契約電力の見直しが基本料金最適化の重要ポイントとなります。",
  },
];

const industryImpact = [
  {
    title: "業種1: 完成車工場（特別高圧 25,000kW、年間 1.2億kWh）",
    before:
      "Before: 広島県内の完成車工場A（プレス・溶接・塗装・組立を内製、年産数十万台規模）。中国電力の特別高圧契約＋燃調連動。2023年度は燃調影響で前年比+15%の電気代増加。年間電気代 約30億円。",
    after:
      "After: 全国系新電力との競争入札で固定3年・燃調上限あり契約獲得（再エネ比率35%・トラッキング付）／塗装ラインの低温硬化型塗料導入＋廃熱回収／プレスのサーボ化＋蓄電池併用／工場屋根PPA（10MW相当、自家消費＋RE100算入）／BEMS・需給予測AI導入。",
    result:
      "Result: 年間電気代 約30億円 → 約24億円（▲約20%、▲6億円・目安）／契約電力 25,000→22,500kW／RE100比率 約30%達成／マツダCN工場ロードマップ準拠。",
  },
  {
    title: "業種2: 造船所（特別高圧 8,000kW、年間 4,000万kWh）",
    before:
      "Before: 呉・江田島エリアの造船所B（商船・艦艇建造、大型ドック・ブロック建造工場）。鋼板切断・大型溶接・塗装・艤装が稼働、建造ピーク時に電力需要増。中国電力の特別高圧電力＋燃調連動。年間電気代 約10億円。",
    after:
      "After: 入札特化型新電力に固定3年・燃調上限あり契約で切替／自動溶接機の高効率インバータ化／コンプレッサー集中管理＋エア漏れ対策／ドック照明・工場LED化（県補助＋SII併用、投資2億円）／操業計画連動の契約電力最適化／屋根太陽光2MW自家消費。",
    result:
      "Result: 年間電気代 約10億円 → 約8億円（▲約20%、▲2億円・目安）／契約電力 8,000→7,200kW／投資回収 補助金後 3年前後（目安）／操業度連動の基本料金適正化。",
  },
  {
    title: "業種3: 自動車Tier2部品工場（高圧 1,500kW、年間 1,100万kWh）",
    before:
      "Before: 府中・安芸郡エリアの自動車Tier2金属プレス・切削加工C社（マツダ系サプライヤー）。サーボプレス・NC切削・熱処理が稼働。中国電力の業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+18%の電気代増加。年間電気代 約2.8億円。",
    after:
      "After: 全国系新電力に固定2年・燃調上限ありで切替／プレスのサーボ化＋蓄電池併用ピークシフト／工場LED化（県補助＋SII併用、投資3,500万円）／コンプレッサー高効率化＋集中管理／屋根太陽光500kW自家消費。",
    result:
      "Result: 年間電気代 約2.8億円 → 約2.25億円（▲約20%、▲5,500万円・目安）／契約電力 1,500→1,350kW／投資回収 補助金後 2年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "塗装ライン電力負荷の集中（自動車）",
    detail:
      "完成車工場の塗装ラインは前処理・電着・中塗・上塗・乾燥が直列に並び、温度湿度管理＋乾燥炉電力＋クリーン度維持の空調が連続稼働。1台当たり消費電力では塗装が30〜40%を占めるとされ、塗装ラインのkW削減が工場全体の電力単価最適化の主戦場です（出典: マツダ環境報告書／自動車工業会データ）。",
  },
  {
    label: "大型溶接の電力負荷（造船）",
    detail:
      "造船のサブマージアーク溶接・自動溶接機・大型クレーン・コンプレッサーは大きな電力負荷。建造ピーク時の溶接設備同時稼働が契約電力を押し上げ、基本料金の主要因に。操業度変動も大きいため、操業計画連動の契約電力管理が重要です。",
  },
  {
    label: "中国エリアの燃調感応度と島根原発",
    detail:
      "現状は火力依存度が一定程度あり燃調変動の影響を受けますが、島根原発2号機の再稼働進展により燃調感応度の低下が期待されます。再稼働時期・稼働率により単価が変動するため、燃調上限契約による単価安定化が経営判断の中心となります。",
  },
  {
    label: "電動化に伴う設備投資の電力需要（自動車）",
    detail:
      "マツダのマルチソリューション戦略下で、エンジン関連工程の維持と電動化部品（バッテリー・モーター）の新規工程が併存。新増設工場の電力需要が増加し、県内総需要は維持〜微増基調が想定され、契約電力の最適化は継続的な経営課題です。",
  },
  {
    label: "再エネ賦課金とマツダのCN要請",
    detail:
      "再エネ賦課金が年々上昇するなか、マツダからTier1・Tier2へのScope3 GHG排出削減要請が強まり、サプライヤー側でも再エネ電源調達（PPA・非化石証書）が事実上必須化。電気代単価に加え、再エネ調達コストも経営計画に織り込む必要があります。",
  },
];

const subsidies = [
  {
    name: "広島県 産業・脱炭素設備導入補助",
    target: "県内中小・中堅製造業（自動車・造船関連）の省エネ・脱炭素設備",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の産業振興・脱炭素補助。自動車Tier2・造船サプライヤーの高効率設備更新・コンプレッサー・LED・BEMS等で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・コンプレッサー・サーボプレス・自動溶接機・LED・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "広島県内の完成車・造船・Tier1・Tier2の更新案件で採択実績多数。塗装ライン省エネ・溶接設備高効率化・コンプレッサー高効率化等で活用しやすい主力補助。",
  },
  {
    name: "需要家主導型再エネ・PPA・蓄電池併設関連補助",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "完成車・大型造船所・大型Tier1の屋根活用、オフサイトPPA調達で活用可能。マツダCN工場目標とリンクして、サプライチェーン全体でのPPA共同調達も検討段階。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "EV関連設備投資・燃料転換・PPA関連設備の取得で活用可能。所管: 経産省・国税庁。中国経産局に事前相談窓口があり、工場新増設時に組合せ検討するのが定石。",
  },
  {
    name: "中国経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "Tier1・Tier2の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "電動化に伴うサプライチェーン再編・Tier2の高度化を後押しする中国経産局独自メニュー。年度ごとの公募タイミング把握が重要。",
  },
];

const industryProfile = [
  {
    label: "府中町・安芸郡 — マツダ本社・完成車",
    detail:
      "府中町にマツダ本社・本社工場が立地し、宇品（広島市南区）に宇品工場。完成車組立＋エンジン＋トランスミッションまで内製領域が広く、特別高圧契約の集中度が高い。安芸郡海田町・府中町周辺にTier1サプライヤーが集積します。",
  },
  {
    label: "広島市・東広島・三次 — サプライヤー・エンジン",
    detail:
      "広島市・東広島市・三次市にマツダ系のエンジン工場・Tier1・Tier2サプライヤーが立地。プレス・鋳造・切削・組立・電子部品まで多様な工程を抱え、高圧・特別高圧の需要家が分布します。",
  },
  {
    label: "呉・江田島・因島 — 瀬戸内造船",
    detail:
      "呉市のジャパンマリンユナイテッド（JMU）呉事業所、江田島・因島の造船所が瀬戸内造船の中核。商船・艦艇・大型船の建造で、大型溶接・ブロック建造・ドックの電力負荷が大きい特別高圧需要家。",
  },
  {
    label: "福山 — 鉄鋼・素材（自動車・造船向け）",
    detail:
      "福山市のJFEスチール西日本製鉄所（福山地区）は高炉一貫製鉄所で、自動車用鋼板・造船用厚板を供給。鉄鋼は超大型特別高圧需要家で、自動車・造船のサプライチェーンを素材面から支えます。",
  },
  {
    label: "中国電力・系統・島根原発",
    detail:
      "中国電力の火力（三隅・水島・新小野田等）と水力が主軸で、島根原発2号機が再稼働へ進行中。瀬戸内沿岸の重工業地帯に特高変電所が分散立地し、自動車・造船・鉄鋼の特別高圧需要に対応しています。",
  },
];

const switchingReality = [
  {
    label: "中国エリアの新電力浸透度（自動車・造船）",
    detail:
      "中国電力エリアの新電力比率は全国平均比やや低め。完成車・大型造船・大型Tier1では競争入札による新電力選定が進む一方、超大型需要家は中国電力との長期的契約関係が継続。Tier2・造船サプライヤーでは切替シフトが進行中です。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で自動車・造船関連工場の多くが市場連動から固定回帰。長期固定3〜5年契約が主流化しており、マツダCN対応で非化石証書付き／再エネトラッキング付きの組合せメニューが標準的なオプションに。",
  },
  {
    label: "中国電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・島根原発再稼働による燃調感応度低下期待・大口需要家対応・災害時復旧体制（西日本豪雨の教訓）。デメリット: 現状の火力依存・新電力比1〜3円/kWh単価が高め。特別高圧需要家では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（広島×自動車・造船固有）",
    detail:
      "①完成車・造船・大型Tier1の供給実績、②非化石証書／再エネトラッキング付メニュー（マツダCN対応）、③長期固定3〜5年の単価安定性、④燃調上限・連動条件、⑤造船の操業度変動対応、⑥BCP対応（西日本豪雨・南海トラフ想定）の6点が重要です。",
  },
  {
    label: "PPA・オフサイト調達の主流化",
    detail:
      "マツダCN工場目標と歩調を合わせ、屋根オンサイトPPA（完成車・大型造船所）／オフサイトPPA（県内・中国地方の太陽光・風力）／コーポレートPPAが拡大。RE100調達コストは従来単価＋1〜3円/kWh程度のプレミアムで推移しています。",
  },
];

const energySaving = [
  {
    label: "塗装ライン低温硬化型塗料＋廃熱回収（自動車）",
    detail:
      "塗装ラインの乾燥炉温度を低温化することで電力▲20〜30%。乾燥炉排熱を前処理・電着の温水加熱に再利用することで全体エネルギーを最適化。SII補助＋県補助の併用で投資回収 3〜4年。",
  },
  {
    label: "自動溶接機・大型設備の高効率化（造船）",
    detail:
      "造船の自動溶接機・サブマージアーク溶接機の高効率インバータ化、大型クレーン・コンプレッサーの集中管理で電力▲10〜20%。操業度変動に応じた運転最適化との組合せで基本料金も削減。SII補助1/2で投資回収 3年前後。",
  },
  {
    label: "プレスのサーボ化＋蓄電池併用ピークカット（自動車）",
    detail:
      "従来油圧プレスをサーボプレスに更新で電力消費▲15〜25%、加えて回生電力を蓄電池に貯めることでピーク需要▲10〜15%。契約電力（kW）削減で基本料金が直接下がり、投資回収 補助金活用で2〜3年。",
  },
  {
    label: "屋根オンサイトPPA＋自家消費",
    detail:
      "完成車・大型造船所・大型Tier1工場では屋根面積1〜5万m²以上が確保可能で、屋根太陽光1〜10MW級の自家消費PPAが現実的な打ち手。初期投資ゼロでRE100算入＋電気代単価下げが両立。",
  },
  {
    label: "BEMS・需給予測AI＋操業度連動運転",
    detail:
      "BEMSで需要見える化＋AIによる翌日需給予測＋造船の操業計画連動運転で、ピーク需要▲10〜15%＋契約電力適正化。中国電力・容量市場・DR市場経由でも収益化が可能です。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績（造船は建造ピーク含む）に対して過剰でないか",
  "塗装ライン乾燥炉（自動車）・大型溶接設備（造船）のkW・年間使用kWhを工程別に把握しているか",
  "プレス瞬間ピーク・溶接同時稼働を蓄電池等で平準化できる余地はあるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中国電力の最新単価・島根原発再稼働の影響を踏まえて再見積を取得したか",
  "全国系・中国系・再エネ特化型の新電力10社以上から相見積を取得したか",
  "完成車メーカー（マツダ等）からのScope3/CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "造船の操業度変動に応じた契約電力の見直しサイクルを設定しているか",
  "広島県補助・SII・中国経産局補助・GX税制の併用可否を設備別に整理したか",
  "電動化に伴う将来工程変化の電力需要見込を経営計画に織り込んだか",
  "BCP（西日本豪雨・南海トラフ想定）の停電復旧・自家発・蓄電池体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "広島県の自動車・造船は中国電力エリア固有の単価リスクが大きいですか？",
    answer:
      "現状は火力依存度が一定程度あり燃調変動の影響を受けますが、島根原子力発電所2号機の再稼働進展により燃料費調整額の感応度低下が期待されます。再稼働時期・稼働率により単価が変動するため、燃調上限契約による単価安定化が経営判断の中心。新電力との競争入札・固定契約＋非化石証書付きメニューでヘッジするのが基本戦略です（出典: 中国電力供給計画／エネ庁エネルギー白書）。",
  },
  {
    question: "造船業の電力消費はどんな特徴がありますか？",
    answer:
      "造船の電力消費の中心は、鋼板切断（プラズマ・レーザー）、大型溶接（サブマージアーク溶接・自動溶接機）、ブロック建造、塗装、艤装（電装・配管）、ドック・クレーン・コンプレッサーです。特に大型溶接設備の電力負荷が大きく、建造ピーク時の同時稼働が契約電力を押し上げます。受注残・建造スケジュールに応じて操業度が変動するため、操業計画連動の契約電力管理が基本料金最適化の重要ポイントです。",
  },
  {
    question: "マツダのカーボンニュートラル要請にサプライヤーはどう対応すべきですか？",
    answer:
      "マツダは2035年グローバル工場CN目標を掲げ、サプライヤーにもScope3 GHG排出削減を要請しています。具体的には再エネ電源調達（PPA・非化石証書）、CO2原単位の継続改善、CN投資計画の開示などが求められます。中小Tier2でも県補助＋SII補助＋オンサイトPPAの組合せで対応可能で、対応状況が将来の取引選定にも影響します。",
  },
  {
    question: "島根原発の再稼働は広島の自動車・造船の電気代にどう影響しますか？",
    answer:
      "島根原子力発電所2号機の再稼働が進むと、中国電力エリアの原子力比率が上昇し、火力依存度が下がります。これは燃料費調整額の感応度を下げる方向に働き、燃料価格変動による単価の振れが小さくなることが期待されます。自動車・造船の特別高圧需要家にとっては単価安定化の好材料ですが、再稼働時期・稼働率は変動要素のため、当面は燃調上限契約での備えが重要です（出典: 中国電力供給計画）。",
  },
  {
    question: "完成車工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的に塗装ライン（前処理・電着・中塗・上塗・乾燥）が全エネルギーの30〜40%を占めるとされます。次いでプレス（大型サーボプレスの瞬間負荷）、ボディ溶接ロボット、組立ラインの空調・照明・搬送が続きます。塗装の低温硬化化・乾燥炉廃熱回収、プレスのサーボ化＋蓄電池併用が電力単価最適化の主戦場です（出典: マツダ環境報告書／自動車工業会データ）。",
  },
  {
    question: "造船の操業度変動に強い電力契約は？",
    answer:
      "受注残・建造スケジュールに応じた契約電力（kW）の定期的な見直しが基本です。建造ピーク時の最大デマンドに合わせた契約は閑散期に過剰となり基本料金の無駄になるため、操業計画連動の契約電力管理が重要。固定単価＋燃調上限ありで電力量料金を安定化させつつ、契約電力は操業度に応じて調整するのが定石です。",
  },
  {
    question: "広島県の自動車・造船向け補助金は何が活用できますか？",
    answer:
      "広島県の産業・脱炭素設備導入補助、国のSII省エネ補助、需要家主導型再エネ・PPA補助、GX・CN投資促進税制、中国経済産業局のサプライチェーン強靱化・脱炭素補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要。最新公募状況は広島県商工労働局・SII・中国経産局の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "西日本豪雨・南海トラフのBCPは自動車・造船にどう影響しますか？",
    answer:
      "広島県は2018年西日本豪雨で物流・サプライチェーンに大きな被害を経験し、また南海トラフ巨大地震の被害想定エリアでもあります。自動車・造船は自家発電・燃料備蓄・系統復旧優先度・代替拠点連携を重視します。物理的な復旧作業は中国電力ネットワーク（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・補償・自家発切替支援は小売事業者ごとに体制が異なるため、契約時に必ず確認してください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中国電力 法人向け料金プラン", url: "https://www.energia.co.jp/" },
  { name: "中国電力ネットワーク 供給計画", url: "https://www.energia.co.jp/nw/" },
  { name: "マツダ 統合報告書／サステナビリティレポート", url: "https://www.mazda.com/ja/sustainability/" },
  { name: "広島県 商工労働局 産業政策", url: "https://www.pref.hiroshima.lg.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function HiroshimaAutomotiveElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hiroshima-automotive-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "広島県の自動車・造船業の電気料金", url: "https://simulator.eic-jp.org/hiroshima-automotive-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">広島県の自動車・造船業の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            広島県の自動車・造船業の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            広島県はマツダを核とする自動車産業と、呉・江田島の造船業が集積する西日本有数の重工業県です。本ページでは「広島県 × 自動車・造船業」というクロス領域に絞り、中国電力エリア固有の単価事情（島根原発再稼働の影響含む）と、塗装／プレス／大型溶接の電力プロファイル、マツダCN対応、特別高圧契約最適化までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>マツダ城下町・呉江田島造船・福山鉄鋼の集積と電力プロファイル</li>
              <li>完成車／造船所／自動車Tier2のBefore/After削減事例</li>
              <li>中国電力エリアの単価水準と島根原発再稼働による燃調感応度の変化</li>
              <li>マツダCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>広島×自動車・造船に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「広島 × 自動車・造船」のクロス領域に特化したガイドです。広島県全体の文脈は{" "}
            <Link href="/hiroshima-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              広島県の法人電気料金完全ガイド
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
              広島県の自動車・造船集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県はマツダを核とする自動車産業と、呉・江田島・尾道の造船業が集積する西日本有数の重工業県です。福山の鉄鋼も含め、自動車・造船・鉄鋼の特別高圧需要家が集中する電力多消費の産業構造が業種特性の中心です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              広島県全体の文脈は{" "}
              <Link href="/hiroshima-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                広島県の法人電気料金ガイド
              </Link>
              、中国電力エリア全体は{" "}
              <Link href="/region-chugoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中国電力エリア事情
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
              中国電力エリアの主要電力会社・新電力（広島×自動車・造船での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県内の自動車・造船は、中国電力に加えて全国系新電力・中国系・再エネ特化型・PPA事業者と多様なプレイヤーが供給。完成車・大型造船では競争入札が進む一方、超大型需要家は長期契約関係が継続しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              中国電力エリアの料金水準と自動車・造船への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、島根原発再稼働による燃調感応度の変化、造船の操業度変動と契約電力を、代表的な契約タイプ別に整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              規模別事例3件 — 完成車／造船所／自動車Tier2（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・マツダ環境報告書等から再構成した代表シナリオで、数値は目安レンジです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/shipbuilding-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">造船業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広島×自動車・造船固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島の自動車・造船の電気代上昇は、塗装ライン集中負荷（自動車）・大型溶接負荷（造船）・中国エリアの燃調感応度と島根原発・電動化の設備投資・マツダCN要請の5要因が複合的に作用します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              補助金・優遇制度 — 広島県・国・中国経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県の産業・脱炭素設備補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、中国経産局のサプライチェーン強靱化補助の5層を組合せ、自動車・造船の更新投資の回収を1〜2年短縮するのが定石です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              主要拠点／集積地の電力プロファイル（府中・宇品／広島東広島三次／呉江田島／福山）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島の重工業は、府中・宇品のマツダ完成車、広島市・東広島・三次のサプライヤー・エンジン、呉・江田島・因島の瀬戸内造船、福山の鉄鋼素材、中国電力・島根原発という構造です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              電力会社切替の実情 — 中国電力と新電力の比較（自動車・造船版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              完成車・大型造船では競争入札が進行中、Tier2・造船サプライヤーでは切替余地大、市場連動からの固定回帰、島根原発再稼働の燃調感応度低下期待、マツダCN対応の再エネ調達が共通トレンドです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              広島×自動車・造船の省エネ・自家消費事例（塗装／溶接／プレス／屋根PPA／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車・造船の省エネは、塗装ライン低温硬化＋廃熱回収（自動車）、自動溶接機・大型設備高効率化（造船）、プレスのサーボ化＋蓄電池、屋根オンサイトPPA、BEMS＋操業度連動運転の5軸が主力。完成車・造船・Tier2いずれでも投資回収2〜4年で実現可能です。
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
              広島×自動車・造船 契約見直しチェックリスト（12項目）
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
              シミュレーターで広島×自動車・造船の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島の自動車・造船は、塗装/溶接の集中負荷・中国エリア燃調・造船操業度変動・マツダCN要請など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・設備更新・屋根PPAのメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した20%前後の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/hiroshima-business-electricity-cost", title: "広島県の法人電気料金ガイド（地域一般）", description: "広島県全体の文脈・中国電力エリア・マツダ/造船/鉄鋼。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し（業種一般）", description: "Tier1/Tier2のプレス・切削・塗装・組立の最適化。" },
              { href: "/shipbuilding-electricity-cost-review", title: "造船業の電気料金見直し（業種一般）", description: "溶接・ブロック建造・艤装・ドックの業種別最適化。" },
              { href: "/region-chugoku-business-electricity", title: "中国電力エリアの法人電気代事情", description: "中国全体の料金体系・島根原発・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "中部電力エリアのトヨタ系完成車クロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "自動車・造船に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "高騰時の経営影響を踏まえた選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "中国エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "島根原発再稼働の感応度への影響。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "マツダCN対応の追加性ある再エネ調達。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトvsオフサイトPPA", description: "完成車・造船の屋根活用と外部調達の比較。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="広島の自動車・造船の電気代リスクを自社条件で試算する"
            description="マツダ完成車・呉江田島の造船・府中のTier2など広島の重工業固有の条件（中国電力エリア・島根原発・塗装/溶接・マツダCN）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・設備更新・屋根PPAのROIもあわせて確認できます。"
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
            heading="広島の自動車・造船の電力契約見直し、専門家に相談しませんか？"
            description="完成車・造船所・Tier2いずれも特別高圧の規模感とマツダCN要請・造船操業度変動が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で広島県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
