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
  "品川区の法人電気料金完全ガイド｜大崎・五反田オフィス・天王洲湾岸物流・品川駅前再開発";
const pageDescription =
  "品川区の法人電気料金を区固有の視点で解説。大崎駅西口の特別高圧オフィス群、五反田の中堅IT・スタートアップ、天王洲アイル地域冷暖房と湾岸物流、品川駅前リニア中央新幹線新駅、八潮の湾岸倉庫まで、契約見直し・補助金活用を実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "品川区 法人電気料金",
    "大崎 オフィスビル 電気代",
    "五反田 IT 電気料金",
    "天王洲 湾岸 物流 電力",
    "品川駅 リニア 再開発",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shinagawa-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shinagawa-ku-business-electricity-cost",
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
    label: "品川区の事業者集積と電力需要構造",
    detail:
      "品川区は東京電力エナジーパートナーの供給エリアで、大崎・五反田・品川駅周辺・天王洲・大井町に大規模事業所が集中。区内年間電力需要は概算で25〜30億kWh規模と推計され、23区の中でも特別高圧契約比率が高いエリアの一つ。湾岸部の物流・倉庫、内陸部のオフィス・IT、駅前再開発の複合需要が並列。",
  },
  {
    label: "大崎駅西口再開発による電力需要拡大",
    detail:
      "大崎駅西口は2010年代以降にThinkParkタワー、大崎ガーデンシティ、大崎ブライトコアなどの大規模再開発が進行し、特別高圧契約のオフィスビル群が形成。年間使用量1,000〜5,000万kWh級のテナントビルが複数立地し、大手企業の本社・基幹機能が集積。",
  },
  {
    label: "品川駅前リニア中央新幹線新駅の影響",
    detail:
      "品川駅前は港区側と品川区側に跨り、リニア中央新幹線品川駅（地下40m）の建設が進行。開業後の新駅前再開発（SHINAGAWA GOOS等）でホテル・MICE・オフィス需要が一段拡大する見込み。今後10年で区内特別高圧需要が増加する蓋然性が高い。",
  },
  {
    label: "天王洲アイル地域冷暖房と湾岸物流",
    detail:
      "天王洲アイル地区は1990年代から地域冷暖房（DHC）が導入され、東京モノレール・りんかい線沿線にオフィス・ホテル・物流倉庫が混在。特別高圧のDHC事業者と高圧物流倉庫が共存する独特の電力需要プロファイル。寺田倉庫など歴史ある事業者も。",
  },
  {
    label: "八潮・東品川の湾岸倉庫・物流DC",
    detail:
      "八潮（品川区八潮地区）・東品川・勝島は東京港に面した倉庫・物流拠点。冷凍冷蔵倉庫、3PL事業者の物流センターが集積。高圧500〜1,500kW級の物流DC契約が中心で、自家消費太陽光・蓄電池の導入余地が大きい。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "旧一般電気事業者",
    detail:
      "品川区内シェア最大の小売事業者。高圧は『業務用季節別時間帯別電力』『業務用高圧電力』、特別高圧は個別契約。2023年6月改定後、燃料費調整額の上限撤廃継続。大崎・天王洲の大型ビルでは標準メニューよりも個別交渉契約が主流。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "大崎・五反田・品川駅前のオフィスビル・テナントで採用実績多数。固定単価3〜5年プランで東電EP標準比2〜4円/kWh安い水準も。物流DCの高圧契約でも提案実績あり。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系は熱併設の大型ビルで強み（電気＋ガス複合契約）。東急パワーサプライは大井町線・池上線沿線の中小事業者・店舗向け実績あり。",
  },
  {
    name: "ミツウロコでんき・ハルエネ",
    role: "中小事業者向け新電力",
    detail:
      "五反田・大井町・武蔵小山の中小オフィス・店舗向けで実績。低圧電力・低圧電灯の切替が中心だが、高圧50〜500kW級の小規模高圧でも対応。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化）",
    role: "再エネ特化型新電力",
    detail:
      "RE100宣言企業の大崎本社・天王洲オフィスで採用実績あり。料金水準はやや高めだがSBT・TCFD対応の観点で選択肢。需要家主導型オフサイトPPAとの組合せも。",
  },
  {
    name: "新規受付状況（2025年10月時点）",
    role: "市場動向",
    detail:
      "都内法人向け高圧で新規受付中の新電力は15社前後。2022〜2023年の受付停止局面を経て、2024年以降は段階的に再開。最新の受付可否は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』は電力量料金18〜22円/kWh+燃料費調整額（2024〜2025年+3.0〜+4.5円/kWh）+再エネ賦課金（2025年度3.98円/kWh）で、実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数。品川区は競争が激しい区の一つ。",
  },
  {
    label: "特別高圧電力の単価水準（大崎・天王洲）",
    detail:
      "特別高圧2,000kW超の標準メニューは電力量料金17〜20円/kWh＋調整項目。大崎西口・天王洲の大型ビルは個別交渉により標準比1〜2円/kWh安い水準を獲得する例が一般化。新電力との競争入札がほぼ標準。",
  },
  {
    label: "低圧電力・低圧電灯（中小事業所・店舗）",
    detail:
      "低圧電力（動力）は10〜13円/kWh+調整項目、低圧電灯（事務所）は17〜20円/kWh。五反田・大井町・武蔵小山の中小オフィス・店舗で利用が中心。年間50〜200万円規模の電気代でも切替メリットが出る。",
  },
  {
    label: "物流DC・冷凍冷蔵倉庫の契約パターン",
    detail:
      "八潮・東品川の物流DCは24時間稼働で負荷率が高く、新電力との競争入札で単価優遇を獲得しやすい。冷凍冷蔵倉庫はピークデマンド管理とフリークーリング併用で電気代▲15〜25%の事例多数。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大崎西口の特別高圧オフィスビル（特別高圧 2,800kW、年間 1,900万kWh）",
    before:
      "Before: 大崎駅西口の高層オフィスビルA（地上28階・延床65,000m²、テナント大手SIer中心）。東電EP特別高圧の標準メニュー継続で、2023年夏の燃料費調整額高騰時には月最大9,200万円の請求。年間電気代 5.7億円。BEMS未導入で需要見える化が限定的。",
    after:
      "After: 全国系新電力との競争入札で特別高圧固定5年契約に切替（標準比▲1.8円/kWh）／全館LED化（投資1,800万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御／福島県との需要家主導型オフサイトPPA 3MW契約。",
    result:
      "Result: 年間電気代 5.7億円 → 4.62億円（▲19%、▲1.08億円）／契約kW 2,800→2,500／投資回収 補助金後 1.9年／CO2排出 ▲42%。",
  },
  {
    title: "業種2: 五反田の中堅IT本社オフィス（高圧 750kW、年間 380万kWh）",
    before:
      "Before: 五反田駅前の中堅SaaS企業B社本社（自社ビル7階・延床4,200m²、従業員280名）。サーバルーム・データセンター機能を一部内製。東電EP高圧の市場連動プラン継続で、2023年1月には月最大720万円の請求。年間電気代 1.05億円。",
    after:
      "After: 新電力の固定3年プランに切替（市場連動を解約）／サーバルームを外部DC（江東区）に移管／オフィス側はLED化＋高効率空調機更新（SII補助1/2活用、投資480万円）／東京都ZEB Ready改修補助を活用し、ZEB Ready認証取得。",
    result:
      "Result: 年間電気代 1.05億円 → 0.79億円（▲25%、▲2,600万円）／契約kW 750→580／投資回収 補助金後 1.8年／市場連動リスクから完全解放。",
  },
  {
    title: "業種3: 八潮の冷凍冷蔵物流センター（高圧 1,400kW、年間 880万kWh）",
    before:
      "Before: 八潮地区の食品物流C社冷凍冷蔵センター（延床14,000m²、24時間稼働）。冷凍機・冷蔵機の電力負荷が全体の70%超。市場連動プラン継続で、2022年12月〜2023年2月は月最大1,580万円の請求。年間電気代 2.64億円。",
    after:
      "After: 全国系新電力の固定3年プランに切替／冷凍機をインバータ式に更新（SII補助1/2活用、投資2,200万円）／屋根面積8,000m²に自家消費太陽光800kW＋蓄電池500kWh導入（経産省・東京都補助併用）／デマンドピーク制御強化。",
    result:
      "Result: 年間電気代 2.64億円 → 2.05億円（▲22%、▲5,900万円）／契約kW 1,400→1,200／投資回収 補助金後 2.5年／自家消費比率 22%。",
  },
];

