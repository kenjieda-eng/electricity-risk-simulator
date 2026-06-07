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
  "佐賀県の法人電気料金完全ガイド｜九州電力エリア単価分析・有田焼窯業・玄海原発立地・農業の契約最適化";
const pageDescription =
  "佐賀県の法人電気料金を地域特化で解説。九州電力エリアの単価水準を業種別に再加工して提示し、有田焼・伊万里焼の窯業（燃焼炉）、玄海原発立地県メリット、米・麦・畜産農業、唐津港物流の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "佐賀県 法人電気料金",
    "九州電力 高圧 単価",
    "有田焼 伊万里焼 窯業 電気代",
    "玄海原発 立地県 電気代",
    "佐賀 農業 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/saga-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/saga-business-electricity-cost",
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
    label: "九州電力エリアと佐賀県の系統",
    detail:
      "佐賀県は九州電力エリアに属し、玄海原発（3・4号機）の立地県。県内総電力需要は約60億kWhで九州エリア比較的小規模、有田焼・伊万里焼窯業（伊万里市・有田町）が約15%、米・麦・畜産農業（県全域）が約20%、唐津港・伊万里港の物流が約15%、佐賀市・鳥栖市の都市圏オフィス・商業が約30%、住宅・小規模事業者が約20%の構成。",
  },
  {
    label: "電源構成 — 玄海原発立地県のメリット",
    detail:
      "九州電力管内は玄海3・4号機、川内1・2号機の原発稼働により、エリア電源構成は原子力約35%、太陽光等再エネ約20%、LNG火力約25%、石炭火力約15%、その他5%。佐賀県は玄海原発の立地県として地域振興補助金・電気料金優遇制度の恩恵を一部受ける。県内には九電の玄海原子力発電所が立地。",
  },
  {
    label: "気象条件 — 温暖湿潤・有明海特有の気候",
    detail:
      "県内は温暖湿潤気候で夏季は高温多湿、冬季は比較的穏やか。年間冷房度日（CDD24）1,500〜1,700、暖房度日400〜600。佐賀平野は有明海特有の濃霧・低気圧発達もあり、農業・窯業の品質管理に温湿度制御が重要。窯業の電気炉・ガス炉は連続稼働で電気代の影響を強く受ける。",
  },
  {
    label: "需給ひっ迫 — 太陽光出力制御活用機会",
    detail:
      "九州電力管内は太陽光大量導入により昼間余剰、夕方ひっ迫の二重構造。佐賀県内事業者には太陽光出力制御対応のDR（デマンドレスポンス）参加や蓄電池併設による昼夜シフトの機会が広がっている。窯業の電気炉稼働時間調整による昼間活用が経済的。",
  },
  {
    label: "県内産業構造 — 有田伊万里窯業・玄海原発・農業・佐賀鳥栖都市圏",
    detail:
      "有田町・伊万里市は世界的に有名な有田焼・伊万里焼の窯業集積地（陶磁器・磁器の電気炉・ガス炉）。玄海町は玄海原発立地。県全域で米（佐賀米）・小麦・大豆・玉ねぎ・玉露茶等の農業、肉用牛・豚等の畜産。佐賀市・鳥栖市は都市圏オフィス・商業、鳥栖物流拠点（高速道路インターチェンジ）。唐津港・伊万里港は中継物流。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（送配電は九州電力送配電）",
    role: "一般小売事業者・地元電力",
    detail:
      "県内シェア最大、規制料金・自由料金両方を提供。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』。2023年6月に規制料金値上げを実施したが、原発稼働により値上げ幅は東日本各社より小幅に留まった。玄海原発立地県として地域振興メニューも一部適用。",
  },
  {
    name: "九電みらいエナジー・西部ガス系新電力",
    role: "九州電力グループ系・地域密着型",
    detail:
      "佐賀市・鳥栖市の地域密着型新電力。九電グループおよび西部ガス系の電気・ガスセット契約で都市圏オフィス・商業向け営業力を持つ。県内火力・再エネとの連携でメニュー展開。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき・Looopでんき",
    role: "全国系新電力",
    detail:
      "九州電力エリアで法人向け高圧契約に展開。有田・伊万里窯業の中規模事業者や鳥栖物流の高圧契約で実績。固定単価3年契約や燃料費調整額上限ありメニューを展開。",
  },
  {
    name: "イーレックス・エネット",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。佐賀県内の大型物流施設・窯業大手・鳥栖物流の大口需要にも対応。",
  },
  {
    name: "地域系・農協系新電力",
    role: "地域密着型",
    detail:
      "JAさが系の農業向け電気契約、佐賀県内のガス系新電力、地元商工会連携系の地域密着型新電力。中小事業者・農業法人向けの省エネ提案やCO2フリー電源メニューも展開。",
  },
  {
    name: "新電力市場の構造",
    role: "市場動向",
    detail:
      "佐賀県の新電力シェアは2024年時点で約15〜20%（全国平均より低水準）。有田伊万里窯業大手と鳥栖物流の高圧契約で新電力切替が進む一方、中小事業者・農業法人は九州電力継続が多数派。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "九州電力『高圧電力A』の電力量料金は16〜20円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+1.5〜+2.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は22〜27円/kWhレンジ。全国平均に近い水準で、新電力切替により1〜2円/kWh改善余地あり。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金14〜17円/kWh+調整項目。佐賀県内では有田焼・伊万里焼窯業大手、鳥栖物流の大型物流施設、佐賀市内の大型商業施設・データセンターが対象。本州エリアより1〜2円/kWh安い水準で、競争入札による更なる1〜3円/kWh削減余地あり。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "九州電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜21円/kWh。佐賀市・鳥栖市の中小オフィス・有田町伊万里市の中小窯業事業者・農業法人は低圧電灯中心。",
  },
  {
    label: "玄海原発立地県メリット",
    detail:
      "九州電力は玄海・川内原発の安定稼働により、燃料費調整額の上振れリスクが本州各社より低い。佐賀県は玄海原発立地県として、地域振興補助金・電源立地地域対策交付金等の優遇制度を一部受ける。県内事業者の競争優位として活用可能。",
  },
];

