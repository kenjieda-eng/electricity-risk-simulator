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
  "岐阜県の法人電気料金完全ガイド｜美濃陶磁器刃物・白川郷下呂温泉観光・東濃工業の契約最適化";
const pageDescription =
  "岐阜県の法人電気料金を地域特化で解説。中部電力エリアの美濃工業地帯（陶磁器・刃物・繊維）、白川郷・下呂温泉等の観光業、東濃の大規模工場集積、山岳地域の電力負荷プロファイル、特別高圧契約、補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "岐阜県 法人電気料金",
    "中部電力 高圧 美濃工業",
    "陶磁器 刃物 電気代",
    "白川郷 下呂温泉 電力",
    "東濃 工場 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/gifu-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/gifu-business-electricity-cost",
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
    label: "中部電力エリアと岐阜県の位置付け",
    detail:
      "岐阜県は中部電力ミライズのエリア。岐阜・大垣（西濃）、多治見・土岐（東濃）、高山・郡上（飛騨）の3地域から構成。県内総電力需要は約120億kWhで中部電力管内の約12%を占める。県内には水力発電所が多数立地（飛騨川水系・木曽川水系）、再エネ供給拠点としての位置付け。",
  },
  {
    label: "電源構成 — 飛騨水力と中部電源",
    detail:
      "県内には中部電力の水力発電所が多数立地（飛騨川・木曽川・長良川水系の水系発電所群）。県内水力発電出力は150万kW級で中部エリアのピーク調整に寄与。LNG火力・石炭火力は中部の他県（愛知・三重）に依存する形。",
  },
  {
    label: "気象条件 — 内陸盆地と山岳気候の二極化",
    detail:
      "西濃・東濃の盆地部は夏季高温（多治見市が日本最高気温記録更新の常連）。冬季は積雪あり。飛騨地域は典型的な山岳気候で冬季豪雪・低温が厳しい。年間冷房度日（CDD24）1,500〜1,800、暖房度日2,500〜3,500（地域差大）。",
  },
  {
    label: "需給ひっ迫 — 中部エリアの最大需要",
    detail:
      "中部電力管内の需給ひっ迫局面では、東濃陶磁器工場・大垣製造業等の大規模事業者へのDR要請が発動。電気炉・乾燥炉等の連続稼働ラインへの影響を最小化する運用が課題。観光業（白川郷・下呂・高山）はピーク時の電力安定供給がインバウンド対応で重要。",
  },
  {
    label: "美濃工業地帯と東濃陶磁器集積",
    detail:
      "東濃の多治見・土岐・瑞浪は陶磁器産業（タイル・洋食器）の全国一大集積地。電気窯・トンネル窯の電力消費が中心。関市は世界的な刃物産地。大垣・各務原・各務原は精密機械・繊維・航空機関連工業の集積。年間使用量500万〜5,000万kWh規模の中規模事業者が中心。",
  },
];

