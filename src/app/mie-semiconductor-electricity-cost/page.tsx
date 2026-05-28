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
  "三重県の半導体・電子部品工場の電気料金完全ガイド｜四日市キオクシア／亀山シャープのメモリ・液晶クリーンルーム";
const pageDescription =
  "三重県の半導体・電子部品製造業に特化した法人電気代ガイド。四日市市のキオクシアNANDフラッシュメモリ・亀山市のシャープ液晶（旧シャープ亀山工場）の集積、中部電力エリアの単価事情、クリーンルーム24時間稼働、特別高圧の契約最適化を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "三重県 半導体 電気料金",
    "四日市 キオクシア 電気代",
    "亀山 シャープ 電子部品",
    "中部電力 特別高圧 半導体",
    "クリーンルーム 24h 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/mie-semiconductor-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/mie-semiconductor-electricity-cost",
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
    label: "三重県の半導体・電子部品集積 — 四日市キオクシア／亀山シャープ",
    detail:
      "三重県は四日市市のキオクシア四日市工場（旧東芝メモリ、NAND型フラッシュメモリの世界主要拠点）とウェスタンデジタル四日市工場（合弁）、亀山市のシャープ亀山工場（液晶・カメラモジュール）を中心に、日本でも有数の半導体・電子部品集積地です。出荷額ベースで電子部品・デバイスは三重県工業出荷額の主要構成要素で、特別高圧の超大型需要家が複数立地する電力需給上の重要エリアです（出典: 三重県工業統計・経産省工業統計・各社統合報告書）。",
  },
  {
    label: "NAND型フラッシュメモリの電力プロファイル",
    detail:
      "キオクシア四日市は世界最大級のNAND型フラッシュメモリ製造拠点（300mmウェハの主力ライン）。最先端3D NAND（200層級）製造には、クリーンルーム空調、露光装置（ArF液浸）、成膜・エッチング装置、洗浄装置、超純水製造、特殊ガス供給、排水処理など多様な電力消費要素が組み合わさり、24時間365日連続稼働。1工場あたりの年間使用電力は10〜20億kWh規模に達するとされ、関西電力・東邦ガス・新電力との供給契約が併存する構造です（出典: キオクシア統合報告書）。",
  },
  {
    label: "液晶パネル・カメラモジュールの電力プロファイル",
    detail:
      "シャープ亀山工場は中小型液晶パネル・カメラモジュールの主力生産拠点。液晶製造はクリーンルーム空調＋露光・成膜・エッチング・配向膜・偏光板貼り付け工程が中心。年間使用電力は数億kWh規模で、特別高圧契約と自家発電（コージェネ）の組合せで運営されています。CMOS イメージセンサ用カメラモジュールの組立工程も併設されています。",
  },
  {
    label: "半導体製造装置・素材・ガス供給の周辺集積",
    detail:
      "キオクシア・シャープを中心に、半導体製造装置メーカー（東京エレクトロン、SCREEN、ニコン等のサービス拠点）、素材メーカー（多摩化学、住友化学等）、特殊ガスメーカー（エア・リキード、太陽日酸等）の供給拠点が三重県内および隣接地に集積。サプライチェーン全体での電力需要が県内総需要の主要構成要素となっています。",
  },
  {
    label: "中部電力エリアと三重半導体の相互依存",
    detail:
      "三重県は基本的に中部電力エリア（一部津・松阪以南は関西電力エリアの可能性あるが主要工業地帯は中部）。半導体・電子部品の特別高圧需要は中部全体需要の主要構成要素で、中部電力供給計画にも反映されています。LNG火力依存度の高さから燃調感応度が高く、半導体メーカーの単価変動リスクは経営テーマの中心（出典: 中部電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "中部電力ミライズ",
    role: "一般小売事業者（旧一電）",
    detail:
      "三重県内最大シェア。半導体・電子部品の特別高圧長期需要家を多数抱える。『高圧電力AS／BS』『特別高圧電力』が主軸メニュー。原子力停止下のLNG火力依存により2022〜2023年高騰時の燃調変動は他エリアより大きく、長期固定＋燃調上限の選択が経営判断の中心。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・サミットエナジー・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "三重県内のキオクシア・シャープTier2・装置メーカーの中堅特別高圧／高圧で競争入札の対抗馬。固定単価3〜5年契約＋非化石証書付き／再エネトラッキング付きメニューが標準。半導体メーカーのRE100対応の追加性ある再エネ電源の長期PPA契約獲得競争が活発化しています。",
  },
  {
    name: "中部系・東邦ガス系新電力",
    role: "地域系新電力",
    detail:
      "東邦ガス系の電気事業（東邦ガスとくとくプラン法人向け等）は、コージェネ併設工場やガス併用工程のある半導体メーカーとの一括最適化提案が強み。中部圏の半導体・電子部品工場でのガス＋電気の総合最適パッケージとして採用例があります。",
  },
  {
    name: "再エネ特化型・コーポレートPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "キオクシア（およびウェスタンデジタル）はRE100目標を公約し、シャープも環境戦略でCN対応を表明。サプライヤー・装置メーカー・素材メーカーにもScope3対応の調達変更を要請するため、三重エリア全体でPPA調達枠の獲得競争が激化。みんな電力・自然電力・東京ガス系等がオフサイトPPA・コーポレートPPA提案を展開。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年JEPX高騰時には中部エリアでも一部新電力が撤退・新規受付停止。半導体工場は大口・長期固定が中心のため、新規受付に慎重な事業者が増えました。現在は供給枠が徐々に回復しつつあり、半導体新規工場立地に伴う長期供給契約獲得競争が活発化しています。",
  },
  {
    name: "JEPX中部エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX中部エリアスポット価格は東京・関西と概ね連動しつつ、原子力停止のLNG火力依存により2022〜2023年に高水準で推移した時期もあります。半導体ファブは24h一定負荷で市場連動の昼間恩恵を受けにくく、固定契約が引き続き主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "中部電力エリアの特別高圧 — 半導体ファブの単価水準",
    detail:
      "NAND/液晶ファブ（特別高圧2,000kW超、年間億kWh級）の電力量料金は標準メニューで概ね16〜19円/kWh+調整項目。燃料費調整額（2024〜2025年で+2.0〜+4.0円/kWh目安・LNG依存高で他エリアより燃調感応度が高い）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は22〜27円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安で、年間10億kWh級のキオクシア級ファブでは数十億円規模のインパクトです。",
  },
  {
    label: "高圧電力 — 半導体装置・電子部品工場の単価",
    detail:
      "東京エレクトロン伊勢・SCREENサービス拠点・電子部品Tier2（500kW〜2,000kW級）の『業務用高圧電力』は17〜21円/kWh+調整項目。実質単価は24〜29円/kWhレンジ。新電力経由なら2〜3円/kWh安いケースが多く、中堅工場でも見直し効果が大きいレンジです。",
  },
  {
    label: "中部電力エリアの燃調感応度（高位）",
    detail:
      "中部電力エリアは浜岡原発停止後のLNG火力依存度が極めて高く、為替（円安）とLNGスポット価格（JKM）の双方に強く感応します。2022〜2023年高騰時には燃調が前年比＋6〜8円/kWhに拡大し、年間10億kWh級半導体ファブで年間60〜80億円規模の単価変動を経験。燃調上限契約の経営価値が極めて高い構造です（出典: 中部電力ミライズ単価実績／エネ庁エネルギー白書）。",
  },
  {
    label: "再エネ賦課金とRE100要件",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量10億kWh級ファブでは年約40億円規模の負担。一方、キオクシアはRE100目標を公約しており、賦課金と並行して追加性ある再エネ調達コスト（PPAプレミアム＋1〜3円/kWh）の経営計画織り込みが必要です。エネルギー多消費業種としての減免制度適用も検討余地があります。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大型NAND型フラッシュメモリファブ（特別高圧 120,000kW、年間 10億kWh）",
    before:
      "Before: 四日市市の大型NAND型フラッシュメモリファブA（300mmウェハ、月間生産能力10万枚規模）。クリーンルーム24h稼働＋ArF液浸露光＋3D NAND成膜・エッチング・洗浄・検査。中部電力ミライズの特別高圧契約継続＋既往燃調連動。2023年度は燃調影響で請求がピーク月25億円規模。年間電気代 約250億円。",
    after:
      "After: 全国系新電力との競争入札で固定5年・燃調上限あり契約獲得／クリーンルーム空調の高効率化（CRAC更新・FFU高効率化、SII補助1/2活用、投資20億円）／超純水製造プラントの省エネ／オフサイト太陽光PPA 250MW＋風力60MW契約でRE100比率向上／BEMS・需給予測AI・MES連動。",
    result:
      "Result: 年間電気代 約250億円 → 約200億円（▲約20%、▲50億円・目安）／契約電力 120,000→110,000kW／RE100比率 約45%達成／投資回収 補助金後 4〜5年（目安）。",
  },
  {
    title: "業種2: 中小型液晶パネル・カメラモジュール工場（特別高圧 20,000kW、年間 1.5億kWh）",
    before:
      "Before: 亀山市の液晶パネル・カメラモジュール工場B。液晶ライン＋カメラモジュール組立＋検査が24時間稼働。コージェネ既設で買電と自家発の併用。市場連動プラン併用で2023年1月の高騰局面では月15億円の請求。年間電気代 約40億円。",
    after:
      "After: 入札特化型新電力に固定3年・燃調上限あり契約で切替／コージェネの稼働最適化＋廃熱回収拡大／クリーンルーム外気冷房適用拡大／コンプレッサー高効率化／自家消費太陽光6MW＋蓄電池15MWh導入／需給予測AI＋DR市場参加。",
    result:
      "Result: 年間電気代 約40億円 → 約32億円（▲約20%、▲8億円・目安）／契約電力 20,000→18,000kW／投資回収 補助金後 3〜4年（目安）／Scope2排出量▲25%。",
  },
  {
    title: "業種3: 半導体製造装置・電子部品Tier2工場（高圧 1,500kW、年間 1,100万kWh）",
    before:
      "Before: 三重県内の半導体装置・電子部品Tier2工場C（クリーンルーム＋組立検査）。中部電力ミライズの業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+15%の電気代増加。年間電気代 約2.8億円。",
    after:
      "After: 東邦ガス系新電力に固定2年・燃調上限ありで切替／クリーンルームFFU高効率化＋温湿度設定見直し／全館LED化（県補助＋SII併用、投資3,500万円）／屋根太陽光1MW自家消費／BEMS導入。",
    result:
      "Result: 年間電気代 約2.8億円 → 約2.3億円（▲約18%、▲5,000万円・目安）／契約電力 1,500→1,350kW／投資回収 補助金後 2.5年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "クリーンルーム24h連続稼働の絶対需要",
    detail:
      "半導体・液晶ファブのクリーンルームは温度±0.1℃・湿度±1%・クラス1〜10という極めて厳しいレベルを24h365日維持。空調FFU（ファンフィルターユニット）・CRAC・チラーが連続稼働し、全電力の30〜45%を占めるとされます。生産量に直接比例しない『ベース負荷』で、稼働率に関わらず電気代が大きい構造です。",
  },
  {
    label: "中部電力エリアの燃調感応度（高位）",
    detail:
      "中部電力エリアは浜岡原発停止後のLNG火力依存度が極めて高く、為替（円安）とLNGスポット価格（JKM）の双方に強く感応。2022〜2023年高騰時には燃調が前年比＋6〜8円/kWhに拡大し、年間10億kWh級半導体ファブで年60〜80億円規模の単価変動を経験。燃調上限契約の経営価値が極めて高い構造です。",
  },
  {
    label: "EUV/ArF露光・成膜装置の高密度電力",
    detail:
      "ArF液浸露光装置は1台で500kW級、成膜・エッチング装置も数百kW級が珍しくなく、最先端3D NANDファブでは数十〜100台規模で導入。装置の高密度電力負荷が瞬間ピークを押し上げ、瞬停・電圧変動が即座にウェハ廃棄を招くため、無停電化設備・蓄電池冗長化のコストも経営に重く影響します。",
  },
  {
    label: "超純水・特殊ガス・排水処理のユーティリティ電力",
    detail:
      "半導体製造の周辺ユーティリティ（超純水・特殊ガス・排水処理・排ガス除害）も大電力需要家。製造装置電力と合算した工場全体の電力プロファイル設計が経営課題で、ユーティリティ部分の省エネ・再生水利用が単価最適化の主戦場のひとつです。",
  },
  {
    label: "キオクシア等のグローバルRE100要請",
    detail:
      "キオクシア（ウェスタンデジタル合弁）はRE100目標を公約し、シャープもCN対応を表明。サプライヤー・装置メーカー・素材メーカーにもScope3対応の調達変更を要請するため、三重エリア全体でPPA調達枠の獲得競争が激化。プレミアム単価（従来比＋1〜3円/kWh）も経営計画に必要です。",
  },
];

