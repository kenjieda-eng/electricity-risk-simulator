# /contact 作り直し（サイト内フォーム新設）設計書（2026-09-05）

対象: `https://simulator.eic-jp.org/contact`
本書は設計調査の成果物であり、コード変更は含まない。Supabase・Vercel・GA4 の設定も一切変更していない。外部サイトは GET 閲覧のみで、**フォーム送信は行っていない**。

## 江田さんの決定（9/5・前提として扱う）

1. 受信 = **メール通知 ＋ Supabase 保存**の両方
2. 項目 = **必須4**（種別 / 会社・団体名 / メールアドレス / ご相談内容）＋ **任意2**（お名前 / 電話）
3. 個人情報 = **eic-jp.org の既存プライバシーポリシーへリンク**

前提への変更提案は本書の「■ 論点」節に分離してある。**前提2・3については、そのままでは実行できない実測が出たため、論点の冒頭2件を先に読んでほしい。**

---

## ■ 1. 現状の確定

### 1-1. ページ構造（`src/app/contact/page.tsx` 実測・2026-09-05）

全543行。`<h1>` は **L310**、フォーム入口 `id="inquiry-type-selector"` は **L503**。

H1 とフォーム入口の間にあるセクションは **6本**:

| # | 行 | 見出し |
|---|---:|---|
| 1 | L325 | 私たちがお応えできること（6項目） |
| 2 | L350 | こんな方からのご相談を歓迎しています |
| 3 | L375 | 私たちの立場と、ご相談の姿勢について |
| 4 | L398 | 選ばれる3つの理由（2,000社以上の支援実績 ほか） |
| 5 | L423 | ご相談の流れ |
| 6 | L473 | このままご相談いただけます。先に無料診断を試すこともできます |

可視テキストの概算文字数（記号・空白を除去して計数）:

| 区間 | 文字数 | 比率 |
|---|---:|---:|
| H1 〜 フォーム入口の直前 | 1,623 | **89.6%** |
| フォーム入口以降 | 189 | 10.4% |

なお `#inquiry-type-selector` より前には、条件付きの文脈バナー（L221-282・診断結果の引き継ぎ）と信頼バナー（L284-304）もある。**信頼3点（3営業日以内 / 第三者への提供は一切ありません / 営業電話は一切いたしません）は既に最上部に実在する**（L292 / L296 / L300）。

### 1-2. ファーストビュー（本番・実測 2026-09-05）

`https://simulator.eic-jp.org/contact`（クエリなし）を実ブラウザで測定。GA へ余分なイベントを送らないため、読み込み直後に `window.gtag` をレコーダへ差し替えてから測定した（捕捉0件）。

| 画面 | 文書高 | H1 の位置 | フォーム入口の位置 | ファーストビュー何画面ぶん下 | 文書内の位置 |
|---|---:|---:|---:|---:|---:|
| 1440×900 | 6,205px | 292px | **2,857px** | **3.17画面** | 46.0% |
| 390×844 | 11,611px | 563px | **5,330px** | **6.32画面** | 45.9% |

ファーストビューに入る要素:

- **1440×900**: グローバルナビ10件（TOP / リスク診断 / 料金比較 / シナリオ試算 / 解説記事 / 業種別ガイド / 特集 / 振り返り / 相談する / ✉お問い合わせ・ご相談）＋ H1 ＋ H2「私たちがお応えできること」＋ H3 2本（電気料金の値上げ通知への対応 / 契約メニューの見直し・切り替え）
- **390×844**: グローバルナビ10件 ＋ 信頼バナー3点 ＋ H1 のみ（H2 以降は画面外）

**どちらの画面幅でも、フォーム入口はファーストビューに入らない。**

> ★紛らわしいので明記する。上表の「3.17画面」と、9/1調査の Stage A' の「3.17%」は**別物**。数値の一致は偶然である。

### 1-3. Step1〜3 の構造（`_components/InquiryTypeSelector.tsx` 実測）

| Step | 内容 |
|---|---|
| Step 1 | お問い合わせ種別を4択で選ぶ（料金見直し相談 / シミュレーター技術質問 / 講演・セミナー依頼 / その他のご相談）。選択時に `contact_type_selected` を送信 |
| Step 2 | 選択した種別のヒントと記入例を表示（**選択時のみ表示**） |
| Step 3 | 外部フォームを開くリンク。クリック時に `contact_form_submitted` を送信 |

外部フォームURL: `EXTERNAL_FORM_BASE = "https://eic-jp.org/contact"`、構築は `` `${EXTERNAL_FORM_BASE}?category=${encodeURIComponent(selected.externalFormParam)}` ``。
`category` の値は `rate-review` / `tech-question` / `lecture-request` / `other` の4種。
リンクは **`target="_blank"` / `rel="noopener noreferrer"`**。

### 1-4. 現状の数値（9/1調査の確定値のみを転記。新しい推定値は作らない）

| 指標 | 値 |
|---|---|
| Stage A'（CTA可視 → /contact 到達） | 3.17% |
| Stage B（/contact 到達 → 外部フォームを開く） | 3.33% |
| /contact のセッション | 2.1 セッション/日 |
| 2026-08 のカード系到達 | 8 |
| 2026-08 の sticky 到達 | 51 |
| 2026-08 の `contact_form_submitted` | 2 件 |

---

## ■ 2. 技術調査

### 2-a. Supabase の現状と `contact_inquiries` 設計

#### 現状（リポジトリ実測 2026-09-05）

