import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "蓄電池導入向き不向き診断｜自社に蓄電池が合うかを整理する";
const pageDescription =
  "法人向け蓄電池（産業用蓄電池）の導入に自社が向いているかを診断チェックで確認。施設規模・電力使用パターン・予算・電気料金プランとの相性など、導入判断のポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "産業用蓄電池 導入 診断",
    "法人 蓄電池 向き不向き",
    "蓄電池 費用対効果 法人",
    "蓄電池 導入 チェックリスト",
    "電力コスト 蓄電池 削減",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/battery-suitability-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/battery-suitability-diagnosis",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const suitabilityChecks = [
  {
    category: "電力使用パターン",
    items: [
      {
        label: "日中に電力使用量のピーク時間帯がある（工場稼働・空調ピーク等）",
        note: "蓄電池は夜間の安価な電力を蓄え、昼間のピーク時間帯に放電することでコストを削減します。ピークが明確な施設ほど効果が出やすい傾向があります。",
        positive: true,
      },
      {
        label: "契約電力（デマンド）の管理に課題があり、デマンドピークを下げたい",
        note: "デマンドコントロール（ピークカット）に蓄電池を活用することで、契約電力を引き下げ、基本料金の削減につながる場合があります。",
        positive: true,
      },
      {
        label: "時間帯別電灯・夜間割引料金など、時間帯別の料金差があるプランを使っている",
        note: "昼夜の料金差が大きいほど、蓄電池のコスト削減効果が出やすくなります。時間帯別プランとの組み合わせは導入の基本パターンです。",
        positive: true,
      },
      {
        label: "電力使用量が少なく、ほぼ一定（ピークが存在しない）",
        note: "ピークがない・使用量が少ない場合、蓄電池の充放電による差益が小さく、投資回収期間が長くなりやすいため向いていない傾向があります。",
        positive: false,
      },
    ],
  },
  {
    category: "施設・設備の条件",
    items: [
      {
        label: "設置スペース（屋内・屋外の平置きまたはラック設置）を確保できる",
        note: "産業用蓄電池は一定の設置スペースが必要です。容量によっては屋外コンテナ型も検討できますが、スペースと搬入経路の確認が前提となります。",
        positive: true,
      },
      {
        label: "施設の使用期間が長期（10年以上）見込まれる",
        note: "蓄電池の投資回収には一般的に7〜12年程度かかります。施設の使用期間が投資回収期間を上回る見通しがあることが前提になります。",
        positive: true,
      },
      {
        label: "太陽光発電設備がある、または同時導入を検討している",
        note: "太陽光と蓄電池を組み合わせることで、自家消費率が高まり、コスト削減効果と停電対応力の両方が向上します。",
        positive: true,
      },
      {
        label: "建物が老朽化しており、設備投資を5年以内に縮小・終了する予定がある",
        note: "施設の転用・解体が近い場合、蓄電池の投資回収が間に合わない可能性が高く、導入の優先度は低くなります。",
        positive: false,
      },
    ],
  },
  {
    category: "資金・予算の条件",
    items: [
      {
        label: "初期投資を一定程度手当てできる（1,000万円〜規模の投資に耐えられる）",
        note: "産業用蓄電池の導入コストは容量・設置条件によりますが、数百万〜数千万円規模になることが一般的です。補助金活用で負担を減らすことも可能です。",
        positive: true,
      },
      {
        label: "国・自治体の補助金を活用できる状況にある",
        note: "経済産業省や環境省の補助金（蓄電池・再エネ関連）が年度ごとに公募されています。補助金を活用することで初期投資を大幅に圧縮できる場合があります。",
        positive: true,
      },
      {
        label: "PPAや融資型の導入スキームを活用できる",
        note: "初期投資なしで蓄電池を導入できるリース・PPA（電力購入協定）型のスキームも普及しています。自己資金が限られる場合でも導入を検討できます。",
        positive: true,
      },
    ],
  },
  {
    category: "BCP・停電対策の観点",
    items: [
      {
        label: "停電時も電力を継続供給する必要がある（病院・データセンター・食品工場等）",
        note: "BCP（事業継続計画）の観点から、停電時のバックアップ電源としての蓄電池導入はコスト削減だけでなく安全・安心の投資として位置づけられます。",
        positive: true,
      },
      {
        label: "非常用発電機（ディーゼル等）があるが、起動までのギャップをカバーしたい",
        note: "蓄電池は瞬時に放電できるため、非常用発電機が起動するまでの数秒〜数十秒のギャップを補う用途にも活用できます。",
        positive: true,
      },
    ],
  },
];

const notSuitableConditions = [
  "電力使用量が非常に少ない（月50kWh程度以下の小規模オフィス等）",
  "施設の移転・閉鎖が近い（5年以内を想定している）",
  "設置スペースを確保できない（密集した建物内の狭小スペース）",
  "初期投資の手当てが全くなく、補助金・リースも活用できない状況",
];

