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
  "兵庫県の鉄鋼・重工業の電気料金完全ガイド｜神戸製鋼・姫路の電炉アーク／高炉と特別高圧契約最適化";
const pageDescription =
  "兵庫県の鉄鋼・重工業に特化した法人電気代ガイド。神戸製鋼・姫路の鉄鋼業、川崎重工・三菱重工神戸の重機械工業、播磨臨海工業地帯の電炉アーク・高炉プロセスの電力プロファイル、関西電力エリアの特別高圧契約最適化までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "兵庫県 鉄鋼 電気料金",
    "神戸製鋼 姫路 電気代",
    "播磨 重工業 電力",
    "関西電力 特別高圧 鉄鋼",
    "電炉アーク 高炉 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/hyogo-steel-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hyogo-steel-electricity-cost",
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
    label: "兵庫県の鉄鋼・重工業集積 — 神戸製鋼・姫路を核に",
    detail:
      "兵庫県は神戸製鋼所（神戸製鉄所・加古川製鉄所）、日本製鉄広畑（旧新日鐵住金広畑製鉄所）、川崎重工神戸工場、三菱重工神戸造船所、IHI播磨事業所など、鉄鋼・重工業の超大型事業所が立地する全国有数の重工業集積地です。出荷額ベースで鉄鋼業は兵庫県工業出荷額の約2割を占め、特別高圧の超大型需要家として関西電力エリアの電力需給に大きな影響を持ちます（出典: 兵庫県工業統計・経産省工業統計・各社統合報告書）。",
  },
  {
    label: "高炉一貫製鉄所の電力プロファイル — 神戸製鋼・日本製鉄広畑",
    detail:
      "加古川製鉄所（神戸製鋼）と広畑製鉄所（日本製鉄）は高炉一貫製鉄所。コークス炉・焼結工程・高炉・転炉・連続鋳造・熱間圧延・冷間圧延・表面処理までを内製。電力消費の中心は連続鋳造・圧延機械・電気集塵機・送風機・廃ガス処理。年間使用電力は1事業所で数十億kWh規模に達する超大型需要家で、特別高圧契約と自家発電（コークス炉ガス・高炉ガス火力）が併存します（出典: 各社環境報告書・統合報告書）。",
  },
  {
    label: "電炉メーカーの電力プロファイル — 神戸製鋼線条事業など",
    detail:
      "電炉式の特殊鋼・線条製造ではアーク放電による超高圧電力負荷が特徴。1チャージあたり数万〜数十万kWhの電力を数十分間で消費する『集中負荷』が連続的に発生し、瞬間電力ピークは10MW級に達する事業所もあります。電気代単価の絶対影響額が極めて大きく、契約見直し・電力購入戦略・スクラップ価格連動の経営判断が経営の中心テーマです。",
  },
  {
    label: "重機械工業の電力プロファイル — 川崎重工・三菱重工神戸・IHI",
    detail:
      "川崎重工神戸工場（造船・鉄道車両・産業機械）、三菱重工神戸造船所（艦船・原子力機器）、IHI播磨事業所（航空機エンジン・産業機械）は、加工工程（プレス・切削・溶接・組立）＋クリーンルーム＋試験設備の組合せで、年間使用量数億kWh級の特別高圧需要家。航空機エンジン・特殊機器の品質要求から電力品質要求も高い構造です。",
  },
  {
    label: "関西電力エリアと兵庫鉄鋼の相互依存",
    detail:
      "兵庫の鉄鋼・重工業の特別高圧需要は関西電力エリア全体の電力需要の主要構成要素で、関西電力供給計画・系統運用にも反映されています。一方、鉄鋼業の自家発電（コークス炉ガス・高炉ガス火力）は地域の電力供給安定に寄与する側面もあり、相互依存関係が強い構造です（出典: 関西電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "関西電力（小売事業）",
    role: "一般小売事業者（旧一電）",
    detail:
      "兵庫県内鉄鋼・重工業の超大型特別高圧需要家を多数抱える。長期相対契約・特別高圧電力メニューが主軸。神戸製鋼・日本製鉄広畑等の年間数十億kWh級需要家との関係は長年の契約形態が継続している傾向があり、新電力との競争入札も限定的なケースが多い。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・サミットエナジー・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "兵庫県内の鉄鋼Tier2・重工業の中堅特別高圧／高圧で競争入札の対抗馬。固定単価3〜5年契約＋燃調連動メニューが標準。高炉系の超大型案件への参入はハードルが高いが、重機械・部品工場では新電力切替実績が積み上がっています。",
  },
  {
    name: "需要家自家発電・卸電力市場",
    role: "自家発／卸電力",
    detail:
      "高炉一貫製鉄所はコークス炉ガス・高炉ガスを利用した自家発電を保有。神戸製鋼神戸製鉄所では石炭火力発電所（神戸発電所）を運営し、関西電力等への電力卸売も実施。需要家サイドが供給側にも回るユニークな構造です（出典: 神戸製鋼統合報告書）。",
  },
  {
    name: "再エネ特化型・PPA事業者（みんな電力・自然電力・東京ガス系等）",
    role: "再エネ特化／PPA",
    detail:
      "鉄鋼業界全体でカーボンニュートラル化（水素還元製鉄等）の取組が加速するなか、サプライチェーン向け・部品工場向けの追加性ある再エネ調達ニーズが拡大。Tier2・Tier3部品工場ではオフサイトPPA・コーポレートPPAの導入検討が進んでいます。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年JEPX高騰局面では兵庫の中堅特別高圧需要家でも一部新電力が撤退・新規受付停止。現在は供給枠が徐々に回復していますが、鉄鋼業の年間使用量が大きい案件では供給可能kWh枠の確保が課題で、入札の早期着手（契約満了12〜18ヶ月前から）が重要です。",
  },
  {
    name: "JEPX関西エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX関西エリアスポット価格は原子力＋太陽光比率の高さから昼間時間帯は他エリアより低位で推移する傾向あり。鉄鋼業の電炉は24時間稼働中心で、市場連動の昼間恩恵を受けにくい構造。固定契約＋燃調上限ありが主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "関西電力エリアの特別高圧 — 鉄鋼業の単価水準",
    detail:
      "高炉一貫製鉄所・電炉特殊鋼工場（特別高圧2,000kW超、年間数億kWh級）の電力量料金は標準メニューで概ね15〜18円/kWh+調整項目。長期相対契約では条件交渉により標準比1〜3円/kWh下げが実現しているケースも多く、実質単価は20〜25円/kWhレンジ。年間使用量30億kWh級の高炉製鉄所では数百〜数千億円の電気代規模となり、単価1円/kWhの差が経営に深刻に影響します。",
  },
  {
    label: "高圧電力 — 中堅鉄鋼・部品加工工場の単価",
    detail:
      "Tier2鉄鋼関連・重工業部品工場（500kW〜2,000kW級）の『業務用高圧電力』は16〜20円/kWh+調整項目。実質単価は22〜26円/kWhレンジ。新電力経由なら1〜3円/kWh安いケースが多く、中堅工場でも見直し効果が大きいレンジです。",
  },
  {
    label: "電炉アーク負荷の瞬間電力課金",
    detail:
      "電炉式の特殊鋼製造ではアーク放電による瞬間電力ピークが極端に大きく、契約電力（kW）に対する基本料金が経営費の主要構成要素に。1チャージ単位の電力消費パターンの最適化、複数電炉の稼働分散、需要平準化が単価最適化の主戦場となります。",
  },
  {
    label: "関西エリアの燃調感応度と鉄鋼業への影響",
    detail:
      "関西エリアは原子力寄与で燃調感応度が他エリアより低位。鉄鋼業の場合、年間使用量が巨大なため絶対額の燃調インパクトは大きく、2022〜2023年高騰時には燃調変動だけで年間数百億円のコスト変動を経験した事業所もあります（出典: 関西電力供給計画／各社決算資料）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 高炉一貫製鉄所（特別高圧 200,000kW、年間 18億kWh）",
    before:
      "Before: 兵庫県内の高炉一貫製鉄所A（年産粗鋼500万トン規模）。高炉・転炉・連続鋳造・熱間圧延・冷間圧延を内製。関西電力との長期相対契約＋自家発電（コークス炉ガス・高炉ガス火力）の組合せ。2023年度は燃調影響で買電単価が年間平均+2.5円/kWh上昇。年間電気代 約350億円。",
    after:
      "After: 燃調上限あり契約への条件改定／自家発電比率の引き上げ（コークス炉ガス・高炉ガス火力の稼働最大化）／圧延機械のインバータ高効率化（投資数十億円規模）／廃熱発電（CDQ・TRT）の更新／非化石証書購入によるCO2会計上の対応／水素還元製鉄技術開発との並行投資。",
    result:
      "Result: 年間電気代 約350億円 → 約290億円（▲約17%、▲60億円・目安）／買電比率縮小／自家発電寄与拡大／投資回収 数年（プロジェクト別）。",
  },
  {
    title: "業種2: 電炉特殊鋼工場（特別高圧 25,000kW、年間 1.8億kWh）",
    before:
      "Before: 兵庫県内の電炉特殊鋼工場B（自動車向け線条・軸受鋼等）。アーク炉2基＋圧延機械＋熱処理炉。関西電力の特別高圧電力＋燃調連動。2023年度は燃調影響で前年比+12%の電気代増加。年間電気代 約40億円。",
    after:
      "After: 全国系新電力に固定3年・燃調上限あり契約で切替／電炉のアーク制御最適化（電極消耗削減）／廃熱回収＋温水利用拡大／コンプレッサー高効率化＋圧縮機ネットワーク再設計／LED化＋空調更新（県補助＋SII併用、投資3億円）／非化石証書購入で追加CN対応。",
    result:
      "Result: 年間電気代 約40億円 → 約32億円（▲約20%、▲8億円・目安）／契約電力 25,000→22,500kW／投資回収 補助金後 3〜4年（目安）。",
  },
  {
    title: "業種3: 重機械部品Tier1工場（特別高圧 4,000kW、年間 3,000万kWh）",
    before:
      "Before: 姫路市の重機械部品Tier1工場C（航空機エンジン部品・産業機械部品・特殊鋼加工）。大型切削＋熱処理＋クリーンルーム検査。関西電力の特別高圧電力＋燃調連動。年間電気代 約7億円。",
    after:
      "After: 関電系新電力＋全国系新電力の競争入札で固定3年契約獲得／熱処理炉の高効率化＋廃熱回収／クリーンルーム外気冷房適用拡大／コンプレッサー集中管理／屋根太陽光2MW自家消費／BEMS・需給予測AI導入。",
    result:
      "Result: 年間電気代 約7億円 → 約5.7億円（▲約19%、▲1.3億円・目安）／契約電力 4,000→3,600kW／投資回収 補助金後 2.5〜3年（目安）。",
  },
];

