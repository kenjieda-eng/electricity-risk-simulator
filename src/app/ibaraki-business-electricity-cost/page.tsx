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
  "茨城県の法人電気料金完全ガイド｜鹿島臨海工業地帯・つくば研究機関・日立電機の契約最適化";
const pageDescription =
  "茨城県の法人電気料金を地域特化で解説。東京電力エリア、鹿島臨海工業地帯のコンビナート、つくば研究機関、日立・水戸の電機工業の電力負荷プロファイル、補助金、契約見直しを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "茨城県 法人電気料金",
    "東京電力 高圧 燃料費調整額",
    "鹿島臨海工業地帯 電気代",
    "つくば 研究所 電力",
    "日立 電機工業 電気契約",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ibaraki-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ibaraki-business-electricity-cost",
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
    label: "東京電力エリアの基本構造（茨城県）",
    detail:
      "茨城県は東京電力パワーグリッド管轄。首都圏電力供給の重要拠点で、東海・常陸那珂・鹿島の火力発電所群が立地。県内の電力消費は『鹿島臨海工業地帯（コンビナート）』『つくば研究機関集積』『日立・水戸の電機工業』の3層構造。",
  },
  {
    label: "電源構成 — 火力発電基地",
    detail:
      "茨城県内には東京電力の常陸那珂火力（石炭、200万kW）、鹿島火力（重油・石炭、520万kW）、東海第二原発（停止中、再稼働手続き中）が立地。首都圏向け送電の重要拠点。再エネは太陽光中心で陸上風力は少なめ。",
  },
  {
    label: "気象条件 — 関東平野の温暖気候",
    detail:
      "水戸の暖房度日（HDD18）は約2,200、つくばで約2,000と関東標準。冬季の気温は東京より2〜3℃低い程度。年間日照時間は2,000時間超で太陽光発電に適した気候条件。",
  },
  {
    label: "東海第二原発と将来コスト構造",
    detail:
      "東海第二原発（停止中）は2024年度内の再稼働手続きが進行中。再稼働時期は不確実だが、再稼働した場合は東京電力エリアの燃料費調整額構造に大きな影響を与える。長期契約締結時は再稼働シナリオを織り込む必要あり。",
  },
  {
    label: "鹿島臨海工業地帯の特異な電力消費",
    detail:
      "鹿島港周辺の石油化学・鉄鋼コンビナート（住友金属鹿島・三菱化学鹿島・JFEスチール東日本等）は、特別高圧（数万〜数十万kW級）の超大口需要家。コンビナート全体の電力消費は茨城県全体の数十%を占める。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東京電力EP）",
    role: "小売（旧一般電気事業者）",
    detail:
      "東京電力グループの小売部門。茨城県内の高圧・特別高圧の標準メニューは『業務用電力』『業務用季節別時間帯別電力』等。2023年6月の規制料金改定では14.0%値上げ、自由料金も同等改定。",
  },
  {
    name: "東京電力パワーグリッド",
    role: "一般送配電事業者",
    detail:
      "首都圏（1都7県）を管轄する送配電事業者。停電・送電網運用を担当。",
  },
  {
    name: "ENEOSでんき・ソフトバンクでんき・auでんき",
    role: "全国系新電力",
    detail:
      "全国系の新電力が茨城県内で活発に営業。鹿島臨海工業地帯の大口需要家・つくば研究機関・日立電機の中堅企業向けに固定単価メニューを展開。",
  },
  {
    name: "東京ガス・ニチガス・大阪ガス（オーパスエナジー）",
    role: "ガス会社系新電力",
    detail:
      "ガス会社系新電力。電気＋ガスのセット契約で中小事業所・店舗向けに展開。LNG火力電源を活用した安定供給。",
  },
  {
    name: "Looopでんき・F-Power・サミットエナジー",
    role: "全国系・市場連動経験あり",
    detail:
      "Looopでんきは市場連動プランで一時シェア拡大したが2022〜2023年に縮小、現在は固定プランで再展開。",
  },
  {
    name: "茨城県地域新電力・ひたちでんき",
    role: "地域密着型新電力",
    detail:
      "茨城県・ひたちでんき（日立市）等の地域密着型新電力。地産地消型の再エネメニューや、地元事業者向けの優遇プラン。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰で県内でも新電力の新規受付停止・撤退が複数発生したが、2024年以降は15社以上が法人向け高圧で新規受付中。東京電力エリアは新電力競争が全国で最も活発。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東京電力EP『業務用高圧電力』の電力量料金は茨城県内で17〜21円/kWh。燃料費調整額（2024〜2025年は+2.5〜+4.0円/kWh）と再エネ賦課金を加味した実質単価は24〜29円/kWhレンジ。全国平均並み〜やや低め。新電力切替で1〜2円/kWh安くなるケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。鹿島臨海工業地帯のコンビナート、つくばの研究機関、日立の大規模工場が対象。新電力切替・需要家主導型PPA活用で年5〜10%の削減事例多数。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東京電力EP『低圧電力』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯は17〜21円/kWh。",
  },
  {
    label: "燃料費調整額の県内特性",
    detail:
      "東京電力エリアの燃料費調整額は2022〜2023年は月最大+6円/kWh水準、2024〜2025年は+2.5〜+4.0円/kWhレンジ。火力依存度は東北・北海道より低めで、東海第二原発再稼働で更に低下の可能性。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・鹿島臨海工業地帯コンビナート（鹿嶋市、特別高圧 8,000kW、年間 5,500万kWh）",
    before:
      "Before: 鹿島臨海の化学工場A社。エチレンクラッカー・蒸留塔・コンプレッサー類が24時間稼働。年間電気代 16.5億円。燃料費調整額直撃で2023年は前年比+3.3億円の上昇。長期契約継続も、コージェネ設備は旧式、廃熱回収未活用。",
    after:
      "After: 特別高圧の10年長期固定契約（東京電力外系新電力との競争入札）／コージェネ更新（投資 15億円、GX補助1/2活用）／廃熱回収バイナリー発電500kW追加／需要家主導型PPA（オフサイト風力）3MW契約／屋根面積15,000m²に自家消費太陽光2MW導入。",
    result:
      "Result: 年間電気代 16.5億円 → 12.87億円（▲22%、▲3.63億円）／契約kW 8,000→7,000／投資回収 コージェネ8.0年（補助金後 5.5年）、オフサイトPPAは初期投資ゼロ。",
  },
  {
    title: "業種2: 流通業・つくば物流センター（つくば市、特別高圧 2,200kW、年間 1,400万kWh）",
    before:
      "Before: つくば市の物流センターB社（食品冷凍冷蔵 + 仕分けライン）。年間電気代 4.2億円。市場連動プランで2022〜2023年に月最大4,200万円の追加負担を経験。冷凍倉庫が旧式、デマンド管理は手動。",
    after:
      "After: 特別高圧の固定5年契約／冷凍冷蔵設備のコンプレッサーをインバータ式に更新（SII補助1/2活用、投資 1,500万円）／全LED化（投資 600万円）／デマンドコントローラー＋BEMS導入／屋根面積8,000m²に自家消費太陽光1.2MW導入。",
    result:
      "Result: 年間電気代 4.2億円 → 3.40億円（▲19%、▲8,000万円）／契約kW 2,200→1,950／投資回収 設備2.2年（補助金後 1.4年）、太陽光7.0年。",
  },
  {
    title: "業種3: サービス業・つくば研究所/オフィス（つくば市、高圧 800kW、年間 420万kWh）",
    before:
      "Before: つくばの民間研究所C社（バイオ・化学実験室、サーバ室、空調24時間稼働）。年間電気代 1.26億円。サーバ室空調が旧式、実験室の局所空調未対応、市場連動プラン継続でリスク。",
    after:
      "After: 固定3年プランへ切替／サーバ室空調更新（外気冷房導入、投資 1,200万円、SII補助1/3活用）／実験室の局所空調＋全体空調分離制御／BEMSによる需要監視／屋上太陽光 200kW導入。",
    result:
      "Result: 年間電気代 1.26億円 → 1.03億円（▲18%、▲2,300万円）／契約kW 800→720／投資回収 設備2.4年（補助金後 1.6年）、太陽光7.5年。",
  },
];

