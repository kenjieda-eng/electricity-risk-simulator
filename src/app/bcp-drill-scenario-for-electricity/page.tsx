import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "BCP訓練シナリオ（電力編）完全ガイド｜社内演習の設計から評価までの実務手順";
const pageDescription =
  "電力停止を想定したBCP訓練シナリオの設計と演習実施手順を実務的に整理。3パターンの訓練シナリオ（短時間停電・需給ひっ迫・長時間停電）、停電時間別の対応マニュアル、電力BCP投資の費用対効果表、規模別Before/After事例、12項目チェックリストまで体系的に解説します。";
const pageUrl = "https://simulator.eic-jp.org/bcp-drill-scenario-for-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "BCP訓練 電力",
    "停電訓練 シナリオ",
    "事業継続計画 演習",
    "需給ひっ迫 BCP",
    "非常用電源 訓練",
    "法人電力BCP",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/energy-bcp", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-bcp"],
  },
};

const drillSignificance = [
  {
    label: "BCP計画は『作って終わり』では機能しない",
    detail:
      "事業継続ガイドライン（内閣府）でも、計画策定後の訓練・教育・見直しの『PDCA運用』が必須要素として明記されています。計画書を整備しても、訓練で手順を体得していなければ、実災害時の初動が30〜60分単位で遅延し、業務継続率が大幅に低下します。",
  },
  {
    label: "電力BCPは『動作確認』が特に重要",
    detail:
      "電力BCPは非常用電源・蓄電池・UPS・自家発・データバックアップなど機器運用に関わる手順が多数。機器の起動時間・燃料消費・操作手順・切替判断は、平常時の訓練でしか検証できません。年1回以上の実機動作訓練が国際標準（ISO 22301）でも推奨されます。",
  },
  {
    label: "需給ひっ迫DR・節電要請への対応も訓練対象",
    detail:
      "2022年・2023年の需給ひっ迫警報発令を受け、需要家側のDR（デマンドレスポンス）対応が新たな訓練テーマに加わりました。警報発令から削減実行までの社内決裁・実施手順を訓練で固めることで、実報酬獲得率・確実性が向上します。",
  },
  {
    label: "業種別の訓練ニーズの差",
    detail:
      "病院・介護施設・データセンターは『停電許容秒数』が短く、年4回以上の実機訓練が標準。製造業・物流業は『停電時の生産ライン安全停止』『冷凍冷蔵設備の温度維持』が重点。オフィスビルは『従業員安否確認』『データバックアップ』『リモートワーク切替』が重点。",
  },
  {
    label: "訓練の3層運用",
    detail:
      "①月次：チェックリストによる機器稼働確認（10〜30分）。②四半期：部門別机上訓練（半日〜1日）。③年次：全社実機動作訓練（半日〜2日）。の3層運用が標準的。実施頻度・対象範囲を経営層と合意しておくことが重要です。",
  },
];

const drillScenarios = [
  {
    type: "シナリオ1: 短時間停電（1〜3時間）",
    trigger: "夕方ピーク時に区域内事故停電",
    target: "全業種共通",
    steps:
      "①停電通知受領（送配電事業者から）／②自動切替UPSの動作確認／③非常用電源（30分〜2時間タイプ）起動／④業務継続範囲の確認（重要業務のみ継続）／⑤社内通知（社内ポータル・メール・スマホアプリ）／⑥復旧後の業務再開手順／⑦事後レビュー。",
    checkpoint:
      "UPS切替時間（5〜10秒以内）／非常用電源起動時間（10〜60秒）／業務継続範囲の優先順位／復旧後の事務処理連動性。",
  },
  {
    type: "シナリオ2: 需給ひっ迫警報・節電要請",
    trigger: "気象異常・電源トラブルによる需給ひっ迫警報発令",
    target: "DR契約事業者・大口需要家",
    steps:
      "①OCCTO/送配電事業者から警報通知受領／②社内DR対応本部設置／③節電レベル判定（軽度・中度・重度）／④削減対象設備の選定（空調・照明・生産ライン等）／⑤実削減実行＋確認／⑥顧客・取引先への通知（営業時間短縮等）／⑦警報解除後の通常運用復帰／⑧DR報酬請求準備。",
    checkpoint:
      "警報受領から削減実行までの所要時間（目標30分以内）／削減kW達成率（契約値の90%以上）／顧客対応の品質／DR報酬請求書類の正確性。",
  },
  {
    type: "シナリオ3: 長時間停電（24〜72時間）",
    trigger: "大規模災害（地震・台風・大雪）による広域停電",
    target: "BCP重要拠点・サプライチェーン",
    steps:
      "①全面BCP起動宣言／②従業員安否確認（72時間以内目標）／③重要設備の安全停止（製造業）・データバックアップ（IT業）／④非常用発電機の長時間運用（燃料補給含む）／⑤拠点間フェイルオーバー（生産・サーバ等）／⑥顧客・サプライチェーン・行政への通知／⑦復旧後の業務再開と被害評価／⑧経営層への報告と再発防止策。",
    checkpoint:
      "安否確認完了率（24時間目標90%）／非常用発電機の連続運転時間（72時間以上）／燃料補給の供給ルート確保／拠点間フェイルオーバーの所要時間（目標6時間以内）／顧客通知の網羅性。",
  },
];