const costFactors = [
  {
    label: "高炉一貫製鉄所の超巨大絶対需要",
    detail:
      "高炉一貫製鉄所は1事業所で年間使用電力数十億kWh規模。日本全体の電力需要に対するインパクトも大きく、関西電力エリア全体の需給バランスに影響を与える構造。単価1円/kWh差が年間数百億円規模の経営影響に直結する稀有な業種です。",
  },
  {
    label: "電炉アーク負荷の瞬間ピーク",
    detail:
      "電炉式の特殊鋼製造ではアーク放電による瞬間電力ピークが10MW級に達する事業所も。契約電力（kW）に対する基本料金の負担が極端に大きく、アーク制御最適化・複数炉の稼働分散・需要平準化が経営テーマの中心。",
  },
  {
    label: "鉄鋼業界のCN要請と水素還元製鉄",
    detail:
      "鉄鋼業界全体で2050年カーボンニュートラル化が掲げられ、水素還元製鉄（高炉→直接還元電炉）への技術転換が長期的方向性に。電力依存度が高まる方向で、再エネ調達コスト・系統増強の経営影響も拡大が見込まれます。Tier2・Tier3にもScope3対応の要請が広がります。",
  },
  {
    label: "再エネ賦課金の絶対額負担",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量10億kWh級の高炉製鉄所では年約40億円規模の負担。減免制度の対象になり得る業種ですが、適用要件・申請手続きは複雑で、専門部署による継続管理が必要です（出典: 経産省再エネ特措法）。",
  },
  {
    label: "長期相対契約の硬直性",
    detail:
      "高炉一貫製鉄所等の超大型需要家は長期相対契約が中心で、契約条件改定のタイミングが限られる。短期的な燃調・市場変動への対応が他業種より硬直的で、長期目線での契約設計・自家発電比率の戦略的調整が経営判断の中心となります。",
  },
];

