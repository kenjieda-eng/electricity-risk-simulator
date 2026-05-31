import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "大学キャンパスのエネマネ統合事例｜複数棟のBEMS統合と一括契約（代表シナリオ）";
const pageDescription = "大規模キャンパスを持つ大学が、複数棟と研究設備の電力をBEMSで統合管理し、一括契約と需給管理で電気代を抑えた代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-university-large-campus-management";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["大学 キャンパス 電気代","BEMS エネマネ 統合","研究設備 電力 管理","大学 一括契約","教育機関 省エネ 事例"],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const h1Text = "大学キャンパス×エネマネ統合：BEMSと一括契約の代表事例";
const breadcrumbTitle = "大学キャンパス×エネマネの事例";
const leadText = "本記事は架空企業（大学法人）の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。大規模キャンパスは講義棟・研究棟・図書館・体育館など用途の異なる複数棟が混在し、研究設備やサーバの大電力、夏季冷房や長期休暇による負荷変動が重なります。本ケースでは、こうした大学固有の負荷特性をBEMS統合と見える化、一括契約・需給管理で束ね、エネマネ統合によって電気代を抑えた代表事例を、中立的な社団法人の立場から整理します。数値は業界統計・公開事例から再構成した目安です。";
const d1CtaLead = "自社のキャンパスや事業所が、本記事の代表シナリオと同じ構造を持つかを確かめる第一歩として、業種別の電気代計算機での試算が役立ちます。契約電力や使用実態を入力すると、業種特性を踏まえたおおよその水準感を把握できます。あくまで目安ですが、見直しの優先順位を考える出発点になります。";
const simulatorCtaLead = "電気料金の上昇・高騰リスクがキャンパス運営に与える影響を把握するには、まず自校の契約条件と負荷実態を整理することが出発点です。本シミュレーターでは、料金上昇シナリオに対する負担増の幅や見直しの方向性を中立的に確認できます。代表シナリオの数値はあくまで目安であり、自校データでの試算とあわせてご活用ください。";
const whatYouLearn = ["大学キャンパスの複数棟・研究設備が生む電力負荷の固有特性と季節変動の捉え方","BEMSによる全棟横断の見える化と需給管理を統合する考え方","文系中心・理系研究中心・医学部病院併設・分散キャンパスなど条件別の削減シナリオ","一括契約・デマンド管理・更新投資・再エネ調達を組み合わせる優先順位の判断軸","CN（カーボンニュートラル）・RE100目標とコスト最適化を両立させる進め方"];
const premise = [{"label":"業種特性（複数棟混在）","detail":"大学キャンパスは講義棟・研究棟・図書館・体育館・食堂など用途と稼働時間の異なる施設が同一敷地に混在します。講義棟は授業時間帯に集中し、研究棟は実験装置やサーバが昼夜を問わず稼働します。空調・照明・換気が建物ごとにばらばらに制御され、全体最適が効きにくいのが構造的特徴です。本シナリオでは延床数万平米規模、棟数10前後を想定し、用途別に負荷を分解して捉えます。"},{"label":"規模（高圧〜特別高圧）","detail":"総合大学の本キャンパスでは受電が特別高圧、学部単位や分散キャンパスでは高圧というように、受電区分が混在する例が一般的です。本ケースの代表シナリオは契約電力が数千キロワット規模を想定し、年間使用電力量も大きいため、わずかな単価差や負荷率改善でも年額への影響が大きくなります。規模が大きいほど需給管理と契約条件の見直し効果が出やすい構造です。"},{"label":"契約区分（一括・複数地点）","detail":"棟ごとや学部ごとに個別契約が分散しているケースと、法人単位で一括契約・一括検針を採る一括受電のケースがあります。一括化すると需給管理と単価交渉を一元化しやすい一方、構内配電設備の保安・更新責任を学校法人側が負う論点も生じます。本シナリオでは複数地点を法人で束ねる前提とし、契約区分の最適化余地を前提条件として置いています。"},{"label":"負荷パターン（季節・休暇変動）","detail":"大学は学期中と長期休暇（夏季・春季）で稼働が大きく変わり、夏季は冷房ピーク、入試期や試験期は一時的な集中が生じます。一方、研究棟のサーバや恒温恒湿の実験装置は休暇中も止められず、ベース負荷として残ります。授業時間帯の照明・空調ピークと、夜間・休暇のベース負荷を分けて分析することが、デマンド管理と契約電力最適化の出発点になります。"},{"label":"コスト構造（基本料金比率）","detail":"電気料金は基本料金（契約電力×単価）と従量料金、燃料費調整、再エネ賦課金で構成されます。大学は最大需要が学期中の特定時間帯に偏るため、年間で見ると基本料金の比率が相対的に高くなりやすい構造です。ピークの数十分を抑えるだけで契約電力が下がり、年額の基本料金を継続的に圧縮できる余地が、本シナリオの削減ポテンシャルの中心になります。"}];
const beforeState = [{"label":"全棟横断の見える化不足","detail":"見直し前は棟ごと・学部ごとにメーターや管理が分かれ、キャンパス全体の同時刻の需要を一枚で把握できていませんでした。どの棟がいつピークを作っているかが不明で、デマンドが偶発的に跳ね上がっても原因の特定や再発防止ができない状態です。結果として契約電力が実際のピークより余裕を持って高めに設定され、基本料金が継続的に過大となっていました。"},{"label":"研究設備のベース負荷増大","detail":"サーバ室や実験装置、恒温恒湿室など昼夜・休暇を問わず稼働する設備が年々増え、ベース負荷が右肩上がりでした。研究の自由度を尊重するあまり運用が部局任せになり、空調設定や夜間の不要稼働が放置されがちでした。電力使用の主因がベース負荷側にあるのに、対策は照明など可視部分に偏り、削減効果が頭打ちになっていました。"},{"label":"契約・調達条件の据え置き","detail":"受電契約や料金メニューが長年見直されず、負荷実態とメニューがかみ合っていませんでした。複数地点が個別契約のまま分散し、相見積もりや一括化による条件改善の検討も行われていません。燃料費調整の変動が直撃する構造のまま、調達リスクの分散や固定・変動の組み合わせといった選択肢が検討されていませんでした。"},{"label":"CN目標と運用の乖離","detail":"大学としてカーボンニュートラルやRE100相当の目標を掲げる一方、実際のエネルギー運用データが目標管理とつながっていませんでした。再エネ調達やオンサイトの取り組みが個別に動き、削減量とコストの全体像を可視化できていません。広報上の目標と現場運用が乖離し、投資判断の根拠データが不足していました。"}];
const approaches = [{"name":"BEMS統合と全棟見える化","role":"全体最適の土台づくり","detail":"棟ごとにばらばらだった計測・制御をBEMSで統合し、キャンパス全体の同時刻需要を一枚のダッシュボードで見える化します。用途別・棟別に負荷を分解し、どの設備がいつピークやベースを作るかを特定します。これにより部局横断で削減余地を共有でき、感覚ではなくデータに基づく省エネ運用と投資判断の土台が整います。見える化自体が運用改善の起点となる位置づけです。"},{"name":"デマンド管理・ピークカット","role":"基本料金の圧縮","detail":"最大需要が出やすい夏季の昼間時間帯を中心に、空調の外気導入・設定温度・運転スケジュールを全棟横断で調整し、デマンド警報と連動した自動制御でピークを平準化します。研究設備の連続稼働を避けつつ、講義棟・体育館など可制御負荷を優先的に調整します。契約電力の引き下げにつなげ、年間を通じた基本料金の継続的な圧縮を狙う中核手法です。"},{"name":"高効率設備への更新投資","role":"ベース負荷の構造的削減","detail":"老朽空調のインバータ化・高効率熱源への更新、LED化、サーバ室の空調最適化（吹出温度・気流改善）など、ベース負荷の構造的削減に投資します。研究の継続性を損なわない範囲で、休暇中の運転モードや夜間スケジュールも見直します。SIIの補助制度やZEB・BEMSの考え方を参照し、投資回収年数を試算したうえで優先順位を付ける位置づけです。"},{"name":"一括契約・再エネ調達の最適化","role":"調達リスクの分散","detail":"分散していた複数地点を法人単位で束ねて需給管理と条件交渉を一元化し、相見積もりで料金メニューを比較します。燃料費調整の変動リスクに対し、固定・変動の組み合わせや調達先の分散を検討します。CN・RE100目標に沿った再エネメニューやオンサイトの選択肢も、コストと削減量の両面から中立に比較する位置づけです。"}];
const caseScenarios = [{"title":"シナリオA：文系中心キャンパス（高圧・講義棟主体）","before":"講義棟・図書館の空調と照明が負荷の大半を占め、授業時間帯にピークが集中。負荷率は低めで基本料金比率が相対的に高い状態です。","after":"BEMS見える化とスケジュール制御、LED化で授業時間外の無駄を削減。ピーク平準化で契約電力を見直した代表シナリオです。","result":"電気代は概ね10〜18%程度の削減幅が目安。負荷率改善とピークカストの寄与が中心です。実数値は契約条件・使用実態により異なります（代表シナリオ・目安）。"},{"title":"シナリオB：理系研究中心キャンパス（特別高圧・研究棟主体）","before":"実験装置・サーバ・恒温恒湿室のベース負荷が大きく、休暇中も需要が高止まり。可視部分の対策では効果が頭打ちでした。","after":"ベース負荷の見える化、サーバ室空調最適化、高効率熱源への更新で構造的に削減。研究継続性を損なわない範囲の運用改善を併用しました。","result":"電気代は概ね8〜15%程度の削減幅が目安。ベース負荷側の更新投資が効果の中心で、回収年数の試算が前提です。実数値は条件により異なります（代表シナリオ・目安）。"},{"title":"シナリオC：医学部・附属病院併設キャンパス（特別高圧・24時間稼働）","before":"病院併設で24時間連続稼働、医療機器・空調・滅菌設備の需要が大きく、安全上ピークカットの制約が厳しい状態です。","after":"供給信頼性を最優先に、病院以外の学部棟側で見える化・ピーク調整を実施。一括契約・需給管理で全体の調達条件を最適化しました。","result":"電気代は概ね5〜12%程度の削減幅が目安。安全制約のため病院側の削減は限定的で、契約条件最適化の寄与が大きい構成です。実数値は条件により異なります（代表シナリオ・目安）。"},{"title":"シナリオD：分散キャンパス統合（複数地点・高圧／特別高圧混在）","before":"複数キャンパスが個別契約で分散し、需給管理も地点ごと。全体ピークの把握と一括交渉ができていませんでした。","after":"法人単位で需給管理を統合し、相見積もりと一括契約で条件を一元化。地点間で運用ノウハウを横展開しました。","result":"電気代は概ね7〜14%程度の削減幅が目安。一括化による条件改善と運用横展開が寄与します。実数値は地点構成・契約条件により異なります（代表シナリオ・目安）。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterや削減率は、特定の実在大学の実績ではなく、業界統計と公開事例から再構成した代表レンジです。精密な金額は断定せず、削減率（%）レンジや幅で示しています。実際の効果は契約電力・負荷率・設備構成・運用体制により大きく異なるため、目安としてお読みください。"},{"label":"出典の考え方","detail":"経済産業省・資源エネルギー庁の統計、SII（環境共創イニシアチブ）の採択事例集、教育機関・業務用施設の省エネ関連の業界統計から再構成しています（2025年10月時点・代表シナリオ）。個別事例の数値をそのまま転記したものではなく、傾向値として整理したものです。"},{"label":"削減率の幅の理由","detail":"削減率に幅を持たせているのは、文系・理系・病院併設・分散など条件により可制御負荷の比率とピーク構造が大きく異なるためです。ベース負荷が大きいほどピークカットの寄与は小さく、更新投資の比重が増すなど、構成によって効果の出方が変わることを反映しています。"},{"label":"基本料金影響の前提","detail":"削減効果の主因として契約電力（基本料金）の見直しを置いていますが、これは大学の最大需要が特定時間帯に偏りやすい構造に基づく一般的傾向です。実際にどの程度ピークを抑えられるかは設備の可制御性と安全制約に依存するため、本数値はあくまで代表シナリオ上の目安です。"}];
const process = [{"label":"データ収集・見える化","detail":"まず棟別・用途別の電力データと過去の最大需要・負荷曲線を収集し、BEMSで同時刻需要を統合表示します。学期中・休暇中、平日・休日、昼夜の差を分解し、どの棟・設備がピークとベースを形成しているかを定量的に把握します。この段階で削減余地の仮説を立て、以降の打ち手の優先順位付けの根拠データとします。"},{"label":"分析・優先順位付け","detail":"可制御負荷（講義棟空調・照明など）と制約の強い負荷（病院・研究設備など）を切り分け、運用改善で効くもの、更新投資が必要なものを分類します。ピークカットによる契約電力低減効果と、更新投資の回収年数を試算し、費用対効果の高い順に施策を並べます。安全・研究継続性の制約を必ず前提条件として組み込みます。"},{"label":"相見積もり・契約最適化","detail":"分散していた複数地点を法人単位で束ね、複数の供給メニューを相見積もりで比較します。燃料費調整の変動リスクや、固定・変動の組み合わせ、再エネメニューの選択肢を、コストと削減量の両面から中立に評価します。単価だけでなく需給管理体制や供給信頼性も含めて総合的に判断します。"},{"label":"意思決定・効果検証","detail":"経営層・施設管理・各部局が参加する横断会議で、投資と運用改善の実行計画を承認します。実行後はBEMSのデータで削減量と契約電力の推移をモニタリングし、当初の試算との差異を検証します。検証結果を次の施策にフィードバックする継続的なPDCAの体制を整え、CN・RE100目標の進捗管理にも接続します。"}];
const viewpoints = [{"label":"可制御負荷の比率を見る","detail":"削減ポテンシャルは、全体に占める可制御負荷の比率で大きく変わります。研究設備や病院など止められない負荷が多いほどピークカットの余地は小さく、更新投資の比重が増します。自校の負荷構成を把握したうえで、現実的な削減幅を見積もることが中立的な判断の出発点です。"},{"label":"基本料金と従量料金の内訳","detail":"電気代は基本料金（契約電力連動）と従量料金、燃料費調整などに分かれます。どこに削減余地があるかは内訳次第で、基本料金比率が高ければ契約電力見直しが効き、従量比率が高ければ使用量削減が効きます。請求内訳を分解して観点を持つことが重要です。"},{"label":"投資回収年数で比較する","detail":"設備更新は初期投資を伴うため、削減額だけでなく回収年数で評価します。補助制度の活用可否や設備の残存寿命も含め、運用改善（低コスト）と投資（高効果・要資金）を切り分けて優先順位を付けると、限られた予算で効果を最大化できます。"},{"label":"供給信頼性と安全の優先","detail":"大学は研究の継続性や、病院併設の場合は医療安全が最優先です。コスト削減のためにピークカットや設備更新を急ぐと、研究データの損失や安全リスクを招きかねません。削減はあくまで信頼性・安全を満たす範囲で検討するという観点を欠かさないことが大切です。"},{"label":"CN目標とコストの両立","detail":"カーボンニュートラルやRE100相当の目標は、コスト削減と必ずしも一致しません。再エネメニューは単価が上がる場合もあるため、削減量・コスト・社会的価値を分けて評価し、目標達成と費用最適化のバランスを中立に判断する観点が求められます。"}];
const cautions = [{"label":"削減率はそのまま当てはまらない","detail":"本記事の削減率は代表シナリオの目安であり、自校にそのまま当てはまるわけではありません。負荷構成・契約条件・運用体制が異なれば効果も変わります。数値を断定的に期待するのではなく、自校データで試算し直すことが前提です。実数値は契約条件・使用実態により異なります。"},{"label":"ピークカットの過信は禁物","detail":"ピークカットは基本料金圧縮に有効ですが、研究設備や病院など止められない負荷が多い場合、効果は限定的です。可制御負荷の少ないキャンパスで過度な期待をすると、想定との差が生じます。負荷の可制御性を見極めることが先決です。"},{"label":"一括契約のメリットと責任","detail":"複数地点の一括契約は需給管理と交渉を一元化できる一方、構内配電設備の保安・更新責任を法人側が負う論点が生じる場合があります。メリットだけでなく、保安体制や設備更新の負担も含めて総合的に判断する必要があります。"},{"label":"見える化＝削減ではない","detail":"BEMS導入で見える化しても、それ自体が削減を生むわけではありません。データを運用改善や投資判断に結びつける体制があって初めて効果が出ます。導入が目的化しないよう、運用ルールと責任分担をあわせて整えることが重要です。"},{"label":"再エネ＝必ず安いの誤解","detail":"再エネメニューやRE100対応は、必ずしもコスト削減になるとは限りません。単価が上がる場合もあり、削減目的とCN目的は分けて考える必要があります。社会的価値や目標達成と、純粋なコスト最適化を混同しない留意が求められます。"}];
const checklist = ["棟別・用途別の電力データを一元的に把握しているか","学期中と長期休暇のベース負荷差を分析したか","夏季冷房のピーク時間帯と原因棟を特定したか","契約電力が実際の最大需要に対し過大でないか","基本料金と従量料金の内訳を分解したか","可制御負荷と制約負荷を切り分けて評価したか","研究設備・サーバ室の運用最適化余地を確認したか","設備更新は投資回収年数で優先順位を付けたか","複数地点を一括化する余地と保安責任を整理したか","相見積もりで料金メニューを比較検討したか","CN・RE100目標と運用データを接続しているか","効果検証とPDCAの体制・責任分担を決めたか"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増の幅を把握できます","契約電力・負荷率の改善余地を考える出発点になります","業種特性を踏まえたリスクスコアを中立的に確認できます","見直しの優先順位づけの検討材料として使えます"];
const faqItems = [{"question":"この事例は実在の大学ですか。数値は正確ですか。","answer":"いいえ、本記事は実在の大学の実績ではなく、業界統計や公開事例から再構成した架空の代表シナリオです。Before/Afterや削減率は精密な金額ではなく、幅を持たせた目安として示しています。実際の効果は契約電力・負荷構成・運用体制により大きく異なります。出典は経産省・資源エネルギー庁の統計やSII採択事例集等から再構成（2025年10月時点・代表シナリオ）であり、数値を断定的に期待せず、自校データでの試算とあわせてお読みください。"},{"question":"特定の電力会社や契約形態を推奨しているのですか。","answer":"いいえ、本記事は中立・非営利の社団法人の立場から書かれており、特定の電力会社や料金メニュー、契約形態を推奨するものではありません。一括契約や再エネメニューなどはあくまで検討すべき選択肢の一つとして、コストと削減量の両面から中立に比較する考え方を示しています。実際の選定は、複数の供給メニューを相見積もりで比較し、供給信頼性や需給管理体制も含めて自校の判断で行ってください。"},{"question":"大学キャンパスで電気代削減効果が出やすいのはどこですか。","answer":"一般に、講義棟や図書館など可制御負荷の比率が高い文系中心のキャンパスは、空調・照明のスケジュール制御やピークカットの効果が出やすい傾向です。一方、研究設備やサーバが多い理系キャンパスや病院併設キャンパスは、止められないベース負荷が大きく、運用改善より高効率設備への更新投資が効果の中心になります。自校の負荷構成を把握し、可制御負荷の比率を見極めることが、効果を見積もる出発点です。"},{"question":"BEMSを導入すれば電気代は自動的に下がりますか。","answer":"BEMSの導入だけで自動的に下がるわけではありません。BEMSは棟別・用途別の需要を見える化し、削減余地を特定する土台ですが、得られたデータを運用改善や設備投資、契約見直しに結びつけて初めて効果が生まれます。導入が目的化すると効果が出にくいため、運用ルールや部局横断の責任分担、効果検証のPDCA体制をあわせて整えることが重要です。見える化は出発点であり、ゴールではありません。"},{"question":"長期休暇中も電力使用量が高いのはなぜですか。","answer":"研究棟のサーバや実験装置、恒温恒湿室などは、休暇中も止められないベース負荷として稼働し続けるためです。これらは研究データの保全や実験の継続性に直結するため、安易に停止できません。長期休暇は授業由来のピーク負荷が下がる一方、ベース負荷は残るため、休暇中の使用量分析はベース負荷側の削減余地を見つける重要な手がかりになります。運用モードの見直し余地を部局と相談して検討します。"},{"question":"契約電力（基本料金）の見直しはなぜ効果が大きいのですか。","answer":"大学は最大需要が学期中の特定の時間帯に偏りやすく、年間で見ると基本料金の比率が相対的に高くなりやすい構造があるためです。基本料金は契約電力に単価を掛けて算定されるため、ピークの数十分を抑えて契約電力を下げられれば、年間を通じて基本料金を継続的に圧縮できます。ただし効果は負荷の可制御性に依存し、止められない負荷が多い場合は限定的です。あくまで代表シナリオ上の傾向です。"},{"question":"再エネ調達やRE100対応はコスト削減になりますか。","answer":"必ずしもコスト削減にはなりません。再エネメニューは従来メニューより単価が上がる場合もあり、カーボンニュートラルやRE100相当の目標達成という社会的価値と、純粋なコスト最適化は分けて評価する必要があります。本記事の中立的な立場としては、削減量・コスト・社会的価値をそれぞれ可視化し、目標達成と費用のバランスを自校の方針に照らして判断することをおすすめします。両者を混同しないことが大切です。"},{"question":"分散キャンパスを一括契約に統合するメリットは何ですか。","answer":"複数地点を法人単位で束ねると、需給管理と料金交渉を一元化でき、相見積もりによる条件改善や、地点間での運用ノウハウの横展開がしやすくなります。一方で、一括受電の形態によっては構内配電設備の保安・更新責任を法人側が負う論点が生じる場合があり、メリットだけで判断はできません。供給信頼性や保安体制、設備更新の負担も含め、総合的に比較したうえで判断することが望ましいといえます。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/university-electricity-cost-review","title":"大学の電気代見直し","description":"研究設備・空調の電力構造。"},{"href":"/school-electricity-cost-review","title":"学校の電気代見直し","description":"教育施設の削減観点。"},{"href":"/research-facility-electricity-cost-review","title":"研究施設の電気代見直し","description":"実験設備の高負荷。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/subsidy-bemms-fems","title":"BEMS・FEMS導入の補助金","description":"エネマネ設備の支援制度。"},{"href":"/bems-fems-ems-overview","title":"BEMS・FEMS・EMSの全体像","description":"エネマネシステムの基礎。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/demand-control-guide","title":"デマンド制御の基礎","description":"契約電力・基本料金を抑える。"},{"href":"/case-study-municipality-public-facility-bulk","title":"自治体公共施設×一括契約の事例","description":"公共系の比較ケース。"},{"href":"/case-study-welfare-elderly-energy-saving","title":"高齢者施設×省エネ投資の事例","description":"施設運営の比較ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyUniversityLargeCampusManagementPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-05-31"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "事例・削減実績を知る", url: "https://simulator.eic-jp.org/articles/case-studies" },
          { name: breadcrumbTitle, url: pageUrl },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">{breadcrumbTitle}</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{h1Text}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{leadText}</p>
          <AuthorBadge publishedAt="2026-05-31" updatedAt="2026-05-31" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した架空企業の代表シナリオです。数値は目安であり、実数値は契約条件・使用実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態を推奨するものではありません。{" "}
            <Link href="/articles/case-studies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">事例カテゴリ一覧</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・負荷パターン・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。</p>
            <div className="mt-4 space-y-3">
              {premise.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Before：見直し前の電気代構造と課題</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代構造上の課題を整理します。これらは多くの同業種で共通して見られる論点です。</p>
            <div className="mt-4 space-y-3">
              {beforeState.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施した削減アプローチ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、複数の打ち手を組み合わせている点が特徴です。</p>
            <div className="mt-4 space-y-3">
              {approaches.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の代表シナリオ（Before/After・目安）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・使用実態により異なります。実在企業の事例ではありません。</p>
            <div className="mt-4 space-y-4">
              {caseScenarios.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">効果（目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">数値の前提とデータ出典（捏造ゼロの考え方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定企業の実績ではなく、公開された業界統計・採択事例集・公的データから再構成した代表レンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2025年10月時点の公開情報（経済産業省・資源エネルギー庁・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実行プロセスと体制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">同様の取り組みを自社で進める際の、データ収集から効果検証までの実行プロセスを整理します。</p>
            <div className="mt-4 space-y-3">
              {process.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社が同様のケースか診断する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{d1CtaLead}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模・契約区分・エリアを選ぶだけで推定年間電気代と削減余地を試算できる{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              {" "}で、自社が本ケースに近いかを確認できます。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に判断するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">削減手法を検討する際に、単価や一面的な効果だけでなく総合的に判断するための観点を整理します。</p>
            <div className="mt-4 space-y-3">
              {viewpoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">留意点・よくある誤解</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースの手法を検討する際に陥りやすい誤解や、事前に確認すべき留意点を整理します。</p>
            <div className="mt-4 space-y-3">
              {cautions.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社で再現するためのチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握から始めましょう。</p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の電気代と上振れリスクを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{simulatorCtaLead}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {simulatorCtaBullets.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-31" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の電気代と削減余地を試算する"
            description="本ケースに近いかどうかは、自社の業種・規模・契約条件で試算してみるのが近道です。シミュレーターと業種別電気代計算機で、上振れリスクと削減余地を中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力契約・省エネ・再エネ投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・再エネ投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
