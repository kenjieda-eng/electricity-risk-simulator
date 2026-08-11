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
  "埼玉県の電気代 平均・相場の基準と電力会社の比較｜法人向け単価と見直し【2026】";
const pageDescription =
  "埼玉県の法人電気代について、平均・相場を全国の確定単価（高圧21.37円/kWh・低圧電力32.12円/kWh等）から読む手順を整理。電力会社を比較する5観点、圏央道・関越道の物流拠点や熊谷の猛暑がもたらす夏季ピーク負荷を踏まえた契約見直しを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "埼玉県 法人電気料金",
    "東京電力 高圧 燃料費調整額",
    "埼玉 物流センター 電気代",
    "さいたま市 オフィスビル",
    "埼玉 工業団地 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/saitama-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/saitama-business-electricity-cost",
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
    label: "東京電力エリアの首都圏中核（埼玉県）",
    detail:
      "埼玉県は東京電力パワーグリッド管轄。首都圏電力供給の重要拠点で、人口740万人で全国5位。県内の電力消費は『さいたま市・川口市の都市部』『川越・所沢の住宅商業地』『熊谷・本庄の工業』『久喜・春日部の物流』『秩父・飯能の山間部』の5層構造。",
  },
  {
    label: "電源構成 — 県内発電は限定的",
    detail:
      "埼玉県内には大規模な火力・原子力発電所は立地せず、太陽光発電と小規模水力が主体。電力消費の大部分は首都圏外（茨城・福島・新潟）からの送電に依存。県内には東京電力・新河岸変電所等の重要中継拠点が立地。",
  },
  {
    label: "気象条件 — 関東平野の温暖気候・夏季猛暑",
    detail:
      "さいたまの暖房度日（HDD18）は約2,000、熊谷で約2,200。冬季は東京とほぼ同等。一方で熊谷市は年間最高気温日本一を記録した猛暑地帯で、夏季冷房需要が突出。",
  },
  {
    label: "首都圏物流2大拠点",
    detail:
      "圏央道沿線（久喜・幸手・桶川・坂戸）と関越道沿線（川越・東松山・所沢）の物流拠点が日本最大級。Amazon・楽天・ヤマト運輸・佐川急便等の大型物流センターが集積、24時間稼働で大量電力を消費。",
  },
  {
    label: "工業団地と東京近郊型製造業",
    detail:
      "川口の鋳物工業、熊谷・本庄・深谷の自動車部品（SUBARU・日産関連）、川越・狭山のホンダ関連工場、所沢のキヤノン・東芝関連が集積。東京近郊型の中堅工場が多い特徴を持つ。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東京電力EP）",
    role: "小売（旧一般電気事業者）",
    detail:
      "東京電力グループの小売部門。埼玉県内の高圧・特別高圧の標準メニューは『業務用電力』『業務用季節別時間帯別電力』等。2023年6月の規制料金改定では14.0%値上げ。",
  },
  {
    name: "東京電力パワーグリッド",
    role: "一般送配電事業者",
    detail:
      "首都圏（1都7県）を管轄する送配電事業者。",
  },
  {
    name: "ENEOSでんき・ソフトバンクでんき・auでんき・ジェイコムでんき",
    role: "全国系新電力",
    detail:
      "全国系の新電力が県内で活発に営業。物流センター・オフィスビル・自動車部品工場向けに固定単価メニューを展開。",
  },
  {
    name: "東京ガス・ニチガス・大阪ガス（オーパスエナジー）",
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
    name: "さいたま市民電力・ところざわ電力",
    role: "地域密着型新電力",
    detail:
      "さいたま市民電力・ところざわ電力等の地域密着型新電力。地産地消型の再エネメニューや、地元事業者向けの優遇プラン。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰で県内でも新電力の新規受付停止・撤退が発生したが、2024年以降は15社以上が法人向け高圧で新規受付中。東京電力エリアは新電力競争が全国で最も活発。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東京電力EP『業務用高圧電力』の電力量料金は埼玉県内で17〜21円/kWh。燃料費調整額（2024〜2025年は+2.5〜+4.0円/kWh）と再エネ賦課金を加味した実質単価は24〜29円/kWhレンジ。全国平均並み〜やや低め。新電力切替で1〜2円/kWh安くなるケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。大型物流センター・自動車関連工場・大型商業施設等が対象。新電力切替・需要家主導型PPA活用で年5〜10%の削減事例多数。",
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

// --- 平均・相場の基準に置く全国の確定単価 ---
// 出典: 電力・ガス取引監視等委員会「電力取引報」から算出（2026年4月分・確定／全国計・検針期間ベース）。
// 消費税・再エネ賦課金は含まない。県別・エリア別の平均値ではない点に注意。
const nationalConfirmedUnitPrices = [
  {
    category: "特別高圧",
    unit: "17.56円/kWh",
    note: "圏央道・関越道沿線の大型物流センター、自動車関連工場、大型商業施設が属する区分。",
  },
  {
    category: "高圧",
    unit: "21.37円/kWh",
    note: "県内の中規模倉庫・工場、さいたま市内のオフィスビルや商業施設の主力区分。",
  },
  {
    category: "低圧電灯",
    unit: "25.94円/kWh",
    note: "住宅・商業密集地の店舗や小規模事務所で、照明・OA機器に対応する契約分。",
  },
  {
    category: "低圧電力",
    unit: "32.12円/kWh",
    note: "小規模事業所の動力設備。飲食店の業務用空調や冷凍冷蔵ショーケースなどが該当。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・自動車部品工場（熊谷市、特別高圧 3,500kW、年間 2,400万kWh）",
    before:
      "Before: 熊谷市の自動車部品メーカーA社（SUBARU系Tier1、プレス・塗装・組立）。年間電気代 7.2億円。燃料費調整額直撃で2023年は前年比+1.4億円の上昇。塗装ブース送風機・コンプレッサーが旧式、デマンド管理は手動。",
    after:
      "After: 特別高圧の固定5年契約／塗装ブース送風機をインバータ化（SII補助1/3活用、投資 4,500万円）／デマンドコントローラー＋BEMS導入／需要家主導型PPA（オフサイト太陽光）2MW契約／屋根面積8,000m²に自家消費太陽光1.2MW導入。",
    result:
      "Result: 年間電気代 7.2億円 → 5.83億円（▲19%、▲1.37億円）／契約kW 3,500→3,050／投資回収 設備3.2年（補助金後 2.1年）、太陽光6.8年、オフサイトPPAは初期投資ゼロ。",
  },
  {
    title: "業種2: 流通業・大型物流センター（久喜市・圏央道沿線、特別高圧 4,500kW、年間 2,800万kWh）",
    before:
      "Before: 久喜市の大型物流センターB社（Amazon系/楽天系等、24時間稼働、冷凍冷蔵+常温倉庫+仕分けライン）。年間電気代 8.4億円。市場連動プランで2023年冬は月最大8,000万円の追加負担を経験。冷凍倉庫が旧式、ピーク管理未対応。",
    after:
      "After: 特別高圧の固定5年契約（複数新電力の競争入札）／冷凍冷蔵設備のコンプレッサーをインバータ式に更新（SII補助1/2活用、投資 2,400万円）／全LED化（投資 1,000万円）／デマンドコントローラー＋BEMS導入／屋根面積25,000m²に自家消費太陽光3MW導入／需要家主導型PPA（オフサイト太陽光）2MW契約。",
    result:
      "Result: 年間電気代 8.4億円 → 6.80億円（▲19%、▲1.60億円）／契約kW 4,500→4,000／投資回収 設備2.0年（補助金後 1.3年）、太陽光6.5年。",
  },
  {
    title: "業種3: サービス業・さいたま市オフィスビル（さいたま市大宮区、高圧 800kW、年間 380万kWh）",
    before:
      "Before: 大宮駅前のオフィスビルC社（テナント30社、地下駐車場・空調24時間運転）。年間電気代 1.14億円。市場連動プラン継続で2023年は月最大1,500万円の追加負担を経験。空調・照明が旧式、BEMS未導入。",
    after:
      "After: 固定3年プランへ切替／BEMS導入（投資 800万円、SII補助1/2活用）／空調・照明の自動制御／全館LED化（投資 600万円）／屋上太陽光 200kW導入。",
    result:
      "Result: 年間電気代 1.14億円 → 9,400万円（▲18%、▲2,000万円）／契約kW 800→720／投資回収 BEMS2.0年（補助金後 1.0年）、LED1.5年、太陽光7.5年。",
  },
];

const costFactors = [
  {
    label: "首都圏物流拠点の大量電力消費",
    detail:
      "圏央道・関越道沿線の大型物流センターは、Amazon等の24時間稼働で年間使用量1,000〜5,000万kWh規模の大口需要家。1〜2円/kWhの単価差が年数千万〜数億円の経営インパクトとなる。",
  },
  {
    label: "熊谷市猛暑日の冷房ピーク",
    detail:
      "熊谷市は年間最高気温日本一を記録した猛暑地帯。年間40度超を記録する日も多く、夏季の電力需給ひっ迫リスクが高い。事業者側のDR契約・節電対応が経済的メリットに繋がる構造。",
  },
  {
    label: "県南・県北の地域差",
    detail:
      "さいたま市・川口市等の県南は東京近接で商業・オフィス集積、熊谷・本庄等の県北は工業・物流集積、秩父・飯能は山間部観光地と、地域による電力消費プロファイルが大きく異なる。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。大型物流センター（年間3,000万kWh）で年1.2億円規模の負担、5年で6億円。",
  },
  {
    label: "夏季冷房ピークと電力供給ひっ迫",
    detail:
      "埼玉県は首都圏電力消費の重要部分を占めるため、夏季の電力需給ひっ迫時にはDR要請・節電要請が発出される。事業者側のDR契約・節電対応が経済的メリット（インセンティブ）にも繋がる構造。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・塗装ブース・BEMS",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "物流・自動車部品・オフィスビルなど埼玉県主力業種で採択率が高い主力補助金。冷凍倉庫・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい物流センター・工場と相性が良い。埼玉県は日照時間が長く、太陽光導入の経済性も高い。",
  },
  {
    name: "埼玉県脱炭素・省エネ補助",
    target: "県内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限500万〜5,000万円",
    note: "埼玉県環境部・産業労働部所管。SII等の国補助との併用ルールに留意。",
  },
  {
    name: "さいたま市・川口市・川越市・熊谷市の省エネ補助",
    target: "市内中小事業者の高効率設備導入",
    rate: "1/3、上限100万〜500万円",
    note: "市町村単位の補助金。さいたま市はオフィスビル向け、熊谷市は猛暑対策の特化メニューあり。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "脱炭素モデル地域指定によるトータル支援",
    rate: "1/2、上限数十億円",
    note: "埼玉県内では秩父市・さいたま市等が脱炭素先行地域選定。地域内事業者は大型補助の対象。",
  },
];

const industryProfile = [
  {
    label: "物流・倉庫（圏央道・関越道沿線）",
    detail:
      "Amazon・楽天・ヤマト・佐川等の大型物流センターが日本最大級の集積。久喜・幸手・桶川・川越・東松山・所沢・坂戸の物流拠点。冷凍冷蔵・仕分けライン・空調の24時間稼働。",
  },
  {
    label: "自動車関連（熊谷・本庄・深谷・川越・狭山）",
    detail:
      "SUBARU・ホンダ・日産関連のサプライヤーが集積。プレス・溶接・塗装・組立ライン。特別高圧契約が標準。",
  },
  {
    label: "オフィスビル・商業施設（さいたま・川口・川越）",
    detail:
      "さいたま新都心・大宮・浦和・川口・川越のオフィスビル・商業施設。空調・照明・OA機器の電力消費が中心。中小〜大型まで多様。",
  },
  {
    label: "鋳物・金属加工（川口）",
    detail:
      "川口市の鋳物工業（鋳物機械・建設機械・農業機械等）。電気溶融炉・電気炉の電力消費。",
  },
  {
    label: "農業・食品加工（県北・県西）",
    detail:
      "深谷ネギ・狭山茶・行田米等の農産物加工。冷蔵・冷凍・乾燥設備が中心。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で埼玉県内法人の新電力シェアは30〜35%（経産省統計）と全国でも高水準。大型物流センター・自動車部品工場では切替が進む。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動プランから固定プランへ回帰。大型物流センターでは月数千万円の追加負担を経験した事業者は固定プランへ完全移行。",
  },
  {
    label: "東京電力EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・首都圏広域供給ネットワーク。デメリット: 単価が新電力比1〜2円/kWh高め。",
  },
  {
    label: "需要家主導型PPA案件の活発化",
    detail:
      "埼玉県内・東京電力エリア内の太陽光プロジェクトとのオフサイトPPA契約が、大型物流センター・自動車工業で活発化。物流業界でRE100対応が拡大。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東京電力エリア供給実績、②大口需要家対応のバランシングコスト、③固定単価期間（3〜10年）、④燃料費調整額の有無・上限、⑤PPA組合せの5点が県内では特に重要。",
  },
];

const energySaving = [
  {
    label: "物流冷凍冷蔵設備の省エネ",
    detail:
      "圏央道・関越道沿線の物流センター冷凍冷蔵庫のコンプレッサーをインバータ式に更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "BEMSによるオフィス省エネ",
    detail:
      "さいたま・川口都市圏のオフィスビルでBEMSによる空調・照明の自動制御で電力▲10〜20%。投資回収 2〜4年。テナント密度の高いビルほど効果が大きい。",
  },
  {
    label: "塗装ブース・乾燥炉の省エネ",
    detail:
      "自動車部品工場の塗装ブース送風機をインバータ化、乾燥炉の温度プロファイル最適化で電力▲20〜35%。投資回収 SII補助活用で 2〜4年。",
  },
  {
    label: "自家消費太陽光・PPA活用",
    detail:
      "埼玉県は日照時間が長く、屋根面積1,000m²以上の事業所で太陽光1MW級導入が現実的。大型物流センターでは2〜5MW級導入事例も。年間120〜140万kWh/MW発電、投資回収 6〜8年（補助金後 4〜6年）。",
  },
  {
    label: "DR（デマンドレスポンス）契約",
    detail:
      "夏季ピーク時の節電要請に応じることで、年100〜500万円のインセンティブ。熊谷等の猛暑エリアでは特に重要な打ち手。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季・冬季の両ピーク月の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東京電力EPの2023年6月改定後の単価で再見積を取得したか",
  "東京電力エリア新電力10〜15社からの相見積を取得したか",
  "冷凍冷蔵設備・塗装ブース・オフィス空調の電力プロファイルを把握しているか",
  "再エネ賦課金減免制度の対象に該当するか",
  "需要家主導型PPA（太陽光・風力）案件の見積を取得したか",
  "DR契約のインセンティブを確認したか",
  "SII省エネ補助金・埼玉県補助・市町村補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "猛暑日（熊谷等）の電力需給ひっ迫対応を契約条件に織り込んでいるか",
];

const faqItems = [
  { question: "埼玉県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の実質単価で全国平均並み〜やや低めです。東京電力エリアは新電力競争が全国で最も活発で、新電力切替で1〜2円/kWh安くなるケースが多数あります。大型物流センターは競争入札で更に有利な条件を引き出せます。" },
  { question: "圏央道・関越道沿線の大型物流センターで電気代削減はどう進めますか？", answer: "①特別高圧の固定5年契約（年5〜10%削減）、②冷凍冷蔵設備のコンプレッサーをインバータ化（電力▲25〜40%）、③屋根太陽光導入（2〜5MW級、年間2,500〜6,500万円削減）、④BEMS導入、⑤オフサイトPPA契約の5点パッケージが主力。投資回収はSII補助・需要家主導型PPA補助で1.5〜3年が目安です。" },
  { question: "さいたま・川口のオフィスビルの電気代削減で効果的な施策は？", answer: "①BEMS導入による空調・照明自動制御（電力▲10〜20%）、②全館LED化、③固定プラン切替、④屋上太陽光導入、⑤テナント側の節電インセンティブ設計の5点が主力。SII補助1/2活用で投資回収 1〜3年が目安です。" },
  { question: "埼玉県で固定プランと市場連動プランのどちらが向きますか？", answer: "24時間稼働の大型物流センター・自動車部品工場・大型商業施設は固定プランが圧倒的に向きます。中小オフィス・店舗は使用量が小さいため市場連動でも影響限定的ですが、2022〜2023年の市場高騰経験から固定プランが主流です。" },
  { question: "熊谷市の猛暑日対策はどう進めますか？", answer: "①BEMSによる空調制御の精密化、②DR契約活用（インセンティブ年100〜500万円）、③蓄電池併設による昼間放電、④夏季ピーク時の生産シフト、⑤太陽光自家消費（昼間発電と冷房需要の同期）の5点が主力です。" },
  { question: "需要家主導型PPAは埼玉県でどう活用できますか？", answer: "埼玉県・東京電力エリア内の太陽光プロジェクトとのオフサイトPPA契約で20年程度の長期固定単価でCO2フリー電力を調達できます。物流業界でRE100対応として導入が活発化しています。" },
  { question: "埼玉県で活用できる省エネ補助金は？", answer: "SII省エネ補助金、需要家主導型PPA補助金、埼玉県脱炭素・省エネ補助、さいたま市・川口市・川越市・熊谷市の市町村補助、脱炭素先行地域（秩父市・さいたま市等）の特別支援が組合せ可能です。" },
  { question: "鋳物工業（川口）の電気代削減で効果的な施策は？", answer: "①電気溶融炉のインバータ化・高効率化、②力率改善コンデンサ設置（基本料金の力率割引最大15%獲得）、③廃熱回収による予熱再利用、④固定プラン切替の4点が主力。SII補助1/2活用で投資回収2〜4年が目安です。" },
  { question: "埼玉県の電気代の平均・相場はいくらですか？", answer: "県別に法人の電気代平均を示した公的統計はないため、契約区分ごとの全国確定単価を基準にします。電力取引報の最新確定分である2026年4月分（全国計・検針期間ベース）は、特別高圧17.56円/kWh、高圧21.37円/kWh、低圧電灯25.94円/kWh、低圧電力32.12円/kWhでした（消費税・再エネ賦課金を含まない参考値）。埼玉県は東京電力エリアのため、LNG火力比率の高さに由来する燃料費調整額の振れやすさを加味して読みます。自社の位置は、請求書から消費税と再エネ賦課金を差し引いた額（基本料金・電力量料金・燃料費調整額の合計）を使用量で割って求めた実質単価を、同じ区分の全国値と比べれば把握できます。" },
  { question: "埼玉県で電力会社を比較する際のポイントは？", answer: "①単価構成（基本料金と電力量料金の内訳、契約電力の決まり方）、②燃料費調整の方式（上限の有無・参照指標）、③市場連動の有無と連動範囲、④契約期間（自動更新条項の有無）、⑤解約条件（違約金・中途解約の可否）の5観点を揃えて比較します。夏季ピークの大きい物流施設では、契約電力の決まり方と燃調方式の組合せが年間コストに効くため、電力量料金の単価表だけでの比較は避けてください。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "経済産業省 関東経済産業局", url: "https://www.kanto.meti.go.jp/" },
  { name: "埼玉県環境部・産業労働部", url: "https://www.pref.saitama.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function SaitamaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/saitama-business-electricity-cost"
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
          <span className="text-slate-800">埼玉県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            埼玉県の法人電気料金ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            埼玉県は東京電力エリア、首都圏2大物流拠点（圏央道・関越道沿線）、さいたま・川口の都市部、熊谷・本庄の自動車部品工業、川口の鋳物工業という多層構造を持ちます。本ページでは県内法人の電気代水準、業種別影響、首都圏物流・猛暑日対策・PPA活用、補助金、契約見直しを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京電力エリア（埼玉県）の電源構成・基本料金構造</li>
              <li>首都圏物流・自動車工業・オフィスビルの電気代水準</li>
              <li>3業種でBefore/After削減事例</li>
              <li>首都圏物流拠点・熊谷猛暑日・県南北格差など県固有のコスト要因</li>
              <li>SII・埼玉県補助・市町村補助の組合せ活用パターン</li>
              <li>埼玉県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">埼玉県の電力事情と特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県は『東京電力エリアの首都圏中核』『日本最大級の物流拠点集積』『東京近郊型製造業』『熊谷猛暑日地帯』『県南北の地域差』という構造的特徴を持ちます。
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
              東京電力エリアの全体像は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京電力エリア事情</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">埼玉県内の主要電力会社・新電力一覧</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県では2024年時点で約15社の新電力が法人向け高圧で新規受付中。東京電力エリアは新電力競争が全国で最も活発です。
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
            <h2 className="text-xl font-semibold text-slate-900">埼玉県の電気料金水準と全国比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京電力エリアの単価は全国エリア比で並み〜やや低め。新電力競争が活発で切替メリットも大きいエリアです。
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
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">埼玉県の電気代 平均・相場の考え方（法人向け）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県の電気代の相場を知りたいとき、県別の法人電気代の平均を示した公的統計が存在しない点が出発点になります。埼玉県は圏央道・関越道沿線の大型物流センターと、県南の住宅・商業密集地に立地する小規模店舗が同居する構造で、契約区分も使用量の桁も大きく異なります。相場は「県の平均額」ではなく「自社と同じ契約区分の全国水準」として捉えるのが実務的です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>

            <p className="mt-5 text-sm font-semibold text-slate-900">① 全国の確定単価を契約区分ごとに確認する</p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              基準として使うのは、電力取引報の最新確定分である2026年4月分の実績単価です。同じ「電気代」でも区分によって水準が異なるため、請求書の契約種別欄を先に確認してください。
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {nationalConfirmedUnitPrices.map((row) => (
                <div key={row.category} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{row.category}　{row.unit}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{row.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※ 上記4区分の数値は全国計・検針期間ベースであり、埼玉県または東京電力エリアの平均値ではありません。消費税・再エネ賦課金は含みません。出典: 電力・ガス取引監視等委員会「電力取引報」から算出（2026年4月分・確定）。この単価に含む費目・含まない費目の定義は{" "}
              <Link href="/electricity-unit-price-per-kwh" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">1kWhあたりの電気料金単価</Link>
              {" "}で整理しています。
            </p>

            <p className="mt-5 text-sm font-semibold text-slate-900">② 東京電力エリアの要因で全国値を読み替える</p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県は全域が東京電力パワーグリッドの管内です。東京電力エリアはLNG火力の比率が高く、国際LNG価格の動きが燃料費調整額を通じて単価に反映されやすい構造にあります。全国値と自社単価の差を検討するときは、対象月の燃料費調整額がプラス方向・マイナス方向のどちらに働いていたかをまず確認してください。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型を検討する場合は、JEPX東京エリアプライスの傾向も要確認です。東京エリアは需要規模が大きく、猛暑・厳寒による需給逼迫時や燃料市況の変化で価格が振れやすい一方、太陽光の発電量が多い時間帯には昼間の価格が低下する場面もあります。熊谷を含む県北は夏の高温で知られ、冷房需要が伸びる時間帯と価格が振れやすい時間帯が重なりやすい点は、埼玉県の事業者にとって固有の論点です。エリアの推移は{" "}
              <Link href="/region-tokyo-electricity-price-trend" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京（関東）エリアの推移と単価水準</Link>
              {" "}にまとめています。
            </p>

            <p className="mt-5 text-sm font-semibold text-slate-900">③ 請求書から実質単価を計算して突き合わせる</p>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              自社が相場に対してどの位置にあるかは、次の計算で確認できます。
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              <li>直近12ヶ月分の請求書を並べ、月ごとの請求額と使用量（kWh）を控える</li>
              <li>請求額から消費税と再エネ賦課金を差し引き、基本料金・電力量料金・燃料費調整額の合計を残す</li>
              <li>その合計 ÷ 使用量 で、月ごとの実質単価（円/kWh）を求める</li>
              <li>12ヶ月平均を取り、自社と同じ契約区分の全国値と並べて差を見る</li>
              <li>差の大きい月について、燃料費調整額・基本料金（契約電力）・使用量の季節変動のどれが要因かを分解する</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              冷凍冷蔵を伴う物流センターでは夏季にデマンドが立ちやすく、その月の契約電力が年間の基本料金を決めてしまう構造があるため、月別の分解が特に効きます。業種平均との乖離率を確認する場合は{" "}
              <Link href="/benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種×規模 電気代ベンチマークツール</Link>
              、年間電気代と削減余地の試算には{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              {" "}を利用してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別影響度3件 — 自動車部品・物流・オフィスビル（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">埼玉県固有の電気代上昇要因</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県の電気代上昇は、複数の県固有要因が同時進行で重なります。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">埼玉県の補助金・優遇制度</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県では国補助（SII等）に加え、県独自補助、市町村補助、脱炭素先行地域指定による特別支援が組合せ可能です。
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
            <h2 className="text-xl font-semibold text-slate-900">埼玉県の主要産業と電力消費プロファイル</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県の事業者構成は、物流・倉庫、自動車関連、オフィスビル・商業施設、鋳物・金属加工、農業・食品加工の5層構造です。
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
              埼玉県の新電力シェアは2024年時点で30〜35%と全国でも高水準。大型物流センター・自動車部品工場では切替が進む一方、中小事業者は東京電力EP継続が多数です。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">県内事業者の節電・省エネ施策事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県の省エネは『物流冷凍冷蔵設備の省エネ』『BEMSによるオフィス省エネ』『塗装ブース・乾燥炉省エネ』『自家消費太陽光・PPA』『DR契約』の5軸が主力です。
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
            <h2 className="text-xl font-semibold text-slate-900">埼玉県向け契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで埼玉県の電気代上振れリスクを確認する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              埼玉県は首都圏物流拠点・熊谷猛暑日・自動車工業の3要因を抱えます。シミュレーターで自社条件における上振れ幅を試算できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季・冬季両ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した18〜19%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="saitama-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東京電力エナジーパートナー管内の詳細。" },
              { href: "/region-tokyo-electricity-price-trend", title: "東京（関東）エリアの推移と単価水準", description: "埼玉県が属する東京電力エリアの単価推移を深掘り。" },
              { href: "/electricity-price-trend-by-area", title: "エリア別の電気料金推移比較", description: "全国10エリアを横並びで比較する総論。" },
              { href: "/benchmark", title: "業種×規模 電気代ベンチマークツール", description: "月額電気代と使用量から業種平均との乖離率を即時判定。" },
              { href: "/ibaraki-business-electricity-cost", title: "茨城県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/tochigi-business-electricity-cost", title: "栃木県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/gunma-business-electricity-cost", title: "群馬県の法人電気料金", description: "東京電力エリアの隣接県事情。" },
              { href: "/chiba-business-electricity-cost", title: "千葉県の法人電気料金", description: "京葉工業地帯を持つ隣接県事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "物流・自動車工業・オフィスビルの選択肢。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "圏央道・関越道沿線の物流冷凍倉庫向け。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "さいたま・川口のオフィスビル向け。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品工場の電気料金見直し", description: "熊谷・本庄の自動車部品工業に直結。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPAの類型", description: "オフサイトPPA活用パターン整理。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根太陽光の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "冷凍冷蔵設備・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東京電力の火力依存度を踏まえた解説。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "物流センター連続稼働事業者向け。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="埼玉県の自社条件で電気代リスクを試算する"
            description="首都圏物流拠点・熊谷猛暑日対策・自動車工業など埼玉県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="埼玉県の電力契約見直し、専門家に相談しませんか？"
            description="首都圏物流拠点・自動車工業・オフィスビルの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
