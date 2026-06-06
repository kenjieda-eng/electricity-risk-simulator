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
  "自然冷媒の冷凍冷蔵設備補助金 完全ガイド｜対象・補助率・申請の進め方（環境省系・脱フロン）";
const pageDescription =
  "自然冷媒（CO2・アンモニア・空気等）の冷凍冷蔵設備導入補助の対象設備・補助率の考え方・申請フロー・併用ルール・規模別代表シナリオを整理。脱フロン（フロン排出抑制法・GWP低減）と電気代削減を両立する実務を解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自然冷媒 補助金",
    "冷凍冷蔵 補助金",
    "脱フロン 補助金",
    "CO2冷媒 アンモニア冷媒",
    "環境省 自然冷媒機器",
    "冷凍冷蔵倉庫 省エネ補助",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-natural-refrigerant-freezer",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-natural-refrigerant-freezer",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/subsidies", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/subsidies"],
  },
};

const overview = [
  {
    label: "自然冷媒の冷凍冷蔵設備補助とは",
    detail:
      "環境省系の「脱フロン・低炭素社会の早期実現のための高効率な自然冷媒機器の普及促進支援事業」は、CO2（二酸化炭素）・アンモニア・空気等を冷媒とする冷凍冷蔵設備の導入を支援する補助制度です。HFC（代替フロン）からの転換を促し、フロン排出抑制法への対応とGWP（地球温暖化係数）低減を後押しするとともに、最新の高効率機器に更新することで電気代削減も同時に狙えるのが特徴です。補助率・上限は事業区分・年度公募により変動するため、申請前に必ず各実施機関の最新公募要領をご確認ください（出典: 環境省・経済産業省/SII・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "なぜ「脱フロン」と「省エネ」を同時に進めるのか",
    detail:
      "従来の冷凍冷蔵機器はHFC等のフロン類を冷媒に使うものが多く、これらは漏えい時のGWPが大きいため温室効果ガス削減の観点で課題があります。一方、自然冷媒（CO2・アンモニア・空気等）はGWPが極めて低く、機器の高効率化と組み合わせることで脱フロンと電気代削減を一体で実現できます。補助制度はこの「脱フロン×省エネ」の一体効果を政策目的としているため、両立する投資計画ほど制度趣旨に合致します。対象・要件は最新の公募要領による点に留意してください。",
  },
  {
    label: "対象になりやすい事業領域",
    detail:
      "冷凍冷蔵倉庫、食品製造加工、流通・小売の冷蔵設備、産業用冷凍プロセスなど、低温を維持し続けるために電力を多消費する事業領域が中心です。これらは年間を通じて冷凍機が稼働するため省エネ余地が大きく、自然冷媒化による電気代削減と脱フロン効果の双方が見込めます。ただし対象となる設備区分・要件は公募回ごとに整理されるため、自社設備が対象になるかは公募要領で確認が必要です（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "電気代削減との関係",
    detail:
      "冷凍冷蔵設備は事業所の電力消費の大きな割合を占めることが多く、高効率な自然冷媒機器への更新は契約電力（ピーク）・使用電力量の両面で削減余地があります。補助金で初期投資を圧縮しつつ、更新後の電気代削減で回収を早める考え方が基本です。自社の削減余地はD-1計算機（業種別電気料金計算機）で試算できますが、ここでは制度面の整理を中心に解説します。",
  },
  {
    label: "総論との使い分け",
    detail:
      "本ページは「自然冷媒の冷凍冷蔵設備」に特化した補助の解説です。補助金制度全体の概要・スケジュール・採択率の総論は別ページで整理しています。本ページでは対象設備、脱フロンと省エネの一体効果、併用ルール、規模別の代表シナリオに焦点を当てます。採否は審査によるため、特定制度の利用を断定的に推奨するものではありません。",
  },
];

