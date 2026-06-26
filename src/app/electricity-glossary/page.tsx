import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "法人電気料金の総合用語集 200+ 用語｜契約・市場・設備・BCP・制度を1ページで";
const pageDescription =
  "高圧契約・デマンド・BCP・国際エネルギー指標・電力制度・エネマネ DX・契約条項・JEPX 市場・設備機器の 9 分野 200+ 用語を 1 ページに集約。受変電設備からマイクログリッド、容量市場まで、法人電気料金の専門用語を体系的に確認できます。";
const pageUrl = "https://simulator.eic-jp.org/electricity-glossary";
const publishedDate = "2026-05-30";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力用語",
    "電気代用語",
    "用語集",
    "法人電気料金 用語",
    "高圧契約 用語",
    "デマンド 用語",
    "BCP 用語",
    "JEPX 用語",
    "電力制度 用語",
    "BEMS FEMS",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/glossary", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/glossary"],
  },
};

const faqItems = [
  {
    question: "用語集はどう使うのが効率的ですか？",
    answer:
      "目次（H2 9 セクション）から自社契約に関係する分野（受変電・デマンド・契約条項など）に直接ジャンプできます。各セクション内の用語は契約書・見積書・請求書で実際に登場する順に並べています。",
  },
  {
    question: "高圧と特別高圧で出てくる用語が違うのはなぜ？",
    answer:
      "高圧（50〜2,000 kW）はキュービクル中心の受変電設備、特別高圧（2,000 kW 超）は専用変電所と容量市場関連の用語が増えます。本用語集は両方を統合し、受電区分の違いを併記しています。",
  },
  {
    question: "BEMS・FEMS・SCADA の違いは？",
    answer:
      "BEMS はビル向け、FEMS は工場向けのエネマネシステム。SCADA は監視制御・データ収集システムで、プラント・系統運用で使用されます。エネマネ・DX 用語セクション（H2-6）で詳細を解説しています。",
  },
  {
    question: "再エネ賦課金や容量拠出金など制度系の用語はどこ？",
    answer:
      "規制・政策用語（H2-5）に集約しています。市場制度（容量市場・需給調整市場・先物市場）と関連機関（OCCTO・JEPX・電力ガス取引監視等委員会）も同セクションです。",
  },
  {
    question: "JEPX や卸電力取引市場の用語はどこ？",
    answer:
      "市場・JEPX 関連（H2-8）に集約しています。スポット市場・時間前市場・先渡し市場・先物・容量市場・需給調整市場の構造と、それぞれが法人電気料金に与える影響を整理しています。",
  },
  {
    question: "用語集はどのくらいの頻度で更新されていますか？",
    answer:
      "制度改正・新市場開設に応じて随時更新しています。各用語の最終確認日は本記事末尾の公開日を参照してください。最新の制度・数値は出典元（経産省・OCCTO・JEPX 等）で必ずご確認ください。",
  },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（電力小売制度・電気料金しくみ）", url: "https://www.enecho.meti.go.jp" },
  { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp/" },
  { name: "JEPX 一般社団法人 日本卸電力取引所", url: "https://www.jepx.org/" },
];

export default function ElectricityGlossaryPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "用語集", url: "https://simulator.eic-jp.org/articles/glossary" },
          { name: "法人電気料金の総合用語集" },
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
          <Link href="/articles/glossary" className="underline-offset-2 hover:underline">用語集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">法人電気料金の総合用語集</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人電気料金の総合用語集 200+ 用語</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約・デマンド管理・BCP・国際エネルギー指標・電力制度・エネマネ DX・契約条項・JEPX 市場・設備機器の 9 分野を 1 ページに集約。契約書・見積書・請求書で頻出する用語を体系的に確認できます。
          </p>
          <nav aria-label="目次" className="mt-4 rounded-lg border border-sky-300 bg-white p-4 text-sm leading-7 text-slate-700">
            <p className="font-semibold text-slate-900">目次（9 分野）</p>
            <ol className="mt-2 list-decimal space-y-1 pl-5">
              <li><Link href="#high-voltage" className="text-sky-700 underline-offset-2 hover:underline">受変電・契約電力関連（高圧・特別高圧）</Link></li>
              <li><Link href="#demand-power" className="text-sky-700 underline-offset-2 hover:underline">デマンド・力率関連</Link></li>
              <li><Link href="#energy-bcp" className="text-sky-700 underline-offset-2 hover:underline">BCP・非常用電源関連</Link></li>
              <li><Link href="#international-energy" className="text-sky-700 underline-offset-2 hover:underline">国際エネルギー市場用語</Link></li>
              <li><Link href="#regulation-policy" className="text-sky-700 underline-offset-2 hover:underline">電力制度・政策用語</Link></li>
              <li><Link href="#energy-management" className="text-sky-700 underline-offset-2 hover:underline">エネルギーマネジメント・DX 用語</Link></li>
              <li><Link href="#contract-terms" className="text-sky-700 underline-offset-2 hover:underline">契約条項・約款関連</Link></li>
              <li><Link href="#market-terms" className="text-sky-700 underline-offset-2 hover:underline">市場・JEPX 関連</Link></li>
              <li><Link href="#equipment-terms" className="text-sky-700 underline-offset-2 hover:underline">設備・機器関連</Link></li>
            </ol>
          </nav>
        </header>

        <section className="mt-6 space-y-6">
          <section id="high-voltage" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">①受変電・契約電力関連（高圧・特別高圧）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">高圧・特別高圧契約特有の受変電設備・保護機器・契約方式の主要用語を体系的に整理しました。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">受変電設備の用語</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">キュービクル</dt><dd className="mt-1">高圧受変電設備を金属製の箱に収めたユニット。屋外・屋上設置が一般的で、6.6 kV などの高圧電力を低圧に変換する。</dd></div>
              <div><dt className="font-semibold text-slate-900">PAS（柱上気中開閉器）</dt><dd className="mt-1">高圧引込線の柱上に設置され、事故時に系統から遮断する開閉器。地絡継電器との連携で動作。</dd></div>
              <div><dt className="font-semibold text-slate-900">UGS（地中線用ガス開閉器）</dt><dd className="mt-1">地中引込配電方式で使われる SF6 ガス絶縁式の高圧開閉器。</dd></div>
              <div><dt className="font-semibold text-slate-900">VCB（真空遮断器）</dt><dd className="mt-1">真空中で電気接点を開閉する遮断器。高圧設備の主遮断装置として広く使われる。</dd></div>
              <div><dt className="font-semibold text-slate-900">LBS（負荷開閉器）</dt><dd className="mt-1">通常電流の開閉が可能な開閉器。VCB より安価で、定期的な開閉操作向け。</dd></div>
              <div><dt className="font-semibold text-slate-900">VT（計器用変圧器）/ CT（計器用変流器）</dt><dd className="mt-1">高圧の電圧・電流を計器・継電器が扱える低い値に変換する装置。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">保護・検知の用語</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">OCR（過電流継電器）</dt><dd className="mt-1">規定値を超える電流を検出して遮断器を動作させる継電器。</dd></div>
              <div><dt className="font-semibold text-slate-900">DGR（地絡方向継電器）</dt><dd className="mt-1">地絡事故の方向を判別して動作する継電器。需要家側の事故と系統側を区別。</dd></div>
              <div><dt className="font-semibold text-slate-900">ZCT（零相変流器）</dt><dd className="mt-1">地絡電流を検出するための CT。</dd></div>
              <div><dt className="font-semibold text-slate-900">漏電遮断器</dt><dd className="mt-1">感電・漏電事故防止のため、漏電検出時に自動遮断する遮断器。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">契約・運用の用語</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">契約電力</dt><dd className="mt-1">需要家と電力会社が契約する最大需要電力。基本料金算定の基礎。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピークデマンド</dt><dd className="mt-1">30 分単位の最大需要電力。月間最大値が契約電力となる場合がある。</dd></div>
              <div><dt className="font-semibold text-slate-900">受電方式</dt><dd className="mt-1">電力を引き込む方式。1 回線・2 回線・スポットネットワーク等の選択肢。</dd></div>
              <div><dt className="font-semibold text-slate-900">自家用電気工作物</dt><dd className="mt-1">高圧以上の電気を受電する設備。経産省への各種届出と保安管理が必要。</dd></div>
              <div><dt className="font-semibold text-slate-900">電気主任技術者</dt><dd className="mt-1">高圧設備を管理する有資格者。第 1 種〜第 3 種で扱える電圧範囲が異なる。</dd></div>
              <div><dt className="font-semibold text-slate-900">保安規程</dt><dd className="mt-1">自家用電気工作物の保安・運用ルール。提出義務あり。</dd></div>
            </dl>
          </section>

          <section id="demand-power" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">②デマンド・力率関連</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">高圧契約では「デマンド」管理が電気代を大きく左右します。30 分値・最大需要・力率・契約電力の決定方式まで整理しました。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">デマンドの基本</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">デマンド</dt><dd className="mt-1">30 分単位の平均需要電力（kW）。瞬間電力ではなく 30 分平均で評価。</dd></div>
              <div><dt className="font-semibold text-slate-900">最大需要電力</dt><dd className="mt-1">月間で最も高かったデマンド値。基本料金算定の元になる。</dd></div>
              <div><dt className="font-semibold text-slate-900">デマンド監視装置</dt><dd className="mt-1">30 分デマンドを監視し、契約電力超過を予防する装置。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">契約電力の決定方式</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">実量制</dt><dd className="mt-1">過去 12 ヶ月の最大デマンドで契約電力を自動更新する方式。</dd></div>
              <div><dt className="font-semibold text-slate-900">協議制</dt><dd className="mt-1">需要家と電力会社の協議で契約電力を決定する方式。設備容量で算定。</dd></div>
              <div><dt className="font-semibold text-slate-900">基本料金単価</dt><dd className="mt-1">契約電力 1 kW あたりの基本料金。エリア・電圧で異なる。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">力率と割引</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">力率</dt><dd className="mt-1">皮相電力に対する有効電力の比率。100% が理想。</dd></div>
              <div><dt className="font-semibold text-slate-900">力率割引・割増</dt><dd className="mt-1">力率 85% を基準に、上下 1% ごとに基本料金が 0.85% 変動する制度。</dd></div>
              <div><dt className="font-semibold text-slate-900">力率改善コンデンサ</dt><dd className="mt-1">力率を改善するための機器。基本料金削減に効果。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">ピーク管理の用語</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">ピークカット</dt><dd className="mt-1">デマンドピーク時に消費を抑制すること。基本料金削減に直結。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピークシフト</dt><dd className="mt-1">ピーク時間の消費を時間帯外に移すこと。</dd></div>
              <div><dt className="font-semibold text-slate-900">ベースロード</dt><dd className="mt-1">常時稼働するベースの電力需要。</dd></div>
              <div><dt className="font-semibold text-slate-900">負荷率</dt><dd className="mt-1">平均需要 ÷ 最大需要の比率。設備の使用効率を示す。</dd></div>
            </dl>
          </section>

          <section id="energy-bcp" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">③BCP・非常用電源関連</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力 BCP 対策では多種多様な設備・運用方式があります。UPS・コジェネ・マイクログリッドなど、設備分類と運用方式を整理しました。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">非常用電源の種類</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">UPS（無停電電源装置）</dt><dd className="mt-1">瞬時の停電・電圧低下に対応する電源装置。サーバ・通信機器の保護に使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">非常用発電機</dt><dd className="mt-1">災害時の長時間停電に対応する自家発電設備。ディーゼル・ガス・ガスタービンが主流。</dd></div>
              <div><dt className="font-semibold text-slate-900">コジェネレーション（CHP）</dt><dd className="mt-1">発電と熱供給を同時に行う設備。平常時の省エネと非常時の電源を両立。</dd></div>
              <div><dt className="font-semibold text-slate-900">ガスタービン発電機</dt><dd className="mt-1">ガスを燃料とする発電機。大容量・連続運転に向く。</dd></div>
              <div><dt className="font-semibold text-slate-900">マイクロガスタービン</dt><dd className="mt-1">小型のガスタービン発電機。中小規模施設向け。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">蓄電・電源管理</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">リチウムイオン蓄電池</dt><dd className="mt-1">産業用蓄電池の主流。エネルギー密度が高く、サイクル寿命も長い。</dd></div>
              <div><dt className="font-semibold text-slate-900">鉛蓄電池</dt><dd className="mt-1">従来型の蓄電池。安価だがエネルギー密度・寿命で劣る。</dd></div>
              <div><dt className="font-semibold text-slate-900">レドックスフロー電池</dt><dd className="mt-1">大容量・長寿命の蓄電池。系統用大規模蓄電に活用。</dd></div>
              <div><dt className="font-semibold text-slate-900">PCS（パワーコンディショナ）</dt><dd className="mt-1">直流電力を交流に変換する装置。蓄電池・太陽光に必須。</dd></div>
              <div><dt className="font-semibold text-slate-900">SOC（State of Charge）</dt><dd className="mt-1">蓄電池の充電状態。残存容量の指標。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">マイクログリッド・自立運転</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">マイクログリッド</dt><dd className="mt-1">地域・施設単位の独立運転可能な電力ネットワーク。</dd></div>
              <div><dt className="font-semibold text-slate-900">オフグリッド</dt><dd className="mt-1">電力系統から完全に独立した運用。</dd></div>
              <div><dt className="font-semibold text-slate-900">グリッドフォーミング</dt><dd className="mt-1">蓄電池・発電機が系統電圧・周波数を能動的に作る運転モード。</dd></div>
              <div><dt className="font-semibold text-slate-900">ブラックスタート</dt><dd className="mt-1">系統全停電からの自立復旧能力。</dd></div>
              <div><dt className="font-semibold text-slate-900">自営線</dt><dd className="mt-1">需要家が所有する自前の送電線。複数施設間の電力融通に使用。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">BCP 関連</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">BCP（事業継続計画）</dt><dd className="mt-1">災害・事故時の事業継続のための計画。</dd></div>
              <div><dt className="font-semibold text-slate-900">RTO（Recovery Time Objective）</dt><dd className="mt-1">業務復旧目標時間。</dd></div>
              <div><dt className="font-semibold text-slate-900">RPO（Recovery Point Objective）</dt><dd className="mt-1">業務復旧時のデータ復旧目標時点。</dd></div>
              <div><dt className="font-semibold text-slate-900">DR（デマンドレスポンス）</dt><dd className="mt-1">需給ひっ迫時に消費を抑える仕組み。対価あり。</dd></div>
            </dl>
          </section>

          <section id="international-energy" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">④国際エネルギー市場用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力料金は燃料の国際価格に大きく影響されます。LNG スポット・原油指標・主要機関名など、燃料市場の用語を整理しました。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料市場の指標</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">LNG（液化天然ガス）</dt><dd className="mt-1">天然ガスを液化して輸送・貯蔵可能にしたもの。日本の発電燃料の中心。</dd></div>
              <div><dt className="font-semibold text-slate-900">Henry Hub</dt><dd className="mt-1">米国の天然ガス価格指標。LNG 輸出価格の参照基準。</dd></div>
              <div><dt className="font-semibold text-slate-900">JKM（Japan Korea Marker）</dt><dd className="mt-1">アジア LNG スポット価格指標。Platts が算出。</dd></div>
              <div><dt className="font-semibold text-slate-900">Brent 原油</dt><dd className="mt-1">北海産原油の国際価格指標。</dd></div>
              <div><dt className="font-semibold text-slate-900">WTI 原油</dt><dd className="mt-1">米国産原油の国際価格指標（West Texas Intermediate）。</dd></div>
              <div><dt className="font-semibold text-slate-900">ドバイ原油</dt><dd className="mt-1">中東産原油の指標。日本の輸入原油価格の参照。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">国際機関</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">IEA（国際エネルギー機関）</dt><dd className="mt-1">OECD 加盟国を中心とするエネルギー協力機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">IRENA（国際再生可能エネルギー機関）</dt><dd className="mt-1">再エネ普及を推進する国際機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">OPEC（石油輸出国機構）</dt><dd className="mt-1">産油国 13 ヶ国の協議組織。原油生産量を調整。</dd></div>
              <div><dt className="font-semibold text-slate-900">OPEC+（拡大 OPEC）</dt><dd className="mt-1">OPEC に非加盟産油国（ロシア等）を加えた協議体。</dd></div>
              <div><dt className="font-semibold text-slate-900">WBCSD</dt><dd className="mt-1">持続可能な開発のための世界経済人会議。GHG プロトコル共同開発機関。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">国際協定・枠組み</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">パリ協定</dt><dd className="mt-1">2015 年採択の気候変動国際協定。1.5℃・2℃ 目標を設定。</dd></div>
              <div><dt className="font-semibold text-slate-900">COP（締約国会議）</dt><dd className="mt-1">気候変動枠組条約の年次会議。</dd></div>
              <div><dt className="font-semibold text-slate-900">UNFCCC（気候変動枠組条約）</dt><dd className="mt-1">気候変動対策の国際条約。</dd></div>
              <div><dt className="font-semibold text-slate-900">Net-Zero by 2050</dt><dd className="mt-1">IEA が提示した 2050 年ネットゼロ達成シナリオ。</dd></div>
              <div><dt className="font-semibold text-slate-900">Just Transition</dt><dd className="mt-1">脱炭素移行を公正に進める原則。労働者・地域への配慮。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">地政学・政策</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">エネルギーセキュリティ</dt><dd className="mt-1">エネルギー供給の安定確保。地政学リスクへの対応。</dd></div>
              <div><dt className="font-semibold text-slate-900">Gas-to-Power</dt><dd className="mt-1">天然ガスから発電する技術・施策。</dd></div>
              <div><dt className="font-semibold text-slate-900">Power-to-X</dt><dd className="mt-1">電力を水素・合成燃料等に変換する技術。</dd></div>
              <div><dt className="font-semibold text-slate-900">Grid Parity</dt><dd className="mt-1">再エネ発電コストが既存電源と並ぶ水準。</dd></div>
              <div><dt className="font-semibold text-slate-900">REPowerEU</dt><dd className="mt-1">EU のロシアエネルギー依存脱却計画（2022 年）。</dd></div>
            </dl>
          </section>

          <section id="regulation-policy" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">⑤電力制度・政策用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力制度は 2016 年の小売全面自由化以降、毎年のように改正・新設されています。主要制度・関連機関を時系列も意識して整理しました。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">市場制度</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">電力小売全面自由化</dt><dd className="mt-1">2016 年 4 月から低圧需要家も電力会社を選択可能に。</dd></div>
              <div><dt className="font-semibold text-slate-900">発送電分離</dt><dd className="mt-1">2020 年 4 月から大手電力会社の発電・送配電部門を法的分離。</dd></div>
              <div><dt className="font-semibold text-slate-900">容量市場</dt><dd className="mt-1">将来の供給力確保のための市場。2020 年初回オークション・2024 年から本格供給。</dd></div>
              <div><dt className="font-semibold text-slate-900">需給調整市場</dt><dd className="mt-1">リアルタイムの需給バランス維持のための調整力市場。2021 年〜段階開設。</dd></div>
              <div><dt className="font-semibold text-slate-900">非化石価値取引市場</dt><dd className="mt-1">非化石電源の環境価値を取引する市場。2018 年開設。</dd></div>
              <div><dt className="font-semibold text-slate-900">先物市場（電力先物）</dt><dd className="mt-1">TOCOM・EEX で取引される電力先物。価格ヘッジ手段。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">関連機関</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">OCCTO（電力広域的運営推進機関）</dt><dd className="mt-1">全国の電力需給・系統運用を調整する機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">JEPX（日本卸電力取引所）</dt><dd className="mt-1">電力卸市場の運営機関。</dd></div>
              <div><dt className="font-semibold text-slate-900">一般送配電事業者</dt><dd className="mt-1">送電網を運営する事業者。10 エリアに分割。</dd></div>
              <div><dt className="font-semibold text-slate-900">電力・ガス取引監視等委員会</dt><dd className="mt-1">電力市場の監視・トラブル対応を行う経産省の委員会。</dd></div>
              <div><dt className="font-semibold text-slate-900">資源エネルギー庁</dt><dd className="mt-1">エネルギー政策を所管する経産省の外局。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">制度名・法律</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">エネルギー基本計画</dt><dd className="mt-1">国のエネルギー政策の基本方針。3〜4 年ごとに見直し。</dd></div>
              <div><dt className="font-semibold text-slate-900">GX 推進法</dt><dd className="mt-1">グリーン・トランスフォーメーション推進法。2023 年成立。</dd></div>
              <div><dt className="font-semibold text-slate-900">省エネ法</dt><dd className="mt-1">エネルギーの使用の合理化等に関する法律。1979 年制定、2022 年改正で名称変更。</dd></div>
              <div><dt className="font-semibold text-slate-900">電気事業法</dt><dd className="mt-1">電気事業の根拠法。</dd></div>
              <div><dt className="font-semibold text-slate-900">FIT 法</dt><dd className="mt-1">再生可能エネルギー特別措置法。FIT・FIP 制度の根拠。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">料金・調整</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">託送料金</dt><dd className="mt-1">一般送配電事業者の送電網利用料金。</dd></div>
              <div><dt className="font-semibold text-slate-900">レベニューキャップ</dt><dd className="mt-1">託送料金の総収入上限規制。2023 年導入。</dd></div>
              <div><dt className="font-semibold text-slate-900">容量拠出金</dt><dd className="mt-1">小売電気事業者が容量市場へ拠出する金銭。</dd></div>
              <div><dt className="font-semibold text-slate-900">インバランス料金</dt><dd className="mt-1">計画値と実績値の差分に対する精算金。</dd></div>
            </dl>
          </section>

          <section id="energy-management" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">⑥エネルギーマネジメント・DX 用語</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">エネマネ導入時に出会う技術用語は多岐にわたります。マネジメントシステム種別から通信プロトコル、データ規格まで体系的に整理しました。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">マネジメントシステム</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">BEMS（Building EMS）</dt><dd className="mt-1">建物向けエネマネシステム。空調・照明・換気などビル設備を統合管理。</dd></div>
              <div><dt className="font-semibold text-slate-900">FEMS（Factory EMS）</dt><dd className="mt-1">工場向けエネマネシステム。生産設備・受変電・コンプレッサーを統合管理。</dd></div>
              <div><dt className="font-semibold text-slate-900">HEMS（Home EMS）</dt><dd className="mt-1">家庭向けエネマネシステム。</dd></div>
              <div><dt className="font-semibold text-slate-900">CEMS（Community EMS）</dt><dd className="mt-1">地域・複数建物向けエネマネシステム。</dd></div>
              <div><dt className="font-semibold text-slate-900">EMS（Energy Management System）</dt><dd className="mt-1">エネルギーマネジメントシステム全般を指す総称。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">通信プロトコル</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">BACnet</dt><dd className="mt-1">ビル設備の通信標準プロトコル。空調・照明制御の業界標準。</dd></div>
              <div><dt className="font-semibold text-slate-900">Modbus</dt><dd className="mt-1">産業用制御機器の通信プロトコル。シリアル・TCP/IP の両方をサポート。</dd></div>
              <div><dt className="font-semibold text-slate-900">LonWorks</dt><dd className="mt-1">ビル・産業設備向けの分散型通信プロトコル。</dd></div>
              <div><dt className="font-semibold text-slate-900">EnOcean</dt><dd className="mt-1">電源不要の無線通信規格。センサー・スイッチで使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">Wi-SUN</dt><dd className="mt-1">スマートメーターの B ルート通信規格。</dd></div>
              <div><dt className="font-semibold text-slate-900">OPC UA</dt><dd className="mt-1">産業向け標準データ通信プロトコル。Industry 4.0 の基盤。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">計測・制御の用語</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">SCADA</dt><dd className="mt-1">監視制御・データ収集システム。プラント・系統運用で使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">PLC（Programmable Logic Controller）</dt><dd className="mt-1">産業設備の自動制御装置。</dd></div>
              <div><dt className="font-semibold text-slate-900">センサー（IoT センサー）</dt><dd className="mt-1">温度・湿度・電力・人感など、現場データを収集する装置。</dd></div>
              <div><dt className="font-semibold text-slate-900">デマンド予測</dt><dd className="mt-1">AI・機械学習による 30 分先・翌日の需要予測。</dd></div>
              <div><dt className="font-semibold text-slate-900">ピーク制御</dt><dd className="mt-1">デマンドピーク超過時の自動制御。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">データ活用</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">API</dt><dd className="mt-1">Application Programming Interface。システム間連携のための仕様。</dd></div>
              <div><dt className="font-semibold text-slate-900">BI ツール</dt><dd className="mt-1">Business Intelligence ツール。Tableau・Power BI・Looker Studio 等。</dd></div>
              <div><dt className="font-semibold text-slate-900">デジタルツイン</dt><dd className="mt-1">現実設備の仮想モデル。シミュレーション・最適化に使用。</dd></div>
              <div><dt className="font-semibold text-slate-900">エネルギーダッシュボード</dt><dd className="mt-1">電力使用量・コスト・CO2 を統合表示する画面。</dd></div>
            </dl>
          </section>

          <section id="contract-terms" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">⑦契約条項・約款関連</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">法人向け電力契約でよく登場する契約関連用語を、意味・計算方法と共に整理します。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">契約電力と基本料金</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">契約電力は、過去 1 年間の最大需要電力（30 分平均）で決まる指標で、基本料金の算定基礎となります。契約電力を引き下げられれば基本料金も下がるため、デマンド管理の目的はここにあります。基本料金は <strong>契約電力 × 単価 × 力率補正</strong> で計算されます。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">解約・違約金関連</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">中途解約違約金</dt><dd className="mt-1">最低使用期間内に解約する際に発生する違約金。固定単価プランで設定されることが多い。</dd></div>
              <div><dt className="font-semibold text-slate-900">最低使用期間</dt><dd className="mt-1">割引適用条件として設定される最低契約期間（1 年・2 年・3 年）。</dd></div>
              <div><dt className="font-semibold text-slate-900">自動更新条項</dt><dd className="mt-1">期間満了時に同条件で契約が自動更新される条項。解約申出期限に注意。</dd></div>
              <div><dt className="font-semibold text-slate-900">解約申出期限</dt><dd className="mt-1">契約終了希望日の何ヶ月前までに通知が必要かを定めた条項。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">調整項目</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">燃料費調整額</dt><dd className="mt-1">燃料 CIF 価格の変動を反映する調整項目。3〜5 ヶ月のラグで請求書に反映。</dd></div>
              <div><dt className="font-semibold text-slate-900">市場価格調整額</dt><dd className="mt-1">JEPX スポット価格の変動を月次で反映する調整項目。固定単価プランでも別立てで含まれる場合あり。</dd></div>
              <div><dt className="font-semibold text-slate-900">再エネ賦課金</dt><dd className="mt-1">FIT・FIP 制度の財源として全使用量に上乗せされる賦課金。年度単位で改定。</dd></div>
              <div><dt className="font-semibold text-slate-900">託送料金転嫁条項</dt><dd className="mt-1">一般送配電事業者の託送料金改定を需要家に転嫁する条項。</dd></div>
            </dl>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">実務でよくある落とし穴</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>単価比較のみで決定し、燃料費調整・解約条件・自動更新条項を見落とすケース</li>
              <li>意思決定者間（経理・施設・経営）の情報分断による統合判断の遅延</li>
              <li>相見積不足（既存契約の慣習更新）→ 最低 2〜3 年ごとの市場価格比較を仕組み化</li>
              <li>契約条項の確認漏れによる解約時のトラブル発生</li>
            </ul>
          </section>

          <section id="market-terms" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">⑧市場・JEPX 関連</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力市場関連の用語（JEPX・スポット・時間前・先渡し・先物・容量市場・需給調整市場）を整理します。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">JEPX とスポット市場</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">JEPX（日本卸電力取引所）は日本の電力取引の中核市場で、スポット市場・時間前市場・先渡し市場を運営します。スポット市場は翌日 24 時間を 30 分単位（48 コマ）で前日午前 10 時までに入札・約定する市場です。市場連動プランの単価はこのスポット価格を参照します。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">先渡し・先物</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">先渡し市場は JEPX 内の相対取引市場で、週間・月間など中長期の数量・価格を事前約定します。電力先物は EEX（欧州）や TOCOM（日本）で上場されており、価格変動リスクのヘッジ手段として使われます。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">容量市場・需給調整市場</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">容量市場は 4 年後の発電能力を取引する市場で、2024 年度から本格稼働。需給調整市場は系統の周波数・電圧を調整するアンシラリー需要を取引する市場です。いずれも最終的な電気料金に間接的に影響します。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">市場関連の主要用語</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">システムプライス</dt><dd className="mt-1">JEPX スポット市場のエリア無視・全国統一参考価格。</dd></div>
              <div><dt className="font-semibold text-slate-900">エリアプライス</dt><dd className="mt-1">10 エリア別の約定価格。地域間連系線制約により差が生じる。</dd></div>
              <div><dt className="font-semibold text-slate-900">スパイク</dt><dd className="mt-1">JEPX スポット価格が 50 円/kWh 以上に急騰すること。</dd></div>
              <div><dt className="font-semibold text-slate-900">市場連動プラン</dt><dd className="mt-1">JEPX スポット価格に連動して単価が決まる契約プラン。上限なしの場合がある。</dd></div>
              <div><dt className="font-semibold text-slate-900">固定単価プラン</dt><dd className="mt-1">契約期間中の単価を固定するプラン。市場高騰時のリスクヘッジに有効。</dd></div>
            </dl>
          </section>

          <section id="equipment-terms" className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">⑨設備・機器関連</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">電力設備関連の基本用語（高圧・低圧・受電方式・キュービクル・PAS・VCB）を整理します。</p>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">受電区分</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">低圧：契約電力 50 kW 未満、電柱から直接引込。高圧：50 kW 以上 2,000 kW 未満、キュービクル（自家用受変電設備）が必要。特別高圧：2,000 kW 以上、大型変電設備が必要。受電区分が上がるほど単価は安くなる一方、自前の設備投資と保安費用が必要になります。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">キュービクル</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">高圧契約時に必要な屋外型の自家用変電設備で、6,600 V の高圧電力を低圧（100 V/200 V）に変換します。年 1 回の電気主任技術者による点検が法定必須です。設置コストは数百万円、更新サイクルは約 20〜25 年が目安です。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">PAS・VCB・保安装置</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">PAS（柱上開閉器）は高圧電力引き込み点の保安装置、VCB（真空遮断器）はキュービクル内の主遮断器です。これらの定期点検と更新は、停電事故の予防に直結します。</p>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">省エネ・省コスト設備</h3>
            <dl className="mt-2 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
              <div><dt className="font-semibold text-slate-900">高効率変圧器（トップランナー）</dt><dd className="mt-1">省エネ法トップランナー基準を満たした高効率変圧器。電力損失を 30〜50% 削減可能。</dd></div>
              <div><dt className="font-semibold text-slate-900">インバーター制御</dt><dd className="mt-1">回転数を可変制御することで部分負荷時の電力消費を削減する技術。</dd></div>
              <div><dt className="font-semibold text-slate-900">LED 照明</dt><dd className="mt-1">水銀灯・蛍光灯比で 50〜70% の消費電力削減が可能な照明。</dd></div>
              <div><dt className="font-semibold text-slate-900">ヒートポンプ</dt><dd className="mt-1">空気熱を活用する高効率冷暖房・給湯設備。COP 3〜5 が一般的。</dd></div>
            </dl>
          </section>

          <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">9 分野共通の実務観点</h2>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">業種別の影響度</h3>
            <div className="mt-2 grid gap-3 md:grid-cols-2">
              <div className="rounded border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">製造業（電力多消費）</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">電気代が製造原価の 5〜15% を占めることも。デマンド管理・生産シフト・自家発電の複合対応が必要。</p>
              </div>
              <div className="rounded border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">物流・倉庫</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">冷凍冷蔵倉庫は 24 時間稼働で電力依存度が極めて高く、デマンドレスポンス参加の経済性も高い。</p>
              </div>
              <div className="rounded border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">IT・データセンター</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">AI 需要拡大で電力消費急増。PPA による長期固定化と PUE 改善が重点課題。</p>
              </div>
              <div className="rounded border border-slate-200 bg-white p-3">
                <p className="text-sm font-semibold text-slate-900">医療・介護</p>
                <p className="mt-1 text-xs leading-6 text-slate-700">24 時間稼働・重要設備多数で BCP 重要度が最高位。非常用電源・蓄電池投資は必須。</p>
              </div>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">実務チェックリスト</h3>
            <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700 sm:text-base">
              <li>□ 現状コスト・排出量・契約条件の棚卸しが完了している</li>
              <li>□ 複数の選択肢（3 案以上）を比較検討している</li>
              <li>□ 投資回収期間・TCO・ROI を定量評価している</li>
              <li>□ 会計・税務・法務面の影響を確認済みである</li>
              <li>□ 関連部門への情報共有・合意形成ができている</li>
              <li>□ 効果測定の KPI・計測方法を定義している</li>
            </ul>
          </section>

          <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt={publishedDate} />

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/glossary", title: "用語集カテゴリハブ", description: "用語集系の他の記事を一覧で確認" },
              { href: "/articles/basic", title: "法人電気料金の基礎知識", description: "電気料金の構成・契約の種類など基礎から学べます" },
              { href: "/articles/regulation-timeline", title: "制度改正タイムライン", description: "電力制度の改正履歴を時系列で整理" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "用語集と合わせて読みたい質問集" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）の仕組み", description: "デマンド・契約電力の基本" },
              { href: "/basic-charge-explained", title: "基本料金の決まり方", description: "契約電力 × 基本料金単価 × 力率補正" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の解説", description: "燃料 CIF 価格連動の調整項目" },
              { href: "/market-price-adjustment", title: "市場価格調整の総合解説", description: "JEPX 連動の調整項目" },
              { href: "/jepx-explained", title: "JEPX とは", description: "卸電力市場の基本" },
              { href: "/why-business-electricity-prices-rise", title: "法人の電気料金が上がる理由", description: "上昇要因の全体像" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "削減打ち手の全体像" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備で確認すべき項目" },
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（33 業種）", description: "業種別の負荷特性と契約最適化" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="用語の理解を深めたら、関連する解説記事や料金シミュレーターも合わせてご活用ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/glossary", label: "用語集の他の記事を読む" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <AuthorBadge publishedAt={publishedDate} updatedAt={publishedDate} />

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力コストの見直し、専門家に相談しませんか？"
            description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
