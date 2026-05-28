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
  "新潟県の食品（米菓・清酒）の電気料金完全ガイド｜米菓焼成乾燥／清酒低温醸造／包装米飯と東北電力契約";
const pageDescription =
  "新潟県の食品（米菓・清酒・米加工）に特化した法人電気代ガイド。亀田・新潟市の米菓、県内各地の清酒蔵、包装米飯・精米の集積、米菓焼成乾燥・清酒低温醸造・冷蔵の電力プロファイル、東北電力エリアの単価事情、契約最適化を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新潟県 食品 電気料金",
    "米菓 せんべい 電気代",
    "清酒 酒蔵 低温醸造 電力",
    "東北電力 高圧 食品工場",
    "包装米飯 精米 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/niigata-food-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/niigata-food-electricity-cost",
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
    label: "新潟県の食品集積 — 米どころの加工産業",
    detail:
      "新潟県は米の生産量全国トップクラスの米どころで、米を原料とする食品加工が県の基幹産業のひとつです。米菓（せんべい・あられ）は全国シェアの過半を占め、亀田製菓・三幸製菓・栗山米菓（ばかうけ）など大手・中堅が新潟市・新発田・長岡等に集積。清酒は県内に約90の酒蔵があり全国有数の酒どころ。さらに包装米飯（サトウ食品等）・精米・餅・米粉等の米加工食品工場が県内各地に立地します（出典: 新潟県工業統計・経産省工業統計・農水省統計）。",
  },
  {
    label: "米菓の電力プロファイル — 焙焼・乾燥が中心",
    detail:
      "米菓製造は、精米・浸漬・蒸練・成形・乾燥・焙焼（焼成）・味付け・包装の工程で、電力消費の中心は乾燥工程（熱風乾燥機）と焙焼（電気・ガス焙焼機）、空調・包装です。乾燥・焙焼は連続的な熱負荷で、年間使用量に占める比率が高い。大手米菓工場は24時間稼働の連続生産で、特別高圧・高圧の大口需要家です。",
  },
  {
    label: "清酒の電力プロファイル — 低温醸造・冷蔵貯蔵が中心",
    detail:
      "清酒製造は、精米・洗米・蒸米・製麹・仕込・発酵（醪）・搾り・火入れ・貯蔵の工程で、電力消費の中心は発酵・貯蔵の温度管理（冷却）です。特に吟醸・大吟醸の低温発酵（5〜15℃の精密管理）、生酒・生貯蔵酒の低温貯蔵（マイナス5〜5℃）には冷却電力が不可欠。仕込み期（冬季）に電力需要がピークとなる季節性が特徴です。",
  },
  {
    label: "包装米飯・精米・米粉の電力プロファイル",
    detail:
      "包装米飯（パックご飯）は炊飯・無菌包装・冷却・殺菌（レトルト）が中心で、近年の需要拡大で電力消費も増加。精米は精米機・色彩選別機・包装、米粉は製粉・乾燥が主要工程。いずれも電力多消費で、新潟の米加工食品全体が県内電力需要の重要構成要素となっています。",
  },
  {
    label: "東北電力エリアと新潟食品の相互依存",
    detail:
      "新潟県は東北電力エリア（東北電力は東北6県＋新潟県を供給区域とする）。東北電力エリアの電源構成は、女川・東通の原子力、火力（石炭・LNG）、水力（新潟・東北は水力資源が豊富）で構成。新潟県内には信濃川・阿賀野川水系の水力発電も多く、再エネ比率が比較的高い特徴。食品加工の大口需要家は東北電力エリアの需給の一翼を担います（出典: 東北電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（よりそうでんき）",
    role: "一般小売事業者（旧一電）",
    detail:
      "新潟県内食品工場の最大シェア。『高圧電力AS／BS』『業務用季節別時間帯別電力』が主軸メニュー。水力資源が豊富なエリア特性で、燃調感応度は火力依存の高い北海道・中部より相対的に低め。米菓・清酒・包装米飯の大口需要家との長期的な契約関係が継続しています。",
  },
  {
    name: "東北電力グループ・地域新電力",
    role: "地域系新電力",
    detail:
      "東北電力グループの法人向け提案や、新潟県内の地域新電力も存在。県内の水力・太陽光・バイオマス等の再エネを活用するメニューを訴求する事業者もあり、食品工場のCN対応の選択肢となりつつあります。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・サミットエナジー・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "新潟県内の米菓・清酒・包装米飯工場で競争入札の対抗馬。固定単価3〜5年契約＋燃調連動メニューが標準。米菓大手のCN対応・SDGs対応を受け、非化石証書付き・再エネトラッキング付きメニューの引合いが増加しています。",
  },
  {
    name: "再エネ特化型・水力/バイオマス活用新電力",
    role: "再エネ特化型",
    detail:
      "新潟県は信濃川・阿賀野川水系の水力資源が豊富で、再エネ特化型新電力の選択肢も比較的多い。県内の小水力・太陽光・バイオマスを活用した地産地消メニューがあり、米どころのSDGs・CN対応として食品工場での採用が進みつつあります。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年JEPX高騰局面では東北エリアでも一部新電力が撤退・新規受付停止。現在は供給枠が徐々に回復しており、食品工場でも10社以上から相見積を取れる環境が戻りつつあります。大口案件では供給可能枠の確認が重要です。",
  },
  {
    name: "JEPX東北エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX東北エリアスポット価格は東京と概ね連動しつつ、水力・風力等の再エネ出力により独自の値動きを示す局面があります。米菓は連続生産、清酒は仕込み期（冬季）にピークがあり、固定契約＋燃調上限ありが主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "東北電力エリアの高圧 — 食品工場の単価水準",
    detail:
      "中堅食品工場（米菓・清酒・包装米飯）の高圧電力（300kW〜2,000kW）の電力量料金は標準メニューで概ね17〜21円/kWh+調整項目。燃料費調整額（2024〜2025年で+2.0〜+3.5円/kWh目安・水力比率が高く火力依存エリアより小幅）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安です。",
  },
  {
    label: "特別高圧 — 大手米菓・大型食品工場の単価",
    detail:
      "大手米菓工場・大型包装米飯工場（特別高圧2,000kW超）の電力量料金は概ね16〜19円/kWh+調整項目。実質単価は22〜27円/kWhレンジ。24時間連続生産で年間使用量が大きく、乾燥・焙焼の熱負荷削減と契約見直しの組合せで経営インパクトが大きいレンジです。",
  },
  {
    label: "東北エリアの燃調感応度（相対的に低め）",
    detail:
      "東北電力エリアは水力資源が豊富（信濃川・阿賀野川・最上川水系等）で、火力依存度が北海道・中部より低め。2022〜2023年の燃料高騰時の燃調変動幅も相対的に小幅で推移しました。米菓・清酒・包装米飯の単価変動リスクは相対的に低めですが、絶対額の負担増は他エリア同様です（出典: 東北電力供給計画／エネ庁エネルギー白書）。",
  },
  {
    label: "清酒の季節性と契約電力",
    detail:
      "清酒は仕込み期（10〜3月の寒造り）に発酵・冷却の電力需要がピークとなり、夏季は低稼働の蔵もあります。季節変動が大きいため、仕込み期の最大デマンドに基づく契約電力設定と、閑散期の運転最適化が単価最適化の重要ポイント。一方、生酒・生貯蔵の通年低温貯蔵は年間を通じた冷却負荷となります。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大手米菓工場（特別高圧 3,500kW、年間 2,400万kWh）",
    before:
      "Before: 新潟市・新発田エリアの大手米菓工場A（せんべい・あられの24時間連続生産、複数ライン）。乾燥機・焙焼機・空調・包装が稼働。東北電力の特別高圧契約＋燃調連動。2023年度は燃調影響で前年比+15%の電気代増加。年間電気代 約6億円。",
    after:
      "After: 全国系新電力に固定3年・燃調上限あり契約で切替／乾燥機の高効率化＋廃熱回収（SII補助1/2活用、投資2.5億円）／焙焼工程の省エネ＋排熱利用／工場LED化＋空調更新／屋根太陽光2MW自家消費＋蓄電池／BEMSで連続生産ライン最適化。",
    result:
      "Result: 年間電気代 約6億円 → 約4.8億円（▲約20%、▲1.2億円・目安）／契約電力 3,500→3,150kW／投資回収 補助金後 3〜4年（目安）／米どころのSDGs・CN訴求でブランド価値向上。",
  },
  {
    title: "業種2: 清酒蔵（高圧 600kW、年間 250万kWh）",
    before:
      "Before: 県内の中堅清酒蔵B（吟醸・大吟醸中心、低温発酵・低温貯蔵、生酒も製造）。仕込み期（冬季）に発酵冷却・低温貯蔵がピーク。東北電力の業務用高圧電力＋燃調連動。年間電気代 約7,000万円。",
    after:
      "After: 東北系新電力に固定2年で切替／発酵タンク冷却の高効率ヒートポンプ更新／低温貯蔵庫の高効率冷凍機更新＋断熱改修（県補助＋SII併用、投資3,000万円）／仕込み期連動の契約電力最適化／全館LED化／井戸水熱利用の検討。",
    result:
      "Result: 年間電気代 約7,000万円 → 約5,700万円（▲約19%、▲1,300万円・目安）／契約電力 600→540kW／投資回収 補助金後 2.5年前後（目安）／酒質安定化（温度管理精度向上）も実現。",
  },
  {
    title: "業種3: 包装米飯・精米工場（高圧 1,200kW、年間 900万kWh）",
    before:
      "Before: 県内の包装米飯（パックご飯）・精米工場C。炊飯・無菌包装・冷却・殺菌（レトルト）・精米が稼働、EC・需要拡大で増産基調。東北電力の業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+16%の電気代増加。年間電気代 約2.2億円。",
    after:
      "After: 全国系新電力に固定2年・燃調上限ありで切替／炊飯・殺菌の蒸気/熱の効率化＋廃熱回収／冷却の高効率化／精米機・色彩選別機の省エネ／全館LED化（県補助＋SII併用、投資4,500万円）／屋根太陽光700kW自家消費。",
    result:
      "Result: 年間電気代 約2.2億円 → 約1.78億円（▲約19%、▲4,200万円・目安）／契約電力 1,200→1,080kW／投資回収 補助金後 2.5年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "米菓の乾燥・焙焼の連続熱負荷",
    detail:
      "米菓製造の乾燥工程（熱風乾燥機）・焙焼工程（焼成機）は連続的な熱負荷で、24時間連続生産の大手工場では電力消費の主要部分を占めます。乾燥・焙焼の高効率化・廃熱回収が単価最適化の主戦場です。",
  },
  {
    label: "清酒の低温醸造・貯蔵の冷却負荷",
    detail:
      "吟醸・大吟醸の低温発酵（5〜15℃精密管理）、生酒・生貯蔵酒の低温貯蔵（マイナス5〜5℃）には冷却電力が不可欠。仕込み期（冬季）のピークと、通年の低温貯蔵負荷が清酒蔵の電力コストの中心。酒質に直結するため、省エネと品質管理の両立が課題です。",
  },
  {
    label: "東北エリアの燃調感応度（相対的に低め）",
    detail:
      "東北電力エリアは水力資源が豊富で火力依存度が北海道・中部より低めのため、燃調変動幅も相対的に小幅。ただし再エネ賦課金は全国一律で上昇しており、絶対額の負担増は他エリア同様。燃料高騰局面での単価上昇リスクは相対的に小さい構造です。",
  },
  {
    label: "清酒の季節変動（仕込み期ピーク）",
    detail:
      "清酒は仕込み期（10〜3月の寒造り）に発酵・冷却の電力需要がピークとなり、夏季は低稼働の蔵もあります。季節変動が大きいため、仕込み期の最大デマンドに基づく契約電力と閑散期の運転最適化が基本料金管理の重要要素です。",
  },
  {
    label: "再エネ賦課金と食品大手のCN要請",
    detail:
      "再エネ賦課金が年々上昇するなか、米菓大手・食品大手のSDGs・CN対応で、サプライチェーン全体の再エネ調達・CO2削減が進展。中堅・中小食品工場でも、屋根太陽光・県内水力等の再エネ調達と省エネ投資が経営計画に織り込まれつつあります。",
  },
];

