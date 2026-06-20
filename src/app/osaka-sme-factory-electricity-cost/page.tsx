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
  "大阪府の中小製造業・町工場の電気料金完全ガイド｜東大阪・八尾の金属加工／プレス／樹脂成形と高圧契約最適化";
const pageDescription =
  "大阪府の中小製造業・町工場に特化した法人電気代ガイド。東大阪市・八尾市・大東市・門真市の金属加工・プレス・切削・樹脂成形・電子部品の集積、関西電力エリアの単価事情、高圧契約の最適化、補助金活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "大阪府 中小製造業 電気料金",
    "東大阪 町工場 電気代",
    "八尾 大東 門真 工場 電力",
    "関西電力 高圧 中小製造",
    "金属加工 プレス 樹脂成形 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/osaka-sme-factory-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/osaka-sme-factory-electricity-cost",
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
    label: "東大阪を核とする中小製造業集積",
    detail:
      "大阪府東大阪市は『日本一の町工場のまち』として全国的に知られ、人口当たり製造業事業所数・面積当たり工場密度ともに日本最高水準。金属プレス・切削加工・熱処理・表面処理・樹脂成形・電子部品・治工具・金型・組立まで多様な工程の中小工場が約5,500〜6,000事業所集積しています（出典: 東大阪市統計・経産省工業統計・大阪府工業統計）。八尾市・大東市・門真市・大阪市生野区・平野区・住之江区も含めれば、府全体で中小製造業事業所は1万を超え、高圧・低圧の中小契約需要家が極めて多い構造です。",
  },
  {
    label: "中小工場の電力プロファイル — 多品種少量・変動負荷",
    detail:
      "町工場は多品種少量生産が中心で、ライン稼働率変動が大きく『負荷率』（年間使用kWh÷契約kW÷8,760）が30〜50%程度と低めです。日中の操業時間帯にプレス機・切削機・コンプレッサー・成形機が瞬間ピーク負荷を発生させる一方、夜間・休日は低負荷。このため契約電力（kW）に対する電気代基本料金の負担率が比較的大きく、kW削減・ピークシフトが単価最適化の主戦場です。",
  },
  {
    label: "東大阪の主要工程と電力負荷",
    detail:
      "①金属プレス（油圧/サーボ）、②NC切削・マシニング、③熱処理（焼入れ・焼戻し）、④表面処理（メッキ・塗装）、⑤樹脂成形（射出・押出）、⑥電子部品実装、⑦治工具・金型製造の7工程が代表。それぞれ電力プロファイルが異なり、熱処理炉・メッキ電解槽・乾燥炉が連続負荷、プレス・切削が瞬間ピーク負荷、樹脂成形・実装が中位連続負荷という特徴です。",
  },
  {
    label: "親会社からの単価転嫁難と中小固有のキャッシュフロー圧迫",
    detail:
      "町工場の多くはTier2・Tier3として大手メーカー・Tier1サプライヤーへの納入が中心。受注価格は長期固定や年次見直しで、電気代単価の上昇分を即時転嫁することが難しい構造です。2022〜2023年の高騰時にはキャッシュフロー圧迫から廃業・転業を選んだ事業者も少なくなく、契約見直しと省エネ投資の優先度は経営継続上の最重要課題のひとつです（出典: 中小企業庁中小企業白書・経産省中小企業実態調査）。",
  },
  {
    label: "関西電力エリアと大阪中小工場の相互依存",
    detail:
      "関西電力エリアの電源構成は原子力（高浜・大飯・美浜の3基稼働中）＋LNG火力＋石炭火力＋大規模太陽光で多様化。エリア単価は東京・中部・東北より相対的に安定しており、原子力比率の高さが燃料費調整額の感応度を抑制してきました。一方で、再エネ賦課金は全国一律で上昇しており、中小工場でも累積負担が経営に重く影響しています（出典: 関西電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "関西電力（小売事業）",
    role: "一般小売事業者（旧一電）",
    detail:
      "大阪府内最大シェア。中小製造業の高圧需要家を多数抱える。『業務用季節別時間帯別電力』『高圧電力AS／BS』が主軸メニュー。2023年6月の規制料金改定で法人向けも実質値上げ局面に。中小工場では『高圧電力BS』（基本料金重視、電力量料金やや高め）と『業務用季節別時間帯別電力』（季節時間帯重視、夏季ピーク高め）の選択が経営判断の中心。",
  },
  {
    name: "関電ガス・関電エネルギーソリューション系",
    role: "関電グループ新電力",
    detail:
      "関西電力グループの法人向け電気・ガス一括最適化提案を展開。コージェネ既設工場・ガス併用工場での総合最適化が強み。東大阪・八尾の中小工場でも採用例があります。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "大阪府内の中小高圧工場で競争入札の主要対抗馬。固定単価3〜5年契約＋燃調連動の組合せメニューが標準。2022〜2023年の市場高騰局面で一部新電力が新規受付停止しましたが、2024年以降は徐々に回復。中小工場でも10社以上から相見積を取れる環境が戻っています。",
  },
  {
    name: "大阪ガス系新電力（大阪ガス『さすガぁ電気』法人向け等）",
    role: "都市ガス系新電力",
    detail:
      "大阪ガス都市ガス需要家向けにガス＋電気の一括最適化提案。コージェネ・GHP併設工場や、塗装乾燥炉・熱処理炉でガス併用する工場で導入実績多数。中小製造業の総合エネルギーコスト最適化の選択肢として有力。",
  },
  {
    name: "中小企業向け新電力サービス・地域協同組合電力",
    role: "中小特化型",
    detail:
      "中小事業者向けに事務手数料を抑えた電力プランや、東大阪商工会議所・産業協同組合等が組成した共同購入スキームも存在。複数工場の集約契約により単価交渉力を持つアプローチが、町工場向けに普及しつつあります。",
  },
  {
    name: "JEPX関西エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX関西エリアスポット価格は東京と概ね連動。原子力＋太陽光比率の高さから昼間時間帯は他エリアより低位で推移する傾向あり。中小工場の市場連動型契約では昼間操業に有利な側面もあるものの、高騰リスク回避から固定契約が引き続き主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "関西電力エリアの高圧 — 中小製造業の単価水準",
    detail:
      "中小製造業の高圧電力（300kW〜2,000kW）の電力量料金は標準メニューで概ね17〜21円/kWh+調整項目。燃料費調整額（2024〜2025年で+1.5〜+3.5円/kWh目安・原子力比率が高いため他エリアより小幅）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は23〜28円/kWhレンジ。新電力競争入札では標準比1〜3円/kWh下げが目安で、年間使用量200〜500万kWh級の町工場では年間数百万円規模のインパクトです。",
  },
  {
    label: "低圧電力 — 50kW未満の超小規模工場の単価",
    detail:
      "従業員10人以下・契約電力50kW未満の超小規模町工場では『低圧電力（動力）』が中心で、電力量料金は10〜13円/kWh+調整項目、『低圧電灯』（事務所・照明）は18〜21円/kWh+調整項目。低圧自由化の選択肢は限定的ですが、複数工場運営者は高圧一括契約への切替や、新電力低圧メニューの相見積で改善余地があります。",
  },
  {
    label: "中小工場の基本料金負担の大きさ",
    detail:
      "町工場は負荷率が低い（30〜50%）ため、契約電力（kW）に対する基本料金の負担割合が大きい構造。例えば年間使用量100万kWh・契約電力500kWの工場では、基本料金が年間電気代の25〜35%を占めることが多く、kW削減・ピークシフトの経営インパクトが大きいレンジです。",
  },
  {
    label: "関西エリアの燃調感応度（原子力寄与）",
    detail:
      "関西電力エリアは高浜・大飯・美浜の原子力3基が稼働中で、LNG・石炭火力の比率が他エリアより低位。2022〜2023年の燃料高騰時の燃調変動幅は東京・中部・東北より小幅で推移しました。中小工場の単価変動リスクは相対的に低いものの、絶対額の負担増は他エリア同様です（出典: 関西電力供給計画／エネ庁エネルギー白書）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 東大阪・金属プレス／精密板金加工工場（高圧 1,200kW、年間 350万kWh）",
    before:
      "Before: 東大阪市の金属プレス・精密板金加工工場A（従業員80名、自動車Tier2＋電機Tier2向け、サーボプレス機5台＋NCタレットパンチプレス3台＋レーザー加工機2台）。関西電力の業務用季節別時間帯別電力＋燃調連動。2023年度は燃調影響で前年比+15%の電気代増加。年間電気代 約9,500万円。",
    after:
      "After: 全国系新電力に固定3年・燃調上限あり契約で切替／プレスのサーボ化追加＋蓄電池併用でピークシフト／全館LED化＋人感センサー（府補助＋SII併用、投資1,500万円）／コンプレッサー集中管理＋エア漏れ対策／屋根太陽光300kW自家消費。",
    result:
      "Result: 年間電気代 約9,500万円 → 約7,700万円（▲約19%、▲1,800万円・目安）／契約電力 1,200→1,070kW／投資回収 補助金後 2年前後（目安）。",
  },
  {
    title: "業種2: 八尾・樹脂成形＋電子部品実装工場（高圧 600kW、年間 200万kWh）",
    before:
      "Before: 八尾市の樹脂射出成形＋SMT実装工場B（従業員45名、自動車関連／医療機器関連の樹脂成形品＋電子部品実装）。射出成形機20台＋リフロー炉＋検査装置。関西電力の高圧電力AS＋燃調連動。年間電気代 約5,500万円。",
    after:
      "After: 関電エネルギーソリューション系の固定2年契約に切替／射出成形機の電動化（油圧→電動）でブースト時電力削減／工場LED化＋空調更新（府補助＋SII併用、投資1,000万円）／コンプレッサー高効率機更新／BEMS導入で需要見える化。",
    result:
      "Result: 年間電気代 約5,500万円 → 約4,500万円（▲約18%、▲1,000万円・目安）／契約電力 600→540kW／投資回収 補助金後 2.5年前後（目安）。",
  },
  {
    title: "業種3: 門真・小規模金属切削加工工場（低圧高負荷／50kW、年間 35万kWh）",
    before:
      "Before: 門真市の超小規模金属切削加工工場C（従業員12名、家電・産業機器Tier3向け）。NCマシニングセンタ6台＋汎用旋盤2台＋検査機。関西電力の低圧電力＋低圧電灯。2023年度は燃調影響で前年比+18%の電気代増加。年間電気代 約950万円。",
    after:
      "After: 低圧新電力に切替（電力量料金▲2円/kWh水準）／NC機器の待機電力削減＋集中管理／LED化＋空調更新（府補助活用、投資400万円）／屋根太陽光30kW自家消費／複数小規模工場の共同購買電力契約への参加。",
    result:
      "Result: 年間電気代 約950万円 → 約800万円（▲約16%、▲150万円・目安）／投資回収 補助金後 2.5年前後（目安）／キャッシュフロー改善で次期設備投資余力確保。",
  },
];

