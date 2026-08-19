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
  "電気代の1kWhあたり単価とは｜法人の契約区分別・確定単価と自社単価の出し方（2026年5月分・確定）";
const pageDescription =
  "「1kWhあたりの電気代はいくらか」を法人・事業者向けに整理します。電力・ガス取引監視等委員会「電力取引報」から算出した2026年5月分（確定・最新公表）の全国計単価は、特別高圧17.45円/kWh・高圧22.78円/kWh・低圧電灯27.85円/kWh・低圧電力34.42円/kWhです。1kWhという単位の意味（kWとkWhの違い）、自社の1kWh単価を請求書から出す2通りの方法、単価を構成する要素（電力量料金・燃料費調整・再エネ賦課金4.18円/kWh・容量拠出金の転嫁）、単価が同じでも請求額が変わる理由（デマンド・力率・時間帯）まで、計算の考え方に絞って解説します。数値は2026年度時点の整理です。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "1kwh 電気代",
    "電気代 1kwh いくら",
    "電気代 kwh 単価",
    "法人 電気代 1kwh 単価",
    "kw kwh 違い 電気代",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-unit-price-per-kwh",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-unit-price-per-kwh",
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
  "※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態・料金プランを推奨するものではありません。";

const SOURCE_NOTE =
  "※ 単価は電力・ガス取引監視等委員会「電力取引報」から算出した確定単価（販売額÷販売電力量・全国計・事後訂正あり得る・多くの事業者が検針期間ベースで報告（暦月ベースも可））にもとづく参考値です。2026年5月分が確定・最新公表で、6月分以降は未公表です（6月分＝2026年9月中旬の公表見込み）。消費税・再エネ賦課金を含まない参考値であり、実際の請求額は電力会社・契約条件により異なります。";

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
    "したがって、税込・賦課金込で表示される請求書の単価と単純に比較することはできません。自社の単価と比べる際は、請求書側から消費税と再生可能エネルギー発電促進賦課金を除いた金額で比較してください。",
};

const unitBasics = [
  {
    label: "kWh（キロワットアワー）は「electricityをどれだけ使ったか」を表す量の単位",
    detail:
      "kWhは電力量の単位で、1kWの機器を1時間動かしたときに消費する電力量が1kWhです。電気料金は原則としてこのkWhに単価を掛けて計算されるため、「1kWhあたり何円か」が電気代の基礎になります。たとえば消費電力1,000W（＝1kW）のヒーターを1時間使えば1kWh、500Wの機器を2時間使っても1kWhです。事業所の請求書に記載される「使用電力量」はこのkWhで表され、月間の使用量に単価を掛けたものが電力量料金の基本形になります。単位の理解は、自社の電気代を分解して考える出発点です。",
  },
  {
    label: "kW（キロワット）は「同時にどれだけ使うか」を表す瞬間の単位",
    detail:
      "kWは電力の単位で、その瞬間にどれだけの電気を使っているかを表します。kWhが「量」なのに対し、kWは「勢い」にあたります。法人の電気料金では、このkWが基本料金の算定根拠になる契約が一般的です。つまり、同じ月間使用量（kWh）でも、瞬間的な最大使用電力（kW）が大きい事業所は基本料金が高くなります。kWとkWhを混同すると、「1kWの電気代はいくらか」という問いの立て方自体がずれてしまいます。1kWは瞬間値なので、それだけでは金額に換算できず、「何時間使うか」を掛けて初めてkWhになり金額になります。両者の違いはkW・kWh・kVAの違いのページで詳しく整理しています。",
  },
  {
    label: "「1kWの電気代」は「1kW×使用時間」でkWhに直して初めて計算できる",
    detail:
      "検索では「1kW 電気代」という問いも多く見られますが、1kWは瞬間の電力であり、それ単体では金額になりません。1kWの機器を1時間使えば1kWh、8時間使えば8kWhとなり、そこに1kWhあたりの単価を掛けて金額が出ます。仮に単価を高圧の22.78円/kWhとすれば、1kWの機器を8時間使ったときの電力量料金の目安は22.78円×8＝182.2円程度という計算になります（検算：22.78×8＝182.24）。この「時間を掛ける」という一手間を挟むことが、kWとkWhを取り違えないための実務的なコツです。実際の請求額には基本料金や各種調整額も加わるため、この計算はあくまで電力量料金部分の目安です。",
  },
  {
    label: "kVA（キロボルトアンペア）は低圧契約でよく使われる別の単位",
    detail:
      "小規模な事業所や店舗の低圧契約では、契約容量がkVA（キロボルトアンペア）で表されることがあります。kVAは見かけの電力を表す単位で、力率が1に近ければkWとほぼ同じ値になりますが、力率が低いとkWよりkVAのほうが大きくなります。契約書や請求書でkWとkVAのどちらが使われているかを確認しないと、契約容量の比較を誤ることがあります。単位の使い分けはkW・kWh・kVAの違いのページで整理しています。本ページでは、金額の計算に直結するkWh（電力量）と、その1単位あたりの単価に絞って扱います。",
  },
];