const subsidies = [
  {
    name: "三重県 産業集積・脱炭素設備導入補助",
    target: "県内半導体・電子部品関連の設備投資・省エネ・脱炭素設備",
    rate: "対象経費の1/3〜1/2（事業区分・規模による）※2025年度時点",
    note: "県独自の産業集積政策に基づく補助メニュー。キオクシア・シャープのサプライチェーン誘致と並行して整備。最新公募状況は三重県雇用経済部・三重県産業支援センターの公式窓口で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・冷凍・LED・コンプレッサー・FFU・チラー・成膜装置等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "半導体クリーンルーム空調・FFU・チラー更新で採択実績多数。装置のキャビネット空調・周辺ユーティリティ省エネ等で活用しやすい主力補助。",
  },
  {
    name: "需要家主導型再エネ・PPA・蓄電池併設関連補助",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "キオクシア・シャープ・装置メーカーのRE100対応PPA契約で活用可能。中部エリアは太陽光適地が限られるため、オフサイト型（北海道・東北・九州）の活用が現実的。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "半導体ファブの新規設備投資・PPA関連設備・自家発電設備の取得で活用可能。所管: 経産省・国税庁。新規ファブ立地・大型増設の経営計画に組み込みやすい税制優遇。",
  },
  {
    name: "経産省 半導体関連投資支援基金",
    target: "国家戦略的に重要な半導体製造拠点の設備投資",
    rate: "プロジェクト別に大規模支援",
    note: "経産省・NEDO等が運用する半導体関連投資支援基金。キオクシア四日市新棟・最先端ライン投資への支援実績あり。最新動向は経産省商務情報政策局の公式情報で確認。",
  },
];