const costFactors = [
  {
    label: "大崎・天王洲のヒートアイランド冷房需要",
    detail:
      "品川区は湾岸エリアと内陸オフィス街が混在し、大崎駅周辺は夏季ヒートアイランドで周辺県より2〜3℃高い。オフィスビル・商業施設で年間電気代の30〜45%を冷房が占めるため、高効率空調機更新と外気冷房活用が重要。",
  },
  {
    label: "リニア新駅前再開発による特別高圧需要増",
    detail:
      "品川駅前再開発・SHINAGAWA GOOS周辺の新規ビル建設で、特別高圧契約のオフィス・ホテルが今後5〜10年で複数立地予定。電力供給力（系統制約）と料金水準への影響を見越した早期契約交渉が有利。",
  },
  {
    label: "天王洲DHC（地域冷暖房）の料金体系",
    detail:
      "天王洲地区のDHCは熱供給事業者経由で冷温水を購入する形態。電力契約とは別に熱供給料金が発生し、CO2削減目標達成にはDHC事業者の電源構成にも依存。事業者個別での再エネ調達余地は限定的。",
  },
  {
    label: "湾岸物流の24時間稼働と冷凍冷蔵負荷",
    detail:
      "八潮・東品川の冷凍冷蔵倉庫は24時間稼働で負荷率高く、燃料費調整額の影響を直接受ける。市場連動プラン継続事業者は2022〜2023年の高騰局面で大幅な収益圧迫を経験、固定プラン回帰が進行。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）。大崎の特別高圧ビル（年間2,000万kWh）で年間8,400万円規模の負担。減免制度（電気使用密度要件等）の対象は限定的。",
  },
];

const subsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    target: "高効率空調・LED・冷凍冷蔵・コンプレッサー・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "大崎オフィスビル、八潮物流倉庫の冷凍機更新で採択実績多数。LED化・空調更新は安定採択。複数年計画申請も有効。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "品川区内オフィスビルは屋根面積が限られるためオフサイトPPAが現実的。物流倉庫は屋根太陽光と組合せ可能。",
  },
  {
    name: "東京都 中小規模事業所向け省エネ設備導入補助",
    target: "中小規模事業所のCO2削減設備（空調・LED・BEMS等）",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都クール・ネット東京経由で公募。SII補助との併用可能なケースあり。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "大崎・天王洲のオフィスビル新築・大規模改修で活用実績。ZEB Ready以上の認証取得が条件。",
  },
  {
    name: "品川区 中小企業省エネ・再エネ機器導入補助",
    target: "区内中小企業の省エネ機器・再エネ設備導入",
    rate: "1/3〜1/2、上限100〜300万円（年度予算枠あり）",
    note: "品川区独自の補助制度。LED・高効率空調・太陽光発電・蓄電池が対象。区内本社・事業所要件あり。詳細は品川区産業振興課で要確認。",
  },
];

const industryProfile = [
  {
    label: "大崎・五反田の特別高圧オフィス",
    detail:
      "大崎西口の高層オフィスビル群（ThinkParkタワー・大崎ガーデンシティ・大崎ブライトコア等）と五反田駅周辺のオフィスビルが中心。年間使用量500〜5,000万kWh規模の事業所が多数立地。",
  },
  {
    label: "五反田の中堅IT・SaaS・スタートアップ",
    detail:
      "五反田駅周辺は『五反田バレー』と呼ばれる中堅IT・SaaS・スタートアップ集積地。年間使用量100〜500万kWh規模の中規模オフィスが中心。サーバルーム内製事業者もあり高負荷率。",
  },
  {
    label: "天王洲アイル オフィス・物流・地域冷暖房",
    detail:
      "天王洲アイル地区はオフィス・ホテル・物流倉庫・地域冷暖房（DHC）が混在。寺田倉庫などの歴史ある事業者も。年間使用量500〜3,000万kWh規模の中・大型契約が中心。",
  },
  {
    label: "八潮・東品川の湾岸物流DC・冷凍冷蔵",
    detail:
      "八潮地区・東品川・勝島の物流DC、冷凍冷蔵倉庫、3PL事業者の物流センター。年間使用量300〜2,000万kWh規模の高圧契約が中心。24時間稼働で負荷率高く新電力切替メリット大。",
  },
  {
    label: "品川駅周辺の再開発・ホテル・MICE",
    detail:
      "品川駅前のSHINAGAWA GOOS・グランドプリンスホテル・品川シーズンテラスなど大型施設群。年間使用量500〜3,000万kWh規模。リニア新駅開業を控え新規大型再開発の電力需要拡大予定。",
  },
];

