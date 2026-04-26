import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import ContentCta from "../../components/simulator/ContentCta";
import GA4EventTracker from "../../components/analytics/GA4EventTracker";

// --- 定数 ---
const pageTitle =
  "江田健二 プロフィール｜一般社団法人エネルギー情報センター 理事・RAUL代表取締役";
const pageDescription =
  "電力・エネルギー業界に20年以上携わる実業家・コンサルタント。一般社団法人エネルギー情報センター理事、RAUL株式会社代表取締役。書籍20冊以上執筆、内閣府・中小企業庁・商工会議所など多数の登壇実績。第39回エネルギーフォーラム賞普及啓発賞（2019年）受賞。";

// 略歴タイムライン
const careerTimeline = [
  {
    year: "1977年",
    label: "富山県砺波市に生まれる",
  },
  {
    year: "2000年",
    label: "慶應義塾大学 経済学部 卒業",
  },
  {
    year: "2000年",
    label:
      "アンダーセンコンサルティング（現アクセンチュア株式会社）入社。電力・エネルギー・化学業界のコンサルティング業務に従事",
  },
  {
    year: "2005年",
    label: "RAUL株式会社を設立、代表取締役に就任",
  },
  {
    year: "現在",
    label:
      "一般社団法人エネルギー情報センター 理事として、法人向け電気料金や電力市場に関する情報発信を推進",
  },
];

// 基本情報
const basicInfo: { label: string; value: string }[] = [
  { label: "氏名", value: "江田 健二（えだ けんじ）" },
  { label: "生年月日", value: "1977年1月5日" },
  { label: "出身地", value: "富山県砺波市" },
  {
    label: "学歴",
    value:
      "慶應義塾大学 経済学部 卒業 ／ 東京大学 Executive Management Program（EMP）修了",
  },
  {
    label: "現職",
    value:
      "一般社団法人エネルギー情報センター 理事 ／ RAUL株式会社 代表取締役",
  },
];

// 所属・役職
const affiliations = [
  "一般社団法人エネルギー情報センター 理事",
  "RAUL株式会社 代表取締役",
  "一般社団法人つなぐ未来研究所 理事",
  "環境省 地域再省蓄エネサービスイノベーション促進委員会 委員",
  "厚生労働省 キャリアコンサルタント研修に関する検討委員会 委員",
  "ASIA WOMEN LEADERS FORUM アドバイザー",
];

// 専門領域
const expertiseAreas = [
  {
    title: "電力・エネルギー市場",
    description:
      "電力自由化以降の市場構造、法人向け電気料金、契約メニュー、電力調達実務などを実務と政策の両面から分析。",
  },
  {
    title: "脱炭素・GX",
    description:
      "企業の脱炭素経営、再生可能エネルギー調達、カーボンクレジット、ESG投資など、GX実装のための戦略支援。",
  },
  {
    title: "エネルギーDX・ブロックチェーン",
    description:
      "スマートメーター活用、エネルギーデータ流通、ブロックチェーン技術など、次世代のエネルギーデジタル化領域。",
  },
  {
    title: "情報発信・普及啓発",
    description:
      "書籍・講演・委員会活動を通じて、エネルギー業界の情報を企業担当者や一般生活者にわかりやすく伝える活動を継続。",
  },
];

// 受賞歴
const awards = [
  {
    year: "2019年",
    title: "第39回 エネルギーフォーラム賞 普及啓発賞",
    description:
      "エネルギー分野における情報発信・普及啓発活動が評価され受賞。",
  },
];