const industryProfile = [
  {
    label: "四日市市 — キオクシア／ウェスタンデジタル合弁集積",
    detail:
      "四日市市はキオクシア四日市工場（NAND型フラッシュメモリの世界主要拠点）とウェスタンデジタル四日市工場（合弁）が立地。300mmウェハの最先端3D NAND（200層級）製造が進行中で、新棟建設（K1〜K7工場）が継続的に進められています。電力消費は四日市市全体の主要構成要素。",
  },
  {
    label: "亀山市 — シャープ亀山工場・液晶・カメラモジュール",
    detail:
      "シャープ亀山工場は中小型液晶パネル・カメラモジュールの主力生産拠点。液晶ライン＋カメラモジュール組立＋検査で24時間連続稼働。コージェネ既設で電力・熱の総合最適化が進む立地です。",
  },
  {
    label: "鈴鹿市・桑名市 — 半導体・電子部品Tier1/Tier2",
    detail:
      "鈴鹿市・桑名市等にも半導体製造装置・素材・ガス供給のTier1・Tier2サプライヤーが立地。中堅特別高圧・高圧の需要家が多数で、新電力切替・PPA調達の選択肢が広がるエリア。",
  },
  {
    label: "東京エレクトロン伊勢・SCREENサービス拠点",
    detail:
      "東京エレクトロン伊勢（半導体製造装置の主力生産拠点）、SCREENサービス拠点（コーター・デベロッパー保守）等の装置メーカー・サービス拠点が三重県内に立地。装置のクリーンルーム・組立検査での電力需要を持ちます。",
  },
  {
    label: "電力会社・特高変電所・送電網",
    detail:
      "中部電力パワーグリッドの特高変電所が四日市・桑名・鈴鹿等に分散立地。キオクシア新棟建設に伴う系統容量増強も計画的に進行。新規受電申込に対する系統対応も加速しています（出典: 中部電力PG供給計画）。",
  },
];

