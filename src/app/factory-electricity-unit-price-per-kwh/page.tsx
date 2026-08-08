import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import ConsultCta from "../../components/ConsultCta";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "工場の電気代は1kWhあたりいくらか｜高圧21.37円/kWhを基準にした単価の見方と原単位（2026年4月分・確定）";
const pageDescription =
  "工場の1kWhあたり電気代を、契約区分別の確定単価を基準に整理します。電力・ガス取引監視等委員会「電力取引報」から算出した2026年4月分（確定・最新公表）の全国計単価は、高圧21.37円/kWh・低圧電力32.12円/kWh・特別高圧17.56円/kWhです。工場では同じ単価でも、負荷率（連続操業か二交代か）、契約電力（デマンド）、力率によって実質単価が変わります。本ページでは、区分別の目安、単価に効く要素、生産量あたりの原単位（kWh/生産単位）での見方、単価が高い工場が確認すべき点までを、計算の手順に沿って解説します。本記事は法人・事業者向けの内容です。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "工場 電気代 1kwh",
    "工場 電気代 単価",
    "工場 電気代 平均",
    "工場 電気代 計算",
    "工場 電気代 年間",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/factory-electricity-unit-price-per-kwh",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/factory-electricity-unit-price-per-kwh",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/basic", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const NEUTRAL =
  "※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態・料金プラン・設備ベンダーを推奨するものではありません。";

const SOURCE_NOTE =
  "※ 単価は電力・ガス取引監視等委員会「電力取引報」から算出した確定単価（販売額÷販売電力量・全国計・検針期間ベース・事後訂正あり得る）にもとづく参考値です。2026年4月分が確定・最新公表で、5月分以降は未公表です（2026年8月中旬の公表見込み）。消費税・再エネ賦課金を含まない参考値であり、実際の請求額は電力会社・契約条件により異なります。";

// 電力取引報「記載要領（令和8年6月改定）」で定められた販売額の定義。
// 各項目は一次資料の記載事項のため改変しない。
const PRICE_DEFINITION = {
  heading: "この単価の定義（電力取引報の記載要領による）",
  included: "基本料金・電力量料金・燃料費調整額",
  excluded: "消費税・再生可能エネルギー発電促進賦課金・延滞金・契約事務手数料",
  notes: [
    "最終保障供給および離島供給は集計対象外です。",
    "集計期間は暦月ベースと検針期間ベースの両方が認められており、事業者間で完全には統一されていません。",
    "各種割引の反映の有無は記載要領に明示がありません。",
  ],
  caution:
    "したがって、税込・賦課金込で表示される請求書の単価と単純に比較することはできません。工場の実質単価と比べる際は、請求書側から消費税と再生可能エネルギー発電促進賦課金を除いた金額で比較してください。",
};

const factoryUnitPrice = [
  {
    name: "多くの工場は高圧 — 21.37円/kWhが出発点の目安",
    role: "契約区分／2026年4月分（確定）・全国計",
    detail:
      "受電設備を持つ一般的な規模の工場は高圧契約が中心で、2026年4月分（確定）の全国計単価は21.37円/kWhです。「工場の電気代は1kWhいくらか」という問いに対しては、まずこの水準を出発点に置くのが実務的です。ただしこれは全国計の平均であり、エリア・電力会社・料金メニュー・使い方によって実際の単価は上下します。自社の水準を知るには、請求総額を使用電力量で割った実質単価を12か月分で算出し、この21.37円/kWhと突き合わせるのが確実です。工場は使用量が大きいぶん、わずかな単価差が年間では大きな金額差になります。",
  },
  {
    name: "小規模な工場・作業所は低圧電力 — 32.12円/kWh",
    role: "契約区分／動力設備を持つ小規模事業所",
    detail:
      "受電設備を持たず、動力設備を低圧で使う小規模な工場・作業所は低圧電力の区分に入り、2026年4月分（確定）の全国計単価は32.12円/kWhです。高圧の21.37円/kWhとの差は10.75円/kWhで（検算：32.12－21.37＝10.75）、4区分のなかで最も高い水準です。小規模な工場ほど1kWhあたりの負担が重くなる構造がここに表れています。ただし、低圧から高圧への切り替えにはキュービクル等の受電設備の設置と保安管理の体制が前提になるため、単価差がそのまま削減額になるわけではありません。設備投資と保安コストを含めた総額で判断する必要があります。",
  },
  {
    name: "大規模工場は特別高圧 — 17.56円/kWh",
    role: "契約区分／大規模工場・連続操業の重工業など",
    detail:
      "非常に大きな電力需要を持つ大規模工場は特別高圧の区分となり、2026年4月分（確定）の全国計単価は17.56円/kWhです。高圧との差は3.81円/kWh（検算：21.37－17.56＝3.81）で、需要規模が大きいほど1kWhあたりが下がる構造を示しています。ただし契約区分は需要規模と受電設備によって決まるもので、単価が低いからという理由で選べるものではありません。自社がどの区分に該当するかは既に決まっていることがほとんどで、検討の余地があるのは区分内での料金メニュー・契約電力・使い方の最適化です。",
  },
  {
    name: "使用量が大きいほど「1円/kWhの差」が効く",
    role: "工場の特性／年間インパクトの考え方",
    detail:
      "工場の電気代を考えるうえで重要なのは、使用量が大きいぶん単価差の影響が増幅されることです。たとえば月間10万kWhを使う工場であれば、1円/kWhの差は月10万円、年間では120万円の差になります（検算：100,000×12＝1,200,000）。高圧21.37円/kWhで月10万kWhを使う場合、電力量料金相当の目安は月213万7,000円、年間で約2,564万4,000円という計算です（検算：21.37×100,000＝2,137,000／2,137,000×12＝25,644,000）。これは電力量料金部分の目安で、実際には基本料金や各種調整額が加わります。規模が大きいほど、単価と使い方の両面での改善余地が金額として大きく現れます。",
  },
  {
    name: "再エネ賦課金は使用量に比例して必ずかかる（2026年度4.18円/kWh）",
    role: "固定的な上乗せ／使用量削減でしか下げられない",
    detail:
      "再生可能エネルギー発電促進賦課金は2026年度で4.18円/kWhで、使用量に応じて全需要家が負担します。本ページの4区分単価は消費税・再エネ賦課金を含まない参考値であるため、賦課金は別途上乗せして考える必要があります。月間10万kWhの工場であれば賦課金だけで月41万8,000円、年間で501万6,000円という計算になります（検算：4.18×100,000＝418,000／418,000×12＝5,016,000）。この項目は電力会社を変えても料金メニューを変えても単価が変わらないため、負担を減らす方法は使用量そのものを減らすか、自家消費で系統からの購入量を減らすかに限られます。",
  },
  {
    name: "全国計の平均であり、自社の単価そのものではない",
    role: "データの読み方／比較の前提",
    detail:
      "本ページで示す単価は全国計の平均であるため、エリア差・電力会社差・契約条件差は平均に吸収されています。自社の実質単価が21.37円/kWhより高い場合でも、直ちに契約が不利とは限らず、負荷率が低い、ピークが高い、エリアの水準がもともと高いといった理由が考えられます。平均はあくまで位置づけを知るための基準です。自社の値との差がどこから来ているかを、契約区分・負荷率・デマンド・力率の順に分解して確認するのが、本ページの以降の章の狙いです。",
  },
];

