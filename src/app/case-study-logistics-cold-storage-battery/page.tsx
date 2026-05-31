import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "冷凍冷蔵物流の蓄電池併用事例｜冷凍負荷のピークシフトとBCP強化（代表シナリオ）";
const pageDescription = "冷凍冷蔵物流センターが、連続する冷凍負荷に対し蓄電池併用でピークシフト・デマンド削減とBCP強化を両立した代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-logistics-cold-storage-battery";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["冷凍冷蔵 物流 電気代","蓄電池 ピークシフト","冷凍倉庫 デマンド","物流 BCP 蓄電池","ピークカット 事例"],
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

const h1Text = "冷凍冷蔵物流×蓄電池：ピークシフトとBCPを両立した代表事例";
const breadcrumbTitle = "冷凍冷蔵物流×蓄電池の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。冷凍冷蔵物流センターは庫内温度を一定に保つため冷凍負荷が連続し、夏季はとくにデマンドが跳ね上がりやすい業種です。本ケースでは、蓄電池併用によるピークシフト・ピークカットでデマンド料金を抑えつつ、停電時の保冷を支えるBCPを両立した削減アプローチを、規模別の代表シナリオとともに中立的に整理します。数値は業界統計と公開事例から再構成した目安です。";
const d1CtaLead = "自社の冷凍冷蔵物流センターが、この代表シナリオと似た負荷構造かどうかは、業種特性を踏まえた試算から把握できます。冷凍負荷の比率や夏季のピーク、契約区分を入力すれば、業種別電気代計算機でおおよその電気代水準と削減余地の目安を確認できます。まずは現状の位置づけを数値で捉え、蓄電池や太陽光の検討の出発点にしてください。";
const simulatorCtaLead = "電気料金がこの先どこまで上がりうるか、自社の契約区分と使用量で具体的に把握しておくことが、蓄電池や太陽光への投資判断の前提になります。法人向けシミュレーターでは、燃料費調整や単価変動を踏まえた料金上昇リスクを試算でき、冷凍冷蔵物流のように電気代比率が高い施設ほど、見直しの優先度を数値で確認する意義があります。まずは現状のリスクを把握してください。";
const whatYouLearn = ["冷凍冷蔵物流センター固有の負荷特性とデマンド料金が膨らむ仕組み","蓄電池併用によるピークシフト・ピークカットでデマンドを抑える考え方","停電時に保冷を維持するBCP視点と電気代削減を両立させる設計の勘所","冷凍庫主体・冷蔵主体・太陽光併設・多温度帯など条件別の代表シナリオと削減率レンジ","補助金活用やデータ収集から効果検証までの実行プロセスと中立的な判断観点"];
const premise = [{"label":"業種特性(冷凍冷蔵物流)","detail":"冷凍冷蔵物流センターは庫内を氷点下から摂氏数度の範囲で連続的に維持する必要があり、冷凍機・凍結機・冷却ファンが昼夜を問わず稼働します。入出庫時の扉開閉や荷動きで熱負荷が変動し、霜取り(デフロスト)サイクルでも一時的に電力が増えます。電力消費の大半を冷凍負荷が占め、わずかな庫内温度上昇でも品質リスクに直結するため、安易な運転停止での節電が難しい構造です。"},{"label":"規模・施設構成","detail":"本ケースの代表モデルは延床数千平方メートル級の物流センターで、冷凍室・冷蔵室・前室(ドックシェルター)・事務所を備えます。冷凍機はインバータ機と定速機が混在し、屋上や設備棟に室外機が集約されています。受電は高圧が中心で、契約電力は数百キロワット規模を想定します。荷主の在庫量や繁忙期によって稼働率が変動する点も前提に置いています。"},{"label":"契約区分","detail":"想定する契約区分は高圧電力(業務用)で、料金は基本料金(契約電力連動)と電力量料金、燃料費調整、再エネ賦課金で構成されます。契約電力は直近一年の最大需要電力(デマンド)で決まる方式が一般的なため、一度でも高いピークを記録すると基本料金が一年間高止まりします。冷凍負荷の連続性に加え、このデマンド決定方式が電気代を押し上げる構造的要因になります。"},{"label":"負荷パターン・季節性","detail":"冷凍負荷はベース部分が大きく、深夜も一定の電力を消費し続けるのが特徴です。一方で外気温が上がる夏季は凝縮温度が上昇して冷凍機の効率が落ち、消費電力とデマンドが顕著に増えます。日中の入出庫ピークと外気温ピークが重なる午後にデマンドが最大化しやすく、ここをいかに抑えるかが料金最適化の焦点になります。冬季はベース負荷中心で比較的安定します。"},{"label":"コスト構造","detail":"電気代は物流センターの運営コストのなかでも大きな比率を占め、とくに冷凍負荷が中心の施設では人件費に次ぐ固定的支出になりがちです。基本料金(デマンド連動)と電力量料金の双方が大きく、夏季の効率低下と燃料費調整の変動が上振れ要因です。設備が老朽化すると効率が落ちて電力量がさらに増えるため、運用改善と設備更新・蓄電池の両面から構造的に見直す余地があります。"}];
const beforeState = [{"label":"夏季デマンドの突出による基本料金高止まり","detail":"外気温の高い日の午後に冷凍機がフル稼働し、入出庫ピークと重なって最大需要電力が突出していました。デマンドは直近一年の最大値で契約電力が決まるため、年に数回の突発的なピークが一年間の基本料金を押し上げ、稼働実態に比べて固定費が割高になっていました。ピークの発生要因を可視化できておらず、抑制策も打てていない状態でした。"},{"label":"停電・瞬時電圧低下に対する保冷BCPの脆弱性","detail":"停電や瞬時電圧低下が起きると冷凍機が停止し、庫内温度の上昇による商品劣化や廃棄のリスクを抱えていました。非常用発電機はあっても燃料備蓄や起動時間に制約があり、短時間の停電や復電時の突入電流に十分対応できていませんでした。BCPの観点で冷凍負荷を継続させる電源の備えが手薄で、災害時の事業継続に不安が残っていました。"},{"label":"設備運用のばらつきと効率低下","detail":"冷凍機の設定温度や運転台数が現場判断で固定化され、外気温や在庫量に応じた最適制御ができていませんでした。デフロストの頻度やタイミングも見直されず、霜の付着で熱交換効率が落ちて無駄な電力を消費していました。設備が部分的に老朽化し、インバータ化されていない定速機が効率低下の一因になっていた点も課題でした。"},{"label":"電力データの未活用と契約の見直し不足","detail":"三十分ごとのデマンドデータや時間帯別の使用実態を継続的に分析する仕組みがなく、どこに削減余地があるか定量的に把握できていませんでした。契約電力や料金メニューも長年見直されておらず、現在の負荷パターンに料金プランが合っているかを検証していませんでした。結果として、削減の打ち手が場当たり的になりがちでした。"}];
const approaches = [{"name":"蓄電池によるピークシフト・ピークカット","role":"デマンド料金の構造的削減","detail":"夜間など需要の低い時間帯に蓄電池を充電し、外気温と入出庫が重なる午後のピーク時に放電して系統からの受電を抑えます。これにより最大需要電力(デマンド)の山を平準化し、契約電力の上昇を防いで基本料金を抑える狙いです。冷凍負荷のベースは大きいものの、ピーク部分の数十キロワットを蓄電池でカットするだけでもデマンド低減効果が見込め、料金の高止まりを構造的に緩和できます。"},{"name":"停電時の保冷を支えるBCP電源化","role":"事業継続性の確保","detail":"蓄電池を非常用電源として位置づけ、停電や瞬時電圧低下の際に冷凍機の重要負荷へ電力を供給して庫内温度の上昇を抑えます。復電までの時間や非常用発電機の起動を蓄電池がつなぐことで、商品劣化や廃棄のリスクを下げます。電気代削減のための平常時のピークカットと、災害時の保冷維持というBCPを一台の蓄電池で兼ねる設計が、投資対効果を高める考え方です。"},{"name":"太陽光発電(自家消費)との併設","role":"電力量料金の削減と再エネ調達","detail":"屋上や駐車場の空きスペースに太陽光発電を設置し、発電した電力を施設内で自家消費します。日中の冷凍負荷と発電のピークが比較的重なるため、系統からの購入電力量を減らして電力量料金を抑えられます。余剰や変動は蓄電池で吸収し、自家消費率を高めます。再生可能エネルギーの自家調達は、コスト面に加えて荷主からの環境要請への対応という側面も持ちます。"},{"name":"冷凍機の運用最適化とBEMS導入","role":"ベース負荷そのものの低減","detail":"BEMS(ビルエネルギー管理システム)で庫内温度・受電電力・室外機の状態を可視化し、外気温や在庫量に応じて運転台数や設定温度を最適化します。デフロストのタイミング適正化、凝縮圧力の制御、扉開閉の管理などで無駄な電力を削り、蓄電池でカットすべきピーク自体を小さくします。設備運用の改善は投資が比較的小さく、蓄電池・太陽光と組み合わせる土台になります。"}];
const caseScenarios = [{"title":"冷凍庫主体の中規模センター(氷点下中心)","before":"冷凍負荷のベースが大きく、夏季午後のデマンドが突出。基本料金が一年間高止まりし、電気代が運営コストを圧迫していました。","after":"蓄電池でピーク時の受電を抑えてデマンドを平準化。運用最適化と組み合わせ、電気代全体で代表シナリオとしておおむね一割前後の削減レンジが見込めます。","result":"デマンド低減による基本料金の抑制が中心で、削減効果は月数十万円規模となる目安です。実数値は契約条件・使用実態により異なります。"},{"title":"冷蔵主体の小規模センター(摂氏数度中心)","before":"冷蔵中心でベース負荷は比較的軽いものの、夏季のピークと入出庫の重なりでデマンドが上振れしていました。","after":"比較的小容量の蓄電池でピークカットを行い、BEMSで設定温度と運転を適正化。電気代全体で代表シナリオとしておおむね数パーセントから一割程度の削減レンジが見込めます。","result":"投資規模に見合うデマンド抑制が中心で、削減効果は月十数万円規模となる目安です。実数値は契約条件・使用実態により異なります。"},{"title":"太陽光併設の大規模センター(自家消費型)","before":"大規模ゆえ電力量料金とデマンドの双方が大きく、屋上の遊休スペースを活用できていませんでした。","after":"太陽光の自家消費で日中の購入電力量を削減し、蓄電池で余剰吸収とピークカットを両立。電気代全体で代表シナリオとして一割から二割程度の削減レンジが見込めます。","result":"電力量料金とデマンドの両面削減に再エネ調達が加わり、削減効果は月数十万円から百万円規模となる目安です。実数値は日射条件・契約条件により異なります。"},{"title":"多温度帯センター(冷凍・冷蔵・常温混在)","before":"温度帯ごとに負荷特性が異なり、ピークの発生時間が分散して全体のデマンド管理が難しい状態でした。","after":"BEMSで温度帯別の負荷を可視化し、蓄電池の放電を全体ピークに合わせて制御。運用最適化と併用し、電気代全体で代表シナリオとしておおむね一割前後の削減レンジが見込めます。","result":"温度帯横断のピーク平準化が効き、削減効果は月数十万円規模となる目安です。実数値は施設構成・契約条件により異なります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterや削減率は、業界統計と公開事例から再構成した代表シナリオの目安です。特定企業の実績ではなく、精密な金額を断定するものではありません。削減率はパーセントのレンジや月数十万円規模といった幅で示し、実数値は契約条件・使用実態・季節により異なる旨を前提としています。"},{"label":"出典の考え方","detail":"前提となる負荷特性・季節性・補助制度の枠組みは、経済産業省・資源エネルギー庁の公開資料、SII(環境共創イニシアチブ)の補助事業や採択事例集、業界統計から再構成しています(2025年10月時点・代表シナリオ)。制度内容や補助率は年度ごとに変わるため、最新の公募要領で確認することを前提にしています。"},{"label":"削減率レンジの根拠","detail":"削減効果は、冷凍負荷の構成比・ピークの突出度・蓄電池容量・太陽光の有無で大きく変わります。本記事では条件別に数パーセントから二割程度のレンジで示し、デマンド低減による基本料金の抑制と、自家消費による電力量料金の削減を区別して整理しています。投資回収は補助金の有無や電力単価で変動するため断定を避けています。"},{"label":"蓄電池容量・BCP効果の前提","detail":"蓄電池の容量は、平常時にカットしたいピーク幅と、停電時に維持したい重要負荷の時間から逆算する前提です。保冷を支えるBCP効果も施設の断熱性能・庫内温度・外気温で変動するため、保冷可能時間を一律には断定していません。実際の容量設計は専門事業者による負荷計算と相見積を経て決めることを前提にしています。"}];
const process = [{"label":"電力データの収集と見える化","detail":"まず三十分ごとのデマンドデータと時間帯別の使用実態を一定期間収集し、季節や曜日による負荷変動、ピークの発生時間と要因を見える化します。冷凍機ごとの消費電力やデフロストのタイミングも把握し、どこに削減余地があるかを定量的に整理します。この基礎データが、蓄電池容量や太陽光規模を適正に設計する出発点になります。"},{"label":"負荷分析と削減シナリオの設計","detail":"収集したデータをもとに、ピークカットで抑えられるデマンド幅、自家消費で減らせる電力量、運用最適化の余地を試算します。冷凍負荷のベースとピークを分離し、蓄電池・太陽光・BEMSをどう組み合わせれば費用対効果が高いかを複数シナリオで比較します。BCPで維持したい重要負荷も洗い出し、平常時と非常時の両面で容量を検討します。"},{"label":"相見積と補助金の検討","detail":"蓄電池・太陽光・制御システムについて複数事業者から相見積を取り、容量・保証・施工・保守の条件を横並びで比較します。SIE関連の補助制度やGX関連の支援策など、活用できる補助金の公募要領を確認し、申請スケジュールと投資回収への影響を整理します。中立的に複数案を比較することが、過大投資や過小設計を避ける鍵になります。"},{"label":"意思決定と導入・効果検証","detail":"経営層・現場・荷主の視点を踏まえて投資判断を行い、導入後は再びデマンドデータと電気代を継続的にモニタリングします。想定した削減レンジに収まっているか、ピークカットが機能しているか、BCP電源として正しく動作するかを検証し、運用設定を調整します。効果検証のサイクルを回すことで、削減効果を定着・改善させていきます。"}];
const viewpoints = [{"label":"ピーク削減と保冷維持の両立で見る","detail":"蓄電池の投資は、平常時のデマンド削減という経済効果と、停電時に保冷を維持するBCP効果の両面で評価することが重要です。電気代削減だけで回収を判断すると過小評価になりやすく、逆にBCP価値を過大に見積もると投資が膨らみます。両方の便益を分けて整理し、自社にとっての優先度に応じて容量を判断する視点が中立的です。"},{"label":"ベース負荷の低減を先に検討する","detail":"冷凍負荷のベースが大きいまま蓄電池や太陽光を導入すると、必要な容量が過大になりがちです。まずBEMSや運用最適化でベース負荷とピークそのものを小さくし、その上で蓄電池容量を設計する順序が費用対効果を高めます。設備更新やインバータ化による効率改善も、投資の前提として検討する価値があります。"},{"label":"条件別に効果が変わることを前提にする","detail":"削減効果は冷凍主体か冷蔵主体か、太陽光の有無、多温度帯かどうかで大きく変わります。他社事例の削減率をそのまま自社に当てはめるのではなく、自社の負荷データに基づいて試算することが大切です。本記事のシナリオも代表的な目安であり、実際の効果は施設ごとに検証する必要があります。"},{"label":"補助金の有無を投資回収に織り込む","detail":"蓄電池や太陽光の投資回収は、活用できる補助金の有無で大きく変わります。補助制度は年度ごとに公募内容や補助率が変わるため、最新の公募要領を確認し、申請可否やスケジュールを投資判断に織り込む必要があります。補助金ありきにせず、補助がない場合の回収年数も併せて確認しておくと判断が安定します。"},{"label":"中立的に複数案を比較する","detail":"蓄電池・太陽光・制御システムは事業者ごとに容量提案や価格が異なります。一社の提案だけで決めず、複数の相見積を横並びで比較し、容量・保証・保守・実績を総合的に評価することが重要です。特定の製品や電力会社を前提にせず、自社の負荷データと目的に照らして中立的に選定する姿勢が、過大投資を防ぎます。"}];
const cautions = [{"label":"蓄電池は万能ではない","detail":"蓄電池はピークカットとBCPに有効ですが、冷凍負荷のベース全体を長時間まかなえるわけではありません。容量には限りがあり、長時間の停電では非常用発電機など他の電源との組み合わせが必要です。電気代削減の効果もデマンドの突出度に依存するため、ピークが小さい施設では効果が限定的になる点に注意が必要です。"},{"label":"削減率を一律に期待しない","detail":"本記事の削減率レンジは代表シナリオの目安であり、すべての施設で同じ効果が出るわけではありません。冷凍主体か冷蔵主体か、ピークの突出度、太陽光の有無で結果は変わります。他社の実績や広告の数値をそのまま自社に当てはめると期待値とのずれが生じやすいため、自社データに基づく試算を前提にしてください。"},{"label":"保冷可能時間の過信を避ける","detail":"蓄電池による停電時の保冷可能時間は、施設の断熱性能・庫内温度・外気温・負荷状況で大きく変わります。カタログ上の容量だけで保冷時間を判断すると、実際の災害時に想定より早く電力が尽きるおそれがあります。重要負荷の優先順位や運転制御を含めて、現実的な保冷シナリオで設計することが大切です。"},{"label":"設備更新との重複投資に注意","detail":"老朽化した定速機を残したまま蓄電池や太陽光に投資すると、効率の悪い設備を前提に過大な容量を入れてしまう場合があります。冷凍機の更新やインバータ化の計画と蓄電池導入のタイミングを調整し、ベース負荷を下げてから容量を設計することで、重複投資や過大投資を避けられます。"},{"label":"補助金前提の計画はリスクがある","detail":"補助金を前提に投資計画を組むと、採択されなかった場合や公募が終了した場合に回収計画が崩れることがあります。補助制度は年度ごとに変わり、申請しても採択されるとは限りません。補助ありの場合とない場合の双方で投資回収を試算し、補助金は加点要素として扱う慎重さが必要です。"}];
const checklist = ["三十分デマンドデータを一定期間収集し可視化する","夏季午後のピーク発生時間と要因を特定する","冷凍負荷のベースとピークを分離して把握する","デフロストの頻度とタイミングを点検する","冷凍機の設定温度と運転台数の最適化余地を確認する","定速機のインバータ化など設備更新の要否を検討する","停電時に維持したい重要負荷を洗い出す","現実的な外気温と庫内温度で保冷シナリオを設計する","蓄電池容量をピーク幅とBCP要件から逆算する","太陽光の自家消費可能量を屋上面積から試算する","複数事業者から相見積を取り横並びで比較する","補助金あり・なし双方で投資回収年数を試算する"];
const simulatorCtaBullets = ["燃料費調整や単価変動を踏まえた電気料金上昇リスクを試算できます","冷凍負荷中心で電気代比率が高い施設の見直し優先度を数値で把握できます","デマンド削減や自家消費による効果を検討する出発点になります","特定の電力会社や製品を推奨せず中立的な目安として活用できます"];
const faqItems = [{"question":"この事例は実在企業ですか。掲載されている数値は正確ですか。","answer":"本記事の事例は実在企業ではなく、業界統計や公開事例から再構成した架空企業の代表シナリオです。Before/Afterや削減率は精密な金額の断定ではなく、パーセントのレンジや月数十万円規模といった目安として示しています。実際の数値は契約条件・冷凍負荷の構成・季節・使用実態により異なります。自社の状況は、実データに基づく試算で個別に確認することをおすすめします。"},{"question":"この記事は特定の電力会社や蓄電池メーカーを推奨しているのですか。","answer":"いいえ。本記事は中立・非営利の立場から、冷凍冷蔵物流における削減の考え方を整理したものであり、特定の電力会社・契約形態・製品を推奨するものではありません。蓄電池や太陽光の選定は、複数事業者からの相見積を横並びで比較し、自社の負荷データと目的に照らして判断することが重要です。中立的に複数案を比較する姿勢が、過大投資を避けることにつながります。"},{"question":"なぜ冷凍冷蔵物流センターは電気代が高くなりやすいのですか。","answer":"庫内温度を連続的に維持するため冷凍機が昼夜を問わず稼働し、ベース負荷が大きいことが主因です。さらに夏季は外気温の上昇で凝縮温度が上がり、冷凍機の効率が落ちて消費電力とデマンドが増えます。高圧契約では直近一年の最大需要電力で基本料金が決まるため、夏季午後のピークが一年間の固定費を押し上げます。負荷の連続性とデマンド決定方式の双方が、電気代を高めやすい構造的要因です。"},{"question":"蓄電池でどのように電気代を下げられるのですか。","answer":"需要の低い夜間などに蓄電池を充電し、外気温と入出庫が重なる午後のピーク時に放電して系統からの受電を抑えます。これにより最大需要電力(デマンド)の山を平準化し、契約電力の上昇を防いで基本料金を抑えます。冷凍負荷のベースは大きいものの、ピーク部分の数十キロワットをカットするだけでもデマンド低減効果が見込めます。ただし容量に限りがあるため、ベース負荷全体をまかなうものではありません。"},{"question":"停電時に蓄電池でどのくらい保冷を維持できますか。","answer":"保冷可能時間は施設の断熱性能・庫内温度・外気温・維持する重要負荷の大きさによって大きく変わるため、一律には断定できません。蓄電池は復電までの時間や非常用発電機の起動をつなぐ役割が中心で、長時間の停電では他の電源との組み合わせが前提になります。実際の保冷シナリオは、現実的な外気温と負荷状況で容量を逆算し、重要負荷の優先順位を含めて設計することが大切です。"},{"question":"太陽光発電は冷凍冷蔵物流と相性が良いのですか。","answer":"日中の冷凍負荷と太陽光の発電ピークが比較的重なるため、発電した電力を自家消費して系統からの購入電力量を減らしやすい点で相性は良いといえます。余剰や変動は蓄電池で吸収して自家消費率を高めます。屋上や駐車場の遊休スペースを活用できる施設では検討余地が大きい一方、効果は日射条件や屋根の面積・構造に左右されるため、自家消費可能量を試算したうえで判断することが重要です。"},{"question":"蓄電池や太陽光の導入に補助金は使えますか。","answer":"蓄電池・太陽光・省エネ設備には、SII(環境共創イニシアチブ)の補助事業やGX関連の支援策など活用できる制度がある場合があります。ただし補助内容や補助率は年度ごとに変わり、申請しても採択されるとは限りません。最新の公募要領を確認し、申請スケジュールを投資判断に織り込む必要があります。補助金を前提にしすぎず、補助がない場合の回収年数も併せて試算しておくと計画が安定します。"},{"question":"まず何から着手すればよいですか。","answer":"最初の一歩は、三十分ごとのデマンドデータと時間帯別の使用実態を一定期間収集し、ピークの発生時間と要因を見える化することです。冷凍負荷のベースとピークを分離して把握すれば、運用最適化で下げられる部分と蓄電池でカットすべき部分が見えてきます。その上でBEMSや設備更新でベース負荷を下げ、蓄電池・太陽光の容量を設計し、複数事業者の相見積で中立的に比較する順序が効果的です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/cold-storage-electricity-cost-review","title":"冷蔵倉庫の電気代見直し","description":"冷却負荷の電力構造。"},{"href":"/frozen-food-electricity-cost-review","title":"冷凍食品工場の電気代見直し","description":"冷凍負荷の削減観点。"},{"href":"/distribution-center-electricity-cost-review","title":"物流センターの電気代見直し","description":"庫内・荷役の電力。"},{"href":"/ibaraki-logistics-electricity-cost","title":"茨城の物流施設の電気料金","description":"業種×地域クロス。"},{"href":"/kanagawa-logistics-warehouse-electricity-cost","title":"神奈川の物流倉庫の電気料金","description":"業種×地域クロス。"},{"href":"/subsidy-logistics-strategy","title":"物流の補助金活用戦略","description":"省エネ投資の補助金活用。"},{"href":"/battery-storage-bcp-peak-cut-hybrid","title":"蓄電池のBCP・ピークカット活用","description":"蓄電池の多目的活用。"},{"href":"/battery-electricity-cost-benefit","title":"蓄電池の費用対効果","description":"蓄電池導入の経済性。"},{"href":"/case-study-warehouse-auto-rooftop-pv","title":"自動倉庫×屋根太陽光の事例","description":"物流の自家消費比較。"},{"href":"/case-study-logistics-solar-integration","title":"物流倉庫：太陽光併設の事例","description":"既存の物流削減事例。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyLogisticsColdStorageBatteryPage() {
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
