# topline データ（API機械取得）2026-08-31

取得元: GSC Search Analytics API / GA4 Data API（読み取り専用・2026-08-31 実行）。
GSCはデータ確定ラグを見て末日を 2026-08-28、GA4は当日部分計測を避けて末日を 2026-08-30 とした。

## 1. GSC サイト全体（28日 前後比較）

- 期間A: 2026-08-01 〜 2026-08-28／期間B: 2026-07-04 〜 2026-07-31

| 指標 | 期間B（前28日） | 期間A（直近28日） | 前期比 |
|---|---:|---:|---:|
| クリック | 5,479 | 5,203 | -5.0% |
| 表示 | 208,572 | 215,673 | +3.4% |
| CTR | 2.63% | 2.41% | -0.21pt |
| 平均掲載順位 | 7.9 | 8.1 | +0.2 |

## 2. GSC サイト全体（91日）

- 期間: 2026-05-30 〜 2026-08-28（91日）

| 指標 | 前回計測（第5回・4/4〜7/3） | 今回（91日） | 前回比 |
|---|---:|---:|---:|
| クリック | 6,902 | 15,602 | +126.1% |
| 表示 | 292,000 | 629,995 | +115.8% |
| CTR | 2.40% | 2.48% | +0.08pt |
| 平均掲載順位 | — | 8.0 | — |

※前回値は `.ai-team/MEASUREMENT_5TH_TOPLINE_2026-07-06.md`（手動エクスポート・中央順位ベースのため順位は比較対象外）。

## 3. GA4（28日 前後比較）

- 期間A: 2026-08-03 〜 2026-08-30／期間B: 2026-07-06 〜 2026-08-02

| 指標 | 期間B（前28日） | 期間A（直近28日） | 前期比 |
|---|---:|---:|---:|
| totalUsers | 13,280 | 12,323 | -7.2% |
| screenPageViews | 28,930 | 26,054 | -9.9% |
| sessions | 17,182 | 15,604 | -9.2% |
| contact_form_submitted | 3 | 2 | -33.3% |
| contact_cta_click | 1 | 2 | +100.0% |
| contact_cta_view | 2,749 | 2,336 | -15.0% |
| calculator_cta_click | 6 | 8 | +33.3% |
| cta_click | 45 | 49 | +8.9% |
| download_completed | 0 | 22 | — |

### contact_form_submitted の内訳（期間A）

内訳は取得不可＝総数のみ。`cta_from` / `source` / `event_label` のいずれもGA4のカスタムディメンションとして未登録（Data API metadata で確認）。

登録済みカスタムディメンション（7件）: `customEvent:ab_version` / `customEvent:diag_goals` / `customEvent:diag_new` / `customEvent:diag_re` / `customEvent:diag_size` / `customEvent:diag_use` / `customEvent:diag_when`

※現状 `contact_form_submitted` は `event_label`（問い合わせ種別）のみ送信しており、`cta_from` は送信側にも存在しない。内訳を取るにはGA4管理画面でカスタムディメンション登録が必要（登録日以降のデータのみ遡及不可）。

## 4. ページ別（期間A・28日）

- 全 1,000 行を `.ai-team/gsc/topline_pages_28d_2026-08.csv` に保存。
- うちクリック1以上: 519 ページ。

| # | ページ | クリック | 表示 | CTR | 順位 |
|---:|---|---:|---:|---:|---:|
| 1 | /business-electricity-price-trend-10-years | 551 | 4,612 | 11.95% | 5.2 |
| 2 | /municipality-long-term-contract | 153 | 4,592 | 3.33% | 5.7 |
| 3 | /electricity-price-trend-by-area | 123 | 2,565 | 4.80% | 6.9 |
| 4 | /special/materials-packaging-scenario-analysis/plastic-resin | 121 | 2,221 | 5.45% | 6.4 |
| 5 | /area-power-supply-mix-comparison | 94 | 2,443 | 3.85% | 7.2 |
| 6 | /office-electricity-cost-benchmark | 90 | 2,120 | 4.25% | 4.3 |
| 7 | /ppa-price-benchmark-2026 | 80 | 1,170 | 6.84% | 4.9 |
| 8 | /ai-demand-2030-forecast | 77 | 2,002 | 3.85% | 6.3 |
| 9 | /datacenter-electricity-contract-guide | 75 | 1,300 | 5.77% | 5.0 |
| 10 | /electricity-demand-pattern | 75 | 2,236 | 3.35% | 5.9 |
| 11 | /electricity-vs-gas-price-trend | 73 | 1,338 | 5.46% | 6.2 |
| 12 | /articles/price-trends | 70 | 1,675 | 4.18% | 9.8 |
| 13 | /subsidy-stacking-combination-rules | 60 | 2,413 | 2.49% | 4.5 |
| 14 | /subsidy-municipality-energy-examples | 59 | 1,564 | 3.77% | 6.8 |
| 15 | /region-tokyo-electricity-price-trend | 55 | 648 | 8.49% | 8.3 |
| 16 | /electricity-double-billing-faq | 54 | 4,731 | 1.14% | 5.8 |
| 17 | /demand-value-guide | 53 | 1,272 | 4.17% | 12.3 |
| 18 | /business-electricity-retrospective/special-high-voltage-2019-2025 | 51 | 479 | 10.65% | 5.3 |
| 19 | /business-electricity-retrospective/2026-07 | 48 | 983 | 4.88% | 4.9 |
| 20 | /emergency-billing-dispute | 46 | 2,756 | 1.67% | 7.3 |