const subsidies = [
  {
    name: "新潟県 中小企業省エネ・脱炭素設備導入補助",
    target: "県内中小・中堅食品工場の省エネ・脱炭素設備（乾燥機・冷凍機・LED・断熱等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の中小企業支援補助。米菓・清酒・包装米飯工場の更新で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "市町村独自補助（新潟市・長岡・新発田 等）",
    target: "市町村内の食品事業者の省エネ・再エネ設備",
    rate: "対象経費の1/4〜1/3、上限は市町村別",
    note: "米菓・清酒集積地域の市町村独自補助。県補助・SII補助との重層活用が可能なケースあり。最新公募状況は各市町村・商工会議所で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率乾燥機・冷凍機・ヒートポンプ・LED・ボイラ等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "米菓の乾燥・焙焼省エネ、清酒の発酵冷却・貯蔵高効率化、包装米飯の蒸気効率化で採択実績多数。廃熱回収・高効率化で活用しやすい王道補助。",
  },
  {
    name: "農林水産省 食品産業向け省エネ・脱炭素補助",
    target: "食品製造業の省エネ設備・脱炭素化・HACCP対応",
    rate: "対象経費の1/2、上限は事業区分による",
    note: "農水省が運用する食品産業向け支援補助。米加工・清酒の省エネ化・衛生管理高度化と並行して活用可能。最新公募は農水省で確認。",
  },
  {
    name: "需要家主導型再エネ・PPA・小水力活用補助",
    target: "太陽光PPA・小水力・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "新潟は水力資源が豊富で、小水力・太陽光PPAの活用余地が大きい。食品工場の屋根太陽光PPA・県内水力の地産地消で活用可能。",
  },
];