const subsidies = [
  {
    name: "兵庫県 産業立地・脱炭素設備導入補助",
    target: "県内中堅・中小企業の省エネ・脱炭素設備（重工業・素材・部品加工等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の産業政策に基づく補助メニュー。Tier1・Tier2重機械部品工場の更新で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・コンプレッサー・熱処理炉・廃熱回収・LED・サーボプレス等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "兵庫県内の鉄鋼Tier2・重工業部品工場の更新案件で採択実績多数。熱処理炉省エネ・廃熱回収・コンプレッサー高効率化等で活用しやすい主力補助。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "鉄鋼業の水素還元製鉄・電炉転換・再エネ調達設備の取得で活用可能。所管: 経産省・国税庁。長期投資の経営計画に組み込みやすい税制優遇。",
  },
  {
    name: "経産省 鉄鋼業GX関連投資支援基金",
    target: "国家戦略的に重要な鉄鋼業のCN対応設備投資",
    rate: "プロジェクト別に大規模支援",
    note: "経産省・NEDOで進められている鉄鋼業GX対応の投資支援メニュー。水素還元製鉄・直接還元・電炉転換等で大型基金支援の検討が進む。最新動向は経産省製造産業局の公式情報で確認。",
  },
  {
    name: "電力多消費業種向け再エネ賦課金減免制度",
    target: "電気使用量原単位の高いエネルギー多消費業種",
    rate: "賦課金算定額の8割減免（要件適合時）",
    note: "鉄鋼業はエネルギー多消費業種に該当する可能性が高く、原単位要件・申請手続きを確認のうえ申請を検討する価値があります（出典: 経産省再エネ特措法）。",
  },
];

