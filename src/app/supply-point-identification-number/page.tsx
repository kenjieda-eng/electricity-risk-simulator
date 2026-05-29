import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "供給地点特定番号（22桁）とは｜意味・確認方法・新電力切替時の使い方";
const pageDescription =
  "供給地点特定番号（22桁）の意味と構成、検針票・請求書からの確認方法、新電力切替や引越し時の手続きでの使い方、複数拠点管理での活用、よくある間違いと番号がわからないときの対処法を、公的資料を踏まえて実務目線で整理します。";
const pageUrl = "https://simulator.eic-jp.org/supply-point-identification-number";

const faqItems = [
  {
    question: "供給地点特定番号とは何ですか？",
    answer:
      "供給地点特定番号（SPIN：Supply Point Identification Number）は、電力供給の物理的な地点（メーター単位）を一意に識別する22桁の番号です。一般送配電事業者が付与し、建物・メーター単位で設定されます。契約切替や引越しの際に、新旧事業者間で供給地点を正確に引き継ぐためのキーとなります（出典: 資源エネルギー庁 / 一般送配電事業者の説明資料 等から整理・2025年時点）。",
  },
  {
    question: "供給地点特定番号は何桁ですか？",
    answer:
      "供給地点特定番号は22桁の数字で構成されます。先頭部分にエリア（管轄する一般送配電事業者）を示す区分が含まれ、以降に地点を識別する番号が続きます。電話番号や契約番号（お客さま番号）とは別物で、地点そのものを示す番号である点が特徴です。",
  },
  {
    question: "供給地点特定番号はどこで確認できますか？",
    answer:
      "①電力会社からの検針票・請求書、②契約書、③新電力からの見積書、④一般送配電事業者のWeb照会、⑤電力会社カスタマーサポートへの問い合わせ、で確認できます。検針票や請求書に「供給地点特定番号」「地点番号」といった項目名で22桁の数字が記載されているのが一般的です。",
  },
  {
    question: "新電力に切り替えるとき、供給地点特定番号は必要ですか？",
    answer:
      "多くの場合、切替申込時に供給地点特定番号の提出を求められます。この番号により、切替先の小売事業者が一般送配電事業者を通じて供給地点を正確に特定でき、スイッチング手続きが円滑に進みます。番号がわからない場合でも、住所やお客さま番号から事業者側で照会できるケースがありますが、番号を把握しておくと手続きがスムーズです。",
  },
  {
    question: "高圧と低圧で供給地点特定番号の扱いは違いますか？",
    answer:
      "番号が22桁であること自体は高圧・低圧で共通です。ただし高圧・特別高圧の契約では手続きの確認事項が多く、切替の所要期間も長くなる傾向があります。低圧（一般的な店舗・小規模事業所）では検針票から番号を確認しやすく、手続きも比較的シンプルです。",
  },
  {
    question: "供給地点特定番号がわからないときはどうすればよいですか？",
    answer:
      "まず手元の検針票・請求書・契約書を確認します。見当たらない場合は、契約中の電力会社のカスタマーサポートに連絡するか、その地域の一般送配電事業者のWeb照会・問い合わせ窓口を利用します。問い合わせの際は、契約者名・供給地住所・お客さま番号などの情報を用意しておくと照会が早く進みます。",
  },
  {
    question: "複数の拠点がある企業はどう管理すればよいですか？",
    answer:
      "拠点ごとに供給地点特定番号が異なるため、拠点名・住所・お客さま番号・供給地点特定番号・契約電力をまとめた一覧表を作って管理するのが実務的です。一括切替や相見積もりの際に、この一覧があると手続きが大幅に効率化します。拠点の開設・閉鎖のたびに台帳を更新する運用にしておくと、抜け漏れを防げます。",
  },
  {
    question: "供給地点特定番号に関する公的な情報はどこで確認できますか？",
    answer:
      "資源エネルギー庁の電力小売全面自由化に関する解説や、各一般送配電事業者（東京電力パワーグリッド、関西電力送配電など）の公式サイト・説明資料が一次情報として有用です。料金水準の比較には、料金比較情報サイト（pps-net.org/unit など）も参考になります（出典: 資源エネルギー庁 / 一般送配電事業者の説明資料 等から整理・2025年時点）。",
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "法人向け電気料金", "供給地点特定番号", "22桁", "新電力切替", "SPIN"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/contract-legal", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/contract-legal"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        faq={faqItems}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "供給地点特定番号と契約変更時の扱い" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">供給地点特定番号と契約変更時の扱い</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">供給地点特定番号（22桁）とは｜意味・確認方法・新電力切替時の使い方</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号は、電力供給の地点を一意に識別する22桁の番号です。新電力への切替や引越し、複数拠点の電力契約管理など、さまざまな場面で必要になります。本記事では、供給地点特定番号の意味と構成、検針票・請求書からの確認方法、切替時の使い方、複数拠点管理での活用、よくある間違いと番号がわからないときの対処法までを、公的資料を踏まえて実務目線で整理します。</p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-29" />
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給地点特定番号とは</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号（SPIN：Supply Point Identification Number）は、電力供給の物理的な地点を一意に識別する22桁の番号です。一般送配電事業者が付与し、建物・メーター単位で設定されます。一つの地点に一つの番号が割り当てられるため、同じ住所でも複数のメーターがあれば番号は別々になります。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">契約切替時には、この番号が新旧事業者間の情報引継ぎのキーとなります。需要家が番号を把握していないと、切替手続きが遅延する原因になります。逆に番号を正確に把握していれば、申込時の入力ミスや地点の取り違えを防ぎ、スムーズに手続きを進められます。</p>
            <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-slate-800">ポイント</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">供給地点特定番号は「契約番号（お客さま番号）」とは別物です。お客さま番号は契約に紐づく番号で、契約先が変われば変わり得ますが、供給地点特定番号は地点そのものを示す番号で、原則として地点が同じであれば変わりません。</p>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">22桁の構成と意味</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号は22桁の数字で構成されます。先頭部分には、その地点を管轄する一般送配電事業者のエリアを示す区分が含まれ、以降に地点を識別する番号が続きます。番号を見れば、どのエリア（北海道・東北・東京・中部・北陸・関西・中国・四国・九州・沖縄）の地点かが識別できる仕組みになっています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">桁数が22桁と長いため、検針票や見積書に書き写す際や、システムへ入力する際は、桁の取り違え・欠落に注意が必要です。とくに「0」と「O（オー）」のような混同は実務でよく起こるため、原本（検針票・請求書）からコピーするか、二重確認する運用が安全です。</p>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-slate-800">入力ミスを防ぐコツ</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>原本から直接コピー＆ペーストする</li>
                <li>22桁あるかを桁数で必ず確認する</li>
                <li>複数人でダブルチェックする</li>
                <li>拠点台帳に控え、毎回原本を探さずに済むようにする</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">番号の確認方法</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号は、①電力会社からの検針票・請求書、②契約書、③新電力からの見積書、④一般送配電事業者のWeb照会、⑤電力会社カスタマーサポートへの問い合わせ、で確認できます。最も手軽なのは検針票・請求書で、「供給地点特定番号」「地点番号」などの項目名で22桁の数字が記載されています。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">紙の検針票が届かない契約（Web明細）では、契約先のマイページにログインして確認します。それでも見当たらない場合は、契約中の電力会社のカスタマーサポート、またはその地域の一般送配電事業者の問い合わせ窓口を利用します。問い合わせ時には契約者名・供給地住所・お客さま番号を手元に用意しておくと照会が早く進みます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">複数拠点を持つ企業では、拠点別の番号リストを管理することが、切替手続きの効率化につながります。請求書を受領した時点で番号を台帳に控えておく運用にしておくと、いざ切替・移転というときに探し回らずに済みます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">新電力切替時の必要性と使い方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">新電力（小売電気事業者）への切替を申し込む際には、多くの場合、供給地点特定番号の提出を求められます。この番号により、切替先の事業者が一般送配電事業者を通じて供給地点を正確に特定でき、スイッチング手続き（契約先の切替）が円滑に進みます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">番号がわからない場合でも、住所やお客さま番号から事業者側で照会できるケースがありますが、その分手続きに時間がかかったり、確認のやりとりが増えたりします。番号をあらかじめ把握しておくことで、申込から切替完了までをスムーズに進められます。なお、切替自体は原則として工事不要・無料で行えるのが一般的です（既存の設備で対応できない場合を除く）。</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">切替申込で求められる代表的な情報</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>供給地点特定番号（22桁）</li>
                <li>お客さま番号（現契約）</li>
                <li>供給地住所・契約者名</li>
                <li>契約電力・契約種別（高圧／低圧 など）</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">高圧・低圧での扱いの違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号が22桁であること自体は、高圧・低圧で共通です。ただし、契約区分によって手続きの確認事項や所要期間が異なります。低圧（一般的な店舗・小規模事業所）では検針票から番号を確認しやすく、切替手続きも比較的シンプルに進みます。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">一方、高圧・特別高圧の契約では、契約電力やデマンドの確認、需給管理の引継ぎなど確認事項が多く、切替の所要期間も長くなる傾向があります。中〜大規模契約では、手続きに余裕を持って着手することが重要です。供給地点特定番号は、こうした高圧契約でも地点特定のキーとして使われます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">複数拠点管理での活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">複数の事業所・店舗を持つ企業では、拠点ごとに供給地点特定番号が異なります。これらを散発的に管理していると、一括切替や相見積もりの際に番号集めに手間取り、手続きが滞りがちです。拠点名・住所・お客さま番号・供給地点特定番号・契約電力・契約種別をまとめた一覧表（台帳）を作って管理するのが実務的です。</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-200 px-3 py-2">拠点名</th>
                    <th className="border border-slate-200 px-3 py-2">供給地住所</th>
                    <th className="border border-slate-200 px-3 py-2">供給地点特定番号</th>
                    <th className="border border-slate-200 px-3 py-2">契約区分</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">本社</td>
                    <td className="border border-slate-200 px-3 py-2">○○市…</td>
                    <td className="border border-slate-200 px-3 py-2">（22桁）</td>
                    <td className="border border-slate-200 px-3 py-2">高圧</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2">A店</td>
                    <td className="border border-slate-200 px-3 py-2">△△市…</td>
                    <td className="border border-slate-200 px-3 py-2">（22桁）</td>
                    <td className="border border-slate-200 px-3 py-2">低圧電力</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2">B倉庫</td>
                    <td className="border border-slate-200 px-3 py-2">□□市…</td>
                    <td className="border border-slate-200 px-3 py-2">（22桁）</td>
                    <td className="border border-slate-200 px-3 py-2">低圧電灯</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">この台帳を、拠点の開設・閉鎖のたびに更新する運用にしておくと、抜け漏れを防げます。相見積もりを取る際にも、拠点ごとの番号と使用量がそろっていれば、各社からスピーディに見積もりを取得できます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある間違いと注意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号にまつわる典型的な間違いを整理します。いずれも手続きの遅延や地点の取り違えにつながるため、事前に押さえておきましょう。</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-semibold">お客さま番号と混同する</span>：お客さま番号は契約に紐づく番号で、供給地点特定番号（地点の番号）とは別物です。</li>
              <li><span className="font-semibold">桁の欠落・取り違え</span>：22桁と長いため、書き写しやシステム入力で桁が欠ける・入れ替わるミスが起こりやすいです。</li>
              <li><span className="font-semibold">同一住所の別メーターを取り違える</span>：同じ住所でもメーターが複数あれば番号は別々です。</li>
              <li><span className="font-semibold">古い検針票の番号をそのまま使う</span>：地点が変わっていないか、最新の請求書で確認します。</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">これらを避けるには、申込前に原本（最新の検針票・請求書）から番号を確認し、桁数を含めてダブルチェックする運用が有効です。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">番号がわからないときの対処</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号がどうしても見つからないときは、次の順序で対処します。</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>手元の検針票・請求書・契約書をあらためて確認する</li>
              <li>Web明細（マイページ）にログインして確認する</li>
              <li>契約中の電力会社のカスタマーサポートに問い合わせる</li>
              <li>その地域の一般送配電事業者のWeb照会・問い合わせ窓口を利用する</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">問い合わせの際は、契約者名・供給地住所・お客さま番号を用意しておくと照会がスムーズです。なお、切替先の小売事業者によっては、住所などの情報から番号を代理で照会してくれるケースもあります。申込先に確認すると、手続きの負担を減らせる場合があります（出典: 資源エネルギー庁 / 一般送配電事業者の説明資料 等から整理・2025年時点）。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">切替・拠点移転時の手続きチェック</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">切替や拠点移転では、①供給地点特定番号の照会・確認、②新電力との契約申込、③切替日の指定、④最終請求の確認、⑤移行後初回請求の検算、を流れで実施します。供給地点特定番号は最初の照会・確認の段階で必ず押さえておきたい情報です。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">引越し（拠点移転）時は、旧拠点の解約と新拠点の契約を並行して実施します。空白期間を避けるための「重複契約期間の設定」を事前に計画しておくと安心です。新拠点については、供給地点特定番号の取得（一般送配電事業者への確認）から進めます。</p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-800">拠点移転時のタイムライン例</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>【-60日】移転計画確定、新拠点の供給地点特定番号取得</li>
                <li>【-45日】新電力との新規契約見積・比較</li>
                <li>【-30日】旧拠点の解約通知、新拠点の契約申込</li>
                <li>【-14日】最終確認、立会い日程調整</li>
                <li>【移転日】メーター確認、電力引継ぎ</li>
                <li>【+14日】移転後初回請求の検算、精算確認</li>
              </ul>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">中〜大規模契約（高圧以上）では、手続きに2〜3ヶ月かかるケースもあるため、早期着手が重要です。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">関連する制度・出典</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">供給地点特定番号の管理・照会は、各一般送配電事業者（例：東京電力パワーグリッド、関西電力送配電）のWebサイトで対応しています。地域ごとに照会方法や窓口が異なるため、供給地のエリアに対応した事業者の案内を確認してください。</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">切替手続きの全体像は、資源エネルギー庁「電力小売全面自由化」に関する解説で整理されています。スイッチング（契約先の切替）の流れ、必要な情報、消費者保護の仕組みなどが公開されており、一次情報として参照する価値があります（出典: 資源エネルギー庁 / 一般送配電事業者の説明資料 等から整理・2025年時点）。</p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
            <div className="mt-4 space-y-4">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900 sm:text-base">Q. {item.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">A. {item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">参考資料・出典</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><a href="https://www.occto.or.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力広域的運営推進機関（OCCTO）</a></li>
            <li><a href="https://www.enecho.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">経産省 資源エネルギー庁</a></li>
            <li><a href="https://www.emsc.meti.go.jp/" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力・ガス取引監視等委員会</a></li>
            <li><a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力ネット 電力料金単価の推移</a></li>
          </ul>
          <p className="mt-3 text-xs text-slate-500">本記事は上記の公的資料・公式サイトを参考に編集しています。最新の制度・数値は各出典元で必ずご確認ください。</p>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/electricity-contract-main-clauses", title: "電力契約書の主要条項", description: "法人担当者向けの読み方" },
              { href: "/force-majeure-clause", title: "不可抗力条項の典型例", description: "災害・需給ひっ迫時の責任分担" },
              { href: "/auto-renewal-clause", title: "自動更新条項と更新拒絶", description: "通知期限管理と解除" },
              { href: "/how-to-read-electricity-bill", title: "電気料金請求書の読み方", description: "検針票から供給地点特定番号を探す" },
              { href: "/how-to-read-electricity-quote", title: "電力見積書の読み方", description: "見積書の記載項目を確認する" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約チェックリスト", description: "契約・切替前に確認する項目" },
              { href: "/articles/faq", title: "FAQ集（よくある質問）", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務", description: "関連カテゴリも合わせて読む" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方", description: "このカテゴリの記事一覧を見る" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する" },
              { href: "/", title: "電気料金上昇リスクシミュレーター", description: "年間の電気代と上昇リスクを試算する" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="このテーマの理解を深めたら、シミュレーターで自社の電気料金リスクを確認しましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/articles/contract-legal", label: "契約書・約款の読み方の他の記事を読む" },
            ]}
          />
        </div>
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