const switchingReality = [
  {
    label: "中部エリアの新電力浸透度（半導体）",
    detail:
      "中部電力エリアの新電力比率は東京・関西よりやや低め。半導体大型案件では競争入札が標準化し、長期固定3〜5年＋再エネ調達枠＋RE100対応のセット提案が主流。中堅装置・電子部品工場は中部電力ミライズ継続が依然多数派ですが切替余地は大きい。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で半導体メーカーの多くが市場連動から固定回帰。中部エリアの燃調感応度の高さから、固定3〜5年＋燃調上限ありが特に強く支持される構造。市場連動は再エネ自家消費・蓄電池等のヘッジ手段併用が前提となります。",
  },
  {
    label: "中部電力ミライズ継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大手取引慣行・コージェネ運用支援・災害時BCP対応（東海地震想定）。デメリット: LNG火力依存で燃調感応度が高い・新電力比1〜3円/kWh単価が高め・長期固定での競争余地は新電力に分がある場面も。",
  },
  {
    label: "新電力選定のポイント（三重×半導体固有）",
    detail:
      "①特別高圧の供給実績（億kWh級）、②燃調上限・連動条件の柔軟性、③非化石証書／再エネトラッキング付メニュー（キオクシア等のRE100対応）、④長期固定5〜10年の単価安定性、⑤BCP対応（東海地震想定エリア）、⑥オフサイトPPA・VPPAの仲介力の6点が重要です。",
  },
  {
    label: "オフサイトPPA・コーポレートPPAの主流化",
    detail:
      "RE100要件対応のため、三重半導体ではオフサイトPPA（北海道・東北・九州の大規模太陽光・風力）／コーポレートPPA／VPPAの調達が拡大。中部エリア内は太陽光適地が限られるため、他エリアの再エネ電源との長期PPA契約が現実的な打ち手です。",
  },
];