// 主な著書（RAUL 公式サイト掲載分）
const books: {
  title: string;
  description: string;
  url: string;
}[] = [
  {
    title: "ビジネス屋と技術屋が一緒に考える脱炭素",
    description:
      "脱炭素の切り札として注目を集めている水素の利用現場、工場の化石燃料を使わない生産工程等の具体的な対策を、ビジネス面と技術面の両面から考察。",
    url: "https://amzn.to/3T73Acn",
  },
  {
    title:
      "図解即戦力 電力・ガス業界のしくみとビジネスがこれ1冊でしっかりわかる教科書",
    description:
      "生活・産業のインフラとして安定した需要がある電力・ガス業界の仕組みと仕事、将来の展望を一冊で解説。",
    url: "https://amzn.to/3TpvhOF",
  },
  {
    title: "実務 太陽光パネル循環型ビジネス",
    description:
      "太陽光パネル大量廃棄時代に向けた、リユース・リサイクル・廃棄の現状と課題、ビジネスチャンスを整理。",
    url: "https://amzn.to/3vb1ike",
  },
  {
    title: "2025年「脱炭素」のリアルチャンス すべての業界を襲う大変化に乗り遅れるな！",
    description:
      "世界の富豪の投資動向を分析し、脱炭素が他人事でないこと、今後日本企業に吹き荒れる逆風とチャンスを明快に解説。",
    url: "https://amzn.to/3qtHUMM",
  },
  {
    title: "2時間でわかる 蓄電池ビジネスの未来",
    description:
      "蓄電池というキーワードを通じて、電力・エネルギービジネス、蓄電池が関わる新たな20兆円市場の現状・将来展望を独自の視点で解説。",
    url: "https://amzn.to/42sruSd",
  },
  {
    title: "「脱炭素化」はとまらない！ーー未来を描くビジネスのヒントーー",
    description:
      "エネルギー・環境分野に携わるビジネスパーソン向けに、脱炭素化がなぜ必要か、どう取り組むべきかのヒントを紹介。",
    url: "https://amzn.to/43ij9lf",
  },
  {
    title:
      "IoT・AI・データを活用した先進事例8社のビジネスモデルを公開 エネルギーデジタル化の最前線2020",
    description:
      "エネルギービジネスがインフラ産業から情報サービス産業へ変化する様相を、先進事例を通じて解説。",
    url: "https://amzn.to/3WV7HcW",
  },
  {
    title: "世界の51事例から予見する ブロックチェーン×エネルギービジネス",
    description:
      "ブロックチェーンによって何が実現できるようになるかを、世界50以上のエネルギービジネス事例をもとに予見。",
    url: "https://amzn.to/3WUP7Bx",
  },
];

// 主な講演テーマ
const speakingTopics = [
  "今こそ知りたい！脱炭素経営 〜世界の潮流と日本の取り組みから考える〜",
  "GX 基本の「き」を学ぶ 今更聞けない中小企業のGX",
  "エネルギー価格高騰時代のコスト削減、ビジネスチャンス",
  "SDGsとエネルギー問題を考える 〜今こそ知りたい！脱炭素社会〜",
  "蓄電池が生み出すビジネスチャンス 〜蓄電池×X（Something）〜",
  "緊迫する中東情勢と企業のエネルギーコストへの影響",
];

// 最新の登壇（主催者サイト掲載分、EDA が都度追加）
const recentTalks: {
  date: string;
  organizer: string;
  title: string;
  url: string;
  format?: string;
}[] = [
  {
    date: "2026-04-28",
    organizer: "福井商工会議所",
    title: "緊迫する中東情勢と企業のエネルギーコストへの影響",
    url: "https://fcci.seminarone.com/20260428/event",
    format: "会場セミナー（福井県福井市）",
  },
  {
    date: "2026-04-10 実施／4-21〜5-29 アーカイブ配信",
    organizer: "東京商工会議所 資源・エネルギー部会",
    title:
      "中東情勢・原油高は企業のエネルギーコストをどう変えるか 〜ウクライナショックの教訓とこれからの電力調達・リスク管理戦略〜",
    url: "https://myevent.tokyo-cci.or.jp/detail.php?event_kanri_id=207000",
    format: "オンライン（ライブ + アーカイブ）",
  },
];

