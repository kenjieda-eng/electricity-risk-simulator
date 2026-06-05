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
  "宮城県の水産加工業の電気料金完全ガイド｜石巻・気仙沼・塩釜の冷凍冷蔵集積と東北電力";
const pageDescription =
  "宮城県の水産加工業に特化。石巻・気仙沼・塩釜の冷凍冷蔵・水産加工集積を核に、急速凍結・冷凍冷蔵倉庫・製氷の24時間稼働の電力プロファイル、東北電力エリアの単価事情と燃調感応度、震災後のBCP、特別高圧／高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "宮城県 水産加工 電気料金",
    "石巻 冷凍冷蔵 電気代",
    "気仙沼 水産 電力",
    "東北電力 高圧 水産加工",
    "急速凍結 製氷 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/miyagi-seafood-processing-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/miyagi-seafood-processing-electricity-cost",
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
    label: "宮城県の水産加工集積 — 石巻・気仙沼・塩釜・女川を核とする産地構造",
    detail:
      "宮城県は三陸沖の好漁場を背後に持ち、石巻・気仙沼・塩釜・女川を中心とする全国有数の水産加工集積地です。石巻は水産加工・冷凍冷蔵の集積地で、東日本大震災後の復興過程で冷凍冷蔵設備の更新が進みました。気仙沼はカツオ・サンマ・サメ（フカヒレ）等の水揚げと冷凍・加工、塩釜はマグロ等の水揚げ・水産卸・冷蔵倉庫が集まります。練り製品・冷凍食品・素干し・節類・缶詰・燻製まで多様な業態が混在し、急速凍結・冷凍冷蔵倉庫・製氷の電力負荷が産地全体に分散している点が特徴です（出典: 水産庁 水産加工業統計・宮城県統計から整理／いずれも目安）。",
  },
  {
    label: "水産加工工場の電力プロファイル — 急速凍結／冷凍冷蔵倉庫／製氷",
    detail:
      "水産加工の電力消費は、急速凍結（エアブラスト・ブライン・液体凍結）、冷凍冷蔵倉庫の24時間稼働、製氷、解凍・加工・包装ラインの4区分が中心です。急速凍結機は−35〜−40℃級の低温を短時間で作るため瞬間負荷が大きく、冷凍冷蔵倉庫は−25℃前後を年間連続維持するためベース電力を恒常的に消費します。製氷は漁獲・出荷の鮮度保持に不可欠で夏季にピークが立ちます。冷凍・冷蔵が電気代の大半を占める業態のため、冷凍機の効率と運転制御が電力単価最適化の主戦場です（出典: 水産庁資料・業界団体ヒアリングから整理／目安）。",
  },
  {
    label: "震災後の復興と設備更新 — BCP・自家発・系統復旧の重み",
    detail:
      "東日本大震災で宮城県沿岸の水産加工施設は甚大な被害を受け、その後の復興過程で工場・冷凍冷蔵倉庫の再建と設備更新が進みました。再建時に高効率冷凍機・自然冷媒・断熱強化を導入した事業所がある一方、復興優先で旧式設備を引き継いだ施設も残ります。停電が長引くと冷凍在庫の品質劣化に直結するため、水産加工では自家発電・蓄電池・系統復旧優先度といったBCP（事業継続計画）の重要度が他業種より高い構造です（出典: 宮城県・水産庁の復興関連資料から整理）。",
  },
  {
    label: "東北電力エリアの系統と火力依存 — 燃調感応度が高い構造",
    detail:
      "宮城県は東北電力（小売）／東北電力ネットワーク（送配電）の供給エリアです。東北電力エリアは火力依存度が比較的高く、為替（円安）とLNG・石炭等の燃料価格に対する燃料費調整額の感応度が高い構造です。冷凍冷蔵を24時間動かす水産加工は使用電力量（kWh）が大きいため、燃調が動くと請求額の振れ幅も大きくなります。一方で東北・北海道は風力導入が進展しており、JEPX東北エリア価格や非化石証書の調達環境も変化しています（出典: 東北電力ネットワーク供給情報・資源エネ庁統計から整理／目安）。",
  },
  {
    label: "産地ごとの電力需要 — 漁期・水揚げ変動と季節ピーク",
    detail:
      "水産加工の電力需要は漁期・水揚げ量と連動します。気仙沼はカツオ・サンマ・サメの水揚げ期に冷凍・製氷負荷が集中し、塩釜はマグロ水揚げと冷蔵倉庫の回転に合わせて需要が変動します。石巻は冷凍冷蔵の集積として通年のベース負荷が厚く、夏季の製氷ピークと相まって最大デマンドが立ちやすい構造です。漁期の繁閑差が大きいほど契約電力（kW）と実需要の乖離が生じやすく、デマンド管理の巧拙が基本料金に直結します（出典: 各産地の水産統計から整理／目安）。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "宮城県内最大シェアの一般小売事業者。石巻・気仙沼・塩釜の冷凍冷蔵・水産加工の高圧・特別高圧需要家を多数抱えます。高圧・特別高圧の各種法人メニューを整備し、固定単価型・燃調連動型ともに選択可能です。災害時の復旧体制や大口需要家向けのエネルギーマネジメント支援に強みがあり、震災を経験した沿岸部ではBCP面での信頼が取引継続の理由になっているケースもあります（出典: 東北電力 法人向け料金プランから整理）。",
  },
  {
    name: "東北電力ネットワーク（送配電）",
    role: "一般送配電事業者",
    detail:
      "宮城県を含む東北6県＋新潟の送配電を担う一般送配電事業者。託送・系統接続・停電復旧・系統情報の提供を担当し、どの小売事業者と契約しても物理的な送配電と復旧作業はこの会社が行います。水産加工のBCPで重要な停電復旧優先度や自家発との連系条件は、小売契約の前提として東北電力ネットワークの供給条件を理解しておく必要があります（出典: 東北電力ネットワーク 供給・系統情報から整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "宮城県内の高圧・特別高圧水産加工の競争入札における主要な対抗馬です。固定単価メニュー（2〜5年契約）が中心で、冷凍冷蔵倉庫など年間使用量の大きい需要家で実績を積み上げています。近年は非化石証書付き・再エネトラッキング付きメニューの引合いも増えており、輸出向け水産加工で取引先からの再エネ要請に応える選択肢になっています。供給可能枠は時期により変動するため早期照会が有効です。",
  },
  {
    name: "地域系・再エネ特化型・PPA事業者（自然電力・みんな電力・オリックス等）",
    role: "再エネ特化型／PPA",
    detail:
      "東北は風力・太陽光の導入が進む地域で、再エネ特化型小売やPPA事業者の選択肢が広がっています。冷凍冷蔵倉庫や水産加工工場の屋根面積を活かしたオンサイトPPA、県内・東北圏のオフサイトPPA、非化石証書付きメニューなどが現実的な打ち手です。輸出向け水産加工では取引先のサプライチェーン脱炭素要請に応えるために追加性のある再エネ調達を検討する例が出始めています（出典: 各社公開情報から整理）。",
  },
  {
    name: "撤退・新規受付状況とJEPX東北エリア価格",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では東北エリアでも一部新電力が新規受付停止・撤退を行い、供給枠が絞られた時期がありました。その後は供給環境が徐々に回復しています。市場連動型契約の水産加工事業者はJEPX東北エリア価格に直接さらされるため、高騰局面で冷凍冷蔵の大量電力消費が請求額を押し上げます。固定回帰の動きが優勢ですが、最終判断は各社の需要構造とリスク許容度によります。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
  {
    name: "JEPX東北エリアプライスの参照",
    role: "市場参照",
    detail:
      "JEPX東北エリアのスポット価格は全国市場と概ね連動しつつ、風力出力や需給状況により独自の値動きをする局面があります。冷凍冷蔵を24時間動かす水産加工はベース電力が厚いため、市場連動採用時は深夜帯の安価な時間帯を活かせる一方、夏季・冬季のピーク時間帯価格上昇の影響も大きく受けます。市場価格の参照と固定プランの比較は継続的に行う価値があります。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "東北電力エリアの特別高圧 — 大規模冷凍冷蔵・水産加工の単価水準",
    detail:
      "大規模冷凍冷蔵・水産加工（2,000kW超の特別高圧）の電力量料金は標準メニューで概ね15〜19円/kWh+調整項目が目安です。燃料費調整額（2024〜2025年で+1.5〜+4.0円/kWh目安）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は21〜27円/kWhレンジが目安。新電力競争入札では標準比1〜2円/kWh下げが目安で、年間数千万kWh級の大型冷凍冷蔵倉庫では年間数千万円規模のインパクトになり得ます。数値は出典統計から整理した目安であり、実際の単価は契約条件で変動します。",
  },
  {
    label: "高圧電力 — 中規模・中小水産加工工場の単価",
    detail:
      "石巻・気仙沼・塩釜の中規模・中小水産加工工場（50kW〜2,000kW級の高圧）は業務用高圧メニューが中心で、電力量料金は16〜21円/kWh+調整項目が目安です。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加算した実質単価は23〜29円/kWhレンジ。冷凍冷蔵・製氷の使用電力量が大きい業態のため、新電力経由で2〜3円/kWh安くなれば見直し効果が出やすいレンジです。数値はあくまで業界統計から整理した目安です。",
  },
  {
    label: "燃料費調整額の感応度 — 東北電力エリア固有",
    detail:
      "東北電力エリアは火力依存度が比較的高く、為替（円安）と燃料価格（LNG・石炭等）の双方に感応します。2022年後半〜2023年前半のピーク時には燃調が大きく上振れし、冷凍冷蔵を24時間動かす使用電力量の大きい水産加工では年間コストの振れ幅が拡大した局面がありました。年間使用量1,000万kWh級の工場では燃調の数円/kWh変動が年間数千万円規模の差を生むため、燃調上限の有無は契約上の重要論点です（出典: 東北電力単価実績・資源エネ庁エネルギー白書から整理／目安）。",
  },
  {
    label: "再エネ賦課金の累積負担 — 2026年度4.18円/kWh（確定）",
    detail:
      "2026年度の再生可能エネルギー発電促進賦課金は4.18円/kWh（確定）です。年間使用量1,000万kWh級の水産加工工場では年約4,180万円規模、3,000万kWh級の大型冷凍冷蔵倉庫では年約1.25億円規模の負担となります。電力多消費の事業所は賦課金減免制度の対象となる可能性があり、冷凍冷蔵中心で電気使用量原単位の高い事業所は要件確認と申請検討の価値があります。減免可否は事業所の電気使用原単位等の要件で判定されます。",
  },
];