const costFactors = [
  {
    label: "鹿島コンビナートの大量電力消費",
    detail:
      "鹿島臨海工業地帯の石油化学・鉄鋼・電力会社向け施設は、年間1〜10億kWh規模の超大口需要家。1〜2円/kWhの単価差が年数千万〜数億円の経営インパクトとなるため、契約見直しの優先順位が極めて高い。",
  },
  {
    label: "つくば研究機関・大学のサーバ・空調需要",
    detail:
      "つくば研究学園都市には筑波大学・産業技術総合研究所・JAXA・物質材料研究機構等の研究機関が集積。サーバ室・実験室の24時間空調・大型分析機器の電力消費が大きく、年間使用量1,000万kWh超の研究所も多数。",
  },
  {
    label: "日立電機工業の連続稼働ライン",
    detail:
      "日立市の電機工業（日立・日立ハイテク等）はクリーンルーム・製造装置の連続稼働で、電気代が事業コストの大きな部分を占める。地域経済全体への影響も大きい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。鹿島コンビナートの大口需要家（年間1億kWh）で年4億円規模の負担、5年で20億円超。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になりやすい化学・鉄鋼は申請を要検討。",
  },
  {
    label: "夏季冷房ピークと電力供給ひっ迫",
    detail:
      "茨城県は首都圏電力供給の重要拠点で、夏季の電力需給ひっ迫時にはDR要請・節電要請が発出される。事業者側のDR契約・節電対応が経済的メリット（インセンティブ）にも繋がる構造。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・クリーンルーム空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "化学・鉄鋼・電機・物流など茨城県主力業種で採択率が高い主力補助金。コージェネ・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・物流センターと相性が良い。茨城県は日照時間が長く、太陽光導入の経済性も高い。",
  },
  {
    name: "茨城県脱炭素・省エネ補助",
    target: "県内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限500万〜5,000万円",
    note: "茨城県産業戦略部所管。SII等の国補助との併用ルールに留意。",
  },
  {
    name: "水戸市・つくば市・日立市・鹿嶋市の省エネ補助",
    target: "市内中小事業者の高効率設備導入",
    rate: "1/3、上限100万〜500万円",
    note: "市町村単位の補助金。鹿嶋市は工業地帯向け、つくば市は研究機関向けの特化メニューあり。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "脱炭素モデル地域指定によるトータル支援",
    rate: "1/2、上限数十億円",
    note: "茨城県内では境町・つくば市等が脱炭素先行地域選定。地域内事業者は大型補助の対象。",
  },
];

