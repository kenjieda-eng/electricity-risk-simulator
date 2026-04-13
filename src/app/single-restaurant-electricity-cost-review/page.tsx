import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "単独飲食店の電気料金見直しポイント｜調理設備と低利益率を踏まえた考え方";
const pageDescription =
  "単独飲食店の電気料金が上がりやすい要因と、契約見直しの着眼点を解説。調理設備・空調・冷蔵の負荷特性、低利益率業種での判断基準、固定プランと市場連動の向き不向きまで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "飲食店 電気料金 見直し",
    "レストラン 電気代 削減",
    "飲食店 電力契約 見直し",
    "飲食業 電力コスト 対策",
    "単独店舗 電気料金 削減",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/single-restaurant-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/single-restaurant-electricity-cost-review",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const loadCharacteristics = [
  {
    label: "調理設備（厨房機器）",
    detail:
      "業務用オーブン、フライヤー、スチームコンベクションオーブン、電磁調理器などの調理設備は、営業時間中に断続的に大電力を消費します。特にランチ・ディナーのピーク時間帯に複数の調理設備が同時稼働し、最大需要電力を押し上げます。",
  },
  {
    label: "冷蔵・冷凍設備",
    detail:
      "食材の保管に必要な業務用冷蔵庫・冷凍庫が24時間稼働します。スタンドアップ型の大型冷蔵庫や冷凍ストッカーは消費電力が大きく、ベースロードの主要因になります。夏場は外気温の影響で消費電力が増加します。",
  },
  {
    label: "空調・換気設備",
    detail:
      "客席の空調に加え、厨房の換気扇・排煙設備が常時稼働します。厨房の発熱を排気するための強力な換気システムは、特に夏季の空調負荷を増加させます。食品衛生上の観点から換気設備の停止が難しい点も特徴です。",
  },
  {
    label: "照明・その他設備",
    detail:
      "客席の雰囲気照明・ショーケース照明・店頭サイン照明など、営業時間外も含めて稼働する照明があります。POSシステム・BGM設備・テレビモニターなど小電力設備も積み上がると無視できない規模になります。",
  },
];

const reviewPoints = [
  {
    heading: "低圧電力契約の条件確認",
    content:
      "単独飲食店は契約電力50kW未満の低圧契約が多く、電力会社の規制料金か新電力の低圧プランが選択肢になります。低圧は高圧・特別高圧と比べて単価が高い傾向があり、新電力への切り替えによる単価削減効果を確認することが重要です。現在の契約電力の設定が実態のピーク需要と適合しているかも確認ポイントです。",
  },
  {
    heading: "営業時間と調理設備の稼働パターン把握",
    content:
      "飲食店の電力使用は営業時間・仕込み時間・閉店後の片付けなど、1日の中で大きく変動します。ランチとディナーのピーク時間に調理設備が集中稼働するパターンを把握し、デマンドコントロールの余地があるかを確認します。仕込み時間を早朝・深夜にシフトすることで深夜割引料金を活用できる場合もあります。",
  },
  {
    heading: "低利益率を踏まえたリスク許容度の確認",
    content:
      "飲食業は食材費・人件費・家賃に加え電気料金が経費に占める割合が高く、利益率が低い業種です。電気料金の月次変動が経営収支に直接影響するため、市場連動型プランを採用する場合は変動幅の上限シミュレーションを必ず行い、最悪ケースでも経営を継続できるかを確認することが重要です。",
  },
  {
    heading: "オーナーとの電力契約責任の確認",
    content:
      "テナント入居の飲食店では、電力契約がオーナーとテナントのどちらの名義になっているか、また転貸電力の条件を確認する必要があります。自社名義の場合は直接新電力への切り替えが可能ですが、オーナー名義の建物一括契約の場合は変更にオーナーの承認が必要になります。",
  },
];

