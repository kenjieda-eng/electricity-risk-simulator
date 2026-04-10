import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "デマンド抑制はどこまで効果があるか｜基本料金削減の可能性と限界";
const pageDescription =
  "法人の電気料金における「デマンド（最大需要電力）」の抑制が、基本料金削減にどこまで効果があるかを解説します。デマンド料金制の仕組み、抑制の実効性と限界、および蓄電池・省エネとの組み合わせについて整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンド抑制 効果 法人",
    "最大需要電力 基本料金 削減",
    "デマンド管理 電気料金",
    "法人 基本料金 下げ方",
    "デマンドコントロール 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/demand-suppression-effectiveness",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-suppression-effectiveness",
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

const demandMeasurementMechanism = [
  {
    step: "1",
    heading: "30分ごとの平均使用電力を計測",
    content:
      "電力会社のスマートメーターは、30分を1コマとして、そのコマ内の平均電力（kW）を記録します。コマ内の最大瞬時値ではなく平均値であることがポイントです。",
  },
  {
    step: "2",
    heading: "月間最大値がデマンドとなる",
    content:
      "1か月（通常30〜31日）の全コマのうち、最大の30分平均電力値がその月の「最大需要電力（デマンド）」として記録されます。このデマンドが基本料金の算定基準になります。",
  },
  {
    step: "3",
    heading: "基本料金はデマンドに比例",
    content:
      "高圧・特別高圧契約の基本料金は「デマンド（kW）×基本料金単価（円/kW）」で算定されます。デマンドを10kW下げれば、毎月その分の基本料金が削減されます。",
  },
];

const suppressionMethods = [
  {
    method: "デマンドコントローラーの設置",
    detail:
      "デマンドが設定上限に近づくと、設定した設備（空調・照明・電熱等）の稼働を一時的に制御するシステムです。30分コマ内の超過を自動的に防ぎます。比較的低コストで導入できる対策です。",
    effectiveness: "高い（ピーク時の自動制御が可能）",
  },
  {
    method: "蓄電池によるピーク補完",
    detail:
      "ピーク発生時に蓄電池から放電して系統からの購入電力を減らすことで、30分平均値を引き下げます。機器の停止を伴わずにデマンドを抑制できる点がメリットです。",
    effectiveness: "高い（業務への影響なしにピーク抑制）",
  },
  {
    method: "稼働スケジュールの分散",
    detail:
      "複数設備の起動タイミングを分散させることで、同時稼働によるピークを回避します。生産計画・シフトを工夫することで実現できますが、業務運用の変更が必要な場合があります。",
    effectiveness: "中程度（業務制約との兼ね合いが必要）",
  },
  {
    method: "自家消費太陽光との組み合わせ",
    detail:
      "昼間のデマンドピーク時間帯と太陽光発電のピーク時間が重なる場合、自家消費分だけ系統からの電力を減らしデマンドを抑制できます。",
    effectiveness: "中程度（晴天昼間限定）",
  },
];

const limitations = [
  {
    limitation: "月に1回のピーク記録がすべて",
    detail:
      "デマンドは月の最大値が記録されます。月に29日は適切に抑制できても、1日だけピークが発生すると、その月のデマンドはそのピーク値になります。抑制は「確実性」が重要です。",
  },
  {
    limitation: "契約電力の変更には時間がかかる",
    detail:
      "デマンドを継続して低く抑えると、より低い契約電力への変更申請が可能になります。ただし、電力会社との契約変更には申請・確認のプロセスが必要で、即座には変更できません。",
  },
  {
    limitation: "低圧契約ではデマンド料金が適用されない",
    detail:
      "低圧（主に小規模な事業所）では定額の基本料金制が多く、デマンドに比例した基本料金制ではないため、デマンド抑制による基本料金削減効果が出ない場合があります。",
  },
  {
    limitation: "基本料金比率が低い場合は効果限定的",
    detail:
      "電気料金全体に占める基本料金の割合が低い場合（例：電力量料金が大部分を占める場合）は、デマンド削減の全体コストへの影響が小さくなります。",
  },
];

export default function DemandSuppressionEffectivenessPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          デマンド抑制はどこまで効果があるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を下げる方法として「デマンド（最大需要電力）を下げる」ことが有効だと言われます。しかし、実際にどの程度の効果があり、どのような限界があるのかを理解しておくことが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          デマンド料金の仕組み、抑制の手段と実効性、そして限界を正しく把握することで、基本料金削減対策に取り組む際の判断精度が高まります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>デマンドの測定方法と基本料金算定の仕組み</li>
            <li>デマンド抑制の主な手段と実効性</li>
            <li>デマンド抑制の限界と注意点</li>
            <li>他の対策との組み合わせによる効果の最大化</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンドと基本料金の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド（最大需要電力）が基本料金に影響する仕組みを理解することが、抑制対策の出発点になります。
          </p>
          <div className="mt-4 space-y-3">
            {demandMeasurementMechanism.map((item) => (
              <div
                key={item.step}
                className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.heading}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-slate-900">計算例</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              デマンド100kW・基本料金単価1,500円/kWの場合、月の基本料金は150,000円。デマンドを90kWに抑制できれば135,000円となり、月額15,000円・年間180,000円の削減になります。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制の主な手段と実効性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドを下げるための主な方法と、それぞれの実効性を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {suppressionMethods.map((item) => (
              <div
                key={item.method}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.method}</p>
                  <span className="shrink-0 rounded-full bg-sky-50 px-2 py-0.5 text-xs text-sky-700">
                    効果: {item.effectiveness}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制の限界と注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制対策を講じる前に、以下の限界と注意点を把握しておくことが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {limitations.map((item) => (
              <div
                key={item.limitation}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.limitation}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            効果を最大化するための組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制単独では限界がある場合、他の対策と組み合わせることで基本料金削減と電力量料金削減を両立できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー＋蓄電池</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                デマンドコントローラーで制御対象と閾値を設定し、ピーク時に蓄電池から補完することで、業務停止なしに安定したデマンド抑制が可能になります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド抑制＋省エネ投資</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                高効率空調・LED照明・インバーター化などの省エネ設備投資により設備単体の消費電力を下げることで、ピーク発生時のデマンドも低下させる効果があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド抑制＋契約電力の見直し</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                デマンドを継続して低く抑えた実績をもとに、電力会社に契約電力の引き下げを申請します。契約電力が変わると基本料金の計算基準が変わるため、さらなる削減につながります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光＋デマンド抑制</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                昼間のデマンドピーク時間帯に自家消費太陽光が発電している場合、系統購入が減りデマンドが自然に抑制されます。晴天昼間のピーク抑制に有効です。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池による具体的なデマンド抑制の仕組みは{" "}
            <Link
              href="/battery-electricity-cost-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              蓄電池は電気料金対策としてどう効くか
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制が特に有効な法人の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制による基本料金削減が特に有効な法人の特徴を整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold">高圧・特別高圧契約の法人：</span>
              デマンド料金制が適用されるため、デマンド削減が直接基本料金削減につながります。
            </li>
            <li>
              <span className="font-semibold">デマンドのピークが特定の時間帯に集中している：</span>
              昼食後の空調再稼働・生産ライン一斉起動など、ピークが予測・特定できる場合は抑制対策が立てやすくなります。
            </li>
            <li>
              <span className="font-semibold">現在の契約電力に対してデマンドが低い月が多い：</span>
              毎月のデマンドが契約電力を大幅に下回っている場合は、契約電力の見直しで基本料金削減の余地があります。
            </li>
            <li>
              <span className="font-semibold">基本料金が電気料金全体の大きな割合を占める：</span>
              基本料金比率が高いほど、デマンド削減の全体コスト削減への寄与率が高まります。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制は高圧・特別高圧契約の法人にとって有効な基本料金削減手段ですが、月に1回でもピークが発生するとその月のデマンドが更新される仕組みのため、確実な抑制が重要です。デマンドコントローラー・蓄電池・稼働スケジュール分散などの手段を組み合わせ、継続的にデマンドを管理することで、基本料金の長期的な削減効果が期待できます。ただし、低圧契約や基本料金比率が低い場合は効果が限定的なため、自社の料金構造を確認した上で優先順位を判断することが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池は電気料金対策としてどう効くか",
              description: "デマンド抑制とピークカットの仕組みを解説。",
            },
            {
              href: "/why-corporations-consider-batteries",
              title: "法人が蓄電池を検討する理由",
              description: "電気料金対策とBCPの両面から蓄電池検討の動機を整理。",
            },
            {
              href: "/demand-response-cost-benefit",
              title: "DRは電気料金対策としてどう考えるか",
              description: "需要応答への参加とデマンド管理の組み合わせ。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "昼間のデマンドピーク抑制と太陽光の組み合わせ。",
            },
            {
              href: "/factory-battery-considerations",
              title: "工場で蓄電池を検討するときの着眼点",
              description: "生産ラインとデマンド管理を両立する工場特有の検討。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人電気料金の明細の見方",
              description: "基本料金とデマンドの関係を請求書で確認する方法。",
            },
          ]}
        />

        <ContentCta
          heading="基本料金の削減余地を確認する"
          description="現在の契約電力とデマンドの状況をもとに、基本料金削減の可能性をシミュレーションできます。"
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
