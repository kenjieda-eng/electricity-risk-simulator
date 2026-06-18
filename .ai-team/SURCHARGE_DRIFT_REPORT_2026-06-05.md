# 再エネ賦課金 プロース・ドリフト検出レポート（ベースライン）

- 生成: `scripts/check-surcharge-drift.mjs`（レポート専用 / 本体無変更）
- 基準日: 2026-06-05
- SSOT: `src/lib/data/renewableSurcharge.ts`（15年度）

## サマリ

- 走査ファイル数: 913
- 検出ファイル数: 45（不一致 0 / 年度不明 45）
- 検出総件数: 90（不一致 0 / 年度不明 90）

## 年度別内訳（不一致）

（不一致なし）

## 不一致 一覧（0件）

（なし）

## 年度不明・要目視 一覧（90件）

> 年度と確実に対にできなかった賦課金近傍の単価。SSOT比較ではなく人手確認が必要。

| # | file:line | 検出文字列 | 実値 | 備考 |
|---|---|---|---|---|
| 1 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:19` | …を完全ガイド。再エネ賦課金 4.18 円/kWh・容量拠出金 4… | 4.18 | 年度参照なし |
| 2 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:57` | …エネ賦課金（2026 年度 4.18 円/kWh）の試算と削減策… | 4.18 | 年度参照なし |
| 3 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:157` | …tion: "再エネ賦課金（4.18 円/kWh）は法人でも削減… | 4.18 | 年度参照なし |
| 4 | `src/app/business-electricity-cost-reduction-review-points/page.tsx:475` | …エネ賦課金（2026 年度 4.18 円/kWh）の試算と削減策 | 4.18 | 年度参照なし |
| 5 | `src/app/business-electricity-price-hike-reasons-2026/page.tsx:72` | fy2025: "約3.98円/kWh", | 3.98 | 年度参照なし |
| 6 | `src/app/business-electricity-retrospective/2026-03/page.tsx:161` | …はいえまだ残っており（低圧 1.50円/kWh、高圧 0.80… | 1.5 | 年度参照なし |
| 7 | `src/app/business-electricity-retrospective/2026-03/page.tsx:161` | …1.50円/kWh、高圧 0.80円/kWh）、JEPX も… | 0.8 | 年度参照なし |
| 8 | `src/app/business-electricity-retrospective/2026-03/page.tsx:274` | …賦課金は3月使用分まで旧単価3.98円/kWh が継続。5月使… | 3.98 | 年度参照なし |
| 9 | `src/app/business-electricity-retrospective/2026-03/page.tsx:274` | …Wh が継続。5月使用分から4.18円/kWh の新単価へ切り… | 4.18 | 年度参照なし |
| 10 | `src/app/business-electricity-retrospective/2026-03/page.tsx:501` | …厚い補助から低圧 4.50→1.50円/kWh、高圧 2.30… | 1.5 | 年度参照なし |
| 11 | `src/app/business-electricity-retrospective/2026-03/page.tsx:501` | …円/kWh、高圧 2.30→0.80円/kWh の段階的減額に… | 0.8 | 年度参照なし |
| 12 | `src/app/business-electricity-retrospective/2026-03/page.tsx:503` | …経産省告示で 5 月以降 4.18円/kWh 確定、過去最高… | 4.18 | 年度参照なし |
| 13 | `src/app/business-electricity-retrospective/2026-04/page.tsx:204` | …賦課金は4月使用分まで旧単価3.98円/kWh が継続しますが… | 3.98 | 年度参照なし |
| 14 | `src/app/business-electricity-retrospective/2026-04/page.tsx:204` | …経産省告示で5月使用分以降は4.18円/kWh（過去最高、+0… | 4.18 | 年度参照なし |
| 15 | `src/app/business-electricity-retrospective/2026-04/page.tsx:278` | …賦課金は4月使用分まで旧単価3.98円/kWh が継続。5月使… | 3.98 | 年度参照なし |
| 16 | `src/app/business-electricity-retrospective/2026-04/page.tsx:278` | …Wh が継続。5月使用分から4.18円/kWh の新単価へ切り… | 4.18 | 年度参照なし |
| 17 | `src/app/business-electricity-retrospective/2026-04/page.tsx:426` | …5月使用分から再エネ賦課金は4.18円/kWh（過去最高）に切… | 4.18 | 年度参照なし |
| 18 | `src/app/business-electricity-retrospective/2026-04/page.tsx:499` | …賦課金は4月使用分まで旧単価3.98円/kWh、5月使用分から… | 3.98 | 年度参照なし |
| 19 | `src/app/business-electricity-retrospective/2026-04/page.tsx:499` | …8円/kWh、5月使用分から4.18円/kWh の新単価に切り… | 4.18 | 年度参照なし |
| 20 | `src/app/business-electricity-retrospective/2026-04/page.tsx:506` | …<li>再エネ賦課金 4.18円/kWh 確定告知（5… | 4.18 | 年度参照なし |
| 21 | `src/app/business-electricity-retrospective/2026-05/page.tsx:152` | …請求）で再エネ賦課金が新単価4.18円/kWhに切り替わってい… | 4.18 | 年度参照なし |
| 22 | `src/app/business-electricity-retrospective/2026-05/page.tsx:230` | …再エネ賦課金新単価（確定値 4.18円/kWh、前年度比 +0… | 4.18 | 年度参照なし |
| 23 | `src/app/business-electricity-retrospective/2026-05/page.tsx:249` | …再エネ賦課金新単価（確定値 4.18円/kWh）が初めて全使用… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 24 | `src/app/business-electricity-retrospective/2026-05/page.tsx:271` | …te-600">3.98円→4.18円/kWh（確定値、+0.… | 4.18 | 年度参照なし |
| 25 | `src/app/business-electricity-retrospective/2026-05/page.tsx:317` | …26年5月使用分の高圧は約 21.7円/kWh（推計）、前月比… | 21.7 | 年度参照なし |
| 26 | `src/app/business-electricity-retrospective/high-voltage-2019-2025/page.tsx:162` | …高圧の年平均は2025年も21.1円/kWhと、2019年の… | 21.1 | 年度参照なし |
| 27 | `src/app/business-electricity-retrospective/high-voltage-2019-2025/page.tsx:162` | …1円/kWhと、2019年の16.1円/kWhには戻っていませ… | 16.1 | 年度参照なし |
| 28 | `src/app/business-electricity-retrospective/low-voltage-lighting-2019-2025/page.tsx:163` | …圧電灯の年平均は2025年も26.9円/kWhとコロナ前比+1… | 26.9 | 年度参照なし |
| 29 | `src/app/business-electricity-retrospective/low-voltage-lighting-2019-2025/page.tsx:174` | …19年の低圧電灯は、年平均で22.7円/kWhでした。月別では… | 22.7 | 年度参照なし |
| 30 | `src/app/business-electricity-retrospective/low-voltage-power-2019-2025/page.tsx:161` | …圧電力の年平均は2025年も30.2円/kWhとコロナ前比+1… | 30.2 | 年度参照なし |
| 31 | `src/app/business-electricity-retrospective/low-voltage-power-2019-2025/page.tsx:172` | …19年の低圧電力は、年平均で26.3円/kWhでした。月別では… | 26.3 | 年度参照なし |
| 32 | `src/app/business-electricity-retrospective/low-voltage-power-2019-2025/page.tsx:174` | …再エネ賦課金は2.95円/kWhと上昇中だったも… | 2.95 | 年度参照なし |
| 33 | `src/app/business-electricity-retrospective/special-high-voltage-2019-2025/page.tsx:165` | …ましたが、2025年の年平均17.4円/kWhはコロナ前比で+… | 17.4 | 年度参照なし |
| 34 | `src/app/business-electricity-retrospective/ukraine-shock-by-voltage-class/page.tsx:289` | …大規模工場では、賦課金単価の1円/kWhの変動が年間数千… | 1 | 年度参照なし |
| 35 | `src/app/capacity-contribution-history/page.tsx:127` | …itPrice2024: "3.49円/kWh", | 3.49 | 年度参照なし |
| 36 | `src/app/capacity-contribution-simulation/page.tsx:380` | …<strong>合算約5.3円/kWh</strong… | 5.3 | 同一文に年度参照なし(窓内に年度あり) |
| 37 | `src/app/cfo-electricity-cost-basics/page.tsx:297` | …question: "電気代1円/kWhの変動は経営にど… | 1 | 年度参照なし |
| 38 | `src/app/cfo-electricity-cost-basics/page.tsx:297` | …Wh/年の中堅製造業の場合、1円/kWhの電気代変動はE… | 1 | 年度参照なし |
| 39 | `src/app/extra-high-voltage-quotation-guide/page.tsx:311` | …,400円/kW、電力量料金14.5円/kWh、力率割引0.9… | 14.5 | 年度参照なし |
| 40 | `src/app/fixed-price-plan/page.tsx:150` | …unitPrice: "3.49円/kWh", | 3.49 | 年度参照なし |
| 41 | `src/app/hidden-electricity-price-increases/page.tsx:129` | …base2019: "2.95円/kWh", | 2.95 | 年度参照なし |
| 42 | `src/app/hidden-electricity-price-increases/page.tsx:130` | …change2022: "3.45円/kWh", | 3.45 | 年度参照なし |
| 43 | `src/app/hidden-electricity-price-increases/page.tsx:460` | …す。2012年の制度開始時は0.22円/kWhでしたが、 | 0.22 | 年度参照なし |
| 44 | `src/app/how-to-read-electricity-bill/page.tsx:72` | …組みです。2026 年度は 4.06 円/kWh で、月額 4… | 4.06 | 年度参照なし |
| 45 | `src/app/international-electricity-price-comparison/page.tsx:427` | …i>・日本の産業用電気料金（22円/kWh）は、米国・韓国… | 22 | 年度参照なし |
| 46 | `src/app/ir-disclosure-electricity-risk/page.tsx:90` | …トへの影響が大きく、電力単価1円/kWh上昇時の年間追加… | 1 | 年度参照なし |
| 47 | `src/app/ir-disclosure-electricity-risk/page.tsx:100` | …。再エネ賦課金が2030年に5円/kWhに上昇した場合の… | 5 | 年度参照なし |
| 48 | `src/app/ir-disclosure-electricity-risk/page.tsx:250` | …。再エネ賦課金が2030年に5円/kWhに上昇した場合の… | 5 | 年度参照なし |
| 49 | `src/app/last-resort-supply-price/page.tsx:236` | …※ 通常契約は電力量料金約18円/kWh、最終保障供給は… | 18 | 年度参照なし |
| 50 | `src/app/last-resort-supply-price/page.tsx:236` | …円/kWh、最終保障供給は約26円/kWhで概算。基本料金… | 26 | 年度参照なし |
| 51 | `src/app/manufacturing-cfo-electricity-strategy/page.tsx:254` | …再エネ賦課金上昇（2030年5円/kWh到達予測）など、… | 5 | 近傍年度(2026)と距離大・要目視 |
| 52 | `src/app/region-chubu-business-electricity/page.tsx:125` | …tent: "再エネ賦課金 3.49 円/kWh へ引き上げ。大… | 3.49 | 年度参照なし |
| 53 | `src/app/region-chugoku-business-electricity/page.tsx:128` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 54 | `src/app/region-hokkaido-business-electricity/page.tsx:112` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 55 | `src/app/region-hokuriku-business-electricity/page.tsx:135` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 56 | `src/app/region-kansai-business-electricity/page.tsx:145` | …tent: "再エネ賦課金 3.49 円/kWh への引き上げ。… | 3.49 | 年度参照なし |
| 57 | `src/app/region-kyushu-business-electricity/page.tsx:128` | …tent: "再エネ賦課金 3.49 円/kWh へ引き上げ。全… | 3.49 | 年度参照なし |
| 58 | `src/app/region-okinawa-business-electricity/page.tsx:125` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ。電… | 3.49 | 年度参照なし |
| 59 | `src/app/region-shikoku-business-electricity/page.tsx:128` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 60 | `src/app/region-tohoku-business-electricity/page.tsx:137` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 61 | `src/app/region-tokyo-business-electricity/page.tsx:145` | …ent: "再エネ賦課金が 3.49 円/kWh に引き上げ（前… | 3.49 | 年度参照なし |
| 62 | `src/app/renewable-energy-expansion-price-impact/page.tsx:102` | …unitPrice: "約16.8円/kWh", | 16.8 | 同一文に年度参照なし(窓内に年度あり) |
| 63 | `src/app/renewable-energy-expansion-price-impact/page.tsx:103` | …surcharge: "1.58円/kWh", | 1.58 | 年度参照なし |
| 64 | `src/app/renewable-energy-expansion-price-impact/page.tsx:109` | …unitPrice: "約18.3円/kWh", | 18.3 | 同一文に年度参照なし(窓内に年度あり) |
| 65 | `src/app/renewable-energy-expansion-price-impact/page.tsx:110` | …surcharge: "2.95円/kWh", | 2.95 | 年度参照なし |
| 66 | `src/app/renewable-energy-expansion-price-impact/page.tsx:116` | …unitPrice: "約26.5円/kWh", | 26.5 | 同一文に年度参照なし(窓内に年度あり) |
| 67 | `src/app/renewable-energy-expansion-price-impact/page.tsx:117` | …surcharge: "3.45円/kWh", | 3.45 | 年度参照なし |
| 68 | `src/app/renewable-energy-expansion-price-impact/page.tsx:124` | …surcharge: "3.49円/kWh", | 3.49 | 年度参照なし |
| 69 | `src/app/renewable-energy-surcharge/page.tsx:27` | …5月検針開始】再エネ賦課金は4.18円/kWh（前年度+0.2… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 70 | `src/app/renewable-surcharge-reform-timeline/page.tsx:81` | …のFIT開始時の賦課金単価は0.22円/kWhでしたが、太陽光… | 0.22 | 近傍年度(2019)と距離大・要目視 |
| 71 | `src/app/review-contract-when-usage-changes/page.tsx:117` | …item: "再エネ賦課金（3.49円/kWh）", | 3.49 | 年度参照なし |
| 72 | `src/app/summer-market-linked-plan-risk/page.tsx:404` | …<li>④ 賦課金4.18円/kWh・調整額を加算し… | 4.18 | 年度参照なし |
| 73 | `src/app/summer-market-linked-plan-risk/page.tsx:536` | …<li>賦課金4.18円/kWh・調整額を含む年… | 4.18 | 年度参照なし |
| 74 | `src/app/tariff-revision-calendar-2026/page.tsx:59` | …unitPrice: "4.18円/kWh（+0.20円）… | 4.18 | 年度参照なし |
| 75 | `src/app/tariff-revision-calendar-2026/page.tsx:260` | …<strong> 4.18円/kWh </stron… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 76 | `src/app/tariff-revision-calendar-2026/page.tsx:261` | 3.98円/kWh から | 3.98 | 同一文に年度参照なし(窓内に年度あり) |
| 77 | `src/app/tariff-revision-calendar-2026/page.tsx:265` | …します（500万kWh × 0.20円/kWh = 100万円… | 0.2 | 年度参照なし |
| 78 | `src/app/tariff-revision-calendar-2026/page.tsx:554` | 4.18円/kWh（+0.20円）… | 4.18 | 同一文に年度参照なし(窓内に年度あり) |
| 79 | `src/app/when-will-business-electricity-prices-drop/page.tsx:91` | …geEstimate: "▲2.09円/kWh", | 2.09 | 同一文に年度参照なし(窓内に年度あり) |
| 80 | `src/app/when-will-business-electricity-prices-drop/page.tsx:93` | …し、賦課金単価が3.45円→1.40円/kWhへ。2016年度… | 1.4 | 同一文に年度参照なし(窓内に年度あり) |
| 81 | `src/app/why-business-electricity-prices-rise/page.tsx:73` | …課金の上昇（2026 年度 4.06 円/kWh）、③容量拠出金… | 4.06 | 年度参照なし |
| 82 | `src/app/why-business-electricity-prices-rise/page.tsx:93` | …想されます。2024 年度 3.49 円/kWh → 2025… | 3.49 | 年度参照なし |
| 83 | `src/app/why-business-electricity-prices-rise/page.tsx:93` | …kWh → 2025 年度 3.98 円/kWh → 2026… | 3.98 | 年度参照なし |
| 84 | `src/app/why-business-electricity-prices-rise/page.tsx:93` | …kWh → 2026 年度 4.06 円/kWh と上昇しており… | 4.06 | 年度参照なし |
| 85 | `src/data/articles.ts:2054` | …を完全ガイド。再エネ賦課金 4.18 円/kWh・容量拠出金 4… | 4.18 | 年度参照なし |
| 86 | `src/data/categoryFaq.ts:17` | …上昇傾向で、2030年度には4円/kWh超の可能性があり… | 4 | SSOT未収録年度(2030) |
| 87 | `src/data/marketDataFaq.ts:9` | …2022が最も高く、年度平均20.41円/kWhを記録しました。… | 20.41 | 年度参照なし |
| 88 | `src/lib/industryCommercialArticles.ts:123` | …百貨店は使用量が大きいため、1円/kWhの変動でも月数十… | 1 | 同一文に年度参照なし(窓内に年度あり) |
| 89 | `src/lib/industryOfficePublicArticles.ts:91` | …中です。使用量が大きいため、1円/kWhの変動が月数十万… | 1 | 同一文に年度参照なし(窓内に年度あり) |
| 90 | `src/lib/regulationTimelineData.ts:128` | …mmary: "賦課金単価が3.98円/kWhと過去最高を更新… | 3.98 | 年度参照なし |

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