const industryProfile = [
  {
    label: "石油化学・鉄鋼コンビナート（鹿島臨海）",
    detail:
      "三菱ケミカル鹿島・住友金属鹿島（日本製鉄）・JFEスチール東日本・関東電化工業等。エチレン・蒸留・電気炉等の連続稼働。年間使用量1億kWh超の超大口需要家。",
  },
  {
    label: "研究機関・大学（つくば）",
    detail:
      "筑波大学・産業技術総合研究所・JAXA・物質材料研究機構・農研機構・KEK（高エネルギー加速器研究機構）等の国際的研究機関集積。サーバ・実験装置・空調の24時間稼働。",
  },
  {
    label: "電機工業（日立・水戸）",
    detail:
      "日立製作所・日立ハイテク・日立金属等の集積。製造装置・クリーンルーム・組立ライン。特別高圧契約が標準。",
  },
  {
    label: "物流・倉庫（つくば・常総・古河）",
    detail:
      "首都圏物流の重要拠点。常総IC・つくばJCT周辺に大型物流センターが集積。冷凍冷蔵・仕分けラインの電力消費。",
  },
  {
    label: "農業・食品加工（県全域）",
    detail:
      "茨城県は全国有数の農業県。メロン・水戸納豆・常陸牛・梨等の食品加工。冷蔵・冷凍・乾燥設備が中心。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で茨城県内法人の新電力シェアは25〜30%（経産省統計）と東京電力エリア平均水準。鹿島臨海・つくば等の大口需要家では切替が進む。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動プランから固定プランへ回帰。鹿島コンビナートの大口需要家は長期固定契約が標準。",
  },
  {
    label: "東京電力EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・首都圏広域供給ネットワーク・規制料金の安定性。デメリット: 単価が新電力比1〜2円/kWh高め。",
  },
  {
    label: "需要家主導型PPA案件の活発化",
    detail:
      "茨城県・東京電力エリア内の太陽光・洋上風力プロジェクトとのPPA契約が、鹿島コンビナート・つくば研究機関で活発化。RE100対応・脱炭素経営の観点で導入加速。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東京電力エリア供給実績、②大口需要家対応のバランシングコスト、③固定単価期間（3〜10年）、④燃料費調整額の有無・上限、⑤PPA組合せの5点が茨城県では特に重要。",
  },
];

