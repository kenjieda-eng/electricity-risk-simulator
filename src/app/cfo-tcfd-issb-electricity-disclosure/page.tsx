import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "TCFD/ISSB対応の電気代開示完全ガイド｜Scope2算定・統合報告書記載・投資家対話（CFO向け・代表シナリオ）";
const pageDescription = "CFO・経営層向けに、TCFD/ISSB（IFRS S2）・SSBJ基準に対応した電気代・Scope2の開示実務を、算定フロー・統合報告書記載・投資家対話の観点で整理。公開制度・事例に基づく代表シナリオで、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/cfo-tcfd-issb-electricity-disclosure";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["TCFD ISSB 電気代 開示","Scope2 算定 マーケット基準","統合報告書 電気代","CFO サステナビリティ開示","IFRS S2 電力"],
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

const h1Text = "TCFD/ISSB対応の電気代開示完全ガイド｜Scope2算定・統合報告書記載・投資家対話";
const breadcrumbTitle = "TCFD/ISSB対応の電気代開示";
const leadText = "本記事は公開情報・制度に基づく一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。電気代は単なるコストではなく、Scope2排出量を通じて気候関連開示の中核データへと位置づけが変わりました。TCFDは2023年に解散し、開示の枠組みはISSB(IFRS S2)へ、国内ではSSBJ基準へと引き継がれています。本稿はCFO・経営企画・IR担当が、電力消費とScope2をどの算定基準で捉え、再エネ証書やPPAをどう反映し、シナリオ分析や有価証券報告書・統合報告書にどう記載するかを、制度の現状に沿って実務目線で整理します。";
const d1CtaLead = "自社の電気代が排出開示にどう影響するかを考える第一歩として、まず使用実態に即した電気代の規模感を把握することが有効です。業種別電気代計算機を使えば、業種・規模の代表シナリオに基づく目安を試算でき、Scope2算定の前提となる電力コストの位置づけを社内で議論する材料になります。実数値は契約条件・使用実態により異なります。特定の電力会社・契約形態を推奨するものではありません。";
const simulatorCtaLead = "電気料金の上昇・高騰リスクは、Scope2開示とシナリオ分析の双方に関わる経営変数です。シミュレーターでは、料金変動の代表シナリオに基づき自社のリスク傾向を可視化でき、移行リスク分析や設備投資判断の議論の出発点になります。結果は公開情報・制度に基づく一般的な目安であり、実数値は契約条件・使用実態により異なります。特定の電力会社・契約形態を推奨するものではありません。";
const whatYouLearn = ["TCFDからISSB(IFRS S2)・SSBJ基準への移行と電気代開示への影響","Scope2のロケーション基準とマーケット基準の違いと使い分け","再エネ証書・PPAをマーケット基準にどう反映するかの実務","移行リスク・物理リスクのシナリオ分析と電力コストの感応度","有価証券報告書・統合報告書への記載と第三者保証の論点"];
const background = [{"label":"電気代がコストから開示データへ","detail":"電力消費量はScope2排出量算定の基礎データであり、気候関連開示の量的指標として外部公表の対象になりました。経理上の費用管理だけでなく、使用量・契約電力・調達構成を排出係数と紐づけて把握する体制が求められます。電気代の管理粒度がそのまま開示の信頼性に直結するため、CFOが財務報告と同等の規律で関与する意義が高まっています。実数値は契約条件・使用実態により異なります。"},{"label":"有価証券報告書への記載義務化","detail":"金融庁の開示府令改正により、有価証券報告書のサステナビリティ情報欄でガバナンス・戦略・リスク管理・指標と目標の記載が求められるようになりました。GHG排出量の記載が広がる中、Scope2の前提となる電力データの正確性が監査・保証の視点で問われます。法定開示書類に載る数値である以上、社内の集計プロセスを文書化し追跡可能にしておくことが、CFOの説明責任を支えます。"},{"label":"投資家・格付の評価軸化","detail":"機関投資家やESG評価機関、CDP等の質問書は、排出量の算定基準や削減実績を定量的に問います。電力の調達構成や再エネ比率は評価スコアや対話の論点となり、資本コストや格付にも影響し得ます。電気代の中身を開示水準で語れるかどうかが、投資家対話の質を左右します。これは特定の電力会社・契約形態を推奨するものではなく、開示の充実を促す趣旨です。"},{"label":"サプライチェーン要請の波及","detail":"大手取引先がScope3(購入した製品・サービス等)の削減を進める中、サプライヤーに対し電力由来排出の開示や低減を求める動きが広がっています。自社のScope2が取引先のScope3に算入されるため、開示は対外的な取引継続・受注条件にも関わります。電力データの整備は、財務だけでなく事業継続の観点からも経営課題となっています。"},{"label":"国際基準との整合圧力","detail":"ISSBのIFRS S1/S2は世界的なベースラインとして各国に採用が進み、国内ではSSBJが対応基準を策定しています。海外投資家や海外子会社を持つ企業ほど、国際比較可能な基準での開示が期待されます。電気代・Scope2の算定方法を国際基準に整合させることは、グローバルな資本市場での説明力確保につながります。実務は適用時期・経過措置により異なります。"}];
const frameworks = [{"label":"TCFD解散とISSB(IFRS S2)への移行","detail":"TCFD(気候関連財務情報開示タスクフォース)は2023年に解散し、その提言はISSB(国際サステナビリティ基準審議会)のIFRS S2気候関連開示へ引き継がれました。4本柱(ガバナンス・戦略・リスク管理・指標と目標)の構造は維持され、Scope2を含むGHG排出量の開示が指標として位置づけられます。国内ではSSBJがこれに対応する基準を整備しており、電気代開示もこの枠組みに沿って構成します。"},{"label":"GHGプロトコルとScope2算定基準","detail":"GHGプロトコルのScope2ガイダンスは、電力由来排出をロケーション基準(系統平均の排出係数)とマーケット基準(調達契約・証書を反映)の二重で算定・開示することを求めます。電気代の裏付けとなる使用量データを両基準で集計できる体制が前提です。再エネ調達の効果はマーケット基準にのみ反映される点が、開示設計上の重要な論点です。"},{"label":"排出係数と再エネ証書・PPAの扱い","detail":"ロケーション基準は地域・国の系統平均係数を用い、マーケット基準は小売事業者別係数や再エネ証書(非化石証書・グリーン電力証書等)、コーポレートPPAを反映します。証書やPPAの環境価値は、品質基準(発電源・時期・追加性等の要件)を満たす形でマーケット基準に算入します。証書の二重計上を避ける管理が、開示の信頼性を担保します。"},{"label":"シナリオ分析と第三者保証","detail":"IFRS S2は移行リスク(炭素価格・規制・電力価格)と物理リスク(異常気象による供給・需要変動)を複数シナリオで分析することを求めます。電力コストはシナリオごとの感応度分析の重要変数です。さらに排出量データには第三者保証(assurance)の付与が国際的に進んでおり、限定的保証から合理的保証への移行を見据えたデータ品質の確保が課題となります。"}];
const steps = [{"name":"電力データの集約基盤を整える","role":"土台づくり","detail":"全拠点・全子会社の電力使用量を、契約区分・調達構成・期間とともに一元集約します。請求書や検針データを経理システムや排出量算定ツールと連携し、ロケーション基準とマーケット基準の双方で集計できる状態を整えます。データの出所と算定根拠を文書化し、後工程の保証に耐える追跡性を確保することが起点となります。"},{"name":"二基準でScope2を算定する","role":"算定の実装","detail":"GHGプロトコルに沿い、ロケーション基準は系統平均係数、マーケット基準は事業者別係数・再エネ証書・PPAを反映して算定します。証書の環境価値が品質要件を満たすか、二重計上がないかを確認します。前年比較や目標進捗を示せるよう、算定方法の一貫性と注記を整えます。実数値は契約条件・使用実態により異なります。"},{"name":"シナリオ分析に電力変数を組み込む","role":"戦略への接続","detail":"移行リスクと物理リスクの複数シナリオで、電力価格・炭素価格・調達構成の変化が財務に与える影響を感応度分析します。代表シナリオでの定性・定量の幅を示し、断定を避けつつレジリエンスを説明します。分析の前提と出典を明記し、経営戦略・設備投資計画との接続を整理します。"},{"name":"開示書類に記載し保証を準備する","role":"開示と検証","detail":"有価証券報告書のサステナビリティ情報欄と統合報告書に、4本柱に沿って電力・Scope2の指標と目標、算定基準を記載します。記載数値の根拠資料を整備し、第三者保証の範囲と水準を関係部門・監査人と協議します。開示と保証を一連のプロセスとして設計することが、信頼性の確保につながります。"}];
const caseScenarios = [{"title":"プライム上場大手(開示成熟)","before":"TCFD提言ベースで気候開示を行ってきたが、ISSB・SSBJへの移行とScope2の二基準開示、保証範囲の整理が課題でした。","after":"全拠点の電力データを基盤化し、ロケーション/マーケット両基準を算定。再エネ証書・PPAを品質要件込みでマーケット基準に反映し、シナリオ分析に電力価格変数を組み込みました。","result":"国際基準と整合した開示と限定的保証の取得により、投資家対話で算定根拠を定量的に説明できる体制が整う見込みです。効果の程度は前提により異なります。"},{"title":"中堅企業(プライム準備)","before":"排出量の集計は拠点ごとに分散し、マーケット基準や証書の扱いが未整備で、開示水準の引き上げが必要でした。","after":"電力使用量の集約ルールを定め、二基準算定と注記の様式を導入。シナリオ分析は代表シナリオでの定性中心に着手し、段階的に定量化を計画しました。","result":"有価証券報告書のサステナビリティ情報欄への記載に耐える基礎が整い、将来の保証取得に向けたデータ品質の改善が進む想定です。実数値は使用実態により異なります。"},{"title":"非上場大企業(取引先要請対応)","before":"法定開示義務は限定的でも、大手取引先からScope3算入のための電力由来排出データ提供を求められていました。","after":"請求データを基にロケーション基準のScope2を整備し、調達構成に応じてマーケット基準の試算にも着手。算定根拠を文書化しました。","result":"取引先への排出データ提供と対話が可能になり、サプライチェーン上の継続的な取引要請への対応力が高まる見込みです。程度は契約条件により異なります。"}];
const dataNotes = [{"label":"出典の範囲","detail":"本記事の制度・数値の前提は、TCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、各社統合報告書の公開事例から整理(2025年10月時点)したものです。推測単価や憶測の変動率は記載しておらず、数値に言及する場合も公開された制度値・公的統計・公開事例のレンジに限っています。"},{"label":"排出係数の前提","detail":"Scope2算定に用いる排出係数は、ロケーション基準では国・地域の系統平均値、マーケット基準では小売事業者別の公表係数や証書を用います。係数は年度・地域・事業者ごとに更新され変動します。本稿は特定の係数値を断定せず、出典に基づく最新値を各社が適用する前提で整理しています。"},{"label":"代表シナリオの位置づけ","detail":"caseScenariosは公開された開示事例や制度を基にした代表シナリオ・目安であり、特定企業の実数値ではありません。before/after/resultは定性と幅のある目安で示し、実額や削減率を断定していません。実際の効果は使用実態・契約条件・適用基準により異なります。"},{"label":"適用時期と経過措置","detail":"ISSB(IFRS S2)・SSBJ基準の適用時期や経過措置、保証の義務化時期は制度設計の進展により変わり得ます。本稿は2025年10月時点の公開情報に基づく一般的整理であり、最新の制度動向は各公式情報で確認する前提です。投資判断・会計監査の助言ではありません。"}];
const governance = [{"label":"取締役会への報告体制","detail":"気候関連の指標と目標、Scope2の進捗を取締役会へ定期報告し、監督機能を担保します。IFRS S2のガバナンス柱は、誰がどの頻度で気候課題を監督・管理するかの明示を求めます。電力・排出データを経営の意思決定情報として位置づけ、報告ラインと責任の所在を文書化することが、開示の前提となります。"},{"label":"経理・サステナ・調達・IRの連携","detail":"電気代データは経理、排出量算定はサステナビリティ部門、調達は再エネ証書・PPA、IRは投資家対話と、関係部門が横断します。データ定義と集計責任を部門間で統一し、開示数値の一貫性を保つガバナンスが必要です。CFOが横串の調整役となり、財務情報と非財務情報の整合を確保する役割が期待されます。"},{"label":"KPIと内部統制","detail":"Scope2排出量、再エネ比率、原単位などをKPIとして設定し、進捗を内部統制の枠組みで管理します。算定プロセスに承認・レビューの統制を組み込み、保証に耐える追跡性を持たせます。財務報告に準じた規律を非財務データにも適用することで、開示の信頼性と説明責任が高まります。"},{"label":"保証(assurance)対応の整備","detail":"排出量への第三者保証の付与が国際的に進む中、保証範囲・水準(限定的/合理的)を監査人・保証機関と協議し、証跡を整備します。電力データの出所、係数の根拠、証書の管理記録を文書化することが、保証取得とその拡大に向けた基盤となります。早期の体制整備が将来負担の軽減につながります。"}];
const viewpoints = [{"label":"コストと開示の統合的把握","detail":"電気代を費用管理と排出開示の双方の視点で捉えることで、調達戦略と気候戦略を一体で論じられます。経営層は電力の量・調達構成・係数を統合的に把握し、財務とサステナビリティの両面から意思決定する視座が求められます。これは特定の契約形態を推奨するものではなく、把握精度の向上を促す趣旨です。"},{"label":"投資家対話での説明力","detail":"投資家やESG評価機関は算定基準や削減根拠を定量的に問います。ロケーション基準とマーケット基準の差や再エネ反映の根拠を明確に語れることが、対話の信頼を高めます。開示数値の背景を経営の言葉で説明できるかどうかが、資本市場での評価を左右します。"},{"label":"シナリオ分析の経営活用","detail":"電力価格・炭素価格のシナリオ分析は、開示要件であると同時に設備投資・調達計画の検討材料となります。複数シナリオでの感応度を経営計画に接続することで、レジリエンスを内外に示せます。分析を開示のためだけでなく経営判断に活かす姿勢が、開示の質を高めます。"},{"label":"国際比較可能性の確保","detail":"ISSBベースの開示は国際比較可能性を重視します。海外投資家を意識する企業ほど、算定基準・前提の整合と注記の充実が評価されます。電気代・Scope2を国際基準で語れる体制は、グローバルな資金調達やM&Aの局面でも説明力を発揮します。"},{"label":"段階的成熟のロードマップ","detail":"開示成熟度は企業により異なります。ロケーション基準の整備から始め、マーケット基準・シナリオ定量化・保証へと段階的に高度化するロードマップを描くことが現実的です。経営層は到達目標と移行計画を示し、投資家に進化の方向性を伝えることが信頼につながります。"}];
const cautions = [{"label":"二基準の混同を避ける","detail":"ロケーション基準とマーケット基準は目的も計算も異なります。再エネ証書やPPAの効果はマーケット基準にのみ反映され、ロケーション基準では系統平均が用いられます。両者を混同して開示すると比較可能性を損ないます。GHGプロトコルに沿い、両基準を区別して併記することが原則です。"},{"label":"証書の二重計上リスク","detail":"再エネ証書やPPAの環境価値は、品質要件を満たし二重計上を避けて初めて開示に反映できます。証書の取得・償却の記録管理が不十分だと、保証段階で指摘を受ける恐れがあります。調達と算定の部門間で証跡を共有し、ダブルカウントを防ぐ統制が不可欠です。"},{"label":"TCFDは解散済みという認識","detail":"TCFDは2023年に解散しており、現在の国際的枠組みはISSB(IFRS S2)・国内ではSSBJに引き継がれています。TCFD提言の構造は維持されますが、最新の基準名で語ることが正確です。古い枠組み名のみで開示を語ると、制度理解の遅れと受け取られる場合があります。"},{"label":"排出係数は変動する前提","detail":"排出係数は年度・地域・事業者ごとに更新されます。過去の係数を固定的に用いると実態とずれます。算定時点の最新公表値を用い、係数の出典と適用年度を注記することが重要です。係数変動を削減実績と取り違えないよう、要因分解の説明も求められます。"},{"label":"開示は助言ではない","detail":"本稿は公開情報に基づく一般的な情報整理であり、投資判断・会計監査・税務の助言ではありません。また特定の電力会社・契約形態を推奨するものでもありません。具体的な開示判断は、自社の状況に応じて監査人・専門家と協議のうえ決定する前提でご活用ください。"}];
const checklist = ["全拠点・子会社の電力使用量を一元集約しているか","ロケーション基準とマーケット基準を併記算定できるか","再エネ証書・PPAの品質要件と二重計上を確認したか","排出係数の出典と適用年度を注記しているか","TCFDからISSB・SSBJへの移行を反映しているか","移行リスク・物理リスクをシナリオ分析しているか","電力価格・炭素価格の感応度を経営計画に接続したか","有価証券報告書のサステナビリティ欄に記載したか","統合報告書と法定開示の数値が整合しているか","第三者保証の範囲と水準を関係部門と協議したか","取締役会への報告体制とKPIを整備したか","経理・サステナ・調達・IRの連携を確立したか"];
const simulatorCtaBullets = ["料金変動の代表シナリオで自社のリスク傾向を可視化","Scope2・シナリオ分析の前提となる電力コストを把握","移行リスクと設備投資判断の議論の出発点に活用","結果は公開情報に基づく目安で実数値は実態により異なる"];
const faqItems = [{"question":"TCFDとISSB(IFRS S2)・SSBJはどう違い、電気代開示にどう影響しますか。","answer":"TCFDは2023年に解散し、その提言はISSB(国際サステナビリティ基準審議会)のIFRS S2へ、国内ではSSBJ基準へ引き継がれました。ガバナンス・戦略・リスク管理・指標と目標の4本柱は維持され、Scope2を含むGHG排出量が指標として開示対象になります。電気代は使用量を通じてScope2の基礎データとなるため、これらの基準に沿って算定基準や注記を整えることが、電気代開示の出発点になります。"},{"question":"Scope2のロケーション基準とマーケット基準はどう使い分けますか。","answer":"GHGプロトコルのScope2ガイダンスは両基準での算定・開示を求めます。ロケーション基準は地域・国の系統平均係数を用い、マーケット基準は小売事業者別係数や再エネ証書・PPAを反映します。再エネ調達の効果はマーケット基準にのみ表れるため、両者を区別して併記することが原則です。混同すると比較可能性を損なうため、目的の違いを理解して開示することが重要です。"},{"question":"再エネ証書やPPAはマーケット基準にどう反映しますか。","answer":"非化石証書やグリーン電力証書、コーポレートPPAの環境価値は、発電源・時期・追加性等の品質要件を満たす形でマーケット基準に算入します。証書の取得・償却記録を管理し、二重計上を避けることが信頼性の前提です。調達部門と算定部門で証跡を共有し、要件適合を確認する統制が求められます。具体的な要件は最新の制度・ガイダンスで確認する前提です。"},{"question":"電気代開示でシナリオ分析はどこまで求められますか。","answer":"IFRS S2は移行リスク(炭素価格・規制・電力価格)と物理リスク(異常気象による供給・需要変動)を複数シナリオで分析することを求めます。電力コストは感応度分析の重要変数です。開示成熟度に応じ、定性中心から段階的に定量化を進める実務が一般的です。分析の前提と出典を明示し、経営計画や設備投資判断に接続することが質の高い開示につながります。"},{"question":"電気代・Scope2はどの開示書類に記載しますか。","answer":"金融庁の開示府令により、有価証券報告書のサステナビリティ情報欄にガバナンス・戦略・リスク管理・指標と目標の記載が求められ、GHG排出量の記載が広がっています。あわせて統合報告書でも詳細を示す企業が多くあります。法定開示と任意開示の数値が整合し、算定基準と注記が一貫していることが重要です。適用時期や範囲は制度の進展により異なります。"},{"question":"排出量データへの第三者保証(assurance)はどう準備しますか。","answer":"排出量への第三者保証は国際的に拡大しており、限定的保証から合理的保証への移行が見込まれます。準備としては、電力データの出所、排出係数の根拠、証書の管理記録を文書化し、追跡可能にすることが基本です。保証範囲と水準を監査人・保証機関と早期に協議し、財務報告に準じた内部統制を非財務データにも適用することが、円滑な保証取得につながります。"},{"question":"記事の数値や事例は正確ですか。","answer":"本記事の数値・事例は、TCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、各社統合報告書の公開事例から整理(2025年10月時点)したものです。推測単価や憶測の変動率は記載していません。caseScenariosは公開情報に基づく代表シナリオ・目安であり、特定企業の実数値ではなく、before/after/resultは定性と幅のある表現にとどめています。実数値は契約条件・使用実態により異なります。"},{"question":"特定の電力会社や契約形態を推奨しているのですか。","answer":"いいえ。本記事は中立・非営利の立場から、公開情報・制度に基づく一般的な情報整理を提供するものであり、特定の電力会社・契約形態を推奨するものではありません。再エネ証書やPPAに言及するのは開示上の算定方法の説明のためで、調達手段の優劣評価ではありません。具体的な調達・開示判断は、自社の状況に応じて専門家と協議のうえ決定する前提でご活用ください。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"金融庁（サステナビリティ情報の開示・有価証券報告書）","url":"https://www.fsa.go.jp/"},{"name":"IFRS財団 ISSB（IFRS S1/S2 サステナビリティ開示基準）","url":"https://www.ifrs.org/"},{"name":"経済産業省（GX・カーボンニュートラル・エネルギー政策）","url":"https://www.meti.go.jp/"},{"name":"環境省（温室効果ガス排出量算定・SHK制度・GHGプロトコル）","url":"https://www.env.go.jp/"},{"name":"日本取引所グループ JPX（コーポレートガバナンス・開示）","url":"https://www.jpx.co.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/cfo-executive","title":"CFO・経営層向け電気代戦略（カテゴリ）","description":"CFO向け記事ハブ。"},{"href":"/articles/for-executives","title":"経営層・CFO向け（一覧）","description":"経営層向け記事のハブ。"},{"href":"/cfo-electricity-cost-basics","title":"CFOが知るべき電気代の基礎","description":"P/L上の位置づけと経営判断の起点。"},{"href":"/executive-board-report-template","title":"取締役会報告テンプレート","description":"電気代リスクの取締役会報告様式。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/scope2-reduction-cfo-responsibility","title":"Scope2削減とCFOの責任","description":"TCFD算出・再エネ調達・経営判断。"},{"href":"/ir-disclosure-electricity-risk","title":"IR開示における電気代リスク","description":"有報・統合報告書・株主総会対応。"},{"href":"/executive-esg-electricity-disclosure","title":"経営層のESG電気代開示","description":"ESG開示の論点整理。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"再エネ100%調達の枠組み。"},{"href":"/non-fossil-certificate-types-purchase","title":"非化石証書の種類と購入","description":"マーケット基準算定の調達手段。"},{"href":"/cfo-integrated-report-electricity-disclosure","title":"統合報告書での電気代記載と投資家対話","description":"開示の実務(姉妹記事)。"},{"href":"/cfo-decarbonization-investor-narrative","title":"投資家向け脱炭素シナリオ説明","description":"エンゲージメント(姉妹記事)。"},{"href":"/cfo-supply-chain-cn-strategy","title":"サプライチェーンCN戦略（Scope3対応）","description":"Scope3との接続(姉妹記事)。"},{"href":"/case-study-semiconductor-re100-procurement","title":"半導体×RE100調達の事例","description":"再エネ調達の経営判断ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CfoTcfdIssbElectricityDisclosurePage() {
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
