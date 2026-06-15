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
  "山形県の法人電気料金完全ガイド｜米沢機械工業・果樹冷蔵倉庫・蔵王観光業の契約最適化";
const pageDescription =
  "山形県の法人電気料金を地域特化で解説。東北電力エリアの寒冷地特性、米沢工業地帯の機械工業、さくらんぼ・りんごの果樹冷蔵倉庫、蔵王・銀山温泉の観光業の電力負荷プロファイル、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "山形県 法人電気料金",
    "東北電力 高圧 山形",
    "米沢 機械工業 電気代",
    "果樹冷蔵倉庫 電力",
    "蔵王 温泉 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/yamagata-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/yamagata-business-electricity-cost",
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
    label: "東北電力エリアと山形県の位置付け",
    detail:
      "山形県は東北電力ネットワーク管内。庄内・最上・村山・置賜の4地域から構成され、地域間で気象条件と産業構造が大きく異なる。県内総電力需要は約60億kWh規模で、東北電力エリア全体の8%程度を占める。",
  },
  {
    label: "電源構成 — 水力資源の豊富さ",
    detail:
      "山形県内には小規模水力発電所が多数立地し、東北電力の水力発電供給を支える。最上川流域の発電所群、月山ダム周辺水系がベースロード。再エネ比率は東北エリアでも高く、太陽光・風力・水力合計で30%超。",
  },
  {
    label: "気象条件 — 寒冷地と豪雪",
    detail:
      "暖房度日（HDD18）は年間3,500〜3,800で全国最高水準。冬季の降雪量は新庄・米沢で年間8〜12mに達し、屋根融雪・ロードヒーティング・除排雪電力需要が法人事業所コストを押し上げる。夏季は山形盆地で日中35℃超の猛暑日となり、冷房負荷も高い『寒暖両極の県』。",
  },
  {
    label: "需給ひっ迫 — 冬季暖房と夏季冷房の両ピーク",
    detail:
      "東北電力エリアでは冬季夕方（17〜20時）の暖房ピークと夏季午後（13〜16時）の冷房ピークが二重に発生。山形県は両ピークが顕著なエリアで、デマンド管理の重要性が高い。2022〜2023年は冬季・夏季ともに需給ひっ迫警報の発令対象となった。",
  },
  {
    label: "産業集積 — 米沢工業地帯と地場産業",
    detail:
      "米沢市を中心とする置賜工業地帯（NEC・東洋紡・三菱ケミカル系の関連工場）、村山地域の電子部品・精密機械、庄内地域の食品加工・酒造業など、産業ごとに電力消費プロファイルが大きく異なる。果樹園地帯の冷蔵倉庫も電力需要の特徴。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（東北電力ネットワーク・東北電力エナジーパートナー）",
    role: "一般送配電事業者・小売",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』『業務用電力B』など。2023年6月の規制料金改定で家庭向け21.94%値上げ。法人向けも同等の改定を実施。燃料費調整額の上限撤廃継続。",
  },
  {
    name: "東北電力フロンティア",
    role: "新電力（東北電力グループ）",
    detail:
      "東北電力グループの新電力。固定単価メニュー中心。県内事業者の切替先として実績多数。電源は東北電力の余剰電力と相対契約電源を組合せ。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "全国系新電力。中規模工場・物流拠点で実績。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開し県内営業を継続。",
  },
  {
    name: "ループでんき・Looopでんき",
    role: "市場連動系新電力",
    detail:
      "市場連動プラン中心の新電力。低圧の店舗・小規模事業所中心だが、リスク許容度の高い法人にも提供。冬季ピーク時のスポット価格高騰時には注意が必要。",
  },
  {
    name: "やまがた新電力",
    role: "地域密着型新電力",
    detail:
      "山形県内の自治体・地域企業出資の地域新電力。県内再エネ電源（小水力・太陽光・バイオマス）を優先調達し、地域循環型のエネルギー供給を志向。中小事業者・自治体施設に提供。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で東北エリア全体で新電力の新規受付停止・撤退が相次いだ。2024年以降は徐々に再開、現在は8社前後が山形県内で法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東北電力『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。全国平均比でやや低めだが、寒冷地特有の冬季使用量増で年間電気代総額は全国平均並みになる。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。米沢・酒田の大規模工場、製紙工場が対象。全国平均と比較してほぼ同水準で、寒冷地需要増を加味するとやや高めの実質負担。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東北電力『低圧電力（動力）』は10〜14円/kWh+調整項目。果樹園の冷蔵庫・小規模工場・店舗で利用。低圧電灯（事務所等）は17〜21円/kWh。",
  },
  {
    label: "燃料費調整額の山形県特性",
    detail:
      "東北電力エリアの燃料費調整額は北海道電力ほどではないが、女川原発の再稼働遅延・火力依存の中で2022〜2023年は月最大+6円/kWh水準まで上昇した経緯。2024〜2025年は+3.0〜+4.5円/kWhレンジで推移するが、為替・原油価格次第で再度上振れリスク。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・米沢機械工業（高圧 450kW、年間 230万kWh）",
    before:
      "Before: 米沢市の機械加工メーカーA社。NC旋盤・マシニングセンタ40台、コンプレッサー6台運用。市場連動プラン継続で2023年冬には月最大520万円の電気代を経験。年間電気代 5,400万円。コンプレッサー旧型のまま、デマンド管理は手動、暖房は電気パネルヒーター主体で冬季電気代が突出。",
    after:
      "After: 東北電力フロンティアに切替し固定3年プラン採用。コンプレッサーをインバータ式に更新（SII補助1/2活用、投資850万円）、寒冷地仕様ヒートポンプエアコンへ転換、夜間機械稼働シフトでデマンドピーク▲20%。屋根面積1,800m²に自家消費太陽光250kW導入。",
    result:
      "Result: 年間電気代 5,400万円 → 4,460万円（▲17%、▲940万円）／契約kW 450→400／投資回収 3.0年（補助金後 1.5年）。",
  },
  {
    title: "業種2: 流通業・果樹冷蔵倉庫（東根市、高圧 380kW、年間 170万kWh）",
    before:
      "Before: さくらんぼ・りんごのCA冷蔵倉庫B社。果樹園組合所有で5月から翌年3月まで運用、収穫期5〜7月のピーク負荷が顕著。年間電気代 4,800万円。冷蔵庫設備が古く（20年経過）、冬季の凍結防止ヒーター電力が大きい。燃料費調整額直撃で2023年は前年比+800万円の上昇。",
    after:
      "After: 固定3年プランへ切替／冷蔵庫コンプレッサーをCO2冷媒インバータ式に更新（SII補助1/2活用、投資2,200万円）／断熱性能改善工事／凍結防止ヒーターを温水循環式に変更／屋根太陽光150kW自家消費＋蓄電池導入。",
    result:
      "Result: 年間電気代 4,800万円 → 3,840万円（▲20%、▲960万円）／契約kW 380→320／投資回収 補助金後 2.3年。",
  },
  {
    title: "業種3: サービス業・温泉ホテル（蔵王温泉、高圧 320kW、年間 175万kWh）",
    before:
      "Before: 蔵王温泉のリゾートホテルC社（180室）。冬季の暖房・温泉加熱・融雪設備で電力消費が年間使用量の55%を占める。年間電気代 5,200万円。市場連動プラン継続で2023年1月は月800万円の請求（前年同月+250万円）を経験。",
    after:
      "After: 固定3年プランへ切替／全館LED化（投資380万円、SII補助1/2活用）／高効率ヒートポンプ給湯機への更新／温泉熱交換器の高効率化／融雪設備のスマート制御導入（外気温・降雪量センサー連動）。",
    result:
      "Result: 年間電気代 5,200万円 → 4,420万円（▲15%、▲780万円）／契約kW 320→280／投資回収 1.7年（補助金後 0.9年）。",
  },
];

