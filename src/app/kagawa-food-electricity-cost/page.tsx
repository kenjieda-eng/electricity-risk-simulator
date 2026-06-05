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
  "香川県の食品工場の電気料金完全ガイド｜冷凍麺・調味料・製粉の讃岐フード集積と四国電力";
const pageDescription =
  "香川県の食品製造業に特化。冷凍さぬきうどん・冷凍麺、小豆島の醤油・調味料、製粉、冷凍食品の集積を核に、蒸練・乾燥・急速凍結・冷凍冷蔵の電力プロファイル、四国電力エリアの単価事情（伊方原発再稼働の影響）、契約最適化、補助金・PPA活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "香川県 食品工場 電気料金",
    "冷凍うどん 電気代",
    "小豆島 醤油 調味料 電力",
    "四国電力 高圧 食品",
    "急速凍結 製粉 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kagawa-food-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kagawa-food-electricity-cost",
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
    label: "香川県の食品産業集積 — 讃岐フードと瀬戸内流通ハブを核とする裾野",
    detail:
      "香川県は『うどん県』として全国に知られる讃岐うどんの本拠地であり、冷凍さぬきうどん・冷凍麺の製造が全国流通の核となっています。加えて小豆島の醤油・佃煮・調味料（諸味発酵・加熱工程）、製粉、冷凍食品・惣菜の製造が県内各地に分布し、瀬戸内海を介した食品流通ハブの機能を担います。高松市・坂出市・丸亀市・三豊市・小豆島町などに中小〜中堅の食品工場が点在し、高圧契約を中心とする電力需要家が幅広く立地する構造です。ここで整理する数値は業界団体・経産省/エネ庁統計・自治体統計から整理した一般的傾向です（出典: 農林水産省 食品産業統計・香川県統計）。",
  },
  {
    label: "冷凍麺・冷凍食品工場の電力プロファイル — 蒸練・茹で・急速凍結・冷凍冷蔵",
    detail:
      "冷凍さぬきうどん・冷凍麺の製造では、製麺（ミキシング・圧延）→茹で・蒸練→冷却→急速凍結（ブラストフリーザー／スパイラルフリーザー）→冷凍冷蔵保管→包装という工程で電力が連続的に消費されます。とりわけ急速凍結と冷凍冷蔵保管はコンプレッサー（冷凍機）が24時間稼働するため、工場全体の電力消費に占める比率が高くなりやすいのが特徴です。茹で・蒸練工程は蒸気（ボイラー）と電力の双方を使い、夏季は冷凍負荷の上昇が契約電力（kW）を押し上げる傾向があります。数値は業界団体・エネ庁統計から整理した目安であり、工場ごとに大きく異なります。",
  },
  {
    label: "小豆島の醤油・調味料工場の電力負荷 — 諸味発酵・加熱・充填",
    detail:
      "小豆島は醤油・佃煮・調味料の伝統的産地で、諸味（もろみ）の発酵管理、火入れ（加熱殺菌）、ろ過、充填・包装の各工程で電力を使用します。発酵タンクの温度管理、加熱工程の蒸気・電力、製品の冷却・保管、瓶詰・包装ラインの搬送・照明が主な負荷です。中小規模の蔵元・メーカーが多く、高圧または低圧の契約が混在し、設備更新と契約見直しを組み合わせた電気代最適化の余地が広いとされます。あくまで一般的傾向の整理です。",
  },
  {
    label: "製粉・惣菜工場の電力構造 — 粉砕・乾燥・搬送・包装",
    detail:
      "製粉工場では原料の粉砕（ロール製粉）・ふるい分け・空気搬送・集塵・包装が主な電力負荷で、モーター動力と搬送ブロワが連続稼働します。惣菜・冷凍食品工場では加熱調理（フライヤー・スチームコンベクション）、急速冷却、冷凍冷蔵、包装が中心です。讃岐の食品集積は『加熱（蒸練・茹で・火入れ・乾燥）』と『冷却（急速凍結・冷凍冷蔵）』という相反する熱需要が同一エリアに併存する点が特徴で、加熱の廃熱回収と冷凍の省エネが電気代最適化の両輪になります（出典: 農林水産省 食品産業の省エネ関連資料から整理）。",
  },
  {
    label: "四国電力エリアの系統と食品工場の相互依存 — 伊方原発再稼働の影響",
    detail:
      "香川県は四国電力エリアに属し、小売は四国電力、送配電は四国電力送配電が担います。四国エリアの電源構成は、伊方原発（愛媛県）の再稼働状況、瀬戸内の太陽光導入、火力・水力で構成されます。伊方原発の再稼働は電源構成と単価水準に影響する要素として継続的に注目されており、再稼働の稼働状況が燃料費調整額や卸市場（JEPX四国エリア）の価格形成にも波及し得ます。食品工場の高圧需要はエリア全体の中で安定的な基底需要を形成しており、系統側の電源事情と単価動向を踏まえた契約戦略が重要です。本記載は特定の電力会社・契約形態を推奨するものではありません（出典: 四国電力送配電 系統情報・エネ庁エネルギー基本計画から整理）。",
  },
];

