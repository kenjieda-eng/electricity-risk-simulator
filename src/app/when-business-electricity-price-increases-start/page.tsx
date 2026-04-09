import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人の電気料金の値上げはいつから反映されるのか｜請求書で見るポイント";
const pageDescription =
  "法人の電気料金の値上げがいつから請求額へ反映されるのかを、検針月、使用月、燃料費調整額、市場価格要因、契約更新の観点から解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 値上げ いつから",
    "電気代 値上げ 2026",
    "検針月 使用月 請求月",
    "法人向け電気料金 反映時期",
    "請求書 値上げ 反映タイミング",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/when-business-electricity-price-increases-start",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/when-business-electricity-price-increases-start",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人の電気料金の値上げはいつから反映されるのか" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function WhenBusinessElectricityPriceIncreasesStartPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金の値上げはいつから反映されるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          値上げが公表された時期と、請求額に反映される時期は一致しないことがあります。法人向け電気料金では、使用月、検針月、請求月のずれに加え、
          調整項目や契約更新の反映タイミングが重なるためです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「いつの請求から見えるのか」を軸に、反映時期の考え方を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金の値上げはいつから反映されるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務上は「通知日」ではなく「請求明細に現れる月」で確認するのが有効です。契約や料金項目によって反映タイミングが異なるため、
            まずは請求書の各項目がどの月を対象にしているかを確認します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用月と請求月は同じではない</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多くの契約では、使用した月と請求される月にずれがあります。月跨ぎの検針や締め処理があるため、値上げの影響が「翌月」や「翌々月」に
            見えることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">検針タイミングで見え方が変わる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ改定でも、検針日の違いで反映月が前後します。複数拠点を管理する場合は、拠点ごとの検針サイクルをそろえて見ないと、
            値上げ開始時期の把握がずれる可能性があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額が反映される時期</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は燃料価格の動きから数か月遅れて反映されることがあります。そのため、燃料市況が落ち着いても請求額がすぐには下がらない、
            あるいは遅れて上がるように見える場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            詳細は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額（燃調費）
            </Link>
            の解説で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格要因が見えるタイミング</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格要因は契約内容で反映速度が異なります。市場連動要素が強い契約では比較的早く、固定比率が高い契約では緩やかに影響が見える傾向があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場要因の確認は{" "}
            <Link href="/market-price-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場価格調整額
            </Link>
            のページも参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約更新で変わる場合</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価改定は契約更新月から反映されることが多く、補助金縮小の時期と重なると上がり方が大きく見えることがあります。更新時は、
            旧条件と新条件の差分を明細レベルで確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用期間と検針日、請求月の関係</li>
            <li>基本料金・電力量料金の単価改定時期</li>
            <li>燃料費調整額と市場価格調整額の対象月</li>
            <li>補助政策の適用有無と終了時期</li>
            <li>契約更新月と約款変更の有無</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            値上げは「いつ発表されたか」より「いつの請求に現れるか」で把握することが実務的です。使用月、検針月、請求月のずれを前提に、
            調整項目と契約更新を分けて確認すると反映時期を整理しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="反映時期を整理した後に、急上昇の見え方と契約見直し判断へ進むための導線です。"
          links={[
            {
              href: "/why-business-electricity-bills-rise-suddenly",
              title: "法人の電気料金はなぜ急に上がるのか",
              description: "請求急増時の要因切り分けを確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "タイムラグを含む反映ルールを確認できます。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場要因の反映方法を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "更新時の見直し判断を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "反映タイミング差を踏まえて比較できます。",
            },
          ]}
        />

        <ContentCta
          heading="反映時期を踏まえて条件比較する"
          description="請求に出る時期の違いを把握したうえで比較すると、見積差分と実際の請求差を整理しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles/price-increase", label: "料金上昇カテゴリを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