const currentUnitPrices = [
  {
    name: "特別高圧: 17.45円/kWh",
    role: "大規模工場・データセンター・大型商業施設など",
    detail:
      "特別高圧は、非常に大きな電力需要を持つ事業者が用いる契約区分で、2026年5月分（確定）の全国計単価は17.45円/kWhです。4区分のなかで最も低い水準で、これは大口需要家ほど1kWhあたりの単価が下がる構造を反映しています。ただし、特別高圧は受電設備の規模・保安体制・契約手続きの負担が大きく、単価が低いというだけで選べる区分ではありません。自社がどの区分に該当するかは需要規模で決まるため、区分そのものを比較して選ぶ性質のものではない点に注意してください。数値は電力取引報から算出した参考値で、実際の請求額は電力会社・契約条件により異なります。",
  },
  {
    name: "高圧: 22.78円/kWh",
    role: "工場・商業施設・病院・学校・物流施設・オフィスビルなど",
    detail:
      "高圧は法人でもっとも広く使われる主力の契約区分で、2026年5月分（確定）の全国計単価は22.78円/kWhです。工場・商業施設・病院・学校・物流施設・オフィスビルなど、事業用途の多くがこの区分に該当します。「法人の1kWhあたりの電気代はいくらか」という問いに対して、まず基準にすべきなのがこの水準です。特別高圧の17.45円/kWhとの差は5.33円/kWh（検算：22.78－17.45＝5.33）で、需要規模による単価差の大きさが読み取れます。ただし全国計の平均であるため、エリア・電力会社・契約条件によって実際の単価は上下します。",
  },
  {
    name: "低圧電灯: 27.85円/kWh",
    role: "小規模事業所・店舗・事務所（照明・コンセント中心の契約）",
    detail:
      "低圧電灯は、小規模な事業所・店舗・事務所などで用いられる契約区分で、2026年5月分（確定）の全国計単価は27.85円/kWhです。この区分は家庭の電灯契約と同じ枠組みで集計されているため、「家庭の電気代の単価」に近い水準として読むこともできます。高圧の22.78円/kWhと比べると5.07円/kWh高い水準です（検算：27.85－22.78＝5.07）。規模が小さいほど1kWhあたりの単価が高くなる傾向が、この数字に表れています。低圧から高圧への切り替えは受電設備の設置が前提になるため、単価差だけで判断できるものではありません。",
  },
  {
    name: "低圧電力: 34.42円/kWh",
    role: "動力設備を持つ小規模事業所（業務用エアコン・厨房機器・小型機械など）",
    detail:
      "低圧電力は、業務用エアコン・厨房機器・小型の生産設備など動力を使う小規模事業所向けの契約区分で、2026年5月分（確定）の全国計単価は34.42円/kWhと4区分でもっとも高い水準です。高圧の22.78円/kWhとの差は11.64円/kWh（検算：34.42－22.78＝11.64）で、同じ電力量を使っても契約区分によって金額が大きく変わることが分かります。動力設備を持つ小規模事業所で電気代の負担感が大きいのは、この単価水準が背景にあります。ただし、区分の変更には受電設備・工事・契約手続きが伴うため、単価差がそのまま削減額になるわけではありません。",
  },
  {
    name: "4区分の関係: 需要規模が大きいほど1kWhあたりは下がる",
    role: "単価表の読み方／全国計・販売額÷販売電力量の参考値",
    detail:
      "4つの区分を並べると、特別高圧17.45円/kWh＜高圧22.78円/kWh＜低圧電灯27.85円/kWh＜低圧電力34.42円/kWhという順になり、需要規模が大きい区分ほど1kWhあたりの単価が低いという関係が読み取れます。最も低い特別高圧と最も高い低圧電力の差は16.97円/kWh（検算：34.42－17.45＝16.97）で、同じ1kWhでも区分によって倍近い開きがあります。これは、送配電の経路が短いほど損失やコストが小さいこと、大口ほど設備を効率的に使えることなどが背景にあります。自社の単価がこの水準と大きく離れている場合、契約区分・契約条件・使い方のいずれかに理由があると考えられます。",
  },
  {
    name: "この単価はいつ時点の、どういう性質の数字か",
    role: "データの基準／2026年5月分が確定・最新公表",
    detail:
      "本ページで示す4区分の単価は、電力・ガス取引監視等委員会「電力取引報」から算出した確定単価で、販売額÷販売電力量・全国計の数値です（多くの事業者が検針期間ベースで報告・暦月ベースも可）。2026年5月分が確定・最新公表で、6月分以降は未公表です（6月分＝2026年9月中旬の公表見込み）。したがって「今この瞬間の単価」ではなく、直近で確定した月の全国平均という性質の数字です。また、消費税・再エネ賦課金を含まない参考値であり、事後に訂正される可能性もあります。自社の単価と比較する際は、この基準の違いを踏まえてください。月次の推移は法人電気料金の振り返りシリーズで継続的に整理しています。",
  },
];

const householdVsCorporate = [
  {
    label: "そもそも集計されている「契約の種類」が違う",
    detail:
      "家庭で使われるのは電灯契約で、事業所でも小規模なものは同じ低圧電灯の枠に入ります。電力取引報でも低圧電灯は家庭を含む電灯契約として集計されており、その全国計は2026年5月分（確定）で27.85円/kWhです。一方、法人で主流の高圧は22.78円/kWhで、両者には5.07円/kWhの差があります（検算：27.85－22.78＝5.07）。つまり「家庭と法人で単価が違う」という現象の大部分は、企業努力の差ではなく契約区分の違いによる構造的なものです。自社が低圧電灯であれば、家庭向けの単価感覚に近い水準になるのは自然なことといえます。",
  },
  {
    label: "基本料金の決まり方が違う（法人はkW、家庭はアンペアや定額が中心）",
    detail:
      "法人の高圧契約では、基本料金が契約電力（kW）に単価を掛けて計算されるのが一般的で、この契約電力は過去1年間の最大需要電力（デマンド）で決まる方式が広く使われています。一方、家庭の電灯契約ではアンペア数や定額に基づく方式が中心です。この違いにより、法人では「瞬間的にどれだけ使ったか」が基本料金を通じて総額に効いてきます。1kWhあたりの単価だけを比べても、この基本料金の構造差は見えません。基本料金の考え方は基本料金の解説、契約電力の決まり方は契約電力とは何かのページで整理しています。",
  },
  {
    label: "力率による割引・割増が法人契約にはある",
    detail:
      "法人の高圧契約では、力率という指標に応じて基本料金が割り引かれたり割り増されたりする仕組みが一般的に用いられます。力率は電気を無駄なく使えているかを表す指標で、これが低いと同じ電力量を使っていても基本料金が上がることがあります。家庭の契約にはこうした仕組みは通常ありません。この点も、家庭と法人で「同じだけ使ったのに金額が違う」現象を生む要因です。力率の考え方は力率とは何かのページで整理しています。単価だけでなく、こうした契約上の仕組みが総額に効いていることを押さえておくと、請求額の増減を説明しやすくなります。",
  },
  {
    label: "負荷率（使い方の平準度）が単価の実感を左右する",
    detail:
      "負荷率とは、最大需要電力に対して平均的にどれだけ使っているかを表す考え方です。同じ月間使用量でも、ピークだけ突出して普段は少ない使い方だと、基本料金の負担が相対的に重くなり、使用量で割った1kWhあたりの実質単価が高く出ます。逆に、24時間稼働の工場のように使い方が平準化されていると、基本料金が多くのkWhに薄く配分され、実質単価は下がりやすくなります。家庭は一般に負荷率が低く、連続操業の事業所は高くなる傾向があります。この構造は、業種や稼働パターンによって実質単価が変わる理由でもあります。",
  },
  {
    label: "本ページは法人・事業者向けだが、家庭の水準も知っておくと比較しやすい",
    detail:
      "本ページは法人・事業者を対象に、事業所の電気代を分解して考えるための整理です。ただし「1kWhあたりいくらか」という問いは家庭でも共通のため、家庭に近い水準として低圧電灯27.85円/kWhを併記しています。家庭向けの節電や料金プラン選びを目的とされている場合、本ページで扱う契約電力・力率・負荷率といった論点は当てはまらない部分が多くなります。その場合は、ご契約中の電力会社が公表する家庭向けの料金表をご確認いただくのが確実です。本サイトのシミュレーターや相談導線は法人・事業者向けの内容です。",
  },
];