const blackoutResponseManual = [
  {
    duration: "停電30分以内",
    business: "業務継続",
    facility: "UPS稼働（自動）／非常照明点灯／一部の照明・コンセント停止",
    action: "①社内通知（緊急アナウンス）／②エレベーター閉込確認／③冷暖房停止／④PC・サーバはUPS稼働で保持／⑤窓口顧客対応継続",
    risk: "業務影響は限定的。UPS容量超えに注意。",
  },
  {
    duration: "停電30分〜2時間",
    business: "重要業務のみ継続",
    facility: "UPS容量切れ／非常用電源（小型）稼働／重要設備のみ給電",
    action: "①非常用電源起動／②非重要業務の停止／③営業時間短縮の判断／④顧客・取引先への第一報／⑤帰宅判断（夕方の場合）",
    risk: "UPSと非常用電源の切替タイミング遅延でデータロス・設備故障リスク。",
  },
  {
    duration: "停電2〜8時間",
    business: "BCP起動・縮小運用",
    facility: "中型非常用発電機稼働／重要拠点のみ給電／冷凍冷蔵対応",
    action: "①BCP本部設置／②全従業員に状況連絡／③本日業務終了の判断／④冷凍冷蔵食品・医薬品の温度監視／⑤翌日対応の準備",
    risk: "燃料切れ・発電機トラブルが業務継続を左右。",
  },
  {
    duration: "停電8〜24時間",
    business: "BCP全面起動・縮退運用",
    facility: "大型非常用発電機（長時間タイプ）／燃料補給体制／拠点フェイルオーバー",
    action: "①従業員安否確認／②サプライチェーン・取引先への詳細連絡／③拠点間フェイルオーバー実行／④メディア・SNSでの情報発信／⑤帰宅困難者対応",
    risk: "燃料調達ルートの確保が最重要課題。",
  },
  {
    duration: "停電24〜72時間",
    business: "全面BCP・拠点切替",
    facility: "EV・V2H/V2B活用／自家発長期運用／DRC（災害復旧センター）切替",
    action: "①全業務の代替拠点切替／②被災状況評価／③復旧計画策定／④顧客・株主・行政への正式報告／⑤従業員ローテーション運用",
    risk: "長期化での経営影響・契約不履行リスク。",
  },
  {
    duration: "停電72時間以上",
    business: "サバイバル運用",
    facility: "完全代替拠点・在宅勤務集約・サテライト運用",
    action: "①代替拠点での恒久運用検討／②被害補償・保険対応／③復旧優先順位の再策定／④経営層による戦略再評価",
    risk: "事業継続そのものが問われる局面。事前のBCP投資が結果を左右。",
  },
];

