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
  "法人向けEV充電インフラ補助金 完全ガイド｜対象・補助率・申請の進め方（CEV系）";
const pageDescription =
  "法人のEV充電インフラ（普通充電・急速充電・V2H/V2B充放電設備）導入補助の対象・補助率の考え方・申請フロー・電気料金（基本料金・デマンド）への影響と最適化を整理。社有車EV化・従業員/来客充電の実務を、代表シナリオ・自治体上乗せ・併用ルール・採択ポイントまで中立的に解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "EV充電 補助金",
    "急速充電 補助金 法人",
    "充電インフラ CEV補助金",
    "V2H V2B 補助金",
    "事業所 EV充電 設置",
    "次世代自動車振興センター",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-ev-charging-infrastructure",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-ev-charging-infrastructure",
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
    label: "EV充電インフラ補助の中心は『CEV補助金』のインフラ部分",
    detail:
      "法人がEV充電設備を導入する際の中心的な国の補助は、経済産業省が所管し一般社団法人次世代自動車振興センター（NeV）が執行する「クリーンエネルギー自動車・インフラ導入促進補助金（CEV補助金）」のうち充電インフラ部分です。普通充電器・急速充電器・充放電設備（V2H/V2B）が対象に含まれ、設備費・工事費の一定割合が補助されます。ただし補助率・上限は区分・出力・設置場所・年度公募により変動するため、具体的な割合は最新の公募要領で必ず確認してください（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "総論（補助金全体像）との使い分け",
    detail:
      "本ページは『法人のEV充電インフラ』に特化した整理です。補助金制度の全体像・申請の基本動線は別途まとめており、本ページでは普通充電・急速充電・V2H/V2Bという充電設備固有の対象区分、社有車EV化・従業員/来客充電という利用形態、そして充電負荷の増加が契約電力・デマンド・基本料金に与える影響と最適化に焦点を当てます。",
  },
  {
    label: "国・自治体・関連制度の重層構造",
    detail:
      "EV充電インフラには、①国のCEV補助金（充電インフラ）、②都道府県・市町村の独自上乗せ補助、③蓄電池・太陽光と組合せる場合の関連補助、④集合住宅・事業所向けの設置支援、といった複数の層が関与します。財源や対象設備が異なる場合に併用可能なケースもありますが、可否は制度ごとに異なるため事前確認が前提です（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "充電インフラは『電気料金』とセットで考える",
    detail:
      "充電器の設置は導入費だけでなく、その後の電気料金（基本料金・従量料金・デマンド）に継続的に影響します。特に急速充電は瞬時電力が大きく契約電力・デマンドを押し上げやすいため、補助金で初期費用を抑えるのと並行して、運用時の電気料金最適化（時間帯別・ピーク制御・基本料金管理）を一体で設計する視点が重要です。",
  },
  {
    label: "利用目的の明確化が出発点",
    detail:
      "社有車のEV化に伴う充電、従業員の通勤車充電、来客・顧客向けの充電サービス、物流車両の急速充電など、目的によって必要な出力・台数・設置場所が変わります。目的を起点に設備区分を選ぶことが、補助金の対象選定・申請ストーリー・電気料金影響の見積りすべての前提になります。",
  },
];

const targetEquipment = [
  {
    name: "普通充電器（200V・低出力）",
    role: "事業所・従業員/来客・社有車の夜間充電向け",
    detail:
      "出力が比較的小さく、夜間や駐車中の長時間充電に適した区分。来客用に複数口を設置する、社有車を夜間に充電する、従業員車両向けに設置するといった用途で活用されます。1口あたりの電力負荷は急速充電より小さいものの、複数口を同時運用する場合は合計負荷が契約電力に影響します。補助率・上限は区分・設置場所・年度公募により変動します（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    name: "急速充電器（高出力）",
    role: "物流・短時間充電・来客回転重視向け",
    detail:
      "短時間で多くの電力を供給する高出力区分。物流車両の運行間充電、商業施設での回転率を意識した充電サービス、長距離移動の社有車向けなどで使われます。瞬時電力が大きく契約電力・デマンドへの影響が大きいため、設置時点で電気料金影響の試算と受電設備の確認が欠かせません。補助率・上限は出力・設置場所・年度公募により変動するため最新の公募要領によります。",
  },
  {
    name: "充放電設備 V2H/V2B（Vehicle to Home / Building）",
    role: "BCP・ピークカット・自家消費との連携向け",
    detail:
      "EVの蓄電池を建物側へ放電できる充放電設備。停電時のBCP（事業継続）、ピーク時間帯の建物への放電によるデマンド抑制、太陽光自家消費との連携などに活用されます。蓄電池・太陽光と組合せる構成は関連補助の対象になる場合がありますが、対象範囲・併用可否は区分・年度公募により変動します（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    name: "受電・分電・基礎工事等の付帯設備",
    role: "充電器設置に伴う電気工事・基礎",
    detail:
      "充電器本体に加え、受電容量の増強、分電盤・ケーブル敷設、基礎・設置工事などの付帯費用が発生します。CEV補助金では設備費に加え工事費の一定割合が補助対象となる場合がありますが、対象範囲・上限は公募要領で定義されます。受電容量の増強が必要になると契約電力・基本料金にも影響するため、設計段階での確認が重要です。",
  },
];

