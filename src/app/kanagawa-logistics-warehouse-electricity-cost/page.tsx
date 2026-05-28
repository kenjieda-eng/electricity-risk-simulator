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
  "神奈川県の物流倉庫の電気料金完全ガイド｜横浜・川崎・京浜港湾の冷凍冷蔵倉庫／自動倉庫と特別高圧契約";
const pageDescription =
  "神奈川県の物流倉庫業に特化した法人電気代ガイド。横浜港・川崎港の京浜港湾物流ハブ、冷凍冷蔵倉庫の24時間稼働、自動倉庫の最新技術、東京電力エリアの単価事情、特別高圧／高圧契約の最適化と省エネ投資、PPA調達までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "神奈川県 物流倉庫 電気料金",
    "横浜 川崎 京浜港湾 電気代",
    "冷凍冷蔵倉庫 24h 電力",
    "東京電力 特別高圧 物流",
    "自動倉庫 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kanagawa-logistics-warehouse-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kanagawa-logistics-warehouse-electricity-cost",
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
    label: "神奈川県の物流倉庫集積 — 京浜港湾を核に",
    detail:
      "神奈川県は横浜港・川崎港の京浜港湾を中心とする日本最大級の物流ハブ。輸出入コンテナ取扱量・冷凍冷蔵倉庫保管量・自動倉庫設置数のいずれでも全国上位の集積を誇り、横浜市本牧・南本牧・大黒・大井（東京港）、川崎市東扇島・浮島の各埠頭・物流団地に大型倉庫が連続立地しています（出典: 神奈川県港湾統計・国土交通省港湾統計）。3PL大手（日通NXグループ・センコー・センコーグループHD・ヤマトHD・佐川HD・SBSHD・SGHD・SRSHD等）の関東基幹拠点も多数所在し、24時間オペレーションの物流倉庫が県内総需要の主要構成要素です。",
  },
  {
    label: "冷凍冷蔵倉庫の電力プロファイル — F級・C級の24時間連続冷却",
    detail:
      "京浜港湾の冷凍冷蔵倉庫は、輸入冷凍水産物・畜肉・冷凍食品・医薬品（バイオ医薬品）を中心とした保管・流通拠点。庫内温度はF級（マイナス20℃以下）・C級（マイナス20〜10℃）・チルド（0〜10℃）に分類され、24時間365日連続冷却が必須。冷凍冷蔵倉庫の電力消費は全電力の60〜80%が冷却用（冷凍機・凝縮器・蒸発器・庫内ファン）で、稼働率に関わらないベース負荷が極めて大きい構造です。",
  },
  {
    label: "自動倉庫の電力プロファイル — AS/RS・搬送ロボット・WMS連動",
    detail:
      "近年、京浜港湾エリアでは自動倉庫（AS/RS：Automated Storage and Retrieval System）の導入が加速。スタッカークレーン・搬送ロボット・コンベア・仕分け機・WMS（Warehouse Management System）連動のIT設備が24時間稼働。常温倉庫でも電力消費が大きく、特別高圧需要家として位置づけられる案件が増加しています。",
  },
  {
    label: "EC・コールドチェーン拡大に伴う電力需要増",
    detail:
      "コロナ禍以降のEC市場拡大、生鮮・冷凍食品の宅配普及、バイオ医薬品（mRNAワクチン等）のコールドチェーン需要拡大により、京浜港湾の物流倉庫の電力需要は中長期で増加基調。新規倉庫開発も継続し、東京電力PGへの新規受電申込・系統増強コストの判断が立地戦略の重要要素となっています（出典: 国土交通省物流動向統計・経産省商業動態統計）。",
  },
  {
    label: "東京電力エリアと神奈川物流の相互依存",
    detail:
      "東京電力エリアの送電網は関東広域に張り巡らされた特高・超高圧送電線網に支えられ、横浜・川崎の物流拠点エリアにも特高変電所が分散立地。物流倉庫の特別高圧需要は東京電力エリアの主要構成要素のひとつで、近年のAI/HPC DC需要急増と合わせて、関東エリア全体の系統容量逼迫が課題化しています（出典: 東京電力PG供給計画／エネ庁次世代電力ネットワーク小委員会）。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者（旧一電）",
    detail:
      "神奈川県内物流倉庫の最大シェア。冷凍冷蔵倉庫の24時間高負荷・自動倉庫の特別高圧需要家を多数抱える。『特別高圧電力』『業務用季節別時間帯別電力』『業務用高圧電力』が主軸。冷凍冷蔵向けには『負荷率割引』適用可能で、24h高負荷率を活かす料金体系が利用可能です。",
  },
  {
    name: "全国系新電力（ENEOSでんき・Looopでんき・出光・東京ガス系・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "神奈川県内の大型物流倉庫・自動倉庫で競争入札の主要対抗馬。固定単価3〜5年契約＋燃調連動の組合せメニューが標準。冷凍冷蔵業界向けにコールドチェーン特化のサービス（保管温度管理連動の電力プラン等）を提供する事業者も登場しています。",
  },
  {
    name: "冷凍冷蔵特化型・物流特化型新電力",
    role: "業界特化型",
    detail:
      "冷凍冷蔵倉庫・物流業界向けに、長期固定契約・電力品質保証（瞬停回避）・コールドチェーン管理連動の付帯価値を提供する事業者群。3PL大手・全国冷凍冷蔵倉庫業協会経由の共同購買スキームも整備されつつあります。",
  },
  {
    name: "再エネ特化型・コーポレートPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "3PL大手・大手小売・大手食品メーカーのRE100加盟と100%再エネ化公約を受け、物流倉庫でもオフサイトPPA（茨城・栃木・千葉・北海道の太陽光・風力案件）／VPPA／コーポレートPPAの調達が拡大。倉庫屋根の自家消費太陽光導入も加速しています。",
  },
  {
    name: "東京ガス系新電力（東京ガス『法人向け電気』等）",
    role: "都市ガス系新電力",
    detail:
      "都市ガス需要家向けにガス＋電気の一括最適化提案。冷凍冷蔵倉庫・物流拠点でガス併用（事務所給湯・コージェネ等）する事業所での総合最適パッケージとして採用例があります。",
  },
  {
    name: "JEPX東京エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX東京エリアスポット価格は2022〜2023年に大幅高騰、現在は落ち着いた水準で推移しつつ夏冬ピーク時間帯は上昇する局面があります。冷凍冷蔵倉庫は年間使用量大・高負荷率のため、市場連動型契約のリスクが特に大きい業種で、固定回帰が主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "東京電力エリアの特別高圧 — 大型物流倉庫の単価水準",
    detail:
      "大型冷凍冷蔵倉庫・自動倉庫（特別高圧2,000kW超、年間1億kWh級）の電力量料金は標準メニューで概ね17〜20円/kWh+調整項目。燃料費調整額（2024〜2025年で+3.0〜+4.5円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安で、年間1億kWh級では年間数千万円〜億円規模のインパクトです。",
  },
  {
    label: "高圧電力 — 中規模物流倉庫の単価",
    detail:
      "中規模物流倉庫（500kW〜2,000kW級）の『業務用高圧電力』は18〜22円/kWh+調整項目。実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケースが多く、中規模倉庫でも見直し効果が大きいレンジです。",
  },
  {
    label: "冷凍冷蔵倉庫の負荷率割引適用",
    detail:
      "東電EPの特別高圧メニューには『負荷率』（年間使用kWh÷契約kW÷8,760）に応じた割引が組み込まれており、冷凍冷蔵倉庫の高負荷率（70〜85%）は割引適用上有利。一方で、絶対的な年間使用量が巨大なため、契約単価の数銭差が年間数千万円規模の差になる業種です。",
  },
  {
    label: "電気代の物流原価への影響",
    detail:
      "冷凍冷蔵倉庫の物流原価に占める電気代比率は通常15〜25%、燃調高騰時には30%超に拡大し、保管料金（円/kg/月、円/パレット/月）の値上げ転嫁検討を迫られます。3PL契約は中長期固定が中心で即時転嫁が難しく、契約見直し・省エネ投資の優先度は経営継続上の最重要課題です（出典: 全国冷凍冷蔵倉庫業協会業界統計）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大型冷凍冷蔵自動倉庫（特別高圧 8,000kW、年間 5,500万kWh）",
    before:
      "Before: 京浜港湾の大型冷凍冷蔵自動倉庫A（容積30万m³、F級＋C級＋チルド多温度帯、自動倉庫AS/RS併設）。輸入冷凍水産物・畜肉・冷凍食品の保管・出荷。東電EPの特別高圧契約継続＋既往燃調連動。2023年度は燃調影響で請求がピーク月1.5億円規模。年間電気代 約16億円。",
    after:
      "After: 全国系新電力との競争入札で固定5年契約獲得／冷凍機の高効率インバータ更新（COP改善、SII補助1/2活用、投資5億円）／自動倉庫制御ロジック最適化（搬送ピーク分散）／屋根太陽光4MW自家消費＋蓄電池15MWh導入／オフサイト太陽光PPA 20MW契約／需給予測AI＋DR市場参加。",
    result:
      "Result: 年間電気代 約16億円 → 約12.5億円（▲約22%、▲3.5億円・目安）／契約電力 8,000→7,200kW／RE100比率 約40%達成／投資回収 補助金後 3〜4年（目安）。",
  },
  {
    title: "業種2: 中堅常温物流倉庫＋自動仕分け（特別高圧 2,500kW、年間 1,700万kWh）",
    before:
      "Before: 横浜市内の中堅常温物流倉庫B（EC流通向け、自動仕分け機・コンベア・ピッキングロボット稼働）。3PL大手の関東基幹拠点。市場連動プラン併用で2023年1月の高騰局面では月3億円の請求。年間電気代 約5億円。",
    after:
      "After: 物流特化型新電力に固定3年で切替／自動仕分け機の運転スケジュール最適化（夜間集中→分散化）／空調更新（庫内温度管理高効率化）／全館LED化＋人感センサー（県補助＋SII併用、投資1億円）／屋根太陽光1.5MW自家消費＋蓄電池導入／BEMS導入で需要見える化。",
    result:
      "Result: 年間電気代 約5億円 → 約4億円（▲約20%、▲1億円・目安）／契約電力 2,500→2,250kW／投資回収 補助金後 3年前後（目安）／顧客向けGHG排出量削減レポート提供で営業競争力向上。",
  },
  {
    title: "業種3: 中規模冷凍冷蔵倉庫（高圧 1,200kW、年間 850万kWh）",
    before:
      "Before: 川崎市の中規模冷凍冷蔵倉庫C（容積3万m³、F級＋C級、輸入冷凍食品・畜肉中心）。東電EPの業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+18%の電気代増加。年間電気代 約2.5億円。",
    after:
      "After: 全国系新電力に固定2年・燃調上限ありで切替／冷凍機の高効率インバータ化＋デフロスト最適化／庫内ファン高効率化／全館LED化（県補助＋SII併用、投資5,000万円）／屋根太陽光500kW自家消費／温度管理自動化。",
    result:
      "Result: 年間電気代 約2.5億円 → 約2億円（▲約20%、▲5,000万円・目安）／契約電力 1,200→1,080kW／投資回収 補助金後 2.5年前後（目安）／保管温度安定性向上で品質クレーム削減。",
  },
];

