import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電力・省エネ補助金まとめ｜2026年度に使える主要制度一覧";
const pageDescription =
  "2026年度に法人が活用できる電力・省エネ関連の補助金・助成金を一覧で解説。SII省エネ補助金、需要家主導型太陽光PPA支援、SHIFT事業など主要制度の概要・補助率・申請時期を比較し、自社に合った制度選択をサポートします。";
const pageUrl = "https://simulator.eic-jp.org/subsidies-overview";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 補助金 電力",
    "省エネ補助金 2026",
    "SII補助金",
    "太陽光PPA補助金",
    "SHIFT事業",
    "電力コスト削減 補助金",
    "助成金 企業",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const subsidyList = [
  {
    name: "省エネ補助金（先進的省エネルギー投資促進支援事業）",
    agency: "SII（環境共創イニシアチブ）",
    target: "設備投資（空調・照明・変圧器・ボイラー・コンプレッサー等）",
    rate: "中小1/2、大企業1/3以内（A類型・B類型・C類型で異なる）",
    limit: "最大15億円（A類型・工場事業場単位）、最大1億円（C類型）",
    timing: "2026年5月〜7月（一次公募・目安）",
    slug: "subsidy-sii-energy-saving",
  },
  {
    name: "需要家主導型太陽光発電導入支援事業（オフサイトPPA）",
    agency: "環境省",
    target: "オフサイトPPA・自己託送モデルによる太陽光発電導入",
    rate: "定額補助 2〜4万円/kW相当、事業費の1/2〜2/3",
    limit: "事業費の1/2〜2/3（案件規模・容量による）",
    timing: "2026年4月〜6月（目安）",
    slug: "subsidy-demand-side-ppa",
  },
  {
    name: "SHIFT事業（脱炭素化支援機構連携型）",
    agency: "環境省",
    target: "SBT認証取得・GHG削減計画策定・省エネ設備導入",
    rate: "1/2〜2/3以内",
    limit: "計画策定支援: 最大2,000万円、設備導入支援: 最大1億円",
    timing: "2026年6月〜8月（一次公募予定・目安）",
    slug: "subsidy-shift-project",
  },
  {
    name: "自治体独自の電力・省エネ助成金",
    agency: "各都道府県・市区町村",
    target: "省エネ・再エネ設備（自治体ごとに異なる）",
    rate: "自治体により異なる",
    limit: "数十万〜数千万円（自治体ごとに設定）",
    timing: "通年（予算消化次第終了）",
    slug: "subsidy-local-government-list",
  },
];

const comparisonPoints = [
  {
    category: "設備投資型",
    description: "空調・照明・ボイラー等の高効率設備への更新を支援。省エネ効果の数値実証が求められることが多い。",
    suitable: "既存設備が老朽化しており更新タイミングにある企業",
  },
  {
    category: "再エネ調達支援型",
    description: "太陽光PPA・コーポレートPPAを通じた再エネ導入に係る初期コストを支援。",
    suitable: "自家消費だけでなく外部からの再エネ調達も検討している企業",
  },
  {
    category: "脱炭素経営支援型",
    description: "SBT・RE100等の認証取得、GHG削減計画策定に係るコンサル費用等を支援。",
    suitable: "サプライチェーン要請への対応や投融資目的でCO₂削減を求められている企業",
  },
  {
    category: "自治体補助金",
    description: "国の制度と重複不可な場合もあるが、独自制度として上乗せ補助が受けられるケースも。",
    suitable: "立地自治体の施策と自社の投資計画が合致する企業",
  },
];

