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
  "岐阜県の窯業・陶磁器工場の電気料金完全ガイド｜多治見・土岐の美濃焼・タイル集積と中部電力エリア";
const pageDescription =
  "岐阜県の窯業・陶磁器（美濃焼・タイル）製造に特化。多治見・土岐・瑞浪の窯業集積を背景に、焼成炉（電気炉・ガス炉）・乾燥・粉砕成形の熱負荷プロファイル、中部電力エリアの単価事情（LNG火力依存で燃調感応度は中位）、契約最適化、補助金・PPA活用を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "岐阜県 窯業 電気料金",
    "美濃焼 タイル 電気代",
    "陶磁器 焼成炉 電力",
    "中部電力 高圧 窯業",
    "多治見 土岐 瑞浪 工場 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/gifu-ceramics-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/gifu-ceramics-electricity-cost",
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
    label: "岐阜県の窯業・陶磁器産業集積 — 東濃地域を核とする一大産地",
    detail:
      "岐阜県の多治見市・土岐市・瑞浪市・可児市を中心とする東濃地域は、美濃焼（陶磁器）・タイル・ファインセラミックスの一大産地として、千年以上の窯業の歴史を背景に発展してきました。食器・タイル・衛生陶器・碍子・電子部品向けセラミックスまでを含む工場群が集積し、原料調合・成形・施釉・焼成・検査の各工程を担う中小事業所が多数立地しています。本ページは特定の電力会社・契約形態を推奨するものではありませんが、こうした集積構造を前提に中部電力エリア固有の論点を整理します（出典: 業界団体・経産省工業統計から整理）。",
  },
  {
    label: "窯業・陶磁器工場の電力プロファイル — 焼成炉・乾燥・粉砕成形の熱負荷",
    detail:
      "窯業・陶磁器工場の電力消費の中核は、焼成（トンネル窯・シャトル窯／電気炉・ガス炉）、乾燥、原料粉砕・調合、成形（プレス・鋳込み）、施釉の各工程です。とりわけ高温焼成は熱負荷が極大で、電気炉採用ラインでは電力負荷が特に大きく、ガス炉採用ラインでも送風機・搬送・排ガス処理に電力を要します。乾燥は焼成前後で連続稼働し、粉砕・調合は大型モーター負荷が中心です。工程全体で熱とモーター動力が電力消費の柱を成すのが窯業の特徴です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "美濃焼・タイル・ファインセラミックスの多品種生産と電力負荷",
    detail:
      "東濃地域は美濃焼の食器・タイル・衛生陶器に加え、近年はファインセラミックス（電子部品・構造材向け）まで品目が広がり、多品種・小ロットの製造ラインを抱える事業所が多いのが特徴です。品目切替のたびに窯の昇降温・治具交換・乾燥条件の調整が必要となり、焼成炉の稼働が断続的に増減してデマンド変動が大きくなりがちです。連続運転のトンネル窯とバッチ運転のシャトル窯が混在する工程構成では、ピーク需要の平準化が契約電力（kW）最適化の鍵になります。なお本記載は一般的な業態整理であり、特定の契約形態を勧めるものではない点に留意してください。",
  },
  {
    label: "窯の連続運転・昇降温に伴う熱負荷とベース電力",
    detail:
      "トンネル窯は一度火を入れると連続運転で長期間稼働するため、焼成温度の維持と搬送・送風・排ガス処理のための電力が恒常的に発生します。電気炉採用ラインでは昇温・保持の電力負荷が極めて大きく、停止・再稼働には多大なエネルギーと時間を要するため、夜間・休日も一定の需要が続きます。シャトル窯はバッチごとに昇降温を繰り返すため、その都度のピーク電力が発生します。窯の運転スケジュールと排熱回収の最適化がベース電力・ピーク電力双方の管理に直結します（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "中部電力エリアの系統と窯業・陶磁器工場の関係",
    detail:
      "岐阜県は中部電力エリアに属し、小売は中部電力ミライズ、送配電は中部電力パワーグリッドが担います。中部エリアの電源はLNG火力（碧南・川越・知多等）が主力で石炭も併用しており、火力依存度が相対的に高いため燃料費調整額の感応度は中位とされます。浜岡原子力発電所は現在停止中で、その分を火力・他エリアからの融通で補っています。窯業工場は熱負荷が大きく年間使用量が多いため、JEPX中部エリア価格を参照しつつ、エリア固有の単価事情を踏まえた契約戦略が求められます（出典: 中部電力パワーグリッド 供給・系統情報／エネ庁から整理）。",
  },
];