const howToCalculate = [
  {
    label: "方法1: 請求額の総額 ÷ 使用電力量（＝実質単価・総額ベース）",
    detail:
      "もっとも実感に近いのは、月の請求総額を同じ月の使用電力量（kWh）で割る方法です。この値は基本料金・電力量料金・燃料費調整額・再エネ賦課金などをすべて含んだうえでの1kWhあたりのコストになり、「結局いくらで電気を買っているのか」を表します。たとえば月の請求額が227,800円で使用量が10,000kWhなら、実質単価は22.78円/kWhという計算です（検算：227,800÷10,000＝22.78）。この方法の利点は、料金メニューの構造が違う会社どうしでも同じ土俵で比較できることです。一方、基本料金が含まれるため、使用量が少ない月ほど実質単価は高く出ます。月ごとの変動を見るときはこの性質を踏まえてください。",
  },
  {
    label: "方法2: 電力量料金 ÷ 使用電力量（＝従量部分だけの単価）",
    detail:
      "もう一つは、請求書の電力量料金の欄だけを使用電力量で割る方法です。この値は「使った分だけにかかる単価」を表し、基本料金の影響を受けません。料金メニューの従量単価そのものを比べたいときや、使用量を減らしたときにいくら減るかを見積もりたいときに適しています。省エネ投資の効果を試算する場面では、削減されるのは主に電力量料金であるため、この従量部分の単価を使うほうが実態に合います。ただし、燃料費調整額や再エネ賦課金を含めるかどうかで値が変わるため、どこまでを含めたかを明示して比較することが重要です。",
  },
  {
    label: "2つの使い分け: 比較なら総額ベース、削減試算なら従量ベース",
    detail:
      "実務では、この2つを目的で使い分けるのが分かりやすい整理です。他社見積もりとの比較や、前年同月との比較といった「結局どちらが高いか」を見る場面では、基本料金まで含んだ総額ベースの実質単価が適しています。一方、「LEDに更新して使用量を1万kWh減らしたらいくら下がるか」といった削減試算では、基本料金は減らないため従量部分の単価を使います。両者を混同すると、削減効果を過大に見積もることになります。単価の比較だけで契約の有利不利を判断できない理由は、単価の安さだけで選ばない理由のページでも整理しています。",
  },
  {
    label: "比較するときは「同じ条件で割る」ことを徹底する",
    detail:
      "1kWh単価を比べる際にもっとも起きやすい誤りは、含める項目が揃っていない状態で比較してしまうことです。片方は燃料費調整額込み、もう片方は抜きといった状態では、差が実態を表しません。また、検針期間の日数が月によって異なるため、月次で比べる場合は日数の違いも意識する必要があります。本ページで示す4区分の単価も、消費税・再エネ賦課金を含まない参考値という前提があります。自社の値と比べるときは、まず「何を含んだ数字か」を揃えることから始めてください。比較の観点は単価比較だけで終わらせないチェックリストのページも参考になります。",
  },
  {
    label: "12か月分で見ると季節変動をならせる",
    detail:
      "1か月だけの実質単価は、その月の稼働状況や気温によって大きく振れます。空調負荷の大きい夏冬は使用量が増えて基本料金が薄まり実質単価が下がる一方、稼働の少ない月は逆に高く出ます。したがって、自社の単価水準を把握するには12か月分の請求額と使用量を合計してから割るのが実務的です。年間の総額を年間の総使用量で割れば、季節変動をならした実質単価が得られます。この値であれば、本ページの4区分の水準とも比較しやすくなります。季節による電気代の動き方は電気代の季節変動のページで整理しています。",
  },
];

const priceComponents = [
  {
    label: "電力量料金の従量単価（単価の土台）",
    detail:
      "1kWhあたりのコストの土台になるのが、料金メニューで定められた電力量料金の従量単価です。契約区分・料金メニュー・時間帯によって水準が異なり、契約によっては昼夜で単価が分かれている場合もあります。市場連動型のメニューでは、この部分がJEPXの価格に連動して変動します。固定型では一定期間据え置かれる代わりに、その水準に市場変動のリスク分が織り込まれるのが一般的です。どちらの型が自社に合うかは使い方とリスク許容度によって変わります。電力量料金の位置づけは電力量料金の解説のページで整理しています。",
  },
  {
    label: "燃料費調整額（燃料市況・為替で毎月動く）",
    detail:
      "燃料費調整額は、発電に使う燃料の価格変動を毎月の料金に反映させる仕組みで、1kWhあたりの金額として加算または減算されます。燃料価格や為替が上がれば単価が上がり、下がれば単価も下がるため、同じ契約のまま何もしなくても月ごとに実質単価が変わります。この変動幅は小さくないため、「先月と単価が違う」原因の多くはここにあります。固定型のメニューでも燃料費調整が適用される場合があり、固定＝完全に変動しないという意味ではない点に注意が必要です。仕組みは燃料費調整額の解説、固定プランでの扱いは固定プランでも燃調は変動するかのページで整理しています。",
  },
  {
    label: "再生可能エネルギー発電促進賦課金 4.18円/kWh（2026年度）",
    detail:
      "再エネ賦課金は、再生可能エネルギーの導入を支えるために電気の使用量に応じて全需要家が負担する仕組みで、2026年度は4.18円/kWhです。使用量に比例して加算されるため、使用量が多い事業所ほど負担の絶対額が大きくなります。本ページで示す4区分の単価は消費税・再エネ賦課金を含まない参考値であるため、賦課金は別途上乗せして考える必要があります。たとえば高圧の22.78円/kWhに賦課金を加えると26.96円/kWh相当という計算になります（検算：22.78＋4.18＝26.96）。賦課金は事業者側で選べる項目ではないため、負担を減らすには使用量そのものを減らすか自家消費を増やすかになります。詳細は再エネ賦課金の解説のページをご覧ください。",
  },
  {
    label: "容量拠出金の転嫁分（料金メニューにより扱いが異なる）",
    detail:
      "容量拠出金は、将来の供給力を確保するための費用を小売電気事業者が負担する仕組みで、その一部が料金に転嫁される場合があります。転嫁の方法や金額の示し方は料金メニューによって異なり、電力量料金に含める形もあれば、別項目として明示される形もあります。請求書に見慣れない項目が増えた場合、この転嫁分であることがあります。自社の契約でどう扱われているかは、料金メニューの内訳と請求書の項目を突き合わせて確認する必要があります。仕組みは容量拠出金の解説のページで整理しています。",
  },
  {
    label: "基本料金は「1kWhあたり」には直接現れないが総額に効く",
    detail:
      "基本料金は契約電力（kW）に対してかかるもので、使用量（kWh）とは独立して発生します。そのため、料金メニュー上の従量単価には現れませんが、総額を使用量で割った実質単価には確実に効いてきます。使用量が少ない月ほど基本料金が薄まらず、実質単価が高く出るのはこのためです。逆にいえば、使用量を減らしても基本料金は減らないため、削減試算では基本料金部分を分けて扱う必要があります。基本料金の決まり方は基本料金の解説、契約電力の考え方は契約電力とは何かのページで整理しています。",
  },
  {
    label: "請求書の項目そのものの読み方は別ページで整理",
    detail:
      "本ページは「1kWhという単位に何が積み上がっているか」という視点で構成要素を整理しています。一方、請求書に並ぶ項目そのものをどう読むか、どの順番で確認するかについては、法人の電気代の内訳のページで詳しく扱っています。請求額が上がったときにどこから確認するかという実務的な手順も同ページにまとめています。単価の構造を理解したうえで請求書を読むと、増減の原因が特定しやすくなります。両ページを併せてご覧いただくと、単位・単価・請求額の関係が一続きで把握できます。",
  },
];

