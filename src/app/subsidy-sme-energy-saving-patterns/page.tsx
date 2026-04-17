import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "中小企業向け省エネ補助金の活用パターン｜使いやすい制度を整理";
const pageDescription =
  "中小企業が使いやすい省エネ補助金の種類と、申請のハードルを下げるための実務ポイントを整理します。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-sme-energy-saving-patterns";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中小企業 省エネ 補助金",
    "中小企業 電気代 補助金",
    "省エネ補助金 中小企業 優遇",
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
    name: "SII省エネ補助金（C類型・指定設備）",
    operator: "SII（環境共創イニシアチブ）",
    smRate: "1/3以内",
    largeRate: "1/3以内（同率）",
    limit: "最大1億円",
    smeAdvantage: "中小企業優遇なし（A類型は1/2）",
    suitable: "高効率空調・照明・変圧器の単品更新",
    difficulty: "中",
  },
  {
    name: "SII省エネ補助金（A類型・先進設備）",
    operator: "SII（環境共創イニシアチブ）",
    smRate: "1/2以内",
    largeRate: "1/3以内",
    limit: "最大15億円",
    smeAdvantage: "大企業比で補助率が1.5倍",
    suitable: "SIIカタログ掲載の先進的省エネ設備への投資",
    difficulty: "中",
  },
  {
    name: "ものづくり補助金（グリーン枠）",
    operator: "中小企業庁・中小機構",
    smRate: "1/2〜2/3以内",
    largeRate: "対象外（中小企業・小規模事業者限定）",
    limit: "最大1,500万円",
    smeAdvantage: "中小企業・小規模事業者限定。大企業は申請不可",
    suitable: "設備更新と生産性向上を組み合わせる場合",
    difficulty: "高（事業計画の作り込みが必要）",
  },
  {
    name: "IT導入補助金（デジタル化基盤導入枠）",
    operator: "中小企業庁・JISA",
    smRate: "1/2〜3/4以内",
    largeRate: "対象外（中小企業・小規模事業者限定）",
    limit: "最大350万円",
    smeAdvantage: "中小企業・小規模事業者限定",
    suitable: "EMS（エネルギー管理システム）・デマンド監視システム導入",
    difficulty: "低〜中（ITツール登録制度）",
  },
  {
    name: "小規模事業者持続化補助金",
    operator: "商工会・商工会議所",
    smRate: "2/3以内",
    largeRate: "対象外（小規模事業者限定）",
    limit: "最大200万円（特例枠）",
    smeAdvantage: "小規模事業者限定。申請ハードルが低め",
    suitable: "LED化・空調更新等の小規模設備投資",
    difficulty: "低（商工会等のサポートあり）",
  },
];

const diffVsLarge = [
  { item: "補助率", sme: "A類型は1/2（大企業の1.5倍）", large: "A類型は1/3" },
  { item: "補助上限額", sme: "制度によって中小企業枠が設定", large: "上限額が高いが補助率が低い" },
  { item: "申請できる制度", sme: "ものづくり補助金・IT導入補助金等は中小限定", large: "一部の制度は申請不可" },
  { item: "申請書類の簡略化", sme: "C類型等で簡易申請枠がある場合も", large: "同等の書類水準が求められる" },
  { item: "支援機関の活用", sme: "商工会・商工会議所・よろず支援拠点による無料支援", large: "支援機関の無料サポートは限定的" },
];

