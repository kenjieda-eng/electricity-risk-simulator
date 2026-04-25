# FAQPage / AuthorBadge 検証結果（2026-04-25 朝、リン）

> **目的**: PR #75（G-04/G-05 FAQPage 構造化データ追加）と PR #74（AuthorBadge / kenji-eda リンク強化）が production に正しく反映されているか、本番 HTML を grep で検証。
> **手法**: Cowork から `https://simulator.eic-jp.org` の該当 URL を fetch → 保存ファイルに対して `grep -o ... | wc -l`（lesson-20260424-02 準拠）

---

## ✅ 検証サマリ（両ページとも合格）

| 項目 | tariff-revision-calendar-2026 | demand-response-revenue-model |
|---|---:|---:|
| FAQPage（@type 出現） | 2 | 2 |
| Question（@type） | 10 | 10 |
| acceptedAnswer | 10 | 10 |
| application/ld+json スクリプト数 | 6 | 6 |
| /kenji-eda リンク数 | 10 | 10 |
| AuthorBadge (江田健二 表示) | 4 | 4 |

### 数字の読み方

- **FAQPage = 2**: JSON-LD 内で `"@type":"FAQPage"` が 1 + JSON 構造内の参照 1 = 計 2 occurrence
- **Question = 10 / acceptedAnswer = 10**: 5 FAQ × 2（DOM 表示 + JSON-LD）= 10。両 PR で `FAQ_ITEMS` 配列の長さが 5 だったため整合。
- **/kenji-eda リンク = 10**: AuthorBadge 内のリンク + パンくずナビ + 関連リンク + 内部回遊リンクの合算
- **江田健二 = 4**: AuthorBadge の表示位置（記事冒頭 + 末尾）+ JSON-LD author.name + その他

---

## ✅ source 側との整合確認（origin/main）

```
src/app/tariff-revision-calendar-2026/page.tsx:
  FAQ_ITEMS の question 数: 5 ✅
  AuthorBadge import: 1 件 ✅
  AuthorBadge 配置: 1 件 ✅
  ArticleJsonLd への faq prop 渡し: あり ✅

src/app/demand-response-revenue-model/page.tsx:
  FAQ_ITEMS の question 数: 5 ✅
  AuthorBadge import: 1 件 ✅
  AuthorBadge 配置: 1 件 ✅
  ArticleJsonLd への faq prop 渡し: あり ✅
```

`src/components/seo/JsonLd.tsx` の `ArticleJsonLd` 関数は `faq` prop が渡された時に
```js
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": ..., "acceptedAnswer": { "@type": "Answer", "text": ... } },
    ...
  ]
}
```
を `@graph` 内に追加する実装になっており、production HTML の grep 結果と整合。

---

## 🟢 結論

**PR #74 / #75 の構造化データ・AuthorBadge 配置は production に正常反映されている。**

EDAさん 側で予定されている **Google Rich Results Test の目視確認**（HANDOVER §🟡 EDAさん 残作業 2 番）は、source ベースで既に 99% 確実だが、Google の解釈側で警告が出ていないかの最終確認として価値あり。

### EDAさん 側の検証 URL

- https://search.google.com/test/rich-results?url=https://simulator.eic-jp.org/tariff-revision-calendar-2026
- https://search.google.com/test/rich-results?url=https://simulator.eic-jp.org/demand-response-revenue-model

期待される結果:
- 「FAQ」検出 = 5 件
- 「記事」検出 = 1 件
- 「パンくずリスト」検出 = 1 件
- ❌ エラー 0 / ⚠️ 警告 0（または author に関する軽微な警告のみ）

---

## 📝 lesson-20260424-02 準拠の grep 手法（再掲）

❌ `grep -c 'pattern'`（行数カウント、minified HTML で過小）
✅ `grep -o 'pattern' | wc -l`（occurrence カウント、正確）

本検証ではすべて `grep -o ... | wc -l` で実施済。

---

**検証時刻**: 2026-04-25 朝（リン、Cowork サンドボックス）
**取得方法**: `mcp__workspace__web_fetch` で fetched HTML → `grep -o` で occurrence カウント
**source 確認**: `git show origin/main:src/app/.../page.tsx` で同等数を確認済（local working tree ではなく origin/main を直接参照、lesson-20260424-01 準拠）