const costStructure = [
  {
    label: "基本料金（契約電力 × 単価）— 使用量を減らしても下がらない",
    detail:
      "工場の電気代のうち、基本料金は契約電力（kW）に単価を掛けて算定されます。この契約電力は、過去1年間の最大需要電力（デマンド）で決まる方式が広く使われており、一度ピークを記録するとその後1年間にわたって基本料金に影響します。重要なのは、この部分は使用量（kWh）を減らしても下がらないという点です。省エネで使用量を10%減らしても、ピークが変わらなければ基本料金は変わりません。総額を使用量で割った実質単価は、使用量が減るほど基本料金が薄まらなくなり、かえって上がることさえあります。基本料金の考え方は基本料金の解説のページで整理しています。",
  },
  {
    label: "電力量料金（使用量 × 従量単価）— 省エネが直接効く部分",
    detail:
      "電力量料金は使用量に従量単価を掛けた部分で、省エネ投資や運用改善の効果が直接現れるのはここです。設備の高効率化やエア漏れ対策で使用量が減れば、その分だけこの部分が減ります。したがって、省エネ投資の回収年数を試算する際は、総額ベースの実質単価ではなく従量部分の単価を使うほうが実態に合います。総額ベースの単価で試算すると、基本料金分まで減るかのような計算になり、削減効果を過大に見積もることになります。電力量料金の位置づけは電力量料金の解説のページをご覧ください。",
  },
  {
    label: "燃料費調整額 — 契約を変えなくても毎月動く",
    detail:
      "燃料費調整額は燃料市況と為替を反映して毎月見直され、1kWhあたりの金額として加減算されます。工場のように使用量が大きい事業所では、この変動が総額に与える影響も比例して大きくなります。前月と単価が違う原因の多くはここにあり、契約条件が変わったわけではありません。したがって、ある月の実質単価だけを見て契約の良し悪しを判断するのは適切ではなく、複数月をならして見る必要があります。仕組みは燃料費調整額の解説のページで整理しています。",
  },
  {
    label: "再エネ賦課金・容量拠出金の転嫁 — 選べない上乗せ部分",
    detail:
      "再エネ賦課金（2026年度4.18円/kWh）は使用量に比例して必ずかかり、料金メニューの選択では変わりません。容量拠出金は将来の供給力確保のための費用で、その一部が料金に転嫁される場合があり、転嫁の方法や表示は料金メニューによって異なります。これらは事業者側の交渉余地が小さい部分であるため、コスト対策としては使用量そのものを減らす方向が有効です。各項目の詳細は再エネ賦課金の解説、容量拠出金の解説のページで整理しています。請求書のどこにどう現れるかは、自社の料金メニューの内訳と突き合わせて確認してください。",
  },
  {
    label: "工場では「基本料金の比重」が事業所によって大きく異なる",
    detail:
      "同じ工場でも、24時間連続操業の事業所と日中のみ稼働する事業所では、総額に占める基本料金の比重がまったく違います。連続操業では使用量が大きいため基本料金が相対的に薄まり、実質単価は従量単価に近づきます。逆に、稼働時間が短くピークだけ高い事業所では基本料金の比重が高くなり、実質単価は従量単価より大きく上振れします。自社がどちらのタイプかによって、打ち手の優先順位（使用量削減かピーク対策か）が変わります。この違いを数値で捉えるのが、次章の負荷率という考え方です。",
  },
];