const usagePatterns = [
  {
    pattern: "パターン1：LED照明への全面更新",
    subsidy: "SII省エネ補助金C類型または自治体補助金",
    investment: "300〜500万円",
    subsidyAmount: "100〜250万円",
    effect: "電力使用量15〜30%削減",
    detail: "工場・倉庫・オフィス問わず最も着手しやすい省エネ投資。設備費用が明確で省エネ量の計算も比較的シンプル。",
  },
  {
    pattern: "パターン2：業務用空調の高効率機への更新",
    subsidy: "SII省エネ補助金A類型（カタログ登録品）",
    investment: "500万〜2,000万円",
    subsidyAmount: "250万〜1,000万円（1/2補助）",
    effect: "空調電力費20〜40%削減",
    detail: "SIIカタログ登録製品を選定することでA類型（補助率1/2）が適用可能。複数台更新で補助額が大きくなる。",
  },
  {
    pattern: "パターン3：EMSの導入（エネルギー管理システム）",
    subsidy: "IT導入補助金（デジタル化基盤導入枠）",
    investment: "50〜300万円",
    subsidyAmount: "25〜200万円",
    effect: "デマンド超過防止・見える化による自発的省エネ",
    detail: "IT導入補助金のツール登録制度を活用。SaaSベースのEMSツールが対象になるケースが増えている。",
  },
  {
    pattern: "パターン4：冷凍・冷蔵設備の更新（食品・流通業）",
    subsidy: "SII省エネ補助金A/C類型",
    investment: "500万〜3,000万円",
    subsidyAmount: "170万〜1,500万円",
    effect: "冷凍冷蔵電力費25〜35%削減",
    detail: "食品・流通・物流業種で電気代の大きな割合を占める設備。SIIの指定設備に多くの機種が登録されている。",
  },
  {
    pattern: "パターン5：コンプレッサー更新（製造業）",
    subsidy: "SII省エネ補助金A/C類型",
    investment: "200万〜1,000万円",
    subsidyAmount: "70万〜500万円",
    effect: "コンプレッサー関連電力費30〜50%削減",
    detail: "製造業では電力消費の20〜40%をコンプレッサーが占めるケースがある。インバーター制御型への更新が補助対象になりやすい。",
  },
];

const applicationTips = [
  {
    tip: "共同申請で申請コストを分散する",
    detail: "複数の中小企業が連名で申請する「グループ申請」や、業界団体・商工会議所を経由した一括申請の枠がある制度もあります。個社で申請書を作る工数を削減できます。",
  },
  {
    tip: "リース活用で初期費用ゼロを実現する",
    detail: "補助金はリース導入の場合でも適用できる制度があります。リース会社が補助金を受け取り、月額リース料に反映させるスキームを利用することで、初期資金が少ない中小企業でも省エネ投資が可能です。",
  },
  {
    tip: "ESCOサービスとの組み合わせで工数を削減する",
    detail: "ESCO事業者に補助金申請から設備導入・効果保証まで一括委託する方法です。自社の工数を最小化しながら省エネ設備への投資と補助金活用を両立できます。",
  },
  {
    tip: "よろず支援拠点・商工会議所の無料支援を活用する",
    detail: "中小企業・小規模事業者は、よろず支援拠点や地域の商工会議所で補助金申請に関する無料相談が受けられます。申請書の書き方から制度選定まで支援してもらえるため、まず相談することをお勧めします。",
  },
  {
    tip: "採択率が高い「C類型・持続化補助金」から入門する",
    detail: "初めて補助金申請に取り組む場合は、申請手続きが比較的シンプルなC類型や持続化補助金から始めるのが得策です。採択後のプロセスを経験することで次回の大型補助金申請に活かせます。",
  },
];

export default function SubsidySmeEnergySavingPatternsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="中小企業向け省エネ補助金の活用パターン｜使いやすい制度を整理"
        description="中小企業が使いやすい省エネ補助金の種類と、申請のハードルを下げるための実務ポイントを整理します。"
        url="https://simulator.eic-jp.org/subsidy-sme-energy-saving-patterns"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "中小企業向け省エネ補助金の活用パターン" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">中小企業向け省エネ補助金の活用パターン</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          中小企業向け省エネ補助金の活用パターン
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">使いやすい制度を整理｜申請ハードルを下げる実務ポイント</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          中小企業が省エネ補助金を活用する場合、大企業と比べて補助率が優遇される制度や、
          中小企業・小規模事業者専用の制度が用意されています。しかし制度の数が多く、
          どこから手をつければよいかわからないという声も少なくありません。
          本ページでは中小企業が特に使いやすい主要補助金を一覧整理し、
          業種・設備別の活用パターンと申請のハードルを下げるコツをまとめます。
        </p>
      </header>

      <section className="mt-6 space-y-4">

        {/* 制度一覧 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">中小企業が対象になりやすい主要補助金一覧</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 補助率・上限額は年度・区分により変更されます。必ず最新公募要領を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度名</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">中小補助率</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">大企業補助率</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">上限額</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">申請難易度</th>
                </tr>
              </thead>
              <tbody>
                {subsidyList.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.name}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.smRate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-500">{row.largeRate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.limit}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 大企業との違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">大企業向けとの違い：中小企業の優遇ポイント</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">比較項目</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700 text-sky-700">中小企業・小規模事業者</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">大企業</th>
                </tr>
              </thead>
              <tbody>
                {diffVsLarge.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row.item}</td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">{row.sme}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-500">{row.large}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            中小企業は補助率が高く、中小企業・小規模事業者限定の制度にも申請できます。
            また、商工会議所やよろず支援拠点による無料申請支援が利用できる点も大きな強みです。
          </p>
        </section>

        {/* 活用パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">実際の活用パターン（業種・設備別）</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            以下は中小企業が省エネ補助金を活用する代表的なパターンです。
            設備の種類・規模・業種によって最適な補助制度が変わります。
          </p>
          <div className="mt-4 space-y-3">
            {usagePatterns.map((pat, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="font-semibold text-slate-800">{pat.pattern}</p>
                  <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-700">{pat.subsidy}</span>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-3 text-sm">
                  <div>
                    <span className="text-slate-500 text-xs">投資額目安</span>
                    <p className="font-semibold text-slate-800">{pat.investment}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs">補助額概算</span>
                    <p className="font-semibold text-sky-700">{pat.subsidyAmount}</p>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs">省エネ効果</span>
                    <p className="font-semibold text-emerald-700">{pat.effect}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">{pat.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 申請ハードルを下げるコツ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請のハードルを下げるコツ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            中小企業が補助金申請を断念する理由の多くは「手間がかかりすぎる」という認識です。
            以下の方法を活用することで、申請工数を大幅に削減できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {applicationTips.map((tip, i) => (
              <div key={i} className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-sm font-semibold text-slate-800">{tip.tip}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 制度選択フロー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どの補助金から始めるか：制度選択の考え方</h2>
          <div className="mt-4 space-y-3">
            {[
              { cond: "初めて補助金に取り組む・申請経験がない", rec: "小規模事業者持続化補助金 または SII省エネ補助金C類型", reason: "申請手続きが比較的シンプルで採択率も高め。商工会議所の支援も受けやすい。" },
              { cond: "高効率空調・照明を更新したい（SIIカタログ品）", rec: "SII省エネ補助金A類型（中小補助率1/2）", reason: "最も補助率が高く、設備単品での申請が可能。" },
              { cond: "エネルギー管理システム（EMS）を導入したい", rec: "IT導入補助金（デジタル化基盤導入枠）", reason: "SaaSツールも対象。IT補助金は通年公募で申請機会が多い。" },
              { cond: "設備更新と生産性向上を同時に進めたい", rec: "ものづくり補助金（グリーン枠）", reason: "補助上限が高く省エネ要件もある。事業計画の作り込みが必要だが効果が大きい。" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-500 font-semibold">状況</p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{item.cond}</p>
                <p className="mt-2 text-xs text-slate-500 font-semibold">推奨制度</p>
                <p className="mt-1 text-sm font-bold text-sky-700">{item.rec}</p>
                <p className="mt-1 text-xs text-slate-600">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：中小企業こそ補助金をフル活用する</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・ 中小企業はA類型で補助率1/2、大企業の1.5倍の支援が受けられる。</li>
            <li>・ ものづくり補助金・IT導入補助金・持続化補助金は中小企業・小規模事業者限定。</li>
            <li>・ 初めての申請は持続化補助金やC類型から始めて経験を積む。</li>
            <li>・ リース活用・ESCO・共同申請でハードルを下げながら省エネ投資を実現できる。</li>
            <li>・ よろず支援拠点・商工会議所の無料支援を積極的に活用する。</li>
          </ul>
        </section>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "対象設備・補助率・申請スケジュールの詳細" },
            { href: "/subsidy-schedule-and-approval-rate", title: "補助金申請のスケジュールと採択率の目安", description: "年間カレンダーと採択率から逆算する準備術" },
            { href: "/led-air-conditioning-reduction-effect", title: "LED・空調更新の電気代削減効果", description: "設備更新による削減幅の試算方法" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="まず現状の電気料金負担を数値で把握しましょう"
          description="省エネ補助金の効果試算には、現状の電力消費コストの把握が必要です。シミュレーターで診断すれば、補助申請書の根拠データとして使える数値が得られます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