const costFactors = [
  {
    label: "低負荷率に伴う基本料金負担の重さ",
    detail:
      "町工場は負荷率30〜50%が典型で、契約電力（kW）に対する基本料金の負担が相対的に重い。例えば年間使用量100万kWh・契約電力500kWの工場では基本料金が年間電気代の25〜35%。kW削減・ピークシフトが単価最適化の主戦場となります。",
  },
  {
    label: "プレス・切削の瞬間ピーク負荷",
    detail:
      "大型サーボプレス・NCマシニングの瞬間電力ピークが契約電力（kW）を押し上げ、基本料金の主要因に。蓄電池併用ピークシフト・稼働タイミング分散・サーボの回生制動活用が、契約kW削減＝基本料金削減に直結します。",
  },
  {
    label: "親会社からの単価転嫁難",
    detail:
      "町工場の納入価格は長期固定や年次見直しが中心で、電気代単価の上昇分を即時転嫁することが難しい構造。2022〜2023年の高騰局面では多くの中小工場が一時的に赤字運営を余儀なくされ、廃業・転業を選んだ事業者も。契約見直しと省エネ投資の優先度は経営継続上の重要課題です。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量200万kWh級の中小工場では年約800万円規模の負担。減免制度の対象は限定的ですが、エネルギー多消費業種に該当する場合は申請を検討する価値があります。",
  },
  {
    label: "中小特有の人手・情報不足",
    detail:
      "町工場の多くは経理・総務が兼任体制で、複数新電力からの相見積取得・契約条件比較・補助金申請の事務負担が経営判断の阻害要因に。商工会議所・産業協同組合経由の集約サービスや、エネルギーマネジメント外部委託の活用が現実的な打ち手です。",
  },
];