const utilitiesList = [
  {
    name: "中部電力ミライズ",
    role: "一般小売事業者",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『高圧電力Aｓ』『高圧電力Bs』『特高季節別時間帯別電力』など。2023年改定で家庭向け・低圧で約12〜18%値上げ。法人向けも同等の改定を実施し燃料費調整額上限が撤廃された。",
  },
  {
    name: "中部電力ミライズコネクト・JERA",
    role: "中部電力グループ",
    detail:
      "中部電力ミライズコネクトは法人向けに特化したサービスを提供。JERAは東京電力・中部電力の共同出資で火力発電を担い、卸供給の主軸。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "東濃陶磁器工場・大垣製造業の高圧契約で実績多数。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "サミットエナジー・シナネン・ミツウロコでんき",
    role: "ガス・燃料系新電力",
    detail:
      "ガス・燃料商社系の新電力。中小事業者・大口工場まで幅広く対応。陶磁器工場のガス炉とのセット提案で差別化。",
  },
  {
    name: "ぎふしんでんき・地域密着型新電力",
    role: "地域密着型",
    detail:
      "岐阜市・大垣市等の自治体施設、中小事業者向けに地産地消型の供給を展開。地域経済循環の観点で選択肢。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は10社前後が県内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "中部電力ミライズ『高圧電力Aｓ』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+2.5〜+4.0円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜29円/kWhレンジ。全国平均と同水準で、東濃工業地帯の中規模事業者は新電力競争で1〜2円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。大規模陶磁器工場・自動車部品工場・航空機関連工場などが対象。全国平均比1〜2円/kWh安い水準で、新電力競争入札による価格圧力が大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "中部電力ミライズ『低圧電力』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜20円/kWh。観光業（小規模旅館・店舗）は低圧電灯中心。",
  },
  {
    label: "観光業・自治体施設の契約",
    detail:
      "白川郷・下呂温泉・高山の観光業はピーク時の急増需要に備えた契約電力設定が必要。世界遺産白川郷では景観配慮で太陽光設置に制約あり。自治体施設は地域密着型新電力との地産地消契約も拡大中。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・陶磁器工場（多治見市、特別高圧 3,500kW、年間 2,700万kWh）",
    before:
      "Before: 多治見市の陶磁器メーカーA社（タイル・洋食器、トンネル窯3基稼働）。電気炉・トンネル窯が消費電力の60%。年間電気代 7.8億円。市場連動プラン継続で2023年夏には月最大1.1億円の電気代経験。連続稼働で電力ピークがフラットだがデマンド管理は手動。",
    after:
      "After: 特別高圧の固定5年契約（中部エリア専門新電力との競争入札で獲得）／電気窯を高効率インバータ制御＋蓄熱式に変更／LED・空調更新（SII補助1/3活用、投資1.5億円）／屋根面積1.0万m²に自家消費太陽光1.2MW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光2MW契約。",
    result:
      "Result: 年間電気代 7.8億円 → 6.2億円（▲20%、▲1.6億円）／契約kW 3,500→3,100／投資回収 補助金後 2.8年／CO2削減 40%。",
  },
  {
    title: "業種2: 観光業・温泉旅館（下呂温泉、高圧 600kW、年間 480万kWh）",
    before:
      "Before: 下呂温泉の大型温泉旅館B社（客室120室、源泉かけ流し）。年間電気代 1.6億円。冬季暖房・夏季冷房・温泉ポンプ・厨房が消費電力の主要要素。燃料費調整額上限撤廃で2023年は前年比+3,500万円の上昇。客室空調はピークシフト未対応で繁忙期の電力ピーク高い。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調をインバータ式に全面更新・人感センサ連動（SII補助1/2活用、投資3,200万円）／LED全館化／温泉ポンプを高効率インバータ式に更新／屋根太陽光150kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.6億円 → 1.28億円（▲20%、▲3,200万円）／契約kW 600→520／投資回収 補助金後 2.5年。",
  },
  {
    title: "業種3: 製造業・大規模自動車部品工場（大垣市、特別高圧 5,500kW、年間 4,300万kWh）",
    before:
      "Before: 大垣市の自動車部品メーカーC社（プレス・溶接・塗装ライン）。トヨタ系Tier 1。24時間2交替稼働、年間電気代 12.4億円。市場連動プランは採用せず固定プランだが、2022〜2023年改定で前年比+2.2億円の上昇。塗装乾燥炉・溶接電力が消費電力の60%。",
    after:
      "After: 特別高圧の固定5年契約を新電力との競争入札で更新（中部電力ミライズ継続より1.3円/kWh安）／塗装乾燥炉をヒートポンプ式に／溶接機をインバータ式に更新（SII補助1/3活用、投資1.8億円）／需要家主導型PPAでオフサイト太陽光・風力合計6MW契約／屋根太陽光1.5MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 12.4億円 → 9.9億円（▲20%、▲2.5億円）／契約kW 5,500→4,900／投資回収 補助金後 3.0年／RE100進捗 60%達成。",
  },
];

