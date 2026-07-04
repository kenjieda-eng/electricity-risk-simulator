# 第5回フル計測（早期シグナル）スキャフォールド — 2026-07-05

作成: 2026-07-04 リン ／ 記入: 2026-07-05（GA4/GSCの数字を貼るだけ）
位置づけ: **早期シグナル**。本判定は7/30。索引・順位は施策から7〜14日ラグがあるため、**まだ動かない項目がある前提**で読む。

---

## 0. 判定ルール（再掲）
- 索引率の単週低下＝ノイズ＝無視。**登録絶対数が3-4週連続で頭打ち**なら初めて警戒。
- CTRは順位が動かなくても改善しうる（メタ最適化の即効）。
- CV系は cta_click(from別) と Supabase実測(相談) を突合。

---

## A. CV / 相談（最重要）

| 指標 | before(6/2–6/29) | 7/5(after) | メモ |
|---|---|---|---|
| 総表示 / ユーザー | 22,546 / 14,192（≈507/日） | ______ / ______ | |
| contact到達 | 108表示 / **35ユーザー**（0.25%） | ______ / ______ | 目標(7/30)×10=350 |
| 相談CV（実数） | **1–5件/日**（Supabase） | ______ /日 | 真のCV |
| cta_click 総数 | ______（6月分をGA4イベント数で取得） | ______ | 橋渡し |
| GA4キーイベント | **0**（7/2設定済） | ______ | 7/2以降の蓄積 |
| Supabase補正率 | — | 実受信 ÷ contact_form_submitted = ______ | baseline化 |

### cta_click の from別内訳（7/2以降・ここが肝）
| from | 7/5 クリック数 | 備考 |
|---|---|---|
| sticky | ______ | 全ページ追従バー |
| simulate | ______ | /simulate 結果 |
| compare | ______ | /compare 結果 |
| scenario | ______ | /electricity-scenario-simulation |
| home | ______ | トップ |
※ カスタムディメンション`cta_from`が反映済みか（7/2+24-48h）を先に確認。

---

## B. 索引（SEO土台）

| 指標 | before | 7/5(after) | メモ |
|---|---|---|---|
| 索引率 | **52.6%**（索引726 / 未索引653） | ______%（___ / ___） | 目標(Q3末)70% |
| クロール済-未登録 | 627（JS資産406 + 実コンテンツ221） | ______ | 実221が対象 |
| 孤立16本(#273) | 未索引 | 索引された数 ___ /16 | 内部リンク付与の効果 |
| noindex解除6本(#275) | 解除直後 | 索引された数 ___ /6 | |
| #6② industry-review 25本 | 転換1（convenience-store）※ラグ未達 | 転換 ___ /25 | 今回が本来の観察適期 |

対象noindex解除6本: cultural-facility-electricity-cost-review / subsidy-battery-solar-equipment / executive-electricity-kpi-dashboard / executive-board-reporting-items / executive-esg-electricity-disclosure / about-this-site

---

## C. P2 CTR 12本（#272・6/27書換）— before→after

| # | slug | before CTR | before 順位 | 7/5 CTR | 7/5 順位 |
|---|---|---|---|---|---|
| 1 | datacenter-electricity-demand-surge | | | | |
| 2 | electricity-double-billing-faq | | | | |
| 3 | electricity-expense-accounting | | | | |
| 4 | electricity-rate-revision-mechanism | | | | |
| 5 | emergency-billing-dispute | | | | |
| 6 | ev-charging-glossary | 0.13% | 4.33 | | |
| 7 | international-electricity-price-comparison | | | | |
| 8 | nuclear-power-and-electricity-price | | | | |
| 9 | renewable-energy-surcharge-2026 | 0% | 8.93 | | |
| 10 | supply-point-id-explained | 0.86% | 9.73 | | |
| 11 | what-is-capacity-contribution | | | | |
| 12 | why-business-electricity-prices-rise | | | | |
※ before空欄はGSCの6/27前後値を貼る。CTR改善が本施策の狙い。

---

## D. 今回のTOP30施策（PR#278 M / PR#279 L）— 早期観測（ラグ前提・参考）

### M メタ最適化 4本（PR#278・7/2反映）
| slug | before 順位 | before CTR | 7/5 順位 | 7/5 CTR |
|---|---|---|---|---|
| special/materials-packaging-scenario-analysis | 9.74 | 0.12% | | |
| ev-vs-gasoline-fleet-cost | 9.54 | 0.53% | | |
| shizuoka-business-electricity-cost | 9.43 | 0.61% | | |
| tochigi-business-electricity-cost | 10.51 | 0.49% | | |

### L 内部リンク+拡充 4本（PR#279・7/4反映）
| slug | before 順位 | before CTR | 被リンク(前→後) | 7/5 順位 | 7/5 CTR |
|---|---|---|---|---|---|
| electricity-vs-gas-price-trend | 10.73 | 4.26% | 1→5 | | |
| reduce-cost-without-switching | 12.94 | 0.14% | 3→7 | | |
| sme-electricity-basics | 16.44 | 0.26% | 8→11 | | |
| factory-electricity-cost-reduction | 24.8 | 0.24% | 51(拡充のみ) | | |
※ 内部リンクの索引・順位効果は7〜14日ラグ。7/5は「悪化していない」確認が主眼、本効果は7/30。

---

## E. GSC全体

| 指標 | before | 7/5(after) |
|---|---|---|
| 表示（3か月） | 247,113 | ______ |
| クリック（3か月） | 5,527 | ______ |
| CTR | 2.24% | ______% |
| 中央順位 | 8.2 | ______ |
| （28日）表示/日・クリック/日 | ≈507 / （直近7日は増加傾向） | ______ / ______ |

---

## F. 判定メモ（7/5記入）
- CV：cta_clickが出ているか／from別でどの面が反応しているか（早くもsticky優位か等）。
- 索引：孤立16・noindex6の転換有無。#6② 25本の転換率（前回1本→今回）。
- CTR：P2 12本・M4本でCTRが動き始めたか（順位据置でも改善しうる）。
- L4本：悪化なしを確認（本効果は7/30）。
- 総合：頭打ちシグナルの有無 → 量産第3弾の再開可否メモ。

---

## 次アクション（7/5当日）
1. 江田さん：GA4（キーイベント/from別）＋GSC（Pages・Queries）を開く。
2. リン：上表に貼り付け→before→after差分を即出力＋所見。
3. 記録：`.ai-team/` に第5回計測結果として保存（Windows commit）。
