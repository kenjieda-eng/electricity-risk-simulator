import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "高圧・特別高圧で市場連動を考えるときの注意点｜規模別リスク試算と判断基準";
const pageDescription =
  "高圧・特別高圧需要家が市場連動プランを検討する際の注意点を解説。使用量が大きいほど価格変動リスクが増幅される仕組み、固定プランとの年間コスト比較の考え方を説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧 市場連動 注意点",
    "特別高圧 市場連動プラン",
    "大口需要家 市場連動 リスク",
    "高圧 JEPX リスク",
    "法人 市場連動 使用量",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/high-voltage-market-linked-considerations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-market-linked-considerations",
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

const considerations = [
  {
    title: "リスクの絶対額が非常に大きい",
    detail:
      "1kWhあたり5円の価格変動でも、月間使用量500,000kWhの特別高圧需要家では月額250万円、年間3,000万円の影響になります。低圧・小口の法人とは桁違いのリスク絶対額を持ちます。",
  },
  {
    title: "需給逼迫時の影響が甚大になる",
    detail:
      "JEPXスポット価格が急騰する需給逼迫局面では、市場連動プランの大口需要家が受けるコスト増が非常に大きくなります。2021年1月の事例では一部の大口需要家が月額コストの数倍の請求を受けたケースもありました。",
  },
  {
    title: "価格上限（キャップ）の有無が重要",
    detail:
      "市場連動プランを選ぶ場合でも、一定価格を超えた分をキャップするプランを選ぶことで、高騰時の影響を限定できます。大口需要家ほど、このキャップ条件の確認が重要です。",
  },
  {
    title: "メリットが出るのは市場価格が低い局面のみ",
    detail:
      "市場連動プランのコストメリットは、JEPXスポット価格が固定プランの電力量料金単価より低い局面に限られます。価格が低い期間と高騰リスクのある期間を比較検討する必要があります。",
  },
  {
    title: "財務影響の許容度を経営層と確認する",
    detail:
      "大口の市場連動プランは、高騰時に年間数千万円〜数億円規模のコスト増をもたらす可能性があります。経営層が許容できるリスク水準を事前に確認・合意したうえで選択する必要があります。",
  },
];

const marketLinkedChecklist = [
  {
    item: "価格上限（キャップ）の設定があるか",
    detail: "急騰時の影響を一定額でキャップするプランを優先します。キャップ水準と適用条件を契約書で確認。",
  },
  {
    item: "最悪ケースの月額影響を試算したか",
    detail: "2021年1月のJEPX急騰（最大251円/kWh）を想定した場合の月額コスト増を数値で把握しておきます。",
  },
  {
    item: "インバランス料金の負担条件を確認したか",
    detail: "計画値と実績値のズレが大きい場合のインバランス料金の負担が契約者側に生じるかを確認します。",
  },
  {
    item: "需給調整コストの扱いを確認したか",
    detail: "市場連動プランでは需給調整コストが別途発生するプランもあります。電力量料金に含まれるかを確認。",
  },
  {
    item: "経営層・財務部門との合意を取ったか",
    detail: "高騰時に年間数千万円〜数億円のコスト増が生じる可能性を経営層に説明し、リスク許容度を合意します。",
  },
  {
    item: "年度予算に変動幅のバッファを確保したか",
    detail: "市場連動プランを選ぶ場合は、固定プランの年間コストを基準に±20〜30%程度のバッファを予算計画に組み込みます。",
  },
];

