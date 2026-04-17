import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";


const pageTitle = "新電力を比較するときのポイント｜単価だけでなく燃調費・契約条件・リスクまで確認";
const pageDescription =
  "新電力を比較するときに法人が確認したいポイントを解説。基本料金、電力量料金、燃料費調整額、市場連動型・固定型の違い、契約条件、リスクの見方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新電力 比較 法人",
    "法人 電気料金 比較ポイント",
    "市場連動 固定 比較",
    "燃料費調整額 見積 比較",
    "電力契約 リスク管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-compare-electricity-suppliers",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-compare-electricity-suppliers",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "新電力を比較するときのポイント",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function HowToCompareElectricitySuppliersPage() {
  return (
    <>
      <ArticleJsonLd
        headline="新電力を比較するときのポイント｜単価だけでなく燃調費・契約条件・リスクまで確認"
        description="新電力を比較するときに法人が確認したいポイントを解説。基本料金、電力量料金、燃料費調整額、市場連動型・固定型の違い、契約条件、リスクの見方まで整理します。"
        url="https://simulator.eic-jp.org/how-to-compare-electricity-suppliers"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "新電力を比較するときのポイント" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">新電力の比較ポイント</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">新電力を比較するときのポイント</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社の比較では、提示単価だけを見ると判断を誤りやすくなります。同じように見える見積でも、料金の仕組みや契約条件が異なる場合があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、法人が比較時に確認したい視点を整理します。比較ページへ進む前に、判断軸をそろえるための実務ガイドとして活用してください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単価だけで比較しないほうがよい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の単価が安く見えても、燃料費調整額や市場連動の影響で実際の請求額は変わることがあります。さらに、基本料金の設計や契約条件によって、
            総額差が逆転するケースもあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較では「見た目の単価」ではなく「請求額の決まり方」を確認する視点が重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較時に確認したい主な項目</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力に対してどのように設定されているかを確認します。安く見えても他項目で調整されていないか、
            拠点特性に合っているかをあわせて見ます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量に応じてどのように課金されるか、時間帯別の考え方があるかを確認します。単純な単価比較だけでは、
            実際の請求総額を読み切れない場合があります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料費調整額</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            どのような考え方で反映されるか、上限や扱いがどうなっているかは、見落としやすい比較項目です。基礎理解は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>{" "}
            で確認できます。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">市場連動型か固定型か</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格の変動を取り込む契約か、料金安定を重視する契約かで、許容すべきリスクが変わります。契約タイプの理解には{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            、{" "}
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            、{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              両者比較
            </Link>{" "}
            を参照してください。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">契約期間・更新条件・解約条件</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約期間が長すぎないか、自動更新の条件、中途解約時の負担を確認します。導入後に動きづらくならないよう、
            運用面の柔軟性も見ておくことが大切です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">請求書やサポート体制</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求明細の分かりやすさや問い合わせ対応は、導入後の運用負担に直結します。比較時点で確認しておくと、
            契約後の実務を安定させやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が比較で見落としやすいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価だけを見る</li>
            <li>燃料費調整額を確認しない</li>
            <li>契約条件を後回しにする</li>
            <li>市場連動のリスクを軽く見る</li>
            <li>現在契約との比較軸がそろっていない</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較しやすくするために準備したい情報</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較精度を高めるために、次の情報を事前にそろえることをおすすめします。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>直近の請求書</li>
            <li>使用量推移</li>
            <li>契約電力</li>
            <li>現在の契約種別</li>
            <li>更新時期</li>
            <li>複数拠点なら拠点別データ</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自社に合う比較の考え方</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">予算の安定を重視する法人</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定型が相性のよい場合があります。価格変動より予算管理を優先する企業では、月次の見通しの立てやすさが実務上のメリットになります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">相場変動を許容できる法人</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型の選択肢もあります。ただし、上振れ時の影響や社内説明のしやすさを事前に確認することが前提です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">まずは現状把握を優先したい法人</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            いきなり契約変更に進まず、まず比較軸を整理する方法も有効です。見直しの入口は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人が電力契約を見直すタイミング
            </Link>{" "}
            から確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較の最後は総額・条件・リスクで判断する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金表の一部ではなく、総額感と契約条件を合わせて確認することが重要です。安さだけではなく、変動リスク、運用しやすさ、
            契約柔軟性も含めて判断すると、導入後のギャップを減らせます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額で見たときの妥当性</li>
            <li>契約条件の納得感</li>
            <li>価格変動リスクの許容度</li>
            <li>請求・運用面の扱いやすさ</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="how-to-compare-electricity-suppliers" terms={["燃料費調整額", "市場価格調整額", "基本料金", "電力量料金", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="比較基準を整理した後は、契約タイプの理解と見直しタイミングをあわせて確認すると意思決定しやすくなります。"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "比較を始める前に、見直しのきっかけと確認順序を整理できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格の影響を受ける契約の特徴を確認できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "見通しを重視する契約の考え方を把握できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "総額比較で見落としやすい調整項目を確認できます。",
            },
            {
              href: "/compare",
              title: "法人向け電気料金比較ページ",
              description: "整理した比較軸で、実際の条件差を確認できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "最終保障供給から通常契約へ移るときの実務整理に使えます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して確かめる"
          description="比較軸を整理したら、現行契約と候補条件を同じ前提で照合して判断するのが実務的です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
