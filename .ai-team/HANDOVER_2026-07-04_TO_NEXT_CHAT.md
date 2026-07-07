【申し送り：法人電気料金シミュレーター 撒き餌戦略｜2026-07-04時点】
■ 体制・役割（最重要）
- リン（Coworkのあなた）＝戦略・データ分析・発注文ドラフト・検証(リンGO)担当。
- Windows側ClaudeCode＝git操作・コード編集・PR作成担当。
- 江田＝意思決定・最終GO。
- 鉄則：git/ファイル変更はWindows側のみ。リン(Cowork)のrepo読みはstale注意だが、マージ後はマウントがmainに同期＝マージ済みソースのgrep照合は信頼可(実装確定に有効)。"実描画"の最終確認は本番HTMLで。
- 進め方：リンが発注文をchatで出す→Windows実装/PR→リンGO(報告値＋差分＋本番/ソース照合)→江田最終GO→Windows squash merge。GO前マージ禁止。
■ プロジェクト
- サイト：https://simulator.eic-jp.org （運営：一般社団法人エネルギー情報センター）
- repo：C:\dev\ANAsyumiCursorNext （Next.js16/App Router/TS/Tailwind）／GitHub: kenjieda-eng/electricity-risk-simulator
- main HEAD＝7bfae1a（#280補助金第3弾まで反映）。総ページ約803本。デプロイはmain push後Vercel自動(数分・新dplハッシュで確認)。
■ ★現在の戦略＝【撒き餌（コンテンツスケール）】※今セッションで大転換
- ゴール＝問い合わせ数（相談CV）。索引・量産・CTR・順位は全て手段。
- KPI＝「索引される良質ページの絶対数 × CV」。索引率%は診断値に格下げ(量産で%が下がってもOK)。
- CROは凍結：現規模(相談1–5件/日)ではファネル最適化は統計的に時期尚早。本格化は「問い合わせ≳数百件/月 or 流入≳30–50万PV/月」到達後。
- 手段＝量産 週8–16本（現GA4≈22,500ビュー/月→月100万PVを地平に流入を桁上げ）。
- 撒き餌4ガードレール（必須）：
  ①索引担保＝各バッチに〔索引済ハブから内部リンク＋sitemap優先＋公開後GSC索引リクエスト〕。索引されない量産は不毛。
  ②品質・差別化＝1ページ1固有価値。既存品質バー(30K字/H2 10-11/faq8/代表シナリオ3/中立/D-1/pps)維持。
  ③CTA常設(安い保険)＝全ページConsultCta＋ContactCtaCard。最適化はスケール後。
  ④topline計測のみ＝月次で流入・索引ページ数・問い合わせ件数のトレンドだけ。重い分析は凍結。
