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
  "宮城県の法人電気料金完全ガイド｜仙台都市圏・半導体集積・物流拠点の契約最適化";
const pageDescription =
  "宮城県の法人電気料金を地域特化で解説。東北電力エリア、仙台都市圏のオフィス・商業集積、半導体・自動車関連工場、仙台港の物流拠点、補助金活用、契約見直しまで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "宮城県 法人電気料金",
    "仙台 オフィスビル 電気代",
    "東北電力 半導体工場",
    "仙台港 物流 電力",
    "宮城 工業団地",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/miyagi-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/miyagi-business-electricity-cost",
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
    label: "東北電力エリアの中核（宮城県）",
    detail:
      "宮城県は東北電力エリアの中核。仙台市は東北6県の中心都市で人口110万人、東北電力EP本社所在地。仙台都市圏に法人需要が集中する一方、県北（栗原・登米）、県南（白石・角田）、沿岸部（石巻・気仙沼）など地域特性が分散している。",
  },
  {
    label: "電源構成 — 火力中心と再エネ拡大",
    detail:
      "東北電力エリアの電源構成は火力50%超（仙台火力・新仙台火力・原町火力等）、水力20%、再エネ（風力・太陽光）20%前後。仙台火力（LNG/石炭）は宮城県内最大の発電所。女川原発（停止中、2号機再稼働手続き中）の再稼働で電源構成が変わる可能性。",
  },
  {
    label: "気象条件 — 太平洋側の温暖気候",
    detail:
      "仙台の暖房度日（HDD18）は約2,800で東北6県では最も温暖。冬季の積雪量も少なく、本州他県と近い気候条件。一方で夏季冷房需要は東北の中では最大級で、年間電力消費の季節変動は他東北県より平準化されている。",
  },
  {
    label: "東日本大震災と電力構造の変化",
    detail:
      "2011年震災で女川原発・原町火力等が大規模被災。現在まで原町火力は再稼働、女川原発2号機は再稼働手続き中（2024年再稼働予定）。震災以降、自家発電・蓄電池導入が進み、BCP電源確保が県内事業者の標準的検討項目に。",
  },
  {
    label: "オフィス・商業集積による電力プロファイル",
    detail:
      "仙台駅周辺・青葉通・国分町等の商業集積、長町副都心、勾当台等のオフィス街で電力需要が集中。平日昼間8時〜18時のピークが顕著で、本州都市部と類似の負荷プロファイル。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（東北電力ネットワーク・東北電力EP）",
    role: "一般送配電事業者・小売（仙台本社）",
    detail:
      "東北6県＋新潟県を供給エリアとする東北電力ネットワーク管轄。仙台市青葉区に本社を置く。宮城県内の高圧・特別高圧の標準メニューは『業務用電力』『業務用季節別時間帯別電力』等。2023年4月の規制料金改定では21.9%値上げが実施され、自由料金も同等改定。",
  },
  {
    name: "東北自然エネルギー・ENEOSでんき",
    role: "新電力（宮城県内供給実績あり）",
    detail:
      "東北自然エネルギー（東北電力グループ）は再エネ電源を活用したRE100対応プランを展開。仙台市内のオフィスビル・大学・自治体向け実績多数。ENEOSでんきも法人向け高圧でシェア拡大。",
  },
  {
    name: "Looopでんき・F-Power・サミットエナジー・大阪ガス（オーパスエナジー）",
    role: "全国系新電力",
    detail:
      "全国系の新電力が仙台都市圏で活発に営業。Looopでんきは市場連動プランで一時シェア拡大したが2022〜2023年に縮小、現在は固定プランで再展開。",
  },
  {
    name: "みやぎ再エネ電力・仙台市民電力",
    role: "地域密着型新電力",
    detail:
      "みやぎ再エネ電力（地元金融機関出資）、仙台市民電力（市民出資型）など、地域密着の新電力が複数。地産地消型の再エネメニューを展開。",
  },
  {
    name: "石巻新電力・気仙沼ニッティング電力",
    role: "震災復興型地域新電力",
    detail:
      "石巻・気仙沼の震災復興と地産地消を組み合わせた地域新電力。沿岸部の地元事業者向けに供給。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰で県内でも新電力の新規受付停止・撤退が複数発生したが、2024年以降は12社程度が法人向け高圧で新規受付中。仙台都市圏は東北エリアで最も新電力競争が活発。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東北電力『業務用高圧電力』の電力量料金は宮城県内で18〜22円/kWh（季節・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味した実質単価は25〜30円/kWhレンジ。仙台都市圏は新電力競争が活発で、新電力切替で1〜2円/kWh安くなるケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。仙台火力近郊の半導体・電子部品工場、仙台ポート・利府の物流拠点、大学・大病院等が対象。新電力切替で年5〜10%の削減事例多数。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東北電力『低圧電力』は10〜14円/kWh+調整項目。仙台駅周辺の店舗・コンビニ・SS等で利用。低圧電灯（事務所等）は17〜21円/kWh。",
  },
  {
    label: "燃料費調整額の県内特性",
    detail:
      "東北電力エリアの燃料費調整額は2022〜2023年は月最大+7円/kWh、2024〜2025年は+3.0〜+4.5円/kWhレンジ。女川原発再稼働で燃料費調整額の構造的低下が期待されているが、時期は不確実。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・半導体/電子部品工場（仙台高新地区、特別高圧 4,500kW、年間 2,800万kWh）",
    before:
      "Before: 仙台高新地区の半導体メーカーA社（クリーンルーム24時間稼働、製造装置・空調・排ガス処理）。年間電気代 8.5億円。燃料費調整額直撃で2023年は前年比+1.8億円の上昇。クリーンルーム空調が旧式、デマンドピーク管理は手動。",
    after:
      "After: 特別高圧の固定5年契約（東北電力外系新電力との競争入札で獲得）／クリーンルーム空調更新（外気冷房導入、SII補助1/3活用、投資 5,500万円）／デマンドコントローラー＋BEMS導入／東北電力PPA（陸上風力）2MW契約／屋根太陽光 800kW導入。",
    result:
      "Result: 年間電気代 8.5億円 → 6.97億円（▲18%、▲1.53億円）／契約kW 4,500→4,000／投資回収 3.6年（補助金後 2.4年）／CO₂削減 約4,500 t/年。",
  },
  {
    title: "業種2: 流通業・仙台ポート物流センター（仙台市港湾部、特別高圧 2,400kW、年間 1,600万kWh）",
    before:
      "Before: 仙台ポート近郊の物流センターB社（冷凍冷蔵在庫 + 仕分けライン）。年間電気代 4.8億円。市場連動プランで2023年冬月最大4,500万円の請求を経験。冷凍倉庫の旧式コンプレッサー継続使用、ピーク管理未対応。",
    after:
      "After: 特別高圧の固定5年契約／冷凍倉庫コンプレッサーをインバータ式に更新（SII補助1/2活用、投資 1,500万円）／全LED化（投資 600万円）／デマンドコントローラー導入／オフサイトPPA（陸上風力）2.5MW契約。",
    result:
      "Result: 年間電気代 4.8億円 → 3.94億円（▲18%、▲8,600万円）／契約kW 2,400→2,150／投資回収 設備2.4年（補助金後 1.6年）、オフサイトPPAは初期投資ゼロ。",
  },
  {
    title: "業種3: サービス業・仙台駅前シティホテル（仙台市青葉区、高圧 480kW、年間 260万kWh）",
    before:
      "Before: 仙台駅前のシティホテルC社（250室）。客室空調・大浴場・厨房・宴会場の電力消費。年間電気代 7,800万円。市場連動プラン継続で2022〜2023年に月最大1,200万円の追加負担を経験。",
    after:
      "After: 固定3年プランへ切替／全館LED化（投資 700万円、SII補助1/2活用）／高効率エアコン・ヒートポンプ給湯機への更新／BEMSによる需要監視と部分空調制御／屋上太陽光 200kW導入。",
    result:
      "Result: 年間電気代 7,800万円 → 6,470万円（▲17%、▲1,330万円）／契約kW 480→430／投資回収 設備1.8年（補助金後 0.9年）、太陽光7.5年。",
  },
];

