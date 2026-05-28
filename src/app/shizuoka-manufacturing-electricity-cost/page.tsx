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
  "静岡県の製造業の電気料金完全ガイド｜浜松の輸送機器・楽器／富士の製紙と中部・東京2エリアの特別高圧契約";
const pageDescription =
  "静岡県の製造業に特化した法人電気代ガイド。浜松の輸送機器（スズキ・ヤマハ発動機・ホンダ）・楽器（ヤマハ・河合）、富士・富士宮の製紙の集積、富士川を境とした中部電力・東京電力の2エリア構造、抄紙機/プレス/塗装の電力プロファイル、特別高圧契約最適化を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "静岡県 製造業 電気料金",
    "浜松 輸送機器 楽器 電気代",
    "富士 製紙 電力",
    "中部電力 東京電力 富士川",
    "抄紙機 プレス 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shizuoka-manufacturing-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shizuoka-manufacturing-electricity-cost",
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
    label: "静岡県の製造業集積 — 東海道工業地帯の多様な業種",
    detail:
      "静岡県は製造品出荷額全国上位の工業県で、東海道沿いに多様な製造業が集積。浜松・磐田・湖西の輸送機器（スズキ・ヤマハ発動機・ホンダ二輪等）と楽器（ヤマハ・河合楽器）、富士・富士宮の製紙（王子・日本製紙・大興製紙等）、静岡市・東部の電機・食品・化学まで、業種の幅が広いのが特徴です。輸送機器・製紙はいずれも電力多消費の特別高圧需要家で、県内総電力需要の主要構成要素となっています（出典: 静岡県工業統計・経産省工業統計・各社統合報告書）。",
  },
  {
    label: "富士川を境とした2電力エリア構造 — 中部電力と東京電力",
    detail:
      "静岡県は日本でも珍しく、富士川を境に西側が中部電力エリア（60Hz）、東側が東京電力エリア（50Hz）に分かれます。浜松・磐田・湖西・静岡市は中部電力エリア、富士・富士宮・沼津・三島・御殿場等の東部は東京電力エリアです。富士の製紙工場は東京電力エリア、浜松の輸送機器は中部電力エリアと、立地により適用される電力会社・周波数・単価体系・燃調が異なる点が静岡固有の最重要論点です（出典: 中部電力・東京電力供給区域図／エネ庁）。",
  },
  {
    label: "輸送機器の電力プロファイル — プレス／塗装／溶接／組立",
    detail:
      "浜松・磐田・湖西の輸送機器工場（二輪・四輪・船外機・産業車両）では、プレス（サーボプレスの瞬間負荷）、塗装ライン（前処理・電着・乾燥）、溶接、組立、機械加工が電力消費の中心。スズキ・ヤマハ発動機・ホンダ等の完成車/二輪メーカーとTier1・Tier2サプライヤーが集積し、中部電力エリアの特別高圧・高圧需要家として立地します。",
  },
  {
    label: "製紙の電力プロファイル — 抄紙機・パルプ・乾燥の超大量消費",
    detail:
      "富士・富士宮の製紙工場は、抄紙機（巨大なロール群・大型モーター）、パルプ製造（叩解・精製）、乾燥（蒸気・電力）、排水処理が電力消費の中心。製紙は紙・板紙の生産に電力と蒸気を大量消費する装置産業で、1工場あたりの年間使用電力が数億kWh規模に達することも。富士地区は東京電力エリアの特別高圧超大型需要家が集積し、自家発電（黒液・バイオマス・石炭ボイラ）を併設する工場も多い構造です（出典: 日本製紙連合会統計・各社統合報告書）。",
  },
  {
    label: "楽器・電機の精密製造プロファイル",
    detail:
      "浜松の楽器（ヤマハ・河合楽器のピアノ・電子楽器・管楽器）は、木材加工・乾燥・塗装・精密組立・検査が中心。電機・電子部品の精密製造も静岡市・東部に立地。これらは輸送機器・製紙ほどの大量消費ではないものの、品質維持の空調・精密加工・乾燥工程で安定した電力需要を持ち、中部・東京両エリアに分布します。",
  },
];