| 項目 | 実測 |
|---|---|
| `src/lib/supabase.ts` | `createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)` をモジュール直下で1回生成。**`import "server-only"` は付いていない** |
| `src/lib/supabase/adminServerClient.ts` | `import "server-only"` 付き。`SUPABASE_SERVICE_ROLE_KEY ?? NEXT_PUBLIC_SUPABASE_ANON_KEY` の順で鍵を選び、**service role キーが無ければ黙って anon へフォールバックする** |
| `createAdminServerClient()` の利用 | 2箇所のみ・いずれも読み取り（`admin/simulation-results/page.tsx:131` / `[id]/page.tsx:177`）。**service role での書き込みは現時点でゼロ** |
| 書き込み（insert）の全件 | **3箇所すべて anon クライアント経由**（`api/simulation-results/route.ts:186`・同`:206`・`api/scenario-simulation-results/route.ts:116`）。update / upsert / delete は0件 |

> 🔴 **現状のリスク（本件とは別に記録）**: `supabase-risk-score-and-select-policy.sql`（コミット `22e9cd09`）は `simulation_results` に RLS を有効化したうえで `anon` へ select と insert を開放している。anon キーは設計上ブラウザに出る鍵なので、これが本番に適用済みなら第三者が Supabase REST API 経由で同テーブルを全件 select ／ 任意行 insert できる。ヘッダー統計（`/api/simulation-results/average`）はこのテーブルを直接集計している。**本件の意思決定には影響しないが、別途の判断が要る。**

#### 方針

`contact_inquiries` は氏名・メール・電話・相談本文を持つため、**`simulation_results` の「anon に開放する」型は踏襲しない**。

- Route Handler が **service role でのみ insert**。クライアントへ鍵を露出しない
- RLS 有効化 ＋ anon / authenticated 向けポリシーを**1つも作らない**（＝全拒否）
- Supabase の既存プロジェクトでは新規テーブルに anon / authenticated の既定 GRANT が付くため、**`revoke` も併せて実行**する
- 既存の `createAdminServerClient()` は service role キーが無いと anon へフォールバックするため、**フォールバックしない専用クライアント `src/lib/supabase/serviceRoleClient.ts` を新設**し、鍵が無ければ明示的に throw させる
- 生IPは保存しない。`HMAC-SHA256(CONTACT_IP_HASH_SALT, x-forwarded-for の先頭IP)` の16進64桁のみを持つ

#### テーブル定義（**実行はしていない**。Supabase SQL Editor で江田さんが適用）

```sql
-- 適用場所: Supabase Dashboard → SQL Editor（本番プロジェクト）
-- 適用者  : 江田さん  ※本調査では実行していない
-- 冪等性  : if not exists / pg_policies 存在チェックで保護。再実行して安全。

create table if not exists public.contact_inquiries (
  id          uuid        primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  -- ===== 必須4項目 =====
  inquiry_type text not null
    constraint contact_inquiries_inquiry_type_chk
    check (inquiry_type in ('rate-review', 'tech-question', 'lecture-request', 'other')),
  company_name text not null
    constraint contact_inquiries_company_name_chk check (char_length(company_name) between 1 and 200),
  email text not null
    constraint contact_inquiries_email_len_chk   check (char_length(email) between 5 and 254)
    constraint contact_inquiries_email_shape_chk check (email ~ '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'),
  message text not null
    constraint contact_inquiries_message_chk check (char_length(message) between 10 and 5000),

  -- ===== 任意2項目（NULL のとき CHECK は NULL を返し通過する） =====
  name  text constraint contact_inquiries_name_chk  check (char_length(name)  <= 100),
  phone text constraint contact_inquiries_phone_chk check (char_length(phone) <= 30),

  -- ===== 送信元コンテキスト（GA4 の語彙と揃える） =====
  cta_from   text constraint contact_inquiries_cta_from_chk   check (char_length(cta_from)   <= 64),
  variant    text constraint contact_inquiries_variant_chk    check (char_length(variant)    <= 32),
  page_path  text constraint contact_inquiries_page_path_chk  check (char_length(page_path)  <= 512),
  user_agent text constraint contact_inquiries_user_agent_chk check (char_length(user_agent) <= 512),
  ip_hash    text constraint contact_inquiries_ip_hash_chk    check (ip_hash ~ '^[0-9a-f]{64}$'),

  -- ===== 診断コンテキスト（/contact のクエリ由来・すべて任意） =====
  risk_label    text     constraint contact_inquiries_risk_label_chk    check (char_length(risk_label) <= 32),
  risk_score    smallint constraint contact_inquiries_risk_score_chk    check (risk_score between 0 and 100),
  contract_type text     constraint contact_inquiries_contract_type_chk check (contract_type in ('low', 'high', 'special')),
  region        text     constraint contact_inquiries_region_chk        check (char_length(region) <= 32),

  -- ===== 運用 =====
  status text not null default 'new'
    constraint contact_inquiries_status_chk
    check (status in ('new', 'in_progress', 'replied', 'closed', 'spam'))
);

comment on table public.contact_inquiries is
  'サイト内お問い合わせフォームの受信箱。書き込みは Route Handler が service_role で行う。anon / authenticated からは到達不可。';
comment on column public.contact_inquiries.ip_hash is
  '生IPではなく HMAC-SHA256(CONTACT_IP_HASH_SALT, x-forwarded-for の先頭IP) の16進表現。ソルトを変更すると過去分と突合できなくなる。';

-- 既定 GRANT の剥奪（RLS だけに頼らず GRANT の層でも塞ぐ）
revoke all on table public.contact_inquiries from anon;
revoke all on table public.contact_inquiries from authenticated;
revoke all on table public.contact_inquiries from public;
grant select, insert, update on table public.contact_inquiries to service_role;

-- RLS 有効化（anon / authenticated 向けポリシーを作らない＝全拒否）
alter table public.contact_inquiries enable row level security;

-- ポリシー（service_role のみ。BYPASSRLS でも通るが pg_policies から読めるよう明示する）
do $$
begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='contact_inquiries'
                 and policyname='contact_inquiries service_role insert') then
    create policy "contact_inquiries service_role insert"
      on public.contact_inquiries for insert to service_role with check (true);
  end if;
end $$;

do $$
begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='contact_inquiries'
                 and policyname='contact_inquiries service_role select') then
    create policy "contact_inquiries service_role select"
      on public.contact_inquiries for select to service_role using (true);
  end if;
end $$;

do $$
begin
  if not exists (select 1 from pg_policies where schemaname='public' and tablename='contact_inquiries'
                 and policyname='contact_inquiries service_role update') then
    create policy "contact_inquiries service_role update"
      on public.contact_inquiries for update to service_role using (true) with check (true);
  end if;
end $$;

-- インデックス
create index if not exists contact_inquiries_created_at_desc_idx
  on public.contact_inquiries (created_at desc);
create index if not exists contact_inquiries_status_created_at_idx
  on public.contact_inquiries (status, created_at desc);
create index if not exists contact_inquiries_ip_hash_created_at_idx
  on public.contact_inquiries (ip_hash, created_at desc) where ip_hash is not null;
```