const utilitiesList = [
  {
    name: "四国電力（小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "香川県内最大シェアの小売事業者。高松・坂出・丸亀・三豊・小豆島の食品工場の長期需要家を多数抱えます。高圧・特別高圧の標準メニューに加え、季節別・時間帯別の料金体系が整備され、固定単価型と燃料費調整連動型の双方を選べます。エリア内の災害復旧・安定供給の体制が大手取引の継続要因となる一方、改定局面では新電力との価格差が論点になります。なお本ガイドは中立的な情報整理を目的としています。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "四国エリアの高圧食品工場の競争入札における主要な対抗馬。固定単価メニュー（2〜5年契約）を中心に、年間数百万〜数千万kWhの案件で実績を積み上げています。近年は脱炭素対応として非化石証書付き・再エネトラッキング付きメニューの引合いも増えており、食品メーカーの環境配慮調達ニーズに対応する動きがあります。供給可能kWh枠の確保状況は時期により変動するため、契約満了前の早期着手が実務上のポイントです。",
  },
  {
    name: "四国・中四国地域系の新電力・ガス系電力",
    role: "地域系新電力",
    detail:
      "中四国エリアに供給網を持つ地域系新電力やガス系電力事業者が、地場の食品工場に対し電気・ガス・コージェネを含む総合最適提案を行うケースがあります。蒸気需要のある醤油・冷凍麺工場ではガス併用・熱電一体の提案が選択肢になり得ます。地域密着の運用支援を強みとする一方、供給メニューや実績は事業者ごとに異なるため、複数社の比較検討が前提です。",
  },
  {
    name: "再エネ特化型・PPA事業者（自然電力・オリックス・地場デベロッパー等）",
    role: "再エネ特化型／PPA",
    detail:
      "瀬戸内エリアは日照に恵まれ太陽光の適性が比較的高く、屋根オンサイトPPA・オフサイトPPA・コーポレートPPAの引合いが食品工場でも見られます。冷凍倉庫・製粉・包装棟の広い屋根面積を持つ工場では屋根オンサイトPPAの試算余地があり、初期投資ゼロで自家消費＋環境価値の取り込みを図る形が検討されています。追加性のある再エネ調達は食品メーカーの取引先要請（環境配慮）への対応手段にもなります。",
  },
  {
    name: "撤退・新規受付状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では全国的に一部新電力が新規受付停止・撤退に至り、四国エリアでも供給枠の逼迫が見られました。2024年以降は供給余力が徐々に回復しつつありますが、年間使用量の大きい高圧・特別高圧案件では供給可能kWh枠の確保が引き続き課題で、入札の早期着手（契約満了の6〜12ヶ月前から）が重要です。市況は流動的なため、最新の供給状況を複数社に確認したうえで判断する必要があります。",
  },
  {
    name: "JEPX四国エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX四国エリアのスポット価格は、伊方原発の稼働状況・瀬戸内の太陽光出力・需給バランスの影響を受けて変動します。昼間の太陽光出力が高い時間帯は価格が低下しやすく、夕方・夜間や猛暑・厳寒のピーク時間帯では上昇する傾向があります。市場連動型契約の食品工場では2022〜2023年に単価上昇を経験し、現在は固定回帰の動きも見られます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "四国電力エリアの高圧 — 食品工場の単価水準",
    detail:
      "中規模以上の食品工場（500kW〜2,000kW級）の高圧電力量料金は標準メニューで概ね17〜21円/kWh＋調整項目が一つの目安です。これに燃料費調整額（年度・四半期で変動）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は概ね24〜29円/kWhレンジで推移します。新電力の競争入札では標準比1〜3円/kWh程度の差が出るケースがあり、年間使用量の大きい冷凍麺・冷凍食品工場では金額インパクトが大きくなります。数値は業界団体・経産省/エネ庁統計から整理した目安レンジで、契約条件により変動します。",
  },
  {
    label: "特別高圧 — 大規模冷凍麺・冷凍食品工場の単価",
    detail:
      "大規模な冷凍麺・冷凍食品の製造拠点（2,000kW超）の特別高圧電力量料金は標準メニューで概ね16〜19円/kWh＋調整項目が目安です。再エネ賦課金（2026年度4.18円/kWh・確定）と燃料費調整額を加えた実質単価は22〜27円/kWhレンジになります。急速凍結・冷凍冷蔵の連続稼働により負荷率が比較的高く、固定単価の長期契約や非化石証書付メニューの選択がコスト安定化の論点になります。あくまで目安であり、実際の単価は契約・季節・時間帯で変動します。",
  },
  {
    label: "燃料費調整額の感応度 — 四国電力エリア固有",
    detail:
      "四国電力エリアの電源構成は、伊方原発の稼働状況によって火力依存度が変動するため、燃料費調整額の感応度も原発稼働の前提で変わり得ます。原発稼働が安定している局面では火力燃料への依存度が下がり、燃調の変動が相対的に抑えられる方向に働く一方、稼働が縮小する局面では火力（LNG・石炭）への依存度が上がり、為替・燃料スポット価格への感応度が高まります。年間使用量の大きい食品工場では燃調の変動が年間コストを左右するため、上限有無の確認が重要です（出典: 四国電力 単価公表値・エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。年間使用量1,000万kWh級の食品工場では賦課金だけで年約4,180万円規模の負担になります。電力多消費の事業所は減免制度（賦課金の減免）の対象となる可能性があり、冷凍冷蔵・急速凍結を抱える電気使用量原単位の高い工場は申請要件の確認を検討する価値があります。賦課金は全国一律で電力会社を問わず課されるため、本記載は特定の電力会社・契約形態を推奨するものではありません（出典: 資源エネルギー庁 再エネ賦課金関連資料から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模冷凍麺・冷凍食品工場（特別高圧〜高圧 6,000kW、年間 4,000万kWh）— 代表シナリオ",
    before:
      "Before: 香川県内の大規模冷凍さぬきうどん・冷凍食品工場A（代表シナリオ）。製麺・茹で・急速凍結・冷凍冷蔵・包装を一貫生産。急速凍結（ブラストフリーザー）と大型冷凍冷蔵倉庫が24時間稼働し、夏季の冷凍負荷で契約電力が押し上げられる。四国電力の特別高圧〜高圧契約＋燃調連動。年間電気代 約11億円規模（目安）。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を検討（非化石証書付の選択肢含む）／冷凍機の自然冷媒（CO2・アンモニア）＋インバータ化／蓄熱（氷蓄熱）による夜間移行とピークシフト／茹で・蒸練工程の廃熱回収を前処理温水に再利用／屋根オンサイトPPAの試算／BEMS・需給予測による冷凍デマンド最適化。",
    result:
      "Result: 年間電気代 約11億円 → 約9.2億円（▲約16%、▲1.8億円・目安レンジ）／契約電力 6,000→5,400kW（目安）／冷凍機更新の投資回収は補助金活用で3〜4年前後（目安）。数値は代表シナリオの目安であり、実際の効果は工場条件で変動します。",
  },
  {
    title: "業種2: 中規模調味料・製粉工場（高圧 1,500kW、年間 1,100万kWh）— 代表シナリオ",
    before:
      "Before: 小豆島・坂出エリアの中規模調味料（醤油・佃煮）／製粉工場B（代表シナリオ）。諸味発酵の温度管理、火入れ（加熱）、ろ過・充填・包装、製粉ラインの粉砕・搬送が稼働。四国電力の業務用高圧＋燃調連動で、燃調上昇局面に請求が増加。年間電気代 約3.0億円規模（目安）。",
    after:
      "After: 地域系・全国系新電力に固定2年・燃調上限ありで切替を検討／加熱（火入れ）工程の廃熱回収＋断熱強化／コンプレッサーの集中管理＋エア漏れ対策／製粉モーターのインバータ更新／工場全館LED化（SII補助＋県補助の併用検討、投資3,000万円規模）／屋根太陽光の自家消費試算。",
    result:
      "Result: 年間電気代 約3.0億円 → 約2.5億円（▲約17%、▲5,000万円・目安レンジ）／契約電力 1,500→1,350kW（目安）／設備更新の投資回収は補助金後2〜3年前後（目安）。代表シナリオの目安であり、実際の効果は工場条件で変動します。",
  },
  {
    title: "業種3: 中小食品工場（高圧 500kW、年間 350万kWh）— 代表シナリオ",
    before:
      "Before: 高松・丸亀エリアの中小食品（惣菜・冷凍食品・佃煮等）工場C（代表シナリオ・従業員60名規模）。加熱調理・急速冷却・冷凍冷蔵・包装が中心。四国電力の業務用高圧＋燃調連動で、夏季の冷凍負荷増と燃調影響で前年比増。年間電気代 約9,000万円規模（目安）。",
    after:
      "After: 複数新電力から相見積を取得し固定2年で切替を検討／冷凍冷蔵庫の自然冷媒＋インバータ更新／急速冷却の運用見直し＋デマンド監視／LED化＋高効率コンプレッサー（SII補助1/2活用、投資1,200万円規模）／加熱工程の廃熱を給湯に再利用。",
    result:
      "Result: 年間電気代 約9,000万円 → 約7,400万円（▲約18%、▲1,600万円・目安レンジ）／契約電力 500→450kW（目安）／投資回収は補助金後2年前後（目安）。代表シナリオの目安であり、実際の効果は工場条件で変動します。",
  },
];