const utilitiesList = [
  {
    name: "中部電力ミライズ（県西部・中部：浜松・磐田・湖西・静岡市）",
    role: "一般小売事業者（旧一電・60Hz）",
    detail:
      "静岡県西部・中部（富士川以西）の最大シェア。浜松・磐田・湖西の輸送機器・楽器工場の特別高圧需要家を抱える。『高圧電力AS／BS』『特別高圧電力』が主軸。中部電力エリアはLNG火力依存度が高く、2022〜2023年高騰時の燃調変動が大きかった点に注意が必要です。",
  },
  {
    name: "東京電力エナジーパートナー（県東部：富士・富士宮・沼津・三島）",
    role: "一般小売事業者（旧一電・50Hz）",
    detail:
      "静岡県東部（富士川以東）の最大シェア。富士・富士宮の製紙工場の特別高圧超大型需要家を抱える。『特別高圧電力』『業務用季節別時間帯別電力』が主軸。東京電力エリアもLNG火力依存度が高く燃調感応度が高い。同じ静岡県内でも富士川を境に契約先・周波数・単価体系が異なります。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・サミットエナジー・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "静岡県内の輸送機器Tier1・Tier2、製紙関連の中堅特別高圧／高圧で競争入札の対抗馬。固定単価3〜5年契約＋燃調連動メニューが標準。中部・東京いずれのエリアでも供給可能だが、エリアごとの供給力・周波数対応を確認する必要があります。",
  },
  {
    name: "再エネ特化型・コーポレートPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "完成車/二輪メーカー（スズキ・ヤマハ発動機等）・製紙大手のCN目標を受け、Tier1・Tier2や製紙関連でも追加性ある再エネ調達ニーズが拡大。輸送機器工場の屋根オンサイトPPA、製紙のバイオマス自家発電＋オフサイトPPA、コーポレートPPAの引合いが増加しています。",
  },
  {
    name: "製紙の自家発電（黒液・バイオマス・石炭ボイラ）",
    role: "自家発／卸電力",
    detail:
      "富士の大型製紙工場は、パルプ製造の副産物である黒液（リグニン）や木質バイオマス、石炭ボイラによる自家発電・蒸気供給を保有。買電と自家発電を組合せ、電力・蒸気の総合最適化を図ります。製紙は電力多消費でありながら、再エネ（バイオマス）自家発のポテンシャルも持つユニークな業種です。",
  },
  {
    name: "JEPX中部/東京エリアプライスの動向",
    role: "市場参照",
    detail:
      "静岡県内でも富士川以西は中部エリア、以東は東京エリアのJEPX価格が適用されます。両エリアともLNG火力依存で2022〜2023年に高水準で推移した時期も。輸送機器・製紙は操業負荷が大きく、固定契約＋燃調上限ありが主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "中部・東京エリアの特別高圧 — 製造業の単価水準",
    detail:
      "輸送機器・製紙の特別高圧（2,000kW超、年間数千万〜億kWh級）の電力量料金は標準メニューで概ね16〜20円/kWh+調整項目（中部・東京とも同程度）。燃料費調整額（2024〜2025年で+2.5〜+4.5円/kWh目安・両エリアともLNG依存で高め）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は23〜29円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安です。",
  },
  {
    label: "高圧電力 — Tier1・Tier2・楽器工場の単価",
    detail:
      "浜松・磐田のTier1・Tier2部品工場、楽器工場、製紙関連（500kW〜2,000kW級）の『業務用高圧電力』は17〜21円/kWh+調整項目。実質単価は24〜29円/kWhレンジ。新電力経由なら1〜3円/kWh安いケースが多く、中堅工場でも見直し効果が大きいレンジです。",
  },
  {
    label: "富士川を境とした単価・燃調の違い",
    detail:
      "中部電力（西部）と東京電力（東部）は標準単価水準は概ね同程度ですが、燃調の算定式・改定タイミング・電源構成が異なるため、時期により単価差が生じます。複数拠点を富士川の両側に持つ事業者は、エリア別に契約・燃調を管理する必要があり、新電力切替の際もエリアごとの最適化が求められます。",
  },
  {
    label: "製紙の電力・蒸気総合コストと自家発電",
    detail:
      "製紙は電力に加えて大量の蒸気（乾燥工程）を消費するため、電力単価だけでなく電力・蒸気の総合エネルギーコストで評価する必要があります。黒液・バイオマス・石炭ボイラによる自家発電・蒸気供給を保有する工場では、買電比率の戦略的調整が経営判断の中心。燃料価格・電力市場の状況に応じた最適化が重要です。",
  },
];

