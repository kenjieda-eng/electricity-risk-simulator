import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "クリニックの電気料金見直しポイント｜医療機器と空調負荷を踏まえた考え方";
const pageDescription =
  "クリニック・診療所の電気料金見直しの考え方を解説。医療機器・空調の負荷特性、固定プランの優位性、見積比較で確認すべきポイント、設備対策まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "クリニック 電気料金 見直し",
    "診療所 電力契約 見直し",
    "クリニック 電気代 削減",
    "医療機関 電力コスト",
    "クリニック 電気料金 高騰",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/clinic-electricity-cost-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/clinic-electricity-cost-review",
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
    label: "医療機器（診断・治療機器）",
    detail:
      "レントゲン・超音波診断装置・内視鏡・レーザー治療器など、診療科によって使用機器は異なりますが、瞬間的な電力消費が大きい機器が多く、デマンドのピーク形成要因になります。特に放射線科や整形外科では大型機器が集中します。",
  },
  {
    label: "空調（診察室・待合室・処置室）",
    detail:
      "患者が常時滞在する待合室、感染予防のため換気が必要な診察室、清潔環境が求められる処置室など、各エリアで独立した空調管理が必要です。開閉の多いドアや外来患者の出入りにより、空調効率が落ちやすい構造でもあります。",
  },
  {
    label: "滅菌・洗浄設備",
    detail:
      "オートクレーブや超音波洗浄機は診療の合間に繰り返し使用します。電力使用量は個々には小さいものの、加熱を伴うため電力消費が集中する時間帯があります。",
  },
  {
    label: "照明・電子カルテ端末",
    detail:
      "診察室・廊下・待合室の照明に加え、各診察ブースや受付に設置されたパソコン・タブレット端末が終日稼働します。LED化により削減余地がある施設も少なくありません。",
  },
  {
    label: "給湯・厨房（規模による）",
    detail:
      "デイケアや訪問看護と併設する場合など、給湯・簡易厨房が追加される施設もあります。規模は小さいものの、継続的な電力消費となります。",
  },
];