const costFactors = [
  {
    label: "冷凍冷蔵・急速凍結の連続負荷",
    detail:
      "冷凍さぬきうどん・冷凍食品工場では、急速凍結（ブラストフリーザー／スパイラルフリーザー）と冷凍冷蔵保管のコンプレッサーが24時間稼働し、工場全体の電力消費に占める比率が高くなりやすいとされます。夏季は外気温上昇で冷凍機の負荷が増し、契約電力（kW）とデマンド料金（基本料金）を押し上げる主要因になります。冷凍機の自然冷媒化・インバータ化・蓄熱（氷蓄熱）によるピークシフトが、単価最適化の主戦場です（出典: 農林水産省・エネ庁の食品冷凍関連省エネ資料から整理）。",
  },
  {
    label: "加熱工程（茹で・蒸練・火入れ・乾燥）の熱需要",
    detail:
      "讃岐の食品集積は、茹で・蒸練（冷凍麺）、火入れ（醤油・調味料）、乾燥（製粉・乾麺）といった加熱工程と、急速凍結・冷凍冷蔵という冷却工程が併存します。加熱は蒸気（ボイラー）と電力の双方を使い、加熱で生じる廃熱を前処理や給湯に再利用できれば全体エネルギーを最適化できます。加熱と冷却が同一工場内にあるため、廃熱回収とヒートポンプ活用の余地が比較的大きい点が特徴です。",
  },
  {
    label: "四国電力エリアの燃調感応度と伊方原発再稼働",
    detail:
      "四国電力エリアの燃料費調整額は、伊方原発の稼働状況に左右されます。原発稼働が安定している局面では火力燃料への依存が相対的に下がる一方、稼働縮小局面では火力（LNG・石炭）依存度が上がり、為替（円安）と燃料スポット価格への感応度が高まります。年間使用量の大きい食品工場では、燃調の変動を見据えた固定vs市場連動の選択が経営判断の中心になります。本記載は一般的傾向の整理です。",
  },
  {
    label: "夏季ピークと負荷率の季節変動",
    detail:
      "冷凍負荷が増す夏季（7〜9月）に最大デマンドが発生しやすく、この時期の契約電力が年間の基本料金を決めるため、夏季のピークカット（蓄熱・運用分散・冷凍機の高効率化）が基本料金削減に直結します。一方、加熱工程主体の調味料・製粉工場では季節変動のパターンが異なり、工程構成に応じたデマンド管理が必要です。負荷率の改善は基本料金単価の低減にもつながります。",
  },
  {
    label: "再エネ賦課金と取引先の環境配慮要請",
    detail:
      "再エネ賦課金（2026年度4.18円/kWh・確定）は全国一律で課され、電力多消費の食品工場では累積負担が大きくなります。加えて、量販店・外食・商社など取引先からの環境配慮（CO2削減・再エネ調達）要請が強まる傾向があり、再エネ電源調達（PPA・非化石証書）をコスト計画に織り込む必要が出ています。電気代単価そのものに加え、環境価値調達コストも経営計画の対象になります。",
  },
];

