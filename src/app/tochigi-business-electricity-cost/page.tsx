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
  "栃木県の法人電気料金完全ガイド｜自動車工業・観光業・内陸工業の契約最適化";
const pageDescription =
  "栃木県の法人電気料金を地域特化で解説。東京電力エリア、宇都宮・小山の自動車工業（日産・ホンダ関連）、日光・那須の観光業、宇都宮市の内陸工業の電力負荷、補助金、契約見直しを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "栃木県 法人電気料金",
    "東京電力 高圧 燃料費調整額",
    "宇都宮 自動車工業 電気代",
    "日光 那須 ホテル 電力",
    "栃木 工業団地",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/tochigi-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tochigi-business-electricity-cost",
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
    label: "東京電力エリアの内陸県（栃木県）",
    detail:
      "栃木県は東京電力パワーグリッド管轄。県内の電力消費は『宇都宮都市圏のオフィス・商業集積』『小山・栃木・足利の自動車工業』『日光・那須の観光業』『鹿沼・佐野の物流』の4層構造。火力発電所は県内に立地しないが、首都圏向け送電網の重要中継点。",
  },
  {
    label: "電源構成 — 水力・太陽光",
    detail:
      "栃木県内の電源は鬼怒川・男体山水系の水力発電（鬼怒川水力・八汐ダム等）と、宇都宮・佐野・小山周辺の太陽光発電が中心。風力発電は少なめ。県内発電量は県内消費の20%程度で、不足分は首都圏外（福島・茨城）からの送電に依存。",
  },
  {
    label: "気象条件 — 内陸の寒冷気候",
    detail:
      "宇都宮の暖房度日（HDD18）は約2,500、那須塩原で約3,000と関東他県より寒冷。冬季の気温は東京より3〜5℃低い。一方で夏季は猛暑日が多く、年間電力消費の季節変動が大きい。",
  },
  {
    label: "日光・那須の観光地電力プロファイル",
    detail:
      "日光・那須・鬼怒川の観光地はホテル・リゾート施設が集中。冬季暖房・温泉加熱・スキー場リフトの電力消費が大きい。連休・週末ピーク型の特殊な需要プロファイル。",
  },
  {
    label: "工業団地の集積",
    detail:
      "宇都宮・清原・小山・芳賀・真岡・栃木・足利・佐野等に工業団地が集積。日産自動車栃木工場・ホンダ栃木製作所・キヤノン宇都宮工場等の大規模工場と関連サプライヤーが立地。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東京電力EP）",
    role: "小売（旧一般電気事業者）",
    detail:
      "東京電力グループの小売部門。栃木県内の高圧・特別高圧の標準メニューは『業務用電力』『業務用季節別時間帯別電力』等。2023年6月の規制料金改定では14.0%値上げ。",
  },
  {
    name: "東京電力パワーグリッド",
    role: "一般送配電事業者",
    detail:
      "首都圏（1都7県）を管轄する送配電事業者。",
  },
  {
    name: "ENEOSでんき・ソフトバンクでんき・auでんき",
    role: "全国系新電力",
    detail:
      "全国系の新電力が県内で活発に営業。自動車工業の中堅企業・宇都宮市内オフィスビル・観光ホテル向けに固定単価メニューを展開。",
  },
  {
    name: "東京ガス・ニチガス・大阪ガス",
    role: "ガス会社系新電力",
    detail:
      "ガス会社系新電力。電気＋ガスのセット契約で中小事業所・店舗向けに展開。",
  },
  {
    name: "Looopでんき・F-Power・サミットエナジー",
    role: "全国系・市場連動経験あり",
    detail:
      "Looopでんき等は市場連動プランで一時シェア拡大したが2022〜2023年に縮小、現在は固定プランで再展開。",
  },
  {
    name: "宇都宮市民電力・那須電力",
    role: "地域密着型新電力",
    detail:
      "宇都宮市民電力・那須電力等の地域密着型新電力。地産地消型の再エネメニューや、地元事業者向けの優遇プラン。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰で県内でも新電力の新規受付停止・撤退が発生したが、2024年以降は12社程度が法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東京電力EP『業務用高圧電力』の電力量料金は栃木県内で17〜21円/kWh。燃料費調整額（2024〜2025年は+2.5〜+4.0円/kWh）と再エネ賦課金を加味した実質単価は24〜29円/kWhレンジ。全国平均並み〜やや低め。新電力切替で1〜2円/kWh安くなるケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。日産自動車栃木工場・ホンダ栃木製作所・キヤノン宇都宮工場等の大規模工場が対象。新電力切替・需要家主導型PPA活用で年5〜10%の削減事例多数。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東京電力EP『低圧電力』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯は17〜21円/kWh。",
  },
  {
    label: "燃料費調整額の県内特性",
    detail:
      "東京電力エリアの燃料費調整額は2022〜2023年は月最大+6円/kWh水準、2024〜2025年は+2.5〜+4.0円/kWhレンジ。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・自動車工業（小山市、特別高圧 4,800kW、年間 3,200万kWh）",
    before:
      "Before: 小山市の自動車部品メーカーA社（Tier1サプライヤー、プレス・塗装・組立ライン）。年間電気代 9.6億円。燃料費調整額直撃で2023年は前年比+1.9億円の上昇。塗装ブース送風機・コンプレッサーが旧式、デマンド管理は手動。",
    after:
      "After: 特別高圧の固定5年契約（東京電力外系新電力との競争入札で獲得）／塗装ブース送風機をインバータ化（SII補助1/3活用、投資 5,000万円）／デマンドコントローラー＋BEMS導入／需要家主導型PPA（オフサイト太陽光）2.5MW契約／屋根面積10,000m²に自家消費太陽光1.5MW導入。",
    result:
      "Result: 年間電気代 9.6億円 → 7.78億円（▲19%、▲1.82億円）／契約kW 4,800→4,200／投資回収 設備3.2年（補助金後 2.1年）、太陽光6.8年、オフサイトPPAは初期投資ゼロ。",
  },
  {
    title: "業種2: 流通業・物流センター（佐野市、特別高圧 2,000kW、年間 1,300万kWh）",
    before:
      "Before: 佐野市の物流センターB社（食品冷凍冷蔵 + 仕分けライン）。年間電気代 3.9億円。市場連動プランで2023年冬は月最大3,800万円の追加負担を経験。冷凍倉庫が旧式、ピーク管理未対応。",
    after:
      "After: 特別高圧の固定5年契約／冷凍冷蔵設備のコンプレッサーをインバータ式に更新（SII補助1/2活用、投資 1,300万円）／全LED化（投資 500万円）／デマンドコントローラー導入／屋根太陽光 1MW導入。",
    result:
      "Result: 年間電気代 3.9億円 → 3.20億円（▲18%、▲7,000万円）／契約kW 2,000→1,800／投資回収 設備2.2年（補助金後 1.4年）、太陽光7.5年。",
  },
  {
    title: "業種3: サービス業・日光/那須リゾートホテル（那須町、高圧 380kW、年間 200万kWh）",
    before:
      "Before: 那須のリゾートホテルC社（180室、温泉施設併設）。冬季の暖房・温泉加熱・スキー場リフト・融雪設備で電力消費が年間使用量の60%を占める。年間電気代 6,000万円。市場連動プラン継続で2023年1月は月900万円の請求（前年同月+330万円）を経験。",
    after:
      "After: 固定3年プランへ切替／温泉熱の予熱再利用（廃熱回収器導入）／全館LED化（投資 480万円、SII補助1/2活用）／寒冷地仕様ヒートポンプエアコンへの更新／融雪設備のスマート制御導入／屋上太陽光 80kW導入。",
    result:
      "Result: 年間電気代 6,000万円 → 5,040万円（▲16%、▲960万円）／契約kW 380→340／投資回収 1.9年（補助金後 1.0年）。",
  },
];