const ppsNetUnitData = [
  {
    label: "九州電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、九州電力エリアの特別高圧電力単価は2024年度実績で約14〜17円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より2〜3円/kWh安く、原発稼働の影響が反映されている。佐賀県内の有田焼伊万里焼窯業大手、鳥栖物流大手、大型商業施設・データセンターにとっては、競争入札による更なる1〜3円/kWh削減で年間1,000万〜1億円規模のコスト削減余地。",
  },
  {
    label: "九州電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は16〜20円/kWh、本州エリアより1〜2円/kWh安い。県内中規模事業者（有田町伊万里市窯業中堅、鳥栖物流中堅、佐賀市内オフィス・商業）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、佐賀県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替で年間100〜300万円規模のコスト削減が見込める。",
  },
  {
    label: "九州電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯17〜21円/kWhの水準で、全国平均と同水準。県内中小事業者（有田町伊万里市の中小窯業事業者・農業法人・小規模物流）は新電力切替で年間5〜30万円規模の削減余地が中心。太陽光自家消費・蓄電池併設で更なる効果。",
  },
  {
    label: "県内産業構造との接続 — 窯業・原発立地・農業・物流に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを佐賀県の産業構造に紐づけて再加工すると、①有田伊万里窯業大手の特高契約は競争入札＋電気炉インバータ・廃熱回収＋PPAで年間1,000万〜1億円の総合削減効果、②鳥栖物流の高圧契約（大型物流倉庫・冷凍冷蔵）は新電力切替＋屋根太陽光＋蓄電池で年間500万〜3,000万円の削減余地、③農業法人の低圧契約（施設園芸・畜舎・米麦倉庫）は新電力切替＋LED化＋空調最適化で年間50〜500万円の削減余地、という3層構造で契約判断を行うべき。玄海原発立地県メリット＋太陽光出力制御活用が県内事業者の競争優位。",
  },
];