const subsidies = [
  {
    name: "香川県 産業政策・企業立地関連補助（香川県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入・企業立地",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の一般的枠組み",
    note: "県の産業政策・企業立地施策に基づく補助メニュー。食品工場の高効率冷凍機・コンプレッサー・LED・断熱・BEMS等が対象になり得ます。SII補助との併用可否は事業別に要確認。最新の公募・要件は香川県の公式窓口で確認してください。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率冷凍機・空調・LED・コンプレッサー・ヒートポンプ・廃熱回収等",
    rate: "中小1/2、大企業1/3、上限あり（先進事業等の区分による）",
    note: "食品工場の冷凍機更新・コンプレッサー高効率化・全館LED化・廃熱回収などで活用しやすい主力補助。急速凍結・冷凍冷蔵の自然冷媒＋インバータ化は省エネ効果が大きく、対象になりやすい設備です。公募時期・要件はSII公式で確認が必要です。",
  },
  {
    name: "需要家主導型再エネ・PPA支援関連補助",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "kWh定額または投資額の一定割合以内（事業による）",
    note: "瀬戸内の日照を活かした屋根オンサイトPPA・自家消費太陽光で活用が検討されます。冷凍倉庫・製粉・包装棟の広い屋根面積を持つ工場は試算余地があります。取引先の環境配慮要請への対応手段としても位置づけられます。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の一定割合の税額控除または特別償却（要件あり）",
    note: "高効率冷凍機・ヒートポンプ・PPA関連設備の取得で活用可能な場合があります。所管: 経産省・国税庁。設備更新計画と組み合わせて事前相談するのが定石です。要件は年度により変わるため最新情報の確認が必要です。",
  },
  {
    name: "食品産業の脱炭素・省エネ関連支援（農水省等）",
    target: "食品製造業の省エネ・脱炭素・生産プロセス改善",
    rate: "年度公募により1/2前後（事業区分による）",
    note: "農林水産省・関連団体による食品産業向けの省エネ・脱炭素支援が年度ごとに公募される場合があります。冷凍・加熱工程の高効率化や廃熱回収が対象になり得ます。公募タイミングの把握が重要です。",
  },
];