const costFactors = [
  {
    label: "夏冬両方のピーク負荷",
    detail:
      "仙台は東北で最も温暖で、冬季暖房と夏季冷房の双方でピーク需要が立つ。年間最大需要は夏季14〜15時と冬季17〜18時の両方で発生する事業所が多く、デマンド管理の複雑さが他東北県より高い。",
  },
  {
    label: "都市圏オフィス・商業集積の電力プロファイル",
    detail:
      "仙台駅周辺・青葉通・国分町・長町副都心等で電力需要が集中。平日昼間ピークが顕著で、デマンド管理・部分空調制御の効果が大きい業種が多い。",
  },
  {
    label: "半導体・電子部品工場のクリーンルーム電力",
    detail:
      "仙台高新地区・仙台ハイテクパーク等の半導体・電子部品工場では、クリーンルーム空調・排ガス処理・コンプレッサーが連続稼働でベースロードを形成。電気代が売上高比10〜15%に達するケースも。",
  },
  {
    label: "仙台港・物流拠点の冷凍冷蔵電力",
    detail:
      "仙台港の輸出入物流拠点、仙台市港湾部の冷凍倉庫群、利府・名取の物流センターで冷凍冷蔵設備が大量電力消費。年間使用量1,000万kWh超の大口需要家が多数。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。仙台都市圏の中規模オフィスビル（年間100万kWh）で年400万円規模の負担、5年で2,000万円。仙台ポート物流（年間1,500万kWh）で年6,000万円規模、5年で3億円。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・クリーンルーム空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "半導体工場・物流・オフィスビルなど宮城県主力業種で採択率が高い主力補助金。クリーンルーム空調更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・物流センターと相性が良い。仙台都市圏でも市街地オフィスビル屋上での導入事例が増加。",
  },
  {
    name: "宮城県エコビジネス・脱炭素補助",
    target: "県内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "宮城県環境生活部所管。SII等の国補助との併用ルールに留意。",
  },
  {
    name: "仙台市・石巻市・気仙沼市の省エネ補助",
    target: "市内中小事業者の高効率設備導入",
    rate: "1/3、上限100万〜500万円",
    note: "市町村単位の補助金。仙台市は省エネ・脱炭素補助、石巻・気仙沼は震災復興型補助あり。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "脱炭素モデル地域指定によるトータル支援",
    rate: "1/2、上限数十億円",
    note: "宮城県内では東松島市・石巻市等が脱炭素先行地域選定。地域内事業者は大型補助の対象。",
  },
];