const loadFactor = [
  {
    label: "負荷率とは「契約電力をどれだけ使い切っているか」",
    detail:
      "負荷率は、平均需要電力を最大需要電力（契約電力）で割った値で、契約した容量をどれだけ平準的に使えているかを表します。たとえば契約電力500kWの工場が30日（720時間）で216,000kWhを使った場合、平均需要電力は300kWとなり（検算：216,000÷720＝300）、負荷率は60%です（検算：300÷500＝0.6）。負荷率が高いほど、同じ基本料金でより多くのkWhを賄えていることになり、総額を使用量で割った実質単価は下がります。逆に負荷率が低いと、基本料金が少ないkWhに配分されるため実質単価が上がります。",
  },
  {
    label: "連続操業（24時間稼働）は負荷率が高く、実質単価が下がりやすい",
    detail:
      "24時間連続で操業する工場は、需要が平準化されるため負荷率が高くなりやすく、基本料金が多くのkWhに薄く配分されます。その結果、総額ベースの実質単価は従量単価に近い水準に収まりやすくなります。このタイプの工場では、実質単価をさらに下げる余地は基本料金側よりも使用量側にあることが多く、設備の高効率化や運用改善が主戦場になります。ただし連続操業は総使用量そのものが大きいため、わずかな効率改善でも年間の金額としては大きな効果になります。",
  },
  {
    label: "二交代・日中操業は負荷率が下がり、基本料金の比重が上がる",
    detail:
      "二交代制や日中のみの操業では、稼働していない時間帯が長いため負荷率が下がります。ピーク時の需要は連続操業と変わらないのに使用量は少ないため、基本料金が相対的に重くなり、実質単価は上振れします。このタイプの工場では、使用量削減だけでなくピークそのものを下げる対策（デマンド監視、始動の分散、蓄熱・蓄電の活用など）が実質単価の改善に効きます。稼働パターンと料金構造の関係を把握しないまま省エネだけを進めても、実質単価が思ったほど下がらないことがあります。",
  },
  {
    label: "季節変動が大きい工場は月ごとの実質単価の振れも大きい",
    detail:
      "空調負荷や生産の繁閑によって月ごとの使用量が大きく変わる工場では、基本料金の薄まり方が月によって変わるため、実質単価も月ごとに振れます。繁忙期は使用量が増えて実質単価が下がり、閑散期は逆に上がるという動き方です。この振れを契約の良し悪しと取り違えないためには、12か月分の総額を12か月分の総使用量で割って年間の実質単価を出すのが確実です。季節による電気代の動き方は電気代の季節変動のページで整理しています。",
  },
  {
    label: "負荷率を上げる方向の改善が、単価と総額の両方に効く",
    detail:
      "負荷率を上げるとは、ピークを下げるか、稼働を平準化するかのいずれかです。ピークを下げれば契約電力が下がり基本料金が減り、稼働を平準化すれば同じ基本料金でより多くのkWhを賄えます。どちらも実質単価の改善につながります。具体的には、大型設備の同時起動を避ける、始動を時間差にする、空調と生産設備のピークが重ならないよう運用するといった、投資を伴わない対策から着手できる場合があります。ピーク対策の考え方はピークデマンド管理のページで整理しています。",
  },
];

const demandRelation = [
  {
    label: "契約電力は「過去1年間の最大需要電力」で決まる方式が広く使われる",
    detail:
      "高圧の工場では、契約電力が過去1年間の最大需要電力（各月の最大デマンド値の最大）で決まる方式が広く用いられています。つまり、1年のうち30分でも突出したピークがあれば、その値が以後1年間の基本料金を決めることになります。この仕組みを知らずに設備を同時起動してしまい、その月以降ずっと基本料金が上がるという事態は珍しくありません。工場のように大型設備を複数持つ事業所では、この影響が特に大きくなります。契約電力の決まり方は契約電力とは何かのページで整理しています。",
  },
  {
    label: "デマンドを下げると基本料金が下がり、実質単価も下がる",
    detail:
      "契約電力が下がれば基本料金が下がり、使用量が同じであれば総額を使用量で割った実質単価も下がります。ここが「使用量を減らさずに実質単価を下げられる」数少ない打ち手です。省エネ投資に踏み切る前に、まず自社のデマンド推移を確認し、突出したピークが特定の設備・時間帯に起因していないかを見極める価値があります。ピークの発生源が特定できれば、運用の工夫だけで下げられる場合もあります。デマンドの実態把握はデマンド値の見方のページをご覧ください。",
  },
  {
    label: "使用量を減らしたのに請求額が下がらない典型的な原因",
    detail:
      "省エネを進めて使用量を減らしたのに請求額があまり下がらない、という相談は少なくありません。原因として多いのが、契約電力が下がっていないケースです。基本料金は使用量とは独立して発生するため、ピークが変わらなければその分は減りません。加えて、使用量が減ったことで基本料金が薄まらなくなり、実質単価はむしろ上がって見えます。この現象を正しく解釈するには、請求額を基本料金・電力量料金・調整額に分けて追跡する必要があります。分解の手順は法人の電気代の内訳のページで整理しています。",
  },
  {
    label: "デマンド監視と契約電力の見直しはセットで考える",
    detail:
      "デマンド監視装置などでピークを可視化し、超過が予測されるときに一部設備を抑制する運用は、契約電力の上昇を防ぐ手段になります。あわせて、現在の契約電力が実際の使用実態に対して過大になっていないかの確認も重要です。設備の廃止や生産体制の変更があったのに契約が据え置かれている場合、余分な基本料金を払い続けていることになります。ただし契約電力を下げすぎると超過時のリスクがあるため、実績データに基づいた適正な水準を見極める必要があります。",
  },
];

const powerFactor = [
  {
    label: "力率は基本料金の割引・割増に直結する",
    detail:
      "高圧契約では、力率に応じて基本料金が割り引かれたり割り増されたりする仕組みが一般的に用いられています。力率は電気を無駄なく使えているかを表す指標で、モーター・コンプレッサー・溶接機など誘導性の負荷が多い工場では下がりやすい傾向があります。力率が低いまま放置すると、使用量が同じでも基本料金の負担が続き、実質単価を押し上げます。逆にいえば、力率の改善は使用量を減らさずに実質単価を下げられる手段の一つです。仕組みは力率とは何かのページで整理しています。",
  },
  {
    label: "工場は力率が下がりやすい設備構成になりやすい",
    detail:
      "工場ではモーター駆動の設備が多く、これらは誘導性の負荷であるため力率を下げる方向に働きます。とくに軽負荷で運転しているモーターや、古い設備は力率が低くなりやすい傾向があります。生産設備の構成を変えずに力率を改善する手段としては、進相コンデンサの設置・容量の見直し・故障や劣化の点検などが挙げられます。設備が古い工場では、過去に設置したコンデンサが劣化して機能していないケースもあるため、まず現状の力率実績を請求書や計測データで確認することが出発点になります。",
  },
  {
    label: "力率改善は投資額に対して効果が読みやすい対象",
    detail:
      "力率改善は、生産工程を変えずに基本料金へ働きかけられるため、効果の見通しを立てやすい対象です。使用量や生産量に影響しないため、投資判断の前提が崩れにくいという利点もあります。ただし、必要な容量や設置箇所は設備構成によって異なるため、電気主任技術者や専門業者による現状診断を踏まえて計画するのが確実です。本ページは特定の設備・ベンダーを推奨するものではありません。投資回収の考え方はエネマネ投資のROI計算のページで整理しています。",
  },
  {
    label: "力率は「単価に現れない」ため見落とされやすい",
    detail:
      "力率の影響は基本料金に現れるため、料金メニュー上の従量単価を見ているだけでは気づけません。他社の見積もりを比較する場面でも、従量単価の比較に意識が向き、自社の力率という要素が検討から抜け落ちることがあります。実質単価が高い原因を探るときは、契約区分・負荷率・デマンドと並んで力率も点検項目に入れておくと、原因の見落としを防げます。単価に現れない要素が総額に効くという構造は、工場の電気代を考えるうえで繰り返し出てくる論点です。",
  },
];