export default function ClinicElectricityCostReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          クリニックの電気料金見直しポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          クリニック・診療所は規模こそ大規模病院より小さいものの、医療機器・空調・滅菌設備など電力消費の大きい設備が集中する施設です。診療時間中はほぼすべての設備が同時稼働するため、ピーク時の電力需要が高く、デマンド超過やピーク料金の影響を受けやすい構造があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、クリニック特有の負荷特性と、電気料金見直しの考え方を整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>クリニックの電気料金が上がりやすい構造的な理由</li>
            <li>医療機器・空調負荷を踏まえた契約の考え方</li>
            <li>固定プランと市場連動プランの向き不向き</li>
            <li>見積比較で確認したい具体的なポイント</li>
            <li>設備改善とシミュレーター活用の方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            クリニックで電気料金が上がりやすい理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            クリニックの電気料金が上昇しやすい背景には、業態固有の構造的な要因があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              診察時間が限られているため、短時間に多くの設備が集中して稼働する
            </li>
            <li>
              医療機器は電力消費が大きく、デマンドのピーク形成に直結する
            </li>
            <li>
              空調は患者数に関係なく始業前から稼働しているため、稼働時間が長くなりがち
            </li>
            <li>
              契約電力の設定が実態に合っていないケースがあり、超過料金が発生している場合がある
            </li>
            <li>
              燃料費調整額の上限なしプランに加入している場合、市場変動の影響をそのまま受ける
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の構造や上がる理由については、
            <Link
              href="/why-business-electricity-bills-keep-rising"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電気料金が上がり続ける理由
            </Link>
            でも詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            クリニックの負荷特性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            クリニックの電力使用は、以下の設備カテゴリに大きく分かれます。各設備の特性を把握することで、契約条件の見直し優先度が整理できます。
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
            クリニックは、病院と同様に固定プランとの相性が良い業種です。その背景には以下の理由があります。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
              <li>
                診療報酬は公定価格のため、電気料金の高騰を価格転嫁する手段がない
              </li>
              <li>
                個人経営・医療法人問わず、年間予算での支出管理が重要になる
              </li>
              <li>
                電力消費量が安定しており、市場連動の変動メリットが生かしにくい
              </li>
              <li>
                市場高騰時のリスクを吸収できる内部留保がないケースが多い
              </li>
              <li>
                電力調達に費やす管理工数を最小化したい場合に適している
              </li>
            </ul>
          </div>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">市場連動を検討する場合の前提条件</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
              <li>市場連動のメカニズムとリスクを理解した上での選択であること</li>
              <li>上振れ分を吸収できる財務余裕があること</li>
              <li>年間の上振れ幅をシミュレーションで事前確認していること</li>
              <li>市場高騰時に契約変更できる条件・タイミングを把握していること</li>
            </ul>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランの選び方の考え方は{" "}
            <Link
              href="/businesses-suited-for-fixed-price-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              固定プランが向く法人の特徴
            </Link>
            で、市場連動リスクについては{" "}
            <Link
              href="/businesses-not-suited-for-market-linked-electricity-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランが向かない法人の特徴
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較で確認したいこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            クリニックの見積比較では、単純な単価比較だけでなく以下の観点を確認することが重要です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">料金面の確認</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年間の総額試算（繁忙期・閑散期を含む）</li>
                <li>燃料費調整額の上限有無と算定方式</li>
                <li>契約電力の設定が現実の使用状況と合っているか</li>
                <li>容量拠出金の扱いと将来的な増加見込み</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">運用面の確認</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>切替時の作業・停電の有無</li>
                <li>契約期間と中途解約の条件</li>
                <li>請求書の明細レベルと問い合わせ窓口</li>
                <li>緊急時（供給不安時）の連絡・対応体制</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の読み方は{" "}
            <Link
              href="/how-to-read-business-electricity-quotation"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金見積書の見方
            </Link>
            を、見直しの手順は{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>
            を参考にしてください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策との組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しと並行して以下の設備対策を講じることで、コスト削減効果を高められます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">LED照明への更新</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                待合室・廊下・診察室の照明をLEDに更新することで、照明消費電力を大幅に削減できます。補助金制度が活用できるケースもあります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">空調の適正運転管理</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                診療開始前の早期起動を最適化し、終業後の停止タイミングを自動制御することで、不要な稼働時間を削減できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド監視</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                デマンドモニタリングシステムを導入してリアルタイムで電力使用状況を把握し、契約電力の適正化とピーク抑制につなげられます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">契約電力の見直し</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                過去12か月の最大デマンドを確認し、実態に合った契約電力に変更することで基本料金を削減できる場合があります。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーター活用の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            クリニックの契約見直しにあたって、シミュレーターを活用することで以下の情報を数値で整理できます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現行契約における燃料費変動リスクの大きさを確認する</li>
            <li>固定プランに切り替えた場合の年間コスト試算を行う</li>
            <li>市場高騰シナリオでの最大上振れ幅を把握する</li>
            <li>設備改善後のコスト削減効果を見積もる際の基準値として活用する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            シミュレーターの具体的な使い方は{" "}
            <Link
              href="/how-to"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              シミュレーターの使い方
            </Link>
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/hospital-electricity-cost-review",
              title: "病院の電気料金見直しポイント",
              description: "大規模医療機関における安定性重視の契約見直しの考え方。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "予算管理と安定性を重視する法人に固定プランが向く理由。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "市場連動リスクを慎重に考えるべきケースの整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備段階で確認すべき項目を一覧で整理。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書を受け取った際にどこを比較すればよいか。",
            },
            {
              href: "/why-business-electricity-bills-keep-rising",
              title: "法人の電気料金が上がり続ける理由",
              description: "電気料金上昇の構造的な背景を整理した解説。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクを確認する"
          description="クリニックの契約条件をもとに、電気料金の上振れ幅をシミュレーターで確認できます。見直しの根拠資料としてご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