const targetScope = [
  {
    label: "対象設備（自然冷媒を用いる冷凍冷蔵機器）",
    detail:
      "CO2冷媒の冷凍冷蔵ユニット、アンモニア／CO2二次冷媒方式の冷凍機、空気冷媒（ブレイトンサイクル等）を用いる超低温設備など、自然冷媒を用いる高効率な冷凍冷蔵機器が対象の中心です。既存のHFC機器からの更新・転換が想定されます。具体的にどの機種・仕様が対象になるかは公募要領の設備要件で定義されるため、対象・要件は最新の公募要領による点を前提にご確認ください（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "対象事業者",
    detail:
      "冷凍冷蔵倉庫業、食品製造・加工業、水産加工、流通・小売など、自然冷媒機器を導入する民間事業者等が想定されます。中小企業・大企業で扱いが異なる場合があり、補助率・上限は事業区分・年度公募により変動します。自社の規模区分・業種が対象となるかは、申請前に各実施機関の最新公募要領で必ず確認してください。",
  },
  {
    label: "対象経費の考え方",
    detail:
      "対象となるのは原則として自然冷媒機器本体および付帯する工事費等で、対象範囲は公募要領で細かく規定されます。既存機器の撤去費、設計費、汎用設備などの扱いは制度・公募回により異なるため、見積段階で対象・対象外を切り分けておくことが重要です。対象・要件は最新の公募要領による前提で整理してください。",
  },
  {
    label: "脱フロン政策との関係",
    detail:
      "フロン排出抑制法のもとで、フロン類の使用合理化と漏えい防止、低GWP・自然冷媒への転換が求められています。自然冷媒機器の導入はこの政策方向に沿うものであり、補助制度はその転換を加速する位置づけです。ただし制度はあくまで導入を支援するものであり、採否は審査によります（出典: 環境省/各制度公募要領から整理／2026年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率・上限の基本的な考え方",
    detail:
      "自然冷媒機器補助の補助率・上限は事業区分・年度公募により変動するため、本ページでは具体的な数値を断定しません。一般に補助率や上限は「対象経費の一定割合」「1件あたり上限額」といった形で公募要領に定められます。申請前に必ず各実施機関の最新公募要領で、その年度・その区分の補助率・上限を確認してください（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "参考: 省エネ系補助（SII）の補助率水準",
    detail:
      "比較の目安として、SII（環境共創イニシアチブ）の省エネ補助では、補助率が中小1/2・大企業1/3、先進事業の上限が15億円、指定設備導入事業の上限が1億円といった水準が公表されています。冷凍冷蔵設備も省エネ補助の対象になりうるため、自然冷媒機器補助と省エネ補助のいずれが自社案件に適すかを比較検討する際の参考になります。ただしこれはSII省エネ補助の数値であり、自然冷媒機器補助の補助率・上限は事業区分・年度公募により変動します。",
  },
  {
    label: "採択率は公募回ごとに変動する",
    detail:
      "採択率は予算・申請件数・公募回により変動します。採択率は公募回ごとに事務局公表値を要確認とし、推測値で判断しないことが重要です。過去の採択結果（事務局公表値）を参考にしつつ、最新の公募回の状況を確認のうえ申請戦略を立ててください。固定の採択率を前提に投資判断するのは避けるべきです。",
  },
  {
    label: "費用対効果の見方",
    detail:
      "省エネ系の補助は「補助額あたりの省エネ量・CO2削減量」が評価されやすく、自然冷媒機器は脱フロン（漏えい時GWP削減）と高効率化（電気削減）の双方を訴求できる点で説明材料が豊富です。電気代削減額・CO2削減量を定量で示すと費用対効果の説明がしやすくなります。具体的な補助率・上限は創作せず、最新公募要領の数値で試算してください。",
  },
];

