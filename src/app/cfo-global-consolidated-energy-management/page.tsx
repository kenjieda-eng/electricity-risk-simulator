import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "海外拠点 連結エネルギーマネジメント完全ガイド｜RE100/SBTのグローバル整合（CFO向け）";
const pageDescription = "海外拠点を含む連結エネルギーマネジメントを、各国電力市況の違い・RE100/SBTのグローバル整合・I-REC等の証書調達・グループ調達ガバナンスの観点でCFO向けに整理。公開情報に基づく代表シナリオで、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/cfo-global-consolidated-energy-management";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["海外拠点 エネルギー管理 連結","RE100 グローバル 整合","SBT 海外拠点","I-REC 再エネ証書","グループ 電力調達 ガバナンス"],
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

const h1Text = "海外拠点 連結エネルギーマネジメント完全ガイド｜RE100/SBTのグローバル整合";
const breadcrumbTitle = "海外拠点 連結エネマネ";
const leadText = "本記事は公開情報・制度に基づく一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。海外拠点を多く抱えるグループにとって、電気代はもはや各国子会社が個別に管理する経費ではなく、連結ベースでコスト・排出・調達リスクを束ねる経営テーマです。各国の電力市況と規制が異なり、為替やカントリーリスクも絡む中で、RE100やSBTといったグローバル目標との整合をどう取るか。CFO・経営企画が連結エネルギーマネジメントの全体像と論点を把握するための整理を提示します。";
const d1CtaLead = "海外拠点の連結管理の第一歩は、自社の電気代を客観的なデータで捉えることです。業種別電気代計算機を使えば、業種ごとの電力使用の傾向をふまえた試算ができ、連結での見える化やシナリオ検討の出発点になります。実数値は契約条件・使用実態により異なりますが、まず自社の位置づけを把握する目安としてご活用ください。";
const simulatorCtaLead = "電気料金上昇・高騰リスクシミュレーターは、電気代が経営・財務に与える影響を整理するための一般的な情報ツールです。連結ベースのエネルギーマネジメントを検討する前段として、料金変動のリスク感応度を可視化し、社内議論や投資家対話の土台づくりに役立ちます。特定の電力会社・契約形態を推奨するものではなく、結果は前提により異なる目安です。";
const whatYouLearn = ["海外拠点を含む連結ベースでエネルギーコストと排出を集約・見える化する考え方","各国の電力市況・規制・再エネ証書(I-REC等)やPPAの違いが連結管理に与える影響","RE100・SBT(SBTi)など目標のグローバル整合とScope2算定の論点","為替・カントリーリスクを織り込んだグループ調達ガバナンスの設計視点","データ収集基盤と取締役会報告・KPI設計、投資家対話への接続の実務"];
const background = [{"label":"電気代が連結損益の構造的変数になった","detail":"海外拠点の電力単価や市況は国ごとに大きく異なり、エネルギー多消費の製造・データ事業では電気代が連結原価率を左右します。各国子会社任せでは全体像が見えず、為替換算後の連結ベースで初めて経営インパクトが把握できます。本記事は一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。実数値は契約条件・使用実態により異なります。"},{"label":"Scope2排出の大半が海外拠点に偏る構造","detail":"電力由来のScope2排出は各国の電源構成(グリッド排出係数)に依存し、石炭比率の高い国に拠点が集中するグループでは海外分が排出の中心になりがちです。GHGプロトコルではロケーション基準とマーケット基準の併記が求められ、再エネ調達の効果を正しく反映するには連結での把握が前提になります。"},{"label":"気候開示の連結要求が強まっている","detail":"ISSB(IFRS S2)やSSBJ基準では原則として連結ベースのScope1・2、そしてScope3の開示が想定され、海外拠点を含めたデータ整備が避けられません。開示の信頼性は連結エネルギーデータの精度に直結し、CFOには財務報告と同等のガバナンスでこれを束ねる役割が期待されます(2025年10月時点)。"},{"label":"為替とカントリーリスクの二重の不確実性","detail":"海外電気代は現地通貨建てのため、為替変動が連結コストを増減させます。加えて各国のエネルギー規制・補助金・市場改革の動向、地政学リスクが調達条件を揺らします。CFOは電気代を単なる経費でなく、為替・国別リスクと結びついた財務変数として扱う視点が求められます。"},{"label":"投資家・取引先からの連結データ要請","detail":"CDP回答やサプライチェーン取引先からの排出量提供要請、格付機関の評価では、連結かつ海外拠点を含む網羅的なエネルギー・排出データが問われます。データが断片的だと開示・対話の質が下がり、資本コストや受注機会に影響しうるため、経営層が主導して整備する意義があります。"}];
const frameworks = [{"label":"ISSB(IFRS S2)・SSBJと連結範囲","detail":"ISSBが策定したIFRS S2は気候関連開示を体系化し、日本ではSSBJ基準として国内適用が進みます。Scope1・2は原則連結ベースで、海外拠点も対象です。TCFDは2023年に解散し、その枠組みはISSB/IFRS S2へ引き継がれました。CFOは財務報告の連結範囲との整合を確認する必要があります(出典: TCFD/ISSB公式、金融庁、SSBJ公開資料から整理、2025年10月時点)。"},{"label":"GHGプロトコルとScope2の二基準","detail":"GHGプロトコルはScope2をロケーション基準(各国グリッド平均係数)とマーケット基準(契約した電源・証書を反映)の双方で算定・開示することを求めます。海外での再エネ証書やPPA調達の効果はマーケット基準に表れ、連結での再エネ比率管理はこの枠組みの理解が前提です。"},{"label":"RE100・SBT(SBTi)のグローバル整合","detail":"RE100は事業全体の100%再エネ調達を、SBT(SBTi)は科学的根拠に基づく削減目標をグローバルに求めます。海外拠点を含む連結で目標を立てるため、各国で調達手段(証書・PPA・自家発電)が異なる中、グループ全体の整合をどう取るかが論点です。RE100は調達手段に技術要件や品質基準を設けている点にも留意します。"},{"label":"各国の再エネ証書(I-REC等)とPPA制度","detail":"再エネ属性の調達手段は国により異なり、欧州のGO、北米のREC、アジア・新興国を中心としたI-RECなどがあります。コーポレートPPAも各国の電力市場制度で可否や形態が変わります。連結での再エネ調達を設計する際は、各証書の認証・トラッキングと目標枠組みでの受容性を確認することが重要です。"}];
const steps = [{"name":"連結エネルギーデータの収集基盤を整える","role":"見える化の土台","detail":"全海外拠点の電力使用量・単価・契約形態・グリッド排出係数を共通フォーマットで収集します。子会社の請求書通貨や単位の差異を吸収し、為替換算ルールを定めて連結ベースに統一します。財務連結と同じ精度を目標に、データ責任者と更新頻度を明確にすることが出発点です。"},{"name":"国別の市況・規制・調達手段をマッピング","role":"現状把握","detail":"拠点が所在する各国の電力市場制度、再エネ証書(I-REC等)の有無、PPAの可否、補助金や規制動向を一覧化します。電力単価の構造とカントリーリスクを併記し、どの国でどの調達手段が現実的かを整理します。これにより連結での削減余地と優先順位が見えてきます。"},{"name":"グループ目標と国別実行計画の整合","role":"目標の落とし込み","detail":"RE100やSBTのグループ目標を、各国の制度・コスト・市況を踏まえて拠点別の実行計画に分解します。証書調達が容易な国とPPAが現実的な国を区別し、目標達成経路を連結で組み立てます。為替前提と複数シナリオを置き、特定の調達手段に偏らない柔軟性を持たせます。"},{"name":"ガバナンスとモニタリング体制を構築","role":"継続運用","detail":"グループ調達方針・承認権限・KPIを定め、定期的に連結エネルギーコストと排出をモニタリングします。取締役会・サステナビリティ委員会への報告ラインを明確にし、開示・CDP回答・投資家対話に接続します。データと実行のPDCAを回す運用設計が成果を左右します。"}];
const caseScenarios = [{"title":"グローバル製造業(プライム上場・多国展開)","before":"各国工場が個別に電力契約と排出管理を行い、連結での全体像が把握できず、Scope2の海外分が開示の精度を下げていました。","after":"連結データ基盤を整備し、国別の市況・証書制度をマッピングしたうえで、RE100・SBT目標を拠点別実行計画に分解しました。","result":"連結ベースでの再エネ比率と排出の見える化が進み、開示・投資家対話の質が向上する方向が期待されます。効果は事業構成・各国制度により異なる目安です。"},{"title":"アジア中心展開の中堅企業(上場・成長期)","before":"アジア新興国の拠点で電力単価変動と為替の影響が読みにくく、エネルギーコストが連結損益の不確実要因になっていました。","after":"現地通貨建てコストを連結換算で一元管理し、I-REC等の調達可否を国別に整理して、現実的な再エネ調達経路を選定しました。","result":"為替・市況を織り込んだコスト把握とリスク管理が進む見込みで、過度な特定手段依存を避ける運用が定着する方向です。実額は契約条件により異なります。"},{"title":"高負荷グローバル事業(データセンター等・非上場含む)","before":"複数国の高負荷拠点で電力消費が急増し、Scope2排出と電気代が経営の最重要変数となっていました。","after":"拠点ごとの市場制度に応じてPPAや再エネ証書の調達余地を評価し、連結でのエネルギー調達ガバナンスを整備しました。","result":"高負荷拠点の排出・コストの把握精度が高まり、調達手段の分散とリスク低減を図る方向が期待されます。前提により結果は変動する目安です。"}];
const dataNotes = [{"label":"数値は公開された制度値・代表シナリオのみ","detail":"本記事で示す数量的な記述は、推測単価や憶測の変動率を用いず、公開された制度値・公的統計・公開事例のレンジに基づく目安です。電力単価・排出係数は各国・各時点で異なるため、実数値は契約条件・使用実態により異なります。代表シナリオは一般的な傾向を示す目的の整理です。"},{"label":"グリッド排出係数の出典と更新","detail":"各国の電力グリッド排出係数は公的機関や国際機関が公表する係数を用いるのが一般的で、年次で更新されます。連結算定では係数の出典・適用年度を明示し、ロケーション基準とマーケット基準を区別して記録します。係数の選択は開示の信頼性に直結するため、根拠の文書化が重要です。"},{"label":"再エネ証書・PPAの受容性は枠組み次第","detail":"I-REC等の証書やPPAがRE100・SBTでどう扱われるかは各枠組みの品質基準・要件に依存します。本記事は特定の証書・契約を推奨せず、公開された枠組み文書に基づく一般的整理に留めます。実際の採否は各社の目標設定・第三者保証の要件を確認のうえ判断する必要があります。"},{"label":"為替換算の前提を明示する重要性","detail":"海外電気代は現地通貨建てのため、連結換算には適用為替レートと期間の前提が必要です。期中平均・期末レートなどの選択で連結数値が変わるため、前提を統一・開示することが比較可能性を担保します。本記事は特定の為替前提を断定せず、考え方の整理として示しています。"}];
const governance = [{"label":"グループ調達ガバナンスの設計","detail":"海外拠点の電力・再エネ調達を各国任せにせず、グループ共通の方針・承認権限・調達基準を定めます。CFOは財務的妥当性と為替・カントリーリスクの観点から関与し、調達部門・サステナビリティ部門と権限分担を明確化します。特定の電力会社・契約形態を推奨するものではなく、選択肢を比較する体制が要点です。"},{"label":"経理・サステナ・調達・IRの連携","detail":"連結エネルギーデータは経理(連結範囲・為替)、サステナビリティ(排出算定・目標)、調達(契約・証書)、IR(開示・対話)が共有する横断情報です。部門ごとに別管理すると数値が乖離するため、単一の真実のデータ源(SSOT)を持ち、定義と更新責任を統一する連携設計が求められます。"},{"label":"取締役会・委員会への報告","detail":"連結エネルギーコストの推移、Scope2排出と再エネ比率、目標進捗、主要なカントリーリスクを定期的に取締役会・サステナビリティ委員会へ報告します。財務と非財務を統合した報告とすることで、経営の意思決定とリスク監督に資する情報提供が可能になります。"},{"label":"連結ベースのKPI設計","detail":"拠点別ではなく連結で意味を持つKPI(連結再エネ比率、Scope2排出原単位、対象国カバレッジ、データ網羅率など)を設定します。為替の影響を分離した実質ベースの指標も併用し、市況変動と自助努力を区別して評価できる設計が、適切なインセンティブにつながります。"}];
const viewpoints = [{"label":"電気代を財務リスク変数として位置づける","detail":"海外電気代は市況・規制・為替が重なる変数であり、CFOは感度分析やシナリオ分析の対象に組み込む視点が有効です。連結損益への影響を定量的に把握することで、調達戦略やヘッジ方針、価格転嫁の意思決定に客観的な根拠を与えられます。"},{"label":"目標と現実の調達手段のギャップを直視する","detail":"RE100やSBTのグループ目標は野心的でも、各国で再エネ調達手段が揃わない場合があります。目標経路と実現可能性のギャップを経営層が認識し、過度に楽観的な計画を避けることが、開示の信頼性と投資家からの評価を守るうえで重要です。"},{"label":"投資家対話での連結ストーリー","detail":"投資家は拠点単位より連結での方針と進捗を求めます。各国の制度差を踏まえた現実的な調達戦略と、為替・カントリーリスクへの備えを一貫したストーリーで説明できると、対話の質が高まります。特定の電力会社・契約形態を推奨するものではなく、考え方の整理として示しています。"},{"label":"コストと排出のトレードオフ判断","detail":"再エネ調達はコスト増を伴う場合があり、削減効果と財務負担のバランスを国・手段ごとに評価する判断が必要です。CFOは限られた資源をどの拠点・手段に配分すれば連結での効果が最大化するかを、データに基づき検討する役割を担います。"},{"label":"中立的に選択肢を比較する姿勢","detail":"本記事は特定の電力会社・契約形態を推奨するものではありません。各国の制度・市況・自社の使用実態に応じて、証書・PPA・自家発電などの選択肢を中立的に比較し、第三者保証や枠組み要件を確認しながら判断することが、健全な意思決定につながります。"}];
const cautions = [{"label":"拠点別最適化が連結最適と一致しない","detail":"各国子会社がそれぞれ最安・最良を追求しても、連結での目標達成やリスク分散には必ずしもつながりません。グループ全体での最適化を志向し、拠点間の調整やガバナンスを欠くと、二重投資や目標未達のリスクが生じます。"},{"label":"証書とPPAの効果を混同しない","detail":"再エネ証書の購入とコーポレートPPAは、追加性や長期性、会計・契約上の扱いが異なります。マーケット基準への反映可否や枠組みでの受容性も手段ごとに違うため、同列に扱うと開示や目標達成の評価を誤る恐れがあります。"},{"label":"排出係数・為替前提の不統一","detail":"拠点ごとに異なる年度の排出係数や為替レートを混在させると、連結数値の比較可能性が損なわれます。適用基準を統一し、前提を文書化・開示することが、後の検証や第三者保証に耐えるデータ品質の前提になります。"},{"label":"TCFDの現状を誤認しない","detail":"TCFDは2023年に解散し、開示の枠組みはISSB/IFRS S2へ引き継がれました。日本ではSSBJ基準として展開されます。古い前提のまま体制を設計すると整合性を欠くため、制度の現状を正確に押さえる必要があります(2025年10月時点)。"},{"label":"本情報は助言ではなく一般的整理","detail":"本記事は公開情報・制度に基づく一般的な情報整理であり、投資判断や会計監査、税務の助言ではありません。実際の対応は各社の状況に応じ、専門家や第三者保証機関、各枠組みの公式文書を確認のうえ判断してください。特定の電力会社・契約形態を推奨するものでもありません。"}];
const checklist = ["全海外拠点の電力使用量・単価を連結で把握しているか","為替換算ルールを統一し前提を文書化しているか","国別のグリッド排出係数の出典と適用年度を明示しているか","Scope2をロケーション基準とマーケット基準で算定しているか","RE100・SBT目標を拠点別実行計画に分解しているか","各国の再エネ証書・PPAの調達可否を整理しているか","グループ調達方針と承認権限を定めているか","経理・サステナ・調達・IRが単一データ源を共有しているか","連結ベースのKPIを設定し定期的に測定しているか","取締役会・委員会への報告ラインが明確か","為替・カントリーリスクを感度分析に織り込んでいるか","開示・CDP回答に耐えるデータ品質を確保しているか"];
const simulatorCtaBullets = ["電気代上昇が連結損益に与える影響の感応度を把握できる","リスクシナリオ別に財務インパクトの目安を整理できる","取締役会・投資家対話に向けた論点整理の出発点になる","業種別計算機と組み合わせ自社の位置づけを確認できる"];
const faqItems = [{"question":"海外拠点を含む連結でエネルギーを管理する意義は何ですか。","answer":"電力由来のコストとScope2排出は各国の市況・電源構成に依存し、海外拠点に偏ることが多いためです。ISSB(IFRS S2)やSSBJ基準では原則連結ベースの開示が想定され、CDP回答や投資家対話でも網羅的なデータが問われます。各国任せでは全体像が見えず、連結で集約してはじめてコスト・排出・リスクの経営判断が可能になります。本情報は一般的な整理であり、特定の手段を推奨するものではありません。"},{"question":"本記事の数値や事例は正確ですか。","answer":"本記事は推測単価や憶測の変動率を用いず、公開された制度値・公的統計・公開事例のレンジに基づく一般的な情報整理です。caseScenariosは規模・状況別の代表シナリオであり、特定企業の実額を断定するものではありません。電力単価・排出係数・為替は各国・各時点で異なるため、実数値は契約条件・使用実態により異なります。出典はTCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、各社統合報告書の公開事例から整理しています(2025年10月時点)。"},{"question":"この記事は特定の電力会社を推奨していますか。","answer":"いいえ。本記事は中立・非営利の社団法人の視点による一般的な情報整理であり、特定の電力会社・契約形態・再エネ証書・PPAを推奨するものではありません。各国の制度・市況・自社の使用実態に応じて選択肢を中立的に比較し、各枠組みの公式文書や第三者保証の要件を確認のうえ判断いただくことを目的としています。投資判断や会計監査の助言ではありません。"},{"question":"TCFDとISSB・SSBJの関係はどうなっていますか。","answer":"TCFD(気候関連財務情報開示タスクフォース)は2023年に解散し、開示の枠組みはISSB(国際サステナビリティ基準審議会)のIFRS S1/S2へ引き継がれました。日本ではSSBJが国内基準を策定し適用が進みます。これらは原則として連結ベースのScope1・2開示を想定しており、海外拠点を含むデータ整備が前提となります(2025年10月時点)。"},{"question":"Scope2のロケーション基準とマーケット基準の違いは何ですか。","answer":"GHGプロトコルではScope2を二つの基準で算定します。ロケーション基準は各国グリッドの平均排出係数を用い、マーケット基準は契約した電源や再エネ証書を反映します。海外でのI-REC等の証書やPPA調達の効果はマーケット基準に表れます。双方の併記が求められるため、連結での再エネ調達管理にはこの二基準の理解が前提です。"},{"question":"各国で再エネ調達手段が異なる場合、どう整合させますか。","answer":"欧州のGO、北米のREC、アジア・新興国を中心としたI-REC、コーポレートPPA、自家発電など、調達手段は国の市場制度で異なります。グループのRE100・SBT目標を拠点別実行計画に分解し、各国で現実的な手段を割り当てることが基本です。証書とPPAは追加性や枠組みでの受容性が異なるため、混同せず手段ごとに評価することが重要です。"},{"question":"為替やカントリーリスクは連結管理にどう影響しますか。","answer":"海外電気代は現地通貨建てのため、為替変動が連結コストを増減させ、適用レートや期間の前提で連結数値が変わります。加えて各国のエネルギー規制・補助金・市場改革・地政学リスクが調達条件を揺らします。CFOは電気代を為替・国別リスクと結びついた財務変数として感度分析に組み込み、前提を統一・開示する視点が有効です。"},{"question":"連結エネルギーデータの基盤づくりはどこから始めますか。","answer":"まず全海外拠点の電力使用量・単価・契約形態・グリッド排出係数を共通フォーマットで収集し、通貨・単位・為替換算を統一します。経理・サステナビリティ・調達・IRが単一のデータ源を共有し、定義と更新責任を明確化します。財務連結と同等の精度とガバナンスを目標とすることで、開示・CDP回答・投資家対話に耐える基盤になります。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"金融庁（サステナビリティ情報の開示・有価証券報告書）","url":"https://www.fsa.go.jp/"},{"name":"IFRS財団 ISSB（IFRS S1/S2 サステナビリティ開示基準）","url":"https://www.ifrs.org/"},{"name":"経済産業省（GX・カーボンニュートラル・エネルギー政策）","url":"https://www.meti.go.jp/"},{"name":"環境省（温室効果ガス排出量算定・SHK制度・GHGプロトコル）","url":"https://www.env.go.jp/"},{"name":"日本取引所グループ JPX（コーポレートガバナンス・開示）","url":"https://www.jpx.co.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/cfo-executive","title":"CFO・経営層向け電気代戦略（カテゴリ）","description":"CFO向け記事ハブ。"},{"href":"/articles/for-executives","title":"経営層・CFO向け（一覧）","description":"経営層向け記事のハブ。"},{"href":"/cfo-electricity-cost-basics","title":"CFOが知るべき電気代の基礎","description":"P/L上の位置づけと経営判断の起点。"},{"href":"/executive-board-report-template","title":"取締役会報告テンプレート","description":"電気代リスクの取締役会報告様式。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/executive-multi-site-cost-management","title":"多拠点のコスト管理（経営層）","description":"連結での拠点群管理。"},{"href":"/executive-mid-term-plan-electricity","title":"中期経営計画と電気代","description":"中計への織り込み。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"グローバル再エネ目標。"},{"href":"/non-fossil-certificate-types-purchase","title":"非化石証書の種類と購入","description":"国内証書と海外証書の対比。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの全体像","description":"各国PPAの選択肢。"},{"href":"/area-power-supply-mix-comparison","title":"エリア別電源構成マップ","description":"国内エリアの電源差。"},{"href":"/cfo-supply-chain-cn-strategy","title":"サプライチェーンCN戦略（Scope3対応）","description":"グローバル調達(姉妹記事)。"},{"href":"/cfo-tcfd-issb-electricity-disclosure","title":"TCFD/ISSB対応の電気代開示","description":"連結開示(姉妹記事)。"},{"href":"/case-study-datacenter-hyperscale-pue","title":"ハイパースケールDC×PUE改善の事例","description":"グローバル高負荷事業ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CfoGlobalConsolidatedEnergyManagementPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-05-31"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "CFO・経営層向け電気代戦略", url: "https://simulator.eic-jp.org/articles/cfo-executive" },
          { name: breadcrumbTitle, url: pageUrl },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/cfo-executive" className="underline-offset-2 hover:underline">CFO・経営層向け電気代戦略</Link>
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
            ※ 本記事は公開された制度・公的データ・統合報告書等の公開事例から整理した一般的な情報・代表シナリオです。投資判断・会計監査・法務の助言ではありません。数値は目安であり、実数値は契約条件・使用実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態を推奨するものではありません。{" "}
            <Link href="/articles/cfo-executive" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFO・経営層向けカテゴリ</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜCFO・経営層がこのテーマに取り組むべきか（背景と財務インパクト）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本テーマがCFO・経営層にとって重要である背景と、財務・開示・企業価値への影響を整理します。</p>
            <div className="mt-4 space-y-3">
              {background.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">押さえるべき制度・フレームワークと論点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">押さえておくべき制度・フレームワークと主要論点を整理します。制度名は正式名称で記載しています。</p>
            <div className="mt-4 space-y-3">
              {frameworks.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務対応のステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">実務として進める際の標準的なステップを整理します。単一の打ち手ではなく段階的な対応が前提です。</p>
            <div className="mt-4 space-y-3">
              {steps.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模・状況別の代表シナリオ（Before/After・公開情報ベース）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模・状況の異なる代表シナリオで、Before/Afterの考え方を整理します。記載は公開情報・制度に基づく代表シナリオの目安で、実際の状況は企業ごとに異なります。実在企業の事例ではありません。</p>
            <div className="mt-4 space-y-4">
              {caseScenarios.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">ねらい・効果（目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">数値・前提とデータ出典（捏造ゼロの考え方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値・記載は、公開された制度・公的データ・統合報告書等の公開事例から整理した代表レンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本記事は2025年10月時点の公開情報（TCFD/ISSB公式・金融庁・経済産業省・環境省・東証（JPX）・GHGプロトコル・各社統合報告書の公開事例等）から整理した代表シナリオ・一般的情報です。投資判断・会計監査・法務の助言ではありません。数値は目安で、実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ガバナンス・他部門連携・KPI</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">経理・サステナビリティ・調達・IRなど他部門との連携、取締役会報告、KPI設計の観点を整理します。</p>
            <div className="mt-4 space-y-3">
              {governance.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社の電気代と財務インパクトを試算・診断する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{d1CtaLead}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模・契約区分・エリアを選ぶだけで推定年間電気代と削減余地を試算できる{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              {" "}で、自社の電気代の水準感と感応度を把握する出発点になります。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">経営判断・投資家対話の観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">経営判断・投資家対話の観点から、総合的に検討すべきポイントを整理します。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本テーマで陥りやすい誤解や、事前に確認すべき留意点を整理します。</p>
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
            <h2 className="text-xl font-semibold text-slate-900">CFO・経営層向けチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社で取り組みを進めるための確認項目です。現状把握から着手しましょう。</p>
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
              のデータも参照のうえ、予算策定・開示・投資家対話の判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-31" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の電気代・財務インパクトを試算する"
            description="開示・予算・投資家対話の前提として、自社の電気代の水準感と上振れリスクを把握しておくことが有効です。シミュレーターと業種別電気代計算機で、中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力契約・脱炭素・開示の論点を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、CFO・経営層の電力・エネルギー戦略（開示・予算・調達・投資家対話）の判断材料を整理します。初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
