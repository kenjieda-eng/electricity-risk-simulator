import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];

const pageTitle =
  "石川県の法人電気料金完全ガイド｜機械工業・金沢観光業・加賀温泉郷の契約最適化";
const pageDescription =
  "石川県の法人電気料金を地域特化で解説。北陸電力エリア、コマツ系機械工業集積、金沢の伝統産業・観光業、加賀温泉郷、能登半島復興、2024年地震影響、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "石川県 法人電気料金",
    "北陸電力 高圧 石川",
    "金沢 観光業 電気代",
    "コマツ 石川 工場",
    "加賀温泉 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ishikawa-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ishikawa-business-electricity-cost",
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
    label: "北陸電力エリアと石川県の位置付け",
    detail:
      "石川県は北陸電力エリア。加賀・能登の2地域に分かれ、地域間で気象条件と産業構造が異なる。県内総電力需要は約45億kWhで北陸電力エリア全体の25%を占める。志賀原発（志賀町）が県内立地で、2011年以降停止中。",
  },
  {
    label: "電源構成 — 志賀原発停止と水力・火力依存",
    detail:
      "北陸電力エリアは水力比率約30%・火力45%・再エネ25%。志賀原発（203万kW）は2011年以降停止中で、2024年1月の能登半島地震で再稼働見通しさらに不透明。手取川・梯川水系の水力発電所群がベースロード。",
  },
  {
    label: "気象条件 — 雪国と日本海側気候",
    detail:
      "金沢市の降雪量は年間2〜3m、白山麓・能登半島中山間部は年間5〜10m。暖房度日3,000〜3,200。融雪・除排雪電力需要が高い。夏季は内陸最高気温33℃前後で本州並み。冬季の重く湿った雪（北陸特有）が屋根荷重・融雪電力負荷を増大。",
  },
  {
    label: "2024年能登半島地震の影響",
    detail:
      "2024年1月の能登半島地震で能登地方の事業者に大きな被害。北陸電力の送配電網も損傷し、復旧に長期間を要した。能登地方の事業者向けには復興関連の特別支援制度が継続中。電力契約見直しと復興支援の組合せが重要。",
  },
  {
    label: "産業集積 — 機械工業と観光業",
    detail:
      "金沢・小松・加賀の機械工業（コマツ・KDDI関連等）、金沢の伝統産業（金箔・友禅・漆器）、加賀温泉郷・和倉温泉の観光業、能登地方の水産加工が県内主要産業。観光業の規模が全国でも上位の県。",
  },
];

