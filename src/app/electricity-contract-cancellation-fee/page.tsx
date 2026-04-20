import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle = "電力契約の違約金・解約金｜確認すべきポイントと相場";
const pageDescription =
  "電力契約を中途解約したときに発生する違約金・解約金について、発生条件・計算方法・相場・新電力と大手電力の違い・違約金を払っても切替たほうが得になる判断基準を整理します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-contract-cancellation-fee";

// 違約金条項の典型パターン
const penaltyPatterns = [
  {
    pattern: "A. 残存期間分の基本料金",
    formula: "基本料金（円/月）× 残月数",
    example: "契約電力200kW × 1,600円/kW × 残18ヶ月 = 576万円",
    note: "特別高圧・高圧で多い。基本料金に連動するため金額が大きくなりがち。",
  },
  {
    pattern: "B. 月額電気代 × 残期間 × 一定率",
    formula: "月額平均電気代 × 残月数 × 10〜30%",
    example: "月額180万円 × 残18ヶ月 × 20% = 648万円",
    note: "新電力で採用が多い。'期待利益の補填'の性格を持つ。",
  },
  {
    pattern: "C. 定額違約金",
    formula: "契約で定めた定額（例：基本料金2ヶ月分）",
    example: "基本料金32万円 × 2ヶ月 = 64万円",
    note: "低圧法人向け・オフィス用の小規模契約で見られる。",
  },
  {
    pattern: "D. 違約金なし（月単位解約可）",
    formula: "—",
    example: "—",
    note: "自動更新型の短期契約や、近年増えている'違約金ゼロ'の新電力プラン。",
  },
];

// 判断基準
const judgementRows = [
  { check: "想定削減額 > 違約金", decision: "切替して即時回収。残期間の削減益で違約金を上回る" },
  { check: "想定削減額 < 違約金、残期間 < 6ヶ月", decision: "満期を待って切替。違約金を払う理由が薄い" },
  { check: "想定削減額 < 違約金、残期間 > 12ヶ月", decision: "要検討。市場動向・値上げリスク・BCPの観点を合わせて判断" },
  { check: "最終保障供給中", decision: "違約金なし。早急に切替" },
  { check: "値上げ通知を受けたタイミング", decision: "値上げ条項を拒否できる場合は違約金なしで解約できる可能性" },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 違約金",
    "電気契約 解約金",
    "電気 中途解約 違約金",
    "新電力 違約金",
    "電力契約 切替 違約金",
    "違約金ゼロ 電気",
    "電気料金 契約解除",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/contract-legal", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/contract-legal"],
  },
};

export default function ElectricityContractCancellationFeePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "電力契約の違約金・解約金" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">違約金・解約金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            電力契約の違約金・解約金｜確認すべきポイントと相場
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約を契約期間中に解約するとき、違約金（解約金・精算金）を請求されるケースがあります。料金が大幅に上がった新電力から切替えたいが、違約金の額が分からず判断できない——というのは、法人担当者が最もよく直面する悩みの一つです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、違約金が発生する条件と典型的な計算パターン、新電力と大手電力の違い、違約金ゼロ契約の見極め方、そして「違約金を払ってでも切替たほうが得」になる判断基準を整理します。条項読解の詳細は
            <Link href="/penalty-clause-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">違約金・精算金条項の計算方法</Link>
            も合わせて参照してください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* H2: 発生条件 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金が発生する条件</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              違約金の発生は、契約書と供給約款の双方で定められます。いずれかに違約金条項があれば、その金額が請求される可能性があります。実務上は次の3要素を確認します。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">契約期間が残っているか：</span>期間満了後は原則違約金なし。期間途中での中途解約が対象</li>
              <li><span className="font-medium text-slate-900">違約金条項の有無：</span>契約書の「解約」「期間」「精算金」などの条項を確認。条項がなければ違約金なし</li>
              <li><span className="font-medium text-slate-900">免除条件の有無：</span>供給事業者による値上げ通知時、供給不履行時、最終保障供給への移行時は免除となる契約が多い</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              また、多くの契約書には「需要家の都合により解約する場合」という条件付きの違約金条項が入っています。供給事業者側の都合（値上げ・撤退・条件変更）による解約は、違約金を免除できる解釈の余地があるため、通知文の文面を必ず保管してください。
            </p>
          </section>

          {/* H2: 典型的な計算パターンと相場 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">典型的な計算パターンと相場</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力契約の違約金は主に4パターンに分類できます。どのパターンかによって金額が大きく変わるため、契約書の該当条項を正確に読み取ることが重要です。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">パターン</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">計算式</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">金額例</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {penaltyPatterns.map((p) => (
                    <tr key={p.pattern} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{p.pattern}</td>
                      <td className="border border-slate-200 px-3 py-2 font-mono text-xs">{p.formula}</td>
                      <td className="border border-slate-200 px-3 py-2 text-sky-800 font-semibold">{p.example}</td>
                      <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">{p.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 金額例は理解のための概算値です。実際の違約金は契約書の条項に従って算定されます。
            </p>
          </section>

          {/* H2: 新電力と大手電力の違い */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">新電力と大手電力の違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一般論として、違約金の設計思想は新電力（特定卸供給契約ベース）と大手電力（旧一般電気事業者）で異なります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><span className="font-medium text-slate-900">大手電力：</span>経過措置料金（規制料金）は違約金なしが原則。自由料金でも「基本料金1〜2ヶ月分の精算金」程度が多い</li>
              <li><span className="font-medium text-slate-900">新電力（固定型）：</span>1〜3年の契約期間を設け、残期間分の基本料金や電気代見込みの一定率（10〜30%）を違約金として設定する例が多い</li>
              <li><span className="font-medium text-slate-900">新電力（市場連動型）：</span>違約金なし・月単位解約可の契約が比較的多い。市場リスクを需要家が負うかわりに拘束力を緩めている</li>
              <li><span className="font-medium text-slate-900">ガスセット契約：</span>ガス側の違約金と合算されることがある。電気単独では確認しにくいため、ガス契約書も確認</li>
            </ul>
          </section>

          {/* H2: 違約金ゼロ契約の見極め方 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金ゼロ契約の見極め方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              「違約金ゼロ」と謳われる契約には、本当に拘束がないものと、条件付きで実質的に違約金が発生するものが混在しています。見極めるには次の条項を確認します。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>契約期間が「1ヶ月自動更新」または「期間の定めなし」となっているか</li>
              <li>解約予告期間が30日以内に設定されているか（60〜90日の場合は実質的な拘束になる）</li>
              <li>「精算金」「清算金」「違約金」「解約事務手数料」などの名目で請求される条項がないか</li>
              <li>料金表上、契約初月〜12ヶ月の割引（キャンペーン）が適用されている場合、途中解約で割引分を返還する条項がないか</li>
              <li>紙の契約書・電子契約書の両方で同じ内容になっているか（営業担当の口頭説明と約款が食い違うケースあり）</li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自動更新型の契約では、更新直前の解約予告期間を逃すと次の1年間拘束される、というパターンがあります。更新期限を超過した場合の対応は
              <Link href="/auto-renewal-clause-risks" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動更新条項のリスク</Link>
              を参照してください。
            </p>
          </section>

          {/* H2: 違約金を払っても切替たほうが得か */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金を払っても切替たほうが得な判断基準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              違約金が発生することが分かっても、切替によって残期間・その後の期間で得られる削減額が違約金を上回れば、切替を選択したほうが合理的です。判断の軸は以下の通り。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
                <thead>
                  <tr className="bg-slate-50 text-slate-900">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">状況</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">判断</th>
                  </tr>
                </thead>
                <tbody>
                  {judgementRows.map((row) => (
                    <tr key={row.check} className="align-top hover:bg-slate-50">
                      <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.check}</td>
                      <td className="border border-slate-200 px-3 py-2">{row.decision}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              試算例：現在契約の月額電気代200万円、切替先での削減見込み月12万円（6%）、違約金100万円、残期間12ヶ月——の場合、12ヶ月間の削減額144万円が違約金100万円を上回るため、切替が合理的と判断できます。さらにその先の契約期間も削減効果が続く点も加味すべきです。
            </p>
          </section>

          {/* H2: 違約金を請求されたときの対応 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金を請求されたときの対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              すでに解約済みで違約金を請求されてしまった場合も、請求額が妥当かを必ず確認してください。実務上、次のパターンで減額・免除の余地があります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>供給事業者からの一方的な値上げ通知が解約の原因である場合、違約金免除となる条項を主張できる可能性</li>
              <li>契約書の違約金条項が曖昧（「相当額」とだけ書かれている等）な場合は、具体的な算定根拠の開示を求める</li>
              <li>消費者契約法・電気事業法消費者保護ルールに照らして、違約金が不当に高額と判断される場合は減額交渉の余地がある</li>
              <li>経過措置契約（規制料金）に該当する場合は、違約金の上限規制が適用される可能性がある</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              請求書が届いた段階で、支払期限前にエネルギー情報センターや電力・ガス取引監視等委員会の相談窓口に確認するのが安全です。詳細な対応手順は
              <Link href="/emergency-cancellation-fee" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力契約の違約金を請求されたときの対応</Link>
              にまとめています。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ：違約金を巡る判断のチェックリスト</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>契約書の「解約」「期間」「精算金」条項を確認し、違約金の計算式を特定する</li>
              <li>免除条件（値上げ通知・最終保障移行・供給不履行）に該当しないか確認</li>
              <li>違約金額と想定削減額を比較し、残期間含めたトータルで判断する</li>
              <li>「違約金ゼロ」は解約予告期間・割引返還条項まで見ないと実質評価できない</li>
              <li>請求済みの違約金も算定根拠の開示を求めれば、減額交渉の余地が残っている</li>
            </ul>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/penalty-clause-calculation",
                title: "違約金・精算金条項の計算方法",
                description: "契約書条項の典型計算式と交渉余地を詳しく解説。",
              },
              {
                href: "/auto-renewal-clause-risks",
                title: "自動更新条項のリスク",
                description: "意図しない長期拘束を避ける契約管理。",
              },
              {
                href: "/emergency-cancellation-fee",
                title: "違約金を請求されたときの対応",
                description: "請求の妥当性確認から交渉までの手順。",
              },
              {
                href: "/mid-term-cancellation-clause-guide",
                title: "中途解約条項の読み方ガイド",
                description: "解約条項のチェックポイントと見直し時の注意点。",
              },
              {
                href: "/electricity-contract-cancellation-renewal-terms",
                title: "電力契約の解約・更新条件",
                description: "契約期間・解約予告・自動更新の基本。",
              },
            ]}
          />

          <ContentCta
            heading="違約金を含む総コストで切替判断を"
            description="違約金と削減額をシミュレーター上で試算し、切替判断の材料として活用できます。内容が複雑な場合は個別相談もお受けしています。"
            links={[
              { href: "/", label: "シミュレーターで試算する" },
              { href: "/contact", label: "違約金条項について相談する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="解約金・違約金の条件確認、専門家に相談しませんか？"
            description="契約書の違約金条項の読み解きから切り替え時の費用試算、交渉の進め方まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