export default function HighVoltageMarketLinkedConsiderationsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずナビ">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="before:mx-1 before:content-['>']">
            <Link href="/articles/plan-types" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約メニューの違いを知る</Link>
          </li>
          <li className="before:mx-1 before:content-['>']">
            <span className="text-slate-700">高圧・特高の市場連動注意点</span>
          </li>
        </ol>
      </nav>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧・特別高圧で市場連動を考えるときの注意点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力市場が比較的安定していた時期には、市場連動プランは高圧・特別高圧の大口需要家にとってコスト削減の有効な選択肢の一つでした。しかし、使用量が大きい法人ほど、市場価格が高騰した際の影響額も増幅されます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          高圧・特別高圧需要家が市場連動プランを検討する際には、通常時のメリットだけでなく、高騰シナリオでの影響額とリスク許容度を慎重に判断することが不可欠です。このページでは、大口需要家固有の注意点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>使用量規模別の市場連動リスク試算</li>
            <li>大口需要家特有の5つの注意点</li>
            <li>固定vs市場連動の年間コスト比較シミュレーション</li>
            <li>市場連動を選ぶ場合の6項目チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            使用量が大きいほどリスクが増幅される
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランのリスクは、使用量に比例します。1kWhあたりの価格変動幅が同じでも、月間使用量が大きいほど月次コストの増減額が大きくなります。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">使用量別のリスク比較（JEPXが+10円/kWh高騰した場合）</p>
            <div className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
              <p>低圧小規模法人（月間 1,000kWh）　　→ 月額 +1万円、年間 +12万円</p>
              <p>高圧中規模法人（月間 50,000kWh）　→ 月額 +50万円、年間 +600万円</p>
              <p>高圧大規模法人（月間 200,000kWh）　→ 月額 +200万円、年間 +2,400万円</p>
              <p>特別高圧需要家（月間 1,000,000kWh）→ 月額 +1,000万円、年間 +1.2億円</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            小口需要家にとっては許容範囲でも、特別高圧需要家にとっては事業継続に影響する規模になる場合があります。
          </p>
        </section>

        {/* 使用量規模別の市場連動リスク */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量規模別の市場連動リスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXスポット価格が現在より上昇した場合の月額コスト増を使用量規模別に示します。高騰幅が大きいほど、大口需要家への影響が事業規模に比べて非対称に増大します。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月間使用量</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX+5円/kWh時の月額増</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX+10円/kWh時の月額増</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX+20円/kWh時の月額増</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">リスク評価</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">10,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+5万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+10万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+20万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">50,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+25万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+50万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+100万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">高</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">200,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+100万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+200万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+400万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">最高</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">1,000,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+500万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+1,000万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+2,000万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">極めて高い</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 価格上昇分が全て需要家負担になると仮定した試算です。実際はキャップ条件・調整条項により異なります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            大口需要家特有の5つの注意点
          </h2>
          <div className="mt-3 space-y-3">
            {considerations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 固定vs市場連動の年間コスト比較シミュレーション */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定vs市場連動の年間コスト比較シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量50,000kWhの高圧施設を想定し、固定プランと市場連動プランの年間コストをJEPX水準別に比較します。固定プランの電力量料金単価を20円/kWhと仮定。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">シナリオ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPXスポット平均単価（目安）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場連動プランの年間電力量料金</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定プランの年間電力量料金</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額（市場連動－固定）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">市場安定（コスト優位）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">15円/kWh（+諸費用）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,080万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">▲120万円（市場連動が有利）</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">市場高騰（同等〜不利）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20円/kWh（+諸費用）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,440万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">+240万円（ほぼ同等〜不利）</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">市場急騰（大幅不利）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30円/kWh（+諸費用）</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">約2,160万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">+960万円（市場連動が大幅不利）</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 月間50,000kWh×12か月の電力量料金のみの比較試算です。基本料金・再エネ賦課金・燃調等は含みません。実際の単価・諸費用は契約内容によります。</p>
        </section>

        {/* 市場連動を選ぶ場合のチェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧・特高で市場連動を選ぶ場合のチェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            リスクを理解したうえで市場連動プランを採用する場合、以下の6項目を契約前に必ず確認してください。
          </p>
          <div className="mt-4 space-y-3">
            {marketLinkedChecklist.map((c, i) => (
              <div key={c.item} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{c.item}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            固定プランとの年間コスト比較で確認すること
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランを検討する際は、以下の観点で固定プランと比較することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">通常時（市場価格が安定している場合）の年間コスト差：</span>
              市場連動プランが固定プランより安い場合、年間で何円のメリットがあるかを試算します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">高騰時（JEPXが2倍・3倍）の年間コスト差：</span>
              市場価格が急騰した場合、年間コストがどの程度増加するかをシナリオ別に試算します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">「期待値」での比較：</span>
              過去の市場価格推移を参照して、市場連動プランの期待コストと固定プランのコストを比較します。ただし過去の推移が将来を保証するわけではありません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">最悪ケースでの影響：</span>
              2021年1月のような急騰が繰り返された場合の年間コストを把握し、事業継続に影響しないかを確認します。
            </li>
          </ul>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/jepx-spike-electricity-cost-impact",
                title: "JEPX急騰で法人の電気料金はどう上がるか",
                description: "大口需要家に特に影響が大きいJEPX急騰のリスク。",
              },
              {
                href: "/supply-demand-tightness-impact",
                title: "需給逼迫で法人の電気料金はどう変わるか",
                description: "大口需要家への需給逼迫時の影響。",
              },
              {
                href: "/high-voltage-contract-review-points",
                title: "高圧契約の見直しで確認したいこと",
                description: "市場連動vs固定の選択を含む高圧契約の見直し。",
              },
              {
                href: "/extra-high-voltage-contract-review-points",
                title: "特別高圧契約の見直しで確認したいこと",
                description: "大規模需要家の契約見直しの包括的な着眼点。",
              },
              {
                href: "/businesses-not-suited-for-market-linked-electricity-plan",
                title: "市場連動プランが向かない法人の特徴",
                description: "市場連動リスクを慎重に考えるべき法人のケース。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description: "プラン比較の基礎知識。",
              },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="高圧・特別高圧の市場連動リスクを試算する"
            description="現在の使用量をもとに、市場価格が高騰した場合の年間コスト増加額と固定プランとの比較をシミュレーターで確認できます。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
              { href: "/how-to", label: "使い方を見る" },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