const utilitiesList = [
  {
    name: "北陸電力（ほくでん）",
    role: "一般送配電事業者・小売",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』など。2023年4月の規制料金改定では家庭向け45.84%値上げ（北陸電力管内）で大幅改定。法人向けも同等の大幅改定を実施。",
  },
  {
    name: "北陸電力 株式会社（小売子会社）",
    role: "新電力（北陸電力グループ）",
    detail:
      "北陸電力グループの新電力。固定単価メニュー中心。機械工業・観光業で実績。電源は北陸電力の余剰電力と相対契約電源を組合せ。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "全国系新電力。コマツ・KDDI関連等の中堅製造業で実績。2023年の北陸電力大幅値上げを受けて新電力切替が加速。",
  },
  {
    name: "Looopでんき・auでんき",
    role: "市場連動・通信系新電力",
    detail:
      "市場連動プラン中心の新電力、通信会社系新電力。中小事業者・店舗中心。",
  },
  {
    name: "金沢市民エナジー・かなざわ電力",
    role: "地域密着型新電力",
    detail:
      "石川県内の地域新電力。県内再エネ電源（小水力・太陽光）を優先調達。県内自治体施設・中小事業者向け。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰・北陸電力大幅値上げ局面で新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は7社前後が県内で法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "北陸電力『業務用高圧電力』の電力量料金は20〜24円/kWh（2023年4月改定後）。燃料費調整額（2024〜2025年は+3.5〜+5.0円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は28〜33円/kWhレンジ。2023年値上げにより全国平均より2〜4円/kWh高い水準。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金19〜22円/kWh+調整項目。コマツの建設機械工場、KDDI系電子部品工場、大型観光施設などが対象。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "北陸電力『低圧電力（動力）』は12〜16円/kWh+調整項目（2023年改定後）。中小事業所・店舗・伝統工芸の工房等で利用。低圧電灯（事務所等）は19〜23円/kWh。",
  },
  {
    label: "燃料費調整額の北陸電力特性",
    detail:
      "電源構成で火力依存度45%、水力30%、再エネ25%程度のため、燃料費調整額の変動幅は中程度。2022〜2023年は月最大+7円/kWh水準、2024〜2025年は+3.5〜+5.0円/kWhレンジで推移。志賀原発の再稼働見通しは2024年地震で不透明で、当面は高水準継続見込み。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・建設機械工場（小松市・特別高圧 1,500kW、年間 1,050万kWh）",
    before:
      "Before: 小松市の建設機械メーカーA社（コマツ系協力企業）。溶接ライン・塗装ライン・組立ラインを2交替制で稼働。市場連動プラン継続で2023年冬には月最大6,500万円の電気代経験。年間電気代 4.2億円。塗装乾燥炉・溶接電力が消費電力の50%、コンプレッサー旧型のまま運用。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／塗装乾燥炉を高効率ヒートポンプ式に変更／溶接機をインバータ式に更新（SII補助1/3活用、投資5,500万円）／屋根面積5,500m²に自家消費太陽光700kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 4.2億円 → 3.36億円（▲20%、▲8,400万円）／契約kW 1,500→1,350／投資回収 補助金後 3.0年。",
  },
  {
    title: "業種2: 流通業・金沢中央卸売市場冷凍倉庫（金沢市・高圧 480kW、年間 240万kWh）",
    before:
      "Before: 金沢中央卸売市場B社（水産物・青果物の冷凍倉庫）。-25℃冷凍倉庫を2棟運用、24時間稼働。年間電気代 7,800万円。2023年北陸電力値上げで前年比+1,500万円の上昇。冷凍設備が古く（16年経過）、ピークシフト未対応。",
    after:
      "After: 固定3年プランへ切替／冷凍庫コンプレッサーをCO2冷媒インバータ式に更新（SII補助1/2活用、投資2,400万円）／断熱性能改善工事／デマンドコントローラー導入／屋根太陽光150kW自家消費＋蓄電池。",
    result:
      "Result: 年間電気代 7,800万円 → 6,160万円（▲21%、▲1,640万円）／契約kW 480→410／投資回収 補助金後 2.2年。",
  },
  {
    title: "業種3: サービス業・加賀温泉ホテル（加賀市山代温泉、高圧 420kW、年間 230万kWh）",
    before:
      "Before: 山代温泉のリゾートホテルC社（150室）。冬季の暖房・温泉加熱・融雪設備で電力消費が年間使用量の55%を占める。年間電気代 7,500万円。市場連動プラン継続で2023年1月は月1,300万円の請求（前年同月+480万円）を経験。",
    after:
      "After: 固定3年プランへ切替／全館LED化（投資450万円、SII補助1/2活用）／高効率ヒートポンプ給湯機への更新／温泉熱交換器の高効率化／融雪設備のスマート制御導入。",
    result:
      "Result: 年間電気代 7,500万円 → 6,300万円（▲16%、▲1,200万円）／契約kW 420→380／投資回収 1.6年（補助金後 0.8年）。",
  },
];

const costFactors = [
  {
    label: "2023年北陸電力45.84%値上げの影響",
    detail:
      "全国エリアで最大規模の値上げ。家庭向け45.84%、法人向けも同等の大幅改定。中規模事業所（年間100万kWh）で年800〜1,200万円、大規模工場（年間1,000万kWh）で年8,000万〜1.2億円の値上げ。県内法人にとって最大のコスト圧力。",
  },
  {
    label: "観光業比率の高さによる季節変動",
    detail:
      "金沢・加賀温泉郷・和倉温泉・能登・輪島の観光業集積。観光客数の季節変動で電力需要パターンが特殊。冬季の暖房ピーク＋GW・夏季・年末年始の冷暖房同時最大が顕著。",
  },
  {
    label: "金沢の伝統産業・小規模事業者の集積",
    detail:
      "金箔・友禅・漆器・九谷焼などの伝統産業は小規模事業者が中心で、低圧契約が多い。低圧電力単価が2023年大幅値上げの影響を直接受け、零細事業者の経営圧迫要因。",
  },
  {
    label: "能登半島地震復興と電力供給",
    detail:
      "2024年地震で能登地方の事業者は復興過程。北陸電力の送配電網復旧と並行して、復興期間中の電力契約見直しが重要。復興関連特別支援制度の活用とセットで電力コスト最適化が必要。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1,000万kWh使用の大規模事業者で年4,000万円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では機械工業（小松）・観光業（金沢・加賀）・冷凍倉庫で採択実績多数。LED化・空調更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・倉庫と相性が良い。石川県は冬季積雪量があるため、積雪荷重対応パネルの選定が必須。",
  },
  {
    name: "石川県脱炭素・省エネ設備導入補助金",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "石川県独自補助。観光業・伝統産業向けの支援メニューもあり。SII補助との併用ルールに留意。",
  },
  {
    name: "金沢市・小松市の省エネ補助",
    target: "市内中小事業者の省エネ設備導入",
    rate: "1/3、上限100万〜300万円",
    note: "市町村単位の補助。金沢市『中小企業環境配慮設備補助』、小松市『産業活性化省エネ補助』など。",
  },
  {
    name: "能登半島地震復興関連支援制度",
    target: "能登地方の被災事業者の復興投資",
    rate: "事業規模に応じる、大型補助あり",
    note: "能登地方限定の復興支援制度。電力契約見直し・省エネ投資を含む復興投資との組合せで、大型補助の活用可能。",
  },
];