### 2-b. Route Handler の既存規約と `POST /api/contact` 仕様案

#### 既存規約（`src/app/api` 全件の実測）

| 観点 | 実測 |
|---|---|
| レスポンス生成 | **2系統に割れている**。読み取り専用の公開API（datasets 21 / downloads 6 / market-data 2 / rag-index）は `NextResponse.json`、**書き込み系・Supabase参照系（simulation-results 3 / scenario-simulation-results 1）は素の `Response.json`** |
| segment config | `export const dynamic = "force-static"` は datasets/downloads/market-data/rag-index の計31ファイル。**Supabase を触る4本には `dynamic` も `runtime` も一切ない** |
| 成功レスポンス | 書き込み系はフラットな `{ ok: true, ... }` |
| エラーレスポンス | 常に `{ ok: false, error: "<文字列>" }`。使用ステータスは 400 / 404 / 500 のみ |
| 入力検証 | **手書き**。zod / yup / valibot / joi はいずれも依存に無い |
| エラー処理 | ハンドラ全体を try/catch。catch は `error instanceof Error ? error.message : "Unexpected error"` |
| CORS / Cache-Control | 読み取り系のみ付与。書き込み系は付けない |

#### `POST /api/contact` の仕様案

既存の書き込み系（`simulation-results/route.ts`）の作法をそのまま踏襲する。すなわち **segment config を書かない / 素の `Response.json` / `{ok:true}`・`{ok:false,error}` / ハンドラ全体を try/catch / CORS・Cache-Control を付けない**。

検証はライブラリを足さず手書きにするが、既存の「必須配列 × 空文字判定」だけでは公開フォームに足りないため、**`src/lib/contact/validate.ts` として純関数に切り出す**（React 非依存の純モジュールは `src/lib/consultCta.ts` に前例があり、node 環境のテストから直接検証できる）。

リクエストボディ:

```ts
type ContactRequest = {
  inquiry_type: "rate-review" | "tech-question" | "lecture-request" | "other";
  company_name: string;   // 必須
  email: string;          // 必須
  message: string;        // 必須
  name?: string;          // 任意
  phone?: string;         // 任意
  cta_from?: string | null;
  variant?: string | null;
  page_path?: string | null;
  // 診断コンテキスト（/contact のクエリ由来）
  risk_label?: string | null;
  risk_score?: number | null;
  contract_type?: string | null;
  region?: string | null;
  // スパム対策
  hp?: string;            // honeypot（空でなければ拒否）
  token?: string;         // 署名付き時刻トークン
};
```

文字数上限（**外部の公的規定に根拠のない運用値**。論点に上げる）:

| 項目 | 上限 | 根拠 |
|---|---:|---|
| `company_name` | 200 | 実在の法人名を切り捨てない長さ |
| `email` | 254 | RFC 5321 のアドレス長上限 |
| `message` | 5,000 | 相談本文として十分で、DB・メール本文が壊れない長さ |
| `name` | 100 | — |
| `phone` | 30 | 国番号・内線を含めても収まる長さ |

レスポンス:

```jsonc
// 200 成功
{ "ok": true, "id": "<uuid>", "notified": true }

// 400 検証エラー
{ "ok": false, "error": "未入力の項目があります: 会社・団体名" }

// 429 レート制限
{ "ok": false, "error": "短時間に複数回送信されています。しばらく時間をおいてお試しください。",
  "fallbackUrl": "https://eic-jp.org/contact" }

// 500 サーバーエラー（保存に失敗）
{ "ok": false, "error": "送信を受け付けられませんでした。お手数ですが公式フォームをご利用ください。",
  "fallbackUrl": "https://eic-jp.org/contact" }
```

**失敗時のフォールバック**は外部フォームURLをレスポンスに含めてクライアントで案内する。ただし後述のとおり **`?category=` は外部フォームに反映されないため、`fallbackUrl` にクエリを付けても意味がない**（付けても害はないが、引き継がれる旨を書いてはいけない）。

**メール通知の環境変数が無い場合は通知をスキップして受理を成立させる**（`{ok:true, notified:false}`）。保存が成功していれば問い合わせは失われない。

### 2-c. メール通知の4案比較と推奨