const industryImpact = [
  {
    title:
      "規模1: 大規模冷凍冷蔵・水産加工（特別高圧 4,000kW、年間 2,800万kWh・代表シナリオ）",
    before:
      "Before: 石巻地区の大規模冷凍冷蔵・水産加工施設A（−25℃級冷凍冷蔵倉庫＋急速凍結ライン＋製氷を併設、24時間稼働）。東北電力の特別高圧契約＋燃調連動。2023年度は燃調上昇と夏季製氷ピークが重なり、ピーク月の請求が大きく膨らみました。年間電気代 約7.0億円（出典統計から整理した代表シナリオ・目安）。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢併用）／急速凍結機・冷凍機の自然冷媒（アンモニア・CO2）＋インバータ化更新／冷凍冷蔵倉庫の蓄熱・夜間製氷シフトでピーク平準化／断熱扉・高速シャッター更新／BEMS・需給予測で最大デマンド管理。",
    result:
      "Result: 年間電気代 約7.0億円 → 約5.8億円（▲約17%、▲1.2億円・目安）／契約電力 4,000→3,600kW／夜間シフトで夏季ピークデマンド平準化／自然冷媒化でフロン規制対応も前進。数値は代表シナリオの目安です。",
  },
  {
    title:
      "規模2: 中規模水産加工（高圧 1,200kW、年間 850万kWh・代表シナリオ）",
    before:
      "Before: 気仙沼地区の中規模水産加工B社（カツオ・サンマの冷凍・加工＋冷蔵倉庫、漁期に負荷集中）。東北電力の業務用高圧＋燃調連動。2023年度は燃調影響で前年比+18%前後の電気代増加。年間電気代 約2.1億円（代表シナリオ・目安）。",
    after:
      "After: 東北エリア対応の新電力に固定2年・燃調上限ありで切替／冷凍機のインバータ化＋凝縮温度の最適制御／冷蔵倉庫の断熱強化＋デフロスト制御改善／製氷の夜間シフト／屋根太陽光500kWの自家消費＋蓄電池でピークカット／SII補助1/2活用（投資1.2億円・目安）。",
    result:
      "Result: 年間電気代 約2.1億円 → 約1.7億円（▲約19%、▲4,000万円・目安）／契約電力 1,200→1,080kW／投資回収 補助金後 2.5年前後（目安）／漁期ピーク時のデマンド超過リスク低減。数値は代表シナリオの目安です。",
  },
  {
    title:
      "規模3: 中小水産加工（高圧 400kW、年間 260万kWh・代表シナリオ）",
    before:
      "Before: 塩釜地区の中小水産加工C社（マグロ加工・冷蔵保管・小規模製氷、従業員50名規模）。東北電力の業務用高圧＋燃調連動。冷蔵設備が更新時期を迎え、燃調上昇で2023年度は前年比+20%前後の電気代増加。年間電気代 約6,500万円（代表シナリオ・目安）。",
    after:
      "After: 東北系新電力に固定2年・燃調上限ありで切替／老朽冷凍機を高効率インバータ機＋自然冷媒へ更新（SII補助＋県補助併用、投資3,500万円・目安）／工場LED化／冷蔵庫の扉・断熱改善＋エア漏れ対策／デマンドコントローラー導入。",
    result:
      "Result: 年間電気代 約6,500万円 → 約5,200万円（▲約20%、▲1,300万円・目安）／契約電力 400→360kW／投資回収 補助金後 2.0年前後（目安）。数値は代表シナリオの目安です。",
  },
];

