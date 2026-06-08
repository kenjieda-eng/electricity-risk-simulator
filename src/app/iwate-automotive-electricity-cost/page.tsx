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
  "岩手県の自動車・輸送機器工場の電気料金完全ガイド｜北上・金ケ崎の自動車集積と東北電力";
const pageDescription =
  "岩手県の自動車・輸送機器製造業に特化。金ケ崎・北上・奥州の完成車・サプライヤー集積を核に、プレス・溶接・塗装・組立ラインの電力プロファイル、東北電力エリアの単価事情（火力比率が高めで燃調感応度は中〜やや高め・女川2号機再稼働の進行）、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します（東北で初の自動車クロス）。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "岩手県 自動車 電気料金",
    "金ケ崎 北上 自動車 電気代",
    "プレス 塗装 溶接 電力",
    "東北電力 特別高圧 自動車",
    "自動車部品 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/iwate-automotive-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/iwate-automotive-electricity-cost",
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
    label: "岩手県の自動車・輸送機器産業集積 — 北上川流域に広がる東北の自動車拠点",
    detail:
      "岩手県は北上川流域（北上市・金ケ崎町・奥州市）を中心に、完成車・大型部品の製造拠点とサプライヤー群が集積する『東北の自動車産業集積』の中核です。金ケ崎・北上の工業団地群には完成車・自動車製造の事業所と、プレス・溶接・塗装・樹脂成形・電子部品など多層のサプライチェーンが立地し、北上川流域を軸に部品から組立まで広域で連携しています。これらの事業所群は特別高圧・高圧の電力需要家として、プレス・溶接・塗装ラインを核とした大きな電力を調達しています。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に東北電力エリア固有の論点を整理します（出典: 岩手県統計・経産省工業統計から整理）。",
  },
  {
    label: "自動車・輸送機器工場の電力プロファイル — プレス・溶接・塗装・組立",
    detail:
      "自動車・輸送機器工場の電力消費の中心は、プレス（サーボ／油圧）、溶接（スポット・アーク）、塗装ライン（電着・乾燥炉・換気・空調）、組立コンベア、コンプレッサー、空調です。とりわけ塗装ラインは電着・乾燥炉・換気・空調が集中し、工場全体で最大の電力・熱負荷となる傾向があります。一方プレス・溶接は瞬間的な大電流ピークを伴い、デマンド（kW）のピークが立ちやすいのが特徴です。塗装の連続熱負荷とプレス・溶接の瞬時ピークという二面性をどう平準化するかが、電力単価最適化の主戦場となります（一般に塗装・空調・用役で工場電力の大きな比率を占めるとされます／出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "塗装ラインの連続熱負荷と溶接・プレスのデマンドピーク特性",
    detail:
      "岩手県内の完成車・サプライヤー工場では、塗装ライン（電着・乾燥炉）が長時間連続で稼働し、換気・空調とあわせて大きなベース負荷を形成します。これに対し溶接（スポット・アーク）とプレスは打鍵・通電のたびに瞬間的な大電流が流れ、契約電力（kW）のピークを押し上げます。塗装の連続負荷と溶接・プレスの瞬時ピークが重なるタイミングでデマンドが最大化しやすいため、ピーク需要の平準化が契約電力最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "冬期の塗装ブース加温・空調負荷と外気冷房の適用余地",
    detail:
      "岩手は東北エリアの北部に位置し、冬期は外気温が低いため、塗装ブースの加温・乾燥炉の昇温・空調の暖房負荷がかさみやすい点が電力構造の特徴です。一方で外気温が低いことは、組立工程や用役の空調・換気で外気冷房（フリークーリング）の適用余地が大きいという利点でもあります。塗装の加温負荷を抑えつつ、組立・用役側では外気を積極活用するメリハリのある空調運用が、工場全体の電力削減余地を把握する出発点となります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "東北電力エリアの系統と自動車・輸送機器工場の関係",
    detail:
      "岩手県は東北電力エリアに属し、小売は東北電力（東北電力本体が法人小売を担う）、送配電は東北電力ネットワークが担います。東北エリアは火力（LNG・石炭）の比率が相対的に高く、燃料費調整額の感応度は中〜やや高めとされてきましたが、女川原子力発電所2号機（宮城県）の再稼働が進み、エリア全体の電源構成の脱炭素・安定化が進行しています。岩手は東北エリアの北部に位置し、北上川流域の自動車集積が高圧・特別高圧の需要家として電力を調達しています。JEPX東北エリア価格を参照しつつ、エリア固有の単価事情を踏まえた契約戦略が求められます（出典: 東北電力ネットワーク 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "岩手県内最大シェア。北上・金ケ崎・奥州の特別高圧・高圧の完成車・サプライヤー工場の長期需要家を多数抱えます。法人向けの特別高圧・高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。東北は火力比率が相対的に高く、燃料費調整額の感応度が中〜やや高めとされてきましたが、女川2号機再稼働の進行でエリアの電源構成は改善方向にあります。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 東北電力 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "岩手県内の特別高圧・高圧の自動車・輸送機器工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい完成車・大型部品工場で実績を積み上げています。東北エリアは火力依存度が相対的に高く価格差が出やすい局面もあるため、供給可能kWh枠と燃調条件を含めた総合比較が有効です。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（東北圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "東北圏のガス・エネルギー事業者系の電気事業は、コージェネ併設工場やガス需要家との一括最適化提案が強みとなる場合があります。自動車・輸送機器工場では塗装乾燥炉・前処理の蒸気・温水需要があり、ガス＋電気の総合最適パッケージとして検討される例があります。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "完成車・自動車部品はグローバル供給網に組み込まれることが多く、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（広い屋根面積を活かす自家消費）、オフサイトPPA（県内・東北圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。岩手は再エネ導入を後押しする政策的背景もあり、追加性のある調達を求める需要家にはPPAが選択肢となります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。東北エリアも例外ではなく供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい完成車・大型部品工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX東北エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX東北エリアのスポット価格は、火力比率が相対的に高い供給構造を背景に、燃料価格や需給に応じて変動する局面があります。女川2号機再稼働の進行はエリアの限界費用の安定化に寄与し得ますが、全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "東北電力エリアの特別高圧 — 大規模完成車・大型部品工場の単価水準",
    detail:
      "大規模完成車・大型部品工場（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね15〜18円/kWh＋調整項目とされます。東北は火力比率が相対的に高いため、燃料高騰局面では単価が上ぶれしやすい一方、女川2号機再稼働の進行はエリア全体の安定化に寄与し得ます。燃料費調整額（東北はエリア特性として感応度が中〜やや高め）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は21〜26円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小自動車部品工場の単価",
    detail:
      "北上・奥州・一関の高圧自動車部品工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は16〜20円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は22〜27円/kWhレンジが目安です。東北は火力依存度が相対的に高いぶん、新電力切替や固定化による単価安定のメリットが出やすい局面があります。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 東北電力エリア固有（中〜やや高め）",
    detail:
      "東北電力エリアは火力（LNG・石炭）への依存度が相対的に高いため、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度が中〜やや高めとされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面では、東北の燃調も拡大し、年間使用量の大きい完成車・サプライヤー工場では単価上昇を経験しました。女川2号機再稼働の進行で火力依存が緩和されればエリアの限界費用の安定化が期待されますが、当面は燃調変動を見据えた固定vs市場連動の選択が経営判断の中心となります（出典: 東北電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量6,000万kWh級の完成車工場では年約2.51億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い自動車工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 完成車・大型部品工場（特別高圧 12,000kW、年間 6,500万kWh）— 代表シナリオ",
    before:
      "Before: 金ケ崎・北上近郊の完成車・大型部品工場A（プレス・溶接・塗装・組立を内製）。塗装乾燥炉・電着の連続熱負荷が大きく、溶接・プレスで瞬時のデマンドピークが立つ。東北電力の特別高圧契約＋燃調連動。年間電気代 約16億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／塗装ラインの低温硬化＋乾燥炉廃熱回収／サーボプレス化＋回生電力の蓄電池活用でピークシフト／コンプレッサー高効率化／工場屋根の自家消費太陽光（オンサイトPPA）導入／BEMS・需給予測による溶接・プレスピークの平準化。",
    result:
      "Result: 年間電気代 約16億円 → 約13.4億円（▲約16%、▲2.6億円・目安）。5年累計の削減額は約13億円（年▲2.6億円×5年＝13億円）。契約電力 12,000→11,000kW／塗装廃熱回収で用役電力を削減／RE100比率の段階的引上げ。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模Tier1（特別高圧 2,500kW、年間 1,700万kWh）— 代表シナリオ",
    before:
      "Before: 北上市の中規模Tier1工場B（プレス・溶接・塗装・組立を担うTier1サプライヤー）。塗装乾燥と溶接・プレスが混在し、品種切替に伴うデマンド変動が大きい。東北電力の特別高圧契約＋燃調連動。年間電気代 約4.2億円規模（目安）。",
    after:
      "After: 入札特化型新電力に固定2年・燃調条件を比較して切替検討／コンプレッサー高効率機更新＋エア漏れ対策（SII補助1/2活用を検討）／塗装乾燥の廃熱回収／自家消費太陽光＋蓄電池でピークシフト／BEMSで溶接・プレスのピーク平準化。",
    result:
      "Result: 年間電気代 約4.2億円 → 約3.5億円（▲約17%、▲7,000万円・目安）。5年累計の削減額は約3.5億円（年▲7,000万円×5年＝3.5億円）。契約電力 2,500→2,300kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小Tier2プレス・樹脂（高圧 800kW、年間 550万kWh）— 代表シナリオ",
    before:
      "Before: 奥州市・一関近郊の中小Tier2 C社（プレス部品・樹脂成形の小ロット多品種）。東北電力の業務用高圧電力＋燃調連動。プレス・成形機とコンプレッサーが中心で、品種切替に伴うデマンド変動が大きい。年間電気代 約1.35億円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場LED化（県補助＋SII併用を検討）／サーボプレス化・成形機の省エネ／コンプレッサー集中管理＋エア漏れ対策／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約1.35億円 → 約1.15億円（▲約15%、▲2,000万円・目安）。5年累計の削減額は約1.0億円（年▲2,000万円×5年＝1.0億円）。契約電力 800→730kW／投資回収 補助金後 2年前後（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "塗装ライン（電着・乾燥炉）の連続熱負荷集中",
    detail:
      "自動車・輸送機器工場では、塗装ライン（電着・乾燥炉・換気・空調）が工場全体で最大の電力・熱負荷となる傾向があります。電着塗装・前処理・乾燥炉の昇温と、塗装ブースの換気・温湿度管理は長時間連続で稼働するため、塗装まわりの用役が電力消費の大きな比率を占めます。一般に塗装・空調・用役で工場電力の大きな比率を占めるとされ、塗装の運用最適化（低温硬化・廃熱回収・換気の適正化）が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "溶接（スポット・アーク）・プレスの瞬時大電流ピーク",
    detail:
      "溶接（スポット・アーク）は打鍵・通電のたびに瞬間的な大電流が流れ、プレス（油圧・サーボ）も加圧・成形のタイミングで電力負荷が跳ね上がります。これらが塗装の連続負荷と重なると契約電力（kW）のピークが押し上げられます。瞬時ピークは品質保証のため運転条件の自由度が低い一方、サーボプレス化・回生電力の活用・蓄電池併用でピークを平準化する余地があります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "東北電力エリアの燃調感応度（中〜やや高め）",
    detail:
      "東北電力エリアは火力比率が相対的に高いため、燃料費調整額の感応度が中〜やや高めとされるのがエリア固有の特徴です。これは燃料高騰局面で単価が上ぶれしやすい点に注意が必要な一方、女川2号機再稼働の進行で火力依存が緩和されればエリアの限界費用の安定化が期待できます。岩手の自動車・輸送機器工場では、この燃調変動を前提に固定vs市場連動の選択を検討するのが実務的です。どちらが適するかは使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット製造に伴うデマンド変動",
    detail:
      "自動車部品・プレス・樹脂成形は多品種小ロット生産が中心で、品種切替や型替えのたびにプレス・溶接・塗装の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。冬期は塗装ブースの加温負荷が重なるため、ピーク管理の重要度がさらに増します。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えて完成車・自動車部品はグローバル供給網からScope3 GHG排出削減要請が強まり、Tier1・Tier2のサプライヤーでも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。岩手は再エネ導入を後押しする政策的背景があり追加性のある調達の選択肢が比較的広い点が特徴ですが、調達形態の要否は供給網の要請次第です。本記載は特定の調達形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "岩手県 産業・脱炭素関連補助（岩手県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、自動車・ものづくり産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策（自動車・ものづくり産業振興関連を含む）に基づく補助メニュー。自動車・輸送機器工場の高効率空調・コンプレッサー・LED・塗装乾燥炉の省エネ・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は岩手県の公式窓口で確認してください。本記載は特定の制度活用を推奨するものではありません（出典: 岩手県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・冷凍・LED・コンプレッサー・ヒートポンプ・塗装乾燥設備等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "自動車・輸送機器工場の塗装乾燥炉更新・コンプレッサー高効率化・全館LED化・サーボプレス化などで活用しやすい主力補助です。岩手県内の自動車・サプライヤーの更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根面積の大きい完成車・自動車部品工場で活用が想定されます。自動車サプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。岩手は再エネ導入の政策的後押しが厚く、追加性のある調達を検討しやすい点も踏まえて整理することが重要です。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率空調・ヒートポンプ・塗装の燃料転換・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "東北経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "自動車・輸送機器の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "自動車・輸送機器の国内生産強靱化やGX対応を後押しする国の公募メニューが年度ごとに用意されます。岩手の自動車・サプライヤーの高度化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "金ケ崎町 — 完成車・自動車製造の中核",
    detail:
      "金ケ崎町は岩手の自動車生産拠点として、完成車・自動車製造の中核を担うエリアです。プレス・溶接・塗装・組立を内製する大型工場とその関連集積が立地し、塗装乾燥炉・電着の連続熱負荷と溶接・プレスの瞬時ピークが共存する特別高圧の電力需要家が中心です。完成車生産に連動して周辺のサプライヤー群も密接に連携し、契約電力最適化と再エネ調達の双方で論点が大きいエリアです。",
  },
  {
    label: "北上市 — サプライヤー・自動車部品・電子部品の集積",
    detail:
      "北上市は北上川流域の工業団地群を中心に、自動車部品・電子部品のサプライヤーが集積するエリアです。プレス・溶接・塗装・組立を担うTier1・Tier2と、電子部品の事業所が混在し、特別高圧・高圧の需要家が広く立地します。多品種製造のためデマンド変動も大きく、契約電力最適化と設備更新を組合せた電気代最適化の余地があります。",
  },
  {
    label: "奥州市 — 自動車部品・鋳造・金属加工の集積",
    detail:
      "奥州市は自動車部品・鋳造・金属加工の事業所が立地するエリアです。鋳造・金属加工は加熱・溶解の電力負荷が大きく、プレス・成形と組合わさってデマンドが上下します。中小〜中堅規模の高圧契約が中心で、サーボ化・高効率化と契約見直しを組合せた電気代最適化が見込まれます。北上・金ケ崎の完成車集積と連携した部品供給を支える役割を担います。",
  },
  {
    label: "一関市・花巻 — 自動車部品・機械の周辺集積",
    detail:
      "一関市・花巻方面には自動車部品・機械の製造・周辺産業の事業所が立地します。プレス・溶接・成形・組立の電力構造が共通し、高圧契約の中小製造業が中心です。コンプレッサー・空調の恒常負荷が電力構造の柱で、設備更新と運用改善の余地があります。北上川流域の自動車サプライチェーンの裾野を支える周辺集積として機能しています。",
  },
  {
    label: "県内全域 — 北上川流域を軸とした東北の自動車産業集積",
    detail:
      "岩手の自動車・輸送機器産業は、北上川流域（北上・金ケ崎・奥州）を軸とした『東北の自動車産業集積』のサプライチェーン基盤の上に成り立っています。完成車から大型部品・Tier1・Tier2・鋳造・樹脂成形・電子部品まで、製造から組立までの裾野が県内で広がっています。これらの完成車・サプライヤーの事業所群は、東北電力エリアの火力比率が相対的に高い電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "東北エリアの新電力浸透度",
    detail:
      "東北電力エリアの新電力比率は、火力依存度が相対的に高く価格差が出やすい局面があることから、年間使用量の大きい工場を中心に切替検討が進みやすい傾向があるとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。切替メリットは燃調条件・契約期間・再エネ付加価値で判断する必要があります。年間使用量の大きい完成車・自動車部品工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、東北でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。東北は火力比率が相対的に高く燃調感応度が中〜やや高めのため、全国需給逼迫時の影響も受けやすく、長期固定（2〜5年）で単価を安定させる選択が検討されています。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "東北電力継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・東北エリアでの供給安定性。デメリット: 火力比率が相対的に高いことに伴う燃調変動、新電力との比較での単価差。継続か切替かは燃調条件・契約期間・再エネ付加価値を含めた総合的な比較が必要です。いずれにせよ本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（岩手×自動車固有）",
    detail:
      "①自動車・輸送機器・連続稼働工場への供給実績、②非化石証書／再エネトラッキング付メニュー（自動車サプライチェーンのCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（東北は中〜やや高めのため上限・連動条件を確認）、⑤BCP対応（停電時の塗装ライン・溶接・組立の継続）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "自動車サプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・東北圏の太陽光案件）／コーポレートPPAが検討材料になります。岩手は再エネ導入の政策的後押しが厚く、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "塗装ラインの低温硬化＋乾燥炉廃熱回収",
    detail:
      "自動車・輸送機器工場の塗装ラインは、電着・乾燥炉の昇温・保温と換気で大きな熱・電力負荷を持ちます。低温硬化塗料への切替・乾燥炉の廃熱回収（排気熱の前処理・前段予熱への再利用）・断熱強化により、加温に要するエネルギーを抑えられます。岩手は冬期の外気温が低く塗装ブースの加温負荷がかさむため、廃熱回収の効果が出やすいのが特徴です。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は塗装仕様や運転条件によって変動します。",
  },
  {
    label: "サーボプレス化＋回生電力の蓄電池活用でピークシフト",
    detail:
      "プレス（油圧→サーボ）への更新は、必要なときだけモーターを駆動するためエネルギー効率が高く、減速時の回生電力を蓄電池に取り込んで溶接・プレスのピークに充てることでデマンド（契約kW）を抑えられます。瞬時の大電流ピークを蓄電池で平準化できれば基本料金の削減に直結します。設備更新（サーボ化）と蓄電池併用を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%が見込めます。自動車・輸送機器工場では塗装・搬送・組立・計装エアなど圧縮空気の用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "外気冷房・空調/換気の運転最適化",
    detail:
      "組立工程や用役の空調・換気では、岩手の外気温が低いことを活かした外気冷房（フリークーリング）の適用余地が大きく、中間期・冬期に冷凍機負荷を抑えられます。塗装ブースの換気量を品質を維持できる範囲で適正化し、待機電力の見える化と運転スケジュール最適化を組合せることで、品質を維持しつつベース電力を抑えられます。用役の運転最適化は工場全体の電力削減余地を把握する出発点であり、投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "屋根面積を確保できる完成車・自動車部品工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、溶接・プレスピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。岩手の再エネ政策環境も踏まえ、本記載は特定の調達形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "塗装ライン（電着・乾燥炉・換気）の年間使用kWhを工程別に把握しているか",
  "溶接・プレスの瞬時ピークがデマンド（契約kW）を押し上げていないか",
  "外気冷房（フリークーリング）を組立・用役で中間期・冬期に活用できる余地があるか（岩手は冬期外気温が低い）",
  "燃料費調整額の条件（東北は中〜やや高めのため上限・連動条件）を契約書で確認したか",
  "東北電力の現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "自動車サプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "岩手県・SII・経産局補助の併用可否を設備別に整理したか",
  "多品種切替に伴うデマンド変動をピーク平準化・蓄電池・回生電力で抑える余地はあるか",
  "停電時の品質保証（塗装ライン・溶接・組立の継続・自家発・蓄電池）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "岩手県の自動車・輸送機器工場は東北電力エリア固有の単価リスクがありますか？",
    answer:
      "東北電力エリアは火力（LNG・石炭）の比率が相対的に高く、燃料費調整額の感応度が中〜やや高めとされるのがエリア固有の特徴です。これは燃料高騰局面で単価が上ぶれしやすい点に注意が必要です。一方、女川原子力発電所2号機（宮城）の再稼働が進み、エリア全体の電源構成の安定化・脱炭素が進行している点はプラス材料です。火力依存度が相対的に高いぶん、新電力切替や長期固定による単価安定のメリットが出やすい局面もあります。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 東北電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "自動車・輸送機器工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般に塗装ライン（電着・乾燥炉・換気・空調）が電力・熱消費の中心とされ、工場全体で最大の負荷を占める傾向があります。次いで溶接（スポット・アーク）、プレス（油圧・サーボ）、組立コンベア、コンプレッサー、空調が続きます。塗装は連続的な熱負荷、溶接・プレスは瞬間的な大電流ピークという二面性があるため、塗装の低温硬化・廃熱回収と、溶接・プレスのピーク平準化（サーボ化・蓄電池・回生電力）が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "プレス・溶接・塗装の工場で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種小ロット製造では品種切替・型替えに伴いプレス・溶接・塗装の稼働が断続的に増減し、デマンド変動が大きくなりがちです。生産スケジュールの調整やピーク需要の平準化、サーボプレス化・回生電力・蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせて塗装ラインの低温硬化・乾燥炉廃熱回収、コンプレッサー高効率化、LED化が有効です。岩手県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "岩手の自動車・輸送機器工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "屋根面積を確保できる工場では現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。岩手は再エネ導入を後押しする政策的背景があり、追加性のある調達を比較的検討しやすい環境です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は自動車・輸送機器工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量6,000万kWh級の完成車工場では年約2.51億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い自動車工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "岩手の自動車・輸送機器工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。東北エリアは火力依存度が相対的に高く価格差が出やすい局面もあるため、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "岩手県の補助金は自動車・輸送機器工場でも使えますか？",
    answer:
      "使える可能性があります。岩手県は自動車・ものづくり産業振興・脱炭素政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。塗装乾燥炉の省エネ・コンプレッサー・LED・断熱・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は岩手県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の品質保証は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は東北電力ネットワーク（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし自動車・輸送機器工場では停電時に塗装ライン・溶接・組立の継続や仕掛品の品質確保が直結するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東北電力 法人向け料金プラン", url: "https://www.tohoku-epco.co.jp/" },
  { name: "東北電力ネットワーク 供給・系統情報", url: "https://nw.tohoku-epco.co.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "岩手県 産業政策・脱炭素", url: "https://www.pref.iwate.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "日本自動車工業会", url: "https://www.jama.or.jp/" },
];