const industryImpact = [
  {
    title: "業種1: 輸送機器完成車/二輪工場（中部電力・特別高圧 15,000kW、年間 8,000万kWh）",
    before:
      "Before: 浜松・磐田エリアの輸送機器工場A（二輪・四輪・船外機等、プレス・溶接・塗装・組立を内製）。中部電力ミライズの特別高圧契約＋燃調連動。中部エリアのLNG依存で2023年度は燃調影響大、前年比+16%の電気代増加。年間電気代 約20億円。",
    after:
      "After: 全国系新電力との競争入札で固定3年・燃調上限あり契約獲得（再エネ比率付）／塗装ラインの低温硬化＋廃熱回収／プレスのサーボ化＋蓄電池併用／工場屋根PPA（8MW相当、自家消費＋RE100算入）／BEMS・需給予測AI導入。",
    result:
      "Result: 年間電気代 約20億円 → 約16億円（▲約20%、▲4億円・目安）／契約電力 15,000→13,500kW／RE100比率 約30%達成／メーカーCN目標準拠。",
  },
  {
    title: "業種2: 製紙工場（東京電力・特別高圧 30,000kW、年間 3億kWh）",
    before:
      "Before: 富士・富士宮エリアの大型製紙工場B（紙・板紙、抄紙機複数・パルプ製造・乾燥・排水処理）。東京電力の特別高圧契約＋黒液/バイオマス/石炭ボイラの自家発電併用。2023年度は燃調影響で買電単価上昇。年間電気代（買電分）約60億円。",
    after:
      "After: 燃調上限あり契約への条件改定／自家発電比率の引き上げ（黒液・バイオマスボイラの稼働最適化）／抄紙機モーターのインバータ高効率化（投資数十億円規模）／乾燥工程の廃熱回収＋蒸気効率化／排水処理の省エネ／非化石証書購入によるCN対応。",
    result:
      "Result: 年間電気代（買電分）約60億円 → 約49億円（▲約18%、▲11億円・目安）／買電比率縮小・自家発電寄与拡大／投資回収 数年（プロジェクト別）。",
  },
  {
    title: "業種3: 輸送機器Tier2・楽器工場（中部電力・高圧 1,500kW、年間 1,100万kWh）",
    before:
      "Before: 浜松エリアのTier2金属加工/楽器工場C（プレス・切削・木材加工・乾燥・塗装・精密組立）。中部電力ミライズの業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+16%の電気代増加。年間電気代 約2.8億円。",
    after:
      "After: 全国系新電力に固定2年・燃調上限ありで切替／プレスのサーボ化＋蓄電池／乾燥・塗装工程の高効率化＋廃熱回収／工場LED化（県補助＋SII併用、投資3,500万円）／コンプレッサー集中管理／屋根太陽光500kW自家消費。",
    result:
      "Result: 年間電気代 約2.8億円 → 約2.25億円（▲約20%、▲5,500万円・目安）／契約電力 1,500→1,350kW／投資回収 補助金後 2年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "富士川を境とした2エリア管理の複雑性",
    detail:
      "静岡県は富士川を境に中部電力（西・60Hz）と東京電力（東・50Hz）に分かれ、立地により契約先・周波数・単価体系・燃調が異なります。複数拠点を両側に持つ事業者は、エリア別の契約管理・新電力切替・燃調管理が必要で、これが静岡固有の経営上の論点です。",
  },
  {
    label: "製紙の電力・蒸気の大量消費",
    detail:
      "製紙の抄紙機・パルプ製造・乾燥工程は電力と蒸気を大量消費する装置産業。1工場で年間数億kWh規模の電力に加え大量の蒸気を要し、電力・蒸気の総合エネルギーコストでの評価・最適化が経営の中心です。自家発電（黒液・バイオマス）の活用が鍵となります。",
  },
  {
    label: "塗装ライン・プレスの電力負荷（輸送機器）",
    detail:
      "輸送機器工場の塗装ライン（前処理・電着・乾燥）は全エネルギーの相当部分を占め、プレスの瞬間ピークが契約電力を押し上げます。塗装の低温硬化化・廃熱回収、プレスのサーボ化＋蓄電池併用が単価最適化の主戦場です。",
  },
  {
    label: "中部・東京両エリアの燃調感応度",
    detail:
      "中部電力（浜岡原発停止のLNG依存）・東京電力（LNG依存）いずれも燃調感応度が高く、2022〜2023年高騰時には両エリアとも燃調が大きく拡大。輸送機器・製紙の特別高圧需要家で年間数億円規模の単価変動を経験。燃調上限契約の経営価値が高い構造です。",
  },
  {
    label: "メーカーのCN要請とサプライチェーン",
    detail:
      "スズキ・ヤマハ発動機等の完成車/二輪メーカー、製紙大手のCN目標を受け、Tier1・Tier2・製紙関連にもScope3対応の再エネ調達・CO2削減が要請されつつあります。電気代単価に加え、再エネ調達コストも経営計画に織り込む必要があります。",
  },
];