const costFactors = [
  {
    label: "冷凍冷蔵倉庫の24時間ベース負荷",
    detail:
      "−25℃前後を年間連続で維持する冷凍冷蔵倉庫は、操業の有無にかかわらずベース電力を恒常的に消費します。庫内温度・断熱性能・扉の開閉頻度・霜取り（デフロスト）制御が電力量を左右し、断熱劣化や扉まわりの隙間は無視できない損失要因です。水産加工の電気代の多くがこの冷凍冷蔵に集中するため、冷凍機の効率と運転制御の改善が単価最適化の最大の主戦場になります（出典: 業界団体資料から整理／目安）。",
  },
  {
    label: "急速凍結・製氷の瞬間ピーク負荷",
    detail:
      "急速凍結機（エアブラスト・ブライン・液体凍結）と製氷機は短時間に強い冷却負荷を生み、稼働タイミングが重なると瞬間電力が契約電力（kW）を押し上げ、デマンド料金（基本料金）の主要因になります。漁期や水揚げの集中で凍結・製氷が同時に立ち上がると最大デマンドが跳ね上がるため、稼働タイミングの分散・夜間シフト・蓄熱や蓄電池による平準化が基本料金削減に直結します。",
  },
  {
    label: "東北電力エリアの燃調感応度",
    detail:
      "東北電力エリアは火力依存度が比較的高く、為替（円安）と燃料価格に強く感応します。冷凍冷蔵を24時間動かす水産加工は使用電力量（kWh）が大きいため、燃調が数円/kWh動くだけで請求額が大きく振れます。2022〜2023年の高騰局面では多くの水産加工事業者がこの感応度の高さを実感しました。固定vs市場連動・燃調上限の有無の選択が経営判断の中心となります（出典: 資源エネ庁統計から整理／目安）。",
  },
  {
    label: "震災後BCP・停電対策のコスト",
    detail:
      "宮城県沿岸の水産加工は東日本大震災で停電による冷凍在庫の品質劣化を経験しており、自家発電機・蓄電池・系統復旧優先度の確保といったBCP投資が経営課題として残ります。BCP対応は直接の電気代削減ではありませんが、停電による在庫毀損リスクの低減という形で実質的なコスト管理に直結します。自家発・蓄電池はピークカットにも転用でき、BCPと省エネを兼ねる設計が現実的です。",
  },
  {
    label: "再エネ賦課金と輸出向けの脱炭素要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）と恒常的な負担です。加えて、輸出向け水産加工では海外取引先からサプライチェーンの脱炭素（再エネ調達・CO2原単位開示）を求められる場面が増えつつあり、電気代単価そのものに加えて再エネ調達コストも経営計画に織り込む必要があります。非化石証書・オンサイトPPA・オフサイトPPAの組合せが現実的な対応手段になります。",
  },
];