const costFactors = [
  {
    label: "冷凍冷蔵の24h絶対需要",
    detail:
      "F級・C級冷凍冷蔵倉庫は24時間365日連続冷却が必須で、稼働率に関わらない『ベース負荷』が極めて大きい。冷却用電力は全電力の60〜80%を占め、生産量・出荷量に直接比例しない固定費的性格が強い構造です。",
  },
  {
    label: "EC拡大による電力需要増の継続",
    detail:
      "EC市場拡大・宅配普及・コールドチェーン需要拡大により、京浜港湾の物流倉庫電力需要は中長期で増加基調。新規倉庫開発の電力契約・系統増強コスト判断が経営課題に。",
  },
  {
    label: "東電エリアの燃調感応度",
    detail:
      "東京電力エリアもLNG火力依存度が高く、燃料費調整額の変動幅が大きい。2022〜2023年高騰時は燃調が＋10円/kWh級まで拡大した局面もあり、年間1億kWh級物流倉庫で年間10億円規模の単価変動を経験。固定回帰や燃調上限ありプランへの切替が経営判断の中心となります。",
  },
  {
    label: "3PL契約の単価転嫁難",
    detail:
      "物流倉庫の保管料金（円/kg/月、円/パレット/月）は3PL契約で中長期固定されることが多く、電気代単価の上昇分を即時転嫁することが難しい構造。2022〜2023年高騰時には倉庫業者の収益が大きく圧迫され、契約見直し・省エネ投資の優先度が極めて高い経営テーマに。",
  },
  {
    label: "3PL大手のRE100要請とScope3",
    detail:
      "大手3PL・大手小売・大手食品メーカーがRE100・CN対応を公約し、サプライチェーン全体でScope3 GHG排出削減を要請。倉庫事業者にも再エネ電源調達（PPA・非化石証書）・倉庫屋根太陽光設置が事実上必須化しつつあります。",
  },
];