const bcpInvestmentRoi = [
  {
    item: "UPS（無停電電源装置・10〜100kVA）",
    cost: "100〜800万円",
    duration: "10〜60分",
    target: "全業種・重要設備（サーバ・データ処理）",
    roi: "事業継続による損失回避効果が中心。年間停電想定損失÷投資額で5〜15年回収。BCP評価では『必須投資』に分類。",
  },
  {
    item: "中型非常用発電機（ディーゼル・50〜200kVA）",
    cost: "500〜2,500万円",
    duration: "8〜24時間（燃料タンク次第）",
    target: "病院・介護・物流・冷凍冷蔵業",
    roi: "停電損失回避＋平常時のピークカット併用で5〜10年回収。SII補助1/2活用で実質3〜6年。",
  },
  {
    item: "大型非常用発電機（ガスタービン・200kVA超）",
    cost: "2,000〜1億円超",
    duration: "72時間以上（連続運転）",
    target: "DC・大型工場・サプライチェーン拠点",
    roi: "BCP重要度の高い拠点のみ。投資回収は10〜20年。BCP評価・経営戦略上の優先投資。",
  },
  {
    item: "産業用蓄電池（50〜500kWh）",
    cost: "800〜5,000万円",
    duration: "2〜10時間（容量次第）",
    target: "オフィス・商業施設・小規模工場",
    roi: "BCP＋平常時のピークカット＋FIT後の自家消費太陽光連携の3用途で投資回収5〜8年。SII補助1/2活用で2.5〜4年。",
  },
  {
    item: "V2H/V2B（EV併用蓄電池）",
    cost: "100〜200万円（V2H機器）＋EV車両",
    duration: "1〜3日（EV5台体制）",
    target: "中小事業者・社用EV保有企業",
    roi: "EV購入・V2H機器・各種補助金で初期負担半減。BCP兼用で5〜8年回収。",
  },
  {
    item: "自家消費太陽光＋蓄電池",
    cost: "1,000〜5,000万円（屋根面積次第）",
    duration: "日中無制限＋蓄電池容量分",
    target: "工場・倉庫・商業施設",
    roi: "電気代削減＋BCP＋脱炭素の3用途で投資回収3〜6年（SII・PPA補助活用時）。",
  },
];

const beforeAfterCases = [
  {
    title: "事例A: 中規模製造業（高圧500kW・従業員200名・年間電気代1.6億円）",
    before:
      "Before: BCP計画書はあるが、訓練は年1回の机上訓練のみ。2023年夏の需給ひっ迫警報時、削減実行までに3時間を要し、DR報酬請求漏れが発生。冷凍冷蔵設備への自動切替機構もなく、月1回の停電時に冷凍庫の温度監視が手動。",
    after:
      "After: 年4回（四半期）の実機訓練を導入／DR本部設置・実行マニュアル整備／冷凍庫の温度監視自動化（IoT導入投資180万円）／需給ひっ迫警報受領から削減実行までを30分以内に短縮／投資回収はDR報酬獲得＋電気代節減で2.5年。",
    result:
      "Result: 年間DR報酬獲得 320万円（前年比＋280万円）／停電時の業務継続率 80%→95%／訓練を契機にBCP意識が全社浸透／監査評価でも『気候変動対応力』スコア改善。",
  },
  {
    title: "事例B: 中堅IT企業・データセンター運営（特高2,500kW・年間電気代7.6億円）",
    before:
      "Before: DC内サーバ稼働率99.99%要求。UPS・非常用発電機は導入済だが、長時間停電（24時間超）シナリオの実機訓練は未実施。2022年の落雷停電時、燃料補給ルート混乱で発電機が18時間で停止しサーバダウン。賠償金1,200万円発生。",
    after:
      "After: 年2回の長時間停電実機訓練／燃料補給契約を2社並列化（メイン1社・バックアップ1社）／拠点間フェイルオーバーの実機検証（東京DC→大阪DC）／訓練評価シートと改善PDCAを定例化／非常用発電機を72時間連続運転タイプに更新（投資6,500万円）。",
    result:
      "Result: 賠償金リスク 1,200万円/年 → 200万円/年（▲83%）／顧客向けSLA達成率 99.95%→99.99%（改善）／新規DC案件の獲得増（年間2.4億円増収）／投資回収 2.8年。",
  },
  {
    title: "事例C: 病院・介護施設グループ（高圧計800kW・年間電気代2.4億円）",
    before:
      "Before: 病院本体は非常用発電機完備、介護施設群は導入未済。需給ひっ迫警報時の対応マニュアルなし。2022年7月の警報時、空調停止判断の遅れで入居者の熱中症リスクが顕在化。手動運用で疲弊。",
    after:
      "After: 介護施設5拠点に中型非常用発電機（各100kVA、計2,500万円、SII補助1/2活用）／DR対応マニュアル整備＋年4回訓練／猛暑日の空調維持優先ルール明文化／投資回収はBCP＋平常時電気代削減で6.5年。",
    result:
      "Result: 入居者・患者安全リスク 大幅低減（数値化困難だが地域信頼度向上）／停電時の業務継続率 60%→90%／施設別の電気代も▲8%（平常時のピークカット効果）。",
  },
];