const costFactors = [
  {
    label: "寒冷地暖房需要のインパクト",
    detail:
      "暖房度日3,500超で全国最高水準。電気パネルヒーター・電気温風機・エアコンによる暖房負荷で、冬季月別電気代が他季の2〜3倍に。年間電気代に占める暖房分は県内事業所平均で25〜35%、温泉ホテル等で50%超。",
  },
  {
    label: "豪雪・融雪設備の電力消費",
    detail:
      "新庄・米沢で年間8〜12mの降雪。ロードヒーティング・屋根融雪・配管凍結防止ヒーター・駐車場融雪など本州にはない設備の電力消費が大きい。コンビニ・SS・物流拠点で年間100〜300万円規模の電気代要因。",
  },
  {
    label: "果樹園冷蔵倉庫の収穫期ピーク",
    detail:
      "さくらんぼ（6〜7月）・りんご（10〜12月）・ラ・フランス（10〜11月）の収穫期に冷蔵庫負荷が急増。CA冷蔵（低酸素貯蔵）は年間連続稼働で電力消費密度が高い。県全体で年間1〜2億kWh規模の特殊需要。",
  },
  {
    label: "夏季冷房需要の同時最大",
    detail:
      "山形盆地は内陸性気候で日中最高気温35℃超の日が年間10〜25日。冷房需要のピークが東北電力エリアでも特に強く、デマンドピーク管理の効果が大きい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間500万kWh使用の中規模事業所で年2,000万円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になりやすい果樹冷蔵業・食品加工は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "山形県内では機械工業（米沢）・食品加工（庄内）・果樹冷蔵（村山）など主要業種で採択実績多数。冷蔵庫コンプレッサー更新・LED化で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・倉庫と相性が良い。山形県は冬季積雪量が多いため、寒冷地・積雪荷重対応パネルの選定が必須。",
  },
  {
    name: "山形県省エネルギー設備導入支援補助金",
    target: "県内中小事業者の高効率設備導入",
    rate: "1/3〜1/2、上限500万〜1,000万円",
    note: "山形県独自の補助金。SII補助との併用ルールに留意。果樹園・酒造・農業法人を含む第一次産業関連事業者に手厚い。",
  },
  {
    name: "山形市・米沢市・酒田市の省エネ補助",
    target: "市内中小事業者の省エネ設備導入",
    rate: "1/3、上限100万〜300万円",
    note: "市町村単位の補助。山形市『中小企業ゼロカーボン化推進事業』、米沢市『産業活性化支援補助』など。県補助・SII補助との併用可能なケースあり。",
  },
  {
    name: "農林水産省 強い農業づくり交付金（果樹冷蔵向け）",
    target: "産地形成・冷蔵庫・選果場の設備更新",
    rate: "1/2、上限事業規模に応じる",
    note: "山形県は果樹産地として産地形成交付金の活用実績多数。CA冷蔵庫の更新・省エネ化との組合せ事業が代表例。",
  },
];