const subsidies = [
  {
    name: "宮城県の産業振興・脱炭素関連補助（宮城県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入（水産加工含む）",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の目安",
    note: "県独自の産業振興・脱炭素政策に基づく補助メニュー。水産加工の高効率冷凍機・自然冷媒・断熱改修・LED・BEMS等が対象となり得ます。SII補助との併用可否は事業区分・設備別に要確認。最新公募は宮城県の公式窓口で確認してください。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率冷凍機・自然冷媒設備・インバータ・断熱・LED・コンプレッサー等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）※年度により変動",
    note: "水産加工の冷凍冷蔵更新・急速凍結機更新・自然冷媒化で活用しやすい主力補助です。冷凍冷蔵が電気代の中心の水産加工では投資効果が出やすく、採択実績の積み上げがあります。公募時期と要件は年度で変わるため早期準備が有効です。",
  },
  {
    name: "水産庁・水産加工業向け支援（経営力強化・施設整備）",
    target: "水産加工施設の整備・高度化・省エネ・衛生管理（HACCP対応含む）",
    rate: "事業による（定額または1/2以内等）※公募ごとに要確認",
    note: "水産庁の水産加工業支援は、施設整備・高度化と省エネ・脱炭素が組み合わせられる場合があります。冷凍冷蔵の更新を衛生管理高度化と一体で進める際に検討余地があります。所管: 水産庁。最新の公募内容は水産庁の公式情報で確認してください。",
  },
  {
    name: "需要家主導型再エネ・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "冷凍冷蔵倉庫・水産加工工場の屋根面積を活かしたオンサイトPPA、東北圏のオフサイトPPAで活用余地があります。輸出向けの脱炭素要請対応とBCP（蓄電池）を兼ねる設計が現実的。所管・公募は年度ごとに確認が必要です。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の一定割合の税額控除または特別償却（要件あり）",
    note: "自然冷媒冷凍機・PPA関連設備・燃料転換設備等の取得で活用できる可能性があります。所管: 経産省・国税庁。東北経済産業局に事前相談窓口があり、設備更新と組合せて検討するのが定石です。最新の適用要件は所管省庁で確認してください。",
  },
];