export default function IwateAutomotiveElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/iwate-automotive-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "岩手県の自動車・輸送機器工場の電気料金", url: "https://simulator.eic-jp.org/iwate-automotive-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">岩手県の自動車・輸送機器工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            岩手県の自動車・輸送機器工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            岩手県は北上川流域（北上・金ケ崎・奥州）に完成車・サプライヤーが広く集積し、『東北の自動車産業集積』の中核を担う地域です。本ページでは「岩手県 × 自動車・輸送機器製造業」というクロス領域に絞り、東北電力エリア固有の単価事情（火力比率が高めで燃調感応度は中〜やや高め・女川2号機再稼働の進行）と、プレス／溶接／塗装／組立ラインの電力プロファイル、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。岩手は東北電力エリアで初の自動車クロスであり、愛知=中部・群馬=東京・広島=中国とエリアで単価/燃調事情が異なる点を分離して扱います。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>岩手県の自動車・輸送機器産業集積（金ケ崎・北上・奥州）の電力プロファイル</li>
              <li>完成車・大型部品／中規模Tier1／中小Tier2プレス・樹脂のBefore/After代表シナリオ3件</li>
              <li>東北電力エリアの単価水準と燃調感応度（中〜やや高め・女川2号機再稼働の進行）</li>
              <li>自動車サプライチェーンのCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>岩手×自動車に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「岩手 × 自動車・輸送機器」のクロス領域に特化したガイドです。岩手県全体の文脈は{" "}
            <Link href="/iwate-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              岩手県の法人電気料金ガイド
            </Link>
            、業種一般としての自動車部品工場全体は{" "}
            <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              自動車部品工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県の自動車・輸送機器産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県は北上川流域（北上市・金ケ崎町・奥州市）を中心に、完成車・大型部品の製造拠点とプレス・溶接・塗装・樹脂成形・電子部品などのサプライヤー群が広く集積しています。プレス・溶接・塗装ラインを核とした特別高圧・高圧の電力需要家が多数立地し、北上川流域を軸とした『東北の自動車産業集積』のサプライチェーンが形成されています。
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
              岩手県全体の文脈は{" "}
              <Link href="/iwate-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                岩手県の法人電気料金ガイド
              </Link>
              、東北電力エリア全体は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東北電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                自動車部品工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東北電力エリアの主要電力会社・新電力（岩手×自動車での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県内の自動車・輸送機器工場は、東北電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。東北は火力依存度が相対的に高く価格差が出やすい局面がある一方、女川2号機再稼働の進行で電源構成の安定化が進むなど、選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              東北電力エリアの料金水準と自動車・輸送機器工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（東北は中〜やや高め）、再エネ賦課金の累積負担を、自動車・輸送機器工場の代表的な契約タイプ別に整理します。東北固有の火力比率高め・燃調中〜やや高めの特性と女川2号機再稼働の進行を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は2026年時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 新電力ネット（https://pps-net.org/unit）・業界団体・経産省/エネ庁統計から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別代表シナリオ3件 — 完成車・大型部品／中規模Tier1／中小Tier2プレス・樹脂（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/auto-parts-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車部品工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。あわせて別エリアの自動車クロスとして{" "}
              <Link href="/aichi-automotive-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">愛知（中部電力）の自動車クロス</Link>
              、{" "}
              <Link href="/gunma-automotive-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">群馬（東京電力）の自動車クロス</Link>
              、{" "}
              <Link href="/hiroshima-automotive-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">広島（中国電力）の自動車・造船クロス</Link>
              もエリアで単価/燃調事情を分離して確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手×自動車固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手の自動車・輸送機器工場の電気代は、塗装ラインの連続熱負荷・溶接／プレスの瞬時ピーク・東北エリアの燃調感応度（中〜やや高め）・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 岩手県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の産業・脱炭素補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、経産局のサプライチェーン強靱化補助の5層を組合せ、自動車・輸送機器の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（金ケ崎／北上／奥州／一関・花巻）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手の自動車サプライチェーンは、金ケ崎の完成車・自動車製造中核を中心に、北上のサプライヤー・自動車部品・電子部品集積、奥州の自動車部品・鋳造・金属加工集積、一関・花巻の自動車部品・機械周辺、県内全域の北上川流域を軸とした東北の自動車産業集積という構造です。
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
              東北は火力比率が相対的に高く価格差が出やすい局面があること、市場連動からの固定回帰、自動車サプライチェーンのCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              岩手×自動車の省エネ・自家消費事例（塗装ライン／サーボプレス・蓄電池／コンプレッサー／外気冷房／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動車・輸送機器工場の省エネは、塗装ラインの低温硬化＋廃熱回収、サーボプレス化＋回生電力の蓄電池活用、コンプレッサー高効率化、外気冷房・空調/換気の運転最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              岩手×自動車 契約見直しチェックリスト（12項目）
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
              シミュレーターで岩手×自動車の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手の自動車・輸送機器工場は、塗装ラインの連続熱負荷・溶接／プレスの瞬時ピーク・自動車サプライチェーンのCN要請など複合リスクを抱えます。東北は燃調感応度が中〜やや高めという特性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約15%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-09"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/iwate-business-electricity-cost", title: "岩手県の法人電気料金ガイド（地域一般）", description: "岩手県全体の電力事情・東北電力・補助金。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北エリアの料金体系・火力比率・燃調感応度。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品工場の電気料金見直し（業種一般）", description: "プレス・溶接・塗装・組立の電力最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車工場×中部電力（地域クロス）", description: "別エリア（中部電力）の自動車クロス。単価/燃調事情を分離。" },
              { href: "/gunma-automotive-electricity-cost", title: "群馬県の自動車工場×東京電力（地域クロス）", description: "別エリア（東京電力）の自動車クロス。単価/燃調事情を分離。" },
              { href: "/hiroshima-automotive-electricity-cost", title: "広島県の自動車・造船×中国電力（地域クロス）", description: "別エリア（中国電力）の自動車・造船クロス。論点を分離。" },
              { href: "/fukushima-electronics-electricity-cost", title: "福島県の電子部品・半導体工場×東北電力（地域クロス）", description: "同じ東北電力エリアの別業種クロス。業種で論点を分離。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "年度公募のタイミングと採択率の目安。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動の適否を判断する観点。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="岩手の自動車・輸送機器工場の電気代リスクを自社条件で試算する"
            description="完成車・大型部品・中規模Tier1・中小Tier2いずれも、東北電力エリア・塗装ラインの連続熱負荷・溶接／プレスの瞬時ピーク・自動車サプライチェーンのCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="岩手の自動車・輸送機器工場の電力契約見直し、専門家に相談しませんか？"
            description="完成車・大型部品・中規模Tier1・中小Tier2いずれも、塗装ライン・溶接・プレス・組立の規模感と自動車サプライチェーンのCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で岩手県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