const perUnitOutput = [
  {
    label: "原単位（kWh/生産単位）は工場固有の指標",
    detail:
      "工場では、電気代の絶対額よりも「製品1単位をつくるのに何kWh使っているか」という原単位で見るほうが、改善の進捗を把握しやすい場合があります。生産量が増えれば電気代の総額も増えるため、総額だけを追っていると効率が改善したのか悪化したのかが分かりません。たとえば月間216,000kWhを使って12,000個を生産したなら、原単位は18kWh/個です（検算：216,000÷12,000＝18）。この指標であれば、生産量の増減に左右されずに効率の変化を追えます。",
  },
  {
    label: "原単位に単価を掛けると「製品1単位あたりの電気代」が出る",
    detail:
      "原単位に1kWhあたりの単価を掛ければ、製品1単位あたりの電気コストが算出できます。原単位18kWh/個の工場が高圧21.37円/kWhで電気を購入している場合、製品1個あたりの電力量料金相当は384.66円という計算です（検算：18×21.37＝384.66）。この数字は原価管理や値決めの議論に直接使えるため、経営層への説明でも通りやすくなります。実際には基本料金や賦課金も加わるため、より正確に見るなら総額ベースの実質単価を掛ける方法もあります。目的に応じて使い分けてください。",
  },
  {
    label: "原単位で見ると「単価改善」と「効率改善」を切り分けられる",
    detail:
      "電気代が増えたとき、原因が単価（市況・契約）にあるのか、効率（設備・運用）にあるのかを切り分けることは重要です。原単位（kWh/個）が横ばいなのに製品あたりの電気代が上がっていれば、原因は単価側にあります。逆に原単位が悪化していれば、設備の劣化や運用の乱れが疑われます。この2軸で追跡すると、打ち手が契約の見直しなのか設備の改善なのかを判断しやすくなります。総額だけを見ていると、この切り分けができません。",
  },
  {
    label: "工程別・ライン別に分けるとさらに打ち手が具体化する",
    detail:
      "工場全体の原単位だけでは、どの工程に改善余地があるかまでは分かりません。計測を工程別・ライン別に細分化できれば、特定の工程の原単位が突出していることや、稼働していない時間帯にも電力が流れていることが見えてきます。エネルギー管理システムを導入して使用状況を可視化することは、この細分化を実現する手段の一つです。可視化そのものは電気代を下げませんが、どこに投資すべきかの判断材料を与えてくれます。工場全体の削減の考え方は工場・事業所の電気代削減ガイドのページで整理しています。",
  },
];

const howToEstimate = [
  {
    label: "STEP1: 12か月分の請求額と使用量から実質単価を出す",
    detail:
      "まず直近12か月分の請求総額と使用電力量を集計し、総額÷総使用量で年間の実質単価を算出します。1か月だけでは季節変動や稼働の偏りで振れるため、12か月でならすことが重要です。この値が、自社が実際に1kWhあたりいくらで電気を買っているかを表します。あわせて、基本料金の合計と電力量料金の合計も分けて集計しておくと、次のステップで比重を確認できます。請求書のどの欄を使うかは、法人の電気代の内訳のページを参照してください。",
  },
  {
    label: "STEP2: 契約区分の水準（高圧21.37円/kWh等）と突き合わせる",
    detail:
      "算出した実質単価を、自社の契約区分に対応する全国計の水準と比較します。高圧なら21.37円/kWh、低圧電力なら32.12円/kWh、特別高圧なら17.56円/kWhが2026年4月分（確定）の目安です。ここで注意すべきは、全国計の単価が消費税・再エネ賦課金を含まない参考値である一方、自社の実質単価には賦課金が含まれている点です。条件を揃えるなら、全国計に賦課金4.18円/kWhを加えた水準と比べるか、自社側から賦課金相当を除いて比べる必要があります。この前提を揃えないと、差を過大に見積もることになります。",
  },
  {
    label: "STEP3: 負荷率とデマンドの実績を確認する",
    detail:
      "実質単価が水準より高い場合、次に確認するのが負荷率とデマンドです。契約電力と月間使用量から負荷率を算出し（平均需要電力＝使用量÷対象時間、負荷率＝平均÷契約電力）、低い場合は基本料金の比重が高いことを意味します。あわせて、各月の最大デマンド値の推移を確認し、突出した月がないかを見ます。突出した月があれば、その原因となった設備・時間帯を特定できれば改善の糸口になります。デマンドの見方はデマンド値の見方のページで整理しています。",
  },
  {
    label: "STEP4: 力率の実績を確認する",
    detail:
      "請求書や計測データから力率の実績を確認します。力率が低ければ基本料金の割増が生じている可能性があり、改善によって実質単価を下げられる余地があります。設備が古い工場では、既設の進相コンデンサが劣化して機能していないこともあるため、現状の実測値を確認することが出発点です。力率の考え方は力率とは何かのページをご覧ください。ここまでの3ステップで、実質単価が高い原因が契約側にあるのか使い方側にあるのかの当たりがつきます。",
  },
  {
    label: "STEP5: 計算機で年間コストと削減余地の目安を試算する",
    detail:
      "自社の実データを揃えたうえで、業種・規模・契約区分・エリアを入れて年間電気代と削減余地の目安を試算します。試算結果はあくまで目安ですが、使用量を減らした場合とピークを下げた場合で効き方が違うことを数字で確認できます。省エネ投資の回収年数を見積もる際は、削減されるのが主に電力量料金である点を踏まえ、従量部分の単価で計算するのが実態に合います。自社条件での試算は業種別電気代計算機から行えます。",
  },
];