const industryProfile = [
  {
    label: "石巻 — 水産加工・冷凍冷蔵の集積（震災後の設備更新）",
    detail:
      "石巻は宮城県を代表する水産加工・冷凍冷蔵の集積地です。東日本大震災後の復興過程で冷凍冷蔵倉庫や加工施設の再建・設備更新が進み、高効率冷凍機や断熱強化を導入した事業所がある一方、旧式設備を引き継いだ施設も残ります。冷凍冷蔵の通年ベース負荷が厚く、夏季の製氷ピークと相まって最大デマンドが立ちやすいエリアです（出典: 宮城県・水産庁の統計から整理／目安）。",
  },
  {
    label: "気仙沼 — カツオ・サンマ・サメの水揚げと冷凍・加工",
    detail:
      "気仙沼はカツオ・サンマ・サメ（フカヒレ原料）等の水揚げ港を背景に、冷凍・加工・冷蔵倉庫が集積します。漁期に冷凍・製氷負荷が集中する季節変動が大きく、水揚げ期の最大デマンドと閑散期の差が契約電力（kW）の設計に影響します。漁期ピークを見越したデマンド管理と契約の最適化が論点になります。",
  },
  {
    label: "塩釜 — マグロ等の水揚げ・水産卸・冷蔵倉庫",
    detail:
      "塩釜はマグロ等の水揚げ・水産卸の拠点で、冷蔵倉庫と仲卸・加工が集まります。生鮮・冷蔵の回転が速く、鮮度保持のための冷蔵・製氷負荷が通年で発生します。卸売市場機能と一体の電力需要があり、市場の稼働時間帯に合わせたピークが立ちやすい構造です。",
  },
  {
    label: "女川・その他沿岸部 — 復興後の水産関連集積",
    detail:
      "女川をはじめとする沿岸部にも、震災後の復興で再建された水産加工・冷凍冷蔵施設が立地します。地域ごとに主力魚種や業態が異なり、冷凍・冷蔵・製氷・加工の組合せも多様です。沿岸部共通の論点として、停電時の在庫毀損リスクに備えたBCPの重要度が高い点が挙げられます。",
  },
  {
    label: "内陸・周辺の食品加工との連動",
    detail:
      "宮城県内では沿岸の水産加工に加え、内陸部の食品加工や物流拠点とも需要が連動します。水産原料を用いた練り製品・冷凍食品・惣菜の加工が広がり、冷凍冷蔵・製氷のインフラが地域全体に分散しています。水産加工単独だけでなく、食品加工全体としての電力プロファイルで捉えると見直しの優先順位が見えやすくなります。",
  },
];

const switchingReality = [
  {
    label: "東北エリアの新電力浸透度",
    detail:
      "東北電力エリアの新電力比率は首都圏・関西よりやや低めの水準とされます（出典: 資源エネ庁 電力ガス取引監視等委員会から整理／目安）。ただし石巻・気仙沼・塩釜の高圧・特別高圧の大型冷凍冷蔵案件では競争入札が広がりつつあり、使用電力量の大きい需要家ほど切替メリットが出やすい構造です。中小水産加工は東北電力継続が依然多数派ですが、見直し余地は小さくありません。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の高騰局面で、市場連動を採用していた水産加工事業者の多くが固定回帰を選択しました。冷凍冷蔵の大量電力消費は高騰時の請求インパクトが大きいため、固定2〜5年契約＋燃調上限ありの組合せが選好される傾向にあります。一方で深夜帯の安価な時間帯を活かせる事業者では市場連動の利点も残るため、最終判断は需要構造とリスク許容度によります。",
  },
  {
    label: "東北電力継続のメリット・デメリット",
    detail:
      "メリット: 震災を経験した沿岸部での災害時復旧体制・大口需要家向けエネルギーマネジメント支援・地域に根ざしたサポート。デメリット: 新電力比で単価がやや高めになる局面があること、燃料費調整額の上限の扱い。冷凍冷蔵で使用電力量の大きい需要家では単価差が数百万〜数千万円規模になる場合があります。比較検討のうえ判断すべき論点で、本ページは特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（宮城×水産加工固有）",
    detail:
      "①冷凍冷蔵・水産加工での供給実績、②非化石証書／再エネトラッキング付メニュー（輸出向け脱炭素対応）、③固定（2〜5年）の単価安定性、④燃調上限・連動条件、⑤BCP対応（停電復旧優先度・自家発連系条件）の5点が重要です。水産加工は停電が在庫毀損に直結するため、価格だけでなくBCP面の体制確認が他業種以上に重みを持ちます。",
  },
  {
    label: "PPA・オフサイト調達の広がり",
    detail:
      "東北は風力・太陽光の導入が進む地域で、屋根オンサイトPPA（冷凍冷蔵倉庫・水産加工工場の屋根活用）／オフサイトPPA（東北圏の再エネ案件）／非化石証書の組合せが現実的な打ち手になりつつあります。RE100相当の調達コストは従来単価＋一定のプレミアムで推移しますが、輸出向けの取引維持・拡大の観点で導入を検討する事業者が出始めています。",
  },
];