const trainingExecutionSteps = [
  {
    phase: "準備フェーズ（訓練2週間〜2ヶ月前）",
    detail:
      "①訓練目的・シナリオの確定／②対象部門・関係者の周知／③訓練時間・場所の調整／④評価シート・記録票の準備／⑤ファシリテーター・観察員の任命／⑥外部支援者（コンサル等）の参画判断／⑦実機を使う場合の安全確認とリハーサル。",
  },
  {
    phase: "実施フェーズ（訓練当日）",
    detail:
      "①開始宣言＋シナリオ概要説明／②シナリオ投入（停電シミュレーション・警報通知模擬等）／③各部門のアクション実行／④ファシリテーターによる追加情報投入（リアル感の演出）／⑤観察員によるタイムライン記録／⑥終了宣言＋速報レビュー。",
  },
  {
    phase: "振り返りフェーズ（訓練1週間後まで）",
    detail:
      "①評価シート集約／②KPT（Keep/Problem/Try）分析／③改善項目リスト化／④BCP文書への反映／⑤改善実施スケジュール策定／⑥次回訓練への申送り／⑦経営層への報告。",
  },
  {
    phase: "PDCAサイクル（年間運用）",
    detail:
      "Plan: 年間訓練計画策定（月次・四半期・年次）／Do: 計画通りの訓練実施／Check: 訓練結果評価・KPI測定／Act: BCP計画と訓練計画の改訂。1サイクル12ヶ月で運用し、3年で訓練成熟度の大幅向上を狙う。",
  },
];

const checklistItems = [
  "電力BCP計画書が最新版で存在し、関係者にアクセス可能か",
  "年間訓練計画（月次チェック・四半期机上・年次実機）を策定したか",
  "訓練シナリオ3パターン（短時間停電・需給ひっ迫・長時間停電）を準備したか",
  "停電時間別の対応マニュアル（30分・2時間・8時間・24時間・72時間）が文書化されているか",
  "UPS・非常用発電機・蓄電池の月次稼働確認チェックリストが運用されているか",
  "需給ひっ迫警報受領から削減実行までのフロー（30分以内目標）が文書化されているか",
  "DR対応本部の設置・指揮系統・実施手順が明確か",
  "停電時の顧客・取引先・サプライチェーン通知のテンプレートが準備されているか",
  "従業員安否確認システム（メール・スマホアプリ等）が整備され訓練済か",
  "拠点間フェイルオーバーの実機検証が年1回以上実施されているか",
  "燃料補給契約を複数社並列化（メイン＋バックアップ）しているか",
  "訓練結果の評価・KPI（業務継続率・削減kW達成率等）を経営層に報告する体制があるか",
];