const dualEffect = [
  {
    label: "脱フロン効果（GWP低減・漏えいリスク低減）",
    detail:
      "自然冷媒（CO2はGWP=1、アンモニア・空気はGWPが極めて低い）はHFCに比べて漏えい時の温室効果が小さく、フロン排出抑制法のもとでの管理負担・将来の規制対応リスクの軽減につながります。脱フロンは漏えい点検・回収の運用負荷の軽減という副次効果も期待できます。ただし安全管理（特にアンモニアは毒性・可燃性、CO2は高圧）の要件があるため設計段階での検討が必要です。",
  },
  {
    label: "省エネ・電気代削減効果",
    detail:
      "高効率な自然冷媒機器への更新は、冷凍機の成績係数（COP）改善・インバータ制御・廃熱回収等により使用電力量とピーク電力の双方を削減できる可能性があります。冷凍冷蔵は年間を通じて稼働するため、削減効果が通年で積み上がるのが特徴です。削減率は設備・運用条件で大きく変わるため、本ページの数値は目安であり、実値は機器仕様・現状負荷で試算してください。",
  },
  {
    label: "一体効果が補助評価に与える意味",
    detail:
      "脱フロンと省エネを一体で実現する投資は、補助制度の政策目的（低GWP化＋省エネ）の双方に合致します。事業計画では「HFCからの転換によるGWP削減」と「高効率化による電気代・CO2削減」を併記し、定量効果を示すと説明力が高まります。採否は審査によるため、これらを示せば必ず採択されるわけではない点に留意してください（出典: 環境省・経済産業省/SII・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "再エネ賦課金・電気代上昇局面での意義",
    detail:
      "再生可能エネルギー発電促進賦課金は2026年度4.18円/kWh（確定）で、使用電力量に比例して負担が生じます。冷凍冷蔵のように電力多消費の設備では、自然冷媒化・高効率化による使用電力量の削減が賦課金を含む電気代全体の圧縮につながります。電気代の変動局面において、省エネ投資は契約見直しと並ぶ重要な選択肢です。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1: 中規模冷蔵倉庫（高圧・複数冷凍機）",
    before:
      "Before: 旧型HFC機器の冷凍機を複数台運用。冷凍機が通年フル稼働で電気代負担が大きく、フロン漏えい点検の運用負荷も課題。設備更新は投資負担がネックで先送りしていた。",
    after:
      "After: 自然冷媒（CO2）機器への更新を環境省系補助の活用前提で計画。高効率機・インバータ制御・運用最適化を組合せ、脱フロンと省エネを一体で訴求する事業計画を作成（補助率・上限は公募要領による）。",
    result:
      "Result: 自然冷媒化でGWP漏えいリスクを低減／高効率化で年間電気代 ▲約10〜15%（目安）／補助で初期投資を圧縮し回収を短縮（補助後の回収年数は補助率・電気代条件で変動）。",
  },
  {
    title: "代表シナリオ2: 食品加工工場の冷凍設備（高圧）",
    before:
      "Before: 製造ラインに付随する旧型冷凍設備が高経年。HFC機器で漏えい管理が必要、夏季のピーク電力が契約電力を押し上げていた。取引先からCN対応の要請も出始めていた。",
    after:
      "After: 自然冷媒機器への更新を補助活用前提で計画。冷凍プロセスの高効率化＋廃熱回収を検討し、脱フロン×省エネ×取引先CN要請対応を一体の投資ストーリーとして整理（対象・要件は最新の公募要領による）。",
    result:
      "Result: 脱フロンで将来規制リスクを軽減／高効率化で年間電気代 ▲約12〜18%（目安）／ピーク削減で契約電力の最適化余地も確認／取引先CN要請への対応材料を獲得。",
  },
  {
    title: "代表シナリオ3: 大規模物流冷凍拠点（特別高圧）",
    before:
      "Before: 大規模冷凍倉庫で多数の冷凍機が稼働。電気代規模が大きく、CN拠点目標の達成手段を模索。大型機器の更新は投資負担が大きく単独実施が難しかった。",
    after:
      "After: 自然冷媒（アンモニア／CO2方式）の大型機への更新を、補助＋省エネ系補助の比較検討のうえ計画。安全管理要件を設計に織り込み、廃熱回収・運用最適化を一体で設計（補助率・上限は事業区分・年度公募により変動）。",
    result:
      "Result: 大型投資の実質負担を補助で圧縮／年間電気代 ▲約15%（目安）／脱フロンとCN拠点ロードマップに沿った投資を前倒し検討／特別高圧の契約最適化と併せて削減余地を整理。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 現状把握・省エネ診断",
    detail:
      "まず冷凍冷蔵設備の電力使用状況・冷媒種別・機器の経年を把握します。省エネ診断を活用すると、補助金申請に必要な現状データ・改善計画の根拠が整います。どの設備を自然冷媒化すると効果が大きいかを特定することが出発点です。",
  },
  {
    label: "STEP2: 補助制度・区分の選定",
    detail:
      "自然冷媒機器補助（環境省系）と省エネ系補助（SII）のいずれが自社案件に適すかを比較し、対象設備・補助率・上限・スケジュールを確認します。補助率・上限は事業区分・年度公募により変動するため、複数制度を並行して検討します。",
  },
  {
    label: "STEP3: 事業計画書の作成",
    detail:
      "脱フロン（GWP低減）と省エネ（電気代・CO2削減）の定量効果、投資の必要性、実現可能性を記述します。自然冷媒化の効果と高効率化の効果を併記し、説得力のあるストーリーを設計します。採択される計画書には明確な数値根拠が必要です。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請します。採択後、交付決定を待ってから設備を発注するのが原則で、交付決定前の発注は対象外になり得ます。公募スケジュールと設備調達のタイミング管理が重要です。リードタイムの長い大型機器は特に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告",
    detail:
      "設備導入後、省エネ効果・冷媒転換の実績報告が求められる場合があります。計測体制（使用量データ）を整えておくと報告がスムーズです。報告不備は補助金返還リスクにつながるため、申請段階から測定計画を立てておくことが重要です。",
  },
];