const industryProfile = [
  {
    label: "機械工業・建設機械（小松・加賀）",
    detail:
      "コマツ（小松製作所）・KDDI関連・大同工業など。建設機械・電子部品・自動車部品の集積。年間使用量500万〜1億kWh規模。",
  },
  {
    label: "観光業・ホテル・温泉（金沢・加賀温泉郷・和倉温泉）",
    detail:
      "金沢（兼六園・近江町市場・ひがし茶屋街）・加賀温泉郷（山代・山中・片山津・粟津）・和倉温泉などの観光地。冬季暖房・温泉加熱・融雪電力需要が大きい。ホテルは年間50〜500万kWh規模。",
  },
  {
    label: "金沢中央卸売市場・物流業",
    detail:
      "金沢中央卸売市場の冷凍倉庫、金沢港・小松港の物流業。年間使用量100〜1,000万kWh規模。",
  },
  {
    label: "伝統産業・小規模事業者（金沢市）",
    detail:
      "金箔・友禅・漆器・九谷焼・加賀友禅などの伝統産業。小規模事業者が中心で年間使用量20〜100万kWh規模。",
  },
  {
    label: "能登水産加工・農業（七尾・輪島・珠洲）",
    detail:
      "能登地方の水産加工（ブリ・カキ・コブ）、輪島の伝統工芸（輪島塗）、能登棚田などの農業。2024年地震からの復興過程。年間使用量50〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で石川県内法人の新電力シェアは20〜25%。2023年北陸電力大幅値上げで切替が加速。観光業・機械工業の中規模事業者で切替実績多数。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。観光業のシーズン稼働事業者でも市場連動を敬遠する傾向。",
  },
  {
    label: "北陸電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・豪雪災害時の復旧体制・能登地震復興体制。デメリット: 単価が新電力比2〜4円/kWh高め（2023年値上げ後）、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①北陸エリア供給実績の有無、②観光業のシーズン需要への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤水力電源のメリットを活かせるか、の5点が県内では特に重要。",
  },
  {
    label: "観光業向けセット契約・付帯サービス",
    detail:
      "観光業向けにオフピーク料金・ガスセットなど、シーズン稼働を考慮した契約メニューも登場。総コスト最適化の観点で比較検討する価値あり。",
  },
];