const faqItems = [
  {
    question: "BCP訓練は年に何回実施すべきですか？",
    answer:
      "業種・規模により最適頻度は異なりますが、標準的には『月次のチェックリスト確認＋四半期の机上訓練＋年次の全社実機訓練』の3層運用が推奨されます。病院・介護・データセンター・サプライチェーン重要拠点では、年4回以上の実機訓練が国際標準（ISO 22301）でも推奨されています。",
  },
  {
    question: "BCP訓練シナリオはどう選定すべきですか？",
    answer:
      "自社のBCP重要リスクを分析し、優先度の高い3〜5シナリオに絞ることが現実的です。本ページで提示した『短時間停電』『需給ひっ迫警報』『長時間停電』の3パターンは多くの業種に共通する基本セット。これに業種固有リスク（病院：診療継続／製造：生産ライン安全停止／DC：サーバ可用性）を追加する設計が標準です。",
  },
  {
    question: "需給ひっ迫警報への訓練対応はどう設計しますか？",
    answer:
      "①警報通知の受領経路（送配電事業者・OCCTO・気象警報連動）の確認、②社内DR本部の設置と指揮系統明確化、③節電レベル別の削減対象設備リスト、④30分以内の削減実行を目標とした実機訓練、⑤DR報酬請求書類の正確化、の5要素が中心です。2022〜2023年の警報発令を経験した事業者の事後分析を踏まえた訓練設計が有効です。",
  },
  {
    question: "BCP訓練後の評価・改善はどう進めますか？",
    answer:
      "訓練終了から1週間以内にKPT（Keep/Problem/Try）分析を実施し、改善項目をBCP文書に反映します。評価KPIとして①業務継続率、②削減kW達成率、③復旧時間、④通知所要時間、⑤従業員安否確認完了率の5項目を定量測定することが有効。3年スパンで訓練成熟度の大幅向上を目指します。",
  },
  {
    question: "BCP訓練に外部コンサルタントを使うメリットはありますか？",
    answer:
      "外部コンサル参画には①シナリオ設計の客観性向上、②他社事例を踏まえた改善提案、③ファシリテーション品質、④評価視点の中立性、の4つのメリットがあります。一方でコストは1回あたり50〜300万円が目安で、年次の全社実機訓練に絞って活用することが現実的です。",
  },
  {
    question: "BCP訓練の費用対効果はどう測りますか？",
    answer:
      "訓練費用（人件費・外部費用・実機費用）と、訓練効果（停電時の業務継続時間向上・DR報酬獲得増・顧客SLA達成率向上）を比較します。事例Bのデータセンターケースでは、訓練＋設備更新で年間賠償金リスクが1,200万円→200万円に削減（▲83%）。直接効果＋顧客信頼度向上による新規受注効果も含めて評価します。",
  },
  {
    question: "BCP投資（非常用電源等）はどの規模が適切ですか？",
    answer:
      "BCP重要度マトリクスで分類し、①最重要拠点：長時間（72時間）対応の大型発電機＋UPS＋蓄電池の3層構成、②準重要拠点：中型発電機＋UPSの2層構成、③一般拠点：UPSのみ、と段階設計するのが標準です。投資総額は重要度・年間電気代の10〜30%が目安。SII補助1/2活用で実質負担は半減します。",
  },
  {
    question: "BCP訓練に活用できる補助金・支援制度はありますか？",
    answer:
      "BCP訓練自体への直接補助は限定的ですが、関連設備（非常用発電機・蓄電池・UPS・自家消費太陽光）導入には①SII省エネ補助金（中小1/2・大企業1/3）、②中小企業強靱化計画認定による税制優遇、③自治体BCP補助、④需要家主導型PPA補助、等が活用可能。訓練設計と並行して補助金活用を計画することで投資効率が向上します。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "内閣府 防災情報（事業継続ガイドライン）", url: "https://www.bousai.go.jp/" },
  { name: "中小企業庁 BCP策定運用指針", url: "https://www.chusho.meti.go.jp/" },
  { name: "電力広域的運営推進機関（OCCTO）需給ひっ迫警報", url: "https://www.occto.or.jp/" },
  { name: "資源エネルギー庁 電力BCP", url: "https://www.enecho.meti.go.jp/" },
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        dateModified="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "電力BCP・災害対策", url: "https://simulator.eic-jp.org/articles/energy-bcp" },
          { name: "BCP訓練シナリオ（電力編）" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/energy-bcp" className="underline-offset-2 hover:underline">電力BCP・災害対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">BCP訓練シナリオ（電力編）</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            BCP訓練シナリオ（電力編）完全ガイド｜社内演習の設計から評価まで
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電力BCPは『計画を作っただけ』では機能しません。定期的な訓練（演習）で手順を体得し、PDCAで改善し続けることで、実災害時の業務継続率を大幅に高められます。本ページでは、3パターンの訓練シナリオ（短時間停電・需給ひっ迫警報・長時間停電）、停電時間別の対応マニュアル（30分〜72時間）、電力BCP投資の費用対効果表、3規模別Before/After事例、12項目チェックリストまでを実務担当者向けに整理します。
          </p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>電力BCP訓練の3層運用（月次・四半期・年次）の設計方法</li>
              <li>3パターンの訓練シナリオ（短時間停電・需給ひっ迫・長時間停電）の具体例</li>
              <li>停電時間別の対応マニュアル（30分・2時間・8時間・24時間・72時間別）</li>
              <li>電力BCP投資の費用対効果表（UPS・非常用発電機・蓄電池・V2H・太陽光）</li>
              <li>製造業・IT/DC・病院介護の3規模別Before/After事例</li>
              <li>訓練実施4フェーズ手順と12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力BCP訓練の意義と運用設計</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力BCP訓練は『計画書の整備』『機器導入』だけでは果たせない、実災害時の業務継続率を決定づける重要要素です。月次・四半期・年次の3層運用が国際標準（ISO 22301）でも推奨されています。
            </p>
            <div className="mt-4 space-y-3">
              {drillSignificance.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力BCPの全体像は{" "}
              <Link href="/energy-bcp-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人の電力BCP概論
              </Link>
              、非常用電源の選定は{" "}
              <Link href="/emergency-power-source-options" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                非常用電源の選び方
              </Link>
              で関連記事を確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP訓練シナリオ3パターン（実務テンプレート）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実務的に最も使われる3パターンの訓練シナリオを、トリガー・対象業種・実施ステップ・チェックポイントの4軸で整理します。自社の優先リスクに合わせてカスタマイズしてください。
            </p>
            <div className="mt-4 space-y-3">
              {drillScenarios.map((item) => (
                <div key={item.type} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.type}</p>
                  <p className="mt-1 text-xs text-slate-500"><span className="font-semibold text-slate-700">トリガー：</span>{item.trigger}</p>
                  <p className="text-xs text-slate-500"><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-700">実施ステップ：</span>{item.steps}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-700">チェックポイント：</span>{item.checkpoint}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">想定停電時間別の対応マニュアル表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              停電時間（30分〜72時間以上）別に、業務継続レベル・設備運用・実施アクション・主要リスクを整理した実務マニュアル表です。訓練シナリオ設計と現場対応の両方の基礎資料として活用してください。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">停電時間</th>
                    <th className="border border-slate-200 px-3 py-2">業務継続</th>
                    <th className="border border-slate-200 px-3 py-2">設備運用</th>
                    <th className="border border-slate-200 px-3 py-2">主要アクション</th>
                    <th className="border border-slate-200 px-3 py-2">リスク</th>
                  </tr>
                </thead>
                <tbody>
                  {blackoutResponseManual.map((row) => (
                    <tr key={row.duration} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.duration}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.business}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.facility}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.action}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-500 text-xs">{row.risk}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 業界平均・代表シナリオに基づく整理。出典: 内閣府『事業継続ガイドライン』、業界団体公開資料から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電力BCP投資の費用対効果表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BCP投資6種別（UPS・中型発電機・大型発電機・蓄電池・V2H・自家消費太陽光）の投資額・運用時間・対象業種・ROIの目安を整理しました。優先順位付けの基礎資料としてご活用ください。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">投資項目</th>
                    <th className="border border-slate-200 px-3 py-2">投資額目安</th>
                    <th className="border border-slate-200 px-3 py-2">運用時間</th>
                    <th className="border border-slate-200 px-3 py-2">主対象業種</th>
                    <th className="border border-slate-200 px-3 py-2">投資回収目安</th>
                  </tr>
                </thead>
                <tbody>
                  {bcpInvestmentRoi.map((row) => (
                    <tr key={row.item} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.item}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.cost}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.duration}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.target}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-500 text-xs">{row.roi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 代表的なシナリオに基づく目安レンジ。実際の単価は規模・地域・機器仕様で変動。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              非常用電源は{" "}
              <Link href="/emergency-power-source-options" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                非常用電源の選び方
              </Link>
              、自家発電は{" "}
              <Link href="/bcp-private-power-generation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                BCP兼用の自家発電
              </Link>
              、V2Hは{" "}
              <Link href="/v2h-v2b-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                V2H/V2Bの仕組み
              </Link>
              で深掘り解説。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3規模別Before/After事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中規模製造業／中堅IT・DC運営／病院介護グループの3パターンで、BCP訓練と設備投資の組合せ効果をBefore/Afterで整理します。代表的なシナリオに基づく試算で、自社条件への適用は個別検証が必要です。
            </p>
            <div className="mt-4 space-y-4">
              {beforeAfterCases.map((cs) => (
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">訓練実施の4フェーズ手順</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              準備→実施→振り返り→PDCAの4フェーズで設計することで、訓練の質と継続性が確保できます。各フェーズの要点を整理しました。
            </p>
            <div className="mt-4 space-y-3">
              {trainingExecutionSteps.map((item) => (
                <div key={item.phase} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.phase}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">DR・需給ひっ迫対応の訓練ポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2022〜2023年の需給ひっ迫警報発令を経験し、DR対応が新たな訓練必須テーマとなりました。警報受領から削減実行まで30分以内を目標とし、社内DR本部の設置・実施手順・報酬請求書類の正確化が訓練ポイントです。
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
              <li>警報受領経路の明確化（送配電事業者通知、OCCTO発信、新電力経由のいずれかを事前整理）</li>
              <li>社内DR本部の指揮系統（経営層→現場部門の意思決定フロー）を明文化</li>
              <li>節電レベル別（軽度・中度・重度）の削減対象設備リスト整備</li>
              <li>削減kW測定方法とDR報酬請求書類のテンプレート化</li>
              <li>顧客・取引先への通知テンプレート整備（営業時間短縮等）</li>
              <li>年4回のDR訓練と、実警報時の振り返りを連動運用</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR全般は{" "}
              <Link href="/demand-response-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                DRは電気料金対策としてどう考えるか
              </Link>
              で深掘り解説。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BCP訓練チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年間訓練計画策定・訓練実施・改善PDCAの全フェーズで使える12項目チェックリスト。1項目でも未対応があれば、訓練の実効性が低下します。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで停電時の経済影響を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              停電時間別の業務継続率・損失額・BCP投資の費用対効果は、自社条件で大きく異なります。シミュレーターで年間電気代と上振れリスクを把握し、BCP投資の優先順位付けの基礎データとしてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約の年間電気代と上振れリスクを確認する</li>
              <li>DR契約参加時の年間報酬獲得見込を把握する</li>
              <li>BCP投資（蓄電池・自家消費太陽光）のROI試算</li>
              <li>停電時間別の業務継続シナリオ別影響を比較する</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-04-18"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/energy-bcp", title: "電力BCP・災害対策（カテゴリ）", description: "BCP関連記事ハブ。" },
              { href: "/articles/energy-equipment", title: "蓄電池・太陽光・DRを知る（カテゴリ）", description: "BCP兼用設備の解説。" },
              { href: "/articles/energy-dx", title: "エネルギーマネジメント・DX（カテゴリ）", description: "BEMS・需要見える化。" },
              { href: "/articles/ev-charging", title: "EV・充電インフラ（カテゴリ）", description: "V2H/V2B兼用BCP。" },
              { href: "/energy-bcp-overview", title: "法人の電力BCP概論", description: "電力BCPの全体像。" },
              { href: "/emergency-power-source-options", title: "非常用電源の選び方", description: "ディーゼル・ガス・蓄電池の比較。" },
              { href: "/microgrid-for-business", title: "マイクログリッドとは", description: "自立運転可能な電力システム。" },
              { href: "/bcp-private-power-generation", title: "BCP兼用の自家発電", description: "自家発電の費用対効果。" },
              { href: "/v2h-v2b-explained", title: "V2H・V2B（車両から建物への給電）", description: "EV併用の停電対策。" },
              { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "BCP＋ピークカット併用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "太陽光＋蓄電池の評価。" },
              { href: "/solar-battery-combination-benefit", title: "太陽光と蓄電池の組合せ", description: "自家消費率向上＋BCP。" },
              { href: "/demand-response-cost-benefit", title: "DRは電気料金対策としてどう考えるか", description: "DR報酬獲得の仕組み。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "BCP兼用設備の主力補助。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光の補助金", description: "BCP投資の補助金一覧。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "申請タイミング最適化。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "BCPと契約の連動。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "地域別の停電傾向把握。" },
            ]}
          />

          <ContentCta
            heading="停電時の事業継続リスクと投資効果を試算する"
            description="シミュレーターで自社の年間電気代と上振れリスクを把握し、BCP投資（非常用電源・蓄電池・自家消費太陽光）の優先順位付け基礎データを取得できます。訓練シナリオ設計の経営層向け資料にも活用可能です。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力BCP訓練設計、専門家に相談しませんか？"
            description="電力BCP訓練の設計・実施・評価には、シナリオ設計・機器選定・補助金活用・組織設計の総合的な知見が必要です。エネルギー情報センターは中立的立場で、自社規模・業種に最適な訓練計画と投資戦略の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