const industryImpact = [
  {
    title: "業種1: 有田焼・伊万里焼窯業（有田町、特別高圧 2,500kW、年間 2,000万kWh)",
    before:
      "Before: 有田町の大型窯業A社（高級磁器・産業用陶磁器、電気炉・ガス炉24時間連続稼働）。年間電気代 4.8億円。電気炉（連続稼働・1,300℃焼成）・乾燥炉・成形機・空調が消費電力の80%。九電継続で固定費・燃料費調整額の変動リスクあり。",
    after:
      "After: 特別高圧の競争入札（複数全国系新電力で2.0円/kWh削減）／屋根太陽光2MW・敷地内太陽光1MW・蓄電池3MWh導入（需要家主導型PPA補助・SII補助・佐賀県補助併用、投資8億円）／電気炉インバータ更新・廃熱回収高度化／乾燥炉ヒートポンプ化／BEMS全工程導入。",
    result:
      "Result: 年間電気代 4.8億円 → 3.36億円（▲30%、▲1.44億円）／契約kW 2,500→2,300／太陽光自家消費比率 25%／投資回収 補助金後 4〜5年／RE100進捗 25%達成／CO2 ▲20%。",
  },
  {
    title: "業種2: 鳥栖物流・大型倉庫（鳥栖市、高圧 1,000kW、年間 800万kWh）",
    before:
      "Before: 鳥栖市の大型物流倉庫B社（24時間稼働、冷蔵・常温・冷凍倉庫併設、九州物流ハブ）。年間電気代 2.4億円。冷凍冷蔵設備・荷役機械・倉庫照明・空調が消費電力の80%。",
    after:
      "After: 高圧の固定3年契約（全国系新電力で1.8円/kWh削減）／屋根太陽光1MW・蓄電池2MWh導入（SII補助・佐賀県補助併用、投資3.5億円）／CO2冷媒インバータ化／断熱性能改善／LED全館化／BEMS導入。",
    result:
      "Result: 年間電気代 2.4億円 → 1.68億円（▲30%、▲7,200万円）／契約kW 1,000→900／太陽光自家消費比率 30%／投資回収 補助金後 4〜5年／RE100進捗 30%達成。",
  },
  {
    title: "業種3: 農業法人・施設園芸（佐賀市郊外、高圧 400kW、年間 320万kWh）",
    before:
      "Before: 佐賀市郊外の大型農業法人C社（トマト・玉ねぎ・玉露茶のハウス施設園芸、米・麦倉庫併設）。年間電気代 9,600万円。ハウス空調・照明・冷蔵倉庫・温湿度制御が消費電力の主要要素。",
    after:
      "After: 高圧の固定3年契約（地域系・農協系新電力で1.5円/kWh削減）／屋根太陽光400kW・蓄電池1MWh導入（SII補助・農水省補助併用、投資1.5億円）／ハウスLED化・断熱性能改善／空調インバータ化／BEMS導入。",
    result:
      "Result: 年間電気代 9,600万円 → 6,720万円（▲30%、▲2,880万円）／契約kW 400→360／太陽光自家消費比率 30%／投資回収 補助金後 4〜5年／RE100進捗 30%達成。",
  },
];

const costFactors = [
  {
    label: "窯業の連続稼働と電気代影響",
    detail:
      "有田焼・伊万里焼窯業は電気炉・ガス炉の24時間連続稼働が標準。1日でも休炉すると品質低下リスクがあり、電気代の影響を強く受ける。年間2,000万kWh使用の大型窯業で電気代5億円規模、燃料費調整額1円/kWh変動で年2,000万円の差として経営に直接影響。",
  },
  {
    label: "玄海原発立地県メリットと地域振興",
    detail:
      "佐賀県は玄海原発立地県として、電源立地地域対策交付金・原子力立地給付金等の優遇制度を一部受ける。県内事業者の競争優位として活用可能。一方、原発再稼働の議論や定期検査停止時の影響リスクも存在。",
  },
  {
    label: "太陽光出力制御と昼間余剰活用",
    detail:
      "九州電力管内は太陽光大量導入により、春秋の昼間に出力制御（カット）が頻発。佐賀県内事業者は太陽光自家消費の経済性が極めて高く、窯業の電気炉稼働時間調整による昼間活用も経済的。蓄電池併設による昼夜シフトの機会も大きい。",
  },
  {
    label: "農業の高付加価値化と電力需要",
    detail:
      "佐賀県は玉ねぎ全国2位、玉露茶、佐賀牛等の高付加価値農業に注力。施設園芸・冷蔵倉庫・畜舎の電力需要が増加傾向。農協系新電力・農水省補助との連携で電気代削減と高付加価値化の両立が可能。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間2,000万kWh使用の大型窯業で年8,000万円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・電気炉",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では有田伊万里窯業の電気炉・乾燥炉更新で大型採択実績多数。鳥栖物流の冷凍冷蔵・LED更新でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "佐賀県は太陽光出力制御頻発エリアとして、自家消費・近接PPAの効果が大きい。蓄電池併設でDR参加・昼夜シフトの経済性向上。窯業の昼間電気炉活用と組合せ効果大。",
  },
  {
    name: "佐賀県脱炭素・地域振興補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "佐賀県独自補助。有田伊万里窯業・鳥栖物流・農業の脱炭素化を支援する大型補助あり。玄海原発立地県交付金との連携で地域振興メニューも。",
  },
  {
    name: "電源立地地域対策交付金（玄海町・近隣市町）",
    target: "玄海町・唐津市・伊万里市等の事業者の設備更新",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "玄海原発立地地域への振興交付金。県内立地事業者の設備更新・省エネ投資の支援制度として活用可能。",
  },
  {
    name: "農水省・農業向け省エネ補助",
    target: "農業法人・施設園芸・畜舎・米麦倉庫の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "農水省・佐賀県農林水産部連携の省エネ補助。LED化・空調インバータ更新・断熱性能改善・太陽光自家消費が対象。",
  },
];