const industryProfile = [
  {
    label: "神戸市 — 神戸製鋼本社・神戸製鉄所・川崎重工神戸",
    detail:
      "神戸製鋼所本社・神戸製鉄所、川崎重工神戸工場、三菱重工神戸造船所が立地する重工業中枢エリア。鉄鋼・造船・産業機械・原子力機器の超大型事業所が連なり、特別高圧契約の集中度が極めて高い構造。神戸製鋼神戸発電所は石炭火力を運営し、関西電力等への卸売も実施。",
  },
  {
    label: "加古川市・姫路市 — 高炉一貫製鉄所集積",
    detail:
      "神戸製鋼加古川製鉄所（高炉一貫）、日本製鉄広畑製鉄所（高炉一貫→電炉転換予定）、住友電工大阪製作所などの大型製鉄所・特殊鋼工場が立地。年間使用量数億〜数十億kWh級の特別高圧需要家が集中するエリアです。",
  },
  {
    label: "播磨臨海工業地帯 — Tier1・Tier2部品加工集積",
    detail:
      "高砂市・たつの市・赤穂市等の播磨臨海工業地帯には、神戸製鋼・日本製鉄系のTier1・Tier2部品加工工場や、IHI播磨事業所（航空機エンジン）等の重工業関連事業所が集積。特別高圧・高圧の中堅需要家が多数立地しています。",
  },
  {
    label: "尼崎市・西宮市・伊丹市 — 機械・素材工業",
    detail:
      "尼崎・西宮・伊丹エリアには、関西電力姫路第一・第二発電所への近接性を活かした機械・金属素材・化学工業が立地。中堅特別高圧・高圧の需要家が多く、新電力切替の選択肢も豊富。",
  },
  {
    label: "豊岡市・但馬地域 — 中小金属加工",
    detail:
      "兵庫県北部・但馬地域には伝統的な鋳物・刃物等の金属加工中小事業者が集積。高圧・低圧の中小需要家として、関西電力・新電力の競争市場の一端を担います。",
  },
];