| | (A) Resend | (B) SendGrid | (C) Vercel Marketplace | (D) Supabase Edge Function + SMTP |
|---|---|---|---|---|
| 無料枠 | **月3,000通 / 日100通 / ログ保持30日 / 3ドメイン** | **無料プランなし**（60日トライアルのみ） | 実体は各ベンダー（Resend 等）と同じ | Supabase の無料枠内。SMTP は別途 |
| 有料の最小 | Pro $20/月（5万通・超過 $0.90/1,000通） | Essentials $19.95/月（日本代理店経由 ¥3,000/月・税抜） | 同左 | SMTP 提供元による |
| ドメイン認証 | **必須**。DKIM+SPF の TXT / MX または CNAME を DNS へ | 必須 | 必須 | SMTP 提供元の設定に従う |
| 実装量 | `resend` 1パッケージ・HTTP 1回 | `@sendgrid/mail` 1パッケージ | 同 (A) | Edge Function を別途デプロイ・SMTP セッション管理 |
| 障害検知 | レスポンスを await して確認可・Webhook あり | 同左 | 同左 | サーバーレスで SMTP は相性が悪い |

**推奨: (A) Resend を直契約**（Vercel Marketplace 経由ではなく）。理由は3点。

1. 問い合わせ通知という用途に対して**恒常の無料枠**（月3,000通・日100通）がある。SendGrid は無料プランが無い
2. Route Handler から **HTTP 1回**で完結し、レスポンス前に await して結果を確認できる。Vercel 自身がサーバーレス関数では SMTP より HTTP API が適すると説明しており (D) は不利
3. Marketplace 経由にすると課金と設定が Vercel 側に寄る。直契約なら送信ドメインとログを Resend のダッシュボードで直接扱える

#### ★送信元ドメインを認証しない場合に何が起きるか

Resend 公式ドキュメントの記載: 「Resend sends emails using a domain you own (i.e., not a shared or public domain). You must add and verify at least one domain to send emails with Resend.」

**認証しない場合、共有ドメイン `resend.dev` からは「自分のアカウント登録アドレス宛」にしか送れず、それ以外の宛先には 403 が返って送信自体が失敗する。** 迷惑メール判定以前に、機能しない。したがってドメイン認証は必須作業である。

#### 現行 DNS（Google Public DNS 8.8.8.8 へ read-only 照会・2026-09-05）

```
eic-jp.org SPF   : v=spf1 include:_spf.lolipop.jp include:spf.bmv.jp ~all
eic-jp.org MX    : mx01.lolipop.jp (pref 50)
_dmarc.eic-jp.org: v=DMARC1; p=none;
権威 NS          : dns01/dns02.muumuu-domain.com（ムームードメイン）
```

Resend は**ルートドメインではなくサブドメイン**での送信を推奨している（例 `notify.eic-jp.org`）。サブドメインなら既存の SPF / MX に触れずに済むため、**現行メール配送への影響を出さずに追加できる**。

### 2-d. スパム対策（4層）

リポジトリ実測: `src` 配下に `<form>` は0件、レート制限 / honeypot / captcha / nodemailer の実装はいずれも存在しない。`middleware.ts` の matcher は `["/admin/:path*"]` のみで、公開ルート・APIルートへの共通前段防御は無い。`crypto.randomUUID()` は既に本番使用しており、Web Crypto は追加依存なしで使える。

#### 最小構成（初期リリース）

| 層 | 内容 | 実装量の目安 |
|---|---|---|
| **L0 入口検査** | `Content-Type: application/json` でなければ拒否／`Origin` があれば `Host` と一致確認／各項目の文字数上限 | 約20行 |
| **L1 honeypot** | 視覚的に隠したフィールド。`aria-hidden="true"` ＋ `tabindex="-1"` ＋ `autocomplete="off"` でスクリーンリーダーとキーボード操作から外す（`display:none` だけに頼らない） | 約10行 |
| **L2 署名付き時刻トークン** | サーバーが発行時刻を埋めた HMAC 署名トークンをフォーム描画時に渡し、POST で検証。**クライアントの時刻を信用しない**。下限3秒・上限2時間 | 約40行 |
| **L3 レート制限** | Supabase の `contact_inquiries` を固定窓で数える（同一 `ip_hash` で10分3件 / 24時間10件）。**追加パッケージ不要**（部分インデックス済み） | 約30行 |

#### 追加構成

| 層 | 内容 | 判断 |
|---|---|---|
| **L4 Cloudflare Turnstile** | サイトキー / シークレットキーが必要。無料枠あり | **最小構成には入れない**。まず log-only で1か月測り、必要性が確認できてから必須化する |

#### 誤検知への備え

正規の問い合わせは月数件規模（GA4 実測: 28日で `contact_form_submitted` 5件・これは外部フォームを開いたクリック数であり実送信数ではない）。**1件の誤検知が取りこぼす価値が、ブロックできるスパム1件の価値より大きい。** したがって:

- しきい値は**大幅に緩く**設定する（上記の10分3件 / 24時間10件は実測量に対して余裕がある）
- **弾いた場合でも外部フォームへの導線を残す**（`fallbackUrl` を返して案内する）
- 法人NAT・モバイルCGNAT による IP 共有を考慮し、IP だけで恒久ブロックはしない

### 2-e. 外部フォームの実測（GET 閲覧のみ・送信なし）

#### 実装基盤

`https://eic-jp.org/contact` は WordPress ページ（`page-id-7` / `wp-theme-nextage_tcd-child`）で、フォーム本体は**外部SaaS「フォームメーラー」（`pro.form-mailer.jp`）の埋め込み**。本文中の実コードは2行のみ:

```html
<script src="https://pro.form-mailer.jp/formfiles/js/embed.js"></script>
<div class="formmailer-embed" data-form-hash="ea4cc30a356267" data-form-host="pro.form-mailer.jp"></div>
```

実フォームは `https://pro.form-mailer.jp/fms/ea4cc30a356267?errorScroll=0`（HTTP 200・title「エネルギー情報センターお問い合わせフォーム」・`meta robots=nofollow`）。`action="/fms/ea4cc30a356267/submissions/confirm"` `method="post"` で、**確認画面をはさむ2段階フロー**（ボタンは「確認画面へ」）。同ページに Googleフォーム / HubSpot / Contact Form 7 / MW WP Form / formrun / Tayori / reCAPTCHA / iframe の文字列はいずれも0件。

#### 🔴 `?category=` は反映されない（3つの独立した根拠）

1. `https://eic-jp.org/contact` と `?category=rate-review` の両方を取得（ともに HTTP 200・40,951 bytes）。**diff の差分はロゴ画像のキャッシュバスター数値1行のみ**（取得時刻依存）で、category による出力差は無い
2. `embed.js` は iframe の src を固定文字列で組む: `iframe.setAttribute('src', 'https://' + element.dataset.formHost + '/fms/' + element.dataset.formHash + '?errorScroll=0')`。**親ページの `location.search` を読む処理が無く、親URLのクエリは iframe へ伝播しない**
3. フォーム側 `submissions-create.js` には `restoreInputFromUrlParameter()` があり URL プリフィル自体は対応しているが、キーの規則は `label[0]=value`。実装は `if (keyvalue[0].match(/\[[0-9]+\]$/))` で**添字なしのキーを黙って捨てる**。`category` は添字が無く破棄され、かつ「category」というラベルのフィールドセットも存在しない

**したがって、現状 `/contact` で選んだ種別は外部フォームへ一切引き継がれておらず、GA4 イベントにしか残っていない。**

#### 項目の実測と対応表

| 新サイト内フォーム | 新・必須 | 外部フォームの対応項目 | 外部の name | 外部・必須 | 一致状況 |
|---|---|---|---|---|---|
| 種別 | 必須 | **該当なし** | — | — | ❌ 外部に種別欄が存在しない |
| 会社・団体名 | 必須 | 所属団体名（企業名） | `field_5601183` | 必須 | ✅ |
| メールアドレス | 必須 | メールアドレス | `field_5601178` | 必須 | ✅（外部は `type=email`） |
| ご相談内容 | 必須 | お問い合わせ内容 | `field_5601217` | 必須 | ✅（外部は `textarea rows=5`） |
| お名前 | 任意 | 名前（**姓・名の2入力**） | `field_5601177_sei` / `_mei` | **必須** | ⚠ 必須/任意が反転・粒度も違う |
| 電話 | 任意 | 電話番号 | `field_5601182` | **必須** | ⚠ 必須/任意が反転 |

外部フォームは**5フィールドセットすべてが必須で、任意項目は0件**。`<select>` / `radio` / `checkbox` / `file` はいずれも0件。同意チェックや個人情報リンクもフォーム内には無い。

#### 🔴 現行の当サイト記述が実測と一致していない（本件と同時に是正すべき）

| 箇所 | 現行の記述 | 実測 |
|---|---|---|
| `InquiryTypeSelector.tsx:183-186` | 「※ 必須項目: ご質問種別 / メールアドレス / お問い合わせ内容（3 項目）／その他の項目はすべて任意です」 | 外部フォームに「ご質問種別」は無く、必須は5フィールドセット、**任意項目は0件** |
| 同 `:156` | 「『◯◯』の文脈を引き継いだうえで送信できます。」 | 種別は引き継がれない |
| 同 `:179` | 「「◯◯」で 3 営業日以内に返信を受け取る →」 | 同上 |

### 2-f. プライバシーポリシー

#### 🔴 eic-jp.org にプライバシーポリシーのページは確認されていない

| 調査 | 結果 |
|---|---|
| URL 直接（`/privacy` `/privacy-policy` `/privacypolicy` `/privacy_policy` `/policy` `/kojinjoho` `/pp` `/terms` `/agreement`） | **すべて HTTP 404** |
| `page-sitemap.xml`（公開ページ全19件） | 該当なし（/about /contact /activity /contact/complete /support /instructor /qualification /est /intern /seminar /operate_pps /joint-seminar /access_map /book /site_map ほか） |
| WordPress REST API `wp/v2/pages?per_page=100` | `X-WP-Total: 20` を全数取得。**privacy 系スラッグは存在しない** |
| サイト内検索「プライバシー」 | 「登録されている記事はございません。」＝0件 |
| 全19ページのHTML本文を「プライバシー／個人情報／ポリシー／privacy／保護方針／取扱／第三者／開示／利用目的／同意」で機械照合 | **1件も出現しない** |

**したがって前提3（eic-jp.org の既存プライバシーポリシーへリンク）は、そのままでは実行できない。**

#### 代替候補

同一運営法人（一般社団法人エネルギー情報センター）が運営する新電力ネットには実在する: **`https://pps-net.org/privacy`**（HTTP 200・title「プライバシーポリシー｜新電力ネット」・末尾に【2026年7月9日改定】・フッターから常時リンク）。

ただし冒頭が逐語で「一般社団法人エネルギー情報センター（以下「当法人」）は、当法人が提供する『新電力ネット』（**https://pps-net.org/ 以下のディレクトリ**。以下「本サービス」）におけるユーザーの個人情報について、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。」と定めており、**文言上 simulator.eic-jp.org は適用範囲に含まれていない**。

