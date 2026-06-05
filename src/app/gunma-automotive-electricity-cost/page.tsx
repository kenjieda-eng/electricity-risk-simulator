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
  "群馬県の自動車・輸送機器工場の電気料金完全ガイド｜太田・大泉のSUBARU城下町とサプライヤー集積";
const pageDescription =
  "群馬県の自動車・輸送機器製造業に特化。太田市のSUBARU群馬製作所（本工場・矢島工場）を核に大泉・伊勢崎・館林・邑楽郡のTier1/Tier2サプライヤー集積、プレス／塗装／溶接／組立ラインの電力プロファイル、東京電力エリアの単価事情、特別高圧の競争入札、補助金・PPA活用、EV化対応までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "群馬県 自動車工場 電気料金",
    "太田 SUBARU 電気代",
    "群馬 自動車部品 電力",
    "東京電力 特別高圧 自動車",
    "自動車工場 塗装 溶接 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/gunma-automotive-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/gunma-automotive-electricity-cost",
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
    label: "群馬県の自動車産業集積 — 太田SUBARU城下町を核とする裾野の広さ",
    detail:
      "群馬県は東毛地域（太田・大泉・伊勢崎・館林・邑楽郡）を中心に、完成車・部品・素材・物流が連なる自動車産業集積地です。太田市はSUBARU（旧富士重工業）群馬製作所の本工場・矢島工場・大泉工場（エンジン）が立地する企業城下町で、起源は航空機メーカーの中島飛行機にさかのぼります。プレス・車体溶接・塗装・組立・エンジンの一貫工程に加え、大泉町の電機・自動車部品、伊勢崎・館林・邑楽郡のTier1/Tier2サプライヤー（金属加工・樹脂成形・電子部品）が周辺に広がり、特別高圧・高圧契約の需要家が東毛に集中しています（出典: 群馬県統計年鑑・経産省工業統計から整理）。",
  },
  {
    label: "完成車工場の電力プロファイル — プレス／溶接／塗装／組立",
    detail:
      "完成車1台の生産に要するエネルギーのうち、電力消費の中心は塗装ライン（前処理・電着・中塗・上塗・乾燥／全エネルギーの概ね30〜40%とされる）、プレス（大型サーボプレスの瞬間負荷）、ボディ溶接（スポット溶接ロボット）、組立ラインの照明・空調・搬送です。とりわけ塗装工程は乾燥炉の熱負荷とクリーン度維持の空調が連続稼働するため、工場全体の電力単価最適化では塗装ラインのkW削減が長年の課題とされます（出典: 自動車工業会データ・各社環境報告書から整理）。",
  },
  {
    label: "Tier1・Tier2サプライヤーの電力負荷",
    detail:
      "大泉町の電機・自動車部品工場、伊勢崎・館林・邑楽郡のTier1/Tier2（金属プレス・切削・樹脂成形・電子部品・治工具）が完成車工程を支えます。プレス・熱処理・切削・成形・検査と工程が多様で、デマンド変動が大きい点が特徴です。中小規模の高圧需要家も多く、群馬県内の自動車関連事業所数は数百〜千規模に上るとされ、設備更新と新電力切替を組み合わせた見直し余地が大きいエリアです（出典: 群馬県統計・経産省工業統計から整理）。",
  },
  {
    label: "EV化・電動化シフトに伴う電力需要構造の変化",
    detail:
      "BEV/HEV/PHEVの拡大により、エンジン関連工程の比重が下がる一方で、駆動用バッテリー組立・モーター巻線・パワー半導体（IGBT/SiC）製造の電力需要が増える方向にあります。バッテリー組立では電極乾燥・恒温恒湿クリーンルーム・化成（充放電エージング）の電力が大きく、従来のエンジン機械加工とは負荷プロファイルが大きく異なります。完成車・サプライヤーとも既存ラインを併存させながら段階的に移行するため、急激なkW削減が進む見込みは薄く、むしろ電動化部品の新増設で県内総電力需要は当面維持〜微増基調が想定されます（出典: 業界団体・エネ庁資料から整理）。",
  },
  {
    label: "東京電力エリアの系統と自動車工場の相互依存",
    detail:
      "群馬県は東京電力パワーグリッド（送配電）の供給エリアで、小売は東京電力エナジーパートナーをはじめ多数の事業者が参入しています。東京電力エリアの電源はLNG・石炭火力が中心で一部原子力（柏崎刈羽は再稼働途上）、全国最大級の需要規模を抱えます。柏崎刈羽の再稼働状況は中長期の卸電力価格やエリア需給に影響し得る要素で、火力燃料への依存度を左右します。東毛の自動車工場群の特別高圧・高圧需要はエリア需要の一翼を担い、火力依存度の高さから燃料費調整額の感応度が相対的に高い状態が続いています。JEPX東京エリア価格は全国需給の指標として参照され、市場連動契約の工場では同価格の変動が直接コストに反映されます（出典: 東京電力パワーグリッド供給・系統情報／エネ庁資料から整理）。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（旧一電・小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "群馬県内最大シェアの小売事業者で、太田・大泉・伊勢崎の特別高圧・高圧需要家を多数抱えます。『高圧電力』『特別高圧電力』を主軸に、固定単価・燃調連動型ともに整備。2022〜2023年の市況高騰局面では法人向けも実質値上げが続き、競合新電力との価格差が拡大した時期もありましたが、長期安定供給と災害復旧体制の厚みで大口取引は維持基調です。安定供給価値と単価の双方を踏まえた総合判断が前提になります。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "群馬県内の特別高圧・大型高圧の競争入札における主要対抗馬です。固定単価メニュー（3〜5年契約）が中心で、年間1,000万kWh超の大型案件で実績を積み上げています。完成車メーカーのカーボンニュートラル要請を受け、非化石証書付き・再エネトラッキング付きメニューの引合いが増えています。比較はあくまで自社の需要パターンに依存し、相見積で条件を横並びに評価することが重要です。",
  },
  {
    name: "ガス系・地域系新電力（東京ガス系・関東圏の地域新電力等）",
    role: "地域系新電力",
    detail:
      "東京ガス系の電気事業など、コージェネ併設工場や都市ガス需要家との一括最適化提案を強みとする事業者が関東圏で供給しています。群馬・北関東の自動車・電子部品工場で、ガス＋電気の総合最適パッケージとして採用例があります。設備構成によって有利不利が分かれるため、特定の契約形態を推奨するものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（みんな電力・自然電力・オリックス・東京ガス系等）",
    role: "再エネ特化型／PPA",
    detail:
      "完成車メーカーがScope3を含むGHG削減をサプライヤーに要請するなか、追加性のある再エネ調達ニーズが拡大しています。工場屋根のオンサイトPPA（太田・大泉は屋根面積が広く適性が高い）、県内・北関東のオフサイトPPA、コーポレートPPAの引合いが増加傾向です。調達手段の最適解は事業所ごとに異なり、立地・屋根条件・需要量で適否が分かれます。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では東京エリアでも一部新電力が新規受付停止・撤退に至りました。2024年以降は供給枠が徐々に回復しているとされますが、特別高圧大型案件（年間数千万kWh超）では供給可能kWh枠の確保が常に課題で、入札の早期着手（契約満了12ヶ月前から）が重要です（出典: 業界団体・エネ庁資料から整理）。",
  },
  {
    name: "JEPX東京エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX東京エリアのスポット価格は全国需給の中心として参照され、冬季・夏季のピーク時間帯には大きく上振れする局面があります。市場連動型契約の自動車工場では2022〜2023年に大幅な単価上昇を経験し、現在は固定回帰の動きが優勢です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "東京電力エリアの特別高圧 — 自動車工場の単価水準",
    detail:
      "完成車工場・大型サプライヤー（2,000kW超）の特別高圧電力量料金は標準メニューで概ね16〜19円/kWh+調整項目とされます。燃料費調整額（2024〜2025年で+2.0〜+4.0円/kWh目安）と再エネ賦課金（2026年度4.18円/kWh（確定））を加算した実質単価は概ね22〜27円/kWhレンジが目安。新電力競争入札では標準比1〜2円/kWh下げが目安とされますが、これは自社の需要規模・負荷率・契約条件次第で変動するため、あくまで目安として捉えてください。",
  },
  {
    label: "高圧電力 — Tier1・Tier2部品工場の単価",
    detail:
      "大泉・伊勢崎・館林・邑楽郡の高圧Tier1・Tier2工場（500kW〜2,000kW級）は『高圧電力』が中心で、電力量料金は概ね17〜21円/kWh+調整項目とされます。再エネ賦課金2026年度4.18円/kWh（確定）等を含む実質単価は概ね24〜29円/kWhレンジが目安。新電力経由なら2〜3円/kWh安いケースもあるとされますが、結果は契約条件で変動するため目安として扱ってください（出典: 新電力ネットを加工して整理）。",
  },
  {
    label: "燃料費調整額の感応度 — 東京電力エリア固有",
    detail:
      "東京電力エリアの電源構成はLNG・石炭火力が中心で、為替（円安）とLNG価格（JKMスポット）の双方に感応します。2022年Q4〜2023年Q1のピーク時は燃調が大きく上振れした局面もあり、年間使用量3,000万kWh級の工場では燃調だけで年間数億円規模の変動を経験したとされます。数値は目安レンジで、出典: 東京電力料金実績／資源エネ庁エネルギー白書から整理しています。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量1億kWh級の完成車工場では年4億円超規模の負担に相当します。一部の電力多消費業種は減免（賦課金算定額の8割減免）の対象となる可能性があり、自動車部品工場の中でも電気使用量原単位の高い事業所は申請を検討する価値があります。本記事は特定の電力会社・契約形態を推奨するものではありません（出典: エネ庁公表値から整理）。",
  },
];