export default function SingleRestaurantElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          単独飲食店の電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          単独で運営する飲食店は、調理設備・冷蔵設備・空調・換気が重なる電気料金が経営コストを大きく左右します。特に利益率が低い飲食業では、電気料金の上昇が直接的に収益を圧迫するため、契約内容の定期的な確認と見直しが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、単独飲食店特有の電力需要特性を踏まえ、契約見直しの着眼点と実務上の確認事項を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>飲食店の電気料金が上がりやすい構造的な理由</li>
            <li>調理設備・冷蔵・空調など負荷特性から見た着眼点</li>
            <li>低利益率業種として固定プランと市場連動プランをどう判断するか</li>
            <li>テナント入居時の契約権限の確認方法</li>
            <li>設備対策との組み合わせで効果を高める方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            単独飲食店の電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            飲食店の電気料金は、以下の構造的な要因から高止まりしやすい特性があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>業務用調理設備が使用ピーク時に集中して稼働し最大需要電力を押し上げる</li>
            <li>冷蔵・冷凍設備が24時間稼働しベースロードを形成する</li>
            <li>厨房の発熱を排気する換気設備が常時稼働し空調負荷も大きい</li>
            <li>夏季は空調・冷蔵の二重負荷で電力使用量が急増しやすい</li>
            <li>低圧契約が多く単価が高圧・特別高圧より高い傾向がある</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の上昇要因の全体像は{" "}
            <Link
              href="/why-business-electricity-prices-rise"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がる理由
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            負荷特性から見た着眼点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            飲食店の電力使用は設備カテゴリごとに特性が異なります。各設備の特性を理解しておくことで、見直しの優先順位が明確になります。
          </p>
          <div className="mt-4 space-y-3">
            {loadCharacteristics.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランと市場連動プランの考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単独飲食店は利益率が低く、電気料金の変動が収益に直結するため、固定プランによるコスト安定化が特に重要な業種です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">固定プランが向きやすい理由</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>飲食業の利益率は5〜10%程度であり、電気料金の上振れが経営を圧迫しやすい</li>
                <li>食材費・人件費との合算で固定費を把握し月次収支管理を行う必要がある</li>
                <li>電力費変動を価格転嫁できないケースが多く、コスト吸収余力が限られる</li>
                <li>資金繰りの観点から支出の予測可能性を確保することが重要</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の注意</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>価格高騰時の月次コスト増加が経営収支を赤字に転じさせるリスクがある</li>
                <li>飲食繁忙期（夏・年末）と市場価格高騰が重なると影響が拡大する</li>
                <li>上振れ時の追加費用をまかなう運転資金の余裕があるかを確認する</li>
                <li>過去の市場価格推移と自店の使用量から最悪ケースを試算してから判断する</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランが向く法人の特徴は{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランが向く法人の特徴
            </Link>{" "}
            で、市場連動プランのリスクについては{" "}
            <Link
              href="/businesses-not-suited-for-market-linked-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランが向かない法人の特徴
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約見直しで確認したいこと
          </h2>
          <div className="mt-4 space-y-4">
            {reviewPoints.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しの全体的な進め方は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            飲食店では初期投資が限られることが多いため、費用対効果の高い対策から優先して取り組むことが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">冷蔵設備の省エネ化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                古い業務用冷蔵庫・冷凍庫を省エネ型に更新することで、24時間のベースロードを削減できます。経年劣化した設備は特に効率が低下しているため、更新の費用対効果が高い場合があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">照明のLED化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                客席照明・厨房照明をLEDに切り替えることで照明電力消費を削減できます。比較的初期投資が小さく、飲食店でも取り組みやすい対策です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調・換気の適正化</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                厨房換気扇のインバーター制御化や、客席空調の設定温度・稼働スケジュールの最適化により、空調・換気の電力消費を抑制できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">調理設備の使用計画の見直し</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                仕込み作業のタイミングを分散させたり、ピーク時間帯に一部設備の稼働をずらすことでデマンドを抑制できます。設備投資なしで取り組める対策です。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            飲食店の契約見直しでは、以下の観点でシミュレーターを活用することで、経営判断に必要な数値を把握できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約条件での年間上振れリスクを確認し、経営収支への影響を把握する</li>
            <li>固定プランと市場連動プランの年間コスト差を比較する</li>
            <li>夏季ピーク月の空調・冷蔵二重負荷を前提にした影響額を確認する</li>
            <li>電力費が月次収支に占める割合を確認し、許容できる変動幅を逆算する</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向きやすい理由。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目を見積比較に活用するためのポイント。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "価格変動リスクが経営を圧迫しやすい業種の特徴を解説。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "電気料金を構成する要素と上昇の構造を解説。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較。",
            },
          ]}
        />

        <ContentCta
          heading="自店の条件でリスクを確認する"
          description="飲食店の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。固定プランと市場連動プランの比較にも活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="single-restaurant-electricity-cost-review" />
      </div>
    </main>
  );
}