const switchingReality = [
  {
    label: "鉄鋼・重工業の新電力浸透度（兵庫）",
    detail:
      "高炉一貫製鉄所等の超大型需要家は関西電力との長期相対契約が継続している傾向。Tier2・Tier3の特別高圧・高圧では新電力切替が進行中で、全国系新電力・関電グループ系・再エネ特化型の競争入札が活発化。",
  },
  {
    label: "市場連動からの固定回帰",
    detail:
      "2022〜2023年高騰で兵庫の中堅鉄鋼・重工業需要家の多くが市場連動から固定回帰。年間使用量数千万〜億kWh級では固定3〜5年＋燃調上限ありが主流。長期相対契約の超大型需要家でも条件改定タイミングで燃調上限導入が広がっています。",
  },
  {
    label: "関西電力継続のメリット・デメリット",
    detail:
      "メリット: 長年の信頼関係・系統運用協調・原子力寄与で燃調感応度低位・自家発電との連系運用支援・災害時BCP対応。デメリット: 長期相対契約の硬直性・短期的な単価条件改定の難しさ。",
  },
  {
    label: "新電力選定のポイント（兵庫×鉄鋼固有）",
    detail:
      "①特別高圧の超大型供給実績、②燃調上限・連動条件の柔軟性、③CN対応の再エネ調達枠（非化石証書・PPA）、④自家発電との連系運用支援、⑤BCP対応（阪神淡路大震災を経験した地域）の5点が重要です。",
  },
  {
    label: "自家発電比率の戦略的調整",
    detail:
      "高炉一貫製鉄所はコークス炉ガス・高炉ガス火力等の自家発電を保有し、買電比率を戦略的に調整可能。燃調高騰時には自家発電比率を引き上げ、安価な時期には買電比率を上げるなど、需給状況に応じた最適化が経営判断の中心となります。",
  },
];