const whatToCheck = [
  {
    label: "契約区分・契約電力が現在の生産体制に合っているか",
    detail:
      "生産ラインの増減、設備の更新、稼働時間の変更があったにもかかわらず、契約が過去のまま据え置かれている工場は少なくありません。契約電力が実態より大きければ余分な基本料金を払い続けることになり、実質単価を押し上げます。逆に小さすぎればピーク時に契約超過のリスクがあります。直近12か月のデマンド実績を踏まえ、適正な水準かを確認することが第一歩です。契約電力の考え方は契約電力とは何かのページで整理しています。",
  },
  {
    label: "ピークの発生源が特定できているか",
    detail:
      "デマンドのピークがいつ、どの設備で発生しているかを把握できていないと、対策の打ちようがありません。大型設備の同時起動、空調と生産設備のピーク重複、始業時の一斉立ち上げなどが典型的な発生源です。計測データで発生源を特定できれば、起動の時間差設定など投資を伴わない対策から着手できる場合があります。まず可視化し、次に運用で対応し、それでも足りなければ設備投資を検討するという順序が費用対効果の面で合理的です。",
  },
  {
    label: "力率が改善余地を残していないか",
    detail:
      "力率は単価に現れないため見落とされやすい一方、基本料金に直接効きます。誘導性負荷の多い工場では改善余地が残っていることがあり、既設のコンデンサが劣化しているケースもあります。現状の力率実績を確認し、改善余地があるかを見極めることは、契約の切り替えを検討する前に済ませておく価値があります。改善の可否と必要な対応は設備構成によって異なるため、電気主任技術者や専門業者の診断を踏まえて判断してください。",
  },
  {
    label: "料金メニューの型が稼働パターンに合っているか",
    detail:
      "固定型と市場連動型のどちらが有利かは、市況と自社の稼働パターンによって変わります。夜間や休日に稼働を寄せられる工程があるなら時間帯別の設計が効く可能性があり、逆に稼働時間を動かせない工場では変動リスクの許容度が判断軸になります。市場連動型は市場価格が低い局面では有利ですが、高騰局面では実質単価が大きく上がります。どちらが自社に合うかは、変動をどこまで許容できるかによって決まります。比較は固定と市場連動の比較ガイドのページで整理しています。",
  },
  {
    label: "使用量そのものを減らす余地が残っていないか",
    detail:
      "再エネ賦課金（2026年度4.18円/kWh）のように使用量に比例して必ずかかる項目がある以上、使用量の削減は単価の水準にかかわらず確実に効きます。工場では、コンプレッサーのエア漏れ、モーターの過剰運転、待機電力、断熱の劣化などが典型的な削減余地です。可視化によって工程別の原単位を把握できれば、どこから手を付けるべきかの優先順位がつきます。工場全体の削減の考え方は工場・事業所の電気代削減ガイドのページで整理しています。",
  },
];

const investmentView = [
  {
    label: "省エネ投資は「従量単価 × 削減kWh」で回収を見積もる",
    detail:
      "省エネ投資の回収年数は、補助後の実質投資額を年間の削減額で割って算出します。ここで使う単価は、総額ベースの実質単価ではなく従量部分の単価が実態に合います。省エネで減るのは主に電力量料金であり、基本料金はピークが下がらない限り減らないためです。総額ベースで試算すると削減額を過大に見積もり、回収年数を短く誤ることになります。あわせて、賦課金4.18円/kWhも使用量に比例するため、削減対象に含めて考えると効果の見積もりがより実態に近づきます。",
  },
  {
    label: "ピーク対策は基本料金に効くため、別枠で試算する",
    detail:
      "デマンド抑制や力率改善は、電力量料金ではなく基本料金に効きます。したがって、省エネ投資とは別の計算式（契約電力の低減幅 × 基本料金単価 × 12か月）で効果を見積もる必要があります。両者を混ぜて計算すると効果の内訳が分からなくなり、どの投資が効いたのかの検証もできません。使用量削減とピーク対策は別々に試算し、それぞれの回収年数を比較して優先順位を決めるのが実務的です。投資回収の考え方はエネマネ投資のROI計算のページで整理しています。",
  },
  {
    label: "補助金・税制で実質負担を下げられる場合がある",
    detail:
      "省エネ設備の更新には、国や自治体の補助金、税制優遇を活用できる場合があります。補助は初期投資からの控除項目として扱い、補助後の実質投資額を年間の削減額で割って回収年数を見積もるのが基本です。ただし補助は先着や審査があり、確実に受けられるとは限らないため、補助が受けられなかった場合でも成り立つかを併せて検証しておくのが堅実です。制度の探し方は自治体補助金の探し方一覧、国の省エネ補助はSII省エネ補助金のページで整理しています。",
  },
  {
    label: "自家消費は「買う電気を減らす」方向の対策",
    detail:
      "自家消費型の太陽光などは、系統から購入する電力量そのものを減らすため、電力量料金と賦課金の両方を圧縮します。工場は屋根面積があり日中の需要も大きいことが多く、発電と需要の重なりが良い条件が揃いやすい用途です。ただし、屋根の構造・日射条件・自家消費率によって効果は変わり、設備投資も相応の規模になります。導入の一般的な考え方は蓄電池・太陽光設備の補助金のページで整理しています。本ページは特定の設備・事業者を推奨するものではありません。",
  },
];