const energySaving = [
  {
    label: "クリーンルーム空調の高効率化（FFU・CRAC・チラー）",
    detail:
      "FFU（ファンフィルターユニット）の高効率モーター化＋CRAC・チラーの更新で空調電力▲15〜25%。半導体ファブの全電力の30〜45%を占める空調部の削減効果は経営インパクト大。SII補助＋県補助の併用で投資回収 3〜5年。",
  },
  {
    label: "外気冷房（フリークーリング）の中間期適用",
    detail:
      "三重県の気候では春秋の中間期に外気温度がクリーンルーム冷却要求を下回る時間帯が一定割合存在。空調機の更新時に外気導入経路を併設することで、機械冷却を停止する時間帯を最大化できます。",
  },
  {
    label: "コージェネ稼働最適化＋廃熱回収拡大",
    detail:
      "シャープ亀山等のコージェネ既設工場では、稼働タイミング最適化＋廃熱回収拡大で総エネルギー▲10〜15%。電力・熱・蒸気の総合最適化で経営インパクト大。GX税制・SII補助との組合せで投資回収を短縮可能。",
  },
  {
    label: "オフサイトPPA＋自家消費太陽光",
    detail:
      "中堅装置・電子部品工場では屋根太陽光1〜10MW＋蓄電池導入が現実的。大型半導体ファブは北海道・東北・九州の大規模太陽光・風力とのオフサイトPPAを組合せ、RE100算入＋単価下げを両立。",
  },
  {
    label: "BEMS・需給予測AI＋装置稼働連動最適化",
    detail:
      "BEMSによる需要見える化＋AIによる翌日需給予測＋MES（製造実行システム）との連動で、装置稼働タイミング最適化・ピーク需要▲5〜10%。デマンドレスポンス参加でDR報酬収入も期待可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか（クリーンルームは平準化されるため一致しやすい）",
  "クリーンルーム空調（FFU/CRAC/チラー）の年間使用kWhと比率を工程別に把握しているか",
  "瞬停・電圧変動・周波数変動への対応（UPS・蓄電池冗長化）の体制があるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中部電力ミライズの最新単価で再見積を取得したか",
  "中部系・全国系・再エネ特化型の新電力10社以上から相見積を取得したか",
  "キオクシア・親会社のRE100要請（自社／顧客）に対する追加性ある再エネ調達計画があるか",
  "オフサイトPPA・コーポレートPPA・VPPAの調達可能性をデベロッパーに照会したか",
  "新規受電申込・系統増強コストを中部電力PGに確認したか",
  "三重県補助・SII・需要家主導型PPA補助・GX税制・経産省半導体支援の併用可否を整理したか",
  "デマンドレスポンス・容量市場・調整力公募への参加可能性を評価したか",
  "BCP（東海地震想定エリア）の自家発・蓄電池・燃料備蓄体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "なぜキオクシアは四日市に大規模半導体ファブを集中させているのですか？",
    answer:
      "①1990年代以降の長年の半導体生産で人材・技術・周辺サプライチェーンが熟成、②水資源（鈴鹿川水系）、③中部電力エリアの安定供給、④四日市市・三重県の積極的な集積促進政策、⑤コンビナート地帯としての電力・ガス・道路インフラの充実、の5点が複合的に作用しています。電力面では中部エリアの燃調感応度の高さが課題ですが、長期相対契約＋燃調上限の設定でリスク管理しています（出典: キオクシア統合報告書・JETRO進出企業情報）。",
  },
  {
    question: "中部電力エリアの燃調感応度が高いのはなぜですか？",
    answer:
      "中部電力エリアは浜岡原発（5基中4基が運転停止中）の停止後、LNG・石炭火力火力依存度が著しく上昇。為替（円安）とLNGスポット価格（JKM）の双方に強く感応する構造です。2022〜2023年高騰時の燃調変動幅は東京・関西より大きく、年間10億kWh級半導体ファブで年60〜80億円規模の単価変動を経験しました。燃調上限契約の経営価値が極めて高い構造です（出典: 中部電力ミライズ単価実績／エネ庁エネルギー白書）。",
  },
  {
    question: "シャープ亀山工場のコージェネ最適化はどう進めていますか？",
    answer:
      "ガスエンジン・ガスタービンによるコージェネで電力＋熱（蒸気・温水）を同時生成し、買電量削減＋廃熱有効利用を実現。電力単価と都市ガス単価のスプレッド次第で稼働率を調整し、燃調高騰時にはコージェネ稼働を最大化、低位時には買電比率を上げるなど、需給状況に応じた最適化が経営判断の中心です。",
  },
  {
    question: "キオクシアのRE100対応はどう進めていますか？",
    answer:
      "キオクシアはサステナビリティレポートでRE100目標を公約し、段階的な再エネ調達拡大を進めています。中部エリアは太陽光適地が限られるため、北海道・東北・九州の大規模太陽光・風力とのオフサイトPPA・コーポレートPPAの長期契約獲得が中心戦略。プレミアム単価（従来比＋1〜3円/kWh）も経営計画に織り込み済みです（出典: キオクシア統合報告書）。",
  },
  {
    question: "三重半導体は熊本のJASM/TSMC進出と競合しますか？",
    answer:
      "競合と相補の両側面があります。製品セグメント（NAND vs ロジック）の違いから直接競合は限定的ですが、サプライヤー・装置メーカー・人材・電力PPA調達枠の獲得競争では一部競合します。一方、日本全体での半導体集積拡大は装置・素材産業の活性化を促し、三重と熊本の双方に正の波及効果も。経産省の半導体関連投資支援基金は両拠点を支援対象としています。",
  },
  {
    question: "中堅装置・電子部品メーカーでも中部電力以外を選べますか？",
    answer:
      "選べます。中部系新電力（東邦ガス系等）、全国系新電力（ENEOSでんき・出光・サミットエナジー等）、再エネ特化型から相見積を取得することで、中部電力ミライズ標準比1〜3円/kWh安い水準を確保できるケースが多くあります。中堅工場でも年間使用量1,000万kWh級なら年間1,000万〜3,000万円規模の見直し効果が期待できます。",
  },
  {
    question: "三重県の半導体関連補助金は何が活用できますか？",
    answer:
      "三重県の産業集積・脱炭素設備導入補助、国のSII省エネ補助、需要家主導型再エネ・PPA補助、GX・CN投資促進税制、経産省半導体関連投資支援基金の5層を組合せ可能。キオクシア新棟建設や周辺サプライヤー誘致と並行して支援メニュー整備が進んでおり、最新公募状況は三重県雇用経済部・SII・経産省商務情報政策局の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "東海地震BCPは半導体ファブにどう影響しますか？",
    answer:
      "三重県は南海トラフ巨大地震・東海地震の被害想定エリアに該当し、半導体メーカーは自家発電（UPS＋ディーゼル）の燃料備蓄日数・系統復旧優先度・代替拠点との連携を重視します。物理的な復旧作業は中部電力PG（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・補償・自家発切替支援は小売事業者ごとに体制が異なるため、契約時に必ず確認してください。半導体ファブは数時間の停電で数十億円の損失が発生する業種特性のため、BCP体制は経営最優先事項です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中部電力ミライズ 法人向け料金プラン", url: "https://miraiz.chuden.co.jp/" },
  { name: "中部電力パワーグリッド 供給計画", url: "https://powergrid.chuden.co.jp/" },
  { name: "キオクシア 統合報告書／サステナビリティレポート", url: "https://www.kioxia.com/" },
  { name: "シャープ 環境報告書", url: "https://corporate.jp.sharp/" },
  { name: "三重県 雇用経済部 産業集積", url: "https://www.pref.mie.lg.jp/" },
  { name: "経済産業省 商務情報政策局（半導体政策）", url: "https://www.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function MieSemiconductorElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/mie-semiconductor-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "三重県の半導体・電子部品工場の電気料金", url: "https://simulator.eic-jp.org/mie-semiconductor-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">三重県の半導体・電子部品工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            三重県の半導体・電子部品工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            三重県は四日市市のキオクシアNAND型フラッシュメモリ拠点と亀山市のシャープ液晶・カメラモジュール拠点を中心に、日本でも有数の半導体・電子部品集積地です。本ページでは「三重県 × 半導体・電子部品」というクロス領域に絞り、中部電力エリア固有の燃調感応度の高さと、クリーンルーム24時間稼働・露光装置電力品質要求・キオクシアRE100対応・補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>四日市キオクシア／亀山シャープの集積と電力プロファイル</li>
              <li>NAND型フラッシュメモリ／液晶／装置工場のBefore/After削減事例</li>
              <li>中部電力エリアの単価水準と燃調感応度の高さ</li>
              <li>キオクシアRE100要請と中部エリア固有のPPA調達戦略</li>
              <li>三重×半導体に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「三重 × 半導体」のクロス領域に特化したガイドです。三重県全体の文脈は{" "}
            <Link href="/mie-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              三重県の法人電気料金完全ガイド
            </Link>
            、業種一般としての半導体業全体は{" "}
            <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              半導体業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              三重県の半導体・電子部品集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県、特に四日市市・亀山市はキオクシアNANDフラッシュメモリとシャープ液晶を中心とした世界クラスの半導体・電子部品集積地です。24時間連続のクリーンルーム空調と中部電力エリアの燃調感応度の高さが業種特性の中心となります。
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
              三重県全体の文脈は{" "}
              <Link href="/mie-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                三重県の法人電気料金ガイド
              </Link>
              、中部電力エリア全体は{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中部電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                半導体業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中部電力エリアの主要電力会社・新電力（三重×半導体での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県内の半導体・電子部品工場は、中部電力ミライズに加えて全国系新電力・東邦ガス系・再エネ特化型・PPA事業者と多様なプレイヤーが供給。大型ファブでは競争入札が標準化し、中堅工場でも切替シフトが進行中です。
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
              中部電力エリアの料金水準と半導体ファブへの影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、中部エリアの燃調感応度の高さ、再エネ賦課金とRE100調達コストを、半導体ファブの代表的な契約タイプ別に整理します。
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
              規模別事例3件 — 大型NANDファブ／液晶・カメラモジュール／中堅装置（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県内の代表的な3規模の半導体・電子部品工場で、契約見直し＋クリーンルーム省エネ＋コージェネ＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/semiconductor-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">半導体業の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              三重×半導体固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重半導体の電気代上昇は、クリーンルーム24h絶対需要・中部エリアの燃調感応度（高位）・EUV/ArF露光装置の高密度電力・超純水/特殊ガスのユーティリティ電力・キオクシア等のRE100要請の5要因が複合的に作用します。
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
              補助金・優遇制度 — 三重県・国・経産省半導体支援の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県の産業集積・脱炭素設備導入補助、国のSII省エネ補助、需要家主導型再エネ・PPA補助、GX・CN投資促進税制、経産省半導体関連投資支援基金の5層を組合せ、半導体投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（四日市／亀山／鈴鹿・桑名／伊勢）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県内の半導体集積は、四日市のキオクシア／ウェスタンデジタル合弁、亀山のシャープ液晶・カメラモジュール、鈴鹿・桑名のTier1/Tier2サプライヤー、伊勢の東京エレクトロン拠点、特高変電所網という構造です。
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
              電力会社切替の実情 — 中部電力ミライズと新電力の比較（半導体版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大型半導体ファブでは競争入札が標準化、中堅工場でも切替余地大、市場連動からの固定回帰、キオクシアRE100要請による再エネ調達主流化、オフサイトPPA・VPPAの拡大が共通トレンドです。
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
              三重×半導体の省エネ・自家消費事例（FFU高効率化／フリークーリング／コージェネ／PPA／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              半導体ファブの省エネは、クリーンルーム空調の高効率化（FFU・CRAC・チラー）、外気冷房（フリークーリング）、コージェネ稼働最適化＋廃熱回収、オフサイトPPA＋自家消費、BEMS＋AI需給予測の5軸が主力。経営インパクト大の打ち手が揃っています。
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
              三重×半導体 契約見直しチェックリスト（12項目）
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
              シミュレーターで三重×半導体の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重半導体は、クリーンルーム24h絶対需要・中部エリア燃調感応度の高さ・露光装置電力品質要求・キオクシアRE100要請など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、燃調上限契約・クリーンルーム省エネ投資・オフサイトPPAのメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
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
              { href: "/mie-business-electricity-cost", title: "三重県の法人電気料金ガイド（地域一般）", description: "三重県全体の文脈・中部電力エリア・四日市コンビナート。" },
              { href: "/semiconductor-electricity-cost-review", title: "半導体業の電気料金見直し（業種一般）", description: "メモリ・ロジック・パワー半導体のクリーンルーム最適化。" },
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情", description: "中部全体の料金体系・燃調感応度・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/kumamoto-semiconductor-electricity-cost", title: "熊本県の半導体・電子部品工場の電気料金", description: "九州電力エリアのJASM/TSMCクロス（兄弟ページ）。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "中部電力エリアのトヨタ系完成車クロス（兄弟ページ）。" },
              { href: "/electronics-electricity-cost-review", title: "電子機器業の電気料金見直し", description: "SMT実装・リフロー・検査装置の最適化。" },
              { href: "/datacenter-electricity-demand-surge", title: "データセンター電力需要急増", description: "AI/HPC需要で増えるDC需要との対比。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "半導体ファブに固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "ファブの24h一定負荷では市場連動が不利な理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "中部エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "中部エリアの感応度の高さを理解。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "キオクシアRE100対応の追加性ある再エネ調達。" },
            ]}
          />

          <ContentCta
            heading="三重の半導体・電子部品工場の電気代リスクを自社条件で試算する"
            description="キオクシア四日市・シャープ亀山・東京エレクトロン伊勢など三重の半導体集積固有の条件（中部電力エリア・クリーンルーム24h・特別高圧・RE100要件）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。燃調上限契約・クリーンルーム省エネ投資・オフサイトPPAのROIもあわせて確認できます。"
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
            heading="三重の半導体・電子部品工場の電力契約見直し、専門家に相談しませんか？"
            description="大型NANDファブ・液晶・装置・電子部品工場いずれも特別高圧の規模感とキオクシア等のRE100要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で三重県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