const utilitiesList = [
  {
    name: "中部電力ミライズ（旧一般電気事業者・法人小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "中部電力エリアの法人小売は中部電力ミライズが担い、岐阜県内最大シェアを持ちます。多治見・土岐・瑞浪・可児の高圧・特別高圧の窯業・陶磁器工場の長期需要家を多数抱えます。法人向けの高圧・特別高圧メニューが整備され、固定単価型・燃料費調整連動型ともに用意されています。中部はLNG火力が主力で石炭も併用するため、燃料費調整額の感応度は中位とされます。長期安定供給と災害復旧体制の優位性から大手取引は維持基調ですが、本記載は事実関係の整理を目的としたものです（出典: 中部電力ミライズ 法人向け料金プランから整理）。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "岐阜県内の高圧・特別高圧の窯業・陶磁器工場の競争入札における主要な対抗候補です。固定単価メニュー（2〜5年契約）が中心で、年間使用量の大きい焼成炉中心の大型工場で実績を積み上げています。中部エリアは火力依存度が相対的に高く燃調感応度が中位のため、燃調条件と供給可能kWh枠を含めた総合比較が重要になります。なお本記載は特定の電力会社・契約形態の優劣を述べるものではありません。",
  },
  {
    name: "地域系・ガス系新電力（中部圏のガス・エネルギー事業者系等）",
    role: "地域系新電力",
    detail:
      "中部圏のガス・エネルギー事業者系の電気事業は、ガス炉併設工場や都市ガス需要家との一括最適化提案が強みとなる場合があります。窯業工場では焼成・乾燥のガス需要が大きいため、ガス＋電気の総合最適パッケージとして検討される例があります。電気とガスのハイブリッド運用が定着している窯業では、用役全体での最適化視点が有効です。実際の選択は自社の用役構成に依存し、特定の事業者の優劣を述べるものではありません。",
  },
  {
    name: "再エネ特化型・PPA事業者（自家消費太陽光・コーポレートPPA等）",
    role: "再エネ特化型／PPA",
    detail:
      "ファインセラミックスやグローバル供給網に組み込まれる部品メーカーでは、Scope2/Scope3対応の再エネ調達ニーズが高まっています。屋根オンサイトPPA（敷地・屋根面積を活かす自家消費）、オフサイトPPA（県内・中部圏の太陽光案件）、コーポレートPPAの引合いが拡大傾向です。窯業工場は平屋・大屋根の建屋が多く屋根面積を確保しやすい一方、焼成の熱負荷が大きく日中消費が多いため自家消費との相性を見極める必要があります。導入可否は屋根面積・契約期間・系統条件で変わり、画一的な調達形態を勧める趣旨ではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退しました。中部エリアも火力依存度が相対的に高く、スポット価格上昇の影響を受けた局面があり、供給枠の確保は容易ではありませんでした。2024年以降は供給枠が徐々に回復しているものの、年間使用量の大きい窯業・陶磁器工場では供給可能kWh枠の確保が課題となるため、入札の早期着手（契約満了の9〜12ヶ月前から）が実務上重要です。",
  },
  {
    name: "JEPX中部エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX中部エリアのスポット価格は、LNG火力を主力とする供給構造を背景に、燃料スポット価格や為替の影響を受けやすい推移を示す局面があるとされます。全国的な需給逼迫時にはエリア間連系を通じて価格が上昇することもあり、市場連動型契約では変動リスクが残ります。2022〜2023年には市場連動採用の工場でも単価上昇を経験し、現在は固定回帰の動きが見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本記載は市場動向の整理を目的としたものです。",
  },
];