const industryImpact = [
  {
    title: "規模1: 完成車・大型サプライヤー（特別高圧 20,000kW、年間 1.0億kWh／代表シナリオ）",
    before:
      "Before: 東毛地域の完成車・大型サプライヤーを想定した代表シナリオ。プレス・溶接・塗装・組立を内製し、特別高圧契約＋既往の燃調連動。2023年度は燃調上昇＋夏冬ピーク重なりで請求がピーク月で大きく膨らみ、年間電気代は概ね100億円超規模（目安）。数値は代表シナリオの目安レンジです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約（再エネ比率・トラッキング付）を獲得／塗装ラインの低温硬化型塗料導入＋廃熱回収／プレスのサーボモーター更新／工場屋根のオンサイトPPA（自家消費＋RE100算入）／BEMS・需給予測AI導入を組み合わせる構成。",
    result:
      "Result: 年間電気代 概ね▲約15〜18%、金額にして▲十数億円（目安）／契約電力 20,000→18,000kW前後／RE100比率の段階的向上／カーボンニュートラル工場ロードマップに準拠。あくまで代表シナリオの試算で、実数値は工場構成と契約条件で変動します。",
  },
  {
    title: "規模2: 中規模Tier1（高圧〜特別高圧 5,000kW、年間 3,000万kWh／代表シナリオ）",
    before:
      "Before: 大泉・伊勢崎の中規模Tier1（電子部品・駆動系部品）を想定。実装ライン＋検査が長時間稼働し、市場連動プラン併用で2023年1月の高騰局面では月次請求が大きく上振れ。年間電気代は概ね35〜42億円規模（目安）。数値は代表シナリオの目安レンジです。",
    after:
      "After: 入札特化型新電力に固定2年で切替／中間期のフリークーリング適用拡大／コンプレッサー高効率機更新（SII補助1/2活用）／自家消費太陽光＋蓄電池導入／需給予測AIでピークシフト、という構成を想定。",
    result:
      "Result: 年間電気代 概ね▲約15〜17%、金額にして▲数億円（目安）／契約電力 5,000→4,600kW前後／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。代表シナリオの試算であり、実際の効果は需要パターンと設備状況で変わります。",
  },
  {
    title: "規模3: 中小Tier2（高圧 1,500kW、年間 1,000万kWh／代表シナリオ）",
    before:
      "Before: 館林・邑楽郡の中小Tier2（金属プレス・切削加工）を想定。完成車向けプレス部品＋切削部品を内製し、高圧電力＋燃調連動。2023年度は燃調影響で前年比＋20%前後の電気代増加を経験した想定。年間電気代は概ね2.5〜3.0億円規模（目安）。数値は代表シナリオの目安レンジです。",
    after:
      "After: 新電力に固定2年・燃調上限ありで切替／プレスのサーボ化＋油圧→電動化／工場LED化（県補助＋SII併用）／コンプレッサーの集中管理＋エア漏れ対策／屋根太陽光の自家消費、という構成を想定。",
    result:
      "Result: 年間電気代 概ね▲約18〜20%、金額にして▲5,000万〜6,000万円（目安）／契約電力 1,500→1,350kW前後／投資回収 補助金後 2.0年前後（目安）。代表シナリオの試算で、特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const costFactors = [
  {
    label: "塗装ライン電力負荷の集中",
    detail:
      "完成車・大型サプライヤーの塗装ラインは前処理・電着・中塗・上塗・乾燥が直列に並び、温度・湿度管理＋乾燥炉電力＋クリーン度維持の空調が連続稼働します。1台当たり消費電力では塗装が概ね30〜40%を占めるとされ、塗装ラインのkW削減が工場全体の電力単価最適化の主戦場です（出典: 自動車工業会データ・各社環境報告書から整理）。",
  },
  {
    label: "プレスラインの瞬間ピーク負荷",
    detail:
      "大型サーボプレス（数千kW級）の稼働時瞬間電力が契約電力（kW）を押し上げ、デマンド料金（基本料金）の主要因になります。特にプレスとボディ溶接ラインが同時稼働するタイミングは月間の最大デマンドを形成しやすく、ここを抑えられるかが基本料金の年間総額を左右します。プレス機の稼働タイミング分散・サーボモーター回生制動・蓄電池併用での平準化が、契約kW削減＝基本料金削減に直結します。投資効果は工場構成によって変わるため、目安として捉えてください。",
  },
  {
    label: "東京電力エリアの燃調感応度",
    detail:
      "東京電力エリアはLNG・石炭火力が中心で、為替（円安）とLNGスポット価格（JKM）に強く感応します。2022〜2023年の高騰局面では燃調が前年比で大きく拡大し、年間1億kWh級工場で年数億円規模のコスト変動を経験したとされます。今後も燃調を見据えた固定vs市場連動の選択が経営判断の中心になります（出典: 東京電力料金実績・エネ庁資料から整理）。",
  },
  {
    label: "EV化に伴う設備投資の電力需要",
    detail:
      "BEV化に伴いエンジン関連工程は段階的に縮小する一方、駆動用バッテリー組立・モーター巻線・パワー半導体製造の新規ラインが立ち上がり、新増設工場の電力需要が増加します。完成車・サプライヤー全体では当面の県内総需要は維持〜微増基調が想定され、契約電力の最適化は引き続き経営課題です（出典: 業界団体・エネ庁資料から整理）。",
  },
  {
    label: "再エネ賦課金とサプライヤーのCN要請",
    detail:
      "再エネ賦課金（2026年度4.18円/kWh（確定））が負担として効くなか、完成車メーカーからTier1・Tier2へのScope3 GHG排出削減要請が強まり、サプライヤー側でも再エネ電源調達（PPA・非化石証書）が事実上必須化しつつあります。電気代単価そのものに加え、再エネ調達コストも経営計画に織り込む必要があります（出典: エネ庁公表値・業界団体資料から整理）。",
  },
];

const subsidies = [
  {
    name: "群馬県 産業政策・企業立地関連補助（群馬県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入・企業立地",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2025年度時点の目安",
    note: "県の産業政策・企業立地促進に基づく補助メニューです。自動車部品中小製造業の高効率設備更新・コンプレッサー・LED・断熱・BEMS等が対象になり得ます。SII補助との併用可否は事業別に要確認です。最新の公募状況は群馬県の公式窓口でご確認ください。制度内容は年度ごとに変わるため公募要領の確認が必須です。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・冷凍・LED・コンプレッサー・サーボプレス・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）※年度により変動",
    note: "群馬県内の完成車・Tier1・Tier2の更新案件でも活用しやすい主力補助です。塗装ライン省エネ・コンプレッサー高効率化・全館LED化などで使いやすく、採択は要件と公募タイミング次第です（出典: SII公表資料から整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）※年度により変動",
    note: "太田・大泉など屋根面積の大きい完成車工場・大型サプライヤーで活用余地が大きいメニューです。カーボンニュートラル要請とリンクして、サプライチェーン全体でのPPA共同調達も検討段階にあります。制度は年度ごとに変わるため公募要領の確認が必須です。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "EV関連設備投資・燃料転換・PPA関連設備の取得で活用可能とされます。所管: 経産省・国税庁。関東経済産業局に事前相談窓口があり、工場新増設時に組合せ検討するのが定石です。適用可否は個別要件によります。",
  },
  {
    name: "関東経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "Tier1・Tier2の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3（目安）",
    note: "EV化に伴うサプライチェーン再編・Tier2の高度化を後押しする関東経産局のメニューです。年度ごとの公募タイミング把握が重要で、採択率は分野・年度で変動します（出典: 経産省・関東経産局公表資料から整理）。",
  },
];

const industryProfile = [
  {
    label: "太田市 — SUBARU完成車・本社機能の集積",
    detail:
      "太田市はSUBARU群馬製作所の本工場・矢島工場・大泉工場（エンジン）が集中する企業城下町です。起源は航空機メーカーの中島飛行機にさかのぼり、プレス・車体溶接・塗装・組立・エンジンの一貫工程を抱えます。特別高圧契約の集中度が高く、年間総電力需要は大規模に達するとされます。実在企業名は産業集積の説明にとどめ、優劣や推奨を示すものではありません。",
  },
  {
    label: "大泉町 — 電機・自動車部品の集積",
    detail:
      "大泉町は電機・自動車部品の工場が集積するエリアで、外国人就労者比率が高い多文化のものづくり拠点としても知られます。エンジン部品・電子部品・実装ラインなどの高圧・特別高圧需要家が立地し、東毛のサプライチェーンの中核を担っています。",
  },
  {
    label: "伊勢崎市 — Tier1サプライヤー中枢",
    detail:
      "伊勢崎市は金属加工・樹脂成形・電子部品のTier1サプライヤーが多数立地するエリアです。プレス・成形・実装・検査の各工程が稼働し、高圧・特別高圧の中堅需要家が集中。北関東自動車道沿いの物流利便性も高く、部品供給のハブ機能を担っています。",
  },
  {
    label: "館林市・邑楽郡 — Tier2サプライヤー集積",
    detail:
      "館林市・邑楽郡（大泉・千代田・明和・板倉・邑楽）はTier2の金属加工・樹脂成形・電子部品・治工具メーカーが多数立地します。中小規模の高圧契約が中心で、設備更新と新電力切替を組み合わせた電気代見直し余地が大きいエリアです。",
  },
  {
    label: "北関東自動車道沿線 — 部品・完成車物流連動",
    detail:
      "北関東自動車道（太田・伊勢崎・前橋方面）沿いには、完成車・部品の物流拠点や倉庫、関連の素材・部材供給が連動して立地します。素材から完成車までのサプライチェーンが東毛を中心に北関東で連なるエコシステムを形成しています。",
  },
];

const switchingReality = [
  {
    label: "東京エリアの新電力浸透度",
    detail:
      "東京電力エリアは全国でも新電力比率が比較的高い水準とされます。太田・大泉の特別高圧・大型高圧案件では競争入札が標準化し、新電力落札比率も相応に高いとされます。中小Tier2は旧一電継続が依然多い一方、切替余地は大きく、相見積による比較が有効です。どの選択が有利かは需要パターンと供給枠次第です（出典: 電力ガス取引監視等委員会資料から整理）。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で市場連動採用の自動車関連工場の多くが固定回帰しました。長期固定3〜5年契約が主流化しており、特別高圧では非化石証書付き／再エネトラッキング付きの組合せメニューが標準的なオプションになっています。どちらが有利かは需要パターン次第で、特定の契約形態を推奨するものではありません。",
  },
  {
    label: "旧一電継続のメリット・デメリット",
    detail:
      "メリット: 災害時の復旧体制・大口需要家向けエネルギーマネジメント支援・コージェネ運用支援など。デメリット: 新電力比で単価がやや高めとなる局面や、燃料費調整額の上限なしの契約が多い点など。特別高圧需要家では数千万円〜億円単位の単価差になることもありますが、安定供給価値とあわせ総合判断が必要です。",
  },
  {
    label: "新電力選定のポイント（群馬×自動車固有）",
    detail:
      "①完成車・Tier1への供給実績、②非化石証書／再エネトラッキング付メニュー（CN対応）、③長期固定（3〜5年）の単価安定性、④燃調上限・連動条件、⑤BCP対応（地震・台風・系統事故時の体制）の5点が重要です。比較の結論は自社条件に依存し、特定の事業者を推奨するものではありません。",
  },
  {
    label: "PPA・オフサイト調達の主流化",
    detail:
      "完成車メーカーのカーボンニュートラル方針と歩調を合わせ、屋根オンサイトPPA（太田・大泉）／オフサイトPPA（県内・北関東の太陽光案件）／コーポレートPPAが拡大傾向です。RE100調達コストは従来単価＋1〜3円/kWh程度のプレミアムで推移するとされますが、案件条件で変動します（出典: 業界団体・PPA事業者公表資料から整理）。",
  },
];

const energySaving = [
  {
    label: "塗装ライン低温硬化型塗料＋廃熱回収",
    detail:
      "塗装ラインの乾燥炉温度を従来の140〜160℃から100〜120℃に低温化することで電力▲20〜30%が見込めるとされます。さらに乾燥炉排熱を前処理・電着の温水加熱に再利用することで全体エネルギーを最適化できます。SII補助＋県補助の併用で投資回収 概ね3〜4年が目安です（効果は工程構成で変動）。",
  },
  {
    label: "プレスのサーボ化＋蓄電池併用ピークカット",
    detail:
      "従来油圧プレスをサーボプレスに更新することで電力消費▲15〜25%、加えて回生電力を蓄電池に貯めることでピーク需要▲10〜15%が見込めるとされます。契約電力（kW）削減で基本料金が直接下がり、投資回収 概ね4〜5年（補助金活用で2〜3年）が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めるとされます。圧縮エアはプレス・溶接ガン・塗装ブース・搬送機器など自動車工場の広範な工程で使われるユーティリティで、漏れや過剰圧設定が常時の無駄電力につながりやすい領域です。Tier1・Tier2いずれでも投資効率が高く、SII補助1/2で回収しやすい打ち手で、投資回収 概ね1.5〜2.5年が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋自家消費",
    detail:
      "太田・大泉・伊勢崎の大型完成車・Tier1工場では屋根面積が大きく確保できるケースが多く、屋根太陽光の自家消費PPAが現実的な打ち手とされます。初期投資ゼロでRE100算入＋電気代単価下げが両立しやすく、屋根荷重・形状・系統条件の事前確認が前提です。",
  },
  {
    label: "BEMS・需給予測AI＋デマンドレスポンス",
    detail:
      "BEMSで需要を見える化し、AIによる翌日需給予測＋DR市場参加で、ピーク需要▲10〜15%＋DR報酬収入を獲得できる可能性があります。一般送配電事業者の調整力公募・容量市場経由でも収益化が検討可能ですが、要件と収益性は年度・案件で変動します。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "塗装ライン乾燥炉のkW・年間使用kWhを工程別に把握しているか",
  "プレスラインの瞬間ピーク電力を蓄電池等で平準化できる余地はあるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東京電力エナジーパートナーの直近改定後単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力10社以上から相見積を取得したか",
  "完成車メーカーからのScope3/CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "オフサイトPPA・コーポレートPPAの調達可能性をデベロッパーに照会したか",
  "群馬県・SII・関東経産局補助の併用可否を設備別に整理したか",
  "EV化に伴う将来工程変化（バッテリー組立等）の電力需要見込を経営計画に織り込んだか",
  "地震・台風等のBCP（停電復旧優先度・自家発・蓄電池）の体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "群馬県の自動車工場は東京電力エリア固有の単価リスクが大きいですか？",
    answer:
      "東京電力エリアはLNG・石炭火力が中心で、為替（円安）とLNGスポット価格（JKM）に強く感応するため、燃料費調整額の変動幅が大きい構造です。2022〜2023年の高騰時には燃調が大きく拡大した局面もあり、年間1億kWh級の特別高圧需要家では年間数億円規模の単価変動を経験したとされます。固定単価＋燃調上限ありのプランへの切替や、非化石証書付き再エネメニューでのヘッジが基本戦略になります。本記事は特定の電力会社・契約形態を推奨するものではありません（出典: 東京電力料金実績／エネ庁エネルギー白書から整理）。",
  },
  {
    question: "完成車工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的に塗装ライン（前処理・電着・中塗・上塗・乾燥）が全エネルギーの概ね30〜40%を占めるとされます。次いでプレス（大型サーボプレスの瞬間負荷）、ボディ溶接ロボット、組立ラインの空調・照明・搬送が続きます。塗装の低温硬化化・乾燥炉廃熱回収、プレスのサーボ化＋蓄電池併用が電力単価最適化の主戦場です。数値は目安レンジで、工場構成により変動します（出典: 自動車工業会データ・各社環境報告書から整理）。",
  },
  {
    question: "Tier1・Tier2のサプライヤーは完成車メーカーからどんなCN要請を受けていますか？",
    answer:
      "完成車メーカーはカーボンニュートラル化を進めるなかで、サプライヤーにもScope3 GHG排出削減を要請する傾向にあります。具体的には、再エネ電源調達（PPA・非化石証書）、CO2原単位の継続改善、CN投資計画の開示などが求められ、対応状況が将来の取引にも影響し得ます。中小Tier2でも県補助＋SII補助＋オンサイトPPAの組合せで対応可能とされます。個別の要請内容は取引関係により異なります。",
  },
  {
    question: "太田・大泉の大型工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "現実的とされます。完成車・大型サプライヤー工場は屋根面積を大きく確保できるケースが多く、屋根太陽光PPAが導入しやすい条件にあります。初期投資ゼロ・PPA事業者が設備所有・自社は長期の電力購入契約という形が標準的です。RE100算入＋電気代単価下げが両立しやすく、カーボンニュートラル対応の手段としても採用例が増えています。屋根荷重・系統条件の事前確認が前提で、案件条件によって採算は変わります。",
  },
  {
    question: "EV化で群馬県の自動車関連電力需要は減りますか？",
    answer:
      "短中期では減らない見通しとされます。BEV/HEV/PHEV併存の移行期では、既存エンジン関連工程は当面維持され、加えてバッテリー組立・モーター巻線・パワー半導体製造の新規ラインが立ち上がるため、県内総電力需要はむしろ維持〜微増基調が想定されます。長期（2040年代以降）は工程構成次第ですが、契約電力の見直しは継続的な経営課題です（出典: 業界団体・エネ庁資料から整理）。",
  },
  {
    question: "大泉・伊勢崎のTier1工場でどの新電力が実績多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と入札特化型新電力が主要プレイヤーとされます。固定単価3〜5年契約＋非化石証書付メニューが標準化しており、再エネトラッキング付きの追加性を持つメニューも引合いが増えています。特定企業の落札実績は入札情報公開の範囲で各社IRや業界紙で確認可能です。比較の結論は自社の需要規模・負荷率・供給枠の条件に依存します。",
  },
  {
    question: "群馬県の産業政策・企業立地関連補助は自動車部品工場でも使えますか？",
    answer:
      "使える可能性があります。群馬県の産業政策・企業立地促進に基づき、中小・中堅製造業の省エネ設備・脱炭素設備導入を後押しする補助メニューが整備されています。コンプレッサー・LED・断熱・BEMSなど対象設備は幅広く、SII補助との重複可否は事業区分・設備別に確認が必要です。最新の公募状況は群馬県の公式窓口で確認してください（2025年度時点の整理）。採択は要件と公募タイミング次第です。",
  },
  {
    question: "地震・台風などのBCPは新電力切替後も継続できますか？",
    answer:
      "物理的な復旧作業は東京電力パワーグリッド（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間そのものは同じです。ただし停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発との連系条件を必ず確認してください。自動車関連工場ではBCP訓練・自家発連系試験を定期実施する慣行があります。ソフト面の体制は事業者ごとに差があるため、事前比較が有効です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 法人向け料金プラン", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京電力パワーグリッド 供給・系統情報", url: "https://www.tepco.co.jp/pg/" },
  { name: "日本自動車工業会（JAMA）", url: "https://www.jama.or.jp/" },
  { name: "群馬県 産業政策・企業立地", url: "https://www.pref.gunma.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function GunmaAutomotiveElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/gunma-automotive-electricity-cost"
        datePublished="2026-06-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "群馬県の自動車・輸送機器工場の電気料金", url: "https://simulator.eic-jp.org/gunma-automotive-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">群馬県の自動車・輸送機器工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            群馬県の自動車・輸送機器工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            群馬県は東毛地域（太田・大泉・伊勢崎・館林・邑楽郡）を中心に、完成車・部品・素材・物流が連なる自動車産業集積地です。太田市はSUBARU群馬製作所（本工場・矢島工場・大泉エンジン工場）を核とする企業城下町で、起源は中島飛行機にさかのぼります。本ページでは「群馬県 × 自動車・輸送機器製造業」というクロス領域に絞り、東京電力エリア固有の単価事情と、プレス／塗装／溶接／組立ラインの電力プロファイル、特別高圧の競争入札、補助金・PPA活用、EV化に伴う需要構造変化までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-06-05" updatedAt="2026-06-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>群馬県の自動車産業集積（太田・大泉・伊勢崎・館林・邑楽郡）の電力プロファイル</li>
              <li>完成車・大型サプライヤー／中規模Tier1／中小Tier2のBefore/After代表シナリオ3件</li>
              <li>東京電力エリアの単価水準と燃調感応度</li>
              <li>完成車メーカーのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>群馬×自動車に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「群馬 × 自動車」のクロス領域に特化したガイドです。群馬県全体の文脈は{" "}
            <Link href="/gunma-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              群馬県の法人電気料金ガイド
            </Link>
            、業種一般としての自動車部品業全体は{" "}
            <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              自動車部品業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              群馬県の自動車産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬県は東毛地域を中心に、完成車・Tier1・Tier2・素材・物流が連なる自動車産業集積地です。太田市のSUBARU群馬製作所を核に、大泉・伊勢崎・館林・邑楽郡へとサプライチェーンが広がり、特別高圧・高圧契約の需要家が集中しています。
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
              群馬県全体の文脈は{" "}
              <Link href="/gunma-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                群馬県の法人電気料金ガイド
              </Link>
              、東京電力エリア全体は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                自動車部品業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東京電力エリアの主要電力会社・新電力（群馬×自動車での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬県内の自動車関連工場は、東京電力エナジーパートナーに加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給しています。完成車・大型サプライヤーでは競争入札が標準化し、Tier2の中小工場では切替余地が依然大きい状態です。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
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
              東京電力エリアの料金水準と自動車工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度、再エネ賦課金の累積負担を、自動車工場の代表的な契約タイプ別に整理します。東京電力エリア固有のLNG・石炭感応度を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は標準メニューを基準に整理した目安値で、特定の電力会社・契約形態を推奨するものではありません。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 完成車・大型サプライヤー／中規模Tier1／中小Tier2（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開情報・業界ヒアリング・各社環境報告書等から再構成した代表シナリオで、数値は目安レンジ（▲%と▲金額の目安）です。
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
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品業の電気料金見直し</Link>
              や{" "}
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">組立工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              群馬×自動車固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬の自動車工場の電気代上昇は、塗装ライン集中負荷・プレス瞬間ピーク・東京電力エリアの燃調感応度・EV化に伴う設備投資・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 群馬県・国・関東経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬県の産業政策・企業立地関連補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、関東経産局のサプライチェーン強靱化補助の5層を組合せ、Tier1・Tier2の更新投資の回収を1〜2年短縮するのが定石です。いずれも年度公募の要件・採択率次第のため、公募要領の事前確認が前提になります。
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
              主要拠点／集積地の電力プロファイル（太田／大泉／伊勢崎／館林・邑楽郡）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬の自動車サプライチェーンは、太田のSUBARU完成車・本社機能を中心に、大泉の電機・自動車部品、伊勢崎のTier1中枢、館林・邑楽郡のTier2集積、北関東自動車道沿線の部品・完成車物流連動という5層構造です。実在企業名は産業集積の説明にとどめ、優劣や推奨を示すものではありません。
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
              電力会社切替の実情 — 旧一電と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              完成車・大型サプライヤーでは競争入札が標準化、Tier2では切替余地大、完成車メーカーのCN方針と連動した再エネ調達（PPA・非化石証書）の主流化が共通トレンドです。市場連動からの固定回帰も顕著で、いずれも自社条件次第のため特定の契約形態を推奨するものではありません。
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
              群馬×自動車の省エネ・自家消費事例（塗装ライン／プレス／コンプレッサー／屋根PPA／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車工場の省エネは、塗装ライン低温硬化＋廃熱回収、プレスのサーボ化＋蓄電池、コンプレッサー高効率化、屋根オンサイトPPA、BEMS＋需給予測AIの5軸が主力です。完成車・Tier1・Tier2いずれでも投資回収2〜5年で実現可能なメニューが揃っているとされます（効果は工場構成で変動）。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ調達の進め方は{" "}
              <Link href="/corporate-ppa-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コーポレートPPA導入ガイド</Link>
              、エリア電源構成は{" "}
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別電源構成マップ</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              群馬×自動車 契約見直しチェックリスト（12項目）
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
              シミュレーターで群馬×自動車の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              群馬の自動車工場は、東京電力エリアのLNG・石炭感応度・塗装ライン集中負荷・完成車メーカーのCN要請・EV化など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オンサイトPPA・省エネ投資のメリットを定量化できます。本ツールは特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模からの試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター（D-1）</Link>
              もご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-05"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/gunma-business-electricity-cost", title: "群馬県の法人電気料金ガイド（地域一般）", description: "群馬県全体の電力事情・北関東の産業集積・補助金。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東京エリアの料金体系・燃調・市況動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品業の電気料金見直し（業種一般）", description: "プレス・溶接・塗装・組立の業種別最適化。" },
              { href: "/assembly-factory-electricity-cost-review", title: "組立工場の電気料金見直し（業種一般）", description: "組立ラインの空調・搬送・照明の最適化。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車工場の電気料金（クロス）", description: "中部電力エリアのトヨタ城下町クロス。" },
              { href: "/hiroshima-automotive-electricity-cost", title: "広島県の自動車・造船の電気料金（クロス）", description: "中国電力エリアのマツダ城下町クロス。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "高騰時の経営影響を踏まえた選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "各エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="群馬の自動車工場の電気代リスクを自社条件で試算する"
            description="太田・大泉・伊勢崎・館林・邑楽郡の自動車工場固有の条件（東京電力エリア・塗装ライン・特別高圧・完成車メーカーのCN要請）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オンサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="群馬の自動車工場の電力契約見直し、専門家に相談しませんか？"
            description="完成車・Tier1・Tier2いずれも特別高圧・高圧の規模感と完成車メーカーのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で群馬県内事業者の判断材料を整理し、特定の電力会社・契約形態を推奨するものではありません。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