const combinationItems = [
  {
    label: "省エネ系補助（SII）とのすみ分け",
    detail:
      "冷凍冷蔵設備は環境省系の自然冷媒機器補助だけでなく、SIIの省エネ補助の対象にもなりうるため、どちらが自社案件に適すかを比較検討します。同一設備への国庫補助の重複は原則不可のため、制度の選択が前提です。対象・要件は最新の公募要領によるため、両制度の要領を確認してすみ分けを判断します。",
  },
  {
    label: "自治体の上乗せ・横出し補助",
    detail:
      "都道府県・市町村が独自の脱フロン・省エネ設備補助を整備している場合があります。国の補助と財源が異なる、対象を分けられる等の条件で併用可能なケースもあるため、自治体の補助一覧を確認します。併用可否は制度ごとに異なるため事前確認が必須です。",
  },
  {
    label: "GX・CN投資促進税制との関係",
    detail:
      "補助金（返済不要の現金給付）とGX・CN投資促進税制（税負担の軽減）は仕組みが異なり、ケースにより併用できる場合があります。ただし補助で取得価額が圧縮される分、税制の控除対象額が調整される等のルールがあるため、税理士・所管窓口に事前確認が必須です。",
  },
  {
    label: "同一設備への重複は原則不可",
    detail:
      "同一の設備・経費に対して複数の国庫補助を重複して受けることは原則不可です。対象設備を分ける、国と自治体で財源が異なる場合に併用可、といったルールがあります。併用設計は専門的なため、各制度の公募要領と所管窓口で可否を確認してください。",
  },
];

const cautionItems = [
  {
    label: "交付決定前の発注は対象外になり得る",
    detail:
      "補助金は原則「交付決定後」に発注・契約した設備が対象です。交付決定前に発注すると補助対象外になる場合があるため、公募スケジュールと設備調達のタイミング管理が必須です。リードタイムの長い大型冷凍機は特に注意が必要です。",
  },
  {
    label: "安全管理要件の検討漏れ",
    detail:
      "アンモニアは毒性・可燃性、CO2は高圧運転という特性があり、自然冷媒機器には安全管理・法令対応が伴います。設計段階で安全要件・運用体制を検討せずに進めると、導入後の運用や法令対応で問題が生じることがあります。専門家と設計を詰めることが重要です。",
  },
  {
    label: "省エネ効果の過大見積もり",
    detail:
      "省エネ効果は機器仕様・現状負荷・運用条件で大きく変わります。本ページの削減率は目安であり、過大な削減見込みで投資判断すると回収計画が狂います。現状データに基づいた現実的な試算を行い、補助率・上限は最新公募要領の数値で計算してください。",
  },
  {
    label: "実績報告・効果測定の負担",
    detail:
      "補助によっては交付後に省エネ・冷媒転換の実績報告が求められます。計測体制を整えておくと報告がスムーズで、報告不備は補助金返還リスクにつながります。申請段階から測定計画を立てておくことが失敗回避につながります。",
  },
];