const subsidies = [
  {
    name: "静岡県 中小企業省エネ・脱炭素設備導入補助",
    target: "県内中小・中堅製造業の省エネ・脱炭素設備（プレス・乾燥・空調・LED・BEMS等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の中小企業支援補助。輸送機器Tier2・楽器・製紙関連の高効率設備更新で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "市町村独自補助（浜松・富士・磐田 等）",
    target: "市町村内の製造業の省エネ・再エネ設備",
    rate: "対象経費の1/4〜1/3、上限は市町村別",
    note: "浜松市『産業振興・脱炭素補助』、富士市『製紙業含む産業支援』等の市町村独自補助。県補助・SII補助との重層活用が可能なケースあり。最新公募状況は各市役所・商工会議所で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・コンプレッサー・サーボプレス・抄紙機モーター・乾燥機・LED等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "静岡県内の輸送機器・製紙・楽器工場の更新案件で採択実績多数。塗装省エネ・抄紙機高効率化・乾燥廃熱回収・コンプレッサー高効率化等で活用しやすい主力補助。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "輸送機器のEV関連設備・製紙のバイオマス自家発電・PPA関連設備の取得で活用可能。所管: 経産省・国税庁。工場新増設・自家発電投資の経営計画に組み込みやすい税制優遇。",
  },
  {
    name: "製紙業・装置産業向けバイオマス・省エネ補助",
    target: "製紙のバイオマス自家発電・黒液回収・乾燥省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "製紙の黒液・木質バイオマスボイラ・抄紙機省エネ等、装置産業特有の大型省エネ投資を後押しする補助。環境省・経産省・林野庁等の補助を組合せ可能。",
  },
];

const industryProfile = [
  {
    label: "浜松・磐田・湖西 — 輸送機器（中部電力エリア）",
    detail:
      "浜松市・磐田市・湖西市はスズキ本社・主力工場、ヤマハ発動機本社、ホンダ系等の輸送機器（二輪・四輪・船外機・産業車両）が集積。中部電力エリア（60Hz）で、完成車/二輪メーカー＋Tier1・Tier2サプライヤーが特別高圧・高圧需要家として立地します。",
  },
  {
    label: "浜松 — 楽器（ヤマハ・河合／中部電力エリア）",
    detail:
      "浜松市はヤマハ・河合楽器の本拠地で『楽器のまち』。ピアノ・電子楽器・管楽器の製造で、木材加工・乾燥・塗装・精密組立・検査の電力負荷を持つ。中部電力エリアの高圧・特別高圧需要家です。",
  },
  {
    label: "富士・富士宮 — 製紙（東京電力エリア）",
    detail:
      "富士市・富士宮市は王子・日本製紙・大興製紙等の製紙工場が集積する日本有数の製紙産地。富士川以東のため東京電力エリア（50Hz）で、抄紙機・パルプ・乾燥の超大型特別高圧需要家。黒液・バイオマス自家発電を併設する工場が多い。",
  },
  {
    label: "静岡市・東部 — 電機・食品・化学",
    detail:
      "静岡市（中部電力エリア）、沼津・三島・御殿場等の東部（東京電力エリア）には電機・電子部品・食品・化学・医薬の製造業が分布。富士川を境に電力エリアが分かれ、中堅特別高圧・高圧の需要家が立地します。",
  },
  {
    label: "電力会社・系統・富士川境界",
    detail:
      "静岡県は富士川を境に中部電力（西・60Hz）と東京電力（東・50Hz）の供給区域に分かれる全国でも珍しいエリア。両電力の特高変電所が県内に分散立地し、立地により周波数・契約先・単価体系が異なるため、製造業の電力管理が複雑な構造です。",
  },
];

