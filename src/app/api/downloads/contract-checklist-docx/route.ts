import { NextResponse } from "next/server";
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";

export const dynamic = "force-static";

export async function GET() {
  const doc = new Document({
    creator: "一般社団法人エネルギー情報センター",
    title: "電力契約レビューチェックリスト",
    sections: [{
      children: [
        new Paragraph({ text: "電力契約レビューチェックリスト", heading: HeadingLevel.HEADING_1 }),
        new Paragraph({ text: "一般社団法人エネルギー情報センター", spacing: { after: 400 } }),
        new Paragraph({ text: "使用方法: 契約書締結前に各項目を確認し、□にチェックしてください。赤字項目はリスク要注意。" }),
        new Paragraph({ text: "", spacing: { after: 200 } }),

        new Paragraph({ text: "1. 基本条件", heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ text: "□ 契約期間（月数・開始日・終了日）が明記されている" }),
        new Paragraph({ text: "□ 契約電力・契約容量が現状と整合している" }),
        new Paragraph({ text: "□ 単価構成（基本料金・電力量料金・燃調・賦課金）が明確" }),
        new Paragraph({ text: "□ 使用量上限・下限の有無を確認" }),

        new Paragraph({ text: "2. 解約・違約金条項（要注意）", heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ children: [new TextRun({ text: "□ 中途解約違約金の算定方法（定額/月額連動/残使用量）", bold: true })] }),
        new Paragraph({ text: "□ 解約予告期間（30日/90日/180日）" }),
        new Paragraph({ text: "□ 自動更新条項の有無と更新拒絶通知期限" }),
        new Paragraph({ text: "□ 電力会社側の契約違反時の解約権有無" }),

        new Paragraph({ text: "3. 料金変動条項", heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ text: "□ 燃料費調整の算定式・上限の有無" }),
        new Paragraph({ text: "□ 市場連動条項の有無（JEPX連動の場合は要詳細確認）" }),
        new Paragraph({ text: "□ 単価改定条項（通知期限・異議申立権利）" }),

        new Paragraph({ text: "4. 不可抗力・免責条項（要注意）", heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ children: [new TextRun({ text: "□ 不可抗力の定義範囲（需給ひっ迫の扱い）", bold: true })] }),
        new Paragraph({ text: "□ 電力会社の賠償責任限定条項" }),
        new Paragraph({ text: "□ 需要家の損害賠償責任の範囲" }),

        new Paragraph({ text: "5. その他重要条項", heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ text: "□ 供給地点特定番号の記載" }),
        new Paragraph({ text: "□ 環境価値（非化石証書等）の扱い" }),
        new Paragraph({ text: "□ 個人情報・データ取扱条項" }),
        new Paragraph({ text: "□ 準拠法・紛争解決方法" }),
        new Paragraph({ text: "□ 印紙税・契約書原本の扱い" }),

        new Paragraph({ text: "6. 事前準備", heading: HeadingLevel.HEADING_2 }),
        new Paragraph({ text: "□ 既存契約の解約通知期限を確認済み" }),
        new Paragraph({ text: "□ 3社以上の相見積を取得済み" }),
        new Paragraph({ text: "□ 法務部門によるレビューを受けた" }),
        new Paragraph({ text: "□ 社内稟議の決裁を取得した" }),

        new Paragraph({ text: "", spacing: { after: 400 } }),
        new Paragraph({ text: "出典: 一般社団法人エネルギー情報センター（CC BY 4.0）" }),
        new Paragraph({ text: "https://simulator.eic-jp.org/electricity-contract-clauses" }),
        new Paragraph({ text: "※ 本テンプレートは一般的ガイドライン。個別案件は法務担当・弁護士の確認を推奨。" }),
      ],
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  return new NextResponse(new Uint8Array(buffer as unknown as ArrayBuffer) as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": 'attachment; filename="contract-checklist.docx"',
      "Access-Control-Allow-Origin": "*",
    },
  });
}