const priceBenchmark = [
  {
    label: "中部電力エリアの特別高圧 — 大規模窯業・陶磁器工場の単価水準",
    detail:
      "大規模タイル・衛生陶器・ファインセラミックス工場（2,000kW超）の特別高圧電力量料金は、標準メニューで概ね15〜18円/kWh＋調整項目とされます。中部はLNG火力が主力で石炭も併用するため、火力依存度の高さを背景に燃料費調整額の感応度は中位です。再エネ賦課金は2026年度4.18円/kWh・確定で、これらを加算した実質単価は20〜25円/kWhレンジが目安です。数値は目安であり、実際の単価は契約条件・新電力選定で変動します（出典: 業界団体・エネ庁統計から整理）。",
  },
  {
    label: "高圧電力 — 中規模・中小窯業・陶磁器工場の単価",
    detail:
      "多治見・土岐・瑞浪・可児の高圧窯業工場（500kW〜2,000kW級）は『業務用高圧電力』が中心で、電力量料金は15〜19円/kWh＋調整項目とされます。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は21〜26円/kWhレンジが目安です。窯業は焼成炉の熱負荷で電力原単位が高く、年間使用量が大きいため、わずかな単価差でも年間コストへの影響が大きくなります。いずれにせよ自社の使用実態に即した比較検討が前提です。",
  },
  {
    label: "燃料費調整額の感応度 — 中部電力エリア固有（中位）",
    detail:
      "中部電力エリアはLNG火力（碧南・川越・知多等）を主力に石炭も併用するため、火力依存度が相対的に高く、為替（円安）や燃料スポット価格の変動に対する燃料費調整額の感応度は中位とされるのがエリア固有の特徴です。2022〜2023年の全国的な燃料高騰局面では、中部の燃調も上昇し、熱負荷の大きい窯業工場ではコスト押し上げ要因となりました。浜岡原発が停止中で火力比率が高い状態が続いているため、燃料市況の変動が単価に反映されやすい点に留意が必要です（出典: 中部電力 単価実績・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量2,600万kWh級の大規模窯業・陶磁器工場では年約1.09億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い焼成炉中心の窯業工場では申請を検討する価値があります。賦課金の推移と影響は本ページ末尾の関連リンク「再エネ賦課金上昇の影響」もあわせて確認してください。本記載は特定の電力会社・契約形態を推奨するものではありません（出典: エネ庁から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模タイル・陶磁器工場（特別高圧 5,000kW、年間 2,600万kWh）— 代表シナリオ",
    before:
      "Before: 東濃地域の大規模タイル・衛生陶器工場A（トンネル窯焼成・大型乾燥ライン・原料粉砕）。電気炉・ガス炉を併用し、トンネル窯が連続運転、乾燥・粉砕が常時稼働。中部電力ミライズの特別高圧契約＋燃調連動。焼成・乾燥の熱負荷が大きく、年間電気代 約6.0億円規模（目安）。以下は公開情報から再構成した代表シナリオです。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得（非化石証書付の選択肢を比較）／トンネル窯の排熱回収を乾燥工程に転用＋断熱強化／電気炉の昇温プロファイル・運転スケジュール見直しで運用改善／工場屋根の自家消費太陽光（オンサイトPPA）導入／BEMS・需給予測による焼成・乾燥ピークシフト。",
    result:
      "Result: 年間電気代 約6.0億円 → 約5.2億円（▲約13%、▲8,000万円・目安）／契約電力 5,000→4,500kW／排熱回収と断熱強化で乾燥用役を削減／RE100比率の段階的引上げ。5年累計では ▲8,000万円×5年＝▲4.0億円（目安）。いずれも目安レンジで、本記載は特定の対策を推奨するものではありません。",
  },
  {
    title: "業種2: 中規模窯業・陶磁器工場（高圧 1,200kW、年間 800万kWh）— 代表シナリオ",
    before:
      "Before: 多治見市・土岐市の中規模陶磁器・タイル工場B（シャトル窯・トンネル窯併用の多品種製造）。焼成炉＋乾燥＋成形プレス＋施釉ラインが稼働。中部電力ミライズの業務用高圧電力＋燃調連動。品目切替に伴う窯の昇降温でデマンド変動が大きく、年間電気代 約2.0億円規模（目安）。",
    after:
      "After: 新電力に固定2年・燃調条件を比較して切替検討／焼成炉の断熱更新＋排熱回収（SII補助1/2活用を検討）／乾燥工程の温度・送風最適化／成形プレス・粉砕機の高効率モーター更新＋インバータ化／屋根太陽光の自家消費（オンサイトPPA）導入／BEMSで焼成ピーク平準化。",
    result:
      "Result: 年間電気代 約2.0億円 → 約1.7億円（▲約15%、▲3,000万円・目安）／契約電力 1,200→1,080kW／投資回収 補助金後 2〜3年前後（目安）／Scope2排出量の段階的削減。5年累計では ▲3,000万円×5年＝▲1.5億円（目安）。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "業種3: 中小窯業・陶磁器工場（高圧 400kW、年間 260万kWh）— 代表シナリオ",
    before:
      "Before: 瑞浪市・可児市近郊の中小陶磁器・タイル工場C社（従業員60名・美濃焼食器／タイルの小ロット多品種）。中部電力ミライズの業務用高圧電力＋燃調連動。シャトル窯焼成＋乾燥＋成形が中心で、窯の昇降温に伴うピーク電力が断続的に発生。年間電気代 約6,500万円規模（目安）。",
    after:
      "After: 地域系・全国系新電力から相見積を取得し固定2年で切替検討／工場・乾燥室のLED化（県補助＋SII併用を検討）／シャトル窯の断熱・運転スケジュール最適化＋排熱活用／コンプレッサー集中管理＋エア漏れ対策／屋根太陽光の自家消費（小規模オンサイトPPA）。",
    result:
      "Result: 年間電気代 約6,500万円 → 約5,500万円（▲約15%、▲1,000万円・目安）／契約電力 400→360kW／投資回収 補助金後 2年前後（目安）。5年累計では ▲1,000万円×5年＝▲5,000万円（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const costFactors = [
  {
    label: "焼成炉（電気炉・ガス炉）の高温熱負荷集中",
    detail:
      "窯業・陶磁器工場の電気代を最も押し上げるのは焼成炉の高温熱負荷です。電気炉採用ラインでは昇温・保持に直接大量の電力を消費し、ガス炉ラインでも送風機・搬送・排ガス処理・冷却に電力を要します。トンネル窯は連続運転で恒常負荷が、シャトル窯はバッチごとの昇降温でピーク負荷が発生します。窯の断熱強化・排熱回収・運転スケジュール最適化が電力単価最適化の主戦場です。電気とガスのハイブリッド運用の最適配分も論点となります（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "乾燥・粉砕成形の用役負荷",
    detail:
      "焼成前後の乾燥工程は連続稼働で送風・加熱の用役電力が大きく、原料の粉砕・調合・混練は大型モーター負荷が中心です。成形（プレス・鋳込み）や施釉も含め、これら工程は熱とモーター動力の両面で電力を消費します。乾燥は焼成炉の排熱を回収して活用する余地があり、粉砕・成形の高効率モーター更新やインバータ化で改善余地があります。これらは運転条件の自由度が一定あるため、運用改善の効果が出やすい領域です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    label: "中部電力エリアの燃調感応度（中位）",
    detail:
      "中部電力エリアはLNG火力を主力に石炭も併用するため、火力依存度が相対的に高く、燃料費調整額の感応度は中位とされるのがエリア固有の特徴です。これは燃料高騰局面で単価が押し上げられやすいことを意味し、熱負荷が大きく電力原単位の高い窯業工場ではコスト影響が拡大します。浜岡原発が停止中で火力比率の高い状態が続いているため、燃料市況の変動を経営計画に織り込む必要があります。固定vs市場連動の選択は使用パターン次第で一概には言えません。",
  },
  {
    label: "多品種・小ロット製造に伴うデマンド変動",
    detail:
      "美濃焼・タイル・ファインセラミックスは多品種小ロット生産が中心で、品目切替のたびに窯の昇降温・治具交換・乾燥条件の調整が発生し、焼成炉・乾燥設備の稼働が断続的に増減します。これによりデマンド（kW）のピークが発生しやすく、契約電力の過大設定につながりがちです。ピーク需要の平準化・生産スケジュール調整・蓄電池併用が基本料金（契約kW）削減に直結します。連続窯とバッチ窯の運転調整も平準化の鍵です。",
  },
  {
    label: "再エネ賦課金とサプライチェーンのCN要請",
    detail:
      "再エネ賦課金は2026年度4.18円/kWh（確定）で、年々の制度動向を経営計画に織り込む必要があります。加えてファインセラミックスや部品メーカーではグローバル供給網からScope3 GHG排出削減要請が強まり、窯業事業者でも再エネ電源調達（PPA・非化石証書）が求められる場面が増えています。窯業は屋根面積を確保しやすく自家消費PPAの素地がある一方、焼成の熱負荷が大きく追加性のある調達を求められる場合はPPA等が選択肢となります。本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const subsidies = [
  {
    name: "岐阜県 産業・脱炭素関連補助（岐阜県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入、窯業・地場産業振興",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的整理",
    note: "県独自の産業振興・脱炭素政策（美濃焼・タイル等の地場窯業の基盤強化を含む）に基づく補助メニュー。窯業の高効率焼成炉・乾燥設備・断熱・高効率モーター・LED・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新公募は岐阜県の公式窓口で確認してください。本記載は特定の電力会社・契約形態を推奨するものではありません（出典: 岐阜県 産業政策から整理）。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率焼成炉・乾燥設備・断熱・高効率モーター・コンプレッサー・LED等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "窯業工場の焼成炉断熱更新・排熱回収・乾燥設備更新・高効率モーター更新・全館LED化などで活用しやすい主力補助です。岐阜県内のタイル・陶磁器・ファインセラミックスの更新案件でも申請対象となり得ます。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください（出典: SIIから整理）。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "平屋・大屋根の建屋が多く屋根面積を確保しやすい窯業・陶磁器工場で活用が想定されます。ファインセラミックス等のサプライチェーンのCN要請とリンクして、自家消費PPA・コーポレートPPAの検討材料になります。焼成の熱負荷が大きく日中消費が多い点は自家消費との相性で有利に働き得ます。最新の公募要件は所管窓口で確認してください。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率焼成炉・ヒートポンプ・燃料転換・排熱回収・PPA関連設備の取得で活用可能性があります。所管: 経産省・国税庁。工場新増設・更新時に他補助と組合せて検討するのが定石です。適用要件は年度ごとに変わるため事前相談が望まれます（制度活用の可否は個別要件によります）。",
  },
  {
    name: "中部経済産業局 サプライチェーン強靱化・脱炭素関連補助",
    target: "窯業・セラミックスの生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "地場産業の高度化やGX対応を後押しする国の公募メニューが年度ごとに用意され、中部経済産業局が窓口となります。岐阜の美濃焼・タイル・ファインセラミックスの高効率化・脱炭素投資が対象となり得ます。年度ごとの公募タイミング把握が重要で、本ページの「補助金スケジュールと採択率」もあわせて確認してください。採否は公募ごとの審査によります。",
  },
];

const industryProfile = [
  {
    label: "多治見市 — 美濃焼・タイルの中核",
    detail:
      "多治見市は美濃焼・タイルの中核として、陶磁器メーカー・タイルメーカー・施釉・絵付・流通までを含む窯業事業所が集中するエリアです。トンネル窯・シャトル窯を抱える高圧・特別高圧の窯業工場が多く、焼成・乾燥・粉砕を含む熱負荷が大きい点が共通します。多品種製造のためデマンド変動も大きく、契約電力最適化の余地があります。",
  },
  {
    label: "土岐市 — タイル・衛生陶器・食器の集積",
    detail:
      "土岐市はタイル・衛生陶器・食器の製造が集積するエリアで、大型のトンネル窯を擁する工場が立地します。連続焼成の恒常負荷に加え、大型乾燥ライン・原料処理の用役負荷が電力構造の柱です。生産規模の大きい事業所では特別高圧契約も見られ、焼成炉の運用最適化と契約見直しを組合せた電気代最適化の余地が見込まれます。",
  },
  {
    label: "瑞浪市 — 陶磁器・タイル・原料の集積",
    detail:
      "瑞浪市近郊は陶磁器・タイル・窯業原料の事業所が立地するエリアです。多品種小ロットの製造ラインを抱える中小〜中堅事業所が多く、品目切替に伴う窯の昇降温・乾燥条件調整のための焼成・乾燥負荷が断続的に発生します。高圧契約が中心で、設備更新（焼成炉断熱・排熱回収）と契約見直しを組合せた最適化の余地があります。",
  },
  {
    label: "可児市・近郊 — ファインセラミックス・関連産業",
    detail:
      "可児市・近郊には食器・タイルに加え、電子部品・構造材向けのファインセラミックスや関連産業の事業所が立地します。ファインセラミックスは高純度・高温焼成のため電気炉採用ラインが多く、電力負荷が特に大きい点が特徴です。グローバル供給網に組み込まれる事業所ではCN要請への対応も進み、再エネ調達の検討が広がっています。",
  },
  {
    label: "東濃地域全域 — 千年の窯業を起源とする産業基盤",
    detail:
      "岐阜の窯業は東濃地域を中心に千年以上にわたって蓄積されてきた産業基盤の上に成り立っています。原料採掘から成形・施釉・焼成・流通・人材育成までの裾野が地域内で完結しやすく、美濃焼・タイル・ファインセラミックスの集積を支えるエコシステムを形成しています。これらの事業所群は、中部電力エリアのLNG火力中心の電源構成のもとで電力を調達しています。",
  },
];

const switchingReality = [
  {
    label: "中部エリアの新電力浸透度",
    detail:
      "中部電力エリアの新電力比率は、産業用需要の厚みを背景に、全国でも一定の浸透度を持つとされます（出典: 資源エネ庁・電力ガス取引監視等委員会から整理）。火力依存度が相対的に高く燃調感応度が中位のため、切替メリットは固定単価による安定性・燃調条件・再エネ付加価値で判断する必要があります。年間使用量の大きい窯業・陶磁器工場では競争入札による相見積が有効ですが、最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の全国的な高騰局面では、中部でも市場連動採用の工場で単価上昇を経験し、固定回帰の動きが見られました。中部は火力依存度が高く燃料市況の影響を受けやすいため、長期固定（2〜5年）で単価を安定させる選択が検討されています。熱負荷が大きく電力原単位の高い窯業工場では、単価変動のコスト影響が拡大するため固定化のメリットが相対的に大きくなります。固定か市場連動かは各社のリスク許容度によって異なります。",
  },
  {
    label: "中部電力ミライズ継続のメリット・デメリット",
    detail:
      "メリット: 災害時復旧体制・大口需要家向けエネルギーマネジメント支援・LNG火力中心の安定供給。デメリット: 新電力との比較で単価がやや高めになる局面、燃料費調整額の条件差。中部は火力依存度が高く燃調が変動しやすいため、燃調条件の比較が継続・切替判断の重要な論点になります。いずれにせよ本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（岐阜×窯業固有）",
    detail:
      "①窯業・連続焼成工場への供給実績、②非化石証書／再エネトラッキング付メニュー（ファインセラミックス等のCN対応）、③長期固定（2〜5年）の単価安定性、④燃調条件（中部は火力依存度が高く感応度中位のため条件差を確認）、⑤BCP対応（停電時の窯の保護・再稼働支援）の5点が重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "ファインセラミックス等のサプライチェーンのCN要請と歩調を合わせ、屋根オンサイトPPA（自家消費）／オフサイトPPA（県内・中部圏の太陽光案件）／コーポレートPPAが検討材料になります。窯業工場は平屋・大屋根が多く屋根面積を確保しやすい一方、焼成の熱負荷が大きく日中消費が多いため自家消費との相性を見極める必要があります。導入可否は屋根面積・契約期間・系統条件で変わり、自社の屋根条件と調達目標に応じた検討が前提です。",
  },
];

const energySaving = [
  {
    label: "焼成炉の断熱強化＋排熱回収",
    detail:
      "焼成炉（トンネル窯・シャトル窯）は炉壁・台車の断熱強化により放熱ロスを抑え、排ガス・冷却ゾーンの排熱を乾燥工程や燃焼用空気の予熱に回収することで電力・燃料を削減できます。断熱と排熱回収を組合せると熱負荷の大きい窯業では効果が大きく、用役エネルギー▲10〜20%程度が見込めます。SII補助＋県補助の併用で投資回収 3〜4年が目安です。効果は炉型・運転条件によって変動します。",
  },
  {
    label: "電気炉・ガス炉のハイブリッド運用と昇温最適化",
    detail:
      "電気炉とガス炉を併用するラインでは、燃料価格と電力単価の相対関係を踏まえた運転配分の最適化が有効です。電気炉の昇温プロファイル・保持時間・運転スケジュールを品質を維持しつつ見直すことで、ピーク電力と総使用量を抑える余地があります。複数バッチのスケジュール統合や連続窯とバッチ窯の運転調整も電力削減に寄与します。設備更新（高効率炉）と運用改善を組合せると効果的で、投資回収は条件により3〜5年程度が目安です。",
  },
  {
    label: "高効率モーター・コンプレッサー更新＋集中管理",
    detail:
      "粉砕機・送風機・成形プレス・コンプレッサー等のモーター負荷は、高効率インバータ機への更新とエア漏れ・過剰圧力設定の見直しで電力▲15〜25%が見込めます。窯業工場では原料処理・搬送・施釉など動力用途が多く、改善効果が出やすい領域です。SII補助1/2の活用で投資回収 1.5〜2.5年が目安。実際の効果は既設機の効率と運用状況に左右されます。",
  },
  {
    label: "乾燥工程の温度・送風最適化",
    detail:
      "乾燥工程は焼成炉の排熱回収による予熱、送風量・温度プロファイルの最適化、乾燥室の断熱・気密の見直しで、品質を維持しつつ用役電力を抑えられます。乾燥は焼成と並ぶ熱負荷工程であり、排熱の有効活用が電力・燃料の双方削減につながります。窯の運転と乾燥の連携最適化が重要で、投資回収は設備により2〜4年程度が目安です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "平屋・大屋根の建屋が多い窯業・陶磁器工場では、屋根太陽光の自家消費PPAが現実的な打ち手となり得ます。焼成・乾燥の熱負荷で日中消費が多いため自家消費との相性がよく、初期投資ゼロで再エネ調達と電気代単価下げの両立が期待できます。あわせてBEMSで需要を見える化し、焼成ピークの平準化・蓄電池併用でデマンド（契約kW）を抑えることで基本料金を削減できます。中部の系統特性も踏まえ、本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "焼成炉（電気炉・ガス炉）の断熱・排熱回収の改善余地を把握しているか",
  "焼成・乾燥・粉砕成形の年間使用kWhを工程別に把握しているか",
  "排熱回収（焼成炉→乾燥・予熱）を活用できる余地があるか",
  "燃料費調整額の条件（中部は火力依存度が高く感応度中位）を契約書で確認したか",
  "中部電力ミライズの現行単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積を取得したか",
  "ファインセラミックス等のサプライチェーンからのScope2/Scope3・CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "岐阜県・SII・中部経済産業局補助の併用可否を設備別に整理したか",
  "多品種切替に伴う窯の昇降温のデマンド変動をピーク平準化・蓄電池で抑える余地はあるか",
  "停電時の窯の保護・再稼働（自家発・蓄電池・連系条件）のBCP体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "岐阜県の窯業・陶磁器工場は中部電力エリア固有の単価事情がありますか？",
    answer:
      "中部電力エリアはLNG火力（碧南・川越・知多等）を主力に石炭も併用し、火力依存度が相対的に高いため、燃料費調整額の感応度が中位とされるのがエリア固有の特徴です。浜岡原発が停止中で火力比率の高い状態が続いており、燃料市況や為替の変動が単価に反映されやすい傾向があります。窯業工場は焼成炉の熱負荷で電力原単位が高く年間使用量が大きいため、単価変動のコスト影響が拡大しやすい点に留意が必要です。なお本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 中部電力 単価実績・エネ庁から整理）。",
  },
  {
    question: "窯業・陶磁器工場で電力消費が最も大きい設備はどこですか？",
    answer:
      "一般に焼成炉（トンネル窯・シャトル窯）が電力消費の中心とされます。電気炉採用ラインでは昇温・保持に直接大量の電力を消費し、ガス炉ラインでも送風機・搬送・排ガス処理・冷却に電力を要します。次いで乾燥工程、原料の粉砕・調合、成形プレス、施釉ラインが続きます。焼成と乾燥の熱負荷が工場全体の電力消費の柱となるため、炉の断熱強化・排熱回収・運転スケジュール最適化が電力単価最適化の主戦場です（出典: 業界団体・省エネ事例から整理）。",
  },
  {
    question: "美濃焼・タイル・ファインセラミックスの工場で電気代を下げる打ち手は何ですか？",
    answer:
      "多品種小ロット製造では品目切替に伴う窯の昇降温・治具交換・乾燥条件調整で焼成・乾燥負荷が断続的に発生し、デマンド変動が大きくなりがちです。生産スケジュールの調整やピーク需要の平準化、連続窯とバッチ窯の運転調整、蓄電池併用で契約電力（kW）を抑えると基本料金が下がります。あわせて焼成炉の断熱強化・排熱回収、高効率モーター更新、乾燥の最適化、LED化が有効です。岐阜県補助・SII補助・PPAの組合せで投資回収を短縮できる場合があります。最適な組合せは規模・工程・立地によって異なります。",
  },
  {
    question: "岐阜の窯業工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "窯業・陶磁器工場は平屋・大屋根の建屋が多く屋根面積を確保しやすいため、現実的な選択肢になり得ます。初期投資ゼロでPPA事業者が設備を所有し、自社は一定期間の電力購入契約を結ぶ形が標準で、再エネ調達と電気代単価下げの両立が期待できます。焼成・乾燥の熱負荷で日中消費が多いため自家消費との相性がよい点も有利です。導入可否は屋根面積・契約期間・系統条件・建屋構造で変わるため、複数事業者の試算比較が前提となります。本回答は一般的な整理であり、個別案件の成立を保証するものではありません。",
  },
  {
    question: "再エネ賦課金は窯業・陶磁器工場の電気代にどれくらい影響しますか？",
    answer:
      "再エネ賦課金は2026年度4.18円/kWh（確定）です。年間使用量2,600万kWh級の大規模窯業・陶磁器工場では年約1.09億円規模の負担となります。電力多消費業種の一部は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い焼成炉中心の窯業工場では申請を検討する価値があります。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（PPA）・減免申請の組合せが有効です。減免の可否は要件審査によります（出典: エネ庁から整理）。",
  },
  {
    question: "岐阜の窯業工場でどの新電力が実績が多いですか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と地域系・ガス系新電力が主要なプレイヤーです。中部エリアは火力依存度が相対的に高く燃調感応度が中位のため、燃調条件・契約期間・非化石証書付の有無を含めた総合比較が重要になります。特定企業の供給実績は入札情報公開やIR・業界紙の範囲で確認可能です。いずれにせよ本回答は実情の整理を目的としたものです。",
  },
  {
    question: "岐阜県の補助金は窯業・陶磁器工場でも使えますか？",
    answer:
      "使える可能性があります。岐阜県は美濃焼・タイル等の地場窯業の基盤強化を含む産業振興・脱炭素政策を持ち、中小・中堅製造業の省エネ・脱炭素設備導入を後押しする補助メニューが整備される傾向があります。高効率焼成炉・乾燥設備・断熱・高効率モーター・LED・BEMSなど対象設備は幅広く、国のSII補助との重複可否は事業区分・設備別に確認が必要です。最新公募状況は岐阜県の公式窓口で確認してください（2026年度時点）。対象可否は事業区分により判断されます。",
  },
  {
    question: "停電時の窯の保護は新電力切替後も確保できますか？",
    answer:
      "物理的な復旧作業は中部電力パワーグリッド（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間は同じです。ただし窯業工場では停電時に焼成炉の急冷による窯・製品の損傷リスクがあり、トンネル窯の保護・再稼働には多大なエネルギーと時間を要するため、自家発・蓄電池・無停電電源（UPS）の体制を自社で確保することが本質的に重要です。停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発連系条件を必ず確認してください。停電対策の中心は自社側の電源確保にあります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中部電力（法人向け料金・系統情報）", url: "https://www.chuden.co.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "岐阜県 産業政策・地場産業振興", url: "https://www.pref.gifu.lg.jp/" },
  { name: "経済産業省（産業政策・サプライチェーン強靱化）", url: "https://www.meti.go.jp/" },
  { name: "新エネルギー・産業技術総合開発機構（NEDO 省エネ・脱炭素技術）", url: "https://www.nedo.go.jp/" },
];

export default function GifuCeramicsElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/gifu-ceramics-electricity-cost"
        datePublished="2026-06-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "岐阜県の窯業・陶磁器工場の電気料金", url: "https://simulator.eic-jp.org/gifu-ceramics-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">岐阜県の窯業・陶磁器工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            岐阜県の窯業・陶磁器工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            岐阜県の多治見市・土岐市・瑞浪市・可児市を中心とする東濃地域は、美濃焼（陶磁器）・タイル・ファインセラミックスの一大産地です。本ページでは「岐阜県 × 窯業・陶磁器製造業」というクロス領域に絞り、中部電力エリア固有の単価事情（LNG火力依存で燃調感応度は中位）と、焼成炉（電気炉・ガス炉）／乾燥／粉砕成形の熱負荷プロファイル、契約最適化、補助金・PPA活用までを実務目線で整理します。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-11" updatedAt="2026-06-11" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>岐阜県の窯業・陶磁器産業集積（多治見・土岐・瑞浪・可児）の電力プロファイル</li>
              <li>大規模タイル・陶磁器／中規模窯業／中小窯業のBefore/After代表シナリオ3件</li>
              <li>中部電力エリアの単価水準と燃調感応度（LNG火力依存で中位）</li>
              <li>ファインセラミックス等のCN要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>岐阜×窯業に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「岐阜 × 窯業」のクロス領域に特化したガイドです。岐阜県全体の文脈は{" "}
            <Link href="/gifu-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              岐阜県の法人電気料金ガイド
            </Link>
            、業種一般としての窯業・陶磁器工場全体は{" "}
            <Link href="/ceramics-pottery-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              窯業・陶磁器工場の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岐阜県の窯業・陶磁器産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県は東濃地域を中心に千年以上の窯業の歴史を持つ陶磁器・タイルの集積地です。美濃焼・タイル・衛生陶器・ファインセラミックスまでを含む工場群が多治見・土岐・瑞浪・可児等に広がり、トンネル窯・シャトル窯を抱える高圧・特別高圧の窯業工場が多数立地しています。
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
              岐阜県全体の文脈は{" "}
              <Link href="/gifu-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                岐阜県の法人電気料金ガイド
              </Link>
              、中部電力エリア全体は{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中部電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/ceramics-pottery-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                窯業・陶磁器工場の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中部電力エリアの主要電力会社・新電力（岐阜×窯業での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県内の窯業・陶磁器工場は、中部電力ミライズに加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給対象としています。中部は火力依存度が相対的に高く燃調感応度が中位のため、固定単価による安定性や再エネ付加価値で選択を検討する局面が増えています。なお本セクションは各プレイヤーの位置づけを中立的に整理したものです。
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
              中部電力エリアの料金水準と窯業・陶磁器工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（中部はLNG火力依存で中位）、再エネ賦課金の累積負担を、窯業・陶磁器工場の代表的な契約タイプ別に整理します。中部固有の火力中心・燃調中位の特性を踏まえた契約戦略が経営判断の中心となります。
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
              規模別代表シナリオ3件 — 大規模タイル・陶磁器／中規模窯業／中小窯業（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県内の代表的な3規模で、契約見直し＋設備対策＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリング・窯業省エネ事例等から再構成した代表シナリオで、数値は目安レンジです。実際の効果は各社の設備・運用条件で変わります。
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
              <Link href="/ceramics-pottery-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">窯業・陶磁器工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岐阜×窯業固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜の窯業・陶磁器工場の電気代は、焼成炉の高温熱負荷・乾燥／粉砕成形の用役負荷・中部エリアの燃調感応度（中位）・多品種切替のデマンド変動・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 岐阜県・国・経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜県の産業・脱炭素補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、中部経済産業局のサプライチェーン強靱化補助の5層を組合せ、窯業・陶磁器の更新投資の回収を1〜2年短縮するのが定石です。なお各制度の対象・採否は公募ごとの要件審査によります。
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
              主要拠点／集積地の電力プロファイル（多治見／土岐／瑞浪／可児・近郊）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜の窯業サプライチェーンは、多治見市の美濃焼・タイル中核を中心に、土岐市のタイル・衛生陶器・食器集積、瑞浪市の陶磁器・タイル・原料、可児市・近郊のファインセラミックス・関連産業、東濃地域全域の千年の窯業を起源とする産業基盤という構造です。
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
              電力会社切替の実情 — 中部電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部は火力依存度が高く燃調が変動しやすいこと、市場連動からの固定回帰、ファインセラミックス等のCN要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
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
              岐阜×窯業の省エネ・自家消費事例（焼成炉断熱・排熱回収／電気炉ガス炉運用／モーター／乾燥／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              窯業・陶磁器工場の省エネは、焼成炉の断熱強化＋排熱回収、電気炉・ガス炉のハイブリッド運用と昇温最適化、高効率モーター・コンプレッサー更新、乾燥工程の温度・送風最適化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模・中規模・中小いずれでも投資回収2〜5年で実現可能なメニューが揃っていますが、優先順位は自社の負荷構造により異なります。
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
              岐阜×窯業 契約見直しチェックリスト（12項目）
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
              シミュレーターで岐阜×窯業の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岐阜の窯業・陶磁器工場は、焼成炉の高温熱負荷・乾燥／粉砕成形の用役負荷・ファインセラミックス等のCN要請など複合リスクを抱えます。中部は火力依存度が高く燃調感応度が中位という特性もあるため、シミュレーターで自社条件の上振れ幅を試算し、固定プラン・オンサイトPPA・省エネ投資のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約13〜15%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-11"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/gifu-business-electricity-cost", title: "岐阜県の法人電気料金ガイド（地域一般）", description: "岐阜県全体の電力事情・中部電力エリア・補助金。" },
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情", description: "中部エリアの料金体系・LNG依存・燃調感応度。" },
              { href: "/ceramics-pottery-electricity-cost-review", title: "窯業・陶磁器工場の電気料金見直し（業種一般）", description: "焼成炉・乾燥・成形の熱負荷最適化。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
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
              { href: "/onsite-vs-offsite-ppa", title: "オンサイト屋根PPA活用", description: "屋根面積を活かす自家消費PPA。" },
              { href: "/electricity-cost-reduction-action-map", title: "電気代削減アクションマップ", description: "削減施策の全体像を地図化。" },
              { href: "/demand-suppression-effectiveness", title: "デマンド抑制の効果", description: "契約電力（kW）削減の打ち手と効果。" },
            ]}
          />

          <ContentCta
            heading="岐阜の窯業・陶磁器工場の電気代リスクを自社条件で試算する"
            description="大規模タイル・陶磁器・中規模窯業・中小窯業いずれも、中部電力エリア・焼成炉の熱負荷・乾燥／粉砕成形・ファインセラミックス等のCN要請を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン・オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="岐阜の窯業・陶磁器工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模タイル・陶磁器・中規模窯業・中小窯業いずれも、焼成炉（電気炉・ガス炉）の熱負荷・乾燥・粉砕成形の規模感とファインセラミックス等のCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で岐阜県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