const subsidies = [
  {
    name: "神奈川県 中小企業省エネ・脱炭素設備導入補助",
    target: "県内中堅・中小物流倉庫業の省エネ・脱炭素設備（冷凍機・空調・LED・BEMS等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の中小企業支援補助。中堅冷凍冷蔵倉庫・物流拠点の更新で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "横浜市・川崎市 環境関連補助",
    target: "市内物流事業者の省エネ・再エネ設備・脱炭素化",
    rate: "対象経費の1/3〜1/2、上限は市町村別",
    note: "横浜市『脱炭素経営支援』、川崎市『環境配慮型経営支援』等の市独自補助。県補助・SII補助との重層活用が可能なケースあり。最新公募状況は各市役所・商工会議所で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率冷凍機・空調・LED・冷凍冷蔵庫断熱改修・コンプレッサー等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "冷凍冷蔵倉庫の冷凍機更新・自動倉庫の高効率化等で採択実績多数。冷凍機COP改善・庫内ファン高効率化等で活用しやすい王道補助。",
  },
  {
    name: "国土交通省 物流効率化・脱炭素化補助",
    target: "物流事業者の効率化・脱炭素設備・モーダルシフト支援",
    rate: "対象経費の1/2、上限は事業区分による",
    note: "国交省が運用する物流業界向け支援補助。倉庫の省エネ化・自動化と並行して活用可能。最新公募状況は国交省物流政策課で確認。",
  },
  {
    name: "需要家主導型再エネ・PPA・蓄電池併設関連補助",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "物流倉庫は屋根面積が大きい（1〜3万m²超）ことが多く、オンサイト太陽光PPA・蓄電池併設の適性が高い。3PL大手のRE100対応投資との組合せで導入加速中。",
  },
];