const sameUnitDifferentBill = [
  {
    label: "契約電力（デマンド）が上がると、単価が同じでも総額は増える",
    detail:
      "法人の高圧契約では、基本料金が契約電力（kW）に単価を掛けて決まり、この契約電力は過去1年間の最大需要電力で決まる方式が広く使われています。つまり、たった30分のピークが記録されると、その後1年間にわたって基本料金が上がり続けることがあります。従量単価がまったく同じでも、このピークの記録によって総額は変わります。使用量を減らしたのに請求額があまり下がらない、という現象の典型的な原因がこれです。デマンドの考え方はデマンド値の見方、ピークの抑え方はピークデマンド管理のページで整理しています。",
  },
  {
    label: "力率が低いと基本料金が割り増しになる",
    detail:
      "力率は電気を無駄なく使えているかを示す指標で、法人の高圧契約では力率に応じて基本料金が割り引かれたり割り増されたりする仕組みが一般的です。モーターなどの誘導性の負荷が多い事業所では力率が下がりやすく、改善しないままだと基本料金の負担が続きます。従量単価が同じでも力率で総額が変わるのは、この仕組みによるものです。力率は進相コンデンサの設置などで改善できる場合があり、投資額に対して効果が読みやすい対象でもあります。仕組みは力率とは何かのページをご覧ください。",
  },
  {
    label: "時間帯別メニューでは「いつ使うか」で実質単価が変わる",
    detail:
      "時間帯によって従量単価が分かれている料金メニューでは、同じ量を使っても使う時間帯によって総額が変わります。昼間の単価が高く夜間が安い設計であれば、稼働を夜間に寄せられる工程を持つ事業所は実質単価を下げられる可能性があります。逆に、昼間中心の稼働であれば実質単価は高く出ます。市場連動型のメニューではこの変動がさらに直接的になり、市場価格が高い時間帯に使えば実質単価が跳ね上がります。時間帯や市場価格との関係は市場連動プランの解説のページで整理しています。",
  },
  {
    label: "検針期間の日数が月によって違う",
    detail:
      "電気料金は検針日から検針日までの期間で計算されるため、月によって対象日数が異なります。日数が多い月は使用量も基本料金の日割り計算も増えるため、単純に「先月と比べて増えた」と判断すると誤ることがあります。前年同月と比較する場合も、検針期間がずれていれば比較の前提が揃いません。本ページで示す4区分の単価も、多くの事業者が検針期間ベースで報告した集計にもとづきます（暦月ベースも可とされています）。月次の比較を行う際は、日数を揃えるか1日あたりに換算するといった調整をすると、実態が見えやすくなります。",
  },
  {
    label: "燃料費調整額の変動で、契約を変えなくても実質単価は動く",
    detail:
      "燃料費調整額は毎月見直されるため、契約内容をまったく変えていなくても実質単価は月ごとに変わります。燃料価格や為替の動きが大きい局面では、この変動幅も大きくなります。したがって、ある月の実質単価だけを見て「契約が悪い」と判断するのは早計です。複数月、できれば12か月分をならして見ることで、契約条件による差と市況による変動を切り分けられます。市況が単価に効く仕組みは燃料費調整額の解説のページで整理しています。",
  },
];

