import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "統合報告書での電気代記載と投資家対話｜TCFD/ISSB/CDPの開示要件（CFO向け・代表シナリオ）";
const pageDescription = "統合報告書での電気代・エネルギー記載と投資家対話を、価値創造ストーリーへの位置づけ・TCFD/ISSB/CDP要件・KPI開示・機関投資家対話の観点でCFO向けに整理。公開事例に基づく代表シナリオで、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/cfo-integrated-report-electricity-disclosure";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["統合報告書 電気代 記載","投資家対話 エネルギー","TCFD ISSB CDP 開示要件","Scope2 原単位 KPI","ESG 投資家 電力"],
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

const h1Text = "統合報告書での電気代記載と投資家対話｜TCFD/ISSB/CDPの開示要件";
const breadcrumbTitle = "統合報告書での電気代記載";
const leadText = "本記事は公開情報・制度に基づく一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。統合報告書はいまや財務と非財務を架橋する価値創造の物語として機関投資家に読み込まれ、エネルギーコストや気候リスクの記載品質が対話の質を左右します。電気代は単なる販管費ではなく、燃料価格変動・カーボンプライシング・電源構成の文脈で語るべき経営テーマです。本稿ではCFO・経営企画・IR担当が、TCFD/ISSBの流れを踏まえつつ電気代・エネルギーをどう統合報告書に位置づけ、投資家対話へつなげるかを整理します。";
const d1CtaLead = "統合報告書でエネルギーコストを語る前提として、自社の電気代の規模感を把握しておくことが有効です。業種別電気代計算機を使えば、業種の代表シナリオに基づき電気代の目安を試算できます。数値は公開情報に基づく目安であり、実数値は契約条件・使用実態により異なります。KPI設計や財務影響の検討に向けた出発点としてご活用ください。";
const simulatorCtaLead = "電気代の財務影響を経営の言葉で語るには、料金上昇・高騰リスクの感応度を把握することが第一歩です。本シミュレーターは、公開情報・代表シナリオに基づき料金上昇リスクの目安を診断します。結果は契約条件・使用実態により異なる目安であり、特定の電力会社・契約形態を推奨するものではありません。統合報告書での感応度記述やリスク管理方針の検討材料としてご利用ください。";
const whatYouLearn = ["統合報告書の価値創造ストーリーにおけるエネルギーコスト・気候リスクの位置づけ方","TCFD解散後のISSB・IFRS S2、SSBJ、CDPと統合報告書記載の関係性","電気代・エネルギーの財務影響を定量・定性で開示する際の考え方と限界","売上高電気代比率やScope2原単位などKPI設計と経年比較の論点","機関投資家・ESG評価機関との対話を見据えた開示の信頼性・保証の確保策"];
const background = [{"label":"電気代が価値創造ストーリーの構成要素になった","detail":"燃料価格の変動やカーボンプライシングの進展により、電気代は固定的な販管費ではなく、調達戦略・電源構成・気候移行と結びつく経営変数になりました。統合報告書はビジネスモデルと資本の関係を語る場であり、エネルギーコストをコスト管理だけでなく価値創造とリスクの両面で記述する企業が増えています。CFOにはその財務的含意を経営の言葉で説明する役割が求められます。"},{"label":"気候関連開示の制度化が記載水準を押し上げた","detail":"TCFDは2023年に解散し、開示の枠組みはISSB・IFRS S2へ引き継がれました。日本ではSSBJが基準開発を進め、東証プライム市場を中心に気候関連開示への期待が高まっています。統合報告書はこれら制度開示と任意開示を束ねる媒体として位置づけられ、エネルギー・電気代に関する記載の一貫性と深さが評価対象になりつつあります。特定の電力会社・契約形態を推奨するものではありません。"},{"label":"投資家がエネルギーコスト感応度を重視している","detail":"機関投資家は、電力価格や燃料費の変動が利益にどう波及するかという感応度を関心事としています。統合報告書やIR資料でエネルギーコストの構造とリスク管理方針が示されると、業績変動の説明力が高まります。逆に記載が乏しいと、対話の場で個別質問が増え、CFOの説明負荷が上がります。前広な情報整理が建設的対話の土台になります。"},{"label":"ESG評価とコスト・オブ・キャピタルへの波及","detail":"ESG評価機関の評価は、機関投資家のスクリーニングや一部の資金調達条件に影響しうるとされます。エネルギー・気候関連の開示が体系化されているかは評価項目に含まれることがあり、統合報告書の記載品質が間接的に資本コストの議論につながる可能性があります。ただし評価ロジックは各機関で異なり、過度な最適化ではなく実態に即した開示が基本です。"},{"label":"財務と非財務の統合がガバナンス上の課題に","detail":"電気代やScope2は経理・サステナビリティ・調達・IRが個別に扱いがちで、数値や前提が部門間で食い違うことがあります。統合報告書は全社で一つの物語を語る前提のため、データの整合と責任の所在を明確にする必要があります。CFOがファイナンスの視点で全体を束ねることが、開示の信頼性とガバナンスの実効性を高める鍵になります。"}];
const frameworks = [{"label":"ISSB・IFRS S2とTCFDの連続性","detail":"TCFDの4本柱(ガバナンス・戦略・リスク管理・指標と目標)はISSBのIFRS S2に実質的に引き継がれました。電気代・エネルギーは主に戦略(移行リスク・物理的リスク)と指標と目標(Scope2やエネルギー関連KPI)に関係します。統合報告書ではこれら制度開示の論点を価値創造ストーリーに翻訳し、財務影響の方向感を経営の言葉で説明することが期待されます。"},{"label":"SSBJ基準と国内開示の動向","detail":"日本ではSSBJがサステナビリティ開示基準の開発を進めており、適用範囲やタイミングは制度動向により変わりえます。統合報告書はSSBJ対応の制度開示と整合させつつ、より文脈豊かにエネルギー・気候を語る場になります。CFOは制度の現状を正確に把握し、実数値は契約条件・使用実態により異なる旨を併記しながら、過不足のない記載方針を定めることが重要です。"},{"label":"CDPとScope2の算定境界","detail":"CDPはエネルギー・気候に関する質問書を通じた情報開示の枠組みで、Scope2の算定にはGHGプロトコルのロケーション基準とマーケット基準の二つの考え方があります。電気の調達方法により数値が変わるため、統合報告書では算定境界と前提を明示することが信頼性につながります。数値は公開された制度値・公的統計に基づき、目安である旨を併記する姿勢が求められます。"},{"label":"財務影響の定量・定性開示と感応度分析","detail":"気候・エネルギーの財務影響開示では、確度の高い部分を定量で、不確実性が大きい部分を定性で示す使い分けが実務的です。電気代についても、カーボンプライシングや電源構成の変化に対する感応度を代表シナリオで示す手法があります。推測単価や憶測の変動率は避け、公開情報・代表シナリオに基づく目安として提示することが中立性と整合します。"}];
const steps = [{"name":"記載方針とマテリアリティの確認","role":"土台づくり","detail":"まず自社にとってエネルギー・電気代がどの程度マテリアルかを、業種特性とコスト構造から確認します。電力多消費型かどうかで開示の重点は変わります。統合報告書全体の価値創造ストーリーのどこに位置づけるかを、サステナビリティ部門と経営企画で合意し、ISSB/SSBJの論点との対応関係を整理することが出発点です。特定の契約形態を前提にしない中立的な記述方針を定めます。"},{"name":"データ収集とKPIの定義","role":"数値基盤","detail":"売上高電気代比率やScope2原単位などのKPIを定義し、算定境界・基準年・前提を明文化します。電気使用量や排出係数は公開された制度値・実績に基づき、推測値を避けます。経理・調達・サステナビリティの数値を突き合わせ、部門間の不整合を解消します。経年比較ができるよう定義の継続性を保ち、変更時は理由を注記する運用を設計します。"},{"name":"財務影響の整理とシナリオ記述","role":"ストーリー化","detail":"電気代・エネルギーの財務影響を、確度の高い定量部分と不確実な定性部分に分けて整理します。カーボンプライシングや電源構成の変化を代表シナリオとして描き、業績への方向感を示します。実額の断定は避け、目安・代表シナリオである旨と、実数値は契約条件・使用実態により異なる旨を併記します。リスク管理方針と打ち手をあわせて記述します。"},{"name":"開示・対話・フィードバック反映","role":"対話と改善","detail":"統合報告書を公表し、投資家説明会やエンゲージメントで記載内容を補足します。機関投資家やESG評価機関からの質問・指摘を記録し、翌年の記載改善につなげます。説明の一貫性を保つため、IR資料・有価証券報告書・統合報告書の数値と前提を揃えます。対話で得た論点を取締役会へ報告し、ガバナンスのループを回します。"}];
const caseScenarios = [{"title":"開示先進のプライム上場大手(電力多消費型)","before":"気候・エネルギー開示は制度対応中心で、電気代の財務影響は定性記述にとどまっていました。","after":"Scope2原単位や売上高電気代比率を経年で開示し、カーボンプライシングの代表シナリオに基づく感応度を定性・定量で併記しました。","result":"投資家対話でエネルギーコストの論点が前広に共有され、個別質問が整理されたとされます。数値は公開情報・代表シナリオに基づく目安で、実数値は使用実態により異なります。"},{"title":"標準的なプライム上場企業(中堅規模)","before":"統合報告書にエネルギー記載はあるものの、KPIの定義や算定境界が明確でなく経年比較が難しい状態でした。","after":"Scope2の算定基準と前提を明文化し、限定的な範囲から第三者保証の検討を始め、記載の一貫性を高めました。","result":"ESG評価項目への対応度が整理され、開示の信頼性に関する説明がしやすくなったとされます。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"開示着手期の非上場大企業・上場準備企業","before":"エネルギーコストは社内管理にとどまり、対外的な統合報告・気候開示の枠組みは未整備でした。","after":"まず公開可能なエネルギー実績とKPI候補を棚卸しし、価値創造ストーリーにおける位置づけを定義する着手段階に入りました。","result":"将来の制度対応や投資家・取引先との対話に向けた基盤づくりが進んだとされます。数値は目安であり、実数値は契約条件・使用実態により異なります。"}];
const dataNotes = [{"label":"出典の範囲","detail":"本記事の制度・実務に関する整理は、TCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、各社統合報告書の公開事例から整理(2025年10月時点)しています。制度は今後の改定や適用範囲の変更がありうるため、最新の一次情報を確認することを前提とします。"},{"label":"数値の扱い","detail":"電気代やScope2に関する数値は、公開された制度値・公的統計・公開事例のレンジに限り言及し、推測単価や憶測の変動率は記載していません。財務影響に触れる場合も代表シナリオ・目安として示し、実数値は契約条件・使用実態により異なる旨を併記しています。実額の断定は行いません。"},{"label":"Scope2の算定前提","detail":"Scope2にはGHGプロトコルのロケーション基準とマーケット基準があり、用いる排出係数や電気の調達方法で数値が変わります。統合報告書では算定境界・基準年・前提を明示することが信頼性の前提になります。係数は公開された制度値・実績に基づくものとし、社内推計を断定的に提示しない姿勢が重要です。"},{"label":"比較可能性の限界","detail":"売上高電気代比率やエネルギー原単位は、業種・事業構成・算定方法の違いにより企業間の単純比較が困難です。記載では定義と前提を注記し、自社の経年推移を中心に語ることが適切です。他社との比較を示す場合も、前提の差を明示し、優劣評価ではなく傾向の把握として扱う中立的な記述に留めます。"}];
const governance = [{"label":"取締役会への報告と監督","detail":"エネルギーコスト・気候リスクの財務影響と開示方針は、取締役会の監督事項として位置づけることが望まれます。ISSB/IFRS S2でもガバナンスは主要な開示要素です。統合報告書の記載と取締役会の議論を連動させ、KPIの進捗や対話で得た論点を定期的に報告する運用が、開示の実効性と信頼性を支えます。"},{"label":"部門横断のデータガバナンス","detail":"電気代は経理、Scope2はサステナビリティ、調達条件は購買、対外説明はIRが扱うため、数値と前提が分散しがちです。CFOが旗振り役となり、算定基準・基準年・更新タイミングを共通化することで、統合報告書・有価証券報告書・IR資料の整合が保たれます。責任の所在を明確にし、変更管理の記録を残すことが重要です。"},{"label":"KPIの設計と経年管理","detail":"売上高電気代比率やScope2原単位などのKPIは、定義を継続させ経年で追えるようにします。目標を掲げる場合は基準年・対象範囲・前提を明示し、達成度を統合報告書で説明します。短期の数値の振れに過剰反応せず、構造的な傾向を語ることが投資家の理解につながります。目標値は自社の合意に基づき設定します。"},{"label":"開示の信頼性と保証","detail":"非財務情報の信頼性向上のため、Scope2などについて第三者保証を限定的範囲から導入する企業があります。保証の有無や範囲を統合報告書で明示すると、記載の確からしさに関する説明がしやすくなります。保証は段階的に拡充する考え方が実務的で、内部統制とデータ収集プロセスの整備が前提になります。"}];
const viewpoints = [{"label":"コストではなく価値とリスクの両面で語る","detail":"電気代を販管費の一項目として説明するだけでなく、調達戦略・気候移行・事業競争力との関係で語ると、価値創造ストーリーの一部として投資家に伝わります。コスト削減の努力と、価格変動・カーボンプライシングへの備えを併せて示すことで、経営の打ち手の合理性が理解されやすくなります。"},{"label":"感応度の説明が業績予見性を高める","detail":"電力価格や燃料費の変動が利益にどう波及するかという感応度を代表シナリオで示すと、業績の説明力が高まります。実額の断定は避けつつ、方向感とリスク管理方針を示すことが、機関投資家の予見性向上に寄与します。推測値ではなく公開情報・代表シナリオに基づく目安として提示する姿勢が中立性と両立します。"},{"label":"ESG評価への向き合い方","detail":"ESG評価機関の評価ロジックは各機関で異なるため、評価対策を目的化せず、実態に即した開示を基本とすることが健全です。エネルギー・気候の開示が体系化されているかは評価項目に含まれることがあり、結果として資本コストの議論につながる可能性があります。評価は参考情報として位置づけ、過度な最適化を避けます。"},{"label":"一貫性のある複数媒体運用","detail":"統合報告書、有価証券報告書のサステナビリティ記載、IR資料、CDP回答などで数値・前提が食い違うと、信頼性を損ないます。媒体横断で算定境界と前提を揃え、メッセージの一貫性を保つことが対話の質を高めます。CFOが全体を俯瞰し、財務と非財務の接続点を管理する役割を担うことが効果的です。"},{"label":"対話を翌年の改善につなげる","detail":"投資家・評価機関からの質問や指摘は、開示改善の貴重な情報源です。エンゲージメントで頻出する論点を記録し、翌年の統合報告書の記載に反映する改善ループを回すことで、開示は徐々に洗練されます。本情報は一般的な情報整理であり、投資判断や会計監査の助言ではない点に留意してください。"}];
const cautions = [{"label":"TCFDは現存する別組織ではない","detail":"TCFDは2023年に解散し、開示の枠組みはISSB・IFRS S2へ引き継がれました。統合報告書で気候開示に触れる際は、現行の制度であるISSB/IFRS S2やSSBJの動向を正確に参照することが重要です。過去の枠組みの名称を現行制度と混同しないよう、制度の現状を正しく記述する必要があります。"},{"label":"数値の精緻化が目的化するリスク","detail":"KPIや財務影響の数値を細かく示すこと自体が目的化すると、前提の不確実性が見えにくくなります。電気代の財務影響は契約条件・使用実態・市況に左右されるため、確度に応じた定量・定性の使い分けと、目安である旨の併記が誠実な開示につながります。実額の断定は避けるべきです。"},{"label":"比較可能性を過信しない","detail":"売上高電気代比率やエネルギー原単位は業種・事業構成で大きく異なり、他社との単純比較は誤解を招きます。自社の経年推移を中心に語り、比較を示す場合は前提の差を明示します。優劣を断じる記述ではなく、傾向の把握として扱う中立的な姿勢が、社団法人の中立性とも整合します。"},{"label":"電力会社・契約形態の評価は行わない","detail":"統合報告書でエネルギー調達に触れる場合も、特定の電力会社や契約形態の優劣を評価することは避けるべきです。調達方針は自社の経営判断であり、開示はその合理性と方向感を説明する場です。本情報も特定の電力会社・契約形態を推奨するものではなく、一般的な情報整理にとどまります。"},{"label":"保証の範囲を誇張しない","detail":"第三者保証は対象範囲や保証水準が限定的な場合があります。保証を受けた事実だけを強調すると、範囲外の数値まで保証されているかのような誤解を招きます。統合報告書では保証の対象・水準・範囲を正確に明示し、信頼性の説明を過不足なく行うことが、投資家との健全な対話につながります。"}];
const checklist = ["エネルギー・電気代のマテリアリティを業種特性から確認したか","価値創造ストーリーでの電気代の位置づけを定義したか","ISSB/IFRS S2・SSBJの論点との対応を整理したか","Scope2の算定基準と境界を明文化したか","売上高電気代比率などKPIの定義を継続できる形にしたか","財務影響を定量・定性で適切に使い分けたか","代表シナリオに目安・前提注記を併記したか","経理・調達・サステナ・IRの数値を突合したか","統合報告書とIR資料・有報の整合を確認したか","第三者保証の範囲と水準を正確に明示したか","取締役会への報告ループを設計したか","特定の電力会社・契約形態を評価していないか確認したか"];
const simulatorCtaBullets = ["料金上昇・高騰リスクのスコアを代表シナリオで把握できる","感応度の方向感を統合報告書の記載検討に活用できる","公開情報に基づく目安で、実数値は使用実態により異なる","特定の電力会社・契約形態を推奨しない中立的な情報整理"];
const faqItems = [{"question":"統合報告書のどこに電気代・エネルギーを記載すべきですか。","answer":"決まった定位置はありませんが、価値創造ストーリーの中で、戦略(気候リスク・調達)と指標と目標(Scope2やエネルギー関連KPI)に関連づけて記述する企業が多く見られます。コスト管理の側面とリスク・機会の側面の両面で語ると、財務と非財務の接続が伝わりやすくなります。記載のマテリアリティは業種特性とコスト構造から判断します。本情報は一般的な整理であり、特定の様式を推奨するものではありません。"},{"question":"TCFDとISSBの関係はどう理解すればよいですか。","answer":"TCFDは2023年に解散し、気候関連開示の枠組みはISSBのIFRS S2へ実質的に引き継がれました。TCFDの4本柱はIFRS S2に取り込まれており、日本ではSSBJが基準開発を進めています。統合報告書で気候開示に触れる際は、現行制度であるISSB/IFRS S2やSSBJの動向を正確に参照することが重要です。過去の名称を現行制度と混同しないよう、制度の現状を正しく記述してください。"},{"question":"電気代の財務影響はどの程度まで定量開示すべきですか。","answer":"確度の高い部分を定量で、不確実性の大きい部分を定性で示す使い分けが実務的です。電気代の影響は契約条件・使用実態・市況に左右されるため、代表シナリオに基づく感応度の方向感を示しつつ、実数値は使用実態により異なる旨を併記する方法があります。推測単価や憶測の変動率は避け、公開情報・代表シナリオに基づく目安として提示することが誠実な開示につながります。"},{"question":"どのようなKPIを設定すればよいですか。","answer":"売上高電気代比率、Scope2原単位、エネルギー使用量などが用いられます。重要なのは定義・算定境界・基準年を明文化し、経年で追えるようにすることです。目標を掲げる場合は対象範囲と前提を明示し、達成度を統合報告書で説明します。KPIは自社の事業特性に応じて選び、業種・事業構成が異なる他社との単純比較は避けることが適切です。"},{"question":"記載した数値や事例は正確ですか。","answer":"本記事の制度・実務の整理はTCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、各社統合報告書の公開事例から整理(2025年10月時点)したものです。数値は公開された制度値・公的統計・公開事例のレンジに限り、推測単価や憶測の変動率は記載していません。事例は規模・状況別の代表シナリオであり、実数値は契約条件・使用実態により異なります。最新の一次情報の確認を前提としてください。"},{"question":"特定の電力会社を推奨しているのですか。","answer":"いいえ。本記事は中立・非営利の社団法人の立場から、公開情報・制度に基づく一般的な情報整理を行うものであり、特定の電力会社・契約形態を推奨するものではありません。統合報告書でエネルギー調達に触れる場合も、優劣評価ではなく自社の調達方針の合理性と方向感を説明する場として扱うことが適切です。投資判断や会計監査の助言を行うものでもありません。"},{"question":"Scope2の数値が媒体ごとに異なるのはなぜですか。","answer":"Scope2にはGHGプロトコルのロケーション基準とマーケット基準があり、用いる排出係数や電気の調達方法で数値が変わります。また算定境界や基準年の取り方も媒体間で差が出る要因です。統合報告書では算定基準と前提を明示し、有価証券報告書・IR資料・CDP回答との整合を保つことが信頼性につながります。係数は公開された制度値・実績に基づくものを用います。"},{"question":"開示の信頼性を高めるにはどうすればよいですか。","answer":"算定基準・前提の明文化、部門横断のデータガバナンス、そして第三者保証の段階的導入が有効とされます。保証は対象範囲や水準が限定的な場合があるため、範囲を正確に明示することが重要です。取締役会への報告ループを設け、投資家対話で得た論点を翌年の記載改善につなげることで、開示は徐々に洗練されます。内部統制とデータ収集プロセスの整備が前提になります。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"金融庁（サステナビリティ情報の開示・有価証券報告書）","url":"https://www.fsa.go.jp/"},{"name":"IFRS財団 ISSB（IFRS S1/S2 サステナビリティ開示基準）","url":"https://www.ifrs.org/"},{"name":"経済産業省（GX・カーボンニュートラル・エネルギー政策）","url":"https://www.meti.go.jp/"},{"name":"環境省（温室効果ガス排出量算定・SHK制度・GHGプロトコル）","url":"https://www.env.go.jp/"},{"name":"日本取引所グループ JPX（コーポレートガバナンス・開示）","url":"https://www.jpx.co.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/cfo-executive","title":"CFO・経営層向け電気代戦略（カテゴリ）","description":"CFO向け記事ハブ。"},{"href":"/articles/for-executives","title":"経営層・CFO向け（一覧）","description":"経営層向け記事のハブ。"},{"href":"/cfo-electricity-cost-basics","title":"CFOが知るべき電気代の基礎","description":"P/L上の位置づけと経営判断の起点。"},{"href":"/executive-board-report-template","title":"取締役会報告テンプレート","description":"電気代リスクの取締役会報告様式。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/ir-disclosure-electricity-risk","title":"IR開示における電気代リスク","description":"有報・株主総会対応。"},{"href":"/executive-esg-electricity-disclosure","title":"経営層のESG電気代開示","description":"ESG開示の論点。"},{"href":"/executive-board-reporting-items","title":"取締役会報告項目（経営層）","description":"報告項目の整理。"},{"href":"/scope2-reduction-cfo-responsibility","title":"Scope2削減とCFOの責任","description":"開示するKPIの基礎。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"再エネ目標の開示。"},{"href":"/cfo-tcfd-issb-electricity-disclosure","title":"TCFD/ISSB対応の電気代開示","description":"算定と開示(姉妹記事)。"},{"href":"/cfo-decarbonization-investor-narrative","title":"投資家向け脱炭素シナリオ説明","description":"対話戦略(姉妹記事)。"},{"href":"/executive-peer-cost-benchmarking","title":"同業他社ベンチマーク（経営層）","description":"比較開示の観点。"},{"href":"/business-electricity-price-trend-10-years","title":"法人電気料金の10年推移","description":"開示の前提市況。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CfoIntegratedReportElectricityDisclosurePage() {
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