export default function SubsidiesOverviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">補助金まとめ</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-emerald-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          法人向け電力・省エネ補助金まとめ
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">2026年度に使える主要制度一覧</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の高騰が続くなか、省エネ設備への投資や再エネ調達を支援する補助金・助成金を活用すれば、
          投資回収期間を大幅に短縮できます。本ページでは2026年度に活用可能な主要制度を横断的に整理し、
          自社の状況に合った制度を選ぶための比較情報を提供します。
        </p>
      </header>

      {/* 制度の全体像 */}
      <section className="mt-6 space-y-4">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ今、補助金を活用すべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年以降の電気料金高騰を受け、国・自治体は省エネや再エネ導入に対する補助施策を拡充しています。
            補助金を活用することで、高効率設備や太陽光システムへの投資コストを概ね30〜50%程度削減でき、
            回収期間を数年単位で前倒しにできるケースもあります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ただし補助金は公募期間が限られており、先着・予算上限に達した時点で締め切られます。
            制度の全体像を把握したうえで、投資計画と公募スケジュールを合わせることが重要です。
          </p>
        </section>

        {/* 主要制度一覧テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">主要制度一覧（2026年度）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 以下は概要です。補助率・上限額・公募時期は年度により変更されます。必ず各実施機関の最新公募要領をご確認ください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度名</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">実施機関</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">主な対象</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">補助率（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">上限額（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">公募時期（目安）</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">詳細</th>
                </tr>
              </thead>
              <tbody>
                {subsidyList.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 text-slate-800">{s.name}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.agency}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.target}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.limit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{s.timing}</td>
                    <td className="border border-slate-200 px-3 py-2">
                      <Link href={`/${s.slug}`} className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                        詳細へ
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※2026年4月時点の公開情報に基づく概算です。正式な公募要領は各制度の公式サイトでご確認ください。年度途中での変更・追加公募の可能性があります。
          </p>
        </section>

        {/* 制度タイプ別の特徴 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金のタイプ別特徴と向いている企業</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {comparisonPoints.map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-emerald-800">{item.category}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                <p className="mt-2 text-xs text-slate-500">
                  <span className="font-semibold text-slate-600">向いている企業：</span>
                  {item.suitable}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 補助金活用の流れ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金活用の全体フロー</h2>
          <div className="mt-4 space-y-3">
            {[
              { step: "STEP 1", label: "自社の課題・投資計画の整理", detail: "電気料金削減目標、設備更新計画、脱炭素ロードマップを整理する" },
              { step: "STEP 2", label: "利用可能な制度の絞り込み", detail: "本ページの一覧や各制度の詳細ページで要件・補助率を比較する" },
              { step: "STEP 3", label: "公募スケジュールの確認", detail: "実施機関のウェブサイトで公募時期・応募方法・提出書類を確認する" },
              { step: "STEP 4", label: "申請書類の準備", detail: "省エネ診断・投資計画書・稟議書などを社内で整備する" },
              { step: "STEP 5", label: "申請・採択審査", detail: "採択後は交付決定を受けてから設備発注・工事を進める（着工前申請が原則）" },
              { step: "STEP 6", label: "実績報告・補助金受領", detail: "完了報告書の提出後、補助金が交付される" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="shrink-0 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">{s.step}</span>
                <div>
                  <p className="font-semibold text-slate-800">{s.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 制度選択のポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">制度選択・申請時のポイント</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-emerald-600">▶</span>
              <span><strong>着工前申請が大原則：</strong>採択・交付決定の前に設備を発注・着工すると補助対象外になります。スケジュールを逆算して動く必要があります。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-emerald-600">▶</span>
              <span><strong>国と自治体の併用：</strong>同一設備に対して国の補助金と自治体補助金を重複して受給できない場合があります。申請前に各実施機関に確認してください。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-emerald-600">▶</span>
              <span><strong>省エネ診断の活用：</strong>SII等の省エネ診断を事前に受けると、申請書類の精度が上がり採択率が高まる傾向があります。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-emerald-600">▶</span>
              <span><strong>補助率だけで選ばない：</strong>補助率が高くても要件が厳しかったり、実績報告の負担が大きい制度もあります。トータルの手続きコストを見積もることが重要です。</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-emerald-600">▶</span>
              <span><strong>稟議書・社内合意：</strong>補助金申請には社内の投資承認が必要です。早めに経営層・経理・法務と連携しましょう。</span>
            </li>
          </ul>
        </section>

        {/* 情報の鮮度に関する注記 */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="text-base font-semibold text-amber-800">情報の鮮度についての注記</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            本ページの情報は2026年4月時点の公開情報をもとにしています。補助金制度は年度ごとに内容・補助率・上限額が変更される場合があります。
            申請前に必ず各実施機関の最新公募要領をご確認ください。
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            <li>・ SII（環境共創イニシアチブ）: <a href="https://sii.or.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://sii.or.jp/</a></li>
            <li>・ 資源エネルギー庁: <a href="https://www.enecho.meti.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.enecho.meti.go.jp/</a></li>
            <li>・ 環境省: <a href="https://www.env.go.jp/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">https://www.env.go.jp/</a></li>
          </ul>
        </section>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "対象設備・補助率・申請スケジュールを詳しく解説" },
            { href: "/subsidy-demand-side-ppa", title: "需要家主導型太陽光PPAの補助金活用", description: "オフサイトPPAで電力コストを削減する仕組みと補助制度" },
            { href: "/subsidy-shift-project", title: "SHIFT事業と電力コスト戦略", description: "SBT認証・脱炭素経営支援の活用法" },
            { href: "/subsidy-local-government-list", title: "自治体別 電力関連補助金の探し方", description: "都道府県・市区町村の独自制度を効率的に探す方法" },
            { href: "/subsidy-application-approval-document", title: "補助金申請を前提とした稟議書の書き方", description: "構成と数値の示し方を具体的に解説" },
            { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光は電気料金対策としてどう効くか", description: "導入効果と費用対効果の考え方" },
            { href: "/articles/subsidies", title: "補助金・助成金カテゴリ一覧", description: "補助金関連記事をまとめて確認" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="まず自社の電気料金リスクを把握しましょう"
          description="補助金活用を検討する前に、現状の電気料金負担とリスクを数値で確認。シミュレーターで診断すれば、どの制度が最も効果的かを判断する材料になります。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/subsidies", label: "補助金記事一覧を見る" },
          ]}
        />
      </div>
    </main>
  );
}
