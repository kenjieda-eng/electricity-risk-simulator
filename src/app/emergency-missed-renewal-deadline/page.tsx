import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["emergency-response"];


const pageTitle = "契約更新を忘れて自動更新されたときの対応｜法人の電力契約トラブル";
const pageDescription =
  "電力契約の更新期限を見逃して自動更新されてしまった場合の確認事項と、次にとれる選択肢を整理します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-missed-renewal-deadline";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力契約 自動更新", "契約更新 忘れた", "電力契約 更新期限", "自動更新 対応"],
  alternates: {
    canonical: pageUrl,
  },
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

const autoRenewalMechanism = [
  {
    item: "自動更新条項の典型的な文言",
    detail:
      "「本契約は満了日の○カ月前までに書面による解約の申し出がない限り、同一条件で自動的に更新されるものとします」という条項が一般的です。申し出期限を過ぎると手続きなしで更新が確定します。",
  },
  {
    item: "電力会社の通知義務",
    detail:
      "法律上、電力会社に更新期限の案内義務は定められていません。通知が届いていなくても自動更新は成立します。契約書に記載された条件が優先されるため、担当者が変わっても管理を引き継ぐことが重要です。",
  },
  {
    item: "自動更新後の契約条件",
    detail:
      "多くのケースで「同一条件での更新」となりますが、電力会社によっては更新時に料金体系や調整項目の条件が変わることもあります。必ず更新後の契約書または料金通知を確認してください。",
  },
];

const initialCheckItems = [
  { check: "更新後の契約期間はいつまでか", detail: "契約書または更新確認書で満了日を確認する。次の解約通告期限を逆算する。" },
  { check: "新しい料金単価・調整項目の条件", detail: "更新前後で単価や燃料費調整・市場価格調整の算定方法に変更がないか確認する。" },
  { check: "中途解約の可否と違約金の有無", detail: "中途解約条項を確認。残余期間に応じた違約金が発生するケースが多い。" },
  { check: "次の解約通告期限", detail: "次の満了日から通告期限（○カ月前）を逆算し、カレンダーに登録する。" },
  { check: "電力会社への連絡窓口の確認", detail: "担当営業・問い合わせ窓口の連絡先を確認し、交渉の余地があるか打診する。" },
];

const cancellationCases = [
  {
    case: "すぐに解約できる可能性が高いケース",
    color: "sky",
    items: [
      "自動更新直後（1〜2週間以内）で、電力会社が交渉に応じる場合",
      "更新後の条件が大幅に変化しており、契約書に不服申し立て条項がある場合",
      "消費者契約法・特定商取引法の適用があると判断された場合（中小企業等）",
      "電力会社との取引関係が良好で、個別交渉が認められる場合",
    ],
  },
  {
    case: "すぐには解約できないケース",
    color: "rose",
    items: [
      "更新後1カ月以上が経過しており、電力会社が交渉に応じない場合",
      "中途解約違約金が高額で、コスト的に見合わない場合",
      "最終保障供給への切替となり供給リスクが高まる場合",
      "次の解約通告期限まで1年以上あり、その間違約金が継続する場合",
    ],
  },
];

const nextStepActions = [
  { timing: "今すぐ", action: "現在の契約期間・単価・解約条件を契約書で確認する" },
  { timing: "今週中", action: "電力会社に連絡し、中途解約の可否と条件を確認する" },
  { timing: "今月中", action: "他社の見積もりを最低2〜3社取得し、違約金との損益比較を行う" },
  { timing: "次回更新の6カ月前", action: "切替候補の比較検討を開始する" },
  { timing: "次回更新の3カ月前", action: "更新拒否または条件交渉の通知を書面で送付する" },
];

const contractManagementPoints = [
  {
    title: "電力契約管理台帳の整備",
    detail:
      "拠点名・契約先・契約期間・満了日・解約通告期限・担当者名を一覧表にまとめ、更新があるたびに最新の情報に書き換えます。Excelや社内システムで管理し、担当者の異動時にも引き継げる形にします。",
  },
  {
    title: "6カ月前・3カ月前アラートの設定",
    detail:
      "契約満了日の6カ月前と3カ月前にメールやカレンダー通知が届く仕組みを設定します。解約通告期限が3カ月前の場合、6カ月前のアラートが「切替検討の開始合図」となります。",
  },
  {
    title: "担当者不在時のバックアップ体制",
    detail:
      "エネルギー担当者が異動・休職した場合でも、上長や経理担当者が期限を把握できるよう、台帳へのアクセス権と通知先を複数設定しておきます。",
  },
  {
    title: "契約書のデジタル保管",
    detail:
      "契約書の紙原本だけでなく、PDF化してクラウドストレージや社内共有サーバーに保管します。期限が近づいたときにすぐ参照できる状態にしておくことが重要です。",
  },
];

const dangerousClauses = [
  { pattern: "「申し出がない限り同一条件で自動更新」", risk: "最も一般的な条項。申し出期限の明示が重要。" },
  { pattern: "「○カ月前までに書面で通知しない限り」", risk: "「書面」の定義を確認。メール可否を要チェック。" },
  { pattern: "「更新後も同条件とする」", risk: "燃調・市場調整の算定式が変わっていないか確認が必要。" },
  { pattern: "「解約通告は電力会社所定の様式で」", risk: "様式を取り寄せていない場合、通告が無効になるリスクあり。" },
  { pattern: "「更新後の解約は残余期間相当の違約金を徴収する」", risk: "違約金の上限・計算方法を事前に把握しておくこと。" },
];