const energySaving = [
  {
    label: "冷凍機の自然冷媒化＋インバータ制御",
    detail:
      "老朽化したフロン系冷凍機を自然冷媒（アンモニア・CO2）＋インバータ機に更新することで、電力消費▲15〜30%が見込める場合があります（条件により変動）。凝縮温度の最適制御や負荷追従運転を組み合わせると効率がさらに向上し、フロン規制対応も前進します。SII補助＋県補助の併用で投資回収2〜4年が目安。冷凍冷蔵が電気代の中心の水産加工では効果が大きい主力施策です。数値は目安です。",
  },
  {
    label: "急速凍結・製氷の夜間シフト＋蓄熱・蓄電池",
    detail:
      "急速凍結・製氷を電力需要の低い夜間帯にシフトし、蓄熱（氷蓄熱）・蓄電池を併用することで、日中の最大デマンド▲10〜15%を狙えます。契約電力（kW）の引き下げは基本料金の直接削減につながり、漁期ピーク時のデマンド超過リスクも低減します。蓄電池はBCP（停電対策）にも転用でき、省エネと事業継続を兼ねた投資になります。投資回収は条件次第ですが補助金活用で短縮可能です。",
  },
  {
    label: "冷凍冷蔵倉庫の断熱・扉・デフロスト改善",
    detail:
      "冷凍冷蔵倉庫の断熱強化、高速シャッター・断熱扉への更新、エアカーテン設置、デフロスト（霜取り）制御の最適化により、庫内への熱侵入と無駄な霜取り運転を抑え、電力▲5〜15%が見込めます。投資額が比較的小さく回収が速い（1〜3年目安）ため、中小水産加工でも着手しやすい施策です。扉まわりの隙間や断熱劣化は損失が積み上がるため定期点検が有効です。",
  },
  {
    label: "屋根オンサイトPPA＋自家消費",
    detail:
      "冷凍冷蔵倉庫・水産加工工場は屋根面積を確保しやすく、屋根太陽光の自家消費PPAが現実的な打ち手になります。初期投資ゼロでPPA事業者が設備を所有し、自社は発電分を購入する形で、電気代単価の引き下げと再エネ調達を両立できます。冷凍冷蔵は日中のベース負荷が厚いため自家消費率が高くなりやすく、太陽光との相性が良い業態です。",
  },
  {
    label: "BEMS・デマンド管理＋自家発BCP連携",
    detail:
      "BEMSで冷凍・製氷・加工の需要を見える化し、デマンドコントローラーや需給予測で最大デマンドを管理することで、契約電力の適正化と基本料金削減が進みます。震災を経験した宮城の水産加工では、自家発電機・蓄電池とBEMSを連携させ、平常時はピークカット・非常時はBCPに使う二重活用が合理的です。停電による在庫毀損を防ぐ体制づくりがコスト管理の一部になります。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冷凍冷蔵倉庫・急速凍結・製氷の工程別kW・年間使用kWhを把握しているか",
  "急速凍結・製氷の稼働タイミングを夜間シフト・分散できる余地はあるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東北電力の現行単価で再見積を取得し、新電力と比較したか",
  "全国系・地域系・再エネ特化型の新電力複数社から相見積を取得したか",
  "輸出向け取引先からの脱炭素・再エネ調達要請に対応する計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "オフサイトPPA・非化石証書の調達可能性を事業者に照会したか",
  "宮城県・SII・水産庁・経産局補助の併用可否を設備別に整理したか",
  "冷凍機の自然冷媒化・インバータ化など更新投資の電力削減効果を試算したか",
  "震災経験を踏まえた停電BCP（復旧優先度・自家発・蓄電池）の体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "宮城県の水産加工業は東北電力エリア固有の単価リスクが大きいですか？",
    answer:
      "東北電力エリアは火力依存度が比較的高く、為替（円安）と燃料価格に対する燃料費調整額の感応度が高い構造です。冷凍冷蔵を24時間動かす水産加工は使用電力量（kWh）が大きいため、燃調が数円/kWh動くだけで請求額が大きく振れます。2022〜2023年の高騰局面ではこの感応度の高さを多くの事業者が実感しました。固定単価＋燃調上限ありのプラン、または非化石証書付きメニューでヘッジするのが基本戦略の一つです。なお本ページは特定の電力会社・契約形態を推奨するものではありません（出典: 東北電力単価実績・資源エネ庁統計から整理）。",
  },
  {
    question: "水産加工で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的に冷凍冷蔵倉庫の24時間ベース負荷と、急速凍結・製氷の冷却負荷が電力消費の中心です。冷凍冷蔵倉庫は−25℃前後を年間連続維持するため恒常的に電力を消費し、急速凍結機・製氷機は瞬間負荷が大きく契約電力（kW）を押し上げます。次いで解凍・加工・包装ラインの電力が続きます。冷凍機の効率（自然冷媒・インバータ化）と運転制御、断熱・デフロスト改善が単価最適化の主戦場です（出典: 業界団体資料・水産庁資料から整理／目安）。",
  },
  {
    question: "震災後のBCP対策は電気代の見直しとどう関係しますか？",
    answer:
      "宮城県沿岸の水産加工は東日本大震災で停電による冷凍在庫の品質劣化を経験しており、自家発電機・蓄電池・系統復旧優先度の確保が経営課題として残ります。BCP投資は直接の電気代削減ではありませんが、自家発・蓄電池は平常時のピークカット（基本料金削減）にも転用できるため、省エネとBCPを兼ねた設計が合理的です。停電による在庫毀損リスクの低減という形で実質的なコスト管理に直結します。物理的な復旧作業は東北電力ネットワークが担うため、契約小売によらず復旧時間は同じですが、停電通知や自家発切替支援などソフト面は小売ごとに異なります。本ページは特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "石巻・気仙沼の冷凍冷蔵倉庫で屋根オンサイトPPAは現実的ですか？",
    answer:
      "現実的な選択肢になり得ます。冷凍冷蔵倉庫・水産加工工場は屋根面積を確保しやすく、屋根太陽光の自家消費PPAが導入可能なケースが多くあります。初期投資ゼロでPPA事業者が設備を所有し、自社は発電分を購入する形が標準です。冷凍冷蔵は日中のベース負荷が厚く自家消費率が高くなりやすいため太陽光との相性が良く、電気代単価の引き下げと再エネ調達を両立できます。輸出向けの脱炭素要請への対応手段としても有効です。導入可否は屋根構造・日射条件・需要プロファイルで変わるため個別試算が必要です。",
  },
  {
    question: "気仙沼や塩釜の漁期による電力需要変動はどう契約に影響しますか？",
    answer:
      "気仙沼はカツオ・サンマ・サメの水揚げ期、塩釜はマグロ水揚げと冷蔵倉庫の回転に合わせて冷凍・製氷負荷が変動します。漁期に最大デマンドが集中し、閑散期との差が大きいほど契約電力（kW）と実需要の乖離が生じやすくなります。漁期ピークを見越したデマンド管理（夜間シフト・蓄熱・蓄電池）と、過剰な契約電力の適正化が基本料金削減の鍵です。直近12ヶ月の最大デマンド実績に対して契約電力が過剰でないかの確認が出発点になります。本ページは特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "中小の水産加工でも新電力切替や設備更新の効果は出ますか？",
    answer:
      "出やすい業態です。水産加工は冷凍冷蔵・製氷で使用電力量が大きいため、新電力経由で2〜3円/kWh安くなれば見直し効果が出やすいレンジにあります。加えて、老朽冷凍機の高効率・自然冷媒化、断熱・扉・デフロスト改善、LED化などはSII補助＋県補助の併用で投資回収2〜3年程度を狙える施策が揃っています。中小では東北電力継続が多数派ですが、相見積取得と設備更新の組合せで削減余地は小さくありません。数値は目安であり、実際の効果は設備状態と契約条件で変動します。",
  },
  {
    question: "宮城県や水産庁の補助金は水産加工の省エネ設備に使えますか？",
    answer:
      "使える可能性があります。宮城県の産業振興・脱炭素補助は中小・中堅製造業の省エネ・脱炭素設備を対象とし、高効率冷凍機・自然冷媒・断熱・LED・BEMS等が含まれ得ます。水産庁の水産加工業支援では、施設整備・高度化と省エネ・衛生管理（HACCP対応）を一体で進められる場合があります。国のSII省エネ補助も冷凍冷蔵更新で活用しやすい主力です。併用可否は事業区分・設備別に確認が必要で、最新の公募内容は宮城県・水産庁・SIIの公式窓口で確認してください（2026年度時点の整理）。",
  },
  {
    question: "輸出向け水産加工で再エネ調達はどこまで必要ですか？",
    answer:
      "取引先の要請次第ですが、対応の必要性は高まりつつあります。輸出向け水産加工では海外取引先からサプライチェーンの脱炭素（再エネ調達・CO2原単位開示）を求められる場面が増えており、非化石証書付きメニュー・オンサイトPPA・オフサイトPPAの組合せで対応する事業者が出始めています。再エネ賦課金（2026年度4.18円/kWh・確定）の負担に加え、再エネ調達コストも経営計画に織り込む必要があります。まずは現行契約のメニュー（非化石証書の有無）の確認と、屋根PPAの試算から着手するのが現実的です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東北電力 法人向け料金プラン", url: "https://www.tohoku-epco.co.jp/" },
  { name: "東北電力ネットワーク 供給・系統情報", url: "https://nw.tohoku-epco.co.jp/" },
  { name: "水産庁（水産加工業統計・支援）", url: "https://www.jfa.maff.go.jp/" },
  { name: "宮城県 産業政策・企業立地", url: "https://www.pref.miyagi.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function MiyagiSeafoodProcessingElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/miyagi-seafood-processing-electricity-cost"
        datePublished="2026-06-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "宮城県の水産加工業の電気料金", url: "https://simulator.eic-jp.org/miyagi-seafood-processing-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">宮城県の水産加工業の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            宮城県の水産加工業の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            宮城県は三陸沖の好漁場を背後に、石巻・気仙沼・塩釜・女川を核とする全国有数の水産加工集積地です。本ページでは「宮城県 × 水産加工業」というクロス領域に絞り、東北電力エリア固有の単価事情と燃調感応度、急速凍結・冷凍冷蔵倉庫・製氷の24時間稼働の電力プロファイル、震災後のBCP、特別高圧／高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-05" updatedAt="2026-06-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>宮城県の水産加工集積（石巻・気仙沼・塩釜・女川）の電力プロファイル</li>
              <li>大規模冷凍冷蔵／中規模／中小水産加工のBefore/After削減事例3件</li>
              <li>東北電力エリアの単価水準と燃調感応度（火力依存・風力導入）</li>
              <li>震災後のBCP・停電対策と省エネ・自家発の二重活用</li>
              <li>宮城×水産加工に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「宮城 × 水産加工」のクロス領域に特化したガイドです。宮城県全体の文脈は{" "}
            <Link href="/miyagi-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              宮城県の法人電気料金ガイド
            </Link>
            、業種一般としての水産加工業全体は{" "}
            <Link href="/seafood-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              水産加工業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城県の水産加工集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県は石巻・気仙沼・塩釜・女川を中心に、急速凍結・冷凍冷蔵倉庫・製氷・加工が産地全体に分散する水産加工集積地です。東日本大震災後の復興過程で設備更新が進んだ一方、東北電力エリア固有の火力依存・燃調感応度の高さが冷凍冷蔵の電力負荷と相まって経営に影響します。
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
              宮城県全体の文脈は{" "}
              <Link href="/miyagi-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                宮城県の法人電気料金ガイド
              </Link>
              、東北電力エリア全体は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東北電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/seafood-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                水産加工業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東北電力エリアの主要電力会社・新電力（宮城×水産加工での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県内の水産加工工場は、東北電力（小売）・東北電力ネットワーク（送配電）を軸に、全国系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給。大型冷凍冷蔵では競争入札が広がりつつあり、中小水産加工では切替余地が依然大きい状態です。本ページは特定の電力会社・契約形態を推奨するものではありません。
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
              東北電力エリアの料金水準と水産加工への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度、再エネ賦課金の累積負担を、水産加工の代表的な契約タイプ別に整理します。東北電力エリア固有の火力・燃調感応度を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は業界団体・経産省／エネ庁統計・自治体統計から整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 大規模冷凍冷蔵／中規模／中小（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県内の代表的な3規模で、契約見直し＋設備対策＋自家消費の組合せによる削減効果をBefore/After方式で提示します。いずれも業界統計・水産庁資料等から再構成した代表シナリオで、数値は目安レンジです。本ページは特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/seafood-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">水産加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍冷蔵倉庫の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              宮城×水産加工固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城の水産加工の電気代上昇は、冷凍冷蔵の24時間ベース負荷・急速凍結／製氷の瞬間ピーク・東北エリアの燃調感応度・震災後BCPコスト・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 宮城県・国・水産庁・東北経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城県の産業振興・脱炭素補助、国のSII省エネ補助、水産庁の水産加工業支援、需要家主導型PPA補助、GX投資促進税制の組合せで、冷凍冷蔵・水産加工の更新投資の回収を1〜2年短縮するのが定石です。本ページは特定の電力会社・契約形態を推奨するものではありません。
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
              主要産地の電力プロファイル（石巻／気仙沼／塩釜／女川）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城の水産加工は、石巻の冷凍冷蔵集積を中心に、気仙沼のカツオ・サンマ・サメの水揚げと冷凍・加工、塩釜のマグロ水揚げ・水産卸・冷蔵倉庫、女川等の沿岸部、内陸の食品加工連動という構造です。産地ごとの主力魚種と漁期がデマンドの立ち方を左右します。
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
              大型冷凍冷蔵では競争入札が広がりつつあり、中小水産加工では切替余地大、輸出向けの脱炭素要請と連動した再エネ調達（PPA・非化石証書）の広がりが共通トレンド。市場連動からの固定回帰も顕著です。本ページは特定の電力会社・契約形態を推奨するものではありません。
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
              宮城×水産加工の省エネ・自家消費事例（冷凍機／凍結製氷／断熱／屋根PPA／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産加工の省エネは、冷凍機の自然冷媒化＋インバータ、急速凍結・製氷の夜間シフト＋蓄熱・蓄電池、冷凍冷蔵倉庫の断熱・扉・デフロスト改善、屋根オンサイトPPA、BEMS＋自家発BCP連携の5軸が主力。大規模・中規模・中小いずれでも投資回収1〜4年で実現可能なメニューが揃っています。
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
              宮城×水産加工 契約見直しチェックリスト（12項目）
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
              シミュレーターで宮城×水産加工の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宮城の水産加工は、東北エリアの燃調感応度・冷凍冷蔵の24時間ベース負荷・漁期ピーク・震災後BCPなど複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オンサイトPPA・省エネ投資のメリットを定量化できます。本ページは特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季製氷ピーク月・漁期集中月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した17〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
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
              { href: "/miyagi-business-electricity-cost", title: "宮城県の法人電気料金ガイド（地域一般）", description: "宮城県全体の電力事情・震災復興・補助金。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北エリアの料金体系・燃調感応度・風力導入。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/seafood-processing-electricity-cost-review", title: "水産加工業の電気料金見直し（業種一般）", description: "急速凍結・冷凍冷蔵・製氷の業種別最適化。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍冷蔵倉庫の電気料金見直し（業種一般）", description: "24h冷凍冷蔵のデマンド最適化。" },
              { href: "/hokkaido-food-processing-electricity-cost", title: "北海道の食品加工業の電気料金（クロス）", description: "北海道電力エリアの水産・乳製品クロス。" },
              { href: "/niigata-food-electricity-cost", title: "新潟県の食品の電気料金（クロス）", description: "東北電力エリアの米菓・清酒クロス。" },
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
            heading="宮城の水産加工の電気代リスクを自社条件で試算する"
            description="石巻・気仙沼・塩釜の水産加工固有の条件（東北電力エリア・冷凍冷蔵24時間稼働・急速凍結／製氷・震災後BCP）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="宮城の水産加工の電力契約見直し、専門家に相談しませんか？"
            description="大規模冷凍冷蔵・中規模・中小いずれも冷凍冷蔵・急速凍結・製氷の規模感と震災後BCPが絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で宮城県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