const energySaving = [
  {
    label: "廃熱発電（CDQ・TRT）の更新",
    detail:
      "高炉一貫製鉄所のコークス乾式消火（CDQ）・高炉炉頂圧発電（TRT）等の廃熱発電設備更新で発電効率改善＋買電量削減。投資規模は数十億円級ですが、回収期間は5〜10年で大きな経営インパクト。GX税制との組合せで投資ハードルを下げられます。",
  },
  {
    label: "電炉アーク制御最適化＋電極消耗削減",
    detail:
      "電炉メーカーではアーク制御最適化（電極位置・電圧電流制御）で電極消耗削減＋電力使用効率改善が可能。AI・IoTを活用した最新の制御技術導入で電力▲5〜10%、電極コスト削減との合計で経営インパクト大。",
  },
  {
    label: "圧延機械のインバータ高効率化",
    detail:
      "熱間圧延・冷間圧延機械のインバータ化＋高効率モーター更新で電力▲10〜15%。投資規模は数億〜数十億円ですが、SII補助・GX税制との組合せで投資回収期間を短縮可能。",
  },
  {
    label: "コンプレッサー集中管理＋圧縮機ネットワーク再設計",
    detail:
      "重工業部品工場では複数のコンプレッサーが分散運用されているケースが多く、集中管理＋圧縮機ネットワーク再設計で電力▲10〜20%。SII補助1/2で投資回収2〜3年が目安。",
  },
  {
    label: "屋根オンサイトPPA＋オフサイトPPA",
    detail:
      "重工業部品工場・Tier2鉄鋼工場では屋根面積1〜5万m²以上を確保できるケースが多く、屋根太陽光1〜25MW級のオンサイトPPAが現実的。同時にオフサイトPPA・コーポレートPPAの調達も拡大しており、Scope2排出量削減＋単価安定化を両立できます。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "電炉アーク放電の瞬間電力ピークを契約kWに反映しているか／平準化余地はあるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "関西電力の長期相対契約の改定タイミングを把握しているか",
  "全国系・関電系・再エネ特化型の新電力10社以上から相見積を取得したか（Tier2/Tier3）",
  "電力多消費業種向け再エネ賦課金減免制度の適用要件を確認したか",
  "自家発電（コークス炉ガス・高炉ガス火力等）の稼働最適化を検証したか",
  "Scope3 CN要請（自社／顧客）に対する追加性ある再エネ調達計画があるか",
  "兵庫県補助・SII補助・GX税制・経産省鉄鋼GX支援の併用可否を整理したか",
  "廃熱発電（CDQ・TRT）等の設備更新計画があるか",
  "屋根オンサイトPPA・オフサイトPPAの試算（kW・年間発電量・回収年数）を実施したか",
  "BCP（阪神淡路大震災経験地域）の自家発・蓄電池・系統復旧優先度を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "高炉一貫製鉄所の電力消費はどれぐらいの規模ですか？",
    answer:
      "粗鋼年産500万トン級の高炉一貫製鉄所では年間使用電力10〜20億kWh規模が一般的。日本の家庭1軒の年間使用電力（約4,000kWh）に換算すると、1事業所で約250〜500万軒分に相当する規模感です。電力消費の中心は連続鋳造・圧延機械・電気集塵機・送風機・廃ガス処理で、自家発電（コークス炉ガス・高炉ガス火力）と組み合わせて買電比率を戦略的に調整しています（出典: 各社環境報告書）。",
  },
  {
    question: "電炉アーク放電の瞬間電力は契約電力にどう反映されますか？",
    answer:
      "電炉式の特殊鋼製造ではアーク放電による瞬間電力ピークが10MW級に達することがあり、これが契約電力（kW）を押し上げる主要因に。基本料金は契約電力に比例するため、アーク制御最適化・複数炉の稼働分散・需要平準化が経営テーマの中心。最新のAI・IoT制御技術導入で電極消耗削減＋電力使用効率改善が同時に進められています。",
  },
  {
    question: "鉄鋼業界の水素還元製鉄への転換は電力需要をどう変えますか？",
    answer:
      "水素還元製鉄（高炉→直接還元電炉）への転換が進むと、コークス炉ガス・高炉ガス火力等の自家発電源が縮小する一方、電炉アーク・水素製造（電解）の電力需要が拡大します。Net では電力依存度が高まる方向で、再エネ調達コスト・系統増強の経営影響も拡大が見込まれます。経産省・NEDOで支援基金が整備されつつあり、長期投資判断の中心テーマです。",
  },
  {
    question: "関西電力との長期相対契約はどう改定タイミングを捉えればよいですか？",
    answer:
      "長期相対契約は年次条件改定や5年程度の契約期間更新のタイミングで条件交渉が可能です。改定タイミングを逃さず、自家発電比率の調整・燃調上限の導入・非化石証書付き等の条件改善を継続的に交渉することが重要。社内エネルギー部門の専門人材育成・継続管理が経営継続上不可欠です。",
  },
  {
    question: "電力多消費業種向け再エネ賦課金減免制度は鉄鋼業に適用できますか？",
    answer:
      "適用できる可能性が高いです。鉄鋼業は電気使用量原単位が高く、減免要件（売上高に対する電気代比率5%以上等）に該当しやすい業種。賦課金算定額の8割減免が可能で、年間使用量10億kWh級では年30億円規模の負担軽減になります。ただし申請手続き・要件適合の継続証明は複雑で、専門部署による継続管理が必要です（出典: 経産省再エネ特措法）。",
  },
  {
    question: "Tier2・Tier3の鉄鋼関連部品工場でも新電力切替は得ですか？",
    answer:
      "原則として得です。関西電力標準メニューと新電力固定単価メニューには標準比1〜3円/kWhの差があることが多く、年間使用量1,000万kWh級のTier2工場では年間1,000万〜3,000万円規模の差になります。鉄鋼サプライチェーンのCN要請への対応で、再エネ調達枠付き新電力の選択も合理的な経営判断です。",
  },
  {
    question: "屋根オンサイトPPAは重工業部品工場でも適用できますか？",
    answer:
      "適用可能です。Tier1・Tier2重工業部品工場は屋根面積1〜5万m²以上を確保できるケースが多く、1〜25MW級の屋根太陽光PPAが現実的。初期投資ゼロ・PPA事業者が設備所有・自社は20年間の電力購入契約という形が標準で、RE100算入＋電気代単価下げが両立できます。",
  },
  {
    question: "阪神淡路大震災BCPは新電力切替後も継続できますか？",
    answer:
      "物理的な復旧作業は関西電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発との連系条件を必ず確認してください。鉄鋼・重工業では数時間の停電で数億円規模の損失が発生する業種特性のため、BCP体制は経営最優先事項です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "関西電力 法人向け料金プラン", url: "https://kepco.jp/" },
  { name: "関西電力送配電 供給計画", url: "https://www.kansai-td.co.jp/" },
  { name: "神戸製鋼所 統合報告書", url: "https://www.kobelco.co.jp/" },
  { name: "日本製鉄 統合報告書", url: "https://www.nipponsteel.com/" },
  { name: "兵庫県 産業労働政策", url: "https://web.pref.hyogo.lg.jp/" },
  { name: "経済産業省 製造産業局（鉄鋼業政策）", url: "https://www.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function HyogoSteelElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hyogo-steel-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "兵庫県の鉄鋼・重工業の電気料金", url: "https://simulator.eic-jp.org/hyogo-steel-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">兵庫県の鉄鋼・重工業の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            兵庫県の鉄鋼・重工業の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            兵庫県は神戸製鋼・日本製鉄広畑・川崎重工神戸・三菱重工神戸・IHI播磨など、鉄鋼・重工業の超大型事業所が集積する全国有数の重工業集積地です。本ページでは「兵庫県 × 鉄鋼・重工業」というクロス領域に絞り、関西電力エリア固有の単価事情と、高炉一貫製鉄所／電炉特殊鋼／重機械部品工場の電力プロファイル、特別高圧契約最適化、水素還元製鉄・CN対応までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>神戸・姫路・加古川・播磨の鉄鋼・重工業集積と電力プロファイル</li>
              <li>高炉一貫／電炉特殊鋼／重機械部品工場のBefore/After削減事例</li>
              <li>関西電力エリアの単価水準と長期相対契約の改定タイミング</li>
              <li>水素還元製鉄・CN対応の電力需要構造変化</li>
              <li>兵庫×鉄鋼に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「兵庫 × 鉄鋼・重工業」のクロス領域に特化したガイドです。兵庫県全体の文脈は{" "}
            <Link href="/hyogo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              兵庫県の法人電気料金完全ガイド
            </Link>
            、業種一般としての鉄鋼業全体は{" "}
            <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              鉄鋼業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              兵庫県の鉄鋼・重工業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県、特に神戸・姫路・加古川・播磨臨海工業地帯は、高炉一貫製鉄所・電炉特殊鋼工場・重機械工業の超大型事業所が連続立地する全国有数の重工業集積地です。年間使用電力数十億kWh級の特別高圧需要家が集中し、関西電力エリアの電力需給に大きな影響を持ちます。
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
              兵庫県全体の文脈は{" "}
              <Link href="/hyogo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                兵庫県の法人電気料金ガイド
              </Link>
              、関西電力エリア全体は{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                関西電力エリア事情
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
              関西電力エリアの主要電力会社・新電力（兵庫×鉄鋼での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県内の鉄鋼・重工業は、関西電力の長期相対契約に加え、全国系新電力・自家発電・再エネ特化型・PPA事業者と多様な選択肢が併存。超大型需要家は長期相対が中心、Tier2/Tier3では切替シフトが進行中です。
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
              関西電力エリアの料金水準と鉄鋼業への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧の単価レンジ、電炉アーク負荷の瞬間電力課金、関西エリアの燃調感応度、鉄鋼業の絶対額負担を、代表的な契約タイプ別に整理します。
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
              規模別事例3件 — 高炉一貫／電炉特殊鋼／重機械部品（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県内の代表的な3規模の鉄鋼・重工業事業所で、契約見直し＋廃熱発電＋自家発電比率調整＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              兵庫×鉄鋼固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫鉄鋼の電気代上昇は、高炉一貫の超巨大絶対需要・電炉アーク瞬間ピーク・水素還元製鉄CN要請・再エネ賦課金の絶対額負担・長期相対契約の硬直性の5要因が複合的に作用します。
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
              補助金・優遇制度 — 兵庫県・国・経産省鉄鋼GX支援の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県の産業立地・脱炭素設備導入補助、国のSII省エネ補助、GX投資促進税制、経産省鉄鋼業GX関連投資支援基金、電力多消費業種向け再エネ賦課金減免の5層を組合せ、鉄鋼業投資の回収を1〜数年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（神戸／姫路／加古川／播磨臨海）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫の鉄鋼・重工業は、神戸の重工業中枢（神戸製鋼・川崎重工・三菱重工）、加古川・姫路の高炉一貫製鉄所、播磨臨海のTier1/Tier2部品工場、尼崎・西宮の機械素材、但馬の中小金属加工という構造です。
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
              電力会社切替の実情 — 関西電力と新電力の比較（鉄鋼版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              超大型需要家は長期相対契約継続、Tier2/Tier3では切替余地大、市場連動からの固定回帰、CN要請による再エネ調達主流化、自家発電比率の戦略的調整が共通トレンドです。
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
              兵庫×鉄鋼の省エネ・自家消費事例（廃熱発電／アーク制御／圧延高効率／コンプレッサー／PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鉄鋼・重工業の省エネは、廃熱発電（CDQ・TRT）更新、電炉アーク制御最適化、圧延機械インバータ高効率化、コンプレッサー集中管理、屋根・オフサイトPPAの5軸が主力。経営インパクト大の打ち手が揃っています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              兵庫×鉄鋼 契約見直しチェックリスト（12項目）
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
              シミュレーターで兵庫×鉄鋼の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫の鉄鋼・重工業は、超巨大絶対需要・電炉アーク瞬間ピーク・水素還元製鉄CN要請・賦課金絶対額負担など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、燃調上限契約・廃熱発電投資・自家発電比率調整のメリットを定量化できます。
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
              { href: "/hyogo-business-electricity-cost", title: "兵庫県の法人電気料金ガイド（地域一般）", description: "兵庫県全体の文脈・関西電力エリア・神戸/姫路。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し（業種一般）", description: "高炉・電炉・特殊鋼の業種別最適化と水素還元製鉄。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "関西全体の料金体系・原子力寄与・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/osaka-sme-factory-electricity-cost", title: "大阪府の中小製造業・町工場の電気料金", description: "関西電力エリアの中小製造業クロス（兄弟ページ）。" },
              { href: "/kyoto-hotel-ryokan-electricity-cost", title: "京都府の旅館・ホテルの電気料金", description: "関西電力エリアの観光・宿泊クロス（兄弟ページ）。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "中部電力エリアのトヨタ系完成車クロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "鉄鋼業に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "鉄鋼業で市場連動を避けるべき理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "関西エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "鉄鋼業の絶対額負担を理解。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増・減免制度。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "鉄鋼CN対応の追加性ある再エネ調達。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトvsオフサイトPPA", description: "重工業部品工場の屋根活用例。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="兵庫の鉄鋼・重工業の電気代リスクを自社条件で試算する"
            description="神戸製鋼・日本製鉄広畑・川崎重工・三菱重工・IHIなど兵庫の重工業固有の条件（関西電力エリア・特別高圧・電炉アーク・水素還元製鉄CN）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。燃調上限契約・廃熱発電・自家発電比率調整のROIもあわせて確認できます。"
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
            heading="兵庫の鉄鋼・重工業の電力契約見直し、専門家に相談しませんか？"
            description="高炉一貫・電炉特殊鋼・重機械部品工場いずれも特別高圧の規模感と水素還元製鉄CN要請が絡み合い、契約・自家発電・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で兵庫県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
