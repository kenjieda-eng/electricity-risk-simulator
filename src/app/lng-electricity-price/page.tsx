import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "法人の電気料金とLNGの関係｜なぜ海外のガス市場が日本の電気代に影響するのか";
const pageDescription =
  "LNG価格や供給不安が、日本の法人向け電気料金、JEPX、燃料費調整額、電力契約の見直しにどう影響するのかを、実務目線でわかりやすく解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 LNG",
    "LNG 価格 電気代 影響",
    "LNG JEPX 関係",
    "燃料費調整額 法人",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/lng-electricity-price",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/lng-electricity-price",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金とLNGの関係",
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

export default function LngElectricityPricePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金とLNGの関係</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の法人向け電気料金は、国内の需要だけで決まるわけではありません。電力供給を支えるLNG火力の燃料価格や調達環境は、
          海外市場の影響を受けるため、数か月のタイムラグを経て料金へ波及することがあります。契約見直しでは、単価だけでなく、
          その背景にある構造を理解しておくことが実務上の判断精度につながります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">日本の電力供給でLNGが重要な理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力供給では、LNG火力が引き続き大きな役割を担っています。再生可能エネルギーや原子力の比率が時期により変動しても、
            需給調整を行う上でLNGの存在感は小さくありません。そのため、海外のLNG価格や供給不安が起きると、国内電力市場にも影響が出やすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">LNG価格の変動が電気料金に波及する流れ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            価格変動は一気に請求へ反映されるのではなく、複数の経路を通じて段階的に波及します。特に法人契約では、卸電力市場価格（JEPX）や
            燃料費調整額の動きが、月次請求や契約更新時の条件見直しに影響することがあります。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="LNG市場から法人の電気料金までの主な流れ"
              steps={[
                {
                  title: "1. 海外のLNG市場",
                  description: "需給バランス、地政学、為替などでLNG価格や調達環境が変化",
                },
                {
                  title: "2. 発電コスト",
                  description: "燃料調達コストの変化が、LNG火力の発電コストへ反映",
                },
                {
                  title: "3. JEPX / 燃料費調整額",
                  description: "卸市場価格や燃料費調整の水準に影響し、小売料金の前提が動く",
                },
                {
                  title: "4. 法人の電気料金",
                  description: "月次請求や契約更新時の単価条件として、実務上の負担に波及",
                },
              ]}
            />
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型の契約では、この流れの影響を比較的受けやすい傾向があります。仕組み自体を確認したい場合は{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランの解説
            </Link>
            、固定単価を重視する考え方は{" "}
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プランの解説
            </Link>
            で整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ有事のときに電気料金が上がりやすいのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            有事では、足元の燃料価格だけでなく、将来の調達不安が価格に織り込まれやすくなります。供給見通しへの不確実性が高まると、
            市場での調達コストやリスクプレミアムが上がり、JEPXや契約単価の見直しにつながる場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人側では、急な請求増として表れることもあれば、更新時に契約条件が慎重化する形で現れることもあります。すぐに結論を出すというより、
            「どの条件で、どこまで上振れしうるか」を事前に確認しておく姿勢が大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2022年のエネルギー危機から何を学ぶべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年には、欧州のLNG需要増加が世界市場に波及し、調達価格の上昇と市場の不安定化が広がりました。日本でも電力市場価格の上昇、
            新電力の経営悪化、燃料費調整額の上昇が実務上の課題として顕在化しました。
          </p>
          <InfoBox title="実務で押さえたいポイント">
            海外のガス市場は、国内の法人契約と切り離せるテーマではありません。平時の単価比較だけでなく、相場変動時にどの程度影響を受けるかを
            契約条件ごとに確認しておくことが、再現性のある見直し判断につながります。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">直近の中東リスクをどう見るべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            中東の地政学リスクは、原油だけでなくLNG供給にも影響しうる要素です。主要供給国であるカタール周辺の設備障害や輸送混乱が起きると、
            実需だけでなく市場心理にも影響し、調達コストが動く可能性があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            常設の解説ページとしては、個別ニュースの評価よりも、「供給リスクが電気料金に波及しうる構造が再認識されている」という点を押さえることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が確認しておきたい契約ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しでは、提示単価の高低だけでなく、価格が動いたときの耐性を確認することが重要です。次の観点を先に整理しておくと、
            社内での比較検討が進めやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自社契約が市場連動型か固定型か（またはその中間設計か）</li>
            <li>燃料費調整額の扱いと、請求への反映タイミング</li>
            <li>契約更新時の見直し条件、単価改定の考え方</li>
            <li>高騰時に想定される上振れ幅と、損益への影響範囲</li>
            <li>予算管理・稟議プロセスとの相性</li>
            <li>拠点ごとの使用量変動を踏まえた管理体制</li>
          </ul>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <InfoBox title="比較の視点">
              市場連動型と固定型のどちらが良いかは一律ではありません。契約タイプの違いは{" "}
              <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                比較ページ
              </Link>
              で、料金の動き方と運用面を合わせて確認できます。
            </InfoBox>
            <InfoBox title="実務の進め方">
              まず現行契約を基準に影響幅を把握し、次に更新候補を同条件で比較する流れが有効です。上振れシナリオを含めた確認は、
              予算管理の精度向上にも役立ちます。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較や見直しを進めたい方へ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            LNGや海外市場の動きは、自社の電気料金に間接的な影響を与える可能性があります。だからこそ、契約の仕組みを理解したうえで比較し、
            自社のリスク耐性に合う判断を進めることが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="契約タイプごとの特徴や違いを確認すると、今回の構造理解を実務判断に落とし込みやすくなります。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格の影響を受ける契約の特徴と、実務上の注意点を整理しています。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "単価の見通しを重視する契約の考え方と、向いている法人像を解説しています。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方、予算管理、リスクの出方を比較して確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較・試算を進める"
          description="契約条件の違いを理解したら、使い方を確認し、比較ページやシミュレーション本体で自社条件に合わせて確認してください。"
          links={[
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="lng-electricity-price" />
      </div>
    </main>
  );
}