// 主な講演実績（主催団体カテゴリ別）
const speakingEngagementsByCategory: {
  category: string;
  organizations: string[];
}[] = [
  {
    category: "政府・地方自治体",
    organizations: [
      "内閣府",
      "中小企業庁",
      "東京都庁",
      "神奈川県庁",
      "北海道庁",
      "米国大使館・商務部",
    ],
  },
  {
    category: "経済団体・商工会議所",
    organizations: [
      "全国中小企業団体中央会",
      "鹿児島県中小企業団体中央会",
      "東京商工会議所",
      "大阪商工会議所",
      "福井商工会議所",
      "石川県商工会連合会",
      "中越地区環境保全協議会",
    ],
  },
  {
    category: "公益財団・業界団体",
    organizations: [
      "公益財団法人 新産業創造研究機構",
      "公益財団法人 石川県産業創出支援機構",
      "一般社団法人 日本能率協会",
      "一般社団法人 日本産業機械工業会",
    ],
  },
  {
    category: "企業・教育機関",
    organizations: [
      "株式会社 経済産業新報社",
      "株式会社 新社会システム総合研究所",
      "株式会社 日本ビジネス出版",
      "株式会社 博報堂",
      "株式会社 東芝",
      "武蔵野市立 境南小学校",
    ],
  },
];

// プロフィール訪問者向けの主要サイト内コンテンツ（セミナー経由流入者に最初に見てほしい）
const featuredContent: {
  group: string;
  items: { href: string; title: string; description: string }[];
}[] = [
  {
    group: "まず試してほしい（無料診断）",
    items: [
      {
        href: "/",
        title: "法人向け電気料金リスクシミュレーター",
        description:
          "契約内容と使用量を入力するだけで、電気料金上昇リスクをスコア化します。",
      },
      {
        href: "/tariff-revision-calendar-2026",
        title: "2026〜2028年 制度改定カレンダー",
        description:
          "容量拠出金・再エネ賦課金・託送料金の改定時系列を実数字で整理。",
      },
      {
        href: "/special/emergency-scenario-analysis",
        title: "有事シナリオ分析 特集",
        description:
          "中東情勢・燃料高騰など有事発生時の法人電気代インパクトを3シナリオで比較。",
      },
    ],
  },
  {
    group: "実データで読む電気料金",
    items: [
      {
        href: "/business-electricity-price-trend-10-years",
        title: "法人向け電気料金 10 年推移",
        description:
          "特別高圧・高圧・低圧の推移データで急騰局面と高止まりを時系列整理。",
      },
      {
        href: "/jepx-price-trend-and-corporate-impact",
        title: "JEPX価格の10年推移と250円スパイク",
        description:
          "市場連動プラン契約者が受けた請求影響、固定プラン比較まで実データで整理。",
      },
      {
        href: "/capacity-contribution-explained",
        title: "容量拠出金の法人電気代への影響",
        description:
          "2026年度5,226円/kW、2027年度7,847円/kW、2028年度首都圏14,812円/kW の段階的増額を解説。",
      },
    ],
  },
  {
    group: "基礎から学ぶ",
    items: [
      {
        href: "/articles",
        title: "記事カテゴリハブ",
        description:
          "基礎・推移・契約・見直し・調達など9カテゴリから興味分野を選択。",
      },
      {
        href: "/business-electricity-retrospective",
        title: "法人電気料金 月次振り返り",
        description:
          "毎月の電気料金動向・補助政策・契約実務への影響を時系列で記録。",
      },
      {
        href: "/demand-response-revenue-model",
        title: "デマンドレスポンス（DR）で収益を得る方法",
        description:
          "DRを「コスト削減」ではなく「収益源」として捉える法人向けガイド。",
      },
    ],
  },
];