const subsidies = [
  {
    name: "大阪府 中小企業省エネ・再エネ設備導入補助",
    target: "府内中小製造業の省エネ・再エネ設備（LED・空調・コンプレッサー・サーボプレス等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による・上限あり）※2025年度時点",
    note: "府独自の中小企業支援補助。東大阪・八尾の町工場で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "東大阪市・八尾市 等の市町村独自補助",
    target: "市内中小事業者の省エネ設備・再エネ導入",
    rate: "対象経費の1/4〜1/3、上限は市町村別",
    note: "東大阪市『町工場景気対策補助』、八尾市『中小企業設備投資補助』など市町村独自補助が複数存在。府補助・SII補助との重層活用が可能なケースあり。最新公募状況は各市役所・商工会議所で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・LED・コンプレッサー・サーボプレス・射出成形電動化・熱処理炉等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "中小工場の更新案件で採択実績多数。サーボプレス・射出成形電動化・コンプレッサー高効率化は採択率も比較的高い王道メニュー。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "東大阪・八尾の町工場は屋根面積が小さいため、複数工場合同のオフサイトPPAや、商工会議所経由の集約PPAスキームの活用が現実的。",
  },
  {
    name: "ものづくり補助金・事業再構築補助金",
    target: "中小製造業の革新的設備投資・事業転換",
    rate: "1/2〜2/3、上限は事業区分による",
    note: "電気代削減を伴う新設備導入（電動化・省エネ革新）は採択加点要素。中小企業庁所管。GX対応案件は採択率が比較的高め。",
  },
];