const costFactors = [
  {
    label: "内陸寒冷地の暖房需要",
    detail:
      "宇都宮・那須塩原の暖房度日2,500〜3,000で関東他県より寒冷。冬季月別電気代が他季の1.5〜2倍。年間電気代に占める暖房分は県内事業所平均で15〜25%、ホテル・病院等で35%超に達することも。",
  },
  {
    label: "自動車部品工場の高負荷",
    detail:
      "宇都宮・小山・栃木・足利の自動車部品サプライヤーは、プレス機・溶接機・塗装ブースなど大型負荷を抱える。デマンドピーク管理の巧拙が年間1,000〜5,000万円の電気代差につながる。",
  },
  {
    label: "観光業の連休・週末ピーク",
    detail:
      "日光・那須・鬼怒川のホテル・リゾート施設は連休・週末ピーク型の特殊な需要プロファイル。平日との需要差が大きく、契約kW最適化が経営インパクトに直結。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後と上昇。自動車部品工場（年間3,000万kWh）で年1.2億円規模の負担、5年で6億円。",
  },
  {
    label: "夏季冷房ピークと電力供給ひっ迫",
    detail:
      "栃木県は内陸で猛暑日が多く、夏季の電力需給ひっ迫時にはDR要請・節電要請が発出される。事業者側のDR契約・節電対応が経済的メリットに繋がる構造。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・塗装ブース",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "自動車工業・物流・観光業など栃木県主力業種で採択率が高い主力補助金。塗装ブース送風機・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・物流センターと相性が良い。栃木県は日照時間が長く、太陽光導入の経済性も高い。",
  },
  {
    name: "栃木県脱炭素・省エネ補助",
    target: "県内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "栃木県産業労働観光部所管。SII等の国補助との併用ルールに留意。",
  },
  {
    name: "宇都宮市・小山市・那須町の省エネ補助",
    target: "市町村内中小事業者の高効率設備導入",
    rate: "1/3、上限100万〜300万円",
    note: "市町村単位の補助金。小山市は工業向け、那須町は観光業向けの特化メニューあり。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "脱炭素モデル地域指定によるトータル支援",
    rate: "1/2、上限数十億円",
    note: "栃木県内では宇都宮市・那須塩原市等が脱炭素先行地域選定。地域内事業者は大型補助の対象。",
  },
];