const industryProfile = [
  {
    label: "横浜市本牧・南本牧・大黒 — コンテナターミナル＋冷凍冷蔵",
    detail:
      "横浜港の主要コンテナターミナル周辺に大型冷凍冷蔵倉庫・常温倉庫が連続立地。輸入冷凍水産物・畜肉・冷凍食品・コーヒー豆・果物等の保管・通関拠点。特別高圧・高圧の超大型需要家が多数。",
  },
  {
    label: "川崎市東扇島・浮島・千鳥町 — 京浜工業地帯物流",
    detail:
      "川崎港の物流拠点エリア。冷凍冷蔵倉庫・自動倉庫・3PL大手の関東基幹拠点が立地。羽田空港近接の立地優位性で航空貨物連携にも強み。",
  },
  {
    label: "横浜市鶴見・神奈川区 — 内陸物流ハブ",
    detail:
      "首都高湾岸線・横羽線・第三京浜の結節点エリア。EC流通向けの自動仕分け倉庫・常温物流拠点が集積し、中堅特別高圧・高圧の需要家が多数立地。",
  },
  {
    label: "厚木・海老名・座間 — 圏央道内陸物流拠点",
    detail:
      "圏央道沿線・東名高速結節点として内陸物流拠点が拡大中。新規大型物流施設の開発が継続し、東京電力PGへの新規受電申込が増加しています。",
  },
  {
    label: "電力会社・特高変電所立地",
    detail:
      "東京電力パワーグリッドの特高変電所が横浜・川崎の物流エリアに分散立地。物流事業者は変電所近接立地で接続コストを最小化する戦略。新規倉庫立地では系統容量を踏まえた変電所選定が重要に。",
  },
];