const faqItems = [
  {
    question: "工場の電気代は1kWhあたりいくらですか？",
    answer:
      "契約区分によって異なります。電力・ガス取引監視等委員会「電力取引報」から算出した2026年4月分（確定・最新公表）の全国計単価は、受電設備を持つ一般的な工場が該当する高圧で21.37円/kWh、小規模な工場・作業所が該当する低圧電力で32.12円/kWh、大規模工場が該当する特別高圧で17.56円/kWhです。多くの工場は高圧のため、21.37円/kWhを出発点の目安に置くのが実務的です。これらは販売額÷販売電力量・全国計・検針期間ベースの参考値で、消費税・再エネ賦課金を含みません。実際の単価はエリア・電力会社・契約条件・使い方によって上下します。",
  },
  {
    question: "同じ単価なのに、工場によって実質単価が違うのはなぜですか？",
    answer:
      "基本料金の比重が事業所ごとに違うためです。基本料金は契約電力（kW）に対してかかり、使用量とは独立して発生します。そのため、負荷率（平均需要電力÷契約電力）が低い工場ほど基本料金が少ないkWhに配分され、総額を使用量で割った実質単価が高く出ます。24時間連続操業の工場は負荷率が高く実質単価が従量単価に近づく一方、二交代や日中のみの操業では実質単価が上振れします。加えて、力率が低いと基本料金の割増が生じるため、これも実質単価を押し上げる要因になります。",
  },
  {
    question: "工場の年間電気代はどう試算すればよいですか？",
    answer:
      "月間の使用電力量に単価を掛け、12か月分を積み上げるのが基本です。たとえば月間10万kWhを使う工場が高圧21.37円/kWhで購入している場合、電力量料金相当の目安は月213万7,000円、年間で約2,564万4,000円という計算になります（検算：21.37×100,000＝2,137,000／2,137,000×12＝25,644,000）。これに基本料金（契約電力×単価×12か月）と再エネ賦課金（4.18円/kWh×使用量）が加わります。より正確に把握するには、直近12か月の請求総額と総使用量から実質単価を算出し、そこから逆算する方法が確実です。",
  },
  {
    question: "省エネで使用量を減らしたのに請求額が下がりません。なぜですか？",
    answer:
      "契約電力（デマンド）が下がっていない可能性があります。基本料金は契約電力に対してかかるため、使用量を減らしてもピークが変わらなければその部分は減りません。高圧では契約電力が過去1年間の最大需要電力で決まる方式が広く使われており、一度記録したピークの影響が1年間続きます。さらに、使用量が減ったことで基本料金が薄まらなくなるため、総額を使用量で割った実質単価はむしろ上がって見えます。請求額を基本料金・電力量料金・調整額に分けて追跡すると、どこで増減したかを特定できます。",
  },
  {
    question: "生産量あたりの電気代（原単位）はどう計算しますか？",
    answer:
      "月間の使用電力量を同じ期間の生産量で割ると、原単位（kWh/生産単位）が出ます。たとえば月間216,000kWhで12,000個を生産したなら、原単位は18kWh/個です（検算：216,000÷12,000＝18）。これに1kWhあたりの単価を掛ければ、製品1単位あたりの電気コストが算出できます。高圧21.37円/kWhなら、1個あたりの電力量料金相当は384.66円です（検算：18×21.37＝384.66）。原単位で見ると生産量の増減に左右されずに効率の変化を追えるため、単価要因と効率要因を切り分けられます。",
  },
  {
    question: "力率を改善すると電気代は下がりますか？",
    answer:
      "高圧契約では、力率に応じて基本料金が割り引かれたり割り増されたりする仕組みが一般的に用いられているため、力率の改善は基本料金の低減につながり得ます。モーターやコンプレッサーなど誘導性の負荷が多い工場では力率が下がりやすく、既設の進相コンデンサが劣化して機能していないケースもあります。まず現状の力率実績を請求書や計測データで確認し、改善余地があるかを見極めることが出発点です。必要な容量や設置箇所は設備構成によって異なるため、電気主任技術者や専門業者の診断を踏まえて計画してください。",
  },
  {
    question: "この単価はいつ時点のものですか？",
    answer:
      "2026年4月分（確定・最新公表）です。電力取引報は月次で公表されており、5月分以降は本ページ作成時点で未公表です（2026年8月中旬の公表見込み）。集計は販売額÷販売電力量・全国計・検針期間ベースで、事後に訂正される可能性があります。最新の確定単価とその背景は、本サイトの法人電気料金の振り返りシリーズで継続的に整理しています。一次情報は電力・ガス取引監視等委員会の「電力取引の状況（電力取引報結果）」でご確認ください。",
  },
  {
    question: "低圧電力から高圧に切り替えれば単価は下がりますか？",
    answer:
      "全国計の単価で見ると低圧電力32.12円/kWhに対し高圧21.37円/kWhで、差は10.75円/kWhです（検算：32.12－21.37＝10.75）。ただし、この差がそのまま削減額になるわけではありません。高圧受電にはキュービクル等の受電設備の設置と保安管理の体制が前提となり、設備投資と維持管理のコストが発生します。また契約区分は需要規模によって決まる面が大きく、任意に選べるものではありません。切り替えの可否と採算は、使用量の規模・設備投資額・保安コストを含めた総額で判断する必要があります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  {
    name: "電力・ガス取引監視等委員会「電力取引の状況（電力取引報結果）」",
    url: "https://www.egc.meti.go.jp/info/business/report/results.html",
  },
  {
    name: "電力取引報 記載要領（令和8年6月改定）",
    url: "https://www.egc.meti.go.jp/info/business/report/pdf/2606_procedure.pdf",
  },
  { name: "資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "経済産業省", url: "https://www.meti.go.jp/" },
];

const relatedLinks = [
  { href: "/electricity-unit-price-per-kwh", title: "電気代の1kWhあたり単価とは", description: "単位の意味と契約区分別の確定単価・自社単価の出し方。" },
  { href: "/factory-electricity-cost-reduction", title: "工場・事業所の電気代削減ガイド", description: "量・契約・単価の総合的な削減アプローチ。" },
  { href: "/kw-kwh-kva-difference", title: "kW・kWh・kVAの違い", description: "電力・電力量・皮相電力の単位を整理する。" },
  { href: "/contract-demand-what-is-it", title: "契約電力とは何か", description: "基本料金の算定根拠になるkWの決まり方。" },
  { href: "/demand-value-guide", title: "デマンド値の見方", description: "最大需要電力の把握とピークの特定。" },
  { href: "/peak-demand-management", title: "ピークデマンド管理", description: "ピークカットで基本料金を抑える考え方。" },
  { href: "/what-is-power-factor", title: "力率とは何か", description: "基本料金の割引・割増に関わる指標。" },
  { href: "/basic-charge-explained", title: "基本料金の解説", description: "契約電力に対してかかる固定部分の考え方。" },
  { href: "/energy-charge-explained", title: "電力量料金の解説", description: "省エネの効果が直接現れる従量部分。" },
  { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "毎月変動する調整額の仕組み。" },
  { href: "/renewable-energy-surcharge", title: "再エネ賦課金の解説", description: "2026年度4.18円/kWhの位置づけ。" },
  { href: "/capacity-contribution-explained", title: "容量拠出金の解説", description: "供給力確保の費用と料金への転嫁。" },
  { href: "/fixed-vs-market-linked-guide", title: "固定と市場連動の比較ガイド", description: "稼働パターンに合う料金メニューの型。" },
  { href: "/energy-management-roi-calculation", title: "エネマネ投資のROI計算", description: "補助後の投資回収の考え方。" },
  { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（設備単位型）", description: "国の省エネ補助の枠組み。" },
  { href: "/subsidy-local-government-list", title: "自治体補助金の探し方一覧", description: "都道府県・市区町村の補助を探す入口。" },
  { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助金", description: "自家消費で買電量を減らす投資。" },
  { href: "/business-electricity-price-benchmark", title: "法人向け電気料金の相場", description: "契約区分別の単価レンジと年間コストの目安。" },
  { href: "/business-electricity-retrospective", title: "法人電気料金の振り返りシリーズ", description: "月次の確定単価と背景を継続的に整理。" },
  { href: "/industry-electricity-calculator", title: "業種別電気代計算機", description: "業種・規模・契約・エリアから年間電気代と削減余地を試算。" },
  { href: "/simulate", title: "電気料金リスクシミュレーター", description: "現状契約のリスクと削減余地を診断。" },
];

const contentCtaLinks = [
  { href: "/contact", label: "工場の電気代を相談する" },
  { href: "/industry-electricity-calculator", label: "自社の電気代を試算する" },
  { href: "/simulate", label: "シミュレーターで診断する" },
];

export default function FactoryElectricityUnitPricePerKwhPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/factory-electricity-unit-price-per-kwh"
        datePublished="2026-08-08"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "工場の1kWhあたり電気代", url: "https://simulator.eic-jp.org/factory-electricity-unit-price-per-kwh" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/basic" className="underline-offset-2 hover:underline">基礎から知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">工場の1kWhあたり電気代</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            工場の電気代は1kWhあたりいくらか｜高圧21.37円/kWhを基準にした単価の見方と原単位
          </h1>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-slate-800">
            本記事は法人・事業者向けの内容です。契約電力・負荷率・力率など、工場の高圧契約に固有の論点を中心に扱います。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            工場の1kWhあたり電気代を、契約区分別の確定単価を基準に整理します。電力・ガス取引監視等委員会「電力取引報」から算出した2026年4月分（確定・最新公表）の全国計単価は、高圧21.37円/kWh・低圧電力32.12円/kWh・特別高圧17.56円/kWhです。受電設備を持つ一般的な工場は高圧が中心のため、21.37円/kWhが出発点の目安になります。ただし工場では、同じ単価でも負荷率（連続操業か二交代か）、契約電力（デマンド）、力率によって実質単価が変わります。本ページでは、区分別の目安、単価に効く要素、生産量あたりの原単位での見方、単価が高い工場が確認すべき点までを、計算の手順に沿って解説します。
          </p>
          <AuthorBadge publishedAt="2026-08-08" updatedAt="2026-08-08" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>工場の契約区分別の1kWh単価の目安（高圧21.37・低圧電力32.12・特高17.56円/kWh）</li>
              <li>負荷率（連続操業／二交代）で実質単価が変わる仕組みと計算方法</li>
              <li>契約電力（デマンド）・力率という「単価に現れない」要素の効き方</li>
              <li>生産量あたりの原単位（kWh/生産単位）で単価要因と効率要因を切り分ける方法</li>
              <li>使用量削減とピーク対策で試算式が異なる理由（省エネ投資の回収見積もり）</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 1kWhという単位そのものの意味や自社単価の算出方法は{" "}
            <Link href="/electricity-unit-price-per-kwh" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気代の1kWhあたり単価とは</Link>
            、工場全体の削減アプローチは{" "}
            <Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場・事業所の電気代削減ガイド</Link>
            、自社条件での試算は{" "}
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            をご覧ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">工場の1kWhあたり電気代の目安（契約区分別）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              工場の電気代を1kWhあたりで捉えるとき、基準になるのは契約区分別の単価です。下表は電力・ガス取引監視等委員会「電力取引報」から算出した2026年4月分（確定・最新公表）の全国計単価で、受電設備を持つ一般的な工場が該当する高圧は21.37円/kWhです。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">契約区分</th>
                    <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">1kWhあたり単価</th>
                    <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">該当する工場の規模</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">特別高圧</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">17.56 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">大規模工場・連続操業の重工業など</td>
                  </tr>
                  <tr className="bg-sky-50">
                    <td className="border border-slate-200 px-3 py-2 font-semibold">高圧</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">21.37 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">受電設備を持つ一般的な規模の工場（工場の多数派）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">低圧電力</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">32.12 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">受電設備を持たない小規模な工場・作業所</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">（参考）低圧電灯</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">25.94 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">照明・コンセント中心の契約（動力設備なし）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">{SOURCE_NOTE}</p>
            <div className="mt-3 rounded-lg border border-slate-300 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">{PRICE_DEFINITION.heading}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-6 text-slate-700">
                <li>販売額に含まれるもの: {PRICE_DEFINITION.included}</li>
                <li>販売額に含まれないもの: {PRICE_DEFINITION.excluded}</li>
                {PRICE_DEFINITION.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <p className="mt-2 text-xs leading-6 text-slate-700">{PRICE_DEFINITION.caution}</p>
              <p className="mt-2 text-xs text-slate-500">
                出典:{" "}
                <a href="https://www.egc.meti.go.jp/info/business/report/pdf/2606_procedure.pdf" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">電力取引報 記載要領（令和8年6月改定）</a>
              </p>
            </div>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {factoryUnitPrice.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">工場の電気代の内訳と単価への効き方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              工場の請求額は、基本料金・電力量料金・燃料費調整額・再エネ賦課金などの積み上げで決まります。このうち省エネが直接効くのは電力量料金で、基本料金は使用量を減らしても下がりません。どの項目がどう効くかを分けて把握することが、打ち手を誤らないための前提になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {costStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              請求書の項目そのものの読み方は{" "}
              <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気代の内訳</Link>
              、単位・単価の基礎は{" "}
              <Link href="/electricity-unit-price-per-kwh" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気代の1kWhあたり単価とは</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">負荷率・稼働パターンで単価が変わる仕組み</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同じ契約区分・同じ従量単価でも、工場によって実質単価が違うのは負荷率が異なるためです。負荷率は平均需要電力を契約電力で割った値で、契約した容量をどれだけ平準的に使えているかを表します。連続操業と二交代・日中操業では、この値が大きく変わります。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {loadFactor.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              季節による変動の均し方は{" "}
              <Link href="/electricity-cost-seasonal-pattern" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気代の季節変動</Link>
              、ピークの抑え方は{" "}
              <Link href="/peak-demand-management" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ピークデマンド管理</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンド（契約電力）と単価の関係</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧の工場では、契約電力が過去1年間の最大需要電力で決まる方式が広く使われています。30分のピークが以後1年間の基本料金を左右するため、大型設備を複数持つ工場ではこの影響が特に大きくなります。デマンドを下げることは、使用量を減らさずに実質単価を下げられる数少ない打ち手です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {demandRelation.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約電力の決まり方は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力とは何か</Link>
              、デマンドの実態把握は{" "}
              <Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値の見方</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">力率改善が単価に与える影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              力率は電気を無駄なく使えているかを表す指標で、高圧契約では基本料金の割引・割増に直結します。モーター・コンプレッサー・溶接機など誘導性の負荷が多い工場では下がりやすく、しかも従量単価には現れないため見落とされやすい要素です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {powerFactor.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              力率の仕組みは{" "}
              <Link href="/what-is-power-factor" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">力率とは何か</Link>
              で詳しく整理しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">生産量あたりの原単位（kWh/生産単位）で見る考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              工場では、電気代の絶対額だけを追っていると生産量の増減に紛れて効率の変化が見えません。製品1単位あたり何kWh使っているかという原単位で見ると、単価要因（市況・契約）と効率要因（設備・運用）を切り分けられます。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {perUnitOutput.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              工場全体の削減アプローチは{" "}
              <Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場・事業所の電気代削減ガイド</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">工場の電気代を試算する手順（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              12か月分の請求データから実質単価を出し、契約区分の水準と突き合わせ、負荷率・デマンド・力率の実績を確認したうえで、計算機で年間コストと削減余地を試算するという流れです。この順序で進めると、実質単価が高い原因が契約側にあるのか使い方側にあるのかを切り分けられます。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {howToEstimate.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              相場水準との比較は{" "}
              <Link href="/business-electricity-price-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人向け電気料金の相場</Link>
              、自社条件での試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              から行えます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">単価が高い工場が確認すべきポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実質単価が全国計の水準より高い場合、原因は契約条件だけとは限りません。契約区分・契約電力の妥当性、ピークの発生源、力率、料金メニューの型、使用量そのものという順に点検すると、打ち手の優先順位が見えてきます。本節は中立的な確認観点の整理です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {whatToCheck.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              料金メニューの型の比較は{" "}
              <Link href="/fixed-vs-market-linked-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定と市場連動の比較ガイド</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ投資・補助金の観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ投資は電力量料金に、ピーク対策・力率改善は基本料金に効くため、試算式を分けて考える必要があります。あわせて、補助金や税制優遇によって実質負担を下げられる場合もありますが、補助が受けられなかった場合でも成り立つかを併せて検証しておくのが堅実です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {investmentView.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資回収の考え方は{" "}
              <Link href="/energy-management-roi-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エネマネ投資のROI計算</Link>
              、補助制度は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金（設備単位型）</Link>
              、{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体補助金の探し方一覧</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで工場の年間コストと削減余地を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の実質単価を算出したら、次はそれが年間コストにどう効くかを確認します。使用量を減らした場合とピークを下げた場合では効き方が違うため、両方を試算して比較すると投資の優先順位を決めやすくなります。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>12か月分の請求総額と使用量から、季節変動をならした実質単価を出す</li>
              <li>契約区分の水準（高圧21.37円/kWh等）と突き合わせ、差の大きさを確認する</li>
              <li>負荷率とデマンド実績から、基本料金の比重がどの程度かを把握する</li>
              <li>使用量削減とピーク対策のそれぞれで年間効果を試算し、優先順位を決める</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・エリア別単価・新電力比較の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、検討にご活用ください。自社条件の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              から行えます。
            </p>
          </section>

          <div className="mt-6">
            <ConsultCta from="factory-electricity-unit-price-per-kwh" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-08-08" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="工場の1kWh単価と削減余地を専門家に相談する"
            description="工場の実質単価は、契約区分・料金メニューだけでなく、負荷率・契約電力（デマンド）・力率によって大きく変わります。全国計の水準と比べて自社がどの位置にあるのか、差の原因が契約側にあるのか使い方側にあるのかは、請求書とデマンド実績を突き合わせて初めて見えてきます。まず業種別電気代計算機で年間コストの目安を試算し、必要に応じて専門家へご相談ください。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="工場の電気代、専門家に相談しませんか？"
            description="工場の1kWh単価の算出、契約区分別水準との比較、負荷率とデマンドから見た基本料金の比重の把握、力率の改善余地の見極め、使用量削減とピーク対策のどちらを優先すべきかの判断は、請求書とデマンド実績の読み解きを要します。エネルギー情報センターは中立的立場で、特定の電力会社・契約形態・料金プラン・設備ベンダーを推奨することなく、法人・事業者の電気代対策の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