#### 同意文言案

**案1: 「送信をもって同意」型（チェックボックスなし）**

> 送信することで、<a href="（ポリシーURL）">個人情報の取扱いについて</a> に同意したものとみなします。

**案2: 同意チェックボックス必須型**

> <input type="checkbox" required> <a href="（ポリシーURL）">個人情報の取扱い</a> に同意します

| | 案1（みなし同意） | 案2（チェック必須） |
|---|---|---|
| 実装 | 文言1行のみ | 必須検証がクライアント・サーバー両方に増える |
| 送信率 | 摩擦が小さい | チェック忘れによる離脱が発生しうる |
| 記録 | 同意の記録が残らない | 同意した事実を列として保存できる |

**当サイト（simulator.eic-jp.org）側に独自のプライバシーポリシーページは存在しない**（`src/app` 配下に該当ディレクトリなし）。

### 2-g. 計測

#### 現行の実測

| イベント | 発火点 | パラメータ |
|---|---|---|
| `contact_form_submitted` | `InquiryTypeSelector.tsx:163-170`（外部フォームを開いた時） | `event_category:"engagement"` / `event_label` / `inquiry_type` / `cta_from` |
| `contact_type_selected` | 同 `:107-110`（種別ボタン押下時） | `inquiry_type` / `cta_from` |
| `contact_cta_view` | `ContactCtaCard.tsx:84-101` | `cta_from` / `variant` / `page_path`（threshold 0.5・1マウント1回・発火後 disconnect） |
| `contact_cta_click` | `ContactCtaCard.tsx:139-147` と `InlineConsultLink.tsx:46` の2経路 | 前者は6パラメータ、後者は `cta_from` / `variant:"inline"` |
| `cta_click` | `ConsultCta` / `StickyConsultBar` / `ContentCta` の3コンポーネント | `label` / `href` / `from` / `cta_from` |
| `cta_dismiss` | `StickyConsultBar.tsx:88` | `label:"sticky"` / `from:"sticky"` / `cta_from:"sticky"` |

> ★`contact_type_selected` は**種別ボタンを押すたびに発火し、同じ種別の再クリックも重複計上される**（dedupe なし）。現状は「ユニークな選択者数」ではなく「選択操作の回数」である。

#### 新イベント

**`contact_inquiry_sent`** — サーバーが 200 を返した後にクライアントで**1回だけ**発火。「実送信が成立した」ことだけを表す。

- パラメータ: `cta_from` / `inquiry_type` / `variant` の3つに固定
- 二重発火の防止は `useRef` による1回限り（#335 の `viewFiredRef` と同型）
- `cta_from` は URL 由来の任意文字列が入りうるため、送信前に「英数と `- _ /` のみ・100文字で切る」正規化を通す
- ★GA4 のキャンペーン予約語（`source` / `medium` / `campaign` / `term` / `content`）は使わない（#333 で確立）

**`contact_inquiry_failed`** — 400/429/500 で発火。パラメータに `reason`（`validation` / `rate_limit` / `server`）を持たせる。失敗が可視化されないと、送信率の低下が「来訪が減った」のか「エラーで落ちている」のか切り分けられないため追加する。

#### 既存イベントの扱い

- **`contact_form_submitted` は名前も意味も変えない**。外部フォームを開いた＝副導線として残す
- `contact_type_selected` は **手動変更時のみ発火**とする。事前選択（`cta_from` や診断コンテキストから種別を決める場合）では発火させない。★事前選択でも発火させると「ユーザーが選んだ」という既存の意味が壊れ、9月以前との比較ができなくなるため

#### カスタムディメンションの登録状況（2026-09-05 実測・#337 のスクリプトで確認）

| ディメンション | 状態 |
|---|---|
| `customEvent:cta_from` | **未登録**（GA4 API が 400 `is not a valid dimension` を返す） |
| `customEvent:inquiry_type` | **未登録**（同上） |

エラーの候補提示が `customEvent:diag_re` である点から、登録済みは `diag_*` 系のみと読める。**登録は遡及しない**ため、登録日以降の期間でしか内訳は取れない。

---

## ■ 3. ページ構成案

### 3-1. 順序

| # | ブロック | 扱い |
|---|---|---|
| 1 | 文脈バナー（診断結果の引き継ぎ） | **現行維持**。`hasContext` が真のときのみ表示 |
| 2 | 信頼3点（3営業日以内 / 第三者提供なし / 営業電話なし） | **現行の信頼バナーをそのまま**。既に L284-304 に実在する |
| 3 | H1 ＋ リード | 現行維持（リードは短縮を検討＝論点） |
| 4 | **フォーム** | **ここへ移動**。種別は `cta_from` / 診断コンテキストから事前選択。4＋2項目・送信ボタン1つ・同意文言 |
| 5 | 「私たちがお応えできること」以下の現行6セクション | **圧縮して下部へ。削除しない・文言不変** |
| 6 | ご相談を承る範囲について | 現行維持 |
| 7 | FAQ | 現行維持 |

★「圧縮」は**折りたたみ（`<details>`）による表示上の圧縮**を指し、本文の削除・書き換えは行わない。文言はすべて現行のまま残す。

### 3-2. 送信完了・失敗

- **成功**: 同一ページ内で差し替え（ページ遷移しない）。受付の案内・返信目安（3営業日以内）・結果IDの案内は維持
- **失敗**: エラー文言 ＋ 外部フォームへの副リンク。`fallbackUrl` をレスポンスから受け取って表示する

### 3-3. 外部フォームの扱い