const industryProfile = [
  {
    label: "高松市・周辺 — 食品流通ハブと中小食品工場",
    detail:
      "県都・高松市は瀬戸内の食品流通ハブとして、惣菜・冷凍食品・調味料・製粉など中小〜中堅の食品工場が分布します。物流網と港湾を活かした集荷・出荷の利便性が高く、高圧契約の食品工場が幅広く立地。設備更新と新電力切替を組み合わせた電気代見直し余地が大きいエリアとされます。",
  },
  {
    label: "坂出市・丸亀市 — 製粉・冷凍麺・臨海立地",
    detail:
      "坂出・丸亀の臨海部は港湾・物流インフラに恵まれ、製粉・冷凍麺・冷凍食品の中規模〜大規模工場が立地し得るエリアです。臨海立地は原料搬入・製品出荷の利便性が高く、急速凍結・冷凍冷蔵の連続負荷を抱える工場では電力プロファイルがデマンド型になりやすい特徴があります。",
  },
  {
    label: "三豊市・観音寺市 — 食品製造の中堅集積",
    detail:
      "三豊・観音寺エリアにも食品製造の中堅工場が分布し、冷凍食品・惣菜・調味料などの生産が行われます。広めの敷地・屋根面積を持つ工場では屋根オンサイトPPA・自家消費太陽光の試算余地があり、瀬戸内の日照条件と合わせて再エネ調達の検討対象になります。",
  },
  {
    label: "小豆島町・土庄町 — 醤油・佃煮・調味料の伝統集積",
    detail:
      "小豆島は醤油・佃煮・調味料の伝統的産地で、諸味発酵・火入れ・充填の各工程を持つ蔵元・メーカーが集積します。中小規模が多く高圧・低圧が混在し、加熱工程の廃熱回収・断熱・高効率設備への更新と契約見直しを組み合わせた最適化の余地があります。観光と一体の地場産業として地域経済の柱でもあります。",
  },
  {
    label: "県全域の冷凍麺・讃岐フード — 全国流通の核",
    detail:
      "冷凍さぬきうどん・冷凍麺は香川県を代表する食品で、全国の量販店・外食・通販向けに広く流通します。製麺・茹で・急速凍結・冷凍冷蔵・包装の一貫生産が県内各地で行われ、冷凍負荷を中心とする電力需要が県内食品工場の電力プロファイルを特徴づけています。讃岐フードの集積は瀬戸内流通ハブの機能と結びついています。",
  },
];

const switchingReality = [
  {
    label: "四国エリアの新電力浸透度",
    detail:
      "四国電力エリアの新電力比率は、首都圏・関西圏と比べると相対的に低めとされますが、高圧の食品工場では競争入札・相見積が広がりつつあります（出典: 資源エネ庁 電力・ガス取引監視等委員会の公表資料から整理）。中小食品工場では四国電力の継続が依然多数派の一方、年間使用量の大きい冷凍麺・冷凍食品工場では切替余地が大きいと考えられます。本記載は一般的傾向の整理です。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の高騰局面で市場連動を採用していた食品工場の一部が固定回帰に動きました。長期固定（2〜5年）契約が選択肢として定着しつつあり、非化石証書付き・再エネトラッキング付きの組合せメニューもオプションとして提示されるようになっています。冷凍負荷で年間使用量が大きい工場ほど、単価安定化の価値が高まります。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: エリア内の災害復旧体制・大口需要家向けの運用支援・長期安定供給の実績。デメリット: 局面によっては新電力比で単価が高めになる場合があり、燃料費調整額の上限有無も論点になります。年間使用量の大きい食品工場では数百万〜数千万円単位の単価差につながり得るため、定期的な再見積が有効です。いずれも一般論としての整理です。",
  },
  {
    label: "新電力選定のポイント（香川×食品固有）",
    detail:
      "①冷凍・加熱を抱える食品工場への供給実績、②非化石証書／再エネトラッキング付メニュー（取引先の環境配慮要請対応）、③長期固定（2〜5年）の単価安定性、④燃調上限・連動条件、⑤四国エリアの供給可能kWh枠の5点が重要です。複数社から相見積を取得し、供給安定性と価格の双方を比較することが実務上の基本です。",
  },
  {
    label: "PPA・オフサイト調達の検討",
    detail:
      "瀬戸内の日照条件を活かし、屋根オンサイトPPA（冷凍倉庫・製粉棟の広い屋根面積）／オフサイトPPA（県内・近隣の太陽光案件）／コーポレートPPAが食品工場でも検討対象になります。環境価値の取り込みは取引先要請への対応手段であり、調達コストは従来単価＋一定のプレミアムで推移する傾向があります。導入可否は屋根面積・系統条件・契約期間で変わるため個別試算が必要です。",
  },
];