const industryProfile = [
  {
    label: "新潟市・亀田 — 米菓の一大集積",
    detail:
      "新潟市江南区亀田地区は『米菓のまち』として亀田製菓・三幸製菓等の本社・主力工場が集積。せんべい・あられの全国シェアの過半を占める米菓産業の中核で、24時間連続生産の特別高圧・高圧需要家が立地します。",
  },
  {
    label: "新発田・長岡・県内各地 — 米菓・包装米飯",
    detail:
      "新発田市（栗山米菓ばかうけ等）、長岡市、その他県内各地に米菓・包装米飯（サトウ食品等）・餅・米粉の工場が立地。米どころの加工産業として電力多消費の食品工場が広く分布します。",
  },
  {
    label: "県内全域 — 清酒蔵（約90蔵）",
    detail:
      "新潟県は全国有数の酒どころで県内に約90の酒蔵が立地。八海醸造（八海山）、朝日酒造（久保田）、〆張鶴、越乃寒梅等の有名銘柄を擁する。吟醸・大吟醸の低温醸造・貯蔵で冷却電力が中心、仕込み期（冬季）にピークの季節性を持ちます。",
  },
  {
    label: "上越・中越・下越の食品工場",
    detail:
      "上越（高田・直江津）、中越（長岡・三条）、下越（新潟・新発田・村上）の各地域に、米加工以外にも水産加工（佐渡・村上）、乳製品、調味料、惣菜等の食品工場が分布。地域の農水産物と直結した加工業が県内に広がります。",
  },
  {
    label: "東北電力・系統・水力資源",
    detail:
      "東北電力の火力・原子力に加え、新潟県は信濃川・阿賀野川水系の水力発電が豊富で再エネ比率が比較的高い。県内には東北電力・JR東日本・電源開発等の水力発電所が多数立地し、食品工場の再エネ地産地消のポテンシャルが大きいエリアです。",
  },
];