const industryProfile = [
  {
    label: "東大阪市 — 日本一の町工場のまち",
    detail:
      "金属プレス・切削・熱処理・表面処理・治工具・金型・電子部品等、約5,500〜6,000の中小製造業事業所が集積。Tier2・Tier3として自動車・電機・産業機器・医療機器の各サプライチェーンに供給。中小高圧／低圧契約需要家が極めて多い構造（出典: 東大阪市統計）。",
  },
  {
    label: "八尾市 — 樹脂成形・電子部品・金属加工集積",
    detail:
      "八尾市は樹脂射出成形・SMT実装・金属加工の中小工場が集積。自動車・家電・医療機器向けの部品サプライヤーが多く、高圧500kW〜1,500kW級の中堅工場が中心。",
  },
  {
    label: "大東市・門真市 — 電機系サプライヤー",
    detail:
      "パナソニックグループ等の電機系本社・工場と連動するTier1・Tier2サプライヤーが集積。電子部品・基板・成形品の中小製造業が中心で、高圧・低圧の混在エリア。",
  },
  {
    label: "大阪市生野区・平野区・住之江区",
    detail:
      "大阪市内の中小製造業集積。生野区はサンダル・履物・繊維、平野区は金属加工・印刷、住之江区は化学・倉庫が代表的。低圧〜高圧の小規模事業者が多数。",
  },
  {
    label: "商工会議所・産業協同組合の役割",
    detail:
      "東大阪商工会議所・八尾商工会議所・大阪府工業協会等が中小事業者向けの電力共同購入・省エネ診断・補助金情報提供を実施。中小工場の電気代見直しの重要な支援チャネルとなっています。",
  },
];