const industryProfile = [
  {
    label: "機械工業・電子部品（米沢・置賜）",
    detail:
      "米沢市を中心とする置賜地域に機械加工・電子部品・精密機械工場が集積。年間使用量100〜2,000万kWh規模の中堅工場が多数。電子部品工場は24時間稼働のクリーンルームで電力負荷が大きい。",
  },
  {
    label: "食品加工・酒造業（庄内・村山）",
    detail:
      "庄内地域は米菓・冷凍食品・水産加工、村山地域は果実加工・酒造業（山形・上山）の集積地。発酵・冷蔵設備の電力負荷が中心。年間使用量50〜500万kWh規模が中心。",
  },
  {
    label: "果樹園・農業冷蔵倉庫（東根・寒河江・天童）",
    detail:
      "さくらんぼ全国一の生産地。CA冷蔵庫（低酸素貯蔵）・予冷庫・選果場の電力負荷が大きい。果樹園農協・農業生産法人の所有で県内に100施設以上。",
  },
  {
    label: "観光業・温泉ホテル（蔵王・銀山・天童・米沢）",
    detail:
      "蔵王・銀山温泉・天童温泉・米沢温泉・湯野浜温泉などの温泉地、月山・鳥海山のスキー場。冬季暖房・温泉加熱・融雪電力需要が突出。ホテルは年間50〜500万kWh規模。",
  },
  {
    label: "製造業・自動車部品・繊維（山形市・天童市）",
    detail:
      "山形市・天童市周辺に自動車部品・繊維・印刷・木工等の中堅製造業が集積。家具工業（天童）も伝統産業として残存。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で山形県内法人の新電力シェアは15〜20%（経産省統計）と全国平均よりやや低い。山形市・米沢市の都市部では切替が進んだが、地方部では東北電力継続が多数。地域新電力（やまがた新電力）の存在感も中位水準。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。冬季のスポット価格高騰（JEPX 80円/kWh級）を経験した事業者は市場連動を敬遠する傾向が強い。",
  },
  {
    label: "東北電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・地震災害時の復旧体制。デメリット: 単価が新電力比1〜2円/kWh高め、燃料費調整額上限なし。米沢・山形都市圏では新電力との単価差が拡大している。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東北エリア供給実績の有無、②冬季需要急増時のバランシングコスト対応、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤地域経済貢献度の5点が県内では特に重要。やまがた新電力は地域経済循環の観点で選択肢となる。",
  },
  {
    label: "セット契約・付帯サービス",
    detail:
      "ガス＋電気セット、農協系（やまがた農協）の電気＋肥料セットなど、県内特有のセット商品も拡大中。総コスト最適化の観点で比較検討する価値あり。",
  },
];