// 専門領域に対応するカテゴリハブ
const expertiseAreaLinks: Record<string, { href: string; label: string }> = {
  "電力・エネルギー市場": {
    href: "/articles/price-trends",
    label: "電気料金の推移と高止まり カテゴリを見る",
  },
  "脱炭素・GX": {
    href: "/articles/decarbonization",
    label: "脱炭素・GX対応 カテゴリを見る",
  },
  "エネルギーDX・ブロックチェーン": {
    href: "/articles/energy-dx",
    label: "エネルギーマネジメント・DX カテゴリを見る",
  },
  "情報発信・普及啓発": {
    href: "/articles",
    label: "記事カテゴリハブを見る",
  },
};

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "江田健二",
    "エネルギー情報センター 理事",
    "RAUL 代表取締役",
    "エネルギー コンサルタント",
    "脱炭素 エネルギーDX",
    "電力 自由化 専門家",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/kenji-eda",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kenji-eda",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "profile",
    images: [
      {
        url: "/kenji-eda.png",
        width: 160,
        height: 150,
        alt: "江田健二（一般社団法人エネルギー情報センター 理事）",
      },
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
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

// --- Page Component ---
export default function KenjiEdaProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "江田健二",
            alternateName: "Kenji Eda",
            url: "https://simulator.eic-jp.org/kenji-eda",
            image: "https://simulator.eic-jp.org/kenji-eda.png",
            jobTitle: "理事",
            worksFor: [
              {
                "@type": "Organization",
                name: "一般社団法人エネルギー情報センター",
                url: "https://eic-jp.org/",
              },
              {
                "@type": "Organization",
                name: "RAUL株式会社",
                url: "https://www.ra-ul.com/",
              },
            ],
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "慶應義塾大学",
            },
            award: "第39回 エネルギーフォーラム賞 普及啓発賞（2019年）",
            knowsAbout: [
              "電力・エネルギー市場",
              "法人向け電気料金",
              "脱炭素・GX",
              "エネルギーDX",
              "ブロックチェーン",
              "蓄電池ビジネス",
              "再生可能エネルギー",
            ],
            author: books.map((book) => ({
              "@type": "Book",
              name: book.title,
              url: book.url,
              inLanguage: "ja",
            })),
            sameAs: [
              "https://news.yahoo.co.jp/users/expert/edakenjiex/articles?page=1",
              "https://ja.wikipedia.org/wiki/%E6%B1%9F%E7%94%B0%E5%81%A5%E4%BA%8C",
              "https://www.ra-ul.com/corporate/executive",
              "https://www.ra-ul.com/seminar_event",
              "https://eic-jp.org/",
              "https://twitter.com/kenji__eda",
              "https://www.facebook.com/profile.php?id=1821326207",
            ],
          }),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "江田健二 プロフィール" },
        ]}
      />
      <GA4EventTracker
        eventName="kenji_eda_viewed"
        eventLabel="30秒以上閲覧"
        delayMs={30000}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">
          PROFILE ／ 理事プロフィール
        </p>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex-shrink-0">
            <Image
              src="/kenji-eda.png"
              alt="江田健二（一般社団法人エネルギー情報センター 理事）の顔写真"
              width={160}
              height={150}
              priority
              className="h-auto w-32 rounded-lg border border-slate-200 bg-white object-cover shadow-sm sm:w-40"
            />
            <p className="mt-2 text-[10px] leading-tight text-slate-500">
              出典：
              <a
                href="https://pps-net.org/book/98819"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                新電力ネット
              </a>
            </p>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              江田 健二（えだ けんじ）
            </h1>
            <p className="mt-2 text-base font-semibold text-sky-900">
              一般社団法人エネルギー情報センター 理事
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
              電力・エネルギー業界に20年以上携わる実業家・コンサルタント。慶應義塾大学経済学部を卒業後、アンダーセンコンサルティング（現アクセンチュア株式会社）で電力・化学業界のコンサルティングに従事。2005年にRAUL株式会社を設立し、代表取締役として、エネルギー・デジタル化・脱炭素化の領域で企業支援、執筆、講演活動を行っています。現在は
              <strong className="font-semibold text-slate-900">
                一般社団法人エネルギー情報センターの理事
              </strong>
              として、法人向け電気料金の情報格差を埋めるための情報発信にも取り組んでいます。
            </p>
          </div>
        </div>
      </header>

      {/* 詳細ページへの導線（lectures / books / media） */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">関連ページ（詳細）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          講演実績・著書・メディア掲載は専用の詳細ページにまとめています。それぞれの活動を深く確認したい方はこちらから。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Link
            href="/kenji-eda/lectures"
            className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow"
          >
            <p className="text-base font-semibold text-slate-900">講演実績</p>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">
              政府・自治体・経済団体・企業向け 24 団体超への登壇実績、最新の登壇予定、主な講演テーマを整理。
            </p>
          </Link>
          <Link
            href="/kenji-eda/books"
            className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow"
          >
            <p className="text-base font-semibold text-slate-900">書籍一覧</p>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">
              脱炭素・電力・蓄電池・エネルギーDX・ブロックチェーンをテーマとする代表的な著書 8 冊を紹介。
            </p>
          </Link>
          <Link
            href="/kenji-eda/media"
            className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow"
          >
            <p className="text-base font-semibold text-slate-900">メディア掲載</p>
            <p className="mt-1.5 text-xs leading-5 text-slate-600">
              Yahoo!ニュース エキスパート、Wikipedia、業界専門メディア、公式 SNS など主要メディアでの活動。
            </p>
          </Link>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">基本情報</h2>
        <dl className="mt-4 divide-y divide-slate-200 text-sm leading-7 text-slate-700 sm:text-base">
          {basicInfo.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[140px_1fr] sm:gap-4"
            >
              <dt className="font-semibold text-slate-900">{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 略歴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">略歴</h2>
        <ol className="mt-4 space-y-4 border-l-2 border-sky-200 pl-5">
          {careerTimeline.map((item, index) => (
            <li key={index} className="relative">
              <span className="absolute -left-[27px] top-1.5 inline-block h-3 w-3 rounded-full border-2 border-sky-500 bg-white" />
              <p className="text-sm font-semibold text-sky-800">{item.year}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700 sm:text-base">
                {item.label}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* 所属・役職 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">所属・役職</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          エネルギー・環境・サステナビリティ領域を中心に、複数の団体・委員会で活動しています。
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {affiliations.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 専門領域 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">専門領域</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          現場実務、政策動向、金融・投資の視点を横断しながら、エネルギー・環境分野の戦略支援に従事しています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {expertiseAreas.map((area) => {
            const link = expertiseAreaLinks[area.title];
            return (
              <div
                key={area.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {area.description}
                </p>
                {link && (
                  <p className="mt-3 text-sm">
                    <Link
                      href={link.href}
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      {link.label} →
                    </Link>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 主な著書 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">主な著書</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          エネルギー・脱炭素・デジタル化をテーマとした書籍を20冊以上執筆しています。代表的なタイトルを掲載します。
        </p>
        <ul className="mt-4 space-y-3">
          {books.map((book) => (
            <li
              key={book.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-base font-semibold text-slate-900">
                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  {book.title}
                </a>
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {book.description}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          ※ 他にも『蓄電所ビジネス』『むしろ、じっくり話していい。』など、エネルギー・脱炭素・ビジネスをテーマとした書籍を多数執筆。書籍情報は
          <a
            href="https://www.ra-ul.com/seminar_event"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            RAUL株式会社 講演依頼ページ
          </a>
          をもとに作成。表紙画像・書影は各書籍販売ページをご参照ください。
        </p>
      </section>

      {/* 最新の登壇 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最新の登壇</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          直近に登壇した、もしくは登壇予定のセミナーです。主催者サイトの告知・申込ページにリンクしています。
        </p>
        <ul className="mt-4 space-y-3">
          {recentTalks.map((talk, idx) => (
            <li
              key={idx}
              className="rounded-xl border border-slate-200 bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-sky-700">
                {talk.date}
                {talk.format && (
                  <span className="ml-2 text-slate-500">／ {talk.format}</span>
                )}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {talk.title}
              </p>
              <p className="mt-1 text-sm text-slate-700">
                主催：{talk.organizer}
              </p>
              <p className="mt-2 text-sm">
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  主催者サイトで詳細を見る →
                </a>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 主な講演テーマ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">主な講演テーマ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          主催者・聴講者のテーマに応じて柔軟に調整しています。
        </p>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {speakingTopics.map((topic) => (
            <li
              key={topic}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500" />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 講演実績 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">主な講演実績</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          国・地方自治体・経済団体・企業研修・教育機関など、幅広い主催者で講演を行っています。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {speakingEngagementsByCategory.map((cat) => (
            <div
              key={cat.category}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <h3 className="text-base font-semibold text-sky-900">
                {cat.category}
              </h3>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                {cat.organizations.map((org) => (
                  <li key={org} className="flex items-start gap-2">
                    <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{org}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500">
          ※ 上記は代表例。最新のセミナー情報は
          <a
            href="https://www.ra-ul.com/events"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            RAUL株式会社 イベント・セミナーページ
          </a>
          をご参照ください。
        </p>
      </section>

      {/* 活動内容 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">活動内容</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          情報発信と現場支援の双方で活動しています。個別の講演実績・著書は下のセクションをご参照ください。
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
          <li>
            ・エネルギー・脱炭素・ブロックチェーン・エネルギーDXなどをテーマとした書籍執筆（20冊以上、下記「主な著書」参照）
          </li>
          <li>・官公庁・自治体・業界団体主催のセミナー・講演への登壇（下記「主な講演実績」参照）</li>
          <li>・政府・環境省・厚生労働省などの委員会委員</li>
          <li>・大学・大学院での講義担当</li>
          <li>・Yahoo!ニュース 公式コメンテーター（エネルギー・環境領域）</li>
          <li>
            ・一般社団法人エネルギー情報センターの理事として、法人向け電気料金に関する情報発信・普及活動
          </li>
        </ul>
      </section>

      {/* 受賞歴 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">受賞歴</h2>
        <ul className="mt-4 space-y-3">
          {awards.map((award) => (
            <li
              key={award.title}
              className="rounded-xl border border-sky-200 bg-sky-50 p-4"
            >
              <p className="text-xs font-semibold tracking-wide text-sky-700">
                {award.year}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {award.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                {award.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* サイト内おすすめコンテンツ（セミナー経由訪問者向け） */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          サイト内おすすめコンテンツ
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          セミナー・講演をきっかけに本サイトを訪問された方へ。法人電気料金の「見える化」「予算策定」「契約見直し」に役立つコンテンツをピックアップしました。
        </p>
        <div className="mt-5 space-y-5">
          {featuredContent.map((group) => (
            <div key={group.group}>
              <h3 className="text-base font-semibold text-sky-900">
                {group.group}
              </h3>
              <div className="mt-2 grid gap-3 md:grid-cols-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-sky-300 hover:shadow"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {item.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* エネルギー情報センターでの役割 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">
          一般社団法人エネルギー情報センターでの役割
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          江田健二は、一般社団法人エネルギー情報センターの理事として、法人向け電気料金に関する情報格差の解消を目指しています。電力自由化以降、電気料金の仕組みはますます複雑化しており、企業・自治体の担当者が自信を持って判断できる情報基盤が不可欠です。本シミュレーターサイトは、その理念のもとで運営されています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          エネルギー・電力分野の専門知見と、コンサルティング現場で培った実務経験を活かし、企業の電力契約見直し、リスク診断、脱炭素経営の実現を支援しています。
        </p>
      </section>

      {/* 出典・関連リンク */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">出典・関連リンク</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
          <li>
            ・
            <a
              href="https://news.yahoo.co.jp/users/expert/edakenjiex/articles?page=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              Yahoo!ニュース エキスパートコメンテーター
            </a>
          </li>
          <li>
            ・
            <a
              href="https://ja.wikipedia.org/wiki/%E6%B1%9F%E7%94%B0%E5%81%A5%E4%BA%8C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              Wikipedia「江田健二」
            </a>
          </li>
          <li>
            ・
            <a
              href="https://www.ra-ul.com/corporate/executive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              RAUL株式会社 役員紹介ページ
            </a>
          </li>
          <li>
            ・
            <a
              href="https://eic-jp.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              一般社団法人エネルギー情報センター 公式サイト
            </a>
          </li>
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          ※本ページの記載情報は公開情報をもとに構成しています。役職・所属等は変更となる場合があります。
        </p>
      </section>

      {/* シミュレーター誘導 CTA */}
      <div className="mt-8">
        <ContentCta
          heading="まずは無料で電気料金リスクを試算する"
          description="契約内容と使用量を入力するだけで、法人電気料金の上昇リスクをスコア化します。自社の状況を具体的な数字で把握したい方へ。"
          links={[
            { href: "/", label: "シミュレーターを使う" },
            { href: "/articles", label: "記事カテゴリ一覧を見る" },
          ]}
        />
      </div>

      {/* 専門家相談 CTA */}
      <div className="mt-6">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

      {/* トップへ戻る */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block text-sm text-sky-700 underline underline-offset-2 hover:text-sky-900"
        >
          ← トップページに戻る
        </Link>
      </div>

    </main>
    </>
  );
}
