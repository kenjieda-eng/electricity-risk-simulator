import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "基本料金の見方｜契約電力と単価の関係を理解する";
const pageDescription =
  "電気料金の基本料金がどのように計算されるかを解説。契約電力（kW）・基本料金単価・力率割引の仕組みと、基本料金を下げるための考え方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "基本料金 見方",
    "契約電力 基本料金 計算",
    "高圧 基本料金 単価",
    "力率割引 基本料金",
    "法人 電気料金 基本料金 下げる",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/basic-charge-explained",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/basic-charge-explained",
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

const basicChargeTopics = [
  {
    heading: "基本料金の算出式",
    content: [
      "高圧電力（および特別高圧）の基本料金は、「契約電力（kW）× 基本料金単価（円/kW）× 力率係数」で算出されます。この3要素のいずれかを変えることで基本料金の増減が生じます。",
      "例えば、契約電力が500kW・基本料金単価が1,500円/kW・力率割引率が0.97（力率97%の場合）であれば、基本料金は500 × 1,500 × 0.97 = 727,500円（消費税別）となります。月間使用量がどれだけ少なくても、この金額は毎月固定で発生します。",
    ],
    checkPoints: [
      "自社の現行の契約電力（kW）",
      "現在適用されている基本料金単価（円/kW）",
      "力率の実績値と力率係数（割引・割増）",
      "月間請求額に占める基本料金の割合",
    ],
  },
  {
    heading: "契約電力はどうやって決まるか",
    content: [
      "高圧電力の契約電力は、過去1年間（当月を含む直近12か月）の最大需要電力（デマンド値）によって自動的に決定されます。これを「1年間固定制」といい、一度高いデマンドが記録されると、その後1年間は基本料金の計算基礎が高い水準に固定されます。",
      "デマンド値は30分間の平均電力の最大値として計録されます。「たまたまその30分間だけ電力使用が集中した」という場合でも、年間の契約電力が決まってしまう点に注意が必要です。デマンドコントローラー（デマコン）の設置・運用によって意図的にデマンドを抑制することが、基本料金管理の基本的な手段です。",
    ],
    checkPoints: [
      "現在の契約電力は何年何月のデマンド実績から設定されているか",
      "過去12か月のデマンド最大値と最小値の差",
      "デマンドコントローラーの設置有無と設定値",
      "デマンドが高くなりやすい月・時間帯の特定",
    ],
  },
  {
    heading: "力率割引・割増の仕組み",
    content: [
      "力率とは、電力設備に供給された電力のうち、実際に仕事（熱・光・動力）として使われた割合を示す指標です。100%に近いほど効率よく電力が使われていることを示します。高圧電力では一般的に、力率が85%を超えた分については1%ごとに基本料金が0.5〜1%程度割り引かれます（電力会社・メニューによって異なる）。",
      "一方、力率が85%を下回ると割増となり、基本料金が増加します。工場などで誘導電動機（モーター）を多用している施設は力率が低くなりやすい傾向があります。進相コンデンサーの設置によって力率を改善し、基本料金の割引を受けることは、初期投資に対して高いコスト削減効果が見込める対策の一つです。",
    ],
    checkPoints: [
      "現在の力率の実績値（月次）",
      "力率割引・割増の適用状況",
      "力率が低い場合、進相コンデンサーの設置を検討しているか",
      "見積書を比較する際、力率条件が同じ前提かどうか",
    ],
  },
  {
    heading: "季節による基本料金の変動",
    content: [
      "電力会社の料金メニューによっては、夏季・冬季に基本料金単価が通常期より高く設定されている「季節別料金」が適用される場合があります。例えば「7月〜9月は基本料金単価が10%高い」といった設定です。",
      "季節による基本料金の変動がある場合、年間の基本料金総額は単純に「月額×12」では計算できません。見積書では各月の基本料金単価が記載されているかどうかを確認し、年間コストを正確に算出するために月別の試算を行ってください。",
    ],
    checkPoints: [
      "現行契約に季節別基本料金単価の設定があるか",
      "見積書でも同じ条件で季節変動が反映されているか",
      "夏季・冬季の基本料金が通常期と比べてどの程度異なるか",
    ],
  },
  {
    heading: "基本料金を下げるための考え方",
    content: [
      "基本料金は「契約電力×単価×力率係数」ですから、削減には①契約電力の引き下げ、②より安い単価のメニューへの変更、③力率の改善、の3つのアプローチがあります。",
      "①契約電力の引き下げは、デマンド管理の強化によって最大需要電力を実際に抑えることが前提です。デマンドが下がれば翌年の契約電力が下がり、基本料金が自動的に下がります。②メニュー変更は見積比較によって実現します。③力率改善は設備投資（進相コンデンサー設置等）が必要ですが、効果が継続するため投資回収期間が比較的短くなるケースが多くあります。",
    ],
    checkPoints: [
      "デマンド管理の強化によって契約電力を引き下げられる余地があるか",
      "現在より基本料金単価が安いメニューや電力会社が存在するか",
      "力率改善のための設備投資（進相コンデンサー等）のコスト対効果",
      "3つのアプローチのうち、自社で取り組みやすいものはどれか",
    ],
  },
  {
    heading: "基本料金と電力量料金のバランス",
    content: [
      "基本料金が月間請求額の何%を占めているかを把握することで、コスト削減の優先度が見えてきます。基本料金比率が50%を超えるような場合は、使用量削減（節電）よりも契約電力の引き下げやメニュー変更の方が削減効果が大きくなります。",
      "逆に基本料金比率が20%以下であれば、電力量料金（単価×使用量）の見直しの方が効果的な場合があります。節電投資と電力会社変更・メニュー変更のどちらに注力すべきかを判断するための指標として、基本料金比率を把握しておくことが有用です。",
    ],
    checkPoints: [
      "月間請求額に占める基本料金の割合",
      "基本料金比率が高い場合はデマンド管理・メニュー変更を優先",
      "電力量料金比率が高い場合は節電・時間帯シフトを優先",
    ],
  },
];