const switchingReality = [
  {
    label: "大阪府の中小工場の新電力浸透度",
    detail:
      "関西電力エリアの新電力比率は全国平均比やや高め（約30〜35%）。中小高圧工場では新電力切替が進行中で、特に東大阪・八尾では商工会議所経由の共同購入スキームを通じた切替も拡大。低圧の超小規模工場は依然関電継続が多数派ですが切替余地は大きい。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で中小工場の多くが市場連動から固定回帰。中小は高騰時のキャッシュフロー影響が深刻で、固定3〜5年＋燃調上限ありが主流。市場連動は再エネ自家消費・蓄電池等のヘッジ手段併用が前提となります。",
  },
  {
    label: "関西電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・原子力寄与で燃調感応度が低位・大手取引慣行による事務簡素性・災害時BCP対応。デメリット: 新電力比1〜3円/kWh単価が高め、長期固定での競争余地は新電力に分がある場面も。",
  },
  {
    label: "新電力選定のポイント（大阪×中小製造業固有）",
    detail:
      "①高圧の供給実績、②長期固定（3〜5年）＋燃調上限の有無、③事務手数料の有無、④小規模需要家向けサポート体制、⑤BCP対応（南海トラフ・上町断層エリア）の5点が重要です。",
  },
  {
    label: "共同購入・集約契約スキームの普及",
    detail:
      "東大阪商工会議所・産業協同組合経由の電力共同購入スキームが普及。複数工場の使用量を集約することで単価交渉力を持つ手法で、町工場の単独契約より1〜2円/kWh安い水準を確保できるケースが多い。中小工場の新たな選択肢として注目されています。",
  },
];