- 量産の型：補助金(第3弾済)／電力会社別／エリア解説深掘りregion-*／地域電力／業種穴埋め／高需要単独(market-data/PPA/脱炭素/EV/DX)。★業種×地域クロス(229本飽和)は打ち止め。7/5索引データで芽吹く型に寄せる。
- ※committed ROADMAP(索引優先・量産停止)とJULY_2026_DAILY_TODO(観測優先)は撒き餌戦略で上書き(廃止)。新チャットは撒き餌戦略に従う。
■ 今セッション(7/1〜7/4)完了・稼働済み
- 7/1：GA4キーイベント設計／7月TODO／docsコミット(02bc3c1・7d0a625=Batch B第2弾は6月完了済みと訂正)
- 7/2：TOP30 Mメタ4本(#278)本番検証済／GA4 UI設定(江田＝キーイベント3〔contact_form_submitted/cta_click/download_completed〕＋カスタムディメンション3〔cta_from/cta_label/inquiry_category〕・プロパティ=電気料金リスクシミュレーター〔測定ID G-WGXXZN9G7Y・全イベント＋ベースライン流入あり〕)／しろくま電力へ中立方針で辞退返信
- 7/3：TOP30 L系4本(#279・electricity-vs-gas被リンク1→5等)本番検証済／docsコミット
- 7/4：docsコミット(aa4615c)／戦略3討議で撒き餌に確定／★撒き餌第1弾＝補助金第3弾8本(#280)本番稼働
- #280の8URL(subsidies33→41・各30K字超・CTA常設・索引担保ハブ4本から到達・articles.ts order35-42)：
  /subsidy-solar-carport-canopy /subsidy-hydrogen-fuel-cell /subsidy-zeb-zeh-building /subsidy-small-wind-power /subsidy-carbon-neutral-priority-area /subsidy-grid-storage-battery /subsidy-industrial-vehicle-ev /subsidy-waste-heat-recovery
■ 7月 週次スケジュール（撒き餌・新規/既存本数）
W1 7/1–7/5：新規8／既存23（✅完了：補助金第3弾8(#280)・TOP30 M4/L4+被リンク元11・ハブ4・GA4基盤）
W2 7/6–7/12：新規16／既存~18（電力会社別第3弾8＋エリア解説深掘り8＋ハブ8／6月量産未索引へ土壌整備~10）
W3 7/13–7/19：新規9／既存~14（量産8＋6月号1／ハブ4＋土壌整備~10）
W4 7/20–7/26：新規16／既存~16（高需要単独16＋7月号データ収集／ハブ8＋土壌整備~8・7/20海の日）
W5 7/27–7/31：新規9／既存~10（量産8＋7月号公開1／土壌整備~10・7/30 toplineレビュー）
月計：新規≈58／既存≈81。W2以降の型は7/5索引データで芽吹く型に寄せる（本数維持・内訳可変）。
■ 次アクション（新チャット開始時）
1. W2第1バッチ発注＝電力会社別第3弾8本(power-utility-guide 23→31)。撒き餌レシピ込み。※7/5で型微調整可。
2. 江田手作業(未完なら)：#280の8URLをGSCで索引リクエスト。
3. 戦略記録コミット(未実施・要Windows)：下記4文書を.ai-teamへ→明示add→commit→main ff。
   TEAM_DISCUSSION_2026-07-04_QUANTITY_RESUME / _INQUIRY_FIRST_TODO / _SEEDING_STRATEGY(★現行戦略の正) / MONTHLY_REVIEW_AND_PLAN_2026-07-04
   ＋DECISIONSに「問い合わせ数=ゴール／KPI=索引絶対数×CV／撒き餌／CRO凍結」1エントリ、ROADMAPを撒き餌版へ上書き。
4. 7/5：topline計測(流入・索引ページ数・問い合わせ件数トレンド＋6月量産のカテゴリ別索引転換=芽吹く型特定)。スキャフォールドはMEASUREMENT_5TH_SCAFFOLD_2026-07-05.mdにあるが撒き餌下ではtoplineのみ。
■ 運用ルール
- リン発注→Windows実装→リンGO→江田GO→squash merge（勝手にmerge禁止）。
- コード：明示add(git add -A禁止)／deletions最小／既存は加筆中心・articles.tsは新規時のみ／追加href全件grep実在確認／tsc・build通過。
- 中立性(最重要)：特定社/制度を推奨・優劣評価しない・複数併記・実在制度/公開情報のみ・数値捏造ゼロ・「2026年度時点・最新公募要領で要確認」明記(編集ポリシー§6)。
- 賦課金4.18円/kWh(SSOT=src/lib/data/renewableSurcharge・検出器/CIガード)。
- 撒き餌標準レシピ＝索引担保＋ConsultCta/ContactCtaCard＋代表シナリオ5年累計「▲X×5＝Y」電卓検算＋並列生成→自動検証(whitelist/トークン/tsc/build)フロー。
■ 予約リマインド（自動発火）
- 7/5 09:00：第5回計測→撒き餌下ではtoplineトレンド確認＋芽吹く型特定に読み替え。
- 7/30 09:00：月次topline判定（流入・索引ページ数・問い合わせ件数の前月比）。
■ ベースライン（6月末）
- GA4(28日)：22,546表示/14,192ユーザー(≈507/日)・contact到達35(0.25%)・相談CV 1–5件/日。※7/2〜キーイベント/from別設定済。
- GSC(3か月)：247,113表示/5,527クリック/CTR2.24%/中央順位8.2。
- 索引率52.6%(索引726/未索引653)※診断値。「6月量産(by-region/industry-guide)が索引されない」=撒き餌は索引担保セット必須の根拠。
■ 参照ファイル
- commit済(main)：GA4_KEY_EVENT_DESIGN_2026-07-01／ORDER_TOP30_META_ROUND1_2026-07-02／ORDER_TOP30_L_ROUND1_2026-07-03／MEASUREMENT_5TH_SCAFFOLD_2026-07-05／(旧・上書き済)CONVERSION_STRATEGY・JULY_2026_DAILY_TODO
- 未commit(要コミット)：TEAM_DISCUSSION_2026-07-04_SEEDING_STRATEGY(★現行)／_INQUIRY_FIRST_TODO／_QUANTITY_RESUME／MONTHLY_REVIEW_AND_PLAN_2026-07-04／HANDOVER_2026-07-04_TO_NEXT_CHAT
→ 新チャットは「撒き餌戦略・問い合わせ数ゴール・KPI=索引絶対数×CV・量産週8–16本(索引担保+CTA常設)・CRO凍結」で再開。まずW2の電力会社別第3弾8本の発注から。