const industryProfile = [
  {
    label: "半導体・電子部品（仙台高新地区・大和町）",
    detail:
      "ソニーセミコンダクタ・東京エレクトロン東北・東芝エルピーダ等の集積。クリーンルーム・製造装置・空調・排ガス処理。特別高圧契約が標準で年間使用量1,000〜5,000万kWh規模。",
  },
  {
    label: "自動車関連（大衡村・大和町）",
    detail:
      "トヨタ自動車東日本（旧セントラル自動車）の本社・第1工場・第2工場の集積地。プレス・溶接・塗装・組立。特別高圧契約。",
  },
  {
    label: "オフィスビル・商業施設（仙台都心）",
    detail:
      "仙台駅周辺・青葉通・国分町・長町副都心のオフィスビル・商業施設。空調・照明・OA機器の電力消費が中心。中小規模で年間20〜200万kWh、大型ビル（仙台トラストタワー等）は1,000万kWh超。",
  },
  {
    label: "物流・運輸（仙台港湾部・利府・名取）",
    detail:
      "仙台ポート・名取・利府の物流拠点。冷凍冷蔵在庫・仕分けライン・空調。輸出入関連の食品物流が多く、24時間稼働の冷凍倉庫が中心。",
  },
  {
    label: "観光・ホテル・サービス業",
    detail:
      "仙台駅前・国分町のシティホテル、松島・秋保温泉・作並温泉の旅館。客室空調・大浴場・厨房電力が主軸。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で宮城県内法人の新電力シェアは20〜25%（経産省統計）と東北エリアでは最高水準。仙台都市圏では切替が進む一方、地方部では東北電力EP継続が多数。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動プランから固定プランへ回帰。仙台都市圏のオフィスビルで月数百万円の追加負担を経験した事業者は固定プランへ完全移行。",
  },
  {
    label: "東北電力EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・東北6県＋新潟の広域供給ネットワーク・地域貢献。デメリット: 単価が新電力比1〜2円/kWh高め。仙台都市圏では新電力との単価差が顕著。",
  },
  {
    label: "オフサイトPPA案件の活発化",
    detail:
      "宮城県・東北域内の風力・太陽光プロジェクトとのオフサイトPPAが、仙台都市圏の大企業・大学・自治体で活発化。CO2フリー電力調達+長期固定単価を両立できる選択肢として定着。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東北電力エリア供給実績、②夏冬両ピーク対応のバランシングコスト、③固定単価期間（3〜5年）、④燃料費調整額の有無・上限、⑤PPA組合せの5点が宮城県では特に重要。",
  },
];