const switchingReality = [
  {
    label: "神奈川物流倉庫の新電力浸透度",
    detail:
      "大型冷凍冷蔵倉庫・自動倉庫では競争入札による新電力選定が標準化。長期固定3〜5年契約＋再エネ調達枠＋RE100対応のセット提案が主流。中堅・中規模倉庫でも東電EP継続から新電力切替へのシフトが進行中で、神奈川県全体での新電力比率は東京エリア平均（30〜35%）を上回ると見られます。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年のJEPX高騰で物流倉庫事業者の多くが市場連動から固定回帰。年間使用量億kWh級の冷凍冷蔵倉庫では高騰時のキャッシュフロー影響が深刻で、固定3〜5年＋燃調上限ありが主流に。3PL契約への単価転嫁難易度も固定化を後押し。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・災害時復旧体制（神奈川県は2019年台風被害の教訓）・大規模需要家対応の専属体制。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。年間1億kWh級倉庫では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（神奈川×物流倉庫固有）",
    detail:
      "①特別高圧／高圧の冷凍冷蔵倉庫供給実績、②非化石証書／再エネトラッキング付メニュー（3PL大手RE100対応）、③長期固定3〜5年の単価安定性、④燃調上限・連動条件、⑤BCP対応（神奈川県は台風影響地域）、⑥オフサイトPPA・VPPAの仲介力の6点が重要です。",
  },
  {
    label: "倉庫屋根太陽光・蓄電池併用の主流化",
    detail:
      "物流倉庫は屋根面積が大きい（1〜3万m²超）ため、屋根太陽光1〜10MW級のオンサイトPPA・自家消費が現実的な打ち手。蓄電池併用でピーク需要削減・BCP対応の3効果。3PL大手のRE100対応投資との組合せで導入加速中です。",
  },
];