const costFactors = [
  {
    label: "東濃陶磁器産業のエネルギー多消費構造",
    detail:
      "電気窯・トンネル窯は1日24時間連続運転、停止・再起動コストが高い。電力単価1円/kWhの変動が事業継続性に直結。陶磁器産業は構造的に電力多消費で、省エネ投資の優先度極めて高い。",
  },
  {
    label: "原発ゼロ依存・燃料価格直撃",
    detail:
      "中部電力は浜岡原発全機停止中で原発比率ゼロ。LNG・石炭火力依存度が約85%と高く、燃料費調整額の変動幅が大きい。2022〜2023年は月最大+7円/kWh、2024〜2025年は+2.5〜+4.0円/kWhレンジで推移。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "トヨタ系自動車部品工場・航空機関連工場ではRE100・SBT・CDP対応のためにオフサイトPPA契約が急増。県内水力電源とのPPA契約も検討材料。サプライチェーン排出量（Scope 3）対応でTier 2以下まで波及。",
  },
  {
    label: "観光業の季節変動と山岳地暖房負荷",
    detail:
      "白川郷・下呂・高山の観光業は冬季の暖房需要が極めて大きい。豪雪地帯特有の融雪電力・客室暖房・外気冷房不可など、本州他県より電力負荷が25〜35%高い構造。",
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
    target: "高効率電気炉・コンプレッサー・LED・ヒートポンプ・産業用ボイラー・空調",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では東濃陶磁器工場・大垣自動車部品工場で大型採択実績多数。電気炉・トンネル窯の高効率化は採択率高い。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "東濃・西濃の大規模工場で屋根・空地活用の太陽光導入が有効。県内水力との組合せでBCP対応も可能。",
  },
  {
    name: "岐阜県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "岐阜県独自補助。陶磁器・刃物産業の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "岐阜市・多治見市・大垣市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "多治見市『多治見スマートシティ補助』、大垣市『大垣市カーボンニュートラル推進事業』など。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・宿泊施設向けGo To グリーン補助",
    target: "下呂温泉・白川郷・高山等の旅館・宿泊施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・環境省連携の宿泊施設省エネ補助。空調・厨房・温泉ポンプ更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "陶磁器・タイル（多治見・土岐・瑞浪）",
    detail:
      "INAX（多治見）、ノリタケ系、TOTO関連等の陶磁器・タイル工場。年間使用量500万〜3,000万kWh規模。電気窯・トンネル窯が中心の電力多消費型産業。",
  },
  {
    label: "刃物・金属加工（関市・刃物クラスター）",
    detail:
      "関市は世界三大刃物産地の一つ。包丁・カミソリ・工業用刃物の研磨・熱処理工程で電力消費。年間使用量100万〜1,000万kWh規模の中小事業者集積。",
  },
  {
    label: "自動車部品・精密機械・航空機関連（大垣・各務原）",
    detail:
      "トヨタ系Tier 1〜Tier 2の自動車部品工場、川崎重工業（航空機）、三菱重工業関連工場等が集積。年間使用量1,000万〜5,000万kWh規模。",
  },
  {
    label: "観光業（白川郷・下呂温泉・高山・郡上八幡）",
    detail:
      "世界遺産白川郷、下呂温泉（日本三名泉）、高山（伝統的町並み）、郡上八幡（水と祭りの町）等の観光業。年間使用量50〜500万kWh規模。インバウンド需要回復で電力需要も増加傾向。",
  },
  {
    label: "繊維・住設・林業（西濃・飛騨）",
    detail:
      "繊維工業（一宮〜羽島）、住宅設備・木材加工（飛騨高山）、林業関連の電力消費。中小事業者が中心。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは25%前後（経産省統計）。東濃陶磁器・大垣自動車部品の大規模事業者は競争入札による切替が普及。観光業は地域密着型新電力との地産地消契約も拡大中。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。陶磁器工場・自動車部品工場の24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "中部電力ミライズ継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制（飛騨豪雪時の復旧含む）。デメリット: 単価が新電力比1〜2円/kWh高め、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①中部エリア供給実績の有無、②大規模需要対応力・バランシングコスト管理、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤山岳地・観光地での緊急対応力、の5点が県内では特に重要。",
  },
  {
    label: "県内水力電源とのPPAの可能性",
    detail:
      "県内には中部電力の水力発電所が多数立地。再エネ電源との直接PPAを志向する企業にとって、地産地消ストーリーが組みやすいエリア。トヨタ系のRE100対応では地域貢献の観点でも有効。",
  },
];