const energySaving = [
  {
    label: "サーボプレス・電動射出成形機への更新",
    detail:
      "油圧プレス・油圧射出成形機をサーボ式・電動式に更新で電力▲20〜30%。同時に瞬間ピーク負荷も平準化されるため契約電力（kW）削減＝基本料金削減効果も得られます。SII補助1/2＋府補助の併用で投資回収 2〜3年。",
  },
  {
    label: "コンプレッサー高効率化＋エア漏れ対策",
    detail:
      "工場のエア漏れ・過剰圧力設定の見直し＋高効率インバータコンプレッサー更新で電力▲15〜25%。中小工場ではエア漏れだけで全電力の10〜20%を浪費している事例も多く、投資効率の高い王道メニュー。SII補助1/2でほぼ確実に回収可能（1.5〜2.5年）。",
  },
  {
    label: "屋根太陽光自家消費＋蓄電池併用",
    detail:
      "屋根面積100〜500m²級の中小工場では太陽光30〜150kW＋蓄電池併用が現実的。日中操業の電気代単価下げ＋ピーク電力削減＋BCP対応の3効果。需要家主導型補助金との組合せで投資回収 5〜7年（補助込みで3〜5年）。",
  },
  {
    label: "BEMS・需要見える化＋稼働分散",
    detail:
      "BEMSによる需要見える化と稼働タイミング分散でピーク需要▲10〜20%。中小工場でも導入ハードルが下がり、市販BEMS製品が30〜100万円程度で導入可能に。府補助＋SII補助で投資回収1〜2年。",
  },
  {
    label: "共同購入・複数工場集約による電力単価下げ",
    detail:
      "商工会議所・産業協同組合経由の共同購入で単価交渉力を確保。複数工場の使用量を集約することで、新電力との交渉時に大口需要家相当の条件を引き出せます。事務手続きの簡素化も中小工場には有用です。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "プレス・切削の瞬間ピークを蓄電池等で平準化できる余地はあるか",
  "コンプレッサーのエア漏れ・過剰圧力設定の見直しを実施したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "関西電力の2023年改定後の単価で再見積を取得したか",
  "全国系・関電系・大阪ガス系の新電力10社以上から相見積を取得したか",
  "商工会議所・産業協同組合の電力共同購入スキームを検討したか",
  "親会社・取引先からのScope3 GHG削減要請の有無を確認したか",
  "屋根太陽光自家消費の試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "大阪府補助・市町村補助・SII・ものづくり補助の併用可否を整理したか",
  "ものづくり補助金・事業再構築補助金の活用余地（GX対応含む）を評価したか",
  "南海トラフ・上町断層エリアのBCP（停電・地震）の体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "東大阪・八尾の町工場で電気代見直しの優先順位はどう決めればよいですか？",
    answer:
      "①現行契約の単価・燃調・基本料金構成の把握、②新電力10社以上からの相見積取得（商工会議所経由共同購入も含む）、③コンプレッサーのエア漏れ・過剰圧力設定の見直し（即効性大）、④全館LED化・空調更新（補助金活用で回収1.5〜2.5年）、⑤サーボプレス・電動射出成形機更新（補助金活用で回収2〜3年）、⑥屋根太陽光自家消費（屋根面積に応じ）の順で取り組むのが定石です。中小工場では事務負担を考慮し、できる施策から段階的に進める判断も重要です。",
  },
  {
    question: "町工場でも新電力切替は本当に得ですか？",
    answer:
      "原則として得です。関西電力標準メニューと新電力固定単価メニューには標準比1〜3円/kWhの差があることが多く、年間使用量200万kWh級の工場では年間数百万円規模の差になります。ただし新電力の事務手数料・解約条件・燃調連動の有無を確認することが重要。商工会議所経由の共同購入スキームでは事務負担も軽減できる選択肢があります。",
  },
  {
    question: "関西電力の燃料費調整額は他エリアより本当に低いですか？",
    answer:
      "原子力比率の高さから、2022〜2023年の燃料高騰時の燃調変動幅は東京・中部・東北より相対的に小幅で推移しました。年間使用量200万kWh級の中小工場では、燃調変動による単価影響が東京・中部より少額に抑えられた実績があります。ただし、原子力の稼働状況（定期検査・トラブル）次第で変動するため、絶対的な優位ではない点に注意（出典: 関西電力供給計画／エネ庁エネルギー白書）。",
  },
  {
    question: "町工場の屋根太陽光は採算が合いますか？",
    answer:
      "屋根面積・南向き面積・日中操業比率次第ですが、東大阪・八尾の町工場の多くで採算が合います。屋根太陽光50〜100kW級の場合、初期投資700〜1,500万円（補助金活用で1/2〜1/3）、年間発電量5〜10万kWh、自家消費単価15〜20円/kWh換算で投資回収5〜7年（補助込みで3〜5年）が目安。RPS・FIT・FIP制度のうち2025年時点の最適は事業者・地域別に異なるため事前試算が必要です。",
  },
  {
    question: "親会社からのCN要請への対応は中小でも可能ですか？",
    answer:
      "対応可能です。①屋根太陽光自家消費＋蓄電池、②非化石証書・グリーン電力証書購入、③オフサイトPPAの共同調達（複数中小工場でグループ形成）、④省エネ投資によるCO2原単位改善の4方向で対応するのが定石。中小企業庁・経産省ではサプライチェーン全体のCN対応支援補助も整備しており、親会社の要請と並行して活用可能です。",
  },
  {
    question: "ものづくり補助金は電気代削減目的でも使えますか？",
    answer:
      "可能です。革新的な省エネ設備（サーボプレス・電動射出成形機・高効率熱処理炉等）の導入や、生産性向上を伴う電気代削減投資は採択対象。直接の『電気代削減目的』のみでは採択されにくいですが、生産性向上＋省エネ＋GX対応の複合効果を訴求すれば採択率は比較的高めです（2025年度時点）。中小企業庁・全国中央会の最新公募情報を確認してください。",
  },
  {
    question: "南海トラフ地震BCPは中小工場でも備えるべきですか？",
    answer:
      "備えるべきです。大阪府は南海トラフ巨大地震・上町断層帯地震の被害想定エリアに該当し、長期間の停電・物流途絶・水道供給停止のリスクがあります。中小工場でも自家発電（小型ディーゼル＋燃料備蓄）・蓄電池・断水対策の三本柱で備える事例が増えており、需要家主導型補助金・BCP補助金との組合せで投資ハードルを下げることが可能です。",
  },
  {
    question: "東大阪商工会議所の電力共同購入はどう参加すればよいですか？",
    answer:
      "東大阪商工会議所・八尾商工会議所等が主催する電力共同購入は、会員企業の使用量を集約して新電力と一括契約することで、単独契約より単価が安くなる仕組みです。参加には商工会議所への入会が前提で、年会費・参加条件は商工会議所別に異なります。具体的な参加方法・条件は各商工会議所の事業者支援窓口で確認してください（2025年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "関西電力 法人向け料金プラン", url: "https://kepco.jp/" },
  { name: "関西電力送配電 供給計画", url: "https://www.kansai-td.co.jp/" },
  { name: "東大阪市 産業政策", url: "https://www.city.higashiosaka.lg.jp/" },
  { name: "大阪府 産業・経済", url: "https://www.pref.osaka.lg.jp/" },
  { name: "経済産業省 中小企業庁", url: "https://www.chusho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function OsakaSmeFactoryElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/osaka-sme-factory-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "大阪府の中小製造業・町工場の電気料金", url: "https://simulator.eic-jp.org/osaka-sme-factory-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">大阪府の中小製造業・町工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            大阪府の中小製造業・町工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            大阪府、特に東大阪市・八尾市・大東市・門真市は日本一の中小製造業集積地です。本ページでは「大阪府 × 中小製造業（町工場）」というクロス領域に絞り、関西電力エリア固有の単価事情と、金属プレス／切削／樹脂成形／電子部品の電力プロファイル、高圧契約の最適化、共同購入スキーム、補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東大阪・八尾・大東・門真の町工場の集積と電力プロファイル</li>
              <li>金属プレス／樹脂成形／切削加工のBefore/After削減事例3件</li>
              <li>関西電力エリアの単価水準と燃調感応度の優位性</li>
              <li>商工会議所経由の電力共同購入スキームの活用法</li>
              <li>大阪×中小製造業に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「大阪 × 中小製造業」のクロス領域に特化したガイドです。大阪府全体の文脈は{" "}
            <Link href="/osaka-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              大阪府の法人電気料金完全ガイド
            </Link>
            、業種一般としての金属加工業全体は{" "}
            <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              金属加工業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大阪府の中小製造業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大阪府、特に東大阪市は『日本一の町工場のまち』として全国的に知られています。金属プレス・切削・熱処理・樹脂成形・電子部品・治工具まで多様な工程の中小工場が集積し、関西電力エリア固有の電源構成・燃調感応度と密接に連動する電力プロファイルを示します。
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
              大阪府全体の文脈は{" "}
              <Link href="/osaka-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                大阪府の法人電気料金ガイド
              </Link>
              、関西電力エリア全体は{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                関西電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                金属加工業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              関西電力エリアの主要電力会社・新電力（大阪×中小製造業での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大阪府内の中小製造業は、関西電力に加えて関電グループ系新電力・全国系新電力・大阪ガス系・中小特化型と多様なプレイヤーが供給。中小高圧では切替シフトが進行中で、商工会議所経由の共同購入スキームも普及しています。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              関西電力エリアの料金水準と中小工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧・低圧の単価レンジ、原子力寄与による燃調感応度の低位性、基本料金負担の大きさを、中小工場の代表的な契約タイプ別に整理します。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 金属プレス／樹脂成形＋実装／小規模切削加工（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東大阪・八尾・門真の代表的な3規模の中小工場で、契約見直し＋設備対策＋共同購入＋屋根太陽光の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大阪×中小製造業固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              町工場の電気代上昇は、低負荷率に伴う基本料金負担の重さ・プレス/切削の瞬間ピーク・親会社からの単価転嫁難・再エネ賦課金の累積負担・中小特有の人手情報不足の5要因が複合的に作用します。
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
              個別要因は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金・優遇制度 — 大阪府・東大阪市・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大阪府中小企業省エネ補助、東大阪市・八尾市等の市町村独自補助、国のSII省エネ補助、需要家主導型PPA支援、ものづくり補助金・事業再構築補助金の5層を組合せ、中小工場の更新投資の回収を1〜2年短縮するのが定石です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              主要拠点／集積地の電力プロファイル（東大阪／八尾／大東／門真／生野・平野）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大阪府の中小製造業集積は、東大阪のオールラウンド型町工場、八尾の樹脂・実装・金属加工、大東・門真の電機系サプライヤー、大阪市内の小規模事業者、商工会議所・産業協同組合の支援機能という構造です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              電力会社切替の実情 — 関西電力と新電力の比較（中小工場版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中小高圧では切替余地大、市場連動からの固定回帰、商工会議所経由の共同購入スキーム普及が共通トレンドです。低圧の超小規模工場でも切替の選択肢が広がっています。
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
              プラン選択は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大阪×中小製造業の省エネ・自家消費事例（サーボ化／コンプ／屋根太陽光／BEMS／共同購入）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              町工場の省エネは、サーボプレス・電動射出成形機更新、コンプレッサー高効率化＋エア漏れ対策、屋根太陽光自家消費＋蓄電池、BEMS導入、商工会議所共同購入の5軸が主力。中小でも投資回収1〜3年で実現可能なメニューが揃っています。
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
              大阪×中小製造業 契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
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
              全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで大阪×中小製造業の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大阪の町工場は、低負荷率・基本料金負担・親会社単価転嫁難など中小固有の複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・共同購入参加・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜19%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/osaka-business-electricity-cost", title: "大阪府の法人電気料金ガイド（地域一般）", description: "大阪府全体の文脈・関西電力エリア・梅田/中之島オフィス。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気料金見直し（業種一般）", description: "プレス・切削・熱処理・表面処理の業種別最適化。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "関西全体の料金体系・原子力寄与・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/hyogo-steel-electricity-cost", title: "兵庫県の鉄鋼・重工業の電気料金", description: "関西電力エリアの神戸・姫路鉄鋼クロス。" },
              { href: "/kyoto-hotel-ryokan-electricity-cost", title: "京都府の旅館・ホテルの電気料金", description: "関西電力エリアの観光・宿泊クロス。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "中部電力エリアのトヨタ系完成車クロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "中小工場に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "中小工場で市場連動を避けるべき理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "関西エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "関西エリアでの感応度を理解。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "親会社CN要請対応の追加性ある再エネ調達。" },
              { href: "/cfo-electricity-cost-basics", title: "中小企業CFO 電気代戦略", description: "中小経営者向けの電気代見直し論点整理。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="大阪の町工場の電気代リスクを自社条件で試算する"
            description="東大阪・八尾・大東・門真など大阪の中小製造業固有の条件（関西電力エリア・低負荷率・基本料金負担・親会社CN要請）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・共同購入参加・省エネ投資のROIもあわせて確認できます。"
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
            heading="大阪の町工場の電力契約見直し、専門家に相談しませんか？"
            description="町工場は事務負担の制約や親会社単価転嫁難など中小固有の論点が多く、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で大阪府内中小事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