export default function EmergencyMissedRenewalDeadlinePage() {
  return (
    <>
      <ArticleJsonLd
        headline="契約更新を忘れて自動更新されたときの対応｜法人の電力契約トラブル"
        description="電力契約の更新期限を見逃して自動更新されてしまった場合の確認事項と、次にとれる選択肢を整理します。"
        url="https://simulator.eic-jp.org/emergency-missed-renewal-deadline"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "契約更新を忘れて自動更新されたときの対応" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">契約更新を忘れて自動更新されたときの対応</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          契約更新を忘れて自動更新されたときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「気づいたら電力契約が自動更新されていた」というケースは法人でも珍しくありません。
          自動更新が発生してしまっても、確認すべき事項と取れる選択肢を把握することで、
          次の行動を冷静に判断できます。このページでは自動更新の仕組み・気づいたときの初動・
          解約できるケースとできないケース・再発防止策まで整理しています。
        </p>
      </header>

      {/* 自動更新が発生する仕組み */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自動更新が発生する仕組み</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の多くには「自動更新条項」が含まれており、申し出期限までに解約・更新拒否の通知をしなかった場合、
          自動的に契約が更新されます。以下の3点を正しく理解することが重要です。
        </p>
        <div className="mt-4 space-y-3">
          {autoRenewalMechanism.map((item, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{item.item}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 初動チェックリスト */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">自動更新に気づいたときの初動チェックリスト</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          自動更新が発生していると気づいた段階で、以下の5項目を確認します。
          焦らず順番に対処することが重要です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="border border-sky-200 px-3 py-2 text-left font-semibold text-slate-700">確認項目</th>
                <th className="border border-sky-200 px-3 py-2 text-left font-semibold text-slate-700">確認・対応内容</th>
              </tr>
            </thead>
            <tbody>
              {initialCheckItems.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="border border-sky-200 px-3 py-2 font-semibold text-sky-800">
                    □ {c.check}
                  </td>
                  <td className="border border-sky-200 px-3 py-2 text-slate-700">{c.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* すぐに解約できるケースとできないケース */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">すぐに解約できるケースとできないケース</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          自動更新後の対応可能性は、更新後の経過時間や違約金の規模、電力会社との関係によって異なります。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {cancellationCases.map((group, i) => (
            <div
              key={i}
              className={`rounded-lg border p-4 ${
                group.color === "sky"
                  ? "border-sky-200 bg-sky-50"
                  : "border-rose-200 bg-rose-50"
              }`}
            >
              <p
                className={`font-semibold ${
                  group.color === "sky" ? "text-sky-800" : "text-rose-800"
                }`}
              >
                {group.case}
              </p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className={`mt-1 ${group.color === "sky" ? "text-sky-500" : "text-rose-500"}`}>▶</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 次の更新期限までにやるべきこと */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">次の更新期限までにやるべきこと</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          すぐに解約できない場合でも、次の更新タイミングを最大限に活用するために今から準備を始めることが重要です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">タイミング</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">やること</th>
              </tr>
            </thead>
            <tbody>
              {nextStepActions.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">{r.timing}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 再発防止：契約管理のポイント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">再発防止のための契約管理のポイント</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「更新期限を忘れた」という事態を繰り返さないために、以下の管理体制を整えることが有効です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {contractManagementPoints.map((point, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{point.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{point.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 自動更新条項で注意が必要な文言パターン */}
      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">自動更新条項で特に注意が必要な文言パターン</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          契約書の自動更新条項には、見落としやすいリスクが含まれていることがあります。
          以下のパターンを契約書でチェックしてください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="border border-amber-200 px-3 py-2 text-left font-semibold text-slate-700">文言パターン</th>
                <th className="border border-amber-200 px-3 py-2 text-left font-semibold text-slate-700">確認・注意点</th>
              </tr>
            </thead>
            <tbody>
              {dangerousClauses.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                  <td className="border border-amber-200 px-3 py-2 font-semibold text-amber-800">{c.pattern}</td>
                  <td className="border border-amber-200 px-3 py-2 text-slate-700">{c.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：自動更新されても焦らず行動する</h2>
        <ul className="mt-3 space-y-2">
          {[
            "自動更新が成立していても、まずは現在の契約条件・期間・解約条件を正確に把握する",
            "電力会社への早期連絡で中途解約や条件交渉が認められるケースもある",
            "すぐに解約できない場合は次の更新期限に向けて早めに準備を開始する",
            "再発防止のために契約管理台帳と複数のアラートを設定する",
            "違約金と切替メリットを比較し、現実的な判断をすることが最優先",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-7 text-slate-700">
              <span className="mt-1 font-bold text-sky-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/emergency-auto-renewal-refusal",
              title: "自動更新契約の停止・拒否の進め方",
              description: "次の更新拒否を正しく進めるためのステップを解説します。",
            },
            {
              href: "/emergency-cancellation-fee",
              title: "電力契約の違約金を請求されたときの対応",
              description: "違約金の妥当性確認と交渉の進め方を整理します。",
            },
            {
              href: "/contract-period-guide",
              title: "電力契約の契約期間と更新の仕組み",
              description: "法人向け電力契約の期間設定と更新ルールの基礎知識。",
            },
            {
              href: "/contract-cancellation-clause-guide",
              title: "電力契約の解約条項の読み方ガイド",
              description: "解約・中途解約条項の確認ポイントをわかりやすく解説。",
            },
            {
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク",
              description: "更新失念による高コスト契約継続リスクをBCPの観点から整理。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="契約の現状をシミュレーターで確認する"
          description="自動更新のタイミングは見直しの絶好機です。現在の料金水準とリスクをシミュレーターで把握し、切替の判断材料を揃えましょう。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/articles", label: "電力契約の基礎知識を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