export default function BatterySuitabilityDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          蓄電池導入向き不向き診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          産業用蓄電池は電気料金の削減・デマンド管理・BCP対応など複数の効果が期待できる設備ですが、施設の状況・電力使用パターン・予算によって向き不向きが大きく分かれます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自社に蓄電池が向いているかどうかを「電力使用パターン」「施設・設備」「資金・予算」「BCP観点」の4カテゴリで診断します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>蓄電池が向く電力使用パターンと施設条件</li>
            <li>資金・補助金・リースを活用した導入検討の視点</li>
            <li>BCP・停電対策としての蓄電池の位置づけ</li>
            <li>向いていない条件の整理と次のアクション</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断の前に：蓄電池で何ができるか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            産業用蓄電池の主な活用目的を整理します。自社で実現したいことと照らし合わせながら診断を進めてください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "ピークカット・デマンド削減", body: "使用量ピーク時に放電することで、デマンド（最大需要電力）を下げ基本料金を削減する。" },
              { title: "昼夜差益の活用", body: "夜間の安価な電力を蓄え、昼間のピーク時間帯に放電することで電力量料金の差益を得る。" },
              { title: "太陽光との組み合わせ", body: "太陽光の余剰電力を蓄電し、夜間や曇天時に活用することで自家消費率を向上させる。" },
              { title: "BCP・非常用電源", body: "停電時のバックアップ電源として機能させ、事業継続と安全確保に活用する。" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {suitabilityChecks.map((section) => (
          <section key={section.category} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{section.category}</h2>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-start gap-3 rounded-lg border p-4 ${
                    item.positive
                      ? "border-sky-100 bg-sky-50"
                      : "border-amber-100 bg-amber-50"
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border bg-white text-xs ${
                      item.positive
                        ? "border-sky-300 text-sky-500"
                        : "border-amber-300 text-amber-500"
                    }`}
                  >
                    {item.positive ? "✓" : "✕"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          item.positive
                            ? "bg-sky-100 text-sky-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.positive ? "向いている" : "向いていない"}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-amber-100 bg-amber-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">蓄電池が向いていない条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の条件が当てはまる場合、蓄電池よりも先に取り組むべき選択肢がある可能性があります。
          </p>
          <div className="mt-4 space-y-3">
            {notSuitableConditions.map((condition) => (
              <div key={condition} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-white p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-500">
                  ✕
                </span>
                <p className="text-sm leading-6 text-slate-700">{condition}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            上記に当てはまる場合は、まず{" "}
            <Link href="/self-diagnosis-contract-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力契約の見直し
            </Link>{" "}
            や{" "}
            <Link href="/solar-suitability-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              太陽光発電の検討
            </Link>{" "}
            を優先することを検討してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断結果から次のアクションを考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「向いている」項目が多かった場合の次のステップを整理します。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "電力使用量データ（1年分）とデマンド実績を整理し、削減シミュレーションの基礎データを作る" },
              { step: 2, text: "補助金の公募情報（経済産業省・環境省・都道府県）を確認し、申請可能な制度を把握する" },
              { step: 3, text: "リース・PPAなど初期投資を抑えた導入スキームの条件も並行して確認する" },
              { step: 4, text: "蓄電池メーカー・EPC事業者に現場調査・見積依頼を行い、投資回収期間を試算する" },
              { step: 5, text: "太陽光との同時導入を検討している場合は合わせて見積を取り、セット導入の費用対効果を比較する" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="蓄電池検討と合わせて確認したいページです。"
          links={[
            {
              href: "/solar-suitability-diagnosis",
              title: "太陽光導入向き不向き診断",
              description: "太陽光発電の自家消費が自社に向くかを確認する診断ページ。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "設備投資の前にまず電力契約の見直しを確認する診断ページ。",
            },
            {
              href: "/fixed-vs-market-quick-diagnosis",
              title: "固定プラン・市場連動向き診断",
              description: "蓄電池導入後のプラン選択にも参考になる診断ページ。",
            },
            {
              href: "/industry-risk-diagnosis",
              title: "業種別リスク診断",
              description: "業種別に蓄電池の必要性と優先度を確認する。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害リスクと電力コスト",
              description: "BCP観点での電力リスクと備えを解説。",
            },
            {
              href: "/battery-suitability-diagnosis",
              title: "蓄電池導入向き不向き診断（このページ）",
              description: "現在のページです。",
            },
          ]}
        />

        <ContentCta
          heading="まず電力コストの現状リスクを把握する"
          description="蓄電池・太陽光などの設備投資を検討する前に、現行の電力プランのコストリスクをシミュレーターで確認しておくことで、投資の優先順位を判断しやすくなります。"
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