const industryProfile = [
  {
    label: "自動車工業（宇都宮・小山・栃木・足利）",
    detail:
      "日産自動車栃木工場・ホンダ栃木製作所・キヤノン宇都宮工場・東京エレクトロン栃木等の集積。Tier1〜Tier2サプライヤーが多数。特別高圧契約が標準で年間使用量1,000〜5,000万kWh規模。",
  },
  {
    label: "電機・精密機械（宇都宮・佐野）",
    detail:
      "キヤノン・東京エレクトロン関連の精密機械・電子部品工場。クリーンルーム・製造装置の電力消費。",
  },
  {
    label: "観光業・ホテル（日光・那須・鬼怒川）",
    detail:
      "日光・東照宮・那須・鬼怒川温泉・霧降高原・塩原温泉等の観光地。シティホテル・温泉旅館・リゾート多数。",
  },
  {
    label: "物流・倉庫（佐野・小山・宇都宮）",
    detail:
      "首都圏物流の重要拠点。佐野IC・宇都宮IC周辺に大型物流センターが集積。冷凍冷蔵・仕分けラインの電力消費。",
  },
  {
    label: "農業・食品加工（県全域）",
    detail:
      "栃木県はいちご（とちおとめ）・乳業・米・かんぴょう等の産地。冷蔵・冷凍・乾燥設備が中心。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で栃木県内法人の新電力シェアは25〜30%。自動車工業の中堅・大企業では切替が進む一方、中小事業者は東京電力EP継続が多数。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動プランから固定プランへ回帰。",
  },
  {
    label: "東京電力EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・首都圏広域供給ネットワーク。デメリット: 単価が新電力比1〜2円/kWh高め。",
  },
  {
    label: "需要家主導型PPA案件の活発化",
    detail:
      "栃木県内・東京電力エリア内の太陽光・洋上風力プロジェクトとのPPA契約が、自動車工業・物流で活発化。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東京電力エリア供給実績、②大口需要家対応のバランシングコスト、③固定単価期間（3〜10年）、④燃料費調整額の有無・上限、⑤PPA組合せの5点が県内では特に重要。",
  },
];