const whenUnitPriceIsHigh = [
  {
    label: "まず契約区分と契約電力が実態に合っているかを確認する",
    detail:
      "1kWh単価が高いと感じたとき、最初に確認すべきなのは契約区分と契約電力が現在の使い方に合っているかです。設備の入れ替えや稼働の変化で使用実態が変わっているのに、契約が過去のまま据え置かれている例は少なくありません。契約電力が実態より大きければ基本料金を余分に払っていることになり、実質単価を押し上げます。逆に小さすぎればピーク時に契約超過のリスクがあります。契約電力の考え方は契約電力とは何か、デマンドの実態把握はデマンド値の見方のページで整理しています。",
  },
  {
    label: "ピークと力率という「単価に現れない要素」を点検する",
    detail:
      "従量単価そのものが平均的でも、ピークが高い・力率が低いという要因があると実質単価は上がります。この2つは料金メニューを変えなくても改善できる余地がある部分で、しかも改善効果が基本料金に直接効きます。デマンド監視によるピークカットや、力率改善のための設備対応は、契約の切り替えよりも先に検討する価値がある場合があります。まず自社のデマンド推移と力率の実績を確認し、改善余地があるかを見極めることが実務的です。ピーク対策はピークデマンド管理のページで整理しています。",
  },
  {
    label: "料金メニューの型（固定・市場連動）が自社の使い方に合っているか",
    detail:
      "料金メニューには固定型と市場連動型があり、どちらが有利かは市況と自社の使い方によって変わります。市場連動型は市場価格が低い局面では有利に働きますが、高騰局面では実質単価が大きく上がります。固定型は変動を抑えられる代わりに、その安定性が価格に織り込まれます。どちらが自社に合うかは、価格変動をどこまで許容できるか、使う時間帯を調整できるかによって決まります。両者の比較は固定と市場連動の比較ガイドのページで整理しています。本ページは特定のメニューを推奨するものではありません。",
  },
  {
    label: "見積もりを取る場合は「同じ条件で」比較する",
    detail:
      "他社の見積もりと比較する場合、従量単価だけを並べても実態は見えません。基本料金の単価、燃料費調整の扱い、再エネ賦課金の記載有無、契約期間や解約条件まで含めて、同じ条件に揃えて比較する必要があります。単価が安く見えても、基本料金が高い、あるいは変動リスクが大きいということもあります。年間の総額ベースで試算し、複数のシナリオで比較するのが確実です。比較の観点は単価比較だけで終わらせないチェックリスト、単価の安さだけで判断できない理由は単価の安さだけで選ばない理由のページで整理しています。",
  },
  {
    label: "使用量そのものを減らす選択肢も併せて検討する",
    detail:
      "単価が高いときの対応は、契約の見直しだけではありません。再エネ賦課金のように使用量に比例して必ずかかる項目がある以上、使用量そのものを減らすことは確実に効く対策です。照明・空調・受変電設備の高効率化や、運用改善による無駄の削減は、単価の水準にかかわらず効果が出ます。省エネ投資は初期費用がかかりますが、補助金や税制優遇を組み合わせて実質負担を下げられる場合もあります。投資回収の考え方はエネマネ投資のROI計算のページで整理しています。",
  },
];

const industryAndArea = [
  {
    label: "業種別・規模別の相場水準は専用ページで整理している",
    detail:
      "本ページは「1kWhという単位そのもの」と「自社単価の出し方」に絞って整理しています。業種別・契約区分別の相場レンジや、使用量規模別に1円/kWhの差が年間いくらになるかといった相場の話は、法人向け電気料金の相場のページで扱っています。自社の単価が高いのか安いのかを判断したい場合は、本ページで算出方法を押さえたうえで、同ページの相場レンジと突き合わせるという順序が有効です。オフィス用途に特化した水準はオフィスの電気代相場のページで整理しています。",
  },
  {
    label: "エリアによって単価水準は異なる",
    detail:
      "本ページで示す4区分の単価は全国計であるため、エリアごとの差は平均に吸収されています。実際には、電源構成・燃料調達・需給環境の違いによってエリア間で単価水準に差があります。自社の単価を評価する際は、全国計だけでなく自社が属するエリアの水準も参照すると、より実態に近い判断ができます。エリア別の比較はエリア別の電気料金推移比較のページ、個別エリアの詳細は各エリアの推移ページで整理しています。エリア差の要因も同ページで扱っています。",
  },
  {
    label: "自社条件での試算は計算機で行うのが早い",
    detail:
      "業種・規模・契約区分・エリアといった条件を入れて年間電気代の目安と削減余地を試算したい場合は、業種別電気代計算機が使えます。本ページで単価の考え方を押さえたうえで計算機に自社条件を入れると、単価の水準と年間の金額感を同時に把握できます。試算結果はあくまで目安であり、実際の請求額は契約条件によって変わりますが、検討の出発点としては有効です。より詳細に自社の請求書から実態を把握したい場合は、本ページの算出方法で12か月分の実質単価を出すことをお勧めします。",
  },
  {
    label: "月次の確定単価は振り返りシリーズで継続的に更新している",
    detail:
      "電力取引報の4区分確定単価は毎月公表されるため、水準は月ごとに変わります。本サイトでは、月次の確定単価とその背景を法人電気料金の振り返りシリーズで継続的に整理しています。本ページに掲載しているのは2026年5月分（確定・最新公表）で、6月分以降は未公表です（6月分＝2026年9月中旬の公表見込み）。最新の水準を確認したい場合は同シリーズをご覧ください。単価の推移を追うことで、自社の増減が市況によるものか自社要因かを切り分けやすくなります。",
  },
];

const misconceptions = [
  {
    label: "誤解1: 「単価が安い＝有利」とは限らない",
    detail:
      "従量単価が安いメニューでも、基本料金が高い、燃料費調整の変動幅が大きい、契約期間の縛りが強いといった条件があれば、年間の総額では不利になることがあります。単価は料金の一要素にすぎず、総額はそこに基本料金・調整額・契約条件が組み合わさって決まります。比較の際は年間総額で試算し、変動シナリオも含めて評価するのが確実です。この論点は単価の安さだけで選ばない理由のページで詳しく扱っています。単価の数字だけを並べた比較は、判断を誤らせる典型的なパターンです。",
  },
  {
    label: "誤解2: 「1kWの電気代」は単体では計算できない",
    detail:
      "kWは瞬間の電力であり、kWhは使った量です。「1kWの電気代はいくらか」という問いには、使用時間を決めない限り答えられません。1kWの機器を1時間使えば1kWhとなり、そこで初めて単価を掛けられます。この混同は、契約容量（kW）と使用量（kWh）を取り違える形でも起こり、契約の妥当性を誤って判断する原因になります。単位の違いはkW・kWh・kVAの違いのページで整理しています。数字を扱う前に単位を確認することが、誤りを避ける最短の方法です。",
  },
  {
    label: "誤解3: 全国平均の単価は自社の単価ではない",
    detail:
      "本ページで示す4区分の単価は全国計の平均であり、エリア・電力会社・契約条件・使い方によって実際の単価は上下します。平均より高いからといって直ちに契約が不利とは限らず、負荷率が低い、ピークが高い、エリア水準がもともと高いといった理由が考えられます。逆に平均より低くても、契約条件に別のリスクが潜んでいる場合もあります。平均はあくまで位置づけを知るための基準であり、判断は自社の実データに基づいて行う必要があります。",
  },
  {
    label: "誤解4: 単価が下がれば必ず請求額も下がる",
    detail:
      "従量単価が下がっても、使用量が増えていたり、ピークが上がって基本料金が増えていたりすれば、請求額は下がりません。実際、契約を切り替えて単価が下がったのに請求額が減らなかったという事例では、デマンドの上昇が原因であることがあります。単価・使用量・契約電力の3つを分けて追跡しないと、どこで増えたのかが分かりません。請求額の増減を確認する手順は法人の電気代の内訳のページで整理しています。",
  },
  {
    label: "誤解5: 再エネ賦課金は交渉や契約変更で減らせる",
    detail:
      "再エネ賦課金は制度に基づいて全需要家が使用量に応じて負担するもので、2026年度は4.18円/kWhです。電力会社を変えても、料金メニューを変えても、この単価そのものは変わりません。負担額を減らす方法は、使用量を減らすか、自家消費によって系統からの購入量を減らすかに限られます。「賦課金が安い会社」という比較は成り立たない点を押さえておくと、見積もりの読み方を誤りません。制度の詳細は再エネ賦課金の解説のページをご覧ください。",
  },
];