const switchingReality = [
  {
    label: "新潟の食品工場の新電力浸透度",
    detail:
      "東北電力エリアの新電力比率は全国平均比やや低め。大手米菓・大型食品工場では競争入札による新電力選定が進む一方、中堅・中小工場・清酒蔵は東北電力継続が多数派。再エネ特化型・地域新電力の選択肢も比較的多く、切替余地は拡大しています。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で食品工場の多くが市場連動から固定回帰。米菓の連続生産・清酒の季節ピークいずれも高騰時の影響が大きいため、固定3〜5年＋燃調上限ありが主流。市場連動は再エネ自家消費等のヘッジ手段併用が前提です。",
  },
  {
    label: "東北電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・水力比率による燃調感応度の相対的な低さ・地域に根ざした保守体制・災害時復旧体制（中越地震・豪雪の教訓）。デメリット: 新電力比1〜2円/kWh単価が高め、長期固定での競争余地は新電力に分がある場面も。",
  },
  {
    label: "新電力選定のポイント（新潟×食品固有）",
    detail:
      "①高圧／特別高圧の食品工場供給実績、②燃調上限・連動条件、③再エネ調達枠（県内水力・太陽光・CN対応）、④清酒の季節変動対応、⑤BCP対応（豪雪・中越地震想定）の5点が重要です。",
  },
  {
    label: "再エネ地産地消・水力活用の進展",
    detail:
      "新潟は水力資源が豊富で、県内水力・小水力・太陽光を活用した再エネ地産地消のポテンシャルが大きい。米どころのSDGs・CN対応として、食品工場の屋根太陽光・県内再エネ調達が進展しつつあります。",
  },
];