const industryProfile = [
  {
    label: "有田焼・伊万里焼窯業（有田町・伊万里市）",
    detail:
      "高級磁器・産業用陶磁器・電子部品向けセラミックスの製造。電気炉・ガス炉24時間連続稼働。年間使用量500万〜3,000万kWh規模。",
  },
  {
    label: "玄海原発関連事業者（玄海町・唐津市）",
    detail:
      "玄海原発関連の保守・点検・サービス事業者。連続稼働支援、品質管理、物流。年間使用量50万〜500万kWh規模。",
  },
  {
    label: "鳥栖物流・大型倉庫（鳥栖市）",
    detail:
      "鳥栖インターチェンジ周辺の九州物流ハブ。冷凍冷蔵・常温倉庫、配送センター。年間使用量200万〜1,500万kWh規模。",
  },
  {
    label: "農業法人・施設園芸（県全域）",
    detail:
      "佐賀米・小麦・大豆・玉ねぎ・玉露茶・佐賀牛・豚等の農業・畜産。施設園芸・冷蔵倉庫・畜舎。年間使用量50万〜500万kWh規模。",
  },
  {
    label: "中小製造業・商業・サービス（佐賀市・鳥栖市）",
    detail:
      "佐賀市・鳥栖市内の中小製造業（食品・建設資材・印刷）、市内商業施設・スーパー・店舗。年間使用量50万〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは約15〜20%（全国平均より低水準）。有田伊万里窯業大手と鳥栖物流の高圧契約で新電力切替が進む一方、中小事業者・農業法人は九州電力継続が多数派。",
  },
  {
    label: "市場連動プランの選択肢",
    detail:
      "九州電力エリアは太陽光出力制御で昼間スポット価格が低下する一方、夕方ひっ迫で高騰する変動が大きい。市場連動プランの選択肢は本州エリアと同等にあるが、窯業の連続稼働事業者は固定プランが安全。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 原発稼働による安定供給と燃料費調整額の上振れ抑制、玄海原発立地県の地域振興メニュー、災害時の復旧体制。デメリット: 競争入札と比較した単価高、太陽光出力制御による余剰活用余地の未活用。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①九州電力エリア供給実績の有無、②固定単価期間の確実性、③燃料費調整額の有無・上限、④窯業向け連続稼働対応の信頼性、⑤太陽光自家消費・PPA連携メニューの充実度、の5点が県内では特に重要。",
  },
  {
    label: "太陽光自家消費・PPA活用の優位性",
    detail:
      "佐賀県は太陽光出力制御頻発エリアとして、太陽光自家消費＋蓄電池の組合せが電気代削減・出力制御回避の両立に最も効果的。窯業の電気炉昼間稼働調整との組合せで更なる経済性向上。",
  },
];