const eligibility = [
  {
    label: "対象者の考え方",
    detail:
      "法人・事業者が事業所・施設・駐車場等にEV充電設備を設置するケースが広く対象に含まれます。社有車のEV化に伴う充電、従業員向け、来客・顧客向けの充電サービス、集合住宅など、設置主体・利用形態によって適用される制度や条件が異なります。自社がどの区分に当たるかは公募要領の対象者要件で確認します（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "対象設備・対象経費の範囲",
    detail:
      "対象は普通充電器・急速充電器・充放電設備（V2H/V2B）の本体費に加え、設置に必要な工事費の一定割合が含まれる場合があります。一方で、対象外となる経費（一般的な土木、関連性の薄い設備等）も定義されているため、対象経費の線引きは公募要領で確認が必須です。補助率・上限は区分・出力・設置場所・年度公募により変動します。",
  },
  {
    label: "設置場所による違い",
    detail:
      "事業所・商業施設・物流拠点・集合住宅・公共的な場所など、設置場所のカテゴリーによって補助の枠組みや優先度が異なる場合があります。来客や公共利用に開かれた充電か、自社利用に限定した充電かでも扱いが変わり得るため、利用形態と設置場所の組合せを明確にして申請区分を選びます。",
  },
  {
    label: "公募スケジュールと予算枠",
    detail:
      "CEV補助金の充電インフラ部分は年度ごとに公募が行われ、予算枠の消化状況によって受付が締切られることがあります。年度初の早い段階での情報収集と準備が、設置計画の確度を高めます。最新の公募スケジュール・予算状況は次世代自動車振興センターの公表情報で確認してください（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率は『区分・出力・設置場所』で変動",
    detail:
      "EV充電インフラの補助率・上限は、普通充電か急速充電か、出力区分、設置場所のカテゴリー、年度の公募内容によって変動します。本ガイドでは具体的な割合や金額を断定しません。実際の補助率・上限額は申請時点の公募要領に明記されるため、必ず最新の公募要領による確認を行ってください（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "設備費と工事費の双方が論点",
    detail:
      "充電インフラは設備費（充電器本体）だけでなく工事費（受電・基礎・敷設）の比重が大きい点が特徴です。工事費がどこまで対象になるか、上限がどう設定されるかで実質負担が大きく変わります。見積りの段階で設備費・工事費を分けて整理し、対象/対象外の線引きを公募要領で確認することが重要です。",
  },
  {
    label: "他の補助金の目安（参考）",
    detail:
      "充電器そのものではなく、組合せる蓄電池・太陽光・省エネ設備側で別制度を併用する場合があります。例えば省エネ設備更新で参照されるSII省エネ補助は、目安として中小1/2・大企業1/3（先進事業の上限15億円・指定設備導入事業の上限1億円）が知られていますが、これは充電インフラ補助の数値ではなく、組合せる省エネ設備側の参考目安です。混同せず、各制度の公募要領で確認してください。",
  },
  {
    label: "採否は審査によるもの",
    detail:
      "補助金は申請すれば必ず受けられるものではなく、対象要件の充足と予算枠の範囲内で採否が決まります。要件を満たしていても予算消化で受付が終了することもあります。採否は審査・予算によるため、断定的な見通しは持たず、複数年度・複数制度の選択肢を残して計画することが現実的です（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
];

const electricityImpact = [
  {
    label: "急速充電は契約電力・デマンドを押し上げる",
    detail:
      "高圧・特別高圧契約では、30分ごとの最大需要電力（デマンド）が契約電力・基本料金を左右します。急速充電は瞬時電力が大きいため、複数台が同時に充電すると一気にデマンドが跳ね上がり、基本料金が増加する可能性があります。設置前に、想定される同時充電パターンとデマンド上昇幅を試算しておくことが重要です。",
  },
  {
    label: "基本料金は1年間影響する",
    detail:
      "デマンドの最大値が更新されると、その値が以後一定期間の基本料金算定に影響する契約形態が一般的です。一度大きなピークを記録すると、その後しばらく基本料金が高止まりする可能性があるため、充電のピークを抑える運用設計（同時充電の制御）が費用面で効いてきます。",
  },
  {
    label: "時間帯別（TOU）運用でコストを平準化",
    detail:
      "夜間など電力需要が低い時間帯に普通充電を寄せる時間帯別（TOU: Time of Use）運用は、従量料金の平準化とピーク回避の両面で有効と考えられます。社有車の夜間充電や、来客が少ない時間帯への充電誘導など、利用形態に応じた時間設計が運用コストに影響します。",
  },
  {
    label: "ピーク制御・負荷分散の仕組み",
    detail:
      "複数の充電器を束ねて合計出力に上限を設けるダイナミックロードバランス（負荷分散）や、デマンド監視と連動した出力抑制などの仕組みを使うと、契約電力の押し上げを抑えられる場合があります。導入時に制御機能の有無・設定を確認しておくと、運用後の基本料金管理がしやすくなります。",
  },
  {
    label: "自家消費・V2Bとの連携",
    detail:
      "太陽光の自家消費電力で充電する、あるいはV2Bで建物のピーク時間帯にEVから放電するといった連携は、電気の購入量・ピークの両面に作用します。充電インフラ単体ではなく、太陽光・蓄電池・需要側施策と組合せて全体の電気料金影響を見立てる視点が有効です。",
  },
];

const scenarios = [
  {
    title: "代表シナリオ1: オフィスの来客用普通充電 複数口（高圧契約・数値は目安レンジ）",
    before:
      "Before: 来客駐車場に充電設備なし。EV来客の増加に対応したいが、複数口を同時に使うと基本料金が上がらないか不安で踏み切れていなかった。",
    after:
      "After: CEV補助金（充電インフラ）で普通充電器を複数口設置し、初期費用の一定割合を補助。負荷分散機能で合計出力に上限を設け、来客の少ない時間帯への充電誘導とあわせて契約電力の押し上げを抑制。補助率・上限は区分・設置場所・年度公募により変動。",
    result:
      "Result: 初期負担を補助で圧縮／同時充電制御によりデマンド上昇を限定的に抑制／来客向けサービスを開始しテナント評価が向上（数値は目安レンジ・採否は審査による）。",
  },
  {
    title: "代表シナリオ2: 物流事業者の急速充電＋社有車EV化（高圧契約・数値は目安レンジ）",
    before:
      "Before: 配送車をEVへ切替えたいが、急速充電の高出力で契約電力・デマンドが大きく上がり、基本料金増が運行コストを圧迫する懸念があった。",
    after:
      "After: CEV補助金で急速充電器と社有車側の導入を計画。運行間の充電を時間帯別に分散し、デマンド監視連動のピーク制御を導入。夜間の普通充電も併用して急速充電の同時利用を減らす運用に。補助率・上限は出力・設置場所・年度公募により変動し最新の公募要領による。",
    result:
      "Result: 充電負荷のピークを平準化し契約電力の急増を抑制／燃料費から電気代への置換でコスト構造を見直し／EV化による環境対応を取引先に提示（数値は目安レンジ・採否は審査による）。",
  },
  {
    title: "代表シナリオ3: 商業施設の充電サービス（特別高圧・数値は目安レンジ）",
    before:
      "Before: 集客策として充電サービスを検討するも、急速充電の同時利用でデマンドが跳ね、基本料金が読めず投資判断が難しかった。",
    after:
      "After: 普通充電と急速充電を組合せ、CEV補助金と自治体の上乗せ補助の併用可否を確認のうえ申請。負荷分散と時間帯別運用、屋根太陽光の自家消費・V2B連携でピーク時間帯の購入電力を抑える構成に。対象範囲・併用可否は区分・年度公募により変動。",
    result:
      "Result: 補助で初期負担を圧縮しつつデマンド上昇を制御／充電サービスを集客・滞在時間延伸に活用／自家消費連携で電気の購入量も抑制（数値は目安レンジ・採否は審査による）。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 利用目的・台数・出力の整理",
    detail:
      "社有車充電／従業員／来客／充電サービス／物流のうち、どの目的かを明確にし、必要な充電器の種類（普通・急速・V2H/V2B）・台数・出力を整理します。目的が定まると、対象となる制度区分と電気料金影響の見積りの前提が固まります。",
  },
  {
    label: "STEP2: 受電容量・電気料金影響の確認",
    detail:
      "充電負荷が契約電力・デマンド・基本料金に与える影響を試算し、受電容量の増強が必要かを確認します。急速充電や複数口同時運用ではデマンド上昇が大きくなり得るため、負荷分散・ピーク制御の要否もこの段階で検討します。",
  },
  {
    label: "STEP3: 制度・公募要領の確認と区分選定",
    detail:
      "CEV補助金（充電インフラ）の最新公募要領で、対象者・対象設備・対象経費・補助率・上限・スケジュールを確認し、自社の設置計画に合う区分を選定します。自治体の上乗せ補助や関連補助の併用可否もこの段階で整理します（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "STEP4: 見積り・申請書類の準備",
    detail:
      "設備費・工事費を分けた見積りを取得し、対象/対象外の経費を切り分けます。設置計画・利用形態・効果を整理した申請書類を準備します。交付決定前に発注すると対象外になる制度が一般的なため、発注タイミングの管理が重要です。",
  },
  {
    label: "STEP5: 交付決定・設置・実績報告",
    detail:
      "交付決定後に発注・設置し、完了後に実績報告（設置状況・経費の証憑等）を提出します。運用開始後はデマンド・電気料金の推移を確認し、ピーク制御や時間帯別運用の設定を見直すと、補助で抑えた初期費用に加えて運用コストも管理できます。",
  },
];

const stackingItems = [
  {
    label: "国のCEV補助金＋自治体の上乗せ補助",
    detail:
      "都道府県・市町村が独自にEV充電設備の上乗せ補助を設けている場合があります。財源や対象が国の補助と異なる場合に併用可能なケースもありますが、可否・条件は自治体ごとに異なります。設置予定地の自治体の最新制度を確認のうえ、併用前提の計画を立てます（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    label: "蓄電池・太陽光・省エネ設備の関連補助",
    detail:
      "V2H/V2Bや充電と組合せる蓄電池・太陽光・省エネ設備は、別の制度の対象になる場合があります。同一設備・同一経費への国庫補助の重複は原則不可ですが、対象設備を分けることで併用可能なケースもあります。対象範囲・併用可否は各制度の公募要領で確認が必要です。",
  },
  {
    label: "重複受給の禁止と経費の切り分け",
    detail:
      "同一の設備・経費に対し複数の国庫補助を重ねて受けることは原則できません。併用を検討する場合は、設備・経費・財源の切り分けが論点になります。線引きを誤ると返還リスクにつながるため、申請前に各実施機関へ確認することが安全です。",
  },
  {
    label: "自治体情報の探し方",
    detail:
      "自治体の上乗せ補助は年度・予算で変動し、募集期間が短いこともあります。自治体の環境・産業部門の公表情報や、補助金の自治体一覧を起点に、設置予定地の制度を早めに把握しておくと、国と自治体の併用計画が立てやすくなります。",
  },
];

const cautionItems = [
  {
    label: "交付決定前の発注は対象外になりやすい",
    detail:
      "多くの補助制度は『交付決定後』に発注・契約した設備が対象です。リードタイムの長い受電工事・特注設備は特に、公募スケジュールと調達の順序管理が重要です。発注を急ぐ場合は対象範囲を実施機関に必ず確認してください。",
  },
  {
    label: "受電容量不足・デマンド見落としによる失敗",
    detail:
      "急速充電や複数口同時運用を受電容量や基本料金影響を確認せずに進めると、契約電力が想定外に上昇し基本料金が高止まりする失敗が起こり得ます。設置前のデマンド試算と負荷分散・ピーク制御の検討で回避します。",
  },
  {
    label: "対象外経費の混入・見積りの不備",
    detail:
      "工事費の一部や関連性の薄い経費が対象外になることがあります。設備費・工事費を分けた見積りで対象/対象外を切り分けないと、想定より補助額が少なくなることがあります。公募要領の対象経費定義に沿って見積りを整理します。",
  },
  {
    label: "実績報告・維持管理の負担",
    detail:
      "交付後は実績報告（設置状況・経費の証憑等）が求められ、設備の維持管理や処分制限期間が定められる場合があります。報告不備は補助金返還リスクにつながるため、申請段階から証憑管理と維持計画を準備します。",
  },
  {
    label: "採否は審査・予算による（断定しない）",
    detail:
      "要件を満たしても予算消化で受付終了となることがあり、採否は審査・予算によります。確実に採択されるという前提は置かず、複数年度・複数制度の選択肢を残し、不採択時の代替計画も用意しておくのが現実的です。",
  },
];

const approvalPoints = [
  {
    label: "利用目的と効果を具体的に示す",
    detail:
      "社有車EV化・従業員/来客充電・充電サービスといった利用目的と、台数・出力・想定利用といった効果の具体性が、申請の説得力を高めます。漠然とした計画より、利用形態と運用方法を具体化した計画が望まれます。",
  },
  {
    label: "電気料金影響への配慮を計画に織り込む",
    detail:
      "充電負荷が契約電力・デマンドに与える影響を把握し、負荷分散・ピーク制御・時間帯別運用といった対策を計画に含めると、運用の現実性が伝わります。電気料金への配慮は、設備を使い続けられる計画であることの裏づけになります。",
  },
  {
    label: "対象経費を正確に切り分ける",
    detail:
      "設備費・工事費を分け、公募要領の対象経費定義に沿って整理することで、対象外経費の混入を防ぎ、申請内容の信頼性が高まります。見積りの精度は審査・実績報告の双方で効いてきます。",
  },
  {
    label: "国・自治体・関連補助の整合を取る",
    detail:
      "国のCEV補助金、自治体の上乗せ、蓄電池・太陽光の関連補助の併用可否を整理し、重複受給にならない経費の切り分けを示すと、計画の整合性が評価されます。併用可否は事前確認が前提です。特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "充電の利用目的（社有車/従業員/来客/充電サービス/物流）を明確にしたか",
  "必要な充電器区分（普通・急速・V2H/V2B）・台数・出力を整理したか",
  "充電負荷の契約電力・デマンド・基本料金への影響を試算したか",
  "受電容量の増強要否を確認したか",
  "負荷分散・ピーク制御・時間帯別運用の要否を検討したか",
  "CEV補助金（充電インフラ）の最新公募要領を確認したか",
  "設備費と工事費を分け、対象/対象外経費を切り分けたか",
  "自治体の上乗せ補助・関連補助の併用可否を確認したか",
  "交付決定後に発注するスケジュール管理ができているか",
  "実績報告・維持管理（証憑・処分制限）の準備をしているか",
  "採否は審査・予算によることを前提に代替計画を用意したか",
  "補助率・上限は区分・出力・設置場所・年度公募で変動する前提で計画したか",
];

const faqItems = [
  {
    question: "法人がEV充電設備を入れるとき、どの補助金が中心になりますか？",
    answer:
      "中心となるのは、経済産業省が所管し一般社団法人次世代自動車振興センター（NeV）が執行する「クリーンエネルギー自動車・インフラ導入促進補助金（CEV補助金）」のうち充電インフラ部分です。普通充電器・急速充電器・充放電設備（V2H/V2B）が対象に含まれ、設備費・工事費の一定割合が補助対象になり得ます。ただし補助率・上限は区分・出力・設置場所・年度公募により変動するため、具体的な数値は最新の公募要領でご確認ください。本ページは法人のEV充電インフラ特化の整理で、制度全体像は補助金カテゴリの記事も参照してください（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "普通充電と急速充電で補助の扱いは違いますか？",
    answer:
      "区分により扱いが異なる場合があります。普通充電器と急速充電器では出力や設置場所の前提が異なり、補助率・上限が区分・出力・設置場所・年度公募によって変わります。本ガイドでは具体的な割合や金額を断定しません。実際の補助率・上限は申請時点の公募要領に明記されますので、最新の公募要領による確認が前提です（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "V2H/V2B（充放電設備）も補助の対象になりますか？",
    answer:
      "CEV補助金の充電インフラには充放電設備（V2H/V2B）が含まれます。停電時のBCP、ピーク時間帯の建物への放電によるデマンド抑制、太陽光自家消費との連携などに活用されます。蓄電池・太陽光と組合せる場合は関連補助の対象になる場合もありますが、対象範囲・併用可否は区分・年度公募により変動します。詳細は各制度の公募要領でご確認ください。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "EV充電を増やすと電気料金は上がりますか？",
    answer:
      "充電負荷の増加は、従量料金だけでなく契約電力・デマンド・基本料金に影響し得ます。特に急速充電は瞬時電力が大きく、複数台が同時に充電するとデマンドが跳ね上がり基本料金が増える可能性があります。設置前にデマンド上昇幅を試算し、負荷分散・ピーク制御・時間帯別（TOU）運用といった対策を検討することが重要です。補助金で初期費用を抑えるのと並行して、運用時の電気料金最適化を一体で設計する視点が役立ちます。",
  },
  {
    question: "デマンド（最大需要電力）への影響はどう抑えればよいですか？",
    answer:
      "複数の充電器を束ねて合計出力に上限を設ける負荷分散（ダイナミックロードバランス）や、デマンド監視と連動した出力抑制、夜間など需要の低い時間帯への充電誘導（TOU運用）などが考えられます。一度大きなデマンドを記録すると基本料金が一定期間高止まりする契約形態が一般的なため、同時充電のピークを抑える運用設計が費用面で効いてきます。",
  },
  {
    question: "国の補助金と自治体の補助金は併用できますか？",
    answer:
      "財源や対象設備が異なる場合に併用可能なケースがありますが、同一の設備・経費への国庫補助の重複は原則できません。自治体の上乗せ補助は年度・予算で変動し、可否・条件も自治体ごとに異なります。設備・経費・財源の切り分けが論点になるため、申請前に各実施機関へ確認することが安全です（出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点）。",
  },
  {
    question: "申請すれば必ず補助を受けられますか？",
    answer:
      "いいえ。補助金は対象要件の充足と予算枠の範囲内で採否が決まり、要件を満たしていても予算消化で受付が終了することがあります。採否は審査・予算によるため、確実に採択されるという前提は置かず、複数年度・複数制度の選択肢を残して計画することが現実的です。交付決定前の発注は対象外になりやすい点にも注意してください。",
  },
  {
    question: "発注のタイミングで気をつけることはありますか？",
    answer:
      "多くの補助制度は『交付決定後』に発注・契約した設備が対象です。交付決定前に発注すると対象外になりやすく、特に受電工事や特注設備はリードタイムが長いため、公募スケジュールと調達の順序管理が重要です。発注を急ぐ事情がある場合は、対象範囲を実施機関に必ず確認してください。本ページは2026年度時点の整理ですので、申請前に必ず各実施機関の最新公募要領をご確認ください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "経済産業省（CEV補助金・EV普及政策）", url: "https://www.meti.go.jp/" },
  { name: "次世代自動車振興センター（NeV・CEV補助金執行）", url: "https://www.cev-pc.or.jp/" },
  { name: "資源エネルギー庁（電力・エネルギー政策）", url: "https://www.enecho.meti.go.jp/" },
  { name: "環境省（脱炭素・EV関連施策）", url: "https://www.env.go.jp/" },
];

export default function SubsidyEvChargingInfrastructurePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-ev-charging-infrastructure"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "法人向けEV充電インフラ補助金", url: "https://simulator.eic-jp.org/subsidy-ev-charging-infrastructure" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">法人向けEV充電インフラ補助金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            法人向けEV充電インフラ補助金 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            社有車のEV化、従業員・来客向けの充電、充電サービスの提供など、法人がEV充電インフラを導入する場面が増えています。本ページでは、経済産業省所管・次世代自動車振興センター（NeV）執行のCEV補助金（充電インフラ）を中心に、普通充電・急速充電・V2H/V2B充放電設備の対象、補助率の考え方、申請フロー、そして充電負荷が契約電力・デマンド・基本料金に与える影響と最適化を、代表シナリオを交えて中立的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>CEV補助金（充電インフラ）の対象設備・対象者・補助率の考え方</li>
              <li>普通充電・急速充電・V2H/V2Bの違いと利用目的別の選び方</li>
              <li>充電負荷が契約電力・デマンド・基本料金に与える影響と最適化</li>
              <li>代表シナリオ3件（来客普通充電/物流急速充電/商業施設）</li>
              <li>申請フロー・自治体上乗せ・併用ルール・採択ポイント・12項目チェック</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは法人のEV充電インフラ補助に特化した整理です。補助金制度の全体像は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の全体像</Link>
            、申請の進め方や採択率は{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。特定の電力会社・契約形態を推奨するものではありません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">EV充電インフラ補助の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人のEV充電インフラ導入には、国のCEV補助金（充電インフラ）を中心に、自治体の上乗せ補助、蓄電池・太陽光の関連補助が重層的に関与します。補助で初期費用を抑えるのと並行して、充電負荷が電気料金（基本料金・デマンド）に与える影響を一体で設計することが要点です。
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
              EV充電の基礎は{" "}
              <Link href="/corporate-ev-charging-basics" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人のEV充電 基礎ガイド</Link>
              、電気代の考え方は{" "}
              <Link href="/ev-charging-electricity-cost-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人EV充電の電気代</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象設備（普通・急速・V2H/V2B）と付帯工事</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              CEV補助金（充電インフラ）の対象になり得る設備区分を整理します。普通充電・急速充電・充放電設備（V2H/V2B）と付帯工事では、電気料金への影響も補助の扱いも異なります。補助率・上限は区分・出力・設置場所・年度公募により変動します。
            </p>
            <div className="mt-4 space-y-3">
              {targetEquipment.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              用語の整理は{" "}
              <Link href="/ev-charging-glossary" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">EV充電 用語集</Link>
              、蓄電池・太陽光との組合せは{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・太陽光設備の補助</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象者・対象経費・設置場所の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              誰が・どこに・どの経費で設置するかによって、適用される制度や条件が変わります。対象者要件・対象経費の範囲・設置場所のカテゴリーを公募要領で確認することが、申請区分選定の前提です。
            </p>
            <div className="mt-4 space-y-3">
              {eligibility.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限・対象範囲は区分・出力・設置場所・年度公募により変動します。最新の公募要領による確認が必須です。出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助率・上限の考え方（断定しない）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EV充電インフラの補助率・上限は区分・出力・設置場所・年度公募で変動します。本ガイドでは具体的な割合・金額を断定せず、考え方と確認すべき論点を整理します。実数値は最新の公募要領によります。
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
              投資回収の試算は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算</Link>
              、SII省エネ補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金（総論）</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">EV充電が電気料金に与える影響（デマンド・基本料金）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              充電インフラ導入は初期費用だけでなく、その後の電気料金に継続的に影響します。とくに契約電力・デマンド・基本料金への影響と、時間帯別運用・負荷分散・ピーク制御による最適化を整理します。
            </p>
            <div className="mt-4 space-y-3">
              {electricityImpact.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模別の電気料金影響は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金カリキュレーター</Link>
              で試算でき、オフピーク充電は{" "}
              <Link href="/ev-charging-off-peak-tou" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">EV充電のオフピーク・時間帯別運用</Link>
              、従業員課金は{" "}
              <Link href="/ev-charging-employee-billing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">EV充電の従業員課金</Link>
              も参照ください。なお再エネ賦課金は2026年度4.18円/kWh（確定）で、充電量の増加分にも単価として加算されます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ3件 — 補助とデマンド最適化（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人のEV充電の代表的な3場面で、補助による初期負担の圧縮と、充電増による契約電力・デマンド上昇のTOU・ピーク制御による最適化をBefore/After方式で示します。いずれも代表シナリオ（公開情報・制度趣旨から再構成。数値は目安レンジ）で、採否は審査によります。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((cs) => (
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
            <p className="mt-3 text-xs text-slate-500">
              ※ 上記は代表シナリオ（数値は目安レンジ）です。補助率・上限・採否は区分・出力・設置場所・年度公募・審査により変動します。特定の電力会社・契約形態を推奨するものではありません。出典: 経済産業省/次世代自動車振興センター・各制度公募要領から整理／2026年度時点。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請フロー（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              利用目的の整理から実績報告まで、EV充電インフラ補助の標準的な流れを整理します。受電容量・電気料金影響の確認を早い段階で行い、交付決定前の発注を避けることが要点です。
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
              申請書類の整え方は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付申請書類ガイド</Link>
              、事業計画書は{" "}
              <Link href="/subsidy-business-plan-writing-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金事業計画書の書き方</Link>
              も参照ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自治体の上乗せ補助・併用ルール</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              国のCEV補助金に加え、自治体の上乗せ補助や蓄電池・太陽光の関連補助を組合せられる場合があります。同一設備・同一経費への重複は原則不可で、経費・財源の切り分けが論点です。
            </p>
            <div className="mt-4 space-y-3">
              {stackingItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用の考え方は{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール</Link>
              、自治体制度は{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体補助金の一覧・探し方</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・よくある失敗例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EV充電インフラ補助で失敗しないための注意点を整理します。発注タイミング、受電容量・デマンドの見落とし、対象外経費の混入、実績報告の負担が成否を左右します。
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
              不採択の原因と対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              、補助と契約見直しの優先順位は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択のポイント</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              利用目的と効果の具体性、電気料金影響への配慮、対象経費の正確な切り分け、国・自治体・関連補助の整合が、申請の説得力を高めます。採否は審査・予算による前提で計画します。
            </p>
            <div className="mt-4 space-y-3">
              {approvalPoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              需要側・PPA関連の補助は{" "}
              <Link href="/subsidy-demand-side-ppa" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">需要家主導・PPA関連補助</Link>
              、GX・CN投資促進税制は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制</Link>
              も参照ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">EV充電インフラ補助 活用チェックリスト（12項目）と情報の更新・確認</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              申請前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、対象選定や電気料金影響の見積りに漏れが生じやすくなります。制度は年度ごとに更新されるため、最新の公募要領での確認が前提です。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
              本ページは2026年度時点の整理です。EV充電インフラ補助は制度内容・補助率・上限・公募スケジュールが年度ごとに変わるため、申請前に必ず各実施機関の最新公募要領をご確認ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の電気代見直しは{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代削減の見直しポイント</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-xl font-semibold text-slate-900">シミュレーターで充電導入後の電気代を試算する</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              EV充電を導入した場合の電気料金影響を、業種・規模・契約条件に当てはめて試算できます。補助で初期費用を抑えつつ、契約電力・デマンド・基本料金への影響を定量化し、TOU運用やピーク制御の効果を見立てることで、過不足のない設置計画につなげられます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・契約電力の状況を確認する</li>
              <li>充電負荷の追加によるデマンド・基本料金の上昇幅を試算する</li>
              <li>時間帯別運用・負荷分散・ピーク制御による平準化効果を見立てる</li>
              <li>太陽光自家消費・V2B連携を含めた電気の購入量への影響を確認する</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、充電設備の出力・台数・運用の検討にご活用ください。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/industry-electricity-calculator", title: "業種別電気料金カリキュレーター", description: "充電負荷を含む電気代・デマンド影響を試算。" },
              { href: "/subsidies-overview", title: "補助金・助成金の全体像", description: "法人が使える補助金の総論。" },
              { href: "/corporate-ev-charging-basics", title: "法人のEV充電 基礎ガイド", description: "充電器の種類と導入の基礎。" },
              { href: "/ev-charging-electricity-cost-business", title: "法人EV充電の電気代", description: "充電にかかる電気料金の考え方。" },
              { href: "/ev-charging-off-peak-tou", title: "EV充電のオフピーク・時間帯別運用", description: "TOUでコストを平準化する運用。" },
              { href: "/ev-charging-employee-billing", title: "EV充電の従業員課金", description: "従業員向け充電の課金の整理。" },
              { href: "/ev-charging-glossary", title: "EV充電 用語集", description: "充電インフラ関連の用語整理。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助", description: "V2H/V2Bと組合せる関連補助。" },
              { href: "/subsidy-demand-side-ppa", title: "需要家主導・PPA関連補助", description: "再エネ調達と充電の組合せ。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×関連補助の併用可否。" },
              { href: "/subsidy-local-government-list", title: "自治体補助金の一覧・探し方", description: "上乗せ補助の探し方。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数の試算。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付申請書類ガイド", description: "申請書類の整え方。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択の原因と再申請。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "補助と契約見直しの順序。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代削減の見直しポイント", description: "電気代見直しの実務。" },
            ]}
          />

          <ContentCta
            heading="EV充電インフラ補助と電気代影響を専門家に相談する"
            description="CEV補助金（充電インフラ）の対象選定、自治体上乗せの併用、そして充電増による契約電力・デマンド・基本料金への影響は、設置計画と運用設計が絡み合います。まずシミュレーターで電気代影響を試算し、必要に応じて中立的な立場の専門家へご相談ください。特定の電力会社・契約形態を推奨するものではありません。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別カリキュレーターで試算する" },
              { href: "/subsidies-overview", label: "補助金の全体像を見る" },
              { href: "/", label: "シミュレーターで診断する" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="EV充電インフラの導入、補助金と電気代の両面で相談しませんか？"
            description="充電器の出力・台数の選定、CEV補助金・自治体補助の併用、そしてデマンド・基本料金への影響管理は専門知識を要します。エネルギー情報センターは中立的立場で、EV充電インフラ導入と電気代最適化の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