const energySaving = [
  {
    label: "冷凍機の自然冷媒化＋インバータ化",
    detail:
      "急速凍結・冷凍冷蔵のコンプレッサーを自然冷媒（CO2・アンモニア）＋インバータ機に更新することで、電力消費の低減と環境規制対応（フロン対策）を両立できます。負荷追従のインバータ制御により部分負荷時の効率が向上し、夏季ピークの電力も抑えられます。SII補助等の活用で投資回収を短縮できる場合があり、冷凍負荷の大きい食品工場では効果が出やすい打ち手です。数値・回収年数は工場条件で変動します。",
  },
  {
    label: "氷蓄熱・蓄熱によるピークシフト",
    detail:
      "夜間の安価な時間帯に氷蓄熱を行い、昼間ピークの冷凍・冷却負荷を蓄熱でまかなうことで、契約電力（kW）＝基本料金の低減とデマンドの平準化が期待できます。市場連動契約では昼間高騰時間帯の購入を減らす効果もあります。蓄熱容量・運用設計は工程に合わせた個別最適化が必要で、投資回収は補助金活用の有無で変わります。",
  },
  {
    label: "加熱工程の廃熱回収＋ヒートポンプ",
    detail:
      "茹で・蒸練・火入れ・乾燥といった加熱工程で生じる排熱・排温水を、前処理の温水加熱や給湯・洗浄に再利用することで全体エネルギーを最適化できます。加熱と冷却が併存する食品工場では、冷凍機の排熱をヒートポンプで給湯に回す統合運用も選択肢です。廃熱回収は省エネ補助の対象になりやすく、加熱・冷却の両方を持つ讃岐の食品集積と相性が良い手法です。",
  },
  {
    label: "コンプレッサー高効率化＋集中管理／LED化",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサーへの更新で電力を低減できます。あわせて全館LED化・人感／調光制御を行えば照明電力を削減できます。いずれも投資効率が高く、SII補助等の活用で回収が見込めるベーシックな省エネ施策で、中小食品工場でも取り組みやすい打ち手です。",
  },
  {
    label: "屋根オンサイトPPA＋BEMS・需給予測",
    detail:
      "冷凍倉庫・製粉・包装棟の広い屋根面積を活かした屋根オンサイトPPA（自家消費）と、BEMSによる需要見える化＋翌日需給予測・デマンドレスポンスを組み合わせることで、電気代単価の低減とピーク需要の抑制、環境価値の取り込みを同時に図れます。初期投資ゼロ型のPPAは資金負担を抑えつつ再エネ自家消費を進める選択肢です。導入可否は系統・屋根条件で変わります。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "急速凍結・冷凍冷蔵のコンプレッサーの年間使用kWhを工程別に把握しているか",
  "夏季（7〜9月）の冷凍負荷ピークを蓄熱・運用分散で平準化できる余地はあるか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "四国電力の最新改定単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力から相見積（複数社）を取得したか",
  "取引先（量販店・外食・商社）からの環境配慮・再エネ調達要請に対応する計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "オフサイトPPA・コーポレートPPAの調達可能性をデベロッパーに照会したか",
  "香川県・SII・農水省等の補助の併用可否を設備別に整理したか",
  "加熱工程の廃熱回収・ヒートポンプ統合運用の余地を評価したか",
  "災害・停電時のBCP（冷凍品の保護・自家発・蓄電池）の体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "香川県の食品工場は四国電力エリア固有の単価リスクが大きいですか？",
    answer:
      "四国電力エリアの単価は、伊方原発の稼働状況により火力依存度が変動するため、燃料費調整額の感応度がその前提で変わります。原発稼働が安定している局面では火力燃料への依存が相対的に下がる一方、稼働縮小局面では火力（LNG・石炭）依存度が上がり、為替・燃料スポット価格への感応度が高まります。冷凍負荷で年間使用量の大きい食品工場では、固定単価＋燃調上限ありのプランや非化石証書付メニューでヘッジするのが基本的な考え方です。数値は業界団体・エネ庁統計から整理した一般論です（出典: 四国電力 単価公表値・エネ庁エネルギー白書から整理）。",
  },
  {
    question: "冷凍さぬきうどん・冷凍食品工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般的には急速凍結（ブラストフリーザー／スパイラルフリーザー）と冷凍冷蔵保管が大きな比率を占めるとされます。これらのコンプレッサー（冷凍機）が24時間連続稼働するためで、特に夏季は外気温上昇で負荷が増します。次いで茹で・蒸練の加熱工程、包装ラインの搬送・照明が続きます。冷凍機の自然冷媒＋インバータ化、氷蓄熱によるピークシフト、加熱の廃熱回収が単価最適化の主戦場です。工場ごとに構成は異なるため、自社の工程別kWh把握が出発点になります（出典: 農林水産省・エネ庁の食品冷凍関連省エネ資料から整理）。",
  },
  {
    question: "小豆島の醤油・調味料工場の電力プロファイルはどんな特徴がありますか？",
    answer:
      "醤油・佃煮・調味料は、諸味（もろみ）の発酵管理、火入れ（加熱殺菌）、ろ過、充填・包装の各工程で電力を使います。発酵タンクの温度管理、加熱工程の蒸気・電力、製品の冷却・保管、瓶詰・包装ラインの搬送・照明が主な負荷です。中小規模の蔵元・メーカーが多く、高圧・低圧が混在します。加熱工程の廃熱回収・断熱強化、高効率コンプレッサー、LED化、契約見直しを組み合わせた電気代最適化の余地が比較的広いとされます。あくまで一般的傾向としての整理です。",
  },
  {
    question: "瀬戸内の食品工場で屋根オンサイトPPAは現実的ですか？",
    answer:
      "条件次第で現実的な選択肢になります。瀬戸内は日照条件が比較的良好で、冷凍倉庫・製粉・包装棟など広い屋根面積を持つ食品工場では屋根太陽光の自家消費PPAの試算余地があります。初期投資ゼロ・PPA事業者が設備を所有し自社は長期の電力購入契約を結ぶ形が標準で、自家消費による電気代単価の低減と環境価値の取り込みを両立できます。導入可否は屋根面積・系統条件・契約期間で変わるため、個別試算とデベロッパーへの照会が前提です。",
  },
  {
    question: "伊方原発の再稼働は香川県の食品工場の電気代にどう影響しますか？",
    answer:
      "伊方原発（愛媛県）は四国電力エリアの電源構成の一要素であり、その稼働状況はエリアの火力依存度や卸市場（JEPX四国エリア）の価格形成に影響し得ます。原発稼働が安定している局面では火力燃料への依存が相対的に下がり、燃料費調整額の変動が抑えられる方向に働く可能性があります。一方、稼働が縮小する局面では火力依存度が上がり、為替・燃料価格への感応度が高まり得ます。香川の食品工場にとっては、こうしたエリア固有の電源事情を踏まえた契約戦略（固定vs市場連動、燃調上限の有無）が重要です（出典: 四国電力送配電 系統情報・エネ庁資料から整理）。",
  },
  {
    question: "再エネ賦課金は2026年度でいくらですか。食品工場の負担はどの程度ですか？",
    answer:
      "2026年度の再エネ賦課金は4.18円/kWh（確定）です。これは全国一律で、電力会社を問わず使用電力量に応じて課されます。年間使用量1,000万kWh級の食品工場では賦課金だけで年約4,180万円規模、4,000万kWh級の大規模冷凍工場では年約1.67億円規模の負担になります。電力多消費の事業所は減免制度の対象となる可能性があり、冷凍冷蔵・急速凍結を抱える電気使用量原単位の高い工場は申請要件の確認を検討する価値があります。賦課金は契約先に依存しないため、本回答は特定の電力会社・契約形態を推奨するものではありません（出典: 資源エネルギー庁 再エネ賦課金関連資料から整理）。",
  },
  {
    question: "香川県の補助金は食品工場の省エネ設備でも使えますか？",
    answer:
      "使える可能性があります。香川県の産業政策・企業立地施策に基づく補助メニューや、国のSII省エネ補助、需要家主導型PPA支援、農水省の食品産業向け支援などが、食品工場の高効率冷凍機・コンプレッサー・LED・断熱・廃熱回収などを対象とし得ます。SII補助との併用可否は事業区分・設備別に確認が必要で、公募タイミングと採択率の把握が重要です。最新の公募状況・要件は香川県やSIIの公式窓口で確認してください（2026年度時点の一般的枠組み）。",
  },
  {
    question: "災害・停電時のBCPは新電力に切り替えても確保できますか？",
    answer:
      "物理的な停電復旧作業は四国電力送配電（一般送配電事業者）が担うため、契約する小売事業者によらず復旧時間そのものは変わりません。ただし停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発との連系条件を必ず確認してください。冷凍品を抱える食品工場では停電時の品質保護が重要で、自家発・蓄電池・非常用電源の運用計画と保険対応をあわせて整備しておくことが推奨されます。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "四国電力 法人向け料金プラン", url: "https://www.yonden.co.jp/" },
  { name: "四国電力送配電 供給・系統情報", url: "https://www.yonden.co.jp/nw/" },
  { name: "農林水産省（食品産業）", url: "https://www.maff.go.jp/" },
  { name: "香川県 産業政策・企業立地", url: "https://www.pref.kagawa.lg.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function KagawaFoodElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kagawa-food-electricity-cost"
        datePublished="2026-06-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "香川県の食品工場の電気料金", url: "https://simulator.eic-jp.org/kagawa-food-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">香川県の食品工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            香川県の食品工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            香川県は『うどん県』として知られる讃岐うどんの本拠地であり、冷凍さぬきうどん・冷凍麺、小豆島の醤油・調味料、製粉、冷凍食品・惣菜が県内各地に集積する瀬戸内の食品流通ハブです。本ページでは「香川県 × 食品製造業」というクロス領域に絞り、四国電力エリア固有の単価事情（伊方原発再稼働の影響）と、蒸練・茹で・乾燥・急速凍結・冷凍冷蔵といった電力プロファイル、契約最適化、補助金・PPA活用までを実務目線で整理します。本ページは中立的な情報整理を目的とし、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-05" updatedAt="2026-06-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>香川県の食品産業集積（冷凍麺・醤油・調味料・製粉）の電力プロファイル</li>
              <li>大規模冷凍麺／中規模調味料・製粉／中小食品のBefore/After代表シナリオ3件</li>
              <li>四国電力エリアの単価水準と燃調感応度（伊方原発再稼働の影響）</li>
              <li>取引先の環境配慮要請を踏まえた再エネ調達（PPA・非化石証書）の進め方</li>
              <li>香川×食品に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「香川 × 食品」のクロス領域に特化したガイドです。香川県全体の文脈は{" "}
            <Link href="/kagawa-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              香川県の法人電気料金ガイド
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
              香川県の食品産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県は讃岐うどんを核とする食品集積地で、冷凍さぬきうどん・冷凍麺の全国流通、小豆島の醤油・佃煮・調味料、製粉、冷凍食品・惣菜が県内各地に分布します。瀬戸内海を介した食品流通ハブとして、加熱（蒸練・茹で・火入れ・乾燥）と冷却（急速凍結・冷凍冷蔵）が併存する電力プロファイルが特徴です。
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
              香川県全体の文脈は{" "}
              <Link href="/kagawa-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                香川県の法人電気料金ガイド
              </Link>
              、四国電力エリア全体は{" "}
              <Link href="/region-shikoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                四国電力エリア事情
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
              四国電力エリアの主要電力会社・新電力（香川×食品での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県内の食品工場は、四国電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給します。年間使用量の大きい冷凍麺・冷凍食品工場では競争入札・相見積が広がり、中小食品工場では切替余地が依然大きい状態です。本節は一般的傾向の整理であり、特定の電力会社・契約形態を推奨するものではありません。
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
              四国電力エリアの料金水準と食品工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧・特別高圧の単価レンジ、燃料費調整額の感応度、再エネ賦課金の累積負担を、食品工場の代表的な契約タイプ別に整理します。四国電力エリア固有の伊方原発稼働を前提とした燃調感応度を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は2026年6月時点の標準メニューを基準に、業界団体・経産省/エネ庁統計から整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 大規模冷凍麺／中規模調味料・製粉／中小食品（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県内の代表的な3規模で、契約見直し＋設備対策＋再エネ調達の組合せによる削減効果をBefore/After方式で提示します。いずれも業界団体・自治体統計・公開情報から再構成した代表シナリオで、数値は目安レンジです。本事例は特定の電力会社・契約形態を推奨するものではありません。
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
              、冷凍食品特化は{" "}
              <Link href="/frozen-food-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍食品工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              香川×食品固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川の食品工場の電気代上昇は、冷凍冷蔵・急速凍結の連続負荷・加熱工程の熱需要・四国エリアの燃調感応度（伊方原発再稼働）・夏季ピーク・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 香川県・国・農水省の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県の産業政策・企業立地補助、国のSII省エネ補助、需要家主導型PPA支援、GX投資促進税制、農水省の食品産業向け支援の5層を組合せ、食品工場の更新投資の回収を短縮するのが定石です。併用可否は設備別・事業別に確認が必要です。
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
              主要拠点／集積地の電力プロファイル（高松／坂出・丸亀／三豊／小豆島）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川の食品サプライチェーンは、高松の流通ハブと中小食品工場、坂出・丸亀の製粉・冷凍麺・臨海立地、三豊・観音寺の中堅集積、小豆島の醤油・調味料伝統集積、そして県全域の冷凍麺・讃岐フードという構造です。
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
              電力会社切替の実情 — 四国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年間使用量の大きい冷凍麺・冷凍食品工場では競争入札・相見積が広がり、中小食品工場では切替余地が大きく、取引先の環境配慮要請と連動した再エネ調達（PPA・非化石証書）の検討が共通トレンドです。市場連動からの固定回帰も見られます。本節は一般論であり、特定の電力会社・契約形態を推奨するものではありません。
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
              香川×食品の省エネ・自家消費事例（冷凍機／蓄熱／廃熱回収／コンプレッサー／屋根PPA）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              食品工場の省エネは、冷凍機の自然冷媒＋インバータ化、氷蓄熱によるピークシフト、加熱工程の廃熱回収＋ヒートポンプ、コンプレッサー高効率化／LED化、屋根オンサイトPPA＋BEMSの5軸が主力です。大規模冷凍麺・中規模調味料・中小食品いずれでも投資回収2〜4年で実現可能なメニューが揃っています（数値は工場条件で変動）。
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
              香川×食品 契約見直しチェックリスト（12項目）
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
              シミュレーターで香川×食品の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川の食品工場は、四国エリアの伊方原発稼働に左右される燃調感応度・冷凍冷蔵の連続負荷・夏季ピーク・取引先の環境配慮要請など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・屋根オンサイトPPA・省エネ投資のメリットを定量化できます。本ページは特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜9月）の冷凍負荷の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜18%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/kagawa-business-electricity-cost", title: "香川県の法人電気料金ガイド（地域一般）", description: "香川県全体の電力事情・瀬戸内・補助金。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国エリアの料金体系・伊方原発再稼働。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し（業種一般）", description: "加熱・冷却・乾燥・包装の最適化。" },
              { href: "/frozen-food-electricity-cost-review", title: "冷凍食品工場の電気料金見直し（業種一般）", description: "急速凍結・冷凍保管のデマンド最適化。" },
              { href: "/kagoshima-food-electricity-cost", title: "鹿児島県の食品工場の電気料金（クロス）", description: "九州電力エリアの焼酎・畜産・水産クロス。" },
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
            heading="香川の食品工場の電気代リスクを自社条件で試算する"
            description="冷凍麺・調味料・製粉・冷凍食品工場固有の条件（四国電力エリア・伊方原発再稼働・急速凍結／冷凍冷蔵の連続負荷・取引先の環境配慮要請）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・屋根オンサイトPPA・省エネ投資のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="香川の食品工場の電力契約見直し、専門家に相談しませんか？"
            description="冷凍麺・調味料・製粉・冷凍食品いずれも高圧・特別高圧の規模感と冷凍負荷・取引先の環境配慮要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で香川県内事業者の判断材料を整理し、特定の電力会社・契約形態を推奨するものではありません。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