const energySaving = [
  {
    label: "有田伊万里窯業の電気炉インバータ・廃熱回収",
    detail:
      "有田町・伊万里市の窯業事業者で電気炉インバータ更新、乾燥炉ヒートポンプ化、廃熱回収高度化、BEMS全工程導入で電力▲25〜35%。SII補助・需要家主導型PPA補助・佐賀県補助の組合せ活用で投資回収 4〜5年。",
  },
  {
    label: "鳥栖物流の冷凍冷蔵省エネ化",
    detail:
      "鳥栖市の物流倉庫でCO2冷媒インバータ化、断熱性能改善、太陽光導入、LED全館化で電力▲25〜40%。SII補助活用で投資回収 3〜5年。",
  },
  {
    label: "農業法人のハウス施設園芸LED・空調最適化",
    detail:
      "佐賀市郊外・武雄市の施設園芸でLED化、空調インバータ更新、断熱性能改善、太陽光導入で電力▲25〜40%。農水省補助・SII補助活用で投資回収 3〜5年。",
  },
  {
    label: "玄海原発立地地域の事業者向け省エネ更新",
    detail:
      "玄海町・唐津市・伊万里市の事業者で電源立地地域対策交付金を活用した省エネ・再エネ投資。LED化、空調更新、太陽光自家消費で電力▲20〜30%。",
  },
  {
    label: "屋根太陽光＋蓄電池でDR参加",
    detail:
      "県内全業種で屋根太陽光＋蓄電池の組合せでDR（デマンドレスポンス）参加。太陽光出力制御時の昼間充電と夕方放電の昼夜シフトで電気代▲15〜25%。需要家主導型PPA・SII補助の組合せで投資回収 4〜5年。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "窯業の電気炉連続稼働（24時間×365日）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "九州電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力（九電グループ系・西部ガス系・全国系・農協系）からの相見積を取得したか",
  "太陽光自家消費・需要家主導型PPAの試算を実施したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "蓄電池併設による太陽光出力制御回避・DR参加・BCP対応の試算を実施したか",
  "SII補助・佐賀県補助・電源立地地域対策交付金・農水省補助の併用可否を確認したか",
  "玄海原発立地地域（玄海町・唐津市・伊万里市）の場合、立地交付金の活用可否を確認したか",
  "市場連動プランと固定プランの選択肢を窯業連続稼働の自社特性で比較したか",
  "災害時（台風・水害）でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "佐賀県の法人電気代水準は全国比どれくらいですか？", answer: "九州電力エリアは原発稼働の影響で本州エリアより1〜2円/kWh安い水準を維持しています。佐賀県内法人の実質単価は22〜27円/kWh（高圧）が標準帯域で、新電力切替により1〜2円/kWh改善余地があります。有田伊万里窯業大手の特高契約は競争入札で年間1,000万〜1億円規模の削減も可能です。" },
  { question: "玄海原発立地県のメリットはありますか？", answer: "①電源立地地域対策交付金・原子力立地給付金等の優遇制度を一部受ける、②玄海町・唐津市・伊万里市の立地地域事業者は設備更新補助の対象になる、③九州電力の安定供給メリットを享受、の3点が主なメリットです。一方、原発再稼働の議論や定期検査停止時の影響リスクも存在します。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは佐賀県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の九州電力エリアの単価データを参考に、自社の現契約単価と本州エリアとの差を定量化できます。本ページではこのデータを再加工して佐賀県の産業構造（窯業・農業・物流）別の契約判断材料として整理しています。玄海原発立地県メリット＋太陽光出力制御活用の戦略が県内事業者の競争優位を最大化します。" },
  { question: "有田焼・伊万里焼窯業の電気代対策で最も効果的なのは？", answer: "①特別高圧の競争入札（複数全国系新電力で2円/kWh削減）、②屋根太陽光2〜3MW＋蓄電池の大規模導入（需要家主導型PPA補助・SII補助・佐賀県補助の組合せ活用）、③電気炉インバータ更新、④乾燥炉ヒートポンプ化、⑤廃熱回収高度化、の5本柱が中心。太陽光自家消費比率25%以上で年間電気代を30%削減可能です。" },
  { question: "農業法人・施設園芸でも電気代削減の選択肢はありますか？", answer: "はい、新電力切替＋屋根太陽光＋蓄電池の組合せが最も効果的です。農水省補助・SII補助・佐賀県補助の組合せ活用で投資回収4〜5年が目安。ハウスLED化・空調インバータ化・断熱性能改善との組合せで年間電気代を30%削減可能です。" },
  { question: "佐賀県で活用できる省エネ・再エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、佐賀県脱炭素・地域振興補助、電源立地地域対策交付金、農水省・農業向け省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。玄海原発立地県メリットも活用してください。" },
  { question: "鳥栖物流事業者の電気代対策は？", answer: "①新電力切替＋燃料費調整額上限ありメニュー選択、②屋根太陽光＋蓄電池導入、③冷凍冷蔵設備のCO2冷媒インバータ化、④断熱性能改善、⑤LED化＋BEMS導入、の5本柱が中心。鳥栖インターチェンジ周辺の物流倉庫では、太陽光自家消費比率30%以上で年間電気代を30%削減可能です。" },
  { question: "太陽光出力制御は佐賀県の事業者にどう影響しますか？", answer: "九州電力管内は太陽光大量導入により、春秋の昼間に出力制御（カット）が頻発しています。佐賀県内事業者にとっては、太陽光自家消費の経済性が極めて高く、窯業の電気炉昼間稼働調整との組合せでも経済性が向上します。蓄電池併設による昼夜シフトの機会も大きく、屋根太陽光＋蓄電池の組合せでDR参加・PPA契約の競争余地が拡大しています。" },
];

const sourcesItems = [
  { name: "九州電力 公式サイト", url: "https://www.kyuden.co.jp/" },
  { name: "佐賀県環境部", url: "https://www.pref.saga.lg.jp/" },
  { name: "九州経済産業局", url: "https://www.kyushu.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function SagaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/saga-business-electricity-cost"
        datePublished="2026-05-24"
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
          <span className="text-slate-800">佐賀県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            佐賀県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            佐賀県は九州電力エリアに属し、玄海原発（3・4号機）の立地県として地域振興メニューの恩恵を一部受けます。世界的に有名な有田焼・伊万里焼の窯業（電気炉・ガス炉24時間連続稼働）、米・小麦・玉ねぎ・玉露茶・佐賀牛等の農業・畜産、鳥栖インターチェンジ周辺の九州物流ハブ、佐賀市・鳥栖市の都市圏オフィス・商業と多様な産業構造を持ちます。太陽光出力制御頻発エリアとして自家消費＋蓄電池の経済性が極めて高く、玄海原発立地県メリットと組合せた契約最適化戦略が主流です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-24" updatedAt="2026-05-24" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>九州電力エリアの本州より安い電気代水準と玄海原発立地県メリット（pps-net.org/unitデータ加工）</li>
              <li>有田伊万里窯業・鳥栖物流・農業施設園芸のBefore/After削減事例</li>
              <li>太陽光出力制御活用＋蓄電池による電気代30%削減戦略</li>
              <li>SII・佐賀県・電源立地地域対策交付金・農水省補助の組合せ活用</li>
              <li>窯業電気炉連続稼働と太陽光大量導入下の電力契約最適化</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              佐賀県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県は九州電力エリアに属し、玄海原発の立地県。有田焼・伊万里焼窯業、米麦・玉ねぎ・玉露茶等の農業、鳥栖物流ハブ、佐賀市・鳥栖市の都市圏オフィス・商業が県内電力消費の中核を形成します。玄海原発立地県メリットと太陽光出力制御活用が県固有の競争優位です。
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
              九州電力エリアの全体像は{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                九州電力エリア事情
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
              佐賀県では九州電力が最大シェアを持ちますが、2024年時点で複数の新電力が法人向け高圧で営業中です。九州電力グループ系、西部ガス系、全国系、農協系・地域密着型の4カテゴリが主軸となります。
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
              <Link href="/how-to-choose-new-electricity-supplier" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              佐賀県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九州電力エリアは原発稼働メリットにより本州より1〜2円/kWh安い水準を維持。佐賀県は玄海原発立地県として地域振興メニューの恩恵も一部受けます。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの単価水準と県内事業者への影響（pps-net.org/unit データ再加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、佐賀県の産業構造（窯業・玄海原発立地・農業・物流）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。玄海原発立地県メリット＋太陽光出力制御活用が戦略の中心です。
            </p>
            <div className="mt-4 space-y-3">
              {ppsNetUnitData.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              出典: 新電力ネット（<a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">https://pps-net.org/unit</a>）を加工して作成
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 有田伊万里窯業・鳥栖物流・農業施設園芸（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県の主力業種3つで、契約見直し＋太陽光自家消費＋蓄電池の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。玄海原発立地県メリット＋太陽光出力制御活用により、年間電気代を30%削減できる事業者が増えています。
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
              <Link href="/ceramics-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">窯業・陶磁器の電気料金見直し</Link>
              、農業向けは{" "}
              <Link href="/agriculture-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">農業法人の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              佐賀県固有の電気代上昇要因 — 窯業連続稼働・原発立地・農業需要
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県の電気代変動は、窯業の連続稼働と電気代影響、玄海原発立地県メリット、太陽光出力制御と昼間余剰活用、農業の高付加価値化、再エネ賦課金など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直し・太陽光自家消費・蓄電池投資の優先順位付けが可能になります。
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
              佐賀県の補助金・優遇制度 — SII・県独自・電源立地交付金・農水省
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県では国補助（SII等）に加え、県独自補助、電源立地地域対策交付金、農水省・農業向け省エネ補助が組合せ可能です。最大3〜4補助の組合せで投資回収を1〜2年短縮できます。玄海原発立地県メリットも活用してください。
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
              佐賀県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県の事業者構成は、有田焼伊万里焼窯業、玄海原発関連、鳥栖物流、農業法人、中小製造業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 九州電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県の新電力シェアは2024年時点で約15〜20%（全国平均より低水準）。有田伊万里窯業大手と鳥栖物流の高圧契約で新電力切替が進む一方、中小事業者・農業法人は九州電力継続が多数派です。
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
              県内事業者の節電・省エネ・再エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県の電気代対策は『有田伊万里窯業の電気炉インバータ・廃熱回収』『鳥栖物流の冷凍冷蔵省エネ化』『農業のハウスLED・空調最適化』『玄海原発立地地域の事業者向け省エネ』『屋根太陽光＋蓄電池でDR参加』の5軸が主力。玄海原発立地県メリット＋太陽光出力制御活用で年間電気代を30%削減する戦略が標準化しています。
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
              佐賀県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や太陽光・蓄電池投資の判断材料が下がります。窯業連続稼働の特性と玄海原発立地県メリットを踏まえた契約最適化が県内事業者の競争優位です。
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
              シミュレーターで佐賀県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              佐賀県は窯業の連続稼働・原発立地県メリット・太陽光出力制御活用が特徴的なエリアです。シミュレーターで自社条件における上振れ幅を試算し、太陽光自家消費＋蓄電池導入・新電力競争入札・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>窯業の電気炉連続稼働（24時間×365日）の影響額を試算する</li>
              <li>太陽光自家消費＋蓄電池の組合せによる削減効果を試算する</li>
              <li>事例で示した30%前後の削減レンジの自社適用可能性を見立てる</li>
              <li>競争入札・DR参加・PPA契約の経済性を評価する</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-24"
            />
            <GlossaryLinks currentSlug="saga-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/fukuoka-business-electricity-cost", title: "福岡県の法人電気料金", description: "九州電力エリア・北九州工業地帯・博多都市圏の事情(参考)。" },
              { href: "/nagasaki-business-electricity-cost", title: "長崎県の法人電気料金", description: "九州電力エリア・造船業・離島電力の事情(参考)。" },
              { href: "/kumamoto-business-electricity-cost", title: "熊本県の法人電気料金", description: "九州電力エリア・TSMC進出・農業の事情(参考)。" },
              { href: "/oita-business-electricity-cost", title: "大分県の法人電気料金", description: "九州電力エリア・鉄鋼化学コンビナート・地熱発電の事情(参考)。" },
              { href: "/kagoshima-business-electricity-cost", title: "鹿児島県の法人電気料金", description: "九州電力エリア・川内原発・焼酎産業の事情(参考)。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "窯業連続稼働事業者の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "窯業連続稼働が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "電気炉・LED・空調更新の主力補助金。" },
              { href: "/onsite-ppa-explained", title: "オンサイトPPA(自家消費型太陽光)", description: "太陽光自家消費＋蓄電池の組合せ戦略。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "九州電力エリア・原発稼働の影響。" },
            ]}
          />

          <ContentCta
            heading="佐賀県の自社条件で電気代リスクを試算する"
            description="有田伊万里窯業、鳥栖物流ハブ、農業法人・施設園芸、玄海原発立地地域事業者など佐賀県固有の条件と九州電力エリア単価・玄海原発立地県メリット・太陽光出力制御活用を踏まえ、シミュレーターで自社の上振れリスクと太陽光自家消費＋蓄電池による削減余地を試算できます。"
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
            heading="佐賀県の電力契約見直し、専門家に相談しませんか？"
            description="有田伊万里窯業、鳥栖物流ハブ、農業法人・施設園芸、玄海原発立地地域事業者の電気代見直しは業種・地域により論点が異なります。玄海原発立地県メリット＋太陽光出力制御活用も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