const approvalPoints = [
  {
    label: "脱フロン×省エネの一体効果を定量で示す",
    detail:
      "GWP低減（脱フロン）と電気代・CO2削減（省エネ）の双方を定量で示すと、制度の政策目的に合致した計画として説明力が高まります。漏えい時GWP削減・年間電気削減量を併記するのが有効です。採否は審査によるため、定量提示は必要条件であって十分条件ではありません。",
  },
  {
    label: "効果の大きい設備から優先する",
    detail:
      "通年フル稼働で電力消費の大きい冷凍機から自然冷媒化すると、補助額あたりの省エネ量・CO2削減量が大きく、費用対効果の説明がしやすくなります。効果の小さい設備の単体申請より、効果の大きい設備を軸にする方が説得力があります。",
  },
  {
    label: "現状データと省エネ診断を根拠にする",
    detail:
      "省エネ診断・計測データに基づく現状把握は、事業計画の説得力を高めます。推測ではなく実測に基づく削減根拠を示すことが、採択評価・実績報告の双方で重要です。診断結果は対象設備の特定にも役立ちます。",
  },
  {
    label: "最新公募要領の要件に沿って申請する",
    detail:
      "対象設備・補助率・上限・提出書類は公募回ごとに変わります。古い情報のまま申請すると要件不一致で不採択になりかねません。対象・要件は最新の公募要領による前提で、申請前に必ず最新の要領を確認してください（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
];

const checklistItems = [
  "冷凍冷蔵設備の電力使用状況・冷媒種別・経年を把握しているか（省エネ診断の活用）",
  "効果の大きい冷凍機から自然冷媒化の優先候補にしているか",
  "自然冷媒機器補助（環境省系）と省エネ補助（SII）を比較検討したか",
  "脱フロン（GWP低減）と省エネ（電気代・CO2削減）を一体で訴求できているか",
  "安全管理要件（アンモニア・CO2の特性）を設計段階で検討したか",
  "補助率・上限は最新公募要領の数値で試算したか（推測しない）",
  "採択率は公募回ごとの事務局公表値で確認したか",
  "交付決定後に発注するスケジュール管理ができているか",
  "自治体の上乗せ補助・併用可否を確認したか",
  "実績報告のための計測体制を準備しているか",
  "補助後の投資回収年数を現実的に試算したか",
  "不採択時の再申請・別制度への切替戦略を準備したか",
];

const updateItems = [
  {
    label: "公募要領は年度ごとに更新される",
    detail:
      "対象設備・補助率・上限・公募時期は年度ごとに変わります。本ページは2026年度時点の整理であり、申請前には必ず最新の公募要領を確認してください。前年度の要領を流用すると要件不一致のリスクがあります。",
  },
  {
    label: "確認すべき一次情報",
    detail:
      "環境省・経済産業省・資源エネルギー庁・SII（環境共創イニシアチブ）の公式サイトおよび各制度の公募要領が一次情報です。電力単価・産業別エネルギーの動向は新電力ネット等のデータも参考にできます。一次情報で必ず裏取りしてください。",
  },
  {
    label: "採択率・スケジュールの確認方法",
    detail:
      "採択率は公募回ごとに事務局公表値を要確認です。公募スケジュールは年度予算成立後に公表されることが多いため、所管窓口・事務局の最新情報を継続的に確認します。推測値で投資判断しないことが重要です。",
  },
  {
    label: "電気代削減余地の試算",
    detail:
      "自然冷媒化・高効率化による電気代削減余地は、自社の契約条件・使用量で大きく変わります。D-1計算機（業種別電気料金計算機）で削減余地の目安を試算し、補助後の回収年数の検討に役立ててください。",
  },
];

const faqItems = [
  {
    question: "自然冷媒の冷凍冷蔵設備補助とはどのような制度ですか？",
    answer:
      "CO2・アンモニア・空気等を冷媒とする冷凍冷蔵設備の導入を支援する環境省系の補助制度です。HFC（代替フロン）からの転換を促し、フロン排出抑制法への対応とGWP低減、高効率化による電気代削減を後押しします。対象は冷凍冷蔵倉庫・食品製造加工・流通・産業用冷凍等が中心です。補助率・上限は事業区分・年度公募により変動するため、申請前に必ず各実施機関の最新公募要領を確認してください（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "補助率や上限額はどのくらいですか？",
    answer:
      "自然冷媒機器補助の補助率・上限は事業区分・年度公募により変動するため、本ページでは断定しません。参考として省エネ系のSII補助では中小1/2・大企業1/3、先進事業の上限15億円、指定設備の上限1億円といった水準が公表されていますが、これはSII省エネ補助の数値です。自然冷媒機器補助の数値は最新の公募要領で必ず確認してください（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "どんな設備が対象になりますか？",
    answer:
      "CO2冷媒の冷凍冷蔵ユニット、アンモニア／CO2二次冷媒方式の冷凍機、空気冷媒の超低温設備など、自然冷媒を用いる高効率な冷凍冷蔵機器が対象の中心です。既存HFC機器からの更新・転換が想定されます。ただし具体的にどの機種・仕様が対象かは公募要領の設備要件で定義されます。対象・要件は最新の公募要領によるため、自社設備が対象になるかは申請前に確認してください（出典: 環境省/各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "脱フロンと省エネはどう両立するのですか？",
    answer:
      "自然冷媒はHFCに比べて漏えい時のGWPが極めて低く、脱フロン効果が得られます。同時に高効率機への更新で冷凍機の成績係数改善・インバータ制御等により使用電力量とピーク電力を削減できる可能性があります。冷凍冷蔵は通年稼働のため削減が積み上がりやすいのが特徴です。削減率は設備・運用条件で変わるため目安として捉え、実値は機器仕様で試算してください（出典: 環境省・経済産業省/SII・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "省エネ補助（SII）と自然冷媒機器補助はどちらを使うべきですか？",
    answer:
      "冷凍冷蔵設備はどちらの対象にもなりうるため、対象設備・補助率・上限・スケジュールを比較して自社案件に適す方を選びます。同一設備への国庫補助の重複は原則不可のため、制度の選択が前提です。脱フロン転換を主眼にするなら環境省系、幅広い省エネ設備更新の一部なら省エネ補助、という整理が一つの目安ですが、対象・要件は最新の公募要領によるため両制度の要領で確認してください。",
  },
  {
    question: "採択率はどのくらいですか？",
    answer:
      "採択率は予算・申請件数・公募回により変動します。採択率は公募回ごとに事務局公表値を要確認とし、推測値で判断しないことが重要です。固定の採択率を前提に投資判断するのは避け、過去の採択結果（事務局公表値）を参考にしつつ最新の公募回の状況を確認のうえ申請戦略を立ててください。採否は審査によります（出典: 各制度公募要領・事務局公表値から整理／2026年度時点）。",
  },
  {
    question: "交付決定前に設備を発注しても大丈夫ですか？",
    answer:
      "原則として交付決定前の発注は補助対象外になり得ます。補助金は交付決定後に発注・契約した設備が対象とされることが多く、決定前の発注は補助を受けられない場合があります。リードタイムの長い大型冷凍機は特に、公募スケジュールと調達タイミングの管理が重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください（出典: 各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "申請前にまず何をすればよいですか？",
    answer:
      "まず省エネ診断・計測で冷凍冷蔵設備の電力使用状況・冷媒種別・経年を把握し、効果の大きい設備を特定します。次に自然冷媒機器補助と省エネ補助を比較し、対象・補助率・上限・スケジュールを確認します。その後、脱フロンと省エネの定量効果を盛り込んだ事業計画を作成します。補助率・上限は事業区分・年度公募により変動するため、最新の公募要領で数値を確認してください（出典: 環境省・SII/各制度公募要領から整理／2026年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "環境省（脱フロン・自然冷媒機器普及促進支援事業）", url: "https://www.env.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "経済産業省（GX・省エネ政策）", url: "https://www.meti.go.jp/" },
  { name: "経済産業省 資源エネルギー庁（省エネ・電力政策）", url: "https://www.enecho.meti.go.jp/" },
];

export default function SubsidyNaturalRefrigerantFreezerPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-natural-refrigerant-freezer"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          {
            name: "自然冷媒の冷凍冷蔵設備補助金",
            url: "https://simulator.eic-jp.org/subsidy-natural-refrigerant-freezer",
          },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">自然冷媒の冷凍冷蔵設備補助金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            自然冷媒の冷凍冷蔵設備補助金 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            CO2・アンモニア・空気等を冷媒とする冷凍冷蔵設備の導入補助について、対象設備・補助率の考え方・申請フロー・他制度との併用ルール・規模別の代表シナリオを整理します。脱フロン（フロン排出抑制法・GWP低減）と電気代削減を両立する実務を、環境省系・SII省エネ補助の整理とともに解説します。補助率・上限は事業区分・年度公募により変動するため、申請前に必ず各実施機関の最新公募要領をご確認ください。
          </p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>自然冷媒（CO2・アンモニア・空気等）の冷凍冷蔵設備補助の全体像</li>
              <li>対象設備・対象事業者・対象経費の考え方</li>
              <li>脱フロン（GWP低減）と省エネ（電気代削減）の一体効果</li>
              <li>規模別の代表シナリオ3件（Before/After・数値は目安）</li>
              <li>申請フロー・他制度との併用・採択のポイント・確認方法</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは自然冷媒の冷凍冷蔵設備補助に特化した解説です。各補助金制度の概要・採択率の総論は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
            、{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度の全体像 — 自然冷媒補助とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自然冷媒の冷凍冷蔵設備補助は、HFC（代替フロン）から自然冷媒（CO2・アンモニア・空気等）への転換を促し、脱フロンと省エネを一体で進める環境省系の支援制度です。高効率機への更新で電気代削減も同時に狙えます。補助率・上限は事業区分・年度公募により変動します。
            </p>
            <div className="mt-4 space-y-3">
              {overview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              冷凍冷蔵を多用する業種の電気代見直しは{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷蔵倉庫の電気料金見直し</Link>
              、{" "}
              <Link href="/frozen-food-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍食品業の電気料金見直し</Link>
              も参照ください。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本ページは情報整理を目的としたものであり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象設備・対象事業者・対象経費</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自然冷媒を用いる高効率な冷凍冷蔵機器が対象の中心で、冷凍冷蔵倉庫・食品製造加工・流通・産業用冷凍が想定される事業領域です。対象設備・事業者・経費の範囲は公募要領で規定されるため、対象・要件は最新の公募要領による前提で確認します。
            </p>
            <div className="mt-4 space-y-3">
              {targetScope.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              水産・食品加工の電力プロファイルは{" "}
              <Link href="/seafood-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">水産加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場の電気料金見直し</Link>
              も参照ください。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 対象設備の整理は制度趣旨の説明であり、自社設備が対象になるかは最新公募要領でご確認ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助率と上限の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自然冷媒機器補助の補助率・上限は事業区分・年度公募により変動するため、本ページでは断定しません。比較の目安として省エネ系SII補助の水準（中小1/2・大企業1/3、先進事業上限15億円、指定設備上限1億円）も併せて整理します。採択率は公募回ごとに事務局公表値を要確認です。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyRates.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              、SII省エネ補助の総論は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金ガイド</Link>
              を参照ください。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限は2026年度時点の整理であり最新公募要領の確認が必要です。本ページは特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">脱フロンと省エネの一体効果</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自然冷媒化はGWP低減（脱フロン）と高効率化（電気代・CO2削減）を同時に実現できる点が特徴です。冷凍冷蔵は通年稼働のため省エネ効果が積み上がりやすく、再エネ賦課金を含む電気代の圧縮にも寄与します。安全管理要件は設計段階で検討が必要です。
            </p>
            <div className="mt-4 space-y-3">
              {dualEffect.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ヒートポンプによる脱炭素は{" "}
              <Link href="/subsidy-heat-pump-introduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ヒートポンプ導入補助の活用ガイド</Link>
              、省エネ診断は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              。電力単価・産業別エネルギー消費の動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照ください。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 効果の整理は一般的な傾向であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の代表シナリオ3件（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中規模冷蔵倉庫・食品加工工場の冷凍設備・大規模物流冷凍拠点の3規模で、自然冷媒化による脱フロンと電気代削減をBefore/After方式で提示します。代表シナリオ（公開資料・制度要領から再構成・数値は目安レンジ）であり、▲%は目安です。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
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
              冷蔵×蓄電池の事例は{" "}
              <Link href="/case-study-logistics-cold-storage-battery" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流・冷蔵倉庫×蓄電池の事例</Link>
              、特別高圧の料金は{" "}
              <Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧の電気料金</Link>
              。自社の削減余地は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金計算機（D-1）</Link>
              で試算できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は再構成した目安であり実値は条件で変動します。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請フロー（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              現状把握・省エネ診断から実績報告まで、自然冷媒機器補助の標準的な申請フローを整理します。交付決定前の発注は対象外になり得る点に特に注意が必要です。
            </p>
            <div className="mt-4 space-y-3">
              {applicationFlow.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業計画書の書き方は{" "}
              <Link href="/subsidy-business-plan-writing-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金事業計画書の書き方完全ガイド</Link>
              、申請書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付の必要書類ガイド</Link>
              。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本ページは2026年度時点の整理です。制度内容・補助率・上限・公募時期は年度ごとに変わるため、申請前に必ず各実施機関の最新公募要領をご確認ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">他制度との併用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              冷凍冷蔵設備は環境省系の自然冷媒機器補助とSIIの省エネ補助の双方の対象になりうるため、すみ分けの検討が前提です。自治体の上乗せ補助・GX税制との関係も整理します。同一設備への国庫補助の重複は原則不可です。
            </p>
            <div className="mt-4 space-y-3">
              {combinationItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用ルールは{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              、自治体補助は{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体補助一覧</Link>
              、GX税制は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制ガイド</Link>
              。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 併用可否は制度ごとに異なり要事前確認です。本ページは特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・失敗例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自然冷媒機器補助で失敗しないための留意点を整理します。発注タイミング・安全管理要件・効果の過大見積もり・実績報告の負担が成否を左右します。
            </p>
            <div className="mt-4 space-y-3">
              {cautionItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不採択対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              、補助か契約見直しかの優先順位は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 採否は審査によります。本ページは情報整理を目的とした一般的な解説です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              脱フロン×省エネの一体効果を定量で示す、効果の大きい設備から優先する、現状データ・省エネ診断を根拠にする、最新公募要領の要件に沿う、が採択に向けたポイントです。採否は審査によります。
            </p>
            <div className="mt-4 space-y-3">
              {approvalPoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              採択率・スケジュールの総論は{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              も参照ください。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 採択率は公募回ごとに変動し事務局公表値の確認が必要です。本ページは特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報の更新と確認方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              対象設備・補助率・上限・公募時期は年度ごとに変わります。本ページは2026年度時点の整理であり、一次情報（環境省・経産省・資源エネルギー庁・SII・各制度公募要領）で必ず裏取りしてください。
            </p>
            <div className="mt-4 space-y-3">
              {updateItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金の全体像は{" "}
              <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
              、業種別の電気代見直しの起点は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代削減の見直しポイント</Link>
              、トップは{" "}
              <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーターホーム</Link>
              。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本ページは2026年度時点の整理です。申請前に最新公募要領を確認してください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自然冷媒化後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自然冷媒・高効率機への更新による電気代削減効果を、業種別電気料金計算機（D-1）で自社条件に当てはめて試算できます。補助前後の投資回収・年間削減額を定量化し、申請する補助の優先順位づけに活用できます。再エネ賦課金は2026年度4.18円/kWh（確定）を前提に整理しています。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>自然冷媒・高効率機導入後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>契約見直し＋省エネ＋脱フロンの複合効果を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえご活用ください。本ページは特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/subsidies-overview", title: "補助金・助成金の全体像（総論）", description: "制度の種類・スケジュール・採択率の概要。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金ガイド", description: "国の主力省エネ補助。冷凍冷蔵も対象になりうる。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "産業用ヒートポンプの脱炭素・省エネ。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "申請前の現状把握・改善計画の根拠づくり。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制ガイド", description: "税額控除・特別償却の要件と対象設備。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付の必要書類ガイド", description: "申請から交付までの書類整理。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-local-government-list", title: "自治体補助一覧", description: "都道府県・市町村の上乗せ補助。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "補助か契約見直しかの判断軸。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金計算機（D-1）", description: "自然冷媒化後の電気代削減余地を試算。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷蔵倉庫の電気料金見直し（業種）", description: "冷蔵倉庫の電力プロファイルと最適化。" },
              { href: "/frozen-food-electricity-cost-review", title: "冷凍食品業の電気料金見直し（業種）", description: "冷凍設備の電気代最適化。" },
              { href: "/seafood-processing-electricity-cost-review", title: "水産加工業の電気料金見直し（業種）", description: "水産加工の冷凍冷蔵と電気代。" },
              { href: "/case-study-logistics-cold-storage-battery", title: "物流・冷蔵倉庫×蓄電池の事例", description: "冷蔵×蓄電池の電気代削減事例。" },
            ]}
          />

          <ContentCta
            heading="自然冷媒化と電気代削減を検討する"
            description="自然冷媒の冷凍冷蔵設備補助は対象設備・補助率・併用ルールが年度公募で変わります。まず業種別電気料金計算機（D-1）で削減余地を試算し、補助金の全体像を確認したうえで、必要に応じて専門家へご相談ください。補助率・上限は事業区分・年度公募により変動するため、最新公募要領をご確認ください。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別電気料金計算機（D-1）で試算する" },
              { href: "/subsidies-overview", label: "補助金の全体像を見る" },
              { href: "/business-electricity-cost-reduction-review-points", label: "電気代削減の見直しポイントを見る" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="自然冷媒化・脱フロンと電気代削減、専門家に相談しませんか？"
            description="自然冷媒機器の選定、環境省系補助とSII省エネ補助のすみ分け、安全管理を織り込んだ事業計画の作成は専門知識を要します。エネルギー情報センターは中立的立場で補助金活用・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