const faqItems = [
  {
    question: "電気代は1kWhあたりいくらですか？",
    answer:
      "法人の契約区分によって異なります。電力・ガス取引監視等委員会「電力取引報」から算出した2026年5月分（確定・最新公表）の全国計単価は、特別高圧17.45円/kWh、高圧22.78円/kWh、低圧電灯27.85円/kWh、低圧電力34.42円/kWhです。法人でもっとも広く使われる高圧を基準にすると22.78円/kWhが目安になります。これらは販売額÷販売電力量・全国計（多くの事業者が検針期間ベースで報告・暦月ベースも可）の参考値で、消費税・再エネ賦課金を含みません。事後訂正の可能性もあります。エリア・電力会社・契約条件・使い方によって実際の単価は上下するため、自社の水準は請求書から算出して確認してください。",
  },
  {
    question: "法人と家庭で1kWhの単価が違うのはなぜですか？",
    answer:
      "主な理由は契約区分の違いです。家庭で使われる電灯契約と同じ枠に入る低圧電灯は27.85円/kWh、法人で主流の高圧は22.78円/kWhで、差は5.07円/kWhです（検算：27.85－22.78＝5.07）。需要規模が大きい区分ほど1kWhあたりは低くなる構造があります。加えて、法人の高圧契約では基本料金が契約電力（kW）で決まり、力率による割引・割増の仕組みもあるため、同じ使用量でも総額の決まり方が家庭とは異なります。単価だけを比べても、この構造差は見えません。なお本記事は法人・事業者向けの整理です。",
  },
  {
    question: "自社の1kWhあたりの単価はどう計算しますか？",
    answer:
      "2通りあります。1つは請求総額を使用電力量で割る方法で、基本料金や各種調整額を含んだ実質単価が出ます（例：請求額227,800円÷10,000kWh＝22.78円/kWh）。もう1つは請求書の電力量料金だけを使用電力量で割る方法で、使った分にかかる従量単価が出ます。他社との比較や前年比較には総額ベース、省エネによる削減額の試算には従量ベースが適しています。いずれの場合も、燃料費調整額や再エネ賦課金を含めたかどうかを揃えて比較することが重要です。季節変動をならすため、12か月分を合計してから割る方法もお勧めです。",
  },
  {
    question: "1kWの電気代はいくらですか？",
    answer:
      "kWは瞬間の電力を表す単位のため、それ単体では金額を計算できません。使用時間を掛けてkWh（電力量）に直して初めて、単価を掛けた金額が出ます。1kWの機器を1時間使えば1kWh、8時間使えば8kWhです。仮に高圧の22.78円/kWhで計算すると、1kWの機器を8時間使ったときの電力量料金の目安は約182.2円になります（検算：22.78×8＝182.24）。これは電力量料金部分の目安で、実際の請求額には基本料金や各種調整額も加わります。なお法人契約では、契約電力（kW）が基本料金の算定根拠になる点も押さえておく必要があります。",
  },
  {
    question: "1kWh単価にはどんな費用が含まれていますか？",
    answer:
      "料金メニューで定められた電力量料金の従量単価を土台に、燃料費調整額、再生可能エネルギー発電促進賦課金（2026年度4.18円/kWh）、料金メニューによっては容量拠出金の転嫁分が加わります。本ページで示す4区分の単価は消費税・再エネ賦課金を含まない参考値であるため、賦課金は別途上乗せして考える必要があります（例：高圧22.78＋4.18＝26.96円/kWh相当・検算：22.78＋4.18＝26.96）。なお基本料金は契約電力に対してかかるため従量単価には現れませんが、請求総額を使用量で割った実質単価には反映されます。",
  },
  {
    question: "単価が同じなのに請求額が変わるのはなぜですか？",
    answer:
      "従量単価以外の要素が総額に効いているためです。主な要因は、契約電力（デマンド）の上昇による基本料金の増加、力率の低下による基本料金の割り増し、時間帯別メニューでの使用時間帯の偏り、検針期間の日数差、そして毎月見直される燃料費調整額の変動です。とくに契約電力は過去1年間の最大需要電力で決まる方式が広く使われているため、一度ピークを記録すると基本料金への影響が長く続きます。使用量を減らしたのに請求額が下がらない場合、この要因を疑うのが実務的です。",
  },
  {
    question: "この単価はいつ時点のものですか？最新の値はどこで確認できますか？",
    answer:
      "本ページの4区分単価は2026年5月分（確定・最新公表）です。電力取引報は月次で公表されており、6月分以降は本ページ作成時点で未公表です（6月分＝2026年9月中旬の公表見込み）。最新の確定単価とその背景は、本サイトの法人電気料金の振り返りシリーズで継続的に整理しています。一次情報は電力・ガス取引監視等委員会の「電力取引の状況（電力取引報結果）」でご確認いただけます。なお集計は多くの事業者が検針期間ベースで報告しており（暦月ベースも可）、事後に訂正される可能性がある点にもご留意ください。",
  },
  {
    question: "単価が安い電力会社に変えれば電気代は下がりますか？",
    answer:
      "必ずしもそうとは限りません。従量単価が安くても、基本料金の単価が高い、燃料費調整の変動幅が大きい、契約期間や解約条件に制約があるといった場合、年間の総額では不利になることがあります。また、単価が下がっても使用量やピークが増えていれば請求額は下がりません。比較する際は、従量単価だけでなく基本料金・調整額の扱い・契約条件まで揃えたうえで、年間総額で試算するのが確実です。本ページは特定の電力会社・料金プランを推奨するものではありません。",
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
  { href: "/factory-electricity-unit-price-per-kwh", title: "工場の1kWhあたり電気代", description: "工場に絞った単価の目安と、負荷率・デマンド・力率の効き方。" },
  { href: "/kw-kwh-kva-difference", title: "kW・kWh・kVAの違い", description: "電力・電力量・皮相電力の単位を整理する。" },
  { href: "/business-electricity-price-benchmark", title: "法人向け電気料金の相場", description: "契約区分別の単価レンジと年間コストの目安。" },
  { href: "/business-electricity-bill-breakdown", title: "法人の電気代の内訳", description: "請求書の項目と確認する順番。" },
  { href: "/cheap-unit-price-not-always-better", title: "単価の安さだけで選ばない理由", description: "総額・変動リスク・契約条件で見る考え方。" },
  { href: "/not-just-unit-price-comparison-checklist", title: "単価比較だけで終わらせないチェックリスト", description: "見積もりを同じ条件に揃えて比べる観点。" },
  { href: "/basic-charge-explained", title: "基本料金の解説", description: "契約電力に対してかかる固定部分の考え方。" },
  { href: "/energy-charge-explained", title: "電力量料金の解説", description: "使用量に応じてかかる従量部分の考え方。" },
  { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "毎月変動する調整額の仕組み。" },
  { href: "/renewable-energy-surcharge", title: "再エネ賦課金の解説", description: "2026年度4.18円/kWhの位置づけ。" },
  { href: "/capacity-contribution-explained", title: "容量拠出金の解説", description: "供給力確保の費用と料金への転嫁。" },
  { href: "/contract-demand-what-is-it", title: "契約電力とは何か", description: "基本料金の算定根拠になるkWの決まり方。" },
  { href: "/demand-value-guide", title: "デマンド値の見方", description: "最大需要電力の把握とピークの管理。" },
  { href: "/what-is-power-factor", title: "力率とは何か", description: "基本料金の割引・割増に関わる指標。" },
  { href: "/electricity-cost-seasonal-pattern", title: "電気代の季節変動", description: "月ごとの増減をならして見る考え方。" },
  { href: "/electricity-price-trend-by-area", title: "エリア別の電気料金推移比較", description: "10エリアの単価差と要因。" },
  { href: "/business-electricity-retrospective", title: "法人電気料金の振り返りシリーズ", description: "月次の確定単価と背景を継続的に整理。" },
  { href: "/industry-electricity-calculator", title: "業種別電気代計算機", description: "業種・規模・契約・エリアから年間電気代と削減余地を試算。" },
  { href: "/compare", title: "料金メニュー比較診断", description: "契約メニューの違いを比較して見直す。" },
  { href: "/simulate", title: "電気料金リスクシミュレーター", description: "現状契約のリスクと削減余地を診断。" },
];

const contentCtaLinks = [
  { href: "/contact", label: "自社の単価水準を相談する" },
  { href: "/industry-electricity-calculator", label: "自社の電気代を試算する" },
  { href: "/simulate", label: "シミュレーターで診断する" },
];

export default function ElectricityUnitPricePerKwhPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/electricity-unit-price-per-kwh"
        datePublished="2026-08-08"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "電気代の1kWhあたり単価とは", url: "https://simulator.eic-jp.org/electricity-unit-price-per-kwh" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/basic" className="underline-offset-2 hover:underline">基礎から知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電気代の1kWhあたり単価とは</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電気代の1kWhあたり単価とは｜法人の契約区分別・確定単価と自社単価の出し方
          </h1>
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-slate-800">
            本記事は法人・事業者向けの内容です。家庭の電気代についても、比較の前提として平均的な水準に触れていますが、契約電力・力率・負荷率といった論点は法人契約に固有のものです。
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「1kWhあたりの電気代はいくらか」を、法人・事業者の視点で整理します。電力・ガス取引監視等委員会「電力取引報」から算出した2026年5月分（確定・最新公表）の全国計単価は、特別高圧17.45円/kWh・高圧22.78円/kWh・低圧電灯27.85円/kWh・低圧電力34.42円/kWhです。本ページでは、1kWhという単位の意味（kWとkWhの違い）、この4区分の水準、自社の1kWh単価を請求書から出す2通りの方法、単価を構成する要素、そして単価が同じでも請求額が変わる理由まで、計算の考え方に絞って解説します。業種別・エリア別の相場水準は専用ページへ、請求書の項目の読み方は内訳ページへ誘導する構成です。
          </p>
          <AuthorBadge publishedAt="2026-08-08" updatedAt="2026-08-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>kWとkWhの違いと、「1kWの電気代」が単体では計算できない理由</li>
              <li>契約区分別の確定単価4区分（2026年5月分・全国計・販売額÷販売電力量）</li>
              <li>自社の1kWh単価を出す2通りの方法（総額ベース／従量ベース）と使い分け</li>
              <li>単価を構成する要素（電力量料金・燃調・再エネ賦課金4.18円/kWh・容量拠出金の転嫁）</li>
              <li>単価が同じでも請求額が変わる理由（デマンド・力率・時間帯・検針日数）</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 業種別・エリア別の相場水準は{" "}
            <Link href="/business-electricity-price-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人向け電気料金の相場</Link>
            、請求書の項目の読み方は{" "}
            <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気代の内訳</Link>
            、自社条件での試算は{" "}
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            をご覧ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">1kWhとは何か（電力量の単位・kWとkWhの違い）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気料金の計算は、使った電力量（kWh）に単価を掛けるところから始まります。まずkWh（電力量）とkW（電力）の違いを押さえると、「1kWhあたりいくらか」「1kWの電気代はいくらか」という問いの立て方が整理できます。法人契約ではkWが基本料金の算定根拠になるため、この2つの区別は請求額を理解するうえでも欠かせません。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {unitBasics.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単位の違いをさらに詳しく確認したい場合は{" "}
              <Link href="/kw-kwh-kva-difference" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">kW・kWh・kVAの違い</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人の1kWhあたり電気代はいくらか（契約区分別の確定単価）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人の1kWhあたりの電気代は、契約区分によって水準が異なります。下表は電力・ガス取引監視等委員会「電力取引報」から算出した2026年5月分（確定・最新公表）の全国計単価です。法人で主流の高圧を基準にすると22.78円/kWhが目安になります。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">契約区分</th>
                    <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">1kWhあたり単価</th>
                    <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">主な利用者</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">特別高圧</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">17.45 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">大規模工場・データセンター・大型商業施設</td>
                  </tr>
                  <tr className="bg-sky-50">
                    <td className="border border-slate-200 px-3 py-2 font-semibold">高圧</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">22.78 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">工場・商業施設・病院・学校・物流施設・オフィスビル</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">低圧電灯</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">27.85 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">小規模事業所・店舗・事務所（家庭の電灯契約と同じ枠）</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">低圧電力</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">34.42 円/kWh</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">動力設備を持つ小規模事業所</td>
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
              {currentUnitPrices.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">家庭の平均単価と法人の単価はなぜ違うのか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              「家庭より法人のほうが安いのか」という疑問は、契約区分の構造を知ると整理できます。家庭の電灯契約と同じ枠に入る低圧電灯は27.85円/kWh、法人で主流の高圧は22.78円/kWhで、差は5.07円/kWhです。ただし、法人には基本料金・力率・負荷率という別の要素が加わるため、単価の差がそのまま有利不利にはなりません。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {householdVsCorporate.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              基本料金の考え方は{" "}
              <Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金の解説</Link>
              、力率は{" "}
              <Link href="/what-is-power-factor" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">力率とは何か</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社の1kWh単価を出す方法（2通りと使い分け）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              全国平均と比べる前に、まず自社の実際の単価を出すことが出発点です。算出には「請求総額 ÷ 使用電力量」と「電力量料金 ÷ 使用電力量」の2通りがあり、目的によって使い分けます。比較のときは、何を含んだ数字かを揃えることが何より重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {howToCalculate.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              比較の観点は{" "}
              <Link href="/not-just-unit-price-comparison-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">単価比較だけで終わらせないチェックリスト</Link>
              、季節変動の均し方は{" "}
              <Link href="/electricity-cost-seasonal-pattern" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気代の季節変動</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">1kWh単価を構成する要素</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              1kWhあたりのコストは単一の数字ではなく、複数の要素が積み上がって決まります。料金メニューの従量単価を土台に、燃料費調整額、再エネ賦課金（2026年度4.18円/kWh）、容量拠出金の転嫁分が加わり、さらに基本料金が総額を通じて実質単価に効いてきます。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {priceComponents.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              各項目の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の解説</Link>
              、{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金の解説</Link>
              、{" "}
              <Link href="/capacity-contribution-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の解説</Link>
              をご覧ください。請求書の項目そのものの読み方は{" "}
              <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気代の内訳</Link>
              で扱っています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">単価が同じでも請求額が変わる理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              「単価は変わっていないのに請求額が上がった」という状況には、必ず理由があります。契約電力（デマンド）、力率、使用時間帯、検針期間の日数、燃料費調整額の変動といった、従量単価には現れない要素が総額を動かしています。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {sameUnitDifferentBill.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンドの見方は{" "}
              <Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値の見方</Link>
              、ピークの抑え方は{" "}
              <Link href="/peak-demand-management" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ピークデマンド管理</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">単価が高いときに確認すること</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の実質単価が全国計の水準より高い場合、原因は契約条件だけとは限りません。契約区分・契約電力の妥当性、ピークと力率、料金メニューの型、そして使用量そのものという順に点検すると、打ち手の優先順位が見えてきます。本節は中立的な確認観点の整理であり、特定の選択を推奨するものではありません。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {whenUnitPriceIsHigh.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              固定と市場連動の比較は{" "}
              <Link href="/fixed-vs-market-linked-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定と市場連動の比較ガイド</Link>
              、投資回収の考え方は{" "}
              <Link href="/energy-management-roi-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エネマネ投資のROI計算</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別・エリア別の単価差はどう見るか</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページで扱うのは「1kWhという単位そのもの」と「自社単価の算出方法」です。業種別・規模別の相場レンジやエリア間の単価差は、それぞれ専用のページで整理しています。本ページで算出方法を押さえたうえで、相場ページと突き合わせるという順序が有効です。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {industryAndArea.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              相場水準は{" "}
              <Link href="/business-electricity-price-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人向け電気料金の相場</Link>
              、オフィス用途は{" "}
              <Link href="/office-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスの電気代相場</Link>
              、エリア差は{" "}
              <Link href="/electricity-price-trend-by-area" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別の電気料金推移比較</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">1kWh単価をめぐるよくある誤解</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              1kWh単価をめぐっては、判断を誤らせやすい思い込みがいくつかあります。単価の安さと有利さの混同、kWとkWhの取り違え、全国平均を自社の値と見なすこと、単価低下と請求額低下の同一視、そして賦課金を交渉対象と考えることの5つを整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">{NEUTRAL}</p>
            <div className="mt-4 space-y-3">
              {misconceptions.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              「単価が安い＝有利」ではない理由は{" "}
              <Link href="/cheap-unit-price-not-always-better" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">単価の安さだけで選ばない理由</Link>
              で詳しく扱っています。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の単価と年間コストを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページの方法で自社の1kWh単価を算出したら、次はその単価が年間コストにどう効くかを確認します。業種・規模・契約区分・エリアを入れて試算すれば、単価水準と年間金額を同時に把握でき、削減余地の当たりもつけられます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>12か月分の請求総額と使用量から、季節変動をならした実質単価を出す</li>
              <li>算出した単価を契約区分の水準（高圧22.78円/kWh等）と突き合わせる</li>
              <li>基本料金と電力量料金を分け、削減余地がどちらにあるかを見極める</li>
              <li>使用量を減らした場合・ピークを下げた場合の年間効果を試算する</li>
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
            <ConsultCta from="electricity-unit-price-per-kwh" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-08-08" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の1kWh単価と削減余地を専門家に相談する"
            description="1kWhあたりの単価は、契約区分・料金メニュー・デマンド・力率・使い方によって決まります。全国計の水準と比べて自社がどの位置にあるのか、差の原因がどこにあるのかは、請求書と使用実績を突き合わせて初めて見えてきます。まず業種別電気代計算機で年間コストの目安を試算し、必要に応じて専門家へご相談ください。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="自社の電気代単価、専門家に相談しませんか？"
            description="自社の1kWh単価の算出、全国計の契約区分別水準との比較、単価に現れないデマンド・力率の影響の把握、料金メニューの型が自社の使い方に合っているかの検証は、請求書と使用実績の読み解きを要します。エネルギー情報センターは中立的立場で、特定の電力会社・契約形態・料金プランを推奨することなく、法人・事業者の電気代対策の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