const energySaving = [
  {
    label: "暖房ヒートポンプへの転換",
    detail:
      "電気パネルヒーター・電気温風機から寒冷地仕様ヒートポンプエアコンへの転換で暖房電力▲30〜50%。-25℃対応モデルが標準化されており、年間100〜400万円の削減事例多数。",
  },
  {
    label: "融雪設備のスマート制御",
    detail:
      "ロードヒーティング・屋根融雪の運転制御を外気温・降雪量センサー連動に。従来のタイマー運転から需要連動に変更で電力▲30〜60%。投資回収 1〜2年。",
  },
  {
    label: "果樹冷蔵庫のCO2冷媒インバータ化",
    detail:
      "20年経過の果樹冷蔵庫をCO2冷媒（自然冷媒）+インバータ式に更新で電力▲30〜45%。さくらんぼ・りんご・ラ・フランスのCA冷蔵で導入実績多数。投資回収 SII＋農水補助活用で 2〜3年。",
  },
  {
    label: "自家消費太陽光（寒冷地・積雪対応）",
    detail:
      "屋根面積1,500m²以上の事業所で500kW級導入が現実的。積雪荷重対応パネル選定が必須。冬季発電は本州平地の50〜60%だが、年間トータルでは投資回収 8〜11年（補助金後 5〜7年）。",
  },
  {
    label: "温泉熱の高効率利用",
    detail:
      "温泉ホテルでは源泉熱の熱交換器更新・温泉熱ヒートポンプ導入で暖房・給湯の電力負荷▲25〜40%。蔵王・銀山温泉での導入実績あり。投資回収 3〜5年。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）と夏季ピーク月（7〜8月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東北電力の2023年6月改定後の単価で再見積を取得したか",
  "県内新電力（やまがた新電力含む）5〜10社からの相見積を取得したか",
  "果樹冷蔵庫の収穫期ピーク（5〜7月、10〜12月）の電力プロファイルを把握しているか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "寒冷地・積雪対応の太陽光・蓄電池導入の試算を実施したか",
  "融雪・凍結防止ヒーターの運転時間を最適化したか",
  "SII補助・山形県補助・市町村補助・農水補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "庄内（沿岸）・置賜（内陸）・最上（豪雪）の地域差を踏まえた対策ができているか",
];

const faqItems = [
  { question: "山形県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の単価ベースで全国平均よりやや低めですが、冬季の暖房負荷・夏季の冷房負荷で年間使用量が多くなるため、年間総額では全国平均並みかやや高め。中規模事業所（年間100万kWh）で年100〜200万円、大規模工場（年間1,000万kWh）で年1,000〜2,000万円の差が生じます。" },
  { question: "東北電力の燃料費調整額の特徴は？", answer: "電源構成で石炭・LNG火力依存度が60%程度のため、燃料費調整額の変動幅は中程度です。2022〜2023年は月最大+6円/kWh、2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。女川原発の再稼働進展で長期的には負担減の可能性ありますが、為替・原油価格次第で再度上振れリスクがあるため、上限付きプランへの切替を推奨します。" },
  { question: "山形県で固定プランと市場連動プランのどちらが向きますか？", answer: "冬季ピーク時のスポット価格高騰リスクを考えると、24時間稼働の工場・果樹冷蔵・温泉ホテルは固定プランが圧倒的に向きます。市場連動プランは、夏季のみ稼働・週末停止可能な事業所など限定的なケースのみ検討対象です。" },
  { question: "果樹園・冷蔵倉庫の電気代削減ポイントは？", answer: "①CO2冷媒インバータ式冷蔵庫への更新（SII＋農水補助活用）、②CA冷蔵の予冷時間最適化、③屋根太陽光＋蓄電池の自家消費、④凍結防止ヒーターの温水循環化、の4点が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "山形県の自家消費太陽光は採算が取れますか？", answer: "屋根面積1,500m²以上、24時間稼働の事業所で投資回収は8〜11年（補助金後 5〜7年）が目安です。冬季発電量は本州平地の50〜60%まで低下しますが、夏季の発電量が多く年間トータルでは1MWあたり90〜110万kWh発電可能。積雪荷重対応パネル選定が必須です。" },
  { question: "蔵王温泉ホテル等で活用できる省エネ施策は？", answer: "温泉熱の熱交換器更新・温泉熱ヒートポンプ給湯、LED全館化、融雪設備スマート制御、寒冷地仕様エアコン更新の4本柱が効果的。蔵王・銀山温泉での導入実績があり、投資回収はSII補助活用で1〜3年が目安です。" },
  { question: "山形県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、山形県省エネルギー設備導入支援補助金、山形市・米沢市・酒田市の市町村補助、農水省の強い農業づくり交付金（果樹冷蔵向け）の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "やまがた新電力は契約先として検討に値しますか？", answer: "山形県内の自治体・地域企業出資の地域新電力で、県内再エネ電源（小水力・太陽光・バイオマス）を優先調達します。料金水準は東北電力フロンティアと同程度。地域経済循環・脱炭素貢献を重視する事業者にとっては選択肢になります。中小事業者・自治体施設で実績多数です。" },
];

const sourcesItems = [
  { name: "東北電力 公式サイト", url: "https://www.tohoku-epco.co.jp/" },
  { name: "経済産業省 東北経済産業局", url: "https://www.tohoku.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function YamagataBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/yamagata-business-electricity-cost"
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
          <span className="text-slate-800">山形県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            山形県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            山形県は東北電力エリアの中でも寒暖両極の気候を持ち、米沢機械工業・庄内食品加工・東根の果樹冷蔵・蔵王温泉観光業など多彩な産業が集積します。本ページでは県内法人の電気代水準、業種別影響度、寒冷地・豪雪・果樹冷蔵などの固有要因、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東北電力エリアにおける山形県の電気代水準と全国比較</li>
              <li>米沢機械工業・果樹冷蔵倉庫・蔵王温泉ホテルのBefore/After削減事例</li>
              <li>寒冷地・豪雪・果樹冷蔵・温泉観光業など山形県固有のコスト構造</li>
              <li>SII・山形県補助・市町村補助・農水補助の組合せ活用パターン</li>
              <li>山形県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              山形県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山形県は東北電力ネットワーク管内で、庄内・最上・村山・置賜の4地域から構成されます。寒暖の両極となる気候、豊富な水力資源、米沢機械工業地帯、果樹園冷蔵倉庫、温泉観光業の集積が県内電力消費の特徴を形成します。
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
              東北電力エリアの全体像は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東北電力エリア事情
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
              山形県では2024年時点で8社前後の新電力が法人向け高圧で新規受付中です。東北電力グループ系、全国系、市場連動系、地域密着型（やまがた新電力）の4カテゴリが主軸となります。
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
              <Link href="/how-to-choose-new-electricity-supplier" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              山形県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東北電力エリアの単価は全国比でやや低めですが、山形県は冬季暖房・夏季冷房の両ピークで使用量が多くなるため、年間総額では全国平均並みになります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 米沢機械工業・果樹冷蔵・温泉ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山形県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、冷蔵倉庫の見直しは{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              山形県固有の電気代上昇要因 — 寒冷地・豪雪・果樹冷蔵・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山形県の電気代上昇は、複数の県固有要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              山形県の補助金・優遇制度 — SII・県独自・市町村・農水補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山形県では国補助（SII等）に加え、県独自補助、市町村補助、農水省の果樹冷蔵向け補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜3年短縮できます。
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
              山形県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山形県の事業者構成は、米沢機械工業、庄内食品加工、果樹園冷蔵倉庫、温泉観光業、自動車部品・繊維の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              山形県の新電力シェアは2024年時点で15〜20%程度。都市部では切替が進む一方、地方部では東北電力継続が多数です。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              山形県の省エネは『暖房ヒートポンプ転換』『融雪スマート制御』『果樹冷蔵CO2冷媒化』『寒冷地仕様太陽光』『温泉熱高効率利用』の5軸が主力。本州平地とは異なる寒冷地・豪雪・農業冷蔵・温泉観光固有の打ち手を理解することが重要です。
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
              山形県向け契約見直しチェックリスト（12項目）
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
              シミュレーターで山形県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山形県は寒冷地暖房・豪雪・果樹冷蔵・夏季冷房の4重リスクを抱えます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>冬季ピーク月（1〜2月）と夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜20%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="yamagata-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北電力管内の料金体系・改定動向の詳細。" },
              { href: "/akita-business-electricity-cost", title: "秋田県の法人電気料金", description: "隣接県・風力発電全国1位の秋田県の事情。" },
              { href: "/miyagi-business-electricity-cost", title: "宮城県の法人電気料金", description: "東北の中核都市仙台を擁する宮城県の事情。" },
              { href: "/fukushima-business-electricity-cost", title: "福島県の法人電気料金", description: "東北電力エリア・浜通り工業の福島県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "寒冷地・24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "冬季ピーク負荷の大きい法人が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "果樹冷蔵庫の削減ポイント。" },
              { href: "/food-industry-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "庄内・村山の食品加工業の見直し論点。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "蔵王・銀山温泉ホテル特有のコスト構造。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "積雪荷重対応パネル選定のポイントを含む。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "ヒートポンプ・冷蔵設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東北電力でも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="山形県の自社条件で電気代リスクを試算する"
            description="寒冷地暖房・豪雪・果樹冷蔵・温泉熱利用など山形県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替効果や省エネ投資のROIもあわせて確認できます。"
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
            heading="山形県の電力契約見直し、専門家に相談しませんか？"
            description="寒冷地・豪雪・果樹冷蔵・温泉観光業の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