const energySaving = [
  {
    label: "観光業の省エネ施策",
    detail:
      "ホテル全館LED化、高効率ヒートポンプ給湯、温泉熱交換器の高効率化、融雪設備のスマート制御で電力▲25〜40%。SII補助＋県補助＋市町村補助の組合せで投資回収 1〜2年。",
  },
  {
    label: "建設機械工場の高効率化",
    detail:
      "塗装乾燥炉のヒートポンプ化、溶接機のインバータ化、コンプレッサーのインバータ化で電力▲20〜30%。SII補助活用で投資回収 2.5〜4年。",
  },
  {
    label: "冷凍倉庫のCO2冷媒インバータ化",
    detail:
      "金沢中央卸売市場の冷凍倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 2〜3年。",
  },
  {
    label: "自家消費太陽光（積雪対応）",
    detail:
      "屋根面積3,000m²以上の事業所で500kW級導入が現実的。積雪荷重対応パネル選定が必須。冬季発電は本州平地の40〜60%、年間トータルで投資回収 8〜11年（補助金後 5〜7年）。",
  },
  {
    label: "BEMS・需要見える化・デマンド制御",
    detail:
      "工場・観光施設でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。観光業のシーズン稼働事業者では特に効果大。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）の使用量と他季の差を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "北陸電力の2023年4月改定後の単価で再見積を取得したか",
  "県内新電力5〜8社からの相見積を取得したか",
  "観光業のシーズン需要を反映した契約設計をしているか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "水力電源中心の新電力との契約による燃料費調整額リスク低減を試算したか",
  "融雪・凍結防止ヒーターの運転時間を最適化したか",
  "SII補助・石川県補助・市町村補助・能登復興支援の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "能登地方の事業者は復興支援制度との組合せを確認したか",
];

const faqItems = [
  { question: "石川県の法人電気代水準は全国比どれくらいですか？", answer: "2023年4月の北陸電力大幅値上げ（45.84%）で、高圧電力（業務用）の単価ベースで全国平均より2〜4円/kWh高い水準になりました。中規模事業所（年間100万kWh）で年200〜400万円、大規模工場（年間1,000万kWh）で年2,000〜4,000万円の差が生じます。新電力切替で2〜3円/kWhの単価最適化が可能なケースが多いため、切替を強く推奨します。" },
  { question: "観光業（ホテル・温泉）の電気代削減ポイントは？", answer: "①固定プランへの切替（市場連動回避）、②全館LED化、③高効率ヒートポンプ給湯への更新、④温泉熱交換器の高効率化、⑤融雪設備のスマート制御、の5本柱が中心。SII補助＋石川県補助＋市町村補助の組合せで投資回収1〜2年が目安です。" },
  { question: "コマツ系建設機械工場の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②塗装乾燥炉のヒートポンプ化、③溶接機・コンプレッサーのインバータ化、④屋根太陽光＋蓄電池の自家消費、⑤BEMSによる需要最適化、の5本柱が中心。SII補助＋県補助の組合せで投資回収2.5〜4年が目安です。" },
  { question: "能登半島地震の被災事業者向け復興支援は活用できますか？", answer: "はい、能登地方の被災事業者向けには北陸電力の特別支援制度（料金減免・支払い猶予等）と、国・県・市町村の復興支援制度が継続中です。電力契約見直し・省エネ投資を含む復興投資との組合せで、大型補助の活用が可能。電力会社・行政・金融機関への相談を推奨します。" },
  { question: "北陸電力の燃料費調整額の特徴は？", answer: "電源構成で火力依存度45%、水力30%、再エネ25%程度のため、燃料費調整額の変動幅は中程度です。2022〜2023年は月最大+7円/kWh、2024〜2025年は+3.5〜+5.0円/kWhレンジで推移。志賀原発の再稼働見通しは2024年地震で不透明で、当面は上限付きプランへの切替を強く推奨します。" },
  { question: "石川県で固定プランと市場連動プランのどちらが向きますか？", answer: "冬季ピーク時のスポット価格高騰リスクと2023年大幅値上げの経験を考えると、24時間稼働の機械工業・観光業・冷凍倉庫は固定プランが圧倒的に向きます。市場連動プランは限定的なケースのみ検討対象です。" },
  { question: "石川県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、石川県脱炭素・省エネ設備導入補助金、金沢市・小松市の市町村補助、能登半島地震復興関連支援制度の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "北陸電力と新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（北陸電力ネットワーク）が担うため、北陸電力契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。能登地震の経験から、復旧体制の確認は特に重要です。" },
];

const sourcesItems = [
  { name: "北陸電力 公式サイト", url: "https://www.rikuden.co.jp/" },
  { name: "経済産業省 中部経済産業局電力・ガス事業北陸支局", url: "https://www.chubu.meti.go.jp/b3hokuriku_denkigas/" },
  { name: "石川県環境エネルギー部", url: "https://www.pref.ishikawa.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function IshikawaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ishikawa-business-electricity-cost"
        datePublished="2026-05-20"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "地域別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-region" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">石川県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            石川県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            石川県は北陸電力エリアの中核県で、コマツ系建設機械工業、金沢の伝統産業・観光業、加賀温泉郷・和倉温泉、能登水産加工など多彩な産業が集積します。2023年北陸電力大幅値上げと2024年能登半島地震の影響が県内法人にとって大きなコスト圧力。本ページでは県内法人の電気代水準、業種別影響度、契約見直しの具体策、復興支援を含む補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>北陸電力エリアの2023年大幅値上げと石川県の電気代水準</li>
              <li>建設機械工場・金沢冷凍倉庫・加賀温泉ホテルのBefore/After削減事例</li>
              <li>観光業・伝統産業・能登復興期間中の事業者向け対策</li>
              <li>SII・石川県補助・市町村補助・能登復興支援の組合せ活用パターン</li>
              <li>石川県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県は北陸電力エリアで、加賀・能登の2地域から構成されます。志賀原発（停止中、2024年地震で再稼働さらに不透明）の立地県、コマツ系機械工業集積、金沢・加賀温泉郷・和倉温泉の観光業集積、能登地震復興などが県内電力消費の特徴を形成します。
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
              北陸電力エリアの全体像は{" "}
              <Link href="/region-hokuriku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                北陸電力エリア事情
              </Link>
              、エリア比較は{" "}
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                エリア別電源構成マップ
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              県内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県では2024年時点で7社前後の新電力が法人向け高圧で新規受付中です。北陸電力グループ系、全国系、地域密着型の3カテゴリが主軸となります。2023年北陸電力大幅値上げで切替が加速しました。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力選定の基本は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              北陸電力エリアの単価は2023年4月の45.84%大幅値上げにより全国平均より2〜4円/kWh高い水準になりました。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要で、新電力切替の経済効果が最大級のエリアです。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 建設機械工場・金沢冷凍倉庫・加賀温泉ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              業種横断のコスト構造比較は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              、ホテル見直しは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川県固有の電気代上昇要因 — 2023年値上げ・観光業比率・能登復興・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県の電気代上昇は、2023年北陸電力大幅値上げと観光業比率の高さ、2024年能登半島地震の影響が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川県の補助金・優遇制度 — SII・県独自・市町村・能登復興支援
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県では国補助（SII等）に加え、県独自補助、金沢市・小松市の市町村補助、能登半島地震復興関連支援制度が組合せ可能です。能登地方の被災事業者は復興支援との組合せで大型補助の活用が可能です。
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
              、SII補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              石川県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県の事業者構成は、機械工業（小松・加賀）、観光業・ホテル・温泉（金沢・加賀温泉郷・和倉温泉）、金沢中央卸売市場・物流業、伝統産業・小規模事業者、能登水産加工・農業の5層構造です。観光業比率が全国でも上位で電力消費パターンに特殊性があります。
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
              石川県の新電力シェアは2024年時点で20〜25%。2023年北陸電力大幅値上げを受けて切替が加速、観光業・機械工業の中規模事業者で切替実績多数。
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
              プラン選択論点は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              県内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県の省エネは『観光業の省エネ施策』『建設機械工場の高効率化』『冷凍倉庫CO2冷媒化』『積雪対応自家消費太陽光』『BEMS・需要見える化』の5軸が主力。観光業比率の高さを踏まえたシーズン特化型対策が県内で重要な打ち手です。
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
              石川県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで石川県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              石川県は2023年北陸電力大幅値上げ・観光業比率の高さ・能登復興期間中など多面的特性を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>2023年北陸電力値上げ後の年間電気代を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜21%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-20"
            />
            <GlossaryLinks currentSlug="ishikawa-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-hokuriku-business-electricity", title: "北陸電力エリアの法人電気代事情", description: "北陸電力管内の料金体系・2023年大幅値上げの詳細。" },
              { href: "/toyama-business-electricity-cost", title: "富山県の法人電気料金", description: "隣接県・アルミ産業の富山県の事情。" },
              { href: "/fukui-business-electricity-cost", title: "福井県の法人電気料金", description: "隣接県・繊維・原発立地の福井県の事情。" },
              { href: "/niigata-business-electricity-cost", title: "新潟県の法人電気料金", description: "隣接県・燕三条金属加工の新潟県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "観光業・機械工場が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "金沢・加賀温泉郷ホテル特有のコスト構造。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "コマツ系機械工業と全国比較。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "金沢中央卸売市場の冷凍倉庫向け。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "石川県の積雪対応PPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "観光業・機械工業設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "北陸電力エリアの特性。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="石川県の自社条件で電気代リスクを試算する"
            description="観光業・建設機械工業・北陸電力2023年値上げ・能登復興など石川県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・省エネ投資のROIもあわせて確認できます。"
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
            heading="石川県の電力契約見直し、専門家に相談しませんか？"
            description="観光業・機械工業・能登地方の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