const switchingReality = [
  {
    label: "静岡の製造業の新電力浸透度",
    detail:
      "中部・東京両エリアとも新電力切替が進行中。輸送機器・製紙の大型特別高圧では競争入札が標準化、Tier2・楽器工場でも切替余地大。エリアが分かれるため、新電力選定時はエリアごとの供給力・周波数対応の確認が必要です。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で製造業の多くが市場連動から固定回帰。中部・東京両エリアともLNG依存で燃調変動が大きかったため、固定3〜5年＋燃調上限ありが特に強く支持されます。メーカーCN対応で非化石証書付き／再エネトラッキング付きメニューも標準化。",
  },
  {
    label: "中部電力ミライズ・東電EP継続のメリット・デメリット",
    detail:
      "メリット: 両エリアとも安定供給・大口需要家対応・自家発電連系支援（製紙）・災害時BCP対応（南海トラフ・富士山想定）。デメリット: 両エリアともLNG依存で燃調感応度が高い・新電力比1〜3円/kWh単価が高め。特別高圧需要家では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（静岡×製造業固有）",
    detail:
      "①拠点の電力エリア（富士川以西＝中部／以東＝東京）の正確な把握、②エリア別の供給力・周波数対応、③燃調上限・連動条件、④非化石証書／再エネトラッキング（メーカーCN対応）、⑤製紙は電力・蒸気の総合最適化、⑥BCP対応（南海トラフ・富士山想定）の6点が重要です。",
  },
  {
    label: "PPA・自家発電・バイオマス活用",
    detail:
      "輸送機器は屋根オンサイトPPA、製紙は黒液・バイオマス自家発電＋オフサイトPPAと、業種により再エネ調達アプローチが異なります。メーカーCN目標と歩調を合わせ、両エリアの再エネ電源との長期PPA契約も拡大しています。",
  },
];

const energySaving = [
  {
    label: "塗装ライン低温硬化＋廃熱回収（輸送機器）",
    detail:
      "塗装ラインの乾燥炉温度を低温化することで電力▲20〜30%。乾燥炉排熱を前処理・電着の温水加熱に再利用することで全体エネルギーを最適化。SII補助＋県補助の併用で投資回収 3〜4年。",
  },
  {
    label: "抄紙機モーターの高効率化＋乾燥廃熱回収（製紙）",
    detail:
      "抄紙機の大型モーターのインバータ高効率化、乾燥工程（蒸気）の廃熱回収・効率化で電力・蒸気▲10〜20%。製紙の装置産業特有の大型省エネ投資で、SII補助・GX税制・バイオマス補助との組合せで投資回収を短縮可能。",
  },
  {
    label: "プレスのサーボ化＋蓄電池併用（輸送機器）",
    detail:
      "油圧プレスをサーボプレスに更新で電力▲15〜25%、回生電力を蓄電池に貯めることでピーク需要▲10〜15%。契約電力（kW）削減で基本料金が直接下がり、投資回収 補助金活用で2〜3年。",
  },
  {
    label: "製紙のバイオマス自家発電・黒液活用",
    detail:
      "パルプ製造の副産物である黒液（リグニン）・木質バイオマスを燃料とする自家発電・蒸気供給で、買電量削減＋再エネ（バイオマス）活用を両立。電力市場・燃料価格に応じた自家発電比率の最適化が経営判断の中心。GX税制・バイオマス補助で投資ハードルを下げられます。",
  },
  {
    label: "屋根太陽光＋BEMS（輸送機器・楽器）",
    detail:
      "輸送機器・楽器工場の屋根太陽光自家消費＋BEMSによる需要見える化で、RE100算入＋電気代単価下げ＋ピーク需要削減。メーカーCN対応の再エネ調達手段としても有効。需要家主導型補助との組合せで投資回収 5〜7年（補助込みで3〜5年）。",
  },
];

