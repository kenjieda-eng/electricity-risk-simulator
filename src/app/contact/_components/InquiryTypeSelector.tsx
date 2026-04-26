"use client";

import Link from "next/link";
import { useState } from "react";

type InquiryCategory = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  followUpHint: string;
  examplePrompt: string;
  externalFormParam: string;
};

const CATEGORIES: InquiryCategory[] = [
  {
    id: "rate-review",
    label: "料金見直し相談",
    emoji: "⚡",
    description: "現在の電気料金が適正か、契約見直しで削減余地があるかをご相談ください。",
    followUpHint:
      "公式フォームでは、現在の契約区分（高圧/低圧/特別高圧）、月額料金規模、見直し時期の希望を記入いただくとスムーズです。",
    examplePrompt: "例: 高圧契約、月額 100 万円規模、契約更新が 6 ヶ月後で見直しを検討中",
    externalFormParam: "rate-review",
  },
  {
    id: "tech-question",
    label: "シミュレーター技術質問",
    emoji: "🛠",
    description: "シミュレーターの使い方、診断結果の解釈、機能要望などの技術的なご質問。",
    followUpHint:
      "公式フォームでは、診断時に表示された「結果ID」または該当ページの URL を記入いただくと、担当者が状況を即時に把握できます。",
    examplePrompt: "例: 診断結果ID: ABC-123、リスクスコアの解釈について確認したい",
    externalFormParam: "tech-question",
  },
  {
    id: "lecture-request",
    label: "講演・セミナー依頼",
    emoji: "🎤",
    description: "社内研修、業界セミナー、自治体勉強会などへの講演依頼。",
    followUpHint:
      "公式フォームでは、開催予定日、参加者規模、テーマ希望、オンライン/対面の形式をお知らせいただくと調整がスムーズです。",
    examplePrompt: "例: 自治体職員向け、2026 年 7 月開催、参加 50 名、テーマ「電気代見直し基礎」",
    externalFormParam: "lecture-request",
  },
  {
    id: "other",
    label: "その他のご相談",
    emoji: "💬",
    description: "上記以外のご質問・ご相談（取材依頼、業務提携、メディア掲載など）。",
    followUpHint:
      "公式フォームでは、ご相談の背景・目的・ご希望のスケジュールをできる範囲でお知らせください。",
    examplePrompt: "例: メディア取材、特集記事「2026 年の電気代動向」への監修コメント依頼",
    externalFormParam: "other",
  },
];

const EXTERNAL_FORM_BASE = "https://eic-jp.org/contact";

export default function InquiryTypeSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = CATEGORIES.find((c) => c.id === selectedId) ?? null;
  const externalUrl = selected
    ? `${EXTERNAL_FORM_BASE}?category=${encodeURIComponent(selected.externalFormParam)}`
    : EXTERNAL_FORM_BASE;

  return (
    <section
      aria-label="お問い合わせ種別の選択"
      className="rounded-xl border-2 border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full bg-sky-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          3 ステップでご案内
        </span>
        <span className="text-xs text-slate-600">所要時間 1 分以内</span>
      </div>

      {/* Step 1: 種別を選ぶ */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Step 1. お問い合わせ種別を選んでください
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          該当する種別を選ぶと、入力に役立つヒントが表示されます。種別が分からない場合は「その他」で問題ありません。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {CATEGORIES.map((category) => {
            const isSelected = selectedId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedId(category.id)}
                aria-pressed={isSelected}
                className={`text-left rounded-lg border-2 p-4 transition ${
                  isSelected
                    ? "border-sky-500 bg-sky-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">
                    {category.emoji}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-slate-900">{category.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{category.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: ヒント表示 */}
      {selected ? (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="text-base font-semibold text-slate-900">
            Step 2. 公式フォームでお伺いする内容
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">{selected.followUpHint}</p>
          <div className="mt-3 rounded border border-emerald-300 bg-white p-3">
            <p className="text-xs font-semibold text-emerald-800">記入例</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">{selected.examplePrompt}</p>
          </div>
        </div>
      ) : null}

      {/* Step 3: 送信 */}
      <div className="mt-6">
        <h3 className="text-base font-semibold text-slate-900">
          Step 3. 公式フォームで送信
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          下のボタンから運営団体（一般社団法人エネルギー情報センター）の公式フォームを開きます。{" "}
          {selected
            ? `「${selected.label}」の文脈を引き継いだうえで送信できます。`
            : "種別を選ばずにそのまま開いて送信することもできます。"}
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag("event", "contact_form_submitted", {
                  event_category: "engagement",
                  event_label: selected?.externalFormParam ?? "no-category",
                });
              }
            }}
            className={`inline-flex items-center justify-center rounded-xl px-6 py-4 text-base font-bold shadow-sm transition sm:text-lg ${
              selected
                ? "bg-sky-600 text-white hover:bg-sky-700"
                : "bg-sky-500 text-white hover:bg-sky-600"
            }`}
          >
            {selected
              ? `「${selected.label}」で 2 営業日以内に返信を受け取る →`
              : "公式フォームを開いて送信する（2 営業日以内に返信） →"}
          </a>
          <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            ※ 必須項目: ご質問種別 / メールアドレス / お問い合わせ内容（3 項目）
            <br />
            その他の項目はすべて任意です
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          選び直す場合は上のボタンを再度押してください。{" "}
          <Link href="/" className="text-sky-700 underline-offset-2 hover:underline">
            まず無料診断（5 分）を試す
          </Link>{" "}
          のもおすすめです。
        </p>
      </div>
    </section>
  );
}