「公式フォームで送る」として**下部に1つ残す**（副導線）。`contact_form_submitted` はこのリンクに紐づいたまま残る。

★ただし前掲のとおり `?category=` は反映されないため、**「種別を引き継いで送信できる」旨の文言は書けない**。現行 `InquiryTypeSelector.tsx:156, :179, :183-186` の記述は同時に是正する。

### 3-4. 文言の規律

- 誇大語・結果を約束する断定・相対時間表現の禁止（QUALITY_RULES）
- **「2,000社以上の支援実績」等の既存主張は現行文言を動かさない**
- 未確認は「確認されていない」と書く

### 3-5. 不変条件

- **`ContactCtaCard` / `StickyConsultBar` / `InlineConsultLink` は触らない**（前後比較の分母を守る）
- `/contact` 配下での StickyConsultBar 非表示は維持（`pathname === "/contact" || pathname.startsWith("/contact/")`）
- `contact_cta_view` の発火条件（threshold 0.5・1回限り）は変更しない

---

## ■ 4. 効果測定の設計

### 4-1. Stage B の定義更新

| | 現行 | 新 |
|---|---|---|
| 定義 | /contact 到達 → **外部フォームを開く**（`contact_form_submitted`） | /contact 到達 → **サーバー受理**（`contact_inquiry_sent`） |
| 実測値 | **3.33%**（2026-08） | 新設後に測定 |
| 分母 | /contact のセッション | 同じ（/contact のセッション） |

★分母を変えないので、Stage B は定義変更後も**同じ分母での比較**になる。分子だけが「開いた」から「送れた」に変わる。**新旧の Stage B を直接比較してはいけない**（意味が違う）ことを判定時に明記する。

### 4-2. 真のCV

**Supabase `contact_inquiries` の行数（月次）** ＋ 外部フォームの実受信数を合算し、9月末topline の判定#7 に用いる。

- Supabase 側は `select count(*) from contact_inquiries where created_at >= ... and status <> 'spam'` で取れる
- 外部フォーム側はフォームメーラーの管理画面から江田さんが件数を取る

### 4-3. ベースライン

| 起点 | 日時 | 対象 |
|---|---|---|
| 第1（#335 CTA衝突解消） | **2026-09-02 14:18:48 JST**（不変） | `contact_cta_click ÷ contact_cta_view` |
| 第2（フォーム新設） | **PR-A のデプロイ完了時刻**（記録する） | Stage B・真のCV |

#337 の `scripts/ga4-funnel.mjs` は `--baseline` で前後を分け、**baseline 当日を「混在日」として別行に出す**ため、第2の起点もそのまま渡せる。

---

## ■ 5. 実装計画

### 5-1. PR分割案

| PR | 内容 | 前提 | 目安 |
|---|---|---|---|
| **PR-A** | `/contact` の構成変更 ＋ フォームUI ＋ `POST /api/contact` ＋ Supabase 保存 ＋ スパム対策の最小構成（L0〜L3）＋ `contact_inquiry_sent` / `contact_inquiry_failed`。**メール通知の環境変数が無ければ通知をスキップして受理は成立させる**。あわせて `InquiryTypeSelector` の実測と一致しない記述3箇所を是正 | Supabase テーブル作成SQLの実行（江田さん）／ポリシーURLの確定（江田さん） | 中規模 |
| **PR-B** | メール通知（Resend） | 江田さんのAPIキー設定・DNS 認証完了 | 小規模 |
| **PR-C** | Cloudflare Turnstile（任意） | サイトキー / シークレットキー | 小規模 |

★PR-A は**メール通知なしでも成立する**設計にする。Supabase に保存されていれば問い合わせは失われないため、DNS 設定を待たずに公開できる。

### 5-2. 江田さんの作業一覧（順序つき）

| # | 作業 | 所要の目安 | ブロックする PR |
|---|---|---|---|
| 1 | **プライバシーポリシーのリンク先を決める**（論点1参照）。pps-net.org/privacy を使うか、eic-jp.org に新設するか | 判断10分＋新設する場合は別途 | **PR-A** |
| 2 | Supabase SQL Editor で `contact_inquiries` の DDL を実行（本書 2-a のSQL） | 10分 | **PR-A** |
| 3 | Vercel 環境変数 `SUPABASE_SERVICE_ROLE_KEY` を設定（現状 `.env.local` に無い） | 10分 | **PR-A** |
| 4 | Vercel 環境変数 `CONTACT_IP_HASH_SALT` を設定（任意の長いランダム文字列） | 5分 | PR-A（無ければ ip_hash を保存しない分岐） |
| 5 | 通知先メールアドレスを決める（複数可） | 5分 | PR-B |
| 6 | Resend のアカウント作成・APIキー発行 | 15分 | PR-B |
| 7 | 送信元サブドメイン（例 `notify.eic-jp.org`）を決め、ムームードメインの DNS に Resend が示す DKIM/SPF レコードを追加 | 30分＋反映待ち（15分〜72時間） | PR-B |
| 8 | Vercel 環境変数 `RESEND_API_KEY` / `CONTACT_NOTIFY_TO` / `CONTACT_NOTIFY_FROM` を設定 | 10分 | PR-B |
| 9 | GA4 管理画面でカスタムディメンション `cta_from` / `inquiry_type` を登録（**現在どちらも未登録**） | 10分 | 内訳分析（PRは不要） |
| 10 | GA4 キーイベントに `contact_inquiry_sent` を追加 | 5分 | 判定 |
| 11 | Cloudflare Turnstile のキー発行（PR-C を採る場合のみ） | 15分 | PR-C |

