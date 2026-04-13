import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "補助金縮小で電気料金の見え方はどう変わったか｜経緯・区分別影響・年間コスト比較";
const pageDescription =
  "電気料金補助金（激変緩和措置）の経緯と縮小・終了後の影響を法人向けに整理します。契約区分別の月額軽減額、補助金タイムライン、補助ありなし年間コスト比較を数値で解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 補助金 縮小 影響",
    "激変緩和措置 終了 法人",
    "法人 電気料金 補助なし 年間コスト",
    "補助金 タイムライン 経緯",
    "電力契約 見直し 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-price-subsidy-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-price-subsidy-impact",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "補助金縮小と電気料金の見え方",
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

export default function ElectricityPriceSubsidyImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくず">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <Link href="/articles/price-trends" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <span>補助金縮小の影響</span>
          </li>
        </ol>
      </nav>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">補助金縮小で電気料金の見え方はどう変わったか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、補助金の有無によって請求額の見え方が大きく変わります。2023年から2025年にかけて、政府の激変緩和措置は導入・縮小・終了・一時復活・再終了と目まぐるしく変化しました。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、補助金の経緯タイムライン、契約区分別の影響額、そして補助ありなし年間コスト比較を数値で整理します。
          「請求書の急な変化が何によるものか」を切り分ける判断軸として活用してください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金があるときは請求額の見え方が変わる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金が適用される期間は、請求額が抑えられて見えるため、単価の基礎的な水準変化を把握しにくくなります。
            その結果、実際には高い水準が続いていても、負担が落ち着いたように見えることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、補助の有無で見える請求額と、補助を除いたベースの単価水準を分けて確認することが重要です。
            補助金終了後の影響については{" "}
            <Link href="/impact-of-electricity-subsidy-ending" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              補助金終了の影響まとめ
            </Link>
            も参照してください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金の経緯タイムライン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            政府の電気料金補助（激変緩和措置）は2023年1月に開始され、以降は複数回の縮小・終了・一時復活を経ています。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">時期</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助内容</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">低圧の軽減単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高圧の軽減単価</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-green-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023年1月〜8月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">激変緩和措置（第1弾）</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲7円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲3.5円/kWh</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023年9月〜2024年4月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">半額に縮小</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-700">▲3.5円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-amber-700">▲1.8円/kWh</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024年5月〜7月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">いったん終了</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-500">なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-500">なし</td>
              </tr>
              <tr className="bg-green-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024年8月〜10月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">酷暑対応で一時復活</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲4円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲2円/kWh</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024年11月〜</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再終了</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-500">なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-500">なし</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2025年4月〜</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">補助なし継続</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-500">なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-500">なし</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助は一貫して縮小・終了の方向で推移しており、2025年4月以降は補助なしが続いています。
            請求書で「急な増加」が見られた時期が補助終了のタイミングと重なっていないか確認することが重要です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別の補助金影響額</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金3.5円/kWh（高圧）が適用されていた時期の月額軽減額と、終了後の年間負担増を契約区分別に試算します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月間使用量（目安）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助金3.5円/kWh時の月額軽減</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助金終了後の年間負担増</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">低圧電力（小規模店舗）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">5,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲1.75万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+21万円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高圧（中規模工場）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲17.5万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+210万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高圧（大規模施設）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">200,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲70万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+840万円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">特別高圧</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,000,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">▲350万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+4,200万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            大口需要家ほど補助金の恩恵が大きく、終了後の年間負担増も大きくなります。特別高圧では年間<span className="font-semibold text-slate-900">4,200万円</span>の差が生じる計算です。
            自社の規模に応じた影響額を把握し、予算計画に反映させることが重要です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金ありなし年間コスト比較（高圧・月50,000kWh）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧で月間50,000kWhを使用する事業者を例に、補助金があった2023年前半と補助なしの2025年の年間コストを比較します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">比較項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助金あり（2023年前半）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助金なし（2025年）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月額電気代</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約97.5万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約120万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+22.5万円</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">年間電気代</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約1,170万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約1,440万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+270万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            同じ使用量・同じ規模でも、補助金の有無によって年間<span className="font-semibold text-slate-900">270万円</span>のコスト差が生じます。
            「補助があった頃と比べて高くなった」という感覚の多くは、この補助終了分と基準単価の上昇が重なって生じています。
            どの程度電気料金が上昇しているかは{" "}
            <Link href="/how-much-business-electricity-prices-increase" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人電気料金の上昇幅
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金有無による月額比較（高圧・月50,000kWh）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">時期</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額軽減額</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助なし月額</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">補助あり月額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023年前半</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲3.5円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">▲17.5万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約115万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約97.5万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023年後半</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲1.8円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">▲9万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約115万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約106万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2024年8〜10月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲2円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">▲10万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約120万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約110万円</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2025年4月〜（終了後）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約120万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">= 補助なし月額</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金3.5円/kWh適用時と終了後を比較すると、年間で<span className="font-semibold text-slate-900">約210万円</span>の差が生じます。
            請求書の「急な上昇」が補助終了によるものか、単価改定によるものかを切り分けることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が「一時的な抑制」と「ベース単価」を分けて考える理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助は短期的な負担緩和として有効でも、契約見直しの判断軸を補助前提に置くと、縮小時にコストが想定より増える可能性があります。
            法人の中期的な予算管理では、補助の有無より先にベース単価の水準を確認することが必要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>短期の請求額だけで判断しない</li>
            <li>契約更新時の単価条件を明確に確認する</li>
            <li>補助縮小後のコスト感を事前に想定する</li>
            <li>調整項目と契約単価を分けて分析する</li>
            <li>補助なし前提のシミュレーションを行う</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            今後電気料金が下がる可能性については{" "}
            <Link href="/when-will-business-electricity-prices-drop" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人電気料金が下がる条件
            </Link>
            で整理しています。推移の全体像は{" "}
            <Link href="/electricity-price-trend-2019-2025" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              2019年から2025年の推移
            </Link>
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="補助金の見え方を整理したうえで、比較実務と推移確認に接続するためのページです。"
          links={[
            {
              href: "/impact-of-electricity-subsidy-ending",
              title: "補助金終了の影響まとめ",
              description: "補助終了後の法人コスト変化を詳しく確認できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "2019年から2025年の推移を確認する",
              description: "急騰と高止まりの全体像を年次で確認できます。",
            },
            {
              href: "/how-much-business-electricity-prices-increase",
              title: "法人電気料金はどのくらい上昇したか",
              description: "基準期比での上昇幅を区分別に把握できます。",
            },
            {
              href: "/when-will-business-electricity-prices-drop",
              title: "法人電気料金が下がる条件",
              description: "今後の見通しと判断軸を整理できます。",
            },
            {
              href: "/articles/price-trends",
              title: "電気料金の推移と高止まり（カテゴリ一覧）",
              description: "関連ページ一覧から体系的に学べます。",
            },
          ]}
        />

        <ContentCta
          heading="補助の有無を分けて比較する"
          description="一時的な抑制効果とベース単価を切り分けて比較すると、契約判断の再現性を高めやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/how-to-compare-electricity-suppliers", label: "比較ポイントを見る" },
            { href: "/when-to-review-electricity-contract", label: "見直しタイミングを見る" },
          ]}
        />
      </section>
    </main>
  );
}