const energySaving = [
  {
    label: "コージェネレーション・廃熱発電",
    detail:
      "鹿島コンビナートでは石油化学プロセスの廃熱を活用したコージェネ・バイナリー発電が標準。電力購入▲30〜50%。投資回収 SII・GX補助活用で 5〜8年。",
  },
  {
    label: "クリーンルーム空調の外気冷房",
    detail:
      "日立電機・つくば研究機関のクリーンルームで冬季外気冷房を活用することで空調電力▲15〜30%。投資回収 2〜4年。",
  },
  {
    label: "自家消費太陽光・PPA活用",
    detail:
      "茨城県は日照時間が長く、屋根面積1,000m²以上の事業所で太陽光1MW級導入が現実的。年間120〜140万kWh発電、投資回収 6〜8年（補助金後 4〜6年）。",
  },
  {
    label: "デマンドコントロール・BEMS",
    detail:
      "大型工場・研究所・物流センターでBEMSによる需要監視＋デマンドコントローラー連動でピーク需要▲10〜20%。",
  },
  {
    label: "DR（デマンドレスポンス）契約",
    detail:
      "夏季ピーク時の節電要請に応じることで、年100〜500万円のインセンティブを得られる。需給ひっ迫時の電力供給安定にも貢献。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季・冬季の両ピーク月の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東京電力EPの2023年6月改定後の単価で再見積を取得したか",
  "東京電力エリア新電力10〜15社からの相見積を取得したか",
  "コージェネ・廃熱回収・自家消費太陽光の試算を実施したか",
  "再エネ賦課金減免制度の対象に該当するか",
  "需要家主導型PPA（太陽光・風力）案件の見積を取得したか",
  "DR契約のインセンティブを確認したか",
  "SII省エネ補助金・茨城県補助・市町村補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "東海第二原発再稼働シナリオを長期契約に織り込んでいるか",
];

const faqItems = [
  { question: "茨城県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の実質単価で全国平均並み〜やや低めです。東京電力エリアは新電力競争が活発で、新電力切替で1〜2円/kWh安くなるケースが多数あります。鹿島コンビナートのような大口需要家は競争入札で更に有利な条件を引き出せます。" },
  { question: "鹿島臨海工業地帯の大口需要家で電気代削減はどう進めますか？", answer: "①特別高圧の10年長期固定契約（年5〜10%削減）、②コージェネ・廃熱回収設備の更新（電力購入▲30〜50%）、③オフサイトPPA契約、④自家消費太陽光、⑤DR契約活用の5点パッケージが主力。投資はGX・SII補助で大幅軽減できます。" },
  { question: "つくば研究機関・大学の電気代削減で効果的な施策は？", answer: "①サーバ室空調の外気冷房（フリークーリング）、②実験室の局所空調＋全体空調の分離制御、③BEMSによる需要監視、④屋根太陽光導入、⑤固定プラン切替の5点。SII補助1/3活用で投資回収 1.5〜3年が目安です。" },
  { question: "東海第二原発再稼働は電気料金にどう影響しますか？", answer: "東海第二原発が再稼働すれば、東京電力エリアの火力依存度が下がり、燃料費調整額の上振れリスクが緩和される可能性があります。長期契約締結時は『再稼働あり』『なし』の2シナリオで試算することが推奨されます。" },
  { question: "茨城県で固定プランと市場連動プランのどちらが向きますか？", answer: "24時間稼働の鹿島コンビナート・物流冷凍倉庫・大型研究所は固定プランが圧倒的に向きます。中小オフィス・店舗は使用量が小さいため市場連動でも影響限定的ですが、2022〜2023年の市場高騰経験から固定プランが主流です。" },
  { question: "需要家主導型PPAは茨城県でどう活用できますか？", answer: "茨城県・東京電力エリア内の太陽光・洋上風力プロジェクトとのオフサイトPPA契約で20年程度の長期固定単価でCO2フリー電力を調達できます。鹿島コンビナート・つくば研究機関・日立電機で導入実績が増加しています。" },
  { question: "茨城県で活用できる省エネ補助金は？", answer: "SII省エネ補助金、需要家主導型PPA補助金、茨城県脱炭素・省エネ補助、水戸市・つくば市・日立市・鹿嶋市の市町村補助、脱炭素先行地域（境町・つくば市等）の特別支援が組合せ可能です。" },
  { question: "DR契約のインセンティブ目安は？", answer: "夏季ピーク時の節電要請に応じることで、契約kW・節電実績に応じて年100〜500万円のインセンティブを得られます。特別高圧の大口需要家ほどメリットが大きく、鹿島コンビナートでは年1,000万円超のインセンティブ事例もあります。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "経済産業省 関東経済産業局", url: "https://www.kanto.meti.go.jp/" },
  { name: "茨城県産業戦略部", url: "https://www.pref.ibaraki.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function IbarakiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ibaraki-business-electricity-cost"
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
          <span className="text-slate-800">茨城県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            茨城県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            茨城県は東京電力エリア、鹿島臨海工業地帯の超大口コンビナート、つくば研究機関集積、日立・水戸の電機工業集積という4つの構造的特徴を持ちます。本ページでは県内法人の電気代水準、コンビナート・物流・研究所の業種別影響、需要家主導型PPA活用、補助金、契約見直しを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京電力エリア（茨城県）の電源構成・基本料金構造</li>
              <li>鹿島コンビナート・つくば研究機関・日立電機の電気代水準</li>
              <li>コンビナート・物流・研究所の3業種でBefore/After削減事例</li>
              <li>大口需要家対応・PPA活用・東海第二原発再稼働シナリオ</li>
              <li>SII・茨城県補助・市町村補助の組合せ活用パターン</li>
              <li>茨城県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">茨城県の電力事情と特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県は『東京電力エリア・首都圏電源拠点』『鹿島コンビナート集積』『つくば研究機関集積』『東海第二原発立地』という4つの構造的特徴を持ちます。
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
              東京電力エリアの全体像は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京電力エリア事情</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">茨城県内の主要電力会社・新電力一覧</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県では2024年時点で約15社の新電力が法人向け高圧で新規受付中。東京電力エリアは新電力競争が全国で最も活発です。
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
            <h2 className="text-xl font-semibold text-slate-900">茨城県の電気料金水準と全国比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京電力エリアの単価は全国エリア比で並み〜やや低め。新電力競争が活発で切替メリットも大きいエリアです。
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
            <h2 className="text-xl font-semibold text-slate-900">業種別影響度3件 — コンビナート・物流・研究所（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。
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
            <h2 className="text-xl font-semibold text-slate-900">茨城県固有の電気代上昇要因</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の電気代上昇は、複数の県固有要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
            <h2 className="text-xl font-semibold text-slate-900">茨城県の補助金・優遇制度</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県では国補助（SII等）に加え、県独自補助、市町村補助、脱炭素先行地域指定による特別支援が組合せ可能です。
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
            <h2 className="text-xl font-semibold text-slate-900">茨城県の主要産業と電力消費プロファイル</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の事業者構成は、石油化学・鉄鋼コンビナート、研究機関・大学、電機工業、物流・倉庫、農業・食品加工の5層構造です。
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
            <h2 className="text-xl font-semibold text-slate-900">電力会社切替の実情 — 東京電力EPと新電力の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の新電力シェアは2024年時点で25〜30%。鹿島コンビナート・つくば研究機関・日立電機等の大口需要家では切替が進む一方、中小事業者は東京電力EP継続が多数です。
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
            <h2 className="text-xl font-semibold text-slate-900">県内事業者の節電・省エネ施策事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の省エネは『コージェネ・廃熱発電』『クリーンルーム外気冷房』『自家消費太陽光・PPA』『デマンドコントロール・BEMS』『DR契約』の5軸が主力です。
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
            <h2 className="text-xl font-semibold text-slate-900">茨城県向け契約見直しチェックリスト（12項目）</h2>
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
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで茨城県の電気代上振れリスクを確認する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県は鹿島コンビナート集積・つくば研究機関・電機工業の大口電力消費が特徴です。シミュレーターで自社条件における上振れ幅を試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季・冬季両ピーク月の影響額を試算する</li>
              <li>需要家主導型PPA活用の年間コスト差を把握する</li>
              <li>事例で示した18〜22%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="ibaraki-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東京電力エナジーパートナー管内の詳細。" },
              { href: "/tochigi-business-electricity-cost", title: "栃木県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/gunma-business-electricity-cost", title: "群馬県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/saitama-business-electricity-cost", title: "埼玉県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/chiba-business-electricity-cost", title: "千葉県の法人電気料金", description: "京葉工業地帯を持つ隣接県事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "コンビナート・大口需要家の選択肢。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/chemical-industry-electricity-cost-review", title: "化学工業の電気料金見直し", description: "鹿島コンビナート向け。" },
              { href: "/datacenter-electricity-cost-review", title: "データセンターの電気料金見直し", description: "つくば・水戸の研究所サーバ向け。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "物流冷凍倉庫向け。" },
              { href: "/corporate-ppa-types", title: "コーポレートPPAの類型", description: "オフサイトPPA活用パターン整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コージェネ・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東京電力の火力依存度を踏まえた解説。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "コンビナート連続稼働事業者向け。" },
            ]}
          />

          <ContentCta
            heading="茨城県の自社条件で電気代リスクを試算する"
            description="鹿島コンビナート・つくば研究所・日立電機など茨城県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="茨城県の電力契約見直し、専門家に相談しませんか？"
            description="鹿島コンビナート・つくば研究機関・日立電機の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