const energySaving = [
  {
    label: "クリーンルーム空調の外気冷房導入",
    detail:
      "半導体工場のクリーンルームで外気冷房（フリークーリング）を冬季に活用することで空調電力▲15〜30%。投資回収 2〜4年、SII補助1/3活用で 1.5〜3年。",
  },
  {
    label: "オフィスビルのデマンド制御・BEMS",
    detail:
      "仙台都市圏のオフィスビルでBEMSによる空調・照明の自動制御で電力▲10〜20%。投資回収 2〜4年。テナント密度の高いビルほど効果が大きい。",
  },
  {
    label: "冷凍冷蔵設備のインバータ化",
    detail:
      "仙台ポート物流・食品加工の冷凍冷蔵庫コンプレッサーをインバータ式に更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "自家消費太陽光・屋上太陽光",
    detail:
      "仙台都市圏は日照時間が東北で最大級、屋根面積1,000m²以上のビル・工場で1MW級導入も現実的。年間110〜130万kWh発電、投資回収 7〜10年（補助金後 5〜7年）。",
  },
  {
    label: "オフサイトPPA（風力・太陽光）",
    detail:
      "宮城・東北域内の再エネプロジェクトとのオフサイトPPA契約で長期固定単価15〜18円/kWh、CO2フリー電力を調達可能。初期投資不要で即効果あり。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季・冬季の両ピーク月の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東北電力の2023年4月改定後の単価で再見積を取得したか",
  "東北電力エリア新電力5〜10社からの相見積を取得したか",
  "クリーンルーム空調・冷凍冷蔵設備・オフィス空調の電力プロファイルを把握しているか",
  "再エネ賦課金減免制度の対象に該当するか",
  "オフサイトPPA（風力・太陽光）案件の見積を取得したか",
  "屋根面積を活用した自家消費太陽光導入の試算を実施したか",
  "SII省エネ補助金・宮城県補助・市町村補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "女川原発再稼働シナリオを長期契約に織り込んでいるか",
];

const faqItems = [
  { question: "宮城県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の実質単価で全国平均より1〜2円/kWh高い水準ですが、東北6県の中では最も低い水準です。仙台都市圏は新電力競争が活発で、新電力切替で1〜2円/kWh安くなるケース多数。" },
  { question: "仙台都市圏のオフィスビルで電気代削減はどう進めますか？", answer: "①新電力切替（年5〜10%削減）、②BEMS導入による空調・照明自動制御（電力▲10〜20%）、③全館LED化、④オフサイトPPA契約の4点パッケージが主力。仙台駅前・国分町・長町等のオフィスビルで導入実績多数です。" },
  { question: "半導体工場のクリーンルーム電気代を削減する方法は？", answer: "①外気冷房（フリークーリング）の冬季活用、②高効率コンプレッサー更新、③排ガス処理の負荷分散、④デマンドコントローラー＋BEMSの組合せで電力▲15〜30%、年間数千万円の削減事例多数。SII補助1/3活用で投資回収 1.5〜3年が目安です。" },
  { question: "女川原発再稼働は電気料金にどう影響しますか？", answer: "女川原発2号機（再稼働手続き中、2024年再稼働予定）が再稼働すれば、東北電力の火力依存度が下がり、燃料費調整額の上振れリスクが緩和される可能性があります。長期契約締結時は『再稼働あり』『なし』の2シナリオで試算することが推奨されます。" },
  { question: "宮城県で固定プランと市場連動プランのどちらが向きますか？", answer: "24時間稼働の半導体工場・物流冷凍倉庫・大型ホテルは固定プランが圧倒的に向きます。中小オフィス・店舗は使用量が小さいため市場連動でも影響限定的ですが、2022〜2023年の市場高騰経験から固定プランが主流です。" },
  { question: "オフサイトPPAは宮城県でどう活用できますか？", answer: "宮城・東北域内の風力・太陽光プロジェクトとのオフサイトPPA契約で20年程度の長期固定単価（15〜18円/kWh水準）でCO2フリー電力を調達できます。仙台都市圏の大企業・大学・自治体で活発化しており、東北電力EPもPPA仲介サービスを展開中。" },
  { question: "宮城県で活用できる省エネ補助金は？", answer: "SII省エネ補助金、需要家主導型PPA補助金、宮城県エコビジネス・脱炭素補助、仙台市・石巻市・気仙沼市の市町村補助、脱炭素先行地域（東松島市・石巻市等）の特別支援が組合せ可能です。" },
  { question: "震災経験のある宮城県でBCP電源の検討はどう進めますか？", answer: "石巻・気仙沼・名取等の沿岸部では震災経験からBCP電源（自家発電・蓄電池）導入率が高いです。需要家主導型PPA補助金で蓄電池併設すれば、平常時のピークカットと停電時バックアップを兼用できます。投資回収 7〜10年が目安です。" },
];

const sourcesItems = [
  { name: "東北電力公式サイト", url: "https://www.tohoku-epco.co.jp/" },
  { name: "経済産業省 東北経済産業局", url: "https://www.tohoku.meti.go.jp/" },
  { name: "宮城県環境生活部・経済商工観光部", url: "https://www.pref.miyagi.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function MiyagiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/miyagi-business-electricity-cost"
        datePublished="2026-05-19"
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
          <span className="text-slate-800">宮城県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            宮城県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            宮城県は東北電力エリアの中核、仙台都市圏のオフィス・商業集積、半導体・自動車関連工場の集積、仙台港物流拠点という4つの構造的特徴を持ちます。本ページでは県内法人の電気代水準、半導体・物流・ホテル業の業種別影響、夏冬両ピーク対応、補助金活用、契約見直しを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東北電力エリア（宮城県）の電源構成・基本料金構造</li>
              <li>仙台都市圏オフィスビル・半導体工場・物流拠点の電気代水準</li>
              <li>半導体・物流・ホテルの3業種でBefore/After削減事例</li>
              <li>夏冬両ピーク・クリーンルーム空調など県固有のコスト要因</li>
              <li>SII・宮城県補助・市町村補助の組合せ活用パターン</li>
              <li>宮城県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の電力供給は『東北電力エリアの中核・仙台本社』『仙台火力中心の電源構成』『太平洋側温暖気候による夏冬両ピーク』『仙台都市圏の集積』という4つの構造的特徴を持ちます。
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
              東北電力エリアの全体像は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東北電力エリア事情
              </Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城県内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県では2024年時点で約12社の新電力が法人向け高圧で新規受付中。仙台都市圏は東北エリアで最も新電力競争が活発です。
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
              宮城県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東北電力の単価は全国エリア比で1〜2円/kWh高めですが、東北6県の中では最も低い水準です。仙台都市圏は新電力競争が活発で切替メリットも大きいエリアです。
            </p>
            <div className="mt-4 space-y-3">
              {priceBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 半導体・物流・ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城県固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の電気代上昇は、複数の県固有要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城県の補助金・優遇制度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県では国補助（SII等）に加え、県独自補助、市町村補助、脱炭素先行地域指定による特別支援が組合せ可能です。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の事業者構成は、半導体・電子部品、自動車関連、オフィスビル・商業施設、物流・運輸、観光・ホテル・サービス業の5層構造です。
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
              電力会社切替の実情 — 東北電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の新電力シェアは2024年時点で20〜25%と東北エリア最高水準。仙台都市圏では切替が進む一方、地方部では東北電力EP継続が多数です。
            </p>
            <div className="mt-4 space-y-3">
              {switchingReality.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              県内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の省エネは『クリーンルーム外気冷房』『オフィスBEMS制御』『冷凍冷蔵設備のインバータ化』『自家消費太陽光』『オフサイトPPA』の5軸が主力です。
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
              宮城県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで宮城県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県は夏冬両ピーク負荷・仙台都市圏オフィス集積・半導体クリーンルーム電力の3要因を抱えます。シミュレーターで自社条件における上振れ幅を試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季・冬季両ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した17〜18%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-19"
            />
            <GlossaryLinks currentSlug="miyagi-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北6県＋新潟県の料金体系・改定動向の詳細。" },
              { href: "/aomori-business-electricity-cost", title: "青森県の法人電気料金", description: "東北電力エリアの隣接県事情。" },
              { href: "/iwate-business-electricity-cost", title: "岩手県の法人電気料金", description: "東北電力エリアの隣接県事情。" },
              { href: "/akita-business-electricity-cost", title: "秋田県の法人電気料金", description: "東北電力エリアの風力先進県。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "半導体工場・物流・ホテルの選択肢。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "仙台ポート物流に直結。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "仙台都市圏オフィスビルに直結。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "仙台駅前ホテルの暖房・冷房コスト。" },
              { href: "/corporate-ppa-types", title: "コーポレートPPAの類型", description: "オフサイトPPA活用パターン整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "クリーンルーム空調・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東北電力の火力依存度を踏まえた解説。" },
              { href: "/datacenter-electricity-cost-review", title: "データセンターの電気料金見直し", description: "仙台市内のデータセンター事業者向け。" },
              { href: "/region-supplier-withdrawal-map", title: "エリア別新電力撤退状況マップ", description: "県内新電力の動向を含む全国マップ。" },
            ]}
          />

          <ContentCta
            heading="宮城県の自社条件で電気代リスクを試算する"
            description="仙台都市圏オフィス・半導体クリーンルーム・物流冷凍倉庫など宮城県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="宮城県の電力契約見直し、専門家に相談しませんか？"
            description="仙台都市圏オフィス・半導体・物流の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