const energySaving = [
  {
    label: "米菓乾燥機・焙焼機の高効率化＋廃熱回収",
    detail:
      "熱風乾燥機・焙焼機の高効率化＋排熱回収（乾燥排熱の予熱利用）で熱関連電力▲15〜25%。ヒートポンプ乾燥の導入も有効。SII補助＋農水省補助との組合せで投資回収 3〜4年。米菓の最大の省エネ余地です。",
  },
  {
    label: "清酒の発酵冷却・低温貯蔵の高効率化",
    detail:
      "発酵タンク冷却の高効率ヒートポンプ化、低温貯蔵庫の高効率冷凍機更新＋断熱改修で冷却電力▲20〜30%。井戸水熱・外気冷熱（冬季）の活用も新潟の気候に適合。酒質安定化（温度管理精度向上）も同時に実現でき、SII補助＋県補助で投資回収 2.5〜3.5年。",
  },
  {
    label: "包装米飯の蒸気・殺菌効率化＋廃熱回収",
    detail:
      "炊飯・蒸気・殺菌（レトルト）工程の蒸気効率化＋廃熱回収、冷却の高効率化で電力・燃料▲15〜25%。需要拡大する包装米飯では増産時の省エネ設計が重要です。SII補助で投資回収 3年前後。",
  },
  {
    label: "屋根太陽光・県内水力の再エネ自家消費",
    detail:
      "食品工場の屋根太陽光自家消費に加え、新潟の豊富な水力資源を活用した県内再エネ調達が可能。米どころのSDGs・CN訴求と電気代安定化を両立。需要家主導型補助・小水力活用補助との組合せで導入が進みます。",
  },
  {
    label: "BEMS・生産連動運転（連続生産／仕込み期）",
    detail:
      "BEMSによる需要見える化と、米菓の連続生産ライン最適化・清酒の仕込み期連動運転でピーク需要▲10〜15%。季節変動の大きい清酒では契約電力の適正化、米菓では夜間シフトと組み合わせて基本料金を削減できます。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績（清酒は仕込み期ピーク含む）に対して過剰でないか",
  "米菓の乾燥・焙焼、清酒の発酵冷却・貯蔵の年間使用kWhを工程別に把握しているか",
  "乾燥機・焙焼機・冷凍機の廃熱回収・高効率化の余地を検証したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東北電力の最新単価で再見積を取得したか",
  "全国系・東北系・再エネ特化型の新電力10社以上から相見積を取得したか",
  "食品大手・取引先からのSDGs・CN・Scope3要請の有無を確認したか",
  "県内水力・小水力・屋根太陽光の再エネ調達可能性を検討したか",
  "清酒の場合、仕込み期・閑散期の季節連動の契約電力最適化を検討したか",
  "新潟県補助・市町村補助・SII・農水省食品補助・小水力補助の併用可否を整理したか",
  "屋根太陽光自家消費の試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "BCP（豪雪・中越地震想定）の自家発・蓄電池・冷凍機/貯蔵庫復旧優先度を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "新潟の食品工場（米菓・清酒）は電気代が他エリアより高いですか？",
    answer:
      "東北電力エリアは水力資源が豊富で火力依存度が北海道・中部より低めのため、燃料費調整額の変動幅は相対的に小幅で推移してきました。標準メニュー単価自体は他の旧一電と大きくは変わりませんが、燃料高騰局面での単価上昇リスクは相対的に小さい構造です。米菓の連続生産・清酒の季節ピークいずれも電力多消費のため、省エネ投資・契約見直しの経営インパクトは大きく、固定単価＋燃調上限契約と省エネの組合せが基本戦略です（出典: 東北電力供給計画／エネ庁エネルギー白書）。",
  },
  {
    question: "米菓工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的に乾燥工程（熱風乾燥機）と焙焼工程（焼成機）が電力・熱消費の中心で、24時間連続生産の大手工場では年間使用量の大きな比率を占めます。次いで空調、精米・成形、包装が続きます。乾燥・焙焼の高効率化＋廃熱回収、ヒートポンプ乾燥の導入が米菓工場の最大の省エネ余地です。",
  },
  {
    question: "清酒蔵の電力管理で特に注意すべき点は？",
    answer:
      "清酒は吟醸・大吟醸の低温発酵（5〜15℃精密管理）、生酒・生貯蔵酒の低温貯蔵（マイナス5〜5℃）に冷却電力が不可欠で、酒質に直結します。仕込み期（10〜3月の寒造り）に電力需要がピークとなる季節性が大きいため、①仕込み期の最大デマンドに基づく契約電力の適正化、②閑散期（夏季）の運転最適化、③発酵冷却・貯蔵の高効率化（省エネと品質管理の両立）の3点が重要です。新潟の冬季の冷涼な気候は、外気冷熱・井戸水熱の活用にも適しています。",
  },
  {
    question: "新潟の水力資源を食品工場の電気代削減に活かせますか？",
    answer:
      "活かせます。新潟県は信濃川・阿賀野川水系の水力発電が豊富で、東北電力エリア全体としても再エネ比率が比較的高い特徴があります。県内の水力・小水力・太陽光を活用した再エネ調達メニュー（再エネ特化型新電力・地域新電力）を選択することで、米どころのSDGs・CN対応と電気代安定化を両立できます。小水力発電の自家活用・地産地消の補助制度も活用余地があります。",
  },
  {
    question: "包装米飯（パックご飯）の需要拡大で電力需要はどう変わりますか？",
    answer:
      "包装米飯はEC・簡便食需要の拡大で生産量が増加基調にあり、炊飯・無菌包装・冷却・殺菌（レトルト）の電力・蒸気消費も増加しています。増産時には省エネ設計（蒸気効率化・廃熱回収・冷却高効率化）を組み込むことで、生産量増加に対する電気代増を抑制できます。新潟は米の産地として包装米飯の主要生産地で、今後も電力需要が増える分野です。",
  },
  {
    question: "新潟の食品工場向け補助金は何が活用できますか？",
    answer:
      "新潟県の中小企業省エネ・脱炭素設備導入補助、市町村独自補助、国のSII省エネ補助、農林水産省の食品産業向け省エネ・脱炭素補助、需要家主導型再エネ・小水力活用補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要。最新公募状況は新潟県産業労働部・各市町村・SII・農水省の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "豪雪・中越地震のBCPは食品工場としてどう備えるべきですか？",
    answer:
      "新潟県は豪雪地帯であり、また2004年中越地震・2007年中越沖地震を経験した地域です。冬季の豪雪による停電・物流途絶、地震による設備被害のリスクに備え、食品工場では自家発電（ディーゼル＋燃料備蓄）・冷凍貯蔵庫の系統復旧優先度・除雪体制・代替拠点連携を重視します。清酒蔵では仕込み期（冬季）の停電が醸造に致命的なため、特にBCP体制が重要。物理的な復旧作業は東北電力ネットワーク（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・自家発切替支援は小売事業者ごとに体制が異なるため確認が必要です。",
  },
  {
    question: "米菓大手のCN・SDGs対応にサプライチェーンはどう対応すべきですか？",
    answer:
      "亀田製菓・三幸製菓等の米菓大手はSDGs・CN対応を進めており、原料調達・製造・物流のサプライチェーン全体でCO2削減を志向しています。中堅・中小の関連工場・サプライヤーでも、①屋根太陽光自家消費、②県内水力等の再エネ調達、③乾燥・焙焼の省エネ、④非化石証書購入、の組合せでCN対応が可能。補助金との組合せで投資ハードルを下げられます。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東北電力 法人向け料金プラン", url: "https://www.tohoku-epco.co.jp/" },
  { name: "東北電力ネットワーク 供給計画", url: "https://nw.tohoku-epco.co.jp/" },
  { name: "新潟県 産業労働部 産業政策", url: "https://www.pref.niigata.lg.jp/" },
  { name: "農林水産省 食品産業政策", url: "https://www.maff.go.jp/" },
  { name: "国税庁 清酒製造業の概況", url: "https://www.nta.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function NiigataFoodElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/niigata-food-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "新潟県の食品（米菓・清酒）の電気料金", url: "https://simulator.eic-jp.org/niigata-food-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">新潟県の食品（米菓・清酒）の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            新潟県の食品（米菓・清酒）の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            新潟県は米どころとして、米菓（全国シェア過半）・清酒（県内約90蔵）・包装米飯を中心とした食品加工が基幹産業です。本ページでは「新潟県 × 食品（米菓・清酒）」というクロス領域に絞り、東北電力エリア固有の単価事情と、米菓焼成乾燥・清酒低温醸造・包装米飯の電力プロファイル、水力資源活用、契約最適化までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>亀田の米菓・県内90蔵の清酒・包装米飯の集積と電力プロファイル</li>
              <li>大手米菓／清酒蔵／包装米飯工場のBefore/After削減事例</li>
              <li>東北電力エリアの単価水準と水力資源による燃調感応度の低さ</li>
              <li>米菓の乾燥焙焼・清酒の低温醸造の省エネと水力地産地消</li>
              <li>新潟×食品に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「新潟 × 食品（米菓・清酒）」のクロス領域に特化したガイドです。新潟県全体の文脈は{" "}
            <Link href="/niigata-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              新潟県の法人電気料金完全ガイド
            </Link>
            、業種一般としての食品工場全体は{" "}
            <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              食品工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              新潟県の食品集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟県は米の生産量全国トップクラスの米どころで、米菓（全国シェア過半）・清酒（県内約90蔵）・包装米飯・精米等の米加工食品が基幹産業です。米菓の乾燥焙焼、清酒の低温醸造という業種特性と、東北電力エリアの水力資源の豊かさが電力事情の中心です。
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
              新潟県全体の文脈は{" "}
              <Link href="/niigata-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                新潟県の法人電気料金ガイド
              </Link>
              、東北電力エリア全体は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東北電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                食品工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東北電力エリアの主要電力会社・新電力（新潟×食品での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟県内の食品工場は、東北電力に加えて東北系・全国系・再エネ特化型（水力活用）と多様なプレイヤーが供給。大手米菓・大型食品工場では競争入札が進む一方、清酒蔵・中小工場は東北電力継続が多数派です。
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
              東北電力エリアの料金水準と食品工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧・特別高圧の単価レンジ、水力比率による燃調感応度の低さ、清酒の季節性と契約電力を、食品工場の代表的な契約タイプ別に整理します。
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
              規模別事例3件 — 大手米菓／清酒蔵／包装米飯（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟県内の代表的な3規模の食品工場で、契約見直し＋乾燥/冷却高効率化＋再エネの組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場の電気料金見直し</Link>
              、{" "}
              <Link href="/beverage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲料製造業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              新潟×食品固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟食品の電気代上昇は、米菓の乾燥焙焼連続熱負荷・清酒の低温醸造貯蔵冷却・東北エリアの燃調感応度（低め）・清酒の季節変動・食品大手のCN要請の5要因が複合的に作用します。
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
              補助金・優遇制度 — 新潟県・国・農水省の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟県の中小企業省エネ補助、市町村独自補助、国のSII省エネ補助、農林水産省の食品産業向け補助、需要家主導型再エネ・小水力活用補助の5層を組合せ、食品工場投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（新潟・亀田／新発田・長岡／県内90蔵／上中下越）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟の食品集積は、新潟市亀田の米菓一大集積、新発田・長岡の米菓包装米飯、県内全域の清酒蔵（約90蔵）、上越中越下越の食品工場、東北電力・水力資源という構造です。
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
              電力会社切替の実情 — 東北電力と新電力の比較（食品版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大手米菓・大型食品工場では競争入札が進行中、中小工場・清酒蔵でも切替余地、市場連動からの固定回帰、再エネ地産地消・水力活用の進展が共通トレンドです。
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
              新潟×食品の省エネ・自家消費事例（乾燥焙焼／発酵冷却／包装米飯蒸気／水力太陽光／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              食品工場の省エネは、米菓乾燥機・焙焼機の高効率化＋廃熱回収、清酒の発酵冷却・低温貯蔵高効率化、包装米飯の蒸気効率化、屋根太陽光・県内水力の再エネ自家消費、BEMS生産連動運転の5軸が主力。米菓・清酒・包装米飯いずれでも投資回収2.5〜4年で実現可能です。
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
              新潟×食品 契約見直しチェックリスト（12項目）
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
              シミュレーターで新潟×食品の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新潟の食品工場は、米菓の乾燥焙焼負荷・清酒の低温醸造冷却・季節変動・食品大手CN要請など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・乾燥/冷却高効率化・水力太陽光のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>清酒の仕込み期（冬季）・米菓の通年生産の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した19〜20%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/niigata-business-electricity-cost", title: "新潟県の法人電気料金ガイド（地域一般）", description: "新潟県全体の文脈・東北電力エリア・水力資源・産業構造。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し（業種一般）", description: "加熱・乾燥・冷却の食品製造全般の最適化。" },
              { href: "/beverage-electricity-cost-review", title: "飲料製造業の電気料金見直し（業種一般）", description: "清酒・飲料の充填・殺菌・冷却の論点。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北全体の料金体系・水力比率・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/hokkaido-food-processing-electricity-cost", title: "北海道の食品加工業の電気料金", description: "北海道電力エリアの酪農・水産加工クロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "食品工場に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "食品工場で市場連動を避けるべき理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "東北エリアの電源構成・水力比率を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東北エリアの感応度の低さを理解。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根太陽光・小水力自家消費の経済性。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "食品大手CN対応の追加性ある再エネ調達。" },
            ]}
          />

          <ContentCta
            heading="新潟の食品（米菓・清酒）の電気代リスクを自社条件で試算する"
            description="亀田の米菓・県内の清酒蔵・包装米飯など新潟の食品固有の条件（東北電力エリア・乾燥焙焼・低温醸造・水力資源）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・乾燥/冷却高効率化・水力太陽光のROIもあわせて確認できます。"
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
            heading="新潟の食品（米菓・清酒）の電力契約見直し、専門家に相談しませんか？"
            description="大手米菓・清酒蔵・包装米飯いずれも乾燥/冷却の規模感と季節変動・食品大手CN要請が絡み合い、契約・調達・省エネ投資・水力地産地消を一体で設計する必要があります。エネルギー情報センターは中立的立場で新潟県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