const switchingReality = [
  {
    label: "品川区内の新電力切替浸透度",
    detail:
      "2024年時点で品川区法人の新電力シェアは推計35%前後と23区内でも高水準。大崎・天王洲の特別高圧事業者では競争入札による切替が標準化、五反田の中小オフィスでも切替が拡大。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の市場高騰で品川区内事業者も大きな影響を受け、特に八潮・東品川の物流DC・冷凍冷蔵倉庫で固定プラン回帰が進行。24時間稼働事業者は市場連動を避ける傾向が明確。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大規模災害時の優先復旧体制・既存契約の手続コスト不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。年間500万kWh超の事業者では切替メリットが明確。",
  },
  {
    label: "新電力選定の品川区固有ポイント",
    detail:
      "①大崎・天王洲の特別高圧供給実績、②夏季ピーク（7〜9月）の対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の上限有無、⑤RE100対応の再エネ電源調達力、の5点が特に重要。",
  },
  {
    label: "需要家主導型オフサイトPPAの活用",
    detail:
      "大崎・天王洲のRE100宣言企業を中心に、福島・茨城・千葉の大規模太陽光・風力電源と直接契約するオフサイトPPAが普及。初期投資ゼロで再エネ調達でき、CO2削減と電気代削減を両立。",
  },
];