const checklistItems = [
  "自社拠点が中部電力エリア（富士川以西・60Hz）か東京電力エリア（以東・50Hz）か正確に把握しているか",
  "複数拠点を富士川の両側に持つ場合、エリア別に契約・燃調を管理しているか",
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "塗装/プレス（輸送機器）・抄紙機/乾燥（製紙）の年間使用kWhを工程別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中部電力・東京電力の最新単価でエリア別に再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力10社以上から相見積を取得した（エリア別供給力確認含む）か",
  "メーカー（スズキ・ヤマハ発動機等）・製紙大手からのScope3/CN要請に対応する再エネ調達計画があるか",
  "製紙は電力・蒸気の総合エネルギーコスト・自家発電比率の最適化を検証したか",
  "屋根オンサイトPPA・バイオマス自家発電の試算を実施したか",
  "静岡県補助・市町村補助・SII・GX税制・製紙バイオマス補助の併用可否を整理したか",
  "BCP（南海トラフ・富士山噴火想定）の自家発・蓄電池・系統復旧優先度を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "静岡県の製造業はなぜ電力エリアが2つに分かれているのですか？",
    answer:
      "静岡県は日本の電力系統の東西境界（50Hz/60Hz境界）に位置し、富士川を境に西側が中部電力エリア（60Hz）、東側が東京電力エリア（50Hz）に分かれます。浜松・磐田・湖西・静岡市の輸送機器・楽器は中部電力エリア、富士・富士宮の製紙は東京電力エリアです。立地により契約先・周波数・単価体系・燃調が異なるため、複数拠点を両側に持つ事業者はエリア別の電力管理が必要で、これが静岡固有の最重要論点です（出典: 中部電力・東京電力供給区域図）。",
  },
  {
    question: "製紙工場で電力消費が大きいのはなぜですか？",
    answer:
      "製紙は抄紙機（巨大なロール群・大型モーター）、パルプ製造（叩解・精製）、乾燥（蒸気・電力）、排水処理に電力と蒸気を大量消費する装置産業です。1工場あたりの年間使用電力が数億kWh規模に達することもあり、電力に加えて大量の蒸気を要するため、電力・蒸気の総合エネルギーコストで評価する必要があります。富士の大型製紙工場では黒液・バイオマス・石炭ボイラの自家発電・蒸気供給を併設し、買電比率を戦略的に調整しています（出典: 日本製紙連合会統計）。",
  },
  {
    question: "富士川の東西で電気代の単価は違いますか？",
    answer:
      "中部電力（西部）と東京電力（東部）の標準単価水準は概ね同程度ですが、燃料費調整額の算定式・改定タイミング・電源構成が異なるため、時期により単価差が生じます。両エリアともLNG火力依存度が高く燃調感応度は高めです。複数拠点を富士川の両側に持つ事業者は、エリアごとに契約・燃調・新電力切替を最適化する必要があります（出典: 中部電力・東京電力単価実績）。",
  },
  {
    question: "輸送機器工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的に塗装ライン（前処理・電着・乾燥）が大きな比率を占め、次いでプレス（サーボプレスの瞬間負荷）、溶接、組立、機械加工が続きます。塗装の低温硬化化・乾燥炉廃熱回収、プレスのサーボ化＋蓄電池併用が電力単価最適化の主戦場です。スズキ・ヤマハ発動機等のメーカーはCN目標を掲げており、サプライヤーにも省エネ・再エネ調達が要請されつつあります。",
  },
  {
    question: "製紙のバイオマス自家発電は電気代削減になりますか？",
    answer:
      "なります。製紙はパルプ製造の副産物である黒液（リグニン）や木質バイオマスを燃料とする自家発電・蒸気供給を行うことで、買電量を削減しつつ再エネ（バイオマス）を活用できます。電力市場価格・燃料価格に応じて自家発電比率を戦略的に調整し、燃調高騰時には自家発電を最大化、安価な時期には買電比率を上げるなどの最適化が経営判断の中心。GX税制・バイオマス補助との組合せで投資ハードルを下げられます。",
  },
  {
    question: "静岡で複数拠点を持つ場合の電力契約のコツは？",
    answer:
      "①各拠点の電力エリア（富士川以西＝中部／以東＝東京）の正確な把握、②エリア別の契約・燃調・単価の管理、③新電力切替時のエリア別供給力・周波数対応の確認、④可能であれば全拠点を見渡した一括交渉（複数エリアでも一定の交渉力を確保）、の4点が重要です。エリアをまたぐことで管理は複雑になりますが、新電力にとっては複数拠点の取引獲得メリットがあり、交渉余地が生まれます。",
  },
  {
    question: "静岡県の製造業向け補助金は何が活用できますか？",
    answer:
      "静岡県の中小企業省エネ・脱炭素設備導入補助、市町村独自補助（浜松・富士・磐田等）、国のSII省エネ補助、GX・CN投資促進税制、製紙業・装置産業向けバイオマス・省エネ補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要。最新公募状況は静岡県経済産業部・各市町村・SII・経産省/林野庁の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "南海トラフ・富士山噴火のBCPは製造業としてどう備えるべきですか？",
    answer:
      "静岡県は南海トラフ巨大地震の被害想定エリアであり、富士山噴火（降灰）のリスクもあります。製造業では自家発電（ディーゼル・ガス）・燃料備蓄・系統復旧優先度・代替拠点連携・降灰対策（吸気フィルタ・設備保護）を重視します。製紙は自家発電を持つため一定のエネルギー自立性がありますが、輸送機器は系統依存度が高いため備えが重要。物理的な復旧作業は中部電力/東京電力のネットワーク会社（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・自家発切替支援は小売事業者ごとに体制が異なるため、契約時に確認してください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中部電力ミライズ 法人向け料金プラン", url: "https://miraiz.chuden.co.jp/" },
  { name: "東京電力エナジーパートナー 法人向け料金プラン", url: "https://www.tepco.co.jp/ep/corporate/" },
  { name: "日本製紙連合会 統計・環境", url: "https://www.jpa.gr.jp/" },
  { name: "静岡県 経済産業部 産業政策", url: "https://www.pref.shizuoka.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function ShizuokaManufacturingElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/shizuoka-manufacturing-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "静岡県の製造業の電気料金", url: "https://simulator.eic-jp.org/shizuoka-manufacturing-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">静岡県の製造業の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            静岡県の製造業の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            静岡県は東海道工業地帯として、浜松の輸送機器・楽器、富士の製紙を中心に多様な製造業が集積する工業県です。本ページでは「静岡県 × 製造業」というクロス領域に絞り、富士川を境とした中部電力・東京電力の2エリア構造という静岡固有の論点と、抄紙機/プレス/塗装の電力プロファイル、製紙の自家発電、特別高圧契約最適化までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>浜松の輸送機器・楽器、富士の製紙の集積と電力プロファイル</li>
              <li>富士川を境とした中部電力（西・60Hz）/東京電力（東・50Hz）の2エリア構造</li>
              <li>輸送機器／製紙／Tier2楽器工場のBefore/After削減事例</li>
              <li>製紙の電力・蒸気総合最適化と黒液/バイオマス自家発電</li>
              <li>静岡×製造業に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「静岡 × 製造業」のクロス領域に特化したガイドです。静岡県全体の文脈は{" "}
            <Link href="/shizuoka-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              静岡県の法人電気料金完全ガイド
            </Link>
            、業種一般としての組立工場全体は{" "}
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
              静岡県の製造業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡県は製造品出荷額全国上位の工業県で、浜松の輸送機器・楽器、富士の製紙を中心に多様な製造業が集積しています。富士川を境とした中部電力・東京電力の2エリア構造という全国でも珍しい特性が、静岡の製造業の電力事情の最大の論点です。
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
              静岡県全体の文脈は{" "}
              <Link href="/shizuoka-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                静岡県の法人電気料金ガイド
              </Link>
              、中部電力エリアは{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中部電力エリア事情
              </Link>
              、東京電力エリアは{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中部・東京エリアの主要電力会社・新電力（静岡×製造業での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡県内の製造業は、富士川以西が中部電力ミライズ、以東が東京電力EPを軸に、全国系新電力・再エネ特化型・製紙の自家発電と多様な供給形態が併存。エリアごとの供給力・周波数対応の確認が新電力切替の前提です。
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
              中部・東京エリアの料金水準と製造業への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、富士川を境とした単価・燃調の違い、製紙の電力・蒸気総合コストを、製造業の代表的な契約タイプ別に整理します。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・電力エリア・新電力選定で変動します。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 輸送機器（中部）／製紙（東京）／Tier2楽器（中部）（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡県内の代表的な3規模・2エリアの製造業で、契約見直し＋設備対策＋自家発電/PPAの組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              静岡×製造業固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡製造業の電気代上昇は、富士川2エリア管理の複雑性・製紙の電力蒸気大量消費・塗装プレス負荷（輸送機器）・中部東京両エリアの燃調感応度・メーカーCN要請の5要因が複合的に作用します。
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
              補助金・優遇制度 — 静岡県・市町村・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡県の中小企業省エネ補助、市町村独自補助（浜松・富士・磐田等）、国のSII省エネ補助、GX投資促進税制、製紙業向けバイオマス・省エネ補助の5層を組合せ、製造業の更新投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（浜松磐田湖西／浜松楽器／富士富士宮／静岡東部）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡の製造業は、浜松磐田湖西の輸送機器（中部）、浜松の楽器（中部）、富士富士宮の製紙（東京）、静岡市・東部の電機食品化学、富士川境界という構造です。
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
              電力会社切替の実情 — 中部/東京電力と新電力の比較（製造業版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              輸送機器・製紙の大型特別高圧では競争入札が進行中、Tier2・楽器工場でも切替余地大、市場連動からの固定回帰、メーカーCN対応の再エネ調達、製紙のバイオマス自家発電活用が共通トレンドです。
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
              静岡×製造業の省エネ・自家消費事例（塗装／抄紙機／プレス／バイオマス／屋根太陽光）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造業の省エネは、塗装ライン低温硬化＋廃熱回収（輸送機器）、抄紙機モーター高効率化＋乾燥廃熱回収（製紙）、プレスのサーボ化＋蓄電池、製紙のバイオマス自家発電・黒液活用、屋根太陽光＋BEMSの5軸が主力。輸送機器・製紙・楽器いずれでも投資回収2〜数年で実現可能です。
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
              静岡×製造業 契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。特に電力エリア（富士川以西/以東）の正確な把握が静岡では最重要です。
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
              シミュレーターで静岡×製造業の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              静岡の製造業は、2エリア管理の複雑性・製紙の大量消費・塗装プレス負荷・両エリアの燃調感応度など複合リスクを抱えます。シミュレーターで自社条件（電力エリア別）の上振れ幅を試算し、固定プラン切替・設備更新・自家発電/PPAのメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件（中部/東京エリア別）での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した18〜20%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/shizuoka-business-electricity-cost", title: "静岡県の法人電気料金ガイド（地域一般）", description: "静岡県全体の文脈・中部/東京2エリア・東海道工業地帯。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し（業種一般）", description: "組立・加工製造業の業種別最適化。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し（業種一般）", description: "輸送機器Tier1/Tier2の業種別最適化。" },
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情", description: "浜松・磐田・湖西の中部電力エリア（60Hz）。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "富士・富士宮の東京電力エリア（50Hz）。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "中部電力エリアのトヨタ系完成車クロス（兄弟ページ）。" },
              { href: "/osaka-sme-factory-electricity-cost", title: "大阪府の中小製造業・町工場の電気料金", description: "関西電力エリアの中小製造業クロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "製造業に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "高騰時の経営影響を踏まえた選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "中部・東京エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "両エリアの感応度の高さを理解。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "メーカーCN対応の追加性ある再エネ調達。" },
            ]}
          />

          <ContentCta
            heading="静岡の製造業の電気代リスクを自社条件で試算する"
            description="浜松の輸送機器・楽器・富士の製紙など静岡の製造業固有の条件（中部/東京2エリア・富士川境界・塗装/抄紙機・メーカーCN）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・設備更新・自家発電/PPAのROIもあわせて確認できます。"
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
            heading="静岡の製造業の電力契約見直し、専門家に相談しませんか？"
            description="輸送機器・製紙・楽器いずれも特別高圧の規模感と富士川2エリア構造・メーカーCN要請が絡み合い、エリア別の契約・調達・自家発電・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で静岡県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