const energySaving = [
  {
    label: "東濃陶磁器の電気窯高効率化",
    detail:
      "トンネル窯のインバータ制御・蓄熱式変更で電力▲25〜35%。電気炉の予熱・冷却最適化、廃熱回収。SII補助活用で投資回収 2〜4年。",
  },
  {
    label: "自動車部品工場の高効率設備更新",
    detail:
      "塗装乾燥炉のヒートポンプ化、コンプレッサーのインバータ化、ボイラーのヒートポンプ転換などで電力▲20〜35%。SII補助活用で投資回収 2〜4年。",
  },
  {
    label: "観光業（温泉旅館）の省エネ",
    detail:
      "温泉ポンプの高効率インバータ化、客室空調インバータ更新＋人感センサ連動、LED全館化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "トヨタ系・航空機関連の大企業を中心に、九州・東北・北海道の大規模太陽光・風力との直接契約が拡大。県内水力との地産地消PPAも検討材料。",
  },
  {
    label: "BEMS・需要見える化・蓄電池",
    detail:
      "工場・観光施設でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。蓄電池併設でDR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月、観光地は12月含む）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中部電力ミライズの2023年改定後の単価で再見積を取得したか",
  "県内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・岐阜県補助・市町村補助・観光庁補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・水力・風力）の試算を実施したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "飛騨豪雪・山岳地BCP（停電対応）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "岐阜県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の単価ベースで全国平均と同水準ですが、東濃陶磁器工場・大垣自動車部品工場の大規模事業者は新電力競争で全国平均より1.5〜2円/kWh安いケースが多数。特別高圧契約の競争入札では1〜2円/kWh単位の単価交渉が一般化しています。" },
  { question: "東濃陶磁器産業のエネルギーコスト対策は？", answer: "①電気窯のインバータ制御＋蓄熱式変更（SII補助活用）、②高圧の競争入札による単価最適化、③LED・空調更新、④自家消費太陽光＋蓄電池導入、⑤需要家主導型オフサイトPPA、の5本柱が中心。陶磁器産業は構造的に電力多消費なので、省エネ投資の投資回収は2〜4年で見込めます。" },
  { question: "中部電力ミライズの燃料費調整額の特徴は？", answer: "電源構成でLNG・石炭火力依存度が85%程度と高く、原発比率ゼロのため、燃料費調整額の変動幅は大きいです。2022〜2023年は月最大+7円/kWh、2024〜2025年は+2.5〜+4.0円/kWhレンジで推移。浜岡原発の再稼働見通しは不透明で、上限付きプランへの切替を強く推奨します。" },
  { question: "RE100対応のためのオフサイトPPAは岐阜県で活用できますか？", answer: "はい、トヨタ系・航空機関連の大企業を中心にオフサイトPPA契約が拡大しています。九州・東北・北海道の大規模太陽光・風力電源と直接契約が主流。県内水力電源との地産地消PPAも検討材料で、地域貢献ストーリーが組みやすいエリアです。" },
  { question: "白川郷・下呂温泉等の観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③温泉ポンプの高効率インバータ化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "岐阜県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、岐阜県脱炭素・省エネ設備導入補助、岐阜市・多治見市・大垣市の脱炭素補助、観光庁・環境省の宿泊施設省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "関市の刃物産業の電気代対策は？", answer: "①研磨・熱処理工程の高効率設備更新、②電気炉のインバータ制御、③LED・空調更新、④高圧契約の競争入札、⑤地域密着型新電力との地産地消契約、の5本柱が中心。中小事業者集積のため、産地組合経由の共同調達も有効です。" },
  { question: "中部電力ミライズと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（中部電力パワーグリッド）が担うため、中部電力ミライズ契約と新電力契約で復旧時間に差はありません。ただし飛騨豪雪時など山岳地での緊急対応は窓口体制が重要で、新電力経由の場合は窓口体制を契約時に確認することが重要です。" },
];

