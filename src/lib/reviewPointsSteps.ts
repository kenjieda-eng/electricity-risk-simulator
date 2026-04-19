/** 見直しポイント(cat5)を4ステップに構造化するためのマッピング */

export type ReviewStep = "状況確認" | "比較準備" | "比較・交渉" | "切替実務";

export type ReviewStepGroup = {
  step: ReviewStep;
  order: number;
  label: string;
  description: string;
  slugs: string[];
};

export const REVIEW_POINTS_STEP_GROUPS: ReviewStepGroup[] = [
  {
    step: "状況確認",
    order: 1,
    label: "Step 1｜状況確認",
    description:
      "見直しの必要性を判断し、いつ・誰が着手するかを決める段階です。更新期限・値上げ通知・使用量変化をきっかけに確認します。",
    slugs: [
      "how-to-start-electricity-contract-review",
      "who-should-handle-electricity-contract-review",
      "when-to-review-electricity-contract",
      "review-contract-renewal-deadlines",
      "contract-renewal-6-months-before",
      "what-to-do-3-months-before-electricity-contract-renewal",
      "should-you-review-after-price-increase-notice",
      "should-you-review-around-subsidy-end",
      "review-contract-when-usage-changes",
      "which-companies-benefit-most-from-review",
      "why-business-electricity-costs-are-high",
      "is-business-electricity-price-increase-unreasonable",
    ],
  },
  {
    step: "比較準備",
    order: 2,
    label: "Step 2｜比較準備",
    description:
      "請求書・契約書・見積書を読み込み、必要資料を揃え、社内の確認体制を整える段階です。",
    slugs: [
      "how-to-read-electricity-bills-for-review",
      "where-to-check-in-electricity-contract",
      "documents-needed-for-electricity-contract-review",
      "internal-checklist-for-electricity-contract-review",
      "5-minimum-checkpoints-for-electricity-contract-review",
      "business-electricity-contract-checklist",
      "information-to-prepare-before-quotation-request",
      "contract-review-for-accounting",
      "contract-review-for-facility-management",
      "contract-review-for-general-affairs",
      "contract-review-practice-guide",
    ],
  },
  {
    step: "比較・交渉",
    order: 3,
    label: "Step 3｜比較・交渉",
    description:
      "複数社の見積を比較し、単価以外の条項まで含めて判断する段階です。燃調・市場連動・容量拠出金など上振れ要因も確認します。",
    slugs: [
      "compare-business-electricity-estimates",
      "how-to-compare-electricity-suppliers",
      "cheap-unit-price-not-always-better",
      "not-just-unit-price-comparison-checklist",
      "quotation-comparison-table-guide",
      "non-price-factors-in-electricity-contract",
      "electricity-contract-terms",
      "electricity-contract-period-guide",
      "how-to-check-fuel-cost-adjustment-terms",
      "how-to-check-market-price-adjustment-terms",
      "how-to-check-capacity-contribution-terms",
      "mid-term-cancellation-clause-guide",
      "high-voltage-contract-review-points",
    ],
  },
  {
    step: "切替実務",
    order: 4,
    label: "Step 4｜切替実務・切替後",
    description:
      "契約切替の手続きと、切替後の確認・多拠点運用まで含めた最終段階です。",
    slugs: [
      "switching-business-electricity-contract",
      "review-multi-site-electricity-contracts",
    ],
  },
];

/** slug -> stepラベルの逆引き */
export const REVIEW_POINTS_STEP_BY_SLUG: Record<string, ReviewStep> =
  REVIEW_POINTS_STEP_GROUPS.reduce<Record<string, ReviewStep>>((acc, group) => {
    for (const slug of group.slugs) acc[slug] = group.step;
    return acc;
  }, {});