const energySaving = [
  {
    label: "オフィスビルの高効率化（大崎・五反田）",
    detail:
      "全館LED化、高効率空調機への更新、BEMS導入、外気冷房（フリークーリング）併用で電力▲20〜30%。SII補助＋都補助＋品川区補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "物流DC・冷凍冷蔵倉庫の電力最適化（八潮）",
    detail:
      "冷凍機のインバータ化、断熱強化、デマンドピーク制御、自家消費太陽光＋蓄電池で電力▲15〜25%。SII補助の冷凍冷蔵設備区分は採択率が高い。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力電源との直接契約で初期投資ゼロで再エネ調達可能。大崎・天王洲のRE100宣言企業を中心に普及。CO2削減と電気代削減を両立。",
  },
  {
    label: "蓄電池・ピークカット",
    detail:
      "ビル屋上・地下に蓄電池設置でデマンドピーク▲20〜35%。夜間充電・昼間放電のサイクルで電気代削減＋ピーク需要時のDR報酬獲得も可能。",
  },
  {
    label: "天王洲DHC事業者の電源構成見直し",
    detail:
      "天王洲のDHC接続事業者は、DHC事業者側の電源構成・CO2排出原単位がCO2排出に直接影響。DHC事業者との契約見直し・再エネ電源導入要請が省エネ施策の鍵。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "大崎・天王洲の特別高圧契約は競争入札で年1回見直しを行っているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『キャップ&トレード制度』『建築物環境計画書制度』の対象事業所か確認したか",
  "天王洲DHC接続事業者はDHC事業者の電源構成・CO2排出原単位を確認したか",
  "SII補助・東京都補助・品川区補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "リニア新駅開業を見越した中長期の電力需要計画を立案しているか",
];

const faqItems = [
  { question: "品川区の法人電気代水準は23区内でどの位置ですか？", answer: "東電EP標準メニューの単価は都内一律ですが、品川区は特別高圧契約比率が高く、競争入札による単価最適化が進んでいるため、実質単価は23区内でも低水準のグループに入ります。大崎・天王洲の特別高圧ビルでは標準比1〜2円/kWh安い水準が一般的。一方で五反田の中小オフィスは標準メニューに近い水準で、新電力切替で2〜4円/kWh削減余地があります。" },
  { question: "大崎エリアの特別高圧ビルで電気代を削減するポイントは？", answer: "①特別高圧の競争入札年1回実施、②BEMSによる需要見える化＋デマンド制御、③全館LED化＋高効率空調機更新（SII補助1/2活用）、④需要家主導型オフサイトPPA（県外太陽光・風力との直接契約）、⑤蓄電池によるピークカット＋DR報酬、の5本柱。投資回収1.5〜2.5年で年間電気代▲15〜20%が一般的なレンジです。" },
  { question: "五反田の中堅IT企業向けの最適プランは？", answer: "五反田の中堅IT・SaaS企業は負荷率が中〜高（オフィス＋一部サーバルーム）で、新電力の固定3年プランが基本的に適合します。市場連動プランは2022〜2023年の経験から避ける傾向。サーバルームを外部DC（江東区等）に移管し、本社オフィスはLED＋高効率空調＋ZEB Ready改修で電気代▲25%程度の事例も多数。" },
  { question: "八潮・東品川の冷凍冷蔵物流の電気代対策は？", answer: "冷凍機のインバータ化・断熱強化・デマンドピーク制御が基本。屋根面積が大きい倉庫では自家消費太陽光＋蓄電池導入で電気代▲15〜25%＋自家消費比率20%超が可能。SII補助の冷凍冷蔵設備区分は採択率が高く、東京都補助・経産省補助との併用も検討の価値あり。" },
  { question: "品川区独自の補助制度はありますか？", answer: "品川区中小企業省エネ・再エネ機器導入補助（LED・空調・太陽光・蓄電池等が対象、補助率1/3〜1/2、上限100〜300万円）が代表的。年度予算枠があるため早期申請が有利。区内中小企業要件あり。SII補助・東京都補助との併用可否は事業内容により異なるため、品川区産業振興課に事前相談を推奨。" },
  { question: "天王洲アイルのDHC接続事業者は電気代を削減できますか？", answer: "天王洲DHC接続事業者は電力契約とは別にDHC事業者から熱供給を受ける構造のため、電気代削減余地はオフィス本体の電力契約見直しと、DHC事業者側の電源構成・料金体系見直し要請の二本立てになります。RE100目標達成にはDHC事業者との連携が必要不可欠で、テナント側からの再エネ電源導入要請が増加中。" },
  { question: "リニア中央新幹線新駅開業の影響は？", answer: "品川駅前の新駅開業（2027年予定→延期見込み）に伴い、駅前再開発で新規大型ビル・ホテル・MICE施設の電力需要が拡大する見込み。特別高圧契約の新規・更新案件が増えるため、早期に新電力との競争入札ノウハウを蓄積した事業者が有利。系統制約のリスクも見据えた中長期計画が重要です。" },
  { question: "品川区で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、東京都中小規模事業所向け省エネ設備導入補助、東京都ZEB・ZEH支援事業、品川区中小企業省エネ・再エネ機器導入補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。クール・ネット東京と品川区産業振興課の最新公募情報を併せて確認するのが効果的です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "品川区 産業・経済（中小企業支援）", url: "https://www.city.shinagawa.tokyo.jp/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "クール・ネット東京（東京都地球温暖化防止活動推進センター）", url: "https://www.tokyo-co2down.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
];

export default function ShinagawaKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/shinagawa-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">品川区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            品川区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            品川区は大崎駅西口の特別高圧オフィス群、五反田の中堅IT・SaaS集積、天王洲アイル地域冷暖房・湾岸物流、品川駅前のリニア中央新幹線新駅周辺再開発、八潮の冷凍冷蔵物流DCと多面的な事業者集積を持つ区です。本ページでは品川区固有の電気代水準、業種別影響度、再開発と湾岸物流の電力需要構造、契約見直し・補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>大崎西口・五反田・天王洲・八潮の事業者プロファイル別電気代水準</li>
              <li>大崎特別高圧ビル・五反田中堅IT・八潮冷凍冷蔵物流のBefore/After削減事例</li>
              <li>リニア新駅開業を見越した中長期電力需要計画のポイント</li>
              <li>SII・東京都・品川区補助の組合せ活用パターン</li>
              <li>品川区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              品川区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区は大崎西口再開発の特別高圧オフィス群、五反田の中堅IT集積、天王洲DHC・湾岸物流、品川駅前リニア新駅周辺の再開発、八潮の冷凍冷蔵物流が並列する複合エリアです。23区の中でも特別高圧契約比率が高く、新電力競争が活発な区の一つ。
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
              東京都全体の電力事情は{" "}
              <Link href="/tokyo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京都の法人電気料金完全ガイド
              </Link>
              、東電エリア全体は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              品川区内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区では東電EPに加え、全国系・通信流通系・地域ガス系・再エネ特化型の新電力15社前後が法人向け高圧で新規受付中。大崎・天王洲の特別高圧契約では競争入札が標準化しています。
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
              品川区の電気料金水準と契約パターン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区は特別高圧契約比率が高いため、競争入札による単価最適化が進み、実質単価は23区内でも低水準のグループに入ります。一方、五反田の中小オフィスは標準メニュー継続事業者も多く、切替で2〜4円/kWh削減余地があります。
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

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 大崎特別高圧ビル・五反田IT・八潮冷凍冷蔵物流（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表シナリオです。
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
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、物流DC見直しは{" "}
              <Link href="/logistics-warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              品川区固有の電気代上昇要因 — 再開発・DHC・湾岸物流・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区の電気代上昇は、大崎・品川駅前再開発による特別高圧需要拡大、天王洲DHC事業者経由の熱供給料金、湾岸物流の24時間稼働負荷、再エネ賦課金上昇など、区固有の要因が複合的に重なります。
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
              品川区の補助金・優遇制度 — SII・東京都・品川区独自補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区では国補助（SII等）、東京都補助、品川区独自補助の3層構造の補助制度を活用できます。複数補助の組合せにより、投資回収を1〜2年短縮できます。
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
              品川区の大型施設・再開発と電力需要プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区の事業者構成は、大崎・五反田の特別高圧オフィス、五反田の中堅IT・SaaS、天王洲オフィス・物流・DHC、八潮の冷凍冷蔵物流、品川駅周辺再開発の5層構造です。各層で電力需要プロファイルと最適契約戦略が異なります。
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
              電力会社切替の実情 — 東電EPと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区の新電力シェアは2024年時点で推計35%前後と23区内でも高水準。大崎・天王洲の特別高圧事業者では競争入札による切替が標準化、八潮の物流DCでも市場連動から固定への回帰が進行しています。
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
              品川区内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区の省エネは『大崎・五反田オフィスビルの高効率化』『八潮冷凍冷蔵物流の電力最適化』『需要家主導型オフサイトPPA』『蓄電池・ピークカット』『天王洲DHC事業者の電源構成見直し』の5軸が主力です。
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
              品川区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
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
              シミュレーターで品川区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              品川区は大崎・天王洲の特別高圧オフィス、八潮の冷凍冷蔵物流、リニア新駅前再開発など、区固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した19〜25%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-27"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金完全ガイド", description: "東京都全体の電気料金事情と区横断の論点。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "市区町村別の電気料金事情をハブから探す。" },
              { href: "/chiyoda-ku-business-electricity-cost", title: "千代田区の法人電気料金", description: "丸の内・大手町の特別高圧オフィス集積。" },
              { href: "/chuo-ku-business-electricity-cost", title: "中央区の法人電気料金", description: "銀座・日本橋の商業・オフィス集積。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "六本木・赤坂の特別高圧ビルとDHC。" },
              { href: "/shinjuku-ku-business-electricity-cost", title: "新宿区の法人電気料金", description: "新宿副都心の超高層オフィス群。" },
              { href: "/shibuya-ku-business-electricity-cost", title: "渋谷区の法人電気料金", description: "渋谷・原宿のIT・商業集積。" },
              { href: "/setagaya-ku-business-electricity-cost", title: "世田谷区の法人電気料金", description: "住宅地と中小オフィスの混在エリア。" },
              { href: "/toshima-ku-business-electricity-cost", title: "豊島区の法人電気料金", description: "池袋の商業・オフィス集積。" },
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "大学・研究機関と中小オフィス。" },
              { href: "/taito-ku-business-electricity-cost", title: "台東区の法人電気料金", description: "上野・浅草の観光・商業集積。" },
              { href: "/koto-ku-business-electricity-cost", title: "江東区の法人電気料金", description: "湾岸データセンター集積と豊洲再開発。" },
              { href: "/ota-ku-business-electricity-cost", title: "大田区の法人電気料金", description: "町工場集積と羽田空港物流。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "大崎・天王洲特別高圧ビルの最適化。" },
              { href: "/logistics-warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し", description: "八潮・東品川の物流DCの主力打ち手。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "オフィスビル・物流の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
            ]}
          />

          <ContentCta
            heading="品川区の自社条件で電気代リスクを試算する"
            description="大崎・五反田オフィス、天王洲湾岸物流、品川駅前再開発、八潮冷凍冷蔵物流など品川区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="品川区の電力契約見直し、専門家に相談しませんか？"
            description="大崎・天王洲の特別高圧オフィスビル、八潮の冷凍冷蔵物流の電気代見直しは規模が大きく論点も多くなります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