const energySaving = [
  {
    label: "塗装ブース・乾燥炉の省エネ",
    detail:
      "自動車部品工場の塗装ブース送風機をインバータ化、乾燥炉の温度プロファイル最適化で電力▲20〜35%。投資回収 SII補助活用で 2〜4年。",
  },
  {
    label: "暖房ヒートポンプ転換",
    detail:
      "電気パネルヒーター・電気温風機からヒートポンプエアコンへの転換で暖房電力▲30〜50%。",
  },
  {
    label: "冷凍冷蔵設備のインバータ化",
    detail:
      "物流・食品加工の冷凍冷蔵庫コンプレッサーをインバータ式に更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "自家消費太陽光・PPA活用",
    detail:
      "栃木県は日照時間が長く、屋根面積1,000m²以上の事業所で太陽光1MW級導入が現実的。年間120〜140万kWh発電、投資回収 6〜8年（補助金後 4〜6年）。",
  },
  {
    label: "温泉廃熱の再利用",
    detail:
      "ホテル・旅館では温泉廃熱を給湯予熱・暖房補助に再利用することで暖房電力▲15〜25%。投資は熱交換器等で200〜500万円規模、回収 1〜2年。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季・冬季の両ピーク月の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東京電力EPの2023年6月改定後の単価で再見積を取得したか",
  "東京電力エリア新電力10〜15社からの相見積を取得したか",
  "塗装ブース・冷凍冷蔵設備・暖房設備の電力プロファイルを把握しているか",
  "再エネ賦課金減免制度の対象に該当するか",
  "需要家主導型PPA（太陽光・風力）案件の見積を取得したか",
  "DR契約のインセンティブを確認したか",
  "SII省エネ補助金・栃木県補助・市町村補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "観光業の連休・週末ピークを契約条件に織り込んでいるか",
];

const faqItems = [
  { question: "栃木県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の実質単価で全国平均並み〜やや低めです。東京電力エリアは新電力競争が活発で、新電力切替で1〜2円/kWh安くなるケースが多数あります。" },
  { question: "小山・宇都宮の自動車部品工場で電気代削減はどう進めますか？", answer: "①特別高圧の固定5年契約（年5〜10%削減）、②塗装ブース送風機のインバータ化（電力▲20〜35%）、③デマンドコントローラー＋BEMS導入、④屋根太陽光導入、⑤オフサイトPPA契約の5点パッケージが主力。投資回収はSII補助1/3活用で2〜5年が目安です。" },
  { question: "日光・那須のリゾートホテルの電気代削減で効果的な施策は？", answer: "①温泉廃熱の予熱再利用、②寒冷地仕様ヒートポンプエアコン更新、③全館LED化、④融雪設備のスマート制御、⑤固定プラン切替の5点パッケージで年15〜18%の削減事例が多数。SII補助1/2活用で投資回収1〜2年が目安です。" },
  { question: "栃木県で固定プランと市場連動プランのどちらが向きますか？", answer: "24時間稼働の自動車部品工場・物流冷凍倉庫・大型リゾートホテルは固定プランが圧倒的に向きます。中小オフィス・店舗は使用量が小さいため市場連動でも影響限定的ですが、2022〜2023年の市場高騰経験から固定プランが主流です。" },
  { question: "需要家主導型PPAは栃木県でどう活用できますか？", answer: "栃木県・東京電力エリア内の太陽光プロジェクトとのオフサイトPPA契約で20年程度の長期固定単価でCO2フリー電力を調達できます。自動車工業・物流で導入実績が増加しています。" },
  { question: "観光業の連休・週末ピーク負荷を抑える方法は？", answer: "①BEMSによる部分空調制御、②客室数に応じた空調系統分離、③LED化、④温泉廃熱再利用、⑤連休前後の負荷分散運用の5点が主力。投資回収 SII補助活用で1〜3年が目安です。" },
  { question: "栃木県で活用できる省エネ補助金は？", answer: "SII省エネ補助金、需要家主導型PPA補助金、栃木県脱炭素・省エネ補助、宇都宮市・小山市・那須町の市町村補助、脱炭素先行地域（宇都宮市・那須塩原市等）の特別支援が組合せ可能です。" },
  { question: "栃木県の日照時間と太陽光発電の採算性は？", answer: "栃木県は年間日照時間2,000時間超で太陽光発電に適した気候条件。屋根面積1,000m²以上の事業所で1MW級導入が現実的、年間120〜140万kWh発電、投資回収 6〜8年（補助金後 4〜6年）が目安です。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "経済産業省 関東経済産業局", url: "https://www.kanto.meti.go.jp/" },
  { name: "栃木県産業労働観光部", url: "https://www.pref.tochigi.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function TochigiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tochigi-business-electricity-cost"
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
          <span className="text-slate-800">栃木県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            栃木県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            栃木県は東京電力エリア、宇都宮・小山の自動車工業集積、日光・那須の観光業、佐野・宇都宮の物流拠点という4つの構造的特徴を持ちます。本ページでは県内法人の電気代水準、自動車工業・物流・リゾートホテルの業種別影響、PPA活用、補助金、契約見直しを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京電力エリア（栃木県）の電源構成・基本料金構造</li>
              <li>自動車工業・物流・リゾートホテルの電気代水準</li>
              <li>3業種でBefore/After削減事例</li>
              <li>内陸寒冷・観光連休ピークなど県固有のコスト要因</li>
              <li>SII・栃木県補助・市町村補助の組合せ活用パターン</li>
              <li>栃木県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">栃木県の電力事情と特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県は『東京電力エリア・内陸寒冷地』『自動車工業集積』『観光業（日光・那須）』『首都圏物流拠点』という4つの構造的特徴を持ちます。
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
            <h2 className="text-xl font-semibold text-slate-900">栃木県内の主要電力会社・新電力一覧</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県では2024年時点で約12社の新電力が法人向け高圧で新規受付中。東京電力エリアは新電力競争が全国で最も活発です。
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
            <h2 className="text-xl font-semibold text-slate-900">栃木県の電気料金水準と全国比較</h2>
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
            <h2 className="text-xl font-semibold text-slate-900">業種別影響度3件 — 自動車工業・物流・リゾートホテル（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。
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
            <h2 className="text-xl font-semibold text-slate-900">栃木県固有の電気代上昇要因</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県の電気代上昇は、複数の県固有要因が同時進行で重なります。
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
            <h2 className="text-xl font-semibold text-slate-900">栃木県の補助金・優遇制度</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県では国補助（SII等）に加え、県独自補助、市町村補助、脱炭素先行地域指定による特別支援が組合せ可能です。
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
            <h2 className="text-xl font-semibold text-slate-900">栃木県の主要産業と電力消費プロファイル</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県の事業者構成は、自動車工業、電機・精密機械、観光業・ホテル、物流・倉庫、農業・食品加工の5層構造です。
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
              栃木県の新電力シェアは2024年時点で25〜30%。自動車工業の中堅・大企業では切替が進んでいます。
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
              栃木県の省エネは『塗装ブース・乾燥炉省エネ』『暖房ヒートポンプ転換』『冷凍冷蔵設備のインバータ化』『自家消費太陽光・PPA』『温泉廃熱再利用』の5軸が主力です。
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
            <h2 className="text-xl font-semibold text-slate-900">栃木県向け契約見直しチェックリスト（12項目）</h2>
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
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで栃木県の電気代上振れリスクを確認する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              栃木県は内陸寒冷地・自動車工業集積・観光業ピーク負荷の3要因を抱えます。シミュレーターで自社条件における上振れ幅を試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季・冬季両ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜19%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="tochigi-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東京電力エナジーパートナー管内の詳細。" },
              { href: "/ibaraki-business-electricity-cost", title: "茨城県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/gunma-business-electricity-cost", title: "群馬県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/saitama-business-electricity-cost", title: "埼玉県の法人電気料金", description: "首都圏物流拠点の事情。" },
              { href: "/chiba-business-electricity-cost", title: "千葉県の法人電気料金", description: "京葉工業地帯を持つ隣接県事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "自動車工業・物流・リゾートホテルの選択肢。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/automotive-parts-electricity-cost-review", title: "自動車部品工場の電気料金見直し", description: "宇都宮・小山の自動車工業に直結。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "日光・那須のリゾートホテルに直結。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "佐野の物流冷凍倉庫向け。" },
              { href: "/corporate-ppa-types", title: "コーポレートPPAの類型", description: "オフサイトPPA活用パターン整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "塗装ブース・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東京電力の火力依存度を踏まえた解説。" },
              { href: "/region-supplier-withdrawal-map", title: "エリア別新電力撤退状況マップ", description: "県内新電力の動向を含む全国マップ。" },
            ]}
          />

          <ContentCta
            heading="栃木県の自社条件で電気代リスクを試算する"
            description="自動車工業・観光業・物流など栃木県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="栃木県の電力契約見直し、専門家に相談しませんか？"
            description="自動車工業・観光業・物流の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