export default function BasicChargeExplainedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          基本料金の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の基本料金は、使用量がゼロでも毎月固定で発生するコストです。高圧電力では「契約電力（kW）× 基本料金単価 × 力率係数」で算出され、デマンド管理と力率の状態が基本料金の水準を左右します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、基本料金の算出構造・契約電力の決まり方・力率割引の仕組みを解説し、基本料金を削減するための考え方を整理します。デマンド値について詳しくは{" "}
          <Link
            href="/demand-value-guide"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            デマンド値の見方
          </Link>{" "}
          もあわせてご覧ください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>基本料金の算出式と3つの構成要素</li>
            <li>契約電力がデマンドによって決まる仕組み</li>
            <li>力率割引・割増の仕組みと影響</li>
            <li>基本料金を下げるための3つのアプローチ</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            基本料金の位置づけ：固定費として把握する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の費用構造は大きく「固定費（基本料金）」と「変動費（電力量料金＋調整費）」に分かれます。基本料金は使用量に関わらず毎月一定額が発生する固定費であり、節電による削減効果は直接には現れません。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">基本料金（固定費）</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>契約電力（kW）が変わらない限り一定</li>
                <li>使用量がゼロでも発生</li>
                <li>削減には契約電力・単価・力率の変更が必要</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">電力量料金（変動費）</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>使用量（kWh）に比例して変動</li>
                <li>節電・稼働見直しで削減可能</li>
                <li>燃料費調整額・再エネ賦課金も変動費</li>
              </ul>
            </div>
          </div>
        </section>

        {basicChargeTopics.map((section) => (
          <section
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            {section.content.map((para, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
                {para}
              </p>
            ))}
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {section.checkPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            基本料金の確認チェックリスト
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金に関して請求書・見積書で確認すべき項目を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">確認項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">確認先</th>
                  <th className="p-3 text-left font-semibold text-slate-900">目的</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">契約電力（kW）</td>
                  <td className="p-3 text-slate-700">請求書・契約書</td>
                  <td className="p-3 text-slate-700">基本料金の計算基礎を確認</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">基本料金単価（円/kW）</td>
                  <td className="p-3 text-slate-700">請求書・見積書</td>
                  <td className="p-3 text-slate-700">見積比較の基準値</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">力率の実績値</td>
                  <td className="p-3 text-slate-700">請求書・デマンドデータ</td>
                  <td className="p-3 text-slate-700">割引・割増の根拠確認</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">デマンド実績（過去12か月）</td>
                  <td className="p-3 text-slate-700">請求書・デマコン記録</td>
                  <td className="p-3 text-slate-700">契約電力の見直し余地の判断</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">季節別料金の有無</td>
                  <td className="p-3 text-slate-700">料金メニュー・見積書</td>
                  <td className="p-3 text-slate-700">年間コスト試算の精度向上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">施設規模別 基本料金の早見表</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">単価1,650円/kW、力率割引0.97で計算した場合の目安です。</p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">施設規模</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約電力</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">基本料金（月額）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間基本料金</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">小規模オフィス</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">100kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約16万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約192万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中規模工場</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">500kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約80万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約960万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大型商業施設</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,000kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約160万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,920万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">大規模工場（特高）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3,000kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約480万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約5,760万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド値を<span className="font-semibold text-slate-900">10%</span>削減できれば、500kW契約で年間約<span className="font-semibold text-slate-900">96万円</span>の基本料金削減になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="基本料金の理解を深め、見直しや見積比較に活かすための関連ページです。"
          links={[
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "デマンド値が契約電力・基本料金に与える影響と管理方法を詳しく解説。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "基本料金と対をなす変動費部分の構造と確認ポイント。",
            },
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電力の請求書の見方",
              description:
                "高圧電力の請求書における基本料金の確認方法。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description:
                "請求書の全体構造と主要項目の読み方を整理。",
            },
            {
              href: "/high-voltage-quotation-guide",
              title: "高圧電力見積書の見方",
              description:
                "見積書で基本料金単価を比較する際のポイント。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description:
                "複数の見積書を横並びで比較するための整理方法。",
            },
          ]}
        />

        <ContentCta
          heading="基本料金のリスクをシミュレーションする"
          description="契約電力・デマンドの情報をもとに、電気料金の固定費部分がどのように変化するかを試算できます。見直しの検討にお役立てください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="basic-charge-explained" />
      </div>
    </main>
  );
}
