# topline データ（API機械取得）2026-07-30

取得元: GSC Search Analytics API / GA4 Data API（読み取り専用・2026-07-27 実行）。
GSCはデータ確定ラグを見て末日を 2026-07-24、GA4は当日部分計測を避けて末日を 2026-07-26 とした。

## 1. GSC サイト全体（28日 前後比較）

- 期間A: 2026-06-27 〜 2026-07-24／期間B: 2026-05-30 〜 2026-06-26

| 指標 | 期間B（前28日） | 期間A（直近28日） | 前期比 |
|---|---:|---:|---:|
| クリック | 3,698 | 5,415 | +46.4% |
| 表示 | 152,644 | 216,016 | +41.5% |
| CTR | 2.42% | 2.51% | +0.08pt |
| 平均掲載順位 | 8.2 | 7.7 | -0.5 |

## 2. GSC サイト全体（91日）

- 期間: 2026-04-25 〜 2026-07-24（91日）

| 指標 | 前回計測（第5回・4/4〜7/3） | 今回（91日） | 前回比 |
|---|---:|---:|---:|
| クリック | 6,902 | 10,837 | +57.0% |
| 表示 | 292,000 | 444,768 | +52.3% |
| CTR | 2.40% | 2.44% | +0.04pt |
| 平均掲載順位 | — | 8.2 | — |

※前回値は `.ai-team/MEASUREMENT_5TH_TOPLINE_2026-07-06.md`（手動エクスポート・中央順位ベースのため順位は比較対象外）。

## 3. GA4（28日 前後比較）

- 期間A: 2026-06-29 〜 2026-07-26／期間B: 2026-06-01 〜 2026-06-28

| 指標 | 期間B（前28日） | 期間A（直近28日） | 前期比 |
|---|---:|---:|---:|
| totalUsers | 11,546 | 12,903 | +11.8% |
| screenPageViews | 24,363 | 29,702 | +21.9% |
| sessions | 14,996 | 16,822 | +12.2% |
| contact_form_submitted | 5 | 5 | +0.0% |
| cta_click | 39 | 68 | +74.4% |
| download_completed | 11 | 3 | -72.7% |

### contact_form_submitted の内訳（期間A）

内訳は取得不可＝総数のみ。`cta_from` / `source` / `event_label` のいずれもGA4のカスタムディメンションとして未登録（Data API metadata で確認）。

登録済みカスタムディメンション（7件）: `customEvent:ab_version` / `customEvent:diag_goals` / `customEvent:diag_new` / `customEvent:diag_re` / `customEvent:diag_size` / `customEvent:diag_use` / `customEvent:diag_when`

※現状 `contact_form_submitted` は `event_label`（問い合わせ種別）のみ送信しており、`cta_from` は送信側にも存在しない。内訳を取るにはGA4管理画面でカスタムディメンション登録が必要（登録日以降のデータのみ遡及不可）。

## 4. ページ別（期間A・28日）

- 全 1,000 行を `.ai-team/gsc/topline_pages_28d_2026-07.csv` に保存。
- うちクリック1以上: 550 ページ。

| # | ページ | クリック | 表示 | CTR | 順位 |
|---:|---|---:|---:|---:|---:|
| 1 | /business-electricity-price-trend-10-years | 741 | 5,866 | 12.63% | 4.6 |
| 2 | /special/materials-packaging-scenario-analysis/plastic-resin | 139 | 2,225 | 6.25% | 6.3 |
| 3 | /articles/price-trends | 127 | 2,420 | 5.25% | 8.8 |
| 4 | /electricity-price-trend-by-area | 101 | 1,924 | 5.25% | 6.8 |
| 5 | /ppa-price-benchmark-2026 | 99 | 1,471 | 6.73% | 4.7 |
| 6 | /subsidy-stacking-combination-rules | 92 | 5,068 | 1.82% | 4.2 |
| 7 | /electricity-demand-pattern | 90 | 2,169 | 4.15% | 5.7 |
| 8 | /ai-demand-2030-forecast | 75 | 2,603 | 2.88% | 5.4 |
| 9 | /area-power-supply-mix-comparison | 72 | 1,230 | 5.85% | 6.4 |
| 10 | /demand-value-guide | 72 | 2,037 | 3.53% | 6.9 |
| 11 | /electricity-vs-gas-price-trend | 69 | 1,186 | 5.82% | 6.9 |
| 12 | /supply-point-id-explained | 67 | 6,032 | 1.11% | 7.2 |
| 13 | /factory-electricity-cost-benchmark | 63 | 1,679 | 3.75% | 5.3 |
| 14 | /electricity-double-billing-faq | 62 | 5,055 | 1.23% | 6.5 |
| 15 | /office-electricity-cost-benchmark | 62 | 2,669 | 2.32% | 4.0 |
| 16 | /asia-electricity-cost-comparison | 57 | 1,174 | 4.86% | 6.2 |
| 17 | /electricity-cost-benchmark-by-industry | 57 | 1,752 | 3.25% | 5.9 |
| 18 | /business-electricity-retrospective/special-high-voltage-2019-2025 | 55 | 882 | 6.24% | 3.9 |
| 19 | /global-electricity-price-benchmark | 55 | 1,298 | 4.24% | 6.6 |
| 20 | /bilateral-power-contracts | 53 | 1,584 | 3.35% | 2.6 |