const energySaving = [
  {
    label: "冷凍機の高効率インバータ更新＋COP改善",
    detail:
      "冷凍冷蔵倉庫の冷凍機を高効率インバータ式に更新し、COP（成績係数）を改善することで冷却電力▲20〜30%。半閉鎖型レシプロ→インバータスクリュー、インバータターボ等への切替で大きな効果。SII補助1/2＋県補助の併用で投資回収 3〜4年。",
  },
  {
    label: "庫内ファン高効率化＋デフロスト最適化",
    detail:
      "庫内ファンのEC（電子整流子）モーター化＋デフロスト（霜取り）の最適化で電力▲10〜15%。デフロスト頻度・タイミングを庫内温度・湿度センサー連動で自動制御することで、無駄な電力消費を削減。",
  },
  {
    label: "倉庫屋根オンサイト太陽光＋自家消費",
    detail:
      "物流倉庫は屋根面積1〜3万m²以上と広いため、屋根太陽光1〜10MW級の自家消費が現実的。初期投資ゼロ・PPA事業者が設備所有・自社は20年間の電力購入契約という形が標準。RE100算入＋電気代単価下げが両立できます。",
  },
  {
    label: "自動倉庫・自動仕分け機の運転スケジュール最適化",
    detail:
      "自動倉庫AS/RS・自動仕分け機の運転を需給予測連動で最適化することで、契約電力（kW）削減＋ピーク料金抑制が可能。EC配送のピーク時間帯と電力ピーク時間帯のずらしも有効です。BEMS導入＋AIによる需給予測との組合せで電力▲10〜15%が目安。",
  },
  {
    label: "BEMS導入＋WMS連動最適化",
    detail:
      "BEMS（建物エネルギーマネジメントシステム）でリアルタイム需要見える化＋WMS（Warehouse Management System）連動で、運用最適化を実現。庫内温度管理の最適化・出荷タイミング連動の冷凍機運転制御で電力▲10〜15%。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか（冷凍冷蔵は平準化されるため一致しやすい）",
  "冷凍機・庫内ファン・自動倉庫の年間使用kWhを工程別に把握しているか",
  "冷凍機のCOP（成績係数）と更新可能性を評価したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "全国系・物流特化型・再エネ特化型の新電力10社以上から相見積を取得したか",
  "3PL契約先・親会社のRE100要請に対する追加性ある再エネ調達計画があるか",
  "倉庫屋根オンサイト太陽光・蓄電池併用の試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "新規受電申込・系統増強コストを東電PGに確認したか",
  "神奈川県補助・横浜市/川崎市補助・SII・国交省物流補助・需要家主導型PPA補助の併用可否を整理したか",
  "デマンドレスポンス・容量市場・調整力公募への参加可能性を評価したか",
  "BCP（神奈川県は台風影響地域）の冷凍機・自動倉庫復旧優先度を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "なぜ神奈川県（特に京浜港湾）に大型冷凍冷蔵倉庫が集中しているのですか？",
    answer:
      "①横浜港・川崎港の輸入冷凍水産物・畜肉・冷凍食品の通関拠点として、②首都圏3,000万人の最大消費地への近接、③首都高湾岸線・東名高速・圏央道の物流結節点、④羽田空港近接の航空貨物連携、⑤特高変電所・大容量水道・通関体制等インフラの充実、の5点が複合的に作用しています。コロナ禍以降のEC・コールドチェーン需要拡大で新規倉庫開発も継続中です（出典: 国土交通省港湾統計・神奈川県港湾統計）。",
  },
  {
    question: "冷凍冷蔵倉庫の電力消費はなぜ大きいのですか？",
    answer:
      "F級（マイナス20℃以下）の冷凍倉庫では庫内温度を24時間365日維持する冷凍機・凝縮器・蒸発器・庫内ファン・除霜装置が連続稼働。容積1m³当たり年間使用電力は概ね30〜80kWh（断熱・温度帯による）で、容積1万m³の倉庫では年間30〜80万kWh、容積10万m³級の大型倉庫では年間300〜800万kWh規模に達します。冷却用電力が全電力の60〜80%を占めるとされる業種特性です（出典: 全国冷凍冷蔵倉庫業協会業界統計）。",
  },
  {
    question: "倉庫屋根太陽光は採算が合いますか？",
    answer:
      "屋根面積1万m²超の物流倉庫では十分に採算が合います。屋根太陽光1〜3MW級の場合、初期投資2〜6億円（補助金活用で1/2〜1/3）、年間発電量100〜300万kWh、自家消費単価20〜25円/kWh換算で投資回収5〜7年（補助込みで3〜5年）が目安。RE100対応の3PL大手案件では、PPA事業者経由で初期投資ゼロ・20年契約の長期PPAが主流です。",
  },
  {
    question: "市場連動プランは物流倉庫に向きますか？",
    answer:
      "冷凍冷蔵倉庫は原則として向きません。24時間連続冷却の業種特性で、年間使用量億kWh級では高騰時のキャッシュフロー影響が深刻。3PL契約への保管料金転嫁難易度も高いため、固定3〜5年＋燃調上限ありが主流。市場連動を選択する場合でも、ヘッジ手段（PPA・自家消費太陽光・蓄電池）の併用が前提となります。常温倉庫でも自動倉庫の電力消費が大きい場合は同様の判断が一般的です。",
  },
  {
    question: "EC拡大で物流倉庫の電力需要はどう変わりますか？",
    answer:
      "EC市場拡大により、①自動仕分け機・コンベア・搬送ロボット・ピッキングロボットの導入加速、②宅配連携のための仕分け頻度・出荷ピーク回数の増加、③コールドチェーン需要の拡大、により電力需要は中長期で増加基調。新規大型物流施設の開発が継続し、東京電力PGへの新規受電申込・系統増強コストの判断が立地戦略の重要要素となっています。",
  },
  {
    question: "3PL大手のRE100要請に倉庫事業者はどう対応すべきですか？",
    answer:
      "①倉庫屋根オンサイト太陽光＋蓄電池の自家消費、②オフサイトPPA・コーポレートPPAの調達、③非化石証書付き再エネメニューへの切替、④省エネ投資によるCO2原単位改善、の4方向で対応するのが定石。3PL契約獲得・継続のための事実上の必須要件となりつつあり、需要家主導型PPA補助金との組合せで投資ハードルを下げることが可能です。",
  },
  {
    question: "神奈川県の物流倉庫補助金は何が活用できますか？",
    answer:
      "神奈川県の中小企業省エネ・脱炭素設備導入補助、横浜市・川崎市の環境関連補助、国のSII省エネ補助、国土交通省物流効率化・脱炭素化補助、需要家主導型再エネ・PPA補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要。最新公募状況は神奈川県産業労働局・横浜市/川崎市・SII・国交省物流政策課の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "神奈川県の台風・地震BCPは物流倉庫運用にどう影響しますか？",
    answer:
      "神奈川県は2019年台風15号・19号で広域停電を経験し、また南海トラフ巨大地震の被害想定エリアでもあり、物流倉庫事業者は冷凍機の系統復旧優先度・自家発電（UPS＋ディーゼル）の燃料備蓄日数・代替倉庫拠点との連携を重視します。停電が長期化した場合、冷凍食品・医薬品の品質劣化リスクが極めて大きいため、BCP体制は経営最優先事項。物理的な復旧作業は東京電力PG（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・補償・自家発切替支援は小売事業者ごとに体制が異なるため、契約時に必ず確認してください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 法人向け料金プラン", url: "https://www.tepco.co.jp/ep/corporate/" },
  { name: "東京電力パワーグリッド 系統情報公開", url: "https://www.tepco.co.jp/pg/" },
  { name: "神奈川県 港湾統計・産業労働政策", url: "https://www.pref.kanagawa.jp/" },
  { name: "横浜市 港湾局・経済局", url: "https://www.city.yokohama.lg.jp/" },
  { name: "国土交通省 物流動向統計", url: "https://www.mlit.go.jp/" },
  { name: "全国冷凍冷蔵倉庫業協会", url: "https://www.jarw.or.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function KanagawaLogisticsWarehouseElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kanagawa-logistics-warehouse-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "神奈川県の物流倉庫の電気料金", url: "https://simulator.eic-jp.org/kanagawa-logistics-warehouse-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">神奈川県の物流倉庫の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            神奈川県の物流倉庫の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            神奈川県は横浜港・川崎港の京浜港湾を核とする日本最大級の物流ハブで、冷凍冷蔵倉庫・自動倉庫・3PL大手の関東基幹拠点が集積しています。本ページでは「神奈川県 × 物流倉庫」というクロス領域に絞り、東京電力エリア固有の単価事情と、24時間冷却・自動倉庫・EC拡大・PPA調達までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>横浜港・川崎港の物流倉庫集積と電力プロファイル</li>
              <li>大型冷凍冷蔵自動倉庫／中堅常温物流／中規模冷凍冷蔵のBefore/After削減事例</li>
              <li>東京電力エリアの単価水準と冷凍冷蔵負荷率割引</li>
              <li>3PL大手RE100対応と倉庫屋根太陽光PPAの導入</li>
              <li>神奈川×物流倉庫に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「神奈川 × 物流倉庫」のクロス領域に特化したガイドです。神奈川県全体の文脈は{" "}
            <Link href="/kanagawa-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              神奈川県の法人電気料金完全ガイド
            </Link>
            、業種一般としての倉庫業全体は{" "}
            <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              倉庫業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              神奈川県の物流倉庫集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県、特に京浜港湾は日本最大級の物流ハブとして、冷凍冷蔵倉庫・自動倉庫・3PL大手の関東基幹拠点が連続立地しています。24時間冷却・自動仕分け・EC連携など特殊な電力プロファイルと、AI需要急増による系統容量逼迫が現在の最大論点です。
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
              神奈川県全体の文脈は{" "}
              <Link href="/kanagawa-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                神奈川県の法人電気料金ガイド
              </Link>
              、東京電力エリア全体は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                倉庫業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東京電力エリアの主要電力会社・新電力（神奈川×物流倉庫での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県内の物流倉庫は、東電EPに加えて全国系新電力・物流特化型・再エネ特化型・東京ガス系と多様なプレイヤーが供給。大型冷凍冷蔵倉庫・自動倉庫では競争入札が標準化し、中堅・中規模倉庫でも切替シフトが進行中です。
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
              東京電力エリアの料金水準と物流倉庫への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、冷凍冷蔵倉庫の負荷率割引、電気代の物流原価への影響を、物流倉庫の代表的な契約タイプ別に整理します。
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
              規模別事例3件 — 大型冷凍冷蔵自動倉庫／中堅常温物流／中規模冷凍冷蔵（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県内の代表的な3規模の物流倉庫で、契約見直し＋冷凍機更新＋屋根太陽光＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">倉庫業の電気料金見直し</Link>
              、{" "}
              <Link href="/transportation-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">運輸業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              神奈川×物流倉庫固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川物流倉庫の電気代上昇は、冷凍冷蔵24h絶対需要・EC拡大による電力需要増・東電エリアの燃調感応度・3PL契約の単価転嫁難・3PL大手RE100要請の5要因が複合的に作用します。
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
              補助金・優遇制度 — 神奈川県・横浜/川崎市・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県の中小企業省エネ補助、横浜市・川崎市の環境関連補助、国のSII省エネ補助、国交省物流効率化・脱炭素化補助、需要家主導型再エネ・PPA補助の5層を組合せ、物流倉庫投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（本牧・南本牧・大黒／東扇島・浮島／鶴見・神奈川／圏央道）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県内の物流倉庫立地は、横浜港の本牧・南本牧・大黒、川崎港の東扇島・浮島・千鳥町、内陸ハブの鶴見・神奈川区、圏央道沿線の厚木・海老名・座間という構造。それぞれ電力プロファイルと系統容量が異なります。
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
              電力会社切替の実情 — 東電EPと新電力の比較（物流倉庫版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大型冷凍冷蔵倉庫・自動倉庫では競争入札が標準化、中堅倉庫でも切替余地大、市場連動からの固定回帰、3PL大手RE100要請による再エネ調達主流化、倉庫屋根太陽光・蓄電池併用の主流化が共通トレンドです。
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
              神奈川×物流倉庫の省エネ・自家消費事例（冷凍機高効率／庫内ファン／屋根太陽光／自動倉庫／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              物流倉庫の省エネは、冷凍機の高効率インバータ更新＋COP改善、庫内ファン高効率化＋デフロスト最適化、倉庫屋根オンサイト太陽光、自動倉庫運転スケジュール最適化、BEMS＋WMS連動の5軸が主力。大型・中堅・中規模いずれでも投資回収2〜4年で実現可能なメニューが揃っています。
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
              神奈川×物流倉庫 契約見直しチェックリスト（12項目）
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
              シミュレーターで神奈川×物流倉庫の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川物流倉庫は、24h冷凍冷蔵需要・EC拡大・東電燃調感応度・3PL契約硬直性など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・冷凍機更新投資・倉庫屋根太陽光のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した20〜22%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/kanagawa-business-electricity-cost", title: "神奈川県の法人電気料金ガイド（地域一般）", description: "神奈川県全体の文脈・東京電力エリア・京浜工業地帯。" },
              { href: "/warehouse-electricity-cost-review", title: "倉庫業の電気料金見直し（業種一般）", description: "冷凍冷蔵・常温・自動倉庫の業種別最適化。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し", description: "陸運・物流センターのEV充電・冷凍車両プレクール。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東京エリア全体の料金体系・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/ibaraki-logistics-electricity-cost", title: "茨城県の物流の電気料金", description: "東京電力エリアの圏央道物流クロス（兄弟ページ）。" },
              { href: "/chiba-datacenter-electricity-cost", title: "千葉県のデータセンターの電気料金", description: "東京電力エリアの印西DCクロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "冷凍冷蔵倉庫に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "物流倉庫で市場連動を避けるべき理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "東京エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "物流業の単価変動の主因。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "3PL大手RE100対応の追加性ある再エネ調達。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトvsオフサイトPPA", description: "倉庫屋根活用と外部調達の比較。" },
            ]}
          />

          <ContentCta
            heading="神奈川物流倉庫の電気代リスクを自社条件で試算する"
            description="横浜・川崎の冷凍冷蔵倉庫・自動倉庫・常温物流など神奈川物流固有の条件（東京電力エリア・24h冷却・EC拡大・3PL契約）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・冷凍機更新・倉庫屋根太陽光のROIもあわせて確認できます。"
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
            heading="神奈川の物流倉庫の電力契約見直し、専門家に相談しませんか？"
            description="大型冷凍冷蔵自動倉庫・中堅常温物流・中規模冷凍冷蔵いずれも特別高圧・高圧の規模感と3PL大手のRE100要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で神奈川県内物流事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
