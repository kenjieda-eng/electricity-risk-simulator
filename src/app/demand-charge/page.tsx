import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "デマンドとは？法人の電気料金と契約電力の関係を解説";
const pageDescription =
  "デマンドの意味、契約電力との関係、基本料金への影響、請求書や見直し時に確認したいポイントを法人向けに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンドとは",
    "法人 電気料金 デマンド",
    "契約電力 基本料金",
    "高圧電力 デマンド",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/demand-charge",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-charge",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "デマンドとは",
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

export default function DemandChargePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          デマンドとは？法人の電気料金と契約電力の関係をわかりやすく解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金では、使用電力量だけでなく、どの時間帯にどれだけ電力を使ったかによって基本料金の見え方が変わることがあります。
          特に高圧電力では、デマンドの考え方が契約電力や基本料金の理解に直結します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、デマンドの意味と電気料金との関係を整理し、請求確認や見直し時にどこを見ればよいかを実務目線で解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">このページで分かること</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>デマンドが何を表すか</li>
            <li>月間使用量との違いと、請求書で確認する意味</li>
            <li>契約電力・基本料金の理解にどうつながるか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンドは「月の合計」ではなく「短時間の集中」を見る考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドは、短い時間に電力使用がどれだけ集中したかを見る考え方です。高圧・特別高圧では、30分単位のピーク値が契約電力の理解に関係しやすく、
            基本料金の見方にも影響します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量が同じでも、使い方の時間配分が違えばピークの出方は変わります。デマンドは「使用量は同じなのに請求感が違う」理由を説明する入口になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月間使用量とデマンドの違い</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">見る項目</th>
                  <th className="border border-slate-200 px-3 py-2">使用量</th>
                  <th className="border border-slate-200 px-3 py-2">デマンド</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">何を見るか</td>
                  <td className="border border-slate-200 px-3 py-2">月間でどれだけ使ったか</td>
                  <td className="border border-slate-200 px-3 py-2">短時間の使用集中の大きさ</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">主に関係する料金</td>
                  <td className="border border-slate-200 px-3 py-2">電力量料金</td>
                  <td className="border border-slate-200 px-3 py-2">契約電力・基本料金の理解</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">実務で役立つ場面</td>
                  <td className="border border-slate-200 px-3 py-2">使用量増減の確認</td>
                  <td className="border border-slate-200 px-3 py-2">ピーク負荷や固定費の確認</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドと契約電力の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の契約では、短時間のピーク使用の出方が契約電力の考え方と関係しやすくなります。契約電力は基本料金に直結しやすいため、
            使用量だけでなくピークの出方も確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力の基礎は
            {" "}
            <Link href="/contract-demand-what-is-it" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              契約電力とは
            </Link>
            で整理できます。本ページでは、その補完としてデマンドの見方を中心に扱います。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">同じ使用量でもデマンドで見え方が変わる例</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            A社は朝9時に空調・照明・設備を一斉稼働、B社は設備の立ち上げ時間を分散して稼働したとします。月間使用量が近くても、
            短時間のピークはA社の方が出やすく、契約電力や基本料金の見え方に差が出ることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「使用量は同じなのに高い」と感じる場合は、電力量料金だけでなく、契約電力と基本料金の構造を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな会社でデマンドが上がりやすいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>朝の始業時に空調と照明をまとめて入れるオフィス</li>
            <li>生産開始時に複数設備を一斉稼働する工場</li>
            <li>夏季・冬季に空調負荷が集中しやすい施設</li>
            <li>冷凍・冷蔵設備を多く持つ施設</li>
            <li>曜日や時間帯で負荷が偏る施設</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求額の増加要因を自社側で整理したい場合は
            {" "}
            <Link href="/why-business-electricity-costs-are-high" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電気料金が高い会社の特徴
            </Link>
            もあわせて確認すると、見直しの優先順位を決めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書や見直し時に確認したい順番</h2>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力が現在の運用実態に合っているか</li>
            <li>使用時間帯にピーク集中が起きていないか</li>
            <li>季節や曜日で偏りがないか</li>
            <li>基本料金と電力量料金を分けて見られているか</li>
            <li>設備や運用の変化がないか</li>
          </ol>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求確認の流れは
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              請求書の確認ポイント
            </Link>
            、見直し時期の整理は
            {" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミングの解説
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドを確認するときの初歩的な見直し視点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>同時起動を避け、立ち上げを分散できないか</li>
            <li>空調や大型設備の起動時間をずらせないか</li>
            <li>ピークが出やすい季節・曜日・時間帯を把握できているか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドは、契約電力と基本料金を理解するための実務的な基礎です。使用量だけで判断せず、ピークの出方を含めて確認することで、見直しの方向性を具体化しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">こんな方におすすめ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>初めて請求書を見る担当者</li>
            <li>契約更新前に全体像を確認したい方</li>
            <li>見積比較の前提知識を整理したい方</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次に読むページ</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>まず全体像を知るなら「法人向け電気料金の内訳とは」</li>
            <li>基本料金の前提を確認するなら「契約電力とは」</li>
            <li>請求書を確認するなら「電気料金の請求書で確認したいポイント」</li>
            <li>見積比較に進むなら「法人向け電気料金見積書の見方」</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="デマンドの理解を、請求確認と比較判断につなげるための導線です。"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "契約電力の基本と、基本料金との関係を整理できます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧請求書を読むときの全体構造を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "請求書での確認順序と見るべき項目を整理できます。",
            },
            {
              href: "/articles",
              title: "法人向け電気料金の基礎知識",
              description: "関連テーマをカテゴリ別でまとめて確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較・シミュレーションへ進む"
          description="デマンドと契約電力の関係を整理したら、現行契約と候補条件を比較して見直し余地を確認できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
