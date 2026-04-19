/**
 * /articles ハブの「ペルソナ別入口」セクション用定義。
 *
 * 各ペルソナの読み順リンクは、以下のいずれかに限定する:
 * - `/articles/{categorySlug}` （articleCategories に存在する slug のみ）
 * - `/{articleSlug}`           （articleList に存在する slug のみ）
 * - `/compare`, `/how-to` など、src/app 配下に実在する静的ページ
 *
 * 新規に追加する場合は、必ず実在を確認すること。
 */

export type PersonaLink = {
  /** 内部URLパス（先頭スラッシュ必須） */
  href: string;
  /** カード内に表示するラベル */
  label: string;
  /** リンク先の1行説明 */
  note: string;
};

export type PersonaEntrance = {
  key: string;
  /** ペルソナ名（肩書き） */
  title: string;
  /** 所属・規模イメージの補足 */
  subtitle: string;
  /** ペルソナ像の説明（2〜3行） */
  description: string;
  /** 想定する読み順3つ（上から推奨順） */
  links: [PersonaLink, PersonaLink, PersonaLink];
};

export const ARTICLE_PERSONA_ENTRANCES: PersonaEntrance[] = [
  {
    key: "corporate-soumu",
    title: "総務部 電力担当",
    subtitle: "中堅企業 / 電力業務が回ってきた非専門担当者",
    description:
      "電気契約が総務に回ってきたが専門ではない方向け。基礎→見直しの進め方→料金メニュー比較の順で、最短で判断材料が揃う並びです。",
    links: [
      {
        href: "/articles/basic",
        label: "1. 基礎から知る",
        note: "料金構造・請求書の見方から確認",
      },
      {
        href: "/articles/review-points",
        label: "2. 見直しポイントを知る",
        note: "見直しの進め方と社内合意の整え方",
      },
      {
        href: "/compare",
        label: "3. 料金メニュー比較・診断",
        note: "市場連動 / 固定などプラン適性を診断",
      },
    ],
  },
  {
    key: "municipality-officer",
    title: "自治体 施設管理課",
    subtitle: "公共施設の電力契約 / 入札・議会説明が必要",
    description:
      "自治体特有の入札実務・予算プロセス・議会説明を押さえた上で、見直しポイントへ進むルート。企業案件とは判断軸が異なるため、自治体カテゴリから入ります。",
    links: [
      {
        href: "/articles/municipality",
        label: "1. 自治体・公共向けカテゴリ",
        note: "入札・議会・包括管理などの全体像",
      },
      {
        href: "/municipality-procurement-methods",
        label: "2. 自治体電力調達の入札実務",
        note: "一般・指名・随契の使い分けを解説",
      },
      {
        href: "/articles/review-points",
        label: "3. 見直しポイントを知る",
        note: "契約見直しの実務フローを確認",
      },
    ],
  },
  {
    key: "energy-manager",
    title: "エネルギー管理士",
    subtitle: "大企業 / 調達・市場分析・設備投資の技術判断",
    description:
      "調達構造・市場データ・リスクシナリオを押さえ、自社の設備投資や長期調達戦略を技術面から設計する方向けのルートです。",
    links: [
      {
        href: "/articles/power-procurement",
        label: "1. 電力調達の仕組みを知る",
        note: "JEPX・容量・非化石価値まで構造を把握",
      },
      {
        href: "/articles/market-data",
        label: "2. データで見る電力市場",
        note: "JEPX・需要・気象の定量分析",
      },
      {
        href: "/articles/risk-scenarios",
        label: "3. リスクシナリオ別に知る",
        note: "上振れパターンを分解し投資判断に接続",
      },
    ],
  },
];
