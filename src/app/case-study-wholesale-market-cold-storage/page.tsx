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

const pageTitle = "卸売市場×冷蔵設備で電気代を削減した事例｜冷凍冷蔵の高効率化・デマンド/基本料金対策・自然冷媒（代表シナリオ）";
const pageDescription = "青果・水産・食肉などを扱う卸売市場と併設の冷蔵設備が、冷凍冷蔵の高効率化（凝縮圧力/蒸発温度の最適化・自然冷媒/高効率冷凍機への更新）とデマンド/基本料金対策（契約電力の適正化）で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-wholesale-market-cold-storage";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["卸売市場 冷蔵 電気代 事例","冷凍冷蔵 高効率化 削減","デマンド 基本料金 対策","自然冷媒 冷凍機 更新","冷蔵倉庫 契約電力 見直し"],
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

const h1Text = "卸売市場×冷蔵設備：冷凍冷蔵の高効率化とデマンド/基本料金対策で電気代を抑えた代表事例";
const breadcrumbTitle = "卸売市場×冷蔵設備の電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。青果・水産・食肉などの鮮度保持のために冷蔵・冷凍を24時間稼働させる卸売市場と併設の冷蔵設備が、冷凍冷蔵の高効率化（凝縮圧力/蒸発温度の最適化、自然冷媒・高効率冷凍機への更新、庫内運用・扉/エアカーテンの改善、LED化）と、デマンド/基本料金対策（契約電力の適正化）によって電気代の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は契約条件・冷熱負荷・稼働実態により異なるため、本記事の削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回の卸売市場×冷蔵設備の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、冷凍冷蔵の動力・付帯設備・契約電力のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "冷設高効率化・デマンド/基本料金対策の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（高効率化・運用改善）と契約電力・単価の最適化のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["卸売市場×冷蔵設備で電気代が重い理由（低温維持のベース負荷と搬入/夏季のピーク）の構造","凝縮圧力/蒸発温度の最適化・自然冷媒/高効率冷凍機への更新で圧縮動力を下げる考え方","デマンド監視・制御と契約電力（基本料金）の適正化でピークと基本料金を抑える方法","庫内運用・扉/エアカーテン・除霜・LED化で熱負荷と消費を減らす打ち手の目安","規模別の代表シナリオ（年間▲240万円/▲380万円/▲120万円）と自社が向いているかの見極め方"];
const premise = [{"label":"業種特性（卸売市場×冷蔵設備・低温維持の連続負荷）","detail":"卸売市場（青果・水産・食肉などを扱う中央卸売市場・地方卸売市場や、その関連の卸売・仲卸事業者）は、鮮度保持のために冷蔵・冷凍設備を24時間稼働させ、低温を維持し続けます。搬入・セリ・仕分け・配送の各工程で扉の開閉や搬出入が頻繁に起こり、外気や作業熱が庫内に流入するため、冷凍冷蔵の動力が電力消費の中心になります。本記事は実在の市場名・企業名を用いず、業界統計・公開事例から再構成した代表シナリオとして、この業種の電気代構造を整理します。"},{"label":"規模（高圧〜特別高圧・冷凍冷蔵が消費の中心）","detail":"中規模以上の卸売市場や併設の冷蔵倉庫は高圧または特別高圧で受電し、年間の消費電力量が大きく、契約電力（デマンド）も高水準になりがちです。冷凍機・凝縮器・冷却塔・庫内ファン・除霜ヒーターなどの付帯設備が常時動き、基本料金は契約電力で決まるため、ピークの抑制と契約電力の適正化が料金に直結します。規模により受変電設備を自社保有し保安管理が必要な場合もあります。数値は規模により幅があるため、本記事の代表シナリオはあくまで目安としてご覧ください。"},{"label":"契約区分（基本料金＋電力量料金＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。冷凍冷蔵は使用量が大きく、かつ契約電力も高いため、電力量料金と基本料金の双方が重くなりやすい構造です。購入電力量（kWh）を減らす高効率化と、契約電力（デマンド）を下げる基本料金対策の両輪で考えるのが要点です。自社の契約条件に即して、量と契約電力の両面から中立的に検討することが前提になります。"},{"label":"冷熱需要（24時間の低温維持・季節/搬入ピーク）","detail":"卸売市場の冷熱需要は、低温を24時間維持するベース負荷に、早朝の搬入・出荷が重なる時間帯のピークや、夏季の外気温上昇による負荷増が加わる形で構成されます。扉の開閉頻度や搬出入量が季節・曜日で変動し、除霜のタイミングや庫内温度の設定によっても消費が変わります。冷熱の需要構造を時間帯別に把握することが、冷凍機の運転最適化とデマンド/基本料金対策の出発点になります。代表シナリオでもこの把握を起点に置いています。"},{"label":"コスト構造（冷凍機動力・庫内運用・付帯設備）","detail":"冷凍冷蔵のコストは、冷凍機の圧縮動力を中心に、凝縮器・冷却塔のファン/ポンプ動力、庫内ファン、除霜、付帯の照明・空調が積み上がって形成されます。凝縮圧力や蒸発温度といった運転条件が圧縮動力を大きく左右し、庫内運用（扉・エアカーテン・積付け）が熱負荷を通じて消費に跳ね返ります。エネルギー単体でなく、冷熱を作る側（冷凍機）と守る側（庫内運用）の両面から捉える必要があります。本記事は代表シナリオに基づく中立的な整理です。"}];
const beforeState = [{"label":"冷凍機の凝縮圧力が高止まり・蒸発温度が過度に低い","detail":"見直し前は、冷凍機の凝縮圧力が季節を問わず高めに固定され、外気温が下がる時期でも圧縮動力を余分に使っていました。凝縮圧力を下げられる条件でも制御が追随せず、また蒸発温度が必要以上に低く設定され、庫内温度に対して過剰な冷やし込みが常態化していました。凝縮圧力・蒸発温度は圧縮動力に直結する運転条件ですが、計測や見直しの仕組みがなく、非効率が放置されていた代表シナリオを想定します。"},{"label":"契約電力（デマンド）が実態より高く基本料金が過大","detail":"契約電力（デマンド）が過去のピークや余裕を見込んだ設定のまま実態と乖離し、基本料金が過大になっていました。デマンドを監視する仕組みがなく、除霜や搬入が重なる時間帯に瞬間的なピークが立っても気づけず、契約電力を押し上げていました。基本料金は契約電力で決まるため、ピークを平準化し契約電力を適正化する余地が見えていない状態です。実態に即した見直し余地の一例として、中立的に整理した代表シナリオです。"},{"label":"庫内運用・扉/エアカーテンの不備で熱負荷が増える","detail":"庫内運用では、扉の開放時間が長い、エアカーテンや自動扉が未整備・劣化している、積付けが冷気循環を妨げているなど、外気や作業熱の流入で冷凍機に余計な熱負荷をかけていました。除霜の頻度や時間帯が最適化されず、霜付きによる効率低下も残っていました。設備を更新しても運用が伴わなければ効果が目減りする典型で、運用起因のロスが積み上がっていた代表シナリオです。"},{"label":"エネルギーの見える化が乏しく照明が旧式","detail":"エネルギーの見える化が乏しく、冷凍機・庫内・照明・付帯設備の内訳がリアルタイムに把握できず、改善は担当者の経験に依存していました。庫内・作業場の照明が水銀灯や蛍光灯のまま残り、消費電力に加えて発熱で庫内負荷を増やす一因にもなっていました。計測が不足しているため、どの設備から手を付けるべきか優先順位を付けられていなかった状態です。"}];
const approaches = [{"name":"凝縮圧力/蒸発温度の最適化・自然冷媒/高効率冷凍機への更新","role":"冷凍機の圧縮動力を源流から削減","detail":"冷凍冷蔵の消費の中心である圧縮動力を、運転条件と設備の両面から下げます。外気温に応じて凝縮圧力を下げる変動制御（コンデンシングプレッシャーの最適化）や、庫内温度に見合った蒸発温度への適正化で、過剰な冷やし込みを解消します。更新時にはインバータ搭載の高効率冷凍機や、自然冷媒（CO2・アンモニア等）を用いた機器を選択肢に含め、環境省・経産省の脱炭素/省エネ支援もふまえて検討します。数値は代表シナリオの目安で、特定の設備ベンダーを推奨するものではありません。"},{"name":"デマンド監視・制御と契約電力（基本料金）の適正化","role":"ピークを平準化し基本料金を最適化","detail":"デマンド監視装置で契約電力（デマンド）をリアルタイムに把握し、除霜や搬入が重なる時間帯のピークを平準化します。冷凍機の運転タイミングをずらす、同時起動を避けるなどの制御でピークを抑え、実態に見合った契約電力へ適正化することで基本料金を下げます。ピーク抑制は保安・品質を損なわない範囲で行うのが前提です。契約電力の考え方は、用語集や基本料金の解説もあわせて確認するとよいでしょう。"},{"name":"庫内運用・扉/エアカーテン・除霜の改善","role":"熱負荷を減らし冷凍機の負担を軽減","detail":"扉の開放時間短縮、自動扉やエアカーテン・ビニルカーテンの整備、積付けの見直しによる冷気循環の改善で、外気・作業熱の流入を抑えます。除霜の頻度・時間帯・方式を最適化し、霜付きによる効率低下を防ぎます。これらは投資が比較的小さく運用で積み上げられる打ち手で、冷凍機の高効率化と組み合わせることで効果が相乗的に高まります。運用改善は設備更新の効果を守るうえでも欠かせず、代表シナリオでも重要な位置づけです。"},{"name":"照明LED化・計測（見える化）と運用改善","role":"消費と発熱の両面を抑え投資効果を可視化","detail":"庫内・作業場の照明を水銀灯や蛍光灯からLEDへ更新し、消費電力を下げると同時に発熱を抑えて庫内の熱負荷も軽減します。あわせて電力・冷凍機の消費を計測して見える化し、凝縮圧力・蒸発温度・デマンドの実態を把握します。見える化は自社の削減余地の特定と、施策後の効果検証（PDCA）の基盤になります。SII省エネ補助金など公的支援の活用可能性も、最新の公募要領を確認しながら検討します。"}];
const caseScenarios = [{"title":"① 中規模の卸売市場・冷設高効率化＋自然冷媒（代表シナリオ）","before":"中規模の卸売市場で、冷凍機の凝縮圧力が高止まりし蒸発温度も過度に低く、圧縮動力に無駄が残っていた代表シナリオを想定します。設備は経年化し、庫内運用も最適化されていませんでした。","after":"凝縮圧力の変動制御と蒸発温度の適正化に加え、更新時に自然冷媒・高効率冷凍機を採用し、庫内運用も併せて改善する代表レンジを目安とします。購入電力量を削減し、あわせてピークも緩やかに抑えます。","result":"年間 ▲240万円 → 5年累計 ▲240万円 × 5年 ＝ ▲1,200万円（電卓検算：240×5＝1,200）。金額は業界統計・公開事例から再構成した代表シナリオの目安で、実額は契約条件・冷熱負荷・稼働実態により異なります。"},{"title":"② 大規模の冷蔵倉庫併設・デマンド/基本料金対策＋運用改善（代表シナリオ）","before":"大規模な冷蔵倉庫を併設し、契約電力（デマンド）が実態より高く基本料金が過大で、除霜・搬入のピークが平準化されていなかった代表シナリオを想定します。","after":"デマンド監視・制御でピークを平準化し、実態に見合う契約電力へ適正化。庫内運用・扉/エアカーテン・除霜の改善を重ね、基本料金と電力量料金の双方を圧縮する代表レンジを目安とします。","result":"年間 ▲380万円 → 5年累計 ▲380万円 × 5年 ＝ ▲1,900万円（電卓検算：380×5＝1,900）。数値は代表シナリオの目安であり、実際の効果は契約電力・運用実態・エリアにより変動します。"},{"title":"③ 小規模・凝縮圧力最適化＋LED（代表シナリオ）","before":"小規模の冷蔵設備で、凝縮圧力の最適化が未着手、庫内・作業場の照明が旧式のまま発熱と消費が重なっていた代表シナリオを想定します。","after":"投資が比較的小さい凝縮圧力の最適化と照明のLED化を先行し、運用改善を組み合わせる代表レンジを目安とします。回収の早い打ち手から着手して効果を積み上げます。","result":"年間 ▲120万円 → 5年累計 ▲120万円 × 5年 ＝ ▲600万円（電卓検算：120×5＝600）。金額は代表シナリオの目安で、実額は設備構成・稼働時間により異なります。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計や環境省の脱炭素施策、公開された省エネ事例から再構成した代表シナリオの目安です（2026年度時点・代表シナリオ）。実在の市場名・企業名・固有施設名は用いていません。年間削減額（▲240万円/▲380万円/▲120万円）は規模別の代表値であり、実際の効果は契約条件・冷熱負荷・稼働実態・エリアにより異なります。断定的な実数の表示は避けています。"},{"label":"削減レンジの根拠","detail":"凝縮圧力/蒸発温度の最適化、自然冷媒・高効率冷凍機への更新、デマンド/基本料金対策、庫内運用改善、LED化の効果は、公的機関の省エネ資料や公開事例で示される一般的な改善幅を参考にレンジ化しています。冷凍冷蔵は運転条件と運用の寄与が大きく、同じ設備でも設定と運用で結果が変わるため、自社では計測データに基づく試算が不可欠です。数値は代表シナリオの目安として扱ってください。"},{"label":"金額表現の扱い（▲X×5＝Yの考え方）","detail":"本記事の5年累計は、年間削減額を単純に5年分積み上げた目安として示しています（例：▲240万円×5年＝▲1,200万円、▲380万円×5年＝▲1,900万円、▲120万円×5年＝▲600万円）。電卓検算のとおり年間額×5に一致させており、複利や単価変動は織り込んでいません。実際には電力単価や稼働の変動、設備の劣化・保守で増減するため、幅を持って捉える前提の代表シナリオです。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。SII（環境共創イニシアチブ）による省エネ補助金、自然冷媒を用いた冷凍冷蔵設備への環境省の補助、フロン排出抑制法に関わる対応などはいずれも公的に定められた枠組みで、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。採択を前提にせず一次情報を確認することが前提で、本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const process = [{"label":"データ収集・冷凍機/デマンド記録の把握","detail":"受変電の電力量・デマンド記録を直近1年分そろえ、冷凍機の運転記録（凝縮圧力・蒸発温度・運転時間）や庫内温度、除霜のタイミングを集めます。時間帯別・季節別に消費とピークを棚卸しし、どの時間帯にデマンドが立つかを把握します。計測が不足している場合は簡易計測やロガーで見える化し、冷凍機・庫内・照明・付帯の内訳を推計します。これが代表シナリオと自社の差を測る出発点です。"},{"label":"分析・診断（運転条件と熱負荷の評価）","detail":"第三者の省エネ診断やメーカーの診断も活用し、凝縮圧力を下げられる余地、蒸発温度の適正化余地、扉・エアカーテン・積付けなど庫内運用の改善余地を評価します。回収の早い運用・設定改善と、自然冷媒・高効率冷凍機への更新のような設備投資を切り分け、優先順位と概算投資額、補助金適用の可能性を含めた投資回収年数（ROI）を試算します。数値はあくまで目安として扱います。"},{"label":"相見積・補助金/契約見直しの検討","detail":"設備は複数社から相見積を取り、仕様・保証・保守費・冷媒の種類まで含めたライフサイクルコストで比較します。SIIの省エネ補助金や自然冷媒設備への環境省の補助など、対象・要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。あわせて契約電力（デマンド）の適正化やメニュー見直しの余地も並行して検討します。中立的な立場で複数の選択肢を比較することが大切です。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減額・回収年数・CO2削減量）で行い、繁忙期を避けて工事を計画します。導入後は見える化データで凝縮圧力・蒸発温度・デマンドの実績をモニタリングし、想定との差異を検証します。庫内運用や除霜設定を継続的に最適化し、PDCAとして効率を底上げする体制を整えます。効果は代表シナリオの目安に対する自社実績として管理します。"}];
const viewpoints = [{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"冷凍冷蔵の高効率化・運用改善は使用量（購入電力量）を、デマンド/基本料金対策は契約電力を、契約・メニュー見直しは単価を下げる取り組みです。卸売市場は使用量も契約電力も大きいため、量の削減と基本料金対策の両輪が効きます。要素を切り分けて評価すると、どこにどれだけ投資すべきかの判断がしやすくなります。単価だけ・量だけの一面的な比較は避けるのが中立的な見方です。"},{"label":"運転条件（凝縮圧力/蒸発温度）が効きどころ","detail":"冷凍機の圧縮動力は凝縮圧力と蒸発温度に強く依存します。外気温に応じて凝縮圧力を下げ、庫内温度に見合う蒸発温度に保つだけでも動力を抑えられます。設備更新の前に、まず運転条件の最適化という投資の小さい打ち手で効果が出ることが多い点は、冷凍冷蔵ならではの効きどころです。ただし品質・保安を最優先し、過度な設定変更を避ける前提での最適化が中立的な考え方になります。"},{"label":"蓄電池主軸との読み分け","detail":"本記事は冷凍冷蔵の高効率化とデマンド/基本料金対策を主軸とした代表シナリオです。ピークカットやBCP・料金メニュー対応の観点から蓄電池を軸に据える冷蔵の取り組みは論点が異なるため、蓄電池を軸にした冷蔵の事例（物流倉庫×蓄電池）は別記事で扱っています。自社の課題が「冷やす効率」なのか「ピークの逃がし方」なのかで、着手の順序と投資配分は変わります。読み分けたうえで検討するのが有効です。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"初期投資だけでなく、想定削減額・保守費・冷媒コスト・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。電力単価の変動も感度分析に織り込むと判断の堅牢性が高まります。回収の早い運用・設定改善から着手し、効果を確認しながら大型投資へ広げる順序が堅実です。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立・非営利の立場の情報や第三者診断を併用し、自社の計測データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事も特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"過度な凝縮圧力低下・蒸発温度上げは品質と両立で","detail":"凝縮圧力を下げすぎたり蒸発温度を必要以上に上げたりすると、庫内温度の維持や品質保持に支障が出るおそれがあります。省エネと品質・安全は両立が前提で、扱う品目の温度帯に見合った範囲で最適化することが重要です。本記事の削減レンジは品質を確保したうえでの代表シナリオの目安であり、無理な設定変更は避け、メーカー・専門家と条件を確認しながら進めてください。"},{"label":"デマンド抑制は保安・品質を損なわない範囲で","detail":"デマンド抑制のために冷凍機の運転を過度に絞ると、庫内温度の上振れや品質リスクにつながる場合があります。ピークの平準化は保安・品質を損なわない範囲で行うのが前提です。除霜や搬入のタイミングを調整する、同時起動を避けるなど、品質に影響しにくい方法から着手するのが安全です。基本料金対策はあくまで実態に見合う契約電力への適正化であり、無理な我慢の削減ではありません。"},{"label":"自然冷媒・補助金は要件と期限がある","detail":"SIIの省エネ補助金や自然冷媒設備への環境省の補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。自然冷媒はフロン規制対応の観点でも選択肢になりますが、機器コストや保守体制も含めて総合的に判断します。"},{"label":"見える化だけでは削減しない","detail":"計測・見える化を導入しても、可視化したデータを改善行動につなげなければ削減は実現しません。よくある誤解として「装置を入れれば省エネになる」と捉えがちですが、凝縮圧力・蒸発温度・デマンドの実態を見て設定や運用を最適化し、効果を検証するPDCAを回して初めて成果が出ます。見える化はあくまで削減余地の特定と効果検証の手段である点を押さえておくことが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在の市場・企業の事例や優劣比較ではありません。投資判断は専門家の診断と自社の計測データに基づき、複数の選択肢を比較したうえで行ってください。蓄電池を軸にした取り組みなど、別アプローチの事例も読み分けたうえで検討することをおすすめします。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","冷凍機の凝縮圧力・蒸発温度・運転時間を記録する","庫内温度の設定と品目ごとの必要温度帯を確認する","時間帯別のデマンド（ピーク）と除霜/搬入の重なりを把握する","契約電力と実態のピークの乖離を確認する","扉の開放時間・エアカーテン・自動扉の整備状況を点検する","積付けと冷気循環の妨げがないか確認する","庫内・作業場の照明の種類（水銀灯/蛍光灯/LED）を棚卸しする","冷凍機・凝縮器・冷却塔の経年と更新時期を確認する","自然冷媒・高効率冷凍機の更新可否と概算投資を試算する","SII省エネ補助金・自然冷媒補助の最新要件を確認する","施策ごとの投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","冷設高効率化・デマンド対策と契約見直しの優先度を考える材料になる","高圧・特別高圧の高騰リスクを定量的に把握できる","中立的な立場で自社データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在の市場名・企業名・固有施設名を用いた事例ではなく、経産省・資源エネルギー庁の統計や環境省の施策、公開された省エネ事例から再構成した代表シナリオです（2026年度時点）。年間 ▲240万円・▲380万円・▲120万円などの数値は規模別の代表値の目安で、実際の効果は契約条件・冷熱負荷・稼働実態・エリアにより異なります。自社の計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・契約形態・設備ベンダーを推奨することはありません。本記事は冷凍冷蔵の高効率化やデマンド/基本料金対策の考え方と効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"蓄電池を軸にした冷蔵の事例との違いは何ですか。","answer":"本記事は冷凍冷蔵設備の高効率化とデマンド/基本料金対策（契約電力の適正化）を主軸とした代表シナリオです。蓄電池でピークを逃がしたりBCP・料金メニューに対応したりする取り組みは論点が異なるため、蓄電池を軸にした冷蔵の事例（物流倉庫×蓄電池）を別記事で扱っています。自社の課題が「冷やす効率」か「ピークの逃がし方」かで着手の順序が変わるため、読み分けて検討するのがおすすめです。"},{"question":"どこから着手するのが効率的ですか。","answer":"一般には、投資が比較的小さく回収の早い打ち手から着手するのが堅実です。凝縮圧力/蒸発温度の最適化、扉・エアカーテンなど庫内運用の改善、照明のLED化、デマンド監視によるピーク平準化などは効果が出やすい領域です。その過程で得た計測データをもとに、自然冷媒・高効率冷凍機への更新といった大型投資の可否を判断します。順序は自社の設備状態と冷熱負荷により変わります。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"基本料金は契約電力（デマンド）で決まるため、ピーク需要の抑制と契約電力の適正化が効きます。デマンド監視で除霜・搬入が重なる時間帯のピークを把握し、運転タイミングをずらすなどで平準化すれば、実態に見合った契約電力へ下げられる場合があります。ただし品質・保安を損なわない範囲で行うのが前提で、量の削減とあわせて総合的に検討することが大切です。"},{"question":"自然冷媒に更新すれば必ず電気代は下がりますか。","answer":"必ず下がるとは限りません。自然冷媒（CO2・アンモニア等）や高効率冷凍機は省エネと脱炭素・フロン規制対応の観点で有力な選択肢ですが、機器コスト・保守体制・運転条件により効果は変わります。運転条件の最適化や庫内運用改善と組み合わせて初めて効果が高まるため、更新ありきではなく、計測データと複数価格シナリオで感度分析を行い、ライフサイクルで判断することが大切です。"},{"question":"使える補助金はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金や、自然冷媒設備への環境省の補助など、設備更新・脱炭素投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避け、一次情報を確認したうえで検討することをおすすめします。"},{"question":"再エネ賦課金や燃料費調整額の負担は減らせますか。","answer":"再エネ賦課金は購入電力量（kWh）に対して課され、2026年度の再エネ賦課金は4.18円/kWhです。冷凍冷蔵の高効率化やデマンド/基本料金対策で購入電力量そのものを減らせば、賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。燃料費調整額も使用量に連動するため、量の削減は負担軽減に寄与します。ただし単価要素は制度・市況で変動するため、量の削減と契約の見直しを併せて考えるのが現実的です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・省エネ支援）","url":"https://www.meti.go.jp/"},{"name":"環境省（脱炭素・自然冷媒・フロン対策）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/case-study-logistics-cold-storage-battery","title":"物流倉庫×蓄電池の冷蔵事例（読み分け）","description":"蓄電池を軸にした冷蔵の事例はこちら。ピークの逃がし方が主軸。"},{"href":"/cold-storage-electricity-cost-review","title":"冷蔵倉庫の電気代見直し","description":"冷凍冷蔵の電力構造と削減の考え方。"},{"href":"/cold-storage-summer-electricity-strategy","title":"冷蔵の夏季電気代対策","description":"外気温上昇期のピークと負荷対策。"},{"href":"/case-study-supermarket-refrigeration-efficiency","title":"スーパー×冷ケース高効率化の事例","description":"冷設高効率化の代表シナリオ。"},{"href":"/subsidy-natural-refrigerant-freezer","title":"自然冷媒冷凍機の補助金","description":"自然冷媒設備の補助スキーム。"},{"href":"/warehouse-electricity-cost-review","title":"倉庫の電気代見直し","description":"倉庫の電力構造と対策。"},{"href":"/supermarket-electricity-cost-review","title":"スーパーの電気代見直し","description":"小売・冷設の電気代整理。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピーク抑制と基本料金対策の基礎。"},{"href":"/demand-monitoring-device-selection","title":"デマンド監視装置の選び方","description":"監視・制御機器の比較観点。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金の基礎用語。"},{"href":"/basic-charge-explained","title":"基本料金の仕組み","description":"契約電力と基本料金の関係。"},{"href":"/contract-demand-what-is-it","title":"契約電力とは","description":"デマンドの決まり方の基礎。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"業種別の削減・施策・回収を構造化。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/articles/by-industry","title":"業種別に探す","description":"業種別の電気代・削減情報。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyWholesaleMarketColdStoragePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-06"
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
          <AuthorBadge publishedAt="2026-07-06" updatedAt="2026-07-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・冷熱負荷・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。冷凍冷蔵の高効率化とデマンド/基本料金対策が主軸のため、蓄電池を軸にした冷蔵の事例はこちら（{" "}
            <Link href="/case-study-logistics-cold-storage-battery" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流倉庫×蓄電池の冷蔵事例</Link>
            ）もあわせてご覧ください。{" "}
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・冷熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代の構造上の課題を整理します。これらは多くの卸売市場・冷蔵設備で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ケースで採用した削減手法を整理します。冷凍冷蔵の高効率化とデマンド/基本料金対策（契約電力の適正化）を主軸に、複数の打ち手を組み合わせている点が特徴です。ピークカットのために蓄電池を軸に据えるアプローチは論点が異なるため、{" "}
              <Link href="/case-study-logistics-cold-storage-battery" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池を軸にした冷蔵の事例（物流倉庫×蓄電池）</Link>
              {" "}を別途ご覧ください。
            </p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅・削減額は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・冷熱負荷・稼働実態により異なります。実在企業・実在市場の事例ではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定企業の実績ではなく、公開された業界統計・公的データ・省エネ事例から再構成した代表シナリオの目安です。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2026年度時点の公開情報（経済産業省・資源エネルギー庁・環境省・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と冷凍機/デマンドの記録取得から始めましょう。</p>
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
            <ConsultCta from="wholesale-market-cold-storage" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-06" />
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
            heading="電力契約・冷設高効率化・デマンド対策の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや冷凍冷蔵の省エネ・デマンド対策の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