const sourcesItems = [
  { name: "中部電力ミライズ 公式サイト", url: "https://miraiz.chuden.co.jp/" },
  { name: "岐阜県環境生活部", url: "https://www.pref.gifu.lg.jp/" },
  { name: "経済産業省 中部経済産業局", url: "https://www.chubu.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function GifuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/gifu-business-electricity-cost"
        datePublished="2026-05-22"
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
          <span className="text-slate-800">岐阜県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            岐阜県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            岐阜県は中部電力エリアで、東濃の陶磁器・タイル産業、関市の刃物産業、大垣・各務原の自動車部品・航空機関連工業、白川郷・下呂温泉・高山の観光業、飛騨地域の林業・木材加工と多様な産業構造を持ちます。本ページでは県内法人の電気代水準、業種別影響度、東濃陶磁器・観光業特有の論点、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-22" updatedAt="2026-05-22" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>中部電力エリアにおける岐阜県の電気代水準と全国比較</li>
              <li>東濃陶磁器工場・下呂温泉旅館・大垣自動車部品工場のBefore/After削減事例</li>
              <li>電気窯・トンネル窯の高効率化と特別高圧競争入札の実務</li>
              <li>SII・岐阜県・多治見市大垣市・観光庁補助の組合せ活用パターン</li>
              <li>岐阜県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岐阜県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県は中部電力エリアで、西濃・東濃・飛騨の3地域から構成されます。県内には中部電力の水力発電所が多数立地し再エネ供給拠点となっています。東濃陶磁器産業の電力多消費構造、白川郷・下呂温泉等の観光業の季節変動、飛騨豪雪地のBCP対応が県内電力消費の特徴を形成します。
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
              中部電力エリアの全体像は{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中部電力エリア事情
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
              岐阜県では2024年時点で10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス・燃料系、中部電力グループ系、地域密着型の4カテゴリが主軸となります。
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
              岐阜県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力エリアの単価は全国平均と同水準で、東濃陶磁器・大垣自動車部品の中規模事業者は新電力競争で全国平均より1.5〜2円/kWh安いケースが多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 陶磁器工場・温泉旅館・自動車部品工場（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、観光業向けは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・旅館の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岐阜県固有の電気代上昇要因 — 陶磁器多消費・原発ゼロ・観光季節変動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県の電気代上昇は、東濃陶磁器産業の構造的電力多消費、原発ゼロ依存に伴う燃料価格直撃、観光業の季節変動と山岳地暖房負荷が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              岐阜県の補助金・優遇制度 — SII・県独自・市町村・観光庁
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県では国補助（SII等）に加え、県独自補助、岐阜市・多治見市・大垣市の脱炭素補助、観光庁・環境省の宿泊施設省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              岐阜県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県の事業者構成は、陶磁器・タイル、刃物・金属加工、自動車部品・精密機械・航空機関連、観光業、繊維・住設・林業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 中部電力ミライズと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県の新電力シェアは2024年時点で25%前後。東濃陶磁器・大垣自動車部品の大規模事業者は競争入札による切替が普及。観光業は地域密着型新電力との地産地消契約も拡大中。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              岐阜県の省エネは『東濃陶磁器の電気窯高効率化』『自動車部品工場の高効率設備更新』『観光業（温泉旅館）の省エネ』『需要家主導型オフサイトPPA』『BEMS・需要見える化・蓄電池』の5軸が主力。陶磁器・観光業の地域特性を踏まえた施策が重要です。
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
              岐阜県向け契約見直しチェックリスト（12項目）
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
              シミュレーターで岐阜県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県は東濃陶磁器・自動車部品・観光業など多様な業種構成と山岳地BCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-22"
            />
            <GlossaryLinks currentSlug="gifu-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情", description: "中部電力管内の料金体系・改定動向の詳細。" },
              { href: "/aichi-business-electricity-cost", title: "愛知県の法人電気料金", description: "隣接県・中京工業地帯の愛知県の事情。" },
              { href: "/nagano-business-electricity-cost", title: "長野県の法人電気料金", description: "隣接県・山岳観光地の長野県の事情。" },
              { href: "/mie-business-electricity-cost", title: "三重県の法人電気料金", description: "隣接県・四日市石油化学コンビナートの三重県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・冷凍倉庫の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "陶磁器・自動車部品が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "東濃陶磁器と全国比較。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "陶磁器・自動車部品工場向け。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "下呂・白川郷・高山の観光業向け。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "東濃工業地帯のオンサイト・オフサイトPPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "電気窯・空調・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "中部電力エリアでも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="岐阜県の自社条件で電気代リスクを試算する"
            description="東濃陶磁器・自動車部品・観光業など岐阜県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="岐阜県の電力契約見直し、専門家に相談しませんか？"
            description="東濃陶磁器・大垣自動車部品・観光業の電気代見直しは業種により論点が異なります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
