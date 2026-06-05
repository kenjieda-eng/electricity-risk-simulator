# 再エネ賦課金 プロース・ドリフト検出レポート（ベースライン）

- 生成: `scripts/check-surcharge-drift.mjs`（レポート専用 / 本体無変更）
- 基準日: 2026-06-05
- SSOT: `src/lib/data/renewableSurcharge.ts`（15年度）

## サマリ

- 走査ファイル数: 845
- 検出ファイル数: 168（不一致 133 / 年度不明 37）
- 検出総件数: 258（不一致 184 / 年度不明 74）

## 年度別内訳（不一致）

| 年度 | SSOT確定値(円/kWh) | 不一致件数 |
|---|---|---|
| 2022年度 | 3.45 | 1 |
| 2025年度 | 3.98 | 2 |
| 2026年度 | 4.18 | 181 |

## 不一致 一覧（184件）

| # | file:line | 検出文字列 | 年度 | 期待値(SSOT) | 実値 |
|---|---|---|---|---|---|
| 1 | `src/app/advertising-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 2 | `src/app/advertising-electricity-cost-review/page.tsx:474` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 3 | `src/app/aichi-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 4 | `src/app/akita-business-electricity-cost/page.tsx:197` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 5 | `src/app/aomori-business-electricity-cost/page.tsx:197` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 6 | `src/app/aquarium-zoo-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 7 | `src/app/aquarium-zoo-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 8 | `src/app/auto-parts-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 9 | `src/app/auto-repair-bodyshop-electricity-cost-review/page.tsx:128` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 10 | `src/app/auto-repair-bodyshop-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 11 | `src/app/beauty-nail-salon-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 12 | `src/app/beauty-nail-salon-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 13 | `src/app/beverage-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 14 | `src/app/beverage-electricity-cost-review/page.tsx:488` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 15 | `src/app/broadcasting-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 16 | `src/app/bunkyo-ku-business-electricity-cost/page.tsx:193` | …円/kWh、2026年度予測4.5円/kWh前後と上昇傾向。… | 2026年度 | 4.18 | 4.5 |
| 17 | `src/app/business-electricity-retrospective/why-business-electricity-prices-rose-after-ukraine/page.tsx:213` | …変動しており、2022年度の3.36円/kWhから2023年度… | 2022年度 | 3.45 | 3.36 |
| 18 | `src/app/call-center-bpo-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 19 | `src/app/call-center-bpo-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 20 | `src/app/capacity-contribution-simulation/page.tsx:379` | …2026年度は容量拠出金（約1.1円/kWh）＋再エネ賦課金… | 2026年度 | 4.18 | 1.1 |
| 21 | `src/app/car-dealership-electricity-cost-review/page.tsx:123` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 22 | `src/app/car-dealership-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 23 | `src/app/casting-diecasting-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 24 | `src/app/casting-diecasting-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 25 | `src/app/cement-readymix-concrete-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 26 | `src/app/cement-readymix-concrete-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 27 | `src/app/central-kitchen-catering-electricity-cost-review/page.tsx:128` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 28 | `src/app/central-kitchen-catering-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 29 | `src/app/ceramics-pottery-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 30 | `src/app/ceramics-pottery-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 31 | `src/app/chemical-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 32 | `src/app/chiba-business-electricity-cost/page.tsx:203` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。京葉… | 2026年度 | 4.18 | 4.5 |
| 33 | `src/app/coin-laundry-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 34 | `src/app/coin-laundry-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 35 | `src/app/confectionery-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 36 | `src/app/confectionery-electricity-cost-review/page.tsx:483` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 37 | `src/app/construction-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇。本社… | 2026年度 | 4.18 | 4.5 |
| 38 | `src/app/construction-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 39 | `src/app/consulting-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 40 | `src/app/dairy-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 41 | `src/app/dairy-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 42 | `src/app/dispensing-pharmacy-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 43 | `src/app/dispensing-pharmacy-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 44 | `src/app/does-fuel-cost-adjustment-change-even-in-fixed-plan/page.tsx:182` | …xt-slate-700">3.49円/kWh（2025年度）… | 2025年度 | 3.98 | 3.49 |
| 45 | `src/app/dry-cleaning-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 46 | `src/app/dry-cleaning-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 47 | `src/app/ehime-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 48 | `src/app/electronic-components-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 49 | `src/app/electronic-components-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 50 | `src/app/electronics-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 51 | `src/app/extra-high-voltage-electricity-pricing/page.tsx:258` | …xt-slate-700">3.49円/kWh（2025年度）… | 2025年度 | 3.98 | 3.49 |
| 52 | `src/app/film-production-studio-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 53 | `src/app/film-production-studio-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 54 | `src/app/food-processing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 55 | `src/app/food-processing-electricity-cost-review/page.tsx:495` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 56 | `src/app/forging-heat-treatment-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 57 | `src/app/forging-heat-treatment-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 58 | `src/app/frozen-food-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 59 | `src/app/frozen-food-electricity-cost-review/page.tsx:482` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 60 | `src/app/fukui-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 61 | `src/app/fukuoka-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 62 | `src/app/fukushima-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。浜通… | 2026年度 | 4.18 | 4.5 |
| 63 | `src/app/funeral-hall-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 64 | `src/app/funeral-hall-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 65 | `src/app/furniture-manufacturing-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 66 | `src/app/furniture-manufacturing-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 67 | `src/app/gas-station-electricity-cost-review/page.tsx:123` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 68 | `src/app/gas-station-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 69 | `src/app/gifu-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 70 | `src/app/glass-ceramics-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 71 | `src/app/glass-ceramics-electricity-cost-review/page.tsx:529` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 72 | `src/app/glass-manufacturing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 73 | `src/app/glass-manufacturing-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 74 | `src/app/gunma-business-electricity-cost/page.tsx:203` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。自動… | 2026年度 | 4.18 | 4.5 |
| 75 | `src/app/hair-salon-barber-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 76 | `src/app/hair-salon-barber-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 77 | `src/app/health-food-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 78 | `src/app/health-food-electricity-cost-review/page.tsx:476` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 79 | `src/app/hiroshima-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 80 | `src/app/hokkaido-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 81 | `src/app/hyogo-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 82 | `src/app/ibaraki-business-electricity-cost/page.tsx:203` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。鹿島… | 2026年度 | 4.18 | 4.5 |
| 83 | `src/app/internet-cafe-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 84 | `src/app/internet-cafe-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 85 | `src/app/ishikawa-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 86 | `src/app/it-services-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 87 | `src/app/it-services-electricity-cost-review/page.tsx:476` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 88 | `src/app/itabashi-ku-business-electricity-cost/page.tsx:194` | …円/kWh、2026年度予測4.5円/kWh前後。年間500… | 2026年度 | 4.18 | 4.5 |
| 89 | `src/app/iwate-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 90 | `src/app/kagawa-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 91 | `src/app/kagoshima-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 92 | `src/app/kanagawa-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 93 | `src/app/karaoke-box-electricity-cost-review/page.tsx:128` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 94 | `src/app/karaoke-box-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 95 | `src/app/kochi-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 96 | `src/app/koto-ku-business-electricity-cost/page.tsx:194` | …円/kWh、2026年度予測4.5円/kWh前後。江東区の特… | 2026年度 | 4.18 | 4.5 |
| 97 | `src/app/kumamoto-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 98 | `src/app/kyoto-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 99 | `src/app/leather-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 100 | `src/app/lumber-woodworking-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 101 | `src/app/lumber-woodworking-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 102 | `src/app/meat-processing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 103 | `src/app/meat-processing-electricity-cost-review/page.tsx:478` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 104 | `src/app/medical-device-manufacturing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 105 | `src/app/medical-device-manufacturing-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 106 | `src/app/metal-processing-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 107 | `src/app/metal-stamping-sheet-metal-electricity-cost-review/page.tsx:123` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 108 | `src/app/metal-stamping-sheet-metal-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 109 | `src/app/mie-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 110 | `src/app/miyagi-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。仙台… | 2026年度 | 4.18 | 4.5 |
| 111 | `src/app/miyazaki-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 112 | `src/app/nagano-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 113 | `src/app/nagasaki-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 114 | `src/app/nakano-ku-business-electricity-cost/page.tsx:193` | …円/kWh、2026年度予測4.5円/kWh前後と上昇傾向。… | 2026年度 | 4.18 | 4.5 |
| 115 | `src/app/nara-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 116 | `src/app/niigata-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 117 | `src/app/non-ferrous-metal-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 118 | `src/app/oita-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 119 | `src/app/okayama-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 120 | `src/app/okinawa-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 121 | `src/app/osaka-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 122 | `src/app/ota-ku-business-electricity-cost/page.tsx:194` | …円/kWh、2026年度予測4.5円/kWh前後。年間100… | 2026年度 | 4.18 | 4.5 |
| 123 | `src/app/paint-ink-manufacturing-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 124 | `src/app/paint-ink-manufacturing-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 125 | `src/app/parking-facility-electricity-cost-review/page.tsx:123` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 126 | `src/app/parking-facility-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 127 | `src/app/pet-food-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 128 | `src/app/pet-food-electricity-cost-review/page.tsx:478` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 129 | `src/app/pharmaceutical-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 130 | `src/app/plastic-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 131 | `src/app/plating-surface-treatment-electricity-cost-review/page.tsx:123` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 132 | `src/app/plating-surface-treatment-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 133 | `src/app/ppa-contract-pitfalls/page.tsx:139` | …円/kWh、2026年度予測4.5円/kWh前後。自己託送・… | 2026年度 | 4.18 | 4.5 |
| 134 | `src/app/precision-instruments-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 135 | `src/app/precision-optical-instruments-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 136 | `src/app/precision-optical-instruments-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 137 | `src/app/printing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇。年6… | 2026年度 | 4.18 | 4.5 |
| 138 | `src/app/printing-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 139 | `src/app/publishing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 140 | `src/app/pulp-paper-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇。年3… | 2026年度 | 4.18 | 4.5 |
| 141 | `src/app/pulp-paper-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 142 | `src/app/real-estate-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 143 | `src/app/rubber-products-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 144 | `src/app/rubber-products-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 145 | `src/app/saga-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 146 | `src/app/saitama-business-electricity-cost/page.tsx:203` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。大型… | 2026年度 | 4.18 | 4.5 |
| 147 | `src/app/seafood-processing-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 148 | `src/app/seafood-processing-electricity-cost-review/page.tsx:477` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 149 | `src/app/seasoning-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 150 | `src/app/seasoning-electricity-cost-review/page.tsx:477` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 151 | `src/app/semiconductor-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 152 | `src/app/setagaya-ku-business-electricity-cost/page.tsx:193` | …円/kWh、2026年度予測4.5円/kWh前後と上昇傾向。… | 2026年度 | 4.18 | 4.5 |
| 153 | `src/app/shiga-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 154 | `src/app/shimane-business-electricity-cost/page.tsx:220` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 155 | `src/app/shinagawa-ku-business-electricity-cost/page.tsx:194` | …円/kWh、2026年度予測4.5円/kWh前後。大崎の特別… | 2026年度 | 4.18 | 4.5 |
| 156 | `src/app/shipbuilding-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 157 | `src/app/shipbuilding-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 158 | `src/app/shizuoka-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 159 | `src/app/staffing-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 160 | `src/app/steel-electricity-cost-review/page.tsx:110` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 161 | `src/app/sumida-ku-business-electricity-cost/page.tsx:194` | …円/kWh、2026年度予測4.5円/kWh前後。年間100… | 2026年度 | 4.18 | 4.5 |
| 162 | `src/app/summer-peak-electricity-cost-cfo/page.tsx:74` | …"再エネ賦課金は2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 163 | `src/app/taito-ku-business-electricity-cost/page.tsx:193` | …円/kWh、2026年度予測4.5円/kWh前後と上昇傾向。… | 2026年度 | 4.18 | 4.5 |
| 164 | `src/app/textile-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 165 | `src/app/tochigi-business-electricity-cost/page.tsx:203` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。自動… | 2026年度 | 4.18 | 4.5 |
| 166 | `src/app/tokushima-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 167 | `src/app/tokyo-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 168 | `src/app/toshima-ku-business-electricity-cost/page.tsx:193` | …円/kWh、2026年度予測4.5円/kWh前後と上昇傾向。… | 2026年度 | 4.18 | 4.5 |
| 169 | `src/app/tottori-business-electricity-cost/page.tsx:220` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 170 | `src/app/toyama-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 171 | `src/app/transportation-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 172 | `src/app/transportation-electricity-cost-review/page.tsx:481` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 173 | `src/app/veterinary-clinic-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 174 | `src/app/veterinary-clinic-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 175 | `src/app/wakayama-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 176 | `src/app/warehouse-electricity-cost-review/page.tsx:113` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 177 | `src/app/warehouse-electricity-cost-review/page.tsx:483` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 178 | `src/app/wedding-banquet-hall-electricity-cost-review/page.tsx:118` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 179 | `src/app/wedding-banquet-hall-electricity-cost-review/page.tsx:480` | …98円/kWh、2026年度4.5円/kWh前後と上昇トレン… | 2026年度 | 4.18 | 4.5 |
| 180 | `src/app/yamagata-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 181 | `src/app/yamaguchi-business-electricity-cost/page.tsx:225` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 182 | `src/app/yamanashi-business-electricity-cost/page.tsx:202` | …円/kWh、2026年度予測4.5円/kWh前後と上昇。年間… | 2026年度 | 4.18 | 4.5 |
| 183 | `src/data/articles.ts:4853` | …026年度の再エネ賦課金単価4.15円/kWhと計算方法、低圧… | 2026年度 | 4.18 | 4.15 |
| 184 | `src/lib/industryOfficePublicArticles.ts:91` | …"特別高圧の平均単価は約16.9円/kWhですが、再エネ賦… | 2026年度 | 4.18 | 16.9 |

## 年度不明・要目視 一覧（74件）

> 年度と確実に対にできなかった賦課金近傍の単価。SSOT比較ではなく人手確認が必要。

| # | file:line | 検出文字列 | 実値 | 備考 |
|---|---|---|---|---|
| 1 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:57` | …エネ賦課金（2026 年度 4.18 円/kWh）の試算と削減策… | 4.18 | 年度参照なし |
| 2 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:157` | …tion: "再エネ賦課金（4.18 円/kWh）は法人でも削減… | 4.18 | 年度参照なし |
| 3 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:475` | …エネ賦課金（2026 年度 4.18 円/kWh）の試算と削減策 | 4.18 | 年度参照なし |
| 4 | `src/app/business-electricity-price-hike-reasons-2026/page.tsx:72` | fy2025: "約3.98円/kWh", | 3.98 | 年度参照なし |
| 5 | `src/app/business-electricity-retrospective/2026-03/page.tsx:161` | …はいえまだ残っており（低圧 1.50円/kWh、高圧 0.80… | 1.5 | 年度参照なし |
| 6 | `src/app/business-electricity-retrospective/2026-03/page.tsx:161` | …1.50円/kWh、高圧 0.80円/kWh）、JEPX も… | 0.8 | 年度参照なし |
| 7 | `src/app/business-electricity-retrospective/2026-03/page.tsx:274` | …賦課金は3月使用分まで旧単価3.98円/kWh が継続。5月使… | 3.98 | 年度参照なし |
| 8 | `src/app/business-electricity-retrospective/2026-03/page.tsx:274` | …Wh が継続。5月使用分から4.18円/kWh の新単価へ切り… | 4.18 | 年度参照なし |
| 9 | `src/app/business-electricity-retrospective/2026-03/page.tsx:501` | …厚い補助から低圧 4.50→1.50円/kWh、高圧 2.30… | 1.5 | 年度参照なし |
| 10 | `src/app/business-electricity-retrospective/2026-03/page.tsx:501` | …円/kWh、高圧 2.30→0.80円/kWh の段階的減額に… | 0.8 | 年度参照なし |
| 11 | `src/app/business-electricity-retrospective/2026-03/page.tsx:503` | …経産省告示で 5 月以降 4.18円/kWh 確定、過去最高… | 4.18 | 年度参照なし |
| 12 | `src/app/business-electricity-retrospective/2026-04/page.tsx:204` | …賦課金は4月使用分まで旧単価3.98円/kWh が継続しますが… | 3.98 | 年度参照なし |
| 13 | `src/app/business-electricity-retrospective/2026-04/page.tsx:204` | …経産省告示で5月使用分以降は4.18円/kWh（過去最高、+0… | 4.18 | 年度参照なし |
| 14 | `src/app/business-electricity-retrospective/2026-04/page.tsx:278` | …賦課金は4月使用分まで旧単価3.98円/kWh が継続。5月使… | 3.98 | 年度参照なし |
| 15 | `src/app/business-electricity-retrospective/2026-04/page.tsx:278` | …Wh が継続。5月使用分から4.18円/kWh の新単価へ切り… | 4.18 | 年度参照なし |
| 16 | `src/app/business-electricity-retrospective/2026-04/page.tsx:426` | …5月使用分から再エネ賦課金は4.18円/kWh（過去最高）に切… | 4.18 | 年度参照なし |
| 17 | `src/app/business-electricity-retrospective/2026-04/page.tsx:506` | …<li>再エネ賦課金 4.18円/kWh 確定告知（5… | 4.18 | 年度参照なし |
| 18 | `src/app/business-electricity-retrospective/2026-05/page.tsx:230` | …再エネ賦課金新単価（確定値 4.18円/kWh、前年度比 +0… | 4.18 | 年度参照なし |
| 19 | `src/app/business-electricity-retrospective/2026-05/page.tsx:249` | …再エネ賦課金新単価（確定値 4.18円/kWh）が初めて全使用… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 20 | `src/app/business-electricity-retrospective/2026-05/page.tsx:271` | …te-600">3.98円→4.18円/kWh（確定値、+0.… | 4.18 | 年度参照なし |
| 21 | `src/app/business-electricity-retrospective/high-voltage-2019-2025/page.tsx:162` | …高圧の年平均は2025年も21.1円/kWhと、2019年の… | 21.1 | 年度参照なし |
| 22 | `src/app/business-electricity-retrospective/high-voltage-2019-2025/page.tsx:162` | …1円/kWhと、2019年の16.1円/kWhには戻っていませ… | 16.1 | 年度参照なし |
| 23 | `src/app/business-electricity-retrospective/low-voltage-lighting-2019-2025/page.tsx:163` | …圧電灯の年平均は2025年も26.9円/kWhとコロナ前比+1… | 26.9 | 年度参照なし |
| 24 | `src/app/business-electricity-retrospective/low-voltage-power-2019-2025/page.tsx:161` | …圧電力の年平均は2025年も30.2円/kWhとコロナ前比+1… | 30.2 | 年度参照なし |
| 25 | `src/app/business-electricity-retrospective/special-high-voltage-2019-2025/page.tsx:165` | …ましたが、2025年の年平均17.4円/kWhはコロナ前比で+… | 17.4 | 年度参照なし |
| 26 | `src/app/business-electricity-retrospective/ukraine-shock-by-voltage-class/page.tsx:289` | …大規模工場では、賦課金単価の1円/kWhの変動が年間数千… | 1 | 年度参照なし |
| 27 | `src/app/capacity-contribution-history/page.tsx:127` | …itPrice2024: "3.49円/kWh", | 3.49 | 年度参照なし |
| 28 | `src/app/capacity-contribution-simulation/page.tsx:380` | …<strong>合算約5円/kWh</strong… | 5 | 同一文に年度参照なし(窓内に年度あり) |
| 29 | `src/app/fixed-price-plan/page.tsx:150` | …unitPrice: "3.49円/kWh", | 3.49 | 年度参照なし |
| 30 | `src/app/hidden-electricity-price-increases/page.tsx:129` | …base2019: "2.95円/kWh", | 2.95 | 年度参照なし |
| 31 | `src/app/hidden-electricity-price-increases/page.tsx:130` | …change2022: "3.45円/kWh", | 3.45 | 年度参照なし |
| 32 | `src/app/hidden-electricity-price-increases/page.tsx:460` | …す。2012年の制度開始時は0.22円/kWhでしたが、 | 0.22 | 年度参照なし |
| 33 | `src/app/how-to-read-electricity-bill/page.tsx:72` | …組みです。2026 年度は 4.06 円/kWh で、月額 4… | 4.06 | 年度参照なし |
| 34 | `src/app/international-electricity-price-comparison/page.tsx:427` | …i>・日本の産業用電気料金（22円/kWh）は、米国・韓国… | 22 | 年度参照なし |
| 35 | `src/app/ir-disclosure-electricity-risk/page.tsx:100` | "『電力単価±5円/kWhの変動が年間営業… | 5 | 年度参照なし |
| 36 | `src/app/ir-disclosure-electricity-risk/page.tsx:100` | …。再エネ賦課金が2030年に5円/kWhに上昇した場合の… | 5 | 年度参照なし |
| 37 | `src/app/ir-disclosure-electricity-risk/page.tsx:250` | …nswer: "『電力単価±5円/kWhの変動が年間営業… | 5 | 年度参照なし |
| 38 | `src/app/ir-disclosure-electricity-risk/page.tsx:250` | …。再エネ賦課金が2030年に5円/kWhに上昇した場合の… | 5 | 年度参照なし |
| 39 | `src/app/ir-disclosure-electricity-risk/page.tsx:549` | …ription="電力単価±5円/kWhの感度分析、再エ… | 5 | 年度参照なし |
| 40 | `src/app/manufacturing-cfo-electricity-strategy/page.tsx:254` | …再エネ賦課金上昇（2030年5円/kWh到達予測）など、… | 5 | 近傍年度(2026)と距離大・要目視 |
| 41 | `src/app/region-chubu-business-electricity/page.tsx:125` | …tent: "再エネ賦課金 3.49 円/kWh へ引き上げ。大… | 3.49 | 年度参照なし |
| 42 | `src/app/region-chugoku-business-electricity/page.tsx:127` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 43 | `src/app/region-hokkaido-business-electricity/page.tsx:112` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 44 | `src/app/region-hokuriku-business-electricity/page.tsx:134` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 45 | `src/app/region-kansai-business-electricity/page.tsx:144` | …tent: "再エネ賦課金 3.49 円/kWh への引き上げ。… | 3.49 | 年度参照なし |
| 46 | `src/app/region-kyushu-business-electricity/page.tsx:128` | …tent: "再エネ賦課金 3.49 円/kWh へ引き上げ。全… | 3.49 | 年度参照なし |
| 47 | `src/app/region-okinawa-business-electricity/page.tsx:124` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ。電… | 3.49 | 年度参照なし |
| 48 | `src/app/region-shikoku-business-electricity/page.tsx:127` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 49 | `src/app/region-tohoku-business-electricity/page.tsx:136` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 50 | `src/app/region-tokyo-business-electricity/page.tsx:144` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 51 | `src/app/renewable-energy-expansion-price-impact/page.tsx:102` | …unitPrice: "約16.8円/kWh", | 16.8 | 年度参照なし |
| 52 | `src/app/renewable-energy-expansion-price-impact/page.tsx:103` | …surcharge: "1.58円/kWh", | 1.58 | 年度参照なし |
| 53 | `src/app/renewable-energy-expansion-price-impact/page.tsx:109` | …unitPrice: "約18.3円/kWh", | 18.3 | 年度参照なし |
| 54 | `src/app/renewable-energy-expansion-price-impact/page.tsx:110` | …surcharge: "2.95円/kWh", | 2.95 | 年度参照なし |
| 55 | `src/app/renewable-energy-expansion-price-impact/page.tsx:116` | …unitPrice: "約26.5円/kWh", | 26.5 | 同一文に年度参照なし(窓内に年度あり) |
| 56 | `src/app/renewable-energy-expansion-price-impact/page.tsx:117` | …surcharge: "3.45円/kWh", | 3.45 | 年度参照なし |
| 57 | `src/app/renewable-energy-expansion-price-impact/page.tsx:124` | …surcharge: "3.49円/kWh", | 3.49 | 年度参照なし |
| 58 | `src/app/renewable-surcharge-reform-timeline/page.tsx:81` | …のFIT開始時の賦課金単価は0.22円/kWhでしたが、太陽光… | 0.22 | 年度参照なし |
| 59 | `src/app/renewable-surcharge-reform-timeline/page.tsx:81` | …入で急上昇し、2019年度に2.95円/kWhに達しました。高… | 2.95 | 年度参照なし |
| 60 | `src/app/review-contract-when-usage-changes/page.tsx:117` | …item: "再エネ賦課金（3.49円/kWh）", | 3.49 | 年度参照なし |
| 61 | `src/app/tariff-revision-calendar-2026/page.tsx:59` | …unitPrice: "4.18円/kWh（+0.20円）… | 4.18 | 年度参照なし |
| 62 | `src/app/tariff-revision-calendar-2026/page.tsx:260` | …<strong> 4.18円/kWh </stron… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 63 | `src/app/tariff-revision-calendar-2026/page.tsx:261` | 3.98円/kWh から | 3.98 | 同一文に年度参照なし(窓内に年度あり) |
| 64 | `src/app/tariff-revision-calendar-2026/page.tsx:265` | …します（500万kWh × 0.20円/kWh = 100万円… | 0.2 | 年度参照なし |
| 65 | `src/app/tariff-revision-calendar-2026/page.tsx:554` | 4.18円/kWh（+0.20円）… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 66 | `src/app/when-will-business-electricity-prices-drop/page.tsx:91` | …geEstimate: "▲2.09円/kWh", | 2.09 | 同一文に年度参照なし(窓内に年度あり) |
| 67 | `src/app/when-will-business-electricity-prices-drop/page.tsx:93` | …し、賦課金単価が3.45円→1.40円/kWhへ。2016年度… | 1.4 | 年度参照なし |
| 68 | `src/app/why-business-electricity-prices-rise/page.tsx:73` | …課金の上昇（2026 年度 4.06 円/kWh）、③容量拠出金… | 4.06 | 年度参照なし |
| 69 | `src/app/why-business-electricity-prices-rise/page.tsx:93` | …想されます。2024 年度 3.49 円/kWh → 2025… | 3.49 | 年度参照なし |
| 70 | `src/app/why-business-electricity-prices-rise/page.tsx:93` | …kWh → 2025 年度 3.98 円/kWh → 2026… | 3.98 | 年度参照なし |
| 71 | `src/app/why-business-electricity-prices-rise/page.tsx:93` | …kWh → 2026 年度 4.06 円/kWh と上昇しており… | 4.06 | 年度参照なし |
| 72 | `src/data/marketDataFaq.ts:9` | …2022が最も高く、年度平均20.41円/kWhを記録しました。… | 20.41 | 年度参照なし |
| 73 | `src/lib/industryOfficePublicArticles.ts:91` | …中です。使用量が大きいため、1円/kWhの変動が月数十万… | 1 | 同一文に年度参照なし(窓内に年度あり) |
| 74 | `src/lib/regulationTimelineData.ts:128` | …mmary: "賦課金単価が3.98円/kWhと過去最高を更新… | 3.98 | 年度参照なし |

## 参照: SSOT 確定値

| 年度 | 単価(円/kWh) |
|---|---|
| 2012年度 | 0.22 |
| 2013年度 | 0.35 |
| 2014年度 | 0.75 |
| 2015年度 | 1.58 |
| 2016年度 | 2.25 |
| 2017年度 | 2.64 |
| 2018年度 | 2.9 |
| 2019年度 | 2.95 |
| 2020年度 | 2.98 |
| 2021年度 | 3.36 |
| 2022年度 | 3.45 |
| 2023年度 | 1.4 |
| 2024年度 | 3.49 |
| 2025年度 | 3.98 |
| 2026年度 | 4.18 |