### 5-3. 週明け（PR-A）の着手可否

**着手できる。ただし作業1（ポリシーのリンク先確定）と作業2（テーブル作成）が完了していないとマージまで到達しない。**

| ブロッカー | 状態 |
|---|---|
| 🔴 プライバシーポリシーのリンク先 | **未確定**。eic-jp.org に該当ページが存在しない（2-f）。同意文言をどこへリンクするか決まらないとフォームを公開できない |
| 🔴 `contact_inquiries` テーブル | **未作成**。SQL は本書 2-a に用意済み。実行は江田さん |
| 🟡 `SUPABASE_SERVICE_ROLE_KEY` | **未設定**（`.env.local` に無い）。無いと `createAdminServerClient()` が anon にフォールバックし、RLS 全拒否のテーブルへ insert できない |
| 🟢 メール通知 | PR-A では**ブロッカーにならない**（通知スキップで受理成立） |
| 🟢 GA4 カスタムディメンション登録 | PR-A では**ブロッカーにならない**（イベント総量は登録前でも取れる） |

コード側は上記が揃う前でも書き始められる（フォームUI・検証関数・Route Handler・テスト）。**ポリシーURLとテーブルが揃った時点でマージ可能**になる。

---

## ■ 論点（決めが必要な点）

### 🔴 論点1: プライバシーポリシーのリンク先（前提3が実行できない）

eic-jp.org にプライバシーポリシーが存在しないことが実測で確定した（2-f）。選択肢:

| 案 | 内容 | 長所 | 短所 |
|---|---|---|---|
| **A** | `https://pps-net.org/privacy` にリンクし、/contact 側に「本フォームの取扱いも同ポリシーに準じる」旨の1文を添える | 当日着手できる | ポリシー本文の適用範囲が「pps-net.org 以下のディレクトリ」に限定されており、文言上の不一致が残る |
| **B** | eic-jp.org に法人共通のポリシーページを新設し、適用範囲に simulator.eic-jp.org を含める | 不一致が解消する | 新設と公開の作業が発生し、PR-A がそれを待つ |
| **C** | simulator.eic-jp.org 側に独自のポリシーページを作る | 当サイトで完結する | 法人として2つのポリシーが並ぶ |

### 🔴 論点2: 必須/任意の反転（前提2との差）

外部フォームでは**電話番号とお名前（姓・名）が必須**だが、新フォームでは任意になる。問い合わせ品質が下がる可能性がある。この反転で確定してよいか。

あわせて、**「お名前」を単一入力にするか姓/名の2入力にするか**（外部は2入力）。

### 論点3: 種別の引き継ぎ表記の是正範囲

`InquiryTypeSelector.tsx` の3箇所（`:156` `:179` `:183-186`）は実測と一致していない。PR-A で同時に是正する想定でよいか。**フォームだけ作って旧文言が残ると誤記が温存される。**

### 論点4: 文字数上限の妥当性

`company_name` 200 / `name` 100 / `message` 5,000 / `phone` 30 は**外部の公的規定に根拠のない運用値**。`email` 254 のみ RFC 5321 由来。この値で確定してよいか。

### 論点5: ブロック時の挙動

(A) 明示エラー ＋ 外部フォーム導線（誤検知に利用者が気づけて拾える／ボットにも検知条件が伝わる） vs (B) サイレント破棄（ボットに学習させない／誤検知した正規の問い合わせが失われる）。**推奨は (A)**（誤検知の損失が大きいため）。

### 論点6: レート制限のしきい値と IP の保持

「10分3件 / 24時間10件（同一 `ip_hash`）」でよいか。生IPは保存せず HMAC ハッシュのみを持つ設計でよいか。保持期間はレート制限の窓（最長24時間）で自動削除でよいか、不正アクセス調査のために長く持つか。

### 論点7: 確認画面の有無

外部フォームは確認画面をはさむ2段階フロー。新フォームも確認画面を設けるか、1画面完結にするか。**1画面完結を推奨**（Stage B を上げるのが目的のため）。

### 論点8: `contact_inquiry_sent` に `inquiry_id` を載せるか

載せれば GA4 と Supabase を1件単位で突合できるが、高カーディナリティのパラメータになる。

### 論点9: 自動返信メール

送信者への自動返信を出すか。出す場合の文面。

### 論点10: 外部フォームの扱い

新フォーム公開後、`eic-jp.org/contact` への送客リンクを副導線として残す想定でよいか。**外部フォーム（ハッシュ `ea4cc30a356267`）は eic-jp.org 全体の窓口を兼ねているため、停止は非推奨**。simulator 側の導線のみ切り替える。

### 論点11: 種別4区分

現行の4種（`rate-review` / `tech-question` / `lecture-request` / `other`）をそのまま踏襲してよいか。外部フォームに種別欄が無かったため、**実際の問い合わせ分布からの裏づけは取れていない**。

### 論点12: `simulation_results` の anon 開放（本件とは別）

`supabase-risk-score-and-select-policy.sql` が anon に select / insert を開放している点（2-a）。本件の意思決定には影響しないが、別途の判断が要る。

---

## ■ 本書で確認できなかったこと

- eic-jp.org のプライバシーポリシー（存在しないと断定はしない。非公開・未リンクの固定ページがある可能性は残る）
- 外部フォーム（フォームメーラー）の実際の受信件数・過去データ。管理画面へのアクセスが要る
- 種別4区分の実際の問い合わせ分布（外部フォームに種別欄が無いため記録が存在しない）
- Resend の日本向け到達性の実績（一般的な注意点は把握したが、当法人のドメインでの実測は未実施）
