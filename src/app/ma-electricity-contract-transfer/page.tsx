import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "M&A時の電力契約引き継ぎ｜手続きと注意点";
const pageDescription =
  "M&Aに伴う電力契約の引き継ぎフローを、吸収合併・事業譲渡・会社分割のスキーム別に整理。所要期間の目安、DD段階で確認すべき電力契約リスク、クロージング直前のチェックリストまで実務視点で解説します。";
const pageUrl = "https://simulator.eic-jp.org/ma-electricity-contract-transfer";

const FAQ_ITEMS = CATEGORY_FAQ_22_35["ma-organizational-change"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "M&A 電力契約 引き継ぎ",
    "電力契約 名義変更 M&A",
    "事業譲渡 電力",
    "会社分割 電力契約",
    "電力 デューデリジェンス",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/ma-organizational-change", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/ma-organizational-change"],
  },
};

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        faq={FAQ_ITEMS}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "M&A・組織再編時の電力契約", url: "https://simulator.eic-jp.org/articles/ma-organizational-change" },
          { name: "M&A時の電力契約引き継ぎ" },
        ]}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ma-organizational-change" className="underline-offset-2 hover:underline">M&A・組織再編時の電力契約</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">M&A時の電力契約引き継ぎ</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">M&A時の電力契約引き継ぎ｜手続きと注意点</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>結論：M&Aスキームで電力契約の扱いは全く異なります。合併は包括承継、事業譲渡は新規契約扱いが原則、会社分割は計画書で明記した範囲のみ承継されます。特別高圧契約は引き継ぎに6ヶ月以上かかるため、DD段階からの前倒し準備が不可欠です。</strong>
            このページでは既存の「<Link href="/ma-electricity-contract-handling" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">M&A時の電力契約引継</Link>」記事で扱った概要を踏まえ、実務の所要期間・DDチェック項目・クロージング直前の論点を深掘りします。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">スキーム別の扱いの違い（早見表）</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-900">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left">スキーム</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">契約の扱い</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">名義変更 or 新規</th>
                    <th className="border border-slate-200 px-3 py-2 text-left">所要期間の目安</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">吸収合併</td>
                    <td className="border border-slate-200 px-3 py-2">存続会社に包括承継</td>
                    <td className="border border-slate-200 px-3 py-2">名義変更（届出のみ）</td>
                    <td className="border border-slate-200 px-3 py-2">1〜2ヶ月</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">事業譲渡</td>
                    <td className="border border-slate-200 px-3 py-2">原則として新規契約</td>
                    <td className="border border-slate-200 px-3 py-2">新規契約（譲受側が締結）</td>
                    <td className="border border-slate-200 px-3 py-2">高圧1〜3ヶ月／特高6ヶ月以上</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">会社分割</td>
                    <td className="border border-slate-200 px-3 py-2">分割計画書に明記で承継</td>
                    <td className="border border-slate-200 px-3 py-2">名義変更（承継会社へ）</td>
                    <td className="border border-slate-200 px-3 py-2">2〜4ヶ月</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-3 py-2 font-semibold">株式譲渡</td>
                    <td className="border border-slate-200 px-3 py-2">法人格変わらず継続</td>
                    <td className="border border-slate-200 px-3 py-2">原則不要（通知のみ推奨）</td>
                    <td className="border border-slate-200 px-3 py-2">即時</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">※ 電力会社・契約区分により手続きに差があります。特別高圧はいずれのスキームでも早期の協議が推奨されます。</p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">名義変更か新規契約かの判断軸</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              吸収合併・会社分割では原則として名義変更で足りますが、<strong>電力会社によっては「譲受会社の与信審査」を経てから承継可否を判断する</strong>運用があります。特に新電力では、譲受会社の信用力が基準を下回ると、既存条件を維持できず新規契約扱いになるケースが一般的です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業譲渡では原則として新規契約となりますが、同じ小売事業者でそのまま乗り換える場合は「契約切替＋名義変更」の簡易手続きになることもあります。この判断は電力会社ごとに運用が異なるため、DD段階で必ず対象契約の供給会社に照会する必要があります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">所要期間の実務感覚</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              低圧・高圧は1〜3ヶ月で完了することが多いですが、<strong>特別高圧（2,000kW超）では6ヶ月以上かかることが珍しくありません</strong>。これは、引込変圧器・受電用地の権原整理、一般送配電事業者との託送契約再締結、保安管理業務規程の名義変更などが連動するためです。クロージング直前の着手では到底間に合わず、MOA・LOI（基本合意書）締結の段階で電力契約の取扱いを明文化しておくのが通例です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              また、コーポレートPPAを結んでいる場合は契約承継の可否が発電事業者との協議事項になり、数ヶ月の追加交渉が発生します。契約に「Change of Control」条項があると、事前同意や違約金発生の可能性があり、DDの早期段階での洗い出しが必須です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">DD段階で確認すべき電力契約リスク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力契約は財務DDで「光熱費」として一括り扱われがちですが、M&A後の事業継続に直結する論点が多く含まれます。最低限確認すべきは以下の6項目です。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li><strong>残契約期間と違約金：</strong>長期契約（3〜5年）や複数年割引プランでは中途解約違約金が年間電気代の20〜50%に達することもあり、譲渡価格への反映が必要。</li>
              <li><strong>PPA残期間：</strong>コーポレートPPAは10〜25年契約が多く、承継可否・Change of Control条項・残期間コストの評価が必須。</li>
              <li><strong>Change of Control条項：</strong>株式譲渡でも発動する条項が含まれていないか、約款レベルで確認。</li>
              <li><strong>未払・係争：</strong>過去の料金請求に関する紛争・未払、デマンド超過料金の処理状況を確認。</li>
              <li><strong>最終保障供給利用履歴：</strong>過去に最終保障供給へ移行したことがある場合、新電力との契約難化など信用評価リスクあり。</li>
              <li><strong>再エネ調達コミットメント：</strong>グループRE100目標との整合、非化石証書調達契約の承継可否。</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">クロージング直前のチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              クロージング当日の電力供給を途切れさせないため、以下の項目をクロージング30日前・7日前・前日で段階的に確認するのが実務的です。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>クロージング30日前：電力会社への承継通知書提出、供給地点特定番号・契約番号の棚卸し完了</li>
              <li>クロージング14日前：譲受会社の法人口座での口座振替変更手続き、請求書送付先の変更依頼</li>
              <li>クロージング7日前：一般送配電事業者への託送契約名義変更の進捗確認、保安管理業務規程の更新</li>
              <li>クロージング前日：当日の停電・切替リスクの最終確認、電力会社窓口担当者の緊急連絡先取得</li>
              <li>クロージング翌日：初回請求書の宛名・請求先が正しく変更されているか確認（1ヶ月後の請求で露見すると対応遅延）</li>
            </ul>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある失敗パターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              最も多い失敗は、<strong>旧会社名義のままクロージング翌月以降も請求が続くケース</strong>です。口座振替登録の変更漏れ、請求書送付先の変更漏れで、数ヶ月分の督促・支払遅延を招き、最終保障供給への意図せぬ移行につながった事例もあります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              次に多いのが、<strong>再エネメニューの契約条件改定</strong>です。承継の過程で再エネ比率が下がるプランに自動切替されたり、非化石証書の割当が失われたりして、グループのScope2報告に影響するケースがあります。M&A後の第一四半期にScope2排出量を必ず再計算する運用を推奨します。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li>・スキームごとに契約の扱いが異なる（合併＝包括承継、事業譲渡＝新規、分割＝計画書範囲）</li>
              <li>・特別高圧は承継に6ヶ月以上かかるケースがあり、DD前倒しが必須</li>
              <li>・Change of Control条項・PPA残期間・違約金の3つは最重要DD論点</li>
              <li>・クロージング30日・7日・当日で段階的にチェックリスト運用</li>
              <li>・承継後の初回請求・Scope2報告で漏れが顕在化するので翌月フォローを忘れない</li>
            </ul>
          </section>
        </section>

        <MarketDataFaq items={FAQ_ITEMS} />

        <AuthorBadge publishedAt="2026-04-19" updatedAt="2026-04-19" />

        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/ma-electricity-contract-handling", title: "M&A時の電力契約引継｜スキーム別の概要", description: "本記事のベースとなるスキーム別手続き解説。" },
              { href: "/business-transfer-name-change-procedure", title: "事業譲渡時の電力契約名義変更手順", description: "譲渡日前後のリスク管理の実務。" },
              { href: "/spin-off-energy-contracts", title: "分社化・会社分割時の電力契約", description: "空白期間を避けるための設計。" },
              { href: "/holding-company-electricity-review", title: "持株会社化に伴う電力契約の見直し", description: "契約単位とデマンド合算の論点。" },
              { href: "/auto-renewal-clause-risks", title: "自動更新条項のリスク", description: "DDで見落としやすい更新条項の管理。" },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="M&A前後の電力契約整理は、事業継続と経営統合の速度を左右します。DD段階から早期の棚卸しを進めましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "M&A時の電力DDを専門家に相談する" },
            ]}
          />
        </div>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="M&A時の電力DD、専門家に相談しませんか？"
            description="スキーム別の承継手続き、特別高圧・PPAのDD論点、クロージング直前のチェックリストまで、エネルギー情報センターの専門スタッフが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
